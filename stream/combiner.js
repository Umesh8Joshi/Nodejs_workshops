var combine = require('stream-combiner')
var split = require('split')
var zlib = require('zlib')
var through = require('through')

module.exports = function () {
  var titles_by_genre = {}
  var grouper = {
    genres: {},
    current_genre: undefined,
    on_row: function (row) {
      if (row.type == 'genre') {
        old_genre = this.current_genre
        this.current_genre = row.name
        if (this.current_genre) {
          this.genres[this.current_genre] = {
            name: this.current_genre,
            books: []
          }
        }
        return this.genres[old_genre]
      }

      if (row.type === 'book') {
        this.genres[this.current_genre].books.push(row.name)
        return null
      }
    }
  }
  return combine(
    split(),
    through(function (text) {
      if (text.length > 0) this.queue(JSON.parse(text))
    }),
    through(function on_write (row) {
      record = grouper.on_row(row)
      if (record) {
        json = JSON.stringify(record)
        this.queue(json)
        this.queue('\n')
      }
    }, function on_end () {
      record = grouper.on_row({type: 'genre', name: undefined})
      json = JSON.stringify(record)
      this.queue(json)
      this.queue('\n')
      this.queue(null)
    }),
    zlib.createGzip()
  )
}

/*
  var combine = require('stream-combiner');
  var through = require('through2');
  var split = require('split');
  var zlib = require('zlib');

  module.exports = function () {
      var grouper = through(write, end);
      var current;

      function write (line, _, next) {
          if (line.length === 0) return next();
          var row = JSON.parse(line);

          if (row.type === 'genre') {
              if (current) {
                  this.push(JSON.stringify(current) + '\n');
              }
              current = { name: row.name, books: [] };
          }
          else if (row.type === 'book') {
              current.books.push(row.name);
          }
          next();
      }
      function end (next) {
          if (current) {
              this.push(JSON.stringify(current) + '\n');
          }
          next();
      }

      return combine(split(), grouper, zlib.createGzip());
  };

*/
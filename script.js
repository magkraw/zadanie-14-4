var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    );
  }
});

var MovieDiscription = React.createClass({
  propTypes: {
    description: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      React.createElement('p', {}, this.props.description)
    );
  }
});

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('li', {},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDiscription, {description: this.props.movie.description})
      )
    )
  }
});

var MovieList = React.createClass({
  propTypes: {
    list: React.PropTypes.array.isRequired
  },

  render: function() {
    return (
      React.createElement('ul', {},
        this.props.list.map(function(movie) {
          return React.createElement(Movie, {movie: movie, key: movie._id})
        })
      )
    )
  }
});

var movies = [
  {
    _id: 1,
    title: 'Kotek',
    description: 'Film o kotku'
  },
  {
    _id: 2,
    title: 'Piesek',
    description: 'Film o piesku'
  },
  {
    _id: 3,
    title: 'Żabka',
    description: 'Film o żabce'
  }
];

var element = React.createElement(MovieList, {list: movies});

ReactDOM.render(element, document.getElementById('zad'));

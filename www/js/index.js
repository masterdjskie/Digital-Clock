$(".menu").click(function(){
   $(this).parent().toggleClass("close");
});

'use strict';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Slider = React.createClass({
  displayName: 'Slider',

  getInitialState: function getInitialState() {
    return {
      activeImage: 0,
      images: this.props.images
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      images: []
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState({
      images: nextProps.images
    });
  },

  getActiveImage: function getActiveImage() {
    var self = this;
    var images = self.state.images;
    var activeImage = null;

    activeImage = React.createElement('img', { key: self.state.activeImage, src: images[self.state.activeImage], alt: images[self.state.activeImage] });

    return activeImage;
  },

  handleSlide: function handleSlide(direction) {

    var currentIndex = this.state.activeImage;
    if (direction === 'prev') {
      --currentIndex;
      if (currentIndex < 0) {
        currentIndex = this.state.images.length - 1;
      }
    } else if (direction === 'next') {
      ++currentIndex;
      if (currentIndex > this.state.images.length - 1) {
        currentIndex = 0;
      }
    }

    this.setState({
      activeImage: currentIndex
    });
  },

  render: function render() {
    var self = this;
    if (self.state.images.length === 0) {
      return null;
    }
    var currentImage = self.getActiveImage();

    return React.createElement(
      'div',
      { className: 'image-slider' },
      React.createElement(
        ReactCSSTransitionGroup,
        {
          transitionName: 'example',
          transitionEnterTimeout: 500,
          transitionLeaveTimeout: 300
        },
        currentImage
      ),
      React.createElement(
        'div',
        { className: 'slider-controls' },
        React.createElement(
          'button',
          { onClick: self.handleSlide.bind(self, 'prev') },
          'prev'
        ),
        React.createElement(
          'button',
          { onClick: self.handleSlide.bind(self, 'next') },
          'next'
        )
      )
    );
  }
});

var imageArray = ['https://images.unsplash.com/photo-1470848051974-964b789cb6fa?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb', 'https://images.unsplash.com/photo-1459603677915-a62079ffd002?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=705&q=80&cs=tinysrgb', 'https://images.unsplash.com/photo-1468930605463-659a967fc4e8?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb', 'https://images.unsplash.com/photo-1470897655254-05feb2d2ab97?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb', 'https://images.unsplash.com/photo-1465281508053-aee07fc08957?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb'];

var App = React.createClass({
  displayName: 'App',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'main' },
      React.createElement(Slider, { images: imageArray })
    );
  }
});
var imageArray = ['https://images.unsplash.com/photo-1470848051974-964b789cb6fa?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb', 'https://images.unsplash.com/photo-1459603677915-a62079ffd002?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=705&q=80&cs=tinysrgb', 'https://images.unsplash.com/photo-1468930605463-659a967fc4e8?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb', 'https://images.unsplash.com/photo-1470897655254-05feb2d2ab97?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb', 'https://images.unsplash.com/photo-1465281508053-aee07fc08957?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb'];

var App = React.createClass({
  displayName: 'App',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'main' },
      React.createElement(Slider, { images: imageArray })
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

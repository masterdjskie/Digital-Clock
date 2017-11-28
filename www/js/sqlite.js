"use strict";

var App = React.createClass({
  displayName: "App",
  getInitialState: function getInitialState() {
    return {
      time: "00:00:00",
      amPm: "am"
    };
  },
  componentDidMount: function componentDidMount() {
    this.loadInterval = setInterval(this.getTime, 1000);
  },
  getTime: function getTime() {
    var _this = this;

    var takeTwelve = function takeTwelve(n) {
      return n > 12 ? n - 12 : n;
    },
        addZero = function addZero(n) {
      return n < 10 ? "0" + n : n;
    };

    setInterval(function () {
      var d = undefined,
          h = undefined,
          m = undefined,
          s = undefined,
          t = undefined,
          amPm = undefined;

      d = new Date();
      h = addZero(takeTwelve(d.getHours()));
      m = addZero(d.getMinutes());
      s = addZero(d.getSeconds());
      t = h + ":" + m + ":" + s;

      amPm = d.getHours() >= 12 ? "pm" : "am";

      _this.setState({
        time: t,
        amPm: amPm
      });
    }, 1000);
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "outer" },
      React.createElement(
        "div",
        { className: "inner" },
        React.createElement(
          "div",
          { className: "most-inner" },
          React.createElement(
            "span",
            { className: this.state.time === "00:00:00" ? "time blink" : "time"
            },
            " ",
            this.state.time
          ),
          React.createElement(
            "span",
            { className: "amPm" },
            this.state.amPm
          )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('clock'));
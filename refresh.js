import React from "react";

const count = 0;

class DashNew extends React.Component {

  render() {
    var myVar = this.props.int2
    function increase() {
      var randomNumber = Math.floor(Math.random()*9) + 1;
      document.getElementById('head1').innerText = randomNumber;
      checkRandom(randomNumber,myVar)
    };

    function checkRandom(rn,mv) {
      if (rn === 8) {
        console.log("Game over");
      } else {
        console.log(rn);
        // setTimeout(increase().bind(this), mv);
        setTimeout(function () {
        increase();
         }, mv);
      }

    };
    return(
      <div>
        <h1 id="head1">Hi</h1>
        <button type="button" onClick={increase}>Refresh me!</button>
        <h2>{this.props.int2}</h2>
      </div>
    );
  }
}

export default DashNew;

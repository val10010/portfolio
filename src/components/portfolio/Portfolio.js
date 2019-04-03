import React from "react";

const Portfolio = props => {
  return (
    <>
      <section id="section-1" className="cd-fixed-background img-1">
        <div className="cd-content">
          <a href="https://val10010.github.io/todo-app-react/" target="_blank"><h2>TODO App</h2></a>
          <p>
            When app loads, user sees an input to enter their TODOs. When user
            types some TODO and hits enter, it’s added to the list below. TODO
            has two states: Active and Completed. User can filter between All,
            Active, and Completed TODOs. I built the app using React.
          </p>
        </div>
      </section>

      <section id="section-2" className="cd-fixed-background img-2">
        <div className="cd-content light-background">
        <a href="https://codesandbox.io/s/2p2l2n00jn" target="_blank"><h2>TIC-TAC-TOE</h2></a>
          <p>
            Tic-tac-toe (American English), noughts and crosses (British
            English) or Xs and Os, is a paper-and-pencil game for two players, X
            and O, who take turns marking the spaces in a 3×3 grid. The player
            who succeeds in placing three of their marks in a horizontal,
            vertical, or diagonal row wins the game. I built the app using React
          </p>
        </div>
      </section>

      <section id="section-3" className="cd-fixed-background img-3">
        <div className="cd-content">
        <a href="https://val10010.github.io/star-wars-react/" target="_blank"><h2>STAR WARS A VISUAL GUIDE </h2></a>
          <p>
            I utilized the Star Wars API (SWAPI) to pull in data about Star Wars
            characters, films, species, starships, vehicles, and planets. I built the app using React.
          </p>
        </div>
      </section>

      <section id="section-4" className="cd-fixed-background img-4">
        <div className="cd-content">
        <a href="https://val10010.github.io/forecast/" target="_blank"><h2>Forecast wether app</h2></a>
          <p>
          The user enters a city into input field and has a detailed, visualised forecast for today.
Clicking on the link below this forecast, user is going to another page, which contains forecast for a couple days ahead (3, 5, week), no matter. From there user can go back. (use React Router).
Under the input field is needed to see last 5 cities you’ve looked for and clicking on them we see forecast for today again. I built the app using React/Redux.
          </p>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

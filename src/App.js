import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="profile-section">
        <div className="img-text-cont">
          <h1 id="twitter">NwosuChimezie11</h1>
          <h1 id="slack">nwosuchimezie95</h1>
          <div id="profile_img"></div>
        </div>
        <div className="links">
          <div className="conts">
            <a href="https://training.zuri.team/" id="btn__zuri">
              Zuri Team
            </a>
          </div>
          <div className="conts">
            <a href="https://training.zuri.team" id="books">
              Zuri Books
            </a>
            <h4 className="title">In Need of a gudie in tech ?</h4>
            <p className="sb">
              This is where you can get cheap and affordable books to kick off
              your tech career
            </p>
          </div>
          <div className="conts">
            <div>
              <a
                href="https://books.zuri.team/python-for-beginners?ref_id=nwosuchimezie95"
                id="btn__python"
              >
                Python Books
              </a>
            </div>
          </div>
          <div className="conts">
            <a href="https://training.zuri.team/" id="pitch">
              Checks for Coders
            </a>
            <p>
              We also offer the services of checking the abilities of aspiring
              developers to recommend a track that will be favorable to the to
              grow
            </p>
          </div>
          <div className="conts">
            <a href="https://training.zuri.team/" id="book__design">
              Design Books
            </a>
            <p>
              This is where you can get cheap and affordable books to kick off
              your career as a designer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

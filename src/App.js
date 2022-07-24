import "./App.css";
import blue1 from "./photos/firstpage_1.jpg"
import blue2 from "./photos/firstpage_2.jpg"
import pink1 from "./photos/secondpage_1.jpg"
import pink2 from "./photos/secondpage_2.png"
import green1 from "./photos/thirdpage_1.jpg"
import green2 from "./photos/thirdpage_2.jpg"
import green3 from "./photos/thirdpage_3.jpg"

function App() {
  return (
    <div className="body">
      <div className="firstpage">
        <div className="firstpage__leftside">
          <div className="firstpage__leftside__toptext">The Random</div>
          <div className="firstpage__leftside__bottext">Photo Booth</div>
          <div className="firstpage__leftside__image">
            <img src={blue1} alt="blue1" width="100%"  className="shadow b20"/>
          </div>
        </div>
        <div className="firstpage__rightside">
          <div className="firstpage__rightside__image">
          <img src={blue2} alt="blue2" width="100%" className="shadow b30"/>
          </div>        
        </div>
      </div>
      <div className="secondpage">
        <div className="secondpage__leftside">
        <img src={pink1} alt="pink1" width="100%" className="shadow b30"/>
        </div>
        <div className="secondpage__rightside">
        <img src={pink2} alt="pink2" width="100%" className="shadow b20"/>
        </div>
      </div>
      <div className="thirdpage">
        <div className="thirdpage__leftside">
        <img src={green1} alt="green1" width="100%" className="shadow b15"/>
        </div>
        <div className="thirdpage__middle">
        <img src={green2} alt="green2" width="100%" className="shadow b20"/>
        </div>
        <div className="thirdpage__rightside">
        <img src={green3} alt="green3" width="100%" className="shadow b15"/>
        </div>
      </div>
    </div>

  );
}

export default App;

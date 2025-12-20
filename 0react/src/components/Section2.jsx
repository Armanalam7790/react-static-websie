import React from "react";
import Sec2left from "./Sec2left";
import Secright from "./Secright";
import Card from "./Card";

const Section2 = () => {
  return (
    <div>
      <div className="sec2">
        <Sec2left />
        <Secright />
      </div>

      <div className="cards">
      
        <div className="first">

            <div className="gola"></div>
            <h3>Professional hard courts <span> with tournament-grade lighting & climate control -play in perfect conditions, in</span> any season.</h3>

            <div className="inner">
                <div className="sqr">
                    <div className="r"></div>
                </div>
                <div className="text">
                    <h4>Game Mode</h4>
                </div>
            </div>
        </div>



        <div className="secend">
          
        </div>

        <div className="third">
            <div className="top">
                <h1>100+</h1>
                <h4>Pro Coaches</h4>
                <p>
                    Certified professionals ready to boost your game from first serve to tournment level.

                </p>
            </div>


            <div className="bottom" >
                
                <div className="dst">
                    <div className="a">
                        <p>Beginner</p>
                    </div>

                    <div className="b">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>


                    <div className="c">
                        <p>55</p>
                    </div>
                </div>

                 <div className="dst">
                    <div className="a">
                        <p>Intermediate</p>
                    </div>

                    <div className="b">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        
                    </div>


                    <div className="c">
                        <p>40</p>
                    </div>
                </div>

                 <div className="dst">
                    <div className="a">
                        <p>Advanced</p>
                    </div>

                    <div className="b">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                      
                    </div>


                    <div className="c">
                        <p>35</p>
                    </div>
                </div>
                

            </div>

        </div>

      </div>
    </div>
  );
};

export default Section2;

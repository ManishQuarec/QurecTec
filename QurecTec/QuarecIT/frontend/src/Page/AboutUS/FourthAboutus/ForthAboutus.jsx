import React, { useState } from "react";
import "./ForthAboutus.css";

function ForthAboutus() {
  const [timer, setTimer] = useState(false);

  var $cont = document.querySelector(".cont");
  var $elsArr = [].slice.call(document.querySelectorAll(".el"));
  var $closeBtnsArr = [].slice.call(
    document.querySelectorAll(".el__close-btn")
  );

  setTimeout(function () {
    setTimer(true);
  }, 200);

  $elsArr.forEach(function ($el) {
    $el.addEventListener("click", function () {
      if (this.classList.contains("s--active")) return;
      $cont.classList.add("s--el-active");
      this.classList.add("s--active");
    });
  });

  $closeBtnsArr.forEach(function ($btn) {
    $btn.addEventListener("click", function (e) {
      e.stopPropagation();
      $cont.classList.remove("s--el-active");
      document.querySelector(".el.s--active").classList.remove("s--active");
    });
  });
  return (
    <div className="Complete">
      <div className="dnt">
        <h1>A Glimpse of the company's festivity in pictures</h1>
      </div>
      <div className={timer ? "cont" : "cont s--inactive"}>
        <div className="cont__inner">
          <div className="el">
            <div className="el__overflow">
              <div className="el__inner">
                <div className="el__bg"></div>
                <div className="el__preview-cont">
                  {/* <h2 className="el__heading">Section 1</h2> */}
                </div>
                <div className="el__content">
                  <div className="el__text">Whatever</div>
                  <div className="el__close-btn"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="el">
            <div className="el__overflow">
              <div className="el__inner">
                <div className="el__bg"></div>
                <div className="el__preview-cont">
                  {/* <h2 className="el__heading">Section 2</h2> */}
                </div>
                <div className="el__content">
                  <div className="el__text">Whatever</div>
                  <div className="el__close-btn"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="el">
            <div className="el__overflow">
              <div className="el__inner">
                <div className="el__bg"></div>
                <div className="el__preview-cont">
                  {/* <h2 className="el__heading">Section 3</h2> */}
                </div>
                <div className="el__content">
                  <div className="el__text">Whatever</div>
                  <div className="el__close-btn"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="el">
            <div className="el__overflow">
              <div className="el__inner">
                <div className="el__bg"></div>
                <div className="el__preview-cont">
                  {/* <h2 className="el__heading">Section 4</h2> */}
                </div>
                <div className="el__content">
                  <div className="el__text">Whatever</div>
                  <div className="el__close-btn"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="el">
            <div className="el__overflow">
              <div className="el__inner">
                <div className="el__bg"></div>
                <div className="el__preview-cont">
                  {/* <h2 className="el__heading">Section 5</h2> */}
                </div>
                <div className="el__content">
                  <div className="el__text">Whatever</div>
                  <div className="el__close-btn"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForthAboutus;

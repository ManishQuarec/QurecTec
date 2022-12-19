import React from "react";
import "./ThirdAbout.css";
import male from "../../../Image/male.png";
import female from "../../../Image/female.png";

function ThirdAboutUs() {
  return (
    <div className="ThirdAboutUs">
      <div className="Ourdirector">
        <p> Our Director</p>
      </div>

      <div className="full-director">
        {/* <div className="Director-1">
            <img src={male} alt="Male"  className="male"/>
          <div className="Name-1">Mr.Binod</div>
          <div className="designation-1">CEO</div>
          <p className="content-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            commodi placeat recusandae odit eaque blanditiis, provident
            consequatur fugiat at quasi culpa autem deserunt minima optio itaque
            debitis ratione temporibus voluptates perspiciatis vel nulla
            impedit! Cum iure dolores reprehenderit! Fugit sapiente magnam natus
            maxime amet quam! Delectus a illo perferendis atque commodi, vitae
            quaerat natus aspernatur iste tempora obcaecati libero facere
            explicabo quas impedit consectetur, aliquid nostrum esse quis nemo?
            Commodi totam rerum, dolorem rem, at, aut nisi neque sit facere
            maxime maiores cum voluptatibus
          </p>
        </div> */}
        <div className="Director-2">
          <img src={female} alt="female" className="female" />
          <div className="Name-2">Mr.Binod</div>
          <div className="designation-2">CEO</div>
          <p className="content-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit
            aspernatur quod dolore ab assumenda deserunt ducimus. Tempore
            aliquid eveniet mollitia minus cupiditate magni officiis, quos
            fugiat soluta accusantium. Illo soluta tempore non cupiditate
            possimus, placeat veniam similique voluptas! Magnam vitae, velit
            accusamus deleniti error et doloremque! Temporibus alias
            necessitatibus eveniet quasi? Ullam ipsum ex dicta veritatis magni
            porro non ducimus odit asperiores nisi voluptate dolores, quis
            dolore. Eos odio alias doloremque, facere vero quos expedita
            distinctio suscipit,
          </p>
        </div>
        {/* <div className="Director-3">
        <img src={male} alt="Male"  className="male2"/>
          <div className="Name-3">Mr.Binod</div>
          <div className="designation-3">CEO</div>
          <p className="content-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum rerum
            voluptas quibusdam a recusandae deserunt aliquid incidunt nihil
            ipsum, magnam excepturi aliquam, rem illo. Molestias alias cumque,
            ullam pariatur maxime harum eius nam asperiores modi tempore sed
            similique? Nihil harum beatae provident incidunt a dicta corporis
            autem, maxime ipsam cupiditate velit dignissimos molestias numquam,
            est officiis. Aut non libero molestiae quidem eius natus ab totam
            voluptate consequuntur culpa nihil quam necessitatibus consequatur
            temporibus laudantium cum fugit quia quis, odio harum laboriosam
            itaque aliquid iure? Neque adipisci nesciunt omnis harum tenetur!
            Delectus, illo. Esse corrupti minus aliquid id, debitis nemo et.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default ThirdAboutUs;

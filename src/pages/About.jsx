import React from "react";
import Banner from "../assets/1beef.jpg";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>
      <div className="aboutBottom">
        <h3>About Us</h3>
        <p>
          Lezzetin ve kalitenin buluşma noktası olan Hamburger 34, 2020 yılında
          İstanbul'da kurulmuştur. Kuruluşumuzdan bu yana, misafirlerimize eşsiz
          bir hamburger deneyimi sunmayı hedefliyoruz. Amacımız, sadece en iyi
          malzemeleri kullanarak hazırladığımız leziz hamburgerlerimizle değil,
          aynı zamanda samimi ve sıcak atmosferimizle de öne çıkmaktır. Taze
          malzemeler, özel soslar ve usta ellerden çıkan tariflerle her bir
          hamburgerimizi özenle hazırlıyoruz, Hamburger 34 sizlere en iyi hizmeti sunmak için burada.
          Lezzetli hamburgerlerimizin yanı sıra, geniş içecek ve yan lezzetler
          menümüzle de damak zevkinize hitap ediyoruz. 
        </p>
      </div>
    </div>
  );
};

export default About;

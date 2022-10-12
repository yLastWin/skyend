import React from "react";
import "./team.css";
import Header from "../../layouts/header/header.jsx";
import Main from "../../layouts/main/main.jsx";
import Footer from "../../layouts/footer/footer.jsx";
import Card from "../../components/card/card.jsx";
import teamData from "../../components/data/teamData.json";

const Team = () => {
  const TeamTree = () => {
    return (
      <div className="teamContainer">
        <h2>GET TO KNOW OUR TEAM</h2>
        <div className="teamTree">
          {teamData.map((data) => (
            <Card
              imgsrc={data.url}
              cname={data.name}
              position={data.position}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <Main dynamicComponent={TeamTree()} />

      <Footer />
    </div>
  );
};

export default Team;

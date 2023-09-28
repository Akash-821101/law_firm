import React from "react";
import TeamCard from "./Card/TeamCard";
import profile1 from "../assets/profile4.png";
import profile2 from "../assets/profile5.png";
import profile3 from "../assets/profile6.png";
import profile4 from "../assets/profile7.png";
import profile5 from "../assets/profile8.png";
import profile7 from "../assets/profile9.png";

const TeamMember = () => {
  return (
    <div className="teamMember">
      <h1>Our Team</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TeamCard title="Danial Def" image={profile1} subTitle="470 Cases" />
        <TeamCard title="Sanfole" image={profile2} subTitle="470 Cases" />
        <TeamCard title="Cesforila" image={profile3} subTitle="470 Cases" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TeamCard title="Colleen" image={profile4} subTitle="470 Cases" />
        <TeamCard title="Haldone" image={profile5} subTitle="470 Cases" />
        <TeamCard title="Nik Jeo" image={profile7} subTitle="470 Cases" />
      </div>
    </div>
  );
};

export default TeamMember;

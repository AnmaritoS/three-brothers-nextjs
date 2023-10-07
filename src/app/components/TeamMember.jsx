import React, { useState } from "react";

function TeamMember({ name, position, gender }) {
  return (
    <div className="h-full flex flex-col items-center text-center">
      <img
        alt="team"
        className="flex-shrink-0 rounded-lg w-2/3 h-auto object-cover object-center mb-4"
        src={`${gender === "male" ? "/businessman.png" : "/businesswoman.png"}`}
      />
      <div className="w-full text-xl font-bold">
        <h2 className="text-gray-900">{name}</h2>
        <h3 className="text-gray-700"> {position} </h3>
      </div>
    </div>
  );
}

export default TeamMember;

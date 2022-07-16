import React from "react";

interface IMember {
  name: string;
  description: string;
  img: string;
  hashtags: Array<string>;
}

export const GridCard = (member: IMember) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg animacion-members">
      <div className="w-full h-96">
        <img
          className="h-full w-full object-center object-cover"
          src={member.img}
          alt="..."
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{member.name}</div>
        <p className="text-gray-700 text-base">{member.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {member.hashtags.map((h: string, inde) => {
          return (
            <span
              key={inde}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {h}
            </span>
          );
        })}
      </div>
    </div>
  );
};

import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
}

export default TeamMember;
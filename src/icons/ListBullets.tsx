import React from 'react';

const ListBullets = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="192"
      height="192"
      fill="#000000"
      viewBox="0 0 256 256">
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="88"
        y1="64"
        x2="216"
        y2="64"
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"></line>
      <line
        x1="88"
        y1="128"
        x2="216"
        y2="128"
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"></line>
      <line
        x1="88"
        y1="192"
        x2="216"
        y2="192"
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"></line>
      <circle cx="44" cy="64" r="12"></circle>
      <circle cx="44" cy="128" r="12"></circle>
      <circle cx="44" cy="192" r="12"></circle>
    </svg>
  );
};

export default ListBullets;

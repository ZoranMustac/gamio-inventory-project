import "./App.css";

export default class Styles {
  claimedStyle = `
    bg-lime-100
    w-16
    rounded-sm
    font-semibold
    text-lime-400
    text-xs
  `;

  ownedStyle = `
    bg-blue-500
    w-14
    rounded-sm
    font-semibold
    text-white
    text-xs
  `;

  usedStyle = `
    bg-gray-300
    w-10
    rounded-sm
    font-semibold
    text-gray-500
    text-xs
  `;

  shippedStyle = `
  font-semibold
  text-black
  text-xs
  `;

  backgroundWhite = `bg-white shadow-2xl`;

  backgroundGray = `bg-gray-100 shadow-2xl`;

  backgroundShipped = `border-color bg-gray-100 shadow-xl`;
}

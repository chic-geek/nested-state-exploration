const generateColor = () => {
  const colorsArr = [
    "#001f3f",
    "#0074D9",
    "#7FDBFF",
    "#39CCCC",
    "#3D9970",
    "#2ECC40",
    "#01FF70",
    "#FFDC00",
    "#FF851B",
    "#FF4136",
    "#85144b",
    "#F012BE",
    "#B10DC9",
    "#111111",
    "#AAAAAA",
    "#DDDDDD",
  ];

  let result = colorsArr[Math.floor(Math.random() * colorsArr.length)];
  return result;
};

export default generateColor;

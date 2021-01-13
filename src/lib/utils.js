const getContrast = (c) => {
  c = c.replace("#", "");
  var r = parseInt(c.substr(0, 2), 16);
  var g = parseInt(c.substr(2, 2), 16);
  var b = parseInt(c.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
};

const rgbToHex = (a) => {
  a = a.replace(/[^\d,]/g, "").split(",");
  return (
    "#" +
    ((1 << 24) + (+a[0] << 16) + (+a[1] << 8) + +a[2]).toString(16).slice(1)
  );
};

export { getContrast, rgbToHex };

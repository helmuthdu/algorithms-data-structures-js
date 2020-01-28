// --- Directions
// --- Examples
//   combine("abc", "", 0) == a, ab, abc, ac, b, bc, c;

const combine = (instr, outstr = '', index = 0, out = []) => {
  for (let i = index; i < instr.length; i++) {
    // append the character
    outstr = outstr.concat(instr.charAt(i));

    //push the result
    out.push(outstr);

    // make a recursive call at i + 1
    combine(instr, outstr.substr(0, outstr.length - 1), i + 1, out);
  }

  return out;
};

module.exports = combine;

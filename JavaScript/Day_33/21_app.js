let country = ["Australia", "Germany", "United state of america"];

function longestCountryName(country, str) {
  let ansIdx = 0;
  for (let i = 0; i < country.length; i++) {
    let ansLen = country[ansIdx].length;
    let currLen = country[i].length;
    if (currLen > ansLen) {
      ansIdx = i;
    }
  }
  console.log(ansIdx);
}
longestCountryName(country);

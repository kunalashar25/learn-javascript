const hasDriverLicence = true;
const hasGoodVision = true;

console.log(hasDriverLicence && hasDriverLicence); // true
console.log(hasDriverLicence && !hasDriverLicence); // false
console.log(hasDriverLicence || hasDriverLicence); // true
console.log(hasDriverLicence || !hasDriverLicence); // true
console.log(!hasDriverLicence || !hasDriverLicence); // false
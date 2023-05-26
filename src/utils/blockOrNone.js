const blockOrNone = (selectedValue, linkTypes) => {
  let valid = false;
  linkTypes.forEach(element => {
    if (selectedValue.linkType === element) {
      valid = true;
    }
  });
  return valid;
};

export default blockOrNone;

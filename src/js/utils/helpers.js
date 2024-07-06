function capitalizeFirstLetter(string = '') {
  string = string.toString();
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeFirstLetter };

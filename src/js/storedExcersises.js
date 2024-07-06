export default new Proxy(
  {
    favoritesList: JSON?.parse(localStorage.getItem('favorites')) ?? [],
  },
  {
    set(target, property, value) {
      target[property] = value;
      if (property === 'favoritesList') {
        localStorage.setItem('favorites', JSON.stringify(value));
      }
      return true;
    },
  }
);

export default {
  _onNavItemTap(e) {
    const index = e.currentTarget.dataset.index;

    if (this.onDropdownNavItemTap) {
      this.onDropdownNavItemTap(e, index);
    } else {
      console.warn('no onDropdownNavItemTap method');
    }
  },
  _catchListItemTap(e) {
    const { index, parentIndex, title } = e.currentTarget.dataset;

    if (this.catchDropdownNavItemTap) {
      this.catchDropdownNavItemTap(e, parentIndex, index, title);
    } else {
      console.warn('no catchDropdownNavItemTap method');
    }
  },
  _catchBgTap(e) {
    if (this.catchDropdownBgTap) {
      this.catchDropdownBgTap(e);
    } else {
      console.warn('no catchDropdownBgTap method');
    }
  }
};
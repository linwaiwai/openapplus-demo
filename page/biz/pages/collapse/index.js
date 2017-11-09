Page({
  data: {
    collapseData: {
      onTitleTap: 'handleTitleTap',
      panels: [{
        title: 'Title 1',
        content: 'Content 1',
        expanded: true,
      }, {
        title: 'Title 2',
        content: 'Content 2',
        expanded: false,
      }],
    },
  },
  handleTitleTap(e) {
    const { index } = e.target.dataset;
    const panels = this.data.collapseData.panels;
    // android does not supprt Array findIndex
    panels[index].expanded = !panels[index].expanded;
    this.setData({
      collapseData: {
        ...this.data.collapseData,
        panels: [...panels],
      },
    });
  },
});

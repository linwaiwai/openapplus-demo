import lifecycle from '/util/lifecycle';

Page({
  ...lifecycle,
  data: {
    pageName: 'biz/index',
    pageInfo: {
      pageId: 0,
    },
    curIndex: 0,
    arr: {
      onItemTap: 'onGridItemTap',
      list: [{
        icon: '/image/biz_collapse.png',
        title: '折叠面板',
        entitle: 'Collapse',
        page: '/page/biz/pages/collapse/index',
      }, {
        icon: '/image/biz_dropdown.png',
        title: '下拉菜单',
        entitle: 'Dropdown',
        page: '/page/biz/pages/dropdown/index',
      }, {
        icon: '/image/biz_errorview.png',
        title: '通用错误页',
        entitle: 'ErrorView',
        page: '/page/biz/pages/error-view/index',
      }, {
        icon: '/image/biz_grid.png',
        title: '宫格',
        entitle: 'Grid',
        page: '/page/biz/pages/grid/index',
      }, {
        icon: '/image/biz_list.png',
        title: '列表',
        entitle: 'List',
        page: '/page/biz/pages/list/index',
      }, {
        icon: '/image/biz_tag.png',
        title: '标签',
        entitle: 'Tag',
        page: '/page/biz/pages/tag/index',
      }],
    },
  },
  onGridItemTap(e) {
    const page = this.data.arr.list[e.target.dataset.index].page;
    my.navigateTo({ url: page });
  },
});

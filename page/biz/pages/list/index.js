import list from '../../components/list';

Page({
  ...list,
  data: {
    listData: {
      onItemTap: 'handleListItemTap',
      header: 'list1',
      data: [
        {
          title: '标题文字',
          extra: '基本使用'
        },
        {
          thumb: 'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
          title: '标题图片',
          arrow: 'horizontal',
        },
        {
          title: '标题文字',
          arrow: 'horizontal',
          extra: '带箭头'
        },
        {
          thumb: 'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
          title: '标题文字',
          arrow: 'horizontal',
          extra: '完整使用'
        },
        {
          title: '标题文字不换行很长很长很长很长很长很长很长很长很长很长',
          arrow: 'horizontal',
        },
        {
          title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
          arrow: 'horizontal',
          textMode: 'wrap'
        },
        {
          title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
          extra: '没有箭头',
          textMode: 'wrap'
        },
        {
          title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
          extra: '子元素垂直对齐',
          textMode: 'wrap',
          align: 'top'
        },
      ]
    },
  },
  handleListItemTap(e) {
    my.showToast({
      content: `第${e.currentTarget.dataset.index}个Item`,
      success: (res) => {

      },
    });
  }
})
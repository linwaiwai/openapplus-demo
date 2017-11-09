Page({
  actionSheetTap() {
    const items = ['A', 'B', 'C'];
    my.showActionSheet({
      title: '选择',
      cancelButtonText: 'Cancel',
      items,
      success({ index }) {
        if (index > -1) {
          my.alert({ title: `你选中了 ${items[index]}` });
        } else {
          my.alert({ title: '你取消了' });
        }
      },
    });
  },
});

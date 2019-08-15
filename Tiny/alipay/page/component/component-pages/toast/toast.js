Page({
  showToast() {
    my.showToast({
      content: '成功',
      type: 'success',
      duration: 3000,
      success() {
        console.log('toast end');
      },
    });
  },
  hideToast() {
    my.hideToast({
      success() {
        console.log('toast hide');
      },
    });
  },
});

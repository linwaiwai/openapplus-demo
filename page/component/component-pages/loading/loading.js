Page({
  loadingTap() {
    my.showLoading({
      content: '你好啊...',
      delay: 1000,
    });

    setTimeout(() => {
      my.hideLoading();
    }, 3000);
  },
});

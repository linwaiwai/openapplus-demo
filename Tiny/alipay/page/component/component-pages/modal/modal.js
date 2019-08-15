Page({
  modalTap1() {
    my.alert({
      title: '亲',
      content: '您有新的快递消息',
      buttonText: '我知道了',
      success() {
        console.log('用户点击了「我知道了」');
      },
      fail() {
        console.log('fail');
      },
      complete() {
        console.log('complete');
      },
    });
  },
  modalTap2() {
    my.confirm({
      title: '亲',
      content: '您有新的快递消息',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success({ confirm }) {
        console.log(`用户点击了 ${confirm ? '「确定」' : '「取消」'}`);
      },
      fail() {
        console.log('fail');
      },
      complete() {
        console.log('complete');
      },
    });
  },
});

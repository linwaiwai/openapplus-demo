Page({
  data: {
    canReLaunch: !!my.reLaunch,
  },
  navigateBackMiniProgram(e){
    my.navigateBackMiniProgram({
      extraData:{
        state: 1,
        orderNo: new Date().getTime()
      },
      success: function(e){
        console.debug("success...");
      },
      fail: function(e){
        console.debug("fail...");
      },
      complete: function(e){
        console.debug("complete...");
      }
    });
  },
  navigateToMiniProgram(e){
    my.navigateToMiniProgram({
      appId:"2dea301b2f4c482dbccb4d50e30981de",
      path:"pages/index/index",
      extraData:{
        mch_id: '10000100',
        device_info: '设备信息',
        body: '测试支付',
        detail: '详情',
        product_id: '1',
        id: '1',
        orderNo: new Date().getTime(),
        amount: '1',
        appId: 'homestay',
        payType: '1',
        currencyAmount:'1'
      },
      success: function(e){
        console.debug("success...");
      },
      fail: function(e){
        console.debug("fail...");
      },
      complete: function(e){
        console.debug("complete...");
      }
    });
  },
  navigate(e) {
    const { url, openType = 'navigateTo' } = e.target.dataset;
    my[openType]({ url });
  },
});

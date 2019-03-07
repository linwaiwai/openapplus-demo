Page({
  vibrate() {
    my.vibrate({
      success: () => {
        my.alert({ title: '震动起来了'});
      }
    });
  },
})

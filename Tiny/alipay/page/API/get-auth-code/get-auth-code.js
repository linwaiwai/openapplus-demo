Page({
  onLoad() {},
  data: {},
  getAuthCode: () => {
    my.getAuthCode({
      jsAppKey: 'c2f7494c0d1f40a8871acc7934cb80c5',
      scopes: 'auth_user',
      success: ({ authCode }) => {
        my.alert({
          content: authCode,
        });
      },
    });
  },
});

import example from './example.js';

Page({
  onLoad() {
    this.context = my.createCanvasContext('canvas')

    var methods = Object.keys(example)
    this.setData({
      methods: methods
    })

    var that = this
    methods.forEach(function (method) {
      that[method] = function () {
        example[method](that.context)
        that.context.draw();
      }
    })
  },
  log(e) {
    console.log('canvas', e);
  },
  toTempFilePath() {
    this.context.toTempFilePath({
      success(res) {
        my.previewImage({
          urls: [res.apFilePath],
        });
      },
      fail(res) {
        my.alert({
          title: 'toTempFilePath',
          content: `error: ${res.error}`,
        })
      }
    })
  }
})

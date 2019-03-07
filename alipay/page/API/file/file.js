Page({
  data: {
    tempFilePath: '',
    savedFilePath: '',
    dialog: {
      hidden: true
    }
  },
  onLoad() {
    my.getStorage({
      success: (savedFilePath) => {
        this.setData({
          savedFilePath,
        });
      },
    });
  },
  chooseImage() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        this.setData({
          tempFilePath: res.tempFilePaths[0]
        })
      }
    })
  },
  saveFile() {
    if (this.data.tempFilePath.length > 0) {
      var that = this
      my.saveFile({
        tempFilePath: this.data.tempFilePath,
        success(res) {
          that.setData({
            savedFilePath: res.savedFilePath
          })
          my.setStorage({ key: 'savedFilePath', data: res.savedFilePath })
          that.setData({
            dialog: {
              title: '保存成功',
              content: '下次进入应用时，此文件仍可用',
              hidden: false
            }
          })
        },
        fail(res) {
          that.setData({
            dialog: {
              title: '保存失败',
              content: '应该是有 bug 吧',
              hidden: false
            }
          })
        }
      })
    }
  },
  clear() {
    my.setStorage({ key: 'savedFilePath', data: '' })
    this.setData({
      tempFilePath: '',
      savedFilePath: ''
    })
  },
  confirm() {
    this.setData({
      'dialog.hidden': true
    })
  }
})

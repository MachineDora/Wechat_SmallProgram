// pages/text/text.js
var util = require("../../utils/util.js")
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: '请输入',
    message: [],
    price: '',
    time: "",
    zi: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this

    var TIME = util.formatTime(new Date());
    this.setData({
      time: TIME,
    })

    wx.getStorage({
      key: 'list',
      success: function (res) {
        self.setData({
          message: res.data
        })
      },
    })
    wx.getStorage({
      key: 'content',
      success: function (res) {
        self.setData({
          content: res.data[1],
          price:res.data[1],
          zi:res.data[1].length
        })
      },
    })
    wx.getStorage({
      key: 'setting',
      success: function (res) {
        if (res.data[2] == 0) {
          wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#EEAD0E',
          })
          self.setData({
            bg: "url(https://s2.ax1x.com/2019/06/04/VtubbF.jpg)",
          })
        }
        if (res.data[2] == 1) {
          wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#32CD32',
          })
          self.setData({
            bg: "url(https://s2.ax1x.com/2019/06/04/VtKSv6.jpg)",
          })
        }
        if (res.data[2] == 2) {
          wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#00B2EE',
          })
          self.setData({
            bg: "url(https://s2.ax1x.com/2019/06/04/VtKkUH.jpg)",
          })
        }
        if (res.data[2] == 3) {
          wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#FF69B4',
          })
          self.setData({
            bg: "url(https://s2.ax1x.com/2019/06/04/VtKZ8I.jpg)",
          })
        }
      },
    })
  },

  cache: function (e) {
    var self = this
    self.setData({
      price: e.detail.value,
      zi: e.detail.cursor
    })
  },

  Save: function (e) {
    var self = this
    var temp = []
    wx.getStorage({
      key: 'content',
      success: function (res) {
        temp.splice(0, 0, self.data.price)
        temp.splice(0, 0, self.data.time)
        self.data.message.splice(0, 0, temp)
        self.data.message.splice(res.data[0]+1, 1)
        wx.setStorageSync('list', self.data.message)
        wx.showToast({
          title: '保存成功',
          icon: 'succes',
          success: function () {
            setTimeout(function () {
              wx.navigateBack({
                delta: 1
              })
            }, 1000);
          }
        })
      },
    })
  },

  Delete: function(e){
    var self=this
    wx.getStorage({
      key: 'content',
      success: function (res) {
        self.data.message.splice(res.data[0], 1)
        wx.setStorageSync('list',self.data.message)
      },
    }),
      wx.showToast({
        title: '删除成功',
        icon: 'succes',
        success: function () {
          setTimeout(function () {
            wx.navigateBack({
              delta: 1
            })
          }, 1000);
        }
      })
  },
})
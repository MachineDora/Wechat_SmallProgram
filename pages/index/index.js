//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    message:[],
    nothing1:"",
    nothing2:"",
    SearchKey: "",
    SearchList: [],
    searchValue: ""
  },
  onLoad: function (options) {
    this.setData({ SearchList: [] });
    this.setData({ SearchKey: '' });
    this.setData({ searchValue: '' });
    var self=this;



    wx.getStorage({
      key: 'list',
      success: function (res) {
        if (res.data.length == 0) {
          self.setData({
            nothing1: "什么都还没有呢~",
            nothing2: "赶快添加你的第一个笔头吧~",
            message: []
          })
        }
        else{
          self.setData({
            nothing1: "",
            nothing2: "",
            message: res.data
          })
        }
      },
      fail:function(){
        wx.setStorage({
          key: 'list',
          data: [],
        })
        self.setData({
          nothing1: "什么都还没有呢~",
          nothing2: "赶快添加你的第一个笔头吧~",
          message: []
        })
      }
    })

    wx.getStorage({
      key: 'setting',
      success: function (res) { 
        
      },
      fail: function () {
        wx.setStorage({
          key: 'setting',
          data: [1, 3, 0],
        })
        self.setData({
          font_size: "35rpx",
          color: "#000000",
          background_Color: "#EEAD0E",
          bg: "url(https://s2.ax1x.com/2019/06/04/VtubbF.jpg)",
        })
        wx.setNavigationBarColor({
          frontColor: '#000000',
          backgroundColor: '#EEAD0E',
        })
      }
    })

    wx.getStorage({
      key: 'setting',
      success: function(res) {
        if(res.data[0]==0){
          self.setData({
            font_size: "30rpx",
          })
        }
        if (res.data[0] == 1) {
          self.setData({
            font_size: "35rpx",
          })
        }
        if (res.data[0] == 2) {
          self.setData({
            font_size: "40rpx",
          })
        }
        if (res.data[0] == 3) {
          self.setData({
            font_size: "50rpx",
          })
        }
        if (res.data[1] == 0) {
          self.setData({
            color: "#FFB90F",
          })
        }
        if (res.data[1] == 1) {
          self.setData({
            color: "#E066FF",
          })
        }
        if (res.data[1] == 2) {
          self.setData({
            color: "#32CD32",
          })
        }
        if (res.data[1] == 3) {
          self.setData({
            color: "#000000",
          })
        }
        if (res.data[1] == 4) {
          self.setData({
            color: "#4876FF",
          })
        }
        if (res.data[1] == 5) {
          self.setData({
            color: "#FF4040",
          })
        }
        if (res.data[2] == 0) {
          wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#EEAD0E',
          })
          self.setData({
            background_Color: "#EEAD0E",
            bg: "url(https://s2.ax1x.com/2019/06/04/VtubbF.jpg)",
          })
        }
        if (res.data[2] == 1) {
          wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#32CD32',
          })
          self.setData({
            background_Color: "#32CD32",
            bg: "url(https://s2.ax1x.com/2019/06/04/VtKSv6.jpg)",
          })
        }
        if (res.data[2] == 2) {
          wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#00B2EE',
          })
          self.setData({
            background_Color: "#00B2EE",
            bg: "url(https://s2.ax1x.com/2019/06/04/VtKkUH.jpg)",
          })
        }
        if (res.data[2] == 3) {
          wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#FF69B4',
          })
          self.setData({
            background_Color: "#FF69B4",
            bg: "url(https://s2.ax1x.com/2019/06/04/VtKZ8I.jpg)",
          })
        }
      },
    })

   
  },
  onShow: function (options) {
    this.setData({ SearchList: [] });
    this.setData({ SearchKey: '' });
    this.setData({ searchValue: '' });
    const self = this;
    wx.getStorage({
      key: 'list',
      success: function (res) {
        if (res.data.length == 0) {
          self.setData({
            nothing1: "什么都还没有呢~",
            nothing2: "赶快添加你的第一个笔头吧~",
            message: []
          })
        }
        else {
          self.setData({
            nothing1: "",
            nothing2: "",
            message: res.data
          })
        }
      },
    })
    wx.getStorage({
      key: 'setting',
      success: function (res) {
        if (res.data[0] == 0) {
          self.setData({
            font_size: "30rpx",
          })
        }
        if (res.data[0] == 1) {
          self.setData({
            font_size: "35rpx",
          })
        }
        if (res.data[0] == 2) {
          self.setData({
            font_size: "40rpx",
          })
        }
        if (res.data[0] == 3) {
          self.setData({
            font_size: "50rpx",
          })
        }
        if (res.data[1] == 0) {
          self.setData({
            color: "#FFB90F",
          })
        }
        if (res.data[1] == 1) {
          self.setData({
            color: "#E066FF",
          })
        }
        if (res.data[1] == 2) {
          self.setData({
            color: "#32CD32",
          })
        }
        if (res.data[1] == 3) {
          self.setData({
            color: "#000000",
          })
        }
        if (res.data[1] == 4) {
          self.setData({
            color: "#87CEEB",
          })
        }
        if (res.data[1] == 5) {
          self.setData({
            color: "#FF4040",
          })
        }
        if (res.data[2] == 0) {
          wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#EEAD0E',
          })
          self.setData({
            background_Color: "#EEAD0E",
            bg:"url(https://s2.ax1x.com/2019/06/04/VtubbF.jpg)",
          })
        }
        if (res.data[2] == 1) {
          wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#32CD32',
          })
          self.setData({
            background_Color: "#32CD32",
            bg: "url(https://s2.ax1x.com/2019/06/04/VtKSv6.jpg)",
          })
        }
        if (res.data[2] == 2) {
          wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#00B2EE',
          })
          self.setData({
            background_Color: "#00B2EE",
            bg: "url(https://s2.ax1x.com/2019/06/04/VtKkUH.jpg)",
          })
        }
        if (res.data[2] == 3) {
          wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#FF69B4',
          })
          self.setData({
            background_Color: "#FF69B4",
            bg: "url(https://s2.ax1x.com/2019/06/04/VtKZ8I.jpg)",
          })
        }
      },
    })
  },
  //事件处理函数
  clickMe:function(options) {
    
    let index = options.currentTarget.dataset.index
    let message = []
    message = this.data.message
    wx.setStorage({
      key: 'content',
      data: [index,message[index][1]],
    })
    wx.navigateTo({
      url: '/pages/text/text'
    })
  },
  click_add_text(){
    wx.navigateTo({
      url: '/pages/add/add'
    })
  },
  click_setting() {
    wx.navigateTo({
      url: '/pages/options/options'
    })
  },
  saveSearch: function () {
    wx.setStorageSync("SearchList", this.data.SearchList);
  },
  searchInput: function (e) {
    this.setData({
      SearchKey: e.detail.value
    });
    var that = this;
    var res = [];
    var todo = this.data.message;
    for (var i in todo) {
      if (todo[i][1].indexOf(this.data.SearchKey) != -1) {
        res.push({ time: todo[i][0], message: todo[i][1], pos: i });
      }
       
    }
    if(todo.length==0){
      that.setData({
        SearchList: res,
        nothing1: "什么都还没有呢~",
        nothing2: "赶快添加你的第一个笔头吧~"
      })
    }
    else if(res.length==0){
      that.setData({
        SearchList: res,
        nothing1: "什么都没找到呢~",
        nothing2: "换个关键词试试吧~"
      })
    }
    else{
    that.setData({ 
      SearchList: res,
      nothing1: "",
      nothing2: ""
       })
    }
    this.saveSearch();
 },
})

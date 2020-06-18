// pages/options.js
var app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  

  data: {
    selectShow: false,//控制下拉列表的显示隐藏，false隐藏、true显示 
    selectShow2: false,//控制下拉列表的显示隐藏，false隐藏、true显示 
    selectShow3: false,//控制下拉列表的显示隐藏，false隐藏、true显示 
    selectData: ["小",'默认','大',"超大"],//下拉列表的数据 
    selectData2: ["色情黄", '基佬紫', '原谅绿', "高级黑","破蓝","闷骚红"],//下拉列表的数据 
    selectData3: ["恬静黄昏", '静谧物语', '寄语蓝天', "粉晕佳人"],//下拉列表的数据 
    index: 0,
    inde: 0,
    indexx: 0,
  },
  /**
   * 组件的方法列表
   */
  methods: {

    onLoad: function (options) {
      var self=this;

      wx.getStorage({
        key: 'setting',
        success: function(res) {
          self.setData({
            index: res.data[0],
            inde: res.data[1],
            indexx: res.data[2]
          })
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

    onShow: function (options) {
      var self = this;

      wx.getStorage({
        key: 'setting',
        success: function (res) {
          self.setData({
            index: res.data[0],
            inde: res.data[1],
            indexx: res.data[2]
          })
          if (res.data[2] == 0) {
            wx.setNavigationBarColor({
              frontColor: '#000000',
              backgroundColor: '#EEAD0E',
            })
          }
          if (res.data[2] == 1) {
            wx.setNavigationBarColor({
              frontColor: '#000000',
              backgroundColor: '#32CD32',
            })
          }
          if (res.data[2] == 2) {
            wx.setNavigationBarColor({
              frontColor: '#000000',
              backgroundColor: '#00B2EE',
            })
          }
          if (res.data[2] == 3) {
            wx.setNavigationBarColor({
              frontColor: '#000000',
              backgroundColor: '#FF69B4',
            })
          }
        },
      })
    },

    // 点击下拉显示框 
    selectTap() {
      this.setData({
        selectShow: !this.data.selectShow
      });
    },
    selectTap2() {
      this.setData({
        selectShow2: !this.data.selectShow2
      });
    },
    selectTap3() {
      this.setData({
        selectShow3: !this.data.selectShow3
      });
    },
    // 点击下拉列表 
    optionTap(e) {
      let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标 
      var temp=[]
      var self = this;
      wx.getStorage({
        key: 'setting',
        success: function(res) {
          temp.splice(0,0,res.data[2])
          temp.splice(0,0,res.data[1])
          temp.splice(0,0,Index)
          wx.setStorage({
            key: 'setting',
            data: temp,
          })
          self.setData({
            index:Index,
            selectShow: !self.data.selectShow
            })
        },
      })
    },
    optionTap2(e) {
      let Inde = e.currentTarget.dataset.index;//获取点击的下拉列表的下标 
      var temp = []
      var self = this;
      wx.getStorage({
        key: 'setting',
        success: function (res) {
          temp.splice(0, 0, res.data[2])
          temp.splice(0, 0, Inde)
          temp.splice(0, 0, res.data[0])
          wx.setStorage({
            key: 'setting',
            data: temp,
          })
          self.setData({
            inde: Inde,
            selectShow2: !self.data.selectShow2
          })
        },
      })
    },
    optionTap3(e) {
      let Indexx = e.currentTarget.dataset.index;//获取点击的下拉列表的下标 
      var temp = []
      var self = this;
      wx.getStorage({
        key: 'setting',
        success: function (res) {
          temp.splice(0, 0, Indexx)
          temp.splice(0, 0, res.data[1])
          temp.splice(0, 0, res.data[0])
          wx.setStorage({
            key: 'setting',
            data: temp,
          })
          self.setData({
            indexx: Indexx,
            selectShow3: !self.data.selectShow3
          })
        },
      })
      if (Indexx == 0) {
        wx.setNavigationBarColor({
          frontColor: '#000000',
          backgroundColor: '#EEAD0E',
        })
        self.setData({
          bg: "url(https://s2.ax1x.com/2019/06/04/VtubbF.jpg)",
        })
      }
      if(Indexx==1){
        wx.setNavigationBarColor({
          frontColor: '#000000',
          backgroundColor: '#32CD32',
        })
        self.setData({
          bg: "url(https://s2.ax1x.com/2019/06/04/VtKSv6.jpg)",
        })
      }
      if(Indexx==2){
        wx.setNavigationBarColor({
          frontColor: '#000000',
          backgroundColor: '#00B2EE',
        })
        self.setData({
          bg: "url(https://s2.ax1x.com/2019/06/04/VtKkUH.jpg)",
        })
      }
      if (Indexx == 3) {
        wx.setNavigationBarColor({
          frontColor: '#000000',
          backgroundColor: '#FF69B4',
        })
        self.setData({
          bg: "url(https://s2.ax1x.com/2019/06/04/VtKZ8I.jpg)",
        })
      }
    },
  }
})

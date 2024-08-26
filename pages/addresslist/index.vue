<template>
  <view v-if="false" class="not-address">
    <text>您还没有收货地址</text>
  </view>
  <view v-else class="addrss-list">
    <view
      class="list-box"
      v-for="(item, index) in listData"
      :key="item.addrId"
      @click="goAddressAdd(item.addrId)"
    >
      <uni-swipe-action>
        <uni-swipe-action-item
          :right-options="options2"
          :auto-close="false"
          @change="swipeChange($event, item.addrId)"
          @click="bindClick"
        >
          <view class="info">
            <text>{{ item.addrName }} {{ item.addrPhone }}</text>
            <text class="def">{{ item.state === 1 ? "默认" : "" }}</text>
          </view>
          <view class="address">
            {{ item.address }}
          </view>
        </uni-swipe-action-item>
      </uni-swipe-action>
    </view>
  </view>
  <view class="btn-box">
    <button type="warn" @click="addressAdd">新增收货地址</button>
  </view>
</template>

<script>
import { getUserAddressList, deleteUserAddress } from "@/api/api.js";
export default {
  data() {
    return {
      listData: [],
      addrId: null,
      token: uni.getStorageSync("accessToken"),
      options2: [
        {
          text: "取消",
          style: {
            backgroundColor: "#007aff",
          },
        },
        {
          text: "删除",
          style: {
            backgroundColor: "#F56C6C",
          },
        },
      ],
    };
  },
  methods: {
    swipeChange(e, addrId) {
      this.addrId = addrId;
    },
    bindClick(e) {
      if (this.listData.length === 1) {
        uni.showToast({
          title: "须保留一个收货地址",
          icon: "none",
        });
        return;
      }
      if (e.content.text == "删除") {
        deleteUserAddress("/userCenter/deleteUserAddress", {
          addrId: this.addrId,
          authorization: this.token,
        })
          .then((res) => {
            const { code, flag } = res;
            if (code === 2000 && flag) {
              uni.showToast({
                title: "删除成功！",
                icon: "none",
              });
              this.getAddressList();
            } else {
              uni.showToast({
                title: "删除失败！",
                icon: "none",
              });
            }
          })
          .catch((error) => console.log(error));
      }
    },
    addressAdd() {
      uni.navigateTo({
        url: "/pages/addressedit/index",
      });
    },
    getAddressList() {
      if (!this.token) return;
      getUserAddressList("/userCenter/getUserAddressList", {
        authorization: this.token,
      })
        .then((res) => {
          const { code, flag, data } = res;
          if (code === 2000 && flag) {
            this.listData = data;
          }
        })
        .catch((error) => console.log(error));
    },
    goAddressAdd(addrId) {
      uni.navigateTo({
        url: `/pages/addressedit/index?addrId=${addrId}`,
      });
    },
  },
  onBackPress(e) {
    uni.switchTab({
      url: "/pages/my/index",
    });
    return true;
  },
  onLoad() {
    this.token = uni.getStorageSync("accessToken");
    this.getAddressList();
  },
};
</script>

<style lang="scss">
.not-address {
  width: 100%;
  margin-top: 100rpx;
  display: flex;
  justify-content: center;

  > text {
    font-size: 16rpx;
    color: gray;
  }
}

.addrss-list {
  .list-box {
    border-bottom: 1px solid lightgray;
    background-color: white;
    padding: 20rpx;

    .info {
      display: flex;
      justify-content: space-between;

      .def {
        color: red;
      }
    }

    .address {
      margin-top: 12rpx;
    }
  }
}

.btn-box {
  position: fixed;
  bottom: 50rpx;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>

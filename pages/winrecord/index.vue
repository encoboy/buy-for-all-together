<template>
	<scroll-view scroll-y="true" class="scroll-Y" @scrolltolower="lower" :style="{ height: navHeight + 'px' }">
		<view class="list-data-box">
			<view v-for="(item, index) in listdata" :key="index" class="data-box">
				<!-- 		<view class="title_line_box">
						<text>揭晓时间：{{item.openTime}}</text>
					</view> -->
				<view class="content_box">
					<view class="img_box">
						<image :src="item.image" mode=""></image>
					</view>
					<view class="right_box">
						<view class="line">
							<text class="line_title">商品名称：</text>
							<text class="title_name">{{ item.goodName }}</text>
						</view>
						<view class="line">
							<text class="line_title">商品ID：</text>
							<text class="line_title">{{ item.goodId }}</text>
						</view>
						<view class="line">
							<text class="line_title">幸运号码：</text>
							<text class="title_lucky">{{ item.luckyCode }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
import { getUserPrizeList } from '@/api/api.js';
export default {
	data() {
		return {
			listdata: [],
			listdataTotal: null,
			pageSize: 10,
			pH: 0, //窗口高度
			navHeight: 0 //元素的所需高度
		};
	},
	methods: {
		lower: function (e) {
			const listdataLength = this.listdata.length;
			if (listdataLength < this.listdataTotal) {
				this.pageSize += 10;
				this.getlist();
			}
		},
		getlist() {
			getUserPrizeList('/userCenter/getUserPrizeList', {
				currentPage: 1,
				pageSize: this.pageSize
			})
				.then((res) => {
					const { code, flag, data, total } = res;
					if (code === 2000 && flag) {
						this.listdata = data.list;
						this.listdataTotal = total;
					}
				})
				.catch((error) => console.log(error));
		}
	},
	onLoad() {
		this.getlist();
	},
	onReady() {
		let that = this;
		uni.getSystemInfo({
			//调用uni-app接口获取屏幕高度
			success(res) {
				//成功回调函数
				that.pH = res.windowHeight; //windoHeight为窗口高度，主要使用的是这个
				let titleH = uni.createSelectorQuery().select('.scroll-Y'); //想要获取高度的元素名（class/id）
				titleH
					.boundingClientRect((data) => {
						let pH = that.pH;
						that.navHeight = pH - data.top; //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
					})
					.exec();
			}
		});
	}
};
</script>

<style lang="scss">
.list-data-box {
	.title_line_box {
		width: 100%;
		height: 50rpx;
		background-color: #e2e2e2;
		color: #707378;
		line-height: 50rpx;
		padding-left: 20rpx;
		margin-top: 10rpx;
	}

	.content_box {
		background-color: white;
		border-bottom: 1px solid lightgray;
		display: flex;
		padding: 20rpx;

		.img_box {
			> image {
				width: 80rpx;
				height: 80rpx;
			}

			margin-right: 24rpx;
		}

		.right_box {
			font-size: 14px;

			.line_title {
				color: #545453;
			}

			.title_name {
				color: #3f5991;
			}

			.title_lucky {
				color: #dbafb8;
			}
		}
	}
}
</style>

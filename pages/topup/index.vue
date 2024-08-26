<template>
	<view class="form-box">
		<form @submit="formSubmit" @reset="formReset">
			<view class="input-box">
				<view class="title">充值金额：</view>
				<input name="money" type="number" />
			</view>

			<view class="uni-btn-v">
				<button type="primary" form-type="submit">立即支付</button>
			</view>
		</form>
	</view>
</template>

<script>
import graceChecker from '../../common/graceCheck.js';
import { addUserAccount } from '@/api/api.js';
export default {
	data() {
		return {
			token: uni.getStorageSync('accessToken')
		};
	},
	methods: {
		formSubmit: function (e) {
			//定义表单规则
			let rule = [
				{
					name: 'money',
					checkType: 'notnull',
					checkRule: '',
					errorMsg: '请填写充值金额'
				}
			];
			//进行表单检查
			let formData = e.detail.value;
			let checkRes = graceChecker.check(formData, rule);
			if (!this.token) {
				uni.navigateTo({
					url: '/pages/login/index'
				});
				return;
			}
			if (checkRes) {
				addUserAccount('/userCenter/addUserAccount', { money: formData.money, authorization: this.token })
					.then((res) => {
						const { code, flag } = res;
						if (code === 2000 && flag) {
							uni.showToast({
								title: '充值成功',
								icon: 'success'
							});
							uni.navigateBack({
								delta: 1,
								success: () => {
									console.log('2');
								},
								fail: () => {
									console.log(22);
								}
							});
						}
					})
					.catch((error) => console.log(error));
			}
		}
	}
};
</script>

<style lang="scss">
.form-box {
	background-color: white;
	width: 100%;
	height: 400rpx;
	margin: auto;
	padding-top: 50rpx;

	.input-box {
		display: flex;
		padding: 20rpx;
		border: 1px solid lightgray;
		margin: 0rpx 40rpx 0;
	}

	.uni-btn-v {
		margin: 80rpx 40rpx 0;
	}
}
</style>

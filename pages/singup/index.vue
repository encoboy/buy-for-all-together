<template>
	<form @submit="formSubmit">
		<view class="uni-form-item">
			<view class="title">登录账号</view>
			<input class="uni-input" name="phone" placeholder="请输入账号" />
		</view>
		<view class="uni-form-item ">
			<view class="title">登录密码</view>
			<input class="uni-input" name="password" password placeholder="请输入密码" />
		</view>
		<view class="uni-btn-v">
			<button type="warn" plain="true" form-type="submit">注册</button>
		</view>
		<view class="sing-up-box">
			<text @click="goLogin">马上登录</text>
			<text>忘记密码？</text>
		</view>
	</form>
</template>

<script>
	import {
		singup
	} from '@/api/api.js'
	export default {
		data() {
			return {}
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				singup('/user/registerUser', formdata).then(res => {
					let {code,data,flag,message} = res;
					console.log('注册res===',res)
					if(code === 2000 && flag){
						uni.showToast({
							title:'注册成功',
							icon:'none'
						})
						uni.navigateTo({
							url:'/pages/login/index'
						})
					}else if(code === 4021 && !flag){
						uni.showToast({
							title:data,
							icon:'none'
						})
					}
				}).catch(error => console.log(error))
			},
			goLogin: function(e) {
				console.log('去注册页')
				uni.navigateTo({
					url: "/pages/login/index"
				});
			}
		}
	}
</script>

<style>
	.uni-form-item {
		display: flex;
		flex-direction: row;
		margin: 12px;
		border: 1px solid lightgray;
		height: 50px;
		align-items: center;
		padding: 0 12px;
		background-color: white;
	}

	.title {
		margin-right: 12px;
	}

	.uni-btn-v {
		margin: 0 12px;
	}

	.sing-up-box {
		margin: 15px 12px 0;
		display: flex;
		justify-content: space-between;
		color: red;
	}
</style>
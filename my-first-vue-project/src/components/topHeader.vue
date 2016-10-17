<template>
	<h1 class="top">{{msg}}</h1>
	<h1>{{msgfromfather}}</h1>
	<button v-on:click="onClickMe">Click!</button>
</template>
<script>
	export default{
		data(){
			return{
				msg:'hello from topheader:这是一个组件生成的头部',
				// msgfromfather:this.msgfromfather
			}
		},
		props:['msgfromfather'],
		methods:{
			onClickMe(){
				// console.log(this.msgfromfather);
				this.$emit('from-child',this.msg);
			}
		}
	}
</script>
<style>
	.top{
		text-align: center;
		color: green;
		border: 1px solid yellowgreen;
	}
</style>
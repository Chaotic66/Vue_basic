<template>
	<div id="app">
		<!-- <router-link to='/discover'>发现</router-link>
		|
		<router-link to='/friend'>朋友</router-link>
		|
		<router-link to='/playerlist'>歌单</router-link>
		|
		<router-link to='/list'>列表</router-link>
		|
		<router-link to='/detail'>详情</router-link>
		| -->
		<button @click='jump'>高桥凉介</button>
		|
		<button @click='discover'>发现</button>
		|
		<button @click='friend'>朋友</button>
		|
		<button @click='playerlist'>歌单</button>
		|
		<button @click='list'>列表</button>
		|
		<!-- <button @click='detail'>列表</button> -->
		<router-view></router-view>

		<!-- <router-view name='jyfy'></router-view> -->
		<router-view name='fuck'></router-view>
	</div>
</template>

<script>
	export default{
		methods:{
			jump(){
				this.$router.push('/playerlist')
			},
			discover(){
				this.$router.push({name:'disco'})
			},
			friend(){
				this.$router.push({name:'fri',params:{cxk:'姬霓太美'}})
				// console.log(this.$route);
			},
			playerlist(){
				this.$router.push({name:'plist',query:{hobby:'唱'}})
				console.log(this.$route);
			},
			list(){
				this.$router.push({name:'li',query:{}})
			}
			
		}
	}

</script>



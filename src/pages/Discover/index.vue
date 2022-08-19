<template>
    <fieldset>
        <legend>发现</legend>
        <h1>发现</h1>
        <router-link to='/discover/artist'>歌手</router-link>
        |
        <router-link to='/discover/rank'>排行榜</router-link>
        |
        <router-link :to="{name:'rec'}">推荐</router-link>
        <router-view></router-view>
    </fieldset>
</template>
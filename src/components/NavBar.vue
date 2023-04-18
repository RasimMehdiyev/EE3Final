<template>
    <nav>
        <div  style="margin-left:40px;margin-top:8px;width:45px;height:45px;" class="envelope">
           <img  src="../assets/emergency1.svg" class="svg_color" alt="">
           <p>Emergency</p>
        </div>
        <div @click="this.$router.push('/leaderboard')" style="margin-right:40px;margin-top:8px;width:45px;height:45px;" class="envelope">
            <img class="svg_color" src="../assets/leaderboard-svgrepo-com.svg" alt="">
            <p>Leaderboard</p>
        </div>
    </nav>
</template>
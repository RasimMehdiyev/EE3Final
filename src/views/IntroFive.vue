<template>
    <section>
        <div style="margin:20px 0 20px 0">
            <p class="title-app">Rick's Madness</p>
        </div>
        <div class="div-img">
            <img src="../assets/image_8.png" alt="">
        </div>
        <div class="div-intro-text-1">
            <p>
                And Agent Gribbles, please remember that Rick Sánchez is a very dangerous man, protect you and your team and be extremely careful with every unknown item,
                <br>
                <br>
                Good luck
            </p>
        </div>
        <div class="buttons-flex">
            <button @click="back">
                Back
            </button>
            <button @click="forward">
                Forward
            </button>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'IntoTwo',
        data() {

        },

        created() {
        },

        methods: {
            forward(){
                this.$router.push('/teams')
            },
            back(){
                this.$router.push('/intro')
            }
        },
    };
</script>


<style>
.title-app{
    font-family: "Get Schwifty" , sans-serif;
    font-size: 36px;
    color: #1B244C!important;
    -webkit-text-stroke: 1px #F9FF69!important;
}
.div-img{
margin-top: 60px;
}
.div-img img{
    width:390px;
    height:100%;
}
.div-intro-text-1{
    margin-top:30px;
    margin-left: 40px;
    margin-right: 20px;
}
.div-intro-text-1 p{
    color: white!important;
    text-align: left;
}
.buttons-flex button{
    width: 100px;
    height: 40px;
    background-color: black;
    font-family: "Get Schwifty", sans-serif;
    -webkit-text-stroke: #F9FF69 0.5px;
    border-radius: 10px;
    border: none;
    color: #1B244C;
    font-size: 18px;
    font-weight: 500;
}

.buttons-flex{
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 60px;
}
</style>
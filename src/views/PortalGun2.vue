<template>
    <section>
        <div @click="this.$router.push('/hints')" class="arrow">
            <img src="../assets/Vector.png" alt="">
        </div>
        <div class="portal-main">
            <img class="portal-img" src="../assets/Microverse_Battery.webp" alt="">
            <div class="portal-par">
                <p>
                    We are sensing that the missing battery might be inside a material made of GroepTonio, maybe try to look in a locker...
                </p>
            </div>
            <div @click="this.$router.push('/hints-6')" class="portal-button">
                <button>
                    We have found the battery
                </button>
            </div>
            <div @click="this.$router.push('/portal-gun-3')" class="help-button">
                <button>
                    More help
                </button>
                <p>Asking for help will deduct <span style="text-shadow: 0 0 5px #FFBBFF;color:#FFBBFF">2 minutes</span> from the remaining <span style="text-shadow: 0 0 5px #FFBBFF;color:#FFBBFF">time</span></p>
            </div>
        </div>

    </section>
</template>
<style>
    .portal-main{
        margin-top:60px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .portal-img{
        width: 279px;
        height: 279px;
    }
    .portal-par{
        margin-top: 30px;
        width: 279px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: left;
    }
    .portal-par p{
        color: white!important;
    }
    .portal-button{
        margin-top: 30px;
        width: 279px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    button{
        width:133px;
        height: 40px;
        background: #385682;
        color: #C7DDFF;
        border: 1px solid #C7DDFF;
        border-radius: 0px;
    }
    .help-button button{
        margin-top: 30px;
        width: 75px;
        background-color: black;
        color: #00FFE0;
        border: 1px solid #00FFE0;
    }
    .help-button p{
        margin-top: 10px;
        font-size: 10px;
        color: white!important;
    }
</style>
<template>
    <section>
        <div @click="this.$router.push('/hints')" class="arrow">
            <img src="../assets/Vector.png" alt="">
        </div>
        <div class="portal-main">
            <div class="portal-par">
                <p>
                    Ok Agent, if what Rick Sánchez says is right hat code
                </p>
                <br>
                <br>
                <p>
                    We need to identify as soon as possible the owner of the gun. 
                    In every gun, once you open a portal and travel through it, 
                    you can see the code of the place where they are coming from.
                    Can you please tell us which code do you read in the screen? 
                </p>
                <img class="portal-img" src="../assets/Group_64.png" alt="">
            </div>
            <!-- <div class="portal-button">
                <button>
                    We have found the battery
                </button>
            </div>
            <div class="help-button">
                <button>
                    More help
                </button>
                <p>Asking for help will deduct <span style="text-shadow: 0 0 5px #FFBBFF;color:#FFBBFF">2 minutes</span> from the remaining <span style="text-shadow: 0 0 5px #FFBBFF;color:#FFBBFF">time</span></p>
            </div> -->
        </div>

    </section>
</template>
<style>
    .portal-main{
        margin-top:60px;
        margin-bottom:120px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .portal-img{
        margin-top: 80px;
        width: 212px;
        height: 170px;
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
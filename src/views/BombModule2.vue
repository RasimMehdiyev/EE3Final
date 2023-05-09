<template>
    <section>
        <div @click="this.$router.push('/bomb')" class="arrow">
            <img src="../assets/arrow-big-left(1).png" alt="">
        </div>
        <p style="text-align:left; margin-top: 40px;margin-left: 40px;margin-right:40px;">
            Agent, we made it to the end, but you have to be careful. There are several cables in the bomb, if you disconnect them in a wrong order it will explode.
            <br>
            With our technology we are sensing that there are only two cables that we need to take away.
            <br>
            Our experts in bomb deactivation say that the correct order should be the same as in the last clue, in the movies it is always like that.
            <br>
            Take the two cables in the same order as in the master mind solution.
            <br>
            For example, if this was the correct solution: 
        </p>
        <div class="bomb-class">
            <img src="../assets/round-colors.png">
        </div>
        <p style="text-align:left; margin-top: 40px;margin-left: 40px;margin-right:40px;">And the cables look like this:</p>   
        <div class="bomb-class">
            <img src="../assets/color-lines.png">
        </div>
        <p style="text-align:left; margin-top: 40px;margin-left: 40px;margin-right:40px;margin-bottom:80px;">
            Then you would need to take out first the <span style="color:yellow;">yellow cable</span> and then the <span style="color:blue">blue cable</span>, 
            as the other two were not in the mastermind solution.
        </p>
        <p style="text-align:left; margin-top: 40px;margin-left: 40px;margin-right:40px;margin-bottom:80px;">
            Good luck agent,<br> the whole planet depends on you right now!
        </p>
        <div class="bomb-class-2">
            <img src="../assets/image_6.png">
        </div>
    </section> 
</template>
<style>

.bomb-class-2 img{
    width: 100%;
    height: 100%;
}

.bomb-class-2,
.bomb-class{
    margin-top: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
}
.bomb-class img{
    width: 50%;
    height: 50%;
}
    #send-button{
        margin-top: 30px;
        width: 60px;
        height: 30px;
        display: flex;
        font-size: 12px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: black;
        color: #00FFE0;
        border: 1px solid #00FFE0;
    }
    #send-button:hover{
        transition: 0.5s;
        background-color: #00FFE0;
        color:black;
    }

    .code-input{
        margin-top: 30px;
        margin-bottom: 10px;
        width: 100px;
        height: 60px;
        background: none;
        text-align: center;
        border: 2px solid #00FFE0;
        font-size: 22px;
        color: white;
    }
    .code-input:focus{
        outline: none;
    }
    .code-input::placeholder{
        color: white;
    }

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
        margin-top: 40px;
        width: 100%;
        height: 100%;
    }
    .portal-par{
        margin-top: 0px;
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
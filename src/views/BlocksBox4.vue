<template>
    <section>
        <div @click="this.$router.push('/hints-4')" class="arrow">
            <img src="../assets/Vector.png" alt="">
        </div>
        <div class="portal-main">
            <div class="portal-par">
                <p>
                    Agent, we were mistaken. We hacked one of the lab PC’s. 
                    <br>
                    Turns out this is one of the most watched TikTok videos in this house:                
                </p>
            </div>
            <div class="container">
                <iframe class="responsive-iframe"
                src="https://www.youtube.com/embed/Nz8ssH7LiB0">
                </iframe>   
            </div>
            <div class="portal-button">
                <button @click="this.$router.push('/hints-5')">
                    Done!
                </button>
            </div>
        </div>

    </section>
</template>
<style>
    .portal-main{
        margin-top:50px;
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
        object-fit: cover;
    }
    .portal-par{
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
    .container {
        margin-top: 40px;
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
      }
      
      /* Then style the iframe to fit in the container div with full height and width */
      .responsive-iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }
</style>
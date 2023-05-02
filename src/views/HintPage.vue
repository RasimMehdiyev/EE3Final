<template>
    <section>
        <!-- create 6 boxes with grid, two in each row -->

        <div @click="this.$router.push('/hints-6')" class="arrow">
            <img src="../assets/Vector.png" alt="">
        </div>
        <div>
            <p class="div-p">
                We have detected  some inventions in the lab <br> Click for information about them 
            </p>
        </div>
        <div class="hint-page">
            <div class="hint-page__container">
                <div @click="this.$router.push('/laser')" class="hint-page__container__box">
                    <img src="../assets/lasernew.png" alt="">
                </div>
                <div @click="this.$router.push('/voices')" class="hint-page__container__box">
                    <img  src="../assets/voices.png" alt="">
                </div>
                <div @click="this.$router.push('/voices')" class="hint-page__container__box">
                    <img  src="../assets/display.png" alt="">
                </div>
                <div class="hint-page__container__box">
                    <img  src="../assets/cube_rnm.png" alt="">
                </div>
                <div @click="this.$router.push('/portal-gun')" class="hint-page__container__box">
                    <img style="width:80px; height:70px" src="../assets/portalgun.png" alt="">
                </div>
                <div @click="this.$router.push('/mastermind')" class="hint-page__container__box">
                    <img style="width:40px; height:80px" src="../assets/mastermind.png" alt="">
                </div>
                <div class="hint-page__container__box">
                    <img  src="../assets/Dynamite.png" alt="">
                </div>
                <div class="hint-page__container__box">
                    <img @click="this.$router.push('/')" src="../assets/home.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
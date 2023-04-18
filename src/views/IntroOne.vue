<template>
    <section> 
        <div style="margin:20px 0 20px 0">
            <p class="title-app">Rick's Madness</p>
        </div>
        <div class="collage-flex">
            <div class="collage">
                <img style="width:185.33px; height: 485.33px;" src="../assets/image_1.png" alt="Image 1" class="collage-item">
            </div>
            <div class="test-flex">
                <img style="width:170px; height: 112.33px;" src="../assets/image_3.png" alt="Image 3" class="collage-item">
                <img style="width:170px; height:370px;" src="../assets/image_4.png" alt="Image 4" class="collage-item">
            </div>
        </div>     
        <div >
            <img style="width:94.2%; height:100%;" src="../assets/image_2.png" alt="Image 2" class="collage-item">
        </div>
        <div @click="forward" style="margin:20px 0 20px 0">
            <p class="title-app">Tap to start</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'IntoOne',
        data() {

        },

        created() {
        },

        methods: {
            forward(){
                this.$router.push('/intro2')
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

    .collage-flex{
        display: flex;
        flex-direction: row;
        height: 490px;
        gap:0px;
    }
    .text-flex{
        display: flex;
        flex-direction: column;
        justify-content: left;
    }
  .collage {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    margin: 0 0 0 10px;
  }

  .collage-item {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>


<template>
    <section class="home">
        <p class="home-p-top">Mission in progress</p>
        <div class="circle">
            <img class="circle-image" src="../assets/image10.png" alt="">
        </div>
        <p class="home-p-bottom">Click in the center to get help from Galactic Federation</p>
    </section>
</template>
<script>
import router from '@/router'

export default {
    name: 'homeModule',
    data() {
        return {
            teamName: '',
            member1: '',
            member2: '',
            member3: '',
            member4: '',
            members: []
        }
    },
    methods: {

        setUpTeam(){
            this.members = [this.member1, this.member2, this.member3, this.member4]
            fetch('http://localhost:8000/create-team/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    teamName: this.teamName,
                    members: this.members
                })
            })

            router.push('/about')
        },
        startTimer() {
            fetch('http://localhost:8000/start-timer/')
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
        }
    }
}
</script>
<template>
    <section class="leaderboard">
        <div style="margin-bottom: 20px;" @click="this.$router.push('/')" class="arrow">
            <img src="../assets/Vector.png" alt="">
        </div> 
        <table>
            <tr>
                <th>Ranking</th>
                <th>Team ID</th>
                <th>Team</th>
                <th>Points</th>
            </tr>
            <tr v-for="team in this.teams" :key="team.id">
                <td>{{team.ranking}}</td>
                <td>{{team.id}}</td>
                <td>{{team.name}}</td>
                <td>{{team.points}}</td>
            </tr>
        </table> 
    </section>
</template>

<!-- <script>
export default{
    name: 'LeaderBoard',
    data(){
        return{
            teams: [],
            counter:1,
        }
    },
    created(){
        fetch('https://ee3project.herokuapp.com/leaderboard/')
            .then(response => response.json())
            .then(data => {
                this.teams = data
            })
    }
}
</script> -->


<style>
.leaderboard{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.leaderboard table{
    max-width:100%;
    margin-top:50px;
}
th{
    padding:15px;
    color: black;
    background-color: #00FFE0;
}
td{
    padding:15px;
    color: black;
    background-color: #C7DDFF;
}
</style>

<script>
export default{
    name: 'LeaderBoard',
    data(){
        return{
            teams: [],
            ranking: 1,
            counter:1,
        }
    },
    created(){
        fetch('https://ee3project.herokuapp.com/leaderboard/')
            .then(response => response.json())
            .then(data => {
                this.teams = data
                // put ranking in each team
                for (let i = 0; i < this.teams.length; i++) {
                    this.teams[i].ranking = i+1
                }
            })
    }
}
</script>
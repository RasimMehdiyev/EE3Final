<template>
    <section class="leaderboard">
        <table >
            <tr>
              <th>Ranking</th>
              <th>Team</th>
              <th>Time</th>
              <th>Points</th>
            </tr>
            <tr v-for="team in this.teams" :key="team.id">
                <td>{{this.counter++}}</td>
                <td>{{team.name}}</td>
                <td>00:00</td>
                <td>{{team.points}}</td>
            </tr>
          </table> 
    </section>
</template>

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
</script>
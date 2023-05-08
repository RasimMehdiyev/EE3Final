<template>
    <div>
        <h1>Mastermind Game</h1>
            <ul style="list-style-type:none;display:flex;justify-content:center;flex-direction:row;align-items:center;" >
                <li :style="{backgroundColor: color}" style="width:10px;height:10px;border-radius:100%;border: white 1px solid" v-for="color in this.random_colors"  :key="this.random_colors.indexOf(color)"></li>
            </ul>
            <ul style="list-style-type:none;display:flex;justify-content:center;flex-direction:row;align-items:center;" >
                <li :style="{backgroundColor: color}" style="width:10px;height:10px;border-radius:100%;border: white 1px solid" v-for="color in this.correction"  :key="this.correction.indexOf(color)"></li>
            </ul>
        <div v-if="this.won==false" class="colors-class">
            <div class="colors-rows">
                <div class="correction-colors">
                    <div class="row">
                        <div class="col" :style="{backgroundColor: this.row1}"></div>
                        <div class="col" :style="{backgroundColor: this.row2}"></div>
                        <div class="col" :style="{backgroundColor: this.row3}"></div>
                        <div class="col" :style="{backgroundColor: this.row4}"></div>
                    </div>
                    <div class="correction">
                        <div class="row">
                            <div class="col" :style="{backgroundColor: this.correction[0]}"></div>
                            <div class="col" :style="{backgroundColor: this.correction[1]}"></div>
                        </div>
                        <div class="row">
                            <div class="col" :style="{backgroundColor: this.correction[2]}"></div>
                            <div class="col" :style="{backgroundColor: this.correction[3]}"></div>
                        </div>
                    </div>
                </div>
                <div class="correction-colors">
                    <div class="row">
                        <div class="col" :style="{backgroundColor: this.row5}"></div>
                        <div class="col" :style="{backgroundColor: this.row6}"></div>
                        <div class="col" :style="{backgroundColor: this.row7}"></div>
                        <div class="col" :style="{backgroundColor: this.row8}"></div>
                    </div>
                    <div class="correction">
                        <div class="row">
                            <div class="col" :style="{backgroundColor: this.correction[4]}"></div>
                            <div class="col" :style="{backgroundColor: this.correction[5]}"></div>
                        </div>
                        <div class="row">
                            <div class="col" :style="{backgroundColor: this.correction[6]}"></div>
                            <div class="col" :style="{backgroundColor: this.correction[7]}"></div>
                        </div>
                </div>
                </div>
                <div class="correction-colors">
                    <div class="row">
                        <div class="col" :style="{backgroundColor: this.row9}"></div>
                        <div class="col" :style="{backgroundColor: this.row10}"></div>
                        <div class="col" :style="{backgroundColor: this.row11}"></div>
                        <div class="col" :style="{backgroundColor: this.row12}"></div>
                    </div>
                    <div class="correction">
                        <div class="row">
                            <div class="col" :style="{backgroundColor: this.correction[8]}"></div>
                            <div class="col" :style="{backgroundColor: this.correction[9]}"></div>
                        </div>
                        <div class="row">
                            <div class="col" :style="{backgroundColor: this.correction[10]}"></div>
                            <div class="col" :style="{backgroundColor: this.correction[11]}"></div>
                        </div>
                    </div>
                </div>
                <div class="correction-colors">
                    <div class="row">
                        <div class="col" :style="{backgroundColor: this.row13}"></div>
                        <div class="col" :style="{backgroundColor: this.row14}"></div>
                        <div class="col" :style="{backgroundColor: this.row15}"></div>
                        <div class="col" :style="{backgroundColor: this.row16}"></div>
                    </div>
                    <div class="correction">
                        <div class="row">
                            <div class="col" :style="{backgroundColor: this.correction[12]}"></div>
                            <div class="col" :style="{backgroundColor: this.correction[13]}"></div>
                        </div>
                        <div class="row">
                            <div class="col" :style="{backgroundColor: this.correction[14]}"></div>
                            <div class="col" :style="{backgroundColor: this.correction[15]}"></div>
                        </div>
                    </div>
                </div>
                <div class="correction-colors">
                    <div class="row">
                        <div class="col" :style="{backgroundColor: this.row17}"></div>
                        <div class="col" :style="{backgroundColor: this.row18}"></div>
                        <div class="col" :style="{backgroundColor: this.row19}"></div>
                        <div class="col" :style="{backgroundColor: this.row20}"></div>
                    </div>
                    <div class="correction">
                        <div class="row">
                            <div class="col" :style="{backgroundColor: this.correction[16]}"></div>
                            <div class="col" :style="{backgroundColor: this.correction[17]}"></div>
                        </div>
                        <div class="row">
                            <div class="col" :style="{backgroundColor: this.correction[18]}"></div>
                            <div class="col" :style="{backgroundColor: this.correction[19]}"></div>
                        </div>
                    </div>
                </div>
                <div class="correction-colors">
                    <div class="row">
                        <div class="col" :style="{backgroundColor: this.row21}"></div>
                        <div class="col" :style="{backgroundColor: this.row22}"></div>
                        <div class="col" :style="{backgroundColor: this.row23}"></div>
                        <div class="col" :style="{backgroundColor: this.row24}"></div>
                    </div>
                    <div class="correction">
                        <div class="row">
                            <div class="col" :style="{backgroundColor: this.correction[20]}"></div>
                            <div class="col" :style="{backgroundColor: this.correction[21]}"></div>
                        </div>
                        <div class="row">
                            <div class="col" :style="{backgroundColor: this.correction[22]}"></div>
                            <div class="col" :style="{backgroundColor: this.correction[23]}"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="this.won==true">
            <h2>You won!</h2>
            <button @click="reset()">Play again</button>
            <ul style="list-style-type:none;display:flex;justify-content:center;flex-direction:row;align-items:center;">
                <li :style="{backgroundColor: color}" style="width:10px;height:10px;border-radius:100%;border: black 1px solid" v-for="color in this.final_color" :key="this.final_color.indexOf(color)">
                </li>
            </ul>
        </div>
        <!-- choose colors for row1, row2, row3, row4 -->
        <div v-if="this.counter==1 && this.won==false">
            <div>
                <select v-model="row1">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">
                        {{ color }}
                    </option>
                </select>
                <select v-model="row2">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">{{color}}</option>
                </select>
                <select v-model="row3">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">{{color}}</option>
                </select>
                <select v-model="row4">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">{{color}}</option>
                </select>
                <button @click="check()">Check</button>
            </div>
        </div>
        <div v-if="this.counter==2">
            <div>
                <select v-model="row5">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">
                        {{ color }}
                    </option>
                </select>
                <select v-model="row6">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">{{color}}</option>
                </select>
                <select v-model="row7">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">{{color}}</option>
                </select>
                <select v-model="row8">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">{{color}}</option>
                </select>
                <button @click="check()">Check</button>
            </div>
        </div>
        <div v-if="this.counter==3">
            <div>
                <select v-model="row9">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">
                        {{ color }}
                    </option>
                </select>
                <select v-model="row10">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">{{color}}</option>
                </select>
                <select v-model="row11">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">{{color}}</option>
                </select>
                <select v-model="row12">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">{{color}}</option>
                </select>
                <button @click="check()">Check</button>
            </div>
        </div>
        <div v-if="this.counter==4">
            <div>
                <select v-model="row13">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">
                        {{ color }}
                    </option>
                </select>
                <select v-model="row14">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">{{color}}</option>
                </select>
                <select v-model="row15">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">{{color}}</option>
                </select>
                <select v-model="row16">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">{{color}}</option>
                </select>
                <button @click="check()">Check</button>
            </div>
        </div>
        <div v-if="this.counter==5">
            <div>
                <select v-model="row17">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">
                        {{ color }}
                    </option>
                </select>
                <select v-model="row18">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">{{color}}</option>
                </select>
                <select v-model="row19">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">{{color}}</option>
                </select>
                <select v-model="row20">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">{{color}}</option>
                </select>
                <button @click="check()">Check</button>
            </div>
        </div>
        <div v-if="this.counter==6">
            <div>
                <select v-model="row21">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">
                        {{ color }}
                    </option>
                </select>
                <select v-model="row22">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">{{color}}</option>
                </select>
                <select v-model="row23">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">{{color}}</option>
                </select>
                <select v-model="row24">
                    <option v-for="color in colors" :value="color" :key="this.colors.indexOf(color)">{{color}}</option>
                </select>
                <button @click="check()">Check</button>
            </div>
        </div>        
    </div>
</template>

<style>
    .correction-colors{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .colors-class{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 20px;
        background-color: aqua;
    }
    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .col {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        border: 1px solid black;
    }
    .correction{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>


<script>
    export default {
      name: 'MasterMind',
      data() {
        return {
            code: [],
            remaining: [],
            correction:[], // black if color and position are correct, white if color is correct but position is wrong
            colors: ['red', 'yellow', 'green', 'blue', 'black'],
            random_colors:[],
            counter: 1,
            counter2: 1,
            i: 1,
            won: false,
            row1: null,
            row2: null,
            row3: null,
            row4: null,
            row5: null,
            row6: null,
            row7: null,
            row8: null,
            row9: null,
            row10: null,
            row11: null,
            row12: null,
            row13: null,
            row14: null,
            row15: null,
            row16: null,
            row17: null,
            row18: null,
            row19: null,
            row20: null,
            row21: null,
            row22: null,
            row23: null,
            row24: null,     
            final_color: ['red','red','blue','green','purple']       
        }
      },
      methods: {
        randomColors() {
            // return array of 4 random colors
            let rand_colors = [];
            for (let i = 0; i < 4; i++) {
                // colors should be unique
                let rand = this.colors[Math.floor(Math.random() * this.colors.length)];
                while (rand_colors.includes(rand)) {
                    rand = this.colors[Math.floor(Math.random() * this.colors.length)];
                }
                rand_colors.push(rand);
            }
            this.random_colors = rand_colors;
            console.log(this.random_colors);
        },  
        check() {

            // check if the user won

            if (this.counter == 1) {
                this.code = [this.row1, this.row2, this.row3, this.row4];
                //assing only copy not the array itself
                for (const obj of this.random_colors) {
                    this.remaining.push(obj);
                }       
                for (let i = 0; i < 4; i++) {
                    if (this.code[i] == this.random_colors[i]) {
                        this.correction.push('gray');
                        this.remaining.splice(this.remaining.indexOf(this.code[i]), 1);
                    } else if (this.remaining.includes(this.code[i])) {
                        this.correction.push('white');
                        this.remaining.splice(this.remaining.indexOf(this.code[i]), 1);
                    } else {
                        this.correction.push('black');
                    }
                }
                this.counter++;
            } else if (this.counter == 2) {
                this.code = [this.row5, this.row6, this.row7, this.row8];
                //assign remaining colors with loop to avoid repetition
                for (const obj of this.random_colors) {
                    this.remaining.push(obj);
                }  
                for (let i = 0; i < 4; i++) {
                    if (this.code[i] == this.random_colors[i]) {
                        this.correction.push('gray');
                        this.remaining.splice(this.remaining.indexOf(this.code[i]), 1);
                    } else if (this.remaining.includes(this.code[i])) {
                        this.correction.push('white');
                        this.remaining.splice(this.remaining.indexOf(this.code[i]), 1);
                    } else {
                        this.correction.push('black');
                    }
                }
                this.counter++;
            } else if (this.counter == 3) {
                this.code = [this.row9, this.row10, this.row11, this.row12];
                for (const obj of this.random_colors) {
                    this.remaining.push(obj);
                }  
                for (let i = 0; i < 4; i++) {
                    if (this.code[i] == this.random_colors[i]) {
                        this.correction.push('gray');
                        this.remaining.splice(this.remaining.indexOf(this.code[i]), 1);
                    } else if (this.remaining.includes(this.code[i])) {
                        this.correction.push('white');
                        this.remaining.splice(this.remaining.indexOf(this.code[i]), 1);
                    } else {
                        this.correction.push('black');
                    }
                }
                this.counter++;
            } else if (this.counter == 4) {
                this.code = [this.row13, this.row14, this.row15, this.row16];
                for (const obj of this.random_colors) {
                    this.remaining.push(obj);
                }  
                for (let i = 0; i < 4; i++) {
                    if (this.code[i] == this.random_colors[i]) {
                        this.correction.push('gray');
                        this.remaining.splice(this.remaining.indexOf(this.code[i]), 1);
                    } else if (this.remaining.includes(this.code[i])) {
                        this.correction.push('white');
                        this.remaining.splice(this.remaining.indexOf(this.code[i]), 1);
                    } else {
                        this.correction.push('black');
                    }
                }
                this.counter++;
            } else if (this.counter == 5) {
                this.code = [this.row17, this.row18, this.row19, this.row20];
                for (const obj of this.random_colors) {
                    this.remaining.push(obj);
                }  
                for (let i = 0; i < 4; i++) {
                    if (this.code[i] == this.random_colors[i]) {
                        this.correction.push('gray');
                        this.remaining.splice(this.remaining.indexOf(this.code[i]), 1);
                    } else if (this.remaining.includes(this.code[i])) {
                        this.correction.push('white');
                        this.remaining.splice(this.remaining.indexOf(this.code[i]), 1);
                    } else {
                        this.correction.push('black');
                    }
                }
                this.counter++;
            } else if (this.counter == 6) {
                this.code = [this.row21, this.row22, this.row23, this.row24];
                for (const obj of this.random_colors) {
                    this.remaining.push(obj);
                }  
                for (let i = 0; i < 4; i++) {
                    if (this.code[i] == this.random_colors[i]) {
                        this.correction.push('gray');
                        this.remaining.splice(this.remaining.indexOf(this.code[i]), 1);
                    } else if (this.remaining.includes(this.code[i])) {
                        this.correction.push('white');
                        this.remaining.splice(this.remaining.indexOf(this.code[i]), 1);
                    } else {
                        this.correction.push('black');
                    }
                }
                this.counter++;
            }
            // if last 4 corrections are gray, user won
            if (this.correction.slice(-4).every((el) => el == 'gray')) {
                this.won = true;
            }
            // if counter is 8 and last 4 corrections are not gray, user lost
            if (this.counter == 8 && !this.correction.slice(-4).every((el) => el == 'gray')) {
                this.lost = true;
            }

        },
    }  ,
    mounted() {
        this.randomColors();
    },
}
</script>
  
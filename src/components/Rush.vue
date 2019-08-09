<template>
    <div>
    <div class="card">
        <div class="card-header" style="font-family: 'Teko', sans-serif; font-size: 40px">
            Rush
        </div>
        <div class="card-body">
            <div class="row justify-content-md-center">
                <div class="col">
                    <img class="col" src="../assets/house.png" width="800"/>
                </div>
                <div class="col">
                    <p align="center" style="font-family: 'Teko', sans-serif; font-size: 20px">{{this.msg}}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" style="font-family: 'Teko', sans-serif; font-size: 40px">
            Rush Chair For 2019
        </div>
        <div class="card-body">
            <div class="row justify-content-md-center">
                <div class="col">
                    <img class="col" src="../assets/newman.png" style="width: 200px"/>
                </div>
                <div class="col">
                    <ul >
                        <li v-for="(info,index) in contactInfo" v-bind:key="index" style="font-family: 'Teko', sans-serif; font-size: 20px">
                        {{ info }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Rush',
    data() {
        return{
            msg: "We conduct rush through the typical IFC process. This consists of two open houses, followed by invite only events, through which bids are given out. Bids are then signed on a date not yet announced by IFC. All students interested in rush are encouraged to contact our rush chair below.",
            contactInfo: ["Henry Newman. ","Phone Number: 415-939-6448","henrynew@umich.edu "]
        }
    }
}
</script>
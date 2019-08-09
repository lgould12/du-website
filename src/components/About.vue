<template>
    <div class="card">
        <div class="card-header" style="font-family: 'Teko', sans-serif; font-size: 40px">
            About
        </div>
        <div class="card-body">
            <div class="row justify-content-md-center">
                <img src="../assets/house.png" width="800"/>
            </div>
            <div class="mx-auto">
                <p align="center" style="font-family: 'Teko', sans-serif; font-size: 20px">{{this.msg}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return{
            msg: "The University of Michigan chapter of Delta Upsilon was founded in 1874, and built our current chapter house in 1903. Renovated in 2012 after a fire, the house is located at 1331 Hill Street, and is on the National Register of Historic Places. Delta Upsilon is a full member in the Intrafraternity Council, and a conditional member of Ann Arbor IFC.",
        }
    }
}
</script>
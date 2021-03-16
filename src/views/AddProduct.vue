<template>
    <div class="back">
        <div class="div-center">
            <div class="content">
                <h3>Add Product</h3>
                <form>
                    <div class="form-group">
                        <label for="title">Product Name :</label>
                        <input type="text" class="form-control" placeholder="Name of Product">
                    </div>
                    <div class="form-group">
                        <label for="description">Stock :</label>
                        <input type="text" class="form-control" placeholder="Product's Stock">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Price:</label>
                        <input type="number" class="form-control" placeholder="Product's Price">
                    </div><br>
                    <button type="submit" class="btn btn-primary" >Add Product</button>
                    <button type="submit" class="btn btn-danger cancel">Cancel</button>
                    <hr />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

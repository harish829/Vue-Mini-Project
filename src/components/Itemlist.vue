<template>
  <div>
    <div class="columns">
      <div class="card column is-2" v-for="(item, index) in itemsData" :key="index">
      <div class="card-header">
          <div class="card-header-title  has-text-white">
            Groceries List
          </div>
      </div>
        <div class="card-content">
          <div class="content">
            <div>
              <label class="is-pulled-left">Item Name:</label>
              <span class="is-pulled-left">{{item.name}}</span>
            </div>
            <div>
              <label class="is-pulled-left">Item Price:</label>
              <span class="is-pulled-left">{{item.price}}</span>
            </div>
            <div>
              <label class="is-pulled-left">Item Quantity:</label>
              <span class="is-pulled-left">{{item.quantity}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemsData: {
      type: Array,
      required: true,

    },
  },
};
</script>

<style>
</style>

<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="column is-half is-offset-one-quarter">
          <div class="card">
            <div class="card-content">
              <div class="content">
                <div class="column">
                  <input
                    class="input"
                    type="text"
                    placeholder="Enter Groceries list Item"
                    v-model="itemName"
                  />
                </div>
                <div class="column">
                  <input
                    class="input"
                    type="number"
                    placeholder="Enter the Price"
                    v-model="itemPrice"
                  />
                </div>
                <div class="column">
                  <label class="is-size-5 is-pulled-left">Qunitity</label>
                  <div class="select is-pulled-left">
                    <select v-model="selectedQty">
                      <option v-for="qty in itemQuanitity" :key="qty" :value="qty">{{qty}}</option>
                    </select>
                  </div>
                </div>
                <button class="button is-primary" @click="postItem">Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="section">
      <Itemlist :itemsData="itemsData"></Itemlist>
    </div>
  </div>
</template>
<script>
import Itemlist from '@/components/Itemlist.vue';
import service from '../services/app';

export default {
  data() {
    return {
      itemName: '',
      itemPrice: '',
      itemQuanitity: ['1KG', '2KG', '3KG', '4KG', '5KG'],
      selectedQty: '1KG',
      loadData: false,
      itemsData: [],
    };
  },
  components: {
    Itemlist,
  },
  methods: {
    async postItem() {
      if (this.itemName === '' || this.itemPrice === '') {
        // eslint-disable-next-line no-alert
        alert('Please Enter the Item Name and Price');
      } else {
        await service.postItem({
          name: this.itemName,
          price: this.itemPrice,
          quantity: this.selectedQty,
        });
        this.clearItem();
        this.getItemsData();
      }
    },
    clearItem() {
      this.itemName = '';
      this.itemPrice = '';
      this.selectedQty = '1KG';
    },
    async getItemsData() {
      const data = await service.getList();
      this.itemsData = data.data;
    },
  },
  created() {
    this.getItemsData();
  },

};
</script>

<style>
</style>

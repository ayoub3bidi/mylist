<template>
    <div v-for="List in Lists" :key="List.id">
        <br>
        <div class="card">
            <div class="card-body">
                <div class="single">
                    <div class="thumbnail">
                        <img :src="List.coverUrl">
                    </div>
                    <div class="info">
                        <h3>{{List.title}}</h3>
                        <p>{{List.description}}</p>
                        <p>Created by {{List.userName}}</p>
                    </div>
                    <div class="item-number">
                        <p>{{List.items.length}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['Lists']

    }
</script>

<style scoped>
.single {
    display: flex;
    align-items: center;
    transition: all ease 0.2s;
  }
  .single:hover {
    box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
    transform: scale(1.02);
    transition: all ease 0.2s;
  }
  .thumbnail {
    max-width: 200px;
    max-height: 200px;
    overflow: hidden;
    border-radius: 5px;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
  .info {
    margin: 0 30px;
  }
  .item-number {
    margin-left: auto;
  }
</style>
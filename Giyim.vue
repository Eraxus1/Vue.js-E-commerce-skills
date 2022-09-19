<script >
export default {
    data() {
        return {
            itemlist: [
                {
                    title: "Oversize Tshirt",
                    desc: "bir kullanıcının kullanım profiline dayanarak . Gerçek pil ömrü; ağ ortamına, kullanılan özelliklere ve uygulamalara, çağrı ve mesaj sıklığına, şarj edilme sayısına ve diğer pek çok etkene bağlı olarak farklılık gösterebilir.",
                    price: 250,
                    count: 12
                },
                {
                    title: "Bluz",
                    desc: "bir kullanıcının kullanım profiline dayanarak . Gerçek pil ömrü; ağ ortamına, kullanılan özelliklere ve uygulamalara, çağrı ve mesaj sıklığına, şarj edilme sayısına ve diğer pek çok etkene bağlı olarak farklılık gösterebilir.",
                    price: 250,
                    count: 5
                },
                {
                    title: "Crop",
                    desc: "bir kullanıcının kullanım profiline dayanarak . Gerçek pil ömrü; ağ ortamına, kullanılan özelliklere ve uygulamalara, çağrı ve mesaj sıklığına, şarj edilme sayısına ve diğer pek çok etkene bağlı olarak farklılık gösterebilir.",
                    price: 250,
                    count: 17
                },
                {
                    title: "Corap",
                    desc: "bir kullanıcının kullanım profiline dayanarak . Gerçek pil ömrü; ağ ortamına, kullanılan özelliklere ve uygulamalara, çağrı ve mesaj sıklığına, şarj edilme sayısına ve diğer pek çok etkene bağlı olarak farklılık gösterebilir.",
                    price: 250,
                    count: 25
                }
            ]
        }
    },

}
</script>
      
<template>
    <div class="container">
        <div class="card" v-for="item in itemlist">
            <div> 
                <p style="color:orangered;" v-if="item.count===5">Son 5 Adet </p> 
                <img src="/eminem.jpg" alt="" style="width:150px; height:150px;">
            </div>
            <h4>{{item.title}}</h4>
            <p style="margin-top:10px;">{{item.desc}}</p>
            <p style="margin-top:10px;">Fiyat : {{item.price}}</p>
            <p>Kalan Urun : {{item.count}}</p>
            <p class="danger" v-if="item.count==0">Ürün tükenmiştir</p>
            <button :disabled="item.count==0" @click="item.count--">Satın al</button>
        </div>
    </div>
</template>
<style>
   
.container {
    display: flex;
    padding: 1rem;
    border: none;
    margin-top: 30px;
}

.card {
    width: 25%;
    border: 1px solid rgba(66, 48, 48, 0.205);
    text-align: center;
    height: 450px;
    margin: 2px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 1px gray;
}

.danger {
    color: red;
}

.card h4 {
    position: inherit;
    font-size: 15px;
}
hr{
    border:1px solid rgba(0, 0, 0, 0.113);
}
button {
    margin-top: 50px;
    border: none;
    color: white;
    background-color: rgb(216, 95, 52);
    width: 120px;
    padding: 0.5rem;
    border-radius: 20px;
    box-shadow: 1px 2px 5px 1px rgb(157, 155, 154);
}

button:hover {
    cursor: pointer;
}
</style>
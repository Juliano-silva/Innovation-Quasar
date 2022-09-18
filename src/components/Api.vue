<template>
  <div class="Corpo" id="FormInputs">
    <h1 id="Innov">Innovation</h1>
      <form @submit="createDados">
          <div class="input-container">
              <input id="NameInput" type="text" name="name" v-model="nome" placeholder="Nome">
              <textarea id="TextoInput" name="Texto" v-model="Text" placeholder="Insira seu Texto"/>
              <input id="ImageInput" type="text" name="Image" v-model="Image" placeholder="Image">
              <input type="submit" class="submit-btn" value="Enviar"/>
          </div>
      </form>
  </div>
  <div class="CaixaTable">
   <br>
   <div class="Table" v-for="dadors in dadors" :key="dadors.id">
   <div id="ContainerTa" >
    <br>
       <dir><h1 id="DadoNome">{{dadors.nome}}</h1></dir>
       <dir><p id="DadoText">{{dadors.Text}}</p></dir>
       <dir><img id="DadoImage" :src="dadors.Image" alt=""></dir>
       <div><button class="delete-btn" @click="deleteDados(dadors.id)">Remover</button>
     </div>
     <br>
       </div>
</div>
<br>
  </div>
</template>
<script>
export default{
name:"MyInterna",
data(){
   return{
       nome:null,
       Image:null,
       Text:null,
       dadors:null,
       dadors_id:null,
   }
},
methods:{
  async getPedidos(){
       const req = await fetch("http://localhost:3000/Dados")
       const data = await req.json();
       this.dadors = data;
       this.getStatus();
   },
   async deleteDados(id){
    alert(`O item ${id} foi removido com sucesso`)
       const req = await fetch(`http://localhost:3000/Dados/${id}`,{method:"DELETE"});
       const res = await req.json();
       this.getPedidos();
   },
   async createDados(e){
       e.preventDefault();
       const data={
           nome: this.nome,
           Image: this.Image,
           Text: this.Text,
       }
       const dataJson = JSON.stringify(data);
       const req = await fetch("http://localhost:3000/Dados",{
           method:"POST",
           headers:{"Content-type":"application/json"},
           body:dataJson
       });
       this.nome = "";
       this.Text = "";
       this.Image = "";
   },
},
mounted(){
   this.getPedidos();
},
}
</script>

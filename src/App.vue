<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro' : modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="alterarTema"/>
    </div>

    <div class="column is-three-quarter conteudo">
      <NotificacaoMessage/>
      <RouterView></RouterView>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import NotificacaoMessage from './components/NotificacaoMessage.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    NotificacaoMessage
  },
  data () {
    return {
      modoEscuroAtivo: false
    }
  },
  methods: {
    alterarTema (modoEscuroAtivo: boolean) {
       this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>

<style scoped>
.lista{
  padding: 1.25rem;
}

main {
  --bg-primario: #fff;
  --text-primario: #000;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --text-primario: #ddd;
}

.conteudo {
  background-color: var(--bg-primario)
} 
</style>

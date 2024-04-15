<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro' : modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="alterarTema"/>
    </div>

    <div class="column is-three-quarter conteudo">
      <FormularioTarefa @aoSalvarTarefa="salvarTarefa"></FormularioTarefa>
      <div class="lista">
        <TarefasListadas v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" :descricao="tarefa" />
        <BoxAmarelo v-if="listaEstaVazia" >
          Você não está muito produtivo
      </BoxAmarelo>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioTarefa from './components/FormularioTarefa.vue';
import TarefasListadas from './components/TarefasListadas.vue';
import BoxAmarelo from './components/BoxAmarelo.vue';
import ITarefa from './ITarefas';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioTarefa,
    TarefasListadas,
    BoxAmarelo
  },
  data () {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false
    }
  },
  computed: {
    listaEstaVazia () : boolean {
      return this.tarefas.length === 0;
    }
  },
  methods: {
    salvarTarefa (tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
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

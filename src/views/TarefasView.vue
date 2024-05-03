<template>
  <div class="tarefas">


    <FormularioTarefa @aoSalvarTarefa="salvarTarefa"></FormularioTarefa>
    <div class="lista">
      <TarefasListadas v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" :descricao="tarefa" />
      <BoxAmarelo v-if="listaEstaVazia">
        Você não está muito produtivo
      </BoxAmarelo>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormularioTarefa from '../components/FormularioTarefa.vue';
import TarefasListadas from '../components/TarefasListadas.vue';
import BoxAmarelo from '../components/BoxAmarelo.vue';
import ITarefa from '../interfaces/ITarefa';

export default defineComponent({
  name: 'App',
  components: {
    FormularioTarefa,
    TarefasListadas,
    BoxAmarelo
  },
  data() {
    return {
      tarefas: [] as ITarefa[]
    }
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0;
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    }
  }
});
</script>

<style scoped>
.tarefas {
  margin: 1.25rem;
}
</style>
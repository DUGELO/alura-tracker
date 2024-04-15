<template>
    <BoxAmarelo>
        <div class="columns">
            <div class="column is-7">
                {{ tarefa.descricao || 'Tarefa sem descrição'}}
            </div>
            <div class="column">
                <CronometroTarefa :tempo-em-segundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </BoxAmarelo>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CronometroTarefa from './CronometroTarefa.vue';
import ITarefas from '@/ITarefas';
import BoxAmarelo from './BoxAmarelo.vue';

export default defineComponent({
    name: 'TarefasListadas',
    components: {
        CronometroTarefa,
        BoxAmarelo
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefas>,
            required: true
        }
    }
})
</script>

<style scoped>
</style>
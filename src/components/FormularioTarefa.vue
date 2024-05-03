<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao">
            </div>
            <div class="column is-3">
                <div class="select">                                                                                                                                                                                                                                                                        
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option
                        :value="projeto.id"
                        v-for="projeto in projetos"
                        :key="projeto.id">
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="column">
                <div class="is-flex is-align-items-center is-justify-content-space-between">
                    <TemporizadorTarefa @temporizador-finalizado="finalizarTarefa" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import TemporizadorTarefa from './TemporizadorTarefa.vue';
import { useStore } from '@/store';
import { NOTIFICAR } from '@/store/tipo-mutacoes';
import { TipoNotificacao } from '@/interfaces/INotificacao';

export default defineComponent({
    name: 'FormularioTarefa',
    data() {
        return {
            descricao: '',
            idProjeto: ''
        }
    },
    components: {
        TemporizadorTarefa
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            const projeto = this.projetos.find(proj => proj.id == this.idProjeto)
            if (!projeto) {
                this.store.commit(NOTIFICAR, {
                    titulo: 'Erro!',
                    texto: 'Você deve selecionar um projeto para poder salvar a tarefa',
                    tipo: TipoNotificacao.FALHA
                })
                return ;
            }

            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao,
                projeto: this.projetos.find(proj => proj.id === this.idProjeto)
            });
            this.descricao = '';
        }
    },
    setup() {
        const store = useStore()
        return {
            projetos: computed(() => store.state.ProjetosView),
            store
        }
    },
    emits: [
        'aoSalvarTarefa'
    ]
})
</script>

<style>
.formulario {
    color: var(--text-primario);
    background-color: var(--bg-primario);
}

</style>
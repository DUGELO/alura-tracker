<template>
    <section>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">Nome do Projeto
                </label>
                <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto">
            </div>
            <div class="field">
                <button class="button" type="submit">Salvar</button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { useStore } from '@/store';
import useNotificador from '@/hooks/notificador'
import { defineComponent } from 'vue';
import { ADICIONA_PROJETO, ALTERA_PROJETO } from "@/store/tipo-mutacoes";
import { TipoNotificacao } from '@/interfaces/INotificacao';

export default defineComponent({
    name: 'FormularioView',
    mounted() {
        if (this.id) {
            const projeto = this.store.state.ProjetosView.find(proj => proj.id == this.id)
            this.nomeDoProjeto = projeto?.nome || ''
        }
    },
    data() {
        return {
            nomeDoProjeto: ''
        }
    },
    props: {
        id: {
            type: String
        }
    },
    methods: {
        salvar() {
            if (this.id) {
                this.store.commit(ALTERA_PROJETO, {
                    id: this.id,
                    nome: this.nomeDoProjeto
                })
            }
            else {
                this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
            }
            this.nomeDoProjeto = ''
            this.notificar(TipoNotificacao.SUCESSO, 'Novo projeto salvo', 'Pronto, Seu novo projeto foi salvo com sucesso')
            this.$router.push('/projetos')
        }
    },
    setup() {
        const store = useStore()
        const { notificar } = useNotificador()
        return {
            store,
            notificar
        }
    }
})
</script>

<style scoped>
</style>
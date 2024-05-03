<template>
    <div class="notificacao">
        <article class="message"
        :class="contexto[nota.tipo]"
        v-for="nota in notificacao"
        :key="nota.id">
            <div class="message-header">
                {{nota.titulo}}
            </div>
            <div class="message-body">
                {{nota.texto}}
            </div>
        </article>
    </div>
</template>

<script lang="ts">
import { TipoNotificacao } from '@/interfaces/INotificacao';
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent ({
    name: 'NotificacaoMessage',
    data () {
        return {
            contexto: {
                [TipoNotificacao.SUCESSO]: 'is-success',
                [TipoNotificacao.ATENCAO]: 'is-warning',
                [TipoNotificacao.FALHA]: 'is-danger'
            }
        }
    },
    setup () {
        const store = useStore()
        return {
            notificacao: computed(() => store.state.notificacao)
        }
    }
})
</script>

<style scoped>
.notificacao {
    position: absolute;
    right: 0;
    width: 300px;
    padding: 8px;
    z-index: 105;
}
</style>
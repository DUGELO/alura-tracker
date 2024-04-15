<template>
    <CronometroTarefa :tempoEmSegundos="tempoEmSegundos" />
    <BotaoIniciarParar @clicado="iniciarContagem" icone="fas fa-play" texto="play" :desabilitado="cronometroRodando" />
    <BotaoIniciarParar @clicado="finalizarContagem" icone="fas fa-stop" texto="stop" :desabilitado="!cronometroRodando"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CronometroTarefa from './CronometroTarefa.vue';
import BotaoIniciarParar from './BotaoIniciarParar.vue';

export default defineComponent({
    name: 'TemporizadorTarefa',
    components: {
        CronometroTarefa,
        BotaoIniciarParar
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },
    methods: {
        iniciarContagem() {
            //começar a contagem
            this.cronometroRodando = true;
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1
            },
                1000);
            console.log('iniciando');

        },
        finalizarContagem() {
            //finalizar a contagem
            this.cronometroRodando = false;
            console.log('finalizando');
            clearInterval(this.cronometro);
            this.$emit('TemporizadorFinalizado', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        }
    },
    emits: [
        'TemporizadorFinalizado'
    ]
})
</script>


<style scoped></style>
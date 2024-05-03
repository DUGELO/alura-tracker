import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO, DELETA_PROJETO, NOTIFICAR } from "./tipo-mutacoes";
import { INotificacao } from "@/interfaces/INotificacao";

interface Estado {
  ProjetosView: IProjeto[];
  notificacao: INotificacao[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    ProjetosView: [],
    notificacao: []
  },
  mutations: {
    [ADICIONA_PROJETO](state, nomeDoProjeto) {
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto,
      } as IProjeto;
      state.ProjetosView.push(projeto);
    },
   [ALTERA_PROJETO](state, projeto: IProjeto) {
      const index = state.ProjetosView.findIndex(proj => proj.id == projeto.id);
      state.ProjetosView[index] = projeto;
    },
   [DELETA_PROJETO](state, id: string) {
      state.ProjetosView = state.ProjetosView.filter(proj => proj.id != id)
    },
   [NOTIFICAR](state, novaNotificacao: INotificacao) {
    novaNotificacao.id = new Date().getTime()
    state.notificacao.push(novaNotificacao)

    setTimeout(() =>{
      state.notificacao = state.notificacao.filter(nota => nota.id != novaNotificacao.id)
      },
      3000
  )
    }
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}

const state = {
    counter: 0
};

const getters = {
    doubleCounter: state => {
      return state.counter * 2
    },
    stringCounter: state => {
      return state.counter + 'Clicks'
    }
};

const mutations = {
      increment: (state, payload) => {
          state.counter += payload;
      },
      decrement: (state, payload) => {
          state.counter -= payload;
      }
};

const actions = {
      increment: {{ commit } ,payload} => {
        commit('increment', payload)
      },
      decrement: {{ commit }, payload} => {
        commit('decrement', payload)
      },
      asyncIncrement: {{ commit }} => {
        setTimeout(() => {
          commit('asyncIncrement')
        },1000)
      },
      asyncDecrement: {{ commit }} => {
        setTimeout(() => {
          commit('asyncDecrement')
        },1000)
      }
};

export default {
    state,
    mutations,
    actions,
    getters
}

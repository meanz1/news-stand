// 뷰 상태
export default {
  state: {
    isGridView: true, // 그리드 뷰 인지
    isAllPress: true // 전체 언론사인지
  },
  mutations: {
    SET_VIEW_STATE(state, newState) {
      state.isGridView = newState
    },
    SET_PRESS_STATE(state, newState) {
      state.isAllPress = newState
    }
  },
  actions: {
    setViewState({ commit }, newState) {
      commit('SET_VIEW_STATE', newState)
    },
    setPressState({ commit }, newState) {
      commit('SET_PRESS_STATE', newState)
    }
  }
}

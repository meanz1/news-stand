// 뷰 상태
export default {
  state: {
    isGridView: true, // 그리드 뷰 인지
    isAllPress: true // 전체 언론사인지
  },
  mutations: {
    SET_USER_STATE(state, newState) {
      state.isGridView = newState.isGridView
      state.isAllPress = newState.isAllPress
    }
  },
  actions: {
    setUserState({ commit }, newState) {
      commit('SET_USER_STATE', newState)
    }
  }
}

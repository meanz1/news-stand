// 구독 여부, 다크모드
export default {
  state: {
    isDarkMode: false,
    currentPage: 1
  },
  mutations: {
    SET_USER_MODE(state, newState) {
      state.isDarkMode = newState
    },
    SET_CURRENT_PAGE(state, newState) {
      state.currentPage = newState
    }
  },
  actions: {
    setUserMode({ commit }, newState) {
      commit('SET_USER_MODE', newState)
    },
    setCurrentPage({ commit }, newState) {
      commit('SET_CURRENT_PAGE', newState)
    }
  }
}

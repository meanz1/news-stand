// 구독 여부, 다크모드
export default {
  state: {
    isSubscribe: false, // 각신문사 개수만큼 필요함. 배열로 관리
    isDarkMode: false
  },
  mutations: {
    SET_USER_STATE(state, newState) {
      state.isSubscribe = newState.isSubscribe
      state.isDarkMode = newState.isDarkMode
    }
  },
  actions: {
    setUserState({ commit }, newState) {
      commit('SET_USER_STATE', newState)
    }
  }
}

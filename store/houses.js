export const state = () => ({
  houses: []
})

export const mutations = {
  setHouses(state, newHouses) {
    state.houses.push(newHouses)
  }
}

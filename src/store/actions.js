export default {
  storageUsername(storage,username){
    storage.commit('storageUsername',username)
  },
  storageCartSum(storage,CartSum){
    storage.commit('storageCartSum',CartSum)
  }
}
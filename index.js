fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(let index in collection){
        const element = collection[index]
        callback(element, index, collection)
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []
      for(let index in collection){
        const value = collection[index]
        newCollection.push(callback(value, index, collection))
      }
      return newCollection
    },

    reduce: function(collection, callback, acc=0) {
      if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}
      for(let index in collection){
        const element = collection[index]
        acc = callback(acc, element, collection)
      }
      return acc
    },
    
    find: function(collection, callback) {
      for(let index in collection){
      const winner = collection[index]
      if(callback(winner))
      return winner
      }
    },
    filter: function(collection, callback){
      let winnerCollection = []
      for(let index in collection){
        const winner = collection[index]
        if(callback(winner)){
          winnerCollection.push(winner)
        }
      }
      return winnerCollection
    },

    size: function(collection){
      let counter = 0
      for(let index in collection){
        counter += 1
      }
      return counter
    },
    first: function(array, n=1){
      let collection = []
        if(n>1){
          for(let i = 0; i <n; i++){
            collection.push(array[i])
       }
    }else{
      collection = array[0]
    }
      return collection
  
  },

    last: function(array, n=1){
       let collection = []
          const lastIndex = array.length - 1
          if(n>1){
          for(let i = lastIndex; (lastIndex -i) < n; i--){
          collection.unshift(array[i])
        }
          }else{
          collection = array[lastIndex]
          }
        return collection
      }
  }
})()

fi.libraryMethod()

function myReplace(str, before, after) {
  let newArr = str.split(' ')

  for (let i = 0; i < newArr.length; i++) {

    if (newArr[i] == before) {

      if (before[0].toUpperCase() === before[0]) {
        after = after.slice(0, 1).toUpperCase() + after.slice(1)
      }
      else if (after[0].toUpperCase() === after[0]) {
        after = after.slice(0, 1).toLowerCase() + after.slice(1)
      }
      newArr[i] = newArr[i].replace(before, after)
      return newArr.join(' ')
    }

  }
  
}

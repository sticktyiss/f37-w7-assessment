const addToZero = nums => {
  let result = false
  for(let i=0; i<nums.length; i++){
    for(let j=1; j<nums.length; j++){
      if(nums[i]+nums[j] === 0){
        result = true
      } 
    }
  }
  return result
}
console.log(addToZero([1, 2, 3, 2]))
// O(n^2)
// Quadratic

const isUnique = letters => {
  let result = true
  for(let i=0; i<letters.length; i++){
    for(let j=i+1; j<letters.length; j++){
      if(letters[i] === letters[j]){
        result = false
      } 
    }
  }
  return result
}
console.log(isUnique('moonday'))
// O(n^2)
// Quadratic

const isPangram = phrase => {
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
  phrase = phrase.toLowerCase()
  return alphabet.every(letter => phrase.includes(letter))
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// O(n)
// Linear

const findLongestWord = words => {
  let longest = words.reduce((a, b) => a.length < b.length ? b : a, "")
  return longest.length
}
console.log(findLongestWord(['hi','hello']))
// O(n)
// Linear
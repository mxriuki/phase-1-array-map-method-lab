const titleCased = () => {
  return tutorials
}
    return tutorials.map(tutorial => {
      let words=tutorial.split(' ')
      let capitalizedWords=words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
      let result=capitalizedWords.join(' ')
      return result
    })
  }




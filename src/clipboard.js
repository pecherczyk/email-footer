navigator.clipboard.read().then(
  function(response) {
    const a = response[0].getType('text/html')
    console.log(a)
    a.then(function(r) {
      console.log(r)
    })
  },
  function(reason) {
    console.log(reason)
  }
)
    process.on("message", (message) => {
      console.log("child", message)
      setTimeout(() => {
        console.log(message)
      }, 2000)
    })


    


    test().then(test())
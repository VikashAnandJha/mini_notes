document.getElementById("test").addEventListener("click",function(){

    let text=document.getElementById("textinput").value;
    console.log(text)
    func(text)
  })
  const func = async (text) => {
    const response = await window.versions.ping(text)
    console.log(response) // prints out 'pong'
  }
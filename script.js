var count=document.querySelector("#char-count")
setInterval(()=>{
    len=document.querySelector(".textarea-posting").value
    count.innerText=len.length
},100)


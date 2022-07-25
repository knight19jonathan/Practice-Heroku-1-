fetch ("/topics").then(res=>res.json()).then(data=>{
    console.log(data);
    data.array.forEach(topic=> {
        const newLi = document.createElement("li");
        newLi.textContent = topic.comment 
        document.querySelector("#topics").append(newLi)
    });

})

document.querySelector("#new-topic-form").addEventListener("submit",e=>{
    e.preventDefault();
    const myTopic = {
        author:document.querySelector("#author-name").value,
        comment:document.querySelector("#comment-content").value,
        category:document.querySelector("#top-cat").value,
        id:document.querySelector("#idNum").value,
    }
    console.log(myTopic);
    fetch("/topics",{
        method:"POST",
        body:JSON.stringify(myTopic),
        headers:{
            "Content-Type":"application.json"
        }
    }).then(res=>res.json()).then(data=>{
        console.log(data)
        location.reload();
    })
        
})
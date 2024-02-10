/**
 * Updates the character count in real-time for a textarea element.
 * @param {HTMLElement} textarea - The textarea element to monitor.
 * @param {HTMLElement} countElement - The element to display the character count.
 * @param {number} interval - The interval in milliseconds to update the character count.
 */
var count=document.querySelector("#char-count")
setInterval(()=>{
    len=document.querySelector(".textarea-posting").value
    count.innerText=len.length
},100)

function post(){
    var post=document.querySelector(".textarea-posting").value
   
    
    if(post.length>0){   
        var newDiv=document.createElement("div")
        newDiv.className="main-post-block"
        newDiv.innerHTML=`<div class="post-appears">
        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="posting logo">
        <div class="post-appears-right">
            <div class="top">
                <div class="user">
                    <h3>Joanne Graham</h3>
                    <p>@joannegraham123</p>
                </div>
                <div class="buttondelete">
                    <img  src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661"  alt="edit-logo">
                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643"  class="delete1" alt="delete-logo">
                </div>        
            </div>
            <textarea cols="30" rows="10" class="textarea-posted"></textarea>
            <div class="heart-comment">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="comment-logo">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679"  class="heart" alt="like-logo">
            </div>
        </div>
        </div>`
        newDiv.querySelector(".textarea-posted").innerText=post
        document.querySelector(".right").appendChild(newDiv)
        document.querySelector(".textarea-posting").value=""
    }

}
    // when i press enter key the post button gets clicked and the post is posted
    document.querySelector(".textarea-posting").addEventListener("keydown",(e)=>{
        if(e.key=="Enter"){
            post()
        }
    })

  
    document.addEventListener("click",(e)=>{
        if(e.target.classList.contains("delete")){
            e.target.parentElement.parentElement.parentElement.parentElement.remove()
        }
        if(e.target.classList.contains("heart")){
            if(e.target.src=="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679"){
                e.target.src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455"
                e.target.style.width="22px" 
                e.target.style.height="20px" 
            }
            else{
                e.target.src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679"
            }
        }
    })
    // whenver i click on the comment image a new div apeears with the main-post-block class give the complete thing
    document.addEventListener("click",(e)=>{
        if(e.target.src=="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619"){
            var newDiv=document.createElement("div")
            newDiv.className="comment-box"
            newDiv.innerHTML=`<img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="posting logo">
            <div class="comment-box-right">
                <div class="top-comment">
                    <div class="user-comment">
                        <h3>Joanne Graham</h3>
                        <p>@joannegraham123</p>
                    </div>
                    <div class="buttondelete-comment">
                        <img  src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661"  alt="edit-logo">
                        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643"  class="delete" alt="delete-logo">
                    </div>        
                </div>
                <textarea cols="30" rows="10" class="textarea-posted"></textarea>
                <div class="heart-comment-comment">
                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679"  class="heart" alt="like-logo">
                </div>
            </div>`
            e.target.parentElement.parentElement.parentElement.parentElement.appendChild(newDiv)
        }
    })

    document.addEventListener("click",(e)=>{
        if(e.target.classList.contains("delete1")){
            e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
        }
    })



    




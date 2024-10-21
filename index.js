const newPost = document.getElementById("postForm"); 

const submitButton = document.getElementById('submitBtn'); 

const infoMessage = document.getElementById('categories').nextElementSibling; 

submitButton.addEventListener('click', submitPost); 

const posts = document.getElementById('allPosts'); 

console.log(posts); 

function submitPost(e) {
  e.preventDefault(); 
  
let category = newPost.elements["postCategory"].value; 
let title = newPost.elements["postTitle"].value; 
let date = newPost.elements["postDate"].value; 
let description = newPost.elements["postDescription"].value; 
let image = newPost.elements["postImage"]; 

  const frag = document.createDocumentFragment(); 

  const divPost = document.createElement('div'); 

  divPost.classList.add("post", "col-md-2"); 

  const secondDiv = document.createElement('div'); 

  secondDiv.classList.add("row", "g-0", "border", "rounded", "overflow-hidden", "justify-content-center", "mb-4", "shadow-sm", "h-md-250", "position-relative"); 

  const postInfo = document.createElement('div'); 

  postInfo.classList.add("col", "p-4", "d-flex", "flex-column", "position-static"); 

  const strong = document.createElement('strong'); 

  strong.classList.add("d-inline-block", "mb-2", "text-success-emphasis"); 

  strong.textContent = category; 
  postInfo.appendChild(strong);

  const headingThree = document.createElement('h3'); 

  headingThree.classList.add("mb-0"); 
  headingThree.textContent = title; 
  postInfo.appendChild(headingThree); 

  const divDate = document.createElement('div'); 
  
  divDate.classList.add("mb-1"); 
  divDate.textContent = date; 
  postInfo.appendChild(divDate); 

  const postText = document.createElement("p"); 

  postText.classList.add("mb-auto"); 
  postText.textContent = description; 
  postInfo.appendChild(postText); 

  const anchor = document.createElement("a"); 
  anchor.setAttribute('href', '#'); 
  anchor.classList.add("icon-link", "gap-1", "icon-link-hover", "stretched-link"); 
  anchor.textContent = 'Continue reading'; 
  postInfo.appendChild(anchor); 

  secondDiv.appendChild(postInfo); 

  const postImageDiv = document.createElement('div'); 

  postImageDiv.classList.add("col-auto", "d-none", "d-lg-block"); 

  const imageUpload = document.createElement('img'); 
  imageUpload.style.width = '100%'; 
  imageUpload.style.height = '100%'; 
  imageUpload.style.paddingTop = '10px'; 

  imageUpload.src = URL.createObjectURL(image.files[0]); 

  secondDiv.appendChild(imageUpload); 

  const deleteButton = document.createElement('button'); 

  deleteButton.classList.add("btn"); 
  deleteButton.style.backgroundColor = "#0D3B66"; 
  deleteButton.style.color = "#FAF0CA"; 
  deleteButton.setAttribute('type', 'submit'); 
  deleteButton.textContent = "Remove Post"; 


  divPost.appendChild(secondDiv); 

  divPost.appendChild(deleteButton); 

  frag.appendChild(divPost); 

  posts.appendChild(frag); 

    
  // console.log(category, title, date, description, image); 
}
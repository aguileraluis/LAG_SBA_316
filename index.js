let postItems = [
  { id: 0, cat: 'World', title: 'Featured Post', date: 'Nov 12', text: 'This is a wider card with supporting text below as a natural lead-in to additional content.', image: 'https://external-preview.redd.it/thousands-of-software-engineers-say-the-job-market-is-v0-eP2MZxL4cKYAAjjdzstSUogHjgcTd6lr9CSlqLaOGWA.jpg?auto=webp&s=82e31c88b189e6423cdf1b4171a8bdb61314dc7a'}, 
  { id: 1, cat: 'Design', title: 'A really cool post', date: 'Sep 13', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, non.', image: 'https://eranstiller.com/wp-content/uploads/2023/09/Software-Engineer-Skills-Problem-Solving.png'}, 
  { id: 2, cat: 'Art', title: 'An awesome Post.', date: 'Oct 09', text: 'This is a wider card with supporting text below as a natural lead-in to additional content', image: 'https://www.logic-fruit.com/wp-content/uploads/2023/01/SDLC-Thumbnail-1024x538.jpg.webp'}
]; 

const newPost = document.getElementById("postForm"); 

const submitButton = document.getElementById('submitBtn'); 

const infoMessage = document.querySelector('div.categories').nextElementSibling;

submitButton.addEventListener('click', submitPost); 

const posts = document.getElementById('allPosts'); 

let success =8; 
let nums = 0; 

function populatePosts() {

  postItems.forEach((item) => {
    const frag = document.createDocumentFragment(); 

    const divPost = document.createElement('div'); 
  
    divPost.classList.add("post", "col-md-2"); 

    divPost.setAttribute('id', item.id); 
  
    const secondDiv = document.createElement('div'); 
  
    secondDiv.classList.add("row", "g-0", "border", "rounded", "overflow-hidden", "justify-content-center", "mb-4", "shadow-sm", "h-md-250", "position-relative"); 
  
    const postInfo = document.createElement('div'); 

    postInfo.classList.add("col", "p-4", "d-flex", "flex-column", "position-static"); 
  
    const strong = document.createElement('strong'); 
  
    strong.classList.add("d-inline-block", "mb-2", "text-success-emphasis"); 
  
    strong.textContent = item.cat; 
    postInfo.appendChild(strong);
  
    const headingThree = document.createElement('h3'); 
  
    headingThree.classList.add("mb-0"); 
    headingThree.textContent = item.title; 
    postInfo.appendChild(headingThree); 
  
    const divDate = document.createElement('div'); 
    
    divDate.classList.add("mb-1"); 
    divDate.textContent = item.date; 
    postInfo.appendChild(divDate); 
  
    const postText = document.createElement("p"); 
  
    postText.classList.add("mb-auto"); 
    postText.textContent = item.text; 
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
  
    imageUpload.src = item.image; 
  
    secondDiv.appendChild(imageUpload); 
  
    const deleteButton = document.createElement('button'); 
  
    deleteButton.classList.add("btn", "deleteButton"); 
    deleteButton.style.backgroundColor = "#0D3B66"; 
    deleteButton.style.color = "#FAF0CA"; 
    deleteButton.setAttribute('type', 'submit'); 
    deleteButton.textContent = "Remove Post"; 
    deleteButton.addEventListener('click', handleDelete); 
  
  
    divPost.appendChild(secondDiv); 
  
    divPost.appendChild(deleteButton); 
  
    frag.appendChild(divPost); 
  
    posts.appendChild(frag); 
  })  
}
populatePosts(); 

function submitPost(e) {
  e.preventDefault(); 
  
let category = newPost.elements["postCategory"].value; 
let title = newPost.elements["postTitle"].value; 
let date = newPost.elements["postDate"].value; 
let description = newPost.elements["postDescription"].value; 
let image = newPost.elements["postImage"]; 

let dateTest = /^\d{1,2}\/\d{1,2}\/\d{4}$/g; 
let categoryTest = /^\w+$/g; 
let titleTest = /^.*\w.*\s.*\w.*$/g;  


if (category === "") {
  infoMessage.innerHTML = "Please provide a username.";
    infoMessage.style.display = "flex";
    alert('You must provide a category name that is one word.')
    newPost.elements["postCategory"].focus();
    newPost.elements["postCategory"].style.border = "3px solid red";
    return;
} else {
  newPost.elements["postCategory"].style.border = "3px solid aqua"; 
  nums += 1; 
}

if (title === "") {
  infoMessage.innerHTML = "Please provide a username.";
    infoMessage.style.display = "flex";
    alert('You must provide a title that is more than a few words.')
    newPost.elements["postTitle"].focus();
    newPost.elements["postTitle"].style.border = "3px solid red";
    return;
} else {
  newPost.elements["postTitle"].style.border = "3px solid aqua";
  nums += 1; 
}

if (date === "") {
  infoMessage.innerHTML = "Please provide a username.";
    infoMessage.style.display = "flex";
    alert('You must provide a date that is in the mm/dd/yyyy format')
    newPost.elements["postDate"].focus();
    newPost.elements["postDate"].style.border = "3px solid red";
    return;
} else {
  newPost.elements["postDate"].style.border = "3px solid aqua";
  nums += 1; 
}

if (description === "") {
  infoMessage.innerHTML = "Please provide a username.";
    infoMessage.style.display = "flex";
    alert('You must provide a description that is more than a few words.')
    newPost.elements["postDescription"].focus();
    newPost.elements["postDescription"].style.border = "3px solid red";
    return;
} else {
  newPost.elements["postDescription"].style.border = "3px solid aqua";
  nums += 1; 
}

if (image.files.length === 0) {
  alert('Please select an image that is of image format.'); 
  newPost.elements["postImage"].focus(); 
  newPost.elements["postImage"].style.border = "3px solid red";
  return;

} else {
  newPost.elements["postImage"].style.border = "3px solid aqua";
  nums += 1; 
}

if (!dateTest.test(date)){
  alert("Please provide date format in mm/dd/yyyy."); 
  newPost.elements["postDate"].focus(); 
  newPost.elements["postDate"].style.border = "3px solid red";
  return;
} else {
  newPost.elements["postDate"].style.border = "3px solid aqua";
  nums += 1; 
}

if (!categoryTest.test(category)){
  alert("Please provide a category that is only one word and has no spaces."); 
  newPost.elements["postCategory"].focus(); 
  newPost.elements["postCategory"].style.border = "3px solid red";
  return;
} else {
  newPost.elements["postCategory"].style.border = "3px solid aqua";
  nums += 1; 
}

if (!titleTest.test(title)){
  alert("Please provide a title that is more than one word."); 
  newPost.elements["postTitle"].focus(); 
  newPost.elements["postTitle"].style.border = "3px solid red";
  return;
} else {
  newPost.elements["postTitle"].style.border = "3px solid aqua";
  nums += 1; 
}

  const frag = document.createDocumentFragment(); 

  const divPost = document.createElement('div'); 

  divPost.classList.add("post", "col-md-2"); 
  divPost.setAttribute('id', postItems.length); 

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
  deleteButton.addEventListener('click', handleDelete); 

  divPost.appendChild(secondDiv); 

  divPost.appendChild(deleteButton); 

  frag.appendChild(divPost); 

  posts.appendChild(frag); 

  postItems.push({
    id: postItems.length, cat: category, title: title, date: date, text: description, image: image
  }); 

 
    alert('Congratulations! Your blog past has been added successfully.')
  newPost.reset(); 

}

function handleDelete(e) {
  e.preventDefault(); 
  let confirm = prompt('Are you sure you want to delete this blog post? Type "yes" to confirm.'); 

  if (confirm === "yes") {
  let currPost = e.target.parentNode;  
  currPost.remove(); 

  infoMessage.innerHTML = "Your blog post has been deleted successfully."; 
  infoMessage.style.display = "flex"; 
  }
  setTimeout(function () {
    infoMessage.style.display = "none";
    infoMessage.innerHTML = "";
  }, 9000);

}; 






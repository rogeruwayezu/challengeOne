
async function fetchUsers() {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await result.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

function displayUsers() {
    let allUsers;
    fetchUsers().then(data => {
        allUsers = data;
        allUsers.forEach((user, index) => {
            // Adding User's name to the DOM;
                const para = document.querySelector('.user-' + index);
                para.innerHTML = `Name: ${user.name}`;
                document.body.appendChild(para);
                
                // adding email to the DOM
                const email = document.getElementById('email-' + index);
                email.innerHTML = `Email: ${user.email}`;
                document.body.appendChild(email);

                //creating a button for displaying posts
                const btn = document.createElement("BUTTON");
                btn.innerHTML = "View Post";
                document.body.appendChild(btn);
                btn.setAttribute('id', user.id);
                btn.setAttribute('class', `myBtn-${user.id}`);
                var element = document.querySelector('.container-user');
            element.classList.add("card");
            displayPosts(user);

            
            
            
        });
                    

    });

}
displayUsers();

function displayPosts(user) {
    var modal;
    var btnClick;
    var span;
    var modalContent;
    function modalSelector() {
            // Get the modal
        
        modal = document.getElementById("myModal");

    // Get the button that opens the modal
    btnClick = document.querySelector(".myBtn-" + user.id);

    // Get the <span> element that closes the modal
    span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btnClick.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
//         modalContent = document.querySelector('.modal-content');
//                    while (modalContent.hasChildNodes()) {
//     modalContent.removeChild(modalContent.lastChild);
// }
    }
    modalSelector();
    // alert(`here is the user id ${user.id}`)
    

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        modalSelector();
        if (event.target == modal) {
            modal.style.display = "none";
        }
        //start
        var buttonEvent = event.target;
        if (buttonEvent.nodeName == "BUTTON") {
            modalSelector();
            // alert(event.target.id);
            //Passing user' id to fetchPosts function
            let userPosts;
            fetchPosts(buttonEvent.id).then(data => {
                userPosts = data;
                // console.log(userPosts);
                var titlePost;
                var body;
                var modalContent;
                console.log('here I am again');
                userPosts.forEach((post, index) => {
                    
                    
                    // console.log(`Title: ${post.title}`);
                    titlePost = document.createElement('p');
                    
                    titlePost.innerHTML = `Title: ${post.title}`;
                    console.log(titlePost);
                    // document.querySelector('.modal-content p').innerHTML = '';
                        document.querySelector('.modal-content').appendChild(titlePost);
                    
                    // adding post body to the DOM
                    
                    body = document.createElement('p');
                    
                    body.innerHTML = `body: ${post.body}`;
                    modalContent = document.querySelector('.modal-content');
                    modalContent.appendChild(body);
                    
                    // console.log(body);

                    // btnClick = document.querySelector(".myBtn-" + post.userId);

                });

     

            });

        }     
                        
        //end                
    }
}

/***** Promise for Fetching user's posts ******/  
async function fetchPosts(user_id) {
    try {
        // const data = "";
        const result = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
        data = await result.json();
        // console.log(data)
        return data;
    }
    catch (error) {
        console.log(console.error);
    }
    
}

/***** function for catching user's id when 
        the view post button is clicked *****/

function reply_click(event){
    

}
  







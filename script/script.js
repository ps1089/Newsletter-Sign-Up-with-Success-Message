let email_input = document.querySelector("#email-box");
let page1 = document.querySelector("#content-1");
let page2 = document.querySelector("#content-2");
let email_space = document.querySelector("#req-email");
let error_msg = document.querySelector("#error-msg");
let form = document.querySelector("form");
let dismiss = document.querySelector("#content-2 button");

page1.addEventListener("mousemove",function(d)
{
    if(email_input.checkValidity())
    error_msg.classList.add('hide-2');
    else
    error_msg.classList.remove('hide-2');
});


email_input.addEventListener("keypress",function(d)
{
    if(email_input.checkValidity())
    error_msg.classList.add('hide-2');
    else
    error_msg.classList.remove('hide-2');
});


form.addEventListener("submit",function(e) 
{
    e.preventDefault();
    email_space.textContent = email_input.value;
    page1.classList.add("hide");
    page2.classList.remove("hide");

});   

dismiss.addEventListener("click",(dets)=> document.querySelector("#container").classList.add("hide"),);

// The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. 
// For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form. 
// Clicking on a link, prevent the link from following the URL.
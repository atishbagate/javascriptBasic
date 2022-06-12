/*
window obj :-                                                   
window is the main container or                                  
we can say the Global Object and any operations related to entire
browser window cn be a part of window object.

all the members like object,methods or properties.,
if they are part of window object then we doo not refert window object

window has methods,properties,and object/. ex:-
setTimeout() or setInterval() are the methods.where as document is the object
of the window and it also has a screen object of the window
with properties describing the physical display/.


document :-
whereas the DOM is the child of window object.

where in the DOM we need to refer the document,if we want to use the document object,
method or properties.

html related kaam raha toh document use karana hoga .

document is just the object of the global object that is window which deals with the document,the HTML elements themselves.

BOM:- browser object model :- which deals with browser components
aside from document like history location ,navigation and screen (as well as some others that very by browser) OR
in simple meaning all the window operation which comes under the BOM are performed. using BOM.

properties of window object are :- innerHeight, innerWidth.

DOM VS BOM
DOM which deals with the document, the HTML elemet themselves, e.g. document and all traversal you would do in it,events,etc.

ex: changeing background :- document.body.style.background="red";

BOM is the Browser Object Model which deals with browser components aside from the document, like history,location,navigator,and screen
(as well as some others that vary by browser) OR in simple meaning all the window operations which comes under BOM are performed using BOM

section 3: nsvigation through the DOM
1: document.documentElement //returns the root Element of the document
document.head //show the  head of file
document.body.childNodes //shows the nodes of child
document.body.children //list of child 
document.body.children.length() //number of nodes 
how to find a child in node :- document.hasChildNodes()

  const textChange = () => {
        //     //1st type = we can directly write 
        //     document.getElementById('heading').innerHTML = "text changed.";
        // }
            //2nd type = by taking reference, heading is the object here
            // const headchange = document.getElementById('heading');
        //     headchange.innerHTML = "content changed.";
        //     //to see the element by using class name (class name may be repeated.)
        //     console.log(document.getElementsByClassName('child')); 
        //     //we can get element by using TagName 
        //     console.log(document.getElementsByTagName('p'));
        //     //get element by name 
        //     console.log(document.getElementsByName('gender'));
            //query selector is used to select class it tag directly and make the changes.
            // . for class 
            // # for id 
            // and tag name direclty
                // document.querySelector('.child').innerHTML = "i  changed";
     
                //shows all queries with class child.
            // console.log(document.querySelectorAll('.child'));
    }
    </script>















*/ 
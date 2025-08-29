#javascript Dom & Events - Answers
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans 1 no:
(i)getElementById(): The mehtod allows  select  only one element because Id must always be Unique element.
IF the  specified Id does not exits,it retruns null.once selected you can directly manipulate the elements properties such as innter Text or css styles.

(ii)getElementByClassName: This lets us select all elements sharing a prticular class name It returns an HTMLCollection which is not a real array but can be iterated using loops .you cannot directly call array menthods on it but looping over each elements works perfectly.

(iii) getElmentsByclassName: This is used to select the first element the matches a css selector you can use it whith an ID class tag any valid CSS selector.
(ivquerySelectorAll: This grabs all elements matching the selector and returns a NodeList .It  is very usefull  than  HTMLCollection because you can use both for loops and forEach to iterate through th results, similar to arrays.

2.How do you create and insert a new element into the DOM?
ans 2 no:use document.createElements(tagname) to create a new elements .Intitialy,it exits only in memory and is not visible on the webpage.
Add content text or attributes to the newly created element. insert the element into the Dom using methods like appendChild or insertBefore.

3.What is Event Bubbling and how does it work?
 Event Bubbling : Event Bubbling is when an event clicked on a child elements automatically moves to parent elemets in the Dom.
 How it works:
The events fires first on the target element.
 Output when clicking child:
 child clicked
 parent clicked

 
4.What is Event Delegation in JavaScript? Why is it useful?
Event delegation:Event Delegation is technique where a signle event listener is atteched to parent element to handle events from children.
Why it's usefull:
reduces memory usage because fewer event listeners are needed.
works for dynamically added elements that don't exits when the page loads.



5.What is the difference between preventDefault() and stopPropagation() methods?
(i) preventDefault():
This method is used to prevent the default action of an element.for example when a form is submited   and the browser usually performs its default behavior (like page reload or navigaion).using e.preventDefalult() stops that default action.
(ii) stopPropagation(): stopPropagation()  is called for the stop event bubbling or capturing.the confirm event parent or ancestor elements does not go.

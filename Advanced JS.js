// Bubbling and capturingBubbling and capturing
/*Let’s start with an example.

This handler is assigned to <div>, but also runs if you click any nested tag like <em> or <code>:

<div onclick="alert('The handler!')">
  <em>If you click on <code>EM</code>, the handler on <code>DIV</code> runs.</em>
</div>

Isn’t it a bit strange? Why does the handler on <div> run if the actual click was on <em>
Bubbling-> When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
 <button onclick="event.stopPropagation()">Click me</button>
 If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute.

In other words, event.stopPropagation() stops the move upwards, but on the current element all other handlers will run.
Capturing
There’s another phase of event processing called “capturing”. It is rarely used in real code, but sometimes can be useful.

The standard DOM Events describes 3 phases of event propagation:

Capturing phase – the event goes down to the element.
Target phase – the event reached the target element.
Bubbling phase – the event bubbles up from the element.
<script>
  for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
    elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
  }
</script>
If we addEventListener(..., true), then we should mention the same phase in removeEventListener(..., true) to correctly remove the handler.
If we have multiple event handlers on the same phase, assigned to the same element with addEventListener, they run in the same order as they are created:
elem.addEventListener("click", e => alert(1)); // guaranteed to trigger first
elem.addEventListener("click", e => alert(2));
*/
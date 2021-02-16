It's pretty straightforward.

I'd hold the current page number into a variable and update it whenever user scrolls down (scrollTop > window.clientHeight - 50).

I'd probably create a hook for it.

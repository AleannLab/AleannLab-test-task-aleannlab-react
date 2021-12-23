<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=100px src="src/assets/logo.svg" alt="Project logo"></a>
</p>

# Frontend Challenge

## Get Started

Clone this repo

```
> cd AleannLab-test-task-aleannlab-react
> npm install
> npm start
```

## Overview

This simple eCommerce site is almost complete! There are a few UX issues to address and features we'd like to add to get us to the finish line. Questions are encouraged, [Ask us](mailto:job@aleannlab.com&subject=Questions%20about%20FE%20code%20challenge) about requirements, expectations, and unclear goals. Someone will get back to you as soon as possible.

The assignment should only take a few of hours, but take as long as you need. We expect you to do this on your own and treat it like a real client project with the same level of care, quality code and good commits. Feel free to edit any of the existing code. After completing the assignment, please also commit your answers to the questions [below](#follow-up-questions).

Have fun, and good luck!

## Assignment

### Catalog

- Filter products

  - Create an input field at the top of the page that filters by product name
    - Should have a placeholder of `Search for products`
  - Only products matching the query params should be rendered
  - Show the total products found underneath the input field, eg. `2 products found`

- Available inventory

  - If quantity > 0, enable `Add to Cart` button
  - If item is removed from cart, enable `Add to Cart` button

- Unavailable inventory
  - Change product badge to `Out of Stock` when the inventory count is 0
  - Desaturate the product photo to grayscale
  - Disable the `Add to Cart` button

### Cart

- Product in cart
  - Clicking `Add to Cart` should add a unique product or increase the quantity of an existing product in cart
    - Only show unique products
  - Create a modifiable number-input field to display the quantity of each item
    - Allows for manual edit of quantity
    - Allows for increment & decrement of quantity
    - Cannot be below 1
    - Cannot exceed inventory
  - Unique product cost should update as item is incremented and decremented
    - Price of unique item should calculate as `product cost * quantity`
  - Remove button exists to the right of modifiable number-input field
    - Clicking button will remove unique item from cart display
- Item count
  - Show the total of unique items contained in the cart
    - Display to the right of cart heading, eg. `Cart (3)`
    - Update count when new unique items are added
    - Update count when removing items
- Checkout total
  - Display the total cost of all items below cart items, `eg. Total $240`
  - Update the cart total when adding items
  - Update the cart total when removing items

Finished?

Double check that the application runs smoothly, and you are comfortable deploying this to production. Will your client and other engineers be happy with your work? Have you thought about possible edge cases or improvements? Make final adjustments as needed and proceed to the next section

<h2 id="follow-up-questions">Follow Up Questions</h2>

Answer the follow questions inline, and commit it to your submission

**1.** Explain the flow of data from the store to the UI and back as simply as you can.

**2.** How else can we improve the experience of the site? What suggestions can you make to the product team and the development team?

**3.** What recommendations can you make to the development team for scalability?

**4.** What knowledge up front could have helped this go smoother or faster?

**5.** How was it working around these libraries? Anything trip you up?

## Submit

When you're done, push your code to a private GitHub repository under your username
(e.g. github.com/your-username/test-task-react-aleannlab). Give access permissions for the repo to our team

job@aleannlab.com

Thanks for taking the time to complete the assignment!

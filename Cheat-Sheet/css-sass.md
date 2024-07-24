# css / sass

- [document](https://star-academy.github.io/codestar-documents/docs/frontend/phase04-css-and-sass)

Table Of Contents

- [css / sass](#css--sass)
  - [Box Model](#box-model)
  - [Units](#units)
    - [Convert px to rem](#convert-px-to-rem)
  - [Selectors](#selectors)
    - [Basic Selectors](#basic-selectors)
      - [CSS Universal Selector](#css-universal-selector)
    - [Relational Selectors](#relational-selectors)
    - [Pseudo-class Selectors](#pseudo-class-selectors)
    - [Pseudo-element Selectors](#pseudo-element-selectors)
    - [Selectors Specificity](#selectors-specificity)

## Box Model

By default, the width and height properties are applied to the `content-box`. So paddings
and borders increase the size of the visible box. This behavior can be changed by setting
the box-sizing property to `border-box`.

```css
div { 
    width: 5rem;
    height: 20%;
    box-sizing: content-box; /* default */
    box-sizing: border-box; /* To prevent paddings/borders from increasing the size of the visible box. */
}
```

## Units

Measurement units in CSS fall into two categories: absolute and relative units. Examples
of absolute units are px, pt, in, cm, etc. Examples of relative units are %, vw, vh, em and
rem.

| Absolute | relative |
| :---: | :---: |
| px (pixel) | % (reletive to the size of the container) |
| pt (point) | fr (fraction of the available apace) |
| in (inch) | vh (reletive to the viewport) |
| cm (centimeter) | vw (reletive to the viewport) |
| mm (millimeter) | em (reletive to the font size) |
| ch ( width of char '0') | rem (reletive to the font size) |
| ex ( height of char 'x') |  |

```css
div { 
    width: 100px;
    width: 50%; /* 50% of the width of the parent */

    width: 50vw; /* viewport width */
    height: 100vh; /* viewport height */


    width: 10em; /* 10 * font size of the current element (10 * 16 = 160px)  */
    width: 10rem; /* 10 * font size of the root element (10 * 16 = 160px)  */
}
```

why use rem and em instead of px? Because they are relative to the font size, so they are
more flexible and easier to maintain.

### Convert px to rem

```css
html {
    font-size: 62.5%; /* 10px */
}
```

## Selectors

We can select elements by their type, class, attribute or ID.

Relational selectors help us select elements without the need to assign them a specific ID
or class. This, however, can result in fragile styles. If we move elements around, our CSS
rules may break. We can still use them in situations where we are certain about the
location of elements

### Basic Selectors

| article | All article elements |
| :---: | :---: |
| .product | Elements with the product class |
| #products | The element with the ID of products |
| a[href="…"] | Anchors with the given href  |
| a[href*="google"] | Anchors whose href contains google |
| a[href^="https"] | Anchors whose href starts with https |
| a[href$=".com"] | Anchors whose href ends with .com  |
| a\[href^="https"\]\[href$=".com"\] | Anchors whose href starts with https and ends with .com  |

#### CSS Universal Selector

The universal selector (*) selects all HTML elements on the page.

```css
* {
  text-align: center;
  color: blue;
}
```

### Relational Selectors

- cleaner markup
- can be fragile
- not as fast as basic selectors

| #products p | All p elements inside #products |
| :---: | :---: |
| #products > p | All p elements that are direct children of #products |
| #products + p | The p element immediately after #products (sibling) |
| #products ~ p | All p elements after #products (siblings) |

### Pseudo-class Selectors

> We can take advantage of pseudo-classes to target elements without the need to give
> them a specific class. The most common pseudo-classes are: first-child, first-of-type, last-child,
> last-of-type and nth-child. Pseudo-classes start with
> a single colon.

| article :first-child | The first child of article elements |
| :---: | :---: |
| article :first-of-type | The first occurrence of elements of different type |
| article p:first-of-type | The first p element inside article elements |
| article :last-child |  |
| article :last-of-type |  |
| article :nth-child(odd) |  |
| article :nth-child(even) |  |
| article :nth-child(3n) |  |
| a :visited | applied to all visited hyperlinks |
| a :link | applied to all hyperlinks |
| a :focus | gose over the elements on the page using the tab key |
| a :hover | hover effect(any elements) |

### Pseudo-element Selectors

> With pseudo-elements we can style a part of an element. The most common pseudo-elements are:
> first-letter, first-line, selection, before and after.
> Pseudo-elements start with double colons.

| p::first-letter | The first letter of every p element |
| :---: | :---: |
| p::first-line | The first line of every p element |
| ::selection | Any selected element |
| p::before | To insert content before the content of p elements |
| p::after | To insert content after the content of p elements |

### Selectors Specificity

- ID Selector
- Class & attribute Selector
- Element Selector

Selectors specificity determines the weight of a selector. When multiple selectors target
the same element, the browser applies the selector with the higher specificity (weight). If
two selectors have the same specificity, the one that comes last is the winner.

ID selectors are the most specific selectors because we cannot have multiple elements
with the same ID. Class and attribute selectors are less specific because we can have
many elements with the same class and/or attributes. Element selectors are the least
specific selectors.

In VSCode, we can see the specificity of a rule by hovering our mouse over it. The
specificity is represented using three numbers (x, y, z) where x represents the number of
ID selectors, y represents the number of class/attribute selectors and z represents the
number of element selectors.

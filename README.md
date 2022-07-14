# PROJECT ON MOCK DATA & FILTERING

## INTRODUCTION [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react)

This project is a simple app with wireframe design created from Helicarrier React Developer interview. It shows a view of a mock dataset I created using graphql-faker; an ....... . The mock dataset is grouped by their date of creation and can be filtered by their types or status of data with specified filter components. They can also be searched through with a search box

## STACKS/PACKAGES USED

- `React`
- `Mockaroo` (a free test data generator & API mocking tool)
- `AOS` (Animate on Scroll for the smooth scroll effect)

```jsx
import {} from "react-dom";
....
<h2>22/33/44 </h2>
      {JSONDATA_1.filter((wrd) => {
        if (searchItem === "") {
          return wrd;
        } else if (
          wrd.first_name.toLowerCase().includes(searchItem.toLowerCase())
        ) {
          return wrd;
        } else if (
          wrd.last_name.toLowerCase().includes(searchItem.toLowerCase())
        ) {
          return wrd;
        }
      }).map((deal, key) => {
        return (
        .... 
```

## METHODOLOGY
I mocked data from a site called [Mockaroo](mockaroo.com) and saved the data as a JSON file with data collected grouped under the following columns: 
- ID
- First Name
- Last Name
- Gender
- Email
- IP Address

I had 5 different data files and used the map method to display them. I then hard coded the dates as a group effect. I used the `filter` method to ensure that when only First and Last Name are searched, they would be displayed and when they don't match, nothing will be rendered. I used `useState` hook to represent the search item that will be currently displayed in the input (Searchbox). It is fully Responsive and Mobile friendly.

The [AOS Library](http://michalsnik.github.io/aos/) was used to give it the smooth scroll effect which gives the application an mazing user experience.

## INTRODUCTION [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react)

This project is a simple app with wireframe design created from Helicarrier React Developer interview. It shows a view of a mock dataset I created using graphql-faker; an ....... . The mock dataset is grouped by their date of creation and can be filtered by their types or status of data with specified filter components. They can also be searched through with a search box

## STACKS USED

- `React`
- `Graphql` (mock data using **Graphql-Faker**)

```jsx
import {} from "react-dom";
const aff =() => {
    return(
        <div></div>
        <div></div>
        <div></div>
    )
}
code snippet
```

## METHODOLOGY
I wasn't able to get the graphql API running before the deadline of this task so I mocked data from a site called mockaroo.com and saved the data as a JSON file with data collected as 
- ID
- First Name
- Last Name
- Gender
- Email
- IP Address

I also wasn't able to group them in the API so I had 5 different data files and used the map method to display them. I then hard coded the gates as a group effect. I used the filter method to ensure that when only First and Last Name are searched, they would be displayed and when they don't match, nothing will be rendered

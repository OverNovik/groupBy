/* Assessment Test
Task 1 (GroupBy)
Task should be uploaded to GitHub account.
You need to create a function, which will group an array of objects by a key.
Requirements:
1. Ability to group by any key (in the example “universe” key is used).
2. Return an error if a key is not provided.
3. Return an error if an array is not provided.
4. Return an empty object if the provided key does not exist.
5. The function should be immutable (return a new array).
Function example:
export const groupBy = (arr, key) => {}
Input data:
[
{ id: 1, universe: "marvel", name: "Spider Man" },
{ id: 2, universe: "marvel", name: "Iron Man" },
{ id: 3, universe: "dc", name: "Aqua Man" },
{ id: 4, universe: "dc", name: "Bat Man" },
{ id: 5, universe: "marvel", name: "Hulk" }
]
Result:
{
marvel: [
{ id: 1, universe: "marvel", name: "Spider Man" },
{ id: 2, universe: "marvel", name: "Iron Man" },
{ id: 5, universe: "marvel", name: "Hulk" }
],
dc: [
{ id: 3, universe: "dc", name: "Aqua Man" },
{ id: 4, universe: "dc", name: "Bat Man" }
]
} */

export const groupBy = (arr, key) => {
  if (!key) throw Error('key in not provided');
  if (!arr) throw Error('array is not provided');
  return arr.reduce((acc, current) => ({
    ...acc,
    [current[key]]: [
      ...(acc[current[key]] || []),
      current
    ]
  })
  , {})
}

// Example

const data = [
  { id: 1, universe: "marvel", name: "Spider Man" },
  { id: 2, universe: "marvel", name: "Iron Man" },
  { id: 3, universe: "dc", name: "Aqua Man" },
  { id: 4, universe: "dc", name: "Bat Man" },
  { id: 5, universe: "marvel", name: "Hulk" }
]

console.log(data, 'universe')

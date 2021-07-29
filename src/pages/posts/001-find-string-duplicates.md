---
title: "Find if a string is unique"
date: 2020-07-29
author: Siddhartha
image: ../../images/uniqueStr.png
tags:
  - javascript
  - strings
  - algorithms
---

#### Problem statement: Find duplicates in a string

Using ES6 Sets

```javascript
function findDuplicates(str) {
  let uniqueStr = new Set(str)
  if (uniqueStr.size() === str.length) return "No duplicates found"
  return "Duplicates found"
}
```

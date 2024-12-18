# JavaScript Loose Comparison Bug

This repository demonstrates a common JavaScript bug related to loose comparison (==) when checking for null or undefined values. The bug arises from the fact that loose comparison treats 0 as falsy like null and undefined values, leading to unintended behavior. The solution illustrates using strict equality (===) for more precise comparisons. 

## Bug Description
The function `foo` intends to return `null` only when one of its parameters is explicitly `null`. However, due to loose comparison, it mistakenly interprets 0 as `null` and returns `null` in that case, which is unexpected behavior.

## Bug Solution
The solution replaces the loose equality (`==`) with strict equality (`===`) to fix the issue. Strict equality does not perform type coercion, ensuring accurate comparisons and preventing unintended false positives. 
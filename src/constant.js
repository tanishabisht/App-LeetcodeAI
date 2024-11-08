export const problemStatement1 = {
    "title": "Maximum Sum of Contiguous Subarray",
    "difficulty": "Medium",
    "description": "Given an array of integers, write a function that finds the maximum sum of any contiguous subarray. A contiguous subarray is a subset of elements that are adjacent to each other in the array. The function should return the maximum possible sum of any contiguous subarray within the input array.",
    "constraints": [
      "1 ≤ len(arr) ≤ 10^5 (the array has at least one element)",
      "-10^4 ≤ arr[i] ≤ 10^4 (each element in the array can range from -10,000 to 10,000)",
      "The function should run in O(n) time complexity."
    ],
    "examples": [
      {
        "example": 1,
        "input": "arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
        "output": 6,
        "explanation": "The contiguous subarray [4, -1, 2, 1] has the maximum sum = 6."
      },
      {
        "example": 2,
        "input": "arr = [1]",
        "output": 1,
        "explanation": "The only element itself is the maximum sum."
      },
      {
        "example": 3,
        "input": "arr = [5, 4, -1, 7, 8]",
        "output": 23,
        "explanation": "The entire array [5, 4, -1, 7, 8] has the maximum sum = 23."
      }
    ]
  }
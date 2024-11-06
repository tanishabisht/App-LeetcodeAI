import React from 'react';

const ProblemStatement = () => {
  return (
    <div style={{ padding: '10px', borderRight: '1px solid #ccc', height: '100vh', overflowY: 'auto' }}>
      <h2>Maximum Sum of Contiguous Subarray</h2>
      <p><strong>Difficulty:</strong> Medium</p>
      <p>
        <strong>Description:</strong> Given an array of integers, write a function that finds the maximum sum of any contiguous subarray. 
        A contiguous subarray is a subset of elements that are adjacent to each other in the array. The function should return the maximum 
        possible sum of any contiguous subarray within the input array.
      </p>
      
      <h3>Constraints:</h3>
      <ul>
        <li>1 ≤ len(arr) ≤ 10<sup>5</sup> (the array has at least one element)</li>
        <li>-10<sup>4</sup> ≤ arr[i] ≤ 10<sup>4</sup> (each element in the array can range from -10,000 to 10,000)</li>
        <li>The function should run in O(n) time complexity.</li>
      </ul>

      <h3>Examples:</h3>
      <div style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
        <p><strong>Example 1:</strong></p>
        <p>
Input: arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Explanation: The contiguous subarray [4, -1, 2, 1] has the maximum sum = 6.
        </p>

        <p><strong>Example 2:</strong></p>
        <p>
Input: arr = [1]
Output: 1
Explanation: The only element itself is the maximum sum.
        </p>

        <p><strong>Example 3:</strong></p>
        <p>
Input: arr = [5, 4, -1, 7, 8]
Output: 23
Explanation: The entire array [5, 4, -1, 7, 8] has the maximum sum = 23.
        </p>
      </div>

      <h3>Hints:</h3>
      <ul>
        <li>Consider using Kadane's algorithm to solve this problem in O(n) time.</li>
        <li>If all numbers are negative, the maximum sum is the largest single element.</li>
      </ul>
    </div>
  );
};

export default ProblemStatement;

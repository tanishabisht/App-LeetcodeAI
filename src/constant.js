
export const topics = [
  {
    id: 'arrays',
    title: 'Arrays & Hashing',
    description: 'Master fundamental array manipulation and hashing techniques',
    problemCount: 30,
    solved: 12,
    difficulty: { easy: 15, medium: 10, hard: 5 },
    problems: [
      {
        id: 'two-sum',
        title: 'Two Sum',
        description: 'Find two numbers that add up to target',
        difficulty: 'easy',
        status: 'solved'
      },
      {
        id: 'contains-duplicate',
        title: 'Contains Duplicate',
        description: 'Find if array contains any duplicates',
        difficulty: 'easy',
        status: 'unsolved'
      },
      {
        id: 'group-anagrams',
        title: 'Group Anagrams',
        description: 'Group strings that are anagrams of each other',
        difficulty: 'medium',
        status: 'solved'
      },
      {
        id: 'top-k-frequent',
        title: 'Top K Frequent Elements',
        description: 'Find k most frequent elements in array',
        difficulty: 'medium',
        status: 'unsolved'
      }
    ]
  },
  {
    id: 'two-pointers',
    title: 'Two Pointers',
    description: 'Learn to solve problems using the two-pointer technique',
    problemCount: 20,
    solved: 8,
    difficulty: { easy: 8, medium: 8, hard: 4 },
    problems: [
      {
        id: 'valid-palindrome',
        title: 'Valid Palindrome',
        description: 'Check if string is palindrome after converting to lowercase and removing non-alphanumeric characters',
        difficulty: 'easy',
        status: 'solved'
      },
      {
        id: 'container-with-water',
        title: 'Container With Most Water',
        description: 'Find two lines that together with x-axis forms a container that holds the most water',
        difficulty: 'medium',
        status: 'unsolved'
      },
      {
        id: 'remove-duplicates',
        title: 'Remove Duplicates',
        description: 'Remove duplicates from sorted array in-place',
        difficulty: 'easy',
        status: 'unsolved'
      },
      {
        id: 'three-sum',
        title: 'Three Sum',
        description: 'Find all unique triplets that sum to zero',
        difficulty: 'medium',
        status: 'solved'
      }
    ]
  }
];

export const problems = [
  {
    "id": "1",
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
  },
  {
    "id": "2",
    "title": "Two Sum",
    "difficulty": "Easy",
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    "constraints": [
      "2 ≤ nums.length ≤ 10^4",
      "-10^9 ≤ nums[i] ≤ 10^9",
      "-10^9 ≤ target ≤ 10^9",
      "The solution must run in O(n) time complexity."
    ],
    "examples": [
      {
        "example": 1,
        "input": "nums = [2, 7, 11, 15], target = 9",
        "output": "[0, 1]",
        "explanation": "nums[0] + nums[1] = 2 + 7 = 9."
      },
      {
        "example": 2,
        "input": "nums = [3, 2, 4], target = 6",
        "output": "[1, 2]",
        "explanation": "nums[1] + nums[2] = 2 + 4 = 6."
      },
      {
        "example": 3,
        "input": "nums = [3, 3], target = 6",
        "output": "[0, 1]",
        "explanation": "nums[0] + nums[1] = 3 + 3 = 6."
      }
    ]
  },
  {
    "id": "3",
    "title": "Longest Substring Without Repeating Characters",
    "difficulty": "Medium",
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "constraints": [
      "0 ≤ s.length ≤ 5 * 10^4",
      "s consists of English letters, digits, symbols, and spaces.",
      "The solution must run in O(n) time complexity."
    ],
    "examples": [
      {
        "example": 1,
        "input": "s = 'abcabcbb'",
        "output": 3,
        "explanation": "The longest substring without repeating characters is 'abc', which has a length of 3."
      },
      {
        "example": 2,
        "input": "s = 'bbbbb'",
        "output": 1,
        "explanation": "The longest substring without repeating characters is 'b', which has a length of 1."
      },
      {
        "example": 3,
        "input": "s = 'pwwkew'",
        "output": 3,
        "explanation": "The longest substring without repeating characters is 'wke', which has a length of 3."
      }
    ]
  },
  {
    "id": "4",
    "title": "Container With Most Water",
    "difficulty": "Medium",
    "description": "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water.",
    "constraints": [
      "2 ≤ height.length ≤ 10^5",
      "0 ≤ height[i] ≤ 10^4",
      "The solution must run in O(n) time complexity."
    ],
    "examples": [
      {
        "example": 1,
        "input": "height = [1,8,6,2,5,4,8,3,7]",
        "output": 49,
        "explanation": "The most water is contained between lines at index 1 and 8, with area = 49."
      },
      {
        "example": 2,
        "input": "height = [1,1]",
        "output": 1,
        "explanation": "The most water is contained between the two lines, with area = 1."
      },
      {
        "example": 3,
        "input": "height = [4,3,2,1,4]",
        "output": 16,
        "explanation": "The most water is contained between lines at index 0 and 4, with area = 16."
      }
    ]
  },
  {
    "id": "5",
    "title": "Climbing Stairs",
    "difficulty": "Easy",
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    "constraints": [
      "1 ≤ n ≤ 45",
      "The solution must run in O(n) time complexity."
    ],
    "examples": [
      {
        "example": 1,
        "input": "n = 2",
        "output": 2,
        "explanation": "There are two ways to climb to the top: 1 step + 1 step or 2 steps."
      },
      {
        "example": 2,
        "input": "n = 3",
        "output": 3,
        "explanation": "There are three ways to climb to the top: 1+1+1, 1+2, or 2+1."
      },
      {
        "example": 3,
        "input": "n = 4",
        "output": 5,
        "explanation": "There are five ways to climb to the top: 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, or 2+2."
      }
    ]
  }
];


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
//Day06
// 946. Validate Stack Sequences 😃
// I have use iterative solution for this Approach
// Can any approach optimal solution for the same
// DSA with JAVA
// code:= ===========
public boolean validateStackSequences(int[] pushed, int[] popped) {
        Stack<Integer> st = new Stack<>(); // Create a stack
        
        int j = 0; // Intialise one pointer pointing on popped array
        
        for(int val : pushed){
            st.push(val); // insert the values in stack
            while(!st.isEmpty() && st.peek() == popped[j]){ // if st.peek() values equal to popped[j];
                st.pop(); // then pop out
                j++; // increment j
            }
        }
        return st.isEmpty(); // check if stack is empty return true else false
    }
   // ============
   // hashtag#LeetCode
   // hashtag#daily challenge
   // 06/100;
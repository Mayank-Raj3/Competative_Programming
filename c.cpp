// C++ program for the above approach
#include <bits/stdc++.h>
using namespace std;

// Function to find the lexicographically
// maximum string by reversing substrings
// having even numbers of 1s
void lexicographicallyMax(string s)
{
	// Store size of string
	int n = s.size();

	// Traverse the string
	for (int i = 0; i < n; i++) {

		// Count the number of 1s
		int count = 0;

		// Stores the starting index
		int beg = i;

		// Stores the end index
		int end = i;

		// Increment count, when 1
		// is encountered
		if (s[i] == '1')
			count++;

		// Traverse the remaining string
		for (int j = i + 1; j < n; j++) {
			if (s[j] == '1')
				count++;

			if (count % 2 == 0
			        && count != 0) {
				end = j;
				break;
			}
		}

		// Reverse the string from
		// starting and end index
		reverse(s.begin() + beg,
		        s.begin() + end + 1);
	}

	// Printing the string
	cout << s << "\n";
}

// Driver Code
int main()
{
	string S = "3215";
	lexicographicallyMax(S);

	return 0;
}

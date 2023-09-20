#include <iostream>
#include <vector>

using namespace std;

void sumOfSubset(int s, int k, int r, vector<int>& w, int sum, vector<int>& x) {
    if (s == sum) {
        // Subset sum found, print the solution vector x
        for (int i = 0; i < k; ++i) {
            if (x[i] == 1) {
                cout << w[i] << " ";
            }
        }
        cout << endl;
    } else if (k >= w.size() || s + w[k] > sum) {
        // Stop exploring this path, as it exceeds the target sum or we have gone through all elements
        return;
    } else {
        // Include the current item w[k] in the subset
        x[k] = 1;
        sumOfSubset(s + w[k], k + 1, r - w[k], w, sum, x);

        // Exclude the current item w[k] from the subset
        x[k] = 0;
        sumOfSubset(s, k + 1, r - w[k], w, sum, x);
    }
}

int main() {
    int total = 5 ;// Set your target sum here
    vector<int> w = {1, 2, 3, 1, 1}; // Your input array
    int n = w.size(); // Length of the input array
    vector<int> x(n, 0); // Initialize the solution vector

    sumOfSubset(0, 0, total, w, total, x);

    return 0;
}

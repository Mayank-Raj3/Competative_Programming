#include <bits/stdc++.h>
#define ll long long
#define ib ios_base::sync_with_stdio(false)
#define ct cin.tie(NULL)
#define inf INT_MAX
using namespace std;

/*

1. Think Greedy
2. Think Brute Force
3. Think solution in reverse order
4. Think DP [ check constraints carefully ]
5. Check base cases for DP and prove solution for Greedy
6. Think Graph

*/
#define int long long

void solve() {
	int n, q;
	cin >> n >> q;
	int arr[n];
	for (int i = 0 ; i < n;  i++) {
		cin >> arr[i];
	}
	int diff[n + 1] {};
	sort(arr, arr + n);

	for (int i = 0 ; i < q ; i ++) {
		int l , r;
		cin >> l >> r;
		diff[l] ++;
		if (r != n) diff[r + 1] --;
	}
	for (int i = 1 ; i <= n ; i ++) diff[i] += diff[i - 1];

	sort(diff, diff + n + 1);
	int ind = n;
	ll total = 0LL;
	while (ind > 0) {
		total += (arr[ind - 1] * diff[ind]);
		ind --;
	}
	cout << total << "\n";
}

int32_t main() {
	// your code goes here
	ib;
	ct;
// 	int t;
// 	cin >> t;
// 	while (t -- > 0) {
	solve();
// 	}
	return 0;
}
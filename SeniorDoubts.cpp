#include<bits/stdc++.h>
using namespace std;
int main() {
	int n ; cin >> n ;
	if (n == 0) {
		cout << 0 << endl;
		return 0 ;
	}
	int ans = 1;
	for (int k = 1 ; k <= n ; k++) {
		ans = ans * k;
	}
	cout << ans << endl;

}
//      .....All...copyright....Mynk28nov.........;
#include<bits/stdc++.h>
using namespace std;
#define  ll long long
#define ld long double
#define nline "\n"

const int MAX_N = 1e5 + 5;
const ll MOD = 1e9 + 7;
const ll INF = 1e9;
const ld EPS = 1e-9;

void solve() {
	ll n , s ; cin >> n >> s ;
	ll sum = 0 ;
	std::vector<int> a(n);
	for (int i = 0 ; i < n ; i++) cin >> a[i];
	int i = 0 , j = 0 ;		int ans = INF ;

	while ( j < n) {
		sum += a[j];

		while (sum - a[i] >= s) {
			sum -= a[i];
			i++;
		}

		if (sum >= s )
			ans = min( ans , j - i + 1);
		j++;


	}
	if (ans == INF) cout << -1 << nline;
	else cout << ans;




}

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0); cout.tie(0);

	int t = 1;

	while (t--) {
		solve();
	}
}

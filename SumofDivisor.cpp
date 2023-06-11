//      .....All...copyright....Mynk28nov.........;
#include<bits/stdc++.h>
using namespace std;
#define  ll long long
#define ld long double
#define nline "\n"

const int MAX_N = 1e5 + 5;
const ll mod = 1e9 + 7;
const ll INF = 1e9;
const ld EPS = 1e-9;
ll expo(ll a, ll b, ll mod) {ll res = 1; while (b > 0) {if (b & 1)res = (res * a) % mod; a = (a * a) % mod; b = b >> 1;} return res;}
int gp(int base, int power) {
	ll numerator = (expo(base, power + 1, mod) - 1 + mod) % mod;
	ll deno = expo(base - 1, mod - 2, mod);
	return (numerator * deno) % mod;
}
void solve() {
	ll n ; cin >> n;
	map<ll, ll> mp;

	for (ll i = 2 ; i * i <= n ; i++) {
		ll cnt = 0;
		while (n % i == 0) {

			mp[i] = cnt++;
			n = n / i;
		}
	}
	if (n > 1) {
		mp[n]++;
	}

	for (auto it : mp) {
		cout << it.first << " " << it.second << " " << nline;
	}



	// ll divisor = 1;

	// ll sum = 1;
	// ll num = 1;

	// for (auto it : mp) {
	// 	divisor = (divisor * (it.second + 1) ) % mod;

	// 	num = (num * (expo(it.first, it.second, mod))) % mod ;
	// 	sum = ( sum * gp(it.first, it.second)) % mod;

	// }
	// ll product = expo(num, (divisor / 2 ) % mod, mod);

	// cout  << sum   ;
}

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0); cout.tie(0);
	solve();
}
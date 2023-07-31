#include <bits/stdc++.h>
using namespace std;
using ll = long long;
#define m 1000000007
const ll N = 25 ;
ll f[N];
ll inv[N];
ll binpow(ll a, ll b) {
	ll ans = 1;
	while (b) {
		if (b % 2 == 1) {
			ans = (ans * a) % m;
		}
		a = (a * a) % m;
		b /= 2;//yaha pr galti kari thi
	}
	return ans;
}
void prec() {
	f[0] = 1;
	for (int i = 1; i < N ; ++i)
	{
		f[i] = (f[i - 1] * i) % m; //factorial ban gaya
	}
	inv[N - 1] = binpow(f[N - 1], m - 2);
	for (int i = N - 2; i >= 0; --i)
	{
		inv[i] = (inv[i + 1] * (i + 1)) % m;
	}
}
void solve()
{
	int n;
	cin >> n;
	//int ans = f[n] * inv[4] % m * inv[n - 4] % m;
	//
	ll ans = n * (n - 1) % m * (n - 2) % m * (n - 3) % m * 799148792 % m  ;
	cout << (((ans % m) + m) % m) << "\n";
}
signed main()
{
	ios::sync_with_stdio(0);
	cin.tie(0), cout.tie(0);
	//prec();
	int t; cin >> t; while (t -- )
		solve();
}
#include <bits/stdc++.h>
using namespace std;
#define endl '\n';
using ll = long long;
using ld = long double;
ld PI = acos(-1.0);

void isNthRootInteger(ll n, ll x)
{
	ll lo = 1;
	ll hi = n == 2 ? sqrt(x) : ceil(cbrt(x));

	string ans = "NO";
	if (x == 1)
		ans = "YES";

	while (lo <= hi)
	{
		ll mid = (lo + hi) / 2;
		if ((n == 2 ? 1ll * mid * mid : 1ll * mid * mid * mid) == x)
		{
			// cout << mid << "\n";
			ans = "YES";
			break;
		}
		else if ((n == 2 ? 1ll * mid * mid : 1ll * mid * mid * mid) < x)
			lo = mid + 1;
		else
			hi = mid - 1;
	}
	cout << ans << endl;
}

void solve()
{
	ll q, x;
	cin >> q >> x;

	if (q == 1) // square
		isNthRootInteger(2, x);
	else // cube
		isNthRootInteger(3, x);
}

signed main()
{
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	ll t = 1;
	cin >> t;
	for (ll i = 0; i < t; i++)
		solve();
	return 0;
}
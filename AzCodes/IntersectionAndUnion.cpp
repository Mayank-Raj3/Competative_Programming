#include<bits/stdc++.h>
using namespace std;
#define int long long
#define ld long double
#define nline "\n"

void solve() {
	int x1, y1, x2, y2, x3, y3, x4, y4;
	cin >> x1 >> y1 >> x2 >> y2 >> x3 >> y3 >> x4 >> y4;
	int x5 = max(x1, x3);
	int y5 = max(y1, y3);
	int x6 = min(x2, x4);
	int y6 = min(y2, y4);
	int area = (abs(x1 - x2) * abs(y1 - y2)) + (abs(x3 - x4) * abs(y3 - y4));
	if (x5 > x6 || y5 > y6) {
		cout << "0 ";
		cout << area << nline;
		return;
	}
	int areaOfintersection = abs(x5 - x6) * abs(y5 - y6);
	cout << areaOfintersection << " " << area - areaOfintersection << nline;
}
signed main() {
	int t ; cin >> t ; while (t--)
		solve();
}
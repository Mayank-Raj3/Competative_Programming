#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define pb push_back

signed main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	ll tc;
	cin >> tc;

	while (tc--)
	{
		ll q;
		cin >> q;
		queue<int> qu;
		while (q--) {
			string s;
			cin >> s;
			if (s == "add") {
				int x;
				cin >> x;
				qu.push(x);

			}
			else if (s == "remove") {
				if (!qu.empty()) {
					qu.pop();
				}

			}
			else if (s == "print") {
				if (qu.empty()) {
					cout << 0 << endl;;
				}
				else
					cout << qu.front() << endl;

			}
		}
	}

	return 0;
}
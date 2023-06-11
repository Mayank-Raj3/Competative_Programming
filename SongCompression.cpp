
#include<bits/stdc++.h>
using namespace std;
#define int 						  long long
#define ld 							  long double
#define nline						  "\n"
#define ff 							  first
#define ss                            second
#define pb                            push_back
#define mp                            make_pair
#define ps(x, y)                      fixed << setprecision(y) << x
#define setbit(x)                     __builtin_popcount(x);
#define all(var)                      var.begin(), var.end()
#define desc                          greater<int>()
#define spc                           <<" "<<
#define YES                           cout << "YES\n";
#define NO                            cout << "NO\n";
#define Yes                           cout << "Yes\n";
#define No                            cout << "No\n";
#define minus1                        cout << "-1\n";
#define one                           cout << "1\n";
#define gcd(a, b)                     __gcd(a, b)


// Builtin data types
typedef pair<int, int> pii;
typedef vector<int> vi;
typedef vector<string> vs;
typedef vector<pii> vpi;
typedef vector<vi> vvi;
typedef map<int, int> mpii;
typedef set<int> seti;
typedef multiset<int> mseti;

//constants
const int MAX_N = 1e5 + 5;
const int MOD = 1e9 + 7;
const int INF = 1e9;
const int EPS = 1e-9;


void solve() {
	int n , m ; cin >> n >> m ;
	vector <pair<int, int>> v(n);
	int sum = 0 ;
	for (int i = 0 ; i < n ; i++) {
		int x , y ; cin >> x >> y;
		sum += x;
		v[i].first = x;
		v[i].second = y;
	}
	sort(all(v), [&](pair<int, int> a , pair<int, int> b  ) {
		return (a.first - a.second) < (b.first - b.second);
	});
	int cnt = 0 ; int flag = 0 ;
	for (int i = n - 1; i >= 0 ; i--) {
		if (sum <= m) {
			flag = 1 ;
			cout << cnt << nline;
			return;
		}
		else {
			sum = sum - (v[i].first - v[i].second);
			++cnt;
		}
	}
	if (sum <= m) {
		flag = 1 ;
		cout << cnt << nline;
		return;
	}
	if (flag == 0 )
		cout << -1 << nline;

}

int32_t main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0); cout.tie(0);

	// int t ; cin >> t;
	int t = 1;

	while (t--) {
		solve();
	}
}
/* -----------------END OF PROGRAM --------------------*/

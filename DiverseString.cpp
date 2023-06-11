
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
	int n ; cin >> n ; string s ; cin >> s;
	int ans = 0;
	for (int i = 0 ; i <  n ; i++) {
		vector<int> occ(10); // hash table that check for number of time char occured
		int distinct = 0, maxi = 0;
		for (int j = i ; j < n ; j++) {
			if (j - i >= 101) break; // since max 100 lenm substring is possible each 0-9 all 10 10 each
			int m = s[j] - '0';
			if (occ[m] == 0)
				distinct++; // counting distinct chars
			maxi = max(maxi, ++occ[m]);  // max number of occurance
			if (maxi <= distinct) // agr less ha tho ans++;
				ans++;
		}
	}
	cout << ans << nline;
}



int32_t main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0); cout.tie(0);

	int t ; cin >> t;
	//int t=1;

	while (t--) {
		solve();
	}
}
/* -----------------END OF PROGRAM --------------------*/



#include<bits/stdc++.h>
using namespace std;
#define int                           long long
#define ld                               long double
#define nline                          "\n"
#define ff                               first
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

struct Interactor {
    vector<int> arr;
    int n;
    int majorityElement;
    Interactor() {
        int zeros = 0;
        int ones = 0;
        n = 101;
        for (int i = 0; i <= 100; i++) {
            arr.pb(getRandomNumber(0, 1));
        }
        for (int i = 0; i <= 100; i++) {
            if (arr[i] == 0)
                zeros++;
            else
                ones++;
        }
        majorityElement = zeros > ones ? 0 : 1;
        assert(sz(arr) == n);
    }
    int queryHandler(int queryNumber) {
        assert(queryNumber >= 0 && queryNumber < n);
        if (arr[queryNumber] == majorityElement)
            return 1;
        else
            return 0;
    }
};

Interactor it;
int query(int value) {
    cout << "? " << value << endl;
    return it.queryHandler(value);
    // char result;
    // cin >> result;
    // return result;
}

void solve() {
    it = Interactor();
    debug(it.arr);
    int iterations = 0;
    while (true) {
        iterations++;
        int index = getRandomNumber(0, it.n - 1);
        if (query(index)) {
            cout << index << endl;
            break;
        }
    }
    debug(iterations)

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




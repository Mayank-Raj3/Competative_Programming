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
    ll n , q ; cin >> n >> q;
    ll arr[n];
    ll even = 0  , odd = 0 ;
    ll sum = 0;
    for (ll i = 0 ; i < n ; i ++) {
        cin >> arr[i];
        if (arr[i] % 2 == 0) even++;
        else odd++;
        sum += arr[i];
    }

    while (q--) {
        int a, b;
        cin >> a >> b;
        if (a == 0) {
            sum += (b * even);
            if (b % 2 != 0) {
                odd += even;
                even = 0;
            }

        } else {
            sum += (b * odd);
            if (b % 2 != 0) {
                even += odd;
                odd = 0;
            }
        }
        cout << sum  << '\n';
    }







}

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0); cout.tie(0);

    int t ; cin >> t;

    while (t--) {
        solve();
    }
}

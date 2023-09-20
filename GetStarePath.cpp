#include<bits/stdc++.h>
using namespace std;

vector<string > ans ;
string s = "";

void rec(int lev , int n ) {
    if (lev == n) {
        ans.push_back(s);
        return ;
    }

    for (int i = 1; i <= 3 ; i++) {
        if (lev + i <= n) {
            s += (i + '0');
            rec(lev + i, n);
            s.pop_back();
        }
    }
}
vector<string> get_stair_paths(int n) {
    rec(0, n);
    return ans ;
}

int main() {
    int n;
    cin >> n;
    vector<string> ans = get_stair_paths(n);
    int cnt = 0;

    cout << '[';
    for (string str : ans) {
        if (cnt != ans.size() - 1)
            cout << str << ", ";
        else
            cout << str;
        cnt++;
    }
    cout << ']';
}
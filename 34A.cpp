#include<bits/stdc++.h>
using namespace std;
int main()
{
	int n, a[101], b[101];
	cin >> n;
	for (int i = 0; i < n; i++) {
		cin >> a[i];
	}
	int m = 1001, d = 0; //min as 1001 and d = 0 ;

	d = abs(a[0] - a[n - 1]); // taking diffrence

	m = min(m, d);

	int idx1 = 1, idx2 = n;

	for (int i = 0; i < n; i++) {
		d = abs(a[i] - a[i + 1]);
		if (m > d) {
			m = d;
			idx1 = i + 1;
			idx2 = i + 2;
		}
	}
	cout << idx1 << " " << idx2 << endl;

	return 0;
}
#include <bits/stdc++.h>
using namespace std;
#define ff first
#define ss second
#define pii pair<int,int>

int dx[] = {1, 2, 2, 1, -1, -2, -2, -1};
int dy[] = {2, 1, -1, -2, -2, -1, 1, 2};

int KnightWalk(int N, int Sx, int Sy, int Fx, int Fy) {

	vector<vector<int>> dist(N + 1, vector<int>(N + 1, 1e9));
	vector<vector<int>> vis(N + 1, vector<int>(N + 1, 0));

	dist[Sx][Sy] = 0;
	vis[Sx][Sy] = 1;

	queue<pii> q;
	q.push({Sx, Sy});

	auto isValid = [&](int x, int y ) {
		if (x > N or y > N or  x <= 0 or y <= 0 or vis[x][y] ) return false ;
		return true ;
	};
	while (!q.empty()) {
		auto curr = q.front();
		q.pop();
		for (int k = 0; k < 8; k++) {
			int x = curr.ff + dx[k];
			int y = curr.ss + dy[k];
			if (isValid(x, y)) {
				vis[x][y] = 1;
				dist[x][y] = dist[curr.ff][curr.ss] + 1;
				q.push({x, y});
			}
		}
	}
	if (vis[Fx][Fy]) return dist[Fx][Fy];
	return -1;
}

int main()
{
	ios_base::sync_with_stdio(0);
	cin.tie(NULL);
	cout.tie(NULL);

	int test_case;
	cin >> test_case;

	while (test_case--)
	{
		int N, Sx, Sy, Fx, Fy;
		cin >> N >> Sx >> Sy >> Fx >> Fy;

		cout << KnightWalk(N, Sx, Sy, Fx, Fy) << "\n";
	}
}
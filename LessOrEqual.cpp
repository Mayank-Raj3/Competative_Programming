#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
	int N;
	cin >> N;

	vector<pair<int, int>> courses(N);
	for (int i = 0; i < N; i++) {
		cin >> courses[i].first >> courses[i].second;
	}

	int max_tastiness = 0;
	int current_stomach = 0;

	for (int i = N - 1; i >= 0; i--) {
		int X = courses[i].first;
		int Y = courses[i].second;

		if (X == 1) {
			if (current_stomach + Y >= 0) {
				current_stomach += Y;
			}
		} else {
			if (current_stomach <= Y) {
				current_stomach = Y;
			}
		}

		if (i == N - 1) {
			max_tastiness = max(max_tastiness, Y);
		} else {
			max_tastiness = max(max_tastiness, current_stomach);
		}
	}

	cout << max_tastiness << endl;

	return 0;
}

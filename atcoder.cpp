#include <iostream>
#include <vector>
#include <algorithm>

struct Person {
	int number;
	int heads;
	int tails;
};

// Custom comparator function
bool compare(const Person& person1, const Person& person2) {
	double rate1 = static_cast<double>(person1.heads + person1.tails) / person1.heads;
	double rate2 = static_cast<double>(person2.heads + person2.tails) / person2.heads;

	if (rate1 != rate2)
		return rate1 > rate2;  // Sort by success rate in descending order
	else
		return person1.number < person2.number;  // Sort by assigned number in ascending order
}

int main() {
	int N;
	std::cin >> N;

	std::vector<Person> people(N);
	for (int i = 0; i < N; i++) {
		people[i].number = i + 1;
		std::cin >> people[i].heads >> people[i].tails;
	}

	// Sort the people using the custom comparator
	std::sort(people.begin(), people.end(), compare);

	// Print the sorted results
	for (const Person& person : people) {
		std::cout << "Person " << person.number << ": " << person.heads << " heads, " << person.tails << " tails\n";
	}

	return 0;
}

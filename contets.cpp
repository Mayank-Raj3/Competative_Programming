//linked list
#include<iostream>
using namespace std;

class node {
  string name ;
  int roll ;
  node * next ;
public:
  node() {
    name = "";
    roll = -1 ;
    next = NULL ;
  }

  node(string n ,  int r ) {
    name = n;
    roll = r;
    next = NULL ;
  }
  friend void add(node*);
  friend void display();
};

node * first;

void add(node *  x) {

}
void display() {

}

int main() {
  char ch ; cin >> ch ;
  while (ch == 'y') {
    string name ; int roll ;
    cin >> name >> roll;
    node * x = new  node(name, roll);
    add(x);
    cout << "Y/n" << en;
    cin >> ch ;
  }
}
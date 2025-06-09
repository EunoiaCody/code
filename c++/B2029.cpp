#include <bits/stdc++.h>
using namespace std;

int main()
{
  int h, r;
  double pi = 3.14;
  cin >> h >> r;
  double v = pi * r * r * h;
  cout << int(20000 / v + 1);
  return 0;
}
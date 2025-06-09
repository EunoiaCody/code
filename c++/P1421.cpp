#include <bits/stdc++.h>
using namespace std;

int main()
{
  int y, j;
  cin >> y >> j;
  int tot = y * 10 + j;
  int ans = tot / (1 * 10 + 9);
  cout << ans;
  return 0;
}
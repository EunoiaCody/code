#include <bits/stdc++.h>
using namespace std;

int main()
{
  int m, t, s;
  cin >> m >> t >> s;
  if (t == 0)
  {
    cout << 0;
    return 0;
  }
  int eat = s / t;
  int left = m - eat;
  if (s % t != 0)
  {
    left--;
  }
  cout << max(left, 0);
  return 0;
}
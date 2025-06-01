#include <bits/stdc++.h>
using namespace std;

int main()
{
  int ans = 0, day = 0;
  for (int i = 1; i <= 7; i++)
  {
    int n, m;
    cin >> n >> m;
    if (n + m > 8)
    {
      if (n + m > ans)
      {
        ans = n + m;
        day = i;
      }
    }
  }
  cout << day << endl;
  return 0;
}
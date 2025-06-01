#include <bits/stdc++.h>
using namespace std;

int a[11];

int main()
{
  for (int i = 1; i <= 10; i++)
  {
    cin >> a[i];
  }
  cin >> a[0];
  int ans = 0;
  for (int i = 1; i <= 10; i++)
  {
    if (a[i] <= a[0] + 30)
      ans++;
  }
  cout << ans;
  return 0;
}
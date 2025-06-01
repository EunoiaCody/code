#include <bits/stdc++.h>
using namespace std;

int a[10000 + 10];

int main()
{
  int l, m;
  cin >> l >> m;
  for (int i = 0; i <= l; i++)
    a[i] = 1;
  for (int i = 1; i <= m; i++)
  {
    int u, v;
    cin >> u >> v;
    for (int j = u; j <= v; j++)
      a[j] = 0;
  }
  int ans = 0;
  for (int i = 0; i <= l; i++)
    if (a[i] == 1)
      ans++;
  cout << ans;
  return 0;
}
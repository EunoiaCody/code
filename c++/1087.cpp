#include <bits/stdc++.h>
using namespace std;
int n, f[1010][1010];

void add(int k)
{
  for (int i = 1; i <= f[k][0]; i++)
  {
    f[k][i] += f[k - 1][i] + f[k - 2][i];
    f[k][i + 1] += f[k][i] / 10;
    f[k][i] %= 10;
  }
  while (f[k][f[k][0] + 1])
  {
    f[k][0]++;
  }
}

int main()
{
  cin >> n;
  f[1][1] = 1;
  f[1][0] = 1;
  f[2][1] = 3;
  f[2][0] = 1;
  for (int i = 3; i <= n; i++)
  {
    for (int j = 1; j <= f[i - 1][0]; j++)
    {
      add(i);
    }
  }
  for (int i = f[n][0]; i > 0; i--)
  {
    cout << f[n][i];
  }
  return 0;
}
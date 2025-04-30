#include <bits/stdc++.h>
using namespace std;

const int MAXN = 50010;

int n, k, d, x, y, ans;
int fa[MAXN * 3];

int find(int x)
{
  if (fa[x] != x)
    fa[x] = find(fa[x]);
  return fa[x];
}

void unite(int x, int y)
{
  int fx = find(x);
  int fy = find(y);
  if (fx != fy)
    fa[fx] = fy;
}

int main()
{
  scanf("%d%d", &n, &k);

  for (int i = 1; i <= 3 * n; i++)
    fa[i] = i;

  for (int i = 1; i <= k; i++)
  {
    scanf("%d%d%d", &d, &x, &y);

    if (x > n || y > n || (d == 2 && x == y))
    {
      ans++;
      continue;
    }

    if (d == 1)
    {
      if (find(x) == find(y + n) || find(x) == find(y + 2 * n))
      {
        ans++;
      }
      else
      {
        unite(x, y);
        unite(x + n, y + n);
        unite(x + 2 * n, y + 2 * n);
      }
    }
    else if (d == 2)
    {
      if (find(x) == find(y) || find(x) == find(y + 2 * n))
      {
        ans++;
      }
      else
      {
        unite(x, y + n);
        unite(x + n, y + 2 * n);
        unite(x + 2 * n, y);
      }
    }
  }

  printf("%d\n", ans);
  return 0;
}
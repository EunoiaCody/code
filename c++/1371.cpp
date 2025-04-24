#include <bits/stdc++.h>
using namespace std;

int m, a[1010], len;
string n;

void div(string x, int y)
{
  memset(a, 0, sizeof(a));
  int remainder = 0;
  len = x.size();

  for (int i = 0; i < len; i++)
  {
    remainder = remainder * 10 + (x[i] - '0');
    a[i] = remainder / y;
    remainder %= y;
  }

  while (len > 1 && a[0] == 0)
  {
    for (int i = 0; i < len - 1; i++)
    {
      a[i] = a[i + 1];
    }
    len--;
  }
}

int main()
{
  cin >> n >> m;
  div(n, m);
  for (int i = 0; i < len; i++)
  {
    cout << a[i];
  }
  cout << endl;
  return 0;
}
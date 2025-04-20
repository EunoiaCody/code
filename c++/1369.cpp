#include <bits/stdc++.h>
using namespace std;
string s1, s2;
const int N = 1510;
int a[N] = {0}, b[N] = {0}, c[N] = {0};
int main()
{
  cin >> s1;
  int l1 = s1.size() - 1;
  for (int i = 0; i <= l1; i++)
  {
    a[i] = s1[l1 - i] - '0';
  }

  cin >> s2;
  int l2 = s2.size() - 1;
  for (int i = 0; i <= l2; i++)
  {
    b[i] = s2[l2 - i] - '0';
  }
  int len = max(l1, l2);
  if ((s1.size() == s2.size() && s1 < s2) || s1.size() < s2.size())
  {
    cout << '-';
    swap(a, b);
  }
  for (int i = 0; i <= len; i++)
  {
    c[i] += a[i] - b[i];
    if (a[i] < b[i])
    {
      c[i] += 10;
      c[i + 1] -= 1;
    }
  }
  while (c[len] == 0 && len > 0)
  {
    len--;
  }
  for (int i = len; i >= 0; i--)
  {
    cout << c[i];
  }
  cout << endl;
  return 0;
}
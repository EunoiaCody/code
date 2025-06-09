#include <bits/stdc++.h>
using namespace std;

int main()
{
  int s, v;
  cin >> s >> v;
  int t = s / v + 10;
  if (s % v != 0)
    t++;
  int h = 8, m = 0;
  m -= t;
  while (m < 0)
  {
    m += 60;
    h--;
  }
  if (h < 0)
    h += 24;
  if (h < 10)
    printf("0");
  printf("%d:", h);
  if (m < 10)
    printf("0");
  printf("%d", m);
  return 0;
}
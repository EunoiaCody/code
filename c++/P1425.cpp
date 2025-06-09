#include <bits/stdc++.h>
using namespace std;

int main()
{
  int sh, sm, eh, em;
  scanf("%d%d%d%d", &sh, &sm, &eh, &em);
  int s = sh * 60 + sm;
  int e = eh * 60 + em;
  int t = e - s;
  int th = t / 60;
  int tm = t % 60;
  printf("%d% d", th, tm);
  return 0;
}
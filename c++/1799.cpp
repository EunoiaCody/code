#include <bits/stdc++.h>
using namespace std;

long long a[200001];
int n, size;

void pai(int k)
{
  int t = k;
  if (2 * k <= size && a[2 * k] < a[t])
    t = 2 * k;
  if (2 * k + 1 <= size && a[2 * k + 1] < a[t])
    t = 2 * k + 1;
  if (t != k)
  {
    swap(a[k], a[t]);
    pai(t);
  }
}

long long pop()
{
  long long ret = a[1];
  a[1] = a[size--];
  pai(1);
  return ret;
}

int main()
{
  cin >> n;
  size = n;
  for (int i = 1; i <= n; i++)
    scanf("%lld", &a[i]);
  for (int i = n / 2; i >= 1; i--)
    pai(i);
  while (size)
    printf("%lld\n", pop());
  return 0;
}
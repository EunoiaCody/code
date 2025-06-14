#include <bits/stdc++.h>
using namespace std;

int A(int x)
{
  bool flag = true;
  if (x % 2 != 0)
    flag = false;
  if (x <= 4 or x > 12)
    flag = false;
  if (flag == true)
    return 1;
  else
    return 0;
}

int U(int x)
{
  bool flag = false;
  if (x % 2 == 0)
    flag = true;
  if (x > 4 and x <= 12)
    flag = true;
  if (flag == true)
    return 1;
  else
    return 0;
}

int B(int x)
{
  bool flag = false;
  if (x % 2 == 0)
  {
    if (flag == true)
      flag = false;
    else
      flag = true;
  }
  if (x > 4 and x <= 12)
  {
    if (flag == true)
      flag = false;
    else
      flag = true;
  }
  if (flag == true)
    return 1;
  else
    return 0;
}

int Z(int x)
{
  bool flag = true;
  if (x % 2 == 0)
    flag = false;
  if (x > 4 and x <= 12)
    flag = false;
  if (flag == true)
    return 1;
  else
    return 0;
}

int main()
{
  int x;
  cin >> x;
  printf("%d %d %d %d\n", A(x), U(x), B(x), Z(x));
  return 0;
}
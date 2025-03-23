#include <bits/stdc++.h>
using namespace std;

long long n,m,ans = 0;

bool prime(long long x)
{
    if (x == 1)
        return false;
    for (int i = 2;i * i <= x;i++)
    {
        if (x % i == 0)
        {
            return false;
        }
    }
    return true;
}

int main()
{
    cin >> n >> m;
    if (n > m)
    {
        swap(n,m);
    }
    for (int i = n;i <= m;i++)
    {
        if (prime(i))
        {
            ans++;
        }
    }
    cout << ans;
    return 0;
}
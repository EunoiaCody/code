#include <bits/stdc++.h>
using namespace std;

int a[1000],len = 0;

bool prime(int x)
{
    if (x == 1)
        return false;
    for (int i = 2;i <= sqrt(x);i++)
    {
        if (x % i == 0)
        {
            return false;
        }
    }
    return true;
}

int swit(int x)
{
    int t = 0;
    while (x != 0)
    {
        t = t * 10 + x % 10;
        x /= 10;
    }
    return t;
}

void print()
{
    for (int i = 1;i <= len;i++)
    {
        if (a[i+1] != 0)
        {
            printf("%d,",a[i]);
        }
        else
        {
            printf("%d",a[i]);
        }
    }
}

int main()
{
    int n,m;
    cin >> m >> n;
    for (int i = m;i <= n;i++)
    {
        if (prime(i))
        {
            int t = swit(i);
            if (prime(t))
            {
                len++;
                a[len] = i;
            }
        }
    }
    if (len == 0)
    {
        cout << "No";
        return 0;
    }
    print();
    return 0;
}
#include <bits/stdc++.h>
using namespace std;

bool Lucky(long long n)
{
    int t[20+10], len = 0;
    while (n > 0)
    {
        len++;
        t[len] = n % 10;
        n /= 10;
    }
    for (int i = 1; i <= len; i++)
    {
        if (i % 2 != 0)
        {
            int temp = t[i];
            temp *= 7;
            while (temp > 9)
            {
                int sum = 0;
                while (temp > 0)
                {
                    sum += temp % 10;
                    temp /= 10;
                }
                temp = sum;
            }
            t[i] = temp;
        }
    }
    int sum = 0;
    for (int i = 1; i <= len; i++)
    {
        sum += t[i];
    }
    if (sum % 8 == 0)
        return true;
    else return false;
}

int main()
{
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        long long t;
        cin >> t;
        if (Lucky(t))
            cout << 'T' << endl;
        else
            cout << 'F' << endl;
    }
    return 0;
}
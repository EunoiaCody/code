#include <bits/stdc++.h>
using namespace std;

int m,n;    

int akm(int m,int n)
{
    if (m == 0) return n + 1;
    if (m > 0 && n == 0) return akm(m - 1,1);
    if (m > 0 && n > 0) return akm(m - 1,akm(m,n - 1)); 
}

int main()
{
    cin >> m >> n;
    cout << akm(m,n);
    return 0;
}
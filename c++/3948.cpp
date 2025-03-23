#include <bits/stdc++.h>
using namespace std;

int n;
int a[1001][5],b[1001][5];

int func(int x)
{
    for (int i = 1;i <= 4;i++)
    {
        if (a[x][i] != b[x][i]) return 0;
    }
}

int main()
{
    cin >> n;
    for (int i = 1;i <= n;i++)
    {
        for (int j = 1;j <= 4;j++)
        {
            cin >> a[i][j];
        }
    }
    for (int i = 1;i <= n;i++)
    {
        for (int j = 1;j <= 4;j++)
        {
            cin >> b[i][j];
        }
    }
    for (int i = 1;i <= n;i++)
    {
        printf("%d ",func(i));
    }
}
#include <bits/stdc++.h>
using namespace std;

int n,a[1000+10],ans,tot;
bool vis[1000+10];
void print()
{
    int sum = 0;
    for (int i = 1;i <= ans;i++)
    {
        sum = sum * 10 + a[i];
    }
    if (vis[sum] == 1)
        return;
    tot++;
    vis[sum] = 1;
}

void dfs(int n)//求n可能的合法数字
{
    if (n/2.0 < 1.0)
    {
        print();
    }
    else
    {
        for (int i = 1;i <= n/2;i++)
        {
            ans++;
            a[ans] = i;
            dfs(i);//选合法的数字
            a[ans] = 0;
            ans--;
        }
        dfs(n - 1);
    }
}

int main()
{
    cin >> n;
    dfs(n);
    cout << tot << endl;
    return 0;
}
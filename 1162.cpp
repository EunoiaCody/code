#include <bits/stdc++.h>
using namespace std;

int n;
int m[35][35];
int vis[35][35];
int dx[4] = {0, 0, 1, -1};
int dy[4] = {1, -1, 0, 0};

void dfs(int x, int y)
{
    vis[x][y] = 1;
    for (int i = 0; i < 4; i++)
    {
        int nx = x + dx[i];
        int ny = y + dy[i];
        if (nx >= 1 && nx <= n && ny >= 1 && ny <= n && m[nx][ny] == 0 && !vis[nx][ny])
        {
            dfs(nx, ny);
        }
    }
}

void print()
{
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
            cout << m[i][j] << " ";
        cout << endl;
    }
}

int main()
{
    cin >> n;
    memset(vis, 0, sizeof(vis));
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= n; j++)
            cin >> m[i][j];

    for (int i = 1; i <= n; i++)
    {
        if (m[i][1] == 0 && !vis[i][1]) dfs(i, 1);
        if (m[i][n] == 0 && !vis[i][n]) dfs(i, n);
    }
    for (int j = 1; j <= n; j++)
    {
        if (m[1][j] == 0 && !vis[1][j]) dfs(1, j);
        if (m[n][j] == 0 && !vis[n][j]) dfs(n, j);
    }

    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= n; j++)
            if (m[i][j] == 0 && !vis[i][j])
                m[i][j] = 2;

    print();
    return 0;
}
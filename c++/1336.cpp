#include <bits/stdc++.h>
using namespace std;

const int N = 1005;
int n, m;
int A[N][N];
pair<int, int> pos[N * N];
int fa[N * N];
bool has[N][N];
int ans[N * N];

int dx[4] = {0, 0, 1, -1};
int dy[4] = {1, -1, 0, 0};

int getid(int x, int y)
{
    return (x - 1) * m + y;
}

int find(int x)
{
    return fa[x] == x ? x : fa[x] = find(fa[x]);
}

void unite(int x, int y)
{
    int fx = find(x), fy = find(y);
    if (fx != fy)
        fa[fx] = fy;
}

int main()
{
    cin >> n >> m;
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j++)
            cin >> A[i][j];
    int blocks = 0;
    for (int i = 1; i <= n * m; ++i)
        fa[i] = i;
    memset(has, 0, sizeof(has));
    for (int t = n * m; t >= 1; --t)
    {
        int x = 0, y = 0;
        for (int i = 1; i <= n; ++i)
        {
            for (int j = 1; j <= m; ++j)
            {
                if (A[i][j] == t)
                {
                    x = i;
                    y = j;
                    break;
                }
            }
            if (x)
                break;
        }
        has[x][y] = true;
        blocks++;
        int id = getid(x, y);
        for (int d = 0; d < 4; ++d)
        {
            int nx = x + dx[d], ny = y + dy[d];
            if (nx >= 1 && nx <= n && ny >= 1 && ny <= m && has[nx][ny])
            {
                int nid = getid(nx, ny);
                if (find(id) != find(nid))
                {
                    unite(id, nid);
                    blocks--;
                }
            }
        }
        ans[t] = blocks;
    }
    for (int i = 1; i <= n * m; ++i)
        cout << ans[i] << endl;
    return 0;
}
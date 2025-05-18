#include <bits/stdc++.h>
using namespace std;

const int N = 1005;
int fa[N * N], vis[N * N], pos[N * N], ans[N * N];

int find(int x) {
    return fa[x] == x ? x : fa[x] = find(fa[x]);
}

void join(int x, int y) {
    int fx = find(x), fy = find(y);
    if (fx != fy) fa[fx] = fy;
}

int main() {
    int n, m;
    cin >> n >> m;
    int tot = n * m;
    vector<int> order(tot); // 记录插入顺序
    for (int i = 0; i < tot; i++) {
        int t;
        cin >> t;
        order[i] = t - 1; // 0-based
    }
    for (int i = 0; i < tot; i++) fa[i] = i, vis[i] = 0;

    int cnt = 0;
    int dx[] = {1, -1, 0, 0}, dy[] = {0, 0, 1, -1};
    for (int i = tot - 1; i >= 0; i--) {
        int p = order[i];
        vis[p] = 1;
        cnt++;
        int x = p / m, y = p % m;
        for (int d = 0; d < 4; d++) {
            int nx = x + dx[d], ny = y + dy[d];
            if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
                int np = nx * m + ny;
                if (vis[np]) {
                    if (find(p) != find(np)) {
                        join(p, np);
                        cnt--;
                    }
                }
            }
        }
        ans[i] = cnt;
    }
    for (int i = 0; i < tot; i++) cout << ans[i] << endl;
    return 0;
}
#include <bits/stdc++.h>
using namespace std;

const int maxn = 1001, maxm = 100001;

struct Edge
{
	int next; // 下一条边的编号
	int to;		// �����ߵ���ĵ�
	int dis;	// �����ߵĳ���
} edge[maxm];

int head[maxn], num_edge, n, m, u, v, d;

void add_edge(int from, int to, int dis)
{ // ����һ����from��to����Ϊdis�ĵ����
	edge[++num_edge].next = head[from];
	edge[num_edge].to = to;
	edge[num_edge].dis = dis;
	head[from] = num_edge;
}

int main()
{
	memset(head, -1, sizeof(head));
	num_edge = 0;
	cin >> n >> m;
	for (int i = 1; i <= m; i++)
	{
		cin >> u >> v >> d;
		add_edge(u, v, d);
	}
	cout << endl;
	for (int i = 1; i <= n; i++)
		for (int j = head[i]; j != -1; j = edge[j].next)
			printf("%d %d %d\n", i, edge[j].to, edge[j].dis);
	return 0;
}

// 5 10
// 1 2 2
// 4 2 5
// 2 4 5
// 3 1 1
// 2 3 1
// 5 1 6
// 4 1 4
// 3 2 1
// 1 5 6
// 2 5 5

#include <bits/stdc++.h>
using namespace std;

int n;
vector<int> dependencies[5001];
unordered_map<int, int> memo;

int install(int x)
{
    if (memo.find(x) != memo.end()) return memo[x];
    int count = 1;
    for (int dep : dependencies[x])
    {
        count += install(dep);
    }
    memo[x] = count;
    return count;
}

int main()
{
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        int k;
        cin >> k;
        for (int j = 0; j < k; j++)
        {
            int dep;
            cin >> dep;
            dependencies[i].push_back(dep);
        }
    }
    cout << install(1);
    return 0;
}
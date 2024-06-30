import { MenuItem } from './types.ts';

export function findKeyPath(menu: MenuItem[], key: string): string[] {
  const path: string[] = [];

  const dfs = (menu: MenuItem[], key: string, currentPath: string[]): boolean => {
    for (const item of menu) {
      if (!item) {
        return false;
      }
      currentPath.push(item.key as string);
      if (item.key === key) {
        path.push(...currentPath);
        return true;
      }
      if (item.children && dfs(item.children, key, currentPath)) {
        return true;
      }
      currentPath.pop();
    }
    return false;
  };

  dfs(menu, key, []);
  return path.length > 0 ? path : [];
}

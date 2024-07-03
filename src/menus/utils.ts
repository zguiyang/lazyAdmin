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

// 查找菜单项方法
export function findMenuItem(menu: MenuItem[], key: string): MenuItem | null {
  for (const item of menu) {
    if (item.key === key) {
      return item;
    }
    if (item.children) {
      const found = findMenuItem(item.children, key);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

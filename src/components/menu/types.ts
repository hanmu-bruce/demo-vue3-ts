export interface MenuItem {
  // 导航的图标
  icon?: string;
  // 导航的名字
  title: string;
  // 导航的标识
  name: string;
  // 导航的子菜单
  children: MenuItem[];
}

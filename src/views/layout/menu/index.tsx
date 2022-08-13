import { defineComponent, onMounted, PropType } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { getAssetsFile } from '@/utils/basic';
import tagList from '@/store/tagList';
export default defineComponent({
  name: 'Menu',
  props: {
    data: {
      type: Array as PropType<Array<any>>,
      default: () => [],
    },
    defaultActiveIndex: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    const router = useRouter();
    const route = useRoute();
    const tagListStore = tagList();

    const renderMenu = (data: Array<any>) => {
      return data.map((item: any) => {
        if (item.children.length == 0) {
          return (
            <el-menu-item
              index={item.name}
              onClick={() => {
                tagListStore.addTag({ name: item.name, title: item.title });
                console.log('item name ', item.name);
                router.push({
                  name: item.name,
                  query: { key: new Date().getTime() },
                });
              }}
            >
              {item.icon && (
                <el-image
                  src={getAssetsFile(item.icon)}
                  class="w-24px h-24px text-0px mr-10px"
                ></el-image>
              )}
              <span>{item.title}</span>
            </el-menu-item>
          );
        } else {
          return (
            <el-sub-menu
              index={item.name}
              v-slots={{
                title: () => {
                  return (
                    item.icon && (
                      <>
                        <el-image
                          src={getAssetsFile(item.icon)}
                          class="w-24px h-24px text-0px mr-10px"
                        ></el-image>
                        <span>{item.title}</span>
                      </>
                    )
                  );
                },
              }}
            >
              {renderMenu(item.children)}
            </el-sub-menu>
          );
        }
      });
    };

    // 递归查找与route的name匹配的菜单项
    const getTag = (name, data) => {
      let result = null;
      data.forEach((menu) => {
        if (menu.children.length == 0) {
          if (menu.name == name) {
            result = menu;
            return;
          }
        } else {
          if (getTag(name, menu.children)) {
            result = getTag(name, menu.children);
            return;
          }
        }
      });
      return result;
    };
    onMounted(() => {
      // 根据当前路由，来显示默认激活的菜单项
      const tag = getTag(route.name, props.data);
      if (tag) {
        tagListStore.addTag({
          name: route.name,
          title: tag.title,
        });
      }
      // 可以设置为第一个显示tag的标签叶
      // const firstTag = props.data[0];
      // tagListStore.addTag({
      //   name: firstTag.name,
      //   title: firstTag.title,
      // });
    });

    return () => (
      <el-menu router={true} default-active={props.defaultActiveIndex}>
        {renderMenu(props.data)}
      </el-menu>
    );
  },
});

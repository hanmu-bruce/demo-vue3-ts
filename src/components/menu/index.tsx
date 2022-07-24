import { defineComponent, PropType } from 'vue';
import { useRouter } from 'vue-router';
import { getAssetsFile } from '@/utils/basic';
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
    const renderMenu = (data: Array<any>) => {
      return data.map((item: any) => {
        if (item.children.length == 0) {
          return (
            <el-menu-item
              index={item.name}
              onClick={() => {
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
    return () => (
      <el-menu router={true} default-active={props.defaultActiveIndex}>
        {renderMenu(props.data)}
      </el-menu>
    );
  },
});

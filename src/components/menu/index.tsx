import { defineComponent, PropType } from 'vue';
import { useRouter } from 'vue-router';
import { MenuItem } from './types';
export default defineComponent({
  name: 'Menu',
  props: {
    data: {
      type: Array as PropType<Array<MenuItem>>,
      default: () => [],
    },
    defaultActiveIndex: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    const router = useRouter();
    const renderMenu = (data: Array<MenuItem>) => {
      return data.map((item: any) => {
        if (item.children.length == 0) {
          return (
            <el-menu-item
              index={item.name}
              onClick={() => {
                console.log('router ', router);
                router.push({ name: item.name });
              }}
            >
              {item.title}
            </el-menu-item>
          );
        } else {
          return (
            <el-sub-menu
              index={item.name}
              v-slots={{
                title: () => item.title,
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

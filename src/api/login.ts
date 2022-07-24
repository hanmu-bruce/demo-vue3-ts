import service from '@/utils/http';
export const getMenus = () => {
  return service.get('/api/getMenus');
};

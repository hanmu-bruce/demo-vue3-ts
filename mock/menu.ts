export default [
  {
    url: '/api/getMenus',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data: [
          {
            name: 'overview',
            title: 'overview111',
            icon: 'good.png',
            children: [],
          },
          {
            name: 'demo',
            title: 'demo',
            icon: 'good.png',
            children: [],
          },
          {
            name: 'roleManagement',
            title: 'role Management',
            icon: 'next.png',
            children: [
              {
                name: 'roleAdd',
                title: 'role Add',
                children: [],
              },
              {
                name: 'roleDelete',
                title: 'role Delete',
                children: [],
              },
            ],
          },
        ],
      };
    },
  },
];

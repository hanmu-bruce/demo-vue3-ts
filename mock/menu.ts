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
            name: 'roleManagement',
            title: 'roleManagement',
            icon: 'next.png',
            children: [
              {
                name: 'roleAdd',
                title: 'roleAdd',
                children: [],
              },
              {
                name: 'roleDelete',
                title: 'roleDelete',
                children: [],
              },
            ],
          },
        ],
      };
    },
  },
];

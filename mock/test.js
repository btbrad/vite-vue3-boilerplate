export default [
  {
    url: '/api/users',
    method: 'get',
    response: (req) => {
      return {
        code: 0,
        data: [
          {
            name: 'Jack',
          },
          {
            name: 'Greg',
          },
        ],
      }
    },
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'test',
      },
    },
  },
]

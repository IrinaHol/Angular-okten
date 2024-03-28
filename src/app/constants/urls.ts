const baseURL = 'https://jsonplaceholder.typicode.com'

const users = `${baseURL}/users`;
const posts = 'posts'

const urls = {
  users: {
    base: users,
    postsByUserId: (userId: number): string => `${users}/${userId}/${posts}`
  }
}

export {
  urls
}

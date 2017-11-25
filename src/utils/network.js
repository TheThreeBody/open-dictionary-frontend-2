
const GRAPHSQL_API = `http://106.14.4.255:3000/graphql`;

import axios from 'axios';

export const login = async function({name,email}){
    const query = `
        query {
         allUsers(condition:{name:${name},email:${email}}){
            nodes{
                id,
              name,
              email,
              createdAt,
            }
          }
        }
    `
    let hasUser = false

    const result = await axios.post(GRAPHSQL_API, {
    query: query,
    }).then((res) => {
       '[]' === res.json().data.allUsers.nodes? hasUser : !hasUser
    })

    return hasUser

  // check if user was found
}


export const signup = function(variables) {
  const query = `
    mutation($name: String!, $email: String!) {
      createUser(input: {
        user: {
          name: $name,
          email: $email
        }
      }) {
        clientMutationId
      }
    }
  `
   return axios.post(GRAPHSQL_API, {
      query: query,
      variables,
    })


}


export const searchWords = function(variables) {
    const query = `
        query($hanzi: String!) {
         allChinese(condition:{hanzi:$hanzi){
            nodes{
              id,
              hanzi,
              pinyin,
              posId,
              createdAt,
              poByPosId {
                id
              },
            }
          }
        }
    `

    return axios.post(GRAPHSQL_API, {
        query: query,
        variables
    })
}





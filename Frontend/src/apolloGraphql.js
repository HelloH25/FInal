import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    InMemoryCache,
  } from "@apollo/client";
  
  const httpLink = new HttpLink({ uri: 'http://localhost:9091/graphql' });

  const authLink = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem('auth_token');
    operation.setContext({
      headers: {
        authorization: token ? `${token}` : ''
      }
    });
    return forward(operation);
  });
  
  const apollo = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
  export default apollo
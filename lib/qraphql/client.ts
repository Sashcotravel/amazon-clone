import {ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink} from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://api-eu-west-2.hygraph.com/v2/cltljiuu7000008jx23xi1l8v/master',
        useGETForQueries: true
    }),
    uri: '',
    cache: new InMemoryCache(),
});

export default client
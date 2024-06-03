import {makeExecutableSchema} from "graphql-tools";
import {resolvers} from "./resolvers";


const typeDefs = `

    type Query {
        hello: String
        numero: Int
        nombre (name: String!): String
        teams: [Teams]
    }

    type Teams {
        _id:ID
        team: String
        country: String

    }

    type Mutation {
        createTeams(input: TeamInput): Teams
    }

    input TeamInput {
        team: String
        country: String
    }
    

`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

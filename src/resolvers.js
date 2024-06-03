import {teams} from "./sample";


export const resolvers = {
    Query: {
        hello: ()=>{
            return 'Hola Mundo con Graphql'
        },
        numero (){
            return 100;
        },


        // , {name}

        nombre (root, args){
            console.log(args.name);
            return `Bienvenido ${args.name}`;
        },

        teams (){
            return teams;
        }

    },

    Mutation: {
        createTeams(_, {input}){
            input._id = teams.length;
            teams.push(input);
            return input;
        }
    }
};

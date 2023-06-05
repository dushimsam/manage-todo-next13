import { gql } from "graphql-request";
import { graphqlClient } from "@/lib/graphql-client";

export const FETCH_TODO_LIST = async () => {
  const query = gql`
    query FetchTodoList {
      todolist {
        completed
        created_at
        id
        text
      }
    }
  `;

  const data: any = await graphqlClient.request(query);
  return data.todolist;
};

export const FETCH_TODO_LIST_BY_STATUS = async (status: boolean) => {
  const query = gql`
      query MyQuery {
        todolist(where: { completed: { _eq: ${status} } }) {
          completed
          created_at
          id
          text
        }
      }
    `;

  const data: any = await graphqlClient.request(query);
  return data.todolist;
};


export const ADD_TODO = async (text: string) => {
    const mutation = gql`
      mutation AddTodo($text: String!) {
        insert_todolist(objects: [{ text: $text, completed: false }]) {
          affected_rows
          returning {
            id
            text
            completed
            created_at
          }
        }
      }
    `;
  
    const variables = {
      text: text,
    };
  
    const result: any = await graphqlClient.request(mutation, variables);
    return result.insert_todolist.returning[0];
  };
  


  export const UPDATE_TODO = async (todoId: number): Promise<any | null> => {
    const query = gql`
        mutation SetAsComplete{
          update_todolist_by_pk(pk_columns: {id: ${todoId}}, _set: {completed: true}) {
            completed
            created_at
            id
            text
          }
        }
      `;
  
    const result: any = await graphqlClient.request(query);
    return result.update_todolist_by_pk;
  };

  
  export const DELETE_TODO = async (todoId: number): Promise<any | null> => {
    const query = gql`
        mutation DeleteToDo{
          delete_todolist_by_pk(id: ${todoId}) {
            completed
            created_at
            id
            text
          }
        }
      `;
    const result: any = await graphqlClient.request(query);
    return result.delete_todolist_by_pk;
  };
  

  export const DELETE_ALL_COMPLETED = async (): Promise<any | null> => {
    const query = gql`
        mutation DeleteAllCompleted{
          delete_todolist(where: {completed: {_eq: true}}) {
            affected_rows
          }
        }
      `;
    const result: any = await graphqlClient.request(query);
    return result.delete_todolist;
  }
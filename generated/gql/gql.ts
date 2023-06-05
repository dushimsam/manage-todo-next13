/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation AddTodo($text: String!) {\n  insert_todolist(objects: [{text: $text, completed: false}]) {\n    affected_rows\n    returning {\n      id\n      text\n      completed\n      created_at\n    }\n  }\n}": types.AddTodoDocument,
    "mutation DeleteTodoList($todoId: bigint!) {\n  delete_todolist_by_pk(id: $todoId) {\n    completed\n    created_at\n    id\n    text\n  }\n}": types.DeleteTodoListDocument,
    "query FetchTodoList {\n  todolist {\n    completed\n    created_at\n    id\n    text\n  }\n}": types.FetchTodoListDocument,
    "query FetchTodoListByStatus($status: Boolean!) {\n  todolist(where: {completed: {_eq: $status}}) {\n    completed\n    created_at\n    id\n    text\n  }\n}": types.FetchTodoListByStatusDocument,
    "mutation UpdateTodoList($todoId: bigint!) {\n  update_todolist_by_pk(pk_columns: {id: $todoId}, _set: {completed: true}) {\n    completed\n    created_at\n    id\n    text\n  }\n}": types.UpdateTodoListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation AddTodo($text: String!) {\n  insert_todolist(objects: [{text: $text, completed: false}]) {\n    affected_rows\n    returning {\n      id\n      text\n      completed\n      created_at\n    }\n  }\n}"): (typeof documents)["mutation AddTodo($text: String!) {\n  insert_todolist(objects: [{text: $text, completed: false}]) {\n    affected_rows\n    returning {\n      id\n      text\n      completed\n      created_at\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteTodoList($todoId: bigint!) {\n  delete_todolist_by_pk(id: $todoId) {\n    completed\n    created_at\n    id\n    text\n  }\n}"): (typeof documents)["mutation DeleteTodoList($todoId: bigint!) {\n  delete_todolist_by_pk(id: $todoId) {\n    completed\n    created_at\n    id\n    text\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FetchTodoList {\n  todolist {\n    completed\n    created_at\n    id\n    text\n  }\n}"): (typeof documents)["query FetchTodoList {\n  todolist {\n    completed\n    created_at\n    id\n    text\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FetchTodoListByStatus($status: Boolean!) {\n  todolist(where: {completed: {_eq: $status}}) {\n    completed\n    created_at\n    id\n    text\n  }\n}"): (typeof documents)["query FetchTodoListByStatus($status: Boolean!) {\n  todolist(where: {completed: {_eq: $status}}) {\n    completed\n    created_at\n    id\n    text\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateTodoList($todoId: bigint!) {\n  update_todolist_by_pk(pk_columns: {id: $todoId}, _set: {completed: true}) {\n    completed\n    created_at\n    id\n    text\n  }\n}"): (typeof documents)["mutation UpdateTodoList($todoId: bigint!) {\n  update_todolist_by_pk(pk_columns: {id: $todoId}, _set: {completed: true}) {\n    completed\n    created_at\n    id\n    text\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
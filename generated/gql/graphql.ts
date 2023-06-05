/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  ASC = 'ASC',
  /** descending ordering of the cursor */
  DESC = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "todolist" */
  delete_todolist?: Maybe<Todolist_Mutation_Response>;
  /** delete single row from the table: "todolist" */
  delete_todolist_by_pk?: Maybe<Todolist>;
  /** insert data into the table: "todolist" */
  insert_todolist?: Maybe<Todolist_Mutation_Response>;
  /** insert a single row into the table: "todolist" */
  insert_todolist_one?: Maybe<Todolist>;
  /** update data of the table: "todolist" */
  update_todolist?: Maybe<Todolist_Mutation_Response>;
  /** update single row of the table: "todolist" */
  update_todolist_by_pk?: Maybe<Todolist>;
  /** update multiples rows of table: "todolist" */
  update_todolist_many?: Maybe<Array<Maybe<Todolist_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_TodolistArgs = {
  where: Todolist_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todolist_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootInsert_TodolistArgs = {
  objects: Array<Todolist_Insert_Input>;
  on_conflict?: InputMaybe<Todolist_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todolist_OneArgs = {
  object: Todolist_Insert_Input;
  on_conflict?: InputMaybe<Todolist_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TodolistArgs = {
  _inc?: InputMaybe<Todolist_Inc_Input>;
  _set?: InputMaybe<Todolist_Set_Input>;
  where: Todolist_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todolist_By_PkArgs = {
  _inc?: InputMaybe<Todolist_Inc_Input>;
  _set?: InputMaybe<Todolist_Set_Input>;
  pk_columns: Todolist_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Todolist_ManyArgs = {
  updates: Array<Todolist_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  Asc_nulls_first = 'asc_nulls_first',
  /** in ascending order, nulls last */
  Asc_nulls_last = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  Desc_nulls_first = 'desc_nulls_first',
  /** in descending order, nulls last */
  Desc_nulls_last = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "todolist" */
  todolist: Array<Todolist>;
  /** fetch aggregated fields from the table: "todolist" */
  todolist_aggregate: Todolist_Aggregate;
  /** fetch data from the table: "todolist" using primary key columns */
  todolist_by_pk?: Maybe<Todolist>;
};


export type Query_RootTodolistArgs = {
  distinct_on?: InputMaybe<Array<Todolist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todolist_Order_By>>;
  where?: InputMaybe<Todolist_Bool_Exp>;
};


export type Query_RootTodolist_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todolist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todolist_Order_By>>;
  where?: InputMaybe<Todolist_Bool_Exp>;
};


export type Query_RootTodolist_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "todolist" */
  todolist: Array<Todolist>;
  /** fetch aggregated fields from the table: "todolist" */
  todolist_aggregate: Todolist_Aggregate;
  /** fetch data from the table: "todolist" using primary key columns */
  todolist_by_pk?: Maybe<Todolist>;
  /** fetch data from the table in a streaming manner: "todolist" */
  todolist_stream: Array<Todolist>;
};


export type Subscription_RootTodolistArgs = {
  distinct_on?: InputMaybe<Array<Todolist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todolist_Order_By>>;
  where?: InputMaybe<Todolist_Bool_Exp>;
};


export type Subscription_RootTodolist_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todolist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todolist_Order_By>>;
  where?: InputMaybe<Todolist_Bool_Exp>;
};


export type Subscription_RootTodolist_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootTodolist_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Todolist_Stream_Cursor_Input>>;
  where?: InputMaybe<Todolist_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "todolist" */
export type Todolist = {
  __typename?: 'todolist';
  completed?: Maybe<Scalars['Boolean']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['bigint']['output'];
  text?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "todolist" */
export type Todolist_Aggregate = {
  __typename?: 'todolist_aggregate';
  aggregate?: Maybe<Todolist_Aggregate_Fields>;
  nodes: Array<Todolist>;
};

/** aggregate fields of "todolist" */
export type Todolist_Aggregate_Fields = {
  __typename?: 'todolist_aggregate_fields';
  avg?: Maybe<Todolist_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Todolist_Max_Fields>;
  min?: Maybe<Todolist_Min_Fields>;
  stddev?: Maybe<Todolist_Stddev_Fields>;
  stddev_pop?: Maybe<Todolist_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Todolist_Stddev_Samp_Fields>;
  sum?: Maybe<Todolist_Sum_Fields>;
  var_pop?: Maybe<Todolist_Var_Pop_Fields>;
  var_samp?: Maybe<Todolist_Var_Samp_Fields>;
  variance?: Maybe<Todolist_Variance_Fields>;
};


/** aggregate fields of "todolist" */
export type Todolist_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Todolist_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Todolist_Avg_Fields = {
  __typename?: 'todolist_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "todolist". All fields are combined with a logical 'AND'. */
export type Todolist_Bool_Exp = {
  _and?: InputMaybe<Array<Todolist_Bool_Exp>>;
  _not?: InputMaybe<Todolist_Bool_Exp>;
  _or?: InputMaybe<Array<Todolist_Bool_Exp>>;
  completed?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "todolist" */
export enum Todolist_Constraint {
  /** unique or primary key constraint on columns "id" */
  Todolist_pkey = 'todolist_pkey'
}

/** input type for incrementing numeric columns in table "todolist" */
export type Todolist_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "todolist" */
export type Todolist_Insert_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Todolist_Max_Fields = {
  __typename?: 'todolist_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Todolist_Min_Fields = {
  __typename?: 'todolist_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "todolist" */
export type Todolist_Mutation_Response = {
  __typename?: 'todolist_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Todolist>;
};

/** on_conflict condition type for table "todolist" */
export type Todolist_On_Conflict = {
  constraint: Todolist_Constraint;
  update_columns?: Array<Todolist_Update_Column>;
  where?: InputMaybe<Todolist_Bool_Exp>;
};

/** Ordering options when selecting data from "todolist". */
export type Todolist_Order_By = {
  completed?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: todolist */
export type Todolist_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "todolist" */
export enum Todolist_Select_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  Created_at = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "todolist" */
export type Todolist_Set_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Todolist_Stddev_Fields = {
  __typename?: 'todolist_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Todolist_Stddev_Pop_Fields = {
  __typename?: 'todolist_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Todolist_Stddev_Samp_Fields = {
  __typename?: 'todolist_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "todolist" */
export type Todolist_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Todolist_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Todolist_Stream_Cursor_Value_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Todolist_Sum_Fields = {
  __typename?: 'todolist_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "todolist" */
export enum Todolist_Update_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  Created_at = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text'
}

export type Todolist_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Todolist_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Todolist_Set_Input>;
  /** filter the rows which have to be updated */
  where: Todolist_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Todolist_Var_Pop_Fields = {
  __typename?: 'todolist_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Todolist_Var_Samp_Fields = {
  __typename?: 'todolist_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Todolist_Variance_Fields = {
  __typename?: 'todolist_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type AddTodoMutationVariables = Exact<{
  text: Scalars['String']['input'];
}>;


export type AddTodoMutation = { __typename?: 'mutation_root', insert_todolist?: { __typename?: 'todolist_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'todolist', id: any, text?: string | null, completed?: boolean | null, created_at?: any | null }> } | null };

export type DeleteTodoListMutationVariables = Exact<{
  todoId: Scalars['bigint']['input'];
}>;


export type DeleteTodoListMutation = { __typename?: 'mutation_root', delete_todolist_by_pk?: { __typename?: 'todolist', completed?: boolean | null, created_at?: any | null, id: any, text?: string | null } | null };

export type FetchTodoListQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchTodoListQuery = { __typename?: 'query_root', todolist: Array<{ __typename?: 'todolist', completed?: boolean | null, created_at?: any | null, id: any, text?: string | null }> };

export type FetchTodoListByStatusQueryVariables = Exact<{
  status: Scalars['Boolean']['input'];
}>;


export type FetchTodoListByStatusQuery = { __typename?: 'query_root', todolist: Array<{ __typename?: 'todolist', completed?: boolean | null, created_at?: any | null, id: any, text?: string | null }> };

export type UpdateTodoListMutationVariables = Exact<{
  todoId: Scalars['bigint']['input'];
}>;


export type UpdateTodoListMutation = { __typename?: 'mutation_root', update_todolist_by_pk?: { __typename?: 'todolist', completed?: boolean | null, created_at?: any | null, id: any, text?: string | null } | null };


export const AddTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_todolist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"completed"},"value":{"kind":"BooleanValue","value":false}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]}}]} as unknown as DocumentNode<AddTodoMutation, AddTodoMutationVariables>;
export const DeleteTodoListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTodoList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_todolist_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completed"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<DeleteTodoListMutation, DeleteTodoListMutationVariables>;
export const FetchTodoListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchTodoList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todolist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completed"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<FetchTodoListQuery, FetchTodoListQueryVariables>;
export const FetchTodoListByStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchTodoListByStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todolist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"completed"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completed"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<FetchTodoListByStatusQuery, FetchTodoListByStatusQueryVariables>;
export const UpdateTodoListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTodoList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_todolist_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"completed"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completed"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<UpdateTodoListMutation, UpdateTodoListMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  ASC = 'ASC',
  /** descending ordering of the cursor */
  DESC = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "todolist" */
  delete_todolist?: Maybe<Todolist_Mutation_Response>;
  /** delete single row from the table: "todolist" */
  delete_todolist_by_pk?: Maybe<Todolist>;
  /** insert data into the table: "todolist" */
  insert_todolist?: Maybe<Todolist_Mutation_Response>;
  /** insert a single row into the table: "todolist" */
  insert_todolist_one?: Maybe<Todolist>;
  /** update data of the table: "todolist" */
  update_todolist?: Maybe<Todolist_Mutation_Response>;
  /** update single row of the table: "todolist" */
  update_todolist_by_pk?: Maybe<Todolist>;
  /** update multiples rows of table: "todolist" */
  update_todolist_many?: Maybe<Array<Maybe<Todolist_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_TodolistArgs = {
  where: Todolist_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todolist_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootInsert_TodolistArgs = {
  objects: Array<Todolist_Insert_Input>;
  on_conflict?: InputMaybe<Todolist_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todolist_OneArgs = {
  object: Todolist_Insert_Input;
  on_conflict?: InputMaybe<Todolist_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TodolistArgs = {
  _inc?: InputMaybe<Todolist_Inc_Input>;
  _set?: InputMaybe<Todolist_Set_Input>;
  where: Todolist_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todolist_By_PkArgs = {
  _inc?: InputMaybe<Todolist_Inc_Input>;
  _set?: InputMaybe<Todolist_Set_Input>;
  pk_columns: Todolist_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Todolist_ManyArgs = {
  updates: Array<Todolist_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  Asc_nulls_first = 'asc_nulls_first',
  /** in ascending order, nulls last */
  Asc_nulls_last = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  Desc_nulls_first = 'desc_nulls_first',
  /** in descending order, nulls last */
  Desc_nulls_last = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "todolist" */
  todolist: Array<Todolist>;
  /** fetch aggregated fields from the table: "todolist" */
  todolist_aggregate: Todolist_Aggregate;
  /** fetch data from the table: "todolist" using primary key columns */
  todolist_by_pk?: Maybe<Todolist>;
};


export type Query_RootTodolistArgs = {
  distinct_on?: InputMaybe<Array<Todolist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todolist_Order_By>>;
  where?: InputMaybe<Todolist_Bool_Exp>;
};


export type Query_RootTodolist_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todolist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todolist_Order_By>>;
  where?: InputMaybe<Todolist_Bool_Exp>;
};


export type Query_RootTodolist_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "todolist" */
  todolist: Array<Todolist>;
  /** fetch aggregated fields from the table: "todolist" */
  todolist_aggregate: Todolist_Aggregate;
  /** fetch data from the table: "todolist" using primary key columns */
  todolist_by_pk?: Maybe<Todolist>;
  /** fetch data from the table in a streaming manner: "todolist" */
  todolist_stream: Array<Todolist>;
};


export type Subscription_RootTodolistArgs = {
  distinct_on?: InputMaybe<Array<Todolist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todolist_Order_By>>;
  where?: InputMaybe<Todolist_Bool_Exp>;
};


export type Subscription_RootTodolist_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todolist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todolist_Order_By>>;
  where?: InputMaybe<Todolist_Bool_Exp>;
};


export type Subscription_RootTodolist_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootTodolist_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Todolist_Stream_Cursor_Input>>;
  where?: InputMaybe<Todolist_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "todolist" */
export type Todolist = {
  __typename?: 'todolist';
  completed?: Maybe<Scalars['Boolean']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['bigint']['output'];
  text?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "todolist" */
export type Todolist_Aggregate = {
  __typename?: 'todolist_aggregate';
  aggregate?: Maybe<Todolist_Aggregate_Fields>;
  nodes: Array<Todolist>;
};

/** aggregate fields of "todolist" */
export type Todolist_Aggregate_Fields = {
  __typename?: 'todolist_aggregate_fields';
  avg?: Maybe<Todolist_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Todolist_Max_Fields>;
  min?: Maybe<Todolist_Min_Fields>;
  stddev?: Maybe<Todolist_Stddev_Fields>;
  stddev_pop?: Maybe<Todolist_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Todolist_Stddev_Samp_Fields>;
  sum?: Maybe<Todolist_Sum_Fields>;
  var_pop?: Maybe<Todolist_Var_Pop_Fields>;
  var_samp?: Maybe<Todolist_Var_Samp_Fields>;
  variance?: Maybe<Todolist_Variance_Fields>;
};


/** aggregate fields of "todolist" */
export type Todolist_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Todolist_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Todolist_Avg_Fields = {
  __typename?: 'todolist_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "todolist". All fields are combined with a logical 'AND'. */
export type Todolist_Bool_Exp = {
  _and?: InputMaybe<Array<Todolist_Bool_Exp>>;
  _not?: InputMaybe<Todolist_Bool_Exp>;
  _or?: InputMaybe<Array<Todolist_Bool_Exp>>;
  completed?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "todolist" */
export enum Todolist_Constraint {
  /** unique or primary key constraint on columns "id" */
  Todolist_pkey = 'todolist_pkey'
}

/** input type for incrementing numeric columns in table "todolist" */
export type Todolist_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "todolist" */
export type Todolist_Insert_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Todolist_Max_Fields = {
  __typename?: 'todolist_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Todolist_Min_Fields = {
  __typename?: 'todolist_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "todolist" */
export type Todolist_Mutation_Response = {
  __typename?: 'todolist_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Todolist>;
};

/** on_conflict condition type for table "todolist" */
export type Todolist_On_Conflict = {
  constraint: Todolist_Constraint;
  update_columns?: Array<Todolist_Update_Column>;
  where?: InputMaybe<Todolist_Bool_Exp>;
};

/** Ordering options when selecting data from "todolist". */
export type Todolist_Order_By = {
  completed?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: todolist */
export type Todolist_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "todolist" */
export enum Todolist_Select_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  Created_at = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "todolist" */
export type Todolist_Set_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Todolist_Stddev_Fields = {
  __typename?: 'todolist_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Todolist_Stddev_Pop_Fields = {
  __typename?: 'todolist_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Todolist_Stddev_Samp_Fields = {
  __typename?: 'todolist_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "todolist" */
export type Todolist_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Todolist_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Todolist_Stream_Cursor_Value_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Todolist_Sum_Fields = {
  __typename?: 'todolist_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "todolist" */
export enum Todolist_Update_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  Created_at = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text'
}

export type Todolist_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Todolist_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Todolist_Set_Input>;
  /** filter the rows which have to be updated */
  where: Todolist_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Todolist_Var_Pop_Fields = {
  __typename?: 'todolist_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Todolist_Var_Samp_Fields = {
  __typename?: 'todolist_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Todolist_Variance_Fields = {
  __typename?: 'todolist_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type AddTodoMutationVariables = Exact<{
  text: Scalars['String']['input'];
}>;


export type AddTodoMutation = { __typename?: 'mutation_root', insert_todolist?: { __typename?: 'todolist_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'todolist', id: any, text?: string | null, completed?: boolean | null, created_at?: any | null }> } | null };

export type DeleteTodoListMutationVariables = Exact<{
  todoId: Scalars['bigint']['input'];
}>;


export type DeleteTodoListMutation = { __typename?: 'mutation_root', delete_todolist_by_pk?: { __typename?: 'todolist', completed?: boolean | null, created_at?: any | null, id: any, text?: string | null } | null };

export type FetchTodoListQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchTodoListQuery = { __typename?: 'query_root', todolist: Array<{ __typename?: 'todolist', completed?: boolean | null, created_at?: any | null, id: any, text?: string | null }> };

export type FetchTodoListByStatusQueryVariables = Exact<{
  status: Scalars['Boolean']['input'];
}>;


export type FetchTodoListByStatusQuery = { __typename?: 'query_root', todolist: Array<{ __typename?: 'todolist', completed?: boolean | null, created_at?: any | null, id: any, text?: string | null }> };

export type UpdateTodoListMutationVariables = Exact<{
  todoId: Scalars['bigint']['input'];
}>;


export type UpdateTodoListMutation = { __typename?: 'mutation_root', update_todolist_by_pk?: { __typename?: 'todolist', completed?: boolean | null, created_at?: any | null, id: any, text?: string | null } | null };

import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "query_root"
    },
    "mutationType": {
      "name": "mutation_root"
    },
    "subscriptionType": {
      "name": "subscription_root"
    },
    "types": [
      {
        "kind": "OBJECT",
        "name": "mutation_root",
        "fields": [
          {
            "name": "delete_todolist",
            "type": {
              "kind": "OBJECT",
              "name": "todolist_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_todolist_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "todolist",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insert_todolist",
            "type": {
              "kind": "OBJECT",
              "name": "todolist_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_todolist_one",
            "type": {
              "kind": "OBJECT",
              "name": "todolist",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "update_todolist",
            "type": {
              "kind": "OBJECT",
              "name": "todolist_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_todolist_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "todolist",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_todolist_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "todolist_mutation_response",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "query_root",
        "fields": [
          {
            "name": "todolist",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "todolist",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "todolist_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "todolist_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "todolist_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "todolist",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "subscription_root",
        "fields": [
          {
            "name": "todolist",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "todolist",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "todolist_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "todolist_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "todolist_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "todolist",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "todolist_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "todolist",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "todolist",
        "fields": [
          {
            "name": "completed",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "text",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "todolist_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "todolist_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "todolist",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "todolist_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "todolist_avg_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "todolist_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "todolist_min_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "todolist_stddev_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "todolist_stddev_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "todolist_stddev_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "todolist_sum_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "todolist_var_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "todolist_var_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "todolist_variance_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "todolist_avg_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "todolist_max_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "text",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "todolist_min_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "text",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "todolist_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "todolist",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "todolist_stddev_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "todolist_stddev_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "todolist_stddev_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "todolist_sum_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "todolist_var_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "todolist_var_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "todolist_variance_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;
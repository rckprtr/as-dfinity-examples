# Unofficial DFINITY AssemblyScript CDK

This is an experimental project to evaluate how AssemblyScript could be used as a CDK and should not be used for any production purposes.


## TODO Example

1. Install the assemblyscript & cdk dependcies

    ```bash
    npm install
    ```

1.  The @cdk-as/cli is required for building the CDK

    ```bash
    npm install @cdk-as/cli -g  
    ```

1.  Start DFINITY in a new terminal

    ```bash
    dfx start
    ```

1. Build the project

    ```bash
    dfx canister create --all
    dfx build
    ```

1. Deploy the project

    ```bash
    dfx canister install todo
    ```

1. You should see in your DFINITY terminal

    ```bash
    [Canister canid] [init] Hello DFINITY from AssemblyScript
    ```


## Commands


Add some Todos
```
dfx canister call todo addTodo '("Create a project")'
dfx canister call todo addTodo '("Build the project")'
dfx canister call todo addTodo '("Deploy the project")'
```

Show the todos in the DFINITY teriminal
```
dfx canister call todo showTodos
```

Complete a todos
```
dfx canister call todo completeTodo '(1)'
```

List the todos
```
dfx canister call todo getTodos 
```
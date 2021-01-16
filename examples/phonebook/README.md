# Unofficial DFINITY AssemblyScript CDK

This is an experimental project to evaluate how AssemblyScript could be used as a CDK and should not be used for any production purposes.


## Phonebook Example

1. [WABT](https://github.com/WebAssembly/wabt) is needed to parse WAT files exported by the build using wat2wasm

    ```bash
    brew install wabt
    ```

1. Next install the assemblyscript & cdk dependcies

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
    dfx canister install --all
    ```

1. Take note of the canister id for the assets
     ```bash
    Installing code for canister phonebook_assets, with canister_id cxeji-wacaa-aaaaa-aaaaa-aaaaa-aaaaa-a
    ```

1. You should see in your DFINITY terminal

    ```bash
    [Canister canid] [init] Hello DFINITY from AssemblyScript
    ```

1. Open your browser to the URL with the canister_id of the assets
    ```bash
    http://localhost:8000/?canisterId=cxeji-wacaa-aaaaa-aaaaa-aaaaa-aaaaa-a
    ```
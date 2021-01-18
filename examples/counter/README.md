# Unofficial DFINITY AssemblyScript CDK

This is an experimental project to evaluate how AssemblyScript could be used as a CDK and should not be used for any production purposes.


## Counter Example

Install the assemblyscript & cdk dependcies
```
npm install
```

The @cdk-as/cli is required for building the CDK
```
npm install @cdk-as/cli -g  
```

Start DFINITY in a new terminal
```
dfx start
```

build the canister
```
dfx canister create --all
dfx build
```

Deploy the canister

```bash
dfx canister install counter
```

You should see in your DFINITY terminal
```
[Canister canid] [init] Hello DFINITY from AssemblyScript
```


## Commands

Increment counter
```
dfx canister call counter increment
```

Decriment counter
```
dfx canister call counter decriment
```

Get counter value in DFINITY terminal
```
dfx canister call counter get_value
```

Set counter value
```
dfx canister call counter set '(100)'
```
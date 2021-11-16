export type AmplifyDependentResourcesAttributes = {
    "function": {
        "getFeedsLambda": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "getFeeds": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}
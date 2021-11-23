export type AmplifyDependentResourcesAttributes = {
    "function": {
        "GetFeedsLambda": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "PostFeedLambda": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "feeds": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}
import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_M9m4HxiVl",
    ClientId: "6ghaiskstr09a6t2csnjm520ov"
}





export default new CognitoUserPool(poolData)
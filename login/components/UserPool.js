import { CognitoUserPool } from "amazon-cogntio-identity-js";

const poolData = {
    UserPoolId: "",
    ClientId: ""
}

export default new CognitoUserPool(poolData)



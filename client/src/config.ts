// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '2xm4ntvjf1'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-samraa.auth0.com',            // Auth0 domain
  clientId: 'zTiI8V2VSrHuIa2Dm6WlabNds8FoPs12',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}

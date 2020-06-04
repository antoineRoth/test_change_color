import ForgeSDK from 'forge-apis';
var FORGE_CLIENT_ID = '<UUU6OanaZPbMtx2KEdS1IAucKGxF5jMy>' , FORGE_CLIENT_SECRET = '<I5e736a84b8014e4>';

// Initialize the 2-legged OAuth2 client, set specific scopes and optionally set the `autoRefresh` parameter to true
// if you want the token to auto refresh
var autoRefresh = true; // or false

var oAuth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, [
    'data:read',
    'data:write'
], autoRefresh);

oAuth2TwoLegged.authenticate().then(function(credentials){
    console.log(credentials);
}, function(err){
    console.error(err);
});
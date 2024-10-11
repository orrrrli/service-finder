const AWS = require('aws-sdk');
const cognito = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
  const userAttributes = event.request.userAttributes;
  const userSub = userAttributes.sub;
  const userPoolId = event.userPoolId;
  const userType = userAttributes["custom:type"]; // Asume que este atributo define el tipo de usuario

  let groupName;
  if (userType === 'cliente') {
    groupName = 'ClientesGroup';
  } else if (userType === 'proveedor') {
    groupName = 'ProveedoresGroup';
  }

  if (groupName) {
    const params = {
      GroupName: groupName,
      UserPoolId: userPoolId,
      Username: userSub,
    };

    try {
      await cognito.adminAddUserToGroup(params).promise();
      console.log(`Usuario ${userSub} asignado a ${groupName}`);
    } catch (error) {
      console.error('Error al asignar el usuario al grupo:', error);
    }
  }

  return event;
};

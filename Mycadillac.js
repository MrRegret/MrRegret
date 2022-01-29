
let obj = JSON.parse($response.body);
obj=
{
  "cardType" : "白金",
  "inWhiteList" : "Y",
  "shoppingCartSize" : 3,
  "partyId" : "1255096",
  "IS_LOGIN" : "Y",
  "trueName" : "吴俊杰",
  "anyoCardNo" : "Y",
  "userLoginId" : "MYCDL017276689",
  "fromOpenRegister" : "M"
 }
};
$done({body: JSON.stringify(obj)})

// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459819325\",\"not_before\":\"1459815425\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1NDI1LCJuYmYiOjE0NTk4MTU0MjUsImV4cCI6MTQ1OTgxOTMyNSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.OOerER1K1l9UOLsbhZL-MqoFx5aGkA_KJBEDql4mUlh-xEBk9t-8Pbz0y8Zu0HFzbwJrR3qeJdjfn9BzZx8_tDEqRTre2sqjsGsMVY_6ZpJ4yr-tEDHP8wRjqCFjVcP0L_6kkvgsbYHuSVudm5_SvVPt6ba5uDpmx7pW7KWIID1w0FI8LJUaEiOacJ-NrtS5vb4nr1oZqqkOIHEqK9jAfZJH4cyU-G45oee8PIIQ2Fa6kvop7zTugFDnC5_KIWTfa58uCJylG38VjyQsSSM16o8Wapa3udSHPgxLPSg93-LXJO0HA6ggGEgem0DM9iPafRmYfvktCzcVZnLq3fCWAw\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '0ec15d10-227f-457d-8fab-9fba64c28616',
  'client-request-id': '9fbaeaf6-2263-4011-9a77-569573b60e5e',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_355',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:22:06 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459819325\",\"not_before\":\"1459815425\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1NDI1LCJuYmYiOjE0NTk4MTU0MjUsImV4cCI6MTQ1OTgxOTMyNSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.OOerER1K1l9UOLsbhZL-MqoFx5aGkA_KJBEDql4mUlh-xEBk9t-8Pbz0y8Zu0HFzbwJrR3qeJdjfn9BzZx8_tDEqRTre2sqjsGsMVY_6ZpJ4yr-tEDHP8wRjqCFjVcP0L_6kkvgsbYHuSVudm5_SvVPt6ba5uDpmx7pW7KWIID1w0FI8LJUaEiOacJ-NrtS5vb4nr1oZqqkOIHEqK9jAfZJH4cyU-G45oee8PIIQ2Fa6kvop7zTugFDnC5_KIWTfa58uCJylG38VjyQsSSM16o8Wapa3udSHPgxLPSg93-LXJO0HA6ggGEgem0DM9iPafRmYfvktCzcVZnLq3fCWAw\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '0ec15d10-227f-457d-8fab-9fba64c28616',
  'client-request-id': '9fbaeaf6-2263-4011-9a77-569573b60e5e',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_355',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:22:06 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup310/providers/Microsoft.Cdn/profiles/cdnTestProfile656/endpoints/cdnTestEndpoint1076/origins/fakeOriginName?api-version=2015-06-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"The requested resource was not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '104',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': 'c8917e7d-06de-410b-b75f-1d328327f435',
  'x-ms-client-request-id': '8745ea78-71ac-4df0-85cf-28085b9b8359',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '650121c5-b439-4300-95df-dcc99113a340',
  'x-ms-routing-request-id': 'WESTUS:20160405T002206Z:650121c5-b439-4300-95df-dcc99113a340',
  date: 'Tue, 05 Apr 2016 00:22:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup310/providers/Microsoft.Cdn/profiles/cdnTestProfile656/endpoints/cdnTestEndpoint1076/origins/fakeOriginName?api-version=2015-06-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"The requested resource was not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '104',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': 'c8917e7d-06de-410b-b75f-1d328327f435',
  'x-ms-client-request-id': '8745ea78-71ac-4df0-85cf-28085b9b8359',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '650121c5-b439-4300-95df-dcc99113a340',
  'x-ms-routing-request-id': 'WESTUS:20160405T002206Z:650121c5-b439-4300-95df-dcc99113a340',
  date: 'Tue, 05 Apr 2016 00:22:06 GMT',
  connection: 'close' });
 return result; }]];
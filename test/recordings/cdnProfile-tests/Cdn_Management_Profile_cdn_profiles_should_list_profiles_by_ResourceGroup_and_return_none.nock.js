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
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459967963\",\"not_before\":\"1459964063\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5OTY0MDYzLCJuYmYiOjE0NTk5NjQwNjMsImV4cCI6MTQ1OTk2Nzk2MywiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.T5C9QoRAky7oq4G8zIh4YnMMbYcJceqH8EVfdqsTmmbhUJlO4nR7tvYvcGKdEnHj9ziZa8GUKUK5oFcTmB0HWpHEZemKq5XqLfRMQz9UpZW1WJGJcuJQkVqjlZlpRFRge8dZPsjaOSW7SUK22p-fhPdZXtxEltXWER8CgB0QLSjM4n0m1FR9kZhvyPzQ3Db8OnURb5FlRhb4nqlXuWVS4EfDLFvp6jes3UIWYLTO3WA0gfopSMrDTqzGDqRLiLaiJs7ENivEUSq0ZeBJJ2Qt6ucekcbM6weFKgLQ2dxut3HCCdgtI4sVOxglO6DySv47Dwyfny0t6kYoWRsWZ2hKig\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'a8400c14-fbd0-4fb9-ad9d-39845eb5bcbf',
  'client-request-id': '2eaed74b-7dd1-4768-ad3a-2ec7040231d5',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_485',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 06 Apr 2016 17:39:23 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459967963\",\"not_before\":\"1459964063\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5OTY0MDYzLCJuYmYiOjE0NTk5NjQwNjMsImV4cCI6MTQ1OTk2Nzk2MywiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.T5C9QoRAky7oq4G8zIh4YnMMbYcJceqH8EVfdqsTmmbhUJlO4nR7tvYvcGKdEnHj9ziZa8GUKUK5oFcTmB0HWpHEZemKq5XqLfRMQz9UpZW1WJGJcuJQkVqjlZlpRFRge8dZPsjaOSW7SUK22p-fhPdZXtxEltXWER8CgB0QLSjM4n0m1FR9kZhvyPzQ3Db8OnURb5FlRhb4nqlXuWVS4EfDLFvp6jes3UIWYLTO3WA0gfopSMrDTqzGDqRLiLaiJs7ENivEUSq0ZeBJJ2Qt6ucekcbM6weFKgLQ2dxut3HCCdgtI4sVOxglO6DySv47Dwyfny0t6kYoWRsWZ2hKig\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'a8400c14-fbd0-4fb9-ad9d-39845eb5bcbf',
  'client-request-id': '2eaed74b-7dd1-4768-ad3a-2ec7040231d5',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_485',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 06 Apr 2016 17:39:23 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6098/providers/Microsoft.Cdn/profiles?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'b79f314d-c811-4694-b587-912c47c09923',
  'x-ms-client-request-id': 'f5b441e5-b8f6-4de2-a420-a0c0bc9eb837',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14937',
  'x-ms-correlation-request-id': '78250d6d-774d-4793-98a1-58ff2adf4ebf',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160406T173924Z:78250d6d-774d-4793-98a1-58ff2adf4ebf',
  date: 'Wed, 06 Apr 2016 17:39:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6098/providers/Microsoft.Cdn/profiles?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'b79f314d-c811-4694-b587-912c47c09923',
  'x-ms-client-request-id': 'f5b441e5-b8f6-4de2-a420-a0c0bc9eb837',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14937',
  'x-ms-correlation-request-id': '78250d6d-774d-4793-98a1-58ff2adf4ebf',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160406T173924Z:78250d6d-774d-4793-98a1-58ff2adf4ebf',
  date: 'Wed, 06 Apr 2016 17:39:24 GMT',
  connection: 'close' });
 return result; }]];
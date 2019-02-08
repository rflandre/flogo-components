require('../js/traceur-runtime')
var jsonata = require('../js/jsonata')

var expr = 'payload.vehicle.{ \
  "id": `@id`, \
  "label": label, \
  "vin": vin.value, \
  "serial": deviceSerialNumber.value, \
  "make": make, \
  "model": model, \
  "year": year, \
  "license": licensePlate.`@state` & \' \' & licensePlate.value \
}';

var data = '{ \
  "_msgid": "146e84d7.4e38eb", \
  "topic": "", \
  "payload": { \
      "@type": "PagedVehicleResult", \
      "index": 0, \
      "limit": 200, \
      "count": 175, \
      "total": 175, \
      "vehicle": [ \
      { \
          "@id": 942297, \
          "vin": { \
              "@readOnly": true, \
              "value": "1GNSK3EC1FRXXXXXX" \
          }, \
          "label": "E M660", \
          "color": "WHITE", \
          "make": "CHEVROLET", \
          "model": "TAHOE", \
          "deviceSerialNumber": { \
              "@readOnly": true, \
              "value": "50X00XXX8X" \
          }, \
          "year": 2015, \
          "odometer": { \
              "@units": "MILES", \
              "@timestamp": "2018-07-16T11:51:17Z", \
              "@readOnly": "TRUE", \
              "value": 26775.18 \
          }, \
          "engineRunTime": { \
              "@isTracked": "NO", \
              "@readOnly": "TRUE", \
              "value": "PT0.000S" \
          }, \
          "licensePlate": { \
              "@state": "NY", \
              "@country": "US", \
              "value": "AXXXXX" \
          }, \
          "trackableItemType": "VEHICLE", \
          "fuelType": "GASOLINE", \
          "createdTimestamp": { \
              "@readOnly": true, \
              "value": "2018-06-28T15:05:12Z" \
          }, \
          "modifiedTimestamp": { \
              "@readOnly": true, \
              "value": "2018-06-28T15:05:12Z" \
          } \
      }, \
      { \
          "@id": 763803, \
          "vin": { \
              "@readOnly": true, \
              "value": "1FTFX1EF9EFXXXXXX" \
          }, \
          "label": "LW04", \
          "color": "WHITE", \
          "make": "FORD", \
          "model": "F-150", \
          "deviceSerialNumber": { \
              "@readOnly": true, \
              "value": "5X147XX5XX" \
          }, \
          "year": 2014, \
          "odometer": { \
              "@units": "MILES", \
              "@timestamp": "2018-11-02T14:57:56Z", \
              "@readOnly": "TRUE", \
              "value": 22425.99 \
          }, \
          "engineRunTime": { \
              "@isTracked": "NO", \
              "@readOnly": "TRUE", \
              "value": "PT0.000S" \
          }, \
          "licensePlate": { \
              "@state": "NY", \
              "@country": "US", \
              "value": "XB3XXX" \
          }, \
          "trackableItemType": "VEHICLE", \
          "fuelType": "GASOLINE", \
          "createdTimestamp": { \
              "@readOnly": true, \
              "value": "2016-12-06T17:58:22Z" \
          }, \
          "modifiedTimestamp": { \
              "@readOnly": true, \
              "value": "2016-12-06T17:58:22Z" \
          } \
      }, \
      { \
          "@id": 763800, \
          "vin": { \
              "@readOnly": true, \
              "value": "XXT0X20FPXXX0XXX9" \
          }, \
          "label": "LWB1", \
          "color": "YELLOW", \
          "make": "CAT", \
          "model": "BACKHOE", \
          "deviceSerialNumber": { \
              "@readOnly": true, \
              "value": "50XX6X7X4X" \
          }, \
          "year": 2000, \
          "odometer": { \
              "@units": "MILES", \
              "@timestamp": "2018-11-05T15:49:10Z", \
              "@readOnly": "TRUE", \
              "value": 5013.63 \
          }, \
          "engineRunTime": { \
              "@isTracked": "NO", \
              "@readOnly": "TRUE", \
              "value": "PT0.000S" \
          }, \
          "licensePlate": { \
              "@state": "NY", \
              "@country": "US", \
              "value": "XJ8XXX" \
          }, \
          "trackableItemType": "VEHICLE", \
          "fuelType": "GASOLINE", \
          "createdTimestamp": { \
              "@readOnly": true, \
              "value": "2016-12-06T17:55:35Z" \
          }, \
          "modifiedTimestamp": { \
              "@readOnly": true, \
              "value": "2016-12-06T17:55:35Z" \
          } \
      } \
      ] \
  } \
}';

var expression = jsonata(expr);
var result = expression.evaluate(JSON.parse(data));
result = JSON.stringify(result)
console.log('vehicle result: '+result);

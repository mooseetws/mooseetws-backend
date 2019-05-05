'use strict';

const request = require('request');
const authKey = 'key=AAAALlxqDZk:APA91bEm2WHqfh0K5afu_KTLuYeYCR4qkA7f7p_9g8IQZ-WKGxBHOz5IQ5ghLC14RybU4PobkuSj1WILNveq-5ZmmU1z_ky3Kjvg8rUcRCcX22yfOcjIshbll3KyrqD1SB8m-XOasKgG';

const sendNotification = (personList) => {
  let data = { notification: { title: 'Moose detected!', body: 'Be careful, moose ahead!' } };
  for (let curPerson of personList) {
    let registrationId = curPerson.registrationID;
    request({
      url: 'https://fcm.googleapis.com/fcm/send',
      method: 'POST',
      json: { ...data, to: registrationId },
      headers: {
        'authorization': authKey
      }
    }, (error, response, body) => {
      console.log(response.statusCode);
    });
  }
};

exports.sendNotification = sendNotification;

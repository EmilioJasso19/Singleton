"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseNotification_1 = require("./DatabaseNotification");
const EmailNotification_1 = require("./EmailNotification");
const NotificationManager_1 = require("./NotificationManager");
const PhoneNotification_1 = require("./PhoneNotification");
const notificationManager = NotificationManager_1.NotificationManager.getInstance();
const notificationManager2 = NotificationManager_1.NotificationManager.getInstance();
const dbNotification = new DatabaseNotification_1.DatabaseNotification(1);
const emailNotification = new EmailNotification_1.EmailNotification('yo@nose.com');
const phoneNotification = new PhoneNotification_1.PhoneNotification('923-139-9550');
notificationManager.sendNotification('new user registered', dbNotification);
notificationManager2.sendNotification('confirm your email', emailNotification);
notificationManager.sendNotification('your activation code is 5698', phoneNotification);
console.log('History:', notificationManager.getNotificationHistory());

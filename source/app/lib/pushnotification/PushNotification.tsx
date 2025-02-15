// app/lib/pushnotification/PushNotification.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun75474: for(var _fun75474_ip = 0; ; ) switch(_fun75474_ip) {
 0:
        report = argBar;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        entity = argBaz;
        var _closure1_slot1 = entity;
        var _closure1_slot2 = oscar;
        entity = function(argFoo) { // Original name: createNotification
            _fun75475: for(var _fun75475_ip = 0; ; ) switch(_fun75475_ip) {
 0:
                mike = argFoo;
                var _closure2_slot0 = mike;
                entity = null;
                mike = entity == mike;
                if(mike) { _fun75475_ip = 119; continue _fun75475 }
 18:
                mike = {};
                tango = function() { // Original name: getData
                    _fun75476: for(var _fun75476_ip = 0; ; ) switch(_fun75476_ip) {
 0:
                        entity = {};
                        zulu = _closure2_slot0;
                        golf = entity;
                        oscar = zulu;
                        tango = copyDataProperties(golf, oscar);
                        tango = zulu.message;
                        zulu = null;
                        tango = zulu != tango;
                        if(!tango) { _fun75476_ip = 61; continue _fun75476 }
 33:
                        tango = global;
                        report = tango.JSON;
                        tango = report.parse;
                        mike = _closure2_slot0;
                        mike = mike.message;
                        zulu = tango.bind(report)(mike);
 61:
                        mike = 'message';
                        entity[mike] = zulu;
                        return entity;
                    }
                };
                mike['getData'] = tango;
                tango = function() { // Original name: getMessage
                    entity = global;
                    zulu = entity.Error;
                    entity = zulu.prototype;
                    mike = Object.create(entity, {constructor: {value: zulu}});
                    tango = 'TODO: Implement on Android';
                    report = mike;
                    entity = new report[zulu](tango, zulu);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                };
                mike['getMessage'] = tango;
                tango = function() { // Original name: getSound
                    entity = global;
                    zulu = entity.Error;
                    entity = zulu.prototype;
                    mike = Object.create(entity, {constructor: {value: zulu}});
                    tango = 'TODO: Implement on Android';
                    report = mike;
                    entity = new report[zulu](tango, zulu);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                };
                mike['getSound'] = tango;
                tango = function() { // Original name: getCategory
                    entity = global;
                    zulu = entity.Error;
                    entity = zulu.prototype;
                    mike = Object.create(entity, {constructor: {value: zulu}});
                    tango = 'TODO: Implement on Android';
                    report = mike;
                    entity = new report[zulu](tango, zulu);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                };
                mike['getCategory'] = tango;
                tango = function() { // Original name: getAlert
                    entity = global;
                    zulu = entity.Error;
                    entity = zulu.prototype;
                    mike = Object.create(entity, {constructor: {value: zulu}});
                    tango = 'TODO: Implement on Android';
                    report = mike;
                    entity = new report[zulu](tango, zulu);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                };
                mike['getAlert'] = tango;
                tango = function() { // Original name: getContentAvailable
                    entity = global;
                    zulu = entity.Error;
                    entity = zulu.prototype;
                    mike = Object.create(entity, {constructor: {value: zulu}});
                    tango = 'TODO: Implement on Android';
                    report = mike;
                    entity = new report[zulu](tango, zulu);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                };
                mike['getContentAvailable'] = tango;
                tango = function() { // Original name: getBadgeCount
                    entity = global;
                    zulu = entity.Error;
                    entity = zulu.prototype;
                    mike = Object.create(entity, {constructor: {value: zulu}});
                    tango = 'TODO: Implement on Android';
                    report = mike;
                    entity = new report[zulu](tango, zulu);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                };
                mike['getBadgeCount'] = tango;
                zulu = function(argFoo) { // Original name: finish
                    entity = global;
                    zulu = entity.Error;
                    entity = entity.HermesInternal;
                    tango = entity.concat;
                    mike = 'Not implemented on Android: ';
                    entity = argFoo;
                    report = tango.bind(mike)(entity);
                    mike = zulu.prototype;
                    mike = Object.create(mike, {constructor: {value: zulu}});
                    oscar = mike;
                    entity = new oscar[zulu](report, tango);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                };
                mike['finish'] = zulu;
                entity = mike;
 119:
                return entity;
            }
        };
        var _closure1_slot5 = entity;
        entity = global;
        options = entity.Object;
        golf = options.defineProperty;
        mike = {};
        entity = true;
        mike['value'] = entity;
        entity = '__esModule';
        entity = golf.bind(options)(zulu, entity, mike);
        entity = 0;
        mike = oscar[entity];
        entity = undefined;
        mike = report.bind(entity)(mike);
        golf = mike.NativeModules;
        verify = mike.NativeEventEmitter;
        options = golf.PushNotificationAndroid;
        var _closure1_slot3 = options;
        mike = null;
        options = mike != options;
        if(!options) { _fun75474_ip = 139; continue _fun75474 }
 113:
        romeo = golf.PushNotificationAndroid;
        options = verify.prototype;
        options = Object.create(options, {constructor: {value: verify}});
        foxtrot = options;
        golf = new foxtrot[verify](romeo, yankee);
        mike = golf instanceof Object ? golf : options;
 139:
        var _closure1_slot4 = mike;
        mike = {};
        golf = function() { // Original name: getInitialNotification
            _fun75484: for(var _fun75484_ip = 0; ; ) switch(_fun75484_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 1;
                mike = zulu[mike];
                zulu = undefined;
                tango = tango.bind(zulu)(mike);
                mike = tango.isAndroid;
                mike = mike.bind(tango)();
                if(mike) { _fun75484_ip = 69; continue _fun75484 }
 37:
                mike = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 2;
                entity = tango[entity];
                mike = mike.bind(zulu)(entity);
                entity = mike.getInitialNotification;
                entity = entity.bind(mike)();
                _fun75484_ip = 106; continue _fun75484;
 69:
                mike = global;
                tango = mike.Promise;
                mike = tango.prototype;
                zulu = Object.create(mike, {constructor: {value: tango}});
                report = function(argFoo) {
                    mike = argFoo;
                    var _closure3_slot0 = mike;
                    zulu = _closure1_slot3;
                    mike = zulu.getInitialNotification;
                    zulu = mike.bind(zulu)();
                    mike = zulu.then;
                    entity = function(argFoo) {
                        zulu = _closure3_slot0;
                        tango = _closure1_slot5;
                        entity = undefined;
                        mike = argFoo;
                        mike = tango.bind(entity)(mike);
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                oscar = zulu;
                mike = new oscar[tango](report, tango);
                entity = mike instanceof Object ? mike : zulu;
 106:
                return entity;
            }
        };
        mike['getInitialNotification'] = golf;
        golf = function(argFoo, argBar) { // Original name: setCurrentUser
            _fun75487: for(var _fun75487_ip = 0; ; ) switch(_fun75487_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun75487_ip = 59; continue _fun75487 }
 37:
                report = _closure1_slot3;
                tango = report.setCurrentUser;
                zulu = argFoo;
                mike = argBar;
                mike = tango.bind(report)(zulu, mike);
 59:
                return entity;
            }
        };
        mike['setCurrentUser'] = golf;
        golf = function() { // Original name: clearPushNotificationLogs
            _fun75488: for(var _fun75488_ip = 0; ; ) switch(_fun75488_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun75488_ip = 74; continue _fun75488 }
 37:
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 3;
                mike = tango[mike];
                mike = zulu.bind(entity)(mike);
                zulu = mike.default;
                mike = zulu.clearLogs;
                mike = mike.bind(zulu)();
 74:
                return entity;
            }
        };
        mike['clearPushNotificationLogs'] = golf;
        golf = function(argFoo) { // Original name: setApplicationIconBadgeNumber
            _fun75489: for(var _fun75489_ip = 0; ; ) switch(_fun75489_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun75489_ip = 71; continue _fun75489 }
 37:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 2;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.setApplicationIconBadgeNumber;
                mike = argFoo;
                mike = zulu.bind(tango)(mike);
 71:
                return entity;
            }
        };
        mike['setApplicationIconBadgeNumber'] = golf;
        golf = function() { // Original name: clearAllNotifications
            _fun75490: for(var _fun75490_ip = 0; ; ) switch(_fun75490_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun75490_ip = 72; continue _fun75490 }
 37:
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 2;
                zulu = report[zulu];
                report = tango.bind(entity)(zulu);
                tango = report.setApplicationIconBadgeNumber;
                zulu = 0;
                zulu = tango.bind(report)(zulu);
                _fun75490_ip = 86; continue _fun75490;
 72:
                zulu = _closure1_slot3;
                mike = zulu.clearAllNotifications;
                mike = mike.bind(zulu)();
 86:
                return entity;
            }
        };
        mike['clearAllNotifications'] = golf;
        golf = function(argFoo) { // Original name: presentLocalNotification
            _fun75491: for(var _fun75491_ip = 0; ; ) switch(_fun75491_ip) {
 0:
                tango = argFoo;
                report = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                report = report.bind(entity)(zulu);
                zulu = report.isAndroid;
                zulu = zulu.bind(report)();
                if(zulu) { _fun75491_ip = 73; continue _fun75491 }
 40:
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                zulu = 2;
                zulu = oscar[zulu];
                report = report.bind(entity)(zulu);
                zulu = report.presentLocalNotification;
                zulu = zulu.bind(report)(tango);
                _fun75491_ip = 88; continue _fun75491;
 73:
                zulu = _closure1_slot3;
                mike = zulu.presentLocalNotification;
                mike = mike.bind(zulu)(tango);
 88:
                return entity;
            }
        };
        mike['presentLocalNotification'] = golf;
        golf = function(argFoo) { // Original name: scheduleLocalNotification
            _fun75492: for(var _fun75492_ip = 0; ; ) switch(_fun75492_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun75492_ip = 71; continue _fun75492 }
 37:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 2;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.cancelLocalNotifications;
                mike = argFoo;
                mike = zulu.bind(tango)(mike);
 71:
                return entity;
            }
        };
        mike['scheduleLocalNotification'] = golf;
        golf = function(argFoo) { // Original name: getScheduledLocalNotifications
            _fun75493: for(var _fun75493_ip = 0; ; ) switch(_fun75493_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun75493_ip = 71; continue _fun75493 }
 37:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 2;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.getScheduledLocalNotifications;
                mike = argFoo;
                mike = zulu.bind(tango)(mike);
 71:
                return entity;
            }
        };
        mike['getScheduledLocalNotifications'] = golf;
        golf = function(argFoo) { // Original name: cancelLocalNotifications
            _fun75494: for(var _fun75494_ip = 0; ; ) switch(_fun75494_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun75494_ip = 71; continue _fun75494 }
 37:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 2;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.cancelLocalNotifications;
                mike = argFoo;
                mike = zulu.bind(tango)(mike);
 71:
                return entity;
            }
        };
        mike['cancelLocalNotifications'] = golf;
        golf = function() { // Original name: cancelAllLocalNotifications
            _fun75495: for(var _fun75495_ip = 0; ; ) switch(_fun75495_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun75495_ip = 67; continue _fun75495 }
 37:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 2;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.cancelAllLocalNotifications;
                mike = mike.bind(zulu)();
 67:
                return entity;
            }
        };
        mike['cancelAllLocalNotifications'] = golf;
        golf = function(argFoo) { // Original name: checkPermissions
            _fun75496: for(var _fun75496_ip = 0; ; ) switch(_fun75496_ip) {
 0:
                zulu = argFoo;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 1;
                tango = tango[entity];
                entity = undefined;
                report = report.bind(entity)(tango);
                tango = report.isAndroid;
                tango = tango.bind(report)();
                if(tango) { _fun75496_ip = 73; continue _fun75496 }
 40:
                tango = _closure1_slot1;
                report = _closure1_slot2;
                mike = 2;
                mike = report[mike];
                tango = tango.bind(entity)(mike);
                mike = tango.checkPermissions;
                mike = mike.bind(tango)(zulu);
                _fun75496_ip = 80; continue _fun75496;
 73:
                mike = {};
                mike = zulu.bind(entity)(mike);
 80:
                return entity;
            }
        };
        mike['checkPermissions'] = golf;
        golf = function(argFoo) { // Original name: requestPermissions
            _fun75497: for(var _fun75497_ip = 0; ; ) switch(_fun75497_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 1;
                mike = zulu[mike];
                zulu = undefined;
                tango = tango.bind(zulu)(mike);
                mike = tango.isAndroid;
                mike = mike.bind(tango)();
                if(mike) { _fun75497_ip = 73; continue _fun75497 }
 37:
                mike = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 2;
                entity = tango[entity];
                zulu = mike.bind(zulu)(entity);
                mike = zulu.requestPermissions;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                _fun75497_ip = 110; continue _fun75497;
 73:
                mike = global;
                tango = mike.Promise;
                mike = tango.prototype;
                zulu = Object.create(mike, {constructor: {value: tango}});
                report = function(argFoo) {
                    zulu = argFoo;
                    mike = undefined;
                    entity = {};
                    entity = zulu.bind(mike)(entity);
                    return entity;
                };
                oscar = zulu;
                mike = new oscar[tango](report, tango);
                entity = mike instanceof Object ? mike : zulu;
 110:
                return entity;
            }
        };
        mike['requestPermissions'] = golf;
        golf = function() { // Original name: openNotificationSettings
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            mike = mike.bind(entity)();
            return entity;
        };
        mike['openNotificationSettings'] = golf;
        golf = function(argFoo, argBar) { // Original name: addNotificationEventListener
            _fun75500: for(var _fun75500_ip = 0; ; ) switch(_fun75500_ip) {
 0:
                tango = argFoo;
                golf = argBar;
                var _closure2_slot0 = golf;
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                entity = 1;
                report = report[entity];
                entity = undefined;
                oscar = oscar.bind(entity)(report);
                report = oscar.isAndroid;
                report = report.bind(oscar)();
                if(report) { _fun75500_ip = 83; continue _fun75500 }
 49:
                oscar = _closure1_slot1;
                options = _closure1_slot2;
                report = 2;
                report = options[report];
                oscar = oscar.bind(entity)(report);
                report = oscar.addEventListener;
                report = report.bind(oscar)(tango, golf);
                _fun75500_ip = 162; continue _fun75500;
 83:
                options = 'notification';
                if(!(options === tango)) { _fun75500_ip = 114; continue _fun75500 }
 91:
                golf = _closure1_slot4;
                oscar = golf.addListener;
                report = function(argFoo) {
                    _fun75501: for(var _fun75501_ip = 0; ; ) switch(_fun75501_ip) {
 0:
                        zulu = _closure1_slot5;
                        entity = undefined;
                        mike = argFoo;
                        zulu = zulu.bind(entity)(mike);
                        mike = null;
                        if(!(mike != zulu)) { _fun75501_ip = 35; continue _fun75501 }
 23:
                        mike = _closure2_slot0;
                        mike = mike.bind(entity)(zulu);
 35:
                        return entity;
                    }
                };
                report = oscar.bind(golf)(options, report);
 114:
                golf = 'localNotification';
                if(!(golf === tango)) { _fun75500_ip = 147; continue _fun75500 }
 124:
                oscar = _closure1_slot4;
                report = oscar.addListener;
                zulu = function(argFoo) {
                    _fun75502: for(var _fun75502_ip = 0; ; ) switch(_fun75502_ip) {
 0:
                        zulu = _closure1_slot5;
                        entity = undefined;
                        mike = argFoo;
                        zulu = zulu.bind(entity)(mike);
                        mike = null;
                        if(!(mike != zulu)) { _fun75502_ip = 35; continue _fun75502 }
 23:
                        mike = _closure2_slot0;
                        mike = mike.bind(entity)(zulu);
 35:
                        return entity;
                    }
                };
                zulu = report.bind(oscar)(golf, zulu);
 147:
                zulu = _closure1_slot3;
                mike = zulu.registerEventListener;
                mike = mike.bind(zulu)(tango);
 162:
                return entity;
            }
        };
        mike['addNotificationEventListener'] = golf;
        golf = function(argFoo) { // Original name: addRegisterEventListener
            _fun75503: for(var _fun75503_ip = 0; ; ) switch(_fun75503_ip) {
 0:
                golf = argFoo;
                var _closure2_slot0 = golf;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 1;
                tango = tango[entity];
                entity = undefined;
                report = report.bind(entity)(tango);
                tango = report.isAndroid;
                tango = tango.bind(report)();
                if(tango) { _fun75503_ip = 84; continue _fun75503 }
 46:
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                tango = 2;
                tango = oscar[tango];
                oscar = report.bind(entity)(tango);
                report = oscar.addEventListener;
                tango = 'register';
                tango = report.bind(oscar)(tango, golf);
                _fun75503_ip = 126; continue _fun75503;
 84:
                oscar = _closure1_slot4;
                report = oscar.addListener;
                tango = 'register';
                zulu = function(argFoo) {
                    entity = argFoo;
                    zulu = entity.token;
                    mike = _closure2_slot0;
                    entity = undefined;
                    mike = mike.bind(entity)(zulu);
                    return entity;
                };
                zulu = report.bind(oscar)(tango, zulu);
                zulu = _closure1_slot3;
                mike = zulu.registerEventListener;
                mike = mike.bind(zulu)(tango);
 126:
                return entity;
            }
        };
        mike['addRegisterEventListener'] = golf;
        golf = function() { // Original name: getSoundsEnabled
            entity = global;
            zulu = entity.Promise;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            tango = function(argFoo) {
                _fun75506: for(var _fun75506_ip = 0; ; ) switch(_fun75506_ip) {
 0:
                    report = argFoo;
                    var _closure3_slot0 = report;
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 1;
                    tango = tango[entity];
                    entity = undefined;
                    oscar = oscar.bind(entity)(tango);
                    tango = oscar.isAndroid;
                    tango = tango.bind(oscar)();
                    if(tango) { _fun75506_ip = 55; continue _fun75506 }
 46:
                    tango = false;
                    tango = report.bind(entity)(tango);
                    _fun75506_ip = 86; continue _fun75506;
 55:
                    tango = _closure1_slot3;
                    zulu = tango.getSoundsEnabled;
                    tango = zulu.bind(tango)();
                    zulu = tango.then;
                    mike = function(argFoo) {
                        zulu = _closure3_slot0;
                        mike = undefined;
                        entity = argFoo;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
 86:
                    return entity;
                }
            };
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        mike['getSoundsEnabled'] = golf;
        golf = function() { // Original name: getVibrationsEnabled
            entity = global;
            zulu = entity.Promise;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            tango = function(argFoo) {
                _fun75509: for(var _fun75509_ip = 0; ; ) switch(_fun75509_ip) {
 0:
                    report = argFoo;
                    var _closure3_slot0 = report;
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 1;
                    tango = tango[entity];
                    entity = undefined;
                    oscar = oscar.bind(entity)(tango);
                    tango = oscar.isAndroid;
                    tango = tango.bind(oscar)();
                    if(tango) { _fun75509_ip = 55; continue _fun75509 }
 46:
                    tango = false;
                    tango = report.bind(entity)(tango);
                    _fun75509_ip = 86; continue _fun75509;
 55:
                    tango = _closure1_slot3;
                    zulu = tango.getVibrationsEnabled;
                    tango = zulu.bind(tango)();
                    zulu = tango.then;
                    mike = function(argFoo) {
                        zulu = _closure3_slot0;
                        mike = undefined;
                        entity = argFoo;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
 86:
                    return entity;
                }
            };
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        mike['getVibrationsEnabled'] = golf;
        golf = function() { // Original name: getLightsEnabled
            entity = global;
            zulu = entity.Promise;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            tango = function(argFoo) {
                _fun75512: for(var _fun75512_ip = 0; ; ) switch(_fun75512_ip) {
 0:
                    report = argFoo;
                    var _closure3_slot0 = report;
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 1;
                    tango = tango[entity];
                    entity = undefined;
                    oscar = oscar.bind(entity)(tango);
                    tango = oscar.isAndroid;
                    tango = tango.bind(oscar)();
                    if(tango) { _fun75512_ip = 55; continue _fun75512 }
 46:
                    tango = false;
                    tango = report.bind(entity)(tango);
                    _fun75512_ip = 86; continue _fun75512;
 55:
                    tango = _closure1_slot3;
                    zulu = tango.getLightsEnabled;
                    tango = zulu.bind(tango)();
                    zulu = tango.then;
                    mike = function(argFoo) {
                        zulu = _closure3_slot0;
                        mike = undefined;
                        entity = argFoo;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
 86:
                    return entity;
                }
            };
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        mike['getLightsEnabled'] = golf;
        golf = function(argFoo) { // Original name: setSoundsEnabled
            _fun75514: for(var _fun75514_ip = 0; ; ) switch(_fun75514_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun75514_ip = 55; continue _fun75514 }
 37:
                tango = _closure1_slot3;
                zulu = tango.setSoundsEnabled;
                mike = argFoo;
                mike = zulu.bind(tango)(mike);
 55:
                return entity;
            }
        };
        mike['setSoundsEnabled'] = golf;
        golf = function(argFoo) { // Original name: setVibrationsEnabled
            _fun75515: for(var _fun75515_ip = 0; ; ) switch(_fun75515_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun75515_ip = 55; continue _fun75515 }
 37:
                tango = _closure1_slot3;
                zulu = tango.setVibrationsEnabled;
                mike = argFoo;
                mike = zulu.bind(tango)(mike);
 55:
                return entity;
            }
        };
        mike['setVibrationsEnabled'] = golf;
        golf = function(argFoo) { // Original name: setLightsEnabled
            _fun75516: for(var _fun75516_ip = 0; ; ) switch(_fun75516_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun75516_ip = 55; continue _fun75516 }
 37:
                tango = _closure1_slot3;
                zulu = tango.setLightsEnabled;
                mike = argFoo;
                mike = zulu.bind(tango)(mike);
 55:
                return entity;
            }
        };
        mike['setLightsEnabled'] = golf;
        golf = function(argFoo) { // Original name: setAndroidNotifyEveryTime
            _fun75517: for(var _fun75517_ip = 0; ; ) switch(_fun75517_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun75517_ip = 57; continue _fun75517 }
 37:
                tango = _closure1_slot3;
                zulu = tango.setNotifyEveryTime;
                mike = argFoo;
                mike = zulu.bind(tango)(mike);
 57:
                return entity;
            }
        };
        mike['setAndroidNotifyEveryTime'] = golf;
        tango = function() { // Original name: shouldAndroidNotifyEveryTime
            entity = global;
            zulu = entity.Promise;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            tango = function(argFoo) {
                _fun75519: for(var _fun75519_ip = 0; ; ) switch(_fun75519_ip) {
 0:
                    report = argFoo;
                    var _closure3_slot0 = report;
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 1;
                    tango = tango[entity];
                    entity = undefined;
                    oscar = oscar.bind(entity)(tango);
                    tango = oscar.isAndroid;
                    tango = tango.bind(oscar)();
                    if(tango) { _fun75519_ip = 55; continue _fun75519 }
 46:
                    tango = false;
                    tango = report.bind(entity)(tango);
                    _fun75519_ip = 88; continue _fun75519;
 55:
                    tango = _closure1_slot3;
                    zulu = tango.shouldNotifyEveryTime;
                    tango = zulu.bind(tango)();
                    zulu = tango.then;
                    mike = function(argFoo) {
                        zulu = _closure3_slot0;
                        mike = undefined;
                        entity = argFoo;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
 88:
                    return entity;
                }
            };
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        mike['shouldAndroidNotifyEveryTime'] = tango;
        tango = 5;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'lib/pushnotification/PushNotification.tsx';
        tango = report.bind(oscar)(tango);
        zulu['default'] = mike;
        return entity;
    }
})();
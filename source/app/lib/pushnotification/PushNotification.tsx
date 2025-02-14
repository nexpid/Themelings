// app/lib/pushnotification/PushNotification.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun75464: for(var _fun75464_ip = 0; ; ) switch(_fun75464_ip) {
 0:
        report = argBar;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        entity = argBaz;
        var _closure1_slot1 = entity;
        var _closure1_slot2 = oscar;
        entity = function(argFoo) { // Original name: createNotification
            _fun75465: for(var _fun75465_ip = 0; ; ) switch(_fun75465_ip) {
 0:
                mike = argFoo;
                var _closure2_slot0 = mike;
                entity = null;
                mike = entity == mike;
                if(mike) { _fun75465_ip = 119; continue _fun75465 }
 18:
                mike = {};
                tango = function() { // Original name: getData
                    _fun75466: for(var _fun75466_ip = 0; ; ) switch(_fun75466_ip) {
 0:
                        entity = {};
                        zulu = _closure2_slot0;
                        golf = entity;
                        oscar = zulu;
                        tango = copyDataProperties(golf, oscar);
                        tango = zulu.message;
                        zulu = null;
                        tango = zulu != tango;
                        if(!tango) { _fun75466_ip = 61; continue _fun75466 }
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
        if(!options) { _fun75464_ip = 139; continue _fun75464 }
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
            _fun75474: for(var _fun75474_ip = 0; ; ) switch(_fun75474_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 1;
                mike = zulu[mike];
                zulu = undefined;
                tango = tango.bind(zulu)(mike);
                mike = tango.isAndroid;
                mike = mike.bind(tango)();
                if(mike) { _fun75474_ip = 69; continue _fun75474 }
 37:
                mike = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 2;
                entity = tango[entity];
                mike = mike.bind(zulu)(entity);
                entity = mike.getInitialNotification;
                entity = entity.bind(mike)();
                _fun75474_ip = 106; continue _fun75474;
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
            _fun75477: for(var _fun75477_ip = 0; ; ) switch(_fun75477_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun75477_ip = 59; continue _fun75477 }
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
            _fun75478: for(var _fun75478_ip = 0; ; ) switch(_fun75478_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun75478_ip = 74; continue _fun75478 }
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
            _fun75479: for(var _fun75479_ip = 0; ; ) switch(_fun75479_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun75479_ip = 71; continue _fun75479 }
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
            _fun75480: for(var _fun75480_ip = 0; ; ) switch(_fun75480_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun75480_ip = 72; continue _fun75480 }
 37:
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 2;
                zulu = report[zulu];
                report = tango.bind(entity)(zulu);
                tango = report.setApplicationIconBadgeNumber;
                zulu = 0;
                zulu = tango.bind(report)(zulu);
                _fun75480_ip = 86; continue _fun75480;
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
            _fun75481: for(var _fun75481_ip = 0; ; ) switch(_fun75481_ip) {
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
                if(zulu) { _fun75481_ip = 73; continue _fun75481 }
 40:
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                zulu = 2;
                zulu = oscar[zulu];
                report = report.bind(entity)(zulu);
                zulu = report.presentLocalNotification;
                zulu = zulu.bind(report)(tango);
                _fun75481_ip = 88; continue _fun75481;
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
            _fun75482: for(var _fun75482_ip = 0; ; ) switch(_fun75482_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun75482_ip = 71; continue _fun75482 }
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
            _fun75483: for(var _fun75483_ip = 0; ; ) switch(_fun75483_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun75483_ip = 71; continue _fun75483 }
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
            _fun75484: for(var _fun75484_ip = 0; ; ) switch(_fun75484_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun75484_ip = 71; continue _fun75484 }
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
            _fun75485: for(var _fun75485_ip = 0; ; ) switch(_fun75485_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun75485_ip = 67; continue _fun75485 }
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
            _fun75486: for(var _fun75486_ip = 0; ; ) switch(_fun75486_ip) {
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
                if(tango) { _fun75486_ip = 73; continue _fun75486 }
 40:
                tango = _closure1_slot1;
                report = _closure1_slot2;
                mike = 2;
                mike = report[mike];
                tango = tango.bind(entity)(mike);
                mike = tango.checkPermissions;
                mike = mike.bind(tango)(zulu);
                _fun75486_ip = 80; continue _fun75486;
 73:
                mike = {};
                mike = zulu.bind(entity)(mike);
 80:
                return entity;
            }
        };
        mike['checkPermissions'] = golf;
        golf = function(argFoo) { // Original name: requestPermissions
            _fun75487: for(var _fun75487_ip = 0; ; ) switch(_fun75487_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 1;
                mike = zulu[mike];
                zulu = undefined;
                tango = tango.bind(zulu)(mike);
                mike = tango.isAndroid;
                mike = mike.bind(tango)();
                if(mike) { _fun75487_ip = 73; continue _fun75487 }
 37:
                mike = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 2;
                entity = tango[entity];
                zulu = mike.bind(zulu)(entity);
                mike = zulu.requestPermissions;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                _fun75487_ip = 110; continue _fun75487;
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
            _fun75490: for(var _fun75490_ip = 0; ; ) switch(_fun75490_ip) {
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
                if(report) { _fun75490_ip = 83; continue _fun75490 }
 49:
                oscar = _closure1_slot1;
                options = _closure1_slot2;
                report = 2;
                report = options[report];
                oscar = oscar.bind(entity)(report);
                report = oscar.addEventListener;
                report = report.bind(oscar)(tango, golf);
                _fun75490_ip = 162; continue _fun75490;
 83:
                options = 'notification';
                if(!(options === tango)) { _fun75490_ip = 114; continue _fun75490 }
 91:
                golf = _closure1_slot4;
                oscar = golf.addListener;
                report = function(argFoo) {
                    _fun75491: for(var _fun75491_ip = 0; ; ) switch(_fun75491_ip) {
 0:
                        zulu = _closure1_slot5;
                        entity = undefined;
                        mike = argFoo;
                        zulu = zulu.bind(entity)(mike);
                        mike = null;
                        if(!(mike != zulu)) { _fun75491_ip = 35; continue _fun75491 }
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
                if(!(golf === tango)) { _fun75490_ip = 147; continue _fun75490 }
 124:
                oscar = _closure1_slot4;
                report = oscar.addListener;
                zulu = function(argFoo) {
                    _fun75492: for(var _fun75492_ip = 0; ; ) switch(_fun75492_ip) {
 0:
                        zulu = _closure1_slot5;
                        entity = undefined;
                        mike = argFoo;
                        zulu = zulu.bind(entity)(mike);
                        mike = null;
                        if(!(mike != zulu)) { _fun75492_ip = 35; continue _fun75492 }
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
            _fun75493: for(var _fun75493_ip = 0; ; ) switch(_fun75493_ip) {
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
                if(tango) { _fun75493_ip = 84; continue _fun75493 }
 46:
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                tango = 2;
                tango = oscar[tango];
                oscar = report.bind(entity)(tango);
                report = oscar.addEventListener;
                tango = 'register';
                tango = report.bind(oscar)(tango, golf);
                _fun75493_ip = 126; continue _fun75493;
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
                _fun75496: for(var _fun75496_ip = 0; ; ) switch(_fun75496_ip) {
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
                    if(tango) { _fun75496_ip = 55; continue _fun75496 }
 46:
                    tango = false;
                    tango = report.bind(entity)(tango);
                    _fun75496_ip = 86; continue _fun75496;
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
                _fun75499: for(var _fun75499_ip = 0; ; ) switch(_fun75499_ip) {
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
                    if(tango) { _fun75499_ip = 55; continue _fun75499 }
 46:
                    tango = false;
                    tango = report.bind(entity)(tango);
                    _fun75499_ip = 86; continue _fun75499;
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
                _fun75502: for(var _fun75502_ip = 0; ; ) switch(_fun75502_ip) {
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
                    if(tango) { _fun75502_ip = 55; continue _fun75502 }
 46:
                    tango = false;
                    tango = report.bind(entity)(tango);
                    _fun75502_ip = 86; continue _fun75502;
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
            _fun75504: for(var _fun75504_ip = 0; ; ) switch(_fun75504_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun75504_ip = 55; continue _fun75504 }
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
            _fun75505: for(var _fun75505_ip = 0; ; ) switch(_fun75505_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun75505_ip = 55; continue _fun75505 }
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
            _fun75506: for(var _fun75506_ip = 0; ; ) switch(_fun75506_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun75506_ip = 55; continue _fun75506 }
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
            _fun75507: for(var _fun75507_ip = 0; ; ) switch(_fun75507_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun75507_ip = 57; continue _fun75507 }
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
                    _fun75509_ip = 88; continue _fun75509;
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
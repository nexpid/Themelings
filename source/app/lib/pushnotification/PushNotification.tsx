// app/lib/pushnotification/PushNotification.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        entity = argBaz;
        var _closure1_slot1 = entity;
        var _closure1_slot2 = oscar;
        entity = function(argFoo) { // Original name: createNotification
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                mike = argFoo;
                var _closure2_slot0 = mike;
                entity = null;
                mike = entity == mike;
                if(mike) { _fun00004_ip = 103; continue _fun00003 }
 18:
                mike = {};
                tango = function() { // Original name: getData
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = {};
                        zulu = _closure2_slot0;
                        golf = entity;
                        oscar = zulu;
                        tango = copyDataProperties(golf, oscar);
                        tango = zulu.message;
                        zulu = null;
                        tango = zulu != tango;
                        if(!tango) { _fun00006_ip = 61; continue _fun00005 }
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
 103:
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
        if(!options) { _fun00002_ip = 137; continue _fun00001 }
 111:
        romeo = golf.PushNotificationAndroid;
        options = verify.prototype;
        options = Object.create(options, {constructor: {value: verify}});
        foxtrot = options;
        golf = new foxtrot[verify](romeo, yankee);
        mike = golf instanceof Object ? golf : options;
 137:
        var _closure1_slot4 = mike;
        mike = {};
        golf = function() { // Original name: getInitialNotification
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 1;
                mike = zulu[mike];
                zulu = undefined;
                tango = tango.bind(zulu)(mike);
                mike = tango.isAndroid;
                mike = mike.bind(tango)();
                if(mike) { _fun00008_ip = 69; continue _fun00007 }
 37:
                mike = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 2;
                entity = tango[entity];
                mike = mike.bind(zulu)(entity);
                entity = mike.getInitialNotification;
                entity = entity.bind(mike)();
                _fun00008_ip = 104; continue _fun00007;
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
 104:
                return entity;
            }
        };
        mike['getInitialNotification'] = golf;
        golf = function(argFoo, argBar) { // Original name: setCurrentUser
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun00010_ip = 59; continue _fun00009 }
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
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun00012_ip = 74; continue _fun00011 }
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
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun00014_ip = 71; continue _fun00013 }
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
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun00016_ip = 72; continue _fun00015 }
 37:
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 2;
                zulu = report[zulu];
                report = tango.bind(entity)(zulu);
                tango = report.setApplicationIconBadgeNumber;
                zulu = 0;
                zulu = tango.bind(report)(zulu);
                _fun00016_ip = 86; continue _fun00015;
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
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
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
                if(zulu) { _fun00018_ip = 73; continue _fun00017 }
 40:
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                zulu = 2;
                zulu = oscar[zulu];
                report = report.bind(entity)(zulu);
                zulu = report.presentLocalNotification;
                zulu = zulu.bind(report)(tango);
                _fun00018_ip = 88; continue _fun00017;
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
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun00020_ip = 71; continue _fun00019 }
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
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun00022_ip = 71; continue _fun00021 }
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
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun00024_ip = 71; continue _fun00023 }
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
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun00026_ip = 67; continue _fun00025 }
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
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
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
                if(tango) { _fun00028_ip = 73; continue _fun00027 }
 40:
                tango = _closure1_slot1;
                report = _closure1_slot2;
                mike = 2;
                mike = report[mike];
                tango = tango.bind(entity)(mike);
                mike = tango.checkPermissions;
                mike = mike.bind(tango)(zulu);
                _fun00028_ip = 80; continue _fun00027;
 73:
                mike = {};
                mike = zulu.bind(entity)(mike);
 80:
                return entity;
            }
        };
        mike['checkPermissions'] = golf;
        golf = function(argFoo) { // Original name: requestPermissions
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 1;
                mike = zulu[mike];
                zulu = undefined;
                tango = tango.bind(zulu)(mike);
                mike = tango.isAndroid;
                mike = mike.bind(tango)();
                if(mike) { _fun00030_ip = 73; continue _fun00029 }
 37:
                mike = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 2;
                entity = tango[entity];
                zulu = mike.bind(zulu)(entity);
                mike = zulu.requestPermissions;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                _fun00030_ip = 108; continue _fun00029;
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
 108:
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
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
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
                if(report) { _fun00032_ip = 83; continue _fun00031 }
 49:
                oscar = _closure1_slot1;
                options = _closure1_slot2;
                report = 2;
                report = options[report];
                oscar = oscar.bind(entity)(report);
                report = oscar.addEventListener;
                report = report.bind(oscar)(tango, golf);
                _fun00032_ip = 158; continue _fun00031;
 83:
                options = 'notification';
                if(!(options === tango)) { _fun00032_ip = 112; continue _fun00031 }
 91:
                golf = _closure1_slot4;
                oscar = golf.addListener;
                report = function(argFoo) {
                    _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                        zulu = _closure1_slot5;
                        entity = undefined;
                        mike = argFoo;
                        zulu = zulu.bind(entity)(mike);
                        mike = null;
                        if(!(mike != zulu)) { _fun00034_ip = 35; continue _fun00033 }
 23:
                        mike = _closure2_slot0;
                        mike = mike.bind(entity)(zulu);
 35:
                        return entity;
                    }
                };
                report = oscar.bind(golf)(options, report);
 112:
                golf = 'localNotification';
                if(!(golf === tango)) { _fun00032_ip = 143; continue _fun00031 }
 122:
                oscar = _closure1_slot4;
                report = oscar.addListener;
                zulu = function(argFoo) {
                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                        zulu = _closure1_slot5;
                        entity = undefined;
                        mike = argFoo;
                        zulu = zulu.bind(entity)(mike);
                        mike = null;
                        if(!(mike != zulu)) { _fun00036_ip = 35; continue _fun00035 }
 23:
                        mike = _closure2_slot0;
                        mike = mike.bind(entity)(zulu);
 35:
                        return entity;
                    }
                };
                zulu = report.bind(oscar)(golf, zulu);
 143:
                zulu = _closure1_slot3;
                mike = zulu.registerEventListener;
                mike = mike.bind(zulu)(tango);
 158:
                return entity;
            }
        };
        mike['addNotificationEventListener'] = golf;
        golf = function(argFoo) { // Original name: addRegisterEventListener
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
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
                if(tango) { _fun00038_ip = 84; continue _fun00037 }
 46:
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                tango = 2;
                tango = oscar[tango];
                oscar = report.bind(entity)(tango);
                report = oscar.addEventListener;
                tango = 'register';
                tango = report.bind(oscar)(tango, golf);
                _fun00038_ip = 124; continue _fun00037;
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
 124:
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
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
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
                    if(tango) { _fun00040_ip = 55; continue _fun00039 }
 46:
                    tango = false;
                    tango = report.bind(entity)(tango);
                    _fun00040_ip = 84; continue _fun00039;
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
 84:
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
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
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
                    if(tango) { _fun00042_ip = 55; continue _fun00041 }
 46:
                    tango = false;
                    tango = report.bind(entity)(tango);
                    _fun00042_ip = 84; continue _fun00041;
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
 84:
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
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
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
                    if(tango) { _fun00044_ip = 55; continue _fun00043 }
 46:
                    tango = false;
                    tango = report.bind(entity)(tango);
                    _fun00044_ip = 84; continue _fun00043;
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
 84:
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
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun00046_ip = 55; continue _fun00045 }
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
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun00048_ip = 55; continue _fun00047 }
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
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun00050_ip = 55; continue _fun00049 }
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
            _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isAndroid;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun00052_ip = 57; continue _fun00051 }
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
                _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
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
                    if(tango) { _fun00054_ip = 55; continue _fun00053 }
 46:
                    tango = false;
                    tango = report.bind(entity)(tango);
                    _fun00054_ip = 86; continue _fun00053;
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
 86:
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
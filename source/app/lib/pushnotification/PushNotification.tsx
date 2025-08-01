// app/lib/pushnotification/PushNotification.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var1 = metroImportDefault;
        var _closure1_slot1 = var1;
        var _closure1_slot2 = var6;
        var1 = function createNotification(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var _closure2_slot0 = var2;
                var1 = null;
                var2 = var1 == var2;
                if(var2) { _fun0002_ip = 119; continue _fun0002 }
 18:
                var2 = {};
                var4 = function getData() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = {};
                        var3 = _closure2_slot0;
                        var7 = var1;
                        var6 = var3;
                        var4 = copyDataProperties(var7, var6);
                        var4 = var3.message;
                        var3 = null;
                        var4 = var3 != var4;
                        if(!var4) { _fun0003_ip = 61; continue _fun0003 }
 33:
                        var4 = global;
                        var5 = var4.JSON;
                        var4 = var5.parse;
                        var2 = _closure2_slot0;
                        var2 = var2.message;
                        var3 = var4.bind(var5)(var2);
 61:
                        var2 = 'message';
                        var1[var2] = var3;
                        return var1;
                    }
                };
                var2['getData'] = var4;
                var4 = function getMessage() {
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var4 = 'TODO: Implement on Android';
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                };
                var2['getMessage'] = var4;
                var4 = function getSound() {
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var4 = 'TODO: Implement on Android';
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                };
                var2['getSound'] = var4;
                var4 = function getCategory() {
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var4 = 'TODO: Implement on Android';
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                };
                var2['getCategory'] = var4;
                var4 = function getAlert() {
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var4 = 'TODO: Implement on Android';
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                };
                var2['getAlert'] = var4;
                var4 = function getContentAvailable() {
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var4 = 'TODO: Implement on Android';
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                };
                var2['getContentAvailable'] = var4;
                var4 = function getBadgeCount() {
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var4 = 'TODO: Implement on Android';
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                };
                var2['getBadgeCount'] = var4;
                var3 = function finish(arg1) {
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var2 = 'Not implemented on Android: ';
                    var1 = arg1;
                    var5 = var4.bind(var2)(var1);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var6 = var2;
                    var1 = new var6[var3](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                };
                var2['finish'] = var3;
                var1 = var2;
 119:
                return var1;
            }
        };
        var _closure1_slot5 = var1;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var2);
        var1 = 0;
        var2 = var6[var1];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var7 = var2.NativeModules;
        var9 = var2.NativeEventEmitter;
        var8 = var7.PushNotificationAndroid;
        var _closure1_slot3 = var8;
        var2 = null;
        var8 = var2 != var8;
        if(!var8) { _fun0001_ip = 139; continue _fun0001 }
 113:
        var12 = var7.PushNotificationAndroid;
        var8 = var9.prototype;
        var8 = Object.create(var8, {constructor: {value: var9}});
        var13 = var8;
        var7 = new var13[var9](var12, var11);
        var2 = var7 instanceof Object ? var7 : var8;
 139:
        var _closure1_slot4 = var2;
        var2 = {};
        var7 = function getInitialNotification() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 1;
                var2 = var3[var2];
                var3 = undefined;
                var4 = var4.bind(var3)(var2);
                var2 = var4.isAndroid;
                var2 = var2.bind(var4)();
                if(var2) { _fun0004_ip = 69; continue _fun0004 }
 37:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 2;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getInitialNotification;
                var1 = var1.bind(var2)();
                _fun0004_ip = 106; continue _fun0004;
 69:
                var2 = global;
                var4 = var2.Promise;
                var2 = var4.prototype;
                var3 = Object.create(var2, {constructor: {value: var4}});
                var5 = function(arg1) {
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var3 = _closure1_slot3;
                    var2 = var3.getInitialNotification;
                    var3 = var2.bind(var3)();
                    var2 = var3.then;
                    var1 = function(arg1) {
                        var3 = _closure3_slot0;
                        var4 = _closure1_slot5;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var4.bind(var1)(var2);
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var6 = var3;
                var2 = new var6[var4](var5, var4);
                var1 = var2 instanceof Object ? var2 : var3;
 106:
                return var1;
            }
        };
        var2['getInitialNotification'] = var7;
        var7 = function setCurrentUser(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0005_ip = 59; continue _fun0005 }
 37:
                var5 = _closure1_slot3;
                var4 = var5.setCurrentUser;
                var3 = arg1;
                var2 = arg2;
                var2 = var4.bind(var5)(var3, var2);
 59:
                return var1;
            }
        };
        var2['setCurrentUser'] = var7;
        var7 = function clearPushNotificationLogs() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0006_ip = 72; continue _fun0006 }
 37:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 3;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var3 = var2.default;
                var2 = var3.clearLogs;
                var2 = var2.bind(var3)();
 72:
                return var1;
            }
        };
        var2['clearPushNotificationLogs'] = var7;
        var7 = function setApplicationIconBadgeNumber(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if(var3) { _fun0007_ip = 71; continue _fun0007 }
 37:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 2;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.setApplicationIconBadgeNumber;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
 71:
                return var1;
            }
        };
        var2['setApplicationIconBadgeNumber'] = var7;
        var7 = function clearAllNotifications() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if(var3) { _fun0008_ip = 72; continue _fun0008 }
 37:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 2;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.setApplicationIconBadgeNumber;
                var3 = 0;
                var3 = var4.bind(var5)(var3);
                _fun0008_ip = 86; continue _fun0008;
 72:
                var3 = _closure1_slot3;
                var2 = var3.clearAllNotifications;
                var2 = var2.bind(var3)();
 86:
                return var1;
            }
        };
        var2['clearAllNotifications'] = var7;
        var7 = function presentLocalNotification(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var4 = arg1;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.isAndroid;
                var3 = var3.bind(var5)();
                if(var3) { _fun0009_ip = 73; continue _fun0009 }
 40:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 2;
                var3 = var6[var3];
                var5 = var5.bind(var1)(var3);
                var3 = var5.presentLocalNotification;
                var3 = var3.bind(var5)(var4);
                _fun0009_ip = 88; continue _fun0009;
 73:
                var3 = _closure1_slot3;
                var2 = var3.presentLocalNotification;
                var2 = var2.bind(var3)(var4);
 88:
                return var1;
            }
        };
        var2['presentLocalNotification'] = var7;
        var7 = function scheduleLocalNotification(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if(var3) { _fun0010_ip = 71; continue _fun0010 }
 37:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 2;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.scheduleLocalNotification;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
 71:
                return var1;
            }
        };
        var2['scheduleLocalNotification'] = var7;
        var7 = function getScheduledLocalNotifications(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if(var3) { _fun0011_ip = 71; continue _fun0011 }
 37:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 2;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.getScheduledLocalNotifications;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
 71:
                return var1;
            }
        };
        var2['getScheduledLocalNotifications'] = var7;
        var7 = function cancelLocalNotifications(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if(var3) { _fun0012_ip = 71; continue _fun0012 }
 37:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 2;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.cancelLocalNotifications;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
 71:
                return var1;
            }
        };
        var2['cancelLocalNotifications'] = var7;
        var7 = function cancelAllLocalNotifications() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if(var3) { _fun0013_ip = 67; continue _fun0013 }
 37:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 2;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.cancelAllLocalNotifications;
                var2 = var2.bind(var3)();
 67:
                return var1;
            }
        };
        var2['cancelAllLocalNotifications'] = var7;
        var7 = function checkPermissions(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var3 = arg1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 1;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.isAndroid;
                var4 = var4.bind(var5)();
                if(var4) { _fun0014_ip = 73; continue _fun0014 }
 40:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 2;
                var2 = var5[var2];
                var4 = var4.bind(var1)(var2);
                var2 = var4.checkPermissions;
                var2 = var2.bind(var4)(var3);
                _fun0014_ip = 80; continue _fun0014;
 73:
                var2 = {};
                var2 = var3.bind(var1)(var2);
 80:
                return var1;
            }
        };
        var2['checkPermissions'] = var7;
        var7 = function requestPermissions(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 1;
                var2 = var3[var2];
                var3 = undefined;
                var4 = var4.bind(var3)(var2);
                var2 = var4.isAndroid;
                var2 = var2.bind(var4)();
                if(var2) { _fun0015_ip = 73; continue _fun0015 }
 37:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 2;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.requestPermissions;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                _fun0015_ip = 110; continue _fun0015;
 73:
                var2 = global;
                var4 = var2.Promise;
                var2 = var4.prototype;
                var3 = Object.create(var2, {constructor: {value: var4}});
                var5 = function(arg1) {
                    var3 = arg1;
                    var2 = undefined;
                    var1 = {};
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var6 = var3;
                var2 = new var6[var4](var5, var4);
                var1 = var2 instanceof Object ? var2 : var3;
 110:
                return var1;
            }
        };
        var2['requestPermissions'] = var7;
        var7 = function openNotificationSettings() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.bind(var1)();
            return var1;
        };
        var2['openNotificationSettings'] = var7;
        var7 = function addNotificationEventListener(arg1, arg2) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var4 = arg1;
                var7 = arg2;
                var _closure2_slot0 = var7;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 1;
                var5 = var5[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var5);
                var5 = var6.isAndroid;
                var5 = var5.bind(var6)();
                if(var5) { _fun0016_ip = 83; continue _fun0016 }
 49:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 2;
                var5 = var8[var5];
                var6 = var6.bind(var1)(var5);
                var5 = var6.addEventListener;
                var5 = var5.bind(var6)(var4, var7);
                _fun0016_ip = 162; continue _fun0016;
 83:
                var8 = 'notification';
                if(!(var8 === var4)) { _fun0016_ip = 114; continue _fun0016 }
 91:
                var7 = _closure1_slot4;
                var6 = var7.addListener;
                var5 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        var3 = _closure1_slot5;
                        var1 = undefined;
                        var2 = arg1;
                        var3 = var3.bind(var1)(var2);
                        var2 = null;
                        if(!(var2 != var3)) { _fun0017_ip = 35; continue _fun0017 }
 23:
                        var2 = _closure2_slot0;
                        var2 = var2.bind(var1)(var3);
 35:
                        return var1;
                    }
                };
                var5 = var6.bind(var7)(var8, var5);
 114:
                var7 = 'localNotification';
                if(!(var7 === var4)) { _fun0016_ip = 147; continue _fun0016 }
 124:
                var6 = _closure1_slot4;
                var5 = var6.addListener;
                var3 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var3 = _closure1_slot5;
                        var1 = undefined;
                        var2 = arg1;
                        var3 = var3.bind(var1)(var2);
                        var2 = null;
                        if(!(var2 != var3)) { _fun0018_ip = 35; continue _fun0018 }
 23:
                        var2 = _closure2_slot0;
                        var2 = var2.bind(var1)(var3);
 35:
                        return var1;
                    }
                };
                var3 = var5.bind(var6)(var7, var3);
 147:
                var3 = _closure1_slot3;
                var2 = var3.registerEventListener;
                var2 = var2.bind(var3)(var4);
 162:
                return var1;
            }
        };
        var2['addNotificationEventListener'] = var7;
        var7 = function addRegisterEventListener(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var7 = arg1;
                var _closure2_slot0 = var7;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 1;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.isAndroid;
                var4 = var4.bind(var5)();
                if(var4) { _fun0019_ip = 84; continue _fun0019 }
 46:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 2;
                var4 = var6[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.addEventListener;
                var4 = 'register';
                var4 = var5.bind(var6)(var4, var7);
                _fun0019_ip = 126; continue _fun0019;
 84:
                var6 = _closure1_slot4;
                var5 = var6.addListener;
                var4 = 'register';
                var3 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.token;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var3 = var5.bind(var6)(var4, var3);
                var3 = _closure1_slot3;
                var2 = var3.registerEventListener;
                var2 = var2.bind(var3)(var4);
 126:
                return var1;
            }
        };
        var2['addRegisterEventListener'] = var7;
        var7 = function getSoundsEnabled() {
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var5 = arg1;
                    var _closure3_slot0 = var5;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 1;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.isAndroid;
                    var4 = var4.bind(var6)();
                    if(var4) { _fun0020_ip = 55; continue _fun0020 }
 46:
                    var4 = false;
                    var4 = var5.bind(var1)(var4);
                    _fun0020_ip = 86; continue _fun0020;
 55:
                    var4 = _closure1_slot3;
                    var3 = var4.getSoundsEnabled;
                    var4 = var3.bind(var4)();
                    var3 = var4.then;
                    var2 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
 86:
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var2['getSoundsEnabled'] = var7;
        var7 = function getVibrationsEnabled() {
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var5 = arg1;
                    var _closure3_slot0 = var5;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 1;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.isAndroid;
                    var4 = var4.bind(var6)();
                    if(var4) { _fun0021_ip = 55; continue _fun0021 }
 46:
                    var4 = false;
                    var4 = var5.bind(var1)(var4);
                    _fun0021_ip = 86; continue _fun0021;
 55:
                    var4 = _closure1_slot3;
                    var3 = var4.getVibrationsEnabled;
                    var4 = var3.bind(var4)();
                    var3 = var4.then;
                    var2 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
 86:
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var2['getVibrationsEnabled'] = var7;
        var7 = function getLightsEnabled() {
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = function(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var5 = arg1;
                    var _closure3_slot0 = var5;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 1;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.isAndroid;
                    var4 = var4.bind(var6)();
                    if(var4) { _fun0022_ip = 55; continue _fun0022 }
 46:
                    var4 = false;
                    var4 = var5.bind(var1)(var4);
                    _fun0022_ip = 86; continue _fun0022;
 55:
                    var4 = _closure1_slot3;
                    var3 = var4.getLightsEnabled;
                    var4 = var3.bind(var4)();
                    var3 = var4.then;
                    var2 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
 86:
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var2['getLightsEnabled'] = var7;
        var7 = function setSoundsEnabled(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0023_ip = 55; continue _fun0023 }
 37:
                var4 = _closure1_slot3;
                var3 = var4.setSoundsEnabled;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
 55:
                return var1;
            }
        };
        var2['setSoundsEnabled'] = var7;
        var7 = function setVibrationsEnabled(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0024_ip = 55; continue _fun0024 }
 37:
                var4 = _closure1_slot3;
                var3 = var4.setVibrationsEnabled;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
 55:
                return var1;
            }
        };
        var2['setVibrationsEnabled'] = var7;
        var7 = function setLightsEnabled(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0025_ip = 55; continue _fun0025 }
 37:
                var4 = _closure1_slot3;
                var3 = var4.setLightsEnabled;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
 55:
                return var1;
            }
        };
        var2['setLightsEnabled'] = var7;
        var7 = function setAndroidNotifyEveryTime(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0026_ip = 57; continue _fun0026 }
 37:
                var4 = _closure1_slot3;
                var3 = var4.setNotifyEveryTime;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
 57:
                return var1;
            }
        };
        var2['setAndroidNotifyEveryTime'] = var7;
        var4 = function shouldAndroidNotifyEveryTime() {
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = function(arg1) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                    var5 = arg1;
                    var _closure3_slot0 = var5;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 1;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.isAndroid;
                    var4 = var4.bind(var6)();
                    if(var4) { _fun0027_ip = 55; continue _fun0027 }
 46:
                    var4 = false;
                    var4 = var5.bind(var1)(var4);
                    _fun0027_ip = 88; continue _fun0027;
 55:
                    var4 = _closure1_slot3;
                    var3 = var4.shouldNotifyEveryTime;
                    var4 = var3.bind(var4)();
                    var3 = var4.then;
                    var2 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
 88:
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var2['shouldAndroidNotifyEveryTime'] = var4;
        var4 = 5;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'lib/pushnotification/PushNotification.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();
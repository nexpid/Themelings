// app/modules/push_notifications/native/PushNotificationCacheManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function PushNotificationCacheManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot3;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot5;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot4;
                var1 = _closure1_slot9;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot5;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 8:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = {};
                var5 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleUserUpdate;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4['POST_CONNECTION_OPEN'] = var5;
                var5 = function CURRENT_USER_UPDATE() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleUserUpdate;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4['CURRENT_USER_UPDATE'] = var5;
                var5 = function LOGOUT() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleLogout;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4['LOGOUT'] = var5;
                var1['actions'] = var4;
                var4 = global;
                var5 = var4.Map;
                var3 = _closure1_slot7;
                var4 = new Array(2);
                var4[0] = var3;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.syncMultiAccountUsers;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4[1] = var3;
                var3 = new Array(1);
                var3[0] = var4;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var15 = var4;
                var14 = var3;
                var3 = new var15[var5](var14, var13);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['stores'] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure1_slot8;
                        var1 = var3.getCurrentUser;
                        var1 = var1.bind(var3)();
                        var5 = null;
                        if(!(var5 == var1)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var3 = 8;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var6.bind(var3)(var4);
                        var3 = var4.setCurrentUser;
                        var3 = var3.bind(var4)(var5, var5);
                        _fun0003_ip = 11; continue _fun0003;
case 9:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 8;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.setCurrentUser;
                        var2 = var1.username;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var2, var1);
case 11:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleUserUpdate'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setMultiAccountUsers;
                    var2 = function buildMultiAccountUsers() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var3 = _closure1_slot7;
                            var3 = var3.canUseMultiAccountNotifications;
                            if(var3) { _fun0004_ip = 10; continue _fun0004 }
case 12:
                            var3 = {};
                            return var3;
case 10:
                            var3 = _closure1_slot7;
                            var1 = var3.getValidUsers;
                            var4 = var1.bind(var3)();
                            var3 = var4.length;
                            var1 = 2;
                            if(!(!(var3 < var1))) { _fun0004_ip = 7; continue _fun0004 }
case 13:
                            var1 = {};
                            var _closure5_slot0 = var1;
                            var3 = var4.forEach;
                            var2 = function(arg1) {
                                var7 = arg1;
                                var4 = _closure5_slot0;
                                var3 = var7.id;
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 7;
                                var2 = var2[var1];
                                var1 = undefined;
                                var6 = var5.bind(var1)(var2);
                                var5 = var6.getUserTag;
                                var2 = {};
                                var8 = 'always';
                                var2['identifiable'] = var8;
                                var2 = var5.bind(var6)(var7, var2);
                                var4[var3] = var2;
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
case 7:
                            var1 = {};
                            return var1;
                        }
                    };
                    var2 = var2.bind(var1)();
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['syncMultiAccountUsers'] = var3;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.clearPushNotificationLogs;
                    var2 = var2.bind(var3)();
                    var3 = _closure3_slot0;
                    var2 = var3.handleUserUpdate;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var1['handleLogout'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot2;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var12 = var4;
    var2 = new var12[var2](var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/push_notifications/native/PushNotificationCacheManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
// app/modules/hangouts/native/NativeHangoutsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var1 = metroImportDefault;
        var _closure1_slot1 = var1;
        var _closure1_slot2 = var6;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var1 = 0;
        var4 = var6[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var8 = var4.NativeEventEmitter;
        var4 = var4.NativeModules;
        var _closure1_slot3 = var4;
        var7 = 1;
        var7 = var6[var7];
        var9 = var5.bind(var1)(var7);
        var7 = var9.isIOS;
        var7 = var7.bind(var9)();
        if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var12 = var4.DCDLockscreenWidgetManager;
        var7 = var8.prototype;
        var7 = Object.create(var7, {constructor: {value: var8}});
        var13 = var7;
        var4 = new var13[var8](var12, var11);
        var9 = var4 instanceof Object ? var4 : var7;
        var8 = var9.addListener;
        var7 = 'pushTokenUpdate';
        var4 = function(arg1) {
            var1 = arg1;
            var5 = var1.token;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'HANGOUT_PUSH_TOKEN_UPDATE';
            var2['type'] = var6;
            var2['token'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var4 = var8.bind(var9)(var7, var4);
case 2:
        var4 = 3;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/hangouts/native/NativeHangoutsUtils.tsx';
        var4 = var5.bind(var6)(var4);
        var4 = function preloadAsset(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isIOS;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = _closure1_slot3;
                var5 = var2.DCDLockscreenWidgetManager;
                var4 = var5.downloadAndStoreImage;
                var3 = arg1;
                var2 = arg2;
                var2 = var4.bind(var5)(var3, var2);
case 4:
                return var1;
            }
        };
        var3['preloadAsset'] = var4;
        var4 = function hasActivity() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 1;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var2 = var4.isIOS;
                var4 = var2.bind(var4)();
                var2 = global;
                if(var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var6 = var2.Promise;
                var5 = var6.resolve;
                var4 = {'hasActivity': false, 'hasActiveActivity': false};
                var4 = var5.bind(var6)(var4);
                return var4;
case 6:
                var3 = _closure1_slot3;
                var3 = var3.DCDLockscreenWidgetManager;
                var _closure2_slot0 = var3;
                var3 = var2.Promise;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var7 = function(arg1) {
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var3 = _closure2_slot0;
                    var2 = var3.hasActivity;
                    var1 = function(arg1, arg2, arg3) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var3 = _closure3_slot0;
                            var2 = null;
                            var1 = arg1;
                            if(!(var2 == var1)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                            var2 = {};
                            var1 = arg2;
                            var2['hasActivity'] = var1;
                            var1 = arg3;
                            var2['hasActiveActivity'] = var1;
                            _fun0004_ip = 10; continue _fun0004;
case 8:
                            var2 = {'hasActivity': false, 'hasActiveActivity': false};
case 10:
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var8 = var2;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var3['hasActivity'] = var4;
        var4 = function stopHangoutActivity() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arguments[0];
                var1 = undefined;
                if(!(var4 === var1)) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                var4 = 0;
case 11:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 1;
                var3 = var6[var3];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isIOS;
                var3 = var3.bind(var5)();
                if(!var3) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                var2 = _closure1_slot3;
                var3 = var2.DCDLockscreenWidgetManager;
                var2 = var3.endActivity;
                var2 = var2.bind(var3)(var4);
case 13:
                return var1;
            }
        };
        var3['stopHangoutActivity'] = var4;
        var4 = function startHangoutActivity(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isIOS;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0006_ip = 15; continue _fun0006 }
case 5:
                var2 = _closure1_slot3;
                var4 = var2.DCDLockscreenWidgetManager;
                var3 = var4.startActivity;
                var2 = global;
                var6 = var2.JSON;
                var5 = var6.stringify;
                var2 = arg1;
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
case 15:
                return var1;
            }
        };
        var3['startHangoutActivity'] = var4;
        var2 = function activitiesAllowed() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 1;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var2 = var4.isIOS;
                var4 = var2.bind(var4)();
                var2 = global;
                if(var4) { _fun0007_ip = 16; continue _fun0007 }
case 7:
                var6 = var2.Promise;
                var5 = var6.reject;
                var4 = 'unsupported';
                var4 = var5.bind(var6)(var4);
                return var4;
case 16:
                var3 = _closure1_slot3;
                var3 = var3.DCDLockscreenWidgetManager;
                var _closure2_slot0 = var3;
                var3 = var2.Promise;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var7 = function(arg1, arg2) {
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var2 = arg2;
                    var _closure3_slot1 = var2;
                    var3 = _closure2_slot0;
                    var2 = var3.activitiesAllowed;
                    var1 = function(arg1, arg2) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var3 = arg1;
                            var1 = null;
                            if(!(var1 == var3)) { _fun0008_ip = 17; continue _fun0008 }
case 12:
                            var4 = _closure3_slot0;
                            var2 = undefined;
                            var1 = arg2;
                            var1 = var4.bind(var2)(var1);
                            _fun0008_ip = 7; continue _fun0008;
case 17:
                            var2 = _closure3_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
case 7:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var8 = var2;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var3['activitiesAllowed'] = var2;
        return var1;
    }
})();
// app/modules/hangouts/native/NativeHangoutsUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var3 = native6;
        var6 = native7;
        var _closure1_slot0 = var5;
        var1 = native3;
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
        if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 112:
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
 163:
        var4 = 3;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/hangouts/native/NativeHangoutsUtils.tsx';
        var4 = var5.bind(var6)(var4);
        var4 = function preloadAsset(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isIOS;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0002_ip = 68; continue _fun0002 }
 38:
                var2 = _closure1_slot3;
                var5 = var2.DCDLockscreenWidgetManager;
                var4 = var5.downloadAndStoreImage;
                var3 = arg1;
                var2 = arg2;
                var2 = var4.bind(var5)(var3, var2);
 68:
                return var1;
            }
        };
        var3['preloadAsset'] = var4;
        var4 = function hasActivity() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 1;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var2 = var4.isIOS;
                var4 = var2.bind(var4)();
                var2 = global;
                if(var4) { _fun0003_ip = 75; continue _fun0003 }
 42:
                var6 = var2.Promise;
                var5 = var6.resolve;
                var4 = {'hasActivity': false, 'hasActiveActivity': false};
                var4 = var5.bind(var6)(var4);
                return var4;
 75:
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
 0:
                            var3 = _closure3_slot0;
                            var2 = null;
                            var1 = arg1;
                            if(!(var2 == var1)) { _fun0004_ip = 36; continue _fun0004 }
 16:
                            var2 = {};
                            var1 = arg2;
                            var2['hasActivity'] = var1;
                            var1 = arg3;
                            var2['hasActiveActivity'] = var1;
                            _fun0004_ip = 50; continue _fun0004;
 36:
                            var2 = {'hasActivity': false, 'hasActiveActivity': false};
 50:
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
 0:
                var4 = arguments[0];
                var1 = undefined;
                if(!(var4 === var1)) { _fun0005_ip = 11; continue _fun0005 }
 9:
                var4 = 0;
 11:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 1;
                var3 = var6[var3];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isIOS;
                var3 = var3.bind(var5)();
                if(!var3) { _fun0005_ip = 70; continue _fun0005 }
 47:
                var2 = _closure1_slot3;
                var3 = var2.DCDLockscreenWidgetManager;
                var2 = var3.endActivity;
                var2 = var2.bind(var3)(var4);
 70:
                return var1;
            }
        };
        var3['stopHangoutActivity'] = var4;
        var4 = function startHangoutActivity(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isIOS;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0006_ip = 83; continue _fun0006 }
 38:
                var2 = _closure1_slot3;
                var4 = var2.DCDLockscreenWidgetManager;
                var3 = var4.startActivity;
                var2 = global;
                var6 = var2.JSON;
                var5 = var6.stringify;
                var2 = arg1;
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
 83:
                return var1;
            }
        };
        var3['startHangoutActivity'] = var4;
        var2 = function activitiesAllowed() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 1;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var2 = var4.isIOS;
                var4 = var2.bind(var4)();
                var2 = global;
                if(var4) { _fun0007_ip = 65; continue _fun0007 }
 42:
                var6 = var2.Promise;
                var5 = var6.reject;
                var4 = 'unsupported';
                var4 = var5.bind(var6)(var4);
                return var4;
 65:
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
 0:
                            var3 = arg1;
                            var1 = null;
                            if(!(var1 == var3)) { _fun0008_ip = 28; continue _fun0008 }
 9:
                            var4 = _closure3_slot0;
                            var2 = undefined;
                            var1 = arg2;
                            var1 = var4.bind(var2)(var1);
                            _fun0008_ip = 42; continue _fun0008;
 28:
                            var2 = _closure3_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
 42:
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
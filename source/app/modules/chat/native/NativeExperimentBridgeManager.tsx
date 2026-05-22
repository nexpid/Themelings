// app/modules/chat/native/NativeExperimentBridgeManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function updateIOSExperiments() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot8;
            var5 = var1.NSUserDefaultsBridge;
            var2 = null;
            var1 = var2 == var5;
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.setShouldFixPushNotificationRawPayload;
            var1 = var2 == var4;
case 6:
            if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = var5.setShouldFixPushNotificationRawPayload;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 8;
            var6 = var6[var1];
            var1 = undefined;
            var6 = var7.bind(var1)(var6);
            var1 = var6.isIOSPushNotificationRawPayloadFixExperimentEnabled;
            var1 = var1.bind(var6)();
            var1 = var4.bind(var5)(var1);
case 8:
            var1 = _closure1_slot8;
            var5 = var1.NSUserDefaultsBridge;
            var1 = var2 == var5;
            if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = var5.setShouldEnableYYTextReplacement;
            var1 = var2 == var4;
case 10:
            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4 = var5.setShouldEnableYYTextReplacement;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 9;
            var6 = var6[var1];
            var1 = undefined;
            var7 = var7.bind(var1)(var6);
            var6 = var7.shouldEnableYYTextReplacement;
            var1 = {};
            var8 = 'NativeExperimentBridgeManager';
            var1['location'] = var8;
            var1 = var6.bind(var7)(var1);
            var1 = var4.bind(var5)(var1);
case 12:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 10;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.getConfig;
            var4 = {};
            var7 = 'NativeExperimentBridgeManager';
            var4['location'] = var7;
            var4 = var5.bind(var6)(var4);
            var4 = var4.enabled;
            if(!var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var4 = _closure1_slot8;
            var6 = var4.RNVVideo;
            if(!(var2 != var6)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var5 = var6.setOptimizeConfigureAudio;
            var4 = true;
            var4 = var5.bind(var6)(var4);
case 16:
            var3 = _closure1_slot8;
            var4 = var3.RNVVideo;
            if(!(var2 != var4)) { _fun0002_ip = 14; continue _fun0002 }
case 18:
            var3 = var4.setUseBackgroundProgressQueue;
            var2 = true;
            var2 = var3.bind(var4)(var2);
case 14:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function updateAndroidExperiments() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var13 = {};
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 11;
            var2 = var4[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var2 = var5.getSuperPropertiesBase64;
            var2 = var2.bind(var5)();
            var13['X-Super-Properties'] = var2;
            var5 = _closure1_slot10;
            var2 = var5.getFingerprint;
            var2 = var2.bind(var5)();
            var13['X-Fingerprint'] = var2;
            var5 = _closure1_slot10;
            var2 = var5.getInstallationForTracking;
            var2 = var2.bind(var5)();
            var13['X-Installation-ID'] = var2;
            var2 = _closure1_slot9;
            var2 = var2.locale;
            var13['X-Discord-Locale'] = var2;
            var2 = 12;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.getConfig;
            var2 = {};
            var5 = 'NativeExperimentBridgeManager';
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var12 = var2.enabled;
            var11 = var2.limit;
            var8 = var2.cooldownMs;
            var7 = var2.debounceMs;
            var2 = _closure1_slot8;
            var5 = var2.NativeCacheModule;
            var2 = null;
            if(!(var2 != var5)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var4 = var5.setItem;
            var9 = global;
            var6 = var9.JSON;
            var3 = var6.stringify;
            var2 = {};
            var2['headers'] = var13;
            var14 = _closure1_slot10;
            var13 = var14.getId;
            var13 = var13.bind(var14)();
            var2['userId'] = var13;
            var2['enabled'] = var12;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 13;
            var10 = var13[var10];
            var12 = var12.bind(var1)(var10);
            var10 = var12.getAPIBaseURL;
            var10 = var10.bind(var12)();
            var2['apiBaseUrl'] = var10;
            var9 = var9.HermesInternal;
            var10 = var9.concat;
            var9 = '?limit=';
            var9 = var10.bind(var9)(var11);
            var2['urlQueryParams'] = var9;
            var2['cooldownMs'] = var8;
            var2['debounceMs'] = var7;
            var3 = var3.bind(var6)(var2);
            var2 = 'notificationNetworkRequest';
            var2 = var4.bind(var5)(var2, var3);
case 19:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function NativeExperimentBridgeManager(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot4;
                var2 = _closure2_slot0;
                var5 = undefined;
                var7 = var7.bind(var5)(var4, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var5)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot11;
                var1 = var1.bind(var5)();
                if(var1) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var4, var10);
                _fun0004_ip = 23; continue _fun0004;
case 21:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var5)(var4);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 23:
                var1 = var2.bind(var5)(var4, var1);
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 14;
                var2 = var2[var6];
                var4 = var4.bind(var5)(var2);
                var2 = var4.isIOS;
                var2 = var2.bind(var4)();
                if(var2) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var4 = var4.bind(var5)(var2);
                var2 = var4.isAndroid;
                var2 = var2.bind(var4)();
                if(var2) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var2 = function() {
                    var1 = undefined;
                    return var1;
                };
                _fun0004_ip = 28; continue _fun0004;
case 26:
                var2 = _closure1_slot13;
case 28:
                _fun0004_ip = 29; continue _fun0004;
case 24:
                var2 = _closure1_slot12;
case 29:
                var1['handleUpdate'] = var2;
                var2 = {};
                var3 = var1.handleUpdate;
                var2['POST_CONNECTION_OPEN'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/NativeExperimentBridgeManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
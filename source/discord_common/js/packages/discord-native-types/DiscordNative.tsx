// discord_common/js/packages/discord-native-types/DiscordNative.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var13 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
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
            _closure1_slot5 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var5 = global;
    var7 = var5.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var11 = 0;
    var4 = var8[var11];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var10 = 1;
    var4 = var8[var10];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var9 = 2;
    var4 = var8[var9];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var12 = 3;
    var4 = var8[var12];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var7 = 4;
    var4 = var8[var7];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var6 = var8[var4];
    var6 = var13.bind(var1)(var6);
    var5 = var5.Error;
    var5 = var6.bind(var1)(var5);
    var2 = function(arg1) {
        var3 = function SystemServiceNotAvailableError() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var1 = _closure1_slot1;
                var2 = _closure2_slot0;
                var3 = undefined;
                var1 = var1.bind(var3)(var4, var2);
                var9 = ['System service not available'];
                var1 = _closure1_slot3;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot5;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0002_ip = 7; continue _fun0002;
case 5:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot3;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
case 7:
                var1 = var2.bind(var3)(var4, var1);
                var2 = 'SystemServiceNotAvailableError';
                var1['name'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot4;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot0;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var6 = var2.bind(var1)(var5);
    var5 = {};
    var5['HasRTCConnection'] = var11;
    var2 = 'HasRTCConnection';
    var5[var11] = var2;
    var5['IsSendingVideo'] = var10;
    var2 = 'IsSendingVideo';
    var5[var10] = var2;
    var5['IsSendingStream'] = var9;
    var2 = 'IsSendingStream';
    var5[var9] = var2;
    var5['IsReceivingVideo'] = var12;
    var2 = 'IsReceivingVideo';
    var5[var12] = var2;
    var5['IsReceivingStream'] = var7;
    var2 = 'IsReceivingStream';
    var5[var7] = var2;
    var5['VideoMediaSessionId'] = var4;
    var2 = 'VideoMediaSessionId';
    var5[var4] = var2;
    var7 = 6;
    var5['StreamMediaSessionId'] = var7;
    var2 = 'StreamMediaSessionId';
    var5[var7] = var2;
    var4 = 7;
    var5['IntentionalCrashReason'] = var4;
    var2 = 'IntentionalCrashReason';
    var5[var4] = var2;
    var4 = {};
    var4['RendererProcessDelayed'] = var11;
    var2 = 'RendererProcessDelayed';
    var4[var11] = var2;
    var4['RendererProcess'] = var10;
    var2 = 'RendererProcess';
    var4[var10] = var2;
    var4['MainProcess'] = var9;
    var2 = 'MainProcess';
    var4[var9] = var2;
    var2 = {};
    var9 = 'window';
    var2['WINDOW'] = var9;
    var9 = 'screen';
    var2['SCREEN'] = var9;
    var9 = 'camera';
    var2['CAMERA'] = var9;
    var8 = var8[var7];
    var7 = require;
    var9 = var7.bind(var1)(var8);
    var8 = var9.fileFinishedImporting;
    var7 = '../discord_common/js/packages/discord-native-types/DiscordNative.tsx';
    var7 = var8.bind(var9)(var7);
    var3['SystemServiceNotAvailableError'] = var6;
    var3['StoredCrashInformation'] = var5;
    var3['JSExceptionLocation'] = var4;
    var3['DesktopSources'] = var2;
    return var1;
})();
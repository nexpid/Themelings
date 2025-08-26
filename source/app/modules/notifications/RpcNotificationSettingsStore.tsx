// app/modules/notifications/RpcNotificationSettingsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var12 = true;
    var2['value'] = var12;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = {};
    var _closure1_slot6 = var2;
    var2 = 6;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var4 = var9.createExperiment;
    var2 = {'kind': 'user', 'id': '2025-03_slayer_notif_supression_killswitch', 'label': 'Disable suppressing notifications with slayer game active'};
    var10 = {};
    var11 = false;
    var10['enabled'] = var11;
    var2['defaultConfig'] = var10;
    var11 = {'id': 1, 'label': 'Disable suppressing'};
    var10 = {};
    var10['enabled'] = var12;
    var11['config'] = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var2['treatments'] = var10;
    var2 = var4.bind(var9)(var2);
    var _closure1_slot7 = var2;
    var4 = 7;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function RpcNotificationSettingsStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot8;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot4;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot1;
        var5 = {};
        var6 = 'areSlayerNotificationsSuppressed';
        var5['key'] = var6;
        var1 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var5 = _closure1_slot7;
                var4 = var5.getCurrentConfig;
                var3 = {};
                var1 = 'Store';
                var3['location'] = var1;
                var2 = {};
                var1 = false;
                var2['autoTrackExposure'] = var1;
                var2 = var4.bind(var5)(var3, var2);
                var2 = var2.enabled;
                if(var2) { _fun0003_ip = 102; continue _fun0003 }
 46:
                var7 = _closure1_slot6;
                for(var4 in var7)
 58:
                {
 67:
                    var3 = var4;
                    var2 = _closure1_slot6;
                    var3 = var2[var3];
                    var10 = _closure1_slot5;
                    var2 = var10.getId;
                    var2 = var2.bind(var10)();
                    if(var3 !== var2) { _fun0003_ip = 58; continue _fun0003 }
 96:
                    var2 = true;
                    return var2;
                }
 100:
                return var1;
 102:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'RpcNotificationSettingsStore';
    var9['displayName'] = var4;
    var4 = 8;
    var4 = var7[var4];
    var15 = var8.bind(var1)(var4);
    var4 = {};
    var10 = function handleRpcAppDisconnected(arg1) {
        var2 = _closure1_slot6;
        var1 = arg1;
        var1 = var1.socketId;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var4['RPC_APP_DISCONNECTED'] = var10;
    var5 = function handleSetRpcNotificationSettings(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var4 = _closure1_slot6;
            var3 = var1.socketId;
            var3 = delete var4[var3];
            var3 = var1.suppressNotifications;
            if(!var3) { _fun0004_ip = 51; continue _fun0004 }
 31:
            var3 = _closure1_slot6;
            var2 = var1.socketId;
            var1 = var1.targetUserId;
            var3[var2] = var1;
 51:
            var1 = undefined;
            return var1;
        }
    };
    var4['SET_RPC_NOTIFICATION_SETTINGS'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var16 = var5;
    var14 = var4;
    var4 = new var16[var9](var15, var14, var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/notifications/RpcNotificationSettingsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['Killswitch'] = var2;
    return var1;
})();
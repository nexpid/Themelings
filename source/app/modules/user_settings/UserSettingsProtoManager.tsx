// app/modules/user_settings/UserSettingsProtoManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function handleConnectionOpen() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot3;
            var1 = var4.getFullState;
            var4 = var1.bind(var4)();
            var _closure2_slot0 = var4;
            var1 = _closure1_slot4;
            var1 = var1.PRELOADED_USER_SETTINGS;
            var1 = var4[var1];
            var4 = var1.editInfo;
            var4 = var4.triggeredMigrations;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 6;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var6 = var4.PreloadedUserSettingsActionCreators;
            var5 = var6.markDirtyFromMigration;
            var4 = var1.proto;
            var1 = var1.editInfo;
            var1 = var1.cleanupFuncs;
            var1 = var5.bind(var6)(var4, var1);
case 2:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 7;
            var4 = var7[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.forEach;
            var6 = _closure1_slot0;
            var3 = 6;
            var3 = var7[var3];
            var3 = var6.bind(var1)(var3);
            var3 = var3.UserSettingsActionCreatorsByType;
            var2 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure2_slot0;
                    var1 = global;
                    var5 = var1.Number;
                    var1 = undefined;
                    var2 = arg2;
                    var2 = var5.bind(var1)(var2);
                    var4 = var4[var2];
                    var2 = var4.editInfo;
                    var2 = var2.offlineEditDataVersion;
                    var5 = null;
                    var2 = var5 != var2;
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = var4.editInfo;
                    var4 = var4.protoToSave;
                    var2 = var5 != var4;
case 4:
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = var3.scheduleSaveFromOfflineEdit;
                    var2 = var2.bind(var3)();
case 6:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = function handleUserSettingsProtoEnqueueUpdate(arg1) {
        var1 = arg1;
        var2 = var1.settings;
        var5 = var2.proto;
        var3 = var2.type;
        var7 = var1.delaySeconds;
        var6 = var1.jitter;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var2 = var2.UserSettingsActionCreatorsByType;
        var4 = var2[var3];
        var3 = var4.markDirty;
        var2 = {};
        var2['delaySeconds'] = var7;
        var2['jitter'] = var6;
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function handleUserSettingsProtoLoadIfNecessary(arg1) {
        var1 = arg1;
        var3 = var1.settingsType;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var2 = var2.UserSettingsActionCreatorsByType;
        var3 = var2[var3];
        var2 = var3.loadIfNecessary;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function handleAppStateUpdate(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = var1.state;
            var1 = 'inactive';
            var1 = var1 !== var3;
            if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var2 = 'background';
            var1 = var2 !== var3;
case 8:
            if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var3 = var4.forEach;
            var2 = _closure1_slot0;
            var1 = 6;
            var1 = var6[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.UserSettingsActionCreatorsByType;
            var1 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure1_slot3;
                    var1 = var2.getFullState;
                    var4 = var1.bind(var2)();
                    var1 = global;
                    var5 = var1.Number;
                    var1 = undefined;
                    var2 = arg2;
                    var2 = var5.bind(var1)(var2);
                    var2 = var4[var2];
                    var2 = var2.editInfo;
                    var4 = var2.timeout;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var5 = var3.logger;
                    var4 = var5.log;
                    var2 = 'Triggering persistChanges due to AppStateUpdate';
                    var2 = var4.bind(var5)(var2);
                    var2 = var3.persistChanges;
                    var2 = var2.bind(var3)();
case 12:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
case 10:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.UserSettingsTypes;
    var _closure1_slot4 = var2;
    var2 = {};
    var4 = function init() {
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 2;
        var6 = var5[var3];
        var1 = undefined;
        var8 = var4.bind(var1)(var6);
        var6 = _closure1_slot4;
        var7 = var6.PRELOADED_USER_SETTINGS;
        var6 = 3;
        var6 = var5[var6];
        var6 = var4.bind(var1)(var6);
        var8[var7] = var6;
        var3 = var5[var3];
        var7 = var4.bind(var1)(var3);
        var3 = _closure1_slot4;
        var6 = var3.FRECENCY_AND_FAVORITES_SETTINGS;
        var3 = 4;
        var3 = var5[var3];
        var3 = var4.bind(var1)(var3);
        var7[var6] = var3;
        var3 = 5;
        var6 = var5[var3];
        var9 = var4.bind(var1)(var6);
        var8 = var9.subscribe;
        var7 = _closure1_slot5;
        var6 = 'CONNECTION_OPEN';
        var6 = var8.bind(var9)(var6, var7);
        var6 = var5[var3];
        var9 = var4.bind(var1)(var6);
        var8 = var9.subscribe;
        var7 = _closure1_slot6;
        var6 = 'USER_SETTINGS_PROTO_ENQUEUE_UPDATE';
        var6 = var8.bind(var9)(var6, var7);
        var6 = var5[var3];
        var9 = var4.bind(var1)(var6);
        var8 = var9.subscribe;
        var7 = _closure1_slot7;
        var6 = 'USER_SETTINGS_PROTO_LOAD_IF_NECESSARY';
        var6 = var8.bind(var9)(var6, var7);
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.subscribe;
        var3 = _closure1_slot8;
        var2 = 'APP_STATE_UPDATE';
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var2['init'] = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/UserSettingsProtoManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
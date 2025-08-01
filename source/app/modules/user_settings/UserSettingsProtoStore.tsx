// app/modules/user_settings/UserSettingsProtoStore.tsx
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var9 = function handleConnectionClosedOrResumed() {
        var2 = _closure1_slot15;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var1 = function clearInFlightTimeouts() {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.values;
        var1 = _closure1_slot12;
        var3 = var2.bind(var3)(var1);
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = arg1;
                var1 = var4.editInfo;
                var2 = var1.timeout;
                var1 = null;
                if(!(var1 != var2)) { _fun0002_ip = 150; continue _fun0002 }
 24:
                var2 = global;
                var6 = var2.clearTimeout;
                var3 = var4.editInfo;
                var5 = var3.timeout;
                var3 = undefined;
                var5 = var6.bind(var3)(var5);
                var5 = var4.editInfo;
                var5['timeout'] = var3;
                var5 = var4.editInfo;
                var2 = var2.Number;
                var2 = var2.MAX_SAFE_INTEGER;
                var5['timeoutDelay'] = var2;
                var5 = var4.editInfo;
                var2 = false;
                var5['rateLimited'] = var2;
                var2 = var4.editInfo;
                var4 = var4.proto;
                var4 = var4.versions;
                var5 = var1 == var4;
                if(var5) { _fun0002_ip = 132; continue _fun0002 }
 126:
                var3 = var4.dataVersion;
 132:
                var4 = var1 != var3;
                var1 = 0;
                if(!var4) { _fun0002_ip = 144; continue _fun0002 }
 141:
                var1 = var3;
 144:
                var2['offlineEditDataVersion'] = var1;
 150:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function resetEditInfo_(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var1 = var3.editInfo;
            var2 = var1.timeout;
            var1 = null;
            if(!(var1 != var2)) { _fun0003_ip = 48; continue _fun0003 }
 21:
            var1 = global;
            var4 = var1.clearTimeout;
            var1 = var3.editInfo;
            var2 = var1.timeout;
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
 48:
            var2 = _closure1_slot9;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var3['editInfo'] = var2;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var10 = function handleUserSettingsProtoUpdate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = var1.settings;
            var9 = var2.proto;
            var5 = var2.type;
            var3 = var1.partial;
            var4 = var1.resetEditInfo;
            var1 = var1.local;
            var1 = !var1;
            _closure1_slot13 = var1;
            var1 = _closure1_slot12;
            var1 = var1[var5];
            if(!var4) { _fun0004_ip = 70; continue _fun0004 }
 59:
            var5 = _closure1_slot16;
            var4 = undefined;
            var4 = var5.bind(var4)(var1);
 70:
            if(var3) { _fun0004_ip = 160; continue _fun0004 }
 73:
            var1['proto'] = var9;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 8;
            var3 = var5[var3];
            var6 = undefined;
            var5 = var4.bind(var6)(var3);
            var3 = var1.proto;
            var4 = 'string';
            var3 = typeof var3;
            var4 = var4 !== var3;
            var3 = 'UserSettingsProto cannot be a string';
            var3 = var5.bind(var6)(var4, var3);
            var4 = var1.editInfo;
            var3 = true;
            var4['loaded'] = var3;
            var4 = var1.editInfo;
            var3 = false;
            var4['loading'] = var3;
            _fun0004_ip = 258; continue _fun0004;
 160:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 9;
            var3 = var5[var3];
            var4 = undefined;
            var8 = var6.bind(var4)(var3);
            var7 = var8.mergeTopLevelFields;
            var6 = var1.ProtoClass;
            var3 = var1.proto;
            var3 = var7.bind(var8)(var6, var3, var9);
            var1['proto'] = var3;
            var3 = _closure1_slot1;
            var2 = 8;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var1 = var1.proto;
            var2 = 'string';
            var1 = typeof var1;
            var2 = var2 !== var1;
            var1 = 'UserSettingsProto cannot be a string';
            var1 = var3.bind(var4)(var2, var1);
 258:
            var1 = undefined;
            return var1;
        }
    };
    var1 = function loadFromCache(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var2 = null;
            if(!(var2 != var3)) { _fun0005_ip = 60; continue _fun0005 }
 15:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 11;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.forEach;
            var2 = _closure1_slot12;
            var1 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure2_slot0;
                    var1 = global;
                    var5 = var1.Number;
                    var1 = undefined;
                    var2 = arg2;
                    var2 = var5.bind(var1)(var2);
                    var2 = var4[var2];
                    var4 = null;
                    if(!(var4 != var2)) { _fun0006_ip = 283; continue _fun0006 }
 41:
                    var6 = var4 == var2;
                    var5 = undefined;
                    if(var6) { _fun0006_ip = 56; continue _fun0006 }
 50:
                    var5 = var2.proto;
 56:
                    var6 = var4 != var5;
                    var10 = '';
                    if(!var6) { _fun0006_ip = 70; continue _fun0006 }
 67:
                    var10 = var5;
 70:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var7 = 9;
                    var6 = var6[var7];
                    var9 = var8.bind(var1)(var6);
                    var8 = var9.b64ToProto;
                    var6 = var3.ProtoClass;
                    var6 = var8.bind(var9)(var6, var10);
                    if(!(var4 != var6)) { _fun0006_ip = 283; continue _fun0006 }
 118:
                    var3['proto'] = var6;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 8;
                    var6 = var9[var6];
                    var9 = var8.bind(var1)(var6);
                    var6 = var3.proto;
                    var8 = 'string';
                    var6 = typeof var6;
                    var8 = var8 !== var6;
                    var6 = 'UserSettingsProto cannot be a string';
                    var6 = var9.bind(var1)(var8, var6);
                    var8 = var4 == var2;
                    var6 = undefined;
                    if(var8) { _fun0006_ip = 188; continue _fun0006 }
 182:
                    var6 = var2.protoToSave;
 188:
                    var9 = var4 != var6;
                    var8 = null;
                    if(!var9) { _fun0006_ip = 200; continue _fun0006 }
 197:
                    var8 = var6;
 200:
                    if(!(var4 != var8)) { _fun0006_ip = 283; continue _fun0006 }
 204:
                    var6 = var2.offlineEditDataVersion;
                    if(!(var4 != var6)) { _fun0006_ip = 283; continue _fun0006 }
 214:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.b64ToProto;
                    var5 = var3.ProtoClass;
                    var5 = var6.bind(var7)(var5, var8);
                    if(!(var4 != var5)) { _fun0006_ip = 283; continue _fun0006 }
 253:
                    var4 = var3.editInfo;
                    var4['protoToSave'] = var5;
                    var3 = var3.editInfo;
                    var2 = var2.offlineEditDataVersion;
                    var3['offlineEditDataVersion'] = var2;
 283:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
 60:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var2 = {};
    var13 = true;
    var2['value'] = var13;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var11 = var2.UserSettingsTypes;
    var _closure1_slot8 = var11;
    var8 = var2.createEmptyEditInfo;
    var _closure1_slot9 = var8;
    var14 = {};
    var2 = 6;
    var12 = var6[var2];
    var12 = var5.bind(var1)(var12);
    var12 = var12.PreloadedUserSettings;
    var14['ProtoClass'] = var12;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var12 = var2.PreloadedUserSettings;
    var2 = var12.create;
    var2 = var2.bind(var12)();
    var14['proto'] = var2;
    var2 = false;
    var14['lazyLoaded'] = var2;
    var12 = var8.bind(var1)();
    var14['editInfo'] = var12;
    var _closure1_slot10 = var14;
    var12 = {};
    var15 = 7;
    var16 = var6[var15];
    var16 = var5.bind(var1)(var16);
    var16 = var16.FrecencyUserSettings;
    var12['ProtoClass'] = var16;
    var15 = var6[var15];
    var15 = var5.bind(var1)(var15);
    var16 = var15.FrecencyUserSettings;
    var15 = var16.create;
    var15 = var15.bind(var16)();
    var12['proto'] = var15;
    var12['lazyLoaded'] = var13;
    var8 = var8.bind(var1)();
    var12['editInfo'] = var8;
    var _closure1_slot11 = var12;
    var8 = {};
    var13 = var11.PRELOADED_USER_SETTINGS;
    var8[var13] = var14;
    var11 = var11.FRECENCY_AND_FAVORITES_SETTINGS;
    var8[var11] = var12;
    var _closure1_slot12 = var8;
    var _closure1_slot13 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function UserSettingsProtoStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 69; continue _fun0007 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 105; continue _fun0007;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
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
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var3 = _closure1_slot17;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(13);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'computeState';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 11;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.mapValues;
            var2 = _closure1_slot12;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = arg1;
                    var1 = {};
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var6 = 9;
                    var4 = var4[var6];
                    var5 = undefined;
                    var9 = var7.bind(var5)(var4);
                    var8 = var9.protoToB64;
                    var7 = var2.ProtoClass;
                    var4 = var2.proto;
                    var4 = var8.bind(var9)(var7, var4);
                    var1['proto'] = var4;
                    var4 = var2.editInfo;
                    var4 = var4.offlineEditDataVersion;
                    var8 = null;
                    var4 = var8 != var4;
                    if(!var4) { _fun0008_ip = 96; continue _fun0008 }
 80:
                    var7 = var2.editInfo;
                    var7 = var7.protoToSave;
                    var4 = var8 != var7;
 96:
                    if(!var4) { _fun0008_ip = 170; continue _fun0008 }
 99:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var6 = var4.bind(var5)(var3);
                    var5 = var6.protoToB64;
                    var4 = var2.ProtoClass;
                    var3 = var2.editInfo;
                    var3 = var3.protoToSave;
                    var3 = var5.bind(var6)(var4, var3);
                    var1['protoToSave'] = var3;
                    var2 = var2.editInfo;
                    var2 = var2.offlineEditDataVersion;
                    var1['offlineEditDataVersion'] = var2;
 170:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'hasLoaded';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot12;
            var1 = arg1;
            var1 = var2[var1];
            var1 = var1.editInfo;
            var1 = var1.loaded;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'settings';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            var1 = var1.proto;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'frecencyWithoutFetchingLatest';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot11;
            var1 = var1.proto;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'wasMostRecentUpdateFromServer';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getFullState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getGuildFolders';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var1 = _closure1_slot10;
                var1 = var1.proto;
                var2 = var1.guildFolders;
                var1 = null;
                var3 = var1 == var2;
                var4 = undefined;
                if(var3) { _fun0009_ip = 36; continue _fun0009 }
 30:
                var4 = var2.folders;
 36:
                var2 = var1 == var4;
                var1 = null;
                if(var2) { _fun0009_ip = 62; continue _fun0009 }
 45:
                var3 = var4.map;
                var2 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var3 = arg1;
                        var1 = var3.id;
                        var2 = null;
                        var4 = var2 == var1;
                        var5 = undefined;
                        var8 = undefined;
                        if(var4) { _fun0010_ip = 26; continue _fun0010 }
 21:
                        var8 = var1.value;
 26:
                        var1 = var3.color;
                        var6 = var2 == var1;
                        var4 = undefined;
                        if(var6) { _fun0010_ip = 45; continue _fun0010 }
 40:
                        var4 = var1.value;
 45:
                        var1 = {};
                        var6 = var3.guildIds;
                        var1['guildIds'] = var6;
                        var7 = var2 == var8;
                        var6 = undefined;
                        if(var7) { _fun0010_ip = 80; continue _fun0010 }
 67:
                        var7 = global;
                        var7 = var7.Number;
                        var6 = var7.bind(var5)(var8);
 80:
                        var1['folderId'] = var6;
                        var6 = var3.name;
                        var7 = var2 == var6;
                        var3 = undefined;
                        if(var7) { _fun0010_ip = 104; continue _fun0010 }
 99:
                        var3 = var6.value;
 104:
                        var1['folderName'] = var3;
                        var3 = var2 == var4;
                        var2 = undefined;
                        if(var3) { _fun0010_ip = 131; continue _fun0010 }
 118:
                        var3 = global;
                        var3 = var3.Number;
                        var2 = var3.bind(var5)(var4);
 131:
                        var1['folderColor'] = var2;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
 62:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getGuildRecentsDismissedAt';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0011_ip = 121; continue _fun0011 }
 9:
                var2 = this;
                var2 = var2.settings;
                var2 = var2.guilds;
                var6 = var1 == var2;
                var5 = undefined;
                var4 = undefined;
                if(var6) { _fun0011_ip = 60; continue _fun0011 }
 35:
                var2 = var2.guilds;
                var2 = var2[var3];
                var3 = var1 == var2;
                var4 = undefined;
                if(var3) { _fun0011_ip = 60; continue _fun0011 }
 54:
                var4 = var2.guildRecentsDismissedAt;
 60:
                var2 = var1 == var4;
                var1 = 0;
                if(var2) { _fun0011_ip = 119; continue _fun0011 }
 69:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 12;
                var2 = var6[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.Timestamp;
                var2 = var3.toDate;
                var3 = var2.bind(var3)(var4);
                var2 = var3.getTime;
                var1 = var2.bind(var3)();
 119:
                return var1;
 121:
                var1 = 0;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getDismissedGuildContent';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var6 = arg1;
                var4 = null;
                var2 = var4 == var6;
                var1 = null;
                if(var2) { _fun0012_ip = 75; continue _fun0012 }
 14:
                var2 = this;
                var2 = var2.settings;
                var3 = var2.guilds;
                var7 = var4 == var3;
                var2 = undefined;
                if(var7) { _fun0012_ip = 72; continue _fun0012 }
 38:
                var3 = var3.guilds;
                var7 = var4 == var3;
                var2 = undefined;
                if(var7) { _fun0012_ip = 72; continue _fun0012 }
 53:
                var3 = var3[var6];
                var4 = var4 == var3;
                var2 = undefined;
                if(var4) { _fun0012_ip = 72; continue _fun0012 }
 66:
                var2 = var3.dismissedGuildContent;
 72:
                var1 = var2;
 75:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getGuildDismissedContentState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var1 = this;
                var1 = var1.settings;
                var2 = var1.guilds;
                var3 = null;
                var5 = var3 == var2;
                var1 = undefined;
                if(var5) { _fun0013_ip = 63; continue _fun0013 }
 26:
                var5 = var2.guilds;
                var2 = var3 == var5;
                var1 = undefined;
                if(var2) { _fun0013_ip = 63; continue _fun0013 }
 41:
                var2 = arg1;
                var2 = var5[var2];
                var3 = var3 == var2;
                var1 = undefined;
                if(var3) { _fun0013_ip = 63; continue _fun0013 }
 57:
                var1 = var2.guildDismissibleContentStates;
 63:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getGuildsProto';
        var5['key'] = var7;
        var6 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var1 = this;
                var1 = var1.settings;
                var3 = var1.guilds;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0014_ip = 32; continue _fun0014 }
 26:
                var2 = var3.guilds;
 32:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0014_ip = 44; continue _fun0014 }
 41:
                var1 = var2;
 44:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[12] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'UserSettingsProtoStore';
    var8['displayName'] = var2;
    var2 = 'UserSettingsProtoStore-Cache';
    var8['persistKey'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var19 = var7.bind(var1)(var2);
    var2 = {};
    var11 = function handleCacheLoaded(arg1) {
        var1 = arg1;
        var3 = var1.userSettings;
        var2 = _closure1_slot17;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['CACHE_LOADED'] = var11;
    var2['USER_SETTINGS_PROTO_UPDATE'] = var10;
    var2['USER_SETTINGS_PROTO_ENQUEUE_UPDATE'] = var10;
    var10 = function handleUserSettingsProtoSaveStateUpdate(arg1) {
        var1 = arg1;
        var1 = var1.settings;
        var2 = var1.type;
        var3 = var1.changes;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var4 = 8;
        var4 = var6[var4];
        var7 = undefined;
        var6 = var5.bind(var7)(var4);
        var5 = true;
        var4 = 'this cannot run in the overlay';
        var4 = var6.bind(var7)(var5, var4);
        var1 = _closure1_slot12;
        var2 = var1[var2];
        var1 = {};
        var8 = var2.editInfo;
        var9 = var1;
        var4 = copyDataProperties(var9, var8);
        var9 = var1;
        var8 = var3;
        var3 = copyDataProperties(var9, var8);
        var2['editInfo'] = var1;
        var1 = false;
        return var1;
    };
    var2['USER_SETTINGS_PROTO_UPDATE_EDIT_INFO'] = var10;
    var10 = function handleConnectionOpen(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var3 = var1.userSettingsProto;
            var1 = null;
            if(!(var1 != var3)) { _fun0015_ip = 79; continue _fun0015 }
 15:
            var1 = _closure1_slot10;
            var1['proto'] = var3;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var1 = var1.proto;
            var2 = 'string';
            var1 = typeof var1;
            var2 = var2 !== var1;
            var1 = 'UserSettingsProto cannot be a string';
            var1 = var3.bind(var4)(var2, var1);
 79:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 9;
            var3 = var8[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var5 = var6.runMigrations;
            var3 = _closure1_slot10;
            var4 = var3.proto;
            var7 = _closure1_slot1;
            var3 = 10;
            var3 = var8[var3];
            var7 = var7.bind(var1)(var3);
            var3 = _closure1_slot8;
            var3 = var3.PRELOADED_USER_SETTINGS;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var4, var3);
            var4 = var3.proto;
            var6 = var3.isDirty;
            var5 = var3.cleanupFuncs;
            if(!var6) { _fun0015_ip = 190; continue _fun0015 }
 177:
            var7 = _closure1_slot16;
            var3 = _closure1_slot10;
            var3 = var7.bind(var1)(var3);
 190:
            var3 = _closure1_slot10;
            var3['proto'] = var4;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 8;
            var4 = var8[var4];
            var8 = var7.bind(var1)(var4);
            var4 = var3.proto;
            var7 = 'string';
            var4 = typeof var4;
            var7 = var7 !== var4;
            var4 = 'UserSettingsProto cannot be a string';
            var4 = var8.bind(var1)(var7, var4);
            var4 = var3.editInfo;
            var4['triggeredMigrations'] = var6;
            var4 = var3.editInfo;
            var4['cleanupFuncs'] = var5;
            var4 = var3.editInfo;
            var3 = true;
            var4['loaded'] = var3;
            var3 = global;
            var5 = var3.Object;
            var4 = var5.values;
            var3 = _closure1_slot12;
            var5 = var4.bind(var5)(var3);
            var4 = var5.forEach;
            var3 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.lazyLoaded;
                    if(!var2) { _fun0016_ip = 38; continue _fun0016 }
 12:
                    var3 = var1.editInfo;
                    var2 = false;
                    var3['loaded'] = var2;
                    var1 = var1.editInfo;
                    var1['loading'] = var2;
 38:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var2 = _closure1_slot15;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var10;
    var2['CONNECTION_CLOSED'] = var9;
    var2['CONNECTION_RESUMED'] = var9;
    var9 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var7 = var1.userSettingsProto;
        var2 = _closure1_slot10;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 9;
        var4 = var5[var1];
        var1 = undefined;
        var6 = var6.bind(var1)(var4);
        var4 = var6.b64ToPreloadedUserSettingsProto;
        var4 = var4.bind(var6)(var7);
        var2['proto'] = var4;
        var4 = _closure1_slot1;
        var3 = 8;
        var3 = var5[var3];
        var4 = var4.bind(var1)(var3);
        var2 = var2.proto;
        var3 = 'string';
        var2 = typeof var2;
        var3 = var3 !== var2;
        var2 = 'UserSettingsProto cannot be a string';
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var9;
    var4 = function handleLogout() {
        var3 = _closure1_slot15;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var3 = global;
        var4 = var3.Object;
        var3 = var4.values;
        var2 = _closure1_slot12;
        var4 = var3.bind(var4)(var2);
        var3 = var4.forEach;
        var2 = function(arg1) {
            var3 = arg1;
            var2 = var3.ProtoClass;
            var1 = var2.create;
            var1 = var1.bind(var2)();
            var3['proto'] = var1;
            var2 = _closure1_slot9;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var3['editInfo'] = var2;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var20 = var4;
    var18 = var2;
    var2 = new var20[var8](var19, var18, var17);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/UserSettingsProtoStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
// app/modules/applications/ApplicationFrecencyStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function trackApplicationUsage(arg1) {
        var4 = arg1;
        var2 = _closure1_slot11;
        var5 = var2.pendingUsages;
        var3 = var5.push;
        var2 = {};
        var2['key'] = var4;
        var6 = global;
        var7 = var6.Date;
        var6 = var7.now;
        var6 = var6.bind(var7)();
        var2['timestamp'] = var6;
        var2 = var3.bind(var5)(var2);
        var3 = _closure1_slot12;
        var2 = var3.track;
        var2 = var2.bind(var3)(var4);
        var2 = _closure1_slot12;
        var1 = var2.compute;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function handleUserSettingsProtoStoreChange() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot8;
            var1 = var1.frecencyWithoutFetchingLatest;
            var4 = var1.applicationFrecency;
            var3 = null;
            var5 = var3 == var4;
            var1 = undefined;
            var8 = undefined;
            if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var8 = var4.applications;
case 6:
            if(!(var3 == var8)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var8 = {};
case 8:
            var5 = _closure1_slot12;
            var4 = var5.overwriteHistory;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 11;
            var3 = var7[var3];
            var7 = var6.bind(var1)(var3);
            var6 = var7.mapValues;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var6 = var1;
                var5 = var2;
                var3 = copyDataProperties(var6, var5);
                var4 = var2.recentUses;
                var3 = var4.map;
                var2 = global;
                var2 = var2.Number;
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = 0;
                    var1 = var2 > var1;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = 'recentUses';
                var1[var2] = var3;
                return var1;
            };
            var3 = var6.bind(var7)(var8, var3);
            var2 = _closure1_slot11;
            var2 = var2.pendingUsages;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.FREQUENCY_ITEM_LIMIT;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.UserSettingsTypes;
    var _closure1_slot9 = var2;
    var9 = 9;
    var2 = var6[var9];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ApplicationCommandType;
    var10 = var2.CHAT;
    var2 = new Array(2);
    var2[0] = var10;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.ApplicationCommandType;
    var9 = var9.PRIMARY_ENTRY_POINT;
    var2[1] = var9;
    var _closure1_slot10 = var2;
    var2 = {};
    var9 = new Array(0);
    var2['pendingUsages'] = var9;
    var _closure1_slot11 = var2;
    var2 = 10;
    var2 = var6[var2];
    var9 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function computeBonus() {
        var1 = 100;
        return var1;
    };
    var2['computeBonus'] = var10;
    var10 = function lookupKey(arg1) {
        var1 = arg1;
        return var1;
    };
    var2['lookupKey'] = var10;
    var10 = function afterCompute() {
        var1 = undefined;
        return var1;
    };
    var2['afterCompute'] = var10;
    var2['numFrequentlyItems'] = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var14 = var8;
    var13 = var2;
    var2 = new var14[var9](var13, var12);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot12 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function ApplicationFrecencyStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 12; continue _fun0003;
case 10:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 12:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = arg1;
                var4 = this;
                var1 = null;
                if(!(var1 != var2)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                _closure1_slot11 = var2;
case 13:
                var3 = var4.waitFor;
                var2 = _closure1_slot7;
                var2 = var3.bind(var4)(var2);
                var3 = var4.syncWith;
                var5 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot15;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasPendingUsage';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            var1 = var1.pendingUsages;
            var2 = var1.length;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getApplicationFrecencyWithoutLoadingLatest';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getScoreWithoutLoadingLatest';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot12;
                var2 = var3.getScore;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0005_ip = 15; continue _fun0005 }
case 7:
                var1 = var2;
case 15:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getTopApplicationsWithoutLoadingLatest';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot12;
            var1 = var1.frequently;
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ApplicationFrecencyStore';
    var8['displayName'] = var2;
    var2 = 'ApplicationFrecency';
    var8['persistKey'] = var2;
    var2 = 13;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleApplicationCommandUsed(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var3 = var1.command;
            var5 = _closure1_slot10;
            var2 = var5.includes;
            var1 = var3.type;
            var1 = var2.bind(var5)(var1);
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0006_ip = 16; continue _fun0006 }
case 17:
            var6 = _closure1_slot7;
            var5 = var6.getLaunchState;
            var2 = var3.applicationId;
            var5 = var5.bind(var6)(var2);
            var2 = null;
            var2 = var2 == var5;
            if(var2) { _fun0006_ip = 18; continue _fun0006 }
case 10:
            var5 = var5.isLaunching;
            var2 = !var5;
case 18:
            if(!var2) { _fun0006_ip = 19; continue _fun0006 }
case 20:
            var5 = _closure1_slot14;
            var4 = var3.applicationId;
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var2 = undefined;
case 19:
            var1 = var2;
case 16:
            return var1;
        }
    };
    var2['APPLICATION_COMMAND_USED'] = var9;
    var9 = function handleEmbeddedActivityOpen(arg1) {
        var1 = arg1;
        var3 = var1.applicationId;
        var2 = _closure1_slot14;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['EMBEDDED_ACTIVITY_OPEN'] = var9;
    var4 = function handleUserSettingsProtoUpdate(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.settings;
            var4 = var2.type;
            var2 = var1.wasSaved;
            var3 = _closure1_slot9;
            var3 = var3.FRECENCY_AND_FAVORITES_SETTINGS;
            if(!(var4 === var3)) { _fun0007_ip = 21; continue _fun0007 }
case 22:
            if(!var2) { _fun0007_ip = 21; continue _fun0007 }
case 17:
            var2 = _closure1_slot11;
            var1 = new Array(0);
            var2['pendingUsages'] = var1;
            var1 = undefined;
            return var1;
case 21:
            var1 = false;
            return var1;
        }
    };
    var2['USER_SETTINGS_PROTO_UPDATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/ApplicationFrecencyStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
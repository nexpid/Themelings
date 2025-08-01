// app/modules/stickers/StickersPersistedStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
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
    var1 = function handleUserSettingsProtoStoreChange() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = _closure1_slot7;
            var1 = var1.frecencyWithoutFetchingLatest;
            var4 = var1.stickerFrecency;
            var3 = null;
            var5 = var3 == var4;
            var1 = undefined;
            var8 = undefined;
            if(var5) { _fun0002_ip = 38; continue _fun0002 }
 32:
            var8 = var4.stickers;
 38:
            if(!(var3 != var8)) { _fun0002_ip = 109; continue _fun0002 }
 42:
            var5 = _closure1_slot11;
            var4 = var5.overwriteHistory;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 10;
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
            var2 = _closure1_slot10;
            var2 = var2.pendingUsages;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
 109:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.UserSettingsTypes;
    var _closure1_slot9 = var2;
    var2 = {};
    var4 = new Array(0);
    var2['pendingUsages'] = var4;
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var2 = var2.Millis;
    var2 = var2.DAY;
    var4 = 9;
    var4 = var7[var4];
    var10 = var8.bind(var1)(var4);
    var4 = {};
    var9 = function computeBonus() {
        var1 = 100;
        return var1;
    };
    var4['computeBonus'] = var9;
    var9 = function computeWeight(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var1 = 3;
            var2 = var3 <= var1;
            var1 = 100;
            if(var2) { _fun0003_ip = 71; continue _fun0003 }
 16:
            var2 = 15;
            var2 = var3 <= var2;
            var1 = 70;
            if(var2) { _fun0003_ip = 71; continue _fun0003 }
 29:
            var4 = 30;
            var2 = var3 <= var4;
            var1 = 50;
            if(var2) { _fun0003_ip = 71; continue _fun0003 }
 42:
            var2 = 45;
            var2 = var3 <= var2;
            var1 = var4;
            if(var2) { _fun0003_ip = 71; continue _fun0003 }
 55:
            var2 = 80;
            var2 = var3 <= var2;
            var1 = 1;
            if(!var2) { _fun0003_ip = 71; continue _fun0003 }
 68:
            var1 = 10;
 71:
            return var1;
        }
    };
    var4['computeWeight'] = var9;
    var9 = function lookupKey(arg1) {
        var3 = _closure1_slot8;
        var2 = var3.getStickerById;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['lookupKey'] = var9;
    var9 = function afterCompute() {
        var1 = undefined;
        return var1;
    };
    var4['afterCompute'] = var9;
    var9 = 20;
    var4['numFrequentlyItems'] = var9;
    var9 = var10.prototype;
    var9 = Object.create(var9, {constructor: {value: var10}});
    var14 = var9;
    var13 = var4;
    var4 = new var14[var10](var13, var12);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot11 = var4;
    var4 = function recomputeStickerFrecency() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = _closure1_slot8;
            var2 = var2.isLoaded;
            if(!var2) { _fun0004_ip = 30; continue _fun0004 }
 16:
            var2 = _closure1_slot11;
            var1 = var2.compute;
            var1 = var1.bind(var2)();
 30:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var4 = function handleStickersStoreUpdate() {
        var2 = _closure1_slot12;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function StickersPersistedStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 69; continue _fun0005 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 105; continue _fun0005;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = arg1;
                var4 = this;
                var5 = var4.waitFor;
                var3 = _closure1_slot8;
                var3 = var5.bind(var4)(var3);
                var3 = null;
                if(!(var3 != var2)) { _fun0006_ip = 34; continue _fun0006 }
 30:
                _closure1_slot10 = var2;
 34:
                var5 = var4.syncWith;
                var2 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = _closure1_slot13;
                var2 = var5.bind(var4)(var3, var2);
                var3 = var4.syncWith;
                var5 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot15;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasPendingUsage';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            var1 = var1.pendingUsages;
            var2 = var1.length;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'stickerFrecencyWithoutFetchingLatest';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'StickersPersistedStore';
    var9['displayName'] = var4;
    var4 = 'StickersPersistedStoreV2';
    var9['persistKey'] = var4;
    var4 = 12;
    var4 = var7[var4];
    var13 = var8.bind(var1)(var4);
    var4 = {};
    var10 = function STICKER_TRACK_USAGE(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var3 = var1.stickerIds;
            var1 = null;
            if(!(var1 != var3)) { _fun0007_ip = 32; continue _fun0007 }
 15:
            var2 = var3.forEach;
            var1 = function(arg1) {
                var4 = arg1;
                var3 = _closure1_slot11;
                var2 = var3.track;
                var2 = var2.bind(var3)(var4);
                var1 = _closure1_slot10;
                var3 = var1.pendingUsages;
                var2 = var3.push;
                var1 = {};
                var1['key'] = var4;
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var4 = var4.bind(var5)();
                var1['timestamp'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
 32:
            var2 = _closure1_slot12;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var4['STICKER_TRACK_USAGE'] = var10;
    var5 = function handleUserSettingsProtoUpdate(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var2 = var1.settings;
            var4 = var2.type;
            var2 = var1.wasSaved;
            var3 = _closure1_slot9;
            var3 = var3.FRECENCY_AND_FAVORITES_SETTINGS;
            if(!(var4 === var3)) { _fun0008_ip = 58; continue _fun0008 }
 37:
            if(!var2) { _fun0008_ip = 58; continue _fun0008 }
 40:
            var2 = _closure1_slot10;
            var1 = new Array(0);
            var2['pendingUsages'] = var1;
            var1 = undefined;
            return var1;
 58:
            var1 = false;
            return var1;
        }
    };
    var4['USER_SETTINGS_PROTO_UPDATE'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var14 = var5;
    var12 = var4;
    var4 = new var14[var9](var13, var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stickers/StickersPersistedStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['STICKER_PACK_NEW_TIMESTAMP_THRESHOLD'] = var2;
    return var1;
})();
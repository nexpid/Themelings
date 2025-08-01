// app/stores/FrecencyStore.tsx
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
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var10 = function handleChannelSelect(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var6 = var1.guildId;
            var8 = var1.channelId;
            var4 = _closure1_slot15;
            var2 = false;
            if(!(var8 !== var4)) { _fun0002_ip = 137; continue _fun0002 }
 26:
            var4 = null;
            var7 = var4 != var8;
            var5 = null;
            if(!var7) { _fun0002_ip = 40; continue _fun0002 }
 37:
            var5 = var8;
 40:
            _closure1_slot15 = var5;
            var4 = var4 != var8;
            if(!var4) { _fun0002_ip = 65; continue _fun0002 }
 51:
            var7 = _closure1_slot12;
            var5 = var7.test;
            var4 = var5.bind(var7)(var8);
 65:
            var1 = false;
            if(!var4) { _fun0002_ip = 134; continue _fun0002 }
 70:
            var5 = _closure1_slot14;
            var4 = var5.track;
            var4 = var4.bind(var5)(var8);
            var4 = _closure1_slot17;
            var7 = var4.pendingUsages;
            var5 = var7.push;
            var4 = {};
            var4['key'] = var8;
            var8 = global;
            var9 = var8.Date;
            var8 = var9.now;
            var8 = var8.bind(var9)();
            var4['timestamp'] = var8;
            var4 = var5.bind(var7)(var4);
            var1 = true;
 134:
            var2 = var1;
 137:
            var4 = _closure1_slot16;
            var1 = var2;
            if(!(var6 !== var4)) { _fun0002_ip = 257; continue _fun0002 }
 148:
            var4 = null;
            var7 = var4 != var6;
            var5 = null;
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 159:
            var5 = var6;
 162:
            _closure1_slot16 = var5;
            var4 = var4 != var6;
            if(!var4) { _fun0002_ip = 187; continue _fun0002 }
 173:
            var7 = _closure1_slot12;
            var5 = var7.test;
            var4 = var5.bind(var7)(var6);
 187:
            if(!var4) { _fun0002_ip = 254; continue _fun0002 }
 190:
            var5 = _closure1_slot14;
            var4 = var5.track;
            var4 = var4.bind(var5)(var6);
            var3 = _closure1_slot17;
            var5 = var3.pendingUsages;
            var4 = var5.push;
            var3 = {};
            var3['key'] = var6;
            var6 = global;
            var7 = var6.Date;
            var6 = var7.now;
            var6 = var6.bind(var7)();
            var3['timestamp'] = var6;
            var3 = var4.bind(var5)(var3);
            var2 = true;
 254:
            var1 = var2;
 257:
            return var1;
        }
    };
    var1 = function initFrecency() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = _closure1_slot7;
            var1 = var1.frecencyWithoutFetchingLatest;
            var4 = var1.guildAndChannelFrecency;
            var3 = null;
            var5 = var3 == var4;
            var1 = undefined;
            var8 = undefined;
            if(var5) { _fun0003_ip = 38; continue _fun0003 }
 32:
            var8 = var4.guildAndChannels;
 38:
            if(!(var3 != var8)) { _fun0003_ip = 109; continue _fun0003 }
 42:
            var5 = _closure1_slot14;
            var4 = var5.overwriteHistory;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 13;
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
            var2 = _closure1_slot17;
            var2 = var2.pendingUsages;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
 109:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var9 = 10;
    var2 = var7[var9];
    var2 = var6.bind(var1)(var2);
    var2 = var2.ID_REGEX;
    var _closure1_slot12 = var2;
    var2 = 11;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.UserSettingsTypes;
    var _closure1_slot13 = var2;
    var2 = 12;
    var2 = var7[var2];
    var11 = var8.bind(var1)(var2);
    var4 = {};
    var2 = function computeBonus() {
        var1 = 100;
        return var1;
    };
    var4['computeBonus'] = var2;
    var2 = function computeWeight(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = 100;
            var2 = 0;
            if(!(var2 !== var4)) { _fun0004_ip = 88; continue _fun0004 }
 12:
            var3 = 1;
            if(!(var4 >= var3)) { _fun0004_ip = 32; continue _fun0004 }
 19:
            var2 = 2;
            var2 = var4 < var2;
            var1 = 70;
            if(var2) { _fun0004_ip = 88; continue _fun0004 }
 32:
            var2 = 2;
            if(!(var4 >= var2)) { _fun0004_ip = 52; continue _fun0004 }
 39:
            var2 = 4;
            var2 = var4 < var2;
            var1 = 50;
            if(var2) { _fun0004_ip = 88; continue _fun0004 }
 52:
            var2 = 4;
            if(!(var4 >= var2)) { _fun0004_ip = 72; continue _fun0004 }
 59:
            var2 = 7;
            var2 = var4 < var2;
            var1 = 30;
            if(var2) { _fun0004_ip = 88; continue _fun0004 }
 72:
            var2 = 7;
            var2 = var4 >= var2;
            var1 = var3;
            if(!var2) { _fun0004_ip = 88; continue _fun0004 }
 85:
            var1 = 10;
 88:
            return var1;
        }
    };
    var4['computeWeight'] = var2;
    var2 = function lookupKey(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot9;
            var1 = var3.getGuild;
            var1 = var1.bind(var3)(var5);
            var3 = null;
            if(!(var3 == var1)) { _fun0005_ip = 40; continue _fun0005 }
 26:
            var6 = _closure1_slot8;
            var4 = var6.getChannel;
            var1 = var4.bind(var6)(var5);
 40:
            if(!(var3 == var1)) { _fun0005_ip = 69; continue _fun0005 }
 44:
            var4 = _closure1_slot8;
            var3 = var4.getChannel;
            var2 = var4.getDMFromUserId;
            var2 = var2.bind(var4)(var5);
            var1 = var3.bind(var4)(var2);
 69:
            return var1;
        }
    };
    var4['lookupKey'] = var2;
    var2 = function afterCompute() {
        var1 = undefined;
        return var1;
    };
    var4['afterCompute'] = var2;
    var2 = 100;
    var4['numFrequentlyItems'] = var2;
    var4['maxSamples'] = var9;
    var9 = var11.prototype;
    var9 = Object.create(var9, {constructor: {value: var11}});
    var16 = var9;
    var15 = var4;
    var4 = new var16[var11](var15, var14);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot14 = var4;
    var4 = null;
    var _closure1_slot15 = var4;
    var _closure1_slot16 = var4;
    var4 = {};
    var9 = new Array(0);
    var4['pendingUsages'] = var9;
    var _closure1_slot17 = var4;
    var4 = 14;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function FrecencyStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 69; continue _fun0006 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 105; continue _fun0006;
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = arg1;
                var4 = this;
                var6 = var4.waitFor;
                var5 = _closure1_slot11;
                var3 = _closure1_slot10;
                var3 = var6.bind(var4)(var5, var3);
                var3 = null;
                if(!(var3 != var2)) { _fun0007_ip = 68; continue _fun0007 }
 35:
                var6 = var2.pendingUsages;
                var5 = var6.filter;
                var3 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var2 = arg1;
                        var1 = null;
                        var1 = var1 != var2;
                        if(!var1) { _fun0008_ip = 34; continue _fun0008 }
 12:
                        var4 = _closure1_slot12;
                        var3 = var4.test;
                        var2 = var2.key;
                        var1 = var3.bind(var4)(var2);
 34:
                        return var1;
                    }
                };
                var3 = var5.bind(var6)(var3);
                var2['pendingUsages'] = var3;
                _closure1_slot17 = var2;
 68:
                var3 = var4.syncWith;
                var5 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot19;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasPendingUsage';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot17;
            var1 = var1.pendingUsages;
            var2 = var1.length;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'frecencyWithoutFetchingLatest';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getFrequentlyWithoutFetchingLatest';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            var1 = var1.frequently;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getScoreWithoutFetchingLatest';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = _closure1_slot14;
                var2 = var3.getFrecency;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0009_ip = 37; continue _fun0009 }
 34:
                var1 = var2;
 37:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getScoreForDMWithoutFetchingLatest';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var4 = this;
                var3 = _closure1_slot8;
                var2 = var3.getDMFromUserId;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 != var3;
                var1 = 0;
                if(!var2) { _fun0010_ip = 46; continue _fun0010 }
 35:
                var2 = var4.getScoreWithoutFetchingLatest;
                var1 = var2.bind(var4)(var3);
 46:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getMaxScore';
        var5['key'] = var7;
        var7 = function value() {
            var1 = 1000;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getBonusScore';
        var5['key'] = var7;
        var6 = function value() {
            var1 = 100;
            return var1;
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'FrecencyStore';
    var9['displayName'] = var4;
    var9['persistKey'] = var4;
    var4 = 15;
    var4 = var7[var4];
    var15 = var8.bind(var1)(var4);
    var4 = {};
    var4['CHANNEL_SELECT'] = var10;
    var4['VOICE_CHANNEL_SELECT'] = var10;
    var5 = function handleUserSettingsProtoUpdate(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var2 = var1.settings;
            var4 = var2.type;
            var1 = var1.wasSaved;
            var3 = _closure1_slot13;
            var3 = var3.FRECENCY_AND_FAVORITES_SETTINGS;
            var3 = var4 !== var3;
            if(var3) { _fun0011_ip = 43; continue _fun0011 }
 40:
            var3 = !var1;
 43:
            var1 = !var3;
            if(var3) { _fun0011_ip = 65; continue _fun0011 }
 49:
            var3 = _closure1_slot17;
            var2 = new Array(0);
            var3['pendingUsages'] = var2;
            var1 = true;
 65:
            return var1;
        }
    };
    var4['USER_SETTINGS_PROTO_UPDATE'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var16 = var5;
    var14 = var4;
    var4 = new var16[var9](var15, var14, var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 16;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'stores/FrecencyStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['MAX_NUM_SELECTED_ITEMS'] = var2;
    return var1;
})();
// app/modules/application_commands/ApplicationCommandFrecencyStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot15;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot15;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function getKey(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var3 = global;
            var6 = var3.Number;
            var5 = var2.id;
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = 0;
            if(!(!(var6 < var5))) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var5 = null;
            var6 = var5 == var4;
            var1 = undefined;
            if(var6) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var1 = var4.guild;
case 41:
            if(!(var5 != var1)) { _fun0005_ip = 11; continue _fun0005 }
case 43:
            var1 = var2.guildId;
            if(!(var5 == var1)) { _fun0005_ip = 44; continue _fun0005 }
case 11:
            var1 = var2.id;
            _fun0005_ip = 45; continue _fun0005;
case 44:
            var7 = var2.id;
            var4 = var4.guild;
            var6 = var4.id;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = ':';
            var1 = var5.bind(var4)(var7, var3, var6);
case 45:
            _fun0005_ip = 46; continue _fun0005;
case 39:
            var1 = var2.id;
case 46:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function handleUserSettingsProtoStoreChange() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = _closure1_slot7;
            var1 = var1.frecencyWithoutFetchingLatest;
            var4 = var1.applicationCommandFrecency;
            var3 = null;
            var5 = var3 == var4;
            var1 = undefined;
            var8 = undefined;
            if(var5) { _fun0006_ip = 47; continue _fun0006 }
case 40:
            var8 = var4.applicationCommands;
case 47:
            if(!(var3 == var8)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var8 = {};
case 48:
            var5 = _closure1_slot12;
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
            var2 = _closure1_slot11;
            var2 = var2.pendingUsages;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.DISCOVERY_COMMAND_FRECENCY_GATEWAY_LIMIT;
    var _closure1_slot8 = var8;
    var4 = var4.SUB_COMMAND_KEY_SEPARATOR;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.FREQUENCY_ITEM_LIMIT;
    var4 = 8;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.UserSettingsTypes;
    var _closure1_slot10 = var4;
    var4 = {};
    var9 = new Array(0);
    var4['pendingUsages'] = var9;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var7[var4];
    var9 = var5.bind(var1)(var4);
    var4 = {};
    var10 = function computeBonus() {
        var1 = 1;
        return var1;
    };
    var4['computeBonus'] = var10;
    var10 = function lookupKey(arg1) {
        var1 = arg1;
        return var1;
    };
    var4['lookupKey'] = var10;
    var10 = function afterCompute() {
        var1 = undefined;
        return var1;
    };
    var4['afterCompute'] = var10;
    var4['numFrequentlyItems'] = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var14 = var8;
    var13 = var4;
    var4 = new var14[var9](var13, var12);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot12 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function ApplicationCommandFrecencyStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
                if(var1) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 52; continue _fun0007;
case 50:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 52:
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
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var4 = this;
                var1 = null;
                if(!(var1 != var2)) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                _closure1_slot11 = var2;
case 53:
                var3 = var4.syncWith;
                var5 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot17;
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
        var7 = 'getCommandFrecencyWithoutLoadingLatest';
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
        var7 = function value(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = _closure1_slot12;
                var2 = var3.getScore;
                var6 = _closure1_slot16;
                var5 = undefined;
                var4 = arg1;
                var1 = arg2;
                var1 = var6.bind(var5)(var4, var1);
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                var1 = var2;
case 55:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getTopCommandsWithoutLoadingLatest';
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
    var9 = var4.bind(var1)(var8);
    var4 = 'ApplicationCommandFrecencyStore';
    var9['displayName'] = var4;
    var4 = 'ApplicationCommandFrecencyV2';
    var9['persistKey'] = var4;
    var4 = 12;
    var4 = var7[var4];
    var13 = var5.bind(var1)(var4);
    var4 = {};
    var5 = function handleApplicationCommandUsed(arg1) {
        var1 = arg1;
        var5 = var1.command;
        var4 = var1.context;
        var3 = _closure1_slot16;
        var1 = undefined;
        var5 = var3.bind(var1)(var4, var5);
        var3 = _closure1_slot11;
        var6 = var3.pendingUsages;
        var4 = var6.push;
        var3 = {};
        var3['key'] = var5;
        var7 = global;
        var8 = var7.Date;
        var7 = var8.now;
        var7 = var7.bind(var8)();
        var3['timestamp'] = var7;
        var3 = var4.bind(var6)(var3);
        var4 = _closure1_slot12;
        var3 = var4.track;
        var3 = var3.bind(var4)(var5);
        var3 = _closure1_slot12;
        var2 = var3.compute;
        var2 = var2.bind(var3)();
        return var1;
    };
    var4['APPLICATION_COMMAND_USED'] = var5;
    var5 = function handleUserSettingsProtoUpdate(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var2 = var1.settings;
            var4 = var2.type;
            var2 = var1.wasSaved;
            var3 = _closure1_slot10;
            var3 = var3.FRECENCY_AND_FAVORITES_SETTINGS;
            if(!(var4 === var3)) { _fun0010_ip = 57; continue _fun0010 }
case 58:
            if(!var2) { _fun0010_ip = 57; continue _fun0010 }
case 59:
            var2 = _closure1_slot11;
            var1 = new Array(0);
            var2['pendingUsages'] = var1;
            var1 = undefined;
            return var1;
case 57:
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
    var5 = 'modules/application_commands/ApplicationCommandFrecencyStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function getTopRealCommands(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var8 = global;
            var1 = var8.Set;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var14 = var2;
            var1 = new var14[var1](var13);
            var3 = var1 instanceof Object ? var1 : var2;
            var2 = _closure1_slot14;
            var6 = undefined;
            var1 = arg1;
            var5 = var2.bind(var6)(var1);
            var4 = var5.bind(var6)();
            var1 = var4.done;
            var2 = 0;
            if(var1) { _fun0011_ip = 60; continue _fun0011 }
case 61:
            var10 = var4.value;
            var9 = var10.split;
            var1 = _closure1_slot9;
            var1 = var9.bind(var10)(var1);
            var9 = var1[var2];
            var1 = var8.Number;
            var1 = var1.bind(var6)(var9);
            if(!(var1 > var2)) { _fun0011_ip = 62; continue _fun0011 }
case 63:
            var1 = var3.add;
            var1 = var1.bind(var3)(var9);
case 62:
            var9 = var3.size;
            var1 = _closure1_slot8;
            if(!(!(var9 >= var1))) { _fun0011_ip = 60; continue _fun0011 }
case 64:
            var9 = var5.bind(var6)();
            var1 = var9.done;
            var4 = var9;
            if(!var1) { _fun0011_ip = 61; continue _fun0011 }
case 60:
            var1 = new Array(0);
            var13 = var1;
            var12 = var3;
            var11 = 0;
            var2 = arraySpread(var13, var12, var11);
            return var1;
        }
    };
    var3['getTopRealCommands'] = var4;
    var2 = function getFilteredTopCommands(arg1, arg2) {
        var4 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var3 = var4.filter;
        var2 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var6 = arg1;
                var1 = var6.includes;
                var5 = ':';
                var1 = var1.bind(var6)(var5);
                var1 = !var1;
                if(var1) { _fun0012_ip = 65; continue _fun0012 }
case 35:
                var2 = _closure2_slot0;
                var4 = null;
                var7 = var4 == var2;
                var2 = undefined;
                if(var7) { _fun0012_ip = 55; continue _fun0012 }
case 66:
                var7 = _closure2_slot0;
                var2 = var7.guild;
case 55:
                var2 = var4 != var2;
                if(!var2) { _fun0012_ip = 67; continue _fun0012 }
case 68:
                var3 = _closure2_slot0;
                var3 = var3.guild;
                var4 = var3.id;
                var3 = var6.split;
                var5 = var3.bind(var6)(var5);
                var3 = 1;
                var3 = var5[var3];
                var2 = var4 === var3;
case 67:
                var1 = var2;
case 65:
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var1 = function(arg1) {
            var3 = arg1;
            var2 = var3.split;
            var1 = ':';
            var2 = var2.bind(var3)(var1);
            var1 = 0;
            var1 = var2[var1];
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getFilteredTopCommands'] = var2;
    return var1;
})();
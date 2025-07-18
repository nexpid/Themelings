// app/modules/application_commands/ApplicationCommandFrecencyStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var5;
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
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
 109:
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot16;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot16;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
 20:
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
                    _fun0003_ip = 67; continue _fun0003;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function getKey(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var2 = arg2;
            var3 = global;
            var6 = var3.Number;
            var5 = var2.id;
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = 0;
            if(!(!(var6 < var5))) { _fun0005_ip = 111; continue _fun0005 }
 32:
            var5 = null;
            var6 = var5 == var4;
            var1 = undefined;
            if(var6) { _fun0005_ip = 48; continue _fun0005 }
 43:
            var1 = var4.guild;
 48:
            if(!(var5 != var1)) { _fun0005_ip = 61; continue _fun0005 }
 52:
            var1 = var2.guildId;
            if(!(var5 == var1)) { _fun0005_ip = 68; continue _fun0005 }
 61:
            var1 = var2.id;
            _fun0005_ip = 109; continue _fun0005;
 68:
            var7 = var2.id;
            var4 = var4.guild;
            var6 = var4.id;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = ':';
            var1 = var5.bind(var4)(var7, var3, var6);
 109:
            _fun0005_ip = 116; continue _fun0005;
 111:
            var1 = var2.id;
 116:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function handleUserSettingsProtoStoreChange() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = _closure1_slot7;
            var1 = var1.frecencyWithoutFetchingLatest;
            var4 = var1.applicationCommandFrecency;
            var3 = null;
            var5 = var3 == var4;
            var1 = undefined;
            var8 = undefined;
            if(var5) { _fun0006_ip = 38; continue _fun0006 }
 32:
            var8 = var4.applicationCommands;
 38:
            if(!(var3 == var8)) { _fun0006_ip = 44; continue _fun0006 }
 42:
            var8 = {};
 44:
            var5 = _closure1_slot13;
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
            var2 = _closure1_slot12;
            var2 = var2.pendingUsages;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
    var9 = 9;
    var4 = var7[var9];
    var4 = var6.bind(var1)(var4);
    var4 = var4.ApplicationCommandType;
    var10 = var4.CHAT;
    var4 = new Array(2);
    var4[0] = var10;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var9 = var9.ApplicationCommandType;
    var9 = var9.PRIMARY_ENTRY_POINT;
    var4[1] = var9;
    var _closure1_slot11 = var4;
    var4 = {};
    var9 = new Array(0);
    var4['pendingUsages'] = var9;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var7[var4];
    var9 = var5.bind(var1)(var4);
    var4 = {};
    var10 = function computeBonus() {
        var1 = 1;
        return var1;
    };
    var4['computeBonus'] = var10;
    var10 = function computeWeight(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var6 = arg1;
            var1 = 3;
            var2 = var6 <= var1;
            var1 = 100;
            if(var2) { _fun0007_ip = 80; continue _fun0007 }
 16:
            var2 = 15;
            var3 = var6 <= var2;
            var2 = 70;
            if(var3) { _fun0007_ip = 77; continue _fun0007 }
 29:
            var4 = 30;
            var5 = var6 <= var4;
            var3 = 50;
            if(var5) { _fun0007_ip = 74; continue _fun0007 }
 42:
            var5 = 45;
            var5 = var6 <= var5;
            if(var5) { _fun0007_ip = 71; continue _fun0007 }
 52:
            var5 = 80;
            var6 = var6 <= var5;
            var5 = 1;
            if(!var6) { _fun0007_ip = 68; continue _fun0007 }
 65:
            var5 = 10;
 68:
            var4 = var5;
 71:
            var3 = var4;
 74:
            var2 = var3;
 77:
            var1 = var2;
 80:
            return var1;
        }
    };
    var4['computeWeight'] = var10;
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
    var _closure1_slot13 = var4;
    var4 = 12;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function ApplicationCommandFrecencyStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                if(var1) { _fun0008_ip = 69; continue _fun0008 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 105; continue _fun0008;
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
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var2 = arg1;
                var4 = this;
                var1 = null;
                if(!(var1 != var2)) { _fun0009_ip = 19; continue _fun0009 }
 12:
                _closure1_slot12 = var2;
 19:
                var3 = var4.syncWith;
                var5 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot18;
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
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasPendingUsage';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
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
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getScoreWithoutLoadingLatest';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = _closure1_slot13;
                var2 = var3.getScore;
                var6 = _closure1_slot17;
                var5 = undefined;
                var4 = arg1;
                var1 = arg2;
                var1 = var6.bind(var5)(var4, var1);
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0010_ip = 50; continue _fun0010 }
 47:
                var1 = var2;
 50:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getTopCommandsWithoutLoadingLatest';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot13;
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
    var4 = 13;
    var4 = var7[var4];
    var13 = var5.bind(var1)(var4);
    var4 = {};
    var5 = function handleApplicationCommandUsed(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var5 = var1.command;
            var4 = var1.context;
            var6 = _closure1_slot11;
            var3 = var6.includes;
            var1 = var5.type;
            var1 = var3.bind(var6)(var1);
            if(var1) { _fun0011_ip = 43; continue _fun0011 }
 39:
            var1 = false;
            return var1;
 43:
            var3 = _closure1_slot17;
            var1 = undefined;
            var5 = var3.bind(var1)(var4, var5);
            var3 = _closure1_slot12;
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
            var4 = _closure1_slot13;
            var3 = var4.track;
            var3 = var3.bind(var4)(var5);
            var3 = _closure1_slot13;
            var2 = var3.compute;
            var2 = var2.bind(var3)();
            return var1;
        }
    };
    var4['APPLICATION_COMMAND_USED'] = var5;
    var5 = function handleUserSettingsProtoUpdate(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var2 = var1.settings;
            var4 = var2.type;
            var2 = var1.wasSaved;
            var3 = _closure1_slot10;
            var3 = var3.FRECENCY_AND_FAVORITES_SETTINGS;
            if(!(var4 === var3)) { _fun0012_ip = 58; continue _fun0012 }
 37:
            if(!var2) { _fun0012_ip = 58; continue _fun0012 }
 40:
            var2 = _closure1_slot12;
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
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/application_commands/ApplicationCommandFrecencyStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function getTopRealCommands(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var8 = global;
            var1 = var8.Set;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var14 = var2;
            var1 = new var14[var1](var13);
            var3 = var1 instanceof Object ? var1 : var2;
            var2 = _closure1_slot15;
            var6 = undefined;
            var1 = arg1;
            var5 = var2.bind(var6)(var1);
            var4 = var5.bind(var6)();
            var1 = var4.done;
            var2 = 0;
            if(var1) { _fun0013_ip = 135; continue _fun0013 }
 59:
            var10 = var4.value;
            var9 = var10.split;
            var1 = _closure1_slot9;
            var1 = var9.bind(var10)(var1);
            var9 = var1[var2];
            var1 = var8.Number;
            var1 = var1.bind(var6)(var9);
            if(!(var1 > var2)) { _fun0013_ip = 107; continue _fun0013 }
 97:
            var1 = var3.add;
            var1 = var1.bind(var3)(var9);
 107:
            var9 = var3.size;
            var1 = _closure1_slot8;
            if(!(!(var9 >= var1))) { _fun0013_ip = 135; continue _fun0013 }
 120:
            var9 = var5.bind(var6)();
            var1 = var9.done;
            var4 = var9;
            if(!var1) { _fun0013_ip = 59; continue _fun0013 }
 135:
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
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var6 = arg1;
                var1 = var6.includes;
                var5 = ':';
                var1 = var1.bind(var6)(var5);
                var1 = !var1;
                if(var1) { _fun0014_ip = 95; continue _fun0014 }
 23:
                var2 = _closure2_slot0;
                var4 = null;
                var7 = var4 == var2;
                var2 = undefined;
                if(var7) { _fun0014_ip = 50; continue _fun0014 }
 41:
                var7 = _closure2_slot0;
                var2 = var7.guild;
 50:
                var2 = var4 != var2;
                if(!var2) { _fun0014_ip = 92; continue _fun0014 }
 57:
                var3 = _closure2_slot0;
                var3 = var3.guild;
                var4 = var3.id;
                var3 = var6.split;
                var5 = var3.bind(var6)(var5);
                var3 = 1;
                var3 = var5[var3];
                var2 = var4 === var3;
 92:
                var1 = var2;
 95:
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
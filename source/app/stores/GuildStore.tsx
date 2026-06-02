// app/stores/GuildStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot18;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot18;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
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
case 35: // try_end0
            _fun0004_ip = 37; continue _fun0004;
case 38: // catch_target0
            CatchBlockStart(arg_register=1);
case 37:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function createGuildRecordFromRust(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot9;
            var3 = _closure1_slot11;
            var2 = {};
            var12 = var2;
            var11 = var5;
            var6 = copyDataProperties(var12, var11);
            var7 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 11;
            var6 = var6[var1];
            var1 = undefined;
            var8 = var7.bind(var1)(var6);
            var7 = var8.toSetInplace;
            var6 = var5.features;
            var7 = var7.bind(var8)(var6);
            var6 = 'features';
            var2[5] = var7;
            var7 = var5.joinedAt;
            var6 = null;
            var7 = var6 != var7;
            var8 = null;
            if(!var7) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var7 = global;
            var10 = var7.Date;
            var12 = var5.joinedAt;
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var13 = var9;
            var7 = new var13[var10](var12, var11);
            var8 = var7 instanceof Object ? var7 : var9;
case 39:
            var7 = 'joinedAt';
            var2[6] = var8;
            var7 = var5.premiumProgressBarEnabledUserUpdatedAt;
            var7 = var6 != var7;
            var6 = null;
            if(!var7) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var7 = global;
            var8 = var7.Date;
            var12 = var5.premiumProgressBarEnabledUserUpdatedAt;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var13 = var7;
            var5 = new var13[var8](var12, var11);
            var6 = var5 instanceof Object ? var5 : var7;
case 41:
            var5 = 'premiumProgressBarEnabledUserUpdatedAt';
            var2[4] = var6;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function updateGuildTheme(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var1 = var4.get;
            var8 = var1.bind(var4)(var3);
            var1 = null;
            if(!(var1 != var8)) { _fun0006_ip = 28; continue _fun0006 }
case 43:
            var2 = var4.set;
            var7 = _closure1_slot10;
            var6 = undefined;
            var5 = 'guildTheme';
            var1 = arg3;
            var1 = var7.bind(var6)(var8, var5, var1);
            var1 = var2.bind(var4)(var3, var1);
case 28:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.constructInPlace;
    var _closure1_slot9 = var7;
    var4 = var4.set;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.LibdiscoreStore;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.GuildRecordTypeTag;
    var _closure1_slot11 = var9;
    var9 = var4.updateJoinedAt;
    var _closure1_slot12 = var9;
    var4 = var4.updateGameApplications;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FAVORITES;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FAVORITES_GUILD_RECORD;
    var _closure1_slot16 = var4;
    var4 = function(arg1) {
        var4 = function GuildStore(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot4;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot7;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot6;
                var1 = _closure1_slot19;
                var1 = var1.bind(var5)();
                if(var1) { _fun0007_ip = 9; continue _fun0007 }
case 44:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0007_ip = 45; continue _fun0007;
case 9:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot7;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 45:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var5 = var1.addKVDatabase;
                var4 = _closure1_slot20;
                var3 = 'guilds';
                var3 = var5.bind(var1)(var3, var4);
                var1['database'] = var3;
                var3 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var4 = arg1;
                        var1 = null;
                        if(!(var1 == var4)) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                        var1 = undefined;
                        return var1;
case 46:
                        var1 = _closure1_slot15;
                        if(!(var4 !== var1)) { _fun0008_ip = 5; continue _fun0008 }
case 48:
                        var1 = _closure3_slot0;
                        var3 = var1.database;
                        var1 = var3.get;
                        var1 = var1.bind(var3)(var4);
                        _fun0008_ip = 49; continue _fun0008;
case 5:
                        var1 = _closure1_slot16;
case 49:
                        return var1;
                    }
                };
                var1['getGuild'] = var3;
                var5 = var1.database;
                var4 = var5.memoized;
                var3 = function(arg1) {
                    var1 = {};
                    var3 = arg1;
                    var4 = var1;
                    var2 = copyDataProperties(var4, var3);
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['getGuilds'] = var3;
                var5 = var1.database;
                var4 = var5.memoized;
                var3 = function(arg1) {
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.values;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['getGuildsArray'] = var3;
                var4 = var1.database;
                var3 = var4.memoized;
                var2 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.keys;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var1['getGuildIds'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'stateWrapper';
        var5['key'] = var1;
        var1 = function value() {
            var1 = this;
            var1 = var1.database;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getGuildCount';
        var5['key'] = var7;
        var6 = function value() {
            var1 = this;
            var2 = var1.database;
            var1 = var2.length;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var7);
    var4 = 'GuildStore';
    var8['displayName'] = var4;
    var7 = {};
    var4 = function BACKGROUND_SYNC(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var9 = arg2;
            var1 = arg1;
            var3 = var1.guilds;
            var2 = _closure1_slot17;
            var1 = undefined;
            var7 = var2.bind(var1)(var3);
            var3 = var7.bind(var1)();
            var2 = var3.done;
            var6 = 13;
            var5 = 'unavailable';
            var4 = null;
            if(var2) { _fun0009_ip = 50; continue _fun0009 }
case 51:
            var14 = var3.value;
            var10 = var9.get;
            var2 = var14.id;
            var13 = var10.bind(var9)(var2);
            var2 = var4 != var13;
            if(!var2) { _fun0009_ip = 52; continue _fun0009 }
case 37:
            var10 = var14.data_mode;
            var2 = var5 !== var10;
case 52:
            if(!var2) { _fun0009_ip = 53; continue _fun0009 }
case 54:
            var11 = var9.set;
            var10 = var14.id;
            var12 = _closure1_slot2;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var12 = var12.bind(var1)(var2);
            var2 = var12.fromBackgroundSync;
            var2 = var2.bind(var12)(var14, var13);
            var2 = var11.bind(var9)(var10, var2);
case 53:
            var10 = var7.bind(var1)();
            var2 = var10.done;
            var3 = var10;
            if(!var2) { _fun0009_ip = 51; continue _fun0009 }
case 50:
            return var1;
        }
    };
    var7['BACKGROUND_SYNC'] = var4;
    var4 = function LOGOUT(arg1, arg2) {
        var2 = arg2;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var7['LOGOUT'] = var4;
    var4 = function RESET_SOCKET(arg1, arg2) {
        var2 = arg2;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var7['RESET_SOCKET'] = var4;
    var4 = function CONNECTION_OPEN(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var8 = var1.guilds;
            var6 = var1.unavailableGuilds;
            var1 = var5.getAllRecords;
            var12 = var1.bind(var5)();
            var4 = global;
            var3 = var4.Set;
            var2 = var4.Object;
            var1 = var2.keys;
            var19 = var1.bind(var2)(var12);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var20 = var2;
            var1 = new var20[var3](var19, var18);
            var3 = var1 instanceof Object ? var1 : var2;
            var7 = _closure1_slot17;
            var1 = undefined;
            var11 = var7.bind(var1)(var8);
            var8 = var11.bind(var1)();
            var7 = var8.done;
            var10 = 13;
            var9 = null;
            if(var7) { _fun0010_ip = 55; continue _fun0010 }
case 56:
            var17 = var8.value;
            var13 = var3.delete;
            var7 = var17.id;
            var7 = var13.bind(var3)(var7);
            var7 = var17.properties;
            if(!(var9 == var7)) { _fun0010_ip = 57; continue _fun0010 }
case 58:
            var7 = var17.id;
            var7 = var12[var7];
            if(!(var9 != var7)) { _fun0010_ip = 59; continue _fun0010 }
case 57:
            var14 = var5.set;
            var13 = var17.id;
            var15 = _closure1_slot2;
            var7 = _closure1_slot3;
            var7 = var7[var10];
            var16 = var15.bind(var1)(var7);
            var15 = var16.fromServer;
            var7 = var17.id;
            var7 = var12[var7];
            var7 = var15.bind(var16)(var17, var7);
            var7 = var14.bind(var5)(var13, var7);
            var13 = var11.bind(var1)();
            var7 = var13.done;
            var8 = var13;
            if(var7) { _fun0010_ip = 55; continue _fun0010 }
case 60:
            _fun0010_ip = 56; continue _fun0010;
case 59:
            var8 = var4.Error;
            var4 = var8.prototype;
            var7 = Object.create(var4, {constructor: {value: var8}});
            var19 = 'Guild data was missing from store, but hash was still available.';
            var20 = var7;
            var4 = new var20[var8](var19, var18);
            var4 = var4 instanceof Object ? var4 : var7;
            throw var4;
case 55:
            var4 = _closure1_slot17;
            var7 = var4.bind(var1)(var6);
            var6 = var7.bind(var1)();
            var4 = var6.done;
            if(var4) { _fun0010_ip = 61; continue _fun0010 }
case 62:
            var8 = var6.value;
            var4 = var3.delete;
            var4 = var4.bind(var3)(var8);
            var8 = var7.bind(var1)();
            var4 = var8.done;
            var6 = var8;
            if(!var4) { _fun0010_ip = 62; continue _fun0010 }
case 61:
            var2 = _closure1_slot17;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0010_ip = 63; continue _fun0010 }
case 64:
            var6 = var3.value;
            var2 = var5.remove;
            var2 = var2.bind(var5)(var6);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0010_ip = 64; continue _fun0010 }
case 63:
            return var1;
        }
    };
    var7['CONNECTION_OPEN'] = var4;
    var4 = function OVERLAY_INITIALIZE(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var9 = arg2;
            var1 = arg1;
            var2 = var1.guilds;
            var1 = var9.clear;
            var1 = var1.bind(var9)();
            var8 = null;
            if(!(var8 != var2)) { _fun0011_ip = 65; continue _fun0011 }
case 66:
            var1 = _closure1_slot17;
            var6 = undefined;
            var5 = var1.bind(var6)(var2);
            var2 = var5.bind(var6)();
            var1 = var2.done;
            var4 = global;
            var3 = 13;
            if(var1) { _fun0011_ip = 65; continue _fun0011 }
case 67:
            var1 = var2.value;
            var14 = var1.properties;
            var15 = var1.additionalFields;
            var11 = var9.set;
            var10 = var14.id;
            var12 = _closure1_slot2;
            var1 = _closure1_slot3;
            var1 = var1[var3];
            var13 = var12.bind(var6)(var1);
            var12 = var13.fromGuildPropertiesWithAdditionalFields;
            var1 = {};
            var16 = var15.joinedAt;
            var17 = var8 != var16;
            var16 = null;
            if(!var17) { _fun0011_ip = 68; continue _fun0011 }
case 69:
            var19 = var4.Date;
            var21 = var15.joinedAt;
            var18 = var19.prototype;
            var18 = Object.create(var18, {constructor: {value: var19}});
            var22 = var18;
            var17 = new var22[var19](var21, var20);
            var16 = var17 instanceof Object ? var17 : var18;
case 68:
            var1['joinedAt'] = var16;
            var15 = var15.premiumSubscriberCount;
            var1['premiumSubscriberCount'] = var15;
            var1 = var12.bind(var13)(var14, var1);
            var1 = var11.bind(var9)(var10, var1);
            var10 = var5.bind(var6)();
            var1 = var10.done;
            var2 = var10;
            if(!var1) { _fun0011_ip = 67; continue _fun0011 }
case 65:
            var1 = undefined;
            return var1;
        }
    };
    var7['OVERLAY_INITIALIZE'] = var4;
    var4 = function CACHE_LOADED(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var7 = arg2;
            var1 = arg1;
            var3 = var1.guilds;
            var1 = var7.clear;
            var1 = var1.bind(var7)();
            var2 = _closure1_slot17;
            var1 = undefined;
            var5 = var2.bind(var1)(var3);
            var3 = var5.bind(var1)();
            var2 = var3.done;
            var4 = 13;
            if(var2) { _fun0012_ip = 70; continue _fun0012 }
case 71:
            var11 = var3.value;
            var9 = var7.set;
            var8 = var11.id;
            var10 = _closure1_slot2;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var10 = var10.bind(var1)(var2);
            var2 = var10.fromSerializedGuildRecord;
            var2 = var2.bind(var10)(var11);
            var2 = var9.bind(var7)(var8, var2);
            var8 = var5.bind(var1)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0012_ip = 71; continue _fun0012 }
case 70:
            return var1;
        }
    };
    var7['CACHE_LOADED'] = var4;
    var4 = function CACHE_LOADED_LAZY(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var7 = arg2;
            var1 = arg1;
            var2 = var1.guilds;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0013_ip = 72; continue _fun0013 }
case 31:
            var1 = var7.clear;
            var1 = var1.bind(var7)();
            var1 = _closure1_slot17;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 13;
            if(var1) { _fun0013_ip = 72; continue _fun0013 }
case 73:
            var11 = var2.value;
            var9 = var7.set;
            var8 = var11.id;
            var10 = _closure1_slot2;
            var1 = _closure1_slot3;
            var1 = var1[var3];
            var10 = var10.bind(var5)(var1);
            var1 = var10.fromSerializedGuildRecord;
            var1 = var1.bind(var10)(var11);
            var1 = var9.bind(var7)(var8, var1);
            var8 = var4.bind(var5)();
            var1 = var8.done;
            var2 = var8;
            if(!var1) { _fun0013_ip = 73; continue _fun0013 }
case 72:
            var1 = undefined;
            return var1;
        }
    };
    var7['CACHE_LOADED_LAZY'] = var4;
    var4 = function GUILD_CREATE(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var5 = arg2;
            var1 = arg1;
            var8 = var1.guild;
            var2 = var5.get;
            var1 = var8.id;
            var7 = var2.bind(var5)(var1);
            var2 = var8.properties;
            var1 = null;
            if(!(var1 == var2)) { _fun0014_ip = 74; continue _fun0014 }
case 75:
            if(!(var1 != var7)) { _fun0014_ip = 76; continue _fun0014 }
case 74:
            var4 = var5.set;
            var3 = var8.id;
            var6 = _closure1_slot2;
            var2 = _closure1_slot3;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var2);
            var2 = var6.fromServer;
            var2 = var2.bind(var6)(var8, var7);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
case 76:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var10 = 'Guild data was missing from store, but hash was still available.';
            var11 = var2;
            var1 = new var11[var3](var10, var9);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var7['GUILD_CREATE'] = var4;
    var4 = function GUILD_UPDATE(arg1, arg2) {
        var5 = arg2;
        var1 = arg1;
        var8 = var1.guild;
        var2 = var5.get;
        var1 = var8.id;
        var7 = var2.bind(var5)(var1);
        var4 = var5.set;
        var3 = var8.id;
        var6 = _closure1_slot2;
        var2 = _closure1_slot3;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var6 = var6.bind(var1)(var2);
        var2 = var6.fromGuild;
        var2 = var2.bind(var6)(var8, var7);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var7['GUILD_UPDATE'] = var4;
    var4 = function GUILD_THEME_PREVIEW_SAVE_SUCCESS(arg1, arg2) {
        var1 = arg1;
        var5 = var1.guildId;
        var4 = var1.guildTheme;
        var3 = _closure1_slot21;
        var1 = undefined;
        var2 = arg2;
        var2 = var3.bind(var1)(var2, var5, var4);
        return var1;
    };
    var7['GUILD_THEME_PREVIEW_SAVE_SUCCESS'] = var4;
    var4 = function GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS(arg1, arg2) {
        var1 = arg1;
        var5 = var1.guildId;
        var4 = var1.guildTheme;
        var3 = _closure1_slot21;
        var1 = undefined;
        var2 = arg2;
        var2 = var3.bind(var1)(var2, var5, var4);
        return var1;
    };
    var7['GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS'] = var4;
    var4 = function GUILD_DELETE(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = arg2;
            var1 = arg1;
            var1 = var1.guild;
            var2 = var1.unavailable;
            if(var2) { _fun0015_ip = 77; continue _fun0015 }
case 29:
            var2 = var3.remove;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
case 77:
            var1 = undefined;
            return var1;
        }
    };
    var7['GUILD_DELETE'] = var4;
    var4 = function GUILD_MEMBER_ADD(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var4 = arg2;
            var3 = var1.guildId;
            var9 = var1.joinedAt;
            var2 = var1.user;
            var6 = _closure1_slot14;
            var5 = var6.getId;
            var5 = var5.bind(var6)();
            var6 = var4.get;
            var7 = var6.bind(var4)(var3);
            var2 = var2.id;
            if(!(var5 === var2)) { _fun0016_ip = 78; continue _fun0016 }
case 79:
            var5 = null;
            if(!(var5 != var7)) { _fun0016_ip = 78; continue _fun0016 }
case 80:
            var8 = 'string';
            var2 = typeof var9;
            var6 = var9;
            if(!(var8 === var2)) { _fun0016_ip = 81; continue _fun0016 }
case 82:
            var2 = global;
            var2 = var2.Date;
            var8 = var2.prototype;
            var8 = Object.create(var8, {constructor: {value: var2}});
            var12 = var8;
            var11 = var9;
            var2 = new var12[var2](var11, var10);
            var6 = var2 instanceof Object ? var2 : var8;
case 81:
            var2 = var7.joinedAt;
            var2 = var6 !== var2;
            if(!var2) { _fun0016_ip = 72; continue _fun0016 }
case 83:
            var2 = var5 != var6;
case 72:
            if(!var2) { _fun0016_ip = 78; continue _fun0016 }
case 84:
            var2 = var4.set;
            var5 = _closure1_slot12;
            var1 = undefined;
            var1 = var5.bind(var1)(var7, var6);
            var1 = var2.bind(var4)(var3, var1);
case 78:
            var1 = undefined;
            return var1;
        }
    };
    var7['GUILD_MEMBER_ADD'] = var4;
    var2 = function GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var4 = arg2;
            var3 = var1.guildId;
            var7 = var1.gameApplicationIds;
            var1 = var4.get;
            var6 = var1.bind(var4)(var3);
            var1 = null;
            if(!(var1 != var6)) { _fun0017_ip = 85; continue _fun0017 }
case 33:
            var2 = var4.set;
            var5 = _closure1_slot13;
            var1 = undefined;
            var1 = var5.bind(var1)(var6, var7);
            var1 = var2.bind(var4)(var3, var1);
case 85:
            var1 = undefined;
            return var1;
        }
    };
    var7['GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.LibdiscoreBatchStoreRefactorExperiment;
    var2 = var4.getCachedBridgedStoreMode;
    var11 = var2.bind(var4)();
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var12 = var7;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/GuildStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
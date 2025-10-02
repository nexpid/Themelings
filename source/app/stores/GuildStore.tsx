// app/stores/GuildStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var8;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot13;
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
            var7 = _closure1_slot13;
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
    var _closure1_slot12 = var1;
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
    var _closure1_slot13 = var1;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.KvStore;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.updateJoinedAt;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FAVORITES;
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FAVORITES_GUILD_RECORD;
    var _closure1_slot11 = var4;
    var4 = function(arg1) {
        var4 = function GuildStore(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot14;
                var1 = var1.bind(var4)();
                if(var1) { _fun0005_ip = 9; continue _fun0005 }
case 39:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0005_ip = 40; continue _fun0005;
case 9:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 40:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var4 = arg1;
                        var1 = null;
                        if(!(var1 == var4)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                        var1 = undefined;
                        return var1;
case 41:
                        var1 = _closure1_slot10;
                        if(!(var4 !== var1)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                        var3 = _closure3_slot0;
                        var1 = var3.get;
                        var1 = var1.bind(var3)(var4);
                        _fun0006_ip = 45; continue _fun0006;
case 43:
                        var1 = _closure1_slot11;
case 45:
                        return var1;
                    }
                };
                var1['getGuild'] = var3;
                var4 = var1.memoized;
                var3 = function(arg1) {
                    var1 = {};
                    var3 = arg1;
                    var4 = var1;
                    var2 = copyDataProperties(var4, var3);
                    return var1;
                };
                var3 = var4.bind(var1)(var3);
                var1['getGuilds'] = var3;
                var4 = var1.memoized;
                var3 = function(arg1) {
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.values;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var4.bind(var1)(var3);
                var1['getGuildsArray'] = var3;
                var3 = var1.memoized;
                var2 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.keys;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                var1['getGuildIds'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot7;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot4;
        var5 = {};
        var6 = 'getGuildCount';
        var5['key'] = var6;
        var1 = function value() {
            var2 = this;
            var1 = var2.length;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var7);
    var4 = 'GuildStore';
    var8['displayName'] = var4;
    var7 = {};
    var4 = function BACKGROUND_SYNC(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var9 = arg2;
            var1 = arg1;
            var3 = var1.guilds;
            var2 = _closure1_slot12;
            var1 = undefined;
            var7 = var2.bind(var1)(var3);
            var3 = var7.bind(var1)();
            var2 = var3.done;
            var6 = 11;
            var5 = 'unavailable';
            var4 = null;
            if(var2) { _fun0007_ip = 46; continue _fun0007 }
case 45:
            var14 = var3.value;
            var10 = var9.get;
            var2 = var14.id;
            var13 = var10.bind(var9)(var2);
            var2 = var4 != var13;
            if(!var2) { _fun0007_ip = 47; continue _fun0007 }
case 37:
            var10 = var14.data_mode;
            var2 = var5 !== var10;
case 47:
            if(!var2) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var11 = var9.set;
            var10 = var14.id;
            var12 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var12 = var12.bind(var1)(var2);
            var2 = var12.fromBackgroundSync;
            var2 = var2.bind(var12)(var14, var13);
            var2 = var11.bind(var9)(var10, var2);
case 48:
            var10 = var7.bind(var1)();
            var2 = var10.done;
            var3 = var10;
            if(!var2) { _fun0007_ip = 45; continue _fun0007 }
case 46:
            return var1;
        }
    };
    var7['BACKGROUND_SYNC'] = var4;
    var4 = function CONNECTION_OPEN(arg1, arg2) {
        var3 = arg2;
        var2 = arg1;
        var2 = var2.guilds;
        var _closure2_slot0 = var2;
        var2 = var3.reset;
        var1 = function(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var8 = arg1;
                var7 = arg2;
                var3 = _closure1_slot12;
                var2 = _closure2_slot0;
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var3 = var5.bind(var1)();
                var2 = var3.done;
                var4 = 11;
                if(var2) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                var12 = var3.value;
                var9 = var12.id;
                var10 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var11 = var10.bind(var1)(var2);
                var10 = var11.fromServer;
                var2 = var12.id;
                var2 = var7[var2];
                var2 = var10.bind(var11)(var12, var2);
                var8[var9] = var2;
                var9 = var5.bind(var1)();
                var2 = var9.done;
                var3 = var9;
                if(!var2) { _fun0008_ip = 51; continue _fun0008 }
case 50:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var7['CONNECTION_OPEN'] = var4;
    var4 = function OVERLAY_INITIALIZE(arg1, arg2) {
        var3 = arg2;
        var2 = arg1;
        var2 = var2.guilds;
        var _closure2_slot0 = var2;
        var2 = var3.reset;
        var1 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var9 = arg1;
                var2 = _closure2_slot0;
                var8 = null;
                if(!(var8 != var2)) { _fun0009_ip = 20; continue _fun0009 }
case 52:
                var2 = _closure1_slot12;
                var1 = _closure2_slot0;
                var6 = undefined;
                var5 = var2.bind(var6)(var1);
                var2 = var5.bind(var6)();
                var1 = var2.done;
                var4 = global;
                var3 = 11;
                if(var1) { _fun0009_ip = 20; continue _fun0009 }
case 53:
                var1 = var2.value;
                var13 = var1.properties;
                var14 = var1.additionalFields;
                var10 = var13.id;
                var11 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var12 = var11.bind(var6)(var1);
                var11 = var12.fromGuildPropertiesWithAdditionalFields;
                var1 = {};
                var15 = var14.joinedAt;
                var16 = var8 != var15;
                var15 = null;
                if(!var16) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                var18 = var4.Date;
                var20 = var14.joinedAt;
                var17 = var18.prototype;
                var17 = Object.create(var17, {constructor: {value: var18}});
                var21 = var17;
                var16 = new var21[var18](var20, var19);
                var15 = var16 instanceof Object ? var16 : var17;
case 54:
                var1['joinedAt'] = var15;
                var14 = var14.premiumSubscriberCount;
                var1['premiumSubscriberCount'] = var14;
                var1 = var11.bind(var12)(var13, var1);
                var9[var10] = var1;
                var10 = var5.bind(var6)();
                var1 = var10.done;
                var2 = var10;
                if(!var1) { _fun0009_ip = 53; continue _fun0009 }
case 20:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var7['OVERLAY_INITIALIZE'] = var4;
    var4 = function CACHE_LOADED(arg1, arg2) {
        var3 = arg2;
        var2 = arg1;
        var2 = var2.guilds;
        var _closure2_slot0 = var2;
        var2 = var3.reset;
        var1 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var7 = arg1;
                var3 = _closure1_slot12;
                var2 = _closure2_slot0;
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var3 = var5.bind(var1)();
                var2 = var3.done;
                var4 = 11;
                if(var2) { _fun0010_ip = 11; continue _fun0010 }
case 56:
                var10 = var3.value;
                var8 = var10.id;
                var9 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var9 = var9.bind(var1)(var2);
                var2 = var9.fromSerializedGuildRecord;
                var2 = var2.bind(var9)(var10);
                var7[var8] = var2;
                var8 = var5.bind(var1)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0010_ip = 56; continue _fun0010 }
case 11:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var7['CACHE_LOADED'] = var4;
    var4 = function CACHE_LOADED_LAZY(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg2;
            var2 = arg1;
            var2 = var2.guilds;
            var _closure2_slot0 = var2;
            var4 = var2.length;
            var2 = 0;
            if(!(var2 !== var4)) { _fun0011_ip = 57; continue _fun0011 }
case 58:
            var2 = var3.reset;
            var1 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var7 = arg1;
                    var3 = _closure1_slot12;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = var5.bind(var1)();
                    var2 = var3.done;
                    var4 = 11;
                    if(var2) { _fun0012_ip = 11; continue _fun0012 }
case 56:
                    var10 = var3.value;
                    var8 = var10.id;
                    var9 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var4];
                    var9 = var9.bind(var1)(var2);
                    var2 = var9.fromSerializedGuildRecord;
                    var2 = var2.bind(var9)(var10);
                    var7[var8] = var2;
                    var8 = var5.bind(var1)();
                    var2 = var8.done;
                    var3 = var8;
                    if(!var2) { _fun0012_ip = 56; continue _fun0012 }
case 11:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
case 57:
            var1 = undefined;
            return var1;
        }
    };
    var7['CACHE_LOADED_LAZY'] = var4;
    var4 = function GUILD_CREATE(arg1, arg2) {
        var4 = arg2;
        var2 = arg1;
        var2 = var2.guild;
        var _closure2_slot0 = var2;
        var3 = var4.set;
        var2 = var2.id;
        var1 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.fromServer;
            var2 = _closure2_slot0;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var7['GUILD_CREATE'] = var4;
    var4 = function GUILD_UPDATE(arg1, arg2) {
        var4 = arg2;
        var2 = arg1;
        var2 = var2.guild;
        var _closure2_slot0 = var2;
        var3 = var4.set;
        var2 = var2.id;
        var1 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.fromGuild;
            var2 = _closure2_slot0;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var7['GUILD_UPDATE'] = var4;
    var4 = function GUILD_DELETE(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = arg2;
            var1 = arg1;
            var1 = var1.guild;
            var2 = var1.unavailable;
            if(var2) { _fun0013_ip = 59; continue _fun0013 }
case 29:
            var2 = var3.remove;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
case 59:
            var1 = undefined;
            return var1;
        }
    };
    var7['GUILD_DELETE'] = var4;
    var2 = function GUILD_MEMBER_ADD(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var4 = arg2;
            var3 = var1.guildId;
            var9 = var1.joinedAt;
            var2 = var1.user;
            var6 = _closure1_slot9;
            var5 = var6.getId;
            var5 = var5.bind(var6)();
            var6 = var4.get;
            var7 = var6.bind(var4)(var3);
            var2 = var2.id;
            if(!(var5 === var2)) { _fun0014_ip = 60; continue _fun0014 }
case 61:
            var5 = null;
            if(!(var5 != var7)) { _fun0014_ip = 60; continue _fun0014 }
case 62:
            var8 = 'string';
            var2 = typeof var9;
            var6 = var9;
            if(!(var8 === var2)) { _fun0014_ip = 50; continue _fun0014 }
case 63:
            var2 = global;
            var2 = var2.Date;
            var8 = var2.prototype;
            var8 = Object.create(var8, {constructor: {value: var2}});
            var12 = var8;
            var11 = var9;
            var2 = new var12[var2](var11, var10);
            var6 = var2 instanceof Object ? var2 : var8;
case 50:
            var2 = var7.joinedAt;
            var2 = var6 !== var2;
            if(!var2) { _fun0014_ip = 64; continue _fun0014 }
case 65:
            var2 = var5 != var6;
case 64:
            if(!var2) { _fun0014_ip = 60; continue _fun0014 }
case 66:
            var2 = var4.set;
            var5 = _closure1_slot8;
            var1 = undefined;
            var1 = var5.bind(var1)(var7, var6);
            var1 = var2.bind(var4)(var3, var1);
case 60:
            var1 = undefined;
            return var1;
        }
    };
    var7['GUILD_MEMBER_ADD'] = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.GuildStoreExperiment;
    var2 = var4.getCachedBridgedStoreMode;
    var11 = var2.bind(var4)();
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var12 = var7;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/GuildStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
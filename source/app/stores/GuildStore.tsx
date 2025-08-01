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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot13;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot13;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
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
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
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
                    _fun0002_ip = 67; continue _fun0002;
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
    var _closure1_slot12 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
            _fun0004_ip = 74; continue _fun0004;
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
 0:
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
                if(var1) { _fun0005_ip = 86; continue _fun0005 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0005_ip = 120; continue _fun0005;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var4 = arg1;
                        var1 = null;
                        if(!(var1 == var4)) { _fun0006_ip = 13; continue _fun0006 }
 9:
                        var1 = undefined;
                        return var1;
 13:
                        var1 = _closure1_slot10;
                        if(!(var4 !== var1)) { _fun0006_ip = 43; continue _fun0006 }
 24:
                        var3 = _closure3_slot0;
                        var1 = var3.get;
                        var1 = var1.bind(var3)(var4);
                        _fun0006_ip = 47; continue _fun0006;
 43:
                        var1 = _closure1_slot11;
 47:
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
 0:
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
            if(var2) { _fun0007_ip = 147; continue _fun0007 }
 47:
            var14 = var3.value;
            var10 = var9.get;
            var2 = var14.id;
            var13 = var10.bind(var9)(var2);
            var2 = var4 != var13;
            if(!var2) { _fun0007_ip = 84; continue _fun0007 }
 74:
            var10 = var14.data_mode;
            var2 = var5 !== var10;
 84:
            if(!var2) { _fun0007_ip = 132; continue _fun0007 }
 87:
            var11 = var9.set;
            var10 = var14.id;
            var12 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var12 = var12.bind(var1)(var2);
            var2 = var12.fromBackgroundSync;
            var2 = var2.bind(var12)(var14, var13);
            var2 = var11.bind(var9)(var10, var2);
 132:
            var10 = var7.bind(var1)();
            var2 = var10.done;
            var3 = var10;
            if(!var2) { _fun0007_ip = 47; continue _fun0007 }
 147:
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
 0:
                var8 = arg1;
                var7 = arg2;
                var3 = _closure1_slot12;
                var2 = _closure2_slot0;
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var3 = var5.bind(var1)();
                var2 = var3.done;
                var4 = 11;
                if(var2) { _fun0008_ip = 109; continue _fun0008 }
 42:
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
                if(!var2) { _fun0008_ip = 42; continue _fun0008 }
 109:
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
 0:
                var9 = arg1;
                var2 = _closure2_slot0;
                var8 = null;
                if(!(var8 != var2)) { _fun0009_ip = 195; continue _fun0009 }
 19:
                var2 = _closure1_slot12;
                var1 = _closure2_slot0;
                var6 = undefined;
                var5 = var2.bind(var6)(var1);
                var2 = var5.bind(var6)();
                var1 = var2.done;
                var4 = global;
                var3 = 11;
                if(var1) { _fun0009_ip = 195; continue _fun0009 }
 57:
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
                if(!var16) { _fun0009_ip = 151; continue _fun0009 }
 119:
                var18 = var4.Date;
                var20 = var14.joinedAt;
                var17 = var18.prototype;
                var17 = Object.create(var17, {constructor: {value: var18}});
                var21 = var17;
                var16 = new var21[var18](var20, var19);
                var15 = var16 instanceof Object ? var16 : var17;
 151:
                var1['joinedAt'] = var15;
                var14 = var14.premiumSubscriberCount;
                var1['premiumSubscriberCount'] = var14;
                var1 = var11.bind(var12)(var13, var1);
                var9[var10] = var1;
                var10 = var5.bind(var6)();
                var1 = var10.done;
                var2 = var10;
                if(!var1) { _fun0009_ip = 57; continue _fun0009 }
 195:
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
 0:
                var7 = arg1;
                var3 = _closure1_slot12;
                var2 = _closure2_slot0;
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var3 = var5.bind(var1)();
                var2 = var3.done;
                var4 = 11;
                if(var2) { _fun0010_ip = 96; continue _fun0010 }
 39:
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
                if(!var2) { _fun0010_ip = 39; continue _fun0010 }
 96:
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
 0:
            var3 = arg2;
            var2 = arg1;
            var2 = var2.guilds;
            var _closure2_slot0 = var2;
            var4 = var2.length;
            var2 = 0;
            if(!(var2 !== var4)) { _fun0011_ip = 45; continue _fun0011 }
 29:
            var2 = var3.reset;
            var1 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var7 = arg1;
                    var3 = _closure1_slot12;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = var5.bind(var1)();
                    var2 = var3.done;
                    var4 = 11;
                    if(var2) { _fun0012_ip = 96; continue _fun0012 }
 39:
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
                    if(!var2) { _fun0012_ip = 39; continue _fun0012 }
 96:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
 45:
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
 0:
            var3 = arg2;
            var1 = arg1;
            var1 = var1.guild;
            var2 = var1.unavailable;
            if(var2) { _fun0013_ip = 36; continue _fun0013 }
 20:
            var2 = var3.remove;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
 36:
            var1 = undefined;
            return var1;
        }
    };
    var7['GUILD_DELETE'] = var4;
    var2 = function GUILD_MEMBER_ADD(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
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
            if(!(var5 === var2)) { _fun0014_ip = 152; continue _fun0014 }
 58:
            var5 = null;
            if(!(var5 != var7)) { _fun0014_ip = 152; continue _fun0014 }
 64:
            var8 = 'string';
            var2 = typeof var9;
            var6 = var9;
            if(!(var8 === var2)) { _fun0014_ip = 109; continue _fun0014 }
 78:
            var2 = global;
            var2 = var2.Date;
            var8 = var2.prototype;
            var8 = Object.create(var8, {constructor: {value: var2}});
            var12 = var8;
            var11 = var9;
            var2 = new var12[var2](var11, var10);
            var6 = var2 instanceof Object ? var2 : var8;
 109:
            var2 = var7.joinedAt;
            var2 = var6 !== var2;
            if(!var2) { _fun0014_ip = 126; continue _fun0014 }
 122:
            var2 = var5 != var6;
 126:
            if(!var2) { _fun0014_ip = 152; continue _fun0014 }
 129:
            var2 = var4.set;
            var5 = _closure1_slot8;
            var1 = undefined;
            var1 = var5.bind(var1)(var7, var6);
            var1 = var2.bind(var4)(var3, var1);
 152:
            var1 = undefined;
            return var1;
        }
    };
    var7['GUILD_MEMBER_ADD'] = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.GuildStoreExperiment;
    var2 = var4.getCachedKvStoreMode;
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
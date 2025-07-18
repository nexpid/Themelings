// app/stores/GuildRoleStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var1 = native4;
    var _closure1_slot1 = var1;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
            var9 = _closure1_slot13;
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
            var7 = _closure1_slot13;
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
    var _closure1_slot12 = var1;
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
    var _closure1_slot13 = var1;
    var1 = function rebuildCachedGuilds(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = {};
            _closure1_slot9 = var1;
            var3 = _closure1_slot12;
            var1 = undefined;
            var2 = arg1;
            var5 = var3.bind(var1)(var2);
            var3 = var5.bind(var1)();
            var2 = var3.done;
            var4 = 6;
            if(var2) { _fun0005_ip = 134; continue _fun0005 }
 38:
            var2 = var3.value;
            var8 = var2.id;
            var7 = var2.roles;
            var11 = var7;
            for(var2 in var11)
 65:
            {
 74:
                var13 = var2;
                var15 = _closure1_slot1;
                var14 = _closure1_slot2;
                var14 = var14[var4];
                var15 = var15.bind(var1)(var14);
                var14 = var15.fromSerializedGuildRoleInPlace;
                var13 = var7[var13];
                var13 = var14.bind(var15)(var13);
                _fun0005_ip = 65; continue _fun0005;
            }
 111:
            var2 = _closure1_slot9;
            var2[var8] = var7;
            var7 = var5.bind(var1)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0005_ip = 38; continue _fun0005 }
 134:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var9 = function handleGuildRoleCreateOrUpdate(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var11 = var1.role;
            var1 = _closure1_slot9;
            var3 = var1[var4];
            var7 = _closure1_slot1;
            var1 = _closure1_slot2;
            var6 = 6;
            var5 = var1[var6];
            var1 = undefined;
            var7 = var7.bind(var1)(var5);
            var5 = var7.fromServerRole;
            var8 = var5.bind(var7)(var11);
            var5 = null;
            var9 = var5 == var3;
            var7 = undefined;
            if(var9) { _fun0006_ip = 78; continue _fun0006 }
 69:
            var9 = var8.id;
            var7 = var3[var9];
 78:
            if(!(var5 != var7)) { _fun0006_ip = 111; continue _fun0006 }
 82:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 7;
            var5 = var10[var5];
            var5 = var9.bind(var1)(var5);
            var5 = var5.bind(var1)(var8, var7);
            if(var5) { _fun0006_ip = 210; continue _fun0006 }
 111:
            var8 = {};
            var13 = var8;
            var12 = var3;
            var3 = copyDataProperties(var13, var12);
            var9 = var11.id;
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = var3[var6];
            var10 = var5.bind(var1)(var7);
            var7 = var10.fromServerRole;
            var7 = var7.bind(var10)(var11);
            var8[var9] = var7;
            var3 = var3[var6];
            var6 = var5.bind(var1)(var3);
            var5 = var6.sortClientRoles;
            var3 = global;
            var7 = var3.Object;
            var3 = var7.values;
            var3 = var3.bind(var7)(var8);
            var3 = var5.bind(var6)(var4, var3);
            var2 = _closure1_slot9;
            var2[var4] = var3;
            return var1;
 210:
            var1 = false;
            return var1;
        }
    };
    var2 = global;
    var11 = var2.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.getGuildEveryoneRoleId;
    var _closure1_slot8 = var8;
    var8 = {};
    var _closure1_slot9 = var8;
    var10 = var2.Object;
    var8 = var10.freeze;
    var2 = {};
    var2 = var8.bind(var10)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildRoleStore() {
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
                var1 = _closure1_slot11;
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
        var1 = 'getAllGuildsRoles';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getRoles';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = _closure1_slot9;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0008_ip = 24; continue _fun0008 }
 20:
                var1 = _closure1_slot10;
 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getRole';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var2 = _closure1_slot9;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0009_ip = 32; continue _fun0009 }
 25:
                var2 = arg2;
                var1 = var3[var2];
 32:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getEveryoneRole';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = arg1;
                var4 = _closure1_slot8;
                var1 = undefined;
                var5 = var4.bind(var1)(var2);
                var4 = _closure1_slot9;
                var3 = var2.id;
                var4 = var4[var3];
                var3 = null;
                var6 = var3 == var4;
                if(var6) { _fun0010_ip = 43; continue _fun0010 }
 39:
                var1 = var4[var5];
 43:
                if(!(var3 != var1)) { _fun0010_ip = 49; continue _fun0010 }
 47:
                return var1;
 49:
                var1 = global;
                var3 = var1.Error;
                var5 = var2.id;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Guild ';
                var1 = ' does not have an @everyone role';
                var8 = var4.bind(var2)(var5, var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var9 = var2;
                var1 = new var9[var3](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildRoleStore';
    var8['displayName'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleBackgroundSync(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var3 = _closure1_slot12;
            var1 = arg1;
            var2 = var1.guilds;
            var1 = undefined;
            var9 = var3.bind(var1)(var2);
            var3 = var9.bind(var1)();
            var2 = var3.done;
            var8 = 6;
            var7 = null;
            var6 = 'partial';
            var5 = 'unavailable';
            var4 = var3;
            var3 = undefined;
            if(var2) { _fun0011_ip = 273; continue _fun0011 }
 56:
            var13 = var4.value;
            var11 = _closure1_slot9;
            var2 = var13.id;
            var2 = var11[var2];
            if(!(var7 != var2)) { _fun0011_ip = 271; continue _fun0011 }
 81:
            var2 = var13.data_mode;
            if(!(var5 !== var2)) { _fun0011_ip = 271; continue _fun0011 }
 94:
            var12 = _closure1_slot9;
            var11 = var13.id;
            var2 = var13.data_mode;
            if(!(var6 !== var2)) { _fun0011_ip = 155; continue _fun0011 }
 113:
            var14 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var16 = var14.bind(var1)(var2);
            var15 = var16.sortServerRoles;
            var14 = var13.id;
            var2 = var13.roles;
            var2 = var15.bind(var16)(var14, var2);
            _fun0011_ip = 247; continue _fun0011;
 155:
            var15 = _closure1_slot1;
            var14 = _closure1_slot2;
            var14 = var14[var8];
            var19 = var15.bind(var1)(var14);
            var18 = var19.filterRoleDeletes;
            var17 = var13.id;
            var15 = _closure1_slot9;
            var14 = var13.id;
            var14 = var15[var14];
            var16 = var14;
            if(!(var7 == var14)) { _fun0011_ip = 207; continue _fun0011 }
 203:
            var16 = _closure1_slot10;
 207:
            var15 = var13.partial_updates;
            var21 = var15.roles;
            var13 = var13.partial_updates;
            var20 = var13.deleted_role_ids;
            var24 = var19;
            var23 = var17;
            var22 = var16;
            var2 = var24[var18](var23, var22, var21, var20, var19);
            var3 = var14;
 247:
            var12[var11] = var2;
            var11 = var9.bind(var1)();
            var2 = var11.done;
            var4 = var11;
            if(var2) { _fun0011_ip = 273; continue _fun0011 }
 266:
            _fun0011_ip = 56; continue _fun0011;
 271:
            return var1;
 273:
            return var1;
        }
    };
    var2['BACKGROUND_SYNC'] = var10;
    var10 = function handleConnectionOpen(arg1) {
        var1 = {};
        _closure1_slot9 = var1;
        var1 = arg1;
        var3 = var1.guilds;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var4 = arg1;
                var3 = _closure1_slot9;
                var2 = var4.id;
                var6 = var4.roles;
                var1 = global;
                var1 = var1.Array;
                var1 = var6 instanceof var1;
                if(var1) { _fun0012_ip = 44; continue _fun0012 }
 36:
                var1 = var4.roles;
                _fun0012_ip = 89; continue _fun0012;
 44:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 6;
                var6 = var6[var5];
                var5 = undefined;
                var7 = var7.bind(var5)(var6);
                var6 = var7.sortServerRoles;
                var5 = var4.id;
                var4 = var4.roles;
                var1 = var6.bind(var7)(var5, var4);
 89:
                var3[var2] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var10;
    var10 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var2 = var1.allGuildsRoles;
        _closure1_slot9 = var2;
        var1 = undefined;
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var10;
    var10 = function handleCacheLoaded(arg1) {
        var3 = _closure1_slot14;
        var1 = arg1;
        var2 = var1.guilds;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['CACHE_LOADED'] = var10;
    var10 = function handleCacheLoadedLazy(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var2 = var1.guilds;
            var3 = var2.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0013_ip = 42; continue _fun0013 }
 20:
            var3 = _closure1_slot14;
            var2 = var1.guilds;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
 42:
            var1 = false;
            return var1;
        }
    };
    var2['CACHE_LOADED_LAZY'] = var10;
    var10 = function handleGuildCreate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot9;
            var1 = var4.guild;
            var2 = var1.id;
            var1 = var4.guild;
            var6 = var1.roles;
            var1 = global;
            var1 = var1.Array;
            var1 = var6 instanceof var1;
            if(var1) { _fun0014_ip = 59; continue _fun0014 }
 46:
            var1 = var4.guild;
            var1 = var1.roles;
            _fun0014_ip = 114; continue _fun0014;
 59:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var5 = 6;
            var6 = var6[var5];
            var5 = undefined;
            var7 = var7.bind(var5)(var6);
            var6 = var7.sortServerRoles;
            var5 = var4.guild;
            var5 = var5.id;
            var4 = var4.guild;
            var4 = var4.roles;
            var1 = var6.bind(var7)(var5, var4);
 114:
            var3[var2] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_CREATE'] = var10;
    var10 = function handleGuildUpdate(arg1) {
        var2 = arg1;
        var4 = _closure1_slot9;
        var3 = var2.guild;
        var3 = var3.id;
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 6;
        var5 = var5[var1];
        var1 = undefined;
        var7 = var6.bind(var1)(var5);
        var6 = var7.sortServerRoles;
        var5 = var2.guild;
        var5 = var5.id;
        var2 = var2.guild;
        var2 = var2.roles;
        var2 = var6.bind(var7)(var5, var2);
        var4[var3] = var2;
        return var1;
    };
    var2['GUILD_UPDATE'] = var10;
    var10 = function handleDeleteGuild(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var1 = var1.guild;
            var4 = _closure1_slot9;
            var3 = var1.id;
            var4 = var4[var3];
            var3 = null;
            if(!(var3 != var4)) { _fun0015_ip = 56; continue _fun0015 }
 30:
            var3 = var1.unavailable;
            if(var3) { _fun0015_ip = 56; continue _fun0015 }
 39:
            var2 = _closure1_slot9;
            var1 = var1.id;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
 56:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_DELETE'] = var10;
    var2['GUILD_ROLE_CREATE'] = var9;
    var2['GUILD_ROLE_UPDATE'] = var9;
    var4 = function handleGuildRoleDelete(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var4 = var1.roleId;
            var2 = _closure1_slot9;
            var5 = var2[var3];
            var2 = null;
            if(!(var2 != var5)) { _fun0016_ip = 59; continue _fun0016 }
 31:
            var2 = {};
            var7 = var2;
            var6 = var5;
            var5 = copyDataProperties(var7, var6);
            var4 = delete var2[var4];
            var1 = _closure1_slot9;
            var1[var3] = var2;
            var1 = undefined;
            return var1;
 59:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_ROLE_DELETE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/GuildRoleStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
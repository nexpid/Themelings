// app/stores/GuildRoleStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportAll;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
    var _closure1_slot10 = var1;
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
    var _closure1_slot11 = var1;
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function createGuildRoleRecordFromRust(arg1) {
        var5 = arg1;
        var4 = _closure1_slot7;
        var3 = _closure1_slot9;
        var2 = {};
        var9 = var2;
        var8 = var5;
        var6 = copyDataProperties(var9, var8);
        var7 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 9;
        var6 = var6[var1];
        var1 = undefined;
        var7 = var7.bind(var1)(var6);
        var6 = var7.deserialize;
        var5 = var5.permissions;
        var6 = var6.bind(var7)(var5);
        var5 = 'permissions';
        var2[var5] = var6;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function syncRoles(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var7 = arg2;
            var3 = arg3;
            var2 = var7.op;
            var1 = 'update';
            var1 = var1 === var2;
            if(!var1) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var2 = var7.writes;
            var5 = var2.length;
            var2 = 0;
            var1 = var2 === var5;
case 39:
            if(!var1) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var2 = var7.deletes;
            var5 = var2.length;
            var2 = 0;
            var1 = var2 === var5;
case 41:
            if(var1) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var2 = var3.setPartition;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 11;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.fromSyncOperation;
            var1 = var3.getPartition;
            var1 = var1.bind(var3)(var4);
            var1 = var5.bind(var6)(var4, var7, var1);
            var1 = var2.bind(var3)(var4, var1);
case 43:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function checkGuildRolesExist(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var7 = arg2;
            var2 = arg3;
            var1 = var2.partitionLength;
            var2 = var1.bind(var2)(var7);
            var1 = 0;
            if(!(var1 !== var2)) { _fun0006_ip = 45; continue _fun0006 }
case 31:
            var1 = undefined;
            return var1;
case 45:
            var1 = global;
            var3 = var1.Error;
            var1 = var1.HermesInternal;
            var6 = var1.concat;
            var12 = 'Guild data was missing from store for guild ';
            var10 = ': missing roles. (phase: ';
            var9 = arg1;
            var8 = ')';
            var11 = var7;
            var11 = var12[var6](var11, var10, var9, var8, var7);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var12 = var2;
            var1 = new var12[var3](var11, var10);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.constructInPlace;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.LibdiscoreStore;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getGuildEveryoneRoleId;
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildRoleRecordTypeTag;
    var _closure1_slot9 = var4;
    var4 = function(arg1) {
        var4 = function GuildRoleStore(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot2;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot5;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot4;
                var1 = _closure1_slot12;
                var1 = var1.bind(var5)();
                if(var1) { _fun0007_ip = 9; continue _fun0007 }
case 46:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0007_ip = 47; continue _fun0007;
case 9:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot5;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 47:
                var1 = var4.bind(var5)(var6, var1);
                var5 = var1.addKKVDatabase;
                var4 = _closure1_slot13;
                var3 = 'guild_roles';
                var3 = var5.bind(var1)(var3, var4);
                var1['database'] = var3;
                var5 = var1.database;
                var4 = var5.memoizedPartition;
                var3 = function(arg1, arg2) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.sortGuildRoleRecords;
                    var1 = global;
                    var5 = var1.Object;
                    var4 = var5.values;
                    var1 = arg2;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['getSortedRoles'] = var3;
                var4 = var1.database;
                var3 = var4.memoizedPartition;
                var2 = function(arg1, arg2) {
                    var1 = {};
                    var3 = arg2;
                    var4 = var1;
                    var2 = copyDataProperties(var4, var3);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var1['getRolesSnapshot'] = var2;
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
        var1 = 'stateWrapper';
        var5['key'] = var1;
        var1 = function value() {
            var1 = this;
            var1 = var1.database;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'serializeAllGuildRoles';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var3 = var1.database;
            var2 = var3.mapPartitions;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 11;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.toSerializedPartition;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getUnsafeMutableRoles';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var3 = var1.database;
            var2 = var3.getPartition;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getManyRoles';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var1 = this;
            var4 = var1.database;
            var3 = var4.getManyRecords;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getRole';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var1 = this;
            var4 = var1.database;
            var3 = var4.getRecord;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getNumRoles';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var3 = var1.database;
            var2 = var3.partitionLength;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getEveryoneRole';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var3 = _closure1_slot8;
                var2 = undefined;
                var4 = var3.bind(var2)(var1);
                var2 = this;
                var3 = var2.database;
                var2 = var3.getRecord;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1, var4);
                var2 = null;
                if(!(var2 != var1)) { _fun0008_ip = 48; continue _fun0008 }
case 5:
                return var1;
case 48:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var6 = 'Guild does not have an @everyone role';
                var7 = var2;
                var1 = new var7[var3](var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'partitionVersion';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.database;
            var2 = var3.partitionVersion;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var7);
    var4 = 'GuildRoleStore';
    var8['displayName'] = var4;
    var7 = {};
    var4 = function BACKGROUND_SYNC(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var11 = arg2;
            var1 = arg1;
            var3 = var1.guilds;
            var2 = _closure1_slot10;
            var1 = undefined;
            var9 = var2.bind(var1)(var3);
            var3 = var9.bind(var1)();
            var2 = var3.done;
            var8 = 10;
            var7 = 11;
            var6 = 'partial';
            var5 = 'unavailable';
            var4 = null;
            if(var2) { _fun0009_ip = 49; continue _fun0009 }
case 50:
            var14 = var3.value;
            var12 = var11.getNullablePartition;
            var2 = var14.id;
            var19 = var12.bind(var11)(var2);
            var2 = var4 != var19;
            if(!var2) { _fun0009_ip = 51; continue _fun0009 }
case 52:
            var12 = var14.data_mode;
            var2 = var5 !== var12;
case 51:
            if(!var2) { _fun0009_ip = 53; continue _fun0009 }
case 54:
            var13 = var11.setPartition;
            var12 = var14.id;
            var2 = var14.data_mode;
            if(!(var6 !== var2)) { _fun0009_ip = 55; continue _fun0009 }
case 56:
            var15 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var17 = var15.bind(var1)(var2);
            var16 = var17.fromServerArray;
            var15 = var14.id;
            var2 = var14.roles;
            var2 = var16.bind(var17)(var15, var2);
            _fun0009_ip = 57; continue _fun0009;
case 55:
            var16 = _closure1_slot0;
            var15 = _closure1_slot1;
            var15 = var15[var8];
            var18 = var16.bind(var1)(var15);
            var17 = var18.filterRoleDeletes;
            var23 = var14.id;
            var15 = var14.partial_updates;
            var21 = var15.roles;
            var14 = var14.partial_updates;
            var20 = var14.deleted_role_ids;
            var24 = var18;
            var22 = var19;
            var2 = var24[var17](var23, var22, var21, var20, var19);
case 57:
            var2 = var13.bind(var11)(var12, var2);
case 53:
            var12 = var9.bind(var1)();
            var2 = var12.done;
            var3 = var12;
            if(!var2) { _fun0009_ip = 50; continue _fun0009 }
case 49:
            return var1;
        }
    };
    var7['BACKGROUND_SYNC'] = var4;
    var4 = function OVERLAY_INITIALIZE(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var7 = arg2;
            var1 = var7.clear;
            var1 = var1.bind(var7)();
            var3 = _closure1_slot10;
            var1 = arg1;
            var2 = var1.serializedGuildRoles;
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var3 = var5.bind(var1)();
            var2 = var3.done;
            var4 = 11;
            if(var2) { _fun0010_ip = 58; continue _fun0010 }
case 59:
            var2 = var3.value;
            var9 = var2.partitionKey;
            var11 = var2.values;
            var8 = var7.setPartition;
            var10 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var4];
            var10 = var10.bind(var1)(var2);
            var2 = var10.fromSerializedPartition;
            var2 = var2.bind(var10)(var9, var11);
            var2 = var8.bind(var7)(var9, var2);
            var8 = var5.bind(var1)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0010_ip = 59; continue _fun0010 }
case 58:
            return var1;
        }
    };
    var7['OVERLAY_INITIALIZE'] = var4;
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
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var7 = arg2;
            var3 = var1.guilds;
            var4 = var1.unavailableGuilds;
            var1 = global;
            var5 = var1.Set;
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var12 = var2.bind(var3)(var1);
            var2 = var5.prototype;
            var2 = Object.create(var2, {constructor: {value: var5}});
            var13 = var2;
            var1 = new var13[var5](var12, var11);
            var8 = var1 instanceof Object ? var1 : var2;
            var2 = _closure1_slot10;
            var1 = undefined;
            var5 = var2.bind(var1)(var4);
            var4 = var5.bind(var1)();
            var2 = var4.done;
            if(var2) { _fun0011_ip = 60; continue _fun0011 }
case 61:
            var9 = var4.value;
            var2 = var8.add;
            var2 = var2.bind(var8)(var9);
            var9 = var5.bind(var1)();
            var2 = var9.done;
            var4 = var9;
            if(!var2) { _fun0011_ip = 61; continue _fun0011 }
case 60:
            var4 = _closure1_slot10;
            var2 = var7.getPartitionKeys;
            var2 = var2.bind(var7)();
            var5 = var4.bind(var1)(var2);
            var4 = var5.bind(var1)();
            var2 = var4.done;
            if(var2) { _fun0011_ip = 62; continue _fun0011 }
case 63:
            var9 = var4.value;
            var2 = var8.has;
            var2 = var2.bind(var8)(var9);
            if(var2) { _fun0011_ip = 16; continue _fun0011 }
case 64:
            var2 = var7.removePartition;
            var2 = var2.bind(var7)(var9);
case 16:
            var9 = var5.bind(var1)();
            var2 = var9.done;
            var4 = var9;
            if(!var2) { _fun0011_ip = 63; continue _fun0011 }
case 62:
            var2 = _closure1_slot10;
            var5 = var2.bind(var1)(var3);
            var3 = var5.bind(var1)();
            var2 = var3.done;
            var4 = 'connection_open';
            if(var2) { _fun0011_ip = 65; continue _fun0011 }
case 66:
            var2 = var3.value;
            var8 = var2.id;
            var9 = _closure1_slot14;
            var2 = var2.roles;
            var2 = var9.bind(var1)(var8, var2, var7);
            var2 = _closure1_slot15;
            var2 = var2.bind(var1)(var4, var8, var7);
            var8 = var5.bind(var1)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0011_ip = 66; continue _fun0011 }
case 65:
            return var1;
        }
    };
    var7['CONNECTION_OPEN'] = var4;
    var4 = function CACHE_LOADED(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var8 = arg2;
            var1 = arg1;
            var3 = var1.guilds;
            var1 = var8.clear;
            var1 = var1.bind(var8)();
            var2 = _closure1_slot10;
            var1 = undefined;
            var6 = var2.bind(var1)(var3);
            var3 = var6.bind(var1)();
            var2 = var3.done;
            var5 = 11;
            var4 = 'cache_loaded';
            if(var2) { _fun0012_ip = 67; continue _fun0012 }
case 50:
            var2 = var3.value;
            var9 = var2.id;
            var12 = var2.roles;
            var10 = var8.setPartition;
            var11 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var5];
            var11 = var11.bind(var1)(var2);
            var2 = var11.fromSerializedPartition;
            var2 = var2.bind(var11)(var9, var12);
            var2 = var10.bind(var8)(var9, var2);
            var2 = _closure1_slot15;
            var2 = var2.bind(var1)(var4, var9, var8);
            var9 = var6.bind(var1)();
            var2 = var9.done;
            var3 = var9;
            if(!var2) { _fun0012_ip = 50; continue _fun0012 }
case 67:
            return var1;
        }
    };
    var7['CACHE_LOADED'] = var4;
    var4 = function CACHE_LOADED_LAZY(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var8 = arg2;
            var2 = var1.guilds;
            var3 = var2.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0013_ip = 68; continue _fun0013 }
case 69:
            var2 = var8.clear;
            var2 = var2.bind(var8)();
            var2 = _closure1_slot10;
            var1 = var1.guilds;
            var6 = undefined;
            var5 = var2.bind(var6)(var1);
            var2 = var5.bind(var6)();
            var1 = var2.done;
            var4 = 11;
            var3 = 'cache_loaded_lazy';
            if(var1) { _fun0013_ip = 68; continue _fun0013 }
case 70:
            var1 = var2.value;
            var9 = var1.id;
            var12 = var1.roles;
            var10 = var8.setPartition;
            var11 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var4];
            var11 = var11.bind(var6)(var1);
            var1 = var11.fromSerializedPartition;
            var1 = var1.bind(var11)(var9, var12);
            var1 = var10.bind(var8)(var9, var1);
            var1 = _closure1_slot15;
            var1 = var1.bind(var6)(var3, var9, var8);
            var9 = var5.bind(var6)();
            var1 = var9.done;
            var2 = var9;
            if(!var1) { _fun0013_ip = 70; continue _fun0013 }
case 68:
            var1 = undefined;
            return var1;
        }
    };
    var7['CACHE_LOADED_LAZY'] = var4;
    var4 = function GUILD_CREATE(arg1, arg2) {
        var5 = arg2;
        var1 = arg1;
        var1 = var1.guild;
        var4 = var1.id;
        var6 = var1.roles;
        var3 = _closure1_slot14;
        var1 = undefined;
        var3 = var3.bind(var1)(var4, var6, var5);
        var3 = _closure1_slot15;
        var2 = 'guild_create';
        var2 = var3.bind(var1)(var2, var4, var5);
        return var1;
    };
    var7['GUILD_CREATE'] = var4;
    var4 = function GUILD_UPDATE(arg1, arg2) {
        var5 = arg2;
        var1 = arg1;
        var1 = var1.guild;
        var4 = var1.id;
        var7 = var1.roles;
        var3 = var5.setPartition;
        var6 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var6 = var6.bind(var1)(var2);
        var2 = var6.fromServerArray;
        var2 = var2.bind(var6)(var4, var7);
        var2 = var3.bind(var5)(var4, var2);
        return var1;
    };
    var7['GUILD_UPDATE'] = var4;
    var4 = function GUILD_DELETE(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var3 = arg2;
            var1 = arg1;
            var1 = var1.guild;
            var2 = var1.id;
            var1 = var1.unavailable;
            if(var1) { _fun0014_ip = 71; continue _fun0014 }
case 40:
            var1 = var3.removePartition;
            var1 = var1.bind(var3)(var2);
case 71:
            var1 = undefined;
            return var1;
        }
    };
    var7['GUILD_DELETE'] = var4;
    var4 = function GUILD_ROLE_CREATE(arg1, arg2) {
        var2 = arg1;
        var6 = arg2;
        var5 = var6.setRecord;
        var4 = var2.guildId;
        var1 = var2.role;
        var3 = var1.id;
        var8 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 11;
        var7 = var7[var1];
        var1 = undefined;
        var9 = var8.bind(var1)(var7);
        var8 = var9.fromServer;
        var7 = var2.guildId;
        var2 = var2.role;
        var2 = var8.bind(var9)(var7, var2);
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var7['GUILD_ROLE_CREATE'] = var4;
    var4 = function GUILD_ROLE_UPDATE(arg1, arg2) {
        var2 = arg1;
        var6 = arg2;
        var5 = var6.setRecord;
        var4 = var2.guildId;
        var1 = var2.role;
        var3 = var1.id;
        var8 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 11;
        var7 = var7[var1];
        var1 = undefined;
        var9 = var8.bind(var1)(var7);
        var8 = var9.fromServer;
        var7 = var2.guildId;
        var2 = var2.role;
        var2 = var8.bind(var9)(var7, var2);
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var7['GUILD_ROLE_UPDATE'] = var4;
    var2 = function GUILD_ROLE_DELETE(arg1, arg2) {
        var1 = arg1;
        var4 = arg2;
        var3 = var1.guildId;
        var2 = var1.roleId;
        var1 = var4.removeRecord;
        var1 = var1.bind(var4)(var3, var2);
        var1 = undefined;
        return var1;
    };
    var7['GUILD_ROLE_DELETE'] = var2;
    var2 = 12;
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
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/GuildRoleStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
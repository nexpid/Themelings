// app/modules/app_database/modules/GuildEmojis.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
            var9 = _closure1_slot7;
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
            var7 = _closure1_slot7;
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
    var _closure1_slot6 = var1;
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
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var5[var4];
    var7 = var6.bind(var1)(var4);
    var4 = var7.prototype;
    var6 = Object.create(var4, {constructor: {value: var7}});
    var11 = 'GuildEmojis';
    var12 = var6;
    var4 = new var12[var7](var11, var10);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot5 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function GuildEmojis() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot3;
            var2 = _closure2_slot1;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var2 = {};
            var5 = function BACKGROUND_SYNC(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleBackgroundSync;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['BACKGROUND_SYNC'] = var5;
            var5 = function CONNECTION_OPEN(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleConnectionOpen;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['CONNECTION_OPEN'] = var5;
            var5 = function GUILD_CREATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildCreate;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_CREATE'] = var5;
            var5 = function GUILD_DELETE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildDelete;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_DELETE'] = var5;
            var5 = function GUILD_EMOJIS_UPDATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildEmojisUpdate;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_EMOJIS_UPDATE'] = var5;
            var4 = function GUILD_UPDATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildUpdate;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_UPDATE'] = var4;
            var3['actions'] = var2;
            return var1;
        };
        var _closure2_slot1 = var3;
        var5 = {};
        var2 = 'getAsync';
        var5['key'] = var2;
        var7 = _closure1_slot2;
        var2 = undefined;
        var1 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 162; continue _fun0004 }
 10:
                    var3 = global;
                    var4 = var3.performance;
                    var2 = var4.now;
                    var7 = var2.bind(var4)();
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 4;
                    var5 = var5[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.emojis;
                    var2 = arg1;
                    var5 = var5.bind(var6)(var2);
                    var2 = var5.getMapEntries;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=80);
 78:
                    return var2;
 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 159; continue _fun0004 }
 86:
                    var6 = var3.performance;
                    var5 = var6.now;
                    var6 = var5.bind(var6)();
                    var5 = _closure1_slot5;
                    var4 = var5.log;
                    var14 = var6 - var7;
                    var12 = var2.length;
                    var3 = var3.HermesInternal;
                    var8 = var3.concat;
                    var15 = 'asynchronously loaded in ';
                    var13 = 'ms (guilds: ';
                    var11 = ')';
                    var3 = var15[var8](var14, var13, var12, var11, var10);
                    var3 = var4.bind(var5)(var3);
                    return var2;
 159:
                    return var2;
 162:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var7.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var1 = function getAsync() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(12);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleConnectionOpen';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var6 = arg2;
                var5 = this;
                var3 = _closure1_slot6;
                var1 = arg1;
                var2 = var1.guilds;
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0005_ip = 73; continue _fun0005 }
 41:
                var7 = var3.value;
                var2 = var5.handleOneGuildCreate;
                var2 = var2.bind(var5)(var7, var6);
                var7 = var4.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0005_ip = 41; continue _fun0005 }
 73:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleGuildCreate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = this;
            var3 = var4.handleOneGuildCreate;
            var1 = arg1;
            var2 = var1.guild;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handleGuildUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var1 = arg1;
            var5 = this;
            var4 = var5.replace;
            var2 = var1.guild;
            var3 = var2.id;
            var1 = var1.guild;
            var2 = var1.emojis;
            var1 = arg2;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleGuildDelete';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = this;
            var3 = var4.delete;
            var1 = arg1;
            var1 = var1.guild;
            var2 = var1.id;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'handleGuildEmojisUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var1 = arg1;
            var5 = this;
            var4 = var5.replace;
            var3 = var1.guildId;
            var2 = var1.emojis;
            var1 = arg2;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'handleBackgroundSync';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var6 = arg1;
            var2 = this;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var3 = var6.promisesForBackgroundSyncToWaitOn;
            var2 = var3.push;
            var4 = global;
            var5 = var4.Promise;
            var4 = var5.all;
            var7 = var6.emojis;
            var6 = var7.map;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.dataMode;
                    var1 = 'unavailable';
                    if(!(var1 !== var3)) { _fun0006_ip = 305; continue _fun0006 }
 20:
                    var3 = var2.dataMode;
                    var1 = 'full';
                    if(!(var1 !== var3)) { _fun0006_ip = 201; continue _fun0006 }
 37:
                    var1 = var2.updatedEntities;
                    var1 = var1.length;
                    var4 = 0;
                    var1 = var1 > var4;
                    if(var1) { _fun0006_ip = 72; continue _fun0006 }
 57:
                    var3 = var2.deletedEntityIds;
                    var3 = var3.length;
                    var1 = var3 > var4;
 72:
                    if(!var1) { _fun0006_ip = 301; continue _fun0006 }
 78:
                    var4 = _closure1_slot5;
                    var3 = var4.verbose;
                    var1 = var2.updatedEntities;
                    var15 = var1.length;
                    var1 = var2.deletedEntityIds;
                    var13 = var1.length;
                    var11 = var2.guildId;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var16 = 'Updating ';
                    var14 = ' and deleting ';
                    var12 = ' emojis for ';
                    var1 = var16[var7](var15, var14, var13, var12, var11, var10);
                    var1 = var3.bind(var4)(var1);
                    var7 = _closure3_slot0;
                    var6 = var7.update;
                    var15 = var2.guildId;
                    var14 = var2.updatedEntities;
                    var13 = var2.deletedEntityIds;
                    var12 = _closure3_slot1;
                    var16 = var7;
                    var1 = var16[var6](var15, var14, var13, var12, var11);
                    _fun0006_ip = 301; continue _fun0006;
 201:
                    var4 = _closure1_slot5;
                    var3 = var4.verbose;
                    var1 = var2.entities;
                    var8 = var1.length;
                    var7 = var2.guildId;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var5 = 'Replacing ';
                    var1 = ' emojis for ';
                    var1 = var6.bind(var5)(var8, var1, var7);
                    var1 = var3.bind(var4)(var1);
                    var5 = _closure3_slot0;
                    var4 = var5.replace;
                    var3 = var2.guildId;
                    var2 = var2.entities;
                    var1 = _closure3_slot1;
                    var1 = var4.bind(var5)(var3, var2, var1);
 301:
                    var1 = undefined;
                    return var1;
 305:
                    var1 = global;
                    var2 = var1.Promise;
                    var1 = var2.resolve;
                    var1 = var1.bind(var2)();
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1);
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'handleOneGuildCreate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = arg1;
                var5 = arg2;
                var4 = this;
                var2 = var1.emojis;
                var3 = var2.op;
                var2 = 'full_sync';
                if(!(var2 !== var3)) { _fun0007_ip = 93; continue _fun0007 }
 30:
                var2 = 'update';
                if(!(var2 !== var3)) { _fun0007_ip = 46; continue _fun0007 }
 38:
                var2 = var1.emojis;
                _fun0007_ip = 122; continue _fun0007;
 46:
                var7 = var4.update;
                var11 = var1.id;
                var2 = var1.emojis;
                var10 = var2.writes;
                var2 = var1.emojis;
                var9 = var2.deletes;
                var12 = var4;
                var8 = var5;
                var2 = var12[var7](var11, var10, var9, var8, var7);
                _fun0007_ip = 122; continue _fun0007;
 93:
                var3 = var4.replace;
                var2 = var1.id;
                var1 = var1.emojis;
                var1 = var1.items;
                var1 = var3.bind(var4)(var2, var1, var5);
 122:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'resetInMemoryState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'replace';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.emojisTransaction;
            var2 = arg3;
            var5 = var3.bind(var4)(var2);
            var4 = var5.replaceAll;
            var3 = arg1;
            var2 = arg2;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'delete';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.emojisTransaction;
            var2 = arg2;
            var4 = var3.bind(var4)(var2);
            var3 = var4.delete;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'update';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3, arg4) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var6 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.emojisTransaction;
                var3 = arg4;
                var5 = var4.bind(var5)(var3);
                var4 = var5.putAll;
                var3 = arg2;
                var3 = var4.bind(var5)(var6, var3);
                var3 = _closure1_slot6;
                var2 = arg3;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0008_ip = 112; continue _fun0008 }
 81:
                var7 = var3.value;
                var2 = var5.delete;
                var2 = var2.bind(var5)(var6, var7);
                var7 = var4.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0008_ip = 81; continue _fun0008 }
 112:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[11] = var5;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var12 = var4;
    var2 = new var12[var2](var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 5;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/GuildEmojis.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
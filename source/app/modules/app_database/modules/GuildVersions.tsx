// app/modules/app_database/modules/GuildVersions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
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
            var9 = _closure1_slot10;
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
            var7 = _closure1_slot10;
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
    var _closure1_slot9 = var1;
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
    var _closure1_slot10 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.prototype;
    var5 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'GuildVersions';
    var13 = var5;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot8 = var4;
    var2 = function() {
        var4 = _closure1_slot6;
        var3 = function GuildVersions() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot5;
            var2 = _closure2_slot1;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var2 = global;
            var5 = var2.Map;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var9 = var6;
            var5 = new var9[var5](var8);
            var5 = var5 instanceof Object ? var5 : var6;
            var3['pending'] = var5;
            var2 = var2.Map;
            var5 = var2.prototype;
            var5 = Object.create(var5, {constructor: {value: var2}});
            var9 = var5;
            var2 = new var9[var2](var8);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['committed'] = var2;
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
            var5 = function CHANNEL_CREATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleChannelCreate;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['CHANNEL_CREATE'] = var5;
            var5 = function CHANNEL_DELETE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleChannelDelete;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['CHANNEL_DELETE'] = var5;
            var5 = function CHANNEL_UPDATES(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleChannelUpdates;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['CHANNEL_UPDATES'] = var5;
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
            var5 = function GUILD_ROLE_CREATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildRoleChange;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_ROLE_CREATE'] = var5;
            var5 = function GUILD_ROLE_DELETE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildRoleDelete;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_ROLE_DELETE'] = var5;
            var5 = function GUILD_ROLE_UPDATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildRoleChange;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_ROLE_UPDATE'] = var5;
            var5 = function GUILD_STICKERS_UPDATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildStickersUpdate;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_STICKERS_UPDATE'] = var5;
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
        var2 = 'getCommittedVersions';
        var5['key'] = var2;
        var7 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var5 = undefined;
                    var2 = undefined;
                    var6 = undefined;
case 38: // try_start_0
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 6;
                    var3 = var7[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.guildVersions;
                    var3 = var3.bind(var4)();
                    var2 = var3;
                    var7 = null;
                    if(!(var7 != var3)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var3 = var2;
                    var2 = var3.getMany;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=75);
case 41:
                    return var2;
case 42:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                    var4 = var2.map;
                    var3 = function(arg1) {
                        var2 = arg1;
                        var3 = var2.id;
                        var1 = new Array(2);
                        var1[0] = var3;
                        var2 = var2.version;
                        var1[1] = var2;
                        return var1;
                    };
                    var3 = var4.bind(var2)(var3);
                    var6 = var3;
                    var4 = global;
                    var5 = var4.Object;
                    var4 = var5.fromEntries;
                    if(!(var7 == var3)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                    var3 = new Array(0);
                    _fun0004_ip = 47; continue _fun0004;
case 45:
                    var3 = var6;
case 47:
                    var3 = var4.bind(var5)(var3);
case 48: // try_end0
                    return var3;
case 43:
                    return var2;
case 39:
                    var2 = {};
                    return var2;
case 49: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot8;
                    var3 = var4.warn;
                    var2 = "couldn't load guild versions";
                    var2 = var3.bind(var4)(var2, var5);
                    var2 = {};
                    return var2;
case 36:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var7.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var1 = function getCommittedVersions() {
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
        var1 = new Array(20);
        var1[0] = var5;
        var5 = {};
        var7 = 'remove';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = this;
            var2 = var3.deleteWith;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var2 = var3.commit;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleBackgroundSync';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg2;
                var3 = this;
                var5 = _closure1_slot9;
                var1 = arg1;
                var2 = var1.guilds;
                var1 = undefined;
                var8 = var5.bind(var1)(var2);
                var5 = var8.bind(var1)();
                var2 = var5.done;
                var7 = null;
                var6 = 'unavailable';
                if(var2) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                var2 = var5.value;
                var10 = var2.data_mode;
                if(!(var6 !== var10)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                var12 = var3.updateWith;
                var11 = var2.id;
                var10 = new Array(1);
                var10[0] = var2;
                var10 = var12.bind(var3)(var11, var10);
case 52:
                var12 = _closure1_slot7;
                var11 = var12.getGuild;
                var10 = var2.id;
                var10 = var11.bind(var12)(var10);
                if(!(var7 == var10)) { _fun0005_ip = 54; continue _fun0005 }
case 13:
                var10 = var3.remove;
                var2 = var2.id;
                var2 = var10.bind(var3)(var2, var4);
case 54:
                var10 = var8.bind(var1)();
                var2 = var10.done;
                var5 = var10;
                if(!var2) { _fun0005_ip = 51; continue _fun0005 }
case 50:
                var2 = var3.commit;
                var2 = var2.bind(var3)(var4);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handleConnectionOpen';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = this;
                var1 = var4.reset;
                var1 = var1.bind(var4)();
                var3 = _closure1_slot9;
                var1 = arg1;
                var2 = var1.guilds;
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var3 = var5.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                var8 = var3.value;
                var7 = var4.updateWith;
                var6 = var8.id;
                var2 = new Array(1);
                var2[0] = var8;
                var2 = var7.bind(var4)(var6, var2);
                var6 = var5.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0006_ip = 56; continue _fun0006 }
case 55:
                var3 = var4.commit;
                var2 = arg2;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleGuildCreate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var7 = function entitiesForOperation(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.op;
                        var2 = 'full_sync';
                        if(!(var2 !== var3)) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                        var2 = 'update';
                        if(!(var2 !== var3)) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 7;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.assertNever;
                        var3 = var3.bind(var4)(var1);
                        return var2;
case 59:
                        var2 = var1.writes;
                        return var2;
case 57:
                        var1 = var1.items;
                        return var1;
                    }
                };
                var6 = var1.guild;
                var1 = var1.guild;
                var5 = var1.id;
                var2 = var4.updateWith;
                var1 = new Array(1);
                var1[0] = var6;
                var1 = var2.bind(var4)(var5, var1);
                var3 = var4.updateWith;
                var2 = var6.emojis;
                var1 = undefined;
                var2 = var7.bind(var1)(var2);
                var2 = var3.bind(var4)(var5, var2);
                var3 = var4.updateWith;
                var2 = var6.stickers;
                var2 = var7.bind(var1)(var2);
                var2 = var3.bind(var4)(var5, var2);
                var3 = var4.updateWith;
                var2 = var6.channels;
                var2 = var7.bind(var1)(var2);
                var2 = var3.bind(var4)(var5, var2);
                var3 = var4.updateWith;
                var2 = global;
                var9 = var2.Array;
                var8 = var9.isArray;
                var7 = var6.roles;
                var7 = var8.bind(var9)(var7);
                if(var7) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                var8 = var2.Object;
                var7 = var8.values;
                var2 = var6.roles;
                var2 = var7.bind(var8)(var2);
                _fun0007_ip = 63; continue _fun0007;
case 61:
                var2 = var6.roles;
case 63:
                var2 = var3.bind(var4)(var5, var2);
                var3 = var4.commit;
                var2 = arg2;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'handleGuildUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = arg1;
                var3 = this;
                var5 = var1.guild;
                var1 = var1.guild;
                var4 = var1.id;
                var2 = var3.updateWith;
                var1 = new Array(1);
                var1[0] = var5;
                var1 = var2.bind(var3)(var4, var1);
                var2 = var3.updateWith;
                var1 = var5.emojis;
                var1 = var2.bind(var3)(var4, var1);
                var2 = var3.updateWith;
                var1 = var5.stickers;
                var1 = var2.bind(var3)(var4, var1);
                var2 = var3.updateWith;
                var1 = global;
                var8 = var1.Array;
                var7 = var8.isArray;
                var6 = var5.roles;
                var6 = var7.bind(var8)(var6);
                if(var6) { _fun0009_ip = 64; continue _fun0009 }
case 13:
                var7 = var1.Object;
                var6 = var7.values;
                var1 = var5.roles;
                var1 = var6.bind(var7)(var1);
                _fun0009_ip = 65; continue _fun0009;
case 64:
                var1 = var5.roles;
case 65:
                var1 = var2.bind(var3)(var4, var1);
                var2 = var3.commit;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'handleGuildDelete';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = this;
            var2 = var3.deleteWith;
            var1 = arg1;
            var1 = var1.guild;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            var2 = var3.commit;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'handleGuildRoleChange';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var1 = arg1;
            var3 = this;
            var4 = var3.updateWith;
            var2 = var1.guildId;
            var5 = var1.role;
            var1 = new Array(1);
            var1[0] = var5;
            var1 = var4.bind(var3)(var2, var1);
            var2 = var3.commit;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'handleGuildRoleDelete';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var1 = arg1;
            var3 = this;
            var4 = var3.updateWith;
            var2 = var1.guildId;
            var5 = {};
            var1 = var1.version;
            var5['version'] = var1;
            var1 = new Array(1);
            var1[0] = var5;
            var1 = var4.bind(var3)(var2, var1);
            var2 = var3.commit;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'handleGuildEmojisUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var1 = arg1;
            var3 = this;
            var4 = var3.updateWith;
            var2 = var1.guildId;
            var1 = var1.emojis;
            var1 = var4.bind(var3)(var2, var1);
            var2 = var3.commit;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'handleGuildStickersUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var1 = arg1;
            var3 = this;
            var4 = var3.updateWith;
            var2 = var1.guildId;
            var1 = var1.stickers;
            var1 = var4.bind(var3)(var2, var1);
            var2 = var3.commit;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'handleChannelCreate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = arg1;
                var3 = this;
                var2 = var1.channel;
                var4 = var2.guild_id;
                var2 = null;
                if(!(var2 != var4)) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                var4 = var3.updateWith;
                var2 = var1.channel;
                var2 = var2.guild_id;
                var5 = var1.channel;
                var1 = new Array(1);
                var1[0] = var5;
                var1 = var4.bind(var3)(var2, var1);
case 66:
                var2 = var3.commit;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'handleChannelUpdates';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = this;
                var3 = _closure1_slot9;
                var1 = arg1;
                var2 = var1.channels;
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var3 = var6.bind(var1)();
                var2 = var3.done;
                var5 = null;
                if(var2) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                var9 = var3.value;
                var2 = var9.guild_id;
                if(!(var5 != var2)) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                var8 = var4.updateWith;
                var7 = var9.guild_id;
                var2 = new Array(1);
                var2[0] = var9;
                var2 = var8.bind(var4)(var7, var2);
case 70:
                var7 = var6.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0011_ip = 69; continue _fun0011 }
case 68:
                var3 = var4.commit;
                var2 = arg2;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'handleChannelDelete';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = arg1;
                var3 = this;
                var2 = var1.channel;
                var4 = var2.guild_id;
                var2 = null;
                if(!(var2 != var4)) { _fun0012_ip = 66; continue _fun0012 }
case 67:
                var4 = var3.updateWith;
                var2 = var1.channel;
                var2 = var2.guild_id;
                var5 = var1.channel;
                var1 = new Array(1);
                var1[0] = var5;
                var1 = var4.bind(var3)(var2, var1);
case 66:
                var2 = var3.commit;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'resetInMemoryState';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.reset;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'reset';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = global;
            var3 = var1.Map;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var5 = var4;
            var3 = new var5[var3](var4);
            var3 = var3 instanceof Object ? var3 : var4;
            var2['committed'] = var3;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var5 = var3;
            var1 = new var5[var1](var4);
            var1 = var1 instanceof Object ? var1 : var3;
            var2['pending'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'deleteWith';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var4 = var1.pending;
            var3 = var4.set;
            var2 = arg1;
            var1 = null;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'updateWith';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = arg1;
                var5 = arg2;
                var1 = this;
                var2 = var5.length;
                var7 = 0;
                if(!(var7 !== var2)) { _fun0013_ip = 72; continue _fun0013 }
case 29:
                var2 = global;
                var6 = var2.Math;
                var3 = var6.max;
                var8 = var1.committed;
                var2 = var8.get;
                var8 = var2.bind(var8)(var4);
                var9 = null;
                var10 = var9 != var8;
                var2 = 0;
                if(!var10) { _fun0013_ip = 73; continue _fun0013 }
case 74:
                var2 = var8;
case 73:
                var10 = var1.pending;
                var8 = var10.get;
                var8 = var8.bind(var10)(var4);
                var9 = var9 != var8;
                var7 = 0;
                if(!var9) { _fun0013_ip = 75; continue _fun0013 }
case 76:
                var7 = var8;
case 75:
                var2 = var3.bind(var6)(var2, var7);
                var3 = var1.computeLatestVersion;
                var3 = var3.bind(var1)(var2, var5);
                if(!(var3 > var2)) { _fun0013_ip = 72; continue _fun0013 }
case 77:
                var2 = var1.pending;
                var1 = var2.set;
                var1 = var1.bind(var2)(var4, var3);
case 72:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'computeLatestVersion';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arg1;
                var3 = _closure1_slot9;
                var9 = undefined;
                var2 = arg2;
                var8 = var3.bind(var9)(var2);
                var3 = var8.bind(var9)();
                var2 = var3.done;
                var7 = global;
                var6 = null;
                var4 = var3;
                var3 = var1;
                var1 = var3;
                if(var2) { _fun0014_ip = 78; continue _fun0014 }
case 79:
                var2 = var4.value;
                var11 = var7.Math;
                var10 = var11.max;
                var12 = var2.version;
                var13 = var6 != var12;
                var2 = 0;
                if(!var13) { _fun0014_ip = 70; continue _fun0014 }
case 80:
                var2 = var12;
case 70:
                var3 = var10.bind(var11)(var3, var2);
                var11 = var8.bind(var9)();
                var2 = var11.done;
                var4 = var11;
                var1 = var3;
                if(!var2) { _fun0014_ip = 79; continue _fun0014 }
case 78:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'commit';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = this;
                var2 = var1.pending;
                var2 = var2.size;
                var11 = 0;
                if(!(var2 > var11)) { _fun0015_ip = 81; continue _fun0015 }
case 31:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var9 = undefined;
                var4 = var3.bind(var9)(var2);
                var3 = var4.guildVersionsTransaction;
                var2 = arg1;
                var8 = var3.bind(var4)(var2);
                var3 = _closure1_slot9;
                var2 = var1.pending;
                var7 = var3.bind(var9)(var2);
                var3 = var7.bind(var9)();
                var2 = var3.done;
                var6 = 2;
                var5 = 1;
                var4 = null;
                if(var2) { _fun0015_ip = 82; continue _fun0015 }
case 83:
                var12 = var3.value;
                var2 = _closure1_slot3;
                var2 = var2.bind(var9)(var12, var6);
                var14 = var2[var11];
                var13 = var2[var5];
                if(!(var4 == var13)) { _fun0015_ip = 62; continue _fun0015 }
case 84:
                var2 = var8.delete;
                var2 = var2.bind(var8)(var14);
                var12 = var1.committed;
                var2 = var12.delete;
                var2 = var2.bind(var12)(var14);
                _fun0015_ip = 85; continue _fun0015;
case 62:
                var12 = var8.put;
                var2 = {};
                var2['id'] = var14;
                var2['version'] = var13;
                var2 = var12.bind(var8)(var2);
                var12 = var1.committed;
                var2 = var12.set;
                var2 = var2.bind(var12)(var14, var13);
case 85:
                var12 = var7.bind(var9)();
                var2 = var12.done;
                var3 = var12;
                if(!var2) { _fun0015_ip = 83; continue _fun0015 }
case 82:
                var2 = var1.pending;
                var1 = var2.clear;
                var1 = var1.bind(var2)();
case 81:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[19] = var5;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var5 = Object.create(var4, {constructor: {value: var2}});
    var13 = var5;
    var4 = new var13[var2](var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_database/modules/GuildVersions.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['GuildVersions'] = var2;
    return var1;
})();
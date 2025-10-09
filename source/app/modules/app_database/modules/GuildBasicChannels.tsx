// app/modules/app_database/modules/GuildBasicChannels.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
            var9 = _closure1_slot19;
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
            var7 = _closure1_slot19;
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
    var _closure1_slot18 = var1;
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
    var _closure1_slot19 = var1;
    var1 = function hasBasicChannelChanged(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var1 = null;
            var1 = var1 == var6;
            if(var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = var6.type;
            var2 = var5.type;
            var1 = var3 !== var2;
case 36:
            if(var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var3 = var6.parent_id;
            var2 = var5.parent_id;
            var1 = var3 !== var2;
case 38:
            if(var1) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var4 = _closure1_slot15;
            var3 = var4.computeBasicPermissions;
            var3 = var3.bind(var4)(var6);
            var4 = _closure1_slot15;
            var2 = var4.computeBasicPermissions;
            var2 = var2.bind(var4)(var5);
            var1 = var3 !== var2;
case 40:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.createChannelRecordFromServer;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelLoader;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 12;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'GuildBasicChannels';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot17 = var4;
    var2 = function() {
        var4 = _closure1_slot7;
        var3 = function GuildBasicChannels() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot6;
            var2 = _closure2_slot2;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var2 = null;
            var3['synced'] = var2;
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
            var5 = function GUILD_MEMBER_UPDATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildMemberUpdate;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_MEMBER_UPDATE'] = var5;
            var5 = function GUILD_ROLE_UPDATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildRoleUpdate;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_ROLE_UPDATE'] = var5;
            var5 = function GUILD_UPDATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildUpdate;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_UPDATE'] = var5;
            var5 = function POST_CONNECTION_OPEN() {
                var2 = _closure3_slot0;
                var1 = var2.handlePostConnectionOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2['POST_CONNECTION_OPEN'] = var5;
            var4 = function WRITE_CACHES(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleWriteCaches;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['WRITE_CACHES'] = var4;
            var3['actions'] = var2;
            return var1;
        };
        var _closure2_slot2 = var3;
        var5 = {};
        var2 = 'getAsync';
        var5['key'] = var2;
        var8 = _closure1_slot5;
        var2 = undefined;
        var1 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 42; continue _fun0005 }
case 37:
                    var12 = undefined;
                    var _closure4_slot0 = var12;
                    var3 = global;
                    var5 = var3.performance;
                    var2 = var5.now;
                    var13 = var2.bind(var5)();
                    var6 = var3.Promise;
                    var5 = var6.all;
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var8 = 13;
                    var2 = var11[var8];
                    var14 = var9.bind(var12)(var2);
                    var2 = var14.basicChannels;
                    var14 = var2.bind(var14)(var10);
                    var2 = var14.getKvEntries;
                    var14 = var2.bind(var14)();
                    var2 = new Array(2);
                    var2[0] = var14;
                    var8 = var11[var8];
                    var9 = var9.bind(var12)(var8);
                    var8 = var9.syncedBasicChannels;
                    var9 = var8.bind(var9)(var10);
                    var8 = var9.getKvEntries;
                    var8 = var8.bind(var9)();
                    var2[1] = var8;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=145);
case 43:
                    return var2;
case 44:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var11 = _closure1_slot4;
                    var10 = 2;
                    var5 = var11.bind(var12)(var2, var10);
                    var9 = 0;
                    var6 = var5[var9];
                    var8 = 1;
                    var15 = var5[var8];
                    var14 = var3.performance;
                    var5 = var14.now;
                    var5 = var5.bind(var14)();
                    var17 = var5 - var13;
                    var14 = new Array(0);
                    var13 = new Array(0);
                    var5 = _closure1_slot18;
                    var16 = var5.bind(var12)(var15);
                    var15 = var16.bind(var12)();
                    var5 = var15.done;
                    if(var5) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var18 = var15.value;
                    var5 = _closure1_slot4;
                    var5 = var5.bind(var12)(var18, var10);
                    var19 = var5[var9];
                    var5 = var5[var8];
                    var18 = var13;
                    if(!var5) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                    var18 = var14;
case 49:
                    var5 = var18.push;
                    var5 = var5.bind(var18)(var19);
                    var18 = var16.bind(var12)();
                    var5 = var18.done;
                    var15 = var18;
                    if(!var5) { _fun0005_ip = 48; continue _fun0005 }
case 47:
                    var5 = new Array(2);
                    var5[0] = var14;
                    var5[1] = var13;
                    var5 = var11.bind(var12)(var5, var10);
                    var27 = var5[var9];
                    var5 = var5[var8];
                    var8 = var3.Set;
                    var9 = var8.prototype;
                    var9 = Object.create(var9, {constructor: {value: var8}});
                    var28 = var9;
                    var8 = new var28[var8](var27, var26);
                    var9 = var8 instanceof Object ? var8 : var9;
                    _closure4_slot0 = var9;
                    var8 = this;
                    var8['synced'] = var9;
                    var8 = _closure1_slot17;
                    var7 = var8.verbose;
                    var25 = var6.length;
                    var23 = var9.size;
                    var21 = var5.length;
                    var3 = var3.HermesInternal;
                    var13 = var3.concat;
                    var28 = 'loaded in ';
                    var26 = 'ms (guilds: ';
                    var24 = ', synced: ';
                    var22 = ' unsynced: ';
                    var20 = ')';
                    var27 = var17;
                    var3 = var28[var13](var27, var26, var25, var24, var23, var22, var21, var20, var19);
                    var3 = var7.bind(var8)(var3);
                    var3 = {};
                    var3['all'] = var6;
                    var3['stale'] = var5;
                    var5 = var6.filter;
                    var4 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var4 = arg1;
                            var1 = var4[Symbol.iterator];
                            var4 = var1().next;
                            var6 = var4().value;
                            var2 = var1;
                            var5 = undefined;
                            var2 = var2 === var5;
                            var3 = undefined;
                            if(var2) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                            var3 = var6;
case 51:
                            if(var2) { _fun0006_ip = 53; continue _fun0006 }
case 3:
                            var4 = var4().value;
                            var4 = var1;
                            var2 = var4 === var5;
case 53:
                            if(var2) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                            var1.return();
case 54:
                            var2 = _closure4_slot0;
                            var1 = var2.has;
                            var1 = var1.bind(var2)(var3);
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    var3['channels'] = var4;
                    return var3;
case 45:
                    return var2;
case 42:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var8.bind(var2)(var1);
        var _closure2_slot1 = var1;
        var1 = function getAsync() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(21);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleChannelCreate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var2 = var1.channel;
                var3 = var2.guild_id;
                var2 = null;
                if(!(var2 != var3)) { _fun0007_ip = 54; continue _fun0007 }
case 56:
                var3 = var4.unsync;
                var1 = var1.channel;
                var2 = var1.guild_id;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
case 54:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleChannelDelete';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var2 = var1.channel;
                var3 = var2.guild_id;
                var2 = null;
                if(!(var2 != var3)) { _fun0008_ip = 54; continue _fun0008 }
case 56:
                var3 = var4.unsync;
                var1 = var1.channel;
                var2 = var1.guild_id;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
case 54:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handleChannelUpdates';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var7 = arg2;
                var6 = this;
                var3 = _closure1_slot18;
                var1 = arg1;
                var4 = var1.channels;
                var2 = var4.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.guild_id;
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var2 = var2.bind(var4)(var1);
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                var2 = var3.value;
                var9 = _closure1_slot20;
                var11 = _closure1_slot11;
                var10 = var11.getBasicChannel;
                var8 = var2.id;
                var8 = var10.bind(var11)(var8);
                var8 = var9.bind(var1)(var8, var2);
                if(!var8) { _fun0009_ip = 59; continue _fun0009 }
case 11:
                var8 = var6.unsync;
                var2 = var2.guild_id;
                var2 = var8.bind(var6)(var2, var7);
case 59:
                var8 = var4.bind(var1)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0009_ip = 58; continue _fun0009 }
case 57:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleBackgroundSync';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arg2;
                var _closure3_slot0 = var2;
                var2 = this;
                var _closure3_slot1 = var2;
                var5 = function _loop(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var3 = var2.data_mode;
                        var1 = 'unavailable';
                        if(!(var1 !== var3)) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                        var1 = 'partial';
                        if(!(var1 !== var3)) { _fun0011_ip = 62; continue _fun0011 }
case 63:
                        var5 = _closure3_slot1;
                        var4 = var5.onGuildSync;
                        var3 = var2.id;
                        var1 = _closure3_slot0;
                        var1 = var4.bind(var5)(var3, var1);
                        _fun0011_ip = 60; continue _fun0011;
case 62:
                        var6 = _closure3_slot1;
                        var5 = var6.onGuildUpdate;
                        var4 = var2.id;
                        var3 = var2.partial_updates;
                        var10 = var3.channels;
                        var7 = null;
                        var9 = var7 == var10;
                        var3 = undefined;
                        if(var9) { _fun0011_ip = 64; continue _fun0011 }
case 65:
                        var9 = var10.map;
                        var8 = function(arg1) {
                            var4 = _closure1_slot9;
                            var1 = _closure4_slot0;
                            var3 = var1.id;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var2)(var1, var3);
                            return var1;
                        };
                        var3 = var9.bind(var10)(var8);
case 64:
                        if(!(var7 == var3)) { _fun0011_ip = 57; continue _fun0011 }
case 66:
                        var3 = new Array(0);
case 57:
                        var2 = var2.partial_updates;
                        var2 = var2.deleted_channel_ids;
                        if(!(var7 == var2)) { _fun0011_ip = 67; continue _fun0011 }
case 68:
                        var2 = new Array(0);
case 67:
                        var11 = _closure3_slot0;
                        var15 = var6;
                        var14 = var4;
                        var13 = var3;
                        var12 = var2;
                        var1 = var15[var5](var14, var13, var12, var11, var10);
case 60:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = _closure1_slot18;
                var1 = arg1;
                var2 = var1.guilds;
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0010_ip = 69; continue _fun0010 }
case 28:
                var2 = var3.value;
                var2 = var5.bind(var1)(var2);
                var6 = var4.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0010_ip = 28; continue _fun0010 }
case 69:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'handleConnectionOpen';
        var5['key'] = var7;
        var7 = function handleConnectionOpen(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var6 = arg2;
                var5 = this;
                var3 = _closure1_slot18;
                var1 = arg1;
                var2 = var1.guilds;
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0012_ip = 70; continue _fun0012 }
case 53:
                var7 = var3.value;
                var2 = var5.handleOneGuildCreate;
                var2 = var2.bind(var5)(var7, var6);
                var7 = var4.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0012_ip = 53; continue _fun0012 }
case 70:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'handlePostConnectionOpen';
        var5['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 71; continue _fun0013 }
case 37:
                    var _closure4_slot0 = var4;
                    var2 = undefined;
                    var _closure4_slot2 = var2;
                    var _closure4_slot3 = var2;
                    var _closure4_slot1 = var4;
                    var7 = _closure1_slot8;
                    var6 = var7.lastTimeConnectedChanged;
                    var6 = var6.bind(var7)();
                    _closure4_slot2 = var6;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var6 = 13;
                    var6 = var8[var6];
                    var7 = var7.bind(var2)(var6);
                    var6 = var7.database;
                    var6 = var6.bind(var7)();
                    _closure4_slot3 = var6;
                    var7 = var4.synced;
                    var4 = null;
                    if(!(var4 != var7)) { _fun0013_ip = 72; continue _fun0013 }
case 73:
                    if(!(var4 != var6)) { _fun0013_ip = 72; continue _fun0013 }
case 13:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var4 = 14;
                    var4 = var7[var4];
                    var6 = var6.bind(var2)(var4);
                    var4 = var6.isCacheEnabled;
                    var4 = var4.bind(var6)();
                    if(!var4) { _fun0013_ip = 72; continue _fun0013 }
case 74:
                    var6 = _closure1_slot14;
                    var4 = var6.getGuildIds;
                    var4 = var4.bind(var6)();
                    var7 = var4.filter;
                    var6 = function(arg1) {
                        var1 = _closure4_slot0;
                        var3 = var1.synced;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var6 = var7.bind(var4)(var6);
                    var8 = _closure1_slot17;
                    var7 = var8.verbose;
                    var11 = var6.length;
                    var14 = global;
                    var6 = var14.HermesInternal;
                    var10 = var6.concat;
                    var9 = 'scheduling basic_channel optimstic writes (guilds: ';
                    var6 = ')';
                    var6 = var10.bind(var9)(var11, var6);
                    var6 = var7.bind(var8)(var6);
                    var13 = function* _loop2(arg1) {
                        var1 = function* anon_0__loop2(arg1) {
                            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                                StartGenerator();
                                var2 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(var3) { _fun0014_ip = 75; continue _fun0014 }
case 37:
                                var4 = var2;
                                var _closure6_slot0 = var2;
                                var2 = _closure4_slot1;
                                var3 = var2.synced;
                                var2 = null;
                                if(!(var2 != var3)) { _fun0014_ip = 76; continue _fun0014 }
case 55:
                                var8 = _closure4_slot3;
                                var9 = _closure1_slot1;
                                var7 = _closure1_slot3;
                                var3 = 13;
                                var7 = var7[var3];
                                var3 = undefined;
                                var9 = var9.bind(var3)(var7);
                                var7 = var9.database;
                                var7 = var7.bind(var9)();
                                if(!(var8 === var7)) { _fun0014_ip = 76; continue _fun0014 }
case 77:
                                var8 = _closure4_slot2;
                                var9 = _closure1_slot8;
                                var7 = var9.lastTimeConnectedChanged;
                                var7 = var7.bind(var9)();
                                if(!(var8 === var7)) { _fun0014_ip = 76; continue _fun0014 }
case 78:
                                var7 = _closure4_slot1;
                                var9 = var7.synced;
                                var8 = var9.has;
                                var7 = var4;
                                var7 = var8.bind(var9)(var7);
                                if(var7) { _fun0014_ip = 79; continue _fun0014 }
case 68:
                                var10 = _closure1_slot17;
                                var9 = var10.verbose;
                                var13 = var4;
                                var7 = global;
                                var8 = var7.HermesInternal;
                                var12 = var8.concat;
                                var11 = 'optimstically writing basic_channels (guild: ';
                                var8 = ')';
                                var8 = var12.bind(var11)(var13, var8);
                                var8 = var9.bind(var10)(var8);
case 80: // try_start_0
                                var9 = _closure1_slot12;
                                var8 = var9.loadGuildIds;
                                var10 = var4;
                                var4 = new Array(1);
                                var4[0] = var10;
                                var4 = var8.bind(var9)(var4);
                                SaveGenerator(address=221);
case 81:
                                return var4;
case 82:
                                ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                                if(var8) { _fun0014_ip = 83; continue _fun0014 }
case 84:
                                var10 = _closure4_slot3;
                                var9 = var10.transaction;
                                var8 = function(arg1) {
                                    var4 = _closure4_slot1;
                                    var3 = var4.syncOne;
                                    var2 = _closure6_slot0;
                                    var1 = arg1;
                                    var1 = var3.bind(var4)(var2, var1);
                                    return var1;
                                };
                                var5 = 'handlePostConnectionOpen';
                                var5 = var9.bind(var10)(var8, var5);
                                SaveGenerator(address=256);
case 85:
                                return var5;
case 86:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                                if(var8) { _fun0014_ip = 87; continue _fun0014 }
case 88: // try_end0
                                var8 = var7.Promise;
                                var7 = var8.prototype;
                                var7 = Object.create(var7, {constructor: {value: var8}});
                                var15 = function(arg1) {
                                    var1 = global;
                                    var4 = var1.setTimeout;
                                    var3 = undefined;
                                    var2 = arg1;
                                    var1 = 1000;
                                    var1 = var4.bind(var3)(var2, var1);
                                    return var1;
                                };
                                var16 = var7;
                                var6 = new var16[var8](var15, var14);
                                var6 = var6 instanceof Object ? var6 : var7;
                                SaveGenerator(address=297);
case 89:
                                return var6;
case 90:
                                ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                                if(var7) { _fun0014_ip = 91; continue _fun0014 }
case 92:
                                return var3;
case 91:
                                return var6;
case 87:
                                return var5;
case 83:
                                return var4;
case 93: // catch_target0
                                CatchBlockStart(arg_register=5);
                                var5 = _closure1_slot17;
                                var4 = var5.warn;
                                var2 = "couldn't optimstically write basic_channel:";
                                var2 = var4.bind(var5)(var2, var6);
                                var2 = {};
                                var2['v'] = var3;
                                return var2;
case 79:
                                var2 = 1;
                                return var2;
case 76:
                                var2 = 0;
                                return var2;
case 75:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var3 = _closure1_slot18;
                    var12 = var3.bind(var2)(var4);
                    var4 = var12.bind(var2)();
                    var3 = var4.done;
                    var11 = 1;
                    var10 = 0;
                    var9 = 'iterator is not an object';
                    var8 = 'iterator.throw() did not return an object';
                    var7 = 'throw';
                    var6 = 'iterator.next() did not return an object';
                    var5 = var4;
                    if(var3) { _fun0013_ip = 72; continue _fun0013 }
case 10:
                    var3 = var5.value;
                    var4 = var13.bind(var2)(var3);
                    var3 = var14.Symbol;
                    var3 = var3.iterator;
                    var3 = var4[var3];
                    var15 = var3.bind(var4)();
                    var23 = var15;
                    var22 = var9;
                    var3 = ensureObject(var23, var22);
                    var20 = var15.next;
                    var19 = undefined;
case 26:
                    var4 = var19;
                    var4 = var20.bind(var15)(var4);
                    var23 = var4;
                    var22 = var6;
                    var16 = ensureObject(var23, var22);
                    var3 = var4;
                    var16 = var4.done;
                    if(var16) { _fun0013_ip = 94; continue _fun0013 }
case 95: // try_start_0
                    var16 = generatorSetDelegated();
                    SaveGenerator(address=417);
case 96:
                    return var4;
case 97: // try_end0 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=15);
                    var23 = var15;
                    var22 = var7;
                    var4 = getMethod(var23, var22);
                    if(!(var4 !== var2)) { _fun0013_ip = 98; continue _fun0013 }
case 99:
                    var4 = var4.bind(var15)(var16);
                    var23 = var4;
                    var22 = var8;
                    var16 = ensureObject(var23, var22);
                    var16 = var4.done;
                    if(var16) { _fun0013_ip = 100; continue _fun0013 }
case 101:
                    var16 = generatorSetDelegated();
                    SaveGenerator(address=417);
case 102:
                    return var4;
case 103: // try_start_1
                    ResumeGenerator(result_out_reg=15, return_bool_out_reg=17);
                    var19 = var16;
                    var17 = var18;
                    if(!var17) { _fun0013_ip = 26; continue _fun0013 }
case 104:
                    var19 = var16;
case 105: // try_end1
                    var22 = 'return';
                    var23 = var15;
                    var21 = getMethod(var23, var22);
                    if(!(var21 !== var2)) { _fun0013_ip = 106; continue _fun0013 }
case 107:
                    var17 = var19;
                    var17 = var21.bind(var15)(var17);
                    var22 = 'iterator.return() did not return an object';
                    var23 = var17;
                    var21 = ensureObject(var23, var22);
                    var21 = var17.done;
                    if(var21) { _fun0013_ip = 108; continue _fun0013 }
case 109:
                    var21 = generatorSetDelegated();
                    SaveGenerator(address=417);
case 110:
                    return var17;
case 108:
                    var17 = var17.value;
                    return var17;
case 106:
                    return var16;
case 100:
                    var3 = var4;
                    _fun0013_ip = 94; continue _fun0013;
case 98:
                    var22 = 'return';
                    var23 = var15;
                    var4 = getMethod(var23, var22);
                    if(!(var4 !== var2)) { _fun0013_ip = 111; continue _fun0013 }
case 112:
                    var23 = var4.bind(var15)();
                    var22 = 'iterator.return() did not return an object';
                    var4 = ensureObject(var23, var22);
case 111:
                    var23 = 'yield* delegate must have a .throw() method';
                    var4 = throwTypeError(var23);
                    throw var2;
case 94:
                    var3 = var3.value;
                    if(!(var10 !== var3)) { _fun0013_ip = 72; continue _fun0013 }
case 113:
                    if(!(var11 !== var3)) { _fun0013_ip = 114; continue _fun0013 }
case 115:
                    if(var3) { _fun0013_ip = 116; continue _fun0013 }
case 114:
                    var15 = var12.bind(var2)();
                    var4 = var15.done;
                    var5 = var15;
                    if(var4) { _fun0013_ip = 72; continue _fun0013 }
case 117:
                    _fun0013_ip = 10; continue _fun0013;
case 116:
                    var3 = var3.v;
                    return var3;
case 72:
                    return var2;
case 71:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var2)(var7);
        var _closure2_slot0 = var7;
        var7 = function handlePostConnectionOpen() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'handleGuildCreate';
        var5['key'] = var7;
        var7 = function handleGuildCreate(arg1, arg2) {
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
        var1[7] = var5;
        var5 = {};
        var7 = 'handleOneGuildCreate';
        var5['key'] = var7;
        var7 = function handleOneGuildCreate(arg1, arg2) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = arg1;
                var4 = arg2;
                var3 = this;
                var2 = var1.id;
                var1 = var1.channels;
                var6 = var1.op;
                var5 = 'full_sync';
                if(!(var5 !== var6)) { _fun0015_ip = 118; continue _fun0015 }
case 119:
                var5 = 'update';
                if(!(var5 === var6)) { _fun0015_ip = 40; continue _fun0015 }
case 120:
                var6 = var3.onGuildUpdate;
                var9 = var1.writes;
                var8 = var1.deletes;
                var11 = var3;
                var10 = var2;
                var7 = var4;
                var1 = var11[var6](var10, var9, var8, var7, var6);
                _fun0015_ip = 40; continue _fun0015;
case 118:
                var1 = var3.onGuildSync;
                var1 = var1.bind(var3)(var2, var4);
case 40:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'handleGuildUpdate';
        var5['key'] = var7;
        var7 = function handleGuildUpdate(arg1, arg2) {
            var4 = this;
            var3 = var4.unsync;
            var1 = arg1;
            var1 = var1.guild;
            var2 = var1.id;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'handleGuildDelete';
        var5['key'] = var7;
        var7 = function handleGuildDelete(arg1, arg2) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var2 = var1.guild;
                var3 = var2.unavailable;
                var2 = true;
                if(!(var2 !== var3)) { _fun0016_ip = 54; continue _fun0016 }
case 31:
                var3 = var4.delete;
                var1 = var1.guild;
                var2 = var1.id;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
case 54:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'handleGuildRoleUpdate';
        var5['key'] = var7;
        var7 = function handleGuildRoleUpdate(arg1, arg2) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var5 = var1.role;
                var8 = _closure1_slot13;
                var7 = var8.getRole;
                var3 = var1.guildId;
                var2 = var5.id;
                var3 = var7.bind(var8)(var3, var2);
                var2 = null;
                var2 = var2 != var3;
                if(!var2) { _fun0017_ip = 121; continue _fun0017 }
case 122:
                var10 = _closure1_slot2;
                var11 = _closure1_slot3;
                var8 = 15;
                var6 = var11[var8];
                var9 = undefined;
                var7 = var10.bind(var9)(var6);
                var6 = var7.equals;
                var8 = var11[var8];
                var9 = var10.bind(var9)(var8);
                var8 = var9.deserialize;
                var5 = var5.permissions;
                var5 = var8.bind(var9)(var5);
                var3 = var3.permissions;
                var2 = var6.bind(var7)(var5, var3);
case 121:
                if(var2) { _fun0017_ip = 123; continue _fun0017 }
case 124:
                var3 = var4.unsync;
                var2 = var1.guildId;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
case 123:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'handleGuildMemberUpdate';
        var5['key'] = var7;
        var7 = function handleGuildMemberUpdate(arg1, arg2) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var2 = var1.user;
                var3 = var2.id;
                var5 = _closure1_slot10;
                var2 = var5.getId;
                var2 = var2.bind(var5)();
                if(!(var3 === var2)) { _fun0018_ip = 125; continue _fun0018 }
case 126:
                var3 = var4.unsync;
                var2 = var1.guildId;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
case 125:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'handleWriteCaches';
        var5['key'] = var7;
        var7 = function handleWriteCaches(arg1, arg2) {
            var3 = this;
            var2 = var3.sync;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'resetInMemoryState';
        var5['key'] = var7;
        var7 = function resetInMemoryState() {
            var2 = null;
            var1 = this;
            var1['synced'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'onGuildUpdate';
        var5['key'] = var7;
        var7 = function onGuildUpdate(arg1, arg2, arg3, arg4) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var5 = arg2;
                var4 = this;
                var1 = arg3;
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                if(var1) { _fun0019_ip = 53; continue _fun0019 }
case 31:
                var3 = var5.some;
                var2 = function(arg1) {
                    var4 = arg1;
                    var3 = _closure1_slot20;
                    var5 = _closure1_slot11;
                    var2 = var5.getBasicChannel;
                    var1 = var4.id;
                    var2 = var2.bind(var5)(var1);
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4);
                    return var1;
                };
                var1 = var3.bind(var5)(var2);
case 53:
                if(!var1) { _fun0019_ip = 127; continue _fun0019 }
case 55:
                var3 = var4.unsync;
                var2 = arg1;
                var1 = arg4;
                var1 = var3.bind(var4)(var2, var1);
case 127:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'onGuildSync';
        var5['key'] = var7;
        var7 = function onGuildSync(arg1, arg2) {
            var4 = this;
            var3 = var4.unsync;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'delete';
        var5['key'] = var7;
        var7 = function _delete(arg1, arg2) {
            var4 = arg1;
            var5 = arg2;
            var2 = this;
            var1 = var2.unsync;
            var1 = var1.bind(var2)(var4, var5);
            var3 = _closure1_slot1;
            var6 = _closure1_slot3;
            var2 = 13;
            var7 = var6[var2];
            var1 = undefined;
            var8 = var3.bind(var1)(var7);
            var7 = var8.basicChannelsTransaction;
            var8 = var7.bind(var8)(var5);
            var7 = var8.delete;
            var7 = var7.bind(var8)(var4);
            var2 = var6[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.syncedBasicChannelsTransaction;
            var3 = var2.bind(var3)(var5);
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'unsync';
        var5['key'] = var7;
        var7 = function unsync(arg1, arg2) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var4 = arg1;
                var6 = arg2;
                var1 = this;
                var2 = var1.synced;
                var1 = null;
                if(!(var1 != var2)) { _fun0020_ip = 128; continue _fun0020 }
case 129:
                var1 = var2.delete;
                var1 = var1.bind(var2)(var4);
case 128:
                var5 = _closure1_slot1;
                var7 = _closure1_slot3;
                var3 = 13;
                var8 = var7[var3];
                var1 = undefined;
                var9 = var5.bind(var1)(var8);
                var8 = var9.basicChannelsTransaction;
                var9 = var8.bind(var9)(var6);
                var8 = var9.delete;
                var8 = var8.bind(var9)(var4);
                var3 = var7[var3];
                var5 = var5.bind(var1)(var3);
                var3 = var5.syncedBasicChannelsTransaction;
                var6 = var3.bind(var5)(var6);
                var5 = var6.put;
                var3 = false;
                var3 = var5.bind(var6)(var4, var3);
                var3 = _closure1_slot16;
                var2 = var3.invalidate;
                var2 = var2.bind(var3)(var4);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'sync';
        var5['key'] = var7;
        var7 = function sync(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var10 = arg1;
                var9 = this;
                var4 = _closure1_slot17;
                var2 = var4.verbose;
                var1 = 'Starting to write all basic channels';
                var1 = var2.bind(var4)(var1);
                var2 = global;
                var4 = var2.performance;
                var1 = var4.now;
                var6 = var1.bind(var4)();
                var5 = {'written': 0, 'skipped': 0};
                var7 = _closure1_slot18;
                var4 = _closure1_slot14;
                var1 = var4.getGuildIds;
                var4 = var1.bind(var4)();
                var1 = undefined;
                var8 = var7.bind(var1)(var4);
                var7 = var8.bind(var1)();
                var4 = var7.done;
                if(var4) { _fun0021_ip = 130; continue _fun0021 }
case 131:
                var11 = var7.value;
                var4 = var9.syncOne;
                var4 = var4.bind(var9)(var11, var10);
                if(var4) { _fun0021_ip = 132; continue _fun0021 }
case 133:
                var4 = var5.skipped;
                var4 = var4 + 1;
                var5['skipped'] = var4;
                _fun0021_ip = 74; continue _fun0021;
case 132:
                var4 = var5.written;
                var4 = var4 + 1;
                var5['written'] = var4;
case 74:
                var11 = var8.bind(var1)();
                var4 = var11.done;
                var7 = var11;
                if(!var4) { _fun0021_ip = 131; continue _fun0021 }
case 130:
                var7 = var2.performance;
                var4 = var7.now;
                var4 = var4.bind(var7)();
                var15 = var4 - var6;
                var4 = _closure1_slot17;
                var3 = var4.verbose;
                var17 = var5.written;
                var13 = var5.skipped;
                var2 = var2.HermesInternal;
                var8 = var2.concat;
                var18 = '';
                var16 = ' basic_channel guilds submitted (took: ';
                var14 = 'ms, skipped: ';
                var12 = ' guilds)';
                var2 = var18[var8](var17, var16, var15, var14, var13, var12, var11);
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'syncOne';
        var5['key'] = var7;
        var6 = function syncOne(arg1, arg2) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var5 = arg1;
                var4 = arg2;
                var6 = this;
                var3 = _closure1_slot14;
                var1 = var3.getGuild;
                var1 = var1.bind(var3)(var5);
                var3 = null;
                var1 = var3 == var1;
                if(var1) { _fun0022_ip = 7; continue _fun0022 }
case 119:
                var9 = var6.synced;
                var7 = var3 != var9;
                if(!var7) { _fun0022_ip = 58; continue _fun0022 }
case 38:
                var8 = var9.has;
                var7 = var8.bind(var9)(var5);
case 58:
                var1 = var7;
case 7:
                var1 = !var1;
                if(!var1) { _fun0022_ip = 134; continue _fun0022 }
case 30:
                var6 = var6.synced;
                if(!(var3 != var6)) { _fun0022_ip = 135; continue _fun0022 }
case 136:
                var3 = var6.add;
                var3 = var3.bind(var6)(var5);
case 135:
                var6 = _closure1_slot1;
                var7 = _closure1_slot3;
                var2 = 13;
                var8 = var7[var2];
                var3 = undefined;
                var9 = var6.bind(var3)(var8);
                var8 = var9.basicChannelsTransaction;
                var10 = var8.bind(var9)(var4);
                var9 = var10.put;
                var8 = function computeBasicChannels(arg1) {
                    var3 = _closure1_slot11;
                    var2 = var3.getMutableGuildChannelsForGuild;
                    var1 = arg1;
                    var3 = var2.bind(var3)(var1);
                    var1 = global;
                    var2 = var1.Object;
                    var1 = var2.values;
                    var3 = var1.bind(var2)(var3);
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var6 = arg1;
                        var1 = {};
                        var2 = var6.id;
                        var1['id'] = var2;
                        var2 = var6.type;
                        var1['type'] = var2;
                        var2 = var6.guild_id;
                        var1['guild_id'] = var2;
                        var2 = var6.parent_id;
                        var1['parent_id'] = var2;
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var3 = 16;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.asBasicFlag;
                        var5 = _closure1_slot15;
                        var2 = var5.computePermissions;
                        var2 = var2.bind(var5)(var6);
                        var2 = var3.bind(var4)(var2);
                        var1['basicPermissions'] = var2;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var8 = var8.bind(var3)(var5);
                var8 = var9.bind(var10)(var5, var8);
                var2 = var7[var2];
                var3 = var6.bind(var3)(var2);
                var2 = var3.syncedBasicChannelsTransaction;
                var4 = var2.bind(var3)(var4);
                var3 = var4.put;
                var2 = true;
                var3 = var3.bind(var4)(var5, var2);
                var1 = true;
case 134:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[20] = var5;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/GuildBasicChannels.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
// app/modules/app_database/modules/GuildBasicChannels.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
            var9 = _closure1_slot18;
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
            var7 = _closure1_slot18;
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
    var _closure1_slot17 = var1;
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
    var _closure1_slot18 = var1;
    var1 = function hasBasicChannelChanged(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var1 = null;
            var1 = var1 == var6;
            if(var1) { _fun0004_ip = 29; continue _fun0004 }
 15:
            var3 = var6.type;
            var2 = var5.type;
            var1 = var3 !== var2;
 29:
            if(var1) { _fun0004_ip = 48; continue _fun0004 }
 32:
            var3 = var6.parent_id;
            var2 = var5.parent_id;
            var1 = var3 !== var2;
 48:
            if(var1) { _fun0004_ip = 88; continue _fun0004 }
 51:
            var4 = _closure1_slot14;
            var3 = var4.computeBasicPermissions;
            var3 = var3.bind(var4)(var6);
            var4 = _closure1_slot14;
            var2 = var4.computeBasicPermissions;
            var2 = var2.bind(var4)(var5);
            var1 = var3 !== var2;
 88:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.createChannelRecordFromServer;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelLoader;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'GuildBasicChannels';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot16 = var4;
    var2 = function() {
        var4 = _closure1_slot6;
        var3 = function GuildBasicChannels() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot5;
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
        var8 = _closure1_slot4;
        var2 = undefined;
        var1 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 464; continue _fun0005 }
 15:
                    var12 = undefined;
                    var _closure4_slot0 = var12;
                    var3 = global;
                    var5 = var3.performance;
                    var2 = var5.now;
                    var13 = var2.bind(var5)();
                    var6 = var3.Promise;
                    var5 = var6.all;
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
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
 143:
                    return var2;
 145:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 461; continue _fun0005 }
 154:
                    var11 = _closure1_slot3;
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
                    var5 = _closure1_slot17;
                    var16 = var5.bind(var12)(var15);
                    var15 = var16.bind(var12)();
                    var5 = var15.done;
                    if(var5) { _fun0005_ip = 285; continue _fun0005 }
 228:
                    var18 = var15.value;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var12)(var18, var10);
                    var19 = var5[var9];
                    var5 = var5[var8];
                    var18 = var13;
                    if(!var5) { _fun0005_ip = 260; continue _fun0005 }
 257:
                    var18 = var14;
 260:
                    var5 = var18.push;
                    var5 = var5.bind(var18)(var19);
                    var18 = var16.bind(var12)();
                    var5 = var18.done;
                    var15 = var18;
                    if(!var5) { _fun0005_ip = 228; continue _fun0005 }
 285:
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
                    var8 = _closure1_slot16;
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
 0:
                            var4 = arg1;
                            var1 = var4[Symbol.iterator];
                            var4 = var1().next;
                            var6 = var4().value;
                            var2 = var1;
                            var5 = undefined;
                            var2 = var2 === var5;
                            var3 = undefined;
                            if(var2) { _fun0006_ip = 27; continue _fun0006 }
 24:
                            var3 = var6;
 27:
                            if(var2) { _fun0006_ip = 41; continue _fun0006 }
 30:
                            var4 = var4().value;
                            var4 = var1;
                            var2 = var4 === var5;
 41:
                            if(var2) { _fun0006_ip = 47; continue _fun0006 }
 44:
                            var1.return();
 47:
                            var2 = _closure4_slot0;
                            var1 = var2.has;
                            var1 = var1.bind(var2)(var3);
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    var3['channels'] = var4;
                    return var3;
 461:
                    return var2;
 464:
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
 0:
                var1 = arg1;
                var4 = this;
                var2 = var1.channel;
                var3 = var2.guild_id;
                var2 = null;
                if(!(var2 != var3)) { _fun0007_ip = 47; continue _fun0007 }
 22:
                var3 = var4.unsync;
                var1 = var1.channel;
                var2 = var1.guild_id;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
 47:
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
 0:
                var1 = arg1;
                var4 = this;
                var2 = var1.channel;
                var3 = var2.guild_id;
                var2 = null;
                if(!(var2 != var3)) { _fun0008_ip = 47; continue _fun0008 }
 22:
                var3 = var4.unsync;
                var1 = var1.channel;
                var2 = var1.guild_id;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
 47:
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
 0:
                var7 = arg2;
                var6 = this;
                var3 = _closure1_slot17;
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
                if(var2) { _fun0009_ip = 128; continue _fun0009 }
 58:
                var2 = var3.value;
                var9 = _closure1_slot19;
                var11 = _closure1_slot10;
                var10 = var11.getBasicChannel;
                var8 = var2.id;
                var8 = var10.bind(var11)(var8);
                var8 = var9.bind(var1)(var8, var2);
                if(!var8) { _fun0009_ip = 113; continue _fun0009 }
 96:
                var8 = var6.unsync;
                var2 = var2.guild_id;
                var2 = var8.bind(var6)(var2, var7);
 113:
                var8 = var4.bind(var1)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0009_ip = 58; continue _fun0009 }
 128:
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
 0:
                var2 = arg2;
                var _closure3_slot0 = var2;
                var2 = this;
                var _closure3_slot1 = var2;
                var5 = function _loop(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var3 = var2.data_mode;
                        var1 = 'unavailable';
                        if(!(var1 !== var3)) { _fun0011_ip = 168; continue _fun0011 }
 26:
                        var1 = 'partial';
                        if(!(var1 !== var3)) { _fun0011_ip = 64; continue _fun0011 }
 34:
                        var5 = _closure3_slot1;
                        var4 = var5.onGuildSync;
                        var3 = var2.id;
                        var1 = _closure3_slot0;
                        var1 = var4.bind(var5)(var3, var1);
                        _fun0011_ip = 168; continue _fun0011;
 64:
                        var6 = _closure3_slot1;
                        var5 = var6.onGuildUpdate;
                        var4 = var2.id;
                        var3 = var2.partial_updates;
                        var10 = var3.channels;
                        var7 = null;
                        var9 = var7 == var10;
                        var3 = undefined;
                        if(var9) { _fun0011_ip = 120; continue _fun0011 }
 105:
                        var9 = var10.map;
                        var8 = function(arg1) {
                            var4 = _closure1_slot8;
                            var1 = _closure4_slot0;
                            var3 = var1.id;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var2)(var1, var3);
                            return var1;
                        };
                        var3 = var9.bind(var10)(var8);
 120:
                        if(!(var7 == var3)) { _fun0011_ip = 128; continue _fun0011 }
 124:
                        var3 = new Array(0);
 128:
                        var2 = var2.partial_updates;
                        var2 = var2.deleted_channel_ids;
                        if(!(var7 == var2)) { _fun0011_ip = 148; continue _fun0011 }
 144:
                        var2 = new Array(0);
 148:
                        var11 = _closure3_slot0;
                        var15 = var6;
                        var14 = var4;
                        var13 = var3;
                        var12 = var2;
                        var1 = var15[var5](var14, var13, var12, var11, var10);
 168:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = _closure1_slot17;
                var1 = arg1;
                var2 = var1.guilds;
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0010_ip = 81; continue _fun0010 }
 56:
                var2 = var3.value;
                var2 = var5.bind(var1)(var2);
                var6 = var4.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0010_ip = 56; continue _fun0010 }
 81:
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
 0:
                var6 = arg2;
                var5 = this;
                var3 = _closure1_slot17;
                var1 = arg1;
                var2 = var1.guilds;
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0012_ip = 73; continue _fun0012 }
 41:
                var7 = var3.value;
                var2 = var5.handleOneGuildCreate;
                var2 = var2.bind(var5)(var7, var6);
                var7 = var4.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0012_ip = 41; continue _fun0012 }
 73:
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
 0:
                    StartGenerator();
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 587; continue _fun0013 }
 15:
                    var _closure4_slot0 = var4;
                    var2 = undefined;
                    var _closure4_slot2 = var2;
                    var _closure4_slot3 = var2;
                    var _closure4_slot1 = var4;
                    var7 = _closure1_slot7;
                    var6 = var7.lastTimeConnectedChanged;
                    var6 = var6.bind(var7)();
                    _closure4_slot2 = var6;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 13;
                    var6 = var8[var6];
                    var7 = var7.bind(var2)(var6);
                    var6 = var7.database;
                    var6 = var6.bind(var7)();
                    _closure4_slot3 = var6;
                    var7 = var4.synced;
                    var4 = null;
                    if(!(var4 != var7)) { _fun0013_ip = 584; continue _fun0013 }
 103:
                    if(!(var4 != var6)) { _fun0013_ip = 584; continue _fun0013 }
 110:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 14;
                    var4 = var7[var4];
                    var6 = var6.bind(var2)(var4);
                    var4 = var6.isCacheEnabled;
                    var4 = var4.bind(var6)();
                    if(!var4) { _fun0013_ip = 584; continue _fun0013 }
 146:
                    var6 = _closure1_slot13;
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
                    var8 = _closure1_slot16;
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
 0:
                                StartGenerator();
                                var2 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(var3) { _fun0014_ip = 358; continue _fun0014 }
 15:
                                var4 = var2;
                                var _closure6_slot0 = var2;
                                var2 = _closure4_slot1;
                                var3 = var2.synced;
                                var2 = null;
                                if(!(var2 != var3)) { _fun0014_ip = 353; continue _fun0014 }
 44:
                                var8 = _closure4_slot3;
                                var9 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var3 = 13;
                                var7 = var7[var3];
                                var3 = undefined;
                                var9 = var9.bind(var3)(var7);
                                var7 = var9.database;
                                var7 = var7.bind(var9)();
                                if(!(var8 === var7)) { _fun0014_ip = 353; continue _fun0014 }
 90:
                                var8 = _closure4_slot2;
                                var9 = _closure1_slot7;
                                var7 = var9.lastTimeConnectedChanged;
                                var7 = var7.bind(var9)();
                                if(!(var8 === var7)) { _fun0014_ip = 353; continue _fun0014 }
 115:
                                var7 = _closure4_slot1;
                                var9 = var7.synced;
                                var8 = var9.has;
                                var7 = var4;
                                var7 = var8.bind(var9)(var7);
                                if(var7) { _fun0014_ip = 347; continue _fun0014 }
 144:
                                var10 = _closure1_slot16;
                                var9 = var10.verbose;
                                var13 = var4;
                                var7 = global;
                                var8 = var7.HermesInternal;
                                var12 = var8.concat;
                                var11 = 'optimstically writing basic_channels (guild: ';
                                var8 = ')';
                                var8 = var12.bind(var11)(var13, var8);
                                var8 = var9.bind(var10)(var8);
 191: // try_start_0
                                var9 = _closure1_slot11;
                                var8 = var9.loadGuildIds;
                                var10 = var4;
                                var4 = new Array(1);
                                var4[0] = var10;
                                var4 = var8.bind(var9)(var4);
                                SaveGenerator(address=221);
 219:
                                return var4;
 221:
                                ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                                if(var8) { _fun0014_ip = 312; continue _fun0014 }
 227:
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
 254:
                                return var5;
 256:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                                if(var8) { _fun0014_ip = 309; continue _fun0014 }
 262: // try_end0
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
 295:
                                return var6;
 297:
                                ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                                if(var7) { _fun0014_ip = 306; continue _fun0014 }
 303:
                                return var3;
 306:
                                return var6;
 309:
                                return var5;
 312:
                                return var4;
 315: // catch_target0
                                CatchBlockStart(arg_register=5);
                                var5 = _closure1_slot16;
                                var4 = var5.warn;
                                var2 = "couldn't optimstically write basic_channel:";
                                var2 = var4.bind(var5)(var2, var6);
                                var2 = {};
                                var2['v'] = var3;
                                return var2;
 347:
                                var2 = 1;
                                return var2;
 353:
                                var2 = 0;
                                return var2;
 358:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var3 = _closure1_slot17;
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
                    if(var3) { _fun0013_ip = 584; continue _fun0013 }
 283:
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
 329:
                    var4 = var19;
                    var4 = var20.bind(var15)(var4);
                    var23 = var4;
                    var22 = var6;
                    var16 = ensureObject(var23, var22);
                    var3 = var4;
                    var16 = var4.done;
                    if(var16) { _fun0013_ip = 540; continue _fun0013 }
 361: // try_start_0
                    var16 = generatorSetDelegated();
                    SaveGenerator(address=416);
 367:
                    return var4;
 369: // try_end0 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=15);
                    var23 = var15;
                    var22 = var7;
                    var4 = getMethod(var23, var22);
                    if(!(var4 !== var2)) { _fun0013_ip = 499; continue _fun0013 }
 385:
                    var4 = var4.bind(var15)(var16);
                    var23 = var4;
                    var22 = var8;
                    var16 = ensureObject(var23, var22);
                    var16 = var4.done;
                    if(var16) { _fun0013_ip = 494; continue _fun0013 }
 408:
                    var16 = generatorSetDelegated();
                    SaveGenerator(address=416);
 414:
                    return var4;
 416: // try_start_1
                    ResumeGenerator(result_out_reg=15, return_bool_out_reg=17);
                    var19 = var16;
                    var17 = var18;
                    if(!var17) { _fun0013_ip = 329; continue _fun0013 }
 428:
                    var19 = var16;
 431: // try_end1
                    var22 = 'return';
                    var23 = var15;
                    var21 = getMethod(var23, var22);
                    if(!(var21 !== var2)) { _fun0013_ip = 491; continue _fun0013 }
 446:
                    var17 = var19;
                    var17 = var21.bind(var15)(var17);
                    var22 = 'iterator.return() did not return an object';
                    var23 = var17;
                    var21 = ensureObject(var23, var22);
                    var21 = var17.done;
                    if(var21) { _fun0013_ip = 483; continue _fun0013 }
 475:
                    var21 = generatorSetDelegated();
                    SaveGenerator(address=416);
 481:
                    return var17;
 483:
                    var17 = var17.value;
                    return var17;
 491:
                    return var16;
 494:
                    var3 = var4;
                    _fun0013_ip = 540; continue _fun0013;
 499:
                    var22 = 'return';
                    var23 = var15;
                    var4 = getMethod(var23, var22);
                    if(!(var4 !== var2)) { _fun0013_ip = 528; continue _fun0013 }
 514:
                    var23 = var4.bind(var15)();
                    var22 = 'iterator.return() did not return an object';
                    var4 = ensureObject(var23, var22);
 528:
                    var23 = 'yield* delegate must have a .throw() method';
                    var4 = throwTypeError(var23);
                    throw var2;
 540:
                    var3 = var3.value;
                    if(!(var10 !== var3)) { _fun0013_ip = 584; continue _fun0013 }
 549:
                    if(!(var11 !== var3)) { _fun0013_ip = 556; continue _fun0013 }
 553:
                    if(var3) { _fun0013_ip = 576; continue _fun0013 }
 556:
                    var15 = var12.bind(var2)();
                    var4 = var15.done;
                    var5 = var15;
                    if(var4) { _fun0013_ip = 584; continue _fun0013 }
 571:
                    _fun0013_ip = 283; continue _fun0013;
 576:
                    var3 = var3.v;
                    return var3;
 584:
                    return var2;
 587:
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
 0:
                var1 = arg1;
                var4 = arg2;
                var3 = this;
                var2 = var1.id;
                var1 = var1.channels;
                var6 = var1.op;
                var5 = 'full_sync';
                if(!(var5 !== var6)) { _fun0015_ip = 76; continue _fun0015 }
 35:
                var5 = 'update';
                if(!(var5 === var6)) { _fun0015_ip = 88; continue _fun0015 }
 43:
                var6 = var3.onGuildUpdate;
                var9 = var1.writes;
                var8 = var1.deletes;
                var11 = var3;
                var10 = var2;
                var7 = var4;
                var1 = var11[var6](var10, var9, var8, var7, var6);
                _fun0015_ip = 88; continue _fun0015;
 76:
                var1 = var3.onGuildSync;
                var1 = var1.bind(var3)(var2, var4);
 88:
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
 0:
                var1 = arg1;
                var4 = this;
                var2 = var1.guild;
                var3 = var2.unavailable;
                var2 = true;
                if(!(var2 !== var3)) { _fun0016_ip = 47; continue _fun0016 }
 23:
                var3 = var4.delete;
                var1 = var1.guild;
                var2 = var1.id;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
 47:
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
 0:
                var1 = arg1;
                var4 = this;
                var5 = var1.role;
                var7 = _closure1_slot12;
                var6 = var7.getRole;
                var3 = var1.guildId;
                var2 = var5.id;
                var3 = var6.bind(var7)(var3, var2);
                var2 = null;
                var2 = var2 != var3;
                if(!var2) { _fun0017_ip = 66; continue _fun0017 }
 50:
                var5 = var5.permissions;
                var3 = var3.permissions;
                var2 = var5 === var3;
 66:
                if(var2) { _fun0017_ip = 89; continue _fun0017 }
 69:
                var3 = var4.unsync;
                var2 = var1.guildId;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
 89:
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
 0:
                var1 = arg1;
                var4 = this;
                var2 = var1.user;
                var3 = var2.id;
                var5 = _closure1_slot9;
                var2 = var5.getId;
                var2 = var2.bind(var5)();
                if(!(var3 === var2)) { _fun0018_ip = 57; continue _fun0018 }
 37:
                var3 = var4.unsync;
                var2 = var1.guildId;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
 57:
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
 0:
                var5 = arg2;
                var4 = this;
                var1 = arg3;
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                if(var1) { _fun0019_ip = 41; continue _fun0019 }
 23:
                var3 = var5.some;
                var2 = function(arg1) {
                    var4 = arg1;
                    var3 = _closure1_slot19;
                    var5 = _closure1_slot10;
                    var2 = var5.getBasicChannel;
                    var1 = var4.id;
                    var2 = var2.bind(var5)(var1);
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4);
                    return var1;
                };
                var1 = var3.bind(var5)(var2);
 41:
                if(!var1) { _fun0019_ip = 62; continue _fun0019 }
 44:
                var3 = var4.unsync;
                var2 = arg1;
                var1 = arg4;
                var1 = var3.bind(var4)(var2, var1);
 62:
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
            var6 = _closure1_slot2;
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
 0:
                var4 = arg1;
                var6 = arg2;
                var1 = this;
                var2 = var1.synced;
                var1 = null;
                if(!(var1 != var2)) { _fun0020_ip = 31; continue _fun0020 }
 21:
                var1 = var2.delete;
                var1 = var1.bind(var2)(var4);
 31:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
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
                var3 = _closure1_slot15;
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
 0:
                var10 = arg1;
                var9 = this;
                var4 = _closure1_slot16;
                var2 = var4.verbose;
                var1 = 'Starting to write all basic channels';
                var1 = var2.bind(var4)(var1);
                var2 = global;
                var4 = var2.performance;
                var1 = var4.now;
                var6 = var1.bind(var4)();
                var5 = {'written': 0, 'skipped': 0};
                var7 = _closure1_slot17;
                var4 = _closure1_slot13;
                var1 = var4.getGuildIds;
                var4 = var1.bind(var4)();
                var1 = undefined;
                var8 = var7.bind(var1)(var4);
                var7 = var8.bind(var1)();
                var4 = var7.done;
                if(var4) { _fun0021_ip = 165; continue _fun0021 }
 98:
                var11 = var7.value;
                var4 = var9.syncOne;
                var4 = var4.bind(var9)(var11, var10);
                if(var4) { _fun0021_ip = 135; continue _fun0021 }
 118:
                var4 = var5.skipped;
                var4 = var4 + 1;
                var5['skipped'] = var4;
                _fun0021_ip = 150; continue _fun0021;
 135:
                var4 = var5.written;
                var4 = var4 + 1;
                var5['written'] = var4;
 150:
                var11 = var8.bind(var1)();
                var4 = var11.done;
                var7 = var11;
                if(!var4) { _fun0021_ip = 98; continue _fun0021 }
 165:
                var7 = var2.performance;
                var4 = var7.now;
                var4 = var4.bind(var7)();
                var15 = var4 - var6;
                var4 = _closure1_slot16;
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
 0:
                var5 = arg1;
                var4 = arg2;
                var6 = this;
                var3 = _closure1_slot13;
                var1 = var3.getGuild;
                var1 = var1.bind(var3)(var5);
                var3 = null;
                var1 = var3 == var1;
                if(var1) { _fun0022_ip = 61; continue _fun0022 }
 35:
                var9 = var6.synced;
                var7 = var3 != var9;
                if(!var7) { _fun0022_ip = 58; continue _fun0022 }
 48:
                var8 = var9.has;
                var7 = var8.bind(var9)(var5);
 58:
                var1 = var7;
 61:
                var1 = !var1;
                if(!var1) { _fun0022_ip = 180; continue _fun0022 }
 67:
                var6 = var6.synced;
                if(!(var3 != var6)) { _fun0022_ip = 87; continue _fun0022 }
 77:
                var3 = var6.add;
                var3 = var3.bind(var6)(var5);
 87:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 13;
                var8 = var7[var2];
                var3 = undefined;
                var9 = var6.bind(var3)(var8);
                var8 = var9.basicChannelsTransaction;
                var10 = var8.bind(var9)(var4);
                var9 = var10.put;
                var8 = function computeBasicChannels(arg1) {
                    var3 = _closure1_slot10;
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
                        var4 = _closure1_slot2;
                        var3 = 15;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.asBasicFlag;
                        var5 = _closure1_slot14;
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
 180:
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
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/GuildBasicChannels.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
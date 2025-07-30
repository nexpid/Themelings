// app/modules/app_database/modules/GuildVersions.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
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
            var9 = _closure1_slot10;
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
            var7 = _closure1_slot10;
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
    var _closure1_slot9 = var1;
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 175; continue _fun0004 }
 10:
                    var5 = undefined;
                    var2 = undefined;
                    var6 = undefined;
 16: // try_start_0
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 6;
                    var3 = var7[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.guildVersions;
                    var3 = var3.bind(var4)();
                    var2 = var3;
                    var7 = null;
                    if(!(var7 != var3)) { _fun0004_ip = 139; continue _fun0004 }
 58:
                    var3 = var2;
                    var2 = var3.getMany;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=75);
 73:
                    return var2;
 75:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 136; continue _fun0004 }
 81:
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
                    if(!(var7 == var3)) { _fun0004_ip = 125; continue _fun0004 }
 119:
                    var3 = new Array(0);
                    _fun0004_ip = 128; continue _fun0004;
 125:
                    var3 = var6;
 128:
                    var3 = var4.bind(var5)(var3);
 133: // try_end0
                    return var3;
 136:
                    return var2;
 139:
                    var2 = {};
                    return var2;
 144: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot8;
                    var3 = var4.warn;
                    var2 = "couldn't load guild versions";
                    var2 = var3.bind(var4)(var2, var5);
                    var2 = {};
                    return var2;
 175:
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
 0:
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
                if(var2) { _fun0005_ip = 142; continue _fun0005 }
 47:
                var2 = var5.value;
                var10 = var2.data_mode;
                if(!(var6 !== var10)) { _fun0005_ip = 87; continue _fun0005 }
 62:
                var12 = var3.updateWith;
                var11 = var2.id;
                var10 = new Array(1);
                var10[0] = var2;
                var10 = var12.bind(var3)(var11, var10);
 87:
                var12 = _closure1_slot7;
                var11 = var12.getGuild;
                var10 = var2.id;
                var10 = var11.bind(var12)(var10);
                if(!(var7 == var10)) { _fun0005_ip = 127; continue _fun0005 }
 110:
                var10 = var3.remove;
                var2 = var2.id;
                var2 = var10.bind(var3)(var2, var4);
 127:
                var10 = var8.bind(var1)();
                var2 = var10.done;
                var5 = var10;
                if(!var2) { _fun0005_ip = 47; continue _fun0005 }
 142:
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
 0:
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
                if(var2) { _fun0006_ip = 93; continue _fun0006 }
 48:
                var8 = var3.value;
                var7 = var4.updateWith;
                var6 = var8.id;
                var2 = new Array(1);
                var2[0] = var8;
                var2 = var7.bind(var4)(var6, var2);
                var6 = var5.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0006_ip = 48; continue _fun0006 }
 93:
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
 0:
                var1 = arg1;
                var4 = this;
                var7 = function entitiesForOperation(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.op;
                        var2 = 'full_sync';
                        if(!(var2 !== var3)) { _fun0008_ip = 72; continue _fun0008 }
 18:
                        var2 = 'update';
                        if(!(var2 !== var3)) { _fun0008_ip = 64; continue _fun0008 }
 26:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 7;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.assertNever;
                        var3 = var3.bind(var4)(var1);
                        return var2;
 64:
                        var2 = var1.writes;
                        return var2;
 72:
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
                if(var7) { _fun0007_ip = 176; continue _fun0007 }
 152:
                var8 = var2.Object;
                var7 = var8.values;
                var2 = var6.roles;
                var2 = var7.bind(var8)(var2);
                _fun0007_ip = 182; continue _fun0007;
 176:
                var2 = var6.roles;
 182:
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
 0:
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
                if(var6) { _fun0009_ip = 134; continue _fun0009 }
 110:
                var7 = var1.Object;
                var6 = var7.values;
                var1 = var5.roles;
                var1 = var6.bind(var7)(var1);
                _fun0009_ip = 140; continue _fun0009;
 134:
                var1 = var5.roles;
 140:
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
 0:
                var1 = arg1;
                var3 = this;
                var2 = var1.channel;
                var4 = var2.guild_id;
                var2 = null;
                if(!(var2 != var4)) { _fun0010_ip = 57; continue _fun0010 }
 22:
                var4 = var3.updateWith;
                var2 = var1.channel;
                var2 = var2.guild_id;
                var5 = var1.channel;
                var1 = new Array(1);
                var1[0] = var5;
                var1 = var4.bind(var3)(var2, var1);
 57:
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
 0:
                var4 = this;
                var3 = _closure1_slot9;
                var1 = arg1;
                var2 = var1.channels;
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var3 = var6.bind(var1)();
                var2 = var3.done;
                var5 = null;
                if(var2) { _fun0011_ip = 94; continue _fun0011 }
 40:
                var9 = var3.value;
                var2 = var9.guild_id;
                if(!(var5 != var2)) { _fun0011_ip = 79; continue _fun0011 }
 54:
                var8 = var4.updateWith;
                var7 = var9.guild_id;
                var2 = new Array(1);
                var2[0] = var9;
                var2 = var8.bind(var4)(var7, var2);
 79:
                var7 = var6.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0011_ip = 40; continue _fun0011 }
 94:
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
 0:
                var1 = arg1;
                var3 = this;
                var2 = var1.channel;
                var4 = var2.guild_id;
                var2 = null;
                if(!(var2 != var4)) { _fun0012_ip = 57; continue _fun0012 }
 22:
                var4 = var3.updateWith;
                var2 = var1.channel;
                var2 = var2.guild_id;
                var5 = var1.channel;
                var1 = new Array(1);
                var1[0] = var5;
                var1 = var4.bind(var3)(var2, var1);
 57:
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
 0:
                var4 = arg1;
                var5 = arg2;
                var1 = this;
                var2 = var5.length;
                var7 = 0;
                if(!(var7 !== var2)) { _fun0013_ip = 132; continue _fun0013 }
 20:
                var2 = global;
                var6 = var2.Math;
                var3 = var6.max;
                var8 = var1.committed;
                var2 = var8.get;
                var8 = var2.bind(var8)(var4);
                var9 = null;
                var10 = var9 != var8;
                var2 = 0;
                if(!var10) { _fun0013_ip = 63; continue _fun0013 }
 60:
                var2 = var8;
 63:
                var10 = var1.pending;
                var8 = var10.get;
                var8 = var8.bind(var10)(var4);
                var9 = var9 != var8;
                var7 = 0;
                if(!var9) { _fun0013_ip = 91; continue _fun0013 }
 88:
                var7 = var8;
 91:
                var2 = var3.bind(var6)(var2, var7);
                var3 = var1.computeLatestVersion;
                var3 = var3.bind(var1)(var2, var5);
                if(!(var3 > var2)) { _fun0013_ip = 132; continue _fun0013 }
 115:
                var2 = var1.pending;
                var1 = var2.set;
                var1 = var1.bind(var2)(var4, var3);
 132:
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
 0:
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
                if(var2) { _fun0014_ip = 103; continue _fun0014 }
 45:
                var2 = var4.value;
                var11 = var7.Math;
                var10 = var11.max;
                var12 = var2.version;
                var13 = var6 != var12;
                var2 = 0;
                if(!var13) { _fun0014_ip = 79; continue _fun0014 }
 76:
                var2 = var12;
 79:
                var3 = var10.bind(var11)(var3, var2);
                var11 = var8.bind(var9)();
                var2 = var11.done;
                var4 = var11;
                var1 = var3;
                if(!var2) { _fun0014_ip = 45; continue _fun0014 }
 103:
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
 0:
                var1 = this;
                var2 = var1.pending;
                var2 = var2.size;
                var11 = 0;
                if(!(var2 > var11)) { _fun0015_ip = 222; continue _fun0015 }
 23:
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
                if(var2) { _fun0015_ip = 206; continue _fun0015 }
 97:
                var12 = var3.value;
                var2 = _closure1_slot3;
                var2 = var2.bind(var9)(var12, var6);
                var14 = var2[var11];
                var13 = var2[var5];
                if(!(var4 == var13)) { _fun0015_ip = 152; continue _fun0015 }
 124:
                var2 = var8.delete;
                var2 = var2.bind(var8)(var14);
                var12 = var1.committed;
                var2 = var12.delete;
                var2 = var2.bind(var12)(var14);
                _fun0015_ip = 191; continue _fun0015;
 152:
                var12 = var8.put;
                var2 = {};
                var2['id'] = var14;
                var2['version'] = var13;
                var2 = var12.bind(var8)(var2);
                var12 = var1.committed;
                var2 = var12.set;
                var2 = var2.bind(var12)(var14, var13);
 191:
                var12 = var7.bind(var9)();
                var2 = var12.done;
                var3 = var12;
                if(!var2) { _fun0015_ip = 97; continue _fun0015 }
 206:
                var2 = var1.pending;
                var1 = var2.clear;
                var1 = var1.bind(var2)();
 222:
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
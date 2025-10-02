// app/modules/rpc/server/commands/channels.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var7 = var2.isVoiceChannel;
    var _closure1_slot3 = var7;
    var2 = var2.isTextChannel;
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var12 = var2.RPC_SCOPE_CONFIG;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.Routes;
    var _closure1_slot10 = var4;
    var4 = var2.Permissions;
    var _closure1_slot11 = var4;
    var4 = var2.RPCCommands;
    var2 = var2.RPCErrors;
    var _closure1_slot12 = var2;
    var2 = {};
    var10 = var4.GET_CHANNEL;
    var7 = {};
    var11 = {};
    var14 = var12.ANY;
    var9 = 8;
    var13 = var6[var9];
    var13 = var5.bind(var1)(var13);
    var13 = var13.OAuth2Scopes;
    var15 = var13.RPC;
    var13 = new Array(3);
    var13[0] = var15;
    var15 = var6[var9];
    var15 = var5.bind(var1)(var15);
    var15 = var15.OAuth2Scopes;
    var15 = var15.GUILDS;
    var13[1] = var15;
    var15 = var6[var9];
    var15 = var5.bind(var1)(var15);
    var15 = var15.OAuth2Scopes;
    var15 = var15.GUILDS_CHANNELS_READ;
    var13[2] = var15;
    var11[var14] = var13;
    var7['scope'] = var11;
    var11 = function handler(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.args;
            var5 = var2.channel_id;
            var2 = var1.socket;
            var4 = _closure1_slot5;
            var3 = var4.getChannel;
            var6 = var3.bind(var4)(var5);
            var3 = null;
            if(!(var3 != var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var6.isPrivate;
            var3 = var3.bind(var6)();
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2.authorization;
            var8 = var3.scopes;
            var4 = var8.includes;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = 8;
            var3 = var3[var10];
            var7 = undefined;
            var3 = var9.bind(var7)(var3);
            var3 = var3.OAuth2Scopes;
            var3 = var3.RPC;
            var3 = var4.bind(var8)(var3);
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var4 = var8.includes;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var9.bind(var7)(var3);
            var3 = var3.OAuth2Scopes;
            var3 = var3.DM_CHANNELS_READ;
            var3 = var4.bind(var8)(var3);
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 9;
            var3 = var8[var3];
            var8 = var4.bind(var7)(var3);
            var7 = {};
            var3 = _closure1_slot12;
            var3 = var3.INVALID_PERMISSIONS;
            var7['errorCode'] = var3;
            var3 = var8.prototype;
            var4 = Object.create(var3, {constructor: {value: var8}});
            var12 = 'Invalid scope';
            var14 = var4;
            var13 = var7;
            var3 = new var14[var8](var13, var12, var11);
            var3 = var3 instanceof Object ? var3 : var4;
            throw var3;
case 4:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 10;
            var3 = var10[var7];
            var8 = undefined;
            var4 = var9.bind(var8)(var3);
            var3 = var4.transformChannel;
            var7 = var10[var7];
            var9 = var9.bind(var8)(var7);
            var8 = var9.hasMessageReadPermission;
            var7 = var2.application;
            var7 = var7.id;
            var2 = var2.authorization;
            var2 = var2.scopes;
            var2 = var8.bind(var9)(var6, var7, var2);
            var2 = var3.bind(var4)(var6, var2);
            return var2;
case 2:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = {};
            var1 = _closure1_slot12;
            var1 = var1.INVALID_CHANNEL;
            var3['errorCode'] = var1;
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'Invalid channel id: ';
            var12 = var2.bind(var1)(var5);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var14 = var2;
            var13 = var3;
            var1 = new var14[var4](var13, var12, var11);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var7['handler'] = var11;
    var2[var10] = var7;
    var10 = var4.GET_CHANNELS;
    var7 = {};
    var11 = var6[var9];
    var11 = var5.bind(var1)(var11);
    var11 = var11.OAuth2Scopes;
    var11 = var11.RPC;
    var7['scope'] = var11;
    var11 = function handler(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var1 = var1.args;
            var5 = var1.guild_id;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 11;
            var2 = var7[var2];
            var7 = var6.bind(var4)(var2);
            var6 = var7.values;
            var8 = _closure1_slot5;
            var2 = var8.loadAllGuildAndPrivateChannelsFromDisk;
            var2 = var2.bind(var8)();
            var7 = var6.bind(var7)(var2);
            var8 = var7;
            if(!var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = _closure1_slot6;
            var2 = var6.getGuild;
            var6 = var2.bind(var6)(var5);
            _closure2_slot0 = var6;
            var2 = null;
            if(!(var2 != var6)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var7.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.guild_id;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var8 = var6.bind(var7)(var2);
case 8:
            var2 = {};
            var7 = var8.filter;
            var6 = function(arg1) {
                var4 = _closure1_slot7;
                var3 = var4.can;
                var1 = _closure1_slot11;
                var2 = var1.VIEW_CHANNEL;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = var7.bind(var8)(var6);
            var6 = var7.map;
            var3 = function(arg1) {
                var1 = arg1;
                var4 = var1.id;
                var3 = var1.name;
                var2 = var1.type;
                var1 = {};
                var1['id'] = var4;
                var1['name'] = var3;
                var1['type'] = var2;
                return var1;
            };
            var3 = var6.bind(var7)(var3);
            var2['channels'] = var3;
            return var2;
case 10:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 9;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = {};
            var1 = _closure1_slot12;
            var1 = var1.INVALID_GUILD;
            var3['errorCode'] = var1;
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'Invalid guild id: ';
            var9 = var2.bind(var1)(var5);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var11 = var2;
            var10 = var3;
            var1 = new var11[var4](var10, var9, var8);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var7['handler'] = var11;
    var2[var10] = var7;
    var10 = var4.GET_CHANNEL_PERMISSIONS;
    var7 = {};
    var11 = {};
    var14 = var12.ANY;
    var13 = var6[var9];
    var13 = var5.bind(var1)(var13);
    var13 = var13.OAuth2Scopes;
    var15 = var13.GUILDS_MEMBERS_READ;
    var13 = new Array(2);
    var13[0] = var15;
    var15 = var6[var9];
    var15 = var5.bind(var1)(var15);
    var15 = var15.OAuth2Scopes;
    var15 = var15.GUILDS_CHANNELS_READ;
    var13[1] = var15;
    var11[var14] = var13;
    var7['scope'] = var11;
    var11 = function handler() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var6 = var2.bind(var4)();
            var2 = null;
            if(!(var2 != var6)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var2 = {};
            var5 = _closure1_slot7;
            var3 = var5.computePermissions;
            var3 = var3.bind(var5)(var6);
            var2['permissions'] = var3;
            return var2;
case 12:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = {};
            var1 = _closure1_slot12;
            var1 = var1.INVALID_CHANNEL;
            var3['errorCode'] = var1;
            var1 = var4.prototype;
            var2 = Object.create(var1, {constructor: {value: var4}});
            var7 = 'Invalid channel';
            var9 = var2;
            var8 = var3;
            var1 = new var9[var4](var8, var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var7['handler'] = var11;
    var2[var10] = var7;
    var10 = var4.SELECT_VOICE_CHANNEL;
    var7 = {};
    var11 = var6[var9];
    var11 = var5.bind(var1)(var11);
    var11 = var11.OAuth2Scopes;
    var11 = var11.RPC;
    var7['scope'] = var11;
    var11 = function validation(arg1) {
        var5 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 13;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var2 = var1.bind(var2)(var5);
        var1 = var2.required;
        var3 = var1.bind(var2)();
        var2 = var3.keys;
        var1 = {};
        var4 = var5.string;
        var7 = var4.bind(var5)();
        var6 = var7.allow;
        var4 = null;
        var4 = var6.bind(var7)(var4);
        var1['channel_id'] = var4;
        var4 = var5.number;
        var7 = var4.bind(var5)();
        var6 = var7.min;
        var4 = 0;
        var7 = var6.bind(var7)(var4);
        var6 = var7.max;
        var4 = 60;
        var4 = var6.bind(var7)(var4);
        var1['timeout'] = var4;
        var4 = var5.boolean;
        var4 = var4.bind(var5)();
        var1['force'] = var4;
        var4 = var5.boolean;
        var4 = var4.bind(var5)();
        var1['navigate'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['validation'] = var11;
    var11 = function handler(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var8 = var1.server;
            var7 = var1.socket;
            var _closure2_slot0 = var7;
            var1 = var1.args;
            var9 = var1.channel_id;
            var _closure2_slot1 = var9;
            var6 = var1.timeout;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var6 = 0;
case 14:
            var5 = var1.force;
            if(!(var5 === var4)) { _fun0004_ip = 5; continue _fun0004 }
case 16:
            var5 = false;
case 5:
            var1 = var1.navigate;
            if(!(var1 === var4)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var1 = false;
case 17:
            var _closure2_slot2 = var1;
            if(var9) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 14;
            var3 = var11[var3];
            var11 = var10.bind(var4)(var3);
            var10 = var11.selectVoiceChannel;
            var3 = null;
            var10 = var10.bind(var11)(var3);
            return var3;
case 19:
            var10 = _closure1_slot8;
            var3 = var10.getVoiceChannelId;
            var3 = var3.bind(var10)();
            var10 = null;
            if(!(var10 != var3)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            if(!(var3 !== var9)) { _fun0004_ip = 21; continue _fun0004 }
case 23:
            var3 = false;
            if(!(var3 !== var5)) { _fun0004_ip = 24; continue _fun0004 }
case 21:
            var5 = var8.storeWait;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var5.bind(var8)(var7, var3, var6);
            var5 = var6.catch;
            var3 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = {};
                var1 = _closure1_slot12;
                var1 = var1.SELECT_CHANNEL_TIMED_OUT;
                var3['errorCode'] = var1;
                var1 = var4.prototype;
                var2 = Object.create(var1, {constructor: {value: var4}});
                var5 = 'Request to select voice channel timed out.';
                var7 = var2;
                var6 = var3;
                var1 = new var7[var4](var6, var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            };
            var6 = var5.bind(var6)(var3);
            var5 = var6.then;
            var3 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var7 = arg1;
                    var1 = null;
                    if(!(var1 != var7)) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var2 = _closure1_slot3;
                    var1 = var7.type;
                    var9 = undefined;
                    var1 = var2.bind(var9)(var1);
                    if(var1) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var5 = var2.bind(var9)(var1);
                    var3 = {};
                    var1 = _closure1_slot12;
                    var1 = var1.INVALID_CHANNEL;
                    var3['errorCode'] = var1;
                    var1 = var5.prototype;
                    var2 = Object.create(var1, {constructor: {value: var5}});
                    var12 = 'Channel is not a voice channel';
                    var14 = var2;
                    var13 = var3;
                    var1 = new var14[var5](var13, var12, var11);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
case 27:
                    var1 = global;
                    var3 = var1.Promise;
                    var2 = var3.all;
                    var5 = var1.Promise;
                    var1 = var5.resolve;
                    var5 = var1.bind(var5)(var7);
                    var1 = new Array(2);
                    var1[0] = var5;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 10;
                    var5 = var10[var4];
                    var6 = var8.bind(var9)(var5);
                    var5 = var6.transformChannel;
                    var4 = var10[var4];
                    var10 = var8.bind(var9)(var4);
                    var9 = var10.hasMessageReadPermission;
                    var4 = _closure2_slot0;
                    var8 = var4.application;
                    var8 = var8.id;
                    var4 = var4.authorization;
                    var4 = var4.scopes;
                    var4 = var9.bind(var10)(var7, var8, var4);
                    var4 = var5.bind(var6)(var7, var4);
                    var1[1] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
case 25:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = {};
                    var1 = _closure1_slot12;
                    var1 = var1.INVALID_CHANNEL;
                    var3['errorCode'] = var1;
                    var5 = _closure2_slot1;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'Invalid channel id: ';
                    var12 = var2.bind(var1)(var5);
                    var2 = var4.prototype;
                    var2 = Object.create(var2, {constructor: {value: var4}});
                    var14 = var2;
                    var13 = var3;
                    var1 = new var14[var4](var13, var12, var11);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var5 = var5.bind(var6)(var3);
            var3 = var5.then;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var6 = arg1;
                    var1 = var6[Symbol.iterator];
                    var6 = var1().next;
                    var2 = var6().value;
                    var3 = var1;
                    var4 = undefined;
                    var5 = var3 === var4;
                    var3 = undefined;
                    if(var5) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                    var3 = var2;
case 29:
                    var2 = undefined;
                    if(var5) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                    var7 = var6().value;
                    var6 = var1;
                    var6 = var6 === var4;
                    var2 = undefined;
                    var5 = var6;
                    if(var6) { _fun0006_ip = 31; continue _fun0006 }
case 33:
                    var2 = var7;
                    var5 = var6;
case 31:
                    if(var5) { _fun0006_ip = 34; continue _fun0006 }
case 16:
                    var1.return();
case 34:
                    var1 = var2.guild_id;
                    if(!var1) { _fun0006_ip = 35; continue _fun0006 }
case 17:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 15;
                    var5 = var7[var5];
                    var8 = var6.bind(var4)(var5);
                    var7 = var8.isChannelFull;
                    var6 = _closure1_slot9;
                    var5 = _closure1_slot6;
                    var5 = var7.bind(var8)(var3, var6, var5);
                    if(var5) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                    var7 = _closure1_slot7;
                    var6 = var7.can;
                    var5 = _closure1_slot11;
                    var5 = var5.CONNECT;
                    var5 = var6.bind(var7)(var5, var3);
                    if(var5) { _fun0006_ip = 35; continue _fun0006 }
case 38:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 9;
                    var5 = var7[var5];
                    var8 = var6.bind(var4)(var5);
                    var7 = {};
                    var5 = _closure1_slot12;
                    var5 = var5.INVALID_PERMISSIONS;
                    var7['errorCode'] = var5;
                    var5 = var8.prototype;
                    var6 = Object.create(var5, {constructor: {value: var8}});
                    var11 = 'Connect permission required to join channel';
                    var13 = var6;
                    var12 = var7;
                    var5 = new var13[var8](var12, var11, var10);
                    var5 = var5 instanceof Object ? var5 : var6;
                    throw var5;
case 35:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 14;
                    var5 = var8[var5];
                    var8 = var6.bind(var4)(var5);
                    var6 = var8.selectVoiceChannel;
                    var5 = var3.id;
                    var5 = var6.bind(var8)(var5);
                    var5 = _closure2_slot2;
                    if(!var5) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 16;
                    var5 = var8[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.replaceWith;
                    var9 = _closure1_slot10;
                    var8 = var9.CHANNEL;
                    var7 = var3.guild_id;
                    var3 = var3.id;
                    var3 = var8.bind(var9)(var7, var3);
                    var3 = var5.bind(var6)(var3);
case 39:
                    return var2;
case 36:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 9;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = {};
                    var1 = _closure1_slot12;
                    var1 = var1.INVALID_CHANNEL;
                    var3['errorCode'] = var1;
                    var1 = var4.prototype;
                    var2 = Object.create(var1, {constructor: {value: var4}});
                    var11 = 'Channel is full';
                    var13 = var2;
                    var12 = var3;
                    var1 = new var13[var4](var12, var11, var10);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var2 = var3.bind(var5)(var2);
            return var2;
case 24:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = {};
            var1 = _closure1_slot12;
            var1 = var1.SELECT_VOICE_FORCE_REQUIRED;
            var3['errorCode'] = var1;
            var1 = var4.prototype;
            var2 = Object.create(var1, {constructor: {value: var4}});
            var13 = 'User is already joined to a voice channel.';
            var15 = var2;
            var14 = var3;
            var1 = new var15[var4](var14, var13, var12);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var7['handler'] = var11;
    var2[var10] = var7;
    var10 = var4.GET_SELECTED_VOICE_CHANNEL;
    var7 = {};
    var11 = {};
    var13 = var12.ANY;
    var12 = var6[var9];
    var12 = var5.bind(var1)(var12);
    var12 = var12.OAuth2Scopes;
    var14 = var12.RPC;
    var12 = new Array(2);
    var12[0] = var14;
    var14 = var6[var9];
    var14 = var5.bind(var1)(var14);
    var14 = var14.OAuth2Scopes;
    var14 = var14.RPC_VOICE_READ;
    var12[1] = var14;
    var11[var13] = var12;
    var7['scope'] = var11;
    var11 = function handler(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.socket;
            var4 = _closure1_slot8;
            var1 = var4.getVoiceChannelId;
            var7 = var1.bind(var4)();
            var1 = null;
            var4 = var1 != var7;
            var5 = null;
            if(!var4) { _fun0007_ip = 33; continue _fun0007 }
case 41:
            var6 = _closure1_slot5;
            var4 = var6.getChannel;
            var5 = var4.bind(var6)(var7);
case 33:
            var4 = var1 != var5;
            var1 = null;
            if(!var4) { _fun0007_ip = 42; continue _fun0007 }
case 16:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 10;
            var3 = var9[var6];
            var7 = undefined;
            var4 = var8.bind(var7)(var3);
            var3 = var4.transformChannel;
            var6 = var9[var6];
            var8 = var8.bind(var7)(var6);
            var7 = var8.hasMessageReadPermission;
            var6 = var2.application;
            var6 = var6.id;
            var2 = var2.authorization;
            var2 = var2.scopes;
            var2 = var7.bind(var8)(var5, var6, var2);
            var1 = var3.bind(var4)(var5, var2);
case 42:
            return var1;
        }
    };
    var7['handler'] = var11;
    var2[var10] = var7;
    var10 = var4.SELECT_TEXT_CHANNEL;
    var7 = {};
    var11 = var6[var9];
    var11 = var5.bind(var1)(var11);
    var11 = var11.OAuth2Scopes;
    var11 = var11.RPC;
    var7['scope'] = var11;
    var11 = function validation(arg1) {
        var5 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 13;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var2 = var1.bind(var2)(var5);
        var1 = var2.required;
        var3 = var1.bind(var2)();
        var2 = var3.keys;
        var1 = {};
        var4 = var5.string;
        var7 = var4.bind(var5)();
        var6 = var7.allow;
        var4 = null;
        var4 = var6.bind(var7)(var4);
        var1['channel_id'] = var4;
        var4 = var5.number;
        var6 = var4.bind(var5)();
        var5 = var6.min;
        var4 = 0;
        var6 = var5.bind(var6)(var4);
        var5 = var6.max;
        var4 = 60;
        var4 = var5.bind(var6)(var4);
        var1['timeout'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['validation'] = var11;
    var11 = function handler(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var7 = var1.server;
            var6 = var1.socket;
            var _closure2_slot0 = var6;
            var3 = var1.args;
            var1 = var3.channel_id;
            var _closure2_slot1 = var1;
            var5 = var3.timeout;
            var8 = undefined;
            if(!(var5 === var8)) { _fun0008_ip = 14; continue _fun0008 }
case 15:
            var5 = 0;
case 14:
            if(var1) { _fun0008_ip = 43; continue _fun0008 }
case 44:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 16;
            var3 = var9[var3];
            var4 = var4.bind(var8)(var3);
            var3 = var4.transitionTo;
            var1 = _closure1_slot10;
            var1 = var1.ME;
            var1 = var3.bind(var4)(var1);
            var1 = null;
            _fun0008_ip = 45; continue _fun0008;
case 43:
            var4 = var7.storeWait;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var4.bind(var7)(var6, var3, var5);
            var4 = var5.catch;
            var3 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = {};
                var1 = _closure1_slot12;
                var1 = var1.SELECT_CHANNEL_TIMED_OUT;
                var3['errorCode'] = var1;
                var1 = var4.prototype;
                var2 = Object.create(var1, {constructor: {value: var4}});
                var5 = 'Request to select text channel timed out.';
                var7 = var2;
                var6 = var3;
                var1 = new var7[var4](var6, var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            };
            var5 = var4.bind(var5)(var3);
            var4 = var5.then;
            var3 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var7 = arg1;
                    var1 = null;
                    if(!(var1 != var7)) { _fun0009_ip = 25; continue _fun0009 }
case 26:
                    var2 = _closure1_slot4;
                    var1 = var7.type;
                    var9 = undefined;
                    var1 = var2.bind(var9)(var1);
                    if(var1) { _fun0009_ip = 27; continue _fun0009 }
case 28:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var5 = var2.bind(var9)(var1);
                    var3 = {};
                    var1 = _closure1_slot12;
                    var1 = var1.INVALID_CHANNEL;
                    var3['errorCode'] = var1;
                    var1 = var5.prototype;
                    var2 = Object.create(var1, {constructor: {value: var5}});
                    var12 = 'Channel is not a text channel';
                    var14 = var2;
                    var13 = var3;
                    var1 = new var14[var5](var13, var12, var11);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
case 27:
                    var1 = global;
                    var3 = var1.Promise;
                    var2 = var3.all;
                    var5 = var1.Promise;
                    var1 = var5.resolve;
                    var5 = var1.bind(var5)(var7);
                    var1 = new Array(2);
                    var1[0] = var5;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 10;
                    var5 = var10[var4];
                    var6 = var8.bind(var9)(var5);
                    var5 = var6.transformChannel;
                    var4 = var10[var4];
                    var10 = var8.bind(var9)(var4);
                    var9 = var10.hasMessageReadPermission;
                    var4 = _closure2_slot0;
                    var8 = var4.application;
                    var8 = var8.id;
                    var4 = var4.authorization;
                    var4 = var4.scopes;
                    var4 = var9.bind(var10)(var7, var8, var4);
                    var4 = var5.bind(var6)(var7, var4);
                    var1[1] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
case 25:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = {};
                    var1 = _closure1_slot12;
                    var1 = var1.INVALID_CHANNEL;
                    var3['errorCode'] = var1;
                    var5 = _closure2_slot1;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'Invalid channel id: ';
                    var12 = var2.bind(var1)(var5);
                    var2 = var4.prototype;
                    var2 = Object.create(var2, {constructor: {value: var4}});
                    var14 = var2;
                    var13 = var3;
                    var1 = new var14[var4](var13, var12, var11);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var5 = arg1;
                    var3 = var5[Symbol.iterator];
                    var5 = var3().next;
                    var1 = var5().value;
                    var2 = var3;
                    var6 = undefined;
                    var4 = var2 === var6;
                    var2 = undefined;
                    if(var4) { _fun0010_ip = 29; continue _fun0010 }
case 30:
                    var2 = var1;
case 29:
                    var1 = undefined;
                    if(var4) { _fun0010_ip = 31; continue _fun0010 }
case 32:
                    var7 = var5().value;
                    var5 = var3;
                    var5 = var5 === var6;
                    var1 = undefined;
                    var4 = var5;
                    if(var5) { _fun0010_ip = 31; continue _fun0010 }
case 33:
                    var1 = var7;
                    var4 = var5;
case 31:
                    if(var4) { _fun0010_ip = 34; continue _fun0010 }
case 16:
                    var3.return();
case 34:
                    var3 = var1.guild_id;
                    if(!var3) { _fun0010_ip = 46; continue _fun0010 }
case 47:
                    var7 = _closure1_slot7;
                    var5 = var7.can;
                    var4 = _closure1_slot11;
                    var4 = var4.VIEW_CHANNEL;
                    var4 = var5.bind(var7)(var4, var2);
                    if(var4) { _fun0010_ip = 46; continue _fun0010 }
case 48:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 9;
                    var4 = var7[var4];
                    var7 = var5.bind(var6)(var4);
                    var5 = {};
                    var3 = _closure1_slot12;
                    var3 = var3.INVALID_CHANNEL;
                    var5['errorCode'] = var3;
                    var3 = var7.prototype;
                    var4 = Object.create(var3, {constructor: {value: var7}});
                    var9 = 'No permission to see channel';
                    var11 = var4;
                    var10 = var5;
                    var3 = new var11[var7](var10, var9, var8);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 46:
                    var3 = var1.guild_id;
                    if(var3) { _fun0010_ip = 49; continue _fun0010 }
case 50:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 14;
                    var3 = var7[var3];
                    var7 = var4.bind(var6)(var3);
                    var4 = var7.selectPrivateChannel;
                    var3 = var2.id;
                    var3 = var4.bind(var7)(var3);
                    _fun0010_ip = 51; continue _fun0010;
case 49:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 16;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.replaceWith;
                    var7 = _closure1_slot10;
                    var6 = var7.CHANNEL;
                    var5 = var1.guild_id;
                    var2 = var2.id;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3.bind(var4)(var2);
case 51:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 45:
            return var1;
        }
    };
    var7['handler'] = var11;
    var2[var10] = var7;
    var7 = var4.CREATE_CHANNEL_INVITE;
    var4 = {};
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.OAuth2Scopes;
    var9 = var9.RPC;
    var4['scope'] = var9;
    var8 = function handler(arg1) {
        var2 = arg1;
        var4 = var2.args;
        var6 = var4.channel_id;
        var _closure2_slot0 = var6;
        var2 = null;
        var3 = Object.create(var2);
        var2 = 0;
        var3['channel_id'] = var2;
        var9 = {};
        var8 = var4;
        var7 = var3;
        var5 = copyDataProperties(var9, var8, var7);
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 17;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.createInvite;
        var2 = 'RPC';
        var3 = var3.bind(var4)(var6, var5, var2);
        var2 = var3.catch;
        var1 = function() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = {};
            var1 = _closure1_slot12;
            var1 = var1.INVALID_PERMISSIONS;
            var3['errorCode'] = var1;
            var6 = _closure2_slot0;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var2 = 'Unable to generate an invite for ';
            var1 = '. Does this user have permissions?';
            var7 = var5.bind(var2)(var6, var1);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var9 = var2;
            var8 = var3;
            var1 = new var9[var4](var8, var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['handler'] = var8;
    var2[var7] = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/channels.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
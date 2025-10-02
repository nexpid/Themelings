// app/records/ChannelRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var50 = require;
    var9 = metroImportDefault;
    var11 = metroImportAll;
    var3 = exports;
    var51 = dependencyMap;
    var _closure1_slot0 = var50;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var11;
    var _closure1_slot3 = var51;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot5;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = _closure1_slot36;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = new Array(0);
case 5:
            var5 = _closure1_slot5;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 7: // try_start_0
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
case 8: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
            CatchBlockStart(arg_register=1);
case 9:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot36 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var43 = function isGuildVocalChannelType(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = 'SELECTABLE';
            var1 = var1 !== var4;
            if(!var1) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var3 = _closure1_slot19;
            var2 = var3.has;
            var1 = var2.bind(var3)(var4);
case 11:
            return var1;
        }
    };
    var _closure1_slot37 = var43;
    var41 = function _isPrivate(arg1) {
        var3 = _closure1_slot20;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot38 = var41;
    var40 = function _isMultiUserDM(arg1) {
        var3 = _closure1_slot21;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot39 = var40;
    var38 = function isVoiceChannel(arg1) {
        var3 = _closure1_slot23;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot40 = var38;
    var35 = function _isThread(arg1) {
        var3 = _closure1_slot25;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot41 = var35;
    var1 = function convertPermissionOverwrites(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = {};
            var _closure2_slot0 = var1;
            var3 = null;
            if(!(var3 != var4)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var3 = var4.forEach;
            var2 = function(arg1) {
                var5 = arg1;
                var4 = _closure2_slot0;
                var3 = var5.id;
                var2 = {};
                var1 = var5.id;
                var2['id'] = var1;
                var1 = var5.type;
                var2['type'] = var1;
                var7 = _closure1_slot2;
                var8 = _closure1_slot3;
                var6 = 8;
                var9 = var8[var6];
                var1 = undefined;
                var11 = var7.bind(var1)(var9);
                var10 = var11.deserialize;
                var9 = var5.allow;
                var9 = var10.bind(var11)(var9);
                var2['allow'] = var9;
                var6 = var8[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.deserialize;
                var5 = var5.deny;
                var5 = var6.bind(var7)(var5);
                var2['deny'] = var5;
                var4[var3] = var2;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 13:
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var1 = function convertNicks(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                var1 = arg1;
                var2 = arg2;
                var3 = var2.id;
                var2 = var2.nick;
                var1[var3] = var2;
                return var1;
            };
            var1 = {};
            var1 = var3.bind(var4)(var5, var2, var1);
            _fun0005_ip = 17; continue _fun0005;
case 15:
            var1 = {};
case 17:
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function convertAvailableTags(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0006_ip = 18; continue _fun0006 }
case 16:
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.id;
                    var1['id'] = var3;
                    var3 = var2.name;
                    var1['name'] = var3;
                    var5 = var2.emoji_id;
                    var4 = 0;
                    var3 = undefined;
                    if(!(var4 !== var5)) { _fun0007_ip = 19; continue _fun0007 }
case 20:
                    var3 = var2.emoji_id;
case 19:
                    var1['emojiId'] = var3;
                    var3 = var2.emoji_name;
                    var1['emojiName'] = var3;
                    var3 = var2.moderated;
                    var1['moderated'] = var3;
                    var2 = var2.color;
                    var1['color'] = var2;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            _fun0006_ip = 13; continue _fun0006;
case 18:
            var1 = new Array(0);
case 13:
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var1 = function convertIconEmoji(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 != var3;
            var1 = undefined;
            if(!var2) { _fun0008_ip = 20; continue _fun0008 }
case 21:
            var2 = {};
            var4 = var3.id;
            var2['id'] = var4;
            var3 = var3.name;
            var2['name'] = var3;
            var1 = var2;
case 20:
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var23 = function getAccessPermissions(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = _closure1_slot37;
            var3 = undefined;
            var1 = arg1;
            var1 = var4.bind(var3)(var1);
            if(var1) { _fun0009_ip = 13; continue _fun0009 }
case 22:
            var1 = _closure1_slot14;
            var1 = var1.VIEW_CHANNEL;
            _fun0009_ip = 23; continue _fun0009;
case 13:
            var1 = _closure1_slot27;
case 23:
            return var1;
        }
    };
    var _closure1_slot46 = var23;
    var1 = function transformNonUnderscoreProperties(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var2 = 'topic';
            var2 = var2 in var1;
            if(!var2) { _fun0010_ip = 24; continue _fun0010 }
case 21:
            var2 = var1.topic;
            var1['topic_'] = var2;
            var2 = delete var1.topic;
case 24:
            var2 = 'position';
            var2 = var2 in var1;
            if(!var2) { _fun0010_ip = 15; continue _fun0010 }
case 25:
            var2 = var1.position;
            var1['position_'] = var2;
            var2 = delete var1.position;
case 15:
            var2 = 'permissionOverwrites';
            var2 = var2 in var1;
            if(!var2) { _fun0010_ip = 26; continue _fun0010 }
case 27:
            var2 = var1.permissionOverwrites;
            var1['permissionOverwrites_'] = var2;
            var2 = delete var1.permissionOverwrites;
case 26:
            var2 = 'bitrate';
            var2 = var2 in var1;
            if(!var2) { _fun0010_ip = 28; continue _fun0010 }
case 29:
            var2 = var1.bitrate;
            var1['bitrate_'] = var2;
            var2 = delete var1.bitrate;
case 28:
            var2 = 'userLimit';
            var2 = var2 in var1;
            if(!var2) { _fun0010_ip = 30; continue _fun0010 }
case 31:
            var2 = var1.userLimit;
            var1['userLimit_'] = var2;
            var2 = delete var1.userLimit;
case 30:
            var2 = 'nsfw';
            var2 = var2 in var1;
            if(!var2) { _fun0010_ip = 32; continue _fun0010 }
case 33:
            var2 = var1.nsfw;
            var1['nsfw_'] = var2;
            var2 = delete var1.nsfw;
case 32:
            var2 = 'rateLimitPerUser';
            var2 = var2 in var1;
            if(!var2) { _fun0010_ip = 34; continue _fun0010 }
case 35:
            var2 = var1.rateLimitPerUser;
            var1['rateLimitPerUser_'] = var2;
            var2 = delete var1.rateLimitPerUser;
case 34:
            var2 = 'flags';
            var2 = var2 in var1;
            if(!var2) { _fun0010_ip = 36; continue _fun0010 }
case 37:
            var2 = var1.flags;
            var1['flags_'] = var2;
            var2 = delete var1.flags;
case 36:
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var4 = function castChannelRecord(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot34;
            var3 = var4.type;
            var2 = null;
            if(!(var2 == var3)) { _fun0011_ip = 24; continue _fun0011 }
case 38:
            var6 = _closure1_slot11;
            var3 = var6.GUILD_TEXT;
case 24:
            var3 = var5[var3];
            if(!(var2 == var3)) { _fun0011_ip = 19; continue _fun0011 }
case 39:
            var3 = _closure1_slot30;
case 19:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var1 = var2.dangerouslyCast;
            var1 = var1.bind(var2)(var4, var3);
            return var1;
        }
    };
    var _closure1_slot48 = var4;
    var2 = function createChannelRecord(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot34;
            var1 = var3.type;
            var4 = null;
            if(!(var4 == var1)) { _fun0012_ip = 24; continue _fun0012 }
case 38:
            var6 = _closure1_slot11;
            var1 = var6.GUILD_TEXT;
case 24:
            var1 = var5[var1];
            if(!(var4 == var1)) { _fun0012_ip = 19; continue _fun0012 }
case 39:
            var1 = _closure1_slot30;
case 19:
            var4 = _closure1_slot47;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var8 = var2;
            var7 = var3;
            var1 = new var8[var1](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var _closure1_slot49 = var2;
    var6 = global;
    var10 = var6.Object;
    var8 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var51[var1];
    var1 = undefined;
    var7 = var9.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 1;
    var7 = var51[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 2;
    var7 = var51[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var51[var7];
    var8 = var9.bind(var1)(var7);
    var _closure1_slot7 = var8;
    var7 = 4;
    var7 = var51[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var51[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var51[var7];
    var9 = var50.bind(var1)(var7);
    var7 = var9.BITRATE_DEFAULT;
    var _closure1_slot10 = var7;
    var52 = var9.ChannelTypes;
    var _closure1_slot11 = var52;
    var7 = var9.BasicPermissions;
    var _closure1_slot12 = var7;
    var10 = var9.ChannelTypesSets;
    var _closure1_slot13 = var10;
    var9 = var9.Permissions;
    var _closure1_slot14 = var9;
    var10 = 7;
    var10 = var51[var10];
    var10 = var50.bind(var1)(var10);
    var10 = var10.ChannelFlags;
    var _closure1_slot15 = var10;
    var13 = var6.Set;
    var12 = var52.GUILD_TEXT;
    var10 = new Array(10);
    var10[0] = var12;
    var12 = var52.GUILD_ANNOUNCEMENT;
    var10[1] = var12;
    var12 = var52.ANNOUNCEMENT_THREAD;
    var10[2] = var12;
    var12 = var52.PUBLIC_THREAD;
    var10[3] = var12;
    var12 = var52.PRIVATE_THREAD;
    var10[4] = var12;
    var12 = var52.GUILD_DIRECTORY;
    var10[5] = var12;
    var12 = var52.GUILD_FORUM;
    var10[6] = var12;
    var12 = var52.GUILD_MEDIA;
    var10[7] = var12;
    var12 = var52.DM;
    var10[8] = var12;
    var12 = var52.GROUP_DM;
    var10[9] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot16 = var10;
    var13 = var6.Set;
    var12 = var52.DM;
    var10 = new Array(14);
    var10[0] = var12;
    var12 = var52.GROUP_DM;
    var10[1] = var12;
    var12 = var52.GUILD_TEXT;
    var10[2] = var12;
    var12 = var52.GUILD_VOICE;
    var10[3] = var12;
    var12 = var52.GUILD_STAGE_VOICE;
    var10[4] = var12;
    var12 = var52.GUILD_CATEGORY;
    var10[5] = var12;
    var12 = var52.GUILD_ANNOUNCEMENT;
    var10[6] = var12;
    var12 = var52.GUILD_STORE;
    var10[7] = var12;
    var12 = var52.ANNOUNCEMENT_THREAD;
    var10[8] = var12;
    var12 = var52.PUBLIC_THREAD;
    var10[9] = var12;
    var12 = var52.PRIVATE_THREAD;
    var10[10] = var12;
    var12 = var52.GUILD_DIRECTORY;
    var10[11] = var12;
    var12 = var52.GUILD_FORUM;
    var10[12] = var12;
    var12 = var52.GUILD_MEDIA;
    var10[13] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var48 = var10 instanceof Object ? var10 : var12;
    var13 = var6.Set;
    var12 = var52.GUILD_TEXT;
    var10 = new Array(5);
    var10[0] = var12;
    var12 = var52.GUILD_ANNOUNCEMENT;
    var10[1] = var12;
    var12 = var52.ANNOUNCEMENT_THREAD;
    var10[2] = var12;
    var12 = var52.PUBLIC_THREAD;
    var10[3] = var12;
    var12 = var52.PRIVATE_THREAD;
    var10[4] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot17 = var10;
    var13 = var6.Set;
    var12 = var52.GUILD_TEXT;
    var10 = new Array(6);
    var10[0] = var12;
    var12 = var52.GUILD_ANNOUNCEMENT;
    var10[1] = var12;
    var12 = var52.GUILD_FORUM;
    var10[2] = var12;
    var12 = var52.GUILD_MEDIA;
    var10[3] = var12;
    var12 = var52.GUILD_VOICE;
    var10[4] = var12;
    var12 = var52.GUILD_STAGE_VOICE;
    var10[5] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var47 = var10 instanceof Object ? var10 : var12;
    var13 = var6.Set;
    var12 = var52.GUILD_TEXT;
    var10 = new Array(12);
    var10[0] = var12;
    var12 = var52.GUILD_VOICE;
    var10[1] = var12;
    var12 = var52.GUILD_STAGE_VOICE;
    var10[2] = var12;
    var12 = var52.GUILD_CATEGORY;
    var10[3] = var12;
    var12 = var52.GUILD_ANNOUNCEMENT;
    var10[4] = var12;
    var12 = var52.GUILD_STORE;
    var10[5] = var12;
    var12 = var52.ANNOUNCEMENT_THREAD;
    var10[6] = var12;
    var12 = var52.PUBLIC_THREAD;
    var10[7] = var12;
    var12 = var52.PRIVATE_THREAD;
    var10[8] = var12;
    var12 = var52.GUILD_DIRECTORY;
    var10[9] = var12;
    var12 = var52.GUILD_FORUM;
    var10[10] = var12;
    var12 = var52.GUILD_MEDIA;
    var10[11] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var46 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot18 = var46;
    var13 = var6.Set;
    var12 = var52.GUILD_TEXT;
    var10 = new Array(4);
    var10[0] = var12;
    var12 = var52.GUILD_ANNOUNCEMENT;
    var10[1] = var12;
    var12 = var52.GUILD_FORUM;
    var10[2] = var12;
    var12 = var52.GUILD_MEDIA;
    var10[3] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var45 = var10 instanceof Object ? var10 : var12;
    var13 = var6.Set;
    var12 = var52.GUILD_VOICE;
    var10 = new Array(2);
    var10[0] = var12;
    var12 = var52.GUILD_STAGE_VOICE;
    var10[1] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var44 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot19 = var44;
    var13 = var6.Set;
    var12 = var52.GUILD_STAGE_VOICE;
    var10 = new Array(1);
    var10[0] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var42 = var10 instanceof Object ? var10 : var12;
    var13 = var6.Set;
    var12 = var52.DM;
    var10 = new Array(2);
    var10[0] = var12;
    var12 = var52.GROUP_DM;
    var10[1] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot20 = var10;
    var13 = var6.Set;
    var12 = var52.GROUP_DM;
    var10 = new Array(1);
    var10[0] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot21 = var10;
    var13 = var6.Set;
    var12 = var52.DM;
    var10 = new Array(7);
    var10[0] = var12;
    var12 = var52.GROUP_DM;
    var10[1] = var12;
    var12 = var52.GUILD_TEXT;
    var10[2] = var12;
    var12 = var52.GUILD_ANNOUNCEMENT;
    var10[3] = var12;
    var12 = var52.ANNOUNCEMENT_THREAD;
    var10[4] = var12;
    var12 = var52.PUBLIC_THREAD;
    var10[5] = var12;
    var12 = var52.PRIVATE_THREAD;
    var10[6] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var39 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot22 = var39;
    var13 = var6.Set;
    var12 = var52.DM;
    var10 = new Array(6);
    var10[0] = var12;
    var12 = var52.GROUP_DM;
    var10[1] = var12;
    var12 = var52.GUILD_VOICE;
    var10[2] = var12;
    var12 = var52.GUILD_STAGE_VOICE;
    var10[3] = var12;
    var12 = var52.PUBLIC_THREAD;
    var10[4] = var12;
    var12 = var52.PRIVATE_THREAD;
    var10[5] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot23 = var10;
    var13 = var6.Set;
    var12 = var52.GUILD_TEXT;
    var10 = new Array(10);
    var10[0] = var12;
    var12 = var52.GUILD_ANNOUNCEMENT;
    var10[1] = var12;
    var12 = var52.ANNOUNCEMENT_THREAD;
    var10[2] = var12;
    var12 = var52.PUBLIC_THREAD;
    var10[3] = var12;
    var12 = var52.PRIVATE_THREAD;
    var10[4] = var12;
    var12 = var52.GUILD_DIRECTORY;
    var10[5] = var12;
    var12 = var52.GUILD_FORUM;
    var10[6] = var12;
    var12 = var52.GUILD_MEDIA;
    var10[7] = var12;
    var12 = var52.DM;
    var10[8] = var12;
    var12 = var52.GROUP_DM;
    var10[9] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot24 = var10;
    var13 = var6.Set;
    var12 = var52.ANNOUNCEMENT_THREAD;
    var10 = new Array(3);
    var10[0] = var12;
    var12 = var52.PUBLIC_THREAD;
    var10[1] = var12;
    var12 = var52.PRIVATE_THREAD;
    var10[2] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var37 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot25 = var37;
    var13 = var6.Set;
    var12 = var52.GUILD_TEXT;
    var10 = new Array(4);
    var10[0] = var12;
    var12 = var52.GUILD_ANNOUNCEMENT;
    var10[1] = var12;
    var12 = var52.GUILD_FORUM;
    var10[2] = var12;
    var12 = var52.GUILD_MEDIA;
    var10[3] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var36 = var10 instanceof Object ? var10 : var12;
    var13 = var6.Set;
    var12 = var52.DM;
    var10 = new Array(12);
    var10[0] = var12;
    var12 = var52.GROUP_DM;
    var10[1] = var12;
    var12 = var52.GUILD_TEXT;
    var10[2] = var12;
    var12 = var52.GUILD_ANNOUNCEMENT;
    var10[3] = var12;
    var12 = var52.ANNOUNCEMENT_THREAD;
    var10[4] = var12;
    var12 = var52.PUBLIC_THREAD;
    var10[5] = var12;
    var12 = var52.PRIVATE_THREAD;
    var10[6] = var12;
    var12 = var52.GUILD_FORUM;
    var10[7] = var12;
    var12 = var52.GUILD_MEDIA;
    var10[8] = var12;
    var12 = var52.GUILD_DIRECTORY;
    var10[9] = var12;
    var12 = var52.GUILD_VOICE;
    var10[10] = var12;
    var12 = var52.GUILD_STAGE_VOICE;
    var10[11] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot26 = var10;
    var13 = var6.Set;
    var12 = var52.GUILD_TEXT;
    var10 = new Array(11);
    var10[0] = var12;
    var12 = var52.GUILD_ANNOUNCEMENT;
    var10[1] = var12;
    var12 = var52.GUILD_STORE;
    var10[2] = var12;
    var12 = var52.GUILD_VOICE;
    var10[3] = var12;
    var12 = var52.GUILD_STAGE_VOICE;
    var10[4] = var12;
    var12 = var52.ANNOUNCEMENT_THREAD;
    var10[5] = var12;
    var12 = var52.PUBLIC_THREAD;
    var10[6] = var12;
    var12 = var52.PRIVATE_THREAD;
    var10[7] = var12;
    var12 = var52.GUILD_DIRECTORY;
    var10[8] = var12;
    var12 = var52.GUILD_FORUM;
    var10[9] = var12;
    var12 = var52.GUILD_MEDIA;
    var10[10] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var34 = var10 instanceof Object ? var10 : var12;
    var13 = var6.Set;
    var12 = var52.GUILD_ANNOUNCEMENT;
    var10 = new Array(9);
    var10[0] = var12;
    var12 = var52.GUILD_CATEGORY;
    var10[1] = var12;
    var12 = var52.GUILD_STORE;
    var10[2] = var12;
    var12 = var52.GUILD_TEXT;
    var10[3] = var12;
    var12 = var52.GUILD_VOICE;
    var10[4] = var12;
    var12 = var52.GUILD_STAGE_VOICE;
    var10[5] = var12;
    var12 = var52.GUILD_DIRECTORY;
    var10[6] = var12;
    var12 = var52.GUILD_FORUM;
    var10[7] = var12;
    var12 = var52.GUILD_MEDIA;
    var10[8] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var33 = var10 instanceof Object ? var10 : var12;
    var13 = var6.Set;
    var12 = var52.GUILD_TEXT;
    var10 = new Array(2);
    var10[0] = var12;
    var12 = var52.GUILD_ANNOUNCEMENT;
    var10[1] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var32 = var10 instanceof Object ? var10 : var12;
    var13 = var6.Set;
    var12 = var52.GUILD_TEXT;
    var10 = new Array(4);
    var10[0] = var12;
    var12 = var52.GUILD_ANNOUNCEMENT;
    var10[1] = var12;
    var12 = var52.GUILD_FORUM;
    var10[2] = var12;
    var12 = var52.GUILD_MEDIA;
    var10[3] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var31 = var10 instanceof Object ? var10 : var12;
    var13 = var6.Set;
    var12 = var52.GUILD_TEXT;
    var10 = new Array(6);
    var10[0] = var12;
    var12 = var52.GUILD_ANNOUNCEMENT;
    var10[1] = var12;
    var12 = var52.GUILD_FORUM;
    var10[2] = var12;
    var12 = var52.GUILD_MEDIA;
    var10[3] = var12;
    var12 = var52.GUILD_VOICE;
    var10[4] = var12;
    var12 = var52.GUILD_STAGE_VOICE;
    var10[5] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var30 = var10 instanceof Object ? var10 : var12;
    var13 = var6.Set;
    var12 = var52.GUILD_ANNOUNCEMENT;
    var10 = new Array(5);
    var10[0] = var12;
    var12 = var52.GUILD_TEXT;
    var10[1] = var12;
    var12 = var52.GUILD_FORUM;
    var10[2] = var12;
    var12 = var52.GUILD_MEDIA;
    var10[3] = var12;
    var12 = var52.ANNOUNCEMENT_THREAD;
    var10[4] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var29 = var10 instanceof Object ? var10 : var12;
    var13 = var6.Set;
    var12 = var52.GUILD_TEXT;
    var10 = new Array(8);
    var10[0] = var12;
    var12 = var52.GUILD_FORUM;
    var10[1] = var12;
    var12 = var52.GUILD_MEDIA;
    var10[2] = var12;
    var12 = var52.ANNOUNCEMENT_THREAD;
    var10[3] = var12;
    var12 = var52.PUBLIC_THREAD;
    var10[4] = var12;
    var12 = var52.PRIVATE_THREAD;
    var10[5] = var12;
    var12 = var52.GUILD_VOICE;
    var10[6] = var12;
    var12 = var52.GUILD_STAGE_VOICE;
    var10[7] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var28 = var10 instanceof Object ? var10 : var12;
    var13 = var6.Set;
    var12 = var52.PUBLIC_THREAD;
    var10 = new Array(4);
    var10[0] = var12;
    var12 = var52.PRIVATE_THREAD;
    var10[1] = var12;
    var12 = var52.GUILD_VOICE;
    var10[2] = var12;
    var12 = var52.GUILD_STAGE_VOICE;
    var10[3] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var27 = var10 instanceof Object ? var10 : var12;
    var13 = var6.Set;
    var12 = var52.GUILD_TEXT;
    var10 = new Array(3);
    var10[0] = var12;
    var12 = var52.GUILD_FORUM;
    var10[1] = var12;
    var12 = var52.GUILD_MEDIA;
    var10[2] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var26 = var10 instanceof Object ? var10 : var12;
    var13 = var6.Set;
    var12 = var52.GUILD_TEXT;
    var10 = new Array(4);
    var10[0] = var12;
    var12 = var52.GUILD_CATEGORY;
    var10[1] = var12;
    var12 = var52.GUILD_FORUM;
    var10[2] = var12;
    var12 = var52.GUILD_ANNOUNCEMENT;
    var10[3] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var25 = var10 instanceof Object ? var10 : var12;
    var13 = var6.Set;
    var12 = var52.GUILD_TEXT;
    var10 = new Array(4);
    var10[0] = var12;
    var12 = var52.GUILD_ANNOUNCEMENT;
    var10[1] = var12;
    var12 = var52.GUILD_FORUM;
    var10[2] = var12;
    var12 = var52.GUILD_VOICE;
    var10[3] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var58 = var12;
    var57 = var10;
    var10 = new var58[var13](var57, var56);
    var24 = var10 instanceof Object ? var10 : var12;
    var10 = 8;
    var10 = var51[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.combine;
    var10 = var9.CONNECT;
    var9 = var9.VIEW_CHANNEL;
    var9 = var11.bind(var12)(var10, var9);
    var _closure1_slot27 = var9;
    var9 = var7.CONNECT;
    var7 = var7.VIEW_CHANNEL;
    var7 = var9 | var7;
    var _closure1_slot28 = var7;
    var7 = function ChannelRecordProperties(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = arg1;
            var3 = this;
            var5 = _closure1_slot8;
            var2 = _closure1_slot50;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var2 = var4.id;
            var3['id'] = var2;
            var5 = var4.type;
            var2 = null;
            if(!(var2 == var5)) { _fun0013_ip = 40; continue _fun0013 }
case 41:
            var6 = _closure1_slot11;
            var5 = var6.GUILD_TEXT;
case 40:
            var3['type'] = var5;
            var6 = var4.name;
            var7 = var2 != var6;
            var5 = '';
            if(!var7) { _fun0013_ip = 42; continue _fun0013 }
case 43:
            var5 = var6;
case 42:
            var3['name'] = var5;
            var4 = var4.guild_id;
            var5 = var2 != var4;
            var2 = null;
            if(!var5) { _fun0013_ip = 44; continue _fun0013 }
case 45:
            var2 = var4;
case 44:
            var3['guild_id'] = var2;
            return var1;
        }
    };
    var _closure1_slot50 = var7;
    var22 = var8.bind(var1)(var7);
    var8 = var6.Object;
    var7 = var8.freeze;
    var6 = {};
    var6 = var7.bind(var8)(var6);
    var _closure1_slot29 = var6;
    var6 = function(arg1) {
        var4 = function ChannelRecordBase() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot8;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot35;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'permissionOverwrites';
        var5['key'] = var1;
        var1 = function get() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = this;
                var1 = var1.permissionOverwrites_;
                var2 = null;
                if(!(var2 == var1)) { _fun0014_ip = 46; continue _fun0014 }
case 47:
                var1 = _closure1_slot29;
case 46:
                return var1;
            }
        };
        var5['get'] = var1;
        var1 = new Array(52);
        var1[0] = var5;
        var5 = {};
        var7 = 'topic';
        var5['key'] = var7;
        var7 = function get() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = this;
                var2 = var1.topic_;
                var1 = null;
                var3 = var1 != var2;
                var1 = '';
                if(!var3) { _fun0015_ip = 48; continue _fun0015 }
case 46:
                var1 = var2;
case 48:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'position';
        var5['key'] = var7;
        var7 = function get() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var1 = this;
                var2 = var1.position_;
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0016_ip = 49; continue _fun0016 }
case 22:
                var1 = var2;
case 49:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'bitrate';
        var5['key'] = var7;
        var7 = function get() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var1 = this;
                var1 = var1.bitrate_;
                var2 = null;
                if(!(var2 == var1)) { _fun0017_ip = 46; continue _fun0017 }
case 47:
                var1 = _closure1_slot10;
case 46:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'userLimit';
        var5['key'] = var7;
        var7 = function get() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var1 = this;
                var2 = var1.userLimit_;
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0018_ip = 49; continue _fun0018 }
case 22:
                var1 = var2;
case 49:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'nsfw';
        var5['key'] = var7;
        var7 = function get() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var1 = this;
                var2 = var1.nsfw_;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0019_ip = 38; continue _fun0019 }
case 50:
                var1 = var2;
case 38:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'rateLimitPerUser';
        var5['key'] = var7;
        var7 = function get() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var1 = this;
                var2 = var1.rateLimitPerUser_;
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0020_ip = 49; continue _fun0020 }
case 22:
                var1 = var2;
case 49:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'flags';
        var5['key'] = var7;
        var7 = function get() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var1 = this;
                var2 = var1.flags_;
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0021_ip = 49; continue _fun0021 }
case 22:
                var1 = var2;
case 49:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'toJS';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var3 = this;
            var4 = var1;
            var2 = copyDataProperties(var4, var3);
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'set';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = this;
            var2 = var3.merge;
            var5 = _closure1_slot47;
            var1 = {};
            var6 = arg2;
            var4 = arg1;
            var1[var4] = var6;
            var4 = undefined;
            var4 = var5.bind(var4)(var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'merge';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var10 = arg1;
                var2 = this;
                var3 = _closure1_slot47;
                var1 = undefined;
                var1 = var3.bind(var1)(var10);
                var8 = var10;
                var3 = null;
                var1 = null;
                var4 = null;
                for(var5 in var8)
case 20:
                {
                    var11 = var1;
                    var4 = var11;
case 51:
                    var12 = var5;
                    var13 = var10.hasOwnProperty;
                    var13 = var13.bind(var10)(var12);
                    if(!var13) { _fun0022_ip = 52; continue _fun0022 }
case 27:
                    var15 = var2[var12];
                    var14 = var10[var12];
                    var13 = var15 !== var14;
case 52:
                    var1 = var11;
                    if(!var13) { _fun0022_ip = 20; continue _fun0022 }
case 53:
                    var1 = var11;
                    if(!(var3 == var11)) { _fun0022_ip = 54; continue _fun0022 }
case 55:
                    var11 = var2.toJS;
                    var1 = var11.bind(var2)();
case 54:
                    var11 = var10[var12];
                    var1[var12] = var11;
                    _fun0022_ip = 20; continue _fun0022;
                }
case 28:
                var1 = var2;
                if(!(var3 != var4)) { _fun0022_ip = 56; continue _fun0022 }
case 57:
                var2 = var2.constructor;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var17 = var3;
                var16 = var4;
                var2 = new var17[var2](var16, var15);
                var1 = var2 instanceof Object ? var2 : var3;
case 56:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'computeLurkerPermissionsAllowList';
        var5['key'] = var7;
        var7 = function value() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var2 = this;
                var1 = var2.isGuildStageVoice;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0023_ip = 25; continue _fun0023 }
case 12:
                var4 = _closure1_slot9;
                var3 = var4.isPublic;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                if(var2) { _fun0023_ip = 58; continue _fun0023 }
case 25:
                var2 = undefined;
                return var2;
case 58:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.LURKER_STAGE_CHANNEL_PERMISSIONS_ALLOWLIST;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'isNSFW';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.nsfw;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'isManaged';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.application_id;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'isPrivate';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot38;
            var1 = this;
            var2 = var1.type;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'isGroupDM';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.type;
            var1 = _closure1_slot11;
            var1 = var1.GROUP_DM;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'isMultiUserDM';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot39;
            var1 = this;
            var2 = var1.type;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'isDM';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.type;
            var1 = _closure1_slot11;
            var1 = var1.DM;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'isSystemDM';
        var5['key'] = var7;
        var7 = function value() {
            var1 = false;
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'isArchivedThread';
        var5['key'] = var7;
        var7 = function value() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var2 = this;
                var1 = var2.isThread;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0024_ip = 59; continue _fun0024 }
case 12:
                var2 = var2.threadMetadata;
                var3 = null;
                var4 = var3 == var2;
                var3 = undefined;
                if(var4) { _fun0024_ip = 39; continue _fun0024 }
case 11:
                var3 = var2.archived;
case 39:
                var2 = true;
                var1 = var2 === var3;
case 59:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'isLockedThread';
        var5['key'] = var7;
        var7 = function value() {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var2 = this;
                var1 = var2.isThread;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0025_ip = 59; continue _fun0025 }
case 12:
                var2 = var2.threadMetadata;
                var3 = null;
                var4 = var3 == var2;
                var3 = undefined;
                if(var4) { _fun0025_ip = 39; continue _fun0025 }
case 11:
                var3 = var2.locked;
case 39:
                var2 = true;
                var1 = var2 === var3;
case 59:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'isScheduledForDeletion';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var2 = var3.hasFlag;
            var1 = _closure1_slot15;
            var1 = var1.IS_SCHEDULED_FOR_DELETION;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'isArchivedLockedThread';
        var5['key'] = var7;
        var7 = function value() {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var2 = this;
                var4 = _closure1_slot25;
                var3 = var4.has;
                var1 = var2.type;
                var1 = var3.bind(var4)(var1);
                if(!var1) { _fun0026_ip = 40; continue _fun0026 }
case 18:
                var3 = var2.threadMetadata;
                var4 = null;
                var5 = var4 == var3;
                var4 = undefined;
                if(var5) { _fun0026_ip = 2; continue _fun0026 }
case 59:
                var4 = var3.archived;
case 2:
                var3 = true;
                var1 = var3 === var4;
case 40:
                if(!var1) { _fun0026_ip = 60; continue _fun0026 }
case 17:
                var2 = var2.threadMetadata;
                var3 = null;
                var4 = var3 == var2;
                var3 = undefined;
                if(var4) { _fun0026_ip = 61; continue _fun0026 }
case 62:
                var3 = var2.locked;
case 61:
                var2 = true;
                var1 = var2 === var3;
case 60:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'isForumPost';
        var5['key'] = var7;
        var7 = function value() {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var2 = this;
                var4 = var2.type;
                var1 = _closure1_slot11;
                var1 = var1.PUBLIC_THREAD;
                var1 = var4 === var1;
                if(!var1) { _fun0027_ip = 63; continue _fun0027 }
case 18:
                var5 = var2.parentChannelThreadType;
                var4 = null;
                var1 = var4 != var5;
case 63:
                if(!var1) { _fun0027_ip = 27; continue _fun0027 }
case 19:
                var3 = _closure1_slot13;
                var4 = var3.GUILD_THREADS_ONLY;
                var3 = var4.has;
                var2 = var2.parentChannelThreadType;
                var1 = var3.bind(var4)(var2);
case 27:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'isRingable';
        var5['key'] = var7;
        var7 = function value() {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var3 = this;
                var1 = _closure1_slot13;
                var5 = var1.CALLABLE;
                var4 = var5.has;
                var1 = var3.type;
                var1 = var4.bind(var5)(var1);
                if(var1) { _fun0028_ip = 64; continue _fun0028 }
case 65:
                var3 = var3.type;
                var2 = _closure1_slot11;
                var2 = var2.GUILD_VOICE;
                var1 = var3 === var2;
case 64:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'isCategory';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.type;
            var1 = _closure1_slot11;
            var1 = var1.GUILD_CATEGORY;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'isVocal';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot40;
            var1 = this;
            var2 = var1.type;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'isGuildVocal';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot37;
            var1 = this;
            var2 = var1.type;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'isGuildVocalOrThread';
        var5['key'] = var7;
        var7 = function value() {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var3 = this;
                var1 = var3.isGuildVocal;
                var1 = var1.bind(var3)();
                if(var1) { _fun0029_ip = 66; continue _fun0029 }
case 12:
                var2 = var3.isVocalThread;
                var1 = var2.bind(var3)();
case 66:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[28] = var5;
        var5 = {};
        var7 = 'isGuildVoice';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.type;
            var1 = _closure1_slot11;
            var1 = var1.GUILD_VOICE;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[29] = var5;
        var5 = {};
        var7 = 'isGuildStageVoice';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.type;
            var1 = _closure1_slot11;
            var1 = var1.GUILD_STAGE_VOICE;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[30] = var5;
        var5 = {};
        var7 = 'isListenModeCapable';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.isGuildStageVoice;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[31] = var5;
        var5 = {};
        var7 = 'isThread';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot41;
            var1 = this;
            var2 = var1.type;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[32] = var5;
        var5 = {};
        var7 = 'isAnnouncementThread';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.type;
            var1 = _closure1_slot11;
            var1 = var1.ANNOUNCEMENT_THREAD;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[33] = var5;
        var5 = {};
        var7 = 'isVocalThread';
        var5['key'] = var7;
        var7 = function value() {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var3 = this;
                var4 = var3.type;
                var1 = _closure1_slot11;
                var1 = var1.PUBLIC_THREAD;
                var1 = var4 === var1;
                if(var1) { _fun0030_ip = 41; continue _fun0030 }
case 18:
                var3 = var3.type;
                var2 = _closure1_slot11;
                var2 = var2.PRIVATE_THREAD;
                var1 = var3 === var2;
case 41:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[34] = var5;
        var5 = {};
        var7 = 'isActiveThread';
        var5['key'] = var7;
        var7 = function value() {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var2 = this;
                var1 = var2.isThread;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0031_ip = 59; continue _fun0031 }
case 12:
                var2 = var2.threadMetadata;
                var3 = null;
                var4 = var3 == var2;
                var3 = undefined;
                if(var4) { _fun0031_ip = 39; continue _fun0031 }
case 11:
                var3 = var2.archived;
case 39:
                var2 = true;
                var1 = var2 !== var3;
case 59:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[35] = var5;
        var5 = {};
        var7 = 'isDirectory';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.type;
            var1 = _closure1_slot11;
            var1 = var1.GUILD_DIRECTORY;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[36] = var5;
        var5 = {};
        var7 = 'isForumLikeChannel';
        var5['key'] = var7;
        var7 = function value() {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var3 = this;
                var1 = var3.isForumChannel;
                var1 = var1.bind(var3)();
                if(var1) { _fun0032_ip = 66; continue _fun0032 }
case 12:
                var2 = var3.isMediaChannel;
                var1 = var2.bind(var3)();
case 66:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[37] = var5;
        var5 = {};
        var7 = 'isForumChannel';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.type;
            var1 = _closure1_slot11;
            var1 = var1.GUILD_FORUM;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[38] = var5;
        var5 = {};
        var7 = 'isMediaChannel';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.type;
            var1 = _closure1_slot11;
            var1 = var1.GUILD_MEDIA;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[39] = var5;
        var5 = {};
        var7 = 'isMediaPost';
        var5['key'] = var7;
        var7 = function value() {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var3 = this;
                var4 = var3.type;
                var1 = _closure1_slot11;
                var1 = var1.PUBLIC_THREAD;
                var1 = var4 === var1;
                if(!var1) { _fun0033_ip = 67; continue _fun0033 }
case 18:
                var3 = var3.parentChannelThreadType;
                var2 = _closure1_slot11;
                var2 = var2.GUILD_MEDIA;
                var1 = var3 === var2;
case 67:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[40] = var5;
        var5 = {};
        var7 = 'isRoleSubscriptionTemplatePreviewChannel';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var2 = var3.hasFlag;
            var1 = _closure1_slot15;
            var1 = var1.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[41] = var5;
        var5 = {};
        var7 = 'isOwner';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var2 = var1.ownerId;
            var1 = arg1;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[42] = var5;
        var5 = {};
        var7 = 'getGuildId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.guild_id;
            return var1;
        };
        var5['value'] = var7;
        var1[43] = var5;
        var5 = {};
        var7 = 'getApplicationId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.application_id;
            return var1;
        };
        var5['value'] = var7;
        var1[44] = var5;
        var5 = {};
        var7 = 'getDefaultSortOrder';
        var5['key'] = var7;
        var7 = function value() {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var1 = this;
                var1 = var1.defaultSortOrder;
                var2 = null;
                if(!(var2 == var1)) { _fun0034_ip = 51; continue _fun0034 }
case 47:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.ThreadSortOrder;
                var1 = var2.LATEST_ACTIVITY;
case 51:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[45] = var5;
        var5 = {};
        var7 = 'getDefaultLayout';
        var5['key'] = var7;
        var7 = function value() {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var1 = this;
                var2 = var1.isMediaChannel;
                var2 = var2.bind(var1)();
                if(var2) { _fun0035_ip = 68; continue _fun0035 }
case 12:
                var3 = var1.defaultForumLayout;
                var2 = null;
                if(!(var2 != var3)) { _fun0035_ip = 61; continue _fun0035 }
case 18:
                var3 = var1.defaultForumLayout;
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 12;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.ForumLayout;
                var2 = var2.DEFAULT;
                if(!(var3 !== var2)) { _fun0035_ip = 61; continue _fun0035 }
case 69:
                var1 = var1.defaultForumLayout;
                _fun0035_ip = 70; continue _fun0035;
case 61:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 12;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.ForumLayout;
                var1 = var2.LIST;
case 70:
                _fun0035_ip = 71; continue _fun0035;
case 68:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 12;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.ForumLayout;
                var1 = var2.GRID;
case 71:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[46] = var5;
        var5 = {};
        var7 = 'getDefaultTagSetting';
        var5['key'] = var7;
        var7 = function value() {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var1 = this;
                var1 = var1.defaultTagSetting;
                var2 = null;
                if(!(var2 == var1)) { _fun0036_ip = 51; continue _fun0036 }
case 47:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 13;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.ThreadSearchTagSetting;
                var1 = var2.MATCH_SOME;
case 51:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[47] = var5;
        var5 = {};
        var7 = 'isModeratorReportChannel';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var2 = var3.hasFlag;
            var1 = _closure1_slot15;
            var1 = var1.IS_MODERATOR_REPORT_CHANNEL;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[48] = var5;
        var5 = {};
        var7 = 'accessPermissions';
        var5['key'] = var7;
        var7 = function get() {
            var3 = _closure1_slot46;
            var1 = this;
            var2 = var1.type;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var5['get'] = var7;
        var1[49] = var5;
        var5 = {};
        var7 = 'hasFlag';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.hasFlag;
            var1 = this;
            var2 = var1.flags;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[50] = var5;
        var5 = {};
        var7 = 'isHDStreamSplashed';
        var5['key'] = var7;
        var6 = function get() {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var3 = this;
                var2 = var3.hdStreamingUntil;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0037_ip = 42; continue _fun0037 }
case 50:
                var2 = global;
                var5 = var2.Date;
                var6 = var3.hdStreamingUntil;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var7 = var4;
                var3 = new var7[var5](var6, var5);
                var3 = var3 instanceof Object ? var3 : var4;
                var2 = var2.Date;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var7 = var4;
                var2 = new var7[var2](var6);
                var2 = var2 instanceof Object ? var2 : var4;
                var1 = var3 > var2;
case 42:
                return var1;
            }
        };
        var5['get'] = var6;
        var1[51] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var21 = var6.bind(var1)(var22);
    var6 = function(arg1) {
        var5 = function UnknownChannelRecord(arg1) {
            var2 = arg1;
            var6 = this;
            var3 = _closure1_slot8;
            var5 = _closure2_slot0;
            var4 = undefined;
            var3 = var3.bind(var4)(var6, var5);
            var3 = _closure1_slot35;
            var1 = new Array(1);
            var1[0] = var2;
            var1 = var3.bind(var4)(var6, var5, var1);
            var3 = var2.application_id;
            var1['application_id'] = var3;
            var3 = var2.appliedTags;
            var1['appliedTags'] = var3;
            var3 = var2.availableTags;
            var1['availableTags'] = var3;
            var3 = var2.bitrate_;
            var1['bitrate_'] = var3;
            var3 = var2.defaultAutoArchiveDuration;
            var1['defaultAutoArchiveDuration'] = var3;
            var3 = var2.defaultForumLayout;
            var1['defaultForumLayout'] = var3;
            var3 = var2.defaultReactionEmoji;
            var1['defaultReactionEmoji'] = var3;
            var3 = var2.defaultSortOrder;
            var1['defaultSortOrder'] = var3;
            var3 = var2.defaultTagSetting;
            var1['defaultTagSetting'] = var3;
            var3 = var2.defaultThreadRateLimitPerUser;
            var1['defaultThreadRateLimitPerUser'] = var3;
            var3 = var2.flags_;
            var1['flags_'] = var3;
            var3 = var2.icon;
            var1['icon'] = var3;
            var3 = var2.iconEmoji;
            var1['iconEmoji'] = var3;
            var3 = var2.isMessageRequest;
            var1['isMessageRequest'] = var3;
            var3 = var2.isMessageRequestTimestamp;
            var1['isMessageRequestTimestamp'] = var3;
            var3 = var2.isSpam;
            var1['isSpam'] = var3;
            var3 = var2.lastMessageId;
            var1['lastMessageId'] = var3;
            var3 = var2.lastPinTimestamp;
            var1['lastPinTimestamp'] = var3;
            var3 = var2.member;
            var1['member'] = var3;
            var3 = var2.memberCount;
            var1['memberCount'] = var3;
            var3 = var2.memberIdsPreview;
            var1['memberIdsPreview'] = var3;
            var3 = var2.memberListId;
            var1['memberListId'] = var3;
            var3 = var2.messageCount;
            var1['messageCount'] = var3;
            var3 = var2.nicks;
            var1['nicks'] = var3;
            var3 = var2.nsfw_;
            var1['nsfw_'] = var3;
            var3 = var2.originChannelId;
            var1['originChannelId'] = var3;
            var3 = var2.ownerId;
            var1['ownerId'] = var3;
            var3 = var2.parent_id;
            var1['parent_id'] = var3;
            var3 = var2.parentChannelThreadType;
            var1['parentChannelThreadType'] = var3;
            var3 = var2.permissionOverwrites_;
            var1['permissionOverwrites_'] = var3;
            var3 = var2.position_;
            var1['position_'] = var3;
            var3 = var2.rateLimitPerUser_;
            var1['rateLimitPerUser_'] = var3;
            var3 = var2.rawRecipients;
            var1['rawRecipients'] = var3;
            var3 = var2.recipients;
            var1['recipients'] = var3;
            var3 = var2.recipientFlags;
            var1['recipientFlags'] = var3;
            var3 = var2.rtcRegion;
            var1['rtcRegion'] = var3;
            var3 = var2.safetyWarnings;
            var1['safetyWarnings'] = var3;
            var3 = var2.blockedUserWarningDismissed;
            var1['blockedUserWarningDismissed'] = var3;
            var3 = var2.template;
            var1['template'] = var3;
            var3 = var2.themeColor;
            var1['themeColor'] = var3;
            var3 = var2.threadMetadata;
            var1['threadMetadata'] = var3;
            var3 = var2.topic_;
            var1['topic_'] = var3;
            var3 = var2.userLimit_;
            var1['userLimit_'] = var3;
            var3 = var2.version;
            var1['version'] = var3;
            var3 = var2.videoQualityMode;
            var1['videoQualityMode'] = var3;
            var3 = var2.linkedLobby;
            var1['linkedLobby'] = var3;
            var3 = var2.hdStreamingUntil;
            var1['hdStreamingUntil'] = var3;
            var2 = var2.hdStreamingBuyerId;
            var1['hdStreamingBuyerId'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot6;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot7;
        var1 = {};
        var6 = 'fromServer';
        var1['key'] = var6;
        var2 = function value(arg1, arg2) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var2 = arg1;
                var5 = arg2;
                var4 = {};
                var1 = var2.application_id;
                var4['application_id'] = var1;
                var1 = var2.applied_tags;
                var4['appliedTags'] = var1;
                var1 = var2.available_tags;
                var6 = null;
                var7 = var6 != var1;
                var3 = undefined;
                var1 = undefined;
                if(!var7) { _fun0038_ip = 6; continue _fun0038 }
case 72:
                var8 = _closure1_slot44;
                var7 = var2.available_tags;
                var1 = var8.bind(var3)(var7);
case 6:
                var4['availableTags'] = var1;
                var1 = var2.bitrate;
                var4['bitrate_'] = var1;
                var1 = var2.default_auto_archive_duration;
                var4['defaultAutoArchiveDuration'] = var1;
                var1 = var2.default_forum_layout;
                var4['defaultForumLayout'] = var1;
                var1 = var2.default_reaction_emoji;
                var7 = var6 != var1;
                var1 = undefined;
                if(!var7) { _fun0038_ip = 73; continue _fun0038 }
case 70:
                var7 = {};
                var8 = var2.default_reaction_emoji;
                var10 = var8.emoji_id;
                var9 = 0;
                var8 = undefined;
                if(!(var9 !== var10)) { _fun0038_ip = 74; continue _fun0038 }
case 30:
                var9 = var2.default_reaction_emoji;
                var8 = var9.emoji_id;
case 74:
                var7['emojiId'] = var8;
                var8 = var2.default_reaction_emoji;
                var8 = var8.emoji_name;
                var7['emojiName'] = var8;
                var1 = var7;
case 73:
                var4['defaultReactionEmoji'] = var1;
                var1 = var2.default_sort_order;
                var4['defaultSortOrder'] = var1;
                var1 = var2.default_tag_setting;
                var4['defaultTagSetting'] = var1;
                var1 = var2.default_thread_rate_limit_per_user;
                var4['defaultThreadRateLimitPerUser'] = var1;
                var1 = var2.flags;
                var4['flags_'] = var1;
                if(!(var6 == var5)) { _fun0038_ip = 75; continue _fun0038 }
case 76:
                var5 = var2.guild_id;
case 75:
                var7 = var6 != var5;
                var1 = null;
                if(!var7) { _fun0038_ip = 77; continue _fun0038 }
case 78:
                var1 = var5;
case 77:
                var4['guild_id'] = var1;
                var1 = var2.icon;
                var4['icon'] = var1;
                var7 = _closure1_slot45;
                var5 = var2.icon_emoji;
                var5 = var7.bind(var3)(var5);
                var4['iconEmoji'] = var5;
                var5 = var2.id;
                var4['id'] = var5;
                var5 = var2.is_message_request;
                var4['isMessageRequest'] = var5;
                var5 = var2.is_message_request_timestamp;
                var4['isMessageRequestTimestamp'] = var5;
                var5 = var2.is_spam;
                var4['isSpam'] = var5;
                var5 = var2.last_message_id;
                var4['lastMessageId'] = var5;
                var5 = var2.last_pin_timestamp;
                var4['lastPinTimestamp'] = var5;
                var5 = var2.member;
                var7 = var6 != var5;
                var5 = undefined;
                if(!var7) { _fun0038_ip = 79; continue _fun0038 }
case 80:
                var7 = {};
                var8 = var2.member;
                var8 = var8.flags;
                var7['flags'] = var8;
                var8 = var2.member;
                var8 = var8.muted;
                var7['muted'] = var8;
                var8 = var2.member;
                var8 = var8.mute_config;
                var7['muteConfig'] = var8;
                var8 = var2.member;
                var8 = var8.join_timestamp;
                var7['joinTimestamp'] = var8;
                var5 = var7;
case 79:
                var4['member'] = var5;
                var5 = var2.member_count;
                var4['memberCount'] = var5;
                var5 = var2.member_ids_preview;
                var4['memberIdsPreview'] = var5;
                var5 = var2.member_list_id;
                var4['memberListId'] = var5;
                var5 = var2.message_count;
                var4['messageCount'] = var5;
                var7 = var2.name;
                var8 = var6 != var7;
                var5 = '';
                if(!var8) { _fun0038_ip = 81; continue _fun0038 }
case 82:
                var5 = var7;
case 81:
                var4['name'] = var5;
                var7 = _closure1_slot43;
                var5 = var2.nicks;
                var5 = var7.bind(var3)(var5);
                var4['nicks'] = var5;
                var5 = var2.nsfw;
                var4['nsfw_'] = var5;
                var5 = var2.origin_channel_id;
                var4['originChannelId'] = var5;
                var5 = var2.owner_id;
                var4['ownerId'] = var5;
                var5 = var2.parent_id;
                var4['parent_id'] = var5;
                var4['parentChannelThreadType'] = var3;
                var7 = _closure1_slot42;
                var5 = var2.permission_overwrites;
                var5 = var7.bind(var3)(var5);
                var4['permissionOverwrites_'] = var5;
                var5 = var2.position;
                var4['position_'] = var5;
                var5 = var2.rate_limit_per_user;
                var4['rateLimitPerUser_'] = var5;
                var5 = var2.recipients;
                if(!(var6 == var5)) { _fun0038_ip = 83; continue _fun0038 }
case 84:
                var5 = new Array(0);
                _fun0038_ip = 85; continue _fun0038;
case 83:
                var5 = var2.recipients;
case 85:
                var4['rawRecipients'] = var5;
                var5 = var2.recipients;
                if(!(var6 == var5)) { _fun0038_ip = 86; continue _fun0038 }
case 87:
                var5 = new Array(0);
                _fun0038_ip = 88; continue _fun0038;
case 86:
                var9 = var2.recipients;
                var8 = var9.map;
                var7 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var5 = var8.bind(var9)(var7);
case 88:
                var4['recipients'] = var5;
                var5 = var2.recipient_flags;
                var4['recipientFlags'] = var5;
                var5 = var2.rtc_region;
                var4['rtcRegion'] = var5;
                var5 = var2.safety_warnings;
                var4['safetyWarnings'] = var5;
                var5 = var2.blocked_user_warning_dismissed;
                var4['blockedUserWarningDismissed'] = var5;
                var5 = var2.template;
                var4['template'] = var5;
                var5 = var2.theme_color;
                var4['themeColor'] = var5;
                var5 = var2.thread_metadata;
                var7 = var6 != var5;
                var5 = undefined;
                if(!var7) { _fun0038_ip = 89; continue _fun0038 }
case 90:
                var7 = {};
                var8 = var2.thread_metadata;
                var8 = var8.archived;
                var7['archived'] = var8;
                var8 = var2.thread_metadata;
                var8 = var8.auto_archive_duration;
                var7['autoArchiveDuration'] = var8;
                var8 = var2.thread_metadata;
                var8 = var8.archive_timestamp;
                var7['archiveTimestamp'] = var8;
                var8 = var2.thread_metadata;
                var8 = var8.create_timestamp;
                var7['createTimestamp'] = var8;
                var8 = var2.thread_metadata;
                var8 = var8.locked;
                var7['locked'] = var8;
                var8 = var2.thread_metadata;
                var9 = var8.invitable;
                var8 = var6 == var9;
                if(var8) { _fun0038_ip = 91; continue _fun0038 }
case 92:
                var8 = var9;
case 91:
                var7['invitable'] = var8;
                var5 = var7;
case 89:
                var4['threadMetadata'] = var5;
                var5 = var2.topic;
                var4['topic_'] = var5;
                var5 = var2.total_message_sent;
                var4['totalMessageSent'] = var5;
                var5 = var2.type;
                if(!(var6 == var5)) { _fun0038_ip = 93; continue _fun0038 }
case 94:
                var5 = _closure1_slot11;
                var5 = var5.UNKNOWN;
                _fun0038_ip = 95; continue _fun0038;
case 93:
                var5 = var2.type;
case 95:
                var4['type'] = var5;
                var5 = var2.user_limit;
                var4['userLimit_'] = var5;
                var5 = var2.version;
                var4['version'] = var5;
                var5 = var2.video_quality_mode;
                var4['videoQualityMode'] = var5;
                var5 = var2.linked_lobby;
                var4['linkedLobby'] = var5;
                var5 = var2.hd_streaming_until;
                var4['hdStreamingUntil'] = var5;
                var2 = var2.hd_streaming_buyer_id;
                var4['hdStreamingBuyerId'] = var2;
                var2 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 15;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.dangerouslyCast;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = null;
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var20 = var6.bind(var1)(var21);
    var _closure1_slot30 = var20;
    var6 = function(arg1) {
        var5 = function GuildVocalChannelRecord(arg1) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var2 = arg1;
                var6 = this;
                var3 = _closure1_slot8;
                var5 = _closure2_slot0;
                var4 = undefined;
                var3 = var3.bind(var4)(var6, var5);
                var3 = _closure1_slot35;
                var1 = new Array(1);
                var1[0] = var2;
                var1 = var3.bind(var4)(var6, var5, var1);
                var3 = var2.application_id;
                var1['application_id'] = var3;
                var3 = var2.bitrate_;
                var1['bitrate_'] = var3;
                var3 = var2.flags_;
                var1['flags_'] = var3;
                var3 = var2.iconEmoji;
                var1['iconEmoji'] = var3;
                var3 = var2.lastMessageId;
                var1['lastMessageId'] = var3;
                var3 = var2.lastPinTimestamp;
                var1['lastPinTimestamp'] = var3;
                var3 = var2.memberListId;
                var1['memberListId'] = var3;
                var3 = var2.nsfw_;
                var1['nsfw_'] = var3;
                var3 = var2.originChannelId;
                var1['originChannelId'] = var3;
                var3 = var2.parent_id;
                var1['parent_id'] = var3;
                var3 = var2.permissionOverwrites_;
                var4 = null;
                if(!(var4 == var3)) { _fun0039_ip = 35; continue _fun0039 }
case 73:
                var3 = {};
case 35:
                var1['permissionOverwrites_'] = var3;
                var3 = var2.position_;
                var1['position_'] = var3;
                var3 = var2.rateLimitPerUser_;
                var1['rateLimitPerUser_'] = var3;
                var3 = var2.rtcRegion;
                var1['rtcRegion'] = var3;
                var3 = var2.themeColor;
                var1['themeColor'] = var3;
                var3 = var2.topic_;
                var1['topic_'] = var3;
                var3 = var2.userLimit_;
                var1['userLimit_'] = var3;
                var3 = var2.version;
                var1['version'] = var3;
                var3 = var2.videoQualityMode;
                var1['videoQualityMode'] = var3;
                var3 = var2.hdStreamingUntil;
                var1['hdStreamingUntil'] = var3;
                var2 = var2.hdStreamingBuyerId;
                var1['hdStreamingBuyerId'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot6;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot7;
        var1 = {};
        var6 = 'fromServer';
        var1['key'] = var6;
        var2 = function value(arg1, arg2) {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var4 = arg1;
                var6 = arg2;
                var3 = _closure1_slot48;
                var2 = {};
                var1 = var4.application_id;
                var2['application_id'] = var1;
                var1 = var4.bitrate;
                var2['bitrate_'] = var1;
                var1 = var4.flags;
                var2['flags_'] = var1;
                var7 = null;
                if(!(var7 == var6)) { _fun0040_ip = 15; continue _fun0040 }
case 64:
                var6 = var4.guild_id;
case 15:
                var8 = var7 != var6;
                var1 = null;
                if(!var8) { _fun0040_ip = 8; continue _fun0040 }
case 6:
                var1 = var6;
case 8:
                var2['guild_id'] = var1;
                var8 = _closure1_slot45;
                var6 = var4.icon_emoji;
                var1 = undefined;
                var6 = var8.bind(var1)(var6);
                var2['iconEmoji'] = var6;
                var6 = var4.id;
                var2['id'] = var6;
                var6 = var4.last_message_id;
                var2['lastMessageId'] = var6;
                var6 = var4.last_pin_timestamp;
                var2['lastPinTimestamp'] = var6;
                var6 = var4.member_list_id;
                var2['memberListId'] = var6;
                var8 = var4.name;
                var9 = var7 != var8;
                var6 = '';
                if(!var9) { _fun0040_ip = 96; continue _fun0040 }
case 74:
                var6 = var8;
case 96:
                var2['name'] = var6;
                var8 = var4.nsfw;
                var6 = var7 != var8;
                if(!var6) { _fun0040_ip = 97; continue _fun0040 }
case 98:
                var6 = var8;
case 97:
                var2['nsfw_'] = var6;
                var6 = var4.origin_channel_id;
                var2['originChannelId'] = var6;
                var6 = var4.parent_id;
                var2['parent_id'] = var6;
                var8 = _closure1_slot42;
                var6 = var4.permission_overwrites;
                var6 = var8.bind(var1)(var6);
                var2['permissionOverwrites_'] = var6;
                var6 = var4.position;
                var2['position_'] = var6;
                var8 = var4.rate_limit_per_user;
                var9 = var7 != var8;
                var6 = 0;
                if(!var9) { _fun0040_ip = 99; continue _fun0040 }
case 100:
                var6 = var8;
case 99:
                var2['rateLimitPerUser_'] = var6;
                var6 = var4.rtc_region;
                var2['rtcRegion'] = var6;
                var6 = var4.theme_color;
                var2['themeColor'] = var6;
                var6 = var4.topic;
                var2['topic_'] = var6;
                var6 = var4.type;
                if(!(var7 == var6)) { _fun0040_ip = 101; continue _fun0040 }
case 102:
                var5 = _closure1_slot11;
                var5 = var5.GUILD_VOICE;
                _fun0040_ip = 103; continue _fun0040;
case 101:
                var5 = var4.type;
case 103:
                var2['type'] = var5;
                var5 = var4.user_limit;
                var2['userLimit_'] = var5;
                var5 = var4.version;
                var2['version'] = var5;
                var5 = var4.video_quality_mode;
                var2['videoQualityMode'] = var5;
                var5 = var4.hd_streaming_until;
                var2['hdStreamingUntil'] = var5;
                var4 = var4.hd_streaming_buyer_id;
                var2['hdStreamingBuyerId'] = var4;
                var1 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = null;
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var19 = var6.bind(var1)(var21);
    var6 = function(arg1) {
        var5 = function GuildTextualChannelRecord(arg1) {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                var2 = arg1;
                var6 = this;
                var3 = _closure1_slot8;
                var5 = _closure2_slot0;
                var4 = undefined;
                var3 = var3.bind(var4)(var6, var5);
                var3 = _closure1_slot35;
                var1 = new Array(1);
                var1[0] = var2;
                var1 = var3.bind(var4)(var6, var5, var1);
                var3 = var2.application_id;
                var1['application_id'] = var3;
                var3 = var2.defaultAutoArchiveDuration;
                var1['defaultAutoArchiveDuration'] = var3;
                var3 = var2.defaultThreadRateLimitPerUser;
                var1['defaultThreadRateLimitPerUser'] = var3;
                var3 = var2.flags_;
                var1['flags_'] = var3;
                var3 = var2.iconEmoji;
                var1['iconEmoji'] = var3;
                var3 = var2.lastMessageId;
                var1['lastMessageId'] = var3;
                var3 = var2.lastPinTimestamp;
                var1['lastPinTimestamp'] = var3;
                var3 = var2.memberListId;
                var1['memberListId'] = var3;
                var3 = var2.nsfw_;
                var1['nsfw_'] = var3;
                var3 = var2.parent_id;
                var1['parent_id'] = var3;
                var3 = var2.permissionOverwrites_;
                var4 = null;
                if(!(var4 == var3)) { _fun0041_ip = 35; continue _fun0041 }
case 73:
                var3 = {};
case 35:
                var1['permissionOverwrites_'] = var3;
                var3 = var2.position_;
                var1['position_'] = var3;
                var3 = var2.rateLimitPerUser_;
                var1['rateLimitPerUser_'] = var3;
                var3 = var2.themeColor;
                var1['themeColor'] = var3;
                var3 = var2.topic_;
                var1['topic_'] = var3;
                var3 = var2.version;
                var1['version'] = var3;
                var3 = var2.linkedLobby;
                var1['linkedLobby'] = var3;
                var3 = var2.hdStreamingBuyerId;
                var1['hdStreamingBuyerId'] = var3;
                var2 = var2.hdStreamingUntil;
                var1['hdStreamingUntil'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot6;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot7;
        var1 = {};
        var6 = 'fromServer';
        var1['key'] = var6;
        var2 = function value(arg1, arg2) {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                var4 = arg1;
                var6 = arg2;
                var3 = _closure1_slot48;
                var2 = {};
                var1 = var4.application_id;
                var2['application_id'] = var1;
                var1 = var4.default_auto_archive_duration;
                var2['defaultAutoArchiveDuration'] = var1;
                var1 = var4.default_thread_rate_limit_per_user;
                var2['defaultThreadRateLimitPerUser'] = var1;
                var1 = var4.flags;
                var2['flags_'] = var1;
                var7 = null;
                if(!(var7 == var6)) { _fun0042_ip = 27; continue _fun0042 }
case 104:
                var6 = var4.guild_id;
case 27:
                var8 = var7 != var6;
                var1 = null;
                if(!var8) { _fun0042_ip = 52; continue _fun0042 }
case 105:
                var1 = var6;
case 52:
                var2['guild_id'] = var1;
                var8 = _closure1_slot45;
                var6 = var4.icon_emoji;
                var1 = undefined;
                var6 = var8.bind(var1)(var6);
                var2['iconEmoji'] = var6;
                var6 = var4.id;
                var2['id'] = var6;
                var6 = var4.last_message_id;
                var2['lastMessageId'] = var6;
                var6 = var4.last_pin_timestamp;
                var2['lastPinTimestamp'] = var6;
                var6 = var4.member_list_id;
                var2['memberListId'] = var6;
                var8 = var4.name;
                var9 = var7 != var8;
                var6 = '';
                if(!var9) { _fun0042_ip = 106; continue _fun0042 }
case 107:
                var6 = var8;
case 106:
                var2['name'] = var6;
                var8 = var4.nsfw;
                var6 = var7 != var8;
                if(!var6) { _fun0042_ip = 108; continue _fun0042 }
case 109:
                var6 = var8;
case 108:
                var2['nsfw_'] = var6;
                var6 = var4.parent_id;
                var2['parent_id'] = var6;
                var8 = _closure1_slot42;
                var6 = var4.permission_overwrites;
                var6 = var8.bind(var1)(var6);
                var2['permissionOverwrites_'] = var6;
                var6 = var4.position;
                var2['position_'] = var6;
                var8 = var4.rate_limit_per_user;
                var9 = var7 != var8;
                var6 = 0;
                if(!var9) { _fun0042_ip = 99; continue _fun0042 }
case 100:
                var6 = var8;
case 99:
                var2['rateLimitPerUser_'] = var6;
                var6 = var4.theme_color;
                var2['themeColor'] = var6;
                var6 = var4.topic;
                var2['topic_'] = var6;
                var6 = var4.type;
                if(!(var7 == var6)) { _fun0042_ip = 110; continue _fun0042 }
case 111:
                var5 = _closure1_slot11;
                var5 = var5.GUILD_TEXT;
                _fun0042_ip = 112; continue _fun0042;
case 110:
                var5 = var4.type;
case 112:
                var2['type'] = var5;
                var5 = var4.linked_lobby;
                var2['linkedLobby'] = var5;
                var5 = var4.hd_streaming_until;
                var2['hdStreamingUntil'] = var5;
                var5 = var4.hd_streaming_buyer_id;
                var2['hdStreamingBuyerId'] = var5;
                var4 = var4.version;
                var2['version'] = var4;
                var1 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = null;
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var18 = var6.bind(var1)(var21);
    var6 = function(arg1) {
        var3 = function GuildAnnouncementChannelRecord() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot8;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot35;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot7;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var17 = var6.bind(var1)(var18);
    var6 = function(arg1) {
        var3 = function GuildCategoryChannelRecord() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot8;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot35;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot7;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var16 = var6.bind(var1)(var18);
    var6 = function(arg1) {
        var3 = function GuildDirectoryChannelRecord() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot8;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot35;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot7;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var15 = var6.bind(var1)(var18);
    var6 = function(arg1) {
        var3 = function GuildStageVoiceChannelRecord() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot8;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot35;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot7;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var14 = var6.bind(var1)(var19);
    var6 = function(arg1) {
        var3 = function GuildStoreChannelRecord() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot8;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot35;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot7;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var13 = var6.bind(var1)(var18);
    var6 = function(arg1) {
        var3 = function GuildTextChannelRecord() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot8;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot35;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot7;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var12 = var6.bind(var1)(var18);
    var6 = function(arg1) {
        var3 = function GuildVoiceChannelRecord() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot8;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot35;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot7;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var11 = var6.bind(var1)(var19);
    var6 = function(arg1) {
        var5 = function ForumChannelRecord(arg1) {
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                var2 = arg1;
                var6 = this;
                var3 = _closure1_slot8;
                var5 = _closure2_slot0;
                var4 = undefined;
                var3 = var3.bind(var4)(var6, var5);
                var3 = _closure1_slot35;
                var1 = new Array(1);
                var1[0] = var2;
                var1 = var3.bind(var4)(var6, var5, var1);
                var3 = var2.availableTags;
                var4 = null;
                if(!(var4 == var3)) { _fun0043_ip = 113; continue _fun0043 }
case 114:
                var3 = new Array(0);
case 113:
                var1['availableTags'] = var3;
                var3 = var2.defaultAutoArchiveDuration;
                var1['defaultAutoArchiveDuration'] = var3;
                var3 = var2.defaultForumLayout;
                var1['defaultForumLayout'] = var3;
                var3 = var2.defaultReactionEmoji;
                var1['defaultReactionEmoji'] = var3;
                var3 = var2.defaultSortOrder;
                var1['defaultSortOrder'] = var3;
                var3 = var2.defaultTagSetting;
                var1['defaultTagSetting'] = var3;
                var3 = var2.defaultThreadRateLimitPerUser;
                var1['defaultThreadRateLimitPerUser'] = var3;
                var3 = var2.flags_;
                var1['flags_'] = var3;
                var3 = var2.iconEmoji;
                var1['iconEmoji'] = var3;
                var3 = var2.lastMessageId;
                var1['lastMessageId'] = var3;
                var3 = var2.lastPinTimestamp;
                var1['lastPinTimestamp'] = var3;
                var3 = var2.memberListId;
                var1['memberListId'] = var3;
                var3 = var2.nsfw_;
                var1['nsfw_'] = var3;
                var3 = var2.parent_id;
                var1['parent_id'] = var3;
                var3 = var2.permissionOverwrites_;
                if(!(var4 == var3)) { _fun0043_ip = 115; continue _fun0043 }
case 116:
                var3 = {};
case 115:
                var1['permissionOverwrites_'] = var3;
                var3 = var2.position_;
                var1['position_'] = var3;
                var3 = var2.rateLimitPerUser_;
                var1['rateLimitPerUser_'] = var3;
                var3 = var2.template;
                var1['template'] = var3;
                var3 = var2.themeColor;
                var1['themeColor'] = var3;
                var3 = var2.topic_;
                var1['topic_'] = var3;
                var2 = var2.version;
                var1['version'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot6;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot7;
        var1 = {};
        var6 = 'fromServer';
        var1['key'] = var6;
        var2 = function value(arg1, arg2) {
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                var2 = arg1;
                var5 = arg2;
                var4 = {};
                var1 = var2.available_tags;
                var6 = null;
                if(!(var6 == var1)) { _fun0044_ip = 66; continue _fun0044 }
case 22:
                var1 = new Array(0);
                _fun0044_ip = 58; continue _fun0044;
case 66:
                var8 = _closure1_slot44;
                var7 = var2.available_tags;
                var3 = undefined;
                var1 = var8.bind(var3)(var7);
case 58:
                var4['availableTags'] = var1;
                var1 = var2.default_auto_archive_duration;
                var4['defaultAutoArchiveDuration'] = var1;
                var1 = var2.default_forum_layout;
                var4['defaultForumLayout'] = var1;
                var1 = var2.default_reaction_emoji;
                var7 = var6 != var1;
                var3 = undefined;
                var1 = undefined;
                if(!var7) { _fun0044_ip = 56; continue _fun0044 }
case 117:
                var7 = {};
                var8 = var2.default_reaction_emoji;
                var10 = var8.emoji_id;
                var9 = 0;
                var8 = undefined;
                if(!(var9 !== var10)) { _fun0044_ip = 118; continue _fun0044 }
case 119:
                var9 = var2.default_reaction_emoji;
                var8 = var9.emoji_id;
case 118:
                var7['emojiId'] = var8;
                var8 = var2.default_reaction_emoji;
                var8 = var8.emoji_name;
                var7['emojiName'] = var8;
                var1 = var7;
case 56:
                var4['defaultReactionEmoji'] = var1;
                var1 = var2.default_sort_order;
                var4['defaultSortOrder'] = var1;
                var1 = var2.default_tag_setting;
                var4['defaultTagSetting'] = var1;
                var1 = var2.default_thread_rate_limit_per_user;
                var4['defaultThreadRateLimitPerUser'] = var1;
                var1 = var2.flags;
                var4['flags_'] = var1;
                if(!(var6 == var5)) { _fun0044_ip = 120; continue _fun0044 }
case 121:
                var5 = var2.guild_id;
case 120:
                var7 = var6 != var5;
                var1 = null;
                if(!var7) { _fun0044_ip = 122; continue _fun0044 }
case 123:
                var1 = var5;
case 122:
                var4['guild_id'] = var1;
                var7 = _closure1_slot45;
                var5 = var2.icon_emoji;
                var5 = var7.bind(var3)(var5);
                var4['iconEmoji'] = var5;
                var5 = var2.id;
                var4['id'] = var5;
                var5 = var2.last_message_id;
                var4['lastMessageId'] = var5;
                var5 = var2.last_pin_timestamp;
                var4['lastPinTimestamp'] = var5;
                var5 = var2.member_list_id;
                var4['memberListId'] = var5;
                var7 = var2.name;
                var8 = var6 != var7;
                var5 = '';
                if(!var8) { _fun0044_ip = 124; continue _fun0044 }
case 125:
                var5 = var7;
case 124:
                var4['name'] = var5;
                var7 = var2.nsfw;
                var5 = var6 != var7;
                if(!var5) { _fun0044_ip = 126; continue _fun0044 }
case 127:
                var5 = var7;
case 126:
                var4['nsfw_'] = var5;
                var5 = var2.parent_id;
                var4['parent_id'] = var5;
                var7 = _closure1_slot42;
                var5 = var2.permission_overwrites;
                var5 = var7.bind(var3)(var5);
                var4['permissionOverwrites_'] = var5;
                var5 = var2.position;
                var4['position_'] = var5;
                var7 = var2.rate_limit_per_user;
                var8 = var6 != var7;
                var5 = 0;
                if(!var8) { _fun0044_ip = 128; continue _fun0044 }
case 129:
                var5 = var7;
case 128:
                var4['rateLimitPerUser_'] = var5;
                var5 = var2.template;
                var4['template'] = var5;
                var5 = var2.theme_color;
                var4['themeColor'] = var5;
                var5 = var2.topic;
                var4['topic_'] = var5;
                var5 = var2.type;
                if(!(var6 == var5)) { _fun0044_ip = 130; continue _fun0044 }
case 131:
                var5 = _closure1_slot11;
                var5 = var5.GUILD_TEXT;
                _fun0044_ip = 132; continue _fun0044;
case 130:
                var5 = var2.type;
case 132:
                var4['type'] = var5;
                var2 = var2.version;
                var4['version'] = var2;
                var2 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 15;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.dangerouslyCast;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = null;
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var10 = var6.bind(var1)(var21);
    var6 = function() {
        var4 = _closure1_slot7;
        var3 = function IdAsNumberCache() {
            _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                var5 = arguments[0];
                var3 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0045_ip = 47; continue _fun0045 }
case 133:
                var5 = 100;
case 47:
                var6 = _closure1_slot8;
                var4 = _closure2_slot0;
                var4 = var6.bind(var1)(var3, var4);
                var4 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 16;
                var2 = var6[var2];
                var2 = var4.bind(var1)(var2);
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var9 = var4;
                var8 = var5;
                var2 = new var9[var2](var8, var7);
                var2 = var2 instanceof Object ? var2 : var4;
                var3['cache'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = 'getOrCompute';
        var1['key'] = var5;
        var2 = function value(arg1) {
            _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                var5 = arg1;
                var3 = this;
                var2 = var3.cache;
                var1 = var2.get;
                var1 = var1.bind(var2)(var5);
                var2 = null;
                if(!(var2 == var1)) { _fun0046_ip = 134; continue _fun0046 }
case 18:
                var2 = global;
                var6 = var2.parseInt;
                var4 = undefined;
                var2 = 10;
                var2 = var6.bind(var4)(var5, var2);
                var4 = var3.cache;
                var3 = var4.set;
                var3 = var3.bind(var4)(var5, var2);
                return var2;
case 134:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var6 = var6.bind(var1)();
    var7 = var6.prototype;
    var8 = Object.create(var7, {constructor: {value: var6}});
    var58 = var8;
    var7 = new var58[var6](var57);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot31 = var7;
    var7 = var6.prototype;
    var7 = Object.create(var7, {constructor: {value: var6}});
    var58 = var7;
    var6 = new var58[var6](var57);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot32 = var6;
    var6 = function(arg1) {
        var5 = function PrivateChannelRecord(arg1) {
            _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot8;
                var7 = _closure2_slot0;
                var8 = undefined;
                var1 = var1.bind(var8)(var5, var7);
                var4 = _closure1_slot35;
                var1 = new Array(1);
                var1[0] = var2;
                var1 = var4.bind(var8)(var5, var7, var1);
                var4 = var2.application_id;
                var1['application_id'] = var4;
                var4 = var2.flags_;
                var1['flags_'] = var4;
                var4 = var2.icon;
                var1['icon'] = var4;
                var4 = var2.isMessageRequest;
                var1['isMessageRequest'] = var4;
                var4 = var2.isMessageRequestTimestamp;
                var1['isMessageRequestTimestamp'] = var4;
                var4 = var2.isSpam;
                var1['isSpam'] = var4;
                var4 = var2.lastMessageId;
                var1['lastMessageId'] = var4;
                var4 = var2.lastPinTimestamp;
                var1['lastPinTimestamp'] = var4;
                var4 = var2.nicks;
                var1['nicks'] = var4;
                var4 = var2.ownerId;
                var1['ownerId'] = var4;
                var6 = var7.sortRecipients;
                var5 = var2.rawRecipients;
                var4 = var1.id;
                var4 = var6.bind(var7)(var5, var4);
                var1['rawRecipients'] = var4;
                var7 = var2.recipients;
                var4 = null;
                if(!(var4 == var7)) { _fun0047_ip = 135; continue _fun0047 }
case 136:
                var7 = new Array(0);
case 135:
                var6 = new Array(0);
                var10 = 0;
                var12 = var6;
                var11 = var7;
                var5 = arraySpread(var12, var11, var10);
                var5 = var6.sort;
                var7 = _closure1_slot1;
                var9 = _closure1_slot3;
                var3 = 17;
                var3 = var9[var3];
                var3 = var7.bind(var8)(var3);
                var3 = var3.compare;
                var3 = var5.bind(var6)(var3);
                var1['recipients'] = var3;
                var3 = var2.recipientFlags;
                var1['recipientFlags'] = var3;
                var3 = var2.safetyWarnings;
                if(!(var4 == var3)) { _fun0047_ip = 137; continue _fun0047 }
case 138:
                var3 = new Array(0);
case 137:
                var1['safetyWarnings'] = var3;
                var2 = var2.blockedUserWarningDismissed;
                var1['blockedUserWarningDismissed'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var3 = _closure1_slot6;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot7;
        var1 = {};
        var2 = 'isSystemDM';
        var1['key'] = var2;
        var2 = function value() {
            _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                var1 = this;
                var3 = var1.rawRecipients;
                var2 = 0;
                var2 = var3[var2];
                var3 = var1.type;
                var1 = _closure1_slot11;
                var1 = var1.DM;
                var1 = var3 === var1;
                if(!var1) { _fun0048_ip = 58; continue _fun0048 }
case 63:
                var3 = null;
                var1 = var3 != var2;
case 58:
                if(!var1) { _fun0048_ip = 139; continue _fun0048 }
case 72:
                var3 = var2.system;
                var2 = true;
                var1 = var2 === var3;
case 139:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'getRecipientId';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.recipients;
            var1 = 0;
            var1 = var2[var1];
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'addRecipient';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                var6 = arg1;
                var2 = arg2;
                var7 = this;
                var1 = arg3;
                if(!(var6 === var1)) { _fun0049_ip = 50; continue _fun0049 }
case 12:
                return var7;
case 50:
                var5 = var7.set;
                var4 = _closure1_slot1;
                var8 = _closure1_slot3;
                var3 = 9;
                var3 = var8[var3];
                var10 = undefined;
                var9 = var4.bind(var10)(var3);
                var8 = var9.uniq;
                var12 = var7.recipients;
                var3 = null;
                if(!(var3 == var12)) { _fun0049_ip = 8; continue _fun0049 }
case 134:
                var12 = new Array(0);
case 8:
                var4 = new Array(1);
                var13 = 0;
                var15 = var4;
                var14 = var12;
                var12 = arraySpread(var15, var14, var13);
                var4[var12] = var6;
                var11 = 1;
                var11 = var12 + var11;
                var8 = var8.bind(var9)(var4);
                var4 = var8.sort;
                var9 = _closure1_slot1;
                var11 = _closure1_slot3;
                var1 = 17;
                var1 = var11[var1];
                var1 = var9.bind(var10)(var1);
                var1 = var1.compare;
                var4 = var4.bind(var8)(var1);
                var1 = 'recipients';
                var5 = var5.bind(var7)(var1, var4);
                var1 = var5;
                if(!(var3 != var2)) { _fun0049_ip = 140; continue _fun0049 }
case 96:
                var4 = var5.set;
                var3 = {};
                var14 = var5.nicks;
                var15 = var3;
                var7 = copyDataProperties(var15, var14);
                var3[var6] = var2;
                var2 = 'nicks';
                var1 = var4.bind(var5)(var2, var3);
case 140:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'removeRecipient';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var4 = this;
            var3 = var4.set;
            var5 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var2);
            var5 = var6.without;
            var2 = var4.recipients;
            var1 = arg1;
            var2 = var5.bind(var6)(var2, var1);
            var1 = 'recipients';
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var6 = {};
        var1 = 'sortRecipients';
        var6['key'] = var1;
        var1 = function value(arg1, arg2) {
            _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                var4 = arg1;
                var5 = _closure1_slot31;
                var3 = var5.getOrCompute;
                var2 = arg2;
                var2 = var3.bind(var5)(var2);
                var _closure3_slot0 = var2;
                var2 = null;
                if(!(var2 == var4)) { _fun0050_ip = 63; continue _fun0050 }
case 23:
                var4 = new Array(0);
case 63:
                var3 = new Array(0);
                var6 = 0;
                var8 = var3;
                var7 = var4;
                var2 = arraySpread(var8, var7, var6);
                var2 = var3.sort;
                var1 = function(arg1, arg2) {
                    var4 = _closure1_slot32;
                    var2 = var4.getOrCompute;
                    var1 = arg1;
                    var1 = var1.id;
                    var2 = var2.bind(var4)(var1);
                    var3 = var4.getOrCompute;
                    var1 = arg2;
                    var1 = var1.id;
                    var3 = var3.bind(var4)(var1);
                    var1 = _closure3_slot0;
                    var2 = var2 ^ var1;
                    var1 = var3 ^ var1;
                    var1 = var2 - var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var6 = {};
        var8 = 'fromServer';
        var6['key'] = var8;
        var7 = function value(arg1) {
            _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                var6 = arg1;
                var5 = _closure2_slot0;
                var4 = var5.sortRecipients;
                var3 = var6.recipients;
                var2 = var6.id;
                var9 = var4.bind(var5)(var3, var2);
                var4 = {};
                var2 = var6.application_id;
                var4['application_id'] = var2;
                var2 = var6.flags;
                var4['flags_'] = var2;
                var7 = null;
                var4['guild_id'] = var7;
                var2 = var6.icon;
                var4['icon'] = var2;
                var2 = var6.id;
                var4['id'] = var2;
                var2 = var6.is_message_request;
                var4['isMessageRequest'] = var2;
                var2 = var6.is_message_request_timestamp;
                var4['isMessageRequestTimestamp'] = var2;
                var3 = var6.is_spam;
                var2 = var7 != var3;
                if(!var2) { _fun0051_ip = 141; continue _fun0051 }
case 142:
                var2 = var3;
case 141:
                var4['isSpam'] = var2;
                var2 = var6.last_message_id;
                var4['lastMessageId'] = var2;
                var2 = var6.last_pin_timestamp;
                var4['lastPinTimestamp'] = var2;
                var3 = var6.name;
                var5 = var7 != var3;
                var2 = '';
                if(!var5) { _fun0051_ip = 143; continue _fun0051 }
case 144:
                var2 = var3;
case 143:
                var4['name'] = var2;
                var8 = _closure1_slot43;
                var3 = var6.nicks;
                var5 = undefined;
                var3 = var8.bind(var5)(var3);
                var4['nicks'] = var3;
                var3 = var6.owner_id;
                var4['ownerId'] = var3;
                var4['rawRecipients'] = var9;
                var8 = var9.map;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var3 = var8.bind(var9)(var3);
                var4['recipients'] = var3;
                var3 = var6.recipient_flags;
                var4['recipientFlags'] = var3;
                var3 = var6.safety_warnings;
                var4['safetyWarnings'] = var3;
                var3 = var6.blocked_user_warning_dismissed;
                var4['blockedUserWarningDismissed'] = var3;
                var3 = var6.type;
                if(!(var7 == var3)) { _fun0051_ip = 145; continue _fun0051 }
case 146:
                var3 = _closure1_slot11;
                var3 = var3.DM;
                _fun0051_ip = 147; continue _fun0051;
case 145:
                var3 = var6.type;
case 147:
                var4['type'] = var3;
                var3 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 15;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.dangerouslyCast;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var6['value'] = var7;
        var1[1] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var9 = var6.bind(var1)(var21);
    var6 = function(arg1) {
        var3 = function DMChannelRecord() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot8;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot35;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot7;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var8 = var6.bind(var1)(var9);
    var6 = function(arg1) {
        var3 = function GroupDMChannelRecord() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot8;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot35;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot7;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var7 = var6.bind(var1)(var9);
    var6 = function(arg1) {
        var5 = function ThreadChannelRecord(arg1) {
            _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                var2 = arg1;
                var6 = this;
                var3 = _closure1_slot8;
                var5 = _closure2_slot0;
                var4 = undefined;
                var3 = var3.bind(var4)(var6, var5);
                var3 = _closure1_slot35;
                var1 = new Array(1);
                var1[0] = var2;
                var1 = var3.bind(var4)(var6, var5, var1);
                var3 = var2.appliedTags;
                var4 = null;
                if(!(var4 == var3)) { _fun0052_ip = 113; continue _fun0052 }
case 114:
                var3 = new Array(0);
case 113:
                var1['appliedTags'] = var3;
                var3 = var2.bitrate_;
                var1['bitrate_'] = var3;
                var3 = var2.flags_;
                var1['flags_'] = var3;
                var3 = var2.lastMessageId;
                var1['lastMessageId'] = var3;
                var3 = var2.lastPinTimestamp;
                var1['lastPinTimestamp'] = var3;
                var3 = var2.member;
                var1['member'] = var3;
                var3 = var2.memberCount;
                var1['memberCount'] = var3;
                var3 = var2.memberIdsPreview;
                var1['memberIdsPreview'] = var3;
                var3 = var2.messageCount;
                var1['messageCount'] = var3;
                var3 = var2.nsfw_;
                var1['nsfw_'] = var3;
                var3 = var2.ownerId;
                var1['ownerId'] = var3;
                var3 = var2.parent_id;
                var1['parent_id'] = var3;
                var3 = var2.parentChannelThreadType;
                var1['parentChannelThreadType'] = var3;
                var3 = var2.rateLimitPerUser_;
                var1['rateLimitPerUser_'] = var3;
                var3 = var2.rtcRegion;
                var1['rtcRegion'] = var3;
                var3 = var2.threadMetadata;
                var1['threadMetadata'] = var3;
                var3 = var2.userLimit_;
                var1['userLimit_'] = var3;
                var2 = var2.videoQualityMode;
                var1['videoQualityMode'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot6;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot7;
        var1 = {};
        var6 = 'fromServer';
        var1['key'] = var6;
        var2 = function value(arg1, arg2) {
            _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                var1 = arg1;
                var3 = arg2;
                var4 = {};
                var2 = var1.applied_tags;
                var5 = null;
                if(!(var5 == var2)) { _fun0053_ip = 148; continue _fun0053 }
case 22:
                var2 = new Array(0);
case 148:
                var4['appliedTags'] = var2;
                var2 = var1.bitrate;
                var4['bitrate_'] = var2;
                var2 = var1.flags;
                var4['flags_'] = var2;
                if(!(var5 == var3)) { _fun0053_ip = 114; continue _fun0053 }
case 149:
                var3 = var1.guild_id;
case 114:
                var6 = var5 != var3;
                var2 = null;
                if(!var6) { _fun0053_ip = 5; continue _fun0053 }
case 150:
                var2 = var3;
case 5:
                var4['guild_id'] = var2;
                var2 = var1.id;
                var4['id'] = var2;
                var2 = var1.last_message_id;
                var4['lastMessageId'] = var2;
                var2 = var1.last_pin_timestamp;
                var4['lastPinTimestamp'] = var2;
                var2 = var1.member;
                var6 = var5 != var2;
                var3 = undefined;
                var2 = undefined;
                if(!var6) { _fun0053_ip = 151; continue _fun0053 }
case 152:
                var6 = {};
                var7 = var1.member;
                var7 = var7.flags;
                var6['flags'] = var7;
                var7 = var1.member;
                var7 = var7.muted;
                var6['muted'] = var7;
                var7 = var1.member;
                var7 = var7.mute_config;
                var6['muteConfig'] = var7;
                var7 = var1.member;
                var7 = var7.join_timestamp;
                var6['joinTimestamp'] = var7;
                var2 = var6;
case 151:
                var4['member'] = var2;
                var2 = var1.member_count;
                var4['memberCount'] = var2;
                var2 = var1.member_ids_preview;
                var4['memberIdsPreview'] = var2;
                var2 = var1.message_count;
                var4['messageCount'] = var2;
                var6 = var1.name;
                var7 = var5 != var6;
                var2 = '';
                if(!var7) { _fun0053_ip = 153; continue _fun0053 }
case 77:
                var2 = var6;
case 153:
                var4['name'] = var2;
                var6 = var1.nsfw;
                var2 = var5 != var6;
                if(!var2) { _fun0053_ip = 154; continue _fun0053 }
case 155:
                var2 = var6;
case 154:
                var4['nsfw_'] = var2;
                var2 = var1.owner_id;
                var4['ownerId'] = var2;
                var2 = var1.parent_id;
                var4['parent_id'] = var2;
                var2 = var1.parentChannelThreadType;
                var4['parentChannelThreadType'] = var2;
                var2 = var1.rate_limit_per_user;
                var4['rateLimitPerUser_'] = var2;
                var2 = var1.rtc_region;
                var4['rtcRegion'] = var2;
                var2 = var1.thread_metadata;
                var6 = var5 != var2;
                var2 = undefined;
                if(!var6) { _fun0053_ip = 156; continue _fun0053 }
case 157:
                var6 = {};
                var7 = var1.thread_metadata;
                var7 = var7.archived;
                var6['archived'] = var7;
                var7 = var1.thread_metadata;
                var7 = var7.auto_archive_duration;
                var6['autoArchiveDuration'] = var7;
                var7 = var1.thread_metadata;
                var7 = var7.archive_timestamp;
                var6['archiveTimestamp'] = var7;
                var7 = var1.thread_metadata;
                var7 = var7.create_timestamp;
                var6['createTimestamp'] = var7;
                var7 = var1.thread_metadata;
                var7 = var7.locked;
                var6['locked'] = var7;
                var7 = var1.thread_metadata;
                var8 = var7.invitable;
                var7 = var5 == var8;
                if(var7) { _fun0053_ip = 158; continue _fun0053 }
case 159:
                var7 = var8;
case 158:
                var6['invitable'] = var7;
                var2 = var6;
case 156:
                var4['threadMetadata'] = var2;
                var2 = var1.total_message_sent;
                var4['totalMessageSent'] = var2;
                var2 = var1.type;
                if(!(var5 == var2)) { _fun0053_ip = 160; continue _fun0053 }
case 161:
                var2 = _closure1_slot11;
                var2 = var2.PUBLIC_THREAD;
                _fun0053_ip = 162; continue _fun0053;
case 160:
                var2 = var1.type;
case 162:
                var4['type'] = var2;
                var2 = var1.user_limit;
                var4['userLimit_'] = var2;
                var1 = var1.video_quality_mode;
                var4['videoQualityMode'] = var1;
                var2 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 15;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.dangerouslyCast;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = null;
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var6 = var6.bind(var1)(var21);
    var49 = {};
    var54 = var52.DM;
    var53 = var9.fromServer;
    var49[var54] = var53;
    var54 = var52.GROUP_DM;
    var53 = var9.fromServer;
    var49[var54] = var53;
    var54 = var52.GUILD_TEXT;
    var53 = var18.fromServer;
    var49[var54] = var53;
    var54 = var52.GUILD_VOICE;
    var53 = var19.fromServer;
    var49[var54] = var53;
    var54 = var52.GUILD_STAGE_VOICE;
    var53 = var19.fromServer;
    var49[var54] = var53;
    var54 = var52.GUILD_CATEGORY;
    var53 = var18.fromServer;
    var49[var54] = var53;
    var54 = var52.GUILD_ANNOUNCEMENT;
    var53 = var18.fromServer;
    var49[var54] = var53;
    var54 = var52.GUILD_STORE;
    var53 = var18.fromServer;
    var49[var54] = var53;
    var54 = var52.ANNOUNCEMENT_THREAD;
    var53 = var6.fromServer;
    var49[var54] = var53;
    var54 = var52.PUBLIC_THREAD;
    var53 = var6.fromServer;
    var49[var54] = var53;
    var54 = var52.PRIVATE_THREAD;
    var53 = var6.fromServer;
    var49[var54] = var53;
    var54 = var52.GUILD_DIRECTORY;
    var53 = var18.fromServer;
    var49[var54] = var53;
    var54 = var52.GUILD_FORUM;
    var53 = var10.fromServer;
    var49[var54] = var53;
    var54 = var52.GUILD_MEDIA;
    var53 = var10.fromServer;
    var49[var54] = var53;
    var _closure1_slot33 = var49;
    var49 = {};
    var53 = var52.DM;
    var49[var53] = var8;
    var53 = var52.GROUP_DM;
    var49[var53] = var7;
    var53 = var52.GUILD_TEXT;
    var49[var53] = var12;
    var53 = var52.GUILD_VOICE;
    var49[var53] = var11;
    var53 = var52.GUILD_STAGE_VOICE;
    var49[var53] = var14;
    var53 = var52.GUILD_CATEGORY;
    var49[var53] = var16;
    var53 = var52.GUILD_ANNOUNCEMENT;
    var49[var53] = var17;
    var53 = var52.GUILD_STORE;
    var49[var53] = var13;
    var53 = var52.ANNOUNCEMENT_THREAD;
    var49[var53] = var6;
    var53 = var52.PUBLIC_THREAD;
    var49[var53] = var6;
    var53 = var52.PRIVATE_THREAD;
    var49[var53] = var6;
    var53 = var52.GUILD_DIRECTORY;
    var49[var53] = var15;
    var53 = var52.GUILD_FORUM;
    var49[var53] = var10;
    var52 = var52.GUILD_MEDIA;
    var49[var52] = var10;
    var _closure1_slot34 = var49;
    var49 = 18;
    var49 = var51[var49];
    var51 = var50.bind(var1)(var49);
    var50 = var51.fileFinishedImporting;
    var49 = 'records/ChannelRecord.tsx';
    var49 = var50.bind(var51)(var49);
    var49 = function isGuildSelectableChannelType(arg1) {
        var3 = _closure1_slot16;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isGuildSelectableChannelType'] = var49;
    var3['ALL_CHANNEL_TYPES'] = var48;
    var48 = function isGuildTextChannelType(arg1) {
        var3 = _closure1_slot17;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isGuildTextChannelType'] = var48;
    var3['GUILD_WEBHOOK_CHANNEL_TYPES'] = var47;
    var3['GUILD_CHANNEL_TYPES'] = var46;
    var46 = function isGuildChannelType(arg1) {
        var3 = _closure1_slot18;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isGuildChannelType'] = var46;
    var3['GUILD_CAN_CONTAIN_THREADS_CHANNEL_TYPES'] = var45;
    var3['GUILD_VOCAL_CHANNEL_TYPES'] = var44;
    var3['isGuildVocalChannelType'] = var43;
    var3['SILENT_JOIN_LEAVE_CHANNEL_TYPES'] = var42;
    var3['isPrivate'] = var41;
    var3['isMultiUserDM'] = var40;
    var3['TEXT_CHANNEL_TYPES'] = var39;
    var39 = function isTextChannel(arg1) {
        var3 = _closure1_slot22;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isTextChannel'] = var39;
    var3['isVoiceChannel'] = var38;
    var38 = function isGuildReadableType(arg1) {
        var3 = _closure1_slot24;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isGuildReadableType'] = var38;
    var3['THREAD_CHANNEL_TYPES'] = var37;
    var3['THREADED_CHANNEL_TYPES'] = var36;
    var3['isThread'] = var35;
    var35 = function isReadableType(arg1) {
        var3 = _closure1_slot26;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isReadableType'] = var35;
    var3['GUILD_NON_CATEGORY_CHANNEL_TYPES'] = var34;
    var3['EDITABLE_CHANNEL_TYPES'] = var33;
    var3['TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES'] = var32;
    var3['TOPIC_CHANNEL_TYPES'] = var31;
    var3['NSFW_CHANNEL_TYPES'] = var30;
    var3['CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES'] = var29;
    var3['SLOWMODE_CHANNEL_TYPES'] = var28;
    var3['EDITABLE_VOICE_SETTINGS_TYPES'] = var27;
    var3['VOICE_THREAD_PARENT_CHANNEL_TYPES'] = var26;
    var3['CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING'] = var25;
    var3['GUILD_FAVORITES_CHANNEL_TYPES'] = var24;
    var3['getAccessPermissions'] = var23;
    var23 = function getBasicAccessPermissions(arg1) {
        _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
            var4 = _closure1_slot37;
            var3 = undefined;
            var1 = arg1;
            var1 = var4.bind(var3)(var1);
            if(var1) { _fun0054_ip = 13; continue _fun0054 }
case 22:
            var1 = _closure1_slot12;
            var1 = var1.VIEW_CHANNEL;
            _fun0054_ip = 23; continue _fun0054;
case 13:
            var1 = _closure1_slot28;
case 23:
            return var1;
        }
    };
    var3['getBasicAccessPermissions'] = var23;
    var3['ChannelRecordProperties'] = var22;
    var3['ChannelRecordBase'] = var21;
    var3['UnknownChannelRecord'] = var20;
    var3['GuildVocalChannelRecord'] = var19;
    var3['GuildTextualChannelRecord'] = var18;
    var3['GuildAnnouncementChannelRecord'] = var17;
    var3['GuildCategoryChannelRecord'] = var16;
    var3['GuildDirectoryChannelRecord'] = var15;
    var3['GuildStageVoiceChannelRecord'] = var14;
    var3['GuildStoreChannelRecord'] = var13;
    var3['GuildTextChannelRecord'] = var12;
    var3['GuildVoiceChannelRecord'] = var11;
    var3['ForumChannelRecord'] = var10;
    var3['PrivateChannelRecord'] = var9;
    var3['DMChannelRecord'] = var8;
    var3['GroupDMChannelRecord'] = var7;
    var3['ThreadChannelRecord'] = var6;
    var6 = function createChannelRecordFromServer(arg1, arg2) {
        _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot33;
            var3 = var4.type;
            var2 = null;
            if(!(var2 == var3)) { _fun0055_ip = 24; continue _fun0055 }
case 38:
            var6 = _closure1_slot11;
            var3 = var6.GUILD_TEXT;
case 24:
            var3 = var5[var3];
            if(!(var2 == var3)) { _fun0055_ip = 72; continue _fun0055 }
case 39:
            var1 = _closure1_slot30;
            var3 = var1.fromServer;
case 72:
            var2 = undefined;
            var1 = arg2;
            var1 = var3.bind(var2)(var4, var1);
            return var1;
        }
    };
    var3['createChannelRecordFromServer'] = var6;
    var5 = function createChannelRecordFromInvite(arg1) {
        var3 = _closure1_slot49;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['createChannelRecordFromInvite'] = var5;
    var3['castChannelRecord'] = var4;
    var3['createChannelRecord'] = var2;
    return var1;
})();
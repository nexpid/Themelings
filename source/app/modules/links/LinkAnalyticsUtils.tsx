// app/modules/links/LinkAnalyticsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
            var9 = _closure1_slot7;
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
            var7 = _closure1_slot7;
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
    var _closure1_slot6 = var1;
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
    var _closure1_slot7 = var1;
    var1 = function getDiscordLinkTypeFromMetadata(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = null;
            if(!(var2 != var3)) { _fun0004_ip = 36; continue _fun0004 }
case 32:
            var3 = var1.channelId;
            if(!(var2 != var3)) { _fun0004_ip = 36; continue _fun0004 }
case 31:
            var3 = var1.messageId;
            if(!(var2 == var3)) { _fun0004_ip = 37; continue _fun0004 }
case 36:
            var3 = var1.guildId;
            if(!(var2 != var3)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var1 = var1.channelId;
            if(!(var2 == var1)) { _fun0004_ip = 40; continue _fun0004 }
case 38:
            var1 = _closure1_slot4;
            var1 = var1.UNKNOWN;
            _fun0004_ip = 41; continue _fun0004;
case 40:
            var2 = _closure1_slot4;
            var1 = var2.CHANNEL;
case 41:
            _fun0004_ip = 42; continue _fun0004;
case 37:
            var2 = _closure1_slot4;
            var1 = var2.MESSAGE;
case 42:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function getDiscordLinkType(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var9 = arg1;
            var3 = arg2;
            var8 = null;
            if(!(var8 == var3)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            if(!(var8 != var9)) { _fun0005_ip = 45; continue _fun0005 }
case 43:
            if(!(var8 != var3)) { _fun0005_ip = 46; continue _fun0005 }
case 29:
            var2 = _closure1_slot8;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            _fun0005_ip = 47; continue _fun0005;
case 46:
            var4 = _closure1_slot6;
            var2 = _closure1_slot5;
            var7 = undefined;
            var6 = var4.bind(var7)(var2);
            var4 = var6.bind(var7)();
            var2 = var4.done;
            var5 = var4;
            if(var2) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var2 = var5.value;
            var2 = var2.bind(var7)(var9);
            if(!(var8 == var2)) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var10 = var6.bind(var7)();
            var4 = var10.done;
            var5 = var10;
            if(!var4) { _fun0005_ip = 49; continue _fun0005 }
case 48:
            var3 = _closure1_slot4;
            var2 = var3.UNKNOWN;
case 50:
            var1 = var2;
case 47:
            _fun0005_ip = 52; continue _fun0005;
case 45:
            var2 = _closure1_slot4;
            var1 = var2.UNKNOWN;
case 52:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot3 = var2;
    var2 = {};
    var7 = 'Discord Message Link';
    var2['MESSAGE'] = var7;
    var7 = 'Discord Channel Link';
    var2['CHANNEL'] = var7;
    var7 = 'Discord Server Invite';
    var2['SERVER_INVITE'] = var7;
    var7 = 'Discord Gift Link';
    var2['GIFT'] = var7;
    var7 = 'Unknown';
    var2['UNKNOWN'] = var7;
    var7 = 'Discord Discovery Link';
    var2['DISCOVERY'] = var7;
    var _closure1_slot4 = var2;
    var2 = new Array(3);
    var7 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isInvite;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = null;
            if(!var3) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var2 = _closure1_slot4;
            var1 = var2.SERVER_INVITE;
case 53:
            return var1;
        }
    };
    var2[0] = var7;
    var7 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var2 = var4.safeParseWithQuery;
            var1 = arg1;
            var2 = var2.bind(var4)(var1);
            var1 = null;
            if(!(var1 != var2)) { _fun0007_ip = 55; continue _fun0007 }
case 56:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 3;
            var4 = var7[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.tryParseChannelPath;
            var2 = var2.path;
            var6 = var4.bind(var6)(var2);
            var4 = var1 == var6;
            var2 = null;
            if(var4) { _fun0007_ip = 57; continue _fun0007 }
case 58:
            var4 = _closure1_slot8;
            var3 = {};
            var7 = var6.guildId;
            var3['guildId'] = var7;
            var7 = var6.channelId;
            var3['channelId'] = var7;
            var6 = var6.messageId;
            var3['messageId'] = var6;
            var2 = var4.bind(var5)(var3);
case 57:
            return var2;
case 55:
            return var1;
        }
    };
    var2[1] = var7;
    var7 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isDiscoveryLink;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = null;
            if(!var3) { _fun0008_ip = 53; continue _fun0008 }
case 54:
            var2 = _closure1_slot4;
            var1 = var2.DISCOVERY;
case 53:
            return var1;
        }
    };
    var2[2] = var7;
    var _closure1_slot5 = var2;
    var2 = {};
    var7 = function trackDiscordLinkClicked(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot3;
        var3 = var2.LINK_CLICKED;
        var2 = {};
        var7 = true;
        var2['is_discord_link'] = var7;
        var7 = _closure1_slot8;
        var6 = arg1;
        var6 = var7.bind(var1)(var6);
        var2['discord_link_type'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackDiscordLinkClicked'] = var7;
    var7 = function trackLinkClicked(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var9 = arg1;
            var8 = arg2;
            var5 = null;
            if(!(var5 == var9)) { _fun0009_ip = 43; continue _fun0009 }
case 44:
            if(!(var5 != var8)) { _fun0009_ip = 59; continue _fun0009 }
case 43:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 2;
            var1 = var3[var1];
            var7 = undefined;
            var3 = var2.bind(var7)(var1);
            var2 = var3.isDiscordUrl;
            var1 = true;
            var10 = var2.bind(var3)(var9, var1);
            if(var10) { _fun0009_ip = 60; continue _fun0009 }
case 61:
            var10 = var5 != var8;
case 60:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var4 = var2.bind(var7)(var1);
            var3 = var4.track;
            var1 = _closure1_slot3;
            var2 = var1.LINK_CLICKED;
            var1 = {};
            var1['is_discord_link'] = var10;
            var5 = null;
            if(!var10) { _fun0009_ip = 62; continue _fun0009 }
case 63:
            var6 = _closure1_slot9;
            var5 = var6.bind(var7)(var9, var8);
case 62:
            var1['discord_link_type'] = var5;
            var1 = var3.bind(var4)(var2, var1);
case 59:
            var1 = undefined;
            return var1;
        }
    };
    var2['trackLinkClicked'] = var7;
    var4 = function trackAnnouncementMessageLinkClicked(arg1) {
        var1 = arg1;
        var10 = var1.messageId;
        var9 = var1.channelId;
        var8 = var1.guildId;
        var7 = var1.sourceChannelId;
        var6 = var1.sourceGuildId;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot3;
        var3 = var2.ANNOUNCEMENT_MESSAGE_LINK_CLICKED;
        var2 = {};
        var2['message_id'] = var10;
        var2['channel_id'] = var9;
        var2['guild_id'] = var8;
        var2['source_channel_id'] = var7;
        var2['source_guild_id'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackAnnouncementMessageLinkClicked'] = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/links/LinkAnalyticsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
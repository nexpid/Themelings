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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot7;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot7;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 343:
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
    var1 = function getDiscordLinkTypeFromMetadata(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = null;
            if(!(var2 != var3)) { _fun0004_ip = 32; continue _fun0004 }
 14:
            var3 = var1.channelId;
            if(!(var2 != var3)) { _fun0004_ip = 32; continue _fun0004 }
 23:
            var3 = var1.messageId;
            if(!(var2 == var3)) { _fun0004_ip = 80; continue _fun0004 }
 32:
            var3 = var1.guildId;
            if(!(var2 != var3)) { _fun0004_ip = 50; continue _fun0004 }
 41:
            var1 = var1.channelId;
            if(!(var2 == var1)) { _fun0004_ip = 65; continue _fun0004 }
 50:
            var1 = _closure1_slot4;
            var1 = var1.UNKNOWN;
            _fun0004_ip = 78; continue _fun0004;
 65:
            var2 = _closure1_slot4;
            var1 = var2.CHANNEL;
 78:
            _fun0004_ip = 93; continue _fun0004;
 80:
            var2 = _closure1_slot4;
            var1 = var2.MESSAGE;
 93:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function getDiscordLinkType(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var9 = arg1;
            var3 = arg2;
            var8 = null;
            if(!(var8 == var3)) { _fun0005_ip = 16; continue _fun0005 }
 12:
            if(!(var8 != var9)) { _fun0005_ip = 113; continue _fun0005 }
 16:
            if(!(var8 != var3)) { _fun0005_ip = 36; continue _fun0005 }
 20:
            var2 = _closure1_slot8;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            _fun0005_ip = 111; continue _fun0005;
 36:
            var4 = _closure1_slot6;
            var2 = _closure1_slot5;
            var7 = undefined;
            var6 = var4.bind(var7)(var2);
            var4 = var6.bind(var7)();
            var2 = var4.done;
            var5 = var4;
            if(var2) { _fun0005_ip = 98; continue _fun0005 }
 69:
            var2 = var5.value;
            var2 = var2.bind(var7)(var9);
            if(!(var8 == var2)) { _fun0005_ip = 108; continue _fun0005 }
 83:
            var10 = var6.bind(var7)();
            var4 = var10.done;
            var5 = var10;
            if(!var4) { _fun0005_ip = 69; continue _fun0005 }
 98:
            var3 = _closure1_slot4;
            var2 = var3.UNKNOWN;
 108:
            var1 = var2;
 111:
            _fun0005_ip = 126; continue _fun0005;
 113:
            var2 = _closure1_slot4;
            var1 = var2.UNKNOWN;
 126:
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
 0:
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
            if(!var3) { _fun0006_ip = 54; continue _fun0006 }
 44:
            var2 = _closure1_slot4;
            var1 = var2.SERVER_INVITE;
 54:
            return var1;
        }
    };
    var2[0] = var7;
    var7 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
            if(!(var1 != var2)) { _fun0007_ip = 131; continue _fun0007 }
 45:
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
            if(var4) { _fun0007_ip = 129; continue _fun0007 }
 91:
            var4 = _closure1_slot8;
            var3 = {};
            var7 = var6.guildId;
            var3['guildId'] = var7;
            var7 = var6.channelId;
            var3['channelId'] = var7;
            var6 = var6.messageId;
            var3['messageId'] = var6;
            var2 = var4.bind(var5)(var3);
 129:
            return var2;
 131:
            return var1;
        }
    };
    var2[1] = var7;
    var7 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
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
            if(!var3) { _fun0008_ip = 54; continue _fun0008 }
 44:
            var2 = _closure1_slot4;
            var1 = var2.DISCOVERY;
 54:
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
 0:
            var9 = arg1;
            var8 = arg2;
            var5 = null;
            if(!(var5 == var9)) { _fun0009_ip = 16; continue _fun0009 }
 12:
            if(!(var5 != var8)) { _fun0009_ip = 130; continue _fun0009 }
 16:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 2;
            var1 = var3[var1];
            var7 = undefined;
            var3 = var2.bind(var7)(var1);
            var2 = var3.isDiscordUrl;
            var1 = true;
            var10 = var2.bind(var3)(var9, var1);
            if(var10) { _fun0009_ip = 62; continue _fun0009 }
 58:
            var10 = var5 != var8;
 62:
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
            if(!var10) { _fun0009_ip = 119; continue _fun0009 }
 109:
            var6 = _closure1_slot9;
            var5 = var6.bind(var7)(var9, var8);
 119:
            var1['discord_link_type'] = var5;
            var1 = var3.bind(var4)(var2, var1);
 130:
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
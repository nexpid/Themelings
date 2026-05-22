// app/modules/messages/native/MessageImpressionAnalyticsHelpers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
            var9 = _closure1_slot13;
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
            var7 = _closure1_slot13;
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
    var _closure1_slot12 = var1;
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
    var _closure1_slot13 = var1;
    var1 = function getVoiceInviteEmbedRenderInfo(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var2 = var6.state;
            var1 = _closure1_slot8;
            var1 = var1.RESOLVING;
            if(!(var2 !== var1)) { _fun0004_ip = 36; continue _fun0004 }
case 34:
            var2 = var6.state;
            var1 = _closure1_slot8;
            var1 = var1.EXPIRED;
            if(!(var2 !== var1)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var2 = var6.state;
            var1 = _closure1_slot8;
            var1 = var1.BANNED;
            if(!(var2 !== var1)) { _fun0004_ip = 36; continue _fun0004 }
case 38:
            var2 = var6.state;
            var1 = _closure1_slot8;
            var1 = var1.ERROR;
            if(!(var2 !== var1)) { _fun0004_ip = 36; continue _fun0004 }
case 39:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 9;
            var1 = var1[var5];
            var7 = undefined;
            var2 = var2.bind(var7)(var1);
            var1 = var2.getInviteType;
            var2 = var1.bind(var2)(var6);
            var1 = _closure1_slot11;
            var1 = var1.GUILD;
            if(!(var2 === var1)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = var1[var5];
            var8 = var3.bind(var7)(var2);
            var2 = var8.getGuildInviteExtendedType;
            var2 = var2.bind(var8)(var6);
            var1 = var1[var5];
            var1 = var3.bind(var7)(var1);
            var1 = var1.GuildInviteExtendedType;
            var1 = var1.VOICE_CHANNEL;
            if(!(var2 === var1)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var2 = var6.guild;
            var1 = null;
            var3 = var1 == var2;
            var9 = undefined;
            if(var3) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var9 = var2.id;
case 44:
            var2 = var1 == var9;
            var1 = null;
            if(var2) { _fun0004_ip = 27; continue _fun0004 }
case 46:
            var2 = {};
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 10;
            var3 = var8[var3];
            var8 = var5.bind(var7)(var3);
            var5 = var8.getVoiceChannelListInviteExperiment;
            var3 = {};
            var3['guildId'] = var9;
            var9 = 'mobile_invite_embed_impression';
            var3['location'] = var9;
            var3 = var5.bind(var8)(var3);
            var3 = var3.enabled;
            if(!var3) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 11;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.canShowVoiceChannelListInviteEmbed;
            var3 = var4.bind(var5)(var6);
case 47:
            var2['treatmentRendered'] = var3;
            var1 = var2;
case 27:
            return var1;
case 42:
            var1 = null;
            return var1;
case 40:
            var1 = null;
            return var1;
case 36:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.ChannelTypes;
    var _closure1_slot6 = var7;
    var7 = var4.GuildFeatures;
    var _closure1_slot7 = var7;
    var7 = var4.InviteStates;
    var _closure1_slot8 = var7;
    var4 = var4.MessageFlags;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.LinkType;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot11 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/MessageImpressionAnalyticsHelpers.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useShouldTrackAnnouncementMessageViews(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var4 = var2.guild;
            var8 = var2.channel;
            var _closure2_slot0 = var8;
            var5 = var2.messages;
            var _closure2_slot1 = var5;
            var6 = var2.isMessagesReady;
            var _closure2_slot2 = var6;
            var7 = undefined;
            var _closure2_slot3 = var7;
            var3 = null;
            var9 = var3 == var4;
            var2 = undefined;
            if(var9) { _fun0005_ip = 39; continue _fun0005 }
case 28:
            var9 = var4.features;
            var4 = var3 == var9;
            var2 = undefined;
            if(var4) { _fun0005_ip = 39; continue _fun0005 }
case 49:
            var7 = var9.has;
            var4 = _closure1_slot7;
            var4 = var4.COMMUNITY;
            var2 = var7.bind(var9)(var4);
case 39:
            var7 = var3 != var2;
            if(!var7) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var7 = var2;
case 50:
            _closure2_slot3 = var7;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var9 = var8.type;
            var2 = new Array(5);
            var2[0] = var9;
            var8 = var8.guild_id;
            var2[1] = var8;
            var2[2] = var7;
            var2[3] = var6;
            var2[4] = var5;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.type;
                    var1 = _closure1_slot6;
                    var1 = var1.GUILD_ANNOUNCEMENT;
                    var1 = var2 === var1;
                    if(!var1) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                    var1 = _closure2_slot3;
case 52:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0006_ip = 30; continue _fun0006 }
case 54:
                    var5 = _closure2_slot1;
                    var4 = var5.some;
                    var3 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var5 = arg1;
                            var1 = var5.messageReference;
                            var3 = null;
                            var1 = var3 != var1;
                            if(!var1) { _fun0007_ip = 34; continue _fun0007 }
case 55:
                            var2 = var5.webhookId;
                            var1 = var3 != var2;
case 34:
                            if(!var1) { _fun0007_ip = 4; continue _fun0007 }
case 56:
                            var4 = var5.hasFlag;
                            var2 = _closure1_slot9;
                            var2 = var2.IS_CROSSPOST;
                            var1 = var4.bind(var5)(var2);
case 4:
                            if(!var1) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                            var2 = _closure2_slot0;
                            var2 = var2.guild_id;
                            var1 = var3 != var2;
case 57:
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var3);
case 30:
                    if(var1) { _fun0006_ip = 59; continue _fun0006 }
case 35:
                    var1 = var2;
case 59:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useShouldTrackAnnouncementMessageViews'] = var4;
    var4 = function useShouldTrackRichPresenceInviteEmbedViews(arg1) {
        var2 = arg1;
        var6 = var2.messages;
        var _closure2_slot0 = var6;
        var5 = var2.isMessagesReady;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = _closure2_slot1;
                if(!var1) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                var4 = _closure2_slot0;
                var3 = var4.some;
                var2 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.activity;
                        var3 = null;
                        var1 = var3 != var1;
                        if(!var1) { _fun0009_ip = 60; continue _fun0009 }
case 55:
                        var4 = var2.activity;
                        var4 = var4.party_id;
                        var1 = var3 != var4;
case 60:
                        if(!var1) { _fun0009_ip = 2; continue _fun0009 }
case 62:
                        var2 = var2.application;
                        var1 = var3 != var2;
case 2:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
case 60:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useShouldTrackRichPresenceInviteEmbedViews'] = var4;
    var4 = function handleAnnouncementMessageViewTracking(arg1, arg2, arg3, arg4) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var4 = arg3;
            var _closure2_slot0 = var4;
            var2 = arg4;
            var _closure2_slot1 = var2;
            var2 = arg2;
            if(!var2) { _fun0010_ip = 63; continue _fun0010 }
case 64:
            var2 = null;
            if(!(var2 != var4)) { _fun0010_ip = 63; continue _fun0010 }
case 56:
            var4 = new Array(0);
            var _closure2_slot2 = var4;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.message;
                    var5 = var2.messageReference;
                    var4 = null;
                    var6 = var4 == var5;
                    var1 = undefined;
                    var3 = undefined;
                    if(var6) { _fun0011_ip = 53; continue _fun0011 }
case 65:
                    var3 = var5.guild_id;
case 53:
                    var3 = var4 != var3;
                    if(!var3) { _fun0011_ip = 5; continue _fun0011 }
case 66:
                    var5 = var2.webhookId;
                    var3 = var4 != var5;
case 5:
                    if(!var3) { _fun0011_ip = 67; continue _fun0011 }
case 68:
                    var6 = var2.hasFlag;
                    var5 = _closure1_slot9;
                    var5 = var5.IS_CROSSPOST;
                    var3 = var6.bind(var2)(var5);
case 67:
                    var6 = var2.hasFlag;
                    var5 = _closure1_slot9;
                    var5 = var5.EPHEMERAL;
                    var5 = var6.bind(var2)(var5);
                    if(var5) { _fun0011_ip = 36; continue _fun0011 }
case 69:
                    var5 = _closure2_slot1;
                    var6 = var5.type;
                    var5 = _closure1_slot6;
                    var5 = var5.GUILD_ANNOUNCEMENT;
                    if(!(var6 !== var5)) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                    if(!var3) { _fun0011_ip = 36; continue _fun0011 }
case 70:
                    if(!var3) { _fun0011_ip = 72; continue _fun0011 }
case 73:
                    var5 = var2.messageReference;
                    if(!(var4 == var5)) { _fun0011_ip = 74; continue _fun0011 }
case 72:
                    var5 = _closure2_slot1;
                    var6 = var5.id;
                    _fun0011_ip = 75; continue _fun0011;
case 74:
                    var5 = var2.messageReference;
                    var6 = var5.channel_id;
case 75:
                    if(!var3) { _fun0011_ip = 43; continue _fun0011 }
case 76:
                    var8 = var2.messageReference;
                    var10 = var4 == var8;
                    var5 = undefined;
                    if(var10) { _fun0011_ip = 77; continue _fun0011 }
case 78:
                    var5 = var8.guild_id;
case 77:
                    if(!(var4 == var5)) { _fun0011_ip = 79; continue _fun0011 }
case 43:
                    var5 = _closure2_slot0;
                    _fun0011_ip = 80; continue _fun0011;
case 79:
                    var8 = var2.messageReference;
                    var5 = var8.guild_id;
case 80:
                    if(!var3) { _fun0011_ip = 46; continue _fun0011 }
case 81:
                    var3 = var2.messageReference;
                    if(!(var4 == var3)) { _fun0011_ip = 82; continue _fun0011 }
case 46:
                    var8 = var2.id;
                    _fun0011_ip = 18; continue _fun0011;
case 82:
                    var2 = var2.messageReference;
                    var8 = var2.message_id;
case 18:
                    var4 = _closure2_slot2;
                    var3 = var4.push;
                    var2 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 6;
                    var9 = var11[var9];
                    var9 = var10.bind(var1)(var9);
                    var9 = var9.MessageViewTrackingType;
                    var9 = var9.ANNOUNCEMENT;
                    var2['type'] = var9;
                    var2['messageId'] = var8;
                    var8 = _closure2_slot1;
                    var8 = var8.id;
                    var2['channelId'] = var8;
                    var7 = _closure2_slot0;
                    var2['guildId'] = var7;
                    var2['sourceChannelId'] = var6;
                    var2['sourceGuildId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 36:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 6;
            var2 = var7[var1];
            var6 = undefined;
            var3 = var3.bind(var6)(var2);
            var2 = var3.handleMessageListVisibilityChange;
            var5 = _closure1_slot0;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.MessageViewTrackingType;
            var1 = var1.ANNOUNCEMENT;
            var1 = var2.bind(var3)(var4, var1);
case 63:
            var1 = undefined;
            return var1;
        }
    };
    var3['handleAnnouncementMessageViewTracking'] = var4;
    var4 = function handleRichPresenceInviteEmbedViewTracking(arg1, arg2, arg3, arg4) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = arg1;
            var2 = arg3;
            var _closure2_slot0 = var2;
            var2 = arg4;
            var _closure2_slot1 = var2;
            var2 = arg2;
            if(!var2) { _fun0012_ip = 83; continue _fun0012 }
case 64:
            var4 = new Array(0);
            var _closure2_slot2 = var4;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.message;
                    var2 = var5.hasFlag;
                    var1 = _closure1_slot9;
                    var1 = var1.EPHEMERAL;
                    var1 = var2.bind(var5)(var1);
                    if(var1) { _fun0013_ip = 84; continue _fun0013 }
case 85:
                    var3 = var5.activity;
                    var2 = null;
                    var1 = var2 == var3;
case 84:
                    if(var1) { _fun0013_ip = 86; continue _fun0013 }
case 37:
                    var2 = var5.activity;
                    var3 = var2.party_id;
                    var2 = null;
                    var1 = var2 == var3;
case 86:
                    if(var1) { _fun0013_ip = 87; continue _fun0013 }
case 49:
                    var3 = var5.application;
                    var2 = null;
                    var1 = var2 == var3;
case 87:
                    if(var1) { _fun0013_ip = 88; continue _fun0013 }
case 89:
                    var3 = _closure2_slot2;
                    var2 = var3.push;
                    var1 = {};
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 6;
                    var8 = var8[var7];
                    var7 = undefined;
                    var7 = var9.bind(var7)(var8);
                    var7 = var7.MessageViewTrackingType;
                    var7 = var7.APP_EMBED;
                    var1['type'] = var7;
                    var7 = var5.id;
                    var1['messageId'] = var7;
                    var7 = _closure2_slot1;
                    var7 = var7.id;
                    var1['channelId'] = var7;
                    var6 = _closure2_slot0;
                    var1['guildId'] = var6;
                    var5 = var5.application;
                    var5 = var5.id;
                    var1['applicationId'] = var5;
                    var4 = _closure1_slot10;
                    var4 = var4.RICH_PRESENCE_INVITE;
                    var1['linkType'] = var4;
                    var1 = var2.bind(var3)(var1);
case 88:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 6;
            var2 = var7[var1];
            var6 = undefined;
            var3 = var3.bind(var6)(var2);
            var2 = var3.handleMessageListVisibilityChange;
            var5 = _closure1_slot0;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.MessageViewTrackingType;
            var1 = var1.APP_EMBED;
            var1 = var2.bind(var3)(var4, var1);
case 83:
            var1 = undefined;
            return var1;
        }
    };
    var3['handleRichPresenceInviteEmbedViewTracking'] = var4;
    var4 = function useShouldTrackOfficialMessageViews(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg1;
            var9 = var2.guild;
            var5 = var2.messages;
            var _closure2_slot0 = var5;
            var6 = var2.isMessagesReady;
            var _closure2_slot1 = var6;
            var3 = undefined;
            var _closure2_slot2 = var3;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 7;
            var4 = var8[var4];
            var8 = var7.bind(var3)(var4);
            var7 = var8.useIsGuildOfficialMessagesEnabled;
            var4 = null;
            var10 = var4 == var9;
            if(var10) { _fun0014_ip = 90; continue _fun0014 }
case 57:
            var3 = var9.id;
case 90:
            var9 = var4 != var3;
            var4 = null;
            if(!var9) { _fun0014_ip = 91; continue _fun0014 }
case 92:
            var4 = var3;
case 91:
            var3 = 'useShouldTrackOfficialMessageViews';
            var7 = var7.bind(var8)(var4, var3);
            _closure2_slot2 = var7;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0015_ip = 32; continue _fun0015 }
case 61:
                    var1 = _closure2_slot1;
case 32:
                    if(!var1) { _fun0015_ip = 93; continue _fun0015 }
case 94:
                    var4 = _closure2_slot0;
                    var3 = var4.some;
                    var2 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.hasFlag;
                        var1 = _closure1_slot9;
                        var1 = var1.IS_GUILD_OFFICIAL;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 93:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useShouldTrackOfficialMessageViews'] = var4;
    var4 = function handleOfficialMessageViewTracking(arg1, arg2, arg3, arg4) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = arg1;
            var4 = arg3;
            var _closure2_slot0 = var4;
            var2 = arg4;
            var _closure2_slot1 = var2;
            var2 = arg2;
            if(!var2) { _fun0016_ip = 63; continue _fun0016 }
case 64:
            var2 = null;
            if(!(var2 != var4)) { _fun0016_ip = 63; continue _fun0016 }
case 56:
            var4 = new Array(0);
            var _closure2_slot2 = var4;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.message;
                    var2 = var5.hasFlag;
                    var1 = _closure1_slot9;
                    var1 = var1.EPHEMERAL;
                    var1 = var2.bind(var5)(var1);
                    var1 = !var1;
                    if(!var1) { _fun0017_ip = 95; continue _fun0017 }
case 96:
                    var3 = var5.hasFlag;
                    var2 = _closure1_slot9;
                    var2 = var2.IS_GUILD_OFFICIAL;
                    var1 = var3.bind(var5)(var2);
case 95:
                    if(!var1) { _fun0017_ip = 97; continue _fun0017 }
case 98:
                    var3 = _closure2_slot2;
                    var2 = var3.push;
                    var1 = {};
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 6;
                    var7 = var7[var6];
                    var6 = undefined;
                    var6 = var8.bind(var6)(var7);
                    var6 = var6.MessageViewTrackingType;
                    var6 = var6.OFFICIAL_MESSAGE;
                    var1['type'] = var6;
                    var5 = var5.id;
                    var1['messageId'] = var5;
                    var5 = _closure2_slot1;
                    var5 = var5.id;
                    var1['channelId'] = var5;
                    var4 = _closure2_slot0;
                    var1['guildId'] = var4;
                    var1 = var2.bind(var3)(var1);
case 97:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 6;
            var2 = var7[var1];
            var6 = undefined;
            var3 = var3.bind(var6)(var2);
            var2 = var3.handleMessageListVisibilityChange;
            var5 = _closure1_slot0;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.MessageViewTrackingType;
            var1 = var1.OFFICIAL_MESSAGE;
            var1 = var2.bind(var3)(var4, var1);
case 63:
            var1 = undefined;
            return var1;
        }
    };
    var3['handleOfficialMessageViewTracking'] = var4;
    var4 = function useShouldTrackVoiceInviteEmbedViews(arg1) {
        var2 = arg1;
        var6 = var2.messages;
        var _closure2_slot0 = var6;
        var5 = var2.isMessagesReady;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var1 = _closure2_slot1;
                if(!var1) { _fun0018_ip = 60; continue _fun0018 }
case 61:
                var4 = _closure2_slot0;
                var3 = var4.some;
                var2 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.codedLinks;
                    var2 = var3.some;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.CodedLinkType;
                        var1 = var1.INVITE;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 60:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useShouldTrackVoiceInviteEmbedViews'] = var4;
    var2 = function handleVoiceInviteEmbedViewTracking(arg1, arg2, arg3, arg4) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var3 = arg1;
            var2 = arg3;
            var _closure2_slot0 = var2;
            var2 = arg4;
            var _closure2_slot1 = var2;
            var2 = arg2;
            if(!var2) { _fun0019_ip = 83; continue _fun0019 }
case 64:
            var4 = new Array(0);
            var _closure2_slot2 = var4;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var1 = arg1;
                    var21 = var1.message;
                    var2 = var21.hasFlag;
                    var1 = _closure1_slot9;
                    var1 = var1.EPHEMERAL;
                    var1 = var2.bind(var21)(var1);
                    if(var1) { _fun0020_ip = 99; continue _fun0020 }
case 100:
                    var2 = _closure1_slot12;
                    var1 = var21.codedLinks;
                    var19 = undefined;
                    var18 = var2.bind(var19)(var1);
                    var2 = var18.bind(var19)();
                    var1 = var2.done;
                    var16 = 6;
                    var15 = 12;
                    var14 = null;
                    var13 = 8;
                    var12 = var2;
                    var11 = undefined;
                    var10 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if(var1) { _fun0020_ip = 99; continue _fun0020 }
case 101:
                    var36 = var12.value;
                    var32 = var36.type;
                    var23 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var13];
                    var1 = var23.bind(var19)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.INVITE;
                    var31 = var11;
                    var30 = var10;
                    var29 = var9;
                    var28 = var8;
                    var27 = var7;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    var23 = var2;
                    if(!(var32 === var1)) { _fun0020_ip = 102; continue _fun0020 }
case 103:
                    var33 = _closure1_slot4;
                    var32 = var33.getInvite;
                    var1 = var36.code;
                    var35 = var32.bind(var33)(var1);
                    var31 = var11;
                    var30 = var10;
                    var29 = var9;
                    var28 = var8;
                    var27 = var7;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    var23 = var2;
                    var6 = var35;
                    if(!(var14 != var6)) { _fun0020_ip = 102; continue _fun0020 }
case 104:
                    var1 = _closure1_slot14;
                    var34 = var1.bind(var19)(var35);
                    var31 = var11;
                    var30 = var10;
                    var29 = var9;
                    var28 = var8;
                    var27 = var7;
                    var6 = var35;
                    var25 = var4;
                    var24 = var3;
                    var23 = var2;
                    var26 = var34;
                    if(!(var14 != var26)) { _fun0020_ip = 102; continue _fun0020 }
case 105:
                    var39 = var35.channel;
                    var1 = var14 == var39;
                    var40 = undefined;
                    if(var1) { _fun0020_ip = 106; continue _fun0020 }
case 107:
                    var40 = var39.id;
case 106:
                    var1 = var14 != var40;
                    var33 = null;
                    if(!var1) { _fun0020_ip = 108; continue _fun0020 }
case 109:
                    var33 = var40;
case 108:
                    var37 = var35.guild;
                    var1 = var14 == var37;
                    var38 = undefined;
                    if(var1) { _fun0020_ip = 110; continue _fun0020 }
case 26:
                    var38 = var37.id;
case 110:
                    var1 = var14 != var38;
                    var32 = null;
                    if(!var1) { _fun0020_ip = 111; continue _fun0020 }
case 112:
                    var32 = var38;
case 111:
                    var1 = var14 != var33;
                    if(!var1) { _fun0020_ip = 113; continue _fun0020 }
case 114:
                    var1 = var14 != var32;
case 113:
                    if(!var1) { _fun0020_ip = 115; continue _fun0020 }
case 116:
                    var42 = _closure1_slot5;
                    var41 = var42.getVoiceStatesForChannelAlt;
                    var43 = var41.bind(var42)(var33, var32);
                    var42 = var43.some;
                    var41 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.voiceState;
                        var1 = var1.selfStream;
                        return var1;
                    };
                    var1 = var42.bind(var43)(var41);
case 115:
                    var43 = _closure2_slot2;
                    var42 = var43.push;
                    var41 = {};
                    var45 = _closure1_slot0;
                    var44 = _closure1_slot2;
                    var46 = var44[var16];
                    var46 = var45.bind(var19)(var46);
                    var46 = var46.MessageViewTrackingType;
                    var46 = var46.VOICE_INVITE_EMBED;
                    var41['type'] = var46;
                    var46 = var21.id;
                    var41['messageId'] = var46;
                    var46 = _closure2_slot1;
                    var46 = var46.id;
                    var41['channelId'] = var46;
                    var46 = _closure2_slot0;
                    var41['guildId'] = var46;
                    var46 = var36.code;
                    var41['inviteCode'] = var46;
                    var41['inviteGuildId'] = var32;
                    var41['inviteChannelId'] = var33;
                    var44 = var44[var15];
                    var46 = var45.bind(var19)(var44);
                    var45 = var46.getInviteInstanceId;
                    var44 = var36.code;
                    var36 = var21.id;
                    var36 = var45.bind(var46)(var44, var36);
                    var45 = var14 != var36;
                    var44 = null;
                    if(!var45) { _fun0020_ip = 117; continue _fun0020 }
case 118:
                    var44 = var36;
case 117:
                    var41['inviteInstanceId'] = var44;
                    var44 = var34.treatmentRendered;
                    var41['treatmentRendered'] = var44;
                    var41['hasActiveStream'] = var1;
                    var41 = var42.bind(var43)(var41);
                    var31 = var40;
                    var30 = var39;
                    var29 = var38;
                    var28 = var37;
                    var27 = var36;
                    var6 = var35;
                    var26 = var34;
                    var25 = var33;
                    var24 = var32;
                    var23 = var1;
case 102:
                    var32 = var18.bind(var19)();
                    var1 = var32.done;
                    var11 = var31;
                    var10 = var30;
                    var9 = var29;
                    var8 = var28;
                    var7 = var27;
                    var5 = var26;
                    var4 = var25;
                    var3 = var24;
                    var2 = var23;
                    var12 = var32;
                    if(!var1) { _fun0020_ip = 101; continue _fun0020 }
case 99:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 6;
            var2 = var7[var1];
            var6 = undefined;
            var3 = var3.bind(var6)(var2);
            var2 = var3.handleMessageListVisibilityChange;
            var5 = _closure1_slot0;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.MessageViewTrackingType;
            var1 = var1.VOICE_INVITE_EMBED;
            var1 = var2.bind(var3)(var4, var1);
case 83:
            var1 = undefined;
            return var1;
        }
    };
    var3['handleVoiceInviteEmbedViewTracking'] = var2;
    return var1;
})();
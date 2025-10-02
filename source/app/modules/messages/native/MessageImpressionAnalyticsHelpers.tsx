// app/modules/messages/native/MessageImpressionAnalyticsHelpers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ChannelTypes;
    var _closure1_slot4 = var7;
    var7 = var4.GuildFeatures;
    var _closure1_slot5 = var7;
    var4 = var4.MessageFlags;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.LinkType;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/MessageImpressionAnalyticsHelpers.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useShouldTrackAnnouncementMessageViews(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guild;
            var11 = var1.channel;
            var _closure2_slot0 = var11;
            var8 = var1.messages;
            var _closure2_slot1 = var8;
            var9 = var1.isMessagesReady;
            var _closure2_slot2 = var9;
            var1 = var1.location;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var5 = null;
            var7 = var5 == var6;
            var2 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var6.features;
            var6 = var5 == var10;
            var2 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var7 = var10.has;
            var6 = _closure1_slot5;
            var6 = var6.COMMUNITY;
            var2 = var7.bind(var10)(var6);
case 2:
            var10 = var5 != var2;
            if(!var10) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var10 = var2;
case 5:
            _closure2_slot3 = var10;
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var12 = var11.type;
            var5 = new Array(5);
            var5[0] = var12;
            var11 = var11.guild_id;
            var5[1] = var11;
            var5[2] = var10;
            var5[3] = var9;
            var5[4] = var8;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.type;
                    var1 = _closure1_slot4;
                    var1 = var1.GUILD_ANNOUNCEMENT;
                    var1 = var2 === var1;
                    if(!var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var1 = _closure2_slot3;
case 7:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var5 = _closure2_slot1;
                    var4 = var5.some;
                    var3 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var5 = arg1;
                            var1 = var5.messageReference;
                            var3 = null;
                            var1 = var3 != var1;
                            if(!var1) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                            var2 = var5.webhookId;
                            var1 = var3 != var2;
case 11:
                            if(!var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                            var4 = var5.hasFlag;
                            var2 = _closure1_slot6;
                            var2 = var2.IS_CROSSPOST;
                            var1 = var4.bind(var5)(var2);
case 13:
                            if(!var1) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                            var2 = _closure2_slot0;
                            var2 = var2.guild_id;
                            var1 = var3 != var2;
case 15:
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var3);
case 9:
                    if(var1) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var1 = var2;
case 17:
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var3, var5);
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.useExperiment;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var5 = !var5;
            var1['disable'] = var5;
            var5 = true;
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.enabled;
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
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = _closure2_slot1;
                if(!var1) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                var4 = _closure2_slot0;
                var3 = var4.some;
                var2 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.activity;
                        var3 = null;
                        var1 = var3 != var1;
                        if(!var1) { _fun0005_ip = 19; continue _fun0005 }
case 12:
                        var4 = var2.activity;
                        var4 = var4.party_id;
                        var1 = var3 != var4;
case 19:
                        if(!var1) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                        var2 = var2.application;
                        var1 = var3 != var2;
case 21:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
case 19:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useShouldTrackRichPresenceInviteEmbedViews'] = var4;
    var4 = function handleAnnouncementMessageViewTracking(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var3 = arg3;
            var _closure2_slot0 = var3;
            var2 = arg4;
            var _closure2_slot1 = var2;
            var2 = arg2;
            if(!var2) { _fun0006_ip = 23; continue _fun0006 }
case 24:
            var2 = null;
            if(!(var2 != var3)) { _fun0006_ip = 23; continue _fun0006 }
case 14:
            var3 = new Array(0);
            var _closure2_slot2 = var3;
            var2 = var4.forEach;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.message;
                    var5 = var2.messageReference;
                    var4 = null;
                    var6 = var4 == var5;
                    var1 = undefined;
                    var3 = undefined;
                    if(var6) { _fun0007_ip = 8; continue _fun0007 }
case 25:
                    var3 = var5.guild_id;
case 8:
                    var3 = var4 != var3;
                    if(!var3) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                    var5 = var2.webhookId;
                    var3 = var4 != var5;
case 26:
                    if(!var3) { _fun0007_ip = 4; continue _fun0007 }
case 28:
                    var6 = var2.hasFlag;
                    var5 = _closure1_slot6;
                    var5 = var5.IS_CROSSPOST;
                    var3 = var6.bind(var2)(var5);
case 4:
                    var6 = var2.hasFlag;
                    var5 = _closure1_slot6;
                    var5 = var5.EPHEMERAL;
                    var5 = var6.bind(var2)(var5);
                    if(var5) { _fun0007_ip = 29; continue _fun0007 }
case 6:
                    var5 = _closure2_slot1;
                    var6 = var5.type;
                    var5 = _closure1_slot4;
                    var5 = var5.GUILD_ANNOUNCEMENT;
                    if(!(var6 !== var5)) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    if(!var3) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                    if(!var3) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                    var5 = var2.messageReference;
                    if(!(var4 == var5)) { _fun0007_ip = 34; continue _fun0007 }
case 32:
                    var5 = _closure2_slot1;
                    var6 = var5.id;
                    _fun0007_ip = 35; continue _fun0007;
case 34:
                    var5 = var2.messageReference;
                    var6 = var5.channel_id;
case 35:
                    if(!var3) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                    var8 = var2.messageReference;
                    var10 = var4 == var8;
                    var5 = undefined;
                    if(var10) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var5 = var8.guild_id;
case 38:
                    if(!(var4 == var5)) { _fun0007_ip = 40; continue _fun0007 }
case 36:
                    var5 = _closure2_slot0;
                    _fun0007_ip = 41; continue _fun0007;
case 40:
                    var8 = var2.messageReference;
                    var5 = var8.guild_id;
case 41:
                    if(!var3) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                    var3 = var2.messageReference;
                    if(!(var4 == var3)) { _fun0007_ip = 44; continue _fun0007 }
case 42:
                    var8 = var2.id;
                    _fun0007_ip = 45; continue _fun0007;
case 44:
                    var2 = var2.messageReference;
                    var8 = var2.message_id;
case 45:
                    var4 = _closure2_slot2;
                    var3 = var4.push;
                    var2 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 4;
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
case 29:
                    return var1;
                }
            };
            var1 = var2.bind(var4)(var1);
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.handleMessageListVisibilityChange;
            var1 = var1.bind(var2)(var3);
case 23:
            var1 = undefined;
            return var1;
        }
    };
    var3['handleAnnouncementMessageViewTracking'] = var4;
    var2 = function handleRichPresenceInviteEmbedViewTracking(arg1, arg2, arg3, arg4) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var2 = arg3;
            var _closure2_slot0 = var2;
            var2 = arg4;
            var _closure2_slot1 = var2;
            var2 = arg2;
            if(!var2) { _fun0008_ip = 46; continue _fun0008 }
case 24:
            var3 = new Array(0);
            var _closure2_slot2 = var3;
            var2 = var4.forEach;
            var1 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.message;
                    var2 = var5.hasFlag;
                    var1 = _closure1_slot6;
                    var1 = var1.EPHEMERAL;
                    var1 = var2.bind(var5)(var1);
                    if(var1) { _fun0009_ip = 47; continue _fun0009 }
case 48:
                    var3 = var5.activity;
                    var2 = null;
                    var1 = var2 == var3;
case 47:
                    if(var1) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                    var2 = var5.activity;
                    var3 = var2.party_id;
                    var2 = null;
                    var1 = var2 == var3;
case 49:
                    if(var1) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                    var3 = var5.application;
                    var2 = null;
                    var1 = var2 == var3;
case 51:
                    if(var1) { _fun0009_ip = 53; continue _fun0009 }
case 54:
                    var3 = _closure2_slot2;
                    var2 = var3.push;
                    var1 = {};
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 4;
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
                    var4 = _closure1_slot7;
                    var4 = var4.RICH_PRESENCE_INVITE;
                    var1['linkType'] = var4;
                    var1 = var2.bind(var3)(var1);
case 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var4)(var1);
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.handleMessageListVisibilityChange;
            var1 = var1.bind(var2)(var3);
case 46:
            var1 = undefined;
            return var1;
        }
    };
    var3['handleRichPresenceInviteEmbedViewTracking'] = var2;
    return var1;
})();
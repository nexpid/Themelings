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
 0:
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
            if(var7) { _fun0001_ip = 99; continue _fun0001 }
 61:
            var10 = var6.features;
            var6 = var5 == var10;
            var2 = undefined;
            if(var6) { _fun0001_ip = 99; continue _fun0001 }
 76:
            var7 = var10.has;
            var6 = _closure1_slot5;
            var6 = var6.COMMUNITY;
            var2 = var7.bind(var10)(var6);
 99:
            var10 = var5 != var2;
            if(!var10) { _fun0001_ip = 109; continue _fun0001 }
 106:
            var10 = var2;
 109:
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
 0:
                    var1 = _closure2_slot0;
                    var2 = var1.type;
                    var1 = _closure1_slot4;
                    var1 = var1.GUILD_ANNOUNCEMENT;
                    var1 = var2 === var1;
                    if(!var1) { _fun0002_ip = 36; continue _fun0002 }
 32:
                    var1 = _closure2_slot3;
 36:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0002_ip = 67; continue _fun0002 }
 43:
                    var5 = _closure2_slot1;
                    var4 = var5.some;
                    var3 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var5 = arg1;
                            var1 = var5.messageReference;
                            var3 = null;
                            var1 = var3 != var1;
                            if(!var1) { _fun0003_ip = 28; continue _fun0003 }
 18:
                            var2 = var5.webhookId;
                            var1 = var3 != var2;
 28:
                            if(!var1) { _fun0003_ip = 55; continue _fun0003 }
 31:
                            var4 = var5.hasFlag;
                            var2 = _closure1_slot6;
                            var2 = var2.IS_CROSSPOST;
                            var1 = var4.bind(var5)(var2);
 55:
                            if(!var1) { _fun0003_ip = 74; continue _fun0003 }
 58:
                            var2 = _closure2_slot0;
                            var2 = var2.guild_id;
                            var1 = var3 != var2;
 74:
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var3);
 67:
                    if(var1) { _fun0002_ip = 73; continue _fun0002 }
 70:
                    var1 = var2;
 73:
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
 0:
                var1 = _closure2_slot1;
                if(!var1) { _fun0004_ip = 34; continue _fun0004 }
 10:
                var4 = _closure2_slot0;
                var3 = var4.some;
                var2 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var2 = arg1;
                        var1 = var2.activity;
                        var3 = null;
                        var1 = var3 != var1;
                        if(!var1) { _fun0005_ip = 34; continue _fun0005 }
 18:
                        var4 = var2.activity;
                        var4 = var4.party_id;
                        var1 = var3 != var4;
 34:
                        if(!var1) { _fun0005_ip = 46; continue _fun0005 }
 37:
                        var2 = var2.application;
                        var1 = var3 != var2;
 46:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
 34:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useShouldTrackRichPresenceInviteEmbedViews'] = var4;
    var4 = function handleAnnouncementMessageViewTracking(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var3 = arg3;
            var _closure2_slot0 = var3;
            var2 = arg4;
            var _closure2_slot1 = var2;
            var2 = arg2;
            if(!var2) { _fun0006_ip = 92; continue _fun0006 }
 25:
            var2 = null;
            if(!(var2 != var3)) { _fun0006_ip = 92; continue _fun0006 }
 31:
            var3 = new Array(0);
            var _closure2_slot2 = var3;
            var2 = var4.forEach;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.message;
                    var5 = var2.messageReference;
                    var4 = null;
                    var6 = var4 == var5;
                    var1 = undefined;
                    var3 = undefined;
                    if(var6) { _fun0007_ip = 32; continue _fun0007 }
 27:
                    var3 = var5.guild_id;
 32:
                    var3 = var4 != var3;
                    if(!var3) { _fun0007_ip = 49; continue _fun0007 }
 39:
                    var5 = var2.webhookId;
                    var3 = var4 != var5;
 49:
                    if(!var3) { _fun0007_ip = 76; continue _fun0007 }
 52:
                    var6 = var2.hasFlag;
                    var5 = _closure1_slot6;
                    var5 = var5.IS_CROSSPOST;
                    var3 = var6.bind(var2)(var5);
 76:
                    var6 = var2.hasFlag;
                    var5 = _closure1_slot6;
                    var5 = var5.EPHEMERAL;
                    var5 = var6.bind(var2)(var5);
                    if(var5) { _fun0007_ip = 336; continue _fun0007 }
 106:
                    var5 = _closure2_slot1;
                    var6 = var5.type;
                    var5 = _closure1_slot4;
                    var5 = var5.GUILD_ANNOUNCEMENT;
                    if(!(var6 !== var5)) { _fun0007_ip = 138; continue _fun0007 }
 132:
                    if(!var3) { _fun0007_ip = 336; continue _fun0007 }
 138:
                    if(!var3) { _fun0007_ip = 151; continue _fun0007 }
 141:
                    var5 = var2.messageReference;
                    if(!(var4 == var5)) { _fun0007_ip = 162; continue _fun0007 }
 151:
                    var5 = _closure2_slot1;
                    var6 = var5.id;
                    _fun0007_ip = 173; continue _fun0007;
 162:
                    var5 = var2.messageReference;
                    var6 = var5.channel_id;
 173:
                    if(!var3) { _fun0007_ip = 200; continue _fun0007 }
 176:
                    var8 = var2.messageReference;
                    var10 = var4 == var8;
                    var5 = undefined;
                    if(var10) { _fun0007_ip = 196; continue _fun0007 }
 191:
                    var5 = var8.guild_id;
 196:
                    if(!(var4 == var5)) { _fun0007_ip = 206; continue _fun0007 }
 200:
                    var5 = _closure2_slot0;
                    _fun0007_ip = 217; continue _fun0007;
 206:
                    var8 = var2.messageReference;
                    var5 = var8.guild_id;
 217:
                    if(!var3) { _fun0007_ip = 230; continue _fun0007 }
 220:
                    var3 = var2.messageReference;
                    if(!(var4 == var3)) { _fun0007_ip = 237; continue _fun0007 }
 230:
                    var8 = var2.id;
                    _fun0007_ip = 249; continue _fun0007;
 237:
                    var2 = var2.messageReference;
                    var8 = var2.message_id;
 249:
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
 336:
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
 92:
            var1 = undefined;
            return var1;
        }
    };
    var3['handleAnnouncementMessageViewTracking'] = var4;
    var2 = function handleRichPresenceInviteEmbedViewTracking(arg1, arg2, arg3, arg4) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var4 = arg1;
            var2 = arg3;
            var _closure2_slot0 = var2;
            var2 = arg4;
            var _closure2_slot1 = var2;
            var2 = arg2;
            if(!var2) { _fun0008_ip = 86; continue _fun0008 }
 25:
            var3 = new Array(0);
            var _closure2_slot2 = var3;
            var2 = var4.forEach;
            var1 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.message;
                    var2 = var5.hasFlag;
                    var1 = _closure1_slot6;
                    var1 = var1.EPHEMERAL;
                    var1 = var2.bind(var5)(var1);
                    if(var1) { _fun0009_ip = 47; continue _fun0009 }
 35:
                    var3 = var5.activity;
                    var2 = null;
                    var1 = var2 == var3;
 47:
                    if(var1) { _fun0009_ip = 68; continue _fun0009 }
 50:
                    var2 = var5.activity;
                    var3 = var2.party_id;
                    var2 = null;
                    var1 = var2 == var3;
 68:
                    if(var1) { _fun0009_ip = 82; continue _fun0009 }
 71:
                    var3 = var5.application;
                    var2 = null;
                    var1 = var2 == var3;
 82:
                    if(var1) { _fun0009_ip = 201; continue _fun0009 }
 85:
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
 201:
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
 86:
            var1 = undefined;
            return var1;
        }
    };
    var3['handleRichPresenceInviteEmbedViewTracking'] = var2;
    return var1;
})();
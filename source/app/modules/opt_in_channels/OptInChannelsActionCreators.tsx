// app/modules/opt_in_channels/OptInChannelsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
    var1 = function _persistOptInChannelUpdates2() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var7 = arg1;
                    var6 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 164; continue _fun0001 }
 16:
                    var2 = null;
                    if(!(var2 != var7)) { _fun0001_ip = 159; continue _fun0001 }
 25:
                    var4 = _closure1_slot4;
                    var2 = var4.isFullServerPreview;
                    var2 = var2.bind(var4)(var7);
                    if(var2) { _fun0001_ip = 159; continue _fun0001 }
 46:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 9;
                    var2 = var5[var2];
                    var5 = undefined;
                    var8 = var4.bind(var5)(var2);
                    var4 = var8.saveUserGuildSettingsBulk;
                    var2 = {};
                    var9 = {};
                    var9['channel_overrides'] = var6;
                    var2[var7] = var9;
                    var2 = var4.bind(var8)(var2);
                    SaveGenerator(address=97);
 95:
                    return var2;
 97:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 156; continue _fun0001 }
 103:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 10;
                    var3 = var8[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var8 = 'USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES';
                    var3['type'] = var8;
                    var3['guildId'] = var7;
                    var3['updates'] = var6;
                    var3 = var4.bind(var5)(var3);
                    _fun0001_ip = 159; continue _fun0001;
 156:
                    return var2;
 159:
                    var2 = undefined;
                    return var2;
 164:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var5 = function bulkOptOutChannels(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var5;
            var1 = null;
            if(!(var1 != var5)) { _fun0002_ip = 264; continue _fun0002 }
 21:
            var6 = _closure1_slot4;
            var3 = var6.isFullServerPreview;
            var3 = var3.bind(var6)(var5);
            if(var3) { _fun0002_ip = 225; continue _fun0002 }
 45:
            var8 = {};
            var _closure2_slot1 = var8;
            var3 = var4.forEach;
            var2 = function(arg1) {
                var4 = arg1;
                var6 = _closure1_slot6;
                var3 = var6.getChannelIdFlags;
                var2 = _closure2_slot0;
                var9 = var3.bind(var6)(var2, var4);
                var3 = _closure2_slot1;
                var2 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var6 = var6[var1];
                var1 = undefined;
                var8 = var7.bind(var1)(var6);
                var7 = var8.setFlag;
                var5 = _closure1_slot8;
                var6 = var5.OPT_IN_ENABLED;
                var5 = false;
                var5 = var7.bind(var8)(var9, var6, var5);
                var2['flags'] = var5;
                var3[var4] = var2;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 14;
            var2 = var11[var2];
            var10 = undefined;
            var7 = var3.bind(var10)(var2);
            var6 = var7.updateChannelOverrideSettingsBulk;
            var9 = _closure1_slot0;
            var2 = 8;
            var2 = var11[var2];
            var2 = var9.bind(var10)(var2);
            var2 = var2.NotificationLabels;
            var2 = var2.OptedOut;
            var2 = var6.bind(var7)(var5, var8, var2);
            var2 = 11;
            var2 = var11[var2];
            var7 = var3.bind(var10)(var2);
            var6 = var7.track;
            var2 = _closure1_slot7;
            var3 = var2.CHANNEL_LIST_UPDATED;
            var2 = {};
            var8 = 12;
            var8 = var11[var8];
            var9 = var9.bind(var10)(var8);
            var8 = var9.collectGuildAnalyticsMetadata;
            var13 = var8.bind(var9)(var5);
            var14 = var2;
            var8 = copyDataProperties(var14, var13);
            var9 = 'remove_many';
            var8 = 'action_type';
            var2[var8] = var9;
            var9 = arg3;
            var8 = 'location';
            var2[var8] = var9;
            var2 = var6.bind(var7)(var3, var2);
            _fun0002_ip = 264; continue _fun0002;
 225:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.updateImpersonatedChannels;
            var1 = new Array(0);
            var1 = var2.bind(var3)(var5, var1, var4);
 264:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot11 = var5;
    var4 = function dismissGuildNotice(arg1) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 15;
        var5 = var4[var2];
        var1 = undefined;
        var6 = var3.bind(var1)(var5);
        var5 = var6.updateUserGuildSettings;
        var2 = var4[var2];
        var2 = var3.bind(var1)(var2);
        var2 = var2.UserSettingsDelay;
        var4 = var2.INFREQUENT_USER_ACTION;
        var3 = arg1;
        var2 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var10 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 7;
                var4 = var1[var5];
                var8 = undefined;
                var7 = var10.bind(var8)(var4);
                var6 = var7.hasFlag;
                var4 = var3.guildOnboardingProgress;
                var9 = 16;
                var1 = var1[var9];
                var1 = var10.bind(var8)(var1);
                var1 = var1.GuildOnboardingProgress;
                var1 = var1.GUILD_NOTICE_CLEARED;
                var1 = var6.bind(var7)(var4, var1);
                if(!var1) { _fun0003_ip = 132; continue _fun0003 }
 73:
                var11 = _closure1_slot0;
                var4 = _closure1_slot2;
                var6 = var4[var5];
                var10 = var11.bind(var8)(var6);
                var7 = var10.hasFlag;
                var6 = var3.guildOnboardingProgress;
                var4 = var4[var9];
                var4 = var11.bind(var8)(var4);
                var4 = var4.GuildOnboardingProgress;
                var4 = var4.GUILD_NOTICE_SHOWN;
                var4 = var7.bind(var10)(var6, var4);
                var1 = !var4;
 132:
                var1 = !var1;
                if(!var1) { _fun0003_ip = 259; continue _fun0003 }
 138:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = var2[var5];
                var11 = var4.bind(var8)(var6);
                var10 = var11.addFlag;
                var7 = var3.guildOnboardingProgress;
                var6 = var2[var9];
                var6 = var4.bind(var8)(var6);
                var6 = var6.GuildOnboardingProgress;
                var6 = var6.GUILD_NOTICE_CLEARED;
                var6 = var10.bind(var11)(var7, var6);
                var3['guildOnboardingProgress'] = var6;
                var5 = var2[var5];
                var7 = var4.bind(var8)(var5);
                var6 = var7.setFlag;
                var5 = var3.guildOnboardingProgress;
                var2 = var2[var9];
                var2 = var4.bind(var8)(var2);
                var2 = var2.GuildOnboardingProgress;
                var4 = var2.GUILD_NOTICE_SHOWN;
                var2 = false;
                var2 = var6.bind(var7)(var5, var4, var2);
                var3['guildOnboardingProgress'] = var2;
                var1 = true;
 259:
                return var1;
            }
        };
        var2 = var5.bind(var6)(var3, var2, var4);
        return var1;
    };
    var _closure1_slot12 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var9[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var9[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var9[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var6 = var6.AnalyticEvents;
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var7 = var6.ChannelNotificationSettingsFlags;
    var _closure1_slot8 = var7;
    var6 = var6.GuildNotificationSettingsFlags;
    var _closure1_slot9 = var6;
    var6 = 13;
    var6 = var9[var6];
    var11 = var8.bind(var1)(var6);
    var10 = var11.debounce;
    var7 = function(arg1, arg2) {
        var4 = function _persistOptInChannelUpdates() {
            var1 = undefined;
            var4 = _closure1_slot10;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3 = undefined;
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var6 = 1000;
    var6 = var10.bind(var11)(var7, var6);
    var7 = 17;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/opt_in_channels/OptInChannelsActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function setOptInChannel(arg1, arg2, arg3, arg4) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var6 = arg2;
            var1 = arg3;
            var10 = arg4;
            var2 = null;
            if(!(var2 != var5)) { _fun0004_ip = 574; continue _fun0004 }
 21:
            var4 = _closure1_slot4;
            var3 = var4.isFullServerPreview;
            var3 = var3.bind(var4)(var5);
            if(var3) { _fun0004_ip = 502; continue _fun0004 }
 45:
            var4 = _closure1_slot6;
            var3 = var4.getChannelIdFlags;
            var11 = var3.bind(var4)(var5, var6);
            var8 = var11;
            if(var1) { _fun0004_ip = 114; continue _fun0004 }
 67:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 7;
            var4 = var4[var3];
            var3 = undefined;
            var9 = var7.bind(var3)(var4);
            var7 = var9.setFlag;
            var3 = _closure1_slot8;
            var4 = var3.FAVORITED;
            var3 = false;
            var8 = var7.bind(var9)(var11, var4, var3);
 114:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 8;
            var3 = var13[var9];
            var11 = undefined;
            var4 = var12.bind(var11)(var3);
            var3 = var4.getCurrentChannelSettings;
            var14 = var3.bind(var4)(var5, var6);
            var15 = {};
            var3 = 7;
            var3 = var13[var3];
            var7 = var12.bind(var11)(var3);
            var4 = var7.setFlag;
            var3 = _closure1_slot8;
            var3 = var3.OPT_IN_ENABLED;
            var3 = var4.bind(var7)(var8, var3, var1);
            var15['flags'] = var3;
            var4 = _closure1_slot1;
            var3 = 9;
            var3 = var13[var3];
            var8 = var4.bind(var11)(var3);
            var7 = var8.saveUserGuildSettingsBulk;
            var3 = {};
            var16 = {};
            var17 = {};
            var17[var6] = var15;
            var16['channel_overrides'] = var17;
            var3[var5] = var16;
            var3 = var7.bind(var8)(var3);
            var3 = 10;
            var3 = var13[var3];
            var8 = var4.bind(var11)(var3);
            var7 = var8.dispatch;
            var3 = {};
            var16 = 'USER_GUILD_SETTINGS_CHANNEL_UPDATE';
            var3['type'] = var16;
            var3['guildId'] = var5;
            var3['channelId'] = var6;
            var3['settings'] = var15;
            var3 = var7.bind(var8)(var3);
            var3 = var13[var9];
            var8 = var12.bind(var11)(var3);
            var7 = var8.trackChannelNotificationSettingsUpdate;
            var3 = {};
            var3['guildId'] = var5;
            var3['channelId'] = var6;
            var3['change'] = var15;
            var3['previous'] = var14;
            var9 = var13[var9];
            var9 = var12.bind(var11)(var9);
            var14 = var9.NotificationLabel;
            var9 = var14.optedIn;
            var9 = var9.bind(var14)(var1);
            var3['label'] = var9;
            var3['location'] = var10;
            var3 = var7.bind(var8)(var3);
            var3 = _closure1_slot12;
            var3 = var3.bind(var11)(var5);
            var3 = 11;
            var3 = var13[var3];
            var8 = var4.bind(var11)(var3);
            var7 = var8.track;
            var3 = _closure1_slot7;
            var4 = var3.CHANNEL_LIST_UPDATED;
            var3 = {};
            var9 = 12;
            var14 = var13[var9];
            var15 = var12.bind(var11)(var14);
            var14 = var15.collectGuildAnalyticsMetadata;
            var20 = var14.bind(var15)(var5);
            var21 = var3;
            var14 = copyDataProperties(var21, var20);
            var9 = var13[var9];
            var12 = var12.bind(var11)(var9);
            var11 = var12.collectChannelAnalyticsMetadata;
            var13 = _closure1_slot5;
            var9 = var13.getChannel;
            var9 = var9.bind(var13)(var6);
            var20 = var11.bind(var12)(var9);
            var21 = var3;
            var9 = copyDataProperties(var21, var20);
            var11 = 'remove';
            if(!var1) { _fun0004_ip = 476; continue _fun0004 }
 472:
            var11 = 'add';
 476:
            var9 = 'action_type';
            var3[var9] = var11;
            var9 = 'location';
            var3[var9] = var10;
            var3 = var7.bind(var8)(var4, var3);
            _fun0004_ip = 574; continue _fun0004;
 502:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.updateImpersonatedChannels;
            if(var1) { _fun0004_ip = 539; continue _fun0004 }
 533:
            var2 = new Array(0);
            _fun0004_ip = 550; continue _fun0004;
 539:
            var7 = new Array(1);
            var7[0] = var6;
            var2 = var7;
 550:
            if(var1) { _fun0004_ip = 563; continue _fun0004 }
 553:
            var1 = new Array(1);
            var1[0] = var6;
            _fun0004_ip = 567; continue _fun0004;
 563:
            var1 = new Array(0);
 567:
            var1 = var3.bind(var4)(var5, var2, var1);
 574:
            var1 = undefined;
            return var1;
        }
    };
    var3['setOptInChannel'] = var7;
    var7 = function updateOptInChannelsImmediate(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var9 = arg2;
            var2 = arg3;
            var10 = arg4;
            var1 = null;
            if(!(var1 != var4)) { _fun0005_ip = 591; continue _fun0005 }
 21:
            var5 = _closure1_slot4;
            var3 = var5.isFullServerPreview;
            var3 = var3.bind(var5)(var4);
            if(var3) { _fun0005_ip = 595; continue _fun0005 }
 45:
            var5 = _closure1_slot6;
            var3 = var5.getChannelIdFlags;
            var8 = var3.bind(var5)(var4, var9);
            var11 = var8;
            if(var2) { _fun0005_ip = 114; continue _fun0005 }
 67:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 7;
            var5 = var5[var3];
            var3 = undefined;
            var7 = var6.bind(var3)(var5);
            var6 = var7.setFlag;
            var3 = _closure1_slot8;
            var5 = var3.FAVORITED;
            var3 = false;
            var11 = var6.bind(var7)(var8, var5, var3);
 114:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var8 = 8;
            var3 = var5[var8];
            var12 = undefined;
            var7 = var6.bind(var12)(var3);
            var3 = var7.getCurrentChannelSettings;
            var14 = var3.bind(var7)(var4, var9);
            var15 = {};
            var3 = 7;
            var5 = var5[var3];
            var7 = var6.bind(var12)(var5);
            var6 = var7.setFlag;
            var5 = _closure1_slot8;
            var5 = var5.OPT_IN_ENABLED;
            var5 = var6.bind(var7)(var11, var5, var2);
            var15['flags'] = var5;
            var6 = _closure1_slot6;
            var5 = var6.isOptInEnabled;
            var5 = var5.bind(var6)(var4);
            if(var5) { _fun0005_ip = 316; continue _fun0005 }
 207:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = var6[var3];
            var13 = var5.bind(var12)(var3);
            var11 = var13.setFlag;
            var5 = _closure1_slot6;
            var3 = var5.getGuildFlags;
            var7 = var3.bind(var5)(var4);
            var3 = _closure1_slot9;
            var5 = var3.OPT_IN_CHANNELS_ON;
            var3 = true;
            var11 = var11.bind(var13)(var7, var5, var3);
            var5 = _closure1_slot1;
            var3 = 9;
            var3 = var6[var3];
            var6 = var5.bind(var12)(var3);
            var5 = var6.saveUserGuildSettingsBulk;
            var3 = {};
            var7 = {};
            var13 = {};
            var13[var9] = var15;
            var7['channel_overrides'] = var13;
            var7['flags'] = var11;
            var3[var4] = var7;
            var3 = var5.bind(var6)(var3);
 316:
            var5 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 10;
            var3 = var13[var3];
            var7 = var5.bind(var12)(var3);
            var6 = var7.dispatch;
            var3 = {};
            var11 = 'USER_GUILD_SETTINGS_CHANNEL_UPDATE';
            var3['type'] = var11;
            var3['guildId'] = var4;
            var3['channelId'] = var9;
            var3['settings'] = var15;
            var3 = var6.bind(var7)(var3);
            var11 = _closure1_slot0;
            var3 = var13[var8];
            var7 = var11.bind(var12)(var3);
            var6 = var7.trackChannelNotificationSettingsUpdate;
            var3 = {};
            var3['guildId'] = var4;
            var3['channelId'] = var9;
            var3['change'] = var15;
            var3['previous'] = var14;
            var8 = var13[var8];
            var8 = var11.bind(var12)(var8);
            var14 = var8.NotificationLabel;
            var8 = var14.optedIn;
            var8 = var8.bind(var14)(var2);
            var3['label'] = var8;
            var3['location'] = var10;
            var3 = var6.bind(var7)(var3);
            var3 = _closure1_slot12;
            var3 = var3.bind(var12)(var4);
            var3 = 11;
            var3 = var13[var3];
            var7 = var5.bind(var12)(var3);
            var6 = var7.track;
            var3 = _closure1_slot7;
            var5 = var3.CHANNEL_LIST_UPDATED;
            var3 = {};
            var8 = 12;
            var14 = var13[var8];
            var15 = var11.bind(var12)(var14);
            var14 = var15.collectGuildAnalyticsMetadata;
            var18 = var14.bind(var15)(var4);
            var19 = var3;
            var14 = copyDataProperties(var19, var18);
            var8 = var13[var8];
            var12 = var11.bind(var12)(var8);
            var11 = var12.collectChannelAnalyticsMetadata;
            var13 = _closure1_slot5;
            var8 = var13.getChannel;
            var8 = var8.bind(var13)(var9);
            var18 = var11.bind(var12)(var8);
            var19 = var3;
            var8 = copyDataProperties(var19, var18);
            var11 = 'remove';
            if(!var2) { _fun0005_ip = 567; continue _fun0005 }
 563:
            var11 = 'add';
 567:
            var8 = 'action_type';
            var3[var8] = var11;
            var8 = 'location';
            var3[var8] = var10;
            var3 = var6.bind(var7)(var5, var3);
 591:
            var3 = undefined;
            return var3;
 595:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 6;
            var6 = var3[var5];
            var3 = undefined;
            var8 = var7.bind(var3)(var6);
            var7 = var8.updateImpersonatedChannels;
            if(var2) { _fun0005_ip = 632; continue _fun0005 }
 626:
            var6 = new Array(0);
            _fun0005_ip = 643; continue _fun0005;
 632:
            var10 = new Array(1);
            var10[0] = var9;
            var6 = var10;
 643:
            if(var2) { _fun0005_ip = 656; continue _fun0005 }
 646:
            var2 = new Array(1);
            var2[0] = var9;
            _fun0005_ip = 660; continue _fun0005;
 656:
            var2 = new Array(0);
 660:
            var2 = var7.bind(var8)(var4, var6, var2);
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var3 = var2.bind(var3)(var1);
            var2 = var3.updateImpersonatedData;
            var1 = {};
            var5 = true;
            var1['optInEnabled'] = var5;
            var1 = var2.bind(var3)(var4, var1);
            var1 = undefined;
            return var1;
        }
    };
    var3['updateOptInChannelsImmediate'] = var7;
    var3['updateOptInChannelsBatched'] = var6;
    var6 = function bulkOptInChannels(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var5 = arg1;
            var9 = arg2;
            var1 = arguments[2];
            var11 = arguments[3];
            var _closure2_slot0 = var5;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0006_ip = 26; continue _fun0006 }
 24:
            var1 = false;
 26:
            var _closure2_slot1 = var4;
            var2 = null;
            if(!(var2 != var5)) { _fun0006_ip = 460; continue _fun0006 }
 39:
            var7 = _closure1_slot4;
            var3 = var7.isFullServerPreview;
            var3 = var3.bind(var7)(var5);
            if(var3) { _fun0006_ip = 462; continue _fun0006 }
 63:
            var3 = {};
            _closure2_slot1 = var3;
            var7 = var9.forEach;
            var6 = function(arg1) {
                var4 = arg1;
                var6 = _closure1_slot6;
                var3 = var6.getChannelIdFlags;
                var2 = _closure2_slot0;
                var9 = var3.bind(var6)(var2, var4);
                var3 = _closure2_slot1;
                var2 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var6 = var6[var1];
                var1 = undefined;
                var8 = var7.bind(var1)(var6);
                var7 = var8.setFlag;
                var5 = _closure1_slot8;
                var6 = var5.OPT_IN_ENABLED;
                var5 = true;
                var5 = var7.bind(var8)(var9, var6, var5);
                var2['flags'] = var5;
                var3[var4] = var2;
                return var1;
            };
            var6 = var7.bind(var9)(var6);
            if(var1) { _fun0006_ip = 247; continue _fun0006 }
 92:
            var7 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = 14;
            var6 = var14[var6];
            var10 = var7.bind(var4)(var6);
            var8 = var10.updateChannelOverrideSettingsBulk;
            var13 = _closure1_slot0;
            var6 = 8;
            var6 = var14[var6];
            var6 = var13.bind(var4)(var6);
            var6 = var6.NotificationLabels;
            var6 = var6.OptedIn;
            var6 = var8.bind(var10)(var5, var3, var6);
            var6 = 11;
            var6 = var14[var6];
            var10 = var7.bind(var4)(var6);
            var8 = var10.track;
            var6 = _closure1_slot7;
            var7 = var6.CHANNEL_LIST_UPDATED;
            var6 = {};
            var12 = 12;
            var12 = var14[var12];
            var13 = var13.bind(var4)(var12);
            var12 = var13.collectGuildAnalyticsMetadata;
            var16 = var12.bind(var13)(var5);
            var17 = var6;
            var12 = copyDataProperties(var17, var16);
            var13 = 'add_many';
            var12 = 'action_type';
            var6[var12] = var13;
            var12 = 'location';
            var6[var12] = var11;
            var6 = var8.bind(var10)(var7, var6);
            _fun0006_ip = 460; continue _fun0006;
 247:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 7;
            var6 = var13[var6];
            var14 = var12.bind(var4)(var6);
            var10 = var14.setFlag;
            var7 = _closure1_slot6;
            var6 = var7.getGuildFlags;
            var8 = var6.bind(var7)(var5);
            var6 = _closure1_slot9;
            var7 = var6.OPT_IN_CHANNELS_ON;
            var6 = true;
            var14 = var10.bind(var14)(var8, var7, var6);
            var6 = _closure1_slot1;
            var7 = 14;
            var7 = var13[var7];
            var10 = var6.bind(var4)(var7);
            var8 = var10.updateGuildAndChannelNotificationSettings;
            var7 = {};
            var7['flags'] = var14;
            var7['channel_overrides'] = var3;
            var3 = 8;
            var3 = var13[var3];
            var3 = var12.bind(var4)(var3);
            var3 = var3.NotificationLabels;
            var3 = var3.OptedIn;
            var3 = var8.bind(var10)(var5, var7, var3);
            var3 = 11;
            var3 = var13[var3];
            var8 = var6.bind(var4)(var3);
            var7 = var8.track;
            var3 = _closure1_slot7;
            var6 = var3.CHANNEL_LIST_UPDATED;
            var3 = {};
            var10 = 12;
            var10 = var13[var10];
            var12 = var12.bind(var4)(var10);
            var10 = var12.collectGuildAnalyticsMetadata;
            var16 = var10.bind(var12)(var5);
            var17 = var3;
            var10 = copyDataProperties(var17, var16);
            var12 = 'add_many_and_enable_guild';
            var10 = 'action_type';
            var3[var10] = var12;
            var10 = 'location';
            var3[var10] = var11;
            var3 = var7.bind(var8)(var6, var3);
 460:
            return var4;
 462:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 6;
            var3 = var3[var6];
            var8 = var7.bind(var4)(var3);
            var7 = var8.updateImpersonatedChannels;
            var3 = new Array(0);
            var3 = var7.bind(var8)(var5, var9, var3);
            if(!var1) { _fun0006_ip = 540; continue _fun0006 }
 502:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var4 = var3.bind(var4)(var2);
            var3 = var4.updateImpersonatedData;
            var2 = {};
            var6 = true;
            var2['optInEnabled'] = var6;
            var1 = var3.bind(var4)(var5, var2);
 540:
            var1 = undefined;
            return var1;
        }
    };
    var3['bulkOptInChannels'] = var6;
    var3['bulkOptOutChannels'] = var5;
    var5 = function setGuildOptIn(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var5 = arg2;
            var3 = _closure1_slot4;
            var2 = var3.isFullServerPreview;
            var2 = var2.bind(var3)(var4);
            if(var2) { _fun0007_ip = 257; continue _fun0007 }
 30:
            var3 = _closure1_slot6;
            var2 = var3.getGuildFlags;
            var14 = var2.bind(var3)(var4);
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 14;
            var2 = var11[var2];
            var10 = undefined;
            var8 = var3.bind(var10)(var2);
            var7 = var8.updateGuildNotificationSettings;
            var6 = {};
            var9 = _closure1_slot0;
            var2 = 7;
            var2 = var11[var2];
            var13 = var9.bind(var10)(var2);
            var12 = var13.setFlag;
            var2 = _closure1_slot9;
            var2 = var2.OPT_IN_CHANNELS_ON;
            var2 = var12.bind(var13)(var14, var2, var5);
            var6['flags'] = var2;
            var2 = 8;
            var2 = var11[var2];
            var2 = var9.bind(var10)(var2);
            var12 = var2.NotificationLabel;
            var2 = var12.optedIn;
            var2 = var2.bind(var12)(var5);
            var2 = var7.bind(var8)(var4, var6, var2);
            var2 = 11;
            var2 = var11[var2];
            var7 = var3.bind(var10)(var2);
            var6 = var7.track;
            var2 = _closure1_slot7;
            var3 = var2.CHANNEL_LIST_UPDATED;
            var2 = {};
            var8 = 12;
            var8 = var11[var8];
            var9 = var9.bind(var10)(var8);
            var8 = var9.collectGuildAnalyticsMetadata;
            var16 = var8.bind(var9)(var4);
            var17 = var2;
            var8 = copyDataProperties(var17, var16);
            var9 = 'guild_disabled';
            if(!var5) { _fun0007_ip = 228; continue _fun0007 }
 222:
            var9 = 'guild_enabled';
 228:
            var8 = 'action_type';
            var2[var8] = var9;
            var9 = arg3;
            var8 = 'location';
            var2[var8] = var9;
            var2 = var6.bind(var7)(var3, var2);
            _fun0007_ip = 298; continue _fun0007;
 257:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.updateImpersonatedData;
            var1 = {};
            var1['optInEnabled'] = var5;
            var1 = var2.bind(var3)(var4, var1);
 298:
            var1 = undefined;
            return var1;
        }
    };
    var3['setGuildOptIn'] = var5;
    var5 = function setIsFavorite(arg1, arg2, arg3, arg4) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var8 = arg1;
            var12 = arg2;
            var5 = arg3;
            var1 = null;
            if(!(var1 != var8)) { _fun0008_ip = 371; continue _fun0008 }
 18:
            var3 = _closure1_slot4;
            var2 = var3.isFullServerPreview;
            var2 = var2.bind(var3)(var8);
            if(var2) { _fun0008_ip = 371; continue _fun0008 }
 42:
            var3 = _closure1_slot6;
            var2 = var3.getChannelIdFlags;
            var10 = var2.bind(var3)(var8, var12);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var9 = undefined;
            var6 = var4.bind(var9)(var3);
            var4 = var6.hasFlag;
            var3 = _closure1_slot8;
            var3 = var3.OPT_IN_ENABLED;
            var3 = var4.bind(var6)(var10, var3);
            var3 = !var3;
            if(!var3) { _fun0008_ip = 111; continue _fun0008 }
 108:
            var3 = var5;
 111:
            var15 = var10;
            if(!var3) { _fun0008_ip = 159; continue _fun0008 }
 117:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var2];
            var7 = var4.bind(var9)(var3);
            var6 = var7.setFlag;
            var3 = _closure1_slot8;
            var4 = var3.OPT_IN_ENABLED;
            var3 = true;
            var15 = var6.bind(var7)(var10, var4, var3);
 159:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var4 = 14;
            var4 = var10[var4];
            var11 = var3.bind(var9)(var4);
            var6 = var11.updateChannelOverrideSettings;
            var4 = {};
            var7 = _closure1_slot0;
            var2 = var10[var2];
            var14 = var7.bind(var9)(var2);
            var13 = var14.setFlag;
            var2 = _closure1_slot8;
            var2 = var2.FAVORITED;
            var2 = var13.bind(var14)(var15, var2, var5);
            var4['flags'] = var2;
            var2 = 8;
            var2 = var10[var2];
            var2 = var7.bind(var9)(var2);
            var13 = var2.NotificationLabel;
            var2 = var13.favorited;
            var16 = var2.bind(var13)(var5);
            var20 = var11;
            var19 = var8;
            var18 = var12;
            var17 = var4;
            var2 = var20[var6](var19, var18, var17, var16, var15);
            var2 = 11;
            var2 = var10[var2];
            var4 = var3.bind(var9)(var2);
            var3 = var4.track;
            var1 = _closure1_slot7;
            var2 = var1.CHANNEL_LIST_UPDATED;
            var1 = {};
            var6 = 12;
            var6 = var10[var6];
            var7 = var7.bind(var9)(var6);
            var6 = var7.collectGuildAnalyticsMetadata;
            var18 = var6.bind(var7)(var8);
            var19 = var1;
            var6 = copyDataProperties(var19, var18);
            var6 = 'unfavorited';
            if(!var5) { _fun0008_ip = 344; continue _fun0008 }
 340:
            var6 = 'favorited';
 344:
            var5 = 'action_type';
            var1[var5] = var6;
            var6 = arg4;
            var5 = 'location';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
 371:
            var1 = undefined;
            return var1;
        }
    };
    var3['setIsFavorite'] = var5;
    var5 = function setMessagesFavorite(arg1, arg2) {
        var7 = arg1;
        var9 = arg2;
        var3 = _closure1_slot6;
        var1 = var3.getChannelIdFlags;
        var6 = null;
        var13 = var1.bind(var3)(var6, var7);
        var4 = _closure1_slot1;
        var10 = _closure1_slot2;
        var1 = 14;
        var3 = var10[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.updateChannelOverrideSettings;
        var3 = {};
        var8 = _closure1_slot0;
        var11 = 7;
        var11 = var10[var11];
        var12 = var8.bind(var1)(var11);
        var11 = var12.setFlag;
        var2 = _closure1_slot8;
        var2 = var2.FAVORITED;
        var2 = var11.bind(var12)(var13, var2, var9);
        var3['flags'] = var2;
        var2 = 8;
        var2 = var10[var2];
        var2 = var8.bind(var1)(var2);
        var8 = var2.NotificationLabel;
        var2 = var8.favorited;
        var14 = var2.bind(var8)(var9);
        var18 = var5;
        var17 = null;
        var16 = var7;
        var15 = var3;
        var2 = var18[var4](var17, var16, var15, var14, var13);
        return var1;
    };
    var3['setMessagesFavorite'] = var5;
    var5 = function setAddToMessages(arg1, arg2) {
        var7 = arg1;
        var9 = arg2;
        var3 = _closure1_slot6;
        var1 = var3.getChannelIdFlags;
        var6 = null;
        var13 = var1.bind(var3)(var6, var7);
        var4 = _closure1_slot1;
        var10 = _closure1_slot2;
        var1 = 14;
        var3 = var10[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.updateChannelOverrideSettings;
        var3 = {};
        var8 = _closure1_slot0;
        var11 = 7;
        var11 = var10[var11];
        var12 = var8.bind(var1)(var11);
        var11 = var12.setFlag;
        var2 = _closure1_slot8;
        var2 = var2.OPT_IN_ENABLED;
        var2 = var11.bind(var12)(var13, var2, var9);
        var3['flags'] = var2;
        var2 = 8;
        var2 = var10[var2];
        var2 = var8.bind(var1)(var2);
        var8 = var2.NotificationLabel;
        var2 = var8.optedIn;
        var14 = var2.bind(var8)(var9);
        var18 = var5;
        var17 = null;
        var16 = var7;
        var15 = var3;
        var2 = var18[var4](var17, var16, var15, var14, var13);
        return var1;
    };
    var3['setAddToMessages'] = var5;
    var5 = function enableGuildNotice(arg1) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 15;
        var5 = var4[var2];
        var1 = undefined;
        var6 = var3.bind(var1)(var5);
        var5 = var6.updateUserGuildSettings;
        var2 = var4[var2];
        var2 = var3.bind(var1)(var2);
        var2 = var2.UserSettingsDelay;
        var4 = var2.INFREQUENT_USER_ACTION;
        var3 = arg1;
        var2 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = arg1;
                var10 = _closure1_slot0;
                var1 = _closure1_slot2;
                var4 = 7;
                var5 = var1[var4];
                var8 = undefined;
                var7 = var10.bind(var8)(var5);
                var6 = var7.hasFlag;
                var5 = var3.guildOnboardingProgress;
                var9 = 16;
                var1 = var1[var9];
                var1 = var10.bind(var8)(var1);
                var1 = var1.GuildOnboardingProgress;
                var1 = var1.GUILD_NOTICE_SHOWN;
                var1 = var6.bind(var7)(var5, var1);
                var1 = !var1;
                if(!var1) { _fun0009_ip = 140; continue _fun0009 }
 76:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = var2[var4];
                var6 = var7.bind(var8)(var4);
                var5 = var6.addFlag;
                var4 = var3.guildOnboardingProgress;
                var2 = var2[var9];
                var2 = var7.bind(var8)(var2);
                var2 = var2.GuildOnboardingProgress;
                var2 = var2.GUILD_NOTICE_SHOWN;
                var2 = var5.bind(var6)(var4, var2);
                var3['guildOnboardingProgress'] = var2;
                var1 = true;
 140:
                return var1;
            }
        };
        var2 = var5.bind(var6)(var3, var2, var4);
        return var1;
    };
    var3['enableGuildNotice'] = var5;
    var3['dismissGuildNotice'] = var4;
    var4 = function clearGuildNotice(arg1) {
        var6 = arg1;
        var4 = _closure1_slot11;
        var3 = _closure1_slot6;
        var1 = var3.getOptedInChannels;
        var9 = var1.bind(var3)(var6);
        var3 = new Array(0);
        var8 = 0;
        var10 = var3;
        var1 = arraySpread(var10, var9, var8);
        var1 = undefined;
        var3 = var4.bind(var1)(var6, var3);
        var3 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 15;
        var4 = var7[var2];
        var5 = var3.bind(var1)(var4);
        var4 = var5.updateUserGuildSettings;
        var2 = var7[var2];
        var2 = var3.bind(var1)(var2);
        var2 = var2.UserSettingsDelay;
        var3 = var2.INFREQUENT_USER_ACTION;
        var2 = function(arg1) {
            var2 = arg1;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 7;
            var1 = var9[var3];
            var7 = undefined;
            var11 = var8.bind(var7)(var1);
            var10 = var11.setFlag;
            var5 = var2.guildOnboardingProgress;
            var1 = 16;
            var4 = var9[var1];
            var4 = var8.bind(var7)(var4);
            var4 = var4.GuildOnboardingProgress;
            var4 = var4.GUILD_NOTICE_SHOWN;
            var6 = false;
            var4 = var10.bind(var11)(var5, var4, var6);
            var2['guildOnboardingProgress'] = var4;
            var3 = var9[var3];
            var5 = var8.bind(var7)(var3);
            var4 = var5.setFlag;
            var3 = var2.guildOnboardingProgress;
            var1 = var9[var1];
            var1 = var8.bind(var7)(var1);
            var1 = var1.GuildOnboardingProgress;
            var1 = var1.GUILD_NOTICE_CLEARED;
            var1 = var4.bind(var5)(var3, var1, var6);
            var2['guildOnboardingProgress'] = var1;
            var1 = true;
            return var1;
        };
        var2 = var4.bind(var5)(var6, var2, var3);
        return var1;
    };
    var3['clearGuildNotice'] = var4;
    var4 = function dimissFavoriteSuggestion(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'DISMISS_FAVORITE_SUGGESTION';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = arg2;
        var2['channelId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['dimissFavoriteSuggestion'] = var4;
    var2 = function setRecentlyActiveCollapsed(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SET_RECENTLY_ACTIVE_COLLAPSED';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = arg2;
        var2['collapsed'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setRecentlyActiveCollapsed'] = var2;
    return var1;
})();
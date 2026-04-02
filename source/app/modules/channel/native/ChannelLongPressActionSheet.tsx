// app/modules/channel/native/ChannelLongPressActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function handleVoiceOrStageChannelConnectPress() {
        var1 = undefined;
        var4 = _closure1_slot35;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot34 = var1;
    var1 = function _handleVoiceOrStageChannelConnectPress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = var5.isGuildStageVoice;
                    var4 = var2.bind(var5)();
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 21;
                    var6 = var2[var3];
                    var3 = undefined;
                    var6 = var7.bind(var3)(var6);
                    if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = 22;
                    var7 = var2[var4];
                    var4 = var2.paths;
                    var4 = var6.bind(var3)(var7, var4);
                    SaveGenerator(address=73);
case 6:
                    return var4;
case 7:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var8 = var4.openGuildVoiceModal;
                    var7 = 'Channel List';
                    var7 = var8.bind(var3)(var5, var7);
                    _fun0001_ip = 10; continue _fun0001;
case 8:
                    return var4;
case 4:
                    var4 = 20;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var2 = var6.bind(var3)(var4, var2);
                    SaveGenerator(address=124);
case 11:
                    return var2;
case 12:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var4 = var2.connectAndOpen;
                    var4 = var4.bind(var3)(var5);
case 10:
                    return var3;
case 13:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot35 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot35 = var1;
    var1 = function ChannelLongPressActionSheetConnected(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var17 = var1.channel;
            var _closure2_slot0 = var17;
            var2 = var1.onClose;
            var _closure2_slot1 = var2;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 74;
            var3 = var11[var1];
            var5 = var6.bind(var4)(var3);
            var3 = 75;
            var3 = var11[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.CHANNEL_LONG_PRESS_MENU;
            var3 = var5.bind(var4)(var3);
            var5 = var3.analyticsLocations;
            var3 = var17.getGuildId;
            var7 = var3.bind(var17)();
            var _closure2_slot2 = var7;
            var10 = _closure1_slot0;
            var3 = 76;
            var3 = var11[var3];
            var6 = var10.bind(var4)(var3);
            var3 = var6.useIsFavoritesGuildSelected;
            var3 = var3.bind(var6)();
            var33 = 77;
            var6 = var11[var33];
            var14 = var10.bind(var4)(var6);
            var13 = var14.useStateFromStores;
            var6 = _closure1_slot17;
            var12 = new Array(1);
            var12[0] = var6;
            var6 = function() {
                var3 = _closure1_slot17;
                var2 = var3.getGuild;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var28 = var13.bind(var14)(var12, var6);
            var6 = var11[var33];
            var14 = var10.bind(var4)(var6);
            var13 = var14.useStateFromStoresObject;
            var6 = _closure1_slot18;
            var12 = new Array(1);
            var12[0] = var6;
            var6 = function() {
                var1 = {};
                var6 = _closure1_slot18;
                var4 = var6.can;
                var3 = _closure1_slot30;
                var3 = var3.MANAGE_CHANNELS;
                var5 = _closure2_slot0;
                var3 = var4.bind(var6)(var3, var5);
                var1['canManageChannel'] = var3;
                var6 = _closure1_slot18;
                var4 = var6.can;
                var3 = _closure1_slot30;
                var3 = var3.CREATE_INSTANT_INVITE;
                var3 = var4.bind(var6)(var3, var5);
                var1['canCreateInstantInvite'] = var3;
                var4 = _closure1_slot18;
                var3 = var4.can;
                var2 = _closure1_slot30;
                var2 = var2.CONNECT;
                var2 = var3.bind(var4)(var2, var5);
                var1['canConnect'] = var2;
                return var1;
            };
            var6 = var13.bind(var14)(var12, var6);
            var32 = var6.canManageChannel;
            var31 = var6.canCreateInstantInvite;
            var30 = var6.canConnect;
            var6 = 78;
            var6 = var11[var6];
            var11 = var10.bind(var4)(var6);
            var10 = var11.useOptInEnabledForGuild;
            var6 = null;
            if(!(var6 == var7)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var7 = _closure1_slot29;
case 15:
            var22 = var10.bind(var11)(var7);
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = var11[var33];
            var14 = var10.bind(var4)(var7);
            var13 = var14.useStateFromStoresObject;
            var7 = _closure1_slot21;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var8 = _closure1_slot21;
                    var7 = var8.isChannelOptedIn;
                    var6 = _closure2_slot2;
                    var4 = _closure2_slot0;
                    var5 = var4.id;
                    var5 = var7.bind(var8)(var6, var5);
                    var1['isOptedIn'] = var5;
                    var4 = var4.parent_id;
                    var7 = null;
                    var4 = var7 != var4;
                    if(!var4) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var9 = _closure1_slot21;
                    var8 = var9.isChannelOptedIn;
                    var6 = _closure2_slot2;
                    var5 = _closure2_slot0;
                    var5 = var5.parent_id;
                    var4 = var8.bind(var9)(var6, var5);
case 17:
                    var1['isParentOptedIn'] = var4;
                    var5 = _closure1_slot21;
                    var4 = var5.isFavorite;
                    var6 = _closure2_slot2;
                    if(!(var7 == var6)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var3 = _closure1_slot31;
                    _fun0003_ip = 21; continue _fun0003;
case 19:
                    var3 = _closure2_slot2;
case 21:
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['isPinned'] = var2;
                    return var1;
                }
            };
            var7 = var13.bind(var14)(var12, var7);
            var21 = var7.isOptedIn;
            var20 = var7.isParentOptedIn;
            var19 = var7.isPinned;
            var7 = var11[var33];
            var14 = var10.bind(var4)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot5;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 22; continue _fun0004 }
case 3: // try_start_0
                    var5 = _closure1_slot5;
                    var4 = var5.getGuildWithoutChangingGuildActionRows;
                    var3 = _closure2_slot2;
                    var3 = var4.bind(var5)(var3);
                    var4 = var3.guildChannels;
                    var3 = var4.getCategoryFromSection;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 79;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var2 = var2.SECTION_INDEX_FAVORITES;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.getShownChannelIds;
                    var3 = var2.bind(var3)();
                    var2 = var3.includes;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
case 23: // try_end0
                    return var1;
case 24: // catch_target0
                    CatchBlockStart(arg_register=0);
                    var1 = false;
                    return var1;
case 22:
                    var1 = false;
                    return var1;
                }
            };
            var18 = var13.bind(var14)(var12, var7);
            var7 = var11[var33];
            var14 = var10.bind(var4)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot21;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = function() {
                var4 = _closure1_slot21;
                var3 = var4.isChannelMuted;
                var2 = _closure2_slot2;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var29 = var13.bind(var14)(var12, var7);
            var7 = var11[var33];
            var14 = var10.bind(var4)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot9;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var5 = _closure1_slot9;
                    var4 = var5.hasThreadsForChannel;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 25:
                    return var1;
                }
            };
            var27 = var13.bind(var14)(var12, var7);
            var7 = var11[var33];
            var14 = var10.bind(var4)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot14;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = function() {
                var3 = _closure1_slot14;
                var2 = var3.isCollapsed;
                var1 = _closure2_slot0;
                var1 = var1.parent_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var25 = var13.bind(var14)(var12, var7);
            var7 = var11[var33];
            var14 = var10.bind(var4)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot16;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = function() {
                var3 = _closure1_slot16;
                var2 = var3.isCollapsed;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var24 = var13.bind(var14)(var12, var7);
            var7 = var11[var33];
            var14 = var10.bind(var4)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot8;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = function() {
                var3 = _closure1_slot8;
                var2 = var3.isLive;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var23 = var13.bind(var14)(var12, var7);
            var13 = _closure1_slot1;
            var7 = 28;
            var7 = var11[var7];
            var7 = var13.bind(var4)(var7);
            var12 = true;
            var14 = var7.bind(var4)(var17, var12);
            var7 = 80;
            var7 = var11[var7];
            var7 = var13.bind(var4)(var7);
            var26 = var7.bind(var4)(var17);
            var7 = 81;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var10 = var7.DeveloperMode;
            var7 = var10.useSetting;
            var11 = var7.bind(var10)();
            _closure2_slot3 = var11;
            if(!(var6 == var28)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var13 = _closure1_slot33;
            var10 = _closure1_slot1;
            var34 = _closure1_slot2;
            var15 = 83;
            var7 = var34[var15];
            var10 = var10.bind(var4)(var7);
            var7 = {};
            var16 = _closure1_slot0;
            var15 = var34[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.AvatarSizes;
            var15 = var15.LARGE;
            var7['size'] = var15;
            var7['channel'] = var17;
            var15 = var13.bind(var4)(var10, var7);
            _fun0002_ip = 29; continue _fun0002;
case 27:
            var13 = _closure1_slot33;
            var10 = _closure1_slot1;
            var34 = _closure1_slot2;
            var16 = 82;
            var7 = var34[var16];
            var10 = var10.bind(var4)(var7);
            var7 = {};
            var7['guild'] = var28;
            var28 = _closure1_slot0;
            var16 = var34[var16];
            var16 = var28.bind(var4)(var16);
            var16 = var16.GuildIconSizes;
            var16 = var16.LARGE;
            var7['size'] = var16;
            var15 = var13.bind(var4)(var10, var7);
case 29:
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var33];
            var16 = var10.bind(var4)(var7);
            var13 = var16.useStateFromStores;
            var7 = _closure1_slot22;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                var2 = _closure1_slot22;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var13.bind(var16)(var10, var7);
            var28 = var6 != var7;
            if(!var28) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var10 = var17.isOwner;
            var7 = var7.id;
            var28 = var10.bind(var17)(var7);
case 30:
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = var13[var33];
            var35 = var10.bind(var4)(var7);
            var34 = var35.useStateFromStores;
            var7 = _closure1_slot21;
            var16 = new Array(1);
            var16[0] = var7;
            var7 = function() {
                var3 = _closure1_slot21;
                var2 = var3.isMessagesFavorite;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var34.bind(var35)(var16, var7);
            var7 = 84;
            var7 = var13[var7];
            var10 = var10.bind(var4)(var7);
            var7 = var10.useInappropriateConversationsTiers;
            var7 = var7.bind(var10)(var17);
            var13 = var6 == var7;
            var10 = undefined;
            if(var13) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var10 = var7.isTier1;
case 32:
            var13 = var6 != var10;
            if(!var13) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var10 = var6 != var7;
            if(!var10) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var10 = var7.isTier1;
case 36:
            var13 = !var10;
case 34:
            var34 = var6 == var7;
            var10 = undefined;
            if(var34) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var10 = var7.isTier2;
case 38:
            var10 = var6 != var10;
            if(!var10) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var6 = var6 != var7;
            if(!var6) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var6 = var7.isTier2;
case 42:
            var10 = !var6;
case 40:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var33];
            var34 = var7.bind(var4)(var6);
            var33 = var34.useStateFromStores;
            var6 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot6;
                var2 = var3.isChannelNudged;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var33.bind(var34)(var7, var6);
            var6 = {};
            var6['channel'] = var17;
            var6['canManageChannel'] = var32;
            var6['canCreateInstantInvite'] = var31;
            var6['canConnect'] = var30;
            var6['developerMode'] = var11;
            var6['isMuted'] = var29;
            var6['isOwner'] = var28;
            var6['hasThreads'] = var27;
            var6['isNsfwGated'] = var26;
            var6['isInCollapsedCategory'] = var25;
            var6['isCollapsedVoiceChannel'] = var24;
            var6['isLiveStageChannel'] = var23;
            var6['isOptInEnabled'] = var22;
            var6['isOptedIn'] = var21;
            var6['isParentOptedIn'] = var20;
            var6['isPinned'] = var19;
            var6['isInFavoritesSection'] = var18;
            var6['isMessagesFavorited'] = var16;
            var6['canMarkAsTier1InappropriateConversation'] = var13;
            var6['canMarkAsTier2InappropriateConversation'] = var10;
            var6['isReplyNudged'] = var7;
            var6['analyticsLocations'] = var5;
            var6['isFavoritesGuild'] = var3;
            var3 = function getActionSheetButtons(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var14 = var1.channel;
                    var _closure3_slot0 = var14;
                    var7 = var1.canManageChannel;
                    var23 = var1.canCreateInstantInvite;
                    var11 = var1.canConnect;
                    var2 = var1.developerMode;
                    var21 = var1.isMuted;
                    var _closure3_slot1 = var21;
                    var4 = var1.isOwner;
                    var18 = var1.hasThreads;
                    var16 = var1.isNsfwGated;
                    var15 = var1.isInCollapsedCategory;
                    var17 = var1.isCollapsedVoiceChannel;
                    var13 = var1.isLiveStageChannel;
                    var10 = var1.isOptInEnabled;
                    var31 = var1.isOptedIn;
                    var _closure3_slot2 = var31;
                    var33 = var1.isParentOptedIn;
                    var28 = var1.isPinned;
                    var _closure3_slot3 = var28;
                    var26 = var1.isInFavoritesSection;
                    var25 = var1.isMessagesFavorited;
                    var _closure3_slot4 = var25;
                    var22 = var1.canMarkAsTier1InappropriateConversation;
                    var6 = var1.canMarkAsTier2InappropriateConversation;
                    var19 = var1.isReplyNudged;
                    var3 = var1.analyticsLocations;
                    var _closure3_slot5 = var3;
                    var20 = var1.isFavoritesGuild;
                    var12 = undefined;
                    var _closure3_slot6 = var12;
                    var1 = new Array(0);
                    var24 = {};
                    var3 = 'dm';
                    var24['sectionKey'] = var3;
                    var3 = new Array(0);
                    var24['buttons'] = var3;
                    var3 = var14.isDM;
                    var3 = var3.bind(var14)();
                    if(!var3) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    var8 = var24.buttons;
                    var5 = var8.push;
                    var3 = {};
                    var32 = _closure1_slot0;
                    var34 = _closure1_slot2;
                    var27 = 23;
                    var29 = var34[var27];
                    var29 = var32.bind(var12)(var29);
                    var36 = var29.intl;
                    var35 = var36.string;
                    var29 = var34[var27];
                    var29 = var32.bind(var12)(var29);
                    var29 = var29.t;
                    var29 = var29.LYju5J;
                    var29 = var35.bind(var36)(var29);
                    var3['label'] = var29;
                    var29 = 24;
                    var29 = var34[var29];
                    var29 = var32.bind(var12)(var29);
                    var29 = var29.UserCircleIcon;
                    var3['IconComponent'] = var29;
                    var29 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 25;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = {};
                        var5 = _closure3_slot0;
                        var6 = var5.getRecipientId;
                        var6 = var6.bind(var5)();
                        var2['userId'] = var6;
                        var5 = var5.id;
                        var2['channelId'] = var5;
                        var4 = _closure3_slot5;
                        var2['sourceAnalyticsLocations'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3['onPress'] = var29;
                    var3 = var5.bind(var8)(var3);
                    if(var20) { _fun0006_ip = 44; continue _fun0006 }
case 46:
                    var8 = var24.buttons;
                    var5 = var8.push;
                    var3 = {};
                    var29 = _closure1_slot0;
                    var30 = _closure1_slot2;
                    var32 = var30[var27];
                    var32 = var29.bind(var12)(var32);
                    var34 = var32.intl;
                    var32 = var34.string;
                    var27 = var30[var27];
                    var27 = var29.bind(var12)(var27);
                    var27 = var27.t;
                    var27 = var27.jsvgc3;
                    var27 = var32.bind(var34)(var27);
                    var3['label'] = var27;
                    var27 = 26;
                    var27 = var30[var27];
                    var27 = var29.bind(var12)(var27);
                    var27 = var27.UserMinusIcon;
                    var3['IconComponent'] = var27;
                    var27 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 27;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.closePrivateChannel;
                        var2 = _closure3_slot0;
                        var3 = var2.id;
                        var7 = _closure1_slot20;
                        var6 = var7.getCurrentlySelectedChannelId;
                        var6 = var6.bind(var7)();
                        var2 = var2.id;
                        var2 = var6 === var2;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var3['onPress'] = var27;
                    var3 = var5.bind(var8)(var3);
case 44:
                    var5 = {};
                    var3 = 'gdm';
                    var5['sectionKey'] = var3;
                    var3 = new Array(0);
                    var5['buttons'] = var3;
                    var3 = {};
                    var8 = 'gdm-destructive';
                    var3['sectionKey'] = var8;
                    var8 = new Array(0);
                    var3['buttons'] = var8;
                    var8 = var14.isGroupDM;
                    var8 = var8.bind(var14)();
                    if(!var8) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    if(var20) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                    var29 = var3.buttons;
                    var27 = var29.push;
                    var8 = {};
                    var32 = _closure1_slot0;
                    var34 = _closure1_slot2;
                    var30 = 23;
                    var35 = var34[var30];
                    var35 = var32.bind(var12)(var35);
                    var36 = var35.intl;
                    var35 = var36.string;
                    var30 = var34[var30];
                    var30 = var32.bind(var12)(var30);
                    var30 = var30.t;
                    var30 = var30["26C4oi"];
                    var30 = var35.bind(var36)(var30);
                    var8['label'] = var30;
                    var30 = 26;
                    var30 = var34[var30];
                    var30 = var32.bind(var12)(var30);
                    var30 = var30.UserMinusIcon;
                    var8['IconComponent'] = var30;
                    var30 = true;
                    var8['isDestructive'] = var30;
                    var30 = function onPress() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 28;
                            var4 = var2[var1];
                            var1 = undefined;
                            var9 = var3.bind(var1)(var4);
                            var8 = var9.computeChannelName;
                            var5 = _closure3_slot0;
                            var7 = _closure1_slot22;
                            var4 = _closure1_slot19;
                            var11 = var8.bind(var9)(var5, var7, var4);
                            var9 = 23;
                            var4 = var2[var9];
                            var4 = var3.bind(var1)(var4);
                            var10 = var4.intl;
                            var8 = var10.formatToPlainString;
                            var4 = var2[var9];
                            var4 = var3.bind(var1)(var4);
                            var4 = var4.t;
                            var7 = var4.hJ5Ap4;
                            var4 = {};
                            var4['name'] = var11;
                            var4 = var8.bind(var10)(var7, var4);
                            var7 = var2[var9];
                            var7 = var3.bind(var1)(var7);
                            var8 = var7.intl;
                            var7 = var8.format;
                            var2 = var2[var9];
                            var2 = var3.bind(var1)(var2);
                            var2 = var2.t;
                            var3 = var2.SSIVOu;
                            var2 = {};
                            var2['name'] = var11;
                            var7 = var7.bind(var8)(var3, var2);
                            var2 = var5.isManaged;
                            var2 = var2.bind(var5)();
                            var8 = var4;
                            if(!var2) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = var2[var9];
                            var3 = var4.bind(var1)(var3);
                            var12 = var3.intl;
                            var10 = var12.formatToPlainString;
                            var3 = var2[var9];
                            var3 = var4.bind(var1)(var3);
                            var3 = var3.t;
                            var5 = var3.hVGjEW;
                            var3 = {};
                            var3['name'] = var11;
                            var8 = var10.bind(var12)(var5, var3);
                            var5 = var2[var9];
                            var5 = var4.bind(var1)(var5);
                            var10 = var5.intl;
                            var5 = var10.format;
                            var2 = var2[var9];
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.t;
                            var4 = var2.IK1Qvs;
                            var2 = {};
                            var2['name'] = var11;
                            var7 = var5.bind(var10)(var4, var2);
case 51:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 29;
                            var2 = var5[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.show;
                            var2 = {};
                            var2['title'] = var8;
                            var2['body'] = var7;
                            var8 = _closure1_slot0;
                            var6 = var5[var9];
                            var6 = var8.bind(var1)(var6);
                            var10 = var6.intl;
                            var7 = var10.string;
                            var6 = var5[var9];
                            var6 = var8.bind(var1)(var6);
                            var6 = var6.t;
                            var6 = var6.p89ACt;
                            var6 = var7.bind(var10)(var6);
                            var2['confirmText'] = var6;
                            var6 = var5[var9];
                            var6 = var8.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var5[var9];
                            var5 = var8.bind(var1)(var5);
                            var5 = var5.t;
                            var5 = var5.gm1Vej;
                            var5 = var6.bind(var7)(var5);
                            var2['cancelText'] = var5;
                            var5 = function onConfirm() {
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 27;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var3.bind(var1)(var2);
                                var4 = var5.closePrivateChannel;
                                var2 = _closure3_slot0;
                                var3 = var2.id;
                                var7 = _closure1_slot20;
                                var6 = var7.getCurrentlySelectedChannelId;
                                var6 = var6.bind(var7)();
                                var2 = var2.id;
                                var2 = var6 === var2;
                                var2 = var4.bind(var5)(var3, var2);
                                return var1;
                            };
                            var2['onConfirm'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var8['onPress'] = var30;
                    var8 = var27.bind(var29)(var8);
case 49:
                    var30 = var5.buttons;
                    var27 = var30.push;
                    var8 = {};
                    var35 = _closure1_slot0;
                    var36 = _closure1_slot2;
                    var29 = 23;
                    var34 = var36[var29];
                    var34 = var35.bind(var12)(var34);
                    var38 = var34.intl;
                    var37 = var38.string;
                    var34 = var36[var29];
                    var34 = var35.bind(var12)(var34);
                    var34 = var34.t;
                    var34 = var34["1r5E+m"];
                    var34 = var37.bind(var38)(var34);
                    var8['label'] = var34;
                    var34 = 30;
                    var34 = var36[var34];
                    var34 = var35.bind(var12)(var34);
                    var34 = var34.PencilIcon;
                    var8['IconComponent'] = var34;
                    var34 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 31;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = {};
                        var4 = _closure3_slot0;
                        var4 = var4.id;
                        var2['channelId'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8['onPress'] = var34;
                    var8 = var27.bind(var30)(var8);
                    if(!var4) { _fun0006_ip = 47; continue _fun0006 }
case 53:
                    var27 = var5.buttons;
                    var8 = var27.push;
                    var4 = {};
                    var30 = _closure1_slot0;
                    var32 = _closure1_slot2;
                    var34 = var32[var29];
                    var34 = var30.bind(var12)(var34);
                    var35 = var34.intl;
                    var34 = var35.string;
                    var29 = var32[var29];
                    var29 = var30.bind(var12)(var29);
                    var29 = var29.t;
                    var29 = var29.OQ9MKu;
                    var29 = var34.bind(var35)(var29);
                    var4['label'] = var29;
                    var29 = 32;
                    var29 = var32[var29];
                    var29 = var30.bind(var12)(var29);
                    var29 = var29.LinkIcon;
                    var4['IconComponent'] = var29;
                    var29 = function onPress() {
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 33;
                        var4 = var2[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.pushLazy;
                        var6 = _closure1_slot0;
                        var3 = 21;
                        var3 = var2[var3];
                        var6 = var6.bind(var1)(var3);
                        var3 = 34;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var3 = var6.bind(var1)(var3, var2);
                        var2 = {};
                        var6 = _closure3_slot0;
                        var6 = var6.id;
                        var2['channelId'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var4['onPress'] = var29;
                    var4 = var8.bind(var27)(var4);
case 47:
                    var4 = var24.buttons;
                    var8 = var4.length;
                    var4 = 0;
                    if(!(var8 > var4)) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                    var8 = var1.push;
                    var8 = var8.bind(var1)(var24);
case 54:
                    var8 = var20;
                    if(!var8) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                    var27 = var14.guild_id;
                    var24 = null;
                    var8 = var24 != var27;
case 56:
                    if(!var8) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                    var24 = var1.push;
                    var8 = {};
                    var27 = 'go-to-server';
                    var8['sectionKey'] = var27;
                    var29 = {};
                    var30 = _closure1_slot0;
                    var32 = _closure1_slot2;
                    var34 = 23;
                    var34 = var32[var34];
                    var34 = var30.bind(var12)(var34);
                    var35 = var34.intl;
                    var34 = var35.string;
                    var36 = _closure1_slot1;
                    var27 = 35;
                    var27 = var32[var27];
                    var27 = var36.bind(var12)(var27);
                    var27 = var27["3KruG3"];
                    var27 = var34.bind(var35)(var27);
                    var29['label'] = var27;
                    var27 = 36;
                    var27 = var32[var27];
                    var27 = var30.bind(var12)(var27);
                    var27 = var27.ServerIcon;
                    var29['IconComponent'] = var27;
                    var27 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 37;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.transitionToGuild;
                        var2 = _closure3_slot0;
                        var3 = var2.guild_id;
                        var2 = var2.id;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var29['onPress'] = var27;
                    var27 = new Array(1);
                    var27[0] = var29;
                    var8['buttons'] = var27;
                    var8 = var24.bind(var1)(var8);
case 58:
                    var8 = var14.getGuildId;
                    var24 = var8.bind(var14)();
                    _closure3_slot6 = var24;
                    var8 = {};
                    var27 = 'channel-actions';
                    var8['sectionKey'] = var27;
                    var27 = new Array(0);
                    var8['buttons'] = var27;
                    if(!var23) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                    var29 = var14.type;
                    var27 = _closure1_slot27;
                    var27 = var27.GUILD_CATEGORY;
                    var23 = var29 !== var27;
case 60:
                    if(!var23) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                    var29 = var8.buttons;
                    var27 = var29.push;
                    var23 = {};
                    var32 = _closure1_slot0;
                    var34 = _closure1_slot2;
                    var30 = 23;
                    var35 = var34[var30];
                    var35 = var32.bind(var12)(var35);
                    var36 = var35.intl;
                    var35 = var36.string;
                    var30 = var34[var30];
                    var30 = var32.bind(var12)(var30);
                    var30 = var30.t;
                    var30 = var30.VINpSK;
                    var30 = var35.bind(var36)(var30);
                    var23['label'] = var30;
                    var30 = 38;
                    var30 = var34[var30];
                    var30 = var32.bind(var12)(var30);
                    var30 = var30.GroupPlusIcon;
                    var23['IconComponent'] = var30;
                    var30 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 39;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.showInstantInviteActionSheet;
                        var3 = _closure3_slot0;
                        var2 = {};
                        var6 = _closure1_slot28;
                        var6 = var6.CONTEXT_MENU;
                        var2['source'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var23['onPress'] = var30;
                    var23 = var27.bind(var29)(var23);
case 62:
                    if(var20) { _fun0006_ip = 64; continue _fun0006 }
case 65:
                    var23 = null;
                    if(!(var23 != var24)) { _fun0006_ip = 64; continue _fun0006 }
case 66:
                    var23 = var14.isThread;
                    var23 = var23.bind(var14)();
                    if(var23) { _fun0006_ip = 64; continue _fun0006 }
case 67:
                    var23 = var10;
                    if(!var23) { _fun0006_ip = 68; continue _fun0006 }
case 69:
                    var24 = var14.isCategory;
                    var24 = var24.bind(var14)();
                    var23 = !var24;
case 68:
                    var24 = var28;
                    if(!var24) { _fun0006_ip = 70; continue _fun0006 }
case 71:
                    var24 = var26;
case 70:
                    if(!var24) { _fun0006_ip = 72; continue _fun0006 }
case 73:
                    var26 = var14.isCategory;
                    var26 = var26.bind(var14)();
                    var24 = !var26;
case 72:
                    if(var23) { _fun0006_ip = 74; continue _fun0006 }
case 75:
                    var23 = var24;
case 74:
                    if(!var23) { _fun0006_ip = 76; continue _fun0006 }
case 77:
                    var26 = var8.buttons;
                    var24 = var26.push;
                    var23 = {};
                    var34 = _closure1_slot0;
                    var35 = _closure1_slot2;
                    var29 = 23;
                    var30 = var35[var29];
                    var30 = var34.bind(var12)(var30);
                    var32 = var30.intl;
                    var30 = var32.string;
                    var29 = var35[var29];
                    var29 = var34.bind(var12)(var29);
                    var29 = var29.t;
                    if(var28) { _fun0006_ip = 78; continue _fun0006 }
case 79:
                    var28 = var29.RMpwZu;
                    var28 = var30.bind(var32)(var28);
                    _fun0006_ip = 80; continue _fun0006;
case 78:
                    var29 = var29.M5PWSf;
                    var28 = var30.bind(var32)(var29);
case 80:
                    var23['label'] = var28;
                    var28 = _closure1_slot0;
                    var29 = _closure1_slot2;
                    var27 = 40;
                    var27 = var29[var27];
                    var27 = var28.bind(var12)(var27);
                    var27 = var27.PinIcon;
                    var23['IconComponent'] = var27;
                    var27 = function onPress() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 41;
                            var3 = var3[var1];
                            var1 = undefined;
                            var10 = var4.bind(var1)(var3);
                            var9 = var10.setIsFavorite;
                            var15 = _closure3_slot6;
                            var3 = _closure3_slot0;
                            var14 = var3.id;
                            var3 = _closure3_slot3;
                            var13 = !var3;
                            var4 = {};
                            var11 = _closure1_slot25;
                            var11 = var11.CHANNEL_ACTION_SHEET;
                            var4['section'] = var11;
                            var16 = var10;
                            var12 = var4;
                            var4 = var16[var9](var15, var14, var13, var12, var11);
                            if(var3) { _fun0008_ip = 81; continue _fun0008 }
case 82:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 42;
                            var2 = var4[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getRootNavigationRef;
                            var4 = var2.bind(var3)();
                            var6 = null;
                            if(!(var6 != var4)) { _fun0008_ip = 81; continue _fun0008 }
case 11:
                            var2 = var4.getCurrentRoute;
                            var2 = var2.bind(var4)();
                            var3 = var6 == var2;
                            var7 = undefined;
                            if(var3) { _fun0008_ip = 83; continue _fun0008 }
case 10:
                            var7 = var2.name;
case 83:
                            var2 = var4.getCurrentRoute;
                            var2 = var2.bind(var4)();
                            var8 = var6 == var2;
                            var3 = undefined;
                            if(var8) { _fun0008_ip = 84; continue _fun0008 }
case 85:
                            var3 = var2.params;
case 84:
                            var2 = 'guilds';
                            var2 = var2 === var7;
                            if(!var2) { _fun0008_ip = 86; continue _fun0008 }
case 87:
                            var7 = var6 == var3;
                            var6 = undefined;
                            if(var7) { _fun0008_ip = 88; continue _fun0008 }
case 89:
                            var6 = var3.guildId;
case 88:
                            var3 = _closure3_slot6;
                            var2 = var6 === var3;
case 86:
                            if(!var2) { _fun0008_ip = 81; continue _fun0008 }
case 90:
                            var3 = var4.setParams;
                            var2 = {};
                            var5 = _closure3_slot0;
                            var5 = var5.id;
                            var2['jumpToChannelId'] = var5;
                            var2 = var3.bind(var4)(var2);
case 81:
                            return var1;
                        }
                    };
                    var23['onPress'] = var27;
                    var23 = var24.bind(var26)(var23);
case 76:
                    if(!var10) { _fun0006_ip = 64; continue _fun0006 }
case 91:
                    var24 = var8.buttons;
                    var23 = var24.push;
                    var10 = {};
                    var27 = _closure1_slot0;
                    var28 = _closure1_slot2;
                    var26 = 23;
                    var29 = var28[var26];
                    var29 = var27.bind(var12)(var29);
                    var30 = var29.intl;
                    var29 = var30.string;
                    var26 = var28[var26];
                    var26 = var27.bind(var12)(var26);
                    var26 = var26.t;
                    if(var33) { _fun0006_ip = 92; continue _fun0006 }
case 93:
                    if(var31) { _fun0006_ip = 94; continue _fun0006 }
case 95:
                    var33 = var26["9mysCh"];
                    var33 = var29.bind(var30)(var33);
                    _fun0006_ip = 96; continue _fun0006;
case 94:
                    var34 = var26["3zySTA"];
                    var33 = var29.bind(var30)(var34);
case 96:
                    var10['label'] = var33;
                    var33 = _closure1_slot0;
                    var34 = _closure1_slot2;
                    if(var31) { _fun0006_ip = 97; continue _fun0006 }
case 98:
                    var31 = 44;
                    var31 = var34[var31];
                    var31 = var33.bind(var12)(var31);
                    var31 = var31.PlusLargeIcon;
                    _fun0006_ip = 99; continue _fun0006;
case 97:
                    var32 = 43;
                    var32 = var34[var32];
                    var32 = var33.bind(var12)(var32);
                    var31 = var32.XSmallIcon;
case 99:
                    var10['IconComponent'] = var31;
                    var31 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 41;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var6 = var7.setOptInChannel;
                        var12 = _closure3_slot6;
                        var3 = _closure3_slot0;
                        var11 = var3.id;
                        var2 = _closure3_slot2;
                        var10 = !var2;
                        var2 = {};
                        var8 = _closure1_slot25;
                        var8 = var8.CHANNEL_ACTION_SHEET;
                        var2['section'] = var8;
                        var13 = var7;
                        var9 = var2;
                        var2 = var13[var6](var12, var11, var10, var9, var8);
                        return var1;
                    };
                    var10['onPress'] = var31;
                    var31 = var23.bind(var24)(var10);
                    _fun0006_ip = 64; continue _fun0006;
case 92:
                    var26 = var26.jNphKT;
                    var26 = var29.bind(var30)(var26);
                    var10['label'] = var26;
                    var26 = 43;
                    var26 = var28[var26];
                    var26 = var27.bind(var12)(var26);
                    var26 = var26.XSmallIcon;
                    var10['IconComponent'] = var26;
                    var26 = function onPress() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var3 = var1.parent_id;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0009_ip = 100; continue _fun0009 }
case 101:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 41;
                            var4 = var4[var3];
                            var3 = undefined;
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.setOptInChannel;
                            var10 = _closure3_slot6;
                            var2 = _closure3_slot0;
                            var9 = var2.parent_id;
                            var2 = {};
                            var1 = _closure1_slot25;
                            var1 = var1.CHANNEL_ACTION_SHEET;
                            var2['section'] = var1;
                            var8 = false;
                            var11 = var6;
                            var7 = var2;
                            var1 = var11[var5](var10, var9, var8, var7, var6);
case 100:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var10['onPress'] = var26;
                    var10 = var23.bind(var24)(var10);
case 64:
                    var24 = _closure1_slot10;
                    var23 = var14.type;
                    var23 = var24.bind(var12)(var23);
                    if(var23) { _fun0006_ip = 102; continue _fun0006 }
case 103:
                    var26 = _closure1_slot11;
                    var24 = var14.type;
                    var23 = var26.bind(var12)(var24);
case 102:
                    if(var23) { _fun0006_ip = 104; continue _fun0006 }
case 105:
                    var24 = var14.isForumLikeChannel;
                    var23 = var24.bind(var14)();
case 104:
                    if(!var23) { _fun0006_ip = 106; continue _fun0006 }
case 107:
                    var26 = var8.buttons;
                    var24 = var26.push;
                    var23 = {};
                    var28 = _closure1_slot0;
                    var29 = _closure1_slot2;
                    var27 = 23;
                    var30 = var29[var27];
                    var30 = var28.bind(var12)(var30);
                    var31 = var30.intl;
                    var30 = var31.string;
                    var27 = var29[var27];
                    var27 = var28.bind(var12)(var27);
                    var27 = var27.t;
                    var27 = var27.WqhZss;
                    var27 = var30.bind(var31)(var27);
                    var23['label'] = var27;
                    var27 = 32;
                    var27 = var29[var27];
                    var27 = var28.bind(var12)(var27);
                    var27 = var27.LinkIcon;
                    var23['IconComponent'] = var27;
                    var27 = false;
                    var23['isDestructive'] = var27;
                    var27 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 45;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.copyGuildChannelOrThreadLink;
                        var2 = _closure3_slot0;
                        var3 = var2.guild_id;
                        var2 = var2.id;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var23['onPress'] = var27;
                    var23 = var24.bind(var26)(var23);
case 106:
                    var20 = !var20;
                    if(!var20) { _fun0006_ip = 108; continue _fun0006 }
case 109:
                    var23 = var14.isPrivate;
                    var20 = var23.bind(var14)();
case 108:
                    if(!var20) { _fun0006_ip = 110; continue _fun0006 }
case 111:
                    var24 = var8.buttons;
                    var23 = var24.push;
                    var20 = {};
                    var29 = _closure1_slot0;
                    var30 = _closure1_slot2;
                    var26 = 23;
                    var27 = var30[var26];
                    var27 = var29.bind(var12)(var27);
                    var28 = var27.intl;
                    var27 = var28.string;
                    var26 = var30[var26];
                    var26 = var29.bind(var12)(var26);
                    var26 = var26.t;
                    if(var25) { _fun0006_ip = 112; continue _fun0006 }
case 113:
                    var25 = var26.uKw3A+;
                    var25 = var27.bind(var28)(var25);
                    _fun0006_ip = 114; continue _fun0006;
case 112:
                    var26 = var26.vDYmad;
                    var25 = var27.bind(var28)(var26);
case 114:
                    var20['label'] = var25;
                    var26 = _closure1_slot0;
                    var27 = _closure1_slot2;
                    var25 = 40;
                    var25 = var27[var25];
                    var25 = var26.bind(var12)(var25);
                    var25 = var25.PinIcon;
                    var20['IconComponent'] = var25;
                    var25 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 41;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.setMessagesFavorite;
                        var3 = _closure3_slot0;
                        var3 = var3.id;
                        var2 = _closure3_slot4;
                        var2 = !var2;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var20['onPress'] = var25;
                    var20 = var23.bind(var24)(var20);
case 110:
                    var20 = {};
                    var23 = 'safety-warning-tooling';
                    var20['sectionKey'] = var23;
                    var23 = new Array(0);
                    var20['buttons'] = var23;
                    if(!var22) { _fun0006_ip = 115; continue _fun0006 }
case 116:
                    var24 = var20.buttons;
                    var23 = var24.push;
                    var22 = {};
                    var26 = _closure1_slot0;
                    var27 = _closure1_slot2;
                    var25 = 23;
                    var28 = var27[var25];
                    var28 = var26.bind(var12)(var28);
                    var29 = var28.intl;
                    var28 = var29.string;
                    var25 = var27[var25];
                    var25 = var26.bind(var12)(var25);
                    var25 = var25.t;
                    var25 = var25.EuzCET;
                    var25 = var28.bind(var29)(var25);
                    var22['label'] = var25;
                    var25 = 46;
                    var25 = var27[var25];
                    var25 = var26.bind(var12)(var25);
                    var25 = var25.WarningIcon;
                    var22['IconComponent'] = var25;
                    var25 = function onPress() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 47;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.markAsInappropriateConversation;
                        var3 = _closure3_slot0;
                        var3 = var3.id;
                        var2 = _closure1_slot7;
                        var2 = var2.INAPPROPRIATE_CONVERSATION_TIER_1;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var22['onPress'] = var25;
                    var22 = var23.bind(var24)(var22);
case 115:
                    if(!var6) { _fun0006_ip = 117; continue _fun0006 }
case 118:
                    var23 = var20.buttons;
                    var22 = var23.push;
                    var6 = {};
                    var25 = _closure1_slot0;
                    var26 = _closure1_slot2;
                    var24 = 23;
                    var27 = var26[var24];
                    var27 = var25.bind(var12)(var27);
                    var28 = var27.intl;
                    var27 = var28.string;
                    var24 = var26[var24];
                    var24 = var25.bind(var12)(var24);
                    var24 = var24.t;
                    var24 = var24.tBw/1i;
                    var24 = var27.bind(var28)(var24);
                    var6['label'] = var24;
                    var24 = 46;
                    var24 = var26[var24];
                    var24 = var25.bind(var12)(var24);
                    var24 = var24.WarningIcon;
                    var6['IconComponent'] = var24;
                    var24 = function onPress() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 47;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.markAsInappropriateConversation;
                        var3 = _closure3_slot0;
                        var3 = var3.id;
                        var2 = _closure1_slot7;
                        var2 = var2.INAPPROPRIATE_CONVERSATION_TIER_2;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var6['onPress'] = var24;
                    var6 = var22.bind(var23)(var6);
case 117:
                    var6 = var20.buttons;
                    var6 = var6.length;
                    if(!(var6 > var4)) { _fun0006_ip = 119; continue _fun0006 }
case 120:
                    var6 = var1.push;
                    var6 = var6.bind(var1)(var20);
case 119:
                    var6 = var8.buttons;
                    var6 = var6.length;
                    if(!(var6 > var4)) { _fun0006_ip = 121; continue _fun0006 }
case 122:
                    var6 = var1.push;
                    var6 = var6.bind(var1)(var8);
case 121:
                    var8 = {};
                    var6 = 'notifications';
                    var8['sectionKey'] = var6;
                    var6 = new Array(0);
                    var8['buttons'] = var6;
                    var20 = _closure1_slot12;
                    var6 = var14.type;
                    var6 = var20.bind(var12)(var6);
                    if(var6) { _fun0006_ip = 123; continue _fun0006 }
case 124:
                    var20 = var14.isCategory;
                    var6 = var20.bind(var14)();
case 123:
                    if(var6) { _fun0006_ip = 125; continue _fun0006 }
case 126:
                    var20 = var14.isForumLikeChannel;
                    var6 = var20.bind(var14)();
case 125:
                    if(!var6) { _fun0006_ip = 127; continue _fun0006 }
case 128:
                    var22 = var8.buttons;
                    var20 = var22.push;
                    var6 = {};
                    var24 = _closure1_slot0;
                    var25 = _closure1_slot2;
                    var23 = 23;
                    var26 = var25[var23];
                    var26 = var24.bind(var12)(var26);
                    var27 = var26.intl;
                    var26 = var27.string;
                    var23 = var25[var23];
                    var23 = var24.bind(var12)(var23);
                    var23 = var23.t;
                    var23 = var23.e6RscS;
                    var23 = var26.bind(var27)(var23);
                    var6['label'] = var23;
                    var23 = 48;
                    var23 = var25[var23];
                    var23 = var24.bind(var12)(var23);
                    var23 = var23.EyeIcon;
                    var6['IconComponent'] = var23;
                    var23 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 49;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.ackChannel;
                        var3 = _closure3_slot0;
                        var2 = {};
                        var7 = _closure1_slot25;
                        var7 = var7.CHANNEL_ACTION_SHEET;
                        var2['section'] = var7;
                        var7 = _closure1_slot24;
                        var7 = var7.MARK_CHANNEL_AS_READ_BUTTON;
                        var2['object'] = var7;
                        var6 = _closure1_slot23;
                        var6 = var6.ACK_MANUAL;
                        var2['objectType'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var6['onPress'] = var23;
                    var6 = var20.bind(var22)(var6);
case 127:
                    var6 = var14.isPrivate;
                    var6 = var6.bind(var14)();
                    if(!var6) { _fun0006_ip = 129; continue _fun0006 }
case 130:
                    var6 = var19;
case 129:
                    if(!var6) { _fun0006_ip = 131; continue _fun0006 }
case 132:
                    var20 = var8.buttons;
                    var19 = var20.push;
                    var6 = {};
                    var23 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var22 = 23;
                    var25 = var24[var22];
                    var25 = var23.bind(var12)(var25);
                    var26 = var25.intl;
                    var25 = var26.string;
                    var22 = var24[var22];
                    var22 = var23.bind(var12)(var22);
                    var22 = var22.t;
                    var22 = var22.q62UVy;
                    var22 = var25.bind(var26)(var22);
                    var6['label'] = var22;
                    var22 = 50;
                    var22 = var24[var22];
                    var22 = var23.bind(var12)(var22);
                    var22 = var22.ChatXIcon;
                    var6['IconComponent'] = var22;
                    var22 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 51;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.clearReplyNudge;
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var6['onPress'] = var22;
                    var6 = var19.bind(var20)(var6);
case 131:
                    var19 = _closure1_slot13;
                    var6 = var14.type;
                    var6 = var19.bind(var12)(var6);
                    if(var6) { _fun0006_ip = 133; continue _fun0006 }
case 134:
                    var6 = var14.isCategory;
                    var6 = var6.bind(var14)();
                    if(var6) { _fun0006_ip = 133; continue _fun0006 }
case 135:
                    var6 = var14.isForumLikeChannel;
                    var6 = var6.bind(var14)();
                    if(!var6) { _fun0006_ip = 136; continue _fun0006 }
case 133:
                    var22 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var23 = 23;
                    var19 = var6[var23];
                    var19 = var22.bind(var12)(var19);
                    var20 = var19.intl;
                    var19 = var20.string;
                    var6 = var6[var23];
                    var6 = var22.bind(var12)(var6);
                    var6 = var6.t;
                    if(var21) { _fun0006_ip = 137; continue _fun0006 }
case 138:
                    var21 = var6.tbeRRJ;
                    var22 = var19.bind(var20)(var21);
                    var21 = var14.isCategory;
                    var21 = var21.bind(var14)();
                    if(var21) { _fun0006_ip = 139; continue _fun0006 }
case 140:
                    var21 = var14.isDM;
                    var21 = var21.bind(var14)();
                    if(var21) { _fun0006_ip = 141; continue _fun0006 }
case 142:
                    var21 = var14.isGroupDM;
                    var21 = var21.bind(var14)();
                    if(var21) { _fun0006_ip = 141; continue _fun0006 }
case 143:
                    var21 = var14.isThread;
                    var21 = var21.bind(var14)();
                    var25 = var22;
                    if(!var21) { _fun0006_ip = 144; continue _fun0006 }
case 145:
                    var26 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var22 = var21[var23];
                    var22 = var26.bind(var12)(var22);
                    var24 = var22.intl;
                    var22 = var24.string;
                    var21 = var21[var23];
                    var21 = var26.bind(var12)(var21);
                    var21 = var21.t;
                    var21 = var21.bUUd8q;
                    var25 = var22.bind(var24)(var21);
                    _fun0006_ip = 144; continue _fun0006;
case 141:
                    var26 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var22 = var21[var23];
                    var22 = var26.bind(var12)(var22);
                    var24 = var22.intl;
                    var22 = var24.string;
                    var21 = var21[var23];
                    var21 = var26.bind(var12)(var21);
                    var21 = var21.t;
                    var21 = var21.LO3kaK;
                    var25 = var22.bind(var24)(var21);
                    _fun0006_ip = 144; continue _fun0006;
case 139:
                    var26 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var22 = var21[var23];
                    var22 = var26.bind(var12)(var22);
                    var24 = var22.intl;
                    var22 = var24.string;
                    var21 = var21[var23];
                    var21 = var26.bind(var12)(var21);
                    var21 = var21.t;
                    var21 = var21.pNMCg2;
                    var25 = var22.bind(var24)(var21);
case 144:
                    var24 = var8.buttons;
                    var22 = var24.push;
                    var21 = {};
                    var21['label'] = var25;
                    var26 = _closure1_slot0;
                    var27 = _closure1_slot2;
                    var25 = 52;
                    var25 = var27[var25];
                    var25 = var26.bind(var12)(var25);
                    var25 = var25.BellSlashIcon;
                    var21['IconComponent'] = var25;
                    var25 = function onPress() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 42;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.getRootNavigationRef;
                            var5 = var3.bind(var4)();
                            var3 = null;
                            var3 = var3 != var5;
                            if(!var3) { _fun0010_ip = 146; continue _fun0010 }
case 147:
                            var4 = var5.isReady;
                            var3 = var4.bind(var5)();
case 146:
                            if(!var3) { _fun0010_ip = 148; continue _fun0010 }
case 18:
                            var4 = var5.navigate;
                            var3 = {};
                            var6 = _closure3_slot0;
                            var6 = var6.id;
                            var3['channelId'] = var6;
                            var2 = _closure1_slot32;
                            var2 = var2.MUTE;
                            var3['initialRouteName'] = var2;
                            var2 = 'channel-long-press-sheet';
                            var3['source'] = var2;
                            var2 = 'sidebar';
                            var2 = var4.bind(var5)(var2, var3);
case 148:
                            return var1;
                        }
                    };
                    var21['onPress'] = var25;
                    var21 = var22.bind(var24)(var21);
                    _fun0006_ip = 136; continue _fun0006;
case 137:
                    var6 = var6.OYefme;
                    var19 = var19.bind(var20)(var6);
                    var6 = var14.isCategory;
                    var6 = var6.bind(var14)();
                    if(var6) { _fun0006_ip = 149; continue _fun0006 }
case 150:
                    var6 = var14.isDM;
                    var6 = var6.bind(var14)();
                    if(var6) { _fun0006_ip = 151; continue _fun0006 }
case 152:
                    var6 = var14.isGroupDM;
                    var6 = var6.bind(var14)();
                    if(var6) { _fun0006_ip = 151; continue _fun0006 }
case 153:
                    var6 = var14.isThread;
                    var6 = var6.bind(var14)();
                    var21 = var19;
                    if(!var6) { _fun0006_ip = 154; continue _fun0006 }
case 155:
                    var22 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var19 = var6[var23];
                    var19 = var22.bind(var12)(var19);
                    var20 = var19.intl;
                    var19 = var20.string;
                    var6 = var6[var23];
                    var6 = var22.bind(var12)(var6);
                    var6 = var6.t;
                    var6 = var6.Cq/TzF;
                    var21 = var19.bind(var20)(var6);
                    _fun0006_ip = 154; continue _fun0006;
case 151:
                    var22 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var19 = var6[var23];
                    var19 = var22.bind(var12)(var19);
                    var20 = var19.intl;
                    var19 = var20.string;
                    var6 = var6[var23];
                    var6 = var22.bind(var12)(var6);
                    var6 = var6.t;
                    var6 = var6.s5/5fm;
                    var21 = var19.bind(var20)(var6);
                    _fun0006_ip = 154; continue _fun0006;
case 149:
                    var22 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var19 = var6[var23];
                    var19 = var22.bind(var12)(var19);
                    var20 = var19.intl;
                    var19 = var20.string;
                    var6 = var6[var23];
                    var6 = var22.bind(var12)(var6);
                    var6 = var6.t;
                    var6 = var6.olaBeG;
                    var21 = var19.bind(var20)(var6);
case 154:
                    var20 = var8.buttons;
                    var19 = var20.push;
                    var6 = {};
                    var6['label'] = var21;
                    var22 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var21 = 53;
                    var21 = var23[var21];
                    var21 = var22.bind(var12)(var21);
                    var21 = var21.BellIcon;
                    var6['IconComponent'] = var21;
                    var21 = function onPress() {
                        var3 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var1 = 54;
                        var2 = var10[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var6 = var7.updateChannelOverrideSettings;
                        var3 = _closure3_slot0;
                        var4 = var3.getGuildId;
                        var5 = var4.bind(var3)();
                        var13 = var3.id;
                        var3 = {};
                        var2 = _closure3_slot1;
                        var9 = !var2;
                        var3['muted'] = var9;
                        var9 = _closure1_slot0;
                        var8 = 55;
                        var8 = var10[var8];
                        var8 = var9.bind(var1)(var8);
                        var9 = var8.NotificationLabel;
                        var8 = var9.muted;
                        var2 = !var2;
                        var11 = var8.bind(var9)(var2);
                        var15 = var7;
                        var14 = var5;
                        var12 = var3;
                        var2 = var15[var6](var14, var13, var12, var11, var10);
                        return var1;
                    };
                    var6['onPress'] = var21;
                    var6 = var19.bind(var20)(var6);
case 136:
                    var19 = _closure1_slot10;
                    var6 = var14.type;
                    var6 = var19.bind(var12)(var6);
                    if(var6) { _fun0006_ip = 156; continue _fun0006 }
case 157:
                    var19 = var14.isCategory;
                    var6 = var19.bind(var14)();
case 156:
                    if(var6) { _fun0006_ip = 158; continue _fun0006 }
case 159:
                    var19 = var14.isGuildStageVoice;
                    var6 = var19.bind(var14)();
case 158:
                    if(var6) { _fun0006_ip = 160; continue _fun0006 }
case 161:
                    var19 = var14.isForumLikeChannel;
                    var6 = var19.bind(var14)();
case 160:
                    if(!var6) { _fun0006_ip = 162; continue _fun0006 }
case 163:
                    var20 = var8.buttons;
                    var19 = var20.push;
                    var6 = {};
                    var22 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var21 = 23;
                    var24 = var23[var21];
                    var24 = var22.bind(var12)(var24);
                    var25 = var24.intl;
                    var24 = var25.string;
                    var21 = var23[var21];
                    var21 = var22.bind(var12)(var21);
                    var21 = var21.t;
                    var21 = var21.h850Ss;
                    var21 = var24.bind(var25)(var21);
                    var6['label'] = var21;
                    var21 = 56;
                    var21 = var23[var21];
                    var21 = var22.bind(var12)(var21);
                    var21 = var21.ChannelNotificationIcon;
                    var6['IconComponent'] = var21;
                    var21 = true;
                    var6['disableColor'] = var21;
                    var21 = function onPress() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 57;
                        var6 = var4[var2];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var6);
                        var6 = var7.setSection;
                        var5 = _closure1_slot26;
                        var5 = var5.NOTIFICATIONS;
                        var5 = var6.bind(var7)(var5);
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.open;
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var6['onPress'] = var21;
                    var6 = var19.bind(var20)(var6);
case 162:
                    var6 = var8.buttons;
                    var6 = var6.length;
                    if(!(var6 > var4)) { _fun0006_ip = 164; continue _fun0006 }
case 165:
                    var6 = var1.push;
                    var6 = var6.bind(var1)(var8);
case 164:
                    var8 = {};
                    var6 = 'threads';
                    var8['sectionKey'] = var6;
                    var6 = new Array(0);
                    var8['buttons'] = var6;
                    var6 = var14.isThread;
                    var6 = var6.bind(var14)();
                    if(var6) { _fun0006_ip = 166; continue _fun0006 }
case 167:
                    var19 = var14.isForumLikeChannel;
                    var6 = var19.bind(var14)();
case 166:
                    if(var6) { _fun0006_ip = 168; continue _fun0006 }
case 169:
                    var6 = !var18;
case 168:
                    if(var6) { _fun0006_ip = 170; continue _fun0006 }
case 171:
                    var6 = var16;
case 170:
                    if(var6) { _fun0006_ip = 172; continue _fun0006 }
case 173:
                    var18 = var8.buttons;
                    var16 = var18.push;
                    var6 = {};
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var19 = 23;
                    var22 = var21[var19];
                    var22 = var20.bind(var12)(var22);
                    var23 = var22.intl;
                    var22 = var23.string;
                    var19 = var21[var19];
                    var19 = var20.bind(var12)(var19);
                    var19 = var19.t;
                    var19 = var19.B2panI;
                    var19 = var22.bind(var23)(var19);
                    var6['label'] = var19;
                    var19 = 58;
                    var19 = var21[var19];
                    var19 = var20.bind(var12)(var19);
                    var19 = var19.ThreadIcon;
                    var6['IconComponent'] = var19;
                    var19 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 59;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var6['onPress'] = var19;
                    var6 = var16.bind(var18)(var6);
case 172:
                    var6 = var8.buttons;
                    var6 = var6.length;
                    if(!(var6 > var4)) { _fun0006_ip = 174; continue _fun0006 }
case 175:
                    var6 = var1.push;
                    var6 = var6.bind(var1)(var8);
case 174:
                    var8 = {};
                    var6 = 'voice';
                    var8['sectionKey'] = var6;
                    var6 = new Array(0);
                    var8['buttons'] = var6;
                    var16 = _closure1_slot11;
                    var6 = var14.type;
                    var6 = var16.bind(var12)(var6);
                    if(!var6) { _fun0006_ip = 176; continue _fun0006 }
case 177:
                    var6 = !var15;
case 176:
                    if(!var6) { _fun0006_ip = 178; continue _fun0006 }
case 179:
                    var16 = var8.buttons;
                    var15 = var16.push;
                    var6 = {};
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var18 = 23;
                    var19 = var22[var18];
                    var19 = var21.bind(var12)(var19);
                    var20 = var19.intl;
                    var19 = var20.string;
                    var18 = var22[var18];
                    var18 = var21.bind(var12)(var18);
                    var18 = var18.t;
                    if(var17) { _fun0006_ip = 180; continue _fun0006 }
case 181:
                    var17 = var18.LxzNiu;
                    var17 = var19.bind(var20)(var17);
                    _fun0006_ip = 182; continue _fun0006;
case 180:
                    var18 = var18.JYF2Oa;
                    var17 = var19.bind(var20)(var18);
case 182:
                    var6['label'] = var17;
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var17 = 24;
                    var17 = var19[var17];
                    var17 = var18.bind(var12)(var17);
                    var17 = var17.UserCircleIcon;
                    var6['IconComponent'] = var17;
                    var17 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 60;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.update;
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var6['onPress'] = var17;
                    var6 = var15.bind(var16)(var6);
case 178:
                    var6 = var14.isGuildVocal;
                    var6 = var6.bind(var14)();
                    if(!var6) { _fun0006_ip = 183; continue _fun0006 }
case 184:
                    var6 = var14.isGuildStageVoice;
                    var23 = var6.bind(var14)();
                    var16 = var8.buttons;
                    var15 = var16.push;
                    var6 = {};
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var17 = 23;
                    var20 = var19[var17];
                    var20 = var18.bind(var12)(var20);
                    var22 = var20.intl;
                    var21 = var22.string;
                    var20 = var19[var17];
                    var20 = var18.bind(var12)(var20);
                    var20 = var20.t;
                    if(var23) { _fun0006_ip = 185; continue _fun0006 }
case 186:
                    var23 = var20.ZXxLQg;
                    var23 = var21.bind(var22)(var23);
                    var6['label'] = var23;
                    var23 = 62;
                    var23 = var19[var23];
                    var23 = var18.bind(var12)(var23);
                    var23 = var23.ChatIcon;
                    var6['IconComponent'] = var23;
                    var23 = function onPress() {
                        var4 = _closure1_slot34;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var4 = var4.bind(var1)(var2);
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 65;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.updateChatOpen;
                        var3 = var2.id;
                        var2 = true;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var6['onPress'] = var23;
                    var23 = var15.bind(var16)(var6);
                    _fun0006_ip = 183; continue _fun0006;
case 185:
                    var20 = var20["7vb2cc"];
                    var20 = var21.bind(var22)(var20);
                    var6['label'] = var20;
                    var20 = 61;
                    var20 = var19[var20];
                    var20 = var18.bind(var12)(var20);
                    var20 = var20.StageIcon;
                    var6['IconComponent'] = var20;
                    var20 = function onPress() {
                        var3 = _closure1_slot34;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var6['onPress'] = var20;
                    var6 = var15.bind(var16)(var6);
                    var16 = var8.buttons;
                    var15 = var16.push;
                    var6 = {};
                    var20 = var19[var17];
                    var20 = var18.bind(var12)(var20);
                    var21 = var20.intl;
                    var20 = var21.string;
                    var17 = var19[var17];
                    var17 = var18.bind(var12)(var17);
                    var17 = var17.t;
                    var17 = var17.ZXxLQg;
                    var17 = var20.bind(var21)(var17);
                    var6['label'] = var17;
                    var17 = 62;
                    var17 = var19[var17];
                    var17 = var18.bind(var12)(var17);
                    var17 = var17.ChatIcon;
                    var6['IconComponent'] = var17;
                    var17 = function onPress() {
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 63;
                        var4 = var2[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var4);
                        var4 = var6.hideActionSheet;
                        var4 = var4.bind(var6)();
                        var4 = 33;
                        var4 = var2[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.pushLazy;
                        var6 = _closure1_slot0;
                        var3 = 21;
                        var3 = var2[var3];
                        var6 = var6.bind(var1)(var3);
                        var3 = 64;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var3 = var6.bind(var1)(var3, var2);
                        var2 = {};
                        var6 = _closure3_slot0;
                        var2['channel'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var6['onPress'] = var17;
                    var6 = var15.bind(var16)(var6);
case 183:
                    var6 = var14.isGuildStageVoice;
                    var6 = var6.bind(var14)();
                    if(!var6) { _fun0006_ip = 187; continue _fun0006 }
case 188:
                    var6 = var13;
case 187:
                    if(!var6) { _fun0006_ip = 189; continue _fun0006 }
case 190:
                    var6 = var11;
case 189:
                    if(!var6) { _fun0006_ip = 191; continue _fun0006 }
case 192:
                    var13 = var8.buttons;
                    var11 = var13.push;
                    var6 = {};
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var15 = 23;
                    var18 = var17[var15];
                    var18 = var16.bind(var12)(var18);
                    var19 = var18.intl;
                    var18 = var19.string;
                    var15 = var17[var15];
                    var15 = var16.bind(var12)(var15);
                    var15 = var15.t;
                    var15 = var15["+78Pfm"];
                    var15 = var18.bind(var19)(var15);
                    var6['label'] = var15;
                    var15 = 66;
                    var15 = var17[var15];
                    var15 = var16.bind(var12)(var15);
                    var15 = var15.FlagIcon;
                    var6['IconComponent'] = var15;
                    var15 = true;
                    var6['isDestructive'] = var15;
                    var15 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 67;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.showReportModalForStageChannel;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var6['onPress'] = var15;
                    var6 = var11.bind(var13)(var6);
case 191:
                    var6 = var8.buttons;
                    var6 = var6.length;
                    if(!(var6 > var4)) { _fun0006_ip = 193; continue _fun0006 }
case 194:
                    var6 = var1.push;
                    var6 = var6.bind(var1)(var8);
case 193:
                    var6 = {};
                    var8 = 'admin-actions';
                    var6['sectionKey'] = var8;
                    var8 = new Array(0);
                    var6['buttons'] = var8;
                    if(!var7) { _fun0006_ip = 195; continue _fun0006 }
case 196:
                    var11 = var6.buttons;
                    var8 = var11.push;
                    var7 = {};
                    var13 = var14.isCategory;
                    var13 = var13.bind(var14)();
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var19 = 23;
                    var16 = var15[var19];
                    var16 = var18.bind(var12)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var15[var19];
                    var15 = var18.bind(var12)(var15);
                    var15 = var15.t;
                    if(var13) { _fun0006_ip = 197; continue _fun0006 }
case 198:
                    var13 = var15["3gUsJb"];
                    var13 = var16.bind(var17)(var13);
                    _fun0006_ip = 199; continue _fun0006;
case 197:
                    var15 = var15.zdPFs9;
                    var13 = var16.bind(var17)(var15);
case 199:
                    var7['label'] = var13;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var13 = 68;
                    var13 = var16[var13];
                    var13 = var15.bind(var12)(var13);
                    var13 = var13.SettingsIcon;
                    var7['IconComponent'] = var13;
                    var13 = function onPress() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 57;
                        var6 = var4[var2];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var6);
                        var6 = var7.setSection;
                        var5 = _closure1_slot26;
                        var5 = var5.OVERVIEW;
                        var5 = var6.bind(var7)(var5);
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.open;
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var7['onPress'] = var13;
                    var7 = var8.bind(var11)(var7);
                    var8 = _closure1_slot10;
                    var7 = var14.type;
                    var7 = var8.bind(var12)(var7);
                    if(var7) { _fun0006_ip = 200; continue _fun0006 }
case 201:
                    var8 = var14.isForumLikeChannel;
                    var7 = var8.bind(var14)();
case 200:
                    if(var7) { _fun0006_ip = 202; continue _fun0006 }
case 203:
                    var8 = var14.isGuildVoice;
                    var7 = var8.bind(var14)();
case 202:
                    if(var7) { _fun0006_ip = 204; continue _fun0006 }
case 205:
                    var8 = var14.isCategory;
                    var7 = var8.bind(var14)();
case 204:
                    if(!var7) { _fun0006_ip = 195; continue _fun0006 }
case 206:
                    var11 = var6.buttons;
                    var8 = var11.push;
                    var7 = {};
                    var13 = var14.isCategory;
                    var13 = var13.bind(var14)();
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var16 = var15[var19];
                    var16 = var18.bind(var12)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var15[var19];
                    var15 = var18.bind(var12)(var15);
                    var15 = var15.t;
                    if(var13) { _fun0006_ip = 207; continue _fun0006 }
case 208:
                    var13 = var15.dEaPc4;
                    var13 = var16.bind(var17)(var13);
                    _fun0006_ip = 209; continue _fun0006;
case 207:
                    var15 = var15.fUYU+j;
                    var13 = var16.bind(var17)(var15);
case 209:
                    var7['label'] = var13;
                    var13 = var14.isCategory;
                    var13 = var13.bind(var14)();
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    if(var13) { _fun0006_ip = 210; continue _fun0006 }
case 211:
                    var13 = 69;
                    var13 = var16[var13];
                    var13 = var15.bind(var12)(var13);
                    var13 = var13.CopyIcon;
                    _fun0006_ip = 212; continue _fun0006;
case 210:
                    var14 = 44;
                    var14 = var16[var14];
                    var14 = var15.bind(var12)(var14);
                    var13 = var14.PlusLargeIcon;
case 212:
                    var7['IconComponent'] = var13;
                    var13 = function onPress() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 70;
                            var2 = var2[var1];
                            var1 = undefined;
                            var7 = var3.bind(var1)(var2);
                            var6 = var7.open;
                            var3 = _closure3_slot0;
                            var2 = var3.isCategory;
                            var2 = var2.bind(var3)();
                            var5 = undefined;
                            if(var2) { _fun0011_ip = 213; continue _fun0011 }
case 214:
                            var2 = _closure3_slot0;
                            var5 = var2.type;
case 213:
                            var3 = _closure3_slot0;
                            var2 = var3.getGuildId;
                            var4 = var2.bind(var3)();
                            var2 = var3.isCategory;
                            var3 = var2.bind(var3)();
                            var2 = _closure3_slot0;
                            if(var3) { _fun0011_ip = 215; continue _fun0011 }
case 216:
                            var3 = var2.parent_id;
                            _fun0011_ip = 217; continue _fun0011;
case 215:
                            var3 = var2.id;
case 217:
                            var9 = _closure3_slot0;
                            var2 = var9.isCategory;
                            var9 = var2.bind(var9)();
                            var2 = undefined;
                            if(var9) { _fun0011_ip = 218; continue _fun0011 }
case 219:
                            var8 = _closure3_slot0;
                            var2 = var8.id;
case 218:
                            var14 = var7;
                            var13 = var5;
                            var12 = var4;
                            var11 = var3;
                            var10 = var2;
                            var2 = var14[var6](var13, var12, var11, var10, var9);
                            return var1;
                        }
                    };
                    var7['onPress'] = var13;
                    var7 = var8.bind(var11)(var7);
case 195:
                    if(!var2) { _fun0006_ip = 220; continue _fun0006 }
case 221:
                    var8 = var6.buttons;
                    var7 = var8.push;
                    var2 = {};
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var10 = 23;
                    var14 = var13[var10];
                    var14 = var11.bind(var12)(var14);
                    var15 = var14.intl;
                    var14 = var15.string;
                    var10 = var13[var10];
                    var10 = var11.bind(var12)(var10);
                    var10 = var10.t;
                    var10 = var10.gFHI3k;
                    var10 = var14.bind(var15)(var10);
                    var2['label'] = var10;
                    var10 = 71;
                    var10 = var13[var10];
                    var10 = var11.bind(var12)(var10);
                    var10 = var10.IdIcon;
                    var2['IconComponent'] = var10;
                    var9 = function onPress() {
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 72;
                        var2 = var4[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.copy;
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        var2 = var5.bind(var6)(var2);
                        var2 = 73;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.presentIdCopied;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var2['onPress'] = var9;
                    var2 = var7.bind(var8)(var2);
case 220:
                    var2 = var6.buttons;
                    var2 = var2.length;
                    if(!(var2 > var4)) { _fun0006_ip = 222; continue _fun0006 }
case 223:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var6);
case 222:
                    var2 = var5.buttons;
                    var2 = var2.length;
                    if(!(var2 > var4)) { _fun0006_ip = 224; continue _fun0006 }
case 225:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var5);
case 224:
                    var2 = var3.buttons;
                    var2 = var2.length;
                    if(!(var2 > var4)) { _fun0006_ip = 226; continue _fun0006 }
case 227:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var3);
case 226:
                    return var1;
                }
            };
            var10 = var3.bind(var4)(var6);
            _closure2_slot4 = var10;
            var3 = var17.isGroupDM;
            var3 = var3.bind(var17)();
            var13 = undefined;
            if(!var3) { _fun0002_ip = 228; continue _fun0002 }
case 229:
            var6 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = 23;
            var7 = var18[var3];
            var7 = var6.bind(var4)(var7);
            var16 = var7.intl;
            var7 = var16.formatToPlainString;
            var3 = var18[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.t;
            var6 = var3.ABMKx3;
            var3 = {};
            var17 = var17.recipients;
            var18 = var17.length;
            var17 = 1;
            var17 = var18 + var17;
            var3['members'] = var17;
            var13 = var7.bind(var16)(var6, var3);
case 228:
            var7 = _closure1_slot4;
            var6 = var7.useEffect;
            var16 = var10.length;
            var3 = new Array(3);
            var3[0] = var16;
            var3[1] = var11;
            var3[2] = var2;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var3 = var2.length;
                    var2 = 0;
                    var2 = var2 !== var3;
                    if(var2) { _fun0012_ip = 230; continue _fun0012 }
case 231:
                    var2 = _closure2_slot3;
case 230:
                    if(var2) { _fun0012_ip = 232; continue _fun0012 }
case 233:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 232:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2, var3);
            var3 = _closure1_slot33;
            var11 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = var16[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot33;
            var5 = 85;
            var5 = var16[var5];
            var5 = var11.bind(var4)(var5);
            var6 = var5.ActionSheet;
            var5 = {};
            var5['showGradient'] = var12;
            var12 = 86;
            var12 = var16[var12];
            var17 = var11.bind(var4)(var12);
            var12 = var17.isMetaQuest;
            var12 = var12.bind(var17)();
            var5['startExpanded'] = var12;
            var12 = _closure1_slot33;
            var9 = 87;
            var9 = var16[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.ActionSheetIconHeader;
            var9 = {};
            var9['icon'] = var15;
            var9['title'] = var14;
            var9['subtitle'] = var13;
            var9 = var12.bind(var4)(var11, var9);
            var5['header'] = var9;
            var9 = var10.map;
            var8 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot33;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 88;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var2 = var2.ActionSheetRow;
                var3 = var2.Group;
                var2 = {};
                var6 = true;
                var2['hasIcons'] = var6;
                var8 = var1.buttons;
                var7 = var8.map;
                var6 = function(arg1, arg2) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var3 = arg1;
                        var14 = var3.label;
                        var12 = var3.IconComponent;
                        var11 = var3.iconStyle;
                        var6 = var3.trailing;
                        var2 = var3.isDestructive;
                        var4 = var3.onPress;
                        var _closure4_slot0 = var4;
                        var10 = var3.disableColor;
                        var15 = 'default';
                        if(!var2) { _fun0013_ip = 234; continue _fun0013 }
case 235:
                        var15 = 'danger';
case 234:
                        var5 = _closure1_slot33;
                        var8 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 88;
                        var2 = var13[var7];
                        var4 = undefined;
                        var2 = var8.bind(var4)(var2);
                        var3 = var2.ActionSheetRow;
                        var2 = {};
                        var2['variant'] = var15;
                        var2['label'] = var14;
                        var9 = _closure1_slot33;
                        var7 = var13[var7];
                        var7 = var8.bind(var4)(var7);
                        var7 = var7.ActionSheetRow;
                        var8 = var7.Icon;
                        var7 = {};
                        var7['IconComponent'] = var12;
                        var7['style'] = var11;
                        var7['disableColor'] = var10;
                        var7 = var9.bind(var4)(var8, var7);
                        var2['icon'] = var7;
                        var2['trailing'] = var6;
                        var1 = function onPress() {
                            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                                var3 = _closure4_slot0;
                                var2 = null;
                                if(!(var2 != var3)) { _fun0014_ip = 236; continue _fun0014 }
case 3:
                                var2 = _closure4_slot0;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
case 236:
                                var2 = _closure2_slot1;
                                var1 = undefined;
                                var2 = var2.bind(var1)();
                                return var1;
                            }
                        };
                        var2['onPress'] = var1;
                        var1 = arg2;
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    }
                };
                var6 = var7.bind(var8)(var6);
                var2['children'] = var6;
                var1 = var1.sectionKey;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var8 = var9.bind(var10)(var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot36 = var1;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.SafetyWarningTypes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.isGuildTextChannelType;
    var _closure1_slot10 = var8;
    var8 = var4.isGuildVocalChannelType;
    var _closure1_slot11 = var8;
    var8 = var4.isReadableType;
    var _closure1_slot12 = var8;
    var4 = var4.isTextChannel;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot20 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot21 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot22 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot23 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot24 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot25 = var7;
    var7 = var4.ChannelSettingsSections;
    var _closure1_slot26 = var7;
    var7 = var4.ChannelTypes;
    var _closure1_slot27 = var7;
    var7 = var4.InstantInviteSources;
    var _closure1_slot28 = var7;
    var7 = var4.NULL_STRING_GUILD_ID;
    var _closure1_slot29 = var7;
    var7 = var4.Permissions;
    var _closure1_slot30 = var7;
    var4 = var4.ZERO_STRING_GUILD_ID;
    var _closure1_slot31 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelDetailsNavigatorScreens;
    var _closure1_slot32 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot33 = var4;
    var4 = 89;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/native/ChannelLongPressActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelLongPressActionSheet(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channelId;
            var _closure2_slot0 = var3;
            var6 = var2.onClose;
            var _closure2_slot1 = var6;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 77;
            var3 = var5[var3];
            var5 = undefined;
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot15;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot15;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var7.bind(var8)(var4, var3);
            var _closure2_slot2 = var7;
            var8 = _closure1_slot4;
            var4 = var8.useEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var1 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0016_ip = 236; continue _fun0016 }
case 3:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 236:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var8)(var1, var3);
            var1 = null;
            var3 = var1 != var7;
            if(!var3) { _fun0015_ip = 237; continue _fun0015 }
case 238:
            var4 = _closure1_slot33;
            var3 = _closure1_slot36;
            var2 = {};
            var2['channel'] = var7;
            var2['onClose'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 237:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
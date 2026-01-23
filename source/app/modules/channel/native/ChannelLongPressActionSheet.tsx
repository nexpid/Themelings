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
        var4 = _closure1_slot33;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot32 = var1;
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
                    var3 = 20;
                    var6 = var2[var3];
                    var3 = undefined;
                    var6 = var7.bind(var3)(var6);
                    if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = 21;
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
                    var4 = 19;
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
        _closure1_slot33 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot33 = var1;
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
            var1 = 68;
            var3 = var11[var1];
            var5 = var6.bind(var4)(var3);
            var3 = 69;
            var3 = var11[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.CHANNEL_LONG_PRESS_MENU;
            var3 = var5.bind(var4)(var3);
            var5 = var3.analyticsLocations;
            var3 = var17.getGuildId;
            var7 = var3.bind(var17)();
            var _closure2_slot2 = var7;
            var10 = _closure1_slot0;
            var3 = 70;
            var6 = var11[var3];
            var14 = var10.bind(var4)(var6);
            var13 = var14.useStateFromStores;
            var6 = _closure1_slot16;
            var12 = new Array(1);
            var12[0] = var6;
            var6 = function() {
                var3 = _closure1_slot16;
                var2 = var3.getGuild;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var13.bind(var14)(var12, var6);
            var6 = var11[var3];
            var14 = var10.bind(var4)(var6);
            var13 = var14.useStateFromStoresObject;
            var6 = _closure1_slot17;
            var12 = new Array(1);
            var12[0] = var6;
            var6 = function() {
                var1 = {};
                var6 = _closure1_slot17;
                var4 = var6.can;
                var3 = _closure1_slot28;
                var3 = var3.MANAGE_CHANNELS;
                var5 = _closure2_slot0;
                var3 = var4.bind(var6)(var3, var5);
                var1['canManageChannel'] = var3;
                var6 = _closure1_slot17;
                var4 = var6.can;
                var3 = _closure1_slot28;
                var3 = var3.CREATE_INSTANT_INVITE;
                var3 = var4.bind(var6)(var3, var5);
                var1['canCreateInstantInvite'] = var3;
                var4 = _closure1_slot17;
                var3 = var4.can;
                var2 = _closure1_slot28;
                var2 = var2.CONNECT;
                var2 = var3.bind(var4)(var2, var5);
                var1['canConnect'] = var2;
                return var1;
            };
            var6 = var13.bind(var14)(var12, var6);
            var33 = var6.canManageChannel;
            var32 = var6.canCreateInstantInvite;
            var31 = var6.canConnect;
            var6 = 71;
            var6 = var11[var6];
            var11 = var10.bind(var4)(var6);
            var10 = var11.useOptInEnabledForGuild;
            var6 = null;
            if(!(var6 == var7)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var7 = _closure1_slot27;
case 15:
            var23 = var10.bind(var11)(var7);
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = var11[var3];
            var14 = var10.bind(var4)(var7);
            var13 = var14.useStateFromStoresObject;
            var7 = _closure1_slot20;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var8 = _closure1_slot20;
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
                    var9 = _closure1_slot20;
                    var8 = var9.isChannelOptedIn;
                    var6 = _closure2_slot2;
                    var5 = _closure2_slot0;
                    var5 = var5.parent_id;
                    var4 = var8.bind(var9)(var6, var5);
case 17:
                    var1['isParentOptedIn'] = var4;
                    var5 = _closure1_slot20;
                    var4 = var5.isFavorite;
                    var6 = _closure2_slot2;
                    if(!(var7 == var6)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var3 = _closure1_slot29;
                    _fun0003_ip = 21; continue _fun0003;
case 19:
                    var3 = _closure2_slot2;
case 21:
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['isFavorited'] = var2;
                    return var1;
                }
            };
            var7 = var13.bind(var14)(var12, var7);
            var22 = var7.isOptedIn;
            var21 = var7.isParentOptedIn;
            var20 = var7.isFavorited;
            var7 = var11[var3];
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
                    var2 = 72;
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
            var19 = var13.bind(var14)(var12, var7);
            var7 = var11[var3];
            var14 = var10.bind(var4)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot20;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = function() {
                var4 = _closure1_slot20;
                var3 = var4.isChannelMuted;
                var2 = _closure2_slot2;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var30 = var13.bind(var14)(var12, var7);
            var7 = var11[var3];
            var14 = var10.bind(var4)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot8;
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
                    var5 = _closure1_slot8;
                    var4 = var5.hasThreadsForChannel;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 25:
                    return var1;
                }
            };
            var28 = var13.bind(var14)(var12, var7);
            var7 = var11[var3];
            var14 = var10.bind(var4)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot13;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = function() {
                var3 = _closure1_slot13;
                var2 = var3.isCollapsed;
                var1 = _closure2_slot0;
                var1 = var1.parent_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var26 = var13.bind(var14)(var12, var7);
            var7 = var11[var3];
            var14 = var10.bind(var4)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot15;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = function() {
                var3 = _closure1_slot15;
                var2 = var3.isCollapsed;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var25 = var13.bind(var14)(var12, var7);
            var7 = var11[var3];
            var14 = var10.bind(var4)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot7;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = function() {
                var3 = _closure1_slot7;
                var2 = var3.isLive;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var24 = var13.bind(var14)(var12, var7);
            var13 = _closure1_slot1;
            var7 = 27;
            var7 = var11[var7];
            var7 = var13.bind(var4)(var7);
            var12 = true;
            var14 = var7.bind(var4)(var17, var12);
            var7 = 73;
            var7 = var11[var7];
            var7 = var13.bind(var4)(var7);
            var27 = var7.bind(var4)(var17);
            var7 = 74;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var10 = var7.DeveloperMode;
            var7 = var10.useSetting;
            var11 = var7.bind(var10)();
            _closure2_slot3 = var11;
            if(!(var6 == var18)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var13 = _closure1_slot31;
            var10 = _closure1_slot1;
            var29 = _closure1_slot2;
            var15 = 76;
            var7 = var29[var15];
            var10 = var10.bind(var4)(var7);
            var7 = {};
            var16 = _closure1_slot0;
            var15 = var29[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.AvatarSizes;
            var15 = var15.LARGE;
            var7['size'] = var15;
            var7['channel'] = var17;
            var15 = var13.bind(var4)(var10, var7);
            _fun0002_ip = 29; continue _fun0002;
case 27:
            var13 = _closure1_slot31;
            var10 = _closure1_slot1;
            var29 = _closure1_slot2;
            var16 = 75;
            var7 = var29[var16];
            var10 = var10.bind(var4)(var7);
            var7 = {};
            var7['guild'] = var18;
            var18 = _closure1_slot0;
            var16 = var29[var16];
            var16 = var18.bind(var4)(var16);
            var16 = var16.GuildIconSizes;
            var16 = var16.LARGE;
            var7['size'] = var16;
            var15 = var13.bind(var4)(var10, var7);
case 29:
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var3];
            var16 = var10.bind(var4)(var7);
            var13 = var16.useStateFromStores;
            var7 = _closure1_slot21;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                var2 = _closure1_slot21;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var34 = var13.bind(var16)(var10, var7);
            var29 = var6 != var34;
            if(!var29) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var10 = var17.isOwner;
            var7 = var34.id;
            var29 = var10.bind(var17)(var7);
case 30:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = var10[var3];
            var18 = var7.bind(var4)(var3);
            var16 = var18.useStateFromStoresObject;
            var3 = _closure1_slot20;
            var13 = new Array(1);
            var13[0] = var3;
            var3 = function() {
                var1 = {};
                var6 = _closure1_slot20;
                var5 = var6.isMessagesFavorite;
                var2 = _closure2_slot0;
                var4 = var2.id;
                var4 = var5.bind(var6)(var4);
                var1['isMessagesFavorited'] = var4;
                var4 = _closure1_slot20;
                var3 = var4.isAddedToMessages;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['isAddedToMessages'] = var2;
                return var1;
            };
            var3 = var16.bind(var18)(var13, var3);
            var18 = var3.isMessagesFavorited;
            var13 = var3.isAddedToMessages;
            var3 = 77;
            var3 = var10[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.useVoiceActivityNotificationSettingsExperiment;
            var16 = var3.bind(var7)(var17);
            var10 = var6 != var34;
            if(!var10) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var3 = var34.isStaff;
            var3 = var3.bind(var34)();
            if(var3) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var7 = var34.isStaffPersonal;
            var3 = var7.bind(var34)();
case 34:
            var10 = var3;
case 32:
            var7 = _closure1_slot0;
            var34 = _closure1_slot2;
            var3 = 78;
            var3 = var34[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.useInappropriateConversationsTiers;
            var34 = var3.bind(var7)(var17);
            var7 = var6 == var34;
            var3 = undefined;
            if(var7) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var3 = var34.isTier1;
case 36:
            var7 = var6 != var3;
            if(!var7) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var3 = var6 != var34;
            if(!var3) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var3 = var34.isTier1;
case 40:
            var7 = !var3;
case 38:
            var35 = var6 == var34;
            var3 = undefined;
            if(var35) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var3 = var34.isTier2;
case 42:
            var3 = var6 != var3;
            if(!var3) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var6 = var6 != var34;
            if(!var6) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var6 = var34.isTier2;
case 46:
            var3 = !var6;
case 44:
            var6 = {};
            var6['channel'] = var17;
            var6['canManageChannel'] = var33;
            var6['canCreateInstantInvite'] = var32;
            var6['canConnect'] = var31;
            var6['developerMode'] = var11;
            var6['isMuted'] = var30;
            var6['isOwner'] = var29;
            var6['hasThreads'] = var28;
            var6['isNsfwGated'] = var27;
            var6['isInCollapsedCategory'] = var26;
            var6['isCollapsedVoiceChannel'] = var25;
            var6['isLiveStageChannel'] = var24;
            var6['isOptInEnabled'] = var23;
            var6['isOptedIn'] = var22;
            var6['isParentOptedIn'] = var21;
            var6['isFavorited'] = var20;
            var6['isInFavoritesSection'] = var19;
            var6['isMessagesFavorited'] = var18;
            var6['isInVoiceActivityNotificationExperiment'] = var16;
            var6['isAddedToMessages'] = var13;
            var6['isAddToMessagesEnabled'] = var10;
            var6['canMarkAsTier1InappropriateConversation'] = var7;
            var6['canMarkAsTier2InappropriateConversation'] = var3;
            var6['analyticsLocations'] = var5;
            var3 = function getActionSheetButtons(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var14 = var1.channel;
                    var _closure3_slot0 = var14;
                    var7 = var1.canManageChannel;
                    var21 = var1.canCreateInstantInvite;
                    var11 = var1.canConnect;
                    var2 = var1.developerMode;
                    var22 = var1.isMuted;
                    var _closure3_slot1 = var22;
                    var4 = var1.isOwner;
                    var18 = var1.hasThreads;
                    var16 = var1.isNsfwGated;
                    var15 = var1.isInCollapsedCategory;
                    var17 = var1.isCollapsedVoiceChannel;
                    var13 = var1.isLiveStageChannel;
                    var10 = var1.isOptInEnabled;
                    var32 = var1.isOptedIn;
                    var _closure3_slot2 = var32;
                    var34 = var1.isParentOptedIn;
                    var29 = var1.isFavorited;
                    var _closure3_slot3 = var29;
                    var26 = var1.isInFavoritesSection;
                    var27 = var1.isMessagesFavorited;
                    var _closure3_slot4 = var27;
                    var19 = var1.isInVoiceActivityNotificationExperiment;
                    var23 = var1.isAddedToMessages;
                    var _closure3_slot5 = var23;
                    var6 = var1.isAddToMessagesEnabled;
                    var24 = var1.canMarkAsTier1InappropriateConversation;
                    var20 = var1.canMarkAsTier2InappropriateConversation;
                    var1 = var1.analyticsLocations;
                    var _closure3_slot6 = var1;
                    var12 = undefined;
                    var _closure3_slot7 = var12;
                    var1 = new Array(0);
                    var25 = {};
                    var3 = 'dm';
                    var25['sectionKey'] = var3;
                    var3 = new Array(0);
                    var25['buttons'] = var3;
                    var3 = var14.isDM;
                    var3 = var3.bind(var14)();
                    if(!var3) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                    var8 = var25.buttons;
                    var5 = var8.push;
                    var3 = {};
                    var30 = _closure1_slot0;
                    var31 = _closure1_slot2;
                    var28 = 22;
                    var33 = var31[var28];
                    var33 = var30.bind(var12)(var33);
                    var36 = var33.intl;
                    var35 = var36.string;
                    var33 = var31[var28];
                    var33 = var30.bind(var12)(var33);
                    var33 = var33.t;
                    var33 = var33.LYju5J;
                    var33 = var35.bind(var36)(var33);
                    var3['label'] = var33;
                    var33 = 23;
                    var33 = var31[var33];
                    var33 = var30.bind(var12)(var33);
                    var33 = var33.UserCircleIcon;
                    var3['IconComponent'] = var33;
                    var33 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 24;
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
                        var4 = _closure3_slot6;
                        var2['sourceAnalyticsLocations'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3['onPress'] = var33;
                    var3 = var5.bind(var8)(var3);
                    var8 = var25.buttons;
                    var5 = var8.push;
                    var3 = {};
                    var33 = var31[var28];
                    var33 = var30.bind(var12)(var33);
                    var35 = var33.intl;
                    var33 = var35.string;
                    var28 = var31[var28];
                    var28 = var30.bind(var12)(var28);
                    var28 = var28.t;
                    var28 = var28.jsvgc3;
                    var28 = var33.bind(var35)(var28);
                    var3['label'] = var28;
                    var28 = 25;
                    var28 = var31[var28];
                    var28 = var30.bind(var12)(var28);
                    var28 = var28.UserMinusIcon;
                    var3['IconComponent'] = var28;
                    var28 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 26;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.closePrivateChannel;
                        var2 = _closure3_slot0;
                        var3 = var2.id;
                        var7 = _closure1_slot19;
                        var6 = var7.getCurrentlySelectedChannelId;
                        var6 = var6.bind(var7)();
                        var2 = var2.id;
                        var2 = var6 === var2;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var3['onPress'] = var28;
                    var3 = var5.bind(var8)(var3);
case 48:
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
                    if(!var8) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var31 = var3.buttons;
                    var28 = var31.push;
                    var8 = {};
                    var36 = _closure1_slot0;
                    var37 = _closure1_slot2;
                    var30 = 22;
                    var35 = var37[var30];
                    var35 = var36.bind(var12)(var35);
                    var39 = var35.intl;
                    var38 = var39.string;
                    var35 = var37[var30];
                    var35 = var36.bind(var12)(var35);
                    var35 = var35.t;
                    var35 = var35.26C4oi;
                    var35 = var38.bind(var39)(var35);
                    var8['label'] = var35;
                    var35 = 25;
                    var35 = var37[var35];
                    var35 = var36.bind(var12)(var35);
                    var35 = var35.UserMinusIcon;
                    var8['IconComponent'] = var35;
                    var35 = true;
                    var8['isDestructive'] = var35;
                    var35 = function onPress() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 27;
                            var4 = var2[var1];
                            var1 = undefined;
                            var9 = var3.bind(var1)(var4);
                            var8 = var9.computeChannelName;
                            var5 = _closure3_slot0;
                            var7 = _closure1_slot21;
                            var4 = _closure1_slot18;
                            var11 = var8.bind(var9)(var5, var7, var4);
                            var9 = 22;
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
                            if(!var2) { _fun0007_ip = 52; continue _fun0007 }
case 53:
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
case 52:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 28;
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
                                var1 = 26;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var3.bind(var1)(var2);
                                var4 = var5.closePrivateChannel;
                                var2 = _closure3_slot0;
                                var3 = var2.id;
                                var7 = _closure1_slot19;
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
                    var8['onPress'] = var35;
                    var8 = var28.bind(var31)(var8);
                    var31 = var5.buttons;
                    var28 = var31.push;
                    var8 = {};
                    var35 = var37[var30];
                    var35 = var36.bind(var12)(var35);
                    var39 = var35.intl;
                    var38 = var39.string;
                    var35 = var37[var30];
                    var35 = var36.bind(var12)(var35);
                    var35 = var35.t;
                    var35 = var35.1r5E+m;
                    var35 = var38.bind(var39)(var35);
                    var8['label'] = var35;
                    var35 = 29;
                    var35 = var37[var35];
                    var35 = var36.bind(var12)(var35);
                    var35 = var35.PencilIcon;
                    var8['IconComponent'] = var35;
                    var35 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 30;
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
                    var8['onPress'] = var35;
                    var8 = var28.bind(var31)(var8);
                    if(!var4) { _fun0006_ip = 50; continue _fun0006 }
case 54:
                    var28 = var5.buttons;
                    var8 = var28.push;
                    var4 = {};
                    var31 = _closure1_slot0;
                    var33 = _closure1_slot2;
                    var35 = var33[var30];
                    var35 = var31.bind(var12)(var35);
                    var36 = var35.intl;
                    var35 = var36.string;
                    var30 = var33[var30];
                    var30 = var31.bind(var12)(var30);
                    var30 = var30.t;
                    var30 = var30.OQ9MKu;
                    var30 = var35.bind(var36)(var30);
                    var4['label'] = var30;
                    var30 = 31;
                    var30 = var33[var30];
                    var30 = var31.bind(var12)(var30);
                    var30 = var30.LinkIcon;
                    var4['IconComponent'] = var30;
                    var30 = function onPress() {
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 32;
                        var4 = var2[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.pushLazy;
                        var6 = _closure1_slot0;
                        var3 = 20;
                        var3 = var2[var3];
                        var6 = var6.bind(var1)(var3);
                        var3 = 33;
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
                    var4['onPress'] = var30;
                    var4 = var8.bind(var28)(var4);
case 50:
                    var4 = var25.buttons;
                    var8 = var4.length;
                    var4 = 0;
                    if(!(var8 > var4)) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                    var8 = var1.push;
                    var8 = var8.bind(var1)(var25);
case 55:
                    var8 = var14.getGuildId;
                    var25 = var8.bind(var14)();
                    _closure3_slot7 = var25;
                    var8 = {};
                    var28 = 'channel-actions';
                    var8['sectionKey'] = var28;
                    var28 = new Array(0);
                    var8['buttons'] = var28;
                    if(!var21) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                    var30 = var8.buttons;
                    var28 = var30.push;
                    var21 = {};
                    var33 = _closure1_slot0;
                    var35 = _closure1_slot2;
                    var31 = 22;
                    var36 = var35[var31];
                    var36 = var33.bind(var12)(var36);
                    var37 = var36.intl;
                    var36 = var37.string;
                    var31 = var35[var31];
                    var31 = var33.bind(var12)(var31);
                    var31 = var31.t;
                    var31 = var31.VINpSK;
                    var31 = var36.bind(var37)(var31);
                    var21['label'] = var31;
                    var31 = 34;
                    var31 = var35[var31];
                    var31 = var33.bind(var12)(var31);
                    var31 = var31.GroupPlusIcon;
                    var21['IconComponent'] = var31;
                    var31 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 35;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.showInstantInviteActionSheet;
                        var3 = _closure3_slot0;
                        var2 = {};
                        var6 = _closure1_slot26;
                        var6 = var6.CONTEXT_MENU;
                        var2['source'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var21['onPress'] = var31;
                    var21 = var28.bind(var30)(var21);
case 57:
                    var21 = null;
                    if(!(var21 != var25)) { _fun0006_ip = 59; continue _fun0006 }
case 60:
                    var21 = var14.isThread;
                    var21 = var21.bind(var14)();
                    if(var21) { _fun0006_ip = 59; continue _fun0006 }
case 61:
                    var21 = var10;
                    if(!var21) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                    var25 = var14.isCategory;
                    var25 = var25.bind(var14)();
                    var21 = !var25;
case 62:
                    var25 = var29;
                    if(!var25) { _fun0006_ip = 64; continue _fun0006 }
case 65:
                    var25 = var26;
case 64:
                    if(!var25) { _fun0006_ip = 66; continue _fun0006 }
case 67:
                    var26 = var14.isCategory;
                    var26 = var26.bind(var14)();
                    var25 = !var26;
case 66:
                    if(var21) { _fun0006_ip = 68; continue _fun0006 }
case 69:
                    var21 = var25;
case 68:
                    if(!var21) { _fun0006_ip = 70; continue _fun0006 }
case 71:
                    var26 = var8.buttons;
                    var25 = var26.push;
                    var21 = {};
                    var35 = _closure1_slot0;
                    var36 = _closure1_slot2;
                    var30 = 22;
                    var31 = var36[var30];
                    var31 = var35.bind(var12)(var31);
                    var33 = var31.intl;
                    var31 = var33.string;
                    var30 = var36[var30];
                    var30 = var35.bind(var12)(var30);
                    var30 = var30.t;
                    if(var29) { _fun0006_ip = 72; continue _fun0006 }
case 73:
                    var29 = var30.N2c/Un;
                    var29 = var31.bind(var33)(var29);
                    _fun0006_ip = 74; continue _fun0006;
case 72:
                    var30 = var30.z7I3gd;
                    var29 = var31.bind(var33)(var30);
case 74:
                    var21['label'] = var29;
                    var29 = _closure1_slot0;
                    var30 = _closure1_slot2;
                    var28 = 36;
                    var28 = var30[var28];
                    var28 = var29.bind(var12)(var28);
                    var28 = var28.StarIcon;
                    var21['IconComponent'] = var28;
                    var28 = function onPress() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 37;
                            var3 = var3[var1];
                            var1 = undefined;
                            var10 = var4.bind(var1)(var3);
                            var9 = var10.setIsFavorite;
                            var15 = _closure3_slot7;
                            var3 = _closure3_slot0;
                            var14 = var3.id;
                            var3 = _closure3_slot3;
                            var13 = !var3;
                            var4 = {};
                            var11 = _closure1_slot24;
                            var11 = var11.CHANNEL_ACTION_SHEET;
                            var4['section'] = var11;
                            var16 = var10;
                            var12 = var4;
                            var4 = var16[var9](var15, var14, var13, var12, var11);
                            if(var3) { _fun0008_ip = 75; continue _fun0008 }
case 76:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 38;
                            var2 = var4[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getRootNavigationRef;
                            var4 = var2.bind(var3)();
                            var6 = null;
                            if(!(var6 != var4)) { _fun0008_ip = 75; continue _fun0008 }
case 11:
                            var2 = var4.getCurrentRoute;
                            var2 = var2.bind(var4)();
                            var3 = var6 == var2;
                            var7 = undefined;
                            if(var3) { _fun0008_ip = 77; continue _fun0008 }
case 10:
                            var7 = var2.name;
case 77:
                            var2 = var4.getCurrentRoute;
                            var2 = var2.bind(var4)();
                            var8 = var6 == var2;
                            var3 = undefined;
                            if(var8) { _fun0008_ip = 78; continue _fun0008 }
case 79:
                            var3 = var2.params;
case 78:
                            var2 = 'guilds';
                            var2 = var2 === var7;
                            if(!var2) { _fun0008_ip = 80; continue _fun0008 }
case 81:
                            var7 = var6 == var3;
                            var6 = undefined;
                            if(var7) { _fun0008_ip = 82; continue _fun0008 }
case 83:
                            var6 = var3.guildId;
case 82:
                            var3 = _closure3_slot7;
                            var2 = var6 === var3;
case 80:
                            if(!var2) { _fun0008_ip = 75; continue _fun0008 }
case 84:
                            var3 = var4.setParams;
                            var2 = {};
                            var5 = _closure3_slot0;
                            var5 = var5.id;
                            var2['jumpToChannelId'] = var5;
                            var2 = var3.bind(var4)(var2);
case 75:
                            return var1;
                        }
                    };
                    var21['onPress'] = var28;
                    var21 = var25.bind(var26)(var21);
case 70:
                    if(!var10) { _fun0006_ip = 59; continue _fun0006 }
case 85:
                    var25 = var8.buttons;
                    var21 = var25.push;
                    var10 = {};
                    var28 = _closure1_slot0;
                    var29 = _closure1_slot2;
                    var26 = 22;
                    var30 = var29[var26];
                    var30 = var28.bind(var12)(var30);
                    var31 = var30.intl;
                    var30 = var31.string;
                    var26 = var29[var26];
                    var26 = var28.bind(var12)(var26);
                    var26 = var26.t;
                    if(var34) { _fun0006_ip = 86; continue _fun0006 }
case 87:
                    if(var32) { _fun0006_ip = 88; continue _fun0006 }
case 89:
                    var34 = var26.9mysCh;
                    var34 = var30.bind(var31)(var34);
                    _fun0006_ip = 90; continue _fun0006;
case 88:
                    var35 = var26.3zySTA;
                    var34 = var30.bind(var31)(var35);
case 90:
                    var10['label'] = var34;
                    var34 = _closure1_slot0;
                    var35 = _closure1_slot2;
                    if(var32) { _fun0006_ip = 91; continue _fun0006 }
case 92:
                    var32 = 40;
                    var32 = var35[var32];
                    var32 = var34.bind(var12)(var32);
                    var32 = var32.PlusLargeIcon;
                    _fun0006_ip = 93; continue _fun0006;
case 91:
                    var33 = 39;
                    var33 = var35[var33];
                    var33 = var34.bind(var12)(var33);
                    var32 = var33.XSmallIcon;
case 93:
                    var10['IconComponent'] = var32;
                    var32 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 37;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var6 = var7.setOptInChannel;
                        var12 = _closure3_slot7;
                        var3 = _closure3_slot0;
                        var11 = var3.id;
                        var2 = _closure3_slot2;
                        var10 = !var2;
                        var2 = {};
                        var8 = _closure1_slot24;
                        var8 = var8.CHANNEL_ACTION_SHEET;
                        var2['section'] = var8;
                        var13 = var7;
                        var9 = var2;
                        var2 = var13[var6](var12, var11, var10, var9, var8);
                        return var1;
                    };
                    var10['onPress'] = var32;
                    var32 = var21.bind(var25)(var10);
                    _fun0006_ip = 59; continue _fun0006;
case 86:
                    var26 = var26.jNphKT;
                    var26 = var30.bind(var31)(var26);
                    var10['label'] = var26;
                    var26 = 39;
                    var26 = var29[var26];
                    var26 = var28.bind(var12)(var26);
                    var26 = var26.XSmallIcon;
                    var10['IconComponent'] = var26;
                    var26 = function onPress() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var3 = var1.parent_id;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0009_ip = 94; continue _fun0009 }
case 95:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 37;
                            var4 = var4[var3];
                            var3 = undefined;
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.setOptInChannel;
                            var10 = _closure3_slot7;
                            var2 = _closure3_slot0;
                            var9 = var2.parent_id;
                            var2 = {};
                            var1 = _closure1_slot24;
                            var1 = var1.CHANNEL_ACTION_SHEET;
                            var2['section'] = var1;
                            var8 = false;
                            var11 = var6;
                            var7 = var2;
                            var1 = var11[var5](var10, var9, var8, var7, var6);
case 94:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var10['onPress'] = var26;
                    var10 = var21.bind(var25)(var10);
case 59:
                    var25 = _closure1_slot9;
                    var21 = var14.type;
                    var21 = var25.bind(var12)(var21);
                    if(var21) { _fun0006_ip = 96; continue _fun0006 }
case 97:
                    var26 = _closure1_slot10;
                    var25 = var14.type;
                    var21 = var26.bind(var12)(var25);
case 96:
                    if(var21) { _fun0006_ip = 98; continue _fun0006 }
case 99:
                    var25 = var14.isForumLikeChannel;
                    var21 = var25.bind(var14)();
case 98:
                    if(!var21) { _fun0006_ip = 100; continue _fun0006 }
case 101:
                    var26 = var8.buttons;
                    var25 = var26.push;
                    var21 = {};
                    var29 = _closure1_slot0;
                    var30 = _closure1_slot2;
                    var28 = 22;
                    var31 = var30[var28];
                    var31 = var29.bind(var12)(var31);
                    var32 = var31.intl;
                    var31 = var32.string;
                    var28 = var30[var28];
                    var28 = var29.bind(var12)(var28);
                    var28 = var28.t;
                    var28 = var28.WqhZss;
                    var28 = var31.bind(var32)(var28);
                    var21['label'] = var28;
                    var28 = 31;
                    var28 = var30[var28];
                    var28 = var29.bind(var12)(var28);
                    var28 = var28.LinkIcon;
                    var21['IconComponent'] = var28;
                    var28 = false;
                    var21['isDestructive'] = var28;
                    var28 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 41;
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
                    var21['onPress'] = var28;
                    var21 = var25.bind(var26)(var21);
case 100:
                    var21 = var14.isPrivate;
                    var21 = var21.bind(var14)();
                    if(!var21) { _fun0006_ip = 102; continue _fun0006 }
case 103:
                    var26 = var8.buttons;
                    var25 = var26.push;
                    var21 = {};
                    var31 = _closure1_slot0;
                    var32 = _closure1_slot2;
                    var28 = 22;
                    var29 = var32[var28];
                    var29 = var31.bind(var12)(var29);
                    var30 = var29.intl;
                    var29 = var30.string;
                    var28 = var32[var28];
                    var28 = var31.bind(var12)(var28);
                    var28 = var28.t;
                    if(var27) { _fun0006_ip = 104; continue _fun0006 }
case 105:
                    var27 = var28.N2c/Un;
                    var27 = var29.bind(var30)(var27);
                    _fun0006_ip = 106; continue _fun0006;
case 104:
                    var28 = var28.z7I3gd;
                    var27 = var29.bind(var30)(var28);
case 106:
                    var21['label'] = var27;
                    var28 = _closure1_slot0;
                    var29 = _closure1_slot2;
                    var27 = 36;
                    var27 = var29[var27];
                    var27 = var28.bind(var12)(var27);
                    var27 = var27.StarIcon;
                    var21['IconComponent'] = var27;
                    var27 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 37;
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
                    var21['onPress'] = var27;
                    var21 = var25.bind(var26)(var21);
case 102:
                    var21 = {};
                    var25 = 'safety-warning-tooling';
                    var21['sectionKey'] = var25;
                    var25 = new Array(0);
                    var21['buttons'] = var25;
                    if(!var24) { _fun0006_ip = 107; continue _fun0006 }
case 108:
                    var26 = var21.buttons;
                    var25 = var26.push;
                    var24 = {};
                    var28 = _closure1_slot0;
                    var29 = _closure1_slot2;
                    var27 = 22;
                    var30 = var29[var27];
                    var30 = var28.bind(var12)(var30);
                    var31 = var30.intl;
                    var30 = var31.string;
                    var27 = var29[var27];
                    var27 = var28.bind(var12)(var27);
                    var27 = var27.t;
                    var27 = var27.EuzCET;
                    var27 = var30.bind(var31)(var27);
                    var24['label'] = var27;
                    var27 = 42;
                    var27 = var29[var27];
                    var27 = var28.bind(var12)(var27);
                    var27 = var27.WarningIcon;
                    var24['IconComponent'] = var27;
                    var27 = function onPress() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 43;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.markAsInappropriateConversation;
                        var3 = _closure3_slot0;
                        var3 = var3.id;
                        var2 = _closure1_slot6;
                        var2 = var2.INAPPROPRIATE_CONVERSATION_TIER_1;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var24['onPress'] = var27;
                    var24 = var25.bind(var26)(var24);
case 107:
                    if(!var20) { _fun0006_ip = 109; continue _fun0006 }
case 110:
                    var25 = var21.buttons;
                    var24 = var25.push;
                    var20 = {};
                    var27 = _closure1_slot0;
                    var28 = _closure1_slot2;
                    var26 = 22;
                    var29 = var28[var26];
                    var29 = var27.bind(var12)(var29);
                    var30 = var29.intl;
                    var29 = var30.string;
                    var26 = var28[var26];
                    var26 = var27.bind(var12)(var26);
                    var26 = var26.t;
                    var26 = var26.tBw/1i;
                    var26 = var29.bind(var30)(var26);
                    var20['label'] = var26;
                    var26 = 42;
                    var26 = var28[var26];
                    var26 = var27.bind(var12)(var26);
                    var26 = var26.WarningIcon;
                    var20['IconComponent'] = var26;
                    var26 = function onPress() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 43;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.markAsInappropriateConversation;
                        var3 = _closure3_slot0;
                        var3 = var3.id;
                        var2 = _closure1_slot6;
                        var2 = var2.INAPPROPRIATE_CONVERSATION_TIER_2;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var20['onPress'] = var26;
                    var20 = var24.bind(var25)(var20);
case 109:
                    var20 = var21.buttons;
                    var20 = var20.length;
                    if(!(var20 > var4)) { _fun0006_ip = 111; continue _fun0006 }
case 112:
                    var20 = var1.push;
                    var20 = var20.bind(var1)(var21);
case 111:
                    if(!var6) { _fun0006_ip = 113; continue _fun0006 }
case 114:
                    var21 = _closure1_slot9;
                    var20 = var14.type;
                    var6 = var21.bind(var12)(var20);
case 113:
                    if(!var6) { _fun0006_ip = 115; continue _fun0006 }
case 116:
                    var21 = var8.buttons;
                    var20 = var21.push;
                    var6 = {};
                    var27 = _closure1_slot0;
                    var28 = _closure1_slot2;
                    var24 = 22;
                    var25 = var28[var24];
                    var25 = var27.bind(var12)(var25);
                    var26 = var25.intl;
                    var25 = var26.string;
                    var24 = var28[var24];
                    var24 = var27.bind(var12)(var24);
                    var24 = var24.t;
                    if(var23) { _fun0006_ip = 117; continue _fun0006 }
case 118:
                    var23 = var24.LOp2MR;
                    var23 = var25.bind(var26)(var23);
                    _fun0006_ip = 119; continue _fun0006;
case 117:
                    var24 = var24.n7rKhb;
                    var23 = var25.bind(var26)(var24);
case 119:
                    var6['label'] = var23;
                    var24 = _closure1_slot0;
                    var25 = _closure1_slot2;
                    var23 = 44;
                    var23 = var25[var23];
                    var23 = var24.bind(var12)(var23);
                    var23 = var23.ChatIcon;
                    var6['IconComponent'] = var23;
                    var23 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 37;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.setAddToMessages;
                        var3 = _closure3_slot0;
                        var3 = var3.id;
                        var2 = _closure3_slot5;
                        var2 = !var2;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var6['onPress'] = var23;
                    var6 = var20.bind(var21)(var6);
case 115:
                    var6 = var8.buttons;
                    var6 = var6.length;
                    if(!(var6 > var4)) { _fun0006_ip = 120; continue _fun0006 }
case 121:
                    var6 = var1.push;
                    var6 = var6.bind(var1)(var8);
case 120:
                    var8 = {};
                    var6 = 'notifications';
                    var8['sectionKey'] = var6;
                    var6 = new Array(0);
                    var8['buttons'] = var6;
                    var20 = _closure1_slot11;
                    var6 = var14.type;
                    var6 = var20.bind(var12)(var6);
                    if(var6) { _fun0006_ip = 122; continue _fun0006 }
case 123:
                    var20 = var14.isCategory;
                    var6 = var20.bind(var14)();
case 122:
                    if(var6) { _fun0006_ip = 124; continue _fun0006 }
case 125:
                    var20 = var14.isForumLikeChannel;
                    var6 = var20.bind(var14)();
case 124:
                    if(!var6) { _fun0006_ip = 126; continue _fun0006 }
case 127:
                    var21 = var8.buttons;
                    var20 = var21.push;
                    var6 = {};
                    var24 = _closure1_slot0;
                    var25 = _closure1_slot2;
                    var23 = 22;
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
                    var23 = 45;
                    var23 = var25[var23];
                    var23 = var24.bind(var12)(var23);
                    var23 = var23.EyeIcon;
                    var6['IconComponent'] = var23;
                    var23 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 46;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.ackChannel;
                        var3 = _closure3_slot0;
                        var2 = {};
                        var7 = _closure1_slot24;
                        var7 = var7.CHANNEL_ACTION_SHEET;
                        var2['section'] = var7;
                        var7 = _closure1_slot23;
                        var7 = var7.MARK_CHANNEL_AS_READ_BUTTON;
                        var2['object'] = var7;
                        var6 = _closure1_slot22;
                        var6 = var6.ACK_MANUAL;
                        var2['objectType'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var6['onPress'] = var23;
                    var6 = var20.bind(var21)(var6);
case 126:
                    var20 = _closure1_slot12;
                    var6 = var14.type;
                    var6 = var20.bind(var12)(var6);
                    if(var6) { _fun0006_ip = 128; continue _fun0006 }
case 129:
                    var6 = var14.isCategory;
                    var6 = var6.bind(var14)();
                    if(var6) { _fun0006_ip = 128; continue _fun0006 }
case 130:
                    if(!var19) { _fun0006_ip = 131; continue _fun0006 }
case 132:
                    var6 = var14.isGuildVoice;
                    var6 = var6.bind(var14)();
                    if(var6) { _fun0006_ip = 128; continue _fun0006 }
case 131:
                    var6 = var14.isForumLikeChannel;
                    var6 = var6.bind(var14)();
                    if(!var6) { _fun0006_ip = 133; continue _fun0006 }
case 128:
                    var23 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var24 = 22;
                    var20 = var6[var24];
                    var20 = var23.bind(var12)(var20);
                    var21 = var20.intl;
                    var20 = var21.string;
                    var6 = var6[var24];
                    var6 = var23.bind(var12)(var6);
                    var6 = var6.t;
                    if(var22) { _fun0006_ip = 134; continue _fun0006 }
case 135:
                    var22 = var6.tbeRRJ;
                    var23 = var20.bind(var21)(var22);
                    var22 = var14.isCategory;
                    var22 = var22.bind(var14)();
                    if(var22) { _fun0006_ip = 136; continue _fun0006 }
case 137:
                    var22 = var14.isDM;
                    var22 = var22.bind(var14)();
                    if(var22) { _fun0006_ip = 138; continue _fun0006 }
case 139:
                    var22 = var14.isGroupDM;
                    var22 = var22.bind(var14)();
                    if(var22) { _fun0006_ip = 138; continue _fun0006 }
case 140:
                    var22 = var14.isThread;
                    var22 = var22.bind(var14)();
                    var26 = var23;
                    if(!var22) { _fun0006_ip = 141; continue _fun0006 }
case 142:
                    var27 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var23 = var22[var24];
                    var23 = var27.bind(var12)(var23);
                    var25 = var23.intl;
                    var23 = var25.string;
                    var22 = var22[var24];
                    var22 = var27.bind(var12)(var22);
                    var22 = var22.t;
                    var22 = var22.bUUd8q;
                    var26 = var23.bind(var25)(var22);
                    _fun0006_ip = 141; continue _fun0006;
case 138:
                    var27 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var23 = var22[var24];
                    var23 = var27.bind(var12)(var23);
                    var25 = var23.intl;
                    var23 = var25.string;
                    var22 = var22[var24];
                    var22 = var27.bind(var12)(var22);
                    var22 = var22.t;
                    var22 = var22.LO3kaK;
                    var26 = var23.bind(var25)(var22);
                    _fun0006_ip = 141; continue _fun0006;
case 136:
                    var27 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var23 = var22[var24];
                    var23 = var27.bind(var12)(var23);
                    var25 = var23.intl;
                    var23 = var25.string;
                    var22 = var22[var24];
                    var22 = var27.bind(var12)(var22);
                    var22 = var22.t;
                    var22 = var22.pNMCg2;
                    var26 = var23.bind(var25)(var22);
case 141:
                    var25 = var8.buttons;
                    var23 = var25.push;
                    var22 = {};
                    var22['label'] = var26;
                    var27 = _closure1_slot0;
                    var28 = _closure1_slot2;
                    var26 = 47;
                    var26 = var28[var26];
                    var26 = var27.bind(var12)(var26);
                    var26 = var26.BellSlashIcon;
                    var22['IconComponent'] = var26;
                    var26 = function onPress() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 38;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.getRootNavigationRef;
                            var5 = var3.bind(var4)();
                            var3 = null;
                            var3 = var3 != var5;
                            if(!var3) { _fun0010_ip = 143; continue _fun0010 }
case 144:
                            var4 = var5.isReady;
                            var3 = var4.bind(var5)();
case 143:
                            if(!var3) { _fun0010_ip = 145; continue _fun0010 }
case 18:
                            var4 = var5.navigate;
                            var3 = {};
                            var6 = _closure3_slot0;
                            var6 = var6.id;
                            var3['channelId'] = var6;
                            var2 = _closure1_slot30;
                            var2 = var2.MUTE;
                            var3['initialRouteName'] = var2;
                            var2 = 'channel-long-press-sheet';
                            var3['source'] = var2;
                            var2 = 'sidebar';
                            var2 = var4.bind(var5)(var2, var3);
case 145:
                            return var1;
                        }
                    };
                    var22['onPress'] = var26;
                    var22 = var23.bind(var25)(var22);
                    _fun0006_ip = 133; continue _fun0006;
case 134:
                    var6 = var6.OYefme;
                    var20 = var20.bind(var21)(var6);
                    var6 = var14.isCategory;
                    var6 = var6.bind(var14)();
                    if(var6) { _fun0006_ip = 146; continue _fun0006 }
case 147:
                    var6 = var14.isDM;
                    var6 = var6.bind(var14)();
                    if(var6) { _fun0006_ip = 148; continue _fun0006 }
case 149:
                    var6 = var14.isGroupDM;
                    var6 = var6.bind(var14)();
                    if(var6) { _fun0006_ip = 148; continue _fun0006 }
case 150:
                    var6 = var14.isThread;
                    var6 = var6.bind(var14)();
                    var22 = var20;
                    if(!var6) { _fun0006_ip = 151; continue _fun0006 }
case 152:
                    var23 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var20 = var6[var24];
                    var20 = var23.bind(var12)(var20);
                    var21 = var20.intl;
                    var20 = var21.string;
                    var6 = var6[var24];
                    var6 = var23.bind(var12)(var6);
                    var6 = var6.t;
                    var6 = var6.Cq/TzF;
                    var22 = var20.bind(var21)(var6);
                    _fun0006_ip = 151; continue _fun0006;
case 148:
                    var23 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var20 = var6[var24];
                    var20 = var23.bind(var12)(var20);
                    var21 = var20.intl;
                    var20 = var21.string;
                    var6 = var6[var24];
                    var6 = var23.bind(var12)(var6);
                    var6 = var6.t;
                    var6 = var6.s5/5fm;
                    var22 = var20.bind(var21)(var6);
                    _fun0006_ip = 151; continue _fun0006;
case 146:
                    var23 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var20 = var6[var24];
                    var20 = var23.bind(var12)(var20);
                    var21 = var20.intl;
                    var20 = var21.string;
                    var6 = var6[var24];
                    var6 = var23.bind(var12)(var6);
                    var6 = var6.t;
                    var6 = var6.olaBeG;
                    var22 = var20.bind(var21)(var6);
case 151:
                    var21 = var8.buttons;
                    var20 = var21.push;
                    var6 = {};
                    var6['label'] = var22;
                    var23 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var22 = 48;
                    var22 = var24[var22];
                    var22 = var23.bind(var12)(var22);
                    var22 = var22.BellIcon;
                    var6['IconComponent'] = var22;
                    var22 = function onPress() {
                        var3 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var1 = 49;
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
                        var8 = 50;
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
                    var6['onPress'] = var22;
                    var6 = var20.bind(var21)(var6);
case 133:
                    var20 = _closure1_slot9;
                    var6 = var14.type;
                    var6 = var20.bind(var12)(var6);
                    if(var6) { _fun0006_ip = 153; continue _fun0006 }
case 154:
                    var20 = var14.isCategory;
                    var6 = var20.bind(var14)();
case 153:
                    if(var6) { _fun0006_ip = 155; continue _fun0006 }
case 156:
                    var20 = var14.isGuildStageVoice;
                    var6 = var20.bind(var14)();
case 155:
                    if(var6) { _fun0006_ip = 157; continue _fun0006 }
case 158:
                    if(!var19) { _fun0006_ip = 159; continue _fun0006 }
case 160:
                    var20 = var14.isGuildVoice;
                    var19 = var20.bind(var14)();
case 159:
                    var6 = var19;
case 157:
                    if(var6) { _fun0006_ip = 161; continue _fun0006 }
case 162:
                    var19 = var14.isForumLikeChannel;
                    var6 = var19.bind(var14)();
case 161:
                    if(!var6) { _fun0006_ip = 163; continue _fun0006 }
case 164:
                    var20 = var8.buttons;
                    var19 = var20.push;
                    var6 = {};
                    var22 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var21 = 22;
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
                    var21 = 51;
                    var21 = var23[var21];
                    var21 = var22.bind(var12)(var21);
                    var21 = var21.ChannelNotificationIcon;
                    var6['IconComponent'] = var21;
                    var21 = true;
                    var6['disableColor'] = var21;
                    var21 = function onPress() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 52;
                        var6 = var4[var2];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var6);
                        var6 = var7.setSection;
                        var5 = _closure1_slot25;
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
case 163:
                    var6 = var8.buttons;
                    var6 = var6.length;
                    if(!(var6 > var4)) { _fun0006_ip = 165; continue _fun0006 }
case 166:
                    var6 = var1.push;
                    var6 = var6.bind(var1)(var8);
case 165:
                    var8 = {};
                    var6 = 'threads';
                    var8['sectionKey'] = var6;
                    var6 = new Array(0);
                    var8['buttons'] = var6;
                    var6 = var14.isThread;
                    var6 = var6.bind(var14)();
                    if(var6) { _fun0006_ip = 167; continue _fun0006 }
case 168:
                    var19 = var14.isForumLikeChannel;
                    var6 = var19.bind(var14)();
case 167:
                    if(var6) { _fun0006_ip = 169; continue _fun0006 }
case 170:
                    var6 = !var18;
case 169:
                    if(var6) { _fun0006_ip = 171; continue _fun0006 }
case 172:
                    var6 = var16;
case 171:
                    if(var6) { _fun0006_ip = 173; continue _fun0006 }
case 174:
                    var18 = var8.buttons;
                    var16 = var18.push;
                    var6 = {};
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var19 = 22;
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
                    var19 = 53;
                    var19 = var21[var19];
                    var19 = var20.bind(var12)(var19);
                    var19 = var19.ThreadIcon;
                    var6['IconComponent'] = var19;
                    var19 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 54;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var6['onPress'] = var19;
                    var6 = var16.bind(var18)(var6);
case 173:
                    var6 = var8.buttons;
                    var6 = var6.length;
                    if(!(var6 > var4)) { _fun0006_ip = 175; continue _fun0006 }
case 176:
                    var6 = var1.push;
                    var6 = var6.bind(var1)(var8);
case 175:
                    var8 = {};
                    var6 = 'voice';
                    var8['sectionKey'] = var6;
                    var6 = new Array(0);
                    var8['buttons'] = var6;
                    var16 = _closure1_slot10;
                    var6 = var14.type;
                    var6 = var16.bind(var12)(var6);
                    if(!var6) { _fun0006_ip = 177; continue _fun0006 }
case 178:
                    var6 = !var15;
case 177:
                    if(!var6) { _fun0006_ip = 179; continue _fun0006 }
case 180:
                    var16 = var8.buttons;
                    var15 = var16.push;
                    var6 = {};
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var18 = 22;
                    var19 = var22[var18];
                    var19 = var21.bind(var12)(var19);
                    var20 = var19.intl;
                    var19 = var20.string;
                    var18 = var22[var18];
                    var18 = var21.bind(var12)(var18);
                    var18 = var18.t;
                    if(var17) { _fun0006_ip = 181; continue _fun0006 }
case 182:
                    var17 = var18.LxzNiu;
                    var17 = var19.bind(var20)(var17);
                    _fun0006_ip = 183; continue _fun0006;
case 181:
                    var18 = var18.JYF2Oa;
                    var17 = var19.bind(var20)(var18);
case 183:
                    var6['label'] = var17;
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var17 = 23;
                    var17 = var19[var17];
                    var17 = var18.bind(var12)(var17);
                    var17 = var17.UserCircleIcon;
                    var6['IconComponent'] = var17;
                    var17 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 55;
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
case 179:
                    var6 = var14.isGuildVocal;
                    var6 = var6.bind(var14)();
                    if(!var6) { _fun0006_ip = 184; continue _fun0006 }
case 185:
                    var6 = var14.isGuildStageVoice;
                    var23 = var6.bind(var14)();
                    var16 = var8.buttons;
                    var15 = var16.push;
                    var6 = {};
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var17 = 22;
                    var20 = var19[var17];
                    var20 = var18.bind(var12)(var20);
                    var22 = var20.intl;
                    var21 = var22.string;
                    var20 = var19[var17];
                    var20 = var18.bind(var12)(var20);
                    var20 = var20.t;
                    if(var23) { _fun0006_ip = 186; continue _fun0006 }
case 187:
                    var23 = var20.ZXxLQg;
                    var23 = var21.bind(var22)(var23);
                    var6['label'] = var23;
                    var23 = 44;
                    var23 = var19[var23];
                    var23 = var18.bind(var12)(var23);
                    var23 = var23.ChatIcon;
                    var6['IconComponent'] = var23;
                    var23 = function onPress() {
                        var4 = _closure1_slot32;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var4 = var4.bind(var1)(var2);
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 59;
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
                    _fun0006_ip = 184; continue _fun0006;
case 186:
                    var20 = var20.7vb2cc;
                    var20 = var21.bind(var22)(var20);
                    var6['label'] = var20;
                    var20 = 56;
                    var20 = var19[var20];
                    var20 = var18.bind(var12)(var20);
                    var20 = var20.StageIcon;
                    var6['IconComponent'] = var20;
                    var20 = function onPress() {
                        var3 = _closure1_slot32;
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
                    var17 = 44;
                    var17 = var19[var17];
                    var17 = var18.bind(var12)(var17);
                    var17 = var17.ChatIcon;
                    var6['IconComponent'] = var17;
                    var17 = function onPress() {
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 57;
                        var4 = var2[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var4);
                        var4 = var6.hideActionSheet;
                        var4 = var4.bind(var6)();
                        var4 = 32;
                        var4 = var2[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.pushLazy;
                        var6 = _closure1_slot0;
                        var3 = 20;
                        var3 = var2[var3];
                        var6 = var6.bind(var1)(var3);
                        var3 = 58;
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
case 184:
                    var6 = var14.isGuildStageVoice;
                    var6 = var6.bind(var14)();
                    if(!var6) { _fun0006_ip = 188; continue _fun0006 }
case 189:
                    var6 = var13;
case 188:
                    if(!var6) { _fun0006_ip = 190; continue _fun0006 }
case 191:
                    var6 = var11;
case 190:
                    if(!var6) { _fun0006_ip = 192; continue _fun0006 }
case 193:
                    var13 = var8.buttons;
                    var11 = var13.push;
                    var6 = {};
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var15 = 22;
                    var18 = var17[var15];
                    var18 = var16.bind(var12)(var18);
                    var19 = var18.intl;
                    var18 = var19.string;
                    var15 = var17[var15];
                    var15 = var16.bind(var12)(var15);
                    var15 = var15.t;
                    var15 = var15.+78Pfm;
                    var15 = var18.bind(var19)(var15);
                    var6['label'] = var15;
                    var15 = 60;
                    var15 = var17[var15];
                    var15 = var16.bind(var12)(var15);
                    var15 = var15.FlagIcon;
                    var6['IconComponent'] = var15;
                    var15 = true;
                    var6['isDestructive'] = var15;
                    var15 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 61;
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
case 192:
                    var6 = var8.buttons;
                    var6 = var6.length;
                    if(!(var6 > var4)) { _fun0006_ip = 194; continue _fun0006 }
case 195:
                    var6 = var1.push;
                    var6 = var6.bind(var1)(var8);
case 194:
                    var6 = {};
                    var8 = 'admin-actions';
                    var6['sectionKey'] = var8;
                    var8 = new Array(0);
                    var6['buttons'] = var8;
                    if(!var7) { _fun0006_ip = 196; continue _fun0006 }
case 197:
                    var11 = var6.buttons;
                    var8 = var11.push;
                    var7 = {};
                    var13 = var14.isCategory;
                    var13 = var13.bind(var14)();
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var19 = 22;
                    var16 = var15[var19];
                    var16 = var18.bind(var12)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var15[var19];
                    var15 = var18.bind(var12)(var15);
                    var15 = var15.t;
                    if(var13) { _fun0006_ip = 198; continue _fun0006 }
case 199:
                    var13 = var15.3gUsJb;
                    var13 = var16.bind(var17)(var13);
                    _fun0006_ip = 200; continue _fun0006;
case 198:
                    var15 = var15.zdPFs9;
                    var13 = var16.bind(var17)(var15);
case 200:
                    var7['label'] = var13;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var13 = 62;
                    var13 = var16[var13];
                    var13 = var15.bind(var12)(var13);
                    var13 = var13.SettingsIcon;
                    var7['IconComponent'] = var13;
                    var13 = function onPress() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 52;
                        var6 = var4[var2];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var6);
                        var6 = var7.setSection;
                        var5 = _closure1_slot25;
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
                    var8 = _closure1_slot9;
                    var7 = var14.type;
                    var7 = var8.bind(var12)(var7);
                    if(var7) { _fun0006_ip = 201; continue _fun0006 }
case 202:
                    var8 = var14.isForumLikeChannel;
                    var7 = var8.bind(var14)();
case 201:
                    if(var7) { _fun0006_ip = 203; continue _fun0006 }
case 204:
                    var8 = var14.isGuildVoice;
                    var7 = var8.bind(var14)();
case 203:
                    if(var7) { _fun0006_ip = 205; continue _fun0006 }
case 206:
                    var8 = var14.isCategory;
                    var7 = var8.bind(var14)();
case 205:
                    if(!var7) { _fun0006_ip = 196; continue _fun0006 }
case 207:
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
                    if(var13) { _fun0006_ip = 208; continue _fun0006 }
case 209:
                    var13 = var15.dEaPc4;
                    var13 = var16.bind(var17)(var13);
                    _fun0006_ip = 210; continue _fun0006;
case 208:
                    var15 = var15.fUYU+j;
                    var13 = var16.bind(var17)(var15);
case 210:
                    var7['label'] = var13;
                    var13 = var14.isCategory;
                    var13 = var13.bind(var14)();
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    if(var13) { _fun0006_ip = 211; continue _fun0006 }
case 212:
                    var13 = 63;
                    var13 = var16[var13];
                    var13 = var15.bind(var12)(var13);
                    var13 = var13.CopyIcon;
                    _fun0006_ip = 213; continue _fun0006;
case 211:
                    var14 = 40;
                    var14 = var16[var14];
                    var14 = var15.bind(var12)(var14);
                    var13 = var14.PlusLargeIcon;
case 213:
                    var7['IconComponent'] = var13;
                    var13 = function onPress() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 64;
                            var2 = var2[var1];
                            var1 = undefined;
                            var7 = var3.bind(var1)(var2);
                            var6 = var7.open;
                            var3 = _closure3_slot0;
                            var2 = var3.isCategory;
                            var2 = var2.bind(var3)();
                            var5 = undefined;
                            if(var2) { _fun0011_ip = 214; continue _fun0011 }
case 215:
                            var2 = _closure3_slot0;
                            var5 = var2.type;
case 214:
                            var3 = _closure3_slot0;
                            var2 = var3.getGuildId;
                            var4 = var2.bind(var3)();
                            var2 = var3.isCategory;
                            var3 = var2.bind(var3)();
                            var2 = _closure3_slot0;
                            if(var3) { _fun0011_ip = 216; continue _fun0011 }
case 217:
                            var3 = var2.parent_id;
                            _fun0011_ip = 218; continue _fun0011;
case 216:
                            var3 = var2.id;
case 218:
                            var9 = _closure3_slot0;
                            var2 = var9.isCategory;
                            var9 = var2.bind(var9)();
                            var2 = undefined;
                            if(var9) { _fun0011_ip = 219; continue _fun0011 }
case 220:
                            var8 = _closure3_slot0;
                            var2 = var8.id;
case 219:
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
case 196:
                    if(!var2) { _fun0006_ip = 221; continue _fun0006 }
case 222:
                    var8 = var6.buttons;
                    var7 = var8.push;
                    var2 = {};
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var10 = 22;
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
                    var10 = 65;
                    var10 = var13[var10];
                    var10 = var11.bind(var12)(var10);
                    var10 = var10.IdIcon;
                    var2['IconComponent'] = var10;
                    var9 = function onPress() {
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 66;
                        var2 = var4[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.copy;
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        var2 = var5.bind(var6)(var2);
                        var2 = 67;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.presentIdCopied;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var2['onPress'] = var9;
                    var2 = var7.bind(var8)(var2);
case 221:
                    var2 = var6.buttons;
                    var2 = var2.length;
                    if(!(var2 > var4)) { _fun0006_ip = 223; continue _fun0006 }
case 224:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var6);
case 223:
                    var2 = var5.buttons;
                    var2 = var2.length;
                    if(!(var2 > var4)) { _fun0006_ip = 225; continue _fun0006 }
case 226:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var5);
case 225:
                    var2 = var3.buttons;
                    var2 = var2.length;
                    if(!(var2 > var4)) { _fun0006_ip = 227; continue _fun0006 }
case 228:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var3);
case 227:
                    return var1;
                }
            };
            var10 = var3.bind(var4)(var6);
            _closure2_slot4 = var10;
            var3 = var17.isGroupDM;
            var3 = var3.bind(var17)();
            var13 = undefined;
            if(!var3) { _fun0002_ip = 229; continue _fun0002 }
case 230:
            var6 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = 22;
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
case 229:
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
                    if(var2) { _fun0012_ip = 231; continue _fun0012 }
case 232:
                    var2 = _closure2_slot3;
case 231:
                    if(var2) { _fun0012_ip = 233; continue _fun0012 }
case 234:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 233:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2, var3);
            var3 = _closure1_slot31;
            var11 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = var16[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot31;
            var5 = 79;
            var5 = var16[var5];
            var5 = var11.bind(var4)(var5);
            var6 = var5.ActionSheet;
            var5 = {};
            var5['showGradient'] = var12;
            var12 = 80;
            var12 = var16[var12];
            var17 = var11.bind(var4)(var12);
            var12 = var17.isMetaQuest;
            var12 = var12.bind(var17)();
            var5['startExpanded'] = var12;
            var12 = _closure1_slot31;
            var9 = 81;
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
                var5 = _closure1_slot31;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 82;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var2 = var2.ActionSheetRow;
                var3 = var2.Group;
                var2 = {};
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
                        if(!var2) { _fun0013_ip = 235; continue _fun0013 }
case 236:
                        var15 = 'danger';
case 235:
                        var5 = _closure1_slot31;
                        var8 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 82;
                        var2 = var13[var7];
                        var4 = undefined;
                        var2 = var8.bind(var4)(var2);
                        var3 = var2.ActionSheetRow;
                        var2 = {};
                        var2['variant'] = var15;
                        var2['label'] = var14;
                        var9 = _closure1_slot31;
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
                                if(!(var2 != var3)) { _fun0014_ip = 237; continue _fun0014 }
case 3:
                                var2 = _closure4_slot0;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
case 237:
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
    var _closure1_slot34 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.SafetyWarningTypes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.isGuildTextChannelType;
    var _closure1_slot9 = var8;
    var8 = var4.isGuildVocalChannelType;
    var _closure1_slot10 = var8;
    var8 = var4.isReadableType;
    var _closure1_slot11 = var8;
    var4 = var4.isTextChannel;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot22 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot23 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot24 = var7;
    var7 = var4.ChannelSettingsSections;
    var _closure1_slot25 = var7;
    var7 = var4.InstantInviteSources;
    var _closure1_slot26 = var7;
    var7 = var4.NULL_STRING_GUILD_ID;
    var _closure1_slot27 = var7;
    var7 = var4.Permissions;
    var _closure1_slot28 = var7;
    var4 = var4.ZERO_STRING_GUILD_ID;
    var _closure1_slot29 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelDetailsNavigatorScreens;
    var _closure1_slot30 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot31 = var4;
    var4 = 83;
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
            var3 = 70;
            var3 = var5[var3];
            var5 = undefined;
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot14;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot14;
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
                    if(!(var2 == var3)) { _fun0016_ip = 237; continue _fun0016 }
case 3:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 237:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var8)(var1, var3);
            var1 = null;
            var3 = var1 != var7;
            if(!var3) { _fun0015_ip = 238; continue _fun0015 }
case 239:
            var4 = _closure1_slot31;
            var3 = _closure1_slot34;
            var2 = {};
            var2['channel'] = var7;
            var2['onClose'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 238:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
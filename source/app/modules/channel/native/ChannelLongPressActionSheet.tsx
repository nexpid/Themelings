// app/modules/channel/native/ChannelLongPressActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function handleVoiceOrStageChannelConnectPress() {
        var1 = undefined;
        var4 = _closure1_slot38;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot37 = var1;
    var1 = function _handleVoiceOrStageChannelConnectPress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
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
                    var3 = 23;
                    var6 = var2[var3];
                    var3 = undefined;
                    var6 = var7.bind(var3)(var6);
                    if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = 24;
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
                    var4 = 22;
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
        _closure1_slot38 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot38 = var1;
    var1 = function NewBadge() {
        var2 = _closure1_slot36;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot35;
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var1 = var6[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.NewTag;
        var1 = {};
        var6 = 'eyebrow';
        var1['variant'] = var6;
        var5 = var5.tagContainer;
        var1['containerStyle'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot39 = var1;
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
            var12 = _closure1_slot2;
            var1 = 85;
            var3 = var12[var1];
            var5 = var6.bind(var4)(var3);
            var3 = 86;
            var3 = var12[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.CHANNEL_LONG_PRESS_MENU;
            var3 = var5.bind(var4)(var3);
            var5 = var3.analyticsLocations;
            var3 = var17.getGuildId;
            var6 = var3.bind(var17)();
            var _closure2_slot2 = var6;
            var11 = _closure1_slot0;
            var3 = 87;
            var3 = var12[var3];
            var7 = var11.bind(var4)(var3);
            var3 = var7.useIsFavoritesGuildSelected;
            var10 = var3.bind(var7)();
            var3 = 88;
            var7 = var12[var3];
            var15 = var11.bind(var4)(var7);
            var14 = var15.useStateFromStores;
            var7 = _closure1_slot18;
            var13 = new Array(1);
            var13[0] = var7;
            var7 = function() {
                var3 = _closure1_slot18;
                var2 = var3.getGuild;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var20 = var14.bind(var15)(var13, var7);
            var7 = var12[var3];
            var15 = var11.bind(var4)(var7);
            var14 = var15.useStateFromStoresObject;
            var7 = _closure1_slot19;
            var13 = new Array(1);
            var13[0] = var7;
            var7 = function() {
                var1 = {};
                var6 = _closure1_slot19;
                var4 = var6.can;
                var3 = _closure1_slot31;
                var3 = var3.MANAGE_CHANNELS;
                var5 = _closure2_slot0;
                var3 = var4.bind(var6)(var3, var5);
                var1['canManageChannel'] = var3;
                var6 = _closure1_slot19;
                var4 = var6.can;
                var3 = _closure1_slot31;
                var3 = var3.CREATE_INSTANT_INVITE;
                var3 = var4.bind(var6)(var3, var5);
                var1['canCreateInstantInvite'] = var3;
                var6 = _closure1_slot19;
                var4 = var6.can;
                var3 = _closure1_slot31;
                var3 = var3.CONNECT;
                var3 = var4.bind(var6)(var3, var5);
                var1['canConnect'] = var3;
                var4 = _closure1_slot19;
                var3 = var4.can;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 89;
                var6 = var6[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var6);
                var2 = var2.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                var2 = var3.bind(var4)(var2, var5);
                var1['canModerateStage'] = var2;
                return var1;
            };
            var7 = var14.bind(var15)(var13, var7);
            var41 = var7.canManageChannel;
            var40 = var7.canCreateInstantInvite;
            var39 = var7.canConnect;
            var31 = var7.canModerateStage;
            var7 = 90;
            var7 = var12[var7];
            var13 = var11.bind(var4)(var7);
            var12 = var13.useOptInEnabledForGuild;
            var7 = null;
            var11 = var6;
            if(!(var7 == var6)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var11 = _closure1_slot30;
case 15:
            var30 = var12.bind(var13)(var11);
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = var13[var3];
            var16 = var12.bind(var4)(var11);
            var15 = var16.useStateFromStoresObject;
            var11 = _closure1_slot22;
            var14 = new Array(1);
            var14[0] = var11;
            var11 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var8 = _closure1_slot22;
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
                    var9 = _closure1_slot22;
                    var8 = var9.isChannelOptedIn;
                    var6 = _closure2_slot2;
                    var5 = _closure2_slot0;
                    var5 = var5.parent_id;
                    var4 = var8.bind(var9)(var6, var5);
case 17:
                    var1['isParentOptedIn'] = var4;
                    var5 = _closure1_slot22;
                    var4 = var5.isFavorite;
                    var6 = _closure2_slot2;
                    if(!(var7 == var6)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var3 = _closure1_slot32;
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
            var11 = var15.bind(var16)(var14, var11);
            var29 = var11.isOptedIn;
            var28 = var11.isParentOptedIn;
            var27 = var11.isPinned;
            var11 = 91;
            var11 = var13[var11];
            var13 = var12.bind(var4)(var11);
            var12 = var13.useCanPinChannelsInGuild;
            var11 = var6;
            if(!(var7 == var11)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var11 = _closure1_slot30;
case 22:
            var11 = var12.bind(var13)(var11);
            var26 = var11.canPin;
            var11 = var11.pinningNewlyAvailable;
            if(var27) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            if(!var11) { _fun0002_ip = 24; continue _fun0002 }
case 26:
            var11 = var17.isThread;
            var11 = var11.bind(var17)();
            if(var11) { _fun0002_ip = 24; continue _fun0002 }
case 27:
            var11 = var17.isCategory;
            var11 = var11.bind(var17)();
            if(var11) { _fun0002_ip = 24; continue _fun0002 }
case 28:
            if(!(var7 != var6)) { _fun0002_ip = 24; continue _fun0002 }
case 29:
            if(var10) { _fun0002_ip = 24; continue _fun0002 }
case 30:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 92;
            var6 = var12[var6];
            var6 = var11.bind(var4)(var6);
            var6 = var6.DismissibleContent;
            var6 = var6.PIN_CHANNEL_NEW_BADGE;
            var14 = new Array(1);
            var14[0] = var6;
            _fun0002_ip = 31; continue _fun0002;
case 24:
            var14 = new Array(0);
case 31:
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 93;
            var6 = var13[var6];
            var12 = var11.bind(var4)(var6);
            var6 = var12.useSelectedDismissibleContent;
            var14 = var6.bind(var12)(var14);
            var12 = _closure1_slot3;
            var6 = 2;
            var6 = var12.bind(var4)(var14, var6);
            var12 = 0;
            var25 = var6[var12];
            var18 = 1;
            var23 = var6[var18];
            var6 = 92;
            var6 = var13[var6];
            var6 = var11.bind(var4)(var6);
            var6 = var6.DismissibleContent;
            var24 = var6.PIN_CHANNEL_NEW_BADGE;
            var6 = var13[var3];
            var15 = var11.bind(var4)(var6);
            var14 = var15.useStateFromStores;
            var6 = _closure1_slot22;
            var12 = new Array(1);
            var12[0] = var6;
            var6 = function() {
                var4 = _closure1_slot22;
                var3 = var4.isChannelMuted;
                var2 = _closure2_slot2;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var38 = var14.bind(var15)(var12, var6);
            var6 = var13[var3];
            var15 = var11.bind(var4)(var6);
            var14 = var15.useStateFromStores;
            var6 = _closure1_slot10;
            var12 = new Array(1);
            var12[0] = var6;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var5 = _closure1_slot10;
                    var4 = var5.hasThreadsForChannel;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 32:
                    return var1;
                }
            };
            var36 = var14.bind(var15)(var12, var6);
            var6 = var13[var3];
            var15 = var11.bind(var4)(var6);
            var14 = var15.useStateFromStores;
            var6 = _closure1_slot15;
            var12 = new Array(1);
            var12[0] = var6;
            var6 = function() {
                var3 = _closure1_slot15;
                var2 = var3.isCollapsed;
                var1 = _closure2_slot0;
                var1 = var1.parent_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var34 = var14.bind(var15)(var12, var6);
            var6 = var13[var3];
            var15 = var11.bind(var4)(var6);
            var14 = var15.useStateFromStores;
            var6 = _closure1_slot17;
            var12 = new Array(1);
            var12[0] = var6;
            var6 = function() {
                var3 = _closure1_slot17;
                var2 = var3.isCollapsed;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var33 = var14.bind(var15)(var12, var6);
            var6 = var13[var3];
            var15 = var11.bind(var4)(var6);
            var14 = var15.useStateFromStores;
            var6 = _closure1_slot9;
            var12 = new Array(1);
            var12[0] = var6;
            var6 = function() {
                var3 = _closure1_slot9;
                var2 = var3.isLive;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var32 = var14.bind(var15)(var12, var6);
            var15 = _closure1_slot1;
            var6 = 33;
            var6 = var13[var6];
            var6 = var15.bind(var4)(var6);
            var12 = true;
            var14 = var6.bind(var4)(var17, var12);
            var6 = 94;
            var6 = var13[var6];
            var6 = var15.bind(var4)(var6);
            var35 = var6.bind(var4)(var17);
            var6 = 95;
            var6 = var13[var6];
            var6 = var11.bind(var4)(var6);
            var11 = var6.DeveloperMode;
            var6 = var11.useSetting;
            var11 = var6.bind(var11)();
            _closure2_slot3 = var11;
            if(!(var7 == var20)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var15 = _closure1_slot35;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var16 = 27;
            var6 = var21[var16];
            var6 = var19.bind(var4)(var6);
            var13 = var6.Avatar;
            var6 = {};
            var16 = var21[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.AvatarSizes;
            var16 = var16.LARGE;
            var6['size'] = var16;
            var6['channel'] = var17;
            var15 = var15.bind(var4)(var13, var6);
            _fun0002_ip = 36; continue _fun0002;
case 34:
            var16 = _closure1_slot35;
            var13 = _closure1_slot1;
            var21 = _closure1_slot2;
            var19 = 96;
            var6 = var21[var19];
            var13 = var13.bind(var4)(var6);
            var6 = {};
            var6['guild'] = var20;
            var20 = _closure1_slot0;
            var19 = var21[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.GuildIconSizes;
            var19 = var19.LARGE;
            var6['size'] = var19;
            var15 = var16.bind(var4)(var13, var6);
case 36:
            var13 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var3];
            var19 = var13.bind(var4)(var6);
            var16 = var19.useStateFromStores;
            var6 = _closure1_slot23;
            var13 = new Array(1);
            var13[0] = var6;
            var6 = function() {
                var2 = _closure1_slot23;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var16.bind(var19)(var13, var6);
            var37 = var7 != var13;
            if(!var37) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var16 = var17.isOwner;
            var6 = var13.id;
            var37 = var16.bind(var17)(var6);
case 37:
            var16 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = var19[var3];
            var22 = var16.bind(var4)(var6);
            var21 = var22.useStateFromStores;
            var6 = _closure1_slot22;
            var20 = new Array(1);
            var20[0] = var6;
            var6 = function() {
                var3 = _closure1_slot22;
                var2 = var3.isMessagesFavorite;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var22 = var21.bind(var22)(var20, var6);
            var6 = 97;
            var6 = var19[var6];
            var16 = var16.bind(var4)(var6);
            var6 = var16.useInappropriateConversationsTiers;
            var16 = var6.bind(var16)(var17);
            var19 = var7 == var16;
            var6 = undefined;
            if(var19) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var6 = var16.isTier1;
case 39:
            var21 = var7 != var6;
            if(!var21) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var6 = var7 != var16;
            if(!var6) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var6 = var16.isTier1;
case 43:
            var21 = !var6;
case 41:
            var19 = var7 == var16;
            var6 = undefined;
            if(var19) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var6 = var16.isTier2;
case 45:
            var20 = var7 != var6;
            if(!var20) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var6 = var7 != var16;
            if(!var6) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var6 = var16.isTier2;
case 49:
            var20 = !var6;
case 47:
            var6 = _closure1_slot0;
            var42 = _closure1_slot2;
            var16 = var42[var3];
            var44 = var6.bind(var4)(var16);
            var43 = var44.useStateFromStores;
            var16 = _closure1_slot6;
            var19 = new Array(1);
            var19[0] = var16;
            var16 = function() {
                var3 = _closure1_slot6;
                var2 = var3.isChannelNudged;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var43.bind(var44)(var19, var16);
            var3 = var42[var3];
            var43 = var6.bind(var4)(var3);
            var16 = var43.useStateFromStores;
            var3 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot8;
                var2 = var3.didAgree;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var16.bind(var43)(var6, var3);
            var6 = _closure1_slot1;
            var3 = 98;
            var3 = var42[var3];
            var6 = var6.bind(var4)(var3);
            var3 = 'ChannelLongPressActionSheet';
            var3 = var6.bind(var4)(var17, var3);
            var6 = {};
            var6['channel'] = var17;
            var6['canManageChannel'] = var41;
            var6['canCreateInstantInvite'] = var40;
            var6['canConnect'] = var39;
            var6['developerMode'] = var11;
            var6['isMuted'] = var38;
            var6['isOwner'] = var37;
            var6['hasThreads'] = var36;
            var6['isNsfwGated'] = var35;
            var6['isInCollapsedCategory'] = var34;
            var6['isCollapsedVoiceChannel'] = var33;
            var6['isLiveStageChannel'] = var32;
            var6['canModerateStage'] = var31;
            var6['isOptInEnabled'] = var30;
            var6['isOptedIn'] = var29;
            var6['isParentOptedIn'] = var28;
            var6['isPinned'] = var27;
            var6['canPin'] = var26;
            var24 = var25 === var24;
            var6['pinDCShowNewBadge'] = var24;
            var6['pinDCMarkAsDismissed'] = var23;
            var6['isMessagesFavorited'] = var22;
            var6['canMarkAsTier1InappropriateConversation'] = var21;
            var6['canMarkAsTier2InappropriateConversation'] = var20;
            var6['isReplyNudged'] = var19;
            var6['isSpoilerAgreed'] = var16;
            var6['analyticsLocations'] = var5;
            var6['isFavoritesGuild'] = var10;
            var10 = var7 == var13;
            var7 = undefined;
            if(var10) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var10 = var13.isStaff;
            var7 = var10.bind(var13)();
case 51:
            var7 = var12 === var7;
            var6['isStaff'] = var7;
            var6['favorites'] = var3;
            var3 = function getActionSheetButtons(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var14 = var1.channel;
                    var _closure3_slot0 = var14;
                    var7 = var1.canManageChannel;
                    var27 = var1.canCreateInstantInvite;
                    var13 = var1.canConnect;
                    var2 = var1.developerMode;
                    var23 = var1.isMuted;
                    var _closure3_slot1 = var23;
                    var4 = var1.isOwner;
                    var20 = var1.hasThreads;
                    var18 = var1.isNsfwGated;
                    var17 = var1.isInCollapsedCategory;
                    var19 = var1.isCollapsedVoiceChannel;
                    var15 = var1.isLiveStageChannel;
                    var16 = var1.canModerateStage;
                    var26 = var1.isOptInEnabled;
                    var35 = var1.isOptedIn;
                    var _closure3_slot2 = var35;
                    var36 = var1.isParentOptedIn;
                    var31 = var1.isPinned;
                    var _closure3_slot3 = var31;
                    var30 = var1.canPin;
                    var32 = var1.pinDCShowNewBadge;
                    var _closure3_slot4 = var32;
                    var3 = var1.pinDCMarkAsDismissed;
                    var _closure3_slot5 = var3;
                    var28 = var1.isMessagesFavorited;
                    var _closure3_slot6 = var28;
                    var25 = var1.canMarkAsTier1InappropriateConversation;
                    var22 = var1.canMarkAsTier2InappropriateConversation;
                    var21 = var1.isReplyNudged;
                    var6 = var1.isSpoilerAgreed;
                    var3 = var1.analyticsLocations;
                    var _closure3_slot7 = var3;
                    var24 = var1.isFavoritesGuild;
                    var8 = var1.isStaff;
                    var29 = var1.favorites;
                    var12 = undefined;
                    var _closure3_slot8 = var12;
                    var1 = new Array(0);
                    var11 = {};
                    var3 = 'dm';
                    var11['sectionKey'] = var3;
                    var3 = new Array(0);
                    var11['buttons'] = var3;
                    var3 = var14.isDM;
                    var3 = var3.bind(var14)();
                    if(!var3) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                    var10 = var11.buttons;
                    var5 = var10.push;
                    var3 = {};
                    var38 = _closure1_slot0;
                    var39 = _closure1_slot2;
                    var33 = 28;
                    var34 = var39[var33];
                    var34 = var38.bind(var12)(var34);
                    var41 = var34.intl;
                    var40 = var41.string;
                    var34 = var39[var33];
                    var34 = var38.bind(var12)(var34);
                    var34 = var34.t;
                    var34 = var34.LYju5J;
                    var34 = var40.bind(var41)(var34);
                    var3['label'] = var34;
                    var34 = 29;
                    var34 = var39[var34];
                    var34 = var38.bind(var12)(var34);
                    var34 = var34.UserCircleIcon;
                    var3['IconComponent'] = var34;
                    var34 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 30;
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
                        var4 = _closure3_slot7;
                        var2['sourceAnalyticsLocations'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3['onPress'] = var34;
                    var3 = var5.bind(var10)(var3);
                    if(var24) { _fun0005_ip = 53; continue _fun0005 }
case 55:
                    var10 = var11.buttons;
                    var5 = var10.push;
                    var3 = {};
                    var34 = _closure1_slot0;
                    var37 = _closure1_slot2;
                    var38 = var37[var33];
                    var38 = var34.bind(var12)(var38);
                    var39 = var38.intl;
                    var38 = var39.string;
                    var33 = var37[var33];
                    var33 = var34.bind(var12)(var33);
                    var33 = var33.t;
                    var33 = var33.jsvgc3;
                    var33 = var38.bind(var39)(var33);
                    var3['label'] = var33;
                    var33 = 31;
                    var33 = var37[var33];
                    var33 = var34.bind(var12)(var33);
                    var33 = var33.UserMinusIcon;
                    var3['IconComponent'] = var33;
                    var33 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 32;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.closePrivateChannel;
                        var2 = _closure3_slot0;
                        var3 = var2.id;
                        var7 = _closure1_slot21;
                        var6 = var7.getCurrentlySelectedChannelId;
                        var6 = var6.bind(var7)();
                        var2 = var2.id;
                        var2 = var6 === var2;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var3['onPress'] = var33;
                    var3 = var5.bind(var10)(var3);
case 53:
                    var5 = {};
                    var3 = 'gdm';
                    var5['sectionKey'] = var3;
                    var3 = new Array(0);
                    var5['buttons'] = var3;
                    var3 = {};
                    var10 = 'gdm-destructive';
                    var3['sectionKey'] = var10;
                    var10 = new Array(0);
                    var3['buttons'] = var10;
                    var10 = var14.isGroupDM;
                    var10 = var10.bind(var14)();
                    if(!var10) { _fun0005_ip = 34; continue _fun0005 }
case 56:
                    if(var24) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                    var34 = var3.buttons;
                    var33 = var34.push;
                    var10 = {};
                    var38 = _closure1_slot0;
                    var39 = _closure1_slot2;
                    var37 = 28;
                    var40 = var39[var37];
                    var40 = var38.bind(var12)(var40);
                    var41 = var40.intl;
                    var40 = var41.string;
                    var37 = var39[var37];
                    var37 = var38.bind(var12)(var37);
                    var37 = var37.t;
                    var37 = var37["26C4oi"];
                    var37 = var40.bind(var41)(var37);
                    var10['label'] = var37;
                    var37 = 31;
                    var37 = var39[var37];
                    var37 = var38.bind(var12)(var37);
                    var37 = var37.UserMinusIcon;
                    var10['IconComponent'] = var37;
                    var37 = true;
                    var10['isDestructive'] = var37;
                    var37 = function onPress() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 33;
                            var4 = var2[var1];
                            var1 = undefined;
                            var9 = var3.bind(var1)(var4);
                            var8 = var9.computeChannelName;
                            var5 = _closure3_slot0;
                            var7 = _closure1_slot23;
                            var4 = _closure1_slot20;
                            var11 = var8.bind(var9)(var5, var7, var4);
                            var9 = 28;
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
                            if(!var2) { _fun0006_ip = 59; continue _fun0006 }
case 60:
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
case 59:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 34;
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
                                var1 = 32;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var3.bind(var1)(var2);
                                var4 = var5.closePrivateChannel;
                                var2 = _closure3_slot0;
                                var3 = var2.id;
                                var7 = _closure1_slot21;
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
                    var10['onPress'] = var37;
                    var10 = var33.bind(var34)(var10);
case 57:
                    var37 = var5.buttons;
                    var33 = var37.push;
                    var10 = {};
                    var40 = _closure1_slot0;
                    var41 = _closure1_slot2;
                    var34 = 28;
                    var39 = var41[var34];
                    var39 = var40.bind(var12)(var39);
                    var43 = var39.intl;
                    var42 = var43.string;
                    var39 = var41[var34];
                    var39 = var40.bind(var12)(var39);
                    var39 = var39.t;
                    var39 = var39["1r5E+m"];
                    var39 = var42.bind(var43)(var39);
                    var10['label'] = var39;
                    var39 = 35;
                    var39 = var41[var39];
                    var39 = var40.bind(var12)(var39);
                    var39 = var39.PencilIcon;
                    var10['IconComponent'] = var39;
                    var39 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 36;
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
                    var10['onPress'] = var39;
                    var10 = var33.bind(var37)(var10);
                    if(!var4) { _fun0005_ip = 34; continue _fun0005 }
case 61:
                    var33 = var5.buttons;
                    var10 = var33.push;
                    var4 = {};
                    var37 = _closure1_slot0;
                    var38 = _closure1_slot2;
                    var39 = var38[var34];
                    var39 = var37.bind(var12)(var39);
                    var40 = var39.intl;
                    var39 = var40.string;
                    var34 = var38[var34];
                    var34 = var37.bind(var12)(var34);
                    var34 = var34.t;
                    var34 = var34.OQ9MKu;
                    var34 = var39.bind(var40)(var34);
                    var4['label'] = var34;
                    var34 = 37;
                    var34 = var38[var34];
                    var34 = var37.bind(var12)(var34);
                    var34 = var34.LinkIcon;
                    var4['IconComponent'] = var34;
                    var34 = function onPress() {
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 38;
                        var4 = var2[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.pushLazy;
                        var6 = _closure1_slot0;
                        var3 = 23;
                        var3 = var2[var3];
                        var6 = var6.bind(var1)(var3);
                        var3 = 39;
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
                    var4['onPress'] = var34;
                    var4 = var10.bind(var33)(var4);
case 34:
                    var4 = var11.buttons;
                    var10 = var4.length;
                    var4 = 0;
                    if(!(var10 > var4)) { _fun0005_ip = 62; continue _fun0005 }
case 63:
                    var10 = var1.push;
                    var10 = var10.bind(var1)(var11);
case 62:
                    var10 = var24;
                    if(!var24) { _fun0005_ip = 64; continue _fun0005 }
case 65:
                    var33 = var14.guild_id;
                    var11 = null;
                    var10 = var11 != var33;
case 64:
                    if(!var10) { _fun0005_ip = 66; continue _fun0005 }
case 67:
                    var11 = var14.isCategory;
                    var11 = var11.bind(var14)();
                    var10 = !var11;
case 66:
                    if(!var10) { _fun0005_ip = 68; continue _fun0005 }
case 69:
                    var11 = var1.push;
                    var10 = {};
                    var33 = 'go-to-server';
                    var10['sectionKey'] = var33;
                    var34 = {};
                    var37 = _closure1_slot0;
                    var38 = _closure1_slot2;
                    var39 = 28;
                    var39 = var38[var39];
                    var39 = var37.bind(var12)(var39);
                    var40 = var39.intl;
                    var39 = var40.string;
                    var41 = _closure1_slot1;
                    var33 = 40;
                    var33 = var38[var33];
                    var33 = var41.bind(var12)(var33);
                    var33 = var33["3KruG3"];
                    var33 = var39.bind(var40)(var33);
                    var34['label'] = var33;
                    var33 = 41;
                    var33 = var38[var33];
                    var33 = var37.bind(var12)(var33);
                    var33 = var33.ServerIcon;
                    var34['IconComponent'] = var33;
                    var33 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 42;
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
                    var34['onPress'] = var33;
                    var33 = new Array(1);
                    var33[0] = var34;
                    var10['buttons'] = var33;
                    var10 = var11.bind(var1)(var10);
case 68:
                    var33 = _closure1_slot1;
                    var34 = _closure1_slot2;
                    var11 = 43;
                    var11 = var34[var11];
                    var11 = var33.bind(var12)(var11);
                    var37 = var11.bind(var12)(var29);
                    var33 = null;
                    if(!(var33 != var37)) { _fun0005_ip = 70; continue _fun0005 }
case 71:
                    var29 = var1.push;
                    var11 = {};
                    var34 = 'favorites';
                    var11['sectionKey'] = var34;
                    var34 = new Array(1);
                    var34[0] = var37;
                    var11['buttons'] = var34;
                    var11 = var29.bind(var1)(var11);
case 70:
                    var11 = var14.getGuildId;
                    var29 = var11.bind(var14)();
                    _closure3_slot8 = var29;
                    var11 = {};
                    var34 = 'channel-actions';
                    var11['sectionKey'] = var34;
                    var34 = new Array(0);
                    var11['buttons'] = var34;
                    if(!var27) { _fun0005_ip = 72; continue _fun0005 }
case 73:
                    var37 = var14.type;
                    var34 = _closure1_slot28;
                    var34 = var34.GUILD_CATEGORY;
                    var27 = var37 !== var34;
case 72:
                    if(!var27) { _fun0005_ip = 74; continue _fun0005 }
case 75:
                    var37 = var11.buttons;
                    var34 = var37.push;
                    var27 = {};
                    var39 = _closure1_slot0;
                    var40 = _closure1_slot2;
                    var38 = 28;
                    var41 = var40[var38];
                    var41 = var39.bind(var12)(var41);
                    var42 = var41.intl;
                    var41 = var42.string;
                    var38 = var40[var38];
                    var38 = var39.bind(var12)(var38);
                    var38 = var38.t;
                    var38 = var38.VINpSK;
                    var38 = var41.bind(var42)(var38);
                    var27['label'] = var38;
                    var38 = 44;
                    var38 = var40[var38];
                    var38 = var39.bind(var12)(var38);
                    var38 = var38.GroupPlusIcon;
                    var27['IconComponent'] = var38;
                    var38 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 45;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.showInstantInviteActionSheet;
                        var3 = _closure3_slot0;
                        var2 = {};
                        var6 = _closure1_slot29;
                        var6 = var6.CONTEXT_MENU;
                        var2['source'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var27['onPress'] = var38;
                    var27 = var34.bind(var37)(var27);
case 74:
                    var27 = var24;
                    if(var27) { _fun0005_ip = 76; continue _fun0005 }
case 77:
                    var27 = var33 == var29;
case 76:
                    if(var27) { _fun0005_ip = 78; continue _fun0005 }
case 79:
                    var29 = var14.isThread;
                    var27 = var29.bind(var14)();
case 78:
                    if(var27) { _fun0005_ip = 80; continue _fun0005 }
case 81:
                    var27 = var14.isCategory;
                    var27 = var27.bind(var14)();
                    if(var27) { _fun0005_ip = 82; continue _fun0005 }
case 83:
                    var29 = !var31;
                    if(!var29) { _fun0005_ip = 84; continue _fun0005 }
case 85:
                    var29 = !var30;
case 84:
                    var27 = var29;
case 82:
                    if(var27) { _fun0005_ip = 86; continue _fun0005 }
case 87:
                    var30 = var11.buttons;
                    var29 = var30.push;
                    var27 = {};
                    var38 = _closure1_slot0;
                    var39 = _closure1_slot2;
                    var33 = 28;
                    var34 = var39[var33];
                    var34 = var38.bind(var12)(var34);
                    var37 = var34.intl;
                    var34 = var37.string;
                    var33 = var39[var33];
                    var33 = var38.bind(var12)(var33);
                    var33 = var33.t;
                    if(var31) { _fun0005_ip = 88; continue _fun0005 }
case 89:
                    var31 = var33.RMpwZu;
                    var31 = var34.bind(var37)(var31);
                    _fun0005_ip = 90; continue _fun0005;
case 88:
                    var33 = var33.M5PWSf;
                    var31 = var34.bind(var37)(var33);
case 90:
                    var27['label'] = var31;
                    var33 = _closure1_slot0;
                    var34 = _closure1_slot2;
                    var31 = 46;
                    var31 = var34[var31];
                    var31 = var33.bind(var12)(var31);
                    var31 = var31.PinIcon;
                    var27['IconComponent'] = var31;
                    var31 = undefined;
                    if(!var32) { _fun0005_ip = 91; continue _fun0005 }
case 92:
                    var34 = _closure1_slot35;
                    var33 = _closure1_slot39;
                    var32 = {};
                    var31 = var34.bind(var12)(var33, var32);
case 91:
                    var27['trailing'] = var31;
                    var31 = function onPress() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var1 = _closure3_slot4;
                            if(!var1) { _fun0007_ip = 93; continue _fun0007 }
case 94:
                            var3 = _closure3_slot5;
                            var1 = _closure1_slot33;
                            var2 = var1.TAKE_ACTION;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
case 93:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 47;
                            var3 = var3[var1];
                            var1 = undefined;
                            var10 = var4.bind(var1)(var3);
                            var9 = var10.setIsFavorite;
                            var15 = _closure3_slot8;
                            var3 = _closure3_slot0;
                            var14 = var3.id;
                            var3 = _closure3_slot3;
                            var13 = !var3;
                            var4 = {};
                            var11 = _closure1_slot26;
                            var11 = var11.CHANNEL_ACTION_SHEET;
                            var4['section'] = var11;
                            var16 = var10;
                            var12 = var4;
                            var4 = var16[var9](var15, var14, var13, var12, var11);
                            if(var3) { _fun0007_ip = 95; continue _fun0007 }
case 96:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 48;
                            var2 = var4[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getRootNavigationRef;
                            var4 = var2.bind(var3)();
                            var6 = null;
                            if(!(var6 != var4)) { _fun0007_ip = 95; continue _fun0007 }
case 97:
                            var2 = var4.getCurrentRoute;
                            var2 = var2.bind(var4)();
                            var3 = var6 == var2;
                            var7 = undefined;
                            if(var3) { _fun0007_ip = 98; continue _fun0007 }
case 99:
                            var7 = var2.name;
case 98:
                            var2 = var4.getCurrentRoute;
                            var2 = var2.bind(var4)();
                            var8 = var6 == var2;
                            var3 = undefined;
                            if(var8) { _fun0007_ip = 100; continue _fun0007 }
case 101:
                            var3 = var2.params;
case 100:
                            var2 = 'guilds';
                            var2 = var2 === var7;
                            if(!var2) { _fun0007_ip = 102; continue _fun0007 }
case 103:
                            var7 = var6 == var3;
                            var6 = undefined;
                            if(var7) { _fun0007_ip = 104; continue _fun0007 }
case 105:
                            var6 = var3.guildId;
case 104:
                            var3 = _closure3_slot8;
                            var2 = var6 === var3;
case 102:
                            if(!var2) { _fun0007_ip = 95; continue _fun0007 }
case 106:
                            var3 = var4.setParams;
                            var2 = {};
                            var5 = _closure3_slot0;
                            var5 = var5.id;
                            var2['jumpToChannelId'] = var5;
                            var2 = var3.bind(var4)(var2);
case 95:
                            return var1;
                        }
                    };
                    var27['onPress'] = var31;
                    var27 = var29.bind(var30)(var27);
case 86:
                    if(!var26) { _fun0005_ip = 80; continue _fun0005 }
case 107:
                    var29 = var11.buttons;
                    var27 = var29.push;
                    var26 = {};
                    var31 = _closure1_slot0;
                    var32 = _closure1_slot2;
                    var30 = 28;
                    var33 = var32[var30];
                    var33 = var31.bind(var12)(var33);
                    var34 = var33.intl;
                    var33 = var34.string;
                    var30 = var32[var30];
                    var30 = var31.bind(var12)(var30);
                    var30 = var30.t;
                    if(var36) { _fun0005_ip = 108; continue _fun0005 }
case 109:
                    if(var35) { _fun0005_ip = 110; continue _fun0005 }
case 111:
                    var36 = var30["9mysCh"];
                    var36 = var33.bind(var34)(var36);
                    _fun0005_ip = 112; continue _fun0005;
case 110:
                    var37 = var30["3zySTA"];
                    var36 = var33.bind(var34)(var37);
case 112:
                    var26['label'] = var36;
                    var37 = _closure1_slot0;
                    var38 = _closure1_slot2;
                    if(var35) { _fun0005_ip = 113; continue _fun0005 }
case 114:
                    var35 = 50;
                    var35 = var38[var35];
                    var35 = var37.bind(var12)(var35);
                    var35 = var35.PlusLargeIcon;
                    _fun0005_ip = 115; continue _fun0005;
case 113:
                    var36 = 49;
                    var36 = var38[var36];
                    var36 = var37.bind(var12)(var36);
                    var35 = var36.XSmallIcon;
case 115:
                    var26['IconComponent'] = var35;
                    var35 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 47;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var6 = var7.setOptInChannel;
                        var12 = _closure3_slot8;
                        var3 = _closure3_slot0;
                        var11 = var3.id;
                        var2 = _closure3_slot2;
                        var10 = !var2;
                        var2 = {};
                        var8 = _closure1_slot26;
                        var8 = var8.CHANNEL_ACTION_SHEET;
                        var2['section'] = var8;
                        var13 = var7;
                        var9 = var2;
                        var2 = var13[var6](var12, var11, var10, var9, var8);
                        return var1;
                    };
                    var26['onPress'] = var35;
                    var35 = var27.bind(var29)(var26);
                    _fun0005_ip = 80; continue _fun0005;
case 108:
                    var30 = var30.jNphKT;
                    var30 = var33.bind(var34)(var30);
                    var26['label'] = var30;
                    var30 = 49;
                    var30 = var32[var30];
                    var30 = var31.bind(var12)(var30);
                    var30 = var30.XSmallIcon;
                    var26['IconComponent'] = var30;
                    var30 = function onPress() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var3 = var1.parent_id;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0008_ip = 116; continue _fun0008 }
case 117:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 47;
                            var4 = var4[var3];
                            var3 = undefined;
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.setOptInChannel;
                            var10 = _closure3_slot8;
                            var2 = _closure3_slot0;
                            var9 = var2.parent_id;
                            var2 = {};
                            var1 = _closure1_slot26;
                            var1 = var1.CHANNEL_ACTION_SHEET;
                            var2['section'] = var1;
                            var8 = false;
                            var11 = var6;
                            var7 = var2;
                            var1 = var11[var5](var10, var9, var8, var7, var6);
case 116:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var26['onPress'] = var30;
                    var26 = var27.bind(var29)(var26);
case 80:
                    var27 = _closure1_slot11;
                    var26 = var14.type;
                    var26 = var27.bind(var12)(var26);
                    if(var26) { _fun0005_ip = 118; continue _fun0005 }
case 119:
                    var29 = _closure1_slot12;
                    var27 = var14.type;
                    var26 = var29.bind(var12)(var27);
case 118:
                    if(var26) { _fun0005_ip = 120; continue _fun0005 }
case 121:
                    var27 = var14.isForumLikeChannel;
                    var26 = var27.bind(var14)();
case 120:
                    if(!var26) { _fun0005_ip = 122; continue _fun0005 }
case 123:
                    var29 = var11.buttons;
                    var27 = var29.push;
                    var26 = {};
                    var31 = _closure1_slot0;
                    var32 = _closure1_slot2;
                    var30 = 28;
                    var33 = var32[var30];
                    var33 = var31.bind(var12)(var33);
                    var34 = var33.intl;
                    var33 = var34.string;
                    var30 = var32[var30];
                    var30 = var31.bind(var12)(var30);
                    var30 = var30.t;
                    var30 = var30.WqhZss;
                    var30 = var33.bind(var34)(var30);
                    var26['label'] = var30;
                    var30 = 37;
                    var30 = var32[var30];
                    var30 = var31.bind(var12)(var30);
                    var30 = var30.LinkIcon;
                    var26['IconComponent'] = var30;
                    var30 = false;
                    var26['isDestructive'] = var30;
                    var30 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 51;
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
                    var26['onPress'] = var30;
                    var26 = var27.bind(var29)(var26);
case 122:
                    var24 = !var24;
                    if(!var24) { _fun0005_ip = 124; continue _fun0005 }
case 125:
                    var26 = var14.isPrivate;
                    var24 = var26.bind(var14)();
case 124:
                    if(!var24) { _fun0005_ip = 126; continue _fun0005 }
case 127:
                    var27 = var11.buttons;
                    var26 = var27.push;
                    var24 = {};
                    var32 = _closure1_slot0;
                    var33 = _closure1_slot2;
                    var29 = 28;
                    var30 = var33[var29];
                    var30 = var32.bind(var12)(var30);
                    var31 = var30.intl;
                    var30 = var31.string;
                    var29 = var33[var29];
                    var29 = var32.bind(var12)(var29);
                    var29 = var29.t;
                    if(var28) { _fun0005_ip = 128; continue _fun0005 }
case 129:
                    var28 = var29.uKw3A+;
                    var28 = var30.bind(var31)(var28);
                    _fun0005_ip = 130; continue _fun0005;
case 128:
                    var29 = var29.vDYmad;
                    var28 = var30.bind(var31)(var29);
case 130:
                    var24['label'] = var28;
                    var29 = _closure1_slot0;
                    var30 = _closure1_slot2;
                    var28 = 46;
                    var28 = var30[var28];
                    var28 = var29.bind(var12)(var28);
                    var28 = var28.PinIcon;
                    var24['IconComponent'] = var28;
                    var28 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 47;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.setMessagesFavorite;
                        var3 = _closure3_slot0;
                        var3 = var3.id;
                        var2 = _closure3_slot6;
                        var2 = !var2;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var24['onPress'] = var28;
                    var24 = var26.bind(var27)(var24);
case 126:
                    var24 = {};
                    var26 = 'safety-warning-tooling';
                    var24['sectionKey'] = var26;
                    var26 = new Array(0);
                    var24['buttons'] = var26;
                    if(!var25) { _fun0005_ip = 131; continue _fun0005 }
case 132:
                    var27 = var24.buttons;
                    var26 = var27.push;
                    var25 = {};
                    var29 = _closure1_slot0;
                    var30 = _closure1_slot2;
                    var28 = 28;
                    var31 = var30[var28];
                    var31 = var29.bind(var12)(var31);
                    var32 = var31.intl;
                    var31 = var32.string;
                    var28 = var30[var28];
                    var28 = var29.bind(var12)(var28);
                    var28 = var28.t;
                    var28 = var28.EuzCET;
                    var28 = var31.bind(var32)(var28);
                    var25['label'] = var28;
                    var28 = 52;
                    var28 = var30[var28];
                    var28 = var29.bind(var12)(var28);
                    var28 = var28.WarningIcon;
                    var25['IconComponent'] = var28;
                    var28 = function onPress() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 53;
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
                    var25['onPress'] = var28;
                    var25 = var26.bind(var27)(var25);
case 131:
                    if(!var22) { _fun0005_ip = 133; continue _fun0005 }
case 134:
                    var26 = var24.buttons;
                    var25 = var26.push;
                    var22 = {};
                    var28 = _closure1_slot0;
                    var29 = _closure1_slot2;
                    var27 = 28;
                    var30 = var29[var27];
                    var30 = var28.bind(var12)(var30);
                    var31 = var30.intl;
                    var30 = var31.string;
                    var27 = var29[var27];
                    var27 = var28.bind(var12)(var27);
                    var27 = var27.t;
                    var27 = var27.tBw/1i;
                    var27 = var30.bind(var31)(var27);
                    var22['label'] = var27;
                    var27 = 52;
                    var27 = var29[var27];
                    var27 = var28.bind(var12)(var27);
                    var27 = var27.WarningIcon;
                    var22['IconComponent'] = var27;
                    var27 = function onPress() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 53;
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
                    var22['onPress'] = var27;
                    var22 = var25.bind(var26)(var22);
case 133:
                    var22 = var24.buttons;
                    var22 = var22.length;
                    if(!(var22 > var4)) { _fun0005_ip = 135; continue _fun0005 }
case 136:
                    var22 = var1.push;
                    var22 = var22.bind(var1)(var24);
case 135:
                    if(!var8) { _fun0005_ip = 137; continue _fun0005 }
case 138:
                    if(!var2) { _fun0005_ip = 137; continue _fun0005 }
case 139:
                    var8 = var14.isDM;
                    var8 = var8.bind(var14)();
                    if(!var8) { _fun0005_ip = 137; continue _fun0005 }
case 140:
                    var22 = {};
                    var8 = 'message-request';
                    var22['sectionKey'] = var8;
                    var8 = new Array(0);
                    var22['buttons'] = var8;
                    var24 = var14.isMessageRequest;
                    var8 = true;
                    if(!(var8 !== var24)) { _fun0005_ip = 141; continue _fun0005 }
case 142:
                    var25 = var22.buttons;
                    var24 = var25.push;
                    var8 = {};
                    var27 = _closure1_slot0;
                    var28 = _closure1_slot2;
                    var26 = 28;
                    var29 = var28[var26];
                    var29 = var27.bind(var12)(var29);
                    var30 = var29.intl;
                    var29 = var30.string;
                    var26 = var28[var26];
                    var26 = var27.bind(var12)(var26);
                    var26 = var26.t;
                    var26 = var26.L6623r;
                    var26 = var29.bind(var30)(var26);
                    var8['label'] = var26;
                    var26 = 54;
                    var26 = var28[var26];
                    var26 = var27.bind(var12)(var26);
                    var26 = var26.InboxIcon;
                    var8['IconComponent'] = var26;
                    var26 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 55;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.markAsMessageRequest;
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var8['onPress'] = var26;
                    var8 = var24.bind(var25)(var8);
case 141:
                    var25 = var22.buttons;
                    var24 = var25.push;
                    var8 = {};
                    var27 = _closure1_slot0;
                    var28 = _closure1_slot2;
                    var26 = 28;
                    var29 = var28[var26];
                    var29 = var27.bind(var12)(var29);
                    var30 = var29.intl;
                    var29 = var30.string;
                    var26 = var28[var26];
                    var26 = var27.bind(var12)(var26);
                    var26 = var26.t;
                    var26 = var26["85YWlY"];
                    var26 = var29.bind(var30)(var26);
                    var8['label'] = var26;
                    var26 = 54;
                    var26 = var28[var26];
                    var26 = var27.bind(var12)(var26);
                    var26 = var26.InboxIcon;
                    var8['IconComponent'] = var26;
                    var26 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 55;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.clearMessageRequestState;
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var8['onPress'] = var26;
                    var8 = var24.bind(var25)(var8);
                    var8 = var22.buttons;
                    var8 = var8.length;
                    if(!(var8 > var4)) { _fun0005_ip = 137; continue _fun0005 }
case 143:
                    var8 = var1.push;
                    var8 = var8.bind(var1)(var22);
case 137:
                    var8 = var11.buttons;
                    var8 = var8.length;
                    if(!(var8 > var4)) { _fun0005_ip = 144; continue _fun0005 }
case 145:
                    var8 = var1.push;
                    var8 = var8.bind(var1)(var11);
case 144:
                    var11 = {};
                    var8 = 'notifications';
                    var11['sectionKey'] = var8;
                    var8 = new Array(0);
                    var11['buttons'] = var8;
                    var22 = _closure1_slot13;
                    var8 = var14.type;
                    var8 = var22.bind(var12)(var8);
                    if(var8) { _fun0005_ip = 146; continue _fun0005 }
case 147:
                    var22 = var14.isCategory;
                    var8 = var22.bind(var14)();
case 146:
                    if(var8) { _fun0005_ip = 148; continue _fun0005 }
case 149:
                    var22 = var14.isForumLikeChannel;
                    var8 = var22.bind(var14)();
case 148:
                    if(!var8) { _fun0005_ip = 150; continue _fun0005 }
case 151:
                    var24 = var11.buttons;
                    var22 = var24.push;
                    var8 = {};
                    var26 = _closure1_slot0;
                    var27 = _closure1_slot2;
                    var25 = 28;
                    var28 = var27[var25];
                    var28 = var26.bind(var12)(var28);
                    var29 = var28.intl;
                    var28 = var29.string;
                    var25 = var27[var25];
                    var25 = var26.bind(var12)(var25);
                    var25 = var25.t;
                    var25 = var25.e6RscS;
                    var25 = var28.bind(var29)(var25);
                    var8['label'] = var25;
                    var25 = 56;
                    var25 = var27[var25];
                    var25 = var26.bind(var12)(var25);
                    var25 = var25.EyeIcon;
                    var8['IconComponent'] = var25;
                    var25 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 57;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.ackChannel;
                        var3 = _closure3_slot0;
                        var2 = {};
                        var7 = _closure1_slot26;
                        var7 = var7.CHANNEL_ACTION_SHEET;
                        var2['section'] = var7;
                        var7 = _closure1_slot25;
                        var7 = var7.MARK_CHANNEL_AS_READ_BUTTON;
                        var2['object'] = var7;
                        var6 = _closure1_slot24;
                        var6 = var6.ACK_MANUAL;
                        var2['objectType'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var8['onPress'] = var25;
                    var8 = var22.bind(var24)(var8);
case 150:
                    var8 = var14.isPrivate;
                    var8 = var8.bind(var14)();
                    if(!var8) { _fun0005_ip = 152; continue _fun0005 }
case 153:
                    var8 = var21;
case 152:
                    if(!var8) { _fun0005_ip = 154; continue _fun0005 }
case 155:
                    var22 = var11.buttons;
                    var21 = var22.push;
                    var8 = {};
                    var25 = _closure1_slot0;
                    var26 = _closure1_slot2;
                    var24 = 28;
                    var27 = var26[var24];
                    var27 = var25.bind(var12)(var27);
                    var28 = var27.intl;
                    var27 = var28.string;
                    var24 = var26[var24];
                    var24 = var25.bind(var12)(var24);
                    var24 = var24.t;
                    var24 = var24.q62UVy;
                    var24 = var27.bind(var28)(var24);
                    var8['label'] = var24;
                    var24 = 58;
                    var24 = var26[var24];
                    var24 = var25.bind(var12)(var24);
                    var24 = var24.ChatXIcon;
                    var8['IconComponent'] = var24;
                    var24 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 59;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.clearReplyNudge;
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var8['onPress'] = var24;
                    var8 = var21.bind(var22)(var8);
case 154:
                    var21 = _closure1_slot14;
                    var8 = var14.type;
                    var8 = var21.bind(var12)(var8);
                    if(var8) { _fun0005_ip = 156; continue _fun0005 }
case 157:
                    var8 = var14.isCategory;
                    var8 = var8.bind(var14)();
                    if(var8) { _fun0005_ip = 156; continue _fun0005 }
case 158:
                    var8 = var14.isForumLikeChannel;
                    var8 = var8.bind(var14)();
                    if(!var8) { _fun0005_ip = 159; continue _fun0005 }
case 156:
                    var24 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var25 = 28;
                    var21 = var8[var25];
                    var21 = var24.bind(var12)(var21);
                    var22 = var21.intl;
                    var21 = var22.string;
                    var8 = var8[var25];
                    var8 = var24.bind(var12)(var8);
                    var8 = var8.t;
                    if(var23) { _fun0005_ip = 160; continue _fun0005 }
case 161:
                    var23 = var8.tbeRRJ;
                    var24 = var21.bind(var22)(var23);
                    var23 = var14.isCategory;
                    var23 = var23.bind(var14)();
                    if(var23) { _fun0005_ip = 162; continue _fun0005 }
case 163:
                    var23 = var14.isDM;
                    var23 = var23.bind(var14)();
                    if(var23) { _fun0005_ip = 164; continue _fun0005 }
case 165:
                    var23 = var14.isGroupDM;
                    var23 = var23.bind(var14)();
                    if(var23) { _fun0005_ip = 164; continue _fun0005 }
case 166:
                    var23 = var14.isThread;
                    var23 = var23.bind(var14)();
                    var27 = var24;
                    if(!var23) { _fun0005_ip = 167; continue _fun0005 }
case 168:
                    var28 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var24 = var23[var25];
                    var24 = var28.bind(var12)(var24);
                    var26 = var24.intl;
                    var24 = var26.string;
                    var23 = var23[var25];
                    var23 = var28.bind(var12)(var23);
                    var23 = var23.t;
                    var23 = var23.bUUd8q;
                    var27 = var24.bind(var26)(var23);
                    _fun0005_ip = 167; continue _fun0005;
case 164:
                    var28 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var24 = var23[var25];
                    var24 = var28.bind(var12)(var24);
                    var26 = var24.intl;
                    var24 = var26.string;
                    var23 = var23[var25];
                    var23 = var28.bind(var12)(var23);
                    var23 = var23.t;
                    var23 = var23.LO3kaK;
                    var27 = var24.bind(var26)(var23);
                    _fun0005_ip = 167; continue _fun0005;
case 162:
                    var28 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var24 = var23[var25];
                    var24 = var28.bind(var12)(var24);
                    var26 = var24.intl;
                    var24 = var26.string;
                    var23 = var23[var25];
                    var23 = var28.bind(var12)(var23);
                    var23 = var23.t;
                    var23 = var23.pNMCg2;
                    var27 = var24.bind(var26)(var23);
case 167:
                    var26 = var11.buttons;
                    var24 = var26.push;
                    var23 = {};
                    var23['label'] = var27;
                    var28 = _closure1_slot0;
                    var29 = _closure1_slot2;
                    var27 = 60;
                    var27 = var29[var27];
                    var27 = var28.bind(var12)(var27);
                    var27 = var27.BellSlashIcon;
                    var23['IconComponent'] = var27;
                    var27 = function onPress() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 48;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.getRootNavigationRef;
                            var5 = var3.bind(var4)();
                            var3 = null;
                            var3 = var3 != var5;
                            if(!var3) { _fun0009_ip = 169; continue _fun0009 }
case 170:
                            var4 = var5.isReady;
                            var3 = var4.bind(var5)();
case 169:
                            if(!var3) { _fun0009_ip = 96; continue _fun0009 }
case 18:
                            var4 = var5.navigate;
                            var3 = {};
                            var6 = _closure3_slot0;
                            var6 = var6.id;
                            var3['channelId'] = var6;
                            var2 = _closure1_slot34;
                            var2 = var2.MUTE;
                            var3['initialRouteName'] = var2;
                            var2 = 'channel-long-press-sheet';
                            var3['source'] = var2;
                            var2 = 'sidebar';
                            var2 = var4.bind(var5)(var2, var3);
case 96:
                            return var1;
                        }
                    };
                    var23['onPress'] = var27;
                    var23 = var24.bind(var26)(var23);
                    _fun0005_ip = 159; continue _fun0005;
case 160:
                    var8 = var8.OYefme;
                    var21 = var21.bind(var22)(var8);
                    var8 = var14.isCategory;
                    var8 = var8.bind(var14)();
                    if(var8) { _fun0005_ip = 171; continue _fun0005 }
case 172:
                    var8 = var14.isDM;
                    var8 = var8.bind(var14)();
                    if(var8) { _fun0005_ip = 173; continue _fun0005 }
case 174:
                    var8 = var14.isGroupDM;
                    var8 = var8.bind(var14)();
                    if(var8) { _fun0005_ip = 173; continue _fun0005 }
case 175:
                    var8 = var14.isThread;
                    var8 = var8.bind(var14)();
                    var23 = var21;
                    if(!var8) { _fun0005_ip = 176; continue _fun0005 }
case 177:
                    var24 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var21 = var8[var25];
                    var21 = var24.bind(var12)(var21);
                    var22 = var21.intl;
                    var21 = var22.string;
                    var8 = var8[var25];
                    var8 = var24.bind(var12)(var8);
                    var8 = var8.t;
                    var8 = var8.Cq/TzF;
                    var23 = var21.bind(var22)(var8);
                    _fun0005_ip = 176; continue _fun0005;
case 173:
                    var24 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var21 = var8[var25];
                    var21 = var24.bind(var12)(var21);
                    var22 = var21.intl;
                    var21 = var22.string;
                    var8 = var8[var25];
                    var8 = var24.bind(var12)(var8);
                    var8 = var8.t;
                    var8 = var8.s5/5fm;
                    var23 = var21.bind(var22)(var8);
                    _fun0005_ip = 176; continue _fun0005;
case 171:
                    var24 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var21 = var8[var25];
                    var21 = var24.bind(var12)(var21);
                    var22 = var21.intl;
                    var21 = var22.string;
                    var8 = var8[var25];
                    var8 = var24.bind(var12)(var8);
                    var8 = var8.t;
                    var8 = var8.olaBeG;
                    var23 = var21.bind(var22)(var8);
case 176:
                    var22 = var11.buttons;
                    var21 = var22.push;
                    var8 = {};
                    var8['label'] = var23;
                    var24 = _closure1_slot0;
                    var25 = _closure1_slot2;
                    var23 = 61;
                    var23 = var25[var23];
                    var23 = var24.bind(var12)(var23);
                    var23 = var23.BellIcon;
                    var8['IconComponent'] = var23;
                    var23 = function onPress() {
                        var3 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var1 = 62;
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
                        var8 = 63;
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
                    var8['onPress'] = var23;
                    var8 = var21.bind(var22)(var8);
case 159:
                    var21 = _closure1_slot11;
                    var8 = var14.type;
                    var8 = var21.bind(var12)(var8);
                    if(var8) { _fun0005_ip = 178; continue _fun0005 }
case 179:
                    var21 = var14.isCategory;
                    var8 = var21.bind(var14)();
case 178:
                    if(var8) { _fun0005_ip = 180; continue _fun0005 }
case 181:
                    var21 = var14.isGuildStageVoice;
                    var8 = var21.bind(var14)();
case 180:
                    if(var8) { _fun0005_ip = 182; continue _fun0005 }
case 183:
                    var21 = var14.isForumLikeChannel;
                    var8 = var21.bind(var14)();
case 182:
                    if(!var8) { _fun0005_ip = 184; continue _fun0005 }
case 185:
                    var22 = var11.buttons;
                    var21 = var22.push;
                    var8 = {};
                    var24 = _closure1_slot0;
                    var25 = _closure1_slot2;
                    var23 = 28;
                    var26 = var25[var23];
                    var26 = var24.bind(var12)(var26);
                    var27 = var26.intl;
                    var26 = var27.string;
                    var23 = var25[var23];
                    var23 = var24.bind(var12)(var23);
                    var23 = var23.t;
                    var23 = var23.h850Ss;
                    var23 = var26.bind(var27)(var23);
                    var8['label'] = var23;
                    var23 = 64;
                    var23 = var25[var23];
                    var23 = var24.bind(var12)(var23);
                    var23 = var23.ChannelNotificationIcon;
                    var8['IconComponent'] = var23;
                    var23 = true;
                    var8['disableColor'] = var23;
                    var23 = function onPress() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 65;
                        var6 = var4[var2];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var6);
                        var6 = var7.setSection;
                        var5 = _closure1_slot27;
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
                    var8['onPress'] = var23;
                    var8 = var21.bind(var22)(var8);
case 184:
                    var8 = var11.buttons;
                    var8 = var8.length;
                    if(!(var8 > var4)) { _fun0005_ip = 186; continue _fun0005 }
case 187:
                    var8 = var1.push;
                    var8 = var8.bind(var1)(var11);
case 186:
                    var11 = {};
                    var8 = 'threads';
                    var11['sectionKey'] = var8;
                    var8 = new Array(0);
                    var11['buttons'] = var8;
                    var8 = var14.isThread;
                    var8 = var8.bind(var14)();
                    if(var8) { _fun0005_ip = 188; continue _fun0005 }
case 189:
                    var21 = var14.isForumLikeChannel;
                    var8 = var21.bind(var14)();
case 188:
                    if(var8) { _fun0005_ip = 190; continue _fun0005 }
case 191:
                    var8 = !var20;
case 190:
                    if(var8) { _fun0005_ip = 192; continue _fun0005 }
case 193:
                    var8 = var18;
case 192:
                    if(var8) { _fun0005_ip = 194; continue _fun0005 }
case 195:
                    var20 = var11.buttons;
                    var18 = var20.push;
                    var8 = {};
                    var22 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var21 = 28;
                    var24 = var23[var21];
                    var24 = var22.bind(var12)(var24);
                    var25 = var24.intl;
                    var24 = var25.string;
                    var21 = var23[var21];
                    var21 = var22.bind(var12)(var21);
                    var21 = var21.t;
                    var21 = var21.B2panI;
                    var21 = var24.bind(var25)(var21);
                    var8['label'] = var21;
                    var21 = 66;
                    var21 = var23[var21];
                    var21 = var22.bind(var12)(var21);
                    var21 = var21.ThreadIcon;
                    var8['IconComponent'] = var21;
                    var21 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 67;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8['onPress'] = var21;
                    var8 = var18.bind(var20)(var8);
case 194:
                    var8 = var11.buttons;
                    var8 = var8.length;
                    if(!(var8 > var4)) { _fun0005_ip = 196; continue _fun0005 }
case 197:
                    var8 = var1.push;
                    var8 = var8.bind(var1)(var11);
case 196:
                    var11 = {};
                    var8 = 'voice';
                    var11['sectionKey'] = var8;
                    var8 = new Array(0);
                    var11['buttons'] = var8;
                    var18 = _closure1_slot12;
                    var8 = var14.type;
                    var8 = var18.bind(var12)(var8);
                    if(!var8) { _fun0005_ip = 198; continue _fun0005 }
case 199:
                    var8 = !var17;
case 198:
                    if(!var8) { _fun0005_ip = 200; continue _fun0005 }
case 201:
                    var18 = var11.buttons;
                    var17 = var18.push;
                    var8 = {};
                    var23 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var20 = 28;
                    var21 = var24[var20];
                    var21 = var23.bind(var12)(var21);
                    var22 = var21.intl;
                    var21 = var22.string;
                    var20 = var24[var20];
                    var20 = var23.bind(var12)(var20);
                    var20 = var20.t;
                    if(var19) { _fun0005_ip = 202; continue _fun0005 }
case 203:
                    var19 = var20.LxzNiu;
                    var19 = var21.bind(var22)(var19);
                    _fun0005_ip = 204; continue _fun0005;
case 202:
                    var20 = var20.JYF2Oa;
                    var19 = var21.bind(var22)(var20);
case 204:
                    var8['label'] = var19;
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var19 = 29;
                    var19 = var21[var19];
                    var19 = var20.bind(var12)(var19);
                    var19 = var19.UserCircleIcon;
                    var8['IconComponent'] = var19;
                    var19 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 68;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.update;
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var8['onPress'] = var19;
                    var8 = var17.bind(var18)(var8);
case 200:
                    var8 = var14.isGuildVocal;
                    var8 = var8.bind(var14)();
                    if(!var8) { _fun0005_ip = 205; continue _fun0005 }
case 206:
                    var8 = var14.isGuildStageVoice;
                    var25 = var8.bind(var14)();
                    var18 = var11.buttons;
                    var17 = var18.push;
                    var8 = {};
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var19 = 28;
                    var22 = var21[var19];
                    var22 = var20.bind(var12)(var22);
                    var24 = var22.intl;
                    var23 = var24.string;
                    var22 = var21[var19];
                    var22 = var20.bind(var12)(var22);
                    var22 = var22.t;
                    if(var25) { _fun0005_ip = 207; continue _fun0005 }
case 208:
                    var25 = var22.ZXxLQg;
                    var25 = var23.bind(var24)(var25);
                    var8['label'] = var25;
                    var25 = 70;
                    var25 = var21[var25];
                    var25 = var20.bind(var12)(var25);
                    var25 = var25.ChatIcon;
                    var8['IconComponent'] = var25;
                    var25 = function onPress() {
                        var4 = _closure1_slot37;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var4 = var4.bind(var1)(var2);
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 73;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.updateChatOpen;
                        var3 = var2.id;
                        var2 = true;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var8['onPress'] = var25;
                    var25 = var17.bind(var18)(var8);
                    _fun0005_ip = 205; continue _fun0005;
case 207:
                    var22 = var22["7vb2cc"];
                    var22 = var23.bind(var24)(var22);
                    var8['label'] = var22;
                    var22 = 69;
                    var22 = var21[var22];
                    var22 = var20.bind(var12)(var22);
                    var22 = var22.StageIcon;
                    var8['IconComponent'] = var22;
                    var22 = function onPress() {
                        var3 = _closure1_slot37;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8['onPress'] = var22;
                    var8 = var17.bind(var18)(var8);
                    var18 = var11.buttons;
                    var17 = var18.push;
                    var8 = {};
                    var22 = var21[var19];
                    var22 = var20.bind(var12)(var22);
                    var23 = var22.intl;
                    var22 = var23.string;
                    var19 = var21[var19];
                    var19 = var20.bind(var12)(var19);
                    var19 = var19.t;
                    var19 = var19.ZXxLQg;
                    var19 = var22.bind(var23)(var19);
                    var8['label'] = var19;
                    var19 = 70;
                    var19 = var21[var19];
                    var19 = var20.bind(var12)(var19);
                    var19 = var19.ChatIcon;
                    var8['IconComponent'] = var19;
                    var19 = function onPress() {
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 71;
                        var4 = var2[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var4);
                        var4 = var6.hideActionSheet;
                        var4 = var4.bind(var6)();
                        var4 = 38;
                        var4 = var2[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.pushLazy;
                        var6 = _closure1_slot0;
                        var3 = 23;
                        var3 = var2[var3];
                        var6 = var6.bind(var1)(var3);
                        var3 = 72;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var3 = var6.bind(var1)(var3, var2);
                        var2 = {};
                        var6 = _closure3_slot0;
                        var2['channel'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var8['onPress'] = var19;
                    var8 = var17.bind(var18)(var8);
case 205:
                    var8 = var14.isGuildStageVoice;
                    var8 = var8.bind(var14)();
                    if(!var8) { _fun0005_ip = 209; continue _fun0005 }
case 210:
                    var8 = var15;
case 209:
                    if(!var8) { _fun0005_ip = 211; continue _fun0005 }
case 212:
                    var8 = var16;
case 211:
                    if(!var8) { _fun0005_ip = 213; continue _fun0005 }
case 214:
                    var17 = var11.buttons;
                    var16 = var17.push;
                    var8 = {};
                    var19 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var18 = 28;
                    var21 = var20[var18];
                    var21 = var19.bind(var12)(var21);
                    var22 = var21.intl;
                    var21 = var22.string;
                    var18 = var20[var18];
                    var18 = var19.bind(var12)(var18);
                    var18 = var18.t;
                    var18 = var18.saZaRb;
                    var18 = var21.bind(var22)(var18);
                    var8['label'] = var18;
                    var18 = 49;
                    var18 = var20[var18];
                    var18 = var19.bind(var12)(var18);
                    var18 = var18.XSmallIcon;
                    var8['IconComponent'] = var18;
                    var18 = true;
                    var8['isDestructive'] = var18;
                    var18 = function onPress() {
                        var3 = _closure1_slot4;
                        var2 = undefined;
                        var1 = function* () {
                            var1 = function* anon_0_() {
                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0010_ip = 215; continue _fun0010 }
case 216:
                                    var5 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var3 = 23;
                                    var4 = var2[var3];
                                    var3 = undefined;
                                    var5 = var5.bind(var3)(var4);
                                    var4 = 74;
                                    var4 = var2[var4];
                                    var2 = var2.paths;
                                    var2 = var5.bind(var3)(var4, var2);
                                    SaveGenerator(address=54);
case 217:
                                    return var2;
case 169:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                    if(var4) { _fun0010_ip = 218; continue _fun0010 }
case 219:
                                    var5 = var2.openEndStageModal;
                                    var4 = _closure3_slot0;
                                    var4 = var5.bind(var3)(var4);
                                    return var3;
case 218:
                                    return var2;
case 215:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var8['onPress'] = var18;
                    var8 = var16.bind(var17)(var8);
case 213:
                    var8 = var14.isGuildStageVoice;
                    var8 = var8.bind(var14)();
                    if(!var8) { _fun0005_ip = 220; continue _fun0005 }
case 221:
                    var8 = var15;
case 220:
                    if(!var8) { _fun0005_ip = 222; continue _fun0005 }
case 223:
                    var8 = var13;
case 222:
                    if(!var8) { _fun0005_ip = 224; continue _fun0005 }
case 225:
                    var15 = var11.buttons;
                    var13 = var15.push;
                    var8 = {};
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var16 = 28;
                    var19 = var18[var16];
                    var19 = var17.bind(var12)(var19);
                    var20 = var19.intl;
                    var19 = var20.string;
                    var16 = var18[var16];
                    var16 = var17.bind(var12)(var16);
                    var16 = var16.t;
                    var16 = var16["+78Pfm"];
                    var16 = var19.bind(var20)(var16);
                    var8['label'] = var16;
                    var16 = 75;
                    var16 = var18[var16];
                    var16 = var17.bind(var12)(var16);
                    var16 = var16.FlagIcon;
                    var8['IconComponent'] = var16;
                    var16 = true;
                    var8['isDestructive'] = var16;
                    var16 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 76;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.showReportModalForStageChannel;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var8['onPress'] = var16;
                    var8 = var13.bind(var15)(var8);
case 224:
                    var8 = var11.buttons;
                    var8 = var8.length;
                    if(!(var8 > var4)) { _fun0005_ip = 226; continue _fun0005 }
case 227:
                    var8 = var1.push;
                    var8 = var8.bind(var1)(var11);
case 226:
                    var8 = var14.isSpoilerChannel;
                    var8 = var8.bind(var14)();
                    if(!var8) { _fun0005_ip = 228; continue _fun0005 }
case 229:
                    if(!var6) { _fun0005_ip = 228; continue _fun0005 }
case 230:
                    var8 = {};
                    var6 = 'spoiler';
                    var8['sectionKey'] = var6;
                    var6 = new Array(0);
                    var8['buttons'] = var6;
                    var13 = var8.buttons;
                    var11 = var13.push;
                    var6 = {};
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var15 = 28;
                    var18 = var17[var15];
                    var18 = var16.bind(var12)(var18);
                    var19 = var18.intl;
                    var18 = var19.string;
                    var15 = var17[var15];
                    var15 = var16.bind(var12)(var15);
                    var15 = var15.t;
                    var15 = var15.ix2UVZ;
                    var15 = var18.bind(var19)(var15);
                    var6['label'] = var15;
                    var15 = 77;
                    var15 = var17[var15];
                    var15 = var16.bind(var12)(var15);
                    var15 = var15.EyeSlashIcon;
                    var6['IconComponent'] = var15;
                    var15 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 78;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.clearSpoilerAgree;
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var6['onPress'] = var15;
                    var6 = var11.bind(var13)(var6);
                    var6 = var1.push;
                    var6 = var6.bind(var1)(var8);
case 228:
                    var6 = {};
                    var8 = 'admin-actions';
                    var6['sectionKey'] = var8;
                    var8 = new Array(0);
                    var6['buttons'] = var8;
                    if(!var7) { _fun0005_ip = 231; continue _fun0005 }
case 232:
                    var11 = var6.buttons;
                    var8 = var11.push;
                    var7 = {};
                    var13 = var14.isCategory;
                    var13 = var13.bind(var14)();
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var19 = 28;
                    var16 = var15[var19];
                    var16 = var18.bind(var12)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var15[var19];
                    var15 = var18.bind(var12)(var15);
                    var15 = var15.t;
                    if(var13) { _fun0005_ip = 233; continue _fun0005 }
case 234:
                    var13 = var15["3gUsJb"];
                    var13 = var16.bind(var17)(var13);
                    _fun0005_ip = 235; continue _fun0005;
case 233:
                    var15 = var15.zdPFs9;
                    var13 = var16.bind(var17)(var15);
case 235:
                    var7['label'] = var13;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var13 = 79;
                    var13 = var16[var13];
                    var13 = var15.bind(var12)(var13);
                    var13 = var13.SettingsIcon;
                    var7['IconComponent'] = var13;
                    var13 = function onPress() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 65;
                        var6 = var4[var2];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var6);
                        var6 = var7.setSection;
                        var5 = _closure1_slot27;
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
                    var8 = _closure1_slot11;
                    var7 = var14.type;
                    var7 = var8.bind(var12)(var7);
                    if(var7) { _fun0005_ip = 236; continue _fun0005 }
case 237:
                    var8 = var14.isForumLikeChannel;
                    var7 = var8.bind(var14)();
case 236:
                    if(var7) { _fun0005_ip = 238; continue _fun0005 }
case 239:
                    var8 = var14.isGuildVoice;
                    var7 = var8.bind(var14)();
case 238:
                    if(var7) { _fun0005_ip = 240; continue _fun0005 }
case 241:
                    var8 = var14.isCategory;
                    var7 = var8.bind(var14)();
case 240:
                    if(!var7) { _fun0005_ip = 231; continue _fun0005 }
case 242:
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
                    if(var13) { _fun0005_ip = 243; continue _fun0005 }
case 244:
                    var13 = var15.dEaPc4;
                    var13 = var16.bind(var17)(var13);
                    _fun0005_ip = 245; continue _fun0005;
case 243:
                    var15 = var15.fUYU+j;
                    var13 = var16.bind(var17)(var15);
case 245:
                    var7['label'] = var13;
                    var13 = var14.isCategory;
                    var13 = var13.bind(var14)();
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    if(var13) { _fun0005_ip = 246; continue _fun0005 }
case 247:
                    var13 = 80;
                    var13 = var16[var13];
                    var13 = var15.bind(var12)(var13);
                    var13 = var13.CopyIcon;
                    _fun0005_ip = 248; continue _fun0005;
case 246:
                    var14 = 50;
                    var14 = var16[var14];
                    var14 = var15.bind(var12)(var14);
                    var13 = var14.PlusLargeIcon;
case 248:
                    var7['IconComponent'] = var13;
                    var13 = function onPress() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 81;
                            var2 = var2[var1];
                            var1 = undefined;
                            var7 = var3.bind(var1)(var2);
                            var6 = var7.open;
                            var3 = _closure3_slot0;
                            var2 = var3.isCategory;
                            var2 = var2.bind(var3)();
                            var5 = undefined;
                            if(var2) { _fun0011_ip = 249; continue _fun0011 }
case 250:
                            var2 = _closure3_slot0;
                            var5 = var2.type;
case 249:
                            var3 = _closure3_slot0;
                            var2 = var3.getGuildId;
                            var4 = var2.bind(var3)();
                            var2 = var3.isCategory;
                            var3 = var2.bind(var3)();
                            var2 = _closure3_slot0;
                            if(var3) { _fun0011_ip = 251; continue _fun0011 }
case 116:
                            var3 = var2.parent_id;
                            _fun0011_ip = 252; continue _fun0011;
case 251:
                            var3 = var2.id;
case 252:
                            var9 = _closure3_slot0;
                            var2 = var9.isCategory;
                            var9 = var2.bind(var9)();
                            var2 = undefined;
                            if(var9) { _fun0011_ip = 253; continue _fun0011 }
case 254:
                            var8 = _closure3_slot0;
                            var2 = var8.id;
case 253:
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
case 231:
                    if(!var2) { _fun0005_ip = 255; continue _fun0005 }
case 256:
                    var8 = var6.buttons;
                    var7 = var8.push;
                    var2 = {};
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var10 = 28;
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
                    var10 = 82;
                    var10 = var13[var10];
                    var10 = var11.bind(var12)(var10);
                    var10 = var10.IdIcon;
                    var2['IconComponent'] = var10;
                    var9 = function onPress() {
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 83;
                        var2 = var4[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.copy;
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        var2 = var5.bind(var6)(var2);
                        var2 = 84;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.presentIdCopied;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var2['onPress'] = var9;
                    var2 = var7.bind(var8)(var2);
case 255:
                    var2 = var6.buttons;
                    var2 = var2.length;
                    if(!(var2 > var4)) { _fun0005_ip = 257; continue _fun0005 }
case 258:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var6);
case 257:
                    var2 = var5.buttons;
                    var2 = var2.length;
                    if(!(var2 > var4)) { _fun0005_ip = 259; continue _fun0005 }
case 260:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var5);
case 259:
                    var2 = var3.buttons;
                    var2 = var2.length;
                    if(!(var2 > var4)) { _fun0005_ip = 261; continue _fun0005 }
case 262:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var3);
case 261:
                    return var1;
                }
            };
            var10 = var3.bind(var4)(var6);
            _closure2_slot4 = var10;
            var3 = var17.isGroupDM;
            var3 = var3.bind(var17)();
            var13 = undefined;
            if(!var3) { _fun0002_ip = 263; continue _fun0002 }
case 264:
            var6 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = 28;
            var7 = var19[var3];
            var7 = var6.bind(var4)(var7);
            var16 = var7.intl;
            var7 = var16.formatToPlainString;
            var3 = var19[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.t;
            var6 = var3.ABMKx3;
            var3 = {};
            var17 = var17.recipients;
            var17 = var17.length;
            var17 = var17 + var18;
            var3['members'] = var17;
            var13 = var7.bind(var16)(var6, var3);
case 263:
            var7 = _closure1_slot5;
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
                    if(var2) { _fun0012_ip = 265; continue _fun0012 }
case 266:
                    var2 = _closure2_slot3;
case 265:
                    if(var2) { _fun0012_ip = 267; continue _fun0012 }
case 268:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 267:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2, var3);
            var3 = _closure1_slot35;
            var11 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = var16[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot35;
            var5 = 99;
            var5 = var16[var5];
            var5 = var11.bind(var4)(var5);
            var6 = var5.ActionSheet;
            var5 = {};
            var5['showGradient'] = var12;
            var12 = 100;
            var12 = var16[var12];
            var17 = var11.bind(var4)(var12);
            var12 = var17.isMetaQuest;
            var12 = var12.bind(var17)();
            var5['startExpanded'] = var12;
            var12 = _closure1_slot35;
            var9 = 101;
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
                var5 = _closure1_slot35;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 102;
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
                        if(!var2) { _fun0013_ip = 269; continue _fun0013 }
case 270:
                        var15 = 'danger';
case 269:
                        var5 = _closure1_slot35;
                        var8 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 102;
                        var2 = var13[var7];
                        var4 = undefined;
                        var2 = var8.bind(var4)(var2);
                        var3 = var2.ActionSheetRow;
                        var2 = {};
                        var2['variant'] = var15;
                        var2['label'] = var14;
                        var9 = _closure1_slot35;
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
                                if(!(var2 != var3)) { _fun0014_ip = 271; continue _fun0014 }
case 3:
                                var2 = _closure4_slot0;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
case 271:
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
    var _closure1_slot40 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SafetyWarningTypes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.isGuildTextChannelType;
    var _closure1_slot11 = var7;
    var7 = var4.isGuildVocalChannelType;
    var _closure1_slot12 = var7;
    var7 = var4.isReadableType;
    var _closure1_slot13 = var7;
    var4 = var4.isTextChannel;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot20 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot21 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot22 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot23 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot24 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot25 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot26 = var7;
    var7 = var4.ChannelSettingsSections;
    var _closure1_slot27 = var7;
    var7 = var4.ChannelTypes;
    var _closure1_slot28 = var7;
    var7 = var4.InstantInviteSources;
    var _closure1_slot29 = var7;
    var7 = var4.NULL_STRING_GUILD_ID;
    var _closure1_slot30 = var7;
    var7 = var4.Permissions;
    var _closure1_slot31 = var7;
    var4 = var4.ZERO_STRING_GUILD_ID;
    var _closure1_slot32 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot33 = var4;
    var4 = 20;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelDetailsNavigatorScreens;
    var _closure1_slot34 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot35 = var4;
    var4 = 25;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 26;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BADGE_BACKGROUND_DEFAULT;
    var9['backgroundColor'] = var10;
    var4['tagContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot36 = var4;
    var4 = 103;
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
            var3 = 88;
            var3 = var5[var3];
            var5 = undefined;
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot16;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot16;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var7.bind(var8)(var4, var3);
            var _closure2_slot2 = var7;
            var8 = _closure1_slot5;
            var4 = var8.useEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var1 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0016_ip = 271; continue _fun0016 }
case 3:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 271:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var8)(var1, var3);
            var1 = null;
            var3 = var1 != var7;
            if(!var3) { _fun0015_ip = 272; continue _fun0015 }
case 273:
            var4 = _closure1_slot35;
            var3 = _closure1_slot40;
            var2 = {};
            var2['channel'] = var7;
            var2['onClose'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 272:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
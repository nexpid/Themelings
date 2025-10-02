// app/modules/user_profile/native/BotUserProfileContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.PROFILE_CONTENT_BOTTOM_PADDING;
    var _closure1_slot6 = var8;
    var4 = var4.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var8 = var4.jsxs;
    var _closure1_slot10 = var8;
    var4 = var4.Fragment;
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function BotUserProfileContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.user;
            var _closure2_slot0 = var14;
            var12 = var1.channel;
            var _closure2_slot1 = var12;
            var26 = var1.displayProfile;
            var28 = var1.showUserProfileActionSheet;
            var40 = var1.disableMessage;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var10 = var1.bind(var5)();
            var1 = 7;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var1 = _closure1_slot8;
            var16 = var4.bind(var5)(var1);
            var1 = 8;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var24 = var1.bottom;
            var4 = _closure1_slot0;
            var1 = 9;
            var1 = var3[var1];
            var6 = var4.bind(var5)(var1);
            var1 = var6.useUserProfileAnalyticsContext;
            var1 = var1.bind(var6)();
            var1 = var1.trackUserProfileAction;
            var _closure2_slot2 = var1;
            var1 = 10;
            var1 = var3[var1];
            var8 = var4.bind(var5)(var1);
            var6 = var8.useStateFromStores;
            var1 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var34 = var6.bind(var8)(var4, var1);
            var1 = 11;
            var1 = var3[var1];
            var6 = var2.bind(var5)(var1);
            var4 = var6.useName;
            var1 = null;
            var2 = var1 == var26;
            var3 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var26.guildId;
case 2:
            var8 = var1 == var12;
            var2 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var12.id;
case 4:
            var30 = var4.bind(var6)(var3, var2, var14);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var41 = 12;
            var2 = var2[var41];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useUserTag;
            var2 = var2.bind(var3)(var14);
            _closure2_slot3 = var2;
            var2 = var1 == var26;
            var13 = undefined;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = var26.application;
case 6:
            var2 = var1 == var12;
            var33 = undefined;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var33 = var12.guild_id;
case 8:
            _closure2_slot4 = var33;
            var6 = _closure1_slot3;
            var4 = var6.useMemo;
            var3 = new Array(2);
            var3[0] = var33;
            var3[1] = var14;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var1 = _closure2_slot0;
                    if(!(var2 == var1)) { _fun0002_ip = 12; continue _fun0002 }
case 10:
                    var1 = {};
                    _fun0002_ip = 13; continue _fun0002;
case 12:
                    var2 = {};
                    var4 = _closure2_slot4;
                    var3 = _closure2_slot0;
                    var5 = var3.id;
                    var3 = new Array(1);
                    var3[0] = var5;
                    var2[var4] = var3;
                    var1 = var2;
case 13:
                    return var1;
                }
            };
            var9 = var4.bind(var6)(var2, var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 13;
            var2 = var4[var2];
            var8 = var3.bind(var5)(var2);
            var6 = var8.useSubscribeGuildMembers;
            var2 = 'BotUserProfileContent';
            var2 = var6.bind(var8)(var9, var2);
            var6 = _closure1_slot1;
            var2 = 14;
            var2 = var4[var2];
            var2 = var6.bind(var5)(var2);
            var27 = var2.bind(var5)(var26);
            var2 = 15;
            var2 = var4[var2];
            var8 = var6.bind(var5)(var2);
            var2 = var14.id;
            var23 = var8.bind(var5)(var2);
            var2 = 16;
            var2 = var4[var2];
            var6 = var6.bind(var5)(var2);
            var2 = {};
            var2['user'] = var14;
            var2['displayProfile'] = var26;
            var2 = var6.bind(var5)(var2);
            var6 = var2.theme;
            var22 = var2.primaryColor;
            var11 = var2.secondaryColor;
            var2 = 17;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useUserProfileColors;
            var2 = {};
            var2['theme'] = var6;
            var2['primaryColor'] = var22;
            var2['secondaryColor'] = var11;
            var2 = var3.bind(var4)(var2);
            var15 = var2.gradientFallbackBackground;
            var9 = var2.containerBackground;
            var20 = var2.avatarBackground;
            var21 = var2.statusBackground;
            if(!(var1 != var14)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            if(!(var1 != var34)) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var29 = function handleCopyUsername() {
                var4 = _closure2_slot2;
                var3 = {};
                var1 = 'COPY_USERNAME';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 18;
                var5 = var4[var5];
                var6 = var3.bind(var1)(var5);
                var5 = var6.copy;
                var2 = _closure2_slot3;
                var2 = var5.bind(var6)(var2);
                var2 = 19;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentUsernameCopied;
                var2 = var2.bind(var3)();
                return var1;
            };
            var4 = _closure1_slot10;
            var3 = _closure1_slot11;
            var2 = {};
            var19 = _closure1_slot9;
            var18 = _closure1_slot1;
            var25 = _closure1_slot2;
            var6 = 20;
            var6 = var25[var6];
            var8 = var18.bind(var5)(var6);
            var6 = {};
            var6['user'] = var14;
            var6['displayProfile'] = var26;
            var6['bannerHeight'] = var16;
            var8 = var19.bind(var5)(var8, var6);
            var6 = new Array(3);
            var6[0] = var8;
            var16 = _closure1_slot4;
            var8 = {};
            var17 = 21;
            var17 = var25[var17];
            var18 = var18.bind(var5)(var17);
            var17 = {};
            var17['user'] = var14;
            var25 = var1 == var26;
            var31 = undefined;
            if(var25) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var31 = var26.guildId;
case 17:
            var32 = var1 != var31;
            var25 = undefined;
            if(!var32) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var25 = var31;
case 19:
            var17['guildId'] = var25;
            var17['backgroundColor'] = var20;
            var20 = {};
            var20['backgroundColor'] = var21;
            var17['statusStyle'] = var20;
            var18 = var19.bind(var5)(var18, var17);
            var17 = new Array(2);
            var17[0] = var18;
            var20 = _closure1_slot10;
            var19 = _closure1_slot1;
            var21 = _closure1_slot2;
            var18 = 22;
            var18 = var21[var18];
            var19 = var19.bind(var5)(var18);
            var18 = {};
            var18['fallbackBackground'] = var15;
            var18['primaryColor'] = var22;
            var18['secondaryColor'] = var11;
            var15 = var10.profileContent;
            var11 = new Array(2);
            var11[0] = var15;
            var15 = {};
            var25 = var1 != var23;
            var21 = 0;
            if(var25) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var21 = _closure1_slot7;
case 21:
            var15['paddingTop'] = var21;
            var21 = _closure1_slot6;
            var21 = var24 + var21;
            var15['paddingBottom'] = var21;
            var11[1] = var15;
            var18['containerStyle'] = var11;
            var25 = _closure1_slot9;
            var15 = _closure1_slot1;
            var31 = _closure1_slot2;
            var11 = 23;
            var11 = var31[var11];
            var21 = var15.bind(var5)(var11);
            var11 = {};
            var11['customStatusActivity'] = var23;
            var22 = var1 != var22;
            var11['hasCustomProfileTheme'] = var22;
            var22 = function onPressTruncatedStatus() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 24;
                    var4 = var2[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 26;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 25;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var5 = var4.bind(var1)(var3, var2);
                    var4 = {};
                    var2 = _closure2_slot0;
                    var4['user'] = var2;
                    var2 = _closure2_slot4;
                    var4['guildId'] = var2;
                    var8 = _closure2_slot1;
                    var2 = null;
                    var8 = var2 == var8;
                    var2 = undefined;
                    if(var8) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var3 = _closure2_slot1;
                    var2 = var3.id;
case 23:
                    var4['channelId'] = var2;
                    var11 = 'UserProfileCustomStatusActionSheet';
                    var9 = 'stack';
                    var13 = var7;
                    var12 = var5;
                    var10 = var4;
                    var2 = var13[var6](var12, var11, var10, var9, var8);
                    return var1;
                }
            };
            var11['onPressTruncatedStatus'] = var22;
            var22 = var10.customStatusBubble;
            var11['style'] = var22;
            var22 = var10.emojiOnlyCustomStatusBubble;
            var11['emojiOnlyStyle'] = var22;
            var11 = var25.bind(var5)(var21, var11);
            var21 = new Array(3);
            var21[0] = var11;
            var24 = _closure1_slot10;
            var23 = _closure1_slot4;
            var22 = {};
            var11 = var10.primaryInfo;
            var22['style'] = var11;
            var11 = 27;
            var11 = var31[var11];
            var15 = var15.bind(var5)(var11);
            var11 = {};
            var11['user'] = var14;
            var11['guildId'] = var33;
            var11['displayName'] = var30;
            var31 = var1 == var26;
            var30 = undefined;
            if(var31) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var30 = var26.pronouns;
case 25:
            var11['pronouns'] = var30;
            var11['badges'] = var27;
            var11['badgeContainerBackground'] = var9;
            var35 = _closure1_slot0;
            var27 = _closure1_slot2;
            var37 = 28;
            var30 = var27[var37];
            var30 = var35.bind(var5)(var30);
            var32 = var30.intl;
            var31 = var32.string;
            var30 = var27[var37];
            var30 = var35.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.y5MwJy;
            var30 = var31.bind(var32)(var30);
            var11['displayNameAccessibilityHint'] = var30;
            var11['onPressDisplayName'] = var29;
            var11['onPressUserTag'] = var29;
            var29 = function handlePressPronouns() {
                var3 = _closure2_slot2;
                var2 = {};
                var1 = 'PRESS_PRONOUNS';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 19;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentUserPronouns;
                var2 = var2.bind(var3)();
                return var1;
            };
            var11['onPressPronouns'] = var29;
            var39 = true;
            var11['showBadgeToastOnPress'] = var39;
            var11 = var25.bind(var5)(var15, var11);
            var25 = new Array(3);
            var25[0] = var11;
            var31 = _closure1_slot9;
            var15 = _closure1_slot1;
            var11 = 29;
            var11 = var27[var11];
            var29 = var15.bind(var5)(var11);
            var11 = {};
            var11['user'] = var14;
            var11 = var31.bind(var5)(var29, var11);
            var25[1] = var11;
            var11 = 30;
            var11 = var27[var11];
            var30 = var15.bind(var5)(var11);
            var29 = {};
            var11 = var10.primaryButtons;
            var29['style'] = var11;
            var11 = _closure1_slot8;
            var29['maxWidth'] = var11;
            var15 = var1 != var13;
            var11 = undefined;
            if(!var15) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var27 = _closure1_slot0;
            var32 = _closure1_slot2;
            var15 = 31;
            var15 = var32[var15];
            var27 = var27.bind(var5)(var15);
            var15 = var27.canInstallApplication;
            var15 = var15.bind(var27)(var13);
            var11 = undefined;
            if(!var15) { _fun0001_ip = 27; continue _fun0001 }
case 29:
            var32 = _closure1_slot9;
            var27 = _closure1_slot1;
            var35 = _closure1_slot2;
            var15 = 32;
            var15 = var35[var15];
            var27 = var27.bind(var5)(var15);
            var15 = {};
            var15['application'] = var13;
            var35 = var14.id;
            var15['botUserId'] = var35;
            var38 = var1 != var12;
            var35 = undefined;
            if(!var38) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var35 = var12;
case 30:
            var15['channel'] = var35;
            var38 = var1 != var33;
            var35 = undefined;
            if(!var38) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var35 = var33;
case 32:
            var15['guildId'] = var35;
            var38 = _closure1_slot1;
            var42 = _closure1_slot2;
            var35 = 24;
            var35 = var42[var35];
            var35 = var38.bind(var5)(var35);
            var35 = var35.hideActionSheet;
            var15['onOpenApp'] = var35;
            var11 = var32.bind(var5)(var27, var15);
case 27:
            var29['primaryButton'] = var11;
            var15 = _closure1_slot9;
            var38 = _closure1_slot0;
            var27 = _closure1_slot2;
            var11 = 33;
            var11 = var27[var11];
            var11 = var38.bind(var5)(var11);
            var35 = var11.Button;
            var32 = {};
            var11 = 34;
            var11 = var27[var11];
            var11 = var38.bind(var5)(var11);
            var43 = var11.ChatIcon;
            var42 = {};
            var11 = 'sm';
            var42['size'] = var11;
            var11 = _closure1_slot1;
            var44 = 35;
            var44 = var27[var44];
            var44 = var11.bind(var5)(var44);
            var44 = var44.colors;
            var44 = var44.REDESIGN_BUTTON_SECONDARY_TEXT;
            var42['color'] = var44;
            var42 = var15.bind(var5)(var43, var42);
            var32['icon'] = var42;
            var42 = var27[var37];
            var42 = var38.bind(var5)(var42);
            var44 = var42.intl;
            var43 = var44.string;
            var42 = var27[var37];
            var42 = var38.bind(var5)(var42);
            var42 = var42.t;
            var42 = var42.zROXER;
            var42 = var43.bind(var44)(var42);
            var32['text'] = var42;
            var42 = 'secondary';
            var32['variant'] = var42;
            var32['disabled'] = var40;
            var32['grow'] = var39;
            var39 = var27[var37];
            var39 = var38.bind(var5)(var39);
            var40 = var39.intl;
            var39 = var40.formatToPlainString;
            var37 = var27[var37];
            var37 = var38.bind(var5)(var37);
            var37 = var37.t;
            var38 = var37.zFfSFR;
            var37 = {};
            var41 = var27[var41];
            var42 = var11.bind(var5)(var41);
            var41 = var42.getName;
            var41 = var41.bind(var42)(var14);
            var37['name'] = var41;
            var37 = var39.bind(var40)(var38, var37);
            var32['accessibilityHint'] = var37;
            var36 = function onPress() {
                var3 = _closure2_slot2;
                var2 = {};
                var1 = 'SEND_MESSAGE';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 24;
                var2 = var4[var2];
                var6 = var3.bind(var1)(var2);
                var2 = var6.hideActionSheet;
                var2 = var2.bind(var6)();
                var2 = 36;
                var2 = var4[var2];
                var6 = var3.bind(var1)(var2);
                var2 = var6.popAll;
                var2 = var2.bind(var6)();
                var2 = 37;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openPrivateChannel;
                var2 = {};
                var5 = _closure2_slot0;
                var5 = var5.id;
                var2['recipientIds'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var32['onPress'] = var36;
            var32 = var15.bind(var5)(var35, var32);
            var29['secondaryButton'] = var32;
            var29 = var31.bind(var5)(var30, var29);
            var25[2] = var29;
            var22['children'] = var25;
            var22 = var24.bind(var5)(var23, var22);
            var21[1] = var22;
            var29 = {};
            var29['backgroundColor'] = var9;
            var24 = _closure1_slot10;
            var23 = _closure1_slot4;
            var22 = {};
            var9 = var10.cards;
            var22['style'] = var9;
            var9 = 38;
            var9 = var27[var9];
            var25 = var11.bind(var5)(var9);
            var9 = {};
            var9['user'] = var14;
            var9['currentUser'] = var34;
            var9['guildId'] = var33;
            var9['style'] = var29;
            var9 = var15.bind(var5)(var25, var9);
            var25 = new Array(4);
            var25[0] = var9;
            var9 = 39;
            var9 = var27[var9];
            var11 = var11.bind(var5)(var9);
            var9 = {};
            var27 = var14.id;
            var9['userId'] = var27;
            var9['displayProfile'] = var26;
            var9['channel'] = var12;
            var9['style'] = var29;
            var9 = var15.bind(var5)(var11, var9);
            var25[1] = var9;
            var9 = var1 != var33;
            if(!var9) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var26 = _closure1_slot10;
            var15 = _closure1_slot11;
            var11 = {};
            var32 = _closure1_slot9;
            var31 = _closure1_slot1;
            var35 = _closure1_slot2;
            var27 = 40;
            var27 = var35[var27];
            var30 = var31.bind(var5)(var27);
            var27 = {};
            var36 = var14.id;
            var27['userId'] = var36;
            var27['guildId'] = var33;
            var27['style'] = var29;
            var30 = var32.bind(var5)(var30, var27);
            var27 = new Array(2);
            var27[0] = var30;
            var30 = 41;
            var30 = var35[var30];
            var31 = var31.bind(var5)(var30);
            var30 = {};
            var30['user'] = var14;
            var30['currentUser'] = var34;
            var30['guildId'] = var33;
            var34 = var1 == var12;
            var33 = undefined;
            if(var34) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var33 = var12.id;
case 36:
            var30['channelId'] = var33;
            var30['showUserProfile'] = var28;
            var30['style'] = var29;
            var30 = var32.bind(var5)(var31, var30);
            var27[1] = var30;
            var11['children'] = var27;
            var9 = var26.bind(var5)(var15, var11);
case 34:
            var25[2] = var9;
            var9 = _closure1_slot9;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var26 = 42;
            var26 = var15[var26];
            var27 = var11.bind(var5)(var26);
            var26 = {};
            var30 = var14.id;
            var26['userId'] = var30;
            var26['style'] = var29;
            var26['onBack'] = var28;
            var26 = var9.bind(var5)(var27, var26);
            var25[3] = var26;
            var22['children'] = var25;
            var22 = var24.bind(var5)(var23, var22);
            var21[2] = var22;
            var18['children'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var17[1] = var18;
            var8['children'] = var17;
            var8 = var4.bind(var5)(var16, var8);
            var6[1] = var8;
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var10.bannerButtons;
            var7['style'] = var10;
            var10 = 43;
            var10 = var15[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var10['user'] = var14;
            var10['application'] = var13;
            var10['channel'] = var12;
            var10 = var9.bind(var5)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 14:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 44;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/BotUserProfileContent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
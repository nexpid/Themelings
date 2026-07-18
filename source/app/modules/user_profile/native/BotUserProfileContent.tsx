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
            var24 = var1.user;
            var _closure2_slot0 = var24;
            var32 = var1.channel;
            var _closure2_slot1 = var32;
            var26 = var1.displayProfile;
            var22 = var1.showUserProfileActionSheet;
            var37 = var1.disableMessage;
            var6 = var1.scrollPosition;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var25 = function handleCopyUsername() {
                var4 = _closure2_slot2;
                var3 = {};
                var1 = 'COPY_USERNAME';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 19;
                var5 = var4[var5];
                var6 = var3.bind(var1)(var5);
                var5 = var6.copy;
                var2 = _closure2_slot3;
                var2 = var5.bind(var6)(var2);
                var2 = 20;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentUsernameCopied;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var18 = var1.bind(var5)();
            var1 = 7;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var1 = _closure1_slot8;
            var34 = var4.bind(var5)(var1);
            var1 = 8;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var1 = {};
            var1['scrollPosition'] = var6;
            var1['bannerHeight'] = var34;
            var1 = var4.bind(var5)(var1);
            var29 = var1.bannerAnimatedStyle;
            var23 = var1.bannerImageAnimatedStyle;
            var9 = var1.contentAnimatedStyle;
            var20 = var1.blurAnimatedProps;
            var10 = var1.showBlur;
            var1 = 9;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var21 = var1.bottom;
            var4 = _closure1_slot0;
            var1 = 10;
            var1 = var3[var1];
            var6 = var4.bind(var5)(var1);
            var1 = var6.useUserProfileAnalyticsContext;
            var1 = var1.bind(var6)();
            var1 = var1.trackUserProfileAction;
            _closure2_slot2 = var1;
            var1 = 11;
            var1 = var3[var1];
            var7 = var4.bind(var5)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var33 = var6.bind(var7)(var4, var1);
            var1 = 12;
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
            var7 = var1 == var32;
            var2 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var32.id;
case 4:
            var28 = var4.bind(var6)(var3, var2, var24);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var40 = 13;
            var2 = var2[var40];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useUserTag;
            var2 = var2.bind(var3)(var24);
            _closure2_slot3 = var2;
            var2 = var1 == var26;
            var38 = undefined;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var38 = var26.application;
case 6:
            var2 = var1 == var32;
            var31 = undefined;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var31 = var32.guild_id;
case 8:
            _closure2_slot4 = var31;
            var6 = _closure1_slot3;
            var4 = var6.useMemo;
            var3 = new Array(2);
            var3[0] = var31;
            var3[1] = var24;
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
                    var2[3] = var3;
                    var1 = var2;
case 13:
                    return var1;
                }
            };
            var8 = var4.bind(var6)(var2, var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var7 = var3.bind(var5)(var2);
            var6 = var7.useSubscribeGuildMembers;
            var2 = 'BotUserProfileContent';
            var2 = var6.bind(var7)(var8, var2);
            var6 = _closure1_slot1;
            var2 = 15;
            var2 = var4[var2];
            var2 = var6.bind(var5)(var2);
            var27 = var2.bind(var5)(var26);
            var2 = 16;
            var2 = var4[var2];
            var7 = var6.bind(var5)(var2);
            var2 = var24.id;
            var17 = var7.bind(var5)(var2);
            var2 = 17;
            var2 = var4[var2];
            var6 = var6.bind(var5)(var2);
            var2 = {};
            var2['user'] = var24;
            var2['displayProfile'] = var26;
            var2 = var6.bind(var5)(var2);
            var7 = var2.theme;
            var15 = var2.primaryColor;
            var6 = var2.secondaryColor;
            var2 = 18;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useUserProfileColors;
            var2 = {};
            var2['theme'] = var7;
            var2['primaryColor'] = var15;
            var2['secondaryColor'] = var6;
            var2 = var3.bind(var4)(var2);
            var16 = var2.containerBackground;
            var12 = var2.avatarBackground;
            var13 = var2.statusBackground;
            if(!(var1 != var24)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            if(!(var1 != var33)) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var4 = _closure1_slot10;
            var3 = _closure1_slot11;
            var2 = {};
            var11 = _closure1_slot9;
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = 21;
            var6 = var14[var6];
            var7 = var8.bind(var5)(var6);
            var6 = {};
            var6['user'] = var24;
            var6['displayProfile'] = var26;
            var6['bannerHeight'] = var34;
            var6['bannerAnimatedStyle'] = var29;
            var6['bannerImageAnimatedStyle'] = var23;
            var6['blurAnimatedProps'] = var20;
            var6['showBlur'] = var10;
            var7 = var11.bind(var5)(var7, var6);
            var6 = new Array(3);
            var6[0] = var7;
            var7 = 22;
            var10 = var14[var7];
            var10 = var8.bind(var5)(var10);
            var20 = var10.View;
            var10 = {};
            var34 = var18.bannerButtons;
            var23 = new Array(2);
            var23[0] = var34;
            var23[1] = var29;
            var10['style'] = var23;
            var23 = 23;
            var23 = var14[var23];
            var29 = var8.bind(var5)(var23);
            var23 = {};
            var23['user'] = var24;
            var23['application'] = var38;
            var23['channel'] = var32;
            var23 = var11.bind(var5)(var29, var23);
            var10['children'] = var23;
            var10 = var11.bind(var5)(var20, var10);
            var6[1] = var10;
            var7 = var14[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.View;
            var7 = {};
            var7['style'] = var9;
            var10 = _closure1_slot0;
            var9 = 24;
            var9 = var14[var9];
            var9 = var10.bind(var5)(var9);
            var10 = var9.OpenableUserProfileAvatar;
            var9 = {};
            var9['user'] = var24;
            var14 = var1 == var26;
            var20 = undefined;
            if(var14) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var20 = var26.guildId;
case 17:
            var23 = var1 != var20;
            var14 = undefined;
            if(!var23) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var14 = var20;
case 19:
            var9['guildId'] = var14;
            var9['backgroundColor'] = var12;
            var12 = {};
            var12['backgroundColor'] = var13;
            var9['statusStyle'] = var12;
            var10 = var11.bind(var5)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot10;
            var11 = _closure1_slot4;
            var10 = {};
            var14 = var18.profileContentWrapper;
            var13 = new Array(3);
            var13[0] = var14;
            var14 = var18.profileContent;
            var13[1] = var14;
            var14 = {};
            var23 = var1 != var17;
            var20 = 0;
            if(var23) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var20 = _closure1_slot7;
case 21:
            var14['paddingTop'] = var20;
            var20 = _closure1_slot6;
            var20 = var21 + var20;
            var14['paddingBottom'] = var20;
            var13[2] = var14;
            var10['style'] = var13;
            var23 = _closure1_slot9;
            var21 = _closure1_slot1;
            var29 = _closure1_slot2;
            var13 = 25;
            var13 = var29[var13];
            var14 = var21.bind(var5)(var13);
            var13 = {};
            var13['customStatusActivity'] = var17;
            var15 = var1 != var15;
            var13['hasCustomProfileTheme'] = var15;
            var15 = function onPressTruncatedStatus() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 26;
                    var4 = var2[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 28;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 27;
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
            var13['onPressTruncatedStatus'] = var15;
            var15 = var18.customStatusBubble;
            var13['style'] = var15;
            var15 = var18.emojiOnlyCustomStatusBubble;
            var13['emojiOnlyStyle'] = var15;
            var14 = var23.bind(var5)(var14, var13);
            var13 = new Array(3);
            var13[0] = var14;
            var17 = _closure1_slot10;
            var15 = _closure1_slot4;
            var14 = {};
            var20 = var18.primaryInfo;
            var14['style'] = var20;
            var20 = 29;
            var20 = var29[var20];
            var21 = var21.bind(var5)(var20);
            var20 = {};
            var20['user'] = var24;
            var20['guildId'] = var31;
            var20['displayName'] = var28;
            var29 = var1 == var26;
            var28 = undefined;
            if(var29) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var28 = var26.pronouns;
case 25:
            var20['pronouns'] = var28;
            var20['badges'] = var27;
            var20['badgeContainerBackground'] = var16;
            var36 = _closure1_slot0;
            var27 = _closure1_slot2;
            var34 = 30;
            var28 = var27[var34];
            var28 = var36.bind(var5)(var28);
            var35 = var28.intl;
            var29 = var35.string;
            var28 = var27[var34];
            var28 = var36.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.y5MwJy;
            var28 = var29.bind(var35)(var28);
            var20['displayNameAccessibilityHint'] = var28;
            var20['onPressDisplayName'] = var25;
            var20['onPressUserTag'] = var25;
            var25 = function handlePressPronouns() {
                var3 = _closure2_slot2;
                var2 = {};
                var1 = 'PRESS_PRONOUNS';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 20;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentUserPronouns;
                var2 = var2.bind(var3)();
                return var1;
            };
            var20['onPressPronouns'] = var25;
            var36 = true;
            var20['showBadgeToastOnPress'] = var36;
            var21 = var23.bind(var5)(var21, var20);
            var20 = new Array(3);
            var20[0] = var21;
            var25 = _closure1_slot9;
            var23 = _closure1_slot1;
            var21 = 31;
            var21 = var27[var21];
            var28 = var23.bind(var5)(var21);
            var21 = {};
            var21['user'] = var24;
            var21 = var25.bind(var5)(var28, var21);
            var20[1] = var21;
            var21 = 32;
            var21 = var27[var21];
            var23 = var23.bind(var5)(var21);
            var21 = {};
            var27 = var18.primaryButtons;
            var21['style'] = var27;
            var27 = _closure1_slot8;
            var21['maxWidth'] = var27;
            var28 = var1 != var38;
            var27 = undefined;
            if(!var28) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var29 = _closure1_slot0;
            var35 = _closure1_slot2;
            var28 = 33;
            var28 = var35[var28];
            var29 = var29.bind(var5)(var28);
            var28 = var29.canInstallApplication;
            var28 = var28.bind(var29)(var38);
            var27 = undefined;
            if(!var28) { _fun0001_ip = 27; continue _fun0001 }
case 29:
            var35 = _closure1_slot9;
            var29 = _closure1_slot1;
            var39 = _closure1_slot2;
            var28 = 34;
            var28 = var39[var28];
            var29 = var29.bind(var5)(var28);
            var28 = {};
            var28['application'] = var38;
            var38 = var24.id;
            var28['botUserId'] = var38;
            var39 = var1 != var32;
            var38 = undefined;
            if(!var39) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var38 = var32;
case 30:
            var28['channel'] = var38;
            var39 = var1 != var31;
            var38 = undefined;
            if(!var39) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var38 = var31;
case 32:
            var28['guildId'] = var38;
            var27 = var35.bind(var5)(var29, var28);
case 27:
            var21['primaryButton'] = var27;
            var29 = _closure1_slot9;
            var35 = _closure1_slot0;
            var38 = _closure1_slot2;
            var27 = 35;
            var27 = var38[var27];
            var27 = var35.bind(var5)(var27);
            var28 = var27.Button;
            var27 = {};
            var39 = 36;
            var39 = var38[var39];
            var39 = var35.bind(var5)(var39);
            var42 = var39.ChatIcon;
            var41 = {};
            var39 = 'sm';
            var41['size'] = var39;
            var39 = _closure1_slot1;
            var43 = 37;
            var43 = var38[var43];
            var43 = var39.bind(var5)(var43);
            var43 = var43.colors;
            var43 = var43.CONTROL_SECONDARY_TEXT_DEFAULT;
            var41['color'] = var43;
            var41 = var29.bind(var5)(var42, var41);
            var27['icon'] = var41;
            var41 = var38[var34];
            var41 = var35.bind(var5)(var41);
            var43 = var41.intl;
            var42 = var43.string;
            var41 = var38[var34];
            var41 = var35.bind(var5)(var41);
            var41 = var41.t;
            var41 = var41.zROXEV;
            var41 = var42.bind(var43)(var41);
            var27['text'] = var41;
            var41 = 'secondary';
            var27['variant'] = var41;
            var27['disabled'] = var37;
            var27['grow'] = var36;
            var36 = var38[var34];
            var36 = var35.bind(var5)(var36);
            var37 = var36.intl;
            var36 = var37.formatToPlainString;
            var34 = var38[var34];
            var34 = var35.bind(var5)(var34);
            var34 = var34.t;
            var35 = var34.zFfSFQ;
            var34 = {};
            var38 = var38[var40];
            var39 = var39.bind(var5)(var38);
            var38 = var39.getName;
            var38 = var38.bind(var39)(var24);
            var34['name'] = var38;
            var34 = var36.bind(var37)(var35, var34);
            var27['accessibilityHint'] = var34;
            var30 = function onPress() {
                var3 = _closure2_slot2;
                var2 = {};
                var1 = 'SEND_MESSAGE';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 26;
                var2 = var4[var2];
                var6 = var3.bind(var1)(var2);
                var2 = var6.hideActionSheet;
                var2 = var2.bind(var6)();
                var2 = 38;
                var2 = var4[var2];
                var6 = var3.bind(var1)(var2);
                var2 = var6.popAll;
                var2 = var2.bind(var6)();
                var2 = 39;
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
            var27['onPress'] = var30;
            var27 = var29.bind(var5)(var28, var27);
            var21['secondaryButton'] = var27;
            var21 = var25.bind(var5)(var23, var21);
            var20[2] = var21;
            var14['children'] = var20;
            var14 = var17.bind(var5)(var15, var14);
            var13[1] = var14;
            var15 = var1 == var33;
            var14 = null;
            if(var15) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var15 = var18.card;
            var23 = new Array(2);
            var23[0] = var15;
            var15 = {};
            var15['backgroundColor'] = var16;
            var23[1] = var15;
            var17 = _closure1_slot10;
            var16 = _closure1_slot4;
            var15 = {};
            var18 = var18.cards;
            var15['style'] = var18;
            var25 = _closure1_slot9;
            var21 = _closure1_slot1;
            var27 = _closure1_slot2;
            var18 = 40;
            var18 = var27[var18];
            var20 = var21.bind(var5)(var18);
            var18 = {};
            var18['user'] = var24;
            var18['currentUser'] = var33;
            var18['guildId'] = var31;
            var18['style'] = var23;
            var20 = var25.bind(var5)(var20, var18);
            var18 = new Array(4);
            var18[0] = var20;
            var20 = 41;
            var20 = var27[var20];
            var21 = var21.bind(var5)(var20);
            var20 = {};
            var27 = var24.id;
            var20['userId'] = var27;
            var20['displayProfile'] = var26;
            var20['channel'] = var32;
            var20['style'] = var23;
            var20 = var25.bind(var5)(var21, var20);
            var18[1] = var20;
            var20 = var1 != var31;
            if(!var20) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var26 = _closure1_slot10;
            var25 = _closure1_slot11;
            var21 = {};
            var30 = _closure1_slot9;
            var29 = _closure1_slot1;
            var34 = _closure1_slot2;
            var27 = 42;
            var27 = var34[var27];
            var28 = var29.bind(var5)(var27);
            var27 = {};
            var35 = var24.id;
            var27['userId'] = var35;
            var27['guildId'] = var31;
            var27['style'] = var23;
            var28 = var30.bind(var5)(var28, var27);
            var27 = new Array(2);
            var27[0] = var28;
            var28 = 43;
            var28 = var34[var28];
            var29 = var29.bind(var5)(var28);
            var28 = {};
            var28['user'] = var24;
            var28['currentUser'] = var33;
            var28['guildId'] = var31;
            var33 = var1 == var32;
            var31 = undefined;
            if(var33) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var31 = var32.id;
case 38:
            var28['channelId'] = var31;
            var28['showUserProfile'] = var22;
            var28['style'] = var23;
            var28 = var30.bind(var5)(var29, var28);
            var27[1] = var28;
            var21['children'] = var27;
            var20 = var26.bind(var5)(var25, var21);
case 36:
            var18[2] = var20;
            var21 = _closure1_slot9;
            var20 = _closure1_slot1;
            var25 = _closure1_slot2;
            var19 = 44;
            var19 = var25[var19];
            var20 = var20.bind(var5)(var19);
            var19 = {};
            var24 = var24.id;
            var19['userId'] = var24;
            var19['style'] = var23;
            var19['onBack'] = var22;
            var19 = var21.bind(var5)(var20, var19);
            var18[3] = var19;
            var15['children'] = var18;
            var14 = var17.bind(var5)(var16, var15);
case 34:
            var13[2] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var7['children'] = var9;
            var7 = var4.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 14:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 45;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/BotUserProfileContent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
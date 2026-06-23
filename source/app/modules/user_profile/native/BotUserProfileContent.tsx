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
            var23 = var1.user;
            var _closure2_slot0 = var23;
            var31 = var1.channel;
            var _closure2_slot1 = var31;
            var25 = var1.displayProfile;
            var21 = var1.showUserProfileActionSheet;
            var39 = var1.disableMessage;
            var6 = var1.scrollPosition;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var17 = var1.bind(var5)();
            var1 = 7;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var1 = _closure1_slot8;
            var33 = var4.bind(var5)(var1);
            var1 = 8;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var1 = {};
            var1['scrollPosition'] = var6;
            var1['bannerHeight'] = var33;
            var1 = var4.bind(var5)(var1);
            var29 = var1.bannerAnimatedStyle;
            var24 = var1.bannerImageAnimatedStyle;
            var9 = var1.contentAnimatedStyle;
            var20 = var1.blurAnimatedProps;
            var8 = var1.showBlur;
            var1 = 9;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var22 = var1.bottom;
            var4 = _closure1_slot0;
            var1 = 10;
            var1 = var3[var1];
            var6 = var4.bind(var5)(var1);
            var1 = var6.useUserProfileAnalyticsContext;
            var1 = var1.bind(var6)();
            var1 = var1.trackUserProfileAction;
            var _closure2_slot2 = var1;
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
            var32 = var6.bind(var7)(var4, var1);
            var1 = 12;
            var1 = var3[var1];
            var6 = var2.bind(var5)(var1);
            var4 = var6.useName;
            var1 = null;
            var2 = var1 == var25;
            var3 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var25.guildId;
case 2:
            var7 = var1 == var31;
            var2 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var31.id;
case 4:
            var28 = var4.bind(var6)(var3, var2, var23);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var40 = 13;
            var2 = var2[var40];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useUserTag;
            var2 = var2.bind(var3)(var23);
            _closure2_slot3 = var2;
            var2 = var1 == var25;
            var34 = undefined;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var34 = var25.application;
case 6:
            var2 = var1 == var31;
            var30 = undefined;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var30 = var31.guild_id;
case 8:
            _closure2_slot4 = var30;
            var6 = _closure1_slot3;
            var4 = var6.useMemo;
            var3 = new Array(2);
            var3[0] = var30;
            var3[1] = var23;
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
            var10 = var4.bind(var6)(var2, var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var7 = var3.bind(var5)(var2);
            var6 = var7.useSubscribeGuildMembers;
            var2 = 'BotUserProfileContent';
            var2 = var6.bind(var7)(var10, var2);
            var6 = _closure1_slot1;
            var2 = 15;
            var2 = var4[var2];
            var2 = var6.bind(var5)(var2);
            var26 = var2.bind(var5)(var25);
            var2 = 16;
            var2 = var4[var2];
            var7 = var6.bind(var5)(var2);
            var2 = var23.id;
            var19 = var7.bind(var5)(var2);
            var2 = 17;
            var2 = var4[var2];
            var6 = var6.bind(var5)(var2);
            var2 = {};
            var2['user'] = var23;
            var2['displayProfile'] = var25;
            var2 = var6.bind(var5)(var2);
            var7 = var2.theme;
            var16 = var2.primaryColor;
            var6 = var2.secondaryColor;
            var2 = 18;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useUserProfileColors;
            var2 = {};
            var2['theme'] = var7;
            var2['primaryColor'] = var16;
            var2['secondaryColor'] = var6;
            var2 = var3.bind(var4)(var2);
            var15 = var2.containerBackground;
            var12 = var2.avatarBackground;
            var13 = var2.statusBackground;
            if(!(var1 != var23)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            if(!(var1 != var32)) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var27 = function handleCopyUsername() {
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
            var4 = _closure1_slot10;
            var3 = _closure1_slot11;
            var2 = {};
            var11 = _closure1_slot9;
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = 21;
            var6 = var14[var6];
            var7 = var10.bind(var5)(var6);
            var6 = {};
            var6['user'] = var23;
            var6['displayProfile'] = var25;
            var6['bannerHeight'] = var33;
            var6['bannerAnimatedStyle'] = var29;
            var6['bannerImageAnimatedStyle'] = var24;
            var6['blurAnimatedProps'] = var20;
            var6['showBlur'] = var8;
            var7 = var11.bind(var5)(var7, var6);
            var6 = new Array(3);
            var6[0] = var7;
            var7 = 22;
            var8 = var14[var7];
            var8 = var10.bind(var5)(var8);
            var20 = var8.View;
            var8 = {};
            var33 = var17.bannerButtons;
            var24 = new Array(2);
            var24[0] = var33;
            var24[1] = var29;
            var8['style'] = var24;
            var24 = 23;
            var24 = var14[var24];
            var29 = var10.bind(var5)(var24);
            var24 = {};
            var24['user'] = var23;
            var24['application'] = var34;
            var24['channel'] = var31;
            var24 = var11.bind(var5)(var29, var24);
            var8['children'] = var24;
            var8 = var11.bind(var5)(var20, var8);
            var6[1] = var8;
            var7 = var14[var7];
            var7 = var10.bind(var5)(var7);
            var8 = var7.View;
            var7 = {};
            var7['style'] = var9;
            var9 = 24;
            var9 = var14[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var9['user'] = var23;
            var14 = var1 == var25;
            var20 = undefined;
            if(var14) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var20 = var25.guildId;
case 17:
            var24 = var1 != var20;
            var14 = undefined;
            if(!var24) { _fun0001_ip = 19; continue _fun0001 }
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
            var14 = var17.profileContentWrapper;
            var13 = new Array(3);
            var13[0] = var14;
            var14 = var17.profileContent;
            var13[1] = var14;
            var14 = {};
            var24 = var1 != var19;
            var20 = 0;
            if(var24) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var20 = _closure1_slot7;
case 21:
            var14['paddingTop'] = var20;
            var20 = _closure1_slot6;
            var20 = var22 + var20;
            var14['paddingBottom'] = var20;
            var13[2] = var14;
            var10['style'] = var13;
            var24 = _closure1_slot9;
            var22 = _closure1_slot1;
            var29 = _closure1_slot2;
            var13 = 25;
            var13 = var29[var13];
            var14 = var22.bind(var5)(var13);
            var13 = {};
            var13['customStatusActivity'] = var19;
            var16 = var1 != var16;
            var13['hasCustomProfileTheme'] = var16;
            var16 = function onPressTruncatedStatus() {
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
            var13['onPressTruncatedStatus'] = var16;
            var16 = var17.customStatusBubble;
            var13['style'] = var16;
            var16 = var17.emojiOnlyCustomStatusBubble;
            var13['emojiOnlyStyle'] = var16;
            var14 = var24.bind(var5)(var14, var13);
            var13 = new Array(3);
            var13[0] = var14;
            var19 = _closure1_slot10;
            var16 = _closure1_slot4;
            var14 = {};
            var20 = var17.primaryInfo;
            var14['style'] = var20;
            var20 = 29;
            var20 = var29[var20];
            var22 = var22.bind(var5)(var20);
            var20 = {};
            var20['user'] = var23;
            var20['guildId'] = var30;
            var20['displayName'] = var28;
            var29 = var1 == var25;
            var28 = undefined;
            if(var29) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var28 = var25.pronouns;
case 25:
            var20['pronouns'] = var28;
            var20['badges'] = var26;
            var20['badgeContainerBackground'] = var15;
            var37 = _closure1_slot0;
            var26 = _closure1_slot2;
            var36 = 30;
            var28 = var26[var36];
            var28 = var37.bind(var5)(var28);
            var33 = var28.intl;
            var29 = var33.string;
            var28 = var26[var36];
            var28 = var37.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.y5MwJy;
            var28 = var29.bind(var33)(var28);
            var20['displayNameAccessibilityHint'] = var28;
            var20['onPressDisplayName'] = var27;
            var20['onPressUserTag'] = var27;
            var27 = function handlePressPronouns() {
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
            var20['onPressPronouns'] = var27;
            var38 = true;
            var20['showBadgeToastOnPress'] = var38;
            var20 = var24.bind(var5)(var22, var20);
            var22 = new Array(3);
            var22[0] = var20;
            var29 = _closure1_slot9;
            var24 = _closure1_slot1;
            var20 = 31;
            var20 = var26[var20];
            var27 = var24.bind(var5)(var20);
            var20 = {};
            var20['user'] = var23;
            var20 = var29.bind(var5)(var27, var20);
            var22[1] = var20;
            var20 = 32;
            var20 = var26[var20];
            var28 = var24.bind(var5)(var20);
            var27 = {};
            var20 = var17.primaryButtons;
            var27['style'] = var20;
            var20 = _closure1_slot8;
            var27['maxWidth'] = var20;
            var24 = var1 != var34;
            var20 = undefined;
            if(!var24) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var26 = _closure1_slot0;
            var33 = _closure1_slot2;
            var24 = 33;
            var24 = var33[var24];
            var26 = var26.bind(var5)(var24);
            var24 = var26.canInstallApplication;
            var24 = var24.bind(var26)(var34);
            var20 = undefined;
            if(!var24) { _fun0001_ip = 27; continue _fun0001 }
case 29:
            var33 = _closure1_slot9;
            var26 = _closure1_slot1;
            var37 = _closure1_slot2;
            var24 = 34;
            var24 = var37[var24];
            var26 = var26.bind(var5)(var24);
            var24 = {};
            var24['application'] = var34;
            var34 = var23.id;
            var24['botUserId'] = var34;
            var37 = var1 != var31;
            var34 = undefined;
            if(!var37) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var34 = var31;
case 30:
            var24['channel'] = var34;
            var37 = var1 != var30;
            var34 = undefined;
            if(!var37) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var34 = var30;
case 32:
            var24['guildId'] = var34;
            var20 = var33.bind(var5)(var26, var24);
case 27:
            var27['primaryButton'] = var20;
            var24 = _closure1_slot9;
            var37 = _closure1_slot0;
            var26 = _closure1_slot2;
            var20 = 35;
            var20 = var26[var20];
            var20 = var37.bind(var5)(var20);
            var34 = var20.Button;
            var33 = {};
            var20 = 36;
            var20 = var26[var20];
            var20 = var37.bind(var5)(var20);
            var42 = var20.ChatIcon;
            var41 = {};
            var20 = 'sm';
            var41['size'] = var20;
            var20 = _closure1_slot1;
            var43 = 37;
            var43 = var26[var43];
            var43 = var20.bind(var5)(var43);
            var43 = var43.colors;
            var43 = var43.CONTROL_SECONDARY_TEXT_DEFAULT;
            var41['color'] = var43;
            var41 = var24.bind(var5)(var42, var41);
            var33['icon'] = var41;
            var41 = var26[var36];
            var41 = var37.bind(var5)(var41);
            var43 = var41.intl;
            var42 = var43.string;
            var41 = var26[var36];
            var41 = var37.bind(var5)(var41);
            var41 = var41.t;
            var41 = var41.zROXEV;
            var41 = var42.bind(var43)(var41);
            var33['text'] = var41;
            var41 = 'secondary';
            var33['variant'] = var41;
            var33['disabled'] = var39;
            var33['grow'] = var38;
            var38 = var26[var36];
            var38 = var37.bind(var5)(var38);
            var39 = var38.intl;
            var38 = var39.formatToPlainString;
            var36 = var26[var36];
            var36 = var37.bind(var5)(var36);
            var36 = var36.t;
            var37 = var36.zFfSFQ;
            var36 = {};
            var40 = var26[var40];
            var41 = var20.bind(var5)(var40);
            var40 = var41.getName;
            var40 = var40.bind(var41)(var23);
            var36['name'] = var40;
            var36 = var38.bind(var39)(var37, var36);
            var33['accessibilityHint'] = var36;
            var35 = function onPress() {
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
            var33['onPress'] = var35;
            var33 = var24.bind(var5)(var34, var33);
            var27['secondaryButton'] = var33;
            var27 = var29.bind(var5)(var28, var27);
            var22[2] = var27;
            var14['children'] = var22;
            var14 = var19.bind(var5)(var16, var14);
            var13[1] = var14;
            var14 = var17.card;
            var22 = new Array(2);
            var22[0] = var14;
            var14 = {};
            var14['backgroundColor'] = var15;
            var22[1] = var14;
            var16 = _closure1_slot10;
            var15 = _closure1_slot4;
            var14 = {};
            var17 = var17.cards;
            var14['style'] = var17;
            var17 = 40;
            var17 = var26[var17];
            var19 = var20.bind(var5)(var17);
            var17 = {};
            var17['user'] = var23;
            var17['currentUser'] = var32;
            var17['guildId'] = var30;
            var17['style'] = var22;
            var19 = var24.bind(var5)(var19, var17);
            var17 = new Array(4);
            var17[0] = var19;
            var19 = 41;
            var19 = var26[var19];
            var20 = var20.bind(var5)(var19);
            var19 = {};
            var26 = var23.id;
            var19['userId'] = var26;
            var19['displayProfile'] = var25;
            var19['channel'] = var31;
            var19['style'] = var22;
            var19 = var24.bind(var5)(var20, var19);
            var17[1] = var19;
            var19 = var1 != var30;
            if(!var19) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var25 = _closure1_slot10;
            var24 = _closure1_slot11;
            var20 = {};
            var29 = _closure1_slot9;
            var28 = _closure1_slot1;
            var33 = _closure1_slot2;
            var26 = 42;
            var26 = var33[var26];
            var27 = var28.bind(var5)(var26);
            var26 = {};
            var34 = var23.id;
            var26['userId'] = var34;
            var26['guildId'] = var30;
            var26['style'] = var22;
            var27 = var29.bind(var5)(var27, var26);
            var26 = new Array(2);
            var26[0] = var27;
            var27 = 43;
            var27 = var33[var27];
            var28 = var28.bind(var5)(var27);
            var27 = {};
            var27['user'] = var23;
            var27['currentUser'] = var32;
            var27['guildId'] = var30;
            var32 = var1 == var31;
            var30 = undefined;
            if(var32) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var30 = var31.id;
case 36:
            var27['channelId'] = var30;
            var27['showUserProfile'] = var21;
            var27['style'] = var22;
            var27 = var29.bind(var5)(var28, var27);
            var26[1] = var27;
            var20['children'] = var26;
            var19 = var25.bind(var5)(var24, var20);
case 34:
            var17[2] = var19;
            var20 = _closure1_slot9;
            var19 = _closure1_slot1;
            var24 = _closure1_slot2;
            var18 = 44;
            var18 = var24[var18];
            var19 = var19.bind(var5)(var18);
            var18 = {};
            var23 = var23.id;
            var18['userId'] = var23;
            var18['style'] = var22;
            var18['onBack'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var17[3] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var5)(var15, var14);
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
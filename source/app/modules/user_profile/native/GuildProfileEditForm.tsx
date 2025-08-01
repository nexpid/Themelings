// app/modules/user_profile/native/GuildProfileEditForm.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function EditGuildProfileBanner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var17 = var1.user;
            var _closure2_slot0 = var17;
            var16 = var1.displayProfile;
            var13 = var1.guildMember;
            var2 = var1.guildMemberProfile;
            var _closure2_slot1 = var2;
            var14 = var1.pendingAvatarSrc;
            var15 = var1.pendingBanner;
            var _closure2_slot2 = var15;
            var12 = var1.pendingThemeColors;
            var8 = var1.disabled;
            var6 = _closure1_slot1;
            var18 = _closure1_slot2;
            var1 = 9;
            var1 = var18[var1];
            var4 = undefined;
            var2 = var6.bind(var4)(var1);
            var1 = var2.canUsePremiumGuildMemberProfile;
            var11 = var1.bind(var2)(var17);
            var _closure2_slot3 = var11;
            var1 = 10;
            var2 = var18[var1];
            var3 = var6.bind(var4)(var2);
            var2 = 11;
            var2 = var18[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.EDIT_BANNER;
            var2 = var3.bind(var4)(var2);
            var5 = var2.analyticsLocations;
            var _closure2_slot4 = var5;
            var3 = _closure1_slot18;
            var2 = _closure1_slot0;
            var1 = var18[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot18;
            var5 = 12;
            var5 = var18[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['user'] = var17;
            var5['displayProfile'] = var16;
            var5['pendingBanner'] = var15;
            var5['pendingAvatarSrc'] = var14;
            var5['pendingThemeColors'] = var12;
            var12 = false;
            var5['showProfilePreviewButton'] = var12;
            if(!var11) { _fun0001_ip = 235; continue _fun0001 }
 229:
            var12 = null;
            var11 = var12 != var13;
 235:
            var5['showEditButton'] = var11;
            var10 = function onPressEdit() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot3;
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    if(var2) { _fun0002_ip = 134; continue _fun0002 }
 21:
                    var2 = 19;
                    var4 = var9[var2];
                    var2 = undefined;
                    var5 = var3.bind(var2)(var4);
                    var4 = var5.handleShowUpsellAlert;
                    var2 = {};
                    var6 = _closure1_slot16;
                    var6 = var6.PREMIUM_GUILD_PROFILE;
                    var2['initialUpsellKey'] = var6;
                    var6 = {};
                    var7 = _closure1_slot12;
                    var7 = var7.PREMIUM_GUILD_MEMBER_PROFILE;
                    var6['section'] = var7;
                    var7 = _closure1_slot11;
                    var7 = var7.EDIT_GUILD_PROFILE_BANNER;
                    var6['object'] = var7;
                    var2['analyticsLocation'] = var6;
                    var6 = _closure2_slot4;
                    var2['analyticsLocations'] = var6;
                    var6 = {};
                    var7 = _closure1_slot17;
                    var7 = var7.PREMIUM_GUILD_IDENTITY_MODAL;
                    var6['type'] = var7;
                    var2['analyticsProperties'] = var6;
                    var2 = var4.bind(var5)(var2);
                    _fun0002_ip = 363; continue _fun0002;
 134:
                    var2 = 13;
                    var2 = var9[var2];
                    var7 = undefined;
                    var5 = var3.bind(var7)(var2);
                    var4 = var5.openLazy;
                    var8 = _closure1_slot0;
                    var2 = 15;
                    var2 = var9[var2];
                    var6 = var8.bind(var7)(var2);
                    var2 = 14;
                    var3 = var9[var2];
                    var2 = var9.paths;
                    var3 = var6.bind(var7)(var3, var2);
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2['user'] = var6;
                    var6 = _closure2_slot4;
                    var2['analyticsLocations'] = var6;
                    var6 = 16;
                    var6 = var9[var6];
                    var10 = var8.bind(var7)(var6);
                    var9 = var10.showRemoveBanner;
                    var8 = _closure2_slot2;
                    var12 = _closure2_slot1;
                    var6 = null;
                    var12 = var6 == var12;
                    var6 = undefined;
                    if(var12) { _fun0002_ip = 254; continue _fun0002 }
 244:
                    var11 = _closure2_slot1;
                    var6 = var11.banner;
 254:
                    var6 = var9.bind(var10)(var8, var6);
                    var2['showRemoveBanner'] = var6;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 17;
                    var9 = var8[var1];
                    var9 = var6.bind(var7)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var1 = var8[var1];
                    var1 = var6.bind(var7)(var1);
                    var1 = var1.t;
                    var1 = var1.jHlJNT;
                    var1 = var9.bind(var10)(var1);
                    var2['removeText'] = var1;
                    var1 = 18;
                    var1 = var8[var1];
                    var1 = var6.bind(var7)(var1);
                    var1 = var1.setPendingBanner;
                    var2['onBannerChange'] = var1;
                    var1 = 'Change Banner';
                    var1 = var4.bind(var5)(var3, var1, var2);
 363:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['onPressEdit'] = var10;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 17;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.95hPAQ;
            var9 = var10.bind(var11)(var9);
            var5['editButtonAccessibilityLabel'] = var9;
            var5['editDisabled'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = ['nick', 'bio', 'guild_tag'];
    var _closure1_slot3 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ScrollView;
    var _closure1_slot6 = var8;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FLOATING_UPSELL_HEIGHT;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsObjects;
    var _closure1_slot11 = var7;
    var8 = var4.AnalyticsPages;
    var7 = var4.AnalyticsSections;
    var _closure1_slot12 = var7;
    var9 = var4.BIO_MAX_LENGTH;
    var _closure1_slot13 = var9;
    var9 = var4.DISPLAY_NAME_MAX_LENGTH;
    var _closure1_slot14 = var9;
    var9 = var4.PRONOUNS_MAX_LENGTH;
    var _closure1_slot15 = var9;
    var4 = var4.UpsellTypes;
    var _closure1_slot16 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumUpsellTypes;
    var _closure1_slot17 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot18 = var9;
    var4 = var4.jsxs;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = var8.USER_SETTINGS;
    var4['page'] = var8;
    var7 = var7.SETTINGS_CUSTOMIZE_PROFILE;
    var4['section'] = var7;
    var _closure1_slot20 = var4;
    var4 = 51;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/GuildProfileEditForm.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildProfileEditForm(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var38 = var1.currentUser;
            var _closure2_slot0 = var38;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var63 = 20;
            var1 = var7[var63];
            var1 = var6.bind(var5)(var1);
            var65 = var1.bind(var5)();
            var1 = 21;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var16 = var1.bind(var5)();
            var1 = 22;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var2 = var1.bind(var5)();
            var4 = _closure1_slot5;
            var3 = var4.useRef;
            var1 = null;
            var12 = var3.bind(var4)(var1);
            var3 = var4.useRef;
            var21 = var3.bind(var4)(var1);
            var3 = var4.useRef;
            var56 = var3.bind(var4)(var1);
            var3 = var4.useRef;
            var51 = var3.bind(var4)(var1);
            var3 = 23;
            var3 = var7[var3];
            var4 = var6.bind(var5)(var3);
            var3 = {};
            var45 = true;
            var3['includeKeyboardHeightIOS'] = var45;
            var3 = var4.bind(var5)(var3);
            var19 = var3.insets;
            var20 = 24;
            var3 = var7[var20];
            var3 = var6.bind(var5)(var3);
            var3 = var3.spacing;
            var11 = var3.PX_16;
            var3 = 25;
            var3 = var7[var3];
            var4 = var6.bind(var5)(var3);
            var3 = {};
            var3['insets'] = var19;
            var9 = {};
            var9['ref'] = var21;
            var8 = {};
            var13 = 'toRef';
            var8['type'] = var13;
            var8['ref'] = var56;
            var8['extraOffset'] = var11;
            var9['offset'] = var8;
            var8 = new Array(3);
            var8[0] = var9;
            var9 = {};
            var9['ref'] = var56;
            var10 = {};
            var10['type'] = var13;
            var10['ref'] = var51;
            var10['extraOffset'] = var11;
            var9['offset'] = var10;
            var8[1] = var9;
            var9 = {};
            var9['ref'] = var51;
            var10 = {};
            var11 = 'toValue';
            var10['type'] = var11;
            var11 = var7[var20];
            var11 = var6.bind(var5)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_64;
            var10['value'] = var11;
            var9['offset'] = var10;
            var8[2] = var9;
            var3['inputs'] = var8;
            var3['scrollViewRef'] = var12;
            var3 = var4.bind(var5)(var3);
            var46 = var3.onFocus;
            var3 = 26;
            var3 = var7[var3];
            var3 = var6.bind(var5)(var3);
            var4 = var3.bind(var5)();
            var37 = var4.guild;
            var _closure2_slot1 = var37;
            var3 = var4.errors;
            var40 = var4.isDisabled;
            var58 = var4.pendingNickname;
            var11 = var4.pendingAvatar;
            var25 = var4.pendingBanner;
            var43 = var4.pendingThemeColors;
            var53 = var4.pendingPronouns;
            var48 = var4.pendingBio;
            var41 = var4.pendingAvatarDecoration;
            var36 = var4.pendingProfileEffectId;
            var8 = _closure1_slot0;
            var4 = 27;
            var9 = var7[var4];
            var17 = var8.bind(var5)(var9);
            var13 = var17.useStateFromStores;
            var9 = _closure1_slot8;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0004_ip = 53; continue _fun0004 }
 16:
                    var5 = _closure1_slot8;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
 53:
                    return var1;
                }
            };
            var61 = var13.bind(var17)(var10, var9);
            var _closure2_slot2 = var61;
            var4 = var7[var4];
            var10 = var8.bind(var5)(var4);
            var9 = var10.useStateFromStores;
            var4 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot1;
                    var7 = null;
                    var2 = var7 != var1;
                    var1 = null;
                    if(!var2) { _fun0005_ip = 68; continue _fun0005 }
 18:
                    var5 = _closure1_slot9;
                    var4 = var5.getGuildMemberProfile;
                    var2 = _closure2_slot0;
                    var3 = var2.id;
                    var2 = _closure2_slot1;
                    var7 = var7 == var2;
                    var2 = undefined;
                    if(var7) { _fun0005_ip = 62; continue _fun0005 }
 53:
                    var6 = _closure2_slot1;
                    var2 = var6.id;
 62:
                    var1 = var4.bind(var5)(var3, var2);
 68:
                    return var1;
                }
            };
            var26 = var9.bind(var10)(var8, var4);
            var _closure2_slot3 = var26;
            var4 = 28;
            var4 = var7[var4];
            var7 = var6.bind(var5)(var4);
            var6 = var38.id;
            var8 = var1 == var37;
            var4 = undefined;
            if(var8) { _fun0003_ip = 556; continue _fun0003 }
 551:
            var4 = var37.id;
 556:
            var35 = var7.bind(var5)(var6, var4);
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 29;
            var4 = var7[var4];
            var8 = var6.bind(var5)(var4);
            var4 = var8.useCustomStatusActivity;
            var67 = var4.bind(var8)();
            var8 = _closure1_slot1;
            var4 = 30;
            var4 = var7[var4];
            var4 = var8.bind(var5)(var4);
            var32 = var4.bind(var5)(var35);
            var4 = 31;
            var4 = var7[var4];
            var10 = var6.bind(var5)(var4);
            var9 = var10.getPendingAvatarSrc;
            var4 = {};
            var13 = var38.id;
            var4['userId'] = var13;
            var4['image'] = var11;
            var44 = var9.bind(var10)(var4);
            var4 = 32;
            var4 = var7[var4];
            var9 = var6.bind(var5)(var4);
            var4 = var9.useGuildActionSheetPermissions;
            var4 = var4.bind(var9)(var37);
            var54 = var4.canEditNickname;
            var4 = 9;
            var4 = var7[var4];
            var8 = var8.bind(var5)(var4);
            var4 = var8.canUsePremiumGuildMemberProfile;
            var34 = var4.bind(var8)(var38);
            var4 = 33;
            var4 = var7[var4];
            var7 = var6.bind(var5)(var4);
            var6 = var7.canResetThemeColors;
            var8 = var1 == var26;
            var4 = undefined;
            if(var8) { _fun0003_ip = 737; continue _fun0003 }
 731:
            var4 = var26.themeColors;
 737:
            var42 = var6.bind(var7)(var43, var4);
            var10 = !var34;
            if(!var10) { _fun0003_ip = 752; continue _fun0003 }
 749:
            var10 = !var2;
 752:
            var4 = var1 == var61;
            var2 = undefined;
            if(var4) { _fun0003_ip = 767; continue _fun0003 }
 761:
            var2 = var61.nick;
 767:
            var4 = var1 != var2;
            var33 = '';
            var57 = var33;
            if(!var4) { _fun0003_ip = 784; continue _fun0003 }
 781:
            var57 = var2;
 784:
            var4 = var1 == var35;
            var2 = undefined;
            if(var4) { _fun0003_ip = 799; continue _fun0003 }
 793:
            var2 = var35.pronouns;
 799:
            var4 = var1 != var2;
            var52 = var33;
            if(!var4) { _fun0003_ip = 812; continue _fun0003 }
 809:
            var52 = var2;
 812:
            _closure2_slot4 = var52;
            var4 = var1 == var35;
            var2 = undefined;
            if(var4) { _fun0003_ip = 831; continue _fun0003 }
 825:
            var2 = var35.bio;
 831:
            var4 = var1 != var2;
            var47 = var33;
            if(!var4) { _fun0003_ip = 844; continue _fun0003 }
 841:
            var47 = var2;
 844:
            _closure2_slot5 = var47;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 10;
            var2 = var7[var2];
            var6 = var4.bind(var5)(var2);
            var2 = 11;
            var2 = var7[var2];
            var2 = var4.bind(var5)(var2);
            var8 = var2.USER_SETTINGS;
            var2 = new Array(1);
            var2[0] = var8;
            var2 = var6.bind(var5)(var2);
            var2 = var2.analyticsLocations;
            _closure2_slot6 = var2;
            var2 = 34;
            var2 = var7[var2];
            var4 = var4.bind(var5)(var2);
            var2 = {};
            var2['user'] = var38;
            var2['displayProfile'] = var35;
            var2['pendingThemeColors'] = var43;
            var2 = var4.bind(var5)(var2);
            var6 = var2.theme;
            var66 = var2.primaryColor;
            var27 = var2.secondaryColor;
            var4 = _closure1_slot0;
            var2 = 35;
            var2 = var7[var2];
            var7 = var4.bind(var5)(var2);
            var4 = var7.useUserProfileColors;
            var2 = {};
            var2['theme'] = var6;
            var2['primaryColor'] = var66;
            var2['secondaryColor'] = var27;
            var2 = var4.bind(var7)(var2);
            var28 = var2.gradientFallbackBackground;
            var22 = var2.gradientSecondaryBackground;
            var64 = var2.containerBackground;
            var2 = var2.avatarBackground;
            var7 = var19.bottom;
            var60 = 0;
            var4 = 0;
            if(!var10) { _fun0003_ip = 1042; continue _fun0003 }
 1038:
            var4 = _closure1_slot10;
 1042:
            var7 = var7 + var4;
            var8 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var20];
            var4 = var8.bind(var5)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_16;
            var30 = var7 + var4;
            var68 = {};
            var68['backgroundColor'] = var2;
            var7 = var3.nick;
            var4 = var3.bio;
            var2 = var3.guild_tag;
            var9 = _closure1_slot4;
            var8 = _closure1_slot3;
            var62 = var9.bind(var5)(var3, var8);
            var8 = var1 == var7;
            var59 = undefined;
            if(var8) { _fun0003_ip = 1128; continue _fun0003 }
 1124:
            var59 = var7[var60];
 1128:
            var7 = var3.pronouns;
            var8 = var1 == var7;
            var55 = undefined;
            if(var8) { _fun0003_ip = 1147; continue _fun0003 }
 1143:
            var55 = var7[var60];
 1147:
            var7 = var1 == var4;
            var50 = undefined;
            if(var7) { _fun0003_ip = 1160; continue _fun0003 }
 1156:
            var50 = var4[var60];
 1160:
            var4 = var1 == var2;
            var31 = undefined;
            if(var4) { _fun0003_ip = 1173; continue _fun0003 }
 1169:
            var31 = var2[var60];
 1173:
            var39 = global;
            var4 = var39.parseInt;
            var2 = var1 == var3;
            var7 = undefined;
            if(var2) { _fun0003_ip = 1195; continue _fun0003 }
 1190:
            var7 = var3.code;
 1195:
            var8 = var1 != var7;
            var2 = var33;
            if(!var8) { _fun0003_ip = 1208; continue _fun0003 }
 1205:
            var2 = var7;
 1208:
            var4 = var4.bind(var5)(var2);
            var2 = 200005;
            var49 = null;
            if(!(var2 === var4)) { _fun0003_ip = 1242; continue _fun0003 }
 1225:
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0003_ip = 1239; continue _fun0003 }
 1234:
            var2 = var3.message;
 1239:
            var49 = var2;
 1242:
            if(!(var1 != var37)) { _fun0003_ip = 3228; continue _fun0003 }
 1249:
            var4 = _closure1_slot18;
            var3 = _closure1_slot0;
            var69 = _closure1_slot2;
            var2 = 37;
            var2 = var69[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.ThemeContextProvider;
            var2 = {};
            var2['theme'] = var6;
            var2['primaryColor'] = var66;
            var2['secondaryColor'] = var27;
            var8 = _closure1_slot19;
            var7 = _closure1_slot7;
            var6 = {};
            var11 = var16.container;
            var9 = new Array(2);
            var9[0] = var11;
            var11 = {};
            var11['backgroundColor'] = var22;
            var9[1] = var11;
            var6['style'] = var9;
            var11 = _closure1_slot6;
            var9 = {};
            var9['ref'] = var12;
            var13 = _closure1_slot18;
            var12 = {};
            var17 = var16.bounceOffset;
            var12['style'] = var17;
            var13 = var13.bind(var5)(var7, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var29 = _closure1_slot1;
            var24 = 38;
            var13 = var69[var24];
            var17 = var29.bind(var5)(var13);
            var13 = {};
            var13['fallbackBackground'] = var28;
            var13['primaryColor'] = var66;
            var13['secondaryColor'] = var27;
            var18 = {};
            var18['backgroundColor'] = var22;
            var13['containerStyle'] = var18;
            var23 = _closure1_slot18;
            var22 = _closure1_slot21;
            var18 = {};
            var18['user'] = var38;
            var18['displayProfile'] = var35;
            var18['guildMember'] = var61;
            var18['guildMemberProfile'] = var26;
            var18['pendingAvatarSrc'] = var44;
            var18['pendingBanner'] = var25;
            var18['pendingThemeColors'] = var43;
            var18['disabled'] = var40;
            var22 = var23.bind(var5)(var22, var18);
            var18 = new Array(2);
            var18[0] = var22;
            var22 = {};
            var25 = _closure1_slot18;
            var23 = {};
            var61 = var65.avatarBackground;
            var26 = new Array(4);
            var26[0] = var61;
            var61 = var65.avatarPosition;
            var26[1] = var61;
            var61 = var16.avatarContainer;
            var26[2] = var61;
            var26[3] = var68;
            var23['style'] = var26;
            var61 = _closure1_slot18;
            var26 = 39;
            var26 = var69[var26];
            var29 = var29.bind(var5)(var26);
            var26 = {};
            var69 = var38.id;
            var26['userId'] = var69;
            var69 = var40;
            if(var40) { _fun0003_ip = 1564; continue _fun0003 }
 1561:
            var69 = !var34;
 1564:
            var26['disabled'] = var69;
            var69 = false;
            var26['disableStatus'] = var69;
            var70 = var1 == var37;
            var69 = undefined;
            if(var70) { _fun0003_ip = 1589; continue _fun0003 }
 1584:
            var69 = var37.id;
 1589:
            var26['guildId'] = var69;
            var26['statusStyle'] = var68;
            var26 = var61.bind(var5)(var29, var26);
            var23['children'] = var26;
            var25 = var25.bind(var5)(var7, var23);
            var23 = new Array(2);
            var23[0] = var25;
            var26 = _closure1_slot19;
            var29 = _closure1_slot1;
            var61 = _closure1_slot2;
            var24 = var61[var24];
            var25 = var29.bind(var5)(var24);
            var24 = {};
            var24['fallbackBackground'] = var28;
            var24['primaryColor'] = var66;
            var24['secondaryColor'] = var27;
            var28 = var65.profileContent;
            var27 = new Array(2);
            var27[0] = var28;
            var28 = {};
            var28['paddingTop'] = var60;
            var28['paddingBottom'] = var30;
            var27[1] = var28;
            var24['containerStyle'] = var27;
            var30 = _closure1_slot18;
            var27 = 40;
            var27 = var61[var27];
            var28 = var29.bind(var5)(var27);
            var27 = {};
            var27['customStatusActivity'] = var67;
            var66 = var1 != var66;
            var27['hasCustomProfileTheme'] = var66;
            var66 = var65.customStatusBubble;
            var27['style'] = var66;
            var65 = var65.emojiOnlyCustomStatusBubble;
            var27['emojiOnlyStyle'] = var65;
            var27['editEnabled'] = var45;
            var28 = var30.bind(var5)(var28, var27);
            var27 = new Array(3);
            var27[0] = var28;
            var30 = _closure1_slot18;
            var28 = 41;
            var28 = var61[var28];
            var29 = var29.bind(var5)(var28);
            var28 = {};
            var28['user'] = var38;
            var61 = var57;
            if(!(var1 != var58)) { _fun0003_ip = 1799; continue _fun0003 }
 1796:
            var61 = var58;
 1799:
            var28['displayName'] = var61;
            var61 = var52;
            if(!(var1 != var53)) { _fun0003_ip = 1813; continue _fun0003 }
 1810:
            var61 = var53;
 1813:
            var28['pronouns'] = var61;
            var28['badges'] = var32;
            var28['badgeContainerBackground'] = var64;
            var28 = var30.bind(var5)(var29, var28);
            var27[1] = var28;
            var30 = _closure1_slot19;
            var29 = _closure1_slot7;
            var28 = {};
            var61 = var16.formContainer;
            var32 = new Array(2);
            var32[0] = var61;
            var61 = {};
            var61['backgroundColor'] = var64;
            var61['paddingBottom'] = var63;
            var32[1] = var61;
            var28['style'] = var32;
            var61 = var1 != var50;
            var32 = null;
            if(var61) { _fun0003_ip = 2114; continue _fun0003 }
 1893:
            var61 = var1 != var59;
            var32 = null;
            if(var61) { _fun0003_ip = 2114; continue _fun0003 }
 1905:
            if(!(var1 == var31)) { _fun0003_ip = 2010; continue _fun0003 }
 1909:
            var61 = var39.Object;
            var39 = var61.keys;
            var39 = var39.bind(var61)(var62);
            var39 = var39.length;
            var39 = var39 > var60;
            var63 = null;
            if(!var39) { _fun0003_ip = 2008; continue _fun0003 }
 1939:
            if(!(var1 == var49)) { _fun0003_ip = 2002; continue _fun0003 }
 1943:
            var62 = _closure1_slot0;
            var64 = _closure1_slot2;
            var39 = 17;
            var60 = var64[var39];
            var60 = var62.bind(var5)(var60);
            var61 = var60.intl;
            var60 = var61.string;
            var39 = var64[var39];
            var39 = var62.bind(var5)(var39);
            var39 = var39.t;
            var39 = var39.s35OuL;
            var39 = var60.bind(var61)(var39);
            _fun0003_ip = 2005; continue _fun0003;
 2002:
            var39 = var49;
 2005:
            var63 = var39;
 2008:
            _fun0003_ip = 2013; continue _fun0003;
 2010:
            var63 = var31;
 2013:
            var39 = var1 == var63;
            var31 = null;
            if(var39) { _fun0003_ip = 2111; continue _fun0003 }
 2022:
            var31 = null;
            if(!(var33 !== var63)) { _fun0003_ip = 2111; continue _fun0003 }
 2028:
            var49 = _closure1_slot18;
            var39 = _closure1_slot7;
            var33 = {};
            var60 = var16.errorContainer;
            var33['style'] = var60;
            var62 = _closure1_slot18;
            var61 = _closure1_slot0;
            var64 = _closure1_slot2;
            var60 = 36;
            var60 = var64[var60];
            var60 = var61.bind(var5)(var60);
            var61 = var60.Text;
            var60 = {'variant': 'text-sm/bold', 'color': 'status-danger'};
            var60['children'] = var63;
            var60 = var62.bind(var5)(var61, var60);
            var33['children'] = var60;
            var31 = var49.bind(var5)(var39, var33);
 2111:
            var32 = var31;
 2114:
            var31 = new Array(7);
            var31[0] = var32;
            var49 = _closure1_slot18;
            var39 = _closure1_slot1;
            var60 = _closure1_slot2;
            var33 = 42;
            var32 = var60[var33];
            var39 = var39.bind(var5)(var32);
            var32 = {};
            var32['scrollTargetRef'] = var21;
            var63 = _closure1_slot0;
            var21 = 17;
            var61 = var60[var21];
            var61 = var63.bind(var5)(var61);
            var62 = var61.intl;
            var61 = var62.string;
            var60 = var60[var21];
            var60 = var63.bind(var5)(var60);
            var60 = var60.t;
            var60 = var60.me1lRk;
            var60 = var61.bind(var62)(var60);
            var32['label'] = var60;
            var32['errorMessage'] = var59;
            if(!(var1 != var58)) { _fun0003_ip = 2222; continue _fun0003 }
 2219:
            var57 = var58;
 2222:
            var32['value'] = var57;
            var32['onFocus'] = var46;
            var57 = function onChange(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var2 = '';
                    if(!(var2 === var1)) { _fun0006_ip = 48; continue _fun0006 }
 11:
                    var2 = _closure2_slot2;
                    var3 = null;
                    var6 = var3 == var2;
                    var2 = undefined;
                    if(var6) { _fun0006_ip = 39; continue _fun0006 }
 29:
                    var4 = _closure2_slot2;
                    var2 = var4.nick;
 39:
                    var2 = var3 == var2;
                    var5 = undefined;
                    if(var2) { _fun0006_ip = 51; continue _fun0006 }
 48:
                    var5 = var1;
 51:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 33;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setNewPendingNickname;
                    var7 = _closure2_slot2;
                    var2 = null;
                    var7 = var2 == var7;
                    var2 = undefined;
                    if(var7) { _fun0006_ip = 110; continue _fun0006 }
 100:
                    var6 = _closure2_slot2;
                    var2 = var6.nick;
 110:
                    var2 = var3.bind(var4)(var5, var2);
                    return var1;
                }
            };
            var32['onChange'] = var57;
            var58 = _closure1_slot1;
            var59 = _closure1_slot2;
            var57 = 43;
            var57 = var59[var57];
            var58 = var58.bind(var5)(var57);
            var57 = var58.getName;
            var57 = var57.bind(var58)(var38);
            var32['placeholder'] = var57;
            var57 = _closure1_slot14;
            var32['maxLength'] = var57;
            var54 = !var54;
            if(var54) { _fun0003_ip = 2297; continue _fun0003 }
 2294:
            var54 = var40;
 2297:
            var32['disabled'] = var54;
            var32 = var49.bind(var5)(var39, var32);
            var31[1] = var32;
            var49 = _closure1_slot18;
            var39 = _closure1_slot1;
            var54 = _closure1_slot2;
            var32 = var54[var33];
            var39 = var39.bind(var5)(var32);
            var32 = {};
            var32['scrollTargetRef'] = var56;
            var57 = _closure1_slot0;
            var56 = var54[var21];
            var56 = var57.bind(var5)(var56);
            var59 = var56.intl;
            var58 = var59.string;
            var56 = var54[var21];
            var56 = var57.bind(var5)(var56);
            var56 = var56.t;
            var56 = var56.+T3RIy;
            var56 = var58.bind(var59)(var56);
            var32['label'] = var56;
            var32['errorMessage'] = var55;
            var55 = var54[var21];
            var55 = var57.bind(var5)(var55);
            var56 = var55.intl;
            var55 = var56.string;
            var54 = var54[var21];
            var54 = var57.bind(var5)(var54);
            var54 = var54.t;
            var54 = var54.NZqtIi;
            var54 = var55.bind(var56)(var54);
            var32['description'] = var54;
            if(!(var1 != var53)) { _fun0003_ip = 2453; continue _fun0003 }
 2450:
            var52 = var53;
 2453:
            var32['value'] = var52;
            var32['onFocus'] = var46;
            var52 = function onChange(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 33;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setNewPendingGuildIdentityPronouns;
                var2 = _closure2_slot4;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var32['onChange'] = var52;
            var52 = _closure1_slot15;
            var32['maxLength'] = var52;
            var32['disabled'] = var40;
            var32 = var49.bind(var5)(var39, var32);
            var31[2] = var32;
            var32 = null;
            if(!var34) { _fun0003_ip = 2700; continue _fun0003 }
 2505:
            var39 = _closure1_slot18;
            var34 = _closure1_slot1;
            var49 = _closure1_slot2;
            var33 = var49[var33];
            var34 = var34.bind(var5)(var33);
            var33 = {};
            var33['scrollTargetRef'] = var51;
            var52 = _closure1_slot0;
            var51 = var49[var21];
            var51 = var52.bind(var5)(var51);
            var54 = var51.intl;
            var53 = var54.string;
            var51 = var49[var21];
            var51 = var52.bind(var5)(var51);
            var51 = var51.t;
            var51 = var51.NepzEx;
            var51 = var53.bind(var54)(var51);
            var33['label'] = var51;
            var33['errorMessage'] = var50;
            var50 = var49[var21];
            var50 = var52.bind(var5)(var50);
            var51 = var50.intl;
            var50 = var51.string;
            var49 = var49[var21];
            var49 = var52.bind(var5)(var49);
            var49 = var49.t;
            var49 = var49.gYETnp;
            var49 = var50.bind(var51)(var49);
            var33['description'] = var49;
            if(!(var1 != var48)) { _fun0003_ip = 2647; continue _fun0003 }
 2644:
            var47 = var48;
 2647:
            var33['value'] = var47;
            var33['onFocus'] = var46;
            var46 = function onChange(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 33;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setNewPendingGuildIdentityBio;
                var2 = _closure2_slot5;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var33['onChange'] = var46;
            var46 = _closure1_slot13;
            var33['maxLength'] = var46;
            var46 = 5;
            var33['numberOfLines'] = var46;
            var33['multiline'] = var45;
            var33['disabled'] = var40;
            var32 = var39.bind(var5)(var34, var33);
 2700:
            var31[3] = var32;
            var40 = _closure1_slot18;
            var33 = _closure1_slot1;
            var39 = _closure1_slot2;
            var32 = 44;
            var32 = var39[var32];
            var34 = var33.bind(var5)(var32);
            var32 = {};
            var32['pendingAvatarSrc'] = var44;
            var32['pendingThemeColors'] = var43;
            var32['user'] = var38;
            var43 = var37.id;
            var32['guildId'] = var43;
            var43 = function onProfileThemeColorsChanged(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 33;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.setNewPendingGuildIdentityThemeColors;
                    var6 = _closure2_slot3;
                    var3 = null;
                    var6 = var3 == var6;
                    var3 = undefined;
                    if(var6) { _fun0007_ip = 59; continue _fun0007 }
 49:
                    var2 = _closure2_slot3;
                    var3 = var2.themeColors;
 59:
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                }
            };
            var32['onProfileThemeColorsChanged'] = var43;
            var32['showResetMenu'] = var42;
            var32 = var40.bind(var5)(var34, var32);
            var31[4] = var32;
            var40 = _closure1_slot18;
            var32 = 45;
            var32 = var39[var32];
            var34 = var33.bind(var5)(var32);
            var32 = {};
            var32['user'] = var38;
            var42 = var37.id;
            var32['guildId'] = var42;
            var32['pendingAvatarDecoration'] = var41;
            var32 = var40.bind(var5)(var34, var32);
            var31[5] = var32;
            var34 = _closure1_slot18;
            var32 = 46;
            var32 = var39[var32];
            var33 = var33.bind(var5)(var32);
            var32 = {};
            var32['user'] = var38;
            var37 = var37.id;
            var32['guildId'] = var37;
            var32['pendingProfileEffectId'] = var36;
            var32['displayProfile'] = var35;
            var32 = var34.bind(var5)(var33, var32);
            var31[6] = var32;
            var28['children'] = var31;
            var28 = var30.bind(var5)(var29, var28);
            var27[2] = var28;
            var24['children'] = var27;
            var24 = var26.bind(var5)(var25, var24);
            var23[1] = var24;
            var22['children'] = var23;
            var22 = var8.bind(var5)(var7, var22);
            var18[1] = var22;
            var13['children'] = var18;
            var13 = var8.bind(var5)(var17, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var11 = var8.bind(var5)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            if(!var10) { _fun0003_ip = 3202; continue _fun0003 }
 2957:
            var13 = _closure1_slot18;
            var22 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 47;
            var11 = var17[var11];
            var12 = var22.bind(var5)(var11);
            var11 = {};
            var18 = var16.floatingUpsell;
            var16 = new Array(2);
            var16[0] = var18;
            var18 = {};
            var20 = var17[var20];
            var20 = var22.bind(var5)(var20);
            var20 = var20.spacing;
            var20 = var20.PX_16;
            var19 = var19.bottom;
            var19 = var20 + var19;
            var18['bottom'] = var19;
            var16[1] = var18;
            var11['style'] = var16;
            var20 = _closure1_slot0;
            var16 = var17[var21];
            var16 = var20.bind(var5)(var16);
            var19 = var16.intl;
            var18 = var19.string;
            var16 = var17[var21];
            var16 = var20.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.pj0XBA;
            var16 = var18.bind(var19)(var16);
            var11['ctaText'] = var16;
            var15 = function onPress() {
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 48;
                var2 = var8[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.pushLazy;
                var7 = _closure1_slot0;
                var2 = 15;
                var2 = var8[var2];
                var6 = var7.bind(var1)(var2);
                var2 = 49;
                var3 = var8[var2];
                var2 = var8.paths;
                var3 = var6.bind(var1)(var3, var2);
                var2 = {};
                var6 = {};
                var11 = _closure1_slot20;
                var12 = var6;
                var10 = copyDataProperties(var12, var11);
                var9 = _closure1_slot11;
                var10 = var9.BUTTON_CTA;
                var9 = 'object';
                var6[var9] = var10;
                var2['analyticsLocation'] = var6;
                var6 = _closure2_slot6;
                var2['analyticsLocations'] = var6;
                var6 = 50;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.PremiumFeatureCardOrder;
                var6 = var6.TIER_2_LEADING;
                var2['premiumFeatureCardOrder'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var11['onPress'] = var15;
            var16 = _closure1_slot18;
            var14 = 36;
            var14 = var17[var14];
            var14 = var20.bind(var5)(var14);
            var15 = var14.Text;
            var14 = {};
            var18 = 'text-sm/normal';
            var14['variant'] = var18;
            var18 = var17[var21];
            var18 = var20.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var21];
            var17 = var20.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.YIZS5O;
            var17 = var18.bind(var19)(var17);
            var14['children'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var11['children'] = var14;
            var10 = var13.bind(var5)(var12, var11);
 3202:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 3228:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
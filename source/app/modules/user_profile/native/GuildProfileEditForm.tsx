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
case 0:
            var1 = arg1;
            var17 = var1.user;
            var _closure2_slot0 = var17;
            var16 = var1.displayProfile;
            var2 = var1.guildId;
            var _closure2_slot1 = var2;
            var13 = var1.guildMember;
            var2 = var1.guildMemberProfile;
            var _closure2_slot2 = var2;
            var14 = var1.pendingAvatarSrc;
            var15 = var1.pendingBanner;
            var _closure2_slot3 = var15;
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
            var _closure2_slot4 = var11;
            var1 = 10;
            var2 = var18[var1];
            var3 = var6.bind(var4)(var2);
            var2 = 11;
            var2 = var18[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.EDIT_BANNER;
            var2 = var3.bind(var4)(var2);
            var5 = var2.analyticsLocations;
            var _closure2_slot5 = var5;
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
            if(!var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = null;
            var11 = var12 != var13;
case 2:
            var5['showEditButton'] = var11;
            var10 = function onPressEdit() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = 19;
                    var4 = var8[var2];
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
                    var6 = _closure2_slot5;
                    var2['analyticsLocations'] = var6;
                    var6 = {};
                    var7 = _closure1_slot17;
                    var7 = var7.PREMIUM_GUILD_IDENTITY_MODAL;
                    var6['type'] = var7;
                    var2['analyticsProperties'] = var6;
                    var2 = var4.bind(var5)(var2);
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var2 = 13;
                    var2 = var8[var2];
                    var9 = undefined;
                    var5 = var3.bind(var9)(var2);
                    var4 = var5.openLazy;
                    var7 = _closure1_slot0;
                    var2 = 15;
                    var2 = var8[var2];
                    var6 = var7.bind(var9)(var2);
                    var2 = 14;
                    var3 = var8[var2];
                    var2 = var8.paths;
                    var3 = var6.bind(var9)(var3, var2);
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2['user'] = var6;
                    var6 = _closure2_slot5;
                    var2['analyticsLocations'] = var6;
                    var6 = 16;
                    var6 = var8[var6];
                    var10 = var7.bind(var9)(var6);
                    var8 = var10.showRemoveBanner;
                    var7 = _closure2_slot3;
                    var12 = _closure2_slot2;
                    var6 = null;
                    var12 = var6 == var12;
                    var6 = undefined;
                    if(var12) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var11 = _closure2_slot2;
                    var6 = var11.banner;
case 7:
                    var6 = var8.bind(var10)(var7, var6);
                    var2['showRemoveBanner'] = var6;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 17;
                    var6 = var10[var1];
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var1 = var10[var1];
                    var1 = var8.bind(var9)(var1);
                    var1 = var1.t;
                    var1 = var1.jHlJNS;
                    var1 = var6.bind(var7)(var1);
                    var2['removeText'] = var1;
                    var1 = function onBannerChange(arg1, arg2) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 18;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.setPendingChanges;
                        var1 = {};
                        var4 = _closure2_slot1;
                        var1['guildId'] = var4;
                        var4 = arg1;
                        var1['banner'] = var4;
                        var4 = arg2;
                        var1['bannerOriginalMd5'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2['onBannerChange'] = var1;
                    var1 = 'Change Banner';
                    var1 = var4.bind(var5)(var3, var1, var2);
case 6:
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
            var9 = var9["95hPAe"];
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
    var4 = 54;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/GuildProfileEditForm.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildProfileEditForm(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var36 = var1.currentUser;
            var _closure2_slot0 = var36;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var62 = 20;
            var1 = var8[var62];
            var1 = var7.bind(var5)(var1);
            var66 = var1.bind(var5)();
            var1 = 21;
            var1 = var8[var1];
            var1 = var7.bind(var5)(var1);
            var16 = var1.bind(var5)();
            var1 = 22;
            var1 = var8[var1];
            var1 = var7.bind(var5)(var1);
            var3 = var1.bind(var5)();
            var4 = _closure1_slot5;
            var2 = var4.useRef;
            var1 = null;
            var12 = var2.bind(var4)(var1);
            var2 = var4.useRef;
            var54 = var2.bind(var4)(var1);
            var2 = var4.useRef;
            var58 = var2.bind(var4)(var1);
            var2 = var4.useRef;
            var52 = var2.bind(var4)(var1);
            var2 = 23;
            var2 = var8[var2];
            var4 = var7.bind(var5)(var2);
            var2 = {};
            var65 = true;
            var2['includeKeyboardHeight'] = var65;
            var2 = var4.bind(var5)(var2);
            var18 = var2.insets;
            var19 = 24;
            var2 = var8[var19];
            var2 = var7.bind(var5)(var2);
            var2 = var2.space;
            var11 = var2.PX_16;
            var2 = 25;
            var2 = var8[var2];
            var4 = var7.bind(var5)(var2);
            var2 = {};
            var2['insets'] = var18;
            var9 = {};
            var9['ref'] = var54;
            var6 = {};
            var13 = 'toRef';
            var6['type'] = var13;
            var6['ref'] = var58;
            var6['extraOffset'] = var11;
            var9['offset'] = var6;
            var6 = new Array(3);
            var6[0] = var9;
            var9 = {};
            var9['ref'] = var58;
            var10 = {};
            var10['type'] = var13;
            var10['ref'] = var52;
            var10['extraOffset'] = var11;
            var9['offset'] = var10;
            var6[1] = var9;
            var9 = {};
            var9['ref'] = var52;
            var10 = {};
            var11 = 'toValue';
            var10['type'] = var11;
            var11 = var8[var19];
            var11 = var7.bind(var5)(var11);
            var11 = var11.space;
            var11 = var11.PX_64;
            var10['value'] = var11;
            var9['offset'] = var10;
            var6[2] = var9;
            var2['inputs'] = var6;
            var2['scrollViewRef'] = var12;
            var2 = var4.bind(var5)(var2);
            var47 = var2.onFocus;
            var2 = 26;
            var2 = var8[var2];
            var2 = var7.bind(var5)(var2);
            var6 = var2.bind(var5)();
            var34 = var6.guild;
            var _closure2_slot1 = var34;
            var4 = var6.errors;
            var38 = var6.isDisabled;
            var60 = var6.pendingNickname;
            var13 = var6.pendingAvatar;
            var22 = var6.pendingBanner;
            var44 = var6.pendingThemeColors;
            var2 = var6.pendingPronouns;
            var49 = var6.pendingBio;
            var42 = var6.pendingAvatarDecoration;
            var41 = var6.pendingProfileEffect;
            var40 = var6.pendingProfileFrame;
            var35 = var6.pendingNameplate;
            var29 = var6.pendingDisplayNameStyles;
            var9 = _closure1_slot0;
            var6 = 27;
            var10 = var8[var6];
            var20 = var9.bind(var5)(var10);
            var17 = var20.useStateFromStores;
            var10 = _closure1_slot8;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var5 = _closure1_slot8;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 9:
                    return var1;
                }
            };
            var24 = var17.bind(var20)(var11, var10);
            var6 = var8[var6];
            var11 = var9.bind(var5)(var6);
            var10 = var11.useStateFromStores;
            var6 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var7 = null;
                    var2 = var7 != var1;
                    var1 = null;
                    if(!var2) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                    var5 = _closure1_slot9;
                    var4 = var5.getGuildMemberProfile;
                    var2 = _closure2_slot0;
                    var3 = var2.id;
                    var2 = _closure2_slot1;
                    var7 = var7 == var2;
                    var2 = undefined;
                    if(var7) { _fun0005_ip = 13; continue _fun0005 }
case 9:
                    var6 = _closure2_slot1;
                    var2 = var6.id;
case 13:
                    var1 = var4.bind(var5)(var3, var2);
case 11:
                    return var1;
                }
            };
            var23 = var10.bind(var11)(var9, var6);
            var6 = 28;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var36.id;
            var9 = var1 == var34;
            var6 = undefined;
            if(var9) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var6 = var34.id;
case 14:
            var39 = var8.bind(var5)(var7, var6);
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 29;
            var6 = var8[var6];
            var9 = var7.bind(var5)(var6);
            var6 = var9.useCustomStatusActivity;
            var68 = var6.bind(var9)();
            var9 = _closure1_slot1;
            var6 = 30;
            var6 = var8[var6];
            var6 = var9.bind(var5)(var6);
            var31 = var6.bind(var5)(var39);
            var6 = 31;
            var6 = var8[var6];
            var11 = var7.bind(var5)(var6);
            var10 = var11.getPendingAvatarSrc;
            var6 = {};
            var17 = var36.id;
            var6['userId'] = var17;
            var6['image'] = var13;
            var45 = var10.bind(var11)(var6);
            var6 = 32;
            var6 = var8[var6];
            var10 = var7.bind(var5)(var6);
            var6 = var10.useGuildActionSheetPermissions;
            var6 = var6.bind(var10)(var34);
            var56 = var6.canEditNickname;
            var6 = 9;
            var6 = var8[var6];
            var9 = var9.bind(var5)(var6);
            var6 = var9.canUsePremiumGuildMemberProfile;
            var33 = var6.bind(var9)(var36);
            var6 = 33;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.canResetThemeColors;
            var9 = var1 == var23;
            var6 = undefined;
            if(var9) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var6 = var23.themeColors;
case 16:
            var43 = var7.bind(var8)(var44, var6);
            var10 = !var33;
            if(!var10) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var10 = !var3;
case 18:
            var6 = var1 == var24;
            var3 = undefined;
            if(var6) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var3 = var24.nick;
case 20:
            var6 = var1 != var3;
            var32 = '';
            var59 = var32;
            if(!var6) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var59 = var3;
case 22:
            var6 = var1 == var23;
            var3 = undefined;
            if(var6) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var3 = var23.pronouns;
case 24:
            var6 = var1 != var3;
            var55 = var32;
            if(!var6) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var55 = var3;
case 26:
            var6 = var1 == var39;
            var3 = undefined;
            if(var6) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var6 = var39._userProfile;
            var3 = var6.pronouns;
case 28:
            var6 = var1 != var3;
            var53 = var32;
            if(!var6) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var53 = var3;
case 30:
            if(!(var1 != var2)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var55 = var2;
case 32:
            var3 = var1 == var23;
            var2 = undefined;
            if(var3) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var2 = var23.bio;
case 34:
            var3 = var1 != var2;
            var48 = var32;
            if(!var3) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var48 = var2;
case 36:
            var3 = var1 == var39;
            var2 = undefined;
            if(var3) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var3 = var39._userProfile;
            var2 = var3.bio;
case 38:
            var3 = var1 != var2;
            var46 = var32;
            if(!var3) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var46 = var2;
case 40:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 10;
            var2 = var7[var2];
            var6 = var3.bind(var5)(var2);
            var2 = 11;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var8 = var2.USER_SETTINGS;
            var2 = new Array(1);
            var2[0] = var8;
            var2 = var6.bind(var5)(var2);
            var2 = var2.analyticsLocations;
            _closure2_slot2 = var2;
            var2 = 34;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['user'] = var36;
            var2['displayProfile'] = var39;
            var2['pendingThemeColors'] = var44;
            var2 = var3.bind(var5)(var2);
            var6 = var2.theme;
            var67 = var2.primaryColor;
            var25 = var2.secondaryColor;
            var3 = _closure1_slot0;
            var2 = 35;
            var2 = var7[var2];
            var7 = var3.bind(var5)(var2);
            var3 = var7.useUserProfileColors;
            var2 = {};
            var2['theme'] = var6;
            var2['primaryColor'] = var67;
            var2['secondaryColor'] = var25;
            var2 = var3.bind(var7)(var2);
            var26 = var2.gradientFallbackBackground;
            var20 = var2.gradientSecondaryBackground;
            var64 = var2.containerBackground;
            var2 = var2.avatarBackground;
            var7 = var18.bottom;
            var50 = 0;
            var3 = 0;
            if(!var10) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var3 = _closure1_slot10;
case 42:
            var7 = var7 + var3;
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var19];
            var3 = var8.bind(var5)(var3);
            var3 = var3.space;
            var3 = var3.PX_16;
            var28 = var7 + var3;
            var70 = {};
            var70['backgroundColor'] = var2;
            var7 = var4.nick;
            var3 = var4.bio;
            var2 = var4.guild_tag;
            var9 = _closure1_slot4;
            var8 = _closure1_slot3;
            var63 = var9.bind(var5)(var4, var8);
            var8 = var1 == var7;
            var61 = undefined;
            if(var8) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var61 = var7[var50];
case 44:
            var4 = var4.pronouns;
            var7 = var1 == var4;
            var57 = undefined;
            if(var7) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var57 = var4[var50];
case 46:
            var4 = var1 == var3;
            var51 = undefined;
            if(var4) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var51 = var3[var50];
case 48:
            var3 = var1 == var2;
            var30 = undefined;
            if(var3) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var30 = var2[var50];
case 50:
            if(!(var1 != var34)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var4 = _closure1_slot18;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 37;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.ThemeContextProvider;
            var2 = {};
            var2['theme'] = var6;
            var2['primaryColor'] = var67;
            var2['secondaryColor'] = var25;
            var8 = _closure1_slot19;
            var7 = _closure1_slot7;
            var6 = {};
            var11 = var16.container;
            var9 = new Array(2);
            var9[0] = var11;
            var11 = {};
            var11['backgroundColor'] = var20;
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
            var13 = {};
            var17 = {};
            var17['backgroundColor'] = var20;
            var13['style'] = var17;
            var21 = _closure1_slot18;
            var20 = _closure1_slot21;
            var17 = {};
            var17['user'] = var36;
            var17['displayProfile'] = var39;
            var27 = var34.id;
            var17['guildId'] = var27;
            var17['guildMember'] = var24;
            var17['guildMemberProfile'] = var23;
            var17['pendingAvatarSrc'] = var45;
            var17['pendingBanner'] = var22;
            var17['pendingThemeColors'] = var44;
            var17['disabled'] = var38;
            var20 = var21.bind(var5)(var20, var17);
            var17 = new Array(2);
            var17[0] = var20;
            var20 = {};
            var21 = var1 == var34;
            var22 = null;
            if(var21) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var24 = _closure1_slot18;
            var23 = _closure1_slot7;
            var21 = {};
            var37 = var66.avatarBackground;
            var27 = new Array(4);
            var27[0] = var37;
            var37 = var66.avatarPosition;
            var27[1] = var37;
            var37 = var16.avatarContainer;
            var27[2] = var37;
            var27[3] = var70;
            var21['style'] = var27;
            var69 = _closure1_slot18;
            var37 = _closure1_slot1;
            var71 = _closure1_slot2;
            var27 = 38;
            var27 = var71[var27];
            var37 = var37.bind(var5)(var27);
            var27 = {};
            var71 = var36.id;
            var27['userId'] = var71;
            var71 = var38;
            if(var38) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var71 = !var33;
case 56:
            var27['disabled'] = var71;
            var71 = false;
            var27['disableStatus'] = var71;
            var72 = var1 == var34;
            var71 = undefined;
            if(var72) { _fun0003_ip = 58; continue _fun0003 }
case 59:
            var71 = var34.id;
case 58:
            var27['guildId'] = var71;
            var27['statusStyle'] = var70;
            var27 = var69.bind(var5)(var37, var27);
            var21['children'] = var27;
            var22 = var24.bind(var5)(var23, var21);
case 54:
            var21 = new Array(2);
            var21[0] = var22;
            var24 = _closure1_slot19;
            var27 = _closure1_slot1;
            var37 = _closure1_slot2;
            var22 = 39;
            var22 = var37[var22];
            var23 = var27.bind(var5)(var22);
            var22 = {};
            var22['fallbackBackground'] = var26;
            var22['primaryColor'] = var67;
            var22['secondaryColor'] = var25;
            var26 = var66.profileContentWrapper;
            var25 = new Array(3);
            var25[0] = var26;
            var26 = var66.profileContent;
            var25[1] = var26;
            var26 = {};
            var26['paddingTop'] = var50;
            var26['paddingBottom'] = var28;
            var25[2] = var26;
            var22['containerStyle'] = var25;
            var28 = _closure1_slot18;
            var25 = 40;
            var25 = var37[var25];
            var26 = var27.bind(var5)(var25);
            var25 = {};
            var25['customStatusActivity'] = var68;
            var67 = var1 != var67;
            var25['hasCustomProfileTheme'] = var67;
            var67 = var66.customStatusBubble;
            var25['style'] = var67;
            var66 = var66.emojiOnlyCustomStatusBubble;
            var25['emojiOnlyStyle'] = var66;
            var25['editEnabled'] = var65;
            var26 = var28.bind(var5)(var26, var25);
            var25 = new Array(3);
            var25[0] = var26;
            var28 = _closure1_slot18;
            var26 = 41;
            var26 = var37[var26];
            var27 = var27.bind(var5)(var26);
            var26 = {};
            var26['user'] = var36;
            var37 = var59;
            if(!(var1 != var60)) { _fun0003_ip = 60; continue _fun0003 }
case 61:
            var37 = var60;
case 60:
            var26['displayName'] = var37;
            var37 = var53;
            if(!(var32 !== var55)) { _fun0003_ip = 62; continue _fun0003 }
case 63:
            var37 = var55;
case 62:
            var26['pronouns'] = var37;
            var26['badges'] = var31;
            var26['badgeContainerBackground'] = var64;
            var31 = 'header';
            var26['displayNameAccessibilityRole'] = var31;
            var31 = var34.id;
            var26['guildId'] = var31;
            var26['pendingDisplayNameStyles'] = var29;
            var26 = var28.bind(var5)(var27, var26);
            var25[1] = var26;
            var27 = var1 == var34;
            var26 = null;
            if(var27) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var29 = _closure1_slot19;
            var28 = _closure1_slot7;
            var27 = {};
            var37 = var16.formContainer;
            var31 = new Array(2);
            var31[0] = var37;
            var37 = {};
            var37['backgroundColor'] = var64;
            var37['paddingBottom'] = var62;
            var31[1] = var37;
            var27['style'] = var31;
            var37 = var1 != var51;
            var31 = null;
            if(var37) { _fun0003_ip = 66; continue _fun0003 }
case 67:
            var37 = var1 != var61;
            var31 = null;
            if(var37) { _fun0003_ip = 66; continue _fun0003 }
case 68:
            if(!(var1 == var30)) { _fun0003_ip = 69; continue _fun0003 }
case 70:
            var37 = global;
            var62 = var37.Object;
            var37 = var62.keys;
            var37 = var37.bind(var62)(var63);
            var37 = var37.length;
            var37 = var37 > var50;
            var65 = null;
            if(!var37) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var63 = _closure1_slot0;
            var64 = _closure1_slot2;
            var37 = 17;
            var50 = var64[var37];
            var50 = var63.bind(var5)(var50);
            var62 = var50.intl;
            var50 = var62.string;
            var37 = var64[var37];
            var37 = var63.bind(var5)(var37);
            var37 = var37.t;
            var37 = var37.s35OuK;
            var65 = var50.bind(var62)(var37);
case 71:
            _fun0003_ip = 73; continue _fun0003;
case 69:
            var65 = var30;
case 73:
            var37 = var1 == var65;
            var30 = null;
            if(var37) { _fun0003_ip = 74; continue _fun0003 }
case 75:
            var30 = null;
            if(!(var32 !== var65)) { _fun0003_ip = 74; continue _fun0003 }
case 76:
            var50 = _closure1_slot18;
            var37 = _closure1_slot7;
            var32 = {};
            var62 = var16.errorContainer;
            var32['style'] = var62;
            var64 = _closure1_slot18;
            var63 = _closure1_slot0;
            var66 = _closure1_slot2;
            var62 = 36;
            var62 = var66[var62];
            var62 = var63.bind(var5)(var62);
            var63 = var62.Text;
            var62 = {'variant': 'text-sm/bold', 'color': 'text-feedback-critical'};
            var62['children'] = var65;
            var62 = var64.bind(var5)(var63, var62);
            var32['children'] = var62;
            var30 = var50.bind(var5)(var37, var32);
case 74:
            var31 = var30;
case 66:
            var30 = new Array(10);
            var30[0] = var31;
            var50 = _closure1_slot18;
            var37 = _closure1_slot1;
            var62 = _closure1_slot2;
            var32 = 42;
            var31 = var62[var32];
            var37 = var37.bind(var5)(var31);
            var31 = {};
            var31['inputRef'] = var54;
            var65 = _closure1_slot0;
            var54 = 17;
            var63 = var62[var54];
            var63 = var65.bind(var5)(var63);
            var64 = var63.intl;
            var63 = var64.string;
            var62 = var62[var54];
            var62 = var65.bind(var5)(var62);
            var62 = var62.t;
            var62 = var62.me1lRk;
            var62 = var63.bind(var64)(var62);
            var31['label'] = var62;
            var31['errorMessage'] = var61;
            if(!(var1 != var60)) { _fun0003_ip = 77; continue _fun0003 }
case 78:
            var59 = var60;
case 77:
            var31['value'] = var59;
            var31['onFocus'] = var47;
            var59 = function onChange(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.setPendingChanges;
                var1 = {};
                var4 = _closure2_slot1;
                var4 = var4.id;
                var1['guildId'] = var4;
                var4 = arg1;
                var1['nickname'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var31['onChange'] = var59;
            var60 = _closure1_slot1;
            var61 = _closure1_slot2;
            var59 = 43;
            var59 = var61[var59];
            var60 = var60.bind(var5)(var59);
            var59 = var60.getName;
            var59 = var59.bind(var60)(var36);
            var31['placeholder'] = var59;
            var59 = _closure1_slot14;
            var31['maxLength'] = var59;
            var56 = !var56;
            if(var56) { _fun0003_ip = 79; continue _fun0003 }
case 80:
            var56 = var38;
case 79:
            var31['isDisabled'] = var56;
            var31 = var50.bind(var5)(var37, var31);
            var30[1] = var31;
            var31 = var33;
            if(!var31) { _fun0003_ip = 81; continue _fun0003 }
case 82:
            var56 = _closure1_slot18;
            var50 = _closure1_slot1;
            var59 = _closure1_slot2;
            var37 = 44;
            var37 = var59[var37];
            var50 = var50.bind(var5)(var37);
            var37 = {};
            var37['user'] = var36;
            var59 = var34.id;
            var37['guildId'] = var59;
            var31 = var56.bind(var5)(var50, var37);
case 81:
            var30[2] = var31;
            var50 = _closure1_slot18;
            var37 = _closure1_slot1;
            var56 = _closure1_slot2;
            var31 = var56[var32];
            var37 = var37.bind(var5)(var31);
            var31 = {};
            var31['inputRef'] = var58;
            var59 = _closure1_slot0;
            var58 = var56[var54];
            var58 = var59.bind(var5)(var58);
            var61 = var58.intl;
            var60 = var61.string;
            var58 = var56[var54];
            var58 = var59.bind(var5)(var58);
            var58 = var58.t;
            var58 = var58["+T3RI/"];
            var58 = var60.bind(var61)(var58);
            var31['label'] = var58;
            var31['errorMessage'] = var57;
            var57 = var56[var54];
            var57 = var59.bind(var5)(var57);
            var58 = var57.intl;
            var57 = var58.string;
            var56 = var56[var54];
            var56 = var59.bind(var5)(var56);
            var56 = var56.t;
            var56 = var56.NZqtIp;
            var56 = var57.bind(var58)(var56);
            var31['description'] = var56;
            var31['value'] = var55;
            var31['onFocus'] = var47;
            var55 = function onChange(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.setPendingChanges;
                var1 = {};
                var4 = _closure2_slot1;
                var4 = var4.id;
                var1['guildId'] = var4;
                var4 = arg1;
                var1['pronouns'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var31['onChange'] = var55;
            var31['placeholder'] = var53;
            var53 = _closure1_slot15;
            var31['maxLength'] = var53;
            var31['isDisabled'] = var38;
            var31 = var50.bind(var5)(var37, var31);
            var30[3] = var31;
            var31 = null;
            if(!var33) { _fun0003_ip = 83; continue _fun0003 }
case 84:
            var37 = _closure1_slot18;
            var33 = _closure1_slot1;
            var50 = _closure1_slot2;
            var32 = var50[var32];
            var33 = var33.bind(var5)(var32);
            var32 = {};
            var32['inputRef'] = var52;
            var53 = _closure1_slot0;
            var52 = var50[var54];
            var52 = var53.bind(var5)(var52);
            var56 = var52.intl;
            var55 = var56.string;
            var52 = var50[var54];
            var52 = var53.bind(var5)(var52);
            var52 = var52.t;
            var52 = var52.ZzAR2Y;
            var52 = var55.bind(var56)(var52);
            var32['label'] = var52;
            var32['errorMessage'] = var51;
            var51 = var50[var54];
            var51 = var53.bind(var5)(var51);
            var52 = var51.intl;
            var51 = var52.string;
            var50 = var50[var54];
            var50 = var53.bind(var5)(var50);
            var50 = var50.t;
            var50 = var50.S5O8U2;
            var50 = var51.bind(var52)(var50);
            var32['description'] = var50;
            if(!(var1 != var49)) { _fun0003_ip = 85; continue _fun0003 }
case 86:
            var48 = var49;
case 85:
            var32['value'] = var48;
            var32['onFocus'] = var47;
            var47 = function onChange(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.setPendingChanges;
                var1 = {};
                var4 = _closure2_slot1;
                var4 = var4.id;
                var1['guildId'] = var4;
                var4 = arg1;
                var1['bio'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var32['onChange'] = var47;
            var32['placeholder'] = var46;
            var46 = _closure1_slot13;
            var32['maxLength'] = var46;
            var46 = 5;
            var32['numberOfLines'] = var46;
            var32['isDisabled'] = var38;
            var31 = var37.bind(var5)(var33, var32);
case 83:
            var30[4] = var31;
            var38 = _closure1_slot18;
            var32 = _closure1_slot1;
            var37 = _closure1_slot2;
            var31 = 45;
            var31 = var37[var31];
            var33 = var32.bind(var5)(var31);
            var31 = {};
            var31['pendingAvatarSrc'] = var45;
            var31['pendingThemeColors'] = var44;
            var31['user'] = var36;
            var44 = var34.id;
            var31['guildId'] = var44;
            var44 = function onProfileThemeColorsChanged(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.setPendingChanges;
                var1 = {};
                var4 = _closure2_slot1;
                var4 = var4.id;
                var1['guildId'] = var4;
                var4 = arg1;
                var1['themeColors'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var31['onProfileThemeColorsChanged'] = var44;
            var31['showResetMenu'] = var43;
            var31 = var38.bind(var5)(var33, var31);
            var30[5] = var31;
            var38 = _closure1_slot18;
            var31 = 46;
            var31 = var37[var31];
            var33 = var32.bind(var5)(var31);
            var31 = {};
            var31['user'] = var36;
            var43 = var34.id;
            var31['guildId'] = var43;
            var31['pendingAvatarDecoration'] = var42;
            var31 = var38.bind(var5)(var33, var31);
            var30[6] = var31;
            var38 = _closure1_slot18;
            var31 = 47;
            var31 = var37[var31];
            var33 = var32.bind(var5)(var31);
            var31 = {};
            var31['user'] = var36;
            var42 = var34.id;
            var31['guildId'] = var42;
            var31['pendingProfileEffect'] = var41;
            var31['displayProfile'] = var39;
            var31 = var38.bind(var5)(var33, var31);
            var30[7] = var31;
            var38 = _closure1_slot18;
            var31 = 48;
            var31 = var37[var31];
            var33 = var32.bind(var5)(var31);
            var31 = {};
            var31['user'] = var36;
            var41 = var34.id;
            var31['guildId'] = var41;
            var31['pendingProfileFrame'] = var40;
            var31['displayProfile'] = var39;
            var31 = var38.bind(var5)(var33, var31);
            var30[8] = var31;
            var33 = _closure1_slot18;
            var31 = 49;
            var31 = var37[var31];
            var32 = var32.bind(var5)(var31);
            var31 = {};
            var31['user'] = var36;
            var31['pendingNameplate'] = var35;
            var34 = var34.id;
            var31['guildId'] = var34;
            var31 = var33.bind(var5)(var32, var31);
            var30[9] = var31;
            var27['children'] = var30;
            var26 = var29.bind(var5)(var28, var27);
case 64:
            var25[2] = var26;
            var22['children'] = var25;
            var22 = var24.bind(var5)(var23, var22);
            var21[1] = var22;
            var20['children'] = var21;
            var20 = var8.bind(var5)(var7, var20);
            var17[1] = var20;
            var13['children'] = var17;
            var13 = var8.bind(var5)(var7, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var11 = var8.bind(var5)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            if(!var10) { _fun0003_ip = 87; continue _fun0003 }
case 88:
            var13 = _closure1_slot18;
            var20 = _closure1_slot1;
            var21 = _closure1_slot2;
            var11 = 50;
            var11 = var21[var11];
            var12 = var20.bind(var5)(var11);
            var11 = {};
            var17 = var16.floatingUpsell;
            var16 = new Array(2);
            var16[0] = var17;
            var17 = {};
            var19 = var21[var19];
            var19 = var20.bind(var5)(var19);
            var19 = var19.space;
            var19 = var19.PX_16;
            var18 = var18.bottom;
            var18 = var19 + var18;
            var17['bottom'] = var18;
            var16[1] = var17;
            var11['style'] = var16;
            var20 = _closure1_slot0;
            var17 = 17;
            var16 = var21[var17];
            var16 = var20.bind(var5)(var16);
            var19 = var16.intl;
            var18 = var19.string;
            var16 = var21[var17];
            var16 = var20.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.pj0XBN;
            var16 = var18.bind(var19)(var16);
            var11['ctaText'] = var16;
            var15 = function onPress() {
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 51;
                var2 = var8[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.pushLazy;
                var7 = _closure1_slot0;
                var2 = 15;
                var2 = var8[var2];
                var6 = var7.bind(var1)(var2);
                var2 = 52;
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
                var6[8] = var10;
                var2['analyticsLocation'] = var6;
                var6 = _closure2_slot2;
                var2['analyticsLocations'] = var6;
                var6 = 53;
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
            var14 = var21[var14];
            var14 = var20.bind(var5)(var14);
            var15 = var14.Text;
            var14 = {};
            var18 = 'text-sm/normal';
            var14['variant'] = var18;
            var18 = var21[var17];
            var18 = var20.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.YIZS5B;
            var17 = var18.bind(var19)(var17);
            var14['children'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var11['children'] = var14;
            var10 = var13.bind(var5)(var12, var11);
case 87:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 52:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
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
case 2:
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
                    var1 = function onBannerChange(arg1) {
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
            var9 = var9.95hPAe;
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
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var60 = 20;
            var1 = var7[var60];
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
            var55 = var3.bind(var4)(var1);
            var3 = var4.useRef;
            var50 = var3.bind(var4)(var1);
            var3 = 23;
            var3 = var7[var3];
            var4 = var6.bind(var5)(var3);
            var3 = {};
            var64 = true;
            var3['includeKeyboardHeight'] = var64;
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
            var8['ref'] = var55;
            var8['extraOffset'] = var11;
            var9['offset'] = var8;
            var8 = new Array(3);
            var8[0] = var9;
            var9 = {};
            var9['ref'] = var55;
            var10 = {};
            var10['type'] = var13;
            var10['ref'] = var50;
            var10['extraOffset'] = var11;
            var9['offset'] = var10;
            var8[1] = var9;
            var9 = {};
            var9['ref'] = var50;
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
            var45 = var3.onFocus;
            var8 = _closure1_slot0;
            var3 = 26;
            var3 = var7[var3];
            var9 = var8.bind(var5)(var3);
            var4 = var9.useIsDisplayNameStylesMobileEnabled;
            var3 = {};
            var10 = 'GuildProfileEditForm';
            var3['location'] = var10;
            var31 = var4.bind(var9)(var3);
            var3 = 27;
            var3 = var7[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var34 = var3.guild;
            var _closure2_slot1 = var34;
            var4 = var3.errors;
            var38 = var3.isDisabled;
            var58 = var3.pendingNickname;
            var11 = var3.pendingAvatar;
            var23 = var3.pendingBanner;
            var43 = var3.pendingThemeColors;
            var52 = var3.pendingPronouns;
            var47 = var3.pendingBio;
            var41 = var3.pendingAvatarDecoration;
            var40 = var3.pendingProfileEffect;
            var35 = var3.pendingNameplate;
            var32 = var3.pendingDisplayNameStyles;
            var3 = 28;
            var9 = var7[var3];
            var17 = var8.bind(var5)(var9);
            var13 = var17.useStateFromStores;
            var9 = _closure1_slot8;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var5 = _closure1_slot8;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 8:
                    return var1;
                }
            };
            var25 = var13.bind(var17)(var10, var9);
            var3 = var7[var3];
            var10 = var8.bind(var5)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var7 = null;
                    var2 = var7 != var1;
                    var1 = null;
                    if(!var2) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                    var5 = _closure1_slot9;
                    var4 = var5.getGuildMemberProfile;
                    var2 = _closure2_slot0;
                    var3 = var2.id;
                    var2 = _closure2_slot1;
                    var7 = var7 == var2;
                    var2 = undefined;
                    if(var7) { _fun0005_ip = 12; continue _fun0005 }
case 8:
                    var6 = _closure2_slot1;
                    var2 = var6.id;
case 12:
                    var1 = var4.bind(var5)(var3, var2);
case 10:
                    return var1;
                }
            };
            var24 = var9.bind(var10)(var8, var3);
            var3 = 29;
            var3 = var7[var3];
            var7 = var6.bind(var5)(var3);
            var6 = var36.id;
            var8 = var1 == var34;
            var3 = undefined;
            if(var8) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var3 = var34.id;
case 13:
            var39 = var7.bind(var5)(var6, var3);
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 30;
            var3 = var7[var3];
            var8 = var6.bind(var5)(var3);
            var3 = var8.useCustomStatusActivity;
            var67 = var3.bind(var8)();
            var8 = _closure1_slot1;
            var3 = 31;
            var3 = var7[var3];
            var3 = var8.bind(var5)(var3);
            var48 = var3.bind(var5)(var39);
            var3 = 32;
            var3 = var7[var3];
            var10 = var6.bind(var5)(var3);
            var9 = var10.getPendingAvatarSrc;
            var3 = {};
            var13 = var36.id;
            var3['userId'] = var13;
            var3['image'] = var11;
            var44 = var9.bind(var10)(var3);
            var3 = 33;
            var3 = var7[var3];
            var9 = var6.bind(var5)(var3);
            var3 = var9.useGuildActionSheetPermissions;
            var3 = var3.bind(var9)(var34);
            var56 = var3.canEditNickname;
            var3 = 9;
            var3 = var7[var3];
            var8 = var8.bind(var5)(var3);
            var3 = var8.canUsePremiumGuildMemberProfile;
            var33 = var3.bind(var8)(var36);
            var3 = 34;
            var3 = var7[var3];
            var7 = var6.bind(var5)(var3);
            var6 = var7.canResetThemeColors;
            var8 = var1 == var24;
            var3 = undefined;
            if(var8) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var3 = var24.themeColors;
case 15:
            var42 = var6.bind(var7)(var43, var3);
            var10 = !var33;
            if(!var10) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var10 = !var2;
case 17:
            var3 = var1 == var25;
            var2 = undefined;
            if(var3) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var2 = var25.nick;
case 19:
            var3 = var1 != var2;
            var37 = '';
            var57 = var37;
            if(!var3) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var57 = var2;
case 21:
            var3 = var1 == var39;
            var2 = undefined;
            if(var3) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var2 = var39.pronouns;
case 23:
            var3 = var1 != var2;
            var51 = var37;
            if(!var3) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var51 = var2;
case 25:
            var3 = var1 == var39;
            var2 = undefined;
            if(var3) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var2 = var39.bio;
case 27:
            var3 = var1 != var2;
            var46 = var37;
            if(!var3) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var46 = var2;
case 29:
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
            var2 = 35;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['user'] = var36;
            var2['displayProfile'] = var39;
            var2['pendingThemeColors'] = var43;
            var2 = var3.bind(var5)(var2);
            var6 = var2.theme;
            var66 = var2.primaryColor;
            var26 = var2.secondaryColor;
            var3 = _closure1_slot0;
            var2 = 36;
            var2 = var7[var2];
            var7 = var3.bind(var5)(var2);
            var3 = var7.useUserProfileColors;
            var2 = {};
            var2['theme'] = var6;
            var2['primaryColor'] = var66;
            var2['secondaryColor'] = var26;
            var2 = var3.bind(var7)(var2);
            var27 = var2.gradientFallbackBackground;
            var18 = var2.gradientSecondaryBackground;
            var62 = var2.containerBackground;
            var2 = var2.avatarBackground;
            var7 = var19.bottom;
            var53 = 0;
            var3 = 0;
            if(!var10) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var3 = _closure1_slot10;
case 31:
            var7 = var7 + var3;
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var20];
            var3 = var8.bind(var5)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_16;
            var29 = var7 + var3;
            var63 = {};
            var63['backgroundColor'] = var2;
            var7 = var4.nick;
            var3 = var4.bio;
            var2 = var4.guild_tag;
            var9 = _closure1_slot4;
            var8 = _closure1_slot3;
            var61 = var9.bind(var5)(var4, var8);
            var8 = var1 == var7;
            var59 = undefined;
            if(var8) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var59 = var7[var53];
case 33:
            var4 = var4.pronouns;
            var7 = var1 == var4;
            var54 = undefined;
            if(var7) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var54 = var4[var53];
case 35:
            var4 = var1 == var3;
            var49 = undefined;
            if(var4) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var49 = var3[var53];
case 37:
            var3 = var1 == var2;
            var30 = undefined;
            if(var3) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var30 = var2[var53];
case 39:
            if(!(var1 != var34)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var4 = _closure1_slot18;
            var3 = _closure1_slot0;
            var68 = _closure1_slot2;
            var2 = 38;
            var2 = var68[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.ThemeContextProvider;
            var2 = {};
            var2['theme'] = var6;
            var2['primaryColor'] = var66;
            var2['secondaryColor'] = var26;
            var8 = _closure1_slot19;
            var7 = _closure1_slot7;
            var6 = {};
            var11 = var16.container;
            var9 = new Array(2);
            var9[0] = var11;
            var11 = {};
            var11['backgroundColor'] = var18;
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
            var17['backgroundColor'] = var18;
            var13['style'] = var17;
            var22 = _closure1_slot18;
            var18 = _closure1_slot21;
            var17 = {};
            var17['user'] = var36;
            var17['displayProfile'] = var39;
            var28 = var34.id;
            var17['guildId'] = var28;
            var17['guildMember'] = var25;
            var17['guildMemberProfile'] = var24;
            var17['pendingAvatarSrc'] = var44;
            var17['pendingBanner'] = var23;
            var17['pendingThemeColors'] = var43;
            var17['disabled'] = var38;
            var18 = var22.bind(var5)(var18, var17);
            var17 = new Array(2);
            var17[0] = var18;
            var18 = {};
            var23 = _closure1_slot18;
            var22 = {};
            var25 = var65.avatarBackground;
            var24 = new Array(4);
            var24[0] = var25;
            var25 = var65.avatarPosition;
            var24[1] = var25;
            var25 = var16.avatarContainer;
            var24[2] = var25;
            var24[3] = var63;
            var22['style'] = var24;
            var28 = _closure1_slot18;
            var25 = _closure1_slot1;
            var24 = 39;
            var24 = var68[var24];
            var25 = var25.bind(var5)(var24);
            var24 = {};
            var68 = var36.id;
            var24['userId'] = var68;
            var68 = var38;
            if(var38) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var68 = !var33;
case 43:
            var24['disabled'] = var68;
            var68 = false;
            var24['disableStatus'] = var68;
            var69 = var1 == var34;
            var68 = undefined;
            if(var69) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var68 = var34.id;
case 45:
            var24['guildId'] = var68;
            var24['statusStyle'] = var63;
            var24 = var28.bind(var5)(var25, var24);
            var22['children'] = var24;
            var23 = var23.bind(var5)(var7, var22);
            var22 = new Array(2);
            var22[0] = var23;
            var25 = _closure1_slot19;
            var28 = _closure1_slot1;
            var63 = _closure1_slot2;
            var23 = 40;
            var23 = var63[var23];
            var24 = var28.bind(var5)(var23);
            var23 = {};
            var23['fallbackBackground'] = var27;
            var23['primaryColor'] = var66;
            var23['secondaryColor'] = var26;
            var27 = var65.profileContentWrapper;
            var26 = new Array(3);
            var26[0] = var27;
            var27 = var65.profileContent;
            var26[1] = var27;
            var27 = {};
            var27['paddingTop'] = var53;
            var27['paddingBottom'] = var29;
            var26[2] = var27;
            var23['containerStyle'] = var26;
            var29 = _closure1_slot18;
            var26 = 41;
            var26 = var63[var26];
            var27 = var28.bind(var5)(var26);
            var26 = {};
            var26['customStatusActivity'] = var67;
            var66 = var1 != var66;
            var26['hasCustomProfileTheme'] = var66;
            var66 = var65.customStatusBubble;
            var26['style'] = var66;
            var65 = var65.emojiOnlyCustomStatusBubble;
            var26['emojiOnlyStyle'] = var65;
            var26['editEnabled'] = var64;
            var27 = var29.bind(var5)(var27, var26);
            var26 = new Array(3);
            var26[0] = var27;
            var29 = _closure1_slot18;
            var27 = 42;
            var27 = var63[var27];
            var28 = var28.bind(var5)(var27);
            var27 = {};
            var27['user'] = var36;
            var63 = var57;
            if(!(var1 != var58)) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var63 = var58;
case 47:
            var27['displayName'] = var63;
            var63 = var51;
            if(!(var1 != var52)) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var63 = var52;
case 49:
            var27['pronouns'] = var63;
            var27['badges'] = var48;
            var27['badgeContainerBackground'] = var62;
            var48 = 'header';
            var27['displayNameAccessibilityRole'] = var48;
            var48 = var34.id;
            var27['guildId'] = var48;
            var27['pendingDisplayNameStyles'] = var32;
            var27 = var29.bind(var5)(var28, var27);
            var26[1] = var27;
            var29 = _closure1_slot19;
            var28 = _closure1_slot7;
            var27 = {};
            var48 = var16.formContainer;
            var32 = new Array(2);
            var32[0] = var48;
            var48 = {};
            var48['backgroundColor'] = var62;
            var48['paddingBottom'] = var60;
            var32[1] = var48;
            var27['style'] = var32;
            var48 = var1 != var49;
            var32 = null;
            if(var48) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var48 = var1 != var59;
            var32 = null;
            if(var48) { _fun0003_ip = 51; continue _fun0003 }
case 53:
            if(!(var1 == var30)) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var48 = global;
            var60 = var48.Object;
            var48 = var60.keys;
            var48 = var48.bind(var60)(var61);
            var48 = var48.length;
            var48 = var48 > var53;
            var63 = null;
            if(!var48) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var61 = _closure1_slot0;
            var62 = _closure1_slot2;
            var48 = 17;
            var53 = var62[var48];
            var53 = var61.bind(var5)(var53);
            var60 = var53.intl;
            var53 = var60.string;
            var48 = var62[var48];
            var48 = var61.bind(var5)(var48);
            var48 = var48.t;
            var48 = var48.s35OuK;
            var63 = var53.bind(var60)(var48);
case 56:
            _fun0003_ip = 58; continue _fun0003;
case 54:
            var63 = var30;
case 58:
            var48 = var1 == var63;
            var30 = null;
            if(var48) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var30 = null;
            if(!(var37 !== var63)) { _fun0003_ip = 59; continue _fun0003 }
case 61:
            var53 = _closure1_slot18;
            var48 = _closure1_slot7;
            var37 = {};
            var60 = var16.errorContainer;
            var37['style'] = var60;
            var62 = _closure1_slot18;
            var61 = _closure1_slot0;
            var64 = _closure1_slot2;
            var60 = 37;
            var60 = var64[var60];
            var60 = var61.bind(var5)(var60);
            var61 = var60.Text;
            var60 = {'variant': 'text-sm/bold', 'color': 'text-feedback-critical'};
            var60['children'] = var63;
            var60 = var62.bind(var5)(var61, var60);
            var37['children'] = var60;
            var30 = var53.bind(var5)(var48, var37);
case 59:
            var32 = var30;
case 51:
            var30 = new Array(9);
            var30[0] = var32;
            var53 = _closure1_slot18;
            var48 = _closure1_slot1;
            var60 = _closure1_slot2;
            var32 = 43;
            var37 = var60[var32];
            var48 = var48.bind(var5)(var37);
            var37 = {};
            var37['inputRef'] = var21;
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
            var37['label'] = var60;
            var37['errorMessage'] = var59;
            if(!(var1 != var58)) { _fun0003_ip = 62; continue _fun0003 }
case 63:
            var57 = var58;
case 62:
            var37['value'] = var57;
            var37['onFocus'] = var45;
            var57 = function onChange(arg1) {
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
            var37['onChange'] = var57;
            var58 = _closure1_slot1;
            var59 = _closure1_slot2;
            var57 = 44;
            var57 = var59[var57];
            var58 = var58.bind(var5)(var57);
            var57 = var58.getName;
            var57 = var57.bind(var58)(var36);
            var37['placeholder'] = var57;
            var57 = _closure1_slot14;
            var37['maxLength'] = var57;
            var56 = !var56;
            if(var56) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var56 = var38;
case 64:
            var37['isDisabled'] = var56;
            var37 = var53.bind(var5)(var48, var37);
            var30[1] = var37;
            if(!var31) { _fun0003_ip = 66; continue _fun0003 }
case 67:
            var31 = var33;
case 66:
            if(!var31) { _fun0003_ip = 68; continue _fun0003 }
case 69:
            var53 = _closure1_slot18;
            var48 = _closure1_slot1;
            var56 = _closure1_slot2;
            var37 = 45;
            var37 = var56[var37];
            var48 = var48.bind(var5)(var37);
            var37 = {};
            var37['user'] = var36;
            var56 = var34.id;
            var37['guildId'] = var56;
            var31 = var53.bind(var5)(var48, var37);
case 68:
            var30[2] = var31;
            var48 = _closure1_slot18;
            var37 = _closure1_slot1;
            var53 = _closure1_slot2;
            var31 = var53[var32];
            var37 = var37.bind(var5)(var31);
            var31 = {};
            var31['inputRef'] = var55;
            var56 = _closure1_slot0;
            var55 = var53[var21];
            var55 = var56.bind(var5)(var55);
            var58 = var55.intl;
            var57 = var58.string;
            var55 = var53[var21];
            var55 = var56.bind(var5)(var55);
            var55 = var55.t;
            var55 = var55.+T3RI/;
            var55 = var57.bind(var58)(var55);
            var31['label'] = var55;
            var31['errorMessage'] = var54;
            var54 = var53[var21];
            var54 = var56.bind(var5)(var54);
            var55 = var54.intl;
            var54 = var55.string;
            var53 = var53[var21];
            var53 = var56.bind(var5)(var53);
            var53 = var53.t;
            var53 = var53.NZqtIp;
            var53 = var54.bind(var55)(var53);
            var31['description'] = var53;
            if(!(var1 != var52)) { _fun0003_ip = 70; continue _fun0003 }
case 71:
            var51 = var52;
case 70:
            var31['value'] = var51;
            var31['onFocus'] = var45;
            var51 = function onChange(arg1) {
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
            var31['onChange'] = var51;
            var51 = _closure1_slot15;
            var31['maxLength'] = var51;
            var31['isDisabled'] = var38;
            var31 = var48.bind(var5)(var37, var31);
            var30[3] = var31;
            var31 = null;
            if(!var33) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            var37 = _closure1_slot18;
            var33 = _closure1_slot1;
            var48 = _closure1_slot2;
            var32 = var48[var32];
            var33 = var33.bind(var5)(var32);
            var32 = {};
            var32['inputRef'] = var50;
            var51 = _closure1_slot0;
            var50 = var48[var21];
            var50 = var51.bind(var5)(var50);
            var53 = var50.intl;
            var52 = var53.string;
            var50 = var48[var21];
            var50 = var51.bind(var5)(var50);
            var50 = var50.t;
            var50 = var50.ZzAR2Y;
            var50 = var52.bind(var53)(var50);
            var32['label'] = var50;
            var32['errorMessage'] = var49;
            var49 = var48[var21];
            var49 = var51.bind(var5)(var49);
            var50 = var49.intl;
            var49 = var50.string;
            var48 = var48[var21];
            var48 = var51.bind(var5)(var48);
            var48 = var48.t;
            var48 = var48.S5O8U2;
            var48 = var49.bind(var50)(var48);
            var32['description'] = var48;
            if(!(var1 != var47)) { _fun0003_ip = 74; continue _fun0003 }
case 75:
            var46 = var47;
case 74:
            var32['value'] = var46;
            var32['onFocus'] = var45;
            var45 = function onChange(arg1) {
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
            var32['onChange'] = var45;
            var45 = _closure1_slot13;
            var32['maxLength'] = var45;
            var45 = 5;
            var32['numberOfLines'] = var45;
            var32['isDisabled'] = var38;
            var31 = var37.bind(var5)(var33, var32);
case 72:
            var30[4] = var31;
            var38 = _closure1_slot18;
            var32 = _closure1_slot1;
            var37 = _closure1_slot2;
            var31 = 46;
            var31 = var37[var31];
            var33 = var32.bind(var5)(var31);
            var31 = {};
            var31['pendingAvatarSrc'] = var44;
            var31['pendingThemeColors'] = var43;
            var31['user'] = var36;
            var43 = var34.id;
            var31['guildId'] = var43;
            var43 = function onProfileThemeColorsChanged(arg1) {
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
            var31['onProfileThemeColorsChanged'] = var43;
            var31['showResetMenu'] = var42;
            var31 = var38.bind(var5)(var33, var31);
            var30[5] = var31;
            var38 = _closure1_slot18;
            var31 = 47;
            var31 = var37[var31];
            var33 = var32.bind(var5)(var31);
            var31 = {};
            var31['user'] = var36;
            var42 = var34.id;
            var31['guildId'] = var42;
            var31['pendingAvatarDecoration'] = var41;
            var31 = var38.bind(var5)(var33, var31);
            var30[6] = var31;
            var38 = _closure1_slot18;
            var31 = 48;
            var31 = var37[var31];
            var33 = var32.bind(var5)(var31);
            var31 = {};
            var31['user'] = var36;
            var41 = var34.id;
            var31['guildId'] = var41;
            var31['pendingProfileEffect'] = var40;
            var31['displayProfile'] = var39;
            var31 = var38.bind(var5)(var33, var31);
            var30[7] = var31;
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
            var30[8] = var31;
            var27['children'] = var30;
            var27 = var29.bind(var5)(var28, var27);
            var26[2] = var27;
            var23['children'] = var26;
            var23 = var25.bind(var5)(var24, var23);
            var22[1] = var23;
            var18['children'] = var22;
            var18 = var8.bind(var5)(var7, var18);
            var17[1] = var18;
            var13['children'] = var17;
            var13 = var8.bind(var5)(var7, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var11 = var8.bind(var5)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            if(!var10) { _fun0003_ip = 76; continue _fun0003 }
case 77:
            var13 = _closure1_slot18;
            var22 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 50;
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
                var6[var9] = var10;
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
            var14 = 37;
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
            var17 = var17.YIZS5B;
            var17 = var18.bind(var19)(var17);
            var14['children'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var11['children'] = var14;
            var10 = var13.bind(var5)(var12, var11);
case 76:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 41:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
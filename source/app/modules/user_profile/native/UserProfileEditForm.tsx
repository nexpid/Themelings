// app/modules/user_profile/native/UserProfileEditForm.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function EditUserProfileBanner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var18 = var3.user;
            var _closure2_slot0 = var18;
            var15 = var3.displayProfile;
            var _closure2_slot1 = var15;
            var16 = var3.pendingAvatarSrc;
            var17 = var3.pendingBanner;
            var13 = var3.pendingAccentColor;
            var14 = var3.pendingThemeColors;
            var1 = var3.tryItOutBanner;
            var2 = var3.isTryItOut;
            var _closure2_slot2 = var2;
            var8 = var3.disabled;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = null;
            if(!(var2 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 8;
            var2 = var5[var2];
            var1 = var3.bind(var4)(var2);
case 4:
            var17 = var1;
case 2:
            _closure2_slot3 = var17;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var2 = var6.bind(var4)(var1);
            var1 = var2.canUseCollectibles;
            var11 = var1.bind(var2)(var18);
            var1 = 10;
            var2 = var5[var1];
            var3 = var6.bind(var4)(var2);
            var2 = 11;
            var2 = var5[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.EDIT_BANNER;
            var2 = var3.bind(var4)(var2);
            var7 = var2.analyticsLocations;
            _closure2_slot4 = var7;
            var3 = _closure1_slot13;
            var2 = _closure1_slot0;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var7;
            var7 = _closure1_slot13;
            var12 = 12;
            var5 = var5[var12];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['user'] = var18;
            var5['displayProfile'] = var15;
            var5['pendingBanner'] = var17;
            var5['pendingAvatarSrc'] = var16;
            var5['pendingThemeColors'] = var14;
            var5['pendingAccentColor'] = var13;
            var14 = null;
            var16 = var14 == var15;
            var13 = undefined;
            if(var16) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = var15.banner;
case 6:
            var13 = var14 != var13;
            if(!var13) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var12 = undefined;
case 8:
            var5['bannerSafeArea'] = var12;
            var5['showProfilePreviewButton'] = var11;
            var10 = function onPressEdit() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var3 = var2[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 15;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 14;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var3 = {};
                    var8 = _closure2_slot0;
                    var3['user'] = var8;
                    var8 = _closure2_slot4;
                    var3['analyticsLocations'] = var8;
                    var8 = _closure2_slot2;
                    if(var8) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var8 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.setPendingChanges;
                        var1 = {};
                        var4 = arg1;
                        var1['banner'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    _fun0002_ip = 12; continue _fun0002;
case 10:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 16;
                    var9 = var11[var9];
                    var9 = var10.bind(var1)(var9);
                    var8 = var9.setTryItOutBanner;
case 12:
                    var3['onBannerChange'] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 18;
                    var7 = var9[var7];
                    var10 = var8.bind(var1)(var7);
                    var9 = var10.showRemoveBanner;
                    var8 = _closure2_slot3;
                    var11 = _closure2_slot1;
                    var7 = null;
                    var11 = var7 == var11;
                    var7 = undefined;
                    if(var11) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var11 = _closure2_slot1;
                    var7 = var11.banner;
case 13:
                    var7 = var9.bind(var10)(var8, var7);
                    var3['showRemoveBanner'] = var7;
                    var2 = _closure2_slot2;
                    var3['isTryItOut'] = var2;
                    var2 = 'Change Banner';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                }
            };
            var5['onPressEdit'] = var10;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 19;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.VqsHy0;
            var9 = var10.bind(var11)(var9);
            var5['editButtonAccessibilityLabel'] = var9;
            var5['editDisabled'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ScrollView;
    var _closure1_slot4 = var8;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FLOATING_UPSELL_HEIGHT;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BIO_MAX_LENGTH;
    var _closure1_slot8 = var7;
    var7 = var4.DISPLAY_NAME_MAX_LENGTH;
    var _closure1_slot9 = var7;
    var4 = var4.PRONOUNS_MAX_LENGTH;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ProfileCustomizationScrollPositions;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserProfileEditAutoFocusElement;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 51;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileEditForm.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileEditForm(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var39 = var1.currentUser;
            var48 = var1.autoFocusElement;
            var13 = var1.isTryItOut;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var13 = false;
case 15:
            var _closure2_slot0 = var4;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 20;
            var1 = var7[var1];
            var1 = var5.bind(var4)(var1);
            var65 = var1.bind(var4)();
            var1 = 21;
            var1 = var7[var1];
            var1 = var5.bind(var4)(var1);
            var52 = var1.bind(var4)();
            var1 = 22;
            var1 = var7[var1];
            var1 = var5.bind(var4)(var1);
            var11 = var1.bind(var4)();
            var2 = _closure1_slot3;
            var1 = var2.useRef;
            var27 = null;
            var14 = var1.bind(var2)(var27);
            var1 = var2.useRef;
            var56 = var1.bind(var2)(var27);
            var1 = var2.useRef;
            var59 = var1.bind(var2)(var27);
            var1 = var2.useRef;
            var53 = var1.bind(var2)(var27);
            var1 = 23;
            var1 = var7[var1];
            var2 = var5.bind(var4)(var1);
            var1 = {};
            var63 = true;
            var1['includeKeyboardHeight'] = var63;
            var1 = var2.bind(var4)(var1);
            var6 = var1.insets;
            var12 = 24;
            var1 = var7[var12];
            var1 = var5.bind(var4)(var1);
            var1 = var1.spacing;
            var15 = var1.PX_16;
            var1 = 25;
            var1 = var7[var1];
            var2 = var5.bind(var4)(var1);
            var1 = {};
            var1['insets'] = var6;
            var8 = {};
            var8['ref'] = var56;
            var3 = {};
            var16 = 'toRef';
            var3['type'] = var16;
            var3['ref'] = var59;
            var3['extraOffset'] = var15;
            var8['offset'] = var3;
            var3 = new Array(3);
            var3[0] = var8;
            var8 = {};
            var8['ref'] = var59;
            var9 = {};
            var9['type'] = var16;
            var9['ref'] = var53;
            var9['extraOffset'] = var15;
            var8['offset'] = var9;
            var3[1] = var8;
            var8 = {};
            var8['ref'] = var53;
            var9 = {};
            var15 = 'toValue';
            var9['type'] = var15;
            var15 = var7[var12];
            var15 = var5.bind(var4)(var15);
            var15 = var15.spacing;
            var15 = var15.PX_64;
            var9['value'] = var15;
            var8['offset'] = var9;
            var3[2] = var8;
            var1['inputs'] = var3;
            var1['scrollViewRef'] = var14;
            var1 = var2.bind(var4)(var1);
            var47 = var1.onFocus;
            var1 = 26;
            var1 = var7[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var3 = var1.errors;
            var37 = var1.isSubmitting;
            var9 = var1.pendingAvatar;
            var42 = var1.pendingAvatarDecoration;
            var70 = var1.pendingBanner;
            var40 = var1.pendingProfileEffect;
            var35 = var1.pendingNameplate;
            var44 = var1.pendingThemeColors;
            var69 = var1.pendingAccentColor;
            var21 = var1.tryItOutBanner;
            var43 = var1.tryItOutAvatarDecoration;
            var41 = var1.tryItOutProfileEffect;
            var45 = var1.tryItOutThemeColors;
            var29 = var1.tryItOutDisplayNameStyles;
            var60 = var1.pendingGlobalName;
            var55 = var1.pendingPronouns;
            var50 = var1.pendingBio;
            var31 = var1.pendingLegacyUsernameDisabled;
            var36 = var1.pendingPrimaryGuildId;
            var28 = var1.pendingDisplayNameStyles;
            var1 = 27;
            var1 = var7[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var1 = 28;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useGuildAutomodProfileQuarantineErrors;
            var2 = var1.bind(var2)();
            var1 = 29;
            var1 = var7[var1];
            var5 = var5.bind(var4)(var1);
            var7 = var39.id;
            var8 = var27 != var7;
            var26 = '';
            var1 = var26;
            if(!var8) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var1 = var7;
case 17:
            var34 = var5.bind(var4)(var1);
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 30;
            var1 = var7[var1];
            var8 = var5.bind(var4)(var1);
            var1 = var8.useCustomStatusActivity;
            var67 = var1.bind(var8)();
            var1 = 31;
            var1 = var7[var1];
            var8 = var5.bind(var4)(var1);
            var5 = var8.getPendingAvatarSrc;
            var1 = {};
            var15 = var39.id;
            var1['userId'] = var15;
            var1['image'] = var9;
            var46 = var5.bind(var8)(var1);
            var5 = _closure1_slot1;
            var1 = 32;
            var1 = var7[var1];
            var1 = var5.bind(var4)(var1);
            var30 = var1.bind(var4)(var34, var31);
            var1 = 9;
            var1 = var7[var1];
            var5 = var5.bind(var4)(var1);
            var1 = var5.canUsePremiumProfileCustomization;
            var9 = var1.bind(var5)(var39);
            var1 = var27 == var34;
            var32 = undefined;
            if(var1) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var1 = var34.getLegacyUsername;
            var32 = var1.bind(var34)();
case 19:
            var1 = var39.globalName;
            var5 = var27 != var1;
            var58 = var26;
            if(!var5) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var58 = var1;
case 21:
            var5 = var27 == var34;
            var1 = undefined;
            if(var5) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var1 = var34.pronouns;
case 23:
            var5 = var27 != var1;
            var54 = var26;
            if(!var5) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var54 = var1;
case 25:
            var5 = var27 == var34;
            var1 = undefined;
            if(var5) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var1 = var34.bio;
case 27:
            var5 = var27 != var1;
            var49 = var26;
            if(!var5) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var49 = var1;
case 29:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 33;
            var1 = var7[var1];
            var5 = var5.bind(var4)(var1);
            var1 = {};
            var1['user'] = var39;
            var1['displayProfile'] = var34;
            var7 = var44;
            if(!var13) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var7 = var45;
case 31:
            var1['pendingThemeColors'] = var7;
            var1['isPreview'] = var13;
            var1 = var5.bind(var4)(var1);
            var5 = var1.theme;
            var66 = var1.primaryColor;
            var22 = var1.secondaryColor;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 34;
            var1 = var8[var1];
            var8 = var7.bind(var4)(var1);
            var7 = var8.useUserProfileColors;
            var1 = {};
            var1['theme'] = var5;
            var1['primaryColor'] = var66;
            var1['secondaryColor'] = var22;
            var1 = var7.bind(var8)(var1);
            var23 = var1.gradientFallbackBackground;
            var18 = var1.gradientSecondaryBackground;
            var38 = var1.containerBackground;
            var1 = var1.avatarBackground;
            var7 = var6.bottom;
            var68 = 0;
            var6 = 0;
            if(var9) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var6 = 0;
            if(var11) { _fun0003_ip = 33; continue _fun0003 }
case 35:
            var6 = _closure1_slot7;
case 33:
            var7 = var7 + var6;
            var8 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var12];
            var6 = var8.bind(var4)(var6);
            var6 = var6.spacing;
            var6 = var6.PX_16;
            var25 = var7 + var6;
            var72 = {};
            var72['backgroundColor'] = var1;
            var1 = var27 == var3;
            var61 = undefined;
            if(var1) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var1 = var3.username;
            var6 = var27 == var1;
            var61 = undefined;
            if(var6) { _fun0003_ip = 36; continue _fun0003 }
case 38:
            var61 = var1[var68];
case 36:
            if(!(var27 == var61)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var6 = var3.global_name;
            var7 = var27 == var6;
            var1 = undefined;
            if(var7) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var1 = var6[var68];
case 41:
            var61 = var1;
case 39:
            if(!(var27 == var61)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var6 = var27 == var2;
            var1 = undefined;
            if(var6) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var2 = var2.nick;
            var6 = var27 == var2;
            var1 = undefined;
            if(var6) { _fun0003_ip = 45; continue _fun0003 }
case 47:
            var1 = var2[var68];
case 45:
            var61 = var1;
case 43:
            var1 = var3.pronouns;
            var2 = var27 == var1;
            var57 = undefined;
            if(var2) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var57 = var1[var68];
case 48:
            var1 = var3.bio;
            var2 = var27 == var1;
            var51 = undefined;
            if(var2) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var51 = var1[var68];
case 50:
            var1 = global;
            var2 = var1.Object;
            var1 = var2.keys;
            var1 = var1.bind(var2)(var3);
            var1 = var1.length;
            var1 = var1 > var68;
            var64 = null;
            if(!var1) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var1 = var27 == var51;
            var64 = null;
            if(!var1) { _fun0003_ip = 52; continue _fun0003 }
case 54:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 19;
            var2 = var7[var1];
            var2 = var6.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1["84MExs"];
            var64 = var2.bind(var3)(var1);
case 52:
            var3 = _closure1_slot6;
            var2 = var3.useField;
            var1 = 'scrollPosition';
            var2 = var2.bind(var3)(var1);
            var24 = _closure1_slot1;
            var62 = _closure1_slot2;
            var1 = 35;
            var1 = var62[var1];
            var1 = var24.bind(var4)(var1);
            var1 = var1.bind(var4)(var14, var2);
            _closure2_slot0 = var1;
            var3 = _closure1_slot13;
            var2 = _closure1_slot0;
            var1 = 37;
            var1 = var62[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var1['theme'] = var5;
            var1['primaryColor'] = var66;
            var1['secondaryColor'] = var22;
            var7 = _closure1_slot14;
            var6 = _closure1_slot5;
            var5 = {};
            var12 = var52.container;
            var8 = new Array(2);
            var8[0] = var12;
            var12 = {};
            var12['backgroundColor'] = var18;
            var8[1] = var12;
            var5['style'] = var8;
            var12 = _closure1_slot4;
            var8 = {};
            var8['ref'] = var14;
            var15 = _closure1_slot13;
            var14 = {};
            var16 = var52.bounceOffset;
            var14['style'] = var16;
            var15 = var15.bind(var4)(var6, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var20 = 38;
            var15 = var62[var20];
            var16 = var24.bind(var4)(var15);
            var15 = {};
            var15['fallbackBackground'] = var23;
            var15['primaryColor'] = var66;
            var15['secondaryColor'] = var22;
            var17 = {};
            var17['backgroundColor'] = var18;
            var15['containerStyle'] = var17;
            var19 = _closure1_slot13;
            var18 = _closure1_slot15;
            var17 = {};
            var17['user'] = var39;
            var17['displayProfile'] = var34;
            var17['pendingAvatarSrc'] = var46;
            var17['pendingBanner'] = var70;
            var17['pendingAccentColor'] = var69;
            var17['pendingThemeColors'] = var44;
            var17['tryItOutBanner'] = var21;
            var17['isTryItOut'] = var13;
            var17['disabled'] = var37;
            var18 = var19.bind(var4)(var18, var17);
            var17 = new Array(2);
            var17[0] = var18;
            var18 = {};
            var21 = _closure1_slot13;
            var19 = {};
            var70 = var65.avatarBackground;
            var69 = new Array(4);
            var69[0] = var70;
            var70 = var65.avatarPosition;
            var69[1] = var70;
            var70 = var52.avatarContainer;
            var69[2] = var70;
            var69[3] = var72;
            var19['style'] = var69;
            var71 = _closure1_slot13;
            var69 = 39;
            var69 = var62[var69];
            var70 = var24.bind(var4)(var69);
            var69 = {};
            var69['user'] = var39;
            var69['disabled'] = var37;
            var73 = var27 != var13;
            var69['disableStatus'] = var73;
            var69['statusStyle'] = var72;
            var69['isTryItOut'] = var13;
            var72 = _closure1_slot12;
            var72 = var72.AVATAR;
            var72 = var48 === var72;
            var69['autoStartEditFlow'] = var72;
            var69 = var71.bind(var4)(var70, var69);
            var19['children'] = var69;
            var21 = var21.bind(var4)(var6, var19);
            var19 = new Array(2);
            var19[0] = var21;
            var20 = var62[var20];
            var21 = var24.bind(var4)(var20);
            var20 = {};
            var20['fallbackBackground'] = var23;
            var20['primaryColor'] = var66;
            var20['secondaryColor'] = var22;
            var23 = var65.profileContentWrapper;
            var22 = new Array(3);
            var22[0] = var23;
            var23 = var65.profileContent;
            var22[1] = var23;
            var23 = {};
            var23['paddingTop'] = var68;
            var23['paddingBottom'] = var25;
            var22[2] = var23;
            var20['containerStyle'] = var22;
            var25 = _closure1_slot13;
            var22 = 40;
            var22 = var62[var22];
            var23 = var24.bind(var4)(var22);
            var22 = {};
            var22['customStatusActivity'] = var67;
            var66 = var27 != var66;
            var22['hasCustomProfileTheme'] = var66;
            var66 = var65.customStatusBubble;
            var22['style'] = var66;
            var65 = var65.emojiOnlyCustomStatusBubble;
            var22['emojiOnlyStyle'] = var65;
            var22['editEnabled'] = var63;
            var23 = var25.bind(var4)(var23, var22);
            var22 = new Array(3);
            var22[0] = var23;
            var25 = _closure1_slot13;
            var23 = 41;
            var23 = var62[var23];
            var24 = var24.bind(var4)(var23);
            var23 = {};
            var23['user'] = var39;
            var23['displayName'] = var60;
            var23['badges'] = var30;
            var30 = var54;
            if(!(var27 != var55)) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var30 = var55;
case 55:
            var23['pronouns'] = var30;
            var23['badgeContainerBackground'] = var38;
            var30 = 'header';
            var23['displayNameAccessibilityRole'] = var30;
            if(!var13) { _fun0003_ip = 57; continue _fun0003 }
case 58:
            var28 = var29;
case 57:
            var23['pendingDisplayNameStyles'] = var28;
            var23 = var25.bind(var4)(var24, var23);
            var22[1] = var23;
            var25 = _closure1_slot14;
            var24 = _closure1_slot5;
            var23 = {};
            var29 = var52.formContainer;
            var28 = new Array(2);
            var28[0] = var29;
            var29 = {};
            var29['backgroundColor'] = var38;
            var28[1] = var29;
            var23['style'] = var28;
            var29 = var27 != var64;
            var28 = null;
            if(!var29) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var28 = null;
            if(!(var26 !== var64)) { _fun0003_ip = 59; continue _fun0003 }
case 61:
            var30 = _closure1_slot13;
            var29 = _closure1_slot5;
            var26 = {};
            var52 = var52.errorContainer;
            var26['style'] = var52;
            var63 = _closure1_slot13;
            var62 = _closure1_slot0;
            var65 = _closure1_slot2;
            var52 = 36;
            var52 = var65[var52];
            var52 = var62.bind(var4)(var52);
            var62 = var52.Text;
            var52 = {'variant': 'text-sm/bold', 'color': 'text-feedback-critical'};
            var52['children'] = var64;
            var52 = var63.bind(var4)(var62, var52);
            var26['children'] = var52;
            var28 = var30.bind(var4)(var29, var26);
case 59:
            var26 = new Array(11);
            var26[0] = var28;
            var52 = _closure1_slot13;
            var30 = _closure1_slot1;
            var62 = _closure1_slot2;
            var28 = 42;
            var29 = var62[var28];
            var30 = var30.bind(var4)(var29);
            var29 = {};
            var29['inputRef'] = var56;
            var65 = _closure1_slot0;
            var56 = 19;
            var63 = var62[var56];
            var63 = var65.bind(var4)(var63);
            var64 = var63.intl;
            var63 = var64.string;
            var62 = var62[var56];
            var62 = var65.bind(var4)(var62);
            var62 = var62.t;
            var62 = var62["9AjdkD"];
            var62 = var63.bind(var64)(var62);
            var29['label'] = var62;
            var29['errorMessage'] = var61;
            if(!(var27 != var60)) { _fun0003_ip = 62; continue _fun0003 }
case 63:
            var58 = var60;
case 62:
            var29['value'] = var58;
            var29['onFocus'] = var47;
            var58 = function onChange(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.setPendingChanges;
                var1 = {};
                var4 = arg1;
                var1['globalName'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var29['onChange'] = var58;
            var58 = var39.toString;
            var58 = var58.bind(var39)();
            var29['placeholder'] = var58;
            var58 = _closure1_slot9;
            var29['maxLength'] = var58;
            var29['isDisabled'] = var37;
            var29 = var52.bind(var4)(var30, var29);
            var26[1] = var29;
            var29 = var9;
            if(var29) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var29 = var13;
case 64:
            if(!var29) { _fun0003_ip = 66; continue _fun0003 }
case 67:
            var58 = _closure1_slot13;
            var52 = _closure1_slot1;
            var60 = _closure1_slot2;
            var30 = 43;
            var30 = var60[var30];
            var52 = var52.bind(var4)(var30);
            var30 = {};
            var30['user'] = var39;
            var30['isTryItOut'] = var13;
            var29 = var58.bind(var4)(var52, var30);
case 66:
            var26[2] = var29;
            var52 = _closure1_slot13;
            var30 = _closure1_slot1;
            var58 = _closure1_slot2;
            var29 = var58[var28];
            var30 = var30.bind(var4)(var29);
            var29 = {};
            var29['inputRef'] = var59;
            var61 = _closure1_slot0;
            var59 = var58[var56];
            var59 = var61.bind(var4)(var59);
            var60 = var59.intl;
            var59 = var60.string;
            var58 = var58[var56];
            var58 = var61.bind(var4)(var58);
            var58 = var58.t;
            var58 = var58["+T3RI/"];
            var58 = var59.bind(var60)(var58);
            var29['label'] = var58;
            var29['errorMessage'] = var57;
            if(!(var27 != var55)) { _fun0003_ip = 68; continue _fun0003 }
case 69:
            var54 = var55;
case 68:
            var29['value'] = var54;
            var29['onFocus'] = var47;
            var54 = function onChange(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.setPendingChanges;
                var1 = {};
                var4 = arg1;
                var1['pronouns'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var29['onChange'] = var54;
            var54 = _closure1_slot10;
            var29['maxLength'] = var54;
            var29['isDisabled'] = var37;
            var29 = var52.bind(var4)(var30, var29);
            var26[3] = var29;
            var30 = _closure1_slot13;
            var29 = _closure1_slot1;
            var52 = _closure1_slot2;
            var28 = var52[var28];
            var29 = var29.bind(var4)(var28);
            var28 = {};
            var28['inputRef'] = var53;
            var55 = _closure1_slot0;
            var53 = var52[var56];
            var53 = var55.bind(var4)(var53);
            var54 = var53.intl;
            var53 = var54.string;
            var52 = var52[var56];
            var52 = var55.bind(var4)(var52);
            var52 = var52.t;
            var52 = var52.ZzAR2Y;
            var52 = var53.bind(var54)(var52);
            var28['label'] = var52;
            var28['errorMessage'] = var51;
            if(!(var27 != var50)) { _fun0003_ip = 70; continue _fun0003 }
case 71:
            var49 = var50;
case 70:
            var28['value'] = var49;
            var28['onFocus'] = var47;
            var47 = function onChange(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.setPendingChanges;
                var1 = {};
                var4 = arg1;
                var1['bio'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var28['onChange'] = var47;
            var47 = _closure1_slot12;
            var47 = var47.BIO;
            var47 = var48 === var47;
            var28['autoFocus'] = var47;
            var47 = _closure1_slot8;
            var28['maxLength'] = var47;
            var47 = 5;
            var28['numberOfLines'] = var47;
            var28['isDisabled'] = var37;
            var28 = var30.bind(var4)(var29, var28);
            var26[4] = var28;
            var30 = _closure1_slot13;
            var29 = _closure1_slot1;
            var47 = _closure1_slot2;
            var28 = 44;
            var28 = var47[var28];
            var29 = var29.bind(var4)(var28);
            var28 = {};
            var28['user'] = var39;
            if(var13) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            var47 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.setPendingChanges;
                var1 = {};
                var4 = arg1;
                var1['themeColors'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            _fun0003_ip = 74; continue _fun0003;
case 72:
            var49 = _closure1_slot0;
            var50 = _closure1_slot2;
            var48 = 16;
            var48 = var50[var48];
            var48 = var49.bind(var4)(var48);
            var47 = var48.setTryItOutThemeColors;
case 74:
            var28['onProfileThemeColorsChanged'] = var47;
            var28['pendingAvatarSrc'] = var46;
            if(!var13) { _fun0003_ip = 75; continue _fun0003 }
case 76:
            var44 = var45;
case 75:
            var28['pendingThemeColors'] = var44;
            var28['isTryItOut'] = var13;
            var28 = var30.bind(var4)(var29, var28);
            var26[5] = var28;
            var30 = _closure1_slot13;
            var29 = _closure1_slot1;
            var44 = _closure1_slot2;
            var28 = 45;
            var28 = var44[var28];
            var29 = var29.bind(var4)(var28);
            var28 = {};
            var28['user'] = var39;
            if(!var13) { _fun0003_ip = 77; continue _fun0003 }
case 78:
            var42 = var43;
case 77:
            var28['pendingAvatarDecoration'] = var42;
            var28['isTryItOut'] = var13;
            var28 = var30.bind(var4)(var29, var28);
            var26[6] = var28;
            var30 = _closure1_slot13;
            var29 = _closure1_slot1;
            var42 = _closure1_slot2;
            var28 = 46;
            var28 = var42[var28];
            var29 = var29.bind(var4)(var28);
            var28 = {};
            var28['user'] = var39;
            if(!var13) { _fun0003_ip = 79; continue _fun0003 }
case 80:
            var40 = var41;
case 79:
            var28['pendingProfileEffect'] = var40;
            var28['displayProfile'] = var34;
            var28['isTryItOut'] = var13;
            var28 = var30.bind(var4)(var29, var28);
            var26[7] = var28;
            var30 = _closure1_slot13;
            var34 = _closure1_slot1;
            var40 = _closure1_slot2;
            var28 = 47;
            var28 = var40[var28];
            var29 = var34.bind(var4)(var28);
            var28 = {};
            var28['user'] = var39;
            var28['pendingNameplate'] = var35;
            var28 = var30.bind(var4)(var29, var28);
            var26[8] = var28;
            var30 = _closure1_slot13;
            var29 = _closure1_slot5;
            var28 = {};
            var33 = function ref(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0004_ip = 81; continue _fun0004 }
case 82:
                    var1 = _closure2_slot0;
                    var2 = var1.current;
                    var1 = _closure1_slot11;
                    var1 = var1.GUILD_TAG;
                    var2[var1] = var3;
case 81:
                    var1 = undefined;
                    return var1;
                }
            };
            var28['ref'] = var33;
            var35 = _closure1_slot13;
            var33 = 48;
            var33 = var40[var33];
            var34 = var34.bind(var4)(var33);
            var33 = {};
            var33['user'] = var39;
            var33['disabled'] = var37;
            var37 = {};
            var37['backgroundColor'] = var38;
            var33['tagStyle'] = var37;
            var33['pendingPrimaryGuildId'] = var36;
            var33 = var35.bind(var4)(var34, var33);
            var28['children'] = var33;
            var28 = var30.bind(var4)(var29, var28);
            var26[9] = var28;
            var27 = var27 != var32;
            if(!var27) { _fun0003_ip = 83; continue _fun0003 }
case 84:
            var30 = _closure1_slot13;
            var29 = _closure1_slot1;
            var33 = _closure1_slot2;
            var28 = 49;
            var28 = var33[var28];
            var29 = var29.bind(var4)(var28);
            var28 = {};
            var28['legacyUsername'] = var32;
            var28['pendingLegacyUsernameDisabled'] = var31;
            var27 = var30.bind(var4)(var29, var28);
case 83:
            var26[10] = var27;
            var23['children'] = var26;
            var23 = var25.bind(var4)(var24, var23);
            var22[2] = var23;
            var20['children'] = var22;
            var20 = var7.bind(var4)(var21, var20);
            var19[1] = var20;
            var18['children'] = var19;
            var18 = var7.bind(var4)(var6, var18);
            var17[1] = var18;
            var15['children'] = var17;
            var15 = var7.bind(var4)(var16, var15);
            var14[1] = var15;
            var8['children'] = var14;
            var12 = var7.bind(var4)(var12, var8);
            var8 = new Array(2);
            var8[0] = var12;
            var9 = !var9;
            if(!var9) { _fun0003_ip = 85; continue _fun0003 }
case 86:
            var9 = !var11;
case 85:
            if(!var9) { _fun0003_ip = 87; continue _fun0003 }
case 88:
            var12 = _closure1_slot13;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 50;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.UserProfilePremiumUpsellCard;
            var10 = {};
            var10['isTryItOut'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 87:
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
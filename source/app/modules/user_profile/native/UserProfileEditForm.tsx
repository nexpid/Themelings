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
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 16;
                    var9 = var11[var9];
                    var9 = var10.bind(var1)(var9);
                    if(var8) { _fun0002_ip = 10; continue _fun0002 }
case 2:
                    var8 = var9.setPendingBanner;
                    _fun0002_ip = 11; continue _fun0002;
case 10:
                    var8 = var9.setTryItOutBanner;
case 11:
                    var3['onBannerChange'] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 17;
                    var7 = var9[var7];
                    var10 = var8.bind(var1)(var7);
                    var9 = var10.showRemoveBanner;
                    var8 = _closure2_slot3;
                    var11 = _closure2_slot1;
                    var7 = null;
                    var11 = var7 == var11;
                    var7 = undefined;
                    if(var11) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var11 = _closure2_slot1;
                    var7 = var11.banner;
case 12:
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
            var9 = 18;
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
    var4 = 53;
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
            var49 = var1.autoFocusElement;
            var13 = var1.isTryItOut;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var13 = false;
case 14:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 19;
            var1 = var8[var1];
            var1 = var5.bind(var4)(var1);
            var67 = var1.bind(var4)();
            var1 = 20;
            var1 = var8[var1];
            var1 = var5.bind(var4)(var1);
            var64 = var1.bind(var4)();
            var1 = 21;
            var1 = var8[var1];
            var1 = var5.bind(var4)(var1);
            var11 = var1.bind(var4)();
            var2 = _closure1_slot3;
            var1 = var2.useRef;
            var29 = null;
            var14 = var1.bind(var2)(var29);
            var1 = var2.useRef;
            var57 = var1.bind(var2)(var29);
            var1 = var2.useRef;
            var60 = var1.bind(var2)(var29);
            var1 = var2.useRef;
            var54 = var1.bind(var2)(var29);
            var1 = 22;
            var1 = var8[var1];
            var2 = var5.bind(var4)(var1);
            var1 = {};
            var47 = true;
            var1['includeKeyboardHeight'] = var47;
            var1 = var2.bind(var4)(var1);
            var6 = var1.insets;
            var15 = 23;
            var1 = var8[var15];
            var1 = var5.bind(var4)(var1);
            var1 = var1.spacing;
            var12 = var1.PX_16;
            var1 = 24;
            var1 = var8[var1];
            var2 = var5.bind(var4)(var1);
            var1 = {};
            var1['insets'] = var6;
            var7 = {};
            var7['ref'] = var57;
            var3 = {};
            var16 = 'toRef';
            var3['type'] = var16;
            var3['ref'] = var60;
            var3['extraOffset'] = var12;
            var7['offset'] = var3;
            var3 = new Array(3);
            var3[0] = var7;
            var7 = {};
            var7['ref'] = var60;
            var9 = {};
            var9['type'] = var16;
            var9['ref'] = var54;
            var9['extraOffset'] = var12;
            var7['offset'] = var9;
            var3[1] = var7;
            var7 = {};
            var7['ref'] = var54;
            var9 = {};
            var12 = 'toValue';
            var9['type'] = var12;
            var12 = var8[var15];
            var12 = var5.bind(var4)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_64;
            var9['value'] = var12;
            var7['offset'] = var9;
            var3[2] = var7;
            var1['inputs'] = var3;
            var1['scrollViewRef'] = var14;
            var1 = var2.bind(var4)(var1);
            var48 = var1.onFocus;
            var2 = _closure1_slot0;
            var1 = 25;
            var1 = var8[var1];
            var7 = var2.bind(var4)(var1);
            var3 = var7.useIsDisplayNameStylesMobileEnabled;
            var1 = {};
            var9 = 'UserProfileEditForm';
            var1['location'] = var9;
            var31 = var3.bind(var7)(var1);
            var1 = 26;
            var1 = var8[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var3 = var1.errors;
            var37 = var1.isSubmitting;
            var12 = var1.pendingAvatar;
            var42 = var1.pendingAvatarDecoration;
            var72 = var1.pendingBanner;
            var40 = var1.pendingProfileEffect;
            var35 = var1.pendingNameplate;
            var44 = var1.pendingThemeColors;
            var71 = var1.pendingAccentColor;
            var21 = var1.tryItOutBanner;
            var43 = var1.tryItOutAvatarDecoration;
            var41 = var1.tryItOutProfileEffect;
            var45 = var1.tryItOutThemeColors;
            var53 = var1.tryItOutDisplayNameStyles;
            var62 = var1.pendingGlobalName;
            var56 = var1.pendingPronouns;
            var51 = var1.pendingBio;
            var7 = var1.pendingLegacyUsernameDisabled;
            var36 = var1.pendingPrimaryGuildId;
            var30 = var1.pendingDisplayNameStyles;
            var1 = 27;
            var1 = var8[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = 28;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useGuildAutomodProfileQuarantineErrors;
            var2 = var1.bind(var2)();
            var1 = 29;
            var1 = var8[var1];
            var5 = var5.bind(var4)(var1);
            var8 = var39.id;
            var9 = var29 != var8;
            var32 = '';
            var1 = var32;
            if(!var9) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var1 = var8;
case 16:
            var34 = var5.bind(var4)(var1);
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 30;
            var1 = var8[var1];
            var9 = var5.bind(var4)(var1);
            var1 = var9.useCustomStatusActivity;
            var69 = var1.bind(var9)();
            var1 = 31;
            var1 = var8[var1];
            var9 = var5.bind(var4)(var1);
            var5 = var9.getPendingAvatarSrc;
            var1 = {};
            var16 = var39.id;
            var1['userId'] = var16;
            var1['image'] = var12;
            var46 = var5.bind(var9)(var1);
            var5 = _closure1_slot1;
            var1 = 32;
            var1 = var8[var1];
            var1 = var5.bind(var4)(var1);
            var65 = var1.bind(var4)(var34, var7);
            var1 = 9;
            var1 = var8[var1];
            var5 = var5.bind(var4)(var1);
            var1 = var5.canUsePremiumProfileCustomization;
            var9 = var1.bind(var5)(var39);
            var1 = var29 == var34;
            var27 = undefined;
            if(var1) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var1 = var34.getLegacyUsername;
            var27 = var1.bind(var34)();
case 18:
            var1 = var39.globalName;
            var5 = var29 != var1;
            var61 = var32;
            if(!var5) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var61 = var1;
case 20:
            var5 = var29 == var34;
            var1 = undefined;
            if(var5) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var1 = var34.pronouns;
case 22:
            var5 = var29 != var1;
            var55 = var32;
            if(!var5) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var55 = var1;
case 24:
            _closure2_slot1 = var55;
            var5 = var29 == var34;
            var1 = undefined;
            if(var5) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var1 = var34.bio;
case 26:
            var5 = var29 != var1;
            var50 = var32;
            if(!var5) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var50 = var1;
case 28:
            _closure2_slot2 = var50;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 33;
            var1 = var8[var1];
            var5 = var5.bind(var4)(var1);
            var1 = {};
            var1['user'] = var39;
            var1['displayProfile'] = var34;
            var8 = var44;
            if(!var13) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var8 = var45;
case 30:
            var1['pendingThemeColors'] = var8;
            var1['isPreview'] = var13;
            var1 = var5.bind(var4)(var1);
            var5 = var1.theme;
            var68 = var1.primaryColor;
            var22 = var1.secondaryColor;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 34;
            var1 = var12[var1];
            var12 = var8.bind(var4)(var1);
            var8 = var12.useUserProfileColors;
            var1 = {};
            var1['theme'] = var5;
            var1['primaryColor'] = var68;
            var1['secondaryColor'] = var22;
            var1 = var8.bind(var12)(var1);
            var23 = var1.gradientFallbackBackground;
            var18 = var1.gradientSecondaryBackground;
            var38 = var1.containerBackground;
            var1 = var1.avatarBackground;
            var8 = var6.bottom;
            var70 = 0;
            var6 = 0;
            if(var9) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var6 = 0;
            if(var11) { _fun0003_ip = 32; continue _fun0003 }
case 34:
            var6 = _closure1_slot7;
case 32:
            var8 = var8 + var6;
            var12 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var15];
            var6 = var12.bind(var4)(var6);
            var6 = var6.spacing;
            var6 = var6.PX_16;
            var25 = var8 + var6;
            var74 = {};
            var74['backgroundColor'] = var1;
            var1 = var29 == var3;
            var63 = undefined;
            if(var1) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var1 = var3.username;
            var6 = var29 == var1;
            var63 = undefined;
            if(var6) { _fun0003_ip = 35; continue _fun0003 }
case 37:
            var63 = var1[var70];
case 35:
            if(!(var29 == var63)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var6 = var3.global_name;
            var8 = var29 == var6;
            var1 = undefined;
            if(var8) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var1 = var6[var70];
case 40:
            var63 = var1;
case 38:
            if(!(var29 == var63)) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var6 = var29 == var2;
            var1 = undefined;
            if(var6) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var2 = var2.nick;
            var6 = var29 == var2;
            var1 = undefined;
            if(var6) { _fun0003_ip = 44; continue _fun0003 }
case 46:
            var1 = var2[var70];
case 44:
            var63 = var1;
case 42:
            var1 = var3.pronouns;
            var2 = var29 == var1;
            var58 = undefined;
            if(var2) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var58 = var1[var70];
case 47:
            var1 = var3.bio;
            var2 = var29 == var1;
            var52 = undefined;
            if(var2) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var52 = var1[var70];
case 49:
            var1 = global;
            var2 = var1.Object;
            var1 = var2.keys;
            var1 = var1.bind(var2)(var3);
            var1 = var1.length;
            var1 = var1 > var70;
            var26 = null;
            if(!var1) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var1 = var29 == var52;
            var26 = null;
            if(!var1) { _fun0003_ip = 51; continue _fun0003 }
case 53:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 18;
            var2 = var8[var1];
            var2 = var6.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var8[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.84MExs;
            var26 = var2.bind(var3)(var1);
case 51:
            var2 = _closure1_slot0;
            var66 = _closure1_slot2;
            var1 = 35;
            var1 = var66[var1];
            var8 = var2.bind(var4)(var1);
            var6 = var8.useStateFromStores;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getScrollPosition;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var6.bind(var8)(var3, var1);
            var24 = _closure1_slot1;
            var1 = 36;
            var1 = var66[var1];
            var1 = var24.bind(var4)(var1);
            var1 = var1.bind(var4)(var14, var3);
            _closure2_slot3 = var1;
            var6 = _closure1_slot13;
            var1 = 37;
            var1 = var66[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.Text;
            var1 = {'variant': 'text-sm/bold', 'color': 'text-feedback-critical'};
            var1['children'] = var26;
            var59 = var6.bind(var4)(var3, var1);
            var6 = _closure1_slot13;
            var1 = 38;
            var1 = var66[var1];
            var3 = var24.bind(var4)(var1);
            var1 = {};
            var1['legacyUsername'] = var27;
            var1['pendingLegacyUsernameDisabled'] = var7;
            var28 = var6.bind(var4)(var3, var1);
            var3 = _closure1_slot13;
            var1 = 39;
            var1 = var66[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var1['theme'] = var5;
            var1['primaryColor'] = var68;
            var1['secondaryColor'] = var22;
            var7 = _closure1_slot14;
            var6 = _closure1_slot5;
            var5 = {};
            var12 = var64.container;
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
            var16 = var64.bounceOffset;
            var14['style'] = var16;
            var15 = var15.bind(var4)(var6, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var20 = 40;
            var15 = var66[var20];
            var16 = var24.bind(var4)(var15);
            var15 = {};
            var15['fallbackBackground'] = var23;
            var15['primaryColor'] = var68;
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
            var17['pendingBanner'] = var72;
            var17['pendingAccentColor'] = var71;
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
            var72 = var67.avatarBackground;
            var71 = new Array(4);
            var71[0] = var72;
            var72 = var67.avatarPosition;
            var71[1] = var72;
            var72 = var64.avatarContainer;
            var71[2] = var72;
            var71[3] = var74;
            var19['style'] = var71;
            var73 = _closure1_slot13;
            var71 = 41;
            var71 = var66[var71];
            var72 = var24.bind(var4)(var71);
            var71 = {};
            var71['user'] = var39;
            var71['disabled'] = var37;
            var75 = var29 != var13;
            var71['disableStatus'] = var75;
            var71['statusStyle'] = var74;
            var71['isTryItOut'] = var13;
            var74 = _closure1_slot12;
            var74 = var74.AVATAR;
            var74 = var49 === var74;
            var71['autoStartEditFlow'] = var74;
            var71 = var73.bind(var4)(var72, var71);
            var19['children'] = var71;
            var21 = var21.bind(var4)(var6, var19);
            var19 = new Array(2);
            var19[0] = var21;
            var20 = var66[var20];
            var21 = var24.bind(var4)(var20);
            var20 = {};
            var20['fallbackBackground'] = var23;
            var20['primaryColor'] = var68;
            var20['secondaryColor'] = var22;
            var23 = var67.profileContentWrapper;
            var22 = new Array(3);
            var22[0] = var23;
            var23 = var67.profileContent;
            var22[1] = var23;
            var23 = {};
            var23['paddingTop'] = var70;
            var23['paddingBottom'] = var25;
            var22[2] = var23;
            var20['containerStyle'] = var22;
            var25 = _closure1_slot13;
            var22 = 42;
            var22 = var66[var22];
            var23 = var24.bind(var4)(var22);
            var22 = {};
            var22['customStatusActivity'] = var69;
            var68 = var29 != var68;
            var22['hasCustomProfileTheme'] = var68;
            var68 = var67.customStatusBubble;
            var22['style'] = var68;
            var67 = var67.emojiOnlyCustomStatusBubble;
            var22['emojiOnlyStyle'] = var67;
            var22['editEnabled'] = var47;
            var23 = var25.bind(var4)(var23, var22);
            var22 = new Array(3);
            var22[0] = var23;
            var25 = _closure1_slot13;
            var23 = 43;
            var23 = var66[var23];
            var24 = var24.bind(var4)(var23);
            var23 = {};
            var23['user'] = var39;
            var23['displayName'] = var62;
            var23['badges'] = var65;
            var65 = var55;
            if(!(var29 != var56)) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var65 = var56;
case 54:
            var23['pronouns'] = var65;
            var23['badgeContainerBackground'] = var38;
            var65 = 'header';
            var23['displayNameAccessibilityRole'] = var65;
            if(!var13) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var30 = var53;
case 56:
            var23['pendingDisplayNameStyles'] = var30;
            var23 = var25.bind(var4)(var24, var23);
            var22[1] = var23;
            _closure2_slot0 = var39;
            var25 = _closure1_slot14;
            var24 = _closure1_slot5;
            var23 = {};
            var53 = var64.formContainer;
            var30 = new Array(2);
            var30[0] = var53;
            var53 = {};
            var53['backgroundColor'] = var38;
            var30[1] = var53;
            var23['style'] = var30;
            var53 = var29 != var26;
            var30 = null;
            if(!var53) { _fun0003_ip = 58; continue _fun0003 }
case 59:
            var30 = null;
            if(!(var32 !== var26)) { _fun0003_ip = 58; continue _fun0003 }
case 60:
            var53 = _closure1_slot13;
            var32 = _closure1_slot5;
            var26 = {};
            var64 = var64.errorContainer;
            var26['style'] = var64;
            var26['children'] = var59;
            var30 = var53.bind(var4)(var32, var26);
case 58:
            var26 = new Array(11);
            var26[0] = var30;
            var59 = _closure1_slot13;
            var53 = _closure1_slot1;
            var64 = _closure1_slot2;
            var30 = 44;
            var32 = var64[var30];
            var53 = var53.bind(var4)(var32);
            var32 = {};
            var32['scrollTargetRef'] = var57;
            var67 = _closure1_slot0;
            var57 = 18;
            var65 = var64[var57];
            var65 = var67.bind(var4)(var65);
            var66 = var65.intl;
            var65 = var66.string;
            var64 = var64[var57];
            var64 = var67.bind(var4)(var64);
            var64 = var64.t;
            var64 = var64.9AjdkD;
            var64 = var65.bind(var66)(var64);
            var32['label'] = var64;
            var32['errorMessage'] = var63;
            if(!(var29 != var62)) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var61 = var62;
case 61:
            var32['value'] = var61;
            var32['onFocus'] = var48;
            var61 = function onChange(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var2 = '';
                    if(!(var2 === var1)) { _fun0004_ip = 63; continue _fun0004 }
case 64:
                    var2 = _closure2_slot0;
                    var3 = var2.globalName;
                    var2 = null;
                    var2 = var2 == var3;
                    var5 = undefined;
                    if(var2) { _fun0004_ip = 65; continue _fun0004 }
case 63:
                    var5 = var1;
case 65:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 45;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setPendingGlobalName;
                    var2 = _closure2_slot0;
                    var6 = var2.globalName;
                    var2 = undefined;
                    if(!(var5 !== var6)) { _fun0004_ip = 66; continue _fun0004 }
case 5:
                    var2 = var5;
case 66:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var32['onChange'] = var61;
            var61 = var39.toString;
            var61 = var61.bind(var39)();
            var32['placeholder'] = var61;
            var61 = _closure1_slot9;
            var32['maxLength'] = var61;
            var32['disabled'] = var37;
            var32 = var59.bind(var4)(var53, var32);
            var26[1] = var32;
            if(!var31) { _fun0003_ip = 67; continue _fun0003 }
case 68:
            var32 = var9;
            if(var32) { _fun0003_ip = 69; continue _fun0003 }
case 70:
            var32 = var13;
case 69:
            var31 = var32;
case 67:
            if(!var31) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var59 = _closure1_slot13;
            var53 = _closure1_slot1;
            var61 = _closure1_slot2;
            var32 = 46;
            var32 = var61[var32];
            var53 = var53.bind(var4)(var32);
            var32 = {};
            var32['user'] = var39;
            var32['isTryItOut'] = var13;
            var31 = var59.bind(var4)(var53, var32);
case 71:
            var26[2] = var31;
            var53 = _closure1_slot13;
            var32 = _closure1_slot1;
            var59 = _closure1_slot2;
            var31 = var59[var30];
            var32 = var32.bind(var4)(var31);
            var31 = {};
            var31['scrollTargetRef'] = var60;
            var62 = _closure1_slot0;
            var60 = var59[var57];
            var60 = var62.bind(var4)(var60);
            var61 = var60.intl;
            var60 = var61.string;
            var59 = var59[var57];
            var59 = var62.bind(var4)(var59);
            var59 = var59.t;
            var59 = var59.+T3RI/;
            var59 = var60.bind(var61)(var59);
            var31['label'] = var59;
            var31['errorMessage'] = var58;
            if(!(var29 != var56)) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var55 = var56;
case 73:
            var31['value'] = var55;
            var31['onFocus'] = var48;
            var55 = function onChange(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setNewPendingUserPronouns;
                var2 = _closure2_slot1;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var31['onChange'] = var55;
            var55 = _closure1_slot10;
            var31['maxLength'] = var55;
            var31['disabled'] = var37;
            var31 = var53.bind(var4)(var32, var31);
            var26[3] = var31;
            var32 = _closure1_slot13;
            var31 = _closure1_slot1;
            var53 = _closure1_slot2;
            var30 = var53[var30];
            var31 = var31.bind(var4)(var30);
            var30 = {};
            var30['scrollTargetRef'] = var54;
            var56 = _closure1_slot0;
            var54 = var53[var57];
            var54 = var56.bind(var4)(var54);
            var55 = var54.intl;
            var54 = var55.string;
            var53 = var53[var57];
            var53 = var56.bind(var4)(var53);
            var53 = var53.t;
            var53 = var53.NepzEw;
            var53 = var54.bind(var55)(var53);
            var30['label'] = var53;
            var30['errorMessage'] = var52;
            if(!(var29 != var51)) { _fun0003_ip = 75; continue _fun0003 }
case 76:
            var50 = var51;
case 75:
            var30['value'] = var50;
            var30['onFocus'] = var48;
            var48 = function onChange(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setNewPendingUserBio;
                var2 = _closure2_slot2;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var30['onChange'] = var48;
            var48 = _closure1_slot12;
            var48 = var48.BIO;
            var48 = var49 === var48;
            var30['autoFocus'] = var48;
            var48 = _closure1_slot8;
            var30['maxLength'] = var48;
            var48 = 5;
            var30['numberOfLines'] = var48;
            var30['multiline'] = var47;
            var30['disabled'] = var37;
            var30 = var32.bind(var4)(var31, var30);
            var26[4] = var30;
            var32 = _closure1_slot13;
            var31 = _closure1_slot1;
            var47 = _closure1_slot2;
            var30 = 47;
            var30 = var47[var30];
            var31 = var31.bind(var4)(var30);
            var30 = {};
            var30['user'] = var39;
            var48 = _closure1_slot0;
            var49 = _closure1_slot2;
            var47 = 16;
            var47 = var49[var47];
            var48 = var48.bind(var4)(var47);
            if(var13) { _fun0003_ip = 77; continue _fun0003 }
case 78:
            var47 = var48.setPendingThemeColors;
            _fun0003_ip = 79; continue _fun0003;
case 77:
            var47 = var48.setTryItOutThemeColors;
case 79:
            var30['onProfileThemeColorsChanged'] = var47;
            var30['pendingAvatarSrc'] = var46;
            if(!var13) { _fun0003_ip = 80; continue _fun0003 }
case 81:
            var44 = var45;
case 80:
            var30['pendingThemeColors'] = var44;
            var30['isTryItOut'] = var13;
            var30 = var32.bind(var4)(var31, var30);
            var26[5] = var30;
            var32 = _closure1_slot13;
            var31 = _closure1_slot1;
            var44 = _closure1_slot2;
            var30 = 48;
            var30 = var44[var30];
            var31 = var31.bind(var4)(var30);
            var30 = {};
            var30['user'] = var39;
            if(!var13) { _fun0003_ip = 82; continue _fun0003 }
case 83:
            var42 = var43;
case 82:
            var30['pendingAvatarDecoration'] = var42;
            var30['isTryItOut'] = var13;
            var30 = var32.bind(var4)(var31, var30);
            var26[6] = var30;
            var32 = _closure1_slot13;
            var31 = _closure1_slot1;
            var42 = _closure1_slot2;
            var30 = 49;
            var30 = var42[var30];
            var31 = var31.bind(var4)(var30);
            var30 = {};
            var30['user'] = var39;
            if(!var13) { _fun0003_ip = 84; continue _fun0003 }
case 85:
            var40 = var41;
case 84:
            var30['pendingProfileEffect'] = var40;
            var30['displayProfile'] = var34;
            var30['isTryItOut'] = var13;
            var30 = var32.bind(var4)(var31, var30);
            var26[7] = var30;
            var32 = _closure1_slot13;
            var34 = _closure1_slot1;
            var40 = _closure1_slot2;
            var30 = 50;
            var30 = var40[var30];
            var31 = var34.bind(var4)(var30);
            var30 = {};
            var30['user'] = var39;
            var30['pendingNameplate'] = var35;
            var30 = var32.bind(var4)(var31, var30);
            var26[8] = var30;
            var32 = _closure1_slot13;
            var31 = _closure1_slot5;
            var30 = {};
            var33 = function ref(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0005_ip = 65; continue _fun0005 }
case 86:
                    var1 = _closure2_slot3;
                    var2 = var1.current;
                    var1 = _closure1_slot11;
                    var1 = var1.GUILD_TAG;
                    var2[var1] = var3;
case 65:
                    var1 = undefined;
                    return var1;
                }
            };
            var30['ref'] = var33;
            var35 = _closure1_slot13;
            var33 = 51;
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
            var30['children'] = var33;
            var30 = var32.bind(var4)(var31, var30);
            var26[9] = var30;
            var27 = var29 != var27;
            if(!var27) { _fun0003_ip = 87; continue _fun0003 }
case 88:
            var27 = var28;
case 87:
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
            if(!var9) { _fun0003_ip = 89; continue _fun0003 }
case 90:
            var9 = !var11;
case 89:
            if(!var9) { _fun0003_ip = 91; continue _fun0003 }
case 92:
            var12 = _closure1_slot13;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 52;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.UserProfilePremiumUpsellCard;
            var10 = {};
            var10['isTryItOut'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 91:
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
// app/modules/user_profile/native/UserProfilePreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
    var _closure1_slot7 = var7;
    var4 = var4.UserProfileThemeTypes;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg2;
            var4 = arg3;
            var1 = {};
            var2 = {'position': 'relative', 'width': '100%'};
            var3 = null;
            var6 = var3 != var4;
            var3 = 263;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4;
case 2:
            var2['maxWidth'] = var3;
            var1['profileContainer'] = var2;
            var2 = {};
            var3 = 'hidden';
            var2['overflow'] = var3;
            var3 = 350;
            var4 = arg1;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = undefined;
case 4:
            var2['minHeight'] = var3;
            var3 = 1;
            var4 = var3;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = undefined;
case 6:
            var2['borderWidth'] = var4;
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var7 = 7;
            var8 = var6[var7];
            var6 = undefined;
            var8 = var9.bind(var6)(var8);
            var8 = var8.colors;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var8.BACKGROUND_SURFACE_HIGH;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var5 = var8.BORDER_MUTED;
case 10:
            var2['borderColor'] = var5;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.lg;
            var2['borderRadius'] = var8;
            var1['profileContentContainer'] = var2;
            var2 = {};
            var2['flexGrow'] = var3;
            var1['profileInnerContent'] = var2;
            var2 = {};
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_12;
            var2['marginTop'] = var4;
            var1['aboutMeCard'] = var2;
            var2 = {};
            var2['zIndex'] = var3;
            var1['profileEffect'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfilePreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfilePreview(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var35 = var5.user;
            var7 = var5.accessibilityLabel;
            var41 = var5.displayName;
            var36 = var5.guildId;
            var _closure2_slot0 = var36;
            var11 = var5.profileEffectOverride;
            var6 = var5.profileFrameOverride;
            var2 = var5.displayNameStylesOverride;
            var9 = var5.style;
            var27 = var5.compact;
            var4 = undefined;
            if(!(var27 === var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var27 = false;
case 11:
            var3 = var5.hideFrame;
            if(!(var3 === var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var3 = false;
case 13:
            var23 = var5.maxWidth;
            var13 = var5.additionalBadges;
            if(!(var13 === var4)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var13 = new Array(0);
case 15:
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var5 = 8;
            var5 = var19[var5];
            var12 = var18.bind(var4)(var5);
            var10 = var12.useStateFromStoresObject;
            var5 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getPendingChanges;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var10.bind(var12)(var8, var5);
            var14 = var5.pendingAvatar;
            var21 = var5.pendingBanner;
            var24 = var5.pendingAccentColor;
            var22 = var5.pendingThemeColors;
            var48 = var5.pendingAvatarDecoration;
            var17 = var5.pendingProfileEffect;
            var12 = var5.pendingProfileFrame;
            var37 = var5.pendingDisplayNameStyles;
            var40 = var5.pendingGlobalName;
            var39 = var5.pendingPronouns;
            var8 = var5.pendingLegacyUsernameDisabled;
            var20 = _closure1_slot1;
            var5 = 9;
            var5 = var19[var5];
            var10 = var20.bind(var4)(var5);
            var5 = var35.id;
            var33 = var10.bind(var4)(var5, var36);
            var5 = 10;
            var5 = var19[var5];
            var10 = var20.bind(var4)(var5);
            var5 = {};
            var5['user'] = var35;
            var5['displayProfile'] = var33;
            var5['pendingThemeColors'] = var22;
            var10 = var10.bind(var4)(var5);
            var5 = var10.theme;
            var29 = var10.primaryColor;
            var26 = var10.secondaryColor;
            var10 = null;
            var42 = var10 != var29;
            var16 = _closure1_slot11;
            var23 = var16.bind(var4)(var27, var42, var23);
            var16 = 11;
            var16 = var19[var16];
            var16 = var20.bind(var4)(var16);
            var32 = var16.bind(var4)();
            var16 = 12;
            var16 = var19[var16];
            var18 = var18.bind(var4)(var16);
            var16 = var18.useCustomStatusActivity;
            var43 = var16.bind(var18)();
            var28 = var10 != var43;
            if(!var28) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var28 = !var27;
case 17:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var16 = 13;
            var16 = var19[var16];
            var19 = var18.bind(var4)(var16);
            var18 = var19.useUserProfileColors;
            var16 = {};
            var16['theme'] = var5;
            var16['primaryColor'] = var29;
            var16['secondaryColor'] = var26;
            var16 = var18.bind(var19)(var16);
            var30 = var16.gradientFallbackBackground;
            var47 = var16.avatarBackground;
            var34 = var16.containerBackground;
            if(!(var4 !== var11)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var17 = var11;
case 19:
            if(!(var4 !== var6)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var12 = var6;
case 21:
            if(!(var4 !== var2)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var37 = var2;
case 23:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = 14;
            var2 = var2[var11];
            var16 = var6.bind(var4)(var2);
            var6 = var16.getProfilePreviewValue;
            var2 = {};
            var2['pendingValue'] = var17;
            var18 = var10 == var33;
            var17 = undefined;
            if(var18) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var17 = var33.profileEffect;
case 25:
            var2['userValue'] = var17;
            var18 = var10 == var33;
            var17 = undefined;
            if(var18) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var18 = var33._guildMemberProfile;
            var19 = var10 == var18;
            var17 = undefined;
            if(var19) { _fun0002_ip = 27; continue _fun0002 }
case 29:
            var17 = var18.profileEffect;
case 27:
            var2['guildValue'] = var17;
            var2['guildId'] = var36;
            var19 = var6.bind(var16)(var2);
            var2 = undefined;
            if(var3) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var11 = var6.bind(var4)(var3);
            var6 = var11.getProfilePreviewValue;
            var3 = {};
            var3['pendingValue'] = var12;
            var16 = var10 == var33;
            var12 = undefined;
            if(var16) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var12 = var33.profileFrame;
case 32:
            var3['userValue'] = var12;
            var16 = var10 == var33;
            var12 = undefined;
            if(var16) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var16 = var33._guildMemberProfile;
            var17 = var10 == var16;
            var12 = undefined;
            if(var17) { _fun0002_ip = 34; continue _fun0002 }
case 36:
            var12 = var16.profileFrame;
case 34:
            var3['guildValue'] = var12;
            var3['guildId'] = var36;
            var2 = var6.bind(var11)(var3);
case 30:
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 15;
            var3 = var11[var3];
            var6 = var6.bind(var4)(var3);
            var11 = var10 == var2;
            var3 = undefined;
            if(var11) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var3 = var2.skuId;
case 37:
            var2 = 'UserProfilePreview';
            var16 = var6.bind(var4)(var3, var2);
            _closure2_slot1 = var16;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 16;
            var3 = var6[var3];
            var12 = var2.bind(var4)(var3);
            var11 = var12.getPendingAvatarSrc;
            var3 = {};
            var17 = var35.id;
            var3['userId'] = var17;
            var3['image'] = var14;
            var49 = var11.bind(var12)(var3);
            var11 = _closure1_slot1;
            var3 = 17;
            var3 = var6[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.bind(var4)(var33, var8);
            var8 = global;
            var12 = var8.Set;
            var11 = var3.map;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var53 = var11.bind(var3)(var8);
            var11 = var12.prototype;
            var11 = Object.create(var11, {constructor: {value: var12}});
            var54 = var11;
            var8 = new var54[var12](var53, var52);
            var8 = var8 instanceof Object ? var8 : var11;
            _closure2_slot2 = var8;
            var38 = new Array(0);
            var8 = 0;
            var53 = var38;
            var52 = var3;
            var51 = 0;
            var51 = arraySpread(var53, var52, var51);
            var12 = var13.filter;
            var3 = function(arg1) {
                var3 = _closure2_slot2;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var52 = var12.bind(var13)(var3);
            var53 = var38;
            var3 = arraySpread(var53, var52, var51);
            var11 = _closure1_slot4;
            var12 = var11.useState;
            var3 = {'width': 0, 'height': 0};
            var13 = var12.bind(var11)(var3);
            var12 = _closure1_slot3;
            var3 = 2;
            var3 = var12.bind(var4)(var13, var3);
            var14 = var3[var8];
            _closure2_slot3 = var14;
            var31 = 1;
            var3 = var3[var31];
            _closure2_slot4 = var3;
            var12 = var11.useCallback;
            var8 = function(arg1) {
                var1 = arg1;
                var3 = _closure2_slot4;
                var2 = {};
                var4 = global;
                var7 = var4.Math;
                var6 = var7.floor;
                var5 = var1.nativeEvent;
                var5 = var5.layout;
                var5 = var5.width;
                var5 = var6.bind(var7)(var5);
                var2['width'] = var5;
                var5 = var4.Math;
                var4 = var5.floor;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.height;
                var1 = var4.bind(var5)(var1);
                var2['height'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = new Array(0);
            var17 = var12.bind(var11)(var8, var3);
            var8 = var11.useMemo;
            var3 = new Array(2);
            var3[0] = var16;
            var12 = var14.width;
            var3[1] = var12;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                    var1 = undefined;
                    return var1;
case 39:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 18;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = _closure2_slot3;
                    var1 = var1.width;
                    var1 = var2.bind(var3)(var1);
                    var8 = var1.overflowTop;
                    var4 = var1.overflowBottom;
                    var2 = var1.overflowHorizontal;
                    var1 = {};
                    var3 = _closure2_slot1;
                    var9 = var3.layers;
                    var7 = var9.some;
                    var3 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var2 = arg1;
                            var3 = var2.type;
                            var1 = 'staple';
                            var1 = var1 === var3;
                            if(!var1) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                            var3 = var2.anchor;
                            var2 = 'top';
                            var1 = var2 === var3;
case 41:
                            return var1;
                        }
                    };
                    var9 = var7.bind(var9)(var3);
                    var7 = 0;
                    if(!var9) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                    var7 = var8;
case 43:
                    var1['marginTop'] = var7;
                    var6 = _closure2_slot1;
                    var7 = var6.layers;
                    var6 = var7.some;
                    var5 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = arg1;
                            var3 = var2.type;
                            var1 = 'staple';
                            var1 = var1 === var3;
                            if(!var1) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                            var3 = var2.anchor;
                            var2 = 'bottom';
                            var1 = var2 === var3;
case 41:
                            return var1;
                        }
                    };
                    var5 = var6.bind(var7)(var5);
                    var3 = 0;
                    if(!var5) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                    var3 = var4;
case 45:
                    var1['marginBottom'] = var3;
                    var1['marginHorizontal'] = var2;
                    return var1;
                }
            };
            var11 = var8.bind(var11)(var1, var3);
            var3 = _closure1_slot9;
            var1 = 19;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var1['theme'] = var5;
            var1['primaryColor'] = var29;
            var1['secondaryColor'] = var26;
            var6 = _closure1_slot5;
            var5 = {'style': null, 'pointerEvents': 'none', 'accessibilityLabel': null, 'accessibilityRole': 'image', 'accessible': true};
            var12 = var23.profileContainer;
            var8 = new Array(3);
            var8[0] = var12;
            var8[1] = var11;
            var8[2] = var9;
            var5['style'] = var8;
            var5['accessibilityLabel'] = var7;
            var46 = true;
            var8 = _closure1_slot10;
            var7 = {'importantForAccessibility': 'no-hide-descendants', 'accessibilityElementsHidden': true};
            var9 = {};
            var9['flexShrink'] = var31;
            var7['style'] = var9;
            var11 = var10 != var16;
            if(!var11) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var13 = _closure1_slot9;
            var12 = _closure1_slot1;
            var25 = _closure1_slot2;
            var9 = 20;
            var9 = var25[var9];
            var12 = var12.bind(var4)(var9);
            var9 = {};
            var9['frame'] = var16;
            var18 = _closure1_slot8;
            var18 = var18.PREVIEW;
            var9['profileThemeType'] = var18;
            var20 = _closure1_slot0;
            var18 = 21;
            var18 = var25[var18];
            var18 = var20.bind(var4)(var18);
            var18 = var18.ProfileFrameLayerOrder;
            var18 = var18.BACK;
            var9['frameOrder'] = var18;
            var18 = var14.width;
            var9['containerWidth'] = var18;
            var18 = var14.height;
            var9['containerHeight'] = var18;
            var11 = var13.bind(var4)(var12, var9);
case 47:
            var9 = new Array(3);
            var9[0] = var11;
            var13 = _closure1_slot10;
            var12 = _closure1_slot5;
            var11 = {};
            var11['onLayout'] = var17;
            var17 = var23.profileContentContainer;
            var11['style'] = var17;
            var20 = _closure1_slot9;
            var18 = _closure1_slot1;
            var45 = _closure1_slot2;
            var17 = 22;
            var17 = var45[var17];
            var18 = var18.bind(var4)(var17);
            var17 = {};
            var17['user'] = var35;
            var17['displayProfile'] = var33;
            var44 = _closure1_slot0;
            var25 = 23;
            var25 = var45[var25];
            var25 = var44.bind(var4)(var25);
            var25 = var25.PFX_MOBILE_ACTION_SHEET_BANNER_HEIGHT;
            var17['bannerHeight'] = var25;
            var17['pendingBanner'] = var21;
            var17['pendingAvatarSrc'] = var49;
            var25 = var10 != var24;
            var21 = undefined;
            if(!var25) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var21 = var24;
case 49:
            var17['pendingAccentColor'] = var21;
            var24 = var10 != var22;
            var21 = undefined;
            if(!var24) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var21 = var22;
case 51:
            var17['pendingThemeColors'] = var21;
            var17['disableInteraction'] = var46;
            var18 = var20.bind(var4)(var18, var17);
            var17 = new Array(3);
            var17[0] = var18;
            var21 = _closure1_slot10;
            var20 = _closure1_slot5;
            var18 = {};
            var22 = var23.profileInnerContent;
            var18['style'] = var22;
            var45 = _closure1_slot9;
            var25 = _closure1_slot1;
            var44 = _closure1_slot2;
            var22 = 24;
            var22 = var44[var22];
            var24 = var25.bind(var4)(var22);
            var22 = {};
            var22['user'] = var35;
            var22['guildId'] = var36;
            var22['pendingAvatarSrc'] = var49;
            var22['pendingAvatarDecoration'] = var48;
            var22['backgroundColor'] = var47;
            var22['disableStatus'] = var46;
            var24 = var45.bind(var4)(var24, var22);
            var22 = new Array(2);
            var22[0] = var24;
            var24 = 25;
            var24 = var44[var24];
            var25 = var25.bind(var4)(var24);
            var24 = {};
            var24['fallbackBackground'] = var30;
            var24['primaryColor'] = var29;
            var24['secondaryColor'] = var26;
            var29 = var32.profileContentWrapper;
            var26 = new Array(3);
            var26[0] = var29;
            var29 = var32.profileContent;
            var26[1] = var29;
            var29 = !var28;
            if(var28) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var30 = {};
            var44 = _closure1_slot7;
            var30['paddingTop'] = var44;
            var29 = var30;
case 53:
            var26[2] = var29;
            var24['containerStyle'] = var26;
            if(!var28) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var30 = _closure1_slot9;
            var29 = _closure1_slot1;
            var44 = _closure1_slot2;
            var26 = 26;
            var26 = var44[var26];
            var29 = var29.bind(var4)(var26);
            var26 = {};
            var26['customStatusActivity'] = var43;
            var43 = _closure1_slot8;
            var43 = var43.PREVIEW;
            var26['themeType'] = var43;
            var26['hasCustomProfileTheme'] = var42;
            var42 = var32.customStatusBubble;
            var26['style'] = var42;
            var42 = var32.emojiOnlyCustomStatusBubble;
            var26['emojiOnlyStyle'] = var42;
            var28 = var30.bind(var4)(var29, var26);
case 55:
            var26 = new Array(3);
            var26[0] = var28;
            var30 = _closure1_slot9;
            var29 = _closure1_slot1;
            var42 = _closure1_slot2;
            var28 = 27;
            var28 = var42[var28];
            var29 = var29.bind(var4)(var28);
            var28 = {};
            var28['user'] = var35;
            var42 = _closure1_slot8;
            var42 = var42.PREVIEW;
            var28['themeType'] = var42;
            if(!(var10 != var41)) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            var40 = var41;
case 57:
            var28['displayName'] = var40;
            if(!(var10 == var39)) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var41 = var10 == var33;
            var40 = undefined;
            if(var41) { _fun0002_ip = 61; continue _fun0002 }
case 62:
            var40 = var33.pronouns;
case 61:
            var39 = var40;
case 59:
            var28['pronouns'] = var39;
            var28['badges'] = var38;
            var28['badgeContainerBackground'] = var34;
            var38 = false;
            var28['showBadgeToastOnPress'] = var38;
            var28['pendingDisplayNameStyles'] = var37;
            var28['guildId'] = var36;
            var28 = var30.bind(var4)(var29, var28);
            var26[1] = var28;
            var27 = !var27;
            if(!var27) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var30 = _closure1_slot9;
            var29 = _closure1_slot1;
            var36 = _closure1_slot2;
            var28 = 28;
            var28 = var36[var28];
            var29 = var29.bind(var4)(var28);
            var28 = {};
            var35 = var35.id;
            var28['userId'] = var35;
            var28['displayProfile'] = var33;
            var33 = _closure1_slot8;
            var33 = var33.PREVIEW;
            var28['themeType'] = var33;
            var33 = var32.card;
            var32 = new Array(3);
            var32[0] = var33;
            var33 = var23.aboutMeCard;
            var32[1] = var33;
            var33 = {};
            var33['backgroundColor'] = var34;
            var32[2] = var33;
            var28['style'] = var32;
            var28['bioLineClamp'] = var31;
            var27 = var30.bind(var4)(var29, var28);
case 63:
            var26[2] = var27;
            var24['children'] = var26;
            var24 = var21.bind(var4)(var25, var24);
            var22[1] = var24;
            var18['children'] = var22;
            var18 = var21.bind(var4)(var20, var18);
            var17[1] = var18;
            var18 = var10 != var19;
            if(!var18) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var22 = _closure1_slot9;
            var21 = _closure1_slot1;
            var24 = _closure1_slot2;
            var20 = 29;
            var20 = var24[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var24 = var19.skuId;
            var20['skuId'] = var24;
            var23 = var23.profileEffect;
            var20['style'] = var23;
            var19 = var19.skuId;
            var18 = var22.bind(var4)(var21, var20, var19);
case 65:
            var17[2] = var18;
            var11['children'] = var17;
            var11 = var13.bind(var4)(var12, var11);
            var9[1] = var11;
            var10 = var10 != var16;
            if(!var10) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var13 = _closure1_slot9;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 20;
            var11 = var17[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['frame'] = var16;
            var16 = _closure1_slot8;
            var16 = var16.PREVIEW;
            var11['profileThemeType'] = var16;
            var16 = _closure1_slot0;
            var15 = 21;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.ProfileFrameLayerOrder;
            var15 = var15.FRONT;
            var11['frameOrder'] = var15;
            var15 = var14.width;
            var11['containerWidth'] = var15;
            var14 = var14.height;
            var11['containerHeight'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 67:
            var9[2] = var10;
            var7['children'] = var9;
            var7 = var8.bind(var4)(var6, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
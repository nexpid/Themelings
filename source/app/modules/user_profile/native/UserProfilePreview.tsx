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
    var4 = function filterLayer(arg1) {
        var1 = arg1;
        var2 = var1.responsive;
        var1 = true;
        var1 = var1 !== var2;
        return var1;
    };
    var _closure1_slot11 = var4;
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
            var4 = var4.space;
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
    var _closure1_slot12 = var4;
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
            var37 = var5.user;
            var7 = var5.accessibilityLabel;
            var43 = var5.displayName;
            var38 = var5.guildId;
            var _closure2_slot0 = var38;
            var11 = var5.profileEffectOverride;
            var27 = var5.profileEffectRestartKey;
            var6 = var5.profileFrameOverride;
            var2 = var5.displayNameStylesOverride;
            var9 = var5.style;
            var29 = var5.compact;
            var4 = undefined;
            if(!(var29 === var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var29 = false;
case 11:
            var3 = var5.hideFrame;
            if(!(var3 === var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var3 = false;
case 13:
            var19 = var5.maxWidth;
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
            var20 = _closure1_slot2;
            var5 = 8;
            var5 = var20[var5];
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
            var25 = var5.pendingAccentColor;
            var22 = var5.pendingThemeColors;
            var50 = var5.pendingAvatarDecoration;
            var17 = var5.pendingProfileEffect;
            var12 = var5.pendingProfileFrame;
            var39 = var5.pendingDisplayNameStyles;
            var42 = var5.pendingGlobalName;
            var41 = var5.pendingPronouns;
            var8 = var5.pendingLegacyUsernameDisabled;
            var23 = _closure1_slot1;
            var5 = 9;
            var5 = var20[var5];
            var10 = var23.bind(var4)(var5);
            var5 = var37.id;
            var35 = var10.bind(var4)(var5, var38);
            var5 = 10;
            var5 = var20[var5];
            var10 = var23.bind(var4)(var5);
            var5 = {};
            var5['user'] = var37;
            var5['displayProfile'] = var35;
            var5['pendingThemeColors'] = var22;
            var10 = var10.bind(var4)(var5);
            var5 = var10.theme;
            var31 = var10.primaryColor;
            var28 = var10.secondaryColor;
            var10 = null;
            var44 = var10 != var31;
            var16 = _closure1_slot12;
            var19 = var16.bind(var4)(var29, var44, var19);
            var16 = 11;
            var16 = var20[var16];
            var16 = var23.bind(var4)(var16);
            var34 = var16.bind(var4)();
            var16 = 12;
            var16 = var20[var16];
            var18 = var18.bind(var4)(var16);
            var16 = var18.useCustomStatusActivity;
            var45 = var16.bind(var18)();
            var30 = var10 != var45;
            if(!var30) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var30 = !var29;
case 17:
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 13;
            var16 = var20[var16];
            var20 = var18.bind(var4)(var16);
            var18 = var20.useUserProfileColors;
            var16 = {};
            var16['theme'] = var5;
            var16['primaryColor'] = var31;
            var16['secondaryColor'] = var28;
            var16 = var18.bind(var20)(var16);
            var32 = var16.gradientFallbackBackground;
            var49 = var16.avatarBackground;
            var36 = var16.containerBackground;
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
            var39 = var2;
case 23:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = 14;
            var2 = var2[var11];
            var16 = var6.bind(var4)(var2);
            var6 = var16.getProfilePreviewValue;
            var2 = {};
            var2['pendingValue'] = var17;
            var18 = var10 == var35;
            var17 = undefined;
            if(var18) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var17 = var35.profileEffect;
case 25:
            var2['userValue'] = var17;
            var18 = var10 == var35;
            var17 = undefined;
            if(var18) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var18 = var35._guildMemberProfile;
            var20 = var10 == var18;
            var17 = undefined;
            if(var20) { _fun0002_ip = 27; continue _fun0002 }
case 29:
            var17 = var18.profileEffect;
case 27:
            var2['guildValue'] = var17;
            var2['guildId'] = var38;
            var24 = var6.bind(var16)(var2);
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
            var16 = var10 == var35;
            var12 = undefined;
            if(var16) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var12 = var35.profileFrame;
case 32:
            var3['userValue'] = var12;
            var16 = var10 == var35;
            var12 = undefined;
            if(var16) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var16 = var35._guildMemberProfile;
            var17 = var10 == var16;
            var12 = undefined;
            if(var17) { _fun0002_ip = 34; continue _fun0002 }
case 36:
            var12 = var16.profileFrame;
case 34:
            var3['guildValue'] = var12;
            var3['guildId'] = var38;
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
            var17 = var37.id;
            var3['userId'] = var17;
            var3['image'] = var14;
            var51 = var11.bind(var12)(var3);
            var11 = _closure1_slot1;
            var3 = 17;
            var3 = var6[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.bind(var4)(var35, var8);
            var23 = global;
            var12 = var23.Set;
            var11 = var3.map;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var55 = var11.bind(var3)(var8);
            var11 = var12.prototype;
            var11 = Object.create(var11, {constructor: {value: var12}});
            var56 = var11;
            var8 = new var56[var12](var55, var54);
            var8 = var8 instanceof Object ? var8 : var11;
            _closure2_slot2 = var8;
            var40 = new Array(0);
            var8 = 0;
            var55 = var40;
            var54 = var3;
            var53 = 0;
            var53 = arraySpread(var55, var54, var53);
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
            var54 = var12.bind(var13)(var3);
            var55 = var40;
            var3 = arraySpread(var55, var54, var53);
            var11 = _closure1_slot4;
            var12 = var11.useState;
            var3 = {'width': 0, 'height': 0};
            var13 = var12.bind(var11)(var3);
            var12 = _closure1_slot3;
            var3 = 2;
            var3 = var12.bind(var4)(var13, var3);
            var14 = var3[var8];
            _closure2_slot3 = var14;
            var33 = 1;
            var3 = var3[var33];
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
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot3;
                    var1 = var1.width;
                    var1 = var3.bind(var4)(var2, var1);
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
            var1['primaryColor'] = var31;
            var1['secondaryColor'] = var28;
            var6 = _closure1_slot5;
            var5 = {'style': null, 'pointerEvents': 'none', 'accessibilityLabel': null, 'accessibilityRole': 'image', 'accessible': true};
            var12 = var19.profileContainer;
            var8 = new Array(3);
            var8[0] = var12;
            var8[1] = var11;
            var8[2] = var9;
            var5['style'] = var8;
            var5['accessibilityLabel'] = var7;
            var48 = true;
            var8 = _closure1_slot10;
            var7 = {'importantForAccessibility': 'no-hide-descendants', 'accessibilityElementsHidden': true};
            var9 = {};
            var9['flexShrink'] = var33;
            var7['style'] = var9;
            var11 = var10 != var16;
            if(!var11) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var13 = _closure1_slot9;
            var12 = _closure1_slot1;
            var26 = _closure1_slot2;
            var9 = 20;
            var9 = var26[var9];
            var12 = var12.bind(var4)(var9);
            var9 = {};
            var9['frame'] = var16;
            var18 = _closure1_slot11;
            var9['filterLayer'] = var18;
            var18 = _closure1_slot8;
            var18 = var18.PREVIEW;
            var9['profileThemeType'] = var18;
            var20 = _closure1_slot0;
            var18 = 21;
            var18 = var26[var18];
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
            var17 = var19.profileContentContainer;
            var11['style'] = var17;
            var20 = _closure1_slot9;
            var18 = _closure1_slot1;
            var47 = _closure1_slot2;
            var17 = 22;
            var17 = var47[var17];
            var18 = var18.bind(var4)(var17);
            var17 = {};
            var17['user'] = var37;
            var17['displayProfile'] = var35;
            var46 = _closure1_slot0;
            var26 = 23;
            var26 = var47[var26];
            var26 = var46.bind(var4)(var26);
            var26 = var26.PFX_MOBILE_ACTION_SHEET_BANNER_HEIGHT;
            var17['bannerHeight'] = var26;
            var17['pendingBanner'] = var21;
            var17['pendingAvatarSrc'] = var51;
            var26 = var10 != var25;
            var21 = undefined;
            if(!var26) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var21 = var25;
case 49:
            var17['pendingAccentColor'] = var21;
            var25 = var10 != var22;
            var21 = undefined;
            if(!var25) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var21 = var22;
case 51:
            var17['pendingThemeColors'] = var21;
            var17['disableInteraction'] = var48;
            var18 = var20.bind(var4)(var18, var17);
            var17 = new Array(3);
            var17[0] = var18;
            var21 = _closure1_slot10;
            var20 = _closure1_slot5;
            var18 = {};
            var22 = var19.profileInnerContent;
            var18['style'] = var22;
            var47 = _closure1_slot9;
            var26 = _closure1_slot1;
            var46 = _closure1_slot2;
            var22 = 24;
            var22 = var46[var22];
            var25 = var26.bind(var4)(var22);
            var22 = {};
            var22['user'] = var37;
            var22['guildId'] = var38;
            var22['pendingAvatarSrc'] = var51;
            var22['pendingAvatarDecoration'] = var50;
            var22['backgroundColor'] = var49;
            var22['disableStatus'] = var48;
            var25 = var47.bind(var4)(var25, var22);
            var22 = new Array(2);
            var22[0] = var25;
            var25 = 25;
            var25 = var46[var25];
            var26 = var26.bind(var4)(var25);
            var25 = {};
            var25['fallbackBackground'] = var32;
            var25['primaryColor'] = var31;
            var25['secondaryColor'] = var28;
            var31 = var34.profileContentWrapper;
            var28 = new Array(3);
            var28[0] = var31;
            var31 = var34.profileContent;
            var28[1] = var31;
            var31 = !var30;
            if(var30) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var32 = {};
            var46 = _closure1_slot7;
            var32['paddingTop'] = var46;
            var31 = var32;
case 53:
            var28[2] = var31;
            var25['containerStyle'] = var28;
            if(!var30) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var32 = _closure1_slot9;
            var31 = _closure1_slot1;
            var46 = _closure1_slot2;
            var28 = 26;
            var28 = var46[var28];
            var31 = var31.bind(var4)(var28);
            var28 = {};
            var28['customStatusActivity'] = var45;
            var45 = _closure1_slot8;
            var45 = var45.PREVIEW;
            var28['themeType'] = var45;
            var28['hasCustomProfileTheme'] = var44;
            var44 = var34.customStatusBubble;
            var28['style'] = var44;
            var44 = var34.emojiOnlyCustomStatusBubble;
            var28['emojiOnlyStyle'] = var44;
            var30 = var32.bind(var4)(var31, var28);
case 55:
            var28 = new Array(3);
            var28[0] = var30;
            var32 = _closure1_slot9;
            var31 = _closure1_slot1;
            var44 = _closure1_slot2;
            var30 = 27;
            var30 = var44[var30];
            var31 = var31.bind(var4)(var30);
            var30 = {};
            var30['user'] = var37;
            var44 = _closure1_slot8;
            var44 = var44.PREVIEW;
            var30['themeType'] = var44;
            if(!(var10 != var43)) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            var42 = var43;
case 57:
            var30['displayName'] = var42;
            if(!(var10 == var41)) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var43 = var10 == var35;
            var42 = undefined;
            if(var43) { _fun0002_ip = 61; continue _fun0002 }
case 62:
            var42 = var35.pronouns;
case 61:
            var41 = var42;
case 59:
            var30['pronouns'] = var41;
            var30['badges'] = var40;
            var30['badgeContainerBackground'] = var36;
            var40 = false;
            var30['showBadgeToastOnPress'] = var40;
            var30['pendingDisplayNameStyles'] = var39;
            var30['guildId'] = var38;
            var30 = var32.bind(var4)(var31, var30);
            var28[1] = var30;
            var29 = !var29;
            if(!var29) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var32 = _closure1_slot9;
            var31 = _closure1_slot1;
            var38 = _closure1_slot2;
            var30 = 28;
            var30 = var38[var30];
            var31 = var31.bind(var4)(var30);
            var30 = {};
            var37 = var37.id;
            var30['userId'] = var37;
            var30['displayProfile'] = var35;
            var35 = _closure1_slot8;
            var35 = var35.PREVIEW;
            var30['themeType'] = var35;
            var35 = var34.card;
            var34 = new Array(3);
            var34[0] = var35;
            var35 = var19.aboutMeCard;
            var34[1] = var35;
            var35 = {};
            var35['backgroundColor'] = var36;
            var34[2] = var35;
            var30['style'] = var34;
            var30['bioLineClamp'] = var33;
            var29 = var32.bind(var4)(var31, var30);
case 63:
            var28[2] = var29;
            var25['children'] = var28;
            var25 = var21.bind(var4)(var26, var25);
            var22[1] = var25;
            var18['children'] = var22;
            var18 = var21.bind(var4)(var20, var18);
            var17[1] = var18;
            var18 = var10 != var24;
            if(!var18) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var22 = _closure1_slot9;
            var21 = _closure1_slot1;
            var25 = _closure1_slot2;
            var20 = 29;
            var20 = var25[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var25 = var24.skuId;
            var20['skuId'] = var25;
            var19 = var19.profileEffect;
            var20['style'] = var19;
            if(!(var10 == var27)) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var19 = var24.skuId;
            _fun0002_ip = 69; continue _fun0002;
case 67:
            var26 = var24.skuId;
            var23 = var23.HermesInternal;
            var25 = var23.concat;
            var24 = '';
            var23 = '-';
            var19 = var25.bind(var24)(var26, var23, var27);
case 69:
            var18 = var22.bind(var4)(var21, var20, var19);
case 65:
            var17[2] = var18;
            var11['children'] = var17;
            var11 = var13.bind(var4)(var12, var11);
            var9[1] = var11;
            var10 = var10 != var16;
            if(!var10) { _fun0002_ip = 70; continue _fun0002 }
case 71:
            var13 = _closure1_slot9;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 20;
            var11 = var17[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['frame'] = var16;
            var16 = _closure1_slot11;
            var11['filterLayer'] = var16;
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
case 70:
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
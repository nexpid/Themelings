// app/modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var2 = function useHasSettingsBadge() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 9;
            var1 = var8[var1];
            var6 = undefined;
            var3 = var7.bind(var6)(var1);
            var1 = var3.useUnseenOutboundPromotions;
            var1 = var1.bind(var3)();
            var3 = var1.length;
            var1 = 0;
            var1 = var3 > var1;
            var3 = 10;
            var3 = var8[var3];
            var4 = var7.bind(var6)(var3);
            var3 = var4.useTrialOffer;
            var2 = _closure1_slot8;
            var3 = var3.bind(var4)(var2);
            var2 = null;
            var3 = var2 != var3;
            var2 = 11;
            var2 = var8[var2];
            var5 = var7.bind(var6)(var2);
            var4 = var5.UNSAFE_useIsDismissibleContentDismissed;
            var2 = 12;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.TRIAL_FOR_ALL_2026_SETTINGS_BADGE;
            var2 = var4.bind(var5)(var2);
            var2 = !var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot13 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.View;
    var _closure1_slot4 = var9;
    var9 = var5.ActivityIndicator;
    var _closure1_slot5 = var9;
    var5 = var5.StyleSheet;
    var _closure1_slot6 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ContentDismissActionType;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot9 = var9;
    var9 = var5.jsxs;
    var _closure1_slot10 = var9;
    var5 = var5.Fragment;
    var _closure1_slot11 = var5;
    var5 = 5;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = function(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var9 = arg3;
            var1 = {};
            var2 = {};
            var4 = _closure1_slot6;
            var12 = var4.absoluteFillObject;
            var13 = var2;
            var5 = copyDataProperties(var13, var12);
            var6 = 10;
            var5 = 'zIndex';
            var2[4] = var6;
            var5 = 'paddingTop';
            var2[4] = var7;
            var1['container'] = var2;
            var2 = {};
            var12 = var4.absoluteFillObject;
            var13 = var2;
            var5 = copyDataProperties(var13, var12);
            var5 = undefined;
            var6 = 'top';
            var2[5] = var5;
            var8 = 'center';
            var6 = 'alignItems';
            var2[5] = var8;
            var1['containerFloatingWrap'] = var2;
            var2 = {};
            var12 = var4.absoluteFillObject;
            var13 = var2;
            var4 = copyDataProperties(var13, var12);
            var4 = null;
            if(!(var4 == var9)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 7;
            var6 = var10[var6];
            var6 = var8.bind(var5)(var6);
            var6 = var6.colors;
            var8 = var6.BACKGROUND_BASE_LOW;
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 6;
            var6 = var11[var6];
            var6 = var10.bind(var5)(var6);
            var11 = var6.bind(var5)(var9);
            var10 = var11.darken;
            var6 = 0.2;
            var10 = var10.bind(var11)(var6);
            var6 = var10.hex;
            var8 = var6.bind(var10)();
case 8:
            var6 = 'color';
            var2[5] = var8;
            var1['containerFloatingGradient'] = var2;
            var2 = {};
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 8;
            var6 = var10[var6];
            var8 = var8.bind(var5)(var6);
            var6 = var8.isIOS;
            var8 = var6.bind(var8)();
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 7;
            var10 = var10[var6];
            var10 = var11.bind(var5)(var10);
            var10 = var10.spacing;
            if(var8) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var11 = var10.PX_4;
            var8 = arg2;
            var8 = var11 + var8;
            _fun0002_ip = 11; continue _fun0002;
case 9:
            var8 = var10.PX_24;
case 11:
            var2['marginBottom'] = var8;
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var11 = var8[var6];
            var11 = var10.bind(var5)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_8;
            var2['paddingVertical'] = var11;
            var11 = var8[var6];
            var11 = var10.bind(var5)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_24;
            var2['paddingHorizontal'] = var11;
            var8 = var8[var6];
            var8 = var10.bind(var5)(var8);
            var8 = var8.radii;
            var8 = var8.round;
            var2['borderRadius'] = var8;
            var8 = var9;
            if(!(var4 == var8)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var6];
            var10 = var11.bind(var5)(var10);
            var10 = var10.colors;
            var8 = var10.CARD_BACKGROUND_DEFAULT;
case 12:
            var2['backgroundColor'] = var8;
            var8 = 'row';
            var2['flexDirection'] = var8;
            if(!(var4 == var9)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var8 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var4 = var8.bind(var5)(var4);
            var4 = var4.colors;
            var4 = var4.BORDER_MUTED;
            _fun0002_ip = 16; continue _fun0002;
case 14:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 6;
            var8 = var11[var8];
            var8 = var10.bind(var5)(var8);
            var10 = var8.bind(var5)(var9);
            var9 = var10.brighten;
            var8 = 0.2;
            var9 = var9.bind(var10)(var8);
            var8 = var9.hex;
            var4 = var8.bind(var9)();
case 16:
            var2['borderColor'] = var4;
            var4 = 1;
            var2['borderWidth'] = var4;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var8 = var3[var6];
            var8 = var4.bind(var5)(var8);
            var8 = var8.shadows;
            var12 = var8.SHADOW_HIGH;
            var13 = var2;
            var8 = copyDataProperties(var13, var12);
            var1['containerFloating'] = var2;
            var2 = {'position': 'absolute', 'flexDirection': 'row', 'alignItems': 'center'};
            var8 = var3[var6];
            var8 = var4.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_4;
            var2['top'] = var8;
            var8 = var3[var6];
            var8 = var4.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_12;
            var2['right'] = var8;
            var2['paddingTop'] = var7;
            var1['buttons'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center'};
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_16;
            var2['gap'] = var3;
            var1['buttonsFloating'] = var2;
            var2 = {'height': '100%', 'alignItems': 'center', 'justifyContent': 'center'};
            var1['loading'] = var2;
            return var1;
        }
    };
    var5 = var9.bind(var10)(var5);
    var _closure1_slot12 = var5;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = var1.isLoading;
            var14 = var1.navigateToSettings;
            var _closure2_slot0 = var14;
            var8 = var1.navigateToPremium;
            var _closure2_slot1 = var8;
            var24 = var1.navigateToShop;
            var25 = var1.shopButtonRef;
            var2 = var1.settingsButtonRef;
            var12 = var1.paddingTop;
            var5 = undefined;
            if(!(var12 === var5)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var12 = 0;
case 17:
            var10 = var1.paddingBottom;
            if(!(var10 === var5)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var10 = 0;
case 19:
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 13;
            var1 = var11[var1];
            var1 = var7.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var9 = var1.primaryColor;
            var1 = _closure1_slot12;
            var10 = var1.bind(var5)(var12, var10, var9);
            var9 = _closure1_slot0;
            var1 = 14;
            var1 = var11[var1];
            var12 = var9.bind(var5)(var1);
            var1 = var12.useHasPremiumSubscriptionToDisplay;
            var17 = var1.bind(var12)();
            var1 = _closure1_slot13;
            var20 = var1.bind(var5)();
            _closure2_slot2 = var20;
            var1 = 15;
            var1 = var11[var1];
            var1 = var7.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var26 = var1.showBadge;
            _closure2_slot3 = var26;
            var7 = var1.dismissBadge;
            _closure2_slot4 = var7;
            var1 = 16;
            var1 = var11[var1];
            var12 = var9.bind(var5)(var1);
            var1 = var12.getIsEligibleForQuests;
            var16 = var1.bind(var12)();
            var1 = 10;
            var1 = var11[var1];
            var11 = var9.bind(var5)(var1);
            var9 = var11.useTrialOffer;
            var1 = _closure1_slot8;
            var9 = var9.bind(var11)(var1);
            var1 = null;
            var9 = var1 != var9;
            _closure2_slot5 = var9;
            var11 = _closure1_slot3;
            var13 = var11.useCallback;
            var12 = new Array(3);
            var12[0] = var20;
            var12[1] = var14;
            var12[2] = var9;
            var9 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.trackYouTabSettingsIconPress;
                    var4 = {};
                    var7 = _closure2_slot2;
                    var4['isBadged'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure2_slot0;
                    var4 = var4.bind(var1)();
                    var3 = _closure2_slot5;
                    if(!var3) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 11;
                    var4 = var8[var4];
                    var6 = var7.bind(var1)(var4);
                    var5 = var6.UNSAFE_isDismissibleContentDismissed;
                    var4 = 12;
                    var4 = var8[var4];
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.DismissibleContent;
                    var4 = var4.TRIAL_FOR_ALL_2026_SETTINGS_BADGE;
                    var4 = var5.bind(var6)(var4);
                    var3 = !var4;
case 21:
                    if(!var3) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 11;
                    var2 = var6[var2];
                    var4 = var5.bind(var1)(var2);
                    var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                    var2 = 12;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.TRIAL_FOR_ALL_2026_SETTINGS_BADGE;
                    var2 = var3.bind(var4)(var2);
case 23:
                    return var1;
                }
            };
            var21 = var13.bind(var11)(var9, var12);
            var12 = var11.useCallback;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.trackYouTabNitroIconPress;
                var2 = var2.bind(var3)();
                var2 = _closure2_slot1;
                var2 = var2.bind(var1)();
                return var1;
            };
            var22 = var12.bind(var11)(var8, var9);
            var9 = var11.useCallback;
            var8 = new Array(2);
            var8[0] = var26;
            var8[1] = var7;
            var7 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var3 = _closure2_slot4;
                    var1 = _closure1_slot7;
                    var2 = var1.TAKE_ACTION;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 25:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 18;
                    var2 = var7[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var2);
                    var3 = var4.openQuestHome;
                    var2 = {};
                    var5 = 19;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.QuestContent;
                    var5 = var5.USER_PROFILE_HEADER;
                    var2['fromContent'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var27 = var9.bind(var11)(var7, var8);
            var11 = _closure1_slot10;
            var9 = _closure1_slot11;
            var8 = {};
            if(!var3) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var13 = _closure1_slot9;
            var12 = _closure1_slot4;
            var7 = {};
            var14 = var10.loading;
            var7['style'] = var14;
            var15 = _closure1_slot5;
            var14 = {};
            var19 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 20;
            var18 = var23[var18];
            var19 = var19.bind(var5)(var18);
            var18 = var19.isYouNavFloating;
            var19 = var18.bind(var19)();
            var18 = 'large';
            if(!var19) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var18 = 'small';
case 29:
            var14['size'] = var18;
            var14 = var13.bind(var5)(var15, var14);
            var7['children'] = var14;
            var3 = var13.bind(var5)(var12, var7);
case 27:
            var12 = new Array(2);
            var12[0] = var3;
            var15 = _closure1_slot10;
            var14 = _closure1_slot4;
            var13 = {};
            var18 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 20;
            var7 = var7[var3];
            var18 = var18.bind(var5)(var7);
            var7 = var18.isYouNavFloating;
            var7 = var7.bind(var18)();
            if(var7) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var7 = var10.buttons;
            _fun0003_ip = 33; continue _fun0003;
case 31:
            var7 = var10.buttonsFloating;
case 33:
            var13['style'] = var7;
            var7 = 'box-none';
            var13['pointerEvents'] = var7;
            var18 = null;
            if(!var16) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var23 = _closure1_slot9;
            var19 = _closure1_slot1;
            var32 = _closure1_slot2;
            var16 = 21;
            var16 = var32[var16];
            var19 = var19.bind(var5)(var16);
            var16 = {};
            var31 = _closure1_slot0;
            var28 = 22;
            var28 = var32[var28];
            var28 = var31.bind(var5)(var28);
            var28 = var28.QuestsIcon;
            var16['IconComponent'] = var28;
            var28 = 23;
            var29 = var32[var28];
            var29 = var31.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var32[var28];
            var28 = var31.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.JALI2K;
            var28 = var29.bind(var30)(var28);
            var16['accessibilityLabel'] = var28;
            var16['onPress'] = var27;
            var16['showRedDot'] = var26;
            var18 = var23.bind(var5)(var19, var16);
case 34:
            var16 = new Array(4);
            var16[0] = var18;
            var23 = _closure1_slot9;
            var19 = _closure1_slot1;
            var26 = _closure1_slot2;
            var18 = 24;
            var18 = var26[var18];
            var19 = var19.bind(var5)(var18);
            var18 = {};
            var18['shopButtonRef'] = var25;
            var18['navigateToShop'] = var24;
            var18 = var23.bind(var5)(var19, var18);
            var16[1] = var18;
            var1 = null;
            if(var17) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var19 = _closure1_slot9;
            var18 = _closure1_slot1;
            var27 = _closure1_slot2;
            var17 = 21;
            var17 = var27[var17];
            var18 = var18.bind(var5)(var17);
            var17 = {};
            var26 = _closure1_slot0;
            var23 = 25;
            var23 = var27[var23];
            var23 = var26.bind(var5)(var23);
            var23 = var23.NitroWheelIcon;
            var17['IconComponent'] = var23;
            var23 = 23;
            var24 = var27[var23];
            var24 = var26.bind(var5)(var24);
            var28 = var24.intl;
            var25 = var28.string;
            var24 = var27[var23];
            var24 = var26.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.Ipxkog;
            var24 = var25.bind(var28)(var24);
            var17['accessibilityLabel'] = var24;
            var24 = var27[var23];
            var24 = var26.bind(var5)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var27[var23];
            var23 = var26.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.Ipxkog;
            var23 = var24.bind(var25)(var23);
            var17['label'] = var23;
            var17['onPress'] = var22;
            var22 = true;
            var17['showNitroSlant'] = var22;
            var1 = var19.bind(var5)(var18, var17);
case 36:
            var16[2] = var1;
            var19 = _closure1_slot9;
            var18 = _closure1_slot1;
            var1 = _closure1_slot2;
            var17 = 21;
            var17 = var1[var17];
            var18 = var18.bind(var5)(var17);
            var17 = {};
            var17['ref'] = var2;
            var2 = _closure1_slot0;
            var22 = 26;
            var22 = var1[var22];
            var22 = var2.bind(var5)(var22);
            var22 = var22.SettingsIcon;
            var17['IconComponent'] = var22;
            var22 = 23;
            var23 = var1[var22];
            var23 = var2.bind(var5)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var1[var22];
            var22 = var2.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22["3D5yo/"];
            var22 = var23.bind(var24)(var22);
            var17['accessibilityLabel'] = var22;
            var17['onPress'] = var21;
            var17['showRedDot'] = var20;
            var17 = var19.bind(var5)(var18, var17);
            var16[3] = var17;
            var13['children'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[1] = var13;
            var8['children'] = var12;
            var9 = var11.bind(var5)(var9, var8);
            var8 = var10.containerFloatingGradient;
            var13 = var8.color;
            _closure2_slot6 = var13;
            var12 = _closure1_slot3;
            var11 = var12.useMemo;
            var8 = new Array(1);
            var8[0] = var13;
            var4 = function() {
                var1 = {};
                var10 = 0;
                var2 = {'x': 0, 'y': 0};
                var1['start'] = var2;
                var5 = 1;
                var2 = {'x': 0, 'y': 1};
                var1['end'] = var2;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 6;
                var2 = var8[var4];
                var6 = undefined;
                var9 = var7.bind(var6)(var2);
                var2 = _closure2_slot6;
                var9 = var9.bind(var6)(var2);
                var2 = var9.alpha;
                var9 = var2.bind(var9)(var10);
                var2 = var9.hex;
                var9 = var2.bind(var9)();
                var2 = new Array(2);
                var2[0] = var9;
                var4 = var8[var4];
                var4 = var7.bind(var6)(var4);
                var3 = _closure2_slot6;
                var4 = var4.bind(var6)(var3);
                var3 = var4.alpha;
                var4 = var3.bind(var4)(var5);
                var3 = var4.hex;
                var3 = var3.bind(var4)();
                var2[1] = var3;
                var1['colors'] = var2;
                return var1;
            };
            var11 = var11.bind(var12)(var4, var8);
            var1 = var1[var3];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isYouNavFloating;
            var1 = var1.bind(var2)();
            if(var1) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var4 = var10.container;
            var1['style'] = var4;
            var1['pointerEvents'] = var7;
            var1['children'] = var9;
            var1 = var3.bind(var5)(var2, var1);
            _fun0003_ip = 40; continue _fun0003;
case 38:
            var4 = _closure1_slot10;
            var3 = _closure1_slot4;
            var2 = {};
            var8 = var10.containerFloatingWrap;
            var2['style'] = var8;
            var2['pointerEvents'] = var7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 27;
            var6 = var12[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var12 = var10.containerFloatingGradient;
            var6['style'] = var12;
            var35 = var6;
            var34 = var11;
            var11 = copyDataProperties(var35, var34);
            var12 = 'none';
            var11 = 'pointerEvents';
            var6[10] = var12;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var10 = var10.containerFloating;
            var7['style'] = var10;
            var7['children'] = var9;
            var7 = var8.bind(var5)(var3, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 40:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 28;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['useHasSettingsBadge'] = var2;
    return var1;
})();
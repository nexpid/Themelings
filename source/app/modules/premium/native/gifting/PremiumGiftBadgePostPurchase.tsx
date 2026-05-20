// app/modules/premium/native/gifting/PremiumGiftBadgePostPurchase.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function darkenHex(arg1, arg2) {
        var10 = arg1;
        var1 = 0.3;
        var _closure2_slot0 = var1;
        var1 = global;
        var4 = var1.parseInt;
        var5 = var10.slice;
        var3 = 1;
        var8 = 3;
        var3 = var5.bind(var10)(var3, var8);
        var7 = undefined;
        var6 = 16;
        var3 = var4.bind(var7)(var3, var6);
        var5 = new Array(3);
        var5[0] = var3;
        var4 = var1.parseInt;
        var3 = var10.slice;
        var9 = 5;
        var3 = var3.bind(var10)(var8, var9);
        var3 = var4.bind(var7)(var3, var6);
        var5[1] = var3;
        var4 = var1.parseInt;
        var8 = var10.slice;
        var3 = 7;
        var3 = var8.bind(var10)(var9, var3);
        var3 = var4.bind(var7)(var3, var6);
        var5[2] = var3;
        var4 = var5.map;
        var3 = function(arg1) {
            var1 = global;
            var3 = var1.Math;
            var2 = var3.round;
            var4 = _closure2_slot0;
            var1 = 1;
            var4 = var1 - var4;
            var1 = arg1;
            var1 = var1 * var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        var3 = var4.map;
        var2 = function(arg1) {
            var3 = arg1;
            var2 = var3.toString;
            var1 = 16;
            var4 = var2.bind(var3)(var1);
            var3 = var4.padStart;
            var2 = 2;
            var1 = '0';
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var4 = var3.bind(var4)(var2);
        var3 = var4.join;
        var2 = '';
        var3 = var3.bind(var4)(var2);
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = '#';
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function PostPurchaseFooter() {
        var13 = _closure1_slot1;
        var14 = _closure1_slot2;
        var2 = 7;
        var2 = var14[var2];
        var4 = undefined;
        var2 = var13.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var3 = var2.bottom;
        var2 = _closure1_slot13;
        var5 = var2.bind(var4)(var3);
        var8 = _closure1_slot3;
        var6 = var8.useCallback;
        var3 = function() {
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 8;
            var3 = var7[var1];
            var1 = undefined;
            var4 = var6.bind(var1)(var3);
            var3 = var4.pop;
            var3 = var3.bind(var4)();
            var3 = _closure1_slot0;
            var2 = 9;
            var2 = var7[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.openGiftModal;
            var2 = {};
            var5 = 10;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var6 = var5.GIFTING_BADGE_POST_PURCHASE;
            var5 = new Array(1);
            var5[0] = var6;
            var2['analyticsLocations'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = new Array(0);
        var16 = var6.bind(var8)(var3, var2);
        var6 = _closure1_slot3;
        var3 = var6.useCallback;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 8;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.pop;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot0;
                var2 = 11;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.getRootNavigationRef;
                var4 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = var4.navigate;
                var2 = 'you';
                var2 = var3.bind(var4)(var2);
case 2:
                return var1;
            }
        };
        var1 = new Array(0);
        var9 = var3.bind(var6)(var2, var1);
        var3 = _closure1_slot12;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var5.footer;
        var1['style'] = var5;
        var15 = _closure1_slot11;
        var12 = _closure1_slot0;
        var6 = 12;
        var5 = var14[var6];
        var5 = var12.bind(var4)(var5);
        var8 = var5.Button;
        var5 = {'grow': true, 'variant': 'primary'};
        var17 = _closure1_slot11;
        var10 = 13;
        var10 = var14[var10];
        var10 = var12.bind(var4)(var10);
        var11 = var10.GiftIcon;
        var10 = {};
        var18 = 'sm';
        var10['size'] = var18;
        var18 = 6;
        var18 = var14[var18];
        var18 = var13.bind(var4)(var18);
        var18 = var18.colors;
        var18 = var18.CONTROL_PRIMARY_TEXT_DEFAULT;
        var10['color'] = var18;
        var10 = var17.bind(var4)(var11, var10);
        var5['icon'] = var10;
        var11 = 14;
        var10 = var14[var11];
        var10 = var12.bind(var4)(var10);
        var19 = var10.intl;
        var18 = var19.string;
        var10 = 15;
        var17 = var14[var10];
        var17 = var13.bind(var4)(var17);
        var17 = var17.g86YiI;
        var17 = var18.bind(var19)(var17);
        var5['text'] = var17;
        var5['onPress'] = var16;
        var8 = var15.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot11;
        var6 = var14[var6];
        var6 = var12.bind(var4)(var6);
        var7 = var6.Button;
        var6 = {'grow': true, 'variant': 'secondary'};
        var11 = var14[var11];
        var11 = var12.bind(var4)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var4)(var10);
        var10 = var10.sa/cfM;
        var10 = var11.bind(var12)(var10);
        var6['text'] = var10;
        var6['onPress'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function InProgressScreen(arg1) {
        var1 = arg1;
        var22 = var1.progress;
        var21 = var1.title;
        var15 = var1.progressBarTitle;
        var17 = var1.description;
        var20 = var1.currentTier;
        var16 = var1.nextTier;
        var13 = _closure1_slot1;
        var19 = _closure1_slot2;
        var1 = 7;
        var1 = var19[var1];
        var4 = undefined;
        var1 = var13.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var2 = var1.bottom;
        var1 = _closure1_slot13;
        var18 = var1.bind(var4)(var2);
        var3 = _closure1_slot12;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var18.screenContainer;
        var1['style'] = var5;
        var8 = _closure1_slot12;
        var7 = _closure1_slot4;
        var5 = {};
        var9 = var18.inProgressContent;
        var5['style'] = var9;
        var11 = _closure1_slot11;
        var10 = _closure1_slot4;
        var9 = {};
        var12 = var18.progressRow;
        var9['style'] = var12;
        var14 = _closure1_slot11;
        var12 = 16;
        var12 = var19[var12];
        var13 = var13.bind(var4)(var12);
        var12 = {};
        var12['progress'] = var22;
        var12['currentTier'] = var20;
        var12['nextTier'] = var16;
        var16 = 48;
        var12['iconSize'] = var16;
        var12['title'] = var15;
        var12 = var14.bind(var4)(var13, var12);
        var9['children'] = var12;
        var10 = var11.bind(var4)(var10, var9);
        var9 = new Array(2);
        var9[0] = var10;
        var12 = _closure1_slot12;
        var11 = _closure1_slot4;
        var10 = {};
        var13 = var18.messageSection;
        var10['style'] = var13;
        var20 = _closure1_slot11;
        var15 = _closure1_slot0;
        var14 = 17;
        var13 = var19[var14];
        var13 = var15.bind(var4)(var13);
        var16 = var13.Text;
        var13 = {};
        var22 = 'heading-xl/extrabold';
        var13['variant'] = var22;
        var22 = var18.centerText;
        var13['style'] = var22;
        var13['children'] = var21;
        var16 = var20.bind(var4)(var16, var13);
        var13 = new Array(2);
        var13[0] = var16;
        var16 = _closure1_slot11;
        var14 = var19[var14];
        var14 = var15.bind(var4)(var14);
        var15 = var14.Text;
        var14 = {'variant': 'text-md/medium', 'color': 'text-muted'};
        var18 = var18.centerText;
        var14['style'] = var18;
        var14['children'] = var17;
        var14 = var16.bind(var4)(var15, var14);
        var13[1] = var14;
        var10['children'] = var13;
        var10 = var12.bind(var4)(var11, var10);
        var9[1] = var10;
        var5['children'] = var9;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot11;
        var7 = _closure1_slot15;
        var6 = {};
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function LevelUpScreen(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var21 = var1.simulatedProgress;
            var20 = var1.currentTier;
            var18 = var1.newTier;
            var _closure2_slot0 = var18;
            var23 = var1.nextTier;
            var25 = var1.giftsToNextTier;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var3 = var1.bottom;
            var1 = _closure1_slot13;
            var27 = var1.bind(var4)(var3);
            var1 = 18;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var1 = 19;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isThemeDark;
            var2 = var1.bind(var2)(var3);
            var1 = '#40556A';
            if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = '#279EFF';
case 4:
            _closure2_slot1 = var1;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 20;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            _closure2_slot2 = var2;
            var7 = _closure1_slot3;
            var5 = var7.useLayoutEffect;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var3 = var4.setOptions;
                    var2 = {};
                    var1 = true;
                    var2['headerTransparent'] = var1;
                    var1 = {'backgroundColor': 'transparent', 'shadowColor': 'transparent'};
                    var2['headerStyle'] = var1;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 21;
                    var5 = var5[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.isIOS;
                    var6 = var5.bind(var6)();
                    var5 = undefined;
                    if(var6) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var5 = function() {
                        var4 = _closure1_slot11;
                        var3 = _closure1_slot4;
                        var2 = undefined;
                        var1 = {};
                        var1 = var4.bind(var2)(var3, var1);
                        return var1;
                    };
case 6:
                    var2['headerBackground'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2, var3);
            var7 = _closure1_slot3;
            var5 = var7.useEffect;
            var3 = function() {
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 22;
                var3 = var6[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.triggerHapticFeedback;
                var5 = _closure1_slot1;
                var2 = 23;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.IMPACT_HEAVY;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = new Array(0);
            var2 = var5.bind(var7)(var3, var2);
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var7 = var18.key;
            var2 = new Array(2);
            var2[0] = var7;
            var2[1] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = _closure1_slot7;
                    var4 = _closure2_slot0;
                    var4 = var4.key;
                    var7 = var5[var4];
                    var4 = null;
                    if(!(var4 == var7)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var7 = _closure2_slot1;
case 8:
                    var4 = _closure1_slot5;
                    var6 = 0.3;
                    var _closure3_slot0 = var6;
                    var3 = global;
                    var9 = var3.parseInt;
                    var8 = var7.slice;
                    var5 = 1;
                    var12 = 3;
                    var8 = var8.bind(var7)(var5, var12);
                    var5 = undefined;
                    var11 = 16;
                    var8 = var9.bind(var5)(var8, var11);
                    var10 = new Array(3);
                    var10[0] = var8;
                    var9 = var3.parseInt;
                    var8 = var7.slice;
                    var13 = 5;
                    var8 = var8.bind(var7)(var12, var13);
                    var8 = var9.bind(var5)(var8, var11);
                    var10[1] = var8;
                    var9 = var3.parseInt;
                    var12 = var7.slice;
                    var8 = 7;
                    var8 = var12.bind(var7)(var13, var8);
                    var8 = var9.bind(var5)(var8, var11);
                    var10[2] = var8;
                    var9 = var10.map;
                    var8 = function(arg1) {
                        var7 = arg1;
                        var1 = global;
                        var4 = var1.Math;
                        var3 = var4.min;
                        var6 = var1.Math;
                        var5 = var6.round;
                        var2 = 255;
                        var8 = var2 - var7;
                        var1 = _closure3_slot0;
                        var1 = var8 * var1;
                        var1 = var7 + var1;
                        var1 = var5.bind(var6)(var1);
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var10 = var9.bind(var10)(var8);
                    var9 = var10.map;
                    var8 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.toString;
                        var1 = 16;
                        var4 = var2.bind(var3)(var1);
                        var3 = var4.padStart;
                        var2 = 2;
                        var1 = '0';
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var10 = var9.bind(var10)(var8);
                    var9 = var10.join;
                    var8 = '';
                    var9 = var9.bind(var10)(var8);
                    var3 = var3.HermesInternal;
                    var8 = var3.concat;
                    var3 = '#';
                    var3 = var8.bind(var3)(var9);
                    var4 = var4.bind(var5)(var3);
                    var3 = new Array(2);
                    var3[0] = var4;
                    var4 = _closure1_slot5;
                    var2 = _closure1_slot14;
                    var2 = var2.bind(var5)(var7, var6);
                    var2 = var4.bind(var5)(var2);
                    var3[1] = var2;
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        var2 = null;
                        var1 = arg1;
                        var1 = var2 != var1;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            _closure2_slot3 = var1;
            var3 = _closure1_slot12;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var27.screenContainer;
            var1['style'] = var5;
            var8 = _closure1_slot12;
            var7 = _closure1_slot4;
            var5 = {};
            var9 = var27.levelUpContent;
            var5['style'] = var9;
            var9 = var18.simple_icon_url;
            var24 = null;
            var10 = var24 != var9;
            if(!var10) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var12 = _closure1_slot11;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var9 = 24;
            var9 = var13[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var13 = var18.simple_icon_url;
            var9['icon'] = var13;
            var13 = 120;
            var9['size'] = var13;
            var10 = var12.bind(var4)(var11, var9);
case 10:
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot12;
            var11 = _closure1_slot4;
            var10 = {};
            var13 = var27.levelUpCopy;
            var10['style'] = var13;
            var16 = _closure1_slot11;
            var26 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 17;
            var13 = var17[var15];
            var13 = var26.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {};
            var19 = 'heading-xxl/bold';
            var13['variant'] = var19;
            var19 = var27.centerText;
            var13['style'] = var19;
            var19 = 14;
            var22 = var17[var19];
            var22 = var26.bind(var4)(var22);
            var30 = var22.intl;
            var29 = var30.format;
            var22 = _closure1_slot1;
            var26 = 15;
            var17 = var17[var26];
            var17 = var22.bind(var4)(var17);
            var28 = var17.DLeboq;
            var17 = {};
            var33 = var18.name;
            var34 = var24 != var33;
            var22 = '';
            var32 = var22;
            if(!var34) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var32 = var33;
case 12:
            var17['tierName'] = var32;
            var31 = function gradientHook(arg1) {
                var4 = _closure1_slot11;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 17;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {};
                var5 = 'heading-xxl/extrabold';
                var1['variant'] = var5;
                var5 = _closure2_slot3;
                var1['gradientColors'] = var5;
                var5 = arg1;
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var17['gradientHook'] = var31;
            var17 = var29.bind(var30)(var28, var17);
            var13['children'] = var17;
            var14 = var16.bind(var4)(var14, var13);
            var13 = new Array(3);
            var13[0] = var14;
            var17 = _closure1_slot11;
            var16 = _closure1_slot1;
            var28 = _closure1_slot2;
            var14 = 25;
            var14 = var28[var14];
            var16 = var16.bind(var4)(var14);
            var14 = {};
            var14['progress'] = var21;
            var14['currentTier'] = var20;
            var14['newTier'] = var18;
            var14 = var17.bind(var4)(var16, var14);
            var13[1] = var14;
            var14 = var24 != var23;
            if(!var14) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var14 = var24 != var25;
case 14:
            if(!var14) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var16 = 0;
            var14 = var25 > var16;
case 16:
            if(!var14) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var17 = _closure1_slot11;
            var20 = _closure1_slot0;
            var18 = _closure1_slot2;
            var15 = var18[var15];
            var15 = var20.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-md/normal', 'color': 'text-subtle'};
            var28 = var27.centerText;
            var21 = new Array(2);
            var21[0] = var28;
            var27 = var27.levelUpDescription;
            var21[1] = var27;
            var15['style'] = var21;
            var19 = var18[var19];
            var19 = var20.bind(var4)(var19);
            var21 = var19.intl;
            var20 = var21.format;
            var19 = _closure1_slot1;
            var18 = var18[var26];
            var18 = var19.bind(var4)(var18);
            var19 = var18["6QVlxw"];
            var18 = {};
            var18['count'] = var25;
            var23 = var23.name;
            var24 = var24 != var23;
            if(!var24) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var22 = var23;
case 20:
            var18['nextTierName'] = var22;
            var18 = var20.bind(var21)(var19, var18);
            var15['children'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 18:
            var13[2] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot11;
            var7 = _closure1_slot15;
            var6 = {};
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var4 = var4.processColor;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.TIER_COLORS;
    var _closure1_slot7 = var7;
    var7 = var4.getRemainingGiftsToNextTier;
    var _closure1_slot8 = var7;
    var7 = var4.getTierForProgress;
    var _closure1_slot9 = var7;
    var4 = var4.getNextTierForProgress;
    var _closure1_slot10 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var1 = {};
        var2 = {};
        var3 = 1;
        var2['flex'] = var3;
        var1['screenContainer'] = var2;
        var2 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center', 'gap': 24};
        var8 = 'center';
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 6;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['paddingHorizontal'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_BASE_LOW;
        var2['backgroundColor'] = var7;
        var1['inProgressContent'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['padding'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.md;
        var2['borderRadius'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.shadows;
        var10 = var7.SHADOW_LOW;
        var11 = var2;
        var7 = copyDataProperties(var11, var10);
        var7 = '100%';
        var9 = 'width';
        var2[8] = var7;
        var1['progressRow'] = var2;
        var2 = {'gap': null, 'alignItems': 'center', 'width': '100%'};
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_8;
        var2['gap'] = var9;
        var1['messageSection'] = var2;
        var2 = {};
        var2['textAlign'] = var8;
        var1['centerText'] = var2;
        var2 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center'};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_48;
        var2['paddingHorizontal'] = var8;
        var1['levelUpContent'] = var2;
        var2 = {'gap': null, 'alignItems': 'center', 'width': '100%'};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_12;
        var2['gap'] = var8;
        var1['levelUpCopy'] = var2;
        var2 = {};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_8;
        var2['paddingHorizontal'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_16;
        var2['paddingTop'] = var8;
        var1['levelUpDescription'] = var2;
        var2 = {};
        var2['width'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_12;
        var2['gap'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['paddingHorizontal'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var4 = var3.PX_16;
        var3 = arg1;
        var3 = var4 + var3;
        var2['paddingBottom'] = var3;
        var1['footer'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gifting/PremiumGiftBadgePostPurchase.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumGiftBadgePostPurchase(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var5 = var1.currentProgress;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 26;
            var1 = var4[var1];
            var6 = undefined;
            var7 = var2.bind(var6)(var1);
            var4 = var7.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot6;
                    var3 = var4.getBadgeById;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.BadgeId;
                    var2 = var2.GIFTING;
                    var2 = var3.bind(var4)(var2);
                    var3 = null;
                    var3 = var3 == var2;
                    if(var3) { _fun0006_ip = 3; continue _fun0006 }
case 22:
                    var1 = var2.tiers;
case 3:
                    return var1;
                }
            };
            var12 = var4.bind(var7)(var2, var1);
            var1 = null;
            if(!(var1 != var12)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var4 = _closure1_slot9;
            var10 = var4.bind(var6)(var12, var5);
            var2 = 1;
            var11 = var5 + var2;
            var9 = var4.bind(var6)(var12, var11);
            var4 = var1 == var9;
            var5 = undefined;
            if(var4) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var5 = var9.key;
case 25:
            var7 = var1 == var10;
            var4 = undefined;
            if(var7) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var4 = var10.key;
case 27:
            var7 = _closure1_slot10;
            var8 = var7.bind(var6)(var12, var11);
            var7 = _closure1_slot8;
            var7 = var7.bind(var6)(var12, var11);
            if(!(var5 !== var4)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            if(!(var1 == var9)) { _fun0005_ip = 31; continue _fun0005 }
case 29:
            var5 = _closure1_slot11;
            var4 = _closure1_slot16;
            if(!(var2 !== var7)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var2 = {};
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var14 = 14;
            var13 = var12[var14];
            var13 = var15.bind(var6)(var13);
            var19 = var13.intl;
            var18 = var19.string;
            var16 = _closure1_slot1;
            var17 = 15;
            var13 = var12[var17];
            var13 = var16.bind(var6)(var13);
            var13 = var13["/rBQud"];
            var13 = var18.bind(var19)(var13);
            var2['title'] = var13;
            var13 = var12[var14];
            var13 = var15.bind(var6)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var12 = var12[var17];
            var12 = var16.bind(var6)(var12);
            var12 = var12.DDQMlx;
            var12 = var13.bind(var15)(var12);
            var2['description'] = var12;
            var13 = var1 == var10;
            var12 = undefined;
            if(var13) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var12 = var10.name;
case 34:
            var13 = var1 != var12;
            var12 = '';
            if(!var13) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var14 = var13[var14];
            var14 = var15.bind(var6)(var14);
            var16 = var14.intl;
            var15 = var16.formatToPlainString;
            var14 = _closure1_slot1;
            var13 = var13[var17];
            var13 = var14.bind(var6)(var13);
            var14 = var13.bwyQt8;
            var13 = {};
            var18 = var1 == var10;
            var17 = undefined;
            if(var18) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var17 = var10.name;
case 38:
            var13['tierName'] = var17;
            var12 = var15.bind(var16)(var14, var13);
case 36:
            var2['progressBarTitle'] = var12;
            var2['progress'] = var11;
            var13 = var1 != var9;
            var12 = undefined;
            if(!var13) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var12 = var9;
case 40:
            var2['currentTier'] = var12;
            var13 = var1 != var8;
            var12 = undefined;
            if(!var13) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var12 = var8;
case 42:
            var2['nextTier'] = var12;
            _fun0005_ip = 44; continue _fun0005;
case 32:
            var12 = {};
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var14 = 14;
            var15 = var13[var14];
            var15 = var16.bind(var6)(var15);
            var18 = var15.intl;
            var16 = var18.formatToPlainString;
            var15 = _closure1_slot1;
            var17 = 15;
            var13 = var13[var17];
            var13 = var15.bind(var6)(var13);
            var15 = var13.KjdBPz;
            var13 = {};
            var19 = var1 == var8;
            var20 = undefined;
            if(var19) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var20 = var8.name;
case 45:
            var21 = var1 != var20;
            var19 = '';
            if(!var21) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var19 = var20;
case 47:
            var13['nextTier'] = var19;
            var13 = var16.bind(var18)(var15, var13);
            var12['title'] = var13;
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var16 = var13[var14];
            var16 = var15.bind(var6)(var16);
            var20 = var16.intl;
            var19 = var20.string;
            var16 = _closure1_slot1;
            var18 = var13[var17];
            var18 = var16.bind(var6)(var18);
            var18 = var18.oqDrEM;
            var18 = var19.bind(var20)(var18);
            var12['description'] = var18;
            var14 = var13[var14];
            var14 = var15.bind(var6)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var13[var17];
            var13 = var16.bind(var6)(var13);
            var13 = var13.Ka5s+Q;
            var13 = var14.bind(var15)(var13);
            var12['progressBarTitle'] = var13;
            var12['progress'] = var11;
            var14 = var1 != var9;
            var13 = undefined;
            if(!var14) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var13 = var9;
case 49:
            var12['currentTier'] = var13;
            var14 = var1 != var8;
            var13 = undefined;
            if(!var14) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var13 = var8;
case 51:
            var12['nextTier'] = var13;
            var2 = var12;
case 44:
            var2 = var5.bind(var6)(var4, var2);
            _fun0005_ip = 53; continue _fun0005;
case 31:
            var5 = _closure1_slot11;
            var4 = _closure1_slot17;
            var3 = {};
            var3['simulatedProgress'] = var11;
            var3['currentTier'] = var10;
            var3['newTier'] = var9;
            var3['nextTier'] = var8;
            var3['giftsToNextTier'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 53:
            return var2;
case 23:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
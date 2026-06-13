// app/modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function ItemSeparator(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.trailingItem;
            var1 = null;
            var2 = var1 == var2;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot11;
            var4 = _closure1_slot5;
            var3 = {};
            var2 = {};
            var6 = _closure1_slot16;
            var2['height'] = var6;
            var3['style'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
case 2:
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function BountiesRecapPullZone(arg1) {
        var1 = arg1;
        var5 = var1.height;
        var4 = _closure1_slot11;
        var3 = _closure1_slot5;
        var2 = {};
        var1 = {};
        var1['height'] = var5;
        var2['style'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot42 = var1;
    var1 = function BountiesScrollVideoItemContainer(arg1) {
        var1 = arg1;
        var13 = var1.index;
        var _closure2_slot0 = var13;
        var11 = var1.slotHeight;
        var _closure2_slot1 = var11;
        var14 = var1.scrollY;
        var _closure2_slot2 = var14;
        var8 = var1.style;
        var5 = var1.children;
        var12 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 11;
        var7 = var6[var1];
        var4 = undefined;
        var9 = var12.bind(var4)(var7);
        var7 = var9.useAnimatedStyle;
        var3 = function i() {
            var1 = global;
            var4 = var1.Math;
            var3 = var4.abs;
            var5 = _closure2_slot2;
            var1 = var5.get;
            var5 = var1.bind(var5)();
            var1 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = var1 * var2;
            var1 = var5 - var1;
            var1 = var3.bind(var4)(var1);
            var7 = var1 / var2;
            var1 = {};
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 11;
            var5 = var8[var2];
            var3 = undefined;
            var6 = var4.bind(var3)(var5);
            var5 = var6.interpolate;
            var2 = var8[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.Extrapolation;
            var9 = var2.CLAMP;
            var11 = [0, 0.3, 1];
            var10 = [1, 1, 0];
            var13 = var6;
            var12 = var7;
            var2 = var13[var5](var12, var11, var10, var9, var8);
            var1['opacity'] = var2;
            return var1;
        };
        var10 = {};
        var10['scrollY'] = var14;
        var10['index'] = var13;
        var10['slotHeight'] = var11;
        var11 = var6[var1];
        var11 = var12.bind(var4)(var11);
        var11 = var11.interpolate;
        var10['interpolate'] = var11;
        var11 = 0.3;
        var10['FADE_DEADBAND'] = var11;
        var11 = var6[var1];
        var11 = var12.bind(var4)(var11);
        var11 = var11.Extrapolation;
        var10['Extrapolation'] = var11;
        var3['__closure'] = var10;
        var10 = 15300322839358.0;
        var3['__workletHash'] = var10;
        var10 = _closure1_slot22;
        var3['__initData'] = var10;
        var7 = var7.bind(var9)(var3);
        var3 = _closure1_slot11;
        var2 = _closure1_slot1;
        var1 = var6[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var6 = new Array(2);
        var6[0] = var8;
        var6[1] = var7;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot43 = var1;
    var1 = function BountiesModalContentScrollInner(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.initialBountyId;
            var _closure2_slot0 = var2;
            var39 = var1.sourceQuestContent;
            var _closure2_slot1 = var39;
            var5 = undefined;
            var _closure2_slot31 = var5;
            var _closure2_slot32 = var5;
            var _closure2_slot33 = var5;
            var _closure2_slot34 = var5;
            var _closure2_slot35 = var5;
            var _closure2_slot36 = var5;
            var _closure2_slot37 = var5;
            var _closure2_slot38 = var5;
            var _closure2_slot39 = var5;
            var _closure2_slot40 = var5;
            var _closure2_slot41 = var5;
            var _closure2_slot42 = var5;
            var1 = _closure1_slot21;
            var8 = var1.bind(var5)();
            var _closure2_slot2 = var8;
            var2 = _closure1_slot1;
            var20 = _closure1_slot2;
            var1 = 12;
            var1 = var20[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var11 = var1.height;
            var _closure2_slot3 = var11;
            var3 = _closure1_slot4;
            var2 = var3.useRef;
            var1 = null;
            var38 = var2.bind(var3)(var1);
            var4 = _closure1_slot4;
            var3 = var4.useState;
            var21 = _closure1_slot0;
            var16 = 14;
            var2 = var20[var16];
            var2 = var21.bind(var5)(var2);
            var2 = var2.BOUNTIES_MODAL_BASE_FOOTER_HEIGHT;
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot3;
            var46 = 2;
            var4 = var2.bind(var5)(var3, var46);
            var3 = 0;
            var2 = var4[var3];
            var35 = 1;
            var4 = var4[var35];
            var _closure2_slot4 = var4;
            var9 = _closure1_slot4;
            var7 = var9.useCallback;
            var6 = function(arg1) {
                var1 = global;
                var3 = var1.Math;
                var2 = var3.ceil;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.height;
                var3 = var2.bind(var3)(var1);
                var2 = _closure2_slot4;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var4 = new Array(0);
            var13 = var7.bind(var9)(var6, var4);
            var4 = {};
            var4['footerHeight'] = var2;
            var2 = function useBountiesScrollVideoLayout(arg1) {
                var2 = arg1;
                var5 = var2.footerHeight;
                var _closure3_slot0 = var5;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 12;
                var3 = var9[var3];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var8 = var3.width;
                var _closure3_slot1 = var8;
                var7 = var3.height;
                var _closure3_slot2 = var7;
                var3 = 13;
                var3 = var9[var3];
                var3 = var6.bind(var4)(var3);
                var6 = var3.bind(var4)();
                var _closure3_slot3 = var6;
                var4 = _closure1_slot4;
                var3 = var4.useMemo;
                var2 = new Array(6);
                var2[0] = var8;
                var2[1] = var7;
                var7 = var6.top;
                var2[2] = var7;
                var7 = var6.left;
                var2[3] = var7;
                var6 = var6.right;
                var2[4] = var6;
                var2[5] = var5;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = _closure3_slot1;
                        var1 = _closure3_slot3;
                        var3 = var1.left;
                        var4 = var4 - var3;
                        var3 = var1.right;
                        var3 = var4 - var3;
                        var4 = _closure3_slot2;
                        var1 = var1.top;
                        var4 = var4 - var1;
                        var1 = _closure3_slot0;
                        var1 = var4 - var1;
                        var4 = _closure1_slot15;
                        var4 = var3 / var4;
                        var6 = var3;
                        if(!(var4 > var1)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                        var5 = _closure1_slot15;
                        var6 = var1 * var5;
                        var4 = var1;
case 4:
                        var1 = {};
                        var8 = _closure3_slot3;
                        var2 = var8.top;
                        var1['top'] = var2;
                        var2 = global;
                        var7 = var2.Math;
                        var5 = var7.floor;
                        var8 = var8.left;
                        var9 = var3 - var6;
                        var3 = 2;
                        var3 = var9 / var3;
                        var3 = var8 + var3;
                        var3 = var5.bind(var7)(var3);
                        var1['left'] = var3;
                        var5 = var2.Math;
                        var3 = var5.floor;
                        var3 = var3.bind(var5)(var6);
                        var1['width'] = var3;
                        var3 = var2.Math;
                        var2 = var3.floor;
                        var2 = var2.bind(var3)(var4);
                        var1['height'] = var2;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var4 = var2.bind(var5)(var4);
            var _closure2_slot5 = var4;
            var2 = 15;
            var2 = var20[var2];
            var6 = var21.bind(var5)(var2);
            var2 = var6.useQuestHomeBounties;
            var2 = var2.bind(var6)();
            var2 = var2.questHomeBounties;
            var _closure2_slot6 = var2;
            var7 = _closure1_slot4;
            var6 = var7.useState;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure2_slot6;
                    var3 = var4.findIndex;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure2_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var7 = var3.bind(var4)(var1);
                    var6 = 0;
                    if(!(!(var7 <= var6))) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                    var5 = _closure2_slot6;
                    var1 = var5.slice;
                    var9 = var1.bind(var5)(var7);
                    var1 = new Array(0);
                    var10 = var1;
                    var8 = 0;
                    var8 = arraySpread(var10, var9, var8);
                    var3 = var5.slice;
                    var9 = var3.bind(var5)(var6, var7);
                    var10 = var1;
                    var3 = arraySpread(var10, var9, var8);
                    _fun0004_ip = 8; continue _fun0004;
case 6:
                    var1 = _closure2_slot6;
case 8:
                    return var1;
                }
            };
            var6 = var6.bind(var7)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var5)(var6, var35);
            var37 = var2[var3];
            var _closure2_slot7 = var37;
            var27 = 16;
            var2 = var20[var27];
            var2 = var21.bind(var5)(var2);
            var7 = var2.BountiesStage1Experiment;
            var6 = var7.useConfig;
            var2 = {};
            var9 = _closure1_slot8;
            var9 = var9.VIDEO_MODAL_MOBILE;
            var2['location'] = var9;
            var6 = var6.bind(var7)(var2);
            var2 = var6.orbAmount;
            var _closure2_slot8 = var2;
            var19 = var6.rewardTimerSeconds;
            var _closure2_slot9 = var19;
            var6 = 17;
            var7 = var20[var6];
            var14 = var21.bind(var5)(var7);
            var10 = var14.useStateFromStores;
            var7 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = new Array(2);
            var7[0] = var37;
            var7[1] = var2;
            var2 = function() {
                var4 = _closure1_slot6;
                var3 = var4.getCompletedBountyCount;
                var2 = _closure2_slot7;
                var2 = var3.bind(var4)(var2);
                var1 = _closure2_slot8;
                var1 = var2 * var1;
                return var1;
            };
            var9 = var10.bind(var14)(var9, var2, var7);
            var2 = var37[var3];
            var _closure2_slot10 = var2;
            var6 = var20[var6];
            var14 = var21.bind(var5)(var6);
            var10 = var14.useStateFromStores;
            var6 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = new Array(2);
            var6[0] = var2;
            var6[1] = var19;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0005_ip = 9; continue _fun0005 }
case 10:
                    var5 = _closure1_slot6;
                    var4 = var5.getBountyVideoProgress;
                    var3 = _closure2_slot10;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    var1 = var1 != var3;
                    if(!var1) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                    var3 = var3.maxTimestampSec;
                    var2 = _closure2_slot9;
                    var1 = var3 >= var2;
case 11:
                    return var1;
case 9:
                    var1 = false;
                    return var1;
                }
            };
            var14 = var10.bind(var14)(var7, var2, var6);
            var2 = var4.height;
            var _closure2_slot11 = var2;
            var6 = _closure1_slot16;
            var29 = var2 + var6;
            var _closure2_slot12 = var29;
            var6 = var37.length;
            var25 = var6 - var35;
            var _closure2_slot13 = var25;
            var6 = var9 > var3;
            var _closure2_slot14 = var6;
            var _closure2_slot15 = var2;
            var48 = var25 * var29;
            var _closure2_slot16 = var48;
            var23 = var48 + var2;
            var _closure2_slot17 = var23;
            var17 = _closure1_slot4;
            var15 = var17.useMemo;
            var10 = new Array(3);
            var10[0] = var23;
            var10[1] = var48;
            var10[2] = var2;
            var7 = function() {
                var1 = {};
                var3 = _closure2_slot16;
                var1['lastBounty'] = var3;
                var3 = _closure2_slot17;
                var1['fullRecap'] = var3;
                var2 = _closure2_slot15;
                var1['revealHeight'] = var2;
                return var1;
            };
            var17 = var15.bind(var17)(var7, var10);
            var43 = 18;
            var7 = var20[var43];
            var15 = var21.bind(var5)(var7);
            var10 = var15.useBountiesRecapScroll;
            var7 = {};
            var7['listRef'] = var38;
            var7['enabled'] = var6;
            var7['offsets'] = var17;
            var10 = var10.bind(var15)(var7);
            var7 = var10.scrollToLastBounty;
            var _closure2_slot18 = var7;
            var41 = var10.handleRecapMomentumEnd;
            var _closure2_slot19 = var41;
            var18 = _closure1_slot4;
            var17 = var18.useMemo;
            var15 = new Array(4);
            var15[0] = var37;
            var15[1] = var23;
            var15[2] = var6;
            var15[3] = var29;
            var10 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure2_slot7;
                    var3 = var4.map;
                    var1 = function(arg1, arg2) {
                        var2 = _closure2_slot12;
                        var1 = arg2;
                        var1 = var1 * var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1);
                    var3 = _closure2_slot14;
                    if(!var3) { _fun0006_ip = 12; continue _fun0006 }
case 7:
                    var3 = var1.push;
                    var2 = _closure2_slot17;
                    var2 = var3.bind(var1)(var2);
case 12:
                    return var1;
                }
            };
            var31 = var17.bind(var18)(var10, var15);
            var15 = _closure1_slot4;
            var10 = var15.useState;
            var30 = false;
            var15 = var10.bind(var15)(var30);
            var10 = _closure1_slot3;
            var10 = var10.bind(var5)(var15, var46);
            var33 = var10[var3];
            var _closure2_slot20 = var33;
            var26 = var10[var35];
            var _closure2_slot21 = var26;
            var15 = _closure1_slot4;
            var10 = var15.useState;
            var15 = var10.bind(var15)(var30);
            var10 = _closure1_slot3;
            var10 = var10.bind(var5)(var15, var46);
            var40 = var10[var3];
            var _closure2_slot22 = var40;
            var24 = var10[var35];
            var _closure2_slot23 = var24;
            var17 = _closure1_slot4;
            var15 = var17.useState;
            var10 = true;
            var15 = var15.bind(var17)(var10);
            var10 = _closure1_slot3;
            var10 = var10.bind(var5)(var15, var46);
            var18 = var10[var3];
            var45 = var10[var35];
            var _closure2_slot24 = var45;
            var15 = _closure1_slot4;
            var10 = var15.useState;
            var15 = var10.bind(var15)(var30);
            var10 = _closure1_slot3;
            var10 = var10.bind(var5)(var15, var46);
            var15 = var10[var3];
            var32 = var10[var35];
            var _closure2_slot25 = var32;
            var17 = _closure1_slot4;
            var10 = var17.useState;
            var17 = var10.bind(var17)(var3);
            var10 = _closure1_slot3;
            var10 = var10.bind(var5)(var17, var46);
            var34 = var10[var3];
            var _closure2_slot26 = var34;
            var10 = var10[var35];
            var _closure2_slot27 = var10;
            var17 = 11;
            var10 = var20[var17];
            var22 = var21.bind(var5)(var10);
            var10 = var22.useSharedValue;
            var10 = var10.bind(var22)(var30);
            var _closure2_slot28 = var10;
            var22 = var20[var17];
            var28 = var21.bind(var5)(var22);
            var22 = var28.useSharedValue;
            var44 = var22.bind(var28)(var30);
            var _closure2_slot29 = var44;
            var20 = var20[var17];
            var21 = var21.bind(var5)(var20);
            var20 = var21.useSharedValue;
            var42 = var20.bind(var21)(var3);
            var _closure2_slot30 = var42;
            var20 = var37.length;
            if(!(!(var20 > var35))) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var47 = new Array(0);
            _fun0002_ip = 15; continue _fun0002;
case 13:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var20 = 19;
            var20 = var22[var20];
            var20 = var21.bind(var5)(var20);
            var20 = var20.DismissibleContent;
            var21 = var20.BOUNTIES_SWIPE_UP_NUX;
            var20 = new Array(1);
            var20[0] = var21;
            var47 = var20;
case 15:
            var22 = _closure1_slot0;
            var28 = _closure1_slot2;
            var20 = 20;
            var20 = var28[var20];
            var21 = var22.bind(var5)(var20);
            var20 = var21.useSelectedDismissibleContent;
            var21 = var20.bind(var21)(var47);
            var20 = _closure1_slot3;
            var20 = var20.bind(var5)(var21, var46);
            var21 = var20[var3];
            var46 = var20[var35];
            _closure2_slot31 = var46;
            var20 = 19;
            var20 = var28[var20];
            var20 = var22.bind(var5)(var20);
            var20 = var20.DismissibleContent;
            var20 = var20.BOUNTIES_SWIPE_UP_NUX;
            var21 = var21 === var20;
            var20 = var3 === var34;
            if(!var20) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var20 = var21;
case 16:
            _closure2_slot32 = var20;
            if(!var14) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var14 = var20;
case 18:
            var35 = _closure1_slot4;
            var28 = var35.useMemo;
            var22 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.v4;
                var1 = var1.bind(var2)();
                return var1;
            };
            var21 = new Array(0);
            var21 = var28.bind(var35)(var22, var21);
            _closure2_slot33 = var21;
            var28 = _closure1_slot4;
            var22 = var28.useRef;
            var22 = var22.bind(var28)(var3);
            _closure2_slot34 = var22;
            var28 = _closure1_slot4;
            var22 = var28.useRef;
            var22 = var22.bind(var28)(var3);
            _closure2_slot35 = var22;
            var47 = _closure1_slot4;
            var35 = var47.useEffect;
            var28 = function() {
                var2 = _closure2_slot34;
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var22 = new Array(0);
            var22 = var35.bind(var47)(var28, var22);
            var35 = _closure1_slot4;
            var28 = var35.useCallback;
            var22 = new Array(1);
            var22[0] = var21;
            var21 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var6 = arg1;
                    var1 = _closure2_slot35;
                    var7 = var1.current;
                    if(!(var6 !== var7)) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                    var1 = _closure2_slot35;
                    var1['current'] = var6;
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var2 = var1.bind(var2)();
                    var1 = _closure2_slot34;
                    var1 = var1.current;
                    var4 = var2 - var1;
                    var1 = _closure2_slot34;
                    var1['current'] = var2;
                    var12 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 22;
                    var1 = var9[var1];
                    var10 = undefined;
                    var3 = var12.bind(var10)(var1);
                    var2 = var3.trackBountyVerticalScroll;
                    var1 = {};
                    var11 = 23;
                    var9 = var9[var11];
                    var9 = var12.bind(var10)(var9);
                    var9 = var9.BountyScrollingType;
                    var9 = var9.MANUAL;
                    var1['scrollingType'] = var9;
                    if(!(!(var6 > var7))) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var11];
                    var7 = var9.bind(var10)(var7);
                    var7 = var7.VerticalScrollingDirection;
                    var7 = var7.UP;
                    _fun0007_ip = 24; continue _fun0007;
case 22:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var11];
                    var8 = var9.bind(var10)(var8);
                    var8 = var8.VerticalScrollingDirection;
                    var7 = var8.DOWN;
case 24:
                    var1['scrollingDirection'] = var7;
                    var1['verticalScrollingPosition'] = var6;
                    var5 = _closure2_slot33;
                    var1['scrollSessionId'] = var5;
                    var1['timeWatchedPreScrollMs'] = var4;
                    var1 = var2.bind(var3)(var1);
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var35 = var28.bind(var35)(var21, var22);
            _closure2_slot36 = var35;
            var28 = _closure1_slot4;
            var22 = var28.useCallback;
            var21 = new Array(3);
            var21[0] = var46;
            var21[1] = var35;
            var21[2] = var20;
            var20 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = arg1;
                    var3 = _closure2_slot27;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var5);
                    var3 = _closure2_slot36;
                    var3 = var3.bind(var1)(var5);
                    var3 = _closure2_slot32;
                    if(!var3) { _fun0008_ip = 25; continue _fun0008 }
case 7:
                    var4 = 0;
                    var3 = var5 > var4;
case 25:
                    if(!var3) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                    var3 = _closure2_slot31;
                    var2 = _closure1_slot10;
                    var2 = var2.USER_DISMISS;
                    var2 = var3.bind(var1)(var2);
case 26:
                    return var1;
                }
            };
            var35 = var22.bind(var28)(var20, var21);
            _closure2_slot37 = var35;
            var47 = _closure1_slot0;
            var46 = _closure1_slot2;
            var20 = 24;
            var20 = var46[var20];
            var22 = var47.bind(var5)(var20);
            var21 = var22.useBountiesRecapOrbCount;
            var20 = {};
            var20['scrollY'] = var42;
            var20['lastBountyScrollOffset'] = var48;
            var20['recapRevealHeight'] = var2;
            var20['targetOrbAmount'] = var9;
            var20['enabled'] = var6;
            var20 = var21.bind(var22)(var20);
            _closure2_slot38 = var20;
            var28 = _closure1_slot4;
            var22 = var28.useEffect;
            var21 = new Array(2);
            var21[0] = var37;
            var21[1] = var34;
            var20 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot26;
                    var1 = var2[var1];
                    var2 = null;
                    if(!(var2 != var1)) { _fun0009_ip = 28; continue _fun0009 }
case 29:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 25;
                    var2 = var7[var2];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var2);
                    var3 = var4.markAdContentSeen;
                    var2 = 26;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.AdCreativeType;
                    var2 = var2.BOUNTY;
                    var5 = var1.id;
                    var1 = new Array(1);
                    var1[0] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var20 = var22.bind(var28)(var20, var21);
            var22 = _closure1_slot4;
            var21 = var22.useCallback;
            var20 = new Array(4);
            var20[0] = var37;
            var20[1] = var34;
            var20[2] = var19;
            var20[3] = var39;
            var19 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot26;
                    var9 = var2[var1];
                    var2 = null;
                    if(!(var2 != var9)) { _fun0010_ip = 30; continue _fun0010 }
case 31:
                    var6 = _closure1_slot6;
                    var3 = var6.getBountyVideoProgress;
                    var1 = var9.id;
                    var3 = var3.bind(var6)(var1);
                    var6 = var2 == var3;
                    var12 = undefined;
                    var1 = undefined;
                    if(var6) { _fun0010_ip = 26; continue _fun0010 }
case 32:
                    var1 = var3.maxTimestampSec;
case 26:
                    var6 = var2 != var1;
                    var8 = 0;
                    if(!var6) { _fun0010_ip = 33; continue _fun0010 }
case 34:
                    var8 = var1;
case 33:
                    var6 = var2 == var3;
                    var1 = undefined;
                    if(var6) { _fun0010_ip = 35; continue _fun0010 }
case 36:
                    var1 = var3.duration;
case 35:
                    var2 = var2 != var1;
                    var11 = 0;
                    if(!var2) { _fun0010_ip = 37; continue _fun0010 }
case 38:
                    var11 = var1;
case 37:
                    var1 = _closure2_slot9;
                    var7 = 1000;
                    var6 = var7 * var1;
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var1 = 22;
                    var1 = var13[var1];
                    var3 = var10.bind(var12)(var1);
                    var2 = var3.trackAdContentEvent;
                    var1 = {};
                    var9 = var9.id;
                    var1['adContentId'] = var9;
                    var9 = 26;
                    var9 = var13[var9];
                    var9 = var10.bind(var12)(var9);
                    var9 = var9.AdCreativeType;
                    var9 = var9.BOUNTY;
                    var1['adCreativeType'] = var9;
                    var5 = _closure1_slot9;
                    var5 = var5.AD_VIDEO_MODAL_CLOSED;
                    var1['event'] = var5;
                    var5 = {};
                    var9 = 23;
                    var9 = var13[var9];
                    var16 = var10.bind(var12)(var9);
                    var15 = var16.getQuestContentName;
                    var9 = 27;
                    var14 = var13[var9];
                    var14 = var10.bind(var12)(var14);
                    var14 = var14.QuestContent;
                    var14 = var14.VIDEO_MODAL_MOBILE;
                    var14 = var15.bind(var16)(var14);
                    var5['content_name'] = var14;
                    var9 = var13[var9];
                    var9 = var10.bind(var12)(var9);
                    var9 = var9.QuestContent;
                    var9 = var9.VIDEO_MODAL_MOBILE;
                    var5['content_id'] = var9;
                    var9 = 28;
                    var9 = var13[var9];
                    var10 = var10.bind(var12)(var9);
                    var9 = var10.formatVideoProgressRatio;
                    var9 = var9.bind(var10)(var8, var11);
                    var5['video_progress'] = var9;
                    var8 = var7 * var8;
                    var8 = var8 >= var6;
                    var5['threshold_met'] = var8;
                    var6 = var6 / var7;
                    var5['reward_timer_seconds'] = var6;
                    var1['properties'] = var5;
                    var4 = _closure2_slot1;
                    var1['sourceQuestContent'] = var4;
                    var1 = var2.bind(var3)(var1);
case 30:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 29;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideModal;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var21 = var21.bind(var22)(var19, var20);
            var28 = _closure1_slot4;
            var22 = var28.useCallback;
            var20 = new Array(1);
            var20[0] = var39;
            var19 = function() {
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 22;
                var3 = var4[var1];
                var1 = undefined;
                var6 = var9.bind(var1)(var3);
                var5 = var6.trackAdContentEvent;
                var3 = {};
                var7 = _closure1_slot7;
                var3['adContentId'] = var7;
                var7 = 26;
                var7 = var4[var7];
                var7 = var9.bind(var1)(var7);
                var7 = var7.AdCreativeType;
                var7 = var7.BOUNTY;
                var3['adCreativeType'] = var7;
                var7 = _closure1_slot9;
                var7 = var7.AD_VIDEO_MODAL_CLOSED;
                var3['event'] = var7;
                var7 = {};
                var8 = 23;
                var8 = var4[var8];
                var12 = var9.bind(var1)(var8);
                var11 = var12.getQuestContentName;
                var8 = 27;
                var10 = var4[var8];
                var10 = var9.bind(var1)(var10);
                var10 = var10.QuestContent;
                var10 = var10.BOUNTIES_END_INTERSTITIAL;
                var10 = var11.bind(var12)(var10);
                var7['content_name'] = var10;
                var8 = var4[var8];
                var8 = var9.bind(var1)(var8);
                var8 = var8.QuestContent;
                var8 = var8.BOUNTIES_END_INTERSTITIAL;
                var7['content_id'] = var8;
                var3['properties'] = var7;
                var7 = _closure2_slot1;
                var3['sourceQuestContent'] = var7;
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot1;
                var2 = 29;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideModal;
                var2 = var2.bind(var3)();
                return var1;
            };
            var19 = var22.bind(var28)(var19, var20);
            _closure2_slot39 = var19;
            var22 = _closure1_slot4;
            var20 = var22.useCallback;
            var19 = new Array(2);
            var19[0] = var7;
            var19[1] = var39;
            var7 = function() {
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 22;
                var3 = var7[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var3);
                var4 = var5.trackAdContentClicked;
                var3 = {};
                var2 = _closure1_slot7;
                var3['adContentId'] = var2;
                var2 = 26;
                var2 = var7[var2];
                var2 = var6.bind(var1)(var2);
                var2 = var2.AdCreativeType;
                var2 = var2.BOUNTY;
                var3['adCreativeType'] = var2;
                var2 = 27;
                var2 = var7[var2];
                var2 = var6.bind(var1)(var2);
                var2 = var2.QuestContent;
                var2 = var2.BOUNTIES_END_INTERSTITIAL;
                var3['questContent'] = var2;
                var2 = 23;
                var2 = var7[var2];
                var2 = var6.bind(var1)(var2);
                var2 = var2.QuestContentCTA;
                var2 = var2.BACK_TO_BOUNTIES;
                var3['questContentCTA'] = var2;
                var6 = _closure2_slot1;
                var3['sourceQuestContent'] = var6;
                var3 = var4.bind(var5)(var3);
                var2 = _closure2_slot18;
                var2 = var2.bind(var1)();
                return var1;
            };
            var7 = var20.bind(var22)(var7, var19);
            _closure2_slot40 = var7;
            var7 = var46[var17];
            var20 = var47.bind(var5)(var7);
            var19 = var20.useAnimatedScrollHandler;
            var7 = {};
            var22 = function rt(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var5 = arg1;
                    var4 = _closure2_slot30;
                    var3 = var4.set;
                    var2 = var5.contentOffset;
                    var2 = var2.y;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot29;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0011_ip = 39; continue _fun0011 }
case 12:
                    var3 = _closure2_slot28;
                    var2 = var3.set;
                    var4 = _closure1_slot20;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var5);
                    var1 = var2.bind(var3)(var1);
case 39:
                    var1 = undefined;
                    return var1;
                }
            };
            var28 = {};
            var28['scrollY'] = var42;
            var28['isDraggingSharedValue'] = var44;
            var28['isScrollingInBoundsSharedValue'] = var10;
            var49 = _closure1_slot20;
            var28['isScrollEventInBounds'] = var49;
            var22['__closure'] = var28;
            var28 = 7942598540397.0;
            var22['__workletHash'] = var28;
            var28 = _closure1_slot23;
            var22['__initData'] = var28;
            var7['onScroll'] = var22;
            var22 = function st(arg1) {
                var4 = _closure2_slot29;
                var3 = var4.set;
                var2 = true;
                var2 = var3.bind(var4)(var2);
                var4 = _closure2_slot28;
                var3 = var4.set;
                var5 = _closure1_slot20;
                var1 = undefined;
                var2 = arg1;
                var2 = var5.bind(var1)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var28 = {};
            var28['isDraggingSharedValue'] = var44;
            var28['isScrollingInBoundsSharedValue'] = var10;
            var49 = _closure1_slot20;
            var28['isScrollEventInBounds'] = var49;
            var22['__closure'] = var28;
            var28 = 14039038912528.0;
            var22['__workletHash'] = var28;
            var28 = _closure1_slot24;
            var22['__initData'] = var28;
            var7['onBeginDrag'] = var22;
            var22 = function lt() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var4 = _closure2_slot29;
                    var2 = var4.set;
                    var3 = false;
                    var2 = var2.bind(var4)(var3);
                    var2 = _closure1_slot13;
                    if(var2) { _fun0012_ip = 40; continue _fun0012 }
case 41:
                    var2 = _closure2_slot28;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
case 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var28 = {};
            var28['isDraggingSharedValue'] = var44;
            var44 = _closure1_slot13;
            var28['IS_ANDROID'] = var44;
            var28['isScrollingInBoundsSharedValue'] = var10;
            var22['__closure'] = var28;
            var28 = 9975335138319.0;
            var22['__workletHash'] = var28;
            var28 = _closure1_slot25;
            var22['__initData'] = var28;
            var7['onEndDrag'] = var22;
            var22 = function nt(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure2_slot14;
                    if(!var2) { _fun0013_ip = 42; continue _fun0013 }
case 43:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var4 = undefined;
                    var5 = var3.bind(var4)(var2);
                    var3 = var5.runOnJS;
                    var2 = _closure2_slot19;
                    var3 = var3.bind(var5)(var2);
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
case 42:
                    var3 = _closure2_slot28;
                    var2 = var3.set;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var28 = {};
            var28['showRecapPullZone'] = var6;
            var44 = var46[var17];
            var44 = var47.bind(var5)(var44);
            var44 = var44.runOnJS;
            var28['runOnJS'] = var44;
            var28['handleRecapMomentumEnd'] = var41;
            var28['isScrollingInBoundsSharedValue'] = var10;
            var22['__closure'] = var28;
            var28 = 13684210320337.0;
            var22['__workletHash'] = var28;
            var28 = _closure1_slot26;
            var22['__initData'] = var28;
            var7['onMomentumEnd'] = var22;
            var28 = var19.bind(var20)(var7);
            var7 = var46[var17];
            var22 = var47.bind(var5)(var7);
            var20 = var22.useAnimatedReaction;
            var19 = function it() {
                var1 = global;
                var4 = var1.Math;
                var3 = var4.min;
                var7 = var1.Math;
                var6 = var7.max;
                var8 = var1.Math;
                var5 = var8.round;
                var9 = _closure2_slot30;
                var2 = var9.get;
                var9 = var2.bind(var9)();
                var2 = _closure2_slot12;
                var2 = var9 / var2;
                var5 = var5.bind(var8)(var2);
                var2 = 0;
                var2 = var6.bind(var7)(var5, var2);
                var1 = _closure2_slot13;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = {};
            var7['scrollY'] = var42;
            var7['slotHeight'] = var29;
            var7['lastBountyIndex'] = var25;
            var19['__closure'] = var7;
            var7 = 14048843158960.0;
            var19['__workletHash'] = var7;
            var7 = _closure1_slot27;
            var19['__initData'] = var7;
            var7 = function at(arg1, arg2) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0014_ip = 42; continue _fun0014 }
case 43:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot37;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 42:
                    var1 = undefined;
                    return var1;
                }
            };
            var25 = {};
            var41 = var46[var17];
            var41 = var47.bind(var5)(var41);
            var41 = var41.runOnJS;
            var25['runOnJS'] = var41;
            var25['commitSwipe'] = var35;
            var7['__closure'] = var25;
            var25 = 14015091539518.0;
            var7['__workletHash'] = var25;
            var25 = _closure1_slot28;
            var7['__initData'] = var25;
            var7 = var20.bind(var22)(var19, var7);
            var7 = var46[var17];
            var22 = var47.bind(var5)(var7);
            var20 = var22.useAnimatedReaction;
            var19 = function ct() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = _closure2_slot14;
                    if(!var1) { _fun0015_ip = 44; continue _fun0015 }
case 43:
                    var4 = _closure2_slot30;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var4 = _closure2_slot16;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 18;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var2 = var2.RECAP_SNAP_EPSILON;
                    var2 = var4 - var2;
                    var1 = var3 >= var2;
case 44:
                    return var1;
                }
            };
            var7 = {};
            var7['showRecapPullZone'] = var6;
            var7['scrollY'] = var42;
            var7['lastBountyScrollOffset'] = var48;
            var25 = var46[var43];
            var25 = var47.bind(var5)(var25);
            var25 = var25.RECAP_SNAP_EPSILON;
            var7['RECAP_SNAP_EPSILON'] = var25;
            var19['__closure'] = var7;
            var7 = 6584708256992.0;
            var19['__workletHash'] = var7;
            var7 = _closure1_slot29;
            var19['__initData'] = var7;
            var7 = function ut(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0016_ip = 42; continue _fun0016 }
case 43:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot25;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 42:
                    var1 = undefined;
                    return var1;
                }
            };
            var25 = {};
            var35 = var46[var17];
            var35 = var47.bind(var5)(var35);
            var35 = var35.runOnJS;
            var25['runOnJS'] = var35;
            var25['setShowRecapFooter'] = var32;
            var7['__closure'] = var25;
            var25 = 10788669301891.0;
            var7['__workletHash'] = var25;
            var25 = _closure1_slot30;
            var7['__initData'] = var25;
            var7 = var20.bind(var22)(var19, var7);
            var7 = var46[var17];
            var22 = var47.bind(var5)(var7);
            var20 = var22.useAnimatedReaction;
            var19 = function dt() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = _closure2_slot14;
                    if(!var1) { _fun0017_ip = 45; continue _fun0017 }
case 43:
                    var4 = _closure2_slot30;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = _closure2_slot16;
                    var1 = var3 > var2;
case 45:
                    return var1;
                }
            };
            var7 = {};
            var7['showRecapPullZone'] = var6;
            var7['scrollY'] = var42;
            var7['lastBountyScrollOffset'] = var48;
            var19['__closure'] = var7;
            var7 = 6186370630693.0;
            var19['__workletHash'] = var7;
            var7 = _closure1_slot31;
            var19['__initData'] = var7;
            var7 = function _t(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0018_ip = 42; continue _fun0018 }
case 43:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot21;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 42:
                    var1 = undefined;
                    return var1;
                }
            };
            var25 = {};
            var32 = var46[var17];
            var32 = var47.bind(var5)(var32);
            var32 = var32.runOnJS;
            var25['runOnJS'] = var32;
            var25['setIsRecapPageRevealed'] = var26;
            var7['__closure'] = var25;
            var25 = 12713474352874.0;
            var7['__workletHash'] = var25;
            var25 = _closure1_slot32;
            var7['__initData'] = var25;
            var7 = var20.bind(var22)(var19, var7);
            var7 = var46[var17];
            var22 = var47.bind(var5)(var7);
            var20 = var22.useAnimatedReaction;
            var19 = function ht() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = _closure2_slot14;
                    if(!var1) { _fun0019_ip = 44; continue _fun0019 }
case 43:
                    var4 = _closure2_slot30;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var4 = _closure2_slot17;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 18;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var2 = var2.RECAP_SNAP_EPSILON;
                    var2 = var4 - var2;
                    var1 = var3 >= var2;
case 44:
                    return var1;
                }
            };
            var7 = {};
            var7['showRecapPullZone'] = var6;
            var7['scrollY'] = var42;
            var7['fullRecapScrollOffset'] = var23;
            var23 = var46[var43];
            var23 = var47.bind(var5)(var23);
            var23 = var23.RECAP_SNAP_EPSILON;
            var7['RECAP_SNAP_EPSILON'] = var23;
            var19['__closure'] = var7;
            var7 = 5669564400667.0;
            var19['__workletHash'] = var7;
            var7 = _closure1_slot33;
            var19['__initData'] = var7;
            var7 = function St(arg1, arg2) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0020_ip = 42; continue _fun0020 }
case 43:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot23;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 42:
                    var1 = undefined;
                    return var1;
                }
            };
            var23 = {};
            var25 = var46[var17];
            var25 = var47.bind(var5)(var25);
            var25 = var25.runOnJS;
            var23['runOnJS'] = var25;
            var23['setIsRecapPageOnTop'] = var24;
            var7['__closure'] = var23;
            var23 = 8102193741774.0;
            var7['__workletHash'] = var23;
            var23 = _closure1_slot34;
            var7['__initData'] = var23;
            var7 = var20.bind(var22)(var19, var7);
            var22 = _closure1_slot4;
            var20 = var22.useMemo;
            var19 = new Array(2);
            var19[0] = var2;
            var19[1] = var6;
            var7 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var3 = _closure2_slot14;
                    var1 = null;
                    if(!var3) { _fun0021_ip = 46; continue _fun0021 }
case 47:
                    var5 = _closure1_slot11;
                    var4 = _closure1_slot42;
                    var3 = {};
                    var2 = _closure2_slot15;
                    var3['height'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
case 46:
                    return var1;
                }
            };
            var32 = var20.bind(var22)(var7, var19);
            var22 = _closure1_slot4;
            var20 = var22.useMemo;
            var7 = var8.listWrapper;
            var19 = new Array(2);
            var19[0] = var7;
            var19[1] = var4;
            var7 = function() {
                var1 = _closure2_slot2;
                var2 = var1.listWrapper;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var4 = 0;
                var2['top'] = var4;
                var3 = _closure2_slot5;
                var4 = var3.left;
                var2['left'] = var4;
                var4 = var3.width;
                var2['width'] = var4;
                var4 = var3.top;
                var3 = var3.height;
                var4 = var4 + var3;
                var3 = 97;
                var3 = var4 + var3;
                var2['height'] = var3;
                var1[1] = var2;
                return var1;
            };
            var7 = var20.bind(var22)(var7, var19);
            var23 = _closure1_slot4;
            var22 = var23.useMemo;
            var19 = var4.top;
            var20 = new Array(1);
            var20[0] = var19;
            var19 = function() {
                var1 = {};
                var2 = _closure2_slot5;
                var2 = var2.top;
                var1['paddingTop'] = var2;
                var2 = 97;
                var1['paddingBottom'] = var2;
                return var1;
            };
            var26 = var22.bind(var23)(var19, var20);
            var23 = _closure1_slot4;
            var22 = var23.useMemo;
            var19 = var4.width;
            var20 = new Array(2);
            var20[0] = var19;
            var19 = var4.height;
            var20[1] = var19;
            var19 = function() {
                var1 = {};
                var2 = _closure2_slot5;
                var3 = var2.width;
                var1['width'] = var3;
                var2 = var2.height;
                var1['height'] = var2;
                return var1;
            };
            var41 = var22.bind(var23)(var19, var20);
            _closure2_slot41 = var41;
            var23 = _closure1_slot4;
            var22 = var23.useMemo;
            var19 = var8.closeButton;
            var20 = new Array(4);
            var20[0] = var19;
            var19 = var4.top;
            var20[1] = var19;
            var19 = var4.left;
            var20[2] = var19;
            var19 = var4.width;
            var20[3] = var19;
            var19 = function() {
                var1 = _closure2_slot2;
                var2 = var1.closeButton;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var4 = _closure2_slot5;
                var9 = var4.top;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 9;
                var8 = var7[var3];
                var5 = undefined;
                var8 = var6.bind(var5)(var8);
                var8 = var8.space;
                var8 = var8.PX_8;
                var8 = var9 + var8;
                var2['top'] = var8;
                var8 = var4.left;
                var4 = var4.width;
                var8 = var8 + var4;
                var4 = var7[var3];
                var4 = var6.bind(var5)(var4);
                var4 = var4.space;
                var4 = var4.PX_32;
                var4 = var8 - var4;
                var3 = var7[var3];
                var3 = var6.bind(var5)(var3);
                var3 = var3.space;
                var3 = var3.PX_8;
                var3 = var4 - var3;
                var2['left'] = var3;
                var1[1] = var2;
                return var1;
            };
            var20 = var22.bind(var23)(var19, var20);
            var23 = _closure1_slot4;
            var22 = var23.useMemo;
            var19 = new Array(6);
            var19[0] = var40;
            var24 = var8.recapPage;
            var19[1] = var24;
            var24 = var4.top;
            var19[2] = var24;
            var24 = var4.left;
            var19[3] = var24;
            var24 = var4.width;
            var19[4] = var24;
            var19[5] = var11;
            var11 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var2 = var1.recapPage;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var4 = _closure2_slot5;
                    var5 = var4.top;
                    var2['top'] = var5;
                    var5 = var4.left;
                    var2['left'] = var5;
                    var5 = var4.width;
                    var2['width'] = var5;
                    var5 = _closure2_slot3;
                    var4 = var4.top;
                    var4 = var5 - var4;
                    var2['height'] = var4;
                    var4 = _closure2_slot22;
                    var3 = null;
                    if(!var4) { _fun0022_ip = 48; continue _fun0022 }
case 6:
                    var4 = {};
                    var5 = _closure1_slot14;
                    var4['zIndex'] = var5;
                    var3 = var4;
case 48:
                    var7 = var2;
                    var6 = var3;
                    var3 = copyDataProperties(var7, var6);
                    var1[1] = var2;
                    return var1;
                }
            };
            var25 = var22.bind(var23)(var11, var19);
            var11 = var46[var17];
            var22 = var47.bind(var5)(var11);
            var19 = var22.useDerivedValue;
            var11 = function ft() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.getRevealProgress;
                var3 = _closure2_slot30;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = _closure2_slot16;
                var1 = _closure2_slot15;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var23 = {};
            var24 = var46[var43];
            var24 = var47.bind(var5)(var24);
            var24 = var24.getRevealProgress;
            var23['getRevealProgress'] = var24;
            var23['scrollY'] = var42;
            var23['lastBountyScrollOffset'] = var48;
            var23['recapRevealHeight'] = var2;
            var11['__closure'] = var23;
            var23 = 8427964721554.0;
            var11['__workletHash'] = var23;
            var23 = _closure1_slot35;
            var11['__initData'] = var23;
            var44 = var19.bind(var22)(var11);
            _closure2_slot42 = var44;
            var11 = var46[var17];
            var22 = var47.bind(var5)(var11);
            var19 = var22.useAnimatedStyle;
            var11 = function Rt() {
                var1 = {};
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 11;
                var5 = var8[var2];
                var3 = undefined;
                var7 = var4.bind(var3)(var5);
                var6 = var7.interpolate;
                var9 = _closure2_slot42;
                var5 = var9.get;
                var5 = var5.bind(var9)();
                var2 = var8[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.Extrapolation;
                var10 = var2.CLAMP;
                var12 = [0, 1];
                var11 = [0, 1];
                var14 = var7;
                var13 = var5;
                var2 = var14[var6](var13, var12, var11, var10, var9);
                var1['opacity'] = var2;
                return var1;
            };
            var23 = {};
            var24 = var46[var17];
            var24 = var47.bind(var5)(var24);
            var24 = var24.interpolate;
            var23['interpolate'] = var24;
            var23['recapPullProgress'] = var44;
            var24 = var46[var17];
            var24 = var47.bind(var5)(var24);
            var24 = var24.Extrapolation;
            var23['Extrapolation'] = var24;
            var11['__closure'] = var23;
            var23 = 1497321349449.0;
            var11['__workletHash'] = var23;
            var23 = _closure1_slot36;
            var11['__initData'] = var23;
            var24 = var19.bind(var22)(var11);
            var11 = var46[var17];
            var22 = var47.bind(var5)(var11);
            var19 = var22.useAnimatedStyle;
            var11 = function Pt() {
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 11;
                var4 = var9[var2];
                var3 = undefined;
                var7 = var8.bind(var3)(var4);
                var6 = var7.interpolate;
                var5 = _closure2_slot42;
                var4 = var5.get;
                var5 = var4.bind(var5)();
                var11 = _closure1_slot17;
                var4 = new Array(2);
                var4[0] = var11;
                var10 = _closure1_slot18;
                var4[1] = var10;
                var2 = var9[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.Extrapolation;
                var12 = var2.CLAMP;
                var13 = [1, 0];
                var16 = var7;
                var15 = var5;
                var14 = var4;
                var2 = var16[var6](var15, var14, var13, var12, var11);
                var1['opacity'] = var2;
                return var1;
            };
            var23 = {};
            var35 = var46[var17];
            var35 = var47.bind(var5)(var35);
            var35 = var35.interpolate;
            var23['interpolate'] = var35;
            var23['recapPullProgress'] = var44;
            var35 = _closure1_slot17;
            var23['FOOTER_FADE_START_PROGRESS'] = var35;
            var35 = _closure1_slot18;
            var23['FOOTER_FADE_END_PROGRESS'] = var35;
            var35 = var46[var17];
            var35 = var47.bind(var5)(var35);
            var35 = var35.Extrapolation;
            var23['Extrapolation'] = var35;
            var11['__closure'] = var23;
            var23 = 3685190194249.0;
            var11['__workletHash'] = var23;
            var23 = _closure1_slot37;
            var11['__initData'] = var23;
            var19 = var19.bind(var22)(var11);
            var11 = var46[var17];
            var23 = var47.bind(var5)(var11);
            var22 = var23.useAnimatedStyle;
            var11 = function vt() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var3 = _closure2_slot30;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var4 = _closure2_slot16;
                    var5 = _closure2_slot12;
                    var2 = 2;
                    var2 = var5 / var2;
                    var2 = var4 - var2;
                    if(!(!(var3 >= var2))) { _fun0023_ip = 49; continue _fun0023 }
case 25:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.getRevealProgress;
                    var3 = _closure2_slot30;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
                    var3 = _closure2_slot15;
                    var2 = 0;
                    var7 = var5.bind(var6)(var4, var2, var3);
                    _fun0023_ip = 50; continue _fun0023;
case 49:
                    var2 = _closure2_slot42;
                    var1 = var2.get;
                    var7 = var1.bind(var2)();
case 50:
                    var1 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 11;
                    var4 = var9[var2];
                    var3 = undefined;
                    var6 = var8.bind(var3)(var4);
                    var5 = var6.interpolate;
                    var11 = _closure1_slot17;
                    var4 = new Array(2);
                    var4[0] = var11;
                    var10 = _closure1_slot18;
                    var4[1] = var10;
                    var2 = var9[var2];
                    var2 = var8.bind(var3)(var2);
                    var2 = var2.Extrapolation;
                    var12 = var2.CLAMP;
                    var13 = [1, 0];
                    var16 = var6;
                    var15 = var7;
                    var14 = var4;
                    var2 = var16[var5](var15, var14, var13, var12, var11);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var35 = {};
            var35['scrollY'] = var42;
            var35['lastBountyScrollOffset'] = var48;
            var35['slotHeight'] = var29;
            var35['recapPullProgress'] = var44;
            var43 = var46[var43];
            var43 = var47.bind(var5)(var43);
            var43 = var43.getRevealProgress;
            var35['getRevealProgress'] = var43;
            var35['recapRevealHeight'] = var2;
            var43 = var46[var17];
            var43 = var47.bind(var5)(var43);
            var43 = var43.interpolate;
            var35['interpolate'] = var43;
            var43 = _closure1_slot17;
            var35['FOOTER_FADE_START_PROGRESS'] = var43;
            var43 = _closure1_slot18;
            var35['FOOTER_FADE_END_PROGRESS'] = var43;
            var43 = var46[var17];
            var43 = var47.bind(var5)(var43);
            var43 = var43.Extrapolation;
            var35['Extrapolation'] = var43;
            var11['__closure'] = var35;
            var35 = 15092194442650.0;
            var11['__workletHash'] = var35;
            var35 = _closure1_slot38;
            var11['__initData'] = var35;
            var11 = var22.bind(var23)(var11);
            var22 = var46[var17];
            var43 = var47.bind(var5)(var22);
            var35 = var43.useAnimatedReaction;
            var23 = function Ct() {
                var2 = _closure2_slot42;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = _closure1_slot18;
                var1 = var2 < var1;
                return var1;
            };
            var22 = {};
            var22['recapPullProgress'] = var44;
            var44 = _closure1_slot18;
            var22['FOOTER_FADE_END_PROGRESS'] = var44;
            var23['__closure'] = var22;
            var22 = 7847901178403.0;
            var23['__workletHash'] = var22;
            var22 = _closure1_slot39;
            var23['__initData'] = var22;
            var22 = function Bt(arg1, arg2) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0024_ip = 42; continue _fun0024 }
case 43:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot24;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 42:
                    var1 = undefined;
                    return var1;
                }
            };
            var44 = {};
            var46 = var46[var17];
            var46 = var47.bind(var5)(var46);
            var46 = var46.runOnJS;
            var44['runOnJS'] = var46;
            var44['setIsCloseButtonPressable'] = var45;
            var22['__closure'] = var44;
            var44 = 13255883555182.0;
            var22['__workletHash'] = var44;
            var44 = _closure1_slot40;
            var22['__initData'] = var44;
            var22 = var35.bind(var43)(var23, var22);
            var35 = _closure1_slot4;
            var23 = var35.useCallback;
            var22 = new Array(9);
            var22[0] = var29;
            var22[1] = var42;
            var22[2] = var41;
            var22[3] = var39;
            var41 = var4.width;
            var22[4] = var41;
            var41 = var4.height;
            var22[5] = var41;
            var22[6] = var34;
            var22[7] = var33;
            var22[8] = var10;
            var10 = function(arg1) {
                var1 = arg1;
                var5 = var1.item;
                var11 = var1.index;
                var4 = _closure1_slot11;
                var3 = _closure1_slot43;
                var2 = {};
                var2['index'] = var11;
                var6 = _closure2_slot12;
                var2['slotHeight'] = var6;
                var6 = _closure2_slot30;
                var2['scrollY'] = var6;
                var6 = _closure2_slot41;
                var2['style'] = var6;
                var8 = _closure1_slot11;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 30;
                var6 = var6[var1];
                var1 = undefined;
                var6 = var7.bind(var1)(var6);
                var7 = var6.BountiesScrollVideoItem;
                var6 = {};
                var6['bounty'] = var5;
                var10 = _closure2_slot1;
                var6['sourceQuestContent'] = var10;
                var10 = _closure2_slot5;
                var12 = var10.width;
                var6['width'] = var12;
                var10 = var10.height;
                var6['height'] = var10;
                var10 = _closure2_slot26;
                var10 = var11 === var10;
                var6['isActive'] = var10;
                var10 = _closure2_slot20;
                var6['isRecapPageRevealed'] = var10;
                var9 = _closure2_slot28;
                var6['isScrollingInBoundsSharedValue'] = var9;
                var5 = var5.id;
                var5 = var8.bind(var1)(var7, var6, var5);
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var35 = var23.bind(var35)(var10, var22);
            var23 = _closure1_slot4;
            var22 = var23.useMemo;
            var10 = new Array(4);
            var10[0] = var34;
            var10[1] = var33;
            var33 = var4.width;
            var10[2] = var33;
            var4 = var4.height;
            var10[3] = var4;
            var4 = function() {
                var1 = {};
                var3 = _closure2_slot26;
                var1['activeIndex'] = var3;
                var3 = _closure2_slot20;
                var1['isRecapPageRevealed'] = var3;
                var2 = _closure2_slot5;
                var3 = var2.width;
                var1['width'] = var3;
                var2 = var2.height;
                var1['height'] = var2;
                return var1;
            };
            var34 = var22.bind(var23)(var4, var10);
            var22 = _closure1_slot4;
            var10 = var22.useCallback;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function(arg1) {
                var2 = _closure2_slot11;
                var1 = arg1;
                var1['size'] = var2;
                var1 = undefined;
                return var1;
            };
            var33 = var10.bind(var22)(var2, var4);
            var2 = var37.length;
            if(!(var3 !== var2)) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            if(var14) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var10 = null;
            if(!var15) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var4 = _closure1_slot11;
            var3 = _closure1_slot0;
            var22 = _closure1_slot2;
            var2 = 32;
            var2 = var22[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.BountiesScrollRecapFooter;
            var2 = {};
            var2['orbAmount'] = var9;
            var10 = var4.bind(var5)(var3, var2);
            _fun0002_ip = 55; continue _fun0002;
case 53:
            var4 = _closure1_slot11;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 31;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var10 = var4.bind(var5)(var3, var2);
case 55:
            var4 = _closure1_slot12;
            var3 = _closure1_slot5;
            var2 = {};
            var8 = var8.root;
            var2['style'] = var8;
            var8 = null;
            if(!var6) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            var22 = _closure1_slot11;
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var17];
            var6 = var9.bind(var5)(var6);
            var9 = var6.View;
            var6 = {};
            var23 = new Array(2);
            var23[0] = var25;
            var23[1] = var24;
            var6['style'] = var23;
            var23 = 'none';
            if(!var40) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var23 = 'box-none';
case 59:
            var6['pointerEvents'] = var23;
            var25 = _closure1_slot11;
            var42 = _closure1_slot0;
            var43 = _closure1_slot2;
            var23 = 33;
            var23 = var43[var23];
            var23 = var42.bind(var5)(var23);
            var24 = var23.QuestContentImpressionTrackerNative;
            var23 = {};
            var41 = _closure1_slot7;
            var23['adContentId'] = var41;
            var41 = 26;
            var41 = var43[var41];
            var41 = var42.bind(var5)(var41);
            var41 = var41.AdCreativeType;
            var41 = var41.BOUNTY;
            var23['adCreativeType'] = var41;
            var41 = 27;
            var41 = var43[var41];
            var41 = var42.bind(var5)(var41);
            var41 = var41.QuestContent;
            var41 = var41.BOUNTIES_END_INTERSTITIAL;
            var23['questContent'] = var41;
            var23['overrideVisibility'] = var40;
            var23['sourceQuestContent'] = var39;
            var39 = function children() {
                var4 = _closure1_slot11;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 34;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.BountiesScrollRecapPage;
                var1 = {};
                var6 = _closure2_slot38;
                var1['orbAmount'] = var6;
                var6 = _closure2_slot40;
                var1['onBackToBounties'] = var6;
                var5 = _closure2_slot39;
                var1['onClose'] = var5;
                var5 = {};
                var6 = 1;
                var5['flex'] = var6;
                var1['style'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var23['children'] = var39;
            var23 = var25.bind(var5)(var24, var23);
            var6['children'] = var23;
            var8 = var22.bind(var5)(var9, var6);
case 57:
            var6 = new Array(4);
            var6[0] = var8;
            var22 = _closure1_slot11;
            var9 = _closure1_slot5;
            var8 = {};
            var8['style'] = var7;
            var25 = _closure1_slot11;
            var24 = _closure1_slot0;
            var7 = _closure1_slot2;
            var23 = 35;
            var23 = var7[var23];
            var23 = var24.bind(var5)(var23);
            var24 = var23.AnimatedFlashList;
            var23 = {};
            var23['ref'] = var38;
            var23['data'] = var37;
            var36 = function keyExtractor(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var23['keyExtractor'] = var36;
            var23['renderItem'] = var35;
            var23['extraData'] = var34;
            var23['overrideItemLayout'] = var33;
            var33 = _closure1_slot41;
            var23['ItemSeparatorComponent'] = var33;
            var23['ListFooterComponent'] = var32;
            var23['snapToOffsets'] = var31;
            var23['snapToEnd'] = var30;
            var23['estimatedItemSize'] = var29;
            var31 = 0.85;
            var23['decelerationRate'] = var31;
            var23['showsVerticalScrollIndicator'] = var30;
            var23['drawDistance'] = var29;
            var23['onScroll'] = var28;
            var23['scrollEventThrottle'] = var27;
            var23['contentContainerStyle'] = var26;
            var23 = var25.bind(var5)(var24, var23);
            var8['children'] = var23;
            var8 = var22.bind(var5)(var9, var8);
            var6[1] = var8;
            var9 = _closure1_slot11;
            var8 = _closure1_slot1;
            var7 = var7[var17];
            var7 = var8.bind(var5)(var7);
            var8 = var7.View;
            var7 = {};
            var17 = new Array(2);
            var17[0] = var20;
            var17[1] = var19;
            var7['style'] = var17;
            var17 = 'none';
            if(!var18) { _fun0002_ip = 61; continue _fun0002 }
case 62:
            var17 = 'box-none';
case 61:
            var7['pointerEvents'] = var17;
            var17 = null;
            if(!var18) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var20 = _closure1_slot11;
            var19 = _closure1_slot1;
            var22 = _closure1_slot2;
            var18 = 36;
            var18 = var22[var18];
            var19 = var19.bind(var5)(var18);
            var18 = {};
            var18['onPress'] = var21;
            var17 = var20.bind(var5)(var19, var18);
case 63:
            var7['children'] = var17;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var9 = _closure1_slot11;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var16];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            if(var14) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var14 = var15;
case 65:
            var7['visible'] = var14;
            var7['onContentLayout'] = var13;
            var12 = _closure1_slot14;
            var7['zIndex'] = var12;
            var7['opacityStyle'] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[3] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 51:
            return var1;
        }
    };
    var _closure1_slot44 = var1;
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
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.View;
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID;
    var _closure1_slot7 = var9;
    var8 = var8.QuestsExperimentLocations;
    var _closure1_slot8 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AnalyticEvents;
    var _closure1_slot9 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ContentDismissActionType;
    var _closure1_slot10 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.jsx;
    var _closure1_slot11 = var9;
    var8 = var8.jsxs;
    var _closure1_slot12 = var8;
    var8 = 8;
    var8 = var6[var8];
    var9 = var5.bind(var1)(var8);
    var8 = var9.isAndroid;
    var8 = var8.bind(var9)();
    var _closure1_slot13 = var8;
    var _closure1_slot14 = var4;
    var4 = 0.5625;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.space;
    var4 = var4.PX_8;
    var _closure1_slot16 = var4;
    var4 = 0.05;
    var _closure1_slot17 = var4;
    var4 = 0.1;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = 'function isScrollEventInBounds_BountiesModalContentScrollTsx1(event){const maxOffset=Math.max(0,event.contentSize.height-event.layoutMeasurement.height);return event.contentOffset.y>=0&&event.contentOffset.y<=maxOffset;}';
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = function() {
        var1 = function isScrollEventInBounds(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var2 = arg1;
                var1 = global;
                var5 = var1.Math;
                var3 = var5.max;
                var1 = var2.contentSize;
                var4 = var1.height;
                var1 = var2.layoutMeasurement;
                var1 = var1.height;
                var1 = var4 - var1;
                var4 = 0;
                var3 = var3.bind(var5)(var4, var1);
                var1 = var2.contentOffset;
                var1 = var1.y;
                var1 = var1 >= var4;
                if(!var1) { _fun0025_ip = 67; continue _fun0025 }
case 5:
                var2 = var2.contentOffset;
                var2 = var2.y;
                var1 = var2 <= var3;
case 67:
                return var1;
            }
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 14148486927190.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot19;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot20 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {};
        var3 = 1;
        var2['flex'] = var3;
        var1['root'] = var2;
        var3 = 'absolute';
        var2 = {'position': 'absolute', 'zIndex': 0};
        var1['recapPage'] = var2;
        var2 = {'position': 'absolute', 'zIndex': 1};
        var1['listWrapper'] = var2;
        var2 = {};
        var2['position'] = var3;
        var3 = _closure1_slot14;
        var2['zIndex'] = var3;
        var1['closeButton'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot21 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx2(){const{scrollY,index,slotHeight,interpolate,FADE_DEADBAND,Extrapolation}=this.__closure;const distance=Math.abs(scrollY.get()-index*slotHeight)/slotHeight;return{opacity:interpolate(distance,[0,FADE_DEADBAND,1],[1,1,0],Extrapolation.CLAMP)};}';
    var4['code'] = var7;
    var _closure1_slot22 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx3(event){const{scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;scrollY.set(event.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}}';
    var4['code'] = var7;
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx4(event){const{isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}';
    var4['code'] = var7;
    var _closure1_slot24 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx5(){const{isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue}=this.__closure;isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}}';
    var4['code'] = var7;
    var _closure1_slot25 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx6(event){const{showRecapPullZone,runOnJS,handleRecapMomentumEnd,isScrollingInBoundsSharedValue}=this.__closure;if(showRecapPullZone){runOnJS(handleRecapMomentumEnd)(event);}isScrollingInBoundsSharedValue.set(false);}';
    var4['code'] = var7;
    var _closure1_slot26 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx7(){const{scrollY,slotHeight,lastBountyIndex}=this.__closure;return Math.min(Math.max(Math.round(scrollY.get()/slotHeight),0),lastBountyIndex);}';
    var4['code'] = var7;
    var _closure1_slot27 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx8(next,prev){const{runOnJS,commitSwipe}=this.__closure;if(next!==prev){runOnJS(commitSwipe)(next);}}';
    var4['code'] = var7;
    var _closure1_slot28 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx9(){const{showRecapPullZone,scrollY,lastBountyScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=lastBountyScrollOffset-RECAP_SNAP_EPSILON;}';
    var4['code'] = var7;
    var _closure1_slot29 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx10(show,previousShow){const{runOnJS,setShowRecapFooter}=this.__closure;if(show!==previousShow){runOnJS(setShowRecapFooter)(show);}}';
    var4['code'] = var7;
    var _closure1_slot30 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx11(){const{showRecapPullZone,scrollY,lastBountyScrollOffset}=this.__closure;return showRecapPullZone&&scrollY.get()>lastBountyScrollOffset;}';
    var4['code'] = var7;
    var _closure1_slot31 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx12(revealed,previousRevealed){const{runOnJS,setIsRecapPageRevealed}=this.__closure;if(revealed!==previousRevealed){runOnJS(setIsRecapPageRevealed)(revealed);}}';
    var4['code'] = var7;
    var _closure1_slot32 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx13(){const{showRecapPullZone,scrollY,fullRecapScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=fullRecapScrollOffset-RECAP_SNAP_EPSILON;}';
    var4['code'] = var7;
    var _closure1_slot33 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx14(onTop,previousOnTop){const{runOnJS,setIsRecapPageOnTop}=this.__closure;if(onTop!==previousOnTop){runOnJS(setIsRecapPageOnTop)(onTop);}}';
    var4['code'] = var7;
    var _closure1_slot34 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx15(){const{getRevealProgress,scrollY,lastBountyScrollOffset,recapRevealHeight}=this.__closure;return getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight);}';
    var4['code'] = var7;
    var _closure1_slot35 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx16(){const{interpolate,recapPullProgress,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[0,1],[0,1],Extrapolation.CLAMP)};}';
    var4['code'] = var7;
    var _closure1_slot36 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx17(){const{interpolate,recapPullProgress,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}';
    var4['code'] = var7;
    var _closure1_slot37 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx18(){const{scrollY,lastBountyScrollOffset,slotHeight,recapPullProgress,getRevealProgress,recapRevealHeight,interpolate,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;const progress=scrollY.get()>=lastBountyScrollOffset-slotHeight/2?recapPullProgress.get():getRevealProgress(scrollY.get(),0,recapRevealHeight);return{opacity:interpolate(progress,[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}';
    var4['code'] = var7;
    var _closure1_slot38 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx19(){const{recapPullProgress,FOOTER_FADE_END_PROGRESS}=this.__closure;return recapPullProgress.get()<FOOTER_FADE_END_PROGRESS;}';
    var4['code'] = var7;
    var _closure1_slot39 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx20(pressable,previousPressable){const{runOnJS,setIsCloseButtonPressable}=this.__closure;if(pressable!==previousPressable){runOnJS(setIsCloseButtonPressable)(pressable);}}';
    var4['code'] = var7;
    var _closure1_slot40 = var4;
    var4 = 39;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BountiesModalContentScroll(arg1) {
        var1 = arg1;
        var9 = var1.bountyId;
        var8 = var1.sourceQuestContent;
        var4 = _closure1_slot11;
        var7 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 37;
        var1 = var10[var1];
        var3 = undefined;
        var1 = var7.bind(var3)(var1);
        var2 = var1.ThemeContextProvider;
        var1 = {};
        var6 = 38;
        var6 = var10[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.ThemeTypes;
        var6 = var6.DARKER;
        var1['theme'] = var6;
        var7 = _closure1_slot11;
        var6 = _closure1_slot44;
        var5 = {};
        var5['initialBountyId'] = var9;
        var5['sourceQuestContent'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
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
            var5 = _closure1_slot12;
            var4 = _closure1_slot6;
            var3 = {};
            var2 = {};
            var6 = _closure1_slot17;
            var2['height'] = var6;
            var3['style'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
case 2:
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var1 = function BountiesRecapPullZone(arg1) {
        var1 = arg1;
        var5 = var1.height;
        var4 = _closure1_slot12;
        var3 = _closure1_slot6;
        var2 = {};
        var1 = {};
        var1['height'] = var5;
        var2['style'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot45 = var1;
    var1 = function BountiesScrollVideoItemContainer(arg1) {
        var1 = arg1;
        var14 = var1.index;
        var _closure2_slot0 = var14;
        var13 = var1.slotHeight;
        var _closure2_slot1 = var13;
        var15 = var1.scrollY;
        var _closure2_slot2 = var15;
        var8 = var1.style;
        var11 = var1.isPeekEnabled;
        var _closure2_slot3 = var11;
        var5 = var1.children;
        var12 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 11;
        var7 = var6[var1];
        var4 = undefined;
        var9 = var12.bind(var4)(var7);
        var7 = var9.useAnimatedStyle;
        var3 = function c() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot2;
                var2 = var3.get;
                var4 = var2.bind(var3)();
                var2 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = var2 * var3;
                var2 = var4 - var2;
                var2 = var2 / var3;
                var3 = global;
                var4 = var3.Math;
                var3 = var4.abs;
                var7 = var3.bind(var4)(var2);
                var4 = _closure2_slot3;
                var3 = 0;
                var10 = 0;
                if(!var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var10 = 0;
                if(!(var2 < var3)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                var2 = _closure2_slot0;
                var1 = 1;
                var10 = 0;
                if(!(var1 === var2)) { _fun0002_ip = 4; continue _fun0002 }
case 7:
                var10 = 0.8;
case 4:
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 11;
                var4 = var9[var2];
                var3 = undefined;
                var6 = var8.bind(var3)(var4);
                var5 = var6.interpolate;
                var4 = [1, 1];
                var4[2] = var10;
                var2 = var9[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.Extrapolation;
                var11 = var2.CLAMP;
                var13 = [0, 0.3, 1];
                var15 = var6;
                var14 = var7;
                var12 = var4;
                var2 = var15[var5](var14, var13, var12, var11, var10);
                var1['opacity'] = var2;
                return var1;
            }
        };
        var10 = {};
        var10['scrollY'] = var15;
        var10['index'] = var14;
        var10['slotHeight'] = var13;
        var10['isPeekEnabled'] = var11;
        var11 = 0.8;
        var10['PEEK_OPACITY'] = var11;
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
        var10 = 6532652233494.0;
        var3['__workletHash'] = var10;
        var10 = _closure1_slot24;
        var3['__initData'] = var10;
        var7 = var7.bind(var9)(var3);
        var3 = _closure1_slot12;
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
    var _closure1_slot46 = var1;
    var1 = function BountiesModalContentScrollInner(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.initialBountyId;
            var _closure2_slot0 = var2;
            var48 = var1.sourceQuestContent;
            var _closure2_slot1 = var48;
            var5 = undefined;
            var _closure2_slot36 = var5;
            var _closure2_slot37 = var5;
            var _closure2_slot38 = var5;
            var _closure2_slot39 = var5;
            var _closure2_slot40 = var5;
            var _closure2_slot41 = var5;
            var _closure2_slot42 = var5;
            var _closure2_slot43 = var5;
            var _closure2_slot44 = var5;
            var _closure2_slot45 = var5;
            var _closure2_slot46 = var5;
            var _closure2_slot47 = var5;
            var _closure2_slot48 = var5;
            var _closure2_slot49 = var5;
            var _closure2_slot50 = var5;
            var _closure2_slot51 = var5;
            var _closure2_slot52 = var5;
            var _closure2_slot53 = var5;
            var _closure2_slot54 = var5;
            var _closure2_slot55 = var5;
            var1 = _closure1_slot23;
            var6 = var1.bind(var5)();
            var _closure2_slot2 = var6;
            var2 = _closure1_slot1;
            var22 = _closure1_slot2;
            var1 = 12;
            var1 = var22[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var11 = var1.height;
            var _closure2_slot3 = var11;
            var3 = _closure1_slot4;
            var2 = var3.useRef;
            var1 = null;
            var45 = var2.bind(var3)(var1);
            var4 = _closure1_slot4;
            var3 = var4.useState;
            var20 = _closure1_slot0;
            var16 = 14;
            var2 = var22[var16];
            var2 = var20.bind(var5)(var2);
            var2 = var2.BOUNTIES_MODAL_BASE_FOOTER_HEIGHT;
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot3;
            var24 = 2;
            var4 = var2.bind(var5)(var3, var24);
            var3 = 0;
            var2 = var4[var3];
            var17 = 1;
            var4 = var4[var17];
            var _closure2_slot4 = var4;
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = function(arg1) {
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
            var13 = var8.bind(var9)(var7, var4);
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
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
                        var4 = _closure1_slot16;
                        var4 = var3 / var4;
                        var6 = var3;
                        if(!(var4 > var1)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                        var5 = _closure1_slot16;
                        var6 = var1 * var5;
                        var4 = var1;
case 8:
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
            var50 = var2.bind(var5)(var4);
            var _closure2_slot5 = var50;
            var2 = 15;
            var2 = var22[var2];
            var4 = var20.bind(var5)(var2);
            var2 = var4.useQuestHomeBounties;
            var2 = var2.bind(var4)();
            var2 = var2.questHomeBounties;
            var _closure2_slot6 = var2;
            var7 = _closure1_slot4;
            var4 = var7.useState;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                    if(!(!(var7 <= var6))) { _fun0005_ip = 10; continue _fun0005 }
case 11:
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
                    _fun0005_ip = 12; continue _fun0005;
case 10:
                    var1 = _closure2_slot6;
case 12:
                    return var1;
                }
            };
            var4 = var4.bind(var7)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var5)(var4, var17);
            var9 = var2[var3];
            var _closure2_slot7 = var9;
            var35 = 16;
            var2 = var22[var35];
            var7 = var20.bind(var5)(var2);
            var4 = var7.useBountiesExperience;
            var2 = _closure1_slot9;
            var2 = var2.VIDEO_MODAL_MOBILE;
            var7 = var4.bind(var7)(var2);
            var2 = var7.orbAmount;
            var _closure2_slot8 = var2;
            var4 = var7.ownedByVerticalScrollExperiment;
            var _closure2_slot9 = var4;
            var19 = var7.rewardTimerSeconds;
            var _closure2_slot10 = var19;
            var21 = var7.scrollAffordanceVariant;
            var7 = 'auto';
            var42 = var7 === var21;
            var _closure2_slot11 = var42;
            var7 = 17;
            var7 = var22[var7];
            var8 = var20.bind(var5)(var7);
            var7 = var8.shouldUseScrollIndicatorOverlay;
            var8 = var7.bind(var8)(var21);
            var10 = 18;
            var7 = var22[var10];
            var18 = var20.bind(var5)(var7);
            var15 = var18.useStateFromStores;
            var7 = _closure1_slot7;
            var14 = new Array(1);
            var14[0] = var7;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var2;
            var2 = function() {
                var4 = _closure1_slot7;
                var3 = var4.getCompletedBountyCount;
                var2 = _closure2_slot7;
                var2 = var3.bind(var4)(var2);
                var1 = _closure2_slot8;
                var1 = var2 * var1;
                return var1;
            };
            var7 = var15.bind(var18)(var14, var2, var7);
            var2 = var9[var3];
            var _closure2_slot12 = var2;
            var10 = var22[var10];
            var18 = var20.bind(var5)(var10);
            var15 = var18.useStateFromStores;
            var10 = _closure1_slot7;
            var14 = new Array(1);
            var14[0] = var10;
            var10 = new Array(2);
            var10[0] = var2;
            var10[1] = var19;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot12;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0006_ip = 13; continue _fun0006 }
case 14:
                    var5 = _closure1_slot7;
                    var4 = var5.getBountyVideoProgress;
                    var3 = _closure2_slot12;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    var1 = var1 != var3;
                    if(!var1) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                    var3 = var3.maxTimestampSec;
                    var2 = _closure2_slot10;
                    var1 = var3 >= var2;
case 15:
                    return var1;
case 13:
                    var1 = false;
                    return var1;
                }
            };
            var10 = var15.bind(var18)(var14, var2, var10);
            var2 = var50.height;
            var _closure2_slot13 = var2;
            var14 = _closure1_slot17;
            var37 = var2 + var14;
            var _closure2_slot14 = var37;
            var14 = var9.length;
            var31 = var14 - var17;
            var _closure2_slot15 = var31;
            var27 = var7 > var3;
            var _closure2_slot16 = var27;
            var _closure2_slot17 = var2;
            var43 = var31 * var37;
            var _closure2_slot18 = var43;
            var29 = var43 + var2;
            var _closure2_slot19 = var29;
            var23 = _closure1_slot4;
            var18 = var23.useMemo;
            var15 = new Array(3);
            var15[0] = var29;
            var15[1] = var43;
            var15[2] = var2;
            var14 = function() {
                var1 = {};
                var3 = _closure2_slot18;
                var1['lastBounty'] = var3;
                var3 = _closure2_slot19;
                var1['fullRecap'] = var3;
                var2 = _closure2_slot17;
                var1['revealHeight'] = var2;
                return var1;
            };
            var23 = var18.bind(var23)(var14, var15);
            var33 = 19;
            var14 = var22[var33];
            var18 = var20.bind(var5)(var14);
            var15 = var18.useBountiesRecapScroll;
            var14 = {};
            var14['listRef'] = var45;
            var14['enabled'] = var27;
            var14['offsets'] = var23;
            var14 = var15.bind(var18)(var14);
            var47 = var14.handleRecapMomentumEnd;
            var _closure2_slot20 = var47;
            var23 = _closure1_slot4;
            var18 = var23.useMemo;
            var15 = new Array(4);
            var15[0] = var9;
            var15[1] = var29;
            var15[2] = var27;
            var15[3] = var37;
            var14 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure2_slot7;
                    var3 = var4.map;
                    var1 = function(arg1, arg2) {
                        var2 = _closure2_slot14;
                        var1 = arg2;
                        var1 = var1 * var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1);
                    var3 = _closure2_slot16;
                    if(!var3) { _fun0007_ip = 16; continue _fun0007 }
case 11:
                    var3 = var1.push;
                    var2 = _closure2_slot19;
                    var2 = var3.bind(var1)(var2);
case 16:
                    return var1;
                }
            };
            var39 = var18.bind(var23)(var14, var15);
            var15 = _closure1_slot4;
            var14 = var15.useState;
            var38 = false;
            var15 = var14.bind(var15)(var38);
            var14 = _closure1_slot3;
            var14 = var14.bind(var5)(var15, var24);
            var51 = var14[var3];
            var _closure2_slot21 = var51;
            var34 = var14[var17];
            var _closure2_slot22 = var34;
            var15 = _closure1_slot4;
            var14 = var15.useState;
            var15 = var14.bind(var15)(var38);
            var14 = _closure1_slot3;
            var14 = var14.bind(var5)(var15, var24);
            var49 = var14[var3];
            var _closure2_slot23 = var49;
            var30 = var14[var17];
            var _closure2_slot24 = var30;
            var18 = _closure1_slot4;
            var15 = var18.useState;
            var14 = true;
            var15 = var15.bind(var18)(var14);
            var14 = _closure1_slot3;
            var14 = var14.bind(var5)(var15, var24);
            var23 = var14[var3];
            var59 = var14[var17];
            var _closure2_slot25 = var59;
            var15 = _closure1_slot4;
            var14 = var15.useState;
            var15 = var14.bind(var15)(var38);
            var14 = _closure1_slot3;
            var14 = var14.bind(var5)(var15, var24);
            var15 = var14[var3];
            var40 = var14[var17];
            var _closure2_slot26 = var40;
            var18 = _closure1_slot4;
            var14 = var18.useState;
            var18 = var14.bind(var18)(var3);
            var14 = _closure1_slot3;
            var14 = var14.bind(var5)(var18, var24);
            var52 = var14[var3];
            var _closure2_slot27 = var52;
            var14 = var14[var17];
            var _closure2_slot28 = var14;
            var18 = 11;
            var14 = var22[var18];
            var24 = var20.bind(var5)(var14);
            var14 = var24.useSharedValue;
            var53 = var14.bind(var24)(var38);
            var _closure2_slot29 = var53;
            var14 = var22[var18];
            var24 = var20.bind(var5)(var14);
            var14 = var24.useSharedValue;
            var55 = var14.bind(var24)(var38);
            var _closure2_slot30 = var55;
            var14 = var22[var18];
            var24 = var20.bind(var5)(var14);
            var14 = var24.useSharedValue;
            var56 = var14.bind(var24)(var3);
            var _closure2_slot31 = var56;
            var14 = var9.length;
            var24 = var14 > var17;
            var14 = 20;
            var14 = var22[var14];
            var22 = var20.bind(var5)(var14);
            var20 = var22.useBountySwipeUpNux;
            var14 = {};
            var14['isEligible'] = var24;
            var24 = _closure1_slot9;
            var24 = var24.VIDEO_MODAL_MOBILE;
            var14['location'] = var24;
            var14 = var20.bind(var22)(var14);
            var60 = var14.hasSingleUseSwipeUpNux;
            var _closure2_slot32 = var60;
            var46 = var14.dismissSingleUseSwipeUpNux;
            var _closure2_slot33 = var46;
            var58 = var14.hasRecurringSwipeUpNux;
            var _closure2_slot34 = var58;
            var20 = var14.dismissRecurringSwipeUpNux;
            var _closure2_slot35 = var20;
            var32 = var3 === var52;
            var14 = var32;
            if(!var14) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var14 = var60;
case 17:
            if(!var14) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var14 = var10;
case 19:
            var10 = 'peek';
            var25 = var10 === var21;
            if(!var25) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var25 = var58;
case 21:
            _closure2_slot36 = var25;
            var41 = var8;
            if(!var41) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var41 = var58;
case 23:
            _closure2_slot37 = var41;
            var22 = _closure1_slot4;
            var21 = var22.useMemo;
            var10 = function() {
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
            var8 = new Array(0);
            var24 = var21.bind(var22)(var10, var8);
            _closure2_slot38 = var24;
            var10 = _closure1_slot4;
            var8 = var10.useRef;
            var8 = var8.bind(var10)(var3);
            _closure2_slot39 = var8;
            var10 = _closure1_slot4;
            var8 = var10.useRef;
            var8 = var8.bind(var10)(var3);
            _closure2_slot40 = var8;
            var22 = _closure1_slot4;
            var21 = var22.useEffect;
            var10 = function() {
                var2 = _closure2_slot39;
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var8 = new Array(0);
            var8 = var21.bind(var22)(var10, var8);
            var22 = _closure1_slot4;
            var21 = var22.useCallback;
            var10 = new Array(2);
            var10[0] = var52;
            var10[1] = var24;
            var8 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 22;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.VerticalScrollingDirection;
                    var4 = var3.DOWN;
                    var3 = arg1;
                    if(!(var3 === var4)) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 23;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackBountyAutoScrollDismissed;
                    var2 = {};
                    var6 = _closure2_slot27;
                    var2['verticalScrollingPosition'] = var6;
                    var5 = _closure2_slot38;
                    var2['scrollSessionId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 25:
                    return var1;
                }
            };
            var22 = var21.bind(var22)(var8, var10);
            var10 = _closure1_slot0;
            var21 = _closure1_slot2;
            var8 = 24;
            var8 = var21[var8];
            var21 = var10.bind(var5)(var8);
            var10 = var21.useBountiesAutoScroll;
            var8 = {};
            var8['listRef'] = var45;
            var26 = var42;
            if(!var26) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var26 = var52 < var31;
case 27:
            var8['enabled'] = var26;
            var28 = 'hint';
            var26 = var28;
            if(!var32) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var26 = var28;
            if(!var58) { _fun0003_ip = 29; continue _fun0003 }
case 31:
            var26 = 'countdown';
case 29:
            var8['mode'] = var26;
            var8['activeIndex'] = var52;
            var26 = var9[var52];
            var32 = var1 == var26;
            var28 = undefined;
            if(var32) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var28 = var26.id;
case 32:
            var32 = var1 != var28;
            var26 = null;
            if(!var32) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var26 = var28;
case 34:
            var8['activeBountyId'] = var26;
            var8['slotHeight'] = var37;
            var8['onCountdownCancelled'] = var22;
            var10 = var10.bind(var21)(var8);
            var8 = var10.visible;
            var32 = var10.peekActive;
            var22 = var10.progress;
            var21 = var10.showProgressRing;
            var54 = var10.peekScale;
            _closure2_slot41 = var54;
            var57 = var10.cancel;
            _closure2_slot42 = var57;
            var28 = var10.dismissOnClose;
            _closure2_slot43 = var28;
            var62 = var10.takeDidAutoScroll;
            _closure2_slot44 = var62;
            var64 = var10.onPlaybackTimeChange;
            _closure2_slot45 = var64;
            var65 = var10.onEndCardVisible;
            _closure2_slot46 = var65;
            var63 = var10.pauseCountdown;
            _closure2_slot47 = var63;
            var10 = var10.resumeCountdown;
            _closure2_slot48 = var10;
            var61 = _closure1_slot4;
            var36 = var61.useMemo;
            var26 = new Array(4);
            var26[0] = var65;
            var26[1] = var64;
            var26[2] = var63;
            var26[3] = var10;
            var10 = function() {
                var1 = {};
                var3 = _closure2_slot45;
                var1['onPlaybackTimeChange'] = var3;
                var3 = _closure2_slot47;
                var1['onPaused'] = var3;
                var3 = _closure2_slot48;
                var1['onResumed'] = var3;
                var2 = _closure2_slot46;
                var1['onEndCardVisible'] = var2;
                return var1;
            };
            var10 = var36.bind(var61)(var10, var26);
            _closure2_slot49 = var10;
            var61 = _closure1_slot4;
            var36 = var61.useCallback;
            var26 = new Array(1);
            var26[0] = var24;
            var24 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var7 = arg1;
                    var10 = arguments[1];
                    var1 = undefined;
                    if(!(var10 === var1)) { _fun0009_ip = 16; continue _fun0009 }
case 36:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 22;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.BountyScrollingType;
                    var10 = var2.MANUAL;
case 16:
                    var2 = _closure2_slot40;
                    var8 = var2.current;
                    if(!(var7 !== var8)) { _fun0009_ip = 37; continue _fun0009 }
case 5:
                    var2 = _closure2_slot40;
                    var2['current'] = var7;
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var3 = var2.bind(var3)();
                    var2 = _closure2_slot39;
                    var2 = var2.current;
                    var5 = var3 - var2;
                    var2 = _closure2_slot39;
                    var2['current'] = var3;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 23;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackBountyVerticalScroll;
                    var2 = {};
                    var2['scrollingType'] = var10;
                    if(!(!(var7 > var8))) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 22;
                    var8 = var11[var8];
                    var8 = var10.bind(var1)(var8);
                    var8 = var8.VerticalScrollingDirection;
                    var8 = var8.UP;
                    _fun0009_ip = 40; continue _fun0009;
case 38:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 22;
                    var9 = var11[var9];
                    var9 = var10.bind(var1)(var9);
                    var9 = var9.VerticalScrollingDirection;
                    var8 = var9.DOWN;
case 40:
                    var2['scrollingDirection'] = var8;
                    var2['verticalScrollingPosition'] = var7;
                    var6 = _closure2_slot38;
                    var2['scrollSessionId'] = var6;
                    var2['timeWatchedPreScrollMs'] = var5;
                    var2 = var3.bind(var4)(var2);
case 37:
                    return var1;
                }
            };
            var61 = var36.bind(var61)(var24, var26);
            _closure2_slot50 = var61;
            var36 = _closure1_slot4;
            var26 = var36.useCallback;
            var24 = new Array(7);
            var24[0] = var62;
            var24[1] = var61;
            var24[2] = var52;
            var24[3] = var60;
            var24[4] = var58;
            var24[5] = var46;
            var24[6] = var20;
            var20 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var6 = arg1;
                    var2 = _closure2_slot44;
                    var1 = undefined;
                    var4 = var2.bind(var1)();
                    var2 = _closure2_slot28;
                    var2 = var2.bind(var1)(var6);
                    var5 = _closure2_slot50;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 22;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.BountyScrollingType;
                    if(var4) { _fun0010_ip = 41; continue _fun0010 }
case 15:
                    var4 = var7.MANUAL;
                    _fun0010_ip = 42; continue _fun0010;
case 41:
                    var4 = var7.AUTO;
case 42:
                    var4 = var5.bind(var1)(var6, var4);
                    var4 = _closure2_slot27;
                    var5 = 0;
                    var4 = var5 === var4;
                    if(!var4) { _fun0010_ip = 25; continue _fun0010 }
case 43:
                    var4 = var6 > var5;
case 25:
                    if(!var4) { _fun0010_ip = 44; continue _fun0010 }
case 45:
                    var4 = _closure2_slot32;
                    if(var4) { _fun0010_ip = 46; continue _fun0010 }
case 47:
                    var4 = _closure2_slot34;
                    if(!var4) { _fun0010_ip = 44; continue _fun0010 }
case 48:
                    var5 = _closure2_slot35;
                    var4 = _closure1_slot11;
                    var4 = var4.USER_DISMISS;
                    var4 = var5.bind(var1)(var4);
                    _fun0010_ip = 44; continue _fun0010;
case 46:
                    var3 = _closure2_slot33;
                    var2 = _closure1_slot11;
                    var2 = var2.USER_DISMISS;
                    var2 = var3.bind(var1)(var2);
case 44:
                    return var1;
                }
            };
            var46 = var26.bind(var36)(var20, var24);
            _closure2_slot51 = var46;
            var61 = _closure1_slot0;
            var60 = _closure1_slot2;
            var20 = 25;
            var20 = var60[var20];
            var26 = var61.bind(var5)(var20);
            var24 = var26.useBountiesRecapOrbCount;
            var20 = {};
            var20['scrollY'] = var56;
            var20['lastBountyScrollOffset'] = var43;
            var20['recapRevealHeight'] = var2;
            var20['targetOrbAmount'] = var7;
            var20['enabled'] = var27;
            var20 = var24.bind(var26)(var20);
            _closure2_slot52 = var20;
            var36 = _closure1_slot4;
            var26 = var36.useEffect;
            var24 = new Array(2);
            var24[0] = var9;
            var24[1] = var52;
            var20 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot27;
                    var1 = var2[var1];
                    var2 = null;
                    if(!(var2 != var1)) { _fun0011_ip = 4; continue _fun0011 }
case 49:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 26;
                    var2 = var7[var2];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var2);
                    var3 = var4.markAdContentSeen;
                    var2 = 27;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.AdCreativeType;
                    var2 = var2.BOUNTY;
                    var5 = var1.id;
                    var1 = new Array(1);
                    var1[0] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var20 = var26.bind(var36)(var20, var24);
            var26 = _closure1_slot4;
            var24 = var26.useCallback;
            var20 = new Array(5);
            var20[0] = var9;
            var20[1] = var52;
            var20[2] = var28;
            var20[3] = var19;
            var20[4] = var48;
            var19 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot43;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot27;
                    var10 = var3[var2];
                    var3 = null;
                    if(!(var3 != var10)) { _fun0012_ip = 50; continue _fun0012 }
case 51:
                    var7 = _closure1_slot7;
                    var4 = var7.getBountyVideoProgress;
                    var2 = var10.id;
                    var4 = var4.bind(var7)(var2);
                    var7 = var3 == var4;
                    var2 = undefined;
                    if(var7) { _fun0012_ip = 6; continue _fun0012 }
case 5:
                    var2 = var4.maxTimestampSec;
case 6:
                    var7 = var3 != var2;
                    var9 = 0;
                    if(!var7) { _fun0012_ip = 12; continue _fun0012 }
case 52:
                    var9 = var2;
case 12:
                    var7 = var3 == var4;
                    var2 = undefined;
                    if(var7) { _fun0012_ip = 25; continue _fun0012 }
case 53:
                    var2 = var4.duration;
case 25:
                    var3 = var3 != var2;
                    var12 = 0;
                    if(!var3) { _fun0012_ip = 54; continue _fun0012 }
case 55:
                    var12 = var2;
case 54:
                    var2 = _closure2_slot10;
                    var8 = 1000;
                    var7 = var8 * var2;
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 23;
                    var2 = var13[var2];
                    var4 = var11.bind(var1)(var2);
                    var3 = var4.trackAdContentEvent;
                    var2 = {};
                    var10 = var10.id;
                    var2['adContentId'] = var10;
                    var10 = 27;
                    var10 = var13[var10];
                    var10 = var11.bind(var1)(var10);
                    var10 = var10.AdCreativeType;
                    var10 = var10.BOUNTY;
                    var2['adCreativeType'] = var10;
                    var6 = _closure1_slot10;
                    var6 = var6.AD_VIDEO_MODAL_CLOSED;
                    var2['event'] = var6;
                    var6 = {};
                    var10 = 22;
                    var10 = var13[var10];
                    var16 = var11.bind(var1)(var10);
                    var15 = var16.getQuestContentName;
                    var10 = 28;
                    var14 = var13[var10];
                    var14 = var11.bind(var1)(var14);
                    var14 = var14.QuestContent;
                    var14 = var14.VIDEO_MODAL_MOBILE;
                    var14 = var15.bind(var16)(var14);
                    var6['content_name'] = var14;
                    var10 = var13[var10];
                    var10 = var11.bind(var1)(var10);
                    var10 = var10.QuestContent;
                    var10 = var10.VIDEO_MODAL_MOBILE;
                    var6['content_id'] = var10;
                    var10 = 29;
                    var10 = var13[var10];
                    var11 = var11.bind(var1)(var10);
                    var10 = var11.formatVideoProgressRatio;
                    var10 = var10.bind(var11)(var9, var12);
                    var6['video_progress'] = var10;
                    var9 = var8 * var9;
                    var9 = var9 >= var7;
                    var6['threshold_met'] = var9;
                    var7 = var7 / var8;
                    var6['reward_timer_seconds'] = var7;
                    var2['properties'] = var6;
                    var5 = _closure2_slot1;
                    var2['sourceQuestContent'] = var5;
                    var2 = var3.bind(var4)(var2);
case 50:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 30;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideModal;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var26 = var24.bind(var26)(var19, var20);
            var28 = _closure1_slot4;
            var24 = var28.useCallback;
            var20 = new Array(1);
            var20[0] = var48;
            var19 = function() {
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 23;
                var3 = var4[var1];
                var1 = undefined;
                var6 = var9.bind(var1)(var3);
                var5 = var6.trackAdContentEvent;
                var3 = {};
                var7 = _closure1_slot8;
                var3['adContentId'] = var7;
                var7 = 27;
                var7 = var4[var7];
                var7 = var9.bind(var1)(var7);
                var7 = var7.AdCreativeType;
                var7 = var7.BOUNTY;
                var3['adCreativeType'] = var7;
                var7 = _closure1_slot10;
                var7 = var7.AD_VIDEO_MODAL_CLOSED;
                var3['event'] = var7;
                var7 = {};
                var8 = 22;
                var8 = var4[var8];
                var12 = var9.bind(var1)(var8);
                var11 = var12.getQuestContentName;
                var8 = 28;
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
                var2 = 30;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideModal;
                var2 = var2.bind(var3)();
                return var1;
            };
            var19 = var24.bind(var28)(var19, var20);
            _closure2_slot53 = var19;
            var19 = var60[var18];
            var24 = var61.bind(var5)(var19);
            var20 = var24.useAnimatedScrollHandler;
            var19 = {};
            var28 = function mt(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var5 = arg1;
                    var4 = _closure2_slot31;
                    var3 = var4.set;
                    var2 = var5.contentOffset;
                    var2 = var2.y;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot30;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0013_ip = 42; continue _fun0013 }
case 16:
                    var3 = _closure2_slot29;
                    var2 = var3.set;
                    var4 = _closure1_slot22;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var5);
                    var1 = var2.bind(var3)(var1);
case 42:
                    var1 = undefined;
                    return var1;
                }
            };
            var36 = {};
            var36['scrollY'] = var56;
            var36['isDraggingSharedValue'] = var55;
            var36['isScrollingInBoundsSharedValue'] = var53;
            var58 = _closure1_slot22;
            var36['isScrollEventInBounds'] = var58;
            var28['__closure'] = var36;
            var36 = 7942598540397.0;
            var28['__workletHash'] = var36;
            var36 = _closure1_slot25;
            var28['__initData'] = var36;
            var19['onScroll'] = var28;
            var28 = function Tt(arg1) {
                var4 = _closure2_slot30;
                var3 = var4.set;
                var2 = true;
                var2 = var3.bind(var4)(var2);
                var4 = _closure2_slot29;
                var3 = var4.set;
                var5 = _closure1_slot22;
                var1 = undefined;
                var2 = arg1;
                var2 = var5.bind(var1)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var36 = {};
            var36['isDraggingSharedValue'] = var55;
            var36['isScrollingInBoundsSharedValue'] = var53;
            var58 = _closure1_slot22;
            var36['isScrollEventInBounds'] = var58;
            var28['__closure'] = var36;
            var36 = 14039038912528.0;
            var28['__workletHash'] = var36;
            var36 = _closure1_slot26;
            var28['__initData'] = var36;
            var19['onBeginDrag'] = var28;
            var28 = function Ct(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.contentOffset;
                    var2 = var1.y;
                    var1 = 0;
                    if(!(!(var2 < var1))) { _fun0014_ip = 56; continue _fun0014 }
case 57:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 22;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.VerticalScrollingDirection;
                    var5 = var1.UP;
                    _fun0014_ip = 58; continue _fun0014;
case 56:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 22;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.VerticalScrollingDirection;
                    var5 = var1.DOWN;
case 58:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var2);
                    var6 = var7.runOnJS;
                    var4 = _closure2_slot42;
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.bind(var1)(var5);
                    var6 = _closure2_slot30;
                    var5 = var6.set;
                    var4 = false;
                    var5 = var5.bind(var6)(var4);
                    var3 = _closure1_slot14;
                    if(var3) { _fun0014_ip = 59; continue _fun0014 }
case 60:
                    var3 = _closure2_slot29;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4);
case 59:
                    return var1;
                }
            };
            var36 = {};
            var58 = 22;
            var58 = var60[var58];
            var58 = var61.bind(var5)(var58);
            var58 = var58.VerticalScrollingDirection;
            var36['VerticalScrollingDirection'] = var58;
            var58 = var60[var18];
            var58 = var61.bind(var5)(var58);
            var58 = var58.runOnJS;
            var36['runOnJS'] = var58;
            var36['cancelScrollAffordance'] = var57;
            var36['isDraggingSharedValue'] = var55;
            var55 = _closure1_slot14;
            var36['IS_ANDROID'] = var55;
            var36['isScrollingInBoundsSharedValue'] = var53;
            var28['__closure'] = var36;
            var36 = 10752087179842.0;
            var28['__workletHash'] = var36;
            var36 = _closure1_slot27;
            var28['__initData'] = var36;
            var19['onEndDrag'] = var28;
            var28 = function Bt(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = _closure2_slot16;
                    if(!var2) { _fun0015_ip = 61; continue _fun0015 }
case 62:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var4 = undefined;
                    var5 = var3.bind(var4)(var2);
                    var3 = var5.runOnJS;
                    var2 = _closure2_slot20;
                    var3 = var3.bind(var5)(var2);
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
case 61:
                    var3 = _closure2_slot29;
                    var2 = var3.set;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var36 = {};
            var36['showRecapPullZone'] = var27;
            var55 = var60[var18];
            var55 = var61.bind(var5)(var55);
            var55 = var55.runOnJS;
            var36['runOnJS'] = var55;
            var36['handleRecapMomentumEnd'] = var47;
            var36['isScrollingInBoundsSharedValue'] = var53;
            var28['__closure'] = var36;
            var36 = 13684210320337.0;
            var28['__workletHash'] = var36;
            var36 = _closure1_slot28;
            var28['__initData'] = var36;
            var19['onMomentumEnd'] = var28;
            var36 = var20.bind(var24)(var19);
            var19 = var60[var18];
            var28 = var61.bind(var5)(var19);
            var24 = var28.useAnimatedReaction;
            var20 = function xt() {
                var1 = global;
                var4 = var1.Math;
                var3 = var4.min;
                var7 = var1.Math;
                var6 = var7.max;
                var8 = var1.Math;
                var5 = var8.round;
                var9 = _closure2_slot31;
                var2 = var9.get;
                var9 = var2.bind(var9)();
                var2 = _closure2_slot14;
                var2 = var9 / var2;
                var5 = var5.bind(var8)(var2);
                var2 = 0;
                var2 = var6.bind(var7)(var5, var2);
                var1 = _closure2_slot15;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var19 = {};
            var19['scrollY'] = var56;
            var19['slotHeight'] = var37;
            var19['lastBountyIndex'] = var31;
            var20['__closure'] = var19;
            var19 = 14048843158960.0;
            var20['__workletHash'] = var19;
            var19 = _closure1_slot29;
            var20['__initData'] = var19;
            var19 = function yt(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0016_ip = 61; continue _fun0016 }
case 62:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot51;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var31 = {};
            var47 = var60[var18];
            var47 = var61.bind(var5)(var47);
            var47 = var47.runOnJS;
            var31['runOnJS'] = var47;
            var31['commitSwipe'] = var46;
            var19['__closure'] = var31;
            var31 = 14015091539518.0;
            var19['__workletHash'] = var31;
            var31 = _closure1_slot30;
            var19['__initData'] = var31;
            var19 = var24.bind(var28)(var20, var19);
            var19 = var60[var18];
            var28 = var61.bind(var5)(var19);
            var24 = var28.useAnimatedReaction;
            var20 = function Mt() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = _closure2_slot16;
                    if(!var1) { _fun0017_ip = 5; continue _fun0017 }
case 62:
                    var4 = _closure2_slot31;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var4 = _closure2_slot18;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 19;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var2 = var2.RECAP_SNAP_EPSILON;
                    var2 = var4 - var2;
                    var1 = var3 >= var2;
case 5:
                    return var1;
                }
            };
            var19 = {};
            var19['showRecapPullZone'] = var27;
            var19['scrollY'] = var56;
            var19['lastBountyScrollOffset'] = var43;
            var31 = var60[var33];
            var31 = var61.bind(var5)(var31);
            var31 = var31.RECAP_SNAP_EPSILON;
            var19['RECAP_SNAP_EPSILON'] = var31;
            var20['__closure'] = var19;
            var19 = 6584708256992.0;
            var20['__workletHash'] = var19;
            var19 = _closure1_slot31;
            var20['__initData'] = var19;
            var19 = function wt(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0018_ip = 61; continue _fun0018 }
case 62:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot26;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var31 = {};
            var46 = var60[var18];
            var46 = var61.bind(var5)(var46);
            var46 = var46.runOnJS;
            var31['runOnJS'] = var46;
            var31['setShowRecapFooter'] = var40;
            var19['__closure'] = var31;
            var31 = 10788669301891.0;
            var19['__workletHash'] = var31;
            var31 = _closure1_slot32;
            var19['__initData'] = var31;
            var19 = var24.bind(var28)(var20, var19);
            var19 = var60[var18];
            var28 = var61.bind(var5)(var19);
            var24 = var28.useAnimatedReaction;
            var20 = function Vt() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = _closure2_slot16;
                    if(!var1) { _fun0019_ip = 63; continue _fun0019 }
case 62:
                    var4 = _closure2_slot31;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = _closure2_slot18;
                    var1 = var3 > var2;
case 63:
                    return var1;
                }
            };
            var19 = {};
            var19['showRecapPullZone'] = var27;
            var19['scrollY'] = var56;
            var19['lastBountyScrollOffset'] = var43;
            var20['__closure'] = var19;
            var19 = 6186370630693.0;
            var20['__workletHash'] = var19;
            var19 = _closure1_slot33;
            var20['__initData'] = var19;
            var19 = function Nt(arg1, arg2) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0020_ip = 61; continue _fun0020 }
case 62:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot22;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var31 = {};
            var40 = var60[var18];
            var40 = var61.bind(var5)(var40);
            var40 = var40.runOnJS;
            var31['runOnJS'] = var40;
            var31['setIsRecapPageRevealed'] = var34;
            var19['__closure'] = var31;
            var31 = 12713474352874.0;
            var19['__workletHash'] = var31;
            var31 = _closure1_slot34;
            var19['__initData'] = var31;
            var19 = var24.bind(var28)(var20, var19);
            var19 = var60[var18];
            var28 = var61.bind(var5)(var19);
            var24 = var28.useAnimatedReaction;
            var20 = function kt() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var1 = _closure2_slot16;
                    if(!var1) { _fun0021_ip = 5; continue _fun0021 }
case 62:
                    var4 = _closure2_slot31;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var4 = _closure2_slot19;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 19;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var2 = var2.RECAP_SNAP_EPSILON;
                    var2 = var4 - var2;
                    var1 = var3 >= var2;
case 5:
                    return var1;
                }
            };
            var19 = {};
            var19['showRecapPullZone'] = var27;
            var19['scrollY'] = var56;
            var19['fullRecapScrollOffset'] = var29;
            var29 = var60[var33];
            var29 = var61.bind(var5)(var29);
            var29 = var29.RECAP_SNAP_EPSILON;
            var19['RECAP_SNAP_EPSILON'] = var29;
            var20['__closure'] = var19;
            var19 = 5669564400667.0;
            var20['__workletHash'] = var19;
            var19 = _closure1_slot35;
            var20['__initData'] = var19;
            var19 = function bt(arg1, arg2) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0022_ip = 61; continue _fun0022 }
case 62:
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
case 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var29 = {};
            var31 = var60[var18];
            var31 = var61.bind(var5)(var31);
            var31 = var31.runOnJS;
            var29['runOnJS'] = var31;
            var29['setIsRecapPageOnTop'] = var30;
            var19['__closure'] = var29;
            var29 = 8102193741774.0;
            var19['__workletHash'] = var29;
            var29 = _closure1_slot36;
            var19['__initData'] = var29;
            var19 = var24.bind(var28)(var20, var19);
            var28 = _closure1_slot4;
            var24 = var28.useMemo;
            var20 = new Array(2);
            var20[0] = var2;
            var20[1] = var27;
            var19 = function() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var3 = _closure2_slot16;
                    var1 = null;
                    if(!var3) { _fun0023_ip = 64; continue _fun0023 }
case 36:
                    var5 = _closure1_slot12;
                    var4 = _closure1_slot45;
                    var3 = {};
                    var2 = _closure2_slot17;
                    var3['height'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
case 64:
                    return var1;
                }
            };
            var40 = var24.bind(var28)(var19, var20);
            var28 = _closure1_slot4;
            var24 = var28.useMemo;
            var19 = var6.listWrapper;
            var20 = new Array(2);
            var20[0] = var19;
            var20[1] = var50;
            var19 = function() {
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
            var30 = var24.bind(var28)(var19, var20);
            var28 = _closure1_slot4;
            var24 = var28.useMemo;
            var19 = var50.top;
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
            var34 = var24.bind(var28)(var19, var20);
            var28 = _closure1_slot4;
            var24 = var28.useMemo;
            var19 = var50.width;
            var20 = new Array(2);
            var20[0] = var19;
            var19 = var50.height;
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
            var55 = var24.bind(var28)(var19, var20);
            _closure2_slot54 = var55;
            var28 = _closure1_slot4;
            var24 = var28.useMemo;
            var19 = var6.closeButton;
            var20 = new Array(4);
            var20[0] = var19;
            var19 = var50.top;
            var20[1] = var19;
            var19 = var50.left;
            var20[2] = var19;
            var19 = var50.width;
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
            var24 = var24.bind(var28)(var19, var20);
            var29 = _closure1_slot4;
            var28 = var29.useMemo;
            var19 = var6.autoScrollIndicator;
            var20 = new Array(5);
            var20[0] = var19;
            var19 = var50.top;
            var20[1] = var19;
            var19 = var50.height;
            var20[2] = var19;
            var19 = var50.left;
            var20[3] = var19;
            var19 = var50.width;
            var20[4] = var19;
            var19 = function() {
                var1 = _closure2_slot2;
                var2 = var1.autoScrollIndicator;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var3 = _closure2_slot5;
                var9 = var3.top;
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 24;
                var6 = var8[var5];
                var7 = undefined;
                var6 = var10.bind(var7)(var6);
                var6 = var6.AUTO_SCROLL_PEEK_TOP_OFFSET;
                var6 = var9 + var6;
                var9 = var3.height;
                var5 = var8[var5];
                var5 = var10.bind(var7)(var5);
                var5 = var5.AUTO_SCROLL_PEEK_SCALE;
                var5 = var9 * var5;
                var5 = var6 + var5;
                var6 = _closure1_slot1;
                var4 = 9;
                var4 = var8[var4];
                var4 = var6.bind(var7)(var4);
                var4 = var4.space;
                var4 = var4.PX_32;
                var4 = var5 + var4;
                var2['top'] = var4;
                var4 = var3.left;
                var2['left'] = var4;
                var3 = var3.width;
                var2['width'] = var3;
                var1[1] = var2;
                return var1;
            };
            var19 = var28.bind(var29)(var19, var20);
            var29 = _closure1_slot4;
            var28 = var29.useMemo;
            var20 = new Array(6);
            var20[0] = var49;
            var31 = var6.recapPage;
            var20[1] = var31;
            var31 = var50.top;
            var20[2] = var31;
            var31 = var50.left;
            var20[3] = var31;
            var31 = var50.width;
            var20[4] = var31;
            var20[5] = var11;
            var11 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
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
                    var4 = _closure2_slot23;
                    var3 = null;
                    if(!var4) { _fun0024_ip = 65; continue _fun0024 }
case 10:
                    var4 = {};
                    var5 = _closure1_slot15;
                    var4['zIndex'] = var5;
                    var3 = var4;
case 65:
                    var7 = var2;
                    var6 = var3;
                    var3 = copyDataProperties(var7, var6);
                    var1[1] = var2;
                    return var1;
                }
            };
            var47 = var28.bind(var29)(var11, var20);
            var11 = var60[var18];
            var28 = var61.bind(var5)(var11);
            var20 = var28.useDerivedValue;
            var11 = function Yt() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.getRevealProgress;
                var3 = _closure2_slot31;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = _closure2_slot18;
                var1 = _closure2_slot17;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var29 = {};
            var31 = var60[var33];
            var31 = var61.bind(var5)(var31);
            var31 = var31.getRevealProgress;
            var29['getRevealProgress'] = var31;
            var29['scrollY'] = var56;
            var29['lastBountyScrollOffset'] = var43;
            var29['recapRevealHeight'] = var2;
            var11['__closure'] = var29;
            var29 = 8427964721554.0;
            var11['__workletHash'] = var29;
            var29 = _closure1_slot37;
            var11['__initData'] = var29;
            var58 = var20.bind(var28)(var11);
            _closure2_slot55 = var58;
            var11 = var60[var18];
            var28 = var61.bind(var5)(var11);
            var20 = var28.useAnimatedStyle;
            var11 = function Jt() {
                var1 = {};
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 11;
                var5 = var8[var2];
                var3 = undefined;
                var7 = var4.bind(var3)(var5);
                var6 = var7.interpolate;
                var9 = _closure2_slot55;
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
            var29 = {};
            var31 = var60[var18];
            var31 = var61.bind(var5)(var31);
            var31 = var31.interpolate;
            var29['interpolate'] = var31;
            var29['recapPullProgress'] = var58;
            var31 = var60[var18];
            var31 = var61.bind(var5)(var31);
            var31 = var31.Extrapolation;
            var29['Extrapolation'] = var31;
            var11['__closure'] = var29;
            var29 = 1497321349449.0;
            var11['__workletHash'] = var29;
            var29 = _closure1_slot38;
            var11['__initData'] = var29;
            var46 = var20.bind(var28)(var11);
            var11 = var60[var18];
            var28 = var61.bind(var5)(var11);
            var20 = var28.useAnimatedStyle;
            var11 = function Ut() {
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 11;
                var4 = var9[var2];
                var3 = undefined;
                var7 = var8.bind(var3)(var4);
                var6 = var7.interpolate;
                var5 = _closure2_slot55;
                var4 = var5.get;
                var5 = var4.bind(var5)();
                var11 = _closure1_slot19;
                var4 = new Array(2);
                var4[0] = var11;
                var10 = _closure1_slot20;
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
            var29 = {};
            var31 = var60[var18];
            var31 = var61.bind(var5)(var31);
            var31 = var31.interpolate;
            var29['interpolate'] = var31;
            var29['recapPullProgress'] = var58;
            var31 = _closure1_slot19;
            var29['FOOTER_FADE_START_PROGRESS'] = var31;
            var31 = _closure1_slot20;
            var29['FOOTER_FADE_END_PROGRESS'] = var31;
            var31 = var60[var18];
            var31 = var61.bind(var5)(var31);
            var31 = var31.Extrapolation;
            var29['Extrapolation'] = var31;
            var11['__closure'] = var29;
            var29 = 3685190194249.0;
            var11['__workletHash'] = var29;
            var29 = _closure1_slot39;
            var11['__initData'] = var29;
            var20 = var20.bind(var28)(var11);
            var11 = var60[var18];
            var29 = var61.bind(var5)(var11);
            var28 = var29.useAnimatedStyle;
            var11 = function Gt() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var3 = _closure2_slot31;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var4 = _closure2_slot18;
                    var5 = _closure2_slot14;
                    var2 = 2;
                    var2 = var5 / var2;
                    var2 = var4 - var2;
                    if(!(!(var3 >= var2))) { _fun0025_ip = 25; continue _fun0025 }
case 66:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 19;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.getRevealProgress;
                    var3 = _closure2_slot31;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
                    var3 = _closure2_slot17;
                    var2 = 0;
                    var7 = var5.bind(var6)(var4, var2, var3);
                    _fun0025_ip = 67; continue _fun0025;
case 25:
                    var2 = _closure2_slot55;
                    var1 = var2.get;
                    var7 = var1.bind(var2)();
case 67:
                    var1 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 11;
                    var4 = var9[var2];
                    var3 = undefined;
                    var6 = var8.bind(var3)(var4);
                    var5 = var6.interpolate;
                    var11 = _closure1_slot19;
                    var4 = new Array(2);
                    var4[0] = var11;
                    var10 = _closure1_slot20;
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
            var31 = {};
            var31['scrollY'] = var56;
            var31['lastBountyScrollOffset'] = var43;
            var31['slotHeight'] = var37;
            var31['recapPullProgress'] = var58;
            var33 = var60[var33];
            var33 = var61.bind(var5)(var33);
            var33 = var33.getRevealProgress;
            var31['getRevealProgress'] = var33;
            var31['recapRevealHeight'] = var2;
            var33 = var60[var18];
            var33 = var61.bind(var5)(var33);
            var33 = var33.interpolate;
            var31['interpolate'] = var33;
            var33 = _closure1_slot19;
            var31['FOOTER_FADE_START_PROGRESS'] = var33;
            var33 = _closure1_slot20;
            var31['FOOTER_FADE_END_PROGRESS'] = var33;
            var33 = var60[var18];
            var33 = var61.bind(var5)(var33);
            var33 = var33.Extrapolation;
            var31['Extrapolation'] = var33;
            var11['__closure'] = var31;
            var31 = 15092194442650.0;
            var11['__workletHash'] = var31;
            var31 = _closure1_slot40;
            var11['__initData'] = var31;
            var11 = var28.bind(var29)(var11);
            var33 = _closure1_slot4;
            var31 = var33.useMemo;
            var28 = var6.peekGradient;
            var29 = new Array(5);
            var29[0] = var28;
            var28 = var50.left;
            var29[1] = var28;
            var28 = var50.width;
            var29[2] = var28;
            var28 = var50.top;
            var29[3] = var28;
            var28 = var50.height;
            var29[4] = var28;
            var28 = function() {
                var1 = _closure2_slot2;
                var2 = var1.peekGradient;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var3 = _closure2_slot5;
                var4 = var3.left;
                var2['left'] = var4;
                var4 = var3.width;
                var2['width'] = var4;
                var4 = var3.top;
                var3 = var3.height;
                var3 = var4 + var3;
                var2['top'] = var3;
                var3 = 0;
                var2['bottom'] = var3;
                var1[1] = var2;
                return var1;
            };
            var31 = var31.bind(var33)(var28, var29);
            var28 = var60[var18];
            var33 = var61.bind(var5)(var28);
            var29 = var33.useAnimatedStyle;
            var28 = function Qt() {
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 11;
                var4 = var9[var2];
                var3 = undefined;
                var7 = var8.bind(var3)(var4);
                var6 = var7.interpolate;
                var10 = _closure2_slot31;
                var5 = var10.get;
                var5 = var5.bind(var10)();
                var10 = _closure2_slot14;
                var4 = [0];
                var4[1] = var10;
                var2 = var9[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.Extrapolation;
                var11 = var2.CLAMP;
                var12 = [1, 0];
                var15 = var7;
                var14 = var5;
                var13 = var4;
                var2 = var15[var6](var14, var13, var12, var11, var10);
                var1['opacity'] = var2;
                return var1;
            };
            var43 = {};
            var57 = var60[var18];
            var57 = var61.bind(var5)(var57);
            var57 = var57.interpolate;
            var43['interpolate'] = var57;
            var43['scrollY'] = var56;
            var43['slotHeight'] = var37;
            var57 = var60[var18];
            var57 = var61.bind(var5)(var57);
            var57 = var57.Extrapolation;
            var43['Extrapolation'] = var57;
            var28['__closure'] = var43;
            var43 = 5908400559291.0;
            var28['__workletHash'] = var43;
            var43 = _closure1_slot41;
            var28['__initData'] = var43;
            var29 = var29.bind(var33)(var28);
            var28 = var60[var18];
            var57 = var61.bind(var5)(var28);
            var43 = var57.useAnimatedReaction;
            var33 = function zt() {
                var2 = _closure2_slot55;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = _closure1_slot20;
                var1 = var2 < var1;
                return var1;
            };
            var28 = {};
            var28['recapPullProgress'] = var58;
            var58 = _closure1_slot20;
            var28['FOOTER_FADE_END_PROGRESS'] = var58;
            var33['__closure'] = var28;
            var28 = 547045699209.0;
            var33['__workletHash'] = var28;
            var28 = _closure1_slot42;
            var33['__initData'] = var28;
            var28 = function Zt(arg1, arg2) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0026_ip = 61; continue _fun0026 }
case 62:
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
case 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var58 = {};
            var60 = var60[var18];
            var60 = var61.bind(var5)(var60);
            var60 = var60.runOnJS;
            var58['runOnJS'] = var60;
            var58['setIsCloseButtonPressable'] = var59;
            var28['__closure'] = var58;
            var58 = 6290671204687.0;
            var28['__workletHash'] = var58;
            var58 = _closure1_slot43;
            var28['__initData'] = var58;
            var28 = var43.bind(var57)(var33, var28);
            var43 = _closure1_slot4;
            var33 = var43.useCallback;
            var28 = new Array(16);
            var28[0] = var37;
            var28[1] = var56;
            var28[2] = var55;
            var28[3] = var25;
            var28[4] = var42;
            var28[5] = var54;
            var28[6] = var48;
            var54 = var50.width;
            var28[7] = var54;
            var54 = var50.height;
            var28[8] = var54;
            var28[9] = var52;
            var28[10] = var51;
            var28[11] = var49;
            var28[12] = var53;
            var28[13] = var41;
            var28[14] = var10;
            var28[15] = var4;
            var10 = function(arg1) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.item;
                    var12 = var1.index;
                    var1 = _closure2_slot9;
                    var9 = !var1;
                    if(var9) { _fun0027_ip = 68; continue _fun0027 }
case 69:
                    var1 = _closure2_slot27;
                    var9 = var12 === var1;
case 68:
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot46;
                    var2 = {};
                    var2['index'] = var12;
                    var6 = _closure2_slot14;
                    var2['slotHeight'] = var6;
                    var6 = _closure2_slot31;
                    var2['scrollY'] = var6;
                    var6 = _closure2_slot54;
                    var2['style'] = var6;
                    var6 = _closure2_slot36;
                    var2['isPeekEnabled'] = var6;
                    var8 = _closure1_slot12;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 31;
                    var6 = var6[var1];
                    var1 = undefined;
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.BountiesScrollVideoItem;
                    var6 = {};
                    var6['bounty'] = var5;
                    var11 = _closure2_slot1;
                    var6['sourceQuestContent'] = var11;
                    var11 = _closure2_slot5;
                    var13 = var11.width;
                    var6['width'] = var13;
                    var11 = var11.height;
                    var6['height'] = var11;
                    var11 = _closure2_slot27;
                    var11 = var12 === var11;
                    var6['isActive'] = var11;
                    var11 = _closure2_slot21;
                    var6['isRecapPageRevealed'] = var11;
                    var11 = _closure2_slot23;
                    var6['isRecapPageOnTop'] = var11;
                    var11 = _closure2_slot29;
                    var6['isScrollingInBoundsSharedValue'] = var11;
                    var11 = _closure2_slot37;
                    if(!var11) { _fun0027_ip = 70; continue _fun0027 }
case 71:
                    var13 = 0;
                    var11 = var13 === var12;
case 70:
                    var6['isScrollIndicatorOverlayEnabled'] = var11;
                    var6['shouldLoadHls'] = var9;
                    var11 = _closure2_slot11;
                    var9 = undefined;
                    if(!var11) { _fun0027_ip = 72; continue _fun0027 }
case 73:
                    var9 = _closure2_slot49;
case 72:
                    var6['scrollAffordance'] = var9;
                    var11 = _closure2_slot27;
                    var9 = undefined;
                    if(!(var12 === var11)) { _fun0027_ip = 74; continue _fun0027 }
case 75:
                    var11 = _closure2_slot11;
                    var9 = undefined;
                    if(!var11) { _fun0027_ip = 74; continue _fun0027 }
case 76:
                    var9 = _closure2_slot41;
case 74:
                    var6['peekScale'] = var9;
                    var5 = var5.id;
                    var5 = var8.bind(var1)(var7, var6, var5);
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var43 = var33.bind(var43)(var10, var28);
            var33 = _closure1_slot4;
            var28 = var33.useMemo;
            var10 = new Array(9);
            var10[0] = var52;
            var10[1] = var51;
            var10[2] = var49;
            var51 = var50.width;
            var10[3] = var51;
            var50 = var50.height;
            var10[4] = var50;
            var10[5] = var25;
            var10[6] = var42;
            var10[7] = var41;
            var10[8] = var4;
            var4 = function() {
                var1 = {};
                var3 = _closure2_slot27;
                var1['activeIndex'] = var3;
                var3 = _closure2_slot21;
                var1['isRecapPageRevealed'] = var3;
                var3 = _closure2_slot23;
                var1['isRecapPageOnTop'] = var3;
                var3 = _closure2_slot5;
                var4 = var3.width;
                var1['width'] = var4;
                var3 = var3.height;
                var1['height'] = var3;
                var3 = _closure2_slot36;
                var1['isPeekEnabled'] = var3;
                var3 = _closure2_slot11;
                var1['isAutoScrollEnabled'] = var3;
                var3 = _closure2_slot37;
                var1['canShowScrollIndicatorOverlay'] = var3;
                var2 = _closure2_slot9;
                var1['ownedByVerticalScrollExperiment'] = var2;
                return var1;
            };
            var42 = var28.bind(var33)(var4, var10);
            var28 = _closure1_slot4;
            var10 = var28.useCallback;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function(arg1) {
                var2 = _closure2_slot13;
                var1 = arg1;
                var1['size'] = var2;
                var1 = undefined;
                return var1;
            };
            var41 = var10.bind(var28)(var2, var4);
            var2 = var9.length;
            if(!(var3 !== var2)) { _fun0003_ip = 77; continue _fun0003 }
case 78:
            if(var14) { _fun0003_ip = 79; continue _fun0003 }
case 80:
            var10 = null;
            if(!var15) { _fun0003_ip = 81; continue _fun0003 }
case 82:
            var4 = _closure1_slot12;
            var3 = _closure1_slot0;
            var28 = _closure1_slot2;
            var2 = 33;
            var2 = var28[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.BountiesScrollRecapFooter;
            var2 = {};
            var2['orbAmount'] = var7;
            var10 = var4.bind(var5)(var3, var2);
            _fun0003_ip = 81; continue _fun0003;
case 79:
            var4 = _closure1_slot12;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 32;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var10 = var4.bind(var5)(var3, var2);
case 81:
            var4 = _closure1_slot13;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = var6.root;
            var2['style'] = var6;
            var28 = _closure1_slot12;
            var7 = _closure1_slot1;
            var33 = _closure1_slot2;
            var6 = 34;
            var6 = var33[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['active'] = var32;
            var7 = var28.bind(var5)(var7, var6);
            var6 = new Array(7);
            var6[0] = var7;
            var7 = null;
            if(!var27) { _fun0003_ip = 83; continue _fun0003 }
case 84:
            var32 = _closure1_slot12;
            var28 = _closure1_slot1;
            var27 = _closure1_slot2;
            var27 = var27[var18];
            var27 = var28.bind(var5)(var27);
            var28 = var27.View;
            var27 = {};
            var33 = new Array(2);
            var33[0] = var47;
            var33[1] = var46;
            var27['style'] = var33;
            var33 = 'none';
            if(!var49) { _fun0003_ip = 85; continue _fun0003 }
case 86:
            var33 = 'box-none';
case 85:
            var27['pointerEvents'] = var33;
            var47 = _closure1_slot12;
            var51 = _closure1_slot0;
            var52 = _closure1_slot2;
            var33 = 35;
            var33 = var52[var33];
            var33 = var51.bind(var5)(var33);
            var46 = var33.QuestContentImpressionTrackerNative;
            var33 = {};
            var50 = _closure1_slot8;
            var33['adContentId'] = var50;
            var50 = 27;
            var50 = var52[var50];
            var50 = var51.bind(var5)(var50);
            var50 = var50.AdCreativeType;
            var50 = var50.BOUNTY;
            var33['adCreativeType'] = var50;
            var50 = 28;
            var50 = var52[var50];
            var50 = var51.bind(var5)(var50);
            var50 = var50.QuestContent;
            var50 = var50.BOUNTIES_END_INTERSTITIAL;
            var33['questContent'] = var50;
            var33['overrideVisibility'] = var49;
            var33['sourceQuestContent'] = var48;
            var48 = function children() {
                var4 = _closure1_slot12;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 36;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.BountiesScrollRecapPage;
                var1 = {};
                var6 = _closure2_slot52;
                var1['orbAmount'] = var6;
                var5 = _closure2_slot53;
                var1['onClose'] = var5;
                var5 = {};
                var6 = 1;
                var5['flex'] = var6;
                var1['style'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var33['children'] = var48;
            var33 = var47.bind(var5)(var46, var33);
            var27['children'] = var33;
            var7 = var32.bind(var5)(var28, var27);
case 83:
            var6[1] = var7;
            var28 = _closure1_slot12;
            var27 = _closure1_slot6;
            var7 = {};
            var7['style'] = var30;
            var33 = _closure1_slot12;
            var32 = _closure1_slot0;
            var46 = _closure1_slot2;
            var30 = 37;
            var30 = var46[var30];
            var30 = var32.bind(var5)(var30);
            var32 = var30.AnimatedFlashList;
            var30 = {};
            var30['ref'] = var45;
            var30['data'] = var9;
            var44 = function keyExtractor(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var30['keyExtractor'] = var44;
            var30['renderItem'] = var43;
            var30['extraData'] = var42;
            var30['overrideItemLayout'] = var41;
            var41 = _closure1_slot44;
            var30['ItemSeparatorComponent'] = var41;
            var30['ListFooterComponent'] = var40;
            var30['snapToOffsets'] = var39;
            var30['snapToEnd'] = var38;
            var39 = 0.85;
            var30['decelerationRate'] = var39;
            var30['showsVerticalScrollIndicator'] = var38;
            var30['drawDistance'] = var37;
            var30['onScroll'] = var36;
            var30['scrollEventThrottle'] = var35;
            var30['contentContainerStyle'] = var34;
            var30 = var33.bind(var5)(var32, var30);
            var7['children'] = var30;
            var7 = var28.bind(var5)(var27, var7);
            var6[2] = var7;
            var7 = null;
            if(!var25) { _fun0003_ip = 87; continue _fun0003 }
case 88:
            var9 = var9.length;
            var9 = var9 > var17;
            var7 = null;
            if(!var9) { _fun0003_ip = 87; continue _fun0003 }
case 89:
            var25 = _closure1_slot12;
            var28 = _closure1_slot1;
            var30 = _closure1_slot2;
            var9 = var30[var18];
            var9 = var28.bind(var5)(var9);
            var17 = var9.View;
            var9 = {};
            var27 = 'none';
            var9['pointerEvents'] = var27;
            var27 = new Array(2);
            var27[0] = var31;
            var27[1] = var29;
            var9['style'] = var27;
            var29 = _closure1_slot12;
            var27 = 38;
            var27 = var30[var27];
            var28 = var28.bind(var5)(var27);
            var27 = {};
            var30 = _closure1_slot18;
            var27['colors'] = var30;
            var30 = _closure1_slot5;
            var30 = var30.absoluteFill;
            var27['style'] = var30;
            var27 = var29.bind(var5)(var28, var27);
            var9['children'] = var27;
            var7 = var25.bind(var5)(var17, var9);
case 87:
            var6[3] = var7;
            var17 = _closure1_slot12;
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var18];
            var7 = var9.bind(var5)(var7);
            var9 = var7.View;
            var7 = {};
            var18 = new Array(2);
            var18[0] = var24;
            var18[1] = var20;
            var7['style'] = var18;
            var18 = 'none';
            var20 = var18;
            if(!var23) { _fun0003_ip = 90; continue _fun0003 }
case 91:
            var20 = 'box-none';
case 90:
            var7['pointerEvents'] = var20;
            var20 = null;
            if(!var23) { _fun0003_ip = 92; continue _fun0003 }
case 93:
            var25 = _closure1_slot12;
            var24 = _closure1_slot1;
            var27 = _closure1_slot2;
            var23 = 39;
            var23 = var27[var23];
            var24 = var24.bind(var5)(var23);
            var23 = {};
            var23['onPress'] = var26;
            var20 = var25.bind(var5)(var24, var23);
case 92:
            var7['children'] = var20;
            var7 = var17.bind(var5)(var9, var7);
            var6[4] = var7;
            var7 = null;
            if(!var8) { _fun0003_ip = 94; continue _fun0003 }
case 95:
            var17 = _closure1_slot12;
            var9 = _closure1_slot6;
            var8 = {};
            var8['style'] = var19;
            var8['pointerEvents'] = var18;
            var20 = _closure1_slot12;
            var19 = _closure1_slot1;
            var23 = _closure1_slot2;
            var18 = 40;
            var18 = var23[var18];
            var19 = var19.bind(var5)(var18);
            var18 = {};
            var18['progress'] = var22;
            var18['showProgressRing'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var8['children'] = var18;
            var7 = var17.bind(var5)(var9, var8);
case 94:
            var6[5] = var7;
            var9 = _closure1_slot12;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var16];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            if(var14) { _fun0003_ip = 96; continue _fun0003 }
case 97:
            var14 = var15;
case 96:
            var7['visible'] = var14;
            var7['onContentLayout'] = var13;
            var12 = _closure1_slot15;
            var7['zIndex'] = var12;
            var7['opacityStyle'] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[6] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 77:
            return var1;
        }
    };
    var _closure1_slot47 = var1;
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
    var8 = var4.StyleSheet;
    var _closure1_slot5 = var8;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID;
    var _closure1_slot8 = var9;
    var8 = var8.QuestsExperimentLocations;
    var _closure1_slot9 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AnalyticEvents;
    var _closure1_slot10 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ContentDismissActionType;
    var _closure1_slot11 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.jsx;
    var _closure1_slot12 = var9;
    var8 = var8.jsxs;
    var _closure1_slot13 = var8;
    var8 = 8;
    var8 = var6[var8];
    var9 = var5.bind(var1)(var8);
    var8 = var9.isAndroid;
    var8 = var8.bind(var9)();
    var _closure1_slot14 = var8;
    var _closure1_slot15 = var4;
    var4 = 0.5625;
    var _closure1_slot16 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.space;
    var4 = var4.PX_8;
    var _closure1_slot17 = var4;
    var4 = ['rgba(0,0,0,0)', 'rgba(0,0,0,0.75)'];
    var _closure1_slot18 = var4;
    var4 = 0.05;
    var _closure1_slot19 = var4;
    var4 = 0.1;
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = 'function isScrollEventInBounds_BountiesModalContentScrollTsx1(event){const maxOffset=Math.max(0,event.contentSize.height-event.layoutMeasurement.height);return event.contentOffset.y>=0&&event.contentOffset.y<=maxOffset;}';
    var4['code'] = var7;
    var _closure1_slot21 = var4;
    var4 = function() {
        var1 = function isScrollEventInBounds(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
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
                if(!var1) { _fun0028_ip = 98; continue _fun0028 }
case 9:
                var2 = var2.contentOffset;
                var2 = var2.y;
                var1 = var2 <= var3;
case 98:
                return var1;
            }
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 14148486927190.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot21;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot22 = var4;
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
        var2 = {'position': 'absolute', 'zIndex': 1, 'overflow': 'hidden'};
        var1['listWrapper'] = var2;
        var2 = {};
        var2['position'] = var3;
        var4 = _closure1_slot15;
        var2['zIndex'] = var4;
        var1['closeButton'] = var2;
        var2 = {'position': 'absolute', 'zIndex': 2};
        var1['peekGradient'] = var2;
        var2 = {'position': 'absolute', 'zIndex': null, 'alignItems': 'center'};
        var3 = _closure1_slot15;
        var2['zIndex'] = var3;
        var1['autoScrollIndicator'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx2(){const{scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation}=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);return{opacity:opacity};}';
    var4['code'] = var7;
    var _closure1_slot24 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx3(event){const{scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;scrollY.set(event.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}}';
    var4['code'] = var7;
    var _closure1_slot25 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx4(event){const{isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}';
    var4['code'] = var7;
    var _closure1_slot26 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx5(event){const{VerticalScrollingDirection,runOnJS,cancelScrollAffordance,isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue}=this.__closure;const scrollingDirection=event.contentOffset.y<0?VerticalScrollingDirection.DOWN:VerticalScrollingDirection.UP;runOnJS(cancelScrollAffordance)(scrollingDirection);isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}}';
    var4['code'] = var7;
    var _closure1_slot27 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx6(event){const{showRecapPullZone,runOnJS,handleRecapMomentumEnd,isScrollingInBoundsSharedValue}=this.__closure;if(showRecapPullZone){runOnJS(handleRecapMomentumEnd)(event);}isScrollingInBoundsSharedValue.set(false);}';
    var4['code'] = var7;
    var _closure1_slot28 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx7(){const{scrollY,slotHeight,lastBountyIndex}=this.__closure;return Math.min(Math.max(Math.round(scrollY.get()/slotHeight),0),lastBountyIndex);}';
    var4['code'] = var7;
    var _closure1_slot29 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx8(next,prev){const{runOnJS,commitSwipe}=this.__closure;if(next!==prev){runOnJS(commitSwipe)(next);}}';
    var4['code'] = var7;
    var _closure1_slot30 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx9(){const{showRecapPullZone,scrollY,lastBountyScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=lastBountyScrollOffset-RECAP_SNAP_EPSILON;}';
    var4['code'] = var7;
    var _closure1_slot31 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx10(show,previousShow){const{runOnJS,setShowRecapFooter}=this.__closure;if(show!==previousShow){runOnJS(setShowRecapFooter)(show);}}';
    var4['code'] = var7;
    var _closure1_slot32 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx11(){const{showRecapPullZone,scrollY,lastBountyScrollOffset}=this.__closure;return showRecapPullZone&&scrollY.get()>lastBountyScrollOffset;}';
    var4['code'] = var7;
    var _closure1_slot33 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx12(revealed,previousRevealed){const{runOnJS,setIsRecapPageRevealed}=this.__closure;if(revealed!==previousRevealed){runOnJS(setIsRecapPageRevealed)(revealed);}}';
    var4['code'] = var7;
    var _closure1_slot34 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx13(){const{showRecapPullZone,scrollY,fullRecapScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=fullRecapScrollOffset-RECAP_SNAP_EPSILON;}';
    var4['code'] = var7;
    var _closure1_slot35 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx14(onTop,previousOnTop){const{runOnJS,setIsRecapPageOnTop}=this.__closure;if(onTop!==previousOnTop){runOnJS(setIsRecapPageOnTop)(onTop);}}';
    var4['code'] = var7;
    var _closure1_slot36 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx15(){const{getRevealProgress,scrollY,lastBountyScrollOffset,recapRevealHeight}=this.__closure;return getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight);}';
    var4['code'] = var7;
    var _closure1_slot37 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx16(){const{interpolate,recapPullProgress,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[0,1],[0,1],Extrapolation.CLAMP)};}';
    var4['code'] = var7;
    var _closure1_slot38 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx17(){const{interpolate,recapPullProgress,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}';
    var4['code'] = var7;
    var _closure1_slot39 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx18(){const{scrollY,lastBountyScrollOffset,slotHeight,recapPullProgress,getRevealProgress,recapRevealHeight,interpolate,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;const progress=scrollY.get()>=lastBountyScrollOffset-slotHeight/2?recapPullProgress.get():getRevealProgress(scrollY.get(),0,recapRevealHeight);return{opacity:interpolate(progress,[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}';
    var4['code'] = var7;
    var _closure1_slot40 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx19(){const{interpolate,scrollY,slotHeight,Extrapolation}=this.__closure;return{opacity:interpolate(scrollY.get(),[0,slotHeight],[1,0],Extrapolation.CLAMP)};}';
    var4['code'] = var7;
    var _closure1_slot41 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx20(){const{recapPullProgress,FOOTER_FADE_END_PROGRESS}=this.__closure;return recapPullProgress.get()<FOOTER_FADE_END_PROGRESS;}';
    var4['code'] = var7;
    var _closure1_slot42 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx21(pressable,previousPressable){const{runOnJS,setIsCloseButtonPressable}=this.__closure;if(pressable!==previousPressable){runOnJS(setIsCloseButtonPressable)(pressable);}}';
    var4['code'] = var7;
    var _closure1_slot43 = var4;
    var4 = 43;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BountiesModalContentScroll(arg1) {
        var1 = arg1;
        var9 = var1.bountyId;
        var8 = var1.sourceQuestContent;
        var4 = _closure1_slot12;
        var7 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 41;
        var1 = var10[var1];
        var3 = undefined;
        var1 = var7.bind(var3)(var1);
        var2 = var1.ThemeContextProvider;
        var1 = {};
        var6 = 42;
        var6 = var10[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.ThemeTypes;
        var6 = var6.DARKER;
        var1['theme'] = var6;
        var7 = _closure1_slot12;
        var6 = _closure1_slot47;
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
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
        var15 = var1.index;
        var _closure2_slot0 = var15;
        var14 = var1.slotHeight;
        var _closure2_slot1 = var14;
        var16 = var1.scrollY;
        var _closure2_slot2 = var16;
        var8 = var1.style;
        var12 = var1.isPeekEnabled;
        var _closure2_slot3 = var12;
        var5 = var1.children;
        var11 = var1.peekScale;
        var _closure2_slot4 = var11;
        var13 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 11;
        var7 = var6[var1];
        var4 = undefined;
        var9 = var13.bind(var4)(var7);
        var7 = var9.useAnimatedStyle;
        var3 = function u() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot2;
                var1 = var2.get;
                var4 = var1.bind(var2)();
                var1 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = var1 * var2;
                var1 = var4 - var1;
                var1 = var1 / var2;
                var2 = global;
                var4 = var2.Math;
                var2 = var4.abs;
                var7 = var2.bind(var4)(var1);
                var2 = _closure2_slot3;
                var4 = 0;
                var10 = 0;
                if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var10 = 0;
                if(!(var1 < var4)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                var2 = _closure2_slot0;
                var1 = 1;
                var10 = 0;
                if(!(var1 === var2)) { _fun0002_ip = 4; continue _fun0002 }
case 7:
                var10 = 0.8;
case 4:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 11;
                var4 = var9[var1];
                var2 = undefined;
                var6 = var8.bind(var2)(var4);
                var5 = var6.interpolate;
                var4 = [1, 1];
                var4[2] = var10;
                var1 = var9[var1];
                var1 = var8.bind(var2)(var1);
                var1 = var1.Extrapolation;
                var11 = var1.CLAMP;
                var13 = [0, 0.3, 1];
                var15 = var6;
                var14 = var7;
                var12 = var4;
                var4 = var15[var5](var14, var13, var12, var11, var10);
                var2 = _closure2_slot4;
                var1 = null;
                if(!(var1 == var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var1 = {};
                var1['opacity'] = var4;
                _fun0002_ip = 10; continue _fun0002;
case 8:
                var2 = {};
                var2['opacity'] = var4;
                var4 = 'top';
                var2['transformOrigin'] = var4;
                var4 = {};
                var5 = _closure2_slot4;
                var3 = var5.get;
                var3 = var3.bind(var5)();
                var4['scale'] = var3;
                var3 = new Array(1);
                var3[0] = var4;
                var2['transform'] = var3;
                var1 = var2;
case 10:
                return var1;
            }
        };
        var10 = {};
        var10['scrollY'] = var16;
        var10['index'] = var15;
        var10['slotHeight'] = var14;
        var10['isPeekEnabled'] = var12;
        var12 = 0.8;
        var10['PEEK_OPACITY'] = var12;
        var12 = var6[var1];
        var12 = var13.bind(var4)(var12);
        var12 = var12.interpolate;
        var10['interpolate'] = var12;
        var12 = 0.3;
        var10['FADE_DEADBAND'] = var12;
        var12 = var6[var1];
        var12 = var13.bind(var4)(var12);
        var12 = var12.Extrapolation;
        var10['Extrapolation'] = var12;
        var10['peekScale'] = var11;
        var3['__closure'] = var10;
        var10 = 14774268609183.0;
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
            var _closure2_slot35 = var5;
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
            var1 = _closure1_slot23;
            var6 = var1.bind(var5)();
            var _closure2_slot2 = var6;
            var2 = _closure1_slot1;
            var21 = _closure1_slot2;
            var1 = 12;
            var1 = var21[var1];
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
            var2 = var21[var16];
            var2 = var20.bind(var5)(var2);
            var2 = var2.BOUNTIES_MODAL_BASE_FOOTER_HEIGHT;
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot3;
            var22 = 2;
            var4 = var2.bind(var5)(var3, var22);
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
                        if(!(var4 > var1)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var5 = _closure1_slot16;
                        var6 = var1 * var5;
                        var4 = var1;
case 11:
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
            var41 = var2.bind(var5)(var4);
            var _closure2_slot5 = var41;
            var2 = 15;
            var2 = var21[var2];
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
                    if(!(!(var7 <= var6))) { _fun0005_ip = 13; continue _fun0005 }
case 14:
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
                    _fun0005_ip = 15; continue _fun0005;
case 13:
                    var1 = _closure2_slot6;
case 15:
                    return var1;
                }
            };
            var4 = var4.bind(var7)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var5)(var4, var17);
            var9 = var2[var3];
            var _closure2_slot7 = var9;
            var35 = 16;
            var2 = var21[var35];
            var2 = var20.bind(var5)(var2);
            var7 = var2.BountiesStage1Experiment;
            var4 = var7.useConfig;
            var2 = {};
            var8 = _closure1_slot9;
            var8 = var8.VIDEO_MODAL_MOBILE;
            var2['location'] = var8;
            var4 = var4.bind(var7)(var2);
            var2 = var4.orbAmount;
            var _closure2_slot8 = var2;
            var19 = var4.rewardTimerSeconds;
            var _closure2_slot9 = var19;
            var4 = 17;
            var7 = var21[var4];
            var7 = var20.bind(var5)(var7);
            var10 = var7.BountiesVerticalScrollExperiment;
            var8 = var10.useConfig;
            var7 = {};
            var14 = _closure1_slot9;
            var14 = var14.VIDEO_MODAL_MOBILE;
            var7['location'] = var14;
            var7 = var8.bind(var10)(var7);
            var10 = var7.scrollAffordanceVariant;
            var7 = 'auto';
            var33 = var7 === var10;
            var _closure2_slot10 = var33;
            var4 = var21[var4];
            var7 = var20.bind(var5)(var4);
            var4 = var7.shouldUseScrollIndicatorOverlay;
            var4 = var4.bind(var7)(var10);
            var8 = 18;
            var7 = var21[var8];
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
            var _closure2_slot11 = var2;
            var8 = var21[var8];
            var18 = var20.bind(var5)(var8);
            var15 = var18.useStateFromStores;
            var8 = _closure1_slot7;
            var14 = new Array(1);
            var14[0] = var8;
            var8 = new Array(2);
            var8[0] = var2;
            var8[1] = var19;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot11;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                    var5 = _closure1_slot7;
                    var4 = var5.getBountyVideoProgress;
                    var3 = _closure2_slot11;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    var1 = var1 != var3;
                    if(!var1) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                    var3 = var3.maxTimestampSec;
                    var2 = _closure2_slot9;
                    var1 = var3 >= var2;
case 18:
                    return var1;
case 16:
                    var1 = false;
                    return var1;
                }
            };
            var8 = var15.bind(var18)(var14, var2, var8);
            var2 = var41.height;
            var _closure2_slot12 = var2;
            var14 = _closure1_slot17;
            var37 = var2 + var14;
            var _closure2_slot13 = var37;
            var14 = var9.length;
            var31 = var14 - var17;
            var _closure2_slot14 = var31;
            var27 = var7 > var3;
            var _closure2_slot15 = var27;
            var _closure2_slot16 = var2;
            var43 = var31 * var37;
            var _closure2_slot17 = var43;
            var29 = var43 + var2;
            var _closure2_slot18 = var29;
            var23 = _closure1_slot4;
            var18 = var23.useMemo;
            var15 = new Array(3);
            var15[0] = var29;
            var15[1] = var43;
            var15[2] = var2;
            var14 = function() {
                var1 = {};
                var3 = _closure2_slot17;
                var1['lastBounty'] = var3;
                var3 = _closure2_slot18;
                var1['fullRecap'] = var3;
                var2 = _closure2_slot16;
                var1['revealHeight'] = var2;
                return var1;
            };
            var23 = var18.bind(var23)(var14, var15);
            var32 = 19;
            var14 = var21[var32];
            var18 = var20.bind(var5)(var14);
            var15 = var18.useBountiesRecapScroll;
            var14 = {};
            var14['listRef'] = var45;
            var14['enabled'] = var27;
            var14['offsets'] = var23;
            var14 = var15.bind(var18)(var14);
            var47 = var14.handleRecapMomentumEnd;
            var _closure2_slot19 = var47;
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
                        var2 = _closure2_slot13;
                        var1 = arg2;
                        var1 = var1 * var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1);
                    var3 = _closure2_slot15;
                    if(!var3) { _fun0007_ip = 19; continue _fun0007 }
case 14:
                    var3 = var1.push;
                    var2 = _closure2_slot18;
                    var2 = var3.bind(var1)(var2);
case 19:
                    return var1;
                }
            };
            var39 = var18.bind(var23)(var14, var15);
            var15 = _closure1_slot4;
            var14 = var15.useState;
            var38 = false;
            var15 = var14.bind(var15)(var38);
            var14 = _closure1_slot3;
            var14 = var14.bind(var5)(var15, var22);
            var42 = var14[var3];
            var _closure2_slot20 = var42;
            var34 = var14[var17];
            var _closure2_slot21 = var34;
            var15 = _closure1_slot4;
            var14 = var15.useState;
            var15 = var14.bind(var15)(var38);
            var14 = _closure1_slot3;
            var14 = var14.bind(var5)(var15, var22);
            var49 = var14[var3];
            var _closure2_slot22 = var49;
            var30 = var14[var17];
            var _closure2_slot23 = var30;
            var18 = _closure1_slot4;
            var15 = var18.useState;
            var14 = true;
            var15 = var15.bind(var18)(var14);
            var14 = _closure1_slot3;
            var14 = var14.bind(var5)(var15, var22);
            var23 = var14[var3];
            var57 = var14[var17];
            var _closure2_slot24 = var57;
            var15 = _closure1_slot4;
            var14 = var15.useState;
            var15 = var14.bind(var15)(var38);
            var14 = _closure1_slot3;
            var14 = var14.bind(var5)(var15, var22);
            var15 = var14[var3];
            var40 = var14[var17];
            var _closure2_slot25 = var40;
            var18 = _closure1_slot4;
            var14 = var18.useState;
            var18 = var14.bind(var18)(var3);
            var14 = _closure1_slot3;
            var14 = var14.bind(var5)(var18, var22);
            var50 = var14[var3];
            var _closure2_slot26 = var50;
            var14 = var14[var17];
            var _closure2_slot27 = var14;
            var18 = 11;
            var14 = var21[var18];
            var22 = var20.bind(var5)(var14);
            var14 = var22.useSharedValue;
            var51 = var14.bind(var22)(var38);
            var _closure2_slot28 = var51;
            var14 = var21[var18];
            var22 = var20.bind(var5)(var14);
            var14 = var22.useSharedValue;
            var53 = var14.bind(var22)(var38);
            var _closure2_slot29 = var53;
            var14 = var21[var18];
            var22 = var20.bind(var5)(var14);
            var14 = var22.useSharedValue;
            var54 = var14.bind(var22)(var3);
            var _closure2_slot30 = var54;
            var14 = var9.length;
            var22 = var14 > var17;
            var14 = 20;
            var14 = var21[var14];
            var21 = var20.bind(var5)(var14);
            var20 = var21.useBountySwipeUpNux;
            var14 = {};
            var14['isEligible'] = var22;
            var22 = _closure1_slot9;
            var22 = var22.VIDEO_MODAL_MOBILE;
            var14['location'] = var22;
            var14 = var20.bind(var21)(var14);
            var58 = var14.hasSingleUseSwipeUpNux;
            var _closure2_slot31 = var58;
            var46 = var14.dismissSingleUseSwipeUpNux;
            var _closure2_slot32 = var46;
            var56 = var14.hasRecurringSwipeUpNux;
            var _closure2_slot33 = var56;
            var20 = var14.dismissRecurringSwipeUpNux;
            var _closure2_slot34 = var20;
            var26 = var3 === var50;
            var14 = var26;
            if(!var14) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var14 = var58;
case 20:
            if(!var14) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var14 = var8;
case 22:
            var8 = 'peek';
            var25 = var8 === var10;
            if(!var25) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var25 = var56;
case 24:
            _closure2_slot35 = var25;
            if(!var4) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var4 = var56;
case 26:
            _closure2_slot36 = var4;
            var10 = _closure1_slot0;
            var21 = _closure1_slot2;
            var8 = 21;
            var8 = var21[var8];
            var21 = var10.bind(var5)(var8);
            var10 = var21.useBountiesAutoScroll;
            var8 = {};
            var8['listRef'] = var45;
            var22 = var33;
            if(!var22) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var22 = var50 < var31;
case 28:
            var8['enabled'] = var22;
            var24 = 'hint';
            var22 = var24;
            if(!var26) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var22 = var24;
            if(!var56) { _fun0003_ip = 30; continue _fun0003 }
case 32:
            var22 = 'countdown';
case 30:
            var8['mode'] = var22;
            var8['activeIndex'] = var50;
            var22 = var9[var50];
            var26 = var1 == var22;
            var24 = undefined;
            if(var26) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var24 = var22.id;
case 33:
            var26 = var1 != var24;
            var22 = null;
            if(!var26) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var22 = var24;
case 35:
            var8['activeBountyId'] = var22;
            var8['slotHeight'] = var37;
            var10 = var10.bind(var21)(var8);
            var8 = var10.visible;
            var22 = var10.progress;
            var21 = var10.showProgressRing;
            var52 = var10.peekScale;
            _closure2_slot37 = var52;
            var55 = var10.cancel;
            _closure2_slot38 = var55;
            var28 = var10.dismissOnClose;
            _closure2_slot39 = var28;
            var60 = var10.takeDidAutoScroll;
            _closure2_slot40 = var60;
            var61 = var10.onPlaybackTimeChange;
            _closure2_slot41 = var61;
            var62 = var10.onEndCardVisible;
            _closure2_slot42 = var62;
            var59 = var10.pauseCountdown;
            _closure2_slot43 = var59;
            var10 = var10.resumeCountdown;
            _closure2_slot44 = var10;
            var36 = _closure1_slot4;
            var26 = var36.useMemo;
            var24 = new Array(4);
            var24[0] = var62;
            var24[1] = var61;
            var24[2] = var59;
            var24[3] = var10;
            var10 = function() {
                var1 = {};
                var3 = _closure2_slot41;
                var1['onPlaybackTimeChange'] = var3;
                var3 = _closure2_slot43;
                var1['onPaused'] = var3;
                var3 = _closure2_slot44;
                var1['onResumed'] = var3;
                var2 = _closure2_slot42;
                var1['onEndCardVisible'] = var2;
                return var1;
            };
            var10 = var26.bind(var36)(var10, var24);
            _closure2_slot45 = var10;
            var59 = _closure1_slot4;
            var36 = var59.useMemo;
            var26 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.v4;
                var1 = var1.bind(var2)();
                return var1;
            };
            var24 = new Array(0);
            var24 = var36.bind(var59)(var26, var24);
            _closure2_slot46 = var24;
            var36 = _closure1_slot4;
            var26 = var36.useRef;
            var26 = var26.bind(var36)(var3);
            _closure2_slot47 = var26;
            var36 = _closure1_slot4;
            var26 = var36.useRef;
            var26 = var26.bind(var36)(var3);
            _closure2_slot48 = var26;
            var61 = _closure1_slot4;
            var59 = var61.useEffect;
            var36 = function() {
                var2 = _closure2_slot47;
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var26 = new Array(0);
            var26 = var59.bind(var61)(var36, var26);
            var59 = _closure1_slot4;
            var36 = var59.useCallback;
            var26 = new Array(1);
            var26[0] = var24;
            var24 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var7 = arg1;
                    var10 = arguments[1];
                    var1 = undefined;
                    if(!(var10 === var1)) { _fun0008_ip = 19; continue _fun0008 }
case 37:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 23;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.BountyScrollingType;
                    var10 = var2.MANUAL;
case 19:
                    var2 = _closure2_slot48;
                    var8 = var2.current;
                    if(!(var7 !== var8)) { _fun0008_ip = 38; continue _fun0008 }
case 5:
                    var2 = _closure2_slot48;
                    var2['current'] = var7;
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var3 = var2.bind(var3)();
                    var2 = _closure2_slot47;
                    var2 = var2.current;
                    var5 = var3 - var2;
                    var2 = _closure2_slot47;
                    var2['current'] = var3;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 24;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackBountyVerticalScroll;
                    var2 = {};
                    var2['scrollingType'] = var10;
                    if(!(!(var7 > var8))) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 23;
                    var8 = var11[var8];
                    var8 = var10.bind(var1)(var8);
                    var8 = var8.VerticalScrollingDirection;
                    var8 = var8.UP;
                    _fun0008_ip = 41; continue _fun0008;
case 39:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 23;
                    var9 = var11[var9];
                    var9 = var10.bind(var1)(var9);
                    var9 = var9.VerticalScrollingDirection;
                    var8 = var9.DOWN;
case 41:
                    var2['scrollingDirection'] = var8;
                    var2['verticalScrollingPosition'] = var7;
                    var6 = _closure2_slot46;
                    var2['scrollSessionId'] = var6;
                    var2['timeWatchedPreScrollMs'] = var5;
                    var2 = var3.bind(var4)(var2);
case 38:
                    return var1;
                }
            };
            var59 = var36.bind(var59)(var24, var26);
            _closure2_slot49 = var59;
            var36 = _closure1_slot4;
            var26 = var36.useCallback;
            var24 = new Array(7);
            var24[0] = var60;
            var24[1] = var59;
            var24[2] = var50;
            var24[3] = var58;
            var24[4] = var56;
            var24[5] = var46;
            var24[6] = var20;
            var20 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var6 = arg1;
                    var2 = _closure2_slot40;
                    var1 = undefined;
                    var4 = var2.bind(var1)();
                    var2 = _closure2_slot27;
                    var2 = var2.bind(var1)(var6);
                    var5 = _closure2_slot49;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 23;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.BountyScrollingType;
                    if(var4) { _fun0009_ip = 42; continue _fun0009 }
case 18:
                    var4 = var7.MANUAL;
                    _fun0009_ip = 43; continue _fun0009;
case 42:
                    var4 = var7.AUTO;
case 43:
                    var4 = var5.bind(var1)(var6, var4);
                    var4 = _closure2_slot26;
                    var5 = 0;
                    var4 = var5 === var4;
                    if(!var4) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                    var4 = var6 > var5;
case 44:
                    if(!var4) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                    var4 = _closure2_slot31;
                    if(var4) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                    var4 = _closure2_slot33;
                    if(!var4) { _fun0009_ip = 46; continue _fun0009 }
case 50:
                    var5 = _closure2_slot34;
                    var4 = _closure1_slot11;
                    var4 = var4.USER_DISMISS;
                    var4 = var5.bind(var1)(var4);
                    _fun0009_ip = 46; continue _fun0009;
case 48:
                    var3 = _closure2_slot32;
                    var2 = _closure1_slot11;
                    var2 = var2.USER_DISMISS;
                    var2 = var3.bind(var1)(var2);
case 46:
                    return var1;
                }
            };
            var46 = var26.bind(var36)(var20, var24);
            _closure2_slot50 = var46;
            var59 = _closure1_slot0;
            var58 = _closure1_slot2;
            var20 = 25;
            var20 = var58[var20];
            var26 = var59.bind(var5)(var20);
            var24 = var26.useBountiesRecapOrbCount;
            var20 = {};
            var20['scrollY'] = var54;
            var20['lastBountyScrollOffset'] = var43;
            var20['recapRevealHeight'] = var2;
            var20['targetOrbAmount'] = var7;
            var20['enabled'] = var27;
            var20 = var24.bind(var26)(var20);
            _closure2_slot51 = var20;
            var36 = _closure1_slot4;
            var26 = var36.useEffect;
            var24 = new Array(2);
            var24[0] = var9;
            var24[1] = var50;
            var20 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot26;
                    var1 = var2[var1];
                    var2 = null;
                    if(!(var2 != var1)) { _fun0010_ip = 4; continue _fun0010 }
case 51:
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
            var20[1] = var50;
            var20[2] = var28;
            var20[3] = var19;
            var20[4] = var48;
            var19 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot39;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot26;
                    var10 = var3[var2];
                    var3 = null;
                    if(!(var3 != var10)) { _fun0011_ip = 52; continue _fun0011 }
case 53:
                    var7 = _closure1_slot7;
                    var4 = var7.getBountyVideoProgress;
                    var2 = var10.id;
                    var4 = var4.bind(var7)(var2);
                    var7 = var3 == var4;
                    var2 = undefined;
                    if(var7) { _fun0011_ip = 6; continue _fun0011 }
case 5:
                    var2 = var4.maxTimestampSec;
case 6:
                    var7 = var3 != var2;
                    var9 = 0;
                    if(!var7) { _fun0011_ip = 15; continue _fun0011 }
case 54:
                    var9 = var2;
case 15:
                    var7 = var3 == var4;
                    var2 = undefined;
                    if(var7) { _fun0011_ip = 44; continue _fun0011 }
case 55:
                    var2 = var4.duration;
case 44:
                    var3 = var3 != var2;
                    var12 = 0;
                    if(!var3) { _fun0011_ip = 56; continue _fun0011 }
case 57:
                    var12 = var2;
case 56:
                    var2 = _closure2_slot9;
                    var8 = 1000;
                    var7 = var8 * var2;
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 24;
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
                    var10 = 23;
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
case 52:
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
                var1 = 24;
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
                var8 = 23;
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
            _closure2_slot52 = var19;
            var19 = var58[var18];
            var24 = var59.bind(var5)(var19);
            var20 = var24.useAnimatedScrollHandler;
            var19 = {};
            var28 = function mt(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
                    if(!var2) { _fun0012_ip = 43; continue _fun0012 }
case 19:
                    var3 = _closure2_slot28;
                    var2 = var3.set;
                    var4 = _closure1_slot22;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var5);
                    var1 = var2.bind(var3)(var1);
case 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var36 = {};
            var36['scrollY'] = var54;
            var36['isDraggingSharedValue'] = var53;
            var36['isScrollingInBoundsSharedValue'] = var51;
            var56 = _closure1_slot22;
            var36['isScrollEventInBounds'] = var56;
            var28['__closure'] = var36;
            var36 = 7942598540397.0;
            var28['__workletHash'] = var36;
            var36 = _closure1_slot25;
            var28['__initData'] = var36;
            var19['onScroll'] = var28;
            var28 = function Dt(arg1) {
                var4 = _closure2_slot29;
                var3 = var4.set;
                var1 = true;
                var1 = var3.bind(var4)(var1);
                var6 = _closure2_slot28;
                var5 = var6.set;
                var7 = _closure1_slot22;
                var1 = undefined;
                var4 = arg1;
                var4 = var7.bind(var1)(var4);
                var4 = var5.bind(var6)(var4);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 11;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.runOnJS;
                var2 = _closure2_slot38;
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var1)();
                return var1;
            };
            var36 = {};
            var36['isDraggingSharedValue'] = var53;
            var36['isScrollingInBoundsSharedValue'] = var51;
            var56 = _closure1_slot22;
            var36['isScrollEventInBounds'] = var56;
            var56 = var58[var18];
            var56 = var59.bind(var5)(var56);
            var56 = var56.runOnJS;
            var36['runOnJS'] = var56;
            var36['cancelScrollAffordance'] = var55;
            var28['__closure'] = var36;
            var36 = 14882819635339.0;
            var28['__workletHash'] = var36;
            var36 = _closure1_slot26;
            var28['__initData'] = var36;
            var19['onBeginDrag'] = var28;
            var28 = function It() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var4 = _closure2_slot29;
                    var2 = var4.set;
                    var3 = false;
                    var2 = var2.bind(var4)(var3);
                    var2 = _closure1_slot14;
                    if(var2) { _fun0013_ip = 58; continue _fun0013 }
case 59:
                    var2 = _closure2_slot28;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
case 58:
                    var1 = undefined;
                    return var1;
                }
            };
            var36 = {};
            var36['isDraggingSharedValue'] = var53;
            var53 = _closure1_slot14;
            var36['IS_ANDROID'] = var53;
            var36['isScrollingInBoundsSharedValue'] = var51;
            var28['__closure'] = var36;
            var36 = 9975335138319.0;
            var28['__workletHash'] = var36;
            var36 = _closure1_slot27;
            var28['__initData'] = var36;
            var19['onEndDrag'] = var28;
            var28 = function At(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = _closure2_slot15;
                    if(!var2) { _fun0014_ip = 60; continue _fun0014 }
case 61:
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
case 60:
                    var3 = _closure2_slot28;
                    var2 = var3.set;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var36 = {};
            var36['showRecapPullZone'] = var27;
            var53 = var58[var18];
            var53 = var59.bind(var5)(var53);
            var53 = var53.runOnJS;
            var36['runOnJS'] = var53;
            var36['handleRecapMomentumEnd'] = var47;
            var36['isScrollingInBoundsSharedValue'] = var51;
            var28['__closure'] = var36;
            var36 = 13684210320337.0;
            var28['__workletHash'] = var36;
            var36 = _closure1_slot28;
            var28['__initData'] = var36;
            var19['onMomentumEnd'] = var28;
            var36 = var20.bind(var24)(var19);
            var19 = var58[var18];
            var28 = var59.bind(var5)(var19);
            var24 = var28.useAnimatedReaction;
            var20 = function Ct() {
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
                var2 = _closure2_slot13;
                var2 = var9 / var2;
                var5 = var5.bind(var8)(var2);
                var2 = 0;
                var2 = var6.bind(var7)(var5, var2);
                var1 = _closure2_slot14;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var19 = {};
            var19['scrollY'] = var54;
            var19['slotHeight'] = var37;
            var19['lastBountyIndex'] = var31;
            var20['__closure'] = var19;
            var19 = 14048843158960.0;
            var20['__workletHash'] = var19;
            var19 = _closure1_slot29;
            var20['__initData'] = var19;
            var19 = function Bt(arg1, arg2) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0015_ip = 60; continue _fun0015 }
case 61:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot50;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 60:
                    var1 = undefined;
                    return var1;
                }
            };
            var31 = {};
            var47 = var58[var18];
            var47 = var59.bind(var5)(var47);
            var47 = var47.runOnJS;
            var31['runOnJS'] = var47;
            var31['commitSwipe'] = var46;
            var19['__closure'] = var31;
            var31 = 14015091539518.0;
            var19['__workletHash'] = var31;
            var31 = _closure1_slot30;
            var19['__initData'] = var31;
            var19 = var24.bind(var28)(var20, var19);
            var19 = var58[var18];
            var28 = var59.bind(var5)(var19);
            var24 = var28.useAnimatedReaction;
            var20 = function xt() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = _closure2_slot15;
                    if(!var1) { _fun0016_ip = 5; continue _fun0016 }
case 61:
                    var4 = _closure2_slot30;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var4 = _closure2_slot17;
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
            var19['scrollY'] = var54;
            var19['lastBountyScrollOffset'] = var43;
            var31 = var58[var32];
            var31 = var59.bind(var5)(var31);
            var31 = var31.RECAP_SNAP_EPSILON;
            var19['RECAP_SNAP_EPSILON'] = var31;
            var20['__closure'] = var19;
            var19 = 6584708256992.0;
            var20['__workletHash'] = var19;
            var19 = _closure1_slot31;
            var20['__initData'] = var19;
            var19 = function Tt(arg1, arg2) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0017_ip = 60; continue _fun0017 }
case 61:
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
case 60:
                    var1 = undefined;
                    return var1;
                }
            };
            var31 = {};
            var46 = var58[var18];
            var46 = var59.bind(var5)(var46);
            var46 = var46.runOnJS;
            var31['runOnJS'] = var46;
            var31['setShowRecapFooter'] = var40;
            var19['__closure'] = var31;
            var31 = 10788669301891.0;
            var19['__workletHash'] = var31;
            var31 = _closure1_slot32;
            var19['__initData'] = var31;
            var19 = var24.bind(var28)(var20, var19);
            var19 = var58[var18];
            var28 = var59.bind(var5)(var19);
            var24 = var28.useAnimatedReaction;
            var20 = function Mt() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = _closure2_slot15;
                    if(!var1) { _fun0018_ip = 62; continue _fun0018 }
case 61:
                    var4 = _closure2_slot30;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = _closure2_slot17;
                    var1 = var3 > var2;
case 62:
                    return var1;
                }
            };
            var19 = {};
            var19['showRecapPullZone'] = var27;
            var19['scrollY'] = var54;
            var19['lastBountyScrollOffset'] = var43;
            var20['__closure'] = var19;
            var19 = 6186370630693.0;
            var20['__workletHash'] = var19;
            var19 = _closure1_slot33;
            var20['__initData'] = var19;
            var19 = function yt(arg1, arg2) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0019_ip = 60; continue _fun0019 }
case 61:
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
case 60:
                    var1 = undefined;
                    return var1;
                }
            };
            var31 = {};
            var40 = var58[var18];
            var40 = var59.bind(var5)(var40);
            var40 = var40.runOnJS;
            var31['runOnJS'] = var40;
            var31['setIsRecapPageRevealed'] = var34;
            var19['__closure'] = var31;
            var31 = 12713474352874.0;
            var19['__workletHash'] = var31;
            var31 = _closure1_slot34;
            var19['__initData'] = var31;
            var19 = var24.bind(var28)(var20, var19);
            var19 = var58[var18];
            var28 = var59.bind(var5)(var19);
            var24 = var28.useAnimatedReaction;
            var20 = function Nt() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var1 = _closure2_slot15;
                    if(!var1) { _fun0020_ip = 5; continue _fun0020 }
case 61:
                    var4 = _closure2_slot30;
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
            var19['scrollY'] = var54;
            var19['fullRecapScrollOffset'] = var29;
            var29 = var58[var32];
            var29 = var59.bind(var5)(var29);
            var29 = var29.RECAP_SNAP_EPSILON;
            var19['RECAP_SNAP_EPSILON'] = var29;
            var20['__closure'] = var19;
            var19 = 5669564400667.0;
            var20['__workletHash'] = var19;
            var19 = _closure1_slot35;
            var20['__initData'] = var19;
            var19 = function wt(arg1, arg2) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0021_ip = 60; continue _fun0021 }
case 61:
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
case 60:
                    var1 = undefined;
                    return var1;
                }
            };
            var29 = {};
            var31 = var58[var18];
            var31 = var59.bind(var5)(var31);
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
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var3 = _closure2_slot15;
                    var1 = null;
                    if(!var3) { _fun0022_ip = 63; continue _fun0022 }
case 37:
                    var5 = _closure1_slot12;
                    var4 = _closure1_slot45;
                    var3 = {};
                    var2 = _closure2_slot16;
                    var3['height'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
case 63:
                    return var1;
                }
            };
            var40 = var24.bind(var28)(var19, var20);
            var28 = _closure1_slot4;
            var24 = var28.useMemo;
            var19 = var6.listWrapper;
            var20 = new Array(2);
            var20[0] = var19;
            var20[1] = var41;
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
            var19 = var41.top;
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
            var19 = var41.width;
            var20 = new Array(2);
            var20[0] = var19;
            var19 = var41.height;
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
            var53 = var24.bind(var28)(var19, var20);
            _closure2_slot53 = var53;
            var28 = _closure1_slot4;
            var24 = var28.useMemo;
            var19 = var6.closeButton;
            var20 = new Array(4);
            var20[0] = var19;
            var19 = var41.top;
            var20[1] = var19;
            var19 = var41.left;
            var20[2] = var19;
            var19 = var41.width;
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
            var19 = var41.top;
            var20[1] = var19;
            var19 = var41.height;
            var20[2] = var19;
            var19 = var41.left;
            var20[3] = var19;
            var19 = var41.width;
            var20[4] = var19;
            var19 = function() {
                var1 = _closure2_slot2;
                var2 = var1.autoScrollIndicator;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var3 = _closure2_slot5;
                var6 = var3.top;
                var9 = var3.height;
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 21;
                var5 = var8[var5];
                var7 = undefined;
                var5 = var10.bind(var7)(var5);
                var5 = var5.AUTO_SCROLL_PEEK_SCALE;
                var5 = var9 * var5;
                var5 = var6 + var5;
                var6 = _closure1_slot1;
                var4 = 9;
                var4 = var8[var4];
                var4 = var6.bind(var7)(var4);
                var4 = var4.space;
                var4 = var4.PX_24;
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
            var31 = var41.top;
            var20[2] = var31;
            var31 = var41.left;
            var20[3] = var31;
            var31 = var41.width;
            var20[4] = var31;
            var20[5] = var11;
            var11 = function() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
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
                    if(!var4) { _fun0023_ip = 64; continue _fun0023 }
case 13:
                    var4 = {};
                    var5 = _closure1_slot15;
                    var4['zIndex'] = var5;
                    var3 = var4;
case 64:
                    var7 = var2;
                    var6 = var3;
                    var3 = copyDataProperties(var7, var6);
                    var1[1] = var2;
                    return var1;
                }
            };
            var47 = var28.bind(var29)(var11, var20);
            var11 = var58[var18];
            var28 = var59.bind(var5)(var11);
            var20 = var28.useDerivedValue;
            var11 = function Ht() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.getRevealProgress;
                var3 = _closure2_slot30;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = _closure2_slot17;
                var1 = _closure2_slot16;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var29 = {};
            var31 = var58[var32];
            var31 = var59.bind(var5)(var31);
            var31 = var31.getRevealProgress;
            var29['getRevealProgress'] = var31;
            var29['scrollY'] = var54;
            var29['lastBountyScrollOffset'] = var43;
            var29['recapRevealHeight'] = var2;
            var11['__closure'] = var29;
            var29 = 8427964721554.0;
            var11['__workletHash'] = var29;
            var29 = _closure1_slot37;
            var11['__initData'] = var29;
            var56 = var20.bind(var28)(var11);
            _closure2_slot54 = var56;
            var11 = var58[var18];
            var28 = var59.bind(var5)(var11);
            var20 = var28.useAnimatedStyle;
            var11 = function Lt() {
                var1 = {};
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 11;
                var5 = var8[var2];
                var3 = undefined;
                var7 = var4.bind(var3)(var5);
                var6 = var7.interpolate;
                var9 = _closure2_slot54;
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
            var31 = var58[var18];
            var31 = var59.bind(var5)(var31);
            var31 = var31.interpolate;
            var29['interpolate'] = var31;
            var29['recapPullProgress'] = var56;
            var31 = var58[var18];
            var31 = var59.bind(var5)(var31);
            var31 = var31.Extrapolation;
            var29['Extrapolation'] = var31;
            var11['__closure'] = var29;
            var29 = 1497321349449.0;
            var11['__workletHash'] = var29;
            var29 = _closure1_slot38;
            var11['__initData'] = var29;
            var46 = var20.bind(var28)(var11);
            var11 = var58[var18];
            var28 = var59.bind(var5)(var11);
            var20 = var28.useAnimatedStyle;
            var11 = function Ft() {
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 11;
                var4 = var9[var2];
                var3 = undefined;
                var7 = var8.bind(var3)(var4);
                var6 = var7.interpolate;
                var5 = _closure2_slot54;
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
            var31 = var58[var18];
            var31 = var59.bind(var5)(var31);
            var31 = var31.interpolate;
            var29['interpolate'] = var31;
            var29['recapPullProgress'] = var56;
            var31 = _closure1_slot19;
            var29['FOOTER_FADE_START_PROGRESS'] = var31;
            var31 = _closure1_slot20;
            var29['FOOTER_FADE_END_PROGRESS'] = var31;
            var31 = var58[var18];
            var31 = var59.bind(var5)(var31);
            var31 = var31.Extrapolation;
            var29['Extrapolation'] = var31;
            var11['__closure'] = var29;
            var29 = 3685190194249.0;
            var11['__workletHash'] = var29;
            var29 = _closure1_slot39;
            var11['__initData'] = var29;
            var20 = var20.bind(var28)(var11);
            var11 = var58[var18];
            var29 = var59.bind(var5)(var11);
            var28 = var29.useAnimatedStyle;
            var11 = function Yt() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var3 = _closure2_slot30;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var4 = _closure2_slot17;
                    var5 = _closure2_slot13;
                    var2 = 2;
                    var2 = var5 / var2;
                    var2 = var4 - var2;
                    if(!(!(var3 >= var2))) { _fun0024_ip = 44; continue _fun0024 }
case 65:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 19;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.getRevealProgress;
                    var3 = _closure2_slot30;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
                    var3 = _closure2_slot16;
                    var2 = 0;
                    var7 = var5.bind(var6)(var4, var2, var3);
                    _fun0024_ip = 66; continue _fun0024;
case 44:
                    var2 = _closure2_slot54;
                    var1 = var2.get;
                    var7 = var1.bind(var2)();
case 66:
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
            var31['scrollY'] = var54;
            var31['lastBountyScrollOffset'] = var43;
            var31['slotHeight'] = var37;
            var31['recapPullProgress'] = var56;
            var32 = var58[var32];
            var32 = var59.bind(var5)(var32);
            var32 = var32.getRevealProgress;
            var31['getRevealProgress'] = var32;
            var31['recapRevealHeight'] = var2;
            var32 = var58[var18];
            var32 = var59.bind(var5)(var32);
            var32 = var32.interpolate;
            var31['interpolate'] = var32;
            var32 = _closure1_slot19;
            var31['FOOTER_FADE_START_PROGRESS'] = var32;
            var32 = _closure1_slot20;
            var31['FOOTER_FADE_END_PROGRESS'] = var32;
            var32 = var58[var18];
            var32 = var59.bind(var5)(var32);
            var32 = var32.Extrapolation;
            var31['Extrapolation'] = var32;
            var11['__closure'] = var31;
            var31 = 15092194442650.0;
            var11['__workletHash'] = var31;
            var31 = _closure1_slot40;
            var11['__initData'] = var31;
            var11 = var28.bind(var29)(var11);
            var32 = _closure1_slot4;
            var31 = var32.useMemo;
            var28 = var6.peekGradient;
            var29 = new Array(5);
            var29[0] = var28;
            var28 = var41.left;
            var29[1] = var28;
            var28 = var41.width;
            var29[2] = var28;
            var28 = var41.top;
            var29[3] = var28;
            var28 = var41.height;
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
            var31 = var31.bind(var32)(var28, var29);
            var28 = var58[var18];
            var32 = var59.bind(var5)(var28);
            var29 = var32.useAnimatedStyle;
            var28 = function Jt() {
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 11;
                var4 = var9[var2];
                var3 = undefined;
                var7 = var8.bind(var3)(var4);
                var6 = var7.interpolate;
                var10 = _closure2_slot30;
                var5 = var10.get;
                var5 = var5.bind(var10)();
                var10 = _closure2_slot13;
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
            var55 = var58[var18];
            var55 = var59.bind(var5)(var55);
            var55 = var55.interpolate;
            var43['interpolate'] = var55;
            var43['scrollY'] = var54;
            var43['slotHeight'] = var37;
            var55 = var58[var18];
            var55 = var59.bind(var5)(var55);
            var55 = var55.Extrapolation;
            var43['Extrapolation'] = var55;
            var28['__closure'] = var43;
            var43 = 5908400559291.0;
            var28['__workletHash'] = var43;
            var43 = _closure1_slot41;
            var28['__initData'] = var43;
            var29 = var29.bind(var32)(var28);
            var28 = var58[var18];
            var55 = var59.bind(var5)(var28);
            var43 = var55.useAnimatedReaction;
            var32 = function Gt() {
                var2 = _closure2_slot54;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = _closure1_slot20;
                var1 = var2 < var1;
                return var1;
            };
            var28 = {};
            var28['recapPullProgress'] = var56;
            var56 = _closure1_slot20;
            var28['FOOTER_FADE_END_PROGRESS'] = var56;
            var32['__closure'] = var28;
            var28 = 547045699209.0;
            var32['__workletHash'] = var28;
            var28 = _closure1_slot42;
            var32['__initData'] = var28;
            var28 = function Ut(arg1, arg2) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0025_ip = 60; continue _fun0025 }
case 61:
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
case 60:
                    var1 = undefined;
                    return var1;
                }
            };
            var56 = {};
            var58 = var58[var18];
            var58 = var59.bind(var5)(var58);
            var58 = var58.runOnJS;
            var56['runOnJS'] = var58;
            var56['setIsCloseButtonPressable'] = var57;
            var28['__closure'] = var56;
            var56 = 6290671204687.0;
            var28['__workletHash'] = var56;
            var56 = _closure1_slot43;
            var28['__initData'] = var56;
            var28 = var43.bind(var55)(var32, var28);
            var43 = _closure1_slot4;
            var32 = var43.useCallback;
            var28 = new Array(15);
            var28[0] = var37;
            var28[1] = var54;
            var28[2] = var53;
            var28[3] = var25;
            var28[4] = var33;
            var28[5] = var52;
            var28[6] = var48;
            var52 = var41.width;
            var28[7] = var52;
            var52 = var41.height;
            var28[8] = var52;
            var28[9] = var50;
            var28[10] = var42;
            var28[11] = var49;
            var28[12] = var51;
            var28[13] = var4;
            var28[14] = var10;
            var10 = function(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.item;
                    var12 = var1.index;
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot46;
                    var2 = {};
                    var2['index'] = var12;
                    var1 = _closure2_slot13;
                    var2['slotHeight'] = var1;
                    var1 = _closure2_slot30;
                    var2['scrollY'] = var1;
                    var1 = _closure2_slot53;
                    var2['style'] = var1;
                    var1 = _closure2_slot35;
                    var2['isPeekEnabled'] = var1;
                    var8 = _closure2_slot26;
                    var1 = undefined;
                    var7 = undefined;
                    if(!(var12 === var8)) { _fun0026_ip = 55; continue _fun0026 }
case 13:
                    var8 = _closure2_slot10;
                    var7 = undefined;
                    if(!var8) { _fun0026_ip = 55; continue _fun0026 }
case 67:
                    var7 = _closure2_slot37;
case 55:
                    var2['peekScale'] = var7;
                    var8 = _closure1_slot12;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 31;
                    var6 = var9[var6];
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.BountiesScrollVideoItem;
                    var6 = {};
                    var6['bounty'] = var5;
                    var9 = _closure2_slot1;
                    var6['sourceQuestContent'] = var9;
                    var9 = _closure2_slot5;
                    var11 = var9.width;
                    var6['width'] = var11;
                    var9 = var9.height;
                    var6['height'] = var9;
                    var9 = _closure2_slot26;
                    var9 = var12 === var9;
                    var6['isActive'] = var9;
                    var9 = _closure2_slot20;
                    var6['isRecapPageRevealed'] = var9;
                    var9 = _closure2_slot22;
                    var6['isRecapPageOnTop'] = var9;
                    var9 = _closure2_slot28;
                    var6['isScrollingInBoundsSharedValue'] = var9;
                    var9 = _closure2_slot36;
                    if(!var9) { _fun0026_ip = 68; continue _fun0026 }
case 69:
                    var11 = 0;
                    var9 = var11 === var12;
case 68:
                    var6['isScrollIndicatorOverlayEnabled'] = var9;
                    var11 = _closure2_slot10;
                    var9 = undefined;
                    if(!var11) { _fun0026_ip = 70; continue _fun0026 }
case 71:
                    var9 = _closure2_slot45;
case 70:
                    var6['scrollAffordance'] = var9;
                    var5 = var5.id;
                    var5 = var8.bind(var1)(var7, var6, var5);
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var43 = var32.bind(var43)(var10, var28);
            var32 = _closure1_slot4;
            var28 = var32.useMemo;
            var10 = new Array(8);
            var10[0] = var50;
            var10[1] = var42;
            var10[2] = var49;
            var42 = var41.width;
            var10[3] = var42;
            var41 = var41.height;
            var10[4] = var41;
            var10[5] = var25;
            var10[6] = var33;
            var10[7] = var4;
            var4 = function() {
                var1 = {};
                var3 = _closure2_slot26;
                var1['activeIndex'] = var3;
                var3 = _closure2_slot20;
                var1['isRecapPageRevealed'] = var3;
                var3 = _closure2_slot22;
                var1['isRecapPageOnTop'] = var3;
                var3 = _closure2_slot5;
                var4 = var3.width;
                var1['width'] = var4;
                var3 = var3.height;
                var1['height'] = var3;
                var3 = _closure2_slot35;
                var1['isPeekEnabled'] = var3;
                var3 = _closure2_slot10;
                var1['isAutoScrollEnabled'] = var3;
                var2 = _closure2_slot36;
                var1['canShowScrollIndicatorOverlay'] = var2;
                return var1;
            };
            var42 = var28.bind(var32)(var4, var10);
            var28 = _closure1_slot4;
            var10 = var28.useCallback;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function(arg1) {
                var2 = _closure2_slot12;
                var1 = arg1;
                var1['size'] = var2;
                var1 = undefined;
                return var1;
            };
            var41 = var10.bind(var28)(var2, var4);
            var2 = var9.length;
            if(!(var3 !== var2)) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            if(var14) { _fun0003_ip = 74; continue _fun0003 }
case 75:
            var10 = null;
            if(!var15) { _fun0003_ip = 76; continue _fun0003 }
case 77:
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
            _fun0003_ip = 76; continue _fun0003;
case 74:
            var4 = _closure1_slot12;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 32;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var10 = var4.bind(var5)(var3, var2);
case 76:
            var4 = _closure1_slot13;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = var6.root;
            var2['style'] = var6;
            var28 = _closure1_slot12;
            var7 = _closure1_slot1;
            var32 = _closure1_slot2;
            var6 = 34;
            var6 = var32[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var32 = null;
            if(!var21) { _fun0003_ip = 78; continue _fun0003 }
case 79:
            var32 = null;
            if(!var8) { _fun0003_ip = 78; continue _fun0003 }
case 80:
            var32 = var22;
case 78:
            var6['progress'] = var32;
            var7 = var28.bind(var5)(var7, var6);
            var6 = new Array(7);
            var6[0] = var7;
            var7 = null;
            if(!var27) { _fun0003_ip = 81; continue _fun0003 }
case 82:
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
            if(!var49) { _fun0003_ip = 83; continue _fun0003 }
case 84:
            var33 = 'box-none';
case 83:
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
                var6 = _closure2_slot51;
                var1['orbAmount'] = var6;
                var5 = _closure2_slot52;
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
case 81:
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
            if(!var25) { _fun0003_ip = 85; continue _fun0003 }
case 86:
            var9 = var9.length;
            var9 = var9 > var17;
            var7 = null;
            if(!var9) { _fun0003_ip = 85; continue _fun0003 }
case 87:
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
case 85:
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
            if(!var23) { _fun0003_ip = 88; continue _fun0003 }
case 89:
            var20 = 'box-none';
case 88:
            var7['pointerEvents'] = var20;
            var20 = null;
            if(!var23) { _fun0003_ip = 90; continue _fun0003 }
case 91:
            var25 = _closure1_slot12;
            var24 = _closure1_slot1;
            var27 = _closure1_slot2;
            var23 = 39;
            var23 = var27[var23];
            var24 = var24.bind(var5)(var23);
            var23 = {};
            var23['onPress'] = var26;
            var20 = var25.bind(var5)(var24, var23);
case 90:
            var7['children'] = var20;
            var7 = var17.bind(var5)(var9, var7);
            var6[4] = var7;
            var7 = null;
            if(!var8) { _fun0003_ip = 92; continue _fun0003 }
case 93:
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
case 92:
            var6[5] = var7;
            var9 = _closure1_slot12;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var16];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            if(var14) { _fun0003_ip = 94; continue _fun0003 }
case 95:
            var14 = var15;
case 94:
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
case 72:
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
    var4 = ['rgba(0,0,0,0)', 'rgba(0,0,0,1)'];
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
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
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
                if(!var1) { _fun0027_ip = 96; continue _fun0027 }
case 12:
                var2 = var2.contentOffset;
                var2 = var2.y;
                var1 = var2 <= var3;
case 96:
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
    var7 = "function BountiesModalContentScrollTsx2(){const{scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation,peekScale}=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);if(peekScale!=null){return{opacity:opacity,transformOrigin:'top',transform:[{scale:peekScale.get()}]};}return{opacity:opacity};}";
    var4['code'] = var7;
    var _closure1_slot24 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx3(event){const{scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;scrollY.set(event.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}}';
    var4['code'] = var7;
    var _closure1_slot25 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx4(event){const{isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds,runOnJS,cancelScrollAffordance}=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));runOnJS(cancelScrollAffordance)();}';
    var4['code'] = var7;
    var _closure1_slot26 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx5(){const{isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue}=this.__closure;isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}}';
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
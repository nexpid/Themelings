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
            var5 = _closure1_slot9;
            var4 = _closure1_slot5;
            var3 = {};
            var2 = {};
            var6 = _closure1_slot15;
            var2['height'] = var6;
            var3['style'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
case 2:
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function BountiesRecapPullZone(arg1) {
        var1 = arg1;
        var5 = var1.height;
        var4 = _closure1_slot9;
        var3 = _closure1_slot5;
        var2 = {};
        var1 = {};
        var1['height'] = var5;
        var2['style'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot39 = var1;
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
        var1 = 10;
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
            var2 = 10;
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
        var10 = _closure1_slot20;
        var3['__initData'] = var10;
        var7 = var7.bind(var9)(var3);
        var3 = _closure1_slot9;
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
    var _closure1_slot40 = var1;
    var1 = function BountiesModalContentScrollInner(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.initialBountyId;
            var _closure2_slot0 = var2;
            var4 = var1.sourceQuestContent;
            var _closure2_slot1 = var4;
            var1 = _closure1_slot19;
            var5 = undefined;
            var10 = var1.bind(var5)();
            var _closure2_slot2 = var10;
            var2 = _closure1_slot1;
            var46 = _closure1_slot2;
            var1 = 11;
            var1 = var46[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var11 = var1.height;
            var _closure2_slot3 = var11;
            var2 = {};
            var1 = 97;
            var2['footerHeight'] = var1;
            var1 = function useBountiesScrollVideoLayout(arg1) {
                var2 = arg1;
                var5 = var2.footerHeight;
                var _closure3_slot0 = var5;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 11;
                var3 = var9[var3];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var8 = var3.width;
                var _closure3_slot1 = var8;
                var7 = var3.height;
                var _closure3_slot2 = var7;
                var3 = 12;
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
                        var4 = _closure1_slot14;
                        var4 = var3 / var4;
                        var6 = var3;
                        if(!(var4 > var1)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                        var5 = _closure1_slot14;
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
            var2 = var1.bind(var5)(var2);
            var _closure2_slot4 = var2;
            var3 = _closure1_slot4;
            var1 = var3.useRef;
            var7 = null;
            var36 = var1.bind(var3)(var7);
            var47 = _closure1_slot0;
            var1 = 13;
            var1 = var46[var1];
            var3 = var47.bind(var5)(var1);
            var1 = var3.useQuestHomeBounties;
            var1 = var1.bind(var3)();
            var1 = var1.questHomeBounties;
            var _closure2_slot5 = var1;
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure2_slot5;
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
                    var5 = _closure2_slot5;
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
                    var1 = _closure2_slot5;
case 8:
                    return var1;
                }
            };
            var3 = var3.bind(var6)(var1);
            var1 = _closure1_slot3;
            var38 = 1;
            var1 = var1.bind(var5)(var3, var38);
            var3 = 0;
            var35 = var1[var3];
            var _closure2_slot6 = var35;
            var1 = 14;
            var1 = var46[var1];
            var1 = var47.bind(var5)(var1);
            var8 = var1.BountiesStage1Experiment;
            var6 = var8.useConfig;
            var1 = {};
            var9 = _closure1_slot7;
            var9 = var9.VIDEO_MODAL_MOBILE;
            var1['location'] = var9;
            var6 = var6.bind(var8)(var1);
            var1 = var6.orbAmount;
            var _closure2_slot7 = var1;
            var9 = var6.rewardTimerSeconds;
            var _closure2_slot8 = var9;
            var6 = 15;
            var6 = var46[var6];
            var13 = var47.bind(var5)(var6);
            var12 = var13.useStateFromStores;
            var6 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = new Array(2);
            var6[0] = var35;
            var6[1] = var1;
            var1 = function() {
                var4 = _closure1_slot6;
                var3 = var4.getCompletedBountyCount;
                var2 = _closure2_slot6;
                var2 = var3.bind(var4)(var2);
                var1 = _closure2_slot7;
                var1 = var2 * var1;
                return var1;
            };
            var18 = var12.bind(var13)(var8, var1, var6);
            var1 = var2.height;
            var _closure2_slot9 = var1;
            var6 = _closure1_slot15;
            var27 = var1 + var6;
            var _closure2_slot10 = var27;
            var6 = var35.length;
            var30 = var6 - var38;
            var _closure2_slot11 = var30;
            var6 = var18 > var3;
            var _closure2_slot12 = var6;
            var _closure2_slot13 = var1;
            var23 = var30 * var27;
            var _closure2_slot14 = var23;
            var22 = var23 + var1;
            var _closure2_slot15 = var22;
            var14 = _closure1_slot4;
            var13 = var14.useMemo;
            var12 = new Array(3);
            var12[0] = var22;
            var12[1] = var23;
            var12[2] = var1;
            var8 = function() {
                var1 = {};
                var3 = _closure2_slot14;
                var1['lastBounty'] = var3;
                var3 = _closure2_slot15;
                var1['fullRecap'] = var3;
                var2 = _closure2_slot13;
                var1['revealHeight'] = var2;
                return var1;
            };
            var14 = var13.bind(var14)(var8, var12);
            var25 = 16;
            var8 = var46[var25];
            var13 = var47.bind(var5)(var8);
            var12 = var13.useBountiesRecapScroll;
            var8 = {};
            var8['listRef'] = var36;
            var8['enabled'] = var6;
            var8['offsets'] = var14;
            var8 = var12.bind(var13)(var8);
            var39 = var8.scrollToLastBounty;
            var44 = var8.handleRecapMomentumEnd;
            var _closure2_slot16 = var44;
            var14 = _closure1_slot4;
            var13 = var14.useMemo;
            var12 = new Array(4);
            var12[0] = var35;
            var12[1] = var22;
            var12[2] = var6;
            var12[3] = var27;
            var8 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure2_slot6;
                    var3 = var4.map;
                    var1 = function(arg1, arg2) {
                        var2 = _closure2_slot10;
                        var1 = arg2;
                        var1 = var1 * var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1);
                    var3 = _closure2_slot12;
                    if(!var3) { _fun0005_ip = 9; continue _fun0005 }
case 7:
                    var3 = var1.push;
                    var2 = _closure2_slot15;
                    var2 = var3.bind(var1)(var2);
case 9:
                    return var1;
                }
            };
            var29 = var13.bind(var14)(var8, var12);
            var12 = _closure1_slot4;
            var8 = var12.useState;
            var28 = false;
            var12 = var8.bind(var12)(var28);
            var8 = _closure1_slot3;
            var15 = 2;
            var8 = var8.bind(var5)(var12, var15);
            var16 = var8[var3];
            var _closure2_slot17 = var16;
            var32 = var8[var38];
            var _closure2_slot18 = var32;
            var12 = _closure1_slot4;
            var8 = var12.useState;
            var12 = var8.bind(var12)(var28);
            var8 = _closure1_slot3;
            var8 = var8.bind(var5)(var12, var15);
            var20 = var8[var3];
            var _closure2_slot19 = var20;
            var24 = var8[var38];
            var _closure2_slot20 = var24;
            var13 = _closure1_slot4;
            var12 = var13.useState;
            var8 = true;
            var12 = var12.bind(var13)(var8);
            var8 = _closure1_slot3;
            var8 = var8.bind(var5)(var12, var15);
            var14 = var8[var3];
            var45 = var8[var38];
            var _closure2_slot21 = var45;
            var12 = _closure1_slot4;
            var8 = var12.useState;
            var12 = var8.bind(var12)(var28);
            var8 = _closure1_slot3;
            var12 = var8.bind(var5)(var12, var15);
            var8 = var12[var3];
            var41 = var12[var38];
            var _closure2_slot22 = var41;
            var13 = _closure1_slot4;
            var12 = var13.useState;
            var13 = var12.bind(var13)(var3);
            var12 = _closure1_slot3;
            var12 = var12.bind(var5)(var13, var15);
            var31 = var12[var3];
            var _closure2_slot23 = var31;
            var42 = var12[var38];
            var _closure2_slot24 = var42;
            var12 = 10;
            var13 = var46[var12];
            var15 = var47.bind(var5)(var13);
            var13 = var15.useSharedValue;
            var43 = var13.bind(var15)(var28);
            var _closure2_slot25 = var43;
            var13 = var46[var12];
            var15 = var47.bind(var5)(var13);
            var13 = var15.useSharedValue;
            var48 = var13.bind(var15)(var28);
            var _closure2_slot26 = var48;
            var13 = var46[var12];
            var15 = var47.bind(var5)(var13);
            var13 = var15.useSharedValue;
            var33 = var13.bind(var15)(var3);
            var _closure2_slot27 = var33;
            var13 = 17;
            var13 = var46[var13];
            var19 = var47.bind(var5)(var13);
            var15 = var19.useBountiesRecapOrbCount;
            var13 = {};
            var13['scrollY'] = var33;
            var13['lastBountyScrollOffset'] = var23;
            var13['recapRevealHeight'] = var1;
            var13['targetOrbAmount'] = var18;
            var13['enabled'] = var6;
            var40 = var15.bind(var19)(var13);
            var21 = _closure1_slot4;
            var19 = var21.useEffect;
            var15 = new Array(2);
            var15[0] = var35;
            var15[1] = var31;
            var13 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var1 = _closure2_slot23;
                    var1 = var2[var1];
                    var2 = null;
                    if(!(var2 != var1)) { _fun0006_ip = 10; continue _fun0006 }
case 11:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 18;
                    var2 = var7[var2];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var2);
                    var3 = var4.markAdContentSeen;
                    var2 = 19;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.AdCreativeType;
                    var2 = var2.BOUNTY;
                    var5 = var1.id;
                    var1 = new Array(1);
                    var1[0] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var19.bind(var21)(var13, var15);
            var19 = _closure1_slot4;
            var15 = var19.useCallback;
            var13 = new Array(4);
            var13[0] = var35;
            var13[1] = var31;
            var13[2] = var9;
            var13[3] = var4;
            var9 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var1 = _closure2_slot23;
                    var9 = var2[var1];
                    var2 = null;
                    if(!(var2 != var9)) { _fun0007_ip = 12; continue _fun0007 }
case 13:
                    var6 = _closure1_slot6;
                    var3 = var6.getBountyVideoProgress;
                    var1 = var9.id;
                    var3 = var3.bind(var6)(var1);
                    var6 = var2 == var3;
                    var12 = undefined;
                    var1 = undefined;
                    if(var6) { _fun0007_ip = 14; continue _fun0007 }
case 15:
                    var1 = var3.maxTimestampSec;
case 14:
                    var6 = var2 != var1;
                    var8 = 0;
                    if(!var6) { _fun0007_ip = 16; continue _fun0007 }
case 17:
                    var8 = var1;
case 16:
                    var6 = var2 == var3;
                    var1 = undefined;
                    if(var6) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                    var1 = var3.duration;
case 18:
                    var2 = var2 != var1;
                    var11 = 0;
                    if(!var2) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                    var11 = var1;
case 20:
                    var1 = _closure2_slot8;
                    var7 = 1000;
                    var6 = var7 * var1;
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var1 = 20;
                    var1 = var13[var1];
                    var3 = var10.bind(var12)(var1);
                    var2 = var3.trackAdContentEvent;
                    var1 = {};
                    var9 = var9.id;
                    var1['adContentId'] = var9;
                    var9 = 19;
                    var9 = var13[var9];
                    var9 = var10.bind(var12)(var9);
                    var9 = var9.AdCreativeType;
                    var9 = var9.BOUNTY;
                    var1['adCreativeType'] = var9;
                    var5 = _closure1_slot8;
                    var5 = var5.AD_VIDEO_MODAL_CLOSED;
                    var1['event'] = var5;
                    var5 = {};
                    var9 = 21;
                    var9 = var13[var9];
                    var16 = var10.bind(var12)(var9);
                    var15 = var16.getQuestContentName;
                    var9 = 22;
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
                    var9 = 23;
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
case 12:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 24;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideModal;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var19 = var15.bind(var19)(var9, var13);
            var21 = _closure1_slot4;
            var15 = var21.useCallback;
            var13 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideModal;
                var2 = var2.bind(var3)();
                return var1;
            };
            var9 = new Array(0);
            var37 = var15.bind(var21)(var13, var9);
            var9 = var46[var12];
            var15 = var47.bind(var5)(var9);
            var13 = var15.useAnimatedScrollHandler;
            var9 = {};
            var21 = function Fe(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = arg1;
                    var4 = _closure2_slot27;
                    var3 = var4.set;
                    var2 = var5.contentOffset;
                    var2 = var2.y;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot26;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0008_ip = 22; continue _fun0008 }
case 9:
                    var3 = _closure2_slot25;
                    var2 = var3.set;
                    var4 = _closure1_slot18;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var5);
                    var1 = var2.bind(var3)(var1);
case 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = {};
            var26['scrollY'] = var33;
            var26['isDraggingSharedValue'] = var48;
            var26['isScrollingInBoundsSharedValue'] = var43;
            var49 = _closure1_slot18;
            var26['isScrollEventInBounds'] = var49;
            var21['__closure'] = var26;
            var26 = 7942598540397.0;
            var21['__workletHash'] = var26;
            var26 = _closure1_slot21;
            var21['__initData'] = var26;
            var9['onScroll'] = var21;
            var21 = function be(arg1) {
                var4 = _closure2_slot26;
                var3 = var4.set;
                var2 = true;
                var2 = var3.bind(var4)(var2);
                var4 = _closure2_slot25;
                var3 = var4.set;
                var5 = _closure1_slot18;
                var1 = undefined;
                var2 = arg1;
                var2 = var5.bind(var1)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var26 = {};
            var26['isDraggingSharedValue'] = var48;
            var26['isScrollingInBoundsSharedValue'] = var43;
            var49 = _closure1_slot18;
            var26['isScrollEventInBounds'] = var49;
            var21['__closure'] = var26;
            var26 = 14039038912528.0;
            var21['__workletHash'] = var26;
            var26 = _closure1_slot22;
            var21['__initData'] = var26;
            var9['onBeginDrag'] = var21;
            var21 = function He() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = _closure2_slot26;
                    var2 = var4.set;
                    var3 = false;
                    var2 = var2.bind(var4)(var3);
                    var2 = _closure1_slot12;
                    if(var2) { _fun0009_ip = 23; continue _fun0009 }
case 24:
                    var2 = _closure2_slot25;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
case 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = {};
            var26['isDraggingSharedValue'] = var48;
            var48 = _closure1_slot12;
            var26['IS_ANDROID'] = var48;
            var26['isScrollingInBoundsSharedValue'] = var43;
            var21['__closure'] = var26;
            var26 = 9975335138319.0;
            var21['__workletHash'] = var26;
            var26 = _closure1_slot23;
            var21['__initData'] = var26;
            var9['onEndDrag'] = var21;
            var21 = function Ve(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot12;
                    if(!var2) { _fun0010_ip = 25; continue _fun0010 }
case 26:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var2 = var4[var2];
                    var4 = undefined;
                    var5 = var3.bind(var4)(var2);
                    var3 = var5.runOnJS;
                    var2 = _closure2_slot16;
                    var3 = var3.bind(var5)(var2);
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
case 25:
                    var3 = _closure2_slot25;
                    var2 = var3.set;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = {};
            var26['showRecapPullZone'] = var6;
            var48 = var46[var12];
            var48 = var47.bind(var5)(var48);
            var48 = var48.runOnJS;
            var26['runOnJS'] = var48;
            var26['handleRecapMomentumEnd'] = var44;
            var26['isScrollingInBoundsSharedValue'] = var43;
            var21['__closure'] = var26;
            var26 = 13684210320337.0;
            var21['__workletHash'] = var26;
            var26 = _closure1_slot24;
            var21['__initData'] = var26;
            var9['onMomentumEnd'] = var21;
            var26 = var13.bind(var15)(var9);
            var9 = var46[var12];
            var21 = var47.bind(var5)(var9);
            var15 = var21.useAnimatedReaction;
            var13 = function Je() {
                var1 = global;
                var4 = var1.Math;
                var3 = var4.min;
                var7 = var1.Math;
                var6 = var7.max;
                var8 = var1.Math;
                var5 = var8.round;
                var9 = _closure2_slot27;
                var2 = var9.get;
                var9 = var2.bind(var9)();
                var2 = _closure2_slot10;
                var2 = var9 / var2;
                var5 = var5.bind(var8)(var2);
                var2 = 0;
                var2 = var6.bind(var7)(var5, var2);
                var1 = _closure2_slot11;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var9 = {};
            var9['scrollY'] = var33;
            var9['slotHeight'] = var27;
            var9['lastBountyIndex'] = var30;
            var13['__closure'] = var9;
            var9 = 14048843158960.0;
            var13['__workletHash'] = var9;
            var9 = _closure1_slot25;
            var13['__initData'] = var9;
            var9 = function Ne(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0011_ip = 25; continue _fun0011 }
case 26:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot24;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = {};
            var44 = var46[var12];
            var44 = var47.bind(var5)(var44);
            var44 = var44.runOnJS;
            var30['runOnJS'] = var44;
            var30['setActiveIndex'] = var42;
            var9['__closure'] = var30;
            var30 = 1309847555550.0;
            var9['__workletHash'] = var30;
            var30 = _closure1_slot26;
            var9['__initData'] = var30;
            var9 = var15.bind(var21)(var13, var9);
            var9 = var46[var12];
            var21 = var47.bind(var5)(var9);
            var15 = var21.useAnimatedReaction;
            var13 = function ke() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = _closure2_slot12;
                    if(!var1) { _fun0012_ip = 27; continue _fun0012 }
case 26:
                    var4 = _closure2_slot27;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var4 = _closure2_slot14;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 16;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var2 = var2.RECAP_SNAP_EPSILON;
                    var2 = var4 - var2;
                    var1 = var3 >= var2;
case 27:
                    return var1;
                }
            };
            var9 = {};
            var9['showRecapPullZone'] = var6;
            var9['scrollY'] = var33;
            var9['lastBountyScrollOffset'] = var23;
            var30 = var46[var25];
            var30 = var47.bind(var5)(var30);
            var30 = var30.RECAP_SNAP_EPSILON;
            var9['RECAP_SNAP_EPSILON'] = var30;
            var13['__closure'] = var9;
            var9 = 6584708256992.0;
            var13['__workletHash'] = var9;
            var9 = _closure1_slot27;
            var13['__initData'] = var9;
            var9 = function Le(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0013_ip = 25; continue _fun0013 }
case 26:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot22;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = {};
            var42 = var46[var12];
            var42 = var47.bind(var5)(var42);
            var42 = var42.runOnJS;
            var30['runOnJS'] = var42;
            var30['setShowRecapFooter'] = var41;
            var9['__closure'] = var30;
            var30 = 10788669301891.0;
            var9['__workletHash'] = var30;
            var30 = _closure1_slot28;
            var9['__initData'] = var30;
            var9 = var15.bind(var21)(var13, var9);
            var9 = var46[var12];
            var21 = var47.bind(var5)(var9);
            var15 = var21.useAnimatedReaction;
            var13 = function Ze() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure2_slot12;
                    if(!var1) { _fun0014_ip = 28; continue _fun0014 }
case 26:
                    var4 = _closure2_slot27;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = _closure2_slot14;
                    var1 = var3 > var2;
case 28:
                    return var1;
                }
            };
            var9 = {};
            var9['showRecapPullZone'] = var6;
            var9['scrollY'] = var33;
            var9['lastBountyScrollOffset'] = var23;
            var13['__closure'] = var9;
            var9 = 6186370630693.0;
            var13['__workletHash'] = var9;
            var9 = _closure1_slot29;
            var13['__initData'] = var9;
            var9 = function Ye(arg1, arg2) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0015_ip = 25; continue _fun0015 }
case 26:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot18;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = {};
            var41 = var46[var12];
            var41 = var47.bind(var5)(var41);
            var41 = var41.runOnJS;
            var30['runOnJS'] = var41;
            var30['setIsRecapPageRevealed'] = var32;
            var9['__closure'] = var30;
            var30 = 12713474352874.0;
            var9['__workletHash'] = var30;
            var30 = _closure1_slot30;
            var9['__initData'] = var30;
            var9 = var15.bind(var21)(var13, var9);
            var9 = var46[var12];
            var21 = var47.bind(var5)(var9);
            var15 = var21.useAnimatedReaction;
            var13 = function Qe() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = _closure2_slot12;
                    if(!var1) { _fun0016_ip = 27; continue _fun0016 }
case 26:
                    var4 = _closure2_slot27;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var4 = _closure2_slot15;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 16;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var2 = var2.RECAP_SNAP_EPSILON;
                    var2 = var4 - var2;
                    var1 = var3 >= var2;
case 27:
                    return var1;
                }
            };
            var9 = {};
            var9['showRecapPullZone'] = var6;
            var9['scrollY'] = var33;
            var9['fullRecapScrollOffset'] = var22;
            var22 = var46[var25];
            var22 = var47.bind(var5)(var22);
            var22 = var22.RECAP_SNAP_EPSILON;
            var9['RECAP_SNAP_EPSILON'] = var22;
            var13['__closure'] = var9;
            var9 = 5669564400667.0;
            var13['__workletHash'] = var9;
            var9 = _closure1_slot31;
            var13['__initData'] = var9;
            var9 = function Ge(arg1, arg2) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0017_ip = 25; continue _fun0017 }
case 26:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot20;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = {};
            var30 = var46[var12];
            var30 = var47.bind(var5)(var30);
            var30 = var30.runOnJS;
            var22['runOnJS'] = var30;
            var22['setIsRecapPageOnTop'] = var24;
            var9['__closure'] = var22;
            var22 = 8102193741774.0;
            var9['__workletHash'] = var22;
            var22 = _closure1_slot32;
            var9['__initData'] = var22;
            var9 = var15.bind(var21)(var13, var9);
            var21 = _closure1_slot4;
            var15 = var21.useMemo;
            var13 = new Array(2);
            var13[0] = var1;
            var13[1] = var6;
            var9 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = _closure2_slot12;
                    var1 = null;
                    if(!var3) { _fun0018_ip = 29; continue _fun0018 }
case 30:
                    var5 = _closure1_slot9;
                    var4 = _closure1_slot39;
                    var3 = {};
                    var2 = _closure2_slot13;
                    var3['height'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
case 29:
                    return var1;
                }
            };
            var30 = var15.bind(var21)(var9, var13);
            var21 = _closure1_slot4;
            var15 = var21.useMemo;
            var9 = var10.listWrapper;
            var13 = new Array(2);
            var13[0] = var9;
            var13[1] = var2;
            var9 = function() {
                var1 = _closure2_slot2;
                var2 = var1.listWrapper;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var4 = 0;
                var2['top'] = var4;
                var3 = _closure2_slot4;
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
            var9 = var15.bind(var21)(var9, var13);
            var22 = _closure1_slot4;
            var21 = var22.useMemo;
            var13 = var2.top;
            var15 = new Array(1);
            var15[0] = var13;
            var13 = function() {
                var1 = {};
                var2 = _closure2_slot4;
                var2 = var2.top;
                var1['paddingTop'] = var2;
                var2 = 97;
                var1['paddingBottom'] = var2;
                return var1;
            };
            var24 = var21.bind(var22)(var13, var15);
            var22 = _closure1_slot4;
            var21 = var22.useMemo;
            var13 = var2.width;
            var15 = new Array(2);
            var15[0] = var13;
            var13 = var2.height;
            var15[1] = var13;
            var13 = function() {
                var1 = {};
                var2 = _closure2_slot4;
                var3 = var2.width;
                var1['width'] = var3;
                var2 = var2.height;
                var1['height'] = var2;
                return var1;
            };
            var42 = var21.bind(var22)(var13, var15);
            var _closure2_slot28 = var42;
            var22 = _closure1_slot4;
            var21 = var22.useMemo;
            var13 = var10.closeButton;
            var15 = new Array(4);
            var15[0] = var13;
            var13 = var2.top;
            var15[1] = var13;
            var13 = var2.left;
            var15[2] = var13;
            var13 = var2.width;
            var15[3] = var13;
            var13 = function() {
                var1 = _closure2_slot2;
                var2 = var1.closeButton;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var4 = _closure2_slot4;
                var9 = var4.top;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 8;
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
            var15 = var21.bind(var22)(var13, var15);
            var22 = _closure1_slot4;
            var21 = var22.useMemo;
            var13 = new Array(6);
            var13[0] = var20;
            var32 = var10.recapPage;
            var13[1] = var32;
            var32 = var2.top;
            var13[2] = var32;
            var32 = var2.left;
            var13[3] = var32;
            var32 = var2.width;
            var13[4] = var32;
            var13[5] = var11;
            var11 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var2 = var1.recapPage;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var4 = _closure2_slot4;
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
                    var4 = _closure2_slot19;
                    var3 = null;
                    if(!var4) { _fun0019_ip = 31; continue _fun0019 }
case 6:
                    var4 = {};
                    var5 = _closure1_slot13;
                    var4['zIndex'] = var5;
                    var3 = var4;
case 31:
                    var7 = var2;
                    var6 = var3;
                    var3 = copyDataProperties(var7, var6);
                    var1[1] = var2;
                    return var1;
                }
            };
            var41 = var21.bind(var22)(var11, var13);
            var11 = var46[var12];
            var21 = var47.bind(var5)(var11);
            var13 = var21.useDerivedValue;
            var11 = function We() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.getRecapPullProgress;
                var3 = _closure2_slot27;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = _closure2_slot14;
                var1 = _closure2_slot13;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var22 = {};
            var32 = var46[var25];
            var32 = var47.bind(var5)(var32);
            var32 = var32.getRecapPullProgress;
            var22['getRecapPullProgress'] = var32;
            var22['scrollY'] = var33;
            var22['lastBountyScrollOffset'] = var23;
            var22['recapRevealHeight'] = var1;
            var11['__closure'] = var22;
            var22 = 1811242127410.0;
            var11['__workletHash'] = var22;
            var22 = _closure1_slot33;
            var11['__initData'] = var22;
            var44 = var13.bind(var21)(var11);
            var _closure2_slot29 = var44;
            var11 = var46[var12];
            var21 = var47.bind(var5)(var11);
            var13 = var21.useAnimatedStyle;
            var11 = function qe() {
                var1 = {};
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 10;
                var5 = var8[var2];
                var3 = undefined;
                var7 = var4.bind(var3)(var5);
                var6 = var7.interpolate;
                var9 = _closure2_slot29;
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
            var22 = {};
            var23 = var46[var12];
            var23 = var47.bind(var5)(var23);
            var23 = var23.interpolate;
            var22['interpolate'] = var23;
            var22['recapPullProgress'] = var44;
            var23 = var46[var12];
            var23 = var47.bind(var5)(var23);
            var23 = var23.Extrapolation;
            var22['Extrapolation'] = var23;
            var11['__closure'] = var22;
            var22 = 1497321349449.0;
            var11['__workletHash'] = var22;
            var22 = _closure1_slot34;
            var11['__initData'] = var22;
            var23 = var13.bind(var21)(var11);
            var11 = var46[var12];
            var21 = var47.bind(var5)(var11);
            var13 = var21.useAnimatedStyle;
            var11 = function Ue() {
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 10;
                var5 = var9[var2];
                var3 = undefined;
                var7 = var8.bind(var3)(var5);
                var6 = var7.interpolate;
                var10 = _closure2_slot29;
                var5 = var10.get;
                var5 = var5.bind(var10)();
                var10 = _closure1_slot16;
                var4 = [0.05];
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
            var22 = {};
            var32 = var46[var12];
            var32 = var47.bind(var5)(var32);
            var32 = var32.interpolate;
            var22['interpolate'] = var32;
            var22['recapPullProgress'] = var44;
            var32 = 0.05;
            var22['RECAP_FOOTER_FADE_START_PROGRESS'] = var32;
            var32 = _closure1_slot16;
            var22['RECAP_FOOTER_FADE_END_PROGRESS'] = var32;
            var32 = var46[var12];
            var32 = var47.bind(var5)(var32);
            var32 = var32.Extrapolation;
            var22['Extrapolation'] = var32;
            var11['__closure'] = var22;
            var22 = 12450336688713.0;
            var11['__workletHash'] = var22;
            var22 = _closure1_slot35;
            var11['__initData'] = var22;
            var22 = var13.bind(var21)(var11);
            var11 = var46[var12];
            var32 = var47.bind(var5)(var11);
            var21 = var32.useAnimatedReaction;
            var13 = function $e() {
                var2 = _closure2_slot29;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = _closure1_slot16;
                var1 = var2 < var1;
                return var1;
            };
            var11 = {};
            var11['recapPullProgress'] = var44;
            var44 = _closure1_slot16;
            var11['RECAP_FOOTER_FADE_END_PROGRESS'] = var44;
            var13['__closure'] = var11;
            var11 = 6640569673538.0;
            var13['__workletHash'] = var11;
            var11 = _closure1_slot36;
            var13['__initData'] = var11;
            var11 = function Ke(arg1, arg2) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0020_ip = 25; continue _fun0020 }
case 26:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot21;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var44 = {};
            var46 = var46[var12];
            var46 = var47.bind(var5)(var46);
            var46 = var46.runOnJS;
            var44['runOnJS'] = var46;
            var44['setIsCloseButtonPressable'] = var45;
            var11['__closure'] = var44;
            var44 = 10213044841924.0;
            var11['__workletHash'] = var44;
            var44 = _closure1_slot37;
            var11['__initData'] = var44;
            var11 = var21.bind(var32)(var13, var11);
            var32 = _closure1_slot4;
            var21 = var32.useMemo;
            var11 = var10.recapFooter;
            var13 = new Array(5);
            var13[0] = var11;
            var11 = var2.left;
            var13[1] = var11;
            var11 = var2.width;
            var13[2] = var11;
            var11 = var2.top;
            var13[3] = var11;
            var11 = var2.height;
            var13[4] = var11;
            var11 = function() {
                var3 = {};
                var4 = _closure2_slot4;
                var1 = var4.left;
                var3['left'] = var1;
                var1 = var4.width;
                var3['width'] = var1;
                var1 = 97;
                var3['height'] = var1;
                var1 = {};
                var2 = _closure2_slot2;
                var6 = var2.recapFooter;
                var5 = new Array(3);
                var5[0] = var6;
                var5[1] = var3;
                var6 = {};
                var7 = 0;
                var6['bottom'] = var7;
                var5[2] = var6;
                var1['gradient'] = var5;
                var5 = var2.recapFooter;
                var2 = new Array(3);
                var2[0] = var5;
                var2[1] = var3;
                var3 = {};
                var5 = var4.top;
                var4 = var4.height;
                var4 = var5 + var4;
                var3['top'] = var4;
                var2[2] = var3;
                var1['text'] = var2;
                return var1;
            };
            var21 = var21.bind(var32)(var11, var13);
            var32 = _closure1_slot4;
            var13 = var32.useCallback;
            var11 = new Array(9);
            var11[0] = var31;
            var11[1] = var16;
            var11[2] = var43;
            var11[3] = var27;
            var11[4] = var42;
            var11[5] = var33;
            var11[6] = var4;
            var4 = var2.height;
            var11[7] = var4;
            var4 = var2.width;
            var11[8] = var4;
            var4 = function(arg1) {
                var1 = arg1;
                var5 = var1.item;
                var11 = var1.index;
                var4 = _closure1_slot9;
                var3 = _closure1_slot40;
                var2 = {};
                var2['index'] = var11;
                var6 = _closure2_slot10;
                var2['slotHeight'] = var6;
                var6 = _closure2_slot27;
                var2['scrollY'] = var6;
                var6 = _closure2_slot28;
                var2['style'] = var6;
                var8 = _closure1_slot9;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 25;
                var6 = var6[var1];
                var1 = undefined;
                var6 = var7.bind(var1)(var6);
                var7 = var6.BountiesScrollVideoItem;
                var6 = {};
                var6['bounty'] = var5;
                var10 = _closure2_slot1;
                var6['sourceQuestContent'] = var10;
                var10 = _closure2_slot4;
                var12 = var10.width;
                var6['width'] = var12;
                var10 = var10.height;
                var6['height'] = var10;
                var10 = _closure2_slot23;
                var10 = var11 === var10;
                var6['isActive'] = var10;
                var10 = _closure2_slot17;
                var6['isRecapPageRevealed'] = var10;
                var9 = _closure2_slot25;
                var6['isScrollingInBoundsSharedValue'] = var9;
                var5 = var5.id;
                var5 = var8.bind(var1)(var7, var6, var5);
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var33 = var13.bind(var32)(var4, var11);
            var13 = _closure1_slot4;
            var11 = var13.useMemo;
            var4 = new Array(4);
            var4[0] = var31;
            var4[1] = var16;
            var16 = var2.width;
            var4[2] = var16;
            var2 = var2.height;
            var4[3] = var2;
            var2 = function() {
                var1 = {};
                var3 = _closure2_slot23;
                var1['activeIndex'] = var3;
                var3 = _closure2_slot17;
                var1['isRecapPageRevealed'] = var3;
                var2 = _closure2_slot4;
                var3 = var2.width;
                var1['width'] = var3;
                var2 = var2.height;
                var1['height'] = var2;
                return var1;
            };
            var32 = var11.bind(var13)(var2, var4);
            var11 = _closure1_slot4;
            var4 = var11.useCallback;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function(arg1) {
                var2 = _closure2_slot9;
                var1 = arg1;
                var1['size'] = var2;
                var1 = undefined;
                return var1;
            };
            var31 = var4.bind(var11)(var1, var2);
            var2 = var35.length;
            var1 = null;
            if(!(var3 !== var2)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var4 = _closure1_slot11;
            var3 = _closure1_slot5;
            var2 = {};
            var10 = var10.root;
            var2['style'] = var10;
            var10 = null;
            if(!var6) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var13 = _closure1_slot9;
            var11 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var12];
            var6 = var11.bind(var5)(var6);
            var11 = var6.View;
            var6 = {};
            var16 = new Array(2);
            var16[0] = var41;
            var16[1] = var23;
            var6['style'] = var16;
            var16 = 'none';
            if(!var20) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var16 = 'box-none';
case 36:
            var6['pointerEvents'] = var16;
            var23 = _closure1_slot9;
            var20 = _closure1_slot0;
            var41 = _closure1_slot2;
            var16 = 26;
            var16 = var41[var16];
            var16 = var20.bind(var5)(var16);
            var20 = var16.BountiesScrollRecapPage;
            var16 = {};
            var16['orbAmount'] = var40;
            var16['onBackToBounties'] = var39;
            var16['onClose'] = var37;
            var37 = {};
            var37['flex'] = var38;
            var16['style'] = var37;
            var16 = var23.bind(var5)(var20, var16);
            var6['children'] = var16;
            var10 = var13.bind(var5)(var11, var6);
case 34:
            var6 = new Array(4);
            var6[0] = var10;
            var13 = _closure1_slot9;
            var11 = _closure1_slot5;
            var10 = {};
            var10['style'] = var9;
            var23 = _closure1_slot9;
            var20 = _closure1_slot0;
            var9 = _closure1_slot2;
            var16 = 27;
            var16 = var9[var16];
            var16 = var20.bind(var5)(var16);
            var20 = var16.AnimatedFlashList;
            var16 = {};
            var16['ref'] = var36;
            var16['data'] = var35;
            var34 = function keyExtractor(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var16['keyExtractor'] = var34;
            var16['renderItem'] = var33;
            var16['extraData'] = var32;
            var16['overrideItemLayout'] = var31;
            var31 = _closure1_slot38;
            var16['ItemSeparatorComponent'] = var31;
            var16['ListFooterComponent'] = var30;
            var16['snapToOffsets'] = var29;
            var16['snapToEnd'] = var28;
            var16['estimatedItemSize'] = var27;
            var29 = 0.85;
            var16['decelerationRate'] = var29;
            var16['showsVerticalScrollIndicator'] = var28;
            var16['drawDistance'] = var27;
            var16['onScroll'] = var26;
            var16['scrollEventThrottle'] = var25;
            var16['contentContainerStyle'] = var24;
            var16 = var23.bind(var5)(var20, var16);
            var10['children'] = var16;
            var10 = var13.bind(var5)(var11, var10);
            var6[1] = var10;
            var11 = _closure1_slot9;
            var10 = _closure1_slot1;
            var9 = var9[var12];
            var9 = var10.bind(var5)(var9);
            var10 = var9.View;
            var9 = {};
            var13 = new Array(2);
            var13[0] = var15;
            var13[1] = var22;
            var9['style'] = var13;
            var20 = 'none';
            var13 = var20;
            if(!var14) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var13 = 'box-none';
case 38:
            var9['pointerEvents'] = var13;
            var13 = null;
            if(!var14) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var16 = _closure1_slot9;
            var15 = _closure1_slot1;
            var23 = _closure1_slot2;
            var14 = 28;
            var14 = var23[var14];
            var15 = var15.bind(var5)(var14);
            var14 = {};
            var14['onPress'] = var19;
            var13 = var16.bind(var5)(var15, var14);
case 40:
            var9['children'] = var13;
            var9 = var11.bind(var5)(var10, var9);
            var6[2] = var9;
            var7 = null;
            if(!var8) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var10 = _closure1_slot11;
            var9 = _closure1_slot10;
            var8 = {};
            var23 = _closure1_slot9;
            var13 = _closure1_slot1;
            var19 = _closure1_slot2;
            var11 = var19[var12];
            var11 = var13.bind(var5)(var11);
            var14 = var11.View;
            var11 = {};
            var16 = var21.gradient;
            var15 = new Array(2);
            var15[0] = var16;
            var15[1] = var22;
            var11['style'] = var15;
            var11['pointerEvents'] = var20;
            var26 = _closure1_slot9;
            var16 = _closure1_slot0;
            var15 = 29;
            var24 = var19[var15];
            var24 = var16.bind(var5)(var24);
            var25 = var24.BountiesScrollRecapFooterGradient;
            var24 = {};
            var24 = var26.bind(var5)(var25, var24);
            var11['children'] = var24;
            var14 = var23.bind(var5)(var14, var11);
            var11 = new Array(2);
            var11[0] = var14;
            var14 = _closure1_slot9;
            var12 = var19[var12];
            var12 = var13.bind(var5)(var12);
            var13 = var12.View;
            var12 = {};
            var23 = var21.text;
            var21 = new Array(2);
            var21[0] = var23;
            var21[1] = var22;
            var12['style'] = var21;
            var12['pointerEvents'] = var20;
            var17 = _closure1_slot9;
            var15 = var19[var15];
            var15 = var16.bind(var5)(var15);
            var16 = var15.BountiesScrollRecapFooter;
            var15 = {};
            var15['orbAmount'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var12['children'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var11[1] = var12;
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 42:
            var6[3] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 32:
            return var1;
        }
    };
    var _closure1_slot41 = var1;
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
    var8 = var8.QuestsExperimentLocations;
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AnalyticEvents;
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.jsx;
    var _closure1_slot9 = var9;
    var9 = var8.Fragment;
    var _closure1_slot10 = var9;
    var8 = var8.jsxs;
    var _closure1_slot11 = var8;
    var8 = 7;
    var8 = var6[var8];
    var9 = var5.bind(var1)(var8);
    var8 = var9.isAndroid;
    var8 = var8.bind(var9)();
    var _closure1_slot12 = var8;
    var _closure1_slot13 = var4;
    var4 = 0.5625;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.space;
    var4 = var4.PX_8;
    var _closure1_slot15 = var4;
    var4 = 0.1;
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = 'function isScrollEventInBounds_BountiesModalContentScrollTsx1(event){const maxOffset=Math.max(0,event.contentSize.height-event.layoutMeasurement.height);return event.contentOffset.y>=0&&event.contentOffset.y<=maxOffset;}';
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = function() {
        var1 = function isScrollEventInBounds(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
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
                if(!var1) { _fun0021_ip = 44; continue _fun0021 }
case 5:
                var2 = var2.contentOffset;
                var2 = var2.y;
                var1 = var2 <= var3;
case 44:
                return var1;
            }
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 14148486927190.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot17;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot18 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {};
        var3 = 1;
        var2['flex'] = var3;
        var1['root'] = var2;
        var4 = 'absolute';
        var2 = {'position': 'absolute', 'zIndex': 0};
        var1['recapPage'] = var2;
        var2 = {'position': 'absolute', 'zIndex': 1};
        var1['listWrapper'] = var2;
        var2 = {};
        var2['position'] = var4;
        var5 = _closure1_slot13;
        var2['zIndex'] = var5;
        var1['closeButton'] = var2;
        var2 = {};
        var2['position'] = var4;
        var3 = _closure1_slot13;
        var2['zIndex'] = var3;
        var1['recapFooter'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx2(){const{scrollY,index,slotHeight,interpolate,FADE_DEADBAND,Extrapolation}=this.__closure;const distance=Math.abs(scrollY.get()-index*slotHeight)/slotHeight;return{opacity:interpolate(distance,[0,FADE_DEADBAND,1],[1,1,0],Extrapolation.CLAMP)};}';
    var4['code'] = var7;
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx3(event){const{scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;scrollY.set(event.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}}';
    var4['code'] = var7;
    var _closure1_slot21 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx4(event){const{isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}';
    var4['code'] = var7;
    var _closure1_slot22 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx5(){const{isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue}=this.__closure;isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}}';
    var4['code'] = var7;
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx6(event){const{showRecapPullZone,runOnJS,handleRecapMomentumEnd,isScrollingInBoundsSharedValue}=this.__closure;if(showRecapPullZone){runOnJS(handleRecapMomentumEnd)(event);}isScrollingInBoundsSharedValue.set(false);}';
    var4['code'] = var7;
    var _closure1_slot24 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx7(){const{scrollY,slotHeight,lastBountyIndex}=this.__closure;return Math.min(Math.max(Math.round(scrollY.get()/slotHeight),0),lastBountyIndex);}';
    var4['code'] = var7;
    var _closure1_slot25 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx8(next,prev){const{runOnJS,setActiveIndex}=this.__closure;if(next!==prev){runOnJS(setActiveIndex)(next);}}';
    var4['code'] = var7;
    var _closure1_slot26 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx9(){const{showRecapPullZone,scrollY,lastBountyScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=lastBountyScrollOffset-RECAP_SNAP_EPSILON;}';
    var4['code'] = var7;
    var _closure1_slot27 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx10(show,previousShow){const{runOnJS,setShowRecapFooter}=this.__closure;if(show!==previousShow){runOnJS(setShowRecapFooter)(show);}}';
    var4['code'] = var7;
    var _closure1_slot28 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx11(){const{showRecapPullZone,scrollY,lastBountyScrollOffset}=this.__closure;return showRecapPullZone&&scrollY.get()>lastBountyScrollOffset;}';
    var4['code'] = var7;
    var _closure1_slot29 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx12(revealed,previousRevealed){const{runOnJS,setIsRecapPageRevealed}=this.__closure;if(revealed!==previousRevealed){runOnJS(setIsRecapPageRevealed)(revealed);}}';
    var4['code'] = var7;
    var _closure1_slot30 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx13(){const{showRecapPullZone,scrollY,fullRecapScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=fullRecapScrollOffset-RECAP_SNAP_EPSILON;}';
    var4['code'] = var7;
    var _closure1_slot31 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx14(onTop,previousOnTop){const{runOnJS,setIsRecapPageOnTop}=this.__closure;if(onTop!==previousOnTop){runOnJS(setIsRecapPageOnTop)(onTop);}}';
    var4['code'] = var7;
    var _closure1_slot32 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx15(){const{getRecapPullProgress,scrollY,lastBountyScrollOffset,recapRevealHeight}=this.__closure;return getRecapPullProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight);}';
    var4['code'] = var7;
    var _closure1_slot33 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx16(){const{interpolate,recapPullProgress,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[0,1],[0,1],Extrapolation.CLAMP)};}';
    var4['code'] = var7;
    var _closure1_slot34 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx17(){const{interpolate,recapPullProgress,RECAP_FOOTER_FADE_START_PROGRESS,RECAP_FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[RECAP_FOOTER_FADE_START_PROGRESS,RECAP_FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}';
    var4['code'] = var7;
    var _closure1_slot35 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx18(){const{recapPullProgress,RECAP_FOOTER_FADE_END_PROGRESS}=this.__closure;return recapPullProgress.get()<RECAP_FOOTER_FADE_END_PROGRESS;}';
    var4['code'] = var7;
    var _closure1_slot36 = var4;
    var4 = {};
    var7 = 'function BountiesModalContentScrollTsx19(pressable,previousPressable){const{runOnJS,setIsCloseButtonPressable}=this.__closure;if(pressable!==previousPressable){runOnJS(setIsCloseButtonPressable)(pressable);}}';
    var4['code'] = var7;
    var _closure1_slot37 = var4;
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BountiesModalContentScroll(arg1) {
        var1 = arg1;
        var9 = var1.bountyId;
        var8 = var1.sourceQuestContent;
        var4 = _closure1_slot9;
        var7 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 30;
        var1 = var10[var1];
        var3 = undefined;
        var1 = var7.bind(var3)(var1);
        var2 = var1.ThemeContextProvider;
        var1 = {};
        var6 = 31;
        var6 = var10[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.ThemeTypes;
        var6 = var6.DARKER;
        var1['theme'] = var6;
        var7 = _closure1_slot9;
        var6 = _closure1_slot41;
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
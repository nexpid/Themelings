// app/modules/quests/native/BountiesModal/useBountiesAutoScroll.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var8 = var6[var1];
    var7 = metroImportDefault;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot2 = var7;
    var7 = 1;
    var8 = var6[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.AppState;
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.QuestsExperimentLocations;
    var _closure1_slot5 = var7;
    var4 = var4.Set;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var13 = var7;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/useBountiesAutoScroll.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 0.83;
    var3['AUTO_SCROLL_PEEK_SCALE'] = var4;
    var4 = 54;
    var3['AUTO_SCROLL_PEEK_TOP_OFFSET'] = var4;
    var4 = function clearDismissedScrollAffordanceBountyIds() {
        var2 = _closure1_slot6;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var3['clearDismissedScrollAffordanceBountyIds'] = var4;
    var2 = function useBountiesAutoScroll(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var14 = var3.listRef;
            var _closure2_slot0 = var14;
            var20 = var3.enabled;
            var _closure2_slot1 = var20;
            var19 = var3.mode;
            var _closure2_slot2 = var19;
            var17 = var3.activeIndex;
            var _closure2_slot3 = var17;
            var21 = var3.activeBountyId;
            var _closure2_slot4 = var21;
            var2 = var3.slotHeight;
            var _closure2_slot5 = var2;
            var7 = var3.onCountdownCancelled;
            var _closure2_slot6 = var7;
            var15 = undefined;
            var _closure2_slot32 = var15;
            var _closure2_slot33 = var15;
            var _closure2_slot34 = var15;
            var _closure2_slot35 = var15;
            var _closure2_slot36 = var15;
            var _closure2_slot37 = var15;
            var _closure2_slot38 = var15;
            var _closure2_slot39 = var15;
            var9 = _closure1_slot0;
            var16 = _closure1_slot1;
            var3 = 4;
            var3 = var16[var3];
            var3 = var9.bind(var15)(var3);
            var5 = var3.BountiesVerticalScrollExperiment;
            var4 = var5.useConfig;
            var3 = {};
            var6 = _closure1_slot5;
            var6 = var6.VIDEO_MODAL_MOBILE;
            var3['location'] = var6;
            var3 = var4.bind(var5)(var3);
            var6 = var3.autoScrollLeadMs;
            var5 = var3.autoScrollEndCardMs;
            var4 = var3.ctaTimerMilliSeconds;
            var _closure2_slot7 = var4;
            var3 = 1000;
            var22 = var6 / var3;
            var _closure2_slot8 = var22;
            var3 = var5 / var3;
            var3 = var22 + var3;
            var _closure2_slot9 = var3;
            var5 = 5;
            var5 = var16[var5];
            var6 = var9.bind(var15)(var5);
            var5 = var6.useForceBountiesSwipeUpNux;
            var5 = var5.bind(var6)();
            var30 = _closure1_slot2;
            var28 = 1;
            var5 = var30.bind(var15)(var5, var28);
            var27 = 0;
            var5 = var5[var27];
            var _closure2_slot10 = var5;
            var31 = _closure1_slot3;
            var6 = var31.useState;
            var18 = false;
            var6 = var6.bind(var31)(var18);
            var29 = 2;
            var6 = var30.bind(var15)(var6, var29);
            var13 = var6[var27];
            var6 = var6[var28];
            var _closure2_slot11 = var6;
            var6 = var31.useState;
            var6 = var6.bind(var31)(var18);
            var6 = var30.bind(var15)(var6, var29);
            var12 = var6[var27];
            var6 = var6[var28];
            var _closure2_slot12 = var6;
            var6 = var31.useState;
            var6 = var6.bind(var31)(var27);
            var6 = var30.bind(var15)(var6, var29);
            var11 = var6[var27];
            var6 = var6[var28];
            var _closure2_slot13 = var6;
            var6 = var31.useState;
            var6 = var6.bind(var31)(var18);
            var6 = var30.bind(var15)(var6, var29);
            var10 = var6[var27];
            var6 = var6[var28];
            var _closure2_slot14 = var6;
            var6 = var31.useRef;
            var6 = var6.bind(var31)(var18);
            var _closure2_slot15 = var6;
            var6 = var31.useRef;
            var6 = var6.bind(var31)(var18);
            var _closure2_slot16 = var6;
            var6 = var31.useRef;
            var6 = var6.bind(var31)(var18);
            var _closure2_slot17 = var6;
            var6 = var31.useRef;
            var6 = var6.bind(var31)(var18);
            var _closure2_slot18 = var6;
            var6 = var31.useRef;
            var23 = null;
            var6 = var6.bind(var31)(var23);
            var _closure2_slot19 = var6;
            var6 = var31.useRef;
            var6 = var6.bind(var31)(var23);
            var _closure2_slot20 = var6;
            var6 = var31.useRef;
            var6 = var6.bind(var31)(var27);
            var _closure2_slot21 = var6;
            var6 = var31.useRef;
            var6 = var6.bind(var31)(var23);
            var _closure2_slot22 = var6;
            var6 = var31.useRef;
            var6 = var6.bind(var31)(var18);
            var _closure2_slot23 = var6;
            var6 = var31.useRef;
            var6 = var6.bind(var31)(var18);
            var _closure2_slot24 = var6;
            var6 = 6;
            var6 = var16[var6];
            var9 = var9.bind(var15)(var6);
            var6 = var9.useSharedValue;
            var9 = var6.bind(var9)(var28);
            var _closure2_slot25 = var9;
            var6 = var31.useRef;
            var6 = var6.bind(var31)(var3);
            var _closure2_slot26 = var6;
            var18 = var31.useCallback;
            var16 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot19;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = global;
                    var6 = var3.clearInterval;
                    var3 = _closure2_slot19;
                    var5 = var3.current;
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var3['current'] = var2;
case 2:
                    var1 = _closure2_slot22;
                    var1['current'] = var2;
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = new Array(0);
            var24 = var18.bind(var31)(var16, var6);
            var _closure2_slot27 = var24;
            var18 = var31.useCallback;
            var16 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot20;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                    var3 = global;
                    var5 = var3.clearTimeout;
                    var1 = _closure2_slot20;
                    var4 = var1.current;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var1['current'] = var2;
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = new Array(0);
            var23 = var18.bind(var31)(var16, var6);
            var _closure2_slot28 = var23;
            var18 = var31.useCallback;
            var16 = new Array(1);
            var16[0] = var5;
            var6 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var1 = _closure2_slot10;
                    if(var1) { _fun0004_ip = 4; continue _fun0004 }
case 5:
                    var2 = null;
                    var1 = var2 == var3;
case 4:
                    if(var1) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                    var2 = _closure1_slot6;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var18.bind(var31)(var6, var16);
            var _closure2_slot29 = var6;
            var18 = var31.useCallback;
            var16 = new Array(1);
            var16[0] = var5;
            var5 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = arg1;
                    var1 = _closure2_slot10;
                    var1 = !var1;
                    if(!var1) { _fun0005_ip = 7; continue _fun0005 }
case 8:
                    var2 = null;
                    var1 = var2 != var4;
case 7:
                    if(!var1) { _fun0005_ip = 9; continue _fun0005 }
case 10:
                    var3 = _closure1_slot6;
                    var2 = var3.has;
                    var1 = var2.bind(var3)(var4);
case 9:
                    return var1;
                }
            };
            var16 = var18.bind(var31)(var5, var16);
            var _closure2_slot30 = var16;
            var25 = var31.useCallback;
            var18 = function() {
                var4 = _closure2_slot11;
                var1 = undefined;
                var3 = false;
                var4 = var4.bind(var1)(var3);
                var4 = _closure2_slot12;
                var4 = var4.bind(var1)(var3);
                var5 = _closure2_slot13;
                var4 = 0;
                var4 = var5.bind(var1)(var4);
                var2 = _closure2_slot14;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var5 = new Array(0);
            var5 = var25.bind(var31)(var18, var5);
            var _closure2_slot31 = var5;
            var18 = var31.useState;
            var18 = var18.bind(var31)(var17);
            var18 = var30.bind(var15)(var18, var29);
            var26 = var18[var27];
            var25 = var18[var28];
            var18 = var31.useState;
            var18 = var18.bind(var31)(var21);
            var18 = var30.bind(var15)(var18, var29);
            var27 = var18[var27];
            var18 = var18[var28];
            var26 = var26 === var17;
            if(!var26) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var26 = var27 === var21;
case 11:
            if(var26) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var25 = var25.bind(var15)(var17);
            var18 = var18.bind(var15)(var21);
            var15 = var5.bind(var15)();
case 13:
            var15 = _closure1_slot3;
            var25 = var15.useEffect;
            var18 = new Array(6);
            var18[0] = var17;
            var18[1] = var21;
            var18[2] = var24;
            var18[3] = var23;
            var18[4] = var9;
            var18[5] = var16;
            var8 = function() {
                var3 = _closure2_slot27;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot28;
                var3 = var3.bind(var1)();
                var6 = _closure2_slot15;
                var5 = _closure2_slot30;
                var3 = _closure2_slot4;
                var4 = var5.bind(var1)(var3);
                var6['current'] = var4;
                var4 = _closure2_slot16;
                var3 = var5.bind(var1)(var3);
                var4['current'] = var3;
                var3 = _closure2_slot17;
                var4 = false;
                var3['current'] = var4;
                var3 = _closure2_slot18;
                var3['current'] = var4;
                var5 = _closure2_slot21;
                var3 = 0;
                var5['current'] = var3;
                var3 = _closure2_slot23;
                var3['current'] = var4;
                var3 = _closure2_slot24;
                var3['current'] = var4;
                var4 = _closure2_slot25;
                var3 = var4.set;
                var2 = 1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var8 = var25.bind(var15)(var8, var18);
            var25 = var15.useEffect;
            var18 = new Array(2);
            var18[0] = var24;
            var18[1] = var23;
            var8 = function() {
                var1 = function() {
                    var3 = _closure2_slot27;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var2 = _closure2_slot28;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                return var1;
            };
            var8 = var25.bind(var15)(var8, var18);
            var18 = var15.useEffect;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var2 = _closure2_slot26;
                var1 = _closure2_slot9;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = var18.bind(var15)(var3, var8);
            var18 = var15.useCallback;
            var8 = new Array(5);
            var8[0] = var21;
            var8[1] = var23;
            var8[2] = var6;
            var8[3] = var9;
            var8[4] = var16;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var7 = arguments[0];
                    var6 = undefined;
                    if(!(var7 === var6)) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                    var7 = 0;
case 15:
                    var1 = _closure2_slot16;
                    var1 = var1.current;
                    if(var1) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                    var2 = _closure2_slot15;
                    var1 = var2.current;
case 17:
                    if(var1) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var4 = _closure2_slot30;
                    var2 = _closure2_slot4;
                    var1 = var4.bind(var6)(var2);
case 19:
                    var1 = !var1;
                    if(!var1) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                    var4 = _closure2_slot16;
                    var2 = true;
                    var4['current'] = var2;
                    var5 = _closure2_slot29;
                    var4 = _closure2_slot4;
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure2_slot28;
                    var4 = var4.bind(var6)();
                    var4 = _closure2_slot20;
                    var3 = global;
                    var5 = var3.setTimeout;
                    var3 = function() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var3 = _closure2_slot20;
                            var2 = null;
                            var3['current'] = var2;
                            var2 = _closure2_slot15;
                            var2 = var2.current;
                            if(var2) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                            var3 = _closure2_slot18;
                            var2 = var3.current;
case 23:
                            if(var2) { _fun0007_ip = 25; continue _fun0007 }
case 9:
                            var4 = _closure2_slot25;
                            var3 = var4.set;
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var2 = 7;
                            var2 = var9[var2];
                            var5 = undefined;
                            var8 = var6.bind(var5)(var2);
                            var7 = var8.withTiming;
                            var2 = 8;
                            var2 = var9[var2];
                            var2 = var6.bind(var5)(var2);
                            var6 = var2.timingSlow;
                            var2 = 0.83;
                            var2 = var7.bind(var8)(var2, var6);
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure2_slot12;
                            var2 = true;
                            var2 = var3.bind(var5)(var2);
                            var2 = _closure2_slot20;
                            var1 = global;
                            var4 = var1.setTimeout;
                            var3 = function() {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                    var3 = _closure2_slot20;
                                    var2 = null;
                                    var3['current'] = var2;
                                    var2 = _closure2_slot15;
                                    var2 = var2.current;
                                    if(var2) { _fun0008_ip = 23; continue _fun0008 }
case 24:
                                    var3 = _closure2_slot18;
                                    var2 = var3.current;
case 23:
                                    if(var2) { _fun0008_ip = 26; continue _fun0008 }
case 6:
                                    var3 = _closure2_slot11;
                                    var2 = undefined;
                                    var1 = true;
                                    var1 = var3.bind(var2)(var1);
case 26:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var1 = 500;
                            var1 = var4.bind(var5)(var3, var1);
                            var2['current'] = var1;
case 25:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var5.bind(var6)(var3, var7);
                    var4['current'] = var3;
                    var1 = true;
case 21:
                    return var1;
                }
            };
            var18 = var18.bind(var15)(var3, var8);
            _closure2_slot32 = var18;
            var8 = var15.useCallback;
            var3 = new Array(9);
            var3[0] = var21;
            var3[1] = var17;
            var3[2] = var24;
            var3[3] = var23;
            var3[4] = var14;
            var3[5] = var6;
            var3[6] = var9;
            var3[7] = var5;
            var3[8] = var2;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot18;
                    var1 = var1.current;
                    if(var1) { _fun0009_ip = 27; continue _fun0009 }
case 28:
                    var2 = _closure2_slot15;
                    var1 = var2.current;
case 27:
                    if(var1) { _fun0009_ip = 29; continue _fun0009 }
case 30:
                    var1 = _closure2_slot18;
                    var4 = true;
                    var1['current'] = var4;
                    var3 = _closure2_slot29;
                    var1 = _closure2_slot4;
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    var1 = _closure2_slot27;
                    var1 = var1.bind(var2)();
                    var1 = _closure2_slot28;
                    var1 = var1.bind(var2)();
                    var1 = _closure2_slot31;
                    var1 = var1.bind(var2)();
                    var2 = _closure2_slot25;
                    var1 = var2.set;
                    var7 = 1;
                    var1 = var1.bind(var2)(var7);
                    var1 = _closure2_slot0;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0009_ip = 29; continue _fun0009 }
case 31:
                    var2 = var3.scrollToOffset;
                    var1 = {};
                    var6 = _closure2_slot3;
                    var6 = var6 + var7;
                    var5 = _closure2_slot5;
                    var5 = var6 * var5;
                    var1['offset'] = var5;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
case 29:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var8.bind(var15)(var2, var3);
            _closure2_slot33 = var2;
            var8 = var15.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot15;
                    var2 = var2.current;
                    if(var2) { _fun0010_ip = 32; continue _fun0010 }
case 3:
                    var2 = _closure2_slot23;
                    var2 = var2.current;
                    if(var2) { _fun0010_ip = 32; continue _fun0010 }
case 33:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var3 = var2.bind(var3)();
                    var2 = _closure2_slot22;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0010_ip = 34; continue _fun0010 }
case 35:
                    var4 = _closure2_slot21;
                    var5 = var4.current;
                    var2 = _closure2_slot22;
                    var2 = var2.current;
                    var2 = var3 - var2;
                    var2 = var5 + var2;
                    var4['current'] = var2;
case 34:
                    var2 = _closure2_slot22;
                    var2['current'] = var3;
                    var2 = _closure2_slot26;
                    var3 = var2.current;
                    var2 = _closure2_slot21;
                    var4 = var2.current;
                    var2 = 1000;
                    var2 = var4 / var2;
                    if(!(!(var2 >= var3))) { _fun0010_ip = 36; continue _fun0010 }
case 37:
                    var4 = _closure2_slot13;
                    var3 = var2 / var3;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0010_ip = 32; continue _fun0010;
case 36:
                    var2 = _closure2_slot33;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var8.bind(var15)(var2, var3);
            _closure2_slot34 = var2;
            var14 = var15.useCallback;
            var8 = new Array(1);
            var8[0] = var2;
            var3 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot17;
                    var2 = var2.current;
                    if(var2) { _fun0011_ip = 30; continue _fun0011 }
case 28:
                    var3 = _closure2_slot19;
                    var4 = var3.current;
                    var3 = null;
                    var2 = var3 != var4;
case 30:
                    if(var2) { _fun0011_ip = 9; continue _fun0011 }
case 33:
                    var3 = _closure2_slot23;
                    var2 = var3.current;
case 9:
                    if(var2) { _fun0011_ip = 38; continue _fun0011 }
case 39:
                    var2 = _closure2_slot17;
                    var4 = true;
                    var2['current'] = var4;
                    var2 = _closure2_slot21;
                    var6 = 0;
                    var2['current'] = var6;
                    var5 = _closure2_slot22;
                    var3 = global;
                    var7 = var3.Date;
                    var2 = var7.now;
                    var2 = var2.bind(var7)();
                    var5['current'] = var2;
                    var2 = _closure2_slot13;
                    var5 = undefined;
                    var2 = var2.bind(var5)(var6);
                    var2 = _closure2_slot14;
                    var2 = var2.bind(var5)(var4);
                    var2 = _closure2_slot19;
                    var4 = var3.setInterval;
                    var3 = _closure2_slot34;
                    var1 = 50;
                    var1 = var4.bind(var5)(var3, var1);
                    var2['current'] = var1;
case 38:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var14.bind(var15)(var3, var8);
            _closure2_slot35 = var17;
            var14 = var15.useCallback;
            var8 = new Array(1);
            var8[0] = var24;
            var3 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot17;
                    var2 = var2.current;
                    if(!var2) { _fun0012_ip = 40; continue _fun0012 }
case 28:
                    var2 = _closure2_slot23;
                    var2 = var2.current;
                    if(var2) { _fun0012_ip = 40; continue _fun0012 }
case 24:
                    var2 = _closure2_slot19;
                    var2 = var2.current;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0012_ip = 40; continue _fun0012 }
case 9:
                    var2 = global;
                    var4 = var2.Date;
                    var2 = var4.now;
                    var5 = var2.bind(var4)();
                    var2 = _closure2_slot22;
                    var2 = var2.current;
                    if(!(var3 != var2)) { _fun0012_ip = 41; continue _fun0012 }
case 42:
                    var3 = _closure2_slot21;
                    var4 = var3.current;
                    var2 = _closure2_slot22;
                    var2 = var2.current;
                    var2 = var5 - var2;
                    var2 = var4 + var2;
                    var3['current'] = var2;
case 41:
                    var3 = _closure2_slot23;
                    var2 = true;
                    var3['current'] = var2;
                    var2 = _closure2_slot27;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var14.bind(var15)(var3, var8);
            _closure2_slot36 = var3;
            var14 = var15.useCallback;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure2_slot17;
                    var2 = var2.current;
                    if(!var2) { _fun0013_ip = 27; continue _fun0013 }
case 28:
                    var3 = _closure2_slot23;
                    var2 = var3.current;
case 27:
                    if(!var2) { _fun0013_ip = 6; continue _fun0013 }
case 24:
                    var3 = _closure2_slot15;
                    var3 = var3.current;
                    var2 = !var3;
case 6:
                    if(!var2) { _fun0013_ip = 43; continue _fun0013 }
case 9:
                    var3 = _closure2_slot18;
                    var3 = var3.current;
                    var2 = !var3;
case 43:
                    if(!var2) { _fun0013_ip = 44; continue _fun0013 }
case 22:
                    var3 = _closure2_slot23;
                    var2 = false;
                    var3['current'] = var2;
                    var4 = _closure2_slot22;
                    var3 = global;
                    var5 = var3.Date;
                    var2 = var5.now;
                    var2 = var2.bind(var5)();
                    var4['current'] = var2;
                    var2 = _closure2_slot19;
                    var5 = var3.setInterval;
                    var4 = _closure2_slot34;
                    var3 = undefined;
                    var1 = 50;
                    var1 = var5.bind(var3)(var4, var1);
                    var2['current'] = var1;
case 44:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var14.bind(var15)(var2, var8);
            _closure2_slot37 = var2;
            var25 = var15.useCallback;
            var14 = new Array(1);
            var14[0] = var3;
            var8 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = _closure2_slot23;
                    var2 = var2.current;
                    if(var2) { _fun0014_ip = 45; continue _fun0014 }
case 28:
                    var3 = _closure2_slot36;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    var2 = _closure2_slot24;
                    var1 = true;
                    var2['current'] = var1;
case 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = var25.bind(var15)(var8, var14);
            _closure2_slot38 = var26;
            var25 = var15.useCallback;
            var14 = new Array(1);
            var14[0] = var2;
            var8 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = _closure2_slot24;
                    var2 = var2.current;
                    if(!var2) { _fun0015_ip = 46; continue _fun0015 }
case 28:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.getIsInAppBrowserOpen;
                    var3 = var3.bind(var4)();
                    var2 = !var3;
case 46:
                    if(!var2) { _fun0015_ip = 47; continue _fun0015 }
case 48:
                    var3 = _closure2_slot24;
                    var2 = false;
                    var3['current'] = var2;
                    var2 = _closure2_slot37;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 47:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var25.bind(var15)(var8, var14);
            _closure2_slot39 = var8;
            var25 = var15.useEffect;
            var14 = new Array(2);
            var14[0] = var26;
            var14[1] = var8;
            var8 = function() {
                var6 = _closure1_slot4;
                var5 = var6.addEventListener;
                var4 = 'change';
                var3 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var2 = 'active';
                        var1 = arg1;
                        if(!(var2 !== var1)) { _fun0016_ip = 18; continue _fun0016 }
case 15:
                        var2 = _closure2_slot38;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        _fun0016_ip = 6; continue _fun0016;
case 18:
                        var2 = _closure2_slot39;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 6:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var5.bind(var6)(var4, var3);
                var _closure3_slot0 = var3;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.subscribeToIsInAppBrowserOpen;
                var2 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var2 = arg1;
                        if(var2) { _fun0017_ip = 49; continue _fun0017 }
case 16:
                        var3 = _closure2_slot39;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                        _fun0017_ip = 50; continue _fun0017;
case 49:
                        var2 = _closure2_slot38;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 50:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var _closure3_slot1 = var2;
                var1 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.remove;
                    var2 = var2.bind(var3)();
                    var2 = _closure3_slot1;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                return var1;
            };
            var8 = var25.bind(var15)(var8, var14);
            var14 = var15.useCallback;
            var8 = new Array(8);
            var8[0] = var21;
            var8[1] = var24;
            var8[2] = var23;
            var8[3] = var6;
            var8[4] = var19;
            var8[5] = var7;
            var8[6] = var9;
            var8[7] = var5;
            var7 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var2 = _closure2_slot16;
                    var2 = var2.current;
                    var2 = !var2;
                    if(var2) { _fun0018_ip = 24; continue _fun0018 }
case 3:
                    var3 = _closure2_slot15;
                    var2 = var3.current;
case 24:
                    if(var2) { _fun0018_ip = 6; continue _fun0018 }
case 30:
                    var3 = _closure2_slot18;
                    var2 = var3.current;
case 6:
                    if(var2) { _fun0018_ip = 51; continue _fun0018 }
case 39:
                    var3 = _closure2_slot15;
                    var2 = true;
                    var3['current'] = var2;
                    var4 = _closure2_slot29;
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var3 = _closure2_slot27;
                    var3 = var3.bind(var2)();
                    var4 = _closure2_slot11;
                    var3 = false;
                    var3 = var4.bind(var2)(var3);
                    var4 = _closure2_slot13;
                    var3 = 0;
                    var3 = var4.bind(var2)(var3);
                    var5 = _closure2_slot25;
                    var4 = var5.set;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var3 = 7;
                    var3 = var9[var3];
                    var8 = var6.bind(var2)(var3);
                    var7 = var8.withTiming;
                    var3 = 8;
                    var3 = var9[var3];
                    var3 = var6.bind(var2)(var3);
                    var6 = var3.timingStandard;
                    var3 = 1;
                    var3 = var7.bind(var8)(var3, var6);
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure2_slot2;
                    var3 = 'countdown';
                    if(!(var3 === var4)) { _fun0018_ip = 52; continue _fun0018 }
case 53:
                    var4 = _closure2_slot6;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0018_ip = 52; continue _fun0018 }
case 54:
                    var4 = _closure2_slot6;
                    var3 = arg1;
                    var3 = var4.bind(var2)(var3);
case 52:
                    var3 = _closure2_slot28;
                    var3 = var3.bind(var2)();
                    var1 = _closure2_slot31;
                    var1 = var1.bind(var2)();
case 51:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var14.bind(var15)(var7, var8);
            var14 = var15.useCallback;
            var7 = new Array(6);
            var7[0] = var21;
            var7[1] = var24;
            var7[2] = var23;
            var7[3] = var6;
            var7[4] = var9;
            var7[5] = var5;
            var6 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = _closure2_slot16;
                    var2 = var2.current;
                    if(!var2) { _fun0019_ip = 55; continue _fun0019 }
case 28:
                    var3 = _closure2_slot15;
                    var2 = true;
                    var3['current'] = var2;
                    var4 = _closure2_slot29;
                    var2 = _closure2_slot4;
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var2 = _closure2_slot27;
                    var2 = var2.bind(var3)();
                    var2 = _closure2_slot28;
                    var2 = var2.bind(var3)();
                    var2 = _closure2_slot31;
                    var2 = var2.bind(var3)();
                    var3 = _closure2_slot25;
                    var2 = var3.set;
                    var1 = 1;
                    var1 = var2.bind(var3)(var1);
case 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var14.bind(var15)(var6, var7);
            var14 = var15.useCallback;
            var6 = new Array(2);
            var6[0] = var23;
            var6[1] = var5;
            var5 = function() {
                var4 = _closure2_slot18;
                var1 = var4.current;
                var3 = false;
                var4['current'] = var3;
                var4 = _closure2_slot28;
                var3 = undefined;
                var4 = var4.bind(var3)();
                var2 = _closure2_slot31;
                var2 = var2.bind(var3)();
                return var1;
            };
            var6 = var14.bind(var15)(var5, var6);
            var14 = var15.useCallback;
            var5 = new Array(6);
            var5[0] = var22;
            var5[1] = var4;
            var5[2] = var20;
            var5[3] = var19;
            var5[4] = var18;
            var5[5] = var17;
            var4 = function(arg1, arg2, arg3, arg4, arg5) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var3 = arg2;
                    var2 = arg3;
                    var5 = arg5;
                    var4 = _closure2_slot1;
                    var4 = !var4;
                    if(var4) { _fun0020_ip = 56; continue _fun0020 }
case 7:
                    var7 = _closure2_slot2;
                    var6 = 'countdown';
                    var4 = var6 !== var7;
case 56:
                    if(var4) { _fun0020_ip = 57; continue _fun0020 }
case 45:
                    var6 = _closure2_slot15;
                    var4 = var6.current;
case 57:
                    if(var4) { _fun0020_ip = 58; continue _fun0020 }
case 59:
                    var6 = _closure2_slot18;
                    var4 = var6.current;
case 58:
                    if(var4) { _fun0020_ip = 60; continue _fun0020 }
case 61:
                    var6 = 0;
                    var4 = var3 <= var6;
case 60:
                    if(var4) { _fun0020_ip = 62; continue _fun0020 }
case 63:
                    var4 = _closure2_slot16;
                    var4 = var4.current;
                    var4 = !var4;
                    if(!var4) { _fun0020_ip = 64; continue _fun0020 }
case 65:
                    if(var5) { _fun0020_ip = 66; continue _fun0020 }
case 67:
                    var7 = 1000;
                    var6 = arg4;
                    var7 = var7 * var6;
                    var6 = _closure2_slot7;
                    var5 = var7 > var6;
case 66:
                    var4 = var5;
case 64:
                    if(!var4) { _fun0020_ip = 68; continue _fun0020 }
case 69:
                    var6 = _closure2_slot32;
                    var5 = undefined;
                    var4 = 5000;
                    var4 = var6.bind(var5)(var4);
case 68:
                    if(!var2) { _fun0020_ip = 70; continue _fun0020 }
case 71:
                    var4 = _closure2_slot17;
                    var4 = var4.current;
                    var2 = !var4;
case 70:
                    if(!var2) { _fun0020_ip = 62; continue _fun0020 }
case 72:
                    var2 = arg1;
                    var3 = var3 - var2;
                    var2 = _closure2_slot8;
                    if(!(!(var3 > var2))) { _fun0020_ip = 62; continue _fun0020 }
case 73:
                    var2 = _closure2_slot35;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 62:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var14.bind(var15)(var4, var5);
            var14 = var15.useCallback;
            var4 = new Array(7);
            var4[0] = var21;
            var4[1] = var20;
            var4[2] = var19;
            var4[3] = var2;
            var4[4] = var18;
            var4[5] = var17;
            var4[6] = var16;
            var1 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var2 = !var2;
                    if(var2) { _fun0021_ip = 7; continue _fun0021 }
case 5:
                    var3 = _closure2_slot15;
                    var2 = var3.current;
case 7:
                    if(var2) { _fun0021_ip = 74; continue _fun0021 }
case 10:
                    var5 = _closure2_slot30;
                    var4 = _closure2_slot4;
                    var3 = undefined;
                    var2 = var5.bind(var3)(var4);
case 74:
                    if(var2) { _fun0021_ip = 71; continue _fun0021 }
case 75:
                    var3 = _closure2_slot2;
                    var2 = 'hint';
                    if(!(var2 === var3)) { _fun0021_ip = 60; continue _fun0021 }
case 76:
                    var3 = _closure2_slot32;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0021_ip = 71; continue _fun0021;
case 60:
                    var2 = _closure2_slot16;
                    var2 = var2.current;
                    if(var2) { _fun0021_ip = 77; continue _fun0021 }
case 78:
                    var3 = _closure2_slot32;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
case 77:
                    var2 = _closure2_slot17;
                    var2 = var2.current;
                    if(var2) { _fun0021_ip = 31; continue _fun0021 }
case 79:
                    var3 = _closure2_slot35;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0021_ip = 71; continue _fun0021;
case 31:
                    var2 = _closure2_slot23;
                    var2 = var2.current;
                    if(!var2) { _fun0021_ip = 71; continue _fun0021 }
case 21:
                    var2 = _closure2_slot37;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 71:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var14.bind(var15)(var1, var4);
            var1 = {};
            var1['visible'] = var13;
            var1['peekActive'] = var12;
            var1['progress'] = var11;
            var1['showProgressRing'] = var10;
            var1['peekScale'] = var9;
            var1['cancel'] = var8;
            var1['dismissOnClose'] = var7;
            var1['takeDidAutoScroll'] = var6;
            var1['onPlaybackTimeChange'] = var5;
            var1['onEndCardVisible'] = var4;
            var1['pauseCountdown'] = var3;
            var1['resumeCountdown'] = var2;
            return var1;
        }
    };
    var3['useBountiesAutoScroll'] = var2;
    return var1;
})();
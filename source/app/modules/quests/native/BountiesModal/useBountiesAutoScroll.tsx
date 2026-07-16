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
    var7 = var7.QuestsExperimentLocations;
    var _closure1_slot4 = var7;
    var4 = var4.Set;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var13 = var7;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/useBountiesAutoScroll.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 0.9;
    var3['AUTO_SCROLL_PEEK_SCALE'] = var4;
    var2 = function useBountiesAutoScroll(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var7 = var2.listRef;
            var _closure2_slot0 = var7;
            var18 = var2.enabled;
            var _closure2_slot1 = var18;
            var11 = var2.mode;
            var _closure2_slot2 = var11;
            var8 = var2.activeIndex;
            var _closure2_slot3 = var8;
            var19 = var2.activeBountyId;
            var _closure2_slot4 = var19;
            var2 = var2.slotHeight;
            var _closure2_slot5 = var2;
            var16 = undefined;
            var _closure2_slot21 = var16;
            var _closure2_slot22 = var16;
            var _closure2_slot23 = var16;
            var _closure2_slot24 = var16;
            var13 = _closure1_slot0;
            var21 = _closure1_slot1;
            var4 = 3;
            var4 = var21[var4];
            var4 = var13.bind(var16)(var4);
            var6 = var4.BountiesVerticalScrollExperiment;
            var5 = var6.useConfig;
            var4 = {};
            var9 = _closure1_slot4;
            var9 = var9.VIDEO_MODAL_MOBILE;
            var4['location'] = var9;
            var5 = var5.bind(var6)(var4);
            var4 = var5.autoScrollLeadMs;
            var15 = var5.autoScrollEndCardMs;
            var5 = 1000;
            var4 = var4 / var5;
            var _closure2_slot6 = var4;
            var25 = _closure1_slot3;
            var6 = var25.useState;
            var20 = false;
            var6 = var6.bind(var25)(var20);
            var24 = _closure1_slot2;
            var22 = 2;
            var6 = var24.bind(var16)(var6, var22);
            var14 = 0;
            var12 = var6[var14];
            var23 = 1;
            var17 = var6[var23];
            var _closure2_slot7 = var17;
            var6 = var25.useState;
            var6 = var6.bind(var25)(var14);
            var6 = var24.bind(var16)(var6, var22);
            var10 = var6[var14];
            var6 = var6[var23];
            var _closure2_slot8 = var6;
            var9 = var25.useRef;
            var9 = var9.bind(var25)(var20);
            var _closure2_slot9 = var9;
            var9 = var25.useRef;
            var9 = var9.bind(var25)(var20);
            var _closure2_slot10 = var9;
            var9 = var25.useRef;
            var9 = var9.bind(var25)(var20);
            var _closure2_slot11 = var9;
            var9 = var25.useRef;
            var26 = null;
            var9 = var9.bind(var25)(var26);
            var _closure2_slot12 = var9;
            var9 = var25.useRef;
            var9 = var9.bind(var25)(var14);
            var _closure2_slot13 = var9;
            var9 = var25.useRef;
            var9 = var9.bind(var25)(var26);
            var _closure2_slot14 = var9;
            var9 = var25.useRef;
            var9 = var9.bind(var25)(var20);
            var _closure2_slot15 = var9;
            var9 = 4;
            var9 = var21[var9];
            var13 = var13.bind(var16)(var9);
            var9 = var13.useSharedValue;
            var9 = var9.bind(var13)(var23);
            var _closure2_slot16 = var9;
            var13 = var25.useRef;
            var5 = var15 / var5;
            var5 = var4 + var5;
            var5 = var13.bind(var25)(var5);
            var _closure2_slot17 = var5;
            var15 = var25.useCallback;
            var13 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot12;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = global;
                    var6 = var3.clearInterval;
                    var3 = _closure2_slot12;
                    var5 = var3.current;
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var3['current'] = var2;
case 2:
                    var1 = _closure2_slot14;
                    var1['current'] = var2;
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = new Array(0);
            var13 = var15.bind(var25)(var13, var5);
            var _closure2_slot18 = var13;
            var21 = var25.useCallback;
            var15 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var2 = _closure1_slot5;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = new Array(0);
            var5 = var21.bind(var25)(var15, var5);
            var _closure2_slot19 = var5;
            var26 = var25.useCallback;
            var21 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = arg1;
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                    var3 = _closure1_slot5;
                    var2 = var3.has;
                    var1 = var2.bind(var3)(var4);
case 6:
                    return var1;
                }
            };
            var15 = new Array(0);
            var15 = var26.bind(var25)(var21, var15);
            var _closure2_slot20 = var15;
            var21 = var25.useState;
            var21 = var21.bind(var25)(var8);
            var21 = var24.bind(var16)(var21, var22);
            var22 = var21[var14];
            var21 = var21[var23];
            if(!(var22 !== var8)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var21 = var21.bind(var16)(var8);
            var17 = var17.bind(var16)(var20);
            var6 = var6.bind(var16)(var14);
case 8:
            var14 = _closure1_slot3;
            var16 = var14.useEffect;
            var6 = new Array(5);
            var6[0] = var8;
            var6[1] = var19;
            var6[2] = var13;
            var6[3] = var9;
            var6[4] = var15;
            var3 = function() {
                var3 = _closure2_slot18;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var6 = _closure2_slot9;
                var5 = _closure2_slot20;
                var3 = _closure2_slot4;
                var4 = var5.bind(var1)(var3);
                var6['current'] = var4;
                var4 = _closure2_slot10;
                var3 = var5.bind(var1)(var3);
                var4['current'] = var3;
                var3 = _closure2_slot11;
                var4 = false;
                var3['current'] = var4;
                var5 = _closure2_slot13;
                var3 = 0;
                var5['current'] = var3;
                var3 = _closure2_slot15;
                var3['current'] = var4;
                var4 = _closure2_slot16;
                var3 = var4.set;
                var2 = 1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var16.bind(var14)(var3, var6);
            var16 = var14.useEffect;
            var6 = new Array(1);
            var6[0] = var13;
            var3 = function() {
                var1 = _closure2_slot18;
                return var1;
            };
            var3 = var16.bind(var14)(var3, var6);
            var16 = var14.useCallback;
            var6 = new Array(4);
            var6[0] = var19;
            var6[1] = var5;
            var6[2] = var9;
            var6[3] = var15;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot10;
                    var1 = var1.current;
                    if(var1) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                    var2 = _closure2_slot9;
                    var1 = var2.current;
case 10:
                    if(var1) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                    var5 = _closure2_slot20;
                    var4 = _closure2_slot4;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4);
case 12:
                    var1 = !var1;
                    if(!var1) { _fun0005_ip = 14; continue _fun0005 }
case 2:
                    var4 = _closure2_slot10;
                    var2 = true;
                    var4['current'] = var2;
                    var6 = _closure2_slot19;
                    var5 = _closure2_slot4;
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var7 = _closure2_slot16;
                    var6 = var7.set;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var5 = 5;
                    var5 = var11[var5];
                    var10 = var8.bind(var4)(var5);
                    var9 = var10.withTiming;
                    var5 = 6;
                    var5 = var11[var5];
                    var5 = var8.bind(var4)(var5);
                    var8 = var5.timingStandard;
                    var5 = 0.9;
                    var5 = var9.bind(var10)(var5, var8);
                    var5 = var6.bind(var7)(var5);
                    var3 = _closure2_slot7;
                    var3 = var3.bind(var4)(var2);
                    var1 = true;
case 14:
                    return var1;
                }
            };
            var17 = var16.bind(var14)(var3, var6);
            _closure2_slot21 = var17;
            var6 = var14.useCallback;
            var3 = new Array(7);
            var3[0] = var19;
            var3[1] = var8;
            var3[2] = var13;
            var3[3] = var7;
            var3[4] = var5;
            var3[5] = var9;
            var3[6] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot11;
                    var1 = var1.current;
                    if(var1) { _fun0006_ip = 10; continue _fun0006 }
case 11:
                    var2 = _closure2_slot9;
                    var1 = var2.current;
case 10:
                    if(var1) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                    var1 = _closure2_slot11;
                    var4 = true;
                    var1['current'] = var4;
                    var2 = _closure2_slot19;
                    var1 = _closure2_slot4;
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var1 = _closure2_slot18;
                    var1 = var1.bind(var3)();
                    var2 = _closure2_slot7;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure2_slot8;
                    var1 = 0;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure2_slot16;
                    var1 = var2.set;
                    var7 = 1;
                    var1 = var1.bind(var2)(var7);
                    var1 = _closure2_slot0;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0006_ip = 15; continue _fun0006 }
case 17:
                    var2 = var3.scrollToOffset;
                    var1 = {};
                    var6 = _closure2_slot3;
                    var6 = var6 + var7;
                    var5 = _closure2_slot5;
                    var5 = var6 * var5;
                    var1['offset'] = var5;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var14)(var2, var3);
            _closure2_slot22 = var2;
            var6 = var14.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var2 = var2.current;
                    if(var2) { _fun0007_ip = 18; continue _fun0007 }
case 3:
                    var2 = _closure2_slot15;
                    var2 = var2.current;
                    if(var2) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var3 = var2.bind(var3)();
                    var2 = _closure2_slot14;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                    var4 = _closure2_slot13;
                    var5 = var4.current;
                    var2 = _closure2_slot14;
                    var2 = var2.current;
                    var2 = var3 - var2;
                    var2 = var5 + var2;
                    var4['current'] = var2;
case 20:
                    var2 = _closure2_slot14;
                    var2['current'] = var3;
                    var2 = _closure2_slot17;
                    var3 = var2.current;
                    var2 = _closure2_slot13;
                    var4 = var2.current;
                    var2 = 1000;
                    var2 = var4 / var2;
                    if(!(!(var2 >= var3))) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                    var4 = _closure2_slot8;
                    var3 = var2 / var3;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0007_ip = 18; continue _fun0007;
case 22:
                    var2 = _closure2_slot22;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var14)(var2, var3);
            _closure2_slot23 = var2;
            var7 = var14.useCallback;
            var6 = new Array(1);
            var6[0] = var2;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot12;
                    var3 = var2.current;
                    var2 = null;
                    var2 = var2 != var3;
                    if(var2) { _fun0008_ip = 16; continue _fun0008 }
case 24:
                    var3 = _closure2_slot15;
                    var2 = var3.current;
case 16:
                    if(var2) { _fun0008_ip = 25; continue _fun0008 }
case 19:
                    var2 = _closure2_slot13;
                    var4 = 0;
                    var2['current'] = var4;
                    var5 = _closure2_slot14;
                    var3 = global;
                    var6 = var3.Date;
                    var2 = var6.now;
                    var2 = var2.bind(var6)();
                    var5['current'] = var2;
                    var2 = _closure2_slot8;
                    var5 = undefined;
                    var2 = var2.bind(var5)(var4);
                    var2 = _closure2_slot12;
                    var4 = var3.setInterval;
                    var3 = _closure2_slot23;
                    var1 = 100;
                    var1 = var4.bind(var5)(var3, var1);
                    var2['current'] = var1;
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var7.bind(var14)(var3, var6);
            _closure2_slot24 = var16;
            var7 = var14.useCallback;
            var6 = new Array(2);
            var6[0] = var13;
            var6[1] = var11;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = 'countdown';
                    if(!(var2 === var3)) { _fun0009_ip = 26; continue _fun0009 }
case 11:
                    var2 = _closure2_slot15;
                    var2 = var2.current;
                    if(var2) { _fun0009_ip = 26; continue _fun0009 }
case 13:
                    var2 = _closure2_slot12;
                    var2 = var2.current;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0009_ip = 26; continue _fun0009 }
case 12:
                    var2 = global;
                    var4 = var2.Date;
                    var2 = var4.now;
                    var5 = var2.bind(var4)();
                    var2 = _closure2_slot14;
                    var2 = var2.current;
                    if(!(var3 != var2)) { _fun0009_ip = 27; continue _fun0009 }
case 28:
                    var3 = _closure2_slot13;
                    var4 = var3.current;
                    var2 = _closure2_slot14;
                    var2 = var2.current;
                    var2 = var5 - var2;
                    var2 = var4 + var2;
                    var3['current'] = var2;
case 27:
                    var3 = _closure2_slot15;
                    var2 = true;
                    var3['current'] = var2;
                    var2 = _closure2_slot18;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var14)(var3, var6);
            var7 = var14.useCallback;
            var6 = new Array(2);
            var6[0] = var11;
            var6[1] = var2;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = 'countdown';
                    var2 = var2 !== var3;
                    if(var2) { _fun0010_ip = 16; continue _fun0010 }
case 3:
                    var3 = _closure2_slot15;
                    var3 = var3.current;
                    var2 = !var3;
case 16:
                    if(var2) { _fun0010_ip = 12; continue _fun0010 }
case 19:
                    var3 = _closure2_slot9;
                    var2 = var3.current;
case 12:
                    if(var2) { _fun0010_ip = 29; continue _fun0010 }
case 30:
                    var3 = _closure2_slot11;
                    var2 = var3.current;
case 29:
                    if(var2) { _fun0010_ip = 31; continue _fun0010 }
case 32:
                    var3 = _closure2_slot15;
                    var2 = false;
                    var3['current'] = var2;
                    var4 = _closure2_slot14;
                    var3 = global;
                    var5 = var3.Date;
                    var2 = var5.now;
                    var2 = var2.bind(var5)();
                    var4['current'] = var2;
                    var2 = _closure2_slot12;
                    var5 = var3.setInterval;
                    var4 = _closure2_slot23;
                    var3 = undefined;
                    var1 = 100;
                    var1 = var5.bind(var3)(var4, var1);
                    var2['current'] = var1;
case 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var7.bind(var14)(var2, var6);
            var8 = var14.useCallback;
            var7 = new Array(4);
            var7[0] = var19;
            var7[1] = var13;
            var7[2] = var5;
            var7[3] = var9;
            var6 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var2 = var2.current;
                    var2 = !var2;
                    if(var2) { _fun0011_ip = 13; continue _fun0011 }
case 3:
                    var3 = _closure2_slot9;
                    var2 = var3.current;
case 13:
                    if(var2) { _fun0011_ip = 33; continue _fun0011 }
case 16:
                    var3 = _closure2_slot11;
                    var2 = var3.current;
case 33:
                    if(var2) { _fun0011_ip = 34; continue _fun0011 }
case 30:
                    var3 = _closure2_slot9;
                    var2 = true;
                    var3['current'] = var2;
                    var3 = _closure2_slot19;
                    var2 = _closure2_slot4;
                    var7 = undefined;
                    var2 = var3.bind(var7)(var2);
                    var2 = _closure2_slot18;
                    var2 = var2.bind(var7)();
                    var3 = _closure2_slot7;
                    var2 = false;
                    var2 = var3.bind(var7)(var2);
                    var3 = _closure2_slot8;
                    var2 = 0;
                    var2 = var3.bind(var7)(var2);
                    var3 = _closure2_slot16;
                    var2 = var3.set;
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var1 = 5;
                    var1 = var8[var1];
                    var6 = var4.bind(var7)(var1);
                    var5 = var6.withTiming;
                    var1 = 6;
                    var1 = var8[var1];
                    var1 = var4.bind(var7)(var1);
                    var4 = var1.timingStandard;
                    var1 = 1;
                    var1 = var5.bind(var6)(var1, var4);
                    var1 = var2.bind(var3)(var1);
case 34:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var8.bind(var14)(var6, var7);
            var7 = var14.useCallback;
            var6 = new Array(4);
            var6[0] = var19;
            var6[1] = var13;
            var6[2] = var5;
            var6[3] = var9;
            var5 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var2 = var2.current;
                    if(!var2) { _fun0012_ip = 35; continue _fun0012 }
case 11:
                    var3 = _closure2_slot9;
                    var2 = true;
                    var3['current'] = var2;
                    var3 = _closure2_slot19;
                    var2 = _closure2_slot4;
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot18;
                    var2 = var2.bind(var4)();
                    var3 = _closure2_slot7;
                    var2 = false;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot8;
                    var2 = 0;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot16;
                    var2 = var3.set;
                    var1 = 1;
                    var1 = var2.bind(var3)(var1);
case 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var7.bind(var14)(var5, var6);
            var13 = var14.useCallback;
            var6 = function() {
                var3 = _closure2_slot11;
                var1 = var3.current;
                var5 = false;
                var3['current'] = var5;
                var3 = _closure2_slot7;
                var4 = undefined;
                var3 = var3.bind(var4)(var5);
                var3 = _closure2_slot8;
                var2 = 0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5 = new Array(0);
            var6 = var13.bind(var14)(var6, var5);
            var13 = var14.useCallback;
            var5 = new Array(5);
            var5[0] = var4;
            var5[1] = var18;
            var5[2] = var11;
            var5[3] = var17;
            var5[4] = var16;
            var4 = function(arg1, arg2, arg3) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = arg2;
                    var2 = _closure2_slot1;
                    var2 = !var2;
                    if(var2) { _fun0013_ip = 36; continue _fun0013 }
case 37:
                    var5 = _closure2_slot2;
                    var4 = 'countdown';
                    var2 = var4 !== var5;
case 36:
                    if(var2) { _fun0013_ip = 38; continue _fun0013 }
case 39:
                    var4 = _closure2_slot9;
                    var2 = var4.current;
case 38:
                    if(var2) { _fun0013_ip = 40; continue _fun0013 }
case 41:
                    var4 = _closure2_slot11;
                    var2 = var4.current;
case 40:
                    if(var2) { _fun0013_ip = 42; continue _fun0013 }
case 43:
                    var4 = 0;
                    var2 = var3 <= var4;
case 42:
                    if(var2) { _fun0013_ip = 44; continue _fun0013 }
case 45:
                    var2 = arg3;
                    if(!var2) { _fun0013_ip = 44; continue _fun0013 }
case 46:
                    var2 = arg1;
                    var3 = var3 - var2;
                    var2 = _closure2_slot6;
                    var2 = var3 > var2;
                    if(var2) { _fun0013_ip = 20; continue _fun0013 }
case 47:
                    var3 = _closure2_slot10;
                    var2 = var3.current;
case 20:
                    if(var2) { _fun0013_ip = 44; continue _fun0013 }
case 48:
                    var3 = _closure2_slot21;
                    var2 = undefined;
                    var3 = var3.bind(var2)();
                    if(!var3) { _fun0013_ip = 44; continue _fun0013 }
case 49:
                    var1 = _closure2_slot24;
                    var1 = var1.bind(var2)();
case 44:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var13.bind(var14)(var4, var5);
            var13 = var14.useCallback;
            var4 = new Array(6);
            var4[0] = var19;
            var4[1] = var18;
            var4[2] = var11;
            var4[3] = var17;
            var4[4] = var16;
            var4[5] = var15;
            var1 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0014_ip = 50; continue _fun0014 }
case 51:
                    var2 = _closure2_slot9;
                    var2 = var2.current;
                    if(var2) { _fun0014_ip = 50; continue _fun0014 }
case 52:
                    var4 = _closure2_slot20;
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    if(var3) { _fun0014_ip = 50; continue _fun0014 }
case 38:
                    var4 = _closure2_slot2;
                    var3 = 'hint';
                    if(!(var3 === var4)) { _fun0014_ip = 53; continue _fun0014 }
case 40:
                    var3 = _closure2_slot21;
                    var3 = var3.bind(var2)();
                    _fun0014_ip = 50; continue _fun0014;
case 53:
                    var3 = _closure2_slot10;
                    var3 = var3.current;
                    if(var3) { _fun0014_ip = 50; continue _fun0014 }
case 54:
                    var3 = _closure2_slot21;
                    var3 = var3.bind(var2)();
                    if(var3) { _fun0014_ip = 55; continue _fun0014 }
case 56:
                    return var2;
case 55:
                    var1 = _closure2_slot24;
                    var1 = var1.bind(var2)();
case 50:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var13.bind(var14)(var1, var4);
            var1 = {};
            var1['visible'] = var12;
            var1['progress'] = var10;
            var10 = 'countdown';
            var10 = var10 === var11;
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
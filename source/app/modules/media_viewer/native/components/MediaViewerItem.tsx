// app/modules/media_viewer/native/components/MediaViewerItem.tsx
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ScrollView;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.isAndroid;
    var4 = var4.bind(var8)();
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var22 = var2.entranceAnimationDriver;
            var21 = var2.index;
            var _closure2_slot0 = var21;
            var32 = var2.onLongPress;
            var _closure2_slot1 = var32;
            var20 = var2.originLayout;
            var19 = var2.panGestureConfig;
            var _closure2_slot2 = var19;
            var28 = var2.panGesture;
            var _closure2_slot3 = var28;
            var18 = var2.renderMedia;
            var17 = var2.source;
            var16 = var2.useItemVisible;
            var6 = var2.zoomed;
            var _closure2_slot4 = var6;
            var10 = var2.windowWidth;
            var _closure2_slot5 = var10;
            var3 = var2.windowHeight;
            var _closure2_slot6 = var3;
            var5 = undefined;
            var _closure2_slot16 = var5;
            var _closure2_slot17 = var5;
            var _closure2_slot18 = var5;
            var _closure2_slot19 = var5;
            var _closure2_slot20 = var5;
            var _closure2_slot21 = var5;
            var _closure2_slot22 = var5;
            var _closure2_slot23 = var5;
            var _closure2_slot24 = var5;
            var25 = _closure1_slot4;
            var4 = var25.useRef;
            var4 = var4.bind(var25)(var10);
            var _closure2_slot7 = var4;
            var4 = var25.useRef;
            var4 = var4.bind(var25)(var3);
            var _closure2_slot8 = var4;
            var4 = var25.useState;
            var4 = var4.bind(var25)(var10);
            var15 = _closure1_slot3;
            var14 = 2;
            var4 = var15.bind(var5)(var4, var14);
            var7 = 0;
            var12 = var4[var7];
            var9 = 1;
            var4 = var4[var9];
            var _closure2_slot9 = var4;
            var4 = var25.useState;
            var4 = var4.bind(var25)(var3);
            var4 = var15.bind(var5)(var4, var14);
            var11 = var4[var7];
            var4 = var4[var9];
            var _closure2_slot10 = var4;
            var13 = var25.useEffect;
            var8 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.dismissKeyboard;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = new Array(0);
            var4 = var13.bind(var25)(var8, var4);
            var8 = var25.useEffect;
            var4 = new Array(2);
            var4[0] = var10;
            var4[1] = var3;
            var3 = function() {
                var2 = global;
                var5 = var2.setTimeout;
                var4 = undefined;
                var3 = function() {
                    var3 = _closure2_slot9;
                    var5 = _closure2_slot5;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var5);
                    var4 = _closure2_slot10;
                    var3 = _closure2_slot6;
                    var4 = var4.bind(var1)(var3);
                    var4 = _closure2_slot7;
                    var4['current'] = var5;
                    var2 = _closure2_slot8;
                    var2['current'] = var3;
                    return var1;
                };
                var2 = 20;
                var2 = var5.bind(var4)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var3 = var8.bind(var25)(var3, var4);
            var4 = _closure1_slot1;
            var23 = _closure1_slot2;
            var3 = 6;
            var3 = var23[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)(var12, var11, var17);
            var8 = var3.maximumZoomScale;
            var3 = var25.useRef;
            var4 = null;
            var13 = var3.bind(var25)(var4);
            var _closure2_slot11 = var13;
            var3 = var25.useRef;
            var10 = var3.bind(var25)(var4);
            var _closure2_slot12 = var10;
            var3 = var25.useState;
            var24 = false;
            var3 = var3.bind(var25)(var24);
            var3 = var15.bind(var5)(var3, var14);
            var14 = var3[var7];
            var3 = var3[var9];
            var _closure2_slot13 = var3;
            var15 = var25.useCallback;
            var7 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var9 = arg1;
                    var7 = arg2;
                    var2 = _closure2_slot11;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot12;
                    var3 = var3.current;
                    if(!(var2 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot12;
                    var4 = var3.current;
                    if(!(var2 != var4)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var3 = var4.zoomTo;
                    var2 = {};
                    var2['x'] = var9;
                    var2['y'] = var7;
                    var2 = var3.bind(var4)(var2);
                    _fun0002_ip = 4; continue _fun0002;
case 2:
                    var2 = {};
                    var3 = _closure2_slot7;
                    var3 = var3.current;
                    var2['width'] = var3;
                    var3 = _closure2_slot8;
                    var3 = var3.current;
                    var2['height'] = var3;
                    var3 = var2.width;
                    var6 = 2;
                    var5 = var3 / var6;
                    var2 = var2.height;
                    var4 = var2 / var6;
                    var1 = _closure2_slot11;
                    var2 = var1.current;
                    var1 = var2.getScrollResponder;
                    var3 = var1.bind(var2)();
                    var2 = var3.scrollResponderZoomTo;
                    var1 = {};
                    var8 = var5 / var6;
                    var8 = var9 - var8;
                    var1['x'] = var8;
                    var6 = var4 / var6;
                    var6 = var7 - var6;
                    var1['y'] = var6;
                    var1['width'] = var5;
                    var1['height'] = var4;
                    var4 = true;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = new Array(0);
            var33 = var15.bind(var25)(var7, var3);
            var _closure2_slot14 = var33;
            var15 = var25.useCallback;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = arguments[0];
                    var1 = undefined;
                    if(!(var5 === var1)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var5 = true;
case 7:
                    var3 = _closure2_slot11;
                    var3 = var3.current;
                    var4 = null;
                    if(!(var4 == var3)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var3 = _closure2_slot12;
                    var3 = var3.current;
                    if(!(var4 !== var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var3 = _closure2_slot12;
                    var6 = var3.current;
                    var4 = var6.unzoom;
                    var3 = {};
                    var3['animated'] = var5;
                    var3 = var4.bind(var6)(var3);
                    _fun0003_ip = 11; continue _fun0003;
case 9:
                    var3 = {};
                    var4 = _closure2_slot7;
                    var4 = var4.current;
                    var3['width'] = var4;
                    var4 = _closure2_slot8;
                    var4 = var4.current;
                    var3['height'] = var4;
                    var7 = var3.width;
                    var6 = var3.height;
                    var2 = _closure2_slot11;
                    var3 = var2.current;
                    var2 = var3.getScrollResponder;
                    var4 = var2.bind(var3)();
                    var3 = var4.scrollResponderZoomTo;
                    var2 = {'x': 0, 'y': 0};
                    var2['width'] = var7;
                    var2['height'] = var6;
                    var2['animated'] = var5;
                    var2 = var3.bind(var4)(var2);
case 11:
                    return var1;
                }
            };
            var3 = new Array(0);
            var26 = var15.bind(var25)(var7, var3);
            var _closure2_slot15 = var26;
            var15 = var25.useCallback;
            var7 = new Array(2);
            var7[0] = var6;
            var7[1] = var19;
            var3 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.zoomScale;
                    var1 = 1;
                    var3 = var2 > var1;
                    var4 = _closure2_slot4;
                    var2 = var4.set;
                    var2 = var2.bind(var4)(var3);
                    var2 = _closure2_slot2;
                    var4 = var2.isInteracting;
                    var2 = var4.set;
                    var2 = var2.bind(var4)(var3);
                    var2 = _closure1_slot7;
                    if(var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 7;
                    var5 = var5[var4];
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var5 = var4.useEntranceAnimationState;
                    var4 = var5.getState;
                    var4 = var4.bind(var5)();
                    var4 = var4.isComplete;
                    var2 = !var4;
case 13:
                    if(var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var2 = var3;
case 15:
                    if(var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var2 = _closure2_slot13;
                    var4 = undefined;
                    var1 = true;
                    var1 = var2.bind(var4)(var1);
                    var1 = global;
                    var3 = var1.setTimeout;
                    var2 = function() {
                        var3 = _closure2_slot13;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = 500;
                    var1 = var3.bind(var4)(var2, var1);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var15.bind(var25)(var3, var7);
            var15 = _closure1_slot0;
            var3 = 8;
            var3 = var23[var3];
            var15 = var15.bind(var5)(var3);
            var3 = var15.flattenSource;
            var3 = var3.bind(var15)(var17);
            if(!(var4 == var3)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var3 = {};
case 19:
            var29 = var3.obscure;
            _closure2_slot16 = var29;
            var27 = var3.channelId;
            var3 = _closure1_slot0;
            var23 = _closure1_slot2;
            var4 = 9;
            var4 = var23[var4];
            var4 = var3.bind(var5)(var4);
            var25 = var4.MediaViewerSourcesStore;
            var15 = var25.useField;
            var4 = 'spoilerIndexes';
            var4 = var15.bind(var25)(var4);
            _closure2_slot17 = var4;
            var25 = _closure1_slot4;
            var30 = var25.useMemo;
            var15 = new Array(2);
            var15[0] = var21;
            var15[1] = var4;
            var4 = function() {
                var3 = _closure2_slot17;
                var2 = var3.has;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var30 = var30.bind(var25)(var4, var15);
            _closure2_slot18 = var30;
            var15 = _closure1_slot1;
            var4 = 10;
            var4 = var23[var4];
            var4 = var15.bind(var5)(var4);
            var4 = var4.bind(var5)(var27);
            _closure2_slot19 = var4;
            var31 = var25.useCallback;
            var27 = new Array(4);
            var27[0] = var30;
            var27[1] = var21;
            var27[2] = var32;
            var27[3] = var4;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot18;
                    if(var2) { _fun0005_ip = 12; continue _fun0005 }
case 21:
                    var2 = _closure2_slot19;
                    if(var2) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var4 = _closure2_slot1;
                    var3 = null;
                    var2 = var3 == var4;
case 22:
                    if(var2) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0005_ip = 24; continue _fun0005;
case 12:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.removeSpoiler;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 24:
                    var1 = undefined;
                    return var1;
                }
            };
            var32 = var31.bind(var25)(var4, var27);
            _closure2_slot20 = var32;
            var31 = var25.useCallback;
            var27 = new Array(2);
            var27[0] = var6;
            var27[1] = var19;
            var4 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var1 = _closure2_slot2;
                    var3 = var1.overlayEnabled;
                    var2 = var3.set;
                    var4 = var1.overlayEnabled;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var1 = !var1;
                    var1 = var2.bind(var3)(var1);
case 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var31.bind(var25)(var4, var27);
            _closure2_slot21 = var4;
            var31 = var25.useCallback;
            var27 = new Array(3);
            var27[0] = var26;
            var27[1] = var33;
            var27[2] = var6;
            var6 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.absoluteX;
                    var4 = var1.absoluteY;
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    var3 = _closure2_slot14;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var5, var4);
                    _fun0007_ip = 30; continue _fun0007;
case 28:
                    var2 = _closure2_slot15;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 30:
                    var1 = undefined;
                    return var1;
                }
            };
            var33 = var31.bind(var25)(var6, var27);
            _closure2_slot22 = var33;
            var31 = var25.useCallback;
            var27 = new Array(1);
            var27[0] = var21;
            var6 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.removeSpoiler;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var31 = var31.bind(var25)(var6, var27);
            _closure2_slot23 = var31;
            var27 = var25.useMemo;
            var6 = new Array(7);
            var6[0] = var33;
            var6[1] = var32;
            var6[2] = var31;
            var6[3] = var30;
            var6[4] = var29;
            var6[5] = var28;
            var6[6] = var4;
            var4 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var7 = 11;
                    var1 = var3[var7];
                    var6 = undefined;
                    var1 = var5.bind(var6)(var1);
                    var4 = var1.Gesture;
                    var1 = var4.Tap;
                    var4 = var1.bind(var4)();
                    var1 = var4.runOnJS;
                    var9 = true;
                    var10 = var1.bind(var4)(var9);
                    var8 = var10.enabled;
                    var4 = _closure2_slot18;
                    var4 = !var4;
                    var10 = var8.bind(var10)(var4);
                    var8 = var10.numberOfTaps;
                    var4 = 2;
                    var8 = var8.bind(var10)(var4);
                    var4 = var8.maxDistance;
                    var13 = 4;
                    var3 = var3[var13];
                    var5 = var5.bind(var6)(var3);
                    var3 = var5.isAndroid;
                    var10 = var3.bind(var5)();
                    var5 = 10;
                    var3 = var5;
                    if(!var10) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                    var3 = 20;
case 32:
                    var8 = var4.bind(var8)(var3);
                    var4 = var8.onStart;
                    var3 = _closure2_slot22;
                    var11 = var4.bind(var8)(var3);
                    var12 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = var3[var7];
                    var4 = var12.bind(var6)(var4);
                    var8 = var4.Gesture;
                    var4 = var8.Tap;
                    var8 = var4.bind(var8)();
                    var4 = var8.runOnJS;
                    var10 = var4.bind(var8)(var9);
                    var8 = var10.enabled;
                    var4 = _closure2_slot18;
                    var4 = !var4;
                    var10 = var8.bind(var10)(var4);
                    var4 = var10.numberOfTaps;
                    var8 = 1;
                    var10 = var4.bind(var10)(var8);
                    var4 = var10.maxDistance;
                    var3 = var3[var13];
                    var12 = var12.bind(var6)(var3);
                    var3 = var12.isAndroid;
                    var12 = var3.bind(var12)();
                    var3 = var5;
                    if(!var12) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                    var3 = 20;
case 34:
                    var10 = var4.bind(var10)(var3);
                    var4 = var10.onStart;
                    var3 = _closure2_slot21;
                    var10 = var4.bind(var10)(var3);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var4.bind(var6)(var3);
                    var4 = var3.Gesture;
                    var3 = var4.Tap;
                    var4 = var3.bind(var4)();
                    var3 = var4.runOnJS;
                    var12 = var3.bind(var4)(var9);
                    var4 = var12.enabled;
                    var3 = _closure2_slot18;
                    if(!var3) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                    var14 = _closure2_slot16;
                    var3 = !var14;
case 36:
                    var4 = var4.bind(var12)(var3);
                    var3 = var4.numberOfTaps;
                    var4 = var3.bind(var4)(var8);
                    var3 = var4.maxDistance;
                    var12 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var13];
                    var12 = var12.bind(var6)(var8);
                    var8 = var12.isAndroid;
                    var8 = var8.bind(var12)();
                    if(!var8) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                    var5 = 20;
case 38:
                    var5 = var3.bind(var4)(var5);
                    var4 = var5.onStart;
                    var3 = _closure2_slot23;
                    var8 = var4.bind(var5)(var3);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = var2[var7];
                    var4 = var3.bind(var6)(var4);
                    var5 = var4.Gesture;
                    var4 = var5.Exclusive;
                    var5 = var4.bind(var5)(var8, var11, var10);
                    var4 = var2[var7];
                    var4 = var3.bind(var6)(var4);
                    var8 = var4.Gesture;
                    var4 = var8.LongPress;
                    var8 = var4.bind(var8)();
                    var4 = var8.runOnJS;
                    var9 = var4.bind(var8)(var9);
                    var8 = var9.enabled;
                    var4 = _closure2_slot18;
                    var4 = !var4;
                    var9 = var8.bind(var9)(var4);
                    var8 = var9.onStart;
                    var4 = _closure2_slot20;
                    var4 = var8.bind(var9)(var4);
                    var2 = var2[var7];
                    var2 = var3.bind(var6)(var2);
                    var3 = var2.Gesture;
                    var2 = var3.Simultaneous;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var5, var4, var1);
                    return var1;
                }
            };
            var6 = var27.bind(var25)(var4, var6);
            var4 = var25.useRef;
            var4 = var4.bind(var25)(var24);
            _closure2_slot24 = var4;
            var24 = var25.useEffect;
            var4 = new Array(3);
            var4[0] = var26;
            var4[1] = var12;
            var4[2] = var11;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot24;
                    var2 = var2.current;
                    if(var2) { _fun0009_ip = 10; continue _fun0009 }
case 40:
                    var3 = _closure2_slot24;
                    var2 = true;
                    var3['current'] = var2;
                    _fun0009_ip = 12; continue _fun0009;
case 10:
                    var3 = _closure2_slot15;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var24.bind(var25)(var1, var4);
            var4 = _closure1_slot6;
            var1 = 11;
            var1 = var23[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.GestureDetector;
            var1 = {};
            var1['gesture'] = var6;
            var6 = 12;
            var6 = var23[var6];
            var15 = var15.bind(var5)(var6);
            var6 = {};
            var6['entranceAnimationDriver'] = var22;
            var6['index'] = var21;
            var6['originLayout'] = var20;
            var6['panGestureConfig'] = var19;
            var6['renderMedia'] = var18;
            var6['source'] = var17;
            var6['windowWidth'] = var12;
            var6['windowHeight'] = var11;
            var6['useItemVisible'] = var16;
            var6 = var4.bind(var5)(var15, var6);
            var1['children'] = var6;
            var6 = var4.bind(var5)(var3, var1);
            var1 = _closure1_slot7;
            var4 = _closure1_slot6;
            if(var1) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var3 = _closure1_slot5;
            var1 = {'ref': null, 'style': null, 'automaticallyAdjustContentInsets': false, 'showsHorizontalScrollIndicator': false, 'showsVerticalScrollIndicator': false, 'minimumZoomScale': 1, 'maximumZoomScale': null, 'centerContent': true, 'scrollEventThrottle': 16};
            var1['ref'] = var13;
            var13 = {};
            var13['width'] = var12;
            var13['height'] = var11;
            var1['style'] = var13;
            var1['maximumZoomScale'] = var8;
            var1['onScroll'] = var7;
            var13 = 'auto';
            if(!var14) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var13 = 'none';
case 43:
            var1['pointerEvents'] = var13;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 45; continue _fun0001;
case 41:
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 13;
            var2 = var13[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['ref'] = var10;
            var10 = {};
            var10['width'] = var12;
            var10['height'] = var11;
            var2['style'] = var10;
            var2['minimumZoomScale'] = var9;
            var2['maximumZoomScale'] = var8;
            var2['onZoomChanged'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 45:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/MediaViewerItem.tsx';
    var4 = var5.bind(var6)(var4);
    var3['MediaViewerItem'] = var2;
    return var1;
})();
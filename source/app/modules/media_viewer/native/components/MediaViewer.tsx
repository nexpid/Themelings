// app/modules/media_viewer/native/components/MediaViewer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot5 = var9;
    var9 = var4.StyleSheet;
    var _closure1_slot6 = var9;
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.isAndroid;
    var4 = var4.bind(var8)();
    var _closure1_slot11 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var22 = var2.entranceAnimationDriver;
            var21 = var2.index;
            var _closure2_slot0 = var21;
            var33 = var2.onLongPress;
            var _closure2_slot1 = var33;
            var20 = var2.originLayout;
            var19 = var2.panGestureConfig;
            var _closure2_slot2 = var19;
            var29 = var2.panGesture;
            var _closure2_slot3 = var29;
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
            var28 = _closure1_slot4;
            var4 = var28.useRef;
            var4 = var4.bind(var28)(var10);
            var _closure2_slot7 = var4;
            var4 = var28.useRef;
            var4 = var4.bind(var28)(var3);
            var _closure2_slot8 = var4;
            var4 = var28.useState;
            var4 = var4.bind(var28)(var10);
            var25 = _closure1_slot3;
            var14 = 2;
            var4 = var25.bind(var5)(var4, var14);
            var7 = 0;
            var12 = var4[var7];
            var9 = 1;
            var4 = var4[var9];
            var _closure2_slot9 = var4;
            var4 = var28.useState;
            var4 = var4.bind(var28)(var3);
            var4 = var25.bind(var5)(var4, var14);
            var11 = var4[var7];
            var4 = var4[var9];
            var _closure2_slot10 = var4;
            var15 = _closure1_slot0;
            var23 = _closure1_slot2;
            var4 = 6;
            var4 = var23[var4];
            var8 = var15.bind(var5)(var4);
            var4 = var8.useOrientation;
            var26 = var4.bind(var8)();
            var8 = var28.useEffect;
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
            var3 = var8.bind(var28)(var3, var4);
            var4 = _closure1_slot1;
            var3 = 7;
            var3 = var23[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)(var12, var11, var17);
            var8 = var3.maximumZoomScale;
            var3 = var28.useRef;
            var4 = null;
            var13 = var3.bind(var28)(var4);
            var _closure2_slot11 = var13;
            var3 = var28.useRef;
            var10 = var3.bind(var28)(var4);
            var _closure2_slot12 = var10;
            var3 = var28.useState;
            var24 = false;
            var3 = var3.bind(var28)(var24);
            var3 = var25.bind(var5)(var3, var14);
            var14 = var3[var7];
            var3 = var3[var9];
            var _closure2_slot13 = var3;
            var25 = var28.useEffect;
            var7 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dismissKeyboard;
                var2 = var2.bind(var3)();
                return var1;
            };
            var3 = new Array(0);
            var3 = var25.bind(var28)(var7, var3);
            var25 = var28.useCallback;
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
            var34 = var25.bind(var28)(var7, var3);
            var _closure2_slot14 = var34;
            var25 = var28.useCallback;
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
            var27 = var25.bind(var28)(var7, var3);
            var _closure2_slot15 = var27;
            var25 = var28.useCallback;
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
                    var2 = _closure1_slot11;
                    if(var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 9;
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
            var7 = var25.bind(var28)(var3, var7);
            var3 = 10;
            var3 = var23[var3];
            var15 = var15.bind(var5)(var3);
            var3 = var15.flattenSource;
            var3 = var3.bind(var15)(var17);
            if(!(var4 == var3)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var3 = {};
case 19:
            var30 = var3.obscure;
            _closure2_slot16 = var30;
            var28 = var3.channelId;
            var3 = _closure1_slot0;
            var23 = _closure1_slot2;
            var4 = 11;
            var4 = var23[var4];
            var4 = var3.bind(var5)(var4);
            var25 = var4.MediaViewerSourcesStore;
            var15 = var25.useField;
            var4 = 'spoilerIndexes';
            var4 = var15.bind(var25)(var4);
            _closure2_slot17 = var4;
            var25 = _closure1_slot4;
            var31 = var25.useMemo;
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
            var31 = var31.bind(var25)(var4, var15);
            _closure2_slot18 = var31;
            var15 = _closure1_slot1;
            var4 = 12;
            var4 = var23[var4];
            var4 = var15.bind(var5)(var4);
            var4 = var4.bind(var5)(var28);
            _closure2_slot19 = var4;
            var32 = var25.useCallback;
            var28 = new Array(4);
            var28[0] = var31;
            var28[1] = var21;
            var28[2] = var33;
            var28[3] = var4;
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
                    var2 = 11;
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
            var33 = var32.bind(var25)(var4, var28);
            _closure2_slot20 = var33;
            var32 = var25.useCallback;
            var28 = new Array(2);
            var28[0] = var6;
            var28[1] = var19;
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
            var4 = var32.bind(var25)(var4, var28);
            _closure2_slot21 = var4;
            var32 = var25.useCallback;
            var28 = new Array(3);
            var28[0] = var27;
            var28[1] = var34;
            var28[2] = var6;
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
            var34 = var32.bind(var25)(var6, var28);
            _closure2_slot22 = var34;
            var32 = var25.useCallback;
            var28 = new Array(1);
            var28[0] = var21;
            var6 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.removeSpoiler;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var32 = var32.bind(var25)(var6, var28);
            _closure2_slot23 = var32;
            var28 = var25.useMemo;
            var6 = new Array(7);
            var6[0] = var34;
            var6[1] = var33;
            var6[2] = var32;
            var6[3] = var31;
            var6[4] = var30;
            var6[5] = var29;
            var6[6] = var4;
            var4 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var7 = 13;
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
                    var13 = 5;
                    var3 = var3[var13];
                    var5 = var5.bind(var6)(var3);
                    var3 = var5.isAndroid;
                    var10 = var3.bind(var5)();
                    var5 = 10;
                    var3 = var5;
                    if(!var10) { _fun0008_ip = 32; continue _fun0008 }
case 18:
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
                    if(!var12) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                    var3 = 20;
case 33:
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
                    if(!var3) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                    var14 = _closure2_slot16;
                    var3 = !var14;
case 35:
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
                    if(!var8) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                    var5 = 20;
case 37:
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
            var6 = var28.bind(var25)(var4, var6);
            var4 = var25.useRef;
            var4 = var4.bind(var25)(var24);
            _closure2_slot24 = var4;
            var28 = var25.useEffect;
            var24 = new Array(3);
            var24[0] = var27;
            var24[1] = var12;
            var24[2] = var11;
            var4 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot24;
                    var3 = var3.current;
                    if(var3) { _fun0009_ip = 39; continue _fun0009 }
case 23:
                    var4 = _closure2_slot24;
                    var3 = true;
                    var4['current'] = var3;
                    var3 = undefined;
                    return var3;
case 39:
                    var3 = global;
                    var5 = var3.setTimeout;
                    var4 = _closure2_slot15;
                    var3 = undefined;
                    var2 = 0;
                    var2 = var5.bind(var3)(var4, var2);
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
                }
            };
            var4 = var28.bind(var25)(var4, var24);
            var24 = var25.useEffect;
            var4 = new Array(2);
            var4[0] = var27;
            var4[1] = var26;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot24;
                    var2 = var2.current;
                    if(!var2) { _fun0010_ip = 40; continue _fun0010 }
case 41:
                    var3 = _closure2_slot15;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
case 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var24.bind(var25)(var1, var4);
            var4 = _closure1_slot9;
            var1 = 13;
            var1 = var23[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.GestureDetector;
            var1 = {};
            var1['gesture'] = var6;
            var6 = 14;
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
            var1 = _closure1_slot11;
            var4 = _closure1_slot9;
            if(var1) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var3 = _closure1_slot7;
            var1 = {'ref': null, 'style': null, 'automaticallyAdjustContentInsets': false, 'showsHorizontalScrollIndicator': false, 'showsVerticalScrollIndicator': false, 'minimumZoomScale': 1, 'maximumZoomScale': null, 'centerContent': true, 'scrollEventThrottle': 16};
            var1['ref'] = var13;
            var13 = {};
            var13['width'] = var12;
            var13['height'] = var11;
            var1['style'] = var13;
            var1['maximumZoomScale'] = var8;
            var1['onScroll'] = var7;
            var13 = 'auto';
            if(!var14) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var13 = 'none';
case 44:
            var1['pointerEvents'] = var13;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 46; continue _fun0001;
case 42:
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 15;
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
case 46:
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx1(){const{zoomed,pinching}=this.__closure;return!zoomed.get()&&!pinching.get();}';
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx2(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var2 = arg1;
        var29 = var2.entranceAnimationDriver;
        var _closure2_slot0 = var29;
        var14 = var2.initialScrollItem;
        var7 = var2.onContentSizeChange;
        var28 = var2.onLongPress;
        var _closure2_slot1 = var28;
        var11 = var2.onScroll;
        var27 = var2.originLayout;
        var _closure2_slot2 = var27;
        var26 = var2.panGestureConfig;
        var _closure2_slot3 = var26;
        var24 = var2.renderMedia;
        var _closure2_slot4 = var24;
        var17 = var2.sources;
        var _closure2_slot5 = var17;
        var23 = var2.useItemVisible;
        var _closure2_slot6 = var23;
        var8 = var2.windowWidth;
        var _closure2_slot7 = var8;
        var22 = var2.windowHeight;
        var _closure2_slot8 = var22;
        var19 = var2.ref;
        var2 = var2.zoomed;
        var _closure2_slot9 = var2;
        var6 = _closure1_slot0;
        var20 = _closure1_slot2;
        var10 = 16;
        var3 = var20[var10];
        var4 = undefined;
        var5 = var6.bind(var4)(var3);
        var3 = var5.useSharedValue;
        var13 = false;
        var3 = var3.bind(var5)(var13);
        var _closure2_slot10 = var3;
        var5 = var20[var10];
        var12 = var6.bind(var4)(var5);
        var9 = var12.useDerivedValue;
        var5 = function O() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = _closure2_slot9;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var1 = !var1;
                if(!var1) { _fun0011_ip = 47; continue _fun0011 }
case 48:
                var3 = _closure2_slot10;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1 = !var2;
case 47:
                return var1;
            }
        };
        var15 = {};
        var15['zoomed'] = var2;
        var15['pinching'] = var3;
        var5['__closure'] = var15;
        var15 = 9157951736691.0;
        var5['__workletHash'] = var15;
        var15 = _closure1_slot13;
        var5['__initData'] = var15;
        var21 = var9.bind(var12)(var5);
        var _closure2_slot11 = var21;
        var12 = _closure1_slot4;
        var15 = var12.useCallback;
        var9 = new Array(1);
        var9[0] = var3;
        var5 = function(arg1) {
            var1 = arg1;
            var1 = var1.nativeEvent;
            var1 = var1.touches;
            var3 = _closure2_slot10;
            var2 = var3.set;
            var4 = var1.length;
            var1 = 2;
            var1 = var1 === var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var16 = var15.bind(var12)(var5, var9);
        var9 = var12.useCallback;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var3 = _closure2_slot10;
            var2 = var3.set;
            var1 = false;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var15 = var9.bind(var12)(var3, var5);
        var3 = 17;
        var3 = var20[var3];
        var5 = var6.bind(var4)(var3);
        var3 = var5.useMediaViewerPanGesture;
        var3 = var3.bind(var5)(var26, var21);
        var25 = var3.panGestureGenerator;
        var _closure2_slot12 = var25;
        var5 = var3.nativeGesture;
        var9 = var12.useCallback;
        var3 = new Array(11);
        var3[0] = var29;
        var3[1] = var28;
        var3[2] = var27;
        var3[3] = var26;
        var3[4] = var25;
        var3[5] = var24;
        var3[6] = var17;
        var3[7] = var23;
        var3[8] = var22;
        var3[9] = var8;
        var3[10] = var2;
        var2 = function(arg1, arg2) {
            var7 = arg2;
            var4 = _closure1_slot9;
            var3 = _closure1_slot12;
            var2 = {};
            var1 = _closure2_slot2;
            var2['originLayout'] = var1;
            var1 = _closure2_slot4;
            var2['renderMedia'] = var1;
            var1 = _closure2_slot1;
            var2['onLongPress'] = var1;
            var1 = _closure2_slot7;
            var2['windowWidth'] = var1;
            var1 = _closure2_slot8;
            var2['windowHeight'] = var1;
            var1 = _closure2_slot3;
            var2['panGestureConfig'] = var1;
            var1 = _closure2_slot0;
            var2['entranceAnimationDriver'] = var1;
            var1 = _closure2_slot5;
            var1 = var1[var7];
            var2['source'] = var1;
            var2['index'] = var7;
            var1 = _closure2_slot9;
            var2['zoomed'] = var1;
            var6 = _closure2_slot12;
            var1 = undefined;
            var6 = var6.bind(var1)(var7);
            var2['panGesture'] = var6;
            var5 = _closure2_slot6;
            var2['useItemVisible'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var12 = var9.bind(var12)(var2, var3);
        var2 = var20[var10];
        var3 = var6.bind(var4)(var2);
        var2 = var3.useAnimatedProps;
        var1 = function I() {
            var1 = {};
            var3 = _closure2_slot11;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var1['scrollEnabled'] = var2;
            return var1;
        };
        var9 = {};
        var9['scrollEnabled'] = var21;
        var1['__closure'] = var9;
        var9 = 13550782123441.0;
        var1['__workletHash'] = var9;
        var9 = _closure1_slot14;
        var1['__initData'] = var9;
        var9 = var2.bind(var3)(var1);
        var3 = _closure1_slot9;
        var1 = 13;
        var1 = var20[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.GestureDetector;
        var1 = {};
        var1['gesture'] = var5;
        var5 = 18;
        var5 = var20[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.AnimatedFastList;
        var5 = {};
        var5['ref'] = var19;
        var18 = _closure1_slot6;
        var18 = var18.absoluteFill;
        var5['style'] = var18;
        var18 = var17.length;
        var17 = new Array(1);
        var17[0] = var18;
        var5['sections'] = var17;
        var5['onTouchStart'] = var16;
        var5['onTouchEnd'] = var15;
        var5['onTouchCancel'] = var15;
        var5['initialScrollItem'] = var14;
        var5['automaticallyAdjustContentInsets'] = var13;
        var5['showsVerticalScrollIndicator'] = var13;
        var5['showsHorizontalScrollIndicator'] = var13;
        var5['itemSize'] = var8;
        var5['renderItem'] = var12;
        var5['onContentSizeChange'] = var7;
        var7 = true;
        var5['pagingEnabled'] = var7;
        var5['onScroll'] = var11;
        var5['scrollEventThrottle'] = var10;
        var5['animatedProps'] = var9;
        var5['disableLegacyGestureHandling'] = var7;
        var5['chunkBase'] = var8;
        var5['horizontal'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = "function MediaViewerTsx3(){const{absoluteFillObject,windowHeight,entranceAnimationDriver,interpolate,translatePos,closePosition}=this.__closure;return{...absoluteFillObject,height:windowHeight,backgroundColor:'black',opacity:Math.min(entranceAnimationDriver.get(),interpolate(translatePos.get(),[-closePosition,0,closePosition],[0,1,0]))};}";
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = "function MediaViewerTsx4(){const{isClosing,hideRelayoutSharedValue,overlayEnabled,isInteracting,withTiming,Easing,runOnJS,setShowHeader}=this.__closure;return{opacity:isClosing.get()||hideRelayoutSharedValue.get()?0:overlayEnabled.get()&&!isInteracting.get()?withTiming(1,{easing:Easing.linear,duration:150}):withTiming(0,{easing:Easing.linear,duration:75},'respect-motion-settings',function(){runOnJS(setShowHeader)(false);})};}";
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx5(){const{runOnJS,setShowHeader}=this.__closure;runOnJS(setShowHeader)(false);}';
    var4['code'] = var8;
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx6(){const{overlayEnabled,isInteracting,runOnJS,setShowHeader}=this.__closure;if(overlayEnabled.get()&&!isInteracting.get()){runOnJS(setShowHeader)(true);}}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = "function MediaViewerTsx7(){const{absoluteFillObject,translatePos,hideRelayoutSharedValue,withTiming,Easing}=this.__closure;return{...absoluteFillObject,alignItems:'center',justifyContent:'center',transform:[{translateY:translatePos.get()}],opacity:hideRelayoutSharedValue.get()?0:withTiming(1,{easing:Easing.linear,duration:75})};}";
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = var7.memo;
    var2 = function MediaViewer(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var17 = var1.onClose;
            var30 = var1.onLongPress;
            var29 = var1.originLayout;
            var26 = var1.renderMedia;
            var14 = var1.renderOverlay;
            var13 = var1.swipeVelocityThreshold;
            var1 = var1.syncer;
            var24 = var1.index;
            var25 = var1.sources;
            var10 = var1.useViewerProps;
            var9 = var1.zoomed;
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var7 = 19;
            var1 = var15[var7];
            var4 = undefined;
            var6 = var3.bind(var4)(var1);
            var1 = 20;
            var1 = var15[var1];
            var1 = var3.bind(var4)(var1);
            var8 = var1.MEDIA_VIEWER;
            var1 = new Array(1);
            var1[0] = var8;
            var1 = var6.bind(var4)(var1);
            var6 = var1.analyticsLocations;
            var36 = _closure1_slot4;
            var8 = var36.useState;
            var1 = true;
            var8 = var8.bind(var36)(var1);
            var35 = _closure1_slot3;
            var1 = 2;
            var1 = var35.bind(var4)(var8, var1);
            var18 = 0;
            var16 = var1[var18];
            var22 = 1;
            var43 = var1[var22];
            var _closure2_slot0 = var43;
            var1 = 21;
            var1 = var15[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var19 = var1.width;
            var20 = var1.height;
            var _closure2_slot1 = var20;
            var1 = 22;
            var1 = var15[var1];
            var8 = var3.bind(var4)(var1);
            var1 = {};
            var1['index'] = var24;
            var1['onClose'] = var17;
            var1['sources'] = var25;
            var1['windowHeight'] = var20;
            var1['windowWidth'] = var19;
            var45 = var8.bind(var4)(var1);
            var _closure2_slot2 = var45;
            var8 = _closure1_slot0;
            var39 = 16;
            var1 = var15[var39];
            var11 = var8.bind(var4)(var1);
            var1 = var11.useSharedValue;
            var34 = var1.bind(var11)(var18);
            var _closure2_slot3 = var34;
            var1 = var15[var39];
            var12 = var8.bind(var4)(var1);
            var11 = var12.useSharedValue;
            var1 = false;
            var1 = var11.bind(var12)(var1);
            var _closure2_slot4 = var1;
            var11 = var15[var39];
            var12 = var8.bind(var4)(var11);
            var11 = var12.useAnimatedRef;
            var23 = var11.bind(var12)();
            var _closure2_slot5 = var23;
            var11 = var25.length;
            var11 = var11 > var22;
            var _closure2_slot6 = var11;
            var10 = var10.bind(var4)();
            var27 = var10.ref;
            var31 = var10.onScroll;
            var32 = var10.onContentSizeChange;
            var21 = var10.useItemVisible;
            var12 = var36.useState;
            var10 = var24.get;
            var10 = var10.bind(var24)();
            var10 = var12.bind(var36)(var10);
            var10 = var35.bind(var4)(var10, var22);
            var33 = var10[var18];
            var10 = 17;
            var10 = var15[var10];
            var12 = var8.bind(var4)(var10);
            var10 = var12.useMediaViewerPanGestureConfig;
            var28 = var10.bind(var12)(var45, var13, var17);
            var13 = var28.dismiss;
            var41 = var28.translatePos;
            var _closure2_slot7 = var41;
            var38 = var28.isClosing;
            var _closure2_slot8 = var38;
            var44 = var28.isInteracting;
            var _closure2_slot9 = var44;
            var12 = var28.overlayEnabled;
            var _closure2_slot10 = var12;
            var10 = _closure1_slot6;
            var42 = var10.absoluteFillObject;
            var _closure2_slot11 = var42;
            var17 = var15[var39];
            var37 = var8.bind(var4)(var17);
            var24 = var37.useAnimatedStyle;
            var17 = function k() {
                var1 = {};
                var12 = _closure2_slot11;
                var13 = var1;
                var3 = copyDataProperties(var13, var12);
                var4 = _closure2_slot1;
                var3 = 'height';
                var1[var3] = var4;
                var4 = 'black';
                var3 = 'backgroundColor';
                var1[var3] = var4;
                var3 = global;
                var5 = var3.Math;
                var4 = var5.min;
                var6 = _closure2_slot3;
                var3 = var6.get;
                var3 = var3.bind(var6)();
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 16;
                var7 = var7[var6];
                var6 = undefined;
                var9 = var8.bind(var6)(var7);
                var8 = var9.interpolate;
                var7 = _closure2_slot7;
                var6 = var7.get;
                var7 = var6.bind(var7)();
                var2 = _closure2_slot2;
                var10 = -var2;
                var6 = new Array(3);
                var6[0] = var10;
                var10 = 0;
                var6[1] = var10;
                var6[2] = var2;
                var2 = [0, 1, 0];
                var2 = var8.bind(var9)(var7, var6, var2);
                var3 = var4.bind(var5)(var3, var2);
                var2 = 'opacity';
                var1[var2] = var3;
                return var1;
            };
            var40 = {};
            var40['absoluteFillObject'] = var42;
            var40['windowHeight'] = var20;
            var40['entranceAnimationDriver'] = var34;
            var46 = var15[var39];
            var46 = var8.bind(var4)(var46);
            var46 = var46.interpolate;
            var40['interpolate'] = var46;
            var40['translatePos'] = var41;
            var40['closePosition'] = var45;
            var17['__closure'] = var40;
            var40 = 10332062530694.0;
            var17['__workletHash'] = var40;
            var40 = _closure1_slot16;
            var17['__initData'] = var40;
            var24 = var24.bind(var37)(var17);
            var37 = var36.useState;
            var17 = {};
            var48 = var10.absoluteFillObject;
            var49 = var17;
            var40 = copyDataProperties(var49, var48);
            var45 = 'transparent';
            var40 = 'backgroundColor';
            var17[var40] = var45;
            var17 = var37.bind(var36)(var17);
            var17 = var35.bind(var4)(var17, var22);
            var18 = var17[var18];
            var17 = var15[var39];
            var35 = var8.bind(var4)(var17);
            var22 = var35.useAnimatedStyle;
            var17 = function A() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot8;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    if(var3) { _fun0013_ip = 49; continue _fun0013 }
case 50:
                    var4 = _closure2_slot4;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = 0;
                    if(var3) { _fun0013_ip = 49; continue _fun0013 }
case 51:
                    var4 = _closure2_slot10;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0013_ip = 52; continue _fun0013 }
case 53:
                    var4 = _closure2_slot9;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0013_ip = 52; continue _fun0013 }
case 2:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 23;
                    var3 = var10[var3];
                    var7 = undefined;
                    var6 = var8.bind(var7)(var3);
                    var5 = var6.withTiming;
                    var4 = {};
                    var3 = 16;
                    var3 = var10[var3];
                    var3 = var8.bind(var7)(var3);
                    var3 = var3.Easing;
                    var3 = var3.linear;
                    var4['easing'] = var3;
                    var3 = 150;
                    var4['duration'] = var3;
                    var3 = 1;
                    var3 = var5.bind(var6)(var3, var4);
                    _fun0013_ip = 54; continue _fun0013;
case 52:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var5 = 23;
                    var5 = var15[var5];
                    var13 = undefined;
                    var8 = var14.bind(var13)(var5);
                    var7 = var8.withTiming;
                    var6 = {};
                    var12 = 16;
                    var5 = var15[var12];
                    var5 = var14.bind(var13)(var5);
                    var5 = var5.Easing;
                    var5 = var5.linear;
                    var6['easing'] = var5;
                    var5 = 75;
                    var6['duration'] = var5;
                    var5 = function t() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 16;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.runOnJS;
                        var2 = _closure2_slot0;
                        var3 = var3.bind(var4)(var2);
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var10 = {};
                    var12 = var15[var12];
                    var12 = var14.bind(var13)(var12);
                    var12 = var12.runOnJS;
                    var10['runOnJS'] = var12;
                    var11 = _closure2_slot0;
                    var10['setShowHeader'] = var11;
                    var5['__closure'] = var10;
                    var10 = 11572173694016.0;
                    var5['__workletHash'] = var10;
                    var4 = _closure1_slot18;
                    var5['__initData'] = var4;
                    var17 = 'respect-motion-settings';
                    var20 = var8;
                    var19 = 0;
                    var18 = var6;
                    var16 = var5;
                    var3 = var20[var7](var19, var18, var17, var16, var15);
case 54:
                    var2 = var3;
case 49:
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var37 = {};
            var37['isClosing'] = var38;
            var37['hideRelayoutSharedValue'] = var1;
            var37['overlayEnabled'] = var12;
            var37['isInteracting'] = var44;
            var40 = 23;
            var38 = var15[var40];
            var38 = var8.bind(var4)(var38);
            var38 = var38.withTiming;
            var37['withTiming'] = var38;
            var38 = var15[var39];
            var38 = var8.bind(var4)(var38);
            var38 = var38.Easing;
            var37['Easing'] = var38;
            var38 = var15[var39];
            var38 = var8.bind(var4)(var38);
            var38 = var38.runOnJS;
            var37['runOnJS'] = var38;
            var37['setShowHeader'] = var43;
            var17['__closure'] = var37;
            var37 = 14874736878670.0;
            var17['__workletHash'] = var37;
            var37 = _closure1_slot17;
            var17['__initData'] = var37;
            var17 = var22.bind(var35)(var17);
            var22 = var15[var39];
            var37 = var8.bind(var4)(var22);
            var35 = var37.useDerivedValue;
            var22 = function M() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0014_ip = 55; continue _fun0014 }
case 27:
                    var4 = _closure2_slot9;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = !var3;
case 55:
                    if(!var2) { _fun0014_ip = 56; continue _fun0014 }
case 47:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 16;
                    var2 = var3[var2];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.runOnJS;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var4)(var1);
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
case 56:
                    var1 = undefined;
                    return var1;
                }
            };
            var38 = {};
            var38['overlayEnabled'] = var12;
            var38['isInteracting'] = var44;
            var44 = var15[var39];
            var44 = var8.bind(var4)(var44);
            var44 = var44.runOnJS;
            var38['runOnJS'] = var44;
            var38['setShowHeader'] = var43;
            var22['__closure'] = var38;
            var38 = 2199049578465.0;
            var22['__workletHash'] = var38;
            var38 = _closure1_slot19;
            var22['__initData'] = var38;
            var22 = var35.bind(var37)(var22);
            var22 = var15[var39];
            var37 = var8.bind(var4)(var22);
            var35 = var37.useAnimatedStyle;
            var22 = function de() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = {};
                    var10 = _closure2_slot11;
                    var11 = var1;
                    var3 = copyDataProperties(var11, var10);
                    var4 = 'center';
                    var3 = 'alignItems';
                    var1[var3] = var4;
                    var3 = 'justifyContent';
                    var1[var3] = var4;
                    var3 = {};
                    var5 = _closure2_slot7;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var3['translateY'] = var4;
                    var4 = new Array(1);
                    var4[0] = var3;
                    var3 = 'transform';
                    var1[var3] = var4;
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = 0;
                    if(var2) { _fun0015_ip = 57; continue _fun0015 }
case 58:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 23;
                    var2 = var9[var2];
                    var7 = undefined;
                    var6 = var8.bind(var7)(var2);
                    var5 = var6.withTiming;
                    var4 = {};
                    var2 = 16;
                    var2 = var9[var2];
                    var2 = var8.bind(var7)(var2);
                    var2 = var2.Easing;
                    var2 = var2.linear;
                    var4['easing'] = var2;
                    var2 = 75;
                    var4['duration'] = var2;
                    var2 = 1;
                    var3 = var5.bind(var6)(var2, var4);
case 57:
                    var2 = 'opacity';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var38 = {};
            var38['absoluteFillObject'] = var42;
            var38['translatePos'] = var41;
            var38['hideRelayoutSharedValue'] = var1;
            var40 = var15[var40];
            var40 = var8.bind(var4)(var40);
            var40 = var40.withTiming;
            var38['withTiming'] = var40;
            var39 = var15[var39];
            var39 = var8.bind(var4)(var39);
            var39 = var39.Easing;
            var38['Easing'] = var39;
            var22['__closure'] = var38;
            var38 = 8244409104374.0;
            var22['__workletHash'] = var38;
            var38 = _closure1_slot20;
            var22['__initData'] = var38;
            var22 = var35.bind(var37)(var22);
            var37 = var36.useRef;
            var35 = null;
            var35 = var37.bind(var36)(var35);
            var _closure2_slot12 = var35;
            var37 = var36.useCallback;
            var35 = new Array(3);
            var35[0] = var11;
            var35[1] = var23;
            var35[2] = var1;
            var11 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = _closure2_slot6;
                    if(!var1) { _fun0016_ip = 59; continue _fun0016 }
case 21:
                    var3 = _closure2_slot5;
                    var4 = var3.current;
                    var3 = null;
                    var1 = var3 != var4;
case 59:
                    if(!var1) { _fun0016_ip = 60; continue _fun0016 }
case 40:
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var1 = true;
                    var1 = var3.bind(var4)(var1);
                    var1 = global;
                    var4 = var1.clearTimeout;
                    var2 = _closure2_slot12;
                    var3 = var2.current;
                    var5 = undefined;
                    var3 = var4.bind(var5)(var3);
                    var4 = var1.setTimeout;
                    var3 = function() {
                        var3 = _closure2_slot4;
                        var2 = var3.set;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var1 = 250;
                    var1 = var4.bind(var5)(var3, var1);
                    var2['current'] = var1;
case 60:
                    var1 = undefined;
                    return var1;
                }
            };
            var37 = var37.bind(var36)(var11, var35);
            var _closure2_slot13 = var37;
            var35 = var36.useCallback;
            var11 = new Array(1);
            var11[0] = var1;
            var1 = function() {
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = false;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = var35.bind(var36)(var1, var11);
            var38 = var36.useEffect;
            var35 = new Array(1);
            var35[0] = var37;
            var11 = function() {
                var3 = _closure1_slot8;
                var2 = var3.subscribe;
                var1 = function() {
                    var2 = _closure2_slot13;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var38.bind(var36)(var11, var35);
            var35 = var36.useCallback;
            var11 = new Array(1);
            var11[0] = var37;
            var5 = function(arg1, arg2) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.orientation;
                    var1 = arg2;
                    var1 = var1.orientation;
                    if(!(var2 !== var1)) { _fun0017_ip = 55; continue _fun0017 }
case 48:
                    var2 = _closure2_slot13;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 55:
                    var2 = _closure1_slot11;
                    if(!var2) { _fun0017_ip = 61; continue _fun0017 }
case 62:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 24;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.unpauseCurrentVideoIfNeeded;
                    var1 = var1.bind(var2)();
case 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var35.bind(var36)(var5, var11);
            var5 = 6;
            var5 = var15[var5];
            var8 = var8.bind(var4)(var5);
            var5 = var8.useOrientationListener;
            var5 = var5.bind(var8)(var11);
            var11 = _closure1_slot9;
            var8 = _closure1_slot15;
            var5 = {};
            var5['entranceAnimationDriver'] = var34;
            var5['initialScrollItem'] = var33;
            var5['onContentSizeChange'] = var32;
            var5['onScroll'] = var31;
            var5['onLongPress'] = var30;
            var5['originLayout'] = var29;
            var5['panGestureConfig'] = var28;
            var5['ref'] = var27;
            var5['renderMedia'] = var26;
            var5['sources'] = var25;
            var5['useItemVisible'] = var21;
            var5['windowHeight'] = var20;
            var5['windowWidth'] = var19;
            var5['zoomed'] = var9;
            var21 = var11.bind(var4)(var8, var5);
            var9 = _closure1_slot10;
            var8 = _closure1_slot5;
            var5 = {};
            var10 = var10.absoluteFill;
            var5['style'] = var10;
            var5['onAccessibilityEscape'] = var13;
            var5['onLayout'] = var1;
            var1 = 25;
            var1 = var15[var1];
            var10 = var3.bind(var4)(var1);
            var1 = {};
            var19 = 'light-content';
            var1['barStyle'] = var19;
            var19 = !var16;
            var1['hidden'] = var19;
            var1 = var11.bind(var4)(var10, var1);
            var10 = new Array(5);
            var10[0] = var1;
            var1 = 26;
            var19 = var15[var1];
            var20 = var3.bind(var4)(var19);
            var19 = {};
            var19['style'] = var24;
            var19 = var11.bind(var4)(var20, var19);
            var10[1] = var19;
            var19 = var15[var1];
            var20 = var3.bind(var4)(var19);
            var19 = {};
            var19['ref'] = var23;
            var19['style'] = var22;
            var19['children'] = var21;
            var19 = var11.bind(var4)(var20, var19);
            var10[2] = var19;
            var1 = var15[var1];
            var3 = var3.bind(var4)(var1);
            var1 = {};
            var15 = new Array(2);
            var15[0] = var18;
            var15[1] = var17;
            var1['style'] = var15;
            var15 = 'none';
            if(!var16) { _fun0012_ip = 63; continue _fun0012 }
case 64:
            var15 = 'box-none';
case 63:
            var1['pointerEvents'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var1['children'] = var12;
            var1 = var11.bind(var4)(var3, var1);
            var10[3] = var1;
            var3 = _closure1_slot9;
            var12 = _closure1_slot1;
            var1 = _closure1_slot2;
            var11 = 27;
            var11 = var1[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11 = var3.bind(var4)(var12, var11);
            var10[4] = var11;
            var5['children'] = var10;
            var5 = var9.bind(var4)(var8, var5);
            var2 = _closure1_slot0;
            var1 = var1[var7];
            var1 = var2.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/MediaViewer.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
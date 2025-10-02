// app/modules/video_calls/native/components/VideoRenderer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var11 = 0;
    var2 = var7[var11];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var10 = 1;
    var5 = var7[var10];
    var2 = metroImportAll;
    var8 = var2.bind(var1)(var5);
    var _closure1_slot4 = var8;
    var9 = 2;
    var2 = var7[var9];
    var2 = var6.bind(var1)(var2);
    var5 = var2.View;
    var _closure1_slot5 = var5;
    var5 = var2.StyleSheet;
    var _closure1_slot6 = var5;
    var5 = var2.Dimensions;
    var _closure1_slot7 = var5;
    var2 = var2.ScrollView;
    var _closure1_slot8 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot9 = var5;
    var2 = var2.jsxs;
    var _closure1_slot10 = var2;
    var2 = 4;
    var2 = var7[var2];
    var12 = var6.bind(var1)(var2);
    var5 = var12.createStyles;
    var2 = {};
    var13 = {'height': 32, 'width': 32};
    var2['spinner'] = var13;
    var13 = {'alignItems': 'center', 'justifyContent': 'center'};
    var2['center'] = var13;
    var13 = {};
    var13['flex'] = var10;
    var2['zoomLayoutAndroid'] = var13;
    var13 = {'position': 'absolute', 'right': 8, 'top': 8};
    var2['liveTag'] = var13;
    var2 = var5.bind(var12)(var2);
    var _closure1_slot11 = var2;
    var2 = {};
    var2['COVER'] = var11;
    var5 = 'COVER';
    var2[var11] = var5;
    var2['CONTAIN'] = var10;
    var5 = 'CONTAIN';
    var2[var10] = var5;
    var2['AUTO'] = var9;
    var5 = 'AUTO';
    var2[var9] = var5;
    var _closure1_slot12 = var2;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var22 = var1.streamId;
            var2 = var1.resizeMode;
            var5 = undefined;
            if(!(var2 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot12;
            var2 = var3.CONTAIN;
case 2:
            var _closure2_slot0 = var2;
            var13 = var1.gestureEnabled;
            if(!(var13 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = false;
case 4:
            var11 = var1.renderTag;
            var19 = var1.videoSpinnerContext;
            var21 = var1.userId;
            var10 = var1.streamKey;
            var12 = var1.paused;
            if(!(var12 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var12 = false;
case 6:
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var1 = _closure1_slot11;
            var16 = var1.bind(var5)();
            var9 = _closure1_slot4;
            var1 = var9.useState;
            var8 = 0;
            var1 = var1.bind(var9)(var8);
            var23 = _closure1_slot3;
            var14 = 2;
            var1 = var23.bind(var5)(var1, var14);
            var25 = var1[var8];
            _closure2_slot1 = var25;
            var15 = 1;
            var1 = var1[var15];
            _closure2_slot2 = var1;
            var1 = var9.useState;
            var1 = var1.bind(var9)(var8);
            var1 = var23.bind(var5)(var1, var14);
            var24 = var1[var8];
            _closure2_slot3 = var24;
            var1 = var1[var15];
            _closure2_slot4 = var1;
            var1 = var9.useState;
            var1 = var1.bind(var9)(var8);
            var1 = var23.bind(var5)(var1, var14);
            var17 = var1[var8];
            _closure2_slot5 = var17;
            var20 = var1[var15];
            _closure2_slot6 = var20;
            var1 = var9.useState;
            var1 = var1.bind(var9)(var8);
            var3 = var23.bind(var5)(var1, var14);
            var1 = var3[var8];
            _closure2_slot7 = var1;
            var7 = var3[var15];
            _closure2_slot8 = var7;
            var3 = var9.useState;
            var18 = true;
            var3 = var3.bind(var9)(var18);
            var3 = var23.bind(var5)(var3, var14);
            var14 = var3[var8];
            var3 = var3[var15];
            _closure2_slot9 = var3;
            var8 = _closure1_slot1;
            var23 = _closure1_slot2;
            var3 = 5;
            var3 = var23[var3];
            var26 = var8.bind(var5)(var3);
            var3 = {};
            var27 = 'VideoRenderer';
            var3['location'] = var27;
            var3['videoSpinnerContext'] = var19;
            var3['userId'] = var21;
            var3['streamId'] = var22;
            var3['paused'] = var12;
            var3['loading'] = var14;
            var3 = var26.bind(var5)(var3);
            var3 = 6;
            var3 = var23[var3];
            var8 = var8.bind(var5)(var3);
            var3 = {};
            var3['streamId'] = var22;
            var3['userId'] = var21;
            var3['videoSpinnerContext'] = var19;
            var3['paused'] = var12;
            var3['loading'] = var14;
            var3['streamKey'] = var10;
            var3 = var8.bind(var5)(var3);
            var3 = var3.onReady;
            _closure2_slot10 = var3;
            var8 = var9.useRef;
            var10 = null;
            var8 = var8.bind(var9)(var10);
            _closure2_slot11 = var8;
            var12 = var9.useRef;
            var26 = var12.bind(var9)(var10);
            _closure2_slot12 = var26;
            var19 = var9.useCallback;
            var12 = new Array(2);
            var12[0] = var20;
            var12[1] = var7;
            var7 = function(arg1) {
                var1 = arg1;
                var2 = var1.nativeEvent;
                var1 = var2.width;
                var4 = var2.height;
                var5 = _closure1_slot7;
                var2 = var5.get;
                var3 = 'window';
                var2 = var2.bind(var5)(var3);
                var8 = var2.width;
                var2 = var5.get;
                var2 = var2.bind(var5)(var3);
                var2 = var2.height;
                var3 = global;
                var6 = var3.Math;
                var5 = var6.min;
                var7 = var3.Math;
                var3 = var7.sqrt;
                var8 = var8 * var2;
                var2 = 4;
                var8 = var8 * var2;
                var2 = var1 * var4;
                var2 = var8 / var2;
                var3 = var3.bind(var7)(var2);
                var2 = 1;
                var2 = var5.bind(var6)(var3, var2);
                var6 = _closure2_slot6;
                var5 = var1 * var2;
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var3 = _closure2_slot8;
                var2 = var4 * var2;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var21 = var19.bind(var9)(var7, var12);
            var12 = var9.useCallback;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var4 = _closure2_slot9;
                var1 = undefined;
                var3 = false;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot10;
                var2 = var2.bind(var1)();
                return var1;
            };
            var20 = var12.bind(var9)(var3, var7);
            var12 = var9.useCallback;
            var7 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var5 = var1.width;
                var3 = var1.height;
                var4 = _closure2_slot2;
                var1 = undefined;
                var4 = var4.bind(var1)(var5);
                var2 = _closure2_slot4;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var3 = new Array(0);
            var7 = var12.bind(var9)(var7, var3);
            var12 = var9.useMemo;
            var3 = new Array(5);
            var3[0] = var25;
            var3[1] = var24;
            var3[2] = var17;
            var3[3] = var1;
            var3[4] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = 0;
                    if(!(var1 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure2_slot3;
                    if(!(var1 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                    var2 = _closure2_slot5;
                    if(!(var1 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 11:
                    var2 = _closure2_slot7;
                    if(!(var1 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 12:
                    var7 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot3;
                    var5 = var3 / var2;
                    var3 = _closure2_slot5;
                    var2 = _closure2_slot7;
                    var3 = var3 / var2;
                    var6 = _closure1_slot12;
                    var6 = var6.AUTO;
                    if(!(var7 === var6)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var6 = 1;
                    if(!(var5 > var6)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    if(!(!(var3 > var6))) { _fun0002_ip = 17; continue _fun0002 }
case 15:
                    if(!(var5 < var6)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    if(!(!(var3 < var6))) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var6 = _closure1_slot12;
                    var6 = var6.CONTAIN;
                    _fun0002_ip = 20; continue _fun0002;
case 17:
                    var8 = _closure1_slot12;
                    var6 = var8.COVER;
case 20:
                    var7 = var6;
case 13:
                    var6 = _closure1_slot12;
                    var6 = var6.CONTAIN;
                    if(!(var7 !== var6)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var2 = _closure1_slot12;
                    var6 = var2.COVER;
                    var2 = 0;
                    if(!(var7 === var6)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    if(!(!(var3 > var5))) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var7 = _closure2_slot1;
                    var6 = _closure2_slot5;
                    var6 = var7 / var6;
                    _fun0002_ip = 27; continue _fun0002;
case 25:
                    var8 = _closure2_slot3;
                    var7 = _closure2_slot7;
                    var6 = var8 / var7;
case 27:
                    var2 = var6;
case 23:
                    _fun0002_ip = 28; continue _fun0002;
case 21:
                    if(!(!(var5 > var3))) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var5 = _closure2_slot1;
                    var3 = _closure2_slot5;
                    var3 = var5 / var3;
                    _fun0002_ip = 31; continue _fun0002;
case 29:
                    var5 = _closure2_slot3;
                    var4 = _closure2_slot7;
                    var3 = var5 / var4;
case 31:
                    var2 = var3;
case 28:
                    return var2;
case 8:
                    return var1;
                }
            };
            var12 = var12.bind(var9)(var2, var3);
            _closure2_slot13 = var12;
            var19 = var9.useLayoutEffect;
            var3 = new Array(5);
            var3[0] = var25;
            var3[1] = var24;
            var3[2] = var17;
            var3[3] = var1;
            var3[4] = var12;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = 7;
                    var3 = var1[var5];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var4 = _closure2_slot11;
                    var6 = var4.current;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0003_ip = 32; continue _fun0003 }
case 34:
                    var4 = _closure2_slot5;
                    var6 = 0;
                    if(!(var6 !== var4)) { _fun0003_ip = 32; continue _fun0003 }
case 35:
                    var4 = _closure2_slot7;
                    if(!(var6 !== var4)) { _fun0003_ip = 32; continue _fun0003 }
case 7:
                    var4 = _closure2_slot11;
                    var7 = var4.current;
                    var6 = var7.scrollResponderZoomTo;
                    var4 = {'x': 0, 'y': 0, 'width': null, 'height': null, 'animated': false};
                    var8 = global;
                    var12 = var8.Math;
                    var11 = var12.min;
                    var10 = _closure2_slot5;
                    var9 = _closure2_slot13;
                    var10 = var10 * var9;
                    var9 = _closure2_slot1;
                    var9 = var11.bind(var12)(var10, var9);
                    var4['width'] = var9;
                    var11 = var8.Math;
                    var10 = var11.min;
                    var9 = _closure2_slot7;
                    var8 = _closure2_slot13;
                    var9 = var9 * var8;
                    var8 = _closure2_slot3;
                    var8 = var10.bind(var11)(var9, var8);
                    var4['height'] = var8;
                    var4 = var6.bind(var7)(var4);
                    var3 = _closure2_slot11;
                    var6 = var3.current;
                    var4 = var6.scrollTo;
                    var3 = {'x': 0, 'y': 0, 'animated': false};
                    var3 = var4.bind(var6)(var3);
                    _fun0003_ip = 36; continue _fun0003;
case 32:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                    var4 = _closure2_slot12;
                    var5 = var4.current;
                    var4 = null;
                    var3 = var4 != var5;
case 37:
                    if(!var3) { _fun0003_ip = 36; continue _fun0003 }
case 39:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 8;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.unzoom;
                    var2 = _closure2_slot12;
                    var2 = var2.current;
                    var2 = var3.bind(var4)(var2);
case 36:
                    return var1;
                }
            };
            var2 = var19.bind(var9)(var2, var3);
            var19 = var9.useMemo;
            var3 = new Array(3);
            var3[0] = var12;
            var3[1] = var17;
            var3[2] = var1;
            var2 = function() {
                var1 = {};
                var4 = _closure2_slot5;
                var3 = _closure2_slot13;
                var3 = var4 * var3;
                var1['width'] = var3;
                var3 = _closure2_slot7;
                var2 = _closure2_slot13;
                var2 = var3 * var2;
                var1['height'] = var2;
                return var1;
            };
            var31 = var19.bind(var9)(var2, var3);
            var19 = var9.useMemo;
            var3 = new Array(3);
            var3[0] = var12;
            var3[1] = var17;
            var3[2] = var1;
            var2 = function() {
                var1 = {};
                var4 = _closure2_slot5;
                var3 = _closure2_slot13;
                var3 = var4 * var3;
                var1['width'] = var3;
                var3 = _closure2_slot7;
                var2 = _closure2_slot13;
                var2 = var3 * var2;
                var1['height'] = var2;
                return var1;
            };
            var19 = var19.bind(var9)(var2, var3);
            var23 = var9.useMemo;
            var3 = new Array(5);
            var3[0] = var17;
            var3[1] = var12;
            var3[2] = var25;
            var3[3] = var1;
            var3[4] = var24;
            var2 = function() {
                var1 = {'width': null, 'height': null, 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden'};
                var3 = global;
                var7 = var3.Math;
                var6 = var7.min;
                var5 = _closure2_slot5;
                var4 = _closure2_slot13;
                var5 = var5 * var4;
                var4 = _closure2_slot1;
                var4 = var6.bind(var7)(var5, var4);
                var1['width'] = var4;
                var5 = var3.Math;
                var4 = var5.min;
                var6 = _closure2_slot7;
                var3 = _closure2_slot13;
                var3 = var6 * var3;
                var2 = _closure2_slot3;
                var2 = var4.bind(var5)(var3, var2);
                var1['height'] = var2;
                return var1;
            };
            var23 = var23.bind(var9)(var2, var3);
            var3 = var9.useMemo;
            var2 = new Array(5);
            var2[0] = var17;
            var2[1] = var12;
            var2[2] = var25;
            var2[3] = var1;
            var2[4] = var24;
            var1 = function() {
                var1 = global;
                var6 = var1.Math;
                var5 = var6.min;
                var4 = _closure2_slot7;
                var2 = _closure2_slot13;
                var4 = var4 * var2;
                var2 = _closure2_slot3;
                var5 = var5.bind(var6)(var4, var2);
                var6 = var1.Math;
                var4 = var6.min;
                var2 = _closure2_slot5;
                var1 = _closure2_slot13;
                var2 = var2 * var1;
                var1 = _closure2_slot1;
                var4 = var4.bind(var6)(var2, var1);
                var1 = {};
                var2 = 'absolute';
                var1['position'] = var2;
                var6 = _closure2_slot3;
                var2 = 2;
                var6 = var6 / var2;
                var5 = var5 / var2;
                var5 = var6 - var5;
                var1['top'] = var5;
                var3 = _closure2_slot1;
                var3 = var3 / var2;
                var2 = var4 / var2;
                var2 = var3 - var2;
                var1['right'] = var2;
                return var1;
            };
            var9 = var3.bind(var9)(var1, var2);
            var17 = null;
            if(!var14) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var3 = _closure1_slot9;
            var27 = _closure1_slot1;
            var28 = _closure1_slot2;
            var1 = 9;
            var1 = var28[var1];
            var2 = var27.bind(var5)(var1);
            var1 = {};
            var1['animate'] = var18;
            var12 = var16.spinner;
            var1['style'] = var12;
            var12 = 10;
            var12 = var28[var12];
            var12 = var27.bind(var5)(var12);
            var12 = var12.unsafe_rawColors;
            var12 = var12.BRAND_500;
            var1['color'] = var12;
            var17 = var3.bind(var5)(var2, var1);
case 40:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var12 = var3[var1];
            var27 = var2.bind(var5)(var12);
            var12 = var27.useStore;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.orientation;
                return var1;
            };
            var4 = var12.bind(var27)(var4);
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.OrientationType;
            var1 = var1.PORTRAIT;
            var12 = var4 === var1;
            var1 = 7;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isAndroid;
            var1 = var1.bind(var2)();
            var4 = _closure1_slot10;
            if(var1) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            if(var13) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var2 = _closure1_slot5;
            var1 = {};
            var1['onLayout'] = var7;
            var27 = var16.center;
            var3 = new Array(2);
            var3[0] = var27;
            var27 = _closure1_slot6;
            var27 = var27.absoluteFillObject;
            var3[1] = var27;
            var1['style'] = var3;
            var28 = _closure1_slot9;
            var27 = _closure1_slot1;
            var29 = _closure1_slot2;
            var3 = 12;
            var3 = var29[var3];
            var27 = var27.bind(var5)(var3);
            var3 = {};
            var3['streamId'] = var22;
            var3['onSize'] = var21;
            var3['onReady'] = var20;
            var3['style'] = var31;
            var27 = var28.bind(var5)(var27, var3);
            var3 = new Array(2);
            var3[0] = var27;
            var3[1] = var17;
            var1['children'] = var3;
            var1 = var4.bind(var5)(var2, var1);
            _fun0001_ip = 46; continue _fun0001;
case 44:
            var3 = _closure1_slot8;
            var2 = {};
            var2['ref'] = var8;
            var2['onLayout'] = var7;
            var8 = _closure1_slot6;
            var8 = var8.absoluteFillObject;
            var2['style'] = var8;
            var8 = var16.center;
            var2['contentContainerStyle'] = var8;
            var8 = false;
            var2['bounces'] = var8;
            var2['centerContent'] = var18;
            var18 = !var14;
            var2['pinchGestureEnabled'] = var18;
            var18 = 8;
            var2['maximumZoomScale'] = var18;
            var2['minimumZoomScale'] = var15;
            var2['showsVerticalScrollIndicator'] = var8;
            var2['showsHorizontalScrollIndicator'] = var8;
            var8 = 16;
            var2['scrollEventThrottle'] = var8;
            var18 = _closure1_slot5;
            var8 = {};
            var8['style'] = var23;
            var28 = _closure1_slot9;
            var30 = _closure1_slot1;
            var32 = _closure1_slot2;
            var23 = 13;
            var23 = var32[var23];
            var23 = var30.bind(var5)(var23);
            var27 = var23.View;
            var23 = {};
            var29 = 12;
            var29 = var32[var29];
            var30 = var30.bind(var5)(var29);
            var29 = {};
            var29['streamId'] = var22;
            var29['onSize'] = var21;
            var29['onReady'] = var20;
            var29['style'] = var31;
            var29 = var28.bind(var5)(var30, var29);
            var23['children'] = var29;
            var27 = var28.bind(var5)(var27, var23);
            var23 = new Array(2);
            var23[0] = var27;
            var27 = null;
            if(!var12) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var29 = var10 == var11;
            var28 = undefined;
            if(var29) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var28 = var11.bind(var5)();
case 49:
            var27 = var28;
case 47:
            var23[1] = var27;
            var8['children'] = var23;
            var18 = var4.bind(var5)(var18, var8);
            var8 = new Array(2);
            var8[0] = var18;
            var8[1] = var17;
            var2['children'] = var8;
            var1 = var4.bind(var5)(var3, var2);
case 46:
            _fun0001_ip = 51; continue _fun0001;
case 42:
            var3 = _closure1_slot5;
            var2 = {};
            var2['onLayout'] = var7;
            var8 = var16.center;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = _closure1_slot6;
            var8 = var8.absoluteFillObject;
            var7[1] = var8;
            var2['style'] = var7;
            var8 = _closure1_slot9;
            var18 = _closure1_slot1;
            var23 = _closure1_slot2;
            var6 = 8;
            var6 = var23[var6];
            var7 = var18.bind(var5)(var6);
            var6 = {};
            var6['ref'] = var26;
            var16 = var16.zoomLayoutAndroid;
            var6['style'] = var16;
            var6['minimumZoomScale'] = var15;
            var6['gestureEnabled'] = var13;
            var15 = {};
            var16 = false;
            var15['collapsable'] = var16;
            var16 = {};
            var16['width'] = var25;
            var16['height'] = var24;
            var24 = 'center';
            var16['alignItems'] = var24;
            var16['justifyContent'] = var24;
            var15['style'] = var16;
            var16 = 12;
            var16 = var23[var16];
            var18 = var18.bind(var5)(var16);
            var16 = {};
            var16['streamId'] = var22;
            var16['onSize'] = var21;
            var16['onReady'] = var20;
            var16['style'] = var19;
            var18 = var8.bind(var5)(var18, var16);
            var16 = new Array(2);
            var16[0] = var18;
            var16[1] = var17;
            var15['children'] = var16;
            var15 = var4.bind(var5)(var3, var15);
            var6['children'] = var15;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var7['style'] = var9;
            var9 = null;
            if(var14) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var9 = null;
            if(!var13) { _fun0001_ip = 52; continue _fun0001 }
case 54:
            var9 = null;
            if(!var12) { _fun0001_ip = 52; continue _fun0001 }
case 55:
            var12 = var10 == var11;
            var10 = undefined;
            if(var12) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var10 = var11.bind(var5)();
case 56:
            var9 = var10;
case 52:
            var7['children'] = var9;
            var7 = var8.bind(var5)(var3, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 51:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/native/components/VideoRenderer.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['ResizeMode'] = var2;
    return var1;
})();
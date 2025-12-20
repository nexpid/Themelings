// app/modules/media_viewer/native/components/MediaViewer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function AnimatedMediaPresenter(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var18 = var4.source;
            var5 = var4.origin;
            var12 = var4.renderMedia;
            var10 = var4.windowWidth;
            var _closure2_slot0 = var10;
            var9 = var4.windowHeight;
            var _closure2_slot1 = var9;
            var7 = var4.sourceWidth;
            var _closure2_slot2 = var7;
            var6 = var4.sourceHeight;
            var _closure2_slot3 = var6;
            var21 = var4.entranceAnimationDriver;
            var _closure2_slot4 = var21;
            var3 = {'source': 0, 'origin': 0, 'renderMedia': 0, 'windowWidth': 0, 'windowHeight': 0, 'sourceWidth': 0, 'sourceHeight': 0, 'entranceAnimationDriver': 0};
            var30 = null;
            var31 = var3;
            var2 = silentSetPrototypeOf(var31, var30);
            var14 = 0;
            var31 = {};
            var30 = var4;
            var29 = var3;
            var20 = copyDataProperties(var31, var30, var29);
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 6;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useEntranceAnimation;
            var3 = var2.bind(var3)(var21);
            var2 = var3.loads;
            var17 = var3.handleLoad;
            var16 = var3.handleError;
            var24 = var3.handleLoadStart;
            var11 = new Array(0);
            var19 = global;
            var13 = var19.Array;
            var3 = var13.isArray;
            var3 = var3.bind(var13)(var18);
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = var11.push;
            var3 = {};
            var31 = var3;
            var30 = var20;
            var15 = copyDataProperties(var31, var30);
            var26 = var20.index;
            var25 = var18.uri;
            var15 = var19.HermesInternal;
            var23 = var15.concat;
            var22 = '0:';
            var15 = ':';
            var22 = var23.bind(var22)(var26, var15, var25);
            var15 = 'key';
            var3[var15] = var22;
            var15 = 'onLoadStart';
            var3[var15] = var24;
            var15 = 'onLoad';
            var3[var15] = var17;
            var15 = 'onError';
            var3[var15] = var16;
            var15 = 'source';
            var3[var15] = var18;
            var15 = _closure1_slot11;
            var22 = var15.platformStyles;
            var15 = 'style';
            var3[var15] = var22;
            var3 = var12.bind(var4)(var3);
            var3 = var13.bind(var11)(var3);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var15 = 1;
            var13 = var2 <= var15;
            if(!var13) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var22 = var11.push;
            var3 = {};
            var31 = var3;
            var30 = var20;
            var23 = copyDataProperties(var31, var30);
            var28 = var20.index;
            var23 = var18[var14];
            var27 = var23.uri;
            var23 = var19.HermesInternal;
            var26 = var23.concat;
            var25 = '0:';
            var23 = ':';
            var25 = var26.bind(var25)(var28, var23, var27);
            var23 = 'key';
            var3[var23] = var25;
            var23 = 'onLoadStart';
            var3[var23] = var24;
            var23 = 'onLoad';
            var3[var23] = var17;
            var23 = 'onError';
            var3[var23] = var16;
            var24 = var18[var14];
            var23 = 'source';
            var3[var23] = var24;
            var23 = _closure1_slot11;
            var24 = var23.platformStyles;
            var23 = 'style';
            var3[var23] = var24;
            var3 = var12.bind(var4)(var3);
            var3 = var22.bind(var11)(var3);
case 5:
            if(!(var2 >= var15)) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var3 = var11.push;
            var2 = {};
            var31 = var2;
            var30 = var20;
            var22 = copyDataProperties(var31, var30);
            var24 = var20.index;
            var20 = var18[var14];
            var23 = var20.uri;
            var19 = var19.HermesInternal;
            var22 = var19.concat;
            var20 = '1:';
            var19 = ':';
            var20 = var22.bind(var20)(var24, var19, var23);
            var19 = 'key';
            var2[var19] = var20;
            var18 = var18[var15];
            var15 = 'source';
            var2[var15] = var18;
            var15 = _closure1_slot11;
            var18 = var15.platformStyles;
            var15 = 'style';
            var2[var15] = var18;
            var15 = 'onLoad';
            var2[var15] = var17;
            var15 = 'onError';
            var2[var15] = var16;
            var15 = 'auto';
            if(!var13) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var15 = 'none';
case 8:
            var13 = 'pointerEvents';
            var2[var13] = var15;
            var13 = 'fadeDuration';
            var2[var13] = var14;
            var14 = false;
            var13 = 'fade';
            var2[var13] = var14;
            var2 = var12.bind(var4)(var2);
            var2 = var3.bind(var11)(var2);
case 4:
            var2 = var7 / var6;
            var12 = var5.width;
            var3 = var5.height;
            var12 = var12 / var3;
            var13 = var5.x;
            var3 = var5.width;
            var3 = var7 - var3;
            var20 = 2;
            var3 = var3 / var20;
            var13 = var13 - var3;
            var3 = var10 - var7;
            var3 = var3 / var20;
            var15 = var13 - var3;
            _closure2_slot6 = var15;
            var3 = var5.height;
            var3 = var6 - var3;
            var13 = var3 / var20;
            var3 = var9 - var6;
            var14 = var3 / var20;
            var3 = var5.y;
            var3 = var3 - var13;
            var16 = var3 - var14;
            _closure2_slot7 = var16;
            _closure2_slot8 = var7;
            _closure2_slot9 = var6;
            var13 = var5.resizeMode;
            var3 = 'cover';
            if(!(var3 !== var13)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = 1;
            if(!(var2 > var12)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = var2;
case 12:
            var2 = var5.width;
            var2 = var2 / var7;
            var13 = var2 * var3;
            _closure2_slot5 = var13;
            var17 = var7;
            var18 = var6;
            _fun0001_ip = 14; continue _fun0001;
case 10:
            var3 = var5.width;
            _closure2_slot8 = var3;
            var2 = var5.height;
            _closure2_slot9 = var2;
            var19 = var5.x;
            var12 = var10 - var7;
            var12 = var12 / var20;
            var12 = var19 - var12;
            _closure2_slot6 = var12;
            var5 = var5.y;
            var5 = var5 - var14;
            _closure2_slot7 = var5;
            var14 = 1;
            _closure2_slot5 = var14;
            var13 = var14;
            var15 = var12;
            var16 = var5;
            var17 = var3;
            var18 = var2;
case 14:
            var20 = _closure1_slot0;
            var14 = _closure1_slot2;
            var19 = 7;
            var2 = var14[var19];
            var5 = var20.bind(var4)(var2);
            var3 = var5.useAnimatedStyle;
            var2 = function L() {
                var4 = _closure2_slot4;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var _closure3_slot0 = var3;
                var6 = function interpolateProxy(arg1, arg2) {
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 7;
                    var4 = var7[var1];
                    var2 = undefined;
                    var6 = var3.bind(var2)(var4);
                    var5 = var6.interpolate;
                    var4 = _closure3_slot0;
                    var1 = var7[var1];
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.Extrapolation;
                    var8 = var1.CLAMP;
                    var10 = arg1;
                    var9 = arg2;
                    var12 = var6;
                    var11 = var4;
                    var1 = var12[var5](var11, var10, var9, var8, var7);
                    return var1;
                };
                var1 = {};
                var3 = _closure2_slot9;
                var4 = new Array(2);
                var4[0] = var3;
                var3 = _closure2_slot3;
                var4[1] = var3;
                var5 = undefined;
                var3 = [0, 1];
                var3 = var6.bind(var5)(var3, var4);
                var1['height'] = var3;
                var3 = _closure2_slot8;
                var4 = new Array(2);
                var4[0] = var3;
                var3 = _closure2_slot2;
                var4[1] = var3;
                var3 = [0, 1];
                var3 = var6.bind(var5)(var3, var4);
                var1['width'] = var3;
                var3 = _closure2_slot7;
                var7 = new Array(2);
                var7[0] = var3;
                var3 = 0;
                var7[1] = var3;
                var4 = [0, 1];
                var4 = var6.bind(var5)(var4, var7);
                var1['top'] = var4;
                var7 = _closure2_slot6;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var3;
                var3 = [0, 1];
                var3 = var6.bind(var5)(var3, var4);
                var1['left'] = var3;
                var4 = [0, 0.25];
                var3 = [16, 0];
                var3 = var6.bind(var5)(var4, var3);
                var1['borderRadius'] = var3;
                var3 = {};
                var2 = _closure2_slot5;
                var4 = new Array(2);
                var4[0] = var2;
                var2 = 1;
                var4[1] = var2;
                var2 = [0, 1];
                var2 = var6.bind(var5)(var2, var4);
                var3['scale'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var12 = {};
            var12['entranceAnimationDriver'] = var21;
            var21 = var14[var19];
            var21 = var20.bind(var4)(var21);
            var21 = var21.interpolate;
            var12['interpolate'] = var21;
            var19 = var14[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.Extrapolation;
            var12['Extrapolation'] = var19;
            var12['startHeight'] = var18;
            var12['sourceHeight'] = var6;
            var12['startWidth'] = var17;
            var12['sourceWidth'] = var7;
            var12['startTranslateY'] = var16;
            var12['startTranslateX'] = var15;
            var12['startScale'] = var13;
            var2['__closure'] = var12;
            var12 = 13785345619902.0;
            var2['__workletHash'] = var12;
            var12 = _closure1_slot12;
            var2['__initData'] = var12;
            var13 = var3.bind(var5)(var2);
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var2 = new Array(4);
            var2[0] = var10;
            var2[1] = var9;
            var2[2] = var7;
            var2[3] = var6;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.create;
                var1 = {};
                var4 = {};
                var6 = _closure2_slot0;
                var4['width'] = var6;
                var6 = _closure2_slot1;
                var4['height'] = var6;
                var6 = 'center';
                var4['alignItems'] = var6;
                var4['justifyContent'] = var6;
                var1['container'] = var4;
                var4 = {};
                var6 = _closure2_slot2;
                var4['width'] = var6;
                var5 = _closure2_slot3;
                var4['height'] = var5;
                var1['child'] = var4;
                var4 = {'position': 'relative', 'overflow': 'hidden', 'opacity': 1};
                var1['presenter'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = false;
            var1['collapsable'] = var5;
            var5 = var12.container;
            var1['style'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot5;
            var5 = {};
            var9 = var12.child;
            var5['style'] = var9;
            var10 = _closure1_slot8;
            var9 = _closure1_slot1;
            var8 = 8;
            var8 = var14[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var14 = var12.presenter;
            var12 = new Array(2);
            var12[0] = var14;
            var12[1] = var13;
            var8['style'] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
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
    var4 = var4.StyleSheet;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.isAndroid;
    var4 = var4.bind(var8)();
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    var4['platformStyles'] = var8;
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx1(){const{entranceAnimationDriver,interpolate,Extrapolation,startHeight,sourceHeight,startWidth,sourceWidth,startTranslateY,startTranslateX,startScale}=this.__closure;const entranceValue=entranceAnimationDriver.get();const interpolateProxy=function(from,to){return interpolate(entranceValue,from,to,Extrapolation.CLAMP);};return{height:interpolateProxy([0,1],[startHeight,sourceHeight]),width:interpolateProxy([0,1],[startWidth,sourceWidth]),top:interpolateProxy([0,1],[startTranslateY,0]),left:interpolateProxy([0,1],[startTranslateX,0]),borderRadius:interpolateProxy([0,0.25],[16,0]),transform:[{scale:interpolateProxy([0,1],[startScale,1])}]};}';
    var4['code'] = var8;
    var _closure1_slot12 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var11 = arg1;
            var12 = var11.source;
            var3 = var11.index;
            var _closure2_slot0 = var3;
            var15 = var11.windowWidth;
            var _closure2_slot1 = var15;
            var2 = var11.windowHeight;
            var _closure2_slot2 = var2;
            var9 = var11.panGestureConfig;
            var _closure2_slot3 = var9;
            var26 = var11.panGesture;
            var _closure2_slot4 = var26;
            var30 = var11.onLongPress;
            var _closure2_slot5 = var30;
            var21 = var11.zoomed;
            var _closure2_slot6 = var21;
            var1 = var11.useItemVisible;
            var5 = _closure1_slot4;
            var4 = var5.useRef;
            var4 = var4.bind(var5)(var15);
            var _closure2_slot7 = var4;
            var5 = _closure1_slot4;
            var4 = var5.useRef;
            var4 = var4.bind(var5)(var2);
            var _closure2_slot8 = var4;
            var5 = _closure1_slot4;
            var4 = var5.useState;
            var5 = var4.bind(var5)(var15);
            var25 = _closure1_slot3;
            var4 = undefined;
            var7 = 2;
            var6 = var25.bind(var4)(var5, var7);
            var5 = 0;
            var19 = var6[var5];
            var17 = 1;
            var6 = var6[var17];
            var _closure2_slot9 = var6;
            var10 = _closure1_slot4;
            var6 = var10.useState;
            var6 = var6.bind(var10)(var2);
            var6 = var25.bind(var4)(var6, var7);
            var18 = var6[var5];
            var6 = var6[var17];
            var _closure2_slot10 = var6;
            var10 = _closure1_slot0;
            var22 = _closure1_slot2;
            var6 = 9;
            var6 = var22[var6];
            var13 = var10.bind(var4)(var6);
            var6 = var13.useOrientation;
            var24 = var6.bind(var13)();
            var14 = _closure1_slot4;
            var13 = var14.useEffect;
            var6 = new Array(2);
            var6[0] = var15;
            var6[1] = var2;
            var2 = function() {
                var2 = global;
                var5 = var2.setTimeout;
                var4 = undefined;
                var3 = function() {
                    var3 = _closure2_slot9;
                    var5 = _closure2_slot1;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var5);
                    var4 = _closure2_slot10;
                    var3 = _closure2_slot2;
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
            var2 = var13.bind(var14)(var2, var6);
            var6 = _closure1_slot1;
            var2 = 10;
            var2 = var22[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.bind(var4)(var19, var18, var12);
            var15 = var2.width;
            var14 = var2.height;
            var13 = var2.maximumZoomScale;
            var20 = _closure1_slot4;
            var2 = var20.useRef;
            var6 = null;
            var20 = var2.bind(var20)(var6);
            var _closure2_slot11 = var20;
            var27 = _closure1_slot4;
            var2 = var27.useState;
            var23 = false;
            var2 = var2.bind(var27)(var23);
            var2 = var25.bind(var4)(var2, var7);
            var5 = var2[var5];
            var2 = var2[var17];
            var _closure2_slot12 = var2;
            var27 = _closure1_slot4;
            var25 = var27.useEffect;
            var7 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dismissKeyboard;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2 = new Array(0);
            var2 = var25.bind(var27)(var7, var2);
            var27 = _closure1_slot4;
            var25 = var27.useCallback;
            var7 = new Array(2);
            var7[0] = var21;
            var7[1] = var9;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.zoomScale;
                    var1 = 1;
                    var5 = var2 > var1;
                    var3 = _closure2_slot6;
                    var1 = var3.set;
                    var1 = var1.bind(var3)(var5);
                    var1 = _closure2_slot3;
                    var3 = var1.isInteracting;
                    var1 = var3.set;
                    var1 = var1.bind(var3)(var5);
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var6 = var3.useEntranceAnimationState;
                    var3 = var6.getState;
                    var3 = var3.bind(var6)();
                    var3 = var3.isComplete;
                    var3 = !var3;
                    if(var3) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var3 = var5;
case 15:
                    if(var3) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.isAndroid;
                    var3 = var4.bind(var5)();
case 17:
                    if(var3) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var3 = _closure2_slot12;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        var3 = _closure2_slot12;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = 500;
                    var2 = var4.bind(var1)(var3, var2);
case 19:
                    return var1;
                }
            };
            var7 = var25.bind(var27)(var2, var7);
            var2 = 12;
            var2 = var22[var2];
            var10 = var10.bind(var4)(var2);
            var2 = var10.flattenSource;
            var2 = var2.bind(var10)(var12);
            if(!(var6 == var2)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var2 = {};
case 21:
            var27 = var2.obscure;
            var _closure2_slot13 = var27;
            var25 = var2.channelId;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 13;
            var2 = var10[var2];
            var2 = var6.bind(var4)(var2);
            var22 = var2.MediaViewerSourcesStore;
            var12 = var22.useField;
            var2 = 'spoilerIndexes';
            var2 = var12.bind(var22)(var2);
            var _closure2_slot14 = var2;
            var28 = _closure1_slot4;
            var22 = var28.useMemo;
            var12 = new Array(2);
            var12[0] = var3;
            var12[1] = var2;
            var2 = function() {
                var3 = _closure2_slot14;
                var2 = var3.has;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var22.bind(var28)(var2, var12);
            var _closure2_slot15 = var12;
            var2 = _closure1_slot1;
            var22 = 14;
            var22 = var10[var22];
            var22 = var2.bind(var4)(var22);
            var22 = var22.bind(var4)(var25);
            var _closure2_slot16 = var22;
            var29 = _closure1_slot4;
            var28 = var29.useCallback;
            var25 = new Array(4);
            var25[0] = var12;
            var25[1] = var3;
            var25[2] = var30;
            var25[3] = var22;
            var22 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot15;
                    if(var2) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var2 = _closure2_slot16;
                    if(var2) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var4 = _closure2_slot5;
                    var3 = null;
                    var2 = var3 == var4;
case 25:
                    if(var2) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var3 = _closure2_slot5;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0004_ip = 27; continue _fun0004;
case 23:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.removeSpoiler;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var29 = var28.bind(var29)(var22, var25);
            var _closure2_slot17 = var29;
            var28 = _closure1_slot4;
            var25 = var28.useCallback;
            var22 = new Array(2);
            var22[0] = var21;
            var22[1] = var9;
            var9 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                    var1 = _closure2_slot3;
                    var3 = var1.overlayEnabled;
                    var2 = var3.set;
                    var4 = var1.overlayEnabled;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var1 = !var1;
                    var1 = var2.bind(var3)(var1);
case 29:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var25.bind(var28)(var9, var22);
            var _closure2_slot18 = var9;
            var28 = _closure1_slot4;
            var25 = var28.useCallback;
            var22 = new Array(1);
            var22[0] = var21;
            var21 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.absoluteX;
                    var5 = var1.absoluteY;
                    var3 = _closure2_slot6;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                    var3 = _closure2_slot6;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var2 = _closure2_slot11;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0006_ip = 33; continue _fun0006 }
case 35:
                    var3 = var4.zoomTo;
                    var2 = {};
                    var2['x'] = var6;
                    var2['y'] = var5;
                    var5 = true;
                    var2['animated'] = var5;
                    var2 = var3.bind(var4)(var2);
                    _fun0006_ip = 33; continue _fun0006;
case 31:
                    var1 = _closure2_slot11;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0006_ip = 33; continue _fun0006 }
case 36:
                    var1 = var2.unzoom;
                    var1 = var1.bind(var2)();
case 33:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = var25.bind(var28)(var21, var22);
            var _closure2_slot19 = var30;
            var28 = _closure1_slot4;
            var25 = var28.useCallback;
            var22 = new Array(1);
            var22[0] = var3;
            var21 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.removeSpoiler;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var28 = var25.bind(var28)(var21, var22);
            var _closure2_slot20 = var28;
            var25 = _closure1_slot4;
            var22 = var25.useMemo;
            var21 = new Array(7);
            var21[0] = var30;
            var21[1] = var29;
            var21[2] = var28;
            var21[3] = var12;
            var21[4] = var27;
            var21[5] = var26;
            var21[6] = var9;
            var9 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var7 = 15;
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
                    var4 = _closure2_slot15;
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
                    if(!var10) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                    var3 = 20;
case 37:
                    var8 = var4.bind(var8)(var3);
                    var4 = var8.onStart;
                    var3 = _closure2_slot19;
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
                    var4 = _closure2_slot15;
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
                    if(!var12) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                    var3 = 20;
case 39:
                    var10 = var4.bind(var10)(var3);
                    var4 = var10.onStart;
                    var3 = _closure2_slot18;
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
                    var3 = _closure2_slot15;
                    if(!var3) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                    var14 = _closure2_slot13;
                    var3 = !var14;
case 41:
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
                    if(!var8) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                    var5 = 20;
case 43:
                    var5 = var3.bind(var4)(var5);
                    var4 = var5.onStart;
                    var3 = _closure2_slot20;
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
                    var4 = _closure2_slot15;
                    var4 = !var4;
                    var9 = var8.bind(var9)(var4);
                    var8 = var9.onStart;
                    var4 = _closure2_slot17;
                    var4 = var8.bind(var9)(var4);
                    var2 = var2[var7];
                    var2 = var3.bind(var6)(var2);
                    var3 = var2.Gesture;
                    var2 = var3.Simultaneous;
                    var1 = _closure2_slot4;
                    var1 = var2.bind(var3)(var5, var4, var1);
                    return var1;
                }
            };
            var9 = var22.bind(var25)(var9, var21);
            var22 = _closure1_slot4;
            var21 = var22.useRef;
            var21 = var21.bind(var22)(var23);
            var _closure2_slot21 = var21;
            var25 = _closure1_slot4;
            var23 = var25.useEffect;
            var22 = new Array(2);
            var22[0] = var19;
            var22[1] = var18;
            var21 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot21;
                    var3 = var3.current;
                    if(var3) { _fun0008_ip = 45; continue _fun0008 }
case 26:
                    var3 = _closure2_slot21;
                    var2 = true;
                    var3['current'] = var2;
                    var2 = undefined;
                    return var2;
case 45:
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = _closure2_slot11;
                            var2 = var1.current;
                            var1 = null;
                            if(!(var1 != var2)) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                            var1 = var2.unzoom;
                            var1 = var1.bind(var2)();
case 46:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = 0;
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
                }
            };
            var21 = var23.bind(var25)(var21, var22);
            var23 = _closure1_slot4;
            var22 = var23.useEffect;
            var21 = new Array(1);
            var21[0] = var24;
            var16 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot21;
                    var2 = var2.current;
                    if(!var2) { _fun0010_ip = 34; continue _fun0010 }
case 48:
                    var1 = _closure2_slot11;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0010_ip = 34; continue _fun0010 }
case 28:
                    var2 = var3.unzoom;
                    var1 = {};
                    var4 = false;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
case 34:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var22.bind(var23)(var16, var21);
            var16 = var1.bind(var4)(var3);
            var3 = _closure1_slot8;
            var1 = 16;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['ref'] = var20;
            var20 = {};
            var20['width'] = var19;
            var20['height'] = var18;
            var1['style'] = var20;
            var1['width'] = var19;
            var1['height'] = var18;
            var1['minimumZoomScale'] = var17;
            var1['maximumZoomScale'] = var13;
            var1['onZoomChanged'] = var7;
            var5 = !var5;
            var1['gestureEnabled'] = var5;
            var7 = _closure1_slot8;
            var5 = 15;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.GestureDetector;
            var5 = {};
            var5['gesture'] = var9;
            var10 = _closure1_slot8;
            var9 = _closure1_slot22;
            var8 = {};
            var34 = var8;
            var33 = var11;
            var11 = copyDataProperties(var34, var33);
            var11 = 'visible';
            var8[var11] = var16;
            var11 = 'sourceWidth';
            var8[var11] = var15;
            var11 = 'sourceHeight';
            var8[var11] = var14;
            var11 = 'maximumZoomScale';
            var8[var11] = var13;
            var11 = 'hasSpoiler';
            var8[var11] = var12;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx2(){const{zoomed,pinching}=this.__closure;return!zoomed.get()&&!pinching.get();}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx3(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}';
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var25 = arg1;
        var _closure2_slot0 = var25;
        var9 = var25.windowWidth;
        var23 = var25.initialIndex;
        var _closure2_slot1 = var23;
        var7 = var25.panGestureConfig;
        var3 = var25.syncer;
        var24 = var3.zoomed;
        var _closure2_slot2 = var24;
        var2 = var3.useViewerProps;
        var17 = var3.sources;
        var _closure2_slot3 = var17;
        var15 = var3.index;
        var4 = undefined;
        var2 = var2.bind(var4)();
        var19 = var2.ref;
        var11 = var2.onScroll;
        var8 = var2.onContentSizeChange;
        var22 = var2.useItemVisible;
        var _closure2_slot4 = var22;
        var6 = _closure1_slot0;
        var20 = _closure1_slot2;
        var2 = 7;
        var3 = var20[var2];
        var5 = var6.bind(var4)(var3);
        var3 = var5.useSharedValue;
        var13 = false;
        var3 = var3.bind(var5)(var13);
        var _closure2_slot5 = var3;
        var5 = var20[var2];
        var12 = var6.bind(var4)(var5);
        var10 = var12.useDerivedValue;
        var5 = function o() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = _closure2_slot2;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var1 = !var1;
                if(!var1) { _fun0011_ip = 49; continue _fun0011 }
case 50:
                var3 = _closure2_slot5;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1 = !var2;
case 49:
                return var1;
            }
        };
        var14 = {};
        var14['zoomed'] = var24;
        var14['pinching'] = var3;
        var5['__closure'] = var14;
        var14 = 529085989648.0;
        var5['__workletHash'] = var14;
        var14 = _closure1_slot14;
        var5['__initData'] = var14;
        var10 = var10.bind(var12)(var5);
        var _closure2_slot6 = var10;
        var16 = _closure1_slot4;
        var14 = var16.useCallback;
        var12 = new Array(1);
        var12[0] = var3;
        var5 = function(arg1) {
            var1 = arg1;
            var1 = var1.nativeEvent;
            var1 = var1.touches;
            var3 = _closure2_slot5;
            var2 = var3.set;
            var4 = var1.length;
            var1 = 2;
            var1 = var1 === var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var16 = var14.bind(var16)(var5, var12);
        var14 = _closure1_slot4;
        var12 = var14.useCallback;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var3 = _closure2_slot5;
            var2 = var3.set;
            var1 = false;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var14 = var12.bind(var14)(var3, var5);
        var3 = 17;
        var3 = var20[var3];
        var5 = var6.bind(var4)(var3);
        var3 = var5.useMediaViewerPanGesture;
        var5 = var3.bind(var5)(var7, var10);
        var3 = var5.panGestureGenerator;
        var _closure2_slot7 = var3;
        var5 = var5.nativeGesture;
        var21 = _closure1_slot4;
        var12 = var21.useCallback;
        var7 = new Array(6);
        var7[0] = var25;
        var7[1] = var17;
        var7[2] = var24;
        var7[3] = var23;
        var7[4] = var22;
        var7[5] = var3;
        var3 = function(arg1, arg2) {
            var7 = arg2;
            var4 = _closure1_slot8;
            var3 = _closure1_slot13;
            var2 = {};
            var8 = _closure2_slot0;
            var9 = var2;
            var1 = copyDataProperties(var9, var8);
            var1 = _closure2_slot3;
            var6 = var1[var7];
            var1 = 'source';
            var2[var1] = var6;
            var1 = 'index';
            var2[var1] = var7;
            var6 = _closure2_slot1;
            var1 = 'initialIndex';
            var2[var1] = var6;
            var6 = _closure2_slot2;
            var1 = 'zoomed';
            var2[var1] = var6;
            var6 = _closure2_slot7;
            var1 = undefined;
            var7 = var6.bind(var1)(var7);
            var6 = 'panGesture';
            var2[var6] = var7;
            var6 = _closure2_slot4;
            var5 = 'useItemVisible';
            var2[var5] = var6;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var12 = var12.bind(var21)(var3, var7);
        var2 = var20[var2];
        var3 = var6.bind(var4)(var2);
        var2 = var3.useAnimatedProps;
        var1 = function s() {
            var1 = {};
            var3 = _closure2_slot6;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var1['scrollEnabled'] = var2;
            return var1;
        };
        var7 = {};
        var7['scrollEnabled'] = var10;
        var1['__closure'] = var7;
        var7 = 9089386904464.0;
        var1['__workletHash'] = var7;
        var7 = _closure1_slot15;
        var1['__initData'] = var7;
        var10 = var2.bind(var3)(var1);
        var3 = _closure1_slot8;
        var1 = 15;
        var1 = var20[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.GestureDetector;
        var1 = {};
        var1['gesture'] = var5;
        var7 = _closure1_slot8;
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
        var5['onTouchEnd'] = var14;
        var5['onTouchCancel'] = var14;
        var14 = var15.get;
        var14 = var14.bind(var15)();
        var5['initialScrollItem'] = var14;
        var5['automaticallyAdjustContentInsets'] = var13;
        var5['showsVerticalScrollIndicator'] = var13;
        var5['showsHorizontalScrollIndicator'] = var13;
        var5['itemSize'] = var9;
        var5['renderItem'] = var12;
        var5['onContentSizeChange'] = var8;
        var8 = true;
        var5['pagingEnabled'] = var8;
        var5['onScroll'] = var11;
        var11 = 16;
        var5['scrollEventThrottle'] = var11;
        var5['animatedProps'] = var10;
        var5['disableLegacyGestureHandling'] = var8;
        var5['chunkBase'] = var9;
        var5['horizontal'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = "function MediaViewerTsx4(){const{absoluteFillObject,windowHeight,entranceAnimationDriver,interpolate,translatePos,closePosition}=this.__closure;return{...absoluteFillObject,height:windowHeight,backgroundColor:'black',opacity:Math.min(entranceAnimationDriver.get(),interpolate(translatePos.get(),[-closePosition,0,closePosition],[0,1,0]))};}";
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = "function MediaViewerTsx5(){const{isClosing,hideRelayoutSharedValue,overlayEnabled,isInteracting,withTiming,Easing,runOnJS,setShowHeader}=this.__closure;return{opacity:isClosing.get()||hideRelayoutSharedValue.get()?0:overlayEnabled.get()&&!isInteracting.get()?withTiming(1,{easing:Easing.linear,duration:150}):withTiming(0,{easing:Easing.linear,duration:75},'respect-motion-settings',function(){runOnJS(setShowHeader)(false);})};}";
    var4['code'] = var8;
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx6(){const{runOnJS,setShowHeader}=this.__closure;runOnJS(setShowHeader)(false);}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx7(){const{overlayEnabled,isInteracting,runOnJS,setShowHeader}=this.__closure;if(overlayEnabled.get()&&!isInteracting.get()){runOnJS(setShowHeader)(true);}}';
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = "function MediaViewerTsx8(){const{absoluteFillObject,translatePos,hideRelayoutSharedValue,withTiming,Easing}=this.__closure;return{...absoluteFillObject,alignItems:'center',justifyContent:'center',transform:[{translateY:translatePos.get()}],opacity:hideRelayoutSharedValue.get()?0:withTiming(1,{easing:Easing.linear,duration:75})};}";
    var4['code'] = var8;
    var _closure1_slot21 = var4;
    var4 = var7.memo;
    var2 = function MediaViewer(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var16 = arg1;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 19;
            var1 = var11[var7];
            var4 = undefined;
            var5 = var9.bind(var4)(var1);
            var1 = 20;
            var1 = var11[var1];
            var1 = var9.bind(var4)(var1);
            var6 = var1.MEDIA_VIEWER;
            var1 = new Array(1);
            var1[0] = var6;
            var1 = var5.bind(var4)(var1);
            var6 = var1.analyticsLocations;
            var8 = _closure1_slot4;
            var5 = var8.useState;
            var1 = true;
            var5 = var5.bind(var8)(var1);
            var1 = _closure1_slot3;
            var8 = 2;
            var1 = var1.bind(var4)(var5, var8);
            var18 = 0;
            var17 = var1[var18];
            var20 = 1;
            var33 = var1[var20];
            var _closure2_slot0 = var33;
            var15 = var16.swipeVelocityThreshold;
            var10 = var16.onClose;
            var _closure2_slot1 = var10;
            var5 = var16.syncer;
            var1 = 21;
            var1 = var11[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var27 = var1.width;
            var28 = var1.height;
            var _closure2_slot2 = var28;
            var9 = var5.sources;
            var1 = var16.initialIndex;
            var11 = var9[var1];
            var _closure2_slot3 = var11;
            var13 = null;
            if(!(var13 == var11)) { _fun0012_ip = 51; continue _fun0012 }
case 52:
            var1 = {};
            var1['height'] = var28;
            _fun0012_ip = 53; continue _fun0012;
case 51:
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 10;
            var9 = var14[var9];
            var9 = var12.bind(var4)(var9);
            var1 = var9.bind(var4)(var27, var28, var11);
case 53:
            var1 = var1.height;
            var1 = var28 + var1;
            var30 = var1 / var8;
            var _closure2_slot4 = var30;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var25 = 7;
            var1 = var12[var25];
            var9 = var8.bind(var4)(var1);
            var1 = var9.useSharedValue;
            var29 = var1.bind(var9)(var18);
            var _closure2_slot5 = var29;
            var1 = var12[var25];
            var14 = var8.bind(var4)(var1);
            var9 = var14.useSharedValue;
            var1 = false;
            var1 = var9.bind(var14)(var1);
            var _closure2_slot6 = var1;
            var9 = var12[var25];
            var14 = var8.bind(var4)(var9);
            var9 = var14.useAnimatedRef;
            var23 = var9.bind(var14)();
            var _closure2_slot7 = var23;
            var5 = var5.sources;
            var5 = var5.length;
            var5 = var5 > var20;
            var _closure2_slot8 = var5;
            var9 = 17;
            var9 = var12[var9];
            var14 = var8.bind(var4)(var9);
            var9 = var14.useMediaViewerPanGestureConfig;
            var26 = var9.bind(var14)(var30, var15, var10);
            var15 = var26.dismiss;
            var31 = var26.translatePos;
            var _closure2_slot9 = var31;
            var22 = var26.isClosing;
            var _closure2_slot10 = var22;
            var34 = var26.isInteracting;
            var _closure2_slot11 = var34;
            var14 = var26.overlayEnabled;
            var _closure2_slot12 = var14;
            var9 = _closure1_slot6;
            var32 = var9.absoluteFillObject;
            var _closure2_slot13 = var32;
            var9 = var12[var25];
            var21 = var8.bind(var4)(var9);
            var19 = var21.useAnimatedStyle;
            var9 = function c() {
                var1 = {};
                var12 = _closure2_slot13;
                var13 = var1;
                var3 = copyDataProperties(var13, var12);
                var4 = _closure2_slot2;
                var3 = 'height';
                var1[var3] = var4;
                var4 = 'black';
                var3 = 'backgroundColor';
                var1[var3] = var4;
                var3 = global;
                var5 = var3.Math;
                var4 = var5.min;
                var6 = _closure2_slot5;
                var3 = var6.get;
                var3 = var3.bind(var6)();
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 7;
                var7 = var7[var6];
                var6 = undefined;
                var9 = var8.bind(var6)(var7);
                var8 = var9.interpolate;
                var7 = _closure2_slot9;
                var6 = var7.get;
                var7 = var6.bind(var7)();
                var6 = _closure2_slot4;
                var10 = -var6;
                var6 = new Array(3);
                var6[0] = var10;
                var10 = 0;
                var6[1] = var10;
                var2 = _closure2_slot4;
                var6[2] = var2;
                var2 = [0, 1, 0];
                var2 = var8.bind(var9)(var7, var6, var2);
                var3 = var4.bind(var5)(var3, var2);
                var2 = 'opacity';
                var1[var2] = var3;
                return var1;
            };
            var24 = {};
            var24['absoluteFillObject'] = var32;
            var24['windowHeight'] = var28;
            var24['entranceAnimationDriver'] = var29;
            var35 = var12[var25];
            var35 = var8.bind(var4)(var35);
            var35 = var35.interpolate;
            var24['interpolate'] = var35;
            var24['translatePos'] = var31;
            var24['closePosition'] = var30;
            var9['__closure'] = var24;
            var24 = 7190790597345.0;
            var9['__workletHash'] = var24;
            var24 = _closure1_slot17;
            var9['__initData'] = var24;
            var24 = var19.bind(var21)(var9);
            var21 = _closure1_slot4;
            var19 = var21.useState;
            var9 = {};
            var30 = _closure1_slot6;
            var37 = var30.absoluteFillObject;
            var38 = var9;
            var30 = copyDataProperties(var38, var37);
            var35 = 'transparent';
            var30 = 'backgroundColor';
            var9[var30] = var35;
            var19 = var19.bind(var21)(var9);
            var9 = _closure1_slot3;
            var9 = var9.bind(var4)(var19, var20);
            var19 = var9[var18];
            var9 = var12[var25];
            var20 = var8.bind(var4)(var9);
            var18 = var20.useAnimatedStyle;
            var9 = function w() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot10;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    if(var3) { _fun0013_ip = 54; continue _fun0013 }
case 55:
                    var4 = _closure2_slot6;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = 0;
                    if(var3) { _fun0013_ip = 54; continue _fun0013 }
case 56:
                    var4 = _closure2_slot12;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0013_ip = 57; continue _fun0013 }
case 58:
                    var4 = _closure2_slot11;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0013_ip = 57; continue _fun0013 }
case 59:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 22;
                    var3 = var10[var3];
                    var7 = undefined;
                    var6 = var8.bind(var7)(var3);
                    var5 = var6.withTiming;
                    var4 = {};
                    var3 = 7;
                    var3 = var10[var3];
                    var3 = var8.bind(var7)(var3);
                    var3 = var3.Easing;
                    var3 = var3.linear;
                    var4['easing'] = var3;
                    var3 = 150;
                    var4['duration'] = var3;
                    var3 = 1;
                    var3 = var5.bind(var6)(var3, var4);
                    _fun0013_ip = 60; continue _fun0013;
case 57:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var5 = 22;
                    var5 = var15[var5];
                    var13 = undefined;
                    var8 = var14.bind(var13)(var5);
                    var7 = var8.withTiming;
                    var6 = {};
                    var12 = 7;
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
                        var1 = 7;
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
                    var10 = 3621573979811.0;
                    var5['__workletHash'] = var10;
                    var4 = _closure1_slot19;
                    var5['__initData'] = var4;
                    var17 = 'respect-motion-settings';
                    var20 = var8;
                    var19 = 0;
                    var18 = var6;
                    var16 = var5;
                    var3 = var20[var7](var19, var18, var17, var16, var15);
case 60:
                    var2 = var3;
case 54:
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var21 = {};
            var21['isClosing'] = var22;
            var21['hideRelayoutSharedValue'] = var1;
            var21['overlayEnabled'] = var14;
            var21['isInteracting'] = var34;
            var30 = 22;
            var22 = var12[var30];
            var22 = var8.bind(var4)(var22);
            var22 = var22.withTiming;
            var21['withTiming'] = var22;
            var22 = var12[var25];
            var22 = var8.bind(var4)(var22);
            var22 = var22.Easing;
            var21['Easing'] = var22;
            var22 = var12[var25];
            var22 = var8.bind(var4)(var22);
            var22 = var22.runOnJS;
            var21['runOnJS'] = var22;
            var21['setShowHeader'] = var33;
            var9['__closure'] = var21;
            var21 = 15278839363439.0;
            var9['__workletHash'] = var21;
            var21 = _closure1_slot18;
            var9['__initData'] = var21;
            var18 = var18.bind(var20)(var9);
            var9 = var12[var25];
            var21 = var8.bind(var4)(var9);
            var20 = var21.useDerivedValue;
            var9 = function p() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure2_slot12;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0014_ip = 61; continue _fun0014 }
case 30:
                    var4 = _closure2_slot11;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = !var3;
case 61:
                    if(!var2) { _fun0014_ip = 62; continue _fun0014 }
case 49:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var2 = var3[var2];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.runOnJS;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var4)(var1);
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
case 62:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = {};
            var22['overlayEnabled'] = var14;
            var22['isInteracting'] = var34;
            var34 = var12[var25];
            var34 = var8.bind(var4)(var34);
            var34 = var34.runOnJS;
            var22['runOnJS'] = var34;
            var22['setShowHeader'] = var33;
            var9['__closure'] = var22;
            var22 = 15328335975104.0;
            var9['__workletHash'] = var22;
            var22 = _closure1_slot20;
            var9['__initData'] = var22;
            var9 = var20.bind(var21)(var9);
            var9 = var12[var25];
            var21 = var8.bind(var4)(var9);
            var20 = var21.useAnimatedStyle;
            var9 = function ee() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = {};
                    var10 = _closure2_slot13;
                    var11 = var1;
                    var3 = copyDataProperties(var11, var10);
                    var4 = 'center';
                    var3 = 'alignItems';
                    var1[var3] = var4;
                    var3 = 'justifyContent';
                    var1[var3] = var4;
                    var3 = {};
                    var5 = _closure2_slot9;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var3['translateY'] = var4;
                    var4 = new Array(1);
                    var4[0] = var3;
                    var3 = 'transform';
                    var1[var3] = var4;
                    var3 = _closure2_slot6;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = 0;
                    if(var2) { _fun0015_ip = 63; continue _fun0015 }
case 64:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 22;
                    var2 = var9[var2];
                    var7 = undefined;
                    var6 = var8.bind(var7)(var2);
                    var5 = var6.withTiming;
                    var4 = {};
                    var2 = 7;
                    var2 = var9[var2];
                    var2 = var8.bind(var7)(var2);
                    var2 = var2.Easing;
                    var2 = var2.linear;
                    var4['easing'] = var2;
                    var2 = 75;
                    var4['duration'] = var2;
                    var2 = 1;
                    var3 = var5.bind(var6)(var2, var4);
case 63:
                    var2 = 'opacity';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var22 = {};
            var22['absoluteFillObject'] = var32;
            var22['translatePos'] = var31;
            var22['hideRelayoutSharedValue'] = var1;
            var30 = var12[var30];
            var30 = var8.bind(var4)(var30);
            var30 = var30.withTiming;
            var22['withTiming'] = var30;
            var25 = var12[var25];
            var25 = var8.bind(var4)(var25);
            var25 = var25.Easing;
            var22['Easing'] = var25;
            var9['__closure'] = var22;
            var22 = 238283449049.0;
            var9['__workletHash'] = var22;
            var22 = _closure1_slot21;
            var9['__initData'] = var22;
            var22 = var20.bind(var21)(var9);
            var20 = _closure1_slot4;
            var9 = var20.useRef;
            var9 = var9.bind(var20)(var13);
            var _closure2_slot14 = var9;
            var21 = _closure1_slot4;
            var20 = var21.useCallback;
            var9 = new Array(3);
            var9[0] = var5;
            var9[1] = var23;
            var9[2] = var1;
            var5 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = _closure2_slot8;
                    if(!var1) { _fun0016_ip = 65; continue _fun0016 }
case 24:
                    var3 = _closure2_slot7;
                    var4 = var3.current;
                    var3 = null;
                    var1 = var3 != var4;
case 65:
                    if(!var1) { _fun0016_ip = 66; continue _fun0016 }
case 46:
                    var4 = _closure2_slot6;
                    var3 = var4.set;
                    var1 = true;
                    var1 = var3.bind(var4)(var1);
                    var1 = global;
                    var4 = var1.clearTimeout;
                    var3 = _closure2_slot14;
                    var3 = var3.current;
                    var5 = undefined;
                    var3 = var4.bind(var5)(var3);
                    var2 = _closure2_slot14;
                    var4 = var1.setTimeout;
                    var3 = function() {
                        var3 = _closure2_slot6;
                        var2 = var3.set;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var1 = 250;
                    var1 = var4.bind(var5)(var3, var1);
                    var2['current'] = var1;
case 66:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var20.bind(var21)(var5, var9);
            var _closure2_slot15 = var5;
            var21 = _closure1_slot4;
            var20 = var21.useCallback;
            var9 = new Array(1);
            var9[0] = var1;
            var1 = function() {
                var3 = _closure2_slot6;
                var2 = var3.set;
                var1 = false;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = var20.bind(var21)(var1, var9);
            var25 = _closure1_slot4;
            var21 = var25.useEffect;
            var20 = new Array(1);
            var20[0] = var5;
            var9 = function() {
                var3 = _closure1_slot7;
                var2 = var3.subscribe;
                var1 = function() {
                    var2 = _closure2_slot15;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var21.bind(var25)(var9, var20);
            var21 = _closure1_slot4;
            var20 = var21.useCallback;
            var9 = new Array(1);
            var9[0] = var5;
            var5 = function(arg1, arg2) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.orientation;
                    var1 = arg2;
                    var1 = var1.orientation;
                    if(!(var2 !== var1)) { _fun0017_ip = 61; continue _fun0017 }
case 50:
                    var2 = _closure2_slot15;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 61:
                    var2 = _closure1_slot10;
                    if(!var2) { _fun0017_ip = 67; continue _fun0017 }
case 68:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.unpauseCurrentVideoIfNeeded;
                    var1 = var1.bind(var2)();
case 67:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var20.bind(var21)(var5, var9);
            var5 = 9;
            var5 = var12[var5];
            var8 = var8.bind(var4)(var5);
            var5 = var8.useOrientationListener;
            var5 = var5.bind(var8)(var9);
            var9 = _closure1_slot4;
            var8 = var9.useEffect;
            var5 = new Array(2);
            var5[0] = var11;
            var5[1] = var10;
            var3 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0018_ip = 69; continue _fun0018 }
case 70:
                    var2 = _closure2_slot1;
                    if(!(var3 != var2)) { _fun0018_ip = 69; continue _fun0018 }
case 71:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 69:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var9)(var3, var5);
            var8 = _closure1_slot9;
            var5 = _closure1_slot5;
            var3 = {};
            var9 = _closure1_slot6;
            var9 = var9.absoluteFill;
            var3['style'] = var9;
            var3['onAccessibilityEscape'] = var15;
            var3['onLayout'] = var1;
            var11 = _closure1_slot8;
            var10 = _closure1_slot1;
            var1 = 24;
            var1 = var12[var1];
            var9 = var10.bind(var4)(var1);
            var1 = {};
            var20 = 'light-content';
            var1['barStyle'] = var20;
            var20 = !var17;
            var1['hidden'] = var20;
            var1 = var11.bind(var4)(var9, var1);
            var9 = new Array(5);
            var9[0] = var1;
            var21 = _closure1_slot8;
            var1 = 8;
            var11 = var12[var1];
            var20 = var10.bind(var4)(var11);
            var11 = {};
            var11['style'] = var24;
            var11 = var21.bind(var4)(var20, var11);
            var9[1] = var11;
            var21 = _closure1_slot8;
            var11 = var12[var1];
            var20 = var10.bind(var4)(var11);
            var11 = {};
            var11['ref'] = var23;
            var11['style'] = var22;
            var24 = _closure1_slot8;
            var23 = _closure1_slot16;
            var22 = {};
            var38 = var22;
            var37 = var16;
            var25 = copyDataProperties(var38, var37);
            var25 = 'entranceAnimationDriver';
            var22[var25] = var29;
            var25 = 'windowHeight';
            var22[var25] = var28;
            var25 = 'windowWidth';
            var22[var25] = var27;
            var25 = 'panGestureConfig';
            var22[var25] = var26;
            var22 = var24.bind(var4)(var23, var22);
            var11['children'] = var22;
            var11 = var21.bind(var4)(var20, var11);
            var9[2] = var11;
            var11 = _closure1_slot8;
            var1 = var12[var1];
            var10 = var10.bind(var4)(var1);
            var1 = {};
            var12 = new Array(2);
            var12[0] = var19;
            var12[1] = var18;
            var1['style'] = var12;
            var12 = 'none';
            if(!var17) { _fun0012_ip = 72; continue _fun0012 }
case 73:
            var12 = 'box-none';
case 72:
            var1['pointerEvents'] = var12;
            var12 = var16.renderOverlay;
            var13 = var13 == var12;
            var12 = undefined;
            if(var13) { _fun0012_ip = 74; continue _fun0012 }
case 75:
            var13 = var16.renderOverlay;
            var12 = var13.bind(var16)(var15, var14);
case 74:
            var1['children'] = var12;
            var1 = var11.bind(var4)(var10, var1);
            var9[3] = var1;
            var12 = _closure1_slot8;
            var11 = _closure1_slot1;
            var1 = _closure1_slot2;
            var10 = 25;
            var10 = var1[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10 = var12.bind(var4)(var11, var10);
            var9[4] = var10;
            var3['children'] = var9;
            var5 = var8.bind(var4)(var5, var3);
            var3 = _closure1_slot8;
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
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/MediaViewer.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
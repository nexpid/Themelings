// app/modules/media_viewer/native/components/MediaViewer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function MediaViewerItemPresenter(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var23 = var2.source;
            var5 = var2.originLayout;
            var12 = var2.renderMedia;
            var10 = var2.windowWidth;
            var _closure2_slot0 = var10;
            var9 = var2.windowHeight;
            var _closure2_slot1 = var9;
            var7 = var2.sourceWidth;
            var _closure2_slot2 = var7;
            var6 = var2.sourceHeight;
            var _closure2_slot3 = var6;
            var21 = var2.entranceAnimationDriver;
            var _closure2_slot4 = var21;
            var16 = var2.index;
            var15 = var2.hasSpoiler;
            var14 = var2.visible;
            var13 = var2.panGestureConfig;
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
            var20 = var3.handleLoad;
            var18 = var3.handleError;
            var26 = var3.handleLoadStart;
            var11 = new Array(0);
            var24 = global;
            var17 = var24.Array;
            var3 = var17.isArray;
            var3 = var3.bind(var17)(var23);
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var17 = var11.push;
            var3 = {};
            var27 = var23.uri;
            var19 = var24.HermesInternal;
            var25 = var19.concat;
            var22 = '0:';
            var19 = ':';
            var19 = var25.bind(var22)(var16, var19, var27);
            var3['key'] = var19;
            var3['onLoadStart'] = var26;
            var3['onLoad'] = var20;
            var3['onError'] = var18;
            var3['source'] = var23;
            var19 = _closure1_slot12;
            var19 = var19.platformStyles;
            var3['style'] = var19;
            var3['index'] = var16;
            var3['hasSpoiler'] = var15;
            var3['visible'] = var14;
            var3['panGestureConfig'] = var13;
            var3 = var12.bind(var4)(var3);
            var3 = var17.bind(var11)(var3);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var22 = 1;
            var19 = var2 <= var22;
            if(!var19) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var17 = var11.push;
            var3 = {};
            var25 = 0;
            var27 = var23[var25];
            var30 = var27.uri;
            var27 = var24.HermesInternal;
            var29 = var27.concat;
            var28 = '0:';
            var27 = ':';
            var27 = var29.bind(var28)(var16, var27, var30);
            var3['key'] = var27;
            var3['onLoadStart'] = var26;
            var3['onLoad'] = var20;
            var3['onError'] = var18;
            var25 = var23[var25];
            var3['source'] = var25;
            var25 = _closure1_slot12;
            var25 = var25.platformStyles;
            var3['style'] = var25;
            var3['index'] = var16;
            var3['hasSpoiler'] = var15;
            var3['visible'] = var14;
            var3['panGestureConfig'] = var13;
            var3 = var12.bind(var4)(var3);
            var3 = var17.bind(var11)(var3);
case 5:
            if(!(var2 >= var22)) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var3 = var11.push;
            var2 = {};
            var17 = 0;
            var25 = var23[var17];
            var27 = var25.uri;
            var24 = var24.HermesInternal;
            var26 = var24.concat;
            var25 = '1:';
            var24 = ':';
            var24 = var26.bind(var25)(var16, var24, var27);
            var2['key'] = var24;
            var22 = var23[var22];
            var2['source'] = var22;
            var22 = _closure1_slot12;
            var22 = var22.platformStyles;
            var2['style'] = var22;
            var2['onLoad'] = var20;
            var2['onError'] = var18;
            var18 = 'auto';
            if(!var19) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var18 = 'none';
case 8:
            var2['pointerEvents'] = var18;
            var2['fadeDuration'] = var17;
            var17 = false;
            var2['fade'] = var17;
            var2['index'] = var16;
            var2['hasSpoiler'] = var15;
            var2['visible'] = var14;
            var2['panGestureConfig'] = var13;
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
            var2 = function W() {
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
            var12 = _closure1_slot13;
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
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = false;
            var1['collapsable'] = var5;
            var5 = var12.container;
            var1['style'] = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot5;
            var5 = {};
            var9 = var12.child;
            var5['style'] = var9;
            var10 = _closure1_slot9;
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
    var _closure1_slot23 = var1;
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
    var4 = {};
    var8 = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    var4['platformStyles'] = var8;
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx1(){const{entranceAnimationDriver,interpolate,Extrapolation,startHeight,sourceHeight,startWidth,sourceWidth,startTranslateY,startTranslateX,startScale}=this.__closure;const entranceValue=entranceAnimationDriver.get();const interpolateProxy=function(from,to){return interpolate(entranceValue,from,to,Extrapolation.CLAMP);};return{height:interpolateProxy([0,1],[startHeight,sourceHeight]),width:interpolateProxy([0,1],[startWidth,sourceWidth]),top:interpolateProxy([0,1],[startTranslateY,0]),left:interpolateProxy([0,1],[startTranslateX,0]),borderRadius:interpolateProxy([0,0.25],[16,0]),transform:[{scale:interpolateProxy([0,1],[startScale,1])}]};}';
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var26 = var2.entranceAnimationDriver;
            var25 = var2.index;
            var _closure2_slot0 = var25;
            var34 = var2.onLongPress;
            var _closure2_slot1 = var34;
            var24 = var2.originLayout;
            var23 = var2.panGestureConfig;
            var _closure2_slot2 = var23;
            var31 = var2.panGesture;
            var _closure2_slot3 = var31;
            var22 = var2.renderMedia;
            var21 = var2.source;
            var1 = var2.useItemVisible;
            var16 = var2.zoomed;
            var _closure2_slot4 = var16;
            var13 = var2.windowWidth;
            var _closure2_slot5 = var13;
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
            var7 = _closure1_slot4;
            var6 = var7.useRef;
            var6 = var6.bind(var7)(var13);
            var _closure2_slot7 = var6;
            var7 = _closure1_slot4;
            var6 = var7.useRef;
            var6 = var6.bind(var7)(var3);
            var _closure2_slot8 = var6;
            var7 = _closure1_slot4;
            var6 = var7.useState;
            var6 = var6.bind(var7)(var13);
            var20 = _closure1_slot3;
            var14 = 2;
            var6 = var20.bind(var5)(var6, var14);
            var7 = 0;
            var12 = var6[var7];
            var9 = 1;
            var6 = var6[var9];
            var _closure2_slot9 = var6;
            var8 = _closure1_slot4;
            var6 = var8.useState;
            var6 = var6.bind(var8)(var3);
            var6 = var20.bind(var5)(var6, var14);
            var11 = var6[var7];
            var6 = var6[var9];
            var _closure2_slot10 = var6;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var6 = 9;
            var6 = var17[var6];
            var8 = var15.bind(var5)(var6);
            var6 = var8.useOrientation;
            var28 = var6.bind(var8)();
            var10 = _closure1_slot4;
            var8 = var10.useEffect;
            var6 = new Array(2);
            var6[0] = var13;
            var6[1] = var3;
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
            var3 = var8.bind(var10)(var3, var6);
            var6 = _closure1_slot1;
            var3 = 10;
            var3 = var17[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.bind(var5)(var12, var11, var21);
            var19 = var3.width;
            var18 = var3.height;
            var8 = var3.maximumZoomScale;
            var10 = _closure1_slot4;
            var3 = var10.useRef;
            var6 = null;
            var13 = var3.bind(var10)(var6);
            var _closure2_slot11 = var13;
            var10 = _closure1_slot4;
            var3 = var10.useRef;
            var10 = var3.bind(var10)(var6);
            var _closure2_slot12 = var10;
            var29 = _closure1_slot4;
            var3 = var29.useState;
            var27 = false;
            var3 = var3.bind(var29)(var27);
            var3 = var20.bind(var5)(var3, var14);
            var14 = var3[var7];
            var3 = var3[var9];
            var _closure2_slot13 = var3;
            var29 = _closure1_slot4;
            var20 = var29.useEffect;
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
            var3 = new Array(0);
            var3 = var20.bind(var29)(var7, var3);
            var29 = _closure1_slot4;
            var20 = var29.useCallback;
            var7 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var9 = arg1;
                    var7 = arg2;
                    var2 = _closure2_slot11;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var3 = _closure2_slot12;
                    var3 = var3.current;
                    if(!(var2 !== var3)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var3 = _closure2_slot12;
                    var4 = var3.current;
                    if(!(var2 != var4)) { _fun0003_ip = 17; continue _fun0003 }
case 19:
                    var3 = var4.zoomTo;
                    var2 = {};
                    var2['x'] = var9;
                    var2['y'] = var7;
                    var2 = var3.bind(var4)(var2);
                    _fun0003_ip = 17; continue _fun0003;
case 15:
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
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = new Array(0);
            var35 = var20.bind(var29)(var7, var3);
            var _closure2_slot14 = var35;
            var29 = _closure1_slot4;
            var20 = var29.useCallback;
            var7 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = arguments[0];
                    var1 = undefined;
                    if(!(var5 === var1)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var5 = true;
case 20:
                    var3 = _closure2_slot11;
                    var3 = var3.current;
                    var4 = null;
                    if(!(var4 == var3)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var3 = _closure2_slot12;
                    var3 = var3.current;
                    if(!(var4 !== var3)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var3 = _closure2_slot12;
                    var6 = var3.current;
                    var4 = var6.unzoom;
                    var3 = {};
                    var3['animated'] = var5;
                    var3 = var4.bind(var6)(var3);
                    _fun0004_ip = 24; continue _fun0004;
case 22:
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
case 24:
                    return var1;
                }
            };
            var3 = new Array(0);
            var29 = var20.bind(var29)(var7, var3);
            var _closure2_slot15 = var29;
            var30 = _closure1_slot4;
            var20 = var30.useCallback;
            var7 = new Array(2);
            var7[0] = var16;
            var7[1] = var23;
            var3 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.zoomScale;
                    var1 = 1;
                    var4 = var2 > var1;
                    var3 = _closure2_slot4;
                    var1 = var3.set;
                    var1 = var1.bind(var3)(var4);
                    var1 = _closure2_slot2;
                    var3 = var1.isInteracting;
                    var1 = var3.set;
                    var1 = var1.bind(var3)(var4);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var5 = var3.useEntranceAnimationState;
                    var3 = var5.getState;
                    var3 = var3.bind(var5)();
                    var3 = var3.isComplete;
                    if(!var3) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                    var3 = !var4;
case 26:
                    if(!var3) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var3 = _closure2_slot13;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        var3 = _closure2_slot13;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = 500;
                    var2 = var4.bind(var1)(var3, var2);
case 28:
                    return var1;
                }
            };
            var7 = var20.bind(var30)(var3, var7);
            var3 = 12;
            var3 = var17[var3];
            var15 = var15.bind(var5)(var3);
            var3 = var15.flattenSource;
            var3 = var3.bind(var15)(var21);
            if(!(var6 == var3)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var3 = {};
case 30:
            var32 = var3.obscure;
            _closure2_slot16 = var32;
            var20 = var3.channelId;
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 13;
            var6 = var15[var6];
            var6 = var3.bind(var5)(var6);
            var30 = var6.MediaViewerSourcesStore;
            var17 = var30.useField;
            var6 = 'spoilerIndexes';
            var6 = var17.bind(var30)(var6);
            _closure2_slot17 = var6;
            var33 = _closure1_slot4;
            var30 = var33.useMemo;
            var17 = new Array(2);
            var17[0] = var25;
            var17[1] = var6;
            var6 = function() {
                var3 = _closure2_slot17;
                var2 = var3.has;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var30.bind(var33)(var6, var17);
            _closure2_slot18 = var17;
            var30 = _closure1_slot1;
            var6 = 14;
            var6 = var15[var6];
            var6 = var30.bind(var5)(var6);
            var6 = var6.bind(var5)(var20);
            _closure2_slot19 = var6;
            var33 = _closure1_slot4;
            var30 = var33.useCallback;
            var20 = new Array(4);
            var20[0] = var17;
            var20[1] = var25;
            var20[2] = var34;
            var20[3] = var6;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot18;
                    if(var2) { _fun0006_ip = 25; continue _fun0006 }
case 32:
                    var2 = _closure2_slot19;
                    if(var2) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var4 = _closure2_slot1;
                    var3 = null;
                    var2 = var3 == var4;
case 33:
                    if(var2) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0006_ip = 35; continue _fun0006;
case 25:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.removeSpoiler;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var34 = var30.bind(var33)(var6, var20);
            _closure2_slot20 = var34;
            var33 = _closure1_slot4;
            var30 = var33.useCallback;
            var20 = new Array(2);
            var20[0] = var16;
            var20[1] = var23;
            var6 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                    var1 = _closure2_slot2;
                    var3 = var1.overlayEnabled;
                    var2 = var3.set;
                    var4 = var1.overlayEnabled;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var1 = !var1;
                    var1 = var2.bind(var3)(var1);
case 37:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var30.bind(var33)(var6, var20);
            _closure2_slot21 = var6;
            var33 = _closure1_slot4;
            var30 = var33.useCallback;
            var20 = new Array(3);
            var20[0] = var29;
            var20[1] = var35;
            var20[2] = var16;
            var16 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.absoluteX;
                    var4 = var1.absoluteY;
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                    var3 = _closure2_slot14;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var5, var4);
                    _fun0008_ip = 41; continue _fun0008;
case 39:
                    var2 = _closure2_slot15;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var35 = var30.bind(var33)(var16, var20);
            _closure2_slot22 = var35;
            var33 = _closure1_slot4;
            var30 = var33.useCallback;
            var20 = new Array(1);
            var20[0] = var25;
            var16 = function() {
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
            var33 = var30.bind(var33)(var16, var20);
            _closure2_slot23 = var33;
            var30 = _closure1_slot4;
            var20 = var30.useMemo;
            var16 = new Array(7);
            var16[0] = var35;
            var16[1] = var34;
            var16[2] = var33;
            var16[3] = var17;
            var16[4] = var32;
            var16[5] = var31;
            var16[6] = var6;
            var6 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
                    if(!var10) { _fun0009_ip = 43; continue _fun0009 }
case 44:
                    var3 = 20;
case 43:
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
                    if(!var12) { _fun0009_ip = 45; continue _fun0009 }
case 46:
                    var3 = 20;
case 45:
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
                    if(!var3) { _fun0009_ip = 47; continue _fun0009 }
case 48:
                    var14 = _closure2_slot16;
                    var3 = !var14;
case 47:
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
                    if(!var8) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                    var5 = 20;
case 49:
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
            var6 = var20.bind(var30)(var6, var16);
            var20 = _closure1_slot4;
            var16 = var20.useRef;
            var16 = var16.bind(var20)(var27);
            _closure2_slot24 = var16;
            var30 = _closure1_slot4;
            var27 = var30.useEffect;
            var20 = new Array(3);
            var20[0] = var29;
            var20[1] = var12;
            var20[2] = var11;
            var16 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot24;
                    var3 = var3.current;
                    if(var3) { _fun0010_ip = 51; continue _fun0010 }
case 34:
                    var4 = _closure2_slot24;
                    var3 = true;
                    var4['current'] = var3;
                    var3 = undefined;
                    return var3;
case 51:
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
            var16 = var27.bind(var30)(var16, var20);
            var27 = _closure1_slot4;
            var20 = var27.useEffect;
            var16 = new Array(2);
            var16[0] = var29;
            var16[1] = var28;
            var4 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot24;
                    var2 = var2.current;
                    if(!var2) { _fun0011_ip = 52; continue _fun0011 }
case 53:
                    var3 = _closure2_slot15;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
case 52:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var20.bind(var27)(var4, var16);
            var20 = var1.bind(var5)(var25);
            var4 = _closure1_slot9;
            var1 = 15;
            var1 = var15[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.GestureDetector;
            var1 = {};
            var1['gesture'] = var6;
            var16 = _closure1_slot9;
            var15 = _closure1_slot23;
            var6 = {};
            var6['entranceAnimationDriver'] = var26;
            var6['index'] = var25;
            var6['originLayout'] = var24;
            var6['panGestureConfig'] = var23;
            var6['renderMedia'] = var22;
            var6['source'] = var21;
            var6['windowWidth'] = var12;
            var6['windowHeight'] = var11;
            var6['visible'] = var20;
            var6['sourceWidth'] = var19;
            var6['sourceHeight'] = var18;
            var6['maximumZoomScale'] = var8;
            var6['hasSpoiler'] = var17;
            var6 = var16.bind(var5)(var15, var6);
            var1['children'] = var6;
            var6 = var4.bind(var5)(var3, var1);
            var1 = _closure1_slot11;
            var4 = _closure1_slot9;
            if(var1) { _fun0002_ip = 54; continue _fun0002 }
case 55:
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
            if(!var14) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var13 = 'none';
case 56:
            var1['pointerEvents'] = var13;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 58; continue _fun0002;
case 54:
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 16;
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
case 58:
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx2(){const{zoomed,pinching}=this.__closure;return!zoomed.get()&&!pinching.get();}';
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx3(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}';
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var2 = arg1;
        var29 = var2.entranceAnimationDriver;
        var _closure2_slot0 = var29;
        var14 = var2.initialScrollItem;
        var8 = var2.onContentSizeChange;
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
        var9 = var2.windowWidth;
        var _closure2_slot7 = var9;
        var22 = var2.windowHeight;
        var _closure2_slot8 = var22;
        var19 = var2.ref;
        var3 = var2.zoomed;
        var _closure2_slot9 = var3;
        var6 = _closure1_slot0;
        var20 = _closure1_slot2;
        var2 = 7;
        var5 = var20[var2];
        var4 = undefined;
        var7 = var6.bind(var4)(var5);
        var5 = var7.useSharedValue;
        var13 = false;
        var5 = var5.bind(var7)(var13);
        var _closure2_slot10 = var5;
        var7 = var20[var2];
        var12 = var6.bind(var4)(var7);
        var10 = var12.useDerivedValue;
        var7 = function V() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = _closure2_slot9;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var1 = !var1;
                if(!var1) { _fun0012_ip = 59; continue _fun0012 }
case 60:
                var3 = _closure2_slot10;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1 = !var2;
case 59:
                return var1;
            }
        };
        var15 = {};
        var15['zoomed'] = var3;
        var15['pinching'] = var5;
        var7['__closure'] = var15;
        var15 = 529085989648.0;
        var7['__workletHash'] = var15;
        var15 = _closure1_slot15;
        var7['__initData'] = var15;
        var10 = var10.bind(var12)(var7);
        var _closure2_slot11 = var10;
        var16 = _closure1_slot4;
        var15 = var16.useCallback;
        var12 = new Array(1);
        var12[0] = var5;
        var7 = function(arg1) {
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
        var16 = var15.bind(var16)(var7, var12);
        var15 = _closure1_slot4;
        var12 = var15.useCallback;
        var7 = new Array(1);
        var7[0] = var5;
        var5 = function() {
            var3 = _closure2_slot10;
            var2 = var3.set;
            var1 = false;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var15 = var12.bind(var15)(var5, var7);
        var5 = 17;
        var5 = var20[var5];
        var7 = var6.bind(var4)(var5);
        var5 = var7.useMediaViewerPanGesture;
        var5 = var5.bind(var7)(var26, var10);
        var25 = var5.panGestureGenerator;
        var _closure2_slot12 = var25;
        var5 = var5.nativeGesture;
        var21 = _closure1_slot4;
        var12 = var21.useCallback;
        var7 = new Array(11);
        var7[0] = var29;
        var7[1] = var28;
        var7[2] = var27;
        var7[3] = var26;
        var7[4] = var25;
        var7[5] = var24;
        var7[6] = var17;
        var7[7] = var23;
        var7[8] = var22;
        var7[9] = var9;
        var7[10] = var3;
        var3 = function(arg1, arg2) {
            var7 = arg2;
            var4 = _closure1_slot9;
            var3 = _closure1_slot14;
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
        var12 = var12.bind(var21)(var3, var7);
        var2 = var20[var2];
        var3 = var6.bind(var4)(var2);
        var2 = var3.useAnimatedProps;
        var1 = function H() {
            var1 = {};
            var3 = _closure2_slot11;
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
        var7 = _closure1_slot16;
        var1['__initData'] = var7;
        var10 = var2.bind(var3)(var1);
        var3 = _closure1_slot9;
        var1 = 15;
        var1 = var20[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.GestureDetector;
        var1 = {};
        var1['gesture'] = var5;
        var7 = _closure1_slot9;
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
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = "function MediaViewerTsx4(){const{absoluteFillObject,windowHeight,entranceAnimationDriver,interpolate,translatePos,closePosition}=this.__closure;return{...absoluteFillObject,height:windowHeight,backgroundColor:'black',opacity:Math.min(entranceAnimationDriver.get(),interpolate(translatePos.get(),[-closePosition,0,closePosition],[0,1,0]))};}";
    var4['code'] = var8;
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = "function MediaViewerTsx5(){const{isClosing,hideRelayoutSharedValue,overlayEnabled,isInteracting,withTiming,Easing,runOnJS,setShowHeader}=this.__closure;return{opacity:isClosing.get()||hideRelayoutSharedValue.get()?0:overlayEnabled.get()&&!isInteracting.get()?withTiming(1,{easing:Easing.linear,duration:150}):withTiming(0,{easing:Easing.linear,duration:75},'respect-motion-settings',function(){runOnJS(setShowHeader)(false);})};}";
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx6(){const{runOnJS,setShowHeader}=this.__closure;runOnJS(setShowHeader)(false);}';
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx7(){const{overlayEnabled,isInteracting,runOnJS,setShowHeader}=this.__closure;if(overlayEnabled.get()&&!isInteracting.get()){runOnJS(setShowHeader)(true);}}';
    var4['code'] = var8;
    var _closure1_slot21 = var4;
    var4 = {};
    var8 = "function MediaViewerTsx8(){const{absoluteFillObject,translatePos,hideRelayoutSharedValue,withTiming,Easing}=this.__closure;return{...absoluteFillObject,alignItems:'center',justifyContent:'center',transform:[{translateY:translatePos.get()}],opacity:hideRelayoutSharedValue.get()?0:withTiming(1,{easing:Easing.linear,duration:75})};}";
    var4['code'] = var8;
    var _closure1_slot22 = var4;
    var4 = var7.memo;
    var2 = function MediaViewer(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var8 = var1.initialIndex;
            var24 = var1.onClose;
            var29 = var1.onLongPress;
            var28 = var1.originLayout;
            var25 = var1.renderMedia;
            var14 = var1.renderOverlay;
            var17 = var1.swipeVelocityThreshold;
            var1 = var1.syncer;
            var32 = var1.index;
            var21 = var1.sources;
            var12 = var1.useViewerProps;
            var9 = var1.zoomed;
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var7 = 19;
            var1 = var15[var7];
            var4 = undefined;
            var5 = var10.bind(var4)(var1);
            var1 = 20;
            var1 = var15[var1];
            var1 = var10.bind(var4)(var1);
            var6 = var1.MEDIA_VIEWER;
            var1 = new Array(1);
            var1[0] = var6;
            var1 = var5.bind(var4)(var1);
            var6 = var1.analyticsLocations;
            var11 = _closure1_slot4;
            var5 = var11.useState;
            var1 = true;
            var5 = var5.bind(var11)(var1);
            var34 = _closure1_slot3;
            var1 = 2;
            var1 = var34.bind(var4)(var5, var1);
            var18 = 0;
            var16 = var1[var18];
            var22 = 1;
            var41 = var1[var22];
            var _closure2_slot0 = var41;
            var1 = 21;
            var1 = var15[var1];
            var1 = var10.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var11 = var1.width;
            var19 = var1.height;
            var _closure2_slot1 = var19;
            var1 = 22;
            var1 = var15[var1];
            var5 = var10.bind(var4)(var1);
            var1 = {};
            var1['index'] = var32;
            var1['initialIndex'] = var8;
            var1['onClose'] = var24;
            var1['sources'] = var21;
            var1['windowHeight'] = var19;
            var1['windowWidth'] = var11;
            var43 = var5.bind(var4)(var1);
            var _closure2_slot2 = var43;
            var5 = _closure1_slot0;
            var37 = 7;
            var1 = var15[var37];
            var8 = var5.bind(var4)(var1);
            var1 = var8.useSharedValue;
            var33 = var1.bind(var8)(var18);
            var _closure2_slot3 = var33;
            var1 = var15[var37];
            var13 = var5.bind(var4)(var1);
            var8 = var13.useSharedValue;
            var1 = false;
            var1 = var8.bind(var13)(var1);
            var _closure2_slot4 = var1;
            var8 = var15[var37];
            var13 = var5.bind(var4)(var8);
            var8 = var13.useAnimatedRef;
            var23 = var8.bind(var13)();
            var _closure2_slot5 = var23;
            var8 = var21.length;
            var8 = var8 > var22;
            var _closure2_slot6 = var8;
            var12 = var12.bind(var4)();
            var26 = var12.ref;
            var30 = var12.onScroll;
            var31 = var12.onContentSizeChange;
            var20 = var12.useItemVisible;
            var27 = _closure1_slot4;
            var13 = var27.useState;
            var12 = var32.get;
            var12 = var12.bind(var32)();
            var12 = var13.bind(var27)(var12);
            var12 = var34.bind(var4)(var12, var22);
            var32 = var12[var18];
            var12 = 17;
            var12 = var15[var12];
            var13 = var5.bind(var4)(var12);
            var12 = var13.useMediaViewerPanGestureConfig;
            var27 = var12.bind(var13)(var43, var17, var24);
            var13 = var27.dismiss;
            var39 = var27.translatePos;
            var _closure2_slot7 = var39;
            var36 = var27.isClosing;
            var _closure2_slot8 = var36;
            var42 = var27.isInteracting;
            var _closure2_slot9 = var42;
            var12 = var27.overlayEnabled;
            var _closure2_slot10 = var12;
            var17 = _closure1_slot6;
            var40 = var17.absoluteFillObject;
            var _closure2_slot11 = var40;
            var17 = var15[var37];
            var35 = var5.bind(var4)(var17);
            var24 = var35.useAnimatedStyle;
            var17 = function O() {
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
                var6 = 7;
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
            var38 = {};
            var38['absoluteFillObject'] = var40;
            var38['windowHeight'] = var19;
            var38['entranceAnimationDriver'] = var33;
            var44 = var15[var37];
            var44 = var5.bind(var4)(var44);
            var44 = var44.interpolate;
            var38['interpolate'] = var44;
            var38['translatePos'] = var39;
            var38['closePosition'] = var43;
            var17['__closure'] = var38;
            var38 = 7190790597345.0;
            var17['__workletHash'] = var38;
            var38 = _closure1_slot18;
            var17['__initData'] = var38;
            var24 = var24.bind(var35)(var17);
            var38 = _closure1_slot4;
            var35 = var38.useState;
            var17 = {};
            var43 = _closure1_slot6;
            var46 = var43.absoluteFillObject;
            var47 = var17;
            var43 = copyDataProperties(var47, var46);
            var44 = 'transparent';
            var43 = 'backgroundColor';
            var17[var43] = var44;
            var17 = var35.bind(var38)(var17);
            var17 = var34.bind(var4)(var17, var22);
            var18 = var17[var18];
            var17 = var15[var37];
            var34 = var5.bind(var4)(var17);
            var22 = var34.useAnimatedStyle;
            var17 = function M() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot8;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    if(var3) { _fun0014_ip = 61; continue _fun0014 }
case 62:
                    var4 = _closure2_slot4;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = 0;
                    if(var3) { _fun0014_ip = 61; continue _fun0014 }
case 63:
                    var4 = _closure2_slot10;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0014_ip = 64; continue _fun0014 }
case 65:
                    var4 = _closure2_slot9;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0014_ip = 64; continue _fun0014 }
case 15:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 23;
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
                    _fun0014_ip = 66; continue _fun0014;
case 64:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var5 = 23;
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
                    var4 = _closure1_slot20;
                    var5['__initData'] = var4;
                    var17 = 'respect-motion-settings';
                    var20 = var8;
                    var19 = 0;
                    var18 = var6;
                    var16 = var5;
                    var3 = var20[var7](var19, var18, var17, var16, var15);
case 66:
                    var2 = var3;
case 61:
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var35 = {};
            var35['isClosing'] = var36;
            var35['hideRelayoutSharedValue'] = var1;
            var35['overlayEnabled'] = var12;
            var35['isInteracting'] = var42;
            var38 = 23;
            var36 = var15[var38];
            var36 = var5.bind(var4)(var36);
            var36 = var36.withTiming;
            var35['withTiming'] = var36;
            var36 = var15[var37];
            var36 = var5.bind(var4)(var36);
            var36 = var36.Easing;
            var35['Easing'] = var36;
            var36 = var15[var37];
            var36 = var5.bind(var4)(var36);
            var36 = var36.runOnJS;
            var35['runOnJS'] = var36;
            var35['setShowHeader'] = var41;
            var17['__closure'] = var35;
            var35 = 15278839363439.0;
            var17['__workletHash'] = var35;
            var35 = _closure1_slot19;
            var17['__initData'] = var35;
            var17 = var22.bind(var34)(var17);
            var22 = var15[var37];
            var35 = var5.bind(var4)(var22);
            var34 = var35.useDerivedValue;
            var22 = function k() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0015_ip = 67; continue _fun0015 }
case 38:
                    var4 = _closure2_slot9;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = !var3;
case 67:
                    if(!var2) { _fun0015_ip = 68; continue _fun0015 }
case 59:
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
case 68:
                    var1 = undefined;
                    return var1;
                }
            };
            var36 = {};
            var36['overlayEnabled'] = var12;
            var36['isInteracting'] = var42;
            var42 = var15[var37];
            var42 = var5.bind(var4)(var42);
            var42 = var42.runOnJS;
            var36['runOnJS'] = var42;
            var36['setShowHeader'] = var41;
            var22['__closure'] = var36;
            var36 = 15328335975104.0;
            var22['__workletHash'] = var36;
            var36 = _closure1_slot21;
            var22['__initData'] = var36;
            var22 = var34.bind(var35)(var22);
            var22 = var15[var37];
            var35 = var5.bind(var4)(var22);
            var34 = var35.useAnimatedStyle;
            var22 = function he() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
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
                    if(var2) { _fun0016_ip = 69; continue _fun0016 }
case 70:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 23;
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
case 69:
                    var2 = 'opacity';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var36 = {};
            var36['absoluteFillObject'] = var40;
            var36['translatePos'] = var39;
            var36['hideRelayoutSharedValue'] = var1;
            var38 = var15[var38];
            var38 = var5.bind(var4)(var38);
            var38 = var38.withTiming;
            var36['withTiming'] = var38;
            var37 = var15[var37];
            var37 = var5.bind(var4)(var37);
            var37 = var37.Easing;
            var36['Easing'] = var37;
            var22['__closure'] = var36;
            var36 = 238283449049.0;
            var22['__workletHash'] = var36;
            var36 = _closure1_slot22;
            var22['__initData'] = var36;
            var22 = var34.bind(var35)(var22);
            var36 = _closure1_slot4;
            var35 = var36.useRef;
            var34 = null;
            var34 = var35.bind(var36)(var34);
            var _closure2_slot12 = var34;
            var36 = _closure1_slot4;
            var35 = var36.useCallback;
            var34 = new Array(3);
            var34[0] = var8;
            var34[1] = var23;
            var34[2] = var1;
            var8 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = _closure2_slot6;
                    if(!var1) { _fun0017_ip = 71; continue _fun0017 }
case 32:
                    var3 = _closure2_slot5;
                    var4 = var3.current;
                    var3 = null;
                    var1 = var3 != var4;
case 71:
                    if(!var1) { _fun0017_ip = 72; continue _fun0017 }
case 52:
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
case 72:
                    var1 = undefined;
                    return var1;
                }
            };
            var36 = var35.bind(var36)(var8, var34);
            var _closure2_slot13 = var36;
            var35 = _closure1_slot4;
            var34 = var35.useCallback;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = false;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = var34.bind(var35)(var1, var8);
            var37 = _closure1_slot4;
            var35 = var37.useEffect;
            var34 = new Array(1);
            var34[0] = var36;
            var8 = function() {
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
            var8 = var35.bind(var37)(var8, var34);
            var35 = _closure1_slot4;
            var34 = var35.useCallback;
            var8 = new Array(1);
            var8[0] = var36;
            var3 = function(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.orientation;
                    var1 = arg2;
                    var1 = var1.orientation;
                    if(!(var2 !== var1)) { _fun0018_ip = 67; continue _fun0018 }
case 60:
                    var2 = _closure2_slot13;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 67:
                    var2 = _closure1_slot11;
                    if(!var2) { _fun0018_ip = 73; continue _fun0018 }
case 74:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 24;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.unpauseCurrentVideoIfNeeded;
                    var1 = var1.bind(var2)();
case 73:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var34.bind(var35)(var3, var8);
            var3 = 9;
            var3 = var15[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useOrientationListener;
            var3 = var3.bind(var5)(var8);
            var8 = _closure1_slot9;
            var5 = _closure1_slot17;
            var3 = {};
            var3['entranceAnimationDriver'] = var33;
            var3['initialScrollItem'] = var32;
            var3['onContentSizeChange'] = var31;
            var3['onScroll'] = var30;
            var3['onLongPress'] = var29;
            var3['originLayout'] = var28;
            var3['panGestureConfig'] = var27;
            var3['ref'] = var26;
            var3['renderMedia'] = var25;
            var3['sources'] = var21;
            var3['useItemVisible'] = var20;
            var3['windowHeight'] = var19;
            var3['windowWidth'] = var11;
            var3['zoomed'] = var9;
            var21 = var8.bind(var4)(var5, var3);
            var8 = _closure1_slot10;
            var5 = _closure1_slot5;
            var3 = {};
            var9 = _closure1_slot6;
            var9 = var9.absoluteFill;
            var3['style'] = var9;
            var3['onAccessibilityEscape'] = var13;
            var3['onLayout'] = var1;
            var11 = _closure1_slot9;
            var1 = 25;
            var1 = var15[var1];
            var9 = var10.bind(var4)(var1);
            var1 = {};
            var19 = 'light-content';
            var1['barStyle'] = var19;
            var19 = !var16;
            var1['hidden'] = var19;
            var1 = var11.bind(var4)(var9, var1);
            var9 = new Array(5);
            var9[0] = var1;
            var20 = _closure1_slot9;
            var1 = 8;
            var11 = var15[var1];
            var19 = var10.bind(var4)(var11);
            var11 = {};
            var11['style'] = var24;
            var11 = var20.bind(var4)(var19, var11);
            var9[1] = var11;
            var20 = _closure1_slot9;
            var11 = var15[var1];
            var19 = var10.bind(var4)(var11);
            var11 = {};
            var11['ref'] = var23;
            var11['style'] = var22;
            var11['children'] = var21;
            var11 = var20.bind(var4)(var19, var11);
            var9[2] = var11;
            var11 = _closure1_slot9;
            var1 = var15[var1];
            var10 = var10.bind(var4)(var1);
            var1 = {};
            var15 = new Array(2);
            var15[0] = var18;
            var15[1] = var17;
            var1['style'] = var15;
            var15 = 'none';
            if(!var16) { _fun0013_ip = 75; continue _fun0013 }
case 76:
            var15 = 'box-none';
case 75:
            var1['pointerEvents'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var1['children'] = var12;
            var1 = var11.bind(var4)(var10, var1);
            var9[3] = var1;
            var12 = _closure1_slot9;
            var11 = _closure1_slot1;
            var1 = _closure1_slot2;
            var10 = 26;
            var10 = var1[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10 = var12.bind(var4)(var11, var10);
            var9[4] = var10;
            var3['children'] = var9;
            var5 = var8.bind(var4)(var5, var3);
            var3 = _closure1_slot9;
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
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/MediaViewer.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
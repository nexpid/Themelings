// app/modules/media_viewer/native/components/MediaViewer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function stateForScreen(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.flattenSource;
            var4 = arg3;
            var1 = true;
            var4 = var5.bind(var6)(var4, var1);
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 374; continue _fun0001 }
 57:
            var5 = var3 / var2;
            var6 = var4.width;
            var1 = var4.height;
            var1 = var6 / var1;
            var6 = var4.width;
            if(!(var6 < var3)) { _fun0001_ip = 96; continue _fun0001 }
 84:
            var6 = var4.height;
            if(!(!(var6 < var2))) { _fun0001_ip = 264; continue _fun0001 }
 96:
            if(!(!(var1 > var5))) { _fun0001_ip = 182; continue _fun0001 }
 100:
            var6 = var4.height;
            var11 = var2 / var6;
            var6 = {};
            var8 = 1;
            var7 = var8 / var11;
            var7 = var7 + var8;
            var6['maximumZoomScale'] = var7;
            var7 = global;
            var10 = var7.Math;
            var9 = var10.floor;
            var8 = var4.width;
            var8 = var8 * var11;
            var8 = var9.bind(var10)(var8);
            var6['width'] = var8;
            var8 = var7.Math;
            var7 = var8.floor;
            var7 = var7.bind(var8)(var2);
            var6['height'] = var7;
            return var6;
 182:
            var6 = var4.width;
            var10 = var3 / var6;
            var6 = {};
            var8 = 1;
            var7 = var8 / var10;
            var7 = var7 + var8;
            var6['maximumZoomScale'] = var7;
            var7 = global;
            var9 = var7.Math;
            var8 = var9.floor;
            var8 = var8.bind(var9)(var3);
            var6['width'] = var8;
            var9 = var7.Math;
            var8 = var9.floor;
            var7 = var4.height;
            var7 = var7 * var10;
            var7 = var8.bind(var9)(var7);
            var6['height'] = var7;
            return var6;
 264:
            if(!(!(var1 > var5))) { _fun0001_ip = 279; continue _fun0001 }
 268:
            var1 = var4.height;
            var5 = var1 / var2;
            _fun0001_ip = 288; continue _fun0001;
 279:
            var1 = var4.width;
            var5 = var1 / var3;
 288:
            var1 = 1.01;
            var7 = var5 / var1;
            var1 = global;
            var6 = var1.Math;
            var5 = var6.min;
            var1 = 0.5;
            var7 = var5.bind(var6)(var1, var7);
            var1 = {};
            var6 = 1;
            var8 = 0;
            var5 = var6;
            if(!(var8 !== var7)) { _fun0001_ip = 349; continue _fun0001 }
 345:
            var5 = var6 / var7;
 349:
            var1['maximumZoomScale'] = var5;
            var5 = var4.width;
            var1['width'] = var5;
            var4 = var4.height;
            var1['height'] = var4;
            return var1;
 374:
            var1 = {};
            var4 = 1;
            var1['maximumZoomScale'] = var4;
            var1['width'] = var3;
            var1['height'] = var2;
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function AnimatedMediaPresenter(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
            var16 = 0;
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
            var2 = 12;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useEntranceAnimation;
            var3 = var2.bind(var3)(var21);
            var2 = var3.loads;
            var17 = var3.handleLoad;
            var15 = var3.handleError;
            var24 = var3.handleLoadStart;
            var11 = new Array(0);
            var19 = global;
            var13 = var19.Array;
            var3 = var13.isArray;
            var3 = var3.bind(var13)(var18);
            if(var3) { _fun0002_ip = 351; continue _fun0002 }
 217:
            var13 = var11.push;
            var3 = {};
            var31 = var3;
            var30 = var20;
            var14 = copyDataProperties(var31, var30);
            var26 = var20.index;
            var25 = var18.uri;
            var14 = var19.HermesInternal;
            var23 = var14.concat;
            var22 = '0:';
            var14 = ':';
            var22 = var23.bind(var22)(var26, var14, var25);
            var14 = 'key';
            var3[var14] = var22;
            var14 = 'onLoadStart';
            var3[var14] = var24;
            var14 = 'onLoad';
            var3[var14] = var17;
            var14 = 'onError';
            var3[var14] = var15;
            var14 = 'source';
            var3[var14] = var18;
            var14 = _closure1_slot13;
            var22 = var14.platformStyles;
            var14 = 'style';
            var3[var14] = var22;
            var3 = var12.bind(var4)(var3);
            var3 = var13.bind(var11)(var3);
            _fun0002_ip = 676; continue _fun0002;
 351:
            var14 = 1;
            var13 = var2 <= var14;
            if(!var13) { _fun0002_ip = 501; continue _fun0002 }
 364:
            var22 = var11.push;
            var3 = {};
            var31 = var3;
            var30 = var20;
            var23 = copyDataProperties(var31, var30);
            var28 = var20.index;
            var23 = var18[var16];
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
            var3[var23] = var15;
            var24 = var18[var16];
            var23 = 'source';
            var3[var23] = var24;
            var23 = _closure1_slot13;
            var24 = var23.platformStyles;
            var23 = 'style';
            var3[var23] = var24;
            var3 = var12.bind(var4)(var3);
            var3 = var22.bind(var11)(var3);
 501:
            if(!(var2 >= var14)) { _fun0002_ip = 676; continue _fun0002 }
 508:
            var3 = var11.push;
            var2 = {};
            var31 = var2;
            var30 = var20;
            var22 = copyDataProperties(var31, var30);
            var24 = var20.index;
            var20 = var18[var16];
            var23 = var20.uri;
            var19 = var19.HermesInternal;
            var22 = var19.concat;
            var20 = '1:';
            var19 = ':';
            var20 = var22.bind(var20)(var24, var19, var23);
            var19 = 'key';
            var2[var19] = var20;
            var18 = var18[var14];
            var14 = 'source';
            var2[var14] = var18;
            var14 = _closure1_slot13;
            var18 = var14.platformStyles;
            var14 = 'style';
            var2[var14] = var18;
            var14 = 'onLoad';
            var2[var14] = var17;
            var14 = 'onError';
            var2[var14] = var15;
            var14 = 'auto';
            if(!var13) { _fun0002_ip = 637; continue _fun0002 }
 633:
            var14 = 'none';
 637:
            var13 = 'pointerEvents';
            var2[var13] = var14;
            var13 = 'fadeDuration';
            var2[var13] = var16;
            var14 = false;
            var13 = 'fade';
            var2[var13] = var14;
            var2 = var12.bind(var4)(var2);
            var2 = var3.bind(var11)(var2);
 676:
            var2 = var7 / var6;
            var12 = var5.width;
            var3 = var5.height;
            var12 = var12 / var3;
            var3 = _closure1_slot12;
            var16 = 0;
            if(!var3) { _fun0002_ip = 729; continue _fun0002 }
 703:
            var13 = var5.height;
            var3 = 2;
            var13 = var13 / var3;
            var3 = 5.75;
            var16 = var13 - var3;
 729:
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
            var3 = var3 / var20;
            var13 = var9 - var6;
            var14 = var13 / var20;
            var13 = var5.y;
            var3 = var3 - var16;
            var3 = var13 - var3;
            var16 = var3 - var14;
            _closure2_slot7 = var16;
            _closure2_slot8 = var7;
            _closure2_slot9 = var6;
            var13 = var5.resizeMode;
            var3 = 'cover';
            if(!(var3 !== var13)) { _fun0002_ip = 869; continue _fun0002 }
 834:
            var3 = 1;
            if(!(var2 > var12)) { _fun0002_ip = 844; continue _fun0002 }
 841:
            var3 = var2;
 844:
            var2 = var5.width;
            var2 = var2 / var7;
            var13 = var2 * var3;
            _closure2_slot5 = var13;
            var17 = var7;
            var18 = var6;
            _fun0002_ip = 943; continue _fun0002;
 869:
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
 943:
            var20 = _closure1_slot0;
            var14 = _closure1_slot2;
            var19 = 7;
            var2 = var14[var19];
            var5 = var20.bind(var4)(var2);
            var3 = var5.useAnimatedStyle;
            var2 = function N() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var _closure3_slot0 = var2;
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
                    var5 = _closure1_slot12;
                    var2 = 1;
                    var3 = var2;
                    if(!var5) { _fun0003_ip = 75; continue _fun0003 }
 47:
                    var8 = undefined;
                    var7 = [0.05, 0.1];
                    var5 = [0, 1];
                    var3 = var6.bind(var8)(var7, var5);
 75:
                    var1['opacity'] = var3;
                    var3 = _closure2_slot9;
                    var7 = new Array(2);
                    var7[0] = var3;
                    var3 = _closure2_slot3;
                    var7[1] = var3;
                    var5 = undefined;
                    var3 = [0, 1];
                    var3 = var6.bind(var5)(var3, var7);
                    var1['height'] = var3;
                    var3 = _closure2_slot8;
                    var7 = new Array(2);
                    var7[0] = var3;
                    var3 = _closure2_slot2;
                    var7[1] = var3;
                    var3 = [0, 1];
                    var3 = var6.bind(var5)(var3, var7);
                    var1['width'] = var3;
                    var3 = _closure2_slot7;
                    var8 = new Array(2);
                    var8[0] = var3;
                    var3 = 0;
                    var8[1] = var3;
                    var7 = [0, 1];
                    var7 = var6.bind(var5)(var7, var8);
                    var1['top'] = var7;
                    var8 = _closure2_slot6;
                    var7 = new Array(2);
                    var7[0] = var8;
                    var7[1] = var3;
                    var3 = [0, 1];
                    var3 = var6.bind(var5)(var3, var7);
                    var1['left'] = var3;
                    var7 = [0, 0.25];
                    var3 = [16, 0];
                    var3 = var6.bind(var5)(var7, var3);
                    var1['borderRadius'] = var3;
                    var3 = {};
                    var7 = _closure2_slot5;
                    var4 = new Array(2);
                    var4[0] = var7;
                    var4[1] = var2;
                    var2 = [0, 1];
                    var2 = var6.bind(var5)(var2, var4);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
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
            var19 = _closure1_slot12;
            var12['IS_ANDROID'] = var19;
            var12['startHeight'] = var18;
            var12['sourceHeight'] = var6;
            var12['startWidth'] = var17;
            var12['sourceWidth'] = var7;
            var12['startTranslateY'] = var16;
            var12['startTranslateX'] = var15;
            var12['startScale'] = var13;
            var2['__closure'] = var12;
            var12 = 8129401104668.0;
            var2['__workletHash'] = var12;
            var12 = _closure1_slot21;
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
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = false;
            var1['collapsable'] = var5;
            var5 = var12.container;
            var1['style'] = var5;
            var7 = _closure1_slot10;
            var6 = _closure1_slot5;
            var5 = {};
            var9 = var12.child;
            var5['style'] = var9;
            var10 = _closure1_slot10;
            var9 = _closure1_slot1;
            var8 = 13;
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
    var _closure1_slot34 = var1;
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
    var9 = var4.ScrollView;
    var _closure1_slot7 = var9;
    var4 = var4.PixelRatio;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.isAndroid;
    var4 = var4.bind(var8)();
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    var4['platformStyles'] = var8;
    var _closure1_slot13 = var4;
    var4 = {'damping': 15, 'mass': 1, 'stiffness': 250, 'overshootClamping': true, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001};
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = "function MediaViewerTsx1(){const{isClosing,velocity,closePosition,translatePos,withSpring,SPRING_CONFIG,runOnJS,handleClose}=this.__closure;isClosing.set(true);const toValue=velocity.get()<0?-closePosition:closePosition;translatePos.set(withSpring(toValue,{velocity:velocity.get(),...SPRING_CONFIG},'respect-motion-settings',function(){runOnJS(handleClose)();}));}";
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx2(){const{runOnJS,handleClose}=this.__closure;runOnJS(handleClose)();}';
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx3(){const{isInteracting,velocity,swipeVelocityThreshold,dismiss,translatePos,withSpring,SPRING_CONFIG}=this.__closure;isInteracting.set(false);const willClose=Math.abs(velocity.get())>swipeVelocityThreshold;if(willClose){dismiss();}else if(translatePos.get()!==0){translatePos.set(withSpring(0,{velocity:velocity.get(),...SPRING_CONFIG}));}}';
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx4(_,manager){const{enabled}=this.__closure;if(!enabled.get()){manager.fail();}}';
    var4['code'] = var8;
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx5({velocityY:velocityY,translationY:translationY}){const{translatePos,start,velocity}=this.__closure;translatePos.set(translationY+start.get().y);velocity.set(velocityY);}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx6(){const{start,translatePos,isInteracting}=this.__closure;start.set({x:0,y:translatePos.get()});isInteracting.set(true);}';
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx7(){const{entranceAnimationDriver,interpolate,Extrapolation,IS_ANDROID,startHeight,sourceHeight,startWidth,sourceWidth,startTranslateY,startTranslateX,startScale}=this.__closure;const entranceValue=entranceAnimationDriver.get();const interpolateProxy=function(from,to){return interpolate(entranceValue,from,to,Extrapolation.CLAMP);};return{opacity:IS_ANDROID?interpolateProxy([0.05,0.1],[0,1]):1,height:interpolateProxy([0,1],[startHeight,sourceHeight]),width:interpolateProxy([0,1],[startWidth,sourceWidth]),top:interpolateProxy([0,1],[startTranslateY,0]),left:interpolateProxy([0,1],[startTranslateX,0]),borderRadius:interpolateProxy([0,0.25],[16,0]),transform:[{scale:interpolateProxy([0,1],[startScale,1])}]};}';
    var4['code'] = var8;
    var _closure1_slot21 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx8(){const{overlayEnabled}=this.__closure;return overlayEnabled.get();}';
    var4['code'] = var8;
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx9(overlayEnabled){const{autoHideEnabled,runOnJS,queueHideOverlay}=this.__closure;if(autoHideEnabled&&overlayEnabled){runOnJS(queueHideOverlay)();}}';
    var4['code'] = var8;
    var _closure1_slot23 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var17 = arg1;
            var18 = var17.source;
            var4 = var17.index;
            var _closure2_slot0 = var4;
            var12 = var17.windowWidth;
            var11 = var17.windowHeight;
            var22 = var17.panGestureConfig;
            var _closure2_slot1 = var22;
            var26 = var17.panGesture;
            var _closure2_slot2 = var26;
            var32 = var17.onLongPress;
            var _closure2_slot3 = var32;
            var21 = var17.zoomed;
            var _closure2_slot4 = var21;
            var1 = var17.useItemVisible;
            var3 = _closure1_slot33;
            var5 = undefined;
            var3 = var3.bind(var5)(var12, var11, var18);
            var20 = var3.width;
            var19 = var3.height;
            var8 = var3.maximumZoomScale;
            var7 = _closure1_slot4;
            var3 = var7.useRef;
            var6 = null;
            var13 = var3.bind(var7)(var6);
            var _closure2_slot5 = var13;
            var7 = _closure1_slot4;
            var3 = var7.useRef;
            var10 = var3.bind(var7)(var6);
            var _closure2_slot6 = var10;
            var7 = _closure1_slot4;
            var3 = var7.useState;
            var23 = false;
            var9 = var3.bind(var7)(var23);
            var7 = _closure1_slot3;
            var3 = 2;
            var3 = var7.bind(var5)(var9, var3);
            var7 = 0;
            var14 = var3[var7];
            var9 = 1;
            var3 = var3[var9];
            var _closure2_slot7 = var3;
            var24 = _closure1_slot4;
            var15 = var24.useEffect;
            var7 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dismissKeyboard;
                var2 = var2.bind(var3)();
                return var1;
            };
            var3 = new Array(0);
            var3 = var15.bind(var24)(var7, var3);
            var24 = _closure1_slot4;
            var15 = var24.useCallback;
            var7 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var9 = arg1;
                    var7 = arg2;
                    var2 = _closure2_slot5;
                    var2 = var2.current;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0005_ip = 132; continue _fun0005 }
 24:
                    var2 = _closure2_slot6;
                    var2 = var2.current;
                    if(!(var3 !== var2)) { _fun0005_ip = 259; continue _fun0005 }
 40:
                    var4 = _closure1_slot8;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var10 = var9 * var3;
                    var8 = var7 * var3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 16;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.zoomTo;
                    var2 = _closure2_slot6;
                    var4 = var2.current;
                    var2 = 2;
                    var3 = var10 / var2;
                    var3 = var3 - var10;
                    var2 = var8 / var2;
                    var2 = var2 - var8;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    _fun0005_ip = 259; continue _fun0005;
 132:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getWindowDimensions;
                    var2 = var2.bind(var3)();
                    var3 = var2.width;
                    var6 = 2;
                    var5 = var3 / var6;
                    var2 = var2.height;
                    var4 = var2 / var6;
                    var1 = _closure2_slot5;
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
 259:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = new Array(0);
            var30 = var15.bind(var24)(var7, var3);
            var _closure2_slot8 = var30;
            var24 = _closure1_slot4;
            var15 = var24.useCallback;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var5 = arguments[0];
                    var1 = undefined;
                    if(!(var5 === var1)) { _fun0006_ip = 11; continue _fun0006 }
 9:
                    var5 = true;
 11:
                    var3 = _closure2_slot5;
                    var3 = var3.current;
                    var4 = null;
                    if(!(var4 == var3)) { _fun0006_ip = 90; continue _fun0006 }
 29:
                    var3 = _closure2_slot6;
                    var3 = var3.current;
                    if(!(var4 !== var3)) { _fun0006_ip = 186; continue _fun0006 }
 45:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 16;
                    var3 = var6[var3];
                    var6 = var4.bind(var1)(var3);
                    var4 = var6.unzoom;
                    var3 = _closure2_slot6;
                    var3 = var3.current;
                    var3 = var4.bind(var6)(var3);
                    _fun0006_ip = 186; continue _fun0006;
 90:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 15;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getWindowDimensions;
                    var3 = var3.bind(var4)();
                    var7 = var3.width;
                    var6 = var3.height;
                    var2 = _closure2_slot5;
                    var3 = var2.current;
                    var2 = var3.getScrollResponder;
                    var4 = var2.bind(var3)();
                    var3 = var4.scrollResponderZoomTo;
                    var2 = {'x': 0, 'y': 0};
                    var2['width'] = var7;
                    var2['height'] = var6;
                    var2['animated'] = var5;
                    var2 = var3.bind(var4)(var2);
 186:
                    return var1;
                }
            };
            var3 = new Array(0);
            var25 = var15.bind(var24)(var7, var3);
            var _closure2_slot9 = var25;
            var24 = _closure1_slot4;
            var15 = var24.useCallback;
            var7 = new Array(2);
            var7[0] = var21;
            var7[1] = var22;
            var3 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.zoomScale;
                    var1 = 1;
                    var4 = var2 > var1;
                    var3 = _closure2_slot4;
                    var1 = var3.set;
                    var1 = var1.bind(var3)(var4);
                    var1 = _closure2_slot1;
                    var3 = var1.isInteracting;
                    var1 = var3.set;
                    var1 = var1.bind(var3)(var4);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var5 = var3.useEntranceAnimationState;
                    var3 = var5.getState;
                    var3 = var3.bind(var5)();
                    var3 = var3.isComplete;
                    if(!var3) { _fun0007_ip = 112; continue _fun0007 }
 109:
                    var3 = !var4;
 112:
                    if(!var3) { _fun0007_ip = 155; continue _fun0007 }
 115:
                    var3 = _closure2_slot7;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        var3 = _closure2_slot7;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = 500;
                    var2 = var4.bind(var1)(var3, var2);
 155:
                    return var1;
                }
            };
            var7 = var15.bind(var24)(var3, var7);
            var15 = _closure1_slot0;
            var24 = _closure1_slot2;
            var3 = 6;
            var3 = var24[var3];
            var15 = var15.bind(var5)(var3);
            var3 = var15.flattenSource;
            var3 = var3.bind(var15)(var18);
            if(!(var6 == var3)) { _fun0004_ip = 352; continue _fun0004 }
 350:
            var3 = {};
 352:
            var27 = var3.obscure;
            var _closure2_slot10 = var27;
            var24 = var3.channelId;
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 17;
            var6 = var15[var6];
            var6 = var3.bind(var5)(var6);
            var28 = var6.MediaViewerSourcesStore;
            var18 = var28.useField;
            var6 = 'spoilerIndexes';
            var6 = var18.bind(var28)(var6);
            var _closure2_slot11 = var6;
            var29 = _closure1_slot4;
            var28 = var29.useMemo;
            var18 = new Array(2);
            var18[0] = var4;
            var18[1] = var6;
            var6 = function() {
                var3 = _closure2_slot11;
                var2 = var3.has;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var28.bind(var29)(var6, var18);
            var _closure2_slot12 = var18;
            var28 = _closure1_slot1;
            var6 = 18;
            var6 = var15[var6];
            var6 = var28.bind(var5)(var6);
            var6 = var6.bind(var5)(var24);
            var _closure2_slot13 = var6;
            var31 = _closure1_slot4;
            var29 = var31.useCallback;
            var24 = new Array(4);
            var24[0] = var18;
            var24[1] = var4;
            var24[2] = var32;
            var24[3] = var6;
            var6 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = _closure2_slot12;
                    if(var2) { _fun0008_ip = 42; continue _fun0008 }
 10:
                    var2 = _closure2_slot13;
                    if(var2) { _fun0008_ip = 27; continue _fun0008 }
 17:
                    var4 = _closure2_slot3;
                    var3 = null;
                    var2 = var3 == var4;
 27:
                    if(var2) { _fun0008_ip = 82; continue _fun0008 }
 30:
                    var3 = _closure2_slot3;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0008_ip = 82; continue _fun0008;
 42:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 17;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.removeSpoiler;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
 82:
                    var1 = undefined;
                    return var1;
                }
            };
            var29 = var29.bind(var31)(var6, var24);
            var _closure2_slot14 = var29;
            var31 = _closure1_slot4;
            var24 = var31.useRef;
            var6 = -1;
            var6 = var24.bind(var31)(var6);
            var _closure2_slot15 = var6;
            var32 = _closure1_slot4;
            var31 = var32.useCallback;
            var24 = new Array(2);
            var24[0] = var21;
            var24[1] = var22;
            var6 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0009_ip = 57; continue _fun0009 }
 19:
                    var1 = _closure2_slot1;
                    var3 = var1.overlayEnabled;
                    var2 = var3.set;
                    var4 = var1.overlayEnabled;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var1 = !var1;
                    var1 = var2.bind(var3)(var1);
 57:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var31.bind(var32)(var6, var24);
            var _closure2_slot16 = var6;
            var24 = 19;
            var24 = var15[var24];
            var32 = var28.bind(var5)(var24);
            var31 = var32.useExperiment;
            var28 = {};
            var24 = 'MediaViewerItem';
            var28['location'] = var24;
            var24 = {};
            var24['autoTrackExposure'] = var23;
            var24 = var31.bind(var32)(var28, var24);
            var35 = var24.enabled;
            var _closure2_slot17 = var35;
            var24 = var24.timeout;
            var _closure2_slot18 = var24;
            var32 = _closure1_slot4;
            var31 = var32.useCallback;
            var28 = new Array(2);
            var28[0] = var22;
            var28[1] = var24;
            var24 = function() {
                var4 = global;
                var5 = var4.clearTimeout;
                var1 = _closure2_slot15;
                var3 = var1.current;
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var3 = _closure2_slot15;
                var5 = var4.setTimeout;
                var4 = _closure2_slot18;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackExposure;
                    var2 = {};
                    var5 = 'MediaViewerItem';
                    var2['location'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot1;
                    var4 = var2.overlayEnabled;
                    var3 = var4.set;
                    var2 = false;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var5.bind(var1)(var2, var4);
                var3['current'] = var2;
                return var1;
            };
            var33 = var31.bind(var32)(var24, var28);
            var _closure2_slot19 = var33;
            var32 = var22.overlayEnabled;
            var _closure2_slot20 = var32;
            var34 = 7;
            var22 = var15[var34];
            var31 = var3.bind(var5)(var22);
            var28 = var31.useAnimatedReaction;
            var24 = function A() {
                var2 = _closure2_slot20;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var22 = {};
            var22['overlayEnabled'] = var32;
            var24['__closure'] = var22;
            var22 = 8243836315055.0;
            var24['__workletHash'] = var22;
            var22 = _closure1_slot22;
            var24['__initData'] = var22;
            var22 = function G(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure2_slot17;
                    if(!var2) { _fun0010_ip = 16; continue _fun0010 }
 13:
                    var2 = var3;
 16:
                    if(!var2) { _fun0010_ip = 62; continue _fun0010 }
 19:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot19;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
 62:
                    var1 = undefined;
                    return var1;
                }
            };
            var32 = {};
            var32['autoHideEnabled'] = var35;
            var34 = var15[var34];
            var34 = var3.bind(var5)(var34);
            var34 = var34.runOnJS;
            var32['runOnJS'] = var34;
            var32['queueHideOverlay'] = var33;
            var22['__closure'] = var32;
            var32 = 16867283648917.0;
            var22['__workletHash'] = var32;
            var32 = _closure1_slot23;
            var22['__initData'] = var32;
            var22 = var28.bind(var31)(var24, var22);
            var31 = _closure1_slot4;
            var28 = var31.useEffect;
            var24 = function() {
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var1 = _closure2_slot15;
                    var2 = var1.current;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var22 = new Array(0);
            var22 = var28.bind(var31)(var24, var22);
            var28 = _closure1_slot4;
            var24 = var28.useCallback;
            var22 = new Array(3);
            var22[0] = var25;
            var22[1] = var30;
            var22[2] = var21;
            var21 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.absoluteX;
                    var4 = var1.absoluteY;
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0011_ip = 64; continue _fun0011 }
 34:
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0011_ip = 77; continue _fun0011 }
 50:
                    var3 = _closure2_slot8;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var5, var4);
                    _fun0011_ip = 77; continue _fun0011;
 64:
                    var3 = _closure2_slot9;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
 77:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = var24.bind(var28)(var21, var22);
            var _closure2_slot21 = var30;
            var28 = _closure1_slot4;
            var24 = var28.useCallback;
            var22 = new Array(1);
            var22[0] = var4;
            var21 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.removeSpoiler;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var28 = var24.bind(var28)(var21, var22);
            var _closure2_slot22 = var28;
            var24 = _closure1_slot4;
            var22 = var24.useMemo;
            var21 = new Array(7);
            var21[0] = var30;
            var21[1] = var29;
            var21[2] = var28;
            var21[3] = var18;
            var21[4] = var27;
            var21[5] = var26;
            var21[6] = var6;
            var6 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
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
                    var4 = _closure2_slot12;
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
                    if(!var10) { _fun0012_ip = 126; continue _fun0012 }
 123:
                    var3 = 20;
 126:
                    var8 = var4.bind(var8)(var3);
                    var4 = var8.onStart;
                    var3 = _closure2_slot21;
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
                    var4 = _closure2_slot12;
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
                    if(!var12) { _fun0012_ip = 253; continue _fun0012 }
 250:
                    var3 = 20;
 253:
                    var10 = var4.bind(var10)(var3);
                    var4 = var10.onStart;
                    var3 = _closure2_slot16;
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
                    var3 = _closure2_slot12;
                    if(!var3) { _fun0012_ip = 335; continue _fun0012 }
 328:
                    var14 = _closure2_slot10;
                    var3 = !var14;
 335:
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
                    if(!var8) { _fun0012_ip = 389; continue _fun0012 }
 386:
                    var5 = 20;
 389:
                    var5 = var3.bind(var4)(var5);
                    var4 = var5.onStart;
                    var3 = _closure2_slot22;
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
                    var4 = _closure2_slot12;
                    var4 = !var4;
                    var9 = var8.bind(var9)(var4);
                    var8 = var9.onStart;
                    var4 = _closure2_slot14;
                    var4 = var8.bind(var9)(var4);
                    var2 = var2[var7];
                    var2 = var3.bind(var6)(var2);
                    var3 = var2.Gesture;
                    var2 = var3.Simultaneous;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var5, var4, var1);
                    return var1;
                }
            };
            var6 = var22.bind(var24)(var6, var21);
            var22 = _closure1_slot4;
            var21 = var22.useRef;
            var21 = var21.bind(var22)(var23);
            var _closure2_slot23 = var21;
            var24 = _closure1_slot4;
            var23 = var24.useEffect;
            var22 = new Array(3);
            var22[0] = var25;
            var22[1] = var12;
            var22[2] = var11;
            var21 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var3 = _closure2_slot23;
                    var3 = var3.current;
                    if(var3) { _fun0013_ip = 33; continue _fun0013 }
 17:
                    var4 = _closure2_slot23;
                    var3 = true;
                    var4['current'] = var3;
                    var3 = undefined;
                    return var3;
 33:
                    var3 = global;
                    var5 = var3.setTimeout;
                    var4 = _closure2_slot9;
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
            var21 = var23.bind(var24)(var21, var22);
            var21 = 20;
            var21 = var15[var21];
            var22 = var3.bind(var5)(var21);
            var21 = var22.useOrientation;
            var24 = var21.bind(var22)();
            var23 = _closure1_slot4;
            var22 = var23.useEffect;
            var21 = new Array(2);
            var21[0] = var25;
            var21[1] = var24;
            var16 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = _closure2_slot23;
                    var2 = var2.current;
                    if(!var2) { _fun0014_ip = 28; continue _fun0014 }
 15:
                    var3 = _closure2_slot9;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var22.bind(var23)(var16, var21);
            var21 = var1.bind(var5)(var4);
            var4 = _closure1_slot10;
            var1 = 11;
            var1 = var15[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.GestureDetector;
            var1 = {};
            var1['gesture'] = var6;
            var16 = _closure1_slot10;
            var15 = _closure1_slot34;
            var6 = {};
            var38 = var6;
            var37 = var17;
            var17 = copyDataProperties(var38, var37);
            var17 = 'visible';
            var6[var17] = var21;
            var17 = 'sourceWidth';
            var6[var17] = var20;
            var17 = 'sourceHeight';
            var6[var17] = var19;
            var17 = 'maximumZoomScale';
            var6[var17] = var8;
            var17 = 'hasSpoiler';
            var6[var17] = var18;
            var6 = var16.bind(var5)(var15, var6);
            var1['children'] = var6;
            var6 = var4.bind(var5)(var3, var1);
            var1 = _closure1_slot12;
            var4 = _closure1_slot10;
            if(var1) { _fun0004_ip = 1309; continue _fun0004 }
 1230:
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
            if(!var14) { _fun0004_ip = 1292; continue _fun0004 }
 1288:
            var13 = 'none';
 1292:
            var1['pointerEvents'] = var13;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0004_ip = 1374; continue _fun0004;
 1309:
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
 1374:
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot24 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx10(){const{zoomed,pinching}=this.__closure;return!zoomed.get()&&!pinching.get();}';
    var4['code'] = var8;
    var _closure1_slot25 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx11(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}';
    var4['code'] = var8;
    var _closure1_slot26 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var25 = arg1;
        var _closure2_slot0 = var25;
        var9 = var25.windowWidth;
        var23 = var25.initialIndex;
        var _closure2_slot1 = var23;
        var5 = var25.panGestureConfig;
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
        var7 = var6.bind(var4)(var3);
        var3 = var7.useSharedValue;
        var13 = false;
        var3 = var3.bind(var7)(var13);
        var _closure2_slot5 = var3;
        var7 = var20[var2];
        var12 = var6.bind(var4)(var7);
        var10 = var12.useDerivedValue;
        var7 = function o() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var3 = _closure2_slot2;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var1 = !var1;
                if(!var1) { _fun0015_ip = 38; continue _fun0015 }
 22:
                var3 = _closure2_slot5;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1 = !var2;
 38:
                return var1;
            }
        };
        var14 = {};
        var14['zoomed'] = var24;
        var14['pinching'] = var3;
        var7['__closure'] = var14;
        var14 = 4332438940835.0;
        var7['__workletHash'] = var14;
        var14 = _closure1_slot25;
        var7['__initData'] = var14;
        var10 = var10.bind(var12)(var7);
        var _closure2_slot6 = var10;
        var16 = _closure1_slot4;
        var14 = var16.useCallback;
        var12 = new Array(1);
        var12[0] = var3;
        var7 = function(arg1) {
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
        var16 = var14.bind(var16)(var7, var12);
        var14 = _closure1_slot4;
        var12 = var14.useCallback;
        var7 = new Array(1);
        var7[0] = var3;
        var3 = function() {
            var3 = _closure2_slot5;
            var2 = var3.set;
            var1 = false;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var14 = var12.bind(var14)(var3, var7);
        var3 = function usePanGesture(arg1, arg2) {
            var2 = arg1;
            var11 = arg2;
            var8 = var2.swipeVelocityThreshold;
            var _closure3_slot0 = var8;
            var3 = var2.velocity;
            var _closure3_slot1 = var3;
            var10 = var2.isInteracting;
            var _closure3_slot2 = var10;
            var7 = var2.translatePos;
            var _closure3_slot3 = var7;
            var9 = var2.start;
            var _closure3_slot4 = var9;
            var12 = var2.dismiss;
            var _closure3_slot5 = var12;
            var _closure3_slot6 = var11;
            var6 = _closure1_slot4;
            var5 = var6.useCallback;
            var4 = new Array(7);
            var4[0] = var12;
            var4[1] = var11;
            var4[2] = var10;
            var4[3] = var9;
            var4[4] = var8;
            var4[5] = var7;
            var4[6] = var3;
            var3 = function() {
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 11;
                var2 = var9[var2];
                var7 = undefined;
                var2 = var8.bind(var7)(var2);
                var3 = var2.Gesture;
                var2 = var3.Pan;
                var5 = var2.bind(var3)();
                var3 = var5.maxPointers;
                var2 = 1;
                var5 = var3.bind(var5)(var2);
                var3 = var5.activeOffsetY;
                var2 = new Array(2);
                var10 = -10;
                var2[0] = var10;
                var6 = 10;
                var2[1] = var6;
                var5 = var3.bind(var5)(var2);
                var3 = var5.failOffsetX;
                var2 = new Array(2);
                var2[0] = var10;
                var2[1] = var6;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onStart;
                var2 = function w() {
                    var4 = _closure3_slot4;
                    var3 = var4.set;
                    var2 = {};
                    var5 = 0;
                    var2['x'] = var5;
                    var6 = _closure3_slot3;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var2['y'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure3_slot2;
                    var2 = var3.set;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var14 = {};
                var12 = _closure3_slot4;
                var14['start'] = var12;
                var10 = _closure3_slot3;
                var14['translatePos'] = var10;
                var13 = _closure3_slot2;
                var14['isInteracting'] = var13;
                var2['__closure'] = var14;
                var14 = 16957201145085.0;
                var2['__workletHash'] = var14;
                var14 = _closure1_slot20;
                var2['__initData'] = var14;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onUpdate;
                var2 = function S(arg1) {
                    var1 = arg1;
                    var3 = var1.velocityY;
                    var6 = var1.translationY;
                    var5 = _closure3_slot3;
                    var4 = var5.set;
                    var7 = _closure3_slot4;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var2 = var2.y;
                    var2 = var6 + var2;
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure3_slot1;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
                    var1 = undefined;
                    return var1;
                };
                var14 = {};
                var14['translatePos'] = var10;
                var14['start'] = var12;
                var12 = _closure3_slot1;
                var14['velocity'] = var12;
                var2['__closure'] = var14;
                var14 = 7060732261689.0;
                var2['__workletHash'] = var14;
                var14 = _closure1_slot19;
                var2['__initData'] = var14;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onTouchesDown;
                var2 = function _(arg1, arg2) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                        var2 = arg2;
                        var3 = _closure3_slot6;
                        var1 = var3.get;
                        var1 = var1.bind(var3)();
                        if(var1) { _fun0016_ip = 32; continue _fun0016 }
 22:
                        var1 = var2.fail;
                        var1 = var1.bind(var2)();
 32:
                        var1 = undefined;
                        return var1;
                    }
                };
                var14 = {};
                var15 = _closure3_slot6;
                var14['enabled'] = var15;
                var2['__closure'] = var14;
                var14 = 12049065463102.0;
                var2['__workletHash'] = var14;
                var14 = _closure1_slot18;
                var2['__initData'] = var14;
                var3 = var3.bind(var5)(var2);
                var2 = var3.onEnd;
                var1 = function n() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        var4 = _closure3_slot2;
                        var3 = var4.set;
                        var2 = false;
                        var2 = var3.bind(var4)(var2);
                        var2 = global;
                        var4 = var2.Math;
                        var3 = var4.abs;
                        var5 = _closure3_slot1;
                        var2 = var5.get;
                        var2 = var2.bind(var5)();
                        var3 = var3.bind(var4)(var2);
                        var2 = _closure3_slot0;
                        if(!(!(var3 > var2))) { _fun0017_ip = 161; continue _fun0017 }
 59:
                        var3 = _closure3_slot3;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var7 = 0;
                        if(!(var7 !== var2)) { _fun0017_ip = 171; continue _fun0017 }
 78:
                        var4 = _closure3_slot3;
                        var3 = var4.set;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 10;
                        var5 = var5[var2];
                        var2 = undefined;
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.withSpring;
                        var2 = {};
                        var10 = _closure3_slot1;
                        var9 = var10.get;
                        var9 = var9.bind(var10)();
                        var2['velocity'] = var9;
                        var11 = _closure1_slot14;
                        var12 = var2;
                        var8 = copyDataProperties(var12, var11);
                        var2 = var5.bind(var6)(var7, var2);
                        var2 = var3.bind(var4)(var2);
                        _fun0017_ip = 171; continue _fun0017;
 161:
                        var2 = _closure3_slot5;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 171:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = {};
                var5['isInteracting'] = var13;
                var5['velocity'] = var12;
                var12 = _closure3_slot0;
                var5['swipeVelocityThreshold'] = var12;
                var11 = _closure3_slot5;
                var5['dismiss'] = var11;
                var5['translatePos'] = var10;
                var6 = var9[var6];
                var6 = var8.bind(var7)(var6);
                var6 = var6.withSpring;
                var5['withSpring'] = var6;
                var6 = _closure1_slot14;
                var5['SPRING_CONFIG'] = var6;
                var1['__closure'] = var5;
                var5 = 14151490519751.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot17;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var5.bind(var6)(var3, var4);
            var _closure3_slot7 = var5;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var2);
                var2 = var1.Gesture;
                var1 = var2.Native;
                var2 = var1.bind(var2)();
                var _closure4_slot0 = var2;
                var1 = new Array(0);
                var _closure4_slot1 = var1;
                var1 = {};
                var3 = function panGestureGenerator(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var2 = arg1;
                        var3 = _closure4_slot1;
                        var4 = var3[var2];
                        var3 = null;
                        if(!(var3 == var4)) { _fun0018_ip = 64; continue _fun0018 }
 20:
                        var4 = _closure3_slot7;
                        var3 = undefined;
                        var6 = var4.bind(var3)();
                        var3 = _closure4_slot1;
                        var5 = var6.blocksExternalGesture;
                        var4 = _closure4_slot0;
                        var4 = var5.bind(var6)(var4);
                        var3[var2] = var4;
                        var3 = var3[var2];
                        return var3;
 64:
                        var1 = _closure4_slot1;
                        var1 = var1[var2];
                        return var1;
                    }
                };
                var1['panGestureGenerator'] = var3;
                var1['nativeGesture'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5 = var3.bind(var4)(var5, var10);
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
            var4 = _closure1_slot10;
            var3 = _closure1_slot24;
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
        var7 = 16018174702883.0;
        var1['__workletHash'] = var7;
        var7 = _closure1_slot26;
        var1['__initData'] = var7;
        var10 = var2.bind(var3)(var1);
        var3 = _closure1_slot10;
        var1 = 11;
        var1 = var20[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.GestureDetector;
        var1 = {};
        var1['gesture'] = var5;
        var7 = _closure1_slot10;
        var5 = 21;
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
    var _closure1_slot27 = var4;
    var4 = {};
    var8 = "function MediaViewerTsx12(){const{absoluteFillObject,windowHeight,entranceAnimationDriver,interpolate,translatePos,closePosition}=this.__closure;return{...absoluteFillObject,height:windowHeight,backgroundColor:'black',opacity:Math.min(entranceAnimationDriver.get(),interpolate(translatePos.get(),[-closePosition,0,closePosition],[0,1,0]))};}";
    var4['code'] = var8;
    var _closure1_slot28 = var4;
    var4 = {};
    var8 = "function MediaViewerTsx13(){const{isClosing,hideRelayoutSharedValue,overlayEnabled,isInteracting,withTiming,Easing,runOnJS,setShowHeader}=this.__closure;return{opacity:isClosing.get()||hideRelayoutSharedValue.get()?0:overlayEnabled.get()&&!isInteracting.get()?withTiming(1,{easing:Easing.linear,duration:150}):withTiming(0,{easing:Easing.linear,duration:75},'respect-motion-settings',function(){runOnJS(setShowHeader)(false);})};}";
    var4['code'] = var8;
    var _closure1_slot29 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx14(){const{runOnJS,setShowHeader}=this.__closure;runOnJS(setShowHeader)(false);}';
    var4['code'] = var8;
    var _closure1_slot30 = var4;
    var4 = {};
    var8 = 'function MediaViewerTsx15(){const{overlayEnabled,isInteracting,runOnJS,setShowHeader}=this.__closure;if(overlayEnabled.get()&&!isInteracting.get()){runOnJS(setShowHeader)(true);}}';
    var4['code'] = var8;
    var _closure1_slot31 = var4;
    var4 = {};
    var8 = "function MediaViewerTsx16(){const{absoluteFillObject,translatePos,hideRelayoutSharedValue,withTiming,Easing}=this.__closure;return{...absoluteFillObject,alignItems:'center',justifyContent:'center',transform:[{translateY:translatePos.get()}],opacity:hideRelayoutSharedValue.get()?0:withTiming(1,{easing:Easing.linear,duration:75})};}";
    var4['code'] = var8;
    var _closure1_slot32 = var4;
    var4 = var7.memo;
    var2 = function MediaViewer(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var13 = arg1;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = 22;
            var1 = var10[var7];
            var4 = undefined;
            var5 = var9.bind(var4)(var1);
            var1 = 23;
            var1 = var10[var1];
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
            var19 = 0;
            var16 = var1[var19];
            var22 = 1;
            var35 = var1[var22];
            var _closure2_slot0 = var35;
            var17 = var13.swipeVelocityThreshold;
            var14 = var13.onClose;
            var _closure2_slot1 = var14;
            var5 = var13.syncer;
            var1 = 15;
            var1 = var10[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var28 = var1.width;
            var29 = var1.height;
            var _closure2_slot2 = var29;
            var9 = var5.sources;
            var1 = var13.initialIndex;
            var15 = var9[var1];
            var _closure2_slot3 = var15;
            var11 = null;
            if(!(var11 == var15)) { _fun0019_ip = 199; continue _fun0019 }
 191:
            var1 = {};
            var1['height'] = var29;
            _fun0019_ip = 210; continue _fun0019;
 199:
            var9 = _closure1_slot33;
            var1 = var9.bind(var4)(var28, var29, var15);
 210:
            var1 = var1.height;
            var1 = var29 + var1;
            var32 = var1 / var8;
            var _closure2_slot4 = var32;
            var8 = _closure1_slot0;
            var21 = _closure1_slot2;
            var31 = 7;
            var1 = var21[var31];
            var9 = var8.bind(var4)(var1);
            var1 = var9.useSharedValue;
            var30 = var1.bind(var9)(var19);
            var _closure2_slot5 = var30;
            var1 = var21[var31];
            var10 = var8.bind(var4)(var1);
            var9 = var10.useSharedValue;
            var1 = false;
            var1 = var9.bind(var10)(var1);
            var _closure2_slot6 = var1;
            var9 = var21[var31];
            var10 = var8.bind(var4)(var9);
            var9 = var10.useAnimatedRef;
            var24 = var9.bind(var10)();
            var _closure2_slot7 = var24;
            var9 = var5.sources;
            var10 = var5.index;
            var5 = var5.sources;
            var5 = var5.length;
            var5 = var5 > var22;
            var _closure2_slot8 = var5;
            var12 = function usePanGestureConfig(arg1, arg2, arg3) {
                var15 = arg1;
                var8 = arg2;
                var3 = arg3;
                var _closure3_slot0 = var15;
                var _closure3_slot1 = var8;
                var _closure3_slot2 = var3;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var16 = 7;
                var4 = var19[var16];
                var17 = undefined;
                var5 = var18.bind(var17)(var4);
                var4 = var5.useSharedValue;
                var6 = false;
                var11 = var4.bind(var5)(var6);
                var _closure3_slot3 = var11;
                var4 = var19[var16];
                var5 = var18.bind(var17)(var4);
                var4 = var5.useSharedValue;
                var10 = var4.bind(var5)(var6);
                var _closure3_slot4 = var10;
                var4 = var19[var16];
                var5 = var18.bind(var17)(var4);
                var4 = var5.useSharedValue;
                var6 = 0;
                var9 = var4.bind(var5)(var6);
                var _closure3_slot5 = var9;
                var4 = var19[var16];
                var5 = var18.bind(var17)(var4);
                var4 = var5.useSharedValue;
                var12 = var4.bind(var5)(var6);
                var _closure3_slot6 = var12;
                var4 = var19[var16];
                var6 = var18.bind(var17)(var4);
                var5 = var6.useSharedValue;
                var4 = {'y': 0, 'x': 0};
                var6 = var5.bind(var6)(var4);
                var _closure3_slot7 = var6;
                var4 = var19[var16];
                var7 = var18.bind(var17)(var4);
                var5 = var7.useSharedValue;
                var4 = true;
                var5 = var5.bind(var7)(var4);
                var _closure3_slot8 = var5;
                var13 = _closure1_slot4;
                var7 = var13.useCallback;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.tryPauseCurrentVideo;
                        var3 = var3.bind(var4)();
                        var5 = _closure3_slot2;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0020_ip = 56; continue _fun0020 }
 48:
                        var3 = _closure3_slot2;
                        var3 = var3.bind(var1)();
 56:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 9;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.endMediaViewerSession;
                        var2 = var2.bind(var3)();
                        return var1;
                    }
                };
                var14 = var7.bind(var13)(var3, var4);
                var _closure3_slot9 = var14;
                var13 = _closure1_slot4;
                var7 = var13.useCallback;
                var4 = function l() {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                        var3 = _closure3_slot3;
                        var2 = var3.set;
                        var1 = true;
                        var1 = var2.bind(var3)(var1);
                        var2 = _closure3_slot6;
                        var1 = var2.get;
                        var2 = var1.bind(var2)();
                        var1 = 0;
                        if(!(!(var2 < var1))) { _fun0021_ip = 44; continue _fun0021 }
 38:
                        var9 = _closure3_slot0;
                        _fun0021_ip = 51; continue _fun0021;
 44:
                        var1 = _closure3_slot0;
                        var9 = -var1;
 51:
                        var4 = _closure3_slot5;
                        var3 = var4.set;
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var1 = 10;
                        var5 = var14[var1];
                        var1 = undefined;
                        var8 = var13.bind(var1)(var5);
                        var7 = var8.withSpring;
                        var6 = {};
                        var10 = _closure3_slot6;
                        var5 = var10.get;
                        var5 = var5.bind(var10)();
                        var6['velocity'] = var5;
                        var17 = _closure1_slot14;
                        var18 = var6;
                        var5 = copyDataProperties(var18, var17);
                        var5 = function n() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 7;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.runOnJS;
                            var2 = _closure3_slot9;
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.bind(var1)();
                            return var1;
                        };
                        var10 = {};
                        var12 = 7;
                        var12 = var14[var12];
                        var12 = var13.bind(var1)(var12);
                        var12 = var12.runOnJS;
                        var10['runOnJS'] = var12;
                        var11 = _closure3_slot9;
                        var10['handleClose'] = var11;
                        var5['__closure'] = var10;
                        var10 = 1456146983962.0;
                        var5['__workletHash'] = var10;
                        var2 = _closure1_slot16;
                        var5['__initData'] = var2;
                        var16 = 'respect-motion-settings';
                        var19 = var8;
                        var18 = var9;
                        var17 = var6;
                        var15 = var5;
                        var2 = var19[var7](var18, var17, var16, var15, var14);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var3 = {};
                var3['isClosing'] = var11;
                var3['velocity'] = var12;
                var3['closePosition'] = var15;
                var3['translatePos'] = var9;
                var20 = 10;
                var20 = var19[var20];
                var20 = var18.bind(var17)(var20);
                var20 = var20.withSpring;
                var3['withSpring'] = var20;
                var20 = _closure1_slot14;
                var3['SPRING_CONFIG'] = var20;
                var16 = var19[var16];
                var16 = var18.bind(var17)(var16);
                var16 = var16.runOnJS;
                var3['runOnJS'] = var16;
                var3['handleClose'] = var14;
                var4['__closure'] = var3;
                var3 = 15859110208332.0;
                var4['__workletHash'] = var3;
                var3 = _closure1_slot15;
                var4['__initData'] = var3;
                var3 = new Array(5);
                var3[0] = var15;
                var3[1] = var14;
                var3[2] = var11;
                var3[3] = var9;
                var3[4] = var12;
                var7 = var7.bind(var13)(var4, var3);
                var _closure3_slot10 = var7;
                var4 = _closure1_slot4;
                var3 = var4.useMemo;
                var2 = new Array(8);
                var2[0] = var12;
                var2[1] = var11;
                var2[2] = var10;
                var2[3] = var9;
                var2[4] = var8;
                var2[5] = var7;
                var2[6] = var6;
                var2[7] = var5;
                var1 = function() {
                    var1 = {};
                    var3 = _closure3_slot6;
                    var1['velocity'] = var3;
                    var3 = _closure3_slot3;
                    var1['isClosing'] = var3;
                    var3 = _closure3_slot4;
                    var1['isInteracting'] = var3;
                    var3 = _closure3_slot8;
                    var1['overlayEnabled'] = var3;
                    var3 = _closure3_slot5;
                    var1['translatePos'] = var3;
                    var3 = _closure3_slot1;
                    var1['swipeVelocityThreshold'] = var3;
                    var3 = _closure3_slot10;
                    var1['dismiss'] = var3;
                    var2 = _closure3_slot7;
                    var1['start'] = var2;
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var27 = var12.bind(var4)(var32, var17, var14);
            var18 = var27.dismiss;
            var33 = var27.translatePos;
            var _closure2_slot9 = var33;
            var26 = var27.isClosing;
            var _closure2_slot10 = var26;
            var36 = var27.isInteracting;
            var _closure2_slot11 = var36;
            var17 = var27.overlayEnabled;
            var _closure2_slot12 = var17;
            var12 = _closure1_slot6;
            var34 = var12.absoluteFillObject;
            var _closure2_slot13 = var34;
            var12 = var21[var31];
            var23 = var8.bind(var4)(var12);
            var20 = var23.useAnimatedStyle;
            var12 = function u() {
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
            var25 = {};
            var25['absoluteFillObject'] = var34;
            var25['windowHeight'] = var29;
            var25['entranceAnimationDriver'] = var30;
            var37 = var21[var31];
            var37 = var8.bind(var4)(var37);
            var37 = var37.interpolate;
            var25['interpolate'] = var37;
            var25['translatePos'] = var33;
            var25['closePosition'] = var32;
            var12['__closure'] = var25;
            var25 = 9386609924598.0;
            var12['__workletHash'] = var25;
            var25 = _closure1_slot28;
            var12['__initData'] = var25;
            var25 = var20.bind(var23)(var12);
            var23 = _closure1_slot4;
            var20 = var23.useState;
            var12 = {};
            var32 = _closure1_slot6;
            var39 = var32.absoluteFillObject;
            var40 = var12;
            var32 = copyDataProperties(var40, var39);
            var37 = 'transparent';
            var32 = 'backgroundColor';
            var12[var32] = var37;
            var20 = var20.bind(var23)(var12);
            var12 = _closure1_slot3;
            var12 = var12.bind(var4)(var20, var22);
            var20 = var12[var19];
            var12 = var21[var31];
            var22 = var8.bind(var4)(var12);
            var19 = var22.useAnimatedStyle;
            var12 = function c() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var1 = {};
                    var3 = _closure2_slot10;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    if(var3) { _fun0022_ip = 323; continue _fun0022 }
 26:
                    var4 = _closure2_slot6;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = 0;
                    if(var3) { _fun0022_ip = 323; continue _fun0022 }
 47:
                    var4 = _closure2_slot12;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0022_ip = 161; continue _fun0022 }
 63:
                    var4 = _closure2_slot11;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0022_ip = 161; continue _fun0022 }
 79:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 24;
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
                    _fun0022_ip = 320; continue _fun0022;
 161:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var5 = 24;
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
                    var10 = 17296819087216.0;
                    var5['__workletHash'] = var10;
                    var4 = _closure1_slot30;
                    var5['__initData'] = var4;
                    var17 = 'respect-motion-settings';
                    var20 = var8;
                    var19 = 0;
                    var18 = var6;
                    var16 = var5;
                    var3 = var20[var7](var19, var18, var17, var16, var15);
 320:
                    var2 = var3;
 323:
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var23 = {};
            var23['isClosing'] = var26;
            var23['hideRelayoutSharedValue'] = var1;
            var23['overlayEnabled'] = var17;
            var23['isInteracting'] = var36;
            var32 = 24;
            var26 = var21[var32];
            var26 = var8.bind(var4)(var26);
            var26 = var26.withTiming;
            var23['withTiming'] = var26;
            var26 = var21[var31];
            var26 = var8.bind(var4)(var26);
            var26 = var26.Easing;
            var23['Easing'] = var26;
            var26 = var21[var31];
            var26 = var8.bind(var4)(var26);
            var26 = var26.runOnJS;
            var23['runOnJS'] = var26;
            var23['setShowHeader'] = var35;
            var12['__closure'] = var23;
            var23 = 13385294441912.0;
            var12['__workletHash'] = var23;
            var23 = _closure1_slot29;
            var12['__initData'] = var23;
            var19 = var19.bind(var22)(var12);
            var12 = var21[var31];
            var23 = var8.bind(var4)(var12);
            var22 = var23.useDerivedValue;
            var12 = function _() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var3 = _closure2_slot12;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0023_ip = 35; continue _fun0023 }
 19:
                    var4 = _closure2_slot11;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = !var3;
 35:
                    if(!var2) { _fun0023_ip = 84; continue _fun0023 }
 38:
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
 84:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = {};
            var26['overlayEnabled'] = var17;
            var26['isInteracting'] = var36;
            var36 = var21[var31];
            var36 = var8.bind(var4)(var36);
            var36 = var36.runOnJS;
            var26['runOnJS'] = var36;
            var26['setShowHeader'] = var35;
            var12['__closure'] = var26;
            var26 = 15971851636339.0;
            var12['__workletHash'] = var26;
            var26 = _closure1_slot31;
            var12['__initData'] = var26;
            var12 = var22.bind(var23)(var12);
            var12 = var21[var31];
            var23 = var8.bind(var4)(var12);
            var22 = var23.useAnimatedStyle;
            var12 = function ae() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
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
                    if(var2) { _fun0024_ip = 170; continue _fun0024 }
 93:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 24;
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
 170:
                    var2 = 'opacity';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var26 = {};
            var26['absoluteFillObject'] = var34;
            var26['translatePos'] = var33;
            var26['hideRelayoutSharedValue'] = var1;
            var32 = var21[var32];
            var32 = var8.bind(var4)(var32);
            var32 = var32.withTiming;
            var26['withTiming'] = var32;
            var31 = var21[var31];
            var31 = var8.bind(var4)(var31);
            var31 = var31.Easing;
            var26['Easing'] = var31;
            var12['__closure'] = var26;
            var26 = 4195174908294.0;
            var12['__workletHash'] = var26;
            var26 = _closure1_slot32;
            var12['__initData'] = var26;
            var23 = var22.bind(var23)(var12);
            var22 = _closure1_slot4;
            var12 = var22.useRef;
            var12 = var12.bind(var22)(var11);
            var _closure2_slot14 = var12;
            var26 = _closure1_slot4;
            var22 = var26.useCallback;
            var12 = new Array(3);
            var12[0] = var5;
            var12[1] = var24;
            var12[2] = var1;
            var5 = function() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                    var1 = _closure2_slot8;
                    if(!var1) { _fun0025_ip = 25; continue _fun0025 }
 10:
                    var3 = _closure2_slot7;
                    var4 = var3.current;
                    var3 = null;
                    var1 = var3 != var4;
 25:
                    if(!var1) { _fun0025_ip = 102; continue _fun0025 }
 28:
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
 102:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var22.bind(var26)(var5, var12);
            var _closure2_slot15 = var5;
            var26 = _closure1_slot4;
            var22 = var26.useCallback;
            var12 = new Array(1);
            var12[0] = var1;
            var1 = function() {
                var3 = _closure2_slot6;
                var2 = var3.set;
                var1 = false;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = var22.bind(var26)(var1, var12);
            var31 = _closure1_slot4;
            var26 = var31.useEffect;
            var22 = new Array(1);
            var22[0] = var5;
            var12 = function() {
                var3 = _closure1_slot9;
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
            var12 = var26.bind(var31)(var12, var22);
            var26 = _closure1_slot4;
            var22 = var26.useCallback;
            var12 = new Array(1);
            var12[0] = var5;
            var5 = function(arg1, arg2) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.orientation;
                    var1 = arg2;
                    var1 = var1.orientation;
                    if(!(var2 !== var1)) { _fun0026_ip = 35; continue _fun0026 }
 22:
                    var2 = _closure2_slot15;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 35:
                    var2 = _closure1_slot12;
                    if(!var2) { _fun0026_ip = 77; continue _fun0026 }
 45:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.unpauseCurrentVideoIfNeeded;
                    var1 = var1.bind(var2)();
 77:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var22.bind(var26)(var5, var12);
            var5 = 20;
            var5 = var21[var5];
            var8 = var8.bind(var4)(var5);
            var5 = var8.useOrientationListener;
            var5 = var5.bind(var8)(var12);
            var12 = _closure1_slot4;
            var8 = var12.useEffect;
            var5 = new Array(2);
            var5[0] = var15;
            var5[1] = var14;
            var3 = function() {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                    var2 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0027_ip = 31; continue _fun0027 }
 13:
                    var2 = _closure2_slot1;
                    if(!(var3 != var2)) { _fun0027_ip = 31; continue _fun0027 }
 21:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var12)(var3, var5);
            var3 = var13.renderRemixingView;
            var3 = var11 != var3;
            var12 = undefined;
            if(!var3) { _fun0019_ip = 1198; continue _fun0019 }
 1154:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 6;
            var3 = var8[var3];
            var8 = var5.bind(var4)(var3);
            var5 = var8.flattenSource;
            var3 = var10.get;
            var3 = var3.bind(var10)();
            var3 = var9[var3];
            var12 = var5.bind(var8)(var3);
 1198:
            var8 = _closure1_slot11;
            var5 = _closure1_slot5;
            var3 = {};
            var9 = _closure1_slot6;
            var9 = var9.absoluteFill;
            var3['style'] = var9;
            var3['onAccessibilityEscape'] = var18;
            var3['onLayout'] = var1;
            var14 = _closure1_slot10;
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 25;
            var1 = var15[var1];
            var9 = var10.bind(var4)(var1);
            var1 = {};
            var21 = 'light-content';
            var1['barStyle'] = var21;
            var21 = !var16;
            var1['hidden'] = var21;
            var1 = var14.bind(var4)(var9, var1);
            var9 = new Array(6);
            var9[0] = var1;
            var22 = _closure1_slot10;
            var1 = 13;
            var14 = var15[var1];
            var21 = var10.bind(var4)(var14);
            var14 = {};
            var14['style'] = var25;
            var14 = var22.bind(var4)(var21, var14);
            var9[1] = var14;
            var22 = _closure1_slot10;
            var14 = var15[var1];
            var21 = var10.bind(var4)(var14);
            var14 = {};
            var14['ref'] = var24;
            var14['style'] = var23;
            var25 = _closure1_slot10;
            var24 = _closure1_slot27;
            var23 = {};
            var40 = var23;
            var39 = var13;
            var26 = copyDataProperties(var40, var39);
            var26 = 'entranceAnimationDriver';
            var23[var26] = var30;
            var26 = 'windowHeight';
            var23[var26] = var29;
            var26 = 'windowWidth';
            var23[var26] = var28;
            var26 = 'panGestureConfig';
            var23[var26] = var27;
            var23 = var25.bind(var4)(var24, var23);
            var14['children'] = var23;
            var14 = var22.bind(var4)(var21, var14);
            var9[2] = var14;
            var14 = _closure1_slot10;
            var1 = var15[var1];
            var10 = var10.bind(var4)(var1);
            var1 = {};
            var15 = new Array(2);
            var15[0] = var20;
            var15[1] = var19;
            var1['style'] = var15;
            var15 = 'none';
            if(!var16) { _fun0019_ip = 1466; continue _fun0019 }
 1460:
            var15 = 'box-none';
 1466:
            var1['pointerEvents'] = var15;
            var15 = var13.renderOverlay;
            var16 = var11 == var15;
            var15 = undefined;
            if(var16) { _fun0019_ip = 1498; continue _fun0019 }
 1486:
            var16 = var13.renderOverlay;
            var15 = var16.bind(var13)(var18, var17);
 1498:
            var1['children'] = var15;
            var1 = var14.bind(var4)(var10, var1);
            var9[3] = var1;
            var10 = var11 != var12;
            var1 = null;
            if(!var10) { _fun0019_ip = 1550; continue _fun0019 }
 1521:
            var10 = var13.renderRemixingView;
            var11 = var11 == var10;
            var10 = undefined;
            if(var11) { _fun0019_ip = 1547; continue _fun0019 }
 1536:
            var11 = var13.renderRemixingView;
            var10 = var11.bind(var13)(var12);
 1547:
            var1 = var10;
 1550:
            var9[4] = var1;
            var12 = _closure1_slot10;
            var11 = _closure1_slot1;
            var1 = _closure1_slot2;
            var10 = 26;
            var10 = var1[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10 = var12.bind(var4)(var11, var10);
            var9[5] = var10;
            var3['children'] = var9;
            var5 = var8.bind(var4)(var5, var3);
            var3 = _closure1_slot10;
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
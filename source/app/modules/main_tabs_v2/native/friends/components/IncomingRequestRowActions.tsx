// app/modules/main_tabs_v2/native/friends/components/IncomingRequestRowActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'row';
    var9['flexDirection'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = "function IncomingRequestRowActionsTsx1(){const{animate,pressed,withTiming}=this.__closure;return{position:'absolute',right:0,flexDirection:'row',opacity:!animate?!pressed.get()?1:0:withTiming(!pressed.get()?1:0,{duration:150}),pointerEvents:!pressed.get()?'auto':'none'};}";
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = "function IncomingRequestRowActionsTsx2(){const{buttonWidth,buttonOffsetX,pressed,animate,withTiming}=this.__closure;const width=buttonWidth.get();const offset=buttonOffsetX.get();const scaleX=!pressed.get()?0.5:1;const translateX=!pressed.get()?width-offset:0;return{transform:[{translateX:!animate?translateX:withTiming(translateX)},{scaleX:!animate?scaleX:withTiming(scaleX)}],opacity:!animate?!pressed.get()?0:1:withTiming(!pressed.get()?0:1),pointerEvents:!pressed.get()?'none':'auto'};}";
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function IncomingRequestRowActionsTsx3(){const{waveWidth,waveHeight}=this.__closure;return{transform:[{translateX:waveWidth.get()/2},{translateY:waveHeight.get()/2}]};}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = "function IncomingRequestRowActionsTsx4(){const{withDelay,withRepeat,withTiming,pressed,Easing,waveWidth,waveHeight}=this.__closure;return{transform:[{rotateZ:withDelay(450,withRepeat(withTiming(pressed.get()?'8deg':'-2deg',{duration:150,easing:Easing.inOut(Easing.quad)}),4,true))},{translateX:-waveWidth.get()/2},{translateY:-waveHeight.get()/2}]};}";
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = "function IncomingRequestRowActionsTsx5(){const{pressed}=this.__closure;return{pointerEvents:!pressed.get()?'none':'none'};}";
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/friends/components/IncomingRequestRowActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function IncomingRequestRowActions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = var4.user;
            var _closure2_slot0 = var1;
            var11 = var4.applicationId;
            var _closure2_slot1 = var11;
            var3 = var4.pressed;
            var _closure2_slot2 = var3;
            var14 = var4.onAcceptIncomingRequest;
            var _closure2_slot3 = var14;
            var2 = var4.onDeclineIncomingRequest;
            var _closure2_slot4 = var2;
            var21 = var4.animate;
            var _closure2_slot5 = var21;
            var26 = var4.acceptRequestAccessibilityLabel;
            var25 = var4.ignoreRequestAccessibilityLabel;
            var5 = _closure1_slot7;
            var4 = undefined;
            var5 = var5.bind(var4)();
            var23 = _closure1_slot0;
            var12 = _closure1_slot2;
            var22 = 4;
            var6 = var12[var22];
            var8 = var23.bind(var4)(var6);
            var7 = var8.useSharedValue;
            var6 = 0;
            var13 = var7.bind(var8)(var6);
            var _closure2_slot6 = var13;
            var6 = var12[var22];
            var7 = var23.bind(var4)(var6);
            var6 = var7.useSharedValue;
            var8 = -1;
            var15 = var6.bind(var7)(var8);
            var _closure2_slot7 = var15;
            var6 = var12[var22];
            var7 = var23.bind(var4)(var6);
            var6 = var7.useSharedValue;
            var19 = var6.bind(var7)(var8);
            var _closure2_slot8 = var19;
            var6 = var12[var22];
            var7 = var23.bind(var4)(var6);
            var6 = var7.useSharedValue;
            var16 = var6.bind(var7)(var8);
            var _closure2_slot9 = var16;
            var6 = var12[var22];
            var8 = var23.bind(var4)(var6);
            var7 = var8.useAnimatedStyle;
            var6 = function E() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {'position': 'absolute', 'right': 0, 'flexDirection': 'row'};
                    var3 = _closure2_slot5;
                    if(var3) { _fun0002_ip = 47; continue _fun0002 }
 24:
                    var5 = _closure2_slot2;
                    var3 = var5.get;
                    var5 = var3.bind(var5)();
                    var3 = 1;
                    if(!var5) { _fun0002_ip = 45; continue _fun0002 }
 43:
                    var3 = 0;
 45:
                    _fun0002_ip = 113; continue _fun0002;
 47:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 5;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.withTiming;
                    var8 = _closure2_slot2;
                    var5 = var8.get;
                    var8 = var5.bind(var8)();
                    var5 = 1;
                    if(!var8) { _fun0002_ip = 98; continue _fun0002 }
 96:
                    var5 = 0;
 98:
                    var4 = {};
                    var8 = 150;
                    var4['duration'] = var8;
                    var3 = var6.bind(var7)(var5, var4);
 113:
                    var1['opacity'] = var3;
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 'auto';
                    if(!var3) { _fun0002_ip = 141; continue _fun0002 }
 137:
                    var2 = 'none';
 141:
                    var1['pointerEvents'] = var2;
                    return var1;
                }
            };
            var9 = {};
            var9['animate'] = var21;
            var9['pressed'] = var3;
            var20 = 5;
            var10 = var12[var20];
            var10 = var23.bind(var4)(var10);
            var10 = var10.withTiming;
            var9['withTiming'] = var10;
            var6['__closure'] = var9;
            var9 = 1291516991185.0;
            var6['__workletHash'] = var9;
            var9 = _closure1_slot8;
            var6['__initData'] = var9;
            var7 = var7.bind(var8)(var6);
            var6 = var12[var22];
            var9 = var23.bind(var4)(var6);
            var8 = var9.useAnimatedStyle;
            var6 = function q() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot7;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var4 = _closure2_slot6;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var5 = _closure2_slot2;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var9 = 0.5;
                    if(!var4) { _fun0003_ip = 58; continue _fun0003 }
 55:
                    var9 = 1;
 58:
                    var5 = _closure2_slot2;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var8 = 0;
                    if(var4) { _fun0003_ip = 80; continue _fun0003 }
 76:
                    var8 = var3 - var1;
 80:
                    var1 = {};
                    var4 = {};
                    var5 = _closure2_slot5;
                    var3 = var8;
                    if(!var5) { _fun0003_ip = 129; continue _fun0003 }
 94:
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 5;
                    var7 = var7[var5];
                    var5 = undefined;
                    var7 = var10.bind(var5)(var7);
                    var5 = var7.withTiming;
                    var3 = var5.bind(var7)(var8);
 129:
                    var4['translateX'] = var3;
                    var3 = new Array(2);
                    var3[0] = var4;
                    var4 = {};
                    var7 = _closure2_slot5;
                    var5 = var9;
                    if(!var7) { _fun0003_ip = 189; continue _fun0003 }
 154:
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 5;
                    var8 = var8[var7];
                    var7 = undefined;
                    var8 = var10.bind(var7)(var8);
                    var7 = var8.withTiming;
                    var5 = var7.bind(var8)(var9);
 189:
                    var4['scaleX'] = var5;
                    var3[1] = var4;
                    var1['transform'] = var3;
                    var3 = _closure2_slot5;
                    if(var3) { _fun0003_ip = 232; continue _fun0003 }
 209:
                    var4 = _closure2_slot2;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = 0;
                    if(!var4) { _fun0003_ip = 230; continue _fun0003 }
 227:
                    var3 = 1;
 230:
                    _fun0003_ip = 288; continue _fun0003;
 232:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 5;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var4 = var5.withTiming;
                    var8 = _closure2_slot2;
                    var7 = var8.get;
                    var7 = var7.bind(var8)();
                    var6 = 0;
                    if(!var7) { _fun0003_ip = 283; continue _fun0003 }
 280:
                    var6 = 1;
 283:
                    var3 = var4.bind(var5)(var6);
 288:
                    var1['opacity'] = var3;
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 'none';
                    if(!var3) { _fun0003_ip = 316; continue _fun0003 }
 312:
                    var2 = 'auto';
 316:
                    var1['pointerEvents'] = var2;
                    return var1;
                }
            };
            var10 = {};
            var10['buttonWidth'] = var15;
            var10['buttonOffsetX'] = var13;
            var10['pressed'] = var3;
            var10['animate'] = var21;
            var13 = var12[var20];
            var13 = var23.bind(var4)(var13);
            var13 = var13.withTiming;
            var10['withTiming'] = var13;
            var6['__closure'] = var10;
            var10 = 2207673076655.0;
            var6['__workletHash'] = var10;
            var10 = _closure1_slot9;
            var6['__initData'] = var10;
            var10 = var8.bind(var9)(var6);
            var6 = var12[var22];
            var9 = var23.bind(var4)(var6);
            var8 = var9.useAnimatedStyle;
            var6 = function x() {
                var1 = {};
                var3 = {};
                var5 = _closure2_slot8;
                var2 = var5.get;
                var2 = var2.bind(var5)();
                var5 = 2;
                var2 = var2 / var5;
                var3['translateX'] = var2;
                var2 = new Array(2);
                var2[0] = var3;
                var3 = {};
                var6 = _closure2_slot9;
                var4 = var6.get;
                var4 = var4.bind(var6)();
                var4 = var4 / var5;
                var3['translateY'] = var4;
                var2[1] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var13 = {};
            var13['waveWidth'] = var19;
            var13['waveHeight'] = var16;
            var6['__closure'] = var13;
            var13 = 4308223742756.0;
            var6['__workletHash'] = var13;
            var13 = _closure1_slot10;
            var6['__initData'] = var13;
            var15 = var8.bind(var9)(var6);
            var6 = var12[var22];
            var9 = var23.bind(var4)(var6);
            var8 = var9.useAnimatedStyle;
            var6 = function A() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = {};
                    var3 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var10 = 4;
                    var2 = var5[var10];
                    var17 = undefined;
                    var7 = var4.bind(var17)(var2);
                    var6 = var7.withDelay;
                    var2 = var5[var10];
                    var9 = var4.bind(var17)(var2);
                    var8 = var9.withRepeat;
                    var2 = 5;
                    var2 = var5[var2];
                    var12 = var4.bind(var17)(var2);
                    var11 = var12.withTiming;
                    var5 = _closure2_slot2;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var5 = '-2deg';
                    if(!var2) { _fun0004_ip = 98; continue _fun0004 }
 92:
                    var5 = '8deg';
 98:
                    var2 = {};
                    var14 = 150;
                    var2['duration'] = var14;
                    var16 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var14 = var13[var10];
                    var14 = var16.bind(var17)(var14);
                    var15 = var14.Easing;
                    var14 = var15.inOut;
                    var13 = var13[var10];
                    var13 = var16.bind(var17)(var13);
                    var13 = var13.Easing;
                    var13 = var13.quad;
                    var13 = var14.bind(var15)(var13);
                    var2['easing'] = var13;
                    var5 = var11.bind(var12)(var5, var2);
                    var2 = true;
                    var5 = var8.bind(var9)(var5, var10, var2);
                    var2 = 450;
                    var2 = var6.bind(var7)(var2, var5);
                    var3['rotateZ'] = var2;
                    var2 = new Array(3);
                    var2[0] = var3;
                    var3 = {};
                    var6 = _closure2_slot8;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var6 = -var5;
                    var5 = 2;
                    var6 = var6 / var5;
                    var3['translateX'] = var6;
                    var2[1] = var3;
                    var3 = {};
                    var6 = _closure2_slot9;
                    var4 = var6.get;
                    var4 = var4.bind(var6)();
                    var4 = -var4;
                    var4 = var4 / var5;
                    var3['translateY'] = var4;
                    var2[2] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var24 = var12[var22];
            var24 = var23.bind(var4)(var24);
            var24 = var24.withDelay;
            var13['withDelay'] = var24;
            var24 = var12[var22];
            var24 = var23.bind(var4)(var24);
            var24 = var24.withRepeat;
            var13['withRepeat'] = var24;
            var20 = var12[var20];
            var20 = var23.bind(var4)(var20);
            var20 = var20.withTiming;
            var13['withTiming'] = var20;
            var13['pressed'] = var3;
            var20 = var12[var22];
            var20 = var23.bind(var4)(var20);
            var20 = var20.Easing;
            var13['Easing'] = var20;
            var13['waveWidth'] = var19;
            var13['waveHeight'] = var16;
            var6['__closure'] = var13;
            var13 = 6870822621980.0;
            var6['__workletHash'] = var13;
            var13 = _closure1_slot11;
            var6['__initData'] = var13;
            var20 = var8.bind(var9)(var6);
            var6 = var12[var22];
            var9 = var23.bind(var4)(var6);
            var8 = var9.useAnimatedProps;
            var6 = function X() {
                var1 = {};
                var3 = _closure2_slot2;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var2 = 'none';
                var1['pointerEvents'] = var2;
                return var1;
            };
            var13 = {};
            var13['pressed'] = var3;
            var6['__closure'] = var13;
            var13 = 5804402563280.0;
            var6['__workletHash'] = var13;
            var13 = _closure1_slot12;
            var6['__initData'] = var13;
            var9 = var8.bind(var9)(var6);
            var6 = _closure1_slot3;
            var13 = var6.useCallback;
            var8 = new Array(4);
            var8[0] = var11;
            var8[1] = var14;
            var8[2] = var3;
            var8[3] = var1;
            var3 = function() {
                var4 = _closure2_slot2;
                var2 = var4.set;
                var1 = true;
                var1 = var2.bind(var4)(var1);
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var6 = var7.acceptIncomingRequest;
                var5 = {};
                var2 = _closure2_slot0;
                var4 = var2.id;
                var5['userId'] = var4;
                var4 = _closure2_slot1;
                var5['applicationId'] = var4;
                var5 = var6.bind(var7)(var5);
                var3 = _closure2_slot3;
                var2 = var2.id;
                var2 = var3.bind(var1)(var2, var4);
                return var1;
            };
            var27 = var13.bind(var6)(var3, var8);
            var8 = var6.useCallback;
            var3 = new Array(3);
            var3[0] = var11;
            var3[1] = var2;
            var3[2] = var1;
            var2 = function() {
                var3 = _closure2_slot4;
                var6 = _closure2_slot0;
                var2 = var6.id;
                var5 = _closure2_slot1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2, var5);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.dismissIncomingRequest;
                var2 = {};
                var6 = var6.id;
                var2['userId'] = var6;
                var2['applicationId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var28 = var8.bind(var6)(var2, var3);
            var3 = var6.useCallback;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.sendWave;
                var2 = _closure2_slot0;
                var4 = var2.id;
                var3 = true;
                var2 = 'Incoming Friend Request';
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var11 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var5.container;
            var1['style'] = var5;
            var8 = _closure1_slot5;
            var13 = _closure1_slot1;
            var5 = var12[var22];
            var5 = var13.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var14 = function onLayout(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot6;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
            };
            var5['onLayout'] = var14;
            var5['style'] = var7;
            var7 = 7;
            var7 = var12[var7];
            var7 = var23.bind(var4)(var7);
            var14 = var7.Stack;
            var7 = {'direction': 'horizontal', 'spacing': 8};
            var19 = 8;
            var16 = var12[var19];
            var16 = var23.bind(var4)(var16);
            var24 = var16.IconButton;
            var16 = {'size': 'sm', 'variant': 'tertiary'};
            var29 = 9;
            var29 = var12[var29];
            var29 = var13.bind(var4)(var29);
            var16['icon'] = var29;
            var16['onPress'] = var28;
            var16['accessibilityLabel'] = var25;
            var25 = 2;
            var16['maxFontSizeMultiplier'] = var25;
            var24 = var8.bind(var4)(var24, var16);
            var16 = new Array(2);
            var16[0] = var24;
            var19 = var12[var19];
            var19 = var23.bind(var4)(var19);
            var24 = var19.IconButton;
            var19 = {'size': 'sm', 'variant': 'active'};
            var28 = 10;
            var28 = var12[var28];
            var28 = var13.bind(var4)(var28);
            var19['icon'] = var28;
            var19['onPress'] = var27;
            var19['accessibilityLabel'] = var26;
            var19['maxFontSizeMultiplier'] = var25;
            var19 = var8.bind(var4)(var24, var19);
            var16[1] = var19;
            var7['children'] = var16;
            var7 = var3.bind(var4)(var14, var7);
            var5['children'] = var7;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = var12[var22];
            var6 = var13.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var6['style'] = var10;
            var10 = function onLayout(arg1) {
                var3 = _closure2_slot7;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.width;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var6['onLayout'] = var10;
            var31 = var6;
            var30 = var9;
            var9 = copyDataProperties(var31, var30);
            var9 = 11;
            var9 = var12[var9];
            var9 = var23.bind(var4)(var9);
            var10 = var9.Button;
            var9 = {'size': 'sm', 'variant': 'secondary'};
            var14 = 12;
            var16 = var12[var14];
            var16 = var23.bind(var4)(var16);
            var19 = var16.intl;
            var16 = var19.string;
            var14 = var12[var14];
            var14 = var23.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.n8nU4e;
            var14 = var16.bind(var19)(var14);
            var9['text'] = var14;
            var12 = var12[var22];
            var12 = var13.bind(var4)(var12);
            var13 = var12.View;
            var12 = {'style': null, 'accessibilityElementsHidden': true, 'importantForAccessibility': 'no-hide-descendants'};
            var14 = null;
            if(!var21) { _fun0001_ip = 1211; continue _fun0001 }
 1208:
            var14 = var15;
 1211:
            var12['style'] = var14;
            var16 = _closure1_slot5;
            var15 = _closure1_slot1;
            var14 = _closure1_slot2;
            var14 = var14[var22];
            var14 = var15.bind(var4)(var14);
            var15 = var14.View;
            var14 = {};
            var19 = null;
            if(!var21) { _fun0001_ip = 1253; continue _fun0001 }
 1250:
            var19 = var20;
 1253:
            var14['style'] = var19;
            var18 = function onLayout(arg1) {
                var1 = arg1;
                var5 = _closure2_slot8;
                var4 = var5.set;
                var3 = var1.nativeEvent;
                var3 = var3.layout;
                var3 = var3.width;
                var3 = var4.bind(var5)(var3);
                var3 = _closure2_slot9;
                var2 = var3.set;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.height;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var14['onLayout'] = var18;
            var19 = _closure1_slot5;
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var17 = 13;
            var17 = var20[var17];
            var17 = var18.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {'maxFontSizeMultiplier': 2, 'variant': 'text-sm/normal', 'children': '👋'};
            var17 = var19.bind(var4)(var18, var17);
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var12['children'] = var14;
            var12 = var8.bind(var4)(var13, var12);
            var9['icon'] = var12;
            var9['onPress'] = var11;
            var10 = var8.bind(var4)(var10, var9);
            var9 = 'children';
            var6[var9] = var10;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['IncomingRequestRowActions'] = var2;
    return var1;
})();
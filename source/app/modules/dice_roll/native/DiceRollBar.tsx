// app/modules/dice_roll/native/DiceRollBar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useDiceRollState;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'hidden';
    var9['overflow'] = var10;
    var4['animatedContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'paddingHorizontal': 16, 'paddingVertical': 8, 'gap': 12, 'borderTopWidth': 1};
    var10 = 6;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9['borderColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function DiceRollBarTsx1(){const{useReducedMotion,height,opacity,withTiming,ANIMATION_DURATION_MS,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get(),opacity:opacity.get()};}return{height:withTiming(height.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING}),opacity:withTiming(opacity.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING})};}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function DiceRollBarTsx2(){const{rotation}=this.__closure;return{transform:[{rotate:rotation.get()+"deg"}]};}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/dice_roll/native/DiceRollBar.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DiceRollBar(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channelId;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var1 = _closure1_slot9;
            var15 = var1.bind(var5)();
            var1 = _closure1_slot6;
            var2 = var1.bind(var5)(var2);
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 7;
            var7 = var1[var7];
            var10 = var4.bind(var5)(var7);
            var9 = var10.useStateFromStores;
            var7 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var18 = var9.bind(var10)(var8, var7);
            var _closure2_slot0 = var18;
            var9 = 8;
            var7 = var1[var9];
            var10 = var4.bind(var5)(var7);
            var8 = var10.useSharedValue;
            var7 = 0;
            var17 = var8.bind(var10)(var7);
            var _closure2_slot1 = var17;
            var8 = var1[var9];
            var10 = var4.bind(var5)(var8);
            var8 = var10.useSharedValue;
            var16 = var8.bind(var10)(var7);
            var _closure2_slot2 = var16;
            var1 = var1[var9];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useSharedValue;
            var12 = var1.bind(var4)(var7);
            var _closure2_slot3 = var12;
            var1 = null;
            var4 = var1 != var2;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var2.dismissing;
            var4 = !var7;
case 2:
            _closure2_slot4 = var4;
            var7 = var1 == var2;
            var8 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var2.rolling;
case 4:
            var7 = var1 != var8;
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var8;
case 6:
            _closure2_slot5 = var7;
            var11 = _closure1_slot3;
            var10 = var11.useEffect;
            var8 = new Array(3);
            var8[0] = var4;
            var8[1] = var17;
            var8[2] = var16;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure2_slot1;
                    var2 = var5.set;
                    var6 = _closure2_slot4;
                    var1 = 0;
                    if(!var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var1 = 56;
case 8:
                    var1 = var2.bind(var5)(var1);
                    var2 = _closure2_slot2;
                    var1 = var2.set;
                    var4 = _closure2_slot4;
                    var3 = 0;
                    if(!var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var3 = 1;
case 10:
                    var1 = var1.bind(var2)(var3);
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var10.bind(var11)(var4, var8);
            var10 = var11.useEffect;
            var8 = new Array(3);
            var8[0] = var7;
            var8[1] = var18;
            var8[2] = var12;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 14:
                    var4 = _closure2_slot3;
                    var3 = var4.set;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var2 = 8;
                    var5 = var12[var2];
                    var10 = undefined;
                    var8 = var11.bind(var10)(var5);
                    var7 = var8.withRepeat;
                    var5 = 9;
                    var5 = var12[var5];
                    var9 = var11.bind(var10)(var5);
                    var6 = var9.withTiming;
                    var5 = {};
                    var13 = 800;
                    var5['duration'] = var13;
                    var2 = var12[var2];
                    var2 = var11.bind(var10)(var2);
                    var2 = var2.Easing;
                    var2 = var2.linear;
                    var5['easing'] = var2;
                    var2 = 360;
                    var6 = var6.bind(var9)(var2, var5);
                    var5 = -1;
                    var2 = false;
                    var2 = var7.bind(var8)(var6, var5, var2);
                    var2 = var3.bind(var4)(var2);
                    _fun0003_ip = 15; continue _fun0003;
case 12:
                    var3 = _closure2_slot3;
                    var2 = var3.set;
                    var1 = 0;
                    var1 = var2.bind(var3)(var1);
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var10.bind(var11)(var4, var8);
            var10 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = var4[var9];
            var13 = var10.bind(var5)(var8);
            var11 = var13.useAnimatedStyle;
            var8 = function p() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = {};
                    if(var1) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 9;
                    var4 = var10[var1];
                    var8 = undefined;
                    var12 = var9.bind(var8)(var4);
                    var6 = var12.withTiming;
                    var5 = _closure2_slot1;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = {};
                    var11 = 300;
                    var4['duration'] = var11;
                    var7 = 10;
                    var13 = var10[var7];
                    var13 = var9.bind(var8)(var13);
                    var13 = var13.DECELERATED_EASING;
                    var4['easing'] = var13;
                    var4 = var6.bind(var12)(var5, var4);
                    var2['height'] = var4;
                    var1 = var10[var1];
                    var6 = var9.bind(var8)(var1);
                    var5 = var6.withTiming;
                    var4 = _closure2_slot2;
                    var1 = var4.get;
                    var4 = var1.bind(var4)();
                    var1 = {};
                    var1['duration'] = var11;
                    var7 = var10[var7];
                    var7 = var9.bind(var8)(var7);
                    var7 = var7.DECELERATED_EASING;
                    var1['easing'] = var7;
                    var1 = var5.bind(var6)(var4, var1);
                    var2['opacity'] = var1;
                    var1 = var2;
                    _fun0004_ip = 4; continue _fun0004;
case 16:
                    var5 = _closure2_slot1;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var2['height'] = var4;
                    var4 = _closure2_slot2;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2['opacity'] = var3;
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var14 = {};
            var14['useReducedMotion'] = var18;
            var14['height'] = var17;
            var14['opacity'] = var16;
            var16 = 9;
            var16 = var4[var16];
            var16 = var10.bind(var5)(var16);
            var16 = var16.withTiming;
            var14['withTiming'] = var16;
            var16 = 300;
            var14['ANIMATION_DURATION_MS'] = var16;
            var16 = 10;
            var16 = var4[var16];
            var16 = var10.bind(var5)(var16);
            var16 = var16.DECELERATED_EASING;
            var14['DECELERATED_EASING'] = var16;
            var8['__closure'] = var14;
            var14 = 2405066513233.0;
            var8['__workletHash'] = var14;
            var14 = _closure1_slot10;
            var8['__initData'] = var14;
            var8 = var11.bind(var13)(var8);
            var4 = var4[var9];
            var10 = var10.bind(var5)(var4);
            var4 = var10.useAnimatedStyle;
            var3 = function y() {
                var1 = {};
                var3 = {};
                var4 = _closure2_slot3;
                var2 = var4.get;
                var6 = var2.bind(var4)();
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var4 = '';
                var2 = 'deg';
                var2 = var5.bind(var4)(var6, var2);
                var3['rotate'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var11 = {};
            var11['rotation'] = var12;
            var3['__closure'] = var11;
            var11 = 12265072947874.0;
            var3['__workletHash'] = var11;
            var11 = _closure1_slot11;
            var3['__initData'] = var11;
            var14 = var4.bind(var10)(var3);
            if(!(var1 != var2)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 11;
            var3 = var13[var3];
            var4 = var11.bind(var5)(var3);
            var3 = var4.getBarText;
            var2 = var2.results;
            var12 = var3.bind(var4)(var7, var2);
            var4 = _closure1_slot7;
            var10 = _closure1_slot1;
            var2 = var13[var9];
            var2 = var10.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var7 = new Array(2);
            var7[0] = var8;
            var8 = var15.animatedContainer;
            var7[1] = var8;
            var2['style'] = var7;
            var8 = _closure1_slot8;
            var7 = _closure1_slot4;
            var6 = {};
            var15 = var15.container;
            var6['style'] = var15;
            var9 = var13[var9];
            var9 = var10.bind(var5)(var9);
            var10 = var9.View;
            var9 = {};
            var9['style'] = var14;
            var14 = 12;
            var14 = var13[var14];
            var14 = var11.bind(var5)(var14);
            var15 = var14.DiceIcon;
            var14 = {};
            var16 = 'md';
            var14['size'] = var16;
            var14 = var4.bind(var5)(var15, var14);
            var9['children'] = var14;
            var10 = var4.bind(var5)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = 13;
            var10 = var13[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-sm/normal', 'color': 'text-default'};
            var10['children'] = var12;
            var10 = var4.bind(var5)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 18:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
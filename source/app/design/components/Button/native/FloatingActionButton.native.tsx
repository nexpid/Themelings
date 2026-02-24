// app/design/components/Button/native/FloatingActionButton.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var10 = 0;
    var5 = var7[var10];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'right': 16, 'bottom': 16};
    var11 = 3;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.shadows;
    var14 = var11.SHADOW_HIGH;
    var15 = var9;
    var11 = copyDataProperties(var15, var14);
    var4['button'] = var9;
    var9 = {};
    var11 = 4;
    var12 = var7[var11];
    var12 = var6.bind(var1)(var12);
    var12 = var12.FAB_BUTTON_SIZE;
    var9['minWidth'] = var12;
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.FAB_BUTTON_SIZE;
    var9['minHeight'] = var11;
    var9['padding'] = var10;
    var4['iconButtonPill'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var5 = {'mass': 0.5, 'damping': 80, 'stiffness': 320};
    var _closure1_slot6 = var5;
    var5 = {};
    var8 = 'function FloatingActionButtonNativeTsx1(){const{withSpring,positionBottom,SPRING_CONFIG,positionRight}=this.__closure;return{bottom:withSpring(positionBottom!=null?positionBottom:0,SPRING_CONFIG),right:withSpring(positionRight!=null?positionRight:0,SPRING_CONFIG)};}';
    var5['code'] = var8;
    var _closure1_slot7 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Button/native/FloatingActionButton.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useStyles'] = var4;
    var2 = function FloatingActionButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var13 = var4.icon;
            var17 = var4.positionBottom;
            var _closure2_slot0 = var17;
            var16 = var4.positionRight;
            var _closure2_slot1 = var16;
            var11 = var4.accessibilityLabel;
            var3 = {'icon': 0, 'positionBottom': 0, 'positionRight': 0, 'accessibilityLabel': 0};
            var20 = null;
            var21 = var3;
            var1 = silentSetPrototypeOf(var21, var20);
            var21 = {};
            var20 = var4;
            var19 = var3;
            var8 = copyDataProperties(var21, var20, var19);
            var1 = _closure1_slot5;
            var4 = undefined;
            var7 = var1.bind(var4)();
            var _closure2_slot2 = var7;
            var10 = _closure1_slot3;
            var5 = var10.useMemo;
            var3 = new Array(3);
            var3[0] = var7;
            var3[1] = var17;
            var3[2] = var16;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var2 = var1.button;
                    var1 = new Array(3);
                    var1[0] = var2;
                    var2 = _closure2_slot0;
                    var4 = null;
                    var6 = var4 != var2;
                    var5 = undefined;
                    if(!var6) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = {};
                    var7 = 0;
                    var6['bottom'] = var7;
                    var5 = var6;
case 2:
                    var1[1] = var5;
                    var3 = _closure2_slot1;
                    var3 = var4 != var3;
                    var2 = undefined;
                    if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = {};
                    var4 = 0;
                    var3['right'] = var4;
                    var2 = var3;
case 4:
                    var1[2] = var2;
                    return var1;
                }
            };
            var9 = var5.bind(var10)(var1, var3);
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 5;
            var3 = var12[var1];
            var5 = var6.bind(var4)(var3);
            var3 = var5.useAnimatedStyle;
            var2 = function B() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 6;
                    var3 = var3[var9];
                    var7 = undefined;
                    var11 = var4.bind(var7)(var3);
                    var10 = var11.withSpring;
                    var3 = _closure2_slot0;
                    var8 = null;
                    var3 = var8 != var3;
                    var4 = 0;
                    if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var4 = _closure2_slot0;
case 6:
                    var3 = _closure1_slot6;
                    var3 = var10.bind(var11)(var4, var3);
                    var1['bottom'] = var3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var9];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.withSpring;
                    var7 = _closure2_slot1;
                    var7 = var8 != var7;
                    var5 = 0;
                    if(!var7) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var5 = _closure2_slot1;
case 8:
                    var2 = _closure1_slot6;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['right'] = var2;
                    return var1;
                }
            };
            var15 = {};
            var18 = 6;
            var18 = var12[var18];
            var18 = var6.bind(var4)(var18);
            var18 = var18.withSpring;
            var15['withSpring'] = var18;
            var15['positionBottom'] = var17;
            var17 = _closure1_slot6;
            var15['SPRING_CONFIG'] = var17;
            var15['positionRight'] = var16;
            var2['__closure'] = var15;
            var15 = 4835339439561.0;
            var2['__workletHash'] = var15;
            var15 = _closure1_slot7;
            var2['__initData'] = var15;
            var5 = var3.bind(var5)(var2);
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var1['style'] = var5;
            var5 = 7;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BaseIconButton;
            var5 = {};
            var21 = var5;
            var20 = var8;
            var8 = copyDataProperties(var21, var20);
            var8 = 'accessibilityLabel';
            var5[var8] = var11;
            var11 = 'lg';
            var8 = 'size';
            var5[var8] = var11;
            var11 = 'primary';
            var8 = 'variant';
            var5[var8] = var11;
            var8 = var10.isValidElement;
            var8 = var8.bind(var10)(var13);
            var10 = var13;
            if(!var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var12 = _closure1_slot3;
            var11 = var12.cloneElement;
            var8 = {};
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 3;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.colors;
            var14 = var14.WHITE;
            var8['color'] = var14;
            var10 = var11.bind(var12)(var13, var8);
case 10:
            var8 = 'icon';
            var5[var8] = var10;
            var8 = 'style';
            var5[var8] = var9;
            var8 = var7.iconButtonPill;
            var7 = 'pillStyle';
            var5[var7] = var8;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['FloatingActionButton'] = var2;
    return var1;
})();
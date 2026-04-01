// app/design/components/Button/native/FloatingActionButton.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
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
    var4 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arguments[0];
            var7 = undefined;
            if(!(var3 === var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = false;
case 2:
            var1 = {};
            var2 = {'position': 'absolute', 'right': 16, 'bottom': 16};
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var8 = 3;
            var4 = var9[var8];
            var4 = var6.bind(var7)(var4);
            var4 = var4.shadows;
            var11 = var4.SHADOW_HIGH;
            var12 = var2;
            var4 = copyDataProperties(var12, var11);
            var1['button'] = var2;
            var2 = {};
            var6 = _closure1_slot0;
            var4 = 4;
            var10 = var9[var4];
            var10 = var6.bind(var7)(var10);
            var10 = var10.FAB_BUTTON_SIZE;
            var2['minWidth'] = var10;
            var4 = var9[var4];
            var4 = var6.bind(var7)(var4);
            var4 = var4.FAB_BUTTON_SIZE;
            var2['minHeight'] = var4;
            var4 = 0;
            var2['padding'] = var4;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = {};
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var4 = {};
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.radii;
            var5 = var5.lg;
            var4['borderRadius'] = var5;
            var3 = var4;
case 6:
            var12 = var2;
            var11 = var3;
            var3 = copyDataProperties(var12, var11);
            var1['iconButtonPill'] = var2;
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var5 = {'mass': 0.5, 'damping': 80, 'stiffness': 320};
    var _closure1_slot6 = var5;
    var5 = {};
    var8 = "function FloatingActionButtonNativeTsx1(){const{withSpring,positionBottom,SPRING_CONFIG,positionRight}=this.__closure;return{position:'absolute',bottom:withSpring(positionBottom!=null?positionBottom:0,SPRING_CONFIG),right:withSpring(positionRight!=null?positionRight:0,SPRING_CONFIG)};}";
    var5['code'] = var8;
    var _closure1_slot7 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Button/native/FloatingActionButton.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useStyles'] = var4;
    var2 = function FloatingActionButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var13 = var4.icon;
            var18 = var4.positionBottom;
            var _closure2_slot0 = var18;
            var17 = var4.positionRight;
            var _closure2_slot1 = var17;
            var11 = var4.accessibilityLabel;
            var2 = {'icon': 0, 'positionBottom': 0, 'positionRight': 0, 'accessibilityLabel': 0};
            var21 = null;
            var22 = var2;
            var1 = silentSetPrototypeOf(var22, var21);
            var22 = {};
            var21 = var4;
            var20 = var2;
            var8 = copyDataProperties(var22, var21, var20);
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 5;
            var1 = var12[var1];
            var4 = undefined;
            var5 = var2.bind(var4)(var1);
            var1 = 'FloatingActionButton';
            var5 = var5.bind(var4)(var1);
            var1 = _closure1_slot5;
            var7 = var1.bind(var4)(var5);
            var _closure2_slot2 = var7;
            var10 = _closure1_slot3;
            var6 = var10.useMemo;
            var5 = new Array(3);
            var5[0] = var7;
            var5[1] = var18;
            var5[2] = var17;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var2 = var1.button;
                    var1 = new Array(3);
                    var1[0] = var2;
                    var2 = _closure2_slot0;
                    var4 = null;
                    var6 = var4 != var2;
                    var5 = undefined;
                    if(!var6) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var6 = {};
                    var7 = 0;
                    var6['bottom'] = var7;
                    var5 = var6;
case 7:
                    var1[1] = var5;
                    var3 = _closure2_slot1;
                    var3 = var4 != var3;
                    var2 = undefined;
                    if(!var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var3 = {};
                    var4 = 0;
                    var3['right'] = var4;
                    var2 = var3;
case 9:
                    var1[2] = var2;
                    return var1;
                }
            };
            var9 = var6.bind(var10)(var1, var5);
            var6 = _closure1_slot0;
            var1 = 6;
            var5 = var12[var1];
            var15 = var6.bind(var4)(var5);
            var5 = var15.useAnimatedStyle;
            var3 = function B() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var2 = 'absolute';
                    var1['position'] = var2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 7;
                    var3 = var3[var9];
                    var7 = undefined;
                    var11 = var4.bind(var7)(var3);
                    var10 = var11.withSpring;
                    var3 = _closure2_slot0;
                    var8 = null;
                    var3 = var8 != var3;
                    var4 = 0;
                    if(!var3) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var4 = _closure2_slot0;
case 11:
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
                    if(!var7) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var5 = _closure2_slot1;
case 13:
                    var2 = _closure1_slot6;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['right'] = var2;
                    return var1;
                }
            };
            var16 = {};
            var19 = 7;
            var19 = var12[var19];
            var19 = var6.bind(var4)(var19);
            var19 = var19.withSpring;
            var16['withSpring'] = var19;
            var16['positionBottom'] = var18;
            var18 = _closure1_slot6;
            var16['SPRING_CONFIG'] = var18;
            var16['positionRight'] = var17;
            var3['__closure'] = var16;
            var16 = 15844771072241.0;
            var3['__workletHash'] = var16;
            var16 = _closure1_slot7;
            var3['__initData'] = var16;
            var5 = var5.bind(var15)(var3);
            var3 = _closure1_slot4;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var1['style'] = var5;
            var5 = 8;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BaseIconButton;
            var5 = {};
            var22 = var5;
            var21 = var8;
            var8 = copyDataProperties(var22, var21);
            var8 = 'accessibilityLabel';
            var5[7] = var11;
            var11 = 'lg';
            var8 = 'size';
            var5[7] = var11;
            var11 = 'primary';
            var8 = 'variant';
            var5[7] = var11;
            var8 = var10.isValidElement;
            var8 = var8.bind(var10)(var13);
            var10 = var13;
            if(!var8) { _fun0002_ip = 15; continue _fun0002 }
case 16:
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
case 15:
            var8 = 'icon';
            var5[7] = var10;
            var8 = 'style';
            var5[7] = var9;
            var8 = var7.iconButtonPill;
            var7 = 'pillStyle';
            var5[6] = var8;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['FloatingActionButton'] = var2;
    return var1;
})();
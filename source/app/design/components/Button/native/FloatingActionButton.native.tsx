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
            var2 = {};
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
    var8 = "function FloatingActionButtonNativeTsx1(){const{withSpring,positionBottom,DEFAULT_POSITION_OFFSET,SPRING_CONFIG,positionRight}=this.__closure;var _positionBottom,_positionRight;return{position:'absolute',bottom:withSpring((_positionBottom=positionBottom)!==null&&_positionBottom!==void 0?_positionBottom:DEFAULT_POSITION_OFFSET,SPRING_CONFIG),right:withSpring((_positionRight=positionRight)!==null&&_positionRight!==void 0?_positionRight:DEFAULT_POSITION_OFFSET,SPRING_CONFIG)};}";
    var5['code'] = var8;
    var _closure1_slot7 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Button/native/FloatingActionButton.native.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = 16;
    var3['DEFAULT_POSITION_OFFSET'] = var5;
    var3['useStyles'] = var4;
    var2 = function FloatingActionButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var12 = var4.icon;
            var16 = var4.positionBottom;
            var _closure2_slot0 = var16;
            var15 = var4.positionRight;
            var _closure2_slot1 = var15;
            var9 = var4.accessibilityLabel;
            var2 = {'icon': 0, 'positionBottom': 0, 'positionRight': 0, 'accessibilityLabel': 0};
            var19 = null;
            var20 = var2;
            var1 = silentSetPrototypeOf(var20, var19);
            var20 = {};
            var19 = var4;
            var18 = var2;
            var19 = copyDataProperties(var20, var19, var18);
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 5;
            var1 = var10[var1];
            var4 = undefined;
            var5 = var2.bind(var4)(var1);
            var1 = 'FloatingActionButton';
            var5 = var5.bind(var4)(var1);
            var1 = _closure1_slot5;
            var7 = var1.bind(var4)(var5);
            var6 = _closure1_slot0;
            var1 = 6;
            var5 = var10[var1];
            var11 = var6.bind(var4)(var5);
            var5 = var11.useAnimatedStyle;
            var3 = function F() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                    var5 = 16;
                    var4 = var5;
                    if(!var3) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var4 = _closure2_slot0;
case 7:
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
                    if(!var7) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var5 = _closure2_slot1;
case 9:
                    var2 = _closure1_slot6;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['right'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var17 = 7;
            var17 = var10[var17];
            var17 = var6.bind(var4)(var17);
            var17 = var17.withSpring;
            var14['withSpring'] = var17;
            var14['positionBottom'] = var16;
            var16 = 16;
            var14['DEFAULT_POSITION_OFFSET'] = var16;
            var16 = _closure1_slot6;
            var14['SPRING_CONFIG'] = var16;
            var14['positionRight'] = var15;
            var3['__closure'] = var14;
            var14 = 10762818944671.0;
            var3['__workletHash'] = var14;
            var14 = _closure1_slot7;
            var3['__initData'] = var14;
            var5 = var5.bind(var11)(var3);
            var3 = _closure1_slot4;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var1['style'] = var5;
            var5 = 8;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BaseIconButton;
            var5 = {};
            var20 = var5;
            var8 = copyDataProperties(var20, var19);
            var8 = 'accessibilityLabel';
            var5[7] = var9;
            var9 = 'lg';
            var8 = 'size';
            var5[7] = var9;
            var9 = 'primary';
            var8 = 'variant';
            var5[7] = var9;
            var9 = _closure1_slot3;
            var8 = var9.isValidElement;
            var8 = var8.bind(var9)(var12);
            var9 = var12;
            if(!var8) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var11 = _closure1_slot3;
            var10 = var11.cloneElement;
            var8 = {};
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 3;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.colors;
            var13 = var13.WHITE;
            var8['color'] = var13;
            var9 = var10.bind(var11)(var12, var8);
case 11:
            var8 = 'icon';
            var5[7] = var9;
            var9 = var7.button;
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
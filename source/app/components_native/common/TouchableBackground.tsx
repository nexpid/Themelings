// app/components_native/common/TouchableBackground.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot2 = var7;
    var4 = var4.Pressable;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MODIFIER_ACTIVE;
    var9['backgroundColor'] = var10;
    var4['default'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/TouchableBackground.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TouchableBackground(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var11 = var6.activeBackgroundColor;
            var15 = var6.pressableStyle;
            var10 = var6.style;
            var7 = var6.children;
            var2 = var6.onPressIn;
            var _closure2_slot0 = var2;
            var16 = var6.onPressOut;
            var _closure2_slot1 = var16;
            var5 = {'activeBackgroundColor': 0, 'pressableStyle': 0, 'style': 0, 'children': 0, 'onPressIn': 0, 'onPressOut': 0};
            var13 = null;
            var20 = var5;
            var19 = null;
            var3 = silentSetPrototypeOf(var20, var19);
            var3 = 0;
            var20 = {};
            var19 = var6;
            var18 = var5;
            var6 = copyDataProperties(var20, var19, var18);
            var8 = _closure1_slot5;
            var4 = undefined;
            var12 = var8.bind(var4)();
            var8 = _closure1_slot1;
            var14 = var8.useState;
            var9 = false;
            var17 = var14.bind(var8)(var9);
            var14 = _closure1_slot0;
            var9 = 2;
            var14 = var14.bind(var4)(var17, var9);
            var9 = var14[var3];
            var3 = 1;
            var3 = var14[var3];
            var _closure2_slot2 = var3;
            var14 = var8.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure2_slot2;
                    var1 = undefined;
                    var3 = true;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 38; continue _fun0002 }
 26:
                    var3 = _closure2_slot0;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
 38:
                    return var1;
                }
            };
            var14 = var14.bind(var8)(var2, var3);
            var3 = var8.useCallback;
            var2 = new Array(1);
            var2[0] = var16;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 27; continue _fun0003 }
 13:
                    var4 = _closure2_slot1;
                    var3 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var3)(var2);
 27:
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = {};
            var16 = 'button';
            var1['accessibilityRole'] = var16;
            var1['style'] = var15;
            var20 = var1;
            var19 = var6;
            var6 = copyDataProperties(var20, var19);
            var6 = 'onPressIn';
            var1[var6] = var14;
            var6 = 'onPressOut';
            var1[var6] = var8;
            var6 = _closure1_slot2;
            var5 = {};
            var8 = new Array(2);
            var8[0] = var10;
            if(!var9) { _fun0001_ip = 285; continue _fun0001 }
 262:
            var10 = {};
            if(!(var13 == var11)) { _fun0001_ip = 278; continue _fun0001 }
 268:
            var12 = var12.default;
            var11 = var12.backgroundColor;
 278:
            var10['backgroundColor'] = var11;
            var9 = var10;
 285:
            var8[1] = var9;
            var5['style'] = var8;
            var5['children'] = var7;
            var6 = var3.bind(var4)(var6, var5);
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
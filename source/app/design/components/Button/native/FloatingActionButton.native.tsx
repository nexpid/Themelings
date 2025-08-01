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
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Button/native/FloatingActionButton.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useStyles'] = var4;
    var2 = function FloatingActionButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var11 = var4.icon;
            var7 = var4.positionBottom;
            var _closure2_slot0 = var7;
            var9 = var4.accessibilityLabel;
            var3 = {'icon': 0, 'positionBottom': 0, 'accessibilityLabel': 0};
            var16 = null;
            var17 = var3;
            var2 = silentSetPrototypeOf(var17, var16);
            var17 = {};
            var16 = var4;
            var15 = var3;
            var6 = copyDataProperties(var17, var16, var15);
            var2 = _closure1_slot5;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var _closure2_slot1 = var5;
            var8 = _closure1_slot3;
            var3 = var8.useMemo;
            var2 = new Array(2);
            var2[0] = var5;
            var2[1] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    var2 = var1.button;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var3 = _closure2_slot0;
                    var2 = null;
                    var3 = var2 != var3;
                    var2 = undefined;
                    if(!var3) { _fun0002_ip = 49; continue _fun0002 }
 36:
                    var3 = {};
                    var4 = _closure2_slot0;
                    var3['bottom'] = var4;
                    var2 = var3;
 49:
                    var1[1] = var2;
                    return var1;
                }
            };
            var7 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot4;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 5;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BaseIconButton;
            var1 = {};
            var17 = var1;
            var16 = var6;
            var6 = copyDataProperties(var17, var16);
            var6 = 'accessibilityLabel';
            var1[var6] = var9;
            var9 = 'lg';
            var6 = 'size';
            var1[var6] = var9;
            var9 = 'primary';
            var6 = 'variant';
            var1[var6] = var9;
            var6 = var8.isValidElement;
            var6 = var6.bind(var8)(var11);
            var8 = var11;
            if(!var6) { _fun0001_ip = 256; continue _fun0001 }
 203:
            var10 = _closure1_slot3;
            var9 = var10.cloneElement;
            var6 = {};
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 3;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.colors;
            var12 = var12.WHITE;
            var6['color'] = var12;
            var8 = var9.bind(var10)(var11, var6);
 256:
            var6 = 'icon';
            var1[var6] = var8;
            var6 = 'style';
            var1[var6] = var7;
            var6 = var5.iconButtonPill;
            var5 = 'pillStyle';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['FloatingActionButton'] = var2;
    return var1;
})();
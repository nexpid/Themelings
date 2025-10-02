// app/design/components/Button/native/ButtonConstants.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var17 = require;
    var3 = exports;
    var16 = dependencyMap;
    var _closure1_slot0 = var17;
    var _closure1_slot1 = var16;
    var2 = function getButtonPadding(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getIconSize;
        var1 = arg2;
        var2 = var2.bind(var3)(var1);
        var1 = arg1;
        var1 = var1 - var2;
        var2 = 2;
        var1 = var1 - var2;
        var1 = var1 / var2;
        return var1;
    };
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var5 = 0;
    var6 = var16[var5];
    var1 = undefined;
    var6 = var17.bind(var1)(var6);
    var6 = var6.IconSizes;
    var11 = var6.SMALL;
    var6 = var16[var5];
    var6 = var17.bind(var1)(var6);
    var6 = var6.IconSizes;
    var10 = var6.SMALL_20;
    var6 = var16[var5];
    var6 = var17.bind(var1)(var6);
    var6 = var6.IconSizes;
    var9 = var6.MEDIUM;
    var5 = var16[var5];
    var5 = var17.bind(var1)(var5);
    var5 = var5.IconSizes;
    var8 = var5.MEDIUM;
    var15 = 32;
    var7 = var2.bind(var1)(var15, var11);
    var14 = 40;
    var6 = var2.bind(var1)(var14, var10);
    var13 = 48;
    var5 = var2.bind(var1)(var13, var9);
    var12 = 1;
    var16 = var16[var12];
    var18 = var17.bind(var1)(var16);
    var17 = var18.fileFinishedImporting;
    var16 = 'design/components/Button/native/ButtonConstants.native.tsx';
    var16 = var17.bind(var18)(var16);
    var16 = 44;
    var3['MINIMUM_HIT_AREA'] = var16;
    var3['SMALL_BUTTON_HEIGHT'] = var15;
    var3['MEDIUM_BUTTON_HEIGHT'] = var14;
    var3['LARGE_BUTTON_HEIGHT'] = var13;
    var13 = 56;
    var3['FAB_BUTTON_SIZE'] = var13;
    var3['BUTTON_BORDER_WIDTH'] = var12;
    var12 = 'md';
    var3['DEFAULT_BUTTON_SIZE'] = var12;
    var3['SMALL_BUTTON_ICON_SIZE'] = var11;
    var3['MEDIUM_BUTTON_ICON_SIZE'] = var10;
    var3['LARGE_BUTTON_ICON_SIZE'] = var9;
    var3['FAB_BUTTON_ICON_SIZE'] = var8;
    var8 = 12;
    var3['SMALL_BUTTON_HORIZONTAL_PADDING'] = var8;
    var8 = 20;
    var3['MEDIUM_BUTTON_HORIZONTAL_PADDING'] = var8;
    var8 = 24;
    var3['LARGE_BUTTON_HORIZONTAL_PADDING'] = var8;
    var3['SMALL_BUTTON_PADDING'] = var7;
    var3['MEDIUM_BUTTON_PADDING'] = var6;
    var3['LARGE_BUTTON_PADDING'] = var5;
    var5 = 3;
    var3['BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER'] = var5;
    var4 = function getButtonDefaultTextVariant(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = 'text-sm/semibold';
            var3 = 'lg';
            var2 = arg1;
            if(!(var3 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'text-md/semibold';
case 2:
            return var1;
        }
    };
    var3['getButtonDefaultTextVariant'] = var4;
    var3['getButtonPadding'] = var2;
    return var1;
})();
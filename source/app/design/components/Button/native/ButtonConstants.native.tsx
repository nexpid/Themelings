// app/design/components/Button/native/ButtonConstants.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var16 = require;
    var3 = exports;
    var17 = dependencyMap;
    var _closure1_slot0 = var16;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var17;
    var4 = function getButtonPadding(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
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
    var6 = var17[var5];
    var1 = undefined;
    var6 = var16.bind(var1)(var6);
    var6 = var6.IconSizes;
    var11 = var6.SMALL;
    var6 = var17[var5];
    var6 = var16.bind(var1)(var6);
    var6 = var6.IconSizes;
    var10 = var6.SMALL_20;
    var6 = var17[var5];
    var6 = var16.bind(var1)(var6);
    var6 = var6.IconSizes;
    var9 = var6.MEDIUM;
    var5 = var17[var5];
    var5 = var16.bind(var1)(var5);
    var5 = var5.IconSizes;
    var8 = var5.MEDIUM;
    var14 = 32;
    var7 = var4.bind(var1)(var14, var11);
    var13 = 40;
    var6 = var4.bind(var1)(var13, var10);
    var12 = 48;
    var5 = var4.bind(var1)(var12, var9);
    var15 = 2;
    var15 = var17[var15];
    var17 = var16.bind(var1)(var15);
    var16 = var17.fileFinishedImporting;
    var15 = 'design/components/Button/native/ButtonConstants.native.tsx';
    var15 = var16.bind(var17)(var15);
    var15 = 44;
    var3['MINIMUM_HIT_AREA'] = var15;
    var3['SMALL_BUTTON_HEIGHT'] = var14;
    var3['MEDIUM_BUTTON_HEIGHT'] = var13;
    var3['LARGE_BUTTON_HEIGHT'] = var12;
    var12 = 56;
    var3['FAB_BUTTON_SIZE'] = var12;
    var12 = 1;
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
    var5 = function getButtonDefaultTextVariant(arg1) {
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
    var3['getButtonDefaultTextVariant'] = var5;
    var3['getButtonPadding'] = var4;
    var2 = function getButtonBorderRadius(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = 'lg';
            var1 = arg1;
            if(!(var2 !== var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.modules;
            var1 = var1.button;
            var1 = var1.BORDER_RADIUS;
            _fun0002_ip = 6; continue _fun0002;
case 4:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.modules;
            var2 = var2.button;
            var1 = var2.BORDER_RADIUS_LG;
case 6:
            return var1;
        }
    };
    var3['getButtonBorderRadius'] = var2;
    return var1;
})();
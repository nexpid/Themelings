// app/modules/rebrand/native/TextStyles.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.Fonts;
    var _closure1_slot0 = var4;
    var4 = {10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 16: 16, 18: 17, 20: 20, 24: 25, 32: 34};
    var _closure1_slot1 = var4;
    var4 = {10: 14, 11: 14, 12: 16, 13: 16, 14: 18, 16: 20, 18: 24, 20: 24, 24: 30, 32: 40};
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rebrand/native/TextStyles.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createTextStyle(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var3 = arg2;
            var5 = arg3;
            var2 = arg4;
            var1 = _closure1_slot1;
            var6 = var1[var5];
            var1 = {};
            var1['fontFamily'] = var8;
            var1['fontSize'] = var6;
            var4 = _closure1_slot2;
            var4 = var4[var5];
            var1['lineHeight'] = var4;
            var4 = null;
            if(!(var4 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1['color'] = var3;
case 2:
            var5 = var4 == var2;
            var9 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var2.uppercase;
case 4:
            var5 = true;
            if(!(var5 === var9)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = 'uppercase';
            var1['textTransform'] = var5;
            var5 = 14;
            var5 = var6 <= var5;
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = _closure1_slot0;
            var6 = var6.DISPLAY_EXTRABOLD;
            var6 = var8 === var6;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = _closure1_slot0;
            var7 = var7.DISPLAY_SEMIBOLD;
            var6 = var8 === var7;
case 10:
            var5 = var6;
case 8:
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 12:
            var5 = 0.2;
            var1['letterSpacing'] = var5;
case 6:
            var5 = var4 == var2;
            var3 = undefined;
            if(var5) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = var2.marginBottom;
case 13:
            if(!(var4 != var3)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var2 = var2.marginBottom;
            var1['marginBottom'] = var2;
case 15:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
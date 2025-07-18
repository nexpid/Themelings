// app/design/components/Colors/shared/Colors.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function toRGBAString(arg1) {
        var2 = arg1;
        var1 = var2.rgba;
        var4 = var1.bind(var2)();
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = 4;
        var2 = var3.bind(var2)(var4, var1);
        var1 = 0;
        var16 = var2[var1];
        var1 = 1;
        var14 = var2[var1];
        var1 = 2;
        var12 = var2[var1];
        var1 = 3;
        var10 = var2[var1];
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var17 = 'rgba(';
        var2 = ', ';
        var9 = ')';
        var15 = var2;
        var13 = var2;
        var11 = var2;
        var1 = var17[var4](var16, var15, var14, var13, var12, var11, var10, var9, var8);
        return var1;
    };
    var _closure1_slot4 = var1;
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
    var _closure1_slot2 = var4;
    var4 = {'NonText': 3, 'Text': 4.5, 'HighContrastText': 7};
    var _closure1_slot3 = var4;
    var5 = 2;
    var6 = var6[var5];
    var5 = native2;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Colors/shared/Colors.tsx';
    var5 = var6.bind(var7)(var5);
    var3['WCAGContrastRatios'] = var4;
    var4 = function getContrastingColor(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var2 = arguments[1];
            var3 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var2 = {};
 14:
            var13 = var2.contrastRatio;
            var7 = null;
            if(!(var7 == var13)) { _fun0001_ip = 39; continue _fun0001 }
 26:
            var1 = _closure1_slot3;
            var13 = var1.NonText;
 39:
            var1 = var2.tolerance;
            var4 = var7 != var1;
            var12 = 3;
            if(!var4) { _fun0001_ip = 60; continue _fun0001 }
 57:
            var12 = var1;
 60:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var11 = 1;
            var4 = var4[var11];
            var4 = var5.bind(var3)(var4);
            var5 = var2.base;
            var2 = var6;
            if(!(var7 != var5)) { _fun0001_ip = 99; continue _fun0001 }
 96:
            var2 = var5;
 99:
            var10 = var4.bind(var3)(var2);
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var4 = var2[var11];
            var4 = var5.bind(var3)(var4);
            var4 = var4.bind(var3)(var6);
            var6 = var10.luminance;
            var9 = var6.bind(var10)();
            var2 = var2[var11];
            var5 = var5.bind(var3)(var2);
            var2 = var5.contrast;
            var5 = var2.bind(var5)(var10, var4);
            var8 = 99;
            var7 = 0;
            var6 = var4;
 165:
            var14 = var5 < var13;
            var2 = var13 + var12;
            var15 = var5 > var2;
            if(var14) { _fun0001_ip = 186; continue _fun0001 }
 180:
            var2 = var6;
            if(!var15) { _fun0001_ip = 279; continue _fun0001 }
 186:
            var4 = var6.luminance;
            var4 = var4.bind(var6)();
            var4 = var4 > var9;
            if(!var15) { _fun0001_ip = 206; continue _fun0001 }
 203:
            if(var4) { _fun0001_ip = 224; continue _fun0001 }
 206:
            if(!var14) { _fun0001_ip = 212; continue _fun0001 }
 209:
            if(!var4) { _fun0001_ip = 224; continue _fun0001 }
 212:
            var4 = var6.brighten;
            var14 = var4.bind(var6)();
            _fun0001_ip = 234; continue _fun0001;
 224:
            var4 = var6.darken;
            var14 = var4.bind(var6)();
 234:
            var15 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var11];
            var15 = var15.bind(var3)(var4);
            var4 = var15.contrast;
            var5 = var4.bind(var15)(var10, var14);
            var4 = parseFloat(var8);
            var8 = var4 - 1;
            var6 = var14;
            var2 = var6;
            if(var4 > var7) { _fun0001_ip = 165; continue _fun0001 }
 279:
            var1 = _closure1_slot4;
            var1 = var1.bind(var3)(var2);
            return var1;
        }
    };
    var3['getContrastingColor'] = var4;
    var4 = function darkenColor(arg1, arg2) {
        var3 = _closure1_slot4;
        var4 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var1 = var2[var1];
        var2 = undefined;
        var4 = var4.bind(var2)(var1);
        var1 = arg1;
        var5 = var4.bind(var2)(var1);
        var4 = var5.darken;
        var1 = arg2;
        var1 = var4.bind(var5)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['darkenColor'] = var4;
    var4 = function brightenColor(arg1, arg2) {
        var3 = _closure1_slot4;
        var4 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var1 = var2[var1];
        var2 = undefined;
        var4 = var4.bind(var2)(var1);
        var1 = arg1;
        var5 = var4.bind(var2)(var1);
        var4 = var5.brighten;
        var1 = arg2;
        var1 = var4.bind(var5)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['brightenColor'] = var4;
    var2 = function setColorOpacity(arg1, arg2) {
        var3 = _closure1_slot4;
        var4 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var1 = var2[var1];
        var2 = undefined;
        var4 = var4.bind(var2)(var1);
        var1 = arg1;
        var5 = var4.bind(var2)(var1);
        var4 = var5.alpha;
        var1 = arg2;
        var1 = var4.bind(var5)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['setColorOpacity'] = var2;
    return var1;
})();
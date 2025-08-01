// app/design/tokens/native/SemanticColorContext.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 5;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/tokens/native/SemanticColorContext.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getSemanticColorContextFromThemeContext(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var14 = undefined;
            var4 = var3.bind(var14)(var2);
            var2 = var4.getGradientThemeFromFlags;
            var9 = var2.bind(var4)(var1);
            var8 = var1.contrast;
            var4 = var1.saturation;
            var6 = var1.primaryColor;
            var2 = 4;
            var2 = var5[var2];
            var5 = var3.bind(var14)(var2);
            var3 = var5.getGradientThemeMetadata;
            var2 = var1.gradient;
            var2 = var3.bind(var5)(var9, var2);
            var5 = null;
            if(!(var5 != var6)) { _fun0001_ip = 319; continue _fun0001 }
 96:
            var13 = var1.theme;
            var3 = var1.primaryColor;
            var12 = var1.secondaryColor;
            var9 = var5 == var3;
            var1 = null;
            if(var9) { _fun0001_ip = 316; continue _fun0001 }
 125:
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 0;
            var10 = var15[var9];
            var16 = var11.bind(var14)(var10);
            var10 = var16.int2hex;
            var10 = var10.bind(var16)(var3);
            var9 = var15[var9];
            var11 = var11.bind(var14)(var9);
            var9 = var11.int2hex;
            if(!(var5 != var12)) { _fun0001_ip = 177; continue _fun0001 }
 174:
            var3 = var12;
 177:
            var9 = var9.bind(var11)(var3);
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var3 = 1;
            var3 = var15[var3];
            var3 = var11.bind(var14)(var3);
            var12 = var3.bind(var14)(var10);
            var11 = var12.mix;
            var3 = 0.5;
            var11 = var11.bind(var12)(var9, var3);
            var3 = var11.hex;
            var11 = var3.bind(var11)();
            var3 = {};
            var12 = _closure1_slot0;
            var7 = 2;
            var7 = var15[var7];
            var12 = var12.bind(var14)(var7);
            var7 = var12.isThemeLight;
            var12 = var7.bind(var12)(var13);
            var7 = 'dark';
            if(!var12) { _fun0001_ip = 278; continue _fun0001 }
 274:
            var7 = 'light';
 278:
            var3['theme'] = var7;
            var7 = {};
            var7['gradient.start'] = var10;
            var7['gradient.mid'] = var11;
            var7['gradient.end'] = var9;
            var7['gradient.primary'] = var10;
            var7['gradient.secondary'] = var9;
            var3['colors'] = var7;
            var1 = var3;
 316:
            var2 = var1;
 319:
            var1 = {};
            var9 = var5 != var6;
            var3 = 1;
            var7 = var3;
            if(var9) { _fun0001_ip = 337; continue _fun0001 }
 334:
            var7 = var8;
 337:
            var1['contrast'] = var7;
            var5 = var5 != var6;
            if(var5) { _fun0001_ip = 352; continue _fun0001 }
 349:
            var3 = var4;
 352:
            var1['saturation'] = var3;
            var1['gradient'] = var2;
            return var1;
        }
    };
    var3['getSemanticColorContextFromThemeContext'] = var2;
    return var1;
})();
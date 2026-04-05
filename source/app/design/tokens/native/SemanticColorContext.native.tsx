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
case 0:
            var1 = arg1;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var15 = undefined;
            var3 = var5.bind(var15)(var2);
            var2 = var3.getGradientThemeFromFlags;
            var10 = var2.bind(var3)(var1);
            var9 = var1.contrast;
            var7 = var1.saturation;
            var4 = var1.primaryColor;
            var2 = var1.enabledExperiments;
            var3 = 4;
            var3 = var6[var3];
            var6 = var5.bind(var15)(var3);
            var5 = var6.getGradientThemeMetadata;
            var3 = var1.gradient;
            var5 = var5.bind(var6)(var10, var3);
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var14 = var1.theme;
            var6 = var1.primaryColor;
            var13 = var1.secondaryColor;
            var10 = var3 == var6;
            var1 = null;
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 0;
            var11 = var16[var10];
            var17 = var12.bind(var15)(var11);
            var11 = var17.int2hex;
            var11 = var11.bind(var17)(var6);
            var10 = var16[var10];
            var12 = var12.bind(var15)(var10);
            var10 = var12.int2hex;
            if(!(var3 != var13)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var13;
case 6:
            var10 = var10.bind(var12)(var6);
            var12 = _closure1_slot1;
            var16 = _closure1_slot2;
            var6 = 1;
            var6 = var16[var6];
            var6 = var12.bind(var15)(var6);
            var13 = var6.bind(var15)(var11);
            var12 = var13.mix;
            var6 = 0.5;
            var12 = var12.bind(var13)(var10, var6);
            var6 = var12.hex;
            var12 = var6.bind(var12)();
            var6 = {};
            var13 = _closure1_slot0;
            var8 = 2;
            var8 = var16[var8];
            var13 = var13.bind(var15)(var8);
            var8 = var13.isThemeLight;
            var13 = var8.bind(var13)(var14);
            var8 = 'dark';
            if(!var13) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = 'light';
case 8:
            var6['theme'] = var8;
            var8 = {};
            var8['gradient.start'] = var11;
            var8['gradient.mid'] = var12;
            var8['gradient.end'] = var10;
            var8['gradient.primary'] = var11;
            var8['gradient.secondary'] = var10;
            var6['colors'] = var8;
            var1 = var6;
case 4:
            var5 = var1;
case 2:
            var1 = {};
            var10 = var3 != var4;
            var6 = 1;
            var8 = var6;
            if(var10) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = var9;
case 10:
            var1['contrast'] = var8;
            var8 = var3 != var4;
            if(var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = var7;
case 12:
            var1['saturation'] = var6;
            var1['gradient'] = var5;
            var3 = var3 != var4;
            var1['isProfileTheme'] = var3;
            var1['enabledExperiments'] = var2;
            return var1;
        }
    };
    var3['getSemanticColorContextFromThemeContext'] = var2;
    return var1;
})();
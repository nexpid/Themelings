// app/modules/premium/enhanced_role_colors/EnhancedRoleColorUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/enhanced_role_colors/EnhancedRoleColorUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function extractColorStringsFromServerColors(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = {};
            var2 = var3.primary_color;
            var4 = null;
            var5 = var4 == var2;
            var6 = undefined;
            var2 = undefined;
            if(var5) { _fun0001_ip = 63; continue _fun0001 }
 24:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 0;
            var5 = var8[var5];
            var8 = var7.bind(var6)(var5);
            var7 = var8.int2hex;
            var5 = var3.primary_color;
            var2 = var7.bind(var8)(var5);
 63:
            var1['primaryColor'] = var2;
            var2 = var3.secondary_color;
            var5 = var4 == var2;
            var2 = undefined;
            if(var5) { _fun0001_ip = 122; continue _fun0001 }
 83:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 0;
            var5 = var8[var5];
            var8 = var7.bind(var6)(var5);
            var7 = var8.int2hex;
            var5 = var3.secondary_color;
            var2 = var7.bind(var8)(var5);
 122:
            var1['secondaryColor'] = var2;
            var2 = var3.tertiary_color;
            var4 = var4 == var2;
            var2 = undefined;
            if(var4) { _fun0001_ip = 181; continue _fun0001 }
 142:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 0;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.int2hex;
            var3 = var3.tertiary_color;
            var2 = var4.bind(var5)(var3);
 181:
            var1['tertiaryColor'] = var2;
            return var1;
        }
    };
    var3['extractColorStringsFromServerColors'] = var4;
    var4 = function extractColorStringsFromColors(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var1 = {};
            var2 = var3.primaryColor;
            var4 = null;
            var5 = var4 == var2;
            var6 = undefined;
            var2 = undefined;
            if(var5) { _fun0002_ip = 63; continue _fun0002 }
 24:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 0;
            var5 = var8[var5];
            var8 = var7.bind(var6)(var5);
            var7 = var8.int2hex;
            var5 = var3.primaryColor;
            var2 = var7.bind(var8)(var5);
 63:
            var1['primaryColor'] = var2;
            var2 = var3.secondaryColor;
            var5 = var4 == var2;
            var2 = undefined;
            if(var5) { _fun0002_ip = 122; continue _fun0002 }
 83:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 0;
            var5 = var8[var5];
            var8 = var7.bind(var6)(var5);
            var7 = var8.int2hex;
            var5 = var3.secondaryColor;
            var2 = var7.bind(var8)(var5);
 122:
            var1['secondaryColor'] = var2;
            var2 = var3.tertiaryColor;
            var4 = var4 == var2;
            var2 = undefined;
            if(var4) { _fun0002_ip = 181; continue _fun0002 }
 142:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 0;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.int2hex;
            var3 = var3.tertiaryColor;
            var2 = var4.bind(var5)(var3);
 181:
            var1['tertiaryColor'] = var2;
            return var1;
        }
    };
    var3['extractColorStringsFromColors'] = var4;
    var4 = function getAuthorHasGradientRole(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var4 = null;
            var1 = var4 != var3;
            if(!var1) { _fun0003_ip = 63; continue _fun0003 }
 12:
            var2 = var3.colorStrings;
            var2 = var4 != var2;
            if(!var2) { _fun0003_ip = 41; continue _fun0003 }
 25:
            var5 = var3.colorStrings;
            var5 = var5.primaryColor;
            var2 = var4 != var5;
 41:
            if(!var2) { _fun0003_ip = 60; continue _fun0003 }
 44:
            var3 = var3.colorStrings;
            var3 = var3.secondaryColor;
            var2 = var4 != var3;
 60:
            var1 = var2;
 63:
            return var1;
        }
    };
    var3['getAuthorHasGradientRole'] = var4;
    var2 = function getIsDefaultErc(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var1 = var3.color;
            var6 = 0;
            var1 = var6 === var1;
            var2 = var3.colors;
            var4 = null;
            var2 = var4 != var2;
            if(!var2) { _fun0004_ip = 43; continue _fun0004 }
 28:
            var5 = var3.colors;
            var5 = var5.primary_color;
            var2 = var6 === var5;
 43:
            if(!var2) { _fun0004_ip = 61; continue _fun0004 }
 46:
            var5 = var3.colors;
            var5 = var5.secondary_color;
            var2 = var4 == var5;
 61:
            if(!var2) { _fun0004_ip = 79; continue _fun0004 }
 64:
            var3 = var3.colors;
            var3 = var3.tertiary_color;
            var2 = var4 == var3;
 79:
            if(var1) { _fun0004_ip = 85; continue _fun0004 }
 82:
            var1 = var2;
 85:
            return var1;
        }
    };
    var3['getIsDefaultErc'] = var2;
    return var1;
})();
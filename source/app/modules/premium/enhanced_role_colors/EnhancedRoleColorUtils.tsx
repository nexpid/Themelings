// app/modules/premium/enhanced_role_colors/EnhancedRoleColorUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function getServerColors(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = arg2;
            var5 = null;
            if(!(var5 != var2)) { _fun0001_ip = 122; continue _fun0001 }
 12:
            if(!(var5 != var4)) { _fun0001_ip = 122; continue _fun0001 }
 16:
            var6 = _closure1_slot2;
            var1 = var6.getGuild;
            var1 = var1.bind(var6)(var4);
            var5 = var5 != var1;
            if(!var5) { _fun0001_ip = 66; continue _fun0001 }
 40:
            var7 = var1.features;
            var6 = var7.has;
            var1 = _closure1_slot7;
            var1 = var1.ENHANCED_ROLE_COLORS;
            var5 = var6.bind(var7)(var1);
 66:
            var1 = {'primary_color': null, 'secondary_color': null, 'tertiary_color': null};
            var7 = var2.primary_color;
            var6 = 0;
            if(!(var6 !== var7)) { _fun0001_ip = 96; continue _fun0001 }
 88:
            var6 = var2.primary_color;
            _fun0001_ip = 100; continue _fun0001;
 96:
            var6 = _closure1_slot3;
 100:
            var1['primary_color'] = var6;
            if(var5) { _fun0001_ip = 117; continue _fun0001 }
 109:
            var3 = _closure1_slot8;
            if(!(var4 === var3)) { _fun0001_ip = 120; continue _fun0001 }
 117:
            var1 = var2;
 120:
            return var1;
 122:
            var1 = _closure1_slot6;
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.DEFAULT_ROLE_COLOR;
    var _closure1_slot3 = var8;
    var8 = var5.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot4 = var8;
    var8 = var5.DEFAULT_ROLE_COLOR_STRINGS;
    var _closure1_slot5 = var8;
    var8 = var5.DEFAULT_SERVER_COLORS;
    var _closure1_slot6 = var8;
    var8 = var5.GuildFeatures;
    var _closure1_slot7 = var8;
    var5 = var5.ZERO_STRING_GUILD_ID;
    var _closure1_slot8 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/enhanced_role_colors/EnhancedRoleColorUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getServerColors'] = var4;
    var4 = function extractColorStringsFromServerColors(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot9;
            var7 = undefined;
            var3 = arg1;
            var1 = arg2;
            var4 = var4.bind(var7)(var3, var1);
            var3 = null;
            if(!(var3 != var4)) { _fun0002_ip = 208; continue _fun0002 }
 30:
            var1 = {};
            var6 = var4.primary_color;
            var5 = 0;
            if(!(var5 !== var6)) { _fun0002_ip = 83; continue _fun0002 }
 44:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 2;
            var5 = var8[var5];
            var8 = var6.bind(var7)(var5);
            var6 = var8.int2hex;
            var5 = var4.primary_color;
            var5 = var6.bind(var8)(var5);
            _fun0002_ip = 87; continue _fun0002;
 83:
            var5 = _closure1_slot4;
 87:
            var1['primaryColor'] = var5;
            var5 = var4.secondary_color;
            var6 = var3 == var5;
            var5 = null;
            if(var6) { _fun0002_ip = 144; continue _fun0002 }
 107:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 2;
            var6 = var9[var6];
            var9 = var8.bind(var7)(var6);
            var8 = var9.int2hex;
            var6 = var4.secondary_color;
            var5 = var8.bind(var9)(var6);
 144:
            var1['secondaryColor'] = var5;
            var5 = var4.tertiary_color;
            var5 = var3 == var5;
            var3 = null;
            if(var5) { _fun0002_ip = 201; continue _fun0002 }
 164:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 2;
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.int2hex;
            var4 = var4.tertiary_color;
            var3 = var5.bind(var6)(var4);
 201:
            var1['tertiaryColor'] = var3;
            _fun0002_ip = 212; continue _fun0002;
 208:
            var1 = _closure1_slot5;
 212:
            return var1;
        }
    };
    var3['extractColorStringsFromServerColors'] = var4;
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
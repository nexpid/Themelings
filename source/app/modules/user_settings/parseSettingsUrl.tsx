// app/modules/user_settings/parseSettingsUrl.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function normalizeSection(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 == var3;
            var1 = '';
            if(var2) { _fun0001_ip = 67; continue _fun0001 }
 16:
            var2 = var3.toUpperCase;
            var6 = var2.bind(var3)();
            var5 = var6.replace;
            var4 = _closure1_slot4;
            var3 = '_';
            var5 = var5.bind(var6)(var4, var3);
            var4 = var5.replace;
            var3 = _closure1_slot5;
            var2 = 'AND';
            var1 = var4.bind(var5)(var3, var2);
 67:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot3 = var4;
    var4 = /(-|%20)/g;
    var _closure1_slot4 = var4;
    var4 = /%26/g;
    var _closure1_slot5 = var4;
    var4 = {};
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/parseSettingsUrl.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function parseSettingsUrl(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var8 = arg2;
            var2 = var3.split;
            var1 = '/';
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot2;
            var10 = undefined;
            var1 = 4;
            var3 = var2.bind(var10)(var3, var1);
            var11 = 2;
            var2 = var3[var11];
            var1 = 3;
            var3 = var3[var1];
            var1 = _closure1_slot7;
            var1 = var1.bind(var10)(var2);
            var2 = _closure1_slot6;
            var2 = var2[var1];
            var9 = null;
            if(!(var9 != var2)) { _fun0002_ip = 78; continue _fun0002 }
 75:
            var1 = var2;
 78:
            var2 = _closure1_slot7;
            var3 = var2.bind(var10)(var3);
            var5 = _closure1_slot3;
            var2 = var5.hasOwnProperty;
            var2 = var2.bind(var5)(var1);
            var5 = var1;
            var1 = null;
            if(!var2) { _fun0002_ip = 215; continue _fun0002 }
 110:
            if(!(var9 != var3)) { _fun0002_ip = 142; continue _fun0002 }
 114:
            var2 = '';
            if(!(var2 !== var3)) { _fun0002_ip = 142; continue _fun0002 }
 122:
            var6 = _closure1_slot3;
            var2 = var6.hasOwnProperty;
            var2 = var2.bind(var6)(var3);
            var1 = null;
            if(!var2) { _fun0002_ip = 215; continue _fun0002 }
 142:
            var2 = {};
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var11];
            var7 = var7.bind(var10)(var6);
            var6 = var7.parse;
            if(!(var9 == var8)) { _fun0002_ip = 185; continue _fun0002 }
 171:
            var9 = global;
            var9 = var9.location;
            var8 = var9.search;
 185:
            var6 = var6.bind(var7)(var8);
            var2['params'] = var6;
            var4 = _closure1_slot3;
            var4 = var4[var5];
            var2['section'] = var4;
            var2['subsection'] = var3;
            var1 = var2;
 215:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
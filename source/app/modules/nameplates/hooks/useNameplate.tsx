// app/modules/nameplates/hooks/useNameplate.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.useMemo;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nameplates/hooks/useNameplate.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useNameplate(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var5 = var2.user;
            var _closure2_slot0 = var5;
            var7 = var2.guildId;
            var _closure2_slot1 = var7;
            var10 = var2.location;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 38; continue _fun0001 }
 34:
            var10 = '';
 38:
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 2;
            var3 = var9[var3];
            var8 = var6.bind(var4)(var3);
            var6 = var8.useConfig;
            var3 = {};
            var3['location'] = var10;
            var3 = var6.bind(var8)(var3);
            var6 = var3.enabled;
            _closure2_slot2 = var6;
            var8 = _closure1_slot0;
            var3 = 3;
            var3 = var9[var3];
            var10 = var8.bind(var4)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 63; continue _fun0002 }
 18:
                    var3 = _closure2_slot0;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 63; continue _fun0002 }
 31:
                    var5 = _closure1_slot4;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
 63:
                    return var1;
                }
            };
            var8 = var9.bind(var10)(var8, var3);
            _closure2_slot3 = var8;
            var3 = _closure1_slot3;
            var2 = new Array(4);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 == var1)) { _fun0003_ip = 17; continue _fun0003 }
 13:
                    var1 = undefined;
                    return var1;
 17:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 4;
                    var1 = var5[var1];
                    var8 = undefined;
                    var5 = var4.bind(var8)(var1);
                    var4 = var5.getNameplateData;
                    var1 = _closure2_slot3;
                    var6 = var3 == var1;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 86; continue _fun0003 }
 61:
                    var6 = _closure2_slot3;
                    var6 = var6.collectibles;
                    var7 = var3 == var6;
                    var1 = undefined;
                    if(var7) { _fun0003_ip = 86; continue _fun0003 }
 80:
                    var1 = var6.nameplate;
 86:
                    var1 = var4.bind(var5)(var1);
                    var4 = _closure2_slot1;
                    if(!(var3 != var4)) { _fun0003_ip = 110; continue _fun0003 }
 99:
                    var4 = _closure2_slot2;
                    if(!var4) { _fun0003_ip = 110; continue _fun0003 }
 106:
                    if(!(var3 == var1)) { _fun0003_ip = 120; continue _fun0003 }
 110:
                    var2 = _closure2_slot0;
                    var1 = var2.nameplate;
 120:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useNameplate'] = var2;
    return var1;
})();
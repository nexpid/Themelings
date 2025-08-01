// app/modules/pomelo/useUsernameStatus.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/pomelo/useUsernameStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var10 = arguments[1];
            var8 = arguments[2];
            var6 = arguments[3];
            var _closure2_slot0 = var7;
            var9 = undefined;
            if(!(var10 === var9)) { _fun0001_ip = 26; continue _fun0001 }
 24:
            var10 = true;
 26:
            if(!(var8 === var9)) { _fun0001_ip = 32; continue _fun0001 }
 30:
            var8 = false;
 32:
            if(!(var6 === var9)) { _fun0001_ip = 38; continue _fun0001 }
 36:
            var6 = undefined;
 38:
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var9;
            var _closure2_slot3 = var9;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var4 = 2;
            var3 = var3[var4];
            var5 = var5.bind(var9)(var3);
            var3 = var5.useUsernameLiveCheck;
            var8 = var3.bind(var5)(var7, var10, var8);
            _closure2_slot2 = var8;
            var5 = _closure1_slot3;
            var3 = var5.useState;
            var3 = var3.bind(var5)(var9);
            var1 = _closure1_slot2;
            var4 = var1.bind(var9)(var3, var4);
            var1 = 0;
            var1 = var4[var1];
            var3 = 1;
            var3 = var4[var3];
            _closure2_slot3 = var3;
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = '';
                    if(!(var2 !== var3)) { _fun0002_ip = 54; continue _fun0002 }
 15:
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    if(!(var3 !== var2)) { _fun0002_ip = 54; continue _fun0002 }
 27:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 65; continue _fun0002 }
 37:
                    var4 = _closure2_slot3;
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0002_ip = 65; continue _fun0002;
 54:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var1);
 65:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useUsernameStatus'] = var2;
    return var1;
})();
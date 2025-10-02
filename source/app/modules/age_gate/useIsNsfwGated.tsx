// app/modules/age_gate/useIsNsfwGated.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_gate/useIsNsfwGated.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsNsfwGated(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = var1.nsfw;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 2;
            var3 = var8[var5];
            var6 = undefined;
            var11 = var7.bind(var6)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot3;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot3;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2.nsfwAllowed;
case 2:
                    return var1;
                }
            };
            var9 = var10.bind(var11)(var9, var3);
            var3 = false;
            var3 = var3 === var9;
            var5 = var8[var5];
            var6 = var7.bind(var6)(var5);
            var5 = var6.useStateFromStores;
            var7 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var7;
            var2 = function() {
                var3 = _closure1_slot2;
                var2 = var3.didAgree;
                var1 = _closure2_slot0;
                var1 = var1.guild_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var5.bind(var6)(var4, var2);
            var2 = !var2;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var3;
case 6:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePreviewDisabledGuild(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arg1;
            var _closure2_slot0 = var9;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 3;
            var1 = var7[var4];
            var6 = undefined;
            var11 = var5.bind(var6)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var10.bind(var11)(var8, var1);
            var4 = var7[var4];
            var8 = var5.bind(var6)(var4);
            var7 = var8.useStateFromStores;
            var4 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot5;
                    var2 = var3.get;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 40; continue _fun0002 }
 35:
                    var1 = var2.guild;
 40:
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var5, var4);
            var8 = _closure1_slot3;
            var7 = var8.useEffect;
            var4 = new Array(1);
            var4[0] = var9;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 53; continue _fun0003 }
 13:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchVerificationForm;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var2, var4);
            var2 = null;
            if(!(var2 == var1)) { _fun0001_ip = 182; continue _fun0001 }
 139:
            var4 = var2 != var5;
            var2 = null;
            if(!var4) { _fun0001_ip = 179; continue _fun0001 }
 148:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 5;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.fromVerificationGateGuild;
            var2 = var3.bind(var4)(var5);
 179:
            var1 = var2;
 182:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
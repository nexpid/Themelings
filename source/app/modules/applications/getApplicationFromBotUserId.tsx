// app/modules/applications/getApplicationFromBotUserId.tsx
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/getApplicationFromBotUserId.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGetApplicationFromBotUserId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 2;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.useStateFromStores;
            var6 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var4 = null;
                    var1 = undefined;
                    if(!(var4 !== var3)) { _fun0002_ip = 68; continue _fun0002 }
 15:
                    var6 = _closure1_slot2;
                    var5 = var6.getUserProfile;
                    var8 = _closure2_slot0;
                    if(!(var4 == var8)) { _fun0002_ip = 42; continue _fun0002 }
 36:
                    var3 = _closure1_slot3;
                    _fun0002_ip = 46; continue _fun0002;
 42:
                    var3 = _closure2_slot0;
 46:
                    var3 = var5.bind(var6)(var3);
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 65; continue _fun0002 }
 60:
                    var2 = var3.application;
 65:
                    var1 = var2;
 68:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            var3 = null;
            var3 = var3 != var2;
            if(!var3) { _fun0001_ip = 76; continue _fun0001 }
 73:
            var1 = var2;
 76:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
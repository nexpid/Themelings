// app/modules/threads/native/useCreateThreadViewProps.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/native/useCreateThreadViewProps.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCreateThreadViewProps(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 1;
            var3 = var7[var3];
            var6 = undefined;
            var4 = var4.bind(var6)(var3);
            var3 = arg1;
            var4 = var4.bind(var6)(var3);
            var _closure2_slot0 = var4;
            var5 = _closure1_slot0;
            var3 = 2;
            var3 = var7[var3];
            var6 = var5.bind(var6)(var3);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot3;
                    var2 = var3.getChannel;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure2_slot0;
                    var1 = var4.parentChannelId;
case 2:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3, var1, var2);
            var5 = null;
            var2 = var5 == var4;
            var1 = null;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var5 == var3;
            var1 = null;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var2 = {};
            var2['threadSettingsDraft'] = var4;
            var2['parentChannel'] = var3;
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
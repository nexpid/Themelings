// app/modules/window/native/AppEntryKeyContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var5 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var4);
    var1 = 0;
    var5 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var5 = var4.bind(var1)(var5);
    var _closure1_slot0 = var5;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var8 = var4.bind(var1)(var7);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var11 = 'AppEntryKeyContext';
    var12 = var7;
    var4 = new var12[var8](var11, var10);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot1 = var4;
    var4 = var5.createContext;
    var4 = var4.bind(var5)(var1);
    var _closure1_slot2 = var4;
    var5 = false;
    var _closure1_slot3 = var5;
    var5 = 2;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/window/native/AppEntryKeyContext.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = 'main';
    var3['DEFAULT_APP_ENTRY_KEY'] = var5;
    var3['AppEntryKeyContext'] = var4;
    var2 = function useAppEntryKey() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot0;
            var3 = var5.useContext;
            var2 = _closure1_slot2;
            var2 = var3.bind(var5)(var2);
            var _closure2_slot0 = var2;
            var4 = var5.useEffect;
            var3 = new Array(1);
            var3[0] = var2;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var1 !== var2;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure1_slot3;
case 2:
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = true;
                    _closure1_slot3 = var3;
                    var4 = _closure1_slot1;
                    var3 = var4.warn;
                    var2 = 'AppEntryKey context was not provided; falling back to default entry key "main".';
                    var2 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var1, var3);
            var1 = null;
            var3 = var1 != var2;
            var1 = 'main';
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['useAppEntryKey'] = var2;
    return var1;
})();
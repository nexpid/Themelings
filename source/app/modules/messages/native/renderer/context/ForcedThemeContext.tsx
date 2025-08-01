// app/modules/messages/native/renderer/context/ForcedThemeContext.tsx
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
    var7 = var4.bind(var1)(var5);
    var _closure1_slot0 = var7;
    var4 = 1;
    var5 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot1 = var4;
    var5 = var7.createContext;
    var4 = null;
    var4 = var5.bind(var7)(var4);
    var _closure1_slot2 = var4;
    var5 = 2;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/native/renderer/context/ForcedThemeContext.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function useMessageRendererTheme() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = var4.useContext;
            var1 = _closure1_slot2;
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 == var1)) { _fun0001_ip = 37; continue _fun0001 }
 28:
            var2 = _closure1_slot1;
            var1 = var2.theme;
 37:
            return var1;
        }
    };
    var3['useMessageRendererTheme'] = var2;
    return var1;
})();
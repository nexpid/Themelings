// app/modules/user_settings/hooks/native/useScrollToSection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/hooks/native/useScrollToSection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useScrollToSection(arg1, arg2) {
        var6 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var7;
        var5 = _closure1_slot0;
        var3 = var5.useRef;
        var1 = false;
        var1 = var3.bind(var5)(var1);
        var _closure2_slot2 = var1;
        var1 = {};
        var4 = var5.useCallback;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var3 = _closure3_slot0;
                    var2 = _closure2_slot1;
                    var2 = var3 !== var2;
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure2_slot2;
                    var2 = var3.current;
case 2:
                    if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = _closure2_slot2;
                    var4 = true;
                    var2['current'] = var4;
                    var1 = _closure2_slot0;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
                    var2 = var3.scrollTo;
                    var1 = {};
                    var5 = arg1;
                    var5 = var5.nativeEvent;
                    var5 = var5.layout;
                    var5 = var5.y;
                    var1['y'] = var5;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['createSectionLayoutHandler'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
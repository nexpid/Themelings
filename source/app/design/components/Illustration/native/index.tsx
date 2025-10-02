// app/design/components/Illustration/native/index.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Illustration/native/index.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getIllustrationSource(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var1 = 'light';
            if(!(var1 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'darker';
            if(!(var1 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 'midnight';
            var3 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var2.midnight;
            var4 = null;
            if(!(var4 == var1)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var2.darker;
case 8:
            var3 = var1;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var1 = var2.darker;
            var4 = null;
            if(!(var4 == var1)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var2.midnight;
case 10:
            var3 = var1;
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var3 = var2.light;
case 6:
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = var2.dark;
            var1 = var1.bind(var2)();
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var2 = undefined;
            var1 = var3.bind(var2)();
case 14:
            return var1;
        }
    };
    var3['getIllustrationSource'] = var4;
    var2 = function useIllustrationSource(arg1) {
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 0;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = var2.useThemeContext;
        var1 = var1.bind(var2)();
        var2 = var1.theme;
        var1 = arg1;
        var1 = var1.bind(var3)(var2);
        return var1;
    };
    var3['useIllustrationSource'] = var2;
    return var1;
})();
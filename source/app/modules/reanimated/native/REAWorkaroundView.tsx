// app/modules/reanimated/native/REAWorkaroundView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
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
        var8 = var4.forwardRef;
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot0 = var4;
        var4 = 2;
        var9 = var6[var4];
        var11 = var7.bind(var1)(var9);
        var10 = var11.createAnimatedComponent;
        var9 = 3;
        var9 = var6[var9];
        var9 = var7.bind(var1)(var9);
        var9 = var10.bind(var11)(var9);
        var _closure1_slot1 = var9;
        var2 = function(arg1, arg2) {
            var1 = arg1;
            var3 = var1.entering;
            var2 = null;
            var5 = var2 != var3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = {};
            var7 = var2;
            var6 = var1;
            var1 = copyDataProperties(var7, var6);
            var1 = 'hasEnteringAnimation';
            var2[var1] = var5;
            var5 = arg2;
            var1 = 'ref';
            var2[var1] = var5;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var2 = var8.bind(var1)(var2);
        var8 = 'REAWorkaroundView';
        var2['displayName'] = var8;
        var8 = 4;
        var8 = var6[var8];
        var9 = var5.bind(var1)(var8);
        var8 = var9.isFabric;
        var8 = var8.bind(var9)();
        if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = var6[var4];
        var4 = var7.bind(var1)(var4);
        var2 = var4.View;
case 2:
        var4 = 5;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/reanimated/native/REAWorkaroundView.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();
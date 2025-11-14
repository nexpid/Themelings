// app/modules/checkpoint/useCheckpointSlidesToRender.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.CHECKPOINT_STEPS_TO_SLIDE;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/checkpoint/useCheckpointSlidesToRender.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCheckpointSlidesToRender(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var2 = var5.length;
            var3 = 0;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.length;
            var2 = 1;
            if(!(var2 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = global;
            var2 = var2.Set;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var9 = var4;
            var2 = new var9[var2](var8);
            var2 = var2 instanceof Object ? var2 : var4;
            var _closure2_slot0 = var2;
            var4 = var5.forEach;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.add;
                var4 = _closure1_slot0;
                var1 = arg1;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = var4.bind(var5)(var1);
            var1 = new Array(0);
            var8 = var1;
            var7 = var2;
            var6 = 0;
            var2 = arraySpread(var8, var7, var6);
            return var1;
case 2:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
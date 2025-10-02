// app/modules/video_calls/useHasVideoPermission.tsx
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/useHasVideoPermission.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useHasVideoPermission(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot2;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot3;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot0;
                var2 = var3.isPrivate;
                var2 = var2.bind(var3)();
                if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var5 = 3;
                var6 = var6[var5];
                var5 = undefined;
                var8 = var7.bind(var5)(var6);
                var7 = var8.canStreamInChannel;
                var12 = _closure2_slot0;
                var11 = _closure1_slot2;
                var10 = _closure1_slot3;
                var9 = false;
                var13 = var8;
                var2 = var13[var7](var12, var11, var10, var9, var8);
case 4:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var2 = function getVideoPermission(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var1 = var7.isPrivate;
            var1 = var1.bind(var7)();
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 3:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 3;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.canStreamInChannel;
            var10 = _closure1_slot2;
            var9 = _closure1_slot3;
            var8 = false;
            var12 = var6;
            var11 = var7;
            var1 = var12[var5](var11, var10, var9, var8, var7);
case 6:
            return var1;
        }
    };
    var3['getVideoPermission'] = var2;
    return var1;
})();
// app/modules/checkpoint/native/useCheckpointSound.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.useRef;
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/checkpoint/native/useCheckpointSound.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCheckpointSound(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 2;
            var2 = var7[var2];
            var4 = undefined;
            var10 = var6.bind(var4)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var1 = _closure1_slot3;
                var1 = var1.isMuted;
                return var1;
            };
            var2 = var9.bind(var10)(var5, var2);
            var _closure2_slot1 = var2;
            var3 = _closure1_slot2;
            var5 = 3;
            var5 = var7[var5];
            var7 = var6.bind(var4)(var5);
            var6 = var7.createSound;
            var5 = 1;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = 0;
case 2:
            var2 = 'vibing_wumpus';
            var2 = var6.bind(var7)(var8, var2, var5);
            var2 = var3.bind(var4)(var2);
            var _closure2_slot2 = var2;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var3 = var1.current;
                    var1 = var3.stop;
                    var1 = var1.bind(var3)();
                    var5 = _closure2_slot2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 3;
                    var3 = var3[var1];
                    var1 = undefined;
                    var9 = var4.bind(var1)(var3);
                    var8 = var9.createSound;
                    var7 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var4 = 1;
                    var6 = var4;
                    if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = 0;
case 4:
                    var3 = 'vibing_wumpus';
                    var3 = var8.bind(var9)(var7, var3, var6);
                    var5['current'] = var3;
                    var3 = _closure2_slot2;
                    var3 = var3.current;
                    var5 = _closure2_slot1;
                    if(!var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = 0;
case 6:
                    var3['volume'] = var4;
                    var2 = _closure2_slot2;
                    var3 = var2.current;
                    var2 = var3.play;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
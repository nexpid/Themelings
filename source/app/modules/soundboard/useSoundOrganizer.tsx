// app/modules/soundboard/useSoundOrganizer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var5;
    var4 = function sortSoundsOldestToNewestCreationDate(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arguments[1];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = true;
case 2:
            var6 = new Array(0);
            var8 = arg1;
            var7 = 0;
            var9 = var6;
            var1 = arraySpread(var9, var8, var7);
            var3 = var6.sort;
            var1 = function(arg1, arg2) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.compare;
                var1 = arg1;
                var2 = var1.soundId;
                var1 = arg2;
                var1 = var1.soundId;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var3.bind(var6)(var1);
            var1 = var3;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = function _positionUnavailableSoundsAtEnd(arg1) {
                var3 = new Array(0);
                var5 = arg1;
                var4 = 0;
                var6 = var3;
                var1 = arraySpread(var6, var5, var4);
                var2 = var3.sort;
                var1 = function(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = arg1;
                        var3 = arg2;
                        var1 = var2.available;
                        if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var4 = var3.available;
                        var1 = -1;
                        if(!var4) { _fun0002_ip = 8; continue _fun0002 }
case 6:
                        var5 = var2.available;
                        var2 = 0;
                        if(var5) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                        var3 = var3.available;
                        var2 = 0;
                        if(!var3) { _fun0002_ip = 9; continue _fun0002 }
case 11:
                        var2 = 1;
case 9:
                        var1 = var2;
case 8:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var4)(var3);
case 4:
            return var1;
        }
    };
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/soundboard/useSoundOrganizer.tsx';
    var5 = var6.bind(var7)(var5);
    var3['sortSoundsOldestToNewestCreationDate'] = var4;
    var2 = function useSoundOrganizer() {
        var1 = _closure1_slot2;
        return var1;
    };
    var3['useSoundOrganizer'] = var2;
    return var1;
})();
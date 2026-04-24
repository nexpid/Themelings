// app/modules/game_profile/hooks/useOpenGameProfileModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 2;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/hooks/useOpenGameProfileModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useOpenGameProfileModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = arguments[1];
            var _closure2_slot0 = var3;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
case 2:
            var1 = var1.onOpened;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 0;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)(var3);
            _closure2_slot2 = var1;
            var5 = var1.gameId;
            _closure2_slot3 = var5;
            var3 = var1.shouldOpenGameProfile;
            var1 = undefined;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = null;
            var3 = var3 != var5;
            var1 = undefined;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var1 = var2.stopPropagation;
                    var1 = var1.bind(var2)();
case 7:
                    if(!(var4 != var2)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var1 = var2.preventDefault;
                    var1 = var1.bind(var2)();
case 9:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.openGameProfileModal;
                    var3 = {};
                    var9 = _closure2_slot0;
                    var10 = var3;
                    var7 = copyDataProperties(var10, var9);
                    var8 = _closure2_slot3;
                    var7 = 'gameId';
                    var3[6] = var8;
                    var8 = _closure2_slot2;
                    var7 = 'gameProfileModalChecks';
                    var3[6] = var8;
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure2_slot1;
                    if(!(var4 != var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
case 11:
                    return var1;
                }
            };
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
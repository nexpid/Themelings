// app/modules/game_profile/hooks/useOpenGameProfileModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/hooks/useOpenGameProfileModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useOpenGameProfileModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var1 = arguments[1];
            var _closure2_slot0 = var6;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
case 2:
            var1 = var1.onOpened;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var3 = var6.applicationId;
            _closure2_slot2 = var3;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 1;
            var5 = var7[var5];
            var8 = var8.bind(var4)(var5);
            var5 = var8.useGetOrFetchApplicationBatched;
            var10 = var5.bind(var8)(var3);
            _closure2_slot3 = var10;
            var9 = _closure1_slot3;
            var8 = var9.useMemo;
            var5 = new Array(2);
            var5[0] = var10;
            var5[1] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 2;
                    var1 = var5[var1];
                    var5 = undefined;
                    var6 = var4.bind(var5)(var1);
                    var4 = var6.isRobloxSubgameApplication;
                    var1 = _closure2_slot3;
                    var1 = var4.bind(var6)(var1);
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = _closure2_slot2;
                    _fun0002_ip = 8; continue _fun0002;
case 6:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 3;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var1 = var3.ROBLOX_APPLICATION_ID;
case 8:
                    _fun0002_ip = 9; continue _fun0002;
case 4:
                    var1 = _closure2_slot2;
case 9:
                    return var1;
                }
            };
            var5 = var8.bind(var9)(var3, var5);
            _closure2_slot4 = var5;
            var3 = _closure1_slot1;
            var1 = 4;
            var1 = var7[var1];
            var3 = var3.bind(var4)(var1);
            var1 = {};
            var12 = var1;
            var11 = var6;
            var6 = copyDataProperties(var12, var11);
            var6 = 'applicationId';
            var1[var6] = var5;
            var1 = var3.bind(var4)(var1);
            _closure2_slot5 = var1;
            var3 = var1.shouldOpenGameProfile;
            var1 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = null;
            var3 = var3 != var5;
            var1 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.stopPropagation;
                    var1 = var1.bind(var2)();
                    var1 = var2.preventDefault;
                    var1 = var1.bind(var2)();
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.openGameProfileModal;
                    var3 = {};
                    var8 = _closure2_slot0;
                    var9 = var3;
                    var6 = copyDataProperties(var9, var8);
                    var7 = _closure2_slot4;
                    var6 = 'applicationId';
                    var3[var6] = var7;
                    var7 = _closure2_slot5;
                    var6 = 'gameProfileModalChecks';
                    var3[var6] = var7;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
case 13:
                    return var1;
                }
            };
case 10:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
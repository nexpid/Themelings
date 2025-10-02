// app/utils/LibraryApplicationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function convertToTransitionState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = null;
            var4 = var2 == var3;
            var1 = null;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var3.type;
            var5 = _closure1_slot6;
            var5 = var5.INSTALLING;
            if(!(var6 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var3.type;
            var5 = _closure1_slot6;
            var5 = var5.UPDATING;
            if(!(var6 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var5 = var3.type;
            var4 = _closure1_slot6;
            var4 = var4.UNINSTALLING;
            var2 = null;
            if(!(var5 === var4)) { _fun0001_ip = 7; continue _fun0001 }
case 4:
            var2 = var3;
case 7:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.LibraryApplicationFlags;
    var _closure1_slot5 = var8;
    var8 = var5.LocalDispatchApplicationStates;
    var _closure1_slot6 = var8;
    var5 = var5.StatusTypes;
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/LibraryApplicationUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getComboId(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var3 = arg1;
        var2 = ':';
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var3['getComboId'] = var5;
    var5 = function convertComboId(arg1) {
        var3 = arg1;
        var2 = var3.split;
        var1 = ':';
        var4 = var2.bind(var3)(var1);
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = 2;
        var3 = var3.bind(var2)(var4, var1);
        var1 = {};
        var2 = 0;
        var2 = var3[var2];
        var1['applicationId'] = var2;
        var2 = 1;
        var2 = var3[var2];
        var1['branchId'] = var2;
        return var1;
    };
    var3['convertComboId'] = var5;
    var5 = function shouldShareApplicationActivity(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg2;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 4;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var3 = var1.ShowCurrentGame;
            var1 = var3.getSetting;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var6];
            var1 = var3.bind(var5)(var1);
            var3 = var1.StatusSetting;
            var1 = var3.getSetting;
            var3 = var1.bind(var3)();
            var1 = _closure1_slot7;
            var1 = var1.INVISIBLE;
            if(!(var3 !== var1)) { _fun0002_ip = 8; continue _fun0002 }
case 10:
            var3 = var4.getActiveLibraryApplication;
            var1 = arg1;
            var4 = var3.bind(var4)(var1);
            var1 = null;
            var1 = var1 == var4;
            if(var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var3 = var4.hasFlag;
            var2 = _closure1_slot5;
            var2 = var2.PRIVATE;
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
case 11:
            return var1;
case 8:
            var1 = false;
            return var1;
        }
    };
    var3['shouldShareApplicationActivity'] = var5;
    var5 = function calculateProgressPercentage(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg2;
            var3 = 100;
            var2 = 0;
            var1 = var3;
            if(!(var2 !== var4)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var2 = arg1;
            var2 = var2 / var4;
            var1 = var2 * var3;
case 13:
            return var1;
        }
    };
    var3['calculateProgressPercentage'] = var5;
    var5 = function shouldShowGameInLibrary(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg2;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var2 = arg3;
            var2 = var2.enabled;
            var2 = !var2;
            if(var2) { _fun0004_ip = 17; continue _fun0004 }
case 13:
            var5 = var4.hasFlag;
            var3 = _closure1_slot5;
            var3 = var3.PRIVATE;
            var3 = var5.bind(var4)(var3);
            var2 = !var3;
case 17:
            if(!var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var3 = var4.isHidden;
            var3 = var3.bind(var4)();
            var2 = !var3;
case 18:
            var1 = var2;
case 15:
            return var1;
        }
    };
    var3['shouldShowGameInLibrary'] = var5;
    var3['convertToTransitionState'] = var4;
    var4 = function getCombinedProgress(arg1) {
        var4 = arg1;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var5 = arg2;
                var1 = _closure1_slot8;
                var6 = undefined;
                var3 = var1.bind(var6)(var5);
                var7 = null;
                var1 = var4;
                if(!(var7 != var3)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                var5 = var5.type;
                var2 = _closure1_slot6;
                var2 = var2.UP_TO_DATE;
                var1 = var4;
                if(!(var5 !== var2)) { _fun0005_ip = 20; continue _fun0005 }
case 22:
                var2 = {};
                var8 = var4.total;
                var5 = global;
                var9 = var5.Number;
                var7 = var3.total;
                var7 = var9.bind(var6)(var7);
                var7 = var8 + var7;
                var2['total'] = var7;
                var4 = var4.progress;
                var5 = var5.Number;
                var3 = var3.progress;
                var3 = var5.bind(var6)(var3);
                var3 = var4 + var3;
                var2['progress'] = var3;
                var1 = var2;
case 20:
                return var1;
            }
        };
        var1 = {'total': 0, 'progress': 0};
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getCombinedProgress'] = var4;
    var2 = function isUserEntitledToLibraryApplication(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var1 = var5.isDiscordApplication;
            var1 = var1.bind(var5)();
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0006_ip = 19; continue _fun0006 }
case 23:
            var4 = var5.isEntitled;
            var6 = _closure1_slot3;
            var3 = var6.getCurrentUser;
            var3 = var3.bind(var6)();
            var2 = _closure1_slot4;
            var1 = var4.bind(var5)(var3, var2);
case 19:
            return var1;
        }
    };
    var3['isUserEntitledToLibraryApplication'] = var2;
    return var1;
})();
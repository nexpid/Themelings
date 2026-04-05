// app/modules/experiments/apex/ApexExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var2 = function getUnitId(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = 'guild';
            if(!(var1 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'user';
            if(!(var1 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 'installation';
            if(!(var1 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.assertNever;
            var2 = var2.bind(var3)(var4);
            return var1;
case 6:
            var2 = _closure1_slot4;
            var1 = var2.getInstallationForTracking;
            var5 = var1.bind(var2)();
            var1 = null;
            var3 = var1 == var5;
            var2 = undefined;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var5.split;
            var3 = '.';
            var4 = var4.bind(var5)(var3);
            var3 = 0;
            var2 = var4[var3];
case 8:
            var3 = var1 != var2;
            var1 = '';
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var2;
case 10:
            return var1;
case 4:
            var2 = _closure1_slot4;
            var1 = var2.getId;
            var1 = var1.bind(var2)();
            return var1;
case 2:
            var1 = arg2;
            var1 = var1.guildId;
            return var1;
        }
    };
    var _closure1_slot6 = var2;
    var1 = function useUnitId(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var3 = undefined;
            var7 = var4.bind(var3)(var1);
            var5 = var7.useStateFromStoresArray;
            var1 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var1 = var3.getId;
                var3 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var3;
                var3 = _closure1_slot4;
                var2 = var3.getInstallationForTracking;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var5 = var5.bind(var7)(var4, var1);
            var4 = _closure1_slot3;
            var1 = 2;
            var7 = var4.bind(var3)(var5, var1);
            var5 = 0;
            var1 = var7[var5];
            var4 = 1;
            var7 = var7[var4];
            var4 = 'guild';
            if(!(var4 !== var6)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4 = 'user';
            if(!(var4 !== var6)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var4 = 'installation';
            if(!(var4 !== var6)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 4;
            var2 = var8[var2];
            var4 = var4.bind(var3)(var2);
            var2 = var4.assertNever;
            var2 = var2.bind(var4)(var6);
            return var3;
case 16:
            var2 = null;
            var4 = var2 == var7;
            var3 = undefined;
            if(var4) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var6 = var7.split;
            var4 = '.';
            var4 = var6.bind(var7)(var4);
            var3 = var4[var5];
case 18:
            var4 = var2 != var3;
            var2 = '';
            if(!var4) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var2 = var3;
case 20:
            return var2;
case 14:
            return var1;
case 12:
            var1 = arg2;
            var1 = var1.guildId;
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 6;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/experiments/apex/ApexExperiment.tsx';
    var7 = var8.bind(var9)(var7);
    var4 = function createApexExperiment(arg1) {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 3;
        var2 = var4[var2];
        var6 = undefined;
        var5 = var3.bind(var6)(var2);
        var9 = _closure1_slot5;
        var8 = _closure1_slot6;
        var7 = _closure1_slot7;
        var10 = arg1;
        var11 = undefined;
        var1 = var11[var5](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['default'] = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApexExperiment;
    var3['ApexExperiment'] = var4;
    var3['getUnitId'] = var2;
    return var1;
})();
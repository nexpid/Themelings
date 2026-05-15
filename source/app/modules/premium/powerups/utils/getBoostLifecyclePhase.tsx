// app/modules/premium/powerups/utils/getBoostLifecyclePhase.tsx
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
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/utils/getBoostLifecyclePhase.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 3;
    var3['BOOST_EXPIRING_DISPLAY_WINDOW_DAYS'] = var4;
    var4 = function getBoostLifecyclePhase(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var2 = var3.ended;
            var6 = 'expired';
            var1 = var6;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.endsAt;
            var5 = null;
            if(!(var5 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var3.endsAt;
            var2 = var7.getTime;
            var2 = var2.bind(var7)();
            var2 = var2 <= var4;
            var1 = var6;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = var3.endsAt;
            var6 = var5 != var2;
            var5 = 'gave';
            var2 = var5;
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var3.endsAt;
            var3 = var6.getTime;
            var3 = var3.bind(var6)();
            var4 = var3 - var4;
            var3 = 259200000;
            var2 = var5;
            if(!(var4 <= var3)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var2 = 'expiring';
case 6:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['getBoostLifecyclePhase'] = var4;
    var2 = function getBoostLifecycleTimestamp(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var7 = var1.endsAt;
            var2 = null;
            var6 = var2 == var7;
            var4 = undefined;
            var3 = undefined;
            if(var6) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var6 = var7.getTime;
            var3 = var6.bind(var7)();
case 9:
            if(!(var2 == var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 0;
            var2 = var7[var2];
            var7 = var6.bind(var4)(var2);
            var6 = var7.extractTimestamp;
            var2 = var1.id;
            var3 = var6.bind(var7)(var2);
case 11:
            var2 = 'gave';
            if(!(var2 !== var5)) { _fun0002_ip = 6; continue _fun0002 }
case 13:
            var2 = 'expiring';
            if(!(var2 !== var5)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var2 = 'expired';
            if(!(var2 !== var5)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            return var4;
case 16:
            return var3;
case 14:
            var2 = 259200000;
            var2 = var3 - var2;
            return var2;
case 6:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 0;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.extractTimestamp;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getBoostLifecycleTimestamp'] = var2;
    return var1;
})();
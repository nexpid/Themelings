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
    var4 = 259200000;
    var3['BOOST_EXPIRING_DISPLAY_WINDOW_MS'] = var4;
    var4 = function getBoostLifecycleInfo(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var1 = var3.ended;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.endsAt;
            var4 = null;
            if(!(var4 != var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var3.endsAt;
            var1 = var5.getTime;
            var1 = var1.bind(var5)();
            if(!(!(var1 <= var2))) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var3.endsAt;
            if(!(var4 != var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var3.endsAt;
            var1 = var4.getTime;
            var1 = var1.bind(var4)();
            var2 = var1 - var2;
            var1 = 259200000;
            if(!(!(var2 <= var1))) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var1 = {};
            var2 = 'gave';
            var1['phase'] = var2;
            _fun0001_ip = 9; continue _fun0001;
case 8:
            var2 = {};
            var4 = 'expiring';
            var2['phase'] = var4;
            var3 = var3.endsAt;
            var2['endsAt'] = var3;
            var1 = var2;
case 9:
            _fun0001_ip = 10; continue _fun0001;
case 2:
            var2 = {};
            var3 = 'expired';
            var2['phase'] = var3;
            var1 = var2;
case 10:
            return var1;
        }
    };
    var3['getBoostLifecycleInfo'] = var4;
    var2 = function getBoostLifecycleTimestamp(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            var4 = var2.phase;
            var3 = 'gave';
            if(!(var3 !== var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var3 = 'expiring';
            if(!(var3 !== var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var3 = 'expired';
            if(!(var3 !== var4)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = undefined;
            return var3;
case 15:
            var7 = var1.endsAt;
            var4 = null;
            var5 = var4 == var7;
            var6 = undefined;
            var3 = undefined;
            if(var5) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var5 = var7.getTime;
            var3 = var5.bind(var7)();
case 17:
            if(!(var4 == var3)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 0;
            var4 = var7[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.extractTimestamp;
            var4 = var1.id;
            var3 = var5.bind(var6)(var4);
case 19:
            return var3;
case 13:
            var3 = var2.endsAt;
            var2 = var3.getTime;
            var3 = var2.bind(var3)();
            var2 = 259200000;
            var2 = var3 - var2;
            return var2;
case 11:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 0;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.extractTimestamp;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getBoostLifecycleTimestamp'] = var2;
    return var1;
})();
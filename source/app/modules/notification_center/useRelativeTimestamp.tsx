// app/modules/notification_center/useRelativeTimestamp.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notification_center/useRelativeTimestamp.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRelativeTimestamp(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.timestamp;
            var _closure2_slot0 = var7;
            var6 = var1.abbreviated;
            var8 = undefined;
            if(!(var6 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = true;
case 2:
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var8;
            var5 = _closure1_slot4;
            var4 = var5.useState;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getRelativeTimestamp;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = _closure1_slot3;
            var1 = 2;
            var4 = var3.bind(var8)(var4, var1);
            var1 = 0;
            var1 = var4[var1];
            var3 = 1;
            var3 = var4[var3];
            _closure2_slot2 = var3;
            var4 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 2;
                    var7 = var6[var1];
                    var1 = undefined;
                    var9 = var8.bind(var1)(var7);
                    var8 = var9.getRelativeTimestamp;
                    var7 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var3 = var8.bind(var9)(var7, var3);
                    var3 = var4.bind(var1)(var3);
                    var4 = global;
                    var8 = var4.Date;
                    var3 = var8.now;
                    var3 = var3.bind(var8)();
                    var3 = var3 - var7;
                    var7 = _closure1_slot1;
                    var8 = 3;
                    var6 = var6[var8];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.Millis;
                    var6 = var6.DAY;
                    if(!(!(var3 > var6))) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.Millis;
                    var6 = var6.HOUR;
                    if(!(!(var3 >= var6))) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.Millis;
                    var6 = var6.MINUTE;
                    _fun0002_ip = 8; continue _fun0002;
case 6:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.Millis;
                    var6 = var5.HOUR;
case 8:
                    var5 = var4.setInterval;
                    var3 = var3 % var6;
                    var4 = var6 - var3;
                    var3 = function() {
                        var3 = _closure2_slot2;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 2;
                        var4 = var4[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.getRelativeTimestamp;
                        var4 = _closure2_slot0;
                        var2 = _closure2_slot1;
                        var2 = var5.bind(var6)(var4, var2);
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3 = var5.bind(var1)(var3, var6, var4);
                    var _closure3_slot0 = var3;
                    var2 = function() {
                        var1 = global;
                        var3 = var1.clearInterval;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var2;
case 4:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useRelativeTimestamp'] = var2;
    return var1;
})();
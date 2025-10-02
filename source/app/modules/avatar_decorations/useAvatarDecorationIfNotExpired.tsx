// app/modules/avatar_decorations/useAvatarDecorationIfNotExpired.tsx
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EPHEMERAL_COLLECTIBLE_EXPIRY_GRACE_PERIOD_IN_MS;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/avatar_decorations/useAvatarDecorationIfNotExpired.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAvatarDecorationIfNotExpired(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var7 = _closure1_slot3;
            var5 = var7.useState;
            var3 = false;
            var6 = var5.bind(var7)(var3);
            var5 = _closure1_slot2;
            var1 = undefined;
            var3 = 2;
            var6 = var5.bind(var1)(var6, var3);
            var3 = 0;
            var3 = var6[var3];
            var _closure2_slot1 = var3;
            var5 = 1;
            var5 = var6[var5];
            var _closure2_slot2 = var5;
            var6 = var7.useRef;
            var5 = null;
            var5 = var6.bind(var7)(var5);
            var _closure2_slot3 = var5;
            var8 = var7.useEffect;
            var6 = new Array(1);
            var6[0] = var2;
            var5 = function() {
                var3 = function maybeScheduleExpirationCheck() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var3 = null;
                        if(!(var3 != var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var4 = _closure2_slot0;
                        var2 = 'expiresAt';
                        var2 = var2 in var4;
                        if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                        var2 = _closure2_slot0;
                        var2 = var2.expiresAt;
                        if(!(var3 == var2)) { _fun0002_ip = 5; continue _fun0002 }
case 2:
                        var4 = _closure2_slot2;
                        var3 = undefined;
                        var2 = false;
                        var2 = var4.bind(var3)(var2);
                        _fun0002_ip = 6; continue _fun0002;
case 5:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var3 = 3;
                        var3 = var5[var3];
                        var5 = undefined;
                        var6 = var4.bind(var5)(var3);
                        var4 = var6.isAvatarDecorationExpired;
                        var3 = _closure2_slot0;
                        var4 = var4.bind(var6)(var3);
                        var6 = _closure2_slot2;
                        var6 = var6.bind(var5)(var4);
                        var6 = var3.expiresAt;
                        var3 = 1000;
                        var6 = var3 * var6;
                        var3 = _closure1_slot4;
                        var7 = var6 + var3;
                        var3 = global;
                        var8 = var3.Date;
                        var6 = var8.now;
                        var6 = var6.bind(var8)();
                        var7 = var7 - var6;
                        if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var4 = 0;
                        if(!(var7 > var4)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 4;
                        var2 = var6[var2];
                        var2 = var4.bind(var5)(var2);
                        var2 = var2.Timeout;
                        var4 = var2.prototype;
                        var4 = Object.create(var4, {constructor: {value: var2}});
                        var11 = var4;
                        var2 = new var11[var2](var10);
                        var2 = var2 instanceof Object ? var2 : var4;
                        var5 = var2.start;
                        var6 = var3.Math;
                        var4 = var6.min;
                        var3 = 2147483647;
                        var4 = var4.bind(var6)(var3, var7);
                        var3 = function() {
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var2 = var2.bind(var1)();
                            return var1;
                        };
                        var3 = var5.bind(var2)(var4, var3);
                        var1 = _closure2_slot3;
                        var1['current'] = var2;
case 6:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot0 = var3;
                var2 = undefined;
                var2 = var3.bind(var2)();
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = _closure2_slot3;
                        var3 = var1.current;
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var2 = var3.stop;
                        var1 = var2.bind(var3)();
case 9:
                        return var1;
                    }
                };
                return var1;
            };
            var5 = var8.bind(var7)(var5, var6);
            var6 = var7.useEffect;
            var5 = new Array(1);
            var5[0] = var3;
            var4 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var1 = _closure2_slot3;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 11; continue _fun0004 }
case 13:
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
case 11:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4, var5);
            if(var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = var2;
case 14:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
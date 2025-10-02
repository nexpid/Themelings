// app/modules/activities/utils/findActivityWithMostParticipants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/findActivityWithMostParticipants.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function findActivityWithMostParticipants(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var5 = var4.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 1;
            if(!(var2 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var4.reduce;
            var5 = var4[var3];
            var2 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var2 = arg2;
                    var3 = var1.userIds;
                    var4 = var3.size;
                    var3 = var2.userIds;
                    var3 = var3.size;
                    if(!(var4 < var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = var2;
case 6:
                    return var1;
                }
            };
            var2 = var6.bind(var4)(var2, var5);
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var2 = var4[var3];
case 8:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function findActivityWithMostNonBlockedOrIgnoredParticipants(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var4 = var2.length;
            var1 = 0;
            if(!(var1 !== var4)) { _fun0003_ip = 9; continue _fun0003 }
case 3:
            var5 = 1;
            if(!(var5 !== var4)) { _fun0003_ip = 10; continue _fun0003 }
case 5:
            var6 = var2[var1];
            var4 = new Array(2);
            var4[0] = var6;
            var6 = var2[var1];
            var10 = var6.userIds;
            var8 = new Array(0);
            var11 = var8;
            var9 = 0;
            var6 = arraySpread(var11, var10, var9);
            var7 = var8.map;
            var6 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = var3.isBlockedOrIgnored;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var6 = var6.length;
            var4[1] = var6;
            var6 = var4[var1];
            var _closure2_slot0 = var6;
            var4 = var4[var5];
            var _closure2_slot1 = var4;
            var5 = var2.forEach;
            var4 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var6 = var2.userIds;
                    var4 = new Array(0);
                    var5 = 0;
                    var7 = var4;
                    var1 = arraySpread(var7, var6, var5);
                    var3 = var4.filter;
                    var1 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = var3.isBlockedOrIgnored;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1);
                    var3 = var1.length;
                    var4 = _closure2_slot1;
                    if(!(var3 > var4)) { _fun0004_ip = 11; continue _fun0004 }
case 2:
                    _closure2_slot1 = var3;
                    _closure2_slot0 = var2;
case 11:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var5.bind(var2)(var4);
            var3 = _closure2_slot0;
            return var3;
case 10:
            var1 = var2[var1];
            return var1;
case 9:
            var1 = null;
            return var1;
        }
    };
    var3['findActivityWithMostNonBlockedOrIgnoredParticipants'] = var2;
    return var1;
})();
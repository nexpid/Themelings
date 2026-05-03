// app/modules/harvester/HarvesterUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.REQUEST_DATA_LIMIT_MS;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/harvester/HarvesterUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function harvestDisabled(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var1 = var3.verified;
            var1 = !var1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.isStaff;
            var2 = var2.bind(var3)();
            var3 = !var2;
            var2 = !var3;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = null;
            var3 = var3 != var4;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot6;
            var7 = global;
            var8 = var7.Date;
            var6 = var8.now;
            var6 = var6.bind(var8)();
            var8 = var7.Date;
            var9 = var4.created_at;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var10 = var7;
            var4 = new var10[var8](var9, var8);
            var7 = var4 instanceof Object ? var4 : var7;
            var4 = var7.getTime;
            var4 = var4.bind(var7)();
            var4 = var6 - var4;
            var3 = var5 > var4;
case 6:
            var2 = var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['harvestDisabled'] = var4;
    var2 = function useRequestHarvestStatus() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 5;
            var6 = var4[var2];
            var8 = undefined;
            var10 = var3.bind(var8)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var9.bind(var10)(var7, var6);
            var2 = var4[var2];
            var6 = var3.bind(var8)(var2);
            var4 = var6.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot5;
                var1 = var1.harvestType;
                return var1;
            };
            var4 = var4.bind(var6)(var3, var2);
            var6 = _closure1_slot3;
            var3 = var6.useState;
            var2 = function() {
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var3.bind(var6)(var2);
            var3 = _closure1_slot2;
            var2 = 2;
            var6 = var3.bind(var8)(var6, var2);
            var2 = 0;
            var2 = var6[var2];
            var3 = 1;
            var3 = var6[var3];
            var _closure2_slot0 = var3;
            var3 = null;
            var6 = var2;
            if(!(var3 != var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var8 = global;
            var10 = var8.Date;
            var12 = var4.created_at;
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var13 = var9;
            var8 = new var13[var10](var12, var11);
            var9 = var8 instanceof Object ? var8 : var9;
            var8 = var9.getTime;
            var9 = var8.bind(var9)();
            var8 = _closure1_slot6;
            var6 = var9 + var8;
case 8:
            var _closure2_slot1 = var6;
            var9 = _closure1_slot3;
            var5 = var9.useRef;
            var5 = var5.bind(var9)(var3);
            var _closure2_slot2 = var5;
            var8 = var9.useEffect;
            var5 = new Array(1);
            var5[0] = var6;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = _closure2_slot1;
                    var4 = global;
                    var6 = var4.Date;
                    var3 = var6.now;
                    var3 = var3.bind(var6)();
                    var7 = var5 - var3;
                    var3 = 0;
                    if(!(var7 > var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var5 = var4.setTimeout;
                    var6 = undefined;
                    var3 = function() {
                        var3 = _closure2_slot0;
                        var1 = global;
                        var2 = var1.Date;
                        var1 = var2.now;
                        var2 = var1.bind(var2)();
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3 = var5.bind(var6)(var3, var7);
                    var5 = var4.clearTimeout;
                    var4 = _closure2_slot2;
                    var4 = var4.current;
                    var4 = var5.bind(var6)(var4);
                    var2 = _closure2_slot2;
                    var2['current'] = var3;
case 10:
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var1 = _closure2_slot2;
                        var2 = var1.current;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var1 = var8.bind(var9)(var1, var5);
            if(!(var3 != var7)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = var7.verified;
            if(var1) { _fun0002_ip = 14; continue _fun0002 }
case 12:
            var1 = {'allowed': false, 'reason': 'not_verified'};
            _fun0002_ip = 15; continue _fun0002;
case 14:
            var5 = var7.isStaff;
            var5 = var5.bind(var7)();
            if(var5) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            if(!(var3 != var4)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            if(!(!(var6 > var2))) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var2 = {};
            var3 = true;
            var2['allowed'] = var3;
            _fun0002_ip = 22; continue _fun0002;
case 20:
            var3 = {'allowed': false, 'reason': 'rate_limited'};
            var4 = global;
            var4 = var4.Date;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var13 = var5;
            var12 = var6;
            var4 = new var13[var4](var12, var11);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['nextAllowed'] = var4;
            var2 = var3;
case 22:
            _fun0002_ip = 23; continue _fun0002;
case 18:
            var3 = {};
            var4 = true;
            var3['allowed'] = var4;
            var2 = var3;
case 23:
            _fun0002_ip = 24; continue _fun0002;
case 16:
            var2 = {'allowed': false, 'reason': 'staff'};
case 24:
            var1 = var2;
case 15:
            return var1;
        }
    };
    var3['useRequestHarvestStatus'] = var2;
    return var1;
})();
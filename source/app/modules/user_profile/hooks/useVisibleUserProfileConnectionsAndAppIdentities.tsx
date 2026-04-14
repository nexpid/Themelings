// app/modules/user_profile/hooks/useVisibleUserProfileConnectionsAndAppIdentities.tsx
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
    var4 = 'modules/user_profile/hooks/useVisibleUserProfileConnectionsAndAppIdentities.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useVisibleUserProfileConnectionsAndAppIdentities(arg1) {
        var5 = arg1;
        var4 = _closure1_slot1;
        var11 = _closure1_slot2;
        var3 = 1;
        var3 = var11[var3];
        var10 = undefined;
        var3 = var4.bind(var10)(var3);
        var3 = var3.bind(var10)(var5);
        var9 = var3.filteredAppIdentities;
        var _closure2_slot0 = var9;
        var3 = 2;
        var3 = var11[var3];
        var3 = var4.bind(var10)(var3);
        var7 = var3.bind(var10)(var5);
        var _closure2_slot1 = var7;
        var5 = _closure1_slot3;
        var8 = var5.useMemo;
        var6 = new Array(1);
        var6[0] = var9;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = global;
                var3 = var1.Set;
                var1 = _closure2_slot0;
                var2 = null;
                var5 = var2 == var1;
                var1 = undefined;
                if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure2_slot0;
                var5 = var6.map;
                var4 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.application_id;
                    return var1;
                };
                var1 = var5.bind(var6)(var4);
case 2:
                if(!(var2 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = new Array(0);
case 4:
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var8 = var2;
                var7 = var1;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6 = var8.bind(var5)(var3, var6);
        var _closure2_slot2 = var6;
        var3 = 3;
        var3 = var11[var3];
        var4 = var4.bind(var10)(var3);
        var3 = new Array(0);
        var12 = 0;
        var14 = var3;
        var13 = var6;
        var8 = arraySpread(var14, var13, var12);
        var4 = var4.bind(var10)(var3);
        var3 = var4.filter;
        var8 = _closure1_slot0;
        var1 = 4;
        var1 = var11[var1];
        var1 = var8.bind(var10)(var1);
        var1 = var1.isNotNullish;
        var3 = var3.bind(var4)(var1);
        var _closure2_slot3 = var3;
        var1 = {};
        var8 = var5.useMemo;
        var4 = new Array(2);
        var4[0] = var9;
        var4[1] = var3;
        var3 = function() {
            var4 = _closure2_slot0;
            var3 = var4.map;
            var2 = function(arg1) {
                var3 = arg1;
                var _closure4_slot0 = var3;
                var1 = {};
                var1['identity'] = var3;
                var4 = _closure2_slot3;
                var3 = var4.find;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure4_slot0;
                    var1 = var1.application_id;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var1['application'] = var2;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.application;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var8.bind(var5)(var3, var4);
        var1['appIdentities'] = var3;
        var4 = var5.useMemo;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            var3 = _closure2_slot1;
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.get;
                    var2 = arg1;
                    var2 = var2.type;
                    var2 = var3.bind(var4)(var2);
                    var3 = null;
                    var4 = var3 == var2;
                    if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = var2.replacedBy;
case 6:
                    var1 = var3 == var1;
                    if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure2_slot2;
                    var3 = var4.has;
                    var2 = var2.replacedBy;
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
case 8:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['connections'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
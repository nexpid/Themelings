// app/modules/connections/RoleConnectionRequirementUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.OperatorTypes;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/connections/RoleConnectionRequirementUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function realizedOperatorFor(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var1 = var2.GREATER_THAN;
case 2:
            return var1;
        }
    };
    var3['realizedOperatorFor'] = var4;
    var4 = function displayedValueFor(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = arg2;
            var2 = global;
            var5 = var2.Math;
            var3 = var5.round;
            var8 = var2.Number;
            var6 = null;
            var9 = var6 != var1;
            var6 = 0;
            var7 = 0;
            if(!var9) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var7 = var1;
case 4:
            var1 = undefined;
            var1 = var8.bind(var1)(var7);
            var1 = var3.bind(var5)(var1);
            var5 = _closure1_slot0;
            var5 = var5.GREATER_THAN;
            if(!(var5 !== var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot0;
            var3 = var3.LESS_THAN;
            if(!(var3 !== var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            return var1;
case 8:
            var5 = var2.Math;
            var4 = var5.max;
            var3 = 1;
            var3 = var1 - var3;
            var3 = var4.bind(var5)(var6, var3);
            return var3;
case 6:
            var4 = var2.Math;
            var3 = var4.max;
            var2 = 1;
            var1 = var1 + var2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['displayedValueFor'] = var4;
    var4 = function storedValueFor(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var3 = arg2;
            var1 = global;
            var6 = var1.Math;
            var5 = var6.round;
            var8 = var1.Number;
            var4 = null;
            var9 = var4 != var2;
            var4 = 0;
            var7 = 0;
            if(!var9) { _fun0003_ip = 4; continue _fun0003 }
case 5:
            var7 = var2;
case 4:
            var2 = undefined;
            var2 = var8.bind(var2)(var7);
            var5 = var5.bind(var6)(var2);
            var6 = _closure1_slot0;
            var6 = var6.GREATER_THAN;
            if(!(var6 !== var3)) { _fun0003_ip = 10; continue _fun0003 }
case 7:
            var2 = _closure1_slot0;
            var2 = var2.LESS_THAN;
            if(!(var2 !== var3)) { _fun0003_ip = 11; continue _fun0003 }
case 9:
            var2 = var5.toString;
            var2 = var2.bind(var5)();
            return var2;
case 11:
            var7 = var1.Math;
            var6 = var7.max;
            var3 = 1;
            var2 = var5 + var3;
            var3 = var6.bind(var7)(var3, var2);
            var2 = var3.toString;
            var2 = var2.bind(var3)();
            return var2;
case 10:
            var3 = var1.Math;
            var2 = var3.max;
            var1 = 1;
            var1 = var5 - var1;
            var2 = var2.bind(var3)(var4, var1);
            var1 = var2.toString;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['storedValueFor'] = var4;
    var2 = function minDisplayedValueFor(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot0;
            var3 = var3.GREATER_THAN;
            if(!(var3 !== var2)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var1 = _closure1_slot0;
            var1 = var1.LESS_THAN;
            if(!(var1 !== var2)) { _fun0004_ip = 5; continue _fun0004 }
case 14:
            var1 = undefined;
            return var1;
case 5:
            var1 = 0;
            return var1;
case 12:
            var1 = 1;
            return var1;
        }
    };
    var3['minDisplayedValueFor'] = var2;
    return var1;
})();
// app/utils/PremiumTypeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var6 = function isPremiumAtLeast(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var2 = null;
            var1 = var2 == var5;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var2 != var6;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var4 = var4[var6];
            var3 = _closure1_slot0;
            var3 = var3[var5];
            var2 = var4 >= var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot1 = var6;
    var4 = function isPremium(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var4 = null;
            var1 = var4 != var2;
            if(!var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var3 = var2.premiumType;
            var1 = var4 != var3;
case 5:
            if(!var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var5 = _closure1_slot1;
            var4 = var2.premiumType;
            var3 = undefined;
            var2 = arg2;
            var1 = var5.bind(var3)(var4, var2);
case 7:
            return var1;
        }
    };
    var2 = function isPremiumExactly(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 6:
            var3 = var2.premiumType;
            var2 = arg2;
            var1 = var3 === var2;
case 8:
            return var1;
        }
    };
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var7);
    var1 = 0;
    var7 = var10[var1];
    var1 = undefined;
    var7 = var9.bind(var1)(var7);
    var7 = var7.PremiumTypeOrder;
    var _closure1_slot0 = var7;
    var7 = {};
    var7['isPremiumAtLeast'] = var6;
    var7['isPremium'] = var4;
    var7['isPremiumExactly'] = var2;
    var8 = 1;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'utils/PremiumTypeUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['isPremiumAtLeast'] = var6;
    var5 = function isPremiumAtMost(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 == var4;
            if(var1) { _fun0004_ip = 9; continue _fun0004 }
case 6:
            var3 = _closure1_slot0;
            var3 = var3[var4];
            var4 = _closure1_slot0;
            var2 = arg2;
            var2 = var4[var2];
            var1 = var3 <= var2;
case 9:
            return var1;
        }
    };
    var3['isPremiumAtMost'] = var5;
    var3['isPremium'] = var4;
    var3['isPremiumExactly'] = var2;
    return var1;
})();
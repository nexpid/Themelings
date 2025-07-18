// app/utils/PremiumTypeUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var3 = native6;
    var10 = native7;
    var6 = function isPremiumAtLeast(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var2 = null;
            var1 = var2 == var5;
            if(var1) { _fun0001_ip = 48; continue _fun0001 }
 15:
            var2 = var2 != var6;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 22:
            var4 = _closure1_slot0;
            var4 = var4[var6];
            var3 = _closure1_slot0;
            var3 = var3[var5];
            var2 = var4 >= var3;
 45:
            var1 = var2;
 48:
            return var1;
        }
    };
    var _closure1_slot1 = var6;
    var4 = function isPremium(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var4 = null;
            var1 = var4 != var2;
            if(!var1) { _fun0002_ip = 22; continue _fun0002 }
 12:
            var3 = var2.premiumType;
            var1 = var4 != var3;
 22:
            if(!var1) { _fun0002_ip = 49; continue _fun0002 }
 25:
            var5 = _closure1_slot1;
            var4 = var2.premiumType;
            var3 = undefined;
            var2 = arg2;
            var1 = var5.bind(var3)(var4, var2);
 49:
            return var1;
        }
    };
    var2 = function isPremiumExactly(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0003_ip = 25; continue _fun0003 }
 12:
            var3 = var2.premiumType;
            var2 = arg2;
            var1 = var3 === var2;
 25:
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
 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 == var4;
            if(var1) { _fun0004_ip = 38; continue _fun0004 }
 12:
            var3 = _closure1_slot0;
            var3 = var3[var4];
            var4 = _closure1_slot0;
            var2 = arg2;
            var2 = var4[var2];
            var1 = var3 <= var2;
 38:
            return var1;
        }
    };
    var3['isPremiumAtMost'] = var5;
    var3['isPremium'] = var4;
    var3['isPremiumExactly'] = var2;
    return var1;
})();
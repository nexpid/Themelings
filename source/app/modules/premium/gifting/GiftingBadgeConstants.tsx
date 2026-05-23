// app/modules/premium/gifting/GiftingBadgeConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var4 = function getNextTierForProgress(arg1, arg2) {
        var4 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg1;
                var3 = arg2;
                var1 = _closure1_slot0;
                var6 = undefined;
                var5 = var1.bind(var6)(var3);
                var7 = _closure2_slot0;
                var1 = var2;
                if(!(!(var7 >= var5))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var7 = null;
                if(!(var7 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = _closure1_slot0;
                var4 = var4.bind(var6)(var2);
                if(!(var5 < var4)) { _fun0001_ip = 6; continue _fun0001 }
case 4:
                var2 = var3;
case 6:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var1 = null;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot1 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.getSingleRequirementThreshold;
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/gifting/GiftingBadgeConstants.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getTierForProgress(arg1, arg2) {
        var4 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var3 = arg2;
                var1 = _closure1_slot0;
                var6 = undefined;
                var5 = var1.bind(var6)(var3);
                var7 = _closure2_slot0;
                var1 = var2;
                if(!(!(var7 < var5))) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var7 = null;
                if(!(var7 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var4 = _closure1_slot0;
                var4 = var4.bind(var6)(var2);
                if(!(var5 > var4)) { _fun0002_ip = 6; continue _fun0002 }
case 4:
                var2 = var3;
case 6:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var1 = null;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getTierForProgress'] = var5;
    var3['getNextTierForProgress'] = var4;
    var2 = function getRemainingGiftsToNextTier(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg2;
            var4 = _closure1_slot1;
            var5 = undefined;
            var1 = arg1;
            var4 = var4.bind(var5)(var1, var3);
            var1 = null;
            var6 = var1 == var4;
            if(var6) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var2 = _closure1_slot0;
            var2 = var2.bind(var5)(var4);
            var1 = var2 - var3;
case 7:
            return var1;
        }
    };
    var3['getRemainingGiftsToNextTier'] = var2;
    return var1;
})();
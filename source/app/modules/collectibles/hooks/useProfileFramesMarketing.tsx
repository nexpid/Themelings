// app/modules/collectibles/hooks/useProfileFramesMarketing.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function deriveProfileFramesMarketing(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.canViewProfileFramesInCollectiblesShop;
            var2 = var1.isEarlyAccess;
            var4 = var1.isFramesEAMarketingEnabled;
            var6 = var1.isFrameGiftingEnabled;
            var3 = var1.hasPaidTier2;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = !var2;
case 2:
            var1 = {};
            var7 = var5;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var2;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var4;
case 6:
            var7 = var8;
case 4:
            var1['isAnnouncementEligible'] = var7;
            var1['isEarlyAccess'] = var2;
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var6;
case 8:
            var1['showGiftingMarketing'] = var5;
            var5 = var2;
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var4;
case 10:
            if(!var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = var3;
case 12:
            var1['showEaPremiumMarketing'] = var5;
            if(!var2) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = var4;
case 14:
            if(!var2) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = !var3;
case 16:
            var1['showEaNonPremiumMarketing'] = var2;
            return var1;
        }
    };
    var _closure1_slot3 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/hooks/useProfileFramesMarketing.tsx';
    var5 = var6.bind(var7)(var5);
    var3['deriveProfileFramesMarketing'] = var4;
    var2 = function useProfileFramesMarketing(arg1) {
        var9 = arg1;
        var3 = _closure1_slot3;
        var2 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var5 = 1;
        var8 = var7[var5];
        var1 = undefined;
        var10 = var6.bind(var1)(var8);
        var8 = var10.useCanViewProfileFramesInCollectiblesShop;
        var8 = var8.bind(var10)(var9);
        var2['canViewProfileFramesInCollectiblesShop'] = var8;
        var5 = var7[var5];
        var8 = var6.bind(var1)(var5);
        var5 = var8.useIsProfileFramesEarlyAccessPhase;
        var5 = var5.bind(var8)(var9);
        var2['isEarlyAccess'] = var5;
        var5 = 2;
        var5 = var7[var5];
        var8 = var6.bind(var1)(var5);
        var5 = var8.useIsProfileFramesEAMarketingEnabled;
        var5 = var5.bind(var8)(var9);
        var2['isFramesEAMarketingEnabled'] = var5;
        var5 = 3;
        var5 = var7[var5];
        var8 = var6.bind(var1)(var5);
        var5 = var8.useIsProfileFrameGiftingEnabled;
        var5 = var5.bind(var8)(var9);
        var2['isFrameGiftingEnabled'] = var5;
        var5 = 4;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.useStateFromStores;
        var4 = _closure1_slot2;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.isUserPaidTier2;
            var4 = _closure1_slot2;
            var1 = var4.getCurrentUser;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var4 = var6.bind(var7)(var5, var4);
        var2['hasPaidTier2'] = var4;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['useProfileFramesMarketing'] = var2;
    return var1;
})();
// app/modules/collectibles/hooks/useProfileFramesMarketing.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
    var _closure1_slot4 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/hooks/useProfileFramesMarketing.tsx';
    var5 = var6.bind(var7)(var5);
    var3['deriveProfileFramesMarketing'] = var4;
    var4 = function useProfileFramesMarketing(arg1) {
        var9 = arg1;
        var3 = _closure1_slot4;
        var2 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
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
        var4 = _closure1_slot3;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.isUserPaidTier2;
            var4 = _closure1_slot3;
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
    var3['useProfileFramesMarketing'] = var4;
    var2 = function getProfileFramesMarketing(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var9 = arg1;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 5;
            var5 = var1[var3];
            var3 = undefined;
            var7 = var2.bind(var3)(var5);
            var6 = var7.getConfig;
            var5 = {};
            var5['location'] = var9;
            var5 = var6.bind(var7)(var5);
            var5 = var5.enableProfileFrames;
            var10 = 6;
            var1 = var1[var10];
            var6 = var2.bind(var3)(var1);
            var2 = var6.getConfig;
            var1 = {};
            var1['location'] = var9;
            var1 = var2.bind(var6)(var1);
            var7 = var1.bucket;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var5;
            if(!var5) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var11.bind(var3)(var8);
            var8 = var8.ProfileFramesPurchaseBucket;
            var8 = var8.CONTROL;
            var6 = var7 !== var8;
case 18:
            var1['canViewProfileFramesInCollectiblesShop'] = var6;
            if(!var5) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var6 = var8.bind(var3)(var6);
            var6 = var6.ProfileFramesPurchaseBucket;
            var6 = var6.PAID_PREMIUM_SUBSCRIBERS_ONLY;
            var5 = var7 === var6;
case 20:
            var1['isEarlyAccess'] = var5;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 2;
            var5 = var7[var5];
            var8 = var6.bind(var3)(var5);
            var5 = var8.getIsProfileFramesEAMarketingEnabled;
            var5 = var5.bind(var8)(var9);
            var1['isFramesEAMarketingEnabled'] = var5;
            var5 = 3;
            var5 = var7[var5];
            var8 = var6.bind(var3)(var5);
            var5 = var8.getIsProfileFrameGiftingEnabled;
            var5 = var5.bind(var8)(var9);
            var1['isFrameGiftingEnabled'] = var5;
            var5 = 1;
            var5 = var7[var5];
            var6 = var6.bind(var3)(var5);
            var5 = var6.isUserPaidTier2;
            var7 = _closure1_slot3;
            var4 = var7.getCurrentUser;
            var4 = var4.bind(var7)();
            var4 = var5.bind(var6)(var4);
            var1['hasPaidTier2'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getProfileFramesMarketing'] = var2;
    return var1;
})();
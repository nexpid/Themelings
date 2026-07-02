// app/modules/premium/gifting/GiftingBadgesUtils.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.getSingleRequirementThreshold;
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/GiftingBadgesUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getGiftingBadgeProgressPercent(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = arg3;
            var2 = _closure1_slot2;
            var1 = undefined;
            var5 = arg2;
            var5 = var2.bind(var1)(var5);
            var2 = var2.bind(var1)(var3);
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 0;
            var1 = var5 > var1;
            var3 = 100;
            var6 = var3;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = global;
            var7 = var1.Math;
            var1 = var7.min;
            var1 = var1.bind(var7)(var5, var4);
            var1 = var1 / var5;
            var6 = var1 * var3;
case 4:
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var1 = 0;
            var5 = var2 > var1;
            var3 = 100;
            var1 = var3;
            if(!var5) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var4 / var2;
            var1 = var2 * var3;
case 7:
            var6 = var1;
case 6:
            var1 = global;
            var4 = var1.Math;
            var3 = var4.min;
            var5 = var1.Math;
            var2 = var5.max;
            var1 = 0;
            var2 = var2.bind(var5)(var6, var1);
            var1 = 100;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getGiftingBadgeProgressPercent'] = var4;
    var2 = function useIsEligibleToShowGiftingBadgeCoachmark(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.platform;
            var4 = var1.location;
            var1 = 'web';
            if(!(var1 !== var2)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.GiftingBadgeExperiment;
            _fun0002_ip = 11; continue _fun0002;
case 9:
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var2);
            var3 = var1.GiftingBadgeDesktopExperiment;
case 11:
            var2 = var3.useConfig;
            var1 = {};
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = var1.enabled;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 4;
            var3 = var8[var3];
            var6 = undefined;
            var5 = var7.bind(var6)(var3);
            var4 = var5.useStateFromStores;
            var2 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure1_slot3;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var3 = var4.hasHadPremium;
                    var2 = var3.bind(var4)();
case 12:
                    var1 = var1 != var2;
                    if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var1 = var2;
case 14:
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3, var2);
            var2 = 5;
            var2 = var8[var2];
            var5 = var7.bind(var6)(var2);
            var4 = var5.UNSAFE_useIsDismissibleContentDismissed;
            var2 = 6;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.NEW_GIFTING_BADGES_COACHMARK;
            var2 = var4.bind(var5)(var2);
            if(!var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var1 = var3;
case 16:
            if(!var1) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var1 = !var2;
case 18:
            return var1;
        }
    };
    var3['useIsEligibleToShowGiftingBadgeCoachmark'] = var2;
    return var1;
})();
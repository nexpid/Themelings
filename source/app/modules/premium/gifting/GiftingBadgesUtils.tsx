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
    var4 = function useIsGiftingBadgesDesktopEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 2;
            var1 = var5[var1];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var6 = var1.GiftingBadgeExperiment;
            var2 = var6.useConfig;
            var1 = {};
            var1['location'] = var8;
            var1 = var2.bind(var6)(var1);
            var2 = var1.enabled;
            var1 = 3;
            var1 = var5[var1];
            var1 = var4.bind(var3)(var1);
            var4 = var1.GiftingBadgeDesktopExperiment;
            var3 = var4.useConfig;
            var1 = {};
            var7 = '-DISABLED';
            if(!var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var7 = '';
case 9:
            var5 = global;
            var5 = var5.HermesInternal;
            var6 = var5.concat;
            var5 = '';
            var5 = var6.bind(var5)(var8, var7);
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            var1 = var1.enabled;
            if(!var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = var2;
case 11:
            return var1;
        }
    };
    var3['useIsGiftingBadgesDesktopEnabled'] = var4;
    var4 = function getIsGiftingBadgesDesktopEnabled(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var6 = var1.GiftingBadgeExperiment;
            var3 = var6.getConfig;
            var1 = {};
            var1['location'] = var5;
            var1 = var3.bind(var6)(var1);
            var1 = var1.enabled;
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.GiftingBadgeDesktopExperiment;
            var3 = var4.getConfig;
            var2 = {};
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = var2.enabled;
case 13:
            return var1;
        }
    };
    var3['getIsGiftingBadgesDesktopEnabled'] = var4;
    var2 = function useIsEligibleToShowGiftingBadgeCoachmark(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var8 = var1.platform;
            var11 = var1.location;
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 2;
            var1 = var5[var1];
            var7 = undefined;
            var1 = var3.bind(var7)(var1);
            var6 = var1.GiftingBadgeExperiment;
            var4 = var6.useConfig;
            var1 = {};
            var1['location'] = var11;
            var1 = var4.bind(var6)(var1);
            var4 = var1.enabled;
            var1 = 3;
            var1 = var5[var1];
            var1 = var3.bind(var7)(var1);
            var6 = var1.GiftingBadgeDesktopExperiment;
            var3 = var6.useConfig;
            var1 = {};
            var5 = 'web';
            var5 = var5 === var8;
            var10 = '-DISABLED';
            if(!var5) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var10 = '';
case 15:
            var8 = global;
            var8 = var8.HermesInternal;
            var9 = var8.concat;
            var8 = '';
            var8 = var9.bind(var8)(var11, var10);
            var1['location'] = var8;
            var1 = var3.bind(var6)(var1);
            var3 = var1.enabled;
            var1 = var4;
            if(!var5) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            if(!var3) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var3 = var4;
case 19:
            var1 = var3;
case 17:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 4;
            var3 = var8[var3];
            var5 = var6.bind(var7)(var3);
            var4 = var5.useStateFromStores;
            var2 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure1_slot3;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var3 = var4.hasHadPremium;
                    var2 = var3.bind(var4)();
case 21:
                    var1 = var1 != var2;
                    if(!var1) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var1 = var2;
case 23:
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3, var2);
            var2 = 5;
            var2 = var8[var2];
            var5 = var6.bind(var7)(var2);
            var4 = var5.UNSAFE_useIsDismissibleContentDismissed;
            var2 = 6;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.NEW_GIFTING_BADGES_COACHMARK;
            var2 = var4.bind(var5)(var2);
            if(!var1) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var1 = var3;
case 25:
            if(!var1) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var1 = !var2;
case 27:
            return var1;
        }
    };
    var3['useIsEligibleToShowGiftingBadgeCoachmark'] = var2;
    return var1;
})();
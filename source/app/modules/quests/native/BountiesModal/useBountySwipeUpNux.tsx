// app/modules/quests/native/BountiesModal/useBountySwipeUpNux.tsx
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/useBountySwipeUpNux.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBountySwipeUpNux(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.isEligible;
            var8 = var1.location;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var2 = 1;
            var1 = var1[var2];
            var6 = undefined;
            var1 = var4.bind(var6)(var1);
            var7 = var1.BountiesVerticalScrollExperiment;
            var4 = var7.useConfig;
            var1 = {};
            var1['location'] = var8;
            var1 = var4.bind(var7)(var1);
            var4 = var1.scrollAffordanceVariant;
            var1 = 'none';
            var1 = var1 === var4;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var9 = new Array(0);
            _fun0001_ip = 5; continue _fun0001;
case 4:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 2;
            var4 = var8[var4];
            var4 = var7.bind(var6)(var4);
            var4 = var4.DismissibleContent;
            var7 = var4.BOUNTIES_SWIPE_UP_NUX;
            var4 = new Array(1);
            var4[0] = var7;
            var9 = var4;
case 5:
            var14 = null;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var14 = null;
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 2;
            var1 = var5[var1];
            var1 = var4.bind(var6)(var1);
            var1 = var1.DismissibleContent;
            var14 = var1.BOUNTIES_RECURRING_SWIPE_UP_NUX;
case 6:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 3;
            var4 = var7[var1];
            var8 = var5.bind(var6)(var4);
            var4 = var8.useSelectedDismissibleContent;
            var4 = var4.bind(var8)(var9);
            var11 = _closure1_slot2;
            var3 = 2;
            var8 = var11.bind(var6)(var4, var3);
            var4 = 0;
            var10 = var8[var4];
            var8 = var8[var2];
            var9 = var7[var3];
            var9 = var5.bind(var6)(var9);
            var9 = var9.DismissibleContent;
            var9 = var9.BOUNTIES_SWIPE_UP_NUX;
            var1 = var7[var1];
            var13 = var5.bind(var6)(var1);
            var12 = var13.useSelectedTimeRecurringDismissibleContent;
            var1 = {};
            var15 = 86400000;
            var1['cooldownDurationMs'] = var15;
            var1 = var12.bind(var13)(var14, var1);
            var1 = var11.bind(var6)(var1, var3);
            var4 = var1[var4];
            var2 = var1[var2];
            var1 = {};
            var9 = var10 === var9;
            var1['hasSingleUseSwipeUpNux'] = var9;
            var1['dismissSingleUseSwipeUpNux'] = var8;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.BOUNTIES_RECURRING_SWIPE_UP_NUX;
            var3 = var4 === var3;
            var1['hasRecurringSwipeUpNux'] = var3;
            var1['dismissRecurringSwipeUpNux'] = var2;
            return var1;
        }
    };
    var3['useBountySwipeUpNux'] = var2;
    return var1;
})();
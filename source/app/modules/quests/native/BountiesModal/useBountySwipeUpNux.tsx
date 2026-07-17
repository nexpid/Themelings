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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/useBountySwipeUpNux.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBountySwipeUpNux(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.isEligible;
            var10 = var1.location;
            var6 = _closure1_slot0;
            var1 = _closure1_slot1;
            var2 = 1;
            var5 = var1[var2];
            var8 = undefined;
            var5 = var6.bind(var8)(var5);
            var9 = var5.BountiesVerticalScrollExperiment;
            var7 = var9.useConfig;
            var5 = {};
            var5['location'] = var10;
            var5 = var7.bind(var9)(var5);
            var7 = var5.scrollAffordanceVariant;
            var5 = 'none';
            var5 = var5 === var7;
            var12 = 2;
            var1 = var1[var12];
            var6 = var6.bind(var8)(var1);
            var1 = var6.useForceBountiesSwipeUpNux;
            var6 = var1.bind(var6)();
            var1 = _closure1_slot2;
            var1 = var1.bind(var8)(var6, var2);
            var6 = 0;
            var7 = var1[var6];
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var10 = new Array(0);
            _fun0001_ip = 5; continue _fun0001;
case 4:
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var1 = 3;
            var1 = var11[var1];
            var1 = var9.bind(var8)(var1);
            var1 = var1.DismissibleContent;
            var9 = var1.BOUNTIES_SWIPE_UP_NUX;
            var1 = new Array(1);
            var1[0] = var9;
            var10 = var1;
case 5:
            var14 = null;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var14 = null;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var1 = 3;
            var1 = var11[var1];
            var1 = var9.bind(var8)(var1);
            var1 = var1.DismissibleContent;
            var14 = var1.BOUNTIES_RECURRING_SWIPE_UP_NUX;
case 6:
            var9 = _closure1_slot0;
            var1 = _closure1_slot1;
            var13 = 4;
            var1 = var1[var13];
            var9 = var9.bind(var8)(var1);
            var1 = var9.useSelectedDismissibleContent;
            var9 = var1.bind(var9)(var10);
            var1 = _closure1_slot2;
            var1 = var1.bind(var8)(var9, var12);
            var10 = var1[var6];
            var9 = var1[var2];
            if(var7) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var11 = _closure1_slot0;
            var15 = _closure1_slot1;
            var1 = 3;
            var1 = var15[var1];
            var1 = var11.bind(var8)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.BOUNTIES_SWIPE_UP_NUX;
            var10 = var10 === var1;
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var1 = var4;
            if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = var5;
case 12:
            var10 = var1;
case 11:
            var11 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var13];
            var13 = var11.bind(var8)(var1);
            var11 = var13.useSelectedTimeRecurringDismissibleContent;
            var1 = {};
            var15 = 86400000;
            var1['cooldownDurationMs'] = var15;
            var11 = var11.bind(var13)(var14, var1);
            var1 = _closure1_slot2;
            var1 = var1.bind(var8)(var11, var12);
            var6 = var1[var6];
            var2 = var1[var2];
            var1 = {};
            var1['hasSingleUseSwipeUpNux'] = var10;
            var1['dismissSingleUseSwipeUpNux'] = var9;
            if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 3;
            var3 = var9[var3];
            var3 = var7.bind(var8)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.BOUNTIES_RECURRING_SWIPE_UP_NUX;
            var3 = var6 === var3;
            _fun0001_ip = 16; continue _fun0001;
case 14:
            if(!var4) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var4 = !var5;
case 17:
            var3 = var4;
case 16:
            var1['hasRecurringSwipeUpNux'] = var3;
            var1['dismissRecurringSwipeUpNux'] = var2;
            return var1;
        }
    };
    var3['useBountySwipeUpNux'] = var2;
    return var1;
})();
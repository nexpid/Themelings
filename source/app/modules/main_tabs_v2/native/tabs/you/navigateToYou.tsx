// app/modules/main_tabs_v2/native/tabs/you/navigateToYou.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = var4.MainTabsNavigatorScreens;
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/you/navigateToYou.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function navigateToYou(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var4 = arg2;
            var2 = null;
            var5 = var2 == var4;
            var1 = undefined;
            var3 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.location;
case 2:
            var4 = var2 != var3;
            var8 = 'navigateToYou';
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var3;
case 4:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 1;
            var3 = var6[var3];
            var3 = var5.bind(var1)(var3);
            var6 = var3.YouBarExperiment;
            var5 = var6.getConfig;
            var3 = {};
            var3['location'] = var8;
            var3 = var5.bind(var6)(var3);
            var3 = var3.enabled;
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 5;
            var3 = var6[var3];
            var5 = var5.bind(var1)(var3);
            var3 = var5.getRootNavigationRef;
            var6 = var3.bind(var5)();
            var3 = var2 != var6;
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var6.isReady;
            var3 = var5.bind(var6)();
case 8:
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var6.navigate;
            var3 = _closure1_slot3;
            var3 = var3.YOU;
            var3 = var5.bind(var6)(var3, var7);
            _fun0001_ip = 10; continue _fun0001;
case 6:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var5 = 2;
            var5 = var3[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.openLazy;
            var8 = _closure1_slot0;
            var4 = 4;
            var4 = var3[var4];
            var8 = var8.bind(var1)(var4);
            var4 = 3;
            var4 = var3[var4];
            var3 = var3.paths;
            var4 = var8.bind(var1)(var4, var3);
            var3 = {};
            var8 = true;
            var3['disableHapticOnOpen'] = var8;
            var8 = var2 == var7;
            var2 = undefined;
            if(var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var7.showOrbsBadgeCoachmark;
case 12:
            var3['showOrbsBadgeCoachmark'] = var2;
            var2 = 'YouBottomSheet';
            var2 = var5.bind(var6)(var4, var2, var3);
case 10:
            return var1;
        }
    };
    var3['navigateToYou'] = var2;
    return var1;
})();
// app/modules/main_tabs_v2/native/utils/useTabsVisible.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.PixelRatio;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.DM_WIDTH;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.create;
    var4 = function() {
        var1 = {};
        var2 = 0;
        var1['tabsHeight'] = var2;
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/utils/useTabsVisible.tsx';
    var5 = var6.bind(var7)(var5);
    var3['TabsVisibleStore'] = var4;
    var4 = function useTabsVisible(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = var2.isChatBesideChannelList;
            var3 = _closure1_slot0;
            var1 = 4;
            var1 = var5[var1];
            var4 = var3.bind(var4)(var1);
            var3 = var4.coerceGuildsRoute;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = null;
            var1 = var1 == var3;
            if(!var1) { _fun0001_ip = 77; continue _fun0001 }
 74:
            var1 = var2;
 77:
            var1 = !var1;
            return var1;
        }
    };
    var3['useTabsVisible'] = var4;
    var4 = function setTabsHeight(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0002_ip = 56; continue _fun0002 }
 15:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.batchUpdates;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.setState;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = arg1;
                        var4 = _closure2_slot0;
                        var2 = var1.tabsHeight;
                        if(!(var4 !== var2)) { _fun0003_ip = 34; continue _fun0003 }
 20:
                        var2 = {};
                        var3 = _closure2_slot0;
                        var2['tabsHeight'] = var3;
                        var1 = var2;
 34:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
 56:
            var1 = undefined;
            return var1;
        }
    };
    var3['setTabsHeight'] = var4;
    var4 = function useMainTabsHeight() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arguments[0];
            var3 = undefined;
            if(!(var2 === var3)) { _fun0004_ip = 25; continue _fun0004 }
 11:
            var2 = {'enabled': true, 'ignoreQuestDock': false};
 25:
            var4 = var2.enabled;
            if(!(var4 === var3)) { _fun0004_ip = 36; continue _fun0004 }
 34:
            var4 = true;
 36:
            var _closure2_slot0 = var4;
            var2 = var2.ignoreQuestDock;
            if(!(var2 === var3)) { _fun0004_ip = 52; continue _fun0004 }
 50:
            var2 = false;
 52:
            var _closure2_slot1 = var2;
            var _closure2_slot2 = var3;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 6;
            var4 = var6[var4];
            var5 = var5.bind(var3)(var4);
            var4 = var5.useMobileQuestDockHeight;
            var4 = var4.bind(var5)();
            _closure2_slot2 = var4;
            var2 = _closure1_slot5;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = 0;
                    if(!var2) { _fun0005_ip = 56; continue _fun0005 }
 12:
                    var4 = _closure1_slot3;
                    var3 = var4.roundToNearestPixel;
                    var2 = arg1;
                    var2 = var2.tabsHeight;
                    var7 = _closure2_slot1;
                    var5 = 0;
                    if(var7) { _fun0005_ip = 47; continue _fun0005 }
 43:
                    var5 = _closure2_slot2;
 47:
                    var2 = var2 + var5;
                    var1 = var3.bind(var4)(var2);
 56:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['useMainTabsHeight'] = var4;
    var2 = function useMainTabsWidth() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 7;
            var1 = var6[var1];
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var3 = var1.bind(var4)();
            var1 = 3;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var4 = var1.isChatBesideChannelList;
            var1 = '100%';
            if(!var4) { _fun0006_ip = 68; continue _fun0006 }
 60:
            var2 = _closure1_slot4;
            var1 = var2 + var3;
 68:
            return var1;
        }
    };
    var3['useMainTabsWidth'] = var2;
    return var1;
})();
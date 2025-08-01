// app/modules/main_tabs_v2/native/settings/screens/CollectiblesShopScreen.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/screens/CollectiblesShopScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CollectiblesShopScreen() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 4;
            var1 = var5[var1];
            var4 = undefined;
            var2 = var3.bind(var4)(var1);
            var1 = var2.useSettingNavigationRoute;
            var6 = var1.bind(var2)();
            var1 = 5;
            var1 = var5[var1];
            var8 = var3.bind(var4)(var1);
            var2 = var8.useMobileShopFeaturedPageEnabled;
            var1 = _closure1_slot3;
            var1 = var1.COLLECTIBLES_SHOP;
            var1 = var2.bind(var8)(var1);
            var2 = 6;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useShopOrientationLock;
            var2 = var2.bind(var3)();
            var2 = var6.params;
            var8 = null;
            var3 = var8 == var2;
            var5 = undefined;
            if(var3) { _fun0001_ip = 113; continue _fun0001 }
 107:
            var5 = var2.screen;
 113:
            if(!(var8 == var5)) { _fun0001_ip = 141; continue _fun0001 }
 117:
            var2 = _closure1_slot4;
            if(var1) { _fun0001_ip = 132; continue _fun0001 }
 124:
            var1 = var2.SHOP_ALL;
            _fun0001_ip = 138; continue _fun0001;
 132:
            var1 = var2.FEATURED_PAGE;
 138:
            var5 = var1;
 141:
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 7;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.CollectiblesShopV2;
            var1 = {};
            var9 = var6.params;
            var10 = var8 == var9;
            var6 = undefined;
            if(var10) { _fun0001_ip = 194; continue _fun0001 }
 188:
            var6 = var9.analyticsSource;
 194:
            if(!(var8 == var6)) { _fun0001_ip = 224; continue _fun0001 }
 198:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 8;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var6 = var7.COLLECTIBLES_SHOP;
 224:
            var1['analyticsSource'] = var6;
            var1['screen'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
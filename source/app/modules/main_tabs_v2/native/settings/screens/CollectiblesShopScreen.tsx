// app/modules/main_tabs_v2/native/settings/screens/CollectiblesShopScreen.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
    var4 = native4;
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
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/screens/CollectiblesShopScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CollectiblesShopScreen() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var4 = undefined;
            var5 = var2.bind(var4)(var1);
            var1 = var5.useSettingNavigationRoute;
            var6 = var1.bind(var5)();
            var1 = 5;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useMobileShopFeaturedPageEnabled;
            var1 = _closure1_slot3;
            var1 = var1.COLLECTIBLES_SHOP;
            var1 = var2.bind(var3)(var1);
            var2 = var6.params;
            var8 = null;
            var3 = var8 == var2;
            var5 = undefined;
            if(var3) { _fun0001_ip = 91; continue _fun0001 }
 85:
            var5 = var2.screen;
 91:
            if(!(var8 == var5)) { _fun0001_ip = 119; continue _fun0001 }
 95:
            var2 = _closure1_slot4;
            if(var1) { _fun0001_ip = 110; continue _fun0001 }
 102:
            var1 = var2.SHOP_ALL;
            _fun0001_ip = 116; continue _fun0001;
 110:
            var1 = var2.FEATURED_PAGE;
 116:
            var5 = var1;
 119:
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 6;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.CollectiblesShopV2;
            var1 = {};
            var9 = var6.params;
            var10 = var8 == var9;
            var6 = undefined;
            if(var10) { _fun0001_ip = 172; continue _fun0001 }
 166:
            var6 = var9.analyticsSource;
 172:
            if(!(var8 == var6)) { _fun0001_ip = 202; continue _fun0001 }
 176:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 7;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var6 = var7.COLLECTIBLES_SHOP;
 202:
            var1['analyticsSource'] = var6;
            var1['screen'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
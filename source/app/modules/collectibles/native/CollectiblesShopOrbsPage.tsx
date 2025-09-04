// app/modules/collectibles/native/CollectiblesShopOrbsPage.tsx
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
    var4 = var4.View;
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
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'display': 'flex', 'flex': 1};
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopOrbsPage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.shopBlocks;
            var2 = var1.fetchShopHomeError;
            var1 = var1.onRenderFirstOrbsItem;
            var _closure2_slot0 = var1;
            var1 = _closure1_slot6;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var1 = null;
            if(!(var1 === var2)) { _fun0001_ip = 110; continue _fun0001 }
 46:
            var2 = var7.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0001_ip = 110; continue _fun0001 }
 57:
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 8;
            var1 = var9[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var1['data'] = var7;
            var4 = function renderItem(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.item;
                    var2 = var1.index;
                    var1 = 0;
                    if(!(var1 === var2)) { _fun0002_ip = 32; continue _fun0002 }
 19:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 32:
                    var4 = _closure1_slot5;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1['block'] = var6;
                    var5 = _closure1_slot4;
                    var5 = var5.ORBS;
                    var1['screen'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var1['renderItem'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 258; continue _fun0001;
 110:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var6.container;
            var2['style'] = var6;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 5;
            var6 = var12[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var9 = {};
            var10 = 42;
            var9['marginTop'] = var10;
            var6['style'] = var9;
            var11 = _closure1_slot0;
            var8 = 6;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.NoResults;
            var6['Illustration'] = var8;
            var8 = 7;
            var9 = var12[var8];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.eAn6z8;
            var8 = var9.bind(var10)(var8);
            var6['body'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 258:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
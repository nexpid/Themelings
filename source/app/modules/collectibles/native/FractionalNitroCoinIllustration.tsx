// app/modules/collectibles/native/FractionalNitroCoinIllustration.tsx
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EXTERNAL_PRODUCT_SKU_IDS;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/FractionalNitroCoinIllustration.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = {'CARD': 80, 'CHECKOUT': 45, 'COLLECTED_SHEET': 68};
    var3['FRACTIONAL_NITRO_COIN_SIZE'] = var4;
    var2 = function FractionalNitroCoinIllustration(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.skuId;
            var7 = var1.width;
            var6 = var1.height;
            var5 = var1.resizeMode;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = 'contain';
case 2:
            var2 = _closure1_slot2;
            var2 = var2.FRACTIONAL_PREMIUM_1_DAY;
            if(!(var3 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 3;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.NitroCoinStackSpotIllustration;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 3;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var3 = var2.NitroCoinSpotIllustration;
case 6:
            var2 = _closure1_slot3;
            var1 = {};
            var1['width'] = var7;
            var1['height'] = var6;
            var1['resizeMode'] = var5;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var3['FractionalNitroCoinIllustration'] = var2;
    return var1;
})();
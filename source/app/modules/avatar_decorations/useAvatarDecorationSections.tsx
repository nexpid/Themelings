// app/modules/avatar_decorations/useAvatarDecorationSections.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var4 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var9;
    var1 = global;
    var7 = var1.Object;
    var5 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var9[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var9[var2];
    var2 = var8.bind(var1)(var2);
    var2 = var2.useMemo;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var9[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var9[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var9[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var5 = {};
    var2 = 'purchase';
    var5['PURCHASE'] = var2;
    var2 = 'premium_purchase';
    var5['PREMIUM_PURCHASE'] = var2;
    var2 = 'preview';
    var5['PREVIEW'] = var2;
    var2 = 'premium_preview';
    var5['PREMIUM_PREVIEW'] = var2;
    var _closure1_slot8 = var5;
    var4 = {};
    var2 = 'None';
    var4['id'] = var2;
    var _closure1_slot9 = var4;
    var2 = {};
    var7 = 'Shop';
    var2['id'] = var7;
    var _closure1_slot10 = var2;
    var7 = 9;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/avatar_decorations/useAvatarDecorationSections.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function _default() {
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 5;
        var5 = var8[var3];
        var4 = undefined;
        var10 = var7.bind(var4)(var5);
        var9 = var10.useStateFromStores;
        var5 = _closure1_slot7;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = function() {
            var2 = _closure1_slot7;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            return var1;
        };
        var9 = var9.bind(var10)(var6, var5);
        var6 = _closure1_slot1;
        var5 = 6;
        var5 = var8[var5];
        var6 = var6.bind(var4)(var5);
        var5 = var6.canUseCollectibles;
        var5 = var5.bind(var6)(var9);
        var _closure2_slot0 = var5;
        var6 = var8[var3];
        var11 = var7.bind(var4)(var6);
        var10 = var11.useStateFromStores;
        var6 = _closure1_slot6;
        var9 = new Array(1);
        var9[0] = var6;
        var6 = function() {
            var1 = _closure1_slot6;
            var1 = var1.purchases;
            return var1;
        };
        var6 = var10.bind(var11)(var9, var6);
        var _closure2_slot1 = var6;
        var3 = var8[var3];
        var9 = var7.bind(var4)(var3);
        var8 = var9.useStateFromStoresArray;
        var3 = _closure1_slot5;
        var7 = new Array(1);
        var7[0] = var3;
        var3 = function() {
            var2 = _closure1_slot5;
            var3 = var2.categories;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.products;
            var1[1] = var2;
            return var1;
        };
        var8 = var8.bind(var9)(var7, var3);
        var7 = _closure1_slot3;
        var3 = 2;
        var7 = var7.bind(var4)(var8, var3);
        var3 = 0;
        var8 = var7[var3];
        var _closure2_slot2 = var8;
        var3 = 1;
        var7 = var7[var3];
        var _closure2_slot3 = var7;
        var3 = _closure1_slot4;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var11 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 7;
                var2 = var3[var2];
                var8 = undefined;
                var6 = var11.bind(var8)(var2);
                var5 = var6.getAvatarDecorations;
                var4 = _closure2_slot1;
                var2 = _closure2_slot2;
                var6 = var5.bind(var6)(var4, var2);
                var5 = var6.reduce;
                var4 = {};
                var2 = new Array(0);
                var4['purchase'] = var2;
                var2 = new Array(0);
                var4['premium_purchase'] = var2;
                var2 = new Array(0);
                var4['preview'] = var2;
                var2 = new Array(0);
                var4['premium_preview'] = var2;
                var2 = function(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = arg1;
                        var4 = arg2;
                        var6 = _closure2_slot1;
                        var5 = var6.get;
                        var3 = var4.skuId;
                        var8 = var5.bind(var6)(var3);
                        var9 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var7 = 7;
                        var5 = var5[var7];
                        var6 = undefined;
                        var9 = var9.bind(var6)(var5);
                        var5 = var9.isPremiumCollectiblesPurchase;
                        var5 = var5.bind(var9)(var8);
                        var9 = var5;
                        if(!var9) { _fun0002_ip = 88; continue _fun0002 }
 71:
                        var10 = var1.premium_purchase;
                        var11 = var10.length;
                        var10 = 0;
                        var9 = var10 === var11;
 88:
                        if(!var9) { _fun0002_ip = 113; continue _fun0002 }
 91:
                        var9 = var1.premium_preview;
                        var1['premium_purchase'] = var9;
                        var9 = new Array(0);
                        var1['premium_preview'] = var9;
 113:
                        if(var5) { _fun0002_ip = 262; continue _fun0002 }
 119:
                        var5 = null;
                        if(!(var5 == var8)) { _fun0002_ip = 244; continue _fun0002 }
 125:
                        var5 = _closure2_slot0;
                        if(var5) { _fun0002_ip = 226; continue _fun0002 }
 132:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var5 = var5.bind(var6)(var3);
                        var3 = var5.isPremiumCollectiblesProduct;
                        var7 = _closure2_slot3;
                        var6 = var7.get;
                        var2 = var4.skuId;
                        var2 = var6.bind(var7)(var2);
                        var2 = var3.bind(var5)(var2);
                        if(!var2) { _fun0002_ip = 226; continue _fun0002 }
 183:
                        var2 = var1.premium_purchase;
                        var3 = var2.length;
                        var2 = 0;
                        if(!(!(var3 > var2))) { _fun0002_ip = 208; continue _fun0002 }
 200:
                        var3 = var1.premium_preview;
                        _fun0002_ip = 214; continue _fun0002;
 208:
                        var3 = var1.premium_purchase;
 214:
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
                        _fun0002_ip = 278; continue _fun0002;
 226:
                        var3 = var1.preview;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
                        _fun0002_ip = 278; continue _fun0002;
 244:
                        var3 = var1.purchase;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
                        _fun0002_ip = 278; continue _fun0002;
 262:
                        var3 = var1.premium_purchase;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
 278:
                        return var1;
                    }
                };
                var6 = var5.bind(var6)(var2, var4);
                var2 = {};
                var4 = _closure1_slot8;
                var4 = var4.PURCHASE;
                var2['section'] = var4;
                var5 = _closure1_slot9;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = _closure1_slot10;
                var4[1] = var5;
                var15 = var6.purchase;
                var14 = 2;
                var16 = var4;
                var5 = arraySpread(var16, var15, var14);
                var2['items'] = var4;
                var5 = 12;
                var2['height'] = var5;
                var9 = 8;
                var4 = var3[var9];
                var4 = var11.bind(var8)(var4);
                var7 = var4.intl;
                var4 = var7.string;
                var3 = var3[var9];
                var3 = var11.bind(var8)(var3);
                var3 = var3.t;
                var3 = var3.VqmVqK;
                var3 = var4.bind(var7)(var3);
                var2['header'] = var3;
                var3 = new Array(3);
                var3[0] = var2;
                var2 = {};
                var4 = var6.premium_purchase;
                var4 = var4.length;
                var7 = 0;
                if(!(!(var4 > var7))) { _fun0001_ip = 261; continue _fun0001 }
 249:
                var4 = _closure1_slot8;
                var4 = var4.PREMIUM_PREVIEW;
                _fun0001_ip = 271; continue _fun0001;
 261:
                var11 = _closure1_slot8;
                var4 = var11.PREMIUM_PURCHASE;
 271:
                var2['section'] = var4;
                var4 = var6.premium_purchase;
                var4 = var4.length;
                if(!(!(var4 > var7))) { _fun0001_ip = 298; continue _fun0001 }
 290:
                var4 = var6.premium_preview;
                _fun0001_ip = 304; continue _fun0001;
 298:
                var4 = var6.premium_purchase;
 304:
                var2['items'] = var4;
                var2['height'] = var5;
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var11 = var4[var9];
                var11 = var7.bind(var8)(var11);
                var13 = var11.intl;
                var12 = var13.string;
                var11 = var4[var9];
                var11 = var7.bind(var8)(var11);
                var11 = var11.t;
                var11 = var11.TiLCg4;
                var11 = var12.bind(var13)(var11);
                var2['header'] = var11;
                var3[1] = var2;
                var2 = {};
                var10 = _closure1_slot8;
                var10 = var10.PREVIEW;
                var2['section'] = var10;
                var6 = var6.preview;
                var2['items'] = var6;
                var2['height'] = var5;
                var5 = var4[var9];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var4[var9];
                var4 = var7.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4.1vbbeX;
                var4 = var5.bind(var6)(var4);
                var2['header'] = var4;
                var3[2] = var2;
                var2 = var3.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.items;
                    var2 = var1.length;
                    var1 = 0;
                    var1 = var2 > var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var6;
    var3['Section'] = var5;
    var3['NONE_ITEM'] = var4;
    var3['SHOP_ITEM'] = var2;
    return var1;
})();
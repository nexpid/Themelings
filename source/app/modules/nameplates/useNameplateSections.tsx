// app/modules/nameplates/useNameplateSections.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var4 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
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
    var2 = var8.bind(var1)(var2);
    var2 = var2.useMemo;
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var9[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var9[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var5 = {};
    var2 = 'purchase';
    var5['PURCHASE'] = var2;
    var2 = 'preview';
    var5['PREVIEW'] = var2;
    var _closure1_slot5 = var5;
    var4 = {};
    var2 = 'None';
    var4['id'] = var2;
    var _closure1_slot6 = var4;
    var2 = {};
    var7 = 'Shop';
    var2['id'] = var7;
    var _closure1_slot7 = var2;
    var7 = 6;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/nameplates/useNameplateSections.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var5 = var2.hideShop;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 19; continue _fun0001 }
 17:
            var5 = false;
 19:
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 3;
            var6 = var8[var3];
            var11 = var7.bind(var4)(var6);
            var10 = var11.useStateFromStores;
            var6 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                var1 = _closure1_slot4;
                var1 = var1.purchases;
                return var1;
            };
            var6 = var10.bind(var11)(var9, var6);
            _closure2_slot1 = var6;
            var3 = var8[var3];
            var9 = var7.bind(var4)(var3);
            var8 = var9.useStateFromStores;
            var3 = _closure1_slot3;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var1 = _closure1_slot3;
                var1 = var1.categories;
                return var1;
            };
            var7 = var8.bind(var9)(var7, var3);
            _closure2_slot2 = var7;
            var3 = _closure1_slot2;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 4;
                    var2 = var5[var2];
                    var8 = undefined;
                    var6 = var3.bind(var8)(var2);
                    var5 = var6.getNameplates;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var6 = var5.bind(var6)(var3, var2);
                    var5 = var6.reduce;
                    var3 = {};
                    var2 = new Array(0);
                    var3['purchase'] = var2;
                    var2 = new Array(0);
                    var3['preview'] = var2;
                    var2 = function(arg1, arg2) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = arg1;
                            var4 = arg2;
                            var5 = _closure2_slot1;
                            var3 = var5.get;
                            var2 = var4.skuId;
                            var3 = var3.bind(var5)(var2);
                            var2 = null;
                            if(!(var2 == var3)) { _fun0003_ip = 53; continue _fun0003 }
 35:
                            var3 = var1.preview;
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var4);
                            _fun0003_ip = 69; continue _fun0003;
 53:
                            var3 = var1.purchase;
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var4);
 69:
                            return var1;
                        }
                    };
                    var6 = var5.bind(var6)(var2, var3);
                    var2 = {};
                    var3 = _closure1_slot5;
                    var3 = var3.PURCHASE;
                    var2['section'] = var3;
                    var5 = _closure1_slot6;
                    var3 = new Array(1);
                    var3[0] = var5;
                    var5 = _closure2_slot0;
                    if(var5) { _fun0002_ip = 138; continue _fun0002 }
 124:
                    var5 = _closure1_slot7;
                    var9 = new Array(1);
                    var9[0] = var5;
                    _fun0002_ip = 142; continue _fun0002;
 138:
                    var9 = new Array(0);
 142:
                    var13 = 1;
                    var15 = var3;
                    var14 = var9;
                    var13 = arraySpread(var15, var14, var13);
                    var14 = var6.purchase;
                    var15 = var3;
                    var5 = arraySpread(var15, var14, var13);
                    var2['items'] = var3;
                    var5 = 12;
                    var2['height'] = var5;
                    var12 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var9 = 5;
                    var10 = var3[var9];
                    var10 = var12.bind(var8)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var3 = var3[var9];
                    var3 = var12.bind(var8)(var3);
                    var3 = var3.t;
                    var3 = var3.WfGV5+;
                    var3 = var10.bind(var11)(var3);
                    var2['header'] = var3;
                    var3 = new Array(2);
                    var3[0] = var2;
                    var2 = {};
                    var10 = _closure1_slot5;
                    var10 = var10.PREVIEW;
                    var2['section'] = var10;
                    var7 = _closure2_slot0;
                    if(var7) { _fun0002_ip = 280; continue _fun0002 }
 272:
                    var6 = var6.preview;
                    _fun0002_ip = 284; continue _fun0002;
 280:
                    var6 = new Array(0);
 284:
                    var2['items'] = var6;
                    var2['height'] = var5;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot1;
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
                    var3[1] = var2;
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
        }
    };
    var3['default'] = var6;
    var3['Section'] = var5;
    var3['NONE_ITEM'] = var4;
    var3['SHOP_ITEM'] = var2;
    return var1;
})();
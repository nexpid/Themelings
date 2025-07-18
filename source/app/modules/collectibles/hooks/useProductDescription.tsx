// app/modules/collectibles/hooks/useProductDescription.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.useMemo;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.isExternalProduct;
    var _closure1_slot4 = var4;
    var4 = function getBundleName(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var1 = arguments[1];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var1 = false;
 14:
            if(var1) { _fun0001_ip = 159; continue _fun0001 }
 20:
            var2 = var6.bundledProducts;
            var1 = null;
            if(!(var1 == var2)) { _fun0001_ip = 38; continue _fun0001 }
 32:
            var4 = new Array(0);
            _fun0001_ip = 44; continue _fun0001;
 38:
            var4 = var6.bundledProducts;
 44:
            var3 = _closure1_slot2;
            var2 = 2;
            var3 = var3.bind(var5)(var4, var2);
            var2 = 0;
            var8 = var3[var2];
            var2 = 1;
            var7 = var3[var2];
            var2 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 3;
            var3 = var9[var1];
            var3 = var2.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var9[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.t;
            var2 = var1.WQbNhI;
            var1 = {};
            var8 = var8.name;
            var1['decoName'] = var8;
            var7 = var7.name;
            var1['pfxName'] = var7;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 159:
            var2 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 3;
            var3 = var7[var1];
            var3 = var2.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.t;
            var2 = var1./0Yndn;
            var1 = {};
            var6 = var6.bundledProducts;
            var7 = null;
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 238; continue _fun0001 }
 233:
            var5 = var6.length;
 238:
            var1['num'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var4 = function getCustomizedProductDescription(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var5 = arguments[1];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0002_ip = 14; continue _fun0002 }
 12:
            var5 = false;
 14:
            var1 = null;
            var2 = var1 == var6;
            var1 = '';
            if(var2) { _fun0002_ip = 92; continue _fun0002 }
 27:
            var7 = var6.type;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 4;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.BUNDLE;
            if(!(var7 !== var2)) { _fun0002_ip = 79; continue _fun0002 }
 71:
            var2 = var6.summary;
            _fun0002_ip = 89; continue _fun0002;
 79:
            var3 = _closure1_slot5;
            var2 = var3.bind(var4)(var6, var5);
 89:
            var1 = var2;
 92:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/hooks/useProductDescription.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getCustomizedProductDescription'] = var4;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var6 = arg1;
            var5 = arguments[1];
            var _closure2_slot0 = var6;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0003_ip = 20; continue _fun0003 }
 18:
            var5 = false;
 20:
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var4;
            var2 = null;
            var7 = var2 == var6;
            var3 = undefined;
            if(var7) { _fun0003_ip = 45; continue _fun0003 }
 39:
            var3 = var6.skuId;
 45:
            var7 = var2 != var3;
            if(!var7) { _fun0003_ip = 79; continue _fun0003 }
 52:
            var3 = _closure1_slot4;
            var8 = var2 == var6;
            var2 = undefined;
            if(var8) { _fun0003_ip = 74; continue _fun0003 }
 68:
            var2 = var6.skuId;
 74:
            var7 = var3.bind(var4)(var2);
 79:
            _closure2_slot2 = var7;
            var3 = _closure1_slot3;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0004_ip = 388; continue _fun0004 }
 13:
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot1;
                    var7 = undefined;
                    if(!(var5 === var7)) { _fun0004_ip = 29; continue _fun0004 }
 27:
                    var5 = false;
 29:
                    var1 = null;
                    var1 = var1 == var6;
                    var8 = undefined;
                    if(var1) { _fun0004_ip = 45; continue _fun0004 }
 40:
                    var8 = var6.type;
 45:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var9 = 4;
                    var1 = var1[var9];
                    var1 = var4.bind(var7)(var1);
                    var1 = var1.CollectiblesItemType;
                    var1 = var1.AVATAR_DECORATION;
                    if(!(var1 !== var8)) { _fun0004_ip = 329; continue _fun0004 }
 87:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var9];
                    var1 = var4.bind(var7)(var1);
                    var1 = var1.CollectiblesItemType;
                    var1 = var1.PROFILE_EFFECT;
                    if(!(var1 !== var8)) { _fun0004_ip = 270; continue _fun0004 }
 123:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var9];
                    var1 = var4.bind(var7)(var1);
                    var1 = var1.CollectiblesItemType;
                    var1 = var1.NAMEPLATE;
                    if(!(var1 !== var8)) { _fun0004_ip = 211; continue _fun0004 }
 156:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var9];
                    var1 = var4.bind(var7)(var1);
                    var1 = var1.CollectiblesItemType;
                    var4 = var1.BUNDLE;
                    var1 = '';
                    if(!(var4 === var8)) { _fun0004_ip = 386; continue _fun0004 }
 196:
                    var4 = _closure1_slot5;
                    var1 = var4.bind(var7)(var6, var5);
                    _fun0004_ip = 386; continue _fun0004;
 211:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var4 = 3;
                    var5 = var9[var4];
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var8.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4.ik37ER;
                    var1 = var5.bind(var6)(var4);
                    _fun0004_ip = 386; continue _fun0004;
 270:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var4 = 3;
                    var5 = var9[var4];
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var8.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4.VhJL7+;
                    var1 = var5.bind(var6)(var4);
                    _fun0004_ip = 386; continue _fun0004;
 329:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 3;
                    var4 = var8[var3];
                    var4 = var6.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.t;
                    var3 = var3.3lv7q6;
                    var1 = var4.bind(var5)(var3);
 386:
                    _fun0004_ip = 411; continue _fun0004;
 388:
                    var5 = _closure1_slot6;
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
 411:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useProductDescription'] = var2;
    return var1;
})();
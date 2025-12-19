// app/modules/collectibles/hooks/useProductDescription.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.useMemo;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isExternalProduct;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useProductDescription.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var6 = arguments[1];
            var5 = arguments[2];
            var _closure2_slot0 = var7;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var5;
            var3 = _closure1_slot2;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = _closure2_slot0;
                    if(!(var3 != var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var4 = var4.skuId;
                    var6 = undefined;
                    var4 = var5.bind(var6)(var4);
                    if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                    var4 = _closure2_slot0;
                    var4 = var4.type;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 3;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.CollectiblesItemType;
                    var2 = var2.BUNDLE;
                    if(!(var4 !== var2)) { _fun0002_ip = 6; continue _fun0002 }
case 9:
                    var2 = _closure2_slot0;
                    var2 = var2.summary;
                    if(!(var3 != var2)) { _fun0002_ip = 6; continue _fun0002 }
case 10:
                    var2 = _closure2_slot0;
                    var4 = var2.summary;
                    var2 = '';
                    if(!(var2 === var4)) { _fun0002_ip = 11; continue _fun0002 }
case 6:
                    var2 = _closure2_slot0;
                    var2 = var3 == var2;
                    var6 = undefined;
                    var4 = undefined;
                    if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var2 = _closure2_slot0;
                    var4 = var2.type;
case 12:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var7 = 3;
                    var3 = var3[var7];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.AVATAR_DECORATION;
                    if(!(var3 !== var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var7];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.PROFILE_EFFECT;
                    if(!(var3 !== var4)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var7];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.NAMEPLATE;
                    if(!(var3 !== var4)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var7];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.BUNDLE;
                    if(!(var3 !== var4)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var3 = '';
                    return var3;
case 20:
                    var5 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var3 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var6 = arg1;
                            var1 = arguments[1];
                            var5 = undefined;
                            if(!(var1 === var5)) { _fun0003_ip = 5; continue _fun0003 }
case 22:
                            var1 = false;
case 5:
                            if(var1) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                            var4 = var6.bundledProducts;
                            var1 = null;
                            if(!(var1 == var4)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                            var4 = new Array(0);
case 25:
                            var7 = var4.find;
                            var3 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.type;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var1 = 3;
                                var3 = var3[var1];
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3);
                                var1 = var1.CollectiblesItemType;
                                var1 = var1.AVATAR_DECORATION;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var12 = var7.bind(var4)(var3);
                            var7 = var4.find;
                            var3 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.type;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var1 = 3;
                                var3 = var3[var1];
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3);
                                var1 = var1.CollectiblesItemType;
                                var1 = var1.PROFILE_EFFECT;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var11 = var7.bind(var4)(var3);
                            var3 = var4.find;
                            var2 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.type;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var1 = 3;
                                var3 = var3[var1];
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3);
                                var1 = var1.CollectiblesItemType;
                                var1 = var1.NAMEPLATE;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var9 = var3.bind(var4)(var2);
                            if(!(var1 == var9)) { _fun0003_ip = 27; continue _fun0003 }
case 9:
                            var3 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var2 = 2;
                            var4 = var8[var2];
                            var4 = var3.bind(var5)(var4);
                            var7 = var4.intl;
                            var4 = var7.formatToPlainString;
                            var2 = var8[var2];
                            var2 = var3.bind(var5)(var2);
                            var2 = var2.t;
                            var3 = var2.BS1Cuy;
                            var2 = {};
                            var8 = var1 == var12;
                            var13 = undefined;
                            if(var8) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                            var13 = var12.name;
case 28:
                            var14 = var1 != var13;
                            var8 = '';
                            var10 = var8;
                            if(!var14) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                            var10 = var13;
case 30:
                            var2['decoName'] = var10;
                            var13 = var1 == var11;
                            var10 = undefined;
                            if(var13) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                            var10 = var11.name;
case 32:
                            var13 = var1 != var10;
                            if(!var13) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                            var8 = var10;
case 34:
                            var2['pfxName'] = var8;
                            var2 = var4.bind(var7)(var3, var2);
                            return var2;
case 27:
                            var3 = new Array(0);
                            if(!(var1 != var12)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                            var4 = var3.push;
                            var7 = _closure1_slot0;
                            var13 = _closure1_slot1;
                            var2 = 2;
                            var8 = var13[var2];
                            var8 = var7.bind(var5)(var8);
                            var10 = var8.intl;
                            var8 = var10.formatToPlainString;
                            var2 = var13[var2];
                            var2 = var7.bind(var5)(var2);
                            var2 = var2.t;
                            var7 = var2.Ntv9Jt;
                            var2 = {};
                            var12 = var12.name;
                            var2['itemName'] = var12;
                            var2 = var8.bind(var10)(var7, var2);
                            var2 = var4.bind(var3)(var2);
case 36:
                            if(!(var1 != var11)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                            var4 = var3.push;
                            var7 = _closure1_slot0;
                            var12 = _closure1_slot1;
                            var2 = 2;
                            var8 = var12[var2];
                            var8 = var7.bind(var5)(var8);
                            var10 = var8.intl;
                            var8 = var10.formatToPlainString;
                            var2 = var12[var2];
                            var2 = var7.bind(var5)(var2);
                            var2 = var2.t;
                            var7 = var2.3Y8q7a;
                            var2 = {};
                            var11 = var11.name;
                            var2['itemName'] = var11;
                            var2 = var8.bind(var10)(var7, var2);
                            var2 = var4.bind(var3)(var2);
case 38:
                            if(!(var1 != var9)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                            var2 = var3.push;
                            var4 = _closure1_slot0;
                            var10 = _closure1_slot1;
                            var1 = 2;
                            var7 = var10[var1];
                            var7 = var4.bind(var5)(var7);
                            var8 = var7.intl;
                            var7 = var8.formatToPlainString;
                            var1 = var10[var1];
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.t;
                            var4 = var1.2keXky;
                            var1 = {};
                            var9 = var9.name;
                            var1['itemName'] = var9;
                            var1 = var7.bind(var8)(var4, var1);
                            var1 = var2.bind(var3)(var1);
case 40:
                            var2 = var3.join;
                            var1 = ', ';
                            var4 = var2.bind(var3)(var1);
                            var3 = var4.replace;
                            var2 = /, ([^,]*)$/;
                            var1 = ' & $1';
                            var7 = var3.bind(var4)(var2, var1);
                            var2 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var1 = 2;
                            var3 = var8[var1];
                            var3 = var2.bind(var5)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var1 = var8[var1];
                            var1 = var2.bind(var5)(var1);
                            var1 = var1.t;
                            var2 = var1.Ofrqj6;
                            var1 = {};
                            var1['joinedItems'] = var7;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
case 23:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var1 = 2;
                            var3 = var7[var1];
                            var3 = var2.bind(var5)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var1 = var7[var1];
                            var1 = var2.bind(var5)(var1);
                            var1 = var1.t;
                            var2 = var1./0Yndu;
                            var1 = {};
                            var6 = var6.bundledProducts;
                            var7 = null;
                            var7 = var7 == var6;
                            var5 = undefined;
                            if(var7) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                            var5 = var6.length;
case 42:
                            var1['num'] = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        }
                    };
                    var3 = var3.bind(var6)(var5, var4);
                    return var3;
case 18:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 2;
                    var4 = var8[var3];
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.ik37EZ;
                    var3 = var4.bind(var5)(var3);
                    return var3;
case 16:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 2;
                    var4 = var8[var3];
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.VhJL72;
                    var3 = var4.bind(var5)(var3);
                    return var3;
case 14:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 2;
                    var3 = var7[var2];
                    var3 = var5.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.t;
                    var2 = var2.3lv7q2;
                    var2 = var3.bind(var4)(var2);
                    return var2;
case 11:
                    var2 = _closure2_slot0;
                    var2 = var2.summary;
                    return var2;
case 4:
                    var3 = _closure2_slot2;
                    var2 = 3;
                    if(!(var2 !== var3)) { _fun0002_ip = 44; continue _fun0002 }
case 45:
                    var2 = _closure2_slot2;
                    var1 = 7;
                    if(!(var1 !== var2)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 2;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.o+VpXZ;
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 48; continue _fun0002;
case 46:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 2;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.yPxJA2;
                    var1 = var3.bind(var4)(var2);
case 48:
                    _fun0002_ip = 49; continue _fun0002;
case 44:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 2;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.QUjmjp;
                    var1 = var3.bind(var4)(var2);
case 49:
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
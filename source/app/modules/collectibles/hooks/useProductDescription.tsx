// app/modules/collectibles/hooks/useProductDescription.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot5;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot5;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
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
    var4 = function getBundleDescription(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var2 = arguments[1];
            var5 = undefined;
            if(!(var2 === var5)) { _fun0004_ip = 32; continue _fun0004 }
case 36:
            var2 = false;
case 32:
            if(var2) { _fun0004_ip = 37; continue _fun0004 }
case 31:
            var4 = new Array(0);
            var3 = _closure1_slot4;
            var2 = var6.bundledProducts;
            var7 = null;
            if(!(var7 == var2)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var2 = new Array(0);
case 38:
            var12 = var3.bind(var5)(var2);
            var7 = var12.bind(var5)();
            var3 = var7.done;
            var9 = 1;
            var10 = 2;
            var8 = var7;
            var7 = false;
            var2 = false;
            if(var3) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var18 = var8.value;
            var14 = var18.type;
            var13 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var10];
            var3 = var13.bind(var5)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.AVATAR_DECORATION;
            if(!(var3 !== var14)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var13 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var10];
            var3 = var13.bind(var5)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.PROFILE_EFFECT;
            if(!(var3 !== var14)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var13 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var10];
            var3 = var13.bind(var5)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.NAMEPLATE;
            var13 = var7;
            if(!(var3 === var14)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var14 = var4.push;
            var15 = _closure1_slot0;
            var3 = _closure1_slot1;
            var16 = var3[var9];
            var16 = var15.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var3 = var3[var9];
            var3 = var15.bind(var5)(var3);
            var3 = var3.t;
            var15 = var3["2keXky"];
            var3 = {};
            var19 = var18.name;
            var3['itemName'] = var19;
            var3 = var16.bind(var17)(var15, var3);
            var3 = var14.bind(var4)(var3);
            var13 = true;
            _fun0004_ip = 46; continue _fun0004;
case 44:
            var14 = var4.push;
            var15 = _closure1_slot0;
            var3 = _closure1_slot1;
            var16 = var3[var9];
            var16 = var15.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var3 = var3[var9];
            var3 = var15.bind(var5)(var3);
            var3 = var3.t;
            var15 = var3["3Y8q7a"];
            var3 = {};
            var19 = var18.name;
            var3['itemName'] = var19;
            var3 = var16.bind(var17)(var15, var3);
            var3 = var14.bind(var4)(var3);
            var13 = var7;
            _fun0004_ip = 46; continue _fun0004;
case 42:
            var14 = var4.push;
            var15 = _closure1_slot0;
            var3 = _closure1_slot1;
            var16 = var3[var9];
            var16 = var15.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var3 = var3[var9];
            var3 = var15.bind(var5)(var3);
            var3 = var3.t;
            var15 = var3.Ntv9Jt;
            var3 = {};
            var18 = var18.name;
            var3['itemName'] = var18;
            var3 = var16.bind(var17)(var15, var3);
            var3 = var14.bind(var4)(var3);
            var13 = var7;
case 46:
            var14 = var12.bind(var5)();
            var3 = var14.done;
            var7 = var13;
            var8 = var14;
            var2 = var7;
            if(!var3) { _fun0004_ip = 41; continue _fun0004 }
case 40:
            var3 = var4.join;
            if(var2) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var2 = ' & ';
            var11 = var3.bind(var4)(var2);
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = var2[var9];
            var8 = var7.bind(var5)(var8);
            var10 = var8.intl;
            var8 = var10.formatToPlainString;
            var2 = var2[var9];
            var2 = var7.bind(var5)(var2);
            var2 = var2.t;
            var7 = var2.Ofrqj6;
            var2 = {};
            var2['joinedItems'] = var11;
            var2 = var8.bind(var10)(var7, var2);
            return var2;
case 48:
            var2 = ', ';
            var7 = var3.bind(var4)(var2);
            var4 = var7.replace;
            var3 = /, ([^,]*)$/;
            var2 = ' & $1';
            var8 = var4.bind(var7)(var3, var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var4 = var2[var9];
            var4 = var3.bind(var5)(var4);
            var7 = var4.intl;
            var4 = var7.formatToPlainString;
            var2 = var2[var9];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.Ofrqj6;
            var2 = {};
            var2['joinedItems'] = var8;
            var2 = var4.bind(var7)(var3, var2);
            return var2;
case 37:
            var2 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 1;
            var3 = var7[var1];
            var3 = var2.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.t;
            var2 = var1["/0Yndu"];
            var1 = {};
            var6 = var6.bundledProducts;
            var7 = null;
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var5 = var6.length;
case 50:
            var1['num'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useProductDescription.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg1;
            var5 = arguments[1];
            var _closure2_slot0 = var6;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0005_ip = 29; continue _fun0005 }
case 52:
            var5 = false;
case 29:
            var _closure2_slot1 = var5;
            var3 = _closure1_slot2;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                    var1 = _closure2_slot0;
                    var1 = var1.summary;
                    if(!(var3 != var1)) { _fun0006_ip = 53; continue _fun0006 }
case 55:
                    var1 = _closure2_slot0;
                    var4 = var1.summary;
                    var1 = '';
                    if(!(var1 === var4)) { _fun0006_ip = 56; continue _fun0006 }
case 53:
                    var1 = _closure2_slot0;
                    var1 = var3 == var1;
                    var6 = undefined;
                    var4 = undefined;
                    if(var1) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                    var1 = _closure2_slot0;
                    var4 = var1.type;
case 57:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var7 = 2;
                    var3 = var3[var7];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.AVATAR_DECORATION;
                    if(!(var3 !== var4)) { _fun0006_ip = 59; continue _fun0006 }
case 60:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var7];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.PROFILE_EFFECT;
                    if(!(var3 !== var4)) { _fun0006_ip = 61; continue _fun0006 }
case 62:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var7];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.NAMEPLATE;
                    if(!(var3 !== var4)) { _fun0006_ip = 63; continue _fun0006 }
case 64:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var7];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.PROFILE_FRAME;
                    if(!(var3 !== var4)) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var7];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.BUNDLE;
                    if(!(var3 !== var4)) { _fun0006_ip = 67; continue _fun0006 }
case 68:
                    var3 = '';
                    return var3;
case 67:
                    var5 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var3 = var5.bind(var6)(var4, var3);
                    return var3;
case 65:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 1;
                    var4 = var8[var3];
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.fWzWPp;
                    var3 = var4.bind(var5)(var3);
                    return var3;
case 63:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 1;
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
case 61:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 1;
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
case 59:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 1;
                    var3 = var7[var1];
                    var3 = var5.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var1 = var7[var1];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.t;
                    var1 = var1["3lv7q2"];
                    var1 = var3.bind(var4)(var1);
                    return var1;
case 56:
                    var1 = _closure2_slot0;
                    var4 = var1.type;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 2;
                    var3 = var5[var3];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.BUNDLE;
                    if(!(var4 === var3)) { _fun0006_ip = 69; continue _fun0006 }
case 70:
                    var3 = _closure2_slot0;
                    var6 = var3.summary;
                    var3 = var6.includes;
                    var4 = '{joinedItems}';
                    var3 = var3.bind(var6)(var4);
                    if(var3) { _fun0006_ip = 71; continue _fun0006 }
case 69:
                    var3 = _closure2_slot0;
                    var3 = var3.summary;
                    return var3;
case 71:
                    var3 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var3 = var3.bind(var5)(var1, var2);
                    var2 = var1.summary;
                    var1 = var2.replace;
                    var1 = var1.bind(var2)(var4, var3);
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
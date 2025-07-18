// app/modules/phone/native/CountryCallingCodeSelect.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot11;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot11;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getI18NCountryName;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 6;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9['paddingHorizontal'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingVertical'] = var13;
    var9['flex'] = var12;
    var4['container'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['paddingBottom'] = var10;
    var4['searchFieldContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/phone/native/CountryCallingCodeSelect.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CountryCallingCodeSelect(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var11 = var2.onCountrySelected;
            var _closure2_slot0 = var11;
            var14 = var2.onClose;
            var _closure2_slot1 = var14;
            var2 = _closure1_slot9;
            var4 = undefined;
            var15 = var2.bind(var4)();
            var5 = _closure1_slot4;
            var2 = var5.useState;
            var13 = '';
            var6 = var2.bind(var5)(var13);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var6, var2);
            var7 = 0;
            var8 = var3[var7];
            var _closure2_slot2 = var8;
            var2 = 1;
            var17 = var3[var2];
            var6 = var5.useMemo;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.flatMap;
                var1 = function(arg1, arg2) {
                    var2 = arg1;
                    var5 = var2.alpha2;
                    var _closure4_slot0 = var5;
                    var3 = var2.phoneCountryCodes;
                    var2 = var2.name;
                    var _closure4_slot1 = var2;
                    var2 = arg2;
                    var _closure4_slot2 = var2;
                    var4 = _closure1_slot6;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var5);
                    var _closure4_slot3 = var2;
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var4 = arg1;
                        var1 = {};
                        var2 = _closure4_slot3;
                        var1['translatedName'] = var2;
                        var7 = _closure4_slot2;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var6 = var2.concat;
                        var5 = '';
                        var2 = '-';
                        var2 = var6.bind(var5)(var7, var2, var4);
                        var1['key'] = var2;
                        var2 = {};
                        var2['code'] = var4;
                        var4 = _closure4_slot0;
                        var2['alpha2'] = var4;
                        var3 = _closure4_slot1;
                        var2['name'] = var3;
                        var1['country'] = var2;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = new Array(0);
            var2 = var6.bind(var5)(var3, var2);
            var _closure2_slot3 = var2;
            var6 = _closure1_slot1;
            var18 = _closure1_slot2;
            var3 = 8;
            var3 = var18[var3];
            var3 = var6.bind(var4)(var3);
            var9 = var3.bind(var4)();
            var6 = var5.useMemo;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var8;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = new Array(0);
                    var3 = _closure1_slot10;
                    var1 = _closure2_slot3;
                    var8 = undefined;
                    var7 = var3.bind(var8)(var1);
                    var3 = var7.bind(var8)();
                    var1 = var3.done;
                    var6 = 9;
                    var5 = '';
                    var4 = 0;
                    if(var1) { _fun0005_ip = 294; continue _fun0005 }
 49:
                    var11 = var3.value;
                    var1 = _closure2_slot2;
                    var1 = var1.length;
                    var1 = var4 === var1;
                    if(var1) { _fun0005_ip = 146; continue _fun0005 }
 70:
                    var12 = var11.country;
                    var14 = var12.code;
                    var13 = var14.replace;
                    var12 = /\+|\s/g;
                    var14 = var13.bind(var14)(var12, var5);
                    var13 = var14.startsWith;
                    var16 = _closure2_slot2;
                    var15 = var16.replace;
                    var12 = /\+|\s/g;
                    var12 = var15.bind(var16)(var12, var5);
                    var1 = var13.bind(var14)(var12);
 146:
                    if(var1) { _fun0005_ip = 207; continue _fun0005 }
 149:
                    var13 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var12 = var12[var6];
                    var14 = var13.bind(var8)(var12);
                    var13 = _closure2_slot2;
                    var12 = var13.toLowerCase;
                    var13 = var12.bind(var13)();
                    var12 = var11.country;
                    var15 = var12.name;
                    var12 = var15.toLowerCase;
                    var12 = var12.bind(var15)();
                    var1 = var14.bind(var8)(var13, var12);
 207:
                    if(var1) { _fun0005_ip = 263; continue _fun0005 }
 210:
                    var13 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var12 = var12[var6];
                    var14 = var13.bind(var8)(var12);
                    var13 = _closure2_slot2;
                    var12 = var13.toLowerCase;
                    var13 = var12.bind(var13)();
                    var15 = var11.translatedName;
                    var12 = var15.toLowerCase;
                    var12 = var12.bind(var15)();
                    var1 = var14.bind(var8)(var13, var12);
 263:
                    if(!var1) { _fun0005_ip = 276; continue _fun0005 }
 266:
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var11);
 276:
                    var11 = var7.bind(var8)();
                    var1 = var11.done;
                    var3 = var11;
                    if(!var1) { _fun0005_ip = 49; continue _fun0005 }
 294:
                    var1 = {};
                    var1['rows'] = var2;
                    var3 = var2.length;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['sections'] = var2;
                    return var1;
                }
            };
            var2 = var6.bind(var5)(var2, var3);
            var6 = var2.rows;
            var _closure2_slot4 = var6;
            var12 = var2.sections;
            var3 = var5.useCallback;
            var2 = new Array(3);
            var2[0] = var14;
            var2[1] = var11;
            var2[2] = var6;
            var1 = function(arg1, arg2) {
                var11 = arg2;
                var10 = _closure2_slot4;
                var1 = var10[var11];
                var6 = var1.translatedName;
                var8 = var1.country;
                var _closure3_slot0 = var8;
                var4 = _closure1_slot7;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 10;
                var1 = var9[var1];
                var3 = undefined;
                var1 = var7.bind(var3)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var12 = 0;
                var12 = var12 === var11;
                var1['start'] = var12;
                var12 = var10.length;
                var10 = 1;
                var10 = var12 - var10;
                var10 = var11 === var10;
                var1['end'] = var10;
                var1['label'] = var6;
                var6 = 11;
                var6 = var9[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {};
                var9 = 'text-md/semibold';
                var6['variant'] = var9;
                var8 = var8.code;
                var6['children'] = var8;
                var6 = var4.bind(var3)(var7, var6);
                var1['trailing'] = var6;
                var5 = function onPress() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var4 = _closure2_slot0;
                        var3 = _closure3_slot0;
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var4 = _closure2_slot1;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0006_ip = 39; continue _fun0006 }
 31:
                        var2 = _closure2_slot1;
                        var2 = var2.bind(var1)();
 39:
                        return var1;
                    }
                };
                var1['onPress'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var11 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var15.container;
            var1['style'] = var5;
            var14 = _closure1_slot7;
            var5 = {};
            var15 = var15.searchFieldContainer;
            var5['style'] = var15;
            var16 = _closure1_slot0;
            var15 = 12;
            var15 = var18[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.SearchField;
            var15 = {};
            var18 = 'md';
            var15['size'] = var18;
            var15['onChange'] = var17;
            var15 = var14.bind(var4)(var16, var15);
            var5['children'] = var15;
            var14 = var14.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var14;
            if(!(var13 !== var8)) { _fun0004_ip = 319; continue _fun0004 }
 310:
            var6 = var6.length;
            if(!(var7 !== var6)) { _fun0004_ip = 386; continue _fun0004 }
 319:
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 16;
            var6 = var13[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['sections'] = var12;
            var6['renderItem'] = var11;
            var6['itemSize'] = var9;
            var9 = 'windowSize';
            var6['estimatedListSize'] = var9;
            var9 = 'always';
            var6['keyboardShouldPersistTaps'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            _fun0004_ip = 491; continue _fun0004;
 386:
            var9 = _closure1_slot7;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var7 = 13;
            var7 = var14[var7];
            var8 = var12.bind(var4)(var7);
            var7 = {};
            var11 = 14;
            var11 = var14[var11];
            var11 = var12.bind(var4)(var11);
            var7['source'] = var11;
            var13 = _closure1_slot0;
            var10 = 15;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.wEHnxc;
            var10 = var11.bind(var12)(var10);
            var7['text'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 491:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
// app/design/components/Styles/native/createStyles.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
    var _closure1_slot10 = var1;
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
    var _closure1_slot11 = var1;
    var1 = function createCacheKey(arg1) {
        var4 = 0;
        var3 = copyRestArgs(var4);
        var2 = var3.join;
        var1 = '';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot12 = var1;
    var4 = function processColorOrThrow(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot4;
            var1 = undefined;
            var1 = var2.bind(var1)(var5);
            var2 = null;
            if(!(var2 != var1)) { _fun0004_ip = 36; continue _fun0004 }
case 31:
            return var1;
case 36:
            var1 = global;
            var3 = var1.Error;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var2 = 'Unable to parse color: "';
            var1 = '"';
            var7 = var4.bind(var2)(var5, var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var8 = var2;
            var1 = new var8[var3](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var _closure1_slot13 = var4;
    var1 = function parseThemedStyles(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var35 = arg1;
            var34 = arg2;
            var33 = var34.theme;
            var32 = var34.saturation;
            var31 = var34.contrast;
            var1 = {};
            var29 = var35;
            var25 = undefined;
            var24 = null;
            var23 = 'compact';
            var21 = 5;
            var20 = 7;
            var19 = 6;
            var18 = 1;
            var17 = 'text';
            var16 = 'generic';
            var15 = 'color';
            var14 = 'border';
            var13 = 'borderColor';
            var12 = 'background';
            var11 = 'backgroundColor';
            var10 = 0;
            var9 = '#';
            var8 = 'string';
            var7 = var18 !== var32;
            var6 = 'resolve';
            var5 = undefined;
            var4 = undefined;
            var3 = undefined;
            var2 = undefined;
            for(var26 in var29)
case 37:
            {
                var37 = var3;
                var36 = var2;
case 38:
                var39 = var26;
                var40 = var35[var39];
                var38 = var24 != var40;
                if(!var38) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var42 = var40.hasOwnProperty;
                var41 = _closure1_slot7;
                var38 = var42.bind(var40)(var41);
case 39:
                var41 = var40;
                if(!var38) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                var38 = _closure1_slot7;
                var38 = var40[var38];
                var41 = var38.bind(var40)(var34);
case 41:
                if(!(var24 != var41)) { _fun0005_ip = 43; continue _fun0005 }
case 19:
                var38 = var41.hasOwnProperty;
                var38 = var38.bind(var41)(var6);
                if(var38) { _fun0005_ip = 44; continue _fun0005 }
case 43:
                var40 = _closure1_slot1;
                var38 = _closure1_slot2;
                var38 = var38[var19];
                var38 = var40.bind(var25)(var38);
                var40 = var38.internal;
                var38 = var40.isSemanticColor;
                var38 = var38.bind(var40)(var41);
                if(var38) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                if(var7) { _fun0005_ip = 47; continue _fun0005 }
case 23:
                var38 = var41;
                var3 = var37;
                var2 = var36;
                if(!(var18 !== var31)) { _fun0005_ip = 48; continue _fun0005 }
case 47:
                var40 = typeof var41;
                var38 = var41;
                var3 = var37;
                var2 = var36;
                if(!(var8 === var40)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                var40 = var41[var10];
                var38 = var41;
                var3 = var37;
                var2 = var36;
                if(!(var9 === var40)) { _fun0005_ip = 48; continue _fun0005 }
case 50:
                var42 = var12;
                if(!(var11 !== var39)) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                var40 = var14;
                if(!(var13 !== var39)) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                var43 = var16;
                if(!(var15 === var39)) { _fun0005_ip = 27; continue _fun0005 }
case 8:
                var43 = var17;
case 27:
                var40 = var43;
case 53:
                var42 = var40;
case 51:
                var45 = var41;
                if(!var7) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                var43 = _closure1_slot1;
                var40 = _closure1_slot2;
                var40 = var40[var19];
                var40 = var43.bind(var25)(var40);
                var43 = var40.internal;
                var40 = var43.adjustColorSaturation;
                var45 = var40.bind(var43)(var41, var32, var42);
case 55:
                var40 = var45;
                if(!(var18 !== var31)) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                var44 = _closure1_slot1;
                var43 = _closure1_slot2;
                var43 = var43[var19];
                var43 = var44.bind(var25)(var43);
                var44 = var43.internal;
                var43 = var44.adjustColorContrast;
                var50 = var44;
                var49 = var45;
                var48 = var31;
                var47 = var42;
                var46 = var33;
                var40 = var50[var43](var49, var48, var47, var46, var45);
case 57:
                var38 = var40;
                var3 = var42;
                var2 = var38;
case 48:
                var1[var39] = var38;
                _fun0005_ip = 37; continue _fun0005;
case 45:
                var42 = _closure1_slot0;
                var38 = _closure1_slot2;
                var40 = var38[var20];
                var42 = var42.bind(var25)(var40);
                var40 = var42.getSemanticColorContextFromThemeContext;
                var42 = var40.bind(var42)(var34);
                var40 = _closure1_slot1;
                var38 = var38[var19];
                var38 = var40.bind(var25)(var38);
                var40 = var38.internal;
                var38 = var40.resolveSemanticColor;
                var38 = var38.bind(var40)(var33, var41, var42);
                var1[var39] = var38;
                var3 = var37;
                var2 = var36;
                _fun0005_ip = 37; continue _fun0005;
case 44:
                var40 = var41.resolve;
                var38 = {};
                var38['theme'] = var33;
                var43 = _closure1_slot0;
                var42 = _closure1_slot2;
                var42 = var42[var21];
                var43 = var43.bind(var25)(var42);
                var42 = var43.isAndroid;
                var42 = var42.bind(var43)();
                var38['isAndroid'] = var42;
                var5 = var34.enabledExperiments;
                var42 = var5;
                if(!(var24 == var42)) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                var42 = new Array(0);
case 59:
                var38['enabledExperiments'] = var42;
                var4 = var34.density;
                var43 = var24 != var4;
                var42 = var23;
                if(!var43) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                var42 = var4;
case 61:
                var38['density'] = var42;
                var38 = var40.bind(var41)(var38);
                var1[var39] = var38;
                var3 = var37;
                var2 = var36;
                _fun0005_ip = 37; continue _fun0005;
            }
case 63:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var5 = global;
    var11 = var5.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var1 = 0;
    var8 = var7[var1];
    var1 = undefined;
    var8 = var9.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.processColor;
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var10 = var5.Set;
    var8 = var10.prototype;
    var15 = Object.create(var8, {constructor: {value: var10}});
    var14 = ['backgroundColor', 'borderBottomColor', 'borderColor', 'borderEndColor', 'borderLeftColor', 'borderRightColor', 'borderStartColor', 'borderTopColor', 'color', 'outlineColor', 'shadowColor', 'shadowOffset', 'shadowOpacity', 'shadowRadius', 'elevation', 'textDecorationColor', 'textShadowColor', 'tintColor'];
    var8 = new var15[var10](var14, var13);
    var9 = var5.Symbol;
    var8 = var9.for;
    var5 = 'dynamicToken';
    var5 = var8.bind(var9)(var5);
    var _closure1_slot7 = var5;
    var5 = ['light', 'darker', 'midnight'];
    var _closure1_slot8 = var5;
    var5 = {};
    var8 = 'function createStylesTsx1(){const{resolvedStyles,withTiming,interpolateColor,themeIndex,stops,timingStandard}=this.__closure;const result={};for(const propertyName in resolvedStyles){const value=resolvedStyles[propertyName];if(Array.isArray(value)){result[propertyName]=withTiming(interpolateColor(themeIndex.get(),stops,value),timingStandard);}else{result[propertyName]=value;}}return result;}';
    var5['code'] = var8;
    var _closure1_slot9 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Styles/native/createStyles.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function experimental_createToken(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {};
        var3 = _closure1_slot7;
        var2 = function(arg1) {
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1[2] = var2;
        return var1;
    };
    var3['experimental_createToken'] = var5;
    var5 = function createStyles(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = global;
        var3 = var3.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        var _closure2_slot1 = var3;
        var3 = 'function';
        var2 = typeof var2;
        var2 = var3 === var2;
        var _closure2_slot2 = var2;
        var1 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var17 = 0;
                var13 = copyRestArgs(var17);
                var _closure3_slot0 = var13;
                var12 = undefined;
                var _closure3_slot2 = var12;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 4;
                var2 = var5[var2];
                var3 = var3.bind(var12)(var2);
                var2 = var3.useThemeContext;
                var3 = var2.bind(var3)();
                var _closure3_slot1 = var3;
                var2 = _closure1_slot12;
                var1 = new Array(1);
                var17 = var1;
                var16 = var13;
                var15 = 0;
                var5 = arraySpread(var17, var16, var15);
                var3 = var3.key;
                var1[4] = var3;
                var3 = 1;
                var3 = var5 + var3;
                var17 = var2;
                var16 = var1;
                var15 = undefined;
                var5 = apply(var17, var16, var15);
                var2 = _closure2_slot1;
                var1 = var2.get;
                var1 = var1.bind(var2)(var5);
                var2 = null;
                if(!(var2 == var1)) { _fun0006_ip = 64; continue _fun0006 }
case 65:
                var2 = {};
                _closure3_slot2 = var2;
                var6 = _closure2_slot2;
                var8 = global;
                var9 = var8.Object;
                var7 = var9.keys;
                var10 = _closure2_slot0;
                if(var6) { _fun0006_ip = 66; continue _fun0006 }
case 67:
                var11 = var7.bind(var9)(var10);
                _fun0006_ip = 68; continue _fun0006;
case 66:
                var6 = new Array(0);
                var17 = var6;
                var16 = var13;
                var15 = 0;
                var13 = arraySpread(var17, var16, var15);
                var17 = var10;
                var16 = var6;
                var15 = undefined;
                var6 = apply(var17, var16, var15);
                var11 = var7.bind(var9)(var6);
case 68:
                var7 = var8.Object;
                var6 = var7.defineProperties;
                var9 = var8.Object;
                var8 = var9.fromEntries;
                var10 = var11.map;
                var4 = function(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {'configurable': true, 'enumerable': true};
                    var3 = function get() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var5 = _closure1_slot14;
                            var1 = _closure2_slot2;
                            var4 = _closure2_slot0;
                            if(var1) { _fun0007_ip = 69; continue _fun0007 }
case 70:
                            var1 = var4;
                            _fun0007_ip = 71; continue _fun0007;
case 69:
                            var9 = _closure3_slot0;
                            var3 = new Array(0);
                            var8 = 0;
                            var10 = var3;
                            var2 = arraySpread(var10, var9, var8);
                            var8 = undefined;
                            var10 = var4;
                            var9 = var3;
                            var1 = apply(var10, var9, var8);
case 71:
                            var6 = _closure4_slot0;
                            var4 = var1[var6];
                            var3 = _closure3_slot1;
                            var1 = undefined;
                            var1 = var5.bind(var1)(var4, var3);
                            var3 = global;
                            var5 = var3.Object;
                            var4 = var5.defineProperty;
                            var3 = _closure3_slot2;
                            var2 = {};
                            var2['value'] = var1;
                            var7 = true;
                            var2['enumerable'] = var7;
                            var2 = var4.bind(var5)(var3, var6, var2);
                            return var1;
                        }
                    };
                    var2['get'] = var3;
                    var1[1] = var2;
                    return var1;
                };
                var4 = var10.bind(var11)(var4);
                var4 = var8.bind(var9)(var4);
                var4 = var6.bind(var7)(var2, var4);
                var4 = _closure2_slot1;
                var3 = var4.set;
                var3 = var3.bind(var4)(var5, var2);
                return var2;
case 64:
                return var1;
            }
        };
        return var1;
    };
    var3['createStyles'] = var5;
    var5 = function createLegacyClassComponentStyles(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var2 = var2.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        var _closure2_slot1 = var2;
        var1 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg1;
                var _closure3_slot0 = var3;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var2);
                var1 = var1.FALLBACK_THEME_CONTEXT_VALUE;
                var6 = _closure2_slot1;
                var2 = var6.get;
                var1 = var3.key;
                var1 = var2.bind(var6)(var1);
                var2 = null;
                if(!(var2 == var1)) { _fun0008_ip = 72; continue _fun0008 }
case 73:
                var2 = {};
                var _closure3_slot1 = var2;
                var8 = global;
                var9 = var8.Object;
                var7 = var9.keys;
                var6 = _closure2_slot0;
                var11 = var7.bind(var9)(var6);
                var7 = var8.Object;
                var6 = var7.defineProperties;
                var9 = var8.Object;
                var8 = var9.fromEntries;
                var10 = var11.map;
                var5 = function(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {'configurable': true, 'enumerable': true};
                    var3 = function get() {
                        var5 = _closure1_slot14;
                        var1 = _closure2_slot0;
                        var6 = _closure4_slot0;
                        var4 = var1[var6];
                        var3 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4, var3);
                        var3 = global;
                        var5 = var3.Object;
                        var4 = var5.defineProperty;
                        var3 = _closure3_slot1;
                        var2 = {};
                        var2['value'] = var1;
                        var7 = true;
                        var2['enumerable'] = var7;
                        var2 = var4.bind(var5)(var3, var6, var2);
                        return var1;
                    };
                    var2['get'] = var3;
                    var1[1] = var2;
                    return var1;
                };
                var5 = var10.bind(var11)(var5);
                var5 = var8.bind(var9)(var5);
                var5 = var6.bind(var7)(var2, var5);
                var5 = _closure2_slot1;
                var4 = var5.set;
                var3 = var3.key;
                var3 = var4.bind(var5)(var3, var2);
                return var2;
case 72:
                return var1;
            }
        };
        return var1;
    };
    var3['createLegacyClassComponentStyles'] = var5;
    var5 = function useLegacyClassComponentStyles(arg1) {
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 4;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = var2.useThemeContext;
        var2 = var1.bind(var2)();
        var1 = arg1;
        var1 = var1.bind(var3)(var2);
        return var1;
    };
    var3['useLegacyClassComponentStyles'] = var5;
    var5 = function createStyleProperties(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var2 = var2.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        var _closure2_slot1 = var2;
        var1 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var14 = 0;
                var10 = copyRestArgs(var14);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 4;
                var1 = var4[var1];
                var7 = undefined;
                var3 = var3.bind(var7)(var1);
                var1 = var3.useThemeContext;
                var6 = var1.bind(var3)();
                var3 = _closure1_slot12;
                var1 = new Array(1);
                var14 = var1;
                var13 = var10;
                var12 = 0;
                var5 = arraySpread(var14, var13, var12);
                var4 = var6.key;
                var1[4] = var4;
                var4 = 1;
                var4 = var5 + var4;
                var14 = var3;
                var13 = var1;
                var12 = undefined;
                var5 = apply(var14, var13, var12);
                var4 = _closure2_slot1;
                var1 = var4.get;
                var1 = var1.bind(var4)(var5);
                var4 = null;
                if(!(var4 == var1)) { _fun0009_ip = 74; continue _fun0009 }
case 75:
                var4 = _closure1_slot14;
                var2 = _closure2_slot0;
                var8 = 'function';
                var2 = typeof var2;
                if(!(var8 !== var2)) { _fun0009_ip = 76; continue _fun0009 }
case 77:
                var2 = _closure2_slot0;
                _fun0009_ip = 42; continue _fun0009;
case 76:
                var9 = _closure2_slot0;
                var8 = new Array(0);
                var14 = var8;
                var13 = var10;
                var12 = 0;
                var10 = arraySpread(var14, var13, var12);
                var14 = var9;
                var13 = var8;
                var12 = undefined;
                var2 = apply(var14, var13, var12);
case 42:
                var2 = var4.bind(var7)(var2, var6);
                var4 = _closure2_slot1;
                var3 = var4.set;
                var3 = var3.bind(var4)(var5, var2);
                return var2;
case 74:
                return var1;
            }
        };
        return var1;
    };
    var3['createStyleProperties'] = var5;
    var3['processColorOrThrow'] = var4;
    var4 = function createNativeStyleProperties(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var2 = var2.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        var _closure2_slot1 = var2;
        var1 = function(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = 1;
                var18 = var5;
                var12 = copyRestArgs(var18);
                var1 = _closure1_slot5;
                var7 = var1.saturation;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var10 = undefined;
                var2 = var2.bind(var10)(var1);
                var1 = var2.getCustomBackgroundGradient;
                var1 = var1.bind(var2)();
                var2 = null;
                if(!(var2 == var1)) { _fun0010_ip = 78; continue _fun0010 }
case 7:
                var3 = _closure1_slot6;
                var1 = var3.gradientPreset;
case 78:
                var3 = var2 != var1;
                var4 = null;
                if(!var3) { _fun0010_ip = 79; continue _fun0010 }
case 80:
                var4 = var1;
case 79:
                var1 = var2 != var4;
                var9 = 0;
                var8 = 0;
                if(!var1) { _fun0010_ip = 68; continue _fun0010 }
case 81:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var15 = 4;
                var1 = var1[var15];
                var6 = var3.bind(var10)(var1);
                var3 = var6.setThemeFlag;
                var13 = var4.theme;
                var1 = 'light';
                if(!(var1 !== var13)) { _fun0010_ip = 82; continue _fun0010 }
case 83:
                var13 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var15];
                var1 = var13.bind(var10)(var1);
                var1 = var1.ThemeContextFlags;
                var1 = var1.MOBILE_DARK_GRADIENT_THEME_ENABLED;
                _fun0010_ip = 84; continue _fun0010;
case 82:
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var15];
                var13 = var14.bind(var10)(var13);
                var13 = var13.ThemeContextFlags;
                var1 = var13.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
case 84:
                var8 = var3.bind(var6)(var9, var1);
case 68:
                var1 = new Array(0);
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 12;
                var3 = var13[var3];
                var13 = var6.bind(var10)(var3);
                var6 = var13.isMobileVisualRefreshEnabled;
                var3 = 'createFakeThemedContext';
                var3 = var6.bind(var13)(var3);
                if(!var3) { _fun0010_ip = 85; continue _fun0010 }
case 46:
                var6 = var1.push;
                var3 = 'mobile-visual-refresh';
                var3 = var6.bind(var1)(var3);
case 85:
                var3 = var1.length;
                var3 = var3 > var9;
                var6 = undefined;
                if(!var3) { _fun0010_ip = 86; continue _fun0010 }
case 87:
                var6 = var1;
case 86:
                var1 = {};
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var3 = 4;
                var3 = var14[var3];
                var3 = var13.bind(var10)(var3);
                var17 = var3.FALLBACK_THEME_CONTEXT_VALUE;
                var18 = var1;
                var3 = copyDataProperties(var18, var17);
                var3 = 'flags';
                var1[2] = var8;
                var3 = 'saturation';
                var1[2] = var7;
                var7 = arg1;
                var3 = 'theme';
                var1[2] = var7;
                var3 = 'enabledExperiments';
                var1[2] = var6;
                var3 = 'gradient';
                var1[2] = var4;
                var3 = global;
                var4 = var3.JSON;
                var3 = var4.stringify;
                var3 = var3.bind(var4)(var1);
                var6 = {};
                var18 = var6;
                var17 = var1;
                var1 = copyDataProperties(var18, var17);
                var1 = 'key';
                var6[0] = var3;
                var3 = _closure1_slot12;
                var1 = new Array(1);
                var18 = var1;
                var17 = var12;
                var16 = 0;
                var4 = arraySpread(var18, var17, var16);
                var7 = var6.key;
                var1[3] = var7;
                var4 = var4 + var5;
                var18 = var3;
                var17 = var1;
                var16 = undefined;
                var5 = apply(var18, var17, var16);
                var4 = _closure2_slot1;
                var1 = var4.get;
                var1 = var1.bind(var4)(var5);
                if(!(var2 == var1)) { _fun0010_ip = 88; continue _fun0010 }
case 89:
                var4 = _closure1_slot14;
                var2 = _closure2_slot0;
                var7 = 'function';
                var2 = typeof var2;
                if(!(var7 !== var2)) { _fun0010_ip = 90; continue _fun0010 }
case 91:
                var2 = _closure2_slot0;
                _fun0010_ip = 92; continue _fun0010;
case 90:
                var8 = _closure2_slot0;
                var7 = new Array(0);
                var18 = var7;
                var17 = var12;
                var16 = 0;
                var9 = arraySpread(var18, var17, var16);
                var18 = var8;
                var17 = var7;
                var16 = undefined;
                var2 = apply(var18, var17, var16);
case 92:
                var2 = var4.bind(var10)(var2, var6);
                var8 = var2;
                for(var4 in var8)
case 93:
                {
case 94:
                    var13 = var4;
                    var14 = var2[var13];
                    var12 = _closure1_slot13;
                    var12 = var12.bind(var10)(var14);
                    var2[var13] = var12;
                    _fun0010_ip = 93; continue _fun0010;
                }
case 95:
                var4 = _closure2_slot1;
                var3 = var4.set;
                var3 = var3.bind(var4)(var5, var2);
                return var2;
case 88:
                return var1;
            }
        };
        return var1;
    };
    var3['createNativeStyleProperties'] = var4;
    var2 = function createAnimatedThemedStyles(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var13 = arg1;
            var4 = arguments[1];
            var12 = undefined;
            if(!(var4 === var12)) { _fun0011_ip = 70; continue _fun0011 }
case 32:
            var4 = _closure1_slot8;
case 70:
            var _closure2_slot0 = var4;
            var _closure2_slot3 = var12;
            var _closure2_slot4 = var12;
            var11 = new Array(0);
            var _closure2_slot1 = var11;
            var10 = {};
            var _closure2_slot2 = var10;
            var8 = var13;
            var2 = 6;
            for(var5 in var8)
case 96:
            {
case 97:
                var17 = var5;
                var16 = var13[var17];
                var15 = _closure1_slot1;
                var14 = _closure1_slot2;
                var14 = var14[var2];
                var14 = var15.bind(var12)(var14);
                var15 = var14.internal;
                var14 = var15.isSemanticColor;
                var14 = var14.bind(var15)(var16);
                if(var14) { _fun0011_ip = 98; continue _fun0011 }
case 37:
                var10[var17] = var16;
                _fun0011_ip = 96; continue _fun0011;
case 98:
                var15 = var11.push;
                var14 = new Array(2);
                var14[0] = var17;
                var14[1] = var16;
                var14 = var15.bind(var11)(var14);
                _fun0011_ip = 96; continue _fun0011;
            }
case 99:
            var3 = var4.map;
            var2 = function(arg1, arg2) {
                var1 = arg2;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            _closure2_slot3 = var2;
            var2 = global;
            var2 = var2.Map;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var19 = var3;
            var2 = new var19[var2](var18);
            var2 = var2 instanceof Object ? var2 : var3;
            _closure2_slot4 = var2;
            var1 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var10 = arg1;
                    var _closure3_slot0 = var10;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 4;
                    var2 = var5[var2];
                    var8 = undefined;
                    var3 = var3.bind(var8)(var2);
                    var2 = var3.useThemeContext;
                    var3 = var2.bind(var3)();
                    var7 = _closure2_slot4;
                    var5 = var7.get;
                    var2 = var3.key;
                    var2 = var5.bind(var7)(var2);
                    var _closure3_slot1 = var2;
                    var7 = null;
                    var12 = var2;
                    if(!(var7 == var12)) { _fun0012_ip = 100; continue _fun0012 }
case 101:
                    var2 = var3.primaryColor;
                    var9 = var7 != var2;
                    var2 = {};
                    var5 = var3.enabledExperiments;
                    if(!(var7 == var5)) { _fun0012_ip = 102; continue _fun0012 }
case 103:
                    var5 = new Array(0);
case 102:
                    var2['enabledExperiments'] = var5;
                    var15 = 1;
                    var5 = var15;
                    if(var9) { _fun0012_ip = 104; continue _fun0012 }
case 105:
                    var13 = var3.saturation;
                    var14 = var7 != var13;
                    var11 = var15;
                    if(!var14) { _fun0012_ip = 106; continue _fun0012 }
case 76:
                    var11 = var13;
case 106:
                    var5 = var11;
case 104:
                    var2['saturation'] = var5;
                    var5 = var15;
                    if(var9) { _fun0012_ip = 107; continue _fun0012 }
case 108:
                    var9 = var3.contrast;
                    var11 = var7 != var9;
                    var7 = var15;
                    if(!var11) { _fun0012_ip = 109; continue _fun0012 }
case 110:
                    var7 = var9;
case 109:
                    var5 = var7;
case 107:
                    var2['contrast'] = var5;
                    var _closure3_slot2 = var2;
                    var2 = {};
                    var17 = _closure2_slot2;
                    var18 = var2;
                    var5 = copyDataProperties(var18, var17);
                    _closure3_slot1 = var2;
                    var14 = function _loop(arg1) {
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var3 = _closure3_slot1;
                        var2 = _closure3_slot3;
                        var5 = _closure2_slot0;
                        var4 = var5.map;
                        var1 = function(arg1) {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var5 = var1.internal;
                            var4 = var5.resolveSemanticColor;
                            var3 = _closure4_slot0;
                            var2 = _closure3_slot2;
                            var1 = arg1;
                            var1 = var4.bind(var5)(var1, var3, var2);
                            return var1;
                        };
                        var1 = var4.bind(var5)(var1);
                        var3[var2] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var7 = _closure1_slot10;
                    var5 = _closure2_slot1;
                    var13 = var7.bind(var8)(var5);
                    var7 = var13.bind(var8)();
                    var5 = var7.done;
                    var11 = 2;
                    var9 = 0;
                    if(var5) { _fun0012_ip = 111; continue _fun0012 }
case 112:
                    var16 = var7.value;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var8)(var16, var11);
                    var16 = var5[var9];
                    var _closure3_slot3 = var16;
                    var5 = var5[var15];
                    var5 = var14.bind(var8)(var5);
                    var16 = var13.bind(var8)();
                    var5 = var16.done;
                    var7 = var16;
                    if(!var5) { _fun0012_ip = 112; continue _fun0012 }
case 111:
                    var7 = _closure2_slot4;
                    var5 = var7.set;
                    var3 = var3.key;
                    var3 = var5.bind(var7)(var3, var2);
                    var12 = var2;
case 100:
                    var _closure3_slot4 = var12;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var11 = 8;
                    var2 = var9[var11];
                    var3 = var7.bind(var8)(var2);
                    var2 = var3.useAnimatedStyle;
                    var1 = function _() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var1 = {};
                            var13 = _closure3_slot4;
                            var7 = 9;
                            var6 = undefined;
                            var5 = 8;
                            var3 = 10;
                            var2 = global;
                            for(var9 in var13)
case 113:
                            {
case 114:
                                var16 = var9;
                                var15 = _closure3_slot4;
                                var24 = var15[var16];
                                var17 = var2.Array;
                                var15 = var17.isArray;
                                var15 = var15.bind(var17)(var24);
                                if(var15) { _fun0013_ip = 115; continue _fun0013 }
case 116:
                                var1[var16] = var24;
                                _fun0013_ip = 113; continue _fun0013;
case 115:
                                var20 = _closure1_slot0;
                                var15 = _closure1_slot2;
                                var17 = var15[var7];
                                var19 = var20.bind(var6)(var17);
                                var18 = var19.withTiming;
                                var17 = var15[var5];
                                var23 = var20.bind(var6)(var17);
                                var22 = var23.interpolateColor;
                                var21 = _closure3_slot0;
                                var17 = var21.get;
                                var21 = var17.bind(var21)();
                                var17 = _closure2_slot3;
                                var17 = var22.bind(var23)(var21, var17, var24);
                                var15 = var15[var3];
                                var15 = var20.bind(var6)(var15);
                                var15 = var15.timingStandard;
                                var15 = var18.bind(var19)(var17, var15);
                                var1[var16] = var15;
                                _fun0013_ip = 113; continue _fun0013;
                            }
case 117:
                            return var1;
                        }
                    };
                    var5 = {};
                    var5['resolvedStyles'] = var12;
                    var12 = 9;
                    var12 = var9[var12];
                    var12 = var7.bind(var8)(var12);
                    var12 = var12.withTiming;
                    var5['withTiming'] = var12;
                    var11 = var9[var11];
                    var11 = var7.bind(var8)(var11);
                    var11 = var11.interpolateColor;
                    var5['interpolateColor'] = var11;
                    var5['themeIndex'] = var10;
                    var6 = _closure2_slot3;
                    var5['stops'] = var6;
                    var6 = 10;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.timingStandard;
                    var5['timingStandard'] = var6;
                    var1['__closure'] = var5;
                    var5 = 6815805628278.0;
                    var1['__workletHash'] = var5;
                    var4 = _closure1_slot9;
                    var1['__initData'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            return var1;
        }
    };
    var3['createAnimatedThemedStyles'] = var2;
    return var1;
})();
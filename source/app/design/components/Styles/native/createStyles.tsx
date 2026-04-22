// app/design/components/Styles/native/createStyles.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var1 = function createCacheKey(arg1) {
        var4 = 0;
        var3 = copyRestArgs(var4);
        var2 = var3.join;
        var1 = '';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot9 = var1;
    var4 = function processColorOrThrow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot3;
            var1 = undefined;
            var1 = var2.bind(var1)(var5);
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            return var1;
case 2:
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
    var _closure1_slot10 = var4;
    var1 = function parseThemedStyles(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
            var21 = 4;
            var20 = 6;
            var19 = 5;
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
case 4:
            {
                var37 = var3;
                var36 = var2;
case 5:
                var39 = var26;
                var40 = var35[var39];
                var38 = var24 != var40;
                if(!var38) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var42 = var40.hasOwnProperty;
                var41 = _closure1_slot6;
                var38 = var42.bind(var40)(var41);
case 6:
                var41 = var40;
                if(!var38) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var38 = _closure1_slot6;
                var38 = var40[var38];
                var41 = var38.bind(var40)(var34);
case 8:
                if(!(var24 != var41)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var38 = var41.hasOwnProperty;
                var38 = var38.bind(var41)(var6);
                if(var38) { _fun0002_ip = 12; continue _fun0002 }
case 10:
                var40 = _closure1_slot1;
                var38 = _closure1_slot2;
                var38 = var38[var19];
                var38 = var40.bind(var25)(var38);
                var40 = var38.internal;
                var38 = var40.isSemanticColor;
                var38 = var38.bind(var40)(var41);
                if(var38) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                if(var7) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var38 = var41;
                var3 = var37;
                var2 = var36;
                if(!(var18 !== var31)) { _fun0002_ip = 17; continue _fun0002 }
case 15:
                var40 = typeof var41;
                var38 = var41;
                var3 = var37;
                var2 = var36;
                if(!(var8 === var40)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var40 = var41[var10];
                var38 = var41;
                var3 = var37;
                var2 = var36;
                if(!(var9 === var40)) { _fun0002_ip = 17; continue _fun0002 }
case 19:
                var42 = var12;
                if(!(var11 !== var39)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var40 = var14;
                if(!(var13 !== var39)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                var43 = var16;
                if(!(var15 === var39)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                var43 = var17;
case 24:
                var40 = var43;
case 22:
                var42 = var40;
case 20:
                var45 = var41;
                if(!var7) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                var43 = _closure1_slot1;
                var40 = _closure1_slot2;
                var40 = var40[var19];
                var40 = var43.bind(var25)(var40);
                var43 = var40.internal;
                var40 = var43.adjustColorSaturation;
                var45 = var40.bind(var43)(var41, var32, var42);
case 26:
                var40 = var45;
                if(!(var18 !== var31)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
case 28:
                var38 = var40;
                var3 = var42;
                var2 = var38;
case 17:
                var1[var39] = var38;
                _fun0002_ip = 4; continue _fun0002;
case 13:
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
                _fun0002_ip = 4; continue _fun0002;
case 12:
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
                if(!(var24 == var42)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                var42 = new Array(0);
case 30:
                var38['enabledExperiments'] = var42;
                var4 = var34.density;
                var43 = var24 != var4;
                var42 = var23;
                if(!var43) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                var42 = var4;
case 32:
                var38['density'] = var42;
                var38 = var40.bind(var41)(var38);
                var1[var39] = var38;
                var3 = var37;
                var2 = var36;
                _fun0002_ip = 4; continue _fun0002;
            }
case 34:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var8 = var6.bind(var1)(var8);
    var8 = var8.processColor;
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var10 = var5.Set;
    var8 = var10.prototype;
    var15 = Object.create(var8, {constructor: {value: var10}});
    var14 = ['backgroundColor', 'borderBottomColor', 'borderColor', 'borderEndColor', 'borderLeftColor', 'borderRightColor', 'borderStartColor', 'borderTopColor', 'color', 'shadowColor', 'shadowOffset', 'shadowOpacity', 'shadowRadius', 'elevation', 'textDecorationColor', 'textShadowColor', 'tintColor'];
    var8 = new var15[var10](var14, var13);
    var9 = var5.Symbol;
    var8 = var9.for;
    var5 = 'dynamicToken';
    var5 = var8.bind(var9)(var5);
    var _closure1_slot6 = var5;
    var5 = ['light', 'darker', 'midnight'];
    var _closure1_slot7 = var5;
    var5 = {};
    var8 = 'function createStylesTsx1(){const{resolved,withTiming,interpolateColor,themeIndex,stops,timingStandard}=this.__closure;const styles={};for(const propertyName in resolved){const value=resolved[propertyName];if(Array.isArray(value)){styles[propertyName]=withTiming(interpolateColor(themeIndex.get(),stops,value),timingStandard);}else{styles[propertyName]=value;}}return styles;}';
    var5['code'] = var8;
    var _closure1_slot8 = var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Styles/native/createStyles.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function experimental_createToken(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {};
        var3 = _closure1_slot6;
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
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var17 = 0;
                var13 = copyRestArgs(var17);
                var _closure3_slot0 = var13;
                var12 = undefined;
                var _closure3_slot2 = var12;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 3;
                var2 = var5[var2];
                var3 = var3.bind(var12)(var2);
                var2 = var3.useThemeContext;
                var3 = var2.bind(var3)();
                var _closure3_slot1 = var3;
                var2 = _closure1_slot9;
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
                if(!(var2 == var1)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                var2 = {};
                _closure3_slot2 = var2;
                var6 = _closure2_slot2;
                var8 = global;
                var9 = var8.Object;
                var7 = var9.keys;
                var10 = _closure2_slot0;
                if(var6) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                var11 = var7.bind(var9)(var10);
                _fun0003_ip = 39; continue _fun0003;
case 37:
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
case 39:
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
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var5 = _closure1_slot11;
                            var1 = _closure2_slot2;
                            var4 = _closure2_slot0;
                            if(var1) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                            var1 = var4;
                            _fun0004_ip = 42; continue _fun0004;
case 40:
                            var9 = _closure3_slot0;
                            var3 = new Array(0);
                            var8 = 0;
                            var10 = var3;
                            var2 = arraySpread(var10, var9, var8);
                            var8 = undefined;
                            var10 = var4;
                            var9 = var3;
                            var1 = apply(var10, var9, var8);
case 42:
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
case 35:
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
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = arg1;
                var _closure3_slot0 = var3;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var2);
                var1 = var1.FALLBACK_THEME_CONTEXT_VALUE;
                var6 = _closure2_slot1;
                var2 = var6.get;
                var1 = var3.key;
                var1 = var2.bind(var6)(var1);
                var2 = null;
                if(!(var2 == var1)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
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
                        var5 = _closure1_slot11;
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
case 43:
                return var1;
            }
        };
        return var1;
    };
    var3['createLegacyClassComponentStyles'] = var5;
    var5 = function useLegacyClassComponentStyles(arg1) {
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 3;
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var14 = 0;
                var10 = copyRestArgs(var14);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 3;
                var1 = var4[var1];
                var7 = undefined;
                var3 = var3.bind(var7)(var1);
                var1 = var3.useThemeContext;
                var6 = var1.bind(var3)();
                var3 = _closure1_slot9;
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
                if(!(var4 == var1)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                var4 = _closure1_slot11;
                var2 = _closure2_slot0;
                var8 = 'function';
                var2 = typeof var2;
                if(!(var8 !== var2)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                var2 = _closure2_slot0;
                _fun0006_ip = 9; continue _fun0006;
case 47:
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
case 9:
                var2 = var4.bind(var7)(var2, var6);
                var4 = _closure2_slot1;
                var3 = var4.set;
                var3 = var3.bind(var4)(var5, var2);
                return var2;
case 45:
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = 1;
                var18 = var5;
                var12 = copyRestArgs(var18);
                var1 = _closure1_slot4;
                var6 = var1.saturation;
                var1 = _closure1_slot5;
                var1 = var1.gradientPreset;
                var2 = null;
                var3 = var2 != var1;
                var7 = null;
                if(!var3) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                var7 = var1;
case 49:
                var1 = var2 != var7;
                var9 = 0;
                var8 = 0;
                if(!var1) { _fun0007_ip = 51; continue _fun0007 }
case 42:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var15 = 3;
                var1 = var1[var15];
                var14 = undefined;
                var4 = var3.bind(var14)(var1);
                var3 = var4.setThemeFlag;
                var10 = var7.theme;
                var1 = 'light';
                if(!(var1 !== var10)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                var10 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var15];
                var1 = var10.bind(var14)(var1);
                var1 = var1.ThemeContextFlags;
                var1 = var1.MOBILE_DARK_GRADIENT_THEME_ENABLED;
                _fun0007_ip = 38; continue _fun0007;
case 52:
                var13 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var15];
                var10 = var13.bind(var14)(var10);
                var10 = var10.ThemeContextFlags;
                var1 = var10.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
case 38:
                var8 = var3.bind(var4)(var9, var1);
case 51:
                var1 = new Array(0);
                var4 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 10;
                var3 = var10[var3];
                var10 = undefined;
                var4 = var4.bind(var10)(var3);
                var3 = var4.isMobileVisualRefreshEnabled;
                var13 = 'createFakeThemedContext';
                var3 = var3.bind(var4)(var13);
                if(!var3) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                var4 = var1.push;
                var3 = 'mobile-visual-refresh';
                var3 = var4.bind(var1)(var3);
case 54:
                var4 = _closure1_slot0;
                var14 = _closure1_slot2;
                var3 = 11;
                var3 = var14[var3];
                var4 = var4.bind(var10)(var3);
                var3 = var4.isGuildItemSpacingEnabled;
                var3 = var3.bind(var4)(var13);
                if(!var3) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                var4 = var1.push;
                var3 = 'guild-item-spacing';
                var3 = var4.bind(var1)(var3);
case 56:
                var3 = var1.length;
                var3 = var3 > var9;
                var4 = undefined;
                if(!var3) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                var4 = var1;
case 58:
                var1 = {};
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var3 = 3;
                var3 = var14[var3];
                var3 = var13.bind(var10)(var3);
                var17 = var3.FALLBACK_THEME_CONTEXT_VALUE;
                var18 = var1;
                var3 = copyDataProperties(var18, var17);
                var3 = 'flags';
                var1[2] = var8;
                var3 = 'gradient';
                var1[2] = var7;
                var3 = 'saturation';
                var1[2] = var6;
                var6 = arg1;
                var3 = 'theme';
                var1[2] = var6;
                var3 = 'enabledExperiments';
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
                var3 = _closure1_slot9;
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
                if(!(var2 == var1)) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                var4 = _closure1_slot11;
                var2 = _closure2_slot0;
                var7 = 'function';
                var2 = typeof var2;
                if(!(var7 !== var2)) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                var2 = _closure2_slot0;
                _fun0007_ip = 64; continue _fun0007;
case 62:
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
case 64:
                var2 = var4.bind(var10)(var2, var6);
                var8 = var2;
                for(var4 in var8)
case 65:
                {
case 66:
                    var13 = var4;
                    var14 = var2[var13];
                    var12 = _closure1_slot10;
                    var12 = var12.bind(var10)(var14);
                    var2[var13] = var12;
                    _fun0007_ip = 65; continue _fun0007;
                }
case 67:
                var4 = _closure2_slot1;
                var3 = var4.set;
                var3 = var3.bind(var4)(var5, var2);
                return var2;
case 60:
                return var1;
            }
        };
        return var1;
    };
    var3['createNativeStyleProperties'] = var4;
    var2 = function createAnimatedThemedStyles(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var4 = arguments[1];
            var _closure2_slot0 = var2;
            var9 = undefined;
            if(!(var4 === var9)) { _fun0008_ip = 2; continue _fun0008 }
case 68:
            var4 = _closure1_slot7;
case 2:
            var _closure2_slot1 = var4;
            var _closure2_slot3 = var9;
            var _closure2_slot4 = var9;
            var3 = {};
            var _closure2_slot2 = var3;
            var8 = function _loop() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = _closure2_slot3;
                    var6 = var3[var1];
                    var _closure3_slot0 = var6;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = var3.internal;
                    var3 = var4.isSemanticColor;
                    var7 = var3.bind(var4)(var6);
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot3;
                    if(var7) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                    var4[var3] = var6;
                    _fun0009_ip = 71; continue _fun0009;
case 69:
                    var6 = _closure2_slot1;
                    var5 = var6.map;
                    var2 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var4 = var1.internal;
                        var3 = var4.resolveSemanticColor;
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var2 = var5.bind(var6)(var2);
                    var4[var3] = var2;
case 71:
                    return var1;
                }
            };
            var6 = var2;
            for(var2 in var6)
case 72:
            {
case 44:
                var10 = var2;
                _closure2_slot3 = var10;
                var10 = var8.bind(var9)();
                _fun0008_ip = 72; continue _fun0008;
            }
case 73:
            var3 = var4.map;
            var2 = function(arg1, arg2) {
                var1 = arg2;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            _closure2_slot4 = var2;
            var1 = function useStyleProperties(arg1) {
                var10 = arg1;
                var _closure3_slot0 = var10;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var11 = 7;
                var2 = var9[var11];
                var7 = undefined;
                var3 = var8.bind(var7)(var2);
                var2 = var3.useAnimatedStyle;
                var1 = function n() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = {};
                        var13 = _closure2_slot2;
                        var7 = 8;
                        var6 = undefined;
                        var5 = 7;
                        var3 = 9;
                        var2 = global;
                        for(var9 in var13)
case 74:
                        {
case 75:
                            var16 = var9;
                            var15 = _closure2_slot2;
                            var24 = var15[var16];
                            var17 = var2.Array;
                            var15 = var17.isArray;
                            var15 = var15.bind(var17)(var24);
                            if(var15) { _fun0010_ip = 76; continue _fun0010 }
case 73:
                            var1[var16] = var24;
                            _fun0010_ip = 74; continue _fun0010;
case 76:
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
                            var17 = _closure2_slot4;
                            var17 = var22.bind(var23)(var21, var17, var24);
                            var15 = var15[var3];
                            var15 = var20.bind(var6)(var15);
                            var15 = var15.timingStandard;
                            var15 = var18.bind(var19)(var17, var15);
                            var1[var16] = var15;
                            _fun0010_ip = 74; continue _fun0010;
                        }
case 77:
                        return var1;
                    }
                };
                var5 = {};
                var12 = _closure2_slot2;
                var5['resolved'] = var12;
                var12 = 8;
                var12 = var9[var12];
                var12 = var8.bind(var7)(var12);
                var12 = var12.withTiming;
                var5['withTiming'] = var12;
                var11 = var9[var11];
                var11 = var8.bind(var7)(var11);
                var11 = var11.interpolateColor;
                var5['interpolateColor'] = var11;
                var5['themeIndex'] = var10;
                var6 = _closure2_slot4;
                var5['stops'] = var6;
                var6 = 9;
                var6 = var9[var6];
                var6 = var8.bind(var7)(var6);
                var6 = var6.timingStandard;
                var5['timingStandard'] = var6;
                var1['__closure'] = var5;
                var5 = 11167217880242.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot8;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            return var1;
        }
    };
    var3['createAnimatedThemedStyles'] = var2;
    return var1;
})();
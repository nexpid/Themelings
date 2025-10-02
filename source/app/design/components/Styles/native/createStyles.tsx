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
    var _closure1_slot8 = var1;
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
    var _closure1_slot9 = var4;
    var1 = function parseThemedStyles(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var32 = arg1;
            var31 = arg2;
            var30 = var31.theme;
            var29 = var31.saturation;
            var28 = var31.contrast;
            var1 = {};
            var26 = var32;
            var22 = undefined;
            var20 = 4;
            var19 = 6;
            var18 = 5;
            var17 = 1;
            var16 = 'text';
            var15 = 'generic';
            var14 = 'color';
            var13 = 'border';
            var12 = 'borderColor';
            var11 = 'background';
            var10 = 'backgroundColor';
            var9 = 0;
            var8 = '#';
            var7 = 'string';
            var6 = var17 !== var29;
            var5 = 'resolve';
            var4 = null;
            var3 = undefined;
            var2 = undefined;
            for(var23 in var26)
case 4:
            {
                var34 = var3;
                var33 = var2;
case 5:
                var36 = var23;
                var37 = var32[var36];
                var35 = var4 != var37;
                if(!var35) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var39 = var37.hasOwnProperty;
                var38 = _closure1_slot6;
                var35 = var39.bind(var37)(var38);
case 6:
                var38 = var37;
                if(!var35) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var35 = _closure1_slot6;
                var35 = var37[var35];
                var38 = var35.bind(var37)(var31);
case 8:
                if(!(var4 != var38)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var35 = var38.hasOwnProperty;
                var35 = var35.bind(var38)(var5);
                if(var35) { _fun0002_ip = 12; continue _fun0002 }
case 10:
                var37 = _closure1_slot1;
                var35 = _closure1_slot2;
                var35 = var35[var18];
                var35 = var37.bind(var22)(var35);
                var37 = var35.internal;
                var35 = var37.isSemanticColor;
                var35 = var35.bind(var37)(var38);
                if(var35) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                if(var6) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var35 = var38;
                var3 = var34;
                var2 = var33;
                if(!(var17 !== var28)) { _fun0002_ip = 17; continue _fun0002 }
case 15:
                var37 = typeof var38;
                var35 = var38;
                var3 = var34;
                var2 = var33;
                if(!(var7 === var37)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var37 = var38[var9];
                var35 = var38;
                var3 = var34;
                var2 = var33;
                if(!(var8 === var37)) { _fun0002_ip = 17; continue _fun0002 }
case 19:
                var39 = var11;
                if(!(var10 !== var36)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var37 = var13;
                if(!(var12 !== var36)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                var40 = var15;
                if(!(var14 === var36)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                var40 = var16;
case 24:
                var37 = var40;
case 22:
                var39 = var37;
case 20:
                var42 = var38;
                if(!var6) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                var40 = _closure1_slot1;
                var37 = _closure1_slot2;
                var37 = var37[var18];
                var37 = var40.bind(var22)(var37);
                var40 = var37.internal;
                var37 = var40.adjustColorSaturation;
                var42 = var37.bind(var40)(var38, var29, var39);
case 26:
                var37 = var42;
                if(!(var17 !== var28)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                var41 = _closure1_slot1;
                var40 = _closure1_slot2;
                var40 = var40[var18];
                var40 = var41.bind(var22)(var40);
                var41 = var40.internal;
                var40 = var41.adjustColorContrast;
                var47 = var41;
                var46 = var42;
                var45 = var28;
                var44 = var39;
                var43 = var30;
                var37 = var47[var40](var46, var45, var44, var43, var42);
case 28:
                var35 = var37;
                var3 = var39;
                var2 = var35;
case 17:
                var1[var36] = var35;
                _fun0002_ip = 4; continue _fun0002;
case 13:
                var39 = _closure1_slot0;
                var35 = _closure1_slot2;
                var37 = var35[var19];
                var39 = var39.bind(var22)(var37);
                var37 = var39.getSemanticColorContextFromThemeContext;
                var39 = var37.bind(var39)(var31);
                var37 = _closure1_slot1;
                var35 = var35[var18];
                var35 = var37.bind(var22)(var35);
                var37 = var35.internal;
                var35 = var37.resolveSemanticColor;
                var35 = var35.bind(var37)(var30, var38, var39);
                var1[var36] = var35;
                var3 = var34;
                var2 = var33;
                _fun0002_ip = 4; continue _fun0002;
case 12:
                var37 = var38.resolve;
                var39 = _closure1_slot0;
                var35 = _closure1_slot2;
                var35 = var35[var20];
                var39 = var39.bind(var22)(var35);
                var35 = var39.isAndroid;
                var35 = var35.bind(var39)();
                var35 = var37.bind(var38)(var30, var35);
                var1[var36] = var35;
                var3 = var34;
                var2 = var33;
                _fun0002_ip = 4; continue _fun0002;
            }
case 30:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var5 = {};
    var8 = 'function createStylesTsx1(){const{resolved,withTiming,interpolateColor,themeIndex,timingStandard}=this.__closure;const styles={};for(const propertyName in resolved){const value=resolved[propertyName];if(Array.isArray(value)){styles[propertyName]=withTiming(interpolateColor(themeIndex.get(),[0,1,2],value),timingStandard);}else{styles[propertyName]=value;}}return styles;}';
    var5['code'] = var8;
    var _closure1_slot7 = var5;
    var5 = 11;
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
        var1[var3] = var2;
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
                var2 = _closure1_slot8;
                var1 = new Array(1);
                var17 = var1;
                var16 = var13;
                var15 = 0;
                var5 = arraySpread(var17, var16, var15);
                var3 = var3.key;
                var1[var5] = var3;
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
                if(!(var2 == var1)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                var2 = {};
                _closure3_slot2 = var2;
                var6 = _closure2_slot2;
                var8 = global;
                var9 = var8.Object;
                var7 = var9.keys;
                var10 = _closure2_slot0;
                if(var6) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                var11 = var7.bind(var9)(var10);
                _fun0003_ip = 35; continue _fun0003;
case 33:
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
case 35:
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
                            var5 = _closure1_slot10;
                            var1 = _closure2_slot2;
                            var4 = _closure2_slot0;
                            if(var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                            var1 = var4;
                            _fun0004_ip = 38; continue _fun0004;
case 36:
                            var9 = _closure3_slot0;
                            var3 = new Array(0);
                            var8 = 0;
                            var10 = var3;
                            var2 = arraySpread(var10, var9, var8);
                            var8 = undefined;
                            var10 = var4;
                            var9 = var3;
                            var1 = apply(var10, var9, var8);
case 38:
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
case 31:
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
                if(!(var2 == var1)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
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
                        var5 = _closure1_slot10;
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
case 39:
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
                var3 = _closure1_slot8;
                var1 = new Array(1);
                var14 = var1;
                var13 = var10;
                var12 = 0;
                var5 = arraySpread(var14, var13, var12);
                var4 = var6.key;
                var1[var5] = var4;
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
                if(!(var4 == var1)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                var4 = _closure1_slot10;
                var2 = _closure2_slot0;
                var8 = 'function';
                var2 = typeof var2;
                if(!(var8 !== var2)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                var2 = _closure2_slot0;
                _fun0006_ip = 45; continue _fun0006;
case 43:
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
case 45:
                var2 = var4.bind(var7)(var2, var6);
                var4 = _closure2_slot1;
                var3 = var4.set;
                var3 = var3.bind(var4)(var5, var2);
                return var2;
case 41:
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
                var4 = var1.saturation;
                var1 = _closure1_slot5;
                var1 = var1.gradientPreset;
                var2 = null;
                var3 = var2 != var1;
                var6 = null;
                if(!var3) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                var6 = var1;
case 46:
                var1 = var2 != var6;
                var9 = 0;
                var7 = 0;
                if(!var1) { _fun0007_ip = 48; continue _fun0007 }
case 38:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var15 = 10;
                var1 = var1[var15];
                var14 = undefined;
                var8 = var3.bind(var14)(var1);
                var3 = var8.setThemeFlag;
                var10 = var6.theme;
                var1 = 'light';
                if(!(var1 !== var10)) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                var10 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var15];
                var1 = var10.bind(var14)(var1);
                var1 = var1.ThemeContextFlags;
                var1 = var1.MOBILE_DARK_GRADIENT_THEME_ENABLED;
                _fun0007_ip = 34; continue _fun0007;
case 49:
                var13 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var15];
                var10 = var13.bind(var14)(var10);
                var10 = var10.ThemeContextFlags;
                var1 = var10.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
case 34:
                var7 = var3.bind(var8)(var9, var1);
case 48:
                var1 = {};
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 3;
                var3 = var10[var3];
                var10 = undefined;
                var3 = var8.bind(var10)(var3);
                var17 = var3.FALLBACK_THEME_CONTEXT_VALUE;
                var18 = var1;
                var3 = copyDataProperties(var18, var17);
                var3 = 'flags';
                var1[var3] = var7;
                var3 = 'gradient';
                var1[var3] = var6;
                var3 = 'saturation';
                var1[var3] = var4;
                var4 = arg1;
                var3 = 'theme';
                var1[var3] = var4;
                var3 = global;
                var4 = var3.JSON;
                var3 = var4.stringify;
                var3 = var3.bind(var4)(var1);
                var6 = {};
                var18 = var6;
                var17 = var1;
                var1 = copyDataProperties(var18, var17);
                var1 = 'key';
                var6[var1] = var3;
                var3 = _closure1_slot8;
                var1 = new Array(1);
                var18 = var1;
                var17 = var12;
                var16 = 0;
                var4 = arraySpread(var18, var17, var16);
                var7 = var6.key;
                var1[var4] = var7;
                var4 = var4 + var5;
                var18 = var3;
                var17 = var1;
                var16 = undefined;
                var5 = apply(var18, var17, var16);
                var4 = _closure2_slot1;
                var1 = var4.get;
                var1 = var1.bind(var4)(var5);
                if(!(var2 == var1)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                var4 = _closure1_slot10;
                var2 = _closure2_slot0;
                var7 = 'function';
                var2 = typeof var2;
                if(!(var7 !== var2)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                var2 = _closure2_slot0;
                _fun0007_ip = 55; continue _fun0007;
case 53:
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
case 55:
                var2 = var4.bind(var10)(var2, var6);
                var8 = var2;
                for(var4 in var8)
case 56:
                {
case 57:
                    var13 = var4;
                    var14 = var2[var13];
                    var12 = _closure1_slot9;
                    var12 = var12.bind(var10)(var14);
                    var2[var13] = var12;
                    _fun0007_ip = 56; continue _fun0007;
                }
case 58:
                var4 = _closure2_slot1;
                var3 = var4.set;
                var3 = var3.bind(var4)(var5, var2);
                return var2;
case 51:
                return var1;
            }
        };
        return var1;
    };
    var3['createNativeStyleProperties'] = var4;
    var2 = function createAnimatedThemedStyles(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var14 = arg1;
            var13 = {};
            var _closure2_slot0 = var13;
            var11 = var14;
            var6 = 5;
            var5 = undefined;
            var4 = 'light';
            var3 = 'darker';
            var2 = 'midnight';
            for(var8 in var11)
case 59:
            {
case 60:
                var16 = var8;
                var19 = var14[var16];
                var17 = _closure1_slot1;
                var15 = _closure1_slot2;
                var15 = var15[var6];
                var15 = var17.bind(var5)(var15);
                var17 = var15.internal;
                var15 = var17.isSemanticColor;
                var15 = var15.bind(var17)(var19);
                if(var15) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                var13[var16] = var19;
                _fun0008_ip = 59; continue _fun0008;
case 61:
                var18 = _closure1_slot1;
                var17 = _closure1_slot2;
                var15 = var17[var6];
                var15 = var18.bind(var5)(var15);
                var20 = var15.internal;
                var15 = var20.resolveSemanticColor;
                var20 = var15.bind(var20)(var4, var19);
                var15 = new Array(3);
                var15[0] = var20;
                var20 = var17[var6];
                var20 = var18.bind(var5)(var20);
                var21 = var20.internal;
                var20 = var21.resolveSemanticColor;
                var20 = var20.bind(var21)(var3, var19);
                var15[1] = var20;
                var17 = var17[var6];
                var17 = var18.bind(var5)(var17);
                var18 = var17.internal;
                var17 = var18.resolveSemanticColor;
                var17 = var17.bind(var18)(var2, var19);
                var15[2] = var17;
                var13[var16] = var15;
                _fun0008_ip = 59; continue _fun0008;
            }
case 63:
            var1 = function(arg1) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var10 = 7;
                var2 = var9[var10];
                var7 = undefined;
                var3 = var8.bind(var7)(var2);
                var2 = var3.useAnimatedStyle;
                var1 = function n() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = {};
                        var13 = _closure2_slot0;
                        var7 = 8;
                        var6 = undefined;
                        var5 = 7;
                        var3 = 9;
                        var2 = global;
                        for(var9 in var13)
case 64:
                        {
case 65:
                            var16 = var9;
                            var15 = _closure2_slot0;
                            var24 = var15[var16];
                            var17 = var2.Array;
                            var15 = var17.isArray;
                            var15 = var15.bind(var17)(var24);
                            if(var15) { _fun0009_ip = 66; continue _fun0009 }
case 67:
                            var1[var16] = var24;
                            _fun0009_ip = 64; continue _fun0009;
case 66:
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
                            var17 = [0, 1, 2];
                            var17 = var22.bind(var23)(var21, var17, var24);
                            var15 = var15[var3];
                            var15 = var20.bind(var6)(var15);
                            var15 = var15.timingStandard;
                            var15 = var18.bind(var19)(var17, var15);
                            var1[var16] = var15;
                            _fun0009_ip = 64; continue _fun0009;
                        }
case 68:
                        return var1;
                    }
                };
                var5 = {};
                var11 = _closure2_slot0;
                var5['resolved'] = var11;
                var11 = 8;
                var11 = var9[var11];
                var11 = var8.bind(var7)(var11);
                var11 = var11.withTiming;
                var5['withTiming'] = var11;
                var10 = var9[var10];
                var10 = var8.bind(var7)(var10);
                var10 = var10.interpolateColor;
                var5['interpolateColor'] = var10;
                var5['themeIndex'] = var6;
                var6 = 9;
                var6 = var9[var6];
                var6 = var8.bind(var7)(var6);
                var6 = var6.timingStandard;
                var5['timingStandard'] = var6;
                var1['__closure'] = var5;
                var5 = 15640881185419.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot7;
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
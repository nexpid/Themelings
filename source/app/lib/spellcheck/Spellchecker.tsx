// app/lib/spellcheck/Spellchecker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var6 = require;
        var8 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var8;
        var _closure1_slot2 = var7;
        var1 = function normalizeLocale(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = arg1;
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var1 = var1[var4];
                var6 = null;
                if(!(var6 != var1)) { _fun0002_ip = 41; continue _fun0002 }
 38:
                var4 = var1;
 41:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 8;
                var1 = var7[var1];
                var8 = var5.bind(var2)(var1);
                var7 = var8.parse;
                var9 = var4.replace;
                var1 = /[_-]/g;
                var5 = '-';
                var1 = var9.bind(var4)(var1, var5);
                var1 = var7.bind(var8)(var1);
                var9 = var4;
                if(!(var6 != var1)) { _fun0002_ip = 140; continue _fun0002 }
 108:
                var4 = var1.langtag;
                var4 = var4.language;
                if(!(var6 != var4)) { _fun0002_ip = 140; continue _fun0002 }
 124:
                var4 = var1.langtag;
                var4 = var4.region;
                if(!(var6 == var4)) { _fun0002_ip = 185; continue _fun0002 }
 140:
                var6 = _closure1_slot8;
                var4 = var6.error;
                var3 = global;
                var3 = var3.HermesInternal;
                var8 = var3.concat;
                var7 = '';
                var3 = ' is not a valid locale.';
                var3 = var8.bind(var7)(var9, var3);
                var3 = var4.bind(var6)(var3);
                return var2;
 185:
                var2 = var1.langtag;
                var1 = var2.language;
                var2 = var2.region;
                var3 = var1.language;
                var1 = var3.toLowerCase;
                var4 = var1.bind(var3)();
                var1 = var2.toUpperCase;
                var3 = var1.bind(var2)();
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '';
                var1 = var2.bind(var1)(var4, var5, var3);
                return var1;
            }
        };
        var _closure1_slot12 = var1;
        var1 = function _install() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 146; continue _fun0003 }
 10:
                        var4 = _closure1_slot9;
                        var2 = var4.getAvailableDictionaries;
                        var2 = var2.bind(var4)();
                        SaveGenerator(address=33);
 31:
                        return var2;
 33:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0003_ip = 143; continue _fun0003 }
 39:
                        var4 = null;
                        var6 = var2;
                        if(!(var4 == var6)) { _fun0003_ip = 52; continue _fun0003 }
 48:
                        var6 = new Array(0);
 52:
                        var5 = var6.map;
                        var4 = _closure1_slot12;
                        var7 = var5.bind(var6)(var4);
                        var6 = var7.filter;
                        var8 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 12;
                        var4 = var5[var4];
                        var5 = undefined;
                        var4 = var8.bind(var5)(var4);
                        var4 = var4.isNotNullish;
                        var9 = var6.bind(var7)(var4);
                        var3 = _closure1_slot10;
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {constructor: {value: var3}});
                        var10 = var4;
                        var3 = new var10[var3](var9, var8);
                        var3 = var3 instanceof Object ? var3 : var4;
                        var4 = function attachToInput(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                var2 = arg1;
                                var _closure5_slot0 = var2;
                                var2 = global;
                                var3 = var2.document;
                                var4 = var3.body;
                                var3 = null;
                                if(!(var3 != var4)) { _fun0004_ip = 65; continue _fun0004 }
 28:
                                var2 = var2.document;
                                var5 = var2.body;
                                var4 = var5.addEventListener;
                                var3 = 'beforeinput';
                                var2 = function(arg1) {
                                    var4 = _closure1_slot11;
                                    var3 = _closure5_slot0;
                                    var1 = arg1;
                                    var2 = var1.target;
                                    var1 = undefined;
                                    var1 = var4.bind(var1)(var3, var2);
                                    return var1;
                                };
                                var1 = true;
                                var1 = var4.bind(var5)(var3, var2, var1);
 65:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var4 = var4.bind(var5)(var3);
                        return var3;
 143:
                        return var2;
 146:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot13 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot13 = var1;
        var1 = global;
        var9 = var1.Object;
        var5 = var9.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var9)(var3, var1, var4);
        var1 = 0;
        var4 = var7[var1];
        var1 = undefined;
        var4 = var8.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var4 = var7[var4];
        var4 = var8.bind(var1)(var4);
        var _closure1_slot4 = var4;
        var4 = 2;
        var4 = var7[var4];
        var4 = var8.bind(var1)(var4);
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var7[var4];
        var4 = var8.bind(var1)(var4);
        var _closure1_slot6 = var4;
        var4 = 4;
        var4 = var7[var4];
        var4 = var8.bind(var1)(var4);
        var _closure1_slot7 = var4;
        var4 = 5;
        var4 = var7[var4];
        var9 = var8.bind(var1)(var4);
        var4 = var9.prototype;
        var5 = Object.create(var4, {constructor: {value: var9}});
        var13 = 'Spellchecker';
        var14 = var5;
        var4 = new var14[var9](var13, var12);
        var4 = var4 instanceof Object ? var4 : var5;
        var _closure1_slot8 = var4;
        var5 = 6;
        var4 = var7[var5];
        var9 = var8.bind(var1)(var4);
        var4 = null;
        var9 = var4 == var9;
        var4 = undefined;
        if(var9) { _fun0001_ip = 237; continue _fun0001 }
 222:
        var5 = var7[var5];
        var5 = var8.bind(var1)(var5);
        var4 = var5.spellCheck;
 237:
        var _closure1_slot9 = var4;
        var4 = function() {
            var4 = _closure1_slot6;
            var3 = function Spellchecker(arg1) {
                var6 = arg1;
                var5 = this;
                var _closure3_slot0 = var5;
                var _closure3_slot1 = var6;
                var7 = _closure1_slot5;
                var4 = _closure2_slot0;
                var1 = undefined;
                var4 = var7.bind(var1)(var5, var4);
                var4 = true;
                var5['_enabled'] = var4;
                var4 = '';
                var5['misspelledWord'] = var4;
                var4 = new Array(0);
                var5['corrections'] = var4;
                var4 = _closure1_slot7;
                var8 = var4.locale;
                var7 = var8.split;
                var4 = '-';
                var8 = var7.bind(var8)(var4);
                var7 = _closure1_slot4;
                var4 = 2;
                var7 = var7.bind(var1)(var8, var4);
                var4 = 0;
                var8 = var7[var4];
                var _closure3_slot2 = var8;
                var4 = 1;
                var4 = var7[var4];
                var5['regionPreference'] = var4;
                var4 = var5.getAvailableLanguages;
                var4 = var4.bind(var5)(var6);
                var _closure3_slot3 = var4;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 9;
                var4 = var7[var4];
                var7 = var6.bind(var1)(var4);
                var4 = var7.prototype;
                var6 = Object.create(var4, {constructor: {value: var7}});
                var9 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var4 = arg1;
                        var2 = _closure3_slot0;
                        var6 = var2.regionPreference;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var5 = var2.concat;
                        var3 = '';
                        var2 = '-';
                        var3 = var5.bind(var3)(var4, var2, var6);
                        var5 = _closure3_slot1;
                        var2 = var5.indexOf;
                        var5 = var2.bind(var5)(var3);
                        var2 = -1;
                        if(!(var2 === var5)) { _fun0005_ip = 137; continue _fun0005 }
 69:
                        var2 = _closure3_slot3;
                        var5 = var2[var4];
                        var2 = null;
                        if(!(var2 == var5)) { _fun0005_ip = 116; continue _fun0005 }
 83:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 7;
                        var6 = var6[var4];
                        var4 = undefined;
                        var6 = var7.bind(var4)(var6);
                        var4 = _closure3_slot2;
                        var5 = var6[var4];
 116:
                        if(!(var2 != var5)) { _fun0005_ip = 152; continue _fun0005 }
 120:
                        var4 = _closure3_slot0;
                        var2 = var4.setLocale;
                        var2 = var2.bind(var4)(var5);
                        _fun0005_ip = 152; continue _fun0005;
 137:
                        var2 = _closure3_slot0;
                        var1 = var2.setLocale;
                        var1 = var1.bind(var2)(var3);
 152:
                        var1 = undefined;
                        return var1;
                    }
                };
                var11 = var6;
                var10 = var8;
                var4 = new var11[var7](var10, var9, var8);
                var4 = var4 instanceof Object ? var4 : var6;
                var5['languageDetector'] = var4;
                var5 = _closure1_slot9;
                var4 = var5.on;
                var3 = 'spellcheck-result';
                var2 = function(arg1, arg2) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var6 = arg1;
                        var2 = arg2;
                        var5 = _closure3_slot0;
                        var3 = null;
                        var7 = var3 != var6;
                        var4 = '';
                        if(!var7) { _fun0006_ip = 29; continue _fun0006 }
 26:
                        var4 = var6;
 29:
                        var5['misspelledWord'] = var4;
                        var1 = _closure3_slot0;
                        if(!(var3 == var2)) { _fun0006_ip = 47; continue _fun0006 }
 43:
                        var2 = new Array(0);
 47:
                        var1['corrections'] = var2;
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var _closure2_slot0 = var3;
            var1 = {};
            var2 = 'enabled';
            var1['key'] = var2;
            var2 = function get() {
                var1 = this;
                var1 = var1._enabled;
                return var1;
            };
            var1['get'] = var2;
            var2 = function set(arg1) {
                var2 = arg1;
                var1 = this;
                var1['_enabled'] = var2;
                var1 = undefined;
                return var1;
            };
            var1['set'] = var2;
            var2 = new Array(9);
            var2[0] = var1;
            var1 = {};
            var6 = 'setLearnedWords';
            var1['key'] = var6;
            var6 = function value(arg1) {
                var3 = _closure1_slot9;
                var2 = var3.setLearnedWords;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1['value'] = var6;
            var2[1] = var1;
            var1 = {};
            var6 = 'setLocale';
            var1['key'] = var6;
            var6 = function value(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = arg1;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot9;
                    var2 = var3.setLocale;
                    var3 = var2.bind(var3)(var4);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 48; continue _fun0007 }
 33:
                    var2 = var3.then;
                    var1 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var4 = _closure1_slot8;
                            var3 = var4.info;
                            var5 = _closure3_slot0;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var2 = var1.concat;
                            var1 = 'Switching to ';
                            var2 = var2.bind(var1)(var5);
                            var1 = '(unavailable)';
                            var5 = arg1;
                            if(!var5) { _fun0008_ip = 62; continue _fun0008 }
 56:
                            var1 = '(available)';
 62:
                            var1 = var3.bind(var4)(var2, var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
 48:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['value'] = var6;
            var2[2] = var1;
            var1 = {};
            var6 = 'setAppLocale';
            var1['key'] = var6;
            var6 = function value(arg1) {
                var3 = arg1;
                var2 = var3.split;
                var1 = '-';
                var2 = var2.bind(var3)(var1);
                var1 = 1;
                var2 = var2[var1];
                var1 = this;
                var1['regionPreference'] = var2;
                var1 = undefined;
                return var1;
            };
            var1['value'] = var6;
            var2[3] = var1;
            var1 = {};
            var6 = 'detectLanguage';
            var1['key'] = var6;
            var6 = function value(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = this;
                    var2 = var1.enabled;
                    if(!var2) { _fun0009_ip = 31; continue _fun0009 }
 11:
                    var3 = var1.languageDetector;
                    var2 = var3.process;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['value'] = var6;
            var2[4] = var1;
            var1 = {};
            var6 = 'getAvailableLanguages';
            var1['key'] = var6;
            var6 = function value(arg1) {
                var4 = arg1;
                var1 = {};
                var _closure3_slot0 = var1;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var2 = arg1;
                        var3 = var2.split;
                        var1 = '-';
                        var5 = var3.bind(var2)(var1);
                        var4 = _closure1_slot4;
                        var1 = undefined;
                        var3 = 1;
                        var4 = var4.bind(var1)(var5, var3);
                        var3 = 0;
                        var4 = var4[var3];
                        var3 = _closure3_slot0;
                        var5 = var3[var4];
                        var6 = null;
                        if(!(var6 != var5)) { _fun0010_ip = 61; continue _fun0010 }
 58:
                        var2 = var5;
 61:
                        var3[var4] = var2;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['value'] = var6;
            var2[5] = var1;
            var1 = {};
            var6 = 'isMisspelled';
            var1['key'] = var6;
            var6 = function value(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = this;
                    var3 = var2.misspelledWord;
                    var1 = '';
                    var1 = var1 !== var3;
                    if(!var1) { _fun0011_ip = 33; continue _fun0011 }
 20:
                    var3 = var2.misspelledWord;
                    var2 = arg1;
                    var1 = var2 === var3;
 33:
                    return var1;
                }
            };
            var1['value'] = var6;
            var2[6] = var1;
            var1 = {};
            var6 = 'getCorrectionsForMisspelling';
            var1['key'] = var6;
            var6 = function value(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var2 = this;
                    var4 = var2.isMisspelled;
                    var3 = arg1;
                    var1 = arg2;
                    var1 = var4.bind(var2)(var3, var1);
                    if(var1) { _fun0012_ip = 30; continue _fun0012 }
 24:
                    var1 = new Array(0);
                    _fun0012_ip = 36; continue _fun0012;
 30:
                    var1 = var2.corrections;
 36:
                    return var1;
                }
            };
            var1['value'] = var6;
            var2[7] = var1;
            var1 = {};
            var6 = 'replaceMisspelling';
            var1['key'] = var6;
            var5 = function value(arg1) {
                var3 = _closure1_slot9;
                var2 = var3.replaceMisspelling;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1['value'] = var5;
            var2[8] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var4 = var4.bind(var1)();
        var _closure1_slot10 = var4;
        var5 = 10;
        var5 = var7[var5];
        var10 = var8.bind(var1)(var5);
        var9 = var10.debounce;
        var8 = function(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var3 = arg1;
                var4 = arg2;
                var1 = null;
                var5 = var1 == var4;
                var2 = null;
                if(var5) { _fun0013_ip = 174; continue _fun0013 }
 20:
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var8 = 11;
                var7 = var6[var8];
                var6 = undefined;
                var11 = var9.bind(var6)(var7);
                var10 = var11.isElement;
                var7 = global;
                var9 = var7.HTMLInputElement;
                var9 = var10.bind(var11)(var4, var9);
                if(var9) { _fun0013_ip = 169; continue _fun0013 }
 68:
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var8];
                var10 = var10.bind(var6)(var9);
                var9 = var10.isElement;
                var7 = var7.HTMLTextAreaElement;
                var7 = var9.bind(var10)(var4, var7);
                if(var7) { _fun0013_ip = 169; continue _fun0013 }
 106:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var7 = var7.bind(var6)(var5);
                var5 = var7.isElement;
                var5 = var5.bind(var7)(var4);
                var2 = undefined;
                if(!var5) { _fun0013_ip = 174; continue _fun0013 }
 139:
                var7 = var4.hasAttribute;
                var5 = 'contenteditable';
                var5 = var7.bind(var4)(var5);
                var2 = undefined;
                if(!var5) { _fun0013_ip = 174; continue _fun0013 }
 161:
                var2 = var4.textContent;
                _fun0013_ip = 174; continue _fun0013;
 169:
                var2 = var4.value;
 174:
                if(!(var1 != var2)) { _fun0013_ip = 191; continue _fun0013 }
 178:
                var1 = var3.detectLanguage;
                var1 = var1.bind(var3)(var2);
 191:
                var1 = undefined;
                return var1;
            }
        };
        var5 = 250;
        var5 = var9.bind(var10)(var8, var5);
        var _closure1_slot11 = var5;
        var5 = 13;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'lib/spellcheck/Spellchecker.tsx';
        var5 = var6.bind(var7)(var5);
        var3['Spellchecker'] = var4;
        var2 = function install() {
            var1 = undefined;
            var4 = _closure1_slot13;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['install'] = var2;
        return var1;
    }
})();
// app/lib/spellcheck/LanguageDetector.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function LanguageDetector(arg1, arg2) {
            var3 = arg1;
            var2 = arg2;
            var4 = this;
            var6 = _closure1_slot2;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var4, var5);
            var5 = false;
            var4['_shouldProcess'] = var5;
            var4['_processing'] = var5;
            var5 = 5;
            var4['_minimumTimeRemaining'] = var5;
            var4['_language'] = var3;
            var4['_languageHint'] = var3;
            var4['_onChange'] = var2;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'language';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var1 = var1._language;
            return var1;
        };
        var1['get'] = var2;
        var2 = function set(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var1 = var2._language;
                if(!(var1 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2['_language'] = var3;
                var1 = var2._onChange;
                var1 = var1.bind(var2)(var3);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var1['set'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'languageHint';
        var1['key'] = var6;
        var6 = function set(arg1) {
            var2 = arg1;
            var1 = this;
            var1['_languageHint'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['set'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'process';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var2 = arg1;
                var _closure3_slot1 = var2;
                var2 = var3._processing;
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = true;
                var3['_processing'] = var2;
                var2 = global;
                var3 = var2.requestIdleCallback;
                var2 = undefined;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = arg1;
                        var _closure4_slot0 = var3;
                        var1 = var3.timeRemaining;
                        var4 = var1.bind(var3)();
                        var3 = _closure3_slot0;
                        var3 = var3._minimumTimeRemaining;
                        if(!(!(var4 <= var3))) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                        var3 = _closure3_slot1;
                        var3 = var3.length;
                        var6 = 256;
                        if(!(var3 > var6)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var5 = _closure3_slot1;
                        var4 = var5.slice;
                        var3 = 0;
                        var3 = var4.bind(var5)(var3, var6);
                        _closure3_slot1 = var3;
case 8:
                        var6 = _closure3_slot1;
                        var3 = _closure3_slot0;
                        var5 = var3._languageHint;
                        var4 = function detectLanguage(arg1, arg2) {
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var2 = arg2;
                            var _closure5_slot1 = var2;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var2 = 2;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.ensureModule;
                            var2 = 'discord_spellcheck';
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.then;
                            var1 = function() {
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var2 = 2;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.requireModule;
                                var2 = 'discord_spellcheck';
                                var2 = var3.bind(var4)(var2);
                                var2 = var2.cld;
                                var _closure6_slot0 = var2;
                                var2 = global;
                                var3 = var2.Promise;
                                var2 = var3.prototype;
                                var2 = Object.create(var2, {constructor: {value: var3}});
                                var5 = function(arg1, arg2) {
                                    var2 = arg1;
                                    var _closure7_slot0 = var2;
                                    var2 = arg2;
                                    var _closure7_slot1 = var2;
                                    var5 = _closure6_slot0;
                                    var4 = var5.detect;
                                    var3 = _closure5_slot0;
                                    var2 = {};
                                    var6 = _closure5_slot1;
                                    var2['httpHint'] = var6;
                                    var6 = 'UTF8';
                                    var2['encodingHint'] = var6;
                                    var1 = function(arg1, arg2) {
                                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                            var1 = arg1;
                                            var2 = arg2;
                                            var3 = null;
                                            if(!(var3 == var1)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                                            var3 = var2.reliable;
                                            if(!var3) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                                            var4 = var2.languages;
                                            var3 = 0;
                                            var4 = var4[var3];
                                            var5 = var4.percent;
                                            var4 = 90;
                                            if(!(!(var5 < var4))) { _fun0004_ip = 12; continue _fun0004 }
case 14:
                                            var4 = var2.languages;
                                            var4 = var4[var3];
                                            var5 = var4.score;
                                            var4 = 500;
                                            if(!(!(var5 < var4))) { _fun0004_ip = 12; continue _fun0004 }
case 15:
                                            var4 = _closure7_slot0;
                                            var2 = var2.languages;
                                            var2 = var2[var3];
                                            var3 = var2.code;
                                            var2 = undefined;
                                            var2 = var4.bind(var2)(var3);
                                            _fun0004_ip = 16; continue _fun0004;
case 12:
                                            var4 = _closure7_slot1;
                                            var2 = global;
                                            var5 = var2.Error;
                                            var2 = var5.prototype;
                                            var3 = Object.create(var2, {constructor: {value: var5}});
                                            var6 = 'Not enough reliable text.';
                                            var7 = var3;
                                            var2 = new var7[var5](var6, var5);
                                            var3 = var2 instanceof Object ? var2 : var3;
                                            var2 = undefined;
                                            var2 = var4.bind(var2)(var3);
                                            _fun0004_ip = 16; continue _fun0004;
case 10:
                                            var3 = _closure7_slot1;
                                            var2 = global;
                                            var4 = var2.Error;
                                            var6 = var1.message;
                                            var2 = var4.prototype;
                                            var2 = Object.create(var2, {constructor: {value: var4}});
                                            var7 = var2;
                                            var1 = new var7[var4](var6, var5);
                                            var2 = var1 instanceof Object ? var1 : var2;
                                            var1 = undefined;
                                            var1 = var3.bind(var1)(var2);
case 16:
                                            var1 = undefined;
                                            return var1;
                                        }
                                    };
                                    var1 = var4.bind(var5)(var3, var2, var1);
                                    var1 = undefined;
                                    return var1;
                                };
                                var6 = var2;
                                var1 = new var6[var3](var5, var4);
                                var1 = var1 instanceof Object ? var1 : var2;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var3 = undefined;
                        var5 = var4.bind(var3)(var6, var5);
                        var4 = var5.then;
                        var3 = function(arg1) {
                            var3 = _closure3_slot0;
                            var1 = arg1;
                            var3['language'] = var1;
                            var2 = var3._processEnd;
                            var1 = _closure4_slot0;
                            var1 = var1.didTimeout;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var2 = function() {
                            var3 = _closure3_slot0;
                            var2 = var3._processEnd;
                            var1 = _closure4_slot0;
                            var1 = var1.didTimeout;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var2 = var4.bind(var5)(var3, var2);
                        _fun0003_ip = 17; continue _fun0003;
case 6:
                        var2 = _closure3_slot0;
                        var1 = var2._processEnd;
                        var1 = var1.bind(var2)();
case 17:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var2)(var1);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = '_processEnd';
        var1['key'] = var6;
        var5 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arguments[0];
                var3 = this;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                var2 = false;
case 18:
                var4 = false;
                var3['_processing'] = var4;
                if(!var2) { _fun0005_ip = 20; continue _fun0005 }
case 5:
                var2 = var3._minimumTimeRemaining;
                var2 = var2 + 1;
                var3['_minimumTimeRemaining'] = var2;
case 20:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 3;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/spellcheck/LanguageDetector.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
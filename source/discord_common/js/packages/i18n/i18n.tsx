// discord_common/js/packages/i18n/i18n.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var8 = global;
        var6 = require;
        var10 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var7;
        var1 = function _callSuper(arg1, arg2, arg3) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = arg1;
                var6 = arg3;
                var2 = _closure1_slot3;
                var3 = undefined;
                var1 = arg2;
                var9 = var2.bind(var3)(var1);
                var2 = _closure1_slot2;
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var4, var6);
                _fun0002_ip = 4; continue _fun0002;
case 2:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                if(var6) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var6 = new Array(0);
case 5:
                var5 = _closure1_slot3;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var7.bind(var8)(var9, var6, var5);
case 4:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure1_slot10 = var1;
        var1 = function _isNativeReflectConstruct() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
case 7: // try_start_0
                var2 = global;
                var3 = var2.Boolean;
                var3 = var3.prototype;
                var4 = var3.valueOf;
                var3 = var4.call;
                var8 = var2.Reflect;
                var7 = var8.construct;
                var6 = var2.Boolean;
                var5 = new Array(0);
                var2 = function() {
                    var1 = undefined;
                    return var1;
                };
                var2 = var7.bind(var8)(var6, var5, var2);
                var2 = var3.bind(var4)(var2);
                var2 = !var2;
                var _closure2_slot0 = var2;
case 8: // try_end0
                _fun0003_ip = 9; continue _fun0003;
case 10: // catch_target0
                CatchBlockStart(arg_register=1);
case 9:
                var2 = function _isNativeReflectConstruct() {
                    var1 = _closure2_slot0;
                    var1 = !var1;
                    var1 = !var1;
                    return var1;
                };
                _closure1_slot11 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot11 = var1;
        var4 = function getSystemLocale() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 35;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var4 = var3.Platform;
                var5 = var4.OS;
                var4 = 'android';
                if(!(var4 !== var5)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var3 = var3.NativeModules;
                var4 = var3.LocalizationManager;
                _fun0004_ip = 13; continue _fun0004;
case 11:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 36;
                var1 = var5[var1];
                var1 = var3.bind(var2)(var1);
                var4 = var1.default;
case 13:
                var1 = null;
                var3 = var1 != var4;
                var2 = undefined;
                if(!var3) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var3 = var4.getConstants;
                var3 = var3.bind(var4)();
                var2 = var3.Language;
case 14:
                var3 = var1 != var2;
                var1 = '';
                if(!var3) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var1 = var2;
case 16:
                return var1;
            }
        };
        var _closure1_slot12 = var4;
        var5 = global;
        var12 = var5.Object;
        var11 = var12.defineProperty;
        var9 = {};
        var1 = true;
        var9['value'] = var1;
        var1 = '__esModule';
        var1 = var11.bind(var12)(var3, var1, var9);
        var1 = 0;
        var9 = var7[var1];
        var1 = undefined;
        var9 = var10.bind(var1)(var9);
        var _closure1_slot2 = var9;
        var9 = 1;
        var9 = var7[var9];
        var9 = var10.bind(var1)(var9);
        var _closure1_slot3 = var9;
        var9 = 2;
        var9 = var7[var9];
        var9 = var10.bind(var1)(var9);
        var _closure1_slot4 = var9;
        var9 = 3;
        var9 = var7[var9];
        var9 = var10.bind(var1)(var9);
        var _closure1_slot5 = var9;
        var9 = 4;
        var9 = var7[var9];
        var9 = var10.bind(var1)(var9);
        var _closure1_slot6 = var9;
        var9 = 5;
        var9 = var7[var9];
        var9 = var10.bind(var1)(var9);
        var8['IntlMessageFormat'] = var9;
        var9 = 6;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 7;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 8;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 9;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 10;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 11;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 12;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 13;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 14;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 15;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 16;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 17;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 18;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 19;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 20;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 21;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 22;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 23;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 24;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 25;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 26;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 27;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 28;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 29;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 30;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 31;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 32;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = 33;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var8 = delete var8.IntlMessageFormat;
        var5 = var5.Intl;
        var8 = 'undefined';
        var5 = typeof var5;
        if(!(var8 === var5)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
        var5 = 34;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
case 18:
        var5 = 'en-US';
        var _closure1_slot7 = var5;
        var5 = function() {
            var4 = _closure1_slot6;
            var3 = function Provider(arg1) {
                var3 = this;
                var5 = _closure1_slot5;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var5.bind(var1)(var3, var2);
                var2 = {};
                var5 = {};
                var2['messages'] = var5;
                var5 = {};
                var2['defaultMessages'] = var5;
                var4 = _closure1_slot7;
                var2['locale'] = var4;
                var3['_context'] = var2;
                var2 = {};
                var3['_parsedMessages'] = var2;
                var2 = arg1;
                var3['_getParsedMessages'] = var2;
                return var1;
            };
            var _closure2_slot0 = var3;
            var1 = {};
            var5 = 'getMessages';
            var1['key'] = var5;
            var2 = function value() {
                var1 = this;
                var1 = var1._parsedMessages;
                return var1;
            };
            var1['value'] = var2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var8 = var5.bind(var1)();
        var5 = function(arg1) {
            var4 = function LazyPropertyProvider(arg1) {
                var6 = this;
                var11 = 0;
                var7 = copyRestArgs(var11);
                var3 = _closure1_slot5;
                var5 = _closure2_slot0;
                var4 = undefined;
                var3 = var3.bind(var4)(var6, var5);
                var3 = _closure1_slot10;
                var1 = new Array(0);
                var11 = var1;
                var10 = var7;
                var9 = 0;
                var7 = arraySpread(var11, var10, var9);
                var1 = var3.bind(var4)(var6, var5, var1);
                var _closure3_slot0 = var1;
                var2 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = arg1;
                        var1 = arguments[1];
                        var _closure4_slot0 = var3;
                        var4 = undefined;
                        if(!(var1 === var4)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                        var1 = {};
case 20:
                        var _closure4_slot1 = var1;
                        var4 = global;
                        var5 = var4.Object;
                        var4 = var5.keys;
                        var3 = var3.defaultMessages;
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.forEach;
                        var2 = function(arg1) {
                            var5 = arg1;
                            var _closure5_slot0 = var5;
                            var1 = global;
                            var4 = var1.Object;
                            var3 = var4.defineProperty;
                            var2 = _closure4_slot1;
                            var1 = {};
                            var7 = true;
                            var1['configurable'] = var7;
                            var6 = function get() {
                                var3 = _closure4_slot1;
                                var2 = _closure5_slot0;
                                var4 = delete var3[var2];
                                var6 = _closure3_slot0;
                                var5 = var6._getParsedMessages;
                                var4 = _closure4_slot0;
                                var1 = var6._refresh;
                                var1 = var5.bind(var6)(var4, var2, var1);
                                var3[var2] = var1;
                                return var1;
                            };
                            var1['get'] = var6;
                            var1 = var3.bind(var4)(var2, var5, var1);
                            var1 = undefined;
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var1['_refresh'] = var2;
                return var1;
            };
            var _closure2_slot0 = var4;
            var6 = _closure1_slot4;
            var3 = undefined;
            var5 = arg1;
            var5 = var6.bind(var3)(var4, var5);
            var2 = _closure1_slot6;
            var5 = {};
            var6 = 'refresh';
            var5['key'] = var6;
            var1 = function value(arg1) {
                var4 = arg1;
                var3 = this;
                var3['_context'] = var4;
                var2 = var3._refresh;
                var1 = var3._parsedMessages;
                var1 = var2.bind(var3)(var4, var1);
                var1 = undefined;
                return var1;
            };
            var5['value'] = var1;
            var1 = new Array(1);
            var1[0] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var5 = var5.bind(var1)(var8);
        var _closure1_slot8 = var5;
        var5 = function(arg1) {
            var4 = function ProxyProvider(arg1) {
                var6 = this;
                var3 = _closure1_slot5;
                var5 = _closure2_slot0;
                var4 = undefined;
                var3 = var3.bind(var4)(var6, var5);
                var3 = _closure1_slot10;
                var1 = new Array(1);
                var7 = arg1;
                var1[0] = var7;
                var1 = var3.bind(var4)(var6, var5, var1);
                var _closure3_slot0 = var1;
                var2 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = arguments[0];
                        var3 = undefined;
                        if(!(var2 === var3)) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                        var3 = _closure3_slot0;
                        var2 = var3._context;
case 22:
                        var _closure4_slot0 = var2;
                        var2 = global;
                        var4 = var2.Proxy;
                        var3 = {};
                        var1 = function get(arg1, arg2) {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var4 = arg1;
                                var3 = arg2;
                                var1 = var4[var3];
                                if(var1) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                                var7 = _closure3_slot0;
                                var6 = var7._getParsedMessages;
                                var5 = _closure4_slot0;
                                var2 = var7._createProxy;
                                var2 = var6.bind(var7)(var5, var3, var2);
                                var4[var3] = var2;
                                var1 = var2;
case 24:
                                return var1;
                            }
                        };
                        var3['get'] = var1;
                        var1 = var4.prototype;
                        var2 = Object.create(var1, {constructor: {value: var4}});
                        var6 = {};
                        var7 = var2;
                        var5 = var3;
                        var1 = new var7[var4](var6, var5, var4);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    }
                };
                var1['_createProxy'] = var2;
                var3 = var1._createProxy;
                var2 = var1._context;
                var2 = var3.bind(var1)(var2);
                var1['_parsedMessages'] = var2;
                return var1;
            };
            var _closure2_slot0 = var4;
            var6 = _closure1_slot4;
            var3 = undefined;
            var5 = arg1;
            var5 = var6.bind(var3)(var4, var5);
            var2 = _closure1_slot6;
            var5 = {};
            var6 = 'refresh';
            var5['key'] = var6;
            var1 = function value(arg1) {
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = global;
                var7 = var3.Object;
                var6 = var7.assign;
                var5 = var2._context;
                var4 = arg1;
                var4 = var6.bind(var7)(var5, var4);
                var4 = var3.Object;
                var3 = var4.keys;
                var2 = var2._parsedMessages;
                var3 = var3.bind(var4)(var2);
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var1 = _closure3_slot0;
                    var2 = var1._parsedMessages;
                    var1 = arg1;
                    var1 = delete var2[var1];
                    var1 = undefined;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var5['value'] = var1;
            var1 = new Array(1);
            var1[0] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var5 = var5.bind(var1)(var8);
        var _closure1_slot9 = var5;
        var5 = 39;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.EventEmitter;
        var2 = function(arg1) {
            var4 = function I18N(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var10 = this;
                    var2 = var3.initialLocale;
                    var4 = var3.getMessages;
                    var8 = var3.getLanguages;
                    var5 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot5;
                    var9 = _closure2_slot0;
                    var3 = var3.bind(var5)(var10, var9);
                    var3 = _closure1_slot10;
                    var9 = var3.bind(var5)(var10, var9);
                    var1 = var9;
                    var _closure3_slot0 = var9;
                    var3 = global;
                    var11 = var3.Promise;
                    var10 = var11.resolve;
                    var10 = var10.bind(var11)();
                    var9['loadPromise'] = var10;
                    var10 = function() {
                        var1 = undefined;
                        return var1;
                    };
                    var9['resolveLanguageLoaded'] = var10;
                    var10 = new Array(0);
                    var9['_languages'] = var10;
                    var10 = '';
                    var9['_chosenLocale'] = var10;
                    var10 = function(arg1, arg2, arg3) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var3 = arg1;
                            var7 = arg2;
                            var2 = var3.messages;
                            var5 = var3.defaultMessages;
                            var1 = var3.locale;
                            var4 = var7;
                            var3 = undefined;
                            var6 = undefined;
                            var2 = var2[var7];
                            if(var2) { _fun0009_ip = 26; continue _fun0009 }
case 3:
                            var8 = var5;
                            var7 = var4;
                            var2 = var8[var7];
case 26:
                            var6 = var2;
                            var7 = 'object';
                            var2 = typeof var2;
                            if(!(var7 !== var2)) { _fun0009_ip = 27; continue _fun0009 }
case 28: // try_start_0
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var2 = 37;
                            var2 = var8[var2];
                            var9 = var7.bind(var3)(var2);
                            var8 = var9.getMessage;
                            var7 = var6;
                            var2 = var1;
                            var2 = var8.bind(var9)(var7, var2);
case 29: // try_end0
                            return var2;
case 30: // catch_target0
                            CatchBlockStart(arg_register=1);
                            var7 = var5;
                            var2 = var4;
                            var2 = var7[var2];
                            var6 = var2;
                            var7 = 'string';
                            var2 = typeof var2;
                            if(!(var7 !== var2)) { _fun0009_ip = 31; continue _fun0009 }
case 32:
                            var2 = '';
                            return var2;
case 31:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var2 = 37;
                            var2 = var8[var2];
                            var9 = var7.bind(var3)(var2);
                            var8 = var9.getMessage;
                            var7 = var6;
                            var2 = var1;
                            var2 = var8.bind(var9)(var7, var2);
                            return var2;
case 27:
                            var2 = {};
                            var2['messages'] = var6;
                            var4 = var5[var4];
                            var2['defaultMessages'] = var4;
                            var2['locale'] = var1;
                            var1 = arg3;
                            var1 = var1.bind(var3)(var2);
                            return var1;
                        }
                    };
                    var9['_getParsedMessages'] = var10;
                    var10 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var4 = arg1;
                            var1 = 'locale';
                            if(!(var1 === var4)) { _fun0010_ip = 33; continue _fun0010 }
case 23:
                            var3 = _closure3_slot0;
                            var2 = var3.emit;
                            var1 = var3._chosenLocale;
                            var1 = var2.bind(var3)(var4, var1);
case 33:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var9['_handleNewListener'] = var10;
                    var11 = var3.Promise;
                    var10 = var11.prototype;
                    var10 = Object.create(var10, {constructor: {value: var11}});
                    var14 = function(arg1) {
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var2['resolveLanguageLoaded'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var15 = var10;
                    var6 = new var15[var11](var14, var13);
                    var6 = var6 instanceof Object ? var6 : var10;
                    var9['initialLanguageLoad'] = var6;
                    var6 = var3.Intl;
                    var6 = var6.__addLocaleData;
                    if(!var6) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                    var10 = var3.Intl;
                    var9 = var10.__addLocaleData;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var6 = 38;
                    var6 = var12[var6];
                    var6 = var11.bind(var5)(var6);
                    var6 = var9.bind(var10)(var6);
case 34:
                    var6 = var1;
                    var5 = var8.bind(var5)();
                    var6['_languages'] = var5;
                    var5 = var3.window;
                    var8 = var5.Proxy;
                    var5 = null;
                    if(!(var5 == var8)) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                    var9 = _closure1_slot8;
                    var5 = var1;
                    var14 = var5._getParsedMessages;
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {constructor: {value: var9}});
                    var15 = var8;
                    var5 = new var15[var9](var14, var13);
                    var5 = var5 instanceof Object ? var5 : var8;
                    _fun0008_ip = 38; continue _fun0008;
case 36:
                    var9 = _closure1_slot9;
                    var7 = var1;
                    var14 = var7._getParsedMessages;
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {constructor: {value: var9}});
                    var15 = var8;
                    var7 = new var15[var9](var14, var13);
                    var5 = var7 instanceof Object ? var7 : var8;
case 38:
                    var6['_provider'] = var5;
                    var5 = var1;
                    var7 = var5._provider;
                    var6 = var7.getMessages;
                    var6 = var6.bind(var7)();
                    var5['Messages'] = var6;
                    var5['_getMessages'] = var4;
case 39: // try_start_0
                    var3 = var3.Intl;
                    var4 = var3.NumberFormat;
                    var5 = var2;
                    var2 = var4.prototype;
                    var15 = Object.create(var2, {constructor: {value: var4}});
                    var13 = {};
                    var14 = var5;
                    var2 = new var15[var4](var14, var13, var12);
                    var4 = var1;
                    var3 = var4.setLocale;
                    var2 = var5;
                    if(var5) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                    var6 = var1;
                    var5 = var6.getDefaultLocale;
                    var2 = var5.bind(var6)();
case 40:
                    var2 = var3.bind(var4)(var2);
case 42: // try_end0
                    _fun0008_ip = 43; continue _fun0008;
case 44: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = var1;
                    var3 = var4.setLocale;
                    var2 = var4.getDefaultLocale;
                    var2 = var2.bind(var4)();
                    var2 = var3.bind(var4)(var2);
case 43:
                    var4 = var1.on;
                    var3 = var1._handleNewListener;
                    var2 = 'newListener';
                    var2 = var4.bind(var1)(var2, var3);
                    return var1;
                }
            };
            var _closure2_slot0 = var4;
            var5 = _closure1_slot4;
            var3 = undefined;
            var2 = arg1;
            var2 = var5.bind(var3)(var4, var2);
            var2 = _closure1_slot6;
            var5 = {};
            var1 = 'updateMessagesForExperiment';
            var5['key'] = var1;
            var1 = function value(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var6 = arg1;
                    var7 = arg2;
                    var5 = this;
                    var _closure3_slot0 = var5;
                    var _closure3_slot1 = var6;
                    var _closure3_slot2 = var7;
                    var2 = var5._fetchMessages;
                    var3 = var2.bind(var5)(var6);
                    var2 = global;
                    var2 = var2.Promise;
                    var2 = var3 instanceof var2;
                    if(var2) { _fun0011_ip = 8; continue _fun0011 }
case 45:
                    var4 = var5._applyMessagesForLocale;
                    var2 = undefined;
                    var2 = var7.bind(var2)(var3);
                    var2 = var4.bind(var5)(var2, var6);
                    _fun0011_ip = 46; continue _fun0011;
case 8:
                    var2 = var3.then;
                    var1 = function(arg1) {
                        var5 = _closure3_slot0;
                        var4 = var5._applyMessagesForLocale;
                        var6 = _closure3_slot2;
                        var1 = undefined;
                        var3 = arg1;
                        var3 = var6.bind(var1)(var3);
                        var2 = _closure3_slot1;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 46:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var1;
            var1 = new Array(12);
            var1[0] = var5;
            var5 = {};
            var7 = 'setLocale';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = arg1;
                    var5 = this;
                    var1 = var5._chosenLocale;
                    if(!(var1 !== var2)) { _fun0012_ip = 9; continue _fun0012 }
case 47:
                    var5['_requestedLocale'] = var2;
                    var4 = var5._chosenLocale;
                    var5['_chosenLocale'] = var2;
                    var1 = var5._loadMessagesForLocale;
                    var1 = var1.bind(var5)(var2);
                    var5['loadPromise'] = var1;
                    var3 = var5.emit;
                    var2 = var5._chosenLocale;
                    var1 = 'locale';
                    var1 = var3.bind(var5)(var1, var2, var4);
case 9:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[1] = var5;
            var5 = {};
            var7 = 'setUpdateRules';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 37;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setUpdateRules;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5['value'] = var7;
            var1[2] = var5;
            var5 = {};
            var7 = 'getLanguages';
            var5['key'] = var7;
            var7 = function value() {
                var1 = this;
                var1 = var1._languages;
                return var1;
            };
            var5['value'] = var7;
            var1[3] = var5;
            var5 = {};
            var7 = 'getAvailableLocales';
            var5['key'] = var7;
            var7 = function value() {
                var2 = this;
                var _closure3_slot0 = var2;
                var4 = var2._languages;
                var3 = var4.filter;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.enabled;
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.map;
                var2 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.code;
                        var2 = var1.name;
                        var1 = {};
                        var1['value'] = var4;
                        var1['name'] = var2;
                        var3 = _closure3_slot0;
                        var3 = var3.Messages;
                        var3 = var3[var4];
                        var4 = null;
                        if(!(var4 != var3)) { _fun0013_ip = 45; continue _fun0013 }
case 48:
                        var2 = var3;
case 45:
                        var1['localizedName'] = var2;
                        return var1;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.sort;
                var1 = function(arg1, arg2) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.name;
                        var1 = arg2;
                        var2 = var1.name;
                        var1 = var3.toLowerCase;
                        var3 = var1.bind(var3)();
                        var1 = var2.toLowerCase;
                        var2 = var1.bind(var2)();
                        var4 = var3 < var2;
                        var1 = -1;
                        if(var4) { _fun0014_ip = 49; continue _fun0014 }
case 45:
                        var3 = var3 > var2;
                        var2 = 0;
                        if(!var3) { _fun0014_ip = 50; continue _fun0014 }
case 51:
                        var2 = 1;
case 50:
                        var1 = var2;
case 49:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['value'] = var7;
            var1[4] = var5;
            var5 = {};
            var7 = 'getLocale';
            var5['key'] = var7;
            var7 = function value() {
                var1 = this;
                var1 = var1._chosenLocale;
                return var1;
            };
            var5['value'] = var7;
            var1[5] = var5;
            var5 = {};
            var7 = 'getLocaleInfo';
            var5['key'] = var7;
            var7 = function value() {
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2._languages;
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.code;
                    var1 = _closure3_slot0;
                    var1 = var1._chosenLocale;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['value'] = var7;
            var1[6] = var5;
            var5 = {};
            var7 = 'getDefaultLocale';
            var5['key'] = var7;
            var7 = function value() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = _closure1_slot12;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    var6 = null;
                    if(!(var6 == var1)) { _fun0015_ip = 52; continue _fun0015 }
case 53:
                    var1 = _closure1_slot7;
case 52:
                    var2 = this;
                    var7 = var2._languages;
                    var3 = var7.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.enabled;
                        return var1;
                    };
                    var7 = var3.bind(var7)(var2);
                    var3 = var7.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.code;
                        return var1;
                    };
                    var8 = var3.bind(var7)(var2);
                    var2 = var8.includes;
                    var2 = var2.bind(var8)(var1);
                    if(var2) { _fun0015_ip = 54; continue _fun0015 }
case 55:
                    var3 = var1.split;
                    var2 = '-';
                    var7 = var3.bind(var1)(var2);
                    var _closure3_slot0 = var7;
                    var9 = var8.includes;
                    var3 = 0;
                    var2 = var7[var3];
                    var2 = var9.bind(var8)(var2);
                    var3 = var7[var3];
                    if(var2) { _fun0015_ip = 56; continue _fun0015 }
case 57:
                    var2 = 'zh';
                    if(!(var2 === var3)) { _fun0015_ip = 58; continue _fun0015 }
case 59:
                    var9 = var7.length;
                    var2 = 1;
                    if(!(var9 > var2)) { _fun0015_ip = 58; continue _fun0015 }
case 60:
                    var7 = var7[var2];
                    var2 = 'Hant';
                    if(!(var2 !== var7)) { _fun0015_ip = 61; continue _fun0015 }
case 58:
                    var7 = var8.find;
                    var2 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.split;
                        var1 = '-';
                        var1 = var2.bind(var3)(var1);
                        var3 = 0;
                        var2 = var1[var3];
                        var1 = _closure3_slot0;
                        var1 = var1[var3];
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var7.bind(var8)(var2);
                    if(!(var6 == var2)) { _fun0015_ip = 62; continue _fun0015 }
case 63:
                    var2 = _closure1_slot7;
case 62:
                    _fun0015_ip = 64; continue _fun0015;
case 61:
                    var7 = var8.find;
                    var4 = function(arg1) {
                        var2 = 'zh-TW';
                        var1 = arg1;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var4 = var7.bind(var8)(var4);
                    if(!(var6 == var4)) { _fun0015_ip = 65; continue _fun0015 }
case 66:
                    var4 = _closure1_slot7;
case 65:
                    var2 = var4;
case 64:
                    _fun0015_ip = 67; continue _fun0015;
case 56:
                    var2 = var3;
case 67:
                    return var2;
case 54:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[7] = var5;
            var5 = {};
            var7 = '_loadMessagesForLocale';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var6 = arg1;
                    var5 = this;
                    var _closure3_slot0 = var5;
                    var _closure3_slot1 = var6;
                    var1 = var5._fetchMessages;
                    var4 = var1.bind(var5)(var6);
                    var1 = global;
                    var3 = var1.Promise;
                    var3 = var4 instanceof var3;
                    if(var3) { _fun0016_ip = 10; continue _fun0016 }
case 68:
                    var3 = var5._applyMessagesForLocale;
                    var3 = var3.bind(var5)(var4, var6);
                    var3 = var1.Promise;
                    var1 = var3.resolve;
                    var1 = var1.bind(var3)();
                    _fun0016_ip = 69; continue _fun0016;
case 10:
                    var3 = var4.then;
                    var2 = function(arg1) {
                        var4 = _closure3_slot0;
                        var3 = var4._applyMessagesForLocale;
                        var2 = _closure3_slot1;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 69:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[8] = var5;
            var5 = {};
            var7 = '_applyMessagesForLocale';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var6 = arg2;
                    var7 = arguments[2];
                    var3 = this;
                    var1 = undefined;
                    if(!(var7 === var1)) { _fun0017_ip = 70; continue _fun0017 }
case 71:
                    var4 = var3._findMessages;
                    var2 = _closure1_slot7;
                    var7 = var4.bind(var3)(var2);
case 70:
                    var2 = var3._requestedLocale;
                    if(!(var2 === var6)) { _fun0017_ip = 72; continue _fun0017 }
case 73:
                    var5 = var3._provider;
                    var4 = var5.refresh;
                    var2 = {};
                    var8 = arg1;
                    var2['messages'] = var8;
                    var2['defaultMessages'] = var7;
                    var2['locale'] = var6;
                    var2 = var4.bind(var5)(var2);
                    var2 = var3.resolveLanguageLoaded;
                    var2 = var2.bind(var3)();
case 72:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[9] = var5;
            var5 = {};
            var7 = '_findMessages';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = this;
                    var2 = var3._fetchMessages;
                    var1 = arg1;
                    var2 = var2.bind(var3)(var1);
                    var1 = global;
                    var3 = var1.Promise;
                    var3 = var2 instanceof var3;
                    if(var3) { _fun0018_ip = 74; continue _fun0018 }
case 75:
                    return var2;
case 74:
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var4 = 'Messages are still loading.';
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var5['value'] = var7;
            var1[10] = var5;
            var5 = {};
            var7 = '_fetchMessages';
            var5['key'] = var7;
            var6 = function value(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var8 = arg1;
                    var6 = this;
                    var _closure3_slot0 = var6;
                    var3 = var8;
                    var _closure3_slot1 = var8;
                    var2 = undefined;
                    var1 = undefined;
                    var4 = undefined;
                    var5 = _closure1_slot7;
                    if(!(var8 !== var5)) { _fun0019_ip = 73; continue _fun0019 }
case 33:
                    var5 = function() {
                        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                            var3 = _closure3_slot1;
                            var1 = var3.indexOf;
                            var6 = '-';
                            var3 = var1.bind(var3)(var6);
                            var1 = -1;
                            if(!(var1 !== var3)) { _fun0020_ip = 76; continue _fun0020 }
case 75:
                            var4 = _closure3_slot0;
                            var3 = var4._fetchMessages;
                            var5 = _closure3_slot1;
                            var1 = var5.split;
                            var5 = var1.bind(var5)(var6);
                            var1 = 0;
                            var1 = var5[var1];
                            var1 = var3.bind(var4)(var1);
                            _fun0020_ip = 77; continue _fun0020;
case 76:
                            var4 = _closure3_slot0;
                            var3 = var4._fetchMessages;
                            var2 = _closure1_slot7;
                            var1 = var3.bind(var4)(var2);
case 77:
                            return var1;
                        }
                    };
                    _fun0019_ip = 26; continue _fun0019;
case 73:
                    var5 = function() {
                        var1 = global;
                        var3 = var1.Error;
                        var4 = _closure1_slot7;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = 'Error Loading ';
                        var5 = var2.bind(var1)(var4);
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {constructor: {value: var3}});
                        var6 = var2;
                        var1 = new var6[var3](var5, var4);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    };
case 26:
                    var1 = var5;
case 2: // try_start_0
                    var5 = var6._getMessages;
                    var5 = var5.bind(var6)(var3);
                    var4 = var5;
                    var3 = global;
                    var3 = var3.Promise;
                    var3 = var5 instanceof var3;
                    var6 = var4;
                    if(var3) { _fun0019_ip = 78; continue _fun0019 }
case 79:
                    var3 = var6;
                    _fun0019_ip = 80; continue _fun0019;
case 78:
                    var5 = var6.catch;
                    var4 = var1;
                    var3 = var5.bind(var6)(var4);
case 80: // try_end0
                    return var3;
case 81: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var1 = var1.bind(var2)();
                    return var1;
                }
            };
            var5['value'] = var6;
            var1[11] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var2 = var2.bind(var1)(var5);
        var5 = 40;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = '../discord_common/js/packages/i18n/i18n.tsx';
        var5 = var6.bind(var7)(var5);
        var3['getSystemLocale'] = var4;
        var3['I18N'] = var2;
        return var1;
    }
})();
// app/intl/IntlLoaderStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function _setAppLocale() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var _closure4_slot0 = var6;
                    var3 = undefined;
                    var _closure4_slot1 = var3;
                    var7 = _closure1_slot4;
                    var5 = var7.getState;
                    var5 = var5.bind(var7)();
                    _closure4_slot1 = var5;
                    var7 = var5.setLoadingStarted;
                    var7 = var7.bind(var5)(var6);
                    var8 = new Array(0);
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var9 = 3;
                    var9 = var10[var9];
                    var9 = var7.bind(var3)(var9);
                    var11 = var9.intl;
                    var9 = var11.setLocale;
                    var9 = var9.bind(var11)(var6);
                    var9 = var8.push;
                    var9 = var9.bind(var8)();
                    var9 = var8.push;
                    var11 = _closure1_slot3;
                    var4 = function* () {
                        var1 = function* anon_0_() {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 4;
                                var2 = var4[var2];
                                var4 = undefined;
                                var5 = var5.bind(var4)(var2);
                                var2 = var5.preloadAllIntlMessageFiles;
                                var2 = var2.bind(var5)();
                                SaveGenerator(address=46);
case 6:
                                return var2;
case 7:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 5;
                                var3 = var6[var3];
                                var6 = var5.bind(var4)(var3);
                                var5 = var6.loadAllMessagesInLocale;
                                var3 = _closure4_slot0;
                                var3 = var5.bind(var6)(var3);
                                SaveGenerator(address=94);
case 10:
                                return var3;
case 11:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                                if(var5) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                                return var4;
case 12:
                                return var3;
case 8:
                                return var2;
case 4:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var11.bind(var3)(var4);
                    var4 = var4.bind(var3)();
                    var4 = var9.bind(var8)(var4);
                    var9 = var8.push;
                    var4 = function loadDateFnsLocale() {
                        var1 = undefined;
                        var4 = _closure1_slot6;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var4 = var4.bind(var3)(var6);
                    var4 = var9.bind(var8)(var4);
                    var9 = var8.push;
                    var4 = function setMomentLocale() {
                        var1 = undefined;
                        var4 = _closure1_slot7;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var4 = var4.bind(var3)(var6);
                    var4 = var9.bind(var8)(var4);
                    var9 = var8.push;
                    var4 = 9;
                    var4 = var10[var4];
                    var4 = var7.bind(var3)(var4);
                    var4 = var4.default;
                    var7 = var4.setTags;
                    var4 = {};
                    var4['locale'] = var6;
                    var4 = var7.bind(var3)(var4);
                    var4 = global;
                    var10 = var4.Promise;
                    var7 = var10.resolve;
                    var7 = var7.bind(var10)();
                    var7 = var9.bind(var8)(var7);
                    var7 = var4.Promise;
                    var4 = var7.all;
                    var7 = var4.bind(var7)(var8);
                    var4 = var7.catch;
                    var2 = function(arg1) {
                        var4 = _closure4_slot1;
                        var3 = var4.setLoadingFailed;
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=274);
case 14:
                    return var2;
case 15:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var4 = var5.setLoadingSucceeded;
                    var4 = var4.bind(var5)(var6);
                    return var3;
case 16:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = function _loadDateFnsLocale() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var3 = _closure1_slot4;
                    var2 = var3.getState;
                    var5 = var2.bind(var3)();
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var6.bind(var3)(var2);
                    var6 = var2.dateFnsLocales;
                    var2 = arg1;
                    var2 = var6[var2];
                    var6 = null;
                    if(!(var6 == var2)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var6 = var5.setLocaleData;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 2;
                    var4 = var8[var4];
                    var4 = var7.bind(var3)(var4);
                    var4 = var6.bind(var5)(var4);
                    _fun0003_ip = 22; continue _fun0003;
case 20:
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=109);
case 23:
                    return var2;
case 4:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var4 = var5.setLocaleData;
                    var4 = var4.bind(var5)(var2);
case 22:
                    return var3;
case 24:
                    return var2;
case 18:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function _setMomentLocale() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.momentLocales;
                    var2 = var2[var5];
                    var6 = null;
                    if(!(var6 != var2)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=62);
case 30:
                    return var2;
case 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 32; continue _fun0004 }
case 28:
                    var6 = new Array(0);
                    var7 = 'nb';
                    var8 = 'no';
                    if(!(var8 !== var5)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var7 = var5;
case 33:
                    var5 = var7.split;
                    var9 = '-';
                    var8 = var5.bind(var7)(var9);
                    var5 = var8.length;
                    var7 = 0;
                    if(!(var5 > var7)) { _fun0004_ip = 35; continue _fun0004 }
case 25:
                    var10 = var6.push;
                    var5 = var8.join;
                    var5 = var5.bind(var8)(var9);
                    var5 = var10.bind(var6)(var5);
                    var5 = var8.pop;
                    var5 = var5.bind(var8)();
                    var5 = var8.length;
                    if(var5 > var7) { _fun0004_ip = 25; continue _fun0004 }
case 35:
                    var7 = var6.push;
                    var5 = 'en-US';
                    var5 = var7.bind(var6)(var5);
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 8;
                    var4 = var7[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.locale;
                    var4 = var4.bind(var5)(var6);
                    return var3;
case 32:
                    return var2;
case 26:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createWithEqualityFn;
    var4 = function(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = {};
        var3 = false;
        var1['isLoading'] = var3;
        var5 = undefined;
        var1['inProgressLocale'] = var5;
        var1['error'] = var5;
        var4 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 2;
        var3 = var6[var3];
        var3 = var4.bind(var5)(var3);
        var1['localeData'] = var3;
        var3 = function setLoadingStarted(arg1) {
            var3 = _closure2_slot0;
            var2 = {};
            var1 = true;
            var2['isLoading'] = var1;
            var1 = arg1;
            var2['inProgressLocale'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1['setLoadingStarted'] = var3;
        var3 = function setLoadingSucceeded(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var4 = var3.inProgressLocale;
                var3 = arg1;
                if(!(var4 === var3)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                var3 = _closure2_slot0;
                var2 = {};
                var4 = false;
                var2['isLoading'] = var4;
                var2['inProgressLocale'] = var1;
                var2['error'] = var1;
                var2 = var3.bind(var1)(var2);
case 36:
                return var1;
            }
        };
        var1['setLoadingSucceeded'] = var3;
        var3 = function setLoadingFailed(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var4 = var3.inProgressLocale;
                var3 = arg2;
                if(!(var4 === var3)) { _fun0006_ip = 38; continue _fun0006 }
case 37:
                var3 = _closure2_slot0;
                var2 = {};
                var4 = false;
                var2['isLoading'] = var4;
                var2['inProgressLocale'] = var1;
                var4 = arg1;
                var2['error'] = var4;
                var2 = var3.bind(var1)(var2);
case 38:
                return var1;
            }
        };
        var1['setLoadingFailed'] = var3;
        var2 = function setLocaleData(arg1) {
            var3 = _closure2_slot0;
            var2 = {};
            var1 = arg1;
            var2['localeData'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['setLocaleData'] = var2;
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'intl/IntlLoaderStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useIntlLoaderStore'] = var4;
    var4 = function subscribeToIntlLoadingSuccess(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot4;
        var2 = var3.subscribe;
        var1 = function(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var1 = arg2;
                var2 = var1.inProgressLocale;
                var4 = null;
                var2 = var4 != var2;
                if(!var2) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                var5 = var3.inProgressLocale;
                var2 = var4 == var5;
case 39:
                if(!var2) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                var3 = var3.error;
                var2 = var4 == var3;
case 41:
                if(!var2) { _fun0007_ip = 43; continue _fun0007 }
case 7:
                var3 = _closure2_slot0;
                var2 = var1.inProgressLocale;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 43:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['subscribeToIntlLoadingSuccess'] = var4;
    var4 = function setAppLocale() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['setAppLocale'] = var4;
    var2 = function useLocaleData() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = _closure1_slot4;
            var4 = undefined;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.localeData;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 == var1)) { _fun0008_ip = 44; continue _fun0008 }
case 45:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var1 = var3.bind(var4)(var2);
case 44:
            return var1;
        }
    };
    var3['useLocaleData'] = var2;
    return var1;
})();
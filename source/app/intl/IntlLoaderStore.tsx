// app/intl/IntlLoaderStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function _setAppLocale() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 297; continue _fun0001 }
 15:
                    var _closure4_slot0 = var6;
                    var3 = undefined;
                    var _closure4_slot1 = var3;
                    var7 = _closure1_slot3;
                    var5 = var7.getState;
                    var5 = var5.bind(var7)();
                    _closure4_slot1 = var5;
                    var7 = var5.setLoadingStarted;
                    var7 = var7.bind(var5)(var6);
                    var8 = new Array(0);
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var9 = 2;
                    var9 = var10[var9];
                    var9 = var7.bind(var3)(var9);
                    var11 = var9.intl;
                    var9 = var11.setLocale;
                    var9 = var9.bind(var11)(var6);
                    var9 = var8.push;
                    var9 = var9.bind(var8)();
                    var9 = var8.push;
                    var11 = _closure1_slot2;
                    var4 = function* () {
                        var1 = function* anon_0_() {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0002_ip = 109; continue _fun0002 }
 7:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var2 = 3;
                                var2 = var4[var2];
                                var4 = undefined;
                                var5 = var5.bind(var4)(var2);
                                var2 = var5.preloadAllIntlMessageFiles;
                                var2 = var2.bind(var5)();
                                SaveGenerator(address=46);
 44:
                                return var2;
 46:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0002_ip = 106; continue _fun0002 }
 52:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var3 = 4;
                                var3 = var6[var3];
                                var6 = var5.bind(var4)(var3);
                                var5 = var6.loadAllMessagesInLocale;
                                var3 = _closure4_slot0;
                                var3 = var5.bind(var6)(var3);
                                SaveGenerator(address=94);
 92:
                                return var3;
 94:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                                if(var5) { _fun0002_ip = 103; continue _fun0002 }
 100:
                                return var4;
 103:
                                return var3;
 106:
                                return var2;
 109:
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
                        var4 = _closure1_slot5;
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
                    var4 = 8;
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
 272:
                    return var2;
 274:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 294; continue _fun0001 }
 280:
                    var4 = var5.setLoadingSucceeded;
                    var4 = var4.bind(var5)(var6);
                    return var3;
 294:
                    return var2;
 297:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot4 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = function _loadDateFnsLocale() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 76; continue _fun0003 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 5;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var4 = var2.dateFnsLocales;
                    var2 = arg1;
                    var2 = var4[var2];
                    var4 = null;
                    if(!(var4 != var2)) { _fun0003_ip = 70; continue _fun0003 }
 51:
                    var2 = var2.bind(var3)();
                    var2 = var2.default;
                    SaveGenerator(address=64);
 62:
                    return var2;
 64:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 73; continue _fun0003 }
 70:
                    return var3;
 73:
                    return var2;
 76:
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
    var1 = function _setMomentLocale() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 205; continue _fun0004 }
 13:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.momentLocales;
                    var2 = var2[var5];
                    var6 = null;
                    if(!(var6 != var2)) { _fun0004_ip = 71; continue _fun0004 }
 54:
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=62);
 60:
                    return var2;
 62:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 202; continue _fun0004 }
 71:
                    var6 = new Array(0);
                    var7 = 'nb';
                    var8 = 'no';
                    if(!(var8 !== var5)) { _fun0004_ip = 90; continue _fun0004 }
 87:
                    var7 = var5;
 90:
                    var5 = var7.split;
                    var9 = '-';
                    var8 = var5.bind(var7)(var9);
                    var5 = var8.length;
                    var7 = 0;
                    if(!(var5 > var7)) { _fun0004_ip = 154; continue _fun0004 }
 115:
                    var10 = var6.push;
                    var5 = var8.join;
                    var5 = var5.bind(var8)(var9);
                    var5 = var10.bind(var6)(var5);
                    var5 = var8.pop;
                    var5 = var5.bind(var8)();
                    var5 = var8.length;
                    if(var5 > var7) { _fun0004_ip = 115; continue _fun0004 }
 154:
                    var7 = var6.push;
                    var5 = 'en-US';
                    var5 = var7.bind(var6)(var5);
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var4 = 7;
                    var4 = var7[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.locale;
                    var4 = var4.bind(var5)(var6);
                    return var3;
 202:
                    return var2;
 205:
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
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
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
        var3 = undefined;
        var1['inProgressLocale'] = var3;
        var1['error'] = var3;
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
 0:
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var4 = var3.inProgressLocale;
                var3 = arg1;
                if(!(var4 === var3)) { _fun0005_ip = 53; continue _fun0005 }
 26:
                var3 = _closure2_slot0;
                var2 = {};
                var4 = false;
                var2['isLoading'] = var4;
                var2['inProgressLocale'] = var1;
                var2['error'] = var1;
                var2 = var3.bind(var1)(var2);
 53:
                return var1;
            }
        };
        var1['setLoadingSucceeded'] = var3;
        var2 = function setLoadingFailed(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var4 = var3.inProgressLocale;
                var3 = arg2;
                if(!(var4 === var3)) { _fun0006_ip = 56; continue _fun0006 }
 26:
                var3 = _closure2_slot0;
                var2 = {};
                var4 = false;
                var2['isLoading'] = var4;
                var2['inProgressLocale'] = var1;
                var4 = arg1;
                var2['error'] = var4;
                var2 = var3.bind(var1)(var2);
 56:
                return var1;
            }
        };
        var1['setLoadingFailed'] = var2;
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'intl/IntlLoaderStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useIntlLoaderStore'] = var4;
    var4 = function subscribeToIntlLoadingSuccess(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = var3.subscribe;
        var1 = function(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = arg1;
                var1 = arg2;
                var2 = var1.inProgressLocale;
                var4 = null;
                var2 = var4 != var2;
                if(!var2) { _fun0007_ip = 31; continue _fun0007 }
 21:
                var5 = var3.inProgressLocale;
                var2 = var4 == var5;
 31:
                if(!var2) { _fun0007_ip = 43; continue _fun0007 }
 34:
                var3 = var3.error;
                var2 = var4 == var3;
 43:
                if(!var2) { _fun0007_ip = 66; continue _fun0007 }
 46:
                var3 = _closure2_slot0;
                var2 = var1.inProgressLocale;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
 66:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['subscribeToIntlLoadingSuccess'] = var4;
    var2 = function setAppLocale() {
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['setAppLocale'] = var2;
    return var1;
})();
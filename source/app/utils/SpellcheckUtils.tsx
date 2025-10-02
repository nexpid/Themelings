// app/utils/SpellcheckUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var8 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var8;
        var _closure1_slot2 = var7;
        var1 = function isElectronBuiltInSpellcheckerSupported() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var6 = 1;
                var1 = var1[var6];
                var5 = undefined;
                var1 = var2.bind(var5)(var1);
                var2 = null;
                var4 = var2 == var1;
                var1 = undefined;
                if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var1 = var3.spellCheck;
case 2:
                var1 = var2 != var1;
                return var1;
            }
        };
        var _closure1_slot5 = var1;
        var4 = function isSupported() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var1 = var3[var1];
                var3 = undefined;
                var4 = var4.bind(var3)(var1);
                var1 = var4.isDesktop;
                var1 = var1.bind(var4)();
                if(!var1) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                var2 = _closure1_slot5;
                var1 = var2.bind(var3)();
case 4:
                return var1;
            }
        };
        var1 = function _setEnabled() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                        var2 = _closure1_slot4;
                        SaveGenerator(address=18);
case 8:
                        return var2;
case 9:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                        var3 = null;
                        if(!(var3 != var2)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                        var3 = arg1;
                        var2['enabled'] = var3;
case 12:
                        var3 = undefined;
                        return var3;
case 10:
                        return var2;
case 6:
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
        var1 = function _setLearnedWords() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 14; continue _fun0005 }
case 7:
                        var2 = _closure1_slot4;
                        SaveGenerator(address=18);
case 8:
                        return var2;
case 9:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0005_ip = 15; continue _fun0005 }
case 11:
                        var3 = null;
                        if(!(var3 != var2)) { _fun0005_ip = 10; continue _fun0005 }
case 13:
                        var4 = var2.setLearnedWords;
                        var3 = arg1;
                        var3 = var4.bind(var2)(var3);
case 10:
                        var3 = undefined;
                        return var3;
case 15:
                        return var2;
case 14:
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
        var1 = function _isMisspelled() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        StartGenerator();
                        var7 = arguments[1];
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                        var2 = undefined;
                        if(!(var7 === var2)) { _fun0006_ip = 9; continue _fun0006 }
case 8:
                        var7 = false;
case 9:
                        SaveGenerator(address=22);
case 18:
                        return var2;
case 19:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                        var3 = _closure1_slot4;
                        SaveGenerator(address=39);
case 22:
                        return var3;
case 12:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                        var4 = null;
                        var4 = var4 != var3;
                        if(!var4) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                        var6 = var3.isMisspelled;
                        var5 = arg1;
                        var4 = var6.bind(var3)(var5, var7);
case 25:
                        return var4;
case 23:
                        return var3;
case 20:
                        return var2;
case 16:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot8 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot8 = var1;
        var1 = function _getCorrections() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        StartGenerator();
                        var6 = arguments[1];
                        var7 = arguments[2];
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                        var2 = undefined;
                        if(!(var6 === var2)) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                        var6 = false;
case 29:
                        if(!(var7 === var2)) { _fun0007_ip = 21; continue _fun0007 }
case 31:
                        var7 = 5;
case 21:
                        SaveGenerator(address=32);
case 13:
                        return var2;
case 32:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0007_ip = 33; continue _fun0007 }
case 5:
                        var3 = _closure1_slot4;
                        SaveGenerator(address=49);
case 6:
                        return var3;
case 15:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                        var4 = null;
                        if(!(var4 != var3)) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                        var5 = var3.getCorrectionsForMisspelling;
                        var4 = arg1;
                        var6 = var5.bind(var3)(var4, var6);
                        var5 = var6.slice;
                        var4 = 0;
                        var4 = var5.bind(var6)(var4, var7);
                        _fun0007_ip = 38; continue _fun0007;
case 36:
                        var4 = new Array(0);
case 38:
                        return var4;
case 34:
                        return var3;
case 33:
                        return var2;
case 27:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot9 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot9 = var1;
        var1 = function _replaceWithCorrection() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0008_ip = 14; continue _fun0008 }
case 7:
                        var2 = _closure1_slot4;
                        SaveGenerator(address=18);
case 8:
                        return var2;
case 9:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0008_ip = 15; continue _fun0008 }
case 11:
                        var3 = null;
                        if(!(var3 != var2)) { _fun0008_ip = 10; continue _fun0008 }
case 13:
                        var4 = var2.replaceMisspelling;
                        var3 = arg1;
                        var3 = var4.bind(var2)(var3);
case 10:
                        var3 = undefined;
                        return var3;
case 15:
                        return var2;
case 14:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot10 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot10 = var1;
        var1 = function _setAppLocale() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0009_ip = 14; continue _fun0009 }
case 7:
                        var2 = _closure1_slot4;
                        SaveGenerator(address=18);
case 8:
                        return var2;
case 9:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0009_ip = 15; continue _fun0009 }
case 11:
                        var3 = null;
                        if(!(var3 != var2)) { _fun0009_ip = 10; continue _fun0009 }
case 13:
                        var4 = var2.setAppLocale;
                        var3 = arg1;
                        var3 = var4.bind(var2)(var3);
case 10:
                        var3 = undefined;
                        return var3;
case 15:
                        return var2;
case 14:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot11 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot11 = var1;
        var1 = global;
        var10 = var1.Object;
        var9 = var10.defineProperty;
        var5 = {};
        var1 = true;
        var5['value'] = var1;
        var1 = '__esModule';
        var1 = var9.bind(var10)(var3, var1, var5);
        var1 = 0;
        var5 = var7[var1];
        var1 = undefined;
        var5 = var8.bind(var1)(var5);
        var _closure1_slot3 = var5;
        var8 = var4.bind(var1)();
        var5 = null;
        if(!var8) { _fun0001_ip = 39; continue _fun0001 }
case 40:
        var8 = 3;
        var8 = var7[var8];
        var9 = var6.bind(var1)(var8);
        var8 = var9.install;
        var5 = var8.bind(var9)();
case 39:
        var _closure1_slot4 = var5;
        var5 = 4;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'utils/SpellcheckUtils.tsx';
        var5 = var6.bind(var7)(var5);
        var3['isSupported'] = var4;
        var4 = function setEnabled() {
            var1 = undefined;
            var4 = _closure1_slot6;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['setEnabled'] = var4;
        var4 = function setLearnedWords() {
            var1 = undefined;
            var4 = _closure1_slot7;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['setLearnedWords'] = var4;
        var4 = function isMisspelled() {
            var1 = undefined;
            var4 = _closure1_slot8;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['isMisspelled'] = var4;
        var4 = function getCorrections() {
            var1 = undefined;
            var4 = _closure1_slot9;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['getCorrections'] = var4;
        var4 = function replaceWithCorrection() {
            var1 = undefined;
            var4 = _closure1_slot10;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['replaceWithCorrection'] = var4;
        var4 = function setAppLocale() {
            var1 = undefined;
            var4 = _closure1_slot11;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['setAppLocale'] = var4;
        var2 = function addResultListener(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = _closure1_slot5;
                var4 = undefined;
                var3 = var3.bind(var4)();
                if(var3) { _fun0010_ip = 31; continue _fun0010 }
case 9:
                var3 = function() {
                    var1 = undefined;
                    return var1;
                };
                return var3;
case 31:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 1;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var5 = var1.spellCheck;
                var4 = var5.on;
                var3 = 'spellcheck-result';
                var1 = arg1;
                var1 = var4.bind(var5)(var3, var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0010_ip = 41; continue _fun0010 }
case 16:
                var1 = function() {
                    var1 = undefined;
                    return var1;
                };
case 41:
                return var1;
            }
        };
        var3['addResultListener'] = var2;
        return var1;
    }
})();
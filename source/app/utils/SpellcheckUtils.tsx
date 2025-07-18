// app/utils/SpellcheckUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var6 = native2;
        var8 = native3;
        var3 = native6;
        var7 = native7;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var8;
        var _closure1_slot2 = var7;
        var1 = function isElectronBuiltInSpellcheckerSupported() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var6 = 1;
                var1 = var1[var6];
                var5 = undefined;
                var1 = var2.bind(var5)(var1);
                var2 = null;
                var4 = var2 == var1;
                var1 = undefined;
                if(var4) { _fun0002_ip = 59; continue _fun0002 }
 36:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var1 = var3.spellCheck;
 59:
                var1 = var2 != var1;
                return var1;
            }
        };
        var _closure1_slot5 = var1;
        var4 = function isSupported() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var1 = var3[var1];
                var3 = undefined;
                var4 = var4.bind(var3)(var1);
                var1 = var4.isDesktop;
                var1 = var1.bind(var4)();
                if(!var1) { _fun0003_ip = 46; continue _fun0003 }
 38:
                var2 = _closure1_slot5;
                var1 = var2.bind(var3)();
 46:
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
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 47; continue _fun0004 }
 7:
                        var2 = _closure1_slot4;
                        SaveGenerator(address=18);
 16:
                        return var2;
 18:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0004_ip = 44; continue _fun0004 }
 24:
                        var3 = null;
                        if(!(var3 != var2)) { _fun0004_ip = 39; continue _fun0004 }
 30:
                        var3 = arg1;
                        var2['enabled'] = var3;
 39:
                        var3 = undefined;
                        return var3;
 44:
                        return var2;
 47:
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
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 52; continue _fun0005 }
 7:
                        var2 = _closure1_slot4;
                        SaveGenerator(address=18);
 16:
                        return var2;
 18:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0005_ip = 49; continue _fun0005 }
 24:
                        var3 = null;
                        if(!(var3 != var2)) { _fun0005_ip = 44; continue _fun0005 }
 30:
                        var4 = var2.setLearnedWords;
                        var3 = arg1;
                        var3 = var4.bind(var2)(var3);
 44:
                        var3 = undefined;
                        return var3;
 49:
                        return var2;
 52:
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
 0:
                        StartGenerator();
                        var7 = arguments[1];
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0006_ip = 78; continue _fun0006 }
 10:
                        var2 = undefined;
                        if(!(var7 === var2)) { _fun0006_ip = 18; continue _fun0006 }
 16:
                        var7 = false;
 18:
                        SaveGenerator(address=22);
 20:
                        return var2;
 22:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0006_ip = 75; continue _fun0006 }
 28:
                        var3 = _closure1_slot4;
                        SaveGenerator(address=39);
 37:
                        return var3;
 39:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0006_ip = 72; continue _fun0006 }
 45:
                        var4 = null;
                        var4 = var4 != var3;
                        if(!var4) { _fun0006_ip = 69; continue _fun0006 }
 54:
                        var6 = var3.isMisspelled;
                        var5 = arg1;
                        var4 = var6.bind(var3)(var5, var7);
 69:
                        return var4;
 72:
                        return var3;
 75:
                        return var2;
 78:
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
 0:
                        StartGenerator();
                        var6 = arguments[1];
                        var7 = arguments[2];
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0007_ip = 106; continue _fun0007 }
 13:
                        var2 = undefined;
                        if(!(var6 === var2)) { _fun0007_ip = 21; continue _fun0007 }
 19:
                        var6 = false;
 21:
                        if(!(var7 === var2)) { _fun0007_ip = 28; continue _fun0007 }
 25:
                        var7 = 5;
 28:
                        SaveGenerator(address=32);
 30:
                        return var2;
 32:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0007_ip = 103; continue _fun0007 }
 38:
                        var3 = _closure1_slot4;
                        SaveGenerator(address=49);
 47:
                        return var3;
 49:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0007_ip = 100; continue _fun0007 }
 55:
                        var4 = null;
                        if(!(var4 != var3)) { _fun0007_ip = 93; continue _fun0007 }
 61:
                        var5 = var3.getCorrectionsForMisspelling;
                        var4 = arg1;
                        var6 = var5.bind(var3)(var4, var6);
                        var5 = var6.slice;
                        var4 = 0;
                        var4 = var5.bind(var6)(var4, var7);
                        _fun0007_ip = 97; continue _fun0007;
 93:
                        var4 = new Array(0);
 97:
                        return var4;
 100:
                        return var3;
 103:
                        return var2;
 106:
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
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0008_ip = 52; continue _fun0008 }
 7:
                        var2 = _closure1_slot4;
                        SaveGenerator(address=18);
 16:
                        return var2;
 18:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0008_ip = 49; continue _fun0008 }
 24:
                        var3 = null;
                        if(!(var3 != var2)) { _fun0008_ip = 44; continue _fun0008 }
 30:
                        var4 = var2.replaceMisspelling;
                        var3 = arg1;
                        var3 = var4.bind(var2)(var3);
 44:
                        var3 = undefined;
                        return var3;
 49:
                        return var2;
 52:
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
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0009_ip = 52; continue _fun0009 }
 7:
                        var2 = _closure1_slot4;
                        SaveGenerator(address=18);
 16:
                        return var2;
 18:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0009_ip = 49; continue _fun0009 }
 24:
                        var3 = null;
                        if(!(var3 != var2)) { _fun0009_ip = 44; continue _fun0009 }
 30:
                        var4 = var2.setAppLocale;
                        var3 = arg1;
                        var3 = var4.bind(var2)(var3);
 44:
                        var3 = undefined;
                        return var3;
 49:
                        return var2;
 52:
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
        if(!var8) { _fun0001_ip = 174; continue _fun0001 }
 152:
        var8 = 3;
        var8 = var7[var8];
        var9 = var6.bind(var1)(var8);
        var8 = var9.install;
        var5 = var8.bind(var9)();
 174:
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
 0:
                var3 = _closure1_slot5;
                var4 = undefined;
                var3 = var3.bind(var4)();
                if(var3) { _fun0010_ip = 25; continue _fun0010 }
 18:
                var3 = function() {
                    var1 = undefined;
                    return var1;
                };
                return var3;
 25:
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
                if(!(var3 == var1)) { _fun0010_ip = 83; continue _fun0010 }
 78:
                var1 = function() {
                    var1 = undefined;
                    return var1;
                };
 83:
                return var1;
            }
        };
        var3['addResultListener'] = var2;
        return var1;
    }
})();
// app/modules/parent_tools/ParentalConsentWarningActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = function clearPendingRetry() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot8;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = global;
            var5 = var3.clearTimeout;
            var4 = _closure1_slot8;
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            _closure1_slot8 = var1;
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function fetchWarning() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 5;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.isParentalConsentWarningFetchEnabled;
            var4 = 'parental_consent_warning_manager';
            var4 = var5.bind(var6)(var4);
            if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = global;
            var5 = var4.Promise;
            var4 = var5.resolve;
            var4 = var4.bind(var5)();
            return var4;
case 4:
            var5 = _closure1_slot7;
            var4 = null;
            if(!(var4 == var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot9;
            var _closure2_slot0 = var4;
            var4 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var2 = undefined;
                        var7 = undefined;
case 10: // try_start_0 // try_start_1
                        var4 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 6;
                        var3 = var8[var3];
                        var3 = var4.bind(var2)(var3);
                        var8 = var3.HTTP;
                        var4 = var8.get;
                        var9 = true;
                        var3 = {'url': '/users/@me/parental-consent/warning', 'rejectWithError': true};
                        var3 = var4.bind(var8)(var3);
                        SaveGenerator(address=72);
case 11:
                        return var3;
case 12:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                        var7 = var3;
                        var10 = _closure2_slot0;
                        var8 = _closure1_slot9;
                        if(!(var10 === var8)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                        var8 = var7.body;
                        var10 = {};
                        var7 = var8.in_grace;
                        var7 = var9 === var7;
                        var10['inGrace'] = var7;
                        var9 = var8.days_remaining;
                        var11 = 'number';
                        var9 = typeof var9;
                        var7 = null;
                        if(!(var11 === var9)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                        var7 = var8.days_remaining;
case 17:
                        var10['daysRemaining'] = var7;
                        var7 = global;
                        var11 = var7.Array;
                        var9 = var11.isArray;
                        var7 = var8.surfaces;
                        var7 = var9.bind(var11)(var7);
                        if(var7) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                        var7 = new Array(0);
                        _fun0003_ip = 21; continue _fun0003;
case 19:
                        var7 = var8.surfaces;
case 21:
                        var10['surfaces'] = var7;
                        var8 = _closure1_slot6;
                        var7 = var8.succeed;
                        var7 = var7.bind(var8)();
                        var7 = _closure1_slot10;
                        var7 = var7.bind(var2)();
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var7 = 7;
                        var7 = var9[var7];
                        var9 = var8.bind(var2)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var11 = 'PARENTAL_CONSENT_WARNING_FETCH_SUCCESS';
                        var7['type'] = var11;
                        var7['warning'] = var10;
                        var7 = var8.bind(var9)(var7);
case 22: // try_end0
                        _fun0003_ip = 23; continue _fun0003;
case 15: // try_end1
                        var7 = _closure2_slot0;
                        var4 = _closure1_slot9;
                        if(!(var7 === var4)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                        var4 = null;
                        _closure1_slot7 = var4;
case 24:
                        return var2;
case 13:
                        var7 = _closure2_slot0;
                        var4 = _closure1_slot9;
                        if(!(var7 === var4)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                        var4 = null;
                        _closure1_slot7 = var4;
case 26:
                        return var3;
case 28: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=4);
                        var7 = _closure2_slot0;
                        var6 = _closure1_slot9;
                        if(!(var7 === var6)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                        var7 = _closure1_slot5;
                        var6 = var7.error;
                        var8 = var5;
                        var5 = 'Failed to fetch parental-consent warning';
                        var5 = var6.bind(var7)(var5, var8);
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 8;
                        var5 = var7[var5];
                        var7 = var6.bind(var2)(var5);
                        var6 = var7.captureException;
                        var5 = {};
                        var9 = {'source': 'parental_consent_warning', 'step': 'fetch_warning'};
                        var5['tags'] = var9;
                        var5 = var6.bind(var7)(var8, var5);
                        var5 = function scheduleRetry() {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var3 = _closure1_slot8;
                                var1 = null;
                                if(!(var1 == var3)) { _fun0004_ip = 31; continue _fun0004 }
case 3:
                                var1 = global;
                                var5 = var1.setTimeout;
                                var3 = _closure1_slot6;
                                var1 = var3.fail;
                                var4 = var1.bind(var3)();
                                var3 = undefined;
                                var1 = function() {
                                    var2 = null;
                                    _closure1_slot8 = var2;
                                    var2 = _closure1_slot12;
                                    var1 = undefined;
                                    var2 = var2.bind(var1)();
                                    return var1;
                                };
                                var1 = var5.bind(var3)(var1, var4);
                                _closure1_slot8 = var1;
case 31:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var5 = var5.bind(var2)();
case 23: // try_end2
                        var7 = _closure2_slot0;
                        var5 = _closure1_slot9;
                        if(!(var7 === var5)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                        var5 = null;
                        _closure1_slot7 = var5;
case 32:
                        return var2;
case 29:
                        var5 = _closure2_slot0;
                        var3 = _closure1_slot9;
                        if(!(var5 === var3)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                        var3 = null;
                        _closure1_slot7 = var3;
case 34:
                        return var2;
case 36: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var5 = _closure2_slot0;
                        var3 = _closure1_slot9;
                        if(!(var5 === var3)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                        var3 = null;
                        _closure1_slot7 = var3;
case 37:
                        throw var2;
case 8:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var2 = var2.bind(var3)();
            _closure1_slot7 = var2;
            return var2;
case 6:
            var1 = _closure1_slot7;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var4 = function maybeFetchWarning() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var4;
    var1 = function _maybeFetchWarning() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var3 = _closure1_slot7;
                    var5 = null;
                    var3 = var5 == var3;
                    if(!var3) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var4 = _closure1_slot8;
                    var3 = var5 == var4;
case 41:
                    if(!var3) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                    var5 = _closure1_slot4;
                    var4 = var5.shouldFetchToday;
                    var3 = var4.bind(var5)();
case 43:
                    if(!var3) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var3 = _closure1_slot11;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    SaveGenerator(address=65);
case 47:
                    return var2;
case 48:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 7; continue _fun0005 }
case 45:
                    var3 = undefined;
                    return var3;
case 7:
                    return var2;
case 39:
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
    var1 = function _forceFetchWarning() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 49; continue _fun0006 }
case 40:
                    var4 = _closure1_slot10;
                    var3 = undefined;
                    var4 = var4.bind(var3)();
                    var5 = _closure1_slot7;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var5 = _closure1_slot9;
                    var5 = var5 + 1;
                    _closure1_slot9 = var5;
                    _closure1_slot7 = var4;
case 50:
                    var2 = _closure1_slot11;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=57);
case 52:
                    return var2;
case 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 4; continue _fun0006 }
case 47:
                    return var3;
case 4:
                    return var2;
case 49:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var12 = true;
    var5['value'] = var12;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var5 = 0;
    var8 = var7[var5];
    var1 = undefined;
    var8 = var13.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var7[var8];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var10 = var8.Logger;
    var8 = var10.prototype;
    var9 = Object.create(var8, {constructor: {value: var10}});
    var16 = 'ParentalConsentWarning';
    var17 = var9;
    var8 = new var17[var10](var16, var15);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var7[var8];
    var11 = var13.bind(var1)(var8);
    var8 = 4;
    var9 = var7[var8];
    var9 = var13.bind(var1)(var9);
    var9 = var9.Millis;
    var10 = var9.SECOND;
    var9 = 5;
    var10 = var9 * var10;
    var8 = var7[var8];
    var8 = var13.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.MINUTE;
    var15 = var9 * var8;
    var9 = var11.prototype;
    var9 = Object.create(var9, {constructor: {value: var11}});
    var17 = var9;
    var16 = var10;
    var14 = true;
    var8 = new var17[var11](var16, var15, var14, var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot6 = var8;
    var8 = null;
    var _closure1_slot7 = var8;
    var _closure1_slot8 = var8;
    var _closure1_slot9 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/parent_tools/ParentalConsentWarningActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['maybeFetchWarning'] = var4;
    var4 = function forceFetchWarning() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['forceFetchWarning'] = var4;
    var2 = function resetFetchState() {
        var1 = _closure1_slot9;
        var1 = var1 + 1;
        _closure1_slot9 = var1;
        var3 = _closure1_slot10;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var3 = null;
        _closure1_slot7 = var3;
        var3 = _closure1_slot6;
        var2 = var3.succeed;
        var2 = var2.bind(var3)();
        return var1;
    };
    var3['resetFetchState'] = var2;
    return var1;
})();
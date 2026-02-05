// app/modules/age_assurance/native/ParentalConsentManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
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
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Platform;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot10 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function ParentalConsentManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
                var2 = _closure2_slot2;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot7;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot11;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var2.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = {};
                var3 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.onPostConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2['POST_CONNECTION_OPEN'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot2 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var7 = 'onPostConnectionOpen';
        var5['key'] = var7;
        var8 = _closure1_slot3;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var2 = var3[var2];
                    var3 = undefined;
                    var7 = var5.bind(var3)(var2);
                    var5 = var7.isParentalConsentCheckEnabled;
                    var2 = 'ParentalConsentManager';
                    var2 = var5.bind(var7)(var2);
                    if(!var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var7 = _closure1_slot9;
                    var5 = var7.getCurrentUser;
                    var7 = var5.bind(var7)();
                    var5 = null;
                    var2 = var5 != var7;
case 11:
                    if(!var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var9 = 9;
                    var5 = var5[var9];
                    var7 = var7.bind(var3)(var5);
                    var5 = var7.getIsRunningOnSimulator;
                    var7 = var5.bind(var7)();
                    var5 = false;
                    if(var7) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var8 = var8.bind(var3)(var7);
                    var7 = var8.getSystemVersion;
                    var9 = var7.bind(var8)();
                    var8 = var9.split;
                    var7 = '.';
                    var11 = var8.bind(var9)(var7);
                    var7 = global;
                    var10 = var7.parseInt;
                    var8 = 0;
                    var9 = var11[var8];
                    var8 = 10;
                    var9 = var10.bind(var3)(var9, var8);
                    var10 = var7.parseInt;
                    var7 = 1;
                    var11 = var11[var7];
                    var7 = null;
                    var12 = var7 != var11;
                    var7 = '0';
                    if(!var12) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var7 = var11;
case 17:
                    var10 = var10.bind(var3)(var7, var8);
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.isIOS;
                    var6 = var6.bind(var7)();
                    if(var6) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var6 = 35;
                    var6 = var9 >= var6;
                    _fun0003_ip = 21; continue _fun0003;
case 19:
                    var8 = 26;
                    var7 = var9 > var8;
                    if(var7) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var8 = var9 === var8;
                    if(!var8) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var9 = 2;
                    var8 = var10 >= var9;
case 24:
                    var7 = var8;
case 22:
                    var6 = var7;
case 21:
                    var5 = var6;
case 15:
                    var2 = var5;
case 13:
                    if(!var2) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var2 = var4.performAgeCheck;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=316);
case 28:
                    return var2;
case 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 30; continue _fun0003 }
case 26:
                    return var3;
case 30:
                    return var2;
case 9:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var8.bind(var3)(var1);
        var _closure2_slot1 = var1;
        var1 = function onPostConnectionOpen() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'performAgeCheck';
        var5['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var2 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    var11 = undefined;
case 33: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 12;
                    var6 = var8[var6];
                    var6 = var7.bind(var2)(var6);
                    var4 = var6.setAgeRangeThresholds;
                    var3 = var6.getIsConsideredOlderThan;
                    var6 = 10;
                    var6 = var8[var6];
                    var7 = var7.bind(var2)(var6);
                    var6 = var7.isIOS;
                    var6 = var6.bind(var7)();
                    if(!var6) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    var6 = var4;
                    var4 = [18];
                    var4 = var6.bind(var2)(var4);
case 34:
                    var4 = var3;
                    var3 = 18;
                    var3 = var4.bind(var2)(var3);
                    SaveGenerator(address=111);
case 36:
                    return var3;
case 37:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 38; continue _fun0004 }
case 8:
                    var11 = var3;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 13;
                    var4 = var7[var4];
                    var4 = var6.bind(var2)(var4);
                    var7 = var4.HTTP;
                    var6 = var7.post;
                    var4 = {'url': '/users/@me/parental-consent-status', 'body': null, 'rejectWithError': true};
                    var8 = {};
                    var9 = 'android';
                    var8['platform'] = var9;
                    var8['parental_consent'] = var3;
                    var4['body'] = var8;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=201);
case 39:
                    return var4;
case 40:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 25; continue _fun0004 }
case 41:
                    var6 = var4.body;
                    var10 = var6.should_block;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 14;
                    var6 = var8[var6];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.track;
                    var5 = _closure1_slot10;
                    var6 = var5.PARENTAL_CONSENT_CHECKED;
                    var5 = {};
                    var5['eligible'] = var11;
                    var5['should_block'] = var10;
                    var5['platform'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
case 42: // try_end0
                    _fun0004_ip = 43; continue _fun0004;
case 25:
                    return var4;
case 38:
                    return var3;
case 44: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 15;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.captureException;
                    var3 = {};
                    var7 = {'source': 'parental_consent_manager', 'step': 'perform_age_check'};
                    var3['tags'] = var7;
                    var3 = var4.bind(var5)(var6, var3);
case 43:
                    return var2;
case 31:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var6 = function performAgeCheck() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_assurance/native/ParentalConsentManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
// app/modules/pomelo/PomeloStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = {'taken': null, 'error': null, 'rateLimited': true};
    var2['error'] = var1;
    var _closure1_slot7 = var2;
    var2 = {'validations': null, 'currentUsernameInvalid': false, 'retryAfterTime': null};
    var7 = 5;
    var7 = var5[var7];
    var9 = var6.bind(var1)(var7);
    var7 = var9.prototype;
    var8 = Object.create(var7, {constructor: {value: var9}});
    var14 = {'max': 100, 'maxAge': 60000};
    var15 = var8;
    var7 = new var15[var9](var14, var13);
    var7 = var7 instanceof Object ? var7 : var8;
    var2['validations'] = var7;
    var9 = false;
    var7 = {};
    var8 = {'suggestion': null, 'fetched': false, 'usernameSuggestionLoading': false};
    var10 = {};
    var10['username'] = var1;
    var8['suggestion'] = var10;
    var7['migration'] = var8;
    var8 = {};
    var10 = {};
    var10['username'] = var1;
    var8['suggestion'] = var10;
    var8['source'] = var1;
    var8['fetched'] = var9;
    var7['registration'] = var8;
    var2['suggestions'] = var7;
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function PomeloStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'isRateLimited';
        var5['key'] = var1;
        var1 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = _closure1_slot8;
                var3 = var1.retryAfterTime;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0003_ip = 53; continue _fun0003 }
 22:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var2 = _closure1_slot8;
                var2 = var2.retryAfterTime;
                var1 = var3 < var2;
 53:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'validate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = this;
                var1 = _closure1_slot8;
                var5 = var1.validations;
                var3 = var5.get;
                var1 = arg1;
                var3 = var3.bind(var5)(var1);
                var1 = var4.isRateLimited;
                var1 = var1.bind(var4)();
                if(!var1) { _fun0004_ip = 57; continue _fun0004 }
 42:
                var1 = null;
                if(!(var1 != var3)) { _fun0004_ip = 92; continue _fun0004 }
 48:
                var1 = var3.rateLimited;
                if(var1) { _fun0004_ip = 92; continue _fun0004 }
 57:
                var1 = var4.isRateLimited;
                var1 = var1.bind(var4)();
                if(var1) { _fun0004_ip = 87; continue _fun0004 }
 70:
                var1 = null;
                if(!(var1 != var3)) { _fun0004_ip = 87; continue _fun0004 }
 76:
                var4 = var3.rateLimited;
                var1 = undefined;
                if(var4) { _fun0004_ip = 90; continue _fun0004 }
 87:
                var1 = var3;
 90:
                _fun0004_ip = 96; continue _fun0004;
 92:
                var1 = _closure1_slot7;
 96:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'registrationUsernameSuggestion';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            var1 = var1.suggestions;
            var1 = var1.registration;
            var1 = var1.suggestion;
            var1 = var1.username;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'usernameSuggestion';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            var1 = var1.suggestions;
            var1 = var1.migration;
            var1 = var1.suggestion;
            var1 = var1.username;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'usernameSuggestionLoading';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            var1 = var1.suggestions;
            var1 = var1.migration;
            var1 = var1.usernameSuggestionLoading;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isCurrentUsernameInvalid';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            var1 = var1.currentUsernameInvalid;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'wasRegistrationSuggestionFetched';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = _closure1_slot8;
                var1 = var1.suggestions;
                var1 = var1.registration;
                var3 = var1.source;
                var1 = arg1;
                var1 = var3 === var1;
                if(!var1) { _fun0005_ip = 56; continue _fun0005 }
 34:
                var2 = _closure1_slot8;
                var2 = var2.suggestions;
                var2 = var2.registration;
                var1 = var2.fetched;
 56:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'wasSuggestionsFetched';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot8;
            var1 = var1.suggestions;
            var1 = var1.migration;
            var1 = var1.fetched;
            return var1;
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'PomeloStore';
    var7['displayName'] = var2;
    var2 = 8;
    var2 = var5[var2];
    var14 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handlePomeloAttemptSuccess(arg1) {
        var1 = arg1;
        var4 = var1.username;
        var5 = var1.taken;
        var1 = _closure1_slot8;
        var3 = var1.validations;
        var2 = var3.set;
        var1 = {};
        var1['taken'] = var5;
        var1 = var2.bind(var3)(var4, var1);
        var1 = undefined;
        return var1;
    };
    var2['POMELO_ATTEMPT_SUCCESS'] = var8;
    var8 = function handlePomeloAttemptFailure(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var6 = var1.username;
            var8 = var1.error;
            var2 = var1.statusCode;
            var4 = var1.retryAfter;
            var1 = 429;
            if(!(var1 !== var2)) { _fun0006_ip = 74; continue _fun0006 }
 35:
            var1 = _closure1_slot8;
            var3 = var1.validations;
            var2 = var3.set;
            var1 = {};
            var5 = null;
            var1['taken'] = var5;
            var1['error'] = var8;
            var1 = var2.bind(var3)(var6, var1);
            _fun0006_ip = 168; continue _fun0006;
 74:
            var2 = _closure1_slot8;
            var5 = var2.validations;
            var3 = var5.set;
            var2 = {'taken': null, 'error': null, 'rateLimited': true};
            var7 = null;
            var2['error'] = var8;
            var8 = var7 != var4;
            var7 = 7;
            if(!var8) { _fun0006_ip = 123; continue _fun0006 }
 120:
            var7 = var4;
 123:
            var9 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 6;
            var8 = var8[var1];
            var1 = undefined;
            var1 = var9.bind(var1)(var8);
            var1 = var1.Millis;
            var1 = var1.SECOND;
            var1 = var7 * var1;
            var1 = var3.bind(var5)(var6, var2, var1);
 168:
            var1 = null;
            if(!(var1 != var4)) { _fun0006_ip = 246; continue _fun0006 }
 174:
            var2 = _closure1_slot8;
            var3 = global;
            var5 = var3.Date;
            var3 = var5.now;
            var3 = var3.bind(var5)();
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 6;
            var5 = var5[var1];
            var1 = undefined;
            var1 = var6.bind(var1)(var5);
            var1 = var1.Millis;
            var1 = var1.SECOND;
            var1 = var4 * var1;
            var1 = var3 + var1;
            var2['retryAfterTime'] = var1;
 246:
            var1 = undefined;
            return var1;
        }
    };
    var2['POMELO_ATTEMPT_FAILURE'] = var8;
    var8 = function handlePomeloSuggestionsReset() {
        var2 = _closure1_slot8;
        var5 = var2.suggestions;
        var3 = {'suggestion': null, 'fetched': false, 'usernameSuggestionLoading': false};
        var4 = {};
        var1 = undefined;
        var4['username'] = var1;
        var3['suggestion'] = var4;
        var4 = false;
        var5['migration'] = var3;
        var3 = var2.suggestions;
        var2 = {};
        var5 = {};
        var5['username'] = var1;
        var2['suggestion'] = var5;
        var2['source'] = var1;
        var2['fetched'] = var4;
        var3['registration'] = var2;
        return var1;
    };
    var2['POMELO_SUGGESTIONS_RESET'] = var8;
    var8 = function handlePomeloSuggestionsSuccess(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var5 = var1.suggestion;
            var1 = _closure1_slot8;
            var4 = var1.suggestions;
            var1 = {'suggestion': null, 'fetched': true, 'usernameSuggestionLoading': false};
            var1['suggestion'] = var5;
            var3 = true;
            var4['migration'] = var1;
            var1 = null;
            var6 = var1 == var5;
            var1 = undefined;
            var4 = undefined;
            if(var6) { _fun0007_ip = 71; continue _fun0007 }
 63:
            var4 = var5.invalid_current_username;
 71:
            if(!(var3 === var4)) { _fun0007_ip = 85; continue _fun0007 }
 75:
            var2 = _closure1_slot8;
            var2['currentUsernameInvalid'] = var3;
 85:
            return var1;
        }
    };
    var2['POMELO_SUGGESTIONS_SUCCESS'] = var8;
    var8 = function handlePomeloSuggestionsFetch(arg1) {
        var1 = arg1;
        var2 = var1.usernameSuggestionLoading;
        var1 = _closure1_slot8;
        var1 = var1.suggestions;
        var1 = var1.migration;
        var1['usernameSuggestionLoading'] = var2;
        var1 = undefined;
        return var1;
    };
    var2['POMELO_SUGGESTIONS_FETCH'] = var8;
    var4 = function handlePomeloRegistrationSuggestionsSuccess(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var2 = var1.suggestion;
            var5 = var1.source;
            var1 = _closure1_slot8;
            var4 = var1.suggestions;
            var1 = {};
            var1['suggestion'] = var2;
            var1['source'] = var5;
            var5 = true;
            var1['fetched'] = var5;
            var4['registration'] = var1;
            var5 = null;
            var6 = var5 == var2;
            var1 = undefined;
            var4 = undefined;
            if(var6) { _fun0008_ip = 69; continue _fun0008 }
 64:
            var4 = var2.username;
 69:
            if(!(var5 != var4)) { _fun0008_ip = 108; continue _fun0008 }
 73:
            var3 = _closure1_slot8;
            var5 = var3.validations;
            var4 = var5.set;
            var3 = var2.username;
            var2 = {};
            var6 = false;
            var2['taken'] = var6;
            var2 = var4.bind(var5)(var3, var2);
 108:
            return var1;
        }
    };
    var2['POMELO_REGISTRATION_SUGGESTIONS_SUCCESS'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var7](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/pomelo/PomeloStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
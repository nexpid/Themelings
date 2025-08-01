// app/stores/MFAStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var5;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = false;
    var _closure1_slot8 = var2;
    var7 = new Array(0);
    var _closure1_slot9 = var7;
    var7 = '';
    var _closure1_slot10 = var7;
    var _closure1_slot11 = var2;
    var2 = {'viewNonce': '', 'regenerateNonce': ''};
    var _closure1_slot12 = var2;
    var2 = 7;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function MFAStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot13;
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
                var6 = _closure1_slot6;
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
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'getVerificationKey';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getBackupCodes';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'togglingSMS';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getNonces';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hasSeenBackupPrompt';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'MFAStore';
    var7['displayName'] = var2;
    var2 = 8;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleEnableSuccess(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var5 = var1.token;
            var3 = var1.codes;
            var1 = undefined;
            if(!(var1 !== var5)) { _fun0003_ip = 55; continue _fun0003 }
 21:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var4 = var4.bind(var1)(var2);
            var2 = var4.setToken;
            var2 = var2.bind(var4)(var5);
 55:
            _closure1_slot9 = var3;
            return var1;
        }
    };
    var2['MFA_ENABLE_SUCCESS'] = var8;
    var8 = function handleDisableSuccess(arg1) {
        var1 = arg1;
        var4 = var1.token;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.setToken;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['MFA_DISABLE_SUCCESS'] = var8;
    var8 = function handleSMSToggle() {
        var1 = true;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['MFA_SMS_TOGGLE'] = var8;
    var8 = function handleSMSToggleComplete() {
        var1 = false;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['MFA_SMS_TOGGLE_COMPLETE'] = var8;
    var8 = function handleClearBackupCodes() {
        var1 = new Array(0);
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var2['MFA_CLEAR_BACKUP_CODES'] = var8;
    var8 = function handleGetBackupCodes(arg1) {
        var1 = arg1;
        var7 = var1.codes;
        var3 = var1.key;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 6;
        var4 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.sortBy;
        var4 = 'code';
        var4 = var5.bind(var6)(var7, var4);
        _closure1_slot9 = var4;
        _closure1_slot10 = var3;
        return var1;
    };
    var2['MFA_VIEW_BACKUP_CODES'] = var8;
    var8 = function handleSendVerificationEmail(arg1) {
        var1 = arg1;
        var2 = var1.nonces;
        _closure1_slot12 = var2;
        var1 = undefined;
        return var1;
    };
    var2['MFA_SEND_VERIFICATION_KEY'] = var8;
    var8 = function handleSeenBackupPrompt() {
        var1 = true;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['MFA_SEEN_BACKUP_CODE_PROMPT'] = var8;
    var4 = function CONNECTION_OPEN() {
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/MFAStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
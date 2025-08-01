// app/utils/MFAInterceptionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function requestMfaCode(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.promiseFn;
            var _closure2_slot0 = var1;
            var1 = var2.resolve;
            var _closure2_slot1 = var1;
            var1 = var2.reject;
            var _closure2_slot2 = var1;
            var5 = var2.modalProps;
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 49; continue _fun0001 }
 47:
            var5 = {};
 49:
            var _closure2_slot3 = var5;
            var2 = var2.hooks;
            if(!(var2 === var1)) { _fun0001_ip = 65; continue _fun0001 }
 63:
            var2 = {};
 65:
            var6 = var2.onEarlyClose;
            var _closure2_slot4 = var6;
            var4 = function handleEarlyClose() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 23; continue _fun0002 }
 13:
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot5 = var4;
            var2 = function closeAndResolve(arg1) {
                var2 = _closure1_slot4;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var3 = _closure2_slot1;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var _closure2_slot6 = var2;
            var2 = function closeAndReject(arg1) {
                var2 = _closure1_slot4;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var3 = _closure2_slot2;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var _closure2_slot7 = var2;
            var3 = function handleSubmitCode(arg1) {
                var3 = _closure1_slot8;
                var2 = {};
                var4 = _closure2_slot0;
                var2['promiseFn'] = var4;
                var4 = _closure2_slot6;
                var2['resolve'] = var4;
                var4 = _closure2_slot7;
                var2['reject'] = var4;
                var4 = arg1;
                var2['code'] = var4;
                var1 = _closure2_slot9;
                var2['mfaCodeHandler'] = var1;
                var1 = true;
                var2['isModalOpen'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var _closure2_slot8 = var3;
            var2 = function errorHandler(arg1) {
                var1 = arg1;
                var1 = var1.res;
                var5 = _closure1_slot3;
                var4 = _closure2_slot8;
                var3 = _closure2_slot5;
                var2 = {};
                var8 = _closure2_slot3;
                var9 = var2;
                var6 = copyDataProperties(var9, var8);
                var1 = var1.body;
                var6 = var1.message;
                var1 = 'error';
                var2[var1] = var6;
                var1 = undefined;
                var2 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var _closure2_slot9 = var2;
            var8 = _closure1_slot3;
            var7 = null;
            if(!(var7 == var8)) { _fun0001_ip = 143; continue _fun0001 }
 133:
            if(!(var7 != var6)) { _fun0001_ip = 154; continue _fun0001 }
 137:
            var6 = var6.bind(var1)();
            _fun0001_ip = 154; continue _fun0001;
 143:
            var2 = _closure1_slot3;
            var2 = var2.bind(var1)(var3, var4, var5);
 154:
            return var1;
        }
    };
    var _closure1_slot7 = var2;
    var1 = function executePromise(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var9 = arg1;
            var5 = var9.promiseFn;
            var _closure2_slot0 = var5;
            var4 = var9.resolve;
            var _closure2_slot1 = var4;
            var2 = var9.reject;
            var _closure2_slot2 = var2;
            var7 = var9.code;
            var2 = var9.mfaCodeHandler;
            var3 = undefined;
            if(!(var2 === var3)) { _fun0003_ip = 59; continue _fun0003 }
 52:
            var2 = _closure1_slot7;
 59:
            var _closure2_slot3 = var2;
            var2 = var9.isModalOpen;
            if(!(var2 === var3)) { _fun0003_ip = 75; continue _fun0003 }
 73:
            var2 = false;
 75:
            var _closure2_slot4 = var2;
            var8 = {'promiseFn': 0, 'resolve': 0, 'reject': 0, 'code': 0, 'mfaCodeHandler': 0, 'isModalOpen': 0};
            var2 = null;
            var12 = var8;
            var11 = null;
            var6 = silentSetPrototypeOf(var12, var11);
            var12 = {};
            var11 = var9;
            var10 = var8;
            var6 = copyDataProperties(var12, var11, var10);
            var _closure2_slot5 = var6;
            if(!(var2 == var7)) { _fun0003_ip = 128; continue _fun0003 }
 124:
            var2 = {};
            _fun0003_ip = 137; continue _fun0003;
 128:
            var6 = {};
            var6['code'] = var7;
            var2 = var6;
 137:
            var3 = var5.bind(var3)(var2);
            var2 = var3.then;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = arg1;
                    var3 = _closure2_slot4;
                    var2 = var4.body;
                    if(!var2) { _fun0004_ip = 38; continue _fun0004 }
 18:
                    var5 = var4.body;
                    var6 = var5.code;
                    var5 = 60008;
                    var2 = var5 === var6;
 38:
                    if(var2) { _fun0004_ip = 62; continue _fun0004 }
 41:
                    if(!var3) { _fun0004_ip = 59; continue _fun0004 }
 44:
                    var6 = var4.status;
                    var5 = 429;
                    var3 = var5 === var6;
 59:
                    var2 = var3;
 62:
                    if(var2) { _fun0004_ip = 78; continue _fun0004 }
 65:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var3 = var3.bind(var2)(var4);
                    return var2;
 78:
                    var3 = _closure2_slot3;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2['promiseFn'] = var5;
                    var5 = _closure2_slot1;
                    var2['resolve'] = var5;
                    var5 = _closure2_slot2;
                    var2['reject'] = var5;
                    var2['res'] = var4;
                    var7 = _closure2_slot5;
                    var8 = var2;
                    var1 = copyDataProperties(var8, var7);
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = ['checkEnabled'];
    var _closure1_slot2 = var1;
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
    var _closure1_slot5 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.showAlert;
    var _closure1_slot3 = var5;
    var5 = function l() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.closeAlert;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/MFAInterceptionUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function mfaInterceptor(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg2;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = null;
            if(!(var3 == var5)) { _fun0005_ip = 20; continue _fun0005 }
 18:
            var5 = {};
 20:
            var2 = var5.checkEnabled;
            var4 = undefined;
            if(!(var4 === var2)) { _fun0005_ip = 76; continue _fun0005 }
 32:
            var7 = _closure1_slot6;
            var6 = var7.getCurrentUser;
            var7 = var6.bind(var7)();
            var8 = var3 == var7;
            var6 = undefined;
            if(var8) { _fun0005_ip = 63; continue _fun0005 }
 57:
            var6 = var7.mfaEnabled;
 63:
            var3 = var3 != var6;
            if(!var3) { _fun0005_ip = 73; continue _fun0005 }
 70:
            var3 = var6;
 73:
            var2 = var3;
 76:
            var _closure2_slot1 = var2;
            var3 = _closure1_slot5;
            var2 = _closure1_slot2;
            var2 = var3.bind(var4)(var5, var2);
            var _closure2_slot2 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var10 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 3;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.resolveThunk;
                    var3 = _closure2_slot1;
                    var3 = var5.bind(var6)(var3);
                    if(var3) { _fun0006_ip = 52; continue _fun0006 }
 46:
                    var3 = _closure1_slot8;
                    _fun0006_ip = 56; continue _fun0006;
 52:
                    var3 = _closure1_slot7;
 56:
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2['promiseFn'] = var5;
                    var5 = arg1;
                    var2['resolve'] = var5;
                    var5 = arg2;
                    var2['reject'] = var5;
                    var7 = _closure2_slot2;
                    var8 = var2;
                    var4 = copyDataProperties(var8, var7);
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var11 = var2;
            var1 = new var11[var3](var10, var9);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var3['default'] = var4;
    var3['requestMfaCode'] = var2;
    return var1;
})();
// app/modules/auth/getAuthenticationErrorsFromAPIError.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/getAuthenticationErrorsFromAPIError.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getAuthenticationErrorsFromAPIError(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = {};
            var2 = var5.code;
            var1['error_code'] = var2;
            var2 = var5.errors;
            var3 = null;
            if(!(var3 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var5.message;
            var1['message'] = var2;
            var2 = var5.retryAfter;
            if(!(var3 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var5.retryAfter;
            var1['retry_after'] = var2;
case 4:
            return var1;
case 2:
            var2 = global;
            var4 = var2.Object;
            var3 = var4.keys;
            var2 = var5.errors;
            var4 = var3.bind(var4)(var2);
            var2 = var4.length;
            var3 = 0;
            var2 = var3 < var2;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var4[var3];
            var2 = var5.getFirstFieldErrorMessage;
            var7 = var2.bind(var5)(var6);
            var2 = new Array(1);
            var2[0] = var7;
            var1[var6] = var2;
            var3 = var3 + 1;
            var2 = var4.length;
            if(var3 < var2) { _fun0001_ip = 7; continue _fun0001 }
case 6:
            return var1;
        }
    };
    var3['getAuthenticationErrorsFromAPIError'] = var4;
    var2 = function getAuthenticationErrorsFromV6OrEarlierAPIError(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = global;
            var4 = var2.Object;
            var3 = var4.keys;
            var2 = var1.fields;
            var2 = var3.bind(var4)(var2);
            var3 = var2.length;
            var2 = 0;
            if(!(!(var3 > var2))) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = {};
            var3 = var1.message;
            var2['message'] = var3;
            var4 = var1.retryAfter;
            var3 = null;
            if(!(var3 != var4)) { _fun0002_ip = 10; continue _fun0002 }
case 4:
            var3 = var1.retryAfter;
            var2['retry_after'] = var3;
case 10:
            return var2;
case 8:
            var1 = var1.fields;
            return var1;
        }
    };
    var3['getAuthenticationErrorsFromV6OrEarlierAPIError'] = var2;
    return var1;
})();
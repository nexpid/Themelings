// discord_common/js/packages/http-utils/V6OrEarlierAPIError.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var2 = function() {
        var4 = _closure1_slot1;
        var3 = function APIError(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = arg1;
                var9 = arguments[2];
                var3 = this;
                var1 = undefined;
                if(!(var9 === var1)) { _fun0001_ip = 21; continue _fun0001 }
 15:
                var9 = 'An unexpected error occurred.';
 21:
                var4 = _closure1_slot0;
                var2 = _closure2_slot0;
                var2 = var4.bind(var1)(var3, var2);
                var4 = 'string';
                var2 = typeof var5;
                if(!(var4 !== var2)) { _fun0001_ip = 311; continue _fun0001 }
 55:
                var2 = var5.body;
                var7 = null;
                if(!(var7 == var2)) { _fun0001_ip = 82; continue _fun0001 }
 66:
                var2 = {};
                var4 = var5.status;
                var2['status'] = var4;
                _fun0001_ip = 327; continue _fun0001;
 82:
                var4 = var5.body;
                var4 = var4.message;
                if(!(var7 != var4)) { _fun0001_ip = 233; continue _fun0001 }
 99:
                var4 = global;
                var10 = var4.Array;
                var8 = var10.isArray;
                var6 = var5.body;
                var6 = var6.message;
                var6 = var8.bind(var10)(var6);
                if(var6) { _fun0001_ip = 233; continue _fun0001 }
 130:
                var6 = var5.body;
                var6 = var6.code;
                if(!(var7 != var6)) { _fun0001_ip = 173; continue _fun0001 }
 144:
                var8 = var4.Array;
                var6 = var8.isArray;
                var4 = var5.body;
                var4 = var4.code;
                var4 = var6.bind(var8)(var4);
                if(var4) { _fun0001_ip = 233; continue _fun0001 }
 173:
                var4 = {};
                var6 = var5.body;
                var6 = var6.message;
                var4['message'] = var6;
                var6 = var5.body;
                var6 = var6.code;
                var4['code'] = var6;
                var6 = var5.body;
                var6 = var6.retry_after;
                var4['retryAfter'] = var6;
                var6 = var5.status;
                var4['status'] = var6;
                var2 = var4;
                _fun0001_ip = 327; continue _fun0001;
 233:
                var6 = var5.body;
                var4 = var7 != var6;
                var10 = null;
                if(!var4) { _fun0001_ip = 271; continue _fun0001 }
 247:
                var4 = global;
                var8 = var4.Object;
                var4 = var8.values;
                var8 = var4.bind(var8)(var6);
                var4 = 0;
                var10 = var8[var4];
 271:
                var4 = {};
                var8 = var7 != var10;
                var7 = undefined;
                if(!var8) { _fun0001_ip = 288; continue _fun0001 }
 282:
                var8 = 0;
                var7 = var10[var8];
 288:
                var4['message'] = var7;
                var4['fields'] = var6;
                var6 = var5.status;
                var4['status'] = var6;
                var2 = var4;
                _fun0001_ip = 327; continue _fun0001;
 311:
                var4 = {};
                var4['message'] = var5;
                var5 = arg2;
                var4['code'] = var5;
                var2 = var4;
 327:
                var5 = var2.message;
                var6 = var2.code;
                var7 = var2.retryAfter;
                var4 = var2.fields;
                var2 = var2.status;
                var8 = var5;
                if(var8) { _fun0001_ip = 363; continue _fun0001 }
 360:
                var8 = var9;
 363:
                var3['message'] = var8;
                var3['retryAfter'] = var7;
                if(var6) { _fun0001_ip = 384; continue _fun0001 }
 378:
                var6 = -1;
 384:
                var3['code'] = var6;
                if(var4) { _fun0001_ip = 395; continue _fun0001 }
 393:
                var4 = {};
 395:
                var3['fields'] = var4;
                var3['status'] = var2;
                var2 = global;
                var2 = var2.Error;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var13 = var4;
                var12 = var5;
                var2 = new var13[var2](var12, var11);
                var2 = var2 instanceof Object ? var2 : var4;
                var3['error'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = 'getFieldMessage';
        var1['key'] = var5;
        var2 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = arg1;
                var2 = this;
                var1 = var2.fields;
                var4 = var1[var3];
                var1 = null;
                var4 = var1 != var4;
                if(!var4) { _fun0002_ip = 41; continue _fun0002 }
 25:
                var2 = var2.fields;
                var3 = var2[var3];
                var2 = 0;
                var1 = var3[var2];
 41:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/http-utils/V6OrEarlierAPIError.tsx';
    var4 = var5.bind(var6)(var4);
    var3['APIError'] = var2;
    return var1;
})();
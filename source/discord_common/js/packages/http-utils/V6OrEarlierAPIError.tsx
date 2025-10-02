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
case 0:
                var5 = arg1;
                var9 = arguments[2];
                var3 = this;
                var1 = undefined;
                if(!(var9 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var9 = 'An unexpected error occurred.';
case 2:
                var4 = _closure1_slot0;
                var2 = _closure2_slot0;
                var2 = var4.bind(var1)(var3, var2);
                var4 = 'string';
                var2 = typeof var5;
                if(!(var4 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = var5.body;
                var7 = null;
                if(!(var7 == var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var2 = {};
                var4 = var5.status;
                var2['status'] = var4;
                _fun0001_ip = 8; continue _fun0001;
case 6:
                var4 = var5.body;
                var4 = var4.message;
                if(!(var7 != var4)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var4 = global;
                var10 = var4.Array;
                var8 = var10.isArray;
                var6 = var5.body;
                var6 = var6.message;
                var6 = var8.bind(var10)(var6);
                if(var6) { _fun0001_ip = 9; continue _fun0001 }
case 11:
                var6 = var5.body;
                var6 = var6.code;
                if(!(var7 != var6)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var8 = var4.Array;
                var6 = var8.isArray;
                var4 = var5.body;
                var4 = var4.code;
                var4 = var6.bind(var8)(var4);
                if(var4) { _fun0001_ip = 9; continue _fun0001 }
case 12:
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
                _fun0001_ip = 8; continue _fun0001;
case 9:
                var6 = var5.body;
                var4 = var7 != var6;
                var10 = null;
                if(!var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                var4 = global;
                var8 = var4.Object;
                var4 = var8.values;
                var8 = var4.bind(var8)(var6);
                var4 = 0;
                var10 = var8[var4];
case 14:
                var4 = {};
                var8 = var7 != var10;
                var7 = undefined;
                if(!var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                var8 = 0;
                var7 = var10[var8];
case 16:
                var4['message'] = var7;
                var4['fields'] = var6;
                var6 = var5.status;
                var4['status'] = var6;
                var2 = var4;
                _fun0001_ip = 8; continue _fun0001;
case 4:
                var4 = {};
                var4['message'] = var5;
                var5 = arg2;
                var4['code'] = var5;
                var2 = var4;
case 8:
                var5 = var2.message;
                var6 = var2.code;
                var7 = var2.retryAfter;
                var4 = var2.fields;
                var2 = var2.status;
                var8 = var5;
                if(var8) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                var8 = var9;
case 18:
                var3['message'] = var8;
                var3['retryAfter'] = var7;
                if(var6) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                var6 = -1;
case 20:
                var3['code'] = var6;
                if(var4) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                var4 = {};
case 22:
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
case 0:
                var3 = arg1;
                var2 = this;
                var1 = var2.fields;
                var4 = var1[var3];
                var1 = null;
                var4 = var1 != var4;
                if(!var4) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                var2 = var2.fields;
                var3 = var2[var3];
                var2 = 0;
                var1 = var3[var2];
case 24:
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
// app/utils/TrackedHTTPUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function makeRequest(arg1, arg2, arg3) {
        var5 = arg2;
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = var5.trackedActionData;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot3;
        var3 = _closure1_slot2;
        var2 = undefined;
        var3 = var4.bind(var2)(var5, var3);
        var _closure2_slot2 = var3;
        var2 = {};
        var3 = var3.url;
        var2['url'] = var3;
        var3 = arg3;
        var2['request_method'] = var3;
        var _closure2_slot3 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var7 = function(arg1, arg2) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = arg2;
            var _closure3_slot1 = var1;
            var4 = _closure2_slot0;
            var3 = _closure2_slot2;
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.then;
            var3 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var3 = arg1;
                    var1 = _closure2_slot1;
                    var7 = var1.properties;
                    var1 = var1.properties;
                    var2 = 'function';
                    var1 = typeof var1;
                    if(!(var2 === var1)) { _fun0001_ip = 48; continue _fun0001 }
 33:
                    var2 = _closure2_slot1;
                    var1 = var2.properties;
                    var7 = var1.bind(var2)(var3);
 48:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.trackNetworkAction;
                    var2 = _closure2_slot1;
                    var4 = var2.event;
                    var2 = {};
                    var9 = var3.status;
                    var2['status_code'] = var9;
                    var10 = _closure2_slot3;
                    var11 = var2;
                    var8 = copyDataProperties(var11, var10);
                    var11 = var2;
                    var10 = var7;
                    var7 = copyDataProperties(var11, var10);
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = _closure3_slot0;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.catch;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var1 = _closure2_slot1;
                    var7 = var1.properties;
                    var1 = var1.properties;
                    var2 = 'function';
                    var1 = typeof var1;
                    if(!(var2 === var1)) { _fun0002_ip = 48; continue _fun0002 }
 33:
                    var2 = _closure2_slot1;
                    var1 = var2.properties;
                    var7 = var1.bind(var2)(var3);
 48:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.trackNetworkAction;
                    var2 = _closure2_slot1;
                    var4 = var2.event;
                    var2 = {};
                    var9 = var3.status;
                    var2['status_code'] = var9;
                    var11 = var3.body;
                    var9 = null;
                    var12 = var9 == var11;
                    var10 = undefined;
                    if(var12) { _fun0002_ip = 122; continue _fun0002 }
 117:
                    var10 = var11.code;
 122:
                    var2['error_code'] = var10;
                    var10 = var3.body;
                    var11 = var9 == var10;
                    var9 = undefined;
                    if(var11) { _fun0002_ip = 146; continue _fun0002 }
 141:
                    var9 = var10.message;
 146:
                    var2['error_message'] = var9;
                    var13 = _closure2_slot3;
                    var14 = var2;
                    var8 = copyDataProperties(var14, var13);
                    var14 = var2;
                    var13 = var7;
                    var7 = copyDataProperties(var14, var13);
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = _closure3_slot1;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var8 = var2;
        var1 = new var8[var3](var7, var6);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = ['trackedActionData'];
    var _closure1_slot2 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var7 = var6[var1];
    var2 = native3;
    var1 = undefined;
    var2 = var2.bind(var1)(var7);
    var _closure1_slot3 = var2;
    var2 = {};
    var7 = function get(arg1) {
        var5 = _closure1_slot4;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var1 = var3[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var1 = var1.HTTP;
        var3 = var1.get;
        var2 = arg1;
        var1 = 'get';
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var2['get'] = var7;
    var7 = function post(arg1) {
        var5 = _closure1_slot4;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var1 = var3[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var1 = var1.HTTP;
        var3 = var1.post;
        var2 = arg1;
        var1 = 'post';
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var2['post'] = var7;
    var7 = function put(arg1) {
        var5 = _closure1_slot4;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var1 = var3[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var1 = var1.HTTP;
        var3 = var1.put;
        var2 = arg1;
        var1 = 'put';
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var2['put'] = var7;
    var7 = function patch(arg1) {
        var5 = _closure1_slot4;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var1 = var3[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var1 = var1.HTTP;
        var3 = var1.patch;
        var2 = arg1;
        var1 = 'patch';
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var2['patch'] = var7;
    var4 = function del(arg1) {
        var5 = _closure1_slot4;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var1 = var3[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var1 = var1.HTTP;
        var3 = var1.del;
        var2 = arg1;
        var1 = 'del';
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var2['delete'] = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/TrackedHTTPUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
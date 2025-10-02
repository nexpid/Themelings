// app/modules/rpc/transports/PostMessageProxySocket.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TransportTypes;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RPCCloseCodes;
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function WindowProxySocket(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var12 = this;
                var10 = var1.origin;
                var9 = var1.postMessageToRPCClient;
                var8 = var1.frameId;
                var2 = var1.version;
                var5 = var1.encoding;
                var7 = var1.logger;
                var6 = var1.postClose;
                var3 = var1.onSendingToRPCClient;
                var13 = _closure1_slot2;
                var11 = _closure2_slot0;
                var4 = undefined;
                var13 = var13.bind(var4)(var12, var11);
                var13 = _closure1_slot7;
                var13 = var13.POST_MESSAGE;
                var17 = new Array(3);
                var17[0] = var13;
                var17[1] = var2;
                var17[2] = var5;
                var2 = _closure1_slot5;
                var16 = var2.bind(var4)(var11);
                var11 = _closure1_slot4;
                var2 = _closure1_slot9;
                var2 = var2.bind(var4)();
                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var2 = var16.apply;
                var2 = var2.bind(var16)(var12, var17);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var13 = global;
                var15 = var13.Reflect;
                var14 = var15.construct;
                var13 = _closure1_slot5;
                var13 = var13.bind(var4)(var12);
                var13 = var13.constructor;
                var2 = var14.bind(var15)(var16, var17, var13);
case 8:
                var2 = var11.bind(var4)(var12, var2);
                var12 = ['etf', 'json'];
                var11 = var12.indexOf;
                var12 = var11.bind(var12)(var5);
                var11 = -1;
                if(!(var11 !== var12)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var11 = 'etf';
                if(!(var11 !== var5)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var2['origin'] = var10;
                var2['postMessageToRPCClient'] = var9;
                var2['frameId'] = var8;
                var2['logger'] = var7;
                var2['postClose'] = var6;
                var2['onSendingToRPCClient'] = var3;
                var3 = false;
                var2['closed'] = var3;
                return var2;
case 11:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 7;
                var2 = var6[var2];
                var7 = var3.bind(var4)(var2);
                var6 = {};
                var2 = _closure1_slot8;
                var2 = var2.INVALID_ENCODING;
                var6['closeCode'] = var2;
                var2 = var7.prototype;
                var3 = Object.create(var2, {constructor: {value: var7}});
                var19 = 'Erlpack cannot be used on this client';
                var21 = var3;
                var20 = var6;
                var2 = new var21[var7](var20, var19, var18);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
case 9:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 7;
                var2 = var6[var2];
                var4 = var3.bind(var4)(var2);
                var3 = {};
                var1 = _closure1_slot8;
                var1 = var1.INVALID_ENCODING;
                var3['closeCode'] = var1;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'Invalid Encoding: ';
                var19 = var2.bind(var1)(var5);
                var2 = var4.prototype;
                var2 = Object.create(var2, {constructor: {value: var4}});
                var21 = var2;
                var20 = var3;
                var1 = new var21[var4](var20, var19, var18);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'send';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var4 = var5.onSendingToRPCClient;
                var1 = null;
                if(!(var1 != var4)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var3 = var4.call;
                var1 = var5.id;
                var1 = var3.bind(var4)(var5, var2, var1);
case 13:
                var4 = var5.postMessageToRPCClient;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var6.bind(var1)(var3);
                var6 = var3.FRAME;
                var3 = new Array(2);
                var3[0] = var6;
                var3[1] = var2;
                var2 = var5.origin;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'close';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = this;
                var1 = var2.closed;
                if(var1) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var5 = var2.postClose;
                var4 = var2.origin;
                var3 = {};
                var1 = arg1;
                var3['code'] = var1;
                var1 = arg2;
                var3['message'] = var1;
                var1 = var2.postMessageToRPCClient;
                var1 = var5.bind(var2)(var4, var3, var1);
case 15:
                var1 = true;
                var2['closed'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/transports/PostMessageProxySocket.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
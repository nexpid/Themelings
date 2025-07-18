// app/modules/gateway/RequestGatewaySocket.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var12 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var9;
    var1 = function addToken(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot7;
            var2 = var3.get;
            var2 = var2.bind(var3)(var4);
            var3 = null;
            var3 = var3 != var2;
            var5 = 0;
            if(!var3) { _fun0001_ip = 34; continue _fun0001 }
 31:
            var5 = var2;
 34:
            var3 = _closure1_slot7;
            var2 = var3.set;
            var1 = 1;
            var1 = var5 + var1;
            var1 = var2.bind(var3)(var4, var1);
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function deleteToken(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot7;
            var2 = var4.get;
            var4 = var2.bind(var4)(var3);
            var2 = null;
            var6 = var2 != var4;
            var2 = 0;
            var5 = 0;
            if(!var6) { _fun0002_ip = 36; continue _fun0002 }
 33:
            var5 = var4;
 36:
            var4 = 1;
            var5 = var5 - var4;
            if(!(!(var5 <= var2))) { _fun0002_ip = 64; continue _fun0002 }
 47:
            var4 = _closure1_slot7;
            var2 = var4.set;
            var2 = var2.bind(var4)(var3, var5);
            _fun0002_ip = 78; continue _fun0002;
 64:
            var2 = _closure1_slot7;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
 78:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function makeBridgeToken(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'BRIDGE:';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot10 = var1;
    var6 = function isRequested() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = _closure1_slot7;
            var3 = var1.size;
            var1 = 0;
            var1 = var3 > var1;
            if(var1) { _fun0003_ip = 25; continue _fun0003 }
 21:
            var1 = _closure1_slot6;
 25:
            return var1;
        }
    };
    var _closure1_slot11 = var6;
    var5 = function setRequestedBy(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot15;
        var1 = undefined;
        var2 = function() {
            var3 = _closure1_slot8;
            var4 = _closure2_slot0;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            var3 = _closure1_slot9;
            var2 = _closure1_slot10;
            var2 = var2.bind(var1)(var4);
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot12 = var5;
    var4 = function stopRequest(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot15;
        var1 = undefined;
        var2 = function() {
            var3 = _closure1_slot9;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot13 = var4;
    var1 = function _withRequest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 95; continue _fun0004 }
 7:
                    var3 = arg1;
                    var2 = arg2;
 13: // try_start_0
                    var7 = _closure1_slot12;
                    var5 = var3;
                    var6 = undefined;
                    var5 = var7.bind(var6)(var5);
                    var2 = var2.bind(var6)();
                    SaveGenerator(address=38);
 36:
                    return var2;
 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 59; continue _fun0004 }
 44: // try_end0
                    var7 = _closure1_slot13;
                    var5 = var3;
                    var5 = var7.bind(var6)(var5);
                    return var2;
 59:
                    var5 = _closure1_slot13;
                    var4 = var3;
                    var4 = var5.bind(var6)(var4);
                    return var2;
 74: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var5 = _closure1_slot13;
                    var4 = var3;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    throw var2;
 95:
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
    var1 = function withStateTransitions(arg1) {
        var2 = _closure1_slot11;
        var1 = undefined;
        var3 = var2.bind(var1)();
        var3 = false;
        _closure1_slot6 = var3;
        var3 = arg1;
        var3 = var3.bind(var1)();
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot15 = var1;
    var7 = global;
    var14 = var7.Object;
    var13 = var14.defineProperty;
    var11 = {};
    var10 = true;
    var11['value'] = var10;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var11);
    var1 = 0;
    var11 = var9[var1];
    var1 = undefined;
    var11 = var12.bind(var1)(var11);
    var _closure1_slot3 = var11;
    var11 = 1;
    var11 = var9[var11];
    var11 = var8.bind(var1)(var11);
    var11 = var11.AnalyticEvents;
    var _closure1_slot4 = var11;
    var11 = ['COLD_START'];
    var _closure1_slot5 = var11;
    var _closure1_slot6 = var10;
    var7 = var7.Map;
    var10 = var7.prototype;
    var10 = Object.create(var10, {constructor: {value: var7}});
    var18 = var10;
    var7 = new var18[var7](var17);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/gateway/RequestGatewaySocket.tsx';
    var7 = var8.bind(var9)(var7);
    var3['isRequested'] = var6;
    var6 = function recordStartHeadlessTask() {
        var1 = false;
        _closure1_slot6 = var1;
        var1 = undefined;
        return var1;
    };
    var3['recordStartHeadlessTask'] = var6;
    var6 = function describeConnectionReasons() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = _closure1_slot6;
            if(var2) { _fun0005_ip = 16; continue _fun0005 }
 10:
            var4 = new Array(0);
            _fun0005_ip = 20; continue _fun0005;
 16:
            var4 = _closure1_slot5;
 20:
            var3 = new Array(0);
            var2 = 0;
            var8 = var3;
            var7 = var4;
            var6 = 0;
            var6 = arraySpread(var8, var7, var6);
            var5 = _closure1_slot7;
            var1 = var5.keys;
            var7 = var1.bind(var5)();
            var8 = var3;
            var1 = arraySpread(var8, var7, var6);
            var1 = var3.sort;
            var4 = var1.bind(var3)();
            var1 = var4.length;
            var2 = var1 > var2;
            var1 = 'NO_REASONS';
            if(!var2) { _fun0005_ip = 100; continue _fun0005 }
 86:
            var3 = var4.join;
            var2 = ',';
            var1 = var3.bind(var4)(var2);
 100:
            return var1;
        }
    };
    var3['describeConnectionReasons'] = var6;
    var3['setRequestedBy'] = var5;
    var5 = function startBridgeTo(arg1) {
        var5 = _closure1_slot10;
        var1 = undefined;
        var4 = arg1;
        var4 = var5.bind(var1)(var4);
        var _closure2_slot0 = var4;
        var4 = global;
        var5 = var4.performance;
        var4 = var5.now;
        var4 = var4.bind(var5)();
        var _closure2_slot1 = var4;
        var5 = _closure1_slot15;
        var4 = function() {
            var3 = _closure1_slot8;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var4 = var5.bind(var1)(var4);
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 2;
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.requestSafeIdleCallback;
        var3 = {};
        var6 = 5000;
        var3['timeout'] = var6;
        var2 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var5 = _closure1_slot7;
                var4 = var5.has;
                var3 = _closure2_slot0;
                var3 = var4.bind(var5)(var3);
                if(!var3) { _fun0006_ip = 111; continue _fun0006 }
 27:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 3;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.track;
                var3 = _closure1_slot4;
                var4 = var3.GATEWAY_BRIDGE_TIMEOUT;
                var3 = {};
                var7 = _closure2_slot0;
                var3['bridge_token'] = var7;
                var7 = global;
                var8 = var7.performance;
                var7 = var8.now;
                var8 = var7.bind(var8)();
                var7 = _closure2_slot1;
                var7 = var8 - var7;
                var3['cleared_after'] = var7;
                var3 = var5.bind(var6)(var4, var3);
 111:
                var3 = _closure1_slot13;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['startBridgeTo'] = var5;
    var3['stopRequest'] = var4;
    var2 = function withRequest() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['withRequest'] = var2;
    return var1;
})();
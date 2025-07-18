// app/modules/rpc/server/commands/subscriptions.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var4 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = var2.RPCCommands;
    var2 = var2.RPCErrors;
    var _closure1_slot5 = var2;
    var2 = {};
    var9 = var4.SUBSCRIBE;
    var7 = {};
    var10 = function handler(arg1) {
        var2 = arg1;
        var3 = var2.server;
        var _closure2_slot0 = var3;
        var3 = var2.socket;
        var _closure2_slot1 = var3;
        var3 = var2.evt;
        var _closure2_slot2 = var3;
        var2 = var2.args;
        var _closure2_slot3 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 679; continue _fun0001 }
 12:
                    var6 = undefined;
                    var _closure4_slot0 = var6;
                    var _closure4_slot1 = var6;
                    var3 = _closure2_slot0;
                    var4 = var3.events;
                    var3 = _closure2_slot2;
                    var9 = var4[var3];
                    var8 = null;
                    if(!(var8 != var9)) { _fun0001_ip = 586; continue _fun0001 }
 52:
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 3;
                    var3 = var10[var3];
                    var10 = var7.bind(var6)(var3);
                    var3 = _closure2_slot1;
                    var3 = var3.authorization;
                    var7 = var3.scopes;
                    var3 = var9.scope;
                    var3 = var10.bind(var6)(var7, var3);
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    if(var3) { _fun0001_ip = 174; continue _fun0001 }
 114:
                    var3 = 2;
                    var3 = var10[var3];
                    var13 = var7.bind(var6)(var3);
                    var12 = {};
                    var3 = _closure1_slot5;
                    var3 = var3.INVALID_PERMISSIONS;
                    var12['errorCode'] = var3;
                    var3 = var13.prototype;
                    var11 = Object.create(var3, {constructor: {value: var13}});
                    var17 = 'Not authenticated or invalid scope';
                    var19 = var11;
                    var18 = var12;
                    var3 = new var19[var13](var18, var17, var16);
                    var3 = var3 instanceof Object ? var3 : var11;
                    throw var3;
 174:
                    var3 = 4;
                    var3 = var10[var3];
                    var11 = var7.bind(var6)(var3);
                    var10 = var11.track;
                    var3 = _closure1_slot4;
                    var7 = var3.RPC_SUBSCRIPTION_REQUESTED;
                    var3 = {};
                    var12 = _closure2_slot2;
                    var3['event'] = var12;
                    var12 = var9.scope;
                    var13 = 'object';
                    var12 = typeof var12;
                    if(!(var13 !== var12)) { _fun0001_ip = 237; continue _fun0001 }
 229:
                    var12 = var9.scope;
                    _fun0001_ip = 262; continue _fun0001;
 237:
                    var13 = global;
                    var15 = var13.JSON;
                    var14 = var15.stringify;
                    var13 = var9.scope;
                    var12 = var14.bind(var15)(var13);
 262:
                    var3['scope'] = var12;
                    var12 = _closure2_slot1;
                    var13 = var12.application;
                    var13 = var13.id;
                    var3['application_id'] = var13;
                    var12 = var12.authorization;
                    var13 = var12.scopes;
                    var12 = var13.toString;
                    var12 = var12.bind(var13)();
                    var3['socket_scope'] = var12;
                    var3 = var10.bind(var11)(var7, var3);
                    var3 = var9.validation;
                    if(!(var8 != var3)) { _fun0001_ip = 401; continue _fun0001 }
 328:
                    var7 = _closure2_slot0;
                    var3 = var7.getJoi;
                    var3 = var3.bind(var7)();
                    SaveGenerator(address=346);
 344:
                    return var3;
 346:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 583; continue _fun0001 }
 355:
                    var12 = var3.validate;
                    var11 = _closure2_slot3;
                    var7 = var9.validation;
                    var10 = var7.bind(var9)(var3);
                    var7 = {};
                    var13 = false;
                    var7['convert'] = var13;
                    var7 = var12.bind(var3)(var11, var10, var7);
                    var7 = var7.error;
                    if(!(var8 == var7)) { _fun0001_ip = 515; continue _fun0001 }
 401:
                    var8 = var9.handler;
                    var7 = {};
                    var11 = _closure2_slot3;
                    var7['args'] = var11;
                    var10 = _closure2_slot1;
                    var7['socket'] = var10;
                    var7 = var8.bind(var9)(var7);
                    _closure4_slot0 = var7;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 5;
                    var7 = var9[var7];
                    var9 = var8.bind(var6)(var7);
                    var8 = var9.getInitialSubscriptionPayload;
                    var7 = _closure2_slot2;
                    var7 = var8.bind(var9)(var10, var7, var11);
                    _closure4_slot1 = var7;
                    var7 = global;
                    var8 = var7.Promise;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var18 = function(arg1) {
                        var1 = global;
                        var3 = var1.setImmediate;
                        var1 = undefined;
                        var2 = function() {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                                var8 = _closure2_slot0;
                                var7 = var8.addSubscription;
                                var12 = _closure2_slot1;
                                var11 = _closure2_slot2;
                                var10 = _closure2_slot3;
                                var9 = _closure4_slot0;
                                var13 = var8;
                                var3 = var13[var7](var12, var11, var10, var9, var8);
                                var4 = _closure4_slot1;
                                var3 = null;
                                if(!(var3 != var4)) { _fun0002_ip = 83; continue _fun0002 }
 49:
                                var5 = _closure2_slot0;
                                var4 = var5.dispatchToSubscriptions;
                                var3 = _closure2_slot2;
                                var2 = _closure4_slot1;
                                var1 = function(arg1) {
                                    var1 = arg1;
                                    var1 = var1.socket;
                                    var2 = var1.id;
                                    var1 = _closure2_slot1;
                                    var1 = var1.id;
                                    var1 = var2 === var1;
                                    return var1;
                                };
                                var1 = var4.bind(var5)(var3, var1, var2);
 83:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var3.bind(var1)(var2);
                        var3 = {};
                        var2 = _closure2_slot2;
                        var3['evt'] = var2;
                        var2 = arg1;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var19 = var7;
                    var5 = new var19[var8](var18, var17);
                    var5 = var5 instanceof Object ? var5 : var7;
                    return var5;
 515:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 2;
                    var5 = var8[var5];
                    var8 = var7.bind(var6)(var5);
                    var7 = {};
                    var4 = _closure1_slot5;
                    var4 = var4.INVALID_PAYLOAD;
                    var7['errorCode'] = var4;
                    var4 = var8.prototype;
                    var5 = Object.create(var4, {constructor: {value: var8}});
                    var17 = 'Invalid subscription parameters provided';
                    var19 = var5;
                    var18 = var7;
                    var4 = new var19[var8](var18, var17, var16);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
 583:
                    return var3;
 586:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 2;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = {};
                    var3 = _closure1_slot5;
                    var3 = var3.INVALID_EVENT;
                    var4['errorCode'] = var3;
                    var6 = _closure2_slot2;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'Invalid event: ';
                    var17 = var3.bind(var2)(var6);
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {constructor: {value: var5}});
                    var19 = var3;
                    var18 = var4;
                    var2 = new var19[var5](var18, var17, var16);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 679:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var7['handler'] = var10;
    var2[var9] = var7;
    var7 = var4.UNSUBSCRIBE;
    var4 = {};
    var8 = function handler(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var4 = var1.server;
            var3 = var1.socket;
            var5 = var1.evt;
            var2 = var1.args;
            var1 = var4.events;
            var6 = var1[var5];
            var1 = null;
            if(!(var1 != var6)) { _fun0003_ip = 65; continue _fun0003 }
 43:
            var1 = var4.removeSubscription;
            var1 = var1.bind(var4)(var3, var5, var2);
            var1 = {};
            var1['evt'] = var5;
            return var1;
 65:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = {};
            var1 = _closure1_slot5;
            var1 = var1.INVALID_EVENT;
            var3['errorCode'] = var1;
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'Invalid event: ';
            var8 = var2.bind(var1)(var5);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var10 = var2;
            var9 = var3;
            var1 = new var10[var4](var9, var8, var7);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var4['handler'] = var8;
    var2[var7] = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/subscriptions.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
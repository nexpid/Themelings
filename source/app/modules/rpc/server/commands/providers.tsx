// app/modules/rpc/server/commands/providers.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var10 = var7.bind(var1)(var4);
    var _closure1_slot4 = var10;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.RPC_AUTHENTICATED_SCOPE;
    var11 = var4.RPC_SCOPE_CONFIG;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsLocations;
    var _closure1_slot6 = var7;
    var7 = var4.ComponentActions;
    var _closure1_slot7 = var7;
    var4 = var4.PlatformTypes;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.AM_HARMONY_PRD_APPLICATION_ID;
    var7 = var4.AM_HARMONY_STG_APPLICATION_ID;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var4 = var9.RPCCommands;
    var9 = var9.RPCErrors;
    var _closure1_slot9 = var9;
    var9 = var2.Set;
    var2 = new Array(2);
    var2[0] = var12;
    var2[1] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var20 = var7;
    var19 = var2;
    var2 = new var20[var9](var19, var18);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot10 = var2;
    var2 = {};
    var9 = var4.GET_PROVIDER_ACCESS_TOKEN;
    var7 = {};
    var12 = {};
    var15 = var11.ANY;
    var14 = new Array(1);
    var14[0] = var13;
    var12[var15] = var14;
    var7['scope'] = var12;
    var12 = function validation(arg1) {
        var5 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var2 = var1.bind(var2)(var5);
        var1 = var2.required;
        var3 = var1.bind(var2)();
        var2 = var3.keys;
        var1 = {};
        var4 = var5.string;
        var6 = var4.bind(var5)();
        var4 = var6.required;
        var4 = var4.bind(var6)();
        var1['provider'] = var4;
        var4 = var5.string;
        var4 = var4.bind(var5)();
        var1['connection_redirect'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['validation'] = var12;
    var12 = function handler(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.socket;
            var1 = var1.args;
            var6 = var1.provider;
            var _closure2_slot0 = var6;
            var1 = var1.connection_redirect;
            var _closure2_slot1 = var1;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 7;
            var9 = var8[var5];
            var4 = undefined;
            var11 = var7.bind(var4)(var9);
            var10 = var11.validatePostMessageTransport;
            var9 = var3.transport;
            var9 = var10.bind(var11)(var9);
            var5 = var8[var5];
            var7 = var7.bind(var4)(var5);
            var5 = var7.validateApplication;
            var3 = var3.application;
            var7 = var5.bind(var7)(var3);
            var5 = _closure1_slot1;
            var3 = 8;
            var3 = var8[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.get;
            var5 = var3.bind(var5)(var6);
            var _closure2_slot2 = var5;
            var3 = null;
            if(!(var3 != var5)) { _fun0001_ip = 354; continue _fun0001 }
 143:
            var3 = _closure1_slot8;
            var3 = var3.AMAZON_MUSIC;
            if(!(var6 === var3)) { _fun0001_ip = 286; continue _fun0001 }
 160:
            var5 = _closure1_slot10;
            var3 = var5.has;
            var3 = var3.bind(var5)(var7);
            if(var3) { _fun0001_ip = 245; continue _fun0001 }
 177:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 9;
            var3 = var7[var3];
            var8 = var5.bind(var4)(var3);
            var7 = {};
            var3 = _closure1_slot9;
            var3 = var3.UNAUTHORIZED_FOR_APPLICATION;
            var7['errorCode'] = var3;
            var3 = var8.prototype;
            var5 = Object.create(var3, {constructor: {value: var8}});
            var12 = 'Command not available for this application';
            var14 = var5;
            var13 = var7;
            var3 = new var14[var8](var13, var12, var11);
            var3 = var3 instanceof Object ? var3 : var5;
            throw var3;
 245:
            var3 = global;
            var5 = var3.Promise;
            var2 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* (arg1, arg2) {
                    var2 = function handleConnectionsUpdate(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if(!(var1 != var2)) { _fun0002_ip = 91; continue _fun0002 }
 13:
                            var2 = arg1;
                            var4 = var2.accounts;
                            if(!(var1 == var4)) { _fun0002_ip = 30; continue _fun0002 }
 26:
                            var4 = new Array(0);
 30:
                            var3 = var4.find;
                            var2 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.type;
                                var1 = _closure2_slot2;
                                var1 = var1.type;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
                            if(!(var1 != var2)) { _fun0002_ip = 91; continue _fun0002 }
 53:
                            var3 = _closure3_slot0;
                            var1 = {};
                            var2 = var2.access_token;
                            var1['access_token'] = var2;
                            var2 = undefined;
                            var1 = var3.bind(var2)(var1);
                            var1 = _closure4_slot2;
                            var1 = var1.bind(var2)();
 91:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure4_slot0 = var2;
                    var2 = function handleConnectionsCallbackError() {
                        var3 = _closure1_slot4;
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 9;
                        var4 = var4[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var4);
                        var5 = {};
                        var2 = _closure1_slot9;
                        var2 = var2.OAUTH2_ERROR;
                        var5['errorCode'] = var2;
                        var8 = _closure2_slot0;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var7 = var2.concat;
                        var4 = 'OAuth2 setup for "';
                        var2 = '" failed';
                        var9 = var7.bind(var4)(var8, var2);
                        var4 = var6.prototype;
                        var4 = Object.create(var4, {constructor: {value: var6}});
                        var11 = var4;
                        var10 = var5;
                        var2 = new var11[var6](var10, var9, var8);
                        var2 = var2 instanceof Object ? var2 : var4;
                        var2 = var3.bind(var1)(var2);
                        var2 = _closure4_slot2;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var _closure4_slot1 = var2;
                    var2 = function cleanupPromise() {
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 10;
                        var2 = var6[var1];
                        var1 = undefined;
                        var8 = var4.bind(var1)(var2);
                        var7 = var8.unsubscribe;
                        var5 = _closure4_slot0;
                        var4 = 'USER_CONNECTIONS_UPDATE';
                        var4 = var7.bind(var8)(var4, var5);
                        var5 = _closure1_slot0;
                        var4 = 11;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var5 = var4.ComponentDispatch;
                        var4 = var5.unsubscribe;
                        var3 = _closure1_slot7;
                        var3 = var3.CONNECTIONS_CALLBACK_ERROR;
                        var2 = _closure4_slot1;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var _closure4_slot2 = var2;
                    var1 = function* anon_0_(arg1, arg2) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            var5 = arg1;
                            var2 = arg2;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=7);
                            if(var8) { _fun0003_ip = 414; continue _fun0003 }
 18:
                            var7 = var5;
                            var _closure5_slot0 = var5;
                            var3 = var2;
                            var _closure5_slot1 = var2;
                            var2 = undefined;
                            var4 = undefined;
                            var9 = undefined;
                            var11 = function handleConnectionsUpdate(arg1) {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                    var2 = _closure2_slot2;
                                    var1 = null;
                                    if(!(var1 != var2)) { _fun0004_ip = 88; continue _fun0004 }
 13:
                                    var2 = arg1;
                                    var4 = var2.accounts;
                                    if(!(var1 == var4)) { _fun0004_ip = 30; continue _fun0004 }
 26:
                                    var4 = new Array(0);
 30:
                                    var3 = var4.find;
                                    var2 = function(arg1) {
                                        var1 = arg1;
                                        var2 = var1.type;
                                        var1 = _closure2_slot2;
                                        var1 = var1.type;
                                        var1 = var2 === var1;
                                        return var1;
                                    };
                                    var2 = var3.bind(var4)(var2);
                                    if(!(var1 != var2)) { _fun0004_ip = 88; continue _fun0004 }
 53:
                                    var4 = _closure5_slot0;
                                    var3 = {};
                                    var2 = var2.access_token;
                                    var3['access_token'] = var2;
                                    var2 = undefined;
                                    var3 = var4.bind(var2)(var3);
                                    var1 = _closure5_slot4;
                                    var1 = var1.bind(var2)();
 88:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var _closure5_slot2 = var11;
                            var10 = function handleConnectionsCallbackError() {
                                var4 = _closure5_slot1;
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 9;
                                var5 = var5[var1];
                                var1 = undefined;
                                var7 = var6.bind(var1)(var5);
                                var6 = {};
                                var3 = _closure1_slot9;
                                var3 = var3.OAUTH2_ERROR;
                                var6['errorCode'] = var3;
                                var9 = _closure2_slot0;
                                var3 = global;
                                var3 = var3.HermesInternal;
                                var8 = var3.concat;
                                var5 = 'OAuth2 setup for "';
                                var3 = '" failed';
                                var10 = var8.bind(var5)(var9, var3);
                                var5 = var7.prototype;
                                var5 = Object.create(var5, {constructor: {value: var7}});
                                var12 = var5;
                                var11 = var6;
                                var3 = new var12[var7](var11, var10, var9);
                                var3 = var3 instanceof Object ? var3 : var5;
                                var3 = var4.bind(var1)(var3);
                                var2 = _closure5_slot4;
                                var2 = var2.bind(var1)();
                                return var1;
                            };
                            var _closure5_slot3 = var10;
                            var5 = function cleanupPromise() {
                                var4 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var1 = 10;
                                var2 = var6[var1];
                                var1 = undefined;
                                var8 = var4.bind(var1)(var2);
                                var7 = var8.unsubscribe;
                                var5 = _closure5_slot2;
                                var4 = 'USER_CONNECTIONS_UPDATE';
                                var4 = var7.bind(var8)(var4, var5);
                                var5 = _closure1_slot0;
                                var4 = 11;
                                var4 = var6[var4];
                                var4 = var5.bind(var1)(var4);
                                var5 = var4.ComponentDispatch;
                                var4 = var5.unsubscribe;
                                var3 = _closure1_slot7;
                                var3 = var3.CONNECTIONS_CALLBACK_ERROR;
                                var2 = _closure5_slot3;
                                var2 = var4.bind(var5)(var3, var2);
                                return var1;
                            };
                            var _closure5_slot4 = var5;
                            var14 = _closure1_slot5;
                            var13 = var14.getAccount;
                            var12 = _closure2_slot0;
                            var8 = null;
                            var12 = var13.bind(var14)(var8, var12);
                            var4 = var12;
                            if(!(var8 != var12)) { _fun0003_ip = 275; continue _fun0003 }
 109: // try_start_0
                            var13 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var12 = 13;
                            var12 = var14[var12];
                            var14 = var13.bind(var2)(var12);
                            var13 = var14.refreshAccessToken;
                            var12 = _closure2_slot2;
                            var12 = var12.type;
                            var4 = var4.id;
                            var4 = var13.bind(var14)(var12, var4);
                            SaveGenerator(address=159);
 157:
                            return var4;
 159:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=11);
                            if(var12) { _fun0003_ip = 260; continue _fun0003 }
 165:
                            var9 = var4;
                            if(!(var8 != var4)) { _fun0003_ip = 192; continue _fun0003 }
 172:
                            var8 = var7;
                            var7 = {};
                            var7['access_token'] = var9;
                            var7 = var8.bind(var2)(var7);
 187: // try_end0
                            _fun0003_ip = 411; continue _fun0003;
 192: // try_start_1
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 9;
                            var7 = var9[var7];
                            var12 = var8.bind(var2)(var7);
                            var9 = {};
                            var7 = _closure1_slot9;
                            var7 = var7.OAUTH2_ERROR;
                            var9['errorCode'] = var7;
                            var7 = var12.prototype;
                            var8 = Object.create(var7, {constructor: {value: var12}});
                            var15 = 'Refreshing access token did not return a new access token';
                            var17 = var8;
                            var16 = var9;
                            var7 = new var17[var12](var16, var15, var14);
                            var7 = var7 instanceof Object ? var7 : var8;
                            throw var7;
 260: // try_end1
                            return var4;
 263: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=3);
                            var3 = var3.bind(var2)(var4);
                            _fun0003_ip = 411; continue _fun0003;
 275:
                            var4 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var3 = 10;
                            var3 = var7[var3];
                            var9 = var4.bind(var2)(var3);
                            var8 = var9.subscribe;
                            var3 = 'USER_CONNECTIONS_UPDATE';
                            var3 = var8.bind(var9)(var3, var11);
                            var8 = _closure1_slot0;
                            var3 = 11;
                            var3 = var7[var3];
                            var3 = var8.bind(var2)(var3);
                            var9 = var3.ComponentDispatch;
                            var8 = var9.subscribe;
                            var3 = _closure1_slot7;
                            var3 = var3.CONNECTIONS_CALLBACK_ERROR;
                            var3 = var8.bind(var9)(var3, var10);
                            var3 = 12;
                            var3 = var7[var3];
                            var4 = var4.bind(var2)(var3);
                            var3 = {};
                            var7 = _closure2_slot2;
                            var7 = var7.type;
                            var3['platformType'] = var7;
                            var6 = _closure1_slot6;
                            var6 = var6.ACTIVITY_RPC;
                            var3['location'] = var6;
                            var5 = _closure2_slot1;
                            var3['successRedirect'] = var5;
                            var3 = var4.bind(var2)(var3);
 411:
                            return var2;
 414:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var13 = var2.bind(var4)();
            var3 = var5.prototype;
            var3 = Object.create(var3, {constructor: {value: var5}});
            var14 = var3;
            var2 = new var14[var5](var13, var12);
            var2 = var2 instanceof Object ? var2 : var3;
            return var2;
 286:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var7 = var3.bind(var4)(var2);
            var5 = {};
            var2 = _closure1_slot9;
            var2 = var2.UNAUTHORIZED_FOR_APPLICATION;
            var5['errorCode'] = var2;
            var2 = var7.prototype;
            var3 = Object.create(var2, {constructor: {value: var7}});
            var12 = 'Command not available for this application';
            var14 = var3;
            var13 = var5;
            var2 = new var14[var7](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
 354:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = {};
            var1 = _closure1_slot9;
            var1 = var1.INVALID_PROVIDER;
            var3['errorCode'] = var1;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var2 = 'Platform not found for provider "';
            var1 = '"';
            var12 = var5.bind(var2)(var6, var1);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var14 = var2;
            var13 = var3;
            var1 = new var14[var4](var13, var12, var11);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var7['handler'] = var12;
    var2[var9] = var7;
    var7 = var4.MAYBE_GET_PROVIDER_ACCESS_TOKEN;
    var4 = {};
    var9 = {};
    var12 = var11.ANY;
    var11 = new Array(1);
    var11[0] = var13;
    var9[var12] = var11;
    var4['scope'] = var9;
    var9 = function validation(arg1) {
        var5 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var2 = var1.bind(var2)(var5);
        var1 = var2.required;
        var3 = var1.bind(var2)();
        var2 = var3.keys;
        var1 = {};
        var4 = var5.string;
        var5 = var4.bind(var5)();
        var4 = var5.required;
        var4 = var4.bind(var5)();
        var1['provider'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['validation'] = var9;
    var9 = function* (arg1) {
        var1 = function* anon_0_(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                StartGenerator();
                var2 = arg1;
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                if(var3) { _fun0005_ip = 638; continue _fun0005 }
 13:
                var4 = var2.socket;
                var2 = var2.args;
                var8 = var2.provider;
                var6 = undefined;
                SaveGenerator(address=37);
 35:
                return var6;
 37:
                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                if(var3) { _fun0005_ip = 635; continue _fun0005 }
 46:
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 7;
                var10 = var7[var5];
                var12 = var9.bind(var6)(var10);
                var11 = var12.validatePostMessageTransport;
                var10 = var4.transport;
                var10 = var11.bind(var12)(var10);
                var5 = var7[var5];
                var9 = var9.bind(var6)(var5);
                var5 = var9.validateApplication;
                var4 = var4.application;
                var10 = var5.bind(var9)(var4);
                var5 = _closure1_slot1;
                var4 = 8;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.get;
                var7 = var4.bind(var5)(var8);
                var5 = null;
                if(!(var5 != var7)) { _fun0005_ip = 544; continue _fun0005 }
 146:
                var4 = _closure1_slot8;
                var4 = var4.AMAZON_MUSIC;
                if(!(var8 === var4)) { _fun0005_ip = 476; continue _fun0005 }
 163:
                var9 = _closure1_slot10;
                var4 = var9.has;
                var4 = var4.bind(var9)(var10);
                if(var4) { _fun0005_ip = 248; continue _fun0005 }
 180:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 9;
                var4 = var10[var4];
                var11 = var9.bind(var6)(var4);
                var10 = {};
                var4 = _closure1_slot9;
                var4 = var4.UNAUTHORIZED_FOR_APPLICATION;
                var10['errorCode'] = var4;
                var4 = var11.prototype;
                var9 = Object.create(var4, {constructor: {value: var11}});
                var13 = 'Command not available for this application';
                var15 = var9;
                var14 = var10;
                var4 = new var15[var11](var14, var13, var12);
                var4 = var4 instanceof Object ? var4 : var9;
                throw var4;
 248:
                var9 = _closure1_slot5;
                var4 = var9.getAccount;
                var4 = var4.bind(var9)(var5, var8);
                if(!(var5 != var4)) { _fun0005_ip = 408; continue _fun0005 }
 271:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 13;
                var9 = var11[var9];
                var10 = var10.bind(var6)(var9);
                var9 = var10.refreshAccessToken;
                var7 = var7.type;
                var4 = var4.id;
                var4 = var9.bind(var10)(var7, var4);
                SaveGenerator(address=317);
 315:
                return var4;
 317:
                ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                if(var7) { _fun0005_ip = 405; continue _fun0005 }
 323:
                if(!(var5 != var4)) { _fun0005_ip = 337; continue _fun0005 }
 327:
                var5 = {};
                var5['access_token'] = var4;
                return var5;
 337:
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 9;
                var5 = var9[var5];
                var10 = var7.bind(var6)(var5);
                var9 = {};
                var5 = _closure1_slot9;
                var5 = var5.OAUTH2_ERROR;
                var9['errorCode'] = var5;
                var5 = var10.prototype;
                var7 = Object.create(var5, {constructor: {value: var10}});
                var13 = 'Refreshing access token did not return a new access token';
                var15 = var7;
                var14 = var9;
                var5 = new var15[var10](var14, var13, var12);
                var5 = var5 instanceof Object ? var5 : var7;
                throw var5;
 405:
                return var4;
 408:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 9;
                var4 = var7[var4];
                var9 = var5.bind(var6)(var4);
                var7 = {};
                var4 = _closure1_slot9;
                var4 = var4.NO_CONNECTION_FOUND;
                var7['errorCode'] = var4;
                var4 = var9.prototype;
                var5 = Object.create(var4, {constructor: {value: var9}});
                var13 = 'No connection found';
                var15 = var5;
                var14 = var7;
                var4 = new var15[var9](var14, var13, var12);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
 476:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 9;
                var4 = var7[var4];
                var9 = var5.bind(var6)(var4);
                var7 = {};
                var4 = _closure1_slot9;
                var4 = var4.UNAUTHORIZED_FOR_APPLICATION;
                var7['errorCode'] = var4;
                var4 = var9.prototype;
                var5 = Object.create(var4, {constructor: {value: var9}});
                var13 = 'Command not available for this application';
                var15 = var5;
                var14 = var7;
                var4 = new var15[var9](var14, var13, var12);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
 544:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 9;
                var4 = var7[var4];
                var6 = var5.bind(var6)(var4);
                var5 = {};
                var3 = _closure1_slot9;
                var3 = var3.INVALID_PROVIDER;
                var5['errorCode'] = var3;
                var3 = global;
                var3 = var3.HermesInternal;
                var7 = var3.concat;
                var4 = 'Platform not found for provider "';
                var3 = '"';
                var13 = var7.bind(var4)(var8, var3);
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var15 = var4;
                var14 = var5;
                var3 = new var15[var6](var14, var13, var12);
                var3 = var3 instanceof Object ? var3 : var4;
                throw var3;
 635:
                return var2;
 638:
                return var1;
            }
        };
        var2 = var1.next;
        var2 = var2.bind(var1)();
        return var1;
    };
    var9 = var10.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var8 = function() {
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var4['handler'] = var8;
    var2[var7] = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/providers.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
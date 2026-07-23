// app/modules/oauth2/AuthorizedAppsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot9;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot9;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function tokensToAppTokensMap(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var8 = arg2;
            var1 = global;
            var3 = var1.Object;
            var2 = var3.fromEntries;
            var4 = null;
            var6 = var4 == var8;
            var5 = undefined;
            var1 = undefined;
            if(var6) { _fun0004_ip = 36; continue _fun0004 }
case 3:
            var7 = var8.map;
            var6 = function(arg1) {
                var1 = new Array(2);
                var2 = arg1;
                var1[0] = var2;
                var2 = null;
                var1[1] = var2;
                return var1;
            };
            var1 = var7.bind(var8)(var6);
case 36:
            if(!(var4 == var1)) { _fun0004_ip = 4; continue _fun0004 }
case 37:
            var1 = new Array(0);
case 4:
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot8;
            var2 = arg1;
            var4 = var3.bind(var5)(var2);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var6 = var3.value;
            var2 = var6.application;
            var2 = var2.id;
            var1[var2] = var6;
            var6 = var4.bind(var5)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0004_ip = 39; continue _fun0004 }
case 38:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var9 = function fetchAuthorizedApps() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var9;
    var1 = function _fetchAuthorizedApps() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var _closure4_slot0 = var8;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 5;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.get;
                    var4 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var7 = _closure1_slot6;
                    var7 = var7.OAUTH2_TOKENS;
                    var4['url'] = var7;
                    var7 = {};
                    var7['application_ids'] = var8;
                    var4['query'] = var7;
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.then;
                    var4 = function(arg1) {
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 4;
                        var1 = var3[var1];
                        var7 = undefined;
                        var3 = var2.bind(var7)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var5 = 'USER_AUTHORIZED_APPS_UPDATE';
                        var1['type'] = var5;
                        var6 = _closure4_slot0;
                        var5 = null;
                        var5 = var5 == var6;
                        var1['isFullFetch'] = var5;
                        var5 = _closure1_slot10;
                        var4 = arg1;
                        var4 = var4.body;
                        var4 = var5.bind(var7)(var4, var6);
                        var1['tokens'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 4;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'USER_AUTHORIZED_APPS_REQUEST_FAILED';
                            var1['type'] = var4;
                            var6 = _closure4_slot0;
                            var4 = null;
                            if(!(var4 != var6)) { _fun0006_ip = 42; continue _fun0006 }
case 4:
                            var4 = {};
                            var6 = 'partial';
                            var4['type'] = var6;
                            var5 = _closure4_slot0;
                            var4['applicationIds'] = var5;
                            _fun0006_ip = 43; continue _fun0006;
case 42:
                            var5 = {};
                            var6 = 'full';
                            var5['type'] = var6;
                            var4 = var5;
case 43:
                            var1['request'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        }
                    };
                    var2 = var5.bind(var6)(var4, var2);
                    SaveGenerator(address=119);
case 44:
                    return var2;
case 45:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                    return var3;
case 46:
                    return var2;
case 40:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var7 = var6[var2];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.FetchState;
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.Endpoints;
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.BatchInvocationManager;
    var2 = {};
    var7 = function predicate(arg1) {
        var4 = _closure1_slot4;
        var3 = var4.getFetchStateForApplication;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        var1 = _closure1_slot5;
        var1 = var1.FETCHING;
        var1 = var2 !== var1;
        return var1;
    };
    var2['predicate'] = var7;
    var7 = function onQueued(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_AUTHORIZED_APPS_REQUEST';
        var1['type'] = var4;
        var4 = {};
        var5 = 'partial';
        var4['type'] = var5;
        var5 = arg1;
        var4['applicationIds'] = var5;
        var1['request'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['onQueued'] = var7;
    var7 = function onCancelled(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_AUTHORIZED_APPS_REQUEST_CANCELLED';
        var1['type'] = var4;
        var4 = arg1;
        var1['applicationIds'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['onCancelled'] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var14 = var7;
    var13 = var9;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot7 = var2;
    var2 = {};
    var7 = function fetch(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot4;
            var2 = var4.getFetchState;
            var4 = var2.bind(var4)();
            var2 = _closure1_slot5;
            var2 = var2.FETCHING;
            if(!(var4 !== var2)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var2 = null;
            if(!(var2 == var3)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var4 = _closure1_slot7;
            var2 = var4.reset;
            var2 = var2.bind(var4)();
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 4;
            var4 = var4[var2];
            var2 = undefined;
            var6 = var5.bind(var2)(var4);
            var5 = var6.dispatch;
            var4 = {};
            var7 = 'USER_AUTHORIZED_APPS_REQUEST';
            var4['type'] = var7;
            var7 = {};
            var8 = 'full';
            var7['type'] = var8;
            var4['request'] = var7;
            var4 = var5.bind(var6)(var4);
            var1 = _closure1_slot11;
            var1 = var1.bind(var2)();
            _fun0007_ip = 48; continue _fun0007;
case 50:
            var2 = function queueAuthorizedApps(arg1) {
                var3 = _closure1_slot7;
                var2 = var3.queue;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var2 = var3.catch;
                var1 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var2 = arg1;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 3;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.BatchInvocationManagerResetError;
                        var3 = var2 instanceof var3;
                        if(var3) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                        throw var2;
case 52:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
case 48:
            var1 = undefined;
            return var1;
        }
    };
    var2['fetch'] = var7;
    var4 = function delete(arg1) {
        var1 = this;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 5;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var5 = var3.HTTP;
        var4 = var5.del;
        var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        var8 = _closure1_slot6;
        var7 = var8.OAUTH2_TOKEN;
        var6 = arg1;
        var6 = var7.bind(var8)(var6);
        var3['url'] = var6;
        var4 = var4.bind(var5)(var3);
        var3 = var4.then;
        var2 = function() {
            var2 = _closure2_slot0;
            var1 = var2.fetch;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['delete'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/oauth2/AuthorizedAppsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
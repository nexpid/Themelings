// app/stores/ConnectedAccountsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var2 = global;
    var11 = var2.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var8 = true;
    var9['value'] = var8;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var9);
    var1 = 0;
    var9 = var6[var1];
    var1 = undefined;
    var9 = var7.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 5;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 6;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.PlatformTypes;
    var11 = var2.Set;
    var10 = var9.CONTACTS;
    var9 = new Array(1);
    var9[0] = var10;
    var10 = var11.prototype;
    var10 = Object.create(var10, {constructor: {value: var11}});
    var15 = var10;
    var14 = var9;
    var9 = new var15[var11](var14, var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot9 = var9;
    var _closure1_slot10 = var8;
    var8 = new Array(0);
    var _closure1_slot11 = var8;
    var8 = new Array(0);
    var _closure1_slot12 = var8;
    var8 = {};
    var _closure1_slot13 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var15 = var8;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot14 = var2;
    var2 = {};
    var _closure1_slot15 = var2;
    var2 = {};
    var _closure1_slot16 = var2;
    var2 = function updateAccounts(arg1) {
        var4 = arg1;
        var3 = var4.filter;
        var2 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var5 = _closure1_slot9;
                var4 = var5.has;
                var1 = var2.type;
                var1 = var4.bind(var5)(var1);
                var1 = !var1;
                if(!var1) { _fun0002_ip = 69; continue _fun0002 }
 31:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.isSupported;
                var2 = var2.type;
                var1 = var3.bind(var4)(var2);
 69:
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var3 = var4.filter;
        var1 = function(arg1) {
            var3 = _closure1_slot9;
            var2 = var3.has;
            var1 = arg1;
            var1 = var1.type;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1);
        _closure1_slot12 = var1;
        var1 = false;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot17 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ConnectedAccountsStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'isJoining';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure1_slot13;
                var1 = arg1;
                var1 = var2[var1];
                if(var1) { _fun0004_ip = 19; continue _fun0004 }
 17:
                var1 = false;
 19:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(11);
        var1[0] = var5;
        var5 = {};
        var7 = 'joinErrorMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot16;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isFetching';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getAccounts';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getLocalAccounts';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getAccount';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var3 = _closure1_slot11;
            var2 = var3.find;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure3_slot0;
                    var1 = null;
                    var1 = var1 == var4;
                    if(var1) { _fun0005_ip = 32; continue _fun0005 }
 19:
                    var5 = var3.id;
                    var4 = _closure3_slot0;
                    var1 = var5 === var4;
 32:
                    if(!var1) { _fun0005_ip = 48; continue _fun0005 }
 35:
                    var3 = var3.type;
                    var2 = _closure3_slot1;
                    var1 = var3 === var2;
 48:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getLocalAccount';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = _closure1_slot12;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isSuggestedAccountType';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = _closure1_slot15;
                var1 = arg1;
                var1 = var2[var1];
                if(var1) { _fun0006_ip = 19; continue _fun0006 }
 17:
                var1 = false;
 19:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'addPendingAuthorizedState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot14;
            var2 = var3.add;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'deletePendingAuthorizedState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot14;
            var2 = var3.delete;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'hasPendingAuthorizedState';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot14;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[10] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ConnectedAccountsStore';
    var8['displayName'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen(arg1) {
        var1 = arg1;
        var3 = var1.connectedAccounts;
        var2 = var3.map;
        var1 = function(arg1) {
            var3 = _closure1_slot8;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = arg1;
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var3 = var2.bind(var3)(var1);
        var2 = _closure1_slot17;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleConnectionsUpdate(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var2 = var1.local;
            if(!var2) { _fun0007_ip = 24; continue _fun0007 }
 12:
            var3 = var1.accounts;
            var2 = null;
            if(!(var2 == var3)) { _fun0007_ip = 61; continue _fun0007 }
 24:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.fetch;
            var2 = var2.bind(var3)();
            _fun0007_ip = 98; continue _fun0007;
 61:
            var3 = var1.accounts;
            var2 = var3.map;
            var1 = function(arg1) {
                var2 = arg1;
                var3 = _closure1_slot8;
                var1 = {};
                var7 = var1;
                var6 = var2;
                var4 = copyDataProperties(var7, var6);
                var5 = var2.integrations;
                var4 = var5.map;
                var2 = function(arg1) {
                    var5 = arg1;
                    var1 = {};
                    var8 = var1;
                    var7 = var5;
                    var2 = copyDataProperties(var8, var7);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.fromGuildBasic;
                    var2 = {};
                    var7 = var5.guild;
                    var8 = var2;
                    var5 = copyDataProperties(var8, var7);
                    var6 = new Array(0);
                    var5 = 'features';
                    var2[var5] = var6;
                    var3 = var3.bind(var4)(var2);
                    var2 = 'guild';
                    var1[var2] = var3;
                    return var1;
                };
                var4 = var4.bind(var5)(var2);
                var2 = 'integrations';
                var1[var2] = var4;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var8 = var2;
                var7 = var1;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot17;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
 98:
            var1 = undefined;
            return var1;
        }
    };
    var2['USER_CONNECTIONS_UPDATE'] = var9;
    var9 = function handleJoining(arg1) {
        var1 = arg1;
        var3 = _closure1_slot13;
        var2 = var1.integrationId;
        var1 = var1.joining;
        var3[var2] = var1;
        var1 = undefined;
        return var1;
    };
    var2['USER_CONNECTIONS_INTEGRATION_JOINING'] = var9;
    var9 = function handleUserConnectionUpdate(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var3 = var2.platformType;
            var _closure2_slot0 = var3;
            var3 = var2.id;
            var _closure2_slot1 = var3;
            var4 = var2.revoked;
            var2 = var2.accessToken;
            var5 = _closure1_slot11;
            var3 = var5.find;
            var1 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = arg1;
                    var4 = var3.id;
                    var1 = _closure2_slot1;
                    var1 = var4 === var1;
                    if(!var1) { _fun0009_ip = 35; continue _fun0009 }
 22:
                    var3 = var3.type;
                    var2 = _closure2_slot0;
                    var1 = var3 === var2;
 35:
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1);
            var3 = null;
            if(!(var3 != var1)) { _fun0008_ip = 89; continue _fun0008 }
 65:
            if(!(var3 != var4)) { _fun0008_ip = 75; continue _fun0008 }
 69:
            var1['revoked'] = var4;
 75:
            if(!(var3 != var2)) { _fun0008_ip = 85; continue _fun0008 }
 79:
            var1['accessToken'] = var2;
 85:
            var1 = undefined;
            return var1;
 89:
            var1 = false;
            return var1;
        }
    };
    var2['USER_CONNECTION_UPDATE'] = var9;
    var9 = function handleJoiningError(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var5 = arg1;
            var4 = _closure1_slot16;
            var3 = var5.integrationId;
            var6 = var5.error;
            var2 = '';
            var1 = undefined;
            if(!(var1 !== var6)) { _fun0010_ip = 36; continue _fun0010 }
 31:
            var2 = var5.error;
 36:
            var4[var3] = var2;
            return var1;
        }
    };
    var2['USER_CONNECTIONS_INTEGRATION_JOINING_ERROR'] = var9;
    var4 = function handleUserConnectionsCallback(arg1) {
        var1 = arg1;
        var8 = var1.code;
        var7 = var1.state;
        var6 = var1.openid_params;
        var5 = var1.provider;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.callback;
        var2 = {};
        var2['code'] = var8;
        var2['state'] = var7;
        var2['openid_params'] = var6;
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var2['USER_CONNECTIONS_CALLBACK'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/ConnectedAccountsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
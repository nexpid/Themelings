// app/actions/ConnectedAccountsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var7 = function callback(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var8 = arguments[2];
            var3 = undefined;
            if(!(var8 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = false;
case 2:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 4;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var3 = var1.HTTP;
            var2 = var3.post;
            var1 = {};
            var6 = _closure1_slot6;
            var4 = var6.CONNECTIONS_CALLBACK;
            var4 = var4.bind(var6)(var7);
            var1['url'] = var4;
            var4 = {};
            var9 = arg2;
            var10 = var4;
            var6 = copyDataProperties(var10, var9);
            var6 = 'insecure';
            var4[var6] = var8;
            var6 = _closure1_slot7;
            var5 = var6.has;
            var6 = var5.bind(var6)(var7);
            var5 = 'friend_sync';
            var4[var5] = var6;
            var1['body'] = var4;
            var4 = true;
            var1['oldFormErrors'] = var4;
            var4 = false;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot10 = var7;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.AbortCodes;
    var _closure1_slot5 = var9;
    var9 = var2.Endpoints;
    var _closure1_slot6 = var9;
    var9 = var2.FRIEND_SYNC_PLATFORM_TYPES;
    var _closure1_slot7 = var9;
    var2 = var2.AnalyticEvents;
    var _closure1_slot8 = var2;
    var2 = 3;
    var2 = var6[var2];
    var9 = var8.bind(var1)(var2);
    var2 = var9.prototype;
    var8 = Object.create(var2, {constructor: {value: var9}});
    var13 = 'ConnectedAccounts';
    var14 = var8;
    var2 = new var14[var9](var13, var12);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot9 = var2;
    var2 = {};
    var8 = function fetch() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        var5 = _closure1_slot6;
        var5 = var5.CONNECTIONS;
        var2['url'] = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {'type': 'USER_CONNECTIONS_UPDATE', 'local': true};
            var4 = arg1;
            var4 = var4.body;
            var1['accounts'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {'type': 'USER_CONNECTIONS_UPDATE', 'local': true};
            var4 = new Array(0);
            var1['accounts'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['fetch'] = var8;
    var8 = function authorize(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = {};
case 4:
            var4 = var3.location;
            var _closure2_slot1 = var4;
            var4 = var3.twoWayLinkType;
            var _closure2_slot2 = var4;
            var4 = var3.userCode;
            var _closure2_slot3 = var4;
            var4 = var3.twoWayLink;
            var _closure2_slot4 = var4;
            var4 = var3.successRedirect;
            var _closure2_slot5 = var4;
            var3 = var3.handle;
            var _closure2_slot6 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 6;
                        var2 = var5[var2];
                        var7 = undefined;
                        var9 = var4.bind(var7)(var2);
                        var8 = var9.track;
                        var2 = _closure1_slot8;
                        var5 = var2.CONNECTED_ACCOUNT_INITIATED;
                        var4 = {};
                        var6 = _closure2_slot0;
                        var4['platform_type'] = var6;
                        var10 = _closure2_slot1;
                        var4['location'] = var10;
                        var4 = var8.bind(var9)(var5, var4);
                        var5 = _closure1_slot6;
                        var4 = var5.CONNECTIONS_AUTHORIZE;
                        var5 = var4.bind(var5)(var6);
                        var8 = global;
                        var4 = var8.URLSearchParams;
                        var6 = var4.prototype;
                        var6 = Object.create(var6, {constructor: {value: var4}});
                        var14 = var6;
                        var4 = new var14[var4](var13);
                        var6 = var4 instanceof Object ? var4 : var6;
                        var9 = _closure2_slot3;
                        var4 = null;
                        if(!(var4 != var9)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var11 = var6.append;
                        var10 = _closure2_slot3;
                        var9 = 'two_way_user_code';
                        var9 = var11.bind(var6)(var9, var10);
case 8:
                        var9 = _closure2_slot5;
                        if(!(var4 != var9)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var11 = var6.append;
                        var10 = _closure2_slot5;
                        var9 = 'success_redirect';
                        var9 = var11.bind(var6)(var9, var10);
case 10:
                        var9 = _closure2_slot2;
                        if(!(var4 == var9)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                        var9 = _closure2_slot4;
                        if(!(var4 != var9)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                        var10 = var6.append;
                        var9 = var8.String;
                        var8 = _closure2_slot4;
                        var9 = var9.bind(var7)(var8);
                        var8 = 'two_way_link';
                        var8 = var10.bind(var6)(var8, var9);
                        _fun0003_ip = 14; continue _fun0003;
case 12:
                        var10 = var6.append;
                        var9 = _closure2_slot2;
                        var8 = 'two_way_link_type';
                        var8 = var10.bind(var6)(var8, var9);
                        var10 = var6.append;
                        var9 = 'two_way_link';
                        var8 = 'true';
                        var8 = var10.bind(var6)(var9, var8);
case 14:
                        var8 = _closure2_slot6;
                        if(!(var4 != var8)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                        var9 = var6.append;
                        var8 = _closure2_slot6;
                        var2 = 'handle';
                        var2 = var9.bind(var6)(var2, var8);
case 16:
                        var2 = '?';
                        var5 = var5 + var2;
                        var2 = var6.toString;
                        var2 = var2.bind(var6)();
                        var8 = var5 + var2;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 4;
                        var2 = var6[var2];
                        var2 = var5.bind(var7)(var2);
                        var6 = var2.HTTP;
                        var5 = var6.get;
                        var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                        var2['url'] = var8;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address=382);
case 18:
                        return var2;
case 19:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 7;
                        var5 = var8[var5];
                        var7 = var6.bind(var7)(var5);
                        var6 = var7.getCallbackParamsFromURL;
                        var5 = var2.body;
                        var8 = var5.url;
                        var9 = var4 != var8;
                        var5 = '';
                        if(!var9) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                        var5 = var8;
case 22:
                        var5 = var6.bind(var7)(var5);
                        var5 = var5.state;
                        if(!(var4 != var5)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                        var4 = _closure1_slot4;
                        var3 = var4.addPendingAuthorizedState;
                        var3 = var3.bind(var4)(var5);
case 24:
                        return var2;
case 20:
                        return var2;
case 6:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var2['authorize'] = var8;
    var2['callback'] = var7;
    var7 = function connect(arg1, arg2, arg3, arg4, arg5) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var8 = arg1;
            var7 = arg3;
            var11 = arg5;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var10 = undefined;
            var3 = var2.bind(var10)(var1);
            var2 = var3.put;
            var1 = {};
            var9 = _closure1_slot6;
            var5 = var9.CONNECTION;
            var4 = arg2;
            var4 = var5.bind(var9)(var8, var4);
            var1['url'] = var4;
            var4 = {};
            var4['name'] = var7;
            var9 = null;
            var12 = var9 == var11;
            var5 = undefined;
            if(var12) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var5 = var11.friend_sync;
case 26:
            if(!(var9 == var5)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var11 = _closure1_slot7;
            var9 = var11.has;
            var5 = var9.bind(var11)(var8);
case 28:
            var4['friend_sync'] = var5;
            var1['body'] = var4;
            var4 = {};
            var5 = arg4;
            var4['location'] = var5;
            var1['context'] = var4;
            var4 = true;
            var1['oldFormErrors'] = var4;
            var4 = {};
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 9;
            var5 = var11[var5];
            var5 = var9.bind(var10)(var5);
            var5 = var5.NetworkActionNames;
            var5 = var5.USER_CONNECTIONS_UPDATE;
            var4['event'] = var5;
            var5 = {};
            var5['name'] = var7;
            var7 = _closure1_slot7;
            var6 = var7.has;
            var6 = var6.bind(var7)(var8);
            var5['friend_sync'] = var6;
            var4['properties'] = var5;
            var1['trackedActionData'] = var4;
            var4 = false;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['connect'] = var7;
    var7 = function disconnect(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        var7 = _closure1_slot6;
        var6 = var7.CONNECTION;
        var5 = arg1;
        var4 = arg2;
        var4 = var6.bind(var7)(var5, var4);
        var1['url'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['disconnect'] = var7;
    var7 = function refresh(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        var7 = _closure1_slot6;
        var6 = var7.CONNECTION_REFRESH;
        var5 = arg1;
        var4 = arg2;
        var4 = var6.bind(var7)(var5, var4);
        var1['url'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['refresh'] = var7;
    var7 = function setVisibility(arg1, arg2, arg3) {
        var5 = this;
        var4 = var5.update;
        var3 = {};
        var2 = 1;
        var1 = arg3;
        var1 = var2 === var1;
        var3['visibility'] = var1;
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var5)(var2, var1, var3);
        return var1;
    };
    var2['setVisibility'] = var7;
    var7 = function setMetadataVisibility(arg1, arg2, arg3) {
        var5 = this;
        var4 = var5.update;
        var3 = {};
        var2 = 1;
        var1 = arg3;
        var1 = var2 === var1;
        var3['metadata_visibility'] = var1;
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var5)(var2, var1, var3);
        return var1;
    };
    var2['setMetadataVisibility'] = var7;
    var7 = function setFriendSync(arg1, arg2, arg3) {
        var5 = this;
        var4 = var5.update;
        var3 = {};
        var1 = arg3;
        var3['friend_sync'] = var1;
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var5)(var2, var1, var3);
        return var1;
    };
    var2['setFriendSync'] = var7;
    var7 = function setShowActivity(arg1, arg2, arg3) {
        var5 = this;
        var4 = var5.update;
        var3 = {};
        var1 = arg3;
        var3['show_activity'] = var1;
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var5)(var2, var1, var3);
        return var1;
    };
    var2['setShowActivity'] = var7;
    var7 = function update(arg1, arg2, arg3) {
        var6 = arg3;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 8;
        var1 = var9[var1];
        var8 = undefined;
        var3 = var2.bind(var8)(var1);
        var2 = var3.patch;
        var1 = {};
        var11 = _closure1_slot6;
        var10 = var11.CONNECTION;
        var7 = arg1;
        var4 = arg2;
        var4 = var10.bind(var11)(var7, var4);
        var1['url'] = var4;
        var1['body'] = var6;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var4 = {};
        var7 = _closure1_slot0;
        var5 = 9;
        var5 = var9[var5];
        var5 = var7.bind(var8)(var5);
        var5 = var5.NetworkActionNames;
        var5 = var5.USER_CONNECTIONS_UPDATE;
        var4['event'] = var5;
        var5 = {};
        var13 = var5;
        var12 = var6;
        var6 = copyDataProperties(var13, var12);
        var4['properties'] = var5;
        var1['trackedActionData'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['update'] = var7;
    var7 = function joinServer(arg1, arg2) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 5;
        var3 = var5[var1];
        var1 = undefined;
        var7 = var4.bind(var1)(var3);
        var4 = var7.dispatch;
        var3 = {'type': 'USER_CONNECTIONS_INTEGRATION_JOINING', 'integrationId': null, 'joining': true};
        var3['integrationId'] = var8;
        var3 = var4.bind(var7)(var3);
        var4 = _closure1_slot0;
        var3 = 4;
        var3 = var5[var3];
        var3 = var4.bind(var1)(var3);
        var5 = var3.HTTP;
        var4 = var5.post;
        var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        var7 = _closure1_slot6;
        var6 = var7.INTEGRATION_JOIN;
        var6 = var6.bind(var7)(var8);
        var3['url'] = var6;
        var2 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var7 = arg1;
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var5 = 5;
                var2 = var1[var5];
                var1 = undefined;
                var8 = var4.bind(var1)(var2);
                var6 = var8.dispatch;
                var4 = {'type': 'USER_CONNECTIONS_INTEGRATION_JOINING', 'integrationId': null, 'joining': false};
                var9 = _closure2_slot0;
                var4['integrationId'] = var9;
                var4 = var6.bind(var8)(var4);
                var4 = var7.ok;
                if(var4) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var5 = var4.bind(var1)(var3);
                var4 = var5.dispatch;
                var3 = {};
                var6 = 'USER_CONNECTIONS_INTEGRATION_JOINING_ERROR';
                var3['type'] = var6;
                var6 = _closure2_slot0;
                var3['integrationId'] = var6;
                var8 = var7.hasErr;
                var6 = undefined;
                if(var8) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var7 = var7.body;
                var6 = var7.message;
case 32:
                var3['error'] = var6;
                var3 = var4.bind(var5)(var3);
                var4 = _closure2_slot1;
                var3 = null;
                if(!(var3 != var4)) { _fun0005_ip = 30; continue _fun0005 }
case 34:
                var2 = _closure2_slot1;
                var2 = var2.bind(var1)();
case 30:
                return var1;
            }
        };
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['joinServer'] = var7;
    var7 = function refreshAccessToken(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 35; continue _fun0006 }
case 7: // try_start_0
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var7 = undefined;
                    var3 = var4.bind(var7)(var3);
                    var6 = var3.HTTP;
                    var4 = var6.get;
                    var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var12 = _closure1_slot6;
                    var11 = var12.CONNECTION_ACCESS_TOKEN;
                    var10 = _closure2_slot0;
                    var9 = _closure2_slot1;
                    var9 = var11.bind(var12)(var10, var9);
                    var3['url'] = var9;
                    var3 = var4.bind(var6)(var3);
                    SaveGenerator(address=97);
case 36:
                    return var3;
case 37:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                    var4 = var3.body;
                    var4 = var4.access_token;
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var5 = 5;
                    var5 = var9[var5];
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var9 = 'USER_CONNECTION_UPDATE';
                    var5['type'] = var9;
                    var9 = _closure2_slot0;
                    var5['platformType'] = var9;
                    var8 = _closure2_slot1;
                    var5['id'] = var8;
                    var5['accessToken'] = var4;
                    var5 = var6.bind(var7)(var5);
case 40: // try_end0
                    return var4;
case 38:
                    return var3;
case 41: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var2 = var3;
                    var3 = var3.body;
                    var5 = var3.code;
                    var4 = _closure1_slot5;
                    var4 = var4.CONNECTION_REVOKED;
                    if(!(var5 === var4)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 5;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'USER_CONNECTION_UPDATE';
                    var3['type'] = var6;
                    var7 = _closure2_slot0;
                    var3['platformType'] = var7;
                    var6 = _closure2_slot1;
                    var3['id'] = var6;
                    var6 = true;
                    var3['revoked'] = var6;
                    var3 = var4.bind(var5)(var3);
case 42:
                    throw var2;
case 35:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['refreshAccessToken'] = var7;
    var7 = function linkDispatchAuthCallback(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var6 = _closure1_slot6;
        var5 = var6.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var1['url'] = var4;
        var4 = {};
        var7 = arg2;
        var8 = var4;
        var5 = copyDataProperties(var8, var7);
        var1['body'] = var4;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['linkDispatchAuthCallback'] = var7;
    var7 = function completeTwoWayLink(arg1, arg2, arg3, arg4, arg5) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = arg4;
        var _closure2_slot3 = var2;
        var2 = arg5;
        var _closure2_slot4 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 44; continue _fun0007 }
case 7:
                    var2 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                    var5 = _closure1_slot9;
                    var3 = var5.error;
                    var2 = 'Two-way link: missing authorize location';
                    var2 = var3.bind(var5)(var2);
                    _fun0007_ip = 47; continue _fun0007;
case 45:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 7;
                    var3 = var5[var3];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var3);
                    var7 = var8.getCallbackParamsFromURL;
                    var3 = _closure2_slot1;
                    var3 = var7.bind(var8)(var3);
                    var7 = var3.code;
                    var10 = var3.error;
                    var3 = var3.errorDescription;
                    if(!(var4 != var10)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                    var9 = _closure1_slot9;
                    var8 = var9.error;
                    var4 = {};
                    var4['error'] = var10;
                    var4['errorDescription'] = var3;
                    var3 = 'Two-way link: missing authorize code';
                    var3 = var8.bind(var9)(var3, var4);
case 47:
                    var3 = undefined;
                    return var3;
case 48:
                    var4 = _closure1_slot10;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var8 = _closure2_slot2;
                    var2['code'] = var8;
                    var8 = _closure2_slot3;
                    var2['state'] = var8;
                    var2['two_way_link_code'] = var7;
                    var6 = _closure2_slot4;
                    var2['token_redirect_uri'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    SaveGenerator(address=197);
case 50:
                    return var2;
case 51:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                    return var2;
case 52:
                    return var2;
case 44:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['completeTwoWayLink'] = var7;
    var7 = function sessionHandoff(arg1, arg2, arg3, arg4, arg5) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var6 = _closure1_slot6;
        var5 = var6.CONNECTIONS_SESSION_HANDOFF;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var1['url'] = var4;
        var4 = {};
        var5 = arg2;
        var4['state'] = var5;
        var5 = arg3;
        var4['code'] = var5;
        var5 = arg4;
        var4['openid_params'] = var5;
        var5 = arg5;
        var4['iss'] = var5;
        var1['body'] = var4;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['sessionHandoff'] = var7;
    var4 = function getHandoffStatus(arg1, arg2) {
        var5 = arg2;
        var2 = global;
        var1 = var2.URLSearchParams;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var11 = var3;
        var1 = new var11[var1](var10);
        var4 = var1 instanceof Object ? var1 : var3;
        var3 = var4.append;
        var1 = 'state';
        var1 = var3.bind(var4)(var1, var5);
        var7 = _closure1_slot6;
        var6 = var7.CONNECTIONS_SESSION_HANDOFF;
        var3 = arg1;
        var7 = var6.bind(var7)(var3);
        var3 = var4.toString;
        var6 = var3.bind(var4)();
        var2 = var2.HermesInternal;
        var4 = var2.concat;
        var3 = '';
        var2 = '?';
        var4 = var4.bind(var3)(var7, var2, var6);
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {};
        var1['url'] = var4;
        var4 = {};
        var4['state'] = var5;
        var1['body'] = var4;
        var4 = true;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['getHandoffStatus'] = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/ConnectedAccountsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
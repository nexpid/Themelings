// app/modules/oauth2/actions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function getLocationContextServer() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot5;
            var1 = var2.getChannelId;
            var4 = var1.bind(var2)();
            var2 = _closure1_slot4;
            var1 = var2.getBasicChannel;
            var5 = var1.bind(var2)(var4);
            var1 = {};
            var4 = null;
            var6 = var4 == var5;
            var8 = undefined;
            if(var6) { _fun0001_ip = 50; continue _fun0001 }
 45:
            var8 = var5.guild_id;
 50:
            var9 = var4 != var8;
            var6 = '10000';
            var7 = var6;
            if(!var9) { _fun0001_ip = 69; continue _fun0001 }
 66:
            var7 = var8;
 69:
            var1['guild_id'] = var7;
            var8 = var4 == var5;
            var7 = undefined;
            if(var8) { _fun0001_ip = 87; continue _fun0001 }
 82:
            var7 = var5.id;
 87:
            var8 = var4 != var7;
            if(!var8) { _fun0001_ip = 97; continue _fun0001 }
 94:
            var6 = var7;
 97:
            var1['channel_id'] = var6;
            var6 = var4 == var5;
            var2 = undefined;
            if(var6) { _fun0001_ip = 115; continue _fun0001 }
 110:
            var2 = var5.type;
 115:
            if(!(var4 == var2)) { _fun0001_ip = 129; continue _fun0001 }
 119:
            var3 = _closure1_slot6;
            var2 = var3.UNKNOWN;
 129:
            var1['channel_type'] = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = function _authorize() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 383; continue _fun0002 }
 13:
                    var12 = var2.authorize;
                    var22 = var2.clientId;
                    var19 = var2.scopes;
                    var21 = var2.responseType;
                    var20 = var2.redirectUri;
                    var18 = var2.codeChallenge;
                    var17 = var2.codeChallengeMethod;
                    var16 = var2.state;
                    var13 = var2.permissions;
                    var14 = var2.guildId;
                    var15 = var2.channelId;
                    var11 = var2.integrationType;
                    var10 = var2.nonce;
                    var9 = var2.dmSettings;
                    var8 = undefined;
                    SaveGenerator(address=100);
 98:
                    return var8;
 100:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 380; continue _fun0002 }
 109:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 4;
                    var3 = var5[var3];
                    var3 = var4.bind(var8)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {};
                    var6 = _closure1_slot7;
                    var6 = var6.OAUTH2_AUTHORIZE;
                    var3['url'] = var6;
                    var6 = {};
                    var6['client_id'] = var22;
                    var6['response_type'] = var21;
                    var6['redirect_uri'] = var20;
                    var6['code_challenge'] = var18;
                    var6['code_challenge_method'] = var17;
                    var18 = var19.join;
                    var17 = ' ';
                    var17 = var18.bind(var19)(var17);
                    var6['scope'] = var17;
                    var6['state'] = var16;
                    var6['nonce'] = var10;
                    var3['query'] = var6;
                    var6 = {};
                    var6['guild_id'] = var14;
                    var10 = null;
                    var17 = var10 != var14;
                    var16 = undefined;
                    if(!var17) { _fun0002_ip = 248; continue _fun0002 }
 236:
                    var17 = var10 != var15;
                    var16 = undefined;
                    if(!var17) { _fun0002_ip = 248; continue _fun0002 }
 245:
                    var16 = var15;
 248:
                    var6['webhook_channel_id'] = var16;
                    var16 = var10 == var14;
                    var14 = undefined;
                    if(!var16) { _fun0002_ip = 274; continue _fun0002 }
 262:
                    var16 = var10 != var15;
                    var14 = undefined;
                    if(!var16) { _fun0002_ip = 274; continue _fun0002 }
 271:
                    var14 = var15;
 274:
                    var6['channel_id'] = var14;
                    var6['permissions'] = var13;
                    var6['authorize'] = var12;
                    var6['integration_type'] = var11;
                    var7 = _closure1_slot8;
                    var7 = var7.bind(var8)();
                    var6['location_context'] = var7;
                    var7 = {};
                    var10 = var10 == var9;
                    var8 = undefined;
                    if(var10) { _fun0002_ip = 325; continue _fun0002 }
 319:
                    var8 = var9.allowMobilePush;
 325:
                    var7['allow_mobile_push'] = var8;
                    var6['dm_settings'] = var7;
                    var3['body'] = var6;
                    var6 = true;
                    var3['oldFormErrors'] = var6;
                    var6 = false;
                    var3['rejectWithError'] = var6;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=363);
 361:
                    return var3;
 363:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 377; continue _fun0002 }
 369:
                    var4 = var3.body;
                    return var4;
 377:
                    return var3;
 380:
                    return var2;
 383:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _fetchAuthorization() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 251; continue _fun0003 }
 13:
                    var16 = var2.clientId;
                    var13 = var2.scopes;
                    var15 = var2.responseType;
                    var14 = var2.redirectUri;
                    var12 = var2.codeChallenge;
                    var11 = var2.codeChallengeMethod;
                    var10 = var2.state;
                    var9 = var2.integrationType;
                    var8 = var2.nonce;
                    var6 = var2.signal;
                    var5 = undefined;
                    SaveGenerator(address=78);
 76:
                    return var5;
 78:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 248; continue _fun0003 }
 87:
                    var4 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var3 = 4;
                    var3 = var17[var3];
                    var3 = var4.bind(var5)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.get;
                    var3 = {'url': null, 'query': null, 'signal': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': false};
                    var7 = _closure1_slot7;
                    var7 = var7.OAUTH2_AUTHORIZE;
                    var3['url'] = var7;
                    var7 = {};
                    var7['client_id'] = var16;
                    var7['response_type'] = var15;
                    var7['redirect_uri'] = var14;
                    var7['code_challenge'] = var12;
                    var7['code_challenge_method'] = var11;
                    var12 = var13.join;
                    var11 = ' ';
                    var11 = var12.bind(var13)(var11);
                    var7['scope'] = var11;
                    var7['state'] = var10;
                    var7['integration_type'] = var9;
                    var7['nonce'] = var8;
                    var3['query'] = var7;
                    var3['signal'] = var6;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=231);
 229:
                    return var3;
 231:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 245; continue _fun0003 }
 237:
                    var4 = var3.body;
                    return var4;
 245:
                    return var3;
 248:
                    return var2;
 251:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function _startSamsungAuthorization() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4, arg5) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var9 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 157; continue _fun0004 }
 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.get;
                    var2 = {};
                    var6 = _closure1_slot7;
                    var6 = var6.OAUTH2_AUTHORIZE_SAMSUNG;
                    var2['url'] = var6;
                    var6 = {};
                    var7 = arg1;
                    var6['client_id'] = var7;
                    var7 = arg5;
                    var6['state'] = var7;
                    var7 = arg3;
                    var6['response_type'] = var7;
                    var7 = arg4;
                    var6['redirect_uri'] = var7;
                    var7 = 'consent';
                    var6['prompt'] = var7;
                    var8 = var9.join;
                    var7 = ' ';
                    var7 = var8.bind(var9)(var7);
                    var6['scope'] = var7;
                    var2['query'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=145);
 143:
                    return var2;
 145:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 154; continue _fun0004 }
 151:
                    return var3;
 154:
                    return var2;
 157:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function _fetchChannels() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 111; continue _fun0005 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var5 = _closure1_slot7;
                    var5 = var5.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS;
                    var2['url'] = var5;
                    var5 = {};
                    var6 = arg1;
                    var5['guild_id'] = var6;
                    var2['query'] = var5;
                    var5 = true;
                    var2['oldFormErrors'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=94);
 92:
                    return var2;
 94:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 108; continue _fun0005 }
 100:
                    var3 = var2.body;
                    return var3;
 108:
                    return var2;
 111:
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
    var1 = function _verifyUserCode() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 100; continue _fun0006 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot7;
                    var5 = var5.OAUTH2_DEVICE_VERIFY;
                    var2['url'] = var5;
                    var5 = {};
                    var6 = arg1;
                    var5['user_code'] = var6;
                    var2['body'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=88);
 86:
                    return var2;
 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 97; continue _fun0006 }
 94:
                    return var2;
 97:
                    return var2;
 100:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _finishUserCode() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 108; continue _fun0007 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot7;
                    var5 = var5.OAUTH2_DEVICE_FINISH;
                    var2['url'] = var5;
                    var5 = {};
                    var6 = arg1;
                    var5['user_code'] = var6;
                    var6 = arg2;
                    var5['result'] = var6;
                    var2['body'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=96);
 94:
                    return var2;
 96:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 105; continue _fun0007 }
 102:
                    return var2;
 105:
                    return var2;
 108:
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
    var1 = function _finishUserCodeTwoWayLinkError() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 132; continue _fun0008 }
 10:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot7;
                    var5 = var5.OAUTH2_DEVICE_FINISH;
                    var2['url'] = var5;
                    var5 = {};
                    var6 = arg1;
                    var5['user_code'] = var6;
                    var6 = 'two_way_link_error';
                    var5['result'] = var6;
                    var6 = arg2;
                    var5['error_code'] = var6;
                    var6 = arg3;
                    var5['error_source'] = var6;
                    var2['body'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=120);
 118:
                    return var2;
 120:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 129; continue _fun0008 }
 126:
                    return var2;
 129:
                    return var2;
 132:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ChannelTypes;
    var _closure1_slot6 = var8;
    var5 = var5.Endpoints;
    var _closure1_slot7 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/oauth2/actions.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getLocationContextServer'] = var4;
    var4 = function acceptWhitelist(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot7;
        var4 = var4.OAUTH2_WHITELIST_ACCEPT;
        var1['url'] = var4;
        var4 = {};
        var5 = arg1;
        var4['token'] = var5;
        var1['query'] = var4;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['acceptWhitelist'] = var4;
    var4 = function authorize() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['authorize'] = var4;
    var4 = function fetchAuthorization() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchAuthorization'] = var4;
    var4 = function startSamsungAuthorization() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['startSamsungAuthorization'] = var4;
    var4 = function fetchChannels() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchChannels'] = var4;
    var4 = function logoutWithRedirect(arg1, arg2) {
        var2 = arg1;
        var5 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 5;
        var4 = var7[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.logout;
        var6 = _closure1_slot0;
        var3 = 6;
        var3 = var7[var3];
        var7 = var6.bind(var1)(var3);
        var6 = var7.getLoginPath;
        var3 = var2.pathname;
        var2 = var2.search;
        var3 = var3 + var2;
        var2 = false;
        var3 = var6.bind(var7)(var3, var2);
        var2 = arg2;
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['logoutWithRedirect'] = var4;
    var4 = function verifyUserCode() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['verifyUserCode'] = var4;
    var4 = function finishUserCode() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['finishUserCode'] = var4;
    var2 = function finishUserCodeTwoWayLinkError() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['finishUserCodeTwoWayLinkError'] = var2;
    return var1;
})();
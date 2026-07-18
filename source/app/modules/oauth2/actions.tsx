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
case 0:
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
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var5.guild_id;
case 2:
            var9 = var4 != var8;
            var6 = '10000';
            var7 = var6;
            if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var8;
case 4:
            var1['guild_id'] = var7;
            var8 = var4 == var5;
            var7 = undefined;
            if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var5.id;
case 6:
            var8 = var4 != var7;
            if(!var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var7;
case 8:
            var1['channel_id'] = var6;
            var6 = var4 == var5;
            var2 = undefined;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var5.type;
case 10:
            if(!(var4 == var2)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = _closure1_slot6;
            var2 = var3.UNKNOWN;
case 12:
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
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var12 = var2.authorize;
                    var23 = var2.clientId;
                    var20 = var2.scopes;
                    var22 = var2.responseType;
                    var21 = var2.redirectUri;
                    var19 = var2.codeChallenge;
                    var18 = var2.codeChallengeMethod;
                    var17 = var2.state;
                    var13 = var2.permissions;
                    var14 = var2.guildId;
                    var15 = var2.channelId;
                    var11 = var2.integrationType;
                    var10 = var2.connectedAccountProvider;
                    var16 = var2.nonce;
                    var8 = undefined;
                    SaveGenerator(address=100);
case 16:
                    return var8;
case 17:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 4;
                    var3 = var3[var9];
                    var3 = var4.bind(var8)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {};
                    var7 = _closure1_slot7;
                    var7 = var7.OAUTH2_AUTHORIZE;
                    var3['url'] = var7;
                    var7 = {};
                    var7['client_id'] = var23;
                    var7['response_type'] = var22;
                    var7['redirect_uri'] = var21;
                    var7['code_challenge'] = var19;
                    var7['code_challenge_method'] = var18;
                    var19 = var20.join;
                    var18 = ' ';
                    var18 = var19.bind(var20)(var18);
                    var7['scope'] = var18;
                    var7['state'] = var17;
                    var7['nonce'] = var16;
                    var3['query'] = var7;
                    var7 = {};
                    var7['guild_id'] = var14;
                    var16 = null;
                    var18 = var16 != var14;
                    var17 = undefined;
                    if(!var18) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var18 = var16 != var15;
                    var17 = undefined;
                    if(!var18) { _fun0002_ip = 20; continue _fun0002 }
case 22:
                    var17 = var15;
case 20:
                    var7['webhook_channel_id'] = var17;
                    var17 = var16 == var14;
                    var14 = undefined;
                    if(!var17) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var16 = var16 != var15;
                    var14 = undefined;
                    if(!var16) { _fun0002_ip = 23; continue _fun0002 }
case 25:
                    var14 = var15;
case 23:
                    var7['channel_id'] = var14;
                    var7['permissions'] = var13;
                    var7['authorize'] = var12;
                    var7['integration_type'] = var11;
                    var7['connected_account_provider'] = var10;
                    var10 = _closure1_slot8;
                    var10 = var10.bind(var8)();
                    var7['location_context'] = var10;
                    var3['body'] = var7;
                    var7 = true;
                    var3['oldFormErrors'] = var7;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.rejectWithMigratedError;
                    var6 = var6.bind(var7)();
                    var3['rejectWithError'] = var6;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=366);
case 26:
                    return var3;
case 27:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var4 = var3.body;
                    return var4;
case 28:
                    return var3;
case 18:
                    return var2;
case 14:
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
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 30; continue _fun0003 }
case 15:
                    var21 = var2.clientId;
                    var18 = var2.scopes;
                    var20 = var2.responseType;
                    var19 = var2.redirectUri;
                    var17 = var2.codeChallenge;
                    var16 = var2.codeChallengeMethod;
                    var15 = var2.state;
                    var14 = var2.integrationType;
                    var13 = var2.connectedAccountProvider;
                    var12 = var2.nonce;
                    var10 = var2.signal;
                    var8 = undefined;
                    SaveGenerator(address=84);
case 7:
                    return var8;
case 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 4;
                    var3 = var9[var6];
                    var3 = var7.bind(var8)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.get;
                    var3 = {};
                    var11 = _closure1_slot7;
                    var11 = var11.OAUTH2_AUTHORIZE;
                    var3['url'] = var11;
                    var11 = {};
                    var11['client_id'] = var21;
                    var11['response_type'] = var20;
                    var11['redirect_uri'] = var19;
                    var11['code_challenge'] = var17;
                    var11['code_challenge_method'] = var16;
                    var17 = var18.join;
                    var16 = ' ';
                    var16 = var17.bind(var18)(var16);
                    var11['scope'] = var16;
                    var11['state'] = var15;
                    var11['integration_type'] = var14;
                    var11['connected_account_provider'] = var13;
                    var11['nonce'] = var12;
                    var3['query'] = var11;
                    var3['signal'] = var10;
                    var10 = 3;
                    var3['retries'] = var10;
                    var10 = true;
                    var3['oldFormErrors'] = var10;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.rejectWithMigratedError;
                    var6 = var6.bind(var7)();
                    var3['rejectWithError'] = var6;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=266);
case 24:
                    return var3;
case 34:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var4 = var3.body;
                    return var4;
case 35:
                    return var3;
case 32:
                    return var2;
case 30:
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
case 0:
                    StartGenerator();
                    var12 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 37; continue _fun0004 }
case 15:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 4;
                    var2 = var8[var6];
                    var3 = undefined;
                    var2 = var7.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.get;
                    var2 = {};
                    var9 = _closure1_slot7;
                    var9 = var9.OAUTH2_AUTHORIZE_SAMSUNG;
                    var2['url'] = var9;
                    var9 = {};
                    var10 = arg1;
                    var9['client_id'] = var10;
                    var10 = arg5;
                    var9['state'] = var10;
                    var10 = arg3;
                    var9['response_type'] = var10;
                    var10 = arg4;
                    var9['redirect_uri'] = var10;
                    var10 = 'consent';
                    var9['prompt'] = var10;
                    var11 = var12.join;
                    var10 = ' ';
                    var10 = var11.bind(var12)(var10);
                    var9['scope'] = var10;
                    var2['query'] = var9;
                    var6 = var8[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.rejectWithMigratedError;
                    var6 = var6.bind(var7)();
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=164);
case 38:
                    return var2;
case 39:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    return var3;
case 40:
                    return var2;
case 37:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 4;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var9 = _closure1_slot7;
                    var9 = var9.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS;
                    var2['url'] = var9;
                    var9 = {};
                    var10 = arg1;
                    var9['guild_id'] = var10;
                    var2['query'] = var9;
                    var9 = true;
                    var2['oldFormErrors'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=111);
case 19:
                    return var2;
case 44:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var3 = var2.body;
                    return var3;
case 45:
                    return var2;
case 42:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 46; continue _fun0006 }
case 43:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 4;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var9 = _closure1_slot7;
                    var9 = var9.OAUTH2_DEVICE_VERIFY;
                    var2['url'] = var9;
                    var9 = {};
                    var10 = arg1;
                    var9['user_code'] = var10;
                    var2['body'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=105);
case 47:
                    return var2;
case 48:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 49; continue _fun0006 }
case 44:
                    return var2;
case 49:
                    return var2;
case 46:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 45; continue _fun0007 }
case 43:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 4;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var9 = _closure1_slot7;
                    var9 = var9.OAUTH2_DEVICE_FINISH;
                    var2['url'] = var9;
                    var9 = {};
                    var10 = arg1;
                    var9['user_code'] = var10;
                    var10 = arg2;
                    var9['result'] = var10;
                    var2['body'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=113);
case 44:
                    return var2;
case 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 51; continue _fun0007 }
case 13:
                    return var2;
case 51:
                    return var2;
case 45:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 4;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var9 = _closure1_slot7;
                    var9 = var9.OAUTH2_DEVICE_FINISH;
                    var2['url'] = var9;
                    var9 = {};
                    var10 = arg1;
                    var9['user_code'] = var10;
                    var10 = 'two_way_link_error';
                    var9['result'] = var10;
                    var10 = arg2;
                    var9['error_code'] = var10;
                    var10 = arg3;
                    var9['error_source'] = var10;
                    var2['body'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=137);
case 54:
                    return var2;
case 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    return var2;
case 56:
                    return var2;
case 52:
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
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 4;
        var1 = var7[var4];
        var5 = undefined;
        var1 = var6.bind(var5)(var1);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var8 = _closure1_slot7;
        var8 = var8.OAUTH2_WHITELIST_ACCEPT;
        var1['url'] = var8;
        var8 = {};
        var9 = arg1;
        var8['token'] = var9;
        var1['query'] = var8;
        var8 = true;
        var1['oldFormErrors'] = var8;
        var4 = var7[var4];
        var5 = var6.bind(var5)(var4);
        var4 = var5.rejectWithMigratedError;
        var4 = var4.bind(var5)();
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
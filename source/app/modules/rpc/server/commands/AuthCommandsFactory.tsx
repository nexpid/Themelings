// app/modules/rpc/server/commands/AuthCommandsFactory.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function authorizeWithPrompt() {
        var1 = undefined;
        var4 = _closure1_slot18;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function _authorizeWithPrompt() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var21 = var2.client_id;
                    var3 = var2.response_type;
                    var6 = undefined;
                    if(!(var3 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var3 = 'code';
case 4:
                    var19 = var3;
                    var18 = var2.redirect_uri;
                    var17 = var2.code_challenge;
                    var16 = var2.code_challenge_method;
                    var15 = var2.state;
                    var14 = var2.nonce;
                    var33 = var2.scope;
                    var34 = var2.permissions;
                    var29 = var2.guild_id;
                    var28 = var2.channel_id;
                    var27 = var2.prompt;
                    var26 = var2.disable_guild_select;
                    var5 = var2.integration_type;
                    var24 = var2.pid;
                    var23 = var2.signal;
                    var3 = var2.isSocketRpcPrivateScope;
                    var8 = arg2;
                    var22 = arg3;
                    var12 = undefined;
                    var7 = undefined;
                    var25 = undefined;
                    var32 = undefined;
                    var20 = undefined;
                    var9 = undefined;
                    var13 = undefined;
                    var30 = undefined;
                    var31 = undefined;
                    SaveGenerator(address=155);
case 6:
                    return var6;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var11 = var23;
                    var10 = null;
                    if(!(var10 != var11)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var11 = var23;
                    var11 = var11.aborted;
                    if(var11) { _fun0001_ip = 12; continue _fun0001 }
case 10:
                    var11 = var21;
                    if(!(var10 != var11)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    if(var3) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var3 = var18;
                    if(!(var10 != var3)) { _fun0001_ip = 15; continue _fun0001 }
case 17:
                    var35 = _closure1_slot1;
                    var36 = _closure1_slot3;
                    var11 = 10;
                    var11 = var36[var11];
                    var36 = var35.bind(var6)(var11);
                    var35 = {};
                    var3 = _closure1_slot15;
                    var3 = var3.OAUTH2_ERROR;
                    var35['errorCode'] = var3;
                    var3 = var36.prototype;
                    var11 = Object.create(var3, {constructor: {value: var36}});
                    var43 = 'Redirect URI cannot be used in the RPC OAuth2 Authorization flow';
                    var45 = var11;
                    var44 = var35;
                    var3 = new var45[var36](var44, var43, var42);
                    var3 = var3 instanceof Object ? var3 : var11;
                    throw var3;
case 15:
                    var20 = new Array(0);
                    var11 = 'string';
                    var3 = typeof var33;
                    if(!(var11 !== var3)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var3 = global;
                    var11 = var3.Array;
                    var3 = var11.isArray;
                    var3 = var3.bind(var11)(var33);
                    if(!var3) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var20 = var33;
                    _fun0001_ip = 20; continue _fun0001;
case 18:
                    var11 = var33.split;
                    var3 = ' ';
                    var33 = var11.bind(var33)(var3);
                    var11 = var33.filter;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.length;
                        var1 = 0;
                        var1 = var2 > var1;
                        return var1;
                    };
                    var20 = var11.bind(var33)(var3);
case 20:
                    var33 = _closure1_slot8;
                    var11 = var33.getCurrentUser;
                    var11 = var11.bind(var33)();
                    if(!(var10 != var11)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    if(!(var10 == var5)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var33 = function isUserInstallable(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var2 = arg1;
                            var3 = null;
                            var1 = var3 != var2;
                            if(!var1) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var5 = 11;
                            var6 = var6[var5];
                            var5 = undefined;
                            var7 = var7.bind(var5)(var6);
                            var6 = var7.hasFlag;
                            var5 = var2.flags;
                            var4 = _closure1_slot12;
                            var4 = var4.EMBEDDED;
                            var1 = var6.bind(var7)(var5, var4);
case 26:
                            if(!var1) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                            var5 = var2.integrationTypesConfig;
                            var4 = var3 == var5;
                            var7 = undefined;
                            var2 = undefined;
                            if(var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var4 = 12;
                            var4 = var8[var4];
                            var4 = var6.bind(var7)(var4);
                            var4 = var4.ApplicationIntegrationType;
                            var4 = var4.USER_INSTALL;
                            var2 = var5[var4];
case 30:
                            var1 = var3 != var2;
case 28:
                            return var1;
                        }
                    };
                    var35 = _closure1_slot6;
                    var11 = var35.getApplication;
                    var4 = var21;
                    var4 = var11.bind(var35)(var4);
                    var4 = var33.bind(var6)(var4);
                    if(var4) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                    var35 = _closure1_slot7;
                    var4 = var35.createFromServer;
                    var36 = _closure1_slot0;
                    var37 = _closure1_slot3;
                    var11 = 13;
                    var11 = var37[var11];
                    var38 = var36.bind(var6)(var11);
                    var37 = var38.fetchApplication;
                    var36 = var21;
                    var11 = var23;
                    var11 = var37.bind(var38)(var36, var11);
                    SaveGenerator(address=466);
case 34:
                    return var11;
case 35:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=35);
                    if(var36) { _fun0001_ip = 36; continue _fun0001 }
case 37:
                    var4 = var4.bind(var35)(var11);
                    var4 = var33.bind(var6)(var4);
                    if(var4) { _fun0001_ip = 32; continue _fun0001 }
case 38:
                    var33 = _closure1_slot0;
                    var35 = _closure1_slot3;
                    var4 = 12;
                    var4 = var35[var4];
                    var4 = var33.bind(var6)(var4);
                    var4 = var4.ApplicationIntegrationType;
                    var4 = var4.GUILD_INSTALL;
                    _fun0001_ip = 39; continue _fun0001;
case 36:
                    return var11;
case 32:
                    var33 = _closure1_slot0;
                    var35 = _closure1_slot3;
                    var11 = 12;
                    var11 = var35[var11];
                    var11 = var33.bind(var6)(var11);
                    var11 = var11.ApplicationIntegrationType;
                    var4 = var11.USER_INSTALL;
case 39:
                    var12 = var4;
                    _fun0001_ip = 40; continue _fun0001;
case 24:
                    var4 = global;
                    var4 = var4.Number;
                    var12 = var4.bind(var6)(var5);
case 40: // try_start_0
                    var5 = global;
                    var35 = var5.Promise;
                    var33 = var35.all;
                    var37 = _closure1_slot0;
                    var39 = _closure1_slot3;
                    var11 = 14;
                    var4 = var39[var11];
                    var40 = var37.bind(var6)(var4);
                    var36 = var40.fetchAuthorization;
                    var4 = {};
                    var38 = var21;
                    var4['clientId'] = var38;
                    var41 = var20;
                    var4['scopes'] = var41;
                    var41 = var19;
                    var4['responseType'] = var41;
                    var41 = var18;
                    var4['redirectUri'] = var41;
                    var41 = var17;
                    var4['codeChallenge'] = var41;
                    var41 = var16;
                    var4['codeChallengeMethod'] = var41;
                    var41 = var15;
                    var4['state'] = var41;
                    var41 = var12;
                    var4['integrationType'] = var41;
                    var41 = var23;
                    var4['signal'] = var41;
                    var36 = var36.bind(var40)(var4);
                    var4 = new Array(2);
                    var4[0] = var36;
                    var36 = 15;
                    var36 = var39[var36];
                    var37 = var37.bind(var6)(var36);
                    var36 = var37.getDisclosures;
                    var36 = var36.bind(var37)(var38);
                    var4[1] = var36;
                    var4 = var33.bind(var35)(var4);
                    SaveGenerator(address=734);
case 41:
                    return var4;
case 42:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=32);
                    if(var33) { _fun0001_ip = 43; continue _fun0001 }
case 44:
                    var35 = _closure1_slot4;
                    var33 = 2;
                    var36 = var35.bind(var6)(var4, var33);
                    var33 = 0;
                    var7 = var36[var33];
                    var35 = 1;
                    var35 = var36[var35];
                    var25 = var35.disclosures;
                    var32 = var35.allAcked;
case 45: // try_end0
                    var36 = var27;
                    var37 = _closure1_slot0;
                    var38 = _closure1_slot3;
                    var35 = 16;
                    var35 = var38[var35];
                    var35 = var37.bind(var6)(var35);
                    var35 = var35.OAuth2Prompts;
                    var35 = var35.NONE;
                    if(!(var36 === var35)) { _fun0001_ip = 46; continue _fun0001 }
case 47:
                    var35 = var7;
                    if(!(var10 != var35)) { _fun0001_ip = 46; continue _fun0001 }
case 48:
                    var35 = var7;
                    var35 = var35.authorized;
                    if(!var35) { _fun0001_ip = 46; continue _fun0001 }
case 49:
                    if(var32) { _fun0001_ip = 50; continue _fun0001 }
case 46:
                    var32 = var22;
                    if(!(var10 != var32)) { _fun0001_ip = 51; continue _fun0001 }
case 52:
                    var36 = var22;
                    var22 = var7;
                    var35 = var22.application;
                    var32 = var28;
                    var22 = var24;
                    var22 = var36.bind(var6)(var35, var32, var22);
case 51:
                    var32 = _closure1_slot2;
                    var35 = _closure1_slot3;
                    var22 = 17;
                    var22 = var35[var22];
                    var22 = var32.bind(var6)(var22);
                    var30 = var22.NONE;
case 53: // try_start_1
                    var32 = _closure1_slot2;
                    var35 = _closure1_slot3;
                    var22 = 18;
                    var22 = var35[var22];
                    var32 = var32.bind(var6)(var22);
                    var22 = var32.deserialize;
                    var35 = var34;
                    var35 = var10 != var35;
                    var33 = 0;
                    if(!var35) { _fun0001_ip = 54; continue _fun0001 }
case 55:
                    var33 = var34;
case 54:
                    var30 = var22.bind(var32)(var33);
case 56: // try_end1
                    _fun0001_ip = 57; continue _fun0001;
case 58: // catch_target1
                    CatchBlockStart(arg_register=21);
case 57:
                    var31 = undefined;
                    var32 = var7;
                    var32 = var32.integration_type;
                    var32 = var10 != var32;
                    var22 = var32;
                    if(!var32) { _fun0001_ip = 59; continue _fun0001 }
case 60:
                    var34 = var5.Object;
                    var33 = var34.values;
                    var35 = _closure1_slot0;
                    var36 = _closure1_slot3;
                    var32 = 12;
                    var32 = var36[var32];
                    var32 = var35.bind(var6)(var32);
                    var32 = var32.ApplicationIntegrationType;
                    var34 = var33.bind(var34)(var32);
                    var33 = var34.includes;
                    var32 = var7;
                    var32 = var32.integration_type;
                    var22 = var33.bind(var34)(var32);
case 59:
                    if(!var22) { _fun0001_ip = 61; continue _fun0001 }
case 62:
                    var22 = var5.Map;
                    var32 = var22.prototype;
                    var32 = Object.create(var32, {constructor: {value: var22}});
                    var45 = var32;
                    var22 = new var45[var22](var44);
                    var34 = var22 instanceof Object ? var22 : var32;
                    var31 = var34;
                    var33 = var34.set;
                    var32 = var7;
                    var22 = var32.integration_type;
                    var22 = var33.bind(var34)(var22, var32);
case 61:
                    var32 = _closure1_slot16;
                    var22 = var7;
                    var22 = var22.application;
                    var22 = var22.id;
                    var22 = var32[var22];
                    if(!(var10 != var22)) { _fun0001_ip = 63; continue _fun0001 }
case 64:
                    var22 = _closure1_slot16;
                    var7 = var7.application;
                    var7 = var7.id;
                    var22 = var22[var7];
                    var7 = var22.process;
                    var7 = var7.bind(var22)();
                    SaveGenerator(address=1143);
case 65:
                    return var7;
case 66:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=21);
                    if(var22) { _fun0001_ip = 67; continue _fun0001 }
case 68:
                    var22 = var23;
                    if(!(var10 != var22)) { _fun0001_ip = 63; continue _fun0001 }
case 69:
                    var22 = var23;
                    var22 = var22.aborted;
                    if(var22) { _fun0001_ip = 70; continue _fun0001 }
case 63:
                    var22 = var8;
                    var8 = {};
                    var32 = var21;
                    var8['clientId'] = var32;
                    var8['authorizations'] = var31;
                    var31 = var20;
                    var8['scopes'] = var31;
                    var8['parsedPermissions'] = var30;
                    var30 = var19;
                    var8['responseType'] = var30;
                    var30 = var18;
                    var8['redirectUri'] = var30;
                    var30 = var17;
                    var8['codeChallenge'] = var30;
                    var30 = var16;
                    var8['codeChallengeMethod'] = var30;
                    var30 = var15;
                    var8['state'] = var30;
                    var8['guildId'] = var29;
                    var8['channelId'] = var28;
                    var8['prompt'] = var27;
                    var8['disableGuildSelect'] = var26;
                    var8['disclosures'] = var25;
                    var25 = var12;
                    var8['integrationType'] = var25;
                    var8['pid'] = var24;
                    var8['signal'] = var23;
                    var8 = var22.bind(var6)(var8);
                    return var8;
case 70:
                    var22 = _closure1_slot1;
                    var23 = _closure1_slot3;
                    var8 = 10;
                    var8 = var23[var8];
                    var24 = var22.bind(var6)(var8);
                    var23 = {};
                    var8 = _closure1_slot15;
                    var8 = var8.UNKNOWN_ERROR;
                    var23['errorCode'] = var8;
                    var8 = var24.prototype;
                    var22 = Object.create(var8, {constructor: {value: var24}});
                    var43 = 'Request aborted';
                    var45 = var22;
                    var44 = var23;
                    var8 = new var45[var24](var44, var43, var42);
                    var8 = var8 instanceof Object ? var8 : var22;
                    throw var8;
case 67:
                    return var7;
case 50: // try_start_2
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var7 = var7[var11];
                    var11 = var8.bind(var6)(var7);
                    var8 = var11.authorize;
                    var7 = {};
                    var22 = true;
                    var7['authorize'] = var22;
                    var7['clientId'] = var21;
                    var7['scopes'] = var20;
                    var7['responseType'] = var19;
                    var7['redirectUri'] = var18;
                    var7['codeChallenge'] = var17;
                    var7['codeChallengeMethod'] = var16;
                    var7['state'] = var15;
                    var7['nonce'] = var14;
                    var7['integrationType'] = var12;
                    var7 = var8.bind(var11)(var7);
                    SaveGenerator(address=1446);
case 71:
                    return var7;
case 72:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 73; continue _fun0001 }
case 74:
                    var8 = var7.location;
case 75: // try_end2
                    return var8;
case 73:
                    return var7;
case 76: // catch_target2
                    CatchBlockStart(arg_register=6);
                    var12 = var7.body;
                    var13 = var12;
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var7 = 10;
                    var7 = var11[var7];
                    var11 = var8.bind(var6)(var7);
                    var8 = {};
                    var7 = _closure1_slot15;
                    var7 = var7.OAUTH2_ERROR;
                    var8['errorCode'] = var7;
                    var14 = var10 == var12;
                    var12 = undefined;
                    if(var14) { _fun0001_ip = 77; continue _fun0001 }
case 78:
                    var12 = var13.message;
case 77:
                    var7 = var12;
                    if(var12) { _fun0001_ip = 79; continue _fun0001 }
case 80:
                    var7 = 'Unknown Error';
case 79:
                    var12 = var7;
                    var5 = var5.HermesInternal;
                    var7 = var5.concat;
                    var5 = 'OAuth2 Authorize Error: ';
                    var43 = var7.bind(var5)(var12);
                    var7 = var11.prototype;
                    var7 = Object.create(var7, {constructor: {value: var11}});
                    var45 = var7;
                    var44 = var8;
                    var5 = new var45[var11](var44, var43, var42);
                    var5 = var5 instanceof Object ? var5 : var7;
                    throw var5;
case 43:
                    return var4;
case 81: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = var4.body;
                    var9 = var5;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var4 = 10;
                    var4 = var8[var4];
                    var8 = var7.bind(var6)(var4);
                    var7 = {};
                    var4 = _closure1_slot15;
                    var4 = var4.OAUTH2_ERROR;
                    var7['errorCode'] = var4;
                    var10 = var10 == var5;
                    var5 = undefined;
                    if(var10) { _fun0001_ip = 82; continue _fun0001 }
case 83:
                    var5 = var9.message;
case 82:
                    var4 = var5;
                    if(var5) { _fun0001_ip = 84; continue _fun0001 }
case 85:
                    var4 = 'Unknown Error';
case 84:
                    var9 = var4;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var5 = var4.concat;
                    var4 = 'OAuth2 Authorization Error: ';
                    var43 = var5.bind(var4)(var9);
                    var5 = var8.prototype;
                    var5 = Object.create(var5, {constructor: {value: var8}});
                    var45 = var5;
                    var44 = var7;
                    var4 = new var45[var8](var44, var43, var42);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 22:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 10;
                    var4 = var7[var4];
                    var7 = var5.bind(var6)(var4);
                    var5 = {};
                    var3 = _closure1_slot15;
                    var3 = var3.OAUTH2_ERROR;
                    var5['errorCode'] = var3;
                    var3 = var7.prototype;
                    var4 = Object.create(var3, {constructor: {value: var7}});
                    var43 = 'Client is not logged in';
                    var45 = var4;
                    var44 = var5;
                    var3 = new var45[var7](var44, var43, var42);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 13:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 10;
                    var4 = var7[var4];
                    var7 = var5.bind(var6)(var4);
                    var5 = {};
                    var3 = _closure1_slot15;
                    var3 = var3.OAUTH2_ERROR;
                    var5['errorCode'] = var3;
                    var3 = var7.prototype;
                    var4 = Object.create(var3, {constructor: {value: var7}});
                    var43 = 'No Client ID provided';
                    var45 = var4;
                    var44 = var5;
                    var3 = new var45[var7](var44, var43, var42);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 12:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 10;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = {};
                    var3 = _closure1_slot15;
                    var3 = var3.UNKNOWN_ERROR;
                    var5['errorCode'] = var3;
                    var3 = var6.prototype;
                    var4 = Object.create(var3, {constructor: {value: var6}});
                    var43 = 'Request aborted';
                    var45 = var4;
                    var44 = var5;
                    var3 = new var45[var6](var44, var43, var42);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function authenticate(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var10 = arg2;
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var10;
            var1 = var3.authorization;
            var4 = var1.accessToken;
            if(var4) { _fun0003_ip = 86; continue _fun0003 }
case 4:
            var4 = var3.authorization;
            var4 = var4.authing;
            if(var4) { _fun0003_ip = 87; continue _fun0003 }
case 88:
            var3 = var3.authorization;
            var6 = true;
            var3['authing'] = var6;
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var3 = 19;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var5 = var3.HTTP;
            var4 = var5.get;
            var3 = {};
            var7 = _closure1_slot13;
            var7 = var7.OAUTH2_CURRENT_AUTH;
            var3['url'] = var7;
            var7 = {};
            var8 = global;
            var8 = var8.HermesInternal;
            var9 = var8.concat;
            var8 = 'Bearer ';
            var8 = var9.bind(var8)(var10);
            var7['Authorization'] = var8;
            var3['headers'] = var7;
            var3['oldFormErrors'] = var6;
            var6 = false;
            var3['rejectWithError'] = var6;
            var6 = var4.bind(var5)(var3);
            var5 = var6.then;
            var4 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var5 = _closure2_slot0;
                    var2 = var5.authorization;
                    var1 = false;
                    var2['authing'] = var1;
                    var6 = var3.body;
                    var1 = var6.application;
                    var2 = var6.user;
                    var9 = var6.scopes;
                    var8 = var6.expires;
                    var5 = var5.application;
                    var5 = var5.id;
                    var1 = var1.id;
                    if(!(var5 === var1)) { _fun0004_ip = 89; continue _fun0004 }
case 90:
                    var6 = _closure1_slot8;
                    var5 = var6.getCurrentUser;
                    var5 = var5.bind(var6)();
                    var6 = null;
                    if(!(var6 != var5)) { _fun0004_ip = 91; continue _fun0004 }
case 92:
                    if(!var2) { _fun0004_ip = 91; continue _fun0004 }
case 93:
                    var5 = var5.id;
                    var2 = var2.id;
                    if(!(var5 === var2)) { _fun0004_ip = 91; continue _fun0004 }
case 94:
                    var7 = _closure2_slot0;
                    var5 = var7.authorization;
                    var2 = var7.authorization;
                    var12 = var2.scopes;
                    var2 = new Array(1);
                    var11 = 0;
                    var13 = var2;
                    var11 = arraySpread(var13, var12, var11);
                    var13 = var2;
                    var12 = var9;
                    var9 = arraySpread(var13, var12, var11);
                    var6 = _closure1_slot10;
                    var2[var9] = var6;
                    var6 = 1;
                    var6 = var9 + var6;
                    var5['scopes'] = var2;
                    var2 = var7.authorization;
                    var4 = _closure2_slot1;
                    var2['accessToken'] = var4;
                    var5 = var7.authorization;
                    var2 = global;
                    var2 = var2.Date;
                    var6 = var2.prototype;
                    var6 = Object.create(var6, {constructor: {value: var2}});
                    var14 = var6;
                    var13 = var8;
                    var2 = new var14[var2](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var6;
                    var5['expires'] = var2;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 20;
                    var5 = var5[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.dispatch;
                    var2 = {};
                    var8 = 'RPC_APP_AUTHENTICATED';
                    var2['type'] = var8;
                    var8 = var7.id;
                    var2['socketId'] = var8;
                    var7 = var7.application;
                    var2['application'] = var7;
                    var2 = var5.bind(var6)(var2);
                    var2 = {};
                    var12 = var3.body;
                    var13 = var2;
                    var3 = copyDataProperties(var13, var12);
                    var3 = 'access_token';
                    var2[var3] = var4;
                    return var2;
case 91:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = {};
                    var1 = _closure1_slot15;
                    var1 = var1.INVALID_TOKEN;
                    var3['errorCode'] = var1;
                    var1 = var4.prototype;
                    var2 = Object.create(var1, {constructor: {value: var4}});
                    var12 = 'Token does not match current user';
                    var14 = var2;
                    var13 = var3;
                    var1 = new var14[var4](var13, var12, var11);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
case 89:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = {};
                    var1 = _closure1_slot15;
                    var1 = var1.INVALID_CLIENTID;
                    var3['errorCode'] = var1;
                    var1 = var4.prototype;
                    var2 = Object.create(var1, {constructor: {value: var4}});
                    var12 = "Application does not match the connection's";
                    var14 = var2;
                    var13 = var3;
                    var1 = new var14[var4](var13, var12, var11);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var3 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = {};
                var1 = _closure1_slot15;
                var1 = var1.INVALID_TOKEN;
                var3['errorCode'] = var1;
                var5 = _closure2_slot1;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'Invalid access token: ';
                var6 = var2.bind(var1)(var5);
                var2 = var4.prototype;
                var2 = Object.create(var2, {constructor: {value: var4}});
                var8 = var2;
                var7 = var3;
                var1 = new var8[var4](var7, var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            };
            var4 = var5.bind(var6)(var4, var3);
            var3 = var4.catch;
            var2 = function(arg1) {
                var1 = _closure2_slot0;
                var2 = var1.authorization;
                var1 = false;
                var2['authing'] = var1;
                var1 = arg1;
                throw var1;
            };
            var2 = var3.bind(var4)(var2);
            return var2;
case 87:
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 10;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = {};
            var2 = _closure1_slot15;
            var2 = var2.INVALID_COMMAND;
            var4['errorCode'] = var2;
            var2 = var5.prototype;
            var3 = Object.create(var2, {constructor: {value: var5}});
            var11 = 'Already authenticating';
            var13 = var3;
            var12 = var4;
            var2 = new var13[var5](var12, var11, var10);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 86:
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 10;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = {};
            var1 = _closure1_slot15;
            var1 = var1.INVALID_COMMAND;
            var3['errorCode'] = var1;
            var1 = var4.prototype;
            var2 = Object.create(var1, {constructor: {value: var4}});
            var11 = 'Already authenticated';
            var13 = var2;
            var12 = var3;
            var1 = new var13[var4](var12, var11, var10);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var11.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var8 = 1;
    var2 = var7[var8];
    var2 = var11.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var10 = 2;
    var2 = var7[var10];
    var2 = var11.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var11.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var11.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.TransportTypes;
    var _closure1_slot9 = var5;
    var5 = var2.RPC_AUTHENTICATED_SCOPE;
    var _closure1_slot10 = var5;
    var2 = var2.RPC_PRIVATE_SCOPE;
    var _closure1_slot11 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.ApplicationFlags;
    var _closure1_slot12 = var5;
    var5 = var2.Endpoints;
    var _closure1_slot13 = var5;
    var5 = var2.RPCCommands;
    var _closure1_slot14 = var5;
    var2 = var2.RPCErrors;
    var _closure1_slot15 = var2;
    var2 = {};
    var5 = 7;
    var5 = var7[var5];
    var9 = var11.bind(var1)(var5);
    var5 = 8;
    var5 = var7[var5];
    var5 = var11.bind(var1)(var5);
    var5 = var5.Millis;
    var5 = var5.MINUTE;
    var13 = var8 * var5;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var15 = var8;
    var14 = var10;
    var5 = new var15[var9](var14, var13, var12);
    var8 = var5 instanceof Object ? var5 : var8;
    var5 = '1273616940451102832';
    var2[var5] = var8;
    var _closure1_slot16 = var2;
    var5 = 24;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/rpc/server/commands/AuthCommandsFactory.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function createAuthCommandHandlers(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = {};
        var2 = _closure1_slot14;
        var5 = var2.AUTHENTICATE;
        var7 = _closure1_slot0;
        var6 = _closure1_slot3;
        var3 = 21;
        var6 = var6[var3];
        var3 = undefined;
        var8 = var7.bind(var3)(var6);
        var7 = var8.createRPCCommand;
        var6 = var2.AUTHENTICATE;
        var3 = {};
        var9 = function handler(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg1;
                var7 = var1.socket;
                var _closure3_slot0 = var7;
                var2 = var1.signal;
                var _closure3_slot1 = var2;
                var1 = var1.args;
                var6 = var1.access_token;
                var4 = undefined;
                var _closure3_slot2 = var4;
                var _closure3_slot3 = var4;
                var _closure3_slot4 = var4;
                var5 = null;
                if(!(var5 == var6)) { _fun0005_ip = 95; continue _fun0005 }
case 96:
                var8 = var7.transport;
                var2 = _closure1_slot9;
                var2 = var2.IPC;
                if(!(var8 !== var2)) { _fun0005_ip = 97; continue _fun0005 }
case 95:
                if(!(var5 != var6)) { _fun0005_ip = 98; continue _fun0005 }
case 31:
                var2 = _closure1_slot19;
                var2 = var2.bind(var4)(var7, var6);
                return var2;
case 98:
                var8 = _closure1_slot1;
                var9 = _closure1_slot3;
                var6 = 10;
                var6 = var9[var6];
                var9 = var8.bind(var4)(var6);
                var8 = {};
                var2 = _closure1_slot15;
                var2 = var2.INVALID_TOKEN;
                var8['errorCode'] = var2;
                var2 = var9.prototype;
                var6 = Object.create(var2, {constructor: {value: var9}});
                var16 = 'No access token provided';
                var18 = var6;
                var17 = var8;
                var2 = new var18[var9](var17, var16, var15);
                var2 = var2 instanceof Object ? var2 : var6;
                throw var2;
case 97:
                var2 = var7.application;
                var8 = var2.id;
                _closure3_slot2 = var8;
                if(!(var5 != var8)) { _fun0005_ip = 99; continue _fun0005 }
case 100:
                var9 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 22;
                var2 = var6[var2];
                var2 = var9.bind(var4)(var2);
                var2 = var2.OAuth2Scopes;
                var14 = var2.IDENTIFY;
                _closure3_slot3 = var14;
                var2 = function _authorize() {
                    var5 = _closure1_slot17;
                    var4 = {};
                    var2 = _closure3_slot2;
                    var4['client_id'] = var2;
                    var2 = _closure3_slot3;
                    var4['scope'] = var2;
                    var2 = 'token';
                    var4['response_type'] = var2;
                    var1 = _closure3_slot1;
                    var4['signal'] = var1;
                    var1 = false;
                    var4['isSocketRpcPrivateScope'] = var1;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var3 = var5.bind(var1)(var4, var3, var2);
                    var2 = var3.then;
                    var1 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var4 = arg1;
                            var2 = null;
                            if(!(var2 != var4)) { _fun0006_ip = 101; continue _fun0006 }
case 27:
                            var3 = var4.split;
                            var1 = /#|\?/;
                            var7 = var3.bind(var4)(var1);
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var1 = 23;
                            var1 = var4[var1];
                            var6 = undefined;
                            var4 = var3.bind(var6)(var1);
                            var3 = var4.parse;
                            var8 = var7.length;
                            var1 = 1;
                            var1 = var8 - var1;
                            var1 = var7[var1];
                            var1 = var3.bind(var4)(var1);
                            var3 = var1.error;
                            if(!(var2 == var3)) { _fun0006_ip = 102; continue _fun0006 }
case 103:
                            var7 = _closure3_slot2;
                            var13 = var1.access_token;
                            var11 = var1.scope;
                            var12 = var1.expires_in;
                            var8 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var10 = 9;
                            var4 = var4[var10];
                            var4 = var8.bind(var6)(var4);
                            var8 = var4.Storage;
                            var4 = var8.get;
                            var9 = 'CachedTokens';
                            var8 = var4.bind(var8)(var9);
                            if(!(var2 == var8)) { _fun0006_ip = 104; continue _fun0006 }
case 11:
                            var8 = {};
case 104:
                            var4 = {};
                            var4['accessToken'] = var13;
                            var4['scope'] = var11;
                            var11 = global;
                            var13 = var11.Date;
                            var11 = var13.now;
                            var11 = var11.bind(var13)();
                            var11 = var11 + var12;
                            var4['expires'] = var11;
                            var8[var7] = var4;
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var4 = var4[var10];
                            var4 = var7.bind(var6)(var4);
                            var7 = var4.Storage;
                            var4 = var7.set;
                            var4 = var4.bind(var7)(var9, var8);
                            var7 = _closure1_slot19;
                            var4 = _closure3_slot0;
                            var3 = var1.access_token;
                            var3 = var7.bind(var6)(var4, var3);
                            return var3;
case 102:
                            var4 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var3 = 10;
                            var3 = var7[var3];
                            var4 = var4.bind(var6)(var3);
                            var3 = {};
                            var5 = _closure1_slot15;
                            var5 = var5.OAUTH2_ERROR;
                            var3['errorCode'] = var5;
                            var7 = var1.error;
                            var1 = var1.error_description;
                            var2 = var2 != var1;
                            var6 = 'unknown error';
                            if(!var2) { _fun0006_ip = 105; continue _fun0006 }
case 106:
                            var6 = var1;
case 105:
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var5 = var1.concat;
                            var2 = 'OAuth2 Error: ';
                            var1 = ': ';
                            var15 = var5.bind(var2)(var7, var1, var6);
                            var2 = var4.prototype;
                            var2 = Object.create(var2, {constructor: {value: var4}});
                            var17 = var2;
                            var16 = var3;
                            var1 = new var17[var4](var16, var15, var14);
                            var1 = var1 instanceof Object ? var1 : var2;
                            throw var1;
case 101:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var2 = 10;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = {};
                            var1 = _closure1_slot15;
                            var1 = var1.UNKNOWN_ERROR;
                            var3['errorCode'] = var1;
                            var1 = var4.prototype;
                            var2 = Object.create(var1, {constructor: {value: var4}});
                            var15 = 'Unknown error occurred';
                            var17 = var2;
                            var16 = var3;
                            var1 = new var17[var4](var16, var15, var14);
                            var1 = var1 instanceof Object ? var1 : var2;
                            throw var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                _closure3_slot4 = var2;
                var12 = 9;
                var6 = var6[var12];
                var6 = var9.bind(var4)(var6);
                var9 = var6.Storage;
                var6 = var9.get;
                var11 = 'CachedTokens';
                var10 = var6.bind(var9)(var11);
                var9 = var5 != var10;
                var6 = undefined;
                if(!var9) { _fun0005_ip = 107; continue _fun0005 }
case 108:
                var9 = var10[var8];
                var9 = var5 != var9;
                var6 = undefined;
                if(!var9) { _fun0005_ip = 107; continue _fun0005 }
case 19:
                var9 = var10[var8];
                var13 = var9.scope;
                if(!(var13 === var14)) { _fun0005_ip = 109; continue _fun0005 }
case 110:
                var14 = var9.expires;
                var13 = global;
                var15 = var13.Date;
                var13 = var15.now;
                var13 = var13.bind(var15)();
                if(!(!(var14 <= var13))) { _fun0005_ip = 109; continue _fun0005 }
case 91:
                var6 = var9.accessToken;
                _fun0005_ip = 107; continue _fun0005;
case 109:
                var8 = delete var10[var8];
                var9 = _closure1_slot0;
                var8 = _closure1_slot3;
                var8 = var8[var12];
                var8 = var9.bind(var4)(var8);
                var9 = var8.Storage;
                var8 = var9.set;
                var8 = var8.bind(var9)(var11, var10);
                var6 = undefined;
case 107:
                if(!(var5 == var6)) { _fun0005_ip = 111; continue _fun0005 }
case 112:
                var2 = var2.bind(var4)();
                _fun0005_ip = 113; continue _fun0005;
case 111:
                var5 = _closure1_slot19;
                var6 = var5.bind(var4)(var7, var6);
                var5 = var6.catch;
                var3 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var4 = _closure3_slot2;
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var7 = 9;
                        var5 = var2[var7];
                        var2 = undefined;
                        var5 = var6.bind(var2)(var5);
                        var8 = var5.Storage;
                        var5 = var8.get;
                        var6 = 'CachedTokens';
                        var5 = var5.bind(var8)(var6);
                        var8 = null;
                        if(!(var8 == var5)) { _fun0007_ip = 114; continue _fun0007 }
case 115:
                        var5 = {};
case 114:
                        var4 = delete var5[var4];
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var3 = var3[var7];
                        var3 = var4.bind(var2)(var3);
                        var4 = var3.Storage;
                        var3 = var4.set;
                        var3 = var3.bind(var4)(var6, var5);
                        var1 = _closure3_slot4;
                        var1 = var1.bind(var2)();
                        return var1;
                    }
                };
                var2 = var5.bind(var6)(var3);
case 113:
                return var2;
case 99:
                var3 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 10;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = {};
                var1 = _closure1_slot15;
                var1 = var1.INVALID_COMMAND;
                var3['errorCode'] = var1;
                var1 = var4.prototype;
                var2 = Object.create(var1, {constructor: {value: var4}});
                var16 = 'No application.';
                var18 = var2;
                var17 = var3;
                var1 = new var18[var4](var17, var16, var15);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var3['handler'] = var9;
        var3 = var7.bind(var8)(var6, var3);
        var1[var5] = var3;
        var3 = var2.AUTHORIZE;
        var2 = {};
        var4 = function handler(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg1;
                var1 = var3.socket;
                var _closure3_slot0 = var1;
                var8 = var3.signal;
                var3 = var3.args;
                var4 = undefined;
                var _closure3_slot1 = var4;
                var9 = var3.client_id;
                if(var9) { _fun0008_ip = 116; continue _fun0008 }
case 117:
                var7 = _closure1_slot1;
                var10 = _closure1_slot3;
                var6 = 10;
                var6 = var10[var6];
                var10 = var7.bind(var4)(var6);
                var7 = {};
                var5 = _closure1_slot15;
                var5 = var5.INVALID_CLIENTID;
                var7['errorCode'] = var5;
                var5 = var10.prototype;
                var6 = Object.create(var5, {constructor: {value: var10}});
                var13 = 'No client id provided';
                var15 = var6;
                var14 = var7;
                var5 = new var15[var10](var14, var13, var12);
                var5 = var5 instanceof Object ? var5 : var6;
                throw var5;
case 116:
                var5 = var1.authorization;
                var6 = var5.accessToken;
                var5 = null;
                if(!(var5 == var6)) { _fun0008_ip = 118; continue _fun0008 }
case 119:
                var5 = var1.authorization;
                var5 = var5.authing;
                if(var5) { _fun0008_ip = 120; continue _fun0008 }
case 121:
                var6 = var1.authorization;
                var5 = true;
                var6['authing'] = var5;
                var6 = var3.response_type;
                var5 = 'token';
                if(!(var5 !== var6)) { _fun0008_ip = 122; continue _fun0008 }
case 123:
                var5 = var1.authorization;
                var10 = var5.scopes;
                var7 = var10.includes;
                var5 = _closure1_slot11;
                var5 = var7.bind(var10)(var5);
                _closure3_slot1 = var5;
                if(var5) { _fun0008_ip = 21; continue _fun0008 }
case 124:
                var7 = var1.application;
                var7 = var7.id;
                if(!(var7 !== var9)) { _fun0008_ip = 21; continue _fun0008 }
case 125:
                var9 = var1.authorization;
                var7 = false;
                var9['authing'] = var7;
                var9 = _closure1_slot1;
                var10 = _closure1_slot3;
                var7 = 10;
                var7 = var10[var7];
                var11 = var9.bind(var4)(var7);
                var10 = {};
                var7 = _closure1_slot15;
                var7 = var7.INVALID_CLIENTID;
                var10['errorCode'] = var7;
                var7 = var11.prototype;
                var9 = Object.create(var7, {constructor: {value: var11}});
                var13 = "Application does not match the connection's";
                var15 = var9;
                var14 = var10;
                var7 = new var15[var11](var14, var13, var12);
                var7 = var7 instanceof Object ? var7 : var9;
                throw var7;
case 21:
                var9 = var3.scopes;
                if(var9) { _fun0008_ip = 126; continue _fun0008 }
case 127:
                var9 = var3.scope;
case 126:
                var7 = delete var3.scopes;
                var7 = _closure1_slot17;
                var6 = {};
                var14 = var6;
                var13 = var3;
                var3 = copyDataProperties(var14, var13);
                var3 = 'scope';
                var6[var3] = var9;
                var3 = 'signal';
                var6[var3] = var8;
                var3 = 'isSocketRpcPrivateScope';
                var6[var3] = var5;
                var5 = _closure2_slot0;
                var3 = _closure2_slot1;
                var6 = var7.bind(var4)(var6, var5, var3);
                var5 = var6.then;
                var3 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = arg1;
                        var1 = _closure3_slot0;
                        var3 = var1.authorization;
                        var1 = false;
                        var3['authing'] = var1;
                        var5 = null;
                        if(!(var5 != var2)) { _fun0009_ip = 128; continue _fun0009 }
case 5:
                        var1 = global;
                        var3 = var1.URL;
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {constructor: {value: var3}});
                        var14 = var4;
                        var13 = var2;
                        var3 = new var14[var3](var13, var12);
                        var4 = var3 instanceof Object ? var3 : var4;
                        var8 = var4.searchParams;
                        var7 = var8.get;
                        var3 = 'code';
                        var3 = var7.bind(var8)(var3);
                        var6 = _closure3_slot1;
                        if(var6) { _fun0009_ip = 129; continue _fun0009 }
case 130:
                        var8 = var4.searchParams;
                        var7 = var8.get;
                        var6 = 'error';
                        var9 = var7.bind(var8)(var6);
                        if(!(var5 != var9)) { _fun0009_ip = 131; continue _fun0009 }
case 132:
                        var6 = '';
                        if(!(var6 === var9)) { _fun0009_ip = 133; continue _fun0009 }
case 131:
                        if(!(var5 != var3)) { _fun0009_ip = 134; continue _fun0009 }
case 135:
                        var6 = {};
                        var6['code'] = var3;
                        return var6;
case 134:
                        var10 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var7 = 10;
                        var8 = var8[var7];
                        var7 = undefined;
                        var10 = var10.bind(var7)(var8);
                        var8 = {};
                        var6 = _closure1_slot15;
                        var6 = var6.OAUTH2_ERROR;
                        var8['errorCode'] = var6;
                        var6 = var10.prototype;
                        var7 = Object.create(var6, {constructor: {value: var10}});
                        var12 = 'OAuth2 Error: Unable to find auth code';
                        var14 = var7;
                        var13 = var8;
                        var6 = new var14[var10](var13, var12, var11);
                        var6 = var6 instanceof Object ? var6 : var7;
                        throw var6;
case 133:
                        var7 = var4.searchParams;
                        var6 = var7.get;
                        var4 = 'error_description';
                        var4 = var6.bind(var7)(var4);
                        var5 = var5 != var4;
                        var8 = 'unknown error';
                        if(!var5) { _fun0009_ip = 136; continue _fun0009 }
case 137:
                        var8 = var4;
case 136:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var5 = 10;
                        var6 = var6[var5];
                        var5 = undefined;
                        var6 = var7.bind(var5)(var6);
                        var5 = {};
                        var4 = _closure1_slot15;
                        var4 = var4.OAUTH2_ERROR;
                        var5['errorCode'] = var4;
                        var1 = var1.HermesInternal;
                        var7 = var1.concat;
                        var4 = 'OAuth2 Error: ';
                        var1 = ': ';
                        var12 = var7.bind(var4)(var9, var1, var8);
                        var4 = var6.prototype;
                        var4 = Object.create(var4, {constructor: {value: var6}});
                        var14 = var4;
                        var13 = var5;
                        var1 = new var14[var6](var13, var12, var11);
                        var1 = var1 instanceof Object ? var1 : var4;
                        throw var1;
case 129:
                        var1 = {};
                        var1['code'] = var3;
                        var1['location'] = var2;
                        return var1;
case 128:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var2 = 10;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = {};
                        var1 = _closure1_slot15;
                        var1 = var1.UNKNOWN_ERROR;
                        var3['errorCode'] = var1;
                        var1 = var4.prototype;
                        var2 = Object.create(var1, {constructor: {value: var4}});
                        var12 = 'Unknown error occurred';
                        var14 = var2;
                        var13 = var3;
                        var1 = new var14[var4](var13, var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    }
                };
                var5 = var5.bind(var6)(var3);
                var3 = var5.catch;
                var2 = function(arg1) {
                    var1 = _closure3_slot0;
                    var2 = var1.authorization;
                    var1 = false;
                    var2['authing'] = var1;
                    var1 = arg1;
                    throw var1;
                };
                var2 = var3.bind(var5)(var2);
                return var2;
case 122:
                var2 = var1.authorization;
                var1 = false;
                var2['authing'] = var1;
                var3 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 10;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = {};
                var1 = _closure1_slot15;
                var1 = var1.INVALID_COMMAND;
                var3['errorCode'] = var1;
                var1 = var5.prototype;
                var2 = Object.create(var1, {constructor: {value: var5}});
                var13 = 'Authorization response_type "token" is not supported';
                var15 = var2;
                var14 = var3;
                var1 = new var15[var5](var14, var13, var12);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
case 120:
                var3 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 10;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = {};
                var1 = _closure1_slot15;
                var1 = var1.INVALID_COMMAND;
                var3['errorCode'] = var1;
                var1 = var5.prototype;
                var2 = Object.create(var1, {constructor: {value: var5}});
                var13 = 'Already authing';
                var15 = var2;
                var14 = var3;
                var1 = new var15[var5](var14, var13, var12);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
case 118:
                var3 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 10;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = {};
                var1 = _closure1_slot15;
                var1 = var1.INVALID_COMMAND;
                var3['errorCode'] = var1;
                var1 = var4.prototype;
                var2 = Object.create(var1, {constructor: {value: var4}});
                var13 = 'Already authenticated';
                var15 = var2;
                var14 = var3;
                var1 = new var15[var4](var14, var13, var12);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var2['handler'] = var4;
        var1[var3] = var2;
        return var1;
    };
    var3['default'] = var4;
    var3['AUTHORIZE_PROMPT_THROTTLERS'] = var2;
    return var1;
})();
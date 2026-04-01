// app/modules/rpc/server/commands/links.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var2 = global;
    var9 = var2.Object;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var15 = var4.RPC_AUTHENTICATED_SCOPE;
    var14 = var4.RPC_EMBEDDED_APP_SCOPE;
    var13 = var4.RPC_SCOPE_CONFIG;
    var4 = 4;
    var4 = var6[var4];
    var7 = var5.bind(var1)(var4);
    var4 = var7.ApplicationFlags;
    var _closure1_slot6 = var4;
    var4 = var7.PopoutWindowKeys;
    var _closure1_slot7 = var4;
    var4 = var7.RPCCommands;
    var8 = var7.RPCErrors;
    var _closure1_slot8 = var8;
    var8 = var7.UserSettingsSections;
    var _closure1_slot9 = var8;
    var7 = var7.AnalyticEvents;
    var _closure1_slot10 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.AM_HARMONY_PRD_APPLICATION_ID;
    var7 = var7.AM_HARMONY_STG_APPLICATION_ID;
    var8 = var2.Set;
    var2 = new Array(2);
    var2[0] = var9;
    var2[1] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var20 = var7;
    var19 = var2;
    var2 = new var20[var8](var19, var18);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot11 = var2;
    var2 = {};
    var8 = var4.OPEN_EXTERNAL_LINK;
    var7 = {};
    var9 = {};
    var12 = var13.ANY;
    var10 = new Array(2);
    var10[0] = var15;
    var10[1] = var14;
    var9[11] = var10;
    var7['scope'] = var9;
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
        var1['url'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['validation'] = var9;
    var9 = function handler(arg1) {
        var2 = arg1;
        var3 = var2.socket;
        var _closure2_slot0 = var3;
        var2 = var2.args;
        var2 = var2.url;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var6 = undefined;
                    var12 = undefined;
                    var13 = undefined;
                    var10 = undefined;
                    var _closure4_slot0 = var6;
                    var14 = undefined;
                    var4 = undefined;
                    var _closure4_slot1 = var6;
                    var _closure4_slot2 = var6;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 7;
                    var2 = var8[var2];
                    var9 = var7.bind(var6)(var2);
                    var8 = var9.validatePostMessageTransport;
                    var7 = _closure2_slot0;
                    var7 = var7.transport;
                    var7 = var8.bind(var9)(var7);
                    var8 = _closure1_slot4;
                    var7 = var8.getCurrentEmbeddedActivity;
                    var12 = var7.bind(var8)();
case 4: // try_start_0
                    var7 = global;
                    var11 = var7.URL;
                    var18 = _closure2_slot1;
                    var9 = var11.prototype;
                    var9 = Object.create(var9, {constructor: {value: var11}});
                    var19 = var9;
                    var8 = new var19[var11](var18, var17);
                    var9 = var8 instanceof Object ? var8 : var9;
                    var8 = var9.toString;
                    var8 = var8.bind(var9)();
                    var10 = var8;
                    _closure4_slot0 = var8;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 8;
                    var8 = var11[var8];
                    var8 = var9.bind(var6)(var8);
                    var8 = var8.isPlatformEmbedded;
                    if(!var8) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 9;
                    var8 = var11[var8];
                    var9 = var9.bind(var6)(var8);
                    var8 = var9.shouldOpenActivityInPopoutWindow;
                    var8 = var8.bind(var9)();
                    var15 = null;
                    if(!var8) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var8 = _closure1_slot7;
                    var15 = var8.ACTIVITY_POPOUT;
case 7:
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 10;
                    var8 = var11[var8];
                    var11 = var9.bind(var6)(var8);
                    var9 = var11.focus;
                    var8 = true;
                    var8 = var9.bind(var11)(var15, var8);
case 5:
                    var11 = _closure1_slot5;
                    var9 = var11.getApplication;
                    var8 = _closure2_slot0;
                    var8 = var8.application;
                    var13 = var8;
                    var15 = null;
                    var16 = var15 == var8;
                    var8 = undefined;
                    if(var16) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var8 = var13.id;
case 9:
                    var8 = var9.bind(var11)(var8);
                    var4 = var8;
                    _closure4_slot1 = var8;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 11;
                    var8 = var11[var8];
                    var11 = var9.bind(var6)(var8);
                    var9 = var11.getEmbeddedActivityLocationChannelId;
                    var8 = var12;
                    var13 = var15 == var8;
                    var8 = undefined;
                    if(var13) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var8 = var12.location;
case 11:
                    var8 = var9.bind(var11)(var8);
                    _closure4_slot2 = var8;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 12;
                    var8 = var11[var8];
                    var11 = var9.bind(var6)(var8);
                    var9 = var11.fetchIsLinkTrusted;
                    var8 = var4;
                    var12 = var15 == var8;
                    var8 = undefined;
                    if(var12) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var8 = var4.id;
case 13:
                    var4 = var10;
                    var4 = var9.bind(var11)(var8, var4);
                    SaveGenerator(address=411);
case 15:
                    return var4;
case 16:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    if(var4) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var9 = var7.Promise;
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {constructor: {value: var9}});
                    var18 = function(arg1) {
                        var2 = arg1;
                        var _closure5_slot0 = var2;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 15;
                        var2 = var7[var2];
                        var5 = undefined;
                        var4 = var6.bind(var5)(var2);
                        var3 = var4.handleClick;
                        var2 = {};
                        var9 = _closure4_slot0;
                        var2['href'] = var9;
                        var9 = true;
                        var2['shouldConfirm'] = var9;
                        var9 = function onConfirm() {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var1 = 13;
                                var3 = var6[var1];
                                var1 = undefined;
                                var7 = var5.bind(var1)(var3);
                                var3 = _closure4_slot0;
                                var3 = var7.bind(var1)(var3);
                                var3 = 14;
                                var3 = var6[var3];
                                var6 = var5.bind(var1)(var3);
                                var5 = var6.track;
                                var2 = _closure1_slot10;
                                var3 = var2.RPC_OPEN_EXTERNAL_LINK_CALLED;
                                var2 = {};
                                var7 = _closure2_slot0;
                                var8 = var7.application;
                                var7 = null;
                                var9 = var7 == var8;
                                var7 = undefined;
                                if(var9) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                                var7 = var8.id;
case 21:
                                var2['application_id'] = var7;
                                var4 = _closure4_slot0;
                                var2['url'] = var4;
                                var4 = true;
                                var2['opened'] = var4;
                                var2 = var5.bind(var6)(var3, var2);
                                var3 = _closure5_slot0;
                                var2 = {};
                                var2['opened'] = var4;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            }
                        };
                        var2['onConfirm'] = var9;
                        var1 = function onCancel() {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 14;
                                var3 = var3[var1];
                                var1 = undefined;
                                var6 = var4.bind(var1)(var3);
                                var5 = var6.track;
                                var2 = _closure1_slot10;
                                var3 = var2.RPC_OPEN_EXTERNAL_LINK_CALLED;
                                var2 = {};
                                var4 = _closure2_slot0;
                                var7 = var4.application;
                                var4 = null;
                                var8 = var4 == var7;
                                var4 = undefined;
                                if(var8) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                                var4 = var7.id;
case 23:
                                var2['application_id'] = var4;
                                var4 = _closure4_slot0;
                                var2['url'] = var4;
                                var4 = false;
                                var2['opened'] = var4;
                                var2 = var5.bind(var6)(var3, var2);
                                var3 = _closure5_slot0;
                                var2 = {};
                                var2['opened'] = var4;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            }
                        };
                        var2['onCancel'] = var1;
                        var1 = 16;
                        var1 = var7[var1];
                        var7 = var6.bind(var5)(var1);
                        var6 = var7.getActivitiesModalContextKey;
                        var1 = {};
                        var9 = _closure4_slot1;
                        var1['application'] = var9;
                        var8 = _closure4_slot2;
                        var1['channelId'] = var8;
                        var10 = var6.bind(var7)(var1);
                        var14 = var4;
                        var13 = var2;
                        var12 = undefined;
                        var11 = undefined;
                        var1 = var14[var3](var13, var12, var11, var10, var9);
                        return var1;
                    };
                    var19 = var8;
                    var5 = new var19[var9](var18, var17);
                    var5 = var5 instanceof Object ? var5 : var8;
                    _fun0001_ip = 25; continue _fun0001;
case 19:
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 13;
                    var8 = var11[var8];
                    var12 = var9.bind(var6)(var8);
                    var8 = var10;
                    var8 = var12.bind(var6)(var8);
                    var8 = 14;
                    var8 = var11[var8];
                    var12 = var9.bind(var6)(var8);
                    var11 = var12.track;
                    var8 = _closure1_slot10;
                    var9 = var8.RPC_OPEN_EXTERNAL_LINK_CALLED;
                    var8 = {};
                    var13 = _closure2_slot0;
                    var13 = var13.application;
                    var14 = var13;
                    var15 = var15 == var13;
                    var13 = undefined;
                    if(var15) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var13 = var14.id;
case 26:
                    var8['application_id'] = var13;
                    var8['url'] = var10;
                    var10 = true;
                    var8['opened'] = var10;
                    var8 = var11.bind(var12)(var9, var8);
                    var9 = var7.Promise;
                    var8 = var9.resolve;
                    var7 = {};
                    var7['opened'] = var10;
                    var5 = var8.bind(var9)(var7);
case 25: // try_end0
                    return var5;
case 17:
                    return var4;
case 28: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 17;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = {};
                    var3 = _closure1_slot8;
                    var3 = var3.INVALID_COMMAND;
                    var4['errorCode'] = var3;
                    var6 = _closure2_slot1;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'Invalid URL: ';
                    var17 = var3.bind(var2)(var6);
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {constructor: {value: var5}});
                    var19 = var3;
                    var18 = var4;
                    var2 = new var19[var5](var18, var17, var16);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var7['handler'] = var9;
    var2[7] = var7;
    var8 = var4.NAVIGATE_TO_CONNECTIONS;
    var7 = {};
    var9 = function validation(arg1) {
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 6;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['validation'] = var9;
    var9 = {};
    var12 = var13.ANY;
    var10 = new Array(1);
    var10[0] = var15;
    var9[11] = var10;
    var7['scope'] = var9;
    var9 = function handler(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = var1.socket;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 7;
            var7 = var6[var3];
            var1 = undefined;
            var9 = var5.bind(var1)(var7);
            var8 = var9.validatePostMessageTransport;
            var7 = var2.transport;
            var7 = var8.bind(var9)(var7);
            var3 = var6[var3];
            var5 = var5.bind(var1)(var3);
            var3 = var5.validateApplication;
            var2 = var2.application;
            var5 = var3.bind(var5)(var2);
            var3 = _closure1_slot11;
            var2 = var3.has;
            var2 = var2.bind(var3)(var5);
            if(var2) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 17;
            var2 = var5[var2];
            var6 = var3.bind(var1)(var2);
            var5 = {};
            var2 = _closure1_slot8;
            var2 = var2.UNAUTHORIZED_FOR_APPLICATION;
            var5['errorCode'] = var2;
            var2 = var6.prototype;
            var3 = Object.create(var2, {constructor: {value: var6}});
            var10 = 'Command not available for this application';
            var12 = var3;
            var11 = var5;
            var2 = new var12[var6](var11, var10, var9);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 29:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 18;
            var2 = var5[var2];
            var2 = var3.bind(var1)(var2);
            var3 = var2.openUserSettings;
            var2 = {};
            var4 = _closure1_slot9;
            var4 = var4.CONNECTIONS;
            var2['screen'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var7['handler'] = var9;
    var2[7] = var7;
    var7 = var4.SHARE_LINK;
    var8 = 19;
    var8 = var6[var8];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createRPCCommand;
    var8 = var4.SHARE_LINK;
    var4 = {};
    var12 = {};
    var14 = var13.ANY;
    var13 = new Array(1);
    var13[0] = var15;
    var12[13] = var13;
    var4['scope'] = var12;
    var11 = function handler(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = var1.socket;
            var1 = var1.args;
            var4 = var1.custom_id;
            var _closure2_slot0 = var4;
            var4 = var1.message;
            var _closure2_slot1 = var4;
            var1 = var1.link_id;
            var _closure2_slot2 = var1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 7;
            var8 = var7[var5];
            var4 = undefined;
            var10 = var6.bind(var4)(var8);
            var9 = var10.validatePostMessageTransport;
            var8 = var3.transport;
            var8 = var9.bind(var10)(var8);
            var5 = var7[var5];
            var7 = var6.bind(var4)(var5);
            var6 = var7.validateApplication;
            var5 = var3.application;
            var6 = var6.bind(var7)(var5);
            var _closure2_slot3 = var6;
            var5 = null;
            if(!(var5 != var6)) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 20;
            var5 = var7[var5];
            var7 = var6.bind(var4)(var5);
            var6 = var7.hasApplicationFlag;
            var5 = var3.application;
            var3 = _closure1_slot6;
            var3 = var3.EMBEDDED;
            var3 = var6.bind(var7)(var5, var3);
            if(var3) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 17;
            var3 = var6[var3];
            var7 = var5.bind(var4)(var3);
            var6 = {};
            var3 = _closure1_slot8;
            var3 = var3.INVALID_COMMAND;
            var6['errorCode'] = var3;
            var3 = var7.prototype;
            var5 = Object.create(var3, {constructor: {value: var7}});
            var11 = 'This application cannot access this API';
            var13 = var5;
            var12 = var6;
            var3 = new var13[var7](var12, var11, var10);
            var3 = var3 instanceof Object ? var3 : var5;
            throw var3;
case 33:
            var3 = global;
            var5 = var3.Promise;
            var3 = var5.prototype;
            var3 = Object.create(var3, {constructor: {value: var5}});
            var12 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openActivityShareLinkModal;
                var2 = {};
                var7 = _closure2_slot3;
                var2['applicationId'] = var7;
                var7 = _closure2_slot0;
                var2['customId'] = var7;
                var7 = _closure2_slot2;
                var2['linkId'] = var7;
                var6 = _closure2_slot1;
                var2['message'] = var6;
                var5 = function onShare(arg1, arg2) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = arg1;
                        var4 = arg2;
                        var3 = _closure3_slot0;
                        var2 = {};
                        var5 = var4;
                        if(var5) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                        var5 = var1;
case 35:
                        var2['success'] = var5;
                        var2['didCopyLink'] = var4;
                        var2['didSendMessage'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var2['onShare'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var13 = var3;
            var2 = new var13[var5](var12, var11);
            var2 = var2 instanceof Object ? var2 : var3;
            return var2;
case 31:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 17;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = {};
            var1 = _closure1_slot8;
            var1 = var1.INVALID_COMMAND;
            var3['errorCode'] = var1;
            var1 = var4.prototype;
            var2 = Object.create(var1, {constructor: {value: var4}});
            var11 = 'No application.';
            var13 = var2;
            var12 = var3;
            var1 = new var13[var4](var12, var11, var10);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var4['handler'] = var11;
    var4 = var9.bind(var10)(var8, var4);
    var2[6] = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/links.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
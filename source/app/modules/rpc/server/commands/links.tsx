// app/modules/rpc/server/commands/links.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var10 = global;
    var8 = var10.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var15 = var2.RPC_AUTHENTICATED_SCOPE;
    var14 = var2.RPC_EMBEDDED_APP_SCOPE;
    var13 = var2.RPC_SCOPE_CONFIG;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.ApplicationFlags;
    var _closure1_slot6 = var4;
    var4 = var2.PopoutWindowKeys;
    var _closure1_slot7 = var4;
    var4 = var2.RPCCommands;
    var7 = var2.RPCErrors;
    var _closure1_slot8 = var7;
    var7 = var2.UserSettingsSections;
    var _closure1_slot9 = var7;
    var2 = var2.AnalyticEvents;
    var _closure1_slot10 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var16 = var2.AM_HARMONY_PRD_APPLICATION_ID;
    var8 = var2.AM_HARMONY_STG_APPLICATION_ID;
    var2 = 6;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var9 = var7.DISCORD_WAGONS_APPLICATION_ID;
    var2 = var7.DISCORD_WAGONS_DEV_APPLICATION_ID;
    var17 = var7.DISCORD_WAGONS_QA_APPLICATION_ID;
    var12 = var10.Set;
    var7 = new Array(2);
    var7[0] = var16;
    var7[1] = var8;
    var8 = var12.prototype;
    var8 = Object.create(var8, {constructor: {value: var12}});
    var23 = var8;
    var22 = var7;
    var7 = new var23[var12](var22, var21);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot11 = var7;
    var12 = var10.Set;
    var7 = var12.prototype;
    var8 = Object.create(var7, {constructor: {value: var12}});
    var22 = ['www.nytimes.com', 'apps.apple.com', 'play.google.com'];
    var23 = var8;
    var7 = new var23[var12](var22, var21);
    var12 = var7 instanceof Object ? var7 : var8;
    var8 = var10.Map;
    var7 = new Array(2);
    var7[0] = var2;
    var2 = {};
    var2['trustedHosts'] = var12;
    var18 = var10.Date;
    var16 = var18.prototype;
    var19 = Object.create(var16, {constructor: {value: var18}});
    var16 = '2027-01-15T00:00:00';
    var23 = var19;
    var22 = var16;
    var18 = new var23[var18](var22, var21);
    var19 = var18 instanceof Object ? var18 : var19;
    var18 = var19.valueOf;
    var18 = var18.bind(var19)();
    var2['trustedUntilEpochMs'] = var18;
    var7[1] = var2;
    var2 = new Array(3);
    var2[0] = var7;
    var7 = new Array(2);
    var7[0] = var17;
    var17 = {};
    var17['trustedHosts'] = var12;
    var18 = var10.Date;
    var19 = var18.prototype;
    var19 = Object.create(var19, {constructor: {value: var18}});
    var23 = var19;
    var18 = new var23[var18](var22, var21);
    var19 = var18 instanceof Object ? var18 : var19;
    var18 = var19.valueOf;
    var18 = var18.bind(var19)();
    var17['trustedUntilEpochMs'] = var18;
    var7[1] = var17;
    var2[1] = var7;
    var7 = new Array(2);
    var7[0] = var9;
    var9 = {};
    var9['trustedHosts'] = var12;
    var10 = var10.Date;
    var12 = var10.prototype;
    var12 = Object.create(var12, {constructor: {value: var10}});
    var23 = var12;
    var10 = new var23[var10](var22, var21);
    var12 = var10 instanceof Object ? var10 : var12;
    var10 = var12.valueOf;
    var10 = var10.bind(var12)();
    var9['trustedUntilEpochMs'] = var10;
    var7[1] = var9;
    var2[2] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var23 = var7;
    var22 = var2;
    var2 = new var23[var8](var22, var21);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot12 = var2;
    var2 = {};
    var8 = var4.OPEN_EXTERNAL_LINK;
    var7 = {};
    var9 = {};
    var12 = var13.ANY;
    var10 = new Array(2);
    var10[0] = var15;
    var10[1] = var14;
    var9[var12] = var10;
    var7['scope'] = var9;
    var9 = function validation(arg1) {
        var5 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
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
                    var17 = undefined;
                    var18 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    var _closure4_slot0 = var6;
                    var13 = undefined;
                    var12 = undefined;
                    var _closure4_slot1 = var6;
                    var _closure4_slot2 = var6;
                    var16 = undefined;
                    var10 = undefined;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 8;
                    var2 = var5[var2];
                    var11 = var4.bind(var6)(var2);
                    var5 = var11.validatePostMessageTransport;
                    var4 = _closure2_slot0;
                    var4 = var4.transport;
                    var4 = var5.bind(var11)(var4);
                    var5 = _closure1_slot4;
                    var4 = var5.getCurrentEmbeddedActivity;
                    var17 = var4.bind(var5)();
case 4: // try_start_0
                    var5 = global;
                    var14 = var5.URL;
                    var21 = _closure2_slot1;
                    var11 = var14.prototype;
                    var11 = Object.create(var11, {constructor: {value: var14}});
                    var22 = var11;
                    var4 = new var22[var14](var21, var20);
                    var11 = var4 instanceof Object ? var4 : var11;
                    var8 = var11;
                    var4 = var11.toString;
                    var4 = var4.bind(var11)();
                    var9 = var4;
                    _closure4_slot0 = var4;
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var4 = 9;
                    var4 = var14[var4];
                    var4 = var11.bind(var6)(var4);
                    var4 = var4.isPlatformEmbedded;
                    if(!var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var4 = 10;
                    var4 = var14[var4];
                    var11 = var11.bind(var6)(var4);
                    var4 = var11.shouldOpenActivityInPopoutWindow;
                    var4 = var4.bind(var11)();
                    var15 = null;
                    if(!var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var4 = _closure1_slot7;
                    var15 = var4.ACTIVITY_POPOUT;
case 7:
                    var11 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var4 = 11;
                    var4 = var14[var4];
                    var14 = var11.bind(var6)(var4);
                    var11 = var14.focus;
                    var4 = true;
                    var4 = var11.bind(var14)(var15, var4);
case 5:
                    var15 = _closure1_slot5;
                    var11 = var15.getApplication;
                    var4 = _closure2_slot0;
                    var4 = var4.application;
                    var18 = var4;
                    var14 = null;
                    var19 = var14 == var4;
                    var4 = undefined;
                    if(var19) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var4 = var18.id;
case 9:
                    var4 = var11.bind(var15)(var4);
                    var12 = var4;
                    _closure4_slot1 = var4;
                    var11 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var4 = 12;
                    var4 = var15[var4];
                    var15 = var11.bind(var6)(var4);
                    var11 = var15.getEmbeddedActivityLocationChannelId;
                    var4 = var17;
                    var18 = var14 == var4;
                    var4 = undefined;
                    if(var18) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var4 = var17.location;
case 11:
                    var4 = var11.bind(var15)(var4);
                    _closure4_slot2 = var4;
                    var11 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var4 = 13;
                    var4 = var15[var4];
                    var17 = var11.bind(var6)(var4);
                    var15 = var17.fetchIsLinkTrusted;
                    var4 = var12;
                    var4 = var14 == var4;
                    var11 = undefined;
                    if(var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var4 = var12;
                    var11 = var4.id;
case 13:
                    var4 = var9;
                    var4 = var15.bind(var17)(var11, var4);
                    SaveGenerator(address=423);
case 15:
                    return var4;
case 16:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=10);
                    if(var11) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    if(var4) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var11 = var12;
                    var11 = var14 == var11;
                    var15 = undefined;
                    if(var11) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var11 = var12;
                    var15 = var11.id;
case 21:
                    var11 = undefined;
                    if(!(var6 !== var15)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                    var17 = _closure1_slot12;
                    var15 = var17.get;
                    var12 = var12.id;
                    var11 = var15.bind(var17)(var12);
case 23:
                    var10 = var11;
                    if(!(var6 !== var11)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                    var11 = var10;
                    var12 = var11.trustedUntilEpochMs;
                    var15 = var5.Date;
                    var11 = var15.now;
                    var11 = var11.bind(var15)();
                    if(!(var12 >= var11)) { _fun0001_ip = 25; continue _fun0001 }
case 27:
                    var11 = var10.trustedHosts;
                    var10 = var11.has;
                    var8 = var8.host;
                    var8 = var10.bind(var11)(var8);
                    if(var8) { _fun0001_ip = 28; continue _fun0001 }
case 25:
                    var10 = var5.Promise;
                    var8 = var10.prototype;
                    var8 = Object.create(var8, {constructor: {value: var10}});
                    var21 = function(arg1) {
                        var2 = arg1;
                        var _closure5_slot0 = var2;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 16;
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
                                var1 = 14;
                                var3 = var6[var1];
                                var1 = undefined;
                                var7 = var5.bind(var1)(var3);
                                var3 = _closure4_slot0;
                                var3 = var7.bind(var1)(var3);
                                var3 = 15;
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
                                if(var9) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                                var7 = var8.id;
case 29:
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
                                var1 = 15;
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
                                if(var8) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                                var4 = var7.id;
case 31:
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
                        var1 = 17;
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
                    var22 = var8;
                    var7 = new var22[var10](var21, var20);
                    var7 = var7 instanceof Object ? var7 : var8;
                    _fun0001_ip = 33; continue _fun0001;
case 28:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 14;
                    var8 = var11[var8];
                    var12 = var10.bind(var6)(var8);
                    var8 = var9;
                    var8 = var12.bind(var6)(var8);
                    var8 = 15;
                    var8 = var11[var8];
                    var15 = var10.bind(var6)(var8);
                    var11 = var15.track;
                    var8 = _closure1_slot10;
                    var10 = var8.RPC_OPEN_EXTERNAL_LINK_CALLED;
                    var8 = {};
                    var12 = _closure2_slot0;
                    var12 = var12.application;
                    var16 = var12;
                    var17 = var14 == var12;
                    var12 = undefined;
                    if(var17) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                    var12 = var16.id;
case 34:
                    var8['application_id'] = var12;
                    var12 = var9;
                    var8['url'] = var12;
                    var12 = true;
                    var8['opened'] = var12;
                    var8 = var11.bind(var15)(var10, var8);
                    var11 = var5.Promise;
                    var10 = var11.resolve;
                    var8 = {};
                    var8['opened'] = var12;
                    var7 = var10.bind(var11)(var8);
case 33: // try_end0
                    return var7;
case 19: // try_start_1
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 14;
                    var7 = var10[var7];
                    var11 = var8.bind(var6)(var7);
                    var7 = var9;
                    var7 = var11.bind(var6)(var7);
                    var7 = 15;
                    var7 = var10[var7];
                    var11 = var8.bind(var6)(var7);
                    var10 = var11.track;
                    var7 = _closure1_slot10;
                    var8 = var7.RPC_OPEN_EXTERNAL_LINK_CALLED;
                    var7 = {};
                    var12 = _closure2_slot0;
                    var12 = var12.application;
                    var13 = var12;
                    var14 = var14 == var12;
                    var12 = undefined;
                    if(var14) { _fun0001_ip = 36; continue _fun0001 }
case 37:
                    var12 = var13.id;
case 36:
                    var7['application_id'] = var12;
                    var7['url'] = var9;
                    var9 = true;
                    var7['opened'] = var9;
                    var7 = var10.bind(var11)(var8, var7);
                    var8 = var5.Promise;
                    var7 = var8.resolve;
                    var5 = {};
                    var5['opened'] = var9;
                    var5 = var7.bind(var8)(var5);
case 38: // try_end1
                    return var5;
case 17:
                    return var4;
case 39: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 18;
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
                    var20 = var3.bind(var2)(var6);
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {constructor: {value: var5}});
                    var22 = var3;
                    var21 = var4;
                    var2 = new var22[var5](var21, var20, var19);
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
    var2[var8] = var7;
    var8 = var4.NAVIGATE_TO_CONNECTIONS;
    var7 = {};
    var9 = function validation(arg1) {
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 7;
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
    var9[var12] = var10;
    var7['scope'] = var9;
    var9 = function handler(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = var1.socket;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 8;
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
            if(var2) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 18;
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
case 40:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 19;
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
    var2[var8] = var7;
    var7 = var4.SHARE_LINK;
    var8 = 20;
    var8 = var6[var8];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createRPCCommand;
    var8 = var4.SHARE_LINK;
    var4 = {};
    var12 = {};
    var14 = var13.ANY;
    var13 = new Array(1);
    var13[0] = var15;
    var12[var14] = var13;
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
            var5 = 8;
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
            if(!(var5 != var6)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 21;
            var6 = var8[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.hasFlag;
            var3 = var3.application;
            var3 = var3.flags;
            var8 = var5 != var3;
            var5 = 0;
            if(!var8) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var5 = var3;
case 44:
            var3 = _closure1_slot6;
            var3 = var3.EMBEDDED;
            var3 = var6.bind(var7)(var5, var3);
            if(var3) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 18;
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
case 46:
            var3 = global;
            var5 = var3.Promise;
            var3 = var5.prototype;
            var3 = Object.create(var3, {constructor: {value: var5}});
            var12 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
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
                        if(var5) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                        var5 = var1;
case 48:
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
case 42:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 18;
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
    var2[var7] = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/links.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
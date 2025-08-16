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
    var2 = var5.bind(var1)(var2);
    var15 = var2.RPC_AUTHENTICATED_SCOPE;
    var14 = var2.RPC_EMBEDDED_APP_SCOPE;
    var13 = var2.RPC_SCOPE_CONFIG;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.ApplicationFlags;
    var _closure1_slot5 = var4;
    var4 = var2.PopoutWindowKeys;
    var _closure1_slot6 = var4;
    var4 = var2.RPCCommands;
    var7 = var2.RPCErrors;
    var _closure1_slot7 = var7;
    var7 = var2.UserSettingsSections;
    var _closure1_slot8 = var7;
    var2 = var2.AnalyticEvents;
    var _closure1_slot9 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var16 = var2.AM_HARMONY_PRD_APPLICATION_ID;
    var8 = var2.AM_HARMONY_STG_APPLICATION_ID;
    var2 = 5;
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
    var _closure1_slot10 = var7;
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
    var _closure1_slot11 = var2;
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
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = var2.socket;
            var11 = var4;
            var _closure2_slot0 = var4;
            var2 = var2.args;
            var1 = var2.url;
            var5 = undefined;
            var16 = undefined;
            var17 = undefined;
            var6 = undefined;
            var8 = undefined;
            var _closure2_slot1 = var5;
            var12 = undefined;
            var10 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var7 = undefined;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 7;
            var9 = var14[var9];
            var13 = var13.bind(var5)(var9);
            var9 = var13.validatePostMessageTransport;
            var4 = var4.transport;
            var4 = var9.bind(var13)(var4);
            var9 = _closure1_slot3;
            var4 = var9.getCurrentEmbeddedActivity;
            var16 = var4.bind(var9)();
 111: // try_start_0
            var4 = global;
            var14 = var4.URL;
            var20 = var1;
            var13 = var14.prototype;
            var13 = Object.create(var13, {constructor: {value: var14}});
            var21 = var13;
            var9 = new var21[var14](var20, var19);
            var13 = var9 instanceof Object ? var9 : var13;
            var6 = var13;
            var9 = var13.toString;
            var9 = var9.bind(var13)();
            var8 = var9;
            _closure2_slot1 = var9;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 8;
            var9 = var14[var9];
            var9 = var13.bind(var5)(var9);
            var9 = var9.isPlatformEmbedded;
            if(!var9) { _fun0001_ip = 269; continue _fun0001 }
 190:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 9;
            var9 = var14[var9];
            var13 = var13.bind(var5)(var9);
            var9 = var13.shouldOpenActivityInPopoutWindow;
            var9 = var9.bind(var13)();
            var15 = null;
            if(!var9) { _fun0001_ip = 235; continue _fun0001 }
 225:
            var9 = _closure1_slot6;
            var15 = var9.ACTIVITY_POPOUT;
 235:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 10;
            var9 = var14[var9];
            var14 = var13.bind(var5)(var9);
            var13 = var14.focus;
            var9 = true;
            var9 = var13.bind(var14)(var15, var9);
 269:
            var15 = _closure1_slot4;
            var14 = var15.getApplication;
            var9 = var11;
            var9 = var9.application;
            var17 = var9;
            var13 = null;
            var18 = var13 == var9;
            var9 = undefined;
            if(var18) { _fun0001_ip = 306; continue _fun0001 }
 301:
            var9 = var17.id;
 306:
            var9 = var14.bind(var15)(var9);
            var10 = var9;
            _closure2_slot2 = var9;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 11;
            var9 = var15[var9];
            var15 = var14.bind(var5)(var9);
            var14 = var15.getEmbeddedActivityLocationChannelId;
            var9 = var16;
            var17 = var13 == var9;
            var9 = undefined;
            if(var17) { _fun0001_ip = 361; continue _fun0001 }
 356:
            var9 = var16.location;
 361:
            var9 = var14.bind(var15)(var9);
            _closure2_slot3 = var9;
            var9 = var10;
            var9 = var13 == var9;
            var14 = undefined;
            if(var9) { _fun0001_ip = 390; continue _fun0001 }
 382:
            var9 = var10;
            var14 = var9.id;
 390:
            var9 = undefined;
            if(!(var5 !== var14)) { _fun0001_ip = 415; continue _fun0001 }
 396:
            var15 = _closure1_slot11;
            var14 = var15.get;
            var10 = var10.id;
            var9 = var14.bind(var15)(var10);
 415:
            var7 = var9;
            if(!(var5 !== var9)) { _fun0001_ip = 475; continue _fun0001 }
 422:
            var9 = var7;
            var10 = var9.trustedUntilEpochMs;
            var14 = var4.Date;
            var9 = var14.now;
            var9 = var9.bind(var14)();
            if(!(var10 >= var9)) { _fun0001_ip = 475; continue _fun0001 }
 450:
            var9 = var7.trustedHosts;
            var7 = var9.has;
            var6 = var6.host;
            var6 = var7.bind(var9)(var6);
            if(var6) { _fun0001_ip = 513; continue _fun0001 }
 475:
            var7 = var4.Promise;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var20 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 14;
                var2 = var7[var2];
                var5 = undefined;
                var4 = var6.bind(var5)(var2);
                var3 = var4.handleClick;
                var2 = {};
                var9 = _closure2_slot1;
                var2['href'] = var9;
                var9 = true;
                var2['shouldConfirm'] = var9;
                var9 = function onConfirm() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 12;
                        var3 = var6[var1];
                        var1 = undefined;
                        var7 = var5.bind(var1)(var3);
                        var3 = _closure2_slot1;
                        var3 = var7.bind(var1)(var3);
                        var3 = 13;
                        var3 = var6[var3];
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.track;
                        var2 = _closure1_slot9;
                        var3 = var2.RPC_OPEN_EXTERNAL_LINK_CALLED;
                        var2 = {};
                        var7 = _closure2_slot0;
                        var8 = var7.application;
                        var7 = null;
                        var9 = var7 == var8;
                        var7 = undefined;
                        if(var9) { _fun0002_ip = 91; continue _fun0002 }
 86:
                        var7 = var8.id;
 91:
                        var2['application_id'] = var7;
                        var4 = _closure2_slot1;
                        var2['url'] = var4;
                        var4 = true;
                        var2['opened'] = var4;
                        var2 = var5.bind(var6)(var3, var2);
                        var3 = _closure3_slot0;
                        var2 = {};
                        var2['opened'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var2['onConfirm'] = var9;
                var1 = function onCancel() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 13;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.track;
                        var2 = _closure1_slot9;
                        var3 = var2.RPC_OPEN_EXTERNAL_LINK_CALLED;
                        var2 = {};
                        var7 = _closure2_slot0;
                        var8 = var7.application;
                        var7 = null;
                        var9 = var7 == var8;
                        var7 = undefined;
                        if(var9) { _fun0003_ip = 70; continue _fun0003 }
 65:
                        var7 = var8.id;
 70:
                        var2['application_id'] = var7;
                        var4 = _closure2_slot1;
                        var2['url'] = var4;
                        var4 = false;
                        var2['opened'] = var4;
                        var2 = var5.bind(var6)(var3, var2);
                        var3 = _closure3_slot0;
                        var2 = {};
                        var2['opened'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var2['onCancel'] = var1;
                var1 = 15;
                var1 = var7[var1];
                var7 = var6.bind(var5)(var1);
                var6 = var7.getActivitiesModalContextKey;
                var1 = {};
                var9 = _closure2_slot2;
                var1['application'] = var9;
                var8 = _closure2_slot3;
                var1['channelId'] = var8;
                var10 = var6.bind(var7)(var1);
                var14 = var4;
                var13 = var2;
                var12 = undefined;
                var11 = undefined;
                var1 = var14[var3](var13, var12, var11, var10, var9);
                return var1;
            };
            var21 = var6;
            var3 = new var21[var7](var20, var19);
            var3 = var3 instanceof Object ? var3 : var6;
            _fun0001_ip = 638; continue _fun0001;
 513:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 12;
            var6 = var9[var6];
            var10 = var7.bind(var5)(var6);
            var6 = var8;
            var6 = var10.bind(var5)(var6);
            var6 = 13;
            var6 = var9[var6];
            var10 = var7.bind(var5)(var6);
            var9 = var10.track;
            var6 = _closure1_slot9;
            var7 = var6.RPC_OPEN_EXTERNAL_LINK_CALLED;
            var6 = {};
            var11 = var11.application;
            var12 = var11;
            var13 = var13 == var11;
            var11 = undefined;
            if(var13) { _fun0001_ip = 592; continue _fun0001 }
 587:
            var11 = var12.id;
 592:
            var6['application_id'] = var11;
            var6['url'] = var8;
            var8 = true;
            var6['opened'] = var8;
            var6 = var9.bind(var10)(var7, var6);
            var7 = var4.Promise;
            var6 = var7.resolve;
            var4 = {};
            var4['opened'] = var8;
            var3 = var6.bind(var7)(var4);
 638: // try_end0
            return var3;
 640: // catch_target0
            CatchBlockStart(arg_register=2);
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 16;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var2 = _closure1_slot7;
            var2 = var2.INVALID_COMMAND;
            var3['errorCode'] = var2;
            var5 = var1;
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'Invalid URL: ';
            var19 = var2.bind(var1)(var5);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var21 = var2;
            var20 = var3;
            var1 = new var21[var4](var20, var19, var18);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var7['handler'] = var9;
    var2[var8] = var7;
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
    var9[var12] = var10;
    var7['scope'] = var9;
    var9 = function handler(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            var3 = _closure1_slot10;
            var2 = var3.has;
            var2 = var2.bind(var3)(var5);
            if(var2) { _fun0004_ip = 161; continue _fun0004 }
 93:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 16;
            var2 = var5[var2];
            var6 = var3.bind(var1)(var2);
            var5 = {};
            var2 = _closure1_slot7;
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
 161:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 17;
            var2 = var5[var2];
            var2 = var3.bind(var1)(var2);
            var3 = var2.openUserSettings;
            var2 = {};
            var4 = _closure1_slot8;
            var4 = var4.CONNECTIONS;
            var2['screen'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var7['handler'] = var9;
    var2[var8] = var7;
    var7 = var4.SHARE_LINK;
    var8 = 18;
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
 0:
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
            if(!(var5 != var6)) { _fun0005_ip = 298; continue _fun0005 }
 126:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 19;
            var6 = var8[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.hasFlag;
            var3 = var3.application;
            var3 = var3.flags;
            var8 = var5 != var3;
            var5 = 0;
            if(!var8) { _fun0005_ip = 174; continue _fun0005 }
 171:
            var5 = var3;
 174:
            var3 = _closure1_slot5;
            var3 = var3.EMBEDDED;
            var3 = var6.bind(var7)(var5, var3);
            if(var3) { _fun0005_ip = 261; continue _fun0005 }
 193:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 16;
            var3 = var6[var3];
            var7 = var5.bind(var4)(var3);
            var6 = {};
            var3 = _closure1_slot7;
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
 261:
            var3 = global;
            var5 = var3.Promise;
            var3 = var5.prototype;
            var3 = Object.create(var3, {constructor: {value: var5}});
            var12 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
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
 0:
                        var1 = arg1;
                        var4 = arg2;
                        var3 = _closure3_slot0;
                        var2 = {};
                        var5 = var4;
                        if(var5) { _fun0006_ip = 24; continue _fun0006 }
 21:
                        var5 = var1;
 24:
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
 298:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 16;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = {};
            var1 = _closure1_slot7;
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
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/links.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
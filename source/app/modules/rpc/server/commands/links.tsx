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
    var2 = var2.UserSettingsSections;
    var _closure1_slot8 = var2;
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
    var _closure1_slot9 = var7;
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
    var _closure1_slot10 = var2;
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
            var9 = var4;
            var2 = var2.args;
            var1 = var2.url;
            var5 = undefined;
            var14 = undefined;
            var15 = undefined;
            var7 = undefined;
            var6 = undefined;
            var _closure2_slot0 = var5;
            var10 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var8 = undefined;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 7;
            var11 = var13[var11];
            var12 = var12.bind(var5)(var11);
            var11 = var12.validatePostMessageTransport;
            var4 = var4.transport;
            var4 = var11.bind(var12)(var4);
            var11 = _closure1_slot3;
            var4 = var11.getCurrentEmbeddedActivity;
            var14 = var4.bind(var11)();
 105: // try_start_0
            var4 = global;
            var13 = var4.URL;
            var18 = var1;
            var12 = var13.prototype;
            var12 = Object.create(var12, {constructor: {value: var13}});
            var19 = var12;
            var11 = new var19[var13](var18, var17);
            var12 = var11 instanceof Object ? var11 : var12;
            var7 = var12;
            var11 = var12.toString;
            var11 = var11.bind(var12)();
            var6 = var11;
            _closure2_slot0 = var11;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 8;
            var11 = var13[var11];
            var11 = var12.bind(var5)(var11);
            var11 = var11.isPlatformEmbedded;
            if(!var11) { _fun0001_ip = 263; continue _fun0001 }
 184:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 9;
            var11 = var13[var11];
            var12 = var12.bind(var5)(var11);
            var11 = var12.shouldOpenActivityInPopoutWindow;
            var11 = var11.bind(var12)();
            var16 = null;
            if(!var11) { _fun0001_ip = 229; continue _fun0001 }
 219:
            var11 = _closure1_slot6;
            var16 = var11.ACTIVITY_POPOUT;
 229:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var11 = 10;
            var11 = var13[var11];
            var13 = var12.bind(var5)(var11);
            var12 = var13.focus;
            var11 = true;
            var11 = var12.bind(var13)(var16, var11);
 263:
            var13 = _closure1_slot4;
            var12 = var13.getApplication;
            var9 = var9.application;
            var15 = var9;
            var11 = null;
            var16 = var11 == var9;
            var9 = undefined;
            if(var16) { _fun0001_ip = 297; continue _fun0001 }
 292:
            var9 = var15.id;
 297:
            var9 = var12.bind(var13)(var9);
            var10 = var9;
            _closure2_slot1 = var9;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 11;
            var9 = var13[var9];
            var13 = var12.bind(var5)(var9);
            var12 = var13.getEmbeddedActivityLocationChannelId;
            var9 = var14;
            var15 = var11 == var9;
            var9 = undefined;
            if(var15) { _fun0001_ip = 352; continue _fun0001 }
 347:
            var9 = var14.location;
 352:
            var9 = var12.bind(var13)(var9);
            _closure2_slot2 = var9;
            var9 = var10;
            var9 = var11 == var9;
            var11 = undefined;
            if(var9) { _fun0001_ip = 381; continue _fun0001 }
 373:
            var9 = var10;
            var11 = var9.id;
 381:
            var9 = undefined;
            if(!(var9 !== var11)) { _fun0001_ip = 406; continue _fun0001 }
 387:
            var12 = _closure1_slot10;
            var11 = var12.get;
            var10 = var10.id;
            var9 = var11.bind(var12)(var10);
 406:
            var8 = var9;
            if(!(var5 !== var9)) { _fun0001_ip = 466; continue _fun0001 }
 413:
            var9 = var8;
            var10 = var9.trustedUntilEpochMs;
            var11 = var4.Date;
            var9 = var11.now;
            var9 = var9.bind(var11)();
            if(!(var10 >= var9)) { _fun0001_ip = 466; continue _fun0001 }
 441:
            var9 = var8.trustedHosts;
            var8 = var9.has;
            var7 = var7.host;
            var7 = var8.bind(var9)(var7);
            if(var7) { _fun0001_ip = 501; continue _fun0001 }
 466:
            var8 = var4.Promise;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var18 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 13;
                var2 = var7[var2];
                var5 = undefined;
                var4 = var6.bind(var5)(var2);
                var3 = var4.handleClick;
                var2 = {};
                var9 = _closure2_slot0;
                var2['href'] = var9;
                var9 = true;
                var2['shouldConfirm'] = var9;
                var9 = function onConfirm() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure3_slot0;
                    var2 = {};
                    var4 = true;
                    var2['opened'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['onConfirm'] = var9;
                var1 = function onCancel() {
                    var3 = _closure3_slot0;
                    var2 = {};
                    var1 = false;
                    var2['opened'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['onCancel'] = var1;
                var1 = 14;
                var1 = var7[var1];
                var7 = var6.bind(var5)(var1);
                var6 = var7.getActivitiesModalContextKey;
                var1 = {};
                var9 = _closure2_slot1;
                var1['application'] = var9;
                var8 = _closure2_slot2;
                var1['channelId'] = var8;
                var10 = var6.bind(var7)(var1);
                var14 = var4;
                var13 = var2;
                var12 = undefined;
                var11 = undefined;
                var1 = var14[var3](var13, var12, var11, var10, var9);
                return var1;
            };
            var19 = var7;
            var3 = new var19[var8](var18, var17);
            var3 = var3 instanceof Object ? var3 : var7;
            _fun0001_ip = 552; continue _fun0001;
 501:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 12;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var6 = var7.bind(var5)(var6);
            var7 = var4.Promise;
            var6 = var7.resolve;
            var4 = {};
            var8 = true;
            var4['opened'] = var8;
            var3 = var6.bind(var7)(var4);
 552: // try_end0
            return var3;
 554: // catch_target0
            CatchBlockStart(arg_register=2);
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 15;
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
            var17 = var2.bind(var1)(var5);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var19 = var2;
            var18 = var3;
            var1 = new var19[var4](var18, var17, var16);
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
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
            var3 = _closure1_slot9;
            var2 = var3.has;
            var2 = var2.bind(var3)(var5);
            if(var2) { _fun0002_ip = 161; continue _fun0002 }
 93:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 15;
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
            var2 = 16;
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
    var8 = 17;
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
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
            if(!(var5 != var6)) { _fun0003_ip = 298; continue _fun0003 }
 126:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 18;
            var6 = var8[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.hasFlag;
            var3 = var3.application;
            var3 = var3.flags;
            var8 = var5 != var3;
            var5 = 0;
            if(!var8) { _fun0003_ip = 174; continue _fun0003 }
 171:
            var5 = var3;
 174:
            var3 = _closure1_slot5;
            var3 = var3.EMBEDDED;
            var3 = var6.bind(var7)(var5, var3);
            if(var3) { _fun0003_ip = 261; continue _fun0003 }
 193:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 15;
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
                var1 = 19;
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
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        var4 = arg2;
                        var3 = _closure3_slot0;
                        var2 = {};
                        var5 = var4;
                        if(var5) { _fun0004_ip = 24; continue _fun0004 }
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
            var2 = 15;
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
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/links.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
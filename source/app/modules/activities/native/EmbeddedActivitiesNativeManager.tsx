// app/modules/activities/native/EmbeddedActivitiesNativeManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var6 = require;
        var8 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var8;
        var _closure1_slot2 = var7;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                _fun0002_ip = 74; continue _fun0002;
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
        var1 = function _superPropGet(arg1, arg2, arg3, arg4) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var5 = arg1;
                var7 = arg3;
                var _closure2_slot0 = var7;
                var6 = _closure1_slot7;
                var4 = _closure1_slot6;
                var1 = 1;
                var3 = 3;
                var8 = var1 & var3;
                var1 = var5;
                if(!var8) { _fun0003_ip = 44; continue _fun0003 }
 39:
                var1 = var5.prototype;
 44:
                var5 = undefined;
                var4 = var4.bind(var5)(var1);
                var1 = arg2;
                var5 = var6.bind(var5)(var4, var1, var7);
                var _closure2_slot1 = var5;
                var1 = 2;
                var3 = var1 & var3;
                var1 = var5;
                if(!var3) { _fun0003_ip = 97; continue _fun0003 }
 78:
                var4 = 'function';
                var3 = typeof var5;
                var1 = var5;
                if(!(var4 === var3)) { _fun0003_ip = 97; continue _fun0003 }
 92:
                var1 = function(arg1) {
                    var4 = _closure2_slot1;
                    var3 = var4.apply;
                    var2 = _closure2_slot0;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
 97:
                return var1;
            }
        };
        var _closure1_slot19 = var1;
        var1 = function postMessageToWebView() {
            var1 = undefined;
            var4 = _closure1_slot21;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot20 = var1;
        var1 = function _postMessageToWebView() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot9;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0004_ip = 113; continue _fun0004 }
 7:
                        var2 = arg1;
 10: // try_start_0
                        var4 = _closure1_slot16;
                        var3 = var4.injectJavaScript;
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var5 = 16;
                        var5 = var6[var5];
                        var6 = undefined;
                        var5 = var7.bind(var6)(var5);
                        var2 = var5.bind(var6)(var2);
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=59);
 57:
                        return var2;
 59:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0004_ip = 67; continue _fun0004 }
 65: // try_end0
                        _fun0004_ip = 108; continue _fun0004;
 67:
                        return var2;
 70: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 17;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.captureException;
                        var2 = var2.bind(var3)(var4);
 108:
                        var2 = undefined;
                        return var2;
 113:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot21 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot21 = var1;
        var1 = global;
        var9 = var1.Object;
        var5 = var9.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var9)(var3, var1, var2);
        var1 = 0;
        var2 = var7[var1];
        var1 = undefined;
        var2 = var8.bind(var1)(var2);
        var _closure1_slot3 = var2;
        var2 = 1;
        var2 = var7[var2];
        var2 = var8.bind(var1)(var2);
        var _closure1_slot4 = var2;
        var2 = 2;
        var2 = var7[var2];
        var2 = var8.bind(var1)(var2);
        var _closure1_slot5 = var2;
        var2 = 3;
        var2 = var7[var2];
        var2 = var8.bind(var1)(var2);
        var _closure1_slot6 = var2;
        var2 = 4;
        var2 = var7[var2];
        var2 = var8.bind(var1)(var2);
        var _closure1_slot7 = var2;
        var2 = 5;
        var2 = var7[var2];
        var2 = var8.bind(var1)(var2);
        var _closure1_slot8 = var2;
        var2 = 6;
        var2 = var7[var2];
        var2 = var8.bind(var1)(var2);
        var _closure1_slot9 = var2;
        var2 = 7;
        var2 = var7[var2];
        var2 = var6.bind(var1)(var2);
        var11 = var2.NativeEventEmitter;
        var2 = 8;
        var2 = var7[var2];
        var2 = var8.bind(var1)(var2);
        var _closure1_slot10 = var2;
        var2 = 9;
        var2 = var7[var2];
        var2 = var8.bind(var1)(var2);
        var _closure1_slot11 = var2;
        var2 = 10;
        var2 = var7[var2];
        var2 = var8.bind(var1)(var2);
        var _closure1_slot12 = var2;
        var2 = 11;
        var2 = var7[var2];
        var2 = var6.bind(var1)(var2);
        var2 = var2.DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
        var _closure1_slot13 = var2;
        var2 = 12;
        var2 = var7[var2];
        var2 = var6.bind(var1)(var2);
        var5 = var2.AnalyticEvents;
        var _closure1_slot14 = var5;
        var2 = var2.ComponentActions;
        var _closure1_slot15 = var2;
        var2 = 13;
        var2 = var7[var2];
        var9 = var6.bind(var1)(var2);
        var5 = var9.getWebViewProxy;
        var2 = 'EMBEDDED_ACTIVITY_WEB_VIEW_KEY';
        var5 = var5.bind(var9)(var2);
        var _closure1_slot16 = var5;
        var5 = 14;
        var5 = var7[var5];
        var9 = var6.bind(var1)(var5);
        var5 = var9.isAndroid;
        var9 = var5.bind(var9)();
        var5 = null;
        if(!var9) { _fun0001_ip = 416; continue _fun0001 }
 384:
        var9 = 15;
        var9 = var7[var9];
        var14 = var8.bind(var1)(var9);
        var10 = var11.prototype;
        var10 = Object.create(var10, {constructor: {value: var11}});
        var15 = var10;
        var9 = new var15[var11](var14, var13);
        var5 = var9 instanceof Object ? var9 : var10;
 416:
        var _closure1_slot17 = var5;
        var5 = 32;
        var5 = var7[var5];
        var5 = var8.bind(var1)(var5);
        var4 = function(arg1) {
            var4 = function EmbeddedActivitiesNativeManager(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var5 = this;
                    var13 = 0;
                    var1 = copyRestArgs(var13);
                    var8 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var8 = var8.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var1;
                    var11 = 0;
                    var1 = arraySpread(var13, var12, var11);
                    var1 = _closure1_slot6;
                    var9 = var1.bind(var4)(var3);
                    var3 = _closure1_slot5;
                    var1 = _closure1_slot18;
                    var1 = var1.bind(var4)();
                    if(var1) { _fun0005_ip = 86; continue _fun0005 }
 73:
                    var1 = var9.apply;
                    var1 = var1.bind(var9)(var5, var10);
                    _fun0005_ip = 120; continue _fun0005;
 86:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var1 = var7.bind(var8)(var9, var10, var6);
 120:
                    var1 = var3.bind(var4)(var5, var1);
                    var _closure3_slot0 = var1;
                    var2 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var1 = arg1;
                            var6 = var1.reason;
                            var5 = var1.application;
                            var2 = _closure1_slot12;
                            var1 = var2.getConnectedActivityLocation;
                            var8 = var1.bind(var2)();
                            var1 = null;
                            var2 = var1 == var5;
                            var1 = undefined;
                            var7 = undefined;
                            if(var2) { _fun0006_ip = 49; continue _fun0006 }
 44:
                            var7 = var5.id;
 49:
                            var4 = _closure3_slot0;
                            var3 = var4.leaveActivity;
                            var2 = {};
                            var2['location'] = var8;
                            var2['applicationId'] = var7;
                            var2 = var3.bind(var4)(var2);
                            var3 = var4.superHandleRPCDisconnect;
                            var2 = {};
                            var2['reason'] = var6;
                            var2['application'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var1['handleRPCDisconnect'] = var2;
                    return var1;
                }
            };
            var _closure2_slot0 = var4;
            var5 = _closure1_slot8;
            var3 = undefined;
            var2 = arg1;
            var2 = var5.bind(var3)(var4, var2);
            var2 = _closure1_slot4;
            var5 = {};
            var1 = '_initialize';
            var5['key'] = var1;
            var1 = function value() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var8 = _closure1_slot19;
                    var14 = _closure2_slot0;
                    var1 = undefined;
                    var13 = '_initialize';
                    var11 = 3;
                    var15 = undefined;
                    var12 = var3;
                    var6 = var15[var8](var14, var13, var12, var11, var10);
                    var5 = new Array(0);
                    var5 = var6.bind(var1)(var5);
                    var7 = var3.lifecycleSubscription;
                    var5 = null;
                    if(!(var5 != var7)) { _fun0007_ip = 72; continue _fun0007 }
 62:
                    var6 = var7.remove;
                    var6 = var6.bind(var7)();
 72:
                    var6 = _closure1_slot17;
                    var7 = var5 == var6;
                    var6 = undefined;
                    if(var7) { _fun0007_ip = 112; continue _fun0007 }
 85:
                    var10 = _closure1_slot17;
                    var9 = var10.addListener;
                    var8 = 'onHostDestroy';
                    var7 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var3 = _closure1_slot12;
                            var2 = var3.getConnectedActivityLocation;
                            var5 = var2.bind(var3)();
                            var2 = null;
                            var3 = var2 != var5;
                            var4 = null;
                            if(!var3) { _fun0008_ip = 43; continue _fun0008 }
 28:
                            var3 = _closure1_slot12;
                            var1 = var3.getSelfEmbeddedActivityForLocation;
                            var4 = var1.bind(var3)(var5);
 43:
                            var1 = var2 != var4;
                            if(!var1) { _fun0008_ip = 54; continue _fun0008 }
 50:
                            var1 = var2 != var5;
 54:
                            if(!var1) { _fun0008_ip = 90; continue _fun0008 }
 57:
                            var3 = _closure3_slot0;
                            var2 = var3.leaveActivity;
                            var1 = {};
                            var1['location'] = var5;
                            var4 = var4.applicationId;
                            var1['applicationId'] = var4;
                            var1 = var2.bind(var3)(var1);
 90:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = var9.bind(var10)(var8, var7);
 112:
                    var3['lifecycleSubscription'] = var6;
                    var7 = var3.scriptMessageSubscription;
                    if(!(var5 != var7)) { _fun0007_ip = 138; continue _fun0007 }
 128:
                    var6 = var7.remove;
                    var6 = var6.bind(var7)();
 138:
                    var8 = _closure1_slot16;
                    var7 = var8.addOnMessageListener;
                    var6 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var2 = arg1;
                            var1 = undefined;
                            var9 = undefined;
                            var13 = undefined;
                            var11 = undefined;
                            var5 = undefined;
                            var8 = undefined;
                            var7 = undefined;
                            var6 = undefined;
 19: // try_start_0
                            var4 = global;
                            var12 = var4.JSON;
                            var10 = var12.parse;
                            var4 = var2;
                            var4 = var4.data;
                            var9 = var10.bind(var12)(var4);
                            var12 = _closure1_slot12;
                            var10 = var12.getConnectedActivityLocation;
                            var10 = var10.bind(var12)();
                            var13 = var10;
                            var12 = null;
                            var14 = var12 != var10;
                            var10 = null;
                            if(!var14) { _fun0009_ip = 92; continue _fun0009 }
 77:
                            var15 = _closure1_slot12;
                            var14 = var15.getSelfEmbeddedActivityForLocation;
                            var10 = var14.bind(var15)(var13);
 92:
                            var11 = var10;
                            var13 = var12 == var10;
                            var10 = undefined;
                            if(var13) { _fun0009_ip = 109; continue _fun0009 }
 104:
                            var10 = var11.url;
 109:
                            var5 = var10;
                            var11 = var9;
                            var13 = 'object';
                            var11 = typeof var11;
                            var11 = var13 === var11;
                            var10 = var11;
                            if(!var11) { _fun0009_ip = 139; continue _fun0009 }
 132:
                            var11 = var5;
                            var10 = var12 != var11;
 139:
                            if(!var10) { _fun0009_ip = 179; continue _fun0009 }
 142:
                            var11 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var10 = 18;
                            var10 = var12[var10];
                            var11 = var11.bind(var1)(var10);
                            var10 = var11.handleMessage;
                            var4 = _closure1_slot20;
                            var4 = var10.bind(var11)(var9, var5, var4);
 179: // try_end0
                            _fun0009_ip = 494; continue _fun0009;
 184: // catch_target0
                            CatchBlockStart(arg_register=4);
                            var3 = var5;
                            var4 = global;
                            var4 = var4.SyntaxError;
                            var4 = var5 instanceof var4;
                            if(var4) { _fun0009_ip = 206; continue _fun0009 }
 204:
                            throw var3;
 206:
                            var3 = var2.data;
                            var2 = _closure1_slot13;
                            if(!(var3 === var2)) { _fun0009_ip = 494; continue _fun0009 }
 225:
                            var3 = _closure1_slot12;
                            var2 = var3.getConnectedActivityLocation;
                            var2 = var2.bind(var3)();
                            var7 = var2;
                            var4 = null;
                            var3 = var4 != var2;
                            var2 = undefined;
                            if(!var3) { _fun0009_ip = 291; continue _fun0009 }
 253:
                            var10 = _closure1_slot12;
                            var9 = var10.getSelfEmbeddedActivityForLocation;
                            var3 = var7;
                            var3 = var9.bind(var10)(var3);
                            var8 = var3;
                            var9 = var4 == var3;
                            var3 = undefined;
                            if(var9) { _fun0009_ip = 288; continue _fun0009 }
 283:
                            var3 = var8.applicationId;
 288:
                            var2 = var3;
 291:
                            var6 = var2;
                            var3 = var7;
                            var3 = var4 != var3;
                            var2 = var3;
                            if(!var3) { _fun0009_ip = 314; continue _fun0009 }
 307:
                            var3 = var6;
                            var2 = var4 != var3;
 314:
                            if(!var2) { _fun0009_ip = 494; continue _fun0009 }
 320:
                            var4 = _closure3_slot0;
                            var3 = var4.leaveActivity;
                            var2 = {};
                            var2['location'] = var7;
                            var2['applicationId'] = var6;
                            var6 = false;
                            var2['showFeedback'] = var6;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var2 = 19;
                            var2 = var9[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.show;
                            var2 = {};
                            var8 = _closure1_slot0;
                            var5 = 20;
                            var6 = var9[var5];
                            var6 = var8.bind(var1)(var6);
                            var10 = var6.intl;
                            var7 = var10.string;
                            var6 = var9[var5];
                            var6 = var8.bind(var1)(var6);
                            var6 = var6.t;
                            var6 = var6.tYBBW1;
                            var6 = var7.bind(var10)(var6);
                            var2['body'] = var6;
                            var6 = var9[var5];
                            var6 = var8.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var8.bind(var1)(var5);
                            var5 = var5.t;
                            var5 = var5.BddRzc;
                            var5 = var6.bind(var7)(var5);
                            var2['confirmText'] = var5;
                            var2 = var3.bind(var4)(var2);
 494:
                            return var1;
                        }
                    };
                    var6 = var7.bind(var8)(var6);
                    var3['scriptMessageSubscription'] = var6;
                    var6 = var3.thermalStateSubscription;
                    if(!(var5 != var6)) { _fun0007_ip = 184; continue _fun0007 }
 174:
                    var5 = var6.remove;
                    var5 = var5.bind(var6)();
 184:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 21;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.addListener;
                    var2 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var1 = arg1;
                            var10 = var1.rawThermalState;
                            var3 = _closure1_slot12;
                            var1 = var3.getConnectedActivityLocation;
                            var7 = var1.bind(var3)();
                            var6 = null;
                            var1 = var6 != var7;
                            var5 = null;
                            if(!var1) { _fun0010_ip = 52; continue _fun0010 }
 37:
                            var3 = _closure1_slot12;
                            var1 = var3.getSelfEmbeddedActivityForLocation;
                            var5 = var1.bind(var3)(var7);
 52:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 22;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.getEmbeddedActivityLocationChannelId;
                            var12 = var3.bind(var4)(var7);
                            var4 = _closure1_slot10;
                            var3 = var4.getBasicChannel;
                            var11 = var3.bind(var4)(var12);
                            var4 = var6 == var5;
                            var3 = undefined;
                            if(var4) { _fun0010_ip = 115; continue _fun0010 }
 109:
                            var3 = var5.compositeInstanceId;
 115:
                            var7 = var6 == var5;
                            var4 = undefined;
                            if(var7) { _fun0010_ip = 129; continue _fun0010 }
 124:
                            var4 = var5.applicationId;
 129:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var5 = 23;
                            var5 = var8[var5];
                            var9 = var7.bind(var1)(var5);
                            var8 = var9.track;
                            var5 = _closure1_slot14;
                            var7 = var5.ACTIVITY_DEVICE_THERMAL_STATE_CHANGED;
                            var5 = {};
                            var5['channel_id'] = var12;
                            var5['application_id'] = var4;
                            var5['activity_session_id'] = var3;
                            var5['thermal_state'] = var10;
                            var12 = var6 == var11;
                            var10 = undefined;
                            if(var12) { _fun0010_ip = 199; continue _fun0010 }
 194:
                            var10 = var11.guild_id;
 199:
                            var5['guild_id'] = var10;
                            var11 = _closure1_slot11;
                            var10 = var11.getMediaSessionId;
                            var10 = var10.bind(var11)();
                            var5['media_session_id'] = var10;
                            var5 = var8.bind(var9)(var7, var5);
                            var8 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var7 = 24;
                            var7 = var5[var7];
                            var9 = var8.bind(var1)(var7);
                            var8 = var9.dispatch;
                            var7 = {};
                            var10 = 'THERMAL_STATE_CHANGE';
                            var7['type'] = var10;
                            var7['applicationId'] = var4;
                            var7 = var8.bind(var9)(var7);
                            var8 = _closure1_slot0;
                            var7 = 25;
                            var5 = var5[var7];
                            var8 = var8.bind(var1)(var5);
                            var5 = var8.getThermalState;
                            var5 = var5.bind(var8)();
                            var3 = var6 != var3;
                            if(!var3) { _fun0010_ip = 311; continue _fun0010 }
 307:
                            var3 = var6 != var4;
 311:
                            if(!var3) { _fun0010_ip = 347; continue _fun0010 }
 314:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var7];
                            var4 = var6.bind(var1)(var4);
                            var4 = var4.ThermalStates;
                            var4 = var4.SERIOUS;
                            var3 = var5 >= var4;
 347:
                            if(!var3) { _fun0010_ip = 380; continue _fun0010 }
 350:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 26;
                            var2 = var4[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.requestRespondToSeriousThermalState;
                            var2 = var2.bind(var3)();
 380:
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    var3['thermalStateSubscription'] = var2;
                    return var1;
                }
            };
            var5['value'] = var1;
            var1 = new Array(12);
            var1[0] = var5;
            var5 = {};
            var7 = '_terminate';
            var5['key'] = var7;
            var7 = function value() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = this;
                    var6 = _closure1_slot19;
                    var10 = _closure2_slot0;
                    var1 = undefined;
                    var9 = '_terminate';
                    var7 = 3;
                    var11 = undefined;
                    var8 = var3;
                    var4 = var11[var6](var10, var9, var8, var7, var6);
                    var2 = new Array(0);
                    var2 = var4.bind(var1)(var2);
                    var5 = var3.lifecycleSubscription;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0011_ip = 66; continue _fun0011 }
 56:
                    var4 = var5.remove;
                    var4 = var4.bind(var5)();
 66:
                    var5 = var3.scriptMessageSubscription;
                    if(!(var2 != var5)) { _fun0011_ip = 86; continue _fun0011 }
 76:
                    var4 = var5.remove;
                    var4 = var4.bind(var5)();
 86:
                    var3 = var3.thermalStateSubscription;
                    if(!(var2 != var3)) { _fun0011_ip = 106; continue _fun0011 }
 96:
                    var2 = var3.remove;
                    var2 = var2.bind(var3)();
 106:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[1] = var5;
            var5 = {};
            var7 = 'showErrorModal';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var1 = arg1;
                var10 = var1.code;
                var5 = var1.message;
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 19;
                var2 = var11[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.show;
                var2 = {};
                var7 = _closure1_slot0;
                var6 = 20;
                var8 = var11[var6];
                var8 = var7.bind(var1)(var8);
                var9 = var8.intl;
                var8 = var9.formatToPlainString;
                var6 = var11[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.t;
                var7 = var6.hbiAOz;
                var6 = {};
                var6['code'] = var10;
                var6 = var8.bind(var9)(var7, var6);
                var2['title'] = var6;
                var2['body'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5['value'] = var7;
            var1[2] = var5;
            var5 = {};
            var7 = 'showLaunchErrorModal';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 19;
                var2 = var9[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.show;
                var2 = {};
                var8 = _closure1_slot0;
                var5 = 20;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.PtobXV;
                var5 = var6.bind(var7)(var5);
                var2['title'] = var5;
                var5 = arg1;
                var2['body'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5['value'] = var7;
            var1[3] = var5;
            var5 = {};
            var7 = 'showDevShelfOverrideEnabled';
            var5['key'] = var7;
            var7 = function value() {
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 27;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var8 = 'EMBEDDED_ACTIVITIES_DEV_SHELF_URL_OVERRIDE_ENABLED';
                var2['key'] = var8;
                var10 = _closure1_slot0;
                var5 = 20;
                var8 = var7[var5];
                var8 = var10.bind(var1)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var7[var5];
                var5 = var10.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.JfA7IC;
                var5 = var8.bind(var9)(var5);
                var2['content'] = var5;
                var5 = 28;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var2['icon'] = var5;
                var5 = 'status-positive';
                var2['iconColor'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5['value'] = var7;
            var1[4] = var5;
            var5 = {};
            var7 = 'releaseWebView';
            var5['key'] = var7;
            var7 = function value() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var2 = this;
                    var1 = var2.releaseFrameId;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    if(!(var2 != var1)) { _fun0012_ip = 91; continue _fun0012 }
 19:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 29;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var6 = var3.ComponentDispatch;
                    var5 = var6.dispatch;
                    var3 = _closure1_slot15;
                    var4 = var3.IFRAME_UNMOUNT;
                    var3 = {};
                    var3['id'] = var1;
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = _closure1_slot16;
                    var2 = var3.releaseWebView;
                    var2 = var2.bind(var3)();
 91:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[5] = var5;
            var5 = {};
            var7 = 'leaveActivity';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = arg1;
                    var5 = this;
                    var4 = var1.location;
                    var3 = var1.applicationId;
                    var6 = var1.showFeedback;
                    var1 = var5.releaseWebView;
                    var7 = var1.bind(var5)();
                    var1 = null;
                    var2 = var1 != var4;
                    if(!var2) { _fun0013_ip = 77; continue _fun0013 }
 41:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var8 = 30;
                    var9 = var9[var8];
                    var8 = undefined;
                    var9 = var10.bind(var8)(var9);
                    var8 = var9.isNotNullish;
                    var2 = var8.bind(var9)(var3);
 77:
                    if(!var2) { _fun0013_ip = 105; continue _fun0013 }
 80:
                    var2 = var5.clearEmbeddedActivityState;
                    var1 = var1 != var7;
                    if(!var1) { _fun0013_ip = 98; continue _fun0013 }
 95:
                    var1 = var6;
 98:
                    var1 = var2.bind(var5)(var4, var3, var1);
 105:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[6] = var5;
            var5 = {};
            var7 = 'hidePIPEmbed';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var2 != var1)) { _fun0014_ip = 13; continue _fun0014 }
 9:
                    var1 = undefined;
                    return var1;
 13:
                    var3 = "Cannot destructure 'undefined' or 'null'.";
                    var4 = var2;
                    var1 = throwTypeError(var4, var3);
                    var1 = undefined;
                    throw var1;
                }
            };
            var5['value'] = var7;
            var1[7] = var5;
            var5 = {};
            var7 = 'clearEmbeddedActivityState';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                var5 = arg2;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 26;
                var3 = var4[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var3);
                var6 = var7.stopEmbeddedActivity;
                var3 = {};
                var8 = arg1;
                var3['location'] = var8;
                var3['applicationId'] = var5;
                var8 = arg3;
                var3['showFeedback'] = var8;
                var3 = var6.bind(var7)(var3);
                var3 = _closure1_slot1;
                var2 = 24;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {'type': 'EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE', 'applicationId': null, 'lockState': null, 'pictureInPictureLockState': null};
                var2['applicationId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5['value'] = var7;
            var1[8] = var5;
            var5 = {};
            var7 = 'releaseFrameId';
            var5['key'] = var7;
            var7 = function value() {
                var3 = this;
                var1 = var3.frameId;
                var2 = undefined;
                var3['frameId'] = var2;
                return var1;
            };
            var5['value'] = var7;
            var1[9] = var5;
            var5 = {};
            var7 = 'hasFrameId';
            var5['key'] = var7;
            var7 = function value() {
                var1 = this;
                var2 = var1.frameId;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var5['value'] = var7;
            var1[10] = var5;
            var5 = {};
            var7 = 'getOrCreateFrameId';
            var5['key'] = var7;
            var6 = function value() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var3 = this;
                    var1 = var3.frameId;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0015_ip = 58; continue _fun0015 }
 15:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 31;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var5.bind(var2)(var4);
                    var2 = var4.v4;
                    var2 = var2.bind(var4)();
                    var3['frameId'] = var2;
                    return var2;
 58:
                    return var1;
                }
            };
            var5['value'] = var6;
            var1[11] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var4 = var4.bind(var1)(var5);
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var15 = var5;
        var4 = new var15[var4](var14);
        var4 = var4 instanceof Object ? var4 : var5;
        var5 = 33;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/activities/native/EmbeddedActivitiesNativeManager.tsx';
        var5 = var6.bind(var7)(var5);
        var3['default'] = var4;
        var3['EMBEDDED_ACTIVITY_WEB_VIEW_KEY'] = var2;
        return var1;
    }
})();
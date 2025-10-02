// app/modules/activities/native/EmbeddedActivitiesNativeManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var8 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var8;
        var _closure1_slot2 = var7;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
                _fun0002_ip = 4; continue _fun0002;
case 5: // catch_target0
                CatchBlockStart(arg_register=1);
case 4:
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
case 0:
                var5 = arg1;
                var7 = arg3;
                var _closure2_slot0 = var7;
                var6 = _closure1_slot7;
                var4 = _closure1_slot6;
                var1 = 1;
                var3 = 3;
                var8 = var1 & var3;
                var1 = var5;
                if(!var8) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var1 = var5.prototype;
case 6:
                var5 = undefined;
                var4 = var4.bind(var5)(var1);
                var1 = arg2;
                var5 = var6.bind(var5)(var4, var1, var7);
                var _closure2_slot1 = var5;
                var1 = 2;
                var3 = var1 & var3;
                var1 = var5;
                if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var4 = 'function';
                var3 = typeof var5;
                var1 = var5;
                if(!(var4 === var3)) { _fun0003_ip = 8; continue _fun0003 }
case 10:
                var1 = function(arg1) {
                    var4 = _closure2_slot1;
                    var3 = var4.apply;
                    var2 = _closure2_slot0;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
case 8:
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
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var2 = arg1;
case 13: // try_start_0
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
case 14:
                        return var2;
case 15:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0004_ip = 16; continue _fun0004 }
case 17: // try_end0
                        _fun0004_ip = 18; continue _fun0004;
case 16:
                        return var2;
case 3: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 17;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.captureException;
                        var2 = var2.bind(var3)(var4);
case 18:
                        var2 = undefined;
                        return var2;
case 11:
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
        if(!var9) { _fun0001_ip = 19; continue _fun0001 }
case 20:
        var9 = 15;
        var9 = var7[var9];
        var14 = var8.bind(var1)(var9);
        var10 = var11.prototype;
        var10 = Object.create(var10, {constructor: {value: var11}});
        var15 = var10;
        var9 = new var15[var11](var14, var13);
        var5 = var9 instanceof Object ? var9 : var10;
case 19:
        var _closure1_slot17 = var5;
        var5 = 32;
        var5 = var7[var5];
        var5 = var8.bind(var1)(var5);
        var4 = function(arg1) {
            var4 = function EmbeddedActivitiesNativeManager(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
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
                    if(var1) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var1 = var9.apply;
                    var1 = var1.bind(var9)(var5, var10);
                    _fun0005_ip = 23; continue _fun0005;
case 21:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var1 = var7.bind(var8)(var9, var10, var6);
case 23:
                    var1 = var3.bind(var4)(var5, var1);
                    var _closure3_slot0 = var1;
                    var2 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
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
                            if(var2) { _fun0006_ip = 24; continue _fun0006 }
case 6:
                            var7 = var5.id;
case 24:
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
case 0:
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
                    if(!(var5 != var7)) { _fun0007_ip = 5; continue _fun0007 }
case 25:
                    var6 = var7.remove;
                    var6 = var6.bind(var7)();
case 5:
                    var6 = _closure1_slot17;
                    var7 = var5 == var6;
                    var6 = undefined;
                    if(var7) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                    var10 = _closure1_slot17;
                    var9 = var10.addListener;
                    var8 = 'onHostDestroy';
                    var7 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var3 = _closure1_slot12;
                            var2 = var3.getConnectedActivityLocation;
                            var5 = var2.bind(var3)();
                            var2 = null;
                            var3 = var2 != var5;
                            var4 = null;
                            if(!var3) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                            var3 = _closure1_slot12;
                            var1 = var3.getSelfEmbeddedActivityForLocation;
                            var4 = var1.bind(var3)(var5);
case 28:
                            var1 = var2 != var4;
                            if(!var1) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                            var1 = var2 != var5;
case 30:
                            if(!var1) { _fun0008_ip = 32; continue _fun0008 }
case 14:
                            var3 = _closure3_slot0;
                            var2 = var3.leaveActivity;
                            var1 = {};
                            var1['location'] = var5;
                            var4 = var4.applicationId;
                            var1['applicationId'] = var4;
                            var1 = var2.bind(var3)(var1);
case 32:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = var9.bind(var10)(var8, var7);
case 26:
                    var3['lifecycleSubscription'] = var6;
                    var7 = var3.scriptMessageSubscription;
                    if(!(var5 != var7)) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                    var6 = var7.remove;
                    var6 = var6.bind(var7)();
case 33:
                    var8 = _closure1_slot16;
                    var7 = var8.addOnMessageListener;
                    var6 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var2 = arg1;
                            var1 = undefined;
                            var9 = undefined;
                            var13 = undefined;
                            var11 = undefined;
                            var5 = undefined;
                            var8 = undefined;
                            var7 = undefined;
                            var6 = undefined;
case 35: // try_start_0
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
                            if(!var14) { _fun0009_ip = 10; continue _fun0009 }
case 36:
                            var15 = _closure1_slot12;
                            var14 = var15.getSelfEmbeddedActivityForLocation;
                            var10 = var14.bind(var15)(var13);
case 10:
                            var11 = var10;
                            var13 = var12 == var10;
                            var10 = undefined;
                            if(var13) { _fun0009_ip = 37; continue _fun0009 }
case 38:
                            var10 = var11.url;
case 37:
                            var5 = var10;
                            var11 = var9;
                            var13 = 'object';
                            var11 = typeof var11;
                            var11 = var13 === var11;
                            var10 = var11;
                            if(!var11) { _fun0009_ip = 39; continue _fun0009 }
case 40:
                            var11 = var5;
                            var10 = var12 != var11;
case 39:
                            if(!var10) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                            var11 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var10 = 18;
                            var10 = var12[var10];
                            var11 = var11.bind(var1)(var10);
                            var10 = var11.handleMessage;
                            var4 = _closure1_slot20;
                            var4 = var10.bind(var11)(var9, var5, var4);
case 41: // try_end0
                            _fun0009_ip = 43; continue _fun0009;
case 44: // catch_target0
                            CatchBlockStart(arg_register=4);
                            var3 = var5;
                            var4 = global;
                            var4 = var4.SyntaxError;
                            var4 = var5 instanceof var4;
                            if(var4) { _fun0009_ip = 45; continue _fun0009 }
case 46:
                            throw var3;
case 45:
                            var3 = var2.data;
                            var2 = _closure1_slot13;
                            if(!(var3 === var2)) { _fun0009_ip = 43; continue _fun0009 }
case 47:
                            var3 = _closure1_slot12;
                            var2 = var3.getConnectedActivityLocation;
                            var2 = var2.bind(var3)();
                            var7 = var2;
                            var4 = null;
                            var3 = var4 != var2;
                            var2 = undefined;
                            if(!var3) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                            var10 = _closure1_slot12;
                            var9 = var10.getSelfEmbeddedActivityForLocation;
                            var3 = var7;
                            var3 = var9.bind(var10)(var3);
                            var8 = var3;
                            var9 = var4 == var3;
                            var3 = undefined;
                            if(var9) { _fun0009_ip = 50; continue _fun0009 }
case 51:
                            var3 = var8.applicationId;
case 50:
                            var2 = var3;
case 48:
                            var6 = var2;
                            var3 = var7;
                            var3 = var4 != var3;
                            var2 = var3;
                            if(!var3) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                            var3 = var6;
                            var2 = var4 != var3;
case 52:
                            if(!var2) { _fun0009_ip = 43; continue _fun0009 }
case 54:
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
case 43:
                            return var1;
                        }
                    };
                    var6 = var7.bind(var8)(var6);
                    var3['scriptMessageSubscription'] = var6;
                    var6 = var3.thermalStateSubscription;
                    if(!(var5 != var6)) { _fun0007_ip = 44; continue _fun0007 }
case 55:
                    var5 = var6.remove;
                    var5 = var5.bind(var6)();
case 44:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 21;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.addListener;
                    var2 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = arg1;
                            var10 = var1.rawThermalState;
                            var3 = _closure1_slot12;
                            var1 = var3.getConnectedActivityLocation;
                            var7 = var1.bind(var3)();
                            var6 = null;
                            var1 = var6 != var7;
                            var5 = null;
                            if(!var1) { _fun0010_ip = 56; continue _fun0010 }
case 57:
                            var3 = _closure1_slot12;
                            var1 = var3.getSelfEmbeddedActivityForLocation;
                            var5 = var1.bind(var3)(var7);
case 56:
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
                            if(var4) { _fun0010_ip = 58; continue _fun0010 }
case 37:
                            var3 = var5.compositeInstanceId;
case 58:
                            var7 = var6 == var5;
                            var4 = undefined;
                            if(var7) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                            var4 = var5.applicationId;
case 59:
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
                            if(var12) { _fun0010_ip = 61; continue _fun0010 }
case 62:
                            var10 = var11.guild_id;
case 61:
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
                            if(!var3) { _fun0010_ip = 63; continue _fun0010 }
case 53:
                            var3 = var6 != var4;
case 63:
                            if(!var3) { _fun0010_ip = 64; continue _fun0010 }
case 52:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var7];
                            var4 = var6.bind(var1)(var4);
                            var4 = var4.ThermalStates;
                            var4 = var4.SERIOUS;
                            var3 = var5 >= var4;
case 64:
                            if(!var3) { _fun0010_ip = 65; continue _fun0010 }
case 66:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 26;
                            var2 = var4[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.requestRespondToSeriousThermalState;
                            var2 = var2.bind(var3)();
case 65:
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
case 0:
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
                    if(!(var2 != var5)) { _fun0011_ip = 67; continue _fun0011 }
case 68:
                    var4 = var5.remove;
                    var4 = var4.bind(var5)();
case 67:
                    var5 = var3.scriptMessageSubscription;
                    if(!(var2 != var5)) { _fun0011_ip = 21; continue _fun0011 }
case 69:
                    var4 = var5.remove;
                    var4 = var4.bind(var5)();
case 21:
                    var3 = var3.thermalStateSubscription;
                    if(!(var2 != var3)) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                    var2 = var3.remove;
                    var2 = var2.bind(var3)();
case 70:
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
case 0:
                    var2 = this;
                    var1 = var2.releaseFrameId;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    if(!(var2 != var1)) { _fun0012_ip = 72; continue _fun0012 }
case 35:
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
case 72:
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
case 0:
                    var1 = arg1;
                    var5 = this;
                    var4 = var1.location;
                    var3 = var1.applicationId;
                    var6 = var1.showFeedback;
                    var1 = var5.releaseWebView;
                    var7 = var1.bind(var5)();
                    var1 = null;
                    var2 = var1 != var4;
                    if(!var2) { _fun0013_ip = 36; continue _fun0013 }
case 73:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var8 = 30;
                    var9 = var9[var8];
                    var8 = undefined;
                    var9 = var10.bind(var8)(var9);
                    var8 = var9.isNotNullish;
                    var2 = var8.bind(var9)(var3);
case 36:
                    if(!var2) { _fun0013_ip = 74; continue _fun0013 }
case 75:
                    var2 = var5.clearEmbeddedActivityState;
                    var1 = var1 != var7;
                    if(!var1) { _fun0013_ip = 76; continue _fun0013 }
case 77:
                    var1 = var6;
case 76:
                    var1 = var2.bind(var5)(var4, var3, var1);
case 74:
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
case 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var2 != var1)) { _fun0014_ip = 78; continue _fun0014 }
case 79:
                    var1 = undefined;
                    return var1;
case 78:
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
case 0:
                    var3 = this;
                    var1 = var3.frameId;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0015_ip = 80; continue _fun0015 }
case 81:
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
case 80:
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
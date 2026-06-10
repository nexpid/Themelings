// app/modules/frames/native/FramesNativeManager.tsx
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
                _closure1_slot15 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot15 = var1;
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
        var _closure1_slot16 = var1;
        var1 = function postMessageToWebView() {
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
                        var4 = _closure1_slot13;
                        var3 = var4.injectJavaScript;
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var5 = 14;
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
                        var2 = 15;
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
            _closure1_slot18 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot18 = var1;
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
        var2 = var6.bind(var1)(var2);
        var2 = var2.ComponentActions;
        var _closure1_slot11 = var2;
        var2 = 10;
        var2 = var7[var2];
        var2 = var6.bind(var1)(var2);
        var2 = var2.DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
        var _closure1_slot12 = var2;
        var2 = 11;
        var2 = var7[var2];
        var9 = var6.bind(var1)(var2);
        var5 = var9.getWebViewProxy;
        var2 = 'FRAME_WEB_VIEW_KEY';
        var5 = var5.bind(var9)(var2);
        var _closure1_slot13 = var5;
        var5 = 12;
        var5 = var7[var5];
        var9 = var6.bind(var1)(var5);
        var5 = var9.isAndroid;
        var9 = var5.bind(var9)();
        var5 = null;
        if(!var9) { _fun0001_ip = 19; continue _fun0001 }
case 20:
        var9 = 13;
        var9 = var7[var9];
        var14 = var8.bind(var1)(var9);
        var10 = var11.prototype;
        var10 = Object.create(var10, {constructor: {value: var11}});
        var15 = var10;
        var9 = new var15[var11](var14, var13);
        var5 = var9 instanceof Object ? var9 : var10;
case 19:
        var _closure1_slot14 = var5;
        var5 = 24;
        var5 = var7[var5];
        var5 = var8.bind(var1)(var5);
        var4 = function(arg1) {
            var4 = function FramesNativeManager() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = this;
                    var3 = undefined;
                    var5 = undefined;
                    var1 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var1 = var1.bind(var3)(var4, var2);
                    var1 = _closure1_slot6;
                    var9 = var1.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var1 = _closure1_slot15;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var7 = var9.apply;
                    var5 = arguments;
                    var1 = var5;
                    var1 = var7.bind(var9)(var4, var1);
                    _fun0005_ip = 23; continue _fun0005;
case 21:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var3)(var4);
                    var6 = var6.constructor;
                    var5 = arguments;
                    var1 = var7.bind(var8)(var9, var5, var6);
case 23:
                    var1 = var2.bind(var3)(var4, var1);
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
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var8 = _closure1_slot16;
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
                    if(!(var5 != var7)) { _fun0006_ip = 5; continue _fun0006 }
case 24:
                    var6 = var7.remove;
                    var6 = var6.bind(var7)();
case 5:
                    var6 = _closure1_slot14;
                    var7 = var5 == var6;
                    var6 = undefined;
                    if(var7) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                    var10 = _closure1_slot14;
                    var9 = var10.addListener;
                    var8 = 'onHostDestroy';
                    var7 = function() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var2 = _closure1_slot10;
                            var1 = var2.getConnectedFrame;
                            var4 = var1.bind(var2)();
                            var1 = null;
                            if(!(var1 != var4)) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                            var3 = _closure3_slot0;
                            var2 = var3.leaveFrame;
                            var1 = {};
                            var4 = var4.applicationId;
                            var1['applicationId'] = var4;
                            var1 = var2.bind(var3)(var1);
case 27:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = var9.bind(var10)(var8, var7);
case 25:
                    var3['lifecycleSubscription'] = var6;
                    var6 = var3.scriptMessageSubscription;
                    if(!(var5 != var6)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                    var5 = var6.remove;
                    var5 = var5.bind(var6)();
case 29:
                    var5 = _closure1_slot13;
                    var4 = var5.addOnMessageListener;
                    var2 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var2 = arg1;
                            var1 = undefined;
                            var8 = undefined;
                            var10 = undefined;
                            var7 = undefined;
                            var4 = undefined;
                            var6 = undefined;
case 31: // try_start_0
                            var5 = global;
                            var11 = var5.JSON;
                            var9 = var11.parse;
                            var5 = var2;
                            var5 = var5.data;
                            var8 = var9.bind(var11)(var5);
                            var11 = _closure1_slot10;
                            var9 = var11.getConnectedFrame;
                            var9 = var9.bind(var11)();
                            var10 = var9;
                            var11 = null;
                            var12 = var11 == var9;
                            var9 = undefined;
                            if(var12) { _fun0008_ip = 9; continue _fun0008 }
case 32:
                            var9 = var10.url;
case 9:
                            var7 = var9;
                            var10 = var8;
                            var12 = 'object';
                            var10 = typeof var10;
                            var10 = var12 === var10;
                            var9 = var10;
                            if(!var10) { _fun0008_ip = 18; continue _fun0008 }
case 33:
                            var10 = var7;
                            var9 = var11 != var10;
case 18:
                            if(!var9) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                            var10 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var9 = 16;
                            var9 = var11[var9];
                            var10 = var10.bind(var1)(var9);
                            var9 = var10.handleMessage;
                            var5 = _closure1_slot17;
                            var5 = var9.bind(var10)(var8, var7, var5);
case 34: // try_end0
                            _fun0008_ip = 36; continue _fun0008;
case 37: // catch_target0
                            CatchBlockStart(arg_register=6);
                            var3 = var7;
                            var5 = global;
                            var5 = var5.SyntaxError;
                            var5 = var7 instanceof var5;
                            if(var5) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                            throw var3;
case 38:
                            var3 = var2.data;
                            var2 = _closure1_slot12;
                            if(!(var3 === var2)) { _fun0008_ip = 36; continue _fun0008 }
case 40:
                            var3 = _closure1_slot10;
                            var2 = var3.getConnectedFrame;
                            var2 = var2.bind(var3)();
                            var4 = var2;
                            var3 = null;
                            var7 = var3 == var2;
                            var2 = undefined;
                            if(var7) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                            var2 = var4.applicationId;
case 41:
                            var6 = var2;
                            if(!(var3 != var2)) { _fun0008_ip = 36; continue _fun0008 }
case 43:
                            var4 = _closure3_slot0;
                            var3 = var4.leaveFrame;
                            var2 = {};
                            var2['applicationId'] = var6;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var2 = 17;
                            var2 = var9[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.show;
                            var2 = {};
                            var8 = _closure1_slot0;
                            var5 = 18;
                            var6 = var9[var5];
                            var6 = var8.bind(var1)(var6);
                            var10 = var6.intl;
                            var7 = var10.string;
                            var6 = var9[var5];
                            var6 = var8.bind(var1)(var6);
                            var6 = var6.t;
                            var6 = var6.tYBBWz;
                            var6 = var7.bind(var10)(var6);
                            var2['body'] = var6;
                            var6 = var9[var5];
                            var6 = var8.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var8.bind(var1)(var5);
                            var5 = var5.t;
                            var5 = var5.BddRzS;
                            var5 = var6.bind(var7)(var5);
                            var2['confirmText'] = var5;
                            var2 = var3.bind(var4)(var2);
case 36:
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    var3['scriptMessageSubscription'] = var2;
                    return var1;
                }
            };
            var5['value'] = var1;
            var1 = new Array(9);
            var1[0] = var5;
            var5 = {};
            var7 = '_terminate';
            var5['key'] = var7;
            var7 = function value() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = this;
                    var6 = _closure1_slot16;
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
                    if(!(var2 != var5)) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                    var4 = var5.remove;
                    var4 = var4.bind(var5)();
case 44:
                    var3 = var3.scriptMessageSubscription;
                    if(!(var2 != var3)) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                    var2 = var3.remove;
                    var2 = var2.bind(var3)();
case 46:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[1] = var5;
            var5 = {};
            var7 = 'showRPCDisconnectErrorUI';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var1 = arg1;
                var10 = var1.code;
                var5 = var1.message;
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 17;
                var2 = var11[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.show;
                var2 = {};
                var7 = _closure1_slot0;
                var6 = 18;
                var8 = var11[var6];
                var8 = var7.bind(var1)(var8);
                var9 = var8.intl;
                var8 = var9.formatToPlainString;
                var6 = var11[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.t;
                var7 = var6.hbiAO6;
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
            var7 = 'leaveFrame';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = this;
                    var1 = arg1;
                    var5 = var1.applicationId;
                    var1 = var4.releaseWebView;
                    var1 = var1.bind(var4)();
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isNotNullish;
                    var2 = var2.bind(var3)(var5);
                    if(!var2) { _fun0010_ip = 48; continue _fun0010 }
case 49:
                    var3 = var4.clearFrameState;
                    var2 = {};
                    var2['applicationId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 48:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[3] = var5;
            var5 = {};
            var7 = 'clearFrameState';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var1 = arg1;
                var5 = var1.applicationId;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 20;
                var2 = var4[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.stopFrame;
                var2 = {};
                var2['applicationId'] = var5;
                var2 = var6.bind(var7)(var2);
                var2 = 21;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {'type': 'FRAME_SET_ORIENTATION_LOCK_STATE', 'applicationId': null, 'lockState': null, 'pictureInPictureLockState': null};
                var2['applicationId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5['value'] = var7;
            var1[4] = var5;
            var5 = {};
            var7 = 'releaseWebView';
            var5['key'] = var7;
            var7 = function value() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = this;
                    var1 = var2.releaseFrameId;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    if(!(var2 != var1)) { _fun0011_ip = 50; continue _fun0011 }
case 51:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 22;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var6 = var3.ComponentDispatch;
                    var5 = var6.dispatch;
                    var3 = _closure1_slot11;
                    var4 = var3.IFRAME_UNMOUNT;
                    var3 = {};
                    var3['id'] = var1;
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = _closure1_slot13;
                    var2 = var3.releaseWebView;
                    var2 = var2.bind(var3)();
case 50:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[5] = var5;
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
            var1[6] = var5;
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
            var1[7] = var5;
            var5 = {};
            var7 = 'getOrCreateFrameId';
            var5['key'] = var7;
            var6 = function value() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = this;
                    var1 = var3.frameId;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0012_ip = 52; continue _fun0012 }
case 31:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 23;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var5.bind(var2)(var4);
                    var2 = var4.v4;
                    var2 = var2.bind(var4)();
                    var3['frameId'] = var2;
                    return var2;
case 52:
                    return var1;
                }
            };
            var5['value'] = var6;
            var1[8] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var4 = var4.bind(var1)(var5);
        var5 = 'FramesNativeManager';
        var4['displayName'] = var5;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var15 = var5;
        var4 = new var15[var4](var14);
        var4 = var4 instanceof Object ? var4 : var5;
        var5 = 25;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/frames/native/FramesNativeManager.tsx';
        var5 = var6.bind(var7)(var5);
        var3['default'] = var4;
        var3['FRAME_WEB_VIEW_KEY'] = var2;
        return var1;
    }
})();
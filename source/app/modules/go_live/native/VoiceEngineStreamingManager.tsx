// app/modules/go_live/native/VoiceEngineStreamingManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot28 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = global;
    var9 = var1.Object;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.Dimensions;
    var4 = var4.Linking;
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 11;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var _closure1_slot13 = var9;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.Base64JPEGPrefix;
    var _closure1_slot14 = var10;
    var10 = var4.Endpoints;
    var _closure1_slot15 = var10;
    var4 = var4.NOOP_NULL;
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getAppIntentScheme;
    var _closure1_slot17 = var4;
    var4 = 14;
    var4 = var6[var4];
    var12 = var7.bind(var1)(var4);
    var4 = var12.prototype;
    var10 = Object.create(var4, {constructor: {value: var12}});
    var15 = 'VoiceEngineStreamingManager';
    var16 = var10;
    var4 = new var16[var12](var15, var14);
    var4 = var4 instanceof Object ? var4 : var10;
    var _closure1_slot19 = var4;
    var4 = var11.get;
    var10 = 'window';
    var4 = var4.bind(var11)(var10);
    var4 = var4.width;
    var _closure1_slot20 = var4;
    var4 = var11.get;
    var4 = var4.bind(var11)(var10);
    var4 = var4.height;
    var _closure1_slot21 = var4;
    var4 = 15;
    var10 = var6[var4];
    var10 = var5.bind(var1)(var10);
    var10 = var10.Timeout;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var16 = var11;
    var10 = new var16[var10](var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot22 = var10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Timeout;
    var10 = var4.prototype;
    var10 = Object.create(var10, {constructor: {value: var4}});
    var16 = var10;
    var4 = new var16[var4](var15);
    var4 = var4 instanceof Object ? var4 : var10;
    var _closure1_slot23 = var4;
    var4 = new Array(0);
    var _closure1_slot24 = var4;
    var4 = function() {
        var4 = _closure1_slot9;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var4 = arg1;
                    var2 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 331; continue _fun0002 }
 18:
                    var8 = var4;
                    var _closure4_slot0 = var4;
                    var5 = var2;
                    var _closure4_slot1 = var2;
                    var2 = undefined;
                    var9 = undefined;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 16;
                    var6 = var10[var6];
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.DisableStreamPreviews;
                    var6 = var7.getSetting;
                    var6 = var6.bind(var7)();
                    if(var6) { _fun0002_ip = 328; continue _fun0002 }
 81:
                    var7 = _closure1_slot22;
                    var6 = var7.stop;
                    var6 = var6.bind(var7)();
                    var10 = _closure1_slot14;
                    var7 = var5;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var6 = var5.concat;
                    var5 = '';
                    var10 = var6.bind(var5)(var10, var7);
                    var9 = var10;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 17;
                    var5 = var7[var5];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var11 = 'STREAM_PREVIEW_FETCH_SUCCESS';
                    var5['type'] = var11;
                    var11 = var8;
                    var5['streamKey'] = var11;
                    var5['previewURL'] = var10;
                    var5 = var6.bind(var7)(var5);
 183: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 18;
                    var5 = var7[var5];
                    var5 = var6.bind(var2)(var5);
                    var7 = var5.HTTP;
                    var6 = var7.post;
                    var5 = {};
                    var11 = _closure1_slot15;
                    var10 = var11.STREAM_PREVIEW;
                    var8 = var10.bind(var11)(var8);
                    var5['url'] = var8;
                    var8 = {};
                    var8['thumbnail'] = var9;
                    var5['body'] = var8;
                    var8 = true;
                    var5['oldFormErrors'] = var8;
                    var8 = false;
                    var5['rejectWithError'] = var8;
                    var5 = var6.bind(var7)(var5);
                    SaveGenerator(address=268);
 266:
                    return var5;
 268:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 276; continue _fun0002 }
 274: // try_end0
                    _fun0002_ip = 328; continue _fun0002;
 276:
                    return var5;
 279: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot19;
                    var6 = var7.error;
                    var5 = 'Failed to post stream preview';
                    var5 = var6.bind(var7)(var5, var8);
                    var6 = _closure1_slot22;
                    var5 = var6.start;
                    var4 = 60000;
                    var3 = function() {
                        var4 = _closure1_slot25;
                        var3 = _closure4_slot0;
                        var2 = _closure4_slot1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var3 = var5.bind(var6)(var4, var3);
 328:
                    return var2;
 331:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot25 = var4;
    var4 = var9.getVoiceChannelId;
    var4 = var4.bind(var9)();
    var _closure1_slot26 = var4;
    var4 = 'handleVoiceChannelSelect';
    var4 = var8.bind(var1)(var4);
    var _closure1_slot27 = var4;
    var4 = 27;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function VoiceEngineStreamingManager(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot28;
                var1 = var1.bind(var4)();
                if(var1) { _fun0003_ip = 84; continue _fun0003 }
 71:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0003_ip = 118; continue _fun0003;
 84:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 118:
                var1 = var3.bind(var4)(var5, var1);
                var3 = global;
                var5 = var3.Object;
                var4 = var5.defineProperty;
                var3 = _closure1_slot27;
                var2 = {};
                var6 = true;
                var2['writable'] = var6;
                var6 = function value(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.channelId;
                        var _closure4_slot0 = var2;
                        var4 = _closure1_slot26;
                        if(!(var4 !== var2)) { _fun0004_ip = 74; continue _fun0004 }
 25:
                        var5 = _closure1_slot18;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0004_ip = 45; continue _fun0004 }
 35:
                        var4 = var5.stopBroadcast;
                        var4 = var4.bind(var5)();
 45:
                        var5 = _closure1_slot11;
                        var4 = var5.getAllActiveStreams;
                        var5 = var4.bind(var5)();
                        var4 = var5.forEach;
                        var3 = function(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                var6 = arg1;
                                var2 = var6.channelId;
                                var1 = _closure4_slot0;
                                if(!(var2 !== var1)) { _fun0005_ip = 81; continue _fun0005 }
 19:
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var1 = 19;
                                var1 = var5[var1];
                                var2 = undefined;
                                var4 = var3.bind(var2)(var1);
                                var1 = var4.encodeStreamKey;
                                var4 = var1.bind(var4)(var6);
                                var1 = 20;
                                var1 = var5[var1];
                                var3 = var3.bind(var2)(var1);
                                var2 = var3.stopStream;
                                var1 = false;
                                var1 = var2.bind(var3)(var4, var1);
 81:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = var4.bind(var5)(var3);
 74:
                        _closure1_slot26 = var2;
                        var1 = undefined;
                        return var1;
                    }
                };
                var2['value'] = var6;
                var2 = var4.bind(var5)(var1, var3, var2);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 21;
            var4 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var4);
            var4 = var6.getVoiceEngine;
            var7 = var4.bind(var6)();
            var _closure1_slot18 = var7;
            var6 = var7.setBroadcastRequestCallback;
            var4 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var5 = _closure1_slot19;
                    var3 = var5.log;
                    var1 = 'Broadcast Requested';
                    var1 = var3.bind(var5)(var1);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 22;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var3);
                    var5 = _closure1_slot18;
                    var3 = null;
                    var6 = var3 != var5;
                    var5 = 'Voice Engine should be initialized in callback';
                    var5 = var7.bind(var1)(var6, var5);
                    var5 = new Array(0);
                    _closure1_slot24 = var5;
                    var6 = _closure1_slot13;
                    var5 = var6.getVoiceChannelId;
                    var7 = var5.bind(var6)();
                    var6 = _closure1_slot12;
                    var5 = var6.getChannel;
                    var6 = var5.bind(var6)(var7);
                    var7 = _closure1_slot11;
                    var5 = var7.getCurrentAppIntent;
                    var5 = var5.bind(var7)();
                    if(!(var3 == var6)) { _fun0006_ip = 161; continue _fun0006 }
 126:
                    var10 = _closure1_slot18;
                    var9 = var10.stopBroadcastWithError;
                    var8 = -1;
                    var7 = 'Not currently in a voice channel';
                    var7 = var9.bind(var10)(var8, var7);
                    _fun0006_ip = 383; continue _fun0006;
 161:
                    var7 = var6.getGuildId;
                    var11 = var7.bind(var6)();
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 20;
                    var7 = var9[var7];
                    var10 = var8.bind(var1)(var7);
                    var9 = var10.startStream;
                    var8 = var6.id;
                    var7 = {};
                    var12 = 'screen:0';
                    var7['sourceId'] = var12;
                    var7 = var9.bind(var10)(var11, var8, var7);
                    var8 = _closure1_slot11;
                    var7 = var8.getCurrentUserActiveStream;
                    var11 = var7.bind(var8)();
                    var _closure4_slot0 = var11;
                    if(!(var3 != var11)) { _fun0006_ip = 383; continue _fun0006 }
 247:
                    var8 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var7 = 23;
                    var7 = var12[var7];
                    var9 = var8.bind(var1)(var7);
                    var8 = var9.selectParticipant;
                    var7 = var6.id;
                    var10 = _closure1_slot0;
                    var6 = 19;
                    var6 = var12[var6];
                    var10 = var10.bind(var1)(var6);
                    var6 = var10.encodeStreamKey;
                    var6 = var6.bind(var10)(var11);
                    var6 = var8.bind(var9)(var7, var6);
                    var6 = _closure1_slot18;
                    var7 = var6.platform;
                    var6 = 'android';
                    if(!(var6 === var7)) { _fun0006_ip = 355; continue _fun0006 }
 329:
                    var8 = _closure1_slot23;
                    var7 = var8.start;
                    var6 = 15000;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 22;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = _closure1_slot18;
                        var2 = null;
                        var3 = var2 != var3;
                        var2 = 'Voice Engine should be initialized in callback';
                        var2 = var4.bind(var1)(var3, var2);
                        var2 = global;
                        var8 = var2.Math;
                        var7 = var8.min;
                        var4 = _closure1_slot20;
                        var2 = 512;
                        var6 = var2 / var4;
                        var3 = _closure1_slot21;
                        var2 = 288;
                        var2 = var2 / var3;
                        var2 = var7.bind(var8)(var6, var2);
                        var7 = _closure1_slot18;
                        var6 = var7.setBroadcastThumbnailCallback;
                        var12 = var4 * var2;
                        var11 = var3 * var2;
                        var10 = 300;
                        var9 = function(arg1) {
                            var4 = arg1;
                            var6 = _closure1_slot19;
                            var5 = var6.log;
                            var3 = var4.length;
                            var1 = 'Broadcast thumbnail of size:';
                            var1 = var5.bind(var6)(var1, var3);
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 19;
                            var3 = var3[var1];
                            var1 = undefined;
                            var6 = var5.bind(var1)(var3);
                            var5 = var6.encodeStreamKey;
                            var3 = _closure4_slot0;
                            var3 = var5.bind(var6)(var3);
                            var2 = _closure1_slot25;
                            var2 = var2.bind(var1)(var3, var4);
                            return var1;
                        };
                        var13 = var7;
                        var2 = var13[var6](var12, var11, var10, var9, var8);
                        return var1;
                    };
                    var4 = var7.bind(var8)(var6, var4);
 355:
                    if(!(var3 != var5)) { _fun0006_ip = 383; continue _fun0006 }
 359:
                    var4 = _closure1_slot10;
                    var3 = var4.openURL;
                    var2 = _closure1_slot17;
                    var2 = var2.bind(var1)(var5);
                    var2 = var3.bind(var4)(var2);
 383:
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4);
            var7 = _closure1_slot18;
            var6 = var7.setBroadcastFinishedCallback;
            var4 = function() {
                var4 = _closure1_slot19;
                var3 = var4.log;
                var2 = 'Broadcast Finished';
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot22;
                var2 = var3.stop;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot23;
                var2 = var3.stop;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.handleCloseScreenshare;
                var2 = var2.bind(var3)();
                return var1;
            };
            var4 = var6.bind(var7)(var4);
            var7 = _closure1_slot18;
            var6 = var7.setBroadcastAnnotatedCallback;
            var4 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = arg1;
                    var5 = _closure1_slot19;
                    var4 = var5.log;
                    var2 = 'Broadcast Annotated:';
                    var2 = var4.bind(var5)(var2, var3);
                    var2 = 'com.hammerandchisel.discord';
                    if(!(var2 !== var3)) { _fun0007_ip = 99; continue _fun0007 }
 38:
                    var5 = _closure1_slot24;
                    var4 = var5.indexOf;
                    var2 = 0;
                    var6 = var4.bind(var5)(var3, var2);
                    var2 = -1;
                    if(!(var6 > var2)) { _fun0007_ip = 85; continue _fun0007 }
 66:
                    var5 = _closure1_slot24;
                    var4 = var5.splice;
                    var2 = 1;
                    var2 = var4.bind(var5)(var6, var2);
 85:
                    var2 = _closure1_slot24;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
 99:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4);
            var6 = _closure1_slot18;
            var4 = var6.setBroadcastBlockedCallback;
            var3 = function() {
                var3 = _closure1_slot19;
                var2 = var3.log;
                var1 = 'Broadcast Blocked';
                var1 = var2.bind(var3)(var1);
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 25;
                var2 = var9[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.presentLocalNotification;
                var2 = {};
                var8 = _closure1_slot0;
                var5 = 26;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.iYQlws;
                var5 = var6.bind(var7)(var5);
                var2['alertBody'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var4.bind(var6)(var3);
            var4 = _closure1_slot1;
            var3 = 17;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.subscribe;
            var6 = _closure1_slot8;
            var3 = _closure1_slot27;
            var2 = this;
            var2 = var6.bind(var1)(var2, var3);
            var3 = var2[var3];
            var2 = 'VOICE_CHANNEL_SELECT';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 21;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.getVoiceEngine;
                var5 = var3.bind(var4)();
                var3 = null;
                if(!(var3 != var5)) { _fun0008_ip = 89; continue _fun0008 }
 41:
                var3 = var5.setBroadcastRequestCallback;
                var4 = _closure1_slot16;
                var3 = var3.bind(var5)(var4);
                var3 = var5.setBroadcastFinishedCallback;
                var3 = var3.bind(var5)(var4);
                var3 = var5.setBroadcastAnnotatedCallback;
                var3 = var3.bind(var5)(var4);
                var3 = var5.setBroadcastBlockedCallback;
                var3 = var3.bind(var5)(var4);
 89:
                var4 = _closure1_slot22;
                var3 = var4.stop;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot23;
                var3 = var4.stop;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 17;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.unsubscribe;
                var6 = _closure1_slot8;
                var3 = _closure1_slot27;
                var2 = this;
                var2 = var6.bind(var1)(var2, var3);
                var3 = var2[var3];
                var2 = 'VOICE_CHANNEL_SELECT';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getApplicationNames';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot24;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var16 = var4;
    var2 = new var16[var2](var15);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/go_live/native/VoiceEngineStreamingManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
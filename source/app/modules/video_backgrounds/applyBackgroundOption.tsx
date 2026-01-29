// app/modules/video_backgrounds/applyBackgroundOption.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _getFilterBlob() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = global;
                    var5 = var4.fetch;
                    var3 = undefined;
                    var2 = arg1;
                    var2 = var5.bind(var3)(var2);
                    SaveGenerator(address=29);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = var2.blob;
                    var3 = var3.bind(var2)();
                    SaveGenerator(address=49);
case 8:
                    return var3;
case 9:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var5 = var4.Uint8ClampedArray;
                    var4 = var3.arrayBuffer;
                    var4 = var4.bind(var3)();
                    SaveGenerator(address=75);
case 12:
                    return var4;
case 13:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {constructor: {value: var5}});
                    var8 = var6;
                    var7 = var4;
                    var5 = new var8[var5](var7, var6);
                    var5 = var5 instanceof Object ? var5 : var6;
                    return var5;
case 14:
                    return var4;
case 10:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
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
    var1 = function applyBackgroundMediaFilterSettings(arg1, arg2, arg3, arg4, arg5) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isWindows;
            var5 = var3.bind(var4)();
            if(!var5) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 7;
            var3 = var6[var3];
            var6 = var4.bind(var1)(var3);
            var4 = var6.getH264MFVoiceExperimentConfig;
            var3 = {};
            var7 = 'applyBackgroundMediaFilterSettings';
            var3['location'] = var7;
            var3 = var4.bind(var6)(var3);
            var5 = var3.enabled;
case 16:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.applyMediaFilterSettings;
            var2 = {};
            var6 = {};
            var7 = arg3;
            var6['graph'] = var7;
            var7 = arg2;
            var6['target'] = var7;
            var7 = arg4;
            var6['image'] = var7;
            var7 = arg5;
            var6['blob'] = var7;
            var6['useH264MFDecoder'] = var5;
            var5 = arg1;
            var2[var5] = var6;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function applyBackgroundOption() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function _applyBackgroundOption() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var12 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var5 = arg1;
                    var4 = arg2;
                    var2 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var9 = false;
                    var11 = null;
                    if(!(var11 != var12)) { _fun0003_ip = 20; continue _fun0003 }
case 17:
                    var10 = _closure1_slot7;
                    if(!(var12 !== var10)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var13 = typeof var12;
                    var10 = 'string';
                    if(!(var10 !== var13)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var10 = 'number';
                    if(!(var10 !== var13)) { _fun0003_ip = 23; continue _fun0003 }
case 25:
                    var15 = var12.asset;
                    var13 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var14 = 11;
                    var10 = var10[var14];
                    var13 = var13.bind(var2)(var10);
                    var10 = var13.isAnimatedIconHash;
                    var10 = var10.bind(var13)(var15);
                    if(var10) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var16 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var13 = var13[var14];
                    var16 = var16.bind(var2)(var13);
                    var13 = var16.isVideoAssetHash;
                    var10 = var13.bind(var16)(var15);
case 26:
                    var9 = var10;
                    var13 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var14];
                    var14 = var13.bind(var2)(var10);
                    var13 = var14.getVideoFilterAssetURL;
                    var10 = {};
                    var16 = var12.user_id;
                    var10['userId'] = var16;
                    var16 = var12.id;
                    var10['assetId'] = var16;
                    var10['assetHash'] = var15;
                    var15 = _closure1_slot6;
                    var15 = var15.width;
                    var10['size'] = var15;
                    var8 = var13.bind(var14)(var10);
                    _fun0003_ip = 28; continue _fun0003;
case 23:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var10 = 10;
                    var10 = var14[var10];
                    var10 = var13.bind(var2)(var10);
                    var10 = var10.bind(var2)();
                    var10 = var10[var12];
                    var13 = var10.isVideo;
                    var12 = var11 != var13;
                    if(!var12) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var12 = var13;
case 29:
                    var9 = var12;
                    var8 = var10.source;
case 28:
                    var10 = var8;
                    if(!(var11 != var10)) { _fun0003_ip = 31; continue _fun0003 }
case 32: // try_start_0
                    var11 = var9;
                    var10 = undefined;
                    if(var11) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    var12 = var8;
                    var11 = function getFilterImage(arg1) {
                        var2 = arg1;
                        var _closure5_slot0 = var2;
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {constructor: {value: var3}});
                        var4 = function(arg1, arg2) {
                            var2 = arg1;
                            var _closure6_slot0 = var2;
                            var2 = arg2;
                            var _closure6_slot1 = var2;
                            var2 = global;
                            var2 = var2.Image;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {constructor: {value: var2}});
                            var4 = var3;
                            var2 = new var4[var2](var3);
                            var2 = var2 instanceof Object ? var2 : var3;
                            var _closure6_slot2 = var2;
                            var3 = 'anonymous';
                            var2['crossOrigin'] = var3;
                            var3 = function() {
                                var1 = global;
                                var3 = var1.document;
                                var2 = var3.createElement;
                                var1 = 'canvas';
                                var3 = var2.bind(var3)(var1);
                                var1 = _closure1_slot6;
                                var1 = var1.width;
                                var3['width'] = var1;
                                var1 = _closure1_slot6;
                                var1 = var1.height;
                                var3['height'] = var1;
                                var2 = var3.getContext;
                                var1 = '2d';
                                var7 = var2.bind(var3)(var1);
                                var5 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 5;
                                var2 = var2[var1];
                                var1 = undefined;
                                var6 = var5.bind(var1)(var2);
                                var2 = null;
                                var5 = var2 != var7;
                                var2 = 'Canvas context is missing';
                                var2 = var6.bind(var1)(var5, var2);
                                var10 = _closure6_slot2;
                                var6 = var10.height;
                                var5 = var10.width;
                                var5 = var6 / var5;
                                var6 = _closure1_slot6;
                                var9 = var6.height;
                                var4 = _closure1_slot6;
                                var4 = var4.height;
                                var8 = var4 / var5;
                                var4 = var3.width;
                                var4 = var4 - var8;
                                var5 = 2;
                                var14 = var4 / var5;
                                var4 = var3.height;
                                var4 = var4 - var9;
                                var13 = var4 / var5;
                                var4 = var7.drawImage;
                                var16 = var7;
                                var15 = var10;
                                var12 = var8;
                                var11 = var9;
                                var4 = var16[var4](var15, var14, var13, var12, var11, var10);
                                var6 = var7.getImageData;
                                var13 = var3.width;
                                var12 = var3.height;
                                var16 = var7;
                                var15 = 0;
                                var14 = 0;
                                var4 = var16[var6](var15, var14, var13, var12, var11);
                                var3 = _closure6_slot0;
                                var2 = {};
                                var5 = var4.data;
                                var2['data'] = var5;
                                var5 = var4.width;
                                var2['width'] = var5;
                                var4 = var4.height;
                                var2['height'] = var4;
                                var4 = 'rgba';
                                var2['pixelFormat'] = var4;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var2['onload'] = var3;
                            var1 = function(arg1) {
                                var3 = _closure6_slot1;
                                var2 = undefined;
                                var1 = arg1;
                                var1 = var3.bind(var2)(var1);
                                return var1;
                            };
                            var2['onerror'] = var1;
                            var1 = _closure5_slot0;
                            var2['src'] = var1;
                            var1 = undefined;
                            return var1;
                        };
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    };
                    var11 = var11.bind(var2)(var12);
                    SaveGenerator(address=307);
case 35:
                    return var11;
case 36:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                    var10 = var11;
                    if(!var12) { _fun0003_ip = 33; continue _fun0003 }
case 37: // try_end0
                    return var11;
case 33: // try_start_1
                    var7 = var10;
                    var12 = undefined;
                    if(!var9) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                    var6 = function getFilterBlob() {
                        var1 = undefined;
                        var4 = _closure1_slot9;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var6 = var6.bind(var2)(var8);
                    SaveGenerator(address=343);
case 40:
                    return var6;
case 41:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    var12 = var6;
                    if(var8) { _fun0003_ip = 42; continue _fun0003 }
case 38:
                    var11 = _closure1_slot10;
                    var10 = var5;
                    var20 = var4;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var8 = 9;
                    var8 = var14[var8];
                    var8 = var13.bind(var2)(var8);
                    var8 = var8.FilterSettingsGraph;
                    var19 = var8.BACKGROUND_REPLACEMENT;
                    var18 = var7;
                    var22 = undefined;
                    var21 = var10;
                    var17 = var12;
                    var7 = var22[var11](var21, var20, var19, var18, var17, var16);
case 43: // try_end1
                    _fun0003_ip = 31; continue _fun0003;
case 42:
                    return var6;
case 44: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=5);
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 8;
                    var6 = var8[var6];
                    var7 = var7.bind(var2)(var6);
                    var6 = var7.errorApplyingMediaFilterSettings;
                    var6 = var6.bind(var7)();
case 31:
                    return var2;
case 21:
                    var8 = _closure1_slot10;
                    var7 = var5;
                    var6 = var4;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 9;
                    var3 = var10[var3];
                    var3 = var9.bind(var2)(var3);
                    var3 = var3.FilterSettingsGraph;
                    var3 = var3.BACKGROUND_BLUR;
                    var3 = var8.bind(var2)(var7, var6, var3);
                    return var2;
case 20:
                    var6 = _closure1_slot10;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 9;
                    var3 = var8[var3];
                    var3 = var7.bind(var2)(var3);
                    var3 = var3.FilterSettingsGraph;
                    var3 = var3.NONE;
                    var3 = var6.bind(var2)(var5, var4, var3);
                    return var2;
case 18:
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
    var4 = function applyBackgroundOptionLive() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var4;
    var1 = function _applyBackgroundOptionLive() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    var2 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                    var6 = var2.track;
                    var4 = undefined;
                    if(!(var6 === var4)) { _fun0004_ip = 5; continue _fun0004 }
case 4:
                    var6 = true;
case 5:
                    var8 = var2.location;
                    SaveGenerator(address=38);
case 47:
                    return var4;
case 17:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 48; continue _fun0004 }
case 8:
                    var10 = _closure1_slot11;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var11 = 9;
                    var3 = var13[var11];
                    var3 = var12.bind(var4)(var3);
                    var3 = var3.FilterSettingsKey;
                    var7 = var3.CAMERA_BACKGROUND_LIVE;
                    var3 = {};
                    var11 = var13[var11];
                    var11 = var12.bind(var4)(var11);
                    var11 = var11.FilterTargetType;
                    var11 = var11.INPUT_DEVICE;
                    var3['type'] = var11;
                    var3 = var10.bind(var4)(var7, var3, var9);
                    SaveGenerator(address=124);
case 49:
                    return var3;
case 50:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0004_ip = 51; continue _fun0004 }
case 52:
                    if(!var6) { _fun0004_ip = 53; continue _fun0004 }
case 54:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 12;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.trackBackgroundOptionUpdated;
                    var5 = 'Enabled';
                    var5 = var6.bind(var7)(var9, var8, var5);
case 53:
                    return var4;
case 51:
                    return var3;
case 48:
                    return var2;
case 45:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _applyBackgroundOptionPreview() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    var2 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 55; continue _fun0005 }
case 46:
                    var6 = var2.track;
                    var4 = undefined;
                    if(!(var6 === var4)) { _fun0005_ip = 5; continue _fun0005 }
case 4:
                    var6 = true;
case 5:
                    var8 = var2.location;
                    SaveGenerator(address=38);
case 47:
                    return var4;
case 17:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 56; continue _fun0005 }
case 8:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var3 = 8;
                    var3 = var13[var3];
                    var7 = var12.bind(var4)(var3);
                    var3 = var7.startApplyMediaFilterSettings;
                    var3 = var3.bind(var7)();
                    var10 = _closure1_slot11;
                    var11 = 9;
                    var3 = var13[var11];
                    var3 = var12.bind(var4)(var3);
                    var3 = var3.FilterSettingsKey;
                    var7 = var3.CAMERA_BACKGROUND_PREVIEW;
                    var3 = {};
                    var11 = var13[var11];
                    var11 = var12.bind(var4)(var11);
                    var11 = var11.FilterTargetType;
                    var11 = var11.STREAM;
                    var3['type'] = var11;
                    var11 = arg2;
                    var3['streamId'] = var11;
                    var3 = var10.bind(var4)(var7, var3, var9);
                    SaveGenerator(address=154);
case 57:
                    return var3;
case 58:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                    if(!var6) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 12;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.trackBackgroundOptionUpdated;
                    var5 = 'Preview';
                    var5 = var6.bind(var7)(var9, var8, var5);
case 61:
                    return var4;
case 59:
                    return var3;
case 56:
                    return var2;
case 55:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var8 = var5.BACKGROUND_REPLACEMENT_SIZE;
    var _closure1_slot6 = var8;
    var5 = var5.BLUR_BACKGROUND_OPTION;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.NOOP;
    var _closure1_slot8 = var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_backgrounds/applyBackgroundOption.tsx';
    var5 = var6.bind(var7)(var5);
    var3['applyBackgroundOptionLive'] = var4;
    var4 = function applyBackgroundOptionPreview() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['applyBackgroundOptionPreview'] = var4;
    var2 = function applyInitialVideoBackgroundOption() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot4;
            var2 = var3.getCurrentUser;
            var6 = var2.bind(var3)();
            var3 = null;
            if(!(var3 != var6)) { _fun0006_ip = 63; continue _fun0006 }
case 64:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 13;
            var2 = var7[var2];
            var5 = undefined;
            var4 = var4.bind(var5)(var2);
            var2 = var4.getLastUsedVideoBackgroundOption;
            var4 = var2.bind(var4)(var6);
            var6 = _closure1_slot1;
            var2 = 14;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.bind(var5)();
            if(!var2) { _fun0006_ip = 65; continue _fun0006 }
case 66:
            var6 = _closure1_slot5;
            var6 = var6.hasBeenApplied;
            var2 = !var6;
case 65:
            if(!var2) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var2 = var3 != var4;
case 67:
            if(!var2) { _fun0006_ip = 63; continue _fun0006 }
case 69:
            var3 = _closure1_slot13;
            var2 = {};
            var6 = false;
            var2['track'] = var6;
            var3 = var3.bind(var5)(var4, var2);
            var2 = var3.catch;
            var1 = _closure1_slot8;
            var1 = var2.bind(var3)(var1);
case 63:
            var1 = undefined;
            return var1;
        }
    };
    var3['applyInitialVideoBackgroundOption'] = var2;
    return var1;
})();
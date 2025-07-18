// app/modules/video_backgrounds/applyBackgroundOption.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 116; continue _fun0001 }
 7:
                    var4 = global;
                    var5 = var4.fetch;
                    var3 = undefined;
                    var2 = arg1;
                    var2 = var5.bind(var3)(var2);
                    SaveGenerator(address=29);
 27:
                    return var2;
 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 113; continue _fun0001 }
 35:
                    var3 = var2.blob;
                    var3 = var3.bind(var2)();
                    SaveGenerator(address=49);
 47:
                    return var3;
 49:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 110; continue _fun0001 }
 55:
                    var5 = var4.Uint8ClampedArray;
                    var4 = var3.arrayBuffer;
                    var4 = var4.bind(var3)();
                    SaveGenerator(address=75);
 73:
                    return var4;
 75:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 107; continue _fun0001 }
 81:
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {constructor: {value: var5}});
                    var8 = var6;
                    var7 = var4;
                    var5 = new var8[var5](var7, var6);
                    var5 = var5 instanceof Object ? var5 : var6;
                    return var5;
 107:
                    return var4;
 110:
                    return var3;
 113:
                    return var2;
 116:
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
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.applyMediaFilterSettings;
        var2 = {};
        var6 = {};
        var5 = arg3;
        var6['graph'] = var5;
        var5 = arg2;
        var6['target'] = var5;
        var5 = arg4;
        var6['image'] = var5;
        var5 = arg5;
        var6['blob'] = var5;
        var5 = arg1;
        var2[var5] = var6;
        var2 = var3.bind(var4)(var2);
        return var1;
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
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var12 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 546; continue _fun0002 }
 15:
                    var5 = arg1;
                    var4 = arg2;
                    var2 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var9 = false;
                    var11 = null;
                    if(!(var11 != var12)) { _fun0002_ip = 497; continue _fun0002 }
 38:
                    var10 = _closure1_slot7;
                    if(!(var12 !== var10)) { _fun0002_ip = 445; continue _fun0002 }
 52:
                    var13 = typeof var12;
                    var10 = 'string';
                    if(!(var10 !== var13)) { _fun0002_ip = 218; continue _fun0002 }
 66:
                    var10 = 'number';
                    if(!(var10 !== var13)) { _fun0002_ip = 218; continue _fun0002 }
 77:
                    var15 = var12.asset;
                    var13 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var14 = 9;
                    var10 = var10[var14];
                    var13 = var13.bind(var2)(var10);
                    var10 = var13.isAnimatedIconHash;
                    var10 = var10.bind(var13)(var15);
                    if(var10) { _fun0002_ip = 145; continue _fun0002 }
 117:
                    var16 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var13 = var13[var14];
                    var16 = var16.bind(var2)(var13);
                    var13 = var16.isVideoAssetHash;
                    var10 = var13.bind(var16)(var15);
 145:
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
                    _fun0002_ip = 270; continue _fun0002;
 218:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var10 = 8;
                    var10 = var14[var10];
                    var10 = var13.bind(var2)(var10);
                    var10 = var10.bind(var2)();
                    var10 = var10[var12];
                    var13 = var10.isVideo;
                    var12 = var11 != var13;
                    if(!var12) { _fun0002_ip = 262; continue _fun0002 }
 259:
                    var12 = var13;
 262:
                    var9 = var12;
                    var8 = var10.source;
 270:
                    var10 = var8;
                    if(!(var11 != var10)) { _fun0002_ip = 442; continue _fun0002 }
 280: // try_start_0
                    var11 = var9;
                    var10 = undefined;
                    if(var11) { _fun0002_ip = 317; continue _fun0002 }
 288:
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
                    SaveGenerator(address=305);
 303:
                    return var11;
 305:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                    var10 = var11;
                    if(!var12) { _fun0002_ip = 317; continue _fun0002 }
 314: // try_end0
                    return var11;
 317: // try_start_1
                    var7 = var10;
                    var12 = undefined;
                    if(!var9) { _fun0002_ip = 348; continue _fun0002 }
 325:
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
                    SaveGenerator(address=339);
 337:
                    return var6;
 339:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    var12 = var6;
                    if(var8) { _fun0002_ip = 407; continue _fun0002 }
 348:
                    var11 = _closure1_slot10;
                    var10 = var5;
                    var20 = var4;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var8 = 7;
                    var8 = var14[var8];
                    var8 = var13.bind(var2)(var8);
                    var8 = var8.FilterSettingsGraph;
                    var19 = var8.BACKGROUND_REPLACEMENT;
                    var18 = var7;
                    var22 = undefined;
                    var21 = var10;
                    var17 = var12;
                    var7 = var22[var11](var21, var20, var19, var18, var17, var16);
 405: // try_end1
                    _fun0002_ip = 442; continue _fun0002;
 407:
                    return var6;
 410: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=5);
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 6;
                    var6 = var8[var6];
                    var7 = var7.bind(var2)(var6);
                    var6 = var7.errorApplyingMediaFilterSettings;
                    var6 = var6.bind(var7)();
 442:
                    return var2;
 445:
                    var8 = _closure1_slot10;
                    var7 = var5;
                    var6 = var4;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 7;
                    var3 = var10[var3];
                    var3 = var9.bind(var2)(var3);
                    var3 = var3.FilterSettingsGraph;
                    var3 = var3.BACKGROUND_BLUR;
                    var3 = var8.bind(var2)(var7, var6, var3);
                    return var2;
 497:
                    var6 = _closure1_slot10;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 7;
                    var3 = var8[var3];
                    var3 = var7.bind(var2)(var3);
                    var3 = var3.FilterSettingsGraph;
                    var3 = var3.NONE;
                    var3 = var6.bind(var2)(var5, var4, var3);
                    return var2;
 546:
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
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var9 = arg1;
                    var2 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 179; continue _fun0003 }
 16:
                    var6 = var2.track;
                    var4 = undefined;
                    if(!(var6 === var4)) { _fun0003_ip = 29; continue _fun0003 }
 27:
                    var6 = true;
 29:
                    var8 = var2.location;
                    SaveGenerator(address=38);
 36:
                    return var4;
 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 176; continue _fun0003 }
 47:
                    var10 = _closure1_slot11;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var11 = 7;
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
 122:
                    return var3;
 124:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0003_ip = 173; continue _fun0003 }
 130:
                    if(!var6) { _fun0003_ip = 170; continue _fun0003 }
 133:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 10;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.trackBackgroundOptionUpdated;
                    var5 = 'Enabled';
                    var5 = var6.bind(var7)(var9, var8, var5);
 170:
                    return var4;
 173:
                    return var3;
 176:
                    return var2;
 179:
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
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var9 = arg1;
                    var2 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 211; continue _fun0004 }
 16:
                    var6 = var2.track;
                    var4 = undefined;
                    if(!(var6 === var4)) { _fun0004_ip = 29; continue _fun0004 }
 27:
                    var6 = true;
 29:
                    var8 = var2.location;
                    SaveGenerator(address=38);
 36:
                    return var4;
 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 208; continue _fun0004 }
 47:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var3 = 6;
                    var3 = var13[var3];
                    var7 = var12.bind(var4)(var3);
                    var3 = var7.startApplyMediaFilterSettings;
                    var3 = var3.bind(var7)();
                    var10 = _closure1_slot11;
                    var11 = 7;
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
 152:
                    return var3;
 154:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0004_ip = 205; continue _fun0004 }
 160:
                    if(!var6) { _fun0004_ip = 202; continue _fun0004 }
 163:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 10;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.trackBackgroundOptionUpdated;
                    var5 = 'Preview';
                    var5 = var6.bind(var7)(var9, var8, var5);
 202:
                    return var4;
 205:
                    return var3;
 208:
                    return var2;
 211:
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
    var5 = 13;
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
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = _closure1_slot4;
            var2 = var3.getCurrentUser;
            var6 = var2.bind(var3)();
            var3 = null;
            if(!(var3 != var6)) { _fun0005_ip = 136; continue _fun0005 }
 22:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var2 = var7[var2];
            var5 = undefined;
            var4 = var4.bind(var5)(var2);
            var2 = var4.getLastUsedVideoBackgroundOption;
            var4 = var2.bind(var4)(var6);
            var6 = _closure1_slot1;
            var2 = 12;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.bind(var5)();
            if(!var2) { _fun0005_ip = 93; continue _fun0005 }
 78:
            var6 = _closure1_slot5;
            var6 = var6.hasBeenApplied;
            var2 = !var6;
 93:
            if(!var2) { _fun0005_ip = 100; continue _fun0005 }
 96:
            var2 = var3 != var4;
 100:
            if(!var2) { _fun0005_ip = 136; continue _fun0005 }
 103:
            var3 = _closure1_slot13;
            var2 = {};
            var6 = false;
            var2['track'] = var6;
            var3 = var3.bind(var5)(var4, var2);
            var2 = var3.catch;
            var1 = _closure1_slot8;
            var1 = var2.bind(var3)(var1);
 136:
            var1 = undefined;
            return var1;
        }
    };
    var3['applyInitialVideoBackgroundOption'] = var2;
    return var1;
})();
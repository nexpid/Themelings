// app/utils/native/UploadUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var26 = require;
    var29 = metroImportDefault;
    var3 = exports;
    var27 = dependencyMap;
    var _closure1_slot0 = var26;
    var _closure1_slot1 = var29;
    var _closure1_slot2 = var27;
    var25 = function openImagePickerUnhandled() {
        var1 = undefined;
        var4 = _closure1_slot30;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var25;
    var1 = function _openImagePickerUnhandled() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var13 = arg1;
                    var12 = undefined;
                    var17 = undefined;
                    var16 = undefined;
                    var5 = undefined;
                    var9 = undefined;
                    var14 = undefined;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 9;
                    var2 = var7[var2];
                    var7 = var3.bind(var12)(var2);
                    var3 = var7.requestPermission;
                    var2 = _closure1_slot20;
                    var2 = var2.PHOTOS;
                    var2 = var3.bind(var7)(var2);
                    SaveGenerator(address=73);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var3 = global;
                    var8 = var3.Error;
                    var3 = var8.prototype;
                    var7 = Object.create(var3, {constructor: {value: var8}});
                    var21 = 'Missing permission';
                    var22 = var7;
                    var3 = new var22[var8](var21, var20);
                    var3 = var3 instanceof Object ? var3 : var7;
                    throw var3;
case 8:
                    var7 = var13;
                    var3 = 'size';
                    var3 = var3 in var7;
                    var7 = {};
                    var8 = var13;
                    if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var3 = var8.width;
                    var7['width'] = var3;
                    var3 = var8.height;
                    var7['height'] = var3;
                    var3 = var7;
                    _fun0001_ip = 12; continue _fun0001;
case 10:
                    var10 = var8.size;
                    var7['width'] = var10;
                    var8 = var8.size;
                    var7['height'] = var8;
                    var3 = var7;
case 12:
                    var17 = var3.width;
                    var16 = var3.height;
                    var11 = global;
                    var8 = var11.Promise;
                    var3 = var8.prototype;
                    var7 = Object.create(var3, {constructor: {value: var8}});
                    var21 = function(arg1, arg2) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var1 = arg2;
                        var _closure5_slot1 = var1;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.launchImageLibrary;
                        var3 = {'mediaType': 'photo', 'includeBase64': true};
                        var2 = function(arg1) {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                                var1 = arg1;
                                var2 = var1.assets;
                                var3 = null;
                                var2 = var3 != var2;
                                var5 = null;
                                if(!var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                                var2 = var1.assets;
                                var2 = var2.length;
                                var4 = 0;
                                var2 = var2 > var4;
                                var5 = null;
                                if(!var2) { _fun0002_ip = 13; continue _fun0002 }
case 15:
                                var2 = var1.assets;
                                var5 = var2[var4];
case 13:
                                var2 = var1.didCancel;
                                if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                                var2 = var1.errorCode;
                                if(!(var3 == var2)) { _fun0002_ip = 18; continue _fun0002 }
case 4:
                                var6 = var3 == var5;
                                var4 = undefined;
                                var2 = undefined;
                                if(var6) { _fun0002_ip = 19; continue _fun0002 }
case 7:
                                var2 = var5.uri;
case 19:
                                if(!(var3 != var2)) { _fun0002_ip = 18; continue _fun0002 }
case 20:
                                var3 = _closure5_slot0;
                                var2 = {};
                                var6 = var5.uri;
                                var2['uri'] = var6;
                                var5 = var5.base64;
                                var2['base64'] = var5;
                                var2 = var3.bind(var4)(var2);
                                _fun0002_ip = 21; continue _fun0002;
case 18:
                                var3 = _closure5_slot1;
                                var2 = global;
                                var4 = var2.Error;
                                var7 = var1.errorMessage;
                                var2 = var4.prototype;
                                var2 = Object.create(var2, {constructor: {value: var4}});
                                var8 = var2;
                                var1 = new var8[var4](var7, var6);
                                var2 = var1 instanceof Object ? var1 : var2;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                _fun0002_ip = 21; continue _fun0002;
case 16:
                                var3 = _closure5_slot1;
                                var1 = global;
                                var4 = var1.Error;
                                var7 = _closure1_slot28;
                                var2 = var4.prototype;
                                var2 = Object.create(var2, {constructor: {value: var4}});
                                var8 = var2;
                                var1 = new var8[var4](var7, var6);
                                var2 = var1 instanceof Object ? var1 : var2;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
case 21:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var22 = var7;
                    var3 = new var22[var8](var21, var20);
                    var3 = var3 instanceof Object ? var3 : var7;
                    SaveGenerator(address=233);
case 22:
                    return var3;
case 23:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var5 = var3;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 11;
                    var7 = var10[var7];
                    var10 = var8.bind(var12)(var7);
                    var8 = var10.getFile;
                    var7 = {};
                    var15 = var3.uri;
                    var7['uri'] = var15;
                    var15 = '';
                    var7['i'] = var15;
                    var9 = var8.bind(var10)(var7);
                    var7 = var3.base64;
                    var15 = null;
                    if(!(var15 != var7)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 12;
                    var7 = var10[var7];
                    var8 = var8.bind(var12)(var7);
                    var7 = var8.isAndroid;
                    var7 = var7.bind(var8)();
                    if(!var7) { _fun0001_ip = 26; continue _fun0001 }
case 28:
                    var7 = var5;
                    var10 = var7.base64;
                    var8 = var10.startsWith;
                    var7 = 'UklGR';
                    var7 = var8.bind(var10)(var7);
                    if(var7) { _fun0001_ip = 29; continue _fun0001 }
case 30:
                    var7 = var5;
                    var10 = var7.base64;
                    var8 = var10.indexOf;
                    var7 = 'ZnR5cA==';
                    var8 = var8.bind(var10)(var7);
                    var7 = 4;
                    if(!(var7 === var8)) { _fun0001_ip = 26; continue _fun0001 }
case 31:
                    var7 = var5;
                    var10 = var7.base64;
                    var8 = var10.indexOf;
                    var7 = 'YXZpZg==';
                    var7 = var8.bind(var10)(var7);
                    var8 = 8;
                    if(!(var8 !== var7)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                    var7 = var5;
                    var18 = var7.base64;
                    var10 = var18.indexOf;
                    var7 = 'YXZpcw==';
                    var7 = var10.bind(var18)(var7);
                    if(!(var8 !== var7)) { _fun0001_ip = 32; continue _fun0001 }
case 26:
                    var7 = var9;
                    var8 = var7.type;
                    var7 = 'image/gif';
                    if(!(var7 !== var8)) { _fun0001_ip = 34; continue _fun0001 }
case 35: // try_start_0
                    var10 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var8 = 13;
                    var8 = var18[var8];
                    var12 = var10.bind(var12)(var8);
                    var10 = var12.openCropper;
                    var8 = {};
                    var18 = 'photo';
                    var8['mediaType'] = var18;
                    var18 = var5;
                    var18 = var18.uri;
                    var8['path'] = var18;
                    var8['width'] = var17;
                    var8['height'] = var16;
                    var16 = true;
                    var8['includeBase64'] = var16;
                    var13 = var13.preferredMimeType;
                    var14 = var13;
                    if(!(var15 == var13)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
                    var13 = var9;
                    var13 = var13.type;
                    _fun0001_ip = 38; continue _fun0001;
case 36:
                    var13 = var14;
case 38:
                    var8['mimeType'] = var13;
                    var8 = var10.bind(var12)(var8);
                    SaveGenerator(address=607);
case 39:
                    return var8;
case 40:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 41; continue _fun0001 }
case 42:
                    var10 = {};
                    var15 = var8.mime;
                    var14 = var8.data;
                    var11 = var11.HermesInternal;
                    var13 = var11.concat;
                    var12 = 'data:';
                    var11 = ';base64,';
                    var11 = var13.bind(var12)(var15, var11, var14);
                    var10['base64'] = var11;
                    var11 = var8.mime;
                    var10['mimeType'] = var11;
case 43: // try_end0
                    return var10;
case 41:
                    return var8;
case 44: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var4 = var8;
                    var10 = var8.code;
                    var8 = 'E_PICKER_CANCELLED';
                    if(!(var8 !== var10)) { _fun0001_ip = 45; continue _fun0001 }
case 46:
                    var8 = {};
                    var11 = _closure1_slot14;
                    var10 = var5;
                    var10 = var10.base64;
                    var10 = var11 + var10;
                    var8['base64'] = var10;
                    var9 = var9.type;
                    var8['mimeType'] = var9;
                    var9 = var4;
                    var9 = var9.message;
                    var8['errorStr'] = var9;
                    return var8;
case 45:
                    throw var4;
case 34:
                    var4 = {};
                    var9 = _closure1_slot15;
                    var8 = var5;
                    var8 = var8.base64;
                    var8 = var9 + var8;
                    var4['base64'] = var8;
                    var4['mimeType'] = var7;
                    return var4;
case 32:
                    var4 = {};
                    var8 = _closure1_slot19;
                    var7 = var5;
                    var7 = var7.base64;
                    var7 = var8 + var7;
                    var4['base64'] = var7;
                    var7 = 'image/avif';
                    var4['mimeType'] = var7;
                    return var4;
case 29:
                    var4 = {};
                    var6 = _closure1_slot18;
                    var5 = var5.base64;
                    var5 = var6 + var5;
                    var4['base64'] = var5;
                    var5 = 'image/webp';
                    var4['mimeType'] = var5;
                    return var4;
case 24:
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
        _closure1_slot30 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot30 = var1;
    var21 = function openImagePicker() {
        var1 = undefined;
        var4 = _closure1_slot31;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var1 = function _openImagePicker() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 47; continue _fun0003 }
case 3:
                    var5 = arg1;
                    var10 = undefined;
                    var6 = undefined;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 9;
                    var2 = var8[var2];
                    var8 = var7.bind(var10)(var2);
                    var7 = var8.requestPermission;
                    var2 = _closure1_slot20;
                    var2 = var2.PHOTOS;
                    var2 = var7.bind(var8)(var2);
                    SaveGenerator(address=65);
case 48:
                    return var2;
case 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0003_ip = 50; continue _fun0003 }
case 51:
                    if(var2) { _fun0003_ip = 52; continue _fun0003 }
case 53:
                    var7 = {};
                    var8 = 'Missing permission';
                    var7['errorStr'] = var8;
                    return var7;
case 52: // try_start_0
                    var7 = _closure1_slot29;
                    var5 = var7.bind(var10)(var5);
                    SaveGenerator(address=106);
case 54:
                    return var5;
case 55:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0003_ip = 56; continue _fun0003 }
case 57:
                    var6 = var5;
                    var8 = var5.errorStr;
                    var7 = null;
                    if(!(var7 != var8)) { _fun0003_ip = 58; continue _fun0003 }
case 18:
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var7 = 14;
                    var7 = var14[var7];
                    var9 = var11.bind(var10)(var7);
                    var8 = var9.presentFailedToast;
                    var7 = 15;
                    var12 = var14[var7];
                    var12 = var11.bind(var10)(var12);
                    var13 = var12.intl;
                    var12 = var13.formatToPlainString;
                    var7 = var14[var7];
                    var7 = var11.bind(var10)(var7);
                    var7 = var7.t;
                    var11 = var7.Ex162N;
                    var7 = {};
                    var14 = var6;
                    var14 = var14.errorStr;
                    var7['reason'] = var14;
                    var7 = var12.bind(var13)(var11, var7);
                    var7 = var8.bind(var9)(var7);
case 58: // try_end0
                    return var6;
case 56:
                    return var5;
case 59: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var3 = var5;
                    var6 = var5.code;
                    var5 = 'E_PICKER_CANCELLED';
                    if(!(var5 !== var6)) { _fun0003_ip = 60; continue _fun0003 }
case 61:
                    var5 = var3;
                    var6 = var5.message;
                    var5 = _closure1_slot28;
                    if(!(var6 !== var5)) { _fun0003_ip = 60; continue _fun0003 }
case 62:
                    var5 = var3;
                    var6 = var5.code;
                    var5 = 'E_CROPPER_IMAGE_NOT_FOUND';
                    if(!(var5 !== var6)) { _fun0003_ip = 63; continue _fun0003 }
case 64:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 14;
                    var5 = var7[var5];
                    var7 = var6.bind(var10)(var5);
                    var6 = var7.presentFailedToast;
                    var5 = var3;
                    var3 = var5.message;
                    var3 = var6.bind(var7)(var3);
                    var3 = {};
                    var5 = var5.message;
                    var3['errorStr'] = var5;
                    _fun0003_ip = 65; continue _fun0003;
case 63:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 14;
                    var4 = var11[var4];
                    var6 = var9.bind(var10)(var4);
                    var5 = var6.presentFailedToast;
                    var4 = 15;
                    var7 = var11[var4];
                    var7 = var9.bind(var10)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var4 = var11[var4];
                    var4 = var9.bind(var10)(var4);
                    var4 = var4.t;
                    var4 = var4.TTzyzc;
                    var4 = var7.bind(var8)(var4);
                    var4 = var5.bind(var6)(var4);
                    var4 = {};
                    var5 = 'No select photo access';
                    var4['errorStr'] = var5;
                    var3 = var4;
case 65:
                    _fun0003_ip = 66; continue _fun0003;
case 60:
                    var4 = {};
                    var5 = 'Cancelled';
                    var4['errorStr'] = var5;
                    var3 = var4;
case 66:
                    return var3;
case 50:
                    return var2;
case 47:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot31 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var1;
    var20 = function mediaManager() {
        var1 = undefined;
        var4 = _closure1_slot33;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot32 = var20;
    var1 = function _mediaManager() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 67; continue _fun0004 }
case 3:
                    var6 = arg1;
                    var5 = arg2;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0004_ip = 68; continue _fun0004 }
case 69:
                    var2 = null;
case 68:
                    var4 = var2;
                    SaveGenerator(address=31);
case 70:
                    return var3;
case 71:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0004_ip = 72; continue _fun0004 }
case 73: // try_start_0
                    var7 = _closure1_slot6;
                    var7 = var7.MediaManager;
                    var6 = var7[var6];
                    var4 = var6.bind(var7)(var5, var4);
                    SaveGenerator(address=64);
case 74:
                    return var4;
case 75:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 5; continue _fun0004 }
case 76: // try_end0
                    return var4;
case 5:
                    return var4;
case 77: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var5 = _closure1_slot25;
                    var4 = var5.warn;
                    var4 = var4.bind(var5)(var6);
                    return var3;
case 72:
                    return var2;
case 67:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot33 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot33 = var1;
    var19 = function getVideoQuality() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = _closure1_slot11;
            var2 = var2.dataSavingMode;
            if(!var2) { _fun0005_ip = 78; continue _fun0005 }
case 79:
            var3 = _closure1_slot12;
            var2 = var3.getType;
            var3 = var2.bind(var3)();
            var2 = _closure1_slot16;
            var2 = var2.CELLULAR;
            if(!(var3 !== var2)) { _fun0005_ip = 80; continue _fun0005 }
case 78:
            var3 = _closure1_slot13;
            var2 = var3.getCurrentUser;
            var6 = var2.bind(var3)();
            var2 = _closure1_slot11;
            var5 = var2.videoUploadQuality;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 16;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.canUseHighVideoUploadQuality;
            var2 = var2.bind(var3)(var6);
            if(var2) { _fun0005_ip = 81; continue _fun0005 }
case 82:
            var2 = _closure1_slot36;
            var2 = var2.bind(var4)(var5);
            _fun0005_ip = 83; continue _fun0005;
case 81:
            var3 = _closure1_slot35;
            var2 = var3.bind(var4)(var5);
case 83:
            return var2;
case 80:
            var1 = _closure1_slot9;
            var1 = var1.LOW;
            return var1;
        }
    };
    var _closure1_slot34 = var19;
    var18 = function resolveModeToVideoQualityForUserWithFeature(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot10;
            var2 = var2.DATA_SAVER;
            if(!(var2 !== var3)) { _fun0006_ip = 84; continue _fun0006 }
case 14:
            var2 = _closure1_slot10;
            var2 = var2.STANDARD;
            if(!(var2 !== var3)) { _fun0006_ip = 85; continue _fun0006 }
case 86:
            var2 = _closure1_slot10;
            var2 = var2.BEST;
            if(!(var2 !== var3)) { _fun0006_ip = 87; continue _fun0006 }
case 88:
            var2 = _closure1_slot9;
            var2 = var2.MEDIUM;
            return var2;
case 87:
            var2 = _closure1_slot9;
            var2 = var2.VERY_HIGH;
            return var2;
case 85:
            var2 = _closure1_slot9;
            var2 = var2.HIGH;
            return var2;
case 84:
            var1 = _closure1_slot9;
            var1 = var1.LOW;
            return var1;
        }
    };
    var _closure1_slot35 = var18;
    var17 = function resolveModeToVideoQualityForFreeUser(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot10;
            var2 = var2.DATA_SAVER;
            if(!(var2 !== var3)) { _fun0007_ip = 84; continue _fun0007 }
case 14:
            var2 = _closure1_slot10;
            var2 = var2.STANDARD;
            if(!(var2 !== var3)) { _fun0007_ip = 85; continue _fun0007 }
case 86:
            var2 = _closure1_slot10;
            var2 = var2.BEST;
            if(!(var2 !== var3)) { _fun0007_ip = 87; continue _fun0007 }
case 88:
            var2 = _closure1_slot9;
            var2 = var2.LOW;
            return var2;
case 87:
            var2 = _closure1_slot9;
            var2 = var2.HIGH;
            return var2;
case 85:
            var2 = _closure1_slot9;
            var2 = var2.MEDIUM;
            return var2;
case 84:
            var1 = _closure1_slot9;
            var1 = var1.LOW;
            return var1;
        }
    };
    var _closure1_slot36 = var17;
    var15 = function getAppDir() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 12;
            var2 = var3[var2];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            if(var2) { _fun0008_ip = 89; continue _fun0008 }
case 73:
            var2 = _closure1_slot6;
            var2 = var2.DCDFileManager;
            var6 = var2.DocumentsDirPath;
            var5 = var6.replace;
            var4 = /Documents$/;
            var2 = '';
            var4 = var5.bind(var6)(var4, var2);
            var2 = '/private';
            var2 = var2 + var4;
            return var2;
case 89:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var4 = 18;
            var2 = var2[var4];
            var5 = var5.bind(var3)(var2);
            var2 = null;
            if(!(var2 != var5)) { _fun0008_ip = 12; continue _fun0008 }
case 90:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var2 = var2.bind(var3)(var1);
            var1 = var2.getConstants;
            var1 = var1.bind(var2)();
            var4 = var1.CacheDirPath;
            var3 = var4.replace;
            var2 = /cache$/;
            var1 = '';
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 12:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var8 = "RTNFileManager doesn't exist?";
            var9 = var2;
            var1 = new var9[var3](var8, var7);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var14 = function getFileInfo(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var3 = arguments[1];
            var4 = var2.item;
            var _closure2_slot0 = var4;
            var4 = var2.spoiler;
            var _closure2_slot1 = var4;
            var4 = var2.description;
            var _closure2_slot2 = var4;
            var2 = var2.mimeType;
            var _closure2_slot3 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0009_ip = 91; continue _fun0009 }
case 13:
            var3 = '';
case 91:
            var _closure2_slot4 = var3;
            var3 = global;
            var3 = var3.Promise;
            var1 = function() {
                var4 = _closure1_slot5;
                var3 = undefined;
                var2 = function* (arg1, arg2) {
                    var1 = function* anon_0_(arg1, arg2) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            StartGenerator();
                            var2 = arg2;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                            if(var5) { _fun0010_ip = 92; continue _fun0010 }
case 93:
                            var5 = arg1;
                            var _closure5_slot0 = var5;
                            var3 = var2;
                            var _closure5_slot1 = var2;
                            var2 = undefined;
                            var _closure5_slot2 = var2;
                            var _closure5_slot3 = var2;
                            var22 = undefined;
                            var _closure5_slot4 = var2;
                            var21 = undefined;
                            var _closure5_slot5 = var2;
                            var20 = undefined;
                            var _closure5_slot6 = var2;
                            var18 = undefined;
                            var _closure5_slot7 = var2;
                            var15 = undefined;
                            var19 = undefined;
                            var _closure5_slot8 = var2;
                            var11 = undefined;
                            var _closure5_slot9 = var2;
                            var _closure5_slot10 = var2;
                            var17 = undefined;
                            var14 = undefined;
                            var12 = undefined;
                            var8 = undefined;
                            var13 = undefined;
                            var5 = function _getVideoMetadata() {
                                var4 = undefined;
                                var1 = undefined;
                                var3 = _closure1_slot5;
                                var2 = function* (arg1) {
                                    var1 = function* anon_0_(arg1) {
                                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                            StartGenerator();
                                            var9 = arg1;
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0011_ip = 94; continue _fun0011 }
case 95:
                                            var3 = var9;
                                            var7 = undefined;
                                            var5 = undefined;
                                            var8 = _closure1_slot41;
                                            var6 = _closure5_slot6;
                                            var6 = var8.bind(var7)(var9, var6);
                                            if(!var6) { _fun0011_ip = 57; continue _fun0011 }
case 96: // try_start_0
                                            var6 = _closure1_slot32;
                                            var4 = var3;
                                            var3 = 'getVideoMetadata';
                                            var3 = var6.bind(var7)(var3, var4);
                                            SaveGenerator(address=66);
case 75:
                                            return var3;
case 97:
                                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                                            if(var4) { _fun0011_ip = 98; continue _fun0011 }
case 85:
                                            _closure5_slot3 = var3;
                                            var6 = var3.rotationDegrees;
                                            var5 = var6;
                                            var4 = null;
                                            var6 = var4 != var6;
                                            var4 = 0;
                                            if(!var6) { _fun0011_ip = 99; continue _fun0011 }
case 100:
                                            var4 = var5;
case 99:
                                            var3['rotationDegrees'] = var4;
case 101: // try_end0
                                            _fun0011_ip = 57; continue _fun0011;
case 98:
                                            return var3;
case 102: // catch_target0
                                            CatchBlockStart(arg_register=2);
case 57:
                                            var3 = global;
                                            var4 = var3.Promise;
                                            var3 = var4.resolve;
                                            var2 = _closure5_slot3;
                                            var2 = var3.bind(var4)(var2);
                                            return var2;
case 94:
                                            return var1;
                                        }
                                    };
                                    return var1;
                                };
                                var4 = var3.bind(var4)(var2);
                                _closure5_slot11 = var4;
                                var3 = var4.apply;
                                var1 = arguments;
                                var2 = var1;
                                var1 = this;
                                var1 = var3.bind(var4)(var1, var2);
                                return var1;
                            };
                            var _closure5_slot11 = var5;
                            var9 = function resolveWithFile(arg1, arg2, arg3) {
                                var1 = undefined;
                                var4 = _closure5_slot12;
                                var3 = var4.apply;
                                var1 = arguments;
                                var2 = var1;
                                var1 = this;
                                var1 = var3.bind(var4)(var1, var2);
                                return var1;
                            };
                            var5 = function _resolveWithFile() {
                                var4 = undefined;
                                var1 = undefined;
                                var3 = _closure1_slot5;
                                var2 = function* (arg1, arg2, arg3) {
                                    var1 = function* anon_0_(arg1, arg2, arg3) {
                                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                            StartGenerator();
                                            var13 = arg1;
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0012_ip = 103; continue _fun0012 }
case 95:
                                            var2 = null;
                                            if(!(var2 == var13)) { _fun0012_ip = 85; continue _fun0012 }
case 104:
                                            var4 = _closure5_slot1;
                                            var2 = global;
                                            var5 = var2.Error;
                                            var2 = var5.prototype;
                                            var3 = Object.create(var2, {constructor: {value: var5}});
                                            var18 = 'Fail to get file path';
                                            var19 = var3;
                                            var2 = new var19[var5](var18, var17);
                                            var3 = var2 instanceof Object ? var2 : var3;
                                            var2 = undefined;
                                            var2 = var4.bind(var2)(var3);
                                            _fun0012_ip = 105; continue _fun0012;
case 85:
                                            var4 = _closure1_slot0;
                                            var5 = _closure1_slot2;
                                            var3 = 11;
                                            var3 = var5[var3];
                                            var5 = undefined;
                                            var6 = var4.bind(var5)(var3);
                                            var4 = var6.getFile;
                                            var3 = {};
                                            var3['uri'] = var13;
                                            var7 = _closure2_slot4;
                                            var3['i'] = var7;
                                            var9 = _closure5_slot6;
                                            var3['overrideType'] = var9;
                                            var9 = _closure5_slot5;
                                            var3['overrideFilename'] = var9;
                                            var6 = var4.bind(var6)(var3);
                                            var10 = var6.filename;
                                            var4 = _closure1_slot4;
                                            var3 = _closure1_slot3;
                                            var9 = var4.bind(var5)(var6, var3);
                                            var6 = {};
                                            var3 = _closure5_slot10;
                                            if(!var3) { _fun0012_ip = 106; continue _fun0012 }
case 107:
                                            var4 = _closure5_slot4;
                                            var3 = var13 !== var4;
case 106:
                                            if(!var3) { _fun0012_ip = 108; continue _fun0012 }
case 109:
                                            var12 = _closure1_slot48;
                                            var18 = _closure5_slot4;
                                            var16 = _closure5_slot5;
                                            var15 = arg2;
                                            var14 = arg3;
                                            var19 = undefined;
                                            var17 = var13;
                                            var2 = var19[var12](var18, var17, var16, var15, var14, var13);
                                            SaveGenerator(address=217);
case 110:
                                            return var2;
case 111:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                            var6 = var2;
                                            if(var3) { _fun0012_ip = 112; continue _fun0012 }
case 108:
                                            var4 = _closure5_slot0;
                                            var3 = {};
                                            var18 = var3;
                                            var17 = var9;
                                            var9 = copyDataProperties(var18, var17);
                                            var9 = 'name';
                                            var3[var9] = var10;
                                            var10 = _closure2_slot1;
                                            var9 = 'spoiler';
                                            var3[var9] = var10;
                                            var9 = _closure2_slot2;
                                            var8 = 'description';
                                            var3[var8] = var9;
                                            var9 = _closure5_slot8;
                                            var8 = 'imageCompressionQuality';
                                            var3[var8] = var9;
                                            var9 = _closure5_slot7;
                                            var8 = 'videoCompressionQuality';
                                            var3[var8] = var9;
                                            var9 = _closure5_slot3;
                                            var8 = 'videoMetadata';
                                            var3[var8] = var9;
                                            var9 = _closure5_slot2;
                                            var8 = 'encodingConfig';
                                            var3[var8] = var9;
                                            var8 = _closure5_slot9;
                                            var9 = var8.width;
                                            var8 = 'sourceWidth';
                                            var3[var8] = var9;
                                            var7 = _closure5_slot9;
                                            var8 = var7.height;
                                            var7 = 'sourceHeight';
                                            var3[var7] = var8;
                                            var8 = var6.psnr;
                                            var7 = 'psnr';
                                            var3[var7] = var8;
                                            var8 = var6.ssim;
                                            var7 = 'ssim';
                                            var3[var7] = var8;
                                            var8 = var6.origin;
                                            var7 = 'origin';
                                            var3[var7] = var8;
                                            var8 = var6.psnrMeasurementLatencyMs;
                                            var7 = 'psnrMeasurementLatencyMs';
                                            var3[var7] = var8;
                                            var7 = var6.ssimMeasurementLatencyMs;
                                            var6 = 'ssimMeasurementLatencyMs';
                                            var3[var6] = var7;
                                            var3 = var4.bind(var5)(var3);
case 105:
                                            var3 = undefined;
                                            return var3;
case 112:
                                            return var2;
case 103:
                                            return var1;
                                        }
                                    };
                                    return var1;
                                };
                                var4 = var3.bind(var4)(var2);
                                _closure5_slot12 = var4;
                                var3 = var4.apply;
                                var1 = arguments;
                                var2 = var1;
                                var1 = this;
                                var1 = var3.bind(var4)(var1, var2);
                                return var1;
                            };
                            var _closure5_slot12 = var5;
                            var7 = function convert(arg1) {
                                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                                    var2 = arg1;
                                    var18 = var2.uri;
                                    var _closure6_slot0 = var18;
                                    var17 = var2.filename;
                                    var _closure6_slot1 = var17;
                                    var20 = var2.isLowQuality;
                                    var _closure6_slot2 = var20;
                                    var7 = var2.compressionQuality;
                                    var _closure6_slot3 = var7;
                                    var9 = var2.videoQualitySetting;
                                    var _closure6_slot4 = var9;
                                    var4 = var2.videoMetadata;
                                    var19 = var2.deviceState;
                                    var12 = var2.hevcEncodingFeatureEnabled;
                                    var5 = var2.hevcEncodingSupportedByDevice;
                                    var10 = var2.fileSize;
                                    var11 = var2.allowAndroidVerticalVideoHEVC;
                                    var8 = var2.useOriginalIfSmaller;
                                    var13 = undefined;
                                    var _closure6_slot5 = var13;
                                    var _closure6_slot6 = var13;
                                    var14 = _closure1_slot41;
                                    var2 = _closure5_slot6;
                                    var14 = var14.bind(var13)(var18, var2);
                                    var15 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    if(var14) { _fun0013_ip = 113; continue _fun0013 }
case 11:
                                    var21 = 12;
                                    var14 = var2[var21];
                                    var16 = var15.bind(var13)(var14);
                                    var14 = var16.isIOS;
                                    var14 = var14.bind(var16)();
                                    if(!var14) { _fun0013_ip = 109; continue _fun0013 }
case 114:
                                    var22 = var18.match;
                                    var16 = _closure1_slot26;
                                    var22 = var22.bind(var18)(var16);
                                    var16 = null;
                                    var14 = var16 != var22;
case 109:
                                    if(var14) { _fun0013_ip = 115; continue _fun0013 }
case 116:
                                    var16 = _closure1_slot0;
                                    var14 = _closure1_slot2;
                                    var14 = var14[var21];
                                    var16 = var16.bind(var13)(var14);
                                    var14 = var16.isIOS;
                                    var14 = var14.bind(var16)();
                                    if(!var14) { _fun0013_ip = 117; continue _fun0013 }
case 118:
                                    var22 = var18.match;
                                    var16 = _closure1_slot27;
                                    var22 = var22.bind(var18)(var16);
                                    var16 = null;
                                    var14 = var16 != var22;
case 117:
                                    if(var14) { _fun0013_ip = 119; continue _fun0013 }
case 120:
                                    var14 = _closure1_slot39;
                                    var14 = var14.bind(var13)(var18, var17, var20);
                                    if(var14) { _fun0013_ip = 121; continue _fun0013 }
case 122:
                                    var16 = _closure1_slot0;
                                    var14 = _closure1_slot2;
                                    var14 = var14[var21];
                                    var16 = var16.bind(var13)(var14);
                                    var14 = var16.isIOS;
                                    var16 = var14.bind(var16)();
                                    var14 = false;
                                    if(!var16) { _fun0013_ip = 123; continue _fun0013 }
case 124:
                                    var16 = _closure1_slot37;
                                    var16 = var16.bind(var13)(var18, var17);
                                    var22 = null;
                                    if(var16) { _fun0013_ip = 125; continue _fun0013 }
case 126:
                                    var21 = var18.match;
                                    var16 = /^assets-library:\\/\\/.+&ext=gif$/i;
                                    var16 = var21.bind(var18)(var16);
                                    var16 = var22 != var16;
                                    _fun0013_ip = 127; continue _fun0013;
case 125:
                                    var23 = var22 == var17;
                                    var21 = undefined;
                                    if(var23) { _fun0013_ip = 128; continue _fun0013 }
case 129:
                                    var24 = var17.match;
                                    var23 = /\.gif$/i;
                                    var21 = var24.bind(var17)(var23);
case 128:
                                    var16 = var22 != var21;
case 127:
                                    var14 = var16;
case 123:
                                    if(var14) { _fun0013_ip = 130; continue _fun0013 }
case 131:
                                    var14 = _closure1_slot40;
                                    var14 = var14.bind(var13)(var18);
                                    if(var14) { _fun0013_ip = 132; continue _fun0013 }
case 133:
                                    var14 = global;
                                    var16 = var14.Promise;
                                    var14 = var16.resolve;
                                    var14 = var14.bind(var16)(var18);
                                    return var14;
case 132:
                                    var16 = _closure1_slot32;
                                    var14 = {};
                                    var14['compressionQuality'] = var7;
                                    var14['isLowQuality'] = var20;
                                    var14['videoQuality'] = var9;
                                    var20 = true;
                                    var14['skipVideoTranscode'] = var20;
                                    var14['useOriginalIfSmaller'] = var8;
                                    var8 = 'resolveToMediaFilePath';
                                    var8 = var16.bind(var13)(var8, var18, var14);
                                    return var8;
case 130:
                                    var14 = _closure1_slot32;
                                    var8 = 'convertToGIFFilePath';
                                    var8 = var14.bind(var13)(var8, var18);
                                    return var8;
case 121:
                                    var16 = _closure1_slot32;
                                    var14 = {};
                                    var14['compressionQuality'] = var7;
                                    var8 = _closure1_slot38;
                                    var8 = var8.bind(var13)(var18, var17);
                                    var14['forceConvertToJPG'] = var8;
                                    var8 = 'convertToJPEG';
                                    var8 = var16.bind(var13)(var8, var18, var14);
                                    return var8;
case 119:
                                    var16 = _closure1_slot32;
                                    var17 = var18.replace;
                                    var14 = _closure1_slot27;
                                    var8 = '';
                                    var14 = var17.bind(var18)(var14, var8);
                                    var8 = 'convertBase64ToGIF';
                                    var8 = var16.bind(var13)(var8, var14);
                                    return var8;
case 115:
                                    var16 = _closure1_slot32;
                                    var17 = var18.replace;
                                    var14 = _closure1_slot26;
                                    var8 = '';
                                    var14 = var17.bind(var18)(var14, var8);
                                    var8 = {};
                                    var8['compressionQuality'] = var7;
                                    var7 = 'convertBase64ToJPEG';
                                    var7 = var16.bind(var13)(var7, var14, var8);
                                    return var7;
case 113:
                                    var14 = 20;
                                    var7 = var2[var14];
                                    var7 = var15.bind(var13)(var7);
                                    var8 = var7.VideoQualityTarget;
                                    var7 = var8.fromCompressionQuality;
                                    var17 = var7.bind(var8)(var9);
                                    var7 = var2[var14];
                                    var9 = var15.bind(var13)(var7);
                                    var8 = var9.canSkipVideoTranscode;
                                    var7 = 21;
                                    var7 = var2[var7];
                                    var16 = var15.bind(var13)(var7);
                                    var7 = var16.maxFileSize;
                                    var26 = var7.bind(var16)();
                                    var30 = var9;
                                    var29 = var17;
                                    var28 = var4;
                                    var27 = var10;
                                    var7 = var30[var8](var29, var28, var27, var26, var25);
                                    _closure6_slot5 = var7;
                                    var8 = var2[var14];
                                    var9 = var15.bind(var13)(var8);
                                    var8 = var9.shouldUseHEVC;
                                    var10 = 12;
                                    var2 = var2[var10];
                                    var15 = var15.bind(var13)(var2);
                                    var2 = var15.isAndroid;
                                    var26 = var2.bind(var15)();
                                    var30 = var9;
                                    var29 = var4;
                                    var28 = var12;
                                    var27 = var5;
                                    var25 = var11;
                                    var18 = var30[var8](var29, var28, var27, var26, var25, var24);
                                    var8 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var2 = var2[var14];
                                    var2 = var8.bind(var13)(var2);
                                    var2 = var2.VIDEO_CODEC_SCALE_FACTORS;
                                    if(var18) { _fun0013_ip = 134; continue _fun0013 }
case 135:
                                    var16 = var2.DEFAULT;
                                    _fun0013_ip = 136; continue _fun0013;
case 134:
                                    var16 = var2.HEVC;
case 136:
                                    var9 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var2 = var8[var14];
                                    var12 = var9.bind(var13)(var2);
                                    var11 = var12.calculateTargetDimensions;
                                    var2 = var17.targetResolution;
                                    var11 = var11.bind(var12)(var4, var2);
                                    var2 = var8[var14];
                                    var15 = var9.bind(var13)(var2);
                                    var12 = var15.calculateOptimalBitrate;
                                    var2 = var8[var14];
                                    var2 = var9.bind(var13)(var2);
                                    var2 = var2.DEFAULT_VIDEO_ENCODING_CONFIG;
                                    var26 = var2.bitrateFloor;
                                    var30 = var15;
                                    var29 = var4;
                                    var28 = var16;
                                    var27 = var17;
                                    var25 = var19;
                                    var12 = var30[var12](var29, var28, var27, var26, var25, var24);
                                    var2 = var8[var14];
                                    var15 = var9.bind(var13)(var2);
                                    var2 = var15.calculateKeyFrameInterval;
                                    var15 = var2.bind(var15)(var18);
                                    var2 = {};
                                    var16 = var8[var14];
                                    var16 = var9.bind(var13)(var16);
                                    var28 = var16.DEFAULT_VIDEO_ENCODING_CONFIG;
                                    var29 = var2;
                                    var16 = copyDataProperties(var29, var28);
                                    var16 = 'useHEVC';
                                    var2[var16] = var18;
                                    var16 = 'videoQuality';
                                    var2[var16] = var17;
                                    var17 = var11.width;
                                    var16 = 'targetWidth';
                                    var2[var16] = var17;
                                    var16 = var11.height;
                                    var11 = 'targetHeight';
                                    var2[var11] = var16;
                                    var11 = 'keyFrameIntervalSeconds';
                                    var2[var11] = var15;
                                    var11 = 'targetBitrate';
                                    var2[var11] = var12;
                                    var8 = var8[var10];
                                    var9 = var9.bind(var13)(var8);
                                    var8 = var9.isAndroid;
                                    var8 = var8.bind(var9)();
                                    if(!var8) { _fun0013_ip = 137; continue _fun0013 }
case 138:
                                    var9 = global;
                                    var10 = var9.Number;
                                    var8 = _closure1_slot8;
                                    var8 = var8.Version;
                                    var10 = var10.bind(var13)(var8);
                                    var8 = 34;
                                    if(!(!(var10 > var8))) { _fun0013_ip = 139; continue _fun0013 }
case 137:
                                    var8 = var4.frameRate;
                                    _fun0013_ip = 140; continue _fun0013;
case 139:
                                    var11 = var9.Math;
                                    var10 = var11.min;
                                    var9 = var4.frameRate;
                                    var12 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var6 = var6[var14];
                                    var6 = var12.bind(var13)(var6);
                                    var6 = var6.DEFAULT_VIDEO_ENCODING_CONFIG;
                                    var6 = var6.frameRate;
                                    var8 = var10.bind(var11)(var9, var6);
case 140:
                                    var6 = 'frameRate';
                                    var2[var6] = var8;
                                    var6 = 'skipVideoTranscode';
                                    var2[var6] = var7;
                                    var7 = var4.isHDRContent;
                                    var6 = 'createHDR';
                                    var2[var6] = var7;
                                    var6 = var4.rotationDegrees;
                                    var4 = 'rotationDegrees';
                                    var2[var4] = var6;
                                    var4 = 'hevcIsSupported';
                                    var2[var4] = var5;
                                    _closure5_slot2 = var2;
                                    var2 = 0;
                                    _closure6_slot6 = var2;
                                    var2 = global;
                                    var3 = var2.Promise;
                                    var2 = var3.prototype;
                                    var2 = Object.create(var2, {constructor: {value: var3}});
                                    var29 = function(arg1, arg2) {
                                        var4 = arg2;
                                        var1 = arg1;
                                        var _closure7_slot0 = var1;
                                        var _closure7_slot1 = var4;
                                        var3 = function() {
                                            var4 = _closure1_slot5;
                                            var3 = undefined;
                                            var2 = function* () {
                                                var1 = function* anon_0_() {
                                                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                                                        StartGenerator();
                                                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                                        if(var2) { _fun0014_ip = 141; continue _fun0014 }
case 3:
                                                        var14 = function* _loop() {
                                                            var1 = function* anon_0__loop() {
                                                                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                                                                    StartGenerator();
                                                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                                                    if(var2) { _fun0015_ip = 142; continue _fun0015 }
case 143:
                                                                    var5 = undefined;
                                                                    var _closure12_slot0 = var5;
                                                                    var6 = _closure1_slot46;
                                                                    var2 = _closure5_slot2;
                                                                    var2 = var6.bind(var5)(var2);
                                                                    SaveGenerator(address=41);
case 144:
                                                                    return var2;
case 145:
                                                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                                                    if(var6) { _fun0015_ip = 146; continue _fun0015 }
case 147:
                                                                    var6 = var2.isSupported;
                                                                    if(var6) { _fun0015_ip = 148; continue _fun0015 }
case 74:
                                                                    var11 = null;
                                                                    if(!(var11 != var2)) { _fun0015_ip = 149; continue _fun0015 }
case 4:
                                                                    var6 = var2.capabilities;
                                                                    if(!(var11 != var6)) { _fun0015_ip = 149; continue _fun0015 }
case 84:
                                                                    var6 = var2.failures;
                                                                    if(!(var11 != var6)) { _fun0015_ip = 149; continue _fun0015 }
case 150:
                                                                    var6 = var2.failures;
                                                                    var8 = var6.length;
                                                                    var6 = 0;
                                                                    if(!(var6 !== var8)) { _fun0015_ip = 149; continue _fun0015 }
case 151:
                                                                    var9 = var2.failures;
                                                                    var8 = var9.find;
                                                                    var6 = function(arg1) {
                                                                        var1 = arg1;
                                                                        var2 = var1.type;
                                                                        var1 = 'codec_not_found';
                                                                        var1 = var1 === var2;
                                                                        return var1;
                                                                    };
                                                                    var6 = var8.bind(var9)(var6);
                                                                    if(!(var11 != var6)) { _fun0015_ip = 118; continue _fun0015 }
case 152:
                                                                    var6 = _closure5_slot2;
                                                                    var6 = var6.useHEVC;
                                                                    if(var6) { _fun0015_ip = 153; continue _fun0015 }
case 154:
                                                                    var8 = _closure1_slot25;
                                                                    var6 = var8.error;
                                                                    var10 = 'No supported video encoder found';
                                                                    var6 = var6.bind(var8)(var10);
                                                                    var8 = _closure7_slot1;
                                                                    var6 = global;
                                                                    var6 = var6.Error;
                                                                    var9 = var6.prototype;
                                                                    var9 = Object.create(var9, {constructor: {value: var6}});
                                                                    var19 = var9;
                                                                    var18 = var10;
                                                                    var6 = new var19[var6](var18, var17);
                                                                    var6 = var6 instanceof Object ? var6 : var9;
                                                                    var6 = var8.bind(var5)(var6);
case 118:
                                                                    var9 = var2.failures;
                                                                    var8 = var9.find;
                                                                    var6 = function(arg1) {
                                                                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                                                                            var2 = arg1;
                                                                            var3 = var2.type;
                                                                            var1 = 'resolution';
                                                                            var1 = var1 === var3;
                                                                            if(var1) { _fun0016_ip = 86; continue _fun0016 }
case 104:
                                                                            var3 = var2.type;
                                                                            var2 = 'resolution_alignment';
                                                                            var1 = var2 === var3;
case 86:
                                                                            return var1;
                                                                        }
                                                                    };
                                                                    var6 = var8.bind(var9)(var6);
                                                                    var6 = var11 != var6;
                                                                    var9 = false;
                                                                    if(!var6) { _fun0015_ip = 155; continue _fun0015 }
case 156:
                                                                    var6 = var2.capabilities;
                                                                    var6 = var6.resolution;
                                                                    var6 = var11 != var6;
                                                                    var9 = false;
                                                                    if(!var6) { _fun0015_ip = 155; continue _fun0015 }
case 157:
                                                                    var6 = var2.capabilities;
                                                                    var6 = var6.resolution;
                                                                    var15 = var6.maxWidth;
                                                                    var6 = var2.capabilities;
                                                                    var6 = var6.resolution;
                                                                    var16 = var6.maxHeight;
                                                                    var6 = _closure5_slot2;
                                                                    var8 = var6.targetWidth;
                                                                    var6 = _closure5_slot2;
                                                                    var6 = var6.targetHeight;
                                                                    var8 = var8 / var6;
                                                                    var13 = global;
                                                                    var14 = var13.Math;
                                                                    var10 = var14.min;
                                                                    var6 = _closure5_slot2;
                                                                    var6 = var6.targetWidth;
                                                                    var10 = var10.bind(var14)(var6, var15);
                                                                    var15 = var13.Math;
                                                                    var14 = var15.min;
                                                                    var6 = _closure5_slot2;
                                                                    var6 = var6.targetHeight;
                                                                    var6 = var14.bind(var15)(var6, var16);
                                                                    var14 = _closure5_slot2;
                                                                    var14 = var14.targetWidth;
                                                                    if(!(var10 !== var14)) { _fun0015_ip = 158; continue _fun0015 }
case 31:
                                                                    var16 = var13.Math;
                                                                    var15 = var16.round;
                                                                    var14 = var10 / var8;
                                                                    var6 = var15.bind(var16)(var14);
case 158:
                                                                    var14 = _closure5_slot2;
                                                                    var14 = var14.targetHeight;
                                                                    if(!(var6 !== var14)) { _fun0015_ip = 159; continue _fun0015 }
case 160:
                                                                    var15 = var13.Math;
                                                                    var14 = var15.round;
                                                                    var8 = var6 * var8;
                                                                    var10 = var14.bind(var15)(var8);
case 159:
                                                                    var8 = var2.capabilities;
                                                                    var8 = var8.blockSize;
                                                                    var14 = var8.widthAlignment;
                                                                    var8 = var8.heightAlignment;
                                                                    var16 = var13.Math;
                                                                    var15 = var16.floor;
                                                                    var10 = var10 / var14;
                                                                    var10 = var15.bind(var16)(var10);
                                                                    var10 = var10 * var14;
                                                                    var14 = var13.Math;
                                                                    var13 = var14.floor;
                                                                    var6 = var6 / var8;
                                                                    var6 = var13.bind(var14)(var6);
                                                                    var8 = var6 * var8;
                                                                    var6 = _closure5_slot2;
                                                                    var6 = var6.targetWidth;
                                                                    var6 = var10 === var6;
                                                                    if(!var6) { _fun0015_ip = 161; continue _fun0015 }
case 162:
                                                                    var13 = _closure5_slot2;
                                                                    var13 = var13.targetHeight;
                                                                    var6 = var8 === var13;
case 161:
                                                                    var9 = false;
                                                                    if(var6) { _fun0015_ip = 155; continue _fun0015 }
case 163:
                                                                    var6 = _closure5_slot2;
                                                                    var6['targetWidth'] = var10;
                                                                    var6 = _closure5_slot2;
                                                                    var6['targetHeight'] = var8;
                                                                    var9 = true;
case 155:
                                                                    var10 = var2.failures;
                                                                    var8 = var10.find;
                                                                    var6 = function(arg1) {
                                                                        var1 = arg1;
                                                                        var2 = var1.type;
                                                                        var1 = 'frameRate';
                                                                        var1 = var1 === var2;
                                                                        return var1;
                                                                    };
                                                                    var8 = var8.bind(var10)(var6);
                                                                    var10 = var2.capabilities;
                                                                    _closure12_slot0 = var10;
                                                                    var6 = var9;
                                                                    if(!(var11 != var8)) { _fun0015_ip = 164; continue _fun0015 }
case 165:
                                                                    var13 = var11 == var10;
                                                                    var12 = undefined;
                                                                    if(var13) { _fun0015_ip = 166; continue _fun0015 }
case 167:
                                                                    var13 = var10.frameRate;
                                                                    var14 = var11 == var13;
                                                                    var12 = undefined;
                                                                    if(var14) { _fun0015_ip = 166; continue _fun0015 }
case 168:
                                                                    var12 = var13.min;
case 166:
                                                                    var6 = var9;
                                                                    if(!(var11 != var12)) { _fun0015_ip = 164; continue _fun0015 }
case 169:
                                                                    var13 = var11 == var10;
                                                                    var12 = undefined;
                                                                    if(var13) { _fun0015_ip = 170; continue _fun0015 }
case 171:
                                                                    var13 = var10.frameRate;
                                                                    var14 = var11 == var13;
                                                                    var12 = undefined;
                                                                    if(var14) { _fun0015_ip = 170; continue _fun0015 }
case 172:
                                                                    var12 = var13.max;
case 170:
                                                                    var6 = var9;
                                                                    if(!(var11 != var12)) { _fun0015_ip = 164; continue _fun0015 }
case 173:
                                                                    var12 = _closure5_slot2;
                                                                    var12 = var12.frameRate;
                                                                    var13 = var8.message;
                                                                    var12 = var13.includes;
                                                                    var8 = 'not supported at resolution';
                                                                    var8 = var12.bind(var13)(var8);
                                                                    if(var8) { _fun0015_ip = 174; continue _fun0015 }
case 175:
                                                                    var8 = global;
                                                                    var14 = var8.Math;
                                                                    var13 = var14.min;
                                                                    var8 = _closure5_slot2;
                                                                    var12 = var8.frameRate;
                                                                    var8 = var10.frameRate;
                                                                    var8 = var8.max;
                                                                    var8 = var13.bind(var14)(var12, var8);
                                                                    _fun0015_ip = 176; continue _fun0015;
case 174:
                                                                    var14 = [60, 30, 29.97, 24, 15];
                                                                    var13 = var14.sort;
                                                                    var12 = function(arg1, arg2) {
                                                                        var2 = arg2;
                                                                        var1 = arg1;
                                                                        var1 = var2 - var1;
                                                                        return var1;
                                                                    };
                                                                    var13 = var13.bind(var14)(var12);
                                                                    var12 = var13.find;
                                                                    var7 = function(arg1) {
                                                                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                                                                            var3 = arg1;
                                                                            var1 = _closure5_slot2;
                                                                            var1 = var1.frameRate;
                                                                            var1 = var3 < var1;
                                                                            if(!var1) { _fun0017_ip = 177; continue _fun0017 }
case 178:
                                                                            var2 = _closure12_slot0;
                                                                            var2 = var2.frameRate;
                                                                            var2 = var2.min;
                                                                            var1 = var3 >= var2;
case 177:
                                                                            return var1;
                                                                        }
                                                                    };
                                                                    var7 = var12.bind(var13)(var7);
                                                                    if(!(var11 == var7)) { _fun0015_ip = 179; continue _fun0015 }
case 180:
                                                                    var10 = var10.frameRate;
                                                                    var7 = var10.min;
case 179:
                                                                    var8 = var7;
case 176:
                                                                    var7 = _closure5_slot2;
                                                                    var7 = var7.frameRate;
                                                                    var6 = var9;
                                                                    if(!(var8 !== var7)) { _fun0015_ip = 164; continue _fun0015 }
case 181:
                                                                    var7 = _closure5_slot2;
                                                                    var7['frameRate'] = var8;
                                                                    var6 = true;
case 164:
                                                                    if(var6) { _fun0015_ip = 182; continue _fun0015 }
case 183:
                                                                    var8 = _closure1_slot25;
                                                                    var7 = var8.error;
                                                                    var6 = {};
                                                                    var9 = var2.failures;
                                                                    var6['currentFailures'] = var9;
                                                                    var9 = _closure5_slot2;
                                                                    var6['config'] = var9;
                                                                    var9 = var2.capabilities;
                                                                    var6['capabilities'] = var9;
                                                                    var10 = _closure6_slot6;
                                                                    var9 = 1;
                                                                    var9 = var10 + var9;
                                                                    var6['attempt'] = var9;
                                                                    var9 = 'No adjustments possible for current failures';
                                                                    var6 = var7.bind(var8)(var9, var6);
                                                                    var7 = _closure7_slot1;
                                                                    var6 = global;
                                                                    var6 = var6.Error;
                                                                    var8 = var6.prototype;
                                                                    var8 = Object.create(var8, {constructor: {value: var6}});
                                                                    var19 = var8;
                                                                    var18 = var9;
                                                                    var6 = new var19[var6](var18, var17);
                                                                    var6 = var6 instanceof Object ? var6 : var8;
                                                                    var6 = var7.bind(var5)(var6);
case 182:
                                                                    var6 = _closure6_slot6;
                                                                    var6 = var6 + 1;
                                                                    _closure6_slot6 = var6;
                                                                    return var5;
case 153:
                                                                    var6 = _closure5_slot2;
                                                                    var5 = false;
                                                                    var6['useHEVC'] = var5;
                                                                    var5 = 1;
                                                                    return var5;
case 149:
                                                                    var6 = _closure1_slot25;
                                                                    var5 = var6.warn;
                                                                    var4 = {};
                                                                    var3 = _closure5_slot2;
                                                                    var4['config'] = var3;
                                                                    var7 = _closure6_slot6;
                                                                    var3 = 1;
                                                                    var3 = var7 + var3;
                                                                    var4['attempt'] = var3;
                                                                    var3 = 'Unable to determine device capabilities or adjust parameters';
                                                                    var3 = var5.bind(var6)(var3, var4);
                                                                    var3 = 0;
                                                                    return var3;
case 148:
                                                                    var3 = {};
                                                                    var4 = true;
                                                                    var3['v'] = var4;
                                                                    return var3;
case 146:
                                                                    return var2;
case 142:
                                                                    return var1;
                                                                }
                                                            };
                                                            return var1;
                                                        };
                                                        var2 = _closure6_slot6;
                                                        var13 = 4;
                                                        if(!(var2 < var13)) { _fun0014_ip = 184; continue _fun0014 }
case 86:
                                                        var12 = undefined;
                                                        var4 = var14.bind(var12)();
                                                        var11 = global;
                                                        var2 = var11.Symbol;
                                                        var2 = var2.iterator;
                                                        var2 = var4[var2];
                                                        var5 = var2.bind(var4)();
                                                        var10 = 'iterator is not an object';
                                                        var25 = var5;
                                                        var24 = var10;
                                                        var2 = ensureObject(var25, var24);
                                                        var18 = var5.next;
                                                        var17 = undefined;
                                                        var9 = 'iterator.throw() did not return an object';
                                                        var8 = 'throw';
                                                        var7 = 'iterator.next() did not return an object';
case 67:
                                                        var4 = var17;
                                                        var4 = var18.bind(var5)(var4);
                                                        var25 = var4;
                                                        var24 = var7;
                                                        var6 = ensureObject(var25, var24);
                                                        var2 = var4;
                                                        var6 = var4.done;
                                                        if(var6) { _fun0014_ip = 185; continue _fun0014 }
case 186: // try_start_0
                                                        var6 = generatorSetDelegated();
                                                        SaveGenerator(address=188);
case 187:
                                                        return var4;
case 188: // try_end0 // catch_target0 // catch_target1
                                                        CatchBlockStart(arg_register=5);
                                                        var25 = var5;
                                                        var24 = var8;
                                                        var4 = getMethod(var25, var24);
                                                        if(!(var4 !== var12)) { _fun0014_ip = 189; continue _fun0014 }
case 190:
                                                        var4 = var4.bind(var5)(var6);
                                                        var25 = var4;
                                                        var24 = var9;
                                                        var6 = ensureObject(var25, var24);
                                                        var6 = var4.done;
                                                        if(var6) { _fun0014_ip = 122; continue _fun0014 }
case 191:
                                                        var6 = generatorSetDelegated();
                                                        SaveGenerator(address=188);
case 109:
                                                        return var4;
case 192: // try_start_1
                                                        ResumeGenerator(result_out_reg=5, return_bool_out_reg=15);
                                                        var17 = var6;
                                                        var15 = var16;
                                                        if(!var15) { _fun0014_ip = 67; continue _fun0014 }
case 193:
                                                        var17 = var6;
case 194: // try_end1
                                                        var24 = 'return';
                                                        var25 = var5;
                                                        var19 = getMethod(var25, var24);
                                                        if(!(var19 !== var12)) { _fun0014_ip = 195; continue _fun0014 }
case 196:
                                                        var15 = var17;
                                                        var15 = var19.bind(var5)(var15);
                                                        var24 = 'iterator.return() did not return an object';
                                                        var25 = var15;
                                                        var19 = ensureObject(var25, var24);
                                                        var19 = var15.done;
                                                        if(var19) { _fun0014_ip = 197; continue _fun0014 }
case 198:
                                                        var19 = generatorSetDelegated();
                                                        SaveGenerator(address=188);
case 61:
                                                        return var15;
case 197:
                                                        var15 = var15.value;
                                                        return var15;
case 195:
                                                        return var6;
case 122:
                                                        var2 = var4;
                                                        _fun0014_ip = 185; continue _fun0014;
case 189:
                                                        var24 = 'return';
                                                        var25 = var5;
                                                        var4 = getMethod(var25, var24);
                                                        if(!(var4 !== var12)) { _fun0014_ip = 199; continue _fun0014 }
case 200:
                                                        var25 = var4.bind(var5)();
                                                        var24 = 'iterator.return() did not return an object';
                                                        var4 = ensureObject(var25, var24);
case 199:
                                                        var25 = 'yield* delegate must have a .throw() method';
                                                        var4 = throwTypeError(var25);
                                                        throw var12;
case 185:
                                                        var6 = var2.value;
                                                        var5 = 0;
                                                        var4 = 1;
                                                        if(!(var5 !== var6)) { _fun0014_ip = 184; continue _fun0014 }
case 201:
                                                        var2 = var6;
                                                        if(!(var4 !== var2)) { _fun0014_ip = 202; continue _fun0014 }
case 203:
                                                        if(var2) { _fun0014_ip = 204; continue _fun0014 }
case 202:
                                                        var15 = _closure6_slot6;
                                                        if(!(var15 < var13)) { _fun0014_ip = 184; continue _fun0014 }
case 129:
                                                        var16 = var14.bind(var12)();
                                                        var15 = var11.Symbol;
                                                        var15 = var15.iterator;
                                                        var15 = var16[var15];
                                                        var17 = var15.bind(var16)();
                                                        var25 = var17;
                                                        var24 = var10;
                                                        var15 = ensureObject(var25, var24);
                                                        var22 = var17.next;
                                                        var21 = undefined;
case 205:
                                                        var16 = var21;
                                                        var16 = var22.bind(var17)(var16);
                                                        var25 = var16;
                                                        var24 = var7;
                                                        var18 = ensureObject(var25, var24);
                                                        var15 = var16;
                                                        var18 = var16.done;
                                                        if(var18) { _fun0014_ip = 39; continue _fun0014 }
case 206: // try_start_2
                                                        var18 = generatorSetDelegated();
                                                        SaveGenerator(address=481);
case 207:
                                                        return var16;
case 208: // try_end2 // catch_target2 // catch_target3
                                                        CatchBlockStart(arg_register=17);
                                                        var25 = var17;
                                                        var24 = var8;
                                                        var16 = getMethod(var25, var24);
                                                        if(!(var16 !== var12)) { _fun0014_ip = 209; continue _fun0014 }
case 210:
                                                        var16 = var16.bind(var17)(var18);
                                                        var25 = var16;
                                                        var24 = var9;
                                                        var18 = ensureObject(var25, var24);
                                                        var18 = var16.done;
                                                        if(var18) { _fun0014_ip = 162; continue _fun0014 }
case 211:
                                                        var18 = generatorSetDelegated();
                                                        SaveGenerator(address=481);
case 26:
                                                        return var16;
case 212: // try_start_3
                                                        ResumeGenerator(result_out_reg=17, return_bool_out_reg=19);
                                                        var21 = var18;
                                                        var19 = var20;
                                                        if(!var19) { _fun0014_ip = 205; continue _fun0014 }
case 213:
                                                        var21 = var18;
case 214: // try_end3
                                                        var24 = 'return';
                                                        var25 = var17;
                                                        var23 = getMethod(var25, var24);
                                                        if(!(var23 !== var12)) { _fun0014_ip = 215; continue _fun0014 }
case 216:
                                                        var19 = var21;
                                                        var19 = var23.bind(var17)(var19);
                                                        var24 = 'iterator.return() did not return an object';
                                                        var25 = var19;
                                                        var23 = ensureObject(var25, var24);
                                                        var23 = var19.done;
                                                        if(var23) { _fun0014_ip = 217; continue _fun0014 }
case 218:
                                                        var23 = generatorSetDelegated();
                                                        SaveGenerator(address=481);
case 219:
                                                        return var19;
case 217:
                                                        var19 = var19.value;
                                                        return var19;
case 215:
                                                        return var18;
case 162:
                                                        var15 = var16;
                                                        _fun0014_ip = 39; continue _fun0014;
case 209:
                                                        var24 = 'return';
                                                        var25 = var17;
                                                        var16 = getMethod(var25, var24);
                                                        if(!(var16 !== var12)) { _fun0014_ip = 38; continue _fun0014 }
case 220:
                                                        var25 = var16.bind(var17)();
                                                        var24 = 'iterator.return() did not return an object';
                                                        var16 = ensureObject(var25, var24);
case 38:
                                                        var25 = 'yield* delegate must have a .throw() method';
                                                        var16 = throwTypeError(var25);
                                                        throw var12;
case 39:
                                                        var6 = var15.value;
                                                        if(var5 !== var6) { _fun0014_ip = 201; continue _fun0014 }
case 184:
                                                        var4 = _closure6_slot6;
                                                        var3 = 0;
                                                        var3 = var4 > var3;
                                                        return var3;
case 204:
                                                        var2 = var2.v;
                                                        return var2;
case 141:
                                                        return var1;
                                                    }
                                                };
                                                return var1;
                                            };
                                            var2 = var4.bind(var3)(var2);
                                            var _closure8_slot0 = var2;
                                            var1 = function findCompatibleConfig() {
                                                var1 = undefined;
                                                var4 = _closure8_slot0;
                                                var3 = var4.apply;
                                                var1 = arguments;
                                                var2 = var1;
                                                var1 = this;
                                                var1 = var3.bind(var4)(var1, var2);
                                                return var1;
                                            };
                                            return var1;
                                        };
                                        var1 = undefined;
                                        var3 = var3.bind(var1)();
                                        var5 = var3.bind(var1)();
                                        var3 = var5.then;
                                        var2 = function(arg1) {
                                            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                                                var1 = arg1;
                                                if(var1) { _fun0018_ip = 102; continue _fun0018 }
case 221:
                                                var3 = _closure1_slot25;
                                                var2 = var3.error;
                                                var1 = {};
                                                var5 = _closure5_slot2;
                                                var1['finalConfig'] = var5;
                                                var5 = _closure6_slot6;
                                                var1['attempts'] = var5;
                                                var5 = 'Could not find compatible encoding configuration after multiple attempts';
                                                var1 = var2.bind(var3)(var5, var1);
                                                var3 = _closure7_slot1;
                                                var1 = global;
                                                var1 = var1.Error;
                                                var2 = var1.prototype;
                                                var2 = Object.create(var2, {constructor: {value: var1}});
                                                var17 = var2;
                                                var16 = var5;
                                                var1 = new var17[var1](var16, var15);
                                                var2 = var1 instanceof Object ? var1 : var2;
                                                var1 = undefined;
                                                var1 = var3.bind(var1)(var2);
                                                var1 = undefined;
                                                _fun0018_ip = 222; continue _fun0018;
case 102:
                                                var5 = _closure1_slot40;
                                                var2 = _closure6_slot0;
                                                var7 = undefined;
                                                var2 = var5.bind(var7)(var2);
                                                if(var2) { _fun0018_ip = 223; continue _fun0018 }
case 224:
                                                var11 = _closure6_slot0;
                                                var13 = _closure6_slot1;
                                                var5 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var6 = 12;
                                                var2 = var2[var6];
                                                var5 = var5.bind(var7)(var2);
                                                var2 = var5.isIOS;
                                                var8 = var2.bind(var5)();
                                                var5 = false;
                                                if(!var8) { _fun0018_ip = 225; continue _fun0018 }
case 16:
                                                var8 = _closure1_slot37;
                                                var8 = var8.bind(var7)(var11, var13);
                                                var10 = null;
                                                if(var8) { _fun0018_ip = 226; continue _fun0018 }
case 116:
                                                var9 = var11.match;
                                                var8 = /^assets-library:\\/\\/.+&ext=mov$/i;
                                                var8 = var9.bind(var11)(var8);
                                                var8 = var10 != var8;
                                                if(!var8) { _fun0018_ip = 23; continue _fun0018 }
case 58:
                                                var9 = _closure1_slot41;
                                                var8 = var9.bind(var7)(var11);
case 23:
                                                _fun0018_ip = 227; continue _fun0018;
case 226:
                                                var11 = var10 == var13;
                                                var9 = undefined;
                                                if(var11) { _fun0018_ip = 228; continue _fun0018 }
case 229:
                                                var12 = var13.match;
                                                var11 = /\.mov$/i;
                                                var9 = var12.bind(var13)(var11);
case 228:
                                                var8 = var10 != var9;
case 227:
                                                var5 = var8;
case 225:
                                                if(var5) { _fun0018_ip = 230; continue _fun0018 }
case 231:
                                                var10 = _closure6_slot0;
                                                var12 = _closure6_slot1;
                                                var8 = _closure1_slot0;
                                                var5 = _closure1_slot2;
                                                var5 = var5[var6];
                                                var8 = var8.bind(var7)(var5);
                                                var5 = var8.isIOS;
                                                var5 = var5.bind(var8)();
                                                var2 = false;
                                                if(!var5) { _fun0018_ip = 132; continue _fun0018 }
case 232:
                                                var5 = _closure1_slot37;
                                                var5 = var5.bind(var7)(var10, var12);
                                                var9 = null;
                                                if(var5) { _fun0018_ip = 233; continue _fun0018 }
case 234:
                                                var8 = var10.match;
                                                var5 = /^assets-library:\\/\\/.+&ext=mp4$/i;
                                                var5 = var8.bind(var10)(var5);
                                                var5 = var9 != var5;
                                                if(!var5) { _fun0018_ip = 128; continue _fun0018 }
case 235:
                                                var8 = _closure1_slot41;
                                                var5 = var8.bind(var7)(var10);
case 128:
                                                _fun0018_ip = 236; continue _fun0018;
case 233:
                                                var10 = var9 == var12;
                                                var8 = undefined;
                                                if(var10) { _fun0018_ip = 237; continue _fun0018 }
case 238:
                                                var11 = var12.match;
                                                var10 = /\.mp4$/i;
                                                var8 = var11.bind(var12)(var10);
case 237:
                                                var5 = var9 != var8;
case 236:
                                                var2 = var5;
case 132:
                                                if(var2) { _fun0018_ip = 239; continue _fun0018 }
case 240:
                                                var8 = _closure6_slot0;
                                                var5 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var2 = var2[var6];
                                                var5 = var5.bind(var7)(var2);
                                                var2 = var5.isIOS;
                                                var5 = var2.bind(var5)();
                                                if(!var5) { _fun0018_ip = 241; continue _fun0018 }
case 47:
                                                var6 = var8.startsWith;
                                                var2 = 'file';
                                                var5 = var6.bind(var8)(var2);
case 241:
                                                if(!var5) { _fun0018_ip = 242; continue _fun0018 }
case 26:
                                                var2 = var8.toLowerCase;
                                                var9 = var2.bind(var8)();
                                                var6 = var9.endsWith;
                                                var2 = 'mov';
                                                var2 = var6.bind(var9)(var2);
                                                if(var2) { _fun0018_ip = 243; continue _fun0018 }
case 244:
                                                var6 = var8.toLowerCase;
                                                var9 = var6.bind(var8)();
                                                var8 = var9.endsWith;
                                                var6 = 'mp4';
                                                var2 = var8.bind(var9)(var6);
case 243:
                                                var5 = var2;
case 242:
                                                var2 = undefined;
                                                if(!var5) { _fun0018_ip = 167; continue _fun0018 }
case 245:
                                                var9 = _closure1_slot32;
                                                var8 = _closure6_slot0;
                                                var6 = {};
                                                var5 = _closure5_slot2;
                                                var6['encodingConfig'] = var5;
                                                var5 = _closure6_slot4;
                                                var6['videoQuality'] = var5;
                                                var5 = var8.toLowerCase;
                                                var11 = var5.bind(var8)();
                                                var10 = var11.endsWith;
                                                var5 = 'mov';
                                                var5 = var10.bind(var11)(var5);
                                                var6['isMov'] = var5;
                                                var5 = _closure6_slot5;
                                                var6['skipVideoTranscode'] = var5;
                                                var5 = 'compressVideo';
                                                var9 = var9.bind(var7)(var5, var8, var6);
                                                var8 = var9.then;
                                                var6 = _closure7_slot0;
                                                var5 = _closure7_slot1;
                                                var2 = var8.bind(var9)(var6, var5);
case 167:
                                                _fun0018_ip = 246; continue _fun0018;
case 239:
                                                var9 = _closure1_slot32;
                                                var8 = _closure6_slot0;
                                                var6 = {};
                                                var5 = _closure5_slot2;
                                                var6['encodingConfig'] = var5;
                                                var5 = _closure6_slot4;
                                                var6['videoQuality'] = var5;
                                                var5 = _closure6_slot5;
                                                var6['skipVideoTranscode'] = var5;
                                                var5 = 'compressVideo';
                                                var9 = var9.bind(var7)(var5, var8, var6);
                                                var8 = var9.then;
                                                var6 = _closure7_slot0;
                                                var5 = _closure7_slot1;
                                                var2 = var8.bind(var9)(var6, var5);
case 246:
                                                _fun0018_ip = 247; continue _fun0018;
case 230:
                                                var9 = _closure1_slot32;
                                                var8 = _closure6_slot0;
                                                var6 = {};
                                                var5 = _closure5_slot2;
                                                var6['encodingConfig'] = var5;
                                                var5 = _closure6_slot4;
                                                var6['videoQuality'] = var5;
                                                var5 = true;
                                                var6['isMov'] = var5;
                                                var5 = _closure6_slot5;
                                                var6['skipVideoTranscode'] = var5;
                                                var5 = 'compressVideo';
                                                var9 = var9.bind(var7)(var5, var8, var6);
                                                var8 = var9.then;
                                                var6 = _closure7_slot0;
                                                var5 = _closure7_slot1;
                                                var2 = var8.bind(var9)(var6, var5);
case 247:
                                                _fun0018_ip = 248; continue _fun0018;
case 223:
                                                var6 = _closure1_slot32;
                                                var5 = _closure6_slot0;
                                                var4 = {};
                                                var8 = _closure5_slot2;
                                                var4['encodingConfig'] = var8;
                                                var8 = _closure6_slot3;
                                                var4['compressionQuality'] = var8;
                                                var8 = _closure6_slot2;
                                                var4['isLowQuality'] = var8;
                                                var8 = _closure6_slot4;
                                                var4['videoQuality'] = var8;
                                                var3 = _closure6_slot5;
                                                var4['skipVideoTranscode'] = var3;
                                                var3 = 'resolveToMediaFilePath';
                                                var6 = var6.bind(var7)(var3, var5, var4);
                                                var5 = var6.then;
                                                var4 = _closure7_slot0;
                                                var3 = _closure7_slot1;
                                                var2 = var5.bind(var6)(var4, var3);
case 248:
                                                var1 = var2;
case 222:
                                                return var1;
                                            }
                                        };
                                        var3 = var3.bind(var5)(var2);
                                        var2 = var3.catch;
                                        var2 = var2.bind(var3)(var4);
                                        return var1;
                                    };
                                    var30 = var2;
                                    var1 = new var30[var3](var29, var28);
                                    var1 = var1 instanceof Object ? var1 : var2;
                                    return var1;
                                }
                            };
                            var5 = _closure2_slot0;
                            var10 = var5.platform;
                            var23 = _closure1_slot0;
                            var24 = _closure1_slot2;
                            var5 = 17;
                            var5 = var24[var5];
                            var5 = var23.bind(var2)(var5);
                            var5 = var5.UploadPlatform;
                            var5 = var5.REACT_NATIVE;
                            if(!(var10 !== var5)) { _fun0010_ip = 196; continue _fun0010 }
case 249:
                            var10 = var3;
                            var5 = global;
                            var24 = var5.Error;
                            var5 = var24.prototype;
                            var23 = Object.create(var5, {constructor: {value: var24}});
                            var43 = 'Try to get file info for unsupported upload item';
                            var44 = var23;
                            var5 = new var44[var24](var43, var42);
                            var5 = var5 instanceof Object ? var5 : var23;
                            var5 = var10.bind(var2)(var5);
                            _fun0010_ip = 250; continue _fun0010;
case 196:
                            var5 = _closure2_slot0;
                            var10 = var5.originalUri;
                            var22 = var10;
                            _closure5_slot4 = var10;
                            var10 = var5.filename;
                            var21 = var10;
                            _closure5_slot5 = var10;
                            var5 = var5.mimeType;
                            var24 = null;
                            if(!(var24 == var5)) { _fun0010_ip = 251; continue _fun0010 }
case 252:
                            var5 = _closure2_slot3;
case 251:
                            var20 = var5;
                            _closure5_slot6 = var5;
                            var5 = _closure1_slot34;
                            var5 = var5.bind(var2)();
                            var18 = var5;
                            _closure5_slot7 = var5;
                            var5 = _closure1_slot11;
                            var5 = var5.dataSavingMode;
                            if(!var5) { _fun0010_ip = 253; continue _fun0010 }
case 254:
                            var23 = _closure1_slot12;
                            var10 = var23.getType;
                            var23 = var10.bind(var23)();
                            var10 = _closure1_slot16;
                            var10 = var10.CELLULAR;
                            var5 = var23 === var10;
case 253:
                            var15 = var5;
                            var5 = _closure1_slot17;
                            var5 = var5.LOW;
                            var19 = var5;
                            _closure5_slot8 = var5;
                            var11 = false;
                            var5 = {};
                            _closure5_slot9 = var5;
                            var25 = _closure1_slot42;
                            var23 = var22;
                            var10 = var20;
                            var10 = var25.bind(var2)(var23, var10);
                            if(!var10) { _fun0010_ip = 255; continue _fun0010 }
case 256:
                            var23 = var22;
                            var10 = var24 != var23;
case 255:
                            _closure5_slot10 = var10;
                            if(!var10) { _fun0010_ip = 257; continue _fun0010 }
case 131:
                            var23 = {};
                            var25 = _closure2_slot0;
                            var26 = var25.width;
                            var23['width'] = var26;
                            var25 = var25.height;
                            var23['height'] = var25;
                            _closure5_slot9 = var23;
                            var5 = var23;
case 257:
                            if(!var10) { _fun0010_ip = 258; continue _fun0010 }
case 259:
                            var10 = var15;
                            if(var10) { _fun0010_ip = 258; continue _fun0010 }
case 208:
                            var23 = _closure1_slot0;
                            var25 = _closure1_slot2;
                            var10 = 19;
                            var10 = var25[var10];
                            var25 = var23.bind(var2)(var10);
                            var23 = var25.useMobileImageAdaptiveCompressionExperiment;
                            var10 = {};
                            var26 = 'upload_utils.get_file_info';
                            var10['location'] = var26;
                            var23 = var23.bind(var25)(var10);
                            var34 = var23.useOriginalIfSmaller;
                            var11 = var34;
                            var10 = var23.useAdaptiveCompression;
                            if(var10) { _fun0010_ip = 260; continue _fun0010 }
case 261:
                            var10 = _closure1_slot17;
                            var33 = var10.HIGH;
                            _fun0010_ip = 262; continue _fun0010;
case 260:
                            var10 = var5.width;
                            if(!(var24 != var10)) { _fun0010_ip = 263; continue _fun0010 }
case 264:
                            var10 = var5.height;
                            if(!(var24 != var10)) { _fun0010_ip = 263; continue _fun0010 }
case 265:
                            var25 = var5.width;
                            var10 = var5.height;
                            var25 = var25 * var10;
                            var10 = _closure1_slot21;
                            if(!(!(var25 <= var10))) { _fun0010_ip = 266; continue _fun0010 }
case 162:
                            var10 = _closure1_slot22;
                            if(!(!(var25 <= var10))) { _fun0010_ip = 267; continue _fun0010 }
case 115:
                            var10 = _closure1_slot23;
                            if(!(!(var25 <= var10))) { _fun0010_ip = 204; continue _fun0010 }
case 268:
                            var10 = _closure1_slot24;
                            if(!(!(var25 <= var10))) { _fun0010_ip = 39; continue _fun0010 }
case 269:
                            var10 = var23.veryLowQuality;
                            if(!(var24 == var10)) { _fun0010_ip = 270; continue _fun0010 }
case 38:
                            var25 = _closure1_slot17;
                            var10 = var25.HIGH;
case 270:
                            _fun0010_ip = 271; continue _fun0010;
case 39:
                            var25 = var23.lowQuality;
                            if(!(var24 == var25)) { _fun0010_ip = 272; continue _fun0010 }
case 273:
                            var26 = _closure1_slot17;
                            var25 = var26.HIGH;
case 272:
                            var10 = var25;
case 271:
                            _fun0010_ip = 239; continue _fun0010;
case 204:
                            var25 = var23.mediumQuality;
                            if(!(var24 == var25)) { _fun0010_ip = 274; continue _fun0010 }
case 275:
                            var26 = _closure1_slot17;
                            var25 = var26.HIGH;
case 274:
                            var10 = var25;
case 239:
                            _fun0010_ip = 44; continue _fun0010;
case 267:
                            var25 = var23.highQuality;
                            if(!(var24 == var25)) { _fun0010_ip = 41; continue _fun0010 }
case 276:
                            var26 = _closure1_slot17;
                            var25 = var26.HIGH;
case 41:
                            var10 = var25;
case 44:
                            _fun0010_ip = 277; continue _fun0010;
case 266:
                            var23 = var23.veryHighQuality;
                            if(!(var24 == var23)) { _fun0010_ip = 278; continue _fun0010 }
case 171:
                            var25 = _closure1_slot17;
                            var23 = var25.HIGH;
case 278:
                            var10 = var23;
case 277:
                            var33 = var10;
                            _fun0010_ip = 262; continue _fun0010;
case 263:
                            var10 = _closure1_slot17;
                            var33 = var10.HIGH;
case 262:
                            var19 = var33;
                            _closure5_slot8 = var33;
                            var23 = _closure1_slot25;
                            var10 = var23.log;
                            var41 = var22;
                            var39 = var5.width;
                            var37 = var5.height;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var29 = var5.concat;
                            var44 = 'Got image compression quality: ';
                            var42 = ' for ';
                            var40 = ' with dimensions: ';
                            var38 = 'x';
                            var36 = ' and useOriginalIfSmaller: ';
                            var43 = var33;
                            var35 = var34;
                            var5 = var44[var29](var43, var42, var41, var40, var39, var38, var37, var36, var35, var34);
                            var5 = var10.bind(var23)(var5);
                            _fun0010_ip = 258; continue _fun0010;
case 258: // try_start_0
                            var5 = var22;
                            var4 = function getVideoMetadata(arg1) {
                                var1 = undefined;
                                var4 = _closure5_slot11;
                                var3 = var4.apply;
                                var1 = arguments;
                                var2 = var1;
                                var1 = this;
                                var1 = var3.bind(var4)(var1, var2);
                                return var1;
                            };
                            var4 = var4.bind(var2)(var5);
                            SaveGenerator(address=823);
case 279:
                            return var4;
case 280:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                            if(var5) { _fun0010_ip = 281; continue _fun0010 }
case 282:
                            var17 = var4;
                            var10 = _closure1_slot0;
                            var23 = _closure1_slot2;
                            var5 = 22;
                            var5 = var23[var5];
                            var27 = var10.bind(var2)(var5);
                            var26 = var27.useMobileVideoHEVCExperiment;
                            var5 = {};
                            var25 = 'upload_utils.get_file_info';
                            var5['location'] = var25;
                            var14 = var26.bind(var27)(var5);
                            var5 = 23;
                            var5 = var23[var5];
                            var27 = var10.bind(var2)(var5);
                            var26 = var27.useMobileAndroidVerticalVideoHEVCExperiment;
                            var5 = {};
                            var5['location'] = var25;
                            var12 = var26.bind(var27)(var5);
                            var5 = 24;
                            var5 = var23[var5];
                            var23 = var10.bind(var2)(var5);
                            var10 = var23.useAttachmentQualityMetricsExperiment;
                            var5 = {};
                            var5['location'] = var25;
                            var8 = var10.bind(var23)(var5);
                            var5 = _closure1_slot44;
                            var5 = var5.bind(var2)();
                            SaveGenerator(address=948);
case 283:
                            return var5;
case 284:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                            if(var10) { _fun0010_ip = 285; continue _fun0010 }
case 286:
                            var13 = var5;
                            var10 = var14;
                            var10 = var10.deviceStateCheckEnabled;
                            if(var10) { _fun0010_ip = 287; continue _fun0010 }
case 288:
                            var23 = var7;
                            var10 = {};
                            var25 = var22;
                            var10['uri'] = var25;
                            var25 = var21;
                            var10['filename'] = var25;
                            var25 = var20;
                            var10['mimeType'] = var25;
                            var25 = var19;
                            var10['compressionQuality'] = var25;
                            var25 = var18;
                            var10['videoQualitySetting'] = var25;
                            var25 = var17;
                            var10['videoMetadata'] = var25;
                            var25 = _closure2_slot0;
                            var25 = var25.size;
                            var10['fileSize'] = var25;
                            var25 = var15;
                            var10['isLowQuality'] = var25;
                            var10['deviceState'] = var24;
                            var24 = var14;
                            var24 = var24.hevcEnabled;
                            var10['hevcEncodingFeatureEnabled'] = var24;
                            var24 = var13;
                            var10['hevcEncodingSupportedByDevice'] = var24;
                            var24 = var12;
                            var24 = var24.hevcEnabled;
                            var10['allowAndroidVerticalVideoHEVC'] = var24;
                            var24 = var11;
                            var10['useOriginalIfSmaller'] = var24;
                            var10 = var23.bind(var2)(var10);
                            SaveGenerator(address=1107);
case 289:
                            return var10;
case 290:
                            ResumeGenerator(result_out_reg=9, return_bool_out_reg=22);
                            if(var23) { _fun0010_ip = 291; continue _fun0010 }
case 292:
                            var25 = var9;
                            var23 = var8;
                            var24 = var23.enableQualityMetrics;
                            var23 = var23.enableOriginDetection;
                            var23 = var25.bind(var2)(var10, var24, var23);
                            SaveGenerator(address=1142);
case 293:
                            return var23;
case 294:
                            ResumeGenerator(result_out_reg=22, return_bool_out_reg=23);
                            if(!var24) { _fun0010_ip = 295; continue _fun0010 }
case 296: // try_end0
                            return var23;
case 291:
                            return var10;
case 287: // try_start_1
                            var10 = _closure1_slot0;
                            var23 = _closure1_slot2;
                            var6 = 25;
                            var6 = var23[var6];
                            var10 = var10.bind(var2)(var6);
                            var6 = var10.getDeviceState;
                            var6 = var6.bind(var10)();
                            SaveGenerator(address=1191);
case 297:
                            return var6;
case 298:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                            if(var10) { _fun0010_ip = 299; continue _fun0010 }
case 300:
                            var10 = var7;
                            var7 = {};
                            var7['uri'] = var22;
                            var7['filename'] = var21;
                            var7['mimeType'] = var20;
                            var7['compressionQuality'] = var19;
                            var7['videoQualitySetting'] = var18;
                            var7['videoMetadata'] = var17;
                            var16 = _closure2_slot0;
                            var16 = var16.size;
                            var7['fileSize'] = var16;
                            var7['isLowQuality'] = var15;
                            var7['deviceState'] = var6;
                            var14 = var14.hevcEnabled;
                            var7['hevcEncodingFeatureEnabled'] = var14;
                            var7['hevcEncodingSupportedByDevice'] = var13;
                            var12 = var12.hevcEnabled;
                            var7['allowAndroidVerticalVideoHEVC'] = var12;
                            var7['useOriginalIfSmaller'] = var11;
                            var7 = var10.bind(var2)(var7);
                            SaveGenerator(address=1299);
case 301:
                            return var7;
case 302:
                            ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                            if(var10) { _fun0010_ip = 303; continue _fun0010 }
case 304:
                            var10 = var9;
                            var9 = var8.enableQualityMetrics;
                            var8 = var8.enableOriginDetection;
                            var8 = var10.bind(var2)(var7, var9, var8);
                            SaveGenerator(address=1331);
case 305:
                            return var8;
case 306:
                            ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                            if(var9) { _fun0010_ip = 307; continue _fun0010 }
case 295: // try_end1
                            _fun0010_ip = 250; continue _fun0010;
case 307:
                            return var8;
case 303:
                            return var7;
case 299:
                            return var6;
case 285:
                            return var5;
case 281:
                            return var4;
case 308: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=3);
                            var3 = var3.bind(var2)(var4);
case 250:
                            return var2;
case 92:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function(arg1, arg2) {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var5 = var1.bind(var2)();
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var6 = var2;
            var1 = new var6[var3](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var1 = function isPhotoKitAsset(arg1, arg2) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var3 = arg1;
            var2 = var3.match;
            var1 = /^ph:\\/\\//i;
            var1 = var2.bind(var3)(var1);
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0019_ip = 78; continue _fun0019 }
case 73:
            var2 = arg2;
            var1 = var3 != var2;
case 78:
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var13 = function shouldForceConvertToJPG(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var6 = arg1;
            var7 = arg2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var3 = undefined;
            var4 = var4.bind(var3)(var1);
            var1 = var4.isIOS;
            var1 = var1.bind(var4)();
            var4 = !var1;
            var1 = !var4;
            if(var4) { _fun0020_ip = 309; continue _fun0020 }
case 147:
            var2 = _closure1_slot37;
            var2 = var2.bind(var3)(var6, var7);
            var4 = null;
            if(var2) { _fun0020_ip = 100; continue _fun0020 }
case 49:
            var5 = var6.match;
            var2 = /^(assets-library|file):\\/\\/.+(&ext=|\.)(HEI[CF])$/i;
            var2 = var5.bind(var6)(var2);
            var2 = var4 != var2;
            _fun0020_ip = 224; continue _fun0020;
case 100:
            var5 = var4 == var7;
            var3 = undefined;
            if(var5) { _fun0020_ip = 310; continue _fun0020 }
case 101:
            var6 = var7.match;
            var5 = /\.HEI[CF]$/i;
            var3 = var6.bind(var7)(var5);
case 310:
            var2 = var4 != var3;
case 224:
            var1 = var2;
case 309:
            return var1;
        }
    };
    var _closure1_slot38 = var13;
    var12 = function shouldConvertToJPG(arg1, arg2, arg3) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var8 = arg1;
            var9 = arg2;
            var5 = arg3;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 12;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0021_ip = 311; continue _fun0021 }
case 91:
            var2 = _closure1_slot37;
            var2 = var2.bind(var4)(var8, var9);
            var6 = null;
            if(var2) { _fun0021_ip = 152; continue _fun0021 }
case 4:
            var3 = var8.match;
            var2 = /^(assets-library|file):\\/\\/.+(&ext=|\.)(HEI[CF]|jpe?g|DNG)$/i;
            var2 = var3.bind(var8)(var2);
            var2 = var6 != var2;
            if(var2) { _fun0021_ip = 188; continue _fun0021 }
case 82:
            var7 = var8.match;
            var3 = /^(assets-library|file):\\/\\/.+(&ext=|\.)png$/i;
            var3 = var7.bind(var8)(var3);
            var3 = var6 != var3;
            if(!var3) { _fun0021_ip = 94; continue _fun0021 }
case 312:
            var3 = var5;
case 94:
            var2 = var3;
case 188:
            _fun0021_ip = 313; continue _fun0021;
case 152:
            var7 = var6 == var9;
            var3 = undefined;
            if(var7) { _fun0021_ip = 16; continue _fun0021 }
case 314:
            var8 = var9.match;
            var7 = /\.(HEI[CF]|jpe?g|DNG)$/i;
            var3 = var8.bind(var9)(var7);
case 16:
            var3 = var6 != var3;
            if(var3) { _fun0021_ip = 22; continue _fun0021 }
case 12:
            var7 = var6 == var9;
            var4 = undefined;
            if(var7) { _fun0021_ip = 196; continue _fun0021 }
case 315:
            var8 = var9.match;
            var7 = /\.png$/i;
            var4 = var8.bind(var9)(var7);
case 196:
            var4 = var6 != var4;
            if(!var4) { _fun0021_ip = 316; continue _fun0021 }
case 317:
            var4 = var5;
case 316:
            var3 = var4;
case 22:
            var2 = var3;
case 313:
            var1 = var2;
case 311:
            return var1;
        }
    };
    var _closure1_slot39 = var12;
    var11 = function shouldResolveToMediaFilePath(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.isAndroid;
            var1 = var1.bind(var2)();
            if(!var1) { _fun0022_ip = 4; continue _fun0022 }
case 318:
            var3 = var4.match;
            var2 = /^content:\\/\\/.+$/i;
            var3 = var3.bind(var4)(var2);
            var2 = null;
            var1 = var2 != var3;
case 4:
            return var1;
        }
    };
    var _closure1_slot40 = var11;
    var10 = function isVideo(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getFile;
        var1 = {};
        var4 = arg1;
        var1['uri'] = var4;
        var4 = arg2;
        var1['overrideType'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.isVideo;
        return var1;
    };
    var _closure1_slot41 = var10;
    var9 = function isImage(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getFile;
        var1 = {};
        var4 = arg1;
        var1['uri'] = var4;
        var4 = arg2;
        var1['overrideType'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.isImage;
        return var1;
    };
    var _closure1_slot42 = var9;
    var8 = function getType(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getFile;
        var1 = {};
        var4 = arg1;
        var1['uri'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.type;
        return var1;
    };
    var7 = function getCaptionLabel(arg1, arg2, arg3) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var3 = arg3;
            var1 = arg2;
            if(var1) { _fun0023_ip = 319; continue _fun0023 }
case 221:
            var4 = 'image/gif';
            var2 = arg1;
            var1 = null;
            if(!(var4 === var2)) { _fun0023_ip = 89; continue _fun0023 }
case 68:
            var1 = 'GIF';
            _fun0023_ip = 89; continue _fun0023;
case 319:
            var4 = var3.playableDuration;
            var2 = null;
            var4 = var2 != var4;
            var2 = 'VIDEO';
            if(!var4) { _fun0023_ip = 20; continue _fun0023 }
case 320:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 26;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.getTimeFormat;
            var3 = var3.playableDuration;
            var2 = var4.bind(var5)(var3);
case 20:
            var1 = var2;
case 89:
            return var1;
        }
    };
    var6 = function getImageDimensionsIfMissing(arg1, arg2, arg3, arg4) {
        var1 = undefined;
        var4 = _closure1_slot43;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var1 = function _getImageDimensionsIfMissing() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    StartGenerator();
                    var6 = arg2;
                    var5 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0024_ip = 321; continue _fun0024 }
case 79:
                    var3 = arg1;
                    var13 = undefined;
                    var2 = undefined;
                    var10 = undefined;
                    var7 = undefined;
                    var4 = {};
                    var4['width'] = var6;
                    var4['height'] = var5;
                    var2 = var4;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0024_ip = 322; continue _fun0024 }
case 323:
                    if(!(var4 == var5)) { _fun0024_ip = 324; continue _fun0024 }
case 322:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 11;
                    var5 = var8[var5];
                    var8 = var6.bind(var13)(var5);
                    var6 = var8.getFile;
                    var5 = {};
                    var9 = var3;
                    var5['uri'] = var9;
                    var9 = arg4;
                    var5['overrideFilename'] = var9;
                    var5 = var6.bind(var8)(var5);
                    var10 = var5;
                    var5 = var5.isImage;
                    if(var5) { _fun0024_ip = 224; continue _fun0024 }
case 325:
                    var5 = var10;
                    var5 = var5.isVideo;
                    if(var5) { _fun0024_ip = 224; continue _fun0024 }
case 326:
                    var5 = var2;
                    return var5;
case 224: // try_start_0
                    var6 = var3;
                    var5 = function getImageDimensionByUri(arg1) {
                        var2 = arg1;
                        var _closure5_slot0 = var2;
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {constructor: {value: var3}});
                        var4 = function(arg1, arg2) {
                            var2 = arg1;
                            var _closure6_slot0 = var2;
                            var5 = _closure1_slot7;
                            var4 = var5.getSize;
                            var3 = _closure5_slot0;
                            var2 = function(arg1, arg2) {
                                var3 = _closure6_slot0;
                                var2 = {};
                                var1 = arg1;
                                var2['width'] = var1;
                                var1 = arg2;
                                var2['height'] = var1;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var1 = arg2;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var1;
                        };
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    };
                    var5 = var5.bind(var13)(var6);
                    SaveGenerator(address=153);
case 327:
                    return var5;
case 328:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0024_ip = 329; continue _fun0024 }
case 330:
                    var7 = var5;
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 12;
                    var11 = var14[var11];
                    var12 = var12.bind(var13)(var11);
                    var11 = var12.isIOS;
                    var11 = var11.bind(var12)();
                    var9 = var11;
                    if(!var11) { _fun0024_ip = 331; continue _fun0024 }
case 332:
                    var9 = var10.isVideo;
case 331:
                    var8 = var9;
                    if(!var9) { _fun0024_ip = 56; continue _fun0024 }
case 333:
                    var9 = var7;
                    var10 = var9.width;
                    var9 = 0;
                    var8 = var9 === var10;
case 56:
                    var6 = var8;
                    if(!var8) { _fun0024_ip = 198; continue _fun0024 }
case 23:
                    var8 = var7;
                    var9 = var8.height;
                    var8 = 0;
                    var6 = var8 === var9;
case 198:
                    if(!var6) { _fun0024_ip = 334; continue _fun0024 }
case 335:
                    var6 = _closure1_slot6;
                    var9 = var6.DCDFileManager;
                    var8 = var9.getVideoDimensions;
                    var6 = var3;
                    var6 = var8.bind(var9)(var6);
                    SaveGenerator(address=280);
case 336:
                    return var6;
case 157:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0024_ip = 337; continue _fun0024 }
case 200:
                    var7 = var6;
case 334: // try_end0
                    return var7;
case 337:
                    return var6;
case 329:
                    return var5;
case 124: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var5 = _closure1_slot25;
                    var4 = var5.warn;
                    var8 = var3;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var3 = 'Unable to get width and height of media file: ';
                    var3 = var7.bind(var3)(var8);
                    var3 = var4.bind(var5)(var3, var6);
                    var3 = var2;
                    return var3;
case 324:
                    return var2;
case 321:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot43 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot43 = var1;
    var5 = function isHEVCEncodingSupported() {
        var1 = undefined;
        var4 = _closure1_slot45;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot44 = var5;
    var1 = function _isHEVCEncodingSupported() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0025_ip = 53; continue _fun0025 }
case 338: // try_start_0
                    var2 = _closure1_slot6;
                    var3 = var2.MediaManager;
                    var2 = var3.isHEVCEncodingSupported;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=34);
case 339:
                    return var2;
case 86:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0025_ip = 96; continue _fun0025 }
case 318: // try_end0
                    return var2;
case 96:
                    return var2;
case 323: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot25;
                    var3 = var4.warn;
                    var2 = 'Error checking HEVC support:';
                    var2 = var3.bind(var4)(var2, var5);
                    var2 = false;
                    return var2;
case 53:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot45 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot45 = var1;
    var4 = function checkVideoEncodingSupport(arg1) {
        var1 = undefined;
        var4 = _closure1_slot47;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot46 = var4;
    var1 = function _checkVideoEncodingSupport() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0026_ip = 187; continue _fun0026 }
case 3:
                    var5 = arg1;
case 95: // try_start_0
                    var2 = _closure1_slot6;
                    var4 = var2.MediaManager;
                    var3 = var4.isVideoEncodingSupported;
                    var2 = {};
                    var6 = var5.targetWidth;
                    var2['width'] = var6;
                    var6 = var5.targetHeight;
                    var2['height'] = var6;
                    var6 = var5.frameRate;
                    var2['frameRate'] = var6;
                    var5 = var5.useHEVC;
                    var2['isHEVC'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=89);
case 19:
                    return var2;
case 340:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0026_ip = 72; continue _fun0026 }
case 341: // try_end0
                    return var2;
case 72:
                    return var2;
case 67: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot25;
                    var3 = var4.warn;
                    var2 = 'Error checking video encoding support:';
                    var2 = var3.bind(var4)(var2, var5);
                    var2 = {};
                    var3 = true;
                    var2['isSupported'] = var3;
                    return var2;
case 187:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot47 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot47 = var1;
    var2 = function calculateImageQualityMetrics(arg1, arg2, arg3, arg4, arg5) {
        var1 = undefined;
        var4 = _closure1_slot49;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot48 = var2;
    var1 = function _calculateImageQualityMetrics() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2, arg3, arg4, arg5) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0027_ip = 260; continue _fun0027 }
case 3:
                    var5 = arg1;
                    var8 = arg2;
                    var10 = undefined;
                    var6 = undefined;
                    var3 = undefined;
                    var2 = {};
                    var4 = arg5;
                    if(!var4) { _fun0027_ip = 342; continue _fun0027 }
case 319: // try_start_0
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 2;
                    var4 = var9[var4];
                    var4 = var7.bind(var10)(var4);
                    var4 = var4.NativeModules;
                    var9 = var4.MediaManager;
                    var7 = var9.getMediaOrigin;
                    var4 = var5;
                    var4 = var7.bind(var9)(var4);
                    SaveGenerator(address=85);
case 343:
                    return var4;
case 9:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0027_ip = 98; continue _fun0027 }
case 20:
                    var9 = var2;
                    var7 = var4.source;
                    var9['origin'] = var7;
case 101: // try_end0
                    _fun0027_ip = 342; continue _fun0027;
case 98:
                    return var4;
case 102: // catch_target0
                    CatchBlockStart(arg_register=10);
                    var9 = _closure1_slot25;
                    var7 = var9.warn;
                    var4 = 'Failed to detect media origin';
                    var4 = var7.bind(var9)(var4, var11);
case 342:
                    var4 = arg4;
                    if(!var4) { _fun0027_ip = 344; continue _fun0027 }
case 345: // try_start_1
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 2;
                    var7 = var11[var7];
                    var7 = var9.bind(var10)(var7);
                    var7 = var7.NativeModules;
                    var6 = var7.MediaManager;
                    var10 = var8;
                    var3 = var10;
                    var9 = var10.includes;
                    var7 = '://';
                    var7 = var9.bind(var10)(var7);
                    if(var7) { _fun0027_ip = 234; continue _fun0027 }
case 346:
                    var10 = var8;
                    var9 = var10.includes;
                    var7 = '/';
                    var7 = var9.bind(var10)(var7);
                    if(var7) { _fun0027_ip = 347; continue _fun0027 }
case 316:
                    var10 = var8;
                    var9 = var10.includes;
                    var7 = '\\';
                    var7 = var9.bind(var10)(var7);
                    if(var7) { _fun0027_ip = 347; continue _fun0027 }
case 348:
                    var9 = var5;
                    var7 = var9.startsWith;
                    var11 = 'ph://';
                    var7 = var7.bind(var9)(var11);
                    var10 = var8;
                    var9 = global;
                    var9 = var9.HermesInternal;
                    var9 = var9.concat;
                    if(var7) { _fun0027_ip = 199; continue _fun0027 }
case 349:
                    var7 = 'file://';
                    var7 = var9.bind(var7)(var10);
                    _fun0027_ip = 350; continue _fun0027;
case 199:
                    var7 = var9.bind(var11)(var10);
case 350:
                    _fun0027_ip = 351; continue _fun0027;
case 347:
                    var10 = var8;
                    var8 = global;
                    var8 = var8.HermesInternal;
                    var9 = var8.concat;
                    var8 = 'file://';
                    var7 = var9.bind(var8)(var10);
case 351:
                    var3 = var7;
case 234:
                    var7 = var6;
                    var6 = var7.calculateImageQualityMetrics;
                    var3 = var6.bind(var7)(var5, var3);
                    SaveGenerator(address=356);
case 352:
                    return var3;
case 353:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0027_ip = 354; continue _fun0027 }
case 355:
                    var6 = var2;
                    var5 = var3.psnr;
                    var6['psnr'] = var5;
                    var5 = var3.ssim;
                    var6['ssim'] = var5;
                    var5 = var3.psnrCalculationTimeMs;
                    var6['psnrMeasurementLatencyMs'] = var5;
                    var5 = var3.ssimCalculationTimeMs;
                    var6['ssimMeasurementLatencyMs'] = var5;
                    var6 = _closure1_slot25;
                    var5 = var6.log;
                    var10 = var3.psnr;
                    var9 = var3.ssim;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var8 = var4.concat;
                    var7 = 'Quality metrics calculated: PSNR=';
                    var4 = 'dB, SSIM=';
                    var4 = var8.bind(var7)(var10, var4, var9);
                    var4 = var5.bind(var6)(var4);
case 241: // try_end1
                    _fun0027_ip = 344; continue _fun0027;
case 354:
                    return var3;
case 212: // catch_target1
                    CatchBlockStart(arg_register=5);
                    var5 = _closure1_slot25;
                    var4 = var5.warn;
                    var3 = 'Error in quality metrics calculation';
                    var3 = var4.bind(var5)(var3, var6);
case 344:
                    return var2;
case 260:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot49 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot49 = var1;
    var1 = ['filename'];
    var _closure1_slot3 = var1;
    var28 = global;
    var24 = var28.Object;
    var23 = var24.defineProperty;
    var22 = {};
    var1 = true;
    var22['value'] = var1;
    var1 = '__esModule';
    var1 = var23.bind(var24)(var3, var1, var22);
    var1 = 0;
    var22 = var27[var1];
    var1 = undefined;
    var22 = var29.bind(var1)(var22);
    var _closure1_slot4 = var22;
    var22 = 1;
    var22 = var27[var22];
    var22 = var29.bind(var1)(var22);
    var _closure1_slot5 = var22;
    var22 = 2;
    var22 = var27[var22];
    var22 = var26.bind(var1)(var22);
    var23 = var22.NativeModules;
    var _closure1_slot6 = var23;
    var23 = var22.Image;
    var _closure1_slot7 = var23;
    var22 = var22.Platform;
    var _closure1_slot8 = var22;
    var22 = 3;
    var23 = var27[var22];
    var23 = var26.bind(var1)(var23);
    var24 = var23.VideoCompressionQuality;
    var _closure1_slot9 = var24;
    var23 = var23.VideoQualitySettings;
    var _closure1_slot10 = var23;
    var22 = var27[var22];
    var22 = var29.bind(var1)(var22);
    var _closure1_slot11 = var22;
    var22 = 4;
    var22 = var27[var22];
    var22 = var29.bind(var1)(var22);
    var _closure1_slot12 = var22;
    var22 = 5;
    var22 = var27[var22];
    var22 = var29.bind(var1)(var22);
    var _closure1_slot13 = var22;
    var22 = 6;
    var22 = var27[var22];
    var22 = var26.bind(var1)(var22);
    var23 = var22.Base64PNGPrefix;
    var _closure1_slot14 = var23;
    var24 = var22.Base64GIFPrefix;
    var _closure1_slot15 = var24;
    var23 = var22.Base64JPEGPrefix;
    var30 = var22.NetworkConnectionTypes;
    var _closure1_slot16 = var30;
    var30 = var22.CompressionQuality;
    var _closure1_slot17 = var30;
    var30 = var22.Base64WEBPPrefix;
    var _closure1_slot18 = var30;
    var22 = var22.Base64AVIFPrefix;
    var _closure1_slot19 = var22;
    var22 = 7;
    var22 = var27[var22];
    var22 = var26.bind(var1)(var22);
    var22 = var22.NativePermissionTypes;
    var _closure1_slot20 = var22;
    var22 = 921600;
    var _closure1_slot21 = var22;
    var22 = 2073600;
    var _closure1_slot22 = var22;
    var22 = 3686400;
    var _closure1_slot23 = var22;
    var22 = 8294400;
    var _closure1_slot24 = var22;
    var22 = 8;
    var22 = var27[var22];
    var30 = var29.bind(var1)(var22);
    var22 = var30.prototype;
    var29 = Object.create(var22, {constructor: {value: var30}});
    var34 = 'UploadUtils.tsx';
    var35 = var29;
    var22 = new var35[var30](var34, var33);
    var22 = var22 instanceof Object ? var22 : var29;
    var _closure1_slot25 = var22;
    var31 = var28.RegExp;
    var22 = '^';
    var34 = var22 + var23;
    var29 = var31.prototype;
    var30 = Object.create(var29, {constructor: {value: var31}});
    var29 = 'i';
    var35 = var30;
    var33 = var29;
    var23 = new var35[var31](var34, var33, var32);
    var23 = var23 instanceof Object ? var23 : var30;
    var _closure1_slot26 = var23;
    var28 = var28.RegExp;
    var34 = var22 + var24;
    var24 = var28.prototype;
    var24 = Object.create(var24, {constructor: {value: var28}});
    var35 = var24;
    var22 = new var35[var28](var34, var33, var32);
    var22 = var22 instanceof Object ? var22 : var24;
    var _closure1_slot27 = var22;
    var24 = 'Canceled';
    var _closure1_slot28 = var24;
    var24 = {};
    var24['getFileInfo'] = var14;
    var24['isVideo'] = var10;
    var24['getType'] = var8;
    var24['openImagePickerUnhandled'] = var25;
    var24['openImagePicker'] = var21;
    var24['getCaptionLabel'] = var7;
    var24['getImageDimensionsIfMissing'] = var6;
    var24['isHEVCEncodingSupported'] = var5;
    var24['getAppDir'] = var15;
    var25 = 27;
    var25 = var27[var25];
    var27 = var26.bind(var1)(var25);
    var26 = var27.fileFinishedImporting;
    var25 = 'utils/native/UploadUtils.tsx';
    var25 = var26.bind(var27)(var25);
    var3['default'] = var24;
    var3['base64JPEGRegex'] = var23;
    var3['base64GIFRegex'] = var22;
    var3['openImagePicker'] = var21;
    var3['mediaManager'] = var20;
    var20 = function getImageCompressionQuality() {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var1 = _closure1_slot11;
            var1 = var1.dataSavingMode;
            if(!var1) { _fun0028_ip = 78; continue _fun0028 }
case 79:
            var3 = _closure1_slot12;
            var1 = var3.getType;
            var3 = var1.bind(var3)();
            var1 = _closure1_slot16;
            var1 = var1.CELLULAR;
            if(!(var3 !== var1)) { _fun0028_ip = 91; continue _fun0028 }
case 78:
            var1 = _closure1_slot17;
            var1 = var1.HIGH;
            _fun0028_ip = 97; continue _fun0028;
case 91:
            var2 = _closure1_slot17;
            var1 = var2.LOW;
case 97:
            return var1;
        }
    };
    var3['getImageCompressionQuality'] = var20;
    var3['getVideoQuality'] = var19;
    var3['resolveModeToVideoQualityForUserWithFeature'] = var18;
    var3['resolveModeToVideoQualityForFreeUser'] = var17;
    var17 = function cancelGetFileInfo(arg1) {
        var2 = arg1;
        var2 = var2.item;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1, arg2) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var5 = arg1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.isAndroid;
                var2 = var2.bind(var4)();
                if(!var2) { _fun0029_ip = 340; continue _fun0029 }
case 318:
                var4 = _closure2_slot0;
                var6 = var4.platform;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 17;
                var4 = var8[var4];
                var4 = var7.bind(var1)(var4);
                var4 = var4.UploadPlatform;
                var4 = var4.REACT_NATIVE;
                if(!(var6 !== var4)) { _fun0029_ip = 341; continue _fun0029 }
case 340:
                var4 = var5.bind(var1)();
                _fun0029_ip = 224; continue _fun0029;
case 341:
                var4 = _closure1_slot32;
                var2 = _closure2_slot0;
                var3 = var2.uri;
                var2 = 'cancelResolveToMediaFilePath';
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.then;
                var2 = arg2;
                var2 = var3.bind(var4)(var5, var2);
case 224:
                return var1;
            }
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['cancelGetFileInfo'] = var17;
    var17 = function getFileSize(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var8 = arg1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 12;
            var1 = var1[var6];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            var4 = var8;
            if(!var1) { _fun0030_ip = 5; continue _fun0030 }
case 78:
            var7 = var8.replace;
            var3 = /file:\\/\\//;
            var1 = '';
            var4 = var7.bind(var8)(var3, var1);
case 5:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(var1) { _fun0030_ip = 80; continue _fun0030 }
case 356:
            var1 = _closure1_slot6;
            var3 = var1.DCDFileManager;
            var1 = var3.getSize;
            var1 = var1.bind(var3)(var4);
            _fun0030_ip = 357; continue _fun0030;
case 80:
            var7 = _closure1_slot1;
            var3 = _closure1_slot2;
            var6 = 18;
            var3 = var3[var6];
            var7 = var7.bind(var5)(var3);
            var3 = null;
            if(!(var3 != var7)) { _fun0030_ip = 358; continue _fun0030 }
case 327:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getSize;
            var2 = var2.bind(var3)(var4);
            _fun0030_ip = 359; continue _fun0030;
case 358:
            var3 = global;
            var5 = var3.Promise;
            var4 = var5.reject;
            var3 = "RTNFileManager doesn't exist?";
            var2 = var4.bind(var5)(var3);
case 359:
            var1 = var2;
case 357:
            return var1;
        }
    };
    var3['getFileSize'] = var17;
    var16 = function getFileHash(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var6 = arg1;
            var5 = arguments[1];
            var4 = arguments[2];
            var7 = undefined;
            if(!(var5 === var7)) { _fun0031_ip = 360; continue _fun0031 }
case 93:
            var5 = 'md5';
case 360:
            if(!(var4 === var7)) { _fun0031_ip = 71; continue _fun0031 }
case 361:
            var4 = 4096;
case 71:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 12;
            var1 = var8[var1];
            var3 = var3.bind(var7)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(var1) { _fun0031_ip = 20; continue _fun0031 }
case 97:
            var1 = _closure1_slot6;
            var3 = var1.DCDFileManager;
            var1 = var3.getFileHash;
            var1 = var1.bind(var3)(var6, var5, var4);
            _fun0031_ip = 16; continue _fun0031;
case 20:
            var9 = _closure1_slot1;
            var3 = _closure1_slot2;
            var8 = 18;
            var3 = var3[var8];
            var9 = var9.bind(var7)(var3);
            var3 = null;
            if(!(var3 != var9)) { _fun0031_ip = 362; continue _fun0031 }
case 151:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var3 = var3.bind(var7)(var2);
            var2 = var3.getFileHash;
            var2 = var2.bind(var3)(var6, var5, var4);
            _fun0031_ip = 363; continue _fun0031;
case 362:
            var3 = global;
            var5 = var3.Promise;
            var4 = var5.reject;
            var3 = "RTNFileManager doesn't exist?";
            var2 = var4.bind(var5)(var3);
case 363:
            var1 = var2;
case 16:
            return var1;
        }
    };
    var3['getFileHash'] = var16;
    var3['getAppDir'] = var15;
    var3['getFileInfo'] = var14;
    var3['shouldForceConvertToJPG'] = var13;
    var3['shouldConvertToJPG'] = var12;
    var3['shouldResolveToMediaFilePath'] = var11;
    var3['isVideo'] = var10;
    var3['isImage'] = var9;
    var3['getType'] = var8;
    var3['getCaptionLabel'] = var7;
    var3['getImageDimensionsIfMissing'] = var6;
    var3['isHEVCEncodingSupported'] = var5;
    var3['checkVideoEncodingSupport'] = var4;
    var3['calculateImageQualityMetrics'] = var2;
    return var1;
})();
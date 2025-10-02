// app/modules/remixing/native/RemixingImageUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function _sendRemix() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var16 = var2.ref;
                    var4 = var2.source;
                    var9 = var2.rect;
                    var2 = var2.mentions;
                    var7 = undefined;
                    if(!(var2 === var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = new Array(0);
case 4:
                    var10 = var2;
                    var6 = undefined;
                    var13 = undefined;
                    var15 = undefined;
                    var14 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    SaveGenerator(address=64);
case 6:
                    return var7;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var5 = var4;
                    var5 = var5.local;
                    var8 = null;
                    var17 = null;
                    if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var5 = var4;
                    var5 = var5.messageId;
                    var5 = var8 == var5;
                    var17 = null;
                    if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 12:
                    var20 = _closure1_slot8;
                    var19 = var20.getMessage;
                    var5 = var4;
                    var18 = var5.channelId;
                    var5 = var5.messageId;
                    var17 = var19.bind(var20)(var18, var5);
case 10:
                    var6 = var17;
                    var20 = _closure1_slot6;
                    var19 = var20.getChannel;
                    var18 = var4;
                    var18 = var18.channelId;
                    var20 = var19.bind(var20)(var18);
                    var19 = _closure1_slot1;
                    var21 = _closure1_slot3;
                    var18 = 8;
                    var18 = var21[var18];
                    var21 = var19.bind(var7)(var18);
                    var19 = var8 != var20;
                    var18 = 'remix should be in a channel';
                    var18 = var21.bind(var7)(var19, var18);
                    if(!(var8 != var17)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot3;
                    var17 = 9;
                    var17 = var19[var17];
                    var19 = var18.bind(var7)(var17);
                    var18 = var19.createPendingReply;
                    var17 = {};
                    var21 = var6;
                    var17['message'] = var21;
                    var17['channel'] = var20;
                    var20 = true;
                    var17['shouldMention'] = var20;
                    var20 = false;
                    var17['showMentionToggle'] = var20;
                    var17 = var18.bind(var19)(var17);
case 13:
                    var18 = _closure1_slot11;
                    var17 = var4;
                    var13 = var18.bind(var7)(var17);
case 15: // try_start_0
                    var18 = _closure1_slot15;
                    var17 = var16;
                    var16 = var13;
                    var9 = var18.bind(var7)(var17, var16, var9);
                    SaveGenerator(address=297);
case 16:
                    return var9;
case 17:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=15);
                    if(var16) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var15 = var9;
                    if(!(var8 != var9)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var16 = var4;
                    var19 = var16.channelId;
                    var12 = var19;
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot3;
                    var16 = 10;
                    var16 = var18[var16];
                    var18 = var17.bind(var7)(var16);
                    var17 = var18.sendLocalFile;
                    var16 = var15;
                    var15 = 'file://';
                    var26 = var15 + var16;
                    var25 = var13;
                    var22 = var10;
                    var24 = 'image/png';
                    var27 = var18;
                    var23 = var19;
                    var10 = var27[var17](var26, var25, var24, var23, var22, var21);
                    SaveGenerator(address=392);
case 22:
                    return var10;
case 23:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=12);
                    if(var13) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var15 = var4;
                    var15 = var15.local;
                    var13 = var15;
                    if(!var15) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var18 = _closure1_slot9;
                    var17 = var18.getUploadCount;
                    var16 = var12;
                    var15 = _closure1_slot7;
                    var15 = var15.ChannelMessage;
                    var16 = var17.bind(var18)(var16, var15);
                    var15 = 1;
                    var13 = var15 === var16;
case 26:
                    if(!var13) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var13 = 11;
                    var13 = var16[var13];
                    var17 = var15.bind(var7)(var13);
                    var16 = var17.clearAll;
                    var15 = var12;
                    var13 = _closure1_slot7;
                    var13 = var13.ChannelMessage;
                    var13 = var16.bind(var17)(var15, var13);
case 28:
                    var16 = _closure1_slot6;
                    var15 = var16.getChannel;
                    var13 = var12;
                    var13 = var15.bind(var16)(var13);
                    var14 = var13;
                    var15 = var8 == var13;
                    var13 = undefined;
                    if(var15) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                    var13 = var14.lastMessageId;
case 30:
                    var11 = var13;
                    if(!(var8 != var13)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                    var14 = _closure1_slot2;
                    var15 = _closure1_slot3;
                    var13 = 12;
                    var13 = var15[var13];
                    var17 = var14.bind(var7)(var13);
                    var16 = var17.setUsedRemix;
                    var13 = true;
                    var13 = var16.bind(var17)(var13);
                    var13 = 13;
                    var13 = var15[var13];
                    var14 = var14.bind(var7)(var13);
                    var13 = var14.trackRemixSent;
                    var13 = var13.bind(var14)();
                    var14 = _closure1_slot1;
                    var13 = 14;
                    var13 = var15[var13];
                    var14 = var14.bind(var7)(var13);
                    var13 = var14.popAll;
                    var13 = var13.bind(var14)();
                    var14 = _closure1_slot0;
                    var13 = 15;
                    var13 = var15[var13];
                    var17 = var14.bind(var7)(var13);
                    var16 = var17.lockOrientation;
                    var13 = 'PORTRAIT';
                    var13 = var16.bind(var17)(var13);
                    var13 = 16;
                    var13 = var15[var13];
                    var14 = var14.bind(var7)(var13);
                    var13 = var14.transitionToMessage;
                    var11 = var13.bind(var14)(var12, var11);
case 32: // try_end0
                    return var7;
case 24:
                    return var10;
case 20: // try_start_1
                    var10 = var6;
                    if(!(var8 != var10)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var10 = 9;
                    var10 = var12[var10];
                    var12 = var11.bind(var7)(var10);
                    var11 = var12.deletePendingReply;
                    var10 = var4;
                    var10 = var10.channelId;
                    var10 = var11.bind(var12)(var10);
case 34:
                    var10 = global;
                    var12 = var10.Error;
                    var10 = var12.prototype;
                    var11 = Object.create(var10, {constructor: {value: var12}});
                    var26 = 'Failed to write canvas bytes to cache file';
                    var27 = var11;
                    var10 = new var27[var12](var26, var25);
                    var10 = var10 instanceof Object ? var10 : var11;
                    throw var10;
case 18: // try_end1
                    return var9;
case 36: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=2);
                    if(!(var8 != var6)) { _fun0001_ip = 37; continue _fun0001 }
case 38:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 9;
                    var5 = var8[var5];
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.deletePendingReply;
                    var4 = var4.channelId;
                    var4 = var5.bind(var6)(var4);
case 37:
                    throw var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _saveRemix() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                    var8 = arg1;
                    var2 = arg3;
                    var4 = undefined;
                    var5 = undefined;
                    var3 = undefined;
                    var6 = undefined;
                    var10 = _closure1_slot11;
                    var9 = arg2;
                    var5 = var10.bind(var4)(var9);
case 41: // try_start_0
                    var10 = _closure1_slot15;
                    var9 = var8;
                    var8 = var5;
                    var2 = var10.bind(var4)(var9, var8, var2);
                    SaveGenerator(address=60);
case 42:
                    return var2;
case 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 44; continue _fun0002 }
case 45:
                    var3 = var2;
                    var8 = null;
                    if(!(var8 != var2)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
                    var9 = var3;
                    var3 = 'file://';
                    var6 = var3 + var9;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var3 = 17;
                    var3 = var10[var3];
                    var9 = var9.bind(var4)(var3);
                    var3 = var9.isAndroid;
                    var3 = var3.bind(var9)();
                    if(var3) { _fun0002_ip = 48; continue _fun0002 }
case 49:
                    var3 = _closure1_slot5;
                    var12 = var3.DCDFileManager;
                    var11 = var12.saveFileToGallery;
                    var10 = var6;
                    var9 = var5;
                    var3 = 'PNG';
                    var3 = var11.bind(var12)(var10, var9, var3);
                    SaveGenerator(address=163);
case 50:
                    return var3;
case 51:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(!var9) { _fun0002_ip = 52; continue _fun0002 }
case 53: // try_end0
                    return var3;
case 48: // try_start_1
                    var10 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var9 = 18;
                    var3 = var3[var9];
                    var3 = var10.bind(var4)(var3);
                    var8 = var8 == var3;
                    var3 = undefined;
                    if(var8) { _fun0002_ip = 54; continue _fun0002 }
case 55:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var7 = var7[var9];
                    var9 = var8.bind(var4)(var7);
                    var8 = var9.saveFileToGallery;
                    var7 = var6;
                    var6 = var5;
                    var5 = 'PNG';
                    var3 = var8.bind(var9)(var7, var6, var5);
case 54:
                    SaveGenerator(address=245);
case 56:
                    return var3;
case 57:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 58; continue _fun0002 }
case 52: // try_end1
                    return var4;
case 58:
                    return var3;
case 46: // try_start_2
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var15 = 'Failed to write canvas bytes to cache file';
                    var16 = var4;
                    var3 = new var16[var5](var15, var14);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 44: // try_end2
                    return var2;
case 59: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    throw var2;
case 39:
                    return var1;
                }
            };
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
    var4 = function saveCanvasToCache() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var4;
    var1 = function _saveCanvasToCache() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var3 = arg1;
                    var6 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                    if(var7) { _fun0003_ip = 60; continue _fun0003 }
case 61:
                    var5 = arg2;
                    var8 = undefined;
                    var2 = undefined;
                    var4 = undefined;
                    var7 = null;
                    if(!(var7 == var6)) { _fun0003_ip = 43; continue _fun0003 }
case 62:
                    var11 = var3.current;
                    var10 = var7 == var11;
                    var9 = undefined;
                    if(var10) { _fun0003_ip = 63; continue _fun0003 }
case 4:
                    var10 = var11.makeImageSnapshot;
                    var9 = var10.bind(var11)();
case 63:
                    var2 = var9;
                    _fun0003_ip = 49; continue _fun0003;
case 43:
                    var14 = var6.x;
                    var13 = var6.y;
                    var12 = var6.width;
                    var11 = var6.height;
                    var10 = var3.current;
                    var6 = var7 == var10;
                    var3 = undefined;
                    if(var6) { _fun0003_ip = 64; continue _fun0003 }
case 65:
                    var9 = var10.makeImageSnapshot;
                    var6 = {};
                    var6['x'] = var14;
                    var6['y'] = var13;
                    var6['width'] = var12;
                    var6['height'] = var11;
                    var3 = var9.bind(var10)(var6);
case 64:
                    var2 = var3;
case 49:
                    var3 = var2;
                    if(!(var7 != var3)) { _fun0003_ip = 66; continue _fun0003 }
case 67:
                    var10 = var2;
                    var9 = var10.encodeToBase64;
                    var3 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var2 = 19;
                    var2 = var11[var2];
                    var2 = var3.bind(var8)(var2);
                    var2 = var2.ImageFormat;
                    var3 = var2.PNG;
                    var2 = 100;
                    var4 = var9.bind(var10)(var3, var2);
case 68: // try_start_0
                    var3 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var2 = 17;
                    var2 = var9[var2];
                    var3 = var3.bind(var8)(var2);
                    var2 = var3.isAndroid;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0003_ip = 69; continue _fun0003 }
case 70:
                    var2 = _closure1_slot5;
                    var12 = var2.DCDFileManager;
                    var11 = var12.writeFile;
                    var17 = var5;
                    var16 = var4;
                    var18 = 'cache';
                    var15 = 'base64';
                    var19 = var12;
                    var2 = var19[var11](var18, var17, var16, var15, var14);
                    SaveGenerator(address=264);
case 71:
                    return var2;
case 13:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    var9 = var3;
                    var3 = var2;
                    if(!var9) { _fun0003_ip = 72; continue _fun0003 }
case 15: // try_end0
                    return var2;
case 69: // try_start_1
                    var10 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var9 = 18;
                    var2 = var2[var9];
                    var2 = var10.bind(var8)(var2);
                    var7 = var7 == var2;
                    var2 = undefined;
                    if(var7) { _fun0003_ip = 73; continue _fun0003 }
case 74:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var6 = var6[var9];
                    var9 = var7.bind(var8)(var6);
                    var8 = var9.writeFile;
                    var17 = var5;
                    var16 = var4;
                    var18 = 'cache';
                    var15 = 'base64';
                    var19 = var9;
                    var2 = var19[var8](var18, var17, var16, var15, var14);
case 73:
                    SaveGenerator(address=356);
case 75:
                    return var2;
case 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    var3 = var2;
                    if(var4) { _fun0003_ip = 77; continue _fun0003 }
case 72: // try_end1
                    return var3;
case 77:
                    return var2;
case 78: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=1);
                    throw var2;
case 66:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var18 = 'Failed to grab snapshot from Canvas ref';
                    var19 = var3;
                    var2 = new var19[var4](var18, var17);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 60:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
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
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.NativeModules;
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.DraftType;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.CompressionQuality;
    var _closure1_slot10 = var5;
    var5 = function getFileName(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = var1.local;
            if(var2) { _fun0004_ip = 79; continue _fun0004 }
case 80:
            var10 = var1.messageId;
            var1 = global;
            var3 = var1.Date;
            var2 = var3.now;
            var3 = var2.bind(var3)();
            var2 = var3.toString;
            var8 = var2.bind(var3)();
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var11 = '';
            var9 = 'remix-';
            var7 = '.png';
            var1 = var11[var4](var10, var9, var8, var7, var6);
            _fun0004_ip = 81; continue _fun0004;
case 79:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.v4;
            var5 = var2.bind(var3)();
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = 'remix-';
            var2 = '.png';
            var1 = var4.bind(var3)(var5, var2);
case 81:
            return var1;
        }
    };
    var _closure1_slot11 = var5;
    var5 = function addFilePrototol(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var2 = /^file:\\/\\//;
            var1 = var2.test;
            var2 = var1.bind(var2)(var4);
            var1 = var4;
            if(var2) { _fun0005_ip = 82; continue _fun0005 }
case 83:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'file://';
            var1 = var3.bind(var2)(var4);
case 82:
            return var1;
        }
    };
    var _closure1_slot12 = var5;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/remixing/native/RemixingImageUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function sendRemix() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['sendRemix'] = var5;
    var5 = function saveRemix() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['saveRemix'] = var5;
    var3['saveCanvasToCache'] = var4;
    var4 = function(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg2;
            var6 = arg3;
            var4 = ['image/jpeg', 'image/png'];
            var3 = var4.includes;
            var2 = null;
            var7 = var2 != var6;
            var1 = '';
            if(!var7) { _fun0006_ip = 84; continue _fun0006 }
case 85:
            var1 = var6;
case 84:
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0006_ip = 86; continue _fun0006 }
case 4:
            var6 = _closure1_slot0;
            var4 = _closure1_slot3;
            var3 = 20;
            var4 = var4[var3];
            var3 = undefined;
            var7 = var6.bind(var3)(var4);
            var6 = var7.shouldConvertToJPG;
            var4 = arg1;
            var3 = false;
            var1 = var6.bind(var7)(var4, var5, var3);
case 86:
            if(var1) { _fun0006_ip = 87; continue _fun0006 }
case 88:
            var2 = var2 != var5;
            if(!var2) { _fun0006_ip = 89; continue _fun0006 }
case 90:
            var4 = /\.png$/i;
            var3 = var4.test;
            var2 = var3.bind(var4)(var5);
case 89:
            var1 = var2;
case 87:
            return var1;
        }
    };
    var3['checkIsFormatEligible'] = var4;
    var2 = function(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var9 = arg2;
            var3 = _closure1_slot0;
            var1 = _closure1_slot3;
            var8 = 20;
            var1 = var1[var8];
            var7 = undefined;
            var3 = var3.bind(var7)(var1);
            var1 = var3.shouldResolveToMediaFilePath;
            var1 = var1.bind(var3)(var6);
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var8];
            var5 = var4.bind(var7)(var3);
            if(var1) { _fun0007_ip = 91; continue _fun0007 }
case 92:
            var3 = var5.shouldConvertToJPG;
            var1 = false;
            var1 = var3.bind(var5)(var6, var9, var1);
            if(var1) { _fun0007_ip = 93; continue _fun0007 }
case 94:
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 17;
            var1 = var4[var1];
            var3 = var3.bind(var7)(var1);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0007_ip = 95; continue _fun0007 }
case 96:
            var4 = /\.png$/i;
            var3 = var4.test;
            var1 = null;
            var10 = var1 != var9;
            var1 = '';
            if(!var10) { _fun0007_ip = 97; continue _fun0007 }
case 98:
            var1 = var9;
case 97:
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0007_ip = 93; continue _fun0007 }
case 95:
            var1 = global;
            var4 = var1.Promise;
            var3 = var4.resolve;
            var1 = _closure1_slot12;
            var1 = var1.bind(var7)(var6);
            var1 = var3.bind(var4)(var1);
            _fun0007_ip = 99; continue _fun0007;
case 93:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var8];
            var8 = var4.bind(var7)(var3);
            var7 = var8.mediaManager;
            var4 = {};
            var3 = _closure1_slot10;
            var3 = var3.HIGH;
            var4['compressionQuality'] = var3;
            var3 = 'convertToJPEG';
            var7 = var7.bind(var8)(var3, var6, var4);
            var4 = var7.then;
            var3 = _closure1_slot12;
            var1 = var4.bind(var7)(var3);
case 99:
            _fun0007_ip = 100; continue _fun0007;
case 91:
            var4 = var5.mediaManager;
            var3 = {};
            var2 = _closure1_slot10;
            var2 = var2.HIGH;
            var3['compressionQuality'] = var2;
            var2 = 'resolveToMediaFilePath';
            var1 = var4.bind(var5)(var2, var6, var3);
case 100:
            return var1;
        }
    };
    var3['resolveMediaToLocalFilePath'] = var2;
    return var1;
})();
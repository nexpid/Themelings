// app/modules/remixing/native/RemixingImageUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function _sendRemix() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 819; continue _fun0001 }
 13:
                    var16 = var2.ref;
                    var4 = var2.source;
                    var9 = var2.rect;
                    var2 = var2.mentions;
                    var7 = undefined;
                    if(!(var2 === var7)) { _fun0001_ip = 45; continue _fun0001 }
 41:
                    var2 = new Array(0);
 45:
                    var10 = var2;
                    var6 = undefined;
                    var13 = undefined;
                    var15 = undefined;
                    var14 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    SaveGenerator(address=64);
 62:
                    return var7;
 64:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 816; continue _fun0001 }
 73:
                    var5 = var4;
                    var5 = var5.local;
                    var8 = null;
                    var17 = null;
                    if(var5) { _fun0001_ip = 138; continue _fun0001 }
 89:
                    var5 = var4;
                    var5 = var5.messageId;
                    var5 = var8 == var5;
                    var17 = null;
                    if(var5) { _fun0001_ip = 138; continue _fun0001 }
 106:
                    var20 = _closure1_slot8;
                    var19 = var20.getMessage;
                    var5 = var4;
                    var18 = var5.channelId;
                    var5 = var5.messageId;
                    var17 = var19.bind(var20)(var18, var5);
 138:
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
                    if(!(var8 != var17)) { _fun0001_ip = 264; continue _fun0001 }
 206:
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
 264:
                    var18 = _closure1_slot11;
                    var17 = var4;
                    var13 = var18.bind(var7)(var17);
 276: // try_start_0
                    var18 = _closure1_slot15;
                    var17 = var16;
                    var16 = var13;
                    var9 = var18.bind(var7)(var17, var16, var9);
                    SaveGenerator(address=297);
 295:
                    return var9;
 297:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=15);
                    if(var16) { _fun0001_ip = 769; continue _fun0001 }
 306:
                    var15 = var9;
                    if(!(var8 != var9)) { _fun0001_ip = 687; continue _fun0001 }
 316:
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
 390:
                    return var10;
 392:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=12);
                    if(var13) { _fun0001_ip = 684; continue _fun0001 }
 401:
                    var15 = var4;
                    var15 = var15.local;
                    var13 = var15;
                    if(!var15) { _fun0001_ip = 452; continue _fun0001 }
 416:
                    var18 = _closure1_slot9;
                    var17 = var18.getUploadCount;
                    var16 = var12;
                    var15 = _closure1_slot7;
                    var15 = var15.ChannelMessage;
                    var16 = var17.bind(var18)(var16, var15);
                    var15 = 1;
                    var13 = var15 === var16;
 452:
                    if(!var13) { _fun0001_ip = 500; continue _fun0001 }
 455:
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
 500:
                    var16 = _closure1_slot6;
                    var15 = var16.getChannel;
                    var13 = var12;
                    var13 = var15.bind(var16)(var13);
                    var14 = var13;
                    var15 = var8 == var13;
                    var13 = undefined;
                    if(var15) { _fun0001_ip = 535; continue _fun0001 }
 529:
                    var13 = var14.lastMessageId;
 535:
                    var11 = var13;
                    if(!(var8 != var13)) { _fun0001_ip = 681; continue _fun0001 }
 545:
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
 681: // try_end0
                    return var7;
 684:
                    return var10;
 687: // try_start_1
                    var10 = var6;
                    if(!(var8 != var10)) { _fun0001_ip = 733; continue _fun0001 }
 694:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var10 = 9;
                    var10 = var12[var10];
                    var12 = var11.bind(var7)(var10);
                    var11 = var12.deletePendingReply;
                    var10 = var4;
                    var10 = var10.channelId;
                    var10 = var11.bind(var12)(var10);
 733:
                    var10 = global;
                    var12 = var10.Error;
                    var10 = var12.prototype;
                    var11 = Object.create(var10, {constructor: {value: var12}});
                    var26 = 'Failed to write canvas bytes to cache file';
                    var27 = var11;
                    var10 = new var27[var12](var26, var25);
                    var10 = var10 instanceof Object ? var10 : var11;
                    throw var10;
 769: // try_end1
                    return var9;
 772: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=2);
                    if(!(var8 != var6)) { _fun0001_ip = 814; continue _fun0001 }
 778:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 9;
                    var5 = var8[var5];
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.deletePendingReply;
                    var4 = var4.channelId;
                    var4 = var5.bind(var6)(var4);
 814:
                    throw var3;
 816:
                    return var2;
 819:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 300; continue _fun0002 }
 10:
                    var8 = arg1;
                    var2 = arg3;
                    var4 = undefined;
                    var5 = undefined;
                    var3 = undefined;
                    var6 = undefined;
                    var10 = _closure1_slot11;
                    var9 = arg2;
                    var5 = var10.bind(var4)(var9);
 39: // try_start_0
                    var10 = _closure1_slot15;
                    var9 = var8;
                    var8 = var5;
                    var2 = var10.bind(var4)(var9, var8, var2);
                    SaveGenerator(address=60);
 58:
                    return var2;
 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 293; continue _fun0002 }
 69:
                    var3 = var2;
                    var8 = null;
                    if(!(var8 != var2)) { _fun0002_ip = 257; continue _fun0002 }
 81:
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
                    if(var3) { _fun0002_ip = 172; continue _fun0002 }
 126:
                    var3 = _closure1_slot5;
                    var12 = var3.DCDFileManager;
                    var11 = var12.saveFileToGallery;
                    var10 = var6;
                    var9 = var5;
                    var3 = 'PNG';
                    var3 = var11.bind(var12)(var10, var9, var3);
                    SaveGenerator(address=163);
 161:
                    return var3;
 163:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(!var9) { _fun0002_ip = 251; continue _fun0002 }
 169: // try_end0
                    return var3;
 172: // try_start_1
                    var10 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var9 = 18;
                    var3 = var3[var9];
                    var3 = var10.bind(var4)(var3);
                    var8 = var8 == var3;
                    var3 = undefined;
                    if(var8) { _fun0002_ip = 241; continue _fun0002 }
 201:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var7 = var7[var9];
                    var9 = var8.bind(var4)(var7);
                    var8 = var9.saveFileToGallery;
                    var7 = var6;
                    var6 = var5;
                    var5 = 'PNG';
                    var3 = var8.bind(var9)(var7, var6, var5);
 241:
                    SaveGenerator(address=245);
 243:
                    return var3;
 245:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 254; continue _fun0002 }
 251: // try_end1
                    return var4;
 254:
                    return var3;
 257: // try_start_2
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var15 = 'Failed to write canvas bytes to cache file';
                    var16 = var4;
                    var3 = new var16[var5](var15, var14);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
 293: // try_end2
                    return var2;
 296: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    throw var2;
 300:
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
 0:
                    StartGenerator();
                    var3 = arg1;
                    var6 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                    if(var7) { _fun0003_ip = 411; continue _fun0003 }
 16:
                    var5 = arg2;
                    var8 = undefined;
                    var2 = undefined;
                    var4 = undefined;
                    var7 = null;
                    if(!(var7 == var6)) { _fun0003_ip = 60; continue _fun0003 }
 31:
                    var11 = var3.current;
                    var10 = var7 == var11;
                    var9 = undefined;
                    if(var10) { _fun0003_ip = 55; continue _fun0003 }
 45:
                    var10 = var11.makeImageSnapshot;
                    var9 = var10.bind(var11)();
 55:
                    var2 = var9;
                    _fun0003_ip = 126; continue _fun0003;
 60:
                    var14 = var6.x;
                    var13 = var6.y;
                    var12 = var6.width;
                    var11 = var6.height;
                    var10 = var3.current;
                    var6 = var7 == var10;
                    var3 = undefined;
                    if(var6) { _fun0003_ip = 123; continue _fun0003 }
 94:
                    var9 = var10.makeImageSnapshot;
                    var6 = {};
                    var6['x'] = var14;
                    var6['y'] = var13;
                    var6['width'] = var12;
                    var6['height'] = var11;
                    var3 = var9.bind(var10)(var6);
 123:
                    var2 = var3;
 126:
                    var3 = var2;
                    if(!(var7 != var3)) { _fun0003_ip = 375; continue _fun0003 }
 136:
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
 191: // try_start_0
                    var3 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var2 = 17;
                    var2 = var9[var2];
                    var3 = var3.bind(var8)(var2);
                    var2 = var3.isAndroid;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0003_ip = 279; continue _fun0003 }
 223:
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
 262:
                    return var2;
 264:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    var9 = var3;
                    var3 = var2;
                    if(!var9) { _fun0003_ip = 365; continue _fun0003 }
 276: // try_end0
                    return var2;
 279: // try_start_1
                    var10 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var9 = 18;
                    var2 = var2[var9];
                    var2 = var10.bind(var8)(var2);
                    var7 = var7 == var2;
                    var2 = undefined;
                    if(var7) { _fun0003_ip = 352; continue _fun0003 }
 308:
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
 352:
                    SaveGenerator(address=356);
 354:
                    return var2;
 356:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    var3 = var2;
                    if(var4) { _fun0003_ip = 368; continue _fun0003 }
 365: // try_end1
                    return var3;
 368:
                    return var2;
 371: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=1);
                    throw var2;
 375:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var18 = 'Failed to grab snapshot from Canvas ref';
                    var19 = var3;
                    var2 = new var19[var4](var18, var17);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 411:
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
 0:
            var1 = arg1;
            var2 = var1.local;
            if(var2) { _fun0004_ip = 76; continue _fun0004 }
 12:
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
            _fun0004_ip = 142; continue _fun0004;
 76:
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
 142:
            return var1;
        }
    };
    var _closure1_slot11 = var5;
    var5 = function addFilePrototol(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var2 = /^file:\\/\\//;
            var1 = var2.test;
            var2 = var1.bind(var2)(var4);
            var1 = var4;
            if(var2) { _fun0005_ip = 57; continue _fun0005 }
 33:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'file://';
            var1 = var3.bind(var2)(var4);
 57:
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
 0:
            var5 = arg2;
            var6 = arg3;
            var4 = ['image/jpeg', 'image/png'];
            var3 = var4.includes;
            var2 = null;
            var7 = var2 != var6;
            var1 = '';
            if(!var7) { _fun0006_ip = 37; continue _fun0006 }
 34:
            var1 = var6;
 37:
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0006_ip = 88; continue _fun0006 }
 45:
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
 88:
            if(var1) { _fun0006_ip = 125; continue _fun0006 }
 91:
            var2 = var2 != var5;
            if(!var2) { _fun0006_ip = 122; continue _fun0006 }
 98:
            var4 = /\.png$/i;
            var3 = var4.test;
            var2 = var3.bind(var4)(var5);
 122:
            var1 = var2;
 125:
            return var1;
        }
    };
    var3['checkIsFormatEligible'] = var4;
    var2 = function(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
            if(var1) { _fun0007_ip = 258; continue _fun0007 }
 65:
            var3 = var5.shouldConvertToJPG;
            var1 = false;
            var1 = var3.bind(var5)(var6, var9, var1);
            if(var1) { _fun0007_ip = 189; continue _fun0007 }
 83:
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 17;
            var1 = var4[var1];
            var3 = var3.bind(var7)(var1);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0007_ip = 159; continue _fun0007 }
 116:
            var4 = /\.png$/i;
            var3 = var4.test;
            var1 = null;
            var10 = var1 != var9;
            var1 = '';
            if(!var10) { _fun0007_ip = 151; continue _fun0007 }
 148:
            var1 = var9;
 151:
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0007_ip = 189; continue _fun0007 }
 159:
            var1 = global;
            var4 = var1.Promise;
            var3 = var4.resolve;
            var1 = _closure1_slot12;
            var1 = var1.bind(var7)(var6);
            var1 = var3.bind(var4)(var1);
            _fun0007_ip = 256; continue _fun0007;
 189:
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
 256:
            _fun0007_ip = 294; continue _fun0007;
 258:
            var4 = var5.mediaManager;
            var3 = {};
            var2 = _closure1_slot10;
            var2 = var2.HIGH;
            var3['compressionQuality'] = var2;
            var2 = 'resolveToMediaFilePath';
            var1 = var4.bind(var5)(var2, var6, var3);
 294:
            return var1;
        }
    };
    var3['resolveMediaToLocalFilePath'] = var2;
    return var1;
})();
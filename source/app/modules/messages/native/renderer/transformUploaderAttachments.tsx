// app/modules/messages/native/renderer/transformUploaderAttachments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.AttachmentType;
    var _closure1_slot2 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/transformUploaderAttachments.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createUploaderAttachments(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.uploaderFile;
            var _closure2_slot0 = var1;
            var4 = var2.isFailedMessage;
            var _closure2_slot1 = var4;
            var2 = var2.shouldInlineAttachmentMedia;
            var _closure2_slot2 = var2;
            var5 = var1.items;
            var2 = null;
            var4 = var2 == var5;
            var1 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.map;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = arg1;
                    var1 = var5.filename;
                    var4 = null;
                    var2 = var4 != var1;
                    var8 = '';
                    var14 = var8;
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var14 = var1;
case 4:
                    var6 = var5.item;
                    var1 = var6.originalUri;
                    var2 = var4 != var1;
                    var16 = var8;
                    if(!var2) { _fun0002_ip = 3; continue _fun0002 }
case 6:
                    var16 = var1;
case 3:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var1 = 1;
                    var10 = var9[var1];
                    var2 = undefined;
                    var11 = var7.bind(var2)(var10);
                    var10 = var11.isImageFile;
                    var13 = var10.bind(var11)(var14);
                    var10 = var9[var1];
                    var11 = var7.bind(var2)(var10);
                    var10 = var11.isVideoFile;
                    var12 = var10.bind(var11)(var14);
                    var1 = var9[var1];
                    var7 = var7.bind(var2)(var1);
                    var1 = var7.isAudioFile;
                    var11 = var1.bind(var7)(var14);
                    var1 = var6.progress;
                    var7 = var4 != var1;
                    var15 = 0;
                    var17 = 0;
                    if(!var7) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var17 = var1;
case 7:
                    var7 = var6.compressionProgress;
                    var9 = var4 != var7;
                    var1 = 0;
                    if(!var9) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var1 = var7;
case 9:
                    var9 = 0.7;
                    var18 = var9;
                    if(!(var15 === var1)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var7 = var17 > var15;
                    var18 = var9;
                    if(!var7) { _fun0002_ip = 11; continue _fun0002 }
case 13:
                    var18 = 0;
case 11:
                    var7 = global;
                    var9 = var7.Math;
                    var7 = var9.floor;
                    var10 = var1 * var18;
                    var1 = 0.9;
                    var1 = var1 - var18;
                    var1 = var17 * var1;
                    var10 = var10 + var1;
                    var1 = 10;
                    var1 = var10 + var1;
                    var1 = var7.bind(var9)(var1);
                    var9 = _closure2_slot1;
                    if(!var9) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var9 = 100;
                    var10 = undefined;
                    if(!(var9 === var1)) { _fun0002_ip = 16; continue _fun0002 }
case 14:
                    var10 = var1;
case 16:
                    var1 = {};
                    var1['url'] = var16;
                    var9 = undefined;
                    if(!var12) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var9 = var16;
case 17:
                    var1['videoUrl'] = var9;
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot1;
                    var9 = 2;
                    var9 = var17[var9];
                    var16 = var16.bind(var2)(var9);
                    var9 = var16.getAttachmentObscurityDefaults;
                    var19 = var9.bind(var16)();
                    var20 = var1;
                    var9 = copyDataProperties(var20, var19);
                    var9 = 'filename';
                    var1[var9] = var14;
                    var9 = var6.size;
                    var9 = var4 != var9;
                    var14 = var8;
                    if(!var9) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var16 = var6.size;
                    var9 = var16.toString;
                    var14 = var9.bind(var16)();
case 19:
                    var9 = 'size';
                    var1[var9] = var14;
                    var14 = false;
                    var9 = 'showDescription';
                    var1[var9] = var14;
                    var9 = _closure2_slot2;
                    var14 = 0;
                    if(!var9) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var9 = var6.width;
                    var9 = var4 != var9;
                    var14 = 0;
                    if(!var9) { _fun0002_ip = 21; continue _fun0002 }
case 23:
                    var14 = var6.width;
case 21:
                    var9 = 'width';
                    var1[var9] = var14;
                    var9 = _closure2_slot2;
                    var14 = 0;
                    if(!var9) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var9 = var6.height;
                    var9 = var4 != var9;
                    var14 = 0;
                    if(!var9) { _fun0002_ip = 24; continue _fun0002 }
case 26:
                    var14 = var6.height;
case 24:
                    var9 = 'height';
                    var1[var9] = var14;
                    var14 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var17 = 3;
                    var15 = var9[var17];
                    var15 = var14.bind(var2)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var9 = var9[var17];
                    var9 = var14.bind(var2)(var9);
                    var9 = var9.t;
                    if(var12) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var14 = var9.IPzNKC;
                    var14 = var15.bind(var16)(var14);
                    _fun0002_ip = 29; continue _fun0002;
case 27:
                    var9 = var9.BEWw//;
                    var14 = var15.bind(var16)(var9);
case 29:
                    var9 = 'hint';
                    var1[var9] = var14;
                    var14 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var15 = var9[var17];
                    var15 = var14.bind(var2)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var9 = var9[var17];
                    var9 = var14.bind(var2)(var9);
                    var9 = var9.t;
                    if(var12) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var14 = var9.fKyfcX;
                    var14 = var15.bind(var16)(var14);
                    _fun0002_ip = 32; continue _fun0002;
case 30:
                    var9 = var9./SCpvr;
                    var14 = var15.bind(var16)(var9);
case 32:
                    var9 = 'role';
                    var1[var9] = var14;
                    var9 = _closure1_slot2;
                    if(var13) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                    if(var12) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                    if(var11) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                    var11 = var9.OTHER;
                    _fun0002_ip = 39; continue _fun0002;
case 37:
                    var11 = var9.AUDIO;
case 39:
                    _fun0002_ip = 40; continue _fun0002;
case 35:
                    var11 = var9.VIDEO;
case 40:
                    _fun0002_ip = 41; continue _fun0002;
case 33:
                    var11 = var9.IMAGE;
case 41:
                    var9 = 'attachmentType';
                    var1[var9] = var11;
                    var9 = 'progress';
                    var1[var9] = var10;
                    var7 = _closure2_slot0;
                    var9 = var7.id;
                    var7 = 'uploaderId';
                    var1[var7] = var9;
                    var7 = var5.id;
                    var9 = var4 != var7;
                    if(!var9) { _fun0002_ip = 42; continue _fun0002 }
case 43:
                    var8 = var7;
case 42:
                    var7 = 'uploaderItemId';
                    var1[var7] = var8;
                    var8 = var6.durationSecs;
                    var7 = 'durationSecs';
                    var1[var7] = var8;
                    var7 = var6.waveform;
                    var6 = 'waveform';
                    var1[var6] = var7;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var6.bind(var2)(var3);
                    var3 = var3.CloudUpload;
                    var6 = var5 instanceof var3;
                    var3 = undefined;
                    if(!var6) { _fun0002_ip = 44; continue _fun0002 }
case 45:
                    var5 = var5.reactNativeFileIndex;
                    var4 = var4 == var5;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 46; continue _fun0002 }
case 47:
                    var4 = var5.toString;
                    var2 = var4.bind(var5)();
case 46:
                    var3 = var2;
case 44:
                    var2 = 'id';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3);
case 2:
            if(!(var2 == var1)) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var1 = new Array(0);
case 48:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
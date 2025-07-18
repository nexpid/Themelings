// app/modules/messages/native/renderer/transformUploaderAttachments.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
 0:
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
            if(var4) { _fun0001_ip = 67; continue _fun0001 }
 52:
            var4 = var5.map;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = arg1;
                    var1 = var5.filename;
                    var4 = null;
                    var2 = var4 != var1;
                    var8 = '';
                    var14 = var8;
                    if(!var2) { _fun0002_ip = 28; continue _fun0002 }
 25:
                    var14 = var1;
 28:
                    var6 = var5.item;
                    var1 = var6.originalUri;
                    var2 = var4 != var1;
                    var16 = var8;
                    if(!var2) { _fun0002_ip = 52; continue _fun0002 }
 49:
                    var16 = var1;
 52:
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
                    if(!var7) { _fun0002_ip = 148; continue _fun0002 }
 145:
                    var17 = var1;
 148:
                    var7 = var6.compressionProgress;
                    var9 = var4 != var7;
                    var1 = 0;
                    if(!var9) { _fun0002_ip = 166; continue _fun0002 }
 163:
                    var1 = var7;
 166:
                    var9 = 0.7;
                    var18 = var9;
                    if(!(var15 === var1)) { _fun0002_ip = 195; continue _fun0002 }
 183:
                    var7 = var17 > var15;
                    var18 = var9;
                    if(!var7) { _fun0002_ip = 195; continue _fun0002 }
 193:
                    var18 = 0;
 195:
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
                    if(!var9) { _fun0002_ip = 266; continue _fun0002 }
 257:
                    var9 = 100;
                    var10 = undefined;
                    if(!(var9 === var1)) { _fun0002_ip = 269; continue _fun0002 }
 266:
                    var10 = var1;
 269:
                    var1 = {};
                    var1['url'] = var16;
                    var9 = undefined;
                    if(!var12) { _fun0002_ip = 283; continue _fun0002 }
 280:
                    var9 = var16;
 283:
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
                    if(!var9) { _fun0002_ip = 363; continue _fun0002 }
 349:
                    var16 = var6.size;
                    var9 = var16.toString;
                    var14 = var9.bind(var16)();
 363:
                    var9 = 'size';
                    var1[var9] = var14;
                    var14 = false;
                    var9 = 'showDescription';
                    var1[var9] = var14;
                    var9 = _closure2_slot2;
                    var14 = 0;
                    if(!var9) { _fun0002_ip = 411; continue _fun0002 }
 392:
                    var9 = var6.width;
                    var9 = var4 != var9;
                    var14 = 0;
                    if(!var9) { _fun0002_ip = 411; continue _fun0002 }
 406:
                    var14 = var6.width;
 411:
                    var9 = 'width';
                    var1[var9] = var14;
                    var9 = _closure2_slot2;
                    var14 = 0;
                    if(!var9) { _fun0002_ip = 448; continue _fun0002 }
 429:
                    var9 = var6.height;
                    var9 = var4 != var9;
                    var14 = 0;
                    if(!var9) { _fun0002_ip = 448; continue _fun0002 }
 443:
                    var14 = var6.height;
 448:
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
                    if(var12) { _fun0002_ip = 517; continue _fun0002 }
 504:
                    var14 = var9.IPzNKC;
                    var14 = var15.bind(var16)(var14);
                    _fun0002_ip = 528; continue _fun0002;
 517:
                    var9 = var9.BEWw//;
                    var14 = var15.bind(var16)(var9);
 528:
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
                    if(var12) { _fun0002_ip = 594; continue _fun0002 }
 581:
                    var14 = var9.fKyfcX;
                    var14 = var15.bind(var16)(var14);
                    _fun0002_ip = 605; continue _fun0002;
 594:
                    var9 = var9./SCpvr;
                    var14 = var15.bind(var16)(var9);
 605:
                    var9 = 'role';
                    var1[var9] = var14;
                    var9 = _closure1_slot2;
                    if(var13) { _fun0002_ip = 651; continue _fun0002 }
 621:
                    if(var12) { _fun0002_ip = 643; continue _fun0002 }
 624:
                    if(var11) { _fun0002_ip = 635; continue _fun0002 }
 627:
                    var11 = var9.OTHER;
                    _fun0002_ip = 641; continue _fun0002;
 635:
                    var11 = var9.AUDIO;
 641:
                    _fun0002_ip = 649; continue _fun0002;
 643:
                    var11 = var9.VIDEO;
 649:
                    _fun0002_ip = 657; continue _fun0002;
 651:
                    var11 = var9.IMAGE;
 657:
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
                    if(!var9) { _fun0002_ip = 708; continue _fun0002 }
 705:
                    var8 = var7;
 708:
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
                    if(!var6) { _fun0002_ip = 809; continue _fun0002 }
 782:
                    var5 = var5.reactNativeFileIndex;
                    var4 = var4 == var5;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 806; continue _fun0002 }
 797:
                    var4 = var5.toString;
                    var2 = var4.bind(var5)();
 806:
                    var3 = var2;
 809:
                    var2 = 'id';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3);
 67:
            if(!(var2 == var1)) { _fun0001_ip = 75; continue _fun0001 }
 71:
            var1 = new Array(0);
 75:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
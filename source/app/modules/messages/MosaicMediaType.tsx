// app/modules/messages/MosaicMediaType.tsx
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
    var4 = var4.MessageAttachmentFlags;
    var _closure1_slot2 = var4;
    var4 = /\.(mp3|m4a|ogg|opus|wav|flac)$/i;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/MosaicMediaType.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = 'IMAGE';
            var1 = var1 === var3;
            if(var1) { _fun0001_ip = 22; continue _fun0001 }
 14:
            var2 = 'VIDEO';
            var1 = var2 === var3;
 22:
            if(var1) { _fun0001_ip = 35; continue _fun0001 }
 25:
            var2 = 'CLIP';
            var1 = var2 === var3;
 35:
            if(var1) { _fun0001_ip = 46; continue _fun0001 }
 38:
            var2 = 'VISUAL_PLACEHOLDER';
            var1 = var2 === var3;
 46:
            return var1;
        }
    };
    var3['isVisualMedia'] = var4;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var1 = 'IMAGE';
            var1 = var1 === var3;
            if(var1) { _fun0002_ip = 22; continue _fun0002 }
 14:
            var2 = 'VIDEO';
            var1 = var2 === var3;
 22:
            if(var1) { _fun0002_ip = 33; continue _fun0002 }
 25:
            var2 = 'VISUAL_PLACEHOLDER';
            var1 = var2 === var3;
 33:
            return var1;
        }
    };
    var3['isGroupableMedia'] = var4;
    var4 = function getMosaicMediaTypeForAttachment(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var8 = arg1;
            var1 = arg2;
            var6 = var8.filename;
            var3 = var8.width;
            var2 = var8.height;
            if(!var1) { _fun0003_ip = 45; continue _fun0003 }
 25:
            var9 = null;
            if(!(var9 != var3)) { _fun0003_ip = 45; continue _fun0003 }
 31:
            var7 = 0;
            if(!(var3 > var7)) { _fun0003_ip = 45; continue _fun0003 }
 37:
            if(!(var9 != var2)) { _fun0003_ip = 45; continue _fun0003 }
 41:
            if(!(!(var2 > var7))) { _fun0003_ip = 162; continue _fun0003 }
 45:
            var3 = null;
            if(!(var3 != var1)) { _fun0003_ip = 87; continue _fun0003 }
 51:
            var2 = _closure1_slot3;
            var1 = var2.test;
            var1 = var1.bind(var2)(var6);
            if(!var1) { _fun0003_ip = 87; continue _fun0003 }
 71:
            var1 = var8.url;
            var2 = var3 != var1;
            var1 = 'AUDIO';
            if(var2) { _fun0003_ip = 157; continue _fun0003 }
 87:
            var2 = var8.url;
            var3 = var3 != var2;
            var4 = 'OTHER';
            var2 = var4;
            if(!var3) { _fun0003_ip = 154; continue _fun0003 }
 106:
            var10 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 3;
            var5 = var5[var3];
            var3 = undefined;
            var5 = var10.bind(var3)(var5);
            var3 = var5.isPlaintextPreviewableFile;
            var3 = var3.bind(var5)(var6);
            var2 = var4;
            if(!var3) { _fun0003_ip = 154; continue _fun0003 }
 148:
            var2 = 'PLAINTEXT_PREVIEW';
 154:
            var1 = var2;
 157:
            _fun0003_ip = 343; continue _fun0003;
 162:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var11 = 1;
            var2 = var2[var11];
            var10 = undefined;
            var3 = var3.bind(var10)(var2);
            var2 = var3.isImageFile;
            var3 = var2.bind(var3)(var6);
            var2 = 'IMAGE';
            if(var3) { _fun0003_ip = 340; continue _fun0003 }
 208:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var11];
            var5 = var5.bind(var10)(var3);
            var3 = var5.isVideoFile;
            var5 = var3.bind(var5)(var6);
            var6 = 'INVALID';
            var3 = var6;
            if(!var5) { _fun0003_ip = 337; continue _fun0003 }
 246:
            var5 = var8.proxy_url;
            var5 = var9 != var5;
            var3 = var6;
            if(!var5) { _fun0003_ip = 337; continue _fun0003 }
 262:
            var6 = _closure1_slot0;
            var11 = _closure1_slot1;
            var5 = 2;
            var5 = var11[var5];
            var6 = var6.bind(var10)(var5);
            var5 = var6.hasFlag;
            var8 = var8.flags;
            var9 = var9 != var8;
            var7 = 0;
            if(!var9) { _fun0003_ip = 305; continue _fun0003 }
 302:
            var7 = var8;
 305:
            var4 = _closure1_slot2;
            var4 = var4.IS_CLIP;
            var5 = var5.bind(var6)(var7, var4);
            var4 = 'VIDEO';
            if(!var5) { _fun0003_ip = 334; continue _fun0003 }
 328:
            var4 = 'CLIP';
 334:
            var3 = var4;
 337:
            var2 = var3;
 340:
            var1 = var2;
 343:
            return var1;
        }
    };
    var3['getMosaicMediaTypeForAttachment'] = var4;
    var2 = function getMosaicMediaTypeForUnfurledMediaItem(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var3 = var1.contentType;
            var5 = var1.width;
            var2 = var1.height;
            var4 = null;
            if(!(var4 != var5)) { _fun0004_ip = 109; continue _fun0004 }
 25:
            var1 = 0;
            if(!(var5 > var1)) { _fun0004_ip = 109; continue _fun0004 }
 31:
            if(!(var4 != var2)) { _fun0004_ip = 109; continue _fun0004 }
 35:
            if(!(var2 > var1)) { _fun0004_ip = 109; continue _fun0004 }
 39:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var5 = 1;
            var2 = var2[var5];
            var4 = undefined;
            var6 = var6.bind(var4)(var2);
            var2 = var6.isImageContentType;
            var2 = var2.bind(var6)(var3);
            if(var2) { _fun0004_ip = 121; continue _fun0004 }
 78:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isVideoContentType;
            var1 = var1.bind(var2)(var3);
            if(var1) { _fun0004_ip = 115; continue _fun0004 }
 109:
            var1 = 'VISUAL_PLACEHOLDER';
            return var1;
 115:
            var1 = 'VIDEO';
            return var1;
 121:
            var1 = 'IMAGE';
            return var1;
        }
    };
    var3['getMosaicMediaTypeForUnfurledMediaItem'] = var2;
    return var1;
})();
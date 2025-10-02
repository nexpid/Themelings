// app/modules/messages/native/renderer/transformMessageAttachments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageAttachmentFlags;
    var _closure1_slot4 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/transformMessageAttachments.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function transformMessageAttachments(arg1) {
        var2 = arg1;
        var4 = var2.attachments;
        var3 = var2.uploadAttachments;
        var _closure2_slot0 = var3;
        var3 = var2.shouldInlineAttachmentMedia;
        var _closure2_slot1 = var3;
        var3 = var2.gifAutoPlay;
        var _closure2_slot2 = var3;
        var3 = var2.viewImageDescriptions;
        var _closure2_slot3 = var3;
        var3 = var2.useReducedMotion;
        var _closure2_slot4 = var3;
        var3 = var2.shouldObscureSpoiler;
        var _closure2_slot5 = var3;
        var3 = var2.themedBackgroundColor;
        var _closure2_slot6 = var3;
        var3 = var2.enabledContentHarmTypeFlags;
        var _closure2_slot7 = var3;
        var3 = var2.shouldAgeVerify;
        var _closure2_slot8 = var3;
        var2 = var2.colors;
        var _closure2_slot9 = var2;
        var3 = var4.filter;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = arg1;
                var2 = var3.flags;
                var1 = null;
                var1 = var1 == var2;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 2;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var4 = var5.hasFlag;
                var3 = var3.flags;
                var2 = _closure1_slot4;
                var2 = var2.IS_THUMBNAIL;
                var2 = var4.bind(var5)(var3, var2);
                var1 = !var2;
case 2:
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var1 = function(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var7 = arg1;
                var4 = arg2;
                var29 = var7.proxy_url;
                var30 = var7.url;
                var11 = var7.filename;
                var24 = var7.size;
                var17 = var7.width;
                var22 = var7.height;
                var20 = var7.description;
                var19 = var7.duration_secs;
                var18 = var7.waveform;
                var10 = var7.id;
                var9 = var7.placeholder;
                var8 = var7.placeholder_version;
                var1 = var7.flags;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 3;
                var13 = var12[var2];
                var5 = undefined;
                var14 = var6.bind(var5)(var13);
                var13 = var14.isImageFile;
                var16 = var13.bind(var14)(var11);
                var13 = var12[var2];
                var14 = var6.bind(var5)(var13);
                var13 = var14.isAudioFile;
                var13 = var13.bind(var14)(var11);
                var2 = var12[var2];
                var6 = var6.bind(var5)(var2);
                var2 = var6.isVideoFile;
                var15 = var2.bind(var6)(var11);
                var23 = var16;
                if(var23) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var23 = var15;
case 4:
                var2 = _closure2_slot0;
                var11 = null;
                var2 = var11 != var2;
                if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var12 = _closure2_slot0;
                var12 = var12.length;
                var2 = var4 < var12;
case 6:
                var12 = undefined;
                if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var2 = _closure2_slot0;
                var12 = var2[var4];
case 8:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var27 = 2;
                var2 = var2[var27];
                var21 = var4.bind(var5)(var2);
                var14 = var21.hasFlag;
                var2 = var11 != var1;
                var26 = 0;
                var4 = 0;
                if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var4 = var1;
case 10:
                var2 = _closure1_slot4;
                var2 = var2.IS_ANIMATED;
                var4 = var14.bind(var21)(var4, var2);
                if(!var16) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                if(!(var11 != var17)) { _fun0002_ip = 12; continue _fun0002 }
case 14:
                if(!(var11 == var22)) { _fun0002_ip = 15; continue _fun0002 }
case 12:
                var2 = var15;
                if(!var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var14 = _closure2_slot1;
                if(var14) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var14 = var11 != var12;
case 18:
                var2 = var14;
case 16:
                var21 = undefined;
                var25 = var30;
                if(!var2) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var2 = var30;
                if(!(var11 != var29)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                var14 = '?format=webp';
                var2 = var29 + var14;
case 22:
                var14 = var30;
                if(!(var11 != var29)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                var28 = '';
                var14 = var30;
                if(!(var28 !== var29)) { _fun0002_ip = 24; continue _fun0002 }
case 26:
                var14 = var29;
case 24:
                var21 = var14;
                var25 = var2;
                _fun0002_ip = 20; continue _fun0002;
case 15:
                var14 = _closure1_slot1;
                var28 = _closure1_slot2;
                var2 = 4;
                var2 = var28[var2];
                var28 = var14.bind(var5)(var2);
                var14 = var28.getImageSrc;
                var2 = _closure2_slot2;
                var31 = !var2;
                var35 = var28;
                var34 = var29;
                var33 = var17;
                var32 = var22;
                var25 = var35[var14](var34, var33, var32, var31, var30);
                var21 = undefined;
case 20:
                var14 = var17;
                if(!(var11 != var12)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                var2 = var12.width;
                var14 = var17;
                if(!(var2 > var26)) { _fun0002_ip = 27; continue _fun0002 }
case 29:
                var14 = var12.width;
case 27:
                var2 = var22;
                if(!(var11 != var12)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                var17 = var12.height;
                var2 = var22;
                if(!(var17 > var26)) { _fun0002_ip = 30; continue _fun0002 }
case 32:
                var2 = var12.height;
case 30:
                var22 = _closure2_slot1;
                var17 = 0;
                if(!var22) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                var17 = 0;
                if(!var23) { _fun0002_ip = 33; continue _fun0002 }
case 35:
                var22 = var11 != var14;
                var17 = 0;
                if(!var22) { _fun0002_ip = 33; continue _fun0002 }
case 36:
                var17 = var14;
case 33:
                var22 = _closure2_slot1;
                var14 = 0;
                if(!var22) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                var14 = 0;
                if(!var23) { _fun0002_ip = 37; continue _fun0002 }
case 39:
                var22 = var11 != var2;
                var14 = 0;
                if(!var22) { _fun0002_ip = 37; continue _fun0002 }
case 40:
                var14 = var2;
case 37:
                var22 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var27];
                var22 = var22.bind(var5)(var2);
                var2 = var22.hasFlag;
                var27 = var11 != var1;
                var26 = 0;
                if(!var27) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                var26 = var1;
case 41:
                var1 = _closure1_slot4;
                var1 = var1.IS_CLIP;
                var1 = var2.bind(var22)(var26, var1);
                var2 = undefined;
                if(!var1) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                var1 = {};
                var28 = _closure1_slot0;
                var29 = _closure1_slot2;
                var22 = 5;
                var26 = var29[var22];
                var26 = var28.bind(var5)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var22 = var29[var22];
                var22 = var28.bind(var5)(var22);
                var22 = var22.t;
                var22 = var22.gESDiY;
                var22 = var26.bind(var27)(var22);
                var1['attachmentTagText'] = var22;
                var22 = 'clip';
                var1['attachmentTagIconType'] = var22;
                var22 = _closure2_slot9;
                var26 = var22.clipTagBackgroundColor;
                var1['attachmentTagBackgroundColor'] = var26;
                var22 = var22.clipTagTextColor;
                var1['attachmentTagTextColor'] = var22;
                var2 = var1;
case 43:
                var1 = {};
                var22 = var25;
                if(!(var11 != var12)) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                var26 = var12.localUri;
                var22 = var25;
                if(!(var11 != var26)) { _fun0002_ip = 45; continue _fun0002 }
case 47:
                var22 = var25;
                if(!var23) { _fun0002_ip = 45; continue _fun0002 }
case 48:
                var23 = _closure2_slot1;
                var22 = var25;
                if(!var23) { _fun0002_ip = 45; continue _fun0002 }
case 49:
                var22 = var12.localUri;
case 45:
                var1['url'] = var22;
                var1['videoUrl'] = var21;
                var23 = _closure1_slot1;
                var21 = _closure1_slot2;
                var22 = 6;
                var22 = var21[var22];
                var22 = var23.bind(var5)(var22);
                var22 = var22.bind(var5)(var7);
                var1['filename'] = var22;
                var22 = 7;
                var22 = var21[var22];
                var23 = var23.bind(var5)(var22);
                var22 = var23.filesize;
                var22 = var22.bind(var23)(var24);
                var1['size'] = var22;
                var1['description'] = var20;
                var24 = _closure1_slot0;
                var20 = 5;
                var22 = var21[var20];
                var22 = var24.bind(var5)(var22);
                var25 = var22.intl;
                var23 = var25.string;
                var22 = var21[var20];
                var22 = var24.bind(var5)(var22);
                var22 = var22.t;
                var22 = var22.jCV1T0;
                var23 = var23.bind(var25)(var22);
                var22 = var23.toUpperCase;
                var22 = var22.bind(var23)();
                var1['alt'] = var22;
                var22 = var21[var20];
                var22 = var24.bind(var5)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var21[var20];
                var21 = var24.bind(var5)(var21);
                var21 = var21.t;
                var21 = var21.fSiQ3N;
                var21 = var22.bind(var23)(var21);
                var1['altTextHint'] = var21;
                var21 = _closure2_slot3;
                var1['showDescription'] = var21;
                var1['durationSecs'] = var19;
                var1['waveform'] = var18;
                var1['width'] = var17;
                var1['height'] = var14;
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var18 = var14[var20];
                var18 = var17.bind(var5)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var14 = var14[var20];
                var14 = var17.bind(var5)(var14);
                var17 = var14.t;
                if(var15) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                var14 = var17.IPzNKC;
                var14 = var18.bind(var19)(var14);
                _fun0002_ip = 52; continue _fun0002;
case 50:
                var17 = var17.BEWw//;
                var14 = var18.bind(var19)(var17);
case 52:
                var1['hint'] = var14;
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var18 = var14[var20];
                var18 = var17.bind(var5)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var14 = var14[var20];
                var14 = var17.bind(var5)(var14);
                var17 = var14.t;
                if(var15) { _fun0002_ip = 53; continue _fun0002 }
case 54:
                var14 = var17.fKyfcX;
                var14 = var18.bind(var19)(var14);
                _fun0002_ip = 55; continue _fun0002;
case 53:
                var17 = var17./SCpvr;
                var14 = var18.bind(var19)(var17);
case 55:
                var1['role'] = var14;
                var14 = _closure1_slot3;
                if(var16) { _fun0002_ip = 56; continue _fun0002 }
case 57:
                if(var15) { _fun0002_ip = 58; continue _fun0002 }
case 59:
                if(var13) { _fun0002_ip = 60; continue _fun0002 }
case 61:
                var13 = var14.OTHER;
                _fun0002_ip = 62; continue _fun0002;
case 60:
                var13 = var14.AUDIO;
case 62:
                _fun0002_ip = 63; continue _fun0002;
case 58:
                var13 = var14.VIDEO;
case 63:
                _fun0002_ip = 64; continue _fun0002;
case 56:
                var13 = var14.IMAGE;
case 64:
                var1['attachmentType'] = var13;
                var1['id'] = var10;
                var10 = _closure2_slot4;
                var10 = !var10;
                var1['isAnimated'] = var10;
                var13 = var11 == var12;
                var10 = undefined;
                if(var13) { _fun0002_ip = 65; continue _fun0002 }
case 66:
                var10 = var12.uploaderId;
case 65:
                var1['uploaderId'] = var10;
                var13 = var11 == var12;
                var10 = undefined;
                if(var13) { _fun0002_ip = 67; continue _fun0002 }
case 68:
                var10 = var12.uploaderItemId;
case 67:
                var1['uploaderItemId'] = var10;
                var10 = _closure2_slot6;
                var11 = var11 != var10;
                var10 = undefined;
                if(!var11) { _fun0002_ip = 69; continue _fun0002 }
case 70:
                var10 = _closure2_slot6;
case 69:
                var1['backgroundColor'] = var10;
                var1['placeholder'] = var9;
                var1['placeholderVersion'] = var8;
                var8 = 1000;
                var1['mediaViewerBufferForPlaybackMs'] = var8;
                var1['mediaViewerBufferForPlaybackAfterRebufferMs'] = var8;
                var8 = 20000;
                var1['mediaViewerMinBufferMs'] = var8;
                var1['mediaViewerMaxBufferMs'] = var8;
                var8 = false;
                var1['mediaViewerEnableDecoderFallback'] = var8;
                var8 = true;
                var1['mediaViewerEnableAsyncBufferQueueing'] = var8;
                var1['srcIsAnimated'] = var4;
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 8;
                var3 = var8[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.getAttachmentObscurityProps;
                var3 = {};
                var3['attachment'] = var7;
                var7 = _closure2_slot5;
                var3['shouldObscureSpoiler'] = var7;
                var7 = _closure2_slot7;
                var3['enabledContentHarmTypeFlags'] = var7;
                var6 = _closure2_slot8;
                var3['shouldAgeVerify'] = var6;
                var33 = var4.bind(var5)(var3);
                var34 = var1;
                var3 = copyDataProperties(var34, var33);
                var34 = var1;
                var33 = var2;
                var2 = copyDataProperties(var34, var33);
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
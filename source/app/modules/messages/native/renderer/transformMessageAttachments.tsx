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
                var8 = arg2;
                var30 = var7.proxy_url;
                var31 = var7.url;
                var6 = var7.filename;
                var25 = var7.size;
                var18 = var7.width;
                var23 = var7.height;
                var21 = var7.description;
                var20 = var7.duration_secs;
                var19 = var7.waveform;
                var11 = var7.id;
                var10 = var7.placeholder;
                var9 = var7.placeholder_version;
                var1 = var7.flags;
                var4 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 3;
                var13 = var12[var2];
                var5 = undefined;
                var14 = var4.bind(var5)(var13);
                var13 = var14.isImageFile;
                var17 = var13.bind(var14)(var6);
                var13 = var12[var2];
                var14 = var4.bind(var5)(var13);
                var13 = var14.isAudioFile;
                var14 = var13.bind(var14)(var6);
                var13 = var12[var2];
                var15 = var4.bind(var5)(var13);
                var13 = var15.isVideoFile;
                var16 = var13.bind(var15)(var6);
                var2 = var12[var2];
                var4 = var4.bind(var5)(var2);
                var2 = var4.isWebPlayerVideoFile;
                var4 = var2.bind(var4)(var6);
                var24 = var17;
                if(var24) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var24 = var16;
case 4:
                var2 = _closure2_slot0;
                var12 = null;
                var2 = var12 != var2;
                if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var13 = _closure2_slot0;
                var13 = var13.length;
                var2 = var8 < var13;
case 6:
                var13 = undefined;
                if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var2 = _closure2_slot0;
                var13 = var2[var8];
case 8:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var28 = 2;
                var2 = var2[var28];
                var22 = var8.bind(var5)(var2);
                var15 = var22.hasFlag;
                var2 = var12 != var1;
                var27 = 0;
                var8 = 0;
                if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var8 = var1;
case 10:
                var2 = _closure1_slot4;
                var2 = var2.IS_ANIMATED;
                var8 = var15.bind(var22)(var8, var2);
                if(!var17) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                if(!(var12 != var18)) { _fun0002_ip = 12; continue _fun0002 }
case 14:
                if(!(var12 == var23)) { _fun0002_ip = 15; continue _fun0002 }
case 12:
                var2 = var16;
                if(!var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var15 = _closure2_slot1;
                if(var15) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var15 = var12 != var13;
case 18:
                var2 = var15;
case 16:
                var22 = undefined;
                var26 = var31;
                if(!var2) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var2 = var31;
                if(!(var12 != var30)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                var15 = '?format=webp';
                var2 = var30 + var15;
case 22:
                var15 = var31;
                if(!(var12 != var30)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                var29 = '';
                var15 = var31;
                if(!(var29 !== var30)) { _fun0002_ip = 24; continue _fun0002 }
case 26:
                var15 = var30;
case 24:
                var22 = var15;
                var26 = var2;
                _fun0002_ip = 20; continue _fun0002;
case 15:
                var15 = _closure1_slot1;
                var29 = _closure1_slot2;
                var2 = 4;
                var2 = var29[var2];
                var29 = var15.bind(var5)(var2);
                var15 = var29.getImageSrc;
                var2 = _closure2_slot2;
                var32 = !var2;
                var36 = var29;
                var35 = var30;
                var34 = var18;
                var33 = var23;
                var26 = var36[var15](var35, var34, var33, var32, var31);
                var22 = undefined;
case 20:
                var15 = var18;
                if(!(var12 != var13)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                var2 = var13.width;
                var15 = var18;
                if(!(var2 > var27)) { _fun0002_ip = 27; continue _fun0002 }
case 29:
                var15 = var13.width;
case 27:
                var2 = var23;
                if(!(var12 != var13)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                var18 = var13.height;
                var2 = var23;
                if(!(var18 > var27)) { _fun0002_ip = 30; continue _fun0002 }
case 32:
                var2 = var13.height;
case 30:
                var23 = _closure2_slot1;
                var18 = 0;
                if(!var23) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                var18 = 0;
                if(!var24) { _fun0002_ip = 33; continue _fun0002 }
case 35:
                var23 = var12 != var15;
                var18 = 0;
                if(!var23) { _fun0002_ip = 33; continue _fun0002 }
case 36:
                var18 = var15;
case 33:
                var23 = _closure2_slot1;
                var15 = 0;
                if(!var23) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                var15 = 0;
                if(!var24) { _fun0002_ip = 37; continue _fun0002 }
case 39:
                var23 = var12 != var2;
                var15 = 0;
                if(!var23) { _fun0002_ip = 37; continue _fun0002 }
case 40:
                var15 = var2;
case 37:
                var23 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var28];
                var23 = var23.bind(var5)(var2);
                var2 = var23.hasFlag;
                var28 = var12 != var1;
                var27 = 0;
                if(!var28) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                var27 = var1;
case 41:
                var1 = _closure1_slot4;
                var1 = var1.IS_CLIP;
                var1 = var2.bind(var23)(var27, var1);
                var2 = undefined;
                if(!var1) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                var1 = {};
                var29 = _closure1_slot0;
                var30 = _closure1_slot2;
                var23 = 5;
                var27 = var30[var23];
                var27 = var29.bind(var5)(var27);
                var28 = var27.intl;
                var27 = var28.string;
                var23 = var30[var23];
                var23 = var29.bind(var5)(var23);
                var23 = var23.t;
                var23 = var23.gESDiU;
                var23 = var27.bind(var28)(var23);
                var1['attachmentTagText'] = var23;
                var23 = 'clip';
                var1['attachmentTagIconType'] = var23;
                var23 = _closure2_slot9;
                var27 = var23.clipTagBackgroundColor;
                var1['attachmentTagBackgroundColor'] = var27;
                var23 = var23.clipTagTextColor;
                var1['attachmentTagTextColor'] = var23;
                var2 = var1;
case 43:
                var1 = {};
                var23 = var26;
                if(!(var12 != var13)) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                var27 = var13.localUri;
                var23 = var26;
                if(!(var12 != var27)) { _fun0002_ip = 45; continue _fun0002 }
case 47:
                var23 = var26;
                if(!var24) { _fun0002_ip = 45; continue _fun0002 }
case 48:
                var24 = _closure2_slot1;
                var23 = var26;
                if(!var24) { _fun0002_ip = 45; continue _fun0002 }
case 49:
                var23 = var13.localUri;
case 45:
                var1['url'] = var23;
                var1['videoUrl'] = var22;
                var24 = _closure1_slot1;
                var22 = _closure1_slot2;
                var23 = 6;
                var23 = var22[var23];
                var23 = var24.bind(var5)(var23);
                var23 = var23.bind(var5)(var7);
                var1['filename'] = var23;
                var23 = 7;
                var23 = var22[var23];
                var24 = var24.bind(var5)(var23);
                var23 = var24.filesize;
                var23 = var23.bind(var24)(var25);
                var1['size'] = var23;
                var1['description'] = var21;
                var25 = _closure1_slot0;
                var21 = 5;
                var23 = var22[var21];
                var23 = var25.bind(var5)(var23);
                var26 = var23.intl;
                var24 = var26.string;
                var23 = var22[var21];
                var23 = var25.bind(var5)(var23);
                var23 = var23.t;
                var23 = var23.jCV1Tz;
                var24 = var24.bind(var26)(var23);
                var23 = var24.toUpperCase;
                var23 = var23.bind(var24)();
                var1['alt'] = var23;
                var23 = var22[var21];
                var23 = var25.bind(var5)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var22[var21];
                var22 = var25.bind(var5)(var22);
                var22 = var22.t;
                var22 = var22.fSiQ3A;
                var22 = var23.bind(var24)(var22);
                var1['altTextHint'] = var22;
                var22 = _closure2_slot3;
                var1['showDescription'] = var22;
                var1['durationSecs'] = var20;
                var1['waveform'] = var19;
                var1['width'] = var18;
                var1['height'] = var15;
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var19 = var15[var21];
                var19 = var18.bind(var5)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var15 = var15[var21];
                var15 = var18.bind(var5)(var15);
                var18 = var15.t;
                if(var16) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                var15 = var18.IPzNKE;
                var15 = var19.bind(var20)(var15);
                _fun0002_ip = 52; continue _fun0002;
case 50:
                var18 = var18.BEWw/7;
                var15 = var19.bind(var20)(var18);
case 52:
                var1['hint'] = var15;
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var19 = var15[var21];
                var19 = var18.bind(var5)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var15 = var15[var21];
                var15 = var18.bind(var5)(var15);
                var18 = var15.t;
                if(var16) { _fun0002_ip = 53; continue _fun0002 }
case 54:
                var15 = var18.fKyfca;
                var15 = var19.bind(var20)(var15);
                _fun0002_ip = 55; continue _fun0002;
case 53:
                var18 = var18./SCpvi;
                var15 = var19.bind(var20)(var18);
case 55:
                var1['role'] = var15;
                var15 = _closure1_slot3;
                if(var17) { _fun0002_ip = 56; continue _fun0002 }
case 57:
                if(var16) { _fun0002_ip = 58; continue _fun0002 }
case 59:
                if(var14) { _fun0002_ip = 60; continue _fun0002 }
case 61:
                var14 = var15.OTHER;
                _fun0002_ip = 62; continue _fun0002;
case 60:
                var14 = var15.AUDIO;
case 62:
                _fun0002_ip = 63; continue _fun0002;
case 58:
                var14 = var15.VIDEO;
case 63:
                _fun0002_ip = 64; continue _fun0002;
case 56:
                var14 = var15.IMAGE;
case 64:
                var1['attachmentType'] = var14;
                var1['id'] = var11;
                var11 = _closure2_slot4;
                var11 = !var11;
                var1['isAnimated'] = var11;
                var14 = var12 == var13;
                var11 = undefined;
                if(var14) { _fun0002_ip = 65; continue _fun0002 }
case 66:
                var11 = var13.uploaderId;
case 65:
                var1['uploaderId'] = var11;
                var14 = var12 == var13;
                var11 = undefined;
                if(var14) { _fun0002_ip = 67; continue _fun0002 }
case 68:
                var11 = var13.uploaderItemId;
case 67:
                var1['uploaderItemId'] = var11;
                var11 = _closure2_slot6;
                var12 = var12 != var11;
                var11 = undefined;
                if(!var12) { _fun0002_ip = 69; continue _fun0002 }
case 70:
                var11 = _closure2_slot6;
case 69:
                var1['backgroundColor'] = var11;
                var1['placeholder'] = var10;
                var1['placeholderVersion'] = var9;
                var9 = 1000;
                var1['mediaViewerBufferForPlaybackMs'] = var9;
                var1['mediaViewerBufferForPlaybackAfterRebufferMs'] = var9;
                var9 = 20000;
                var1['mediaViewerMinBufferMs'] = var9;
                var1['mediaViewerMaxBufferMs'] = var9;
                var9 = false;
                var1['mediaViewerEnableDecoderFallback'] = var9;
                var9 = true;
                var1['mediaViewerEnableAsyncBufferQueueing'] = var9;
                var1['srcIsAnimated'] = var8;
                var1['inlinePlaybackDisabled'] = var4;
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
                var34 = var4.bind(var5)(var3);
                var35 = var1;
                var3 = copyDataProperties(var35, var34);
                var35 = var1;
                var34 = var2;
                var2 = copyDataProperties(var35, var34);
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
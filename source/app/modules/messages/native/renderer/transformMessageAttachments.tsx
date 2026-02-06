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
    var4 = 11;
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
                var26 = var7.size;
                var19 = var7.width;
                var24 = var7.height;
                var22 = var7.description;
                var21 = var7.duration_secs;
                var20 = var7.waveform;
                var12 = var7.id;
                var11 = var7.placeholder;
                var10 = var7.placeholder_version;
                var1 = var7.flags;
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 3;
                var13 = var9[var2];
                var5 = undefined;
                var14 = var4.bind(var5)(var13);
                var13 = var14.isImageFile;
                var18 = var13.bind(var14)(var6);
                var13 = var9[var2];
                var14 = var4.bind(var5)(var13);
                var13 = var14.isAudioFile;
                var15 = var13.bind(var14)(var6);
                var13 = var9[var2];
                var14 = var4.bind(var5)(var13);
                var13 = var14.isVideoFile;
                var17 = var13.bind(var14)(var6);
                var2 = var9[var2];
                var4 = var4.bind(var5)(var2);
                var2 = var4.isWebPlayerVideoFile;
                var4 = var2.bind(var4)(var6);
                var25 = var18;
                if(var25) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var25 = var17;
case 4:
                var2 = _closure2_slot0;
                var13 = null;
                var2 = var13 != var2;
                if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var9 = _closure2_slot0;
                var9 = var9.length;
                var2 = var8 < var9;
case 6:
                var14 = undefined;
                if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var2 = _closure2_slot0;
                var14 = var2[var8];
case 8:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var29 = 2;
                var2 = var2[var29];
                var16 = var8.bind(var5)(var2);
                var9 = var16.hasFlag;
                var2 = var13 != var1;
                var28 = 0;
                var8 = 0;
                if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var8 = var1;
case 10:
                var2 = _closure1_slot4;
                var2 = var2.IS_ANIMATED;
                var8 = var9.bind(var16)(var8, var2);
                if(!var18) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                if(!(var13 != var19)) { _fun0002_ip = 12; continue _fun0002 }
case 14:
                if(!(var13 == var24)) { _fun0002_ip = 15; continue _fun0002 }
case 12:
                var2 = var17;
                if(!var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var9 = _closure2_slot1;
                if(var9) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var9 = var13 != var14;
case 18:
                var2 = var9;
case 16:
                var23 = undefined;
                var27 = var31;
                if(!var2) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var2 = var31;
                if(!(var13 != var30)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                var9 = '?format=webp';
                var2 = var30 + var9;
case 22:
                var9 = var31;
                if(!(var13 != var30)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                var16 = '';
                var9 = var31;
                if(!(var16 !== var30)) { _fun0002_ip = 24; continue _fun0002 }
case 26:
                var9 = var30;
case 24:
                var23 = var9;
                var27 = var2;
                _fun0002_ip = 20; continue _fun0002;
case 15:
                var9 = _closure1_slot1;
                var16 = _closure1_slot2;
                var2 = 4;
                var2 = var16[var2];
                var16 = var9.bind(var5)(var2);
                var9 = var16.getImageSrc;
                var2 = _closure2_slot2;
                var32 = !var2;
                var36 = var16;
                var35 = var30;
                var34 = var19;
                var33 = var24;
                var27 = var36[var9](var35, var34, var33, var32, var31);
                var23 = undefined;
case 20:
                var9 = _closure1_slot0;
                var16 = _closure1_slot2;
                var2 = 5;
                var2 = var16[var2];
                var9 = var9.bind(var5)(var2);
                var2 = var9.isAndroid;
                var16 = var2.bind(var9)();
                var2 = 'default';
                var9 = var2;
                if(!var16) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                var9 = var2;
                if(!var17) { _fun0002_ip = 27; continue _fun0002 }
case 29:
                var16 = _closure1_slot0;
                var30 = _closure1_slot2;
                var2 = 6;
                var2 = var30[var2];
                var2 = var16.bind(var5)(var2);
                var30 = var2.AndroidExoPlayerHttpEngineExperiment;
                var16 = var30.getConfig;
                var2 = {};
                var31 = 'transformMessageAttachments';
                var2['location'] = var31;
                var2 = var16.bind(var30)(var2);
                var9 = var2.httpEngine;
case 27:
                var16 = var19;
                if(!(var13 != var14)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                var2 = var14.width;
                var16 = var19;
                if(!(var2 > var28)) { _fun0002_ip = 30; continue _fun0002 }
case 32:
                var16 = var14.width;
case 30:
                var2 = var24;
                if(!(var13 != var14)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                var19 = var14.height;
                var2 = var24;
                if(!(var19 > var28)) { _fun0002_ip = 33; continue _fun0002 }
case 35:
                var2 = var14.height;
case 33:
                var24 = _closure2_slot1;
                var19 = 0;
                if(!var24) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                var19 = 0;
                if(!var25) { _fun0002_ip = 36; continue _fun0002 }
case 38:
                var24 = var13 != var16;
                var19 = 0;
                if(!var24) { _fun0002_ip = 36; continue _fun0002 }
case 39:
                var19 = var16;
case 36:
                var24 = _closure2_slot1;
                var16 = 0;
                if(!var24) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                var16 = 0;
                if(!var25) { _fun0002_ip = 40; continue _fun0002 }
case 42:
                var24 = var13 != var2;
                var16 = 0;
                if(!var24) { _fun0002_ip = 40; continue _fun0002 }
case 43:
                var16 = var2;
case 40:
                var24 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var29];
                var24 = var24.bind(var5)(var2);
                var2 = var24.hasFlag;
                var29 = var13 != var1;
                var28 = 0;
                if(!var29) { _fun0002_ip = 44; continue _fun0002 }
case 45:
                var28 = var1;
case 44:
                var1 = _closure1_slot4;
                var1 = var1.IS_CLIP;
                var1 = var2.bind(var24)(var28, var1);
                var2 = undefined;
                if(!var1) { _fun0002_ip = 46; continue _fun0002 }
case 47:
                var1 = {};
                var30 = _closure1_slot0;
                var31 = _closure1_slot2;
                var24 = 7;
                var28 = var31[var24];
                var28 = var30.bind(var5)(var28);
                var29 = var28.intl;
                var28 = var29.string;
                var24 = var31[var24];
                var24 = var30.bind(var5)(var24);
                var24 = var24.t;
                var24 = var24.gESDiU;
                var24 = var28.bind(var29)(var24);
                var1['attachmentTagText'] = var24;
                var24 = 'clip';
                var1['attachmentTagIconType'] = var24;
                var24 = _closure2_slot9;
                var28 = var24.clipTagBackgroundColor;
                var1['attachmentTagBackgroundColor'] = var28;
                var24 = var24.clipTagTextColor;
                var1['attachmentTagTextColor'] = var24;
                var2 = var1;
case 46:
                var1 = {};
                var24 = var27;
                if(!(var13 != var14)) { _fun0002_ip = 48; continue _fun0002 }
case 49:
                var28 = var14.localUri;
                var24 = var27;
                if(!(var13 != var28)) { _fun0002_ip = 48; continue _fun0002 }
case 50:
                var24 = var27;
                if(!var25) { _fun0002_ip = 48; continue _fun0002 }
case 51:
                var25 = _closure2_slot1;
                var24 = var27;
                if(!var25) { _fun0002_ip = 48; continue _fun0002 }
case 52:
                var24 = var14.localUri;
case 48:
                var1['url'] = var24;
                var1['videoUrl'] = var23;
                var25 = _closure1_slot1;
                var23 = _closure1_slot2;
                var24 = 8;
                var24 = var23[var24];
                var24 = var25.bind(var5)(var24);
                var24 = var24.bind(var5)(var7);
                var1['filename'] = var24;
                var24 = 9;
                var24 = var23[var24];
                var25 = var25.bind(var5)(var24);
                var24 = var25.filesize;
                var24 = var24.bind(var25)(var26);
                var1['size'] = var24;
                var1['description'] = var22;
                var26 = _closure1_slot0;
                var22 = 7;
                var24 = var23[var22];
                var24 = var26.bind(var5)(var24);
                var27 = var24.intl;
                var25 = var27.string;
                var24 = var23[var22];
                var24 = var26.bind(var5)(var24);
                var24 = var24.t;
                var24 = var24.jCV1Tz;
                var25 = var25.bind(var27)(var24);
                var24 = var25.toUpperCase;
                var24 = var24.bind(var25)();
                var1['alt'] = var24;
                var24 = var23[var22];
                var24 = var26.bind(var5)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var23 = var23[var22];
                var23 = var26.bind(var5)(var23);
                var23 = var23.t;
                var23 = var23.fSiQ3A;
                var23 = var24.bind(var25)(var23);
                var1['altTextHint'] = var23;
                var23 = _closure2_slot3;
                var1['showDescription'] = var23;
                var1['durationSecs'] = var21;
                var1['waveform'] = var20;
                var1['width'] = var19;
                var1['height'] = var16;
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var20 = var16[var22];
                var20 = var19.bind(var5)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var16 = var16[var22];
                var16 = var19.bind(var5)(var16);
                var19 = var16.t;
                if(var17) { _fun0002_ip = 53; continue _fun0002 }
case 54:
                var16 = var19.IPzNKE;
                var16 = var20.bind(var21)(var16);
                _fun0002_ip = 55; continue _fun0002;
case 53:
                var19 = var19.BEWw/7;
                var16 = var20.bind(var21)(var19);
case 55:
                var1['hint'] = var16;
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var20 = var16[var22];
                var20 = var19.bind(var5)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var16 = var16[var22];
                var16 = var19.bind(var5)(var16);
                var19 = var16.t;
                if(var17) { _fun0002_ip = 56; continue _fun0002 }
case 57:
                var16 = var19.fKyfca;
                var16 = var20.bind(var21)(var16);
                _fun0002_ip = 58; continue _fun0002;
case 56:
                var19 = var19./SCpvi;
                var16 = var20.bind(var21)(var19);
case 58:
                var1['role'] = var16;
                var16 = _closure1_slot3;
                if(var18) { _fun0002_ip = 59; continue _fun0002 }
case 60:
                if(var17) { _fun0002_ip = 61; continue _fun0002 }
case 62:
                if(var15) { _fun0002_ip = 63; continue _fun0002 }
case 64:
                var15 = var16.OTHER;
                _fun0002_ip = 65; continue _fun0002;
case 63:
                var15 = var16.AUDIO;
case 65:
                _fun0002_ip = 66; continue _fun0002;
case 61:
                var15 = var16.VIDEO;
case 66:
                _fun0002_ip = 67; continue _fun0002;
case 59:
                var15 = var16.IMAGE;
case 67:
                var1['attachmentType'] = var15;
                var1['id'] = var12;
                var12 = _closure2_slot4;
                var12 = !var12;
                var1['isAnimated'] = var12;
                var15 = var13 == var14;
                var12 = undefined;
                if(var15) { _fun0002_ip = 68; continue _fun0002 }
case 69:
                var12 = var14.uploaderId;
case 68:
                var1['uploaderId'] = var12;
                var15 = var13 == var14;
                var12 = undefined;
                if(var15) { _fun0002_ip = 70; continue _fun0002 }
case 71:
                var12 = var14.uploaderItemId;
case 70:
                var1['uploaderItemId'] = var12;
                var12 = _closure2_slot6;
                var13 = var13 != var12;
                var12 = undefined;
                if(!var13) { _fun0002_ip = 72; continue _fun0002 }
case 73:
                var12 = _closure2_slot6;
case 72:
                var1['backgroundColor'] = var12;
                var1['placeholder'] = var11;
                var1['placeholderVersion'] = var10;
                var10 = 1000;
                var1['mediaViewerBufferForPlaybackMs'] = var10;
                var1['mediaViewerBufferForPlaybackAfterRebufferMs'] = var10;
                var10 = 20000;
                var1['mediaViewerMinBufferMs'] = var10;
                var1['mediaViewerMaxBufferMs'] = var10;
                var10 = false;
                var1['mediaViewerEnableDecoderFallback'] = var10;
                var10 = true;
                var1['mediaViewerEnableAsyncBufferQueueing'] = var10;
                var1['mediaViewerHttpEngine'] = var9;
                var1['srcIsAnimated'] = var8;
                var1['inlinePlaybackDisabled'] = var4;
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 10;
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
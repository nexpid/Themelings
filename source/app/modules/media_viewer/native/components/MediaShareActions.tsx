// app/modules/media_viewer/native/components/MediaShareActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function useMediaShareActions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = var2.source;
            var _closure2_slot0 = var5;
            var16 = var2.disableDownload;
            var _closure2_slot1 = var16;
            var8 = var2.shareable;
            var _closure2_slot2 = var8;
            var6 = undefined;
            var _closure2_slot13 = var6;
            var _closure2_slot14 = var6;
            var12 = var5.channelId;
            var _closure2_slot3 = var12;
            var3 = var5.messageId;
            var _closure2_slot4 = var3;
            var4 = _closure1_slot0;
            var17 = _closure1_slot2;
            var7 = 8;
            var7 = var17[var7];
            var11 = var4.bind(var6)(var7);
            var10 = var11.useStateFromStores;
            var7 = _closure1_slot6;
            var9 = new Array(3);
            var9[0] = var7;
            var7 = _closure1_slot4;
            var9[1] = var7;
            var7 = _closure1_slot7;
            var9[2] = var7;
            var7 = new Array(2);
            var7[0] = var12;
            var7[1] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = null;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure2_slot4;
                    var2 = var5 == var2;
                    var1 = null;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var8 = _closure1_slot6;
                    var7 = var8.getMessage;
                    var6 = _closure2_slot3;
                    var2 = _closure2_slot4;
                    var2 = var7.bind(var8)(var6, var2);
                    if(!(var5 == var2)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var8 = _closure1_slot7;
                    var7 = var8.getMessage;
                    var6 = _closure2_slot4;
                    var2 = var7.bind(var8)(var6);
case 5:
                    if(!(var5 == var2)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var5 = _closure1_slot4;
                    var4 = var5.getMessage;
                    var3 = _closure2_slot4;
                    var2 = var4.bind(var5)(var3);
case 7:
                    var1 = var2;
case 2:
                    return var1;
                }
            };
            var7 = var10.bind(var11)(var9, var3, var7);
            var _closure2_slot5 = var7;
            var3 = 9;
            var3 = var17[var3];
            var9 = var4.bind(var6)(var3);
            var3 = var9.shouldAgeVerifyForExplicitMedia;
            var11 = var3.bind(var9)();
            var3 = 10;
            var3 = var17[var3];
            var10 = var4.bind(var6)(var3);
            var9 = var10.getAttachmentObscurityProps;
            var3 = {'attachment': null, 'shouldObscureSpoiler': true, 'enabledContentHarmTypeFlags': 0};
            var3['attachment'] = var5;
            var3['shouldAgeVerify'] = var11;
            var3 = var9.bind(var10)(var3);
            var9 = var3.obscure;
            var _closure2_slot6 = var9;
            var12 = _closure1_slot3;
            var11 = var12.useCallback;
            var10 = new Array(1);
            var10[0] = var5;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.hideActionSheet;
                    var2 = var2.bind(var4)();
                    var4 = _closure2_slot0;
                    var4 = var4.videoURI;
                    var5 = null;
                    if(!(var5 == var4)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var4 = _closure2_slot0;
                    var4 = var4.sourceURI;
                    if(!(var5 != var4)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 13;
                    var4 = var8[var4];
                    var10 = var7.bind(var1)(var4);
                    var9 = var10.urlMatchesFileExtension;
                    var4 = _closure2_slot0;
                    var6 = var4.sourceURI;
                    var5 = _closure1_slot9;
                    var5 = var9.bind(var10)(var6, var5);
                    var6 = 12;
                    var6 = var8[var6];
                    var8 = var7.bind(var1)(var6);
                    var7 = var8.downloadMediaAssetWithContentType;
                    var6 = var4.sourceURI;
                    var4 = _closure1_slot10;
                    if(var5) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var5 = var4.IMAGE;
                    _fun0003_ip = 15; continue _fun0003;
case 13:
                    var5 = var4.GIF;
case 15:
                    var4 = _closure2_slot0;
                    var4 = var4.contentType;
                    var4 = var7.bind(var8)(var6, var5, var4);
                    _fun0003_ip = 11; continue _fun0003;
case 9:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 12;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.downloadMediaAssetWithContentType;
                    var2 = _closure2_slot0;
                    var4 = var2.videoURI;
                    var3 = _closure1_slot10;
                    var3 = var3.VIDEO;
                    var2 = var2.contentType;
                    var2 = var5.bind(var6)(var4, var3, var2);
case 11:
                    return var1;
                }
            };
            var11 = var11.bind(var12)(var3, var10);
            var _closure2_slot7 = var11;
            var13 = _closure1_slot3;
            var12 = var13.useCallback;
            var10 = new Array(1);
            var10[0] = var5;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 11;
                    var3 = var5[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.hideActionSheet;
                    var3 = var3.bind(var4)();
                    var4 = _closure1_slot0;
                    var3 = 14;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.showShareActionSheet;
                    var4 = {};
                    var3 = _closure2_slot0;
                    var3 = var3.videoURI;
                    var8 = null;
                    if(!(var8 == var3)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var9 = _closure2_slot0;
                    var3 = var9.sourceURI;
case 16:
                    if(!(var8 == var3)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var7 = _closure2_slot0;
                    var3 = var7.uri;
case 18:
                    var4['url'] = var3;
                    var3 = _closure1_slot8;
                    var3 = var3.MEDIA_VIEWER;
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var3 = var2.MediaViewerAnalytics;
                    var2 = var3.trackMediaViewerShareButtonTapped;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var10 = var12.bind(var13)(var3, var10);
            var _closure2_slot8 = var10;
            var14 = _closure1_slot3;
            var13 = var14.useCallback;
            var12 = new Array(1);
            var12[0] = var5;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.hideActionSheet;
                    var3 = var3.bind(var4)();
                    var3 = _closure2_slot0;
                    var4 = var3.sourceURI;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 16;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleClick;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var5 = var5.sourceURI;
                    var2['href'] = var5;
                    var5 = function onConfirm() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openURL;
                        var2 = _closure2_slot0;
                        var2 = var2.sourceURI;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onConfirm'] = var5;
                    var2 = var3.bind(var4)(var2);
case 20:
                    return var1;
                }
            };
            var13 = var13.bind(var14)(var3, var12);
            var _closure2_slot9 = var13;
            var15 = _closure1_slot3;
            var14 = var15.useCallback;
            var12 = new Array(2);
            var12[0] = var7;
            var12[1] = var5;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.hideActionSheet;
                    var3 = var3.bind(var4)();
                    var4 = _closure2_slot5;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                    var4 = _closure2_slot0;
                    var6 = var4.accessoryType;
                    var4 = 'embed';
                    if(!(var4 === var6)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 18;
                    var4 = var7[var4];
                    var7 = var6.bind(var1)(var4);
                    var6 = var7.openForwardModal;
                    var4 = {};
                    var8 = _closure2_slot5;
                    var4['message'] = var8;
                    var8 = 'media-viewer';
                    var4['source'] = var8;
                    var4['initialSelectedDestinations'] = var1;
                    var8 = {};
                    var9 = _closure2_slot0;
                    var10 = var9.mediaIndex;
                    var9 = new Array(1);
                    var9[0] = var10;
                    var8['onlyEmbedIndices'] = var9;
                    var4['forwardOptions'] = var8;
                    var4 = var6.bind(var7)(var4);
                    _fun0006_ip = 22; continue _fun0006;
case 24:
                    var4 = _closure2_slot0;
                    var7 = var4.attachmentId;
                    if(!(var3 != var7)) { _fun0006_ip = 22; continue _fun0006 }
case 26:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 18;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openForwardModal;
                    var2 = {};
                    var5 = _closure2_slot5;
                    var2['message'] = var5;
                    var5 = 'media-viewer';
                    var2['source'] = var5;
                    var2['initialSelectedDestinations'] = var1;
                    var5 = {};
                    var6 = new Array(1);
                    var6[0] = var7;
                    var5['onlyAttachmentIds'] = var6;
                    var2['forwardOptions'] = var5;
                    var2 = var3.bind(var4)(var2);
case 22:
                    return var1;
                }
            };
            var15 = var14.bind(var15)(var3, var12);
            var _closure2_slot10 = var15;
            var18 = _closure1_slot3;
            var14 = var18.useCallback;
            var12 = new Array(1);
            var12[0] = var5;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.hideActionSheet;
                    var2 = var2.bind(var4)();
                    var6 = _closure1_slot5;
                    var5 = var6.getChannel;
                    var4 = _closure2_slot0;
                    var4 = var4.channelId;
                    var4 = var5.bind(var6)(var4);
                    var6 = null;
                    var4 = var6 != var4;
                    if(!var4) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                    var5 = _closure2_slot0;
                    var5 = var5.channelId;
                    var4 = var6 != var5;
case 27:
                    if(!var4) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                    var5 = _closure2_slot0;
                    var5 = var5.messageId;
                    var4 = var6 != var5;
case 29:
                    if(!var4) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 19;
                    var3 = var9[var3];
                    var6 = var8.bind(var1)(var3);
                    var5 = var6.transitionToMessage;
                    var2 = _closure2_slot0;
                    var4 = var2.channelId;
                    var3 = var2.messageId;
                    var2 = {};
                    var7 = 20;
                    var7 = var9[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.getChatLayout;
                    var7 = var7.bind(var8)();
                    var7 = var7.isChatLockedOpen;
                    var7 = !var7;
                    if(var7) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                    var7 = undefined;
case 33:
                    var2['navigationReplace'] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
case 31:
                    return var1;
                }
            };
            var14 = var14.bind(var18)(var3, var12);
            var _closure2_slot11 = var14;
            var19 = _closure1_slot3;
            var18 = var19.useCallback;
            var12 = new Array(1);
            var12[0] = var5;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var4 = 11;
                    var3 = var1[var4];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.hideActionSheet;
                    var3 = var3.bind(var5)();
                    var3 = _closure2_slot0;
                    var7 = var3.attachmentId;
                    var6 = null;
                    var3 = var6 != var7;
                    if(!var3) { _fun0008_ip = 28; continue _fun0008 }
case 10:
                    var5 = _closure2_slot0;
                    var5 = var5.channelId;
                    var3 = var6 != var5;
case 28:
                    if(!var3) { _fun0008_ip = 30; continue _fun0008 }
case 35:
                    var5 = _closure2_slot0;
                    var5 = var5.messageId;
                    var3 = var6 != var5;
case 30:
                    if(!var3) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var4 = var3[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var9 = _closure1_slot0;
                    var4 = 22;
                    var4 = var3[var4];
                    var9 = var9.bind(var1)(var4);
                    var4 = 21;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var9.bind(var1)(var4, var3);
                    var3 = _closure1_slot11;
                    var2 = {};
                    var8 = _closure2_slot0;
                    var9 = var8.messageId;
                    var2['messageId'] = var9;
                    var8 = var8.channelId;
                    var2['channelId'] = var8;
                    var2['attachmentId'] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
case 36:
                    return var1;
                }
            };
            var12 = var18.bind(var19)(var3, var12);
            var _closure2_slot12 = var12;
            var3 = 23;
            var3 = var17[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.useCanForwardMessage;
            var7 = var3.bind(var4)(var7);
            if(!var7) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var4 = var5.attachmentId;
            var3 = null;
            var3 = var3 != var4;
            if(var3) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var17 = var5.accessoryType;
            var4 = 'embed';
            var3 = var4 === var17;
case 40:
            var7 = var3;
case 38:
            _closure2_slot13 = var7;
            var4 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = 12;
            var3 = var17[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getVideoSourceType;
            var6 = var3.bind(var4)(var5);
            _closure2_slot14 = var6;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(13);
            var2[0] = var16;
            var2[1] = var15;
            var2[2] = var14;
            var2[3] = var13;
            var2[4] = var12;
            var2[5] = var11;
            var2[6] = var10;
            var2[7] = var9;
            var2[8] = var8;
            var2[9] = var7;
            var2[10] = var6;
            var6 = var5.channelId;
            var2[11] = var6;
            var5 = var5.messageId;
            var2[12] = var5;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = new Array(0);
                    var3 = _closure2_slot1;
                    var2 = true;
                    var2 = var2 !== var3;
                    if(!var2) { _fun0009_ip = 42; continue _fun0009 }
case 43:
                    var5 = _closure2_slot14;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 12;
                    var6 = var6[var3];
                    var3 = undefined;
                    var3 = var7.bind(var3)(var6);
                    var3 = var3.VideoSourceType;
                    var3 = var3.WEB_FILE_IFRAME;
                    var2 = var5 !== var3;
case 42:
                    if(!var2) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                    var3 = var1.push;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 24;
                    var5 = var10[var5];
                    var8 = undefined;
                    var5 = var9.bind(var8)(var5);
                    var5 = var5.DownloadIcon;
                    var2['IconComponent'] = var5;
                    var5 = 25;
                    var6 = var10[var5];
                    var6 = var9.bind(var8)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var10[var5];
                    var5 = var9.bind(var8)(var5);
                    var5 = var5.t;
                    var5 = var5.R3BPH+;
                    var5 = var6.bind(var7)(var5);
                    var2['label'] = var5;
                    var5 = _closure2_slot7;
                    var2['action'] = var5;
                    var2 = var3.bind(var1)(var2);
case 44:
                    var2 = _closure2_slot13;
                    if(!var2) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                    var3 = var1.push;
                    var2 = {};
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 26;
                    var6 = var10[var6];
                    var9 = undefined;
                    var6 = var7.bind(var9)(var6);
                    var2['IconComponent'] = var6;
                    var8 = _closure1_slot0;
                    var5 = 25;
                    var6 = var10[var5];
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var10[var5];
                    var5 = var8.bind(var9)(var5);
                    var5 = var5.t;
                    var5 = var5.I3ltXO;
                    var5 = var6.bind(var7)(var5);
                    var2['label'] = var5;
                    var5 = _closure2_slot10;
                    var2['action'] = var5;
                    var2 = var3.bind(var1)(var2);
case 46:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                    var3 = var1.push;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 27;
                    var5 = var10[var5];
                    var8 = undefined;
                    var5 = var9.bind(var8)(var5);
                    var5 = var5.ShareIcon;
                    var2['IconComponent'] = var5;
                    var5 = 25;
                    var6 = var10[var5];
                    var6 = var9.bind(var8)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var10[var5];
                    var5 = var9.bind(var8)(var5);
                    var5 = var5.t;
                    var5 = var5.RDE0Sc;
                    var5 = var6.bind(var7)(var5);
                    var2['label'] = var5;
                    var5 = _closure2_slot8;
                    var2['action'] = var5;
                    var2 = var3.bind(var1)(var2);
case 48:
                    var3 = var1.push;
                    var2 = {};
                    var11 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var7 = 28;
                    var7 = var6[var7];
                    var9 = undefined;
                    var7 = var11.bind(var9)(var7);
                    var7 = var7.WindowLaunchIcon;
                    var2['IconComponent'] = var7;
                    var10 = 25;
                    var7 = var6[var10];
                    var7 = var11.bind(var9)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var6[var10];
                    var6 = var11.bind(var9)(var6);
                    var6 = var6.t;
                    var6 = var6.q5jLJB;
                    var6 = var7.bind(var8)(var6);
                    var2['label'] = var6;
                    var6 = _closure2_slot9;
                    var2['action'] = var6;
                    var2 = var3.bind(var1)(var2);
                    var2 = _closure2_slot0;
                    var2 = var2.channelId;
                    var6 = null;
                    var2 = var6 != var2;
                    if(!var2) { _fun0009_ip = 50; continue _fun0009 }
case 51:
                    var3 = _closure2_slot0;
                    var3 = var3.messageId;
                    var2 = var6 != var3;
case 50:
                    if(!var2) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                    var3 = var1.push;
                    var2 = {};
                    var11 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var7 = 29;
                    var7 = var6[var7];
                    var7 = var11.bind(var9)(var7);
                    var7 = var7.ChatArrowRightIcon;
                    var2['IconComponent'] = var7;
                    var7 = var6[var10];
                    var7 = var11.bind(var9)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var6[var10];
                    var6 = var11.bind(var9)(var6);
                    var6 = var6.t;
                    var6 = var6["+TSRGD"];
                    var6 = var7.bind(var8)(var6);
                    var2['label'] = var6;
                    var6 = _closure2_slot11;
                    var2['action'] = var6;
                    var2 = var3.bind(var1)(var2);
case 52:
                    var2 = _closure2_slot6;
                    if(!var2) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                    var3 = var1.push;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var6 = 30;
                    var6 = var5[var6];
                    var6 = var8.bind(var9)(var6);
                    var6 = var6.ImageWarningIcon;
                    var2['IconComponent'] = var6;
                    var6 = var5[var10];
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var5[var10];
                    var5 = var8.bind(var9)(var5);
                    var5 = var5.t;
                    var5 = var5.ZH7P2h;
                    var5 = var6.bind(var7)(var5);
                    var2['label'] = var5;
                    var4 = _closure2_slot12;
                    var2['action'] = var4;
                    var2 = var3.bind(var1)(var2);
case 54:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot13 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
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
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.AnalyticsSections;
    var _closure1_slot8 = var8;
    var8 = var5.GIF_RE_IOS;
    var _closure1_slot9 = var8;
    var5 = var5.MediaType;
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
    var _closure1_slot11 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot12 = var5;
    var5 = 33;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/media_viewer/native/components/MediaShareActions.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function MediaShareActionSheet(arg1) {
        var1 = arg1;
        var6 = var1.source;
        var5 = var1.disableDownload;
        var4 = var1.shareable;
        var3 = _closure1_slot13;
        var2 = {};
        var2['source'] = var6;
        var2['disableDownload'] = var5;
        var2['shareable'] = var4;
        var4 = undefined;
        var9 = var3.bind(var4)(var2);
        var3 = _closure1_slot12;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 31;
        var1 = var7[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.ActionSheet;
        var1 = {};
        var5 = 32;
        var5 = var7[var5];
        var5 = var6.bind(var4)(var5);
        var5 = var5.ActionSheetRow;
        var6 = var5.Group;
        var5 = {};
        var7 = true;
        var5['hasIcons'] = var7;
        var8 = var9.map;
        var7 = function(arg1, arg2) {
            var1 = arg1;
            var5 = _closure1_slot12;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 32;
            var2 = var8[var6];
            var4 = undefined;
            var2 = var7.bind(var4)(var2);
            var3 = var2.ActionSheetRow;
            var2 = {};
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.ActionSheetRow;
            var7 = var6.Icon;
            var6 = {};
            var8 = var1.IconComponent;
            var6['IconComponent'] = var8;
            var6 = var5.bind(var4)(var7, var6);
            var2['icon'] = var6;
            var6 = var1.action;
            var2['onPress'] = var6;
            var1 = var1.label;
            var2['label'] = var1;
            var1 = arg2;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var7 = var8.bind(var9)(var7);
        var5['children'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['useMediaShareActions'] = var2;
    return var1;
})();
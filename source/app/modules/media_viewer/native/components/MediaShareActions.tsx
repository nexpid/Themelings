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
 0:
            var2 = arg1;
            var4 = var2.source;
            var _closure2_slot0 = var4;
            var14 = var2.disableDownload;
            var _closure2_slot1 = var14;
            var6 = var2.shareable;
            var _closure2_slot2 = var6;
            var16 = undefined;
            var _closure2_slot13 = var16;
            var11 = var4.channelId;
            var _closure2_slot3 = var11;
            var3 = var4.messageId;
            var _closure2_slot4 = var3;
            var5 = _closure1_slot0;
            var17 = _closure1_slot2;
            var7 = 8;
            var7 = var17[var7];
            var10 = var5.bind(var16)(var7);
            var9 = var10.useStateFromStores;
            var7 = _closure1_slot6;
            var8 = new Array(3);
            var8[0] = var7;
            var7 = _closure1_slot4;
            var8[1] = var7;
            var7 = _closure1_slot7;
            var8[2] = var7;
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var6 = _closure1_slot6;
                    var5 = var6.getMessage;
                    var4 = _closure2_slot3;
                    var1 = _closure2_slot4;
                    var1 = var5.bind(var6)(var4, var1);
                    var4 = null;
                    if(!(var4 == var1)) { _fun0002_ip = 55; continue _fun0002 }
 36:
                    var7 = _closure1_slot7;
                    var6 = var7.getMessage;
                    var5 = _closure2_slot4;
                    var1 = var6.bind(var7)(var5);
 55:
                    if(!(var4 == var1)) { _fun0002_ip = 78; continue _fun0002 }
 59:
                    var4 = _closure1_slot4;
                    var3 = var4.getMessage;
                    var2 = _closure2_slot4;
                    var1 = var3.bind(var4)(var2);
 78:
                    return var1;
                }
            };
            var15 = var9.bind(var10)(var8, var3, var7);
            var _closure2_slot5 = var15;
            var3 = 9;
            var3 = var17[var3];
            var7 = var5.bind(var16)(var3);
            var3 = var7.shouldAgeVerifyForExplicitMedia;
            var9 = var3.bind(var7)();
            var3 = 10;
            var3 = var17[var3];
            var8 = var5.bind(var16)(var3);
            var7 = var8.getAttachmentObscurityProps;
            var3 = {'attachment': null, 'shouldObscureSpoiler': true, 'enabledContentHarmTypeFlags': 0};
            var3['attachment'] = var4;
            var3['shouldAgeVerify'] = var9;
            var3 = var7.bind(var8)(var3);
            var7 = var3.obscure;
            var _closure2_slot6 = var7;
            var10 = _closure1_slot3;
            var9 = var10.useCallback;
            var8 = new Array(1);
            var8[0] = var4;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
                    if(!(var5 == var4)) { _fun0003_ip = 184; continue _fun0003 }
 57:
                    var4 = _closure2_slot0;
                    var4 = var4.sourceURI;
                    if(!(var5 != var4)) { _fun0003_ip = 243; continue _fun0003 }
 74:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 13;
                    var4 = var8[var4];
                    var10 = var7.bind(var1)(var4);
                    var9 = var10.urlMatchesFileExtension;
                    var4 = _closure2_slot0;
                    var6 = var4.sourceURI;
                    var5 = _closure1_slot8;
                    var5 = var9.bind(var10)(var6, var5);
                    var6 = 12;
                    var6 = var8[var6];
                    var8 = var7.bind(var1)(var6);
                    var7 = var8.downloadMediaAssetWithContentType;
                    var6 = var4.sourceURI;
                    var4 = _closure1_slot9;
                    if(var5) { _fun0003_ip = 159; continue _fun0003 }
 151:
                    var5 = var4.IMAGE;
                    _fun0003_ip = 165; continue _fun0003;
 159:
                    var5 = var4.GIF;
 165:
                    var4 = _closure2_slot0;
                    var4 = var4.contentType;
                    var4 = var7.bind(var8)(var6, var5, var4);
                    _fun0003_ip = 243; continue _fun0003;
 184:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 12;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.downloadMediaAssetWithContentType;
                    var2 = _closure2_slot0;
                    var4 = var2.videoURI;
                    var3 = _closure1_slot9;
                    var3 = var3.VIDEO;
                    var2 = var2.contentType;
                    var2 = var5.bind(var6)(var4, var3, var2);
 243:
                    return var1;
                }
            };
            var9 = var9.bind(var10)(var3, var8);
            var _closure2_slot7 = var9;
            var11 = _closure1_slot3;
            var10 = var11.useCallback;
            var8 = new Array(1);
            var8[0] = var4;
            var3 = function() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 11;
                var2 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var2 = var5.hideActionSheet;
                var2 = var2.bind(var5)();
                var2 = 14;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = _closure2_slot0;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var10.bind(var11)(var3, var8);
            var _closure2_slot8 = var8;
            var12 = _closure1_slot3;
            var11 = var12.useCallback;
            var10 = new Array(1);
            var10[0] = var4;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
                    if(!(var3 != var4)) { _fun0004_ip = 116; continue _fun0004 }
 54:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 15;
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
                        var1 = 16;
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
 116:
                    return var1;
                }
            };
            var11 = var11.bind(var12)(var3, var10);
            var _closure2_slot9 = var11;
            var13 = _closure1_slot3;
            var12 = var13.useCallback;
            var10 = new Array(2);
            var10[0] = var15;
            var10[1] = var4;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
                    if(!(var3 != var4)) { _fun0005_ip = 247; continue _fun0005 }
 51:
                    var4 = _closure2_slot0;
                    var6 = var4.accessoryType;
                    var4 = 'embed';
                    if(!(var4 === var6)) { _fun0005_ip = 157; continue _fun0005 }
 69:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 17;
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
                    _fun0005_ip = 247; continue _fun0005;
 157:
                    var4 = _closure2_slot0;
                    var7 = var4.attachmentId;
                    if(!(var3 != var7)) { _fun0005_ip = 247; continue _fun0005 }
 171:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 17;
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
 247:
                    return var1;
                }
            };
            var13 = var12.bind(var13)(var3, var10);
            var _closure2_slot10 = var13;
            var18 = _closure1_slot3;
            var12 = var18.useCallback;
            var10 = new Array(1);
            var10[0] = var4;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
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
                    var5 = var5.bind(var6)(var4);
                    var4 = null;
                    if(!(var4 != var5)) { _fun0006_ip = 157; continue _fun0006 }
 67:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 18;
                    var3 = var9[var3];
                    var6 = var8.bind(var1)(var3);
                    var5 = var6.transitionToMessage;
                    var2 = _closure2_slot0;
                    var4 = var2.channelId;
                    var3 = var2.messageId;
                    var2 = {};
                    var7 = 19;
                    var7 = var9[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.getChatLayout;
                    var7 = var7.bind(var8)();
                    var7 = var7.isChatLockedOpen;
                    var7 = !var7;
                    if(var7) { _fun0006_ip = 145; continue _fun0006 }
 143:
                    var7 = undefined;
 145:
                    var2['navigationReplace'] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
 157:
                    return var1;
                }
            };
            var12 = var12.bind(var18)(var3, var10);
            var _closure2_slot11 = var12;
            var19 = _closure1_slot3;
            var18 = var19.useCallback;
            var10 = new Array(1);
            var10[0] = var4;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
                    var3 = null;
                    if(!(var3 != var7)) { _fun0007_ip = 151; continue _fun0007 }
 54:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var4 = var3[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var9 = _closure1_slot0;
                    var4 = 21;
                    var4 = var3[var4];
                    var9 = var9.bind(var1)(var4);
                    var4 = 20;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var9.bind(var1)(var4, var3);
                    var3 = _closure1_slot10;
                    var2 = {};
                    var8 = _closure2_slot0;
                    var9 = var8.messageId;
                    var2['messageId'] = var9;
                    var8 = var8.channelId;
                    var2['channelId'] = var8;
                    var2['attachmentId'] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
 151:
                    return var1;
                }
            };
            var10 = var18.bind(var19)(var3, var10);
            var _closure2_slot12 = var10;
            var3 = 22;
            var3 = var17[var3];
            var5 = var5.bind(var16)(var3);
            var3 = var5.useCanForwardMessage;
            var5 = var3.bind(var5)(var15);
            if(!var5) { _fun0001_ip = 490; continue _fun0001 }
 458:
            var15 = var4.attachmentId;
            var3 = null;
            var3 = var3 != var15;
            if(var3) { _fun0001_ip = 487; continue _fun0001 }
 473:
            var15 = var4.accessoryType;
            var4 = 'embed';
            var3 = var4 === var15;
 487:
            var5 = var3;
 490:
            _closure2_slot13 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(10);
            var2[0] = var14;
            var2[1] = var13;
            var2[2] = var12;
            var2[3] = var11;
            var2[4] = var10;
            var2[5] = var9;
            var2[6] = var8;
            var2[7] = var7;
            var2[8] = var6;
            var2[9] = var5;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = new Array(0);
                    var3 = _closure2_slot1;
                    var2 = true;
                    if(!(var2 !== var3)) { _fun0008_ip = 123; continue _fun0008 }
 17:
                    var3 = var1.push;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 23;
                    var5 = var10[var5];
                    var8 = undefined;
                    var5 = var9.bind(var8)(var5);
                    var5 = var5.DownloadIcon;
                    var2['IconComponent'] = var5;
                    var5 = 24;
                    var6 = var10[var5];
                    var6 = var9.bind(var8)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var10[var5];
                    var5 = var9.bind(var8)(var5);
                    var5 = var5.t;
                    var5 = var5.R3BPHx;
                    var5 = var6.bind(var7)(var5);
                    var2['label'] = var5;
                    var5 = _closure2_slot7;
                    var2['action'] = var5;
                    var2 = var3.bind(var1)(var2);
 123:
                    var2 = _closure2_slot13;
                    if(!var2) { _fun0008_ip = 234; continue _fun0008 }
 130:
                    var3 = var1.push;
                    var2 = {};
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 25;
                    var6 = var10[var6];
                    var9 = undefined;
                    var6 = var7.bind(var9)(var6);
                    var2['IconComponent'] = var6;
                    var8 = _closure1_slot0;
                    var5 = 24;
                    var6 = var10[var5];
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var10[var5];
                    var5 = var8.bind(var9)(var5);
                    var5 = var5.t;
                    var5 = var5.I3ltXF;
                    var5 = var6.bind(var7)(var5);
                    var2['label'] = var5;
                    var5 = _closure2_slot10;
                    var2['action'] = var5;
                    var2 = var3.bind(var1)(var2);
 234:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0008_ip = 347; continue _fun0008 }
 241:
                    var3 = var1.push;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 26;
                    var5 = var10[var5];
                    var8 = undefined;
                    var5 = var9.bind(var8)(var5);
                    var5 = var5.ShareIcon;
                    var2['IconComponent'] = var5;
                    var5 = 24;
                    var6 = var10[var5];
                    var6 = var9.bind(var8)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var10[var5];
                    var5 = var9.bind(var8)(var5);
                    var5 = var5.t;
                    var5 = var5.RDE0SU;
                    var5 = var6.bind(var7)(var5);
                    var2['label'] = var5;
                    var5 = _closure2_slot8;
                    var2['action'] = var5;
                    var2 = var3.bind(var1)(var2);
 347:
                    var3 = var1.push;
                    var2 = {};
                    var11 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var7 = 27;
                    var7 = var6[var7];
                    var9 = undefined;
                    var7 = var11.bind(var9)(var7);
                    var7 = var7.WindowLaunchIcon;
                    var2['IconComponent'] = var7;
                    var10 = 24;
                    var7 = var6[var10];
                    var7 = var11.bind(var9)(var7);
                    var12 = var7.intl;
                    var8 = var12.string;
                    var7 = var6[var10];
                    var7 = var11.bind(var9)(var7);
                    var7 = var7.t;
                    var7 = var7.q5jLJC;
                    var7 = var8.bind(var12)(var7);
                    var2['label'] = var7;
                    var7 = _closure2_slot9;
                    var2['action'] = var7;
                    var2 = var3.bind(var1)(var2);
                    var3 = var1.push;
                    var2 = {};
                    var7 = 28;
                    var7 = var6[var7];
                    var7 = var11.bind(var9)(var7);
                    var7 = var7.LinkIcon;
                    var2['IconComponent'] = var7;
                    var7 = var6[var10];
                    var7 = var11.bind(var9)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var6[var10];
                    var6 = var11.bind(var9)(var6);
                    var6 = var6.t;
                    var6 = var6.+TSRGB;
                    var6 = var7.bind(var8)(var6);
                    var2['label'] = var6;
                    var6 = _closure2_slot11;
                    var2['action'] = var6;
                    var2 = var3.bind(var1)(var2);
                    var2 = _closure2_slot6;
                    if(!var2) { _fun0008_ip = 650; continue _fun0008 }
 552:
                    var3 = var1.push;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var6 = 29;
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
                    var5 = var5.ZH7P2t;
                    var5 = var6.bind(var7)(var5);
                    var2['label'] = var5;
                    var4 = _closure2_slot12;
                    var2['action'] = var4;
                    var2 = var3.bind(var1)(var2);
 650:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot12 = var2;
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
    var8 = var5.GIF_RE_IOS;
    var _closure1_slot8 = var8;
    var5 = var5.MediaType;
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot11 = var5;
    var5 = 32;
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
        var3 = _closure1_slot12;
        var2 = {};
        var2['source'] = var6;
        var2['disableDownload'] = var5;
        var2['shareable'] = var4;
        var4 = undefined;
        var9 = var3.bind(var4)(var2);
        var3 = _closure1_slot11;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 30;
        var1 = var7[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.ActionSheet;
        var1 = {};
        var5 = 31;
        var5 = var7[var5];
        var5 = var6.bind(var4)(var5);
        var5 = var5.ActionSheetRow;
        var6 = var5.Group;
        var5 = {};
        var8 = var9.map;
        var7 = function(arg1, arg2) {
            var1 = arg1;
            var5 = _closure1_slot11;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 31;
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
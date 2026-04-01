// app/modules/media_viewer/native/components/MediaModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var9 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var9;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var4);
    var4 = 0;
    var7 = var6[var4];
    var1 = undefined;
    var7 = var9.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.Image;
    var _closure1_slot5 = var9;
    var9 = var7.Modal;
    var _closure1_slot6 = var9;
    var9 = var7.StyleSheet;
    var _closure1_slot7 = var9;
    var7 = var7.View;
    var _closure1_slot8 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.Base64JPEGPrefix;
    var _closure1_slot10 = var8;
    var8 = var7.Base64GIFPrefix;
    var _closure1_slot11 = var8;
    var7 = var7.AppStates;
    var _closure1_slot12 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot13 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.createElement;
    var _closure1_slot14 = var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/MediaModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MediaModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var13 = var4.originLayout;
            var16 = var4.initialIndex;
            var5 = undefined;
            if(!(var16 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var16 = 0;
case 2:
            var2 = var4.isRNModal;
            if(!(var2 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = false;
case 4:
            var12 = var4.swipeVelocityThreshold;
            if(!(var12 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var12 = 1000;
case 6:
            var6 = var4.onClose;
            var21 = var4.shareable;
            if(!(var21 === var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var21 = true;
case 8:
            var _closure2_slot0 = var21;
            var20 = var4.disableDownload;
            var _closure2_slot1 = var20;
            var19 = var4.disableMediaOverlayButton;
            var _closure2_slot2 = var19;
            var18 = var4.contextName;
            var _closure2_slot3 = var18;
            var3 = var4.contextIcon;
            var _closure2_slot4 = var3;
            var15 = var4.onEndReached;
            var11 = var4.onEndReachedThreshold;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var4 = _closure1_slot0;
            var14 = _closure1_slot3;
            var7 = 5;
            var7 = var14[var7];
            var7 = var4.bind(var5)(var7);
            var10 = var7.MediaViewerSourcesStore;
            var8 = var10.useField;
            var7 = 'sources';
            var17 = var8.bind(var10)(var7);
            var7 = 6;
            var7 = var14[var7];
            var10 = var4.bind(var5)(var7);
            var8 = var10.useMediaViewerSyncer;
            var7 = {};
            var7['sources'] = var17;
            var7['initialIndex'] = var16;
            var7['onEndReached'] = var15;
            var7['onEndReachedThreshold'] = var11;
            var10 = var8.bind(var10)(var7);
            _closure2_slot5 = var10;
            var7 = 7;
            var7 = var14[var7];
            var11 = var4.bind(var5)(var7);
            var8 = var11.useVideoStateStore;
            var7 = function(arg1) {
                var1 = arg1;
                var1 = var1.paused;
                return var1;
            };
            var15 = var8.bind(var11)(var7);
            _closure2_slot6 = var15;
            var8 = _closure1_slot4;
            var16 = var8.useEffect;
            var11 = function() {
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var3 = var2.MediaViewerSourcesStore;
                    var2 = var3.resetState;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                return var1;
            };
            var7 = new Array(0);
            var7 = var16.bind(var8)(var11, var7);
            var7 = 8;
            var7 = var14[var7];
            var17 = var4.bind(var5)(var7);
            var16 = var17.useStateFromStores;
            var7 = _closure1_slot9;
            var11 = new Array(1);
            var11[0] = var7;
            var7 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var16.bind(var17)(var11, var7);
            _closure2_slot7 = var7;
            var11 = var8.useRef;
            var11 = var11.bind(var8)(var7);
            _closure2_slot8 = var11;
            var11 = var8.useRef;
            var11 = var11.bind(var8)(var15);
            _closure2_slot9 = var11;
            var16 = var8.useEffect;
            var11 = new Array(2);
            var11[0] = var7;
            var11[1] = var15;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.isIOS;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = _closure2_slot8;
                    var5 = var5.current;
                    var4 = _closure2_slot7;
                    var2 = var5 !== var4;
case 10:
                    if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var5 = _closure2_slot7;
                    var4 = _closure1_slot12;
                    var4 = var4.BACKGROUND;
                    if(!(var5 !== var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var4 = _closure2_slot9;
                    var4 = var4.current;
                    if(var4) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var6 = _closure2_slot7;
                    var5 = _closure1_slot12;
                    var5 = var5.ACTIVE;
                    var5 = var6 !== var5;
                    if(!var5) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var7 = _closure2_slot7;
                    var6 = _closure1_slot12;
                    var6 = var6.INACTIVE;
                    var5 = var7 !== var6;
case 18:
                    var4 = var5;
case 16:
                    if(var4) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var5 = _closure2_slot8;
                    var6 = var5.current;
                    var5 = _closure1_slot12;
                    var5 = var5.BACKGROUND;
                    var4 = var6 !== var5;
case 20:
                    if(var4) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 7;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.setPausedState;
                    var4 = false;
                    var4 = var5.bind(var6)(var4);
                    _fun0002_ip = 22; continue _fun0002;
case 14:
                    var5 = _closure2_slot9;
                    var4 = _closure2_slot6;
                    var5['current'] = var4;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 7;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.setPausedState;
                    var3 = true;
                    var3 = var4.bind(var5)(var3);
case 22:
                    var4 = _closure2_slot9;
                    var3 = _closure2_slot6;
                    var4['current'] = var3;
                    var3 = _closure2_slot8;
                    var2 = _closure2_slot7;
                    var3['current'] = var2;
case 12:
                    return var1;
                }
            };
            var7 = var16.bind(var8)(var7, var11);
            var11 = var8.useRef;
            var7 = {};
            var7 = var11.bind(var8)(var7);
            _closure2_slot10 = var7;
            var16 = var8.useCallback;
            var11 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = arg2;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var10 = 10;
                    var1 = var1[var10];
                    var8 = undefined;
                    var2 = var2.bind(var8)(var1);
                    var1 = var2.getVideoSourceType;
                    var7 = var1.bind(var2)(var5);
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var3 = '';
                    var2 = '_';
                    var1 = arg1;
                    var4 = var4.bind(var3)(var5, var2, var1);
                    var1 = _closure2_slot10;
                    var1 = var1.current;
                    var1 = var1[var4];
                    var2 = null;
                    if(!(var2 == var1)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var10];
                    var2 = var9.bind(var8)(var2);
                    var2 = var2.VideoSourceType;
                    var2 = var2.PORTAL;
                    if(!(var2 !== var7)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var10];
                    var2 = var9.bind(var8)(var2);
                    var2 = var2.VideoSourceType;
                    var2 = var2.TIKTOK_IFRAME;
                    if(!(var2 !== var7)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var10];
                    var2 = var9.bind(var8)(var2);
                    var2 = var2.VideoSourceType;
                    var2 = var2.WEB_FILE_IFRAME;
                    if(!(var2 !== var7)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var2 = 14;
                    var2 = var11[var2];
                    var9 = var10.bind(var8)(var2);
                    var7 = var9.createVideoControls;
                    var2 = 7;
                    var2 = var11[var2];
                    var2 = var10.bind(var8)(var2);
                    var2 = var2.setPausedState;
                    var2 = var7.bind(var9)(var2);
                    _fun0003_ip = 32; continue _fun0003;
case 30:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 13;
                    var7 = var10[var7];
                    var9 = var9.bind(var8)(var7);
                    var7 = var9.createWebFileVideoControls;
                    var2 = var7.bind(var9)();
                    _fun0003_ip = 32; continue _fun0003;
case 28:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 12;
                    var7 = var10[var7];
                    var9 = var9.bind(var8)(var7);
                    var7 = var9.createTiktokVideoControls;
                    var2 = var7.bind(var9)();
                    _fun0003_ip = 32; continue _fun0003;
case 26:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var6 = 11;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.createPortalControls;
                    var5 = var5.portal;
                    var2 = var6.bind(var7)(var5);
case 32:
                    var3 = _closure2_slot10;
                    var3 = var3.current;
                    var3[var4] = var2;
                    return var2;
case 24:
                    return var1;
                }
            };
            var7 = new Array(0);
            var17 = var16.bind(var8)(var11, var7);
            _closure2_slot11 = var17;
            var16 = var8.useEffect;
            var11 = function() {
                var5 = _closure1_slot2;
                var4 = _closure1_slot3;
                var2 = 15;
                var2 = var4[var2];
                var3 = undefined;
                var5 = var5.bind(var3)(var2);
                var2 = var5.clearCurrentFocusAndDismissKeyboard;
                var2 = var2.bind(var5)();
                var2 = _closure1_slot0;
                var1 = 16;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.unlockOrientation;
                var1 = {};
                var4 = false;
                var1['unlockAfterRotatingToPreviousLock'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.lockOrientationForiOS;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            };
            var7 = new Array(0);
            var7 = var16.bind(var8)(var11, var7);
            var16 = var8.useCallback;
            var11 = new Array(3);
            var11[0] = var20;
            var11[1] = var21;
            var11[2] = var10;
            var7 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 10;
                    var2 = var5[var2];
                    var8 = undefined;
                    var5 = var4.bind(var8)(var2);
                    var4 = var5.getSelectedMediaSource;
                    var2 = _closure2_slot5;
                    var6 = var4.bind(var5)(var2);
                    var2 = null;
                    if(!(var2 != var6)) { _fun0004_ip = 33; continue _fun0004 }
case 35:
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var4 = 17;
                    var4 = var2[var4];
                    var9 = var7.bind(var8)(var4);
                    var5 = var9.triggerHapticFeedback;
                    var4 = _closure1_slot1;
                    var3 = 18;
                    var3 = var2[var3];
                    var3 = var4.bind(var8)(var3);
                    var3 = var3.IMPACT_LIGHT;
                    var3 = var5.bind(var9)(var3);
                    var3 = 19;
                    var3 = var2[var3];
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.openLazy;
                    var3 = 21;
                    var3 = var2[var3];
                    var7 = var7.bind(var8)(var3);
                    var3 = 20;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var7.bind(var8)(var3, var2);
                    var2 = {};
                    var2['source'] = var6;
                    var6 = _closure2_slot1;
                    var2['disableDownload'] = var6;
                    var1 = _closure2_slot0;
                    var2['shareable'] = var1;
                    var1 = 'MediaShareActionSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
case 33:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var16.bind(var8)(var7, var11);
            var16 = var8.useCallback;
            var7 = new Array(7);
            var7[0] = var10;
            var7[1] = var17;
            var7[2] = var21;
            var7[3] = var20;
            var7[4] = var19;
            var7[5] = var18;
            var7[6] = var3;
            var3 = function(arg1, arg2) {
                var4 = _closure1_slot13;
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 22;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot5;
                var1['syncer'] = var6;
                var6 = _closure2_slot11;
                var1['getVideoControls'] = var6;
                var6 = arg1;
                var1['onClose'] = var6;
                var6 = _closure2_slot0;
                var1['shareable'] = var6;
                var6 = _closure2_slot1;
                var1['disableDownload'] = var6;
                var6 = _closure2_slot2;
                var1['disableMediaOverlayButton'] = var6;
                var6 = _closure2_slot3;
                var1['contextName'] = var6;
                var5 = _closure2_slot4;
                var1['contextIcon'] = var5;
                var5 = arg2;
                var1['overlayEnabled'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var7 = var16.bind(var8)(var3, var7);
            var3 = 23;
            var3 = var14[var3];
            var16 = var4.bind(var5)(var3);
            var4 = var16.useMediaPlayerMutedStore;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.isMuted;
                return var1;
            };
            var16 = var4.bind(var16)(var3);
            _closure2_slot12 = var16;
            var4 = var8.useCallback;
            var3 = new Array(3);
            var3[0] = var17;
            var3[1] = var16;
            var3[2] = var15;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = arg1;
                    var7 = var5.source;
                    var6 = var5.index;
                    var11 = var5.key;
                    var10 = var5.visible;
                    var1 = var5.hasSpoiler;
                    var16 = var5.pointerEvents;
                    var4 = {'source': 0, 'index': 0, 'key': 0, 'visible': 0, 'hasSpoiler': 0, 'pointerEvents': 0};
                    var3 = null;
                    var21 = var4;
                    var20 = null;
                    var2 = silentSetPrototypeOf(var21, var20);
                    var21 = {};
                    var20 = var5;
                    var19 = var4;
                    var8 = copyDataProperties(var21, var20, var19);
                    var15 = !var10;
                    if(var15) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var15 = var1;
case 36:
                    if(var15) { _fun0005_ip = 38; continue _fun0005 }
case 15:
                    var15 = _closure2_slot6;
case 38:
                    var14 = _closure2_slot12;
                    if(var14) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var2 = var7.isGIFV;
                    var1 = true;
                    var14 = var1 === var2;
case 39:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var2 = 10;
                    var9 = var13[var2];
                    var4 = undefined;
                    var17 = var12.bind(var4)(var9);
                    var9 = var17.getVideoSourceType;
                    var9 = var9.bind(var17)(var7);
                    var2 = var13[var2];
                    var2 = var12.bind(var4)(var2);
                    var2 = var2.VideoSourceType;
                    var2 = var2.WEB_FILE_IFRAME;
                    if(!(var9 === var2)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var2 = var7.videoURI;
                    if(!(var3 == var2)) { _fun0005_ip = 43; continue _fun0005 }
case 41:
                    var2 = var7.portal;
                    if(!(var3 != var2)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var13 = 11;
                    var2 = var2[var13];
                    var12 = var9.bind(var4)(var2);
                    var9 = var12.isPortalExpired;
                    var2 = var7.portal;
                    var2 = var9.bind(var12)(var2);
                    if(var2) { _fun0005_ip = 44; continue _fun0005 }
case 46:
                    var12 = _closure1_slot14;
                    var9 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var2 = var2[var13];
                    var9 = var9.bind(var4)(var2);
                    var2 = {};
                    var21 = var2;
                    var20 = var8;
                    var13 = copyDataProperties(var21, var20);
                    var13 = 'key';
                    var2[12] = var11;
                    var13 = 'pointerEvents';
                    var2[12] = var16;
                    var17 = var7.portal;
                    var13 = 'portal';
                    var2[12] = var17;
                    var13 = 'paused';
                    var2[12] = var15;
                    var13 = 'muted';
                    var2[12] = var14;
                    var2 = var12.bind(var4)(var9, var2);
                    return var2;
case 44:
                    var2 = var7.embedURI;
                    if(!(var3 != var2)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var2 = var7.isGIFV;
                    if(var2) { _fun0005_ip = 47; continue _fun0005 }
case 49:
                    var9 = var7.embedProviderName;
                    var2 = 'TikTok';
                    if(!(var2 !== var9)) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                    var2 = 'YouTube';
                    if(!(var2 !== var9)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                    return var3;
case 52:
                    var12 = _closure1_slot14;
                    var9 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var2 = 24;
                    var2 = var13[var2];
                    var9 = var9.bind(var4)(var2);
                    var2 = {};
                    var21 = var2;
                    var20 = var8;
                    var13 = copyDataProperties(var21, var20);
                    var13 = 'key';
                    var2[12] = var11;
                    var13 = 'visible';
                    var2[12] = var10;
                    var17 = var8.style;
                    var13 = 'style';
                    var2[12] = var17;
                    var17 = {};
                    var13 = var7.embedURI;
                    var17['uri'] = var13;
                    var13 = var7.width;
                    var17['width'] = var13;
                    var13 = var7.height;
                    var17['height'] = var13;
                    var13 = 'source';
                    var2[12] = var17;
                    var2 = var12.bind(var4)(var9, var2);
                    return var2;
case 50:
                    var12 = _closure1_slot14;
                    var9 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var2 = 12;
                    var2 = var13[var2];
                    var9 = var9.bind(var4)(var2);
                    var2 = {};
                    var21 = var2;
                    var20 = var8;
                    var13 = copyDataProperties(var21, var20);
                    var13 = 'key';
                    var2[12] = var11;
                    var13 = 'visible';
                    var2[12] = var10;
                    var17 = var8.style;
                    var13 = 'style';
                    var2[12] = var17;
                    var17 = {};
                    var13 = var7.embedURI;
                    var17['uri'] = var13;
                    var13 = var7.width;
                    var17['width'] = var13;
                    var13 = var7.height;
                    var17['height'] = var13;
                    var13 = 'source';
                    var2[12] = var17;
                    var13 = _closure2_slot11;
                    var17 = var13.bind(var4)(var6, var7);
                    var13 = 'controls';
                    var2[12] = var17;
                    var2 = var12.bind(var4)(var9, var2);
                    return var2;
case 47:
                    var2 = var7.videoURI;
                    if(!(var3 == var2)) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                    var9 = var7.uri;
                    var3 = var9.startsWith;
                    var2 = 'assets-library://';
                    var2 = var3.bind(var9)(var2);
                    if(var2) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                    var9 = var7.uri;
                    var3 = var9.startsWith;
                    var2 = _closure1_slot10;
                    var2 = var3.bind(var9)(var2);
                    if(var2) { _fun0005_ip = 56; continue _fun0005 }
case 58:
                    var9 = var7.uri;
                    var3 = var9.startsWith;
                    var2 = _closure1_slot11;
                    var2 = var3.bind(var9)(var2);
                    if(var2) { _fun0005_ip = 56; continue _fun0005 }
case 59:
                    var9 = _closure1_slot14;
                    var13 = _closure1_slot1;
                    var17 = _closure1_slot3;
                    var2 = 25;
                    var2 = var17[var2];
                    var3 = var13.bind(var4)(var2);
                    var2 = {};
                    var12 = 26;
                    var12 = var17[var12];
                    var12 = var13.bind(var4)(var12);
                    var2['Component'] = var12;
                    var21 = var2;
                    var20 = var8;
                    var12 = copyDataProperties(var21, var20);
                    var12 = 'key';
                    var2[11] = var11;
                    var12 = 'source';
                    var2[11] = var7;
                    var12 = 'index';
                    var2[11] = var6;
                    var12 = 'pointerEvents';
                    var2[11] = var16;
                    var2 = var9.bind(var4)(var3, var2);
                    _fun0005_ip = 60; continue _fun0005;
case 56:
                    var12 = _closure1_slot14;
                    var9 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var3 = 25;
                    var3 = var13[var3];
                    var9 = var9.bind(var4)(var3);
                    var3 = {};
                    var13 = _closure1_slot5;
                    var3['Component'] = var13;
                    var21 = var3;
                    var20 = var8;
                    var13 = copyDataProperties(var21, var20);
                    var13 = 'key';
                    var3[12] = var11;
                    var13 = 'source';
                    var3[12] = var7;
                    var13 = 'index';
                    var3[12] = var6;
                    var13 = 'pointerEvents';
                    var3[12] = var16;
                    var2 = var12.bind(var4)(var9, var3);
case 60:
                    _fun0005_ip = 61; continue _fun0005;
case 54:
                    var12 = _closure1_slot14;
                    var9 = _closure1_slot1;
                    var18 = _closure1_slot3;
                    var3 = 25;
                    var3 = var18[var3];
                    var9 = var9.bind(var4)(var3);
                    var3 = {};
                    var17 = _closure1_slot0;
                    var13 = 14;
                    var13 = var18[var13];
                    var13 = var17.bind(var4)(var13);
                    var13 = var13.VideoComponent;
                    var3['Component'] = var13;
                    var21 = var3;
                    var20 = var8;
                    var13 = copyDataProperties(var21, var20);
                    var13 = 'key';
                    var3[12] = var11;
                    var13 = 'pointerEvents';
                    var3[12] = var16;
                    var13 = 'paused';
                    var3[12] = var15;
                    var13 = _closure2_slot11;
                    var15 = var13.bind(var4)(var6, var7);
                    var13 = 'controls';
                    var3[12] = var15;
                    var13 = 'muted';
                    var3[12] = var14;
                    var13 = 'index';
                    var3[12] = var6;
                    var14 = {};
                    var13 = var7.videoURI;
                    var14['uri'] = var13;
                    var13 = var7.width;
                    var14['width'] = var13;
                    var13 = var7.height;
                    var14['height'] = var13;
                    var13 = var7.videoURI;
                    var14['videoURI'] = var13;
                    var13 = var7.messageId;
                    var14['messageId'] = var13;
                    var13 = var7.channelId;
                    var14['channelId'] = var13;
                    var13 = var7.mediaIndex;
                    var14['mediaIndex'] = var13;
                    var13 = var7.description;
                    var14['description'] = var13;
                    var13 = var7.obscure;
                    var14['obscure'] = var13;
                    var13 = var7.accessoryType;
                    var14['accessoryType'] = var13;
                    var13 = var7.attachmentId;
                    var14['attachmentId'] = var13;
                    var13 = 'source';
                    var3[12] = var14;
                    var2 = var12.bind(var4)(var9, var3);
case 61:
                    return var2;
case 43:
                    var3 = _closure1_slot14;
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var1 = 13;
                    var1 = var9[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var21 = var1;
                    var20 = var8;
                    var9 = copyDataProperties(var21, var20);
                    var9 = 'key';
                    var1[8] = var11;
                    var9 = 'visible';
                    var1[8] = var10;
                    var9 = var8.style;
                    var8 = 'style';
                    var1[7] = var9;
                    var9 = {};
                    var8 = var7.videoURI;
                    var9['uri'] = var8;
                    var8 = var7.width;
                    var9['width'] = var8;
                    var8 = var7.height;
                    var9['height'] = var8;
                    var8 = 'source';
                    var1[7] = var9;
                    var5 = _closure2_slot11;
                    var6 = var5.bind(var4)(var6, var7);
                    var5 = 'controls';
                    var1[4] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var8 = var4.bind(var8)(var1, var3);
            var4 = _closure1_slot13;
            var3 = _closure1_slot1;
            var1 = 27;
            var1 = var14[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['originLayout'] = var13;
            var1['swipeVelocityThreshold'] = var12;
            var1['onClose'] = var6;
            var1['onLongPress'] = var11;
            var1['syncer'] = var10;
            var1['renderMedia'] = var8;
            var1['renderOverlay'] = var7;
            var8 = var4.bind(var5)(var3, var1);
            var1 = var8;
            if(!var2) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var4 = _closure1_slot13;
            var3 = _closure1_slot6;
            var2 = {'transparent': true, 'animationType': 'none', 'visible': true, 'onRequestClose': null, 'statusBarTranslucent': true};
            var2['onRequestClose'] = var6;
            var7 = _closure1_slot8;
            var6 = {};
            var9 = _closure1_slot7;
            var9 = var9.absoluteFill;
            var6['style'] = var9;
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 62:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
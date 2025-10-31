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
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var7 = var6[var4];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.Image;
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.Base64JPEGPrefix;
    var _closure1_slot10 = var8;
    var8 = var7.Base64GIFPrefix;
    var _closure1_slot11 = var8;
    var7 = var7.AppStates;
    var _closure1_slot12 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot13 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.createElement;
    var _closure1_slot14 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/MediaModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MediaModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.originLayout;
            var13 = var1.initialIndex;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = 0;
case 2:
            var11 = var1.swipeVelocityThreshold;
            var10 = var1.onClose;
            var23 = var1.shareable;
            if(!(var23 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var23 = true;
case 4:
            var _closure2_slot0 = var23;
            var22 = var1.disableDownload;
            var _closure2_slot1 = var22;
            var21 = var1.disableRemix;
            var _closure2_slot2 = var21;
            var20 = var1.disableMediaOverlayButton;
            var _closure2_slot3 = var20;
            var19 = var1.contextName;
            var _closure2_slot4 = var19;
            var5 = var1.contextIcon;
            var _closure2_slot5 = var5;
            var15 = var1.onEndReached;
            var9 = var1.onEndReachedThreshold;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var7 = _closure1_slot0;
            var14 = _closure1_slot3;
            var3 = 8;
            var3 = var14[var3];
            var3 = var7.bind(var4)(var3);
            var8 = var3.MediaViewerSourcesStore;
            var6 = var8.useField;
            var3 = 'sources';
            var16 = var6.bind(var8)(var3);
            var3 = 9;
            var3 = var14[var3];
            var8 = var7.bind(var4)(var3);
            var6 = var8.useMediaViewerSyncer;
            var3 = {};
            var3['sources'] = var16;
            var3['initialIndex'] = var13;
            var3['onEndReached'] = var15;
            var3['onEndReachedThreshold'] = var9;
            var8 = var6.bind(var8)(var3);
            _closure2_slot6 = var8;
            var9 = 10;
            var3 = var14[var9];
            var16 = var7.bind(var4)(var3);
            var15 = var16.useStateFromStores;
            var3 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getRemixing;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var15.bind(var16)(var6, var3);
            _closure2_slot7 = var3;
            var6 = 11;
            var6 = var14[var6];
            var16 = var7.bind(var4)(var6);
            var15 = var16.useVideoStateStore;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.paused;
                return var1;
            };
            var16 = var15.bind(var16)(var6);
            _closure2_slot8 = var16;
            var15 = _closure1_slot8;
            var6 = var15.getCurrentUser;
            var24 = var6.bind(var15)();
            _closure2_slot9 = var24;
            var15 = _closure1_slot5;
            var17 = var15.useState;
            var6 = false;
            var18 = var17.bind(var15)(var6);
            var17 = _closure1_slot4;
            var6 = 2;
            var18 = var17.bind(var4)(var18, var6);
            var6 = 0;
            var6 = var18[var6];
            _closure2_slot10 = var6;
            var17 = 1;
            var17 = var18[var17];
            _closure2_slot11 = var17;
            var25 = var15.useEffect;
            var18 = function() {
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 8;
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
            var17 = new Array(0);
            var17 = var25.bind(var15)(var18, var17);
            var9 = var14[var9];
            var25 = var7.bind(var4)(var9);
            var18 = var25.useStateFromStores;
            var9 = _closure1_slot9;
            var17 = new Array(1);
            var17[0] = var9;
            var9 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var18.bind(var25)(var17, var9);
            _closure2_slot12 = var9;
            var17 = var15.useRef;
            var17 = var17.bind(var15)(var9);
            _closure2_slot13 = var17;
            var17 = var15.useRef;
            var17 = var17.bind(var15)(var16);
            _closure2_slot14 = var17;
            var18 = var15.useEffect;
            var17 = new Array(2);
            var17[0] = var9;
            var17[1] = var16;
            var9 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.isIOS;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = _closure2_slot13;
                    var5 = var5.current;
                    var4 = _closure2_slot12;
                    var2 = var5 !== var4;
case 6:
                    if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var5 = _closure2_slot12;
                    var4 = _closure1_slot12;
                    var4 = var4.BACKGROUND;
                    if(!(var5 !== var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var4 = _closure2_slot14;
                    var4 = var4.current;
                    if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var6 = _closure2_slot12;
                    var5 = _closure1_slot12;
                    var5 = var5.ACTIVE;
                    var5 = var6 !== var5;
                    if(!var5) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var7 = _closure2_slot12;
                    var6 = _closure1_slot12;
                    var6 = var6.INACTIVE;
                    var5 = var7 !== var6;
case 14:
                    var4 = var5;
case 12:
                    if(var4) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var5 = _closure2_slot13;
                    var6 = var5.current;
                    var5 = _closure1_slot12;
                    var5 = var5.BACKGROUND;
                    var4 = var6 !== var5;
case 16:
                    if(var4) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 11;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.setPausedState;
                    var4 = false;
                    var4 = var5.bind(var6)(var4);
                    _fun0002_ip = 18; continue _fun0002;
case 10:
                    var5 = _closure2_slot14;
                    var4 = _closure2_slot8;
                    var5['current'] = var4;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 11;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.setPausedState;
                    var3 = true;
                    var3 = var4.bind(var5)(var3);
case 18:
                    var4 = _closure2_slot14;
                    var3 = _closure2_slot8;
                    var4['current'] = var3;
                    var3 = _closure2_slot13;
                    var2 = _closure2_slot12;
                    var3['current'] = var2;
case 8:
                    return var1;
                }
            };
            var9 = var18.bind(var15)(var9, var17);
            var17 = var15.useRef;
            var9 = {};
            var9 = var17.bind(var15)(var9);
            _closure2_slot15 = var9;
            var18 = var15.useCallback;
            var17 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = arg2;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var10 = 13;
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
                    var1 = _closure2_slot15;
                    var1 = var1.current;
                    var1 = var1[var4];
                    var2 = null;
                    if(!(var2 == var1)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var10];
                    var2 = var9.bind(var8)(var2);
                    var2 = var2.VideoSourceType;
                    var2 = var2.PORTAL;
                    if(!(var2 !== var7)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var10];
                    var2 = var9.bind(var8)(var2);
                    var2 = var2.VideoSourceType;
                    var2 = var2.TIKTOK_IFRAME;
                    if(!(var2 !== var7)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var10];
                    var2 = var9.bind(var8)(var2);
                    var2 = var2.VideoSourceType;
                    var2 = var2.WEB_FILE_IFRAME;
                    if(!(var2 !== var7)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var2 = 17;
                    var2 = var11[var2];
                    var9 = var10.bind(var8)(var2);
                    var7 = var9.createVideoControls;
                    var2 = 11;
                    var2 = var11[var2];
                    var2 = var10.bind(var8)(var2);
                    var2 = var2.setPausedState;
                    var2 = var7.bind(var9)(var2);
                    _fun0003_ip = 28; continue _fun0003;
case 26:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 16;
                    var7 = var10[var7];
                    var9 = var9.bind(var8)(var7);
                    var7 = var9.createWebFileVideoControls;
                    var2 = var7.bind(var9)();
                    _fun0003_ip = 28; continue _fun0003;
case 24:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 15;
                    var7 = var10[var7];
                    var9 = var9.bind(var8)(var7);
                    var7 = var9.createTiktokVideoControls;
                    var2 = var7.bind(var9)();
                    _fun0003_ip = 28; continue _fun0003;
case 22:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var6 = 14;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.createPortalControls;
                    var5 = var5.portal;
                    var2 = var6.bind(var7)(var5);
case 28:
                    var3 = _closure2_slot15;
                    var3 = var3.current;
                    var3[var4] = var2;
                    return var2;
case 20:
                    return var1;
                }
            };
            var9 = new Array(0);
            var18 = var18.bind(var15)(var17, var9);
            _closure2_slot16 = var18;
            var25 = var15.useEffect;
            var17 = function() {
                var5 = _closure1_slot2;
                var4 = _closure1_slot3;
                var2 = 18;
                var2 = var4[var2];
                var3 = undefined;
                var5 = var5.bind(var3)(var2);
                var2 = var5.clearCurrentFocusAndDismissKeyboard;
                var2 = var2.bind(var5)();
                var2 = _closure1_slot0;
                var1 = 19;
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
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.lockOrientationForiOS;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            };
            var9 = new Array(0);
            var9 = var25.bind(var15)(var17, var9);
            var17 = var15.useEffect;
            var9 = new Array(2);
            var9[0] = var24;
            var9[1] = var6;
            var6 = function() {
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = _closure2_slot10;
                        if(!var1) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 20;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.setNonNitroUpsellShown;
                        var6 = _closure2_slot9;
                        var5 = null;
                        var5 = var5 == var6;
                        if(var5) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                        var4 = _closure2_slot9;
                        var1 = var4.id;
case 31:
                        var1 = var2.bind(var3)(var1);
case 29:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var6 = var17.bind(var15)(var6, var9);
            var17 = var15.useCallback;
            var9 = new Array(3);
            var9[0] = var22;
            var9[1] = var23;
            var9[2] = var8;
            var6 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 13;
                    var2 = var5[var2];
                    var8 = undefined;
                    var5 = var4.bind(var8)(var2);
                    var4 = var5.getSelectedMediaSource;
                    var2 = _closure2_slot6;
                    var6 = var4.bind(var5)(var2);
                    var2 = null;
                    if(!(var2 != var6)) { _fun0005_ip = 33; continue _fun0005 }
case 35:
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var4 = 21;
                    var4 = var2[var4];
                    var9 = var7.bind(var8)(var4);
                    var5 = var9.triggerHapticFeedback;
                    var4 = _closure1_slot1;
                    var3 = 22;
                    var3 = var2[var3];
                    var3 = var4.bind(var8)(var3);
                    var3 = var3.IMPACT_LIGHT;
                    var3 = var5.bind(var9)(var3);
                    var3 = 23;
                    var3 = var2[var3];
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.openLazy;
                    var3 = 25;
                    var3 = var2[var3];
                    var7 = var7.bind(var8)(var3);
                    var3 = 24;
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
            var9 = var17.bind(var15)(var6, var9);
            var17 = var15.useCallback;
            var6 = new Array(9);
            var6[0] = var3;
            var6[1] = var8;
            var6[2] = var18;
            var6[3] = var23;
            var6[4] = var22;
            var6[5] = var21;
            var6[6] = var20;
            var6[7] = var19;
            var6[8] = var5;
            var5 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var1 = null;
                    if(var2) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                    var5 = _closure1_slot13;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 26;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var7 = _closure2_slot6;
                    var2['syncer'] = var7;
                    var7 = _closure2_slot16;
                    var2['getVideoControls'] = var7;
                    var7 = arg1;
                    var2['onClose'] = var7;
                    var7 = _closure2_slot0;
                    var2['shareable'] = var7;
                    var7 = _closure2_slot1;
                    var2['disableDownload'] = var7;
                    var7 = _closure2_slot2;
                    var2['disableRemix'] = var7;
                    var7 = _closure2_slot3;
                    var2['disableMediaOverlayButton'] = var7;
                    var7 = _closure2_slot4;
                    var2['contextName'] = var7;
                    var7 = _closure2_slot5;
                    var2['contextIcon'] = var7;
                    var7 = arg2;
                    var2['overlayEnabled'] = var7;
                    var6 = _closure2_slot11;
                    var2['setClickedRemix'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 36:
                    return var1;
                }
            };
            var5 = var17.bind(var15)(var5, var6);
            var17 = var15.useCallback;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var1 = null;
                    if(!var2) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var5 = _closure1_slot13;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 27;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = {};
                    var9 = arg1;
                    var10 = var6;
                    var7 = copyDataProperties(var10, var9);
                    var8 = false;
                    var7 = 'local';
                    var6[var7] = var8;
                    var2['source'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 38:
                    return var1;
                }
            };
            var6 = var17.bind(var15)(var3, var6);
            var3 = 28;
            var3 = var14[var3];
            var17 = var7.bind(var4)(var3);
            var7 = var17.useMediaPlayerMutedStore;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.isMuted;
                return var1;
            };
            var17 = var7.bind(var17)(var3);
            _closure2_slot17 = var17;
            var7 = var15.useCallback;
            var3 = new Array(3);
            var3[0] = var18;
            var3[1] = var17;
            var3[2] = var16;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                    if(var15) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                    var15 = var1;
case 40:
                    if(var15) { _fun0008_ip = 42; continue _fun0008 }
case 11:
                    var15 = _closure2_slot8;
case 42:
                    var14 = _closure2_slot17;
                    if(var14) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                    var2 = var7.isGIFV;
                    var1 = true;
                    var14 = var1 === var2;
case 43:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var2 = 13;
                    var9 = var13[var2];
                    var4 = undefined;
                    var17 = var12.bind(var4)(var9);
                    var9 = var17.getVideoSourceType;
                    var9 = var9.bind(var17)(var7);
                    var2 = var13[var2];
                    var2 = var12.bind(var4)(var2);
                    var2 = var2.VideoSourceType;
                    var2 = var2.WEB_FILE_IFRAME;
                    if(!(var9 === var2)) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                    var2 = var7.videoURI;
                    if(!(var3 == var2)) { _fun0008_ip = 47; continue _fun0008 }
case 45:
                    var2 = var7.portal;
                    if(!(var3 != var2)) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var13 = 14;
                    var2 = var2[var13];
                    var12 = var9.bind(var4)(var2);
                    var9 = var12.isPortalExpired;
                    var2 = var7.portal;
                    var2 = var9.bind(var12)(var2);
                    if(var2) { _fun0008_ip = 48; continue _fun0008 }
case 50:
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
                    var2[var13] = var11;
                    var13 = 'pointerEvents';
                    var2[var13] = var16;
                    var17 = var7.portal;
                    var13 = 'portal';
                    var2[var13] = var17;
                    var13 = 'paused';
                    var2[var13] = var15;
                    var13 = 'muted';
                    var2[var13] = var14;
                    var2 = var12.bind(var4)(var9, var2);
                    return var2;
case 48:
                    var2 = var7.embedURI;
                    if(!(var3 != var2)) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                    var2 = var7.isGIFV;
                    if(var2) { _fun0008_ip = 51; continue _fun0008 }
case 53:
                    var9 = var7.embedProviderName;
                    var2 = 'TikTok';
                    if(!(var2 !== var9)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var2 = 'YouTube';
                    if(!(var2 !== var9)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    return var3;
case 56:
                    var12 = _closure1_slot14;
                    var9 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var2 = 29;
                    var2 = var13[var2];
                    var9 = var9.bind(var4)(var2);
                    var2 = {};
                    var21 = var2;
                    var20 = var8;
                    var13 = copyDataProperties(var21, var20);
                    var13 = 'key';
                    var2[var13] = var11;
                    var13 = 'visible';
                    var2[var13] = var10;
                    var17 = var8.style;
                    var13 = 'style';
                    var2[var13] = var17;
                    var17 = {};
                    var13 = var7.embedURI;
                    var17['uri'] = var13;
                    var13 = var7.width;
                    var17['width'] = var13;
                    var13 = var7.height;
                    var17['height'] = var13;
                    var13 = 'source';
                    var2[var13] = var17;
                    var2 = var12.bind(var4)(var9, var2);
                    return var2;
case 54:
                    var12 = _closure1_slot14;
                    var9 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var2 = 15;
                    var2 = var13[var2];
                    var9 = var9.bind(var4)(var2);
                    var2 = {};
                    var21 = var2;
                    var20 = var8;
                    var13 = copyDataProperties(var21, var20);
                    var13 = 'key';
                    var2[var13] = var11;
                    var13 = 'visible';
                    var2[var13] = var10;
                    var17 = var8.style;
                    var13 = 'style';
                    var2[var13] = var17;
                    var17 = {};
                    var13 = var7.embedURI;
                    var17['uri'] = var13;
                    var13 = var7.width;
                    var17['width'] = var13;
                    var13 = var7.height;
                    var17['height'] = var13;
                    var13 = 'source';
                    var2[var13] = var17;
                    var13 = _closure2_slot16;
                    var17 = var13.bind(var4)(var6, var7);
                    var13 = 'controls';
                    var2[var13] = var17;
                    var2 = var12.bind(var4)(var9, var2);
                    return var2;
case 51:
                    var2 = var7.videoURI;
                    if(!(var3 == var2)) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var9 = var7.uri;
                    var3 = var9.startsWith;
                    var2 = 'assets-library://';
                    var2 = var3.bind(var9)(var2);
                    if(var2) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var9 = var7.uri;
                    var3 = var9.startsWith;
                    var2 = _closure1_slot10;
                    var2 = var3.bind(var9)(var2);
                    if(var2) { _fun0008_ip = 60; continue _fun0008 }
case 62:
                    var9 = var7.uri;
                    var3 = var9.startsWith;
                    var2 = _closure1_slot11;
                    var2 = var3.bind(var9)(var2);
                    if(var2) { _fun0008_ip = 60; continue _fun0008 }
case 63:
                    var9 = _closure1_slot14;
                    var13 = _closure1_slot1;
                    var17 = _closure1_slot3;
                    var2 = 30;
                    var2 = var17[var2];
                    var3 = var13.bind(var4)(var2);
                    var2 = {};
                    var12 = 31;
                    var12 = var17[var12];
                    var12 = var13.bind(var4)(var12);
                    var2['Component'] = var12;
                    var21 = var2;
                    var20 = var8;
                    var12 = copyDataProperties(var21, var20);
                    var12 = 'key';
                    var2[var12] = var11;
                    var12 = 'source';
                    var2[var12] = var7;
                    var12 = 'index';
                    var2[var12] = var6;
                    var12 = 'pointerEvents';
                    var2[var12] = var16;
                    var2 = var9.bind(var4)(var3, var2);
                    _fun0008_ip = 64; continue _fun0008;
case 60:
                    var12 = _closure1_slot14;
                    var9 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var3 = 30;
                    var3 = var13[var3];
                    var9 = var9.bind(var4)(var3);
                    var3 = {};
                    var13 = _closure1_slot6;
                    var3['Component'] = var13;
                    var21 = var3;
                    var20 = var8;
                    var13 = copyDataProperties(var21, var20);
                    var13 = 'key';
                    var3[var13] = var11;
                    var13 = 'source';
                    var3[var13] = var7;
                    var13 = 'index';
                    var3[var13] = var6;
                    var13 = 'pointerEvents';
                    var3[var13] = var16;
                    var2 = var12.bind(var4)(var9, var3);
case 64:
                    _fun0008_ip = 65; continue _fun0008;
case 58:
                    var12 = _closure1_slot14;
                    var9 = _closure1_slot1;
                    var18 = _closure1_slot3;
                    var3 = 30;
                    var3 = var18[var3];
                    var9 = var9.bind(var4)(var3);
                    var3 = {};
                    var17 = _closure1_slot0;
                    var13 = 17;
                    var13 = var18[var13];
                    var13 = var17.bind(var4)(var13);
                    var13 = var13.VideoComponent;
                    var3['Component'] = var13;
                    var21 = var3;
                    var20 = var8;
                    var13 = copyDataProperties(var21, var20);
                    var13 = 'key';
                    var3[var13] = var11;
                    var13 = 'pointerEvents';
                    var3[var13] = var16;
                    var13 = 'paused';
                    var3[var13] = var15;
                    var13 = _closure2_slot16;
                    var15 = var13.bind(var4)(var6, var7);
                    var13 = 'controls';
                    var3[var13] = var15;
                    var13 = 'muted';
                    var3[var13] = var14;
                    var13 = 'index';
                    var3[var13] = var6;
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
                    var3[var13] = var14;
                    var2 = var12.bind(var4)(var9, var3);
case 65:
                    return var2;
case 47:
                    var3 = _closure1_slot14;
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var1 = 16;
                    var1 = var9[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var21 = var1;
                    var20 = var8;
                    var9 = copyDataProperties(var21, var20);
                    var9 = 'key';
                    var1[var9] = var11;
                    var9 = 'visible';
                    var1[var9] = var10;
                    var9 = var8.style;
                    var8 = 'style';
                    var1[var8] = var9;
                    var9 = {};
                    var8 = var7.videoURI;
                    var9['uri'] = var8;
                    var8 = var7.width;
                    var9['width'] = var8;
                    var8 = var7.height;
                    var9['height'] = var8;
                    var8 = 'source';
                    var1[var8] = var9;
                    var5 = _closure2_slot16;
                    var6 = var5.bind(var4)(var6, var7);
                    var5 = 'controls';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var7 = var7.bind(var15)(var2, var3);
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var1 = 32;
            var1 = var14[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['initialIndex'] = var13;
            var1['origin'] = var12;
            var1['swipeVelocityThreshold'] = var11;
            var1['onClose'] = var10;
            var1['onLongPress'] = var9;
            var1['syncer'] = var8;
            var1['renderMedia'] = var7;
            var1['renderRemixingView'] = var6;
            var1['renderOverlay'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
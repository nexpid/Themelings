// app/modules/media_viewer/native/components/MediaModal.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var9 = native4;
    var3 = native6;
    var6 = native7;
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
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/MediaModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MediaModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var12 = var1.originLayout;
            var13 = var1.initialIndex;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0001_ip = 25; continue _fun0001 }
 23:
            var13 = 0;
 25:
            var11 = var1.swipeVelocityThreshold;
            var10 = var1.onClose;
            var23 = var1.shareable;
            if(!(var23 === var4)) { _fun0001_ip = 49; continue _fun0001 }
 47:
            var23 = true;
 49:
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
 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.isIOS;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0002_ip = 58; continue _fun0002 }
 38:
                    var5 = _closure2_slot13;
                    var5 = var5.current;
                    var4 = _closure2_slot12;
                    var2 = var5 !== var4;
 58:
                    if(!var2) { _fun0002_ip = 278; continue _fun0002 }
 64:
                    var5 = _closure2_slot12;
                    var4 = _closure1_slot12;
                    var4 = var4.BACKGROUND;
                    if(!(var5 !== var4)) { _fun0002_ip = 203; continue _fun0002 }
 85:
                    var4 = _closure2_slot14;
                    var4 = var4.current;
                    if(var4) { _fun0002_ip = 139; continue _fun0002 }
 97:
                    var6 = _closure2_slot12;
                    var5 = _closure1_slot12;
                    var5 = var5.ACTIVE;
                    var5 = var6 !== var5;
                    if(!var5) { _fun0002_ip = 136; continue _fun0002 }
 118:
                    var7 = _closure2_slot12;
                    var6 = _closure1_slot12;
                    var6 = var6.INACTIVE;
                    var5 = var7 !== var6;
 136:
                    var4 = var5;
 139:
                    if(var4) { _fun0002_ip = 165; continue _fun0002 }
 142:
                    var5 = _closure2_slot13;
                    var6 = var5.current;
                    var5 = _closure1_slot12;
                    var5 = var5.BACKGROUND;
                    var4 = var6 !== var5;
 165:
                    if(var4) { _fun0002_ip = 250; continue _fun0002 }
 168:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 11;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.setPausedState;
                    var4 = false;
                    var4 = var5.bind(var6)(var4);
                    _fun0002_ip = 250; continue _fun0002;
 203:
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
 250:
                    var4 = _closure2_slot14;
                    var3 = _closure2_slot8;
                    var4['current'] = var3;
                    var3 = _closure2_slot13;
                    var2 = _closure2_slot12;
                    var3['current'] = var2;
 278:
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
 0:
                    var4 = arg1;
                    var5 = arg2;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var10 = 13;
                    var1 = var1[var10];
                    var8 = undefined;
                    var2 = var2.bind(var8)(var1);
                    var1 = var2.getVideoSourceType;
                    var7 = var1.bind(var2)(var4, var5);
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = '';
                    var1 = '_';
                    var4 = var3.bind(var2)(var5, var1, var4);
                    var1 = _closure2_slot15;
                    var1 = var1.current;
                    var1 = var1[var4];
                    var2 = null;
                    if(!(var2 == var1)) { _fun0003_ip = 297; continue _fun0003 }
 96:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var10];
                    var2 = var9.bind(var8)(var2);
                    var2 = var2.VideoSourceType;
                    var2 = var2.PORTAL;
                    if(!(var2 !== var7)) { _fun0003_ip = 245; continue _fun0003 }
 129:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var10];
                    var2 = var9.bind(var8)(var2);
                    var2 = var2.VideoSourceType;
                    var2 = var2.TIKTOK_IFRAME;
                    if(!(var2 !== var7)) { _fun0003_ip = 213; continue _fun0003 }
 162:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var2 = 16;
                    var2 = var11[var2];
                    var9 = var10.bind(var8)(var2);
                    var7 = var9.createVideoControls;
                    var2 = 11;
                    var2 = var11[var2];
                    var2 = var10.bind(var8)(var2);
                    var2 = var2.setPausedState;
                    var2 = var7.bind(var9)(var2);
                    _fun0003_ip = 282; continue _fun0003;
 213:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 15;
                    var7 = var10[var7];
                    var9 = var9.bind(var8)(var7);
                    var7 = var9.createTiktokVideoControls;
                    var2 = var7.bind(var9)();
                    _fun0003_ip = 282; continue _fun0003;
 245:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var6 = 14;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.createPortalControls;
                    var5 = var5.portal;
                    var2 = var6.bind(var7)(var5);
 282:
                    var3 = _closure2_slot15;
                    var3 = var3.current;
                    var3[var4] = var2;
                    return var2;
 297:
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
                var2 = 17;
                var2 = var4[var2];
                var3 = undefined;
                var5 = var5.bind(var3)(var2);
                var2 = var5.clearCurrentFocusAndDismissKeyboard;
                var2 = var2.bind(var5)();
                var2 = _closure1_slot0;
                var1 = 18;
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
                    var1 = 18;
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
 0:
                        var1 = _closure2_slot10;
                        if(!var1) { _fun0004_ip = 68; continue _fun0004 }
 10:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 19;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.setNonNitroUpsellShown;
                        var6 = _closure2_slot9;
                        var5 = null;
                        var5 = var5 == var6;
                        if(var5) { _fun0004_ip = 63; continue _fun0004 }
 54:
                        var4 = _closure2_slot9;
                        var1 = var4.id;
 63:
                        var1 = var2.bind(var3)(var1);
 68:
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
 0:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0005_ip = 183; continue _fun0005 }
 13:
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var4 = 13;
                    var4 = var2[var4];
                    var8 = undefined;
                    var6 = var7.bind(var8)(var4);
                    var5 = var6.getSelectedMediaSource;
                    var4 = _closure2_slot6;
                    var6 = var5.bind(var6)(var4);
                    var4 = 20;
                    var4 = var2[var4];
                    var9 = var7.bind(var8)(var4);
                    var5 = var9.triggerHapticFeedback;
                    var4 = _closure1_slot1;
                    var3 = 21;
                    var3 = var2[var3];
                    var3 = var4.bind(var8)(var3);
                    var3 = var3.IMPACT_LIGHT;
                    var3 = var5.bind(var9)(var3);
                    var3 = 22;
                    var3 = var2[var3];
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.openLazy;
                    var3 = 24;
                    var3 = var2[var3];
                    var7 = var7.bind(var8)(var3);
                    var3 = 23;
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
 183:
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
 0:
                    var2 = _closure2_slot7;
                    var1 = null;
                    if(var2) { _fun0006_ip = 155; continue _fun0006 }
 15:
                    var5 = _closure1_slot13;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 25;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.MediaModalOverlay;
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
 155:
                    return var1;
                }
            };
            var5 = var17.bind(var15)(var5, var6);
            var17 = var15.useCallback;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot7;
                    var1 = null;
                    if(!var2) { _fun0007_ip = 76; continue _fun0007 }
 12:
                    var5 = _closure1_slot13;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 26;
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
 76:
                    return var1;
                }
            };
            var6 = var17.bind(var15)(var3, var6);
            var3 = 27;
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
 0:
                    var5 = arg1;
                    var7 = var5.source;
                    var6 = var5.index;
                    var10 = var5.key;
                    var9 = var5.visible;
                    var2 = var5.hasSpoiler;
                    var14 = var5.pointerEvents;
                    var4 = {'source': 0, 'index': 0, 'key': 0, 'visible': 0, 'hasSpoiler': 0, 'pointerEvents': 0};
                    var1 = null;
                    var19 = var4;
                    var18 = null;
                    var3 = silentSetPrototypeOf(var19, var18);
                    var19 = {};
                    var18 = var5;
                    var17 = var4;
                    var5 = copyDataProperties(var19, var18, var17);
                    var13 = !var9;
                    if(var13) { _fun0008_ip = 82; continue _fun0008 }
 79:
                    var13 = var2;
 82:
                    if(var13) { _fun0008_ip = 92; continue _fun0008 }
 85:
                    var13 = _closure2_slot8;
 92:
                    var2 = var7.portal;
                    if(!(var1 != var2)) { _fun0008_ip = 249; continue _fun0008 }
 105:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var11 = 14;
                    var3 = var3[var11];
                    var8 = undefined;
                    var12 = var4.bind(var8)(var3);
                    var4 = var12.isPortalExpired;
                    var3 = var7.portal;
                    var3 = var4.bind(var12)(var3);
                    if(var3) { _fun0008_ip = 249; continue _fun0008 }
 150:
                    var4 = _closure1_slot14;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var2 = var2[var11];
                    var3 = var3.bind(var8)(var2);
                    var2 = {};
                    var19 = var2;
                    var18 = var5;
                    var11 = copyDataProperties(var19, var18);
                    var11 = 'key';
                    var2[var11] = var10;
                    var11 = 'pointerEvents';
                    var2[var11] = var14;
                    var12 = var7.portal;
                    var11 = 'portal';
                    var2[var11] = var12;
                    var11 = 'paused';
                    var2[var11] = var13;
                    var12 = _closure2_slot17;
                    var11 = 'muted';
                    var2[var11] = var12;
                    var2 = var4.bind(var8)(var3, var2);
                    return var2;
 249:
                    var2 = var7.embedURI;
                    if(!(var1 == var2)) { _fun0008_ip = 838; continue _fun0008 }
 262:
                    var2 = var7.videoURI;
                    if(!(var1 == var2)) { _fun0008_ip = 554; continue _fun0008 }
 275:
                    var4 = var7.uri;
                    var3 = var4.startsWith;
                    var2 = 'assets-library://';
                    var2 = var3.bind(var4)(var2);
                    if(var2) { _fun0008_ip = 457; continue _fun0008 }
 304:
                    var8 = var7.uri;
                    var4 = var8.startsWith;
                    var3 = _closure1_slot10;
                    var3 = var4.bind(var8)(var3);
                    if(var3) { _fun0008_ip = 457; continue _fun0008 }
 334:
                    var8 = var7.uri;
                    var4 = var8.startsWith;
                    var3 = _closure1_slot11;
                    var3 = var4.bind(var8)(var3);
                    if(var3) { _fun0008_ip = 457; continue _fun0008 }
 358:
                    var8 = _closure1_slot14;
                    var12 = _closure1_slot1;
                    var15 = _closure1_slot3;
                    var2 = 29;
                    var2 = var15[var2];
                    var4 = undefined;
                    var3 = var12.bind(var4)(var2);
                    var2 = {};
                    var11 = 30;
                    var11 = var15[var11];
                    var11 = var12.bind(var4)(var11);
                    var2['Component'] = var11;
                    var19 = var2;
                    var18 = var5;
                    var11 = copyDataProperties(var19, var18);
                    var11 = 'key';
                    var2[var11] = var10;
                    var11 = 'source';
                    var2[var11] = var7;
                    var11 = 'index';
                    var2[var11] = var6;
                    var11 = 'pointerEvents';
                    var2[var11] = var14;
                    var2 = var8.bind(var4)(var3, var2);
                    _fun0008_ip = 549; continue _fun0008;
 457:
                    var11 = _closure1_slot14;
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var3 = 29;
                    var3 = var8[var3];
                    var8 = undefined;
                    var4 = var4.bind(var8)(var3);
                    var3 = {};
                    var12 = _closure1_slot6;
                    var3['Component'] = var12;
                    var19 = var3;
                    var18 = var5;
                    var12 = copyDataProperties(var19, var18);
                    var12 = 'key';
                    var3[var12] = var10;
                    var12 = 'source';
                    var3[var12] = var7;
                    var12 = 'index';
                    var3[var12] = var6;
                    var12 = 'pointerEvents';
                    var3[var12] = var14;
                    var2 = var11.bind(var8)(var4, var3);
 549:
                    _fun0008_ip = 836; continue _fun0008;
 554:
                    var11 = _closure1_slot14;
                    var4 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var3 = 29;
                    var3 = var16[var3];
                    var8 = undefined;
                    var4 = var4.bind(var8)(var3);
                    var3 = {};
                    var15 = _closure1_slot0;
                    var12 = 16;
                    var12 = var16[var12];
                    var12 = var15.bind(var8)(var12);
                    var12 = var12.VideoComponent;
                    var3['Component'] = var12;
                    var19 = var3;
                    var18 = var5;
                    var12 = copyDataProperties(var19, var18);
                    var12 = 'key';
                    var3[var12] = var10;
                    var12 = 'pointerEvents';
                    var3[var12] = var14;
                    var12 = 'paused';
                    var3[var12] = var13;
                    var13 = _closure2_slot16;
                    var14 = var13.bind(var8)(var6, var7);
                    var13 = 'controls';
                    var3[var13] = var14;
                    var13 = _closure2_slot17;
                    if(var13) { _fun0008_ip = 690; continue _fun0008 }
 678:
                    var14 = var7.isGIFV;
                    var12 = true;
                    var13 = var12 === var14;
 690:
                    var12 = 'muted';
                    var3[var12] = var13;
                    var12 = 'index';
                    var3[var12] = var6;
                    var13 = {};
                    var12 = var7.videoURI;
                    var13['uri'] = var12;
                    var12 = var7.width;
                    var13['width'] = var12;
                    var12 = var7.height;
                    var13['height'] = var12;
                    var12 = var7.videoURI;
                    var13['videoURI'] = var12;
                    var12 = var7.messageId;
                    var13['messageId'] = var12;
                    var12 = var7.channelId;
                    var13['channelId'] = var12;
                    var12 = var7.mediaIndex;
                    var13['mediaIndex'] = var12;
                    var12 = var7.description;
                    var13['description'] = var12;
                    var12 = var7.obscure;
                    var13['obscure'] = var12;
                    var12 = var7.accessoryType;
                    var13['accessoryType'] = var12;
                    var12 = var7.attachmentId;
                    var13['attachmentId'] = var12;
                    var12 = 'source';
                    var3[var12] = var13;
                    var2 = var11.bind(var8)(var4, var3);
 836:
                    return var2;
 838:
                    var3 = var7.embedProviderName;
                    var2 = 'TikTok';
                    if(!(var2 !== var3)) { _fun0008_ip = 990; continue _fun0008 }
 857:
                    var2 = 'YouTube';
                    if(!(var2 !== var3)) { _fun0008_ip = 869; continue _fun0008 }
 867:
                    return var1;
 869:
                    var4 = _closure1_slot14;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 28;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var19 = var1;
                    var18 = var5;
                    var8 = copyDataProperties(var19, var18);
                    var8 = 'key';
                    var1[var8] = var10;
                    var8 = 'visible';
                    var1[var8] = var9;
                    var11 = var5.style;
                    var8 = 'style';
                    var1[var8] = var11;
                    var11 = {};
                    var8 = var7.embedURI;
                    var11['uri'] = var8;
                    var8 = var7.width;
                    var11['width'] = var8;
                    var8 = var7.height;
                    var11['height'] = var8;
                    var8 = 'source';
                    var1[var8] = var11;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
 990:
                    var4 = _closure1_slot14;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 15;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var19 = var1;
                    var18 = var5;
                    var8 = copyDataProperties(var19, var18);
                    var8 = 'key';
                    var1[var8] = var10;
                    var8 = 'visible';
                    var1[var8] = var9;
                    var8 = var5.style;
                    var5 = 'style';
                    var1[var5] = var8;
                    var8 = {};
                    var5 = var7.embedURI;
                    var8['uri'] = var5;
                    var5 = var7.width;
                    var8['width'] = var5;
                    var5 = var7.height;
                    var8['height'] = var5;
                    var5 = 'source';
                    var1[var5] = var8;
                    var5 = _closure2_slot16;
                    var6 = var5.bind(var3)(var6, var7);
                    var5 = 'controls';
                    var1[var5] = var6;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var7 = var7.bind(var15)(var2, var3);
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var1 = 31;
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
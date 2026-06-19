// app/modules/media_viewer/native/components/overlay/MediaModalOverlay.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function OverlayMuteButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var11 = var1.isMuted;
            var9 = var1.onToggleMute;
            var1 = _closure1_slot10;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot7;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var1 = 6;
            var1 = var17[var1];
            var1 = var16.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {'left': true, 'right': true};
            var7 = _closure1_slot7;
            var12 = _closure1_slot1;
            var5 = 7;
            var5 = var17[var5];
            var6 = var12.bind(var4)(var5);
            var5 = {};
            var13 = 'button';
            var5['accessibilityRole'] = var13;
            var13 = 8;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.w4m945;
            var13 = var14.bind(var15)(var13);
            var5['accessibilityLabel'] = var13;
            var14 = _closure1_slot2;
            if(var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = 10;
            var11 = var14[var11];
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var13 = 9;
            var11 = var14[var13];
case 4:
            var11 = var12.bind(var4)(var11);
            var5['source'] = var11;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 5;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.unsafe_rawColors;
            var10 = var10.WHITE;
            var5['color'] = var10;
            var5['onPress'] = var9;
            var9 = var8.overlayButton;
            var5['style'] = var9;
            var8 = var8.overlayButtonIcon;
            var5['iconStyle'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function OverlayObscureToggleButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var11 = var1.spoilerActive;
            var9 = var1.onToggleObscure;
            var1 = _closure1_slot10;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot7;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var1 = 6;
            var1 = var17[var1];
            var1 = var16.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {'left': true, 'right': true};
            var7 = _closure1_slot7;
            var12 = _closure1_slot1;
            var5 = 7;
            var5 = var17[var5];
            var6 = var12.bind(var4)(var5);
            var5 = {};
            var13 = 'button';
            var5['accessibilityRole'] = var13;
            var13 = 8;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.UIsxUw;
            var13 = var14.bind(var15)(var13);
            var5['accessibilityLabel'] = var13;
            var14 = _closure1_slot2;
            if(var11) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var11 = 12;
            var11 = var14[var11];
            _fun0002_ip = 7; continue _fun0002;
case 5:
            var13 = 11;
            var11 = var14[var13];
case 7:
            var11 = var12.bind(var4)(var11);
            var5['source'] = var11;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 5;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.unsafe_rawColors;
            var10 = var10.WHITE;
            var5['color'] = var10;
            var5['onPress'] = var9;
            var9 = var8.overlayButton;
            var5['style'] = var9;
            var8 = var8.overlayButtonIcon;
            var5['iconStyle'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function MediaModalOverlay(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var1 = var8.getVideoControls;
            var5 = var8.source;
            var3 = var8.index;
            var _closure2_slot0 = var3;
            var4 = undefined;
            var12 = var1.bind(var4)(var3, var5);
            var _closure2_slot1 = var12;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 22;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var9 = var6.bind(var4)(var3, var5, var12);
            var7 = _closure1_slot0;
            var6 = 24;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.useMediaItemSpoilerState;
            var10 = var6.bind(var7)(var3);
            var7 = _closure1_slot3;
            var6 = 1;
            var7 = var7.bind(var4)(var10, var6);
            var6 = 0;
            var7 = var7[var6];
            var11 = _closure1_slot4;
            var10 = var11.useCallback;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 25;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.toggleSpoiler;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var10.bind(var11)(var3, var6);
            var11 = _closure1_slot4;
            var10 = var11.useEffect;
            var3 = new Array(1);
            var3[0] = var12;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setVideoStateControls;
                var2 = _closure2_slot1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var10.bind(var11)(var2, var3);
            var3 = _closure1_slot7;
            var2 = _closure1_slot11;
            var1 = {};
            var15 = var1;
            var14 = var8;
            var8 = copyDataProperties(var15, var14);
            var8 = 'slider';
            var1[7] = var9;
            var8 = 'source';
            var1[7] = var5;
            var5 = var5.obscure;
            var8 = null;
            var8 = var8 != var5;
            if(!var8) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var8 = var5;
case 8:
            var5 = 'obscure';
            var1[4] = var8;
            var5 = 'spoilerActive';
            var1[4] = var7;
            var5 = 'toggleObscure';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.StyleSheet;
    var _closure1_slot5 = var11;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var7 = var4.jsxs;
    var _closure1_slot8 = var7;
    var4 = var4.Fragment;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {};
    var15 = var11.absoluteFillObject;
    var16 = var10;
    var11 = copyDataProperties(var16, var15);
    var11 = 'top';
    var10[10] = var1;
    var13 = 'transparent';
    var11 = 'backgroundColor';
    var10[10] = var13;
    var4['portraitFooterButtons'] = var10;
    var10 = {'position': 'absolute', 'top': 4294967256, 'right': 8, 'display': 'flex', 'flexDirection': 'row'};
    var11 = 5;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_4;
    var10['gap'] = var11;
    var4['overlayIcons'] = var10;
    var10 = {'width': 20, 'height': 20};
    var4['overlayButtonIcon'] = var10;
    var10 = {'width': 32, 'height': 32, 'backgroundColor': 'rgba(0, 0, 0, 0.7)', 'borderRadius': 16};
    var4['overlayButton'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var18 = var1.slider;
            var15 = var1.onClose;
            var13 = var1.overlayEnabled;
            var17 = var1.syncer;
            var29 = var1.disableDownload;
            var26 = var1.disableMediaOverlayButton;
            var25 = var1.shareable;
            var21 = var1.contextName;
            var20 = var1.contextIcon;
            var16 = var1.source;
            var24 = var1.obscure;
            var28 = var1.spoilerActive;
            var27 = var1.toggleObscure;
            var1 = _closure1_slot10;
            var4 = undefined;
            var22 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var5 = var3[var1];
            var6 = var2.bind(var4)(var5);
            var5 = var6.useOverlayLayoutDriver;
            var31 = var5.bind(var6)();
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var1 = var5.useFooterLayoutAnimation;
            var19 = var1.bind(var5)(var31);
            var6 = _closure1_slot4;
            var5 = var6.useState;
            var1 = false;
            var6 = var5.bind(var6)(var1);
            var5 = _closure1_slot3;
            var1 = 2;
            var1 = var5.bind(var4)(var6, var1);
            var5 = 0;
            var8 = var1[var5];
            var7 = 1;
            var14 = var1[var7];
            var1 = 14;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useMediaPlayerMutedStore;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isMuted;
                return var1;
            };
            var30 = var2.bind(var3)(var1);
            var23 = null;
            if(!(var23 == var18)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var1 = var17.sources;
            var1 = var1.length;
            var1 = var1 > var7;
            var9 = null;
            if(!var1) { _fun0004_ip = 12; continue _fun0004 }
case 10:
            var3 = _closure1_slot8;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 6;
            var1 = var11[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {'bottom': true, 'left': true, 'right': true};
            var5 = {};
            var12 = 8;
            var5['paddingTop'] = var12;
            var1['style'] = var5;
            var5 = 15;
            var5 = var11[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.isIOS;
            var6 = var5.bind(var6)();
            if(!var6) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var12 = _closure1_slot7;
            var11 = _closure1_slot1;
            var32 = _closure1_slot2;
            var5 = 16;
            var5 = var32[var5];
            var11 = var11.bind(var4)(var5);
            var5 = {};
            var32 = 'dark';
            var5['blurTheme'] = var32;
            var32 = _closure1_slot5;
            var32 = var32.absoluteFill;
            var5['style'] = var32;
            var6 = var12.bind(var4)(var11, var5);
case 13:
            var5 = new Array(3);
            var5[0] = var6;
            var5[1] = var18;
            var6 = var17.sources;
            var6 = var6.length;
            var7 = var6 > var7;
            var6 = null;
            if(!var7) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var12 = _closure1_slot7;
            var11 = _closure1_slot1;
            var32 = _closure1_slot2;
            var7 = 17;
            var7 = var32[var7];
            var11 = var11.bind(var4)(var7);
            var7 = {};
            var7['syncer'] = var17;
            var6 = var12.bind(var4)(var11, var7);
case 15:
            var5[2] = var6;
            var1['children'] = var5;
            var9 = var3.bind(var4)(var2, var1);
case 12:
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 18;
            var1 = var11[var1];
            var2 = var6.bind(var4)(var1);
            var1 = var2.useMediaViewerDimensions;
            var1 = var1.bind(var2)();
            var12 = var1.height;
            var3 = _closure1_slot8;
            var2 = _closure1_slot9;
            var1 = {};
            var7 = _closure1_slot7;
            var5 = 19;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.MediaModalOverlayHeader;
            var5 = {};
            var5['animationDriver'] = var31;
            var5['disableDownload'] = var29;
            var5['disableMediaOverlayButton'] = var26;
            var5['source'] = var16;
            var5['shareable'] = var25;
            var5['contextName'] = var21;
            var5['contextIcon'] = var20;
            var5['onClose'] = var15;
            var20 = var16.channelId;
            var5['channelId'] = var20;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = _closure1_slot1;
            var6 = 20;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var20 = var22.portraitFooterButtons;
            var11 = new Array(2);
            var11[0] = var20;
            var11[1] = var19;
            var6['style'] = var11;
            var11 = !var8;
            if(!var11) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var20 = _closure1_slot7;
            var19 = _closure1_slot1;
            var21 = _closure1_slot2;
            var8 = 21;
            var8 = var21[var8];
            var19 = var19.bind(var4)(var8);
            var8 = {};
            var21 = var16.description;
            var8['description'] = var21;
            var11 = var20.bind(var4)(var19, var8);
case 17:
            var8 = new Array(3);
            var8[0] = var11;
            if(!(var23 == var18)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var11 = null;
            if(!var24) { _fun0004_ip = 21; continue _fun0004 }
case 19:
            var21 = _closure1_slot8;
            var20 = _closure1_slot6;
            var19 = {};
            var22 = var22.overlayIcons;
            var19['style'] = var22;
            var25 = var23 != var18;
            if(!var25) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var29 = _closure1_slot7;
            var26 = _closure1_slot12;
            var22 = {};
            var22['isMuted'] = var30;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var30 = 22;
            var30 = var32[var30];
            var30 = var31.bind(var4)(var30);
            var30 = var30.toggleMuted;
            var22['onToggleMute'] = var30;
            var25 = var29.bind(var4)(var26, var22);
case 22:
            var22 = new Array(2);
            var22[0] = var25;
            var23 = null;
            if(!var24) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var26 = _closure1_slot7;
            var25 = _closure1_slot13;
            var24 = {};
            var24['spoilerActive'] = var28;
            var24['onToggleObscure'] = var27;
            var23 = var26.bind(var4)(var25, var24);
case 24:
            var22[1] = var23;
            var19['children'] = var22;
            var11 = var21.bind(var4)(var20, var19);
case 21:
            var8[1] = var11;
            var11 = 600;
            if(!(!(var12 < var11))) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var12 = _closure1_slot7;
            var11 = _closure1_slot0;
            var19 = _closure1_slot2;
            var10 = 23;
            var10 = var19[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.MediaModalOverlayFooter;
            var10 = {};
            var10['sliderElement'] = var18;
            var10['syncer'] = var17;
            var17 = var16.guildId;
            var10['guildId'] = var17;
            var17 = var16.channelId;
            var10['channelId'] = var17;
            var16 = var16.messageId;
            var10['messageId'] = var16;
            var10['onClose'] = var15;
            var10['onFullViewToggled'] = var14;
            var10['overlayEnabled'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 26:
            var8[2] = var9;
            var6['children'] = var8;
            var6 = var3.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/overlay/MediaModalOverlay.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MediaModalOverlayGuard(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg1;
            var11 = var6.onIndexChange;
            var _closure2_slot0 = var11;
            var1 = null;
            var5 = Object.create(var1);
            var4 = 0;
            var5['onIndexChange'] = var4;
            var15 = {};
            var14 = var6;
            var13 = var5;
            var6 = copyDataProperties(var15, var14, var13);
            var9 = var6.syncer;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 26;
            var7 = var7[var5];
            var5 = undefined;
            var8 = var8.bind(var5)(var7);
            var7 = var8.useSelectedMediaSource;
            var9 = var7.bind(var8)(var9);
            var8 = _closure1_slot3;
            var7 = 2;
            var8 = var8.bind(var5)(var9, var7);
            var7 = var8[var4];
            var _closure2_slot1 = var7;
            var4 = 1;
            var8 = var8[var4];
            var10 = _closure1_slot4;
            var9 = var10.useEffect;
            var4 = new Array(2);
            var4[0] = var7;
            var4[1] = var11;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var9.bind(var10)(var3, var4);
            var3 = var1 == var8;
            if(var3) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var4 = _closure1_slot7;
            var3 = _closure1_slot14;
            var2 = {};
            var15 = var2;
            var14 = var6;
            var6 = copyDataProperties(var15, var14);
            var6 = 'source';
            var2[5] = var8;
            var6 = 'index';
            var2[5] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 30:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
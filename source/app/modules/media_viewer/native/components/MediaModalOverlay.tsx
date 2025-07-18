// app/modules/media_viewer/native/components/MediaModalOverlay.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function OverlayAltTextButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var12 = var1.description;
            var4 = null;
            var2 = var4 == var12;
            var1 = null;
            if(var2) { _fun0001_ip = 161; continue _fun0001 }
 22:
            var3 = var12.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0001_ip = 161; continue _fun0001 }
 38:
            var5 = _closure1_slot7;
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 5;
            var2 = var13[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.SafeAreaPaddingView;
            var2 = {};
            var6 = true;
            var2['right'] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot6;
            var6 = {};
            var10 = {'paddingVertical': 8, 'paddingHorizontal': 8};
            var6['style'] = var10;
            var11 = _closure1_slot7;
            var10 = _closure1_slot1;
            var9 = 6;
            var9 = var13[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['description'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var2['children'] = var6;
            var1 = var5.bind(var4)(var3, var2);
 161:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function OverlayMuteButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var10 = var1.isMuted;
            var9 = var1.onToggleMute;
            var4 = _closure1_slot7;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 5;
            var1 = var16[var1];
            var3 = undefined;
            var1 = var15.bind(var3)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {'left': true, 'right': true};
            var7 = _closure1_slot7;
            var11 = _closure1_slot1;
            var5 = 7;
            var5 = var16[var5];
            var6 = var11.bind(var3)(var5);
            var5 = {};
            var12 = 'button';
            var5['accessibilityRole'] = var12;
            var12 = 8;
            var13 = var16[var12];
            var13 = var15.bind(var3)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var3)(var12);
            var12 = var12.t;
            var12 = var12.w4m94+;
            var12 = var13.bind(var14)(var12);
            var5['accessibilityLabel'] = var12;
            var13 = _closure1_slot2;
            if(var10) { _fun0002_ip = 157; continue _fun0002 }
 148:
            var10 = 10;
            var10 = var13[var10];
            _fun0002_ip = 164; continue _fun0002;
 157:
            var12 = 9;
            var10 = var13[var12];
 164:
            var10 = var11.bind(var3)(var10);
            var5['source'] = var10;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 4;
            var10 = var12[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.unsafe_rawColors;
            var10 = var10.WHITE_500;
            var5['color'] = var10;
            var5['onPress'] = var9;
            var9 = _closure1_slot10;
            var9 = var9.overlayButton;
            var5['style'] = var9;
            var8 = _closure1_slot10;
            var8 = var8.overlayButtonIcon;
            var5['iconStyle'] = var8;
            var5 = var7.bind(var3)(var6, var5);
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function OverlayObscureToggleButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var10 = var1.spoilerActive;
            var9 = var1.onToggleObscure;
            var4 = _closure1_slot7;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 5;
            var1 = var16[var1];
            var3 = undefined;
            var1 = var15.bind(var3)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {'left': true, 'right': true};
            var7 = _closure1_slot7;
            var11 = _closure1_slot1;
            var5 = 7;
            var5 = var16[var5];
            var6 = var11.bind(var3)(var5);
            var5 = {};
            var12 = 'button';
            var5['accessibilityRole'] = var12;
            var12 = 8;
            var13 = var16[var12];
            var13 = var15.bind(var3)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var3)(var12);
            var12 = var12.t;
            var12 = var12.UIsxU1;
            var12 = var13.bind(var14)(var12);
            var5['accessibilityLabel'] = var12;
            var13 = _closure1_slot2;
            if(var10) { _fun0003_ip = 159; continue _fun0003 }
 150:
            var10 = 12;
            var10 = var13[var10];
            _fun0003_ip = 166; continue _fun0003;
 159:
            var12 = 11;
            var10 = var13[var12];
 166:
            var10 = var11.bind(var3)(var10);
            var5['source'] = var10;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 4;
            var10 = var12[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.unsafe_rawColors;
            var10 = var10.WHITE_500;
            var5['color'] = var10;
            var5['onPress'] = var9;
            var9 = _closure1_slot10;
            var9 = var9.overlayButton;
            var5['style'] = var9;
            var8 = _closure1_slot10;
            var8 = var8.overlayButtonIcon;
            var5['iconStyle'] = var8;
            var5 = var7.bind(var3)(var6, var5);
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
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
    var4 = native4;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.StyleSheet;
    var _closure1_slot5 = var9;
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
    var7 = var9.create;
    var4 = {};
    var10 = {};
    var15 = var9.absoluteFillObject;
    var16 = var10;
    var11 = copyDataProperties(var16, var15);
    var11 = 'top';
    var10[var11] = var1;
    var13 = 'rgba(0, 0, 0, .8)';
    var11 = 'backgroundColor';
    var10[var11] = var13;
    var4['portraitFooterButtons'] = var10;
    var10 = {'width': 18, 'height': 18, 'marginRight': 6};
    var4['contextIcon'] = var10;
    var10 = {'position': 'absolute', 'top': 4294967256, 'right': 8, 'display': 'flex', 'flexDirection': 'row'};
    var11 = 4;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
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
 0:
            var1 = arg1;
            var18 = var1.slider;
            var15 = var1.onClose;
            var13 = var1.overlayEnabled;
            var17 = var1.syncer;
            var31 = var1.disableDownload;
            var29 = var1.disableRemix;
            var26 = var1.disableMediaOverlayButton;
            var25 = var1.shareable;
            var22 = var1.contextName;
            var21 = var1.contextIcon;
            var16 = var1.source;
            var20 = var1.setClickedRemix;
            var24 = var1.obscure;
            var28 = var1.spoilerActive;
            var27 = var1.toggleObscure;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 13;
            var2 = var5[var1];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var2 = var6.useOverlayLayoutDriver;
            var32 = var2.bind(var6)();
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useFooterLayoutAnimation;
            var19 = var1.bind(var2)(var32);
            var6 = _closure1_slot4;
            var2 = var6.useState;
            var1 = false;
            var6 = var2.bind(var6)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var1 = var2.bind(var4)(var6, var1);
            var2 = 0;
            var8 = var1[var2];
            var7 = 1;
            var14 = var1[var7];
            var1 = 14;
            var1 = var5[var1];
            var6 = var3.bind(var4)(var1);
            var2 = var6.useMediaPlayerMutedStore;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isMuted;
                return var1;
            };
            var30 = var2.bind(var6)(var1);
            var1 = 15;
            var2 = var5[var1];
            var6 = var3.bind(var4)(var2);
            var2 = var6.useOrientation;
            var2 = var2.bind(var6)();
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.OrientationType;
            var1 = var1.LANDSCAPE;
            var11 = var2 === var1;
            var23 = null;
            if(!(var23 == var18)) { _fun0004_ip = 299; continue _fun0004 }
 276:
            var1 = var17.sources;
            var1 = var1.length;
            var1 = var1 > var7;
            var9 = null;
            if(!var1) { _fun0004_ip = 520; continue _fun0004 }
 299:
            var3 = _closure1_slot8;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 5;
            var1 = var12[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {'bottom': true, 'left': true, 'right': true};
            var5 = {};
            var33 = 8;
            var5['paddingTop'] = var33;
            var1['style'] = var5;
            var5 = 16;
            var5 = var12[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.isIOS;
            var6 = var5.bind(var6)();
            if(!var6) { _fun0004_ip = 437; continue _fun0004 }
 382:
            var33 = _closure1_slot7;
            var12 = _closure1_slot1;
            var34 = _closure1_slot2;
            var5 = 17;
            var5 = var34[var5];
            var12 = var12.bind(var4)(var5);
            var5 = {};
            var34 = 'dark';
            var5['blurTheme'] = var34;
            var34 = _closure1_slot5;
            var34 = var34.absoluteFill;
            var5['style'] = var34;
            var6 = var33.bind(var4)(var12, var5);
 437:
            var5 = new Array(3);
            var5[0] = var6;
            var5[1] = var18;
            var6 = var17.sources;
            var6 = var6.length;
            var7 = var6 > var7;
            var6 = null;
            if(!var7) { _fun0004_ip = 506; continue _fun0004 }
 469:
            var33 = _closure1_slot7;
            var12 = _closure1_slot1;
            var34 = _closure1_slot2;
            var7 = 18;
            var7 = var34[var7];
            var12 = var12.bind(var4)(var7);
            var7 = {};
            var7['syncer'] = var17;
            var6 = var33.bind(var4)(var12, var7);
 506:
            var5[2] = var6;
            var1['children'] = var5;
            var9 = var3.bind(var4)(var2, var1);
 520:
            var3 = _closure1_slot8;
            var2 = _closure1_slot9;
            var1 = {};
            var7 = _closure1_slot7;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 19;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.MediaModalHeader;
            var5 = {};
            var5['animationDriver'] = var32;
            var5['disableDownload'] = var31;
            var5['disableRemix'] = var29;
            var5['disableMediaOverlayButton'] = var26;
            var5['source'] = var16;
            var5['shareable'] = var25;
            var5['contextName'] = var22;
            var5['contextIcon'] = var21;
            var5['onClose'] = var15;
            var21 = var16.channelId;
            var5['channelId'] = var21;
            var5['setClickedRemix'] = var20;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = _closure1_slot1;
            var6 = 20;
            var6 = var12[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var12 = _closure1_slot10;
            var20 = var12.portraitFooterButtons;
            var12 = new Array(3);
            var12[0] = var20;
            var12[1] = var19;
            var19 = {};
            var20 = 'transparent';
            if(!var11) { _fun0004_ip = 703; continue _fun0004 }
 688:
            var21 = _closure1_slot10;
            var21 = var21.portraitFooterButtons;
            var20 = var21.backgroundColor;
 703:
            var19['backgroundColor'] = var20;
            var12[2] = var19;
            var6['style'] = var12;
            var12 = !var8;
            if(!var12) { _fun0004_ip = 753; continue _fun0004 }
 721:
            var21 = _closure1_slot7;
            var20 = _closure1_slot12;
            var19 = {};
            var8 = var16.description;
            var19['description'] = var8;
            var8 = var16.uri;
            var12 = var21.bind(var4)(var20, var19, var8);
 753:
            var8 = new Array(3);
            var8[0] = var12;
            if(!(var23 == var18)) { _fun0004_ip = 773; continue _fun0004 }
 765:
            var12 = null;
            if(!var24) { _fun0004_ip = 909; continue _fun0004 }
 773:
            var21 = _closure1_slot8;
            var20 = _closure1_slot6;
            var19 = {};
            var22 = _closure1_slot10;
            var22 = var22.overlayIcons;
            var19['style'] = var22;
            var25 = var23 != var18;
            if(!var25) { _fun0004_ip = 856; continue _fun0004 }
 804:
            var29 = _closure1_slot7;
            var26 = _closure1_slot13;
            var22 = {};
            var22['isMuted'] = var30;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var30 = 21;
            var30 = var32[var30];
            var30 = var31.bind(var4)(var30);
            var30 = var30.toggleMuted;
            var22['onToggleMute'] = var30;
            var25 = var29.bind(var4)(var26, var22);
 856:
            var22 = new Array(2);
            var22[0] = var25;
            var23 = null;
            if(!var24) { _fun0004_ip = 895; continue _fun0004 }
 869:
            var26 = _closure1_slot7;
            var25 = _closure1_slot14;
            var24 = {};
            var24['spoilerActive'] = var28;
            var24['onToggleObscure'] = var27;
            var23 = var26.bind(var4)(var25, var24);
 895:
            var22[1] = var23;
            var19['children'] = var22;
            var12 = var21.bind(var4)(var20, var19);
 909:
            var8[1] = var12;
            if(var11) { _fun0004_ip = 1000; continue _fun0004 }
 916:
            var12 = _closure1_slot7;
            var11 = _closure1_slot1;
            var19 = _closure1_slot2;
            var10 = 22;
            var10 = var19[var10];
            var11 = var11.bind(var4)(var10);
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
 1000:
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
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/MediaModalOverlay.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MediaModalOverlay(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var8 = arg1;
            var6 = var8.getVideoControls;
            var7 = var8.syncer;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 23;
            var3 = var14[var3];
            var4 = undefined;
            var5 = var13.bind(var4)(var3);
            var3 = var5.useSelectedMediaSource;
            var5 = var3.bind(var5)(var7);
            var11 = _closure1_slot3;
            var3 = 2;
            var5 = var11.bind(var4)(var5, var3);
            var7 = 0;
            var3 = var5[var7];
            var _closure2_slot0 = var3;
            var10 = 1;
            var5 = var5[var10];
            var12 = var6.bind(var4)(var3, var5);
            var _closure2_slot1 = var12;
            var9 = _closure1_slot1;
            var6 = 21;
            var6 = var14[var6];
            var6 = var9.bind(var4)(var6);
            var9 = var6.bind(var4)(var3, var5, var12);
            var6 = 24;
            var6 = var14[var6];
            var13 = var13.bind(var4)(var6);
            var6 = var13.useMediaItemSpoilerState;
            var6 = var6.bind(var13)(var3);
            var6 = var11.bind(var4)(var6, var10);
            var7 = var6[var7];
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
            var10 = var11.useEffect;
            var3 = new Array(1);
            var3[0] = var12;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
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
            var17 = var1;
            var16 = var8;
            var8 = copyDataProperties(var17, var16);
            var8 = 'slider';
            var1[var8] = var9;
            var8 = 'source';
            var1[var8] = var5;
            var5 = var5.obscure;
            var8 = null;
            var8 = var8 != var5;
            if(!var8) { _fun0005_ip = 261; continue _fun0005 }
 258:
            var8 = var5;
 261:
            var5 = 'obscure';
            var1[var5] = var8;
            var5 = 'spoilerActive';
            var1[var5] = var7;
            var5 = 'toggleObscure';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['MediaModalOverlay'] = var2;
    return var1;
})();
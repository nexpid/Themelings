// app/modules/quests/native/BountyCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var9 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var9;
        var _closure1_slot2 = var6;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var4 = 0;
        var7 = var6[var4];
        var1 = undefined;
        var7 = var9.bind(var1)(var7);
        var _closure1_slot3 = var7;
        var7 = 1;
        var8 = var6[var7];
        var7 = metroImportAll;
        var7 = var7.bind(var1)(var8);
        var _closure1_slot4 = var7;
        var8 = 2;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var10 = var8.StyleSheet;
        var _closure1_slot5 = var10;
        var8 = var8.View;
        var _closure1_slot6 = var8;
        var8 = 3;
        var8 = var6[var8];
        var8 = var9.bind(var1)(var8);
        var _closure1_slot7 = var8;
        var8 = 4;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var9 = var8.jsx;
        var _closure1_slot8 = var9;
        var8 = var8.jsxs;
        var _closure1_slot9 = var8;
        var8 = 5;
        var8 = var6[var8];
        var10 = var5.bind(var1)(var8);
        var9 = var10.createStyles;
        var8 = function() {
            var1 = {};
            var2 = {};
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 6;
            var8 = var6[var3];
            var4 = undefined;
            var8 = var5.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_12;
            var2['gap'] = var8;
            var1['tile'] = var2;
            var2 = {'width': 188, 'height': 296, 'overflow': 'hidden', 'padding': 0};
            var1['card'] = var2;
            var2 = {};
            var7 = _closure1_slot5;
            var9 = var7.absoluteFillObject;
            var10 = var2;
            var8 = copyDataProperties(var10, var9);
            var1['cardImage'] = var2;
            var2 = {};
            var9 = var7.absoluteFillObject;
            var10 = var2;
            var7 = copyDataProperties(var10, var9);
            var1['previewVideo'] = var2;
            var2 = {};
            var7 = 'absolute';
            var2['position'] = var7;
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_12;
            var2['top'] = var8;
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_12;
            var2['left'] = var8;
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.colors;
            var8 = var8.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT;
            var2['backgroundColor'] = var8;
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.radii;
            var8 = var8.round;
            var2['borderRadius'] = var8;
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_8;
            var2['paddingHorizontal'] = var8;
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_4;
            var2['paddingVertical'] = var8;
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.colors;
            var8 = var8.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT;
            var2['color'] = var8;
            var1['badge'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center'};
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_4;
            var2['gap'] = var8;
            var1['badgeContent'] = var2;
            var2 = {};
            var8 = '#97979f33';
            var2['backgroundColor'] = var8;
            var1['badgeCompleted'] = var2;
            var2 = {};
            var8 = 'uppercase';
            var2['textTransform'] = var8;
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.colors;
            var8 = var8.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT;
            var2['color'] = var8;
            var1['badgeText'] = var2;
            var2 = {};
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.colors;
            var8 = var8.WHITE;
            var2['color'] = var8;
            var1['badgeTextCompleted'] = var2;
            var2 = {};
            var2['position'] = var7;
            var7 = var6[var3];
            var7 = var5.bind(var4)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_8;
            var2['bottom'] = var7;
            var7 = var6[var3];
            var7 = var5.bind(var4)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_8;
            var2['left'] = var7;
            var7 = var6[var3];
            var7 = var5.bind(var4)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_8;
            var2['right'] = var7;
            var1['startButton'] = var2;
            var2 = {'flexDirection': 'column', 'alignItems': 'flex-start', 'maxWidth': 188};
            var1['cardFooter'] = var2;
            var2 = {'flexDirection': 'row', 'gap': null, 'alignItems': 'center'};
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_4;
            var2['gap'] = var3;
            var1['advertiserRow'] = var2;
            var2 = {};
            var3 = 1;
            var2['flexShrink'] = var3;
            var1['advertiserName'] = var2;
            var2 = {'flexShrink': 0, 'opacity': 0.7};
            var1['advertiserIcon'] = var2;
            return var1;
        };
        var8 = var9.bind(var10)(var8);
        var _closure1_slot10 = var8;
        var8 = 7;
        var8 = var6[var8];
        var9 = var5.bind(var1)(var8);
        var8 = var9.isAndroid;
        var8 = var8.bind(var9)();
        if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = 150;
case 2:
        var _closure1_slot11 = var4;
        var4 = var7.memo;
        var2 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var15 = var2.bounty;
                var _closure2_slot0 = var15;
                var5 = var2.isActive;
                var _closure2_slot1 = var5;
                var2 = var2.onPress;
                var _closure2_slot2 = var2;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var3 = _closure1_slot10;
                var19 = var3.bind(var4)();
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 8;
                var3 = var7[var3];
                var8 = var6.bind(var4)(var3);
                var7 = var8.useStateFromStores;
                var3 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() {
                    var3 = _closure1_slot7;
                    var2 = var3.isBountyCompleted;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var20 = var7.bind(var8)(var6, var3);
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var3 = new Array(2);
                var3[0] = var2;
                var3[1] = var15;
                var2 = function() {
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var16 = var6.bind(var7)(var2, var3);
                var21 = var15.videoPreview;
                var13 = var15.imagePreview;
                var14 = null;
                var2 = var14 == var13;
                if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = var14 != var21;
case 4:
                if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 9;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.convertVideoToFirstFrameImageWithMediaProxy;
                var13 = var2.bind(var3)(var21);
case 6:
                var23 = _closure1_slot4;
                var2 = var23.useState;
                var7 = false;
                var2 = var2.bind(var23)(var7);
                var22 = _closure1_slot3;
                var17 = 2;
                var2 = var22.bind(var4)(var2, var17);
                var9 = 0;
                var3 = var2[var9];
                var10 = 1;
                var2 = var2[var10];
                _closure2_slot3 = var2;
                var8 = var23.useCallback;
                var6 = function() {
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = new Array(0);
                var11 = var8.bind(var23)(var6, var2);
                var2 = var23.useState;
                var2 = var2.bind(var23)(var7);
                var6 = var22.bind(var4)(var2, var17);
                var2 = var6[var9];
                var6 = var6[var10];
                _closure2_slot4 = var6;
                var8 = var23.useRef;
                var8 = var8.bind(var23)(var14);
                _closure2_slot5 = var8;
                var24 = var23.useCallback;
                var12 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure2_slot5;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var2 = global;
                        var4 = var2.clearTimeout;
                        var2 = _closure2_slot5;
                        var3 = var2.current;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
case 8:
                        var3 = _closure2_slot5;
                        var1 = global;
                        var5 = var1.setTimeout;
                        var4 = _closure1_slot11;
                        var1 = undefined;
                        var2 = function() {
                            var3 = _closure2_slot4;
                            var1 = undefined;
                            var2 = true;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2 = var5.bind(var1)(var2, var4);
                        var3['current'] = var2;
                        return var1;
                    }
                };
                var8 = new Array(0);
                var12 = var24.bind(var23)(var12, var8);
                var8 = var23.useState;
                var8 = var8.bind(var23)(var5);
                var8 = var22.bind(var4)(var8, var17);
                var9 = var8[var9];
                var8 = var8[var10];
                if(!(var5 !== var9)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var8 = var8.bind(var4)(var5);
                if(var5) { _fun0002_ip = 10; continue _fun0002 }
case 12:
                var6 = var6.bind(var4)(var7);
case 10:
                var9 = _closure1_slot4;
                var8 = var9.useEffect;
                var7 = new Array(1);
                var7[0] = var5;
                var6 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure2_slot1;
                        if(var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var3 = _closure2_slot5;
                        var4 = var3.current;
                        var3 = null;
                        var2 = var3 == var4;
case 13:
                        if(var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                        var2 = global;
                        var4 = var2.clearTimeout;
                        var2 = _closure2_slot5;
                        var3 = var2.current;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = _closure2_slot5;
                        var1 = null;
                        var2['current'] = var1;
case 15:
                        var1 = undefined;
                        return var1;
                    }
                };
                var6 = var8.bind(var9)(var6, var7);
                var8 = var9.useEffect;
                var7 = function() {
                    var1 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = _closure2_slot5;
                            var3 = var2.current;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0005_ip = 17; continue _fun0005 }
case 9:
                            var3 = global;
                            var5 = var3.clearTimeout;
                            var3 = _closure2_slot5;
                            var4 = var3.current;
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            var1 = _closure2_slot5;
                            var1['current'] = var2;
case 17:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                };
                var6 = new Array(0);
                var6 = var8.bind(var9)(var7, var6);
                var8 = var5;
                if(!var8) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var8 = var14 != var21;
case 18:
                if(!var8) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var8 = var3;
case 20:
                var6 = var8;
                if(!var8) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                var6 = var2;
case 22:
                _closure2_slot6 = var6;
                var5 = _closure1_slot4;
                var3 = var5.useMemo;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = {};
                        var3 = _closure2_slot6;
                        var2 = 1;
                        if(!var3) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                        var2 = 0;
case 24:
                        var1['opacity'] = var2;
                        return var1;
                    }
                };
                var17 = var3.bind(var5)(var1, var2);
                var3 = _closure1_slot9;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = var19.tile;
                var1['style'] = var5;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 10;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Card;
                var5 = {};
                var7 = var19.card;
                var5['style'] = var7;
                var7 = 24;
                var5['radius'] = var7;
                var5['onPress'] = var16;
                if(!var8) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                var10 = _closure1_slot8;
                var9 = _closure1_slot1;
                var22 = _closure1_slot2;
                var7 = 11;
                var7 = var22[var7];
                var9 = var9.bind(var4)(var7);
                var7 = {'onReadyForDisplay': null, 'source': null, 'style': null, 'resizeMode': 'cover', 'repeat': true, 'muted': true};
                var7['onReadyForDisplay'] = var12;
                var12 = {};
                var12['uri'] = var21;
                var7['source'] = var12;
                var12 = var19.previewVideo;
                var7['style'] = var12;
                var8 = var10.bind(var4)(var9, var7);
case 26:
                var7 = new Array(4);
                var7[0] = var8;
                var10 = _closure1_slot8;
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 12;
                var8 = var12[var8];
                var9 = var9.bind(var4)(var8);
                var8 = {};
                var21 = var19.cardImage;
                var12 = new Array(2);
                var12[0] = var21;
                var12[1] = var17;
                var8['style'] = var12;
                var8['onLoad'] = var11;
                var11 = {};
                var17 = var14 != var13;
                var12 = undefined;
                if(!var17) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                var12 = var13;
case 28:
                var11['uri'] = var12;
                var8['source'] = var11;
                var11 = 'cover';
                var8['resizeMode'] = var11;
                var8 = var10.bind(var4)(var9, var8);
                var7[1] = var8;
                var11 = _closure1_slot8;
                var9 = _closure1_slot6;
                var8 = {};
                var12 = var19.badge;
                var10 = new Array(2);
                var10[0] = var12;
                var12 = var20;
                if(!var20) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                var12 = var19.badgeCompleted;
case 30:
                var10[1] = var12;
                var8['style'] = var10;
                var21 = _closure1_slot9;
                var13 = _closure1_slot6;
                var12 = {};
                var10 = var19.badgeContent;
                var12['style'] = var10;
                var10 = var20;
                if(!var20) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                var23 = _closure1_slot8;
                var22 = _closure1_slot0;
                var26 = _closure1_slot2;
                var17 = 13;
                var17 = var26[var17];
                var17 = var22.bind(var4)(var17);
                var22 = var17.CheckmarkSmallBoldIcon;
                var17 = {};
                var24 = 'xxs';
                var17['size'] = var24;
                var25 = _closure1_slot1;
                var24 = 6;
                var24 = var26[var24];
                var24 = var25.bind(var4)(var24);
                var24 = var24.colors;
                var24 = var24.WHITE;
                var17['color'] = var24;
                var10 = var23.bind(var4)(var22, var17);
case 32:
                var22 = new Array(2);
                var22[0] = var10;
                var25 = _closure1_slot8;
                var23 = _closure1_slot0;
                var17 = _closure1_slot2;
                var10 = 14;
                var17 = var17[var10];
                var17 = var23.bind(var4)(var17);
                var24 = var17.Text;
                var23 = {};
                var17 = 'text-xs/bold';
                var23['variant'] = var17;
                var26 = var19.badgeText;
                var17 = new Array(2);
                var17[0] = var26;
                var26 = var20;
                if(!var26) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                var26 = var19.badgeTextCompleted;
case 34:
                var17[1] = var26;
                var23['style'] = var17;
                var27 = _closure1_slot0;
                var26 = _closure1_slot2;
                var17 = 15;
                var26 = var26[var17];
                var26 = var27.bind(var4)(var26);
                var28 = var26.intl;
                var27 = var28.string;
                var29 = _closure1_slot0;
                var26 = _closure1_slot2;
                var26 = var26[var17];
                var26 = var29.bind(var4)(var26);
                var29 = var26.t;
                if(var20) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                var26 = var29.fFIJ/9;
                _fun0002_ip = 38; continue _fun0002;
case 36:
                var26 = var29.vlGTLf;
case 38:
                var26 = var27.bind(var28)(var26);
                var23['children'] = var26;
                var23 = var25.bind(var4)(var24, var23);
                var22[1] = var23;
                var12['children'] = var22;
                var12 = var21.bind(var4)(var13, var12);
                var8['children'] = var12;
                var8 = var11.bind(var4)(var9, var8);
                var7[2] = var8;
                var11 = _closure1_slot8;
                var9 = _closure1_slot6;
                var8 = {};
                var12 = var19.startButton;
                var8['style'] = var12;
                var13 = _closure1_slot0;
                var21 = _closure1_slot2;
                var12 = 16;
                var12 = var21[var12];
                var12 = var13.bind(var4)(var12);
                var13 = var12.Button;
                var12 = {};
                var21 = 'secondary-overlay';
                var12['variant'] = var21;
                if(var20) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                var20 = var15.cta;
                var20 = var20.buttonLabel;
                _fun0002_ip = 41; continue _fun0002;
case 39:
                var24 = _closure1_slot0;
                var21 = _closure1_slot2;
                var22 = var21[var17];
                var22 = var24.bind(var4)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var21[var17];
                var21 = var24.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21["9UtZAY"];
                var20 = var22.bind(var23)(var21);
case 41:
                var12['text'] = var20;
                var12['onPress'] = var16;
                var12 = var11.bind(var4)(var13, var12);
                var8['children'] = var12;
                var8 = var11.bind(var4)(var9, var8);
                var7[3] = var8;
                var5['children'] = var7;
                var6 = var3.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot9;
                var7 = _closure1_slot6;
                var6 = {};
                var9 = var19.cardFooter;
                var6['style'] = var9;
                var9 = {};
                var11 = var19.advertiserRow;
                var9['style'] = var11;
                var13 = _closure1_slot8;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var10];
                var11 = var12.bind(var4)(var11);
                var12 = var11.Text;
                var11 = {'variant': 'text-sm/medium', 'color': 'text-subtle', 'lineClamp': 1};
                var16 = var19.advertiserName;
                var11['style'] = var16;
                var15 = var15.advertiserName;
                var16 = var14 != var15;
                var14 = '';
                if(!var16) { _fun0002_ip = 42; continue _fun0002 }
case 43:
                var14 = var15;
case 42:
                var11['children'] = var14;
                var12 = var13.bind(var4)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var12 = _closure1_slot8;
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var14 = 17;
                var14 = var13[var14];
                var14 = var16.bind(var4)(var14);
                var15 = var14.CircleCheckIcon;
                var14 = {};
                var20 = 'xxs';
                var14['size'] = var20;
                var19 = var19.advertiserIcon;
                var14['style'] = var19;
                var19 = _closure1_slot1;
                var18 = 6;
                var18 = var13[var18];
                var18 = var19.bind(var4)(var18);
                var18 = var18.colors;
                var18 = var18.ICON_SUBTLE;
                var14['color'] = var18;
                var14 = var12.bind(var4)(var15, var14);
                var11[1] = var14;
                var9['children'] = var11;
                var11 = var8.bind(var4)(var7, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var10 = var13[var10];
                var10 = var16.bind(var4)(var10);
                var11 = var10.Text;
                var10 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                var14 = var13[var17];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var17];
                var13 = var16.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.o6FLcF;
                var13 = var14.bind(var15)(var13);
                var10['children'] = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[1] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var2 = var4.bind(var7)(var2);
        var4 = 18;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/quests/native/BountyCard.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        var2 = 188;
        var3['CARD_WIDTH'] = var2;
        return var1;
    }
})();
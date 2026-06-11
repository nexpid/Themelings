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
        var8 = 0;
        var4 = var6[var8];
        var1 = undefined;
        var4 = var9.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var7 = var6[var4];
        var4 = metroImportAll;
        var7 = var4.bind(var1)(var7);
        var _closure1_slot4 = var7;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var10 = var4.AppState;
        var _closure1_slot5 = var10;
        var10 = var4.StyleSheet;
        var _closure1_slot6 = var10;
        var4 = var4.View;
        var _closure1_slot7 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var9.bind(var1)(var4);
        var _closure1_slot8 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var9.bind(var1)(var4);
        var _closure1_slot9 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var9 = var4.jsx;
        var _closure1_slot10 = var9;
        var4 = var4.jsxs;
        var _closure1_slot11 = var4;
        var4 = 6;
        var4 = var6[var4];
        var10 = var5.bind(var1)(var4);
        var9 = var10.createStyles;
        var4 = function() {
            var1 = {};
            var2 = {};
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 7;
            var8 = var6[var3];
            var4 = undefined;
            var8 = var5.bind(var4)(var8);
            var8 = var8.space;
            var8 = var8.PX_12;
            var2['gap'] = var8;
            var1['tile'] = var2;
            var2 = {'width': 188, 'height': 313, 'overflow': 'hidden', 'padding': 0};
            var1['card'] = var2;
            var2 = {};
            var7 = _closure1_slot6;
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
            var8 = var8.space;
            var8 = var8.PX_12;
            var2['top'] = var8;
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.space;
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
            var8 = var8.space;
            var8 = var8.PX_8;
            var2['paddingHorizontal'] = var8;
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.space;
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
            var8 = var8.space;
            var8 = var8.PX_4;
            var2['gap'] = var8;
            var1['badgeContent'] = var2;
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
            var2['position'] = var7;
            var7 = var6[var3];
            var7 = var5.bind(var4)(var7);
            var7 = var7.space;
            var7 = var7.PX_8;
            var2['bottom'] = var7;
            var7 = var6[var3];
            var7 = var5.bind(var4)(var7);
            var7 = var7.space;
            var7 = var7.PX_8;
            var2['left'] = var7;
            var7 = var6[var3];
            var7 = var5.bind(var4)(var7);
            var7 = var7.space;
            var7 = var7.PX_8;
            var2['right'] = var7;
            var1['startButton'] = var2;
            var2 = {'flexDirection': 'column', 'alignItems': 'flex-start', 'maxWidth': 188};
            var1['cardFooter'] = var2;
            var2 = {'flexDirection': 'row', 'gap': null, 'alignItems': 'center'};
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.space;
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
        var4 = var9.bind(var10)(var4);
        var _closure1_slot12 = var4;
        var4 = 8;
        var9 = var6[var4];
        var10 = var5.bind(var1)(var9);
        var9 = var10.isAndroid;
        var9 = var9.bind(var10)();
        if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var8 = 150;
case 2:
        var _closure1_slot13 = var8;
        var8 = var6[var4];
        var9 = var5.bind(var1)(var8);
        var8 = var9.isAndroid;
        var8 = var8.bind(var9)();
        var _closure1_slot14 = var8;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var4 = var8.isAndroid;
        var4 = var4.bind(var8)();
        var _closure1_slot15 = var4;
        var4 = var7.memo;
        var2 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var15 = var3.bounty;
                var _closure2_slot0 = var15;
                var2 = var3.index;
                var _closure2_slot1 = var2;
                var5 = var3.isActive;
                var _closure2_slot2 = var5;
                var9 = var3.isModalVisible;
                var8 = var3.onPress;
                var _closure2_slot3 = var8;
                var4 = undefined;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var3 = _closure1_slot12;
                var20 = var3.bind(var4)();
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var18 = 9;
                var3 = var3[var18];
                var10 = var6.bind(var4)(var3);
                var7 = var10.useStateFromStores;
                var3 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() {
                    var3 = _closure1_slot9;
                    var2 = var3.isBountyCompleted;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var21 = var7.bind(var10)(var6, var3);
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var3 = new Array(3);
                var3[0] = var8;
                var3[1] = var15;
                var3[2] = var2;
                var2 = function() {
                    var4 = _closure2_slot3;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var16 = var6.bind(var7)(var2, var3);
                var24 = var15.videoPreview;
                var2 = var15.imagePreview;
                var14 = null;
                var2 = var14 != var2;
                var13 = null;
                if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 10;
                var2 = var6[var2];
                var6 = var3.bind(var4)(var2);
                var3 = var6.getScaledImageUrl;
                var2 = {'assetUrl': null, 'width': 188, 'height': 313};
                var7 = var15.imagePreview;
                var2['assetUrl'] = var7;
                var13 = var3.bind(var6)(var2);
case 4:
                var2 = var14 == var13;
                if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var2 = var14 != var24;
case 6:
                if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 10;
                var2 = var6[var2];
                var6 = var3.bind(var4)(var2);
                var3 = var6.getScaledFirstFrameImageUrl;
                var2 = {'assetUrl': null, 'width': 188, 'height': 313};
                var2['assetUrl'] = var24;
                var13 = var3.bind(var6)(var2);
case 8:
                var29 = _closure1_slot4;
                var2 = var29.useState;
                var17 = false;
                var2 = var2.bind(var29)(var17);
                var28 = _closure1_slot3;
                var26 = 2;
                var2 = var28.bind(var4)(var2, var26);
                var12 = 0;
                var6 = var2[var12];
                var10 = 1;
                var2 = var2[var10];
                _closure2_slot4 = var2;
                var7 = var29.useCallback;
                var3 = function() {
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = new Array(0);
                var11 = var7.bind(var29)(var3, var2);
                var2 = var29.useState;
                var2 = var2.bind(var29)(var17);
                var3 = var28.bind(var4)(var2, var26);
                var2 = var3[var12];
                var25 = var3[var10];
                _closure2_slot5 = var25;
                var3 = var29.useState;
                var3 = var3.bind(var29)(var17);
                var7 = var28.bind(var4)(var3, var26);
                var3 = var7[var12];
                _closure2_slot6 = var3;
                var8 = var7[var10];
                _closure2_slot7 = var8;
                var23 = _closure1_slot0;
                var7 = _closure1_slot2;
                var18 = var7[var18];
                var30 = var23.bind(var4)(var18);
                var27 = var30.useStateFromStores;
                var18 = _closure1_slot8;
                var22 = new Array(1);
                var22[0] = var18;
                var18 = function() {
                    var1 = _closure1_slot8;
                    var1 = var1.useReducedMotion;
                    return var1;
                };
                var22 = var27.bind(var30)(var22, var18);
                var18 = 11;
                var18 = var7[var18];
                var27 = var23.bind(var4)(var18);
                var23 = var27.useToken;
                var30 = _closure1_slot1;
                var18 = 7;
                var7 = var7[var18];
                var7 = var30.bind(var4)(var7);
                var7 = var7.modules;
                var7 = var7.mobile;
                var7 = var7.BOUNTY_TILE_BORDER_RADIUS;
                var7 = var23.bind(var27)(var7);
                var23 = var29.useRef;
                var23 = var23.bind(var29)(var14);
                _closure2_slot8 = var23;
                var30 = var29.useCallback;
                var27 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure2_slot8;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var2 = global;
                        var4 = var2.clearTimeout;
                        var2 = _closure2_slot8;
                        var3 = var2.current;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
case 10:
                        var3 = _closure2_slot8;
                        var1 = global;
                        var5 = var1.setTimeout;
                        var4 = _closure1_slot13;
                        var1 = undefined;
                        var2 = function() {
                            var3 = _closure2_slot5;
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
                var23 = new Array(0);
                var23 = var30.bind(var29)(var27, var23);
                var27 = var29.useState;
                var27 = var27.bind(var29)(var5);
                var27 = var28.bind(var4)(var27, var26);
                var28 = var27[var12];
                var27 = var27[var10];
                if(!(var5 !== var28)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var27 = var27.bind(var4)(var5);
                if(var5) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var27 = _closure1_slot14;
                if(!var27) { _fun0002_ip = 12; continue _fun0002 }
case 16:
                var27 = true;
                var27 = var8.bind(var4)(var27);
                _fun0002_ip = 12; continue _fun0002;
case 14:
                var27 = var2;
                if(!var2) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var27 = !var3;
case 17:
                if(!var27) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var25 = var25.bind(var4)(var17);
case 19:
                if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 21:
                var8 = var8.bind(var4)(var17);
case 12:
                var25 = _closure1_slot4;
                var8 = var25.useRef;
                var8 = var8.bind(var25)(var14);
                _closure2_slot9 = var8;
                var27 = var25.useEffect;
                var17 = new Array(1);
                var17[0] = var3;
                var8 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure2_slot6;
                        if(!var3) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                        var3 = _closure2_slot9;
                        var2 = global;
                        var6 = var2.setTimeout;
                        var5 = undefined;
                        var4 = function() {
                            var3 = _closure2_slot7;
                            var1 = undefined;
                            var4 = false;
                            var3 = var3.bind(var1)(var4);
                            var3 = _closure2_slot5;
                            var3 = var3.bind(var1)(var4);
                            var3 = _closure2_slot9;
                            var2 = null;
                            var3['current'] = var2;
                            return var1;
                        };
                        var2 = 150;
                        var2 = var6.bind(var5)(var4, var2);
                        var3['current'] = var2;
case 22:
                        var1 = function() {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var2 = _closure2_slot9;
                                var3 = var2.current;
                                var2 = null;
                                if(!(var2 != var3)) { _fun0005_ip = 24; continue _fun0005 }
case 11:
                                var3 = global;
                                var5 = var3.clearTimeout;
                                var3 = _closure2_slot9;
                                var4 = var3.current;
                                var3 = undefined;
                                var3 = var5.bind(var3)(var4);
                                var1 = _closure2_slot9;
                                var1['current'] = var2;
case 24:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        return var1;
                    }
                };
                var8 = var27.bind(var25)(var8, var17);
                var27 = var25.useEffect;
                var17 = new Array(1);
                var17[0] = var5;
                var8 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure2_slot2;
                        if(!var2) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                        var3 = _closure2_slot9;
                        var4 = var3.current;
                        var3 = null;
                        var2 = var3 != var4;
case 25:
                        if(!var2) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                        var2 = global;
                        var4 = var2.clearTimeout;
                        var2 = _closure2_slot9;
                        var3 = var2.current;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var3 = _closure2_slot9;
                        var2 = null;
                        var3['current'] = var2;
case 27:
                        var2 = _closure2_slot2;
                        if(var2) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                        var3 = _closure2_slot8;
                        var4 = var3.current;
                        var3 = null;
                        var2 = var3 == var4;
case 29:
                        if(var2) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                        var2 = global;
                        var4 = var2.clearTimeout;
                        var2 = _closure2_slot8;
                        var3 = var2.current;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = _closure2_slot8;
                        var1 = null;
                        var2['current'] = var1;
case 31:
                        var1 = undefined;
                        return var1;
                    }
                };
                var8 = var27.bind(var25)(var8, var17);
                var27 = var25.useEffect;
                var17 = function() {
                    var1 = function() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var2 = _closure2_slot8;
                            var3 = var2.current;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0007_ip = 24; continue _fun0007 }
case 11:
                            var3 = global;
                            var5 = var3.clearTimeout;
                            var3 = _closure2_slot8;
                            var4 = var3.current;
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            var1 = _closure2_slot8;
                            var1['current'] = var2;
case 24:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                };
                var8 = new Array(0);
                var8 = var27.bind(var25)(var17, var8);
                var17 = var25.useState;
                var8 = _closure1_slot5;
                var27 = var8.currentState;
                var8 = 'active';
                var8 = var8 === var27;
                var17 = var17.bind(var25)(var8);
                var8 = _closure1_slot3;
                var8 = var8.bind(var4)(var17, var26);
                var12 = var8[var12];
                var8 = var8[var10];
                _closure2_slot10 = var8;
                var17 = var25.useEffect;
                var10 = function() {
                    var5 = _closure1_slot5;
                    var4 = var5.addEventListener;
                    var3 = 'change';
                    var2 = function(arg1) {
                        var3 = _closure2_slot10;
                        var1 = undefined;
                        var4 = 'active';
                        var2 = arg1;
                        var2 = var4 === var2;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2.remove;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                };
                var8 = new Array(0);
                var8 = var17.bind(var25)(var10, var8);
                var8 = var5;
                if(var8) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                var8 = var3;
case 33:
                if(!var8) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                var8 = var14 != var24;
case 35:
                if(!var8) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                var8 = var6;
case 37:
                var6 = _closure1_slot15;
                if(!var6) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                var6 = var9;
case 39:
                var6 = !var6;
                if(!var6) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                if(!var3) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                var3 = !var5;
case 43:
                var6 = !var3;
case 41:
                if(!var6) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                var6 = var8;
case 45:
                if(!var6) { _fun0002_ip = 47; continue _fun0002 }
case 48:
                var6 = var2;
case 47:
                _closure2_slot11 = var6;
                var5 = _closure1_slot4;
                var3 = var5.useMemo;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = {};
                        var3 = _closure2_slot11;
                        var2 = 1;
                        if(!var3) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                        var2 = 0;
case 49:
                        var1['opacity'] = var2;
                        return var1;
                    }
                };
                var17 = var3.bind(var5)(var1, var2);
                var3 = _closure1_slot11;
                var2 = _closure1_slot7;
                var1 = {};
                var5 = var20.tile;
                var1['style'] = var5;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 12;
                var5 = var9[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Card;
                var5 = {};
                var9 = var20.card;
                var5['style'] = var9;
                var5['radius'] = var7;
                var5['onPress'] = var16;
                var7 = {};
                var9 = 'transparent';
                var7['color'] = var9;
                var5['android_ripple'] = var7;
                if(!var8) { _fun0002_ip = 51; continue _fun0002 }
case 52:
                var10 = _closure1_slot10;
                var9 = _closure1_slot1;
                var25 = _closure1_slot2;
                var7 = 13;
                var7 = var25[var7];
                var9 = var9.bind(var4)(var7);
                var7 = {'accessible': false, 'importantForAccessibility': 'no-hide-descendants', 'accessibilityRole': 'none', 'onReadyForDisplay': null, 'source': null, 'style': null, 'resizeMode': 'cover', 'repeat': true, 'muted': true, 'disableFocus': true};
                var7['onReadyForDisplay'] = var23;
                var23 = {};
                var23['uri'] = var24;
                var7['source'] = var23;
                var23 = var20.previewVideo;
                var7['style'] = var23;
                var12 = !var12;
                if(var12) { _fun0002_ip = 53; continue _fun0002 }
case 54:
                var12 = var22;
case 53:
                var7['paused'] = var12;
                var8 = var10.bind(var4)(var9, var7);
case 51:
                var7 = new Array(4);
                var7[0] = var8;
                var10 = _closure1_slot10;
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 14;
                var8 = var12[var8];
                var9 = var9.bind(var4)(var8);
                var8 = {};
                var22 = var20.cardImage;
                var12 = new Array(2);
                var12[0] = var22;
                var12[1] = var17;
                var8['style'] = var12;
                var8['onLoad'] = var11;
                var11 = {};
                var17 = var14 != var13;
                var12 = undefined;
                if(!var17) { _fun0002_ip = 55; continue _fun0002 }
case 56:
                var12 = var13;
case 55:
                var11['uri'] = var12;
                var8['source'] = var11;
                var11 = 'cover';
                var8['resizeMode'] = var11;
                var8 = var10.bind(var4)(var9, var8);
                var7[1] = var8;
                var11 = _closure1_slot10;
                var9 = _closure1_slot7;
                var8 = {};
                var10 = var20.badge;
                var8['style'] = var10;
                var13 = _closure1_slot11;
                var12 = {};
                var10 = var20.badgeContent;
                var12['style'] = var10;
                var10 = var21;
                if(!var10) { _fun0002_ip = 57; continue _fun0002 }
case 58:
                var23 = _closure1_slot10;
                var22 = _closure1_slot0;
                var24 = _closure1_slot2;
                var17 = 15;
                var17 = var24[var17];
                var17 = var22.bind(var4)(var17);
                var22 = var17.CheckmarkSmallBoldIcon;
                var17 = {};
                var25 = 'xxs';
                var17['size'] = var25;
                var25 = _closure1_slot1;
                var24 = var24[var18];
                var24 = var25.bind(var4)(var24);
                var24 = var24.colors;
                var24 = var24.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT;
                var17['color'] = var24;
                var10 = var23.bind(var4)(var22, var17);
case 57:
                var22 = new Array(2);
                var22[0] = var10;
                var25 = _closure1_slot10;
                var27 = _closure1_slot0;
                var26 = _closure1_slot2;
                var10 = 16;
                var17 = var26[var10];
                var17 = var27.bind(var4)(var17);
                var24 = var17.Text;
                var23 = {};
                var17 = 'text-xs/bold';
                var23['variant'] = var17;
                var17 = var20.badgeText;
                var23['style'] = var17;
                var17 = 17;
                var26 = var26[var17];
                var26 = var27.bind(var4)(var26);
                var28 = var26.intl;
                var27 = var28.string;
                var29 = _closure1_slot0;
                var26 = _closure1_slot2;
                var26 = var26[var17];
                var26 = var29.bind(var4)(var26);
                var29 = var26.t;
                if(var21) { _fun0002_ip = 59; continue _fun0002 }
case 60:
                var26 = var29.fFIJ/9;
                _fun0002_ip = 61; continue _fun0002;
case 59:
                var26 = var29.vlGTLf;
case 61:
                var26 = var27.bind(var28)(var26);
                var23['children'] = var26;
                var23 = var25.bind(var4)(var24, var23);
                var22[1] = var23;
                var12['children'] = var22;
                var12 = var13.bind(var4)(var9, var12);
                var8['children'] = var12;
                var8 = var11.bind(var4)(var9, var8);
                var7[2] = var8;
                var11 = _closure1_slot10;
                var9 = _closure1_slot7;
                var8 = {};
                var12 = var20.startButton;
                var8['style'] = var12;
                var13 = _closure1_slot0;
                var22 = _closure1_slot2;
                var12 = 18;
                var12 = var22[var12];
                var12 = var13.bind(var4)(var12);
                var13 = var12.Button;
                var12 = {};
                var22 = 'secondary-overlay';
                var12['variant'] = var22;
                var25 = _closure1_slot0;
                var22 = _closure1_slot2;
                var23 = var22[var17];
                var23 = var25.bind(var4)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var22[var17];
                var22 = var25.bind(var4)(var22);
                var22 = var22.t;
                if(var21) { _fun0002_ip = 62; continue _fun0002 }
case 63:
                var21 = var22.LhlgY9;
                var21 = var23.bind(var24)(var21);
                _fun0002_ip = 64; continue _fun0002;
case 62:
                var22 = var22["9UtZAY"];
                var21 = var23.bind(var24)(var22);
case 64:
                var12['text'] = var21;
                var12['onPress'] = var16;
                var12 = var11.bind(var4)(var13, var12);
                var8['children'] = var12;
                var8 = var11.bind(var4)(var9, var8);
                var7[3] = var8;
                var5['children'] = var7;
                var6 = var3.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot11;
                var7 = _closure1_slot7;
                var6 = {};
                var9 = var20.cardFooter;
                var6['style'] = var9;
                var9 = {};
                var11 = var20.advertiserRow;
                var9['style'] = var11;
                var13 = _closure1_slot10;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var10];
                var11 = var12.bind(var4)(var11);
                var12 = var11.Text;
                var11 = {'variant': 'text-sm/medium', 'color': 'text-subtle', 'lineClamp': 1};
                var16 = var20.advertiserName;
                var11['style'] = var16;
                var15 = var15.advertiserName;
                var16 = var14 != var15;
                var14 = '';
                if(!var16) { _fun0002_ip = 65; continue _fun0002 }
case 66:
                var14 = var15;
case 65:
                var11['children'] = var14;
                var12 = var13.bind(var4)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var12 = _closure1_slot10;
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var14 = 19;
                var14 = var13[var14];
                var14 = var16.bind(var4)(var14);
                var15 = var14.CircleCheckIcon;
                var14 = {};
                var21 = 'xxs';
                var14['size'] = var21;
                var20 = var20.advertiserIcon;
                var14['style'] = var20;
                var19 = _closure1_slot1;
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
        var4 = 20;
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
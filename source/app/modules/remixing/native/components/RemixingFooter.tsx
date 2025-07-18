// app/modules/remixing/native/components/RemixingFooter.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var11 = native3;
        var3 = native6;
        var6 = native7;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var11;
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
        var4 = var11.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var7 = var6[var4];
        var4 = native4;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot4 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.StyleSheet;
        var _closure1_slot5 = var8;
        var4 = var4.View;
        var _closure1_slot6 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot7 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.isInDrawMode;
        var _closure1_slot8 = var7;
        var4 = var4.useRemixingEditorStore;
        var _closure1_slot9 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.RemixMode;
        var _closure1_slot10 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.NOOP;
        var _closure1_slot11 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.ExpressionPickerViewType;
        var _closure1_slot12 = var4;
        var4 = 8;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot13 = var7;
        var4 = var4.jsxs;
        var _closure1_slot14 = var4;
        var7 = var8.create;
        var4 = {};
        var9 = {'display': 'flex', 'alignItems': 'center'};
        var4['flexCenter'] = var9;
        var9 = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-evenly', 'borderRadius': null, 'width': 300, 'alignItems': 'center', 'marginBottom': 24, 'paddingVertical': 16, 'backgroundColor': null, 'overflow': 'hidden'};
        var10 = 9;
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.radii;
        var12 = var12.xl;
        var9['borderRadius'] = var12;
        var12 = 16;
        var13 = 10;
        var14 = var6[var13];
        var15 = var5.bind(var1)(var14);
        var14 = var15.isAndroid;
        var16 = var14.bind(var15)();
        var14 = 'transparent';
        var15 = var14;
        if(!var16) { _fun0001_ip = 378; continue _fun0001 }
 372:
        var15 = 'rgba(24, 25, 28, 0.8)';
 378:
        var9['backgroundColor'] = var15;
        var4['iconContainer'] = var9;
        var9 = {};
        var18 = var8.absoluteFillObject;
        var19 = var9;
        var15 = copyDataProperties(var19, var18);
        var15 = 'backgroundColor';
        var9[var15] = var14;
        var4['visualEffectView'] = var9;
        var9 = {};
        var9['backgroundColor'] = var14;
        var4['buttonContainer'] = var9;
        var9 = {'backgroundColor': null, 'position': 'absolute', 'alignSelf': 'center', 'width': 40, 'height': 16, 'top': 60};
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.unsafe_rawColors;
        var14 = var14.BRAND_260;
        var9['backgroundColor'] = var14;
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.radii;
        var14 = var14.xs;
        var9['borderRadius'] = var14;
        var4['betaContainer'] = var9;
        var9 = {'textAlign': 'center', 'fontFamily': 'gg sans', 'bottom': null, 'fontSize': 12, 'lineHeight': null, 'height': 16, 'letterSpacing': 0.5, 'fontWeight': '700', 'textTransform': 'uppercase'};
        var14 = var6[var13];
        var15 = var5.bind(var1)(var14);
        var14 = var15.isAndroid;
        var15 = var14.bind(var15)();
        var14 = '0%';
        if(!var15) { _fun0001_ip = 545; continue _fun0001 }
 539:
        var14 = '10%';
 545:
        var9['bottom'] = var14;
        var13 = var6[var13];
        var14 = var5.bind(var1)(var13);
        var13 = var14.isAndroid;
        var13 = var13.bind(var14)();
        if(!var13) { _fun0001_ip = 575; continue _fun0001 }
 572:
        var12 = 18;
 575:
        var9['lineHeight'] = var12;
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.unsafe_rawColors;
        var10 = var10.BRAND_500;
        var9['color'] = var10;
        var4['betaText'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot15 = var4;
        var4 = function BetaTag() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var5 = undefined;
                var2 = var2.bind(var5)(var1);
                var1 = var2.useIsRemixANitroPerk;
                var2 = var1.bind(var2)();
                var1 = null;
                if(!var2) { _fun0002_ip = 196; continue _fun0002 }
 43:
                var4 = _closure1_slot13;
                var3 = _closure1_slot6;
                var2 = {};
                var6 = _closure1_slot15;
                var6 = var6.betaContainer;
                var2['style'] = var6;
                var6 = 'box-none';
                var2['pointerEvents'] = var6;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 13;
                var6 = var12[var6];
                var6 = var11.bind(var5)(var6);
                var7 = var6.Text;
                var6 = {};
                var9 = 'text-sm/normal';
                var6['variant'] = var9;
                var8 = _closure1_slot15;
                var8 = var8.betaText;
                var6['style'] = var8;
                var8 = 14;
                var9 = var12[var8];
                var9 = var11.bind(var5)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var5)(var8);
                var8 = var8.t;
                var8 = var8.oW0eUV;
                var8 = var9.bind(var10)(var8);
                var6['children'] = var8;
                var6 = var4.bind(var5)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 196:
                return var1;
            }
        };
        var _closure1_slot16 = var4;
        var4 = 38;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/remixing/native/components/RemixingFooter.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function _default(arg1) {
            var1 = arg1;
            var9 = var1.channelId;
            var _closure2_slot0 = var9;
            var10 = var1.clearActiveId;
            var _closure2_slot1 = var10;
            var8 = var1.canvasCenterPoint;
            var _closure2_slot2 = var8;
            var3 = _closure1_slot9;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 15;
            var1 = var16[var1];
            var4 = undefined;
            var1 = var15.bind(var4)(var1);
            var2 = var1.shallow;
            var1 = function(arg1) {
                var2 = arg1;
                var3 = var2.currentMode;
                var1 = new Array(2);
                var1[0] = var3;
                var2 = var2.setCurrentMode;
                var1[1] = var2;
                return var1;
            };
            var3 = var3.bind(var4)(var1, var2);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var1 = var2[var1];
            var _closure2_slot3 = var1;
            var1 = 1;
            var1 = var2[var1];
            var _closure2_slot4 = var1;
            var2 = 16;
            var3 = var16[var2];
            var5 = var15.bind(var4)(var3);
            var3 = var5.useOverlayLayoutDriver;
            var5 = var3.bind(var5)();
            var2 = var16[var2];
            var3 = var15.bind(var4)(var2);
            var2 = var3.useFooterLayoutAnimation;
            var7 = var2.bind(var3)(var5);
            var5 = _closure1_slot4;
            var11 = var5.useCallback;
            var3 = new Array(3);
            var3[0] = var10;
            var3[1] = var9;
            var3[2] = var8;
            var2 = function() {
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 20;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openExpressionPickerActionSheet;
                var2 = {};
                var7 = _closure2_slot0;
                var2['channelId'] = var7;
                var7 = function onDismiss() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackRemixingComponentToolCanceled;
                    var2 = 'STAMP';
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2['onDismiss'] = var7;
                var7 = function onPressEmoji(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.id;
                        var3 = null;
                        if(!(var3 == var2)) { _fun0003_ip = 35; continue _fun0003 }
 14:
                        var2 = var1.url;
                        var4 = var3 != var2;
                        var6 = '';
                        if(!var4) { _fun0003_ip = 33; continue _fun0003 }
 30:
                        var6 = var2;
 33:
                        _fun0003_ip = 96; continue _fun0003;
 35:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 22;
                        var4 = var4[var2];
                        var2 = undefined;
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.getEmojiURL;
                        var2 = {'id': null, 'animated': false, 'forcePNG': true, 'size': 512};
                        var7 = var1.id;
                        var2['id'] = var7;
                        var6 = var4.bind(var5)(var2);
 96:
                        var2 = var1.id;
                        if(!(var3 == var2)) { _fun0003_ip = 114; continue _fun0003 }
 105:
                        var2 = var1.surrogates;
                        if(!(var3 == var2)) { _fun0003_ip = 178; continue _fun0003 }
 114:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 23;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.addImage;
                        var3 = _closure2_slot2;
                        var2 = {'height': 128, 'width': 128};
                        var2 = var4.bind(var5)(var6, var2, var3);
                        _fun0003_ip = 361; continue _fun0003;
 178:
                        var4 = var1.surrogates;
                        var3 = var4.indexOf;
                        var2 = '\u200d';
                        var3 = var3.bind(var4)(var2);
                        var2 = 0;
                        if(!(!(var3 < var2))) { _fun0003_ip = 213; continue _fun0003 }
 206:
                        var4 = var1.surrogates;
                        _fun0003_ip = 239; continue _fun0003;
 213:
                        var5 = var1.surrogates;
                        var3 = var5.replace;
                        var2 = '️';
                        var1 = '';
                        var4 = var3.bind(var5)(var2, var1);
 239:
                        var2 = _closure1_slot7;
                        var7 = var2.base;
                        var3 = var2.convert;
                        var2 = var3.toCodePoint;
                        var9 = var2.bind(var3)(var4);
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var5 = var2.concat;
                        var12 = '';
                        var10 = 'svg/';
                        var8 = '.svg';
                        var11 = var7;
                        var5 = var12[var5](var11, var10, var9, var8, var7);
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 23;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.addSVG;
                        var2 = _closure2_slot2;
                        var1 = {'height': 128, 'width': 128};
                        var1 = var3.bind(var4)(var5, var1, var2);
 361:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2['onPressEmoji'] = var7;
                var6 = function onPressSticker(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var3 = global;
                        var10 = var3.Object;
                        var9 = var10.assign;
                        var8 = {};
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 24;
                        var4 = var6[var1];
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.StickerFormat;
                        var4 = var4.PNG;
                        var8['format_type'] = var4;
                        var7 = {};
                        var4 = arg1;
                        var8 = var9.bind(var10)(var7, var4, var8);
                        var4 = 25;
                        var4 = var6[var4];
                        var7 = var5.bind(var1)(var4);
                        var6 = var7.getStickerAssetUrl;
                        var5 = 128;
                        var4 = false;
                        var7 = var6.bind(var7)(var8, var5, var4);
                        var5 = var7.lastIndexOf;
                        var4 = '.webp';
                        var9 = var5.bind(var7)(var4);
                        var5 = 0;
                        var6 = var7;
                        if(!(var9 > var5)) { _fun0004_ip = 183; continue _fun0004 }
 125:
                        var4 = var7.substring;
                        var8 = var4.bind(var7)(var5, var9);
                        var5 = var7.substring;
                        var4 = 5;
                        var4 = var9 + var4;
                        var7 = var5.bind(var7)(var4);
                        var3 = var3.HermesInternal;
                        var5 = var3.concat;
                        var4 = '';
                        var3 = '.png';
                        var6 = var5.bind(var4)(var8, var3, var7);
 183:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 23;
                        var2 = var4[var2];
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.addImage;
                        var3 = _closure2_slot2;
                        var2 = {'height': 128, 'width': 128};
                        var2 = var4.bind(var5)(var6, var2, var3);
                        return var1;
                    }
                };
                var2['onPressSticker'] = var6;
                var6 = _closure1_slot11;
                var2['onPressGIF'] = var6;
                var6 = _closure1_slot12;
                var7 = var6.EMOJI;
                var5 = new Array(2);
                var5[0] = var7;
                var6 = var6.STICKER;
                var5[1] = var6;
                var2['visibleTabs'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var11.bind(var5)(var2, var3);
            var _closure2_slot5 = var2;
            var3 = var5.useCallback;
            var2 = new Array(4);
            var2[0] = var10;
            var2[1] = var9;
            var2[2] = var8;
            var2[3] = var1;
            var1 = function() {
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var5 = 17;
                var5 = var4[var5];
                var8 = var6.bind(var1)(var5);
                var7 = var8.openLazy;
                var6 = _closure1_slot0;
                var5 = 19;
                var5 = var4[var5];
                var6 = var6.bind(var1)(var5);
                var5 = 26;
                var5 = var4[var5];
                var4 = var4.paths;
                var6 = var6.bind(var1)(var5, var4);
                var5 = {};
                var4 = _closure2_slot0;
                var5['channelId'] = var4;
                var4 = _closure2_slot2;
                var5['canvasCenterPoint'] = var4;
                var4 = 'RemixingMentionsActionSheet';
                var4 = var7.bind(var8)(var6, var4, var5);
                var3 = _closure2_slot4;
                var2 = _closure1_slot10;
                var2 = var2.MENTIONS_MODE;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var17 = var3.bind(var5)(var1, var2);
            var18 = _closure1_slot1;
            var1 = 27;
            var1 = var16[var1];
            var1 = var18.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.isAndroid;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0005_ip = 45; continue _fun0005 }
 39:
                    var4 = new Array(0);
                    _fun0005_ip = 55; continue _fun0005;
 45:
                    var4 = [250, 1000];
 55:
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var1 = global;
                        var4 = var1.setTimeout;
                        var3 = undefined;
                        var2 = function() {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 27;
                                var3 = var3[var1];
                                var1 = undefined;
                                var4 = var4.bind(var1)(var3);
                                var3 = var4.getKeyboardIsOpen;
                                var3 = var3.bind(var4)();
                                if(!var3) { _fun0006_ip = 68; continue _fun0006 }
 38:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 11;
                                var2 = var4[var2];
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.dismissGlobalKeyboard;
                                var2 = var2.bind(var3)();
 68:
                                return var1;
                            }
                        };
                        var1 = arg1;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var3 = _closure3_slot0;
                        var2 = var3.forEach;
                        var1 = function(arg1) {
                            var1 = global;
                            var3 = var1.clearTimeout;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot14;
            var1 = 28;
            var1 = var16[var1];
            var1 = var18.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var8 = {};
            var5 = _closure1_slot5;
            var25 = var5.absoluteFillObject;
            var26 = var8;
            var5 = copyDataProperties(var26, var25);
            var5 = 'top';
            var8[var5] = var4;
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            var8 = _closure1_slot13;
            var5 = 29;
            var5 = var16[var5];
            var5 = var15.bind(var4)(var5);
            var7 = var5.SafeAreaPaddingView;
            var5 = {'bottom': true, 'left': true, 'right': true, 'pointerEvents': 'box-none'};
            var11 = 'box-none';
            var9 = _closure1_slot15;
            var9 = var9.flexCenter;
            var5['style'] = var9;
            var10 = _closure1_slot6;
            var9 = {};
            var12 = _closure1_slot15;
            var12 = var12.iconContainer;
            var9['style'] = var12;
            var9['pointerEvents'] = var11;
            var11 = 30;
            var11 = var16[var11];
            var12 = var18.bind(var4)(var11);
            var11 = {};
            var13 = 'dark';
            var11['blurTheme'] = var13;
            var13 = _closure1_slot15;
            var13 = var13.visualEffectView;
            var11['style'] = var13;
            var12 = var8.bind(var4)(var12, var11);
            var11 = new Array(6);
            var11[0] = var12;
            var12 = 31;
            var13 = var16[var12];
            var20 = var18.bind(var4)(var13);
            var13 = {};
            var19 = 14;
            var14 = var16[var19];
            var14 = var15.bind(var4)(var14);
            var23 = var14.intl;
            var22 = var23.string;
            var14 = var16[var19];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.s+dFp6;
            var14 = var22.bind(var23)(var14);
            var13['accessibilityLabel'] = var14;
            var14 = function onPress() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var4 = _closure2_slot4;
                var3 = _closure1_slot10;
                var3 = var3.CROP_MODE;
                var3 = var4.bind(var1)(var3);
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 17;
                var3 = var4[var3];
                var7 = var5.bind(var1)(var3);
                var6 = var7.openLazy;
                var3 = _closure1_slot0;
                var2 = 19;
                var2 = var4[var2];
                var8 = var3.bind(var1)(var2);
                var2 = 18;
                var5 = var4[var2];
                var2 = var4.paths;
                var5 = var8.bind(var1)(var5, var2);
                var2 = 'AspectRatioActionSheet';
                var2 = var6.bind(var7)(var5, var2);
                var2 = 21;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackRemixingComponentToolOpened;
                var2 = 'CROP';
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var13['onPress'] = var14;
            var14 = 32;
            var14 = var16[var14];
            var14 = var18.bind(var4)(var14);
            var13['icon'] = var14;
            var14 = 33;
            var22 = var16[var14];
            var22 = var15.bind(var4)(var22);
            var22 = var22.IconSizes;
            var22 = var22.LARGE;
            var13['iconSize'] = var22;
            var22 = _closure1_slot15;
            var22 = var22.buttonContainer;
            var13['style'] = var22;
            var13 = var8.bind(var4)(var20, var13);
            var11[1] = var13;
            var13 = var16[var12];
            var20 = var18.bind(var4)(var13);
            var13 = {};
            var22 = var16[var19];
            var22 = var15.bind(var4)(var22);
            var24 = var22.intl;
            var23 = var24.string;
            var22 = var16[var19];
            var22 = var15.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.1Pskj4;
            var22 = var23.bind(var24)(var22);
            var13['accessibilityLabel'] = var22;
            var22 = function onPress() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var4 = _closure2_slot4;
                    var5 = _closure1_slot8;
                    var3 = _closure2_slot3;
                    var3 = var5.bind(var1)(var3);
                    var5 = _closure1_slot10;
                    if(var3) { _fun0007_ip = 48; continue _fun0007 }
 40:
                    var3 = var5.DRAW_MODE;
                    _fun0007_ip = 54; continue _fun0007;
 48:
                    var3 = var5.DEFAULT_MODE;
 54:
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 21;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackRemixingComponentToolOpened;
                    var2 = 'DRAWING';
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var13['onPress'] = var22;
            var22 = 34;
            var22 = var16[var22];
            var22 = var18.bind(var4)(var22);
            var13['icon'] = var22;
            var22 = var16[var14];
            var22 = var15.bind(var4)(var22);
            var22 = var22.IconSizes;
            var22 = var22.LARGE;
            var13['iconSize'] = var22;
            var22 = _closure1_slot15;
            var22 = var22.buttonContainer;
            var13['style'] = var22;
            var13 = var8.bind(var4)(var20, var13);
            var11[2] = var13;
            var13 = var16[var12];
            var20 = var18.bind(var4)(var13);
            var13 = {};
            var22 = var16[var19];
            var22 = var15.bind(var4)(var22);
            var24 = var22.intl;
            var23 = var24.string;
            var22 = var16[var19];
            var22 = var15.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.WpFYAg;
            var22 = var23.bind(var24)(var22);
            var13['accessibilityLabel'] = var22;
            var22 = function onPress() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var4 = _closure2_slot4;
                    var5 = _closure2_slot3;
                    var3 = _closure1_slot10;
                    var3 = var3.TEXT_MODE;
                    if(!(var5 !== var3)) { _fun0008_ip = 50; continue _fun0008 }
 38:
                    var3 = _closure1_slot10;
                    var3 = var3.TEXT_MODE;
                    _fun0008_ip = 60; continue _fun0008;
 50:
                    var5 = _closure1_slot10;
                    var3 = var5.DEFAULT_MODE;
 60:
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 21;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackRemixingComponentToolOpened;
                    var2 = 'TEXT';
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var13['onPress'] = var22;
            var22 = 35;
            var22 = var16[var22];
            var22 = var18.bind(var4)(var22);
            var13['icon'] = var22;
            var22 = var16[var14];
            var22 = var15.bind(var4)(var22);
            var22 = var22.IconSizes;
            var22 = var22.LARGE;
            var13['iconSize'] = var22;
            var22 = _closure1_slot15;
            var22 = var22.buttonContainer;
            var13['style'] = var22;
            var13 = var8.bind(var4)(var20, var13);
            var11[3] = var13;
            var13 = var16[var12];
            var20 = var18.bind(var4)(var13);
            var13 = {};
            var22 = var16[var19];
            var22 = var15.bind(var4)(var22);
            var24 = var22.intl;
            var23 = var24.string;
            var22 = var16[var19];
            var22 = var15.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.3N7uLy;
            var22 = var23.bind(var24)(var22);
            var13['accessibilityLabel'] = var22;
            var21 = function onPress() {
                var2 = _closure2_slot5;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 21;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackRemixingComponentToolOpened;
                var2 = 'STAMP';
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var13['onPress'] = var21;
            var21 = 36;
            var21 = var16[var21];
            var21 = var18.bind(var4)(var21);
            var13['icon'] = var21;
            var21 = var16[var14];
            var21 = var15.bind(var4)(var21);
            var21 = var21.IconSizes;
            var21 = var21.LARGE;
            var13['iconSize'] = var21;
            var21 = _closure1_slot15;
            var21 = var21.buttonContainer;
            var13['style'] = var21;
            var13 = var8.bind(var4)(var20, var13);
            var11[4] = var13;
            var12 = var16[var12];
            var13 = var18.bind(var4)(var12);
            var12 = {};
            var20 = var16[var19];
            var20 = var15.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var16[var19];
            var19 = var15.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.Hu9dUF;
            var19 = var20.bind(var21)(var19);
            var12['accessibilityLabel'] = var19;
            var12['onPress'] = var17;
            var17 = 37;
            var17 = var16[var17];
            var17 = var18.bind(var4)(var17);
            var12['icon'] = var17;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.IconSizes;
            var14 = var14.LARGE;
            var12['iconSize'] = var14;
            var14 = _closure1_slot15;
            var14 = var14.buttonContainer;
            var12['style'] = var14;
            var12 = var8.bind(var4)(var13, var12);
            var11[5] = var12;
            var9['children'] = var11;
            var9 = var3.bind(var4)(var10, var9);
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot16;
            var6 = {};
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var3['default'] = var2;
        return var1;
    }
})();
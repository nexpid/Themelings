// app/modules/remixing/native/components/RemixingMentionsActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function RemixingMentionsActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var10 = var2.channelId;
            var9 = var2.canvasCenterPoint;
            var2 = _closure1_slot14;
            var4 = undefined;
            var22 = var2.bind(var4)();
            var17 = _closure1_slot1;
            var27 = _closure1_slot2;
            var2 = 15;
            var2 = var27[var2];
            var3 = var17.bind(var4)(var2);
            var2 = {};
            var7 = true;
            var2['ignoreKeyboard'] = var7;
            var2 = var3.bind(var4)(var2);
            var2 = var2.height;
            var8 = 2;
            var3 = var2 / var8;
            var2 = 160;
            var24 = var3 + var2;
            var6 = _closure1_slot8;
            var25 = _closure1_slot0;
            var2 = 11;
            var2 = var27[var2];
            var2 = var25.bind(var4)(var2);
            var3 = var2.shallow;
            var2 = function(arg1) {
                var2 = arg1;
                var3 = var2.currentMode;
                var1 = new Array(3);
                var1[0] = var3;
                var3 = var2.setCurrentMode;
                var1[1] = var3;
                var2 = var2.headerMeasurements;
                var1[2] = var2;
                return var1;
            };
            var3 = var6.bind(var4)(var2, var3);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var3, var8);
            var3 = 0;
            var6 = var2[var3];
            var21 = 1;
            var13 = var2[var21];
            var _closure2_slot0 = var13;
            var2 = 16;
            var2 = var27[var2];
            var6 = var25.bind(var4)(var2);
            var2 = var6.getPortraitOrientationScreenSize;
            var2 = var2.bind(var6)();
            var12 = var2.width;
            var11 = var2.height;
            var14 = _closure1_slot4;
            var6 = var14.useState;
            var2 = false;
            var6 = var6.bind(var14)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var6, var8);
            var20 = var2[var3];
            var2 = var2[var21];
            var _closure2_slot1 = var2;
            var8 = function onPress() {
                var3 = _closure2_slot1;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var6 = _closure1_slot4;
            var3 = var6.useCallback;
            var2 = new Array(1);
            var2[0] = var13;
            var1 = function() {
                var3 = _closure2_slot0;
                var1 = _closure1_slot10;
                var2 = var1.DEFAULT_MODE;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot12;
            var1 = 17;
            var1 = var27[var1];
            var1 = var25.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var1['contentHeight'] = var24;
            var15 = _closure1_slot13;
            var14 = _closure1_slot7;
            var13 = {};
            var18 = _closure1_slot12;
            var16 = 18;
            var16 = var27[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var17 = var18.bind(var4)(var17, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var19 = _closure1_slot12;
            var18 = _closure1_slot6;
            var17 = {};
            var23 = var22.backdropContainer;
            var22 = new Array(2);
            var22[0] = var23;
            var23 = {};
            var26 = var11 - var24;
            var24 = 9;
            var24 = var27[var24];
            var24 = var25.bind(var4)(var24);
            var25 = var24.NAV_BAR_HEIGHT;
            var24 = 24;
            var24 = var26 + var24;
            var24 = var24 - var25;
            var23['height'] = var24;
            var22[1] = var23;
            var17['style'] = var22;
            var17['onPress'] = var8;
            var17['activeOpacity'] = var21;
            var20 = !var20;
            if(!var20) { _fun0001_ip = 428; continue _fun0001 }
 412:
            var23 = _closure1_slot12;
            var22 = _closure1_slot16;
            var21 = {};
            var20 = var23.bind(var4)(var22, var21);
 428:
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var16[1] = var17;
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var1['backdropChildren'] = var13;
            var1['startExpanded'] = var7;
            var1['scrollable'] = var7;
            var1['onDismiss'] = var6;
            var7 = _closure1_slot12;
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 19;
            var5 = var13[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['channelId'] = var10;
            var10 = {};
            var10['width'] = var12;
            var10['height'] = var11;
            var5['canvasSize'] = var10;
            var5['canvasCenterPoint'] = var9;
            var5['onSelect'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.TextInput;
    var _closure1_slot5 = var7;
    var7 = var4.TouchableOpacity;
    var _closure1_slot6 = var7;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useRemixingEditorStore;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useRemixingMentionsStore;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RemixMode;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.Fonts;
    var4 = var4.USERNAME_MAX_LENGTH;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingTop': 12, 'justifyContent': 'flex-start'};
    var4['container'] = var9;
    var9 = {'width': '100%', 'top': null, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'};
    var10 = 9;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.NAV_BAR_HEIGHT;
    var9['top'] = var10;
    var4['backdropContainer'] = var9;
    var9 = {'width': 'auto', 'height': 'auto'};
    var4['textContainer'] = var9;
    var10 = 10;
    var9 = {'flex': 1, 'padding': 10, 'height': 100, 'alignItems': 'center', 'justifyContent': 'center'};
    var4['textInnerContainer'] = var9;
    var9 = {'paddingHorizontal': 1, 'paddingTop': 1, 'paddingBottom': 1.1, 'width': 'auto', 'height': 'auto', 'alignItems': 'center', 'justifyContent': 'center'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var4['textInputBackground'] = var9;
    var9 = {'display': 'flex', 'padding': 5, 'fontFamily': null, 'minWidth': 100, 'color': 'white', 'backgroundColor': null, 'width': '100%', 'maxWidth': 300, 'borderRadius': null, 'overflow': 'visible'};
    var12 = var12.PRIMARY_BOLD;
    var9['fontFamily'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BASE_TERTIARY;
    var9['backgroundColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9['borderRadius'] = var10;
    var4['textInput'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = function stopsEventPropagation(arg1) {
        var2 = arg1;
        var1 = var2.stopPropagation;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var _closure1_slot15 = var4;
    var4 = function MentionTextInput() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot14;
            var4 = undefined;
            var19 = var2.bind(var4)();
            var2 = _closure1_slot9;
            var2 = var2.bind(var4)();
            var14 = var2.mentionsText;
            var _closure2_slot0 = var14;
            var11 = var2.setMentionsText;
            var _closure2_slot1 = var11;
            var21 = var2.fontSize;
            var _closure2_slot2 = var21;
            var10 = var2.setFontSize;
            var _closure2_slot3 = var10;
            var9 = var2.inputWidth;
            var _closure2_slot4 = var9;
            var6 = var2.setInputWidth;
            var _closure2_slot5 = var6;
            var3 = var2.reset;
            var _closure2_slot6 = var3;
            var7 = _closure1_slot4;
            var5 = var7.useRef;
            var2 = null;
            var22 = var5.bind(var7)(var2);
            var _closure2_slot7 = var22;
            var7 = _closure1_slot8;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 11;
            var2 = var17[var2];
            var2 = var16.bind(var4)(var2);
            var5 = var2.shallow;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.setCurrentMode;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var5 = var7.bind(var4)(var2, var5);
            var2 = _closure1_slot3;
            var7 = 1;
            var2 = var2.bind(var4)(var5, var7);
            var8 = 0;
            var5 = var2[var8];
            var _closure2_slot8 = var5;
            var13 = _closure1_slot4;
            var12 = var13.useState;
            var2 = {};
            var13 = var12.bind(var13)(var2);
            var12 = _closure1_slot3;
            var2 = 2;
            var2 = var12.bind(var4)(var13, var2);
            var8 = var2[var8];
            var _closure2_slot9 = var8;
            var2 = var2[var7];
            var _closure2_slot10 = var2;
            var13 = _closure1_slot4;
            var12 = var13.useEffect;
            var7 = new Array(2);
            var7[0] = var5;
            var7[1] = var11;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = global;
                    var5 = var2.setTimeout;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 12;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.isAndroid;
                    var2 = var2.bind(var3)();
                    var3 = 200;
                    if(!var2) { _fun0003_ip = 56; continue _fun0003 }
 50:
                    var3 = 500;
 56:
                    var2 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var2 = _closure2_slot7;
                            var4 = var2.current;
                            var2 = null;
                            if(!(var2 != var4)) { _fun0004_ip = 28; continue _fun0004 }
 18:
                            var3 = var4.blur;
                            var3 = var3.bind(var4)();
 28:
                            var3 = _closure2_slot7;
                            var3 = var3.current;
                            if(!(var2 != var3)) { _fun0004_ip = 51; continue _fun0004 }
 41:
                            var2 = var3.focus;
                            var2 = var2.bind(var3)();
 51:
                            var3 = _closure2_slot1;
                            var1 = undefined;
                            var2 = '@';
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var2 = var5.bind(var4)(var2, var3);
                    var1 = function() {
                        var4 = _closure2_slot8;
                        var1 = _closure1_slot10;
                        var3 = var1.DEFAULT_MODE;
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure2_slot1;
                        var2 = '';
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var5 = var12.bind(var13)(var5, var7);
            var12 = _closure1_slot4;
            var7 = var12.useEffect;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var1 = function() {
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                return var1;
            };
            var3 = var7.bind(var12)(var3, var5);
            var7 = _closure1_slot4;
            var5 = var7.useCallback;
            var3 = new Array(7);
            var3[0] = var11;
            var3[1] = var10;
            var3[2] = var14;
            var3[3] = var9;
            var3[4] = var21;
            var3[5] = var8;
            var3[6] = var2;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.length;
                    var1 = _closure1_slot11;
                    if(!(!(var3 > var1))) { _fun0005_ip = 269; continue _fun0005 }
 22:
                    var1 = function removeRedundantLeadingSymbol(arg1) {
                        var3 = arg1;
                        var2 = var3.split;
                        var1 = '';
                        var4 = var2.bind(var3)(var1);
                        var2 = var4.findLastIndex;
                        var1 = function(arg1) {
                            var2 = '@';
                            var1 = arg1;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var4 = var2.bind(var4)(var1);
                        var2 = var3.substring;
                        var1 = 1;
                        var1 = var4 + var1;
                        var2 = var2.bind(var3)(var1);
                        var1 = '@';
                        var1 = var1 + var2;
                        return var1;
                    };
                    var3 = undefined;
                    var2 = var1.bind(var3)(var2);
                    var4 = _closure2_slot2;
                    var5 = _closure2_slot9;
                    var7 = var2.length;
                    var8 = var5[var7];
                    var7 = null;
                    if(!(var7 != var8)) { _fun0005_ip = 85; continue _fun0005 }
 64:
                    var9 = _closure2_slot9;
                    var8 = var2.length;
                    var8 = var9[var8];
                    var8 = var8[var2];
                    if(!(var7 == var8)) { _fun0005_ip = 185; continue _fun0005 }
 85:
                    var8 = _closure2_slot0;
                    var8 = var2 > var8;
                    if(!var8) { _fun0005_ip = 110; continue _fun0005 }
 96:
                    var10 = _closure2_slot4;
                    var9 = 260;
                    var8 = var10 > var9;
 110:
                    if(!var8) { _fun0005_ip = 154; continue _fun0005 }
 113:
                    var9 = _closure2_slot2;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 13;
                    var6 = var11[var6];
                    var6 = var10.bind(var3)(var6);
                    var10 = var6.MIN_MENTION_FONT_SIZE;
                    var6 = 2;
                    var6 = var10 + var6;
                    var8 = var9 >= var6;
 154:
                    var6 = var4;
                    if(!var8) { _fun0005_ip = 214; continue _fun0005 }
 160:
                    var9 = _closure2_slot3;
                    var10 = _closure2_slot2;
                    var8 = 2;
                    var8 = var10 - var8;
                    var9 = var9.bind(var3)(var8);
                    var6 = var8;
                    _fun0005_ip = 214; continue _fun0005;
 185:
                    var9 = _closure2_slot3;
                    var10 = _closure2_slot9;
                    var8 = var2.length;
                    var8 = var10[var8];
                    var8 = var8[var2];
                    var8 = var9.bind(var3)(var8);
                    var6 = var4;
 214:
                    var4 = var2.length;
                    var4 = var5[var4];
                    if(!(var7 == var4)) { _fun0005_ip = 238; continue _fun0005 }
 227:
                    var7 = var2.length;
                    var4 = {};
                    var5[var7] = var4;
 238:
                    var4 = var2.length;
                    var4 = var5[var4];
                    var4[var2] = var6;
                    var4 = _closure2_slot10;
                    var4 = var4.bind(var3)(var5);
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var3)(var2);
 269:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = var5.bind(var7)(var2, var3);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function(arg1) {
                var3 = _closure2_slot5;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.width;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var20 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var19.textContainer;
            var1['style'] = var5;
            var7 = _closure1_slot12;
            var6 = _closure1_slot7;
            var5 = {};
            var8 = var19.textInnerContainer;
            var5['style'] = var8;
            var10 = _closure1_slot12;
            var9 = _closure1_slot1;
            var8 = 14;
            var8 = var17[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var11 = ['#139968', '#94D783'];
            var8['colors'] = var11;
            var11 = var19.textInputBackground;
            var8['style'] = var11;
            var13 = _closure1_slot12;
            var12 = _closure1_slot5;
            var11 = {'ref': null, 'autoFocus': false, 'autoComplete': 'off'};
            var11['ref'] = var22;
            var11['onLayout'] = var20;
            var20 = var19.textInput;
            var19 = new Array(2);
            var19[0] = var20;
            var20 = {};
            var20['fontSize'] = var21;
            var21 = 8;
            var20['paddingHorizontal'] = var21;
            var19[1] = var20;
            var11['style'] = var19;
            var11['onChangeText'] = var18;
            var15 = _closure1_slot15;
            var11['onTouchStart'] = var15;
            var11['onTouchMove'] = var15;
            var11['onTouchEnd'] = var15;
            var15 = 'center';
            var11['textAlign'] = var15;
            var11['textAlignVertical'] = var15;
            var15 = 12;
            var15 = var17[var15];
            var16 = var16.bind(var4)(var15);
            var15 = var16.isAndroid;
            var16 = var15.bind(var16)();
            var15 = 'ascii-capable';
            if(!var16) { _fun0002_ip = 604; continue _fun0002 }
 598:
            var15 = 'visible-password';
 604:
            var11['keyboardType'] = var15;
            var11['value'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/components/RemixingMentionsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RemixingMentionsActionSheetContainer(arg1) {
        var4 = _closure1_slot12;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 20;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.ThemeContextProvider;
        var1 = {};
        var6 = 'darker';
        var1['theme'] = var6;
        var7 = _closure1_slot12;
        var6 = _closure1_slot17;
        var5 = {};
        var9 = arg1;
        var10 = var5;
        var8 = copyDataProperties(var10, var9);
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
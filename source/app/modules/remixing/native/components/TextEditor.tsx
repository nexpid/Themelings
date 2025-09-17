// app/modules/remixing/native/components/TextEditor.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
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
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var4 = var4.useWindowDimensions;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useRemixingEditorStore;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useRemixingTextStore;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.RemixMode;
    var _closure1_slot11 = var7;
    var4 = var4.SIZE_SLIDEBAR_WIDTH;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.Fonts;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var10 = {'marginBottom': 0, 'borderRadius': null, 'height': 60, 'width': '100%'};
    var12 = 11;
    var12 = var6[var12];
    var12 = var9.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.none;
    var10['borderRadius'] = var12;
    var4['carouselViewStyle'] = var10;
    var10 = {'display': 'flex', 'borderWidth': 2, 'padding': 5, 'borderColor': '#949CF7'};
    var11 = var11.PRIMARY_BOLD;
    var10['fontFamily'] = var11;
    var4['textInput'] = var10;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var8 = var9.bind(var1)(var4);
    var7 = var8.createAnimatedComponent;
    var4 = 13;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = 'function TextEditorTsx1(){const{canvasWidth,SIZE_SLIDEBAR_WIDTH,getColorValue,textColor,TEXT_INPUT_BACKGROUND_COLOR,textBoxMaxHeight,TEXT_INPUT_MARGIN_BOTTOM,fontSize,TEXT_INPUT_FONT_SCALE,isOnAndroid,contentHeight,containerSize}=this.__closure;return{width:canvasWidth-SIZE_SLIDEBAR_WIDTH,color:getColorValue(textColor),backgroundColor:TEXT_INPUT_BACKGROUND_COLOR,maxHeight:textBoxMaxHeight.get(),marginBottom:TEXT_INPUT_MARGIN_BOTTOM,fontSize:Math.ceil(fontSize*TEXT_INPUT_FONT_SCALE),height:isOnAndroid?contentHeight.get()>0?contentHeight.get()>containerSize.height?Math.min(containerSize.height,textBoxMaxHeight.get()):Math.min(contentHeight.get(),textBoxMaxHeight.get()):undefined:undefined};}';
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/components/TextEditor.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var31 = var2.canvasWidth;
            var _closure2_slot0 = var31;
            var3 = var2.onUnmount;
            var _closure2_slot1 = var3;
            var2 = var2.clearActiveId;
            var _closure2_slot2 = var2;
            var2 = _closure1_slot15;
            var4 = undefined;
            var14 = var2.bind(var4)();
            var30 = _closure1_slot0;
            var29 = _closure1_slot2;
            var2 = 14;
            var2 = var29[var2];
            var6 = var30.bind(var4)(var2);
            var5 = var6.useStateFromStoresObject;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getTextState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var5.bind(var6)(var3, var2);
            var19 = var2.textColor;
            var _closure2_slot3 = var19;
            var2 = _closure1_slot10;
            var5 = var2.bind(var4)();
            var21 = var5.text;
            var27 = var5.fontSize;
            var _closure2_slot4 = var27;
            var2 = var5.setText;
            var _closure2_slot5 = var2;
            var3 = var5.setTextWidth;
            var _closure2_slot6 = var3;
            var6 = var5.setAddTextPosition;
            var _closure2_slot7 = var6;
            var5 = _closure1_slot7;
            var7 = var5.bind(var4)();
            var37 = var7.height;
            var32 = _closure1_slot5;
            var7 = var32.useState;
            var12 = 0;
            var7 = var7.bind(var32)(var12);
            var8 = _closure1_slot4;
            var17 = 2;
            var7 = var8.bind(var4)(var7, var17);
            var36 = var7[var12];
            var _closure2_slot8 = var36;
            var9 = 1;
            var38 = var7[var9];
            var _closure2_slot9 = var38;
            var25 = 15;
            var7 = var29[var25];
            var10 = var30.bind(var4)(var7);
            var7 = var10.useSizeState;
            var7 = var7.bind(var10)();
            var7 = var8.bind(var4)(var7, var17);
            var8 = var7[var12];
            var _closure2_slot10 = var8;
            var9 = var7[var9];
            var5 = var5.bind(var4)();
            var13 = var5.width;
            var _closure2_slot11 = var13;
            var5 = 16;
            var5 = var29[var5];
            var7 = var30.bind(var4)(var5);
            var5 = var7.useDrawingHooks;
            var5 = var5.bind(var7)();
            var18 = var5.carouselIndex;
            var16 = var5.setCarouselIndex;
            var24 = 17;
            var5 = var29[var24];
            var7 = var30.bind(var4)(var5);
            var5 = var7.isAndroid;
            var26 = var5.bind(var7)();
            var _closure2_slot12 = var26;
            var11 = _closure1_slot1;
            var5 = 18;
            var5 = var29[var5];
            var7 = var11.bind(var4)(var5);
            var5 = {};
            var20 = true;
            var5['includeKeyboardHeight'] = var20;
            var5 = var7.bind(var4)(var5);
            var7 = var5.insets;
            var34 = _closure1_slot8;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.setCurrentMode;
                return var1;
            };
            var5 = var34.bind(var4)(var5);
            var _closure2_slot13 = var5;
            var22 = var32.useEffect;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 17;
                    var2 = var3[var2];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.isAndroid;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0002_ip = 39; continue _fun0002 }
 37:
                    return var3;
 39:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 19;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.subscribeToKeyboardIsOpen;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = arg1;
                            if(var1) { _fun0003_ip = 33; continue _fun0003 }
 6:
                            var3 = _closure2_slot13;
                            var1 = _closure1_slot11;
                            var2 = var1.DEFAULT_MODE;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
 33:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var5 = var22.bind(var32)(var5, var10);
            var10 = 20;
            var5 = var29[var10];
            var22 = var30.bind(var4)(var5);
            var5 = var22.useShouldShowLanguageSupportWarning;
            var5 = var5.bind(var22)();
            var23 = var32.useCallback;
            var22 = new Array(1);
            var22[0] = var2;
            var2 = function(arg1) {
                var3 = _closure2_slot5;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var22 = var23.bind(var32)(var2, var22);
            var23 = var32.useRef;
            var2 = null;
            var23 = var23.bind(var32)(var2);
            var _closure2_slot14 = var23;
            var2 = 12;
            var28 = var29[var2];
            var33 = var30.bind(var4)(var28);
            var28 = var33.useSharedValue;
            var17 = var17 * var27;
            var28 = var28.bind(var33)(var17);
            var _closure2_slot15 = var28;
            var35 = var32.useMemo;
            var33 = new Array(1);
            var33[0] = var23;
            var17 = function() {
                var1 = function() {
                    var1 = global;
                    var3 = var1.Promise;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var4 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var3 = _closure2_slot14;
                            var4 = var3.current;
                            var3 = null;
                            if(!(var3 != var4)) { _fun0004_ip = 54; continue _fun0004 }
 27:
                            var2 = _closure2_slot14;
                            var3 = var2.current;
                            var2 = var3.measure;
                            var1 = function(arg1, arg2, arg3, arg4, arg5, arg6) {
                                var3 = _closure5_slot0;
                                var2 = {};
                                var1 = arg4;
                                var2['height'] = var1;
                                var1 = arg6;
                                var2['pageY'] = var1;
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
 54:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                return var1;
            };
            var35 = var35.bind(var32)(var17, var33);
            var _closure2_slot16 = var35;
            var17 = 21;
            var17 = var29[var17];
            var17 = var30.bind(var4)(var17);
            var33 = var17.shallow;
            var17 = function(arg1) {
                var1 = arg1;
                var1 = var1.headerMeasurements;
                return var1;
            };
            var17 = var34.bind(var4)(var17, var33);
            var _closure2_slot17 = var17;
            var34 = var32.useCallback;
            var33 = new Array(4);
            var33[0] = var38;
            var33[1] = var35;
            var33[2] = var17;
            var33[3] = var28;
            var17 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var4 = var1.x;
                    var3 = _closure2_slot9;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var3 = _closure2_slot17;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 60; continue _fun0005 }
 43:
                    var2 = function() {
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0006_ip = 88; continue _fun0006 }
 7:
                                    var2 = _closure2_slot16;
                                    var3 = undefined;
                                    var2 = var2.bind(var3)();
                                    SaveGenerator(address=24);
 22:
                                    return var2;
 24:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                    if(var5) { _fun0006_ip = 85; continue _fun0006 }
 30:
                                    var6 = var2.pageY;
                                    var5 = var2.height;
                                    var6 = var6 + var5;
                                    var5 = _closure2_slot17;
                                    var7 = var5.pageY;
                                    var5 = var5.height;
                                    var5 = var7 + var5;
                                    var6 = var6 - var5;
                                    var5 = _closure2_slot15;
                                    var4 = var5.set;
                                    var4 = var4.bind(var5)(var6);
                                    return var3;
 85:
                                    return var2;
 88:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure4_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var2 = var2.bind(var1)();
                    var2 = var2.bind(var1)();
 60:
                    return var1;
                }
            };
            var17 = var34.bind(var32)(var17, var33);
            var33 = global;
            var35 = var33.Math;
            var34 = var35.floor;
            var33 = 0.5;
            var33 = var33 * var37;
            var35 = var34.bind(var35)(var33);
            var _closure2_slot18 = var35;
            var34 = var32.useEffect;
            var33 = new Array(3);
            var33[0] = var36;
            var33[1] = var35;
            var33[2] = var6;
            var6 = function() {
                var3 = _closure2_slot7;
                var2 = {};
                var4 = _closure2_slot8;
                var2['x'] = var4;
                var1 = _closure2_slot18;
                var2['y'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = var34.bind(var32)(var6, var33);
            var6 = 22;
            var6 = var29[var6];
            var11 = var11.bind(var4)(var6);
            var6 = function() {
                var1 = function() {
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = 0;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var6 = var11.bind(var4)(var6);
            var6 = var29[var2];
            var11 = var30.bind(var4)(var6);
            var6 = var11.useSharedValue;
            var11 = var6.bind(var11)(var12);
            var _closure2_slot19 = var11;
            var12 = var32.useCallback;
            var6 = new Array(3);
            var6[0] = var11;
            var6[1] = var3;
            var6[2] = var13;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.contentSize;
                var6 = var1.width;
                var4 = var1.height;
                var3 = _closure2_slot19;
                var2 = var3.set;
                var2 = var2.bind(var3)(var4);
                var3 = _closure2_slot6;
                var2 = global;
                var5 = var2.Math;
                var4 = var5.min;
                var2 = _closure2_slot11;
                var1 = 60;
                var1 = var6 + var1;
                var2 = var4.bind(var5)(var2, var1);
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = var12.bind(var32)(var3, var6);
            var2 = var29[var2];
            var3 = var30.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function ne() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = {};
                    var5 = _closure2_slot0;
                    var3 = _closure1_slot12;
                    var3 = var5 - var3;
                    var1['width'] = var3;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 15;
                    var2 = var5[var2];
                    var6 = undefined;
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.getColorValue;
                    var2 = _closure2_slot3;
                    var2 = var3.bind(var5)(var2);
                    var1['color'] = var2;
                    var2 = 'rgba(255,255,255,0.2)';
                    var1['backgroundColor'] = var2;
                    var3 = _closure2_slot15;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1['maxHeight'] = var2;
                    var2 = '25%';
                    var1['marginBottom'] = var2;
                    var5 = global;
                    var7 = var5.Math;
                    var3 = var7.ceil;
                    var8 = _closure2_slot4;
                    var2 = 1.2;
                    var2 = var2 * var8;
                    var2 = var3.bind(var7)(var2);
                    var1['fontSize'] = var2;
                    var3 = _closure2_slot12;
                    var2 = undefined;
                    if(!var3) { _fun0007_ip = 294; continue _fun0007 }
 157:
                    var7 = _closure2_slot19;
                    var3 = var7.get;
                    var7 = var3.bind(var7)();
                    var3 = 0;
                    var3 = var7 > var3;
                    var2 = undefined;
                    if(!var3) { _fun0007_ip = 294; continue _fun0007 }
 181:
                    var6 = _closure2_slot19;
                    var3 = var6.get;
                    var6 = var3.bind(var6)();
                    var3 = _closure2_slot10;
                    var3 = var3.height;
                    if(!(!(var6 > var3))) { _fun0007_ip = 252; continue _fun0007 }
 207:
                    var8 = var5.Math;
                    var7 = var8.min;
                    var6 = _closure2_slot19;
                    var3 = var6.get;
                    var6 = var3.bind(var6)();
                    var9 = _closure2_slot15;
                    var3 = var9.get;
                    var3 = var3.bind(var9)();
                    var3 = var7.bind(var8)(var6, var3);
                    _fun0007_ip = 291; continue _fun0007;
 252:
                    var7 = var5.Math;
                    var6 = var7.min;
                    var5 = _closure2_slot10;
                    var5 = var5.height;
                    var8 = _closure2_slot15;
                    var4 = var8.get;
                    var4 = var4.bind(var8)();
                    var3 = var6.bind(var7)(var5, var4);
 291:
                    var2 = var3;
 294:
                    var1['height'] = var2;
                    return var1;
                }
            };
            var6 = {};
            var6['canvasWidth'] = var31;
            var31 = _closure1_slot12;
            var6['SIZE_SLIDEBAR_WIDTH'] = var31;
            var29 = var29[var25];
            var29 = var30.bind(var4)(var29);
            var29 = var29.getColorValue;
            var6['getColorValue'] = var29;
            var6['textColor'] = var19;
            var29 = 'rgba(255,255,255,0.2)';
            var6['TEXT_INPUT_BACKGROUND_COLOR'] = var29;
            var6['textBoxMaxHeight'] = var28;
            var28 = '25%';
            var6['TEXT_INPUT_MARGIN_BOTTOM'] = var28;
            var6['fontSize'] = var27;
            var27 = 1.2;
            var6['TEXT_INPUT_FONT_SCALE'] = var27;
            var6['isOnAndroid'] = var26;
            var6['contentHeight'] = var11;
            var6['containerSize'] = var8;
            var1['__closure'] = var6;
            var6 = 6787481923131.0;
            var1['__workletHash'] = var6;
            var6 = _closure1_slot17;
            var1['__initData'] = var6;
            var27 = var2.bind(var3)(var1);
            var3 = _closure1_slot14;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = {};
            var8 = var7.top;
            var6['paddingTop'] = var8;
            var7 = var7.bottom;
            var6['paddingBottom'] = var7;
            var1['style'] = var6;
            var6 = var5;
            if(!var6) { _fun0001_ip = 1019; continue _fun0001 }
 986:
            var8 = _closure1_slot13;
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var10];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['text'] = var21;
            var6 = var8.bind(var4)(var7, var5);
 1019:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot14;
            var7 = _closure1_slot6;
            var6 = {};
            var6['onLayout'] = var9;
            var11 = _closure1_slot13;
            var10 = _closure1_slot16;
            var9 = {};
            var28 = var14.textInput;
            var26 = new Array(2);
            var26[0] = var28;
            var26[1] = var27;
            var9['style'] = var26;
            var9['ref'] = var23;
            var9['multiline'] = var20;
            var9['autoFocus'] = var20;
            var9['onChangeText'] = var22;
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var25 = var22[var25];
            var26 = var23.bind(var4)(var25);
            var25 = var26.getColorValue;
            var25 = var25.bind(var26)(var19);
            var9['cursorColor'] = var25;
            var25 = 'center';
            var9['textAlign'] = var25;
            var25 = 'top';
            var9['textAlignVertical'] = var25;
            var22 = var22[var24];
            var23 = var23.bind(var4)(var22);
            var22 = var23.isAndroid;
            var23 = var22.bind(var23)();
            var22 = 'ascii-capable';
            if(!var23) { _fun0001_ip = 1176; continue _fun0001 }
 1170:
            var22 = 'visible-password';
 1176:
            var9['keyboardType'] = var22;
            var9['value'] = var21;
            var9['onLayout'] = var17;
            var9['onContentSizeChange'] = var12;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot13;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 23;
            var10 = var17[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['usePagination'] = var20;
            var10['selectedColor'] = var19;
            var10['carouselIndex'] = var18;
            var10['setCarouselIndex'] = var16;
            var16 = _closure1_slot0;
            var15 = 24;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.setTextColor;
            var10['setColor'] = var15;
            var14 = var14.carouselViewStyle;
            var10['style'] = var14;
            var10['width'] = var13;
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
    var3['default'] = var2;
    return var1;
})();
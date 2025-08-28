// app/modules/remixing/native/components/RemixingView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var16 = 0;
    var4 = var6[var16];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Pressable;
    var _closure1_slot7 = var8;
    var8 = var4.View;
    var _closure1_slot8 = var8;
    var10 = var4.StyleSheet;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.isUsingTool;
    var _closure1_slot9 = var8;
    var8 = var4.isInCropMode;
    var _closure1_slot10 = var8;
    var8 = var4.isInDrawMode;
    var _closure1_slot11 = var8;
    var8 = var4.isInTextMode;
    var _closure1_slot12 = var8;
    var8 = var4.useRemixingEditorStore;
    var _closure1_slot13 = var8;
    var4 = var4.isInMentionsMode;
    var _closure1_slot14 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useRemixingTextStore;
    var _closure1_slot16 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useRemixingCanvasStore;
    var _closure1_slot17 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BACKDROP_ID;
    var _closure1_slot18 = var7;
    var4 = var4.RemixMode;
    var _closure1_slot19 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot20 = var7;
    var7 = var4.jsxs;
    var _closure1_slot21 = var7;
    var4 = var4.Fragment;
    var _closure1_slot22 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var18 = var10.absoluteFillObject;
    var19 = var9;
    var11 = copyDataProperties(var19, var18);
    var4['carouselAnimatedView'] = var9;
    var9 = {'height': '100%', 'backgroundColor': null, 'justifyContent': 'flex-end'};
    var15 = '100%';
    var13 = 11;
    var11 = var6[var13];
    var11 = var5.bind(var1)(var11);
    var11 = var11.TEXT_MASK_COLOR;
    var9['backgroundColor'] = var11;
    var4['textEditorContainer'] = var9;
    var9 = {};
    var18 = var10.absoluteFillObject;
    var19 = var9;
    var11 = copyDataProperties(var19, var18);
    var12 = 'transparent';
    var14 = 'backgroundColor';
    var9[var14] = var12;
    var11 = 'width';
    var9[var11] = var15;
    var11 = 'height';
    var9[var11] = var15;
    var15 = 'flex';
    var11 = 'display';
    var9[var11] = var15;
    var11 = 'black';
    var15 = 'borderColor';
    var9[var15] = var11;
    var15 = 'borderWidth';
    var9[var15] = var16;
    var4['gestureCover'] = var9;
    var9 = {};
    var18 = var10.absoluteFillObject;
    var19 = var9;
    var15 = copyDataProperties(var19, var18);
    var13 = var6[var13];
    var13 = var5.bind(var1)(var13);
    var13 = var13.REMIX_EDITOR_BACKGROUND_COLOR;
    var9[var14] = var13;
    var4['screenCover'] = var9;
    var9 = {};
    var9['backgroundColor'] = var12;
    var4['notReady'] = var9;
    var9 = {};
    var9['backgroundColor'] = var11;
    var4['ready'] = var9;
    var9 = {};
    var18 = var10.absoluteFillObject;
    var19 = var9;
    var10 = copyDataProperties(var19, var18);
    var4['canvasContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = 'function RemixingViewTsx1(){const{activeId}=this.__closure;return activeId.get();}';
    var4['code'] = var7;
    var _closure1_slot24 = var4;
    var4 = {};
    var7 = "function RemixingViewTsx2(current){const{runOnJS,setHideToolBars,BACKDROP_ID,setShowTrash}=this.__closure;if(current!==''){runOnJS(setHideToolBars)(true);if(current!==BACKDROP_ID){runOnJS(setShowTrash)(true);}}else{runOnJS(setHideToolBars)(false);runOnJS(setShowTrash)(false);}}";
    var4['code'] = var7;
    var _closure1_slot25 = var4;
    var4 = 41;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/components/RemixingView.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RemixingView(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var15 = var2.source;
            var _closure2_slot0 = var15;
            var1 = var2.onEnter;
            var _closure2_slot1 = var1;
            var28 = var2.onExit;
            var2 = _closure1_slot23;
            var4 = undefined;
            var21 = var2.bind(var4)();
            var44 = _closure1_slot0;
            var39 = _closure1_slot3;
            var42 = 12;
            var2 = var39[var42];
            var7 = var44.bind(var4)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot15;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure1_slot15;
                    var2 = var1.currentRenderedCanvas;
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 30; continue _fun0002 }
 24:
                    var1 = var2.components;
 30:
                    return var1;
                }
            };
            var51 = var5.bind(var7)(var3, var2);
            var _closure2_slot2 = var51;
            var50 = {};
            var17 = 13;
            var2 = var39[var17];
            var5 = var44.bind(var4)(var2);
            var3 = var5.useSharedValue;
            var2 = '';
            var49 = var3.bind(var5)(var2);
            var _closure2_slot3 = var49;
            var2 = var39[var17];
            var3 = var44.bind(var4)(var2);
            var2 = var3.useSharedValue;
            var9 = false;
            var40 = var2.bind(var3)(var9);
            var5 = _closure1_slot6;
            var3 = var5.useRef;
            var2 = null;
            var45 = var3.bind(var5)(var2);
            var2 = 14;
            var3 = var39[var2];
            var7 = var44.bind(var4)(var3);
            var3 = var7.getPortraitOrientationScreenSize;
            var3 = var3.bind(var7)();
            var12 = var3.width;
            var11 = var3.height;
            var3 = var5.useState;
            var3 = var3.bind(var5)(var9);
            var13 = _closure1_slot5;
            var10 = 2;
            var3 = var13.bind(var4)(var3, var10);
            var8 = 0;
            var7 = var3[var8];
            var _closure2_slot4 = var7;
            var38 = 1;
            var3 = var3[var38];
            var _closure2_slot5 = var3;
            var33 = 15;
            var3 = var39[var33];
            var7 = var44.bind(var4)(var3);
            var3 = var7.useCanvasRef;
            var35 = var3.bind(var7)();
            var _closure2_slot6 = var35;
            var3 = var5.useState;
            var3 = var3.bind(var5)(var9);
            var3 = var13.bind(var4)(var3, var10);
            var7 = var3[var8];
            var16 = var3[var38];
            var _closure2_slot7 = var16;
            var3 = var5.useState;
            var3 = var3.bind(var5)(var9);
            var3 = var13.bind(var4)(var3, var10);
            var41 = var3[var8];
            var14 = var3[var38];
            var _closure2_slot8 = var14;
            var20 = _closure1_slot13;
            var3 = 16;
            var9 = var39[var3];
            var9 = var44.bind(var4)(var9);
            var19 = var9.shallow;
            var9 = function(arg1) {
                var2 = arg1;
                var3 = var2.currentMode;
                var1 = new Array(3);
                var1[0] = var3;
                var3 = var2.setCurrentMode;
                var1[1] = var3;
                var2 = var2.reset;
                var1[2] = var2;
                return var1;
            };
            var19 = var20.bind(var4)(var9, var19);
            var9 = 3;
            var19 = var13.bind(var4)(var19, var9);
            var9 = var19[var8];
            var20 = var19[var38];
            var _closure2_slot9 = var20;
            var19 = var19[var10];
            var _closure2_slot10 = var19;
            var20 = _closure1_slot16;
            var19 = function(arg1) {
                var1 = arg1;
                var1 = var1.reset;
                return var1;
            };
            var19 = var20.bind(var4)(var19);
            var _closure2_slot11 = var19;
            var20 = _closure1_slot17;
            var3 = var39[var3];
            var3 = var44.bind(var4)(var3);
            var19 = var3.shallow;
            var3 = function(arg1) {
                var2 = arg1;
                var3 = var2.rect;
                var1 = new Array(2);
                var1[0] = var3;
                var2 = var2.reset;
                var1[1] = var2;
                return var1;
            };
            var3 = var20.bind(var4)(var3, var19);
            var3 = var13.bind(var4)(var3, var10);
            var8 = var3[var8];
            var _closure2_slot12 = var8;
            var3 = var3[var38];
            var _closure2_slot13 = var3;
            var37 = _closure1_slot1;
            var3 = 17;
            var3 = var39[var3];
            var8 = var37.bind(var4)(var3);
            var3 = function() {
                var1 = function() {
                    var3 = _closure2_slot10;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var3 = _closure2_slot13;
                    var3 = var3.bind(var1)();
                    var2 = _closure2_slot11;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                return var1;
            };
            var3 = var8.bind(var4)(var3);
            var8 = _closure1_slot2;
            var3 = 18;
            var3 = var39[var3];
            var8 = var8.bind(var4)(var3);
            var3 = var8.useTrackRemixingSurfaceOpenAndExit;
            var3 = var3.bind(var8)();
            var2 = var39[var2];
            var2 = var37.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = 19;
            var2 = var39[var2];
            var8 = var44.bind(var4)(var2);
            var3 = var8.useDominantColorsFromImage;
            var2 = var15.uri;
            var52 = var3.bind(var8)(var2);
            var2 = 20;
            var2 = var39[var2];
            var3 = var44.bind(var4)(var2);
            var2 = var3.useDrawingHooks;
            var2 = var2.bind(var3)();
            var48 = var2.drawingPath;
            var26 = var2.drawingColor;
            var27 = var2.strokeWidth;
            var13 = var2.isActivelyDrawing;
            var25 = var2.carouselIndex;
            var47 = var2.setIsActivelyDrawing;
            var23 = var2.setCarouselIndex;
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 23; continue _fun0003 }
 13:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = var5.useEffect;
            var2 = function() {
                var2 = global;
                var5 = var2.setTimeout;
                var4 = undefined;
                var3 = function() {
                    var3 = _closure2_slot5;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = 2000;
                var2 = var5.bind(var4)(var3, var2);
                var1 = function() {
                    var3 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.exitRemixing;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var5)(var2, var1);
            var1 = var39[var17];
            var5 = var44.bind(var4)(var1);
            var3 = var5.useAnimatedReaction;
            var2 = function ue() {
                var2 = _closure2_slot3;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = {};
            var1['activeId'] = var49;
            var2['__closure'] = var1;
            var1 = 1306604858046.0;
            var2['__workletHash'] = var1;
            var1 = _closure1_slot24;
            var2['__initData'] = var1;
            var1 = function de(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var7 = arg1;
                    var1 = '';
                    if(!(var1 === var7)) { _fun0004_ip = 90; continue _fun0004 }
 11:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 13;
                    var1 = var6[var4];
                    var3 = undefined;
                    var9 = var5.bind(var3)(var1);
                    var8 = var9.runOnJS;
                    var2 = _closure2_slot7;
                    var8 = var8.bind(var9)(var2);
                    var2 = false;
                    var8 = var8.bind(var3)(var2);
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot8;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var3)(var2);
                    _fun0004_ip = 183; continue _fun0004;
 90:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var6 = 13;
                    var1 = var1[var6];
                    var3 = undefined;
                    var8 = var2.bind(var3)(var1);
                    var5 = var8.runOnJS;
                    var2 = _closure2_slot7;
                    var5 = var5.bind(var8)(var2);
                    var2 = true;
                    var5 = var5.bind(var3)(var2);
                    var5 = _closure1_slot18;
                    if(!(var7 !== var5)) { _fun0004_ip = 183; continue _fun0004 }
 147:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var6];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot8;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var3)(var2);
 183:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = {};
            var17 = var39[var17];
            var17 = var44.bind(var4)(var17);
            var17 = var17.runOnJS;
            var8['runOnJS'] = var17;
            var8['setHideToolBars'] = var16;
            var16 = _closure1_slot18;
            var8['BACKDROP_ID'] = var16;
            var8['setShowTrash'] = var14;
            var1['__closure'] = var8;
            var8 = 6692088303933.0;
            var1['__workletHash'] = var8;
            var8 = _closure1_slot25;
            var1['__initData'] = var8;
            var1 = var3.bind(var5)(var2, var1);
            var14 = function clearActiveId() {
                var3 = _closure2_slot3;
                var2 = var3.set;
                var1 = '';
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var _closure2_slot14 = var14;
            var1 = 22;
            var1 = var39[var1];
            var1 = var37.bind(var4)(var1);
            var22 = var1.bind(var4)();
            var43 = {};
            var43['height'] = var11;
            var43['width'] = var12;
            var1 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 76; continue _fun0005 }
 7:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 23;
                            var2 = var3[var2];
                            var3 = undefined;
                            var7 = var4.bind(var3)(var2);
                            var6 = var7.saveRemix;
                            var5 = _closure2_slot6;
                            var4 = _closure2_slot0;
                            var2 = _closure2_slot12;
                            var2 = var6.bind(var7)(var5, var4, var2);
                            SaveGenerator(address=64);
 62:
                            return var2;
 64:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0005_ip = 73; continue _fun0005 }
 70:
                            return var3;
 73:
                            return var2;
 76:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var29 = var1.bind(var4)();
            var1 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0006_ip = 121; continue _fun0006 }
 7:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var2 = 23;
                            var2 = var9[var2];
                            var3 = undefined;
                            var5 = var8.bind(var3)(var2);
                            var4 = var5.sendRemix;
                            var2 = {};
                            var7 = _closure2_slot6;
                            var2['ref'] = var7;
                            var7 = _closure2_slot0;
                            var2['source'] = var7;
                            var7 = _closure2_slot12;
                            var2['rect'] = var7;
                            var7 = 19;
                            var7 = var9[var7];
                            var8 = var8.bind(var3)(var7);
                            var7 = var8.getRemixMentions;
                            var6 = _closure2_slot2;
                            var6 = var7.bind(var8)(var6);
                            var2['mentions'] = var6;
                            var2 = var4.bind(var5)(var2);
                            SaveGenerator(address=109);
 107:
                            return var2;
 109:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0006_ip = 118; continue _fun0006 }
 115:
                            return var3;
 118:
                            return var2;
 121:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var30 = var1.bind(var4)();
            var1 = 24;
            var1 = var39[var1];
            var3 = var44.bind(var4)(var1);
            var2 = var3.useTextHooks;
            var1 = {};
            var5 = {};
            var5['width'] = var12;
            var5['height'] = var11;
            var1['canvasSize'] = var5;
            var1['scaleFactor'] = var38;
            var1 = var2.bind(var3)(var1);
            var46 = var1.editText;
            var24 = var1.onUnmount;
            var3 = _closure1_slot21;
            var2 = _closure1_slot22;
            var1 = {};
            var17 = _closure1_slot20;
            var8 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure1_slot23;
                    var4 = undefined;
                    var7 = var2.bind(var4)();
                    var3 = _closure1_slot20;
                    var2 = _closure1_slot8;
                    var1 = {};
                    var6 = var7.gestureCover;
                    var5 = new Array(2);
                    var5[0] = var6;
                    var8 = _closure2_slot4;
                    var6 = undefined;
                    if(!var8) { _fun0007_ip = 55; continue _fun0007 }
 49:
                    var6 = var7.ready;
 55:
                    var5[1] = var6;
                    var1['style'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var5 = {};
            var8 = var17.bind(var4)(var8, var5);
            var5 = new Array(9);
            var5[0] = var8;
            var16 = _closure1_slot8;
            var8 = {};
            var20 = var21.screenCover;
            var19 = new Array(1);
            var19[0] = var20;
            var8['style'] = var19;
            var19 = 25;
            var19 = var39[var19];
            var19 = var44.bind(var4)(var19);
            var31 = var19.SafeAreaPaddingView;
            var19 = {'top': true, 'bottom': true};
            var20 = true;
            var32 = {};
            var34 = var21.canvasContainer;
            var32['style'] = var34;
            var33 = var39[var33];
            var33 = var44.bind(var4)(var33);
            var34 = var33.Canvas;
            var33 = {};
            var36 = {};
            var36['width'] = var12;
            var36['height'] = var11;
            var33['style'] = var36;
            var33['ref'] = var35;
            var35 = 26;
            var35 = var39[var35];
            var36 = var37.bind(var4)(var35);
            var35 = {};
            var35['dominantColors'] = var52;
            var35['height'] = var11;
            var35['width'] = var12;
            var36 = var17.bind(var4)(var36, var35);
            var35 = new Array(4);
            var35[0] = var36;
            var36 = 27;
            var36 = var39[var36];
            var52 = var37.bind(var4)(var36);
            var36 = {};
            var36['components'] = var51;
            var36['activeId'] = var49;
            var36['transformMap'] = var50;
            var36 = var17.bind(var4)(var52, var36);
            var35[1] = var36;
            var36 = 28;
            var36 = var39[var36];
            var36 = var44.bind(var4)(var36);
            var52 = var36.DrawingPath;
            var36 = {};
            var36['path'] = var48;
            var36['color'] = var26;
            var36['strokeWidth'] = var27;
            var36 = var17.bind(var4)(var52, var36);
            var35[2] = var36;
            var36 = 29;
            var36 = var39[var36];
            var52 = var37.bind(var4)(var36);
            var36 = {};
            var36['canvasHeight'] = var11;
            var36['canvasWidth'] = var12;
            var36['source'] = var15;
            var36 = var17.bind(var4)(var52, var36);
            var35[3] = var36;
            var33['children'] = var35;
            var34 = var3.bind(var4)(var34, var33);
            var33 = new Array(2);
            var33[0] = var34;
            var34 = {};
            var35 = {'position': 'absolute', 'width': null, 'height': null, 'top': 0, 'left': 0};
            var35['width'] = var12;
            var35['height'] = var11;
            var34['style'] = var35;
            var35 = 30;
            var35 = var39[var35];
            var36 = var37.bind(var4)(var35);
            var35 = {};
            var35['components'] = var51;
            var35['transformMap'] = var50;
            var35['hoveringOverTrash'] = var40;
            var35['trashCanAreaRef'] = var45;
            var35['activeId'] = var49;
            var35['editText'] = var46;
            var36 = var17.bind(var4)(var36, var35);
            var35 = new Array(3);
            var35[0] = var36;
            var36 = 31;
            var36 = var39[var36];
            var36 = var44.bind(var4)(var36);
            var46 = var36.DrawingGestureHandler;
            var36 = {};
            var36['drawingPath'] = var48;
            var36['setIsActivelyDrawing'] = var47;
            var36['color'] = var26;
            var36['strokeWidth'] = var27;
            var36['canvasSize'] = var43;
            var36 = var17.bind(var4)(var46, var36);
            var35[1] = var36;
            var36 = 32;
            var36 = var39[var36];
            var37 = var37.bind(var4)(var36);
            var36 = {};
            var36['ref'] = var45;
            var36['visible'] = var41;
            var36['focused'] = var40;
            var40 = global;
            var41 = var40.Math;
            var40 = var41.min;
            var38 = var38 * var11;
            var43 = var43.height;
            var22 = var22.bottom;
            var43 = var43 - var22;
            var22 = 11;
            var39 = var39[var22];
            var39 = var44.bind(var4)(var39);
            var39 = var39.TRASH_CAN_ICON_CONTAINER_SIZE;
            var43 = var43 - var39;
            var39 = 4;
            var39 = var43 - var39;
            var38 = var38 + var42;
            var38 = var40.bind(var41)(var38, var39);
            var36['top'] = var38;
            var36 = var17.bind(var4)(var37, var36);
            var35[2] = var36;
            var34['children'] = var35;
            var34 = var3.bind(var4)(var16, var34);
            var33[1] = var34;
            var32['children'] = var33;
            var32 = var3.bind(var4)(var16, var32);
            var19['children'] = var32;
            var19 = var17.bind(var4)(var31, var19);
            var8['children'] = var19;
            var8 = var17.bind(var4)(var16, var8);
            var5[1] = var8;
            var8 = !var7;
            if(!var8) { _fun0001_ip = 1565; continue _fun0001 }
 1562:
            var8 = !var13;
 1565:
            if(!var8) { _fun0001_ip = 1580; continue _fun0001 }
 1568:
            var16 = _closure1_slot10;
            var16 = var16.bind(var4)(var9);
            var8 = !var16;
 1580:
            if(!var8) { _fun0001_ip = 1595; continue _fun0001 }
 1583:
            var16 = _closure1_slot12;
            var16 = var16.bind(var4)(var9);
            var8 = !var16;
 1595:
            if(!var8) { _fun0001_ip = 1610; continue _fun0001 }
 1598:
            var16 = _closure1_slot14;
            var16 = var16.bind(var4)(var9);
            var8 = !var16;
 1610:
            if(!var8) { _fun0001_ip = 1675; continue _fun0001 }
 1613:
            var19 = _closure1_slot20;
            var17 = _closure1_slot1;
            var31 = _closure1_slot3;
            var16 = 33;
            var16 = var31[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var16['clearActiveId'] = var14;
            var16['sendRemix'] = var30;
            var16['saveRemix'] = var29;
            var16['animated'] = var20;
            var16['undoRedoSaveVisible'] = var20;
            var16['onExit'] = var28;
            var8 = var19.bind(var4)(var17, var16);
 1675:
            var5[2] = var8;
            var8 = _closure1_slot11;
            var8 = var8.bind(var4)(var9);
            if(!var8) { _fun0001_ip = 1741; continue _fun0001 }
 1691:
            var19 = _closure1_slot20;
            var17 = _closure1_slot1;
            var28 = _closure1_slot3;
            var16 = 34;
            var16 = var28[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var16['color'] = var26;
            var16['size'] = var27;
            var16['canvasWidth'] = var12;
            var16['drawing'] = var13;
            var8 = var19.bind(var4)(var17, var16);
 1741:
            var5[3] = var8;
            var8 = _closure1_slot11;
            var8 = var8.bind(var4)(var9);
            if(!var8) { _fun0001_ip = 1760; continue _fun0001 }
 1757:
            var8 = !var13;
 1760:
            if(!var8) { _fun0001_ip = 1881; continue _fun0001 }
 1763:
            var17 = _closure1_slot20;
            var16 = _closure1_slot1;
            var19 = _closure1_slot3;
            var13 = 35;
            var13 = var19[var13];
            var16 = var16.bind(var4)(var13);
            var13 = {};
            var13['usePagination'] = var20;
            var13['selectedColor'] = var26;
            var13['carouselIndex'] = var25;
            var13['setCarouselIndex'] = var23;
            var25 = _closure1_slot2;
            var23 = 21;
            var23 = var19[var23];
            var23 = var25.bind(var4)(var23);
            var23 = var23.setDrawingColor;
            var13['setColor'] = var23;
            var13['forDrawing'] = var20;
            var20 = var21.carouselAnimatedView;
            var13['animatedViewStyle'] = var20;
            var20 = _closure1_slot0;
            var19 = var19[var22];
            var19 = var20.bind(var4)(var19);
            var19 = var19.COLOR_CAROUSEL_WIDTH;
            var13['width'] = var19;
            var8 = var17.bind(var4)(var16, var13);
 1881:
            var5[4] = var8;
            var8 = _closure1_slot12;
            var8 = var8.bind(var4)(var9);
            if(!var8) { _fun0001_ip = 2044; continue _fun0001 }
 1900:
            var17 = _closure1_slot20;
            var16 = _closure1_slot7;
            var13 = {};
            var18 = function onPress() {
                var3 = _closure2_slot14;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot9;
                var2 = _closure1_slot19;
                var2 = var2.DEFAULT_MODE;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var13['onPress'] = var18;
            var20 = _closure1_slot21;
            var23 = _closure1_slot1;
            var25 = _closure1_slot3;
            var18 = 36;
            var18 = var25[var18];
            var19 = var23.bind(var4)(var18);
            var18 = {};
            var21 = var21.textEditorContainer;
            var18['style'] = var21;
            var21 = 33;
            var21 = var25[var21];
            var22 = var23.bind(var4)(var21);
            var21 = {};
            var22 = var17.bind(var4)(var22, var21);
            var21 = new Array(2);
            var21[0] = var22;
            var22 = 37;
            var22 = var25[var22];
            var23 = var23.bind(var4)(var22);
            var22 = {};
            var22['canvasWidth'] = var12;
            var22['onUnmount'] = var24;
            var22['clearActiveId'] = var14;
            var22 = var17.bind(var4)(var23, var22);
            var21[1] = var22;
            var18['children'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var13['children'] = var18;
            var8 = var17.bind(var4)(var16, var13);
 2044:
            var5[5] = var8;
            var7 = !var7;
            if(!var7) { _fun0001_ip = 2066; continue _fun0001 }
 2054:
            var8 = _closure1_slot9;
            var8 = var8.bind(var4)(var9);
            var7 = !var8;
 2066:
            if(!var7) { _fun0001_ip = 2138; continue _fun0001 }
 2069:
            var13 = _closure1_slot20;
            var9 = _closure1_slot1;
            var16 = _closure1_slot3;
            var8 = 38;
            var8 = var16[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var15 = var15.channelId;
            var8['channelId'] = var15;
            var8['clearActiveId'] = var14;
            var14 = {};
            var15 = var12 / var10;
            var14['x'] = var15;
            var15 = var11 / var10;
            var14['y'] = var15;
            var8['canvasCenterPoint'] = var14;
            var7 = var13.bind(var4)(var9, var8);
 2138:
            var5[6] = var7;
            var8 = _closure1_slot20;
            var7 = _closure1_slot1;
            var9 = _closure1_slot3;
            var6 = 39;
            var6 = var9[var6];
            var13 = var7.bind(var4)(var6);
            var6 = {};
            var6['canvasHeight'] = var11;
            var6['canvasWidth'] = var12;
            var6 = var8.bind(var4)(var13, var6);
            var5[7] = var6;
            var6 = 40;
            var6 = var9[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var9 = {};
            var12 = var12 / var10;
            var9['x'] = var12;
            var10 = var11 / var10;
            var9['y'] = var10;
            var6['canvasCenterPoint'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[8] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
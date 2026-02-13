// app/modules/media_keyboard/native/components/MediaKeyboardList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.NativeEventEmitter;
    var4 = var4.NativeModules;
    var _closure1_slot5 = var4;
    var8 = 3;
    var8 = var6[var8];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.InAppCameraUsedCameraPreviewTypes;
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ACTION_SHEET_START_HEIGHT_RATIO;
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.NativePermissionStatus;
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.jsx;
    var _closure1_slot10 = var8;
    var16 = var4.PhotoLibraryHelper;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var17 = var8;
    var4 = new var17[var9](var16, var15);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot11 = var4;
    var11 = 8;
    var4 = var6[var11];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var12 = 9;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var10['backgroundColor'] = var12;
    var12 = 10;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.HEADER_PADDING_BOTTOM;
    var12 = var12 - var11;
    var10['marginTop'] = var12;
    var10['paddingTop'] = var11;
    var4['listContainer'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardListTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get();}';
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardListTsx2(currentIndex){const{latch,runOnJS,setIsExpanded}=this.__closure;if(currentIndex>0.1&&!latch.get()){latch.set(true);runOnJS(setIsExpanded)(true);}}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardListTsx3(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}';
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardListTsx4(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}';
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var4 = var7.memo;
    var2 = function MediaKeyboardList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var35 = var1.channel;
            var _closure2_slot0 = var35;
            var34 = var1.draftType;
            var _closure2_slot1 = var34;
            var17 = var1.onPressCamera;
            var _closure2_slot2 = var17;
            var32 = var1.onAttachPress;
            var _closure2_slot3 = var32;
            var31 = var1.onPressItem;
            var _closure2_slot4 = var31;
            var30 = var1.onLongPressItem;
            var _closure2_slot5 = var30;
            var24 = var1.onViewAll;
            var _closure2_slot6 = var24;
            var29 = var1.includedUploadIds;
            var _closure2_slot7 = var29;
            var4 = var1.uploadDisabled;
            var5 = undefined;
            if(!(var4 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = false;
case 2:
            var _closure2_slot8 = var4;
            var28 = var1.uploadLimit;
            var _closure2_slot9 = var28;
            var27 = var1.disableWhenReachedLimit;
            var _closure2_slot10 = var27;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var _closure2_slot16 = var5;
            var _closure2_slot17 = var5;
            var _closure2_slot18 = var5;
            var _closure2_slot19 = var5;
            var _closure2_slot20 = var5;
            var _closure2_slot21 = var5;
            var _closure2_slot22 = var5;
            var _closure2_slot23 = var5;
            var _closure2_slot24 = var5;
            var _closure2_slot25 = var5;
            var _closure2_slot26 = var5;
            var _closure2_slot27 = var5;
            var22 = _closure1_slot4;
            var1 = var22.useRef;
            var14 = true;
            var1 = var1.bind(var22)(var14);
            _closure2_slot11 = var1;
            var3 = var22.useCallback;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function(arg1) {
                var2 = _closure2_slot11;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.contentOffset;
                var3 = var1.y;
                var1 = 100;
                var1 = var3 < var1;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var12 = var3.bind(var22)(var1, var2);
            var1 = var22.useState;
            var2 = null;
            var1 = var1.bind(var22)(var2);
            var6 = _closure1_slot3;
            var21 = 2;
            var1 = var6.bind(var5)(var1, var21);
            var18 = 0;
            var23 = var1[var18];
            _closure2_slot12 = var23;
            var3 = 1;
            var1 = var1[var3];
            _closure2_slot13 = var1;
            var11 = _closure1_slot1;
            var41 = _closure1_slot2;
            var1 = 13;
            var1 = var41[var1];
            var8 = var11.bind(var5)(var1);
            var1 = var8.useAssets;
            var25 = var1.bind(var8)();
            _closure2_slot14 = var25;
            var40 = _closure1_slot0;
            var1 = 14;
            var1 = var41[var1];
            var8 = var40.bind(var5)(var1);
            var1 = var8.useMediaKeyboardItemsPerRow;
            var1 = var1.bind(var8)();
            var10 = var1.itemsPerRow;
            _closure2_slot15 = var10;
            var13 = var1.itemsPageSizeRef;
            _closure2_slot16 = var13;
            var15 = var22.useEffect;
            var8 = function() {
                var1 = _closure1_slot5;
                var2 = var1.NativePermissionManager;
                var1 = var2.requestPhotoAuthorization;
                var3 = var1.bind(var2)();
                var2 = var3.then;
                var1 = function(arg1) {
                    var3 = _closure2_slot13;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = new Array(0);
            var1 = var15.bind(var22)(var8, var1);
            var15 = var22.useEffect;
            var8 = new Array(2);
            var8[0] = var23;
            var8[1] = var13;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot12;
                    var2 = _closure1_slot9;
                    var2 = var2.AUTHORIZED;
                    if(!(var4 !== var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot12;
                    var2 = _closure1_slot9;
                    var2 = var2.LIMITED;
                    if(!(var4 !== var2)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var2 = undefined;
                    return var2;
case 4:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 13;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.refreshAssets;
                    var4 = {};
                    var7 = _closure2_slot16;
                    var7 = var7.current;
                    var4['batchSize'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure1_slot11;
                    var4 = null;
                    var4 = var4 == var5;
                    if(var4) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var6 = _closure1_slot11;
                    var5 = var6.addListener;
                    var4 = 'photoLibraryChanged';
                    var3 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var1 = _closure2_slot11;
                            var1 = var1.current;
                            if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.refreshAssets;
                            var1 = {};
                            var4 = _closure2_slot16;
                            var4 = var4.current;
                            var1['batchSize'] = var4;
                            var1 = var2.bind(var3)(var1);
case 9:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var5.bind(var6)(var4, var3);
case 7:
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var3 = _closure3_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                            var2 = _closure3_slot0;
                            var1 = var2.remove;
                            var1 = var1.bind(var2)();
case 11:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var1 = var15.bind(var22)(var1, var8);
            var1 = 15;
            var1 = var41[var1];
            var1 = var11.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var8 = var1.top;
            var26 = 16;
            var1 = var41[var26];
            var11 = var11.bind(var5)(var1);
            var1 = {};
            var1['ignoreKeyboard'] = var14;
            var1 = var11.bind(var5)(var1);
            var37 = var1.height;
            _closure2_slot17 = var37;
            var1 = _closure1_slot8;
            var36 = var37 * var1;
            _closure2_slot18 = var36;
            var1 = 17;
            var1 = var41[var1];
            var1 = var40.bind(var5)(var1);
            var1 = var1.NAV_BAR_HEIGHT_MULTILINE;
            var1 = var37 - var1;
            var33 = var1 - var8;
            _closure2_slot19 = var33;
            var1 = 18;
            var1 = var41[var1];
            var8 = var40.bind(var5)(var1);
            var1 = var8.useBottomSheetInternal;
            var1 = var1.bind(var8)();
            var20 = var1.animatedSnapPoints;
            _closure2_slot20 = var20;
            var11 = var1.animatedIndex;
            var8 = var22.useState;
            var1 = {};
            var1['minimum'] = var36;
            var1['maximum'] = var33;
            var1 = var8.bind(var22)(var1);
            var8 = var6.bind(var5)(var1, var21);
            var1 = var8[var18];
            var6 = var1.minimum;
            var1 = var1.maximum;
            var38 = var8[var3];
            _closure2_slot21 = var38;
            var39 = 12;
            var8 = var41[var39];
            var19 = var40.bind(var5)(var8);
            var16 = var19.useAnimatedReaction;
            var15 = function J() {
                var2 = _closure2_slot20;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = {};
            var8['animatedSnapPoints'] = var20;
            var15['__closure'] = var8;
            var8 = 7279123713809.0;
            var15['__workletHash'] = var8;
            var8 = _closure1_slot15;
            var15['__initData'] = var8;
            var8 = function z(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var8 = arg1;
                    var6 = arg2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 19;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.cheapWorkletArrayShallowEqual;
                    var7 = null;
                    var9 = var7 != var6;
                    var3 = undefined;
                    if(!var9) { _fun0005_ip = 13; continue _fun0005 }
case 4:
                    var3 = var6;
case 13:
                    var3 = var4.bind(var5)(var8, var3);
                    if(var3) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 12;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot21;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var5 = _closure2_slot17;
                    var4 = 0;
                    var4 = var8[var4];
                    if(!(var7 == var4)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var4 = _closure2_slot18;
case 16:
                    var4 = var5 - var4;
                    var2['minimum'] = var4;
                    var5 = _closure2_slot17;
                    var9 = var8.length;
                    var4 = 1;
                    var4 = var9 - var4;
                    var4 = var8[var4];
                    if(!(var7 == var4)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var4 = _closure2_slot19;
case 18:
                    var4 = var5 - var4;
                    var2['maximum'] = var4;
                    var2 = var3.bind(var1)(var2);
case 14:
                    return var1;
                }
            };
            var20 = {};
            var42 = 19;
            var42 = var41[var42];
            var42 = var40.bind(var5)(var42);
            var42 = var42.cheapWorkletArrayShallowEqual;
            var20['cheapWorkletArrayShallowEqual'] = var42;
            var39 = var41[var39];
            var39 = var40.bind(var5)(var39);
            var39 = var39.runOnJS;
            var20['runOnJS'] = var39;
            var20['setBottomSheetState'] = var38;
            var20['windowHeight'] = var37;
            var20['computedStartHeight'] = var36;
            var20['maxDynamicContentSize'] = var33;
            var8['__closure'] = var20;
            var20 = 4619753074319.0;
            var8['__workletHash'] = var20;
            var20 = _closure1_slot16;
            var8['__initData'] = var20;
            var8 = var16.bind(var19)(var15, var8);
            var8 = function useHasMediaKeyboardBottomSheetExpanded(arg1) {
                var14 = arg1;
                var _closure3_slot0 = var14;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 11;
                var1 = var12[var1];
                var10 = undefined;
                var1 = var11.bind(var10)(var1);
                var4 = var1.MediaKeyboardSkipFullImageLoadingExperiment;
                var3 = var4.useConfig;
                var1 = {};
                var5 = 'useIsBottomSheetExpanded';
                var1['location'] = var5;
                var1 = var3.bind(var4)(var1);
                var3 = var1.enabled;
                var5 = _closure1_slot4;
                var4 = var5.useState;
                var1 = !var3;
                var5 = var4.bind(var5)(var1);
                var4 = _closure1_slot3;
                var1 = 2;
                var5 = var4.bind(var10)(var5, var1);
                var1 = 0;
                var1 = var5[var1];
                var4 = 1;
                var8 = var5[var4];
                var _closure3_slot1 = var8;
                var9 = 12;
                var4 = var12[var9];
                var5 = var11.bind(var10)(var4);
                var4 = var5.useSharedValue;
                var3 = !var3;
                var13 = var4.bind(var5)(var3);
                var _closure3_slot2 = var13;
                var3 = var12[var9];
                var5 = var11.bind(var10)(var3);
                var4 = var5.useAnimatedReaction;
                var3 = function s() {
                    var2 = _closure3_slot0;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7 = {};
                var7['animatedIndex'] = var14;
                var3['__closure'] = var7;
                var7 = 8982138292467.0;
                var3['__workletHash'] = var7;
                var7 = _closure1_slot13;
                var3['__initData'] = var7;
                var2 = function i(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = arg1;
                        var1 = 0.1;
                        var1 = var2 > var1;
                        if(!var1) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                        var3 = _closure3_slot2;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var1 = !var2;
case 20:
                        if(!var1) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                        var4 = _closure3_slot2;
                        var2 = var4.set;
                        var3 = true;
                        var2 = var2.bind(var4)(var3);
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 12;
                        var4 = var4[var2];
                        var2 = undefined;
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.runOnJS;
                        var1 = _closure3_slot1;
                        var1 = var4.bind(var5)(var1);
                        var1 = var1.bind(var2)(var3);
case 22:
                        var1 = undefined;
                        return var1;
                    }
                };
                var7 = {};
                var7['latch'] = var13;
                var9 = var12[var9];
                var9 = var11.bind(var10)(var9);
                var9 = var9.runOnJS;
                var7['runOnJS'] = var9;
                var7['setIsExpanded'] = var8;
                var2['__closure'] = var7;
                var7 = 7990574449734.0;
                var2['__workletHash'] = var7;
                var6 = _closure1_slot14;
                var2['__initData'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var8 = var8.bind(var5)(var11);
            var11 = _closure1_slot12;
            var19 = var11.bind(var5)();
            var20 = var22.useMemo;
            var15 = var2 == var25;
            var11 = undefined;
            if(var15) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var15 = var25.edges;
            var11 = var15.length;
case 24:
            var16 = new Array(2);
            var16[0] = var11;
            var11 = false;
            var16[1] = var11;
            var15 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot14;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                    var3 = _closure2_slot14;
                    var3 = var3.edges;
                    var1 = var3.length;
case 26:
                    var3 = var2 != var1;
                    var2 = 0;
                    if(!var3) { _fun0007_ip = 28; continue _fun0007 }
case 23:
                    var2 = var1;
case 28:
                    var1 = 1;
                    var1 = var2 + var1;
                    return var1;
                }
            };
            var15 = var20.bind(var22)(var15, var16);
            _closure2_slot22 = var15;
            var22 = _closure1_slot4;
            var33 = var22.useMemo;
            var20 = new Array(3);
            var20[0] = var25;
            var20[1] = var11;
            var20[2] = var10;
            var16 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot14;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0008_ip = 29; continue _fun0008 }
case 30:
                    var2 = _closure2_slot14;
                    var2 = var4 == var2;
                    var5 = undefined;
                    var8 = undefined;
                    if(var2) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                    var2 = _closure2_slot14;
                    var8 = var2.edges;
case 31:
                    if(!(var4 == var8)) { _fun0008_ip = 33; continue _fun0008 }
case 28:
                    var8 = new Array(0);
case 33:
                    var6 = new Array(0);
                    var3 = var6.push;
                    var2 = {};
                    var7 = 'camera';
                    var2['type'] = var7;
                    var2 = var3.bind(var6)(var2);
                    var3 = var6.push;
                    var2 = new Array(0);
                    var9 = 0;
                    var11 = var2;
                    var10 = var8;
                    var7 = arraySpread(var11, var10, var9);
                    var11 = var3;
                    var10 = var2;
                    var9 = var6;
                    var2 = apply(var11, var10, var9);
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 20;
                    var2 = var7[var2];
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.chunk;
                    var2 = _closure2_slot15;
                    var2 = var3.bind(var5)(var6, var2);
                    return var2;
case 29:
                    var2 = global;
                    var3 = var2.Array;
                    var5 = _closure2_slot15;
                    var2 = 3;
                    var2 = var2 * var5;
                    var5 = undefined;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.fill;
                    var4 = var2.bind(var3)(var4);
                    var3 = {};
                    var2 = 'camera';
                    var3['type'] = var2;
                    var2 = 0;
                    var4[var2] = var3;
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 20;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.chunk;
                    var1 = _closure2_slot15;
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
                }
            };
            var16 = var33.bind(var22)(var16, var20);
            _closure2_slot23 = var16;
            var33 = var22.useCallback;
            var20 = new Array(1);
            var20[0] = var17;
            var17 = function() {
                var3 = _closure2_slot2;
                var1 = _closure1_slot7;
                var2 = var1.CAMERA_BUTTON;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var33 = var33.bind(var22)(var17, var20);
            _closure2_slot24 = var33;
            var20 = var22.useCallback;
            var17 = new Array(1);
            var17[0] = var13;
            var13 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getNextAssetPage;
                var2 = {};
                var5 = _closure2_slot16;
                var5 = var5.current;
                var2['batchSize'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var13 = var20.bind(var22)(var13, var17);
            var20 = var22.useCallback;
            var17 = new Array(14);
            var17[0] = var35;
            var17[1] = var34;
            var17[2] = var33;
            var17[3] = var24;
            var17[4] = var32;
            var17[5] = var10;
            var17[6] = var31;
            var17[7] = var30;
            var17[8] = var16;
            var17[9] = var29;
            var17[10] = var4;
            var17[11] = var28;
            var17[12] = var27;
            var17[13] = var15;
            var15 = function(arg1, arg2) {
                var6 = arg2;
                var5 = _closure1_slot10;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 21;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = {};
                var7 = _closure2_slot1;
                var2['draftType'] = var7;
                var2['rowIndex'] = var6;
                var7 = _closure2_slot22;
                var2['totalNumItems'] = var7;
                var7 = _closure2_slot0;
                var2['channel'] = var7;
                var7 = _closure2_slot15;
                var2['numPerRow'] = var7;
                var7 = _closure2_slot23;
                var7 = var7[var6];
                var2['items'] = var7;
                var7 = _closure2_slot4;
                var2['onPressItem'] = var7;
                var7 = _closure2_slot5;
                var2['onLongPressItem'] = var7;
                var7 = _closure2_slot7;
                var2['includedUploadIds'] = var7;
                var7 = _closure2_slot9;
                var2['uploadLimit'] = var7;
                var7 = _closure2_slot10;
                var2['disableWhenReachedLimit'] = var7;
                var7 = _closure2_slot24;
                var2['handleCameraPress'] = var7;
                var7 = _closure2_slot3;
                var2['handleAttachPress'] = var7;
                var7 = _closure2_slot6;
                var2['handleViewAllPhotosPress'] = var7;
                var7 = _closure2_slot8;
                var2['disabled'] = var7;
                var1 = _closure2_slot23;
                var8 = var1[var6];
                var7 = var8.reduce;
                var1 = var6.toString;
                var6 = var1.bind(var6)();
                var1 = function(arg1, arg2) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var6 = arg1;
                        var2 = arg2;
                        var3 = null;
                        var1 = var6;
                        if(!(var3 != var2)) { _fun0009_ip = 34; continue _fun0009 }
case 27:
                        var8 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var7 = 21;
                        var4 = var4[var7];
                        var5 = undefined;
                        var8 = var8.bind(var5)(var4);
                        var4 = var8.isMediaCameraNode;
                        var4 = var4.bind(var8)(var2);
                        if(var4) { _fun0009_ip = 35; continue _fun0009 }
case 15:
                        var8 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var8 = var8.bind(var5)(var4);
                        var4 = var8.isAttachFilesNode;
                        var4 = var4.bind(var8)(var2);
                        if(var4) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.isViewAllPhotosNode;
                        var4 = var3.bind(var4)(var2);
                        var3 = global;
                        if(var4) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                        var2 = var2.node;
                        var2 = var2.image;
                        var7 = var2.uri;
                        var2 = var3.HermesInternal;
                        var5 = var2.concat;
                        var4 = '';
                        var2 = '-';
                        var2 = var5.bind(var4)(var6, var2, var7);
                        _fun0009_ip = 40; continue _fun0009;
case 38:
                        var3 = var3.HermesInternal;
                        var5 = var3.concat;
                        var4 = '';
                        var3 = '-view-all';
                        var2 = var5.bind(var4)(var6, var3);
case 40:
                        _fun0009_ip = 41; continue _fun0009;
case 36:
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var5 = var3.concat;
                        var4 = '';
                        var3 = '-attach';
                        var2 = var5.bind(var4)(var6, var3);
case 41:
                        _fun0009_ip = 42; continue _fun0009;
case 35:
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var5 = var3.concat;
                        var4 = '';
                        var3 = '-camera';
                        var2 = var5.bind(var4)(var6, var3);
case 42:
                        var1 = var2;
case 34:
                        return var1;
                    }
                };
                var1 = var7.bind(var8)(var1, var6);
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var17 = var20.bind(var22)(var15, var17);
            var20 = _closure1_slot1;
            var15 = _closure1_slot2;
            var15 = var15[var26];
            var15 = var20.bind(var5)(var15);
            var15 = var15.bind(var5)();
            var26 = var15.width;
            _closure2_slot25 = var26;
            var20 = var22.useMemo;
            var15 = new Array(2);
            var15[0] = var26;
            var15[1] = var10;
            var10 = function() {
                var7 = _closure2_slot25;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 21;
                var6 = var5[var1];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var8 = var6.PARENT_PADDING;
                var6 = var5[var1];
                var6 = var4.bind(var3)(var6);
                var9 = var6.CHILD_PADDING;
                var10 = _closure2_slot15;
                var6 = 1;
                var6 = var10 - var6;
                var6 = var9 * var6;
                var6 = var8 + var6;
                var6 = var7 - var6;
                var2 = _closure2_slot15;
                var2 = var6 / var2;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.SEPARATOR_SIZE;
                var1 = var2 + var1;
                return var1;
            };
            var15 = var20.bind(var22)(var10, var15);
            var20 = var22.useCallback;
            var10 = new Array(2);
            var10[0] = var24;
            var10[1] = var4;
            var4 = function() {
                var4 = _closure1_slot10;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 22;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot8;
                var1['disabled'] = var6;
                var5 = _closure2_slot6;
                var1['onViewAll'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var10 = var20.bind(var22)(var4, var10);
            if(!var8) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var6 = var1;
case 43:
            _closure2_slot26 = var6;
            var24 = _closure1_slot4;
            var20 = var24.useMemo;
            var4 = new Array(1);
            var4[0] = var6;
            var1 = function() {
                var1 = {};
                var2 = _closure2_slot26;
                var1['height'] = var2;
                return var1;
            };
            var20 = var20.bind(var24)(var1, var4);
            var1 = _closure1_slot9;
            var1 = var1.LIMITED;
            var22 = var23 === var1;
            var4 = var24.useState;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var2 = var1.fontScale;
                var1 = 36;
                var2 = var1 * var2;
                var1 = 32;
                var1 = var1 + var2;
                return var1;
            };
            var4 = var4.bind(var24)(var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var5)(var4, var21);
            var21 = var1[var18];
            var1 = var1[var3];
            _closure2_slot27 = var1;
            var4 = var24.useCallback;
            var3 = function() {
                var4 = _closure1_slot10;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 23;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot27;
                var1['onHeightChange'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1 = new Array(0);
            var24 = var4.bind(var24)(var3, var1);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 24;
            var1 = var4[var1];
            var4 = var3.bind(var5)(var1);
            var3 = var4.getMediaEmptyStateComponentOrNull;
            var1 = {};
            var1['photoPermissionStatus'] = var23;
            var23 = var2 != var25;
            if(!var23) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var25 = var25.edges;
            var25 = var25.length;
            var23 = var18 === var25;
case 45:
            var1['photosEmpty'] = var23;
            var23 = function onPressCamera() {
                var3 = _closure2_slot2;
                var1 = _closure1_slot7;
                var2 = var1.TAKE_A_PHOTO_BUTTON;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onPressCamera'] = var23;
            var9 = function onPressLimitedPicker() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure1_slot5;
                    var3 = var1.NativePermissionManager;
                    var5 = null;
                    var2 = var5 == var3;
                    var1 = undefined;
                    if(var2) { _fun0010_ip = 33; continue _fun0010 }
case 47:
                    var2 = var3.presentLimitedLibraryPicker;
                    var2 = var5 == var2;
                    var1 = undefined;
                    if(var2) { _fun0010_ip = 33; continue _fun0010 }
case 20:
                    var2 = var3.presentLimitedLibraryPicker;
                    var1 = var2.bind(var3)();
case 33:
                    return var1;
                }
            };
            var1['onPressLimitedPicker'] = var9;
            var23 = _closure1_slot1;
            var25 = _closure1_slot2;
            var9 = 25;
            var9 = var25[var9];
            var9 = var23.bind(var5)(var9);
            var1['onPressPrivacySettings'] = var9;
            var1 = var3.bind(var4)(var1);
            if(!(var2 == var1)) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var4 = _closure1_slot10;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var9 = 26;
            var2 = var2[var9];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var23 = undefined;
            if(!var22) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var23 = var24;
case 50:
            var2['renderHeader'] = var23;
            var18 = 0;
            if(!var22) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var18 = var21;
case 52:
            var2['headerSize'] = var18;
            var18 = new Array(2);
            var18[0] = var20;
            var19 = var19.listContainer;
            var18[1] = var19;
            var2['style'] = var18;
            var2['renderItem'] = var17;
            var17 = var16.length;
            var16 = new Array(1);
            var16[0] = var17;
            var2['sections'] = var16;
            var2['itemSize'] = var15;
            var2['inActionSheet'] = var14;
            var2['preserveScrollMomentum'] = var14;
            var2['automaticallyAdjustsScrollIndicatorInsets'] = var11;
            var14 = 'none';
            var2['keyboardDismissMode'] = var14;
            var2['onEndReached'] = var13;
            var2['onScroll'] = var12;
            var12 = 400;
            var2['endReachedThreshold'] = var12;
            var12 = 'list';
            var2['accessibilityRole'] = var12;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var14 = 27;
            var15 = var13[var14];
            var15 = var12.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var13[var14];
            var14 = var12.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.XONG6A;
            var14 = var15.bind(var16)(var14);
            var2['accessibilityLabel'] = var14;
            var2['showsVerticalScrollIndicator'] = var11;
            var11 = 22;
            var11 = var13[var11];
            var11 = var12.bind(var5)(var11);
            var11 = var11.FOOTER_HEIGHT;
            var2['footerSize'] = var11;
            var2['renderFooter'] = var10;
            var2['chunkBase'] = var6;
            var6 = undefined;
            if(var8) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var7 = var8.bind(var5)(var7);
            var6 = var7.MINIMUM_BATCHES_TO_RENDER;
case 54:
            var2['batchesToRender'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 48:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboardList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
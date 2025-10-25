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
    var8 = var8.AnalyticEvents;
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ACTION_SHEET_START_HEIGHT_RATIO;
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.NativePermissionStatus;
    var _closure1_slot10 = var8;
    var11 = 8;
    var8 = var6[var11];
    var8 = var5.bind(var1)(var8);
    var8 = var8.jsx;
    var _closure1_slot11 = var8;
    var16 = var4.PhotoLibraryHelper;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var17 = var8;
    var4 = new var17[var9](var16, var15);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var12 = 10;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var12;
    var12 = 11;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.HEADER_PADDING_BOTTOM;
    var12 = var12 - var11;
    var10['marginTop'] = var12;
    var10['paddingTop'] = var11;
    var4['listContainer'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardListTsx1(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardListTsx2(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}';
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var26 = var2.assets;
            var _closure2_slot0 = var26;
            var25 = var2.channel;
            var _closure2_slot1 = var25;
            var24 = var2.draftType;
            var _closure2_slot2 = var24;
            var10 = var2.onEndReached;
            var7 = var2.onPressCamera;
            var _closure2_slot3 = var7;
            var22 = var2.onSelectItem;
            var _closure2_slot4 = var22;
            var8 = var2.onScroll;
            var16 = var2.onViewAll;
            var _closure2_slot5 = var16;
            var5 = var2.maxHeight;
            var _closure2_slot6 = var5;
            var3 = var2.uploadDisabled;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = false;
case 2:
            var _closure2_slot7 = var3;
            var21 = var2.includedUploadIds;
            var _closure2_slot8 = var21;
            var19 = var2.showRemixButton;
            var _closure2_slot9 = var19;
            var17 = var2.uploadLimit;
            var _closure2_slot10 = var17;
            var15 = var2.disableWhenReachedLimit;
            var _closure2_slot11 = var15;
            var13 = var2.photoPermissionStatus;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var2 = _closure1_slot13;
            var14 = var2.bind(var4)();
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 24;
            var2 = var11[var2];
            var6 = var6.bind(var4)(var2);
            var2 = var6.useMediaKeyboardActionsExperiment;
            var2 = var2.bind(var6)();
            var6 = var2.mediaKeyboardActionsType;
            var2 = 'legacy';
            var11 = var2 !== var6;
            _closure2_slot12 = var11;
            var18 = _closure1_slot4;
            var12 = var18.useMemo;
            var2 = null;
            var6 = var2 == var26;
            var2 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var26.edges;
            var2 = var6.length;
case 4:
            var6 = new Array(2);
            var6[0] = var2;
            var6[1] = var11;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = null;
                    var4 = var3 == var2;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure2_slot0;
                    var4 = var4.edges;
                    var2 = var4.length;
case 6:
                    var4 = var3 != var2;
                    var3 = 0;
                    if(!var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = var2;
case 8:
                    var2 = _closure2_slot12;
                    var1 = var3;
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var2 = 1;
                    var1 = var3 + var2;
case 10:
                    return var1;
                }
            };
            var2 = var12.bind(var18)(var2, var6);
            _closure2_slot13 = var2;
            var12 = _closure1_slot0;
            var18 = _closure1_slot2;
            var6 = 25;
            var6 = var18[var6];
            var12 = var12.bind(var4)(var6);
            var6 = var12.useNumMediaItemsPerRow;
            var6 = var6.bind(var12)();
            _closure2_slot14 = var6;
            var20 = _closure1_slot4;
            var23 = var20.useMemo;
            var12 = new Array(3);
            var12[0] = var26;
            var12[1] = var11;
            var12[2] = var6;
            var11 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var2 = _closure2_slot0;
                    var2 = var4 == var2;
                    var5 = undefined;
                    var8 = undefined;
                    if(var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var2 = _closure2_slot0;
                    var8 = var2.edges;
case 14:
                    if(!(var4 == var8)) { _fun0003_ip = 16; continue _fun0003 }
case 8:
                    var8 = new Array(0);
case 16:
                    var6 = new Array(0);
                    var2 = _closure2_slot12;
                    if(var2) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var3 = var6.push;
                    var2 = {};
                    var7 = 'camera';
                    var2['type'] = var7;
                    var2 = var3.bind(var6)(var2);
case 17:
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
                    var2 = 26;
                    var2 = var7[var2];
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.chunk;
                    var2 = _closure2_slot14;
                    var2 = var3.bind(var5)(var6, var2);
                    return var2;
case 12:
                    var2 = global;
                    var3 = var2.Array;
                    var5 = _closure2_slot14;
                    var2 = 3;
                    var2 = var2 * var5;
                    var5 = undefined;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.fill;
                    var4 = var2.bind(var3)(var4);
                    var2 = _closure2_slot12;
                    if(var2) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var3 = {};
                    var2 = 'camera';
                    var3['type'] = var2;
                    var2 = 0;
                    var4[var2] = var3;
case 19:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 26;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.chunk;
                    var1 = _closure2_slot14;
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
                }
            };
            var11 = var23.bind(var20)(var11, var12);
            _closure2_slot15 = var11;
            var23 = var20.useCallback;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = function() {
                var3 = _closure2_slot3;
                var1 = _closure1_slot7;
                var2 = var1.CAMERA_BUTTON;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var23 = var23.bind(var20)(var7, var12);
            _closure2_slot16 = var23;
            var12 = var20.useCallback;
            var7 = new Array(12);
            var7[0] = var25;
            var7[1] = var24;
            var7[2] = var23;
            var7[3] = var6;
            var7[4] = var22;
            var7[5] = var11;
            var7[6] = var21;
            var7[7] = var19;
            var7[8] = var3;
            var7[9] = var17;
            var7[10] = var15;
            var7[11] = var2;
            var2 = function(arg1, arg2) {
                var6 = arg2;
                var5 = _closure1_slot11;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 27;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = {};
                var7 = _closure2_slot2;
                var2['draftType'] = var7;
                var2['rowIndex'] = var6;
                var7 = _closure2_slot13;
                var2['totalNumItems'] = var7;
                var7 = _closure2_slot1;
                var2['channel'] = var7;
                var7 = _closure2_slot14;
                var2['numPerRow'] = var7;
                var7 = _closure2_slot15;
                var7 = var7[var6];
                var2['items'] = var7;
                var7 = _closure2_slot4;
                var2['onSelectItem'] = var7;
                var7 = _closure2_slot8;
                var2['includedUploadIds'] = var7;
                var7 = _closure2_slot9;
                var2['showRemixButton'] = var7;
                var7 = _closure2_slot10;
                var2['uploadLimit'] = var7;
                var7 = _closure2_slot11;
                var2['disableWhenReachedLimit'] = var7;
                var7 = _closure2_slot16;
                var2['handleCameraPress'] = var7;
                var7 = _closure2_slot7;
                var2['disabled'] = var7;
                var1 = _closure2_slot15;
                var8 = var1[var6];
                var7 = var8.reduce;
                var1 = var6.toString;
                var6 = var1.bind(var6)();
                var1 = function(arg1, arg2) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var6 = arg1;
                        var2 = arg2;
                        var3 = null;
                        var1 = var6;
                        if(!(var3 != var2)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 27;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.isMediaCameraNode;
                        var4 = var3.bind(var4)(var2);
                        var3 = global;
                        if(var4) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                        var2 = var2.node;
                        var2 = var2.image;
                        var7 = var2.uri;
                        var2 = var3.HermesInternal;
                        var5 = var2.concat;
                        var4 = '';
                        var2 = '-';
                        var2 = var5.bind(var4)(var6, var2, var7);
                        _fun0004_ip = 25; continue _fun0004;
case 23:
                        var3 = var3.HermesInternal;
                        var5 = var3.concat;
                        var4 = '';
                        var3 = '-camera';
                        var2 = var5.bind(var4)(var6, var3);
case 25:
                        var1 = var2;
case 21:
                        return var1;
                    }
                };
                var1 = var7.bind(var8)(var1, var6);
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var12 = var12.bind(var20)(var2, var7);
            var2 = _closure1_slot1;
            var7 = 17;
            var7 = var18[var7];
            var7 = var2.bind(var4)(var7);
            var7 = var7.bind(var4)();
            var17 = var7.width;
            _closure2_slot17 = var17;
            var15 = var20.useMemo;
            var7 = new Array(2);
            var7[0] = var17;
            var7[1] = var6;
            var6 = function() {
                var7 = _closure2_slot17;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 27;
                var6 = var5[var1];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var8 = var6.PARENT_PADDING;
                var6 = var5[var1];
                var6 = var4.bind(var3)(var6);
                var9 = var6.CHILD_PADDING;
                var10 = _closure2_slot14;
                var6 = 1;
                var6 = var10 - var6;
                var6 = var9 * var6;
                var6 = var8 + var6;
                var6 = var7 - var6;
                var2 = _closure2_slot14;
                var2 = var6 / var2;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.SEPARATOR_SIZE;
                var1 = var2 + var1;
                return var1;
            };
            var7 = var15.bind(var20)(var6, var7);
            var15 = var20.useCallback;
            var6 = new Array(2);
            var6[0] = var16;
            var6[1] = var3;
            var3 = function() {
                var4 = _closure1_slot11;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 28;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot7;
                var1['disabled'] = var6;
                var5 = _closure2_slot5;
                var1['onViewAll'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var6 = var15.bind(var20)(var3, var6);
            var16 = var20.useMemo;
            var15 = new Array(1);
            var15[0] = var5;
            var3 = function() {
                var1 = {};
                var2 = _closure2_slot6;
                var1['height'] = var2;
                return var1;
            };
            var15 = var16.bind(var20)(var3, var15);
            var3 = _closure1_slot10;
            var3 = var3.LIMITED;
            var17 = var13 === var3;
            var13 = var20.useState;
            var3 = function() {
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
            var16 = var13.bind(var20)(var3);
            var13 = _closure1_slot3;
            var3 = 2;
            var19 = var13.bind(var4)(var16, var3);
            var13 = 0;
            var16 = var19[var13];
            var3 = 1;
            var3 = var19[var3];
            _closure2_slot18 = var3;
            var19 = var20.useCallback;
            var3 = function() {
                var4 = _closure1_slot11;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 29;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot18;
                var1['onHeightChange'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1 = new Array(0);
            var19 = var19.bind(var20)(var3, var1);
            var3 = _closure1_slot11;
            var1 = 30;
            var1 = var18[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var18 = undefined;
            if(!var17) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var18 = var19;
case 26:
            var1['renderHeader'] = var18;
            var13 = 0;
            if(!var17) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var13 = var16;
case 28:
            var1['headerSize'] = var13;
            var13 = new Array(2);
            var13[0] = var15;
            var14 = var14.listContainer;
            var13[1] = var14;
            var1['style'] = var13;
            var1['renderItem'] = var12;
            var12 = var11.length;
            var11 = new Array(1);
            var11[0] = var12;
            var1['sections'] = var11;
            var1['itemSize'] = var7;
            var7 = true;
            var1['inActionSheet'] = var7;
            var1['preserveScrollMomentum'] = var7;
            var7 = false;
            var1['automaticallyAdjustsScrollIndicatorInsets'] = var7;
            var11 = 'none';
            var1['keyboardDismissMode'] = var11;
            var1['onEndReached'] = var10;
            var1['onScroll'] = var8;
            var8 = 400;
            var1['endReachedThreshold'] = var8;
            var8 = 'list';
            var1['accessibilityRole'] = var8;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = 31;
            var11 = var9[var10];
            var11 = var8.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var9[var10];
            var10 = var8.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.XONG6A;
            var10 = var11.bind(var12)(var10);
            var1['accessibilityLabel'] = var10;
            var1['showsVerticalScrollIndicator'] = var7;
            var7 = 28;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.FOOTER_HEIGHT;
            var1['footerSize'] = var7;
            var1['renderFooter'] = var6;
            var1['chunkBase'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot16 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var20 = var1.channel;
            var19 = var1.draftType;
            var16 = var1.onPressCamera;
            var _closure2_slot0 = var16;
            var14 = var1.onSelectItem;
            var13 = var1.onViewAll;
            var12 = var1.includedUploadIds;
            var11 = var1.showRemixButton;
            var7 = var1.uploadDisabled;
            var10 = var1.uploadLimit;
            var9 = var1.disableWhenReachedLimit;
            var31 = _closure1_slot4;
            var1 = var31.useRef;
            var28 = true;
            var1 = var1.bind(var31)(var28);
            var _closure2_slot1 = var1;
            var4 = var31.useCallback;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function(arg1) {
                var2 = _closure2_slot1;
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
            var15 = var4.bind(var31)(var1, var3);
            var1 = var31.useState;
            var3 = null;
            var1 = var1.bind(var31)(var3);
            var24 = _closure1_slot3;
            var5 = undefined;
            var8 = 2;
            var1 = var24.bind(var5)(var1, var8);
            var25 = 0;
            var6 = var1[var25];
            var _closure2_slot2 = var6;
            var23 = 1;
            var1 = var1[var23];
            var _closure2_slot3 = var1;
            var4 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = 12;
            var1 = var21[var1];
            var17 = var4.bind(var5)(var1);
            var1 = var17.useDeviceMedia;
            var1 = var1.bind(var17)();
            var18 = var1.assets;
            var26 = var1.refreshAssets;
            var _closure2_slot4 = var26;
            var30 = var1.fetchNextPage;
            var _closure2_slot5 = var30;
            var29 = var1.page;
            var _closure2_slot6 = var29;
            var1 = var1.hasReachedEnd;
            var _closure2_slot7 = var1;
            var27 = _closure1_slot1;
            var17 = 13;
            var17 = var21[var17];
            var33 = var27.bind(var5)(var17);
            var32 = var33.useExperiment;
            var17 = {};
            var34 = 'media_keyboard_list';
            var17['location'] = var34;
            var17 = var32.bind(var33)(var17);
            var _closure2_slot8 = var17;
            var34 = var31.useEffect;
            var33 = function() {
                var1 = _closure1_slot5;
                var2 = var1.NativePermissionManager;
                var1 = var2.requestPhotoAuthorization;
                var3 = var1.bind(var2)();
                var2 = var3.then;
                var1 = function(arg1) {
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var32 = new Array(0);
            var32 = var34.bind(var31)(var33, var32);
            var33 = var31.useEffect;
            var32 = new Array(2);
            var32[0] = var6;
            var32[1] = var26;
            var26 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = _closure2_slot2;
                    var4 = _closure1_slot10;
                    var4 = var4.AUTHORIZED;
                    if(!(var5 !== var4)) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                    var5 = _closure2_slot2;
                    var4 = _closure1_slot10;
                    var4 = var4.LIMITED;
                    if(!(var5 !== var4)) { _fun0006_ip = 30; continue _fun0006 }
case 32:
                    var4 = undefined;
                    return var4;
case 30:
                    var5 = _closure2_slot4;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 12;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var6.bind(var2)(var4);
                    var4 = var4.BATCH_SIZE;
                    var4 = var5.bind(var2)(var4);
                    var5 = _closure1_slot12;
                    var4 = null;
                    var4 = var4 == var5;
                    if(var4) { _fun0006_ip = 33; continue _fun0006 }
case 3:
                    var6 = _closure1_slot12;
                    var5 = var6.addListener;
                    var4 = 'photoLibraryChanged';
                    var3 = function() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var2 = _closure2_slot1;
                            var2 = var2.current;
                            if(!var2) { _fun0007_ip = 11; continue _fun0007 }
case 22:
                            var3 = _closure2_slot4;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 12;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var4.bind(var2)(var1);
                            var1 = var1.BATCH_SIZE;
                            var1 = var3.bind(var2)(var1);
case 11:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var5.bind(var6)(var4, var3);
case 33:
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var3 = _closure3_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                            var2 = _closure3_slot0;
                            var1 = var2.remove;
                            var1 = var1.bind(var2)();
case 34:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var26 = var33.bind(var31)(var26, var32);
            var32 = var31.useEffect;
            var17 = var17.enabled;
            var26 = new Array(1);
            var26[0] = var17;
            var17 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                    var2 = _closure1_slot5;
                    var4 = var2.ThumbnailLoaderSettings;
                    var3 = var4.setThumbnailLoaderSerialized;
                    var2 = _closure2_slot8;
                    var2 = var2.enabled;
                    var2 = var3.bind(var4)(var2);
case 36:
                    return var1;
                }
            };
            var17 = var32.bind(var31)(var17, var26);
            var26 = var31.useCallback;
            var17 = new Array(3);
            var17[0] = var30;
            var17[1] = var29;
            var17[2] = var1;
            var1 = function() {
                var2 = _closure2_slot5;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 15;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot8;
                var3 = var2.MEDIA_PICKER_INFINITE_SCROLL_PAGED;
                var2 = {};
                var7 = _closure2_slot6;
                var2['page'] = var7;
                var6 = _closure2_slot7;
                var2['has_reached_end'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var17 = var26.bind(var31)(var1, var17);
            var1 = 16;
            var1 = var21[var1];
            var1 = var27.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var26 = var1.top;
            var1 = 17;
            var1 = var21[var1];
            var27 = var27.bind(var5)(var1);
            var1 = {};
            var1['ignoreKeyboard'] = var28;
            var1 = var27.bind(var5)(var1);
            var30 = var1.height;
            var _closure2_slot9 = var30;
            var1 = _closure1_slot9;
            var29 = var30 * var1;
            var _closure2_slot10 = var29;
            var1 = 18;
            var1 = var21[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.NAV_BAR_HEIGHT_MULTILINE;
            var1 = var30 - var1;
            var28 = var1 - var26;
            var _closure2_slot11 = var28;
            var1 = 19;
            var1 = var21[var1];
            var26 = var4.bind(var5)(var1);
            var1 = var26.useBottomSheetInternal;
            var1 = var1.bind(var26)();
            var27 = var1.animatedSnapPoints;
            var _closure2_slot12 = var27;
            var26 = var31.useState;
            var1 = {};
            var1['minimum'] = var29;
            var1['maximum'] = var28;
            var1 = var26.bind(var31)(var1);
            var1 = var24.bind(var5)(var1, var8);
            var8 = var1[var25];
            var8 = var8.maximum;
            var31 = var1[var23];
            var _closure2_slot13 = var31;
            var32 = 20;
            var1 = var21[var32];
            var26 = var4.bind(var5)(var1);
            var24 = var26.useAnimatedReaction;
            var23 = function W() {
                var2 = _closure2_slot12;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = {};
            var1['animatedSnapPoints'] = var27;
            var23['__closure'] = var1;
            var1 = 11265068281555.0;
            var23['__workletHash'] = var1;
            var1 = _closure1_slot14;
            var23['__initData'] = var1;
            var1 = function U(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var8 = arg1;
                    var6 = arg2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 21;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.cheapWorkletArrayShallowEqual;
                    var7 = null;
                    var9 = var7 != var6;
                    var3 = undefined;
                    if(!var9) { _fun0010_ip = 38; continue _fun0010 }
case 30:
                    var3 = var6;
case 38:
                    var3 = var4.bind(var5)(var8, var3);
                    if(var3) { _fun0010_ip = 39; continue _fun0010 }
case 18:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 20;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot13;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var5 = _closure2_slot9;
                    var4 = 0;
                    var4 = var8[var4];
                    if(!(var7 == var4)) { _fun0010_ip = 40; continue _fun0010 }
case 41:
                    var4 = _closure2_slot10;
case 40:
                    var4 = var5 - var4;
                    var2['minimum'] = var4;
                    var5 = _closure2_slot9;
                    var9 = var8.length;
                    var4 = 1;
                    var4 = var9 - var4;
                    var4 = var8[var4];
                    if(!(var7 == var4)) { _fun0010_ip = 42; continue _fun0010 }
case 43:
                    var4 = _closure2_slot11;
case 42:
                    var4 = var5 - var4;
                    var2['maximum'] = var4;
                    var2 = var3.bind(var1)(var2);
case 39:
                    return var1;
                }
            };
            var27 = {};
            var33 = 21;
            var33 = var21[var33];
            var33 = var4.bind(var5)(var33);
            var33 = var33.cheapWorkletArrayShallowEqual;
            var27['cheapWorkletArrayShallowEqual'] = var33;
            var32 = var21[var32];
            var32 = var4.bind(var5)(var32);
            var32 = var32.runOnJS;
            var27['runOnJS'] = var32;
            var27['setBottomSheetState'] = var31;
            var27['windowHeight'] = var30;
            var27['computedStartHeight'] = var29;
            var27['maxDynamicContentSize'] = var28;
            var1['__closure'] = var27;
            var27 = 911665206857.0;
            var1['__workletHash'] = var27;
            var27 = _closure1_slot15;
            var1['__initData'] = var27;
            var1 = var24.bind(var26)(var23, var1);
            var1 = 22;
            var1 = var21[var1];
            var21 = var4.bind(var5)(var1);
            var4 = var21.getMediaEmptyStateComponentOrNull;
            var1 = {};
            var1['photoPermissionStatus'] = var6;
            var23 = var3 != var18;
            if(!var23) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var24 = var18.edges;
            var24 = var24.length;
            var23 = var25 === var24;
case 44:
            var1['photosEmpty'] = var23;
            var23 = function onPressCamera() {
                var3 = _closure2_slot0;
                var1 = _closure1_slot7;
                var2 = var1.TAKE_A_PHOTO_BUTTON;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onPressCamera'] = var23;
            var22 = function onPressLimitedPicker() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure1_slot5;
                    var3 = var1.NativePermissionManager;
                    var5 = null;
                    var2 = var5 == var3;
                    var1 = undefined;
                    if(var2) { _fun0011_ip = 16; continue _fun0011 }
case 46:
                    var2 = var3.presentLimitedLibraryPicker;
                    var2 = var5 == var2;
                    var1 = undefined;
                    if(var2) { _fun0011_ip = 16; continue _fun0011 }
case 47:
                    var2 = var3.presentLimitedLibraryPicker;
                    var1 = var2.bind(var3)();
case 16:
                    return var1;
                }
            };
            var1['onPressLimitedPicker'] = var22;
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var22 = 23;
            var22 = var24[var22];
            var22 = var23.bind(var5)(var22);
            var1['onPressPrivacySettings'] = var22;
            var1 = var4.bind(var21)(var1);
            if(!(var3 == var1)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var4 = _closure1_slot11;
            var3 = _closure1_slot16;
            var2 = {};
            var2['channel'] = var20;
            var2['draftType'] = var19;
            var2['assets'] = var18;
            var2['onEndReached'] = var17;
            var2['onPressCamera'] = var16;
            var2['onScroll'] = var15;
            var2['onSelectItem'] = var14;
            var2['onViewAll'] = var13;
            var2['includedUploadIds'] = var12;
            var2['showRemixButton'] = var11;
            var2['uploadLimit'] = var10;
            var2['disableWhenReachedLimit'] = var9;
            var2['maxHeight'] = var8;
            var2['uploadDisabled'] = var7;
            var2['photoPermissionStatus'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 48:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboardList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
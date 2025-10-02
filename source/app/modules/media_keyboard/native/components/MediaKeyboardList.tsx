// app/modules/media_keyboard/native/components/MediaKeyboardList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function MediaKeyboardEmptyStateContainer(arg1) {
        var2 = arg1;
        var1 = var2.children;
        var7 = var2.minHeight;
        var4 = _closure1_slot15;
        var3 = _closure1_slot6;
        var2 = {};
        var5 = {'height': null, 'display': 'flex', 'justifyContent': 'center'};
        var6 = _closure1_slot9;
        var6 = var7 - var6;
        var5['height'] = var6;
        var2['contentContainerStyle'] = var5;
        var2['children'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
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
    var8 = var5.bind(var1)(var4);
    var9 = var8.NativeEventEmitter;
    var4 = var8.NativeModules;
    var _closure1_slot5 = var4;
    var8 = var8.ScrollView;
    var _closure1_slot6 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.HEADER_HANDLE_HEIGHT;
    var _closure1_slot9 = var10;
    var8 = var8.InAppCameraUsedCameraPreviewTypes;
    var _closure1_slot10 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.AnalyticEvents;
    var _closure1_slot11 = var10;
    var8 = var8.Permissions;
    var _closure1_slot12 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ACTION_SHEET_START_HEIGHT_RATIO;
    var _closure1_slot13 = var8;
    var12 = 8;
    var8 = var6[var12];
    var8 = var5.bind(var1)(var8);
    var8 = var8.NativePermissionStatus;
    var _closure1_slot14 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.jsx;
    var _closure1_slot15 = var10;
    var8 = var8.jsxs;
    var _closure1_slot16 = var8;
    var16 = var4.PhotoLibraryHelper;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var17 = var8;
    var4 = new var17[var9](var16, var15);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 11;
    var11 = var6[var11];
    var11 = var13.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var11;
    var11 = 12;
    var13 = var6[var11];
    var13 = var5.bind(var1)(var13);
    var13 = var13.HEADER_PADDING_BOTTOM;
    var13 = var13 - var12;
    var10['marginTop'] = var13;
    var10['paddingTop'] = var12;
    var4['listContainer'] = var10;
    var10 = {};
    var12 = 'row';
    var10['flexDirection'] = var12;
    var4['limitedPickerContainer'] = var10;
    var10 = {};
    var12 = 20;
    var10['marginBottom'] = var12;
    var4['emptyStateWithButtons'] = var10;
    var10 = {};
    var10['marginBottom'] = var11;
    var4['emptyStateImage'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardListTsx1(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardListTsx2(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}';
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var11 = var2.assets;
            var _closure2_slot0 = var11;
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
            var4 = undefined;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var2 = _closure1_slot18;
            var14 = var2.bind(var4)();
            var18 = _closure1_slot4;
            var12 = var18.useMemo;
            var2 = null;
            var6 = var2 == var11;
            var2 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var11.edges;
            var2 = var6.length;
case 2:
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot0;
                    var3 = var3.edges;
                    var1 = var3.length;
case 4:
                    var3 = var2 != var1;
                    var2 = 0;
                    if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = var1;
case 6:
                    var1 = 1;
                    var1 = var2 + var1;
                    return var1;
                }
            };
            var2 = var12.bind(var18)(var2, var6);
            _closure2_slot12 = var2;
            var20 = _closure1_slot0;
            var18 = _closure1_slot2;
            var6 = 28;
            var6 = var18[var6];
            var12 = var20.bind(var4)(var6);
            var6 = var12.useNumMediaItemsPerRow;
            var6 = var6.bind(var12)();
            _closure2_slot13 = var6;
            var12 = 29;
            var12 = var18[var12];
            var26 = var20.bind(var4)(var12);
            var23 = var26.useStateFromStores;
            var12 = _closure1_slot8;
            var20 = new Array(1);
            var20[0] = var12;
            var12 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 8; continue _fun0003 }
case 5:
                    var4 = _closure2_slot1;
                    var3 = var4.isPrivate;
                    var1 = var3.bind(var4)();
case 8:
                    if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var5 = _closure1_slot8;
                    var4 = var5.can;
                    var3 = _closure1_slot12;
                    var3 = var3.ATTACH_FILES;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 9:
                    return var1;
                }
            };
            var26 = var23.bind(var26)(var20, var12);
            _closure2_slot14 = var26;
            var20 = _closure1_slot4;
            var23 = var20.useMemo;
            var12 = new Array(2);
            var12[0] = var11;
            var12[1] = var6;
            var11 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var2 = _closure2_slot0;
                    var2 = var4 == var2;
                    var5 = undefined;
                    var8 = undefined;
                    if(var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var2 = _closure2_slot0;
                    var8 = var2.edges;
case 13:
                    if(!(var4 == var8)) { _fun0004_ip = 15; continue _fun0004 }
case 6:
                    var8 = new Array(0);
case 15:
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
                    var2 = 30;
                    var2 = var7[var2];
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.chunk;
                    var2 = _closure2_slot13;
                    var2 = var3.bind(var5)(var6, var2);
                    return var2;
case 11:
                    var2 = global;
                    var3 = var2.Array;
                    var5 = _closure2_slot13;
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
                    var2 = 30;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.chunk;
                    var1 = _closure2_slot13;
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
                var1 = _closure1_slot10;
                var2 = var1.CAMERA_BUTTON;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var23 = var23.bind(var20)(var7, var12);
            _closure2_slot16 = var23;
            var12 = var20.useCallback;
            var7 = new Array(12);
            var7[0] = var26;
            var7[1] = var25;
            var7[2] = var24;
            var7[3] = var23;
            var7[4] = var6;
            var7[5] = var22;
            var7[6] = var11;
            var7[7] = var21;
            var7[8] = var19;
            var7[9] = var17;
            var7[10] = var15;
            var7[11] = var2;
            var2 = function(arg1, arg2) {
                var6 = arg2;
                var5 = _closure1_slot15;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 31;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = {};
                var7 = _closure2_slot2;
                var2['draftType'] = var7;
                var2['rowIndex'] = var6;
                var7 = _closure2_slot12;
                var2['totalNumItems'] = var7;
                var7 = _closure2_slot1;
                var2['channel'] = var7;
                var7 = _closure2_slot13;
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
                var7 = _closure2_slot14;
                var7 = !var7;
                var2['disabled'] = var7;
                var1 = _closure2_slot15;
                var8 = var1[var6];
                var7 = var8.reduce;
                var1 = var6.toString;
                var6 = var1.bind(var6)();
                var1 = function(arg1, arg2) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var6 = arg1;
                        var2 = arg2;
                        var3 = null;
                        var1 = var6;
                        if(!(var3 != var2)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 31;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.isMediaCameraNode;
                        var4 = var3.bind(var4)(var2);
                        var3 = global;
                        if(var4) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                        var2 = var2.node;
                        var2 = var2.image;
                        var7 = var2.uri;
                        var2 = var3.HermesInternal;
                        var5 = var2.concat;
                        var4 = '';
                        var2 = '-';
                        var2 = var5.bind(var4)(var6, var2, var7);
                        _fun0005_ip = 20; continue _fun0005;
case 18:
                        var3 = var3.HermesInternal;
                        var5 = var3.concat;
                        var4 = '';
                        var3 = '-camera';
                        var2 = var5.bind(var4)(var6, var3);
case 20:
                        var1 = var2;
case 16:
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
                var1 = 31;
                var6 = var5[var1];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var8 = var6.PARENT_PADDING;
                var6 = var5[var1];
                var6 = var4.bind(var3)(var6);
                var9 = var6.CHILD_PADDING;
                var10 = _closure2_slot13;
                var6 = 1;
                var6 = var10 - var6;
                var6 = var9 * var6;
                var6 = var8 + var6;
                var6 = var7 - var6;
                var2 = _closure2_slot13;
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
                var4 = _closure1_slot15;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 32;
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
            var3 = _closure1_slot14;
            var3 = var3.LIMITED;
            var17 = var13 === var3;
            var13 = var20.useState;
            var3 = function() {
                var2 = _closure1_slot7;
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
                var4 = _closure1_slot15;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 26;
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
            var3 = _closure1_slot15;
            var1 = 33;
            var1 = var18[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var18 = undefined;
            if(!var17) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var18 = var19;
case 21:
            var1['renderHeader'] = var18;
            var13 = 0;
            if(!var17) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var13 = var16;
case 23:
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
            var10 = 24;
            var11 = var9[var10];
            var11 = var8.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var9[var10];
            var10 = var8.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.XONG6O;
            var10 = var11.bind(var12)(var10);
            var1['accessibilityLabel'] = var10;
            var1['showsVerticalScrollIndicator'] = var7;
            var7 = 32;
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
    var _closure1_slot21 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var25 = var1.channel;
            var4 = var1.disabled;
            var5 = undefined;
            if(!(var4 === var5)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            var4 = false;
case 25:
            var24 = var1.draftType;
            var12 = var1.bottomSheet;
            var21 = var1.onPressCamera;
            var _closure2_slot0 = var21;
            var19 = var1.onSelectItem;
            var18 = var1.onViewAll;
            var17 = var1.includedUploadIds;
            var16 = var1.showRemixButton;
            var15 = var1.uploadLimit;
            var13 = var1.disableWhenReachedLimit;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var1 = _closure1_slot18;
            var1 = var1.bind(var5)();
            var27 = _closure1_slot4;
            var2 = var27.useRef;
            var29 = true;
            var2 = var2.bind(var27)(var29);
            _closure2_slot1 = var2;
            var6 = var27.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1) {
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
            var20 = var6.bind(var27)(var2, var3);
            var34 = _closure1_slot0;
            var35 = _closure1_slot2;
            var2 = 13;
            var2 = var35[var2];
            var3 = var34.bind(var5)(var2);
            var2 = var3.useInfiniteMediaScrollExperiment;
            var2 = var2.bind(var3)();
            var30 = var2.inifiteScrollEnabled;
            _closure2_slot2 = var30;
            var2 = var27.useState;
            var8 = null;
            var2 = var2.bind(var27)(var8);
            var7 = _closure1_slot3;
            var6 = 2;
            var3 = var7.bind(var5)(var2, var6);
            var2 = 0;
            var11 = var3[var2];
            _closure2_slot3 = var11;
            var9 = 1;
            var3 = var3[var9];
            _closure2_slot4 = var3;
            var3 = 14;
            var3 = var35[var3];
            var22 = var34.bind(var5)(var3);
            var3 = var22.useDeviceMedia;
            var3 = var3.bind(var22)();
            var23 = var3.assets;
            var22 = var3.refreshAssets;
            _closure2_slot5 = var22;
            var31 = var3.fetchNextPage;
            _closure2_slot6 = var31;
            var28 = var3.page;
            _closure2_slot7 = var28;
            var3 = var3.hasReachedEnd;
            _closure2_slot8 = var3;
            var33 = var27.useEffect;
            var32 = function() {
                var1 = _closure1_slot5;
                var2 = var1.NativePermissionManager;
                var1 = var2.requestPhotoAuthorization;
                var3 = var1.bind(var2)();
                var2 = var3.then;
                var1 = function(arg1) {
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var26 = new Array(0);
            var26 = var33.bind(var27)(var32, var26);
            var32 = var27.useEffect;
            var26 = new Array(2);
            var26[0] = var11;
            var26[1] = var22;
            var22 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = _closure2_slot3;
                    var4 = _closure1_slot14;
                    var4 = var4.AUTHORIZED;
                    if(!(var5 !== var4)) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                    var5 = _closure2_slot3;
                    var4 = _closure1_slot14;
                    var4 = var4.LIMITED;
                    if(!(var5 !== var4)) { _fun0007_ip = 27; continue _fun0007 }
case 29:
                    var4 = undefined;
                    return var4;
case 27:
                    var5 = _closure2_slot5;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var6.bind(var2)(var4);
                    var4 = var4.BATCH_SIZE;
                    var4 = var5.bind(var2)(var4);
                    var5 = _closure1_slot17;
                    var4 = null;
                    var4 = var4 == var5;
                    if(var4) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    var6 = _closure1_slot17;
                    var5 = var6.addListener;
                    var4 = 'photoLibraryChanged';
                    var3 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var2 = _closure2_slot1;
                            var2 = var2.current;
                            if(!var2) { _fun0008_ip = 32; continue _fun0008 }
case 17:
                            var3 = _closure2_slot5;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var4.bind(var2)(var1);
                            var1 = var1.BATCH_SIZE;
                            var1 = var3.bind(var2)(var1);
case 32:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var5.bind(var6)(var4, var3);
case 30:
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var3 = _closure3_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                            var2 = _closure3_slot0;
                            var1 = var2.remove;
                            var1 = var1.bind(var2)();
case 33:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var22 = var32.bind(var27)(var22, var26);
            var26 = var27.useCallback;
            var22 = new Array(4);
            var22[0] = var31;
            var22[1] = var30;
            var22[2] = var28;
            var22[3] = var3;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0010_ip = 35; continue _fun0010 }
case 36:
                    var1 = _closure2_slot6;
                    var4 = undefined;
                    var1 = var1.bind(var4)();
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 15;
                    var2 = var6[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot11;
                    var2 = var1.MEDIA_PICKER_INFINITE_SCROLL_PAGED;
                    var1 = {};
                    var6 = _closure2_slot7;
                    var1['page'] = var6;
                    var5 = _closure2_slot8;
                    var1['has_reached_end'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = var26.bind(var27)(var3, var22);
            var28 = _closure1_slot1;
            var3 = 16;
            var3 = var35[var3];
            var3 = var28.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var26 = var3.top;
            var3 = 17;
            var3 = var35[var3];
            var28 = var28.bind(var5)(var3);
            var3 = {};
            var3['ignoreKeyboard'] = var29;
            var3 = var28.bind(var5)(var3);
            var31 = var3.height;
            _closure2_slot9 = var31;
            var3 = _closure1_slot13;
            var30 = var31 * var3;
            _closure2_slot10 = var30;
            var3 = 18;
            var3 = var35[var3];
            var3 = var34.bind(var5)(var3);
            var3 = var3.NAV_BAR_HEIGHT_MULTILINE;
            var3 = var31 - var3;
            var29 = var3 - var26;
            _closure2_slot11 = var29;
            var3 = 19;
            var3 = var35[var3];
            var26 = var34.bind(var5)(var3);
            var3 = var26.useBottomSheetInternal;
            var3 = var3.bind(var26)();
            var28 = var3.animatedSnapPoints;
            _closure2_slot12 = var28;
            var26 = var27.useState;
            var3 = {};
            var3['minimum'] = var30;
            var3['maximum'] = var29;
            var3 = var26.bind(var27)(var3);
            var3 = var7.bind(var5)(var3, var6);
            var7 = var3[var2];
            var6 = var7.minimum;
            var7 = var7.maximum;
            var32 = var3[var9];
            _closure2_slot13 = var32;
            var33 = 20;
            var3 = var35[var33];
            var27 = var34.bind(var5)(var3);
            var26 = var27.useAnimatedReaction;
            var9 = function $() {
                var2 = _closure2_slot12;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = {};
            var3['animatedSnapPoints'] = var28;
            var9['__closure'] = var3;
            var3 = 11265068281555.0;
            var9['__workletHash'] = var3;
            var3 = _closure1_slot19;
            var9['__initData'] = var3;
            var3 = function z(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
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
                    if(!var9) { _fun0011_ip = 37; continue _fun0011 }
case 27:
                    var3 = var6;
case 37:
                    var3 = var4.bind(var5)(var8, var3);
                    if(var3) { _fun0011_ip = 38; continue _fun0011 }
case 39:
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
                    if(!(var7 == var4)) { _fun0011_ip = 40; continue _fun0011 }
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
                    if(!(var7 == var4)) { _fun0011_ip = 42; continue _fun0011 }
case 43:
                    var4 = _closure2_slot11;
case 42:
                    var4 = var5 - var4;
                    var2['maximum'] = var4;
                    var2 = var3.bind(var1)(var2);
case 38:
                    return var1;
                }
            };
            var28 = {};
            var36 = 21;
            var36 = var35[var36];
            var36 = var34.bind(var5)(var36);
            var36 = var36.cheapWorkletArrayShallowEqual;
            var28['cheapWorkletArrayShallowEqual'] = var36;
            var33 = var35[var33];
            var33 = var34.bind(var5)(var33);
            var33 = var33.runOnJS;
            var28['runOnJS'] = var33;
            var28['setBottomSheetState'] = var32;
            var28['windowHeight'] = var31;
            var28['computedStartHeight'] = var30;
            var28['maxDynamicContentSize'] = var29;
            var3['__closure'] = var28;
            var28 = 911665206857.0;
            var3['__workletHash'] = var28;
            var28 = _closure1_slot20;
            var3['__initData'] = var28;
            var3 = var26.bind(var27)(var9, var3);
            var9 = {};
            var3 = var1.emptyStateWithButtons;
            var9['containerStyle'] = var3;
            var1 = var1.emptyStateImage;
            var9['imageStyle'] = var1;
            var1 = _closure1_slot14;
            var1 = var1.DENIED;
            if(!(var11 !== var1)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var1 = _closure1_slot14;
            var1 = var1.RESTRICTED;
            if(!(var11 !== var1)) { _fun0006_ip = 44; continue _fun0006 }
case 46:
            if(!(var8 != var23)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var1 = var23.edges;
            var1 = var1.length;
            if(!(var2 !== var1)) { _fun0006_ip = 49; continue _fun0006 }
case 47:
            var3 = _closure1_slot15;
            var2 = _closure1_slot21;
            var1 = {};
            var1['channel'] = var25;
            var1['draftType'] = var24;
            var1['assets'] = var23;
            var1['onEndReached'] = var22;
            var1['onPressCamera'] = var21;
            var1['onScroll'] = var20;
            var1['onSelectItem'] = var19;
            var1['onViewAll'] = var18;
            var1['includedUploadIds'] = var17;
            var1['showRemixButton'] = var16;
            var1['uploadLimit'] = var15;
            var1['disableWhenReachedLimit'] = var13;
            var1['bottomSheet'] = var12;
            var1['maxHeight'] = var7;
            var1['uploadDisabled'] = var4;
            var1['photoPermissionStatus'] = var11;
            var1 = var3.bind(var5)(var2, var1);
            _fun0006_ip = 50; continue _fun0006;
case 49:
            var4 = _closure1_slot16;
            var3 = _closure1_slot22;
            var2 = {};
            var2['minHeight'] = var6;
            var7 = _closure1_slot14;
            var7 = var7.LIMITED;
            var8 = null;
            if(!(var11 === var7)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var12 = _closure1_slot15;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 26;
            var7 = var13[var7];
            var11 = var11.bind(var5)(var7);
            var7 = {};
            var8 = var12.bind(var5)(var11, var7);
case 51:
            var7 = new Array(2);
            var7[0] = var8;
            var12 = _closure1_slot15;
            var15 = _closure1_slot1;
            var19 = _closure1_slot2;
            var8 = 22;
            var8 = var19[var8];
            var11 = var15.bind(var5)(var8);
            var8 = {};
            var13 = 27;
            var13 = var19[var13];
            var13 = var15.bind(var5)(var13);
            var8['source'] = var13;
            var18 = _closure1_slot0;
            var15 = 24;
            var13 = var19[var15];
            var13 = var18.bind(var5)(var13);
            var17 = var13.intl;
            var16 = var17.string;
            var13 = var19[var15];
            var13 = var18.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.YOvRBQ;
            var13 = var16.bind(var17)(var13);
            var8['body'] = var13;
            var13 = {};
            var16 = var19[var15];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.tpoWUV;
            var15 = var16.bind(var17)(var15);
            var13['label'] = var15;
            var14 = function onPress() {
                var3 = _closure2_slot0;
                var1 = _closure1_slot10;
                var2 = var1.TAKE_A_PHOTO_BUTTON;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var13['onPress'] = var14;
            var8['callToAction'] = var13;
            var38 = var8;
            var37 = var9;
            var13 = copyDataProperties(var38, var37);
            var8 = var12.bind(var5)(var11, var8);
            var7[1] = var8;
            var2['children'] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 50:
            _fun0006_ip = 53; continue _fun0006;
case 44:
            var4 = _closure1_slot15;
            var3 = _closure1_slot22;
            var2 = {};
            var2['minHeight'] = var6;
            var8 = _closure1_slot15;
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 22;
            var6 = var13[var6];
            var7 = var12.bind(var5)(var6);
            var6 = {};
            var11 = 23;
            var11 = var13[var11];
            var11 = var12.bind(var5)(var11);
            var6['source'] = var11;
            var16 = _closure1_slot0;
            var11 = 24;
            var10 = var13[var11];
            var10 = var16.bind(var5)(var10);
            var15 = var10.intl;
            var14 = var15.string;
            var10 = var13[var11];
            var10 = var16.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.8p9jGh;
            var10 = var14.bind(var15)(var10);
            var6['body'] = var10;
            var10 = {};
            var14 = var13[var11];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var11 = var13[var11];
            var11 = var16.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.457oeH;
            var11 = var14.bind(var15)(var11);
            var10['label'] = var11;
            var11 = 25;
            var11 = var13[var11];
            var11 = var12.bind(var5)(var11);
            var10['onPress'] = var11;
            var6['callToAction'] = var10;
            var38 = var6;
            var37 = var9;
            var9 = copyDataProperties(var38, var37);
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 53:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboardList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
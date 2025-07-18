// app/modules/media_keyboard/native/components/MediaKeyboardList.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var13 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function MediaKeyboardEmptyStateContainer(arg1) {
        var2 = arg1;
        var1 = var2.children;
        var7 = var2.minHeight;
        var4 = _closure1_slot16;
        var3 = _closure1_slot7;
        var2 = {};
        var5 = {'height': null, 'display': 'flex', 'justifyContent': 'center'};
        var6 = _closure1_slot10;
        var6 = var7 - var6;
        var5['height'] = var6;
        var2['contentContainerStyle'] = var5;
        var2['children'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot23 = var1;
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
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var9 = var8.NativeEventEmitter;
    var4 = var8.NativeModules;
    var _closure1_slot5 = var4;
    var10 = var8.View;
    var _closure1_slot6 = var10;
    var8 = var8.ScrollView;
    var _closure1_slot7 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.HEADER_HANDLE_HEIGHT;
    var _closure1_slot10 = var10;
    var8 = var8.InAppCameraUsedCameraPreviewTypes;
    var _closure1_slot11 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.AnalyticEvents;
    var _closure1_slot12 = var10;
    var8 = var8.Permissions;
    var _closure1_slot13 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ACTION_SHEET_START_HEIGHT_RATIO;
    var _closure1_slot14 = var8;
    var12 = 8;
    var8 = var6[var12];
    var8 = var5.bind(var1)(var8);
    var8 = var8.NativePermissionStatus;
    var _closure1_slot15 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.jsx;
    var _closure1_slot16 = var10;
    var8 = var8.jsxs;
    var _closure1_slot17 = var8;
    var16 = var4.PhotoLibraryHelper;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var17 = var8;
    var4 = new var17[var9](var16, var15);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot18 = var4;
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
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardListTsx1(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}';
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardListTsx2(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}';
    var4['code'] = var8;
    var _closure1_slot21 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var11 = var2.assets;
            var _closure2_slot0 = var11;
            var22 = var2.hasReachedEnd;
            var _closure2_slot1 = var22;
            var23 = var2.channel;
            var _closure2_slot2 = var23;
            var21 = var2.draftType;
            var _closure2_slot3 = var21;
            var10 = var2.onEndReached;
            var3 = var2.onPressCamera;
            var _closure2_slot4 = var3;
            var16 = var2.onSelectItem;
            var _closure2_slot5 = var16;
            var8 = var2.onScroll;
            var20 = var2.onViewAll;
            var _closure2_slot6 = var20;
            var18 = var2.shouldInfiniteScroll;
            var4 = undefined;
            if(!(var18 === var4)) { _fun0001_ip = 100; continue _fun0001 }
 98:
            var18 = false;
 100:
            var _closure2_slot7 = var18;
            var5 = var2.maxHeight;
            var _closure2_slot8 = var5;
            var6 = var2.uploadDisabled;
            var _closure2_slot9 = var6;
            var14 = var2.singleItemConfig;
            var _closure2_slot10 = var14;
            var17 = var2.photoPermissionStatus;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var2 = _closure1_slot19;
            var15 = var2.bind(var4)();
            var13 = _closure1_slot4;
            var12 = var13.useMemo;
            var2 = null;
            var7 = var2 == var11;
            var2 = undefined;
            if(var7) { _fun0001_ip = 214; continue _fun0001 }
 203:
            var7 = var11.edges;
            var2 = var7.length;
 214:
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 33; continue _fun0002 }
 18:
                    var3 = _closure2_slot0;
                    var3 = var3.edges;
                    var1 = var3.length;
 33:
                    var3 = var2 != var1;
                    var2 = 0;
                    if(!var3) { _fun0002_ip = 45; continue _fun0002 }
 42:
                    var2 = var1;
 45:
                    var1 = 1;
                    var1 = var2 + var1;
                    return var1;
                }
            };
            var2 = var12.bind(var13)(var2, var7);
            _closure2_slot11 = var2;
            var13 = _closure1_slot0;
            var19 = _closure1_slot2;
            var7 = 28;
            var7 = var19[var7];
            var12 = var13.bind(var4)(var7);
            var7 = var12.useNumMediaItemsPerRow;
            var7 = var7.bind(var12)();
            _closure2_slot12 = var7;
            var12 = 29;
            var12 = var19[var12];
            var24 = var13.bind(var4)(var12);
            var19 = var24.useStateFromStores;
            var12 = _closure1_slot9;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 32; continue _fun0003 }
 18:
                    var4 = _closure2_slot2;
                    var3 = var4.isPrivate;
                    var1 = var3.bind(var4)();
 32:
                    if(var1) { _fun0003_ip = 68; continue _fun0003 }
 35:
                    var5 = _closure1_slot9;
                    var4 = var5.can;
                    var3 = _closure1_slot13;
                    var3 = var3.ATTACH_FILES;
                    var2 = _closure2_slot2;
                    var1 = var4.bind(var5)(var3, var2);
 68:
                    return var1;
                }
            };
            var24 = var19.bind(var24)(var13, var12);
            _closure2_slot13 = var24;
            var13 = _closure1_slot4;
            var19 = var13.useMemo;
            var12 = new Array(2);
            var12[0] = var11;
            var12[1] = var7;
            var11 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0004_ip = 148; continue _fun0004 }
 16:
                    var2 = _closure2_slot0;
                    var2 = var4 == var2;
                    var5 = undefined;
                    var8 = undefined;
                    if(var2) { _fun0004_ip = 41; continue _fun0004 }
 31:
                    var2 = _closure2_slot0;
                    var8 = var2.edges;
 41:
                    if(!(var4 == var8)) { _fun0004_ip = 49; continue _fun0004 }
 45:
                    var8 = new Array(0);
 49:
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
                    var2 = _closure2_slot12;
                    var2 = var3.bind(var5)(var6, var2);
                    return var2;
 148:
                    var2 = global;
                    var3 = var2.Array;
                    var5 = _closure2_slot12;
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
                    var1 = _closure2_slot12;
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
                }
            };
            var12 = var19.bind(var13)(var11, var12);
            _closure2_slot14 = var12;
            var19 = var13.useCallback;
            var11 = new Array(1);
            var11[0] = var3;
            var3 = function() {
                var3 = _closure2_slot4;
                var1 = _closure1_slot11;
                var2 = var1.CAMERA_BUTTON;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var19 = var19.bind(var13)(var3, var11);
            _closure2_slot15 = var19;
            var11 = var13.useCallback;
            var3 = new Array(9);
            var3[0] = var24;
            var3[1] = var23;
            var3[2] = var21;
            var3[3] = var19;
            var3[4] = var7;
            var3[5] = var16;
            var3[6] = var12;
            var3[7] = var14;
            var3[8] = var2;
            var2 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var6 = arg2;
                    var5 = _closure1_slot16;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 31;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = {};
                    var7 = _closure2_slot3;
                    var2['draftType'] = var7;
                    var2['rowIndex'] = var6;
                    var7 = _closure2_slot11;
                    var2['totalNumItems'] = var7;
                    var7 = _closure2_slot2;
                    var2['channel'] = var7;
                    var7 = _closure2_slot12;
                    var2['numPerRow'] = var7;
                    var7 = _closure2_slot14;
                    var7 = var7[var6];
                    var2['items'] = var7;
                    var7 = _closure2_slot5;
                    var2['onSelectItem'] = var7;
                    var7 = _closure2_slot10;
                    var9 = null;
                    var8 = var9 != var7;
                    var7 = undefined;
                    if(!var8) { _fun0005_ip = 139; continue _fun0005 }
 114:
                    var8 = _closure2_slot10;
                    var9 = var9 == var8;
                    var8 = undefined;
                    if(var9) { _fun0005_ip = 136; continue _fun0005 }
 127:
                    var9 = _closure2_slot10;
                    var8 = var9.name;
 136:
                    var7 = var8;
 139:
                    var2['singleItemId'] = var7;
                    var7 = _closure2_slot15;
                    var2['handleCameraPress'] = var7;
                    var7 = _closure2_slot13;
                    var7 = !var7;
                    var2['disabled'] = var7;
                    var1 = _closure2_slot14;
                    var8 = var1[var6];
                    var7 = var8.reduce;
                    var1 = var6.toString;
                    var6 = var1.bind(var6)();
                    var1 = function(arg1, arg2) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var6 = arg1;
                            var2 = arg2;
                            var3 = null;
                            var1 = var6;
                            if(!(var3 != var2)) { _fun0006_ip = 132; continue _fun0006 }
 15:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 31;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.isMediaCameraNode;
                            var4 = var3.bind(var4)(var2);
                            var3 = global;
                            if(var4) { _fun0006_ip = 102; continue _fun0006 }
 56:
                            var2 = var2.node;
                            var2 = var2.image;
                            var7 = var2.uri;
                            var2 = var3.HermesInternal;
                            var5 = var2.concat;
                            var4 = '';
                            var2 = '-';
                            var2 = var5.bind(var4)(var6, var2, var7);
                            _fun0006_ip = 129; continue _fun0006;
 102:
                            var3 = var3.HermesInternal;
                            var5 = var3.concat;
                            var4 = '';
                            var3 = '-camera';
                            var2 = var5.bind(var4)(var6, var3);
 129:
                            var1 = var2;
 132:
                            return var1;
                        }
                    };
                    var1 = var7.bind(var8)(var1, var6);
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var13 = var11.bind(var13)(var2, var3);
            var2 = var12.length;
            var14 = 0;
            var11 = var14 === var2;
            if(var11) { _fun0001_ip = 462; continue _fun0001 }
 459:
            var11 = !var18;
 462:
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 16;
            var2 = var16[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = var2.bottom;
            var3 = 0;
            if(var11) { _fun0001_ip = 499; continue _fun0001 }
 496:
            var3 = var2;
 499:
            _closure2_slot16 = var3;
            var2 = _closure1_slot1;
            var19 = _closure1_slot2;
            var11 = 17;
            var11 = var19[var11];
            var11 = var2.bind(var4)(var11);
            var11 = var11.bind(var4)();
            var23 = var11.width;
            _closure2_slot17 = var23;
            var21 = _closure1_slot4;
            var16 = var21.useMemo;
            var11 = new Array(2);
            var11[0] = var23;
            var11[1] = var7;
            var7 = function() {
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
                var10 = _closure2_slot12;
                var6 = 1;
                var6 = var10 - var6;
                var6 = var9 * var6;
                var6 = var8 + var6;
                var6 = var7 - var6;
                var2 = _closure2_slot12;
                var2 = var6 / var2;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.SEPARATOR_SIZE;
                var1 = var2 + var1;
                return var1;
            };
            var7 = var16.bind(var21)(var7, var11);
            var16 = var21.useCallback;
            var11 = new Array(4);
            var11[0] = var22;
            var11[1] = var20;
            var11[2] = var18;
            var11[3] = var6;
            var6 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = _closure1_slot16;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var1 = _closure2_slot1;
                    if(var1) { _fun0007_ip = 32; continue _fun0007 }
 23:
                    var6 = _closure2_slot7;
                    var1 = null;
                    if(var6) { _fun0007_ip = 83; continue _fun0007 }
 32:
                    var8 = _closure1_slot16;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 32;
                    var5 = var7[var5];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var5);
                    var5 = {};
                    var10 = _closure2_slot9;
                    var5['disabled'] = var10;
                    var9 = _closure2_slot6;
                    var5['onViewAll'] = var9;
                    var1 = var8.bind(var7)(var6, var5);
 83:
                    var2['children'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var6 = var16.bind(var21)(var6, var11);
            var18 = var21.useMemo;
            var16 = new Array(1);
            var16[0] = var5;
            var11 = function() {
                var1 = {};
                var2 = _closure2_slot8;
                var1['height'] = var2;
                return var1;
            };
            var16 = var18.bind(var21)(var11, var16);
            var18 = var21.useMemo;
            var11 = new Array(1);
            var11[0] = var3;
            var3 = function() {
                var1 = {};
                var2 = _closure2_slot16;
                var1['paddingBottom'] = var2;
                return var1;
            };
            var11 = var18.bind(var21)(var3, var11);
            var3 = _closure1_slot15;
            var3 = var3.LIMITED;
            var18 = var17 === var3;
            var17 = var21.useState;
            var3 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var2 = var1.fontScale;
                var1 = 36;
                var2 = var1 * var2;
                var1 = 32;
                var1 = var1 + var2;
                return var1;
            };
            var20 = var17.bind(var21)(var3);
            var17 = _closure1_slot3;
            var3 = 2;
            var20 = var17.bind(var4)(var20, var3);
            var17 = var20[var14];
            var3 = 1;
            var3 = var20[var3];
            _closure2_slot18 = var3;
            var20 = var21.useCallback;
            var3 = function() {
                var4 = _closure1_slot16;
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
            var20 = var20.bind(var21)(var3, var1);
            var3 = _closure1_slot16;
            var1 = 33;
            var1 = var19[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var19 = undefined;
            if(!var18) { _fun0001_ip = 767; continue _fun0001 }
 764:
            var19 = var20;
 767:
            var1['renderHeader'] = var19;
            var14 = 0;
            if(!var18) { _fun0001_ip = 780; continue _fun0001 }
 777:
            var14 = var17;
 780:
            var1['headerSize'] = var14;
            var14 = new Array(2);
            var14[0] = var16;
            var15 = var15.listContainer;
            var14[1] = var15;
            var1['style'] = var14;
            var1['renderItem'] = var13;
            var13 = var12.length;
            var12 = new Array(1);
            var12[0] = var13;
            var1['sections'] = var12;
            var1['contentContainerStyle'] = var11;
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
    var _closure1_slot22 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var24 = var1.channel;
            var4 = var1.disabled;
            var5 = undefined;
            if(!(var4 === var5)) { _fun0008_ip = 23; continue _fun0008 }
 21:
            var4 = false;
 23:
            var23 = var1.draftType;
            var12 = var1.bottomSheet;
            var19 = var1.onPressCamera;
            var _closure2_slot0 = var19;
            var17 = var1.onSelectItem;
            var16 = var1.onViewAll;
            var13 = var1.singleItemConfig;
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
            var1 = _closure1_slot19;
            var1 = var1.bind(var5)();
            var26 = _closure1_slot4;
            var2 = var26.useRef;
            var28 = true;
            var2 = var2.bind(var26)(var28);
            _closure2_slot1 = var2;
            var6 = var26.useCallback;
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
            var18 = var6.bind(var26)(var2, var3);
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var2 = 13;
            var2 = var34[var2];
            var3 = var33.bind(var5)(var2);
            var2 = var3.useInfiniteMediaScrollExperiment;
            var2 = var2.bind(var3)();
            var15 = var2.inifiteScrollEnabled;
            _closure2_slot2 = var15;
            var2 = var26.useState;
            var8 = null;
            var2 = var2.bind(var26)(var8);
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
            var3 = var34[var3];
            var20 = var33.bind(var5)(var3);
            var3 = var20.useDeviceMedia;
            var21 = var3.bind(var20)();
            var22 = var21.assets;
            var20 = var21.refreshAssets;
            _closure2_slot5 = var20;
            var27 = var21.fetchNextPage;
            _closure2_slot6 = var27;
            var3 = var21.page;
            _closure2_slot7 = var3;
            var21 = var21.hasReachedEnd;
            _closure2_slot8 = var21;
            var30 = var26.useEffect;
            var29 = function() {
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
            var25 = new Array(0);
            var25 = var30.bind(var26)(var29, var25);
            var29 = var26.useEffect;
            var25 = new Array(2);
            var25[0] = var11;
            var25[1] = var20;
            var20 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var5 = _closure2_slot3;
                    var4 = _closure1_slot15;
                    var4 = var4.AUTHORIZED;
                    if(!(var5 !== var4)) { _fun0009_ip = 48; continue _fun0009 }
 26:
                    var5 = _closure2_slot3;
                    var4 = _closure1_slot15;
                    var4 = var4.LIMITED;
                    if(!(var5 !== var4)) { _fun0009_ip = 48; continue _fun0009 }
 44:
                    var4 = undefined;
                    return var4;
 48:
                    var5 = _closure2_slot5;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var6.bind(var2)(var4);
                    var4 = var4.BATCH_SIZE;
                    var4 = var5.bind(var2)(var4);
                    var5 = _closure1_slot18;
                    var4 = null;
                    var4 = var4 == var5;
                    if(var4) { _fun0009_ip = 127; continue _fun0009 }
 98:
                    var6 = _closure1_slot18;
                    var5 = var6.addListener;
                    var4 = 'photoLibraryChanged';
                    var3 = function() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var2 = _closure2_slot1;
                            var2 = var2.current;
                            if(!var2) { _fun0010_ip = 55; continue _fun0010 }
 15:
                            var3 = _closure2_slot5;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var4.bind(var2)(var1);
                            var1 = var1.BATCH_SIZE;
                            var1 = var3.bind(var2)(var1);
 55:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var5.bind(var6)(var4, var3);
 127:
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var3 = _closure3_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0011_ip = 27; continue _fun0011 }
 13:
                            var2 = _closure3_slot0;
                            var1 = var2.remove;
                            var1 = var1.bind(var2)();
 27:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var20 = var29.bind(var26)(var20, var25);
            var25 = var26.useCallback;
            var20 = new Array(4);
            var20[0] = var27;
            var20[1] = var15;
            var20[2] = var3;
            var20[3] = var21;
            var3 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0012_ip = 86; continue _fun0012 }
 10:
                    var1 = _closure2_slot6;
                    var4 = undefined;
                    var1 = var1.bind(var4)();
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 15;
                    var2 = var6[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot12;
                    var2 = var1.MEDIA_PICKER_INFINITE_SCROLL_PAGED;
                    var1 = {};
                    var6 = _closure2_slot7;
                    var1['page'] = var6;
                    var5 = _closure2_slot8;
                    var1['has_reached_end'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 86:
                    var1 = undefined;
                    return var1;
                }
            };
            var20 = var25.bind(var26)(var3, var20);
            var27 = _closure1_slot1;
            var3 = 16;
            var3 = var34[var3];
            var3 = var27.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var25 = var3.top;
            var3 = 17;
            var3 = var34[var3];
            var27 = var27.bind(var5)(var3);
            var3 = {};
            var3['ignoreKeyboard'] = var28;
            var3 = var27.bind(var5)(var3);
            var30 = var3.height;
            _closure2_slot9 = var30;
            var3 = _closure1_slot14;
            var29 = var30 * var3;
            _closure2_slot10 = var29;
            var3 = 18;
            var3 = var34[var3];
            var3 = var33.bind(var5)(var3);
            var3 = var3.NAV_BAR_HEIGHT_MULTILINE;
            var3 = var30 - var3;
            var28 = var3 - var25;
            _closure2_slot11 = var28;
            var3 = 19;
            var3 = var34[var3];
            var25 = var33.bind(var5)(var3);
            var3 = var25.useBottomSheetInternal;
            var3 = var3.bind(var25)();
            var27 = var3.animatedSnapPoints;
            _closure2_slot12 = var27;
            var25 = var26.useState;
            var3 = {};
            var3['minimum'] = var29;
            var3['maximum'] = var28;
            var3 = var25.bind(var26)(var3);
            var3 = var7.bind(var5)(var3, var6);
            var7 = var3[var2];
            var6 = var7.minimum;
            var7 = var7.maximum;
            var31 = var3[var9];
            _closure2_slot13 = var31;
            var32 = 20;
            var3 = var34[var32];
            var26 = var33.bind(var5)(var3);
            var25 = var26.useAnimatedReaction;
            var9 = function W() {
                var2 = _closure2_slot12;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = {};
            var3['animatedSnapPoints'] = var27;
            var9['__closure'] = var3;
            var3 = 11265068281555.0;
            var9['__workletHash'] = var3;
            var3 = _closure1_slot20;
            var9['__initData'] = var3;
            var3 = function V(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
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
                    if(!var9) { _fun0013_ip = 51; continue _fun0013 }
 48:
                    var3 = var6;
 51:
                    var3 = var4.bind(var5)(var8, var3);
                    if(var3) { _fun0013_ip = 168; continue _fun0013 }
 60:
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
                    if(!(var7 == var4)) { _fun0013_ip = 117; continue _fun0013 }
 113:
                    var4 = _closure2_slot10;
 117:
                    var4 = var5 - var4;
                    var2['minimum'] = var4;
                    var5 = _closure2_slot9;
                    var9 = var8.length;
                    var4 = 1;
                    var4 = var9 - var4;
                    var4 = var8[var4];
                    if(!(var7 == var4)) { _fun0013_ip = 154; continue _fun0013 }
 150:
                    var4 = _closure2_slot11;
 154:
                    var4 = var5 - var4;
                    var2['maximum'] = var4;
                    var2 = var3.bind(var1)(var2);
 168:
                    return var1;
                }
            };
            var27 = {};
            var35 = 21;
            var35 = var34[var35];
            var35 = var33.bind(var5)(var35);
            var35 = var35.cheapWorkletArrayShallowEqual;
            var27['cheapWorkletArrayShallowEqual'] = var35;
            var32 = var34[var32];
            var32 = var33.bind(var5)(var32);
            var32 = var32.runOnJS;
            var27['runOnJS'] = var32;
            var27['setBottomSheetState'] = var31;
            var27['windowHeight'] = var30;
            var27['computedStartHeight'] = var29;
            var27['maxDynamicContentSize'] = var28;
            var3['__closure'] = var27;
            var27 = 911665206857.0;
            var3['__workletHash'] = var27;
            var27 = _closure1_slot21;
            var3['__initData'] = var27;
            var3 = var25.bind(var26)(var9, var3);
            var9 = {};
            var3 = var1.emptyStateWithButtons;
            var9['containerStyle'] = var3;
            var1 = var1.emptyStateImage;
            var9['imageStyle'] = var1;
            var1 = _closure1_slot15;
            var1 = var1.DENIED;
            if(!(var11 !== var1)) { _fun0008_ip = 1221; continue _fun0008 }
 817:
            var1 = _closure1_slot15;
            var1 = var1.RESTRICTED;
            if(!(var11 !== var1)) { _fun0008_ip = 1221; continue _fun0008 }
 834:
            if(!(var8 != var22)) { _fun0008_ip = 853; continue _fun0008 }
 838:
            var1 = var22.edges;
            var1 = var1.length;
            if(!(var2 !== var1)) { _fun0008_ip = 948; continue _fun0008 }
 853:
            var3 = _closure1_slot16;
            var2 = _closure1_slot22;
            var1 = {};
            var1['channel'] = var24;
            var1['draftType'] = var23;
            var1['assets'] = var22;
            var1['hasReachedEnd'] = var21;
            var1['onEndReached'] = var20;
            var1['onPressCamera'] = var19;
            var1['onScroll'] = var18;
            var1['onSelectItem'] = var17;
            var1['onViewAll'] = var16;
            var1['shouldInfiniteScroll'] = var15;
            var1['singleItemConfig'] = var13;
            var1['bottomSheet'] = var12;
            var1['maxHeight'] = var7;
            var1['uploadDisabled'] = var4;
            var1['photoPermissionStatus'] = var11;
            var1 = var3.bind(var5)(var2, var1);
            _fun0008_ip = 1216; continue _fun0008;
 948:
            var4 = _closure1_slot17;
            var3 = _closure1_slot23;
            var2 = {};
            var2['minHeight'] = var6;
            var7 = _closure1_slot15;
            var7 = var7.LIMITED;
            var8 = null;
            if(!(var11 === var7)) { _fun0008_ip = 1011; continue _fun0008 }
 979:
            var12 = _closure1_slot16;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 26;
            var7 = var13[var7];
            var11 = var11.bind(var5)(var7);
            var7 = {};
            var8 = var12.bind(var5)(var11, var7);
 1011:
            var7 = new Array(2);
            var7[0] = var8;
            var12 = _closure1_slot16;
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
                var1 = _closure1_slot11;
                var2 = var1.TAKE_A_PHOTO_BUTTON;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var13['onPress'] = var14;
            var8['callToAction'] = var13;
            var37 = var8;
            var36 = var9;
            var13 = copyDataProperties(var37, var36);
            var8 = var12.bind(var5)(var11, var8);
            var7[1] = var8;
            var2['children'] = var7;
            var1 = var4.bind(var5)(var3, var2);
 1216:
            _fun0008_ip = 1434; continue _fun0008;
 1221:
            var4 = _closure1_slot16;
            var3 = _closure1_slot23;
            var2 = {};
            var2['minHeight'] = var6;
            var8 = _closure1_slot16;
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
            var37 = var6;
            var36 = var9;
            var9 = copyDataProperties(var37, var36);
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1434:
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
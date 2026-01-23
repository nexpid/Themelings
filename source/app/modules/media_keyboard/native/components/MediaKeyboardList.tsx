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
    var8 = 'function MediaKeyboardListTsx1(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}';
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardListTsx2(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = var7.memo;
    var2 = function MediaKeyboardList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var33 = var2.channel;
            var _closure2_slot0 = var33;
            var32 = var2.draftType;
            var _closure2_slot1 = var32;
            var15 = var2.onPressCamera;
            var _closure2_slot2 = var15;
            var30 = var2.onAttachPress;
            var _closure2_slot3 = var30;
            var29 = var2.onPressItem;
            var _closure2_slot4 = var29;
            var28 = var2.onLongPressItem;
            var _closure2_slot5 = var28;
            var19 = var2.onViewAll;
            var _closure2_slot6 = var19;
            var27 = var2.includedUploadIds;
            var _closure2_slot7 = var27;
            var1 = var2.uploadDisabled;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
case 2:
            var _closure2_slot8 = var1;
            var26 = var2.uploadLimit;
            var _closure2_slot9 = var26;
            var20 = var2.disableWhenReachedLimit;
            var _closure2_slot10 = var20;
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
            var25 = _closure1_slot4;
            var2 = var25.useRef;
            var12 = true;
            var2 = var2.bind(var25)(var12);
            _closure2_slot11 = var2;
            var4 = var25.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1) {
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
            var9 = var4.bind(var25)(var2, var3);
            var3 = var25.useState;
            var2 = null;
            var3 = var3.bind(var25)(var2);
            var6 = _closure1_slot3;
            var22 = 2;
            var4 = var6.bind(var5)(var3, var22);
            var16 = 0;
            var23 = var4[var16];
            _closure2_slot12 = var23;
            var3 = 1;
            var4 = var4[var3];
            _closure2_slot13 = var4;
            var14 = _closure1_slot1;
            var39 = _closure1_slot2;
            var4 = 11;
            var4 = var39[var4];
            var7 = var14.bind(var5)(var4);
            var4 = var7.useAssets;
            var24 = var4.bind(var7)();
            _closure2_slot14 = var24;
            var38 = _closure1_slot0;
            var4 = 12;
            var4 = var39[var4];
            var7 = var38.bind(var5)(var4);
            var4 = var7.useMediaKeyboardItemsPerRow;
            var4 = var4.bind(var7)();
            var7 = var4.itemsPerRow;
            _closure2_slot15 = var7;
            var11 = var4.itemsPageSizeRef;
            _closure2_slot16 = var11;
            var13 = var25.useEffect;
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
            var4 = new Array(0);
            var4 = var13.bind(var25)(var8, var4);
            var13 = var25.useEffect;
            var8 = new Array(2);
            var8[0] = var23;
            var8[1] = var11;
            var4 = function() {
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
                    var2 = 11;
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
                            var1 = 11;
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
            var4 = var13.bind(var25)(var4, var8);
            var4 = 13;
            var4 = var39[var4];
            var4 = var14.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var8 = var4.top;
            var13 = 14;
            var4 = var39[var13];
            var14 = var14.bind(var5)(var4);
            var4 = {};
            var4['ignoreKeyboard'] = var12;
            var4 = var14.bind(var5)(var4);
            var35 = var4.height;
            _closure2_slot17 = var35;
            var4 = _closure1_slot8;
            var34 = var35 * var4;
            _closure2_slot18 = var34;
            var4 = 15;
            var4 = var39[var4];
            var4 = var38.bind(var5)(var4);
            var4 = var4.NAV_BAR_HEIGHT_MULTILINE;
            var4 = var35 - var4;
            var31 = var4 - var8;
            _closure2_slot19 = var31;
            var4 = 16;
            var4 = var39[var4];
            var8 = var38.bind(var5)(var4);
            var4 = var8.useBottomSheetInternal;
            var4 = var4.bind(var8)();
            var18 = var4.animatedSnapPoints;
            _closure2_slot20 = var18;
            var8 = var25.useState;
            var4 = {};
            var4['minimum'] = var34;
            var4['maximum'] = var31;
            var4 = var8.bind(var25)(var4);
            var4 = var6.bind(var5)(var4, var22);
            var6 = var4[var16];
            var6 = var6.maximum;
            _closure2_slot21 = var6;
            var36 = var4[var3];
            _closure2_slot22 = var36;
            var37 = 17;
            var4 = var39[var37];
            var17 = var38.bind(var5)(var4);
            var14 = var17.useAnimatedReaction;
            var8 = function B() {
                var2 = _closure2_slot20;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = {};
            var4['animatedSnapPoints'] = var18;
            var8['__closure'] = var4;
            var4 = 11265068281555.0;
            var8['__workletHash'] = var4;
            var4 = _closure1_slot13;
            var8['__initData'] = var4;
            var4 = function z(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var8 = arg1;
                    var6 = arg2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 18;
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
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot22;
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
            var18 = {};
            var40 = 18;
            var40 = var39[var40];
            var40 = var38.bind(var5)(var40);
            var40 = var40.cheapWorkletArrayShallowEqual;
            var18['cheapWorkletArrayShallowEqual'] = var40;
            var37 = var39[var37];
            var37 = var38.bind(var5)(var37);
            var37 = var37.runOnJS;
            var18['runOnJS'] = var37;
            var18['setBottomSheetState'] = var36;
            var18['windowHeight'] = var35;
            var18['computedStartHeight'] = var34;
            var18['maxDynamicContentSize'] = var31;
            var4['__closure'] = var18;
            var18 = 911665206857.0;
            var4['__workletHash'] = var18;
            var18 = _closure1_slot14;
            var4['__initData'] = var18;
            var4 = var14.bind(var17)(var8, var4);
            var4 = _closure1_slot12;
            var17 = var4.bind(var5)();
            var18 = var25.useMemo;
            var8 = var2 == var24;
            var4 = undefined;
            if(var8) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var8 = var24.edges;
            var4 = var8.length;
case 20:
            var14 = new Array(2);
            var14[0] = var4;
            var8 = false;
            var14[1] = var8;
            var4 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot14;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                    var3 = _closure2_slot14;
                    var3 = var3.edges;
                    var1 = var3.length;
case 22:
                    var3 = var2 != var1;
                    var2 = 0;
                    if(!var3) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                    var2 = var1;
case 24:
                    var1 = 1;
                    var1 = var2 + var1;
                    return var1;
                }
            };
            var4 = var18.bind(var25)(var4, var14);
            _closure2_slot23 = var4;
            var25 = _closure1_slot4;
            var31 = var25.useMemo;
            var18 = new Array(3);
            var18[0] = var24;
            var18[1] = var8;
            var18[2] = var7;
            var14 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot14;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                    var2 = _closure2_slot14;
                    var2 = var4 == var2;
                    var5 = undefined;
                    var8 = undefined;
                    if(var2) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                    var2 = _closure2_slot14;
                    var8 = var2.edges;
case 28:
                    if(!(var4 == var8)) { _fun0007_ip = 30; continue _fun0007 }
case 24:
                    var8 = new Array(0);
case 30:
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
                    var2 = 19;
                    var2 = var7[var2];
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.chunk;
                    var2 = _closure2_slot15;
                    var2 = var3.bind(var5)(var6, var2);
                    return var2;
case 26:
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
                    var2 = 19;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.chunk;
                    var1 = _closure2_slot15;
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
                }
            };
            var14 = var31.bind(var25)(var14, var18);
            _closure2_slot24 = var14;
            var31 = var25.useCallback;
            var18 = new Array(1);
            var18[0] = var15;
            var15 = function() {
                var3 = _closure2_slot2;
                var1 = _closure1_slot7;
                var2 = var1.CAMERA_BUTTON;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var31 = var31.bind(var25)(var15, var18);
            _closure2_slot25 = var31;
            var18 = var25.useCallback;
            var15 = new Array(1);
            var15[0] = var11;
            var11 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 11;
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
            var11 = var18.bind(var25)(var11, var15);
            var18 = var25.useCallback;
            var15 = new Array(14);
            var15[0] = var33;
            var15[1] = var32;
            var15[2] = var31;
            var15[3] = var19;
            var15[4] = var30;
            var15[5] = var7;
            var15[6] = var29;
            var15[7] = var28;
            var15[8] = var14;
            var15[9] = var27;
            var15[10] = var1;
            var15[11] = var26;
            var15[12] = var20;
            var15[13] = var4;
            var4 = function(arg1, arg2) {
                var6 = arg2;
                var5 = _closure1_slot10;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 20;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = {};
                var7 = _closure2_slot1;
                var2['draftType'] = var7;
                var2['rowIndex'] = var6;
                var7 = _closure2_slot23;
                var2['totalNumItems'] = var7;
                var7 = _closure2_slot0;
                var2['channel'] = var7;
                var7 = _closure2_slot15;
                var2['numPerRow'] = var7;
                var7 = _closure2_slot24;
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
                var7 = _closure2_slot25;
                var2['handleCameraPress'] = var7;
                var7 = _closure2_slot3;
                var2['handleAttachPress'] = var7;
                var7 = _closure2_slot6;
                var2['handleViewAllPhotosPress'] = var7;
                var7 = _closure2_slot8;
                var2['disabled'] = var7;
                var1 = _closure2_slot24;
                var8 = var1[var6];
                var7 = var8.reduce;
                var1 = var6.toString;
                var6 = var1.bind(var6)();
                var1 = function(arg1, arg2) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var6 = arg1;
                        var2 = arg2;
                        var3 = null;
                        var1 = var6;
                        if(!(var3 != var2)) { _fun0008_ip = 31; continue _fun0008 }
case 23:
                        var8 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var7 = 20;
                        var4 = var4[var7];
                        var5 = undefined;
                        var8 = var8.bind(var5)(var4);
                        var4 = var8.isMediaCameraNode;
                        var4 = var4.bind(var8)(var2);
                        if(var4) { _fun0008_ip = 32; continue _fun0008 }
case 15:
                        var8 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var8 = var8.bind(var5)(var4);
                        var4 = var8.isAttachFilesNode;
                        var4 = var4.bind(var8)(var2);
                        if(var4) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.isViewAllPhotosNode;
                        var4 = var3.bind(var4)(var2);
                        var3 = global;
                        if(var4) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                        var2 = var2.node;
                        var2 = var2.image;
                        var7 = var2.uri;
                        var2 = var3.HermesInternal;
                        var5 = var2.concat;
                        var4 = '';
                        var2 = '-';
                        var2 = var5.bind(var4)(var6, var2, var7);
                        _fun0008_ip = 37; continue _fun0008;
case 35:
                        var3 = var3.HermesInternal;
                        var5 = var3.concat;
                        var4 = '';
                        var3 = '-view-all';
                        var2 = var5.bind(var4)(var6, var3);
case 37:
                        _fun0008_ip = 38; continue _fun0008;
case 33:
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var5 = var3.concat;
                        var4 = '';
                        var3 = '-attach';
                        var2 = var5.bind(var4)(var6, var3);
case 38:
                        _fun0008_ip = 39; continue _fun0008;
case 32:
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var5 = var3.concat;
                        var4 = '';
                        var3 = '-camera';
                        var2 = var5.bind(var4)(var6, var3);
case 39:
                        var1 = var2;
case 31:
                        return var1;
                    }
                };
                var1 = var7.bind(var8)(var1, var6);
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var15 = var18.bind(var25)(var4, var15);
            var18 = _closure1_slot1;
            var4 = _closure1_slot2;
            var13 = var4[var13];
            var13 = var18.bind(var5)(var13);
            var13 = var13.bind(var5)();
            var20 = var13.width;
            _closure2_slot26 = var20;
            var18 = var25.useMemo;
            var13 = new Array(2);
            var13[0] = var20;
            var13[1] = var7;
            var7 = function() {
                var7 = _closure2_slot26;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 20;
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
            var13 = var18.bind(var25)(var7, var13);
            var18 = var25.useCallback;
            var7 = new Array(2);
            var7[0] = var19;
            var7[1] = var1;
            var1 = function() {
                var4 = _closure1_slot10;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 21;
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
            var7 = var18.bind(var25)(var1, var7);
            var19 = var25.useMemo;
            var18 = new Array(1);
            var18[0] = var6;
            var1 = function() {
                var1 = {};
                var2 = _closure2_slot21;
                var1['height'] = var2;
                return var1;
            };
            var18 = var19.bind(var25)(var1, var18);
            var1 = _closure1_slot9;
            var1 = var1.LIMITED;
            var20 = var23 === var1;
            var19 = var25.useState;
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
            var19 = var19.bind(var25)(var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var5)(var19, var22);
            var19 = var1[var16];
            var1 = var1[var3];
            _closure2_slot27 = var1;
            var22 = var25.useCallback;
            var3 = function() {
                var4 = _closure1_slot10;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 22;
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
            var22 = var22.bind(var25)(var3, var1);
            var3 = _closure1_slot0;
            var1 = 23;
            var1 = var4[var1];
            var4 = var3.bind(var5)(var1);
            var3 = var4.getMediaEmptyStateComponentOrNull;
            var1 = {};
            var1['photoPermissionStatus'] = var23;
            var23 = var2 != var24;
            if(!var23) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var24 = var24.edges;
            var24 = var24.length;
            var23 = var16 === var24;
case 40:
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
            var21 = function onPressLimitedPicker() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure1_slot5;
                    var3 = var1.NativePermissionManager;
                    var5 = null;
                    var2 = var5 == var3;
                    var1 = undefined;
                    if(var2) { _fun0009_ip = 30; continue _fun0009 }
case 42:
                    var2 = var3.presentLimitedLibraryPicker;
                    var2 = var5 == var2;
                    var1 = undefined;
                    if(var2) { _fun0009_ip = 30; continue _fun0009 }
case 43:
                    var2 = var3.presentLimitedLibraryPicker;
                    var1 = var2.bind(var3)();
case 30:
                    return var1;
                }
            };
            var1['onPressLimitedPicker'] = var21;
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var21 = 24;
            var21 = var24[var21];
            var21 = var23.bind(var5)(var21);
            var1['onPressPrivacySettings'] = var21;
            var1 = var3.bind(var4)(var1);
            if(!(var2 == var1)) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var4 = _closure1_slot10;
            var3 = _closure1_slot1;
            var21 = _closure1_slot2;
            var2 = 25;
            var2 = var21[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var21 = undefined;
            if(!var20) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var21 = var22;
case 46:
            var2['renderHeader'] = var21;
            var16 = 0;
            if(!var20) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var16 = var19;
case 48:
            var2['headerSize'] = var16;
            var16 = new Array(2);
            var16[0] = var18;
            var17 = var17.listContainer;
            var16[1] = var17;
            var2['style'] = var16;
            var2['renderItem'] = var15;
            var15 = var14.length;
            var14 = new Array(1);
            var14[0] = var15;
            var2['sections'] = var14;
            var2['itemSize'] = var13;
            var2['inActionSheet'] = var12;
            var2['preserveScrollMomentum'] = var12;
            var2['automaticallyAdjustsScrollIndicatorInsets'] = var8;
            var12 = 'none';
            var2['keyboardDismissMode'] = var12;
            var2['onEndReached'] = var11;
            var2['onScroll'] = var9;
            var9 = 400;
            var2['endReachedThreshold'] = var9;
            var9 = 'list';
            var2['accessibilityRole'] = var9;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = 26;
            var12 = var10[var11];
            var12 = var9.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var10[var11];
            var11 = var9.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.XONG6A;
            var11 = var12.bind(var13)(var11);
            var2['accessibilityLabel'] = var11;
            var2['showsVerticalScrollIndicator'] = var8;
            var8 = 21;
            var8 = var10[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.FOOTER_HEIGHT;
            var2['footerSize'] = var8;
            var2['renderFooter'] = var7;
            var2['chunkBase'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 44:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboardList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
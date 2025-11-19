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
    var12 = var12.BG_BASE_SECONDARY;
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
            var32 = var2.channel;
            var _closure2_slot0 = var32;
            var31 = var2.draftType;
            var _closure2_slot1 = var31;
            var14 = var2.onPressCamera;
            var _closure2_slot2 = var14;
            var29 = var2.onAttachPress;
            var _closure2_slot3 = var29;
            var28 = var2.onPressItem;
            var _closure2_slot4 = var28;
            var27 = var2.onLongPressItem;
            var _closure2_slot5 = var27;
            var18 = var2.onViewAll;
            var _closure2_slot6 = var18;
            var26 = var2.includedUploadIds;
            var _closure2_slot7 = var26;
            var1 = var2.uploadDisabled;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
case 2:
            var _closure2_slot8 = var1;
            var25 = var2.uploadLimit;
            var _closure2_slot9 = var25;
            var19 = var2.disableWhenReachedLimit;
            var _closure2_slot10 = var19;
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
            var _closure2_slot28 = var5;
            var _closure2_slot29 = var5;
            var30 = _closure1_slot4;
            var2 = var30.useRef;
            var8 = true;
            var2 = var2.bind(var30)(var8);
            _closure2_slot11 = var2;
            var4 = var30.useCallback;
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
            var9 = var4.bind(var30)(var2, var3);
            var3 = var30.useState;
            var2 = null;
            var3 = var3.bind(var30)(var2);
            var6 = _closure1_slot3;
            var21 = 2;
            var4 = var6.bind(var5)(var3, var21);
            var15 = 0;
            var22 = var4[var15];
            _closure2_slot12 = var22;
            var3 = 1;
            var4 = var4[var3];
            _closure2_slot13 = var4;
            var24 = _closure1_slot1;
            var17 = _closure1_slot2;
            var4 = 11;
            var4 = var17[var4];
            var7 = var24.bind(var5)(var4);
            var4 = var7.useAssets;
            var23 = var4.bind(var7)();
            _closure2_slot14 = var23;
            var13 = _closure1_slot0;
            var4 = 12;
            var4 = var17[var4];
            var7 = var13.bind(var5)(var4);
            var4 = var7.useMediaKeyboardItemsPerRow;
            var4 = var4.bind(var7)();
            var7 = var4.itemsPerRow;
            _closure2_slot15 = var7;
            var11 = var4.itemsPageSizeRef;
            _closure2_slot16 = var11;
            var16 = var30.useEffect;
            var12 = function() {
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
            var4 = var16.bind(var30)(var12, var4);
            var16 = var30.useEffect;
            var12 = new Array(2);
            var12[0] = var22;
            var12[1] = var11;
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
            var4 = var16.bind(var30)(var4, var12);
            var4 = 13;
            var4 = var17[var4];
            var4 = var24.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var16 = var4.top;
            var12 = 14;
            var4 = var17[var12];
            var24 = var24.bind(var5)(var4);
            var4 = {};
            var4['ignoreKeyboard'] = var8;
            var4 = var24.bind(var5)(var4);
            var37 = var4.height;
            _closure2_slot17 = var37;
            var4 = _closure1_slot8;
            var36 = var37 * var4;
            _closure2_slot18 = var36;
            var4 = 15;
            var4 = var17[var4];
            var4 = var13.bind(var5)(var4);
            var4 = var4.NAV_BAR_HEIGHT_MULTILINE;
            var4 = var37 - var4;
            var35 = var4 - var16;
            _closure2_slot19 = var35;
            var4 = 16;
            var4 = var17[var4];
            var16 = var13.bind(var5)(var4);
            var4 = var16.useBottomSheetInternal;
            var4 = var4.bind(var16)();
            var34 = var4.animatedSnapPoints;
            _closure2_slot20 = var34;
            var16 = var30.useState;
            var4 = {};
            var4['minimum'] = var36;
            var4['maximum'] = var35;
            var4 = var16.bind(var30)(var4);
            var4 = var6.bind(var5)(var4, var21);
            var6 = var4[var15];
            var6 = var6.maximum;
            _closure2_slot21 = var6;
            var38 = var4[var3];
            _closure2_slot22 = var38;
            var39 = 17;
            var4 = var17[var39];
            var33 = var13.bind(var5)(var4);
            var24 = var33.useAnimatedReaction;
            var16 = function B() {
                var2 = _closure2_slot20;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = {};
            var4['animatedSnapPoints'] = var34;
            var16['__closure'] = var4;
            var4 = 11265068281555.0;
            var16['__workletHash'] = var4;
            var4 = _closure1_slot13;
            var16['__initData'] = var4;
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
            var34 = {};
            var40 = 18;
            var40 = var17[var40];
            var40 = var13.bind(var5)(var40);
            var40 = var40.cheapWorkletArrayShallowEqual;
            var34['cheapWorkletArrayShallowEqual'] = var40;
            var39 = var17[var39];
            var39 = var13.bind(var5)(var39);
            var39 = var39.runOnJS;
            var34['runOnJS'] = var39;
            var34['setBottomSheetState'] = var38;
            var34['windowHeight'] = var37;
            var34['computedStartHeight'] = var36;
            var34['maxDynamicContentSize'] = var35;
            var4['__closure'] = var34;
            var34 = 911665206857.0;
            var4['__workletHash'] = var34;
            var34 = _closure1_slot14;
            var4['__initData'] = var34;
            var4 = var24.bind(var33)(var16, var4);
            var4 = _closure1_slot12;
            var16 = var4.bind(var5)();
            var4 = 19;
            var4 = var17[var4];
            var24 = var13.bind(var5)(var4);
            var4 = var24.useMediaKeyboardActionsExperiment;
            var4 = var4.bind(var24)();
            var24 = var4.mediaKeyboardActionsType;
            var4 = 'legacy';
            var33 = var4 !== var24;
            _closure2_slot23 = var33;
            var4 = 20;
            var4 = var17[var4];
            var4 = var13.bind(var5)(var4);
            var17 = var4.ChatInputIaMobileExperiment;
            var13 = var17.useConfig;
            var4 = {};
            var24 = 'MediaKeyboardList';
            var4['location'] = var24;
            var4 = var13.bind(var17)(var4);
            var13 = var4.moveFilesToMediaGrid;
            _closure2_slot24 = var13;
            var24 = var30.useMemo;
            var17 = var2 == var23;
            var4 = undefined;
            if(var17) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var17 = var23.edges;
            var4 = var17.length;
case 20:
            var17 = new Array(3);
            var17[0] = var4;
            var17[1] = var33;
            var17[2] = var13;
            var4 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot14;
                    var3 = null;
                    var4 = var3 == var2;
                    var2 = undefined;
                    if(var4) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                    var4 = _closure2_slot14;
                    var4 = var4.edges;
                    var2 = var4.length;
case 22:
                    var3 = var3 != var2;
                    var4 = 0;
                    if(!var3) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                    var4 = var2;
case 24:
                    var2 = _closure2_slot23;
                    var3 = var4;
                    if(var2) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var2 = 1;
                    var3 = var4 + var2;
case 26:
                    var2 = _closure2_slot24;
                    var1 = var3;
                    if(!var2) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                    var2 = 1;
                    var1 = var3 + var2;
case 28:
                    return var1;
                }
            };
            var4 = var24.bind(var30)(var4, var17);
            _closure2_slot25 = var4;
            var24 = _closure1_slot4;
            var30 = var24.useMemo;
            var17 = new Array(4);
            var17[0] = var23;
            var17[1] = var33;
            var17[2] = var13;
            var17[3] = var7;
            var13 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot14;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    var2 = _closure2_slot14;
                    var2 = var4 == var2;
                    var5 = undefined;
                    var8 = undefined;
                    if(var2) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                    var2 = _closure2_slot14;
                    var8 = var2.edges;
case 32:
                    if(!(var4 == var8)) { _fun0007_ip = 34; continue _fun0007 }
case 24:
                    var8 = new Array(0);
case 34:
                    var6 = new Array(0);
                    var2 = _closure2_slot24;
                    if(!var2) { _fun0007_ip = 35; continue _fun0007 }
case 15:
                    var3 = var6.push;
                    var2 = {};
                    var7 = 'attach';
                    var2['type'] = var7;
                    var2 = var3.bind(var6)(var2);
case 35:
                    var2 = _closure2_slot23;
                    if(var2) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                    var3 = var6.push;
                    var2 = {};
                    var7 = 'camera';
                    var2['type'] = var7;
                    var2 = var3.bind(var6)(var2);
case 36:
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
                    var2 = 21;
                    var2 = var7[var2];
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.chunk;
                    var2 = _closure2_slot15;
                    var2 = var3.bind(var5)(var6, var2);
                    return var2;
case 30:
                    var2 = global;
                    var3 = var2.Array;
                    var5 = _closure2_slot15;
                    var2 = 3;
                    var2 = var2 * var5;
                    var5 = undefined;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.fill;
                    var4 = var2.bind(var3)(var4);
                    var2 = _closure2_slot24;
                    var6 = 0;
                    var3 = 0;
                    if(!var2) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var2 = {};
                    var7 = 'attach';
                    var2['type'] = var7;
                    var4[var6] = var2;
                    var3 = 1;
case 38:
                    var2 = _closure2_slot23;
                    if(var2) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                    var2 = {};
                    var6 = 'camera';
                    var2['type'] = var6;
                    var4[var3] = var2;
case 40:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 21;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.chunk;
                    var1 = _closure2_slot15;
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
                }
            };
            var13 = var30.bind(var24)(var13, var17);
            _closure2_slot26 = var13;
            var30 = var24.useCallback;
            var17 = new Array(1);
            var17[0] = var14;
            var14 = function() {
                var3 = _closure2_slot2;
                var1 = _closure1_slot7;
                var2 = var1.CAMERA_BUTTON;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var30 = var30.bind(var24)(var14, var17);
            _closure2_slot27 = var30;
            var17 = var24.useCallback;
            var14 = new Array(1);
            var14[0] = var11;
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
            var11 = var17.bind(var24)(var11, var14);
            var17 = var24.useCallback;
            var14 = new Array(13);
            var14[0] = var32;
            var14[1] = var31;
            var14[2] = var30;
            var14[3] = var29;
            var14[4] = var7;
            var14[5] = var28;
            var14[6] = var27;
            var14[7] = var13;
            var14[8] = var26;
            var14[9] = var1;
            var14[10] = var25;
            var14[11] = var19;
            var14[12] = var4;
            var4 = function(arg1, arg2) {
                var6 = arg2;
                var5 = _closure1_slot10;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 22;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = {};
                var7 = _closure2_slot1;
                var2['draftType'] = var7;
                var2['rowIndex'] = var6;
                var7 = _closure2_slot25;
                var2['totalNumItems'] = var7;
                var7 = _closure2_slot0;
                var2['channel'] = var7;
                var7 = _closure2_slot15;
                var2['numPerRow'] = var7;
                var7 = _closure2_slot26;
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
                var7 = _closure2_slot27;
                var2['handleCameraPress'] = var7;
                var7 = _closure2_slot3;
                var2['handleAttachPress'] = var7;
                var7 = _closure2_slot8;
                var2['disabled'] = var7;
                var1 = _closure2_slot26;
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
                        if(!(var3 != var2)) { _fun0008_ip = 42; continue _fun0008 }
case 23:
                        var8 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var7 = 22;
                        var4 = var4[var7];
                        var5 = undefined;
                        var8 = var8.bind(var5)(var4);
                        var4 = var8.isMediaCameraNode;
                        var4 = var4.bind(var8)(var2);
                        if(var4) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.isAttachFilesNode;
                        var4 = var3.bind(var4)(var2);
                        var3 = global;
                        if(var4) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                        var2 = var2.node;
                        var2 = var2.image;
                        var7 = var2.uri;
                        var2 = var3.HermesInternal;
                        var5 = var2.concat;
                        var4 = '';
                        var2 = '-';
                        var2 = var5.bind(var4)(var6, var2, var7);
                        _fun0008_ip = 47; continue _fun0008;
case 45:
                        var3 = var3.HermesInternal;
                        var5 = var3.concat;
                        var4 = '';
                        var3 = '-attach';
                        var2 = var5.bind(var4)(var6, var3);
case 47:
                        _fun0008_ip = 48; continue _fun0008;
case 43:
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var5 = var3.concat;
                        var4 = '';
                        var3 = '-camera';
                        var2 = var5.bind(var4)(var6, var3);
case 48:
                        var1 = var2;
case 42:
                        return var1;
                    }
                };
                var1 = var7.bind(var8)(var1, var6);
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var14 = var17.bind(var24)(var4, var14);
            var17 = _closure1_slot1;
            var4 = _closure1_slot2;
            var12 = var4[var12];
            var12 = var17.bind(var5)(var12);
            var12 = var12.bind(var5)();
            var19 = var12.width;
            _closure2_slot28 = var19;
            var17 = var24.useMemo;
            var12 = new Array(2);
            var12[0] = var19;
            var12[1] = var7;
            var7 = function() {
                var7 = _closure2_slot28;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 22;
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
            var12 = var17.bind(var24)(var7, var12);
            var17 = var24.useCallback;
            var7 = new Array(2);
            var7[0] = var18;
            var7[1] = var1;
            var1 = function() {
                var4 = _closure1_slot10;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 23;
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
            var7 = var17.bind(var24)(var1, var7);
            var18 = var24.useMemo;
            var17 = new Array(1);
            var17[0] = var6;
            var1 = function() {
                var1 = {};
                var2 = _closure2_slot21;
                var1['height'] = var2;
                return var1;
            };
            var17 = var18.bind(var24)(var1, var17);
            var1 = _closure1_slot9;
            var1 = var1.LIMITED;
            var19 = var22 === var1;
            var18 = var24.useState;
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
            var18 = var18.bind(var24)(var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var5)(var18, var21);
            var18 = var1[var15];
            var1 = var1[var3];
            _closure2_slot29 = var1;
            var21 = var24.useCallback;
            var3 = function() {
                var4 = _closure1_slot10;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 24;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot29;
                var1['onHeightChange'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1 = new Array(0);
            var21 = var21.bind(var24)(var3, var1);
            var3 = _closure1_slot0;
            var1 = 25;
            var1 = var4[var1];
            var4 = var3.bind(var5)(var1);
            var3 = var4.getMediaEmptyStateComponentOrNull;
            var1 = {};
            var1['photoPermissionStatus'] = var22;
            var22 = var2 != var23;
            if(!var22) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var23 = var23.edges;
            var23 = var23.length;
            var22 = var15 === var23;
case 49:
            var1['photosEmpty'] = var22;
            var22 = function onPressCamera() {
                var3 = _closure2_slot2;
                var1 = _closure1_slot7;
                var2 = var1.TAKE_A_PHOTO_BUTTON;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onPressCamera'] = var22;
            var20 = function onPressLimitedPicker() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure1_slot5;
                    var3 = var1.NativePermissionManager;
                    var5 = null;
                    var2 = var5 == var3;
                    var1 = undefined;
                    if(var2) { _fun0009_ip = 34; continue _fun0009 }
case 51:
                    var2 = var3.presentLimitedLibraryPicker;
                    var2 = var5 == var2;
                    var1 = undefined;
                    if(var2) { _fun0009_ip = 34; continue _fun0009 }
case 52:
                    var2 = var3.presentLimitedLibraryPicker;
                    var1 = var2.bind(var3)();
case 34:
                    return var1;
                }
            };
            var1['onPressLimitedPicker'] = var20;
            var22 = _closure1_slot1;
            var23 = _closure1_slot2;
            var20 = 26;
            var20 = var23[var20];
            var20 = var22.bind(var5)(var20);
            var1['onPressPrivacySettings'] = var20;
            var1 = var3.bind(var4)(var1);
            if(!(var2 == var1)) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var4 = _closure1_slot10;
            var3 = _closure1_slot1;
            var20 = _closure1_slot2;
            var2 = 27;
            var2 = var20[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var20 = undefined;
            if(!var19) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var20 = var21;
case 55:
            var2['renderHeader'] = var20;
            var15 = 0;
            if(!var19) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var15 = var18;
case 57:
            var2['headerSize'] = var15;
            var15 = new Array(2);
            var15[0] = var17;
            var16 = var16.listContainer;
            var15[1] = var16;
            var2['style'] = var15;
            var2['renderItem'] = var14;
            var14 = var13.length;
            var13 = new Array(1);
            var13[0] = var14;
            var2['sections'] = var13;
            var2['itemSize'] = var12;
            var2['inActionSheet'] = var8;
            var2['preserveScrollMomentum'] = var8;
            var8 = false;
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
            var11 = 28;
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
            var8 = 23;
            var8 = var10[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.FOOTER_HEIGHT;
            var2['footerSize'] = var8;
            var2['renderFooter'] = var7;
            var2['chunkBase'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 53:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboardList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
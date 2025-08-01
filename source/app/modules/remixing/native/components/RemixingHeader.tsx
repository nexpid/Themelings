// app/modules/remixing/native/components/RemixingHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
        var1 = 0;
        var4 = var6[var1];
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
        var8 = var4.StyleSheet;
        var _closure1_slot7 = var8;
        var4 = var4.View;
        var _closure1_slot8 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var9 = var4.isUsingTool;
        var _closure1_slot9 = var9;
        var9 = var4.isInTextMode;
        var _closure1_slot10 = var9;
        var9 = var4.useRemixingEditorStore;
        var _closure1_slot11 = var9;
        var9 = var4.isInDrawMode;
        var _closure1_slot12 = var9;
        var9 = var4.isInCropMode;
        var _closure1_slot13 = var9;
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
        var4 = var4.RemixMode;
        var _closure1_slot17 = var4;
        var10 = 8;
        var4 = var6[var10];
        var4 = var5.bind(var1)(var4);
        var7 = var4.NOOP;
        var _closure1_slot18 = var7;
        var4 = var4.NOOP_PROMISE;
        var _closure1_slot19 = var4;
        var4 = 9;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot20 = var7;
        var7 = var4.Fragment;
        var _closure1_slot21 = var7;
        var4 = var4.jsxs;
        var _closure1_slot22 = var4;
        var7 = var8.create;
        var4 = {};
        var9 = {'flex': 1, 'alignItems': 'center', 'flexDirection': 'row', 'height': null, 'paddingHorizontal': 12, 'justifyContent': 'space-between'};
        var11 = 10;
        var11 = var6[var11];
        var11 = var5.bind(var1)(var11);
        var11 = var11.NAV_BAR_HEIGHT;
        var9['height'] = var11;
        var4['navbarContainer'] = var9;
        var9 = {'flex': 1, 'flexGrow': 1, 'flexShrink': 1, 'justifyContent': 'flex-start', 'flexDirection': 'row'};
        var4['navbarLeft'] = var9;
        var9 = {'flex': 0, 'flexGrow': 0, 'flexShrink': 0, 'justifyContent': 'flex-end', 'flexDirection': 'row'};
        var4['navbarRight'] = var9;
        var9 = {};
        var11 = 'none';
        var9['display'] = var11;
        var4['saveImageButtonPlaceDisabled'] = var9;
        var11 = 20;
        var9 = {'flexDirection': 'row', 'alignSelf': 'auto', 'height': 40, 'width': 'auto', 'borderRadius': 20, 'alignItems': 'center', 'justifyContent': 'center', 'marginStart': 4};
        var4['postButton'] = var9;
        var9 = {'borderRadius': 24, 'backgroundColor': 'rgba(24, 25, 28, 0.7)', 'flexShrink': 0};
        var4['headerIconStyle'] = var9;
        var9 = {'lineHeight': null, 'display': 'flex', 'marginHorizontal': 4};
        var12 = 11;
        var12 = var6[var12];
        var13 = var5.bind(var1)(var12);
        var12 = var13.isAndroid;
        var12 = var12.bind(var13)();
        if(!var12) { _fun0001_ip = 536; continue _fun0001 }
 533:
        var11 = 16;
 536:
        var9['lineHeight'] = var11;
        var4['buttonTextStyle'] = var9;
        var9 = {'marginStart': 2, 'marginEnd': 4};
        var4['buttonTextStyleWithIcon'] = var9;
        var9 = {};
        var9['marginRight'] = var10;
        var4['undoButtonStyle'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot23 = var4;
        var4 = 33;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/remixing/native/components/RemixingHeader.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function RemixingHeader(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var12 = var1.saveRemix;
                var4 = undefined;
                if(!(var12 === var4)) { _fun0002_ip = 24; continue _fun0002 }
 17:
                var12 = _closure1_slot19;
 24:
                var _closure2_slot0 = var12;
                var3 = var1.sendRemix;
                if(!(var3 === var4)) { _fun0002_ip = 45; continue _fun0002 }
 38:
                var3 = _closure1_slot19;
 45:
                var _closure2_slot1 = var3;
                var19 = var1.clearActiveId;
                if(!(var19 === var4)) { _fun0002_ip = 66; continue _fun0002 }
 59:
                var19 = _closure1_slot18;
 66:
                var _closure2_slot2 = var19;
                var8 = var1.animated;
                var17 = var1.undoRedoSaveVisible;
                var2 = var1.onExit;
                var _closure2_slot3 = var2;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var _closure2_slot14 = var4;
                var _closure2_slot15 = var4;
                var _closure2_slot16 = var4;
                var5 = _closure1_slot0;
                var11 = _closure1_slot3;
                var1 = 12;
                var6 = var11[var1];
                var7 = var5.bind(var4)(var6);
                var6 = var7.useOverlayLayoutDriver;
                var7 = var6.bind(var7)();
                var1 = var11[var1];
                var6 = var5.bind(var4)(var1);
                var1 = var6.useHeaderLayoutAnimation;
                var7 = var1.bind(var6)(var7);
                var1 = 13;
                var1 = var11[var1];
                var10 = var5.bind(var4)(var1);
                var9 = var10.useStateFromStoresObject;
                var1 = _closure1_slot15;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() {
                    var1 = {};
                    var3 = _closure1_slot15;
                    var2 = var3.getRedoEnabled;
                    var2 = var2.bind(var3)();
                    var1['redoEnabled'] = var2;
                    var2 = var3.getUndoEnabled;
                    var2 = var2.bind(var3)();
                    var1['undoEnabled'] = var2;
                    return var1;
                };
                var1 = var9.bind(var10)(var6, var1);
                var32 = var1.redoEnabled;
                _closure2_slot4 = var32;
                var33 = var1.undoEnabled;
                _closure2_slot5 = var33;
                var6 = _closure1_slot11;
                var1 = 14;
                var1 = var11[var1];
                var1 = var5.bind(var4)(var1);
                var5 = var1.shallow;
                var1 = function(arg1) {
                    var2 = arg1;
                    var3 = var2.currentMode;
                    var1 = new Array(5);
                    var1[0] = var3;
                    var3 = var2.setCurrentMode;
                    var1[1] = var3;
                    var3 = var2.setEditingComponent;
                    var1[2] = var3;
                    var3 = var2.headerMeasurements;
                    var1[3] = var3;
                    var2 = var2.setHeaderMeasurements;
                    var1[4] = var2;
                    return var1;
                };
                var5 = var6.bind(var4)(var1, var5);
                var23 = _closure1_slot5;
                var1 = 5;
                var6 = var23.bind(var4)(var5, var1);
                var15 = 0;
                var16 = var6[var15];
                _closure2_slot6 = var16;
                var31 = 1;
                var1 = var6[var31];
                _closure2_slot7 = var1;
                var22 = 2;
                var18 = var6[var22];
                _closure2_slot8 = var18;
                var5 = 3;
                var24 = var6[var5];
                _closure2_slot9 = var24;
                var5 = 4;
                var9 = var6[var5];
                _closure2_slot10 = var9;
                var10 = _closure1_slot6;
                var5 = var10.useRef;
                var6 = null;
                var5 = var5.bind(var10)(var6);
                _closure2_slot11 = var5;
                var25 = var10.useMemo;
                var21 = new Array(1);
                var21[0] = var5;
                var20 = function() {
                    var1 = function() {
                        var1 = global;
                        var3 = var1.Promise;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {constructor: {value: var3}});
                        var4 = function(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                var2 = arg1;
                                var _closure5_slot0 = var2;
                                var3 = _closure2_slot11;
                                var4 = var3.current;
                                var3 = null;
                                if(!(var3 != var4)) { _fun0003_ip = 52; continue _fun0003 }
 27:
                                var2 = _closure2_slot11;
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
 52:
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
                var25 = var25.bind(var10)(var20, var21);
                _closure2_slot12 = var25;
                var21 = var10.useCallback;
                var20 = new Array(3);
                var20[0] = var25;
                var20[1] = var24;
                var20[2] = var9;
                var9 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = _closure2_slot9;
                        var1 = null;
                        if(!(var1 == var2)) { _fun0004_ip = 30; continue _fun0004 }
 13:
                        var1 = function() {
                            var4 = _closure1_slot4;
                            var3 = undefined;
                            var2 = function* () {
                                var1 = function* anon_0_() {
                                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                        if(var2) { _fun0005_ip = 45; continue _fun0005 }
 7:
                                        var2 = _closure2_slot12;
                                        var3 = undefined;
                                        var2 = var2.bind(var3)();
                                        SaveGenerator(address=24);
 22:
                                        return var2;
 24:
                                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                        if(var5) { _fun0005_ip = 42; continue _fun0005 }
 30:
                                        var4 = _closure2_slot10;
                                        var4 = var4.bind(var3)(var2);
                                        return var3;
 42:
                                        return var2;
 45:
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
                        var2 = undefined;
                        var1 = var1.bind(var2)();
                        var1 = var1.bind(var2)();
 30:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9 = var21.bind(var10)(var9, var20);
                var20 = var10.useState;
                var24 = false;
                var20 = var20.bind(var10)(var24);
                var20 = var23.bind(var4)(var20, var22);
                var21 = var20[var15];
                var20 = var20[var31];
                _closure2_slot13 = var20;
                var20 = var10.useState;
                var20 = var20.bind(var10)(var24);
                var20 = var23.bind(var4)(var20, var22);
                var15 = var20[var15];
                var20 = var20[var31];
                _closure2_slot14 = var20;
                var22 = var10.useCallback;
                var20 = new Array(2);
                var20[0] = var19;
                var20[1] = var12;
                var12 = function() {
                    var5 = _closure2_slot13;
                    var1 = undefined;
                    var4 = true;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure2_slot2;
                    var4 = var4.bind(var1)();
                    var3 = _closure2_slot0;
                    var5 = var3.bind(var1)();
                    var4 = var5.then;
                    var3 = function() {
                        var3 = _closure2_slot13;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var3 = 15;
                        var3 = var4[var3];
                        var5 = var5.bind(var1)(var3);
                        var3 = var5.presentImageSaved;
                        var3 = var3.bind(var5)();
                        var3 = _closure1_slot2;
                        var2 = 16;
                        var2 = var4[var2];
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.setUsedRemix;
                        var2 = true;
                        var2 = var5.bind(var6)(var2);
                        var2 = 17;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.trackRemixDownloaded;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var2 = function(arg1) {
                        var3 = _closure2_slot13;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var2 = 18;
                        var2 = var4[var2];
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.show;
                        var2 = {};
                        var10 = _closure1_slot0;
                        var7 = 19;
                        var8 = var4[var7];
                        var8 = var10.bind(var1)(var8);
                        var11 = var8.intl;
                        var9 = var11.string;
                        var8 = var4[var7];
                        var8 = var10.bind(var1)(var8);
                        var8 = var8.t;
                        var8 = var8.cV3alJ;
                        var8 = var9.bind(var11)(var8);
                        var2['title'] = var8;
                        var8 = var4[var7];
                        var8 = var10.bind(var1)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var7 = var4[var7];
                        var7 = var10.bind(var1)(var7);
                        var7 = var7.t;
                        var7 = var7.r4Zjzs;
                        var7 = var8.bind(var9)(var7);
                        var2['body'] = var7;
                        var7 = true;
                        var2['isDismissable'] = var7;
                        var2 = var5.bind(var6)(var2);
                        var2 = 20;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.captureException;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var25 = var22.bind(var10)(var12, var20);
                var20 = var10.useCallback;
                var12 = new Array(2);
                var12[0] = var19;
                var12[1] = var3;
                var3 = function() {
                    var5 = _closure2_slot14;
                    var1 = undefined;
                    var4 = true;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure2_slot2;
                    var4 = var4.bind(var1)();
                    var3 = _closure2_slot1;
                    var5 = var3.bind(var1)();
                    var4 = var5.then;
                    var3 = function() {
                        var3 = _closure2_slot14;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 20;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.captureException;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure2_slot14;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var3 = var20.bind(var10)(var3, var12);
                _closure2_slot15 = var3;
                var20 = var10.useCallback;
                var12 = new Array(2);
                var12[0] = var33;
                var12[1] = var19;
                var3 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var2 = _closure2_slot5;
                        if(!var2) { _fun0006_ip = 53; continue _fun0006 }
 10:
                        var1 = _closure2_slot2;
                        var3 = undefined;
                        var1 = var1.bind(var3)();
                        var2 = _closure1_slot2;
                        var4 = _closure1_slot3;
                        var1 = 16;
                        var1 = var4[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.undo;
                        var1 = var1.bind(var2)();
 53:
                        var1 = undefined;
                        return var1;
                    }
                };
                var34 = var20.bind(var10)(var3, var12);
                var20 = var10.useCallback;
                var12 = new Array(2);
                var12[0] = var33;
                var12[1] = var19;
                var3 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var2 = _closure2_slot5;
                        if(!var2) { _fun0007_ip = 298; continue _fun0007 }
 15:
                        var1 = _closure2_slot2;
                        var9 = undefined;
                        var1 = var1.bind(var9)();
                        var2 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var1 = 18;
                        var1 = var10[var1];
                        var3 = var2.bind(var9)(var1);
                        var2 = var3.show;
                        var1 = {};
                        var8 = _closure1_slot0;
                        var4 = 19;
                        var6 = var10[var4];
                        var6 = var8.bind(var9)(var6);
                        var11 = var6.intl;
                        var7 = var11.string;
                        var6 = var10[var4];
                        var6 = var8.bind(var9)(var6);
                        var6 = var6.t;
                        var6 = var6.bPif9/;
                        var6 = var7.bind(var11)(var6);
                        var1['title'] = var6;
                        var6 = var10[var4];
                        var6 = var8.bind(var9)(var6);
                        var11 = var6.intl;
                        var7 = var11.string;
                        var6 = var10[var4];
                        var6 = var8.bind(var9)(var6);
                        var6 = var6.t;
                        var6 = var6.8DLZrq;
                        var6 = var7.bind(var11)(var6);
                        var1['body'] = var6;
                        var6 = var10[var4];
                        var6 = var8.bind(var9)(var6);
                        var11 = var6.intl;
                        var7 = var11.string;
                        var6 = var10[var4];
                        var6 = var8.bind(var9)(var6);
                        var6 = var6.t;
                        var6 = var6.bPif9/;
                        var6 = var7.bind(var11)(var6);
                        var1['confirmText'] = var6;
                        var6 = var10[var4];
                        var6 = var8.bind(var9)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var4 = var10[var4];
                        var4 = var8.bind(var9)(var4);
                        var4 = var4.t;
                        var4 = var4.TeBod3;
                        var4 = var6.bind(var7)(var4);
                        var1['cancelText'] = var4;
                        var4 = true;
                        var1['fillCancelText'] = var4;
                        var6 = function onConfirm() {
                            var3 = _closure1_slot2;
                            var2 = _closure1_slot3;
                            var1 = 16;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.undoAll;
                            var2 = var2.bind(var3)();
                            return var1;
                        };
                        var1['onConfirm'] = var6;
                        var5 = function onCancel() {
                            var1 = undefined;
                            return var1;
                        };
                        var1['onCancel'] = var5;
                        var1['isDismissable'] = var4;
                        var1 = var2.bind(var3)(var1);
 298:
                        var1 = undefined;
                        return var1;
                    }
                };
                var30 = var20.bind(var10)(var3, var12);
                var20 = var10.useCallback;
                var12 = new Array(2);
                var12[0] = var32;
                var12[1] = var19;
                var3 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var2 = _closure2_slot4;
                        if(!var2) { _fun0008_ip = 53; continue _fun0008 }
 10:
                        var1 = _closure2_slot2;
                        var3 = undefined;
                        var1 = var1.bind(var3)();
                        var2 = _closure1_slot2;
                        var4 = _closure1_slot3;
                        var1 = 16;
                        var1 = var4[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.redo;
                        var1 = var1.bind(var2)();
 53:
                        var1 = undefined;
                        return var1;
                    }
                };
                var36 = var20.bind(var10)(var3, var12);
                var12 = var10.useCallback;
                var3 = new Array(6);
                var3[0] = var33;
                var3[1] = var19;
                var3[2] = var16;
                var3[3] = var1;
                var3[4] = var18;
                var3[5] = var2;
                var2 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var3 = _closure2_slot2;
                        var1 = undefined;
                        var3 = var3.bind(var1)();
                        var5 = _closure1_slot9;
                        var4 = _closure2_slot6;
                        var4 = var5.bind(var1)(var4);
                        if(var4) { _fun0009_ip = 397; continue _fun0009 }
 37:
                        var4 = _closure2_slot5;
                        var5 = _closure1_slot2;
                        var12 = _closure1_slot3;
                        if(var4) { _fun0009_ip = 100; continue _fun0009 }
 52:
                        var4 = 16;
                        var4 = var12[var4];
                        var6 = var5.bind(var1)(var4);
                        var4 = var6.exitRemixing;
                        var4 = var4.bind(var6)();
                        var6 = _closure2_slot3;
                        var4 = null;
                        if(!(var4 != var6)) { _fun0009_ip = 667; continue _fun0009 }
 87:
                        var4 = _closure2_slot3;
                        var4 = var4.bind(var1)();
                        _fun0009_ip = 667; continue _fun0009;
 100:
                        var4 = 17;
                        var4 = var12[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.trackRemixSurfaceExitModal;
                        var4 = var4.bind(var5)();
                        var5 = _closure1_slot1;
                        var4 = 18;
                        var4 = var12[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.show;
                        var4 = {};
                        var11 = _closure1_slot0;
                        var7 = 19;
                        var9 = var12[var7];
                        var9 = var11.bind(var1)(var9);
                        var13 = var9.intl;
                        var10 = var13.string;
                        var9 = var12[var7];
                        var9 = var11.bind(var1)(var9);
                        var9 = var9.t;
                        var9 = var9.OD9/l5;
                        var9 = var10.bind(var13)(var9);
                        var4['title'] = var9;
                        var9 = var12[var7];
                        var9 = var11.bind(var1)(var9);
                        var13 = var9.intl;
                        var10 = var13.string;
                        var9 = var12[var7];
                        var9 = var11.bind(var1)(var9);
                        var9 = var9.t;
                        var9 = var9.mNk38v;
                        var9 = var10.bind(var13)(var9);
                        var4['body'] = var9;
                        var9 = var12[var7];
                        var9 = var11.bind(var1)(var9);
                        var13 = var9.intl;
                        var10 = var13.string;
                        var9 = var12[var7];
                        var9 = var11.bind(var1)(var9);
                        var9 = var9.t;
                        var9 = var9.iieH6u;
                        var9 = var10.bind(var13)(var9);
                        var4['confirmText'] = var9;
                        var9 = var12[var7];
                        var9 = var11.bind(var1)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var7 = var12[var7];
                        var7 = var11.bind(var1)(var7);
                        var7 = var7.t;
                        var7 = var7.jvq6Y2;
                        var7 = var9.bind(var10)(var7);
                        var4['cancelText'] = var7;
                        var7 = true;
                        var4['fillCancelText'] = var7;
                        var9 = function onConfirm() {
                            var3 = _closure1_slot2;
                            var2 = _closure1_slot3;
                            var1 = 17;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.trackRemixingSurfaceExitCanceled;
                            var2 = var2.bind(var3)();
                            return var1;
                        };
                        var4['onConfirm'] = var9;
                        var8 = function onCancel() {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                                var3 = _closure1_slot2;
                                var2 = _closure1_slot3;
                                var1 = 16;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.exitRemixing;
                                var2 = var2.bind(var3)();
                                var4 = _closure2_slot3;
                                var3 = null;
                                if(!(var3 != var4)) { _fun0010_ip = 56; continue _fun0010 }
 48:
                                var2 = _closure2_slot3;
                                var2 = var2.bind(var1)();
 56:
                                return var1;
                            }
                        };
                        var4['onCancel'] = var8;
                        var4['isDismissable'] = var7;
                        var4 = var5.bind(var6)(var4);
                        _fun0009_ip = 667; continue _fun0009;
 397:
                        var5 = _closure1_slot10;
                        var4 = _closure2_slot6;
                        var4 = var5.bind(var1)(var4);
                        if(var4) { _fun0009_ip = 553; continue _fun0009 }
 416:
                        var5 = _closure1_slot12;
                        var4 = _closure2_slot6;
                        var4 = var5.bind(var1)(var4);
                        if(var4) { _fun0009_ip = 493; continue _fun0009 }
 432:
                        var5 = _closure1_slot13;
                        var4 = _closure2_slot6;
                        var4 = var5.bind(var1)(var4);
                        if(!var4) { _fun0009_ip = 637; continue _fun0009 }
 451:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var4 = 17;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.trackRemixingComponentToolCanceled;
                        var4 = 'CROP';
                        var4 = var5.bind(var6)(var4);
                        _fun0009_ip = 637; continue _fun0009;
 493:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var4 = 17;
                        var4 = var8[var4];
                        var7 = var5.bind(var1)(var4);
                        var6 = var7.trackRemixingComponentToolCanceled;
                        var4 = 21;
                        var4 = var8[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.RemixElement;
                        var5 = var4.DRAWING;
                        var4 = true;
                        var4 = var6.bind(var7)(var5, var4);
                        _fun0009_ip = 637; continue _fun0009;
 553:
                        var5 = _closure1_slot16;
                        var4 = var5.getState;
                        var4 = var4.bind(var5)();
                        var5 = var4.setShouldSaveText;
                        var4 = false;
                        var4 = var5.bind(var1)(var4);
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var4 = 17;
                        var4 = var8[var4];
                        var6 = var7.bind(var1)(var4);
                        var5 = var6.trackRemixingComponentToolCanceled;
                        var4 = 21;
                        var4 = var8[var4];
                        var4 = var7.bind(var1)(var4);
                        var4 = var4.RemixElement;
                        var4 = var4.TEXT;
                        var4 = var5.bind(var6)(var4);
 637:
                        var4 = _closure2_slot7;
                        var3 = _closure1_slot17;
                        var3 = var3.DEFAULT_MODE;
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure2_slot8;
                        var2 = null;
                        var2 = var3.bind(var1)(var2);
 667:
                        return var1;
                    }
                };
                var22 = var12.bind(var10)(var2, var3);
                _closure2_slot16 = var22;
                var3 = _closure1_slot1;
                var2 = 22;
                var2 = var11[var2];
                var3 = var3.bind(var4)(var2);
                var2 = function() {
                    var2 = _closure2_slot16;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    var1 = true;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var3 = var10.useCallback;
                var2 = new Array(2);
                var2[0] = var16;
                var2[1] = var1;
                var1 = function() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var5 = _closure1_slot12;
                        var4 = _closure2_slot6;
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        if(!var4) { _fun0011_ip = 82; continue _fun0011 }
 24:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var4 = 17;
                        var4 = var8[var4];
                        var7 = var5.bind(var1)(var4);
                        var6 = var7.trackRemixingComponentToolCanceled;
                        var4 = 21;
                        var4 = var8[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.RemixElement;
                        var5 = var4.DRAWING;
                        var4 = true;
                        var4 = var6.bind(var7)(var5, var4);
 82:
                        var3 = _closure2_slot7;
                        var2 = _closure1_slot17;
                        var2 = var2.DEFAULT_MODE;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var10 = var3.bind(var10)(var1, var2);
                var1 = _closure1_slot9;
                var1 = var1.bind(var4)(var16);
                var3 = _closure1_slot20;
                var12 = _closure1_slot1;
                var19 = _closure1_slot3;
                var11 = 23;
                var2 = var19[var11];
                var2 = var12.bind(var4)(var2);
                if(var1) { _fun0002_ip = 990; continue _fun0002 }
 781:
                var1 = {};
                var18 = true;
                var1['shrink'] = var18;
                var18 = var19[var11];
                var18 = var12.bind(var4)(var18);
                var18 = var18.Colors;
                var18 = var18.BRAND;
                var1['color'] = var18;
                var18 = var19[var11];
                var18 = var12.bind(var4)(var18);
                var18 = var18.Sizes;
                var18 = var18.MEDIUM;
                var1['size'] = var18;
                var24 = _closure1_slot0;
                var18 = 19;
                var20 = var19[var18];
                var20 = var24.bind(var4)(var20);
                var23 = var20.intl;
                var20 = var23.string;
                var18 = var19[var18];
                var18 = var24.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18.L5SL3t;
                var18 = var20.bind(var23)(var18);
                var1['text'] = var18;
                var18 = _closure1_slot23;
                var20 = var18.buttonTextStyle;
                var18 = new Array(2);
                var18[0] = var20;
                var20 = _closure1_slot23;
                var20 = var20.buttonTextStyleWithIcon;
                var18[1] = var20;
                var1['textStyle'] = var18;
                var18 = _closure1_slot23;
                var18 = var18.postButton;
                var1['style'] = var18;
                var1['disabled'] = var15;
                var15 = 20;
                var1['cornerRadius'] = var15;
                var15 = function renderRightIcon() {
                    var4 = _closure1_slot20;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var1 = 24;
                    var1 = var7[var1];
                    var3 = undefined;
                    var2 = var6.bind(var3)(var1);
                    var1 = {};
                    var5 = 25;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.unsafe_rawColors;
                    var5 = var5.WHITE_500;
                    var1['color'] = var5;
                    var5 = 26;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var1['source'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1['renderRightIcon'] = var15;
                var13 = function onPress() {
                    var2 = _closure2_slot15;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var1['onPress'] = var13;
                var15 = var3.bind(var4)(var2, var1);
                _fun0002_ip = 1150; continue _fun0002;
 990:
                var1 = {};
                var13 = true;
                var1['shrink'] = var13;
                var11 = var19[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.Sizes;
                var11 = var11.MEDIUM;
                var1['size'] = var11;
                var18 = _closure1_slot0;
                var11 = 19;
                var12 = var19[var11];
                var12 = var18.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var19[var11];
                var11 = var18.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.xOjxOT;
                var11 = var12.bind(var13)(var11);
                var1['text'] = var11;
                var11 = _closure1_slot23;
                var11 = var11.buttonTextStyle;
                var1['textStyle'] = var11;
                var11 = _closure1_slot23;
                var12 = var11.postButton;
                var11 = new Array(2);
                var11[0] = var12;
                var12 = _closure1_slot23;
                var12 = var12.headerIconStyle;
                var11[1] = var12;
                var1['style'] = var11;
                var11 = 20;
                var1['cornerRadius'] = var11;
                var1['onPress'] = var10;
                var15 = var3.bind(var4)(var2, var1);
 1150:
                var3 = _closure1_slot20;
                var2 = _closure1_slot1;
                var10 = _closure1_slot3;
                var1 = 27;
                var1 = var10[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var1['onLayout'] = var9;
                var1['ref'] = var5;
                var9 = {};
                var5 = _closure1_slot7;
                var40 = var5.absoluteFillObject;
                var41 = var9;
                var5 = copyDataProperties(var41, var40);
                var5 = 'bottom';
                var9[var5] = var4;
                var5 = new Array(2);
                var5[0] = var9;
                var6 = null;
                if(!var8) { _fun0002_ip = 1234; continue _fun0002 }
 1231:
                var6 = var7;
 1234:
                var5[1] = var6;
                var1['style'] = var5;
                var7 = _closure1_slot20;
                var20 = _closure1_slot0;
                var19 = _closure1_slot3;
                var5 = 28;
                var5 = var19[var5];
                var5 = var20.bind(var4)(var5);
                var6 = var5.SafeAreaPaddingView;
                var5 = {'top': true, 'left': true, 'right': true, 'pointerEvents': 'box-none'};
                var11 = 'box-none';
                var10 = _closure1_slot22;
                var9 = _closure1_slot8;
                var8 = {};
                var12 = _closure1_slot23;
                var12 = var12.navbarContainer;
                var8['style'] = var12;
                var8['pointerEvents'] = var11;
                var11 = {};
                var12 = _closure1_slot23;
                var12 = var12.navbarLeft;
                var11['style'] = var12;
                var23 = _closure1_slot1;
                var18 = 29;
                var12 = var19[var18];
                var13 = var23.bind(var4)(var12);
                var12 = {};
                var27 = 19;
                var24 = var19[var27];
                var24 = var20.bind(var4)(var24);
                var28 = var24.intl;
                var26 = var28.string;
                var24 = var19[var27];
                var24 = var20.bind(var4)(var24);
                var24 = var24.t;
                var24 = var24.13/7kZ;
                var24 = var26.bind(var28)(var24);
                var12['accessibilityLabel'] = var24;
                var12['onPress'] = var22;
                var22 = 30;
                var22 = var19[var22];
                var22 = var23.bind(var4)(var22);
                var12['icon'] = var22;
                var24 = 24;
                var19 = var19[var24];
                var19 = var20.bind(var4)(var19);
                var19 = var19.IconSizes;
                var19 = var19.MEDIUM;
                var12['iconSize'] = var19;
                var19 = _closure1_slot23;
                var19 = var19.headerIconStyle;
                var12['style'] = var19;
                var12 = var7.bind(var4)(var13, var12);
                var11['children'] = var12;
                var12 = var7.bind(var4)(var9, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var12 = {};
                var13 = _closure1_slot23;
                var13 = var13.navbarRight;
                var12['style'] = var13;
                if(!var17) { _fun0002_ip = 1929; continue _fun0002 }
 1515:
                var20 = _closure1_slot22;
                var19 = _closure1_slot21;
                var13 = {};
                var26 = _closure1_slot20;
                var35 = _closure1_slot1;
                var28 = _closure1_slot3;
                var22 = var28[var18];
                var23 = var35.bind(var4)(var22);
                var22 = {};
                var29 = _closure1_slot0;
                var37 = var28[var27];
                var37 = var29.bind(var4)(var37);
                var39 = var37.intl;
                var38 = var39.string;
                var37 = var28[var27];
                var37 = var29.bind(var4)(var37);
                var37 = var37.t;
                var37 = var37.DA7ECA;
                var37 = var38.bind(var39)(var37);
                var22['accessibilityLabel'] = var37;
                var22['onPress'] = var34;
                var22['onLongPress'] = var30;
                var34 = 31;
                var30 = var28[var34];
                var30 = var35.bind(var4)(var30);
                var22['icon'] = var30;
                var28 = var28[var24];
                var28 = var29.bind(var4)(var28);
                var28 = var28.IconSizes;
                var28 = var28.MEDIUM;
                var22['iconSize'] = var28;
                var28 = {};
                var30 = 0.3;
                var29 = var30;
                if(!var33) { _fun0002_ip = 1674; continue _fun0002 }
 1671:
                var29 = var31;
 1674:
                var28['opacity'] = var29;
                var22['iconStyle'] = var28;
                var28 = _closure1_slot23;
                var29 = var28.headerIconStyle;
                var28 = new Array(2);
                var28[0] = var29;
                var29 = _closure1_slot23;
                var29 = var29.undoButtonStyle;
                var28[1] = var29;
                var22['style'] = var28;
                var23 = var26.bind(var4)(var23, var22);
                var22 = new Array(2);
                var22[0] = var23;
                var28 = _closure1_slot20;
                var35 = _closure1_slot1;
                var29 = _closure1_slot3;
                var23 = var29[var18];
                var26 = var35.bind(var4)(var23);
                var23 = {};
                var33 = _closure1_slot0;
                var37 = var29[var27];
                var37 = var33.bind(var4)(var37);
                var39 = var37.intl;
                var38 = var39.string;
                var37 = var29[var27];
                var37 = var33.bind(var4)(var37);
                var37 = var37.t;
                var37 = var37.X+YFqa;
                var37 = var38.bind(var39)(var37);
                var23['accessibilityLabel'] = var37;
                var23['onPress'] = var36;
                var34 = var29[var34];
                var34 = var35.bind(var4)(var34);
                var23['icon'] = var34;
                var29 = var29[var24];
                var29 = var33.bind(var4)(var29);
                var29 = var29.IconSizes;
                var29 = var29.MEDIUM;
                var23['iconSize'] = var29;
                var29 = {};
                var34 = {};
                var33 = '180deg';
                var34['rotateY'] = var33;
                var33 = new Array(1);
                var33[0] = var34;
                var29['transform'] = var33;
                if(!var32) { _fun0002_ip = 1886; continue _fun0002 }
 1883:
                var30 = var31;
 1886:
                var29['opacity'] = var30;
                var23['iconStyle'] = var29;
                var29 = _closure1_slot23;
                var29 = var29.headerIconStyle;
                var23['style'] = var29;
                var23 = var28.bind(var4)(var26, var23);
                var22[1] = var23;
                var13['children'] = var22;
                var17 = var20.bind(var4)(var19, var13);
 1929:
                var13 = new Array(3);
                var13[0] = var17;
                var17 = _closure1_slot9;
                var17 = var17.bind(var4)(var16);
                var17 = !var17;
                if(!var17) { _fun0002_ip = 2102; continue _fun0002 }
 1955:
                var20 = _closure1_slot20;
                var26 = _closure1_slot1;
                var22 = _closure1_slot3;
                var18 = var22[var18];
                var19 = var26.bind(var4)(var18);
                var18 = {};
                var23 = _closure1_slot0;
                var28 = var22[var27];
                var28 = var23.bind(var4)(var28);
                var29 = var28.intl;
                var28 = var29.string;
                var27 = var22[var27];
                var27 = var23.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27.fuwY7O;
                var27 = var28.bind(var29)(var27);
                var18['accessibilityLabel'] = var27;
                var18['onPress'] = var25;
                var25 = 32;
                var25 = var22[var25];
                var25 = var26.bind(var4)(var25);
                var18['icon'] = var25;
                var22 = var22[var24];
                var22 = var23.bind(var4)(var22);
                var22 = var22.IconSizes;
                var22 = var22.MEDIUM;
                var18['iconSize'] = var22;
                var22 = _closure1_slot23;
                var22 = var22.headerIconStyle;
                var18['style'] = var22;
                var18['disabled'] = var21;
                var17 = var20.bind(var4)(var19, var18);
 2102:
                var13[1] = var17;
                var14 = _closure1_slot14;
                var14 = var14.bind(var4)(var16);
                var14 = !var14;
                if(!var14) { _fun0002_ip = 2124; continue _fun0002 }
 2121:
                var14 = var15;
 2124:
                var13[2] = var14;
                var12['children'] = var13;
                var12 = var10.bind(var4)(var9, var12);
                var11[1] = var12;
                var8['children'] = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();
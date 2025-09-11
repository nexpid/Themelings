// app/modules/channel_prompts/native/PromptPhotoActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var10 = 4;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaKeyboardTarget;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageSendLocation;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativePermissionTypes;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 'relative';
    var9['position'] = var11;
    var11 = 11;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BLACK;
    var9['backgroundColor'] = var13;
    var4['container'] = var9;
    var9 = {'position': 'absolute', 'width': '100%', 'height': '100%', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'};
    var4['background'] = var9;
    var9 = {};
    var13 = 24;
    var9['paddingHorizontal'] = var13;
    var4['backgroundText'] = var9;
    var9 = {'position': 'absolute', 'width': '100%', 'top': 0, 'left': 0};
    var4['controls'] = var9;
    var9 = {'borderRadius': null, 'height': 64, 'width': 64, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xxl;
    var9['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BRAND;
    var9['backgroundColor'] = var13;
    var4['mainCTAWrapper'] = var9;
    var9 = {};
    var13 = 0.6;
    var9['opacity'] = var13;
    var4['disabled'] = var9;
    var9 = {'width': 36, 'height': 36, 'tintColor': '#fff'};
    var4['mainCTA'] = var9;
    var9 = {'height': 24, 'width': 24, 'tintColor': '#fff'};
    var4['icon'] = var9;
    var9 = {'height': 32, 'width': 32, 'tintColor': '#fff'};
    var4['galleryIcon'] = var9;
    var9 = {'position': 'absolute', 'padding': 8, 'borderRadius': null, 'backgroundColor': 'rgba(0,0,0,0.3)'};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.xxl;
    var9['borderRadius'] = var11;
    var4['controlButton'] = var9;
    var9 = {'position': 'absolute', 'width': '100%', 'display': 'flex', 'alignItems': 'center'};
    var4['bottomBar'] = var9;
    var9 = {};
    var9['marginBottom'] = var10;
    var4['errorText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 38;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_prompts/native/PromptPhotoActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PromptPhotoActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.message;
            var _closure2_slot0 = var2;
            var2 = var1.channel;
            var _closure2_slot1 = var2;
            var1 = var1.chatInputRef;
            var _closure2_slot2 = var1;
            var1 = _closure1_slot14;
            var4 = undefined;
            var26 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 12;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.bottom;
            var29 = 8;
            var24 = var1 + var29;
            var1 = 13;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var15 = var1.width;
            var5 = var1.height;
            var1 = global;
            var3 = var1.Math;
            var2 = var3.floor;
            var1 = 0.85;
            var1 = var1 * var5;
            var14 = var2.bind(var3)(var1);
            var7 = _closure1_slot5;
            var1 = var7.useState;
            var25 = null;
            var1 = var1.bind(var7)(var25);
            var6 = _closure1_slot4;
            var5 = 2;
            var1 = var6.bind(var4)(var1, var5);
            var3 = 0;
            var12 = var1[var3];
            var2 = 1;
            var1 = var1[var2];
            var _closure2_slot3 = var1;
            var10 = var7.useEffect;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 14;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.requestPermission;
                var2 = _closure1_slot11;
                var3 = var2.CAMERA;
                var2 = {};
                var6 = false;
                var2['showAuthorizationError'] = var6;
                var4 = var4.bind(var5)(var3, var2);
                var3 = var4.then;
                var2 = function(arg1) {
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var10.bind(var7)(var1, var8);
            var1 = var7.useRef;
            var33 = var1.bind(var7)(var25);
            var _closure2_slot4 = var33;
            var1 = var7.useState;
            var13 = false;
            var1 = var1.bind(var7)(var13);
            var1 = var6.bind(var4)(var1, var5);
            var28 = var1[var3];
            var1 = var1[var2];
            var _closure2_slot5 = var1;
            var1 = var7.useState;
            var1 = var1.bind(var7)(var13);
            var1 = var6.bind(var4)(var1, var5);
            var8 = var1[var3];
            var _closure2_slot6 = var8;
            var1 = var1[var2];
            var _closure2_slot7 = var1;
            var1 = var7.useState;
            var1 = var1.bind(var7)(var13);
            var1 = var6.bind(var4)(var1, var5);
            var27 = var1[var3];
            var1 = var1[var2];
            var _closure2_slot8 = var1;
            var8 = var7.useState;
            var8 = var8.bind(var7)(var13);
            var8 = var6.bind(var4)(var8, var5);
            var19 = var8[var3];
            var _closure2_slot9 = var19;
            var8 = var8[var2];
            var _closure2_slot10 = var8;
            var11 = var7.useEffect;
            var10 = new Array(1);
            var10[0] = var19;
            var8 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot9;
                    var5 = undefined;
                    if(var2) { _fun0002_ip = 16; continue _fun0002 }
 14:
                    return var5;
 16:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        var3 = _closure2_slot10;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = 4000;
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var8 = var11.bind(var7)(var8, var10);
            var10 = var7.useCallback;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var3 = _closure2_slot8;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var23 = var10.bind(var7)(var1, var8);
            var11 = _closure1_slot0;
            var10 = 15;
            var1 = var9[var10];
            var8 = var11.bind(var4)(var1);
            var1 = var8.useCameraDevices;
            var16 = var1.bind(var8)();
            var8 = var16.find;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot6;
                    var2 = arg1;
                    var3 = var2.position;
                    if(var1) { _fun0003_ip = 28; continue _fun0003 }
 18:
                    var1 = 'back';
                    var1 = var1 === var3;
                    _fun0003_ip = 38; continue _fun0003;
 28:
                    var2 = 'front';
                    var1 = var2 === var3;
 38:
                    return var1;
                }
            };
            var32 = var8.bind(var16)(var1);
            var1 = var7.useState;
            var1 = var1.bind(var7)(var25);
            var1 = var6.bind(var4)(var1, var5);
            var17 = var1[var3];
            var _closure2_slot11 = var17;
            var1 = var1[var2];
            var _closure2_slot12 = var1;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0004_ip = 432; continue _fun0004 }
 12:
                            var5 = _closure2_slot11;
                            var4 = null;
                            if(!(var4 == var5)) { _fun0004_ip = 424; continue _fun0004 }
 28:
                            var6 = _closure2_slot5;
                            var5 = undefined;
                            var10 = true;
                            var6 = var6.bind(var5)(var10);
                            var12 = global;
                            var8 = var12.Promise;
                            var6 = var8.prototype;
                            var7 = Object.create(var6, {constructor: {value: var8}});
                            var19 = function(arg1) {
                                var2 = arg1;
                                var _closure6_slot0 = var2;
                                var2 = global;
                                var4 = var2.setTimeout;
                                var3 = undefined;
                                var2 = function() {
                                    var2 = _closure6_slot0;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
                                    return var1;
                                };
                                var1 = 2000;
                                var1 = var4.bind(var3)(var2, var1);
                                return var1;
                            };
                            var20 = var7;
                            var6 = new var20[var8](var19, var18);
                            var9 = var6 instanceof Object ? var6 : var7;
                            var8 = var12.Promise;
                            var7 = var8.race;
                            var6 = _closure2_slot4;
                            var13 = var6.current;
                            var6 = var4 == var13;
                            var11 = undefined;
                            if(var6) { _fun0004_ip = 116; continue _fun0004 }
 106:
                            var6 = var13.takePhoto;
                            var11 = var6.bind(var13)();
 116:
                            var6 = new Array(2);
                            var6[0] = var11;
                            var6[1] = var9;
                            var8 = var7.bind(var8)(var6);
                            var7 = var8.then;
                            var6 = function(arg1) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                    var2 = arg1;
                                    var3 = undefined;
                                    var1 = null;
                                    if(!(var3 !== var2)) { _fun0005_ip = 14; continue _fun0005 }
 11:
                                    var1 = var2;
 14:
                                    return var1;
                                }
                            };
                            var7 = var7.bind(var8)(var6);
                            var6 = var7.catch;
                            var2 = function() {
                                var1 = null;
                                return var1;
                            };
                            var2 = var6.bind(var7)(var2);
                            SaveGenerator(address=172);
 170:
                            return var2;
 172:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0004_ip = 429; continue _fun0004 }
 181:
                            var6 = _closure2_slot5;
                            var9 = false;
                            var6 = var6.bind(var5)(var9);
                            if(!(var4 == var2)) { _fun0004_ip = 210; continue _fun0004 }
 196:
                            var4 = _closure2_slot10;
                            var4 = var4.bind(var5)(var10);
                            _fun0004_ip = 424; continue _fun0004;
 210:
                            var4 = {};
                            var7 = {'id': null, 'group_name': '', 'image': null, 'location': null, 'timestamp': 0, 'type': 'ALAssetTypePhoto'};
                            var13 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var11 = 16;
                            var11 = var8[var11];
                            var14 = var13.bind(var5)(var11);
                            var13 = var14.fromTimestamp;
                            var15 = var12.Date;
                            var11 = var15.now;
                            var11 = var11.bind(var15)();
                            var11 = var13.bind(var14)(var11);
                            var7['id'] = var11;
                            var11 = {'uri': null, 'mimeType': 'image/jpeg', 'width': null, 'height': null, 'filename': 'unknown.jpg', 'playableDuration': 0};
                            var14 = var2.path;
                            var12 = var12.HermesInternal;
                            var13 = var12.concat;
                            var12 = 'file://';
                            var12 = var13.bind(var12)(var14);
                            var11['uri'] = var12;
                            var12 = var2.width;
                            var11['width'] = var12;
                            var12 = var2.height;
                            var11['height'] = var12;
                            var7['image'] = var11;
                            var11 = {};
                            var7['location'] = var11;
                            var4['node'] = var7;
                            var7 = _closure1_slot0;
                            var6 = 17;
                            var6 = var8[var6];
                            var8 = var7.bind(var5)(var6);
                            var7 = var8.handleSelectKeyboardItem;
                            var6 = _closure2_slot1;
                            var19 = var6.id;
                            var20 = var8;
                            var18 = var4;
                            var17 = false;
                            var16 = true;
                            var6 = var20[var7](var19, var18, var17, var16, var15);
                            var3 = _closure2_slot12;
                            var3 = var3.bind(var5)(var4);
 424:
                            var3 = undefined;
                            return var3;
 429:
                            return var2;
 432:
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
            var20 = var1.bind(var4)();
            var3 = _closure1_slot12;
            var1 = 18;
            var1 = var9[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var18 = true;
            var1['startExpanded'] = var18;
            var5 = var14 + var24;
            var1['startHeight'] = var5;
            var5 = var14 + var24;
            var1['contentHeight'] = var5;
            var1['header'] = var25;
            var7 = _closure1_slot13;
            var6 = _closure1_slot6;
            var5 = {};
            var16 = var26.container;
            var8 = new Array(2);
            var8[0] = var16;
            var16 = {};
            var16['width'] = var15;
            var16['height'] = var14;
            var8[1] = var16;
            var5['style'] = var8;
            var8 = {};
            var16 = var26.background;
            var8['style'] = var16;
            var16 = 19;
            var9 = var9[var16];
            var9 = var11.bind(var4)(var9);
            var11 = var9.Text;
            var9 = {'variant': 'heading-lg/bold', 'color': 'always-white'};
            var30 = var26.backgroundText;
            var9['style'] = var30;
            if(!(var13 !== var12)) { _fun0001_ip = 698; continue _fun0001 }
 639:
            var34 = _closure1_slot0;
            var35 = _closure1_slot2;
            var12 = 20;
            var30 = var35[var12];
            var30 = var34.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var12 = var35[var12];
            var12 = var34.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.6ha5kp;
            var12 = var30.bind(var31)(var12);
            _fun0001_ip = 758; continue _fun0001;
 698:
            var31 = _closure1_slot0;
            var36 = _closure1_slot2;
            var30 = 20;
            var34 = var36[var30];
            var34 = var31.bind(var4)(var34);
            var35 = var34.intl;
            var34 = var35.format;
            var30 = var36[var30];
            var30 = var31.bind(var4)(var30);
            var30 = var30.t;
            var31 = var30.dNBlT0;
            var30 = {};
            var12 = var34.bind(var35)(var31, var30);
 758:
            var9['children'] = var12;
            var9 = var3.bind(var4)(var11, var9);
            var8['children'] = var9;
            var9 = var3.bind(var4)(var6, var8);
            var8 = new Array(4);
            var8[0] = var9;
            var11 = var25 != var32;
            var9 = null;
            if(!var11) { _fun0001_ip = 913; continue _fun0001 }
 795:
            var12 = _closure1_slot12;
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var10 = var31[var10];
            var10 = var30.bind(var4)(var10);
            var11 = var10.Camera;
            var10 = {};
            var10['ref'] = var33;
            var33 = {};
            var33['height'] = var14;
            var34 = '100%';
            var33['width'] = var34;
            var10['style'] = var33;
            var10['device'] = var32;
            var10['onInitialized'] = var23;
            var23 = 21;
            var23 = var31[var23];
            var30 = var30.bind(var4)(var23);
            var23 = var30.isAndroid;
            var23 = var23.bind(var30)();
            if(var23) { _fun0001_ip = 885; continue _fun0001 }
 882:
            var23 = !var28;
 885:
            var10['isActive'] = var23;
            var10['photo'] = var18;
            var10['audio'] = var13;
            var10['video'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 913:
            var8[1] = var9;
            var10 = var25 != var17;
            var9 = null;
            if(!var10) { _fun0001_ip = 1007; continue _fun0001 }
 926:
            var12 = _closure1_slot12;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 22;
            var10 = var13[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var13 = {};
            var18 = 'absolute';
            var13['position'] = var18;
            var13['height'] = var14;
            var13['width'] = var15;
            var10['style'] = var13;
            var13 = {};
            var15 = var17.node;
            var15 = var15.image;
            var15 = var15.uri;
            var13['uri'] = var15;
            var10['source'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 1007:
            var8[2] = var9;
            var11 = _closure1_slot13;
            var10 = _closure1_slot6;
            var9 = {};
            var13 = var26.controls;
            var12 = new Array(2);
            var12[0] = var13;
            var13 = {};
            var13['height'] = var14;
            var12[1] = var13;
            var9['style'] = var12;
            var12 = var25 == var17;
            var13 = null;
            if(!var12) { _fun0001_ip = 1214; continue _fun0001 }
 1061:
            var15 = _closure1_slot12;
            var14 = _closure1_slot0;
            var31 = _closure1_slot2;
            var12 = 23;
            var12 = var31[var12];
            var12 = var14.bind(var4)(var12);
            var14 = var12.PressableOpacity;
            var12 = {};
            var23 = var26.controlButton;
            var18 = new Array(2);
            var18[0] = var23;
            var23 = {};
            var23['bottom'] = var24;
            var23['left'] = var29;
            var18[1] = var23;
            var12['style'] = var18;
            var18 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot2;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0006_ip = 93; continue _fun0006 }
 18:
                    var2 = var3.openCustomKeyboard;
                    var1 = {};
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 24;
                    var6 = var6[var4];
                    var4 = undefined;
                    var4 = var8.bind(var4)(var6);
                    var4 = var4.KeyboardTypes;
                    var4 = var4.MEDIA;
                    var1['type'] = var4;
                    var4 = {};
                    var5 = _closure1_slot9;
                    var5 = var5.CHAT;
                    var4['target'] = var5;
                    var1['context'] = var4;
                    var1 = var2.bind(var3)(var1);
 93:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 25;
                    var3 = var4[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var3);
                    var5 = var6.createPendingReply;
                    var3 = {};
                    var8 = _closure2_slot0;
                    var3['message'] = var8;
                    var7 = _closure2_slot1;
                    var3['channel'] = var7;
                    var7 = true;
                    var3['shouldMention'] = var7;
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure1_slot1;
                    var2 = 26;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var12['onPress'] = var18;
            var18 = 'Image Gallery';
            var12['accessibilityLabel'] = var18;
            var18 = 'button';
            var12['accessibilityRole'] = var18;
            var30 = _closure1_slot1;
            var18 = 27;
            var18 = var31[var18];
            var23 = var30.bind(var4)(var18);
            var18 = {};
            var28 = 28;
            var28 = var31[var28];
            var28 = var30.bind(var4)(var28);
            var18['source'] = var28;
            var28 = var26.galleryIcon;
            var18['style'] = var28;
            var18 = var15.bind(var4)(var23, var18);
            var12['children'] = var18;
            var13 = var15.bind(var4)(var14, var12);
 1214:
            var12 = new Array(4);
            var12[0] = var13;
            var14 = var25 == var17;
            var13 = null;
            if(!var14) { _fun0001_ip = 1390; continue _fun0001 }
 1234:
            var18 = _closure1_slot12;
            var15 = _closure1_slot0;
            var32 = _closure1_slot2;
            var14 = 23;
            var14 = var32[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.PressableOpacity;
            var14 = {};
            var28 = var26.controlButton;
            var23 = new Array(2);
            var23[0] = var28;
            var28 = {'top': 8, 'right': 8};
            var23[1] = var28;
            var14['style'] = var23;
            var23 = function onPress() {
                var3 = _closure2_slot7;
                var1 = undefined;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = !var1;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var14['onPress'] = var23;
            var23 = 'Swap Camera';
            var14['accessibilityLabel'] = var23;
            var23 = 'button';
            var14['accessibilityRole'] = var23;
            var31 = _closure1_slot1;
            var23 = 27;
            var23 = var32[var23];
            var28 = var31.bind(var4)(var23);
            var23 = {};
            var30 = 29;
            var30 = var32[var30];
            var30 = var31.bind(var4)(var30);
            var23['source'] = var30;
            var30 = var26.icon;
            var23['style'] = var30;
            var23 = var18.bind(var4)(var28, var23);
            var14['children'] = var23;
            var13 = var18.bind(var4)(var15, var14);
 1390:
            var12[1] = var13;
            var14 = var25 != var17;
            var13 = null;
            if(!var14) { _fun0001_ip = 1558; continue _fun0001 }
 1406:
            var18 = _closure1_slot12;
            var15 = _closure1_slot0;
            var31 = _closure1_slot2;
            var14 = 23;
            var14 = var31[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.PressableOpacity;
            var14 = {};
            var23 = function onPress() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot11;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0007_ip = 77; continue _fun0007 }
 13:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var4 = var4[var2];
                    var2 = undefined;
                    var8 = var5.bind(var2)(var4);
                    var7 = var8.handleSelectKeyboardItem;
                    var4 = _closure2_slot1;
                    var12 = var4.id;
                    var11 = _closure2_slot11;
                    var13 = var8;
                    var10 = true;
                    var9 = true;
                    var4 = var13[var7](var12, var11, var10, var9, var8);
                    var1 = _closure2_slot12;
                    var1 = var1.bind(var2)(var3);
 77:
                    var1 = undefined;
                    return var1;
                }
            };
            var14['onPress'] = var23;
            var28 = var26.controlButton;
            var23 = new Array(2);
            var23[0] = var28;
            var28 = {};
            var28['bottom'] = var24;
            var28['right'] = var29;
            var23[1] = var28;
            var14['style'] = var23;
            var23 = 'Retake Photo';
            var14['accessibilityLabel'] = var23;
            var23 = 'button';
            var14['accessibilityRole'] = var23;
            var30 = _closure1_slot1;
            var23 = 27;
            var23 = var31[var23];
            var28 = var30.bind(var4)(var23);
            var23 = {};
            var29 = 30;
            var29 = var31[var29];
            var29 = var30.bind(var4)(var29);
            var23['source'] = var29;
            var29 = var26.icon;
            var23['style'] = var29;
            var23 = var18.bind(var4)(var28, var23);
            var14['children'] = var23;
            var13 = var18.bind(var4)(var15, var14);
 1558:
            var12[2] = var13;
            var15 = _closure1_slot13;
            var14 = _closure1_slot6;
            var13 = {};
            var23 = var26.bottomBar;
            var18 = new Array(2);
            var18[0] = var23;
            var23 = {};
            var23['bottom'] = var24;
            var18[1] = var23;
            var13['style'] = var18;
            var18 = 'box-none';
            var13['pointerEvents'] = var18;
            var18 = null;
            if(!var19) { _fun0001_ip = 1725; continue _fun0001 }
 1616:
            var23 = _closure1_slot12;
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var16 = var31[var16];
            var16 = var30.bind(var4)(var16);
            var19 = var16.Text;
            var16 = {'variant': 'text-md/semibold', 'color': 'text-danger'};
            var24 = var26.errorText;
            var16['style'] = var24;
            var24 = 20;
            var28 = var31[var24];
            var28 = var30.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var24 = var31[var24];
            var24 = var30.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.z++Kz8;
            var24 = var28.bind(var29)(var24);
            var16['children'] = var24;
            var18 = var23.bind(var4)(var19, var16);
 1725:
            var16 = new Array(2);
            var16[0] = var18;
            var19 = _closure1_slot12;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var18 = 23;
            var18 = var24[var18];
            var18 = var23.bind(var4)(var18);
            var18 = var18.PressableOpacity;
            if(!(var25 == var17)) { _fun0001_ip = 1900; continue _fun0001 }
 1770:
            var17 = {};
            var17['onPress'] = var20;
            var23 = var26.mainCTAWrapper;
            var20 = new Array(2);
            var20[0] = var23;
            var23 = null;
            if(var27) { _fun0001_ip = 1800; continue _fun0001 }
 1795:
            var23 = var26.disabled;
 1800:
            var20[1] = var23;
            var17['style'] = var20;
            var20 = !var27;
            var17['disabled'] = var20;
            var20 = 'Take Photo';
            var17['accessibilityLabel'] = var20;
            var20 = 'button';
            var17['accessibilityRole'] = var20;
            var24 = _closure1_slot12;
            var29 = _closure1_slot1;
            var30 = _closure1_slot2;
            var20 = 27;
            var20 = var30[var20];
            var23 = var29.bind(var4)(var20);
            var20 = {};
            var28 = 37;
            var28 = var30[var28];
            var28 = var29.bind(var4)(var28);
            var20['source'] = var28;
            var28 = var26.mainCTA;
            var20['style'] = var28;
            var20 = var24.bind(var4)(var23, var20);
            var17['children'] = var20;
            _fun0001_ip = 2035; continue _fun0001;
 1900:
            var20 = {};
            var22 = function onPress() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 31;
                var2 = var4[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.parse;
                var2 = _closure2_slot1;
                var5 = '';
                var8 = var6.bind(var7)(var2, var5);
                var12 = _closure1_slot8;
                var10 = var12.getUploads;
                var7 = var2.id;
                var5 = _closure1_slot7;
                var6 = var5.ChannelMessage;
                var10 = var10.bind(var12)(var7, var6);
                var _closure3_slot0 = var10;
                var7 = _closure1_slot0;
                var6 = 25;
                var6 = var4[var6];
                var12 = var7.bind(var1)(var6);
                var7 = var12.createPendingReply;
                var6 = {};
                var13 = _closure2_slot0;
                var6['message'] = var13;
                var6['channel'] = var2;
                var13 = true;
                var6['shouldMention'] = var13;
                var6 = var7.bind(var12)(var6);
                var6 = 32;
                var6 = var4[var6];
                var12 = var3.bind(var1)(var6);
                var7 = var12.clearAll;
                var6 = var2.id;
                var5 = var5.ChannelMessage;
                var5 = var7.bind(var12)(var6, var5);
                var5 = 33;
                var5 = var4[var5];
                var7 = var3.bind(var1)(var5);
                var6 = var7.sendMessage;
                var17 = var2.id;
                var2 = {};
                var11 = _closure1_slot10;
                var11 = var11.CHANNEL_PROMPT;
                var2['location'] = var11;
                var2['attachmentsToUpload'] = var10;
                var9 = function onAttachmentUploadError(arg1, arg2, arg3) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 34;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.handleUploadMessageAttachmentsErrors;
                        var4 = {};
                        var3 = arg1;
                        var4['file'] = var3;
                        var8 = _closure2_slot1;
                        var7 = var8.getGuildId;
                        var7 = var7.bind(var8)();
                        var4['guildId'] = var7;
                        var7 = new Array(0);
                        var4['analyticsLocations'] = var7;
                        var7 = arg2;
                        var4['code'] = var7;
                        var7 = arg3;
                        var4['reason'] = var7;
                        var4 = var5.bind(var6)(var4);
                        if(!var4) { _fun0008_ip = 214; continue _fun0008 }
 94:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 32;
                        var4 = var6[var4];
                        var8 = var5.bind(var1)(var4);
                        var7 = var8.setUploads;
                        var4 = {};
                        var3 = _closure2_slot1;
                        var9 = var3.id;
                        var4['channelId'] = var9;
                        var9 = _closure3_slot0;
                        var4['uploads'] = var9;
                        var2 = _closure1_slot7;
                        var9 = var2.ChannelMessage;
                        var4['draftType'] = var9;
                        var9 = true;
                        var4['resetState'] = var9;
                        var4 = var7.bind(var8)(var4);
                        var4 = 35;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.saveDraft;
                        var4 = var3.id;
                        var3 = var2.ChannelMessage;
                        var2 = '';
                        var2 = var5.bind(var6)(var4, var2, var3);
 214:
                        return var1;
                    }
                };
                var2['onAttachmentUploadError'] = var9;
                var18 = var7;
                var16 = var8;
                var15 = undefined;
                var14 = var2;
                var2 = var18[var6](var17, var16, var15, var14, var13);
                var2 = 26;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var20['onPress'] = var22;
            var22 = var26.mainCTAWrapper;
            var20['style'] = var22;
            var22 = !var27;
            var20['disabled'] = var22;
            var22 = 'Send Photo';
            var20['accessibilityLabel'] = var22;
            var22 = 'button';
            var20['accessibilityRole'] = var22;
            var23 = _closure1_slot12;
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            var21 = 27;
            var21 = var29[var21];
            var22 = var28.bind(var4)(var21);
            var21 = {};
            var24 = 36;
            var24 = var29[var24];
            var24 = var28.bind(var4)(var24);
            var21['source'] = var24;
            var28 = var26.mainCTA;
            var24 = new Array(2);
            var24[0] = var28;
            var25 = null;
            if(var27) { _fun0001_ip = 2014; continue _fun0001 }
 2009:
            var25 = var26.disabled;
 2014:
            var24[1] = var25;
            var21['style'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var20['children'] = var21;
            var17 = var20;
 2035:
            var17 = var19.bind(var4)(var18, var17);
            var16[1] = var17;
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[3] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[3] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
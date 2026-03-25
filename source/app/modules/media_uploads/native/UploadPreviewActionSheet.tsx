// app/modules/media_uploads/native/UploadPreviewActionSheet.tsx
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 16;
    var9['padding'] = var10;
    var4['contentContainer'] = var9;
    var9 = {};
    var10 = 6;
    var11 = var6[var10];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var11;
    var11 = var6[var10];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9['padding'] = var11;
    var11 = var6[var10];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var9['borderRadius'] = var11;
    var11 = '100%';
    var9['width'] = var11;
    var4['imageWrap'] = var9;
    var9 = {'overflow': 'hidden', 'alignSelf': 'center'};
    var11 = var6[var10];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var10 = var6[var10];
    var10 = var12.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var10 = var11 - var10;
    var9['borderRadius'] = var10;
    var4['imageContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 39;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_uploads/native/UploadPreviewActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UploadPreviewActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var13 = var3.onAdd;
            var _closure2_slot0 = var13;
            var1 = var3.onEdit;
            var _closure2_slot1 = var1;
            var14 = var3.onRemove;
            var _closure2_slot2 = var14;
            var5 = var3.channelId;
            var _closure2_slot3 = var5;
            var2 = var3.onClose;
            var _closure2_slot4 = var2;
            var6 = var3.disableAddDescription;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var2 = var3.disableSpoiler;
            var3 = var3.upload;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var7 = _closure1_slot10;
            var24 = var7.bind(var4)();
            _closure2_slot5 = var24;
            var7 = var3.id;
            _closure2_slot6 = var7;
            var20 = var3.isVideo;
            _closure2_slot7 = var20;
            var23 = var3.isImage;
            var8 = var3.isThumbnail;
            var29 = var4 !== var8;
            if(!var29) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var29 = var8;
case 4:
            var36 = var3.item;
            _closure2_slot8 = var36;
            var32 = var3.spoiler;
            _closure2_slot9 = var32;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var8 = 7;
            var8 = var15[var8];
            var10 = var11.bind(var4)(var8);
            var9 = var36.platform;
            var16 = _closure1_slot0;
            var8 = 8;
            var8 = var15[var8];
            var8 = var16.bind(var4)(var8);
            var8 = var8.UploadPlatform;
            var8 = var8.REACT_NATIVE;
            var9 = var9 === var8;
            var8 = 'Upload must be a React Native upload item.';
            var8 = var10.bind(var4)(var9, var8);
            var8 = 9;
            var8 = var15[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.bind(var4)();
            var9 = var8.width;
            _closure2_slot10 = var9;
            var8 = 10;
            var8 = var15[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.bind(var4)();
            var8 = var8.bottom;
            var10 = 11;
            var10 = var15[var10];
            var11 = var11.bind(var4)(var10);
            var10 = function() {
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = _closure2_slot4;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var2 = _closure2_slot4;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 6:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var10 = var11.bind(var4)(var10);
            var11 = _closure1_slot4;
            var15 = var11.useMemo;
            var10 = new Array(3);
            var10[0] = var9;
            var10[1] = var36;
            var10[2] = var24;
            var9 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot8;
                    var3 = var2.height;
                    var2 = _closure2_slot8;
                    var4 = var2.width;
                    var6 = _closure2_slot10;
                    var2 = _closure2_slot5;
                    var2 = var2.contentContainer;
                    var2 = var2.padding;
                    var5 = 2;
                    var2 = var5 * var2;
                    var2 = var6 - var2;
                    var1 = _closure2_slot5;
                    var1 = var1.imageWrap;
                    var1 = var1.padding;
                    var1 = var5 * var1;
                    var2 = var2 - var1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    if(!(var1 == var4)) { _fun0003_ip = 10; continue _fun0003 }
case 8:
                    var1 = {};
                    var1['width'] = var2;
                    var1['height'] = var2;
                    return var1;
case 10:
                    var1 = 0;
                    if(!(var1 !== var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    if(!(var1 !== var4)) { _fun0003_ip = 11; continue _fun0003 }
case 13:
                    var1 = global;
                    var5 = var1.Math;
                    var1 = var5.max;
                    var1 = var1.bind(var5)(var4, var3);
                    var2 = var2 / var1;
                    var1 = {};
                    var4 = var4 * var2;
                    var1['width'] = var4;
                    var2 = var3 * var2;
                    var1['height'] = var2;
                    return var1;
case 11:
                    var1 = {'width': 300, 'height': 300};
                    return var1;
                }
            };
            var37 = var15.bind(var11)(var9, var10);
            var10 = var11.useCallback;
            var9 = new Array(2);
            var9[0] = var14;
            var9[1] = var7;
            var7 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var4 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot6;
                    var2 = var3.bind(var1)(var2);
case 14:
                    return var1;
                }
            };
            var15 = var10.bind(var11)(var7, var9);
            var10 = var11.useCallback;
            var9 = new Array(1);
            var9[0] = var13;
            var7 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0005_ip = 16; continue _fun0005 }
case 15:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)();
case 16:
                    return var1;
                }
            };
            var17 = var10.bind(var11)(var7, var9);
            var10 = var11.useCallback;
            var9 = new Array(2);
            var9[0] = var1;
            var9[1] = var36;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 12;
                    var3 = var5[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var3 = var6.hideActionSheet;
                    var3 = var3.bind(var6)();
                    var6 = _closure2_slot8;
                    var6 = var6.uri;
                    var7 = _closure2_slot8;
                    var9 = var7.width;
                    var3 = _closure2_slot8;
                    var7 = var3.height;
                    var3 = 13;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.launchCropper;
                    var3 = {};
                    var3['uri'] = var6;
                    var6 = true;
                    var3['freeStyleCropEnabled'] = var6;
                    var8 = 0;
                    var6 = undefined;
                    if(!(var8 !== var9)) { _fun0006_ip = 17; continue _fun0006 }
case 13:
                    var6 = var9;
case 17:
                    var3['width'] = var6;
                    var6 = undefined;
                    if(!(var8 !== var7)) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                    var6 = var7;
case 18:
                    var3['height'] = var6;
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.then;
                    var3 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var3 = _closure2_slot1;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0007_ip = 14; continue _fun0007 }
case 7:
                            var3 = _closure2_slot1;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var1 = var2[var1];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var1);
                            var4 = var5.cropResultToUploadItem;
                            var1 = arg1;
                            var1 = var4.bind(var5)(var1);
                            var1 = var3.bind(var2)(var1);
case 14:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.catch;
                    var2 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var4 = arg1;
                            var2 = var4.code;
                            var1 = 'E_PICKER_CANCELLED';
                            if(!(var1 !== var2)) { _fun0008_ip = 20; continue _fun0008 }
case 21:
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var1 = 15;
                            var1 = var8[var1];
                            var7 = undefined;
                            var3 = var2.bind(var7)(var1);
                            var2 = var3.open;
                            var1 = {};
                            var6 = 'CROP_ERROR';
                            var1['key'] = var6;
                            var6 = _closure1_slot0;
                            var5 = 16;
                            var5 = var8[var5];
                            var5 = var6.bind(var7)(var5);
                            var5 = var5.CircleErrorIcon;
                            var1['IconComponent'] = var5;
                            var4 = var4.message;
                            var1['content'] = var4;
                            var1 = var2.bind(var3)(var1);
case 20:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var27 = var10.bind(var11)(var7, var9);
            var10 = var11.useMemo;
            var9 = new Array(2);
            var9[0] = var20;
            var9[1] = var36;
            var7 = function() {
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 17;
                var4 = var6[var1];
                var2 = undefined;
                var5 = var3.bind(var2)(var4);
                var4 = var5.getCaptionLabel;
                var1 = var6[var1];
                var6 = var3.bind(var2)(var1);
                var3 = var6.getType;
                var2 = _closure2_slot8;
                var2 = var2.uri;
                var3 = var3.bind(var6)(var2);
                var2 = _closure2_slot7;
                var1 = _closure2_slot8;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var35 = var10.bind(var11)(var7, var9);
            var21 = var23;
            if(!var23) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var21 = !var6;
case 22:
            var25 = !var29;
            if(!var25) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var25 = !var2;
case 24:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 18;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var22 = var2.bind(var4)(var5, var3);
            var2 = 19;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var30 = var2.bind(var4)(var5, var3);
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var5 = var2.bind(var3)(var4);
            var3 = _closure1_slot3;
            var2 = 2;
            var5 = var3.bind(var4)(var5, var2);
            var2 = 0;
            var2 = var5[var2];
            var3 = 1;
            var3 = var5[var3];
            _closure2_slot11 = var3;
            var11 = null;
            var3 = var11 != var2;
            var5 = undefined;
            if(!var3) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var9 = var2 + var8;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 6;
            var3 = var7[var2];
            var3 = var6.bind(var4)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_32;
            var3 = var9 + var3;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.spacing;
            var2 = var2.PX_16;
            var5 = var3 + var2;
case 26:
            if(!var23) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var23 = var11 != var1;
case 28:
            var3 = _closure1_slot8;
            var28 = _closure1_slot0;
            var31 = _closure1_slot2;
            var1 = 20;
            var1 = var31[var1];
            var1 = var28.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var26 = true;
            var1['scrollable'] = var26;
            var1['startHeight'] = var5;
            var5 = 21;
            var5 = var31[var5];
            var5 = var28.bind(var4)(var5);
            var6 = var5.BottomSheetScrollView;
            var5 = {};
            var7 = {};
            var10 = _closure1_slot1;
            var9 = 6;
            var9 = var31[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_16;
            var7['padding'] = var9;
            var7['paddingBottom'] = var8;
            var5['contentContainerStyle'] = var7;
            var9 = _closure1_slot9;
            var7 = 22;
            var7 = var31[var7];
            var7 = var28.bind(var4)(var7);
            var8 = var7.Stack;
            var7 = {};
            var10 = 16;
            var7['spacing'] = var10;
            var10 = function onLayout(arg1) {
                var3 = _closure2_slot11;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7['onLayout'] = var10;
            var10 = 23;
            var10 = var31[var10];
            var10 = var28.bind(var4)(var10);
            var16 = var10.Text;
            var10 = {};
            var18 = 'text-md/semibold';
            var10['variant'] = var18;
            var18 = var36.filename;
            var10['children'] = var18;
            var16 = var3.bind(var4)(var16, var10);
            var10 = new Array(4);
            var10[0] = var16;
            var18 = _closure1_slot6;
            var16 = {};
            var19 = var24.imageWrap;
            var16['style'] = var19;
            var19 = {};
            var34 = var24.imageContainer;
            var24 = new Array(2);
            var24[0] = var34;
            var34 = {};
            var38 = var37.width;
            var34['width'] = var38;
            var38 = var37.height;
            var34['height'] = var38;
            var24[1] = var34;
            var19['style'] = var24;
            var24 = 24;
            var24 = var31[var24];
            var28 = var28.bind(var4)(var24);
            var24 = var28.isIOS;
            var24 = var24.bind(var28)();
            if(!var24) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            if(!var20) { _fun0001_ip = 30; continue _fun0001 }
case 32:
            var28 = var36.uri;
            var24 = var28.startsWith;
            var20 = 'file://';
            var20 = var24.bind(var28)(var20);
            if(var20) { _fun0001_ip = 33; continue _fun0001 }
case 30:
            var28 = _closure1_slot8;
            var24 = _closure1_slot5;
            var20 = {};
            var31 = {};
            var34 = var37.width;
            var31['width'] = var34;
            var34 = var37.height;
            var31['height'] = var34;
            var20['style'] = var31;
            var20['source'] = var36;
            var24 = var28.bind(var4)(var24, var20);
            _fun0001_ip = 34; continue _fun0001;
case 33:
            var31 = _closure1_slot8;
            var28 = _closure1_slot0;
            var34 = _closure1_slot2;
            var20 = 25;
            var20 = var34[var20];
            var20 = var28.bind(var4)(var20);
            var28 = var20.VideoComponent;
            var20 = {'style': null, 'source': null, 'muted': true, 'paused': true, 'preventsDisplaySleepDuringVideoPlayback': false};
            var34 = {};
            var38 = var37.width;
            var34['width'] = var38;
            var37 = var37.height;
            var34['height'] = var37;
            var20['style'] = var34;
            var34 = {};
            var36 = var36.uri;
            var34['uri'] = var36;
            var20['source'] = var34;
            var24 = var31.bind(var4)(var28, var20);
case 34:
            var20 = new Array(2);
            var20[0] = var24;
            var24 = var11 != var35;
            if(!var24) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var28 = '';
            var24 = var28 !== var35;
case 35:
            if(!var24) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var34 = _closure1_slot8;
            var31 = _closure1_slot0;
            var36 = _closure1_slot2;
            var28 = 26;
            var28 = var36[var28];
            var28 = var31.bind(var4)(var28);
            var31 = var28.Caption;
            var28 = {};
            var28['label'] = var35;
            var24 = var34.bind(var4)(var31, var28);
case 37:
            var20[1] = var24;
            var19['children'] = var20;
            var19 = var9.bind(var4)(var18, var19);
            var16['children'] = var19;
            var16 = var3.bind(var4)(var18, var16);
            var10[1] = var16;
            if(var21) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            if(var25) { _fun0001_ip = 39; continue _fun0001 }
case 41:
            if(var22) { _fun0001_ip = 39; continue _fun0001 }
case 42:
            var16 = null;
            if(!var23) { _fun0001_ip = 43; continue _fun0001 }
case 39:
            var20 = _closure1_slot9;
            var19 = _closure1_slot0;
            var24 = _closure1_slot2;
            var18 = 27;
            var18 = var24[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.TableRowGroup;
            var18 = {};
            var24 = null;
            if(!var21) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var31 = _closure1_slot8;
            var37 = _closure1_slot0;
            var38 = _closure1_slot2;
            var21 = 28;
            var21 = var38[var21];
            var21 = var37.bind(var4)(var21);
            var28 = var21.TableRow;
            var21 = {};
            var34 = 29;
            var34 = var38[var34];
            var34 = var37.bind(var4)(var34);
            var35 = var34.ImageFileIcon;
            var34 = {};
            var34 = var31.bind(var4)(var35, var34);
            var21['icon'] = var34;
            var34 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 30;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.open;
                var1 = {};
                var5 = _closure2_slot8;
                var1['source'] = var5;
                var5 = _closure2_slot3;
                var1['channelId'] = var5;
                var4 = _closure2_slot6;
                var1['id'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21['onPress'] = var34;
            var34 = 31;
            var35 = var38[var34];
            var35 = var37.bind(var4)(var35);
            var36 = var35.intl;
            var35 = var36.string;
            var34 = var38[var34];
            var34 = var37.bind(var4)(var34);
            var34 = var34.t;
            var34 = var34["5S2AK+"];
            var34 = var35.bind(var36)(var34);
            var21['label'] = var34;
            var21['arrow'] = var26;
            var24 = var31.bind(var4)(var28, var21);
case 44:
            var21 = new Array(4);
            var21[0] = var24;
            var24 = null;
            if(!var25) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var31 = _closure1_slot8;
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var25 = 32;
            var25 = var37[var25];
            var25 = var36.bind(var4)(var25);
            var28 = var25.TableCheckboxRow;
            var25 = {};
            var34 = 33;
            var34 = var37[var34];
            var34 = var36.bind(var4)(var34);
            var35 = var34.SpoilerIcon;
            var34 = {};
            var34 = var31.bind(var4)(var35, var34);
            var25['icon'] = var34;
            var33 = function onPress() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 12;
                var3 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var3 = var6.hideActionSheet;
                var3 = var3.bind(var6)();
                var3 = 34;
                var3 = var5[var3];
                var7 = var4.bind(var1)(var3);
                var6 = var7.update;
                var12 = _closure2_slot3;
                var11 = _closure2_slot6;
                var2 = _closure1_slot7;
                var10 = var2.ChannelMessage;
                var2 = {};
                var8 = _closure2_slot9;
                var8 = !var8;
                var2['spoiler'] = var8;
                var13 = var7;
                var9 = var2;
                var2 = var13[var6](var12, var11, var10, var9, var8);
                return var1;
            };
            var25['onPress'] = var33;
            var33 = 31;
            var34 = var37[var33];
            var34 = var36.bind(var4)(var34);
            var35 = var34.intl;
            var34 = var35.string;
            var33 = var37[var33];
            var33 = var36.bind(var4)(var33);
            var33 = var33.t;
            var33 = var33.gsI+xC;
            var33 = var34.bind(var35)(var33);
            var25['label'] = var33;
            var25['checked'] = var32;
            var24 = var31.bind(var4)(var28, var25);
case 46:
            var21[1] = var24;
            if(!var22) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var28 = _closure1_slot8;
            var34 = _closure1_slot0;
            var35 = _closure1_slot2;
            var24 = 32;
            var24 = var35[var24];
            var24 = var34.bind(var4)(var24);
            var25 = var24.TableCheckboxRow;
            var24 = {};
            var31 = 35;
            var31 = var35[var31];
            var31 = var34.bind(var4)(var31);
            var32 = var31.ImageIcon;
            var31 = {};
            var31 = var28.bind(var4)(var32, var31);
            var24['icon'] = var31;
            var31 = 31;
            var32 = var35[var31];
            var32 = var34.bind(var4)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var31 = var35[var31];
            var31 = var34.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.ews2pj;
            var31 = var32.bind(var33)(var31);
            var24['label'] = var31;
            var24['onPress'] = var30;
            var24['checked'] = var29;
            var22 = var28.bind(var4)(var25, var24);
case 48:
            var21[2] = var22;
            var22 = null;
            if(!var23) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var25 = _closure1_slot8;
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var23 = 28;
            var23 = var31[var23];
            var23 = var30.bind(var4)(var23);
            var24 = var23.TableRow;
            var23 = {};
            var28 = 36;
            var28 = var31[var28];
            var28 = var30.bind(var4)(var28);
            var29 = var28.PencilSparkleIcon;
            var28 = {};
            var28 = var25.bind(var4)(var29, var28);
            var23['icon'] = var28;
            var23['onPress'] = var27;
            var27 = 31;
            var28 = var31[var27];
            var28 = var30.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var31[var27];
            var27 = var30.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.b0y3DL;
            var27 = var28.bind(var29)(var27);
            var23['label'] = var27;
            var23['arrow'] = var26;
            var22 = var25.bind(var4)(var24, var23);
case 50:
            var21[3] = var22;
            var18['children'] = var21;
            var16 = var20.bind(var4)(var19, var18);
case 43:
            var10[2] = var16;
            if(!(var11 == var14)) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var13 = var11 != var13;
            var11 = null;
            if(!var13) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var16 = _closure1_slot8;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var13 = 37;
            var13 = var22[var13];
            var13 = var21.bind(var4)(var13);
            var14 = var13.Button;
            var13 = {};
            var18 = 29;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var19 = var18.ImageFileIcon;
            var18 = {'size': 'sm', 'color': 'control-primary-text-default'};
            var18 = var16.bind(var4)(var19, var18);
            var13['icon'] = var18;
            var18 = 31;
            var19 = var22[var18];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.s7oPyG;
            var18 = var19.bind(var20)(var18);
            var13['text'] = var18;
            var13['onPress'] = var17;
            var11 = var16.bind(var4)(var14, var13);
case 54:
            _fun0001_ip = 56; continue _fun0001;
case 52:
            var14 = _closure1_slot8;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var12 = 37;
            var12 = var20[var12];
            var12 = var19.bind(var4)(var12);
            var13 = var12.Button;
            var12 = {};
            var16 = 38;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var17 = var16.TrashIcon;
            var16 = {'size': 'sm', 'color': 'control-primary-text-default'};
            var16 = var14.bind(var4)(var17, var16);
            var12['icon'] = var16;
            var16 = 31;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16["40jBO/"];
            var16 = var17.bind(var18)(var16);
            var12['text'] = var16;
            var12['onPress'] = var15;
            var15 = 'destructive';
            var12['variant'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 56:
            var10[3] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
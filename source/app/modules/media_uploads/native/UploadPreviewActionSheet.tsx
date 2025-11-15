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
    var11 = var11.BACKGROUND_SECONDARY;
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
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_uploads/native/UploadPreviewActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UploadPreviewActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var13 = var2.onAdd;
            var _closure2_slot0 = var13;
            var14 = var2.onRemove;
            var _closure2_slot1 = var14;
            var3 = var2.channelId;
            var _closure2_slot2 = var3;
            var1 = var2.onClose;
            var _closure2_slot3 = var1;
            var5 = var2.disableAddDescription;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = false;
case 2:
            var1 = var2.disableSpoiler;
            var2 = var2.upload;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var6 = _closure1_slot10;
            var23 = var6.bind(var4)();
            _closure2_slot4 = var23;
            var6 = var2.id;
            _closure2_slot5 = var6;
            var20 = var2.isVideo;
            _closure2_slot6 = var20;
            var21 = var2.isImage;
            var7 = var2.isThumbnail;
            var26 = var4 !== var7;
            if(!var26) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var26 = var7;
case 4:
            var34 = var2.item;
            _closure2_slot7 = var34;
            var29 = var2.spoiler;
            _closure2_slot8 = var29;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 7;
            var7 = var11[var7];
            var9 = var10.bind(var4)(var7);
            var8 = var34.platform;
            var15 = _closure1_slot0;
            var7 = 8;
            var7 = var11[var7];
            var7 = var15.bind(var4)(var7);
            var7 = var7.UploadPlatform;
            var7 = var7.REACT_NATIVE;
            var8 = var8 === var7;
            var7 = 'Upload must be a React Native upload item.';
            var7 = var9.bind(var4)(var8, var7);
            var7 = 9;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.bind(var4)();
            var7 = var7.width;
            _closure2_slot9 = var7;
            var8 = 10;
            var8 = var11[var8];
            var8 = var10.bind(var4)(var8);
            var8 = var8.bind(var4)();
            var8 = var8.bottom;
            var9 = 11;
            var9 = var11[var9];
            var10 = var10.bind(var4)(var9);
            var9 = function() {
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = _closure2_slot3;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var2 = _closure2_slot3;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 6:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var9 = var10.bind(var4)(var9);
            var10 = _closure1_slot4;
            var11 = var10.useMemo;
            var9 = new Array(3);
            var9[0] = var7;
            var9[1] = var34;
            var9[2] = var23;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var3 = var2.height;
                    var2 = _closure2_slot7;
                    var4 = var2.width;
                    var6 = _closure2_slot9;
                    var2 = _closure2_slot4;
                    var2 = var2.contentContainer;
                    var2 = var2.padding;
                    var5 = 2;
                    var2 = var5 * var2;
                    var2 = var6 - var2;
                    var1 = _closure2_slot4;
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
            var35 = var11.bind(var10)(var7, var9);
            var9 = var10.useCallback;
            var7 = new Array(2);
            var7[0] = var14;
            var7[1] = var6;
            var6 = function() {
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
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot5;
                    var2 = var3.bind(var1)(var2);
case 14:
                    return var1;
                }
            };
            var15 = var9.bind(var10)(var6, var7);
            var9 = var10.useCallback;
            var7 = new Array(1);
            var7[0] = var13;
            var6 = function() {
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
                    if(!(var3 != var4)) { _fun0005_ip = 3; continue _fun0005 }
case 15:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)();
case 3:
                    return var1;
                }
            };
            var17 = var9.bind(var10)(var6, var7);
            var9 = var10.useMemo;
            var7 = new Array(2);
            var7[0] = var20;
            var7[1] = var34;
            var6 = function() {
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 13;
                var4 = var6[var1];
                var2 = undefined;
                var5 = var3.bind(var2)(var4);
                var4 = var5.getCaptionLabel;
                var1 = var6[var1];
                var6 = var3.bind(var2)(var1);
                var3 = var6.getType;
                var2 = _closure2_slot7;
                var2 = var2.uri;
                var3 = var3.bind(var6)(var2);
                var2 = _closure2_slot6;
                var1 = _closure2_slot7;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var33 = var9.bind(var10)(var6, var7);
            if(!var21) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var21 = !var5;
case 16:
            var24 = !var26;
            if(!var24) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var24 = !var1;
case 18:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 14;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var22 = var1.bind(var4)(var3, var2);
            var1 = 15;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var27 = var1.bind(var4)(var3, var2);
            var2 = _closure1_slot4;
            var1 = var2.useState;
            var3 = var1.bind(var2)(var4);
            var2 = _closure1_slot3;
            var1 = 2;
            var3 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var1 = var3[var1];
            var2 = 1;
            var2 = var3[var2];
            _closure2_slot10 = var2;
            var11 = null;
            var2 = var11 != var1;
            var5 = undefined;
            if(!var2) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var7 = var1 + var8;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 6;
            var2 = var6[var1];
            var2 = var3.bind(var4)(var2);
            var2 = var2.spacing;
            var2 = var2.PX_32;
            var2 = var7 + var2;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.spacing;
            var1 = var1.PX_16;
            var5 = var2 + var1;
case 20:
            var3 = _closure1_slot8;
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            var10 = 16;
            var1 = var28[var10];
            var1 = var25.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var31 = true;
            var1['scrollable'] = var31;
            var1['startHeight'] = var5;
            var5 = 17;
            var5 = var28[var5];
            var5 = var25.bind(var4)(var5);
            var6 = var5.BottomSheetScrollView;
            var5 = {};
            var7 = {};
            var16 = _closure1_slot1;
            var9 = 6;
            var9 = var28[var9];
            var9 = var16.bind(var4)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_16;
            var7['padding'] = var9;
            var7['paddingBottom'] = var8;
            var5['contentContainerStyle'] = var7;
            var9 = _closure1_slot9;
            var7 = 18;
            var7 = var28[var7];
            var7 = var25.bind(var4)(var7);
            var8 = var7.Stack;
            var7 = {};
            var7['spacing'] = var10;
            var10 = function onLayout(arg1) {
                var3 = _closure2_slot10;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7['onLayout'] = var10;
            var10 = 19;
            var10 = var28[var10];
            var10 = var25.bind(var4)(var10);
            var16 = var10.Text;
            var10 = {};
            var18 = 'text-md/semibold';
            var10['variant'] = var18;
            var18 = var34.filename;
            var10['children'] = var18;
            var16 = var3.bind(var4)(var16, var10);
            var10 = new Array(4);
            var10[0] = var16;
            var18 = _closure1_slot6;
            var16 = {};
            var19 = var23.imageWrap;
            var16['style'] = var19;
            var19 = {};
            var32 = var23.imageContainer;
            var23 = new Array(2);
            var23[0] = var32;
            var32 = {};
            var36 = var35.width;
            var32['width'] = var36;
            var36 = var35.height;
            var32['height'] = var36;
            var23[1] = var32;
            var19['style'] = var23;
            var23 = 20;
            var23 = var28[var23];
            var25 = var25.bind(var4)(var23);
            var23 = var25.isIOS;
            var23 = var23.bind(var25)();
            if(!var23) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            if(!var20) { _fun0001_ip = 22; continue _fun0001 }
case 24:
            var25 = var34.uri;
            var23 = var25.startsWith;
            var20 = 'file://';
            var20 = var23.bind(var25)(var20);
            if(var20) { _fun0001_ip = 25; continue _fun0001 }
case 22:
            var25 = _closure1_slot8;
            var23 = _closure1_slot5;
            var20 = {};
            var28 = {};
            var32 = var35.width;
            var28['width'] = var32;
            var32 = var35.height;
            var28['height'] = var32;
            var20['style'] = var28;
            var20['source'] = var34;
            var23 = var25.bind(var4)(var23, var20);
            _fun0001_ip = 26; continue _fun0001;
case 25:
            var28 = _closure1_slot8;
            var25 = _closure1_slot0;
            var32 = _closure1_slot2;
            var20 = 21;
            var20 = var32[var20];
            var20 = var25.bind(var4)(var20);
            var25 = var20.VideoComponent;
            var20 = {};
            var32 = {};
            var36 = var35.width;
            var32['width'] = var36;
            var35 = var35.height;
            var32['height'] = var35;
            var20['style'] = var32;
            var32 = {};
            var34 = var34.uri;
            var32['uri'] = var34;
            var20['source'] = var32;
            var20['muted'] = var31;
            var20['paused'] = var31;
            var23 = var28.bind(var4)(var25, var20);
case 26:
            var20 = new Array(2);
            var20[0] = var23;
            var23 = var11 != var33;
            if(!var23) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var25 = '';
            var23 = var25 !== var33;
case 27:
            if(!var23) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var32 = _closure1_slot8;
            var28 = _closure1_slot0;
            var34 = _closure1_slot2;
            var25 = 22;
            var25 = var34[var25];
            var25 = var28.bind(var4)(var25);
            var28 = var25.Caption;
            var25 = {};
            var25['label'] = var33;
            var23 = var32.bind(var4)(var28, var25);
case 29:
            var20[1] = var23;
            var19['children'] = var20;
            var19 = var9.bind(var4)(var18, var19);
            var16['children'] = var19;
            var16 = var3.bind(var4)(var18, var16);
            var10[1] = var16;
            if(var21) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            if(var24) { _fun0001_ip = 31; continue _fun0001 }
case 33:
            var16 = null;
            if(!var22) { _fun0001_ip = 34; continue _fun0001 }
case 31:
            var20 = _closure1_slot9;
            var19 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 23;
            var18 = var23[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.TableRowGroup;
            var18 = {};
            var23 = null;
            if(!var21) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var28 = _closure1_slot8;
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var21 = 24;
            var21 = var36[var21];
            var21 = var35.bind(var4)(var21);
            var25 = var21.TableRow;
            var21 = {};
            var32 = 25;
            var32 = var36[var32];
            var32 = var35.bind(var4)(var32);
            var33 = var32.ImageFileIcon;
            var32 = {};
            var32 = var28.bind(var4)(var33, var32);
            var21['icon'] = var32;
            var32 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.open;
                var1 = {};
                var5 = _closure2_slot7;
                var1['source'] = var5;
                var5 = _closure2_slot2;
                var1['channelId'] = var5;
                var4 = _closure2_slot5;
                var1['id'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21['onPress'] = var32;
            var32 = 27;
            var33 = var36[var32];
            var33 = var35.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var32 = var36[var32];
            var32 = var35.bind(var4)(var32);
            var32 = var32.t;
            var32 = var32.5S2AK+;
            var32 = var33.bind(var34)(var32);
            var21['label'] = var32;
            var21['arrow'] = var31;
            var23 = var28.bind(var4)(var25, var21);
case 35:
            var21 = new Array(3);
            var21[0] = var23;
            var23 = null;
            if(!var24) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var28 = _closure1_slot8;
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var24 = 28;
            var24 = var34[var24];
            var24 = var33.bind(var4)(var24);
            var25 = var24.TableCheckboxRow;
            var24 = {};
            var31 = 29;
            var31 = var34[var31];
            var31 = var33.bind(var4)(var31);
            var32 = var31.SpoilerIcon;
            var31 = {};
            var31 = var28.bind(var4)(var32, var31);
            var24['icon'] = var31;
            var30 = function onPress() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 12;
                var3 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var3 = var6.hideActionSheet;
                var3 = var3.bind(var6)();
                var3 = 30;
                var3 = var5[var3];
                var7 = var4.bind(var1)(var3);
                var6 = var7.update;
                var12 = _closure2_slot2;
                var11 = _closure2_slot5;
                var2 = _closure1_slot7;
                var10 = var2.ChannelMessage;
                var2 = {};
                var8 = _closure2_slot8;
                var8 = !var8;
                var2['spoiler'] = var8;
                var13 = var7;
                var9 = var2;
                var2 = var13[var6](var12, var11, var10, var9, var8);
                return var1;
            };
            var24['onPress'] = var30;
            var30 = 27;
            var31 = var34[var30];
            var31 = var33.bind(var4)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var34[var30];
            var30 = var33.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.gsI+xC;
            var30 = var31.bind(var32)(var30);
            var24['label'] = var30;
            var24['checked'] = var29;
            var23 = var28.bind(var4)(var25, var24);
case 37:
            var21[1] = var23;
            if(!var22) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var25 = _closure1_slot8;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var23 = 28;
            var23 = var32[var23];
            var23 = var31.bind(var4)(var23);
            var24 = var23.TableCheckboxRow;
            var23 = {};
            var28 = 31;
            var28 = var32[var28];
            var28 = var31.bind(var4)(var28);
            var29 = var28.ImageIcon;
            var28 = {};
            var28 = var25.bind(var4)(var29, var28);
            var23['icon'] = var28;
            var28 = 27;
            var29 = var32[var28];
            var29 = var31.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var32[var28];
            var28 = var31.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.ews2pj;
            var28 = var29.bind(var30)(var28);
            var23['label'] = var28;
            var23['onPress'] = var27;
            var23['checked'] = var26;
            var22 = var25.bind(var4)(var24, var23);
case 39:
            var21[2] = var22;
            var18['children'] = var21;
            var16 = var20.bind(var4)(var19, var18);
case 34:
            var10[2] = var16;
            if(!(var11 == var14)) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var13 = var11 != var13;
            var11 = null;
            if(!var13) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var16 = _closure1_slot8;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var13 = 32;
            var13 = var22[var13];
            var13 = var21.bind(var4)(var13);
            var14 = var13.Button;
            var13 = {};
            var18 = 25;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var19 = var18.ImageFileIcon;
            var18 = {'size': 'sm', 'color': 'redesign-button-primary-text'};
            var18 = var16.bind(var4)(var19, var18);
            var13['icon'] = var18;
            var18 = 27;
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
case 43:
            _fun0001_ip = 45; continue _fun0001;
case 41:
            var14 = _closure1_slot8;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var12 = 32;
            var12 = var20[var12];
            var12 = var19.bind(var4)(var12);
            var13 = var12.Button;
            var12 = {};
            var16 = 33;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var17 = var16.TrashIcon;
            var16 = {'size': 'sm', 'color': 'redesign-button-primary-text'};
            var16 = var14.bind(var4)(var17, var16);
            var12['icon'] = var16;
            var16 = 27;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.40jBO/;
            var16 = var17.bind(var18)(var16);
            var12['text'] = var16;
            var12['onPress'] = var15;
            var15 = 'destructive';
            var12['variant'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 45:
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
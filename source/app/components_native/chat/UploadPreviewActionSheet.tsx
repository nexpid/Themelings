// app/components_native/chat/UploadPreviewActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
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
    var9 = {'overflow': 'hidden', 'alignSelf': 'center'};
    var10 = 6;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9['borderRadius'] = var12;
    var4['imageContainer'] = var9;
    var9 = {'paddingTop': 16, 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var4['labelContainer'] = var9;
    var9 = {'color': null, 'fontSize': 16, 'flexShrink': 1};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.HEADER_PRIMARY;
    var9['color'] = var10;
    var4['leftLabel'] = var9;
    var9 = {};
    var10 = 60;
    var9['padding'] = var10;
    var4['card'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/chat/UploadPreviewActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UploadPreviewActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var7 = var2.id;
            var _closure2_slot0 = var7;
            var18 = var2.source;
            var _closure2_slot1 = var18;
            var13 = var2.isVideo;
            var _closure2_slot2 = var13;
            var1 = var2.isImage;
            var16 = var2.onRemove;
            var _closure2_slot3 = var16;
            var6 = var2.channelId;
            var _closure2_slot4 = var6;
            var3 = var2.fileType;
            var _closure2_slot5 = var3;
            var4 = var2.onClose;
            var _closure2_slot6 = var4;
            var28 = var2.disableSpoiler;
            var21 = var2.disableRemix;
            var2 = _closure1_slot10;
            var4 = undefined;
            var15 = var2.bind(var4)();
            var _closure2_slot7 = var15;
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 7;
            var2 = var11[var2];
            var9 = var5.bind(var4)(var2);
            var8 = var9.useStateFromStoresObject;
            var2 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot7;
                    var4 = var5.getUpload;
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot0;
                    var1 = _closure1_slot6;
                    var1 = var1.ChannelMessage;
                    var2 = var4.bind(var5)(var3, var2, var1);
                    var1 = {};
                    var3 = null;
                    var5 = var3 == var2;
                    var6 = undefined;
                    if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = var2.spoiler;
case 2:
                    var5 = var3 != var6;
                    if(!var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = var6;
case 4:
                    var1['hasSpoiler'] = var5;
                    var5 = var3 == var2;
                    var4 = undefined;
                    if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = var2.isThumbnail;
case 6:
                    var3 = var3 != var4;
                    if(!var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = var4;
case 8:
                    var1['isThumbnail'] = var3;
                    var1['upload'] = var2;
                    return var1;
                }
            };
            var2 = var8.bind(var9)(var5, var2);
            var26 = var2.hasSpoiler;
            var _closure2_slot8 = var26;
            var23 = var2.isThumbnail;
            var5 = var2.upload;
            var10 = _closure1_slot1;
            var2 = 8;
            var2 = var11[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = var2.width;
            var _closure2_slot9 = var2;
            var8 = 9;
            var8 = var11[var8];
            var8 = var10.bind(var4)(var8);
            var8 = var8.bind(var4)();
            var8 = var8.bottom;
            var9 = 10;
            var9 = var11[var9];
            var20 = var10.bind(var4)(var9);
            var19 = var20.useExperiment;
            var17 = {};
            var9 = '58651f_1';
            var17['location'] = var9;
            var9 = {};
            var14 = false;
            var9['autoTrackExposure'] = var14;
            var9 = var19.bind(var20)(var17, var9);
            var22 = var9.enableImageDescriptionsOnMobile;
            var9 = 11;
            var9 = var11[var9];
            var10 = var10.bind(var4)(var9);
            var9 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.dismissKeyboard;
                var1 = var1.bind(var2)();
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure2_slot6;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var2 = _closure2_slot6;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 10:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var9 = var10.bind(var4)(var9);
            var10 = _closure1_slot3;
            var17 = var10.useMemo;
            var11 = new Array(3);
            var11[0] = var2;
            var11[1] = var18;
            var11[2] = var15;
            var9 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var3 = var2.height;
                    var4 = var2.width;
                    var2 = _closure2_slot9;
                    var1 = _closure2_slot7;
                    var1 = var1.contentContainer;
                    var5 = var1.padding;
                    var1 = 2;
                    var1 = var1 * var5;
                    var2 = var2 - var1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    if(!(var1 == var4)) { _fun0004_ip = 14; continue _fun0004 }
case 12:
                    var1 = {};
                    var1['width'] = var2;
                    var1['height'] = var2;
                    return var1;
case 14:
                    var1 = 0;
                    if(!(var1 !== var3)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    if(!(var1 !== var4)) { _fun0004_ip = 15; continue _fun0004 }
case 17:
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
case 15:
                    var1 = {'width': 300, 'height': 300};
                    return var1;
                }
            };
            var33 = var17.bind(var10)(var9, var11);
            var11 = var10.useCallback;
            var9 = new Array(2);
            var9[0] = var16;
            var9[1] = var7;
            var7 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var4 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var1)(var2);
case 18:
                    return var1;
                }
            };
            var16 = var11.bind(var10)(var7, var9);
            var9 = var10.useMemo;
            var7 = new Array(3);
            var7[0] = var3;
            var7[1] = var13;
            var7[2] = var18;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.getCaptionLabel;
                var3 = _closure2_slot5;
                var2 = _closure2_slot2;
                var1 = _closure2_slot1;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var32 = var9.bind(var10)(var3, var7);
            if(!var22) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var22 = var1;
case 20:
            var3 = 2;
            if(!var22) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var3 = 3;
case 22:
            var7 = _closure1_slot1;
            var25 = _closure1_slot2;
            var1 = 15;
            var1 = var25[var1];
            var1 = var7.bind(var4)(var1);
            var20 = var1.bind(var4)(var6, var18);
            var10 = 16;
            var1 = var25[var10];
            var1 = var7.bind(var4)(var1);
            var29 = var1.bind(var4)(var6, var18);
            var1 = 17;
            var1 = var25[var1];
            var1 = var7.bind(var4)(var1);
            var19 = var1.bind(var4)(var6, var5);
            var1 = 18;
            var1 = var25[var1];
            var1 = var7.bind(var4)(var1);
            var24 = var1.bind(var4)(var6, var5);
            var1 = var15.card;
            var1 = var1.padding;
            var2 = var2 + var1;
            var1 = 40;
            var1 = var1 * var3;
            var1 = var2 + var1;
            var5 = var1 + var8;
            var3 = _closure1_slot8;
            var17 = _closure1_slot0;
            var1 = 19;
            var1 = var25[var1];
            var1 = var17.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var31 = true;
            var1['scrollable'] = var31;
            var1['startHeight'] = var5;
            var5 = 20;
            var5 = var25[var5];
            var5 = var17.bind(var4)(var5);
            var6 = var5.BottomSheetScrollView;
            var5 = {};
            var7 = var15.contentContainer;
            var5['style'] = var7;
            var7 = {};
            var7['paddingBottom'] = var8;
            var5['contentContainerStyle'] = var7;
            var9 = _closure1_slot9;
            var7 = 21;
            var7 = var25[var7];
            var7 = var17.bind(var4)(var7);
            var8 = var7.Stack;
            var7 = {};
            var7['spacing'] = var10;
            var11 = _closure1_slot5;
            var10 = {};
            var30 = var15.imageContainer;
            var15 = new Array(2);
            var15[0] = var30;
            var30 = {};
            var34 = var33.width;
            var30['width'] = var34;
            var34 = var33.height;
            var30['height'] = var34;
            var15[1] = var30;
            var10['style'] = var15;
            var15 = 22;
            var15 = var25[var15];
            var17 = var17.bind(var4)(var15);
            var15 = var17.isIOS;
            var15 = var15.bind(var17)();
            if(!var15) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            if(!var13) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            var17 = var18.uri;
            var15 = var17.startsWith;
            var13 = 'file://';
            var13 = var15.bind(var17)(var13);
            if(var13) { _fun0001_ip = 27; continue _fun0001 }
case 24:
            var17 = _closure1_slot8;
            var15 = _closure1_slot4;
            var13 = {};
            var25 = {};
            var30 = var33.width;
            var25['width'] = var30;
            var30 = var33.height;
            var25['height'] = var30;
            var13['style'] = var25;
            var13['source'] = var18;
            var15 = var17.bind(var4)(var15, var13);
            _fun0001_ip = 28; continue _fun0001;
case 27:
            var25 = _closure1_slot8;
            var17 = _closure1_slot0;
            var30 = _closure1_slot2;
            var13 = 23;
            var13 = var30[var13];
            var13 = var17.bind(var4)(var13);
            var17 = var13.VideoComponent;
            var13 = {};
            var30 = {};
            var34 = var33.width;
            var30['width'] = var34;
            var33 = var33.height;
            var30['height'] = var33;
            var13['style'] = var30;
            var30 = {};
            var33 = var18.uri;
            var30['uri'] = var33;
            var13['source'] = var30;
            var13['muted'] = var31;
            var13['paused'] = var31;
            var15 = var25.bind(var4)(var17, var13);
case 28:
            var13 = new Array(2);
            var13[0] = var15;
            var15 = null;
            var15 = var15 != var32;
            if(!var15) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var17 = '';
            var15 = var17 !== var32;
case 29:
            if(!var15) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var30 = _closure1_slot8;
            var25 = _closure1_slot0;
            var33 = _closure1_slot2;
            var17 = 24;
            var17 = var33[var17];
            var17 = var25.bind(var4)(var17);
            var25 = var17.Caption;
            var17 = {};
            var17['label'] = var32;
            var15 = var30.bind(var4)(var25, var17);
case 31:
            var13[1] = var15;
            var10['children'] = var13;
            var11 = var9.bind(var4)(var11, var10);
            var10 = new Array(3);
            var10[0] = var11;
            var17 = _closure1_slot9;
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 25;
            var13 = var13[var11];
            var13 = var15.bind(var4)(var13);
            var15 = var13.TableRowGroup;
            var13 = {};
            var13['hasIcons'] = var14;
            var18 = var18.filename;
            var13['title'] = var18;
            if(!var22) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var30 = _closure1_slot8;
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var18 = 26;
            var18 = var36[var18];
            var18 = var35.bind(var4)(var18);
            var25 = var18.TableRow;
            var18 = {};
            var32 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.open;
                var1 = {};
                var5 = _closure2_slot1;
                var1['source'] = var5;
                var5 = _closure2_slot4;
                var1['channelId'] = var5;
                var4 = _closure2_slot0;
                var1['id'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18['onPress'] = var32;
            var32 = 28;
            var33 = var36[var32];
            var33 = var35.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var32 = var36[var32];
            var32 = var35.bind(var4)(var32);
            var32 = var32.t;
            var32 = var32.5S2AKy;
            var32 = var33.bind(var34)(var32);
            var18['label'] = var32;
            var18['arrow'] = var31;
            var22 = var30.bind(var4)(var25, var18);
case 33:
            var18 = new Array(4);
            var18[0] = var22;
            if(!var20) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var20 = !var21;
case 35:
            if(!var20) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var25 = _closure1_slot8;
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var21 = 26;
            var21 = var33[var21];
            var21 = var32.bind(var4)(var21);
            var22 = var21.TableRow;
            var21 = {};
            var21['onPress'] = var29;
            var29 = 28;
            var30 = var33[var29];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var33[var29];
            var29 = var32.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.Gp2rPj;
            var29 = var30.bind(var31)(var29);
            var21['label'] = var29;
            var20 = var25.bind(var4)(var22, var21);
case 37:
            var18[1] = var20;
            var20 = !var23;
            if(!var20) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var25 = _closure1_slot8;
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var21 = 29;
            var21 = var31[var21];
            var21 = var30.bind(var4)(var21);
            var22 = var21.TableCheckboxRow;
            var21 = {};
            var21['disabled'] = var28;
            var27 = function onPress() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 30;
                var3 = var3[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var6 = var7.update;
                var12 = _closure2_slot4;
                var11 = _closure2_slot0;
                var2 = _closure1_slot6;
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
            var21['onPress'] = var27;
            var27 = 28;
            var28 = var31[var27];
            var28 = var30.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var31[var27];
            var27 = var30.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.gsI+xM;
            var27 = var28.bind(var29)(var27);
            var21['label'] = var27;
            var21['checked'] = var26;
            var20 = var25.bind(var4)(var22, var21);
case 39:
            var18[2] = var20;
            if(!var19) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var22 = _closure1_slot8;
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var20 = 29;
            var20 = var29[var20];
            var20 = var28.bind(var4)(var20);
            var21 = var20.TableCheckboxRow;
            var20 = {};
            var25 = 28;
            var26 = var29[var25];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var29[var25];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.ews2pq;
            var25 = var26.bind(var27)(var25);
            var20['label'] = var25;
            var20['onPress'] = var24;
            var20['checked'] = var23;
            var19 = var22.bind(var4)(var21, var20);
case 41:
            var18[3] = var19;
            var13['children'] = var18;
            var13 = var17.bind(var4)(var15, var13);
            var10[1] = var13;
            var13 = _closure1_slot8;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var11 = var21[var11];
            var11 = var20.bind(var4)(var11);
            var12 = var11.TableRowGroup;
            var11 = {};
            var11['hasIcons'] = var14;
            var14 = 26;
            var14 = var21[var14];
            var14 = var20.bind(var4)(var14);
            var15 = var14.TableRow;
            var14 = {};
            var17 = 'danger';
            var14['variant'] = var17;
            var17 = 28;
            var18 = var21[var17];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.40jBOz;
            var17 = var18.bind(var19)(var17);
            var14['label'] = var17;
            var14['onPress'] = var16;
            var14 = var13.bind(var4)(var15, var14);
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[2] = var11;
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
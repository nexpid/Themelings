// app/modules/media_keyboard/native/components/MediaKeyboardItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var7;
    var2 = function isMediaCameraNode(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = 'type';
            var1 = var1 in var2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.type;
            var2 = 'camera';
            var1 = var2 === var3;
case 2:
            return var1;
        }
    };
    var _closure1_slot20 = var2;
    var1 = function useLayoutStyle(arg1, arg2, arg3) {
        var7 = arg1;
        var6 = arg2;
        var5 = arg3;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var _closure2_slot2 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot2;
                var3 = 0;
                var6 = 0;
                if(!(var3 !== var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var1 = global;
                var5 = var1.Math;
                var2 = var5.floor;
                var7 = _closure2_slot2;
                var1 = 1;
                var7 = var7 - var1;
                var1 = _closure2_slot1;
                var1 = var7 / var1;
                var6 = var2.bind(var5)(var1);
case 4:
                var1 = global;
                var5 = var1.Math;
                var2 = var5.floor;
                var8 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var8 / var1;
                var7 = var2.bind(var5)(var1);
                var1 = {};
                var2 = 4;
                var5 = var2;
                if(!(var3 === var8)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var5 = 16;
case 6:
                var1['borderTopLeftRadius'] = var5;
                var8 = _closure2_slot2;
                var5 = _closure2_slot1;
                if(!(!(var8 >= var5))) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var8 = _closure2_slot0;
                var9 = _closure2_slot2;
                var5 = 1;
                var5 = var9 - var5;
                var8 = var8 === var5;
                _fun0002_ip = 10; continue _fun0002;
case 8:
                var9 = _closure2_slot0;
                var10 = _closure2_slot1;
                var5 = 1;
                var5 = var10 - var5;
                var8 = var9 === var5;
case 10:
                var5 = var2;
                if(!var8) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var5 = 16;
case 11:
                var1['borderTopRightRadius'] = var5;
                var5 = var2;
                if(!(var7 === var6)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var8 = _closure2_slot0;
                var7 = _closure2_slot1;
                var7 = var8 % var7;
                var5 = var2;
                if(!(var7 == var3)) { _fun0002_ip = 13; continue _fun0002 }
case 15:
                var5 = 16;
case 13:
                var1['borderBottomLeftRadius'] = var5;
                var7 = _closure2_slot0;
                var5 = _closure2_slot2;
                var8 = 1;
                var5 = var5 - var8;
                if(!(var7 !== var5)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var7 = _closure2_slot2;
                var5 = _closure2_slot1;
                var7 = var7 % var5;
                var5 = var2;
                if(!(var7 != var3)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var7 = _closure2_slot0;
                var6 = var6 - var8;
                var9 = _closure2_slot1;
                var6 = var6 * var9;
                var6 = var6 + var9;
                var6 = var6 - var8;
                var5 = var2;
                if(!(var7 === var6)) { _fun0002_ip = 18; continue _fun0002 }
case 16:
                var5 = 16;
case 18:
                var1['borderBottomRightRadius'] = var5;
                var5 = _closure2_slot0;
                var4 = _closure2_slot1;
                var4 = var5 % var4;
                if(!(var4 == var3)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var2 = 0;
case 20:
                var1['marginLeft'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var10 = var4.bind(var1)(var5);
    var _closure1_slot3 = var10;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var5 = var4.View;
    var _closure1_slot4 = var5;
    var11 = var4.Pressable;
    var _closure1_slot5 = var11;
    var18 = var4.StyleSheet;
    var4 = var4.useWindowDimensions;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var5 = var4.ALAssetsType;
    var _closure1_slot8 = var5;
    var4 = var4.DeviceMediaType;
    var _closure1_slot9 = var4;
    var4 = 4;
    var5 = var7[var4];
    var5 = var8.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot10 = var9;
    var5 = var5.jsxs;
    var _closure1_slot11 = var5;
    var5 = 5;
    var5 = var7[var5];
    var9 = var14.bind(var1)(var5);
    var5 = var9.createAnimatedComponent;
    var5 = var5.bind(var9)(var11);
    var _closure1_slot12 = var5;
    var9 = 6;
    var5 = var7[var9];
    var15 = var8.bind(var1)(var5);
    var12 = var15.createStyles;
    var11 = {};
    var5 = {'flexDirection': 'row', 'paddingHorizontal': 12, 'alignItems': 'center'};
    var11['container'] = var5;
    var5 = {};
    var13 = 7;
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_MOBILE_PRIMARY;
    var5['backgroundColor'] = var16;
    var11['image'] = var5;
    var5 = {'borderRadius': null, 'overflow': 'hidden', 'position': 'relative'};
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var5['borderRadius'] = var16;
    var11['imageContainer'] = var5;
    var5 = {'backgroundColor': null, 'borderRadius': null, 'paddingHorizontal': 8, 'paddingVertical': 2, 'position': 'absolute', 'right': 6, 'bottom': 6};
    var17 = 8;
    var16 = var7[var17];
    var21 = var8.bind(var1)(var16);
    var20 = var21.hexWithOpacity;
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var19 = var16.PRIMARY_700;
    var16 = 0.5;
    var16 = var20.bind(var21)(var19, var16);
    var5['backgroundColor'] = var16;
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var5['borderRadius'] = var16;
    var11['labelContainer'] = var5;
    var5 = {'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'borderRadius': null, 'paddingHorizontal': 5, 'paddingVertical': 4, 'position': 'absolute', 'left': 8, 'bottom': 8};
    var16 = var7[var17];
    var20 = var8.bind(var1)(var16);
    var19 = var20.hexWithOpacity;
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.PRIMARY_700;
    var21 = 0.6;
    var16 = var19.bind(var20)(var16, var21);
    var5['backgroundColor'] = var16;
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var5['borderRadius'] = var16;
    var11['newlabelContainer'] = var5;
    var5 = {'justifyContent': 'center', 'alignItems': 'center', 'width': 20, 'height': 20, 'backgroundColor': null, 'borderRadius': null, 'paddingRight': 1};
    var16 = var7[var17];
    var20 = var8.bind(var1)(var16);
    var19 = var20.hexWithOpacity;
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.BLACK_500;
    var16 = var19.bind(var20)(var16, var21);
    var5['backgroundColor'] = var16;
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var5['borderRadius'] = var16;
    var11['iconContainer'] = var5;
    var5 = {'flexDirection': 'row', 'alignItems': 'center'};
    var11['errorContainer'] = var5;
    var5 = {};
    var16 = 10;
    var5['right'] = var16;
    var11['mediaKeyboardItemLabelContainer'] = var5;
    var5 = {'width': 12, 'height': 12, 'tintColor': null, 'marginEnd': 4};
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.WHITE;
    var5['tintColor'] = var16;
    var11['icon'] = var5;
    var5 = {'width': 14, 'height': 14};
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BG_BRAND;
    var5['color'] = var16;
    var11['checkIcon'] = var5;
    var16 = {'width': 24, 'height': 24, 'position': 'absolute', 'justifyContent': 'center', 'alignItems': 'center', 'right': 6, 'top': 6, 'borderRadius': null, 'backgroundColor': null, 'borderWidth': 1};
    var5 = 24;
    var19 = var7[var13];
    var19 = var14.bind(var1)(var19);
    var19 = var19.radii;
    var19 = var19.round;
    var16['borderRadius'] = var19;
    var19 = var7[var13];
    var19 = var14.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.WHITE;
    var16['backgroundColor'] = var19;
    var19 = var7[var17];
    var22 = var8.bind(var1)(var19);
    var21 = var22.hexWithOpacity;
    var19 = var7[var13];
    var19 = var14.bind(var1)(var19);
    var19 = var19.unsafe_rawColors;
    var20 = var19.BLACK_500;
    var19 = 0.1;
    var19 = var21.bind(var22)(var20, var19);
    var16['borderColor'] = var19;
    var11['checkIconContainer'] = var16;
    var16 = {};
    var24 = var18.absoluteFillObject;
    var25 = var16;
    var18 = copyDataProperties(var25, var24);
    var18 = var7[var13];
    var18 = var14.bind(var1)(var18);
    var18 = var18.radii;
    var19 = var18.xs;
    var18 = 'borderRadius';
    var16[var18] = var19;
    var17 = var7[var17];
    var20 = var8.bind(var1)(var17);
    var19 = var20.hexWithOpacity;
    var17 = var7[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var18 = var17.BLACK_500;
    var17 = 0.3;
    var18 = var19.bind(var20)(var18, var17);
    var17 = 'backgroundColor';
    var16[var17] = var18;
    var11['selectedOverlay'] = var16;
    var16 = {'justifyContent': 'center', 'alignItems': 'center'};
    var11['specialButton'] = var16;
    var16 = {};
    var17 = 0.4;
    var16['opacity'] = var17;
    var11['disabled'] = var16;
    var16 = {};
    var17 = 0.2;
    var16['opacity'] = var17;
    var11['imageDisabled'] = var16;
    var11 = var12.bind(var15)(var11);
    var _closure1_slot13 = var11;
    var11 = function NewCaption(arg1) {
        var1 = arg1;
        var9 = var1.label;
        var7 = var1.style;
        var10 = var1.textStyle;
        var1 = _closure1_slot13;
        var4 = undefined;
        var12 = var1.bind(var4)();
        var3 = _closure1_slot11;
        var2 = _closure1_slot4;
        var1 = {};
        var8 = var12.newlabelContainer;
        var5 = new Array(2);
        var5[0] = var8;
        var5[1] = var7;
        var1['style'] = var5;
        var8 = _closure1_slot10;
        var14 = _closure1_slot1;
        var11 = _closure1_slot2;
        var5 = 9;
        var5 = var11[var5];
        var7 = var14.bind(var4)(var5);
        var5 = {};
        var13 = 10;
        var13 = var11[var13];
        var13 = var14.bind(var4)(var13);
        var5['source'] = var13;
        var12 = var12.icon;
        var5['style'] = var12;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var7 = _closure1_slot0;
        var6 = 11;
        var6 = var11[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'style': null, 'color': 'always-white', 'variant': 'text-xs/bold'};
        var6['style'] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var11;
    var11 = function MediaKeyboardImage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var16 = var4.draftType;
            var _closure2_slot0 = var16;
            var9 = var4.item;
            var _closure2_slot1 = var9;
            var15 = var4.index;
            var3 = var4.totalNumItems;
            var2 = var4.numItemsPerRow;
            var20 = var4.size;
            var11 = var4.channelId;
            var _closure2_slot2 = var11;
            var1 = var4.onSelectItem;
            var _closure2_slot3 = var1;
            var14 = var4.disabled;
            var6 = var4.includedUploadIds;
            var _closure2_slot4 = var6;
            var8 = var4.showRemixButton;
            var1 = var4.uploadLimit;
            var21 = var4.disableWhenReachedLimit;
            var10 = _closure1_slot13;
            var4 = undefined;
            var18 = var10.bind(var4)();
            var9 = var9.node;
            var19 = var9.image;
            var _closure2_slot5 = var19;
            var22 = var9.type;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 12;
            var9 = var12[var9];
            var13 = var10.bind(var4)(var9);
            var12 = var13.useStateFromStoresObject;
            var9 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = new Array(4);
            var9[0] = var11;
            var9[1] = var16;
            var9[2] = var19;
            var9[3] = var6;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var8 = _closure1_slot7;
                    var7 = var8.findUpload;
                    var6 = _closure2_slot2;
                    var5 = _closure2_slot0;
                    var2 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var3 = arg1;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var2);
                            var2 = var5.doesImageMatchUpload;
                            var1 = _closure2_slot5;
                            var1 = var2.bind(var5)(var1, var3);
                            if(!var1) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                            var5 = _closure2_slot4;
                            var2 = null;
                            var2 = var2 == var5;
                            if(var2) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                            var5 = _closure2_slot4;
                            var4 = var5.includes;
                            var3 = var3.id;
                            var2 = var4.bind(var5)(var3);
case 24:
                            var1 = var2;
case 22:
                            return var1;
                        }
                    };
                    var2 = var7.bind(var8)(var6, var5, var2);
                    var1['upload'] = var2;
                    var2 = _closure2_slot4;
                    var5 = null;
                    var6 = var5 == var2;
                    var2 = undefined;
                    if(var6) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var6 = _closure2_slot4;
                    var2 = var6.length;
case 26:
                    if(!(var5 == var2)) { _fun0004_ip = 6; continue _fun0004 }
case 28:
                    var6 = _closure1_slot7;
                    var5 = var6.getUploadCount;
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot0;
                    var2 = var5.bind(var6)(var4, var3);
case 6:
                    var1['uploadCount'] = var2;
                    return var1;
                }
            };
            var6 = var12.bind(var13)(var10, var6, var9);
            var10 = var6.upload;
            var13 = var6.uploadCount;
            var9 = null;
            var12 = var9 != var10;
            var _closure2_slot6 = var12;
            var6 = _closure1_slot8;
            var6 = var6.PHOTO;
            if(!(var6 !== var22)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var6 = _closure1_slot9;
            var6 = var6.IMAGE;
            if(!(var6 !== var22)) { _fun0003_ip = 29; continue _fun0003 }
case 31:
            var6 = _closure1_slot8;
            var6 = var6.VIDEO;
            if(!(var6 !== var22)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var6 = _closure1_slot9;
            var6 = var6.VIDEO;
            var16 = undefined;
            if(!(var6 === var22)) { _fun0003_ip = 34; continue _fun0003 }
case 32:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var6 = 14;
            var17 = var25[var6];
            var17 = var24.bind(var4)(var17);
            var23 = var17.intl;
            var17 = var23.string;
            var6 = var25[var6];
            var6 = var24.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.FlNoSU;
            var16 = var17.bind(var23)(var6);
            _fun0003_ip = 34; continue _fun0003;
case 29:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var6 = 14;
            var17 = var25[var6];
            var17 = var24.bind(var4)(var17);
            var23 = var17.intl;
            var17 = var23.string;
            var6 = var25[var6];
            var6 = var24.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.SkfkEB;
            var16 = var17.bind(var23)(var6);
case 34:
            var6 = _closure1_slot8;
            var6 = var6.VIDEO;
            if(!(var6 !== var22)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var6 = _closure1_slot9;
            var6 = var6.VIDEO;
            if(!(var6 !== var22)) { _fun0003_ip = 35; continue _fun0003 }
case 37:
            var6 = _closure1_slot8;
            var6 = var6.PHOTO;
            if(!(var6 !== var22)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var6 = _closure1_slot9;
            var17 = var6.IMAGE;
            var6 = null;
            if(!(var17 === var22)) { _fun0003_ip = 40; continue _fun0003 }
case 38:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var17 = 16;
            var17 = var23[var17];
            var23 = var22.bind(var4)(var17);
            var22 = var23.getType;
            var17 = var19.uri;
            var22 = var22.bind(var23)(var17);
            var17 = 'image/gif';
            var6 = null;
            if(!(var17 === var22)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var23 = _closure1_slot10;
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var17 = 17;
            var17 = var24[var17];
            var17 = var22.bind(var4)(var17);
            var22 = var17.Caption;
            var17 = {};
            var24 = var18.mediaKeyboardItemLabelContainer;
            var17['style'] = var24;
            var24 = 'GIF';
            var17['label'] = var24;
            var6 = var23.bind(var4)(var22, var17);
            _fun0003_ip = 40; continue _fun0003;
case 35:
            var23 = _closure1_slot10;
            var22 = _closure1_slot14;
            var17 = {};
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var24 = 15;
            var24 = var26[var24];
            var26 = var25.bind(var4)(var24);
            var25 = var26.getTimeFormat;
            var24 = var19.playableDuration;
            var24 = var25.bind(var26)(var24);
            var17['label'] = var24;
            var6 = var23.bind(var4)(var22, var17);
case 40:
            var17 = !var12;
            if(var12) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var1 = var13 >= var1;
            if(!var1) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var1 = var21;
case 44:
            if(var1) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var1 = var14;
case 46:
            var17 = var1;
case 42:
            var22 = _closure1_slot10;
            var25 = _closure1_slot1;
            var26 = _closure1_slot2;
            var1 = 5;
            var1 = var26[var1];
            var1 = var25.bind(var4)(var1);
            var14 = var1.View;
            var1 = {};
            var21 = var18.checkIconContainer;
            var1['style'] = var21;
            var21 = 9;
            var21 = var26[var21];
            var24 = var25.bind(var4)(var21);
            var23 = {};
            var21 = 18;
            var21 = var26[var21];
            var21 = var25.bind(var4)(var21);
            var23['source'] = var21;
            var21 = false;
            var23['disableColor'] = var21;
            var25 = var18.checkIcon;
            var25 = var25.color;
            var23['color'] = var25;
            var25 = var18.checkIcon;
            var23['style'] = var25;
            var23 = var22.bind(var4)(var24, var23);
            var1['children'] = var23;
            var14 = var22.bind(var4)(var14, var1);
            var1 = _closure1_slot21;
            var15 = var1.bind(var4)(var15, var2, var3);
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var22 = 'imagebutton';
            var1['accessibilityRole'] = var22;
            var1['accessibilityLabel'] = var16;
            var16 = {};
            var16['selected'] = var12;
            var16['disabled'] = var21;
            var1['accessibilityState'] = var16;
            var5 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideNativeMenu;
                    var2 = var2.bind(var3)();
                    var4 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0006_ip = 26; continue _fun0006 }
case 48:
                    var5 = _closure2_slot3;
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot6;
                    var2 = var5.bind(var1)(var4, var3, var2);
case 26:
                    return var1;
                }
            };
            var1['onPress'] = var5;
            var1['disabled'] = var17;
            var16 = var18.imageContainer;
            var5 = new Array(3);
            var5[0] = var16;
            var16 = undefined;
            if(!var17) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var16 = var18.imageDisabled;
case 49:
            var5[1] = var16;
            var5[2] = var15;
            var1['style'] = var5;
            var16 = _closure1_slot10;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var5 = 20;
            var5 = var17[var5];
            var15 = var15.bind(var4)(var5);
            var5 = {'resizeMode': 'cover', 'resizeMethod': 'resize'};
            var21 = var18.image;
            var17 = new Array(2);
            var17[0] = var21;
            var21 = {};
            var21['height'] = var20;
            var21['width'] = var20;
            var17[1] = var21;
            var5['style'] = var17;
            var17 = {};
            var21 = var19.uri;
            var17['uri'] = var21;
            var17['width'] = var20;
            var17['height'] = var20;
            var21 = 'force-cache';
            var17['cache'] = var21;
            var5['source'] = var17;
            var17 = {};
            var19 = var19.uri;
            var17['uri'] = var19;
            var17['width'] = var20;
            var17['height'] = var20;
            var5['localImageSource'] = var17;
            var15 = var16.bind(var4)(var15, var5);
            var5 = new Array(5);
            var5[0] = var15;
            var5[1] = var6;
            var6 = null;
            if(!var12) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var17 = _closure1_slot10;
            var16 = _closure1_slot4;
            var15 = {};
            var19 = var18.selectedOverlay;
            var18 = new Array(2);
            var18[0] = var19;
            var19 = {};
            var19['height'] = var20;
            var19['width'] = var20;
            var18[1] = var19;
            var15['style'] = var18;
            var6 = var17.bind(var4)(var16, var15);
case 51:
            var5[2] = var6;
            var6 = null;
            if(!var12) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var6 = var14;
case 53:
            var5[3] = var6;
            var6 = null;
            if(!var12) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var12 = 1;
            var6 = null;
            if(!(var12 === var13)) { _fun0003_ip = 55; continue _fun0003 }
case 57:
            var6 = null;
            if(!var8) { _fun0003_ip = 55; continue _fun0003 }
case 58:
            var9 = _closure1_slot10;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 21;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['channelId'] = var11;
            var7['upload'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 55:
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var11;
    var11 = function MediaKeyboardDummy(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var10 = var1.size;
            var7 = var1.isFirstInRow;
            var1 = _closure1_slot13;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot10;
            var2 = _closure1_slot4;
            var1 = {};
            var9 = var8.imageContainer;
            var6 = new Array(2);
            var6[0] = var9;
            var7 = !var7;
            if(!var7) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var9 = {};
            var11 = 4;
            var9['marginLeft'] = var11;
            var7 = var9;
case 59:
            var6[1] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot10;
            var6 = _closure1_slot4;
            var5 = {};
            var9 = var8.image;
            var8 = new Array(2);
            var8[0] = var9;
            var9 = {};
            var9['height'] = var10;
            var9['width'] = var10;
            var8[1] = var9;
            var5['style'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var11;
    var9 = var7[var9];
    var12 = var8.bind(var1)(var9);
    var11 = var12.createStyleProperties;
    var9 = {};
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var9['backgroundColor'] = var15;
    var13 = var7[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.REDESIGN_BUTTON_TERTIARY_PRESSED_BACKGROUND;
    var9['pressedBackgroundColor'] = var13;
    var9 = var11.bind(var12)(var9);
    var _closure1_slot17 = var9;
    var9 = {};
    var11 = 'function MediaKeyboardItemTsx1(){const{withTiming,interpolateColor,pressed,backgroundColor,pressedBackgroundColor,Easing}=this.__closure;return{backgroundColor:withTiming(interpolateColor(pressed.get(),[0,1],[backgroundColor,pressedBackgroundColor]),{duration:200,easing:Easing.out(Easing.quad)})};}';
    var9['code'] = var11;
    var _closure1_slot18 = var9;
    var9 = function MediaKeyboardSpecialButton(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var11 = var1.size;
            var6 = var1.onPress;
            var9 = var1.disabled;
            var13 = var1.accessibilityLabel;
            var5 = var1.children;
            var14 = var1.index;
            var7 = var1.totalNumItems;
            var3 = var1.numItemsPerRow;
            var2 = _closure1_slot13;
            var4 = undefined;
            var8 = var2.bind(var4)();
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var17 = 5;
            var2 = var19[var17];
            var15 = var18.bind(var4)(var2);
            var10 = var15.useSharedValue;
            var2 = 0;
            var22 = var10.bind(var15)(var2);
            var _closure2_slot0 = var22;
            var2 = _closure1_slot17;
            var2 = var2.bind(var4)();
            var21 = var2.backgroundColor;
            var _closure2_slot1 = var21;
            var20 = var2.pressedBackgroundColor;
            var _closure2_slot2 = var20;
            var2 = var19[var17];
            var15 = var18.bind(var4)(var2);
            var10 = var15.useAnimatedStyle;
            var2 = function h() {
                var1 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 22;
                var2 = var11[var2];
                var9 = undefined;
                var5 = var10.bind(var9)(var2);
                var4 = var5.withTiming;
                var6 = 5;
                var2 = var11[var6];
                var12 = var10.bind(var9)(var2);
                var8 = var12.interpolateColor;
                var7 = _closure2_slot0;
                var3 = var7.get;
                var7 = var3.bind(var7)();
                var13 = _closure2_slot1;
                var3 = new Array(2);
                var3[0] = var13;
                var2 = _closure2_slot2;
                var3[1] = var2;
                var2 = [0, 1];
                var3 = var8.bind(var12)(var7, var2, var3);
                var2 = {};
                var7 = 200;
                var2['duration'] = var7;
                var7 = var11[var6];
                var7 = var10.bind(var9)(var7);
                var8 = var7.Easing;
                var7 = var8.out;
                var6 = var11[var6];
                var6 = var10.bind(var9)(var6);
                var6 = var6.Easing;
                var6 = var6.quad;
                var6 = var7.bind(var8)(var6);
                var2['easing'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                var1['backgroundColor'] = var2;
                return var1;
            };
            var16 = {};
            var23 = 22;
            var23 = var19[var23];
            var23 = var18.bind(var4)(var23);
            var23 = var23.withTiming;
            var16['withTiming'] = var23;
            var23 = var19[var17];
            var23 = var18.bind(var4)(var23);
            var23 = var23.interpolateColor;
            var16['interpolateColor'] = var23;
            var16['pressed'] = var22;
            var16['backgroundColor'] = var21;
            var16['pressedBackgroundColor'] = var20;
            var17 = var19[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.Easing;
            var16['Easing'] = var17;
            var2['__closure'] = var16;
            var16 = 15924448581794.0;
            var2['__workletHash'] = var16;
            var16 = _closure1_slot18;
            var2['__initData'] = var16;
            var10 = var10.bind(var15)(var2);
            var2 = _closure1_slot21;
            var7 = var2.bind(var4)(var14, var3, var7);
            var3 = _closure1_slot10;
            var2 = _closure1_slot12;
            var1 = {};
            var1['disabled'] = var9;
            var14 = 'imagebutton';
            var1['accessibilityRole'] = var14;
            var1['accessibilityLabel'] = var13;
            var13 = function onPressIn() {
                var3 = _closure2_slot0;
                var2 = var3.set;
                var1 = 1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1['onPressIn'] = var13;
            var12 = function onPressOut() {
                var3 = _closure2_slot0;
                var2 = var3.set;
                var1 = 0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1['onPressOut'] = var12;
            var1['onPress'] = var6;
            var6 = new Array(6);
            var6[0] = var10;
            var10 = var8.imageContainer;
            var6[1] = var10;
            var10 = var8.specialButton;
            var6[2] = var10;
            var10 = {};
            var10['width'] = var11;
            var10['height'] = var11;
            var6[3] = var10;
            var6[4] = var7;
            var7 = undefined;
            if(!var9) { _fun0008_ip = 61; continue _fun0008 }
case 62:
            var7 = var8.disabled;
case 61:
            var6[5] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var9;
    var9 = var10.memo;
    var6 = function(arg1) {
        var1 = arg1;
        var5 = var1.items;
        var3 = var1.channel;
        var _closure2_slot0 = var3;
        var3 = var1.draftType;
        var _closure2_slot1 = var3;
        var3 = var1.onSelectItem;
        var _closure2_slot2 = var3;
        var3 = var1.rowIndex;
        var _closure2_slot3 = var3;
        var3 = var1.totalNumItems;
        var _closure2_slot4 = var3;
        var7 = var1.numPerRow;
        var _closure2_slot5 = var7;
        var3 = var1.includedUploadIds;
        var _closure2_slot6 = var3;
        var3 = var1.showRemixButton;
        var _closure2_slot7 = var3;
        var3 = var1.uploadLimit;
        var _closure2_slot8 = var3;
        var3 = var1.disableWhenReachedLimit;
        var _closure2_slot9 = var3;
        var3 = var1.handleCameraPress;
        var _closure2_slot10 = var3;
        var1 = var1.disabled;
        var _closure2_slot11 = var1;
        var3 = _closure1_slot13;
        var4 = undefined;
        var6 = var3.bind(var4)();
        var3 = _closure1_slot6;
        var3 = var3.bind(var4)();
        var8 = var3.width;
        var3 = 1;
        var10 = var7 - var3;
        var9 = 24;
        var3 = 4;
        var3 = var3 * var10;
        var3 = var9 + var3;
        var3 = var8 - var3;
        var3 = var3 / var7;
        var _closure2_slot12 = var3;
        var3 = var5.map;
        var2 = function(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var7 = arg1;
                var6 = arg2;
                var1 = null;
                if(!(var1 != var7)) { _fun0009_ip = 63; continue _fun0009 }
case 5:
                var1 = _closure1_slot20;
                var5 = undefined;
                var1 = var1.bind(var5)(var7);
                var4 = _closure1_slot10;
                if(var1) { _fun0009_ip = 64; continue _fun0009 }
case 65:
                var2 = _closure1_slot15;
                var1 = {};
                var8 = _closure2_slot0;
                var8 = var8.id;
                var1['channelId'] = var8;
                var8 = _closure2_slot1;
                var1['draftType'] = var8;
                var10 = _closure2_slot3;
                var8 = _closure2_slot5;
                var10 = var10 * var8;
                var10 = var10 + var6;
                var1['index'] = var10;
                var10 = _closure2_slot4;
                var1['totalNumItems'] = var10;
                var1['numItemsPerRow'] = var8;
                var1['item'] = var7;
                var7 = _closure2_slot6;
                var1['includedUploadIds'] = var7;
                var7 = _closure2_slot7;
                var1['showRemixButton'] = var7;
                var7 = _closure2_slot8;
                var1['uploadLimit'] = var7;
                var7 = _closure2_slot9;
                var1['disableWhenReachedLimit'] = var7;
                var7 = _closure2_slot12;
                var1['size'] = var7;
                var7 = _closure2_slot2;
                var1['onSelectItem'] = var7;
                var3 = _closure2_slot11;
                var1['disabled'] = var3;
                var1 = var4.bind(var5)(var2, var1, var6);
                _fun0009_ip = 66; continue _fun0009;
case 64:
                var3 = _closure1_slot19;
                var2 = {};
                var7 = _closure2_slot12;
                var2['size'] = var7;
                var7 = _closure2_slot10;
                var2['onPress'] = var7;
                var7 = _closure2_slot11;
                var2['disabled'] = var7;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 14;
                var12 = var11[var7];
                var12 = var8.bind(var5)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var7 = var11[var7];
                var7 = var8.bind(var5)(var7);
                var7 = var7.t;
                var7 = var7.uje3Pz;
                var7 = var12.bind(var13)(var7);
                var2['accessibilityLabel'] = var7;
                var12 = _closure2_slot3;
                var7 = _closure2_slot5;
                var12 = var12 * var7;
                var12 = var12 + var6;
                var2['index'] = var12;
                var10 = _closure2_slot4;
                var2['totalNumItems'] = var10;
                var2['numItemsPerRow'] = var7;
                var7 = 23;
                var7 = var11[var7];
                var7 = var8.bind(var5)(var7);
                var8 = var7.CameraIcon;
                var7 = {};
                var10 = _closure1_slot1;
                var9 = 7;
                var9 = var11[var9];
                var9 = var10.bind(var5)(var9);
                var9 = var9.colors;
                var9 = var9.ICON_SECONDARY;
                var7['color'] = var9;
                var9 = 'lg';
                var7['size'] = var9;
                var7 = var4.bind(var5)(var8, var7);
                var2['children'] = var7;
                var1 = var4.bind(var5)(var3, var2, var6);
case 66:
                _fun0009_ip = 67; continue _fun0009;
case 63:
                var5 = _closure1_slot10;
                var4 = _closure1_slot16;
                var3 = {};
                var2 = _closure2_slot12;
                var3['size'] = var2;
                var2 = 0;
                var2 = var2 === var6;
                var3['isFirstInRow'] = var2;
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3, var6);
case 67:
                return var1;
            }
        };
        var5 = var3.bind(var5)(var2);
        var3 = _closure1_slot10;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var6.container;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var6 = var9.bind(var10)(var6);
    var7 = var7[var5];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/media_keyboard/native/components/MediaKeyboardItem.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['PARENT_PADDING'] = var5;
    var3['CHILD_PADDING'] = var4;
    var3['SEPARATOR_SIZE'] = var4;
    var3['isMediaCameraNode'] = var2;
    return var1;
})();
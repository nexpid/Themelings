// app/modules/media_keyboard/native/components/MediaKeyboardItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var10;
    var2 = function isSpecialMediaGridNode(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = 'type';
            var1 = var1 in var2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = ['allphotos', 'attach', 'camera'];
            var3 = var4.includes;
            var2 = var2.type;
            var1 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot16 = var2;
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
    var _closure1_slot17 = var1;
    var1 = function NewCaption(arg1) {
        var1 = arg1;
        var9 = var1.label;
        var7 = var1.style;
        var10 = var1.textStyle;
        var1 = _closure1_slot12;
        var4 = undefined;
        var13 = var1.bind(var4)();
        var3 = _closure1_slot10;
        var2 = _closure1_slot4;
        var1 = {};
        var8 = var13.labelContainer;
        var5 = new Array(2);
        var5[0] = var8;
        var5[1] = var7;
        var1['style'] = var5;
        var12 = _closure1_slot9;
        var7 = _closure1_slot0;
        var11 = _closure1_slot2;
        var5 = 9;
        var5 = var11[var5];
        var5 = var7.bind(var4)(var5);
        var8 = var5.Icon;
        var5 = {};
        var15 = _closure1_slot1;
        var14 = 10;
        var14 = var11[var14];
        var14 = var15.bind(var4)(var14);
        var5['source'] = var14;
        var13 = var13.icon;
        var5['style'] = var13;
        var8 = var12.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot9;
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
    var _closure1_slot18 = var1;
    var1 = function MediaKeyboardImage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var17 = var4.draftType;
            var _closure2_slot0 = var17;
            var22 = var4.item;
            var _closure2_slot1 = var22;
            var11 = var4.index;
            var3 = var4.totalNumItems;
            var2 = var4.numItemsPerRow;
            var15 = var4.size;
            var23 = var4.channelId;
            var _closure2_slot2 = var23;
            var21 = var4.onPressItem;
            var _closure2_slot3 = var21;
            var18 = var4.onLongPressItem;
            var _closure2_slot4 = var18;
            var7 = var4.disabled;
            var1 = var4.includedUploadIds;
            var _closure2_slot5 = var1;
            var19 = var4.uploadLimit;
            var14 = var4.disableWhenReachedLimit;
            var6 = _closure1_slot12;
            var4 = undefined;
            var13 = var6.bind(var4)();
            var6 = var22.node;
            var16 = var6.image;
            var _closure2_slot6 = var16;
            var20 = var6.type;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 12;
            var6 = var9[var6];
            var12 = var8.bind(var4)(var6);
            var9 = var12.useStateFromStoresObject;
            var6 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = new Array(4);
            var6[0] = var23;
            var6[1] = var17;
            var6[2] = var16;
            var6[3] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var8 = _closure1_slot6;
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
                            var1 = _closure2_slot6;
                            var1 = var2.bind(var5)(var1, var3);
                            if(!var1) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                            var5 = _closure2_slot5;
                            var2 = null;
                            var2 = var2 == var5;
                            if(var2) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                            var5 = _closure2_slot5;
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
                    var2 = _closure2_slot5;
                    var5 = null;
                    var6 = var5 == var2;
                    var2 = undefined;
                    if(var6) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var6 = _closure2_slot5;
                    var2 = var6.length;
case 26:
                    if(!(var5 == var2)) { _fun0004_ip = 6; continue _fun0004 }
case 28:
                    var6 = _closure1_slot6;
                    var5 = var6.getUploadCount;
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot0;
                    var2 = var5.bind(var6)(var4, var3);
case 6:
                    var1['uploadCount'] = var2;
                    return var1;
                }
            };
            var1 = var9.bind(var12)(var8, var1, var6);
            var8 = var1.upload;
            var1 = var1.uploadCount;
            var6 = null;
            var8 = var6 != var8;
            var _closure2_slot7 = var8;
            var17 = _closure1_slot3;
            var12 = var17.useMemo;
            var9 = new Array(5);
            var9[0] = var23;
            var9[1] = var22;
            var9[2] = var8;
            var9[3] = var21;
            var9[4] = var18;
            var5 = function() {
                var1 = {};
                var3 = function onPress() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideNativeMenu;
                    var2 = var2.bind(var3)();
                    var3 = _closure2_slot3;
                    var2 = {};
                    var5 = _closure2_slot2;
                    var2['channelId'] = var5;
                    var5 = _closure2_slot1;
                    var2['item'] = var5;
                    var4 = _closure2_slot7;
                    var2['isIncluded'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onPress'] = var3;
                var2 = function onLongPress() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hideNativeMenu;
                        var2 = var2.bind(var3)();
                        var3 = _closure2_slot4;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                        var3 = _closure2_slot4;
                        var2 = {};
                        var5 = _closure2_slot2;
                        var2['channelId'] = var5;
                        var5 = _closure2_slot1;
                        var2['item'] = var5;
                        var4 = _closure2_slot7;
                        var2['isIncluded'] = var4;
                        var2 = var3.bind(var1)(var2);
case 29:
                        return var1;
                    }
                };
                var1['onLongPress'] = var2;
                return var1;
            };
            var5 = var12.bind(var17)(var5, var9);
            var12 = var5.onPress;
            var5 = var5.onLongPress;
            var9 = _closure1_slot7;
            var9 = var9.PHOTO;
            if(!(var9 !== var20)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var9 = _closure1_slot8;
            var9 = var9.IMAGE;
            if(!(var9 !== var20)) { _fun0003_ip = 31; continue _fun0003 }
case 33:
            var9 = _closure1_slot7;
            var9 = var9.VIDEO;
            if(!(var9 !== var20)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var9 = _closure1_slot8;
            var9 = var9.VIDEO;
            var18 = undefined;
            if(!(var9 === var20)) { _fun0003_ip = 36; continue _fun0003 }
case 34:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var9 = 15;
            var17 = var23[var9];
            var17 = var22.bind(var4)(var17);
            var21 = var17.intl;
            var17 = var21.string;
            var9 = var23[var9];
            var9 = var22.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.FlNoSV;
            var18 = var17.bind(var21)(var9);
            _fun0003_ip = 36; continue _fun0003;
case 31:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var9 = 15;
            var17 = var23[var9];
            var17 = var22.bind(var4)(var17);
            var21 = var17.intl;
            var17 = var21.string;
            var9 = var23[var9];
            var9 = var22.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.SkfkEJ;
            var18 = var17.bind(var21)(var9);
case 36:
            var9 = _closure1_slot7;
            var9 = var9.VIDEO;
            if(!(var9 !== var20)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var9 = _closure1_slot8;
            var9 = var9.VIDEO;
            if(!(var9 !== var20)) { _fun0003_ip = 37; continue _fun0003 }
case 39:
            var9 = _closure1_slot7;
            var9 = var9.PHOTO;
            if(!(var9 !== var20)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var9 = _closure1_slot8;
            var17 = var9.IMAGE;
            var9 = null;
            if(!(var17 === var20)) { _fun0003_ip = 42; continue _fun0003 }
case 40:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var17 = 17;
            var17 = var21[var17];
            var21 = var20.bind(var4)(var17);
            var20 = var21.getType;
            var17 = var16.uri;
            var20 = var20.bind(var21)(var17);
            var17 = 'image/gif';
            var9 = null;
            if(!(var17 === var20)) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var21 = _closure1_slot9;
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var17 = 18;
            var17 = var22[var17];
            var17 = var20.bind(var4)(var17);
            var20 = var17.Caption;
            var17 = {};
            var22 = var13.mediaKeyboardItemLabelContainer;
            var17['style'] = var22;
            var22 = 'GIF';
            var17['label'] = var22;
            var9 = var21.bind(var4)(var20, var17);
            _fun0003_ip = 42; continue _fun0003;
case 37:
            var21 = _closure1_slot9;
            var20 = _closure1_slot18;
            var17 = {};
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 16;
            var22 = var24[var22];
            var24 = var23.bind(var4)(var22);
            var23 = var24.getTimeFormat;
            var22 = var16.playableDuration;
            var22 = var23.bind(var24)(var22);
            var17['label'] = var22;
            var9 = var21.bind(var4)(var20, var17);
case 42:
            var17 = !var8;
            if(var8) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var1 = var1 >= var19;
            if(!var1) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var1 = var14;
case 46:
            if(var1) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var1 = var7;
case 48:
            var17 = var1;
case 44:
            var19 = _closure1_slot9;
            var24 = _closure1_slot1;
            var25 = _closure1_slot2;
            var1 = 5;
            var1 = var25[var1];
            var1 = var24.bind(var4)(var1);
            var7 = var1.View;
            var1 = {};
            var14 = var13.checkIconContainer;
            var1['style'] = var14;
            var22 = _closure1_slot9;
            var21 = _closure1_slot0;
            var14 = 9;
            var20 = var25[var14];
            var20 = var21.bind(var4)(var20);
            var21 = var20.Icon;
            var20 = {};
            var23 = 19;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var20['source'] = var23;
            var23 = false;
            var20['disableColor'] = var23;
            var23 = var13.checkIcon;
            var23 = var23.color;
            var20['color'] = var23;
            var23 = var13.checkIcon;
            var20['style'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var1['children'] = var20;
            var7 = var19.bind(var4)(var7, var1);
            var1 = _closure1_slot17;
            var11 = var1.bind(var4)(var11, var2, var3);
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var19 = 'button';
            var1['accessibilityRole'] = var19;
            var1['accessibilityLabel'] = var18;
            var18 = {};
            var18['selected'] = var8;
            var1['accessibilityState'] = var18;
            var1['onPress'] = var12;
            var1['onLongPress'] = var5;
            var1['disabled'] = var17;
            var12 = var13.imageContainer;
            var5 = new Array(3);
            var5[0] = var12;
            var12 = undefined;
            if(!var17) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var12 = var13.imageDisabled;
case 50:
            var5[1] = var12;
            var5[2] = var11;
            var1['style'] = var5;
            var12 = _closure1_slot9;
            var11 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var14];
            var5 = var11.bind(var4)(var5);
            var11 = var5.ThumbnailImage;
            var5 = {'resizeMode': 'cover', 'resizeMethod': 'resize'};
            var17 = var13.image;
            var14 = new Array(2);
            var14[0] = var17;
            var17 = {};
            var17['height'] = var15;
            var17['width'] = var15;
            var14[1] = var17;
            var5['style'] = var14;
            var14 = {};
            var17 = var16.uri;
            var14['uri'] = var17;
            var14['width'] = var15;
            var14['height'] = var15;
            var17 = 'force-cache';
            var14['cache'] = var17;
            var5['source'] = var14;
            var14 = {};
            var16 = var16.uri;
            var14['uri'] = var16;
            var14['width'] = var15;
            var14['height'] = var15;
            var5['localImageSource'] = var14;
            var11 = var12.bind(var4)(var11, var5);
            var5 = new Array(4);
            var5[0] = var11;
            var5[1] = var9;
            var9 = null;
            if(!var8) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var12 = _closure1_slot9;
            var11 = _closure1_slot4;
            var10 = {};
            var14 = var13.selectedOverlay;
            var13 = new Array(2);
            var13[0] = var14;
            var14 = {};
            var14['height'] = var15;
            var14['width'] = var15;
            var13[1] = var14;
            var10['style'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 52:
            var5[2] = var9;
            var6 = null;
            if(!var8) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var6 = var7;
case 54:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function MediaKeyboardSpecialButton(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
            var2 = _closure1_slot12;
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
            var2 = _closure1_slot14;
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
                var2 = 20;
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
            var23 = 20;
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
            var16 = _closure1_slot15;
            var2['__initData'] = var16;
            var10 = var10.bind(var15)(var2);
            var2 = _closure1_slot17;
            var7 = var2.bind(var4)(var14, var3, var7);
            var3 = _closure1_slot9;
            var2 = _closure1_slot11;
            var1 = {};
            var1['disabled'] = var9;
            var14 = 'button';
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
            if(!var9) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var7 = var8.disabled;
case 56:
            var6[5] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 0;
    var6 = var10[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var11 = var5.bind(var1)(var6);
    var _closure1_slot3 = var11;
    var5 = 1;
    var5 = var10[var5];
    var5 = var9.bind(var1)(var5);
    var6 = var5.View;
    var _closure1_slot4 = var6;
    var8 = var5.Pressable;
    var _closure1_slot5 = var8;
    var18 = var5.StyleSheet;
    var5 = 2;
    var5 = var10[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var10[var5];
    var5 = var9.bind(var1)(var5);
    var6 = var5.ALAssetsType;
    var _closure1_slot7 = var6;
    var5 = var5.DeviceMediaType;
    var _closure1_slot8 = var5;
    var5 = 4;
    var6 = var10[var5];
    var6 = var9.bind(var1)(var6);
    var7 = var6.jsx;
    var _closure1_slot9 = var7;
    var6 = var6.jsxs;
    var _closure1_slot10 = var6;
    var6 = 5;
    var6 = var10[var6];
    var7 = var14.bind(var1)(var6);
    var6 = var7.createAnimatedComponent;
    var6 = var6.bind(var7)(var8);
    var _closure1_slot11 = var6;
    var7 = 6;
    var6 = var10[var7];
    var15 = var9.bind(var1)(var6);
    var12 = var15.createStyles;
    var8 = {};
    var6 = {'flexDirection': 'row', 'paddingHorizontal': 12, 'alignItems': 'center'};
    var8['container'] = var6;
    var6 = {};
    var13 = 7;
    var16 = var10[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.MOBILE_KEYBOARD_PANEL_BACKGROUND;
    var6['backgroundColor'] = var16;
    var8['image'] = var6;
    var6 = {'borderRadius': null, 'overflow': 'hidden', 'position': 'relative'};
    var16 = var10[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var6['borderRadius'] = var16;
    var8['imageContainer'] = var6;
    var6 = {'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'borderRadius': null, 'paddingHorizontal': 5, 'paddingVertical': 4, 'position': 'absolute', 'left': 8, 'bottom': 8};
    var17 = 8;
    var16 = var10[var17];
    var21 = var9.bind(var1)(var16);
    var20 = var21.hexWithOpacity;
    var16 = var10[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var19 = var16.PRIMARY_700;
    var16 = 0.6;
    var16 = var20.bind(var21)(var19, var16);
    var6['backgroundColor'] = var16;
    var16 = var10[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var6['borderRadius'] = var16;
    var8['labelContainer'] = var6;
    var6 = {};
    var16 = 10;
    var6['right'] = var16;
    var8['mediaKeyboardItemLabelContainer'] = var6;
    var6 = {'width': 12, 'height': 12, 'tintColor': null, 'marginEnd': 4};
    var16 = var10[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.WHITE;
    var6['tintColor'] = var16;
    var8['icon'] = var6;
    var6 = {'width': 14, 'height': 14};
    var16 = var10[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BRAND;
    var6['color'] = var16;
    var8['checkIcon'] = var6;
    var16 = {'width': 24, 'height': 24, 'position': 'absolute', 'justifyContent': 'center', 'alignItems': 'center', 'right': 6, 'top': 6, 'borderRadius': null, 'backgroundColor': null, 'borderWidth': 1};
    var6 = 24;
    var19 = var10[var13];
    var19 = var14.bind(var1)(var19);
    var19 = var19.radii;
    var19 = var19.round;
    var16['borderRadius'] = var19;
    var19 = var10[var13];
    var19 = var14.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.WHITE;
    var16['backgroundColor'] = var19;
    var19 = var10[var17];
    var22 = var9.bind(var1)(var19);
    var21 = var22.hexWithOpacity;
    var19 = var10[var13];
    var19 = var14.bind(var1)(var19);
    var19 = var19.unsafe_rawColors;
    var20 = var19.BLACK;
    var19 = 0.1;
    var19 = var21.bind(var22)(var20, var19);
    var16['borderColor'] = var19;
    var8['checkIconContainer'] = var16;
    var16 = {};
    var24 = var18.absoluteFillObject;
    var25 = var16;
    var18 = copyDataProperties(var25, var24);
    var18 = var10[var13];
    var18 = var14.bind(var1)(var18);
    var18 = var18.radii;
    var19 = var18.xs;
    var18 = 'borderRadius';
    var16[17] = var19;
    var17 = var10[var17];
    var20 = var9.bind(var1)(var17);
    var19 = var20.hexWithOpacity;
    var17 = var10[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var18 = var17.BLACK;
    var17 = 0.3;
    var18 = var19.bind(var20)(var18, var17);
    var17 = 'backgroundColor';
    var16[16] = var18;
    var8['selectedOverlay'] = var16;
    var16 = {'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center', 'gap': 8};
    var8['specialButton'] = var16;
    var16 = {};
    var17 = 0.4;
    var16['opacity'] = var17;
    var8['disabled'] = var16;
    var16 = {};
    var17 = 0.2;
    var16['opacity'] = var17;
    var8['imageDisabled'] = var16;
    var8 = var12.bind(var15)(var8);
    var _closure1_slot12 = var8;
    var8 = function MediaKeyboardDummy(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var10 = var1.size;
            var7 = var1.isFirstInRow;
            var1 = _closure1_slot12;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var9 = var8.imageContainer;
            var6 = new Array(2);
            var6[0] = var9;
            var7 = !var7;
            if(!var7) { _fun0008_ip = 58; continue _fun0008 }
case 59:
            var9 = {};
            var11 = 4;
            var9['marginLeft'] = var11;
            var7 = var9;
case 58:
            var6[1] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot9;
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
    var _closure1_slot13 = var8;
    var7 = var10[var7];
    var12 = var9.bind(var1)(var7);
    var8 = var12.createStyleProperties;
    var7 = {};
    var15 = var10[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
    var7['backgroundColor'] = var15;
    var13 = var10[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.CONTROL_SECONDARY_BACKGROUND_ACTIVE;
    var7['pressedBackgroundColor'] = var13;
    var7 = var8.bind(var12)(var7);
    var _closure1_slot14 = var7;
    var7 = {};
    var8 = 'function MediaKeyboardItemTsx1(){const{withTiming,interpolateColor,pressed,backgroundColor,pressedBackgroundColor,Easing}=this.__closure;return{backgroundColor:withTiming(interpolateColor(pressed.get(),[0,1],[backgroundColor,pressedBackgroundColor]),{duration:200,easing:Easing.out(Easing.quad)})};}';
    var7['code'] = var8;
    var _closure1_slot15 = var7;
    var8 = var11.memo;
    var7 = function(arg1) {
        var1 = arg1;
        var5 = var1.items;
        var3 = var1.channel;
        var _closure2_slot0 = var3;
        var3 = var1.draftType;
        var _closure2_slot1 = var3;
        var3 = var1.onPressItem;
        var _closure2_slot2 = var3;
        var3 = var1.onLongPressItem;
        var _closure2_slot3 = var3;
        var3 = var1.rowIndex;
        var _closure2_slot4 = var3;
        var3 = var1.totalNumItems;
        var _closure2_slot5 = var3;
        var7 = var1.numPerRow;
        var _closure2_slot6 = var7;
        var3 = var1.includedUploadIds;
        var _closure2_slot7 = var3;
        var3 = var1.uploadLimit;
        var _closure2_slot8 = var3;
        var3 = var1.disableWhenReachedLimit;
        var _closure2_slot9 = var3;
        var14 = var1.handleCameraPress;
        var11 = var1.handleAttachPress;
        var13 = var1.handleViewAllPhotosPress;
        var1 = var1.disabled;
        var _closure2_slot10 = var1;
        var3 = _closure1_slot12;
        var4 = undefined;
        var6 = var3.bind(var4)();
        var8 = _closure1_slot1;
        var10 = _closure1_slot2;
        var3 = 21;
        var3 = var10[var3];
        var3 = var8.bind(var4)(var3);
        var3 = var3.bind(var4)();
        var9 = var3.width;
        var3 = 1;
        var12 = var7 - var3;
        var8 = 24;
        var3 = 4;
        var3 = var3 * var12;
        var3 = var8 + var3;
        var3 = var9 - var3;
        var3 = var3 / var7;
        var _closure2_slot11 = var3;
        var3 = {};
        var7 = {};
        var9 = _closure1_slot0;
        var12 = 15;
        var15 = var10[var12];
        var15 = var9.bind(var4)(var15);
        var15 = var15.t;
        var15 = var15.uje3P9;
        var7['text'] = var15;
        var7['onPress'] = var14;
        var14 = 22;
        var14 = var10[var14];
        var14 = var9.bind(var4)(var14);
        var14 = var14.CameraIcon;
        var7['Icon'] = var14;
        var3['camera'] = var7;
        var7 = {};
        var14 = var10[var12];
        var14 = var9.bind(var4)(var14);
        var14 = var14.t;
        var14 = var14.Zmm6dN;
        var7['text'] = var14;
        var7['onPress'] = var13;
        var13 = 23;
        var13 = var10[var13];
        var13 = var9.bind(var4)(var13);
        var13 = var13.ImageIcon;
        var7['Icon'] = var13;
        var3['allphotos'] = var7;
        var7 = {};
        var12 = var10[var12];
        var12 = var9.bind(var4)(var12);
        var12 = var12.t;
        var12 = var12["8Hvr3+"];
        var7['text'] = var12;
        var7['onPress'] = var11;
        var8 = var10[var8];
        var8 = var9.bind(var4)(var8);
        var8 = var8.AttachmentIcon;
        var7['Icon'] = var8;
        var3['attach'] = var7;
        var _closure2_slot12 = var3;
        var3 = var5.map;
        var2 = function(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = arg1;
                var5 = arg2;
                var2 = null;
                if(!(var2 != var1)) { _fun0009_ip = 60; continue _fun0009 }
case 5:
                var2 = _closure1_slot16;
                var4 = undefined;
                var2 = var2.bind(var4)(var1);
                if(var2) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                var6 = _closure1_slot9;
                var3 = _closure1_slot19;
                var2 = {};
                var7 = _closure2_slot0;
                var7 = var7.id;
                var2['channelId'] = var7;
                var7 = _closure2_slot1;
                var2['draftType'] = var7;
                var10 = _closure2_slot4;
                var7 = _closure2_slot6;
                var10 = var10 * var7;
                var10 = var10 + var5;
                var2['index'] = var10;
                var10 = _closure2_slot5;
                var2['totalNumItems'] = var10;
                var2['numItemsPerRow'] = var7;
                var2['item'] = var1;
                var7 = _closure2_slot7;
                var2['includedUploadIds'] = var7;
                var7 = _closure2_slot8;
                var2['uploadLimit'] = var7;
                var7 = _closure2_slot9;
                var2['disableWhenReachedLimit'] = var7;
                var7 = _closure2_slot11;
                var2['size'] = var7;
                var7 = _closure2_slot2;
                var2['onPressItem'] = var7;
                var7 = _closure2_slot3;
                var2['onLongPressItem'] = var7;
                var7 = _closure2_slot10;
                var2['disabled'] = var7;
                var2 = var6.bind(var4)(var3, var2, var5);
                return var2;
case 61:
                var2 = _closure2_slot12;
                var1 = var1.type;
                var6 = var2[var1];
                var3 = _closure1_slot9;
                var2 = _closure1_slot20;
                var1 = {};
                var7 = _closure2_slot11;
                var1['size'] = var7;
                var7 = var6.onPress;
                var1['onPress'] = var7;
                var7 = _closure2_slot10;
                var1['disabled'] = var7;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 15;
                var7 = var11[var7];
                var7 = var10.bind(var4)(var7);
                var12 = var7.intl;
                var10 = var12.string;
                var7 = var6.text;
                var7 = var10.bind(var12)(var7);
                var1['accessibilityLabel'] = var7;
                var10 = _closure2_slot4;
                var7 = _closure2_slot6;
                var10 = var10 * var7;
                var10 = var10 + var5;
                var1['index'] = var10;
                var8 = _closure2_slot5;
                var1['totalNumItems'] = var8;
                var1['numItemsPerRow'] = var7;
                var8 = _closure1_slot9;
                var7 = var6.Icon;
                var6 = {};
                var10 = _closure1_slot1;
                var9 = 7;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var9 = var9.colors;
                var9 = var9.ICON_SUBTLE;
                var6['color'] = var9;
                var9 = 'lg';
                var6['size'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var1['children'] = var6;
                var1 = var3.bind(var4)(var2, var1, var5);
                return var1;
case 60:
                var4 = _closure1_slot9;
                var3 = _closure1_slot13;
                var2 = {};
                var1 = _closure2_slot11;
                var2['size'] = var1;
                var1 = 0;
                var1 = var1 === var5;
                var2['isFirstInRow'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            }
        };
        var5 = var3.bind(var5)(var2);
        var3 = _closure1_slot9;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var6.container;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var7 = var8.bind(var11)(var7);
    var8 = 25;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/media_keyboard/native/components/MediaKeyboardItem.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['PARENT_PADDING'] = var6;
    var3['CHILD_PADDING'] = var5;
    var3['SEPARATOR_SIZE'] = var5;
    var5 = function isMediaCameraNode(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var1 = 'type';
            var1 = var1 in var2;
            if(!var1) { _fun0010_ip = 63; continue _fun0010 }
case 3:
            var3 = var2.type;
            var2 = 'camera';
            var1 = var2 === var3;
case 63:
            return var1;
        }
    };
    var3['isMediaCameraNode'] = var5;
    var5 = function isAttachFilesNode(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var1 = 'type';
            var1 = var1 in var2;
            if(!var1) { _fun0011_ip = 63; continue _fun0011 }
case 3:
            var3 = var2.type;
            var2 = 'attach';
            var1 = var2 === var3;
case 63:
            return var1;
        }
    };
    var3['isAttachFilesNode'] = var5;
    var4 = function isViewAllPhotosNode(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var1 = 'type';
            var1 = var1 in var2;
            if(!var1) { _fun0012_ip = 64; continue _fun0012 }
case 3:
            var3 = var2.type;
            var2 = 'allphotos';
            var1 = var2 === var3;
case 64:
            return var1;
        }
    };
    var3['isViewAllPhotosNode'] = var4;
    var3['isSpecialMediaGridNode'] = var2;
    return var1;
})();
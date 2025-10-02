// app/modules/stickers/native/StickerPickerListRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StickerAnimationSettings;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.ROW_HEIGHT;
    var10 = var4.STICKER_SIZE;
    var _closure1_slot7 = var10;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PADDING_VERTICAL;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between', 'overflow': 'hidden'};
    var9['height'] = var11;
    var4['row'] = var9;
    var9 = {};
    var9['height'] = var10;
    var9['width'] = var10;
    var4['stickerImage'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/native/StickerPickerListRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function StickerPickerListRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.containerWidth;
            var16 = var1.stickers;
            var _closure2_slot0 = var16;
            var15 = var1.rowSize;
            var2 = var1.onPressSticker;
            var _closure2_slot1 = var2;
            var2 = var1.focusedSticker;
            var _closure2_slot2 = var2;
            var2 = var1.setFocusedSticker;
            var _closure2_slot3 = var2;
            var2 = var1.channel;
            var _closure2_slot4 = var2;
            var3 = var1.nativeRow;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isAndroid;
            var3 = var1.bind(var2)();
case 2:
            var8 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var7 = undefined;
            var1 = _closure1_slot10;
            var1 = var1.bind(var4)();
            var8 = var1;
            _closure2_slot5 = var1;
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 10;
            var1 = var10[var1];
            var1 = var5.bind(var4)(var1);
            var5 = var1.AnimateStickers;
            var1 = var5.useSetting;
            var1 = var1.bind(var5)();
            _closure2_slot6 = var1;
            var1 = function handleOnPressSticker(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 11;
                    var3 = var6[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.triggerHapticFeedback;
                    var5 = _closure1_slot1;
                    var2 = 12;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot1;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
case 4:
                    return var1;
                }
            };
            _closure2_slot7 = var1;
            var1 = function handleOnLongPressSticker(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = var3.AnimateStickers;
                    var3 = var4.getSetting;
                    var4 = var3.bind(var4)();
                    var3 = _closure1_slot6;
                    var3 = var3.ANIMATE_ON_INTERACTION;
                    if(!(var4 === var3)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 11;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.triggerHapticFeedback;
                    var5 = _closure1_slot1;
                    var2 = 12;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 6; continue _fun0003 }
case 8:
                    var3 = _closure2_slot3;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
case 6:
                    return var1;
                }
            };
            _closure2_slot8 = var1;
            var14 = function rowTraits(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var9 = arg1;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var8 = undefined;
                    var7 = var2.bind(var8)(var1);
                    var6 = var7.shouldAnimateSticker;
                    var4 = _closure2_slot6;
                    var10 = var9.id;
                    var1 = _closure2_slot2;
                    var3 = null;
                    var11 = var3 == var1;
                    var1 = undefined;
                    if(var11) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var11 = _closure2_slot2;
                    var1 = var11.id;
case 9:
                    var1 = var10 === var1;
                    var4 = var6.bind(var7)(var4, var1);
                    var1 = new Array(3);
                    var1[0] = var4;
                    var4 = _closure2_slot4;
                    var4 = var3 == var4;
                    if(var4) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 14;
                    var6 = var10[var6];
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.isSendableSticker;
                    var6 = _closure1_slot5;
                    var5 = var6.getCurrentUser;
                    var6 = var5.bind(var6)();
                    var5 = _closure2_slot4;
                    var4 = var7.bind(var8)(var9, var6, var5);
case 11:
                    var1[1] = var4;
                    var2 = _closure2_slot1;
                    var2 = var3 == var2;
                    var1[2] = var2;
                    return var1;
                }
            };
            _closure2_slot9 = var14;
            var1 = new Array(0);
            if(var3) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            _closure2_slot10 = var1;
            var5 = function _loop() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot11;
                    var2 = var3[var2];
                    var _closure3_slot0 = var2;
                    var7 = undefined;
                    if(!(var7 !== var2)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                    var3 = _closure2_slot9;
                    var5 = var3.bind(var7)(var2);
                    var4 = _closure1_slot3;
                    var3 = 3;
                    var4 = var4.bind(var7)(var5, var3);
                    var3 = 0;
                    var12 = var4[var3];
                    var3 = 1;
                    var9 = var4[var3];
                    var3 = 2;
                    var11 = var4[var3];
                    var4 = _closure2_slot10;
                    var3 = var4.push;
                    var8 = _closure1_slot9;
                    var6 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var5 = 19;
                    var5 = var14[var5];
                    var5 = var6.bind(var7)(var5);
                    var6 = var5.PressableOpacity;
                    var5 = {};
                    var15 = 'button';
                    var5['accessibilityRole'] = var15;
                    var15 = var2.name;
                    var5['accessibilityLabel'] = var15;
                    var15 = _closure2_slot5;
                    var15 = var15.stickerImage;
                    var5['style'] = var15;
                    var5['disabled'] = var11;
                    var11 = function onPress() {
                        var3 = _closure2_slot7;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var5['onPress'] = var11;
                    var10 = function onLongPress() {
                        var3 = _closure2_slot8;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var5['onLongPress'] = var10;
                    var11 = _closure1_slot1;
                    var10 = 16;
                    var10 = var14[var10];
                    var11 = var11.bind(var7)(var10);
                    var10 = {};
                    var10['sticker'] = var2;
                    var13 = _closure1_slot7;
                    var10['size'] = var13;
                    var10['animated'] = var12;
                    var10['opaque'] = var9;
                    var9 = _closure2_slot11;
                    var9 = var8.bind(var7)(var11, var10, var9);
                    var5['children'] = var9;
                    var2 = var2.id;
                    var2 = var8.bind(var7)(var6, var5, var2);
                    var2 = var3.bind(var4)(var2);
                    return var7;
case 15:
                    var3 = _closure2_slot10;
                    var2 = var3.push;
                    var6 = _closure1_slot9;
                    var5 = _closure1_slot4;
                    var4 = {};
                    var8 = _closure2_slot5;
                    var8 = var8.stickerImage;
                    var4['style'] = var8;
                    var1 = _closure2_slot11;
                    var1 = var6.bind(var7)(var5, var4, var1);
                    var1 = var2.bind(var3)(var1);
                    var1 = 1;
                    return var1;
                }
            };
            var3 = 0;
            _closure2_slot11 = var3;
            var10 = var3 < var15;
            if(!var10) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var10 = var5.bind(var4)();
            var3 = var3 + 1;
            _closure2_slot11 = var3;
            if(var3 < var15) { _fun0001_ip = 18; continue _fun0001 }
case 17:
            var10 = _closure1_slot9;
            var5 = _closure1_slot4;
            var3 = {};
            var11 = var8;
            var11 = var11.row;
            var3['style'] = var11;
            var3['children'] = var1;
            var3 = var10.bind(var4)(var5, var3);
            return var3;
case 13:
            var7 = var1;
            var13 = 0;
            var17 = var13 < var15;
            var12 = 3;
            var11 = 1;
            var10 = 2;
            var5 = 16;
            var3 = 15;
            var1 = 0;
            if(!var17) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var26 = var16[var1];
            if(!(var4 === var26)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var19 = var7;
            var18 = var19.push;
            var17 = {'stickerId': null, 'stickerName': '', 'stickerType': null, 'stickerUrl': '', 'stickerAnimated': false, 'stickerDisabled': true, 'stickerOpaque': false};
            var21 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var3];
            var20 = var21.bind(var4)(var20);
            var20 = var20.StickerFormat;
            var20 = var20.PNG;
            var17['stickerType'] = var20;
            var17 = var18.bind(var19)(var17);
            _fun0001_ip = 23; continue _fun0001;
case 21:
            var18 = var14.bind(var4)(var26);
            var17 = _closure1_slot3;
            var17 = var17.bind(var4)(var18, var12);
            var22 = var17[var13];
            var20 = var17[var11];
            var21 = var17[var10];
            var19 = var7;
            var18 = var19.push;
            var17 = {};
            var23 = var26.id;
            var17['stickerId'] = var23;
            var23 = var26.name;
            var17['stickerName'] = var23;
            var23 = var26.format_type;
            var17['stickerType'] = var23;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var5];
            var25 = var24.bind(var4)(var23);
            var24 = var25.getStickerAssetUrl;
            var23 = _closure1_slot7;
            var23 = var24.bind(var25)(var26, var23, var22);
            var17['stickerUrl'] = var23;
            var17['stickerAnimated'] = var22;
            var17['stickerDisabled'] = var21;
            var17['stickerOpaque'] = var20;
            var17 = var18.bind(var19)(var17);
case 23:
            var1 = var1 + 1;
            if(var1 < var15) { _fun0001_ip = 20; continue _fun0001 }
case 19: // try_start_0
            var5 = _closure1_slot9;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 17;
            var1 = var10[var1];
            var3 = var3.bind(var4)(var1);
            var1 = {};
            var8 = var8.row;
            var1['style'] = var8;
            var8 = {};
            var8['rowContentWidth'] = var9;
            var9 = _closure1_slot8;
            var8['rowContentPaddingVertical'] = var9;
            var9 = _closure1_slot7;
            var8['itemSize'] = var9;
            var9 = var7;
            var8['items'] = var9;
            var1['rowData'] = var8;
            var8 = function onPressSticker(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot0;
                    var3 = var4.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.nativeEvent;
                        var1 = var1.stickerId;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                    var2 = _closure2_slot7;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 24:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPressSticker'] = var8;
            var8 = function onLongPressSticker(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot0;
                    var3 = var4.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.nativeEvent;
                        var1 = var1.stickerId;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                    var2 = _closure2_slot8;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 24:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onLongPressSticker'] = var8;
            var1 = var5.bind(var4)(var3, var1);
case 26: // try_end0
            return var1;
case 27: // catch_target0
            CatchBlockStart(arg_register=0);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 18;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.addBreadcrumb;
            var2 = {'message': 'Error in StickerPickerListRowNativeComponent', 'category': 'sticker'};
            var5 = {};
            var9 = var7;
            var7 = var9.length;
            var5['itemLength'] = var7;
            var8 = var9.filter;
            var7 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.stickerId;
                    var3 = null;
                    var1 = var3 == var1;
                    if(var1) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                    var4 = var2.stickerName;
                    var1 = var3 == var4;
case 28:
                    if(var1) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                    var2 = var2.stickerUrl;
                    var1 = var3 == var2;
case 30:
                    return var1;
                }
            };
            var8 = var8.bind(var9)(var7);
            var7 = var8.map;
            var6 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.stickerId;
                var1['stickerId'] = var3;
                var3 = var2.stickerName;
                var1['stickerName'] = var3;
                var2 = var2.stickerUrl;
                var1['stickerUrl'] = var2;
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var5['items'] = var6;
            var2['data'] = var5;
            var2 = var3.bind(var4)(var2);
            throw var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
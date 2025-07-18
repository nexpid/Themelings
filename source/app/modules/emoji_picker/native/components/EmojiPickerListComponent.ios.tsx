// app/modules/emoji_picker/native/components/EmojiPickerListComponent.ios.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
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
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ROW_HEIGHT;
    var _closure1_slot4 = var8;
    var8 = var4.LABEL_HEIGHT;
    var _closure1_slot5 = var8;
    var4 = var4.LABEL_MARGIN;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var2 = var6.categoryIndexActive;
            var _closure2_slot0 = var2;
            var2 = var6.data;
            var13 = var2.data;
            var5 = var2.headerIndices;
            var _closure2_slot1 = var5;
            var3 = var6.inActionSheet;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 49; continue _fun0001 }
 47:
            var3 = false;
 49:
            var2 = var6.onShowNitroUpsell;
            var11 = var6.paddingTop;
            var _closure2_slot2 = var11;
            var8 = var6.paddingBottom;
            var _closure2_slot3 = var8;
            var6 = var6.renderItem;
            var _closure2_slot4 = var4;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 3;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            if(var3) { _fun0001_ip = 119; continue _fun0001 }
 111:
            var3 = var7.FlashList;
            _fun0001_ip = 125; continue _fun0001;
 119:
            var3 = var7.BottomSheetFlashList;
 125:
            var16 = _closure1_slot3;
            var9 = var16.useRef;
            var7 = null;
            var7 = var9.bind(var16)(var7);
            _closure2_slot4 = var7;
            var10 = var16.useMemo;
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var8;
            var8 = function() {
                var1 = {};
                var3 = _closure2_slot2;
                var1['paddingTop'] = var3;
                var2 = _closure2_slot3;
                var1['paddingBottom'] = var2;
                return var1;
            };
            var14 = var10.bind(var16)(var8, var9);
            var10 = var16.useCallback;
            var9 = function(arg1) {
                var1 = arg1;
                var1 = var1.type;
                return var1;
            };
            var8 = new Array(0);
            var11 = var10.bind(var16)(var9, var8);
            var10 = var16.useCallback;
            var9 = function(arg1, arg2) {
                var1 = arg1;
                var5 = var1.type;
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var3 = '';
                var2 = '-';
                var1 = arg2;
                var1 = var4.bind(var3)(var5, var2, var1);
                return var1;
            };
            var8 = new Array(0);
            var10 = var10.bind(var16)(var9, var8);
            var15 = var16.useCallback;
            var9 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var1 = arg2;
                    var5 = var1.type;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 4;
                    var4 = var1[var7];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.EmojiPickerFlashListItemType;
                    var4 = var4.PLACEHOLDER;
                    if(!(var4 !== var5)) { _fun0002_ip = 256; continue _fun0002 }
 55:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.EmojiPickerFlashListItemType;
                    var4 = var4.TITLE;
                    if(!(var4 !== var5)) { _fun0002_ip = 236; continue _fun0002 }
 91:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.EmojiPickerFlashListItemType;
                    var4 = var4.EMOJI_ROW;
                    if(!(var4 !== var5)) { _fun0002_ip = 224; continue _fun0002 }
 124:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.EmojiPickerFlashListItemType;
                    var4 = var4.EMOJI_ROW_NSFW;
                    if(!(var4 !== var5)) { _fun0002_ip = 224; continue _fun0002 }
 157:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.EmojiPickerFlashListItemType;
                    var4 = var4.FOOTER_UPSELL;
                    if(!(var4 === var5)) { _fun0002_ip = 264; continue _fun0002 }
 190:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.EMOJI_PICKER_PREMIUM_UPSELL_HEIGHT;
                    var3['size'] = var4;
                    _fun0002_ip = 264; continue _fun0002;
 224:
                    var4 = _closure1_slot4;
                    var3['size'] = var4;
                    _fun0002_ip = 264; continue _fun0002;
 236:
                    var4 = _closure1_slot5;
                    var2 = _closure1_slot6;
                    var2 = var4 + var2;
                    var3['size'] = var2;
                    _fun0002_ip = 264; continue _fun0002;
 256:
                    var2 = 0;
                    var3['size'] = var2;
 264:
                    return var1;
                }
            };
            var8 = new Array(0);
            var8 = var15.bind(var16)(var9, var8);
            var15 = var16.useImperativeHandle;
            var9 = arg2;
            var1 = function() {
                var1 = {};
                var3 = function scrollToHeaderIndex(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = arg1;
                        var8 = var1.index;
                        var5 = var1.animated;
                        var1 = undefined;
                        if(!(var5 === var1)) { _fun0003_ip = 22; continue _fun0003 }
 20:
                        var5 = true;
 22:
                        var2 = _closure2_slot4;
                        var4 = var2.current;
                        var6 = null;
                        if(!(var6 != var4)) { _fun0003_ip = 82; continue _fun0003 }
 40:
                        var3 = var4.scrollToIndex;
                        var2 = {};
                        var7 = _closure2_slot1;
                        var7 = var7[var8];
                        var8 = var6 != var7;
                        var6 = 0;
                        if(!var8) { _fun0003_ip = 68; continue _fun0003 }
 65:
                        var6 = var7;
 68:
                        var2['index'] = var6;
                        var2['animated'] = var5;
                        var2 = var3.bind(var4)(var2);
 82:
                        return var1;
                    }
                };
                var1['scrollToHeaderIndex'] = var3;
                var3 = function forceUpdate() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = _closure2_slot4;
                        var2 = var1.current;
                        var3 = var2.forceUpdate;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0004_ip = 34; continue _fun0004 }
 24:
                        var1 = var2.forceUpdate;
                        var1 = var1.bind(var2)();
 34:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['forceUpdate'] = var3;
                var2 = function onStickyHeaderRendered(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var6 = arg1;
                        var2 = _closure2_slot1;
                        var2 = var2.length;
                        var3 = 0;
                        var2 = var3 < var2;
                        var5 = 0;
                        var4 = 0;
                        if(!var2) { _fun0005_ip = 62; continue _fun0005 }
 28:
                        var2 = _closure2_slot1;
                        var2 = var2[var4];
                        if(!(var6 >= var2)) { _fun0005_ip = 43; continue _fun0005 }
 40:
                        var5 = var4;
 43:
                        var4 = var4 + 1;
                        var2 = _closure2_slot1;
                        var2 = var2.length;
                        var3 = var5;
                        if(var4 < var2) { _fun0005_ip = 28; continue _fun0005 }
 62:
                        var2 = _closure2_slot0;
                        var1 = var2.set;
                        var1 = var1.bind(var2)(var3);
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onStickyHeaderRendered'] = var2;
                return var1;
            };
            var1 = var15.bind(var16)(var9, var1);
            var9 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 6;
            var1 = var15[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            var9 = var1.onViewableItemsChanged;
            var2 = _closure1_slot7;
            var1 = {};
            var1['contentContainerStyle'] = var14;
            var1['data'] = var13;
            var12 = _closure1_slot4;
            var1['estimatedItemSize'] = var12;
            var1['getItemType'] = var11;
            var11 = 'always';
            var1['keyboardShouldPersistTaps'] = var11;
            var1['keyExtractor'] = var10;
            var1['onViewableItemsChanged'] = var9;
            var1['overrideItemLayout'] = var8;
            var1['ref'] = var7;
            var1['renderItem'] = var6;
            var1['stickyHeaderIndices'] = var5;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_picker/native/components/EmojiPickerListComponent.ios.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
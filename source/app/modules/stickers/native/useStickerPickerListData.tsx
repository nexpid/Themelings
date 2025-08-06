// app/modules/stickers/native/useStickerPickerListData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var12 = 0;
    var5 = var7[var12];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot3 = var2;
    var11 = 1;
    var2 = var7[var11];
    var2 = var6.bind(var1)(var2);
    var2 = var2.useStickerPickerStore;
    var _closure1_slot4 = var2;
    var9 = 2;
    var2 = var7[var9];
    var2 = var6.bind(var1)(var2);
    var8 = var2.LABEL_HEIGHT;
    var5 = var2.MIN_MARGIN;
    var _closure1_slot5 = var5;
    var5 = var2.ROW_HEIGHT;
    var _closure1_slot6 = var5;
    var2 = var2.STICKER_SIZE;
    var _closure1_slot7 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.PADDING_VERTICAL;
    var2 = {};
    var2['STICKERS'] = var12;
    var10 = 'STICKERS';
    var2[var12] = var10;
    var2['NSFW'] = var11;
    var10 = 'NSFW';
    var2[var11] = var10;
    var _closure1_slot8 = var2;
    var5 = var9 * var5;
    var5 = var8 + var5;
    var _closure1_slot9 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stickers/native/useStickerPickerListData.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useStickerPickerListData(arg1) {
        var2 = arg1;
        var8 = var2.channel;
        var9 = var2.containerWidth;
        var _closure2_slot0 = var9;
        var6 = var2.searchResults;
        var _closure2_slot1 = var6;
        var7 = var2.stickerFormats;
        var _closure2_slot2 = var7;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 4;
        var3 = var5[var3];
        var5 = undefined;
        var4 = var4.bind(var5)(var3);
        var3 = var4.useStickerCategories;
        var8 = var3.bind(var4)(var8);
        var _closure2_slot3 = var8;
        var4 = _closure1_slot4;
        var3 = function(arg1) {
            var1 = arg1;
            var1 = var1.packToScrollTo;
            return var1;
        };
        var5 = var4.bind(var5)(var3);
        var _closure2_slot4 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(5);
        var2[0] = var9;
        var2[1] = var8;
        var2[2] = var7;
        var2[3] = var6;
        var2[4] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = global;
                var6 = var1.Math;
                var4 = var6.floor;
                var3 = _closure2_slot0;
                var8 = _closure1_slot5;
                var7 = var3 - var8;
                var3 = _closure1_slot7;
                var3 = var3 + var8;
                var3 = var7 / var3;
                var4 = var4.bind(var6)(var3);
                var _closure3_slot0 = var4;
                var8 = new Array(0);
                var _closure3_slot1 = var8;
                var7 = new Array(0);
                var6 = new Array(0);
                var _closure3_slot2 = var6;
                var3 = new Array(0);
                var _closure3_slot3 = var3;
                var11 = undefined;
                var _closure3_slot4 = var11;
                var10 = function pushCategory(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var5 = arg1;
                        var4 = arguments[1];
                        var1 = undefined;
                        if(!(var4 === var1)) { _fun0002_ip = 16; continue _fun0002 }
 12:
                        var4 = '';
 16:
                        var3 = true;
                        var2 = arguments[2];
                        if(!(var3 !== var2)) { _fun0002_ip = 142; continue _fun0002 }
 25:
                        var3 = var5.filter;
                        var2 = function(arg1) {
                            var3 = _closure2_slot2;
                            var2 = var3.includes;
                            var1 = arg1;
                            var1 = var1.format_type;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var7 = var3.bind(var5)(var2);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 5;
                        var2 = var5[var2];
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.chunk;
                        var2 = _closure3_slot0;
                        var2 = var5.bind(var6)(var7, var2);
                        var7 = _closure3_slot3;
                        var6 = var7.push;
                        var5 = {};
                        var8 = _closure1_slot8;
                        var8 = var8.STICKERS;
                        var5['type'] = var8;
                        var5['stickersByRow'] = var2;
                        var5 = var6.bind(var7)(var5);
                        var5 = _closure3_slot1;
                        var3 = var5.push;
                        var2 = var2.length;
                        var2 = var3.bind(var5)(var2);
                        _fun0002_ip = 204; continue _fun0002;
 142:
                        var6 = _closure3_slot3;
                        var5 = var6.push;
                        var3 = {};
                        var7 = _closure1_slot8;
                        var7 = var7.NSFW;
                        var3['type'] = var7;
                        var7 = new Array(0);
                        var3['stickersByRow'] = var7;
                        var3 = var5.bind(var6)(var3);
                        var5 = _closure3_slot1;
                        var3 = var5.push;
                        var2 = 1;
                        var2 = var3.bind(var5)(var2);
 204:
                        var3 = _closure3_slot2;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
                        return var1;
                    }
                };
                var _closure3_slot5 = var10;
                var12 = _closure2_slot1;
                var9 = null;
                if(!(var9 == var12)) { _fun0001_ip = 176; continue _fun0001 }
 110:
                var13 = _closure2_slot3;
                var12 = var13.map;
                var9 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = arg1;
                        var3 = _closure2_slot4;
                        var1 = var2.id;
                        if(!(var3 === var1)) { _fun0003_ip = 29; continue _fun0003 }
 19:
                        var1 = arg2;
                        _closure3_slot4 = var1;
 29:
                        var5 = var2.type;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 7;
                        var4 = var4[var1];
                        var1 = undefined;
                        var4 = var6.bind(var1)(var4);
                        var4 = var4.StickerCategoryTypes;
                        var4 = var4.GUILD;
                        var5 = var5 === var4;
                        if(!var5) { _fun0003_ip = 114; continue _fun0003 }
 78:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 8;
                        var3 = var6[var3];
                        var6 = var4.bind(var1)(var3);
                        var4 = var6.shouldNSFWGateGuild;
                        var3 = var2.id;
                        var5 = var4.bind(var6)(var3);
 114:
                        var4 = _closure3_slot5;
                        var3 = var2.stickers;
                        var2 = var2.name;
                        var2 = var4.bind(var1)(var3, var2, var5);
                        return var1;
                    }
                };
                var9 = var12.bind(var13)(var9);
                var12 = var7.push;
                var9 = function getSectionHeights(arg1) {
                    var3 = arg1;
                    var2 = 0;
                    var _closure4_slot0 = var2;
                    var2 = var3.map;
                    var1 = function(arg1, arg2) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var4 = arg1;
                            var1 = 0;
                            var2 = arg2;
                            if(!(var1 === var2)) { _fun0004_ip = 16; continue _fun0004 }
 12:
                            if(!(var1 !== var4)) { _fun0004_ip = 59; continue _fun0004 }
 16:
                            var3 = _closure1_slot6;
                            var3 = var4 * var3;
                            var2 = _closure1_slot9;
                            var5 = var3 + var2;
                            var4 = _closure4_slot0;
                            var2 = 12;
                            var2 = var5 + var2;
                            var2 = var2 + var4;
                            _closure4_slot0 = var2;
                            return var2;
 59:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var17 = var9.bind(var11)(var8);
                var9 = new Array(0);
                var16 = 0;
                var18 = var9;
                var13 = arraySpread(var18, var17, var16);
                var18 = var12;
                var17 = var9;
                var16 = var7;
                var9 = apply(var18, var17, var16);
                _fun0001_ip = 241; continue _fun0001;
 176:
                var9 = _closure2_slot1;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 6;
                var12 = var15[var1];
                var12 = var14.bind(var11)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var1 = var15[var1];
                var1 = var14.bind(var11)(var1);
                var1 = var1.t;
                var1 = var1.zkoeq6;
                var1 = var12.bind(var13)(var1);
                var1 = var10.bind(var11)(var9, var1);
 241:
                var1 = {};
                var1['sections'] = var8;
                var1['sectionHeights'] = var7;
                var7 = _closure1_slot9;
                var1['sectionSize'] = var7;
                var7 = 12;
                var1['sectionFooterSize'] = var7;
                var1['sectionLabels'] = var6;
                var5 = _closure1_slot6;
                var1['rowHeight'] = var5;
                var1['rowSize'] = var4;
                var1['rowsBySection'] = var3;
                var2 = _closure3_slot4;
                var1['packToScrollToIndex'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var3['StickerPickerSectionType'] = var2;
    return var1;
})();
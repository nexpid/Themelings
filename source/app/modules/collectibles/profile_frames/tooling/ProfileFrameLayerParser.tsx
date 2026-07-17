// app/modules/collectibles/profile_frames/tooling/ProfileFrameLayerParser.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var1 = function isValidAnchor(arg1) {
        var3 = _closure1_slot4;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot7 = var1;
    var7 = global;
    var6 = var7.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var13 = 0;
    var5 = var10[var13];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var6 = {};
    var12 = 1;
    var4 = var10[var12];
    var4 = var9.bind(var1)(var4);
    var4 = var4.ProfileFrameLayerOrder;
    var4 = var4.FRONT;
    var6['foreground'] = var4;
    var4 = var10[var12];
    var4 = var9.bind(var1)(var4);
    var4 = var4.ProfileFrameLayerOrder;
    var4 = var4.BACK;
    var6['background'] = var4;
    var8 = var7.Set;
    var5 = 2;
    var4 = var10[var5];
    var4 = var9.bind(var1)(var4);
    var4 = var4.ProfileFrameLayerType;
    var11 = var4.STAPLE;
    var4 = new Array(3);
    var4[0] = var11;
    var11 = var10[var5];
    var11 = var9.bind(var1)(var11);
    var11 = var11.ProfileFrameLayerType;
    var11 = var11.RAIL;
    var4[1] = var11;
    var5 = var10[var5];
    var5 = var9.bind(var1)(var5);
    var5 = var5.ProfileFrameLayerType;
    var5 = var5.BORDER;
    var4[2] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var22 = var5;
    var21 = var4;
    var4 = new var22[var8](var21, var20);
    var11 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot3 = var11;
    var8 = var7.Set;
    var5 = 3;
    var4 = var10[var5];
    var4 = var9.bind(var1)(var4);
    var4 = var4.ProfileFrameLayerAnchor;
    var14 = var4.TOP;
    var4 = new Array(3);
    var4[0] = var14;
    var14 = var10[var5];
    var14 = var9.bind(var1)(var14);
    var14 = var14.ProfileFrameLayerAnchor;
    var14 = var14.BOTTOM;
    var4[1] = var14;
    var5 = var10[var5];
    var5 = var9.bind(var1)(var5);
    var5 = var5.ProfileFrameLayerAnchor;
    var5 = var5.CENTER;
    var4[2] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var22 = var5;
    var21 = var4;
    var4 = new var22[var8](var21, var20);
    var8 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot4 = var8;
    var5 = {};
    var4 = 'wrong_part_count';
    var5['WRONG_PART_COUNT'] = var4;
    var4 = 'invalid_index';
    var5['INVALID_INDEX'] = var4;
    var4 = 'invalid_type';
    var5['INVALID_TYPE'] = var4;
    var4 = 'invalid_anchor';
    var5['INVALID_ANCHOR'] = var4;
    var4 = 'invalid_responsive';
    var5['INVALID_RESPONSIVE'] = var4;
    var4 = 'border_has_anchor';
    var5['BORDER_HAS_ANCHOR'] = var4;
    var _closure1_slot5 = var5;
    var4 = {};
    var15 = var5.WRONG_PART_COUNT;
    var14 = 'wrong filename format';
    var4[14] = var14;
    var15 = var5.INVALID_INDEX;
    var14 = 'invalid index';
    var4[14] = var14;
    var14 = var5.INVALID_TYPE;
    var16 = new Array(0);
    var21 = var16;
    var20 = var11;
    var19 = 0;
    var11 = arraySpread(var21, var20, var19);
    var11 = var16.join;
    var15 = ', ';
    var18 = var11.bind(var16)(var15);
    var11 = var7.HermesInternal;
    var17 = var11.concat;
    var11 = 'invalid type (expected: ';
    var16 = ')';
    var11 = var17.bind(var11)(var18, var16);
    var4[13] = var11;
    var11 = var5.INVALID_ANCHOR;
    var14 = new Array(0);
    var21 = var14;
    var20 = var8;
    var8 = arraySpread(var21, var20, var19);
    var8 = var14.join;
    var15 = var8.bind(var14)(var15);
    var8 = var7.HermesInternal;
    var14 = var8.concat;
    var8 = 'invalid anchor (expected: ';
    var8 = var14.bind(var8)(var15, var16);
    var4[10] = var8;
    var11 = var5.INVALID_RESPONSIVE;
    var7 = var7.HermesInternal;
    var15 = var7.concat;
    var14 = "invalid suffix (expected '";
    var7 = 'responsive';
    var8 = "')";
    var8 = var15.bind(var14)(var7, var8);
    var4[10] = var8;
    var11 = var5.BORDER_HAS_ANCHOR;
    var8 = 'border layers must omit the anchor';
    var4[10] = var8;
    var8 = {};
    var11 = var10[var12];
    var11 = var9.bind(var1)(var11);
    var11 = var11.ProfileFrameLayerOrder;
    var11 = var11.FRONT;
    var8[10] = var13;
    var11 = var10[var12];
    var11 = var9.bind(var1)(var11);
    var11 = var11.ProfileFrameLayerOrder;
    var11 = var11.BACK;
    var8[10] = var12;
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/collectibles/profile_frames/tooling/ProfileFrameLayerParser.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = 'preview';
    var3['PREVIEW_FILENAME'] = var8;
    var3['RESPONSIVE_KEYWORD'] = var7;
    var3['FOLDER_ORDER_MAP'] = var6;
    var3['ParseErrorKind'] = var5;
    var3['PARSE_ERROR_LABELS'] = var4;
    var4 = function parseLayerFilename(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = var4.replace;
            var2 = /\.\w+$/;
            var1 = '';
            var3 = var3.bind(var4)(var2, var1);
            var2 = var3.split;
            var1 = '_';
            var3 = var2.bind(var3)(var1);
            var1 = var3.length;
            var13 = 2;
            if(!(!(var1 < var13))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.length;
            var1 = 4;
            if(!(!(var2 > var1))) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = _closure1_slot2;
            var8 = undefined;
            var4 = var1.bind(var8)(var3);
            var3 = 0;
            var9 = var4[var3];
            var5 = 1;
            var6 = var4[var5];
            var1 = var4.slice;
            var1 = var1.bind(var4)(var13);
            var7 = /^\d+$/;
            var4 = var7.test;
            var4 = var4.bind(var7)(var9);
            if(var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = {};
            var7 = null;
            var4['parsed'] = var7;
            var7 = _closure1_slot5;
            var7 = var7.INVALID_INDEX;
            var4['errorType'] = var7;
            return var4;
case 5:
            var7 = _closure1_slot3;
            var4 = var7.has;
            var4 = var4.bind(var7)(var6);
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var4 = {};
            var7 = null;
            var4['parsed'] = var7;
            var7 = _closure1_slot5;
            var7 = var7.INVALID_TYPE;
            var4['errorType'] = var7;
            return var4;
case 7:
            var7 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var13];
            var4 = var7.bind(var8)(var4);
            var4 = var4.ProfileFrameLayerType;
            var4 = var4.BORDER;
            if(!(var6 !== var4)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var12 = var1[var3];
            var7 = null;
            if(!(var7 != var12)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var4 = _closure1_slot7;
            var4 = var4.bind(var8)(var12);
            if(!var4) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var4 = var1.length;
            if(!(!(var4 > var13))) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var1.length;
            if(!(var13 === var4)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var10 = var1[var5];
            var4 = 'responsive';
            if(!(var10 === var4)) { _fun0001_ip = 18; continue _fun0001 }
case 16:
            var4 = var1.length;
            var11 = var13 === var4;
            if(var11) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var10 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var13];
            var4 = var10.bind(var8)(var4);
            var4 = var4.ProfileFrameLayerType;
            var4 = var4.RAIL;
            var11 = var6 === var4;
case 19:
            var4 = {};
            var10 = {};
            var13 = global;
            var13 = var13.Number;
            var13 = var13.bind(var8)(var9);
            var10['index'] = var13;
            var10['type'] = var6;
            var10['anchor'] = var12;
            var10['responsive'] = var11;
            var4['parsed'] = var10;
            var4['errorType'] = var7;
            return var4;
case 18:
            var4 = {};
            var4['parsed'] = var7;
            var10 = _closure1_slot5;
            var10 = var10.INVALID_RESPONSIVE;
            var4['errorType'] = var10;
            return var4;
case 14:
            var4 = {};
            var4['parsed'] = var7;
            var10 = _closure1_slot5;
            var10 = var10.WRONG_PART_COUNT;
            var4['errorType'] = var10;
            return var4;
case 11:
            var4 = {};
            var4['parsed'] = var7;
            var7 = _closure1_slot5;
            var7 = var7.INVALID_ANCHOR;
            var4['errorType'] = var7;
            return var4;
case 9:
            var4 = var1.length;
            if(!(var4 > var3)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var7 = _closure1_slot7;
            var4 = var1[var3];
            var4 = var7.bind(var8)(var4);
            if(var4) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var4 = var1.length;
            if(!(!(var4 > var5))) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var4 = var1.length;
            if(!(var5 === var4)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var4 = var1[var3];
            var3 = 'responsive';
            if(!(var4 === var3)) { _fun0001_ip = 28; continue _fun0001 }
case 26:
            var4 = var1.length;
            var1 = {};
            var3 = {};
            var7 = global;
            var7 = var7.Number;
            var7 = var7.bind(var8)(var9);
            var3['index'] = var7;
            var3['type'] = var6;
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 3;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.ProfileFrameLayerAnchor;
            var6 = var6.CENTER;
            var3['anchor'] = var6;
            var4 = var5 === var4;
            var3['responsive'] = var4;
            var1['parsed'] = var3;
            var3 = null;
            var1['errorType'] = var3;
            return var1;
case 28:
            var1 = {};
            var3 = null;
            var1['parsed'] = var3;
            var3 = _closure1_slot5;
            var3 = var3.INVALID_RESPONSIVE;
            var1['errorType'] = var3;
            return var1;
case 24:
            var1 = {};
            var3 = null;
            var1['parsed'] = var3;
            var3 = _closure1_slot5;
            var3 = var3.WRONG_PART_COUNT;
            var1['errorType'] = var3;
            return var1;
case 23:
            var1 = {};
            var3 = null;
            var1['parsed'] = var3;
            var2 = _closure1_slot5;
            var2 = var2.BORDER_HAS_ANCHOR;
            var1['errorType'] = var2;
            return var1;
case 2:
            var1 = {};
            var2 = null;
            var1['parsed'] = var2;
            var2 = _closure1_slot5;
            var2 = var2.WRONG_PART_COUNT;
            var1['errorType'] = var2;
            return var1;
        }
    };
    var3['parseLayerFilename'] = var4;
    var4 = function compareLayerFiles(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var5 = _closure1_slot6;
            var1 = var3.order;
            var4 = var5[var1];
            var1 = var2.order;
            var1 = var5[var1];
            var1 = var4 - var1;
            var4 = 0;
            if(!(var4 === var1)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var3 = var3.index;
            var2 = var2.index;
            var1 = var3 - var2;
case 29:
            return var1;
        }
    };
    var3['compareLayerFiles'] = var4;
    var2 = function isPreviewFilename(arg1) {
        var4 = arg1;
        var3 = var4.replace;
        var2 = /\.\w+$/;
        var1 = '';
        var2 = var3.bind(var4)(var2, var1);
        var1 = 'preview';
        var1 = var2 === var1;
        return var1;
    };
    var3['isPreviewFilename'] = var2;
    return var1;
})();
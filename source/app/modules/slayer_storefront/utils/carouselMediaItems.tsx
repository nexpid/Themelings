// app/modules/slayer_storefront/utils/carouselMediaItems.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot3;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot3;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/utils/carouselMediaItems.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 747;
    var3['WEB_HERO_WIDTH_PX'] = var4;
    var4 = 560;
    var3['WEB_HERO_HEIGHT_PX'] = var4;
    var4 = 343;
    var3['MOBILE_HERO_WIDTH_PX'] = var4;
    var4 = 257;
    var3['MOBILE_HERO_HEIGHT_PX'] = var4;
    var4 = 112;
    var3['CAROUSEL_THUMBNAIL_SIZE'] = var4;
    var4 = function getThumbnailSrc(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var3 = var2.thumbnailSrc;
            var1 = null;
            if(!(var1 == var3)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = var2.type;
            var1 = 'video';
            if(!(var1 !== var3)) { _fun0004_ip = 38; continue _fun0004 }
case 34:
            var1 = var2.src;
            _fun0004_ip = 39; continue _fun0004;
case 38:
            var1 = var2.videoThumbnailSrc;
case 39:
            _fun0004_ip = 40; continue _fun0004;
case 36:
            var1 = var2.thumbnailSrc;
case 40:
            return var1;
        }
    };
    var3['getThumbnailSrc'] = var4;
    var2 = function convertCarouselItemsToMediaItems(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var19 = arg2;
            var18 = arg3;
            var1 = arg4;
            var17 = var1.heroWidth;
            var3 = new Array(0);
            var2 = new Array(0);
            var16 = null;
            if(!(var16 != var4)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var1 = var4.length;
            var15 = 0;
            if(!(var15 !== var1)) { _fun0005_ip = 41; continue _fun0005 }
case 5:
            var1 = _closure1_slot2;
            var13 = undefined;
            var12 = var1.bind(var13)(var4);
            var4 = var12.bind(var13)();
            var1 = var4.done;
            var11 = 1;
            var10 = 112;
            var9 = 'webp';
            var8 = 'video';
            var7 = 'mp4';
            var6 = 'image';
            var5 = 'video/';
            if(var1) { _fun0005_ip = 43; continue _fun0005 }
case 13:
            var23 = var4.value;
            var1 = var23.assetId;
            var1 = var16 != var1;
            var24 = null;
            if(!var1) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var1 = var23.assetId;
            var24 = var18[var1];
case 44:
            if(!(var16 != var24)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var1 = var3.push;
            var1 = var1.bind(var3)(var23);
            var20 = var24.mime_type;
            var1 = var20.startsWith;
            var1 = var1.bind(var20)(var5);
            var20 = var2.push;
            if(var1) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var1 = {};
            var1['type'] = var6;
            var22 = _closure1_slot0;
            var21 = _closure1_slot1;
            var21 = var21[var15];
            var22 = var22.bind(var13)(var21);
            var21 = var22.getAssetURL;
            var33 = var22;
            var32 = var19;
            var31 = var24;
            var30 = var17;
            var29 = var9;
            var21 = var33[var21](var32, var31, var30, var29, var28);
            var1['src'] = var21;
            var21 = var23.thumbnailAssetId;
            var22 = var16 != var21;
            var21 = undefined;
            if(!var22) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var25 = _closure1_slot0;
            var22 = _closure1_slot1;
            var22 = var22[var15];
            var26 = var25.bind(var13)(var22);
            var25 = var26.getAssetURL;
            var31 = var23.thumbnailAssetId;
            var33 = var26;
            var32 = var19;
            var30 = var10;
            var29 = var9;
            var21 = var33[var25](var32, var31, var30, var29, var28);
case 50:
            var1['thumbnailSrc'] = var21;
            var21 = var23.backgroundAssetId;
            var22 = var16 != var21;
            var21 = undefined;
            if(!var22) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var28 = _closure1_slot0;
            var22 = _closure1_slot1;
            var25 = var22[var15];
            var27 = var28.bind(var13)(var25);
            var26 = var27.getAssetURL;
            var31 = var23.backgroundAssetId;
            var22 = var22[var11];
            var22 = var28.bind(var13)(var22);
            var29 = var22.LARGE_ASSET_FORMAT;
            var33 = var27;
            var32 = var19;
            var30 = var17;
            var21 = var33[var26](var32, var31, var30, var29, var28);
case 52:
            var1['backgroundSrc'] = var21;
            var1 = var20.bind(var2)(var1);
            _fun0005_ip = 46; continue _fun0005;
case 48:
            var1 = {};
            var1['type'] = var8;
            var22 = _closure1_slot0;
            var21 = _closure1_slot1;
            var25 = var21[var15];
            var26 = var22.bind(var13)(var25);
            var25 = var26.getAssetURL;
            var33 = var26;
            var32 = var19;
            var31 = var24;
            var30 = var17;
            var29 = var7;
            var25 = var33[var25](var32, var31, var30, var29, var28);
            var1['src'] = var25;
            var21 = var21[var15];
            var22 = var22.bind(var13)(var21);
            var21 = var22.getAssetURL;
            var33 = var22;
            var32 = var19;
            var31 = var24;
            var30 = var17;
            var29 = var9;
            var21 = var33[var21](var32, var31, var30, var29, var28);
            var1['videoThumbnailSrc'] = var21;
            var21 = var23.thumbnailAssetId;
            var22 = var16 != var21;
            var21 = undefined;
            if(!var22) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var24 = _closure1_slot0;
            var22 = _closure1_slot1;
            var22 = var22[var15];
            var25 = var24.bind(var13)(var22);
            var24 = var25.getAssetURL;
            var31 = var23.thumbnailAssetId;
            var33 = var25;
            var32 = var19;
            var30 = var10;
            var29 = var9;
            var21 = var33[var24](var32, var31, var30, var29, var28);
case 54:
            var1['thumbnailSrc'] = var21;
            var21 = var23.backgroundAssetId;
            var22 = var16 != var21;
            var21 = undefined;
            if(!var22) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var26 = _closure1_slot0;
            var22 = _closure1_slot1;
            var24 = var22[var15];
            var25 = var26.bind(var13)(var24);
            var24 = var25.getAssetURL;
            var31 = var23.backgroundAssetId;
            var22 = var22[var11];
            var22 = var26.bind(var13)(var22);
            var29 = var22.LARGE_ASSET_FORMAT;
            var33 = var25;
            var32 = var19;
            var30 = var17;
            var21 = var33[var24](var32, var31, var30, var29, var28);
case 56:
            var1['backgroundSrc'] = var21;
            var1 = var20.bind(var2)(var1);
case 46:
            var20 = var12.bind(var13)();
            var1 = var20.done;
            var4 = var20;
            if(!var1) { _fun0005_ip = 13; continue _fun0005 }
case 43:
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
case 41:
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        }
    };
    var3['convertCarouselItemsToMediaItems'] = var2;
    return var1;
})();
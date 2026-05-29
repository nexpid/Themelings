// app/modules/collectibles/records/CollectiblesItemRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            var9 = _closure1_slot10;
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
            var7 = _closure1_slot10;
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
    var _closure1_slot9 = var1;
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
    var _closure1_slot10 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.SKUProductLines;
    var _closure1_slot7 = var7;
    var2 = var2.SKUTypes;
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var6 = var5.bind(var1)(var2);
    var5 = var6.fileFinishedImporting;
    var2 = 'modules/collectibles/records/CollectiblesItemRecord.tsx';
    var2 = var5.bind(var6)(var2);
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var5 = arg2;
                    var4 = var5.type;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var8 = 6;
                    var3 = var3[var8];
                    var7 = undefined;
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.AVATAR_DECORATION;
                    if(!(var4 !== var3)) { _fun0005_ip = 38; continue _fun0005 }
case 4:
                    var4 = var5.type;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var8];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.NAMEPLATE;
                    if(!(var4 !== var3)) { _fun0005_ip = 39; continue _fun0005 }
case 11:
                    var4 = var5.type;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var8];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.PROFILE_EFFECT;
                    if(!(var4 !== var3)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var4 = var5.type;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var8];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.PROFILE_FRAME;
                    if(!(var4 !== var3)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var4 = var1.push;
                    var6 = _closure1_slot6;
                    var3 = var6.fromServer;
                    var3 = var3.bind(var6)(var5);
                    var3 = var4.bind(var1)(var3);
                    _fun0005_ip = 44; continue _fun0005;
case 42:
                    var4 = var1.push;
                    var6 = _closure1_slot5;
                    var3 = var6.fromServer;
                    var3 = var3.bind(var6)(var5);
                    var3 = var4.bind(var1)(var3);
                    _fun0005_ip = 44; continue _fun0005;
case 40:
                    var4 = var1.push;
                    var6 = _closure1_slot4;
                    var3 = var6.fromServer;
                    var3 = var3.bind(var6)(var5);
                    var3 = var4.bind(var1)(var3);
                    _fun0005_ip = 44; continue _fun0005;
case 39:
                    var4 = var1.push;
                    var6 = _closure1_slot3;
                    var3 = var6.fromServer;
                    var3 = var3.bind(var6)(var5);
                    var3 = var4.bind(var1)(var3);
                    _fun0005_ip = 44; continue _fun0005;
case 38:
                    var3 = var1.push;
                    var4 = _closure1_slot2;
                    var2 = var4.fromServer;
                    var2 = var2.bind(var4)(var5);
                    var2 = var3.bind(var1)(var2);
case 44:
                    return var1;
                }
            };
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            _fun0004_ip = 45; continue _fun0004;
case 36:
            var1 = new Array(0);
case 45:
            return var1;
        }
    };
    var3['createCollectiblesItemsFromServerResponse'] = var2;
    var2 = function transformSKUToCollectiblesItem(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var3 = var1.productLine;
            var2 = _closure1_slot7;
            var2 = var2.COLLECTIBLES;
            if(!(var3 === var2)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var3 = var1.type;
            var2 = _closure1_slot8;
            var2 = var2.BUNDLE;
            if(!(var3 !== var2)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var4 = var1.tenantMetadata;
            var9 = null;
            var5 = var9 == var4;
            var2 = undefined;
            var3 = undefined;
            if(var5) { _fun0006_ip = 50; continue _fun0006 }
case 30:
            var3 = var4.collectibles;
case 50:
            var4 = var9 == var3;
            var5 = undefined;
            if(var4) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var5 = var3.item;
case 51:
            if(!(var9 == var5)) { _fun0006_ip = 53; continue _fun0006 }
case 46:
            var3 = undefined;
            return var3;
case 53:
            var4 = var5.type;
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var7 = 6;
            var3 = var3[var7];
            var3 = var6.bind(var2)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.AVATAR_DECORATION;
            if(!(var4 !== var3)) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var4 = var5.type;
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var6.bind(var2)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.NAMEPLATE;
            if(!(var4 !== var3)) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var4 = var5.type;
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var6.bind(var2)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.PROFILE_EFFECT;
            if(!(var4 !== var3)) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var4 = var5.type;
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var6.bind(var2)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.PROFILE_FRAME;
            var2 = undefined;
            if(!(var4 === var3)) { _fun0006_ip = 60; continue _fun0006 }
case 61:
            var3 = {};
            var4 = 'single';
            var3['type'] = var4;
            var7 = _closure1_slot5;
            var4 = {};
            var6 = var1.id;
            var4['skuId'] = var6;
            var6 = var5.type;
            var4['type'] = var6;
            var6 = var5.label;
            var4['label'] = var6;
            var6 = var5.layers;
            var4['layers'] = var6;
            var6 = var5.innerWidth;
            var4['innerWidth'] = var6;
            var6 = var5.overflowTop;
            var4['overflowTop'] = var6;
            var6 = var5.overflowBottom;
            var4['overflowBottom'] = var6;
            var6 = var5.overflowHorizontal;
            var4['overflowHorizontal'] = var6;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var12 = var6;
            var11 = var4;
            var4 = new var12[var7](var11, var10);
            var4 = var4 instanceof Object ? var4 : var6;
            var3['item'] = var4;
            var2 = var3;
case 60:
            _fun0006_ip = 62; continue _fun0006;
case 58:
            var3 = {};
            var4 = 'single';
            var3['type'] = var4;
            var7 = _closure1_slot4;
            var4 = {};
            var6 = var1.id;
            var4['skuId'] = var6;
            var6 = var5.type;
            var4['type'] = var6;
            var6 = var5.title;
            var4['title'] = var6;
            var6 = var5.description;
            var4['description'] = var6;
            var6 = var5.thumbnailPreviewSrc;
            var4['thumbnailPreviewSrc'] = var6;
            var6 = var5.reducedMotionSrc;
            var4['reducedMotionSrc'] = var6;
            var6 = var5.effects;
            if(!(var9 == var6)) { _fun0006_ip = 63; continue _fun0006 }
case 64:
            var6 = new Array(0);
case 63:
            var4['effects'] = var6;
            var6 = var5.accessibilityLabel;
            var4['accessibilityLabel'] = var6;
            var6 = var5.animationType;
            var4['animationType'] = var6;
            var6 = var5.staticFrameSrc;
            var4['staticFrameSrc'] = var6;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var12 = var6;
            var11 = var4;
            var4 = new var12[var7](var11, var10);
            var4 = var4 instanceof Object ? var4 : var6;
            var3['item'] = var4;
            var2 = var3;
case 62:
            _fun0006_ip = 65; continue _fun0006;
case 56:
            var3 = {};
            var4 = 'single';
            var3['type'] = var4;
            var7 = _closure1_slot3;
            var4 = {};
            var6 = var1.id;
            var4['skuId'] = var6;
            var6 = var5.type;
            var4['type'] = var6;
            var6 = var5.asset;
            var4['asset'] = var6;
            var6 = var5.label;
            var4['label'] = var6;
            var6 = var5.palette;
            var4['palette'] = var6;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var12 = var6;
            var11 = var4;
            var4 = new var12[var7](var11, var10);
            var4 = var4 instanceof Object ? var4 : var6;
            var3['item'] = var4;
            var2 = var3;
case 65:
            _fun0006_ip = 66; continue _fun0006;
case 54:
            var3 = {};
            var4 = 'single';
            var3['type'] = var4;
            var6 = _closure1_slot2;
            var4 = {};
            var7 = var1.id;
            var4['skuId'] = var7;
            var7 = var5.type;
            var4['type'] = var7;
            var7 = var5.asset;
            var4['asset'] = var7;
            var5 = var5.label;
            var4['label'] = var5;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var12 = var5;
            var11 = var4;
            var4 = new var12[var6](var11, var10);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['item'] = var4;
            var2 = var3;
case 66:
            return var2;
case 48:
            var3 = new Array(0);
            var4 = _closure1_slot9;
            var2 = var1.bundledSkus;
            var7 = null;
            if(!(var7 == var2)) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var2 = new Array(0);
case 67:
            var1 = undefined;
            var6 = var4.bind(var1)(var2);
            var4 = var6.bind(var1)();
            var2 = var4.done;
            var5 = 'single';
            if(var2) { _fun0006_ip = 69; continue _fun0006 }
case 70:
            var9 = _closure1_slot11;
            var2 = var4.value;
            var2 = var9.bind(var1)(var2);
            var10 = var7 == var2;
            var9 = undefined;
            if(var10) { _fun0006_ip = 71; continue _fun0006 }
case 72:
            var9 = var2.type;
case 71:
            if(!(var5 === var9)) { _fun0006_ip = 73; continue _fun0006 }
case 74:
            var9 = var3.push;
            var2 = var2.item;
            var2 = var9.bind(var3)(var2);
case 73:
            var9 = var6.bind(var1)();
            var2 = var9.done;
            var4 = var9;
            if(!var2) { _fun0006_ip = 70; continue _fun0006 }
case 69:
            var4 = var3.length;
            var2 = 0;
            if(!(var2 !== var4)) { _fun0006_ip = 75; continue _fun0006 }
case 76:
            var2 = {};
            var4 = 'bundle';
            var2['type'] = var4;
            var2['items'] = var3;
            return var2;
case 75:
            return var1;
        }
    };
    var _closure1_slot11 = var2;
    var3['transformSKUToCollectiblesItem'] = var2;
    return var1;
})();
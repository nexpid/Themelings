// app/modules/fastest_list/FastestListChildren.android.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var9 = global;
    var10 = var9.Object;
    var8 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var4);
    var8 = 0;
    var4 = var6[var8];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var10 = var11.create;
    var4 = {};
    var12 = {'position': 'absolute', 'opacity': 0, 'height': 0, 'top': 0};
    var4['portal'] = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot6 = var4;
    var4 = {};
    var10 = new Array(0);
    var4['items'] = var10;
    var9 = var9.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var16 = var10;
    var9 = new var16[var9](var15);
    var9 = var9 instanceof Object ? var9 : var10;
    var4['keys'] = var9;
    var4['keyIndex'] = var8;
    var _closure1_slot7 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.estimatedListSize;
            var _closure2_slot0 = var3;
            var19 = var1.horizontal;
            var4 = undefined;
            if(!(var19 === var4)) { _fun0001_ip = 29; continue _fun0001 }
 27:
            var19 = false;
 29:
            var _closure2_slot1 = var19;
            var18 = var1.listFooterAlwaysMounted;
            var _closure2_slot2 = var18;
            var17 = var1.listHeaderAlwaysMounted;
            var _closure2_slot3 = var17;
            var16 = var1.placeholdersForceEnabled;
            if(!(var16 === var4)) { _fun0001_ip = 65; continue _fun0001 }
 63:
            var16 = false;
 65:
            var _closure2_slot4 = var16;
            var5 = var1.marginEnd;
            var _closure2_slot5 = var5;
            var9 = var1.marginStart;
            var _closure2_slot6 = var9;
            var10 = var1.sectionsVersioned;
            var _closure2_slot7 = var10;
            var15 = var1.renderItem;
            var _closure2_slot8 = var15;
            var14 = var1.renderListFooter;
            var _closure2_slot9 = var14;
            var13 = var1.renderListHeader;
            var _closure2_slot10 = var13;
            var12 = var1.renderSectionFooter;
            var _closure2_slot11 = var12;
            var11 = var1.renderSectionHeader;
            var _closure2_slot12 = var11;
            var3 = var1.wrapChildren;
            if(!(var3 === var4)) { _fun0001_ip = 161; continue _fun0001 }
 159:
            var3 = false;
 161:
            var _closure2_slot13 = var3;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var6 = new Array(2);
            var6[0] = var9;
            var6[1] = var5;
            var5 = function() {
                var1 = _closure1_slot6;
                var2 = var1.portal;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var4 = _closure2_slot6;
                var2['left'] = var4;
                var3 = _closure2_slot5;
                var2['right'] = var3;
                var1[1] = var2;
                return var1;
            };
            var6 = var7.bind(var8)(var5, var6);
            var7 = var8.useState;
            var5 = function() {
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot0;
                var1['estimatedListSize'] = var5;
                var4 = _closure2_slot7;
                var1['sectionsVersioned'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var7.bind(var8)(var5);
            var7 = _closure1_slot2;
            var5 = 2;
            var7 = var7.bind(var4)(var9, var5);
            var5 = 0;
            var9 = var7[var5];
            _closure2_slot14 = var9;
            var5 = 1;
            var5 = var7[var5];
            _closure2_slot15 = var5;
            var21 = var8.useImperativeHandle;
            var20 = arg2;
            var7 = function() {
                var1 = {};
                var2 = function setVisibleItems(arg1) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var3 = _closure2_slot15;
                    var1 = undefined;
                    var2 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var1 = arg1;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 5;
                            var2 = var4[var2];
                            var5 = undefined;
                            var4 = var3.bind(var5)(var2);
                            var3 = _closure4_slot0;
                            var3 = var4.bind(var5)(var1, var3);
                            if(var3) { _fun0002_ip = 48; continue _fun0002 }
 44:
                            var1 = _closure4_slot0;
 48:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['setVisibleItems'] = var2;
                return var1;
            };
            var5 = new Array(0);
            var5 = var21.bind(var8)(var20, var7, var5);
            var7 = var8.useRef;
            var5 = _closure1_slot7;
            var5 = var7.bind(var8)(var5);
            _closure2_slot16 = var5;
            var7 = var8.useMemo;
            var5 = new Array(12);
            var5[0] = var19;
            var5[1] = var18;
            var5[2] = var17;
            var5[3] = var16;
            var5[4] = var15;
            var5[5] = var14;
            var5[6] = var13;
            var5[7] = var12;
            var5[8] = var11;
            var5[9] = var10;
            var5[10] = var9;
            var5[11] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot7;
                    var29 = var3.keysAreUniform;
                    var28 = var3.listId;
                    var47 = var3.itemKeys;
                    var46 = var3.itemSizes;
                    var45 = var3.itemSizeIsUniform;
                    var2 = var3.listFooterKey;
                    var30 = var3.listFooterSize;
                    var6 = var3.listHeaderKey;
                    var35 = var3.listHeaderSize;
                    var4 = var3.sectionsId;
                    var31 = var3.sections;
                    var27 = var3.sectionFooterKeys;
                    var26 = var3.sectionFooterSizeIsUniform;
                    var25 = var3.sectionFooterSizes;
                    var24 = var3.sectionHeaderKeys;
                    var23 = var3.sectionHeaderSizeIsUniform;
                    var22 = var3.sectionHeaderSizes;
                    var21 = function fastestListChildJSX(arg1, arg2) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var5 = arg1;
                            var8 = arg2;
                            var2 = _closure2_slot13;
                            if(var2) { _fun0004_ip = 75; continue _fun0004 }
 19:
                            var3 = _closure1_slot3;
                            var2 = var3.isValidElement;
                            var2 = var2.bind(var3)(var5);
                            if(var2) { _fun0004_ip = 73; continue _fun0004 }
 37:
                            var2 = global;
                            var4 = var2.Error;
                            var2 = var4.prototype;
                            var3 = Object.create(var2, {constructor: {value: var4}});
                            var12 = 'Must return a single child element.';
                            var13 = var3;
                            var2 = new var13[var4](var12, var11);
                            var2 = var2 instanceof Object ? var2 : var3;
                            throw var2;
 73:
                            return var5;
 75:
                            var4 = _closure1_slot5;
                            var3 = _closure1_slot4;
                            var2 = {};
                            var6 = {};
                            var10 = _closure2_slot1;
                            var1 = undefined;
                            var9 = undefined;
                            if(!var10) { _fun0004_ip = 101; continue _fun0004 }
 98:
                            var9 = var8;
 101:
                            var6['width'] = var9;
                            var9 = _closure2_slot1;
                            var7 = undefined;
                            if(var9) { _fun0004_ip = 117; continue _fun0004 }
 114:
                            var7 = var8;
 117:
                            var6['height'] = var7;
                            var7 = 'hidden';
                            var6['overflow'] = var7;
                            var2['style'] = var6;
                            var2['children'] = var5;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    var3 = _closure2_slot14;
                    var3 = var3.sectionsId;
                    if(!(var4 === var3)) { _fun0003_ip = 1840; continue _fun0003 }
 133:
                    var3 = _closure2_slot16;
                    var3 = var3.current;
                    var3 = var3.keyIndex;
                    var20 = global;
                    var7 = var20.Map;
                    var4 = _closure2_slot16;
                    var4 = var4.current;
                    var69 = var4.keys;
                    var5 = var7.prototype;
                    var5 = Object.create(var5, {constructor: {value: var7}});
                    var70 = var5;
                    var4 = new var70[var7](var69, var68);
                    var37 = var4 instanceof Object ? var4 : var5;
                    var4 = var20.Map;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {constructor: {value: var4}});
                    var70 = var5;
                    var4 = new var70[var4](var69);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var5 = new Array(0);
                    var36 = new Array(0);
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var7 = 6;
                    var7 = var9[var7];
                    var18 = undefined;
                    var8 = var8.bind(var18)(var7);
                    var7 = _closure2_slot14;
                    var7 = var8.bind(var18)(var28, var7, var31);
                    var17 = var7.sectionStart;
                    var16 = var7.sectionEnd;
                    var10 = var7.itemStart;
                    var9 = var7.itemEnd;
                    var48 = var17 <= var16;
                    var15 = 7;
                    var14 = '';
                    var13 = '-';
                    var12 = null;
                    var44 = 's';
                    var43 = '-i';
                    var11 = 0;
                    var7 = 1;
                    var42 = var17;
                    var41 = undefined;
                    var40 = undefined;
                    var39 = undefined;
                    var38 = undefined;
                    var34 = undefined;
                    var33 = undefined;
                    var32 = undefined;
                    var8 = undefined;
                    if(!var48) { _fun0003_ip = 737; continue _fun0003 }
 341:
                    var53 = _closure2_slot4;
                    var52 = var38;
                    var51 = var34;
                    var50 = var33;
                    var49 = var32;
                    var48 = var8;
                    if(var53) { _fun0003_ip = 712; continue _fun0003 }
 366:
                    var55 = 0;
                    if(!(var42 === var17)) { _fun0003_ip = 375; continue _fun0003 }
 372:
                    var55 = var10;
 375:
                    var54 = var9;
                    if(!(var42 !== var16)) { _fun0003_ip = 390; continue _fun0003 }
 382:
                    var53 = var31[var42];
                    var54 = var53 - var7;
 390:
                    var53 = var55;
                    var41 = var53;
                    var52 = var38;
                    var51 = var34;
                    var50 = var33;
                    var49 = var32;
                    var48 = var8;
                    var39 = var41;
                    var40 = var54;
                    if(!(var39 <= var40)) { _fun0003_ip = 712; continue _fun0003 }
 424:
                    var56 = _closure2_slot8;
                    var61 = var56.bind(var18)(var42, var53);
                    var56 = var53;
                    if(var45) { _fun0003_ip = 456; continue _fun0003 }
 440:
                    var57 = var46[var42];
                    var57 = var57.sizes;
                    var60 = var57[var56];
                    _fun0003_ip = 470; continue _fun0003;
 456:
                    var57 = var46[var11];
                    var57 = var57.sizes;
                    var60 = var57[var11];
 470:
                    if(var29) { _fun0003_ip = 488; continue _fun0003 }
 473:
                    var57 = var47[var42];
                    var57 = var57.keys;
                    var59 = var57[var56];
                    _fun0003_ip = 501; continue _fun0003;
 488:
                    var57 = var47[var11];
                    var57 = var57.keys;
                    var59 = var57[var11];
 501:
                    var58 = var59;
                    if(!(var14 === var59)) { _fun0003_ip = 526; continue _fun0003 }
 508:
                    var57 = var20.HermesInternal;
                    var57 = var57.concat;
                    var58 = var57.bind(var44)(var42, var43, var56);
 526:
                    var57 = var20.HermesInternal;
                    var57 = var57.concat;
                    var58 = var57.bind(var14)(var28, var13, var58);
                    var57 = var37.get;
                    var57 = var57.bind(var37)(var58);
                    if(!(var12 == var57)) { _fun0003_ip = 586; continue _fun0003 }
 558:
                    var63 = var36.push;
                    var62 = {};
                    var62['keyId'] = var58;
                    var62['item'] = var61;
                    var62['itemSize'] = var60;
                    var62 = var63.bind(var36)(var62);
                    _fun0003_ip = 678; continue _fun0003;
 586:
                    var62 = var4.set;
                    var62 = var62.bind(var4)(var58, var57);
                    var62 = var37.delete;
                    var62 = var62.bind(var37)(var58);
                    var63 = var5.push;
                    var66 = _closure1_slot5;
                    var64 = _closure1_slot0;
                    var62 = _closure1_slot1;
                    var62 = var62[var15];
                    var65 = var64.bind(var18)(var62);
                    var64 = {};
                    var64['portalId'] = var58;
                    var62 = var21.bind(var18)(var61, var60);
                    var64['children'] = var62;
                    var62 = var20.HermesInternal;
                    var62 = var62.concat;
                    var62 = var62.bind(var14)(var57);
                    var62 = var66.bind(var18)(var65, var64, var62);
                    var62 = var63.bind(var5)(var62);
 678:
                    var53 = var56 + 1;
                    var41 = var55;
                    var40 = var54;
                    var52 = var61;
                    var51 = var60;
                    var50 = var59;
                    var49 = var58;
                    var48 = var57;
                    var39 = var53;
                    if(var39 <= var54) { _fun0003_ip = 424; continue _fun0003 }
 712:
                    var42 = var42 + 1;
                    var38 = var52;
                    var34 = var51;
                    var33 = var50;
                    var32 = var49;
                    var8 = var48;
                    if(var42 <= var16) { _fun0003_ip = 341; continue _fun0003 }
 737:
                    var8 = var36.length;
                    var8 = var11 < var8;
                    var34 = 'key-';
                    var33 = var3;
                    var32 = 0;
                    var3 = var33;
                    if(!var8) { _fun0003_ip = 1042; continue _fun0003 }
 766:
                    var8 = var36[var32];
                    var45 = var8.keyId;
                    var44 = var8.item;
                    var8 = var8.itemSize;
                    var38 = var37.size;
                    if(!(!(var38 > var11))) { _fun0003_ip = 893; continue _fun0003 }
 796:
                    var39 = parseFloat(var33);
                    var38 = var39 + 1;
                    var46 = var34 + var39;
                    var39 = var4.set;
                    var39 = var39.bind(var4)(var45, var46);
                    var40 = var5.push;
                    var43 = _closure1_slot5;
                    var41 = _closure1_slot0;
                    var39 = _closure1_slot1;
                    var39 = var39[var15];
                    var42 = var41.bind(var18)(var39);
                    var41 = {};
                    var41['portalId'] = var45;
                    var39 = var21.bind(var18)(var44, var8);
                    var41['children'] = var39;
                    var39 = var20.HermesInternal;
                    var39 = var39.concat;
                    var39 = var39.bind(var14)(var46);
                    var39 = var43.bind(var18)(var42, var41, var39);
                    var39 = var40.bind(var5)(var39);
                    _fun0003_ip = 1021; continue _fun0003;
 893:
                    var39 = var37.keys;
                    var40 = var39.bind(var37)();
                    var39 = var40.next;
                    var39 = var39.bind(var40)();
                    var40 = var39.value;
                    var39 = var37.get;
                    var43 = var39.bind(var37)(var40);
                    var39 = var4.set;
                    var39 = var39.bind(var4)(var45, var43);
                    var39 = var37.delete;
                    var39 = var39.bind(var37)(var40);
                    var39 = var5.push;
                    var42 = _closure1_slot5;
                    var41 = _closure1_slot0;
                    var40 = _closure1_slot1;
                    var40 = var40[var15];
                    var41 = var41.bind(var18)(var40);
                    var40 = {};
                    var40['portalId'] = var45;
                    var8 = var21.bind(var18)(var44, var8);
                    var40['children'] = var8;
                    var8 = var20.HermesInternal;
                    var8 = var8.concat;
                    var8 = var8.bind(var14)(var43);
                    var8 = var42.bind(var18)(var41, var40, var8);
                    var8 = var39.bind(var5)(var8);
                    var38 = var33;
 1021:
                    var32 = var32 + 1;
                    var8 = var36.length;
                    var33 = var38;
                    var3 = var33;
                    if(var32 < var8) { _fun0003_ip = 766; continue _fun0003 }
 1042:
                    var8 = _closure2_slot10;
                    if(!(var12 != var8)) { _fun0003_ip = 1211; continue _fun0003 }
 1053:
                    if(!(var35 > var11)) { _fun0003_ip = 1211; continue _fun0003 }
 1060:
                    var8 = _closure2_slot3;
                    if(var8) { _fun0003_ip = 1117; continue _fun0003 }
 1067:
                    var32 = _closure2_slot4;
                    var8 = false;
                    if(var32) { _fun0003_ip = 1114; continue _fun0003 }
 1076:
                    var8 = false;
                    if(!(var11 === var10)) { _fun0003_ip = 1114; continue _fun0003 }
 1082:
                    var32 = var17 - var7;
                    var8 = true;
                    if(!(var32 >= var11)) { _fun0003_ip = 1114; continue _fun0003 }
 1092:
                    var34 = var31[var32];
                    var34 = var34 > var11;
                    var8 = false;
                    if(var34) { _fun0003_ip = 1114; continue _fun0003 }
 1105:
                    var32 = var32 - 1;
                    var8 = true;
                    if(var32 >= var11) { _fun0003_ip = 1092; continue _fun0003 }
 1114:
                    if(!var8) { _fun0003_ip = 1211; continue _fun0003 }
 1117:
                    var33 = 'lh';
                    if(!(var14 !== var6)) { _fun0003_ip = 1130; continue _fun0003 }
 1127:
                    var33 = var6;
 1130:
                    var8 = var5.push;
                    var32 = _closure1_slot5;
                    var10 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var15];
                    var10 = var10.bind(var18)(var6);
                    var6 = {};
                    var34 = var20.HermesInternal;
                    var34 = var34.concat;
                    var34 = var34.bind(var14)(var28, var13, var33);
                    var6['portalId'] = var34;
                    var34 = _closure2_slot10;
                    var34 = var34.bind(var18)();
                    var34 = var21.bind(var18)(var34, var35);
                    var6['children'] = var34;
                    var6 = var32.bind(var18)(var10, var6, var33);
                    var6 = var8.bind(var5)(var6);
 1211:
                    var6 = _closure2_slot9;
                    if(!(var12 != var6)) { _fun0003_ip = 1421; continue _fun0003 }
 1222:
                    if(!(var30 > var11)) { _fun0003_ip = 1421; continue _fun0003 }
 1229:
                    var6 = _closure2_slot2;
                    if(var6) { _fun0003_ip = 1327; continue _fun0003 }
 1236:
                    var8 = _closure2_slot4;
                    var6 = false;
                    if(var8) { _fun0003_ip = 1324; continue _fun0003 }
 1245:
                    var33 = var20.Math;
                    var32 = var33.max;
                    var8 = var31[var16];
                    var8 = var8 - var7;
                    var8 = var32.bind(var33)(var8, var11);
                    var6 = false;
                    if(!(var9 === var8)) { _fun0003_ip = 1324; continue _fun0003 }
 1276:
                    var9 = var16 + var7;
                    var7 = var31.length;
                    var7 = var9 < var7;
                    var6 = true;
                    if(!var7) { _fun0003_ip = 1324; continue _fun0003 }
 1294:
                    var7 = var31[var9];
                    var7 = var7 > var11;
                    var6 = false;
                    if(var7) { _fun0003_ip = 1324; continue _fun0003 }
 1307:
                    var9 = var9 + 1;
                    var7 = var31.length;
                    var7 = var9 < var7;
                    var6 = true;
                    if(var7) { _fun0003_ip = 1294; continue _fun0003 }
 1324:
                    if(!var6) { _fun0003_ip = 1421; continue _fun0003 }
 1327:
                    var6 = 'lf';
                    if(!(var14 !== var2)) { _fun0003_ip = 1340; continue _fun0003 }
 1337:
                    var6 = var2;
 1340:
                    var2 = var20.HermesInternal;
                    var2 = var2.concat;
                    var9 = var2.bind(var14)(var28, var13, var6);
                    var6 = var5.push;
                    var8 = _closure1_slot5;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var15];
                    var7 = var7.bind(var18)(var2);
                    var2 = {};
                    var2['portalId'] = var9;
                    var10 = _closure2_slot9;
                    var10 = var10.bind(var18)();
                    var10 = var21.bind(var18)(var10, var30);
                    var2['children'] = var10;
                    var2 = var8.bind(var18)(var7, var2, var9);
                    var2 = var6.bind(var5)(var2);
 1421:
                    var30 = var17 <= var16;
                    var10 = 'sh';
                    var9 = 'sf';
                    var8 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var2 = undefined;
                    if(!var30) { _fun0003_ip = 1822; continue _fun0003 }
 1447:
                    var32 = _closure2_slot4;
                    var31 = var7;
                    var30 = var2;
                    if(var32) { _fun0003_ip = 1806; continue _fun0003 }
 1463:
                    if(var26) { _fun0003_ip = 1472; continue _fun0003 }
 1466:
                    var35 = var25[var17];
                    _fun0003_ip = 1476; continue _fun0003;
 1472:
                    var35 = var25[var11];
 1476:
                    var34 = var7;
                    if(!(var35 > var11)) { _fun0003_ip = 1621; continue _fun0003 }
 1486:
                    var32 = _closure2_slot11;
                    var34 = var7;
                    if(!(var12 != var32)) { _fun0003_ip = 1621; continue _fun0003 }
 1500:
                    if(var29) { _fun0003_ip = 1509; continue _fun0003 }
 1503:
                    var32 = var27[var17];
                    _fun0003_ip = 1513; continue _fun0003;
 1509:
                    var32 = var27[var11];
 1513:
                    var36 = var32;
                    if(!(var14 === var32)) { _fun0003_ip = 1536; continue _fun0003 }
 1520:
                    var33 = var20.HermesInternal;
                    var33 = var33.concat;
                    var36 = var33.bind(var9)(var17);
 1536:
                    var33 = var20.HermesInternal;
                    var33 = var33.concat;
                    var39 = var33.bind(var14)(var28, var13, var36);
                    var36 = var5.push;
                    var38 = _closure1_slot5;
                    var37 = _closure1_slot0;
                    var33 = _closure1_slot1;
                    var33 = var33[var15];
                    var37 = var37.bind(var18)(var33);
                    var33 = {};
                    var33['portalId'] = var39;
                    var40 = _closure2_slot11;
                    var40 = var40.bind(var18)(var17);
                    var40 = var21.bind(var18)(var40, var35);
                    var33['children'] = var40;
                    var33 = var38.bind(var18)(var37, var33, var39);
                    var33 = var36.bind(var5)(var33);
                    var34 = var32;
 1621:
                    if(var23) { _fun0003_ip = 1630; continue _fun0003 }
 1624:
                    var33 = var22[var17];
                    _fun0003_ip = 1634; continue _fun0003;
 1630:
                    var33 = var22[var11];
 1634:
                    var8 = var35;
                    var31 = var34;
                    var30 = var2;
                    var6 = var33;
                    if(!(var6 > var11)) { _fun0003_ip = 1806; continue _fun0003 }
 1653:
                    var32 = _closure2_slot12;
                    var8 = var35;
                    var31 = var34;
                    var6 = var33;
                    var30 = var2;
                    if(!(var12 != var32)) { _fun0003_ip = 1806; continue _fun0003 }
 1676:
                    if(var29) { _fun0003_ip = 1685; continue _fun0003 }
 1679:
                    var32 = var24[var17];
                    _fun0003_ip = 1689; continue _fun0003;
 1685:
                    var32 = var24[var11];
 1689:
                    var37 = var32;
                    if(!(var14 === var32)) { _fun0003_ip = 1712; continue _fun0003 }
 1696:
                    var36 = var20.HermesInternal;
                    var36 = var36.concat;
                    var37 = var36.bind(var10)(var17);
 1712:
                    var36 = var20.HermesInternal;
                    var36 = var36.concat;
                    var40 = var36.bind(var14)(var28, var13, var37);
                    var37 = var5.push;
                    var39 = _closure1_slot5;
                    var38 = _closure1_slot0;
                    var36 = _closure1_slot1;
                    var36 = var36[var15];
                    var38 = var38.bind(var18)(var36);
                    var36 = {};
                    var36['portalId'] = var40;
                    var41 = _closure2_slot12;
                    var41 = var41.bind(var18)(var17);
                    var41 = var21.bind(var18)(var41, var33);
                    var36['children'] = var41;
                    var36 = var39.bind(var18)(var38, var36, var40);
                    var36 = var37.bind(var5)(var36);
                    var8 = var35;
                    var31 = var34;
                    var6 = var33;
                    var30 = var32;
 1806:
                    var17 = var17 + 1;
                    var7 = var31;
                    var2 = var30;
                    if(var17 <= var16) { _fun0003_ip = 1447; continue _fun0003 }
 1822:
                    var2 = {};
                    var2['items'] = var5;
                    var2['keys'] = var4;
                    var2['keyIndex'] = var3;
                    return var2;
 1840:
                    var1 = _closure2_slot16;
                    var1 = var1.current;
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var3, var5);
            _closure2_slot17 = var5;
            var7 = var8.useEffect;
            var3 = new Array(1);
            var3[0] = var5;
            var2 = function() {
                var2 = _closure2_slot16;
                var1 = _closure2_slot17;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var2, var3);
            var3 = _closure1_slot5;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = 'none';
            var1['pointerEvents'] = var7;
            var1['style'] = var6;
            var5 = var5.items;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/fastest_list/FastestListChildren.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
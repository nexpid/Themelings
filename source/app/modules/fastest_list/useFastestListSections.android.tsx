// app/modules/fastest_list/useFastestListSections.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var5;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot2 = var4;
    var4 = 4;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/fastest_list/useFastestListSections.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFastestListSections(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var10 = var4.fastestListId;
            var _closure2_slot0 = var10;
            var15 = var4.itemSize;
            var _closure2_slot1 = var15;
            var16 = var4.keyExtractor;
            var _closure2_slot2 = var16;
            var14 = var4.listFooterSize;
            var3 = undefined;
            if(!(var14 === var3)) { _fun0001_ip = 49; continue _fun0001 }
 47:
            var14 = 0;
 49:
            var _closure2_slot3 = var14;
            var13 = var4.listHeaderSize;
            if(!(var13 === var3)) { _fun0001_ip = 65; continue _fun0001 }
 63:
            var13 = 0;
 65:
            var _closure2_slot4 = var13;
            var2 = var4.sections;
            var _closure2_slot5 = var2;
            var12 = var4.sectionHeaderSize;
            if(!(var12 === var3)) { _fun0001_ip = 91; continue _fun0001 }
 89:
            var12 = 0;
 91:
            var _closure2_slot6 = var12;
            var11 = var4.sectionFooterSize;
            if(!(var11 === var3)) { _fun0001_ip = 107; continue _fun0001 }
 105:
            var11 = 0;
 107:
            var _closure2_slot7 = var11;
            var _closure2_slot8 = var3;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var7 = 1;
            var7 = var5[var7];
            var8 = var4.bind(var3)(var7);
            var7 = function() {
                var1 = 0;
                var _closure3_slot0 = var1;
                var1 = {};
                var3 = function getId() {
                    var3 = _closure3_slot0;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = '';
                    var1 = var2.bind(var1)(var3);
                    return var1;
                };
                var1['getId'] = var3;
                var2 = function incrementId() {
                    var1 = _closure3_slot0;
                    var1 = parseFloat(var1);
                    var2 = var1 + 1;
                    _closure3_slot0 = var2;
                    return var1;
                };
                var1['incrementId'] = var2;
                return var1;
            };
            var9 = var8.bind(var3)(var7);
            _closure2_slot8 = var9;
            var8 = _closure1_slot2;
            var7 = var8.useMemo;
            var6 = new Array(9);
            var6[0] = var16;
            var6[1] = var15;
            var6[2] = var14;
            var6[3] = var13;
            var6[4] = var12;
            var6[5] = var11;
            var6[6] = var10;
            var6[7] = var9;
            var6[8] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = new Array(0);
                    var1 = _closure2_slot1;
                    var5 = 'number';
                    var1 = typeof var1;
                    var3 = var5 === var1;
                    var2 = new Array(0);
                    var1 = _closure2_slot3;
                    var1 = typeof var1;
                    if(!(var5 !== var1)) { _fun0002_ip = 49; continue _fun0002 }
 37:
                    var6 = _closure2_slot3;
                    var1 = undefined;
                    var14 = var6.bind(var1)();
                    _fun0002_ip = 53; continue _fun0002;
 49:
                    var14 = _closure2_slot3;
 53:
                    var1 = _closure2_slot2;
                    var28 = null;
                    var6 = var28 == var1;
                    var27 = undefined;
                    var1 = undefined;
                    if(var6) { _fun0002_ip = 112; continue _fun0002 }
 70:
                    var8 = _closure2_slot2;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var6 = 2;
                    var6 = var9[var6];
                    var6 = var7.bind(var27)(var6);
                    var7 = var6.LIST_FOOTER;
                    var6 = 0;
                    var1 = var8.bind(var27)(var7, var6, var6);
 112:
                    var6 = var28 != var1;
                    var26 = '';
                    var15 = var26;
                    if(!var6) { _fun0002_ip = 129; continue _fun0002 }
 126:
                    var15 = var1;
 129:
                    var1 = _closure2_slot4;
                    var1 = typeof var1;
                    if(!(var5 !== var1)) { _fun0002_ip = 150; continue _fun0002 }
 140:
                    var1 = _closure2_slot4;
                    var12 = var1.bind(var27)();
                    _fun0002_ip = 154; continue _fun0002;
 150:
                    var12 = _closure2_slot4;
 154:
                    var1 = _closure2_slot2;
                    var6 = var28 == var1;
                    var1 = undefined;
                    if(var6) { _fun0002_ip = 209; continue _fun0002 }
 167:
                    var8 = _closure2_slot2;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var6 = 2;
                    var6 = var9[var6];
                    var6 = var7.bind(var27)(var6);
                    var7 = var6.LIST_HEADER;
                    var6 = 0;
                    var1 = var8.bind(var27)(var7, var6, var6);
 209:
                    var6 = var28 != var1;
                    var13 = var26;
                    if(!var6) { _fun0002_ip = 222; continue _fun0002 }
 219:
                    var13 = var1;
 222:
                    var10 = new Array(0);
                    var9 = new Array(0);
                    var1 = _closure2_slot6;
                    var1 = typeof var1;
                    var8 = var5 === var1;
                    var7 = new Array(0);
                    var6 = new Array(0);
                    var1 = _closure2_slot7;
                    var1 = typeof var1;
                    var5 = var5 === var1;
                    var1 = _closure2_slot2;
                    var16 = var28 == var1;
                    if(!var16) { _fun0002_ip = 315; continue _fun0002 }
 271:
                    var17 = var4.push;
                    var1 = {};
                    var18 = [''];
                    var1['keys'] = var18;
                    var1 = var17.bind(var4)(var1);
                    var1 = var10.push;
                    var1 = var1.bind(var10)(var26);
                    var1 = var7.push;
                    var1 = var1.bind(var7)(var26);
 315:
                    if(!var3) { _fun0002_ip = 347; continue _fun0002 }
 318:
                    var17 = var2.push;
                    var1 = {};
                    var19 = _closure2_slot1;
                    var18 = new Array(1);
                    var18[0] = var19;
                    var1['sizes'] = var18;
                    var1 = var17.bind(var2)(var1);
 347:
                    if(!var8) { _fun0002_ip = 364; continue _fun0002 }
 350:
                    var17 = var9.push;
                    var1 = _closure2_slot6;
                    var1 = var17.bind(var9)(var1);
 364:
                    if(!var5) { _fun0002_ip = 381; continue _fun0002 }
 367:
                    var17 = var6.push;
                    var1 = _closure2_slot7;
                    var1 = var17.bind(var6)(var1);
 381:
                    if(!var5) { _fun0002_ip = 396; continue _fun0002 }
 384:
                    if(!var8) { _fun0002_ip = 396; continue _fun0002 }
 387:
                    if(!var3) { _fun0002_ip = 396; continue _fun0002 }
 390:
                    if(var16) { _fun0002_ip = 832; continue _fun0002 }
 396:
                    var1 = _closure2_slot5;
                    var1 = var1.length;
                    var25 = 0;
                    var1 = var25 < var1;
                    var23 = 2;
                    var22 = 0;
                    var21 = undefined;
                    var20 = undefined;
                    var19 = undefined;
                    var18 = undefined;
                    var17 = undefined;
                    if(!var1) { _fun0002_ip = 832; continue _fun0002 }
 435:
                    if(var8) { _fun0002_ip = 457; continue _fun0002 }
 438:
                    var29 = var9.push;
                    var1 = _closure2_slot6;
                    var1 = var1.bind(var27)(var22);
                    var1 = var29.bind(var9)(var1);
 457:
                    if(var5) { _fun0002_ip = 479; continue _fun0002 }
 460:
                    var29 = var6.push;
                    var1 = _closure2_slot7;
                    var1 = var1.bind(var27)(var22);
                    var1 = var29.bind(var6)(var1);
 479:
                    if(var16) { _fun0002_ip = 602; continue _fun0002 }
 482:
                    var30 = var10.push;
                    var29 = _closure2_slot2;
                    var31 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var23];
                    var1 = var31.bind(var27)(var1);
                    var1 = var1.SECTION_HEADER;
                    var29 = var29.bind(var27)(var1, var22, var25);
                    var31 = var28 != var29;
                    var1 = var26;
                    if(!var31) { _fun0002_ip = 534; continue _fun0002 }
 531:
                    var1 = var29;
 534:
                    var1 = var30.bind(var10)(var1);
                    var31 = var7.push;
                    var30 = _closure2_slot2;
                    var32 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var23];
                    var1 = var32.bind(var27)(var1);
                    var1 = var1.SECTION_FOOTER;
                    var1 = var30.bind(var27)(var1, var22, var25);
                    var32 = var28 != var1;
                    var30 = var26;
                    if(!var32) { _fun0002_ip = 591; continue _fun0002 }
 588:
                    var30 = var1;
 591:
                    var30 = var31.bind(var7)(var30);
                    var21 = var29;
                    var20 = var1;
 602:
                    if(!var3) { _fun0002_ip = 614; continue _fun0002 }
 605:
                    var29 = var17;
                    if(var16) { _fun0002_ip = 810; continue _fun0002 }
 614:
                    var1 = _closure2_slot5;
                    var31 = var1[var22];
                    if(var3) { _fun0002_ip = 646; continue _fun0002 }
 625:
                    var30 = var2.push;
                    var1 = {};
                    var32 = new Array(0);
                    var1['sizes'] = var32;
                    var1 = var30.bind(var2)(var1);
 646:
                    if(var16) { _fun0002_ip = 669; continue _fun0002 }
 649:
                    var30 = var4.push;
                    var1 = {};
                    var32 = new Array(0);
                    var1['keys'] = var32;
                    var1 = var30.bind(var4)(var1);
 669:
                    var32 = var25 < var31;
                    var30 = 0;
                    var1 = var17;
                    var19 = var31;
                    var18 = 0;
                    var29 = var1;
                    if(!var32) { _fun0002_ip = 810; continue _fun0002 }
 689:
                    if(var3) { _fun0002_ip = 722; continue _fun0002 }
 692:
                    var32 = var2[var22];
                    var34 = var32.sizes;
                    var33 = var34.push;
                    var32 = _closure2_slot1;
                    var32 = var32.bind(var27)(var22, var30);
                    var32 = var33.bind(var34)(var32);
 722:
                    if(var16) { _fun0002_ip = 794; continue _fun0002 }
 725:
                    var32 = var4[var22];
                    var35 = var32.keys;
                    var34 = var35.push;
                    var33 = _closure2_slot2;
                    var36 = _closure1_slot0;
                    var32 = _closure1_slot1;
                    var32 = var32[var23];
                    var32 = var36.bind(var27)(var32);
                    var32 = var32.ITEM;
                    var32 = var33.bind(var27)(var32, var22, var30);
                    var36 = var28 != var32;
                    var33 = var26;
                    if(!var36) { _fun0002_ip = 786; continue _fun0002 }
 783:
                    var33 = var32;
 786:
                    var33 = var34.bind(var35)(var33);
                    var1 = var32;
 794:
                    var30 = var30 + 1;
                    var19 = var31;
                    var29 = var1;
                    var18 = var30;
                    if(var18 < var31) { _fun0002_ip = 689; continue _fun0002 }
 810:
                    var22 = var22 + 1;
                    var1 = _closure2_slot5;
                    var1 = var1.length;
                    var17 = var29;
                    if(var22 < var1) { _fun0002_ip = 435; continue _fun0002 }
 832:
                    var1 = {};
                    var1['keysAreUniform'] = var16;
                    var16 = _closure2_slot0;
                    var1['listId'] = var16;
                    var1['listFooterKey'] = var15;
                    var1['listFooterSize'] = var14;
                    var1['listHeaderKey'] = var13;
                    var1['listHeaderSize'] = var12;
                    var12 = _closure2_slot5;
                    var1['sections'] = var12;
                    var12 = _closure2_slot8;
                    var11 = var12.getId;
                    var11 = var11.bind(var12)();
                    var1['sectionsId'] = var11;
                    var1['sectionHeaderKeys'] = var10;
                    var1['sectionHeaderSizes'] = var9;
                    var1['sectionHeaderSizeIsUniform'] = var8;
                    var1['sectionFooterKeys'] = var7;
                    var1['sectionFooterSizes'] = var6;
                    var1['sectionFooterSizeIsUniform'] = var5;
                    var1['itemKeys'] = var4;
                    var1['itemSizeIsUniform'] = var3;
                    var1['itemSizes'] = var2;
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var2, var6);
            var7 = var8.useEffect;
            var6 = new Array(2);
            var6[0] = var9;
            var6[1] = var2;
            var1 = function() {
                var2 = _closure2_slot8;
                var1 = var2.incrementId;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var1 = var7.bind(var8)(var1, var6);
            var1 = 3;
            var1 = var5[var1];
            var1 = var4.bind(var3)(var1);
            var1 = var1.bind(var3)(var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
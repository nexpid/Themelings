// app/modules/fastest_list/getFastestListVisibleItemsDefault.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/fastest_list/getFastestListVisibleItemsDefault.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getFastestListVisibleItemsDefault(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.estimatedListSize;
            var1 = var1.sectionsVersioned;
            var13 = var1.itemSizeIsUniform;
            var12 = var1.itemSizes;
            var11 = var1.listHeaderSize;
            var2 = var1.sectionsId;
            var10 = var1.sections;
            var9 = var1.sectionFooterSizeIsUniform;
            var8 = var1.sectionFooterSizes;
            var7 = var1.sectionHeaderSizeIsUniform;
            var6 = var1.sectionHeaderSizes;
            var1 = {'sectionsId': null, 'sectionStart': 0, 'sectionEnd': 0, 'itemStart': 0, 'itemEnd': 4294967295};
            var1['sectionsId'] = var2;
            var5 = 0;
            if(!(!(var11 >= var14))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var10.length;
            var2 = var5 < var2;
            var3 = 0;
            var4 = undefined;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var10[var3];
            var15 = var11;
            if(!(var5 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1['sectionEnd'] = var3;
            var1['itemEnd'] = var5;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var6[var3];
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var2 = var6[var5];
case 10:
            var16 = var11 + var2;
            if(!(!(var16 >= var14))) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var10[var3];
            var2 = var5 < var2;
            var19 = var16;
            var18 = 0;
            var17 = var19;
            var16 = 0;
            if(!var2) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1['itemEnd'] = var18;
            if(var13) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var2 = var12[var3];
            var2 = var2.sizes;
            var2 = var2[var18];
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var20 = var12[var5];
            var20 = var20.sizes;
            var2 = var20[var5];
case 17:
            var21 = var19 + var2;
            if(!(!(var21 >= var14))) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var18 = var18 + 1;
            var2 = var10[var3];
            var19 = var21;
            var17 = var19;
            var16 = var18;
            if(var16 < var2) { _fun0001_ip = 14; continue _fun0001 }
case 13:
            if(var9) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var2 = var8[var3];
            _fun0001_ip = 22; continue _fun0001;
case 20:
            var2 = var8[var5];
case 22:
            var15 = var17 + var2;
            var4 = var16;
            if(!(var15 >= var14)) { _fun0001_ip = 6; continue _fun0001 }
case 23:
            return var1;
case 18:
            return var1;
case 11:
            return var1;
case 6:
            var3 = var3 + 1;
            var2 = var10.length;
            var11 = var15;
            if(var3 < var2) { _fun0001_ip = 5; continue _fun0001 }
case 4:
            return var1;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
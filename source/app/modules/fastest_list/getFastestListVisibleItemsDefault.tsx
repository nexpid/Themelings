// app/modules/fastest_list/getFastestListVisibleItemsDefault.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = native7;
    var1 = 0;
    var4 = var2[var1];
    var2 = native2;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/fastest_list/getFastestListVisibleItemsDefault.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getFastestListVisibleItemsDefault(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(!(!(var11 >= var14))) { _fun0001_ip = 302; continue _fun0001 }
 98:
            var2 = var10.length;
            var2 = var5 < var2;
            var3 = 0;
            var4 = undefined;
            if(!var2) { _fun0001_ip = 300; continue _fun0001 }
 117:
            var2 = var10[var3];
            var15 = var11;
            if(!(var5 !== var2)) { _fun0001_ip = 282; continue _fun0001 }
 131:
            var1['sectionEnd'] = var3;
            var1['itemEnd'] = var5;
            if(var7) { _fun0001_ip = 152; continue _fun0001 }
 146:
            var2 = var6[var3];
            _fun0001_ip = 156; continue _fun0001;
 152:
            var2 = var6[var5];
 156:
            var16 = var11 + var2;
            if(!(!(var16 >= var14))) { _fun0001_ip = 280; continue _fun0001 }
 164:
            var2 = var10[var3];
            var2 = var5 < var2;
            var19 = var16;
            var18 = 0;
            var17 = var19;
            var16 = 0;
            if(!var2) { _fun0001_ip = 252; continue _fun0001 }
 185:
            var1['itemEnd'] = var18;
            if(var13) { _fun0001_ip = 210; continue _fun0001 }
 194:
            var2 = var12[var3];
            var2 = var2.sizes;
            var2 = var2[var18];
            _fun0001_ip = 224; continue _fun0001;
 210:
            var20 = var12[var5];
            var20 = var20.sizes;
            var2 = var20[var5];
 224:
            var21 = var19 + var2;
            if(!(!(var21 >= var14))) { _fun0001_ip = 278; continue _fun0001 }
 232:
            var18 = var18 + 1;
            var2 = var10[var3];
            var19 = var21;
            var17 = var19;
            var16 = var18;
            if(var16 < var2) { _fun0001_ip = 185; continue _fun0001 }
 252:
            if(var9) { _fun0001_ip = 261; continue _fun0001 }
 255:
            var2 = var8[var3];
            _fun0001_ip = 265; continue _fun0001;
 261:
            var2 = var8[var5];
 265:
            var15 = var17 + var2;
            var4 = var16;
            if(!(var15 >= var14)) { _fun0001_ip = 282; continue _fun0001 }
 276:
            return var1;
 278:
            return var1;
 280:
            return var1;
 282:
            var3 = var3 + 1;
            var2 = var10.length;
            var11 = var15;
            if(var3 < var2) { _fun0001_ip = 117; continue _fun0001 }
 300:
            return var1;
 302:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
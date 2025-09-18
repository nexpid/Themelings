// app/modules/fastest_list/useFastestListUnexpectedItemSizeCallback.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/fastest_list/useFastestListUnexpectedItemSizeCallback.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFastestListUnexpectedItemSizeCallback(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var8 = var1.nativeEvent;
                var1 = _closure2_slot0;
                var9 = var1.current;
                var1 = var8.isSectionHeader;
                if(var1) { _fun0001_ip = 127; continue _fun0001 }
 30:
                var1 = var8.isSectionFooter;
                if(var1) { _fun0001_ip = 77; continue _fun0001 }
 39:
                var4 = var9.renderItem;
                var3 = var8.section;
                var1 = var8.item;
                var1 = var4.bind(var9)(var3, var1);
                var3 = null;
                var3 = var3 != var1;
                var5 = undefined;
                if(!var3) { _fun0001_ip = 75; continue _fun0001 }
 72:
                var5 = var1;
 75:
                _fun0001_ip = 125; continue _fun0001;
 77:
                var1 = var9.renderSectionFooter;
                var4 = null;
                var6 = var4 == var1;
                var3 = undefined;
                if(var6) { _fun0001_ip = 110; continue _fun0001 }
 94:
                var7 = var9.renderSectionFooter;
                var6 = var8.section;
                var3 = var7.bind(var9)(var6);
 110:
                var4 = var4 != var3;
                var1 = undefined;
                if(!var4) { _fun0001_ip = 122; continue _fun0001 }
 119:
                var1 = var3;
 122:
                var5 = var1;
 125:
                _fun0001_ip = 175; continue _fun0001;
 127:
                var1 = var9.renderSectionHeader;
                var4 = null;
                var6 = var4 == var1;
                var3 = undefined;
                if(var6) { _fun0001_ip = 160; continue _fun0001 }
 144:
                var7 = var9.renderSectionHeader;
                var6 = var8.section;
                var3 = var7.bind(var9)(var6);
 160:
                var4 = var4 != var3;
                var1 = undefined;
                if(!var4) { _fun0001_ip = 172; continue _fun0001 }
 169:
                var1 = var3;
 172:
                var5 = var1;
 175:
                var4 = null;
                var3 = var4 == var5;
                var1 = undefined;
                var9 = undefined;
                if(var3) { _fun0001_ip = 193; continue _fun0001 }
 188:
                var9 = var5.props;
 193:
                var6 = var4 == var5;
                var3 = undefined;
                if(var6) { _fun0001_ip = 207; continue _fun0001 }
 202:
                var3 = var5.type;
 207:
                var10 = 'function';
                var5 = typeof var3;
                if(!(var10 === var5)) { _fun0001_ip = 234; continue _fun0001 }
 218:
                var5 = var3.name;
                var6 = var5.length;
                var5 = 0;
                if(!(!(var6 > var5))) { _fun0001_ip = 285; continue _fun0001 }
 234:
                var6 = var4 == var3;
                var5 = undefined;
                if(var6) { _fun0001_ip = 248; continue _fun0001 }
 243:
                var5 = var3.type;
 248:
                var7 = typeof var5;
                var6 = undefined;
                if(!(var10 === var7)) { _fun0001_ip = 283; continue _fun0001 }
 257:
                var7 = var5.name;
                var10 = var7.length;
                var7 = 0;
                var7 = var10 > var7;
                var6 = undefined;
                if(!var7) { _fun0001_ip = 283; continue _fun0001 }
 278:
                var6 = var5.name;
 283:
                _fun0001_ip = 290; continue _fun0001;
 285:
                var6 = var3.name;
 290:
                var5 = var4 == var6;
                var3 = undefined;
                if(!var5) { _fun0001_ip = 331; continue _fun0001 }
 299:
                var5 = global;
                var7 = var5.Object;
                var5 = var7.keys;
                var9 = var5.bind(var7)(var9);
                var7 = var9.join;
                var5 = ',';
                var3 = var7.bind(var9)(var5);
 331:
                var5 = var8.isSectionHeader;
                if(var5) { _fun0001_ip = 426; continue _fun0001 }
 340:
                var7 = var8.isSectionFooter;
                var11 = var8.section;
                var5 = global;
                if(var7) { _fun0001_ip = 397; continue _fun0001 }
 356:
                var15 = var8.item;
                var7 = var5.HermesInternal;
                var12 = var7.concat;
                var18 = 'Item at section ';
                var16 = ' and index ';
                var14 = '.';
                var17 = var11;
                var7 = var18[var12](var17, var16, var15, var14, var13);
                _fun0001_ip = 424; continue _fun0001;
 397:
                var5 = var5.HermesInternal;
                var10 = var5.concat;
                var9 = 'Section footer at section ';
                var5 = '.';
                var7 = var10.bind(var9)(var11, var5);
 424:
                _fun0001_ip = 460; continue _fun0001;
 426:
                var11 = var8.section;
                var5 = global;
                var5 = var5.HermesInternal;
                var10 = var5.concat;
                var9 = 'Section header at section ';
                var5 = '.';
                var7 = var10.bind(var9)(var11, var5);
 460:
                var5 = {};
                var17 = var8.sizeExpected;
                var15 = var8.size;
                var8 = global;
                var8 = var8.HermesInternal;
                var11 = var8.concat;
                var18 = 'Expected item size ';
                var16 = ', but got ';
                var14 = '.';
                var8 = var18[var11](var17, var16, var15, var14, var13);
                var5['detailMessage'] = var8;
                var5['itemPosition'] = var7;
                var7 = var4 != var6;
                var4 = 'Unknown component.';
                if(!var7) { _fun0001_ip = 538; continue _fun0001 }
 535:
                var4 = var6;
 538:
                var5['itemName'] = var4;
                var5['itemProps'] = var3;
                var2 = _closure2_slot0;
                var2 = var2.current;
                var2 = var2.listId;
                var5['listId'] = var2;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 1;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.logFastestListError;
                var2 = 'Expected item size mismatch.';
                var2 = var3.bind(var4)(var2, var5);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
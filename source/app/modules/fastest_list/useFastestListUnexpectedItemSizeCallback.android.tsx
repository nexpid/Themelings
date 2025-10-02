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
case 0:
                var1 = arg1;
                var8 = var1.nativeEvent;
                var1 = _closure2_slot0;
                var9 = var1.current;
                var1 = var8.isSectionHeader;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = var8.isSectionFooter;
                if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = var9.renderItem;
                var3 = var8.section;
                var1 = var8.item;
                var1 = var4.bind(var9)(var3, var1);
                var3 = null;
                var3 = var3 != var1;
                var5 = undefined;
                if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var5 = var1;
case 6:
                _fun0001_ip = 8; continue _fun0001;
case 4:
                var1 = var9.renderSectionFooter;
                var4 = null;
                var6 = var4 == var1;
                var3 = undefined;
                if(var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var7 = var9.renderSectionFooter;
                var6 = var8.section;
                var3 = var7.bind(var9)(var6);
case 9:
                var4 = var4 != var3;
                var1 = undefined;
                if(!var4) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                var1 = var3;
case 11:
                var5 = var1;
case 8:
                _fun0001_ip = 13; continue _fun0001;
case 2:
                var1 = var9.renderSectionHeader;
                var4 = null;
                var6 = var4 == var1;
                var3 = undefined;
                if(var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                var7 = var9.renderSectionHeader;
                var6 = var8.section;
                var3 = var7.bind(var9)(var6);
case 14:
                var4 = var4 != var3;
                var1 = undefined;
                if(!var4) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                var1 = var3;
case 16:
                var5 = var1;
case 13:
                var4 = null;
                var3 = var4 == var5;
                var1 = undefined;
                var9 = undefined;
                if(var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                var9 = var5.props;
case 18:
                var6 = var4 == var5;
                var3 = undefined;
                if(var6) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                var3 = var5.type;
case 20:
                var10 = 'function';
                var5 = typeof var3;
                if(!(var10 === var5)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                var5 = var3.name;
                var6 = var5.length;
                var5 = 0;
                if(!(!(var6 > var5))) { _fun0001_ip = 24; continue _fun0001 }
case 22:
                var6 = var4 == var3;
                var5 = undefined;
                if(var6) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                var5 = var3.type;
case 25:
                var7 = typeof var5;
                var6 = undefined;
                if(!(var10 === var7)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
                var7 = var5.name;
                var10 = var7.length;
                var7 = 0;
                var7 = var10 > var7;
                var6 = undefined;
                if(!var7) { _fun0001_ip = 27; continue _fun0001 }
case 29:
                var6 = var5.name;
case 27:
                _fun0001_ip = 30; continue _fun0001;
case 24:
                var6 = var3.name;
case 30:
                var5 = var4 == var6;
                var3 = undefined;
                if(!var5) { _fun0001_ip = 31; continue _fun0001 }
case 32:
                var5 = global;
                var7 = var5.Object;
                var5 = var7.keys;
                var9 = var5.bind(var7)(var9);
                var7 = var9.join;
                var5 = ',';
                var3 = var7.bind(var9)(var5);
case 31:
                var5 = var8.isSectionHeader;
                if(var5) { _fun0001_ip = 33; continue _fun0001 }
case 34:
                var7 = var8.isSectionFooter;
                var11 = var8.section;
                var5 = global;
                if(var7) { _fun0001_ip = 35; continue _fun0001 }
case 36:
                var15 = var8.item;
                var7 = var5.HermesInternal;
                var12 = var7.concat;
                var18 = 'Item at section ';
                var16 = ' and index ';
                var14 = '.';
                var17 = var11;
                var7 = var18[var12](var17, var16, var15, var14, var13);
                _fun0001_ip = 37; continue _fun0001;
case 35:
                var5 = var5.HermesInternal;
                var10 = var5.concat;
                var9 = 'Section footer at section ';
                var5 = '.';
                var7 = var10.bind(var9)(var11, var5);
case 37:
                _fun0001_ip = 38; continue _fun0001;
case 33:
                var11 = var8.section;
                var5 = global;
                var5 = var5.HermesInternal;
                var10 = var5.concat;
                var9 = 'Section header at section ';
                var5 = '.';
                var7 = var10.bind(var9)(var11, var5);
case 38:
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
                if(!var7) { _fun0001_ip = 39; continue _fun0001 }
case 40:
                var4 = var6;
case 39:
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
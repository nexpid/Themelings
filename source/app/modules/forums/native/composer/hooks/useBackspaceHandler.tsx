// app/modules/forums/native/composer/hooks/useBackspaceHandler.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var4;
    var4 = /((\ud83c[\udde6-\uddff]){2}|([#*0-9]\u20e3)|(\u00a9|\u00ae|[\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])((\ud83c[\udffb-\udfff])?(\ud83e[\uddb0-\uddb3])?(\ufe0f?\u200d([\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])\ufe0f?)?)*)/g;
    var _closure1_slot1 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/composer/hooks/useBackspaceHandler.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBackspaceHandler(arg1) {
        var2 = arg1;
        var7 = var2.selection;
        var _closure2_slot0 = var7;
        var6 = var2.draftContent;
        var _closure2_slot1 = var6;
        var5 = var2.handleTextChange;
        var _closure2_slot2 = var5;
        var4 = _closure1_slot0;
        var3 = var4.useCallback;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var5 = var1.start;
                var10 = var1.end;
                var6 = 0;
                if(!(var6 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = null;
                var1 = var1 == var10;
                var7 = 1;
                var4 = var7;
                if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = var7;
                if(!(var5 !== var10)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
                var8 = _closure2_slot2;
                var9 = _closure2_slot1;
                var1 = var9.substring;
                var3 = var1.bind(var9)(var6, var5);
                var1 = var9.substring;
                var1 = var1.bind(var9)(var10);
                var3 = var3 + var1;
                var1 = undefined;
                var1 = var8.bind(var1)(var3);
                _fun0001_ip = 2; continue _fun0001;
case 4:
                if(!(var5 >= var4)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                var9 = _closure1_slot1;
                var8 = var9.test;
                var11 = _closure2_slot1;
                var10 = var11.substring;
                var1 = var5 - var4;
                var1 = var10.bind(var11)(var1, var5);
                var1 = var8.bind(var9)(var1);
                if(var1) { _fun0001_ip = 9; continue _fun0001 }
case 7:
                var8 = var4 + 1;
                _fun0001_ip = 10; continue _fun0001;
case 9:
                var9 = var4 + var7;
                var1 = var4;
                if(!(var5 >= var9)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                var10 = _closure1_slot1;
                var9 = var10.test;
                var12 = _closure2_slot1;
                var11 = var12.substring;
                var3 = var5 - var4;
                var3 = var3 - var7;
                var3 = var11.bind(var12)(var3, var5);
                var3 = var9.bind(var10)(var3);
                var1 = var4;
                if(!var3) { _fun0001_ip = 11; continue _fun0001 }
case 13:
                var8 = var4 + 1;
case 10:
                var3 = 8;
                var4 = var8;
                var1 = var7;
                if(var4 <= var3) { _fun0001_ip = 4; continue _fun0001 }
case 11:
                var3 = _closure2_slot2;
                var4 = _closure2_slot1;
                var2 = var4.substring;
                var1 = var5 - var1;
                var2 = var2.bind(var4)(var6, var1);
                var1 = var4.substring;
                var1 = var1.bind(var4)(var5);
                var2 = var2 + var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useBackspaceHandler'] = var2;
    return var1;
})();
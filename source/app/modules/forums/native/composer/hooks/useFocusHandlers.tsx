// app/modules/forums/native/composer/hooks/useFocusHandlers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var5 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var4);
    var8 = 0;
    var5 = var6[var8];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot0 = var4;
    var7 = 1;
    var5 = var6[var7];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot1 = var4;
    var4 = {};
    var4['TITLE'] = var8;
    var5 = 'TITLE';
    var4[var8] = var5;
    var4['CONTENT'] = var7;
    var5 = 'CONTENT';
    var4[var7] = var5;
    var _closure1_slot2 = var4;
    var5 = 2;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/forums/native/composer/hooks/useFocusHandlers.tsx';
    var5 = var6.bind(var7)(var5);
    var3['PostComposerInputs'] = var4;
    var2 = function useFocusHandlers(arg1) {
        var1 = arg1;
        var2 = var1.titleInput;
        var _closure2_slot0 = var2;
        var1 = var1.contentInput;
        var _closure2_slot1 = var1;
        var5 = _closure1_slot1;
        var4 = var5.useState;
        var2 = _closure1_slot2;
        var2 = var2.TITLE;
        var5 = var4.bind(var5)(var2);
        var4 = _closure1_slot0;
        var2 = undefined;
        var1 = 2;
        var5 = var4.bind(var2)(var5, var1);
        var1 = 0;
        var2 = var5[var1];
        var _closure2_slot2 = var2;
        var1 = {};
        var4 = 1;
        var4 = var5[var4];
        var1['setFocusedInput'] = var4;
        var4 = function focusLastInput() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure2_slot2;
                var3 = _closure1_slot2;
                var3 = var3.TITLE;
                if(!(var4 !== var3)) { _fun0001_ip = 69; continue _fun0001 }
 24:
                var3 = _closure2_slot2;
                var2 = _closure1_slot2;
                var2 = var2.CONTENT;
                if(!(var3 === var2)) { _fun0001_ip = 94; continue _fun0001 }
 42:
                var2 = _closure2_slot1;
                var3 = var2.current;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 94; continue _fun0001 }
 57:
                var2 = var3.focus;
                var2 = var2.bind(var3)();
                _fun0001_ip = 94; continue _fun0001;
 69:
                var1 = _closure2_slot0;
                var2 = var1.current;
                var1 = null;
                if(!(var1 != var2)) { _fun0001_ip = 94; continue _fun0001 }
 84:
                var1 = var2.focus;
                var1 = var1.bind(var2)();
 94:
                var1 = undefined;
                return var1;
            }
        };
        var1['focusLastInput'] = var4;
        var3 = function blurLastInput() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = _closure2_slot2;
                var3 = _closure1_slot2;
                var3 = var3.TITLE;
                if(!(var4 !== var3)) { _fun0002_ip = 69; continue _fun0002 }
 24:
                var3 = _closure2_slot2;
                var2 = _closure1_slot2;
                var2 = var2.CONTENT;
                if(!(var3 === var2)) { _fun0002_ip = 94; continue _fun0002 }
 42:
                var2 = _closure2_slot1;
                var3 = var2.current;
                var2 = null;
                if(!(var2 != var3)) { _fun0002_ip = 94; continue _fun0002 }
 57:
                var2 = var3.blur;
                var2 = var2.bind(var3)();
                _fun0002_ip = 94; continue _fun0002;
 69:
                var1 = _closure2_slot0;
                var2 = var1.current;
                var1 = null;
                if(!(var1 != var2)) { _fun0002_ip = 94; continue _fun0002 }
 84:
                var1 = var2.blur;
                var1 = var1.bind(var2)();
 94:
                var1 = undefined;
                return var1;
            }
        };
        var1['blurLastInput'] = var3;
        var1['focusedInput'] = var2;
        return var1;
    };
    var3['useFocusHandlers'] = var2;
    return var1;
})();
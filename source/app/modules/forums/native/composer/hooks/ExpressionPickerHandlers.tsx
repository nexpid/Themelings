// app/modules/forums/native/composer/hooks/ExpressionPickerHandlers.tsx
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
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/composer/hooks/ExpressionPickerHandlers.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function usePressEmojiHandler(arg1) {
        var2 = arg1;
        var9 = var2.selection;
        var _closure2_slot0 = var9;
        var8 = var2.draftContent;
        var _closure2_slot1 = var8;
        var7 = var2.handleTextChange;
        var _closure2_slot2 = var7;
        var6 = var2.focusTextInput;
        var _closure2_slot3 = var6;
        var5 = var2.setSelection;
        var _closure2_slot4 = var5;
        var4 = _closure1_slot0;
        var3 = var4.useRef;
        var2 = {};
        var2['selection'] = var9;
        var2['draftContent'] = var8;
        var2['handleTextChange'] = var7;
        var2['focusTextInput'] = var6;
        var2['setSelection'] = var5;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot5 = var2;
        var3 = var4.useEffect;
        var2 = function() {
            var2 = _closure2_slot5;
            var1 = {};
            var4 = _closure2_slot0;
            var1['selection'] = var4;
            var4 = _closure2_slot1;
            var1['draftContent'] = var4;
            var4 = _closure2_slot2;
            var1['handleTextChange'] = var4;
            var4 = _closure2_slot3;
            var1['focusTextInput'] = var4;
            var3 = _closure2_slot4;
            var1['setSelection'] = var3;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var3 = var4.useCallback;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = arg1;
                var1 = _closure2_slot5;
                var4 = var1.current;
                var1 = var4.selection;
                var10 = var4.draftContent;
                var8 = var4.handleTextChange;
                var2 = var4.focusTextInput;
                var4 = var4.setSelection;
                var7 = var10.substring;
                var6 = var1.start;
                var5 = 0;
                var5 = var7.bind(var10)(var5, var6);
                var9 = var10.substring;
                var7 = var1.end;
                var6 = null;
                if(!(var6 == var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var7 = var1.start;
case 2:
                var7 = var9.bind(var10)(var7);
                var1 = var1.start;
                var1 = var3.id;
                if(!(var6 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = var3.surrogates;
                if(!(var6 == var1)) { _fun0001_ip = 6; continue _fun0001 }
case 4:
                var1 = var3.uniqueName;
                if(!(var6 != var1)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                var6 = var3.uniqueName;
                var1 = '';
                if(!(var1 === var6)) { _fun0001_ip = 9; continue _fun0001 }
case 7:
                var10 = var3.name;
                _fun0001_ip = 10; continue _fun0001;
case 9:
                var10 = var3.uniqueName;
case 10:
                var1 = global;
                var6 = var1.HermesInternal;
                var11 = var6.concat;
                var9 = ':';
                var6 = ': ';
                var11 = var11.bind(var9)(var10, var6);
                var11 = var5 + var11;
                var12 = var11 + var7;
                var11 = undefined;
                var11 = var8.bind(var11)(var12);
                var1 = var1.HermesInternal;
                var1 = var1.concat;
                var1 = var1.bind(var9)(var10, var6);
                var1 = var5 + var1;
                var1 = var1.length;
                _fun0001_ip = 11; continue _fun0001;
case 6:
                var6 = var3.surrogates;
                var6 = var5 + var6;
                var7 = var6 + var7;
                var6 = undefined;
                var6 = var8.bind(var6)(var7);
                var3 = var3.surrogates;
                var3 = var5 + var3;
                var1 = var3.length;
case 11:
                var3 = {};
                var3['start'] = var1;
                var3['end'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var2 = var2.bind(var1)();
                return var1;
            }
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['usePressEmojiHandler'] = var4;
    var2 = function usePressGIFHandler(arg1) {
        var2 = arg1;
        var6 = var2.selection;
        var _closure2_slot0 = var6;
        var9 = var2.draftContent;
        var _closure2_slot1 = var9;
        var7 = var2.handleTextChange;
        var _closure2_slot2 = var7;
        var8 = var2.focusTextInput;
        var _closure2_slot3 = var8;
        var5 = var2.setSelection;
        var _closure2_slot4 = var5;
        var4 = _closure1_slot0;
        var3 = var4.useCallback;
        var2 = new Array(6);
        var2[0] = var9;
        var2[1] = var8;
        var2[2] = var7;
        var7 = var6.end;
        var2[3] = var7;
        var6 = var6.start;
        var2[4] = var6;
        var2[5] = var5;
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var4 = var1.url;
                var6 = _closure2_slot1;
                var7 = var6.substring;
                var1 = _closure2_slot0;
                var5 = var1.start;
                var3 = 0;
                var3 = var7.bind(var6)(var3, var5);
                var5 = var6.substring;
                var1 = var1.end;
                var7 = null;
                if(!(var7 == var1)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var7 = _closure2_slot0;
                var1 = var7.start;
case 12:
                var6 = var5.bind(var6)(var1);
                var1 = _closure2_slot0;
                var1 = var1.start;
                var1 = var3.endsWith;
                var5 = ' ';
                var1 = var1.bind(var3)(var5);
                var7 = _closure2_slot2;
                if(var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var1 = global;
                var8 = var1.HermesInternal;
                var8 = var8.concat;
                var8 = var8.bind(var5)(var4);
                var8 = var3 + var8;
                var9 = var8 + var6;
                var8 = undefined;
                var8 = var7.bind(var8)(var9);
                var1 = var1.HermesInternal;
                var1 = var1.concat;
                var1 = var1.bind(var5)(var4);
                var1 = var3 + var1;
                var1 = var1.length;
                _fun0002_ip = 16; continue _fun0002;
case 14:
                var5 = var3 + var4;
                var6 = var5 + var6;
                var5 = undefined;
                var5 = var7.bind(var5)(var6);
                var3 = var3 + var4;
                var1 = var3.length;
case 16:
                var4 = _closure2_slot4;
                var3 = {};
                var3['start'] = var1;
                var3['end'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot3;
                var2 = var2.bind(var1)();
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['usePressGIFHandler'] = var2;
    return var1;
})();
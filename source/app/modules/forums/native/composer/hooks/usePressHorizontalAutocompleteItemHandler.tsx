// app/modules/forums/native/composer/hooks/usePressHorizontalAutocompleteItemHandler.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AutoCompleteResultTypes;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CHANNEL_SENTINEL;
    var _closure1_slot4 = var7;
    var7 = var4.EMOJI_SENTINEL;
    var _closure1_slot5 = var7;
    var4 = var4.MENTION_SENTINEL;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/composer/hooks/usePressHorizontalAutocompleteItemHandler.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePressHorizontalAutocompleteItemHandler(arg1) {
        var2 = arg1;
        var7 = var2.draftContent;
        var _closure2_slot0 = var7;
        var6 = var2.handleTextChange;
        var _closure2_slot1 = var6;
        var5 = var2.setSelection;
        var _closure2_slot2 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useCallback;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function(arg1, arg2, arg3) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var7 = arg2;
                var5 = var1.type;
                var3 = _closure1_slot3;
                var3 = var3.USER;
                if(!(var3 !== var5)) { _fun0001_ip = 292; continue _fun0001 }
 31:
                var3 = _closure1_slot3;
                var3 = var3.ROLE;
                if(!(var3 !== var5)) { _fun0001_ip = 258; continue _fun0001 }
 48:
                var3 = _closure1_slot3;
                var3 = var3.CHANNEL;
                if(!(var3 !== var5)) { _fun0001_ip = 124; continue _fun0001 }
 62:
                var3 = _closure1_slot3;
                var3 = var3.EMOJI;
                var9 = '';
                var4 = var9;
                if(!(var3 === var5)) { _fun0001_ip = 357; continue _fun0001 }
 86:
                var8 = _closure1_slot5;
                var6 = var1.name;
                var3 = global;
                var3 = var3.HermesInternal;
                var5 = var3.concat;
                var3 = ':';
                var4 = var5.bind(var9)(var8, var6, var3);
                _fun0001_ip = 357; continue _fun0001;
 124:
                var5 = var1.channel;
                var3 = var5.isThread;
                var3 = var3.bind(var5)();
                if(var3) { _fun0001_ip = 181; continue _fun0001 }
 142:
                var8 = _closure1_slot4;
                var3 = var1.channel;
                var6 = var3.name;
                var3 = global;
                var3 = var3.HermesInternal;
                var5 = var3.concat;
                var3 = '';
                var3 = var5.bind(var3)(var8, var6);
                _fun0001_ip = 253; continue _fun0001;
 181:
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var5 = 4;
                var6 = var6[var5];
                var5 = undefined;
                var8 = var8.bind(var5)(var6);
                var6 = var8.escapeChannelName;
                var5 = var1.channel;
                var5 = var5.name;
                var9 = var6.bind(var8)(var5);
                var5 = global;
                var5 = var5.HermesInternal;
                var8 = var5.concat;
                var6 = '#"';
                var5 = '"';
                var3 = var8.bind(var6)(var9, var5);
 253:
                var4 = var3;
                _fun0001_ip = 357; continue _fun0001;
 258:
                var8 = _closure1_slot6;
                var6 = var1.name;
                var3 = global;
                var3 = var3.HermesInternal;
                var5 = var3.concat;
                var3 = '';
                var4 = var5.bind(var3)(var8, var6);
                _fun0001_ip = 357; continue _fun0001;
 292:
                var5 = _closure1_slot6;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var6.bind(var2)(var3);
                var2 = var3.getUserTag;
                var1 = var1.user;
                var3 = var2.bind(var3)(var1);
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '';
                var4 = var2.bind(var1)(var5, var3);
 357:
                var6 = _closure2_slot0;
                var1 = var6.substring;
                var8 = 0;
                var5 = var1.bind(var6)(var8, var7);
                var3 = new Array(0);
                var12 = var3;
                var11 = var5;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = var3.reverse;
                var9 = var1.bind(var3)();
                var3 = var9.join;
                var1 = '';
                var9 = var3.bind(var9)(var1);
                var3 = var9.search;
                var1 = /\s|\r|\n/;
                var3 = var3.bind(var9)(var1);
                var1 = var5.length;
                var3 = var1 - var3;
                var1 = var5.substring;
                var3 = var1.bind(var5)(var8, var3);
                var5 = var6.substring;
                var1 = arg3;
                var1 = var1.length;
                var7 = var7 + var1;
                var1 = 2;
                var1 = var7 + var1;
                var5 = var5.bind(var6)(var1);
                var6 = _closure2_slot1;
                var7 = var3 + var4;
                var1 = ' ';
                var1 = var7 + var1;
                var5 = var1 + var5;
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var3 = var3 + var4;
                var4 = var3.length;
                var3 = _closure2_slot2;
                var2 = {};
                var2['start'] = var4;
                var2['end'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['usePressHorizontalAutocompleteItemHandler'] = var2;
    return var1;
})();
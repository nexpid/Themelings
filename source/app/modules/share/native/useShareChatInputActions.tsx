// app/modules/share/native/useShareChatInputActions.tsx
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/share/native/useShareChatInputActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useShareChatInputActions(arg1, arg2) {
        var2 = arg1;
        var10 = arg2;
        var _closure2_slot0 = var2;
        var _closure2_slot1 = var10;
        var9 = _closure1_slot3;
        var5 = var9.useRef;
        var3 = null;
        var7 = var5.bind(var9)(var3);
        var _closure2_slot2 = var7;
        var6 = var9.useRef;
        var3 = 0;
        var5 = {'start': 0, 'end': 0};
        var5 = var6.bind(var9)(var5);
        var _closure2_slot3 = var5;
        var6 = var9.useState;
        var5 = false;
        var8 = var6.bind(var9)(var5);
        var6 = _closure1_slot2;
        var5 = undefined;
        var4 = 2;
        var4 = var6.bind(var5)(var8, var4);
        var6 = var4[var3];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot4 = var3;
        var5 = var9.useCallback;
        var4 = function(arg1) {
            var2 = _closure2_slot3;
            var1 = {};
            var3 = arg1;
            var3 = var3.nativeEvent;
            var4 = var3.selection;
            var5 = var1;
            var3 = copyDataProperties(var5, var4);
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var3 = new Array(0);
        var5 = var5.bind(var9)(var4, var3);
        var8 = var9.useCallback;
        var4 = function() {
            var3 = _closure2_slot4;
            var1 = undefined;
            var2 = true;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = new Array(0);
        var4 = var8.bind(var9)(var4, var3);
        var11 = var9.useCallback;
        var8 = function() {
            var3 = _closure2_slot4;
            var1 = undefined;
            var2 = false;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = new Array(0);
        var3 = var11.bind(var9)(var8, var3);
        var11 = var9.useCallback;
        var8 = new Array(1);
        var8[0] = var2;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var5 = '';
                var _closure3_slot0 = var5;
                var3 = var1.id;
                var2 = null;
                if(!(var2 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = var1.surrogates;
                if(!(var2 == var3)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
                var3 = var1.uniqueName;
                if(!(var2 != var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var3 = var1.uniqueName;
                if(!(var5 === var3)) { _fun0001_ip = 7; continue _fun0001 }
case 5:
                var7 = var1.name;
                _fun0001_ip = 8; continue _fun0001;
case 7:
                var7 = var1.uniqueName;
case 8:
                var3 = global;
                var3 = var3.HermesInternal;
                var6 = var3.concat;
                var5 = ':';
                var3 = ': ';
                var3 = var6.bind(var5)(var7, var3);
                _closure3_slot0 = var3;
                _fun0001_ip = 9; continue _fun0001;
case 4:
                var1 = var1.surrogates;
                _closure3_slot0 = var1;
case 9:
                var5 = _closure2_slot0;
                var1 = undefined;
                var4 = function(arg1) {
                    var4 = arg1;
                    var5 = var4.slice;
                    var1 = _closure2_slot3;
                    var2 = var1.current;
                    var3 = var2.start;
                    var2 = 0;
                    var3 = var5.bind(var4)(var2, var3);
                    var2 = _closure3_slot0;
                    var2 = var3 + var2;
                    var3 = var4.slice;
                    var1 = var1.current;
                    var1 = var1.end;
                    var1 = var3.bind(var4)(var1);
                    var1 = var2 + var1;
                    return var1;
                };
                var4 = var5.bind(var1)(var4);
                var3 = _closure2_slot2;
                var3 = var3.current;
                if(!(var2 != var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var2 = var3.focus;
                var2 = var2.bind(var3)();
case 10:
                return var1;
            }
        };
        var11 = var11.bind(var9)(var2, var8);
        var _closure2_slot5 = var11;
        var12 = var9.useCallback;
        var8 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot2;
                var2 = var1.current;
                var1 = null;
                if(!(var1 != var2)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var1 = var2.focus;
                var1 = var1.bind(var2)();
case 12:
                var1 = undefined;
                return var1;
            }
        };
        var2 = new Array(0);
        var12 = var12.bind(var9)(var8, var2);
        var _closure2_slot6 = var12;
        var8 = var9.useCallback;
        var2 = new Array(3);
        var2[0] = var12;
        var2[1] = var11;
        var2[2] = var10;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure2_slot2;
                var2 = var1.current;
                var5 = null;
                if(!(var5 != var2)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var1 = var2.blur;
                var1 = var1.bind(var2)();
case 12:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEmojiPickerActionSheet;
                var2 = {};
                var8 = _closure2_slot5;
                var2['onPressEmoji'] = var8;
                var8 = _closure2_slot6;
                var2['onClose'] = var8;
                var6 = _closure1_slot4;
                var6 = var6.CHAT;
                var2['pickerIntention'] = var6;
                var6 = false;
                var2['autoFocus'] = var6;
                var2['startExpanded'] = var6;
                var6 = _closure2_slot1;
                var2['channel'] = var6;
                var8 = var5 == var6;
                var6 = undefined;
                if(var8) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var8 = _closure2_slot1;
                var7 = var8.getGuildId;
                var6 = var7.bind(var8)();
case 14:
                var7 = var5 != var6;
                var5 = undefined;
                if(!var7) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var5 = var6;
case 16:
                var2['guildId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var2 = var8.bind(var9)(var1, var2);
        var1 = {};
        var1['textInputRef'] = var7;
        var1['isInputFocused'] = var6;
        var1['handleSelectionChange'] = var5;
        var1['handleMessageFocus'] = var4;
        var1['handleMessageBlur'] = var3;
        var1['handlePressEmoji'] = var2;
        return var1;
    };
    var3['useShareChatInputActions'] = var2;
    return var1;
})();
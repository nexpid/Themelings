// app/uikit-native/AutocompleteUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var4 = function getMentionTextWithUser(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg2;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 11;
            var3 = var4[var3];
            var4 = undefined;
            var6 = var5.bind(var4)(var3);
            var5 = var6.hasSameRoleAsUsername;
            var3 = arg1;
            var3 = var5.bind(var6)(var3, var2);
            var5 = _closure1_slot10;
            if(var3) { _fun0001_ip = 106; continue _fun0001 }
 50:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 12;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getUserTag;
            var4 = var1.bind(var3)(var2);
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var1 = '';
            var1 = var3.bind(var1)(var5, var4);
            _fun0001_ip = 134; continue _fun0001;
 106:
            var4 = var2.tag;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '';
            var1 = var3.bind(var2)(var5, var4);
 134:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var1 = function AutocompleteFormDivider() {
        var2 = _closure1_slot13;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot11;
        var2 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 13;
        var1 = var6[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var5 = var5.itemDivider;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.StyleSheet;
    var8 = 2;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.isGuildSelectableChannelType;
    var _closure1_slot3 = var8;
    var8 = 3;
    var8 = var7[var8];
    var8 = var12.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 4;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.AutoCompleteResultTypes;
    var _closure1_slot5 = var8;
    var8 = 5;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.AUTOCOMPLETE_EMOJI_ROW_HEIGHT;
    var _closure1_slot6 = var9;
    var8 = var8.AUTOCOMPLETE_ROW_HEIGHT;
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.CHANNEL_SENTINEL;
    var _closure1_slot8 = var9;
    var9 = var8.EMOJI_SENTINEL;
    var _closure1_slot9 = var9;
    var8 = var8.MENTION_SENTINEL;
    var _closure1_slot10 = var8;
    var8 = 7;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.jsx;
    var _closure1_slot11 = var8;
    var5 = var5.hairlineWidth;
    var _closure1_slot12 = var5;
    var5 = 8;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var11 = 16;
    var10['marginLeft'] = var11;
    var11 = 9;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MODIFIER_ACCENT;
    var10['backgroundColor'] = var11;
    var5['itemDivider'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot13 = var5;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/AutocompleteUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = arg2;
            var3 = null;
            var6 = var3 == var1;
            var4 = undefined;
            if(var6) { _fun0002_ip = 35; continue _fun0002 }
 17:
            var1 = var1[var2];
            var3 = var3 == var1;
            var4 = undefined;
            if(var3) { _fun0002_ip = 35; continue _fun0002 }
 30:
            var4 = var1.type;
 35:
            var1 = _closure1_slot5;
            var1 = var1.EMOJI;
            if(!(var4 !== var1)) { _fun0002_ip = 58; continue _fun0002 }
 52:
            var4 = _closure1_slot7;
            _fun0002_ip = 62; continue _fun0002;
 58:
            var4 = _closure1_slot6;
 62:
            var1 = {};
            var1['length'] = var4;
            var4 = var2 * var4;
            var5 = global;
            var7 = var5.Math;
            var6 = var7.max;
            var5 = 1;
            var5 = var2 - var5;
            var3 = _closure1_slot12;
            var5 = var5 * var3;
            var3 = 0;
            var3 = var6.bind(var7)(var3, var5);
            var3 = var4 + var3;
            var1['offset'] = var3;
            var1['index'] = var2;
            return var1;
        }
    };
    var3['getItemLayout'] = var5;
    var5 = function getAutocompleteResultText(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var5 = arg3;
            var3 = null;
            if(!(var3 != var5)) { _fun0003_ip = 36; continue _fun0003 }
 12:
            var4 = var5.has;
            var2 = var1.type;
            var2 = var4.bind(var5)(var2);
            if(var2) { _fun0003_ip = 36; continue _fun0003 }
 30:
            var2 = '';
            return var2;
 36:
            var5 = var1.type;
            var4 = _closure1_slot5;
            var4 = var4.USER;
            if(!(var4 !== var5)) { _fun0003_ip = 607; continue _fun0003 }
 61:
            var4 = _closure1_slot5;
            var4 = var4.GLOBAL;
            if(!(var4 !== var5)) { _fun0003_ip = 600; continue _fun0003 }
 78:
            var4 = _closure1_slot5;
            var4 = var4.ROLE;
            if(!(var4 !== var5)) { _fun0003_ip = 566; continue _fun0003 }
 95:
            var4 = _closure1_slot5;
            var4 = var4.CHANNEL;
            if(!(var4 !== var5)) { _fun0003_ip = 303; continue _fun0003 }
 112:
            var4 = _closure1_slot5;
            var4 = var4.EMOJI;
            if(!(var4 !== var5)) { _fun0003_ip = 264; continue _fun0003 }
 129:
            var4 = _closure1_slot5;
            var4 = var4.EMOJI_PREMIUM_UPSELL;
            if(!(var4 !== var5)) { _fun0003_ip = 258; continue _fun0003 }
 143:
            var4 = _closure1_slot5;
            var4 = var4.SLASH;
            if(!(var4 !== var5)) { _fun0003_ip = 258; continue _fun0003 }
 157:
            var4 = _closure1_slot5;
            var4 = var4.CHOICE;
            if(!(var4 !== var5)) { _fun0003_ip = 223; continue _fun0003 }
 171:
            var4 = _closure1_slot5;
            var4 = var4.STICKER;
            if(!(var4 !== var5)) { _fun0003_ip = 217; continue _fun0003 }
 185:
            var4 = _closure1_slot5;
            var4 = var4.CHOICE_LOADING;
            if(!(var4 !== var5)) { _fun0003_ip = 217; continue _fun0003 }
 199:
            var4 = _closure1_slot5;
            var4 = var4.LABEL;
            if(!(var4 !== var5)) { _fun0003_ip = 217; continue _fun0003 }
 213:
            var4 = undefined;
            return var4;
 217:
            var4 = '';
            return var4;
 223:
            var4 = var1.choice;
            var6 = var4.displayName;
            var4 = global;
            var4 = var4.HermesInternal;
            var5 = var4.concat;
            var4 = '';
            var4 = var5.bind(var4)(var6);
            return var4;
 258:
            var4 = '';
            return var4;
 264:
            var8 = _closure1_slot9;
            var7 = var1.name;
            var4 = global;
            var4 = var4.HermesInternal;
            var6 = var4.concat;
            var5 = '';
            var4 = ':';
            var4 = var6.bind(var5)(var8, var7, var4);
            return var4;
 303:
            var5 = var1.channel;
            var4 = var5.isThread;
            var4 = var4.bind(var5)();
            if(var4) { _fun0003_ip = 492; continue _fun0003 }
 324:
            var5 = var1.channel;
            var4 = var5.getGuildId;
            var7 = var4.bind(var5)();
            if(!(var3 != var7)) { _fun0003_ip = 367; continue _fun0003 }
 343:
            var5 = _closure1_slot3;
            var4 = var1.channel;
            var4 = var4.type;
            var6 = undefined;
            var4 = var5.bind(var6)(var4);
            if(var4) { _fun0003_ip = 406; continue _fun0003 }
 367:
            var9 = _closure1_slot8;
            var4 = var1.channel;
            var8 = var4.name;
            var4 = global;
            var4 = var4.HermesInternal;
            var5 = var4.concat;
            var4 = '';
            var4 = var5.bind(var4)(var9, var8);
            return var4;
 406:
            var5 = _closure1_slot4;
            var4 = var5.getTextChannelNameDisambiguations;
            var5 = var4.bind(var5)(var7);
            var4 = var1.channel;
            var4 = var4.id;
            var4 = var5[var4];
            var5 = var3 == var4;
            var6 = undefined;
            if(var5) { _fun0003_ip = 449; continue _fun0003 }
 444:
            var6 = var4.name;
 449:
            if(!(var3 == var6)) { _fun0003_ip = 463; continue _fun0003 }
 453:
            var3 = var1.channel;
            var6 = var3.name;
 463:
            var5 = _closure1_slot8;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var3 = var4.bind(var3)(var5, var6);
            return var3;
 492:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 10;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.escapeChannelName;
            var3 = var1.channel;
            var3 = var3.name;
            var6 = var4.bind(var5)(var3);
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '#"';
            var3 = '"';
            var3 = var5.bind(var4)(var6, var3);
            return var3;
 566:
            var6 = _closure1_slot10;
            var5 = var1.name;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var3 = var4.bind(var3)(var6, var5);
            return var3;
 600:
            var3 = var1.text;
            return var3;
 607:
            var4 = _closure1_slot14;
            var3 = var1.user;
            var2 = undefined;
            var1 = arg2;
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        }
    };
    var3['getAutocompleteResultText'] = var5;
    var3['getMentionTextWithUser'] = var4;
    var4 = function() {
        var4 = _closure1_slot11;
        var3 = _closure1_slot15;
        var2 = undefined;
        var1 = {};
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var3['getItemSeparator'] = var4;
    var4 = function(arg1) {
        var2 = arg1;
        var1 = 0;
        var1 = var2[var1];
        return var1;
    };
    var3['getPrefix'] = var4;
    var2 = function(arg1) {
        var3 = arg1;
        var2 = var3.slice;
        var1 = 1;
        var2 = var2.bind(var3)(var1);
        var1 = var2.toLowerCase;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['getQuery'] = var2;
    return var1;
})();
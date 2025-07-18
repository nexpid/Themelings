// app/uikit-native/AutocompleteUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var12 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var4 = function getMentionTextWithUser(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg2;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 9;
            var3 = var4[var3];
            var4 = undefined;
            var6 = var5.bind(var4)(var3);
            var5 = var6.hasSameRoleAsUsername;
            var3 = arg1;
            var3 = var5.bind(var6)(var3, var2);
            var5 = _closure1_slot8;
            if(var3) { _fun0001_ip = 106; continue _fun0001 }
 50:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 10;
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
    var _closure1_slot12 = var4;
    var1 = function AutocompleteFormDivider() {
        var2 = _closure1_slot11;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot9;
        var2 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 11;
        var1 = var6[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var5 = var5.itemDivider;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
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
    var5 = native4;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.StyleSheet;
    var8 = 2;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.AutoCompleteResultTypes;
    var _closure1_slot3 = var8;
    var8 = 3;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.AUTOCOMPLETE_EMOJI_ROW_HEIGHT;
    var _closure1_slot4 = var9;
    var8 = var8.AUTOCOMPLETE_ROW_HEIGHT;
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.CHANNEL_SENTINEL;
    var _closure1_slot6 = var9;
    var9 = var8.EMOJI_SENTINEL;
    var _closure1_slot7 = var9;
    var8 = var8.MENTION_SENTINEL;
    var _closure1_slot8 = var8;
    var8 = 5;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.jsx;
    var _closure1_slot9 = var8;
    var5 = var5.hairlineWidth;
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var11 = 16;
    var10['marginLeft'] = var11;
    var11 = 7;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MODIFIER_ACCENT;
    var10['backgroundColor'] = var11;
    var5['itemDivider'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot11 = var5;
    var5 = 12;
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
            var1 = _closure1_slot3;
            var1 = var1.EMOJI;
            if(!(var4 !== var1)) { _fun0002_ip = 58; continue _fun0002 }
 52:
            var4 = _closure1_slot5;
            _fun0002_ip = 62; continue _fun0002;
 58:
            var4 = _closure1_slot4;
 62:
            var1 = {};
            var1['length'] = var4;
            var4 = var2 * var4;
            var5 = global;
            var7 = var5.Math;
            var6 = var7.max;
            var5 = 1;
            var5 = var2 - var5;
            var3 = _closure1_slot10;
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
    var5 = function getAutocompleteResultText(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var4 = var1.type;
            var3 = _closure1_slot3;
            var3 = var3.USER;
            if(!(var3 !== var4)) { _fun0003_ip = 442; continue _fun0003 }
 28:
            var3 = _closure1_slot3;
            var3 = var3.GLOBAL;
            if(!(var3 !== var4)) { _fun0003_ip = 435; continue _fun0003 }
 45:
            var3 = _closure1_slot3;
            var3 = var3.ROLE;
            if(!(var3 !== var4)) { _fun0003_ip = 401; continue _fun0003 }
 62:
            var3 = _closure1_slot3;
            var3 = var3.CHANNEL;
            if(!(var3 !== var4)) { _fun0003_ip = 270; continue _fun0003 }
 79:
            var3 = _closure1_slot3;
            var3 = var3.EMOJI;
            if(!(var3 !== var4)) { _fun0003_ip = 231; continue _fun0003 }
 96:
            var3 = _closure1_slot3;
            var3 = var3.EMOJI_PREMIUM_UPSELL;
            if(!(var3 !== var4)) { _fun0003_ip = 225; continue _fun0003 }
 110:
            var3 = _closure1_slot3;
            var3 = var3.SLASH;
            if(!(var3 !== var4)) { _fun0003_ip = 225; continue _fun0003 }
 124:
            var3 = _closure1_slot3;
            var3 = var3.CHOICE;
            if(!(var3 !== var4)) { _fun0003_ip = 190; continue _fun0003 }
 138:
            var3 = _closure1_slot3;
            var3 = var3.STICKER;
            if(!(var3 !== var4)) { _fun0003_ip = 184; continue _fun0003 }
 152:
            var3 = _closure1_slot3;
            var3 = var3.CHOICE_LOADING;
            if(!(var3 !== var4)) { _fun0003_ip = 184; continue _fun0003 }
 166:
            var3 = _closure1_slot3;
            var3 = var3.LABEL;
            if(!(var3 !== var4)) { _fun0003_ip = 184; continue _fun0003 }
 180:
            var3 = undefined;
            return var3;
 184:
            var3 = '';
            return var3;
 190:
            var3 = var1.choice;
            var5 = var3.displayName;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var3 = var4.bind(var3)(var5);
            return var3;
 225:
            var3 = '';
            return var3;
 231:
            var7 = _closure1_slot7;
            var6 = var1.name;
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = ':';
            var3 = var5.bind(var4)(var7, var6, var3);
            return var3;
 270:
            var4 = var1.channel;
            var3 = var4.isThread;
            var3 = var3.bind(var4)();
            if(var3) { _fun0003_ip = 327; continue _fun0003 }
 288:
            var6 = _closure1_slot6;
            var3 = var1.channel;
            var5 = var3.name;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var3 = var4.bind(var3)(var6, var5);
            _fun0003_ip = 399; continue _fun0003;
 327:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 8;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.escapeChannelName;
            var4 = var1.channel;
            var4 = var4.name;
            var7 = var5.bind(var6)(var4);
            var4 = global;
            var4 = var4.HermesInternal;
            var6 = var4.concat;
            var5 = '#"';
            var4 = '"';
            var3 = var6.bind(var5)(var7, var4);
 399:
            return var3;
 401:
            var6 = _closure1_slot8;
            var5 = var1.name;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var3 = var4.bind(var3)(var6, var5);
            return var3;
 435:
            var3 = var1.text;
            return var3;
 442:
            var4 = _closure1_slot12;
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
        var4 = _closure1_slot9;
        var3 = _closure1_slot13;
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
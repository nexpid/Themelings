// app/modules/autocompleter/native/AutocompleteUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var4 = function getMentionTextWithUser(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg2;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 13;
            var3 = var4[var3];
            var4 = undefined;
            var6 = var5.bind(var4)(var3);
            var5 = var6.hasSameRoleAsUsername;
            var3 = arg1;
            var3 = var5.bind(var6)(var3, var2);
            var5 = _closure1_slot14;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 14;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getUserTag;
            var4 = var1.bind(var3)(var2);
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var1 = '';
            var1 = var3.bind(var1)(var5, var4);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = var2.tag;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '';
            var1 = var3.bind(var2)(var5, var4);
case 4:
            return var1;
        }
    };
    var _closure1_slot18 = var4;
    var1 = function AutocompleteFormDivider() {
        var2 = _closure1_slot17;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot15;
        var2 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 15;
        var1 = var6[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var5 = var5.itemDivider;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
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
    var8 = var13.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 4;
    var8 = var7[var8];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 5;
    var8 = var7[var8];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 6;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.AutoCompleteResultTypes;
    var _closure1_slot7 = var9;
    var8 = var8.WHITESPACE_RE;
    var _closure1_slot8 = var8;
    var8 = 7;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.AUTOCOMPLETE_EMOJI_ROW_HEIGHT;
    var _closure1_slot9 = var9;
    var8 = var8.AUTOCOMPLETE_ROW_HEIGHT;
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.CHANNEL_SENTINEL;
    var _closure1_slot11 = var9;
    var9 = var8.EMOJI_SENTINEL;
    var _closure1_slot12 = var9;
    var9 = var8.GAME_MENTION_SENTINEL;
    var _closure1_slot13 = var9;
    var8 = var8.MENTION_SENTINEL;
    var _closure1_slot14 = var8;
    var8 = 9;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.jsx;
    var _closure1_slot15 = var8;
    var5 = var5.hairlineWidth;
    var _closure1_slot16 = var5;
    var5 = 10;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var8 = {};
    var11 = {};
    var5 = 16;
    var11['marginLeft'] = var5;
    var12 = 11;
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var11['backgroundColor'] = var12;
    var8['itemDivider'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot17 = var8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/autocompleter/native/AutocompleteUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getItemLayout(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            var3 = null;
            var6 = var3 == var1;
            var4 = undefined;
            if(var6) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var1 = var1[var2];
            var3 = var3 == var1;
            var4 = undefined;
            if(var3) { _fun0002_ip = 5; continue _fun0002 }
case 7:
            var4 = var1.type;
case 5:
            var1 = _closure1_slot7;
            var1 = var1.EMOJI;
            if(!(var4 !== var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot10;
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var4 = _closure1_slot9;
case 10:
            var1 = {};
            var1['length'] = var4;
            var4 = var2 * var4;
            var5 = global;
            var7 = var5.Math;
            var6 = var7.max;
            var5 = 1;
            var5 = var2 - var5;
            var3 = _closure1_slot16;
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
case 0:
            var1 = arg1;
            var5 = arg3;
            var3 = null;
            if(!(var3 != var5)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var4 = var5.has;
            var2 = var1.type;
            var2 = var4.bind(var5)(var2);
            if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 7:
            var2 = '';
            return var2;
case 11:
            var5 = var1.type;
            var4 = _closure1_slot7;
            var4 = var4.USER;
            if(!(var4 !== var5)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var4 = _closure1_slot7;
            var4 = var4.GLOBAL;
            if(!(var4 !== var5)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var4 = _closure1_slot7;
            var4 = var4.ROLE;
            if(!(var4 !== var5)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var4 = _closure1_slot7;
            var4 = var4.CHANNEL;
            if(!(var4 !== var5)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var4 = _closure1_slot7;
            var4 = var4.GAME_MENTION;
            if(!(var4 !== var5)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var4 = _closure1_slot7;
            var4 = var4.EMOJI;
            if(!(var4 !== var5)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var4 = _closure1_slot7;
            var4 = var4.EMOJI_PREMIUM_UPSELL;
            if(!(var4 !== var5)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var4 = _closure1_slot7;
            var4 = var4.SLASH;
            if(!(var4 !== var5)) { _fun0003_ip = 25; continue _fun0003 }
case 27:
            var4 = _closure1_slot7;
            var4 = var4.CHOICE;
            if(!(var4 !== var5)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var4 = _closure1_slot7;
            var4 = var4.STICKER;
            if(!(var4 !== var5)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var4 = _closure1_slot7;
            var4 = var4.CHOICE_LOADING;
            if(!(var4 !== var5)) { _fun0003_ip = 30; continue _fun0003 }
case 32:
            var4 = _closure1_slot7;
            var4 = var4.LABEL;
            if(!(var4 !== var5)) { _fun0003_ip = 30; continue _fun0003 }
case 33:
            var4 = undefined;
            return var4;
case 30:
            var4 = '';
            return var4;
case 28:
            var4 = var1.choice;
            var6 = var4.displayName;
            var4 = global;
            var4 = var4.HermesInternal;
            var5 = var4.concat;
            var4 = '';
            var4 = var5.bind(var4)(var6);
            return var4;
case 25:
            var4 = '';
            return var4;
case 23:
            var8 = _closure1_slot12;
            var7 = var1.name;
            var4 = global;
            var4 = var4.HermesInternal;
            var6 = var4.concat;
            var5 = '';
            var4 = ':';
            var4 = var6.bind(var5)(var8, var7, var4);
            return var4;
case 21:
            var7 = _closure1_slot13;
            var4 = var1.game;
            var6 = var4.name;
            var4 = global;
            var4 = var4.HermesInternal;
            var5 = var4.concat;
            var4 = '';
            var4 = var5.bind(var4)(var7, var6);
            return var4;
case 19:
            var5 = var1.channel;
            var4 = var5.isThread;
            var4 = var4.bind(var5)();
            if(var4) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var5 = var1.channel;
            var4 = var5.getGuildId;
            var7 = var4.bind(var5)();
            if(!(var3 != var7)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var6 = _closure1_slot3;
            var4 = var1.channel;
            var4 = var4.type;
            var5 = undefined;
            var4 = var6.bind(var5)(var4);
            if(var4) { _fun0003_ip = 38; continue _fun0003 }
case 36:
            var9 = _closure1_slot11;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 12;
            var6 = var6[var4];
            var4 = undefined;
            var11 = var8.bind(var4)(var6);
            var10 = var11.computeChannelName;
            var8 = var1.channel;
            var6 = _closure1_slot6;
            var4 = _closure1_slot5;
            var8 = var10.bind(var11)(var8, var6, var4);
            var4 = global;
            var4 = var4.HermesInternal;
            var6 = var4.concat;
            var4 = '';
            var4 = var6.bind(var4)(var9, var8);
            return var4;
case 38:
            var6 = _closure1_slot4;
            var4 = var6.getTextChannelNameDisambiguations;
            var6 = var4.bind(var6)(var7);
            var4 = var1.channel;
            var4 = var4.id;
            var4 = var6[var4];
            var7 = var3 == var4;
            var6 = undefined;
            if(var7) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var6 = var4.name;
case 39:
            if(!(var3 == var6)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 12;
            var3 = var7[var3];
            var8 = var4.bind(var5)(var3);
            var7 = var8.computeChannelName;
            var5 = var1.channel;
            var4 = _closure1_slot6;
            var3 = _closure1_slot5;
            var6 = var7.bind(var8)(var5, var4, var3);
case 41:
            var5 = _closure1_slot11;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var3 = var4.bind(var3)(var5, var6);
            return var3;
case 34:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 12;
            var4 = var8[var3];
            var6 = undefined;
            var5 = var7.bind(var6)(var4);
            var4 = var5.escapeChannelName;
            var3 = var8[var3];
            var9 = var7.bind(var6)(var3);
            var8 = var9.computeChannelName;
            var7 = var1.channel;
            var6 = _closure1_slot6;
            var3 = _closure1_slot5;
            var3 = var8.bind(var9)(var7, var6, var3);
            var6 = var4.bind(var5)(var3);
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '#"';
            var3 = '"';
            var3 = var5.bind(var4)(var6, var3);
            return var3;
case 17:
            var6 = _closure1_slot14;
            var5 = var1.name;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var3 = var4.bind(var3)(var6, var5);
            return var3;
case 15:
            var3 = var1.text;
            return var3;
case 13:
            var4 = _closure1_slot18;
            var3 = var1.user;
            var2 = undefined;
            var1 = arg2;
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        }
    };
    var3['getAutocompleteResultText'] = var5;
    var3['getMentionTextWithUser'] = var4;
    var4 = function getItemSeparator() {
        var4 = _closure1_slot15;
        var3 = _closure1_slot19;
        var2 = undefined;
        var1 = {};
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var3['getItemSeparator'] = var4;
    var4 = function getPrefix(arg1) {
        var2 = arg1;
        var1 = 0;
        var1 = var2[var1];
        return var1;
    };
    var3['getPrefix'] = var4;
    var4 = function getQuery(arg1) {
        var3 = arg1;
        var2 = var3.slice;
        var1 = 1;
        var2 = var2.bind(var3)(var1);
        var1 = var2.toLowerCase;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['getQuery'] = var4;
    var4 = function isWhitespaceSeparatingBoundary(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg2;
            var1 = 0;
            var1 = var1 === var5;
            if(var1) { _fun0004_ip = 43; continue _fun0004 }
case 12:
            var4 = _closure1_slot8;
            var3 = var4.test;
            var2 = 1;
            var5 = var5 - var2;
            var2 = arg1;
            var2 = var2[var5];
            var1 = var3.bind(var4)(var2);
case 43:
            return var1;
        }
    };
    var3['isWhitespaceSeparatingBoundary'] = var4;
    var2 = function isUnbrokenRun(arg1, arg2, arg3) {
        var6 = arg1;
        var3 = _closure1_slot8;
        var2 = var3.test;
        var5 = var6.slice;
        var4 = arg2;
        var1 = arg3;
        var1 = var5.bind(var6)(var4, var1);
        var1 = var2.bind(var3)(var1);
        var1 = !var1;
        return var1;
    };
    var3['isUnbrokenRun'] = var2;
    return var1;
})();
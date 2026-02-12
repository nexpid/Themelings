// app/modules/search/native/components/list/SearchList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function getItemKey(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.type;
            var5 = _closure1_slot7;
            var5 = var5.DM;
            if(!(var5 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot7;
            var5 = var5.GUILD_CHANNEL_MEMBER;
            if(!(var5 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot7;
            var5 = var5.SEARCH_HISTORY_ITEM;
            if(!(var5 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot7;
            var5 = var5.MEDIA_GRID;
            if(!(var5 !== var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = _closure1_slot7;
            var5 = var5.MEDIA;
            if(!(var5 !== var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = _closure1_slot7;
            var5 = var5.MEDIA_PLACEHOLDER;
            if(!(var5 !== var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = _closure1_slot7;
            var5 = var5.FILE_OR_LINK_PLACEHOLDER;
            if(!(var5 !== var4)) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var5 = _closure1_slot7;
            var5 = var5.MESSAGE_PLACEHOLDER;
            if(!(var5 !== var4)) { _fun0001_ip = 12; continue _fun0001 }
case 15:
            var5 = _closure1_slot7;
            var5 = var5.GUILD_CHANNEL_MEMBER_PLACEHOLDER;
            if(!(var5 !== var4)) { _fun0001_ip = 12; continue _fun0001 }
case 16:
            var5 = _closure1_slot7;
            var5 = var5.GROUP_DM;
            if(!(var5 !== var4)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var5 = _closure1_slot7;
            var5 = var5.GUILD_TEXT_CHANNEL;
            if(!(var5 !== var4)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var5 = _closure1_slot7;
            var5 = var5.GUILD_VOICE_CHANNEL;
            if(!(var5 !== var4)) { _fun0001_ip = 19; continue _fun0001 }
case 21:
            var5 = _closure1_slot7;
            var5 = var5.MESSAGE;
            if(!(var5 !== var4)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var5 = _closure1_slot7;
            var5 = var5.LINK;
            if(!(var5 !== var4)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var5 = _closure1_slot7;
            var5 = var5.FILE;
            if(!(var5 !== var4)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var5 = _closure1_slot7;
            var5 = var5.GENERIC;
            if(!(var5 !== var4)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var3 = _closure1_slot7;
            var3 = var3.SECTION;
            if(!(var3 !== var4)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var3 = undefined;
            return var3;
case 30:
            var3 = var1.props;
            var5 = var3.title;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var3 = var4.bind(var3)(var5);
            return var3;
case 28:
            var3 = var1.props;
            var5 = var3.text;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var3 = var4.bind(var3)(var5);
            return var3;
case 26:
            var3 = var1.props;
            var3 = var3.data;
            var7 = var3.messageId;
            var3 = var1.props;
            var3 = var3.data;
            var6 = var3.fileIndex;
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = '-';
            var3 = var5.bind(var4)(var7, var3, var6);
            return var3;
case 24:
            var3 = var1.props;
            var3 = var3.data;
            var7 = var3.messageId;
            var3 = var1.props;
            var3 = var3.data;
            var6 = var3.linkIndex;
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = '-';
            var3 = var5.bind(var4)(var7, var3, var6);
            return var3;
case 22:
            var3 = var1.props;
            var3 = var3.message;
            var5 = var3.id;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var3 = var4.bind(var3)(var5);
            return var3;
case 19:
            var3 = var1.props;
            var3 = var3.channel;
            var5 = var3.id;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var3 = var4.bind(var3)(var5);
            return var3;
case 17:
            var7 = var1.section;
            var3 = var1.props;
            var3 = var3.channel;
            var6 = var3.id;
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = '-';
            var3 = var5.bind(var4)(var7, var3, var6);
            return var3;
case 12:
            var3 = var1.key;
            return var3;
case 10:
            var3 = var1.props;
            var3 = var3.media;
            var7 = var3.messageId;
            var3 = var1.props;
            var3 = var3.media;
            var6 = var3.mediaIndex;
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = '-';
            var3 = var5.bind(var4)(var7, var3, var6);
            return var3;
case 8:
            var3 = var1.props;
            var5 = var3.media;
            var4 = var5.map;
            var3 = function(arg1) {
                var1 = arg1;
                var5 = var1.messageId;
                var4 = var1.mediaIndex;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '-';
                var1 = var3.bind(var2)(var5, var1, var4);
                return var1;
            };
            var5 = var4.bind(var5)(var3);
            var4 = var5.join;
            var3 = '-';
            var3 = var4.bind(var5)(var3);
            return var3;
case 6:
            var3 = var1.props;
            var4 = var3.searchHistoryItem;
            var3 = function searchHistoryKeyExtractor(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var4 = _closure1_slot6;
                    var4 = var4.TEXT;
                    if(!(var4 !== var3)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    var4 = _closure1_slot6;
                    var4 = var4.GROUP_DM;
                    if(!(var4 !== var3)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                    var4 = _closure1_slot6;
                    var4 = var4.GUILD_TEXT_CHANNEL;
                    if(!(var4 !== var3)) { _fun0002_ip = 34; continue _fun0002 }
case 36:
                    var4 = _closure1_slot6;
                    var4 = var4.GUILD_VOICE_CHANNEL;
                    if(!(var4 !== var3)) { _fun0002_ip = 34; continue _fun0002 }
case 37:
                    var2 = _closure1_slot6;
                    var2 = var2.DM;
                    if(!(var2 !== var3)) { _fun0002_ip = 38; continue _fun0002 }
case 9:
                    var2 = undefined;
                    return var2;
case 38:
                    var4 = var1.userId;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = '';
                    var2 = var3.bind(var2)(var4);
                    return var2;
case 34:
                    var4 = var1.channelId;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = '';
                    var2 = var3.bind(var2)(var4);
                    return var2;
case 32:
                    var5 = var1.text;
                    var3 = var1.tags;
                    var1 = null;
                    var1 = var1 == var3;
                    var4 = undefined;
                    if(var1) { _fun0002_ip = 20; continue _fun0002 }
case 39:
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.text;
                        return var1;
                    };
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.join;
                    var1 = ' ';
                    var4 = var2.bind(var3)(var1);
case 20:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = '';
                    var1 = ' ';
                    var1 = var3.bind(var2)(var5, var1, var4);
                    return var1;
                }
            };
            var2 = undefined;
            var2 = var3.bind(var2)(var4);
            return var2;
case 4:
            var2 = var1.props;
            var2 = var2.user;
            var6 = var2.id;
            var2 = var1.props;
            var5 = var2.guildId;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
case 2:
            var12 = var1.section;
            var2 = var1.props;
            var2 = var2.user;
            var10 = var2.id;
            var1 = var1.props;
            var8 = var1.guildId;
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var13 = '';
            var1 = '-';
            var11 = var1;
            var9 = var1;
            var1 = var13[var3](var12, var11, var10, var9, var8, var7);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function keyExtractor(arg1) {
        var3 = arg1;
        var5 = var3.type;
        var2 = _closure1_slot13;
        var1 = undefined;
        var4 = var2.bind(var1)(var3);
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = '-';
        var1 = var3.bind(var2)(var5, var1, var4);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function getItemType(arg1) {
        var1 = arg1;
        var1 = var1.type;
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function renderItem(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var5 = var1.item;
            var3 = var5.type;
            var2 = _closure1_slot7;
            var2 = var2.DM;
            if(!(var2 !== var3)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var2 = _closure1_slot7;
            var2 = var2.GROUP_DM;
            if(!(var2 !== var3)) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var2 = _closure1_slot7;
            var2 = var2.SEARCH_HISTORY_ITEM;
            if(!(var2 !== var3)) { _fun0003_ip = 44; continue _fun0003 }
case 37:
            var2 = _closure1_slot7;
            var2 = var2.MEDIA;
            if(!(var2 !== var3)) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var2 = _closure1_slot7;
            var2 = var2.MEDIA_PLACEHOLDER;
            if(!(var2 !== var3)) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var2 = _closure1_slot7;
            var2 = var2.FILE_OR_LINK_PLACEHOLDER;
            if(!(var2 !== var3)) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var2 = _closure1_slot7;
            var2 = var2.MEDIA_GRID;
            if(!(var2 !== var3)) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var2 = _closure1_slot7;
            var2 = var2.GUILD_TEXT_CHANNEL;
            if(!(var2 !== var3)) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var2 = _closure1_slot7;
            var2 = var2.GUILD_VOICE_CHANNEL;
            if(!(var2 !== var3)) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var2 = _closure1_slot7;
            var2 = var2.MESSAGE;
            if(!(var2 !== var3)) { _fun0003_ip = 57; continue _fun0003 }
case 58:
            var2 = _closure1_slot7;
            var2 = var2.MESSAGE_PLACEHOLDER;
            if(!(var2 !== var3)) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var2 = _closure1_slot7;
            var2 = var2.LINK;
            if(!(var2 !== var3)) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var2 = _closure1_slot7;
            var2 = var2.FILE;
            if(!(var2 !== var3)) { _fun0003_ip = 63; continue _fun0003 }
case 64:
            var2 = _closure1_slot7;
            var2 = var2.GUILD_CHANNEL_MEMBER;
            if(!(var2 !== var3)) { _fun0003_ip = 65; continue _fun0003 }
case 66:
            var2 = _closure1_slot7;
            var2 = var2.GUILD_CHANNEL_MEMBER_PLACEHOLDER;
            if(!(var2 !== var3)) { _fun0003_ip = 67; continue _fun0003 }
case 68:
            var2 = _closure1_slot7;
            var2 = var2.GENERIC;
            if(!(var2 !== var3)) { _fun0003_ip = 69; continue _fun0003 }
case 70:
            var2 = _closure1_slot7;
            var2 = var2.SECTION;
            if(!(var2 !== var3)) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var2 = null;
            return var2;
case 71:
            var6 = _closure1_slot8;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 21;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = var5.props;
            var9 = var2;
            var7 = copyDataProperties(var9, var8);
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 69:
            var6 = _closure1_slot8;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 20;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = var5.props;
            var9 = var2;
            var7 = copyDataProperties(var9, var8);
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 67:
            var2 = _closure1_slot12;
            return var2;
case 65:
            var6 = _closure1_slot8;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 19;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = var5.props;
            var9 = var2;
            var7 = copyDataProperties(var9, var8);
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 63:
            var6 = _closure1_slot8;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 18;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = var5.props;
            var9 = var2;
            var7 = copyDataProperties(var9, var8);
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 61:
            var6 = _closure1_slot8;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 17;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = var5.props;
            var9 = var2;
            var7 = copyDataProperties(var9, var8);
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 59:
            var2 = _closure1_slot11;
            return var2;
case 57:
            var6 = _closure1_slot8;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 16;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = var5.props;
            var9 = var2;
            var7 = copyDataProperties(var9, var8);
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 55:
            var6 = _closure1_slot8;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 15;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = var5.props;
            var9 = var2;
            var7 = copyDataProperties(var9, var8);
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 53:
            var6 = _closure1_slot8;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = var5.props;
            var9 = var2;
            var7 = copyDataProperties(var9, var8);
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 51:
            var6 = _closure1_slot8;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 13;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = var5.props;
            var9 = var2;
            var7 = copyDataProperties(var9, var8);
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 49:
            var6 = _closure1_slot8;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = var5.props;
            var9 = var2;
            var7 = copyDataProperties(var9, var8);
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 47:
            var6 = _closure1_slot8;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = var5.props;
            var9 = var2;
            var7 = copyDataProperties(var9, var8);
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 45:
            var6 = _closure1_slot8;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 10;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = var5.props;
            var9 = var2;
            var7 = copyDataProperties(var9, var8);
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 44:
            var6 = _closure1_slot8;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = var5.props;
            var9 = var2;
            var7 = copyDataProperties(var9, var8);
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 42:
            var6 = _closure1_slot8;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = var5.props;
            var9 = var2;
            var7 = copyDataProperties(var9, var8);
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 40:
            var4 = _closure1_slot8;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var8 = var5.props;
            var9 = var1;
            var5 = copyDataProperties(var9, var8);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var13 = 1;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot4 = var9;
    var4 = var4.StyleSheet;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.SearchHistoryItemTypes;
    var _closure1_slot6 = var9;
    var4 = var4.SearchListItemTypes;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot8 = var9;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var10 = var11.createStyles;
    var4 = {};
    var12 = {};
    var12['flex'] = var13;
    var4['container'] = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var10 = var8.bind(var1)(var4);
    var4 = {};
    var4 = var9.bind(var1)(var10, var4);
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var8.bind(var1)(var4);
    var4 = {};
    var4 = var9.bind(var1)(var8, var4);
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function SearchList(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var15 = var1.contentContainerStyle;
            var18 = var1.data;
            var14 = var1.onEndReached;
            var10 = var1.ItemSeparatorComponent;
            var12 = var1.ListHeaderComponent;
            var11 = var1.ListFooterComponent;
            var19 = var1.estimatedItemSize;
            var9 = var1.numColumns;
            var2 = _closure1_slot3;
            var1 = var2.useRef;
            var5 = null;
            var20 = var1.bind(var2)(var5);
            var1 = _closure1_slot10;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 22;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var17 = var1.bottom;
            var1 = var5 == var9;
            var2 = 0.5;
            var16 = var2;
            if(var1) { _fun0004_ip = 73; continue _fun0004 }
case 74:
            var1 = 1;
            var16 = var2;
            if(!(var1 !== var9)) { _fun0004_ip = 73; continue _fun0004 }
case 75:
            var16 = 0.8;
            var1 = 2;
            if(!(var1 !== var9)) { _fun0004_ip = 73; continue _fun0004 }
case 76:
            var1 = 3;
            var1 = var9 >= var1;
            var16 = undefined;
            if(!var1) { _fun0004_ip = 73; continue _fun0004 }
case 77:
            var16 = 0.99;
case 73:
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var6.container;
            var1['style'] = var6;
            var7 = var18.length;
            var6 = 0;
            var6 = var6 === var7;
            if(!var6) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            var6 = var5 == var11;
case 78:
            if(!var6) { _fun0004_ip = 80; continue _fun0004 }
case 21:
            var6 = var5 == var12;
case 80:
            if(!var6) { _fun0004_ip = 81; continue _fun0004 }
case 82:
            var8 = _closure1_slot8;
            var7 = _closure1_slot4;
            var5 = {};
            var21 = _closure1_slot5;
            var21 = var21.absoluteFill;
            var5['style'] = var21;
            var23 = _closure1_slot8;
            var22 = _closure1_slot1;
            var28 = _closure1_slot2;
            var21 = 23;
            var21 = var28[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var27 = _closure1_slot0;
            var24 = 24;
            var25 = var28[var24];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var28[var24];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.V6nAfF;
            var24 = var25.bind(var26)(var24);
            var21['text'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var5['children'] = var21;
            var6 = var8.bind(var4)(var7, var5);
case 81:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot0;
            var21 = _closure1_slot2;
            var6 = 25;
            var6 = var21[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.AnimatedFlashList;
            var6 = {'ref': null, 'keyboardDismissMode': 'on-drag', 'keyboardShouldPersistTaps': 'handled'};
            var6['ref'] = var20;
            var6['estimatedItemSize'] = var19;
            var6['data'] = var18;
            var18 = _closure1_slot16;
            var6['renderItem'] = var18;
            var6['onEndReachedThreshold'] = var16;
            var6['onEndReached'] = var14;
            var14 = true;
            var6['scrollsToTop'] = var14;
            var14 = {};
            var16 = 16;
            var16 = var16 + var17;
            var14['paddingBottom'] = var16;
            var30 = var14;
            var29 = var15;
            var15 = copyDataProperties(var30, var29);
            var6['contentContainerStyle'] = var14;
            var14 = _closure1_slot14;
            var6['keyExtractor'] = var14;
            var13 = _closure1_slot15;
            var6['getItemType'] = var13;
            var6['ListHeaderComponent'] = var12;
            var6['ListFooterComponent'] = var11;
            var6['ItemSeparatorComponent'] = var10;
            var6['numColumns'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/list/SearchList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
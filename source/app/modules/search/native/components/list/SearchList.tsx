// app/modules/search/native/components/list/SearchList.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function getItemKey(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.type;
            var5 = _closure1_slot7;
            var5 = var5.DM;
            if(!(var5 !== var4)) { _fun0001_ip = 747; continue _fun0001 }
 30:
            var5 = _closure1_slot7;
            var5 = var5.GUILD_CHANNEL_MEMBER;
            if(!(var5 !== var4)) { _fun0001_ip = 692; continue _fun0001 }
 47:
            var5 = _closure1_slot7;
            var5 = var5.SEARCH_HISTORY_ITEM;
            if(!(var5 !== var4)) { _fun0001_ip = 665; continue _fun0001 }
 64:
            var5 = _closure1_slot7;
            var5 = var5.MEDIA_GRID;
            if(!(var5 !== var4)) { _fun0001_ip = 621; continue _fun0001 }
 81:
            var5 = _closure1_slot7;
            var5 = var5.MEDIA;
            if(!(var5 !== var4)) { _fun0001_ip = 558; continue _fun0001 }
 98:
            var5 = _closure1_slot7;
            var5 = var5.MEDIA_PLACEHOLDER;
            if(!(var5 !== var4)) { _fun0001_ip = 551; continue _fun0001 }
 115:
            var5 = _closure1_slot7;
            var5 = var5.FILE_OR_LINK_PLACEHOLDER;
            if(!(var5 !== var4)) { _fun0001_ip = 551; continue _fun0001 }
 132:
            var5 = _closure1_slot7;
            var5 = var5.MESSAGE_PLACEHOLDER;
            if(!(var5 !== var4)) { _fun0001_ip = 551; continue _fun0001 }
 149:
            var5 = _closure1_slot7;
            var5 = var5.GUILD_CHANNEL_MEMBER_PLACEHOLDER;
            if(!(var5 !== var4)) { _fun0001_ip = 551; continue _fun0001 }
 166:
            var5 = _closure1_slot7;
            var5 = var5.GROUP_DM;
            if(!(var5 !== var4)) { _fun0001_ip = 501; continue _fun0001 }
 183:
            var5 = _closure1_slot7;
            var5 = var5.GUILD_TEXT_CHANNEL;
            if(!(var5 !== var4)) { _fun0001_ip = 462; continue _fun0001 }
 200:
            var5 = _closure1_slot7;
            var5 = var5.GUILD_VOICE_CHANNEL;
            if(!(var5 !== var4)) { _fun0001_ip = 462; continue _fun0001 }
 217:
            var5 = _closure1_slot7;
            var5 = var5.MESSAGE;
            if(!(var5 !== var4)) { _fun0001_ip = 423; continue _fun0001 }
 234:
            var5 = _closure1_slot7;
            var5 = var5.LINK;
            if(!(var5 !== var4)) { _fun0001_ip = 362; continue _fun0001 }
 248:
            var5 = _closure1_slot7;
            var5 = var5.FILE;
            if(!(var5 !== var4)) { _fun0001_ip = 362; continue _fun0001 }
 262:
            var5 = _closure1_slot7;
            var5 = var5.GENERIC;
            if(!(var5 !== var4)) { _fun0001_ip = 328; continue _fun0001 }
 276:
            var3 = _closure1_slot7;
            var3 = var3.SECTION;
            if(!(var3 !== var4)) { _fun0001_ip = 294; continue _fun0001 }
 290:
            var3 = undefined;
            return var3;
 294:
            var3 = var1.props;
            var5 = var3.title;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var3 = var4.bind(var3)(var5);
            return var3;
 328:
            var3 = var1.props;
            var5 = var3.text;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var3 = var4.bind(var3)(var5);
            return var3;
 362:
            var3 = var1.props;
            var3 = var3.data;
            var7 = var3.messageId;
            var3 = var1.props;
            var3 = var3.data;
            var6 = var3.mediaIndex;
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = '-';
            var3 = var5.bind(var4)(var7, var3, var6);
            return var3;
 423:
            var3 = var1.props;
            var3 = var3.message;
            var5 = var3.id;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var3 = var4.bind(var3)(var5);
            return var3;
 462:
            var3 = var1.props;
            var3 = var3.channel;
            var5 = var3.id;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var3 = var4.bind(var3)(var5);
            return var3;
 501:
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
 551:
            var3 = var1.key;
            return var3;
 558:
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
 621:
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
 665:
            var3 = var1.props;
            var4 = var3.searchHistoryItem;
            var3 = function searchHistoryKeyExtractor(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var4 = _closure1_slot6;
                    var4 = var4.TEXT;
                    if(!(var4 !== var3)) { _fun0002_ip = 143; continue _fun0002 }
 25:
                    var4 = _closure1_slot6;
                    var4 = var4.GROUP_DM;
                    if(!(var4 !== var3)) { _fun0002_ip = 114; continue _fun0002 }
 39:
                    var4 = _closure1_slot6;
                    var4 = var4.GUILD_TEXT_CHANNEL;
                    if(!(var4 !== var3)) { _fun0002_ip = 114; continue _fun0002 }
 53:
                    var4 = _closure1_slot6;
                    var4 = var4.GUILD_VOICE_CHANNEL;
                    if(!(var4 !== var3)) { _fun0002_ip = 114; continue _fun0002 }
 67:
                    var2 = _closure1_slot6;
                    var2 = var2.DM;
                    if(!(var2 !== var3)) { _fun0002_ip = 85; continue _fun0002 }
 81:
                    var2 = undefined;
                    return var2;
 85:
                    var4 = var1.userId;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = '';
                    var2 = var3.bind(var2)(var4);
                    return var2;
 114:
                    var4 = var1.channelId;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = '';
                    var2 = var3.bind(var2)(var4);
                    return var2;
 143:
                    var5 = var1.text;
                    var3 = var1.tags;
                    var1 = null;
                    var1 = var1 == var3;
                    var4 = undefined;
                    if(var1) { _fun0002_ip = 198; continue _fun0002 }
 165:
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
 198:
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
 692:
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
 747:
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
    var _closure1_slot12 = var1;
    var1 = function keyExtractor(arg1) {
        var3 = arg1;
        var5 = var3.type;
        var2 = _closure1_slot12;
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
    var _closure1_slot13 = var1;
    var1 = function getItemType(arg1) {
        var1 = arg1;
        var1 = var1.type;
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function renderItem(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var5 = var1.item;
            var3 = var5.type;
            var2 = _closure1_slot7;
            var2 = var2.DM;
            if(!(var2 !== var3)) { _fun0003_ip = 1047; continue _fun0003 }
 33:
            var2 = _closure1_slot7;
            var2 = var2.GROUP_DM;
            if(!(var2 !== var3)) { _fun0003_ip = 999; continue _fun0003 }
 50:
            var2 = _closure1_slot7;
            var2 = var2.SEARCH_HISTORY_ITEM;
            if(!(var2 !== var3)) { _fun0003_ip = 951; continue _fun0003 }
 67:
            var2 = _closure1_slot7;
            var2 = var2.MEDIA;
            if(!(var2 !== var3)) { _fun0003_ip = 903; continue _fun0003 }
 84:
            var2 = _closure1_slot7;
            var2 = var2.MEDIA_PLACEHOLDER;
            if(!(var2 !== var3)) { _fun0003_ip = 855; continue _fun0003 }
 101:
            var2 = _closure1_slot7;
            var2 = var2.FILE_OR_LINK_PLACEHOLDER;
            if(!(var2 !== var3)) { _fun0003_ip = 807; continue _fun0003 }
 118:
            var2 = _closure1_slot7;
            var2 = var2.MEDIA_GRID;
            if(!(var2 !== var3)) { _fun0003_ip = 759; continue _fun0003 }
 135:
            var2 = _closure1_slot7;
            var2 = var2.GUILD_TEXT_CHANNEL;
            if(!(var2 !== var3)) { _fun0003_ip = 711; continue _fun0003 }
 152:
            var2 = _closure1_slot7;
            var2 = var2.GUILD_VOICE_CHANNEL;
            if(!(var2 !== var3)) { _fun0003_ip = 663; continue _fun0003 }
 169:
            var2 = _closure1_slot7;
            var2 = var2.MESSAGE;
            if(!(var2 !== var3)) { _fun0003_ip = 615; continue _fun0003 }
 186:
            var2 = _closure1_slot7;
            var2 = var2.MESSAGE_PLACEHOLDER;
            if(!(var2 !== var3)) { _fun0003_ip = 579; continue _fun0003 }
 203:
            var2 = _closure1_slot7;
            var2 = var2.LINK;
            if(!(var2 !== var3)) { _fun0003_ip = 531; continue _fun0003 }
 220:
            var2 = _closure1_slot7;
            var2 = var2.FILE;
            if(!(var2 !== var3)) { _fun0003_ip = 483; continue _fun0003 }
 237:
            var2 = _closure1_slot7;
            var2 = var2.GUILD_CHANNEL_MEMBER;
            if(!(var2 !== var3)) { _fun0003_ip = 435; continue _fun0003 }
 254:
            var2 = _closure1_slot7;
            var2 = var2.GUILD_CHANNEL_MEMBER_PLACEHOLDER;
            if(!(var2 !== var3)) { _fun0003_ip = 399; continue _fun0003 }
 271:
            var2 = _closure1_slot7;
            var2 = var2.GENERIC;
            if(!(var2 !== var3)) { _fun0003_ip = 351; continue _fun0003 }
 285:
            var2 = _closure1_slot7;
            var2 = var2.SECTION;
            if(!(var2 !== var3)) { _fun0003_ip = 303; continue _fun0003 }
 299:
            var2 = null;
            return var2;
 303:
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
 351:
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
 399:
            var6 = _closure1_slot8;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 19;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 435:
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
 483:
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
 531:
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
 579:
            var6 = _closure1_slot8;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 15;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 615:
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
 663:
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
 711:
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
 759:
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
 807:
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
 855:
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
 903:
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
 951:
            var6 = _closure1_slot8;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = var5.props;
            var9 = var2;
            var7 = copyDataProperties(var9, var8);
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 999:
            var6 = _closure1_slot8;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = var5.props;
            var9 = var2;
            var7 = copyDataProperties(var9, var8);
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1047:
            var4 = _closure1_slot8;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
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
    var _closure1_slot15 = var1;
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
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var11 = 1;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var4 = var4.StyleSheet;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.SearchHistoryItemTypes;
    var _closure1_slot6 = var8;
    var4 = var4.SearchListItemTypes;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var11;
    var4['container'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = {'itemVisiblePercentThreshold': 75, 'minimumViewTime': 1000};
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function SearchList(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var16 = var2.contentContainerStyle;
            var19 = var2.data;
            var15 = var2.onEndReached;
            var12 = var2.ItemSeparatorComponent;
            var14 = var2.ListHeaderComponent;
            var13 = var2.ListFooterComponent;
            var20 = var2.estimatedItemSize;
            var11 = var2.numColumns;
            var8 = var2.onViewableItemsChanged;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot3;
            var2 = var3.useRef;
            var5 = null;
            var21 = var2.bind(var3)(var5);
            var _closure2_slot1 = var21;
            var2 = _closure1_slot10;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 22;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var18 = var2.bottom;
            var2 = var5 == var11;
            var3 = 0.5;
            var17 = var3;
            if(var2) { _fun0004_ip = 193; continue _fun0004 }
 144:
            var2 = 1;
            var17 = var3;
            if(!(var2 !== var11)) { _fun0004_ip = 193; continue _fun0004 }
 154:
            var17 = 0.8;
            var2 = 2;
            if(!(var2 !== var11)) { _fun0004_ip = 193; continue _fun0004 }
 171:
            var2 = 3;
            var2 = var11 >= var2;
            var17 = undefined;
            if(!var2) { _fun0004_ip = 193; continue _fun0004 }
 183:
            var17 = 0.99;
 193:
            var7 = _closure1_slot3;
            var10 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var8;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.viewableItems;
                    var4 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0005_ip = 33; continue _fun0005 }
 22:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 33:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var10.bind(var7)(var2, var3);
            var3 = var7.useEffect;
            var2 = new Array(2);
            var2[0] = var19;
            var2[1] = var8;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0006_ip = 36; continue _fun0006 }
 13:
                    var2 = _closure2_slot1;
                    var2 = var2.current;
                    if(!(var1 != var2)) { _fun0006_ip = 36; continue _fun0006 }
 26:
                    var1 = var2.recomputeViewableItems;
                    var1 = var1.bind(var2)();
 36:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var6.container;
            var1['style'] = var6;
            var7 = var19.length;
            var6 = 0;
            var6 = var6 === var7;
            if(!var6) { _fun0004_ip = 290; continue _fun0004 }
 286:
            var6 = var5 == var13;
 290:
            if(!var6) { _fun0004_ip = 297; continue _fun0004 }
 293:
            var6 = var5 == var14;
 297:
            if(!var6) { _fun0004_ip = 421; continue _fun0004 }
 300:
            var8 = _closure1_slot8;
            var7 = _closure1_slot4;
            var5 = {};
            var22 = _closure1_slot5;
            var22 = var22.absoluteFill;
            var5['style'] = var22;
            var24 = _closure1_slot8;
            var23 = _closure1_slot1;
            var29 = _closure1_slot2;
            var22 = 23;
            var22 = var29[var22];
            var23 = var23.bind(var4)(var22);
            var22 = {};
            var28 = _closure1_slot0;
            var25 = 24;
            var26 = var29[var25];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var29[var25];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.V6nAfH;
            var25 = var26.bind(var27)(var25);
            var22['text'] = var25;
            var22 = var24.bind(var4)(var23, var22);
            var5['children'] = var22;
            var6 = var8.bind(var4)(var7, var5);
 421:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot0;
            var22 = _closure1_slot2;
            var6 = 25;
            var6 = var22[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.AnimatedFlashList;
            var6 = {'ref': null, 'keyboardDismissMode': 'on-drag', 'keyboardShouldPersistTaps': 'handled'};
            var6['ref'] = var21;
            var6['estimatedItemSize'] = var20;
            var6['data'] = var19;
            var19 = _closure1_slot15;
            var6['renderItem'] = var19;
            var6['onEndReachedThreshold'] = var17;
            var6['onEndReached'] = var15;
            var15 = true;
            var6['scrollsToTop'] = var15;
            var15 = {};
            var17 = 16;
            var17 = var17 + var18;
            var15['paddingBottom'] = var17;
            var31 = var15;
            var30 = var16;
            var16 = copyDataProperties(var31, var30);
            var6['contentContainerStyle'] = var15;
            var15 = _closure1_slot13;
            var6['keyExtractor'] = var15;
            var15 = _closure1_slot14;
            var6['getItemType'] = var15;
            var6['ListHeaderComponent'] = var14;
            var6['ListFooterComponent'] = var13;
            var6['ItemSeparatorComponent'] = var12;
            var6['numColumns'] = var11;
            var6['onViewableItemsChanged'] = var10;
            var9 = _closure1_slot11;
            var6['viewabilityConfig'] = var9;
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
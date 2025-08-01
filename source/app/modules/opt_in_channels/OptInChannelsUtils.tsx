// app/modules/opt_in_channels/OptInChannelsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function setIndex(arg1, arg2) {
        var2 = arg2;
        var1 = arg1;
        var1['index'] = var2;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Routes;
    var _closure1_slot7 = var7;
    var4 = var4.ChannelTypes;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ChannelFlags;
    var _closure1_slot9 = var7;
    var4 = var4.StaticChannelRoute;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelListGuildActionRow;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ReadStateTypes;
    var _closure1_slot12 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/opt_in_channels/OptInChannelsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useFilterCategoriesByQuery(arg1, arg2, arg3, arg4) {
        var8 = arg2;
        var7 = arg3;
        var3 = arg4;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var2 = var3.toLowerCase;
        var5 = var2.bind(var3)();
        var _closure2_slot2 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 8;
        var4 = var4[var2];
        var2 = undefined;
        var6 = var6.bind(var2)(var4);
        var4 = var6.useCanSeeOnboardingHome;
        var2 = arg1;
        var2 = var4.bind(var6)(var2);
        var _closure2_slot3 = var2;
        var4 = _closure1_slot3;
        var6 = var4.useCallback;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = arg1;
                var7 = arg2;
                var1 = _closure2_slot3;
                var1 = !var1;
                if(var1) { _fun0001_ip = 51; continue _fun0001 }
 19:
                var4 = var5.channel;
                var3 = var4.hasFlag;
                var2 = _closure1_slot9;
                var2 = var2.IS_GUILD_RESOURCE_CHANNEL;
                var2 = var3.bind(var4)(var2);
                var1 = !var2;
 51:
                if(!var1) { _fun0001_ip = 192; continue _fun0001 }
 57:
                var2 = var5.channel;
                var3 = var2.type;
                var2 = _closure1_slot8;
                var2 = var2.GUILD_DIRECTORY;
                var2 = var3 !== var2;
                if(!var2) { _fun0001_ip = 189; continue _fun0001 }
 87:
                var6 = var7.length;
                var3 = 0;
                var3 = var3 === var6;
                if(var3) { _fun0001_ip = 186; continue _fun0001 }
 101:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 9;
                var4 = var8[var4];
                var8 = undefined;
                var6 = var6.bind(var8)(var4);
                var4 = var5.channel;
                var9 = var4.name;
                var4 = var9.toLowerCase;
                var4 = var4.bind(var9)();
                var4 = var6.bind(var8)(var7, var4);
                if(var4) { _fun0001_ip = 183; continue _fun0001 }
 152:
                var5 = var5.channel;
                var6 = var5.topic;
                var5 = var6.toLowerCase;
                var6 = var5.bind(var6)();
                var5 = var6.includes;
                var4 = var5.bind(var6)(var7);
 183:
                var3 = var4;
 186:
                var2 = var3;
 189:
                var1 = var2;
 192:
                return var1;
            }
        };
        var6 = var6.bind(var4)(var2, var3);
        var _closure2_slot4 = var6;
        var3 = var4.useMemo;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            var1 = {};
            var2 = new Array(0);
            var1['null'] = var2;
            var2 = new Array(0);
            var1['_categories'] = var2;
            var _closure3_slot0 = var1;
            var6 = _closure2_slot1;
            var5 = _closure1_slot8;
            var5 = var5.GUILD_CATEGORY;
            var7 = var6[var5];
            var6 = var7.forEach;
            var5 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var4 = var2.channel;
                    var3 = var4.id;
                    var2 = 'null';
                    if(!(var2 === var3)) { _fun0002_ip = 66; continue _fun0002 }
 23:
                    var3 = _closure3_slot0;
                    var2 = _closure2_slot0;
                    var6 = var2.null;
                    var5 = var6.filter;
                    var2 = function(arg1) {
                        var4 = _closure2_slot4;
                        var3 = _closure2_slot2;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var2 = var5.bind(var6)(var2);
                    var3['null'] = var2;
 66:
                    var3 = _closure3_slot0;
                    var2 = var4.id;
                    var5 = _closure2_slot0;
                    var4 = var4.id;
                    var5 = var5[var4];
                    var4 = var5.filter;
                    var1 = function(arg1) {
                        var4 = _closure2_slot4;
                        var3 = _closure2_slot2;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var1 = var4.bind(var5)(var1);
                    var3[var2] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var4 = _closure2_slot0;
            var5 = var4._categories;
            var4 = var5.filter;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.channel;
                    var3 = var1.id;
                    var1 = 'null';
                    var1 = var1 === var3;
                    if(var1) { _fun0003_ip = 42; continue _fun0003 }
 24:
                    var3 = _closure2_slot2;
                    var4 = var3.length;
                    var3 = 0;
                    var1 = var3 === var4;
 42:
                    if(var1) { _fun0003_ip = 77; continue _fun0003 }
 45:
                    var3 = _closure3_slot0;
                    var2 = var2.channel;
                    var2 = var2.id;
                    var2 = var3[var2];
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
 77:
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var1['_categories'] = var3;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 10;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = var1._categories;
            var4 = var4.bind(var5)(var3, var1);
            var3 = var4.forEach;
            var2 = _closure1_slot13;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useFilterCategoriesByQuery'] = var4;
    var4 = function getFirstRouteFor(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var11 = arg1;
            var2 = var11.getSections;
            var1 = false;
            var10 = var2.bind(var11)(var1);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = 11;
            var2 = var2[var4];
            var9 = undefined;
            var2 = var3.bind(var9)(var2);
            var2 = var2.SECTION_INDEX_GUILD_ACTIONS;
            var2 = var10[var2];
            var8 = 0;
            if(!(var2 > var8)) { _fun0004_ip = 109; continue _fun0004 }
 57:
            var2 = var11.getGuildActionSection;
            var3 = var2.bind(var11)();
            var2 = var3.getRow;
            var3 = var2.bind(var3)(var8);
            var2 = _closure1_slot11;
            var2 = var2.GUILD_HOME;
            if(!(var2 !== var3)) { _fun0004_ip = 229; continue _fun0004 }
 95:
            var2 = _closure1_slot11;
            var2 = var2.GUILD_ROLE_SUBSCRIPTIONS;
            if(!(var2 !== var3)) { _fun0004_ip = 217; continue _fun0004 }
 109:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var2 = var3.bind(var9)(var2);
            var7 = var2.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
            var2 = var11.voiceChannelsSectionNumber;
            var2 = var7 < var2;
            var3 = null;
            var6 = undefined;
            var5 = undefined;
            if(!var2) { _fun0004_ip = 208; continue _fun0004 }
 151:
            var2 = var10[var7];
            if(!(var2 > var8)) { _fun0004_ip = 195; continue _fun0004 }
 159:
            var2 = var11.getChannelFromSectionRow;
            var4 = var2.bind(var11)(var7, var8);
            var12 = var3 == var4;
            var2 = undefined;
            if(var12) { _fun0004_ip = 185; continue _fun0004 }
 180:
            var2 = var4.channel;
 185:
            var6 = var4;
            var5 = var2;
            if(!(var3 == var5)) { _fun0004_ip = 210; continue _fun0004 }
 195:
            var7 = var7 + 1;
            var4 = var11.voiceChannelsSectionNumber;
            if(var7 < var4) { _fun0004_ip = 151; continue _fun0004 }
 208:
            return var3;
 210:
            var2 = var2.id;
            return var2;
 217:
            var2 = _closure1_slot10;
            var2 = var2.ROLE_SUBSCRIPTIONS;
            return var2;
 229:
            var1 = _closure1_slot10;
            var1 = var1.GUILD_HOME;
            return var1;
        }
    };
    var3['getFirstRouteFor'] = var4;
    var4 = function clearRecentChannels(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var7 = arg1;
            var9 = arg2;
            var6 = arguments[2];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0005_ip = 17; continue _fun0005 }
 15:
            var6 = null;
 17:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 12;
            var3 = var5[var3];
            var8 = var4.bind(var1)(var3);
            var3 = var8.bulkClearRecents;
            var3 = var3.bind(var8)(var7, var9);
            var3 = 13;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.bulkAck;
            var8 = var9.map;
            var3 = function(arg1) {
                var4 = arg1;
                var1 = {};
                var1['channelId'] = var4;
                var3 = _closure1_slot12;
                var3 = var3.CHANNEL;
                var1['readStateType'] = var3;
                var3 = _closure1_slot6;
                var2 = var3.lastMessageId;
                var2 = var2.bind(var3)(var4);
                var1['messageId'] = var2;
                return var1;
            };
            var3 = var8.bind(var9)(var3);
            var3 = var4.bind(var5)(var3);
            var3 = null;
            if(!(var3 != var6)) { _fun0005_ip = 147; continue _fun0005 }
 100:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 14;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.transitionTo;
            var5 = _closure1_slot7;
            var2 = var5.CHANNEL;
            var2 = var2.bind(var5)(var7, var6);
            var2 = var3.bind(var4)(var2);
 147:
            return var1;
        }
    };
    var3['clearRecentChannels'] = var4;
    var4 = function useChannelBrowserSections(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var5 = arg1;
            var3 = arg2;
            var4 = arg4;
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var3;
            var2 = arg3;
            var _closure2_slot2 = var2;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 15;
            var2 = var10[var2];
            var8 = undefined;
            var11 = var9.bind(var8)(var2);
            var7 = var11.UNSAFE_useIsDismissibleContentDismissed;
            var2 = 16;
            var2 = var10[var2];
            var2 = var9.bind(var8)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.CHANNEL_BROWSER_NUX;
            var2 = var7.bind(var11)(var2);
            var7 = 17;
            var7 = var10[var7];
            var9 = var9.bind(var8)(var7);
            var8 = var9.useStateFromStoresObject;
            var6 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = {};
                    var4 = _closure1_slot4;
                    var3 = var4.getMutableGuildChannelsForGuild;
                    var2 = _closure2_slot0;
                    var11 = var3.bind(var4)(var2);
                    var9 = var11;
                    var4 = 1;
                    var3 = null;
                    var5 = undefined;
                    for(var6 in var9)
 45:
                    {
 54:
                        var12 = var6;
                        var12 = var11[var12];
                        var13 = var12.parent_id;
                        if(var3 == var13) { _fun0007_ip = 45; continue _fun0007 }
 71:
                        var5 = var1[var13];
                        var14 = var3 != var5;
                        var12 = 0;
                        if(!var14) { _fun0007_ip = 87; continue _fun0007 }
 84:
                        var12 = var5;
 87:
                        var12 = var12 + var4;
                        var1[var13] = var12;
                        _fun0007_ip = 45; continue _fun0007;
                    }
 97:
                    return var1;
                }
            };
            var5 = var8.bind(var9)(var7, var5, var6);
            var _closure2_slot3 = var5;
            var5 = var3._categories;
            var3 = var5.map;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = arg1;
                    var2 = _closure2_slot1;
                    var1 = var4.channel;
                    var1 = var1.id;
                    var2 = var2[var1];
                    var1 = {};
                    var5 = var4.channel;
                    var6 = var5.id;
                    var5 = 'null';
                    if(!(var5 !== var6)) { _fun0008_ip = 71; continue _fun0008 }
 44:
                    var5 = _closure2_slot3;
                    var4 = var4.channel;
                    var4 = var4.id;
                    var6 = var5[var4];
                    var4 = 1;
                    var5 = 0;
                    if(!(var5 !== var6)) { _fun0008_ip = 76; continue _fun0008 }
 71:
                    var4 = var2.length;
 76:
                    var1['rowCount'] = var4;
                    var4 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var4)) { _fun0008_ip = 96; continue _fun0008 }
 92:
                    var2 = _closure2_slot2;
 96:
                    var1['rowHeight'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1);
            if(var2) { _fun0006_ip = 174; continue _fun0006 }
 168:
            var3 = null;
            var2 = var3 == var4;
 174:
            if(var2) { _fun0006_ip = 203; continue _fun0006 }
 177:
            var3 = var1.unshift;
            var2 = {};
            var5 = 1;
            var2['rowCount'] = var5;
            var2['rowHeight'] = var4;
            var2 = var3.bind(var1)(var2);
 203:
            return var1;
        }
    };
    var3['useChannelBrowserSections'] = var4;
    var4 = function useChannelBrowserChannelCount(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 17;
            var3 = var5[var3];
            var7 = undefined;
            var4 = var4.bind(var7)(var3);
            var3 = var4.useStateFromStores;
            var5 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getCategories;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var3.bind(var4)(var2, var1);
            var1 = var5._categories;
            var4 = var1.length;
            var2 = var5._categories;
            var1 = var5._categories;
            var1 = var1.length;
            var6 = 1;
            var1 = var1 - var6;
            var3 = var2[var1];
            var1 = null;
            if(!(var1 != var3)) { _fun0009_ip = 218; continue _fun0009 }
 109:
            var2 = var3.channel;
            var8 = var1 == var2;
            var7 = undefined;
            if(var8) { _fun0009_ip = 128; continue _fun0009 }
 123:
            var7 = var2.id;
 128:
            var8 = var1 != var7;
            var2 = 'null';
            if(!var8) { _fun0009_ip = 142; continue _fun0009 }
 139:
            var2 = var7;
 142:
            var5 = var5[var2];
            var2 = var1 == var5;
            var7 = 0;
            var1 = 0;
            if(var2) { _fun0009_ip = 216; continue _fun0009 }
 157:
            var2 = var5.length;
            if(!(var7 !== var2)) { _fun0009_ip = 197; continue _fun0009 }
 166:
            var2 = var5.length;
            var2 = var2 - var6;
            var2 = var5[var2];
            var5 = var2.index;
            var2 = 2;
            var2 = var5 + var2;
            var2 = var2 - var4;
            _fun0009_ip = 213; continue _fun0009;
 197:
            var5 = var3.index;
            var3 = 2;
            var3 = var5 + var3;
            var2 = var3 - var4;
 213:
            var1 = var2;
 216:
            return var1;
 218:
            var1 = 0;
            return var1;
        }
    };
    var3['useChannelBrowserChannelCount'] = var4;
    var2 = function getActiveAgoTimestamp(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 18;
            var3 = var11[var1];
            var7 = undefined;
            var3 = var2.bind(var7)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var11[var1];
            var1 = var2.bind(var7)(var1);
            var1 = var1.t;
            var2 = var1.8N0BHR;
            var1 = {};
            var9 = _closure1_slot1;
            var6 = 19;
            var6 = var11[var6];
            var6 = var9.bind(var7)(var6);
            var8 = 20;
            var8 = var11[var8];
            var9 = var9.bind(var7)(var8);
            var8 = var9.extractTimestamp;
            var11 = _closure1_slot6;
            var10 = var11.lastMessageId;
            var10 = var10.bind(var11)(var5);
            var11 = null;
            if(!(var11 != var10)) { _fun0010_ip = 120; continue _fun0010 }
 117:
            var5 = var10;
 120:
            var5 = var8.bind(var9)(var5);
            var6 = var6.bind(var7)(var5);
            var5 = var6.fromNow;
            var5 = var5.bind(var6)();
            var1['timeAgo'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getActiveAgoTimestamp'] = var2;
    return var1;
})();
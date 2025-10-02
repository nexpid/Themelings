// app/modules/interaction_components/SearchableSelectActionComponentUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function getSnowflakeSelectDefaultValues(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = arguments[2];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = new Array(0);
case 2:
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var5;
            var1 = null;
            if(!(var1 == var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            return var5;
case 4:
            var7 = _closure1_slot6;
            var6 = var7.getGuild;
            var3 = arg2;
            var3 = var6.bind(var7)(var3);
            _closure2_slot1 = var3;
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 10;
                    var2 = var2[var6];
                    var7 = undefined;
                    var2 = var4.bind(var7)(var2);
                    var2 = var2.SnowflakeSelectDefaultValueTypes;
                    var2 = var2.USER;
                    if(!(var2 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var7)(var2);
                    var2 = var2.SnowflakeSelectDefaultValueTypes;
                    var2 = var2.ROLE;
                    if(!(var2 !== var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var7)(var2);
                    var2 = var2.SnowflakeSelectDefaultValueTypes;
                    var2 = var2.CHANNEL;
                    if(!(var2 !== var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    return var7;
case 10:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var8 = _closure1_slot3;
                    var6 = var8.getChannel;
                    var3 = var1.id;
                    var6 = var6.bind(var8)(var3);
                    var8 = var2 == var6;
                    var3 = null;
                    if(var8) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var9 = var6.guild_id;
                    var8 = _closure2_slot1;
                    var8 = var8.id;
                    var3 = null;
                    if(!(var9 === var8)) { _fun0002_ip = 14; continue _fun0002 }
case 16:
                    var8 = _closure2_slot0;
                    var9 = var8.length;
                    var8 = 0;
                    if(!(var9 > var8)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var9 = _closure2_slot0;
                    var8 = var9.includes;
                    var4 = var6.type;
                    var4 = var8.bind(var9)(var4);
                    var3 = null;
                    if(!var4) { _fun0002_ip = 14; continue _fun0002 }
case 17:
                    var4 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 9;
                    var8 = var10[var8];
                    var8 = var9.bind(var7)(var8);
                    var8 = var8.SelectOptionType;
                    var8 = var8.CHANNEL;
                    var4['type'] = var8;
                    var8 = var6.id;
                    var4['value'] = var8;
                    var6 = var6.name;
                    var4['label'] = var6;
                    var3 = var4;
case 14:
                    return var3;
case 12:
                    return var2;
case 8:
                    var4 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var8 = _closure1_slot5;
                    var6 = var8.getRole;
                    var3 = _closure2_slot1;
                    var4 = var3.id;
                    var3 = var1.id;
                    var6 = var6.bind(var8)(var4, var3);
                    var4 = var2 == var6;
                    var3 = null;
                    if(var4) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var4 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 9;
                    var8 = var10[var8];
                    var8 = var9.bind(var7)(var8);
                    var8 = var8.SelectOptionType;
                    var8 = var8.ROLE;
                    var4['type'] = var8;
                    var8 = var6.id;
                    var4['value'] = var8;
                    var6 = var6.name;
                    var4['label'] = var6;
                    var3 = var4;
case 21:
                    return var3;
case 19:
                    return var2;
case 6:
                    var3 = _closure1_slot7;
                    var2 = var3.getUser;
                    var1 = var1.id;
                    var4 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 != var4)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var3 = _closure2_slot1;
                    var6 = var1 != var3;
                    var3 = undefined;
                    if(!var6) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var9 = _closure1_slot4;
                    var8 = var9.getNick;
                    var2 = _closure2_slot1;
                    var6 = var2.id;
                    var2 = var4.id;
                    var3 = var8.bind(var9)(var6, var2);
case 25:
                    var2 = {};
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 9;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.SelectOptionType;
                    var5 = var5.USER;
                    var2['type'] = var5;
                    var5 = var4.id;
                    var2['value'] = var5;
                    if(!(var1 == var3)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var3 = var4.globalName;
case 27:
                    if(!(var1 == var3)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var3 = var4.username;
case 29:
                    var2['label'] = var3;
                    return var2;
case 23:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 11;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.isNotNullish;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot9 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/interaction_components/SearchableSelectActionComponentUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = 1000;
    var3['MIN_REREQUEST_TIME'] = var5;
    var5 = function queryMentionables(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var5 = arg3;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var5 = var3.bind(var4)(var5);
            var _closure2_slot1 = var5;
            var3 = null;
            if(!(var3 != var5)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = 6;
            var3 = var3[var10];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.USER_SELECT;
            var7 = var8 === var3;
            if(var7) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.MENTIONABLE_SELECT;
            var7 = var8 === var3;
case 33:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.ROLE_SELECT;
            var6 = var8 === var3;
            if(var6) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var9.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.MENTIONABLE_SELECT;
            var6 = var8 === var3;
case 35:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 7;
            var1 = var8[var1];
            var4 = var3.bind(var4)(var1);
            var3 = var4.queryMentionResults;
            var1 = {};
            var8 = arg2;
            var1['query'] = var8;
            var1['channel'] = var5;
            var5 = false;
            var1['canMentionEveryone'] = var5;
            var1['canMentionHere'] = var5;
            var1['canMentionUsers'] = var7;
            var1['canMentionRoles'] = var6;
            var6 = true;
            var1['includeAllGuildUsers'] = var6;
            var1['includeNonMentionableRoles'] = var6;
            var1['checkRecentlyTalkedOnEmptyQuery'] = var5;
            var5 = 15;
            var1['limit'] = var5;
            var1 = var3.bind(var4)(var1);
            var4 = var1.users;
            var5 = var1.roles;
            var3 = var4.map;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 8;
                    var1 = var7[var1];
                    var6 = undefined;
                    var9 = var2.bind(var6)(var1);
                    var8 = var9.getNickname;
                    var5 = _closure2_slot1;
                    var2 = var5.getGuildId;
                    var5 = var2.bind(var5)();
                    var2 = _closure2_slot0;
                    var1 = var3.user;
                    var2 = var8.bind(var9)(var5, var2, var1);
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = 9;
                    var4 = var7[var4];
                    var4 = var5.bind(var6)(var4);
                    var4 = var4.SelectOptionType;
                    var4 = var4.USER;
                    var1['type'] = var4;
                    var4 = var3.user;
                    var4 = var4.id;
                    var1['value'] = var4;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0004_ip = 37; continue _fun0004 }
case 11:
                    var5 = var3.user;
                    var2 = var5.globalName;
case 37:
                    if(!(var4 == var2)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var3 = var3.user;
                    var2 = var3.username;
case 38:
                    var1['label'] = var2;
                    return var1;
                }
            };
            var12 = var3.bind(var4)(var1);
            var1 = new Array(0);
            var11 = 0;
            var13 = var1;
            var11 = arraySpread(var13, var12, var11);
            var4 = var5.map;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.SelectOptionType;
                var3 = var3.ROLE;
                var1['type'] = var3;
                var3 = var2.id;
                var1['value'] = var3;
                var2 = var2.name;
                var1['label'] = var2;
                return var1;
            };
            var12 = var4.bind(var5)(var2);
            var13 = var1;
            var2 = arraySpread(var13, var12, var11);
            return var1;
case 31:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['queryMentionables'] = var5;
    var5 = function queryChannels(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var2 = arg2;
            var4 = var3.bind(var4)(var2);
            var2 = null;
            if(!(var2 != var4)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.queryApplicationCommandChannelResults;
            var1 = {};
            var5 = arg1;
            var1['query'] = var5;
            var1['channel'] = var4;
            var4 = arg3;
            var1['channelTypes'] = var4;
            var4 = 15;
            var1['limit'] = var4;
            var1 = var2.bind(var3)(var1);
            var3 = var1.channels;
            var2 = var3.map;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.SelectOptionType;
                var3 = var3.CHANNEL;
                var1['type'] = var3;
                var3 = var2.id;
                var1['value'] = var3;
                var2 = var2.name;
                var1['label'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            _fun0005_ip = 42; continue _fun0005;
case 40:
            var1 = new Array(0);
case 42:
            return var1;
        }
    };
    var3['queryChannels'] = var5;
    var4 = function getInitialSnowflakeSelectOptions(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var6 = _closure1_slot8;
            var5 = var6.getInteractionComponentState;
            var3 = var1.id;
            var2 = arg2;
            var3 = var5.bind(var6)(var2, var3);
            var6 = _closure1_slot9;
            var5 = var1.defaultValues;
            var10 = var1.type;
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 6;
            var2 = var2[var8];
            var7 = undefined;
            var2 = var9.bind(var7)(var2);
            var2 = var2.ComponentType;
            var9 = var2.CHANNEL_SELECT;
            var2 = undefined;
            if(!(var10 === var9)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var2 = var1.channelTypes;
case 43:
            var1 = arg3;
            var1 = var6.bind(var7)(var5, var1, var2);
            var2 = null;
            var5 = var2 == var3;
            var6 = undefined;
            if(var5) { _fun0006_ip = 42; continue _fun0006 }
case 45:
            var6 = var3.type;
case 42:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var9.bind(var7)(var5);
            var5 = var5.ComponentType;
            var5 = var5.USER_SELECT;
            if(!(var6 !== var5)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var5 = var2 == var3;
            var6 = undefined;
            if(var5) { _fun0006_ip = 15; continue _fun0006 }
case 48:
            var6 = var3.type;
case 15:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var9.bind(var7)(var5);
            var5 = var5.ComponentType;
            var5 = var5.ROLE_SELECT;
            if(!(var6 !== var5)) { _fun0006_ip = 46; continue _fun0006 }
case 49:
            var5 = var2 == var3;
            var6 = undefined;
            if(var5) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var6 = var3.type;
case 50:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var9.bind(var7)(var5);
            var5 = var5.ComponentType;
            var5 = var5.MENTIONABLE_SELECT;
            if(!(var6 !== var5)) { _fun0006_ip = 46; continue _fun0006 }
case 52:
            var6 = var2 == var3;
            var5 = undefined;
            if(var6) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var5 = var3.type;
case 53:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var4 = var6.bind(var7)(var4);
            var4 = var4.ComponentType;
            var4 = var4.CHANNEL_SELECT;
            if(!(var5 === var4)) { _fun0006_ip = 55; continue _fun0006 }
case 46:
            var1 = var3.selectedOptions;
case 55:
            if(!(var2 == var1)) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var1 = new Array(0);
case 56:
            return var1;
        }
    };
    var3['getInitialSnowflakeSelectOptions'] = var4;
    var3['getSnowflakeSelectDefaultValues'] = var2;
    return var1;
})();
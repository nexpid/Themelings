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
 0:
            var4 = arg1;
            var1 = arguments[2];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 18; continue _fun0001 }
 14:
            var1 = new Array(0);
 18:
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var5;
            var1 = null;
            if(!(var1 == var4)) { _fun0001_ip = 34; continue _fun0001 }
 32:
            return var5;
 34:
            var7 = _closure1_slot6;
            var6 = var7.getGuild;
            var3 = arg2;
            var3 = var6.bind(var7)(var3);
            _closure2_slot1 = var3;
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
                    if(!(var2 !== var3)) { _fun0002_ip = 404; continue _fun0002 }
 52:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var7)(var2);
                    var2 = var2.SnowflakeSelectDefaultValueTypes;
                    var2 = var2.ROLE;
                    if(!(var2 !== var3)) { _fun0002_ip = 289; continue _fun0002 }
 88:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var7)(var2);
                    var2 = var2.SnowflakeSelectDefaultValueTypes;
                    var2 = var2.CHANNEL;
                    if(!(var2 !== var3)) { _fun0002_ip = 123; continue _fun0002 }
 121:
                    return var7;
 123:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 287; continue _fun0002 }
 139:
                    var8 = _closure1_slot3;
                    var6 = var8.getChannel;
                    var3 = var1.id;
                    var6 = var6.bind(var8)(var3);
                    var8 = var2 == var6;
                    var3 = null;
                    if(var8) { _fun0002_ip = 285; continue _fun0002 }
 167:
                    var9 = var6.guild_id;
                    var8 = _closure2_slot1;
                    var8 = var8.id;
                    var3 = null;
                    if(!(var9 === var8)) { _fun0002_ip = 285; continue _fun0002 }
 187:
                    var8 = _closure2_slot0;
                    var9 = var8.length;
                    var8 = 0;
                    if(!(var9 > var8)) { _fun0002_ip = 226; continue _fun0002 }
 202:
                    var9 = _closure2_slot0;
                    var8 = var9.includes;
                    var4 = var6.type;
                    var4 = var8.bind(var9)(var4);
                    var3 = null;
                    if(!var4) { _fun0002_ip = 285; continue _fun0002 }
 226:
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
 285:
                    return var3;
 287:
                    return var2;
 289:
                    var4 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0002_ip = 402; continue _fun0002 }
 302:
                    var8 = _closure1_slot5;
                    var6 = var8.getRole;
                    var3 = _closure2_slot1;
                    var4 = var3.id;
                    var3 = var1.id;
                    var6 = var6.bind(var8)(var4, var3);
                    var4 = var2 == var6;
                    var3 = null;
                    if(var4) { _fun0002_ip = 400; continue _fun0002 }
 341:
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
 400:
                    return var3;
 402:
                    return var2;
 404:
                    var3 = _closure1_slot7;
                    var2 = var3.getUser;
                    var1 = var1.id;
                    var4 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 != var4)) { _fun0002_ip = 548; continue _fun0002 }
 430:
                    var3 = _closure2_slot1;
                    var6 = var1 != var3;
                    var3 = undefined;
                    if(!var6) { _fun0002_ip = 476; continue _fun0002 }
 446:
                    var9 = _closure1_slot4;
                    var8 = var9.getNick;
                    var2 = _closure2_slot1;
                    var6 = var2.id;
                    var2 = var4.id;
                    var3 = var8.bind(var9)(var6, var2);
 476:
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
                    if(!(var1 == var3)) { _fun0002_ip = 533; continue _fun0002 }
 527:
                    var3 = var4.globalName;
 533:
                    if(!(var1 == var3)) { _fun0002_ip = 542; continue _fun0002 }
 537:
                    var3 = var4.username;
 542:
                    var2['label'] = var3;
                    return var2;
 548:
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
 0:
            var8 = arg1;
            var5 = arg3;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var5 = var3.bind(var4)(var5);
            var _closure2_slot1 = var5;
            var3 = null;
            if(!(var3 != var5)) { _fun0003_ip = 343; continue _fun0003 }
 42:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = 6;
            var3 = var3[var10];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.USER_SELECT;
            var7 = var8 === var3;
            if(var7) { _fun0003_ip = 116; continue _fun0003 }
 83:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.MENTIONABLE_SELECT;
            var7 = var8 === var3;
 116:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.ROLE_SELECT;
            var6 = var8 === var3;
            if(var6) { _fun0003_ip = 185; continue _fun0003 }
 152:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var9.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.MENTIONABLE_SELECT;
            var6 = var8 === var3;
 185:
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
 0:
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
                    if(!(var4 == var2)) { _fun0004_ip = 132; continue _fun0004 }
 121:
                    var5 = var3.user;
                    var2 = var5.globalName;
 132:
                    if(!(var4 == var2)) { _fun0004_ip = 146; continue _fun0004 }
 136:
                    var3 = var3.user;
                    var2 = var3.username;
 146:
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
 343:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['queryMentionables'] = var5;
    var5 = function queryChannels(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var2 = arg2;
            var4 = var3.bind(var4)(var2);
            var2 = null;
            if(!(var2 != var4)) { _fun0005_ip = 114; continue _fun0005 }
 26:
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
            _fun0005_ip = 118; continue _fun0005;
 114:
            var1 = new Array(0);
 118:
            return var1;
        }
    };
    var3['queryChannels'] = var5;
    var4 = function getInitialSnowflakeSelectOptions(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
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
            if(!(var10 === var9)) { _fun0006_ip = 91; continue _fun0006 }
 85:
            var2 = var1.channelTypes;
 91:
            var1 = arg3;
            var1 = var6.bind(var7)(var5, var1, var2);
            var2 = null;
            var5 = var2 == var3;
            var6 = undefined;
            if(var5) { _fun0006_ip = 117; continue _fun0006 }
 112:
            var6 = var3.type;
 117:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var9.bind(var7)(var5);
            var5 = var5.ComponentType;
            var5 = var5.USER_SELECT;
            if(!(var6 !== var5)) { _fun0006_ip = 294; continue _fun0006 }
 153:
            var5 = var2 == var3;
            var6 = undefined;
            if(var5) { _fun0006_ip = 167; continue _fun0006 }
 162:
            var6 = var3.type;
 167:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var9.bind(var7)(var5);
            var5 = var5.ComponentType;
            var5 = var5.ROLE_SELECT;
            if(!(var6 !== var5)) { _fun0006_ip = 294; continue _fun0006 }
 200:
            var5 = var2 == var3;
            var6 = undefined;
            if(var5) { _fun0006_ip = 214; continue _fun0006 }
 209:
            var6 = var3.type;
 214:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var9.bind(var7)(var5);
            var5 = var5.ComponentType;
            var5 = var5.MENTIONABLE_SELECT;
            if(!(var6 !== var5)) { _fun0006_ip = 294; continue _fun0006 }
 247:
            var6 = var2 == var3;
            var5 = undefined;
            if(var6) { _fun0006_ip = 261; continue _fun0006 }
 256:
            var5 = var3.type;
 261:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var4 = var6.bind(var7)(var4);
            var4 = var4.ComponentType;
            var4 = var4.CHANNEL_SELECT;
            if(!(var5 === var4)) { _fun0006_ip = 300; continue _fun0006 }
 294:
            var1 = var3.selectedOptions;
 300:
            if(!(var2 == var1)) { _fun0006_ip = 308; continue _fun0006 }
 304:
            var1 = new Array(0);
 308:
            return var1;
        }
    };
    var3['getInitialSnowflakeSelectOptions'] = var4;
    var3['getSnowflakeSelectDefaultValues'] = var2;
    return var1;
})();
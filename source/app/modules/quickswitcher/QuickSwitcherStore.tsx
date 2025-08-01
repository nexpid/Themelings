// app/modules/quickswitcher/QuickSwitcherStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot37 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var12 = function handleConnectionOpen() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot17;
            var1 = var3.getGuildCount;
            var3 = var1.bind(var3)();
            var1 = 3;
            var1 = var3 >= var1;
            if(var1) { _fun0002_ip = 77; continue _fun0002 }
 27:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 20;
            var5 = var3[var4];
            var3 = undefined;
            var6 = var6.bind(var3)(var5);
            var5 = var6.size;
            var7 = _closure1_slot11;
            var3 = var7.getMutablePrivateChannels;
            var3 = var3.bind(var7)();
            var3 = var5.bind(var6)(var3);
            var1 = var3 >= var4;
 77:
            _closure1_slot29 = var1;
            var1 = new Array(0);
            _closure1_slot34 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2 = function generateResultFromId(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 21;
            var1 = var4[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = arg1;
            var2 = var2.bind(var4)(var1);
            var5 = null;
            var4 = var5 == var2;
            var1 = null;
            if(var4) { _fun0003_ip = 70; continue _fun0003 }
 44:
            var4 = _closure1_slot30;
            if(!(var5 != var4)) { _fun0003_ip = 67; continue _fun0003 }
 52:
            var4 = _closure1_slot30;
            var3 = var2.type;
            var1 = null;
            if(!(var4 === var3)) { _fun0003_ip = 70; continue _fun0003 }
 67:
            var1 = var2;
 70:
            return var1;
        }
    };
    var _closure1_slot38 = var2;
    var1 = function generateInitialResults() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = _closure1_slot21;
            var3 = var4.getGuildId;
            var3 = var3.bind(var4)();
            var7 = null;
            var5 = var7 != var3;
            var4 = undefined;
            var14 = undefined;
            if(!var5) { _fun0004_ip = 35; continue _fun0004 }
 32:
            var14 = var3;
 35:
            var5 = _closure1_slot20;
            var3 = var5.getChannelId;
            var3 = var3.bind(var5)();
            var6 = var7 != var3;
            var5 = undefined;
            if(!var6) { _fun0004_ip = 61; continue _fun0004 }
 58:
            var5 = var3;
 61:
            var _closure2_slot0 = var5;
            var8 = _closure1_slot30;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 19;
            var6 = var6[var3];
            var6 = var9.bind(var4)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.USER;
            if(!(var6 !== var8)) { _fun0004_ip = 1446; continue _fun0004 }
 108:
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var3];
            var6 = var9.bind(var4)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.APPLICATION;
            if(!(var6 !== var8)) { _fun0004_ip = 1399; continue _fun0004 }
 144:
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var3];
            var6 = var9.bind(var4)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.GUILD;
            if(!(var6 !== var8)) { _fun0004_ip = 1352; continue _fun0004 }
 180:
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var3];
            var6 = var9.bind(var4)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.TEXT_CHANNEL;
            if(!(var6 !== var8)) { _fun0004_ip = 1285; continue _fun0004 }
 216:
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var3];
            var6 = var9.bind(var4)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.VOICE_CHANNEL;
            if(!(var6 !== var8)) { _fun0004_ip = 1201; continue _fun0004 }
 252:
            var11 = new Array(0);
            var9 = new Array(0);
            var6 = _closure1_slot35;
            var6 = var6.length;
            var12 = 1;
            var6 = var12 < var6;
            var8 = var12;
            if(!var6) { _fun0004_ip = 456; continue _fun0004 }
 285:
            var10 = _closure1_slot38;
            var6 = _closure1_slot35;
            var6 = var6[var8];
            var10 = var10.bind(var4)(var6);
            if(!(var7 != var10)) { _fun0004_ip = 436; continue _fun0004 }
 309:
            var13 = var10.type;
            var15 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var3];
            var6 = var15.bind(var4)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.TEXT_CHANNEL;
            var6 = var13 !== var6;
            if(!var6) { _fun0004_ip = 388; continue _fun0004 }
 350:
            var15 = var10.type;
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var3];
            var13 = var16.bind(var4)(var13);
            var13 = var13.AutocompleterResultTypes;
            var13 = var13.VOICE_CHANNEL;
            var6 = var15 !== var13;
 388:
            if(var6) { _fun0004_ip = 423; continue _fun0004 }
 391:
            var17 = _closure1_slot18;
            var16 = var17.can;
            var13 = _closure1_slot24;
            var15 = var13.VIEW_CHANNEL;
            var13 = var10.record;
            var6 = var16.bind(var17)(var15, var13);
 423:
            if(!var6) { _fun0004_ip = 436; continue _fun0004 }
 426:
            var6 = var9.push;
            var6 = var6.bind(var9)(var10);
 436:
            var8 = var8 + var12;
            var6 = _closure1_slot35;
            var6 = var6.length;
            if(var8 < var6) { _fun0004_ip = 285; continue _fun0004 }
 456:
            var6 = var9.length;
            var10 = 0;
            if(!(var6 > var10)) { _fun0004_ip = 581; continue _fun0004 }
 467:
            var8 = var11.push;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = var19[var3];
            var15 = var18.bind(var4)(var6);
            var13 = var15.createHeaderResult;
            var6 = 23;
            var16 = var19[var6];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var6 = var19[var6];
            var6 = var18.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.80lOZ2;
            var6 = var16.bind(var17)(var6);
            var13 = var13.bind(var15)(var6);
            var6 = new Array(1);
            var6[0] = var13;
            var22 = var6;
            var21 = var9;
            var20 = var12;
            var9 = arraySpread(var22, var21, var20);
            var22 = var8;
            var21 = var6;
            var20 = var11;
            var6 = apply(var22, var21, var20);
 581:
            var8 = function getDrafts(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = new Array(0);
                var _closure3_slot1 = var1;
                var5 = _closure1_slot12;
                var4 = var5.getRecentlyEditedDrafts;
                var3 = _closure1_slot13;
                var3 = var3.ChannelMessage;
                var4 = var4.bind(var5)(var3);
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.channelId;
                        var3 = _closure3_slot0;
                        var1 = undefined;
                        var3 = var3.bind(var1)(var4);
                        if(var3) { _fun0005_ip = 57; continue _fun0005 }
 25:
                        var3 = _closure1_slot38;
                        var4 = var3.bind(var1)(var4);
                        var3 = null;
                        if(!(var3 != var4)) { _fun0005_ip = 57; continue _fun0005 }
 43:
                        var3 = _closure3_slot1;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
 57:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = arg1;
                    var1 = _closure2_slot0;
                    var1 = var4 === var1;
                    if(var1) { _fun0006_ip = 34; continue _fun0006 }
 17:
                    var3 = _closure1_slot35;
                    var2 = var3.includes;
                    var1 = var2.bind(var3)(var4);
 34:
                    return var1;
                }
            };
            var9 = var8.bind(var4)(var6);
            var6 = var9.length;
            if(!(var6 > var10)) { _fun0004_ip = 721; continue _fun0004 }
 605:
            var8 = var11.push;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = var19[var3];
            var15 = var18.bind(var4)(var6);
            var13 = var15.createHeaderResult;
            var6 = 23;
            var16 = var19[var6];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var6 = var19[var6];
            var6 = var18.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.4B63jY;
            var6 = var16.bind(var17)(var6);
            var13 = var13.bind(var15)(var6);
            var6 = new Array(1);
            var6[0] = var13;
            var22 = var6;
            var21 = var9;
            var20 = var12;
            var9 = arraySpread(var22, var21, var20);
            var22 = var8;
            var21 = var6;
            var20 = var11;
            var6 = apply(var22, var21, var20);
 721:
            var8 = _closure1_slot19;
            var6 = var8.getMentionChannelIds;
            var9 = var6.bind(var8)();
            var8 = var9.filter;
            var6 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = arg1;
                    var1 = _closure2_slot0;
                    var1 = var4 !== var1;
                    if(!var1) { _fun0007_ip = 37; continue _fun0007 }
 17:
                    var3 = _closure1_slot35;
                    var2 = var3.includes;
                    var2 = var2.bind(var3)(var4);
                    var1 = !var2;
 37:
                    return var1;
                }
            };
            var9 = var8.bind(var9)(var6);
            var8 = var9.map;
            var6 = function(arg1) {
                var3 = _closure1_slot38;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var9 = var8.bind(var9)(var6);
            var8 = var9.filter;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 24;
            var6 = var13[var6];
            var6 = var12.bind(var4)(var6);
            var6 = var6.isNotNullish;
            var8 = var8.bind(var9)(var6);
            var6 = var8.reverse;
            var9 = var6.bind(var8)();
            var6 = var9.length;
            var8 = var11;
            if(!(var6 > var10)) { _fun0004_ip = 920; continue _fun0004 }
 823:
            var12 = var11.push;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = var19[var3];
            var15 = var18.bind(var4)(var6);
            var13 = var15.createHeaderResult;
            var6 = 23;
            var16 = var19[var6];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var6 = var19[var6];
            var6 = var18.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.61Df19;
            var6 = var16.bind(var17)(var6);
            var6 = var13.bind(var15)(var6);
            var6 = var12.bind(var11)(var6);
            var6 = var11.concat;
            var8 = var6.bind(var11)(var9);
 920:
            var6 = var8;
            if(!(var7 != var14)) { _fun0004_ip = 1149; continue _fun0004 }
 930:
            var9 = _closure1_slot14;
            var7 = var9.getSelectableChannelIds;
            var11 = var7.bind(var9)(var14);
            var9 = var11.filter;
            var7 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var8 = arg1;
                    var3 = _closure1_slot11;
                    var1 = var3.getChannel;
                    var4 = var1.bind(var3)(var8);
                    var5 = null;
                    var1 = var5 == var4;
                    if(var1) { _fun0008_ip = 40; continue _fun0008 }
 29:
                    var3 = _closure2_slot0;
                    var1 = var8 === var3;
 40:
                    if(var1) { _fun0008_ip = 57; continue _fun0008 }
 43:
                    var6 = _closure1_slot35;
                    var3 = var6.includes;
                    var1 = var3.bind(var6)(var8);
 57:
                    if(var1) { _fun0008_ip = 81; continue _fun0008 }
 60:
                    var7 = _closure1_slot22;
                    var6 = var7.isChannelMuted;
                    var3 = var4.guild_id;
                    var1 = var6.bind(var7)(var3, var8);
 81:
                    if(var1) { _fun0008_ip = 127; continue _fun0008 }
 84:
                    var3 = var4.parent_id;
                    var3 = var5 != var3;
                    if(!var3) { _fun0008_ip = 124; continue _fun0008 }
 97:
                    var8 = _closure1_slot22;
                    var7 = var8.isChannelMuted;
                    var6 = var4.guild_id;
                    var5 = var4.parent_id;
                    var3 = var7.bind(var8)(var6, var5);
 124:
                    var1 = var3;
 127:
                    var1 = !var1;
                    if(!var1) { _fun0008_ip = 166; continue _fun0008 }
 133:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 25;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.getHasImportantUnread;
                    var1 = var2.bind(var3)(var4);
 166:
                    return var1;
                }
            };
            var11 = var9.bind(var11)(var7);
            var9 = var11.map;
            var7 = function(arg1) {
                var3 = _closure1_slot38;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var11 = var9.bind(var11)(var7);
            var9 = var11.filter;
            var7 = function(arg1) {
                var1 = arg1;
                return var1;
            };
            var7 = var9.bind(var11)(var7);
            var _closure2_slot2 = var7;
            var9 = global;
            var12 = var9.Object;
            var11 = var12.values;
            var13 = _closure1_slot8;
            var9 = var13.getActiveJoinedUnreadThreadsForGuild;
            var9 = var9.bind(var13)(var14);
            var12 = var11.bind(var12)(var9);
            var11 = var12.forEach;
            var9 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var8 = arg1;
                    var1 = undefined;
                    var2 = null;
                    for(var5 in var8)
 21:
                    {
 30:
                        var11 = var5;
                        var10 = _closure1_slot38;
                        var12 = var10.bind(var1)(var11);
                        if(var2 == var12) { _fun0009_ip = 21; continue _fun0009 }
 46:
                        var11 = _closure2_slot2;
                        var10 = var11.push;
                        var10 = var10.bind(var11)(var12);
                        _fun0009_ip = 21; continue _fun0009;
                    }
 62:
                    return var1;
                }
            };
            var9 = var11.bind(var12)(var9);
            var9 = var7.length;
            var6 = var8;
            if(!(var9 > var10)) { _fun0004_ip = 1149; continue _fun0004 }
 1054:
            var9 = var8.push;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = var15[var3];
            var11 = var14.bind(var4)(var3);
            var10 = var11.createHeaderResult;
            var3 = 23;
            var12 = var15[var3];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var3 = var15[var3];
            var3 = var14.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.ieCAhI;
            var3 = var12.bind(var13)(var3);
            var3 = var10.bind(var11)(var3);
            var3 = var9.bind(var8)(var3);
            var3 = var8.concat;
            var6 = var3.bind(var8)(var7);
 1149:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 20;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var7 = var3.bind(var4)(var6);
            var6 = var7.uniqBy;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.record;
                var1 = var1.id;
                return var1;
            };
            var6 = var6.bind(var7)(var3);
            var3 = var6.value;
            var3 = var3.bind(var6)();
            return var3;
 1201:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 22;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.queryChannels;
            var3 = {'query': '', 'guildId': null, 'limit': 100, 'fuzzy': true};
            var9 = _closure1_slot21;
            var8 = var9.getGuildId;
            var8 = var8.bind(var9)();
            var3['guildId'] = var8;
            var8 = function filter() {
                var1 = true;
                return var1;
            };
            var3['filter'] = var8;
            var8 = _closure1_slot15;
            var3['type'] = var8;
            var3 = var6.bind(var7)(var3);
            return var3;
 1285:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 22;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.queryChannels;
            var3 = {'query': '', 'guildId': null, 'limit': 100, 'fuzzy': true};
            var9 = _closure1_slot21;
            var8 = var9.getGuildId;
            var8 = var8.bind(var9)();
            var3['guildId'] = var8;
            var3 = var6.bind(var7)(var3);
            return var3;
 1352:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 22;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.queryGuilds;
            var3 = {'query': '', 'limit': 100, 'fuzzy': true};
            var3 = var6.bind(var7)(var3);
            return var3;
 1399:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 22;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.queryApplications;
            var3 = {'query': '', 'limit': 100, 'fuzzy': true};
            var3 = var6.bind(var7)(var3);
            return var3;
 1446:
            var6 = _closure1_slot10;
            var3 = var6.getId;
            var3 = var3.bind(var6)();
            var _closure2_slot1 = var3;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 22;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.getRecentlyTalked;
            var2 = 100;
            var3 = var3.bind(var4)(var5, var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.record;
                var2 = var1.id;
                var1 = _closure2_slot1;
                var1 = var2 !== var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function updateResults(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var7 = _closure1_slot30;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 19;
            var6 = var1[var5];
            var1 = undefined;
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.USER;
            if(!(var6 !== var7)) { _fun0010_ip = 592; continue _fun0010 }
 54:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.TEXT_CHANNEL;
            if(!(var6 !== var7)) { _fun0010_ip = 495; continue _fun0010 }
 90:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.VOICE_CHANNEL;
            if(!(var6 !== var7)) { _fun0010_ip = 398; continue _fun0010 }
 126:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.GUILD;
            if(!(var6 !== var7)) { _fun0010_ip = 301; continue _fun0010 }
 162:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.APPLICATION;
            if(!(var6 !== var7)) { _fun0010_ip = 204; continue _fun0010 }
 195:
            _closure1_slot31 = var4;
            _fun0010_ip = 797; continue _fun0010;
 204:
            var7 = var4.unshift;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = var13[var5];
            var9 = var12.bind(var1)(var6);
            var8 = var9.createHeaderResult;
            var6 = 23;
            var10 = var13[var6];
            var10 = var12.bind(var1)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var6 = var13[var6];
            var6 = var12.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.VwK1lZ;
            var6 = var10.bind(var11)(var6);
            var6 = var8.bind(var9)(var6);
            var6 = var7.bind(var4)(var6);
            _closure1_slot31 = var4;
            _fun0010_ip = 797; continue _fun0010;
 301:
            var7 = var4.unshift;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = var13[var5];
            var9 = var12.bind(var1)(var6);
            var8 = var9.createHeaderResult;
            var6 = 23;
            var10 = var13[var6];
            var10 = var12.bind(var1)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var6 = var13[var6];
            var6 = var12.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.olADPj;
            var6 = var10.bind(var11)(var6);
            var6 = var8.bind(var9)(var6);
            var6 = var7.bind(var4)(var6);
            _closure1_slot31 = var4;
            _fun0010_ip = 797; continue _fun0010;
 398:
            var7 = var4.unshift;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = var13[var5];
            var9 = var12.bind(var1)(var6);
            var8 = var9.createHeaderResult;
            var6 = 23;
            var10 = var13[var6];
            var10 = var12.bind(var1)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var6 = var13[var6];
            var6 = var12.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.zUoI5O;
            var6 = var10.bind(var11)(var6);
            var6 = var8.bind(var9)(var6);
            var6 = var7.bind(var4)(var6);
            _closure1_slot31 = var4;
            _fun0010_ip = 797; continue _fun0010;
 495:
            var7 = var4.unshift;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = var13[var5];
            var9 = var12.bind(var1)(var6);
            var8 = var9.createHeaderResult;
            var6 = 23;
            var10 = var13[var6];
            var10 = var12.bind(var1)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var6 = var13[var6];
            var6 = var12.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.W26k4e;
            var6 = var10.bind(var11)(var6);
            var6 = var8.bind(var9)(var6);
            var6 = var7.bind(var4)(var6);
            _closure1_slot31 = var4;
            _fun0010_ip = 797; continue _fun0010;
 592:
            var8 = _closure1_slot17;
            var7 = var8.getGuild;
            var9 = _closure1_slot21;
            var6 = var9.getGuildId;
            var6 = var6.bind(var9)();
            var14 = var7.bind(var8)(var6);
            var7 = var4.unshift;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var9 = var8.bind(var1)(var6);
            var8 = var9.createHeaderResult;
            var6 = null;
            if(!(var6 == var14)) { _fun0010_ip = 714; continue _fun0010 }
 655:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 23;
            var10 = var13[var6];
            var10 = var12.bind(var1)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var6 = var13[var6];
            var6 = var12.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.XFYW1t;
            var6 = var10.bind(var11)(var6);
            _fun0010_ip = 783; continue _fun0010;
 714:
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 23;
            var12 = var15[var10];
            var12 = var11.bind(var1)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var10 = var15[var10];
            var10 = var11.bind(var1)(var10);
            var10 = var10.t;
            var11 = var10.FREzQk;
            var10 = {};
            var14 = var14.name;
            var10['name'] = var14;
            var6 = var12.bind(var13)(var11, var10);
 783:
            var6 = var8.bind(var9)(var6);
            var6 = var7.bind(var4)(var6);
            _closure1_slot31 = var4;
 797:
            var4 = _closure1_slot32;
            if(!(var3 === var4)) { _fun0010_ip = 938; continue _fun0010 }
 808:
            var6 = _closure1_slot31;
            var4 = _closure1_slot27;
            var6 = var6[var4];
            var4 = null;
            var4 = var4 != var6;
            if(!var4) { _fun0010_ip = 867; continue _fun0010 }
 829:
            var7 = var6.type;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.HEADER;
            var4 = var7 === var6;
 867:
            if(!var4) { _fun0010_ip = 1039; continue _fun0010 }
 873:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var7 = var4[var5];
            var9 = var6.bind(var1)(var7);
            var8 = var9.findNextSelectedResult;
            var4 = var4[var5];
            var4 = var6.bind(var1)(var4);
            var4 = var4.FindResultDirections;
            var7 = var4.DOWN;
            var6 = _closure1_slot27;
            var4 = _closure1_slot31;
            var4 = var8.bind(var9)(var7, var6, var4);
            _closure1_slot27 = var4;
            _fun0010_ip = 1039; continue _fun0010;
 938:
            _closure1_slot32 = var3;
            var4 = global;
            var7 = var4.Math;
            var6 = var7.max;
            var4 = var3.length;
            var3 = _closure1_slot33;
            var3 = var6.bind(var7)(var4, var3);
            _closure1_slot33 = var3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = var3[var5];
            var7 = var4.bind(var1)(var6);
            var6 = var7.findNextSelectedResult;
            var3 = var3[var5];
            var3 = var4.bind(var1)(var3);
            var3 = var3.FindResultDirections;
            var5 = var3.DOWN;
            var4 = _closure1_slot31;
            var3 = -1;
            var3 = var6.bind(var7)(var5, var3, var4);
            _closure1_slot27 = var3;
 1039:
            var3 = _closure1_slot36;
            var2 = var3.emitChange;
            var2 = var2.bind(var3)();
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var11 = function handleQuickSwitcherShow(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var4 = var1.query;
            var3 = var1.queryMode;
            var5 = _closure1_slot21;
            var1 = var5.getGuildId;
            var6 = var1.bind(var5)();
            var5 = null;
            var7 = var5 != var6;
            var1 = undefined;
            var10 = undefined;
            if(!var7) { _fun0011_ip = 47; continue _fun0011 }
 44:
            var10 = var6;
 47:
            var6 = global;
            var9 = var6.Set;
            var8 = _closure1_slot10;
            var7 = var8.getId;
            var11 = var7.bind(var8)();
            var7 = var6.HermesInternal;
            var8 = var7.concat;
            var7 = 'user:';
            var8 = var8.bind(var7)(var11);
            var7 = new Array(1);
            var7[0] = var8;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var17 = var8;
            var16 = var7;
            var7 = new var17[var9](var16, var15);
            var7 = var7 instanceof Object ? var7 : var8;
            if(!(var5 != var10)) { _fun0011_ip = 158; continue _fun0011 }
 126:
            var8 = var7.add;
            var6 = var6.HermesInternal;
            var9 = var6.concat;
            var6 = 'guild:';
            var6 = var9.bind(var6)(var10);
            var6 = var8.bind(var7)(var6);
 158:
            var6 = _closure1_slot25;
            if(!(var5 == var6)) { _fun0011_ip = 255; continue _fun0011 }
 166:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 19;
            var6 = var9[var6];
            var11 = var8.bind(var1)(var6);
            var10 = _closure1_slot41;
            var9 = _closure1_slot26;
            var6 = var5 != var3;
            var8 = 5;
            if(!var6) { _fun0011_ip = 207; continue _fun0011 }
 204:
            var8 = 100;
 207:
            var6 = {};
            var12 = true;
            var6['frecencyBoosters'] = var12;
            var6['blacklist'] = var7;
            var7 = var11.prototype;
            var7 = Object.create(var7, {constructor: {value: var11}});
            var17 = var7;
            var16 = var10;
            var15 = var9;
            var14 = var8;
            var13 = var6;
            var6 = new var17[var11](var16, var15, var14, var13, var12);
            var6 = var6 instanceof Object ? var6 : var7;
            _fun0011_ip = 259; continue _fun0011;
 255:
            var6 = _closure1_slot25;
 259:
            var _closure1_slot25 = var6;
            _closure1_slot32 = var5;
            var5 = var4.length;
            _closure1_slot33 = var5;
            _closure1_slot30 = var3;
            var3 = _closure1_slot25;
            var2 = var3.search;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var1 = function handleUserSearchUpdate(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var4 = arg1;
            var2 = arg2;
            var1 = var2.trim;
            var3 = var1.bind(var2)();
            var1 = var3.trim;
            var2 = var1.bind(var3)();
            var1 = '';
            if(!(var1 === var2)) { _fun0012_ip = 47; continue _fun0012 }
 34:
            var2 = _closure1_slot39;
            var1 = undefined;
            var4 = var2.bind(var1)();
 47:
            var9 = _closure1_slot34;
            var6 = var4.length;
            var5 = var9.length;
            var2 = false;
            if(!(var6 === var5)) { _fun0012_ip = 139; continue _fun0012 }
 70:
            var5 = var4.length;
            var7 = 0;
            var5 = var7 < var5;
            var2 = true;
            if(!var5) { _fun0012_ip = 139; continue _fun0012 }
 86:
            var10 = var4[var7];
            var5 = var9[var7];
            var10 = var10.record;
            var10 = var10.id;
            var5 = var5.record;
            var5 = var5.id;
            var2 = false;
            if(!(var10 === var5)) { _fun0012_ip = 139; continue _fun0012 }
 122:
            var7 = var7 + 1;
            var5 = var4.length;
            var5 = var7 < var5;
            var2 = true;
            if(var5) { _fun0012_ip = 86; continue _fun0012 }
 139:
            if(var2) { _fun0012_ip = 158; continue _fun0012 }
 142:
            _closure1_slot34 = var4;
            var2 = _closure1_slot40;
            var1 = undefined;
            var1 = var2.bind(var1)(var4, var3);
 158:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var8 = function handleQuickSwitcherHide() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = null;
            _closure1_slot32 = var1;
            var3 = 0;
            _closure1_slot33 = var3;
            var3 = new Array(0);
            _closure1_slot34 = var3;
            var3 = _closure1_slot25;
            if(!(var1 != var3)) { _fun0013_ip = 49; continue _fun0013 }
 31:
            var4 = _closure1_slot25;
            var3 = var4.destroy;
            var3 = var3.bind(var4)();
            _closure1_slot25 = var1;
 49:
            var1 = undefined;
            return var1;
        }
    };
    var1 = global;
    var13 = var1.Object;
    var10 = var13.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var13)(var3, var1, var4);
    var4 = 0;
    var10 = var7[var4];
    var1 = undefined;
    var10 = var9.bind(var1)(var10);
    var _closure1_slot3 = var10;
    var10 = 1;
    var10 = var7[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot4 = var10;
    var10 = 2;
    var10 = var7[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot5 = var10;
    var10 = 3;
    var10 = var7[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot6 = var10;
    var10 = 4;
    var10 = var7[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot7 = var10;
    var10 = 5;
    var10 = var7[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot8 = var10;
    var10 = 6;
    var10 = var7[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot9 = var10;
    var10 = 7;
    var10 = var7[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot10 = var10;
    var10 = 8;
    var10 = var7[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot11 = var10;
    var10 = 9;
    var13 = var7[var10];
    var13 = var9.bind(var1)(var13);
    var _closure1_slot12 = var13;
    var10 = var7[var10];
    var10 = var6.bind(var1)(var10);
    var10 = var10.DraftType;
    var _closure1_slot13 = var10;
    var10 = 10;
    var13 = var7[var10];
    var13 = var9.bind(var1)(var13);
    var _closure1_slot14 = var13;
    var10 = var7[var10];
    var10 = var6.bind(var1)(var10);
    var10 = var10.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot15 = var10;
    var10 = 11;
    var10 = var7[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot16 = var10;
    var10 = 12;
    var10 = var7[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot17 = var10;
    var10 = 13;
    var10 = var7[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot18 = var10;
    var10 = 14;
    var10 = var7[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot19 = var10;
    var10 = 15;
    var10 = var7[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot20 = var10;
    var10 = 16;
    var10 = var7[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot21 = var10;
    var10 = 17;
    var10 = var7[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot22 = var10;
    var10 = 18;
    var10 = var7[var10];
    var10 = var6.bind(var1)(var10);
    var13 = var10.CHANNEL_NOTICE_SHOW_DELAY;
    var _closure1_slot23 = var13;
    var10 = var10.Permissions;
    var _closure1_slot24 = var10;
    var13 = 19;
    var10 = var7[var13];
    var10 = var6.bind(var1)(var10);
    var10 = var10.AutocompleterResultTypes;
    var14 = var10.USER;
    var10 = new Array(7);
    var10[0] = var14;
    var14 = var7[var13];
    var14 = var6.bind(var1)(var14);
    var14 = var14.AutocompleterResultTypes;
    var14 = var14.GROUP_DM;
    var10[1] = var14;
    var14 = var7[var13];
    var14 = var6.bind(var1)(var14);
    var14 = var14.AutocompleterResultTypes;
    var14 = var14.TEXT_CHANNEL;
    var10[2] = var14;
    var14 = var7[var13];
    var14 = var6.bind(var1)(var14);
    var14 = var14.AutocompleterResultTypes;
    var14 = var14.GUILD;
    var10[3] = var14;
    var14 = var7[var13];
    var14 = var6.bind(var1)(var14);
    var14 = var14.AutocompleterResultTypes;
    var14 = var14.APPLICATION;
    var10[4] = var14;
    var14 = var7[var13];
    var14 = var6.bind(var1)(var14);
    var14 = var14.AutocompleterResultTypes;
    var14 = var14.LINK;
    var10[5] = var14;
    var13 = var7[var13];
    var13 = var6.bind(var1)(var13);
    var13 = var13.AutocompleterResultTypes;
    var13 = var13.IN_APP_NAVIGATION;
    var10[6] = var13;
    var _closure1_slot26 = var10;
    var _closure1_slot27 = var4;
    var10 = false;
    var _closure1_slot28 = var10;
    var _closure1_slot29 = var10;
    var10 = null;
    var _closure1_slot30 = var10;
    var13 = new Array(0);
    var _closure1_slot31 = var13;
    var _closure1_slot32 = var10;
    var _closure1_slot33 = var4;
    var4 = new Array(0);
    var _closure1_slot34 = var4;
    var4 = new Array(0);
    var _closure1_slot35 = var4;
    var4 = 27;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var10 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function QuickSwitcherStoreClass() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot37;
                var1 = var1.bind(var3)();
                if(var1) { _fun0014_ip = 69; continue _fun0014 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0014_ip = 105; continue _fun0014;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var5 = arg1;
                var6 = this;
                var7 = var6.waitFor;
                var4 = _closure1_slot16;
                var2 = _closure1_slot17;
                var1 = _closure1_slot11;
                var1 = var7.bind(var6)(var4, var2, var1);
                var4 = var6.syncWith;
                var1 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() {
                    var1 = true;
                    return var1;
                };
                var1 = var4.bind(var6)(var2, var1);
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var6 = var2.Storage;
                var4 = var6.get;
                var2 = 'seenQSTutorial';
                var2 = var4.bind(var6)(var2);
                if(var2) { _fun0015_ip = 114; continue _fun0015 }
 112:
                var2 = false;
 114:
                _closure1_slot28 = var2;
                var4 = null;
                var6 = var4 == var5;
                var2 = undefined;
                if(var6) { _fun0015_ip = 135; continue _fun0015 }
 129:
                var2 = var5.channelHistory;
 135:
                if(!(var4 == var2)) { _fun0015_ip = 143; continue _fun0015 }
 139:
                var2 = new Array(0);
 143:
                _closure1_slot35 = var2;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var2 = _closure1_slot35;
            var1['channelHistory'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isOpen';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot25;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getResultTotals';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var5 = arg1;
                var _closure3_slot0 = var5;
                var1 = _closure1_slot25;
                var2 = null;
                var7 = var2 == var1;
                var6 = 0;
                var1 = 0;
                if(var7) { _fun0016_ip = 92; continue _fun0016 }
 29:
                if(!(var2 != var5)) { _fun0016_ip = 62; continue _fun0016 }
 33:
                var2 = _closure1_slot25;
                var7 = var2.results;
                var5 = var7.reduce;
                var2 = function(arg1, arg2) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        var3 = arg1;
                        var1 = arg2;
                        var4 = var1.type;
                        var2 = _closure3_slot0;
                        var1 = var3;
                        if(!(var4 === var2)) { _fun0017_ip = 32; continue _fun0017 }
 25:
                        var2 = 1;
                        var1 = var3 + var2;
 32:
                        return var1;
                    }
                };
                var2 = var5.bind(var7)(var2, var6);
                _fun0016_ip = 89; continue _fun0016;
 62:
                var4 = _closure1_slot25;
                var5 = var4.results;
                var4 = var5.reduce;
                var3 = function(arg1, arg2) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var3 = arg1;
                        var1 = arg2;
                        var4 = var1.type;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 19;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var5.bind(var1)(var2);
                        var1 = var1.AutocompleterResultTypes;
                        var2 = var1.HEADER;
                        var1 = var3;
                        if(!(var4 !== var2)) { _fun0018_ip = 62; continue _fun0018 }
 55:
                        var2 = 1;
                        var1 = var3 + var2;
 62:
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var3, var6);
 89:
                var1 = var2;
 92:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'channelNoticePredicate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var2 = var1.bind(var2)();
                var1 = arg2;
                var3 = var2 - var1;
                var2 = _closure1_slot23;
                var2 = var3 >= var2;
                var1 = _closure1_slot29;
                if(!var1) { _fun0019_ip = 45; continue _fun0019 }
 42:
                var1 = var2;
 45:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getFrequentGuilds';
        var5['key'] = var7;
        var7 = function value() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var3 = _closure1_slot25;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0020_ip = 39; continue _fun0020 }
 16:
                var5 = _closure1_slot25;
                var4 = var5.queryGuilds;
                var3 = '';
                var2 = 100;
                var1 = var4.bind(var5)(var3, var2);
 39:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getFrequentGuildsLength';
        var5['key'] = var7;
        var7 = function value() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var3 = _closure1_slot25;
                var1 = null;
                var3 = var1 != var3;
                var1 = 0;
                if(!var3) { _fun0021_ip = 46; continue _fun0021 }
 18:
                var5 = _closure1_slot25;
                var4 = var5.queryGuilds;
                var3 = '';
                var2 = 100;
                var2 = var4.bind(var5)(var3, var2);
                var1 = var2.length;
 46:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getChannelHistory';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot35;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getProps';
        var5['key'] = var7;
        var6 = function value() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var1 = {};
                var3 = _closure1_slot9;
                var3 = var3.theme;
                var1['theme'] = var3;
                var4 = _closure1_slot25;
                var3 = null;
                var4 = var3 != var4;
                var3 = '';
                if(!var4) { _fun0022_ip = 44; continue _fun0022 }
 35:
                var4 = _closure1_slot25;
                var3 = var4.query;
 44:
                var1['query'] = var3;
                var3 = _closure1_slot30;
                var1['queryMode'] = var3;
                var3 = _closure1_slot31;
                var1['results'] = var3;
                var3 = _closure1_slot27;
                var1['selectedIndex'] = var3;
                var3 = _closure1_slot28;
                var1['seenTutorial'] = var3;
                var2 = _closure1_slot33;
                var1['maxQueryLength'] = var2;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var4.bind(var1)(var10);
    var4 = 'QuickSwitcherStore';
    var10['displayName'] = var4;
    var10['persistKey'] = var4;
    var4 = 28;
    var4 = var7[var4];
    var17 = var9.bind(var1)(var4);
    var4 = {};
    var4['CONNECTION_OPEN'] = var12;
    var4['CONNECTION_OPEN_SUPPLEMENTAL'] = var12;
    var4['QUICKSWITCHER_SHOW'] = var11;
    var4['SHOW_ACTION_SHEET_QUICK_SWITCHER'] = var11;
    var4['QUICKSWITCHER_HIDE'] = var8;
    var4['OVERLAY_SET_INPUT_LOCKED'] = var8;
    var4['HIDE_ACTION_SHEET_QUICK_SWITCHER'] = var8;
    var8 = function handleQuickSwitcherSearch(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var1 = arg1;
            var5 = var1.query;
            var2 = var1.queryMode;
            var3 = _closure1_slot25;
            var4 = null;
            if(!(var4 != var3)) { _fun0023_ip = 396; continue _fun0023 }
 30:
            var6 = _closure1_slot21;
            var3 = var6.getGuildId;
            var3 = var3.bind(var6)();
            var7 = var4 != var3;
            var6 = null;
            if(!var7) { _fun0023_ip = 56; continue _fun0023 }
 53:
            var6 = var3;
 56:
            var3 = _closure1_slot30;
            if(!(var3 !== var2)) { _fun0023_ip = 327; continue _fun0023 }
 67:
            var8 = _closure1_slot25;
            var7 = var8.setResultTypes;
            if(!(var4 == var2)) { _fun0023_ip = 87; continue _fun0023 }
 81:
            var3 = _closure1_slot26;
            _fun0023_ip = 98; continue _fun0023;
 87:
            var9 = new Array(1);
            var9[0] = var2;
            var3 = var9;
 98:
            var3 = var7.bind(var8)(var3);
            var8 = _closure1_slot25;
            var7 = var8.setLimit;
            var9 = var4 != var2;
            var3 = 5;
            if(!var9) { _fun0023_ip = 126; continue _fun0023 }
 123:
            var3 = 100;
 126:
            var3 = var7.bind(var8)(var3);
            var7 = _closure1_slot21;
            var3 = var7.getGuildId;
            var8 = var3.bind(var7)();
            var9 = var4 != var8;
            var7 = undefined;
            var3 = undefined;
            if(!var9) { _fun0023_ip = 159; continue _fun0023 }
 156:
            var3 = var8;
 159:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var10 = 19;
            var8 = var8[var10];
            var8 = var9.bind(var7)(var8);
            var8 = var8.AutocompleterResultTypes;
            var8 = var8.USER;
            if(!(var2 === var8)) { _fun0023_ip = 199; continue _fun0023 }
 195:
            if(!(var4 == var3)) { _fun0023_ip = 291; continue _fun0023 }
 199:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var7)(var8);
            var8 = var8.AutocompleterResultTypes;
            var8 = var8.VOICE_CHANNEL;
            if(!(var2 !== var8)) { _fun0023_ip = 264; continue _fun0023 }
 232:
            var10 = _closure1_slot25;
            var9 = var10.setOptions;
            var8 = {};
            var8['userFilters'] = var4;
            var8['voiceChannelGuildFilter'] = var7;
            var7 = true;
            var7 = var9.bind(var10)(var8, var7);
            _fun0023_ip = 327; continue _fun0023;
 264:
            var9 = _closure1_slot25;
            var8 = var9.setOptions;
            var7 = {};
            var7['voiceChannelGuildFilter'] = var4;
            var4 = true;
            var4 = var8.bind(var9)(var7, var4);
            _fun0023_ip = 327; continue _fun0023;
 291:
            var8 = _closure1_slot25;
            var7 = var8.setOptions;
            var4 = {};
            var9 = {};
            var9['guild'] = var3;
            var3 = true;
            var9['friends'] = var3;
            var4['userFilters'] = var9;
            var3 = var7.bind(var8)(var4, var3);
 327:
            _closure1_slot30 = var2;
            var4 = _closure1_slot25;
            var3 = var4.search;
            var8 = _closure1_slot30;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 19;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var7.bind(var1)(var2);
            var2 = var2.AutocompleterResultTypes;
            var7 = var2.USER;
            var2 = undefined;
            if(!(var8 === var7)) { _fun0023_ip = 388; continue _fun0023 }
 385:
            var2 = var6;
 388:
            var2 = var3.bind(var4)(var5, var2);
            return var1;
 396:
            var1 = false;
            return var1;
        }
    };
    var4['QUICKSWITCHER_SEARCH'] = var8;
    var8 = function handleQuickSwitcherSelect(arg1) {
        var1 = arg1;
        var2 = var1.selectedIndex;
        _closure1_slot27 = var2;
        var1 = undefined;
        return var1;
    };
    var4['QUICKSWITCHER_SELECT'] = var8;
    var8 = function handleQuickSwitcherSwitchTo() {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var2 = _closure1_slot28;
            if(var2) { _fun0024_ip = 63; continue _fun0024 }
 10:
            var5 = true;
            _closure1_slot28 = var5;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 26;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var4 = var2.Storage;
            var3 = var4.set;
            var2 = 'seenQSTutorial';
            var2 = var3.bind(var4)(var2, var5);
            return var1;
 63:
            var1 = false;
            return var1;
        }
    };
    var4['QUICKSWITCHER_SWITCH_TO'] = var8;
    var8 = function handleChannelSelect(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var _closure2_slot0 = var4;
            var1 = null;
            if(!(var1 != var4)) { _fun0025_ip = 87; continue _fun0025 }
 20:
            var5 = _closure1_slot35;
            var3 = var5.filter;
            var2 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var3 = var3.bind(var5)(var2);
            _closure1_slot35 = var3;
            var2 = var3.unshift;
            var2 = var2.bind(var3)(var4);
            var2 = _closure1_slot35;
            var3 = var2.length;
            var2 = 4;
            if(!(var3 > var2)) { _fun0025_ip = 83; continue _fun0025 }
 73:
            var1 = _closure1_slot35;
            var1['length'] = var2;
 83:
            var1 = undefined;
            return var1;
 87:
            var1 = false;
            return var1;
        }
    };
    var4['CHANNEL_SELECT'] = var8;
    var8 = var10.prototype;
    var8 = Object.create(var8, {constructor: {value: var10}});
    var18 = var8;
    var16 = var4;
    var4 = new var18[var10](var17, var16, var15);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot36 = var4;
    var5 = 29;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quickswitcher/QuickSwitcherStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['generateResultFromId'] = var2;
    return var1;
})();
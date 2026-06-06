// app/modules/icymi/useICYMIItems.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function createItem(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var7 = arg2;
            var3 = arg3;
            var2 = var7.type;
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var8 = 2;
            var5 = var5[var8];
            var6 = undefined;
            var5 = var9.bind(var6)(var5);
            var5 = var5.ICYMIItemTypes;
            var5 = var5.MESSAGE;
            if(!(var5 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var9.bind(var6)(var5);
            var5 = var5.ICYMIItemTypes;
            var5 = var5.ACTIVITY;
            if(!(var5 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var9.bind(var6)(var5);
            var5 = var5.ICYMIItemTypes;
            var5 = var5.CUSTOM_STATUS;
            if(!(var5 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var9.bind(var6)(var5);
            var5 = var5.ICYMIItemTypes;
            var5 = var5.GUILD_EVENT;
            if(!(var5 !== var2)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var5.bind(var6)(var1);
            var1 = var1.ICYMIItemTypes;
            var1 = var1.RECOMMENDED_GUILDS;
            if(!(var1 !== var2)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var1 = null;
            return var1;
case 9:
            var1 = {};
            var2 = var4.id;
            var1['id'] = var2;
            var2 = global;
            var6 = var2.Date;
            var5 = var6.now;
            var5 = var5.bind(var6)();
            var1['timestamp'] = var5;
            var5 = {};
            var6 = 'recommendedGuilds';
            var5['kind'] = var6;
            var1['data'] = var5;
            var5 = var4.score;
            var1['score'] = var5;
            var6 = var2.JSON;
            var5 = var6.stringify;
            var2 = var4.score_components;
            var2 = var5.bind(var6)(var2);
            var1['debugScore'] = var2;
            var1['unread'] = var3;
            return var1;
case 7:
            var1 = {};
            var2 = var4.id;
            var1['id'] = var2;
            var2 = global;
            var6 = var2.Date;
            var5 = var6.now;
            var5 = var5.bind(var6)();
            var1['timestamp'] = var5;
            var5 = {};
            var6 = 'guildEvent';
            var5['kind'] = var6;
            var6 = var7.event_id;
            var5['eventId'] = var6;
            var1['data'] = var5;
            var5 = var4.score;
            var1['score'] = var5;
            var6 = var2.JSON;
            var5 = var6.stringify;
            var2 = var4.score_components;
            var2 = var5.bind(var6)(var2);
            var1['debugScore'] = var2;
            var1['unread'] = var3;
            return var1;
case 4:
            var1 = {};
            var2 = var4.id;
            var1['id'] = var2;
            var2 = global;
            var6 = var2.Date;
            var5 = var6.now;
            var5 = var5.bind(var6)();
            var1['timestamp'] = var5;
            var5 = {};
            var6 = 'contentInventory';
            var5['kind'] = var6;
            var6 = var7.activity;
            var5['content'] = var6;
            var1['data'] = var5;
            var5 = var4.score;
            var1['score'] = var5;
            var6 = var2.JSON;
            var5 = var6.stringify;
            var2 = var4.score_components;
            var2 = var5.bind(var6)(var2);
            var1['debugScore'] = var2;
            var1['unread'] = var3;
            return var1;
case 2:
            var1 = var7.message;
            var2 = var1.id;
            var1 = var7.message;
            var1 = var1.channel_id;
            if(!(var2 === var1)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var7.threadChannel;
            var1 = null;
            if(!(var1 == var2)) { _fun0001_ip = 13; continue _fun0001 }
case 11:
            var1 = {};
            var2 = var4.id;
            var1['id'] = var2;
            var2 = global;
            var6 = var2.Date;
            var5 = var6.now;
            var5 = var5.bind(var6)();
            var1['timestamp'] = var5;
            var5 = var4.data;
            var5 = var5.channel_type;
            var1['channelType'] = var5;
            var5 = {};
            var6 = 'message';
            var5['kind'] = var6;
            var6 = var7.message;
            var5['message'] = var6;
            var6 = var4.data;
            var6 = var6.has_mention;
            var5['mentioned'] = var6;
            var6 = var4.data;
            var6 = var6.message_context;
            var5['messageContext'] = var6;
            var1['data'] = var5;
            var5 = var4.score;
            var1['score'] = var5;
            var6 = var2.JSON;
            var5 = var6.stringify;
            var2 = var4.score_components;
            var2 = var5.bind(var6)(var2);
            var1['debugScore'] = var2;
            var1['unread'] = var3;
            _fun0001_ip = 14; continue _fun0001;
case 13:
            var2 = {};
            var5 = var4.id;
            var2['id'] = var5;
            var5 = global;
            var8 = var5.Date;
            var6 = var8.now;
            var6 = var6.bind(var8)();
            var2['timestamp'] = var6;
            var6 = var4.data;
            var6 = var6.channel_type;
            var2['channelType'] = var6;
            var6 = {};
            var8 = 'forumThread';
            var6['kind'] = var8;
            var8 = var7.message;
            var6['message'] = var8;
            var7 = var7.threadChannel;
            var6['threadChannel'] = var7;
            var2['data'] = var6;
            var6 = var4.score;
            var2['score'] = var6;
            var6 = var5.JSON;
            var5 = var6.stringify;
            var4 = var4.score_components;
            var4 = var5.bind(var6)(var4);
            var2['debugScore'] = var4;
            var2['unread'] = var3;
            var1 = var2;
case 14:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/useICYMIItems.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useICYMIItems() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 3;
            var2 = var7[var5];
            var17 = undefined;
            var9 = var6.bind(var17)(var2);
            var8 = var9.useStateFromStores;
            var4 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var4;
            var2 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getUnreadDisplayItems;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var8.bind(var9)(var3, var2);
            var3 = var7[var5];
            var10 = var6.bind(var17)(var3);
            var9 = var10.useStateFromStores;
            var8 = new Array(1);
            var8[0] = var4;
            var3 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getReadDisplayItems;
                var1 = var1.bind(var2)();
                return var1;
            };
            var16 = var9.bind(var10)(var8, var3);
            var _closure2_slot0 = var16;
            var3 = var7[var5];
            var10 = var6.bind(var17)(var3);
            var9 = var10.useStateFromStores;
            var8 = new Array(1);
            var8[0] = var4;
            var3 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getNextIndexToHydrate;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var9.bind(var10)(var8, var3);
            var8 = var7[var5];
            var11 = var6.bind(var17)(var8);
            var10 = var11.useStateFromStoresObject;
            var9 = new Array(1);
            var9[0] = var4;
            var8 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getHydratedItems;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var10.bind(var11)(var9, var8);
            var5 = var7[var5];
            var7 = var6.bind(var17)(var5);
            var6 = var7.useStateFromStores;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getMissingItems;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var6.bind(var7)(var5, var4);
            var6 = _closure1_slot3;
            var5 = var6.useEffect;
            var4 = new Array(1);
            var4[0] = var16;
            var1 = function() {
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var3 = var1.bind(var3)();
                var7 = _closure2_slot0;
                var1 = var7.length;
                var1 = var3 + var1;
                var _closure3_slot0 = var1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 4;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.ackGravityItems;
                var6 = var7.map;
                var5 = function(arg1) {
                    var1 = {};
                    var2 = arg1;
                    var2 = var2.id;
                    var1['id'] = var2;
                    var2 = _closure3_slot0;
                    var2 = parseFloat(var2);
                    var3 = var2 - 1;
                    _closure3_slot0 = var3;
                    var1['timestamp'] = var2;
                    return var1;
                };
                var2 = true;
                var2 = var6.bind(var7)(var5, var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var5.bind(var6)(var1, var4);
            var5 = new Array(0);
            var4 = new Array(0);
            var1 = var2.length;
            var13 = 0;
            var1 = var13 < var1;
            var20 = true;
            var12 = null;
            var11 = 2;
            var19 = 0;
            var9 = 0;
            var8 = undefined;
            var7 = undefined;
            var6 = undefined;
            var10 = 0;
            if(!var1) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var10 = var19;
            if(!(!(var10 >= var3))) { _fun0002_ip = 15; continue _fun0002 }
case 17:
            var25 = var2[var9];
            var21 = var19 + 1;
            var1 = var25.id;
            var1 = var14[var1];
            var23 = var8;
            var22 = var6;
            if(var1) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var1 = var25.id;
            var24 = var15[var1];
            var1 = var12 == var24;
            if(!var1) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var27 = var25.type;
            var28 = _closure1_slot0;
            var26 = _closure1_slot2;
            var26 = var26[var11];
            var26 = var28.bind(var17)(var26);
            var26 = var26.ICYMIItemTypes;
            var26 = var26.MESSAGE;
            var1 = var27 === var26;
case 20:
            if(!var1) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var26 = var25.data;
            var26 = var26.message_context;
            var28 = var12 == var26;
            var27 = undefined;
            if(var28) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var27 = var26.reference_message_id;
case 24:
            var1 = var12 != var27;
            var8 = var26;
case 22:
            if(!var1) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var1 = var25.data;
            var1 = var1.message_id;
            var24 = var15[var1];
case 26:
            var23 = var8;
            var22 = var6;
            var7 = var24;
            if(!(var12 != var7)) { _fun0002_ip = 18; continue _fun0002 }
case 28:
            var1 = _closure1_slot5;
            var1 = var1.bind(var17)(var25, var24, var20);
            var23 = var8;
            var7 = var24;
            var22 = var1;
            if(!(var12 != var22)) { _fun0002_ip = 18; continue _fun0002 }
case 29:
            var25 = var5.push;
            var25 = var25.bind(var5)(var1);
            var23 = var8;
            var7 = var24;
            var22 = var1;
case 18:
            var9 = var9 + 1;
            var1 = var2.length;
            var8 = var23;
            var6 = var22;
            var19 = var21;
            var10 = var19;
            if(var9 < var1) { _fun0002_ip = 16; continue _fun0002 }
case 15:
            var1 = var16.length;
            var1 = var13 < var1;
            var9 = false;
            var13 = 0;
            var8 = undefined;
            var7 = undefined;
            var6 = undefined;
            if(!var1) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            if(!(!(var10 >= var3))) { _fun0002_ip = 30; continue _fun0002 }
case 32:
            var22 = var16[var13];
            var10 = var10 + 1;
            var1 = var22.id;
            var1 = var14[var1];
            var20 = var8;
            var19 = var6;
            if(var1) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var1 = var22.id;
            var21 = var15[var1];
            var1 = var12 == var21;
            if(!var1) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var24 = var22.type;
            var25 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var11];
            var23 = var25.bind(var17)(var23);
            var23 = var23.ICYMIItemTypes;
            var23 = var23.MESSAGE;
            var1 = var24 === var23;
case 35:
            if(!var1) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var23 = var22.data;
            var23 = var23.message_context;
            var25 = var12 == var23;
            var24 = undefined;
            if(var25) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var24 = var23.reference_message_id;
case 39:
            var1 = var12 != var24;
            var8 = var23;
case 37:
            if(!var1) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var1 = var22.data;
            var1 = var1.message_id;
            var21 = var15[var1];
case 41:
            var20 = var8;
            var19 = var6;
            var7 = var21;
            if(!(var12 != var7)) { _fun0002_ip = 33; continue _fun0002 }
case 43:
            var1 = _closure1_slot5;
            var1 = var1.bind(var17)(var22, var21, var9);
            var20 = var8;
            var7 = var21;
            var19 = var1;
            if(!(var12 != var19)) { _fun0002_ip = 33; continue _fun0002 }
case 44:
            var22 = var4.push;
            var22 = var22.bind(var4)(var1);
            var20 = var8;
            var7 = var21;
            var19 = var1;
case 33:
            var13 = var13 + 1;
            var1 = var16.length;
            var8 = var20;
            var6 = var19;
            if(var13 < var1) { _fun0002_ip = 31; continue _fun0002 }
case 30:
            var1 = {};
            var1['unreadItems'] = var5;
            var1['readItems'] = var4;
            var2 = var2.length;
            var2 = var3 >= var2;
            var1['allUnreadItemsHydrated'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
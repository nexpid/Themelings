// app/modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot23;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot23;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function GuildChannelMemberCount(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var10 = var1.channel;
            var _closure2_slot0 = var10;
            var6 = var1.withSeparator;
            var1 = undefined;
            if(!(var6 === var1)) { _fun0004_ip = 28; continue _fun0004 }
 26:
            var6 = false;
 28:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 15;
            var4 = var7[var4];
            var8 = var5.bind(var1)(var4);
            var7 = var8.useStateFromStoresObject;
            var4 = _closure1_slot9;
            var5 = new Array(2);
            var5[0] = var4;
            var4 = _closure1_slot6;
            var5[1] = var4;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure1_slot22;
                    var7 = _closure1_slot9;
                    var6 = var7.getProps;
                    var3 = _closure2_slot0;
                    var5 = var3.guild_id;
                    var3 = var3.id;
                    var3 = var6.bind(var7)(var5, var3);
                    var3 = var3.groups;
                    var16 = undefined;
                    var15 = var4.bind(var16)(var3);
                    var4 = var15.bind(var16)();
                    var7 = var4.done;
                    var11 = false;
                    var14 = 0;
                    var12 = var4;
                    var10 = false;
                    var9 = 0;
                    var8 = 0;
                    var4 = false;
                    var6 = false;
                    var5 = 0;
                    var3 = 0;
                    if(var7) { _fun0005_ip = 232; continue _fun0005 }
 89:
                    var22 = var12.value;
                    var7 = var22.count;
                    var7 = var14 !== var7;
                    if(!var7) { _fun0005_ip = 125; continue _fun0005 }
 106:
                    var18 = var22.id;
                    var17 = _closure1_slot17;
                    var17 = var17.UNKNOWN;
                    var7 = var18 !== var17;
 125:
                    var19 = var10;
                    var18 = var9;
                    var17 = var8;
                    if(!var7) { _fun0005_ip = 193; continue _fun0005 }
 137:
                    var7 = var22.count;
                    var20 = var9 + var7;
                    var24 = var22.id;
                    var7 = _closure1_slot17;
                    var23 = var7.OFFLINE;
                    var21 = true;
                    var7 = var8;
                    if(!(var24 !== var23)) { _fun0005_ip = 182; continue _fun0005 }
 170:
                    var22 = var22.count;
                    var7 = var8 + var22;
                    var21 = var10;
 182:
                    var19 = var21;
                    var17 = var7;
                    var11 = true;
                    var18 = var20;
 193:
                    var21 = var15.bind(var16)();
                    var7 = var21.done;
                    var10 = var19;
                    var9 = var18;
                    var8 = var17;
                    var12 = var21;
                    var4 = var11;
                    var6 = var10;
                    var5 = var9;
                    var3 = var8;
                    if(!var7) { _fun0005_ip = 89; continue _fun0005 }
 232:
                    if(var4) { _fun0005_ip = 261; continue _fun0005 }
 235:
                    var4 = _closure1_slot6;
                    var2 = var4.getMemberCount;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var4)(var1);
                    _fun0005_ip = 284; continue _fun0005;
 261:
                    var2 = {};
                    var4 = null;
                    if(!var6) { _fun0005_ip = 271; continue _fun0005 }
 268:
                    var4 = var5;
 271:
                    var2['total'] = var4;
                    var2['online'] = var3;
                    var1 = var2;
 284:
                    return var1;
                }
            };
            var4 = var7.bind(var8)(var5, var4);
            var5 = var4.online;
            var4 = var4.total;
            var9 = _closure1_slot4;
            var8 = var9.useEffect;
            var11 = var10.guild_id;
            var7 = new Array(2);
            var7[0] = var11;
            var10 = var10.id;
            var7[1] = var10;
            var3 = function() {
                var4 = _closure1_slot6;
                var3 = var4.requestCount;
                var1 = _closure2_slot0;
                var2 = var1.guild_id;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var3 = var8.bind(var9)(var3, var7);
            var3 = null;
            if(!(var3 != var4)) { _fun0004_ip = 158; continue _fun0004 }
 148:
            var7 = 500;
            if(!(!(var4 > var7))) { _fun0004_ip = 207; continue _fun0004 }
 158:
            if(!(var3 != var5)) { _fun0004_ip = 172; continue _fun0004 }
 162:
            var3 = 500;
            if(!(!(var5 > var3))) { _fun0004_ip = 207; continue _fun0004 }
 172:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var2 = var7[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.renderMemberCountText;
            var2 = var2.bind(var3)(var5, var4, var6);
            return var2;
 207:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function ChannelLinkedLobbyCoachmark(arg1) {
        var2 = arg1;
        var4 = var2.iconRef;
        var11 = var2.guild;
        var _closure2_slot0 = var11;
        var12 = var2.channel;
        var _closure2_slot1 = var12;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 20;
        var7 = var6[var2];
        var2 = undefined;
        var13 = var5.bind(var2)(var7);
        var10 = var13.useSelectedDismissibleContent;
        var7 = 21;
        var8 = var6[var7];
        var8 = var5.bind(var2)(var8);
        var8 = var8.DismissibleContent;
        var8 = var8.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
        var9 = new Array(1);
        var9[0] = var8;
        var8 = true;
        var10 = var10.bind(var13)(var9, var2, var8);
        var9 = _closure1_slot3;
        var8 = 2;
        var10 = var9.bind(var2)(var10, var8);
        var8 = 0;
        var8 = var10[var8];
        var9 = 1;
        var10 = var10[var9];
        var _closure2_slot2 = var10;
        var7 = var6[var7];
        var7 = var5.bind(var2)(var7);
        var7 = var7.DismissibleContent;
        var7 = var7.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
        var9 = var8 === var7;
        var _closure2_slot3 = var9;
        var8 = _closure1_slot4;
        var7 = var8.useMemo;
        var3 = new Array(4);
        var3[0] = var12;
        var3[1] = var11;
        var3[2] = var10;
        var3[3] = var9;
        var1 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = {};
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 18;
                var5 = var10[var2];
                var6 = undefined;
                var5 = var3.bind(var6)(var5);
                var8 = var5.intl;
                var7 = var8.string;
                var5 = var10[var2];
                var5 = var3.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.YIVr4O;
                var5 = var7.bind(var8)(var5);
                var1['title'] = var5;
                var5 = var10[var2];
                var5 = var3.bind(var6)(var5);
                var7 = var5.intl;
                var5 = var7.format;
                var2 = var10[var2];
                var2 = var3.bind(var6)(var2);
                var2 = var2.t;
                var3 = var2.w8VWRU;
                var2 = {};
                var9 = _closure1_slot1;
                var8 = 22;
                var8 = var10[var8];
                var10 = var9.bind(var6)(var8);
                var9 = var10.getArticleURL;
                var8 = _closure1_slot16;
                var8 = var8.LINKED_LOBBIES;
                var8 = var9.bind(var10)(var8);
                var2['helpdeskArticle'] = var8;
                var2 = var5.bind(var7)(var3, var2);
                var1['description'] = var2;
                var2 = _closure2_slot1;
                var5 = null;
                var7 = var5 == var2;
                var2 = undefined;
                if(var7) { _fun0006_ip = 191; continue _fun0006 }
 181:
                var7 = _closure2_slot1;
                var2 = var7.linkedLobby;
 191:
                var2 = var5 != var2;
                if(!var2) { _fun0006_ip = 202; continue _fun0006 }
 198:
                var2 = _closure2_slot3;
 202:
                var1['visible'] = var2;
                var2 = 'bottom';
                var1['position'] = var2;
                var2 = 15;
                var1['offsetY'] = var2;
                var2 = function onDismiss() {
                    var3 = _closure2_slot2;
                    var1 = _closure1_slot18;
                    var2 = var1.USER_DISMISS;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onDismiss'] = var2;
                var2 = _closure2_slot1;
                var5 = var5 != var2;
                var2 = undefined;
                if(!var5) { _fun0006_ip = 288; continue _fun0006 }
 248:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 23;
                var4 = var7[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.getChannelIconWithGuild;
                var4 = _closure2_slot1;
                var3 = _closure2_slot0;
                var2 = var5.bind(var6)(var4, var3);
 288:
                var1['imgSource'] = var2;
                return var1;
            }
        };
        var3 = var7.bind(var8)(var1, var3);
        var1 = 24;
        var1 = var6[var1];
        var2 = var5.bind(var2)(var1);
        var1 = var2.useCoachmark;
        var1 = var1.bind(var2)(var4, var3);
        var1 = null;
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.THREAD_CHANNEL_TYPES;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ChannelTypes;
    var _closure1_slot15 = var8;
    var8 = var4.HelpdeskArticles;
    var _closure1_slot16 = var8;
    var4 = var4.StatusTypes;
    var _closure1_slot17 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot18 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot19 = var8;
    var8 = var4.Fragment;
    var _closure1_slot20 = var8;
    var4 = var4.jsxs;
    var _closure1_slot21 = var4;
    var4 = var7.memo;
    var2 = function GuildChannelHeader(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var11 = var4.channelId;
            var _closure2_slot0 = var11;
            var3 = var4.screenIndex;
            var _closure2_slot1 = var3;
            var10 = var4.guildId;
            var _closure2_slot2 = var10;
            var2 = var4.pressable;
            var4 = var4.isGuildMemberCountVisible;
            var7 = _closure1_slot4;
            var5 = var7.useRef;
            var14 = null;
            var18 = var5.bind(var7)(var14);
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 15;
            var8 = var12[var7];
            var5 = undefined;
            var17 = var13.bind(var5)(var8);
            var16 = var17.useStateFromStores;
            var8 = _closure1_slot10;
            var15 = new Array(1);
            var15[0] = var8;
            var9 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var16.bind(var17)(var15, var9);
            var _closure2_slot3 = var16;
            var15 = _closure1_slot1;
            var9 = 25;
            var9 = var12[var9];
            var9 = var15.bind(var5)(var9);
            var9 = var9.bind(var5)(var11);
            var _closure2_slot4 = var9;
            var12 = var12[var7];
            var15 = var13.bind(var5)(var12);
            var13 = var15.useStateFromStores;
            var12 = new Array(1);
            var12[0] = var8;
            var8 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot3;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0008_ip = 102; continue _fun0008 }
 13:
                    var1 = _closure2_slot3;
                    var2 = var6 != var1;
                    var1 = undefined;
                    if(!var2) { _fun0008_ip = 100; continue _fun0008 }
 26:
                    var2 = _closure2_slot3;
                    var2 = var2.parent_id;
                    var2 = var6 != var2;
                    var1 = undefined;
                    if(!var2) { _fun0008_ip = 100; continue _fun0008 }
 45:
                    var8 = _closure1_slot8;
                    var7 = var8.has;
                    var3 = _closure2_slot3;
                    var3 = var3.type;
                    var3 = var7.bind(var8)(var3);
                    var1 = undefined;
                    if(!var3) { _fun0008_ip = 100; continue _fun0008 }
 76:
                    var4 = _closure1_slot10;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot3;
                    var2 = var2.parent_id;
                    var1 = var3.bind(var4)(var2);
 100:
                    _fun0008_ip = 142; continue _fun0008;
 102:
                    var4 = _closure1_slot10;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot4;
                    var6 = var6 == var2;
                    var2 = undefined;
                    if(var6) { _fun0008_ip = 137; continue _fun0008 }
 127:
                    var5 = _closure2_slot4;
                    var2 = var5.parentChannelId;
 137:
                    var1 = var3.bind(var4)(var2);
 142:
                    return var1;
                }
            };
            var12 = var13.bind(var15)(var12, var8);
            if(!var2) { _fun0007_ip = 183; continue _fun0007 }
 179:
            var2 = var14 != var16;
 183:
            var8 = {};
            var8['channel'] = var16;
            var8['parentChannel'] = var12;
            var8['guildId'] = var10;
            var8['threadDraft'] = var9;
            var9 = !var2;
            var8['disableArrow'] = var9;
            var4 = !var4;
            var8['disableGuildMemberCount'] = var4;
            var4 = function useChannelName(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = arg1;
                    var16 = var1.channel;
                    var12 = var1.parentChannel;
                    var11 = var1.guildId;
                    var _closure3_slot0 = var11;
                    var14 = var1.threadDraft;
                    var6 = var1.disableArrow;
                    var2 = var1.disableGuildMemberCount;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var13 = 15;
                    var4 = var4[var13];
                    var7 = undefined;
                    var9 = var5.bind(var7)(var4);
                    var8 = var9.useStateFromStores;
                    var4 = _closure1_slot7;
                    var5 = new Array(1);
                    var5[0] = var4;
                    var4 = function() {
                        var2 = _closure1_slot7;
                        var1 = var2.isConnected;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var9 = var8.bind(var9)(var5, var4);
                    var10 = null;
                    if(!(var10 == var16)) { _fun0009_ip = 159; continue _fun0009 }
 102:
                    var15 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var4 = 18;
                    var5 = var17[var4];
                    var5 = var15.bind(var7)(var5);
                    var8 = var5.intl;
                    var5 = var8.string;
                    var4 = var17[var4];
                    var4 = var15.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4.ai6Lbm;
                    var17 = var5.bind(var8)(var4);
                    _fun0009_ip = 200; continue _fun0009;
 159:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 17;
                    var4 = var8[var4];
                    var15 = var5.bind(var7)(var4);
                    var8 = var15.computeChannelName;
                    var5 = _closure1_slot14;
                    var4 = _closure1_slot13;
                    var17 = var8.bind(var15)(var16, var5, var4);
 200:
                    var5 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var18 = 18;
                    var4 = var15[var18];
                    var4 = var5.bind(var7)(var4);
                    var20 = var4.intl;
                    var19 = var20.formatToPlainString;
                    var4 = var15[var18];
                    var4 = var5.bind(var7)(var4);
                    var4 = var4.t;
                    var8 = var4.UbNmGR;
                    var4 = {};
                    var4['channelName'] = var17;
                    var8 = var19.bind(var20)(var8, var4);
                    var4 = 19;
                    var4 = var15[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.shouldNSFWGateGuild;
                    var4 = var4.bind(var5)(var11);
                    if(var4) { _fun0009_ip = 680; continue _fun0009 }
 292:
                    if(!(var10 != var16)) { _fun0009_ip = 437; continue _fun0009 }
 299:
                    var4 = var16.isThread;
                    var15 = var4.bind(var16)();
                    var11 = undefined;
                    var5 = var17;
                    var4 = var8;
                    if(!var15) { _fun0009_ip = 737; continue _fun0009 }
 323:
                    var19 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var20 = var15[var18];
                    var20 = var19.bind(var7)(var20);
                    var21 = var20.intl;
                    var20 = var21.formatToPlainString;
                    var15 = var15[var18];
                    var15 = var19.bind(var7)(var15);
                    var15 = var15.t;
                    var19 = var15.OkzL+f;
                    var15 = {};
                    var15['channelName'] = var17;
                    var15 = var20.bind(var21)(var19, var15);
                    var20 = var10 != var12;
                    var19 = undefined;
                    if(!var20) { _fun0009_ip = 423; continue _fun0009 }
 392:
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var20 = 16;
                    var20 = var22[var20];
                    var21 = var21.bind(var7)(var20);
                    var20 = var21.renderParentChannelSubTitle;
                    var19 = var20.bind(var21)(var12);
 423:
                    var11 = var19;
                    var5 = var17;
                    var4 = var15;
                    _fun0009_ip = 737; continue _fun0009;
 437:
                    if(!(var10 == var14)) { _fun0009_ip = 522; continue _fun0009 }
 441:
                    var19 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var15 = var14[var18];
                    var15 = var19.bind(var7)(var15);
                    var17 = var15.intl;
                    var15 = var17.string;
                    var14 = var14[var18];
                    var14 = var19.bind(var7)(var14);
                    var14 = var14.t;
                    if(var9) { _fun0009_ip = 498; continue _fun0009 }
 485:
                    var9 = var14.ZTNur6;
                    var9 = var15.bind(var17)(var9);
                    _fun0009_ip = 509; continue _fun0009;
 498:
                    var14 = var14.ai6Lbm;
                    var9 = var15.bind(var17)(var14);
 509:
                    var5 = var9;
                    var11 = undefined;
                    var4 = var8;
                    _fun0009_ip = 737; continue _fun0009;
 522:
                    var15 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var14 = var9[var18];
                    var14 = var15.bind(var7)(var14);
                    var19 = var14.intl;
                    var17 = var19.string;
                    var14 = var9[var18];
                    var14 = var15.bind(var7)(var14);
                    var14 = var14.t;
                    var14 = var14.4WNcpq;
                    var14 = var17.bind(var19)(var14);
                    var17 = var9[var18];
                    var17 = var15.bind(var7)(var17);
                    var19 = var17.intl;
                    var17 = var19.formatToPlainString;
                    var9 = var9[var18];
                    var9 = var15.bind(var7)(var9);
                    var9 = var9.t;
                    var15 = var9.OkzL+f;
                    var9 = {};
                    var9['channelName'] = var14;
                    var9 = var17.bind(var19)(var15, var9);
                    var15 = var10 != var12;
                    var11 = undefined;
                    var5 = var14;
                    var4 = var9;
                    if(!var15) { _fun0009_ip = 737; continue _fun0009 }
 641:
                    var17 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var15 = 16;
                    var15 = var19[var15];
                    var17 = var17.bind(var7)(var15);
                    var15 = var17.renderParentChannelSubTitle;
                    var11 = var15.bind(var17)(var12);
                    var5 = var14;
                    var4 = var9;
                    _fun0009_ip = 737; continue _fun0009;
 680:
                    var17 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var14 = var9[var18];
                    var14 = var17.bind(var7)(var14);
                    var15 = var14.intl;
                    var14 = var15.string;
                    var9 = var9[var18];
                    var9 = var17.bind(var7)(var9);
                    var9 = var9.t;
                    var9 = var9.HbPHt7;
                    var5 = var14.bind(var15)(var9);
                    var11 = undefined;
                    var4 = var8;
 737:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var13];
                    var13 = var9.bind(var7)(var8);
                    var9 = var13.useStateFromStores;
                    var14 = _closure1_slot11;
                    var8 = new Array(1);
                    var8[0] = var14;
                    var3 = function() {
                        var3 = _closure1_slot11;
                        var2 = var3.getMemberCount;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var8 = var9.bind(var13)(var8, var3);
                    var9 = var10 != var8;
                    var3 = 0;
                    if(!var9) { _fun0009_ip = 794; continue _fun0009 }
 791:
                    var3 = var8;
 794:
                    var13 = !var2;
                    if(!var13) { _fun0009_ip = 810; continue _fun0009 }
 800:
                    var2 = 500;
                    var13 = var3 < var2;
 810:
                    if(!var13) { _fun0009_ip = 817; continue _fun0009 }
 813:
                    var13 = var10 != var16;
 817:
                    if(!var13) { _fun0009_ip = 833; continue _fun0009 }
 820:
                    var2 = var16.isThread;
                    var2 = var2.bind(var16)();
                    var13 = !var2;
 833:
                    if(!var13) { _fun0009_ip = 882; continue _fun0009 }
 836:
                    var2 = _closure1_slot15;
                    var3 = var2.GUILD_DIRECTORY;
                    var8 = new Array(2);
                    var8[0] = var3;
                    var2 = var2.GUILD_FORUM;
                    var8[1] = var2;
                    var3 = var8.includes;
                    var2 = var16.type;
                    var2 = var3.bind(var8)(var2);
                    var13 = !var2;
 882:
                    var8 = _closure1_slot21;
                    var3 = _closure1_slot20;
                    var2 = {};
                    if(!var13) { _fun0009_ip = 924; continue _fun0009 }
 895:
                    var15 = _closure1_slot19;
                    var14 = _closure1_slot24;
                    var9 = {};
                    var9['channel'] = var16;
                    var16 = var10 != var11;
                    var9['withSeparator'] = var16;
                    var13 = var15.bind(var7)(var14, var9);
 924:
                    var9 = new Array(2);
                    var9[0] = var13;
                    var10 = var10 != var12;
                    if(!var10) { _fun0009_ip = 942; continue _fun0009 }
 939:
                    var10 = var11;
 942:
                    var9[1] = var10;
                    var2['children'] = var9;
                    var24 = var8.bind(var7)(var3, var2);
                    var2 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 16;
                    var1 = var8[var1];
                    var2 = var2.bind(var7)(var1);
                    var1 = var2.renderChannelTitle;
                    var27 = var2;
                    var26 = var5;
                    var25 = var4;
                    var23 = var6;
                    var1 = var27[var1](var26, var25, var24, var23, var22);
                    return var1;
                }
            };
            var8 = var4.bind(var5)(var8);
            var10 = _closure1_slot4;
            var9 = var10.useCallback;
            var4 = new Array(2);
            var4[0] = var11;
            var4[1] = var3;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.navigateToChannelDetails;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = 'guild-channel-header-title';
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var10 = var9.bind(var10)(var3, var4);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var7 = var4.bind(var5)(var3);
            var4 = var7.useStateFromStores;
            var9 = _closure1_slot12;
            var3 = new Array(1);
            var3[0] = var9;
            var1 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getGuild;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var4.bind(var7)(var3, var1);
            var1 = var14 != var16;
            var12 = null;
            if(!var1) { _fun0007_ip = 347; continue _fun0007 }
 315:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 16;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.renderChannelIcon;
            var12 = var1.bind(var3)(var16, var17);
 347:
            var4 = _closure1_slot21;
            var3 = _closure1_slot20;
            var1 = {};
            var9 = _closure1_slot5;
            var7 = {};
            var7['ref'] = var18;
            var11 = {};
            var13 = 8;
            var11['marginRight'] = var13;
            var7['style'] = var11;
            var11 = new Array(2);
            var11[0] = var12;
            var13 = var14 != var17;
            var12 = null;
            if(!var13) { _fun0007_ip = 451; continue _fun0007 }
 398:
            var15 = var14 == var16;
            var13 = undefined;
            if(var15) { _fun0007_ip = 413; continue _fun0007 }
 407:
            var13 = var16.linkedLobby;
 413:
            var13 = var14 != var13;
            var12 = null;
            if(!var13) { _fun0007_ip = 451; continue _fun0007 }
 422:
            var15 = _closure1_slot19;
            var14 = _closure1_slot25;
            var13 = {};
            var13['iconRef'] = var18;
            var13['guild'] = var17;
            var13['channel'] = var16;
            var12 = var15.bind(var5)(var14, var13);
 451:
            var11[1] = var12;
            var7['children'] = var11;
            var9 = var4.bind(var5)(var9, var7);
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var1['children'] = var7;
            var9 = var4.bind(var5)(var3, var1);
            var1 = var9;
            if(!var2) { _fun0007_ip = 593; continue _fun0007 }
 493:
            var4 = _closure1_slot19;
            var3 = _closure1_slot20;
            var2 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 16;
            var6 = var14[var6];
            var8 = var13.bind(var5)(var6);
            var7 = var8.renderTitleWrapper;
            var6 = 18;
            var11 = var14[var6];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var6 = var14[var6];
            var6 = var13.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.x87QCg;
            var6 = var11.bind(var12)(var6);
            var6 = var7.bind(var8)(var9, var10, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 593:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
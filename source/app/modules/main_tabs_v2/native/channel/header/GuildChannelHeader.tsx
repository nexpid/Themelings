// app/modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot23;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot23;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
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
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function GuildChannelMemberCount(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var10 = var1.channel;
            var _closure2_slot0 = var10;
            var6 = var1.withSeparator;
            var1 = undefined;
            if(!(var6 === var1)) { _fun0004_ip = 34; continue _fun0004 }
case 36:
            var6 = false;
case 34:
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
case 0:
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
                    if(var7) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var22 = var12.value;
                    var7 = var22.count;
                    var7 = var14 !== var7;
                    if(!var7) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var18 = var22.id;
                    var17 = _closure1_slot17;
                    var17 = var17.UNKNOWN;
                    var7 = var18 !== var17;
case 39:
                    var19 = var10;
                    var18 = var9;
                    var17 = var8;
                    if(!var7) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var7 = var22.count;
                    var20 = var9 + var7;
                    var24 = var22.id;
                    var7 = _closure1_slot17;
                    var23 = var7.OFFLINE;
                    var21 = true;
                    var7 = var8;
                    if(!(var24 !== var23)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                    var22 = var22.count;
                    var7 = var8 + var22;
                    var21 = var10;
case 43:
                    var19 = var21;
                    var17 = var7;
                    var11 = true;
                    var18 = var20;
case 41:
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
                    if(!var7) { _fun0005_ip = 38; continue _fun0005 }
case 37:
                    if(var4) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var4 = _closure1_slot6;
                    var2 = var4.getMemberCount;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var4)(var1);
                    _fun0005_ip = 47; continue _fun0005;
case 45:
                    var2 = {};
                    var4 = null;
                    if(!var6) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                    var4 = var5;
case 48:
                    var2['total'] = var4;
                    var2['online'] = var3;
                    var1 = var2;
case 47:
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
            if(!(var3 != var4)) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var7 = 500;
            if(!(!(var4 > var7))) { _fun0004_ip = 52; continue _fun0004 }
case 50:
            if(!(var3 != var5)) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var3 = 500;
            if(!(!(var5 > var3))) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var2 = var7[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.renderMemberCountText;
            var2 = var2.bind(var3)(var5, var4, var6);
            return var2;
case 52:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function computeVisibleChannelName(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var8 = var2.channel;
            var7 = var2.guildId;
            var1 = var2.showCreateThread;
            var3 = var2.isConnected;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 17;
            var4 = var6[var4];
            var6 = undefined;
            var5 = var5.bind(var6)(var4);
            var4 = var5.shouldNSFWGateGuild;
            var4 = var4.bind(var5)(var7);
            if(var4) { _fun0006_ip = 55; continue _fun0006 }
case 30:
            if(var1) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var1 = null;
            if(!(var1 != var8)) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 19;
            var1 = var5[var1];
            var7 = var4.bind(var6)(var1);
            var5 = var7.computeChannelName;
            var4 = _closure1_slot14;
            var1 = _closure1_slot13;
            var1 = var5.bind(var7)(var8, var4, var1);
            _fun0006_ip = 60; continue _fun0006;
case 58:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 18;
            var5 = var9[var4];
            var5 = var8.bind(var6)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            if(var3) { _fun0006_ip = 43; continue _fun0006 }
case 17:
            var3 = var4.ZTNur7;
            var3 = var5.bind(var7)(var3);
            _fun0006_ip = 41; continue _fun0006;
case 43:
            var4 = var4.ai6Lbr;
            var3 = var5.bind(var7)(var4);
case 41:
            var1 = var3;
case 60:
            _fun0006_ip = 61; continue _fun0006;
case 56:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 18;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3["4WNcpu"];
            var1 = var4.bind(var5)(var3);
case 61:
            _fun0006_ip = 62; continue _fun0006;
case 55:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 18;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.HbPHt1;
            var1 = var3.bind(var4)(var2);
case 62:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function ChannelLinkedLobbyCoachmark(arg1) {
        var2 = arg1;
        var4 = var2.iconRef;
        var11 = var2.guild;
        var _closure2_slot0 = var11;
        var12 = var2.channel;
        var _closure2_slot1 = var12;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 21;
        var7 = var6[var2];
        var2 = undefined;
        var13 = var5.bind(var2)(var7);
        var10 = var13.useSelectedDismissibleContent;
        var7 = 22;
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
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
                var5 = var5.YIVr4B;
                var5 = var7.bind(var8)(var5);
                var1['title'] = var5;
                var5 = var10[var2];
                var5 = var3.bind(var6)(var5);
                var7 = var5.intl;
                var5 = var7.format;
                var2 = var10[var2];
                var2 = var3.bind(var6)(var2);
                var2 = var2.t;
                var3 = var2.w8VWRT;
                var2 = {};
                var9 = _closure1_slot1;
                var8 = 23;
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
                if(var7) { _fun0007_ip = 63; continue _fun0007 }
case 64:
                var7 = _closure2_slot1;
                var2 = var7.linkedLobby;
case 63:
                var2 = var5 != var2;
                if(!var2) { _fun0007_ip = 65; continue _fun0007 }
case 56:
                var2 = _closure2_slot3;
case 65:
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
                if(!var5) { _fun0007_ip = 66; continue _fun0007 }
case 67:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 24;
                var4 = var7[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.getChannelIconWithGuild;
                var4 = _closure2_slot1;
                var3 = _closure2_slot0;
                var2 = var5.bind(var6)(var4, var3);
case 66:
                var1['imgSource'] = var2;
                return var1;
            }
        };
        var3 = var7.bind(var8)(var1, var3);
        var1 = 25;
        var1 = var6[var1];
        var2 = var5.bind(var2)(var1);
        var1 = var2.useCoachmark;
        var1 = var1.bind(var2)(var4, var3);
        var1 = null;
        return var1;
    };
    var _closure1_slot26 = var1;
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
    var4 = metroImportAll;
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
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var17 = var3.channelId;
            var _closure2_slot0 = var17;
            var16 = var3.screenIndex;
            var _closure2_slot1 = var16;
            var12 = var3.guildId;
            var _closure2_slot2 = var12;
            var2 = var3.pressable;
            var1 = var3.isGuildMemberCountVisible;
            var11 = var3.showCreateThread;
            var _closure2_slot3 = var11;
            var19 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 26;
            var3 = var9[var3];
            var4 = undefined;
            var7 = var19.bind(var4)(var3);
            var3 = 'GuildChannelHeader';
            var14 = var7.bind(var4)(var3);
            var8 = _closure1_slot4;
            var7 = var8.useRef;
            var3 = null;
            var23 = var7.bind(var8)(var3);
            var10 = _closure1_slot0;
            var15 = 15;
            var7 = var9[var15];
            var20 = var10.bind(var4)(var7);
            var18 = var20.useStateFromStores;
            var8 = _closure1_slot10;
            var13 = new Array(1);
            var13[0] = var8;
            var7 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var18.bind(var20)(var13, var7);
            var _closure2_slot4 = var13;
            var7 = var9[var15];
            var21 = var10.bind(var4)(var7);
            var20 = var21.useStateFromStores;
            var7 = _closure1_slot7;
            var18 = new Array(1);
            var18[0] = var7;
            var7 = function() {
                var2 = _closure1_slot7;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var20.bind(var21)(var18, var7);
            var18 = 27;
            var18 = var9[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.bind(var4)(var17);
            var _closure2_slot5 = var18;
            var9 = var9[var15];
            var18 = var10.bind(var4)(var9);
            var10 = var18.useStateFromStores;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0009_ip = 68; continue _fun0009 }
case 29:
                    var1 = _closure2_slot4;
                    var2 = var6 != var1;
                    var1 = undefined;
                    if(!var2) { _fun0009_ip = 70; continue _fun0009 }
case 33:
                    var2 = _closure2_slot4;
                    var2 = var2.parent_id;
                    var2 = var6 != var2;
                    var1 = undefined;
                    if(!var2) { _fun0009_ip = 70; continue _fun0009 }
case 71:
                    var8 = _closure1_slot8;
                    var7 = var8.has;
                    var3 = _closure2_slot4;
                    var3 = var3.type;
                    var3 = var7.bind(var8)(var3);
                    var1 = undefined;
                    if(!var3) { _fun0009_ip = 70; continue _fun0009 }
case 72:
                    var4 = _closure1_slot10;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot4;
                    var2 = var2.parent_id;
                    var1 = var3.bind(var4)(var2);
case 70:
                    _fun0009_ip = 73; continue _fun0009;
case 68:
                    var4 = _closure1_slot10;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot5;
                    var6 = var6 == var2;
                    var2 = undefined;
                    if(var6) { _fun0009_ip = 74; continue _fun0009 }
case 75:
                    var5 = _closure2_slot5;
                    var2 = var5.parentChannelId;
case 74:
                    var1 = var3.bind(var4)(var2);
case 73:
                    return var1;
                }
            };
            var9 = var10.bind(var18)(var9, var8);
            if(!var2) { _fun0008_ip = 76; continue _fun0008 }
case 55:
            var2 = var3 != var13;
case 76:
            if(!var2) { _fun0008_ip = 24; continue _fun0008 }
case 77:
            var2 = !var11;
case 24:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var15];
            var18 = var10.bind(var4)(var8);
            var15 = var18.useStateFromStores;
            var8 = _closure1_slot12;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getGuild;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var22 = var15.bind(var18)(var10, var8);
            var8 = var3 == var13;
            var19 = null;
            if(var8) { _fun0008_ip = 78; continue _fun0008 }
case 79:
            var19 = null;
            if(var11) { _fun0008_ip = 78; continue _fun0008 }
case 27:
            var10 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 16;
            var8 = var15[var8];
            var10 = var10.bind(var4)(var8);
            var8 = var10.renderChannelIcon;
            var19 = var8.bind(var10)(var13, var22);
case 78:
            var8 = {};
            var8['channel'] = var13;
            var8['parentChannel'] = var9;
            var8['guildId'] = var12;
            var9 = !var2;
            var8['disableArrow'] = var9;
            var1 = !var1;
            var8['disableGuildMemberCount'] = var1;
            var8['showCreateThread'] = var11;
            var1 = null;
            if(!var14) { _fun0008_ip = 80; continue _fun0008 }
case 81:
            var1 = var19;
case 80:
            var8['icon'] = var1;
            var1 = function useChannelName(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = arg1;
                    var21 = var4.channel;
                    var17 = var4.parentChannel;
                    var11 = var4.guildId;
                    var _closure3_slot0 = var11;
                    var12 = var4.disableArrow;
                    var2 = var4.disableGuildMemberCount;
                    var1 = var4.showCreateThread;
                    var10 = var4.icon;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var13 = 15;
                    var4 = var7[var13];
                    var8 = undefined;
                    var15 = var5.bind(var8)(var4);
                    var14 = var15.useStateFromStores;
                    var4 = _closure1_slot7;
                    var9 = new Array(1);
                    var9[0] = var4;
                    var4 = function() {
                        var2 = _closure1_slot7;
                        var1 = var2.isConnected;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var14 = var14.bind(var15)(var9, var4);
                    var9 = _closure1_slot25;
                    var4 = {};
                    var4['channel'] = var21;
                    var4['guildId'] = var11;
                    var4['showCreateThread'] = var1;
                    var4['isConnected'] = var14;
                    var9 = var9.bind(var8)(var4);
                    var4 = 17;
                    var4 = var7[var4];
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.shouldNSFWGateGuild;
                    var4 = var4.bind(var5)(var11);
                    var5 = !var4;
                    if(!var5) { _fun0010_ip = 82; continue _fun0010 }
case 83:
                    var4 = var1;
                    if(var4) { _fun0010_ip = 63; continue _fun0010 }
case 84:
                    var7 = null;
                    var14 = var7 == var21;
                    var7 = undefined;
                    if(var14) { _fun0010_ip = 85; continue _fun0010 }
case 86:
                    var14 = var21.isThread;
                    var7 = var14.bind(var21)();
case 85:
                    var4 = var7;
case 63:
                    var5 = var4;
case 82:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var16 = 18;
                    var4 = var4[var16];
                    var4 = var7.bind(var8)(var4);
                    var15 = var4.intl;
                    var14 = var15.formatToPlainString;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var16];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.t;
                    if(var5) { _fun0010_ip = 87; continue _fun0010 }
case 18:
                    var7 = var4.UbNmGc;
                    _fun0010_ip = 88; continue _fun0010;
case 87:
                    var7 = var4.OkzL+Q;
case 88:
                    var4 = {};
                    var4['channelName'] = var9;
                    var14 = var14.bind(var15)(var7, var4);
                    var4 = undefined;
                    if(!var5) { _fun0010_ip = 8; continue _fun0010 }
case 89:
                    var5 = null;
                    var5 = var5 != var17;
                    var4 = undefined;
                    if(!var5) { _fun0010_ip = 8; continue _fun0010 }
case 90:
                    var7 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var5 = 16;
                    var5 = var15[var5];
                    var7 = var7.bind(var8)(var5);
                    var5 = var7.renderParentChannelSubTitle;
                    var4 = var5.bind(var7)(var17);
case 8:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var13];
                    var13 = var7.bind(var8)(var5);
                    var7 = var13.useStateFromStores;
                    var15 = _closure1_slot11;
                    var5 = new Array(1);
                    var5[0] = var15;
                    var3 = function() {
                        var3 = _closure1_slot11;
                        var2 = var3.getMemberCount;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var7.bind(var13)(var5, var3);
                    var3 = null;
                    var13 = var3 != var5;
                    var7 = 0;
                    if(!var13) { _fun0010_ip = 91; continue _fun0010 }
case 92:
                    var7 = var5;
case 91:
                    var5 = !var2;
                    if(!var5) { _fun0010_ip = 93; continue _fun0010 }
case 94:
                    var2 = 500;
                    var5 = var7 < var2;
case 93:
                    if(!var5) { _fun0010_ip = 95; continue _fun0010 }
case 96:
                    var5 = var3 != var21;
case 95:
                    if(!var5) { _fun0010_ip = 97; continue _fun0010 }
case 98:
                    var2 = var21.isThread;
                    var2 = var2.bind(var21)();
                    var5 = !var2;
case 97:
                    if(!var5) { _fun0010_ip = 99; continue _fun0010 }
case 100:
                    var2 = _closure1_slot15;
                    var7 = var2.GUILD_DIRECTORY;
                    var13 = new Array(2);
                    var13[0] = var7;
                    var2 = var2.GUILD_FORUM;
                    var13[1] = var2;
                    var7 = var13.includes;
                    var2 = var21.type;
                    var2 = var7.bind(var13)(var2);
                    var5 = !var2;
case 99:
                    if(!var5) { _fun0010_ip = 101; continue _fun0010 }
case 102:
                    var5 = !var1;
case 101:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var16 = 20;
                    var1 = var1[var16];
                    var7 = var2.bind(var8)(var1);
                    var2 = var7.useShouldChannelShowLoadingIndicator;
                    var13 = var3 == var21;
                    var1 = undefined;
                    if(var13) { _fun0010_ip = 103; continue _fun0010 }
case 104:
                    var1 = var21.id;
case 103:
                    var1 = var2.bind(var7)(var1);
                    var2 = var3 != var21;
                    if(!var2) { _fun0010_ip = 105; continue _fun0010 }
case 106:
                    var7 = var21.isForumLikeChannel;
                    var2 = var7.bind(var21)();
case 105:
                    var2 = !var2;
                    if(!var2) { _fun0010_ip = 107; continue _fun0010 }
case 108:
                    var2 = var1;
case 107:
                    if(var2) { _fun0010_ip = 109; continue _fun0010 }
case 110:
                    var13 = _closure1_slot21;
                    var7 = _closure1_slot20;
                    var1 = {};
                    var18 = var5;
                    if(!var5) { _fun0010_ip = 111; continue _fun0010 }
case 112:
                    var20 = _closure1_slot19;
                    var19 = _closure1_slot24;
                    var15 = {};
                    var15['channel'] = var21;
                    var21 = var3 != var4;
                    var15['withSeparator'] = var21;
                    var18 = var20.bind(var8)(var19, var15);
case 111:
                    var15 = new Array(2);
                    var15[0] = var18;
                    var17 = var3 != var17;
                    if(!var17) { _fun0010_ip = 113; continue _fun0010 }
case 114:
                    var17 = var4;
case 113:
                    var15[1] = var17;
                    var1['children'] = var15;
                    var13 = var13.bind(var8)(var7, var1);
                    _fun0010_ip = 115; continue _fun0010;
case 109:
                    var15 = _closure1_slot19;
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var16];
                    var1 = var7.bind(var8)(var1);
                    var7 = var1.ChannelHeaderLoadingIndicator;
                    var1 = {};
                    var13 = var15.bind(var8)(var7, var1);
case 115:
                    var1 = {};
                    var7 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var6 = 16;
                    var6 = var15[var6];
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.renderChannelTitle;
                    var6 = {};
                    var6['accessibleTitle'] = var14;
                    var6['subtitle'] = var13;
                    var6['disableArrow'] = var12;
                    var6['guildId'] = var11;
                    var6['icon'] = var10;
                    var6 = var7.bind(var8)(var9, var6);
                    var1['node'] = var6;
                    if(var2) { _fun0010_ip = 116; continue _fun0010 }
case 117:
                    var2 = var5;
case 116:
                    if(var2) { _fun0010_ip = 118; continue _fun0010 }
case 119:
                    var2 = var3 != var4;
case 118:
                    var1['hasSubtitle'] = var2;
                    return var1;
                }
            };
            var1 = var1.bind(var4)(var8);
            var15 = var1.node;
            var1 = var1.hasSubtitle;
            var10 = _closure1_slot4;
            var9 = var10.useCallback;
            var8 = new Array(2);
            var8[0] = var17;
            var8[1] = var16;
            var6 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 28;
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
            var10 = var9.bind(var10)(var6, var8);
            var9 = _closure1_slot21;
            var8 = _closure1_slot20;
            var6 = {};
            if(var14) { _fun0008_ip = 120; continue _fun0008 }
case 121:
            var17 = _closure1_slot21;
            var16 = _closure1_slot5;
            var14 = {};
            var14['ref'] = var23;
            var18 = {};
            var20 = 8;
            var18['marginRight'] = var20;
            var14['style'] = var18;
            var18 = new Array(2);
            var18[0] = var19;
            var20 = var3 != var22;
            var19 = null;
            if(!var20) { _fun0008_ip = 122; continue _fun0008 }
case 123:
            var21 = var3 == var13;
            var20 = undefined;
            if(var21) { _fun0008_ip = 124; continue _fun0008 }
case 125:
            var20 = var13.linkedLobby;
case 124:
            var20 = var3 != var20;
            var19 = null;
            if(!var20) { _fun0008_ip = 122; continue _fun0008 }
case 108:
            var24 = _closure1_slot19;
            var21 = _closure1_slot26;
            var20 = {};
            var20['iconRef'] = var23;
            var20['guild'] = var22;
            var20['channel'] = var13;
            var19 = var24.bind(var4)(var21, var20);
case 122:
            var18[1] = var19;
            var14['children'] = var18;
            var16 = var17.bind(var4)(var16, var14);
            _fun0008_ip = 126; continue _fun0008;
case 120:
            var17 = var3 != var22;
            var14 = null;
            if(!var17) { _fun0008_ip = 127; continue _fun0008 }
case 128:
            var18 = var3 == var13;
            var17 = undefined;
            if(var18) { _fun0008_ip = 113; continue _fun0008 }
case 129:
            var17 = var13.linkedLobby;
case 113:
            var17 = var3 != var17;
            var14 = null;
            if(!var17) { _fun0008_ip = 127; continue _fun0008 }
case 130:
            var19 = _closure1_slot19;
            var18 = _closure1_slot5;
            var17 = {};
            var17['ref'] = var23;
            var21 = _closure1_slot26;
            var20 = {};
            var20['iconRef'] = var23;
            var20['guild'] = var22;
            var20['channel'] = var13;
            var20 = var19.bind(var4)(var21, var20);
            var17['children'] = var20;
            var14 = var19.bind(var4)(var18, var17);
case 127:
            var16 = var14;
case 126:
            var14 = new Array(2);
            var14[0] = var16;
            var14[1] = var15;
            var6['children'] = var14;
            var9 = var9.bind(var4)(var8, var6);
            var3 = var3 != var13;
            var8 = undefined;
            if(!var3) { _fun0008_ip = 131; continue _fun0008 }
case 132:
            var6 = _closure1_slot25;
            var3 = {};
            var3['channel'] = var13;
            var3['guildId'] = var12;
            var3['showCreateThread'] = var11;
            var3['isConnected'] = var7;
            var12 = var6.bind(var4)(var3);
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 18;
            var6 = var13[var3];
            var6 = var11.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var3 = var13[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.x87QCk;
            var11 = var6.bind(var7)(var3);
            var3 = global;
            var3 = var3.HermesInternal;
            var7 = var3.concat;
            var6 = '';
            var3 = ', ';
            var8 = var7.bind(var6)(var12, var3, var11);
case 131:
            if(var2) { _fun0008_ip = 133; continue _fun0008 }
case 134:
            return var9;
case 133:
            var7 = 24;
            if(!var1) { _fun0008_ip = 135; continue _fun0008 }
case 136:
            var7 = 44;
case 135:
            var3 = _closure1_slot19;
            var2 = _closure1_slot20;
            var1 = {};
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 16;
            var5 = var11[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.renderTitleWrapper;
            var30 = var6;
            var29 = var9;
            var28 = var10;
            var27 = var8;
            var26 = var7;
            var5 = var30[var5](var29, var28, var27, var26, var25);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
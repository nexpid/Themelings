// app/modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowData.tsx
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot35;
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
            var7 = _closure1_slot35;
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
    var _closure1_slot34 = var1;
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
    var _closure1_slot35 = var1;
    var1 = function countActiveChannels(arg1) {
        var3 = arg1;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var3 = var1.kind;
                var1 = 'active-channel';
                var1 = var1 === var3;
                if(var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var2 = 'voice';
                var1 = var2 === var3;
case 36:
                if(var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                var2 = 'live-guild-stage';
                var1 = var2 === var3;
case 38:
                if(var1) { _fun0004_ip = 4; continue _fun0004 }
case 40:
                var2 = 'unified-vc';
                var1 = var2 === var3;
case 4:
                if(var1) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                var2 = 'embedded-activity';
                var1 = var2 === var3;
case 41:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = var1.length;
        return var1;
    };
    var _closure1_slot36 = var1;
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
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
    var7 = var6[var4];
    var7 = var5.bind(var1)(var7);
    var9 = var7.eventScheduledToStartWithin;
    var _closure1_slot8 = var9;
    var9 = var7.isEventUpcoming;
    var _closure1_slot9 = var9;
    var7 = var7.isGuildScheduledEventActive;
    var _closure1_slot10 = var7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 10;
    var7 = var6[var4];
    var9 = var8.bind(var1)(var7);
    var _closure1_slot16 = var9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MemberListRowTypes;
    var _closure1_slot17 = var4;
    var4 = 11;
    var4 = var6[var4];
    var10 = var8.bind(var1)(var4);
    var _closure1_slot18 = var10;
    var4 = 12;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot19 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot20 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot21 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot22 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot23 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot24 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot25 = var4;
    var4 = 18;
    var4 = var6[var4];
    var7 = var8.bind(var1)(var4);
    var _closure1_slot26 = var7;
    var4 = 19;
    var4 = var6[var4];
    var8 = var8.bind(var1)(var4);
    var _closure1_slot27 = var8;
    var4 = 20;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HappeningNowItem;
    var _closure1_slot28 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.ActivityFlags;
    var _closure1_slot29 = var11;
    var11 = var4.GuildFeatures;
    var _closure1_slot30 = var11;
    var11 = var4.Permissions;
    var _closure1_slot31 = var11;
    var4 = var4.StatusTypes;
    var _closure1_slot32 = var4;
    var4 = new Array(4);
    var4[0] = var10;
    var4[1] = var9;
    var4[2] = var8;
    var4[3] = var7;
    var _closure1_slot33 = var4;
    var4 = 41;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useHappeningNowData(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var19 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var19;
            var10 = var1.guildId;
            var _closure2_slot1 = var10;
            var18 = var1.withoutUserCards;
            var _closure2_slot2 = var18;
            var2 = var1.showMultipleActivitiesPerChannel;
            var5 = undefined;
            var22 = var5 !== var2;
            if(!var22) { _fun0005_ip = 5; continue _fun0005 }
case 2:
            var22 = var2;
case 5:
            var _closure2_slot3 = var22;
            var9 = var1.isFocused;
            var _closure2_slot4 = var9;
            var4 = var19.has;
            var2 = _closure1_slot28;
            var3 = var2.LIVE_GUILD_STAGE;
            var28 = var4.bind(var19)(var3);
            var _closure2_slot5 = var28;
            var4 = var19.has;
            var3 = var2.EMBEDDED_ACTIVITY;
            var23 = var4.bind(var19)(var3);
            var _closure2_slot6 = var23;
            var4 = var19.has;
            var3 = var2.STREAMS;
            var24 = var4.bind(var19)(var3);
            var _closure2_slot7 = var24;
            var4 = var19.has;
            var3 = var2.USER_CUSTOM_STATUS;
            var21 = var4.bind(var19)(var3);
            var _closure2_slot8 = var21;
            var4 = var19.has;
            var3 = var2.ACTIVITIES;
            var20 = var4.bind(var19)(var3);
            var _closure2_slot9 = var20;
            var3 = var19.has;
            var2 = var2.USER;
            var25 = var3.bind(var19)(var2);
            var _closure2_slot10 = var25;
            var13 = _closure1_slot4;
            var4 = var13.useEffect;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchUserAffinitiesV2;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2 = new Array(0);
            var2 = var4.bind(var13)(var3, var2);
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var14 = 23;
            var2 = var7[var14];
            var11 = var4.bind(var5)(var2);
            var8 = var11.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot6;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var8.bind(var11)(var3, var2);
            var _closure2_slot11 = var3;
            var2 = var7[var14];
            var12 = var4.bind(var5)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot15;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                var2 = _closure1_slot15;
                var1 = var2.getSessionId;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var2 = var11.bind(var12)(var8, var2);
            var _closure2_slot12 = var2;
            var12 = var13.useCallback;
            var11 = new Array(5);
            var11[0] = var19;
            var11[1] = var2;
            var11[2] = var10;
            var11[3] = var9;
            var11[4] = var3;
            var8 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var6 = null;
                    if(!(var6 != var2)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    var5 = _closure2_slot0;
                    var4 = var5.has;
                    var3 = _closure1_slot28;
                    var3 = var3.ACTIVE_CHANNEL;
                    var3 = var4.bind(var5)(var3);
                    if(!var3) { _fun0006_ip = 43; continue _fun0006 }
case 5:
                    var3 = _closure2_slot12;
                    if(!var3) { _fun0006_ip = 43; continue _fun0006 }
case 45:
                    var3 = _closure2_slot11;
                    if(!var3) { _fun0006_ip = 43; continue _fun0006 }
case 46:
                    var3 = _closure2_slot4;
                    if(!var3) { _fun0006_ip = 43; continue _fun0006 }
case 47:
                    var5 = _closure1_slot7;
                    var4 = var5.getActiveChannelsFetchStatus;
                    var3 = _closure2_slot1;
                    var4 = var4.bind(var5)(var3);
                    var3 = var6 == var4;
                    if(var3) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                    var5 = var4.fetchedAt;
                    var3 = var6 == var5;
case 48:
                    if(var3) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var5 = global;
                    var6 = var5.Date;
                    var5 = var6.now;
                    var5 = var5.bind(var6)();
                    var4 = var4.fetchedAt;
                    var5 = var5 - var4;
                    var4 = 300000;
                    var3 = var5 > var4;
case 50:
                    if(!var3) { _fun0006_ip = 43; continue _fun0006 }
case 52:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 24;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchActiveChannels;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
case 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var12.bind(var13)(var8, var11);
            var _closure2_slot13 = var15;
            var12 = var13.useEffect;
            var11 = new Array(1);
            var11[0] = var15;
            var8 = function() {
                var2 = _closure2_slot13;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var8 = var12.bind(var13)(var8, var11);
            var8 = var7[var14];
            var16 = var4.bind(var5)(var8);
            var12 = var16.useStateFromStores;
            var8 = _closure1_slot21;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0007_ip = 53; continue _fun0007 }
case 44:
                    var4 = _closure1_slot21;
                    var3 = var4.getGuild;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 53:
                    return var1;
                }
            };
            var17 = var12.bind(var16)(var11, var8);
            var _closure2_slot14 = var17;
            var8 = var7[var14];
            var26 = var4.bind(var5)(var8);
            var16 = var26.useStateFromStores;
            var8 = _closure1_slot19;
            var12 = new Array(1);
            var12[0] = var8;
            var11 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0008_ip = 54; continue _fun0008 }
case 44:
                    var4 = _closure1_slot19;
                    var3 = var4.getDefaultChannel;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 54:
                    return var1;
                }
            };
            var11 = var16.bind(var26)(var12, var11);
            var _closure2_slot15 = var11;
            var12 = 25;
            var12 = var7[var12];
            var16 = var4.bind(var5)(var12);
            var12 = var16.useFirstGloballyViewbleGuildChannelId;
            var26 = var12.bind(var16)(var10);
            var _closure2_slot16 = var26;
            var12 = var7[var14];
            var27 = var4.bind(var5)(var12);
            var16 = var27.useStateFromStores;
            var12 = new Array(1);
            var12[0] = var8;
            var8 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0009_ip = 54; continue _fun0009 }
case 44:
                    var4 = _closure1_slot19;
                    var3 = var4.getChannels;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 54:
                    return var1;
                }
            };
            var16 = var16.bind(var27)(var12, var8);
            var _closure2_slot17 = var16;
            var12 = var13.useCallback;
            var8 = new Array(6);
            var8[0] = var2;
            var8[1] = var11;
            var8[2] = var26;
            var8[3] = var10;
            var8[4] = var9;
            var8[5] = var3;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot12;
                    if(!var1) { _fun0010_ip = 32; continue _fun0010 }
case 55:
                    var1 = _closure2_slot11;
case 32:
                    if(!var1) { _fun0010_ip = 37; continue _fun0010 }
case 56:
                    var1 = _closure2_slot4;
case 37:
                    if(!var1) { _fun0010_ip = 57; continue _fun0010 }
case 58:
                    var4 = _closure2_slot1;
                    var3 = null;
                    var1 = var3 != var4;
case 57:
                    if(!var1) { _fun0010_ip = 59; continue _fun0010 }
case 53:
                    var4 = _closure2_slot15;
                    var3 = null;
                    var1 = var3 != var4;
case 59:
                    if(!var1) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                    var11 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 26;
                    var5 = var4[var3];
                    var7 = undefined;
                    var6 = var11.bind(var7)(var5);
                    var5 = var6.subscribeGuild;
                    var10 = _closure2_slot1;
                    var5 = var5.bind(var6)(var10);
                    var5 = var4[var3];
                    var9 = var11.bind(var7)(var5);
                    var6 = var9.subscribeChannel;
                    var5 = _closure2_slot15;
                    var5 = var5.id;
                    var8 = 27;
                    var4 = var4[var8];
                    var4 = var11.bind(var7)(var4);
                    var4 = var4.DEFAULT_RANGES;
                    var4 = var6.bind(var9)(var10, var5, var4);
                    var5 = _closure2_slot16;
                    var4 = null;
                    var4 = var4 != var5;
                    if(!var4) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                    var6 = _closure2_slot16;
                    var5 = _closure2_slot15;
                    var5 = var5.id;
                    var4 = var6 !== var5;
case 62:
                    if(!var4) { _fun0010_ip = 60; continue _fun0010 }
case 64:
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var3 = var1[var3];
                    var5 = var6.bind(var7)(var3);
                    var4 = var5.subscribeChannel;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot16;
                    var1 = var1[var8];
                    var1 = var6.bind(var7)(var1);
                    var1 = var1.DEFAULT_RANGES;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 60:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var12.bind(var13)(var3, var8);
            var _closure2_slot18 = var3;
            var26 = var13.useEffect;
            var12 = new Array(1);
            var12[0] = var3;
            var8 = function() {
                var2 = _closure2_slot18;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var8 = var26.bind(var13)(var8, var12);
            var12 = var13.useCallback;
            var8 = new Array(2);
            var8[0] = var15;
            var8[1] = var3;
            var3 = function() {
                var3 = _closure2_slot13;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var2 = _closure2_slot18;
                var2 = var2.bind(var1)();
                return var1;
            };
            var3 = var12.bind(var13)(var3, var8);
            var _closure2_slot19 = var3;
            var12 = var13.useEffect;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.subscribe;
                var2 = _closure2_slot19;
                var1 = 'CONNECTION_OPEN';
                var1 = var3.bind(var4)(var1, var2);
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 28;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.unsubscribe;
                    var3 = _closure2_slot19;
                    var2 = 'CONNECTION_OPEN';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                };
                return var1;
            };
            var3 = var12.bind(var13)(var3, var8);
            var3 = 29;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useIsVoicePanelFullscreen;
            var3 = var3.bind(var4)();
            var7 = var9;
            if(!var7) { _fun0005_ip = 65; continue _fun0005 }
case 66:
            var7 = !var3;
case 65:
            var _closure2_slot20 = var7;
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = var4[var14];
            var15 = var12.bind(var5)(var3);
            var13 = var15.useStateFromStores;
            var3 = _closure1_slot16;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0011_ip = 67; continue _fun0011 }
case 68:
                    var2 = _closure2_slot15;
                    if(!(var5 != var2)) { _fun0011_ip = 67; continue _fun0011 }
case 37:
                    var6 = _closure1_slot16;
                    var4 = var6.getProps;
                    var3 = _closure2_slot1;
                    var1 = _closure2_slot15;
                    var1 = var1.id;
                    var3 = var4.bind(var6)(var3, var1);
                    var4 = var5 == var3;
                    if(var4) { _fun0011_ip = 35; continue _fun0011 }
case 69:
                    var1 = var3.groups;
                    var4 = var5 == var1;
case 35:
                    if(var4) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                    var1 = var3.groups;
                    var5 = var1.length;
                    var1 = 0;
                    var4 = var5 <= var1;
case 70:
                    var1 = !var4;
                    if(var4) { _fun0011_ip = 72; continue _fun0011 }
case 11:
                    var4 = var3.groups;
                    var3 = 0;
                    var3 = var4[var3];
                    var3 = var3.id;
                    var2 = _closure1_slot32;
                    var2 = var2.UNKNOWN;
                    var1 = var3 === var2;
case 72:
                    return var1;
case 67:
                    var1 = false;
                    return var1;
                }
            };
            var8 = var13.bind(var15)(var8, var3);
            var3 = var4[var14];
            var29 = var12.bind(var5)(var3);
            var27 = var29.useStateFromStores;
            var15 = _closure1_slot7;
            var26 = new Array(1);
            var26[0] = var15;
            var13 = new Array(2);
            var13[0] = var10;
            var13[1] = var19;
            var3 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var1 = var4 != var1;
                    if(!var1) { _fun0012_ip = 73; continue _fun0012 }
case 44:
                    var7 = _closure2_slot0;
                    var6 = var7.has;
                    var2 = _closure1_slot28;
                    var2 = var2.ACTIVE_CHANNEL;
                    var2 = var6.bind(var7)(var2);
                    var6 = !var2;
                    var2 = !var6;
                    if(var6) { _fun0012_ip = 74; continue _fun0012 }
case 75:
                    var6 = _closure1_slot7;
                    var5 = var6.getActiveChannelIds;
                    var3 = _closure2_slot1;
                    var3 = var5.bind(var6)(var3);
                    var2 = var4 == var3;
case 74:
                    var1 = var2;
case 73:
                    return var1;
                }
            };
            var3 = var27.bind(var29)(var26, var3, var13);
            var13 = var4[var14];
            var29 = var12.bind(var5)(var13);
            var27 = var29.useStateFromStores;
            var13 = _closure1_slot13;
            var26 = new Array(1);
            var26[0] = var13;
            var13 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getUserAffinities;
                var1 = var1.bind(var2)();
                return var1;
            };
            var29 = var27.bind(var29)(var26, var13);
            var _closure2_slot21 = var29;
            var13 = var4[var14];
            var30 = var12.bind(var5)(var13);
            var27 = var30.useStateFromStoresArray;
            var13 = _closure1_slot24;
            var26 = new Array(1);
            var26[0] = var13;
            var13 = function() {
                var2 = _closure1_slot24;
                var1 = var2.getFriendIDs;
                var1 = var1.bind(var2)();
                return var1;
            };
            var27 = var27.bind(var30)(var26, var13);
            var _closure2_slot22 = var27;
            var13 = var4[var14];
            var32 = var12.bind(var5)(var13);
            var31 = var32.useStateFromStoresObject;
            var13 = _closure1_slot22;
            var30 = new Array(1);
            var30[0] = var13;
            var26 = new Array(1);
            var26[0] = var10;
            var13 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = {};
                    var3 = _closure1_slot22;
                    var2 = var3.getChannelsVersion;
                    var2 = var2.bind(var3)();
                    var1['permissionChannelsVersion'] = var2;
                    var5 = _closure2_slot1;
                    var2 = null;
                    var5 = var2 != var5;
                    if(!var5) { _fun0013_ip = 76; continue _fun0013 }
case 77:
                    var5 = _closure1_slot22;
                    var4 = var5.getGuildVersion;
                    var3 = _closure2_slot1;
                    var2 = var4.bind(var5)(var3);
case 76:
                    var1['permissionGuildVersion'] = var2;
                    return var1;
                }
            };
            var13 = var31.bind(var32)(var30, var13, var26);
            var26 = var4[var14];
            var32 = var12.bind(var5)(var26);
            var31 = var32.useStateFromStores;
            var30 = new Array(1);
            var30[0] = var15;
            var26 = new Array(1);
            var26[0] = var10;
            var15 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0014_ip = 54; continue _fun0014 }
case 44:
                    var4 = _closure1_slot7;
                    var3 = var4.getActiveChannelIds;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 54:
                    return var1;
                }
            };
            var15 = var31.bind(var32)(var30, var15, var26);
            var26 = var4[var14];
            var33 = var12.bind(var5)(var26);
            var32 = var33.useStateFromStoresArray;
            var26 = _closure1_slot11;
            var31 = new Array(1);
            var31[0] = var26;
            var30 = new Array(1);
            var30[0] = var10;
            var26 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getGuildScheduledEventsForGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var26 = var32.bind(var33)(var31, var26, var30);
            var _closure2_slot23 = var26;
            var4 = var4[var14];
            var31 = var12.bind(var5)(var4);
            var30 = var31.useStateFromStoresArray;
            var4 = _closure1_slot5;
            var14 = new Array(1);
            var14[0] = var4;
            var12 = new Array(1);
            var12[0] = var10;
            var4 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0015_ip = 53; continue _fun0015 }
case 68:
                    var3 = _closure1_slot5;
                    var2 = var3.getEmbeddedActivitiesForGuild;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
                    _fun0015_ip = 78; continue _fun0015;
case 53:
                    var1 = new Array(0);
case 78:
                    return var1;
                }
            };
            var4 = var30.bind(var31)(var14, var4, var12);
            var2 = !var2;
            if(var2) { _fun0005_ip = 79; continue _fun0005 }
case 80:
            var2 = var8;
case 79:
            if(var2) { _fun0005_ip = 81; continue _fun0005 }
case 82:
            var2 = var3;
case 81:
            var _closure2_slot24 = var2;
            var14 = _closure1_slot4;
            var8 = var14.useRef;
            var3 = {};
            var3['guildId'] = var10;
            var12 = false;
            var3['hasComputed'] = var12;
            var3 = var8.bind(var14)(var3);
            var _closure2_slot25 = var3;
            var12 = var14.useCallback;
            var8 = new Array(19);
            var8[0] = var10;
            var8[1] = var29;
            var8[2] = var11;
            var8[3] = var28;
            var8[4] = var27;
            var8[5] = var26;
            var8[6] = var25;
            var8[7] = var24;
            var8[8] = var23;
            var8[9] = var22;
            var8[10] = var21;
            var8[11] = var20;
            var8[12] = var19;
            var8[13] = var18;
            var8[14] = var17;
            var8[15] = var16;
            var8[16] = var15;
            var8[17] = var13;
            var8[18] = var4;
            var4 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 30;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.time;
                var3 = '🎨';
                var2 = 'computeHappeningNowState';
                var1 = function() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var2 = function addUser(arg1, arg2, arg3) {
                            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                                var3 = arg1;
                                var9 = arg2;
                                var13 = arg3;
                                var _closure5_slot0 = var3;
                                var _closure5_slot1 = var13;
                                var2 = _closure1_slot24;
                                var1 = var2.isBlockedOrIgnored;
                                var1 = var1.bind(var2)(var3);
                                if(var1) { _fun0017_ip = 83; continue _fun0017 }
case 84:
                                var5 = _closure1_slot18;
                                var2 = var5.getChannel;
                                var7 = null;
                                var6 = var7 == var13;
                                var4 = undefined;
                                var1 = undefined;
                                if(var6) { _fun0017_ip = 35; continue _fun0017 }
case 76:
                                var1 = var13.channelId;
case 35:
                                var1 = var2.bind(var5)(var1);
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 32;
                                var2 = var6[var2];
                                var5 = var5.bind(var4)(var2);
                                var2 = var5.isChannelContentGated;
                                var2 = var2.bind(var5)(var1);
                                if(var2) { _fun0017_ip = 83; continue _fun0017 }
case 85:
                                if(!(var7 != var1)) { _fun0017_ip = 43; continue _fun0017 }
case 86:
                                var2 = var1.isGroupDM;
                                var2 = var2.bind(var1)();
                                if(var2) { _fun0017_ip = 19; continue _fun0017 }
case 67:
                                var6 = _closure1_slot22;
                                var5 = var6.can;
                                var2 = _closure1_slot31;
                                var2 = var2.CONNECT;
                                var2 = var5.bind(var6)(var2, var1);
                                if(!var2) { _fun0017_ip = 43; continue _fun0017 }
case 15:
                                var6 = _closure1_slot22;
                                var5 = var6.can;
                                var2 = _closure1_slot31;
                                var2 = var2.VIEW_CHANNEL;
                                var2 = var5.bind(var6)(var2, var1);
                                if(!var2) { _fun0017_ip = 43; continue _fun0017 }
case 19:
                                if(!(var7 == var13)) { _fun0017_ip = 87; continue _fun0017 }
case 43:
                                if(!(var7 == var9)) { _fun0017_ip = 88; continue _fun0017 }
case 89:
                                var2 = _closure2_slot10;
                                if(!var2) { _fun0017_ip = 83; continue _fun0017 }
case 90:
                                var6 = _closure1_slot23;
                                var5 = var6.getStatus;
                                var2 = _closure2_slot1;
                                var5 = var5.bind(var6)(var3, var2);
                                if(!(var7 != var5)) { _fun0017_ip = 83; continue _fun0017 }
case 91:
                                var2 = _closure1_slot32;
                                var2 = var2.OFFLINE;
                                if(!(var5 !== var2)) { _fun0017_ip = 92; continue _fun0017 }
case 93:
                                var6 = _closure4_slot8;
                                var5 = var6.push;
                                var2 = {};
                                var12 = 'user';
                                var2['kind'] = var12;
                                var2['userId'] = var3;
                                var12 = _closure2_slot1;
                                var2['guildId'] = var12;
                                var2 = var5.bind(var6)(var2);
                                _fun0017_ip = 83; continue _fun0017;
case 92:
                                var6 = _closure4_slot9;
                                var5 = var6.push;
                                var2 = {};
                                var12 = 'user';
                                var2['kind'] = var12;
                                var2['userId'] = var3;
                                var11 = _closure2_slot1;
                                var2['guildId'] = var11;
                                var2 = var5.bind(var6)(var2);
                                _fun0017_ip = 83; continue _fun0017;
case 88:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 34;
                                var2 = var6[var2];
                                var5 = var5.bind(var4)(var2);
                                var2 = var5.isActivityPermanentCustomStatus;
                                var2 = var2.bind(var5)(var9);
                                if(var2) { _fun0017_ip = 94; continue _fun0017 }
case 95:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 35;
                                var2 = var6[var2];
                                var5 = var5.bind(var4)(var2);
                                var2 = var5.isActivityTemporaryCustomStatus;
                                var2 = var2.bind(var5)(var9);
                                if(var2) { _fun0017_ip = 96; continue _fun0017 }
case 97:
                                var2 = _closure2_slot9;
                                if(!var2) { _fun0017_ip = 83; continue _fun0017 }
case 98:
                                var5 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var2 = 36;
                                var2 = var11[var2];
                                var5 = var5.bind(var4)(var2);
                                var2 = _closure1_slot29;
                                var2 = var2.EMBEDDED;
                                var2 = var5.bind(var4)(var9, var2);
                                if(!var2) { _fun0017_ip = 99; continue _fun0017 }
case 100:
                                var12 = _closure1_slot18;
                                var11 = var12.getChannel;
                                var15 = _closure1_slot27;
                                var14 = var15.getVoiceStateForSession;
                                var5 = var9.session_id;
                                var14 = var14.bind(var15)(var3, var5);
                                var15 = var7 == var14;
                                var5 = undefined;
                                if(var15) { _fun0017_ip = 101; continue _fun0017 }
case 102:
                                var5 = var14.channelId;
case 101:
                                var12 = var11.bind(var12)(var5);
                                var5 = var7 == var12;
                                var11 = undefined;
                                if(var5) { _fun0017_ip = 103; continue _fun0017 }
case 104:
                                var5 = var12.getGuildId;
                                var11 = var5.bind(var12)();
case 103:
                                var5 = _closure2_slot1;
                                var2 = var11 !== var5;
case 99:
                                if(var2) { _fun0017_ip = 83; continue _fun0017 }
case 105:
                                var5 = _closure4_slot6;
                                var2 = {};
                                var2['userId'] = var3;
                                var11 = _closure2_slot1;
                                var2['guildId'] = var11;
                                var11 = 'activity';
                                var2['kind'] = var11;
                                var2['activity'] = var9;
                                var5[var3] = var2;
                                _fun0017_ip = 83; continue _fun0017;
case 96:
                                var2 = _closure2_slot8;
                                if(!var2) { _fun0017_ip = 83; continue _fun0017 }
case 106:
                                var5 = _closure4_slot7;
                                var2 = {};
                                var2['userId'] = var3;
                                var6 = _closure2_slot1;
                                var2['guildId'] = var6;
                                var6 = 'activity';
                                var2['kind'] = var6;
                                var2['activity'] = var9;
                                var5[var3] = var2;
                                _fun0017_ip = 83; continue _fun0017;
case 94:
                                var2 = _closure2_slot8;
                                if(!var2) { _fun0017_ip = 83; continue _fun0017 }
case 107:
                                var6 = _closure4_slot8;
                                var5 = var6.push;
                                var2 = {};
                                var12 = 'activity';
                                var2['kind'] = var12;
                                var2['userId'] = var3;
                                var11 = _closure2_slot1;
                                var2['guildId'] = var11;
                                var2['activity'] = var9;
                                var2 = var5.bind(var6)(var2);
                                _fun0017_ip = 83; continue _fun0017;
case 87:
                                var11 = _closure1_slot14;
                                var5 = var11.getStreamForUser;
                                var2 = _closure2_slot1;
                                if(!(var7 == var2)) { _fun0017_ip = 108; continue _fun0017 }
case 109:
                                var12 = var7 == var1;
                                var2 = undefined;
                                if(var12) { _fun0017_ip = 110; continue _fun0017 }
case 111:
                                var12 = var1.getGuildId;
                                var2 = var12.bind(var1)();
case 110:
                                _fun0017_ip = 112; continue _fun0017;
case 108:
                                var2 = _closure2_slot1;
case 112:
                                var5 = var5.bind(var11)(var3, var2);
                                if(!(var7 != var5)) { _fun0017_ip = 113; continue _fun0017 }
case 114:
                                var2 = _closure2_slot7;
                                if(var2) { _fun0017_ip = 115; continue _fun0017 }
case 113:
                                if(!(var7 != var1)) { _fun0017_ip = 83; continue _fun0017 }
case 116:
                                var14 = _closure4_slot1;
                                var12 = var14.has;
                                var11 = var1.id;
                                var11 = var12.bind(var14)(var11);
                                if(var11) { _fun0017_ip = 83; continue _fun0017 }
case 117:
                                var11 = var1.isGuildStageVoice;
                                var11 = var11.bind(var1)();
                                if(var11) { _fun0017_ip = 118; continue _fun0017 }
case 119:
                                var11 = _closure2_slot6;
                                if(!var11) { _fun0017_ip = 120; continue _fun0017 }
case 121:
                                var14 = _closure1_slot5;
                                var12 = var14.getEmbeddedActivitiesForChannel;
                                var11 = var1.id;
                                var16 = var12.bind(var14)(var11);
                                var11 = _closure2_slot3;
                                if(var11) { _fun0017_ip = 122; continue _fun0017 }
case 123:
                                var12 = _closure1_slot0;
                                var14 = _closure1_slot2;
                                var11 = 33;
                                var11 = var14[var11];
                                var12 = var12.bind(var4)(var11);
                                var11 = var12.findActivityWithMostNonBlockedOrIgnoredParticipants;
                                var11 = var11.bind(var12)(var16);
                                if(!(var7 !== var11)) { _fun0017_ip = 120; continue _fun0017 }
case 124:
                                var14 = _closure4_slot4;
                                var12 = var1.id;
                                var15 = {};
                                var17 = 'embedded-activity';
                                var15['kind'] = var17;
                                var15['userId'] = var3;
                                var15['voiceState'] = var13;
                                var17 = _closure2_slot1;
                                var15['guildId'] = var17;
                                var15['activity'] = var11;
                                var11 = new Array(1);
                                var11[0] = var15;
                                var14[var12] = var11;
                                _fun0017_ip = 120; continue _fun0017;
case 122:
                                var12 = _closure4_slot4;
                                var11 = var1.id;
                                var15 = var16.filter;
                                var14 = function(arg1) {
                                    var1 = arg1;
                                    var5 = var1.userIds;
                                    var3 = new Array(0);
                                    var4 = 0;
                                    var6 = var3;
                                    var1 = arraySpread(var6, var5, var4);
                                    var2 = var3.some;
                                    var1 = function(arg1) {
                                        var3 = _closure1_slot24;
                                        var2 = var3.isBlockedOrIgnored;
                                        var1 = arg1;
                                        var1 = var2.bind(var3)(var1);
                                        var1 = !var1;
                                        return var1;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var15 = var15.bind(var16)(var14);
                                var14 = var15.map;
                                var10 = function(arg1) {
                                    var1 = {};
                                    var2 = 'embedded-activity';
                                    var1['kind'] = var2;
                                    var3 = _closure5_slot0;
                                    var1['userId'] = var3;
                                    var2 = _closure5_slot1;
                                    var1['voiceState'] = var2;
                                    var2 = _closure2_slot1;
                                    var1['guildId'] = var2;
                                    var2 = arg1;
                                    var1['activity'] = var2;
                                    return var1;
                                };
                                var10 = var14.bind(var15)(var10);
                                var12[var11] = var10;
case 120:
                                var12 = _closure4_slot3;
                                var11 = var1.id;
                                var10 = {};
                                var14 = 'voice';
                                var10['kind'] = var14;
                                var10['userId'] = var3;
                                var10['voiceState'] = var13;
                                var13 = _closure2_slot1;
                                if(!(var7 == var13)) { _fun0017_ip = 125; continue _fun0017 }
case 126:
                                var13 = var7 == var1;
                                var14 = undefined;
                                if(var13) { _fun0017_ip = 127; continue _fun0017 }
case 128:
                                var13 = var1.getGuildId;
                                var14 = var13.bind(var1)();
case 127:
                                _fun0017_ip = 129; continue _fun0017;
case 125:
                                var14 = _closure2_slot1;
case 129:
                                var15 = var7 != var14;
                                var13 = undefined;
                                if(!var15) { _fun0017_ip = 130; continue _fun0017 }
case 131:
                                var13 = var14;
case 130:
                                var10['guildId'] = var13;
                                var12[var11] = var10;
                                _fun0017_ip = 83; continue _fun0017;
case 118:
                                var11 = _closure1_slot24;
                                var10 = var11.isFriend;
                                var10 = var10.bind(var11)(var3);
                                if(var10) { _fun0017_ip = 132; continue _fun0017 }
case 133:
                                return var4;
case 132:
                                var12 = _closure1_slot12;
                                var11 = var12.getStageInstanceByChannel;
                                var10 = var1.id;
                                var10 = var11.bind(var12)(var10);
                                if(!(var7 != var10)) { _fun0017_ip = 134; continue _fun0017 }
case 135:
                                var12 = _closure1_slot22;
                                var11 = var12.can;
                                var8 = _closure1_slot31;
                                var8 = var8.CONNECT;
                                var8 = var11.bind(var12)(var8, var1);
                                if(var8) { _fun0017_ip = 136; continue _fun0017 }
case 137:
                                return var4;
case 136:
                                var8 = _closure4_slot2;
                                var2 = var1.id;
                                var1 = {};
                                var11 = 'live-guild-stage';
                                var1['kind'] = var11;
                                var1['stage'] = var10;
                                var8[var2] = var1;
                                _fun0017_ip = 83; continue _fun0017;
case 134:
                                return var4;
case 115:
                                var2 = _closure4_slot5;
                                var1 = {};
                                var1['userId'] = var3;
                                var8 = _closure2_slot1;
                                var1['guildId'] = var8;
                                var8 = 'activity';
                                var1['kind'] = var8;
                                var10 = var7 != var9;
                                var8 = undefined;
                                if(!var10) { _fun0017_ip = 138; continue _fun0017 }
case 139:
                                var8 = var9;
case 138:
                                var1['activity'] = var8;
                                var8 = _closure2_slot1;
                                if(!(var7 != var8)) { _fun0017_ip = 140; continue _fun0017 }
case 141:
                                var8 = var7 == var5;
                                var7 = undefined;
                                if(var8) { _fun0017_ip = 142; continue _fun0017 }
case 143:
                                var7 = var5.guildId;
case 142:
                                var6 = _closure2_slot1;
                                var4 = undefined;
                                if(!(var7 === var6)) { _fun0017_ip = 144; continue _fun0017 }
case 140:
                                var4 = var5;
case 144:
                                var1['stream'] = var4;
                                var2[var3] = var1;
case 83:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var _closure4_slot13 = var2;
                        var1 = _closure2_slot25;
                        var3 = var1.current;
                        var1 = _closure2_slot1;
                        var3['guildId'] = var1;
                        var1 = _closure2_slot25;
                        var3 = var1.current;
                        var1 = true;
                        var3['hasComputed'] = var1;
                        var41 = global;
                        var1 = var41.Set;
                        var3 = var1.prototype;
                        var3 = Object.create(var3, {constructor: {value: var1}});
                        var67 = var3;
                        var1 = new var67[var1](var66);
                        var3 = var1 instanceof Object ? var1 : var3;
                        var _closure4_slot0 = var3;
                        var5 = var41.Math;
                        var4 = var5.min;
                        var1 = _closure2_slot21;
                        var1 = var1.length;
                        var40 = 50;
                        var4 = var4.bind(var5)(var1, var40);
                        var39 = 0;
                        var5 = var39 < var4;
                        var1 = 0;
                        if(!var5) { _fun0016_ip = 63; continue _fun0016 }
case 145:
                        var6 = var3.add;
                        var5 = _closure2_slot21;
                        var5 = var5[var1];
                        var5 = var5.otherUserId;
                        var5 = var6.bind(var3)(var5);
                        var1 = var1 + 1;
                        if(var1 < var4) { _fun0016_ip = 145; continue _fun0016 }
case 63:
                        var4 = _closure1_slot34;
                        var1 = _closure2_slot22;
                        var37 = undefined;
                        var5 = var4.bind(var37)(var1);
                        var4 = var5.bind(var37)();
                        var1 = var4.done;
                        if(var1) { _fun0016_ip = 146; continue _fun0016 }
case 147:
                        var6 = var4.value;
                        var1 = var3.add;
                        var1 = var1.bind(var3)(var6);
                        var6 = var5.bind(var37)();
                        var1 = var6.done;
                        var4 = var6;
                        if(!var1) { _fun0016_ip = 147; continue _fun0016 }
case 146:
                        var4 = _closure1_slot18;
                        var1 = var4.getMutablePrivateChannels;
                        var8 = var1.bind(var4)();
                        var6 = var8;
                        for(var1 in var6)
case 148:
                        {
case 18:
                            var9 = var1;
                            var11 = var8[var9];
                            var9 = var11.isPrivate;
                            var9 = var9.bind(var11)();
                            if(!var9) { _fun0016_ip = 148; continue _fun0016 }
case 149:
                            var10 = var3.add;
                            var9 = var11.getRecipientId;
                            var9 = var9.bind(var11)();
                            var9 = var10.bind(var3)(var9);
                            _fun0016_ip = 148; continue _fun0016;
                        }
case 150:
                        var1 = _closure2_slot1;
                        var36 = null;
                        if(!(var36 != var1)) { _fun0016_ip = 151; continue _fun0016 }
case 152:
                        var1 = _closure2_slot15;
                        if(!(var36 == var1)) { _fun0016_ip = 153; continue _fun0016 }
case 151:
                        var5 = new Array(0);
                        _fun0016_ip = 154; continue _fun0016;
case 153:
                        var7 = _closure1_slot16;
                        var6 = var7.getRows;
                        var4 = _closure2_slot1;
                        var1 = _closure2_slot15;
                        var1 = var1.id;
                        var5 = var6.bind(var7)(var4, var1);
case 154:
                        var4 = var5.forEach;
                        var1 = function(arg1) {
                            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                                var1 = arg1;
                                var3 = var1.type;
                                var2 = _closure1_slot17;
                                var2 = var2.MEMBER;
                                if(!(var3 === var2)) { _fun0018_ip = 59; continue _fun0018 }
case 155:
                                var3 = _closure4_slot0;
                                var2 = var3.add;
                                var1 = var1.userId;
                                var1 = var2.bind(var3)(var1);
case 59:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var4.bind(var5)(var1);
                        var35 = new Array(0);
                        var34 = new Array(0);
                        var1 = var41.Set;
                        var4 = var1.prototype;
                        var4 = Object.create(var4, {constructor: {value: var1}});
                        var67 = var4;
                        var1 = new var67[var1](var66);
                        var7 = var1 instanceof Object ? var1 : var4;
                        var _closure4_slot1 = var7;
                        var4 = _closure1_slot34;
                        var1 = _closure2_slot23;
                        var6 = var4.bind(var37)(var1);
                        var4 = var6.bind(var37)();
                        var1 = var4.done;
                        var5 = 604800;
                        if(var1) { _fun0016_ip = 156; continue _fun0016 }
case 98:
                        var1 = var4.value;
                        var8 = _closure1_slot10;
                        var8 = var8.bind(var37)(var1);
                        if(var8) { _fun0016_ip = 157; continue _fun0016 }
case 158:
                        var8 = _closure1_slot9;
                        var8 = var8.bind(var37)(var1);
                        if(!var8) { _fun0016_ip = 100; continue _fun0016 }
case 159:
                        var9 = _closure1_slot8;
                        var8 = var9.bind(var37)(var1, var5);
case 100:
                        if(!var8) { _fun0016_ip = 160; continue _fun0016 }
case 161:
                        var8 = var34.push;
                        var8 = var8.bind(var34)(var1);
                        _fun0016_ip = 160; continue _fun0016;
case 157:
                        var8 = var35.push;
                        var8 = var8.bind(var35)(var1);
case 160:
                        var8 = var1.channel_id;
                        if(!(var36 != var8)) { _fun0016_ip = 162; continue _fun0016 }
case 163:
                        var8 = var7.add;
                        var1 = var1.channel_id;
                        var1 = var8.bind(var7)(var1);
case 162:
                        var8 = var6.bind(var37)();
                        var1 = var8.done;
                        var4 = var8;
                        if(!var1) { _fun0016_ip = 98; continue _fun0016 }
case 156:
                        var33 = {};
                        var _closure4_slot2 = var33;
                        var32 = {};
                        var _closure4_slot3 = var32;
                        var31 = {};
                        var _closure4_slot4 = var31;
                        var30 = {};
                        var _closure4_slot5 = var30;
                        var29 = {};
                        var _closure4_slot6 = var29;
                        var28 = {};
                        var _closure4_slot7 = var28;
                        var1 = _closure2_slot1;
                        if(!(var36 != var1)) { _fun0016_ip = 164; continue _fun0016 }
case 165:
                        var1 = _closure2_slot5;
                        if(!var1) { _fun0016_ip = 164; continue _fun0016 }
case 166:
                        var5 = _closure1_slot12;
                        var4 = var5.getStageInstancesByGuild;
                        var1 = _closure2_slot1;
                        var6 = var4.bind(var5)(var1);
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 31;
                        var1 = var5[var1];
                        var5 = var4.bind(var37)(var1);
                        var4 = var5.forEach;
                        var1 = function(arg1) {
                            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                                var4 = arg1;
                                var5 = _closure1_slot22;
                                var3 = var5.canWithPartialContext;
                                var1 = _closure1_slot31;
                                var2 = var1.CONNECT;
                                var1 = {};
                                var6 = var4.channel_id;
                                var1['channelId'] = var6;
                                var1 = var3.bind(var5)(var2, var1);
                                if(!var1) { _fun0019_ip = 35; continue _fun0019 }
case 2:
                                var5 = var4.channel_id;
                                var3 = function blockedOrIgnoredUserInVoiceChannel(arg1) {
                                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                                        var6 = arg1;
                                        var1 = null;
                                        if(!(var1 != var6)) { _fun0020_ip = 167; continue _fun0020 }
case 32:
                                        var5 = _closure1_slot27;
                                        var4 = var5.getVoiceStatesForChannel;
                                        var5 = var4.bind(var5)(var6);
                                        var1 = var1 != var5;
                                        if(!var1) { _fun0020_ip = 168; continue _fun0020 }
case 169:
                                        var6 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var4 = 31;
                                        var4 = var8[var4];
                                        var7 = undefined;
                                        var4 = var6.bind(var7)(var4);
                                        var6 = var4.bind(var7)(var5);
                                        var5 = var6.map;
                                        var4 = function(arg1) {
                                            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                                                var3 = _closure1_slot26;
                                                var2 = var3.getUser;
                                                var1 = arg1;
                                                var1 = var1.userId;
                                                var2 = var2.bind(var3)(var1);
                                                var1 = null;
                                                var3 = var1 == var2;
                                                var1 = undefined;
                                                if(var3) { _fun0021_ip = 38; continue _fun0021 }
case 53:
                                                var1 = var2.id;
case 38:
                                                return var1;
                                            }
                                        };
                                        var5 = var5.bind(var6)(var4);
                                        var4 = var5.filter;
                                        var6 = _closure1_slot0;
                                        var3 = 39;
                                        var3 = var8[var3];
                                        var3 = var6.bind(var7)(var3);
                                        var3 = var3.isNotNullish;
                                        var4 = var4.bind(var5)(var3);
                                        var3 = var4.some;
                                        var2 = function(arg1) {
                                            var3 = _closure1_slot24;
                                            var2 = var3.isBlockedOrIgnored;
                                            var1 = arg1;
                                            var1 = var2.bind(var3)(var1);
                                            return var1;
                                        };
                                        var1 = var3.bind(var4)(var2);
case 168:
                                        return var1;
case 167:
                                        var1 = false;
                                        return var1;
                                    }
                                };
                                var2 = undefined;
                                var2 = var3.bind(var2)(var5);
                                var1 = !var2;
case 35:
                                if(!var1) { _fun0019_ip = 170; continue _fun0019 }
case 71:
                                var3 = _closure4_slot2;
                                var2 = var4.channel_id;
                                var1 = {};
                                var5 = 'live-guild-stage';
                                var1['kind'] = var5;
                                var1['stage'] = var4;
                                var3[var2] = var1;
case 170:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var4.bind(var5)(var6, var1);
case 164:
                        var27 = new Array(0);
                        var _closure4_slot8 = var27;
                        var26 = new Array(0);
                        var _closure4_slot9 = var26;
                        var5 = _closure1_slot27;
                        var4 = var5.getVoiceStates;
                        var1 = _closure2_slot1;
                        var4 = var4.bind(var5)(var1);
                        var _closure4_slot10 = var4;
                        var1 = var41.Set;
                        var5 = var1.prototype;
                        var5 = Object.create(var5, {constructor: {value: var1}});
                        var67 = var5;
                        var1 = new var67[var1](var66);
                        var5 = var1 instanceof Object ? var1 : var5;
                        var _closure4_slot11 = var5;
                        var6 = var3.forEach;
                        var1 = function(arg1) {
                            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                                var3 = arg1;
                                var2 = _closure1_slot26;
                                var1 = var2.getUser;
                                var1 = var1.bind(var2)(var3);
                                var2 = null;
                                if(!(var2 != var1)) { _fun0022_ip = 171; continue _fun0022 }
case 172:
                                var1 = var1.bot;
                                if(var1) { _fun0022_ip = 173; continue _fun0022 }
case 174:
                                var7 = _closure1_slot23;
                                var5 = var7.getPrimaryActivity;
                                var6 = _closure2_slot1;
                                var5 = var5.bind(var7)(var3, var6);
                                if(!(var2 == var6)) { _fun0022_ip = 175; continue _fun0022 }
case 176:
                                var6 = _closure1_slot27;
                                var4 = var6.getVoiceStateForUser;
                                var4 = var4.bind(var6)(var3);
                                _fun0022_ip = 177; continue _fun0022;
case 175:
                                var6 = _closure4_slot10;
                                var4 = var6[var3];
case 177:
                                var1 = _closure2_slot10;
                                if(var1) { _fun0022_ip = 178; continue _fun0022 }
case 179:
                                var1 = var2 != var5;
case 178:
                                if(var1) { _fun0022_ip = 180; continue _fun0022 }
case 181:
                                var1 = var2 != var4;
case 180:
                                if(!var1) { _fun0022_ip = 171; continue _fun0022 }
case 85:
                                var2 = _closure4_slot13;
                                var1 = undefined;
                                var1 = var2.bind(var1)(var3, var5, var4);
                                _fun0022_ip = 171; continue _fun0022;
case 173:
                                var2 = _closure4_slot11;
                                var1 = var2.add;
                                var1 = var1.bind(var2)(var3);
case 171:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var6.bind(var3)(var1);
                        var1 = var5.size;
                        var1 = var1 > var39;
                        if(!var1) { _fun0016_ip = 182; continue _fun0016 }
case 183:
                        var6 = var5.size;
                        var3 = var3.size;
                        var1 = var6 === var3;
case 182:
                        if(!var1) { _fun0016_ip = 116; continue _fun0016 }
case 112:
                        var3 = var41.Array;
                        var1 = var3.from;
                        var1 = var1.bind(var3)(var5);
                        var1 = var1[var39];
                        var1 = var2.bind(var37)(var1, var36, var36);
case 116:
                        var1 = _closure2_slot1;
                        if(!(var36 != var1)) { _fun0016_ip = 184; continue _fun0016 }
case 185:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 31;
                        var1 = var3[var1];
                        var3 = var2.bind(var37)(var1);
                        var2 = var3.forEach;
                        var1 = function(arg1) {
                            var5 = arg1;
                            var4 = var5.userId;
                            var3 = _closure4_slot13;
                            var6 = _closure1_slot23;
                            var2 = var6.getPrimaryActivity;
                            var1 = _closure2_slot1;
                            var2 = var2.bind(var6)(var4, var1);
                            var1 = undefined;
                            var2 = var3.bind(var1)(var4, var2, var5);
                            return var1;
                        };
                        var1 = var2.bind(var3)(var4, var1);
case 184:
                        var1 = new Array(0);
                        var _closure4_slot12 = var1;
                        var3 = _closure1_slot34;
                        var2 = _closure2_slot0;
                        var25 = var3.bind(var37)(var2);
                        var3 = var25.bind(var37)();
                        var2 = var3.done;
                        var24 = 'unified-vc';
                        var23 = 'kind';
                        var22 = 37;
                        var21 = 2;
                        var20 = 'active-channel';
                        var19 = 'student-hub-add-channel';
                        var18 = 'create-channel';
                        var17 = 'invite';
                        var16 = 38;
                        var15 = 'customize-guild';
                        var14 = 39;
                        var13 = var3;
                        var12 = undefined;
                        var11 = undefined;
                        var10 = undefined;
                        var9 = undefined;
                        var8 = undefined;
                        var7 = undefined;
                        var6 = undefined;
                        var5 = undefined;
                        var4 = undefined;
                        var3 = undefined;
                        if(var2) { _fun0016_ip = 186; continue _fun0016 }
case 187:
                        var45 = var13.value;
                        var2 = _closure1_slot28;
                        var2 = var2.LIVE_GUILD_STAGE;
                        if(!(var2 !== var45)) { _fun0016_ip = 188; continue _fun0016 }
case 189:
                        var2 = _closure1_slot28;
                        var2 = var2.LIVE_GUILD_EVENT;
                        if(!(var2 !== var45)) { _fun0016_ip = 190; continue _fun0016 }
case 191:
                        var2 = _closure1_slot28;
                        var2 = var2.UPCOMING_GUILD_EVENT;
                        if(!(var2 !== var45)) { _fun0016_ip = 192; continue _fun0016 }
case 193:
                        var2 = _closure1_slot28;
                        var2 = var2.VOICES;
                        if(!(var2 !== var45)) { _fun0016_ip = 194; continue _fun0016 }
case 195:
                        var2 = _closure1_slot28;
                        var2 = var2.EMBEDDED_ACTIVITY;
                        if(!(var2 !== var45)) { _fun0016_ip = 196; continue _fun0016 }
case 197:
                        var2 = _closure1_slot28;
                        var2 = var2.COMBINED_VC;
                        if(!(var2 !== var45)) { _fun0016_ip = 198; continue _fun0016 }
case 199:
                        var2 = _closure1_slot28;
                        var2 = var2.STREAMS;
                        if(!(var2 !== var45)) { _fun0016_ip = 200; continue _fun0016 }
case 201:
                        var2 = _closure1_slot28;
                        var2 = var2.USER_CUSTOM_STATUS;
                        if(!(var2 !== var45)) { _fun0016_ip = 202; continue _fun0016 }
case 203:
                        var2 = _closure1_slot28;
                        var2 = var2.ACTIVITIES;
                        if(!(var2 !== var45)) { _fun0016_ip = 204; continue _fun0016 }
case 205:
                        var2 = _closure1_slot28;
                        var2 = var2.ACTIVE_CHANNEL;
                        if(!(var2 !== var45)) { _fun0016_ip = 206; continue _fun0016 }
case 207:
                        var2 = _closure1_slot28;
                        var2 = var2.USER;
                        if(!(var2 !== var45)) { _fun0016_ip = 208; continue _fun0016 }
case 209:
                        var2 = _closure1_slot28;
                        var2 = var2.STUDENT_HUB_ADD_CHANNEL;
                        if(!(var2 !== var45)) { _fun0016_ip = 210; continue _fun0016 }
case 211:
                        var2 = _closure1_slot28;
                        var2 = var2.CREATE_CHANNEL;
                        if(!(var2 !== var45)) { _fun0016_ip = 212; continue _fun0016 }
case 136:
                        var2 = _closure1_slot28;
                        var2 = var2.INVITE;
                        if(!(var2 !== var45)) { _fun0016_ip = 213; continue _fun0016 }
case 214:
                        var2 = _closure1_slot28;
                        var2 = var2.CUSTOMIZE_GUILD;
                        if(!(var2 !== var45)) { _fun0016_ip = 215; continue _fun0016 }
case 216:
                        var44 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var14];
                        var44 = var44.bind(var37)(var2);
                        var2 = var44.assertNever;
                        var2 = var2.bind(var44)(var45);
                        var53 = var12;
                        var52 = var11;
                        var51 = var10;
                        var50 = var9;
                        var49 = var8;
                        var48 = var7;
                        var47 = var6;
                        var46 = var5;
                        var45 = var4;
                        var44 = var3;
                        _fun0016_ip = 217; continue _fun0016;
case 215:
                        var2 = _closure2_slot14;
                        var2 = var36 != var2;
                        if(!var2) { _fun0016_ip = 218; continue _fun0016 }
case 219:
                        var57 = _closure1_slot22;
                        var56 = var57.can;
                        var54 = _closure1_slot31;
                        var55 = var54.MANAGE_GUILD;
                        var54 = _closure2_slot14;
                        var2 = var56.bind(var57)(var55, var54);
case 218:
                        if(!var2) { _fun0016_ip = 220; continue _fun0016 }
case 221:
                        var54 = _closure2_slot14;
                        var55 = var36 == var54;
                        var54 = undefined;
                        if(var55) { _fun0016_ip = 222; continue _fun0016 }
case 223:
                        var55 = _closure2_slot14;
                        var54 = var55.icon;
case 222:
                        var2 = var36 == var54;
case 220:
                        var53 = var12;
                        var52 = var11;
                        var51 = var10;
                        var50 = var9;
                        var49 = var8;
                        var48 = var7;
                        var47 = var6;
                        var46 = var5;
                        var45 = var4;
                        var44 = var3;
                        if(!var2) { _fun0016_ip = 217; continue _fun0016 }
case 224:
                        var54 = var1.push;
                        var2 = {};
                        var2['kind'] = var15;
                        var55 = _closure2_slot14;
                        var55 = var55.id;
                        var2['guildId'] = var55;
                        var2 = var54.bind(var1)(var2);
                        var53 = var12;
                        var52 = var11;
                        var51 = var10;
                        var50 = var9;
                        var49 = var8;
                        var48 = var7;
                        var47 = var6;
                        var46 = var5;
                        var45 = var4;
                        var44 = var3;
                        _fun0016_ip = 217; continue _fun0016;
case 213:
                        var2 = _closure2_slot14;
                        var2 = var36 != var2;
                        if(!var2) { _fun0016_ip = 225; continue _fun0016 }
case 226:
                        var54 = _closure2_slot17;
                        var2 = var36 != var54;
case 225:
                        if(!var2) { _fun0016_ip = 227; continue _fun0016 }
case 228:
                        var55 = _closure1_slot0;
                        var54 = _closure1_slot2;
                        var54 = var54[var16];
                        var57 = var55.bind(var37)(var54);
                        var56 = var57.shouldRenderInvite;
                        var55 = _closure2_slot17;
                        var54 = _closure2_slot14;
                        var2 = var56.bind(var57)(var55, var54);
case 227:
                        var53 = var12;
                        var52 = var11;
                        var51 = var10;
                        var50 = var9;
                        var49 = var8;
                        var48 = var7;
                        var47 = var6;
                        var46 = var5;
                        var45 = var4;
                        var44 = var3;
                        if(!var2) { _fun0016_ip = 217; continue _fun0016 }
case 229:
                        var54 = var1.push;
                        var2 = {};
                        var2['kind'] = var17;
                        var55 = _closure2_slot14;
                        var55 = var55.id;
                        var2['guildId'] = var55;
                        var2 = var54.bind(var1)(var2);
                        var53 = var12;
                        var52 = var11;
                        var51 = var10;
                        var50 = var9;
                        var49 = var8;
                        var48 = var7;
                        var47 = var6;
                        var46 = var5;
                        var45 = var4;
                        var44 = var3;
                        _fun0016_ip = 217; continue _fun0016;
case 212:
                        var2 = _closure2_slot14;
                        var2 = var36 != var2;
                        if(!var2) { _fun0016_ip = 230; continue _fun0016 }
case 231:
                        var57 = _closure1_slot22;
                        var56 = var57.can;
                        var54 = _closure1_slot31;
                        var55 = var54.MANAGE_CHANNELS;
                        var54 = _closure2_slot14;
                        var2 = var56.bind(var57)(var55, var54);
case 230:
                        if(!var2) { _fun0016_ip = 232; continue _fun0016 }
case 233:
                        var54 = _closure2_slot17;
                        var2 = var36 != var54;
case 232:
                        if(!var2) { _fun0016_ip = 234; continue _fun0016 }
case 235:
                        var55 = _closure2_slot17;
                        var54 = _closure1_slot20;
                        var54 = var55[var54];
                        var54 = var54.length;
                        var2 = var54 <= var21;
case 234:
                        var53 = var12;
                        var52 = var11;
                        var51 = var10;
                        var50 = var9;
                        var49 = var8;
                        var48 = var7;
                        var47 = var6;
                        var46 = var5;
                        var45 = var4;
                        var44 = var3;
                        if(!var2) { _fun0016_ip = 217; continue _fun0016 }
case 236:
                        var54 = var1.push;
                        var2 = {};
                        var2['kind'] = var18;
                        var55 = _closure2_slot14;
                        var55 = var55.id;
                        var2['guildId'] = var55;
                        var2 = var54.bind(var1)(var2);
                        var53 = var12;
                        var52 = var11;
                        var51 = var10;
                        var50 = var9;
                        var49 = var8;
                        var48 = var7;
                        var47 = var6;
                        var46 = var5;
                        var45 = var4;
                        var44 = var3;
                        _fun0016_ip = 217; continue _fun0016;
case 210:
                        var2 = _closure2_slot14;
                        var2 = var36 != var2;
                        if(!var2) { _fun0016_ip = 237; continue _fun0016 }
case 238:
                        var54 = _closure2_slot14;
                        var56 = var54.features;
                        var55 = var56.has;
                        var54 = _closure1_slot30;
                        var54 = var54.HUB;
                        var2 = var55.bind(var56)(var54);
case 237:
                        var53 = var12;
                        var52 = var11;
                        var51 = var10;
                        var50 = var9;
                        var49 = var8;
                        var48 = var7;
                        var47 = var6;
                        var46 = var5;
                        var45 = var4;
                        var44 = var3;
                        if(!var2) { _fun0016_ip = 217; continue _fun0016 }
case 239:
                        var54 = var1.push;
                        var2 = {};
                        var2['kind'] = var19;
                        var55 = _closure2_slot14;
                        var55 = var55.id;
                        var2['guildId'] = var55;
                        var2 = var54.bind(var1)(var2);
                        var53 = var12;
                        var52 = var11;
                        var51 = var10;
                        var50 = var9;
                        var49 = var8;
                        var48 = var7;
                        var47 = var6;
                        var46 = var5;
                        var45 = var4;
                        var44 = var3;
                        _fun0016_ip = 217; continue _fun0016;
case 208:
                        var2 = var27.length;
                        var58 = var39 < var2;
                        var55 = 0;
                        var54 = 0;
                        var2 = 0;
                        var57 = 0;
                        var56 = var5;
                        if(!var58) { _fun0016_ip = 240; continue _fun0016 }
case 241:
                        var59 = var27[var54];
                        var58 = _closure2_slot2;
                        var60 = var36 != var58;
                        if(!var60) { _fun0016_ip = 242; continue _fun0016 }
case 243:
                        var62 = _closure2_slot2;
                        var61 = var62.has;
                        var58 = var59.userId;
                        var60 = var61.bind(var62)(var58);
case 242:
                        var58 = var55;
                        if(var60) { _fun0016_ip = 244; continue _fun0016 }
case 245:
                        var60 = var1.push;
                        var60 = var60.bind(var1)(var59);
                        var58 = var55 + 1;
case 244:
                        var60 = var54 + 1;
                        var61 = var27.length;
                        var2 = var58;
                        var57 = var60;
                        var56 = var59;
                        if(!(var60 < var61)) { _fun0016_ip = 240; continue _fun0016 }
case 246:
                        var55 = var58;
                        var54 = var60;
                        var57 = var54;
                        var56 = var59;
                        var2 = var55;
                        if(var2 < var40) { _fun0016_ip = 241; continue _fun0016 }
case 240:
                        var54 = var26.length;
                        var54 = var39 < var54;
                        var53 = var12;
                        var52 = var11;
                        var51 = var10;
                        var50 = var9;
                        var49 = var8;
                        var48 = var2;
                        var47 = var57;
                        var46 = var56;
                        var45 = 0;
                        var44 = var3;
                        if(!var54) { _fun0016_ip = 217; continue _fun0016 }
case 247:
                        var55 = var2;
                        var54 = 0;
                        var53 = var12;
                        var52 = var11;
                        var51 = var10;
                        var50 = var9;
                        var49 = var8;
                        var48 = var55;
                        var47 = var57;
                        var46 = var56;
                        var45 = 0;
                        var44 = var3;
                        if(!(var2 < var40)) { _fun0016_ip = 217; continue _fun0016 }
case 248:
                        var58 = var26[var54];
                        var2 = _closure2_slot2;
                        var59 = var36 != var2;
                        if(!var59) { _fun0016_ip = 249; continue _fun0016 }
case 250:
                        var61 = _closure2_slot2;
                        var60 = var61.has;
                        var2 = var58.userId;
                        var59 = var60.bind(var61)(var2);
case 249:
                        var2 = var55;
                        if(var59) { _fun0016_ip = 251; continue _fun0016 }
case 252:
                        var59 = var1.push;
                        var59 = var59.bind(var1)(var58);
                        var2 = var55 + 1;
case 251:
                        var59 = var54 + 1;
                        var60 = var26.length;
                        var53 = var12;
                        var52 = var11;
                        var51 = var10;
                        var50 = var9;
                        var49 = var8;
                        var48 = var2;
                        var47 = var57;
                        var46 = var56;
                        var44 = var58;
                        var45 = var59;
                        if(!(var45 < var60)) { _fun0016_ip = 217; continue _fun0016 }
case 253:
                        var55 = var2;
                        var54 = var59;
                        var53 = var12;
                        var52 = var11;
                        var51 = var10;
                        var50 = var9;
                        var49 = var8;
                        var48 = var55;
                        var47 = var57;
                        var46 = var56;
                        var45 = var54;
                        var44 = var58;
                        if(var2 < var40) { _fun0016_ip = 248; continue _fun0016 }
case 254:
                        _fun0016_ip = 217; continue _fun0016;
case 206:
                        var2 = _closure2_slot1;
                        var53 = var12;
                        var52 = var11;
                        var51 = var10;
                        var50 = var9;
                        var49 = var8;
                        var48 = var7;
                        var47 = var6;
                        var46 = var5;
                        var45 = var4;
                        var44 = var3;
                        if(!(var36 != var2)) { _fun0016_ip = 217; continue _fun0016 }
case 255:
                        var54 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var22];
                        var56 = var54.bind(var37)(var2);
                        var55 = var56.getActiveTextChannels;
                        var54 = _closure2_slot1;
                        var57 = _closure1_slot18;
                        var2 = new Array(4);
                        var2[0] = var57;
                        var57 = _closure1_slot22;
                        var2[1] = var57;
                        var57 = _closure1_slot7;
                        var2[2] = var57;
                        var57 = _closure1_slot25;
                        var2[3] = var57;
                        var55 = var55.bind(var56)(var54, var2);
                        var56 = var41.Math;
                        var54 = var56.min;
                        var2 = var55.length;
                        var54 = var54.bind(var56)(var21, var2);
                        var56 = var39 < var54;
                        var2 = 0;
                        var53 = var12;
                        var52 = var11;
                        var51 = var55;
                        var50 = var54;
                        var49 = 0;
                        var48 = var7;
                        var47 = var6;
                        var46 = var5;
                        var45 = var4;
                        var44 = var3;
                        if(!var56) { _fun0016_ip = 217; continue _fun0016 }
case 256:
                        var57 = var1.push;
                        var56 = {};
                        var56['kind'] = var20;
                        var58 = _closure2_slot1;
                        var56['guildId'] = var58;
                        var58 = var55[var2];
                        var58 = var58.id;
                        var56['channelId'] = var58;
                        var56 = var57.bind(var1)(var56);
                        var2 = var2 + 1;
                        var53 = var12;
                        var52 = var11;
                        var51 = var55;
                        var50 = var54;
                        var48 = var7;
                        var47 = var6;
                        var46 = var5;
                        var45 = var4;
                        var44 = var3;
                        var49 = var2;
                        if(var49 < var54) { _fun0016_ip = 256; continue _fun0016 }
case 257:
                        _fun0016_ip = 217; continue _fun0016;
case 204:
                        var56 = var29;
                        var53 = var12;
                        var52 = var11;
                        var51 = var10;
                        var50 = var9;
                        var49 = var8;
                        var48 = var7;
                        var47 = var6;
                        var46 = var5;
                        var45 = var4;
                        var44 = var3;
                        for(var2 in var56)
case 258:
                        {
                            var53 = var12;
                            var52 = var11;
                            var51 = var10;
                            var50 = var9;
                            var49 = var8;
                            var48 = var7;
                            var47 = var6;
                            var46 = var5;
                            var45 = var4;
                            var44 = var3;
case 259:
                            var58 = var2;
                            var59 = var1.push;
                            var58 = var29[var58];
                            var58 = var59.bind(var1)(var58);
                            _fun0016_ip = 258; continue _fun0016;
case 202:
                            var56 = var28;
                            var53 = var12;
                            var52 = var11;
                            var51 = var10;
                            var50 = var9;
                            var49 = var8;
                            var48 = var7;
                            var47 = var6;
                            var46 = var5;
                            var45 = var4;
                            var44 = var3;
                            for(var2 in var56)
case 260:
                            {
                                var53 = var12;
                                var52 = var11;
                                var51 = var10;
                                var50 = var9;
                                var49 = var8;
                                var48 = var7;
                                var47 = var6;
                                var46 = var5;
                                var45 = var4;
                                var44 = var3;
case 261:
                                var58 = var2;
                                var59 = var1.push;
                                var58 = var28[var58];
                                var58 = var59.bind(var1)(var58);
                                _fun0016_ip = 260; continue _fun0016;
case 200:
                                var56 = var30;
                                var53 = var12;
                                var52 = var11;
                                var51 = var10;
                                var50 = var9;
                                var49 = var8;
                                var48 = var7;
                                var47 = var6;
                                var46 = var5;
                                var45 = var4;
                                var44 = var3;
                                for(var2 in var56)
case 262:
                                {
                                    var53 = var12;
                                    var52 = var11;
                                    var51 = var10;
                                    var50 = var9;
                                    var49 = var8;
                                    var48 = var7;
                                    var47 = var6;
                                    var46 = var5;
                                    var45 = var4;
                                    var44 = var3;
case 263:
                                    var58 = var2;
                                    var59 = var1.push;
                                    var58 = var30[var58];
                                    var58 = var59.bind(var1)(var58);
                                    _fun0016_ip = 262; continue _fun0016;
case 198:
                                    var56 = var32;
                                    var53 = var12;
                                    var52 = var11;
                                    var51 = var10;
                                    var50 = var9;
                                    var49 = var8;
                                    var48 = var7;
                                    var47 = var6;
                                    var46 = var5;
                                    var45 = var4;
                                    var44 = var3;
                                    for(var2 in var56)
case 264:
                                    {
                                        var53 = var12;
                                        var52 = var11;
                                        var51 = var10;
                                        var50 = var9;
                                        var49 = var8;
                                        var48 = var7;
                                        var47 = var6;
                                        var46 = var5;
                                        var45 = var4;
                                        var44 = var3;
case 265:
                                        var60 = var2;
                                        var59 = var1.push;
                                        var58 = {};
                                        var65 = var32[var60];
                                        var66 = var58;
                                        var60 = copyDataProperties(var66, var65);
                                        var58[var23] = var24;
                                        var58 = var59.bind(var1)(var58);
                                        _fun0016_ip = 264; continue _fun0016;
case 196:
                                        var61 = var31;
                                        var57 = var12;
                                        var56 = var11;
                                        var53 = var57;
                                        var52 = var56;
                                        var51 = var10;
                                        var50 = var9;
                                        var49 = var8;
                                        var48 = var7;
                                        var47 = var6;
                                        var46 = var5;
                                        var45 = var4;
                                        var44 = var3;
                                        for(var58 in var61)
case 266:
                                        {
                                            var53 = var57;
                                            var52 = var56;
                                            var51 = var10;
                                            var50 = var9;
                                            var49 = var8;
                                            var48 = var7;
                                            var47 = var6;
                                            var46 = var5;
                                            var45 = var4;
                                            var44 = var3;
case 267:
                                            var2 = var58;
                                            var54 = _closure1_slot34;
                                            var2 = var31[var2];
                                            var55 = var54.bind(var37)(var2);
                                            var54 = var55.bind(var37)();
                                            var2 = var54.done;
                                            var57 = var54;
                                            var56 = var55;
                                            var54 = var57;
                                            if(var2) { _fun0016_ip = 266; continue _fun0016 }
case 268:
                                            var63 = var54.value;
                                            var2 = var1.push;
                                            var2 = var2.bind(var1)(var63);
                                            var63 = var55.bind(var37)();
                                            var2 = var63.done;
                                            var57 = var63;
                                            var56 = var55;
                                            var54 = var57;
                                            if(var2) { _fun0016_ip = 266; continue _fun0016 }
case 269:
                                            _fun0016_ip = 268; continue _fun0016;
case 194:
                                            var56 = var32;
                                            var53 = var12;
                                            var52 = var11;
                                            var51 = var10;
                                            var50 = var9;
                                            var49 = var8;
                                            var48 = var7;
                                            var47 = var6;
                                            var46 = var5;
                                            var45 = var4;
                                            var44 = var3;
                                            for(var2 in var56)
case 270:
                                            {
                                                var53 = var12;
                                                var52 = var11;
                                                var51 = var10;
                                                var50 = var9;
                                                var49 = var8;
                                                var48 = var7;
                                                var47 = var6;
                                                var46 = var5;
                                                var45 = var4;
                                                var44 = var3;
case 271:
                                                var58 = var2;
                                                var59 = var1.push;
                                                var58 = var32[var58];
                                                var58 = var59.bind(var1)(var58);
                                                _fun0016_ip = 270; continue _fun0016;
case 192:
                                                var54 = var34.forEach;
                                                var2 = function(arg1) {
                                                    var3 = _closure4_slot12;
                                                    var2 = var3.push;
                                                    var1 = {'kind': 'guild-event', 'event': null, 'isLive': false};
                                                    var4 = arg1;
                                                    var1['event'] = var4;
                                                    var1 = var2.bind(var3)(var1);
                                                    return var1;
                                                };
                                                var2 = var54.bind(var34)(var2);
                                                var53 = var12;
                                                var52 = var11;
                                                var51 = var10;
                                                var50 = var9;
                                                var49 = var8;
                                                var48 = var7;
                                                var47 = var6;
                                                var46 = var5;
                                                var45 = var4;
                                                var44 = var3;
                                                _fun0016_ip = 217; continue _fun0016;
case 190:
                                                var54 = var35.forEach;
                                                var2 = function(arg1) {
                                                    var3 = _closure4_slot12;
                                                    var2 = var3.push;
                                                    var1 = {'kind': 'guild-event', 'event': null, 'isLive': true};
                                                    var4 = arg1;
                                                    var1['event'] = var4;
                                                    var1 = var2.bind(var3)(var1);
                                                    return var1;
                                                };
                                                var2 = var54.bind(var35)(var2);
                                                var53 = var12;
                                                var52 = var11;
                                                var51 = var10;
                                                var50 = var9;
                                                var49 = var8;
                                                var48 = var7;
                                                var47 = var6;
                                                var46 = var5;
                                                var45 = var4;
                                                var44 = var3;
                                                _fun0016_ip = 217; continue _fun0016;
case 188:
                                                var56 = var33;
                                                var53 = var12;
                                                var52 = var11;
                                                var51 = var10;
                                                var50 = var9;
                                                var49 = var8;
                                                var48 = var7;
                                                var47 = var6;
                                                var46 = var5;
                                                var45 = var4;
                                                var44 = var3;
                                                for(var2 in var56)
case 272:
                                                {
                                                    var53 = var12;
                                                    var52 = var11;
                                                    var51 = var10;
                                                    var50 = var9;
                                                    var49 = var8;
                                                    var48 = var7;
                                                    var47 = var6;
                                                    var46 = var5;
                                                    var45 = var4;
                                                    var44 = var3;
case 273:
                                                    var58 = var2;
                                                    var59 = var1.push;
                                                    var58 = var33[var58];
                                                    var58 = var59.bind(var1)(var58);
                                                    _fun0016_ip = 272; continue _fun0016;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
case 217:
                        var54 = var25.bind(var37)();
                        var2 = var54.done;
                        var12 = var53;
                        var11 = var52;
                        var10 = var51;
                        var9 = var50;
                        var8 = var49;
                        var7 = var48;
                        var6 = var47;
                        var5 = var46;
                        var4 = var45;
                        var3 = var44;
                        var13 = var54;
                        if(!var2) { _fun0016_ip = 187; continue _fun0016 }
case 186:
                        return var1;
                    }
                };
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var8 = var12.bind(var14)(var4, var8);
            var _closure2_slot26 = var8;
            var12 = var14.useState;
            var4 = function() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var1 = _closure2_slot24;
                    if(var1) { _fun0023_ip = 274; continue _fun0023 }
case 55:
                    var1 = _closure2_slot26;
                    var7 = undefined;
                    var1 = var1.bind(var7)();
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0023_ip = 275; continue _fun0023 }
case 3:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 28;
                    var2 = var4[var2];
                    var4 = var3.bind(var7)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var8 = 'GUILD_HEADER_ACTIVE_CHANNELS_COUNT';
                    var2['type'] = var8;
                    var6 = _closure1_slot36;
                    var6 = var6.bind(var7)(var1);
                    var2['count'] = var6;
                    var5 = _closure2_slot1;
                    var2['guildId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 275:
                    return var1;
case 274:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var13 = var12.bind(var14)(var4);
            var12 = _closure1_slot3;
            var4 = 2;
            var13 = var12.bind(var5)(var13, var4);
            var4 = 0;
            var4 = var13[var4];
            var12 = 1;
            var12 = var13[var12];
            var _closure2_slot27 = var12;
            var13 = var14.useCallback;
            var12 = new Array(2);
            var12[0] = var8;
            var12[1] = var10;
            var8 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var2 = _closure2_slot26;
                    var1 = undefined;
                    var7 = var2.bind(var1)();
                    var2 = _closure2_slot27;
                    var2 = var2.bind(var1)(var7);
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0024_ip = 274; continue _fun0024 }
case 39:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 28;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var8 = 'GUILD_HEADER_ACTIVE_CHANNELS_COUNT';
                    var2['type'] = var8;
                    var6 = _closure1_slot36;
                    var6 = var6.bind(var1)(var7);
                    var2['count'] = var6;
                    var5 = _closure2_slot1;
                    var2['guildId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 274:
                    return var1;
                }
            };
            var8 = var13.bind(var14)(var8, var12);
            var _closure2_slot28 = var8;
            var13 = var14.useEffect;
            var12 = new Array(4);
            var12[0] = var10;
            var12[1] = var2;
            var12[2] = var7;
            var12[3] = var8;
            var7 = function() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot25;
                    var3 = var3.current;
                    var3 = var3.guildId;
                    if(!(var4 !== var3)) { _fun0025_ip = 276; continue _fun0025 }
case 172:
                    var4 = _closure2_slot25;
                    var3 = {};
                    var5 = _closure2_slot1;
                    var3['guildId'] = var5;
                    var5 = false;
                    var3['hasComputed'] = var5;
                    var4['current'] = var3;
case 276:
                    var3 = _closure2_slot25;
                    var3 = var3.current;
                    var3 = var3.hasComputed;
                    if(var3) { _fun0025_ip = 277; continue _fun0025 }
case 278:
                    var4 = _closure2_slot24;
                    var3 = undefined;
                    if(var4) { _fun0025_ip = 177; continue _fun0025 }
case 279:
                    var4 = _closure2_slot28;
                    var4 = var4.bind(var3)();
                    _fun0025_ip = 280; continue _fun0025;
case 177:
                    return var3;
case 277:
                    var2 = _closure2_slot20;
                    if(var2) { _fun0025_ip = 49; continue _fun0025 }
case 280:
                    var2 = undefined;
                    return var2;
case 49:
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        var2 = _closure2_slot28;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = 50;
                    var2 = var5.bind(var4)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var7 = var13.bind(var14)(var7, var12);
            var7 = null;
            var12 = var7 == var11;
            var7 = undefined;
            if(var12) { _fun0005_ip = 281; continue _fun0005 }
case 282:
            var7 = var11.id;
case 281:
            var6 = function useSpammyStoresVersion(arg1, arg2, arg3, arg4) {
                var8 = arg1;
                var7 = arg2;
                var2 = arg3;
                var6 = arg4;
                var _closure3_slot0 = var8;
                var _closure3_slot1 = var7;
                var _closure3_slot2 = var2;
                var _closure3_slot3 = var6;
                var4 = _closure1_slot4;
                var5 = var4.useRef;
                var3 = -1;
                var3 = var5.bind(var4)(var3);
                var _closure3_slot4 = var3;
                var5 = var4.useRef;
                var3 = 0;
                var3 = var5.bind(var4)(var3);
                var _closure3_slot5 = var3;
                var5 = var4.useCallback;
                var3 = new Array(4);
                var3[0] = var8;
                var3[1] = var7;
                var3[2] = var6;
                var3[3] = var2;
                var2 = function() {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                        var2 = _closure3_slot4;
                        var3 = var2.current;
                        var2 = -1;
                        if(!(var2 !== var3)) { _fun0026_ip = 2; continue _fun0026 }
case 283:
                        var2 = global;
                        var4 = var2.clearTimeout;
                        var2 = _closure3_slot4;
                        var3 = var2.current;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
case 2:
                        var2 = _closure3_slot2;
                        if(!var2) { _fun0026_ip = 284; continue _fun0026 }
case 61:
                        var2 = _closure3_slot4;
                        var1 = global;
                        var5 = var1.setTimeout;
                        var4 = undefined;
                        var3 = function() {
                            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                                var2 = _closure1_slot26;
                                var1 = var2.getUserStoreVersion;
                                var2 = var1.bind(var2)();
                                var3 = _closure1_slot18;
                                var1 = var3.getPrivateChannelsVersion;
                                var1 = var1.bind(var3)();
                                var2 = var2 + var1;
                                var3 = _closure1_slot27;
                                var1 = var3.getVoiceStateVersion;
                                var1 = var1.bind(var3)();
                                var3 = var2 + var1;
                                var2 = _closure3_slot0;
                                var7 = null;
                                var5 = var7 != var2;
                                var6 = -1;
                                var2 = var6;
                                if(!var5) { _fun0027_ip = 145; continue _fun0027 }
case 175:
                                var5 = _closure3_slot1;
                                var5 = var7 != var5;
                                var2 = var6;
                                if(!var5) { _fun0027_ip = 145; continue _fun0027 }
case 284:
                                var7 = _closure1_slot16;
                                var6 = var7.getProps;
                                var5 = _closure3_slot0;
                                var4 = _closure3_slot1;
                                var4 = var6.bind(var7)(var5, var4);
                                var2 = var4.version;
case 145:
                                var3 = var3 + var2;
                                var2 = _closure3_slot5;
                                var2 = var2.current;
                                if(!(var2 !== var3)) { _fun0027_ip = 285; continue _fun0027 }
case 286:
                                var2 = _closure3_slot5;
                                var2['current'] = var3;
                                var2 = _closure3_slot3;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
case 285:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = 1000;
                        var1 = var5.bind(var4)(var3, var1);
                        var2['current'] = var1;
case 284:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = var5.bind(var4)(var2, var3);
                var _closure3_slot6 = var5;
                var3 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    var4 = _closure1_slot33;
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.addChangeListener;
                        var1 = _closure3_slot6;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    var1 = function() {
                        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                            var2 = _closure3_slot4;
                            var3 = var2.current;
                            var2 = -1;
                            if(!(var2 !== var3)) { _fun0028_ip = 2; continue _fun0028 }
case 283:
                            var2 = global;
                            var3 = var2.clearTimeout;
                            var1 = _closure3_slot4;
                            var2 = var1.current;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
case 2:
                            var3 = _closure1_slot33;
                            var2 = var3.forEach;
                            var1 = function(arg1) {
                                var3 = arg1;
                                var2 = var3.removeChangeListener;
                                var1 = _closure3_slot6;
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            var38 = undefined;
            var37 = var10;
            var36 = var7;
            var35 = var9;
            var34 = var8;
            var6 = var38[var6](var37, var36, var35, var34, var33);
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 40;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var3 = var1.bind(var5)(var3);
            var1 = new Array(2);
            var1[0] = var4;
            if(var2) { _fun0005_ip = 287; continue _fun0005 }
case 288:
            var3 = var3.hasComputed;
            var2 = !var3;
case 287:
            var1[1] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
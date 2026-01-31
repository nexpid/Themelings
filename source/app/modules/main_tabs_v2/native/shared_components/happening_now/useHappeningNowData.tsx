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
    var4 = 42;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useHappeningNowData(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var20 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var20;
            var10 = var1.guildId;
            var _closure2_slot1 = var10;
            var19 = var1.withoutUserCards;
            var _closure2_slot2 = var19;
            var2 = var1.showMultipleActivitiesPerChannel;
            var5 = undefined;
            var23 = var5 !== var2;
            if(!var23) { _fun0005_ip = 5; continue _fun0005 }
case 2:
            var23 = var2;
case 5:
            var _closure2_slot3 = var23;
            var9 = var1.isFocused;
            var _closure2_slot4 = var9;
            var4 = var20.has;
            var2 = _closure1_slot28;
            var3 = var2.LIVE_GUILD_STAGE;
            var29 = var4.bind(var20)(var3);
            var _closure2_slot5 = var29;
            var4 = var20.has;
            var3 = var2.EMBEDDED_ACTIVITY;
            var24 = var4.bind(var20)(var3);
            var _closure2_slot6 = var24;
            var4 = var20.has;
            var3 = var2.STREAMS;
            var25 = var4.bind(var20)(var3);
            var _closure2_slot7 = var25;
            var4 = var20.has;
            var3 = var2.USER_CUSTOM_STATUS;
            var22 = var4.bind(var20)(var3);
            var _closure2_slot8 = var22;
            var4 = var20.has;
            var3 = var2.ACTIVITIES;
            var21 = var4.bind(var20)(var3);
            var _closure2_slot9 = var21;
            var3 = var20.has;
            var2 = var2.USER;
            var26 = var3.bind(var20)(var2);
            var _closure2_slot10 = var26;
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
            var11[0] = var20;
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
            var18 = var12.bind(var16)(var11, var8);
            var _closure2_slot14 = var18;
            var8 = var7[var14];
            var17 = var4.bind(var5)(var8);
            var16 = var17.useStateFromStores;
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
            var11 = var16.bind(var17)(var12, var11);
            var _closure2_slot15 = var11;
            var12 = 25;
            var12 = var7[var12];
            var16 = var4.bind(var5)(var12);
            var12 = var16.useFirstGloballyViewbleGuildChannelId;
            var16 = var12.bind(var16)(var10);
            var _closure2_slot16 = var16;
            var12 = var7[var14];
            var27 = var4.bind(var5)(var12);
            var17 = var27.useStateFromStores;
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
            var17 = var17.bind(var27)(var12, var8);
            var _closure2_slot17 = var17;
            var12 = var13.useCallback;
            var8 = new Array(6);
            var8[0] = var2;
            var8[1] = var11;
            var8[2] = var16;
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
            var16 = var13.useEffect;
            var12 = new Array(1);
            var12[0] = var3;
            var8 = function() {
                var2 = _closure2_slot18;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var8 = var16.bind(var13)(var8, var12);
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
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = var12[var14];
            var15 = var13.bind(var5)(var3);
            var8 = var15.useStateFromStores;
            var3 = _closure1_slot16;
            var4 = new Array(1);
            var4[0] = var3;
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
            var8 = var8.bind(var15)(var4, var3);
            var3 = var12[var14];
            var28 = var13.bind(var5)(var3);
            var27 = var28.useStateFromStores;
            var16 = _closure1_slot7;
            var15 = new Array(1);
            var15[0] = var16;
            var4 = new Array(2);
            var4[0] = var10;
            var4[1] = var20;
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
            var3 = var27.bind(var28)(var15, var3, var4);
            var4 = var12[var14];
            var30 = var13.bind(var5)(var4);
            var28 = var30.useStateFromStores;
            var15 = _closure1_slot13;
            var27 = new Array(1);
            var27[0] = var15;
            var4 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getUserAffinities;
                var1 = var1.bind(var2)();
                return var1;
            };
            var31 = var28.bind(var30)(var27, var4);
            var _closure2_slot21 = var31;
            var30 = _closure1_slot4;
            var28 = var30.useMemo;
            var27 = new Array(1);
            var27[0] = var31;
            var4 = function() {
                var3 = _closure2_slot21;
                var2 = function getHFUFromAffinities(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var4 = arg1;
                        var1 = null;
                        var1 = var1 != var4;
                        if(!var1) { _fun0013_ip = 39; continue _fun0013 }
case 76:
                        var3 = var4.some;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.userSegment;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 39;
                            var3 = var3[var1];
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
                            var1 = var1.AffineUserSegment;
                            var1 = var1.HFU_MAU;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var1 = var3.bind(var4)(var2);
case 39:
                        return var1;
                    }
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var4 = var28.bind(var30)(var4, var27);
            var _closure2_slot22 = var4;
            var27 = var12[var14];
            var30 = var13.bind(var5)(var27);
            var28 = var30.useStateFromStoresObject;
            var27 = new Array(1);
            var27[0] = var15;
            var15 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getUserFlags;
                var1 = var1.bind(var2)();
                return var1;
            };
            var30 = var28.bind(var30)(var27, var15);
            var _closure2_slot23 = var30;
            var15 = var12[var14];
            var32 = var13.bind(var5)(var15);
            var28 = var32.useStateFromStoresArray;
            var15 = _closure1_slot24;
            var27 = new Array(1);
            var27[0] = var15;
            var15 = function() {
                var2 = _closure1_slot24;
                var1 = var2.getFriendIDs;
                var1 = var1.bind(var2)();
                return var1;
            };
            var28 = var28.bind(var32)(var27, var15);
            var _closure2_slot24 = var28;
            var15 = var12[var14];
            var34 = var13.bind(var5)(var15);
            var33 = var34.useStateFromStoresObject;
            var15 = _closure1_slot22;
            var32 = new Array(1);
            var32[0] = var15;
            var27 = new Array(1);
            var27[0] = var10;
            var15 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = {};
                    var3 = _closure1_slot22;
                    var2 = var3.getChannelsVersion;
                    var2 = var2.bind(var3)();
                    var1['permissionChannelsVersion'] = var2;
                    var5 = _closure2_slot1;
                    var2 = null;
                    var5 = var2 != var5;
                    if(!var5) { _fun0014_ip = 77; continue _fun0014 }
case 78:
                    var5 = _closure1_slot22;
                    var4 = var5.getGuildVersion;
                    var3 = _closure2_slot1;
                    var2 = var4.bind(var5)(var3);
case 77:
                    var1['permissionGuildVersion'] = var2;
                    return var1;
                }
            };
            var15 = var33.bind(var34)(var32, var15, var27);
            var27 = var12[var14];
            var34 = var13.bind(var5)(var27);
            var33 = var34.useStateFromStores;
            var32 = new Array(1);
            var32[0] = var16;
            var27 = new Array(1);
            var27[0] = var10;
            var16 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0015_ip = 54; continue _fun0015 }
case 44:
                    var4 = _closure1_slot7;
                    var3 = var4.getActiveChannelIds;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 54:
                    return var1;
                }
            };
            var16 = var33.bind(var34)(var32, var16, var27);
            var27 = var12[var14];
            var35 = var13.bind(var5)(var27);
            var34 = var35.useStateFromStoresArray;
            var27 = _closure1_slot11;
            var33 = new Array(1);
            var33[0] = var27;
            var32 = new Array(1);
            var32[0] = var10;
            var27 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getGuildScheduledEventsForGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var27 = var34.bind(var35)(var33, var27, var32);
            var _closure2_slot25 = var27;
            var12 = var12[var14];
            var33 = var13.bind(var5)(var12);
            var32 = var33.useStateFromStoresArray;
            var12 = _closure1_slot5;
            var14 = new Array(1);
            var14[0] = var12;
            var13 = new Array(1);
            var13[0] = var10;
            var12 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0016_ip = 53; continue _fun0016 }
case 68:
                    var3 = _closure1_slot5;
                    var2 = var3.getEmbeddedActivitiesForGuild;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
                    _fun0016_ip = 79; continue _fun0016;
case 53:
                    var1 = new Array(0);
case 79:
                    return var1;
                }
            };
            var13 = var32.bind(var33)(var14, var12, var13);
            var2 = !var2;
            if(var2) { _fun0005_ip = 80; continue _fun0005 }
case 81:
            var2 = var8;
case 80:
            if(var2) { _fun0005_ip = 82; continue _fun0005 }
case 83:
            var2 = var3;
case 82:
            var _closure2_slot26 = var2;
            var14 = _closure1_slot4;
            var8 = var14.useRef;
            var3 = {};
            var3['guildId'] = var10;
            var12 = false;
            var3['hasComputed'] = var12;
            var3 = var8.bind(var14)(var3);
            var _closure2_slot27 = var3;
            var12 = var14.useCallback;
            var8 = new Array(21);
            var8[0] = var10;
            var8[1] = var31;
            var8[2] = var30;
            var8[3] = var11;
            var8[4] = var29;
            var8[5] = var28;
            var8[6] = var27;
            var8[7] = var26;
            var8[8] = var25;
            var8[9] = var24;
            var8[10] = var23;
            var8[11] = var22;
            var8[12] = var21;
            var8[13] = var20;
            var8[14] = var19;
            var8[15] = var18;
            var8[16] = var17;
            var8[17] = var16;
            var8[18] = var15;
            var8[19] = var13;
            var8[20] = var4;
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
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var2 = function addUser(arg1, arg2, arg3) {
                            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                                var3 = arg1;
                                var9 = arg2;
                                var13 = arg3;
                                var _closure5_slot0 = var3;
                                var _closure5_slot1 = var13;
                                var2 = _closure1_slot24;
                                var1 = var2.isBlockedOrIgnored;
                                var1 = var1.bind(var2)(var3);
                                if(var1) { _fun0018_ip = 84; continue _fun0018 }
case 85:
                                var5 = _closure1_slot18;
                                var2 = var5.getChannel;
                                var7 = null;
                                var6 = var7 == var13;
                                var4 = undefined;
                                var1 = undefined;
                                if(var6) { _fun0018_ip = 35; continue _fun0018 }
case 77:
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
                                if(var2) { _fun0018_ip = 84; continue _fun0018 }
case 86:
                                if(!(var7 != var1)) { _fun0018_ip = 43; continue _fun0018 }
case 87:
                                var2 = var1.isGroupDM;
                                var2 = var2.bind(var1)();
                                if(var2) { _fun0018_ip = 19; continue _fun0018 }
case 67:
                                var6 = _closure1_slot22;
                                var5 = var6.can;
                                var2 = _closure1_slot31;
                                var2 = var2.CONNECT;
                                var2 = var5.bind(var6)(var2, var1);
                                if(!var2) { _fun0018_ip = 43; continue _fun0018 }
case 15:
                                var6 = _closure1_slot22;
                                var5 = var6.can;
                                var2 = _closure1_slot31;
                                var2 = var2.VIEW_CHANNEL;
                                var2 = var5.bind(var6)(var2, var1);
                                if(!var2) { _fun0018_ip = 43; continue _fun0018 }
case 19:
                                if(!(var7 == var13)) { _fun0018_ip = 88; continue _fun0018 }
case 43:
                                if(!(var7 == var9)) { _fun0018_ip = 89; continue _fun0018 }
case 90:
                                var2 = _closure2_slot10;
                                if(!var2) { _fun0018_ip = 84; continue _fun0018 }
case 91:
                                var6 = _closure1_slot23;
                                var5 = var6.getStatus;
                                var2 = _closure2_slot1;
                                var5 = var5.bind(var6)(var3, var2);
                                if(!(var7 != var5)) { _fun0018_ip = 84; continue _fun0018 }
case 92:
                                var2 = _closure1_slot32;
                                var2 = var2.OFFLINE;
                                if(!(var5 !== var2)) { _fun0018_ip = 93; continue _fun0018 }
case 94:
                                var6 = _closure4_slot8;
                                var5 = var6.push;
                                var2 = {};
                                var12 = 'user';
                                var2['kind'] = var12;
                                var2['userId'] = var3;
                                var12 = _closure2_slot1;
                                var2['guildId'] = var12;
                                var2 = var5.bind(var6)(var2);
                                _fun0018_ip = 84; continue _fun0018;
case 93:
                                var6 = _closure4_slot9;
                                var5 = var6.push;
                                var2 = {};
                                var12 = 'user';
                                var2['kind'] = var12;
                                var2['userId'] = var3;
                                var11 = _closure2_slot1;
                                var2['guildId'] = var11;
                                var2 = var5.bind(var6)(var2);
                                _fun0018_ip = 84; continue _fun0018;
case 89:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 34;
                                var2 = var6[var2];
                                var5 = var5.bind(var4)(var2);
                                var2 = var5.isActivityPermanentCustomStatus;
                                var2 = var2.bind(var5)(var9);
                                if(var2) { _fun0018_ip = 95; continue _fun0018 }
case 96:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 35;
                                var2 = var6[var2];
                                var5 = var5.bind(var4)(var2);
                                var2 = var5.isActivityTemporaryCustomStatus;
                                var2 = var2.bind(var5)(var9);
                                if(var2) { _fun0018_ip = 97; continue _fun0018 }
case 98:
                                var2 = _closure2_slot9;
                                if(!var2) { _fun0018_ip = 84; continue _fun0018 }
case 99:
                                var5 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var2 = 36;
                                var2 = var11[var2];
                                var5 = var5.bind(var4)(var2);
                                var2 = _closure1_slot29;
                                var2 = var2.EMBEDDED;
                                var2 = var5.bind(var4)(var9, var2);
                                if(!var2) { _fun0018_ip = 100; continue _fun0018 }
case 101:
                                var12 = _closure1_slot18;
                                var11 = var12.getChannel;
                                var15 = _closure1_slot27;
                                var14 = var15.getVoiceStateForSession;
                                var5 = var9.session_id;
                                var14 = var14.bind(var15)(var3, var5);
                                var15 = var7 == var14;
                                var5 = undefined;
                                if(var15) { _fun0018_ip = 102; continue _fun0018 }
case 103:
                                var5 = var14.channelId;
case 102:
                                var12 = var11.bind(var12)(var5);
                                var5 = var7 == var12;
                                var11 = undefined;
                                if(var5) { _fun0018_ip = 104; continue _fun0018 }
case 105:
                                var5 = var12.getGuildId;
                                var11 = var5.bind(var12)();
case 104:
                                var5 = _closure2_slot1;
                                var2 = var11 !== var5;
case 100:
                                if(var2) { _fun0018_ip = 84; continue _fun0018 }
case 106:
                                var5 = _closure4_slot6;
                                var2 = {};
                                var2['userId'] = var3;
                                var11 = _closure2_slot1;
                                var2['guildId'] = var11;
                                var11 = 'activity';
                                var2['kind'] = var11;
                                var2['activity'] = var9;
                                var5[var3] = var2;
                                _fun0018_ip = 84; continue _fun0018;
case 97:
                                var2 = _closure2_slot8;
                                if(!var2) { _fun0018_ip = 84; continue _fun0018 }
case 107:
                                var5 = _closure4_slot7;
                                var2 = {};
                                var2['userId'] = var3;
                                var6 = _closure2_slot1;
                                var2['guildId'] = var6;
                                var6 = 'activity';
                                var2['kind'] = var6;
                                var2['activity'] = var9;
                                var5[var3] = var2;
                                _fun0018_ip = 84; continue _fun0018;
case 95:
                                var2 = _closure2_slot8;
                                if(!var2) { _fun0018_ip = 84; continue _fun0018 }
case 108:
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
                                _fun0018_ip = 84; continue _fun0018;
case 88:
                                var11 = _closure1_slot14;
                                var5 = var11.getStreamForUser;
                                var2 = _closure2_slot1;
                                if(!(var7 == var2)) { _fun0018_ip = 109; continue _fun0018 }
case 110:
                                var12 = var7 == var1;
                                var2 = undefined;
                                if(var12) { _fun0018_ip = 111; continue _fun0018 }
case 112:
                                var12 = var1.getGuildId;
                                var2 = var12.bind(var1)();
case 111:
                                _fun0018_ip = 113; continue _fun0018;
case 109:
                                var2 = _closure2_slot1;
case 113:
                                var5 = var5.bind(var11)(var3, var2);
                                if(!(var7 != var5)) { _fun0018_ip = 114; continue _fun0018 }
case 115:
                                var2 = _closure2_slot7;
                                if(var2) { _fun0018_ip = 116; continue _fun0018 }
case 114:
                                if(!(var7 != var1)) { _fun0018_ip = 84; continue _fun0018 }
case 117:
                                var14 = _closure4_slot1;
                                var12 = var14.has;
                                var11 = var1.id;
                                var11 = var12.bind(var14)(var11);
                                if(var11) { _fun0018_ip = 84; continue _fun0018 }
case 118:
                                var11 = var1.isGuildStageVoice;
                                var11 = var11.bind(var1)();
                                if(var11) { _fun0018_ip = 119; continue _fun0018 }
case 120:
                                var11 = _closure2_slot6;
                                if(!var11) { _fun0018_ip = 121; continue _fun0018 }
case 122:
                                var14 = _closure1_slot5;
                                var12 = var14.getEmbeddedActivitiesForChannel;
                                var11 = var1.id;
                                var16 = var12.bind(var14)(var11);
                                var11 = _closure2_slot3;
                                if(var11) { _fun0018_ip = 123; continue _fun0018 }
case 124:
                                var12 = _closure1_slot0;
                                var14 = _closure1_slot2;
                                var11 = 33;
                                var11 = var14[var11];
                                var12 = var12.bind(var4)(var11);
                                var11 = var12.findActivityWithMostNonBlockedOrIgnoredParticipants;
                                var11 = var11.bind(var12)(var16);
                                if(!(var7 !== var11)) { _fun0018_ip = 121; continue _fun0018 }
case 125:
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
                                _fun0018_ip = 121; continue _fun0018;
case 123:
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
case 121:
                                var12 = _closure4_slot3;
                                var11 = var1.id;
                                var10 = {};
                                var14 = 'voice';
                                var10['kind'] = var14;
                                var10['userId'] = var3;
                                var10['voiceState'] = var13;
                                var13 = _closure2_slot1;
                                if(!(var7 == var13)) { _fun0018_ip = 126; continue _fun0018 }
case 127:
                                var13 = var7 == var1;
                                var14 = undefined;
                                if(var13) { _fun0018_ip = 128; continue _fun0018 }
case 129:
                                var13 = var1.getGuildId;
                                var14 = var13.bind(var1)();
case 128:
                                _fun0018_ip = 130; continue _fun0018;
case 126:
                                var14 = _closure2_slot1;
case 130:
                                var15 = var7 != var14;
                                var13 = undefined;
                                if(!var15) { _fun0018_ip = 131; continue _fun0018 }
case 132:
                                var13 = var14;
case 131:
                                var10['guildId'] = var13;
                                var12[var11] = var10;
                                _fun0018_ip = 84; continue _fun0018;
case 119:
                                var11 = _closure1_slot24;
                                var10 = var11.isFriend;
                                var10 = var10.bind(var11)(var3);
                                if(var10) { _fun0018_ip = 133; continue _fun0018 }
case 134:
                                return var4;
case 133:
                                var12 = _closure1_slot12;
                                var11 = var12.getStageInstanceByChannel;
                                var10 = var1.id;
                                var10 = var11.bind(var12)(var10);
                                if(!(var7 != var10)) { _fun0018_ip = 135; continue _fun0018 }
case 136:
                                var12 = _closure1_slot22;
                                var11 = var12.can;
                                var8 = _closure1_slot31;
                                var8 = var8.CONNECT;
                                var8 = var11.bind(var12)(var8, var1);
                                if(var8) { _fun0018_ip = 137; continue _fun0018 }
case 138:
                                return var4;
case 137:
                                var8 = _closure4_slot2;
                                var2 = var1.id;
                                var1 = {};
                                var11 = 'live-guild-stage';
                                var1['kind'] = var11;
                                var1['stage'] = var10;
                                var8[var2] = var1;
                                _fun0018_ip = 84; continue _fun0018;
case 135:
                                return var4;
case 116:
                                var2 = _closure4_slot5;
                                var1 = {};
                                var1['userId'] = var3;
                                var8 = _closure2_slot1;
                                var1['guildId'] = var8;
                                var8 = 'activity';
                                var1['kind'] = var8;
                                var10 = var7 != var9;
                                var8 = undefined;
                                if(!var10) { _fun0018_ip = 139; continue _fun0018 }
case 140:
                                var8 = var9;
case 139:
                                var1['activity'] = var8;
                                var8 = _closure2_slot1;
                                if(!(var7 != var8)) { _fun0018_ip = 141; continue _fun0018 }
case 142:
                                var8 = var7 == var5;
                                var7 = undefined;
                                if(var8) { _fun0018_ip = 143; continue _fun0018 }
case 144:
                                var7 = var5.guildId;
case 143:
                                var6 = _closure2_slot1;
                                var4 = undefined;
                                if(!(var7 === var6)) { _fun0018_ip = 145; continue _fun0018 }
case 141:
                                var4 = var5;
case 145:
                                var1['stream'] = var4;
                                var2[var3] = var1;
case 84:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var _closure4_slot13 = var2;
                        var1 = _closure2_slot27;
                        var3 = var1.current;
                        var1 = _closure2_slot1;
                        var3['guildId'] = var1;
                        var1 = _closure2_slot27;
                        var3 = var1.current;
                        var1 = true;
                        var3['hasComputed'] = var1;
                        var45 = global;
                        var1 = var45.Set;
                        var3 = var1.prototype;
                        var3 = Object.create(var3, {constructor: {value: var1}});
                        var73 = var3;
                        var1 = new var73[var1](var72);
                        var3 = var1 instanceof Object ? var1 : var3;
                        var _closure4_slot0 = var3;
                        var5 = var45.Math;
                        var4 = var5.min;
                        var1 = _closure2_slot21;
                        var1 = var1.length;
                        var44 = 50;
                        var4 = var4.bind(var5)(var1, var44);
                        var43 = 0;
                        var5 = var43 < var4;
                        var1 = 0;
                        if(!var5) { _fun0017_ip = 63; continue _fun0017 }
case 146:
                        var6 = var3.add;
                        var5 = _closure2_slot21;
                        var5 = var5[var1];
                        var5 = var5.otherUserId;
                        var5 = var6.bind(var3)(var5);
                        var1 = var1 + 1;
                        if(var1 < var4) { _fun0017_ip = 146; continue _fun0017 }
case 63:
                        var4 = _closure1_slot34;
                        var1 = _closure2_slot24;
                        var41 = undefined;
                        var5 = var4.bind(var41)(var1);
                        var4 = var5.bind(var41)();
                        var1 = var4.done;
                        if(var1) { _fun0017_ip = 147; continue _fun0017 }
case 148:
                        var6 = var4.value;
                        var1 = var3.add;
                        var1 = var1.bind(var3)(var6);
                        var6 = var5.bind(var41)();
                        var1 = var6.done;
                        var4 = var6;
                        if(!var1) { _fun0017_ip = 148; continue _fun0017 }
case 147:
                        var4 = _closure1_slot18;
                        var1 = var4.getMutablePrivateChannels;
                        var8 = var1.bind(var4)();
                        var6 = var8;
                        for(var1 in var6)
case 149:
                        {
case 18:
                            var9 = var1;
                            var11 = var8[var9];
                            var9 = var11.isPrivate;
                            var9 = var9.bind(var11)();
                            if(!var9) { _fun0017_ip = 149; continue _fun0017 }
case 150:
                            var10 = var3.add;
                            var9 = var11.getRecipientId;
                            var9 = var9.bind(var11)();
                            var9 = var10.bind(var3)(var9);
                            _fun0017_ip = 149; continue _fun0017;
                        }
case 151:
                        var1 = _closure2_slot1;
                        var40 = null;
                        if(!(var40 != var1)) { _fun0017_ip = 152; continue _fun0017 }
case 153:
                        var1 = _closure2_slot15;
                        if(!(var40 == var1)) { _fun0017_ip = 154; continue _fun0017 }
case 152:
                        var5 = new Array(0);
                        _fun0017_ip = 155; continue _fun0017;
case 154:
                        var7 = _closure1_slot16;
                        var6 = var7.getRows;
                        var4 = _closure2_slot1;
                        var1 = _closure2_slot15;
                        var1 = var1.id;
                        var5 = var6.bind(var7)(var4, var1);
case 155:
                        var4 = var5.forEach;
                        var1 = function(arg1) {
                            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                                var1 = arg1;
                                var3 = var1.type;
                                var2 = _closure1_slot17;
                                var2 = var2.MEMBER;
                                if(!(var3 === var2)) { _fun0019_ip = 59; continue _fun0019 }
case 156:
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
                        var39 = new Array(0);
                        var38 = new Array(0);
                        var1 = var45.Set;
                        var4 = var1.prototype;
                        var4 = Object.create(var4, {constructor: {value: var1}});
                        var73 = var4;
                        var1 = new var73[var1](var72);
                        var7 = var1 instanceof Object ? var1 : var4;
                        var _closure4_slot1 = var7;
                        var4 = _closure1_slot34;
                        var1 = _closure2_slot25;
                        var6 = var4.bind(var41)(var1);
                        var4 = var6.bind(var41)();
                        var1 = var4.done;
                        var5 = 604800;
                        if(var1) { _fun0017_ip = 157; continue _fun0017 }
case 99:
                        var1 = var4.value;
                        var8 = _closure1_slot10;
                        var8 = var8.bind(var41)(var1);
                        if(var8) { _fun0017_ip = 158; continue _fun0017 }
case 159:
                        var8 = _closure1_slot9;
                        var8 = var8.bind(var41)(var1);
                        if(!var8) { _fun0017_ip = 101; continue _fun0017 }
case 160:
                        var9 = _closure1_slot8;
                        var8 = var9.bind(var41)(var1, var5);
case 101:
                        if(!var8) { _fun0017_ip = 161; continue _fun0017 }
case 162:
                        var8 = var38.push;
                        var8 = var8.bind(var38)(var1);
                        _fun0017_ip = 161; continue _fun0017;
case 158:
                        var8 = var39.push;
                        var8 = var8.bind(var39)(var1);
case 161:
                        var8 = var1.channel_id;
                        if(!(var40 != var8)) { _fun0017_ip = 163; continue _fun0017 }
case 164:
                        var8 = var7.add;
                        var1 = var1.channel_id;
                        var1 = var8.bind(var7)(var1);
case 163:
                        var8 = var6.bind(var41)();
                        var1 = var8.done;
                        var4 = var8;
                        if(!var1) { _fun0017_ip = 99; continue _fun0017 }
case 157:
                        var37 = {};
                        var _closure4_slot2 = var37;
                        var36 = {};
                        var _closure4_slot3 = var36;
                        var35 = {};
                        var _closure4_slot4 = var35;
                        var34 = {};
                        var _closure4_slot5 = var34;
                        var33 = {};
                        var _closure4_slot6 = var33;
                        var32 = {};
                        var _closure4_slot7 = var32;
                        var1 = _closure2_slot1;
                        if(!(var40 != var1)) { _fun0017_ip = 165; continue _fun0017 }
case 166:
                        var1 = _closure2_slot5;
                        if(!var1) { _fun0017_ip = 165; continue _fun0017 }
case 167:
                        var5 = _closure1_slot12;
                        var4 = var5.getStageInstancesByGuild;
                        var1 = _closure2_slot1;
                        var6 = var4.bind(var5)(var1);
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 31;
                        var1 = var5[var1];
                        var5 = var4.bind(var41)(var1);
                        var4 = var5.forEach;
                        var1 = function(arg1) {
                            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
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
                                if(!var1) { _fun0020_ip = 35; continue _fun0020 }
case 2:
                                var5 = var4.channel_id;
                                var3 = function blockedOrIgnoredUserInVoiceChannel(arg1) {
                                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                                        var6 = arg1;
                                        var1 = null;
                                        if(!(var1 != var6)) { _fun0021_ip = 168; continue _fun0021 }
case 32:
                                        var5 = _closure1_slot27;
                                        var4 = var5.getVoiceStatesForChannel;
                                        var5 = var4.bind(var5)(var6);
                                        var1 = var1 != var5;
                                        if(!var1) { _fun0021_ip = 169; continue _fun0021 }
case 170:
                                        var6 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var4 = 31;
                                        var4 = var8[var4];
                                        var7 = undefined;
                                        var4 = var6.bind(var7)(var4);
                                        var6 = var4.bind(var7)(var5);
                                        var5 = var6.map;
                                        var4 = function(arg1) {
                                            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                                                var3 = _closure1_slot26;
                                                var2 = var3.getUser;
                                                var1 = arg1;
                                                var1 = var1.userId;
                                                var2 = var2.bind(var3)(var1);
                                                var1 = null;
                                                var3 = var1 == var2;
                                                var1 = undefined;
                                                if(var3) { _fun0022_ip = 38; continue _fun0022 }
case 53:
                                                var1 = var2.id;
case 38:
                                                return var1;
                                            }
                                        };
                                        var5 = var5.bind(var6)(var4);
                                        var4 = var5.filter;
                                        var6 = _closure1_slot0;
                                        var3 = 40;
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
case 169:
                                        return var1;
case 168:
                                        var1 = false;
                                        return var1;
                                    }
                                };
                                var2 = undefined;
                                var2 = var3.bind(var2)(var5);
                                var1 = !var2;
case 35:
                                if(!var1) { _fun0020_ip = 171; continue _fun0020 }
case 71:
                                var3 = _closure4_slot2;
                                var2 = var4.channel_id;
                                var1 = {};
                                var5 = 'live-guild-stage';
                                var1['kind'] = var5;
                                var1['stage'] = var4;
                                var3[var2] = var1;
case 171:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var4.bind(var5)(var6, var1);
case 165:
                        var31 = new Array(0);
                        var _closure4_slot8 = var31;
                        var30 = new Array(0);
                        var _closure4_slot9 = var30;
                        var5 = _closure1_slot27;
                        var4 = var5.getVoiceStates;
                        var1 = _closure2_slot1;
                        var4 = var4.bind(var5)(var1);
                        var _closure4_slot10 = var4;
                        var1 = var45.Set;
                        var5 = var1.prototype;
                        var5 = Object.create(var5, {constructor: {value: var1}});
                        var73 = var5;
                        var1 = new var73[var1](var72);
                        var5 = var1 instanceof Object ? var1 : var5;
                        var _closure4_slot11 = var5;
                        var6 = var3.forEach;
                        var1 = function(arg1) {
                            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                                var3 = arg1;
                                var2 = _closure1_slot26;
                                var1 = var2.getUser;
                                var1 = var1.bind(var2)(var3);
                                var2 = null;
                                if(!(var2 != var1)) { _fun0023_ip = 172; continue _fun0023 }
case 173:
                                var1 = var1.bot;
                                if(var1) { _fun0023_ip = 174; continue _fun0023 }
case 175:
                                var7 = _closure1_slot23;
                                var5 = var7.getPrimaryActivity;
                                var6 = _closure2_slot1;
                                var5 = var5.bind(var7)(var3, var6);
                                if(!(var2 == var6)) { _fun0023_ip = 176; continue _fun0023 }
case 177:
                                var6 = _closure1_slot27;
                                var4 = var6.getVoiceStateForUser;
                                var4 = var4.bind(var6)(var3);
                                _fun0023_ip = 178; continue _fun0023;
case 176:
                                var6 = _closure4_slot10;
                                var4 = var6[var3];
case 178:
                                var1 = _closure2_slot10;
                                if(var1) { _fun0023_ip = 179; continue _fun0023 }
case 180:
                                var1 = var2 != var5;
case 179:
                                if(var1) { _fun0023_ip = 181; continue _fun0023 }
case 182:
                                var1 = var2 != var4;
case 181:
                                if(!var1) { _fun0023_ip = 172; continue _fun0023 }
case 86:
                                var2 = _closure4_slot13;
                                var1 = undefined;
                                var1 = var2.bind(var1)(var3, var5, var4);
                                _fun0023_ip = 172; continue _fun0023;
case 174:
                                var2 = _closure4_slot11;
                                var1 = var2.add;
                                var1 = var1.bind(var2)(var3);
case 172:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var6.bind(var3)(var1);
                        var1 = var5.size;
                        var1 = var1 > var43;
                        if(!var1) { _fun0017_ip = 183; continue _fun0017 }
case 184:
                        var6 = var5.size;
                        var3 = var3.size;
                        var1 = var6 === var3;
case 183:
                        if(!var1) { _fun0017_ip = 117; continue _fun0017 }
case 113:
                        var3 = var45.Array;
                        var1 = var3.from;
                        var1 = var1.bind(var3)(var5);
                        var1 = var1[var43];
                        var1 = var2.bind(var41)(var1, var40, var40);
case 117:
                        var1 = _closure2_slot1;
                        if(!(var40 != var1)) { _fun0017_ip = 185; continue _fun0017 }
case 186:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 31;
                        var1 = var3[var1];
                        var3 = var2.bind(var41)(var1);
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
case 185:
                        var1 = new Array(0);
                        var _closure4_slot12 = var1;
                        var3 = _closure1_slot34;
                        var2 = _closure2_slot0;
                        var29 = var3.bind(var41)(var2);
                        var3 = var29.bind(var41)();
                        var2 = var3.done;
                        var28 = 'unified-vc';
                        var27 = 'kind';
                        var26 = 37;
                        var25 = 2;
                        var24 = 'active-channel';
                        var23 = 'student-hub-add-channel';
                        var22 = 'create-channel';
                        var21 = 'invite';
                        var20 = 38;
                        var19 = 'customize-guild';
                        var18 = 'user-returned';
                        var17 = 39;
                        var16 = 40;
                        var15 = var3;
                        var14 = undefined;
                        var13 = undefined;
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
                        if(var2) { _fun0017_ip = 187; continue _fun0017 }
case 188:
                        var49 = var15.value;
                        var2 = _closure1_slot28;
                        var2 = var2.LIVE_GUILD_STAGE;
                        if(!(var2 !== var49)) { _fun0017_ip = 189; continue _fun0017 }
case 190:
                        var2 = _closure1_slot28;
                        var2 = var2.LIVE_GUILD_EVENT;
                        if(!(var2 !== var49)) { _fun0017_ip = 191; continue _fun0017 }
case 192:
                        var2 = _closure1_slot28;
                        var2 = var2.UPCOMING_GUILD_EVENT;
                        if(!(var2 !== var49)) { _fun0017_ip = 193; continue _fun0017 }
case 194:
                        var2 = _closure1_slot28;
                        var2 = var2.VOICES;
                        if(!(var2 !== var49)) { _fun0017_ip = 195; continue _fun0017 }
case 196:
                        var2 = _closure1_slot28;
                        var2 = var2.EMBEDDED_ACTIVITY;
                        if(!(var2 !== var49)) { _fun0017_ip = 197; continue _fun0017 }
case 198:
                        var2 = _closure1_slot28;
                        var2 = var2.COMBINED_VC;
                        if(!(var2 !== var49)) { _fun0017_ip = 199; continue _fun0017 }
case 128:
                        var2 = _closure1_slot28;
                        var2 = var2.STREAMS;
                        if(!(var2 !== var49)) { _fun0017_ip = 200; continue _fun0017 }
case 201:
                        var2 = _closure1_slot28;
                        var2 = var2.USER_CUSTOM_STATUS;
                        if(!(var2 !== var49)) { _fun0017_ip = 202; continue _fun0017 }
case 203:
                        var2 = _closure1_slot28;
                        var2 = var2.ACTIVITIES;
                        if(!(var2 !== var49)) { _fun0017_ip = 204; continue _fun0017 }
case 133:
                        var2 = _closure1_slot28;
                        var2 = var2.ACTIVE_CHANNEL;
                        if(!(var2 !== var49)) { _fun0017_ip = 205; continue _fun0017 }
case 206:
                        var2 = _closure1_slot28;
                        var2 = var2.USER;
                        if(!(var2 !== var49)) { _fun0017_ip = 207; continue _fun0017 }
case 208:
                        var2 = _closure1_slot28;
                        var2 = var2.STUDENT_HUB_ADD_CHANNEL;
                        if(!(var2 !== var49)) { _fun0017_ip = 209; continue _fun0017 }
case 210:
                        var2 = _closure1_slot28;
                        var2 = var2.CREATE_CHANNEL;
                        if(!(var2 !== var49)) { _fun0017_ip = 211; continue _fun0017 }
case 212:
                        var2 = _closure1_slot28;
                        var2 = var2.INVITE;
                        if(!(var2 !== var49)) { _fun0017_ip = 213; continue _fun0017 }
case 214:
                        var2 = _closure1_slot28;
                        var2 = var2.CUSTOMIZE_GUILD;
                        if(!(var2 !== var49)) { _fun0017_ip = 215; continue _fun0017 }
case 216:
                        var2 = _closure1_slot28;
                        var2 = var2.USER_RETURNED;
                        if(!(var2 !== var49)) { _fun0017_ip = 217; continue _fun0017 }
case 218:
                        var48 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var16];
                        var48 = var48.bind(var41)(var2);
                        var2 = var48.assertNever;
                        var2 = var2.bind(var48)(var49);
                        var59 = var14;
                        var58 = var13;
                        var57 = var12;
                        var56 = var11;
                        var55 = var10;
                        var54 = var9;
                        var53 = var8;
                        var52 = var7;
                        var51 = var6;
                        var50 = var5;
                        var49 = var4;
                        var48 = var3;
                        _fun0017_ip = 219; continue _fun0017;
case 217:
                        var2 = _closure2_slot22;
                        var59 = var14;
                        var58 = var13;
                        var57 = var12;
                        var56 = var11;
                        var55 = var10;
                        var54 = var9;
                        var53 = var8;
                        var52 = var7;
                        var51 = var6;
                        var50 = var5;
                        var49 = var4;
                        var48 = var3;
                        if(!var2) { _fun0017_ip = 219; continue _fun0017 }
case 220:
                        var67 = _closure2_slot23;
                        var63 = var4;
                        var62 = var3;
                        var59 = var14;
                        var58 = var13;
                        var57 = var12;
                        var56 = var11;
                        var55 = var10;
                        var54 = var9;
                        var53 = var8;
                        var52 = var7;
                        var51 = var6;
                        var50 = var5;
                        var49 = var63;
                        var48 = var62;
                        for(var64 in var67)
case 221:
                        {
                            var49 = var63;
                            var59 = var14;
                            var58 = var13;
                            var57 = var12;
                            var56 = var11;
                            var55 = var10;
                            var54 = var9;
                            var53 = var8;
                            var52 = var7;
                            var51 = var6;
                            var50 = var5;
                            var48 = var62;
case 222:
                            var60 = var64;
                            var61 = _closure1_slot24;
                            var2 = var61.isBlockedOrIgnored;
                            var2 = var2.bind(var61)(var60);
                            var63 = var60;
                            if(var2) { _fun0017_ip = 221; continue _fun0017 }
case 223:
                            var2 = _closure2_slot23;
                            var2 = var2[var60];
                            var63 = var60;
                            var62 = var2;
                            if(var40 == var2) { _fun0017_ip = 221; continue _fun0017 }
case 224:
                            var69 = _closure1_slot0;
                            var61 = _closure1_slot2;
                            var61 = var61[var17];
                            var61 = var69.bind(var41)(var61);
                            var61 = var61.UserAffinityFlags;
                            var61 = var61.RECENTLY_RETURNED;
                            var61 = var2 & var61;
                            var63 = var60;
                            var62 = var2;
                            if(!var61) { _fun0017_ip = 221; continue _fun0017 }
case 225:
                            var62 = var1.push;
                            var61 = {};
                            var61['kind'] = var18;
                            var61['userId'] = var60;
                            var61 = var62.bind(var1)(var61);
                            var59 = var14;
                            var58 = var13;
                            var57 = var12;
                            var56 = var11;
                            var55 = var10;
                            var54 = var9;
                            var53 = var8;
                            var52 = var7;
                            var51 = var6;
                            var50 = var5;
                            var49 = var60;
                            var48 = var2;
                            _fun0017_ip = 219; continue _fun0017;
case 215:
                            var2 = _closure2_slot14;
                            var2 = var40 != var2;
                            if(!var2) { _fun0017_ip = 226; continue _fun0017 }
case 227:
                            var63 = _closure1_slot22;
                            var62 = var63.can;
                            var60 = _closure1_slot31;
                            var61 = var60.MANAGE_GUILD;
                            var60 = _closure2_slot14;
                            var2 = var62.bind(var63)(var61, var60);
case 226:
                            if(!var2) { _fun0017_ip = 228; continue _fun0017 }
case 229:
                            var60 = _closure2_slot14;
                            var61 = var40 == var60;
                            var60 = undefined;
                            if(var61) { _fun0017_ip = 230; continue _fun0017 }
case 231:
                            var61 = _closure2_slot14;
                            var60 = var61.icon;
case 230:
                            var2 = var40 == var60;
case 228:
                            var59 = var14;
                            var58 = var13;
                            var57 = var12;
                            var56 = var11;
                            var55 = var10;
                            var54 = var9;
                            var53 = var8;
                            var52 = var7;
                            var51 = var6;
                            var50 = var5;
                            var49 = var4;
                            var48 = var3;
                            if(!var2) { _fun0017_ip = 219; continue _fun0017 }
case 232:
                            var60 = var1.push;
                            var2 = {};
                            var2['kind'] = var19;
                            var61 = _closure2_slot14;
                            var61 = var61.id;
                            var2['guildId'] = var61;
                            var2 = var60.bind(var1)(var2);
                            var59 = var14;
                            var58 = var13;
                            var57 = var12;
                            var56 = var11;
                            var55 = var10;
                            var54 = var9;
                            var53 = var8;
                            var52 = var7;
                            var51 = var6;
                            var50 = var5;
                            var49 = var4;
                            var48 = var3;
                            _fun0017_ip = 219; continue _fun0017;
case 213:
                            var2 = _closure2_slot14;
                            var2 = var40 != var2;
                            if(!var2) { _fun0017_ip = 233; continue _fun0017 }
case 234:
                            var60 = _closure2_slot17;
                            var2 = var40 != var60;
case 233:
                            if(!var2) { _fun0017_ip = 235; continue _fun0017 }
case 236:
                            var61 = _closure1_slot0;
                            var60 = _closure1_slot2;
                            var60 = var60[var20];
                            var63 = var61.bind(var41)(var60);
                            var62 = var63.shouldRenderInvite;
                            var61 = _closure2_slot17;
                            var60 = _closure2_slot14;
                            var2 = var62.bind(var63)(var61, var60);
case 235:
                            var59 = var14;
                            var58 = var13;
                            var57 = var12;
                            var56 = var11;
                            var55 = var10;
                            var54 = var9;
                            var53 = var8;
                            var52 = var7;
                            var51 = var6;
                            var50 = var5;
                            var49 = var4;
                            var48 = var3;
                            if(!var2) { _fun0017_ip = 219; continue _fun0017 }
case 237:
                            var60 = var1.push;
                            var2 = {};
                            var2['kind'] = var21;
                            var61 = _closure2_slot14;
                            var61 = var61.id;
                            var2['guildId'] = var61;
                            var2 = var60.bind(var1)(var2);
                            var59 = var14;
                            var58 = var13;
                            var57 = var12;
                            var56 = var11;
                            var55 = var10;
                            var54 = var9;
                            var53 = var8;
                            var52 = var7;
                            var51 = var6;
                            var50 = var5;
                            var49 = var4;
                            var48 = var3;
                            _fun0017_ip = 219; continue _fun0017;
case 211:
                            var2 = _closure2_slot14;
                            var2 = var40 != var2;
                            if(!var2) { _fun0017_ip = 238; continue _fun0017 }
case 239:
                            var63 = _closure1_slot22;
                            var62 = var63.can;
                            var60 = _closure1_slot31;
                            var61 = var60.MANAGE_CHANNELS;
                            var60 = _closure2_slot14;
                            var2 = var62.bind(var63)(var61, var60);
case 238:
                            if(!var2) { _fun0017_ip = 240; continue _fun0017 }
case 241:
                            var60 = _closure2_slot17;
                            var2 = var40 != var60;
case 240:
                            if(!var2) { _fun0017_ip = 242; continue _fun0017 }
case 243:
                            var61 = _closure2_slot17;
                            var60 = _closure1_slot20;
                            var60 = var61[var60];
                            var60 = var60.length;
                            var2 = var60 <= var25;
case 242:
                            var59 = var14;
                            var58 = var13;
                            var57 = var12;
                            var56 = var11;
                            var55 = var10;
                            var54 = var9;
                            var53 = var8;
                            var52 = var7;
                            var51 = var6;
                            var50 = var5;
                            var49 = var4;
                            var48 = var3;
                            if(!var2) { _fun0017_ip = 219; continue _fun0017 }
case 244:
                            var60 = var1.push;
                            var2 = {};
                            var2['kind'] = var22;
                            var61 = _closure2_slot14;
                            var61 = var61.id;
                            var2['guildId'] = var61;
                            var2 = var60.bind(var1)(var2);
                            var59 = var14;
                            var58 = var13;
                            var57 = var12;
                            var56 = var11;
                            var55 = var10;
                            var54 = var9;
                            var53 = var8;
                            var52 = var7;
                            var51 = var6;
                            var50 = var5;
                            var49 = var4;
                            var48 = var3;
                            _fun0017_ip = 219; continue _fun0017;
case 209:
                            var2 = _closure2_slot14;
                            var2 = var40 != var2;
                            if(!var2) { _fun0017_ip = 245; continue _fun0017 }
case 246:
                            var60 = _closure2_slot14;
                            var62 = var60.features;
                            var61 = var62.has;
                            var60 = _closure1_slot30;
                            var60 = var60.HUB;
                            var2 = var61.bind(var62)(var60);
case 245:
                            var59 = var14;
                            var58 = var13;
                            var57 = var12;
                            var56 = var11;
                            var55 = var10;
                            var54 = var9;
                            var53 = var8;
                            var52 = var7;
                            var51 = var6;
                            var50 = var5;
                            var49 = var4;
                            var48 = var3;
                            if(!var2) { _fun0017_ip = 219; continue _fun0017 }
case 247:
                            var60 = var1.push;
                            var2 = {};
                            var2['kind'] = var23;
                            var61 = _closure2_slot14;
                            var61 = var61.id;
                            var2['guildId'] = var61;
                            var2 = var60.bind(var1)(var2);
                            var59 = var14;
                            var58 = var13;
                            var57 = var12;
                            var56 = var11;
                            var55 = var10;
                            var54 = var9;
                            var53 = var8;
                            var52 = var7;
                            var51 = var6;
                            var50 = var5;
                            var49 = var4;
                            var48 = var3;
                            _fun0017_ip = 219; continue _fun0017;
case 207:
                            var2 = var31.length;
                            var64 = var43 < var2;
                            var61 = 0;
                            var60 = 0;
                            var2 = 0;
                            var63 = 0;
                            var62 = var7;
                            if(!var64) { _fun0017_ip = 248; continue _fun0017 }
case 249:
                            var65 = var31[var60];
                            var64 = _closure2_slot2;
                            var66 = var40 != var64;
                            if(!var66) { _fun0017_ip = 250; continue _fun0017 }
case 251:
                            var68 = _closure2_slot2;
                            var67 = var68.has;
                            var64 = var65.userId;
                            var66 = var67.bind(var68)(var64);
case 250:
                            var64 = var61;
                            if(var66) { _fun0017_ip = 252; continue _fun0017 }
case 253:
                            var66 = var1.push;
                            var66 = var66.bind(var1)(var65);
                            var64 = var61 + 1;
case 252:
                            var66 = var60 + 1;
                            var67 = var31.length;
                            var2 = var64;
                            var63 = var66;
                            var62 = var65;
                            if(!(var66 < var67)) { _fun0017_ip = 248; continue _fun0017 }
case 254:
                            var61 = var64;
                            var60 = var66;
                            var63 = var60;
                            var62 = var65;
                            var2 = var61;
                            if(var2 < var44) { _fun0017_ip = 249; continue _fun0017 }
case 248:
                            var60 = var30.length;
                            var60 = var43 < var60;
                            var59 = var14;
                            var58 = var13;
                            var57 = var12;
                            var56 = var11;
                            var55 = var10;
                            var54 = var2;
                            var53 = var63;
                            var52 = var62;
                            var51 = 0;
                            var50 = var5;
                            var49 = var4;
                            var48 = var3;
                            if(!var60) { _fun0017_ip = 219; continue _fun0017 }
case 255:
                            var61 = var2;
                            var60 = 0;
                            var59 = var14;
                            var58 = var13;
                            var57 = var12;
                            var56 = var11;
                            var55 = var10;
                            var54 = var61;
                            var53 = var63;
                            var52 = var62;
                            var51 = 0;
                            var50 = var5;
                            var49 = var4;
                            var48 = var3;
                            if(!(var2 < var44)) { _fun0017_ip = 219; continue _fun0017 }
case 256:
                            var64 = var30[var60];
                            var2 = _closure2_slot2;
                            var65 = var40 != var2;
                            if(!var65) { _fun0017_ip = 257; continue _fun0017 }
case 258:
                            var67 = _closure2_slot2;
                            var66 = var67.has;
                            var2 = var64.userId;
                            var65 = var66.bind(var67)(var2);
case 257:
                            var2 = var61;
                            if(var65) { _fun0017_ip = 259; continue _fun0017 }
case 260:
                            var65 = var1.push;
                            var65 = var65.bind(var1)(var64);
                            var2 = var61 + 1;
case 259:
                            var65 = var60 + 1;
                            var66 = var30.length;
                            var59 = var14;
                            var58 = var13;
                            var57 = var12;
                            var56 = var11;
                            var55 = var10;
                            var54 = var2;
                            var53 = var63;
                            var52 = var62;
                            var50 = var64;
                            var49 = var4;
                            var48 = var3;
                            var51 = var65;
                            if(!(var51 < var66)) { _fun0017_ip = 219; continue _fun0017 }
case 261:
                            var61 = var2;
                            var60 = var65;
                            var59 = var14;
                            var58 = var13;
                            var57 = var12;
                            var56 = var11;
                            var55 = var10;
                            var54 = var61;
                            var53 = var63;
                            var52 = var62;
                            var51 = var60;
                            var50 = var64;
                            var49 = var4;
                            var48 = var3;
                            if(var2 < var44) { _fun0017_ip = 256; continue _fun0017 }
case 262:
                            _fun0017_ip = 219; continue _fun0017;
case 205:
                            var2 = _closure2_slot1;
                            var59 = var14;
                            var58 = var13;
                            var57 = var12;
                            var56 = var11;
                            var55 = var10;
                            var54 = var9;
                            var53 = var8;
                            var52 = var7;
                            var51 = var6;
                            var50 = var5;
                            var49 = var4;
                            var48 = var3;
                            if(!(var40 != var2)) { _fun0017_ip = 219; continue _fun0017 }
case 263:
                            var60 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var26];
                            var62 = var60.bind(var41)(var2);
                            var61 = var62.getActiveTextChannels;
                            var60 = _closure2_slot1;
                            var63 = _closure1_slot18;
                            var2 = new Array(4);
                            var2[0] = var63;
                            var63 = _closure1_slot22;
                            var2[1] = var63;
                            var63 = _closure1_slot7;
                            var2[2] = var63;
                            var63 = _closure1_slot25;
                            var2[3] = var63;
                            var61 = var61.bind(var62)(var60, var2);
                            var62 = var45.Math;
                            var60 = var62.min;
                            var2 = var61.length;
                            var60 = var60.bind(var62)(var25, var2);
                            var62 = var43 < var60;
                            var2 = 0;
                            var59 = var14;
                            var58 = var13;
                            var57 = var61;
                            var56 = var60;
                            var55 = 0;
                            var54 = var9;
                            var53 = var8;
                            var52 = var7;
                            var51 = var6;
                            var50 = var5;
                            var49 = var4;
                            var48 = var3;
                            if(!var62) { _fun0017_ip = 219; continue _fun0017 }
case 264:
                            var63 = var1.push;
                            var62 = {};
                            var62['kind'] = var24;
                            var64 = _closure2_slot1;
                            var62['guildId'] = var64;
                            var64 = var61[var2];
                            var64 = var64.id;
                            var62['channelId'] = var64;
                            var62 = var63.bind(var1)(var62);
                            var2 = var2 + 1;
                            var59 = var14;
                            var58 = var13;
                            var57 = var61;
                            var56 = var60;
                            var54 = var9;
                            var53 = var8;
                            var52 = var7;
                            var51 = var6;
                            var50 = var5;
                            var49 = var4;
                            var48 = var3;
                            var55 = var2;
                            if(var55 < var60) { _fun0017_ip = 264; continue _fun0017 }
case 265:
                            _fun0017_ip = 219; continue _fun0017;
case 204:
                            var62 = var33;
                            var59 = var14;
                            var58 = var13;
                            var57 = var12;
                            var56 = var11;
                            var55 = var10;
                            var54 = var9;
                            var53 = var8;
                            var52 = var7;
                            var51 = var6;
                            var50 = var5;
                            var49 = var4;
                            var48 = var3;
                            for(var2 in var62)
case 266:
                            {
                                var59 = var14;
                                var58 = var13;
                                var57 = var12;
                                var56 = var11;
                                var55 = var10;
                                var54 = var9;
                                var53 = var8;
                                var52 = var7;
                                var51 = var6;
                                var50 = var5;
                                var49 = var4;
                                var48 = var3;
case 267:
                                var64 = var2;
                                var65 = var1.push;
                                var64 = var33[var64];
                                var64 = var65.bind(var1)(var64);
                                _fun0017_ip = 266; continue _fun0017;
case 202:
                                var62 = var32;
                                var59 = var14;
                                var58 = var13;
                                var57 = var12;
                                var56 = var11;
                                var55 = var10;
                                var54 = var9;
                                var53 = var8;
                                var52 = var7;
                                var51 = var6;
                                var50 = var5;
                                var49 = var4;
                                var48 = var3;
                                for(var2 in var62)
case 268:
                                {
                                    var59 = var14;
                                    var58 = var13;
                                    var57 = var12;
                                    var56 = var11;
                                    var55 = var10;
                                    var54 = var9;
                                    var53 = var8;
                                    var52 = var7;
                                    var51 = var6;
                                    var50 = var5;
                                    var49 = var4;
                                    var48 = var3;
case 269:
                                    var64 = var2;
                                    var65 = var1.push;
                                    var64 = var32[var64];
                                    var64 = var65.bind(var1)(var64);
                                    _fun0017_ip = 268; continue _fun0017;
case 200:
                                    var62 = var34;
                                    var59 = var14;
                                    var58 = var13;
                                    var57 = var12;
                                    var56 = var11;
                                    var55 = var10;
                                    var54 = var9;
                                    var53 = var8;
                                    var52 = var7;
                                    var51 = var6;
                                    var50 = var5;
                                    var49 = var4;
                                    var48 = var3;
                                    for(var2 in var62)
case 270:
                                    {
                                        var59 = var14;
                                        var58 = var13;
                                        var57 = var12;
                                        var56 = var11;
                                        var55 = var10;
                                        var54 = var9;
                                        var53 = var8;
                                        var52 = var7;
                                        var51 = var6;
                                        var50 = var5;
                                        var49 = var4;
                                        var48 = var3;
case 271:
                                        var64 = var2;
                                        var65 = var1.push;
                                        var64 = var34[var64];
                                        var64 = var65.bind(var1)(var64);
                                        _fun0017_ip = 270; continue _fun0017;
case 199:
                                        var62 = var36;
                                        var59 = var14;
                                        var58 = var13;
                                        var57 = var12;
                                        var56 = var11;
                                        var55 = var10;
                                        var54 = var9;
                                        var53 = var8;
                                        var52 = var7;
                                        var51 = var6;
                                        var50 = var5;
                                        var49 = var4;
                                        var48 = var3;
                                        for(var2 in var62)
case 272:
                                        {
                                            var59 = var14;
                                            var58 = var13;
                                            var57 = var12;
                                            var56 = var11;
                                            var55 = var10;
                                            var54 = var9;
                                            var53 = var8;
                                            var52 = var7;
                                            var51 = var6;
                                            var50 = var5;
                                            var49 = var4;
                                            var48 = var3;
case 273:
                                            var66 = var2;
                                            var65 = var1.push;
                                            var64 = {};
                                            var71 = var36[var66];
                                            var72 = var64;
                                            var66 = copyDataProperties(var72, var71);
                                            var64[var27] = var28;
                                            var64 = var65.bind(var1)(var64);
                                            _fun0017_ip = 272; continue _fun0017;
case 197:
                                            var67 = var35;
                                            var63 = var14;
                                            var62 = var13;
                                            var59 = var63;
                                            var58 = var62;
                                            var57 = var12;
                                            var56 = var11;
                                            var55 = var10;
                                            var54 = var9;
                                            var53 = var8;
                                            var52 = var7;
                                            var51 = var6;
                                            var50 = var5;
                                            var49 = var4;
                                            var48 = var3;
                                            for(var64 in var67)
case 274:
                                            {
                                                var59 = var63;
                                                var58 = var62;
                                                var57 = var12;
                                                var56 = var11;
                                                var55 = var10;
                                                var54 = var9;
                                                var53 = var8;
                                                var52 = var7;
                                                var51 = var6;
                                                var50 = var5;
                                                var49 = var4;
                                                var48 = var3;
case 275:
                                                var2 = var64;
                                                var60 = _closure1_slot34;
                                                var2 = var35[var2];
                                                var61 = var60.bind(var41)(var2);
                                                var60 = var61.bind(var41)();
                                                var2 = var60.done;
                                                var63 = var60;
                                                var62 = var61;
                                                var60 = var63;
                                                if(var2) { _fun0017_ip = 274; continue _fun0017 }
case 276:
                                                var69 = var60.value;
                                                var2 = var1.push;
                                                var2 = var2.bind(var1)(var69);
                                                var69 = var61.bind(var41)();
                                                var2 = var69.done;
                                                var63 = var69;
                                                var62 = var61;
                                                var60 = var63;
                                                if(var2) { _fun0017_ip = 274; continue _fun0017 }
case 277:
                                                _fun0017_ip = 276; continue _fun0017;
case 195:
                                                var62 = var36;
                                                var59 = var14;
                                                var58 = var13;
                                                var57 = var12;
                                                var56 = var11;
                                                var55 = var10;
                                                var54 = var9;
                                                var53 = var8;
                                                var52 = var7;
                                                var51 = var6;
                                                var50 = var5;
                                                var49 = var4;
                                                var48 = var3;
                                                for(var2 in var62)
case 278:
                                                {
                                                    var59 = var14;
                                                    var58 = var13;
                                                    var57 = var12;
                                                    var56 = var11;
                                                    var55 = var10;
                                                    var54 = var9;
                                                    var53 = var8;
                                                    var52 = var7;
                                                    var51 = var6;
                                                    var50 = var5;
                                                    var49 = var4;
                                                    var48 = var3;
case 279:
                                                    var64 = var2;
                                                    var65 = var1.push;
                                                    var64 = var36[var64];
                                                    var64 = var65.bind(var1)(var64);
                                                    _fun0017_ip = 278; continue _fun0017;
case 193:
                                                    var60 = var38.forEach;
                                                    var2 = function(arg1) {
                                                        var3 = _closure4_slot12;
                                                        var2 = var3.push;
                                                        var1 = {'kind': 'guild-event', 'event': null, 'isLive': false};
                                                        var4 = arg1;
                                                        var1['event'] = var4;
                                                        var1 = var2.bind(var3)(var1);
                                                        return var1;
                                                    };
                                                    var2 = var60.bind(var38)(var2);
                                                    var59 = var14;
                                                    var58 = var13;
                                                    var57 = var12;
                                                    var56 = var11;
                                                    var55 = var10;
                                                    var54 = var9;
                                                    var53 = var8;
                                                    var52 = var7;
                                                    var51 = var6;
                                                    var50 = var5;
                                                    var49 = var4;
                                                    var48 = var3;
                                                    _fun0017_ip = 219; continue _fun0017;
case 191:
                                                    var60 = var39.forEach;
                                                    var2 = function(arg1) {
                                                        var3 = _closure4_slot12;
                                                        var2 = var3.push;
                                                        var1 = {'kind': 'guild-event', 'event': null, 'isLive': true};
                                                        var4 = arg1;
                                                        var1['event'] = var4;
                                                        var1 = var2.bind(var3)(var1);
                                                        return var1;
                                                    };
                                                    var2 = var60.bind(var39)(var2);
                                                    var59 = var14;
                                                    var58 = var13;
                                                    var57 = var12;
                                                    var56 = var11;
                                                    var55 = var10;
                                                    var54 = var9;
                                                    var53 = var8;
                                                    var52 = var7;
                                                    var51 = var6;
                                                    var50 = var5;
                                                    var49 = var4;
                                                    var48 = var3;
                                                    _fun0017_ip = 219; continue _fun0017;
case 189:
                                                    var62 = var37;
                                                    var59 = var14;
                                                    var58 = var13;
                                                    var57 = var12;
                                                    var56 = var11;
                                                    var55 = var10;
                                                    var54 = var9;
                                                    var53 = var8;
                                                    var52 = var7;
                                                    var51 = var6;
                                                    var50 = var5;
                                                    var49 = var4;
                                                    var48 = var3;
                                                    for(var2 in var62)
case 280:
                                                    {
                                                        var59 = var14;
                                                        var58 = var13;
                                                        var57 = var12;
                                                        var56 = var11;
                                                        var55 = var10;
                                                        var54 = var9;
                                                        var53 = var8;
                                                        var52 = var7;
                                                        var51 = var6;
                                                        var50 = var5;
                                                        var49 = var4;
                                                        var48 = var3;
case 281:
                                                        var64 = var2;
                                                        var65 = var1.push;
                                                        var64 = var37[var64];
                                                        var64 = var65.bind(var1)(var64);
                                                        _fun0017_ip = 280; continue _fun0017;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
case 219:
                        var60 = var29.bind(var41)();
                        var2 = var60.done;
                        var14 = var59;
                        var13 = var58;
                        var12 = var57;
                        var11 = var56;
                        var10 = var55;
                        var9 = var54;
                        var8 = var53;
                        var7 = var52;
                        var6 = var51;
                        var5 = var50;
                        var4 = var49;
                        var3 = var48;
                        var15 = var60;
                        if(!var2) { _fun0017_ip = 188; continue _fun0017 }
case 187:
                        return var1;
                    }
                };
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var8 = var12.bind(var14)(var4, var8);
            var _closure2_slot28 = var8;
            var12 = var14.useState;
            var4 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = _closure2_slot26;
                    if(var1) { _fun0024_ip = 282; continue _fun0024 }
case 55:
                    var1 = _closure2_slot28;
                    var7 = undefined;
                    var1 = var1.bind(var7)();
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0024_ip = 283; continue _fun0024 }
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
case 283:
                    return var1;
case 282:
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
            var _closure2_slot29 = var12;
            var13 = var14.useCallback;
            var12 = new Array(2);
            var12[0] = var8;
            var12[1] = var10;
            var8 = function() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var2 = _closure2_slot28;
                    var1 = undefined;
                    var7 = var2.bind(var1)();
                    var2 = _closure2_slot29;
                    var2 = var2.bind(var1)(var7);
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0025_ip = 282; continue _fun0025 }
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
case 282:
                    return var1;
                }
            };
            var8 = var13.bind(var14)(var8, var12);
            var _closure2_slot30 = var8;
            var13 = var14.useEffect;
            var12 = new Array(4);
            var12[0] = var10;
            var12[1] = var2;
            var12[2] = var7;
            var12[3] = var8;
            var7 = function() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot27;
                    var3 = var3.current;
                    var3 = var3.guildId;
                    if(!(var4 !== var3)) { _fun0026_ip = 284; continue _fun0026 }
case 173:
                    var4 = _closure2_slot27;
                    var3 = {};
                    var5 = _closure2_slot1;
                    var3['guildId'] = var5;
                    var5 = false;
                    var3['hasComputed'] = var5;
                    var4['current'] = var3;
case 284:
                    var3 = _closure2_slot27;
                    var3 = var3.current;
                    var3 = var3.hasComputed;
                    if(var3) { _fun0026_ip = 285; continue _fun0026 }
case 286:
                    var4 = _closure2_slot26;
                    var3 = undefined;
                    if(var4) { _fun0026_ip = 178; continue _fun0026 }
case 287:
                    var4 = _closure2_slot30;
                    var4 = var4.bind(var3)();
                    _fun0026_ip = 288; continue _fun0026;
case 178:
                    return var3;
case 285:
                    var2 = _closure2_slot20;
                    if(var2) { _fun0026_ip = 49; continue _fun0026 }
case 288:
                    var2 = undefined;
                    return var2;
case 49:
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        var2 = _closure2_slot30;
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
            if(var12) { _fun0005_ip = 289; continue _fun0005 }
case 290:
            var7 = var11.id;
case 289:
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
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                        var2 = _closure3_slot4;
                        var3 = var2.current;
                        var2 = -1;
                        if(!(var2 !== var3)) { _fun0027_ip = 2; continue _fun0027 }
case 291:
                        var2 = global;
                        var4 = var2.clearTimeout;
                        var2 = _closure3_slot4;
                        var3 = var2.current;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
case 2:
                        var2 = _closure3_slot2;
                        if(!var2) { _fun0027_ip = 292; continue _fun0027 }
case 61:
                        var2 = _closure3_slot4;
                        var1 = global;
                        var5 = var1.setTimeout;
                        var4 = undefined;
                        var3 = function() {
                            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
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
                                if(!var5) { _fun0028_ip = 146; continue _fun0028 }
case 176:
                                var5 = _closure3_slot1;
                                var5 = var7 != var5;
                                var2 = var6;
                                if(!var5) { _fun0028_ip = 146; continue _fun0028 }
case 292:
                                var7 = _closure1_slot16;
                                var6 = var7.getProps;
                                var5 = _closure3_slot0;
                                var4 = _closure3_slot1;
                                var4 = var6.bind(var7)(var5, var4);
                                var2 = var4.version;
case 146:
                                var3 = var3 + var2;
                                var2 = _closure3_slot5;
                                var2 = var2.current;
                                if(!(var2 !== var3)) { _fun0028_ip = 293; continue _fun0028 }
case 294:
                                var2 = _closure3_slot5;
                                var2['current'] = var3;
                                var2 = _closure3_slot3;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
case 293:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = 1000;
                        var1 = var5.bind(var4)(var3, var1);
                        var2['current'] = var1;
case 292:
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
                        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                            var2 = _closure3_slot4;
                            var3 = var2.current;
                            var2 = -1;
                            if(!(var2 !== var3)) { _fun0029_ip = 2; continue _fun0029 }
case 291:
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
            var40 = undefined;
            var39 = var10;
            var38 = var7;
            var37 = var9;
            var36 = var8;
            var6 = var40[var6](var39, var38, var37, var36, var35);
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 41;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var3 = var1.bind(var5)(var3);
            var1 = new Array(2);
            var1[0] = var4;
            if(var2) { _fun0005_ip = 295; continue _fun0005 }
case 296:
            var3 = var3.hasComputed;
            var2 = !var3;
case 295:
            var1[1] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot35;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot35;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 345:
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
    var _closure1_slot35 = var1;
    var1 = function countActiveChannels(arg1) {
        var3 = arg1;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var3 = var1.kind;
                var1 = 'active-channel';
                var1 = var1 === var3;
                if(var1) { _fun0004_ip = 29; continue _fun0004 }
 21:
                var2 = 'voice';
                var1 = var2 === var3;
 29:
                if(var1) { _fun0004_ip = 42; continue _fun0004 }
 32:
                var2 = 'live-guild-stage';
                var1 = var2 === var3;
 42:
                if(var1) { _fun0004_ip = 55; continue _fun0004 }
 45:
                var2 = 'unified-vc';
                var1 = var2 === var3;
 55:
                if(var1) { _fun0004_ip = 68; continue _fun0004 }
 58:
                var2 = 'embedded-activity';
                var1 = var2 === var3;
 68:
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
 0:
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
            if(!var22) { _fun0005_ip = 49; continue _fun0005 }
 46:
            var22 = var2;
 49:
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
 0:
                    var2 = _closure2_slot1;
                    var6 = null;
                    if(!(var6 != var2)) { _fun0006_ip = 194; continue _fun0006 }
 16:
                    var5 = _closure2_slot0;
                    var4 = var5.has;
                    var3 = _closure1_slot28;
                    var3 = var3.ACTIVE_CHANNEL;
                    var3 = var4.bind(var5)(var3);
                    if(!var3) { _fun0006_ip = 194; continue _fun0006 }
 49:
                    var3 = _closure2_slot12;
                    if(!var3) { _fun0006_ip = 194; continue _fun0006 }
 59:
                    var3 = _closure2_slot11;
                    if(!var3) { _fun0006_ip = 194; continue _fun0006 }
 69:
                    var3 = _closure2_slot4;
                    if(!var3) { _fun0006_ip = 194; continue _fun0006 }
 76:
                    var5 = _closure1_slot7;
                    var4 = var5.getActiveChannelsFetchStatus;
                    var3 = _closure2_slot1;
                    var4 = var4.bind(var5)(var3);
                    var3 = var6 == var4;
                    if(var3) { _fun0006_ip = 114; continue _fun0006 }
 104:
                    var5 = var4.fetchedAt;
                    var3 = var6 == var5;
 114:
                    if(var3) { _fun0006_ip = 154; continue _fun0006 }
 117:
                    var5 = global;
                    var6 = var5.Date;
                    var5 = var6.now;
                    var5 = var5.bind(var6)();
                    var4 = var4.fetchedAt;
                    var5 = var5 - var4;
                    var4 = 300000;
                    var3 = var5 > var4;
 154:
                    if(!var3) { _fun0006_ip = 194; continue _fun0006 }
 157:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 24;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchActiveChannels;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
 194:
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
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0007_ip = 37; continue _fun0007 }
 16:
                    var4 = _closure1_slot21;
                    var3 = var4.getGuild;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 37:
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
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0008_ip = 38; continue _fun0008 }
 16:
                    var4 = _closure1_slot19;
                    var3 = var4.getDefaultChannel;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 38:
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
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0009_ip = 38; continue _fun0009 }
 16:
                    var4 = _closure1_slot19;
                    var3 = var4.getChannels;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 38:
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
 0:
                    var1 = _closure2_slot12;
                    if(!var1) { _fun0010_ip = 14; continue _fun0010 }
 10:
                    var1 = _closure2_slot11;
 14:
                    if(!var1) { _fun0010_ip = 21; continue _fun0010 }
 17:
                    var1 = _closure2_slot4;
 21:
                    if(!var1) { _fun0010_ip = 34; continue _fun0010 }
 24:
                    var4 = _closure2_slot1;
                    var3 = null;
                    var1 = var3 != var4;
 34:
                    if(!var1) { _fun0010_ip = 47; continue _fun0010 }
 37:
                    var4 = _closure2_slot15;
                    var3 = null;
                    var1 = var3 != var4;
 47:
                    if(!var1) { _fun0010_ip = 228; continue _fun0010 }
 53:
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
                    if(!var4) { _fun0010_ip = 172; continue _fun0010 }
 155:
                    var6 = _closure2_slot16;
                    var5 = _closure2_slot15;
                    var5 = var5.id;
                    var4 = var6 !== var5;
 172:
                    if(!var4) { _fun0010_ip = 228; continue _fun0010 }
 175:
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
 228:
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
            if(!var7) { _fun0005_ip = 704; continue _fun0005 }
 701:
            var7 = !var3;
 704:
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
 0:
                    var2 = _closure2_slot1;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0011_ip = 129; continue _fun0011 }
 13:
                    var2 = _closure2_slot15;
                    if(!(var5 != var2)) { _fun0011_ip = 129; continue _fun0011 }
 21:
                    var6 = _closure1_slot16;
                    var4 = var6.getProps;
                    var3 = _closure2_slot1;
                    var1 = _closure2_slot15;
                    var1 = var1.id;
                    var3 = var4.bind(var6)(var3, var1);
                    var4 = var5 == var3;
                    if(var4) { _fun0011_ip = 70; continue _fun0011 }
 60:
                    var1 = var3.groups;
                    var4 = var5 == var1;
 70:
                    if(var4) { _fun0011_ip = 90; continue _fun0011 }
 73:
                    var1 = var3.groups;
                    var5 = var1.length;
                    var1 = 0;
                    var4 = var5 <= var1;
 90:
                    var1 = !var4;
                    if(var4) { _fun0011_ip = 127; continue _fun0011 }
 96:
                    var4 = var3.groups;
                    var3 = 0;
                    var3 = var4[var3];
                    var3 = var3.id;
                    var2 = _closure1_slot32;
                    var2 = var2.UNKNOWN;
                    var1 = var3 === var2;
 127:
                    return var1;
 129:
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
 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var1 = var4 != var1;
                    if(!var1) { _fun0012_ip = 78; continue _fun0012 }
 16:
                    var7 = _closure2_slot0;
                    var6 = var7.has;
                    var2 = _closure1_slot28;
                    var2 = var2.ACTIVE_CHANNEL;
                    var2 = var6.bind(var7)(var2);
                    var6 = !var2;
                    var2 = !var6;
                    if(var6) { _fun0012_ip = 75; continue _fun0012 }
 52:
                    var6 = _closure1_slot7;
                    var5 = var6.getActiveChannelIds;
                    var3 = _closure2_slot1;
                    var3 = var5.bind(var6)(var3);
                    var2 = var4 == var3;
 75:
                    var1 = var2;
 78:
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
 0:
                    var1 = {};
                    var3 = _closure1_slot22;
                    var2 = var3.getChannelsVersion;
                    var2 = var2.bind(var3)();
                    var1['permissionChannelsVersion'] = var2;
                    var5 = _closure2_slot1;
                    var2 = null;
                    var5 = var2 != var5;
                    if(!var5) { _fun0013_ip = 65; continue _fun0013 }
 44:
                    var5 = _closure1_slot22;
                    var4 = var5.getGuildVersion;
                    var3 = _closure2_slot1;
                    var2 = var4.bind(var5)(var3);
 65:
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
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0014_ip = 38; continue _fun0014 }
 16:
                    var4 = _closure1_slot7;
                    var3 = var4.getActiveChannelIds;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 38:
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
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0015_ip = 37; continue _fun0015 }
 13:
                    var3 = _closure1_slot5;
                    var2 = var3.getEmbeddedActivitiesForGuild;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
                    _fun0015_ip = 41; continue _fun0015;
 37:
                    var1 = new Array(0);
 41:
                    return var1;
                }
            };
            var4 = var30.bind(var31)(var14, var4, var12);
            var2 = !var2;
            if(var2) { _fun0005_ip = 1098; continue _fun0005 }
 1095:
            var2 = var8;
 1098:
            if(var2) { _fun0005_ip = 1104; continue _fun0005 }
 1101:
            var2 = var3;
 1104:
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
 0:
                        var2 = function addUser(arg1, arg2, arg3) {
                            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                                var3 = arg1;
                                var9 = arg2;
                                var13 = arg3;
                                var _closure5_slot0 = var3;
                                var _closure5_slot1 = var13;
                                var2 = _closure1_slot24;
                                var1 = var2.isBlockedOrIgnored;
                                var1 = var1.bind(var2)(var3);
                                if(var1) { _fun0017_ip = 1288; continue _fun0017 }
 43:
                                var5 = _closure1_slot18;
                                var2 = var5.getChannel;
                                var7 = null;
                                var6 = var7 == var13;
                                var4 = undefined;
                                var1 = undefined;
                                if(var6) { _fun0017_ip = 70; continue _fun0017 }
 65:
                                var1 = var13.channelId;
 70:
                                var1 = var2.bind(var5)(var1);
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 32;
                                var2 = var6[var2];
                                var5 = var5.bind(var4)(var2);
                                var2 = var5.isChannelContentGated;
                                var2 = var2.bind(var5)(var1);
                                if(var2) { _fun0017_ip = 1288; continue _fun0017 }
 112:
                                if(!(var7 != var1)) { _fun0017_ip = 194; continue _fun0017 }
 116:
                                var2 = var1.isGroupDM;
                                var2 = var2.bind(var1)();
                                if(var2) { _fun0017_ip = 187; continue _fun0017 }
 129:
                                var6 = _closure1_slot22;
                                var5 = var6.can;
                                var2 = _closure1_slot31;
                                var2 = var2.CONNECT;
                                var2 = var5.bind(var6)(var2, var1);
                                if(!var2) { _fun0017_ip = 194; continue _fun0017 }
 158:
                                var6 = _closure1_slot22;
                                var5 = var6.can;
                                var2 = _closure1_slot31;
                                var2 = var2.VIEW_CHANNEL;
                                var2 = var5.bind(var6)(var2, var1);
                                if(!var2) { _fun0017_ip = 194; continue _fun0017 }
 187:
                                if(!(var7 == var13)) { _fun0017_ip = 710; continue _fun0017 }
 194:
                                if(!(var7 == var9)) { _fun0017_ip = 343; continue _fun0017 }
 201:
                                var2 = _closure2_slot10;
                                if(!var2) { _fun0017_ip = 1288; continue _fun0017 }
 214:
                                var6 = _closure1_slot23;
                                var5 = var6.getStatus;
                                var2 = _closure2_slot1;
                                var5 = var5.bind(var6)(var3, var2);
                                if(!(var7 != var5)) { _fun0017_ip = 1288; continue _fun0017 }
 241:
                                var2 = _closure1_slot32;
                                var2 = var2.OFFLINE;
                                if(!(var5 !== var2)) { _fun0017_ip = 299; continue _fun0017 }
 255:
                                var6 = _closure4_slot8;
                                var5 = var6.push;
                                var2 = {};
                                var12 = 'user';
                                var2['kind'] = var12;
                                var2['userId'] = var3;
                                var12 = _closure2_slot1;
                                var2['guildId'] = var12;
                                var2 = var5.bind(var6)(var2);
                                _fun0017_ip = 1288; continue _fun0017;
 299:
                                var6 = _closure4_slot9;
                                var5 = var6.push;
                                var2 = {};
                                var12 = 'user';
                                var2['kind'] = var12;
                                var2['userId'] = var3;
                                var11 = _closure2_slot1;
                                var2['guildId'] = var11;
                                var2 = var5.bind(var6)(var2);
                                _fun0017_ip = 1288; continue _fun0017;
 343:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 34;
                                var2 = var6[var2];
                                var5 = var5.bind(var4)(var2);
                                var2 = var5.isActivityPermanentCustomStatus;
                                var2 = var2.bind(var5)(var9);
                                if(var2) { _fun0017_ip = 648; continue _fun0017 }
 380:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 35;
                                var2 = var6[var2];
                                var5 = var5.bind(var4)(var2);
                                var2 = var5.isActivityTemporaryCustomStatus;
                                var2 = var2.bind(var5)(var9);
                                if(var2) { _fun0017_ip = 595; continue _fun0017 }
 420:
                                var2 = _closure2_slot9;
                                if(!var2) { _fun0017_ip = 1288; continue _fun0017 }
 430:
                                var5 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var2 = 36;
                                var2 = var11[var2];
                                var5 = var5.bind(var4)(var2);
                                var2 = _closure1_slot29;
                                var2 = var2.EMBEDDED;
                                var2 = var5.bind(var4)(var9, var2);
                                if(!var2) { _fun0017_ip = 546; continue _fun0017 }
 469:
                                var12 = _closure1_slot18;
                                var11 = var12.getChannel;
                                var15 = _closure1_slot27;
                                var14 = var15.getVoiceStateForSession;
                                var5 = var9.session_id;
                                var14 = var14.bind(var15)(var3, var5);
                                var15 = var7 == var14;
                                var5 = undefined;
                                if(var15) { _fun0017_ip = 514; continue _fun0017 }
 509:
                                var5 = var14.channelId;
 514:
                                var12 = var11.bind(var12)(var5);
                                var5 = var7 == var12;
                                var11 = undefined;
                                if(var5) { _fun0017_ip = 538; continue _fun0017 }
 528:
                                var5 = var12.getGuildId;
                                var11 = var5.bind(var12)();
 538:
                                var5 = _closure2_slot1;
                                var2 = var11 !== var5;
 546:
                                if(var2) { _fun0017_ip = 1288; continue _fun0017 }
 552:
                                var5 = _closure4_slot6;
                                var2 = {};
                                var2['userId'] = var3;
                                var11 = _closure2_slot1;
                                var2['guildId'] = var11;
                                var11 = 'activity';
                                var2['kind'] = var11;
                                var2['activity'] = var9;
                                var5[var3] = var2;
                                _fun0017_ip = 1288; continue _fun0017;
 595:
                                var2 = _closure2_slot8;
                                if(!var2) { _fun0017_ip = 1288; continue _fun0017 }
 605:
                                var5 = _closure4_slot7;
                                var2 = {};
                                var2['userId'] = var3;
                                var6 = _closure2_slot1;
                                var2['guildId'] = var6;
                                var6 = 'activity';
                                var2['kind'] = var6;
                                var2['activity'] = var9;
                                var5[var3] = var2;
                                _fun0017_ip = 1288; continue _fun0017;
 648:
                                var2 = _closure2_slot8;
                                if(!var2) { _fun0017_ip = 1288; continue _fun0017 }
 661:
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
                                _fun0017_ip = 1288; continue _fun0017;
 710:
                                var11 = _closure1_slot14;
                                var5 = var11.getStreamForUser;
                                var2 = _closure2_slot1;
                                if(!(var7 == var2)) { _fun0017_ip = 752; continue _fun0017 }
 731:
                                var12 = var7 == var1;
                                var2 = undefined;
                                if(var12) { _fun0017_ip = 750; continue _fun0017 }
 740:
                                var12 = var1.getGuildId;
                                var2 = var12.bind(var1)();
 750:
                                _fun0017_ip = 756; continue _fun0017;
 752:
                                var2 = _closure2_slot1;
 756:
                                var5 = var5.bind(var11)(var3, var2);
                                if(!(var7 != var5)) { _fun0017_ip = 776; continue _fun0017 }
 766:
                                var2 = _closure2_slot7;
                                if(var2) { _fun0017_ip = 1198; continue _fun0017 }
 776:
                                if(!(var7 != var1)) { _fun0017_ip = 1288; continue _fun0017 }
 783:
                                var14 = _closure4_slot1;
                                var12 = var14.has;
                                var11 = var1.id;
                                var11 = var12.bind(var14)(var11);
                                if(var11) { _fun0017_ip = 1288; continue _fun0017 }
 811:
                                var11 = var1.isGuildStageVoice;
                                var11 = var11.bind(var1)();
                                if(var11) { _fun0017_ip = 1089; continue _fun0017 }
 827:
                                var11 = _closure2_slot6;
                                if(!var11) { _fun0017_ip = 1003; continue _fun0017 }
 837:
                                var14 = _closure1_slot5;
                                var12 = var14.getEmbeddedActivitiesForChannel;
                                var11 = var1.id;
                                var16 = var12.bind(var14)(var11);
                                var11 = _closure2_slot3;
                                if(var11) { _fun0017_ip = 956; continue _fun0017 }
 864:
                                var12 = _closure1_slot0;
                                var14 = _closure1_slot2;
                                var11 = 33;
                                var11 = var14[var11];
                                var12 = var12.bind(var4)(var11);
                                var11 = var12.findActivityWithMostNonBlockedOrIgnoredParticipants;
                                var11 = var11.bind(var12)(var16);
                                if(!(var7 !== var11)) { _fun0017_ip = 1003; continue _fun0017 }
 899:
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
                                _fun0017_ip = 1003; continue _fun0017;
 956:
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
 1003:
                                var12 = _closure4_slot3;
                                var11 = var1.id;
                                var10 = {};
                                var14 = 'voice';
                                var10['kind'] = var14;
                                var10['userId'] = var3;
                                var10['voiceState'] = var13;
                                var13 = _closure2_slot1;
                                if(!(var7 == var13)) { _fun0017_ip = 1060; continue _fun0017 }
 1039:
                                var13 = var7 == var1;
                                var14 = undefined;
                                if(var13) { _fun0017_ip = 1058; continue _fun0017 }
 1048:
                                var13 = var1.getGuildId;
                                var14 = var13.bind(var1)();
 1058:
                                _fun0017_ip = 1064; continue _fun0017;
 1060:
                                var14 = _closure2_slot1;
 1064:
                                var15 = var7 != var14;
                                var13 = undefined;
                                if(!var15) { _fun0017_ip = 1076; continue _fun0017 }
 1073:
                                var13 = var14;
 1076:
                                var10['guildId'] = var13;
                                var12[var11] = var10;
                                _fun0017_ip = 1288; continue _fun0017;
 1089:
                                var11 = _closure1_slot24;
                                var10 = var11.isFriend;
                                var10 = var10.bind(var11)(var3);
                                if(var10) { _fun0017_ip = 1109; continue _fun0017 }
 1107:
                                return var4;
 1109:
                                var12 = _closure1_slot12;
                                var11 = var12.getStageInstanceByChannel;
                                var10 = var1.id;
                                var10 = var11.bind(var12)(var10);
                                if(!(var7 != var10)) { _fun0017_ip = 1196; continue _fun0017 }
 1133:
                                var12 = _closure1_slot22;
                                var11 = var12.can;
                                var8 = _closure1_slot31;
                                var8 = var8.CONNECT;
                                var8 = var11.bind(var12)(var8, var1);
                                if(var8) { _fun0017_ip = 1164; continue _fun0017 }
 1162:
                                return var4;
 1164:
                                var8 = _closure4_slot2;
                                var2 = var1.id;
                                var1 = {};
                                var11 = 'live-guild-stage';
                                var1['kind'] = var11;
                                var1['stage'] = var10;
                                var8[var2] = var1;
                                _fun0017_ip = 1288; continue _fun0017;
 1196:
                                return var4;
 1198:
                                var2 = _closure4_slot5;
                                var1 = {};
                                var1['userId'] = var3;
                                var8 = _closure2_slot1;
                                var1['guildId'] = var8;
                                var8 = 'activity';
                                var1['kind'] = var8;
                                var10 = var7 != var9;
                                var8 = undefined;
                                if(!var10) { _fun0017_ip = 1239; continue _fun0017 }
 1236:
                                var8 = var9;
 1239:
                                var1['activity'] = var8;
                                var8 = _closure2_slot1;
                                if(!(var7 != var8)) { _fun0017_ip = 1276; continue _fun0017 }
 1252:
                                var8 = var7 == var5;
                                var7 = undefined;
                                if(var8) { _fun0017_ip = 1266; continue _fun0017 }
 1261:
                                var7 = var5.guildId;
 1266:
                                var6 = _closure2_slot1;
                                var4 = undefined;
                                if(!(var7 === var6)) { _fun0017_ip = 1279; continue _fun0017 }
 1276:
                                var4 = var5;
 1279:
                                var1['stream'] = var4;
                                var2[var3] = var1;
 1288:
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
                        if(!var5) { _fun0016_ip = 155; continue _fun0016 }
 124:
                        var6 = var3.add;
                        var5 = _closure2_slot21;
                        var5 = var5[var1];
                        var5 = var5.otherUserId;
                        var5 = var6.bind(var3)(var5);
                        var1 = var1 + 1;
                        if(var1 < var4) { _fun0016_ip = 124; continue _fun0016 }
 155:
                        var4 = _closure1_slot34;
                        var1 = _closure2_slot22;
                        var37 = undefined;
                        var5 = var4.bind(var37)(var1);
                        var4 = var5.bind(var37)();
                        var1 = var4.done;
                        if(var1) { _fun0016_ip = 215; continue _fun0016 }
 185:
                        var6 = var4.value;
                        var1 = var3.add;
                        var1 = var1.bind(var3)(var6);
                        var6 = var5.bind(var37)();
                        var1 = var6.done;
                        var4 = var6;
                        if(!var1) { _fun0016_ip = 185; continue _fun0016 }
 215:
                        var4 = _closure1_slot18;
                        var1 = var4.getMutablePrivateChannels;
                        var8 = var1.bind(var4)();
                        var6 = var8;
                        for(var1 in var6)
 240:
                        {
 249:
                            var9 = var1;
                            var11 = var8[var9];
                            var9 = var11.isPrivate;
                            var9 = var9.bind(var11)();
                            if(!var9) { _fun0016_ip = 240; continue _fun0016 }
 269:
                            var10 = var3.add;
                            var9 = var11.getRecipientId;
                            var9 = var9.bind(var11)();
                            var9 = var10.bind(var3)(var9);
                            _fun0016_ip = 240; continue _fun0016;
                        }
 291:
                        var1 = _closure2_slot1;
                        var36 = null;
                        if(!(var36 != var1)) { _fun0016_ip = 309; continue _fun0016 }
 301:
                        var1 = _closure2_slot15;
                        if(!(var36 == var1)) { _fun0016_ip = 315; continue _fun0016 }
 309:
                        var5 = new Array(0);
                        _fun0016_ip = 344; continue _fun0016;
 315:
                        var7 = _closure1_slot16;
                        var6 = var7.getRows;
                        var4 = _closure2_slot1;
                        var1 = _closure2_slot15;
                        var1 = var1.id;
                        var5 = var6.bind(var7)(var4, var1);
 344:
                        var4 = var5.forEach;
                        var1 = function(arg1) {
                            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                                var1 = arg1;
                                var3 = var1.type;
                                var2 = _closure1_slot17;
                                var2 = var2.MEMBER;
                                if(!(var3 === var2)) { _fun0018_ip = 47; continue _fun0018 }
 25:
                                var3 = _closure4_slot0;
                                var2 = var3.add;
                                var1 = var1.userId;
                                var1 = var2.bind(var3)(var1);
 47:
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
                        if(var1) { _fun0016_ip = 533; continue _fun0016 }
 430:
                        var1 = var4.value;
                        var8 = _closure1_slot10;
                        var8 = var8.bind(var37)(var1);
                        if(var8) { _fun0016_ip = 484; continue _fun0016 }
 447:
                        var8 = _closure1_slot9;
                        var8 = var8.bind(var37)(var1);
                        if(!var8) { _fun0016_ip = 469; continue _fun0016 }
 459:
                        var9 = _closure1_slot8;
                        var8 = var9.bind(var37)(var1, var5);
 469:
                        if(!var8) { _fun0016_ip = 494; continue _fun0016 }
 472:
                        var8 = var34.push;
                        var8 = var8.bind(var34)(var1);
                        _fun0016_ip = 494; continue _fun0016;
 484:
                        var8 = var35.push;
                        var8 = var8.bind(var35)(var1);
 494:
                        var8 = var1.channel_id;
                        if(!(var36 != var8)) { _fun0016_ip = 518; continue _fun0016 }
 503:
                        var8 = var7.add;
                        var1 = var1.channel_id;
                        var1 = var8.bind(var7)(var1);
 518:
                        var8 = var6.bind(var37)();
                        var1 = var8.done;
                        var4 = var8;
                        if(!var1) { _fun0016_ip = 430; continue _fun0016 }
 533:
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
                        if(!(var36 != var1)) { _fun0016_ip = 641; continue _fun0016 }
 577:
                        var1 = _closure2_slot5;
                        if(!var1) { _fun0016_ip = 641; continue _fun0016 }
 584:
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
 0:
                                var4 = arg1;
                                var5 = _closure1_slot22;
                                var3 = var5.canWithPartialContext;
                                var1 = _closure1_slot31;
                                var2 = var1.CONNECT;
                                var1 = {};
                                var6 = var4.channel_id;
                                var1['channelId'] = var6;
                                var1 = var3.bind(var5)(var2, var1);
                                if(!var1) { _fun0019_ip = 70; continue _fun0019 }
 46:
                                var5 = var4.channel_id;
                                var3 = function blockedOrIgnoredUserInVoiceChannel(arg1) {
                                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                                        var6 = arg1;
                                        var1 = null;
                                        if(!(var1 != var6)) { _fun0020_ip = 135; continue _fun0020 }
 14:
                                        var5 = _closure1_slot27;
                                        var4 = var5.getVoiceStatesForChannel;
                                        var5 = var4.bind(var5)(var6);
                                        var1 = var1 != var5;
                                        if(!var1) { _fun0020_ip = 133; continue _fun0020 }
 39:
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
 0:
                                                var3 = _closure1_slot26;
                                                var2 = var3.getUser;
                                                var1 = arg1;
                                                var1 = var1.userId;
                                                var2 = var2.bind(var3)(var1);
                                                var1 = null;
                                                var3 = var1 == var2;
                                                var1 = undefined;
                                                if(var3) { _fun0021_ip = 42; continue _fun0021 }
 37:
                                                var1 = var2.id;
 42:
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
 133:
                                        return var1;
 135:
                                        var1 = false;
                                        return var1;
                                    }
                                };
                                var2 = undefined;
                                var2 = var3.bind(var2)(var5);
                                var1 = !var2;
 70:
                                if(!var1) { _fun0019_ip = 106; continue _fun0019 }
 73:
                                var3 = _closure4_slot2;
                                var2 = var4.channel_id;
                                var1 = {};
                                var5 = 'live-guild-stage';
                                var1['kind'] = var5;
                                var1['stage'] = var4;
                                var3[var2] = var1;
 106:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var4.bind(var5)(var6, var1);
 641:
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
 0:
                                var3 = arg1;
                                var2 = _closure1_slot26;
                                var1 = var2.getUser;
                                var1 = var1.bind(var2)(var3);
                                var2 = null;
                                if(!(var2 != var1)) { _fun0022_ip = 147; continue _fun0022 }
 27:
                                var1 = var1.bot;
                                if(var1) { _fun0022_ip = 130; continue _fun0022 }
 36:
                                var7 = _closure1_slot23;
                                var5 = var7.getPrimaryActivity;
                                var6 = _closure2_slot1;
                                var5 = var5.bind(var7)(var3, var6);
                                if(!(var2 == var6)) { _fun0022_ip = 80; continue _fun0022 }
 63:
                                var6 = _closure1_slot27;
                                var4 = var6.getVoiceStateForUser;
                                var4 = var4.bind(var6)(var3);
                                _fun0022_ip = 91; continue _fun0022;
 80:
                                var6 = _closure4_slot10;
                                var4 = var6[var3];
 91:
                                var1 = _closure2_slot10;
                                if(var1) { _fun0022_ip = 102; continue _fun0022 }
 98:
                                var1 = var2 != var5;
 102:
                                if(var1) { _fun0022_ip = 109; continue _fun0022 }
 105:
                                var1 = var2 != var4;
 109:
                                if(!var1) { _fun0022_ip = 147; continue _fun0022 }
 112:
                                var2 = _closure4_slot13;
                                var1 = undefined;
                                var1 = var2.bind(var1)(var3, var5, var4);
                                _fun0022_ip = 147; continue _fun0022;
 130:
                                var2 = _closure4_slot11;
                                var1 = var2.add;
                                var1 = var1.bind(var2)(var3);
 147:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var6.bind(var3)(var1);
                        var1 = var5.size;
                        var1 = var1 > var39;
                        if(!var1) { _fun0016_ip = 753; continue _fun0016 }
 739:
                        var6 = var5.size;
                        var3 = var3.size;
                        var1 = var6 === var3;
 753:
                        if(!var1) { _fun0016_ip = 783; continue _fun0016 }
 756:
                        var3 = var41.Array;
                        var1 = var3.from;
                        var1 = var1.bind(var3)(var5);
                        var1 = var1[var39];
                        var1 = var2.bind(var37)(var1, var36, var36);
 783:
                        var1 = _closure2_slot1;
                        if(!(var36 != var1)) { _fun0016_ip = 829; continue _fun0016 }
 791:
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
 829:
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
                        if(var2) { _fun0016_ip = 3457; continue _fun0016 }
 938:
                        var45 = var13.value;
                        var2 = _closure1_slot28;
                        var2 = var2.LIVE_GUILD_STAGE;
                        if(!(var2 !== var45)) { _fun0016_ip = 3310; continue _fun0016 }
 960:
                        var2 = _closure1_slot28;
                        var2 = var2.LIVE_GUILD_EVENT;
                        if(!(var2 !== var45)) { _fun0016_ip = 3261; continue _fun0016 }
 977:
                        var2 = _closure1_slot28;
                        var2 = var2.UPCOMING_GUILD_EVENT;
                        if(!(var2 !== var45)) { _fun0016_ip = 3209; continue _fun0016 }
 994:
                        var2 = _closure1_slot28;
                        var2 = var2.VOICES;
                        if(!(var2 !== var45)) { _fun0016_ip = 3104; continue _fun0016 }
 1011:
                        var2 = _closure1_slot28;
                        var2 = var2.EMBEDDED_ACTIVITY;
                        if(!(var2 !== var45)) { _fun0016_ip = 2937; continue _fun0016 }
 1028:
                        var2 = _closure1_slot28;
                        var2 = var2.COMBINED_VC;
                        if(!(var2 !== var45)) { _fun0016_ip = 2818; continue _fun0016 }
 1045:
                        var2 = _closure1_slot28;
                        var2 = var2.STREAMS;
                        if(!(var2 !== var45)) { _fun0016_ip = 2713; continue _fun0016 }
 1062:
                        var2 = _closure1_slot28;
                        var2 = var2.USER_CUSTOM_STATUS;
                        if(!(var2 !== var45)) { _fun0016_ip = 2608; continue _fun0016 }
 1079:
                        var2 = _closure1_slot28;
                        var2 = var2.ACTIVITIES;
                        if(!(var2 !== var45)) { _fun0016_ip = 2503; continue _fun0016 }
 1096:
                        var2 = _closure1_slot28;
                        var2 = var2.ACTIVE_CHANNEL;
                        if(!(var2 !== var45)) { _fun0016_ip = 2251; continue _fun0016 }
 1113:
                        var2 = _closure1_slot28;
                        var2 = var2.USER;
                        if(!(var2 !== var45)) { _fun0016_ip = 1904; continue _fun0016 }
 1130:
                        var2 = _closure1_slot28;
                        var2 = var2.STUDENT_HUB_ADD_CHANNEL;
                        if(!(var2 !== var45)) { _fun0016_ip = 1763; continue _fun0016 }
 1147:
                        var2 = _closure1_slot28;
                        var2 = var2.CREATE_CHANNEL;
                        if(!(var2 !== var45)) { _fun0016_ip = 1587; continue _fun0016 }
 1164:
                        var2 = _closure1_slot28;
                        var2 = var2.INVITE;
                        if(!(var2 !== var45)) { _fun0016_ip = 1428; continue _fun0016 }
 1181:
                        var2 = _closure1_slot28;
                        var2 = var2.CUSTOMIZE_GUILD;
                        if(!(var2 !== var45)) { _fun0016_ip = 1258; continue _fun0016 }
 1195:
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
                        _fun0016_ip = 3409; continue _fun0016;
 1258:
                        var2 = _closure2_slot14;
                        var2 = var36 != var2;
                        if(!var2) { _fun0016_ip = 1299; continue _fun0016 }
 1269:
                        var57 = _closure1_slot22;
                        var56 = var57.can;
                        var54 = _closure1_slot31;
                        var55 = var54.MANAGE_GUILD;
                        var54 = _closure2_slot14;
                        var2 = var56.bind(var57)(var55, var54);
 1299:
                        if(!var2) { _fun0016_ip = 1328; continue _fun0016 }
 1302:
                        var54 = _closure2_slot14;
                        var55 = var36 == var54;
                        var54 = undefined;
                        if(var55) { _fun0016_ip = 1324; continue _fun0016 }
 1315:
                        var55 = _closure2_slot14;
                        var54 = var55.icon;
 1324:
                        var2 = var36 == var54;
 1328:
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
                        if(!var2) { _fun0016_ip = 3409; continue _fun0016 }
 1364:
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
                        _fun0016_ip = 3409; continue _fun0016;
 1428:
                        var2 = _closure2_slot14;
                        var2 = var36 != var2;
                        if(!var2) { _fun0016_ip = 1447; continue _fun0016 }
 1439:
                        var54 = _closure2_slot17;
                        var2 = var36 != var54;
 1447:
                        if(!var2) { _fun0016_ip = 1487; continue _fun0016 }
 1450:
                        var55 = _closure1_slot0;
                        var54 = _closure1_slot2;
                        var54 = var54[var16];
                        var57 = var55.bind(var37)(var54);
                        var56 = var57.shouldRenderInvite;
                        var55 = _closure2_slot17;
                        var54 = _closure2_slot14;
                        var2 = var56.bind(var57)(var55, var54);
 1487:
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
                        if(!var2) { _fun0016_ip = 3409; continue _fun0016 }
 1523:
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
                        _fun0016_ip = 3409; continue _fun0016;
 1587:
                        var2 = _closure2_slot14;
                        var2 = var36 != var2;
                        if(!var2) { _fun0016_ip = 1628; continue _fun0016 }
 1598:
                        var57 = _closure1_slot22;
                        var56 = var57.can;
                        var54 = _closure1_slot31;
                        var55 = var54.MANAGE_CHANNELS;
                        var54 = _closure2_slot14;
                        var2 = var56.bind(var57)(var55, var54);
 1628:
                        if(!var2) { _fun0016_ip = 1639; continue _fun0016 }
 1631:
                        var54 = _closure2_slot17;
                        var2 = var36 != var54;
 1639:
                        if(!var2) { _fun0016_ip = 1663; continue _fun0016 }
 1642:
                        var55 = _closure2_slot17;
                        var54 = _closure1_slot20;
                        var54 = var55[var54];
                        var54 = var54.length;
                        var2 = var54 <= var21;
 1663:
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
                        if(!var2) { _fun0016_ip = 3409; continue _fun0016 }
 1699:
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
                        _fun0016_ip = 3409; continue _fun0016;
 1763:
                        var2 = _closure2_slot14;
                        var2 = var36 != var2;
                        if(!var2) { _fun0016_ip = 1804; continue _fun0016 }
 1774:
                        var54 = _closure2_slot14;
                        var56 = var54.features;
                        var55 = var56.has;
                        var54 = _closure1_slot30;
                        var54 = var54.HUB;
                        var2 = var55.bind(var56)(var54);
 1804:
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
                        if(!var2) { _fun0016_ip = 3409; continue _fun0016 }
 1840:
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
                        _fun0016_ip = 3409; continue _fun0016;
 1904:
                        var2 = var27.length;
                        var58 = var39 < var2;
                        var55 = 0;
                        var54 = 0;
                        var2 = 0;
                        var57 = 0;
                        var56 = var5;
                        if(!var58) { _fun0016_ip = 2020; continue _fun0016 }
 1927:
                        var59 = var27[var54];
                        var58 = _closure2_slot2;
                        var60 = var36 != var58;
                        if(!var60) { _fun0016_ip = 1961; continue _fun0016 }
 1942:
                        var62 = _closure2_slot2;
                        var61 = var62.has;
                        var58 = var59.userId;
                        var60 = var61.bind(var62)(var58);
 1961:
                        var58 = var55;
                        if(var60) { _fun0016_ip = 1980; continue _fun0016 }
 1967:
                        var60 = var1.push;
                        var60 = var60.bind(var1)(var59);
                        var58 = var55 + 1;
 1980:
                        var60 = var54 + 1;
                        var61 = var27.length;
                        var2 = var58;
                        var57 = var60;
                        var56 = var59;
                        if(!(var60 < var61)) { _fun0016_ip = 2020; continue _fun0016 }
 2001:
                        var55 = var58;
                        var54 = var60;
                        var57 = var54;
                        var56 = var59;
                        var2 = var55;
                        if(var2 < var40) { _fun0016_ip = 1927; continue _fun0016 }
 2020:
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
                        if(!var54) { _fun0016_ip = 3409; continue _fun0016 }
 2064:
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
                        if(!(var2 < var40)) { _fun0016_ip = 3409; continue _fun0016 }
 2105:
                        var58 = var26[var54];
                        var2 = _closure2_slot2;
                        var59 = var36 != var2;
                        if(!var59) { _fun0016_ip = 2139; continue _fun0016 }
 2120:
                        var61 = _closure2_slot2;
                        var60 = var61.has;
                        var2 = var58.userId;
                        var59 = var60.bind(var61)(var2);
 2139:
                        var2 = var55;
                        if(var59) { _fun0016_ip = 2158; continue _fun0016 }
 2145:
                        var59 = var1.push;
                        var59 = var59.bind(var1)(var58);
                        var2 = var55 + 1;
 2158:
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
                        if(!(var45 < var60)) { _fun0016_ip = 3409; continue _fun0016 }
 2203:
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
                        if(var2 < var40) { _fun0016_ip = 2105; continue _fun0016 }
 2246:
                        _fun0016_ip = 3409; continue _fun0016;
 2251:
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
                        if(!(var36 != var2)) { _fun0016_ip = 3409; continue _fun0016 }
 2292:
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
                        if(!var56) { _fun0016_ip = 3409; continue _fun0016 }
 2424:
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
                        if(var49 < var54) { _fun0016_ip = 2424; continue _fun0016 }
 2498:
                        _fun0016_ip = 3409; continue _fun0016;
 2503:
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
 2547:
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
 2589:
                            var58 = var2;
                            var59 = var1.push;
                            var58 = var29[var58];
                            var58 = var59.bind(var1)(var58);
                            _fun0016_ip = 2547; continue _fun0016;
 2608:
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
 2652:
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
 2694:
                                var58 = var2;
                                var59 = var1.push;
                                var58 = var28[var58];
                                var58 = var59.bind(var1)(var58);
                                _fun0016_ip = 2652; continue _fun0016;
 2713:
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
 2757:
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
 2799:
                                    var58 = var2;
                                    var59 = var1.push;
                                    var58 = var30[var58];
                                    var58 = var59.bind(var1)(var58);
                                    _fun0016_ip = 2757; continue _fun0016;
 2818:
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
 2862:
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
 2904:
                                        var60 = var2;
                                        var59 = var1.push;
                                        var58 = {};
                                        var65 = var32[var60];
                                        var66 = var58;
                                        var60 = copyDataProperties(var66, var65);
                                        var58[var23] = var24;
                                        var58 = var59.bind(var1)(var58);
                                        _fun0016_ip = 2862; continue _fun0016;
 2937:
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
 2987:
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
 3029:
                                            var2 = var58;
                                            var54 = _closure1_slot34;
                                            var2 = var31[var2];
                                            var55 = var54.bind(var37)(var2);
                                            var54 = var55.bind(var37)();
                                            var2 = var54.done;
                                            var57 = var54;
                                            var56 = var55;
                                            var54 = var57;
                                            if(var2) { _fun0016_ip = 2987; continue _fun0016 }
 3066:
                                            var63 = var54.value;
                                            var2 = var1.push;
                                            var2 = var2.bind(var1)(var63);
                                            var63 = var55.bind(var37)();
                                            var2 = var63.done;
                                            var57 = var63;
                                            var56 = var55;
                                            var54 = var57;
                                            if(var2) { _fun0016_ip = 2987; continue _fun0016 }
 3102:
                                            _fun0016_ip = 3066; continue _fun0016;
 3104:
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
 3148:
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
 3190:
                                                var58 = var2;
                                                var59 = var1.push;
                                                var58 = var32[var58];
                                                var58 = var59.bind(var1)(var58);
                                                _fun0016_ip = 3148; continue _fun0016;
 3209:
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
                                                _fun0016_ip = 3409; continue _fun0016;
 3261:
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
                                                _fun0016_ip = 3409; continue _fun0016;
 3310:
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
 3351:
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
 3390:
                                                    var58 = var2;
                                                    var59 = var1.push;
                                                    var58 = var33[var58];
                                                    var58 = var59.bind(var1)(var58);
                                                    _fun0016_ip = 3351; continue _fun0016;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
 3409:
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
                        if(!var2) { _fun0016_ip = 938; continue _fun0016 }
 3457:
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
 0:
                    var1 = _closure2_slot24;
                    if(var1) { _fun0023_ip = 98; continue _fun0023 }
 10:
                    var1 = _closure2_slot26;
                    var7 = undefined;
                    var1 = var1.bind(var7)();
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0023_ip = 96; continue _fun0023 }
 30:
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
 96:
                    return var1;
 98:
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
 0:
                    var2 = _closure2_slot26;
                    var1 = undefined;
                    var7 = var2.bind(var1)();
                    var2 = _closure2_slot27;
                    var2 = var2.bind(var1)(var7);
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0024_ip = 98; continue _fun0024 }
 32:
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
 98:
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
 0:
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot25;
                    var3 = var3.current;
                    var3 = var3.guildId;
                    if(!(var4 !== var3)) { _fun0025_ip = 54; continue _fun0025 }
 27:
                    var4 = _closure2_slot25;
                    var3 = {};
                    var5 = _closure2_slot1;
                    var3['guildId'] = var5;
                    var5 = false;
                    var3['hasComputed'] = var5;
                    var4['current'] = var3;
 54:
                    var3 = _closure2_slot25;
                    var3 = var3.current;
                    var3 = var3.hasComputed;
                    if(var3) { _fun0025_ip = 93; continue _fun0025 }
 72:
                    var4 = _closure2_slot24;
                    var3 = undefined;
                    if(var4) { _fun0025_ip = 91; continue _fun0025 }
 81:
                    var4 = _closure2_slot28;
                    var4 = var4.bind(var3)();
                    _fun0025_ip = 100; continue _fun0025;
 91:
                    return var3;
 93:
                    var2 = _closure2_slot20;
                    if(var2) { _fun0025_ip = 104; continue _fun0025 }
 100:
                    var2 = undefined;
                    return var2;
 104:
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
            if(var12) { _fun0005_ip = 1376; continue _fun0005 }
 1371:
            var7 = var11.id;
 1376:
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
 0:
                        var2 = _closure3_slot4;
                        var3 = var2.current;
                        var2 = -1;
                        if(!(var2 !== var3)) { _fun0026_ip = 46; continue _fun0026 }
 22:
                        var2 = global;
                        var4 = var2.clearTimeout;
                        var2 = _closure3_slot4;
                        var3 = var2.current;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
 46:
                        var2 = _closure3_slot2;
                        if(!var2) { _fun0026_ip = 94; continue _fun0026 }
 53:
                        var2 = _closure3_slot4;
                        var1 = global;
                        var5 = var1.setTimeout;
                        var4 = undefined;
                        var3 = function() {
                            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
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
                                if(!var5) { _fun0027_ip = 124; continue _fun0027 }
 80:
                                var5 = _closure3_slot1;
                                var5 = var7 != var5;
                                var2 = var6;
                                if(!var5) { _fun0027_ip = 124; continue _fun0027 }
 94:
                                var7 = _closure1_slot16;
                                var6 = var7.getProps;
                                var5 = _closure3_slot0;
                                var4 = _closure3_slot1;
                                var4 = var6.bind(var7)(var5, var4);
                                var2 = var4.version;
 124:
                                var3 = var3 + var2;
                                var2 = _closure3_slot5;
                                var2 = var2.current;
                                if(!(var2 !== var3)) { _fun0027_ip = 161; continue _fun0027 }
 141:
                                var2 = _closure3_slot5;
                                var2['current'] = var3;
                                var2 = _closure3_slot3;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
 161:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = 1000;
                        var1 = var5.bind(var4)(var3, var1);
                        var2['current'] = var1;
 94:
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
 0:
                            var2 = _closure3_slot4;
                            var3 = var2.current;
                            var2 = -1;
                            if(!(var2 !== var3)) { _fun0028_ip = 46; continue _fun0028 }
 22:
                            var2 = global;
                            var3 = var2.clearTimeout;
                            var1 = _closure3_slot4;
                            var2 = var1.current;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
 46:
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
            if(var2) { _fun0005_ip = 1446; continue _fun0005 }
 1437:
            var3 = var3.hasComputed;
            var2 = !var3;
 1446:
            var1[1] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
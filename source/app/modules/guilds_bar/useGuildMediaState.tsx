// app/modules/guilds_bar/useGuildMediaState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
            var9 = _closure1_slot17;
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
            var7 = _closure1_slot17;
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
    var _closure1_slot16 = var1;
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
    var _closure1_slot17 = var1;
    var1 = function canConnectToChannel(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var4 = arguments[2];
            var7 = undefined;
            if(!(var4 === var7)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = _closure1_slot10;
case 36:
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0004_ip = 38; continue _fun0004 }
case 34:
            var3 = var5.type;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 13;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.GUILD_STAGE_VOICE;
            var1 = var3 !== var2;
case 38:
            if(!var1) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var3 = var5.id;
            var2 = arg2;
            var1 = var2 !== var3;
case 39:
            if(!var1) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var3 = var4.canBasicChannel;
            var2 = _closure1_slot15;
            var2 = var2.VIEW_CHANNEL;
            var1 = var3.bind(var4)(var2, var5);
case 41:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isVoiceChannel;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BasicPermissions;
    var _closure1_slot15 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/useGuildMediaState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildMediaState(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var15 = arg1;
            var _closure2_slot0 = var15;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var19 = 14;
            var2 = var4[var19];
            var5 = undefined;
            var8 = var3.bind(var5)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot13;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var3 = _closure1_slot13;
                var2 = var3.isMuted;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var7.bind(var8)(var6, var2);
            var _closure2_slot1 = var14;
            var2 = 15;
            var2 = var4[var2];
            var7 = var3.bind(var5)(var2);
            var6 = var7.useIsDontBadgeMutedVcsEnabled;
            var2 = 'useGuildMediaState';
            var6 = var6.bind(var7)(var2);
            var _closure2_slot2 = var6;
            var2 = 16;
            var2 = var4[var2];
            var7 = var3.bind(var5)(var2);
            var2 = var7.useGuildActiveEvent;
            var9 = var2.bind(var7)(var15);
            var _closure2_slot3 = var9;
            var2 = var4[var19];
            var10 = var3.bind(var5)(var2);
            var8 = var10.useStateFromStoresArray;
            var2 = _closure1_slot3;
            var7 = new Array(2);
            var7[0] = var2;
            var2 = _closure1_slot11;
            var7[1] = var2;
            var2 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getEmbeddedActivitiesForGuild;
                var1 = _closure2_slot0;
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = function(arg1) {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 17;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.hasBlockedOrIgnoredUserIds;
                    var2 = arg1;
                    var8 = var2.userIds;
                    var2 = new Array(0);
                    var7 = 0;
                    var9 = var2;
                    var5 = arraySpread(var9, var8, var7);
                    var5 = _closure1_slot11;
                    var1 = var5.getBlockedOrIgnoredIDs;
                    var1 = var1.bind(var5)();
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = !var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var8.bind(var10)(var7, var2);
            var _closure2_slot4 = var10;
            var2 = 18;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.getEmbeddedActivityLocationChannelId;
            var2 = 0;
            var7 = var10[var2];
            var2 = null;
            var8 = var2 == var7;
            var2 = undefined;
            if(var8) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var2 = var7.location;
case 43:
            var8 = var3.bind(var4)(var2);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 19;
            var2 = var3[var2];
            var7 = var4.bind(var5)(var2);
            var2 = var7.useIsActivitiesInTextEnabled;
            var11 = var2.bind(var7)(var8);
            var _closure2_slot5 = var11;
            var2 = var3[var19];
            var20 = var4.bind(var5)(var2);
            var13 = var20.useStateFromStoresObject;
            var18 = _closure1_slot12;
            var12 = new Array(6);
            var12[0] = var18;
            var2 = _closure1_slot14;
            var12[1] = var2;
            var2 = _closure1_slot9;
            var12[2] = var2;
            var2 = _closure1_slot10;
            var12[3] = var2;
            var17 = _closure1_slot8;
            var12[4] = var17;
            var2 = _closure1_slot13;
            var12[5] = var2;
            var8 = new Array(3);
            var8[0] = var15;
            var8[1] = var14;
            var8[2] = var6;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure1_slot12;
                    var1 = var2.getVoiceChannelId;
                    var5 = var1.bind(var2)();
                    var4 = _closure1_slot9;
                    var2 = var4.getGuild;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var4)(var1);
                    var2 = null;
                    var4 = var2 == var1;
                    var13 = undefined;
                    var12 = undefined;
                    if(var4) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    var12 = var1.afkChannelId;
case 45:
                    var9 = _closure1_slot14;
                    var1 = var9.getUsersWithVideo;
                    var8 = _closure2_slot0;
                    var7 = var1.bind(var9)(var8);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 17;
                    var1 = var6[var1];
                    var6 = var4.bind(var13)(var1);
                    var4 = var6.filterBlockedUsersFromVoiceStates;
                    var1 = var9.getVoiceStates;
                    var1 = var1.bind(var9)(var8);
                    var11 = var4.bind(var6)(var1);
                    var1 = {};
                    var6 = _closure2_slot1;
                    var4 = false;
                    if(var6) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var17 = var11;
                    var4 = false;
                    for(var9 in var17)
case 49:
                    {
                        var4 = false;
case 50:
                        var6 = var9;
                        var6 = var11[var6];
                        var21 = var6.channelId;
                        if(var2 == var21) { _fun0006_ip = 49; continue _fun0006 }
case 51:
                        var22 = _closure1_slot18;
                        var19 = _closure1_slot8;
                        var6 = var19.getBasicChannel;
                        var20 = var6.bind(var19)(var21);
                        var6 = var2 != var12;
                        var19 = undefined;
                        if(!var6) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                        var19 = var12;
case 52:
                        var6 = _closure1_slot10;
                        var6 = var22.bind(var13)(var20, var19, var6);
                        if(!var6) { _fun0006_ip = 49; continue _fun0006 }
case 54:
                        var6 = _closure2_slot2;
                        var4 = true;
                        if(!var6) { _fun0006_ip = 47; continue _fun0006 }
case 55:
                        var20 = _closure1_slot13;
                        var19 = var20.isGuildOrCategoryOrChannelMuted;
                        var6 = _closure2_slot0;
                        var6 = var19.bind(var20)(var6, var21);
                        var4 = true;
                        if(var6) { _fun0006_ip = 49; continue _fun0006 }
                    }
case 47:
                    var1['guildHasVoice'] = var4;
                    var6 = _closure2_slot1;
                    var4 = false;
                    if(var6) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                    var6 = _closure1_slot16;
                    var9 = var6.bind(var13)(var7);
                    var7 = var9.bind(var13)();
                    var6 = var7.done;
                    var4 = false;
                    if(var6) { _fun0006_ip = 56; continue _fun0006 }
case 58:
                    var6 = var7.value;
                    var6 = var11[var6];
                    var15 = var2 == var6;
                    var17 = undefined;
                    if(var15) { _fun0006_ip = 59; continue _fun0006 }
case 60:
                    var17 = var6.channelId;
case 59:
                    if(!(var2 != var17)) { _fun0006_ip = 61; continue _fun0006 }
case 62:
                    var18 = _closure1_slot18;
                    var15 = _closure1_slot8;
                    var6 = var15.getBasicChannel;
                    var16 = var6.bind(var15)(var17);
                    var6 = var2 != var12;
                    var15 = undefined;
                    if(!var6) { _fun0006_ip = 63; continue _fun0006 }
case 64:
                    var15 = var12;
case 63:
                    var6 = _closure1_slot10;
                    var6 = var18.bind(var13)(var16, var15, var6);
                    if(!var6) { _fun0006_ip = 61; continue _fun0006 }
case 65:
                    var6 = _closure2_slot2;
                    var4 = true;
                    if(!var6) { _fun0006_ip = 56; continue _fun0006 }
case 66:
                    var16 = _closure1_slot13;
                    var15 = var16.isGuildOrCategoryOrChannelMuted;
                    var6 = _closure2_slot0;
                    var6 = var15.bind(var16)(var6, var17);
                    var4 = true;
                    if(!var6) { _fun0006_ip = 56; continue _fun0006 }
case 61:
                    var15 = var9.bind(var13)();
                    var6 = var15.done;
                    var7 = var15;
                    var4 = false;
                    if(!var6) { _fun0006_ip = 58; continue _fun0006 }
case 56:
                    var1['guildHasVideo'] = var4;
                    var2 = var2 != var5;
                    if(!var2) { _fun0006_ip = 67; continue _fun0006 }
case 68:
                    var4 = _closure1_slot14;
                    var3 = var4.hasVideo;
                    var2 = var3.bind(var4)(var5);
case 67:
                    var1['selectedVoiceChannelHasVideo'] = var2;
                    return var1;
                }
            };
            var12 = var13.bind(var20)(var12, var7, var8);
            var8 = var12.guildHasVoice;
            var _closure2_slot6 = var8;
            var7 = var12.guildHasVideo;
            var _closure2_slot7 = var7;
            var13 = var12.selectedVoiceChannelHasVideo;
            var _closure2_slot8 = var13;
            var20 = _closure1_slot7;
            var12 = var20.getId;
            var12 = var12.bind(var20)();
            var _closure2_slot9 = var12;
            var3 = var3[var19];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useStateFromStoresObject;
            var3 = new Array(7);
            var3[0] = var18;
            var3[1] = var17;
            var17 = _closure1_slot3;
            var3[2] = var17;
            var17 = _closure1_slot4;
            var3[3] = var17;
            var17 = _closure1_slot6;
            var3[4] = var17;
            var16 = _closure1_slot10;
            var3[5] = var16;
            var3[6] = var2;
            var2 = new Array(10);
            var2[0] = var15;
            var2[1] = var14;
            var2[2] = var13;
            var2[3] = var12;
            var2[4] = var11;
            var2[5] = var10;
            var2[6] = var9;
            var2[7] = var8;
            var2[8] = var7;
            var2[9] = var6;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure1_slot12;
                    var2 = var3.getVoiceChannelId;
                    var12 = var2.bind(var3)();
                    var3 = _closure1_slot8;
                    var2 = var3.getChannel;
                    var2 = var2.bind(var3)(var12);
                    var15 = null;
                    var5 = var15 == var2;
                    var11 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0007_ip = 69; continue _fun0007 }
case 2:
                    var3 = var2.guild_id;
case 69:
                    var2 = _closure2_slot0;
                    var2 = var3 === var2;
                    if(var2) { _fun0007_ip = 70; continue _fun0007 }
case 71:
                    var3 = _closure2_slot1;
                    if(!var3) { _fun0007_ip = 70; continue _fun0007 }
case 38:
                    var3 = {'audio': false, 'video': false, 'screenshare': false, 'liveStage': false, 'activeEvent': false, 'activity': false, 'isCurrentUserConnected': false};
                    return var3;
case 70:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 20;
                    var3 = var6[var3];
                    var6 = var5.bind(var11)(var3);
                    var5 = var6.keys;
                    var8 = _closure1_slot4;
                    var7 = var8.getStageInstancesByGuild;
                    var3 = _closure2_slot0;
                    var3 = var7.bind(var8)(var3);
                    var6 = var5.bind(var6)(var3);
                    var5 = var6.some;
                    var3 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var4 = _closure1_slot8;
                            var3 = var4.getChannel;
                            var1 = arg1;
                            var5 = var3.bind(var4)(var1);
                            var1 = null;
                            var1 = var1 != var5;
                            if(!var1) { _fun0008_ip = 72; continue _fun0008 }
case 73:
                            var4 = _closure1_slot10;
                            var3 = var4.can;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 21;
                            var6 = var6[var2];
                            var2 = undefined;
                            var2 = var7.bind(var2)(var6);
                            var2 = var2.JOIN_VOCAL_CHANNEL_PERMISSIONS;
                            var1 = var3.bind(var4)(var2, var5);
case 72:
                            return var1;
                        }
                    };
                    var6 = var5.bind(var6)(var3);
                    var3 = var2;
                    var5 = undefined;
                    if(!var2) { _fun0007_ip = 52; continue _fun0007 }
case 14:
                    var8 = _closure1_slot8;
                    var7 = var8.getChannel;
                    var9 = var7.bind(var8)(var12);
                    var8 = var15 == var9;
                    var7 = undefined;
                    if(var8) { _fun0007_ip = 74; continue _fun0007 }
case 75:
                    var8 = var9.isGuildStageVoice;
                    var7 = var8.bind(var9)();
case 74:
                    var3 = var15 != var7;
                    var5 = var7;
case 52:
                    if(!var3) { _fun0007_ip = 76; continue _fun0007 }
case 77:
                    var3 = var5;
case 76:
                    var5 = !var2;
                    var10 = !var5;
                    if(!var2) { _fun0007_ip = 78; continue _fun0007 }
case 79:
                    var9 = _closure1_slot6;
                    var8 = var9.getActiveStreamForUser;
                    var7 = _closure2_slot9;
                    var5 = _closure2_slot0;
                    var5 = var8.bind(var9)(var7, var5);
                    var10 = var15 != var5;
case 78:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 17;
                    var5 = var8[var5];
                    var8 = var7.bind(var11)(var5);
                    var7 = var8.filterOutStreamsByBlockedOwner;
                    var9 = _closure1_slot6;
                    var5 = var9.getAllApplicationStreams;
                    var5 = var5.bind(var9)();
                    var7 = var7.bind(var8)(var5);
                    var5 = var7.some;
                    var4 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var3 = arg1;
                            var2 = var3.guildId;
                            var1 = _closure2_slot0;
                            var1 = var2 !== var1;
                            if(var1) { _fun0009_ip = 80; continue _fun0009 }
case 81:
                            var2 = _closure2_slot2;
                            if(!var2) { _fun0009_ip = 82; continue _fun0009 }
case 73:
                            var6 = _closure1_slot13;
                            var5 = var6.isGuildOrCategoryOrChannelMuted;
                            var4 = _closure2_slot0;
                            var3 = var3.channelId;
                            var2 = var5.bind(var6)(var4, var3);
case 82:
                            var1 = var2;
case 80:
                            var1 = !var1;
                            return var1;
                        }
                    };
                    var7 = var5.bind(var7)(var4);
                    var4 = _closure2_slot5;
                    if(var4) { _fun0007_ip = 83; continue _fun0007 }
case 84:
                    var5 = _closure1_slot16;
                    var4 = _closure2_slot4;
                    var17 = var5.bind(var11)(var4);
                    var4 = var17.bind(var11)();
                    var5 = var4.done;
                    var9 = 18;
                    var8 = var4;
                    var4 = false;
                    if(var5) { _fun0007_ip = 85; continue _fun0007 }
case 63:
                    var5 = var8.value;
                    var19 = _closure1_slot8;
                    var18 = var19.getChannel;
                    var21 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var20 = var20[var9];
                    var21 = var21.bind(var11)(var20);
                    var20 = var21.getEmbeddedActivityLocationChannelId;
                    var5 = var5.location;
                    var5 = var20.bind(var21)(var5);
                    var5 = var18.bind(var19)(var5);
                    if(!(var15 != var5)) { _fun0007_ip = 86; continue _fun0007 }
case 87:
                    var18 = _closure1_slot5;
                    var5 = var5.type;
                    var5 = var18.bind(var11)(var5);
                    var4 = true;
                    if(var5) { _fun0007_ip = 85; continue _fun0007 }
case 86:
                    var18 = var17.bind(var11)();
                    var5 = var18.done;
                    var8 = var18;
                    var4 = false;
                    if(var5) { _fun0007_ip = 85; continue _fun0007 }
case 67:
                    _fun0007_ip = 63; continue _fun0007;
case 83:
                    var5 = _closure2_slot4;
                    var8 = var5.length;
                    var5 = 0;
                    var4 = var8 > var5;
case 85:
                    var8 = _closure1_slot3;
                    var5 = var8.getEmbeddedActivitiesForGuild;
                    var1 = _closure2_slot0;
                    var1 = var5.bind(var8)(var1);
                    var5 = var1.length;
                    var1 = 0;
                    var1 = var5 > var1;
                    if(var2) { _fun0007_ip = 88; continue _fun0007 }
case 89:
                    var9 = _closure2_slot6;
                    var5 = _closure2_slot3;
                    var5 = var15 != var5;
                    var8 = _closure2_slot7;
                    _fun0007_ip = 90; continue _fun0007;
case 88:
                    var14 = _closure2_slot3;
                    var14 = var15 == var14;
                    var11 = undefined;
                    if(var14) { _fun0007_ip = 91; continue _fun0007 }
case 92:
                    var14 = _closure2_slot3;
                    var11 = var14.channel_id;
case 91:
                    var12 = var11 === var12;
                    var11 = var2;
                    if(!var2) { _fun0007_ip = 93; continue _fun0007 }
case 94:
                    var11 = _closure2_slot8;
case 93:
                    var9 = true;
                    var8 = var11;
                    var5 = var12;
                    var6 = var3;
                    var7 = var10;
                    var4 = var1;
case 90:
                    var1 = {};
                    var1['audio'] = var9;
                    var1['video'] = var8;
                    var1['screenshare'] = var7;
                    var1['liveStage'] = var6;
                    var1['activeEvent'] = var5;
                    var1['activity'] = var4;
                    if(var2) { _fun0007_ip = 95; continue _fun0007 }
case 96:
                    var2 = var3;
case 95:
                    var1['isCurrentUserConnected'] = var2;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3, var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
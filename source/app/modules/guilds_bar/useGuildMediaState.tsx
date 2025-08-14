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
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
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
            var9 = _closure1_slot17;
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
            var7 = _closure1_slot17;
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
 344:
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
    var _closure1_slot17 = var1;
    var1 = function canConnectToChannel(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var4 = arguments[2];
            var7 = undefined;
            if(!(var4 === var7)) { _fun0004_ip = 19; continue _fun0004 }
 12:
            var4 = _closure1_slot10;
 19:
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0004_ip = 72; continue _fun0004 }
 28:
            var3 = var5.type;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 13;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.GUILD_STAGE_VOICE;
            var1 = var3 !== var2;
 72:
            if(!var1) { _fun0004_ip = 87; continue _fun0004 }
 75:
            var3 = var5.id;
            var2 = arg2;
            var1 = var2 !== var3;
 87:
            if(!var1) { _fun0004_ip = 115; continue _fun0004 }
 90:
            var3 = var4.canBasicChannel;
            var2 = _closure1_slot15;
            var2 = var2.VIEW_CHANNEL;
            var1 = var3.bind(var4)(var2, var5);
 115:
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
 0:
            var14 = arg1;
            var _closure2_slot0 = var14;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var17 = 14;
            var3 = var7[var17];
            var5 = undefined;
            var8 = var4.bind(var5)(var3);
            var6 = var8.useStateFromStores;
            var3 = _closure1_slot13;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot13;
                var2 = var3.isMuted;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var6.bind(var8)(var4, var3);
            var6 = _closure1_slot1;
            var3 = 15;
            var3 = var7[var3];
            var7 = var6.bind(var5)(var3);
            var6 = var7.useConfig;
            var3 = {};
            var8 = 'useGuildMediaState';
            var3['location'] = var8;
            var3 = var6.bind(var7)(var3);
            var3 = var3.enabled;
            if(!var13) { _fun0005_ip = 114; continue _fun0005 }
 111:
            var13 = !var3;
 114:
            var _closure2_slot1 = var13;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 16;
            var3 = var6[var3];
            var7 = var4.bind(var5)(var3);
            var3 = var7.useGuildActiveEvent;
            var8 = var3.bind(var7)(var14);
            var _closure2_slot2 = var8;
            var3 = var6[var17];
            var10 = var4.bind(var5)(var3);
            var9 = var10.useStateFromStoresArray;
            var3 = _closure1_slot3;
            var7 = new Array(2);
            var7[0] = var3;
            var3 = _closure1_slot11;
            var7[1] = var3;
            var3 = function() {
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
            var9 = var9.bind(var10)(var7, var3);
            var _closure2_slot3 = var9;
            var3 = 18;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.getEmbeddedActivityLocationChannelId;
            var3 = 0;
            var7 = var9[var3];
            var3 = null;
            var10 = var3 == var7;
            var3 = undefined;
            if(var10) { _fun0005_ip = 245; continue _fun0005 }
 240:
            var3 = var7.location;
 245:
            var10 = var4.bind(var6)(var3);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 19;
            var6 = var3[var6];
            var7 = var4.bind(var5)(var6);
            var6 = var7.useIsActivitiesInTextEnabled;
            var10 = var6.bind(var7)(var10);
            var _closure2_slot4 = var10;
            var6 = var3[var17];
            var18 = var4.bind(var5)(var6);
            var12 = var18.useStateFromStoresObject;
            var16 = _closure1_slot12;
            var11 = new Array(5);
            var11[0] = var16;
            var6 = _closure1_slot14;
            var11[1] = var6;
            var6 = _closure1_slot9;
            var11[2] = var6;
            var6 = _closure1_slot10;
            var11[3] = var6;
            var15 = _closure1_slot8;
            var11[4] = var15;
            var7 = new Array(2);
            var7[0] = var14;
            var7[1] = var13;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure1_slot12;
                    var1 = var2.getVoiceChannelId;
                    var5 = var1.bind(var2)();
                    var6 = _closure1_slot9;
                    var2 = var6.getGuild;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var6)(var1);
                    var2 = null;
                    var6 = var2 == var1;
                    var13 = undefined;
                    var12 = undefined;
                    if(var6) { _fun0006_ip = 57; continue _fun0006 }
 51:
                    var12 = var1.afkChannelId;
 57:
                    var10 = _closure1_slot14;
                    var1 = var10.getUsersWithVideo;
                    var9 = _closure2_slot0;
                    var7 = var1.bind(var10)(var9);
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 17;
                    var1 = var8[var1];
                    var8 = var6.bind(var13)(var1);
                    var6 = var8.filterBlockedUsersFromVoiceStates;
                    var1 = var10.getVoiceStates;
                    var1 = var1.bind(var10)(var9);
                    var11 = var6.bind(var8)(var1);
                    var1 = {};
                    var8 = _closure2_slot1;
                    var6 = false;
                    if(var8) { _fun0006_ip = 214; continue _fun0006 }
 131:
                    var17 = var11;
                    var6 = false;
                    for(var14 in var17)
 144:
                    {
                        var6 = false;
 155:
                        var8 = var14;
                        var21 = _closure1_slot18;
                        var20 = _closure1_slot8;
                        var19 = var20.getBasicChannel;
                        var8 = var11[var8];
                        var8 = var8.channelId;
                        var20 = var19.bind(var20)(var8);
                        var8 = var2 != var12;
                        var19 = undefined;
                        if(!var8) { _fun0006_ip = 198; continue _fun0006 }
 195:
                        var19 = var12;
 198:
                        var8 = _closure1_slot10;
                        var8 = var21.bind(var13)(var20, var19, var8);
                        var6 = true;
                        if(!var8) { _fun0006_ip = 144; continue _fun0006 }
                    }
 214:
                    var1['guildHasVoice'] = var6;
                    var6 = _closure2_slot1;
                    var4 = false;
                    if(var6) { _fun0006_ip = 338; continue _fun0006 }
 228:
                    var6 = _closure1_slot16;
                    var9 = var6.bind(var13)(var7);
                    var7 = var9.bind(var13)();
                    var6 = var7.done;
                    var4 = false;
                    if(var6) { _fun0006_ip = 338; continue _fun0006 }
 251:
                    var6 = var7.value;
                    var16 = _closure1_slot18;
                    var15 = _closure1_slot8;
                    var14 = var15.getBasicChannel;
                    var17 = var11[var6];
                    var18 = var2 == var17;
                    var6 = undefined;
                    if(var18) { _fun0006_ip = 288; continue _fun0006 }
 283:
                    var6 = var17.channelId;
 288:
                    var15 = var14.bind(var15)(var6);
                    var6 = var2 != var12;
                    var14 = undefined;
                    if(!var6) { _fun0006_ip = 305; continue _fun0006 }
 302:
                    var14 = var12;
 305:
                    var6 = _closure1_slot10;
                    var6 = var16.bind(var13)(var15, var14, var6);
                    var4 = true;
                    if(var6) { _fun0006_ip = 338; continue _fun0006 }
 321:
                    var14 = var9.bind(var13)();
                    var6 = var14.done;
                    var7 = var14;
                    var4 = false;
                    if(!var6) { _fun0006_ip = 251; continue _fun0006 }
 338:
                    var1['guildHasVideo'] = var4;
                    var2 = var2 != var5;
                    if(!var2) { _fun0006_ip = 365; continue _fun0006 }
 350:
                    var4 = _closure1_slot14;
                    var3 = var4.hasVideo;
                    var2 = var3.bind(var4)(var5);
 365:
                    var1['selectedVoiceChannelHasVideo'] = var2;
                    return var1;
                }
            };
            var11 = var12.bind(var18)(var11, var6, var7);
            var7 = var11.guildHasVoice;
            var _closure2_slot5 = var7;
            var6 = var11.guildHasVideo;
            var _closure2_slot6 = var6;
            var12 = var11.selectedVoiceChannelHasVideo;
            var _closure2_slot7 = var12;
            var18 = _closure1_slot7;
            var11 = var18.getId;
            var11 = var11.bind(var18)();
            var _closure2_slot8 = var11;
            var3 = var3[var17];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useStateFromStoresObject;
            var3 = new Array(6);
            var3[0] = var16;
            var3[1] = var15;
            var15 = _closure1_slot3;
            var3[2] = var15;
            var15 = _closure1_slot4;
            var3[3] = var15;
            var15 = _closure1_slot6;
            var3[4] = var15;
            var2 = _closure1_slot10;
            var3[5] = var2;
            var2 = new Array(9);
            var2[0] = var14;
            var2[1] = var13;
            var2[2] = var12;
            var2[3] = var11;
            var2[4] = var10;
            var2[5] = var9;
            var2[6] = var8;
            var2[7] = var7;
            var2[8] = var6;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
                    if(var5) { _fun0007_ip = 51; continue _fun0007 }
 46:
                    var3 = var2.guild_id;
 51:
                    var2 = _closure2_slot0;
                    var2 = var3 === var2;
                    if(var2) { _fun0007_ip = 88; continue _fun0007 }
 65:
                    var3 = _closure2_slot1;
                    if(!var3) { _fun0007_ip = 88; continue _fun0007 }
 72:
                    var3 = {'audio': false, 'video': false, 'screenshare': false, 'liveStage': false, 'activeEvent': false, 'activity': false, 'isCurrentUserConnected': false};
                    return var3;
 88:
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
 0:
                            var4 = _closure1_slot8;
                            var3 = var4.getChannel;
                            var1 = arg1;
                            var5 = var3.bind(var4)(var1);
                            var1 = null;
                            var1 = var1 != var5;
                            if(!var1) { _fun0008_ip = 73; continue _fun0008 }
 29:
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
 73:
                            return var1;
                        }
                    };
                    var6 = var5.bind(var6)(var3);
                    var3 = var2;
                    var5 = undefined;
                    if(!var2) { _fun0007_ip = 203; continue _fun0007 }
 163:
                    var8 = _closure1_slot8;
                    var7 = var8.getChannel;
                    var9 = var7.bind(var8)(var12);
                    var8 = var15 == var9;
                    var7 = undefined;
                    if(var8) { _fun0007_ip = 196; continue _fun0007 }
 186:
                    var8 = var9.isGuildStageVoice;
                    var7 = var8.bind(var9)();
 196:
                    var3 = var15 != var7;
                    var5 = var7;
 203:
                    if(!var3) { _fun0007_ip = 209; continue _fun0007 }
 206:
                    var3 = var5;
 209:
                    var5 = !var2;
                    var10 = !var5;
                    if(!var2) { _fun0007_ip = 246; continue _fun0007 }
 218:
                    var9 = _closure1_slot6;
                    var8 = var9.getActiveStreamForUser;
                    var7 = _closure2_slot8;
                    var5 = _closure2_slot0;
                    var5 = var8.bind(var9)(var7, var5);
                    var10 = var15 != var5;
 246:
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
                        var1 = arg1;
                        var2 = var1.guildId;
                        var1 = _closure2_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var7 = var5.bind(var7)(var4);
                    var4 = _closure2_slot4;
                    if(var4) { _fun0007_ip = 446; continue _fun0007 }
 319:
                    var5 = _closure1_slot16;
                    var4 = _closure2_slot3;
                    var17 = var5.bind(var11)(var4);
                    var4 = var17.bind(var11)();
                    var5 = var4.done;
                    var9 = 18;
                    var8 = var4;
                    var4 = false;
                    if(var5) { _fun0007_ip = 461; continue _fun0007 }
 352:
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
                    if(!(var15 != var5)) { _fun0007_ip = 427; continue _fun0007 }
 408:
                    var18 = _closure1_slot5;
                    var5 = var5.type;
                    var5 = var18.bind(var11)(var5);
                    var4 = true;
                    if(var5) { _fun0007_ip = 461; continue _fun0007 }
 427:
                    var18 = var17.bind(var11)();
                    var5 = var18.done;
                    var8 = var18;
                    var4 = false;
                    if(var5) { _fun0007_ip = 461; continue _fun0007 }
 444:
                    _fun0007_ip = 352; continue _fun0007;
 446:
                    var5 = _closure2_slot3;
                    var8 = var5.length;
                    var5 = 0;
                    var4 = var8 > var5;
 461:
                    var8 = _closure1_slot3;
                    var5 = var8.getEmbeddedActivitiesForGuild;
                    var1 = _closure2_slot0;
                    var1 = var5.bind(var8)(var1);
                    var5 = var1.length;
                    var1 = 0;
                    var1 = var5 > var1;
                    if(var2) { _fun0007_ip = 512; continue _fun0007 }
 494:
                    var9 = _closure2_slot5;
                    var5 = _closure2_slot2;
                    var5 = var15 != var5;
                    var8 = _closure2_slot6;
                    _fun0007_ip = 565; continue _fun0007;
 512:
                    var14 = _closure2_slot2;
                    var14 = var15 == var14;
                    var11 = undefined;
                    if(var14) { _fun0007_ip = 534; continue _fun0007 }
 525:
                    var14 = _closure2_slot2;
                    var11 = var14.channel_id;
 534:
                    var12 = var11 === var12;
                    var11 = var2;
                    if(!var2) { _fun0007_ip = 548; continue _fun0007 }
 544:
                    var11 = _closure2_slot7;
 548:
                    var9 = true;
                    var8 = var11;
                    var5 = var12;
                    var6 = var3;
                    var7 = var10;
                    var4 = var1;
 565:
                    var1 = {};
                    var1['audio'] = var9;
                    var1['video'] = var8;
                    var1['screenshare'] = var7;
                    var1['liveStage'] = var6;
                    var1['activeEvent'] = var5;
                    var1['activity'] = var4;
                    if(var2) { _fun0007_ip = 603; continue _fun0007 }
 600:
                    var2 = var3;
 603:
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
// app/modules/guild_scheduled_events/useGuildHasLiveChannelNotice.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildScheduledEventEntityTypes;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot12 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/useGuildHasLiveChannelNotice.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useGuildHasLiveChannelNotice(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = arg1;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var8 = undefined;
            var1 = var4.bind(var8)(var1);
            var5 = var1.bind(var8)(var11);
            var6 = _closure1_slot7;
            var4 = var6.getChannel;
            var1 = 0;
            var7 = var5[var1];
            var5 = null;
            var9 = var5 == var7;
            var1 = undefined;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var7.id;
case 2:
            var1 = var4.bind(var6)(var1);
            var _closure2_slot0 = var1;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 11;
            var4 = var9[var6];
            var13 = var7.bind(var8)(var4);
            var12 = var13.useStateFromStores;
            var4 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var4;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getStageInstanceByChannel;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot0;
                    var1 = var4.id;
case 4:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var4 = var12.bind(var13)(var10, var1, var4);
            var _closure2_slot1 = var4;
            var1 = 12;
            var1 = var9[var1];
            var10 = var7.bind(var8)(var1);
            var1 = var10.useGuildActiveEvent;
            var1 = var1.bind(var10)(var11);
            var _closure2_slot2 = var1;
            var6 = var9[var6];
            var8 = var7.bind(var8)(var6);
            var7 = var8.useStateFromStoresObject;
            var3 = _closure1_slot10;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = new Array(2);
            var3[0] = var4;
            var3[1] = var1;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var7 = _closure1_slot10;
                    var4 = var7.isLiveChannelNoticeHidden;
                    var3 = {};
                    var5 = _closure2_slot1;
                    var8 = null;
                    var10 = var8 == var5;
                    var9 = undefined;
                    if(var10) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var10 = _closure2_slot1;
                    var9 = var10.id;
case 6:
                    var3['stageId'] = var9;
                    var3 = var4.bind(var7)(var3);
                    var1['isStageNoticeHidden'] = var3;
                    var4 = _closure1_slot10;
                    var3 = var4.isLiveChannelNoticeHidden;
                    var2 = {};
                    var7 = _closure2_slot2;
                    var7 = var8 == var7;
                    var5 = undefined;
                    if(var7) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var6 = _closure2_slot2;
                    var5 = var6.id;
case 8:
                    var2['eventId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var1['isEventNoticeHidden'] = var2;
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var6, var2, var3);
            var3 = var2.isStageNoticeHidden;
            var2 = var2.isEventNoticeHidden;
            if(!(var5 == var1)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var5 != var4;
            if(!var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = !var3;
case 12:
            _fun0001_ip = 14; continue _fun0001;
case 10:
            if(!(var5 == var4)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var2 = !var2;
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var2 = !var3;
case 17:
            var1 = var2;
case 14:
            return var1;
        }
    };
    var3['useGuildHasLiveChannelNotice'] = var4;
    var2 = function useGuildLiveChannelNoticeInfo(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var10 = arg1;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 13;
            var3 = var7[var3];
            var8 = undefined;
            var4 = var5.bind(var8)(var3);
            var3 = var4.useActiveEventOrStageInstanceChannel;
            var6 = var3.bind(var4)(var10);
            var _closure2_slot0 = var6;
            var11 = 11;
            var3 = var7[var11];
            var12 = var5.bind(var8)(var3);
            var9 = var12.useStateFromStores;
            var3 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var5 = _closure1_slot8;
                    var4 = var5.can;
                    var3 = _closure1_slot12;
                    var3 = var3.CONNECT;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 18:
                    return var1;
                }
            };
            var9 = var9.bind(var12)(var4, var3);
            var _closure2_slot1 = var9;
            var3 = 12;
            var3 = var7[var3];
            var4 = var5.bind(var8)(var3);
            var3 = var4.useGuildActiveEvent;
            var3 = var3.bind(var4)(var10);
            var4 = var7[var11];
            var14 = var5.bind(var8)(var4);
            var13 = var14.useStateFromStores;
            var4 = _closure1_slot5;
            var12 = new Array(1);
            var12[0] = var4;
            var10 = new Array(1);
            var10[0] = var6;
            var4 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getStageInstanceByChannel;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0006_ip = 4; continue _fun0006 }
case 5:
                    var4 = _closure2_slot0;
                    var1 = var4.id;
case 4:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var12 = var13.bind(var14)(var12, var4, var10);
            var4 = 14;
            var4 = var7[var4];
            var10 = var5.bind(var8)(var4);
            var7 = var10.useActualStageSpeakerCount;
            var4 = null;
            var13 = var4 == var6;
            var5 = undefined;
            if(var13) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var5 = var6.id;
case 20:
            var7 = var7.bind(var10)(var5);
            var5 = 0;
            var5 = var7 > var5;
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var14 = var10.bind(var8)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot9;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                    var4 = _closure1_slot9;
                    var3 = var4.getVoiceStatesForChannel;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
case 18:
                    return var1;
                }
            };
            var10 = var13.bind(var14)(var10, var7);
            var7 = false;
            var _closure2_slot2 = var7;
            if(!(var4 != var6)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            if(!(var4 == var12)) { _fun0004_ip = 24; continue _fun0004 }
case 22:
            var12 = var4 != var6;
            if(!var12) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var12 = var4 != var3;
case 25:
            var7 = false;
            if(!var12) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            _closure2_slot2 = var10;
            var7 = var10;
            _fun0004_ip = 27; continue _fun0004;
case 24:
            _closure2_slot2 = var5;
            var7 = var5;
case 27:
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var12 = var5[var11];
            var15 = var10.bind(var8)(var12);
            var14 = var15.useStateFromStores;
            var12 = _closure1_slot4;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = new Array(1);
            var12[0] = var6;
            var6 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0008_ip = 9; continue _fun0008 }
case 19:
                    var5 = _closure1_slot4;
                    var4 = var5.getParticipantCount;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 15;
                    var6 = var6[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var6);
                    var2 = var2.StageChannelParticipantNamedIndex;
                    var2 = var2.AUDIENCE;
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = 0;
                    var1 = var3 > var2;
case 9:
                    return var1;
                }
            };
            var6 = var14.bind(var15)(var13, var6, var12);
            var _closure2_slot3 = var6;
            var5 = var5[var11];
            var12 = var10.bind(var8)(var5);
            var11 = var12.useStateFromStores;
            var5 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0009_ip = 29; continue _fun0009 }
case 19:
                    var4 = _closure1_slot6;
                    var3 = var4.getAllApplicationStreamsForChannel;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
case 29:
                    return var1;
                }
            };
            var5 = var11.bind(var12)(var10, var5);
            var _closure2_slot4 = var5;
            var4 = var4 == var3;
            var8 = undefined;
            if(var4) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var8 = var3.entity_type;
case 30:
            var _closure2_slot5 = var8;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(5);
            var2[0] = var9;
            var2[1] = var8;
            var2[2] = var7;
            var2[3] = var6;
            var2[4] = var5;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot5;
                    var3 = _closure1_slot11;
                    var3 = var3.EXTERNAL;
                    var3 = var4 === var3;
                    if(var3) { _fun0010_ip = 32; continue _fun0010 }
case 33:
                    var3 = _closure2_slot1;
case 32:
                    var1['hasButton'] = var3;
                    var3 = _closure2_slot2;
                    var1['hasSpeakers'] = var3;
                    var3 = _closure2_slot3;
                    var1['hasAudience'] = var3;
                    var2 = _closure2_slot4;
                    var1['hasStream'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useGuildLiveChannelNoticeInfo'] = var2;
    return var1;
})();
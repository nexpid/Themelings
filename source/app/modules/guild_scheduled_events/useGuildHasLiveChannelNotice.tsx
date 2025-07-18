// app/modules/guild_scheduled_events/useGuildHasLiveChannelNotice.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
 0:
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
            if(var9) { _fun0001_ip = 66; continue _fun0001 }
 61:
            var1 = var7.id;
 66:
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
 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getStageInstanceByChannel;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 40; continue _fun0002 }
 31:
                    var4 = _closure2_slot0;
                    var1 = var4.id;
 40:
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
 0:
                    var1 = {};
                    var7 = _closure1_slot10;
                    var4 = var7.isLiveChannelNoticeHidden;
                    var3 = {};
                    var5 = _closure2_slot1;
                    var8 = null;
                    var10 = var8 == var5;
                    var9 = undefined;
                    if(var10) { _fun0003_ip = 44; continue _fun0003 }
 35:
                    var10 = _closure2_slot1;
                    var9 = var10.id;
 44:
                    var3['stageId'] = var9;
                    var3 = var4.bind(var7)(var3);
                    var1['isStageNoticeHidden'] = var3;
                    var4 = _closure1_slot10;
                    var3 = var4.isLiveChannelNoticeHidden;
                    var2 = {};
                    var7 = _closure2_slot2;
                    var7 = var8 == var7;
                    var5 = undefined;
                    if(var7) { _fun0003_ip = 93; continue _fun0003 }
 84:
                    var6 = _closure2_slot2;
                    var5 = var6.id;
 93:
                    var2['eventId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var1['isEventNoticeHidden'] = var2;
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var6, var2, var3);
            var3 = var2.isStageNoticeHidden;
            var2 = var2.isEventNoticeHidden;
            if(!(var5 == var1)) { _fun0001_ip = 246; continue _fun0001 }
 234:
            var1 = var5 != var4;
            if(!var1) { _fun0001_ip = 244; continue _fun0001 }
 241:
            var1 = !var3;
 244:
            _fun0001_ip = 261; continue _fun0001;
 246:
            if(!(var5 == var4)) { _fun0001_ip = 255; continue _fun0001 }
 250:
            var2 = !var2;
            _fun0001_ip = 258; continue _fun0001;
 255:
            var2 = !var3;
 258:
            var1 = var2;
 261:
            return var1;
        }
    };
    var3['useGuildHasLiveChannelNotice'] = var4;
    var2 = function useGuildLiveChannelNoticeInfo(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0005_ip = 49; continue _fun0005 }
 16:
                    var5 = _closure1_slot8;
                    var4 = var5.can;
                    var3 = _closure1_slot12;
                    var3 = var3.CONNECT;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
 49:
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
 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getStageInstanceByChannel;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0006_ip = 40; continue _fun0006 }
 31:
                    var4 = _closure2_slot0;
                    var1 = var4.id;
 40:
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
            if(var13) { _fun0004_ip = 196; continue _fun0004 }
 191:
            var5 = var6.id;
 196:
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
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0007_ip = 49; continue _fun0007 }
 16:
                    var4 = _closure1_slot9;
                    var3 = var4.getVoiceStatesForChannel;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
 49:
                    return var1;
                }
            };
            var10 = var13.bind(var14)(var10, var7);
            var7 = false;
            var _closure2_slot2 = var7;
            if(!(var4 != var6)) { _fun0004_ip = 268; continue _fun0004 }
 264:
            if(!(var4 == var12)) { _fun0004_ip = 293; continue _fun0004 }
 268:
            var12 = var4 != var6;
            if(!var12) { _fun0004_ip = 279; continue _fun0004 }
 275:
            var12 = var4 != var3;
 279:
            var7 = false;
            if(!var12) { _fun0004_ip = 300; continue _fun0004 }
 284:
            _closure2_slot2 = var10;
            var7 = var10;
            _fun0004_ip = 300; continue _fun0004;
 293:
            _closure2_slot2 = var5;
            var7 = var5;
 300:
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
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0008_ip = 84; continue _fun0008 }
 16:
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
 84:
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
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0009_ip = 54; continue _fun0009 }
 16:
                    var4 = _closure1_slot6;
                    var3 = var4.getAllApplicationStreamsForChannel;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
 54:
                    return var1;
                }
            };
            var5 = var11.bind(var12)(var10, var5);
            var _closure2_slot4 = var5;
            var4 = var4 == var3;
            var8 = undefined;
            if(var4) { _fun0004_ip = 418; continue _fun0004 }
 412:
            var8 = var3.entity_type;
 418:
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
 0:
                    var1 = {};
                    var4 = _closure2_slot5;
                    var3 = _closure1_slot11;
                    var3 = var3.EXTERNAL;
                    var3 = var4 === var3;
                    if(var3) { _fun0010_ip = 33; continue _fun0010 }
 29:
                    var3 = _closure2_slot1;
 33:
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
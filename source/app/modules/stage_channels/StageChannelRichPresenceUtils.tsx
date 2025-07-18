// app/modules/stage_channels/StageChannelRichPresenceUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var4 = function unpackStageChannelParty(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var3 = var5;
            var2 = undefined;
            var4 = undefined;
            var9 = undefined;
            var1 = null;
            if(!(var1 != var5)) { _fun0001_ip = 31; continue _fun0001 }
 18:
            var5 = var3;
            var5 = var5.party;
            if(!(var1 == var5)) { _fun0001_ip = 33; continue _fun0001 }
 31:
            return var2;
 33:
            var3 = var3.party;
            var4 = var3.id;
            var9 = var3.size;
 49: // try_start_0
            var3 = var4;
            if(!(var1 != var3)) { _fun0001_ip = 235; continue _fun0001 }
 59:
            var7 = var4;
            var6 = var7.startsWith;
            var5 = _closure1_slot7;
            var5 = var6.bind(var7)(var5);
            if(!var5) { _fun0001_ip = 235; continue _fun0001 }
 86:
            var6 = var4;
            var5 = var6.split;
            var4 = ':';
            var5 = var5.bind(var6)(var4);
            var4 = _closure1_slot0;
            var3 = 5;
            var3 = var4.bind(var2)(var5, var3);
            var8 = 1;
            var11 = var3[var8];
            var7 = 2;
            var10 = var3[var7];
            var4 = 3;
            var12 = var3[var4];
            var6 = 4;
            var4 = var3[var6];
            var3 = global;
            var5 = var3.parseInt;
            var3 = 16;
            var5 = var5.bind(var2)(var12, var3);
            var3 = {};
            var3['guildId'] = var11;
            var3['channelId'] = var10;
            var3['size'] = var9;
            var8 = var8 & var5;
            var8 = !var8;
            var8 = !var8;
            var3['userIsSpeaker'] = var8;
            var7 = var7 & var5;
            var7 = !var7;
            var7 = !var7;
            var3['guildIsPartnered'] = var7;
            var5 = var6 & var5;
            var5 = !var5;
            var5 = !var5;
            var3['guildIsVerified'] = var5;
            var3['stageInstanceId'] = var4;
 233: // try_end0
            return var3;
 235:
            return var2;
 237: // catch_target0
            CatchBlockStart(arg_register=1);
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot1 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.STAGE_APPLICATION_ID;
    var _closure1_slot5 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GuildFeatures;
    var _closure1_slot6 = var5;
    var5 = 'stage:';
    var _closure1_slot7 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/StageChannelRichPresenceUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function packStageChannelPartyId(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var4 = _closure1_slot1;
            var3 = var4.getId;
            var6 = var3.bind(var4)();
            var5 = _closure1_slot4;
            var4 = var5.isSpeaker;
            var3 = var1.id;
            var3 = var4.bind(var5)(var6, var3);
            var7 = 0;
            if(!var3) { _fun0002_ip = 49; continue _fun0002 }
 46:
            var7 = 1;
 49:
            var5 = _closure1_slot3;
            var4 = var5.getGuild;
            var3 = var1.getGuildId;
            var3 = var3.bind(var1)();
            var3 = var4.bind(var5)(var3);
            var4 = null;
            var5 = var7;
            if(!(var4 != var3)) { _fun0002_ip = 163; continue _fun0002 }
 82:
            var8 = var3.features;
            var6 = var8.has;
            var4 = _closure1_slot6;
            var4 = var4.PARTNERED;
            var4 = var6.bind(var8)(var4);
            var6 = var7;
            if(!var4) { _fun0002_ip = 121; continue _fun0002 }
 114:
            var4 = 2;
            var6 = var7 | var4;
 121:
            var7 = var3.features;
            var4 = var7.has;
            var3 = _closure1_slot6;
            var3 = var3.VERIFIED;
            var4 = var4.bind(var7)(var3);
            var3 = var6;
            if(!var4) { _fun0002_ip = 160; continue _fun0002 }
 153:
            var4 = 4;
            var3 = var6 | var4;
 160:
            var5 = var3;
 163:
            var4 = var5.toString;
            var3 = 16;
            var11 = var4.bind(var5)(var3);
            var16 = _closure1_slot7;
            var15 = var1.guild_id;
            var13 = var1.id;
            var1 = arg2;
            var9 = var1.id;
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var17 = '';
            var1 = ':';
            var14 = var1;
            var12 = var1;
            var10 = var1;
            var1 = var17[var3](var16, var15, var14, var13, var12, var11, var10, var9, var8);
            return var1;
        }
    };
    var3['packStageChannelPartyId'] = var5;
    var3['unpackStageChannelParty'] = var4;
    var4 = function isStageActivity(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0003_ip = 20; continue _fun0003 }
 14:
            var2 = var1.application_id;
 20:
            var1 = _closure1_slot5;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isStageActivity'] = var4;
    var2 = function shouldShowActivity(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = _closure1_slot8;
            var3 = undefined;
            var2 = arg1;
            var3 = var4.bind(var3)(var2);
            var2 = null;
            if(!(var2 != var3)) { _fun0004_ip = 48; continue _fun0004 }
 23:
            var4 = var3.channelId;
            var3 = _closure1_slot2;
            var1 = var3.getChannel;
            var1 = var1.bind(var3)(var4);
            var1 = var2 != var1;
            return var1;
 48:
            var1 = false;
            return var1;
        }
    };
    var3['shouldShowActivity'] = var2;
    return var1;
})();
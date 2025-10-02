// app/actions/SelectedChannelActionCreatorsAdditional.native.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.STAGE_BOOSTING_SHEET_KEY;
    var _closure1_slot11 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/SelectedChannelActionCreatorsAdditional.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var5 = arguments[2];
            var4 = arguments[3];
            var1 = arguments[4];
            var _closure2_slot0 = var7;
            var3 = arg2;
            var _closure2_slot1 = var3;
            var8 = undefined;
            if(!(var5 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = false;
case 2:
            var _closure2_slot2 = var5;
            if(!(var4 === var8)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = false;
case 4:
            var _closure2_slot3 = var4;
            if(!(var1 === var8)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = {};
case 6:
            var1 = var1.lockVoiceStateForResume;
            if(!(var1 === var8)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = false;
case 8:
            var _closure2_slot4 = var1;
            var6 = _closure1_slot3;
            var3 = var6.getChannel;
            var6 = var3.bind(var6)(var7);
            var9 = _closure1_slot8;
            var3 = var9.getCurrentUser;
            var9 = var3.bind(var9)();
            var3 = null;
            if(!(var3 != var9)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            if(!(var3 != var6)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var10 = var6.nsfw;
            if(!var10) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var9 = var9.nsfwAllowed;
            if(!var9) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            if(!(var3 != var6)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 9;
            var3 = var10[var3];
            var11 = var9.bind(var8)(var3);
            var10 = var11.isChannelFull;
            var9 = _closure1_slot9;
            var3 = _closure1_slot4;
            var9 = var10.bind(var11)(var6, var9, var3);
            var11 = _closure1_slot5;
            var10 = var11.getCheck;
            var3 = var6.guild_id;
            var11 = var10.bind(var11)(var3);
            var3 = var11.canChat;
            if(var3) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 10;
            var3 = var12[var3];
            var10 = var10.bind(var8)(var3);
            var3 = var10.canLurkerListen;
            var3 = var3.bind(var10)(var6);
            if(var3) { _fun0001_ip = 17; continue _fun0001 }
case 19:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 11;
            var3 = var12[var3];
            var10 = var10.bind(var8)(var3);
            var3 = var10.unverifiedVoiceGate;
            var3 = var3.bind(var10)(var11);
            return var3;
case 17:
            var3 = var6.isPrivate;
            var3 = var3.bind(var6)();
            var3 = !var3;
            if(!var3) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var12 = _closure1_slot6;
            var11 = var12.can;
            var10 = _closure1_slot10;
            var10 = var10.CONNECT;
            var10 = var11.bind(var12)(var10, var6);
            var3 = !var10;
case 20:
            if(!var9) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var10 = var6.isGuildStageVoice;
            var10 = var10.bind(var6)();
            if(!var10) { _fun0001_ip = 22; continue _fun0001 }
case 24:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 12;
            var10 = var12[var10];
            var12 = var11.bind(var8)(var10);
            var11 = var12.getStageHasMedia;
            var10 = var6.id;
            var10 = var11.bind(var12)(var10);
            if(var10) { _fun0001_ip = 25; continue _fun0001 }
case 22:
            if(var9) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            if(var3) { _fun0001_ip = 26; continue _fun0001 }
case 15:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 16;
            var3 = var10[var3];
            var3 = var9.bind(var8)(var3);
            var16 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 17;
                var2 = var4[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.v4;
                var5 = var2.bind(var3)();
                var3 = _closure1_slot1;
                var2 = 18;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'VOICE_CHANNEL_SELECT';
                var2['type'] = var6;
                var8 = _closure2_slot1;
                var2['guildId'] = var8;
                var8 = _closure2_slot0;
                var2['channelId'] = var8;
                var8 = _closure1_slot7;
                var7 = var8.getVoiceChannelId;
                var7 = var7.bind(var8)();
                var2['currentVoiceChannelId'] = var7;
                var7 = _closure2_slot2;
                var2['video'] = var7;
                var7 = _closure2_slot3;
                var2['stream'] = var7;
                var6 = _closure2_slot4;
                var2['lockVoiceStateForResume'] = var6;
                var2['joinVoiceId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var17 = undefined;
            var15 = var7;
            var14 = var4;
            var13 = var5;
            var2 = var17[var3](var16, var15, var14, var13, var12);
case 10:
            return var8;
case 26:
            return var8;
case 25:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var3 = 13;
            var3 = var2[var3];
            var5 = var4.bind(var8)(var3);
            var4 = var5.openLazy;
            var7 = _closure1_slot0;
            var3 = 15;
            var3 = var2[var3];
            var7 = var7.bind(var8)(var3);
            var3 = 14;
            var3 = var2[var3];
            var2 = var2.paths;
            var3 = var7.bind(var8)(var3, var2);
            var2 = _closure1_slot11;
            var1 = {};
            var1['channel'] = var6;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        }
    };
    var3['selectVoiceChannelAdditional'] = var2;
    return var1;
})();
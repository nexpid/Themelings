// app/modules/activities/utils/canJoinActivity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityFlags;
    var _closure1_slot3 = var7;
    var7 = var4.ChannelTypes;
    var _closure1_slot4 = var7;
    var4 = var4.GuildFeatures;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/canJoinActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function canJoinActivity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var16 = var1.user;
            var15 = var1.activity;
            var12 = var1.application;
            var14 = var1.channelId;
            var13 = var1.currentUser;
            var2 = var1.isEmbedded;
            var10 = var1.ChannelStore;
            var7 = var1.GuildStore;
            var6 = var1.GuildMemberCountStore;
            var19 = var1.RelationshipStore;
            var17 = var1.SelectedChannelStore;
            var9 = var1.VoiceStateStore;
            var8 = var1.PermissionStore;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 1;
            var1 = var4[var1];
            var4 = undefined;
            var5 = var5.bind(var4)(var1);
            var1 = var5.getIsActivitiesEnabledForCurrentPlatform;
            var11 = var1.bind(var5)();
            var1 = null;
            if(!(var1 != var16)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var1 == var14)) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            if(!var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            if(!(var1 == var14)) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var18 = _closure1_slot1;
            var20 = _closure1_slot2;
            var5 = 3;
            var5 = var20[var5];
            var18 = var18.bind(var4)(var5);
            var5 = _closure1_slot3;
            var5 = var5.CONTEXTLESS;
            var5 = var18.bind(var4)(var15, var5);
            if(var5) { _fun0001_ip = 7; continue _fun0001 }
case 10:
            var5 = false;
            return var5;
case 7:
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var5 = 4;
            var5 = var20[var5];
            var18 = var18.bind(var4)(var5);
            var5 = var18.platformSupportsActivityJoin;
            var5 = var5.bind(var18)();
            if(var5) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            if(var2) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var2 = false;
            return var2;
case 11:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var18 = 3;
            var2 = var2[var18];
            var5 = var5.bind(var4)(var2);
            var2 = _closure1_slot3;
            var2 = var2.PARTY_PRIVACY_FRIENDS;
            var2 = var5.bind(var4)(var15, var2);
            if(!var2) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = var19.isFriend;
            var2 = var16.id;
            var2 = var5.bind(var19)(var2);
            if(var2) { _fun0001_ip = 16; continue _fun0001 }
case 14:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var18];
            var5 = var5.bind(var4)(var2);
            var2 = _closure1_slot3;
            var2 = var2.PARTY_PRIVACY_VOICE_CHANNEL;
            var2 = var5.bind(var4)(var15, var2);
            if(var2) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var2 = false;
            return var2;
case 17:
            var5 = var10.getChannel;
            var2 = var17.getVoiceChannelId;
            var2 = var2.bind(var17)();
            var17 = var5.bind(var10)(var2);
            if(!(var1 != var17)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var18 = var9.isInChannel;
            var5 = var17.id;
            var2 = var16.id;
            var2 = var18.bind(var9)(var5, var2);
            if(!var2) { _fun0001_ip = 19; continue _fun0001 }
case 21:
            var5 = var17.type;
            var2 = _closure1_slot4;
            var2 = var2.DM;
            if(!(var2 !== var5)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var2 = _closure1_slot4;
            var2 = var2.GROUP_DM;
            if(!(var2 !== var5)) { _fun0001_ip = 22; continue _fun0001 }
case 24:
            var5 = var7.getGuild;
            var2 = var17.getGuildId;
            var2 = var2.bind(var17)();
            var2 = var5.bind(var7)(var2);
            if(!(var1 != var2)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var18 = var2.features;
            var17 = var18.has;
            var5 = _closure1_slot5;
            var5 = var5.COMMUNITY;
            var5 = var17.bind(var18)(var5);
            if(var5) { _fun0001_ip = 25; continue _fun0001 }
case 27:
            var5 = var6.getMemberCount;
            var2 = var2.id;
            var5 = var5.bind(var6)(var2);
            var1 = var1 != var5;
            if(!var1) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var2 = 100;
            var1 = var5 < var2;
case 28:
            return var1;
case 25:
            var1 = false;
            return var1;
case 22:
            var1 = true;
            return var1;
case 19:
            var1 = false;
            return var1;
case 16:
            var1 = true;
            return var1;
case 6:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 2;
            var2 = var5[var1];
            var6 = var6.bind(var4)(var2);
            var2 = {};
            var16 = var16.id;
            var2['userId'] = var16;
            var2['activity'] = var15;
            var2['channelId'] = var14;
            var2['currentUser'] = var13;
            var2['application'] = var12;
            var2['isActivitiesEnabledForCurrentPlatform'] = var11;
            var2['ChannelStore'] = var10;
            var2['VoiceStateStore'] = var9;
            var2['PermissionStore'] = var8;
            var2['GuildStore'] = var7;
            var2 = var6.bind(var4)(var2);
            var3 = _closure1_slot0;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.EmbeddedActivityJoinability;
            var1 = var1.CAN_JOIN;
            var1 = var2 === var1;
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
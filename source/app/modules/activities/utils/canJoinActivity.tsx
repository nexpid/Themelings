// app/modules/activities/utils/canJoinActivity.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
 0:
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
            if(!(var1 != var16)) { _fun0001_ip = 622; continue _fun0001 }
 122:
            if(!var2) { _fun0001_ip = 132; continue _fun0001 }
 125:
            if(!(var1 == var14)) { _fun0001_ip = 512; continue _fun0001 }
 132:
            if(!var2) { _fun0001_ip = 182; continue _fun0001 }
 135:
            if(!(var1 == var14)) { _fun0001_ip = 182; continue _fun0001 }
 139:
            var18 = _closure1_slot1;
            var20 = _closure1_slot2;
            var5 = 3;
            var5 = var20[var5];
            var18 = var18.bind(var4)(var5);
            var5 = _closure1_slot3;
            var5 = var5.CONTEXTLESS;
            var5 = var18.bind(var4)(var15, var5);
            if(var5) { _fun0001_ip = 182; continue _fun0001 }
 178:
            var5 = false;
            return var5;
 182:
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var5 = 4;
            var5 = var20[var5];
            var18 = var18.bind(var4)(var5);
            var5 = var18.isDesktop;
            var5 = var5.bind(var18)();
            if(var5) { _fun0001_ip = 222; continue _fun0001 }
 215:
            if(var2) { _fun0001_ip = 222; continue _fun0001 }
 218:
            var2 = false;
            return var2;
 222:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var18 = 3;
            var2 = var2[var18];
            var5 = var5.bind(var4)(var2);
            var2 = _closure1_slot3;
            var2 = var2.PARTY_PRIVACY_FRIENDS;
            var2 = var5.bind(var4)(var15, var2);
            if(!var2) { _fun0001_ip = 283; continue _fun0001 }
 261:
            var5 = var19.isFriend;
            var2 = var16.id;
            var2 = var5.bind(var19)(var2);
            if(var2) { _fun0001_ip = 508; continue _fun0001 }
 283:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var18];
            var5 = var5.bind(var4)(var2);
            var2 = _closure1_slot3;
            var2 = var2.PARTY_PRIVACY_VOICE_CHANNEL;
            var2 = var5.bind(var4)(var15, var2);
            if(var2) { _fun0001_ip = 323; continue _fun0001 }
 319:
            var2 = false;
            return var2;
 323:
            var5 = var10.getChannel;
            var2 = var17.getVoiceChannelId;
            var2 = var2.bind(var17)();
            var17 = var5.bind(var10)(var2);
            if(!(var1 != var17)) { _fun0001_ip = 504; continue _fun0001 }
 350:
            var18 = var9.isInChannel;
            var5 = var17.id;
            var2 = var16.id;
            var2 = var18.bind(var9)(var5, var2);
            if(!var2) { _fun0001_ip = 504; continue _fun0001 }
 378:
            var5 = var17.type;
            var2 = _closure1_slot4;
            var2 = var2.DM;
            if(!(var2 !== var5)) { _fun0001_ip = 500; continue _fun0001 }
 397:
            var2 = _closure1_slot4;
            var2 = var2.GROUP_DM;
            if(!(var2 !== var5)) { _fun0001_ip = 500; continue _fun0001 }
 411:
            var5 = var7.getGuild;
            var2 = var17.getGuildId;
            var2 = var2.bind(var17)();
            var2 = var5.bind(var7)(var2);
            if(!(var1 != var2)) { _fun0001_ip = 496; continue _fun0001 }
 435:
            var18 = var2.features;
            var17 = var18.has;
            var5 = _closure1_slot5;
            var5 = var5.COMMUNITY;
            var5 = var17.bind(var18)(var5);
            if(var5) { _fun0001_ip = 496; continue _fun0001 }
 464:
            var5 = var6.getMemberCount;
            var2 = var2.id;
            var5 = var5.bind(var6)(var2);
            var1 = var1 != var5;
            if(!var1) { _fun0001_ip = 494; continue _fun0001 }
 487:
            var2 = 100;
            var1 = var5 < var2;
 494:
            return var1;
 496:
            var1 = false;
            return var1;
 500:
            var1 = true;
            return var1;
 504:
            var1 = false;
            return var1;
 508:
            var1 = true;
            return var1;
 512:
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
 622:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/activities/utils/getActivityJoinability.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var5 = var2.ActivityFlags;
    var _closure1_slot3 = var5;
    var5 = var2.ChannelTypes;
    var _closure1_slot4 = var5;
    var2 = var2.GuildFeatures;
    var _closure1_slot5 = var2;
    var2 = {};
    var5 = 'can_join';
    var2['CAN_JOIN'] = var5;
    var5 = 'cannot_join';
    var2['CANNOT_JOIN'] = var5;
    var5 = 'joined';
    var2['JOINED'] = var5;
    var _closure1_slot6 = var2;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/utils/getActivityJoinability.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function getActivityJoinability(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var15 = var2.user;
            var14 = var2.activity;
            var4 = var2.application;
            var13 = var2.channelId;
            var12 = var2.currentUser;
            var1 = var2.isEmbedded;
            var11 = var2.ChannelStore;
            var8 = var2.GuildStore;
            var6 = var2.GuildMemberCountStore;
            var18 = var2.RelationshipStore;
            var7 = var2.SelectedChannelStore;
            var10 = var2.VoiceStateStore;
            var9 = var2.PermissionStore;
            var21 = var2.LocalActivityStore;
            var20 = var2.SelfPresenceStore;
            var3 = var2.EmbeddedActivitiesStore;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 1;
            var2 = var17[var2];
            var19 = undefined;
            var17 = var16.bind(var19)(var2);
            var2 = null;
            var22 = var2 == var14;
            var16 = undefined;
            if(var22) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var16 = var14.application_id;
case 4:
            var17 = var17.bind(var19)(var21, var20, var16);
            var2 = var2 != var17;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var5 = 2;
            var5 = var20[var5];
            var16 = var16.bind(var19)(var5);
            var5 = var16.getIsInParty;
            var2 = var5.bind(var16)(var17, var14);
case 6:
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 2:
            if(!var1) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = var3.getCurrentEmbeddedActivity;
            var5 = var2.bind(var3)();
            var3 = null;
            var2 = var3 != var5;
            if(!var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var5 = var5.applicationId;
            var16 = var3 == var14;
            var3 = undefined;
            if(var16) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = var14.application_id;
case 13:
            var2 = var5 === var3;
case 11:
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = null;
            if(!(var2 != var15)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            if(!var1) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            if(!(var2 == var13)) { _fun0001_ip = 19; continue _fun0001 }
case 17:
            if(!var1) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            if(!(var2 == var13)) { _fun0001_ip = 20; continue _fun0001 }
case 22:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var5 = 5;
            var5 = var17[var5];
            var17 = undefined;
            var16 = var16.bind(var17)(var5);
            var5 = _closure1_slot3;
            var5 = var5.CONTEXTLESS;
            var5 = var16.bind(var17)(var14, var5);
            if(var5) { _fun0001_ip = 20; continue _fun0001 }
case 23:
            var3 = _closure1_slot6;
            var3 = var3.CANNOT_JOIN;
            return var3;
case 20:
            if(var1) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var5 = _closure1_slot1;
            var16 = _closure1_slot2;
            var3 = 6;
            var3 = var16[var3];
            var16 = undefined;
            var3 = var5.bind(var16)(var3);
            var3 = var3.bind(var16)(var14);
            if(!var3) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var5 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = 7;
            var3 = var17[var3];
            var5 = var5.bind(var16)(var3);
            var3 = var5.platformSupportsActivityJoin;
            var3 = var3.bind(var5)();
            if(var3) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            var1 = _closure1_slot6;
            var1 = var1.CANNOT_JOIN;
            return var1;
case 24:
            var5 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = 8;
            var3 = var19[var3];
            var16 = undefined;
            var17 = var5.bind(var16)(var3);
            var3 = var17.getPartySize;
            var17 = var3.bind(var17)(var14);
            var3 = 9;
            var3 = var19[var3];
            var5 = var5.bind(var16)(var3);
            var3 = var5.hasPartySize;
            var3 = var3.bind(var5)(var17);
            if(!var3) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var5 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = 10;
            var3 = var19[var3];
            var5 = var5.bind(var16)(var3);
            var3 = var5.isPartyFull;
            var3 = var3.bind(var5)(var17);
            if(var3) { _fun0001_ip = 28; continue _fun0001 }
case 30:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var17 = 5;
            var3 = var3[var17];
            var5 = var5.bind(var16)(var3);
            var3 = _closure1_slot3;
            var3 = var3.PARTY_PRIVACY_FRIENDS;
            var3 = var5.bind(var16)(var14, var3);
            if(!var3) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var5 = var18.isFriend;
            var3 = var15.id;
            var3 = var5.bind(var18)(var3);
            if(var3) { _fun0001_ip = 33; continue _fun0001 }
case 31:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var17];
            var5 = var5.bind(var16)(var3);
            var3 = _closure1_slot3;
            var3 = var3.PARTY_PRIVACY_VOICE_CHANNEL;
            var3 = var5.bind(var16)(var14, var3);
            if(var3) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var3 = _closure1_slot6;
            var3 = var3.CANNOT_JOIN;
            return var3;
case 34:
            var5 = var11.getChannel;
            var3 = var7.getVoiceChannelId;
            var3 = var3.bind(var7)();
            var7 = var5.bind(var11)(var3);
            if(!(var2 != var7)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var16 = var10.isInChannel;
            var5 = var7.id;
            var3 = var15.id;
            var3 = var16.bind(var10)(var5, var3);
            if(!var3) { _fun0001_ip = 36; continue _fun0001 }
case 38:
            var5 = var7.type;
            var3 = _closure1_slot4;
            var3 = var3.DM;
            if(!(var3 !== var5)) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var3 = _closure1_slot4;
            var3 = var3.GROUP_DM;
            if(!(var3 !== var5)) { _fun0001_ip = 39; continue _fun0001 }
case 41:
            var5 = var8.getGuild;
            var3 = var7.getGuildId;
            var3 = var3.bind(var7)();
            var3 = var5.bind(var8)(var3);
            if(!(var2 != var3)) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var16 = var3.features;
            var7 = var16.has;
            var5 = _closure1_slot5;
            var5 = var5.COMMUNITY;
            var5 = var7.bind(var16)(var5);
            if(var5) { _fun0001_ip = 42; continue _fun0001 }
case 44:
            var5 = var6.getMemberCount;
            var3 = var3.id;
            var3 = var5.bind(var6)(var3);
            if(!(var2 != var3)) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var2 = 100;
            if(!(!(var3 < var2))) { _fun0001_ip = 47; continue _fun0001 }
case 45:
            var2 = _closure1_slot6;
            var2 = var2.CANNOT_JOIN;
            _fun0001_ip = 48; continue _fun0001;
case 47:
            var3 = _closure1_slot6;
            var2 = var3.CAN_JOIN;
case 48:
            return var2;
case 42:
            var2 = _closure1_slot6;
            var2 = var2.CANNOT_JOIN;
            return var2;
case 39:
            var2 = _closure1_slot6;
            var2 = var2.CAN_JOIN;
            return var2;
case 36:
            var2 = _closure1_slot6;
            var2 = var2.CANNOT_JOIN;
            return var2;
case 33:
            var2 = _closure1_slot6;
            var2 = var2.CAN_JOIN;
            return var2;
case 28:
            var1 = _closure1_slot6;
            var1 = var1.CANNOT_JOIN;
            return var1;
case 19:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 3;
            var3 = var6[var1];
            var5 = undefined;
            var7 = var7.bind(var5)(var3);
            var3 = {};
            var15 = var15.id;
            var3['userId'] = var15;
            var3['activity'] = var14;
            var3['channelId'] = var13;
            var3['currentUser'] = var12;
            var3['application'] = var4;
            var4 = _closure1_slot0;
            var12 = 4;
            var12 = var6[var12];
            var13 = var4.bind(var5)(var12);
            var12 = var13.getIsActivitiesEnabledForCurrentPlatform;
            var12 = var12.bind(var13)();
            var3['isActivitiesEnabledForCurrentPlatform'] = var12;
            var3['ChannelStore'] = var11;
            var3['VoiceStateStore'] = var10;
            var3['PermissionStore'] = var9;
            var3['GuildStore'] = var8;
            var3 = var7.bind(var5)(var3);
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.EmbeddedActivityJoinability;
            var1 = var1.CAN_JOIN;
            if(!(var3 !== var1)) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var1 = _closure1_slot6;
            var1 = var1.CANNOT_JOIN;
            _fun0001_ip = 51; continue _fun0001;
case 49:
            var2 = _closure1_slot6;
            var1 = var2.CAN_JOIN;
case 51:
            return var1;
case 15:
            var1 = _closure1_slot6;
            var1 = var1.CANNOT_JOIN;
            return var1;
case 8:
            var1 = _closure1_slot6;
            var1 = var1.JOINED;
            return var1;
        }
    };
    var3['default'] = var4;
    var3['ActivityJoinability'] = var2;
    return var1;
})();
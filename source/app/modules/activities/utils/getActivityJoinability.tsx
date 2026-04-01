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
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/utils/getActivityJoinability.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function getActivityJoinability(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var15 = var1.user;
            var14 = var1.activity;
            var4 = var1.application;
            var13 = var1.channelId;
            var12 = var1.currentUser;
            var3 = var1.isEmbedded;
            var11 = var1.ChannelStore;
            var8 = var1.GuildStore;
            var6 = var1.GuildMemberCountStore;
            var18 = var1.RelationshipStore;
            var7 = var1.SelectedChannelStore;
            var10 = var1.VoiceStateStore;
            var9 = var1.PermissionStore;
            var17 = var1.LocalActivityStore;
            var21 = var1.SelfPresenceStore;
            var2 = var1.EmbeddedActivitiesStore;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var16 = var17.getApplicationActivity;
            var1 = null;
            var5 = var1 == var14;
            var19 = undefined;
            var22 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var22 = var14.application_id;
case 4:
            var23 = var1 != var22;
            var20 = '';
            var5 = var20;
            if(!var23) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var22;
case 6:
            var17 = var16.bind(var17)(var5);
            if(!(var1 == var17)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var16 = var21.getApplicationActivity;
            var22 = var1 == var14;
            var5 = undefined;
            if(var22) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var14.application_id;
case 10:
            var22 = var1 != var5;
            if(!var22) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var20 = var5;
case 12:
            var5 = true;
            var17 = var16.bind(var21)(var20, var5);
case 8:
            var1 = var1 != var17;
            if(!var1) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var5 = 1;
            var5 = var20[var5];
            var16 = var16.bind(var19)(var5);
            var5 = var16.getIsInParty;
            var1 = var5.bind(var16)(var17, var14);
case 14:
            if(var1) { _fun0001_ip = 16; continue _fun0001 }
case 2:
            if(!var3) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var1 = var2.getCurrentEmbeddedActivity;
            var5 = var1.bind(var2)();
            var2 = null;
            var1 = var2 != var5;
            if(!var1) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var5 = var5.applicationId;
            var16 = var2 == var14;
            var2 = undefined;
            if(var16) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var2 = var14.application_id;
case 21:
            var1 = var5 === var2;
case 19:
            if(var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = null;
            if(!(var2 != var15)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            if(!var3) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            if(!(var2 == var13)) { _fun0001_ip = 27; continue _fun0001 }
case 25:
            if(!var3) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            if(!(var2 == var13)) { _fun0001_ip = 28; continue _fun0001 }
case 30:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var5 = 4;
            var5 = var17[var5];
            var17 = undefined;
            var16 = var16.bind(var17)(var5);
            var5 = _closure1_slot3;
            var5 = var5.CONTEXTLESS;
            var5 = var16.bind(var17)(var14, var5);
            if(var5) { _fun0001_ip = 28; continue _fun0001 }
case 31:
            var1 = _closure1_slot6;
            var1 = var1.CANNOT_JOIN;
            return var1;
case 28:
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 5;
            var5 = var16[var5];
            var16 = undefined;
            var17 = var17.bind(var16)(var5);
            var5 = var17.platformSupportsActivityJoin;
            var5 = var5.bind(var17)();
            if(var5) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            if(var3) { _fun0001_ip = 32; continue _fun0001 }
case 34:
            var3 = _closure1_slot6;
            var3 = var3.CANNOT_JOIN;
            return var3;
case 32:
            var5 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = 6;
            var3 = var19[var3];
            var17 = var5.bind(var16)(var3);
            var3 = var17.getPartySize;
            var17 = var3.bind(var17)(var14);
            var3 = 7;
            var3 = var19[var3];
            var5 = var5.bind(var16)(var3);
            var3 = var5.hasPartySize;
            var3 = var3.bind(var5)(var17);
            if(!var3) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var5 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = 8;
            var3 = var19[var3];
            var5 = var5.bind(var16)(var3);
            var3 = var5.isPartyFull;
            var3 = var3.bind(var5)(var17);
            if(var3) { _fun0001_ip = 35; continue _fun0001 }
case 37:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var17 = 4;
            var3 = var3[var17];
            var5 = var5.bind(var16)(var3);
            var3 = _closure1_slot3;
            var3 = var3.PARTY_PRIVACY_FRIENDS;
            var3 = var5.bind(var16)(var14, var3);
            if(!var3) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var5 = var18.isFriend;
            var3 = var15.id;
            var3 = var5.bind(var18)(var3);
            if(var3) { _fun0001_ip = 40; continue _fun0001 }
case 38:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var17];
            var5 = var5.bind(var16)(var3);
            var3 = _closure1_slot3;
            var3 = var3.PARTY_PRIVACY_VOICE_CHANNEL;
            var3 = var5.bind(var16)(var14, var3);
            if(var3) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var3 = _closure1_slot6;
            var3 = var3.CANNOT_JOIN;
            return var3;
case 41:
            var5 = var11.getChannel;
            var3 = var7.getVoiceChannelId;
            var3 = var3.bind(var7)();
            var7 = var5.bind(var11)(var3);
            if(!(var2 != var7)) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var16 = var10.isInChannel;
            var5 = var7.id;
            var3 = var15.id;
            var3 = var16.bind(var10)(var5, var3);
            if(!var3) { _fun0001_ip = 43; continue _fun0001 }
case 45:
            var5 = var7.type;
            var3 = _closure1_slot4;
            var3 = var3.DM;
            if(!(var3 !== var5)) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var3 = _closure1_slot4;
            var3 = var3.GROUP_DM;
            if(!(var3 !== var5)) { _fun0001_ip = 46; continue _fun0001 }
case 48:
            var5 = var8.getGuild;
            var3 = var7.getGuildId;
            var3 = var3.bind(var7)();
            var3 = var5.bind(var8)(var3);
            if(!(var2 != var3)) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var16 = var3.features;
            var7 = var16.has;
            var5 = _closure1_slot5;
            var5 = var5.COMMUNITY;
            var5 = var7.bind(var16)(var5);
            if(var5) { _fun0001_ip = 49; continue _fun0001 }
case 51:
            var5 = var6.getMemberCount;
            var3 = var3.id;
            var3 = var5.bind(var6)(var3);
            if(!(var2 != var3)) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var2 = 100;
            if(!(!(var3 < var2))) { _fun0001_ip = 54; continue _fun0001 }
case 52:
            var2 = _closure1_slot6;
            var2 = var2.CANNOT_JOIN;
            _fun0001_ip = 55; continue _fun0001;
case 54:
            var3 = _closure1_slot6;
            var2 = var3.CAN_JOIN;
case 55:
            return var2;
case 49:
            var2 = _closure1_slot6;
            var2 = var2.CANNOT_JOIN;
            return var2;
case 46:
            var2 = _closure1_slot6;
            var2 = var2.CAN_JOIN;
            return var2;
case 43:
            var2 = _closure1_slot6;
            var2 = var2.CANNOT_JOIN;
            return var2;
case 40:
            var2 = _closure1_slot6;
            var2 = var2.CAN_JOIN;
            return var2;
case 35:
            var1 = _closure1_slot6;
            var1 = var1.CANNOT_JOIN;
            return var1;
case 27:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 2;
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
            var12 = 3;
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
            if(!(var3 !== var1)) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var1 = _closure1_slot6;
            var1 = var1.CANNOT_JOIN;
            _fun0001_ip = 58; continue _fun0001;
case 56:
            var2 = _closure1_slot6;
            var1 = var2.CAN_JOIN;
case 58:
            return var1;
case 23:
            var1 = _closure1_slot6;
            var1 = var1.CANNOT_JOIN;
            return var1;
case 16:
            var1 = _closure1_slot6;
            var1 = var1.JOINED;
            return var1;
        }
    };
    var3['default'] = var4;
    var3['ActivityJoinability'] = var2;
    return var1;
})();
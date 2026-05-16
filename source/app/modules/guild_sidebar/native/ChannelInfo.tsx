// app/modules/guild_sidebar/native/ChannelInfo.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function LimitAndDurationInfo(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.channel;
            var _closure2_slot0 = var6;
            var9 = var2.voiceStatesCount;
            var4 = var2.selected;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 9;
            var3 = var11[var3];
            var5 = undefined;
            var8 = var7.bind(var5)(var3);
            var7 = var8.useStateFromStoresObject;
            var10 = _closure1_slot7;
            var3 = new Array(2);
            var3[0] = var10;
            var10 = _closure1_slot5;
            var3[1] = var10;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var6 = _closure1_slot7;
                    var3 = var6.hasVideo;
                    var2 = _closure2_slot0;
                    var1 = var2.id;
                    var3 = var3.bind(var6)(var1);
                    var1 = var2.isGuildStageVoice;
                    var2 = var1.bind(var2)();
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 20;
                    var6 = var6[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.getStageHasMedia;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var2 = var6.bind(var7)(var1);
case 2:
                    var1 = {};
                    var7 = _closure1_slot5;
                    var6 = var7.can;
                    var5 = _closure1_slot9;
                    var5 = var5.CONNECT;
                    var4 = _closure2_slot0;
                    var4 = var6.bind(var7)(var5, var4);
                    var4 = !var4;
                    var1['isLocked'] = var4;
                    var1['hasVideo'] = var3;
                    var1['hasMedia'] = var2;
                    return var1;
                }
            };
            var1 = var7.bind(var8)(var3, var1);
            var10 = var1.isLocked;
            var7 = var1.hasVideo;
            var8 = var1.hasMedia;
            var3 = _closure1_slot1;
            var1 = 21;
            var1 = var11[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['channel'] = var6;
            var1['locked'] = var10;
            var10 = var7;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = var8;
case 4:
            var1['video'] = var10;
            var1['selected'] = var4;
            var1 = var3.bind(var5)(var1);
            var4 = _closure1_slot10;
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot13;
            var1 = {};
            var1['channel'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 22;
            var2 = var10[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.ConnectedUserLimit;
            var2 = {};
            var2['userCount'] = var9;
            if(var7) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var7 = var8;
case 9:
            var2['video'] = var7;
            var2['channel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function DurationInfo(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channel;
            var1 = _closure1_slot11;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 23;
            var1 = var7[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useStartTime;
            var8 = var1.bind(var3)(var4);
            var1 = null;
            var3 = var1 != var8;
            if(!var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var4 = _closure1_slot10;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 24;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.ActiveTimestamp;
            var2 = {};
            var7 = {};
            var7['start'] = var8;
            var2['entry'] = var7;
            var6 = var6.activeTimestamp;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 11:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.Fonts;
    var7 = var4.GuildFeatures;
    var _closure1_slot8 = var7;
    var4 = var4.Permissions;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'fontFamily': null, 'fontSize': 12, 'lineHeight': 16};
    var10 = var10.CODE_NORMAL;
    var9['fontFamily'] = var10;
    var4['activeTimestamp'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/native/ChannelInfo.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelInfo(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channel;
            var _closure2_slot0 = var8;
            var15 = var1.isChannelSelected;
            var18 = var1.isChannelCollapsed;
            var12 = var1.voiceStates;
            var2 = var1.enableConnectedUserLimit;
            var17 = var1.enableActivities;
            var5 = var1.muted;
            var16 = var1.isSubscriptionGated;
            var14 = var1.needSubscriptionToAccess;
            var7 = _closure1_slot0;
            var21 = _closure1_slot2;
            var4 = 9;
            var6 = var21[var4];
            var4 = undefined;
            var10 = var7.bind(var4)(var6);
            var9 = var10.useStateFromStoresObject;
            var11 = _closure1_slot4;
            var6 = new Array(3);
            var6[0] = var11;
            var11 = _closure1_slot6;
            var6[1] = var11;
            var11 = _closure1_slot3;
            var6[2] = var11;
            var3 = function() {
                var1 = {};
                var6 = _closure1_slot4;
                var5 = var6.getGuild;
                var2 = _closure2_slot0;
                var4 = var2.guild_id;
                var4 = var5.bind(var6)(var4);
                var1['guild'] = var4;
                var6 = _closure1_slot6;
                var5 = var6.getMentionCount;
                var4 = var2.id;
                var4 = var5.bind(var6)(var4);
                var1['mentionsCount'] = var4;
                var5 = var6.getIsMentionLowImportance;
                var4 = var2.id;
                var4 = var5.bind(var6)(var4);
                var1['isMentionLowImportance'] = var4;
                var5 = _closure1_slot3;
                var4 = var5.shouldIndicateNewChannel;
                var3 = var2.guild_id;
                var2 = var2.id;
                var2 = var4.bind(var5)(var3, var2);
                var1['isNewChannel'] = var2;
                return var1;
            };
            var3 = var9.bind(var10)(var6, var3);
            var19 = var3.guild;
            var11 = var3.mentionsCount;
            var10 = var3.isMentionLowImportance;
            var6 = var3.isNewChannel;
            var20 = _closure1_slot1;
            var3 = 10;
            var3 = var21[var3];
            var3 = var20.bind(var4)(var3);
            var13 = var3.bind(var4)(var8);
            var3 = 11;
            var3 = var21[var3];
            var22 = var7.bind(var4)(var3);
            var9 = var22.useOptInEnabledForGuild;
            var3 = var8.guild_id;
            var9 = var9.bind(var22)(var3);
            var3 = 12;
            var3 = var21[var3];
            var23 = var7.bind(var4)(var3);
            var22 = var23.useUnreadThreadsCountForParent;
            var7 = var8.guild_id;
            var3 = var8.id;
            var7 = var22.bind(var23)(var7, var3);
            var3 = 13;
            var3 = var21[var3];
            var20 = var20.bind(var4)(var3);
            var3 = {};
            var3['mentionsCount'] = var11;
            var3['isNewChannel'] = var6;
            var3['postsWithUnreadsCount'] = var7;
            var3['muted'] = var5;
            var3 = var20.bind(var4)(var3);
            if(var3) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var3 = null;
            if(!(var3 != var18)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            if(!var18) { _fun0004_ip = 15; continue _fun0004 }
case 17:
            var20 = var3 == var19;
            var18 = undefined;
            if(var20) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var21 = var19.features;
            var20 = var21.has;
            var19 = _closure1_slot8;
            var19 = var19.COMMUNITY;
            var18 = var20.bind(var21)(var19);
case 18:
            if(!(var3 != var18)) { _fun0004_ip = 15; continue _fun0004 }
case 20:
            if(!var18) { _fun0004_ip = 15; continue _fun0004 }
case 21:
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var18 = 15;
            var18 = var20[var18];
            var19 = var19.bind(var4)(var18);
            var18 = var19.hasStream;
            var18 = var18.bind(var19)(var12);
            if(var18) { _fun0004_ip = 22; continue _fun0004 }
case 15:
            if(!(var3 != var17)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            if(!var17) { _fun0004_ip = 23; continue _fun0004 }
case 25:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var17 = 17;
            var17 = var19[var17];
            var18 = var18.bind(var4)(var17);
            var17 = var18.showChannelItemEmbeddedActivities;
            var17 = var17.bind(var18)(var13);
            if(var17) { _fun0004_ip = 26; continue _fun0004 }
case 23:
            if(!(var3 != var16)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            if(!(var3 != var14)) { _fun0004_ip = 27; continue _fun0004 }
case 29:
            if(var16) { _fun0004_ip = 30; continue _fun0004 }
case 27:
            if(!(var3 != var2)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            if(var2) { _fun0004_ip = 33; continue _fun0004 }
case 31:
            return var3;
case 33:
            var16 = var3 == var12;
            var2 = undefined;
            if(var16) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var2 = var12.length;
case 34:
            var3 = var3 != var2;
            var16 = 0;
            if(!var3) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var16 = var2;
case 36:
            var12 = _closure1_slot10;
            var3 = _closure1_slot12;
            var2 = {};
            var2['channel'] = var8;
            var2['voiceStatesCount'] = var16;
            var2['selected'] = var15;
            var2 = var12.bind(var4)(var3, var2);
            return var2;
case 30:
            var12 = _closure1_slot10;
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 19;
            var2 = var15[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['locked'] = var14;
            var2 = var12.bind(var4)(var3, var2);
            return var2;
case 26:
            var12 = _closure1_slot10;
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 18;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['embeddedApps'] = var13;
            var2['muted'] = var5;
            var2 = var12.bind(var4)(var3, var2);
            return var2;
case 22:
            var12 = _closure1_slot10;
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 16;
            var2 = var13[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.LiveTag;
            var2 = {};
            var2 = var12.bind(var4)(var3, var2);
            return var2;
case 13:
            var3 = _closure1_slot10;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 14;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['mentionCount'] = var11;
            var1['isMentionLowImportance'] = var10;
            if(!var6) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var6 = var9;
case 38:
            var1['isNewChannel'] = var6;
            var6 = var8.isForumLikeChannel;
            var8 = var6.bind(var8)();
            var6 = null;
            if(!var8) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var6 = var7;
case 40:
            var1['postsWithUnreadsCount'] = var6;
            var1['muted'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
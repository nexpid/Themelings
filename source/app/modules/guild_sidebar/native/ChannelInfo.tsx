// app/modules/guild_sidebar/native/ChannelInfo.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function ChannelConnectedUserLimit(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channel;
            var7 = var1.hasVideo;
            var8 = var1.hasMedia;
            var9 = var1.voiceStatesCount;
            var10 = var1.isLocked;
            var4 = var1.selected;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 23;
            var1 = var5[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['channel'] = var6;
            var1['locked'] = var10;
            var10 = var7;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var8;
case 2:
            var1['video'] = var10;
            var1['selected'] = var4;
            var3 = var3.bind(var5)(var1);
            var1 = null;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot10;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 24;
            var2 = var10[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.ConnectedUserLimit;
            var2 = {};
            var2['userCount'] = var9;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var8;
case 6:
            var2['video'] = var7;
            var2['channel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channel;
            var _closure2_slot0 = var8;
            var18 = var1.isChannelSelected;
            var24 = var1.isChannelCollapsed;
            var23 = var1.voiceStates;
            var3 = var1.enableConnectedUserLimit;
            var13 = var1.enableActivities;
            var5 = var1.muted;
            var2 = var1.isSubscriptionGated;
            var17 = var1.needSubscriptionToAccess;
            var12 = _closure1_slot0;
            var26 = _closure1_slot2;
            var4 = 9;
            var7 = var26[var4];
            var4 = undefined;
            var9 = var12.bind(var4)(var7);
            var7 = var9.useStartTime;
            var16 = var7.bind(var9)(var8);
            var7 = _closure1_slot11;
            var14 = var7.bind(var4)();
            var7 = 10;
            var7 = var26[var7];
            var10 = var12.bind(var4)(var7);
            var9 = var10.useStateFromStoresObject;
            var11 = _closure1_slot4;
            var7 = new Array(5);
            var7[0] = var11;
            var11 = _closure1_slot6;
            var7[1] = var11;
            var11 = _closure1_slot7;
            var7[2] = var11;
            var11 = _closure1_slot3;
            var7[3] = var11;
            var11 = _closure1_slot5;
            var7[4] = var11;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var6 = _closure1_slot7;
                    var5 = var6.hasVideo;
                    var4 = _closure2_slot0;
                    var1 = var4.id;
                    var5 = var5.bind(var6)(var1);
                    var1 = var4.isGuildStageVoice;
                    var4 = var1.bind(var4)();
                    if(!var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 11;
                    var6 = var6[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.getStageHasMedia;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var4 = var6.bind(var7)(var1);
case 8:
                    var1 = {};
                    var8 = _closure1_slot4;
                    var7 = var8.getGuild;
                    var2 = _closure2_slot0;
                    var6 = var2.guild_id;
                    var6 = var7.bind(var8)(var6);
                    var1['guild'] = var6;
                    var8 = _closure1_slot6;
                    var7 = var8.getMentionCount;
                    var6 = var2.id;
                    var6 = var7.bind(var8)(var6);
                    var1['mentionsCount'] = var6;
                    var7 = var8.getIsMentionLowImportance;
                    var6 = var2.id;
                    var6 = var7.bind(var8)(var6);
                    var1['isMentionLowImportance'] = var6;
                    var8 = _closure1_slot5;
                    var7 = var8.can;
                    var6 = _closure1_slot9;
                    var6 = var6.CONNECT;
                    var6 = var7.bind(var8)(var6, var2);
                    var6 = !var6;
                    var1['isLocked'] = var6;
                    var1['hasVideo'] = var5;
                    var1['hasMedia'] = var4;
                    var5 = _closure1_slot3;
                    var4 = var5.shouldIndicateNewChannel;
                    var3 = var2.guild_id;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['isNewChannel'] = var2;
                    return var1;
                }
            };
            var6 = var9.bind(var10)(var7, var6);
            var25 = var6.guild;
            var11 = var6.mentionsCount;
            var10 = var6.isMentionLowImportance;
            var19 = var6.isLocked;
            var22 = var6.hasVideo;
            var21 = var6.hasMedia;
            var6 = var6.isNewChannel;
            var20 = _closure1_slot1;
            var7 = 12;
            var7 = var26[var7];
            var7 = var20.bind(var4)(var7);
            var15 = var7.bind(var4)(var8);
            var7 = 13;
            var7 = var26[var7];
            var27 = var12.bind(var4)(var7);
            var9 = var27.useOptInEnabledForGuild;
            var7 = var8.guild_id;
            var9 = var9.bind(var27)(var7);
            var7 = 14;
            var7 = var26[var7];
            var28 = var12.bind(var4)(var7);
            var27 = var28.useUnreadThreadsCountForParent;
            var12 = var8.guild_id;
            var7 = var8.id;
            var7 = var27.bind(var28)(var12, var7);
            var12 = 15;
            var12 = var26[var12];
            var20 = var20.bind(var4)(var12);
            var12 = {};
            var12['mentionsCount'] = var11;
            var12['isNewChannel'] = var6;
            var12['postsWithUnreadsCount'] = var7;
            var12['muted'] = var5;
            var12 = var20.bind(var4)(var12);
            if(var12) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var12 = null;
            var20 = var12 == var23;
            var26 = undefined;
            if(var20) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var26 = var23.length;
case 12:
            var27 = var12 != var26;
            var20 = 0;
            if(!var27) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var20 = var26;
case 14:
            if(!(var12 != var24)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            if(!var24) { _fun0002_ip = 16; continue _fun0002 }
case 18:
            var26 = var12 == var25;
            var24 = undefined;
            if(var26) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var27 = var25.features;
            var26 = var27.has;
            var25 = _closure1_slot8;
            var25 = var25.COMMUNITY;
            var24 = var26.bind(var27)(var25);
case 19:
            if(!(var12 != var24)) { _fun0002_ip = 16; continue _fun0002 }
case 21:
            if(!var24) { _fun0002_ip = 16; continue _fun0002 }
case 22:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var24 = 17;
            var24 = var26[var24];
            var25 = var25.bind(var4)(var24);
            var24 = var25.hasStream;
            var24 = var24.bind(var25)(var23);
            if(var24) { _fun0002_ip = 23; continue _fun0002 }
case 16:
            if(!(var12 == var16)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            if(!(var12 != var13)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            if(!var13) { _fun0002_ip = 26; continue _fun0002 }
case 28:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var13 = 20;
            var13 = var25[var13];
            var24 = var24.bind(var4)(var13);
            var13 = var24.showChannelItemEmbeddedActivities;
            var13 = var13.bind(var24)(var15);
            if(var13) { _fun0002_ip = 29; continue _fun0002 }
case 26:
            if(!(var12 != var2)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            if(!(var12 != var17)) { _fun0002_ip = 30; continue _fun0002 }
case 32:
            if(var2) { _fun0002_ip = 33; continue _fun0002 }
case 30:
            var13 = var12 != var3;
            var2 = null;
            if(!var13) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var2 = null;
            if(!var3) { _fun0002_ip = 34; continue _fun0002 }
case 36:
            var13 = _closure1_slot10;
            var12 = _closure1_slot12;
            var3 = {};
            var3['channel'] = var8;
            var3['voiceStates'] = var23;
            var3['hasVideo'] = var22;
            var3['hasMedia'] = var21;
            var3['voiceStatesCount'] = var20;
            var3['isLocked'] = var19;
            var3['selected'] = var18;
            var2 = var13.bind(var4)(var12, var3);
case 34:
            _fun0002_ip = 37; continue _fun0002;
case 33:
            var13 = _closure1_slot10;
            var12 = _closure1_slot1;
            var18 = _closure1_slot2;
            var3 = 22;
            var3 = var18[var3];
            var12 = var12.bind(var4)(var3);
            var3 = {};
            var3['locked'] = var17;
            var2 = var13.bind(var4)(var12, var3);
case 37:
            _fun0002_ip = 38; continue _fun0002;
case 29:
            var13 = _closure1_slot10;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var3 = 21;
            var3 = var17[var3];
            var12 = var12.bind(var4)(var3);
            var3 = {};
            var3['embeddedApps'] = var15;
            var3['muted'] = var5;
            var2 = var13.bind(var4)(var12, var3);
case 38:
            _fun0002_ip = 39; continue _fun0002;
case 24:
            var13 = _closure1_slot10;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 19;
            var3 = var15[var3];
            var3 = var12.bind(var4)(var3);
            var12 = var3.ActiveTimestamp;
            var3 = {};
            var15 = {};
            var15['start'] = var16;
            var3['entry'] = var15;
            var14 = var14.activeTimestamp;
            var3['style'] = var14;
            var2 = var13.bind(var4)(var12, var3);
case 39:
            _fun0002_ip = 40; continue _fun0002;
case 23:
            var13 = _closure1_slot10;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 18;
            var3 = var14[var3];
            var3 = var12.bind(var4)(var3);
            var12 = var3.LiveTag;
            var3 = {};
            var2 = var13.bind(var4)(var12, var3);
case 40:
            return var2;
case 10:
            var3 = _closure1_slot10;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 16;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['mentionCount'] = var11;
            var1['isMentionLowImportance'] = var10;
            if(!var6) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var6 = var9;
case 41:
            var1['isNewChannel'] = var6;
            var6 = var8.isForumLikeChannel;
            var8 = var6.bind(var8)();
            var6 = null;
            if(!var8) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var6 = var7;
case 43:
            var1['postsWithUnreadsCount'] = var6;
            var1['muted'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
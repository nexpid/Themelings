// app/modules/messages/native/renderer/row_data/embeds/EmbeddedActivityInstanceEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.CodedLinkExtendedType;
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/EmbeddedActivityInstanceEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createActivityInstanceEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var13 = arg1;
            var6 = var13.application;
            var _closure2_slot0 = var6;
            var5 = var13.activityInstance;
            var14 = var13.channel_id;
            var3 = _closure1_slot5;
            var1 = var3.getChannel;
            var15 = var1.bind(var3)(var14);
            var1 = null;
            var3 = var1 == var15;
            var7 = undefined;
            var18 = undefined;
            if(var3) { _fun0001_ip = 60; continue _fun0001 }
 55:
            var18 = var15.guild_id;
 60:
            var11 = var14;
            if(!(var1 != var15)) { _fun0001_ip = 114; continue _fun0001 }
 67:
            var3 = var15.isThread;
            var11 = var14;
            if(!(var1 != var3)) { _fun0001_ip = 114; continue _fun0001 }
 80:
            var3 = var15.isThread;
            var3 = var3.bind(var15)();
            var11 = var14;
            if(!var3) { _fun0001_ip = 114; continue _fun0001 }
 96:
            var4 = var1 == var15;
            var3 = undefined;
            if(var4) { _fun0001_ip = 111; continue _fun0001 }
 105:
            var3 = var15.parent_id;
 111:
            var11 = var3;
 114:
            if(!(var1 != var6)) { _fun0001_ip = 136; continue _fun0001 }
 118:
            var4 = var1 == var5;
            var3 = undefined;
            if(var4) { _fun0001_ip = 132; continue _fun0001 }
 127:
            var3 = var5.id;
 132:
            if(!(var1 == var3)) { _fun0001_ip = 138; continue _fun0001 }
 136:
            return var7;
 138:
            var10 = _closure1_slot2;
            var4 = var10.getEmbeddedActivitiesForChannel;
            var12 = var1 != var11;
            var9 = '';
            var3 = var9;
            if(!var12) { _fun0001_ip = 165; continue _fun0001 }
 162:
            var3 = var11;
 165:
            var10 = var4.bind(var10)(var3);
            var4 = var10.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.applicationId;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var10 = var4.bind(var10)(var3);
            var4 = _closure1_slot2;
            var3 = var4.getCurrentEmbeddedActivity;
            var16 = var3.bind(var4)();
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 6;
            var3 = var12[var3];
            var17 = var11.bind(var7)(var3);
            var4 = var17.getEmbeddedActivityParticipantAvatarUris;
            var3 = {};
            var3['activity'] = var10;
            var19 = var6.id;
            var3['applicationId'] = var19;
            var3['guildId'] = var18;
            var3['channelId'] = var14;
            var3 = var4.bind(var17)(var3);
            var17 = _closure1_slot6;
            var4 = var6.id;
            var2 = function getStatusText(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var6 = arg1;
                    var4 = arg2;
                    var1 = arg3;
                    var _closure3_slot0 = var1;
                    var1 = null;
                    var7 = var1 == var4;
                    var5 = undefined;
                    if(var7) { _fun0002_ip = 55; continue _fun0002 }
 26:
                    var7 = var4.userIds;
                    var4 = var7.values;
                    var7 = var4.bind(var7)();
                    var4 = var7.next;
                    var4 = var4.bind(var7)();
                    var5 = var4.value;
 55:
                    if(!(var1 != var5)) { _fun0002_ip = 95; continue _fun0002 }
 59:
                    var4 = var6.findActivity;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.application_id;
                        var1 = _closure3_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var4.bind(var6)(var5, var3);
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 93; continue _fun0002 }
 87:
                    var2 = var3.details;
 93:
                    return var2;
 95:
                    return var1;
                }
            };
            var4 = var2.bind(var7)(var17, var10, var4);
            var2 = 7;
            var2 = var12[var2];
            var12 = var11.bind(var7)(var2);
            var11 = var12.getJoinOrStartButtonState;
            var2 = {};
            var2['embeddedActivity'] = var10;
            var2['currentEmbeddedActivity'] = var16;
            var2['channel'] = var15;
            var2 = var11.bind(var12)(var2);
            if(!(var1 == var10)) { _fun0001_ip = 417; continue _fun0001 }
 323:
            var11 = var2.disabled;
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var2 = 8;
            var10 = var16[var2];
            var10 = var15.bind(var7)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var2 = var16[var2];
            var2 = var15.bind(var7)(var2);
            var2 = var2.t;
            if(var11) { _fun0001_ip = 390; continue _fun0001 }
 375:
            var11 = var2.cX9uLS;
            var11 = var10.bind(var12)(var11);
            _fun0001_ip = 403; continue _fun0001;
 390:
            var2 = var2.JBnc7O;
            var11 = var10.bind(var12)(var2);
 403:
            if(!(var1 != var4)) { _fun0001_ip = 410; continue _fun0001 }
 407:
            var11 = var4;
 410:
            var2 = null;
            _fun0001_ip = 568; continue _fun0001;
 417:
            var10 = var4;
            if(!(var1 == var10)) { _fun0001_ip = 481; continue _fun0001 }
 424:
            var16 = _closure1_slot0;
            var17 = _closure1_slot1;
            var4 = 8;
            var12 = var17[var4];
            var12 = var16.bind(var7)(var12);
            var15 = var12.intl;
            var12 = var15.string;
            var4 = var17[var4];
            var4 = var16.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.oQn0h4;
            var10 = var12.bind(var15)(var4);
 481:
            var16 = var3.length;
            var17 = _closure1_slot0;
            var18 = _closure1_slot1;
            var4 = 8;
            var12 = var18[var4];
            var12 = var17.bind(var7)(var12);
            var15 = var12.intl;
            var12 = var15.string;
            var4 = var18[var4];
            var4 = var17.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.BMTj29;
            var15 = var12.bind(var15)(var4);
            var4 = global;
            var4 = var4.HermesInternal;
            var12 = var4.concat;
            var4 = ' ';
            var2 = var12.bind(var9)(var16, var4, var15);
            var11 = var10;
 568:
            var10 = _closure1_slot0;
            var12 = _closure1_slot1;
            var4 = 9;
            var4 = var12[var4];
            var12 = var10.bind(var7)(var4);
            var10 = var12.getPlayInContext;
            var4 = var6.id;
            var4 = var10.bind(var12)(var4, var14);
            var14 = var4.instanceId;
            var12 = var4.isCurrentlyInInstance;
            var15 = var4.canLaunchInChannel;
            var4 = var6.icon;
            var4 = var1 != var4;
            var10 = null;
            if(!var4) { _fun0001_ip = 686; continue _fun0001 }
 637:
            var16 = _closure1_slot0;
            var17 = _closure1_slot1;
            var4 = 10;
            var4 = var17[var4];
            var19 = var16.bind(var7)(var4);
            var18 = var19.getAppIconSrc;
            var17 = var6.id;
            var16 = var6.icon;
            var4 = var6.bot;
            var10 = var18.bind(var19)(var17, var16, var4);
 686:
            var4 = {};
            var16 = 'play_in_channel';
            var4['id'] = var16;
            if(!(var1 != var14)) { _fun0001_ip = 759; continue _fun0001 }
 702:
            var18 = _closure1_slot0;
            var19 = _closure1_slot1;
            var14 = 8;
            var16 = var19[var14];
            var16 = var18.bind(var7)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var14 = var19[var14];
            var14 = var18.bind(var7)(var14);
            var14 = var14.t;
            var14 = var14.VJlc0d;
            var14 = var16.bind(var17)(var14);
            _fun0001_ip = 814; continue _fun0001;
 759:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var16 = 8;
            var17 = var20[var16];
            var17 = var19.bind(var7)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var7)(var16);
            var16 = var16.t;
            var16 = var16.RscU7O;
            var14 = var17.bind(var18)(var16);
 814:
            var4['label'] = var14;
            if(var12) { _fun0001_ip = 827; continue _fun0001 }
 821:
            var14 = false;
            var12 = var14 === var15;
 827:
            var4['disabled'] = var12;
            var12 = new Array(1);
            var12[0] = var4;
            var15 = _closure1_slot3;
            var14 = var15.getApplication;
            var4 = var6.id;
            var4 = var14.bind(var15)(var4);
            var4 = var1 == var4;
            if(!var4) { _fun0001_ip = 892; continue _fun0001 }
 866:
            var16 = _closure1_slot3;
            var15 = var16.isFetchingApplication;
            var14 = var6.id;
            var15 = var15.bind(var16)(var14);
            var14 = false;
            var4 = var14 === var15;
 892:
            if(!var4) { _fun0001_ip = 931; continue _fun0001 }
 895:
            var14 = _closure1_slot0;
            var15 = _closure1_slot1;
            var4 = 11;
            var4 = var15[var4];
            var15 = var14.bind(var7)(var4);
            var14 = var15.fetchApplication;
            var4 = var6.id;
            var4 = var14.bind(var15)(var4);
 931:
            var4 = {};
            var14 = var6.id;
            var4['appId'] = var14;
            var13 = var13.id;
            var4['messageId'] = var13;
            var16 = _closure1_slot0;
            var17 = _closure1_slot1;
            var13 = 8;
            var14 = var17[var13];
            var14 = var16.bind(var7)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var7)(var13);
            var13 = var13.t;
            var13 = var13.pkq6Vl;
            var13 = var14.bind(var15)(var13);
            var4['title'] = var13;
            var13 = var1 != var11;
            if(!var13) { _fun0001_ip = 1021; continue _fun0001 }
 1018:
            var9 = var11;
 1021:
            var4['header'] = var9;
            var4['info'] = var1;
            var4['tagline'] = var1;
            var4['staticBannerSrc'] = var1;
            var4['iconSrc'] = var10;
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var13 = 12;
            var13 = var11[var13];
            var15 = var9.bind(var7)(var13);
            var14 = var15.getActivityLaunchURL;
            var13 = {};
            var16 = var6.id;
            var13['applicationId'] = var16;
            var17 = _closure1_slot4;
            var16 = var17.getId;
            var16 = var16.bind(var17)();
            var13['referrerId'] = var16;
            var13 = var14.bind(var15)(var13);
            var4['embedUrl'] = var13;
            var13 = 'bot';
            var4['bannerRatio'] = var13;
            var4['actions'] = var12;
            var8 = _closure1_slot7;
            var8 = var8.APP_MESSAGE_EMBED;
            var4['extendedType'] = var8;
            var8 = 10;
            var8 = var11[var8];
            var9 = var9.bind(var7)(var8);
            var8 = var9.getAppGradientColors;
            var11 = var1 != var10;
            var7 = undefined;
            if(!var11) { _fun0001_ip = 1170; continue _fun0001 }
 1167:
            var7 = var10;
 1170:
            var7 = var8.bind(var9)(var7);
            var4['gradientColors'] = var7;
            var7 = 0;
            var4['backgroundColor'] = var7;
            var4['borderColor'] = var7;
            var4['headerColor'] = var7;
            var4['headerText'] = var1;
            var4['type'] = var1;
            var1 = {};
            var6 = var6.id;
            var1['applicationId'] = var6;
            var5 = var5.id;
            var1['instanceId'] = var5;
            var1['appMessageEmbedModel'] = var4;
            var1['participantAvatarUris'] = var3;
            var1['participantsDescription'] = var2;
            return var1;
        }
    };
    var3['createActivityInstanceEmbed'] = var2;
    return var1;
})();
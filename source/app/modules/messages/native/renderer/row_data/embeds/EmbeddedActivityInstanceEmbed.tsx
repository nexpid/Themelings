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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CodedLinkExtendedType;
    var _closure1_slot8 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/EmbeddedActivityInstanceEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createActivityInstanceEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = var6.application;
            var1 = var6.activityInstance;
            var4 = var6.channel_id;
            var3 = _closure1_slot5;
            var2 = var3.getChannel;
            var4 = var2.bind(var3)(var4);
            var8 = null;
            if(!(var8 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var8 == var1;
            var3 = undefined;
            var2 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var1.id;
case 4:
            if(!(var8 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            if(!(var8 == var4)) { _fun0001_ip = 7; continue _fun0001 }
case 2:
            var2 = undefined;
            return var2;
case 7:
            var7 = _closure1_slot7;
            var2 = var7.getCurrentUser;
            var2 = var2.bind(var7)();
            var7 = var8 == var2;
            var13 = undefined;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var13 = var2.nsfwAllowed;
case 8:
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var14 = 7;
            var10 = var2[var14];
            var12 = var7.bind(var3)(var10);
            var11 = var12.getContentClassificationVisibility;
            var10 = var5.content_classification;
            var10 = var11.bind(var12)(var10, var4, var13);
            var2 = var2[var14];
            var2 = var7.bind(var3)(var2);
            var2 = var2.ContentClassificationVisibility;
            var2 = var2.DISPLAY;
            if(!(var2 !== var10)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var14];
            var2 = var7.bind(var3)(var2);
            var2 = var2.ContentClassificationVisibility;
            var2 = var2.BLOCK_UNDERAGE;
            if(!(var2 !== var10)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var14];
            var2 = var7.bind(var3)(var2);
            var2 = var2.ContentClassificationVisibility;
            var2 = var2.BLOCK_CHANNEL_RESTRICTION;
            if(!(var2 !== var10)) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            return var3;
case 12:
            var12 = var5.id;
            var7 = var1.id;
            var11 = var6.id;
            var13 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var14];
            var2 = var13.bind(var3)(var2);
            var2 = var2.ContentClassificationVisibility;
            var2 = var2.BLOCK_UNDERAGE;
            if(!(var10 !== var2)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var14 = _closure1_slot0;
            var15 = _closure1_slot1;
            var2 = 8;
            var10 = var15[var2];
            var10 = var14.bind(var3)(var10);
            var13 = var10.intl;
            var10 = var13.string;
            var2 = var15[var2];
            var2 = var14.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.NIZyKq;
            var10 = var10.bind(var13)(var2);
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var2 = 8;
            var13 = var16[var2];
            var13 = var15.bind(var3)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var2 = var16[var2];
            var2 = var15.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.LPOzxB;
            var10 = var13.bind(var14)(var2);
case 17:
            var2 = {};
            var2['applicationId'] = var12;
            var2['instanceId'] = var7;
            var7 = new Array(0);
            var2['participantAvatarUris'] = var7;
            var2['participantsDescription'] = var8;
            var7 = {};
            var14 = _closure1_slot0;
            var15 = _closure1_slot1;
            var13 = 9;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            var13 = var13.AppMessageEmbedDisplayType;
            var13 = var13.BLOCKED;
            var7['displayType'] = var13;
            var7['appId'] = var12;
            var7['messageId'] = var11;
            var7['title'] = var8;
            var11 = 8;
            var12 = var15[var11];
            var12 = var14.bind(var3)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var3)(var11);
            var11 = var11.t;
            var11 = var11.bZBN64;
            var11 = var12.bind(var13)(var11);
            var7['header'] = var11;
            var7['info'] = var10;
            var7['tagline'] = var8;
            var7['iconSrc'] = var8;
            var7['staticBannerSrc'] = var8;
            var10 = 'bot';
            var7['bannerRatio'] = var10;
            var10 = new Array(0);
            var7['actions'] = var10;
            var7['embedUrl'] = var8;
            var9 = _closure1_slot8;
            var9 = var9.APP_MESSAGE_EMBED;
            var7['extendedType'] = var9;
            var9 = new Array(0);
            var7['gradientColors'] = var9;
            var9 = 0;
            var7['backgroundColor'] = var9;
            var7['borderColor'] = var9;
            var7['headerColor'] = var9;
            var7['headerText'] = var8;
            var7['type'] = var8;
            var2['appMessageEmbedModel'] = var7;
            return var2;
case 10:
            var18 = var1.id;
            var1 = function createDisplayActivityInstanceEmbed(arg1, arg2, arg3, arg4) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var12 = arg1;
                    var5 = arg2;
                    var14 = arg4;
                    var _closure3_slot0 = var5;
                    var13 = var12.channel_id;
                    var17 = var14.guild_id;
                    var1 = var14.isThread;
                    var1 = var1.bind(var14)();
                    var9 = var13;
                    if(!var1) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var9 = var14.parent_id;
case 18:
                    var6 = _closure1_slot2;
                    var4 = var6.getEmbeddedActivitiesForChannelIncludingHidden;
                    var1 = null;
                    var10 = var1 != var9;
                    var8 = '';
                    var3 = var8;
                    if(!var10) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var3 = var9;
case 20:
                    var6 = var4.bind(var6)(var3);
                    var4 = var6.find;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.applicationId;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var9 = var4.bind(var6)(var3);
                    var4 = _closure1_slot2;
                    var3 = var4.getCurrentEmbeddedActivity;
                    var15 = var3.bind(var4)();
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var3 = 10;
                    var3 = var11[var3];
                    var6 = undefined;
                    var16 = var10.bind(var6)(var3);
                    var4 = var16.getEmbeddedActivityParticipantAvatarUris;
                    var3 = {};
                    var3['activity'] = var9;
                    var18 = var5.id;
                    var3['applicationId'] = var18;
                    var3['guildId'] = var17;
                    var3['channelId'] = var13;
                    var3 = var4.bind(var16)(var3);
                    var16 = _closure1_slot6;
                    var4 = var5.id;
                    var2 = function getStatusText(arg1, arg2, arg3) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var6 = arg1;
                            var4 = arg2;
                            var1 = arg3;
                            var _closure4_slot0 = var1;
                            var1 = null;
                            var7 = var1 == var4;
                            var5 = undefined;
                            if(var7) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                            var7 = var4.userIds;
                            var4 = var7.values;
                            var7 = var4.bind(var7)();
                            var4 = var7.next;
                            var4 = var4.bind(var7)();
                            var5 = var4.value;
case 22:
                            if(!(var1 != var5)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                            var4 = var6.findActivity;
                            var3 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.application_id;
                                var1 = _closure4_slot0;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var3 = var4.bind(var6)(var5, var3);
                            var4 = var1 == var3;
                            var2 = undefined;
                            if(var4) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                            var2 = var3.details;
case 26:
                            return var2;
case 24:
                            return var1;
                        }
                    };
                    var4 = var2.bind(var6)(var16, var9, var4);
                    var2 = 11;
                    var2 = var11[var2];
                    var11 = var10.bind(var6)(var2);
                    var10 = var11.getJoinOrStartButtonState;
                    var2 = {};
                    var2['embeddedActivity'] = var9;
                    var2['currentEmbeddedActivity'] = var15;
                    var2['channel'] = var14;
                    var2 = var10.bind(var11)(var2);
                    if(!(var1 == var9)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var10 = var2.disabled;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot1;
                    var2 = 8;
                    var9 = var15[var2];
                    var9 = var14.bind(var6)(var9);
                    var11 = var9.intl;
                    var9 = var11.string;
                    var2 = var15[var2];
                    var2 = var14.bind(var6)(var2);
                    var2 = var2.t;
                    if(var10) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var10 = var2.cX9uLZ;
                    var10 = var9.bind(var11)(var10);
                    _fun0002_ip = 32; continue _fun0002;
case 30:
                    var2 = var2.JBnc7N;
                    var10 = var9.bind(var11)(var2);
case 32:
                    if(!(var1 != var4)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                    var10 = var4;
case 33:
                    var2 = null;
                    _fun0002_ip = 35; continue _fun0002;
case 28:
                    var9 = var4;
                    if(!(var1 == var9)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot1;
                    var4 = 8;
                    var11 = var16[var4];
                    var11 = var15.bind(var6)(var11);
                    var14 = var11.intl;
                    var11 = var14.string;
                    var4 = var16[var4];
                    var4 = var15.bind(var6)(var4);
                    var4 = var4.t;
                    var4 = var4.oQn0h4;
                    var9 = var11.bind(var14)(var4);
case 36:
                    var15 = var3.length;
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot1;
                    var4 = 8;
                    var11 = var17[var4];
                    var11 = var16.bind(var6)(var11);
                    var14 = var11.intl;
                    var11 = var14.string;
                    var4 = var17[var4];
                    var4 = var16.bind(var6)(var4);
                    var4 = var4.t;
                    var4 = var4.BMTj28;
                    var14 = var11.bind(var14)(var4);
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var11 = var4.concat;
                    var4 = ' ';
                    var2 = var11.bind(var8)(var15, var4, var14);
                    var10 = var9;
case 35:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var4 = 12;
                    var4 = var11[var4];
                    var11 = var9.bind(var6)(var4);
                    var9 = var11.getPlayInContext;
                    var4 = var5.id;
                    var4 = var9.bind(var11)(var4, var13);
                    var13 = var4.instanceId;
                    var11 = var4.isCurrentlyInInstance;
                    var14 = var4.canLaunchInChannel;
                    var4 = var5.icon;
                    var4 = var1 != var4;
                    var9 = null;
                    if(!var4) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot1;
                    var4 = 13;
                    var4 = var16[var4];
                    var18 = var15.bind(var6)(var4);
                    var17 = var18.getAppIconSrc;
                    var16 = var5.id;
                    var15 = var5.icon;
                    var4 = var5.bot;
                    var9 = var17.bind(var18)(var16, var15, var4);
case 38:
                    var4 = {};
                    var15 = 'play_in_channel';
                    var4['id'] = var15;
                    if(!(var1 != var13)) { _fun0002_ip = 40; continue _fun0002 }
case 10:
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot1;
                    var13 = 8;
                    var15 = var18[var13];
                    var15 = var17.bind(var6)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var13 = var18[var13];
                    var13 = var17.bind(var6)(var13);
                    var13 = var13.t;
                    var13 = var13.VJlc0S;
                    var13 = var15.bind(var16)(var13);
                    _fun0002_ip = 41; continue _fun0002;
case 40:
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot1;
                    var15 = 8;
                    var16 = var19[var15];
                    var16 = var18.bind(var6)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var19[var15];
                    var15 = var18.bind(var6)(var15);
                    var15 = var15.t;
                    var15 = var15.RscU7I;
                    var13 = var16.bind(var17)(var15);
case 41:
                    var4['label'] = var13;
                    if(var11) { _fun0002_ip = 42; continue _fun0002 }
case 43:
                    var13 = false;
                    var11 = var13 === var14;
case 42:
                    var4['disabled'] = var11;
                    var11 = new Array(1);
                    var11[0] = var4;
                    var14 = _closure1_slot3;
                    var13 = var14.getApplication;
                    var4 = var5.id;
                    var4 = var13.bind(var14)(var4);
                    var4 = var1 == var4;
                    if(!var4) { _fun0002_ip = 44; continue _fun0002 }
case 45:
                    var15 = _closure1_slot3;
                    var14 = var15.isFetchingApplication;
                    var13 = var5.id;
                    var14 = var14.bind(var15)(var13);
                    var13 = false;
                    var4 = var13 === var14;
case 44:
                    if(!var4) { _fun0002_ip = 46; continue _fun0002 }
case 47:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot1;
                    var4 = 14;
                    var4 = var14[var4];
                    var14 = var13.bind(var6)(var4);
                    var13 = var14.fetchApplication;
                    var4 = var5.id;
                    var4 = var13.bind(var14)(var4);
case 46:
                    var4 = {};
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot1;
                    var13 = 9;
                    var13 = var16[var13];
                    var13 = var15.bind(var6)(var13);
                    var13 = var13.AppMessageEmbedDisplayType;
                    var13 = var13.DISPLAY;
                    var4['displayType'] = var13;
                    var13 = var5.id;
                    var4['appId'] = var13;
                    var12 = var12.id;
                    var4['messageId'] = var12;
                    var12 = 8;
                    var13 = var16[var12];
                    var13 = var15.bind(var6)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var16[var12];
                    var12 = var15.bind(var6)(var12);
                    var12 = var12.t;
                    var12 = var12.pkq6Vq;
                    var12 = var13.bind(var14)(var12);
                    var4['title'] = var12;
                    var12 = var1 != var10;
                    if(!var12) { _fun0002_ip = 48; continue _fun0002 }
case 49:
                    var8 = var10;
case 48:
                    var4['header'] = var8;
                    var4['info'] = var1;
                    var4['tagline'] = var1;
                    var4['staticBannerSrc'] = var1;
                    var4['iconSrc'] = var9;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var12 = 15;
                    var12 = var10[var12];
                    var14 = var8.bind(var6)(var12);
                    var13 = var14.getActivityLaunchURL;
                    var12 = {};
                    var15 = var5.id;
                    var12['applicationId'] = var15;
                    var16 = _closure1_slot4;
                    var15 = var16.getId;
                    var15 = var15.bind(var16)();
                    var12['referrerId'] = var15;
                    var12 = var13.bind(var14)(var12);
                    var4['embedUrl'] = var12;
                    var12 = 'bot';
                    var4['bannerRatio'] = var12;
                    var4['actions'] = var11;
                    var7 = _closure1_slot8;
                    var7 = var7.APP_MESSAGE_EMBED;
                    var4['extendedType'] = var7;
                    var7 = 13;
                    var7 = var10[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.getAppGradientColors;
                    var10 = var1 != var9;
                    var6 = undefined;
                    if(!var10) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                    var6 = var9;
case 50:
                    var6 = var7.bind(var8)(var6);
                    var4['gradientColors'] = var6;
                    var6 = 0;
                    var4['backgroundColor'] = var6;
                    var4['borderColor'] = var6;
                    var4['headerColor'] = var6;
                    var4['headerText'] = var1;
                    var4['type'] = var1;
                    var1 = {};
                    var5 = var5.id;
                    var1['applicationId'] = var5;
                    var5 = arg3;
                    var1['instanceId'] = var5;
                    var1['appMessageEmbedModel'] = var4;
                    var1['participantAvatarUris'] = var3;
                    var1['participantsDescription'] = var2;
                    return var1;
                }
            };
            var21 = undefined;
            var20 = var6;
            var19 = var5;
            var17 = var4;
            var1 = var21[var1](var20, var19, var18, var17, var16);
            return var1;
        }
    };
    var3['createActivityInstanceEmbed'] = var2;
    return var1;
})();
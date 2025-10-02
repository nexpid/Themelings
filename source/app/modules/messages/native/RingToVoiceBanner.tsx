// app/modules/messages/native/RingToVoiceBanner.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function RingToVoiceBannerInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var14 = var2.recipientUser;
            var _closure2_slot0 = var14;
            var15 = var2.voiceChannel;
            var _closure2_slot1 = var15;
            var2 = _closure1_slot11;
            var5 = undefined;
            var11 = var2.bind(var5)();
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 10;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var18 = var2.bind(var5)(var15);
            var4 = _closure1_slot0;
            var2 = 11;
            var2 = var6[var2];
            var8 = var4.bind(var5)(var2);
            var7 = var8.useCanRing;
            var3 = var15.id;
            var2 = 'RingToVoiceBanner';
            var2 = var7.bind(var8)(var14, var2, var3);
            var _closure2_slot2 = var2;
            var3 = 12;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.useStateFromStoresObject;
            var7 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot2;
                    if(!var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure2_slot1;
                    var3 = var2.id;
                    var2 = null;
                    var4 = var2 != var3;
case 2:
                    var2 = null;
                    var3 = null;
                    if(!var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = _closure1_slot4;
                    var5 = var6.getParticipant;
                    var4 = _closure2_slot1;
                    var4 = var4.id;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var3 = var5.bind(var6)(var4, var1);
case 4:
                    var1 = {};
                    var4 = var2 != var3;
                    var1['userIsInCall'] = var4;
                    var2 = var2 != var3;
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = var3.type;
                    var4 = _closure1_slot8;
                    var4 = var4.USER;
                    var2 = var5 === var4;
case 6:
                    if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = var3.ringing;
case 8:
                    var1['isUserRinging'] = var2;
                    return var1;
                }
            };
            var3 = var4.bind(var6)(var3, var1);
            var1 = var3.userIsInCall;
            var13 = var3.isUserRinging;
            var2 = !var2;
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = null;
            var2 = var3 == var15;
case 10:
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            if(!var1) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = !var13;
case 14:
            var2 = var1;
case 12:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 13;
            var1 = var7[var1];
            var6 = var3.bind(var5)(var1);
            var4 = {};
            var3 = _closure1_slot0;
            var1 = 14;
            var8 = var7[var1];
            var8 = var3.bind(var5)(var8);
            var8 = var8.ImpressionTypes;
            var8 = var8.VIEW;
            var4['type'] = var8;
            var1 = var7[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.ImpressionNames;
            var1 = var1.RING_TO_GUILD_VC_BANNER_SHOWN;
            var4['name'] = var1;
            var1 = {};
            var19 = null;
            var7 = var19 == var15;
            var3 = undefined;
            if(var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = var15.id;
case 16:
            var1['voice_channel_id'] = var3;
            var7 = var19 == var15;
            var3 = undefined;
            if(var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var3 = var15.guild_id;
case 18:
            var1['voice_guild_id'] = var3;
            var4['properties'] = var1;
            var3 = {};
            var3['disableTrack'] = var2;
            var7 = var14.id;
            var1 = new Array(1);
            var1[0] = var7;
            var1 = var6.bind(var5)(var4, var3, var1);
            var1 = null;
            if(var2) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var4 = _closure1_slot10;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var11.ringToVoiceContainer;
            var2['style'] = var6;
            var8 = _closure1_slot9;
            var12 = _closure1_slot0;
            var20 = _closure1_slot2;
            var22 = 15;
            var6 = var20[var22];
            var6 = var12.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var9 = var11.ringUserBannerText;
            var6['style'] = var9;
            var9 = 16;
            var16 = var20[var9];
            var16 = var12.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.format;
            var9 = var20[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var12 = var9.f2tNxM;
            var9 = {};
            var20 = var19 == var14;
            var19 = undefined;
            if(var20) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var19 = var14.globalName;
case 22:
            var9['username'] = var19;
            var21 = _closure1_slot9;
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var19 = var19[var22];
            var19 = var20.bind(var5)(var19);
            var20 = var19.Text;
            var19 = {'variant': 'text-sm/semibold', 'color': 'header-primary'};
            var19['children'] = var18;
            var18 = var15.id;
            var18 = var21.bind(var5)(var20, var19, var18);
            var9['channelName'] = var18;
            var9 = var16.bind(var17)(var12, var9);
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot9;
            var8 = _closure1_slot3;
            var7 = {};
            var11 = var11.ringToVoiceButtonContainer;
            var7['style'] = var11;
            var12 = _closure1_slot9;
            var11 = _closure1_slot13;
            var10 = {};
            var10['channel'] = var15;
            var14 = var14.id;
            var10['recipientUserId'] = var14;
            var10['isUserRinging'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 20:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function RingUserButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channel;
            var _closure2_slot0 = var3;
            var3 = var2.recipientUserId;
            var _closure2_slot1 = var3;
            var2 = var2.isUserRinging;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 16;
            var6 = var9[var3];
            var4 = undefined;
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            if(var2) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var8 = var3.3Hv9qa;
            var10 = var6.bind(var7)(var8);
            _fun0003_ip = 26; continue _fun0003;
case 24:
            var3 = var3.ygslb2;
            var10 = var6.bind(var7)(var3);
case 26:
            if(var2) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var7 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 17;
                var3 = var5[var1];
                var1 = undefined;
                var9 = var4.bind(var1)(var3);
                var8 = var9.ring;
                var4 = _closure2_slot0;
                var7 = var4.id;
                var3 = _closure2_slot1;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = 'dm_banner';
                var3 = var8.bind(var9)(var7, var6, var3);
                var3 = _closure1_slot0;
                var2 = 18;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.openChannelCallModal;
                var2 = var2.bind(var3)(var4);
                return var1;
            };
            _fun0003_ip = 29; continue _fun0003;
case 27:
            var7 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.stopRinging;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var5 = _closure2_slot1;
                var1 = new Array(1);
                var1[0] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
case 29:
            var3 = _closure1_slot9;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 19;
            var1 = var9[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {'size': 'sm', 'variant': 'tertiary'};
            var8 = 'sm';
            var1['text'] = var10;
            var1['onPress'] = var7;
            var7 = _closure1_slot9;
            var5 = 20;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.VoiceNormalIcon;
            var5 = {};
            var5['size'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['icon'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'overflow': 'hidden', 'padding': 8, 'paddingLeft': 16, 'paddingRight': 16, 'zIndex': 100, 'backgroundColor': null, 'borderBottomWidth': 1};
    var11 = 9;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.CHAT_BANNER_BG;
    var10['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var10['borderBottomColor'] = var11;
    var4['ringToVoiceContainer'] = var10;
    var10 = {'flexShrink': 0, 'marginLeft': 12};
    var4['ringToVoiceButtonContainer'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'flex': 1};
    var4['ringUserBannerText'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function RingToVoiceBanner(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var2 = var2.channel;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var9 = 12;
            var3 = var7[var9];
            var5 = undefined;
            var8 = var4.bind(var5)(var3);
            var6 = var8.useStateFromStores;
            var3 = _closure1_slot5;
            var4 = new Array(2);
            var4[0] = var3;
            var3 = _closure1_slot6;
            var4[1] = var3;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var4 = _closure1_slot6;
                var1 = var4.getVoiceChannelId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var8)(var4, var3);
            var4 = _closure1_slot1;
            var3 = 21;
            var3 = var7[var3];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useExperiment;
            var3 = {};
            var4 = null;
            var11 = var4 == var6;
            var10 = undefined;
            if(var11) { _fun0004_ip = 30; continue _fun0004 }
case 9:
            var10 = var6.guild_id;
case 30:
            var3['guildId'] = var10;
            var10 = 'ChatView';
            var3['location'] = var10;
            var3 = var7.bind(var8)(var3);
            var3 = var3.enabled;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var9 = var8.bind(var5)(var7);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var10;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var5 = var1.type;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 22;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var4);
                    var1 = var1.ChannelTypes;
                    var4 = var1.DM;
                    var1 = null;
                    if(!(var5 === var4)) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                    var4 = _closure1_slot7;
                    var3 = var4.getUser;
                    var5 = _closure2_slot0;
                    var2 = var5.getRecipientId;
                    var2 = var2.bind(var5)();
                    var1 = var3.bind(var4)(var2);
case 31:
                    return var1;
                }
            };
            var7 = var8.bind(var9)(var7, var1);
            var1 = null;
            if(!var3) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var3 = var4 != var7;
            var1 = null;
            if(!var3) { _fun0004_ip = 33; continue _fun0004 }
case 35:
            var3 = var4 != var6;
            var1 = null;
            if(!var3) { _fun0004_ip = 33; continue _fun0004 }
case 36:
            var4 = _closure1_slot9;
            var3 = _closure1_slot12;
            var2 = {};
            var2['recipientUser'] = var7;
            var2['voiceChannel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 33:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/RingToVoiceBanner.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
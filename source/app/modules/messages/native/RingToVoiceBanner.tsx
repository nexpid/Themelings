// app/modules/messages/native/RingToVoiceBanner.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function RingUserButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.channel;
            var _closure2_slot0 = var3;
            var3 = var2.recipientUserId;
            var _closure2_slot1 = var3;
            var2 = var2.isUserRinging;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 13;
            var6 = var9[var3];
            var4 = undefined;
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            if(var2) { _fun0001_ip = 97; continue _fun0001 }
 82:
            var8 = var3.3Hv9qa;
            var10 = var6.bind(var7)(var8);
            _fun0001_ip = 108; continue _fun0001;
 97:
            var3 = var3.ygslb2;
            var10 = var6.bind(var7)(var3);
 108:
            if(var2) { _fun0001_ip = 120; continue _fun0001 }
 111:
            var7 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 14;
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
                var2 = 15;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.openChannelCallModal;
                var2 = var2.bind(var3)(var4);
                return var1;
            };
            _fun0001_ip = 127; continue _fun0001;
 120:
            var7 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 14;
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
 127:
            var3 = _closure1_slot6;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 16;
            var1 = var9[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {'size': 'sm', 'variant': 'tertiary'};
            var8 = 'sm';
            var1['text'] = var10;
            var1['onPress'] = var7;
            var7 = _closure1_slot6;
            var5 = 17;
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
    var _closure1_slot9 = var1;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'overflow': 'hidden', 'padding': 8, 'paddingLeft': 16, 'paddingRight': 16, 'zIndex': 100, 'backgroundColor': null, 'borderBottomWidth': 1};
    var10 = 6;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.CHAT_BANNER_BG;
    var9['backgroundColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var9['borderBottomColor'] = var10;
    var4['ringToVoiceContainer'] = var9;
    var9 = {'flexShrink': 0, 'marginLeft': 12};
    var4['ringToVoiceButtonContainer'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'flex': 1};
    var4['ringUserBannerText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/RingToVoiceBanner.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RingToVoiceBanner(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var14 = var2.recipientUser;
            var _closure2_slot0 = var14;
            var15 = var2.voiceChannel;
            var _closure2_slot1 = var15;
            var2 = _closure1_slot8;
            var5 = undefined;
            var11 = var2.bind(var5)();
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var18 = var2.bind(var5)(var15);
            var4 = _closure1_slot0;
            var2 = 8;
            var2 = var6[var2];
            var8 = var4.bind(var5)(var2);
            var7 = var8.useCanRing;
            var3 = var15.id;
            var2 = 'RingToVoiceBanner';
            var2 = var7.bind(var8)(var14, var2, var3);
            var _closure2_slot2 = var2;
            var3 = 9;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.useStateFromStoresObject;
            var7 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure2_slot2;
                    if(!var4) { _fun0003_ip = 25; continue _fun0003 }
 10:
                    var2 = _closure2_slot1;
                    var3 = var2.id;
                    var2 = null;
                    var4 = var2 != var3;
 25:
                    var2 = null;
                    var3 = null;
                    if(!var4) { _fun0003_ip = 69; continue _fun0003 }
 32:
                    var6 = _closure1_slot4;
                    var5 = var6.getParticipant;
                    var4 = _closure2_slot1;
                    var4 = var4.id;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var3 = var5.bind(var6)(var4, var1);
 69:
                    var1 = {};
                    var4 = var2 != var3;
                    var1['userIsInCall'] = var4;
                    var2 = var2 != var3;
                    if(!var2) { _fun0003_ip = 109; continue _fun0003 }
 87:
                    var5 = var3.type;
                    var4 = _closure1_slot5;
                    var4 = var4.USER;
                    var2 = var5 === var4;
 109:
                    if(!var2) { _fun0003_ip = 118; continue _fun0003 }
 112:
                    var2 = var3.ringing;
 118:
                    var1['isUserRinging'] = var2;
                    return var1;
                }
            };
            var3 = var4.bind(var6)(var3, var1);
            var1 = var3.userIsInCall;
            var13 = var3.isUserRinging;
            var2 = !var2;
            if(var2) { _fun0002_ip = 172; continue _fun0002 }
 166:
            var3 = null;
            var2 = var3 == var15;
 172:
            if(var2) { _fun0002_ip = 184; continue _fun0002 }
 175:
            if(!var1) { _fun0002_ip = 181; continue _fun0002 }
 178:
            var1 = !var13;
 181:
            var2 = var1;
 184:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 10;
            var1 = var7[var1];
            var6 = var3.bind(var5)(var1);
            var4 = {};
            var3 = _closure1_slot0;
            var1 = 11;
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
            if(var7) { _fun0002_ip = 281; continue _fun0002 }
 276:
            var3 = var15.id;
 281:
            var1['voice_channel_id'] = var3;
            var7 = var19 == var15;
            var3 = undefined;
            if(var7) { _fun0002_ip = 300; continue _fun0002 }
 295:
            var3 = var15.guild_id;
 300:
            var1['voice_guild_id'] = var3;
            var4['properties'] = var1;
            var3 = {};
            var3['disableTrack'] = var2;
            var7 = var14.id;
            var1 = new Array(1);
            var1[0] = var7;
            var1 = var6.bind(var5)(var4, var3, var1);
            var1 = null;
            if(var2) { _fun0002_ip = 649; continue _fun0002 }
 345:
            var4 = _closure1_slot7;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var11.ringToVoiceContainer;
            var2['style'] = var6;
            var8 = _closure1_slot6;
            var12 = _closure1_slot0;
            var20 = _closure1_slot2;
            var22 = 12;
            var6 = var20[var22];
            var6 = var12.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var9 = var11.ringUserBannerText;
            var6['style'] = var9;
            var9 = 13;
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
            if(var20) { _fun0002_ip = 481; continue _fun0002 }
 475:
            var19 = var14.globalName;
 481:
            var9['username'] = var19;
            var21 = _closure1_slot6;
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
            var9 = _closure1_slot6;
            var8 = _closure1_slot3;
            var7 = {};
            var11 = var11.ringToVoiceButtonContainer;
            var7['style'] = var11;
            var12 = _closure1_slot6;
            var11 = _closure1_slot9;
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
 649:
            return var1;
        }
    };
    var3['RingToVoiceBanner'] = var2;
    return var1;
})();
// app/modules/guild_scheduled_events/native/guild_sidebar/GuildLiveChannelNotice.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var8 = native2;
        var16 = native3;
        var5 = native4;
        var3 = native6;
        var9 = native7;
        var _closure1_slot0 = var8;
        var _closure1_slot1 = var16;
        var _closure1_slot2 = var5;
        var _closure1_slot3 = var9;
        var1 = function UserSummaryRow(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var14 = var1.users;
                var4 = var1.max;
                var5 = undefined;
                if(!(var4 === var5)) { _fun0002_ip = 25; continue _fun0002 }
 22:
                var4 = 5;
 25:
                var _closure2_slot0 = var4;
                var2 = var1.guildId;
                var _closure2_slot1 = var2;
                var20 = var1.audienceCount;
                var7 = var1.isLiveStreaming;
                var _closure2_slot2 = var5;
                var _closure2_slot3 = var5;
                var1 = global;
                var3 = var1.Math;
                var2 = var3.max;
                var1 = var14.length;
                var1 = var1 - var4;
                var15 = 0;
                var1 = var2.bind(var3)(var1, var15);
                _closure2_slot2 = var1;
                var2 = _closure1_slot23;
                var1 = _closure1_slot19;
                var17 = var2.bind(var5)(var1);
                _closure2_slot3 = var17;
                var1 = var14.length;
                if(!(var15 === var1)) { _fun0002_ip = 139; continue _fun0002 }
 121:
                var1 = null;
                if(!(var1 != var20)) { _fun0002_ip = 131; continue _fun0002 }
 127:
                if(!(var15 === var20)) { _fun0002_ip = 139; continue _fun0002 }
 131:
                var1 = null;
                if(!var7) { _fun0002_ip = 533; continue _fun0002 }
 139:
                var4 = _closure1_slot14;
                var3 = _closure1_slot5;
                var2 = {};
                var9 = var17.container;
                var2['style'] = var9;
                var9 = var14.map;
                var6 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var8 = arg2;
                        var1 = _closure2_slot0;
                        if(!(!(var8 >= var1))) { _fun0003_ip = 374; continue _fun0003 }
 17:
                        var1 = _closure2_slot0;
                        var13 = 1;
                        var1 = var1 - var13;
                        if(!(var8 === var1)) { _fun0003_ip = 45; continue _fun0003 }
 32:
                        var1 = _closure2_slot2;
                        var7 = 0;
                        if(!(!(var1 > var7))) { _fun0003_ip = 179; continue _fun0003 }
 45:
                        var4 = _closure1_slot13;
                        var3 = _closure1_slot5;
                        var2 = {};
                        var1 = _closure2_slot3;
                        var5 = var1.wrapper;
                        var1 = new Array(2);
                        var1[0] = var5;
                        var5 = 0;
                        var5 = var5 !== var8;
                        if(!var5) { _fun0003_ip = 98; continue _fun0003 }
 85:
                        var6 = {};
                        var9 = 4;
                        var6['marginLeft'] = var9;
                        var5 = var6;
 98:
                        var1[1] = var5;
                        var2['style'] = var1;
                        var9 = _closure1_slot13;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var1 = 17;
                        var5 = var5[var1];
                        var1 = undefined;
                        var6 = var6.bind(var1)(var5);
                        var5 = {};
                        var11 = arg1;
                        var5['user'] = var11;
                        var11 = _closure2_slot1;
                        var5['guildId'] = var11;
                        var10 = _closure1_slot18;
                        var5['size'] = var10;
                        var5 = var9.bind(var1)(var6, var5);
                        var2['children'] = var5;
                        var1 = var4.bind(var1)(var3, var2, var8);
                        _fun0003_ip = 372; continue _fun0003;
 179:
                        var6 = _closure1_slot13;
                        var5 = _closure1_slot5;
                        var4 = {};
                        var2 = _closure2_slot3;
                        var9 = var2.wrapper;
                        var2 = new Array(2);
                        var2[0] = var9;
                        var7 = var7 !== var8;
                        if(!var7) { _fun0003_ip = 230; continue _fun0003 }
 217:
                        var8 = {};
                        var9 = 4;
                        var8['marginLeft'] = var9;
                        var7 = var8;
 230:
                        var2[1] = var7;
                        var4['style'] = var2;
                        var8 = _closure1_slot13;
                        var7 = _closure1_slot5;
                        var2 = {};
                        var9 = _closure2_slot3;
                        var9 = var9.overflowCircle;
                        var2['style'] = var9;
                        var11 = _closure1_slot13;
                        var10 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var3 = 16;
                        var9 = var9[var3];
                        var3 = undefined;
                        var9 = var10.bind(var3)(var9);
                        var10 = var9.Text;
                        var9 = {'variant': 'text-xs/medium', 'lineClamp': 1, 'maxFontSizeMultiplier': 1};
                        var12 = _closure2_slot2;
                        var14 = var12 + var13;
                        var12 = global;
                        var12 = var12.HermesInternal;
                        var13 = var12.concat;
                        var12 = '+';
                        var12 = var13.bind(var12)(var14);
                        var9['children'] = var12;
                        var9 = var11.bind(var3)(var10, var9);
                        var2['children'] = var9;
                        var2 = var8.bind(var3)(var7, var2);
                        var4['children'] = var2;
                        var2 = 'overflow';
                        var1 = var6.bind(var3)(var5, var4, var2);
 372:
                        return var1;
 374:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9 = var9.bind(var14)(var6);
                var6 = new Array(3);
                var6[0] = var9;
                var9 = null;
                var9 = var9 != var20;
                if(!var9) { _fun0002_ip = 196; continue _fun0002 }
 192:
                var9 = var20 > var15;
 196:
                if(!var9) { _fun0002_ip = 466; continue _fun0002 }
 202:
                var12 = _closure1_slot13;
                var11 = _closure1_slot5;
                var10 = {};
                var16 = var17.wrapper;
                var13 = new Array(2);
                var13[0] = var16;
                var14 = var14.length;
                var14 = var14 > var15;
                if(!var14) { _fun0002_ip = 251; continue _fun0002 }
 238:
                var15 = {};
                var16 = 4;
                var15['marginLeft'] = var16;
                var14 = var15;
 251:
                var13[1] = var14;
                var10['style'] = var13;
                var15 = _closure1_slot14;
                var14 = _closure1_slot5;
                var13 = {};
                var18 = var17.badge;
                var16 = new Array(2);
                var16[0] = var18;
                var17 = var17.audienceBadge;
                var16[1] = var17;
                var13['style'] = var16;
                var19 = _closure1_slot13;
                var18 = _closure1_slot0;
                var21 = _closure1_slot3;
                var16 = 18;
                var16 = var21[var16];
                var16 = var18.bind(var5)(var16);
                var17 = var16.HeadphonesIcon;
                var16 = {};
                var22 = 'custom';
                var16['size'] = var22;
                var22 = 19;
                var22 = var21[var22];
                var24 = var18.bind(var5)(var22);
                var23 = var24.makeSizeStyle;
                var22 = 14;
                var22 = var23.bind(var24)(var22);
                var16['style'] = var22;
                var17 = var19.bind(var5)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var19 = _closure1_slot13;
                var17 = 16;
                var17 = var21[var17];
                var17 = var18.bind(var5)(var17);
                var18 = var17.Text;
                var17 = {'variant': 'text-xs/semibold', 'style': null, 'maxFontSizeMultiplier': 1};
                var21 = {};
                var22 = 4;
                var21['marginLeft'] = var22;
                var17['style'] = var21;
                var17['children'] = var20;
                var17 = var19.bind(var5)(var18, var17);
                var16[1] = var17;
                var13['children'] = var16;
                var13 = var15.bind(var5)(var14, var13);
                var10['children'] = var13;
                var9 = var12.bind(var5)(var11, var10);
 466:
                var6[1] = var9;
                if(!var7) { _fun0002_ip = 519; continue _fun0002 }
 473:
                var10 = _closure1_slot13;
                var9 = _closure1_slot1;
                var11 = _closure1_slot3;
                var8 = 20;
                var8 = var11[var8];
                var9 = var9.bind(var5)(var8);
                var8 = {};
                var11 = {};
                var12 = 4;
                var11['marginLeft'] = var12;
                var8['style'] = var11;
                var7 = var10.bind(var5)(var9, var8);
 519:
                var6[2] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 533:
                return var1;
            }
        };
        var _closure1_slot26 = var1;
        var1 = function useJoin(arg1) {
            var5 = arg1;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot4;
            var3 = var4.useCallback;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 129; continue _fun0004 }
 13:
                    var3 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var2 = 21;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.dismissGlobalKeyboard;
                    var2 = var2.bind(var3)();
                    var3 = _closure2_slot0;
                    var2 = var3.isGuildVoice;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    if(var2) { _fun0004_ip = 102; continue _fun0004 }
 73:
                    var2 = 23;
                    var2 = var5[var2];
                    var7 = var3.bind(var4)(var2);
                    var6 = var7.connectAndOpen;
                    var2 = _closure2_slot0;
                    var2 = var6.bind(var7)(var2);
                    _fun0004_ip = 129; continue _fun0004;
 102:
                    var2 = 22;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.openGuildVoiceModal;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
 129:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot27 = var1;
        var1 = function JoinChannelButton(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = arg1;
                var2 = var1.channel;
                var8 = var1.label;
                var9 = var1.disabled;
                var4 = undefined;
                if(!(var9 === var4)) { _fun0005_ip = 26; continue _fun0005 }
 24:
                var9 = false;
 26:
                var1 = _closure1_slot24;
                var6 = var1.bind(var4)();
                var3 = _closure1_slot1;
                var14 = _closure1_slot3;
                var1 = 24;
                var1 = var14[var1];
                var1 = var3.bind(var4)(var1);
                var13 = var1.bind(var4)();
                var1 = 25;
                var1 = var14[var1];
                var1 = var3.bind(var4)(var1);
                var11 = var1.bind(var4)();
                var1 = _closure1_slot27;
                var10 = var1.bind(var4)(var2);
                var3 = _closure1_slot13;
                var2 = _closure1_slot5;
                var1 = {};
                var6 = var6.button;
                var1['style'] = var6;
                var7 = _closure1_slot13;
                var12 = _closure1_slot0;
                var5 = 26;
                var5 = var14[var5];
                var5 = var12.bind(var4)(var5);
                var6 = var5.Button;
                var5 = {};
                var5['onPress'] = var10;
                var10 = 27;
                var10 = var14[var10];
                var12 = var12.bind(var4)(var10);
                var10 = var12.isThemeLight;
                var13 = var10.bind(var12)(var13);
                var12 = 'tertiary';
                var10 = var12;
                if(!var13) { _fun0005_ip = 183; continue _fun0005 }
 173:
                var10 = var12;
                if(var11) { _fun0005_ip = 183; continue _fun0005 }
 179:
                var10 = 'active';
 183:
                var5['variant'] = var10;
                var10 = 'sm';
                var5['size'] = var10;
                var5['disabled'] = var9;
                var5['text'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot28 = var1;
        var1 = function GuildVoiceEventNotice(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = arg1;
                var5 = var2.guildEvent;
                var10 = var2.channel;
                var _closure2_slot0 = var10;
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 28;
                var3 = var8[var2];
                var4 = undefined;
                var12 = var7.bind(var4)(var3);
                var11 = var12.useStateFromStoresArray;
                var3 = _closure1_slot10;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() {
                    var3 = _closure1_slot10;
                    var2 = var3.getVoiceStatesForChannel;
                    var1 = _closure2_slot0;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.user;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var12 = var11.bind(var12)(var6, var3);
                var3 = var8[var2];
                var13 = var7.bind(var4)(var3);
                var11 = var13.useStateFromStores;
                var3 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() {
                    var4 = _closure1_slot9;
                    var3 = var4.can;
                    var1 = _closure1_slot12;
                    var2 = var1.CONNECT;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var6 = var11.bind(var13)(var6, var3);
                var2 = var8[var2];
                var11 = var7.bind(var4)(var2);
                var3 = var11.useStateFromStores;
                var13 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var13;
                var1 = function() {
                    var3 = _closure1_slot8;
                    var2 = var3.getAllApplicationStreamsForChannel;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.length;
                    var1 = 0;
                    var1 = var2 > var1;
                    return var1;
                };
                var11 = var3.bind(var11)(var2, var1);
                var3 = _closure1_slot13;
                var2 = _closure1_slot25;
                var1 = {};
                var13 = 29;
                var14 = var8[var13];
                var14 = var7.bind(var4)(var14);
                var16 = var14.intl;
                var15 = var16.string;
                var14 = var8[var13];
                var14 = var7.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.X2K3//;
                var14 = var15.bind(var16)(var14);
                var1['heading'] = var14;
                var5 = var5.name;
                var1['topic'] = var5;
                var5 = var10.name;
                var1['location'] = var5;
                var5 = 30;
                var5 = var8[var5];
                var14 = var7.bind(var4)(var5);
                var5 = var14.getChannelIconComponent;
                var5 = var5.bind(var14)(var10);
                var1['LocationIcon'] = var5;
                var5 = 31;
                var5 = var8[var5];
                var5 = var7.bind(var4)(var5);
                var5 = var5.CalendarIcon;
                var1['LiveIcon'] = var5;
                var8 = _closure1_slot13;
                var7 = _closure1_slot26;
                var5 = {};
                var14 = var10.guild_id;
                var5['guildId'] = var14;
                var5['users'] = var12;
                var5['isLiveStreaming'] = var11;
                var5 = var8.bind(var4)(var7, var5);
                var1['voiceUsers'] = var5;
                var5 = undefined;
                if(!var6) { _fun0006_ip = 407; continue _fun0006 }
 331:
                var8 = _closure1_slot13;
                var7 = _closure1_slot28;
                var6 = {};
                var6['channel'] = var10;
                var12 = _closure1_slot0;
                var9 = _closure1_slot3;
                var10 = var9[var13];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var13];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.VJlc0d;
                var9 = var10.bind(var11)(var9);
                var6['label'] = var9;
                var5 = var8.bind(var4)(var7, var6);
 407:
                var1['joinButton'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot29 = var1;
        var1 = function GuildExternalEventNotice(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = arg1;
                var9 = var1.guildEvent;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 32;
                var1 = var3[var1];
                var5 = undefined;
                var2 = var2.bind(var5)(var1);
                var1 = var2.getLocationFromEvent;
                var7 = var1.bind(var2)(var9);
                var1 = null;
                var2 = var1 == var7;
                if(var2) { _fun0007_ip = 219; continue _fun0007 }
 57:
                var4 = _closure1_slot13;
                var3 = _closure1_slot25;
                var2 = {};
                var8 = _closure1_slot0;
                var10 = _closure1_slot3;
                var11 = 29;
                var12 = var10[var11];
                var12 = var8.bind(var5)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var10[var11];
                var11 = var8.bind(var5)(var11);
                var11 = var11.t;
                var11 = var11.TxqPQU;
                var11 = var12.bind(var13)(var11);
                var2['heading'] = var11;
                var11 = var9.name;
                var2['topic'] = var11;
                var2['location'] = var7;
                var7 = 33;
                var7 = var10[var7];
                var7 = var8.bind(var5)(var7);
                var7 = var7.LocationIcon;
                var2['LocationIcon'] = var7;
                var7 = 31;
                var7 = var10[var7];
                var7 = var8.bind(var5)(var7);
                var7 = var7.CalendarIcon;
                var2['LiveIcon'] = var7;
                var8 = _closure1_slot13;
                var7 = _closure1_slot31;
                var6 = {};
                var6['guildEvent'] = var9;
                var6 = var8.bind(var5)(var7, var6);
                var2['joinButton'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 219:
                return var1;
            }
        };
        var _closure1_slot30 = var1;
        var1 = function SeeDetailButton(arg1) {
            var2 = arg1;
            var8 = var2.guildEvent;
            var _closure2_slot0 = var8;
            var2 = _closure1_slot24;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var7 = _closure1_slot4;
            var3 = var7.useCallback;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 34;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openGuildEventDetails;
                var2 = {};
                var5 = _closure2_slot0;
                var6 = var5.id;
                var2['eventId'] = var6;
                var2['event'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var8 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var6.button;
            var1['style'] = var6;
            var7 = _closure1_slot13;
            var11 = _closure1_slot0;
            var12 = _closure1_slot3;
            var5 = 26;
            var5 = var12[var5];
            var5 = var11.bind(var4)(var5);
            var6 = var5.Button;
            var5 = {'onPress': null, 'variant': 'active', 'size': 'sm'};
            var5['onPress'] = var8;
            var8 = 29;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.z4FcDg;
            var8 = var9.bind(var10)(var8);
            var5['text'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot31 = var1;
        var1 = function GuildLiveStageNotice(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = arg1;
                var5 = var2.stageInstance;
                var10 = var2.channel;
                var _closure2_slot0 = var10;
                var17 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 35;
                var2 = var7[var2];
                var4 = undefined;
                var8 = var17.bind(var4)(var2);
                var6 = var8.useStageParticipants;
                var3 = var10.id;
                var2 = 36;
                var2 = var7[var2];
                var2 = var17.bind(var4)(var2);
                var2 = var2.StageChannelParticipantNamedIndex;
                var2 = var2.SPEAKER;
                var6 = var6.bind(var8)(var3, var2);
                var3 = var6.filter;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 36;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.StageChannelParticipantTypes;
                    var1 = var1.VOICE;
                    var1 = var2 === var1;
                    return var1;
                };
                var6 = var3.bind(var6)(var2);
                var3 = var6.map;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.user;
                    return var1;
                };
                var14 = var3.bind(var6)(var2);
                var2 = 28;
                var3 = var7[var2];
                var12 = var17.bind(var4)(var3);
                var11 = var12.useStateFromStores;
                var3 = _closure1_slot6;
                var8 = new Array(1);
                var8[0] = var3;
                var3 = var10.id;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() {
                    var4 = _closure1_slot6;
                    var3 = var4.getParticipantCount;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 36;
                    var5 = var5[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var5);
                    var1 = var1.StageChannelParticipantNamedIndex;
                    var1 = var1.AUDIENCE;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var11 = var11.bind(var12)(var8, var3, var6);
                var2 = var7[var2];
                var6 = var17.bind(var4)(var2);
                var3 = var6.useStateFromStores;
                var8 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var8;
                var1 = function() {
                    var4 = _closure1_slot9;
                    var3 = var4.can;
                    var1 = _closure1_slot12;
                    var2 = var1.CONNECT;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var6 = var3.bind(var6)(var2, var1);
                var1 = 37;
                var1 = var7[var1];
                var3 = var17.bind(var4)(var1);
                var2 = var3.useStageHasStream;
                var1 = var10.id;
                var12 = var2.bind(var3)(var1);
                var1 = 38;
                var1 = var7[var1];
                var3 = var17.bind(var4)(var1);
                var2 = var3.useGuildActiveEvent;
                var1 = var10.guild_id;
                var8 = var2.bind(var3)(var1);
                var3 = _closure1_slot13;
                var2 = _closure1_slot25;
                var1 = {};
                var13 = 29;
                var15 = var7[var13];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var7 = var7[var13];
                var7 = var17.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.X2K3//;
                var7 = var15.bind(var16)(var7);
                var1['heading'] = var7;
                var7 = var10.name;
                var1['location'] = var7;
                var7 = null;
                var16 = var7 != var8;
                var15 = undefined;
                if(!var16) { _fun0008_ip = 384; continue _fun0008 }
 353:
                var17 = _closure1_slot0;
                var18 = _closure1_slot3;
                var16 = 30;
                var16 = var18[var16];
                var17 = var17.bind(var4)(var16);
                var16 = var17.getChannelIconComponent;
                var15 = var16.bind(var17)(var10);
 384:
                var1['LocationIcon'] = var15;
                if(!(var7 == var8)) { _fun0008_ip = 421; continue _fun0008 }
 393:
                var8 = _closure1_slot0;
                var15 = _closure1_slot3;
                var7 = 39;
                var7 = var15[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.StageIcon;
                _fun0008_ip = 447; continue _fun0008;
 421:
                var15 = _closure1_slot0;
                var16 = _closure1_slot3;
                var8 = 31;
                var8 = var16[var8];
                var8 = var15.bind(var4)(var8);
                var7 = var8.CalendarIcon;
 447:
                var1['LiveIcon'] = var7;
                var5 = var5.topic;
                var1['topic'] = var5;
                var8 = _closure1_slot13;
                var7 = _closure1_slot26;
                var5 = {};
                var15 = var10.guild_id;
                var5['guildId'] = var15;
                var5['users'] = var14;
                var5['isLiveStreaming'] = var12;
                var5['audienceCount'] = var11;
                var5 = var8.bind(var4)(var7, var5);
                var1['voiceUsers'] = var5;
                var5 = undefined;
                if(!var6) { _fun0008_ip = 589; continue _fun0008 }
 513:
                var8 = _closure1_slot13;
                var7 = _closure1_slot28;
                var6 = {};
                var6['channel'] = var10;
                var12 = _closure1_slot0;
                var9 = _closure1_slot3;
                var10 = var9[var13];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var13];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.7vb2cX;
                var9 = var10.bind(var11)(var9);
                var6['label'] = var9;
                var5 = var8.bind(var4)(var7, var6);
 589:
                var1['joinButton'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot32 = var1;
        var1 = global;
        var7 = var1.Object;
        var6 = var7.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var6.bind(var7)(var3, var1, var4);
        var17 = 0;
        var4 = var9[var17];
        var1 = undefined;
        var10 = var5.bind(var1)(var4);
        var _closure1_slot4 = var10;
        var4 = 1;
        var4 = var9[var4];
        var4 = var8.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot5 = var4;
        var4 = 2;
        var4 = var9[var4];
        var4 = var16.bind(var1)(var4);
        var _closure1_slot6 = var4;
        var4 = 3;
        var4 = var9[var4];
        var4 = var16.bind(var1)(var4);
        var _closure1_slot7 = var4;
        var18 = 4;
        var4 = var9[var18];
        var4 = var16.bind(var1)(var4);
        var _closure1_slot8 = var4;
        var4 = 5;
        var4 = var9[var4];
        var4 = var16.bind(var1)(var4);
        var _closure1_slot9 = var4;
        var4 = 6;
        var4 = var9[var4];
        var4 = var16.bind(var1)(var4);
        var _closure1_slot10 = var4;
        var14 = 7;
        var4 = var9[var14];
        var4 = var8.bind(var1)(var4);
        var4 = var4.GuildScheduledEventEntityTypes;
        var _closure1_slot11 = var4;
        var4 = 8;
        var4 = var9[var4];
        var4 = var8.bind(var1)(var4);
        var4 = var4.Permissions;
        var _closure1_slot12 = var4;
        var4 = 9;
        var4 = var9[var4];
        var4 = var8.bind(var1)(var4);
        var5 = var4.jsx;
        var _closure1_slot13 = var5;
        var5 = var4.jsxs;
        var _closure1_slot14 = var5;
        var4 = var4.Fragment;
        var _closure1_slot15 = var4;
        var15 = 10;
        var4 = var9[var15];
        var4 = var16.bind(var1)(var4);
        var4 = var4.spacing;
        var5 = var4.PX_8;
        var _closure1_slot16 = var5;
        var4 = var9[var15];
        var4 = var16.bind(var1)(var4);
        var4 = var4.spacing;
        var4 = var4.PX_12;
        var _closure1_slot17 = var4;
        var6 = 11;
        var7 = var9[var6];
        var7 = var8.bind(var1)(var7);
        var7 = var7.AvatarSizes;
        var7 = var7.XSMALL;
        var _closure1_slot18 = var7;
        var6 = var9[var6];
        var6 = var8.bind(var1)(var6);
        var6 = var6.AVATAR_SIZE_MAP;
        var6 = var6[var7];
        var _closure1_slot19 = var6;
        var6 = var9[var15];
        var6 = var16.bind(var1)(var6);
        var6 = var6.spacing;
        var20 = var6.PX_12;
        var _closure1_slot20 = var20;
        var6 = var9[var15];
        var6 = var16.bind(var1)(var6);
        var6 = var6.spacing;
        var13 = var6.PX_8;
        var _closure1_slot21 = var13;
        var6 = var9[var15];
        var6 = var16.bind(var1)(var6);
        var6 = var6.spacing;
        var19 = var6.PX_4;
        var _closure1_slot22 = var19;
        var6 = 15;
        var7 = var9[var6];
        var12 = var8.bind(var1)(var7);
        var11 = var12.createStyles;
        var7 = function(arg1) {
            var7 = arg1;
            var1 = {};
            var2 = {'flexDirection': 'row', 'alignItems': 'center'};
            var3 = _closure1_slot21;
            var2['marginTop'] = var3;
            var1['container'] = var2;
            var2 = {'backgroundColor': null, 'borderRadius': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'height': null, 'paddingHorizontal': 6};
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var3 = 10;
            var9 = var6[var3];
            var4 = undefined;
            var9 = var5.bind(var4)(var9);
            var9 = var9.colors;
            var9 = var9.BG_MOD_STRONG;
            var2['backgroundColor'] = var9;
            var9 = var6[var3];
            var9 = var5.bind(var4)(var9);
            var9 = var9.radii;
            var9 = var9.round;
            var2['borderRadius'] = var9;
            var2['height'] = var7;
            var1['overflowCircle'] = var2;
            var2 = {};
            var9 = var6[var3];
            var9 = var5.bind(var4)(var9);
            var9 = var9.radii;
            var9 = var9.round;
            var2['borderRadius'] = var9;
            var9 = var6[var3];
            var9 = var5.bind(var4)(var9);
            var9 = var9.colors;
            var9 = var9.BG_BASE_PRIMARY;
            var2['backgroundColor'] = var9;
            var8 = _closure1_slot19;
            var2['height'] = var8;
            var1['wrapper'] = var2;
            var2 = {'borderRadius': null, 'paddingHorizontal': 8, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.radii;
            var8 = var8.round;
            var2['borderRadius'] = var8;
            var2['height'] = var7;
            var1['badge'] = var2;
            var2 = {};
            var7 = var6[var3];
            var7 = var5.bind(var4)(var7);
            var7 = var7.colors;
            var7 = var7.STATUS_DANGER;
            var2['backgroundColor'] = var7;
            var1['liveBadge'] = var2;
            var2 = {};
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BG_BASE_SECONDARY;
            var2['backgroundColor'] = var3;
            var1['audienceBadge'] = var2;
            return var1;
        };
        var7 = var11.bind(var12)(var7);
        var _closure1_slot23 = var7;
        var6 = var9[var6];
        var11 = var8.bind(var1)(var6);
        var7 = var11.createStyles;
        var6 = {};
        var12 = {};
        var12['padding'] = var20;
        var6['card'] = var12;
        var12 = {'flexDirection': 'row', 'alignItems': 'center'};
        var6['row'] = var12;
        var12 = {};
        var12['marginTop'] = var19;
        var6['infoRow'] = var12;
        var12 = {};
        var12['marginEnd'] = var18;
        var6['liveNowIcon'] = var12;
        var12 = {};
        var18 = 'uppercase';
        var12['textTransform'] = var18;
        var6['uppercase'] = var12;
        var12 = {};
        var18 = 13;
        var18 = var9[var18];
        var19 = var8.bind(var1)(var18);
        var18 = var19.isAndroid;
        var18 = var18.bind(var19)();
        if(!var18) { _fun0001_ip = 668; continue _fun0001 }
 662:
        var17 = -2;
 668:
        var12['marginTop'] = var17;
        var6['headingText'] = var12;
        var12 = {'width': 7, 'height': 7, 'marginRight': 7};
        var17 = var9[var15];
        var17 = var16.bind(var1)(var17);
        var17 = var17.colors;
        var17 = var17.STATUS_POSITIVE;
        var12['backgroundColor'] = var17;
        var15 = var9[var15];
        var15 = var16.bind(var1)(var15);
        var15 = var15.radii;
        var15 = var15.xs;
        var12['borderRadius'] = var15;
        var6['liveDot'] = var12;
        var12 = {};
        var12['marginRight'] = var14;
        var6['calendarIcon'] = var12;
        var12 = {};
        var12['marginTop'] = var13;
        var6['topic'] = var12;
        var12 = {};
        var12['marginTop'] = var13;
        var6['button'] = var12;
        var6 = var7.bind(var11)(var6);
        var _closure1_slot24 = var6;
        var7 = var10.memo;
        var6 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var1 = arg1;
                var13 = var1.heading;
                var18 = var1.location;
                var20 = var1.LocationIcon;
                var10 = var1.topic;
                var19 = var1.isLiveStreaming;
                var12 = var1.LiveIcon;
                var7 = var1.voiceUsers;
                var6 = var1.joinButton;
                var1 = _closure1_slot24;
                var4 = undefined;
                var21 = var1.bind(var4)();
                var3 = _closure1_slot14;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = {};
                var8 = var21.row;
                var5['style'] = var8;
                var14 = null;
                if(!(var14 == var12)) { _fun0009_ip = 119; continue _fun0009 }
 91:
                var11 = _closure1_slot13;
                var9 = _closure1_slot5;
                var8 = {};
                var15 = var21.liveDot;
                var8['style'] = var15;
                var9 = var11.bind(var4)(var9, var8);
                _fun0009_ip = 153; continue _fun0009;
 119:
                var11 = _closure1_slot13;
                var8 = {'size': 'xxs', 'color': 'status-positive'};
                var15 = var21.calendarIcon;
                var8['style'] = var15;
                var9 = var11.bind(var4)(var12, var8);
 153:
                var8 = new Array(2);
                var8[0] = var9;
                var12 = _closure1_slot13;
                var11 = _closure1_slot0;
                var9 = _closure1_slot3;
                var15 = 16;
                var9 = var9[var15];
                var9 = var11.bind(var4)(var9);
                var11 = var9.Text;
                var9 = {};
                var17 = 'text-xs/semibold';
                if(!var19) { _fun0009_ip = 205; continue _fun0009 }
 201:
                var17 = 'text-xs/bold';
 205:
                var9['variant'] = var17;
                var17 = 'status-positive';
                var9['color'] = var17;
                var22 = var21.headingText;
                var17 = new Array(2);
                var17[0] = var22;
                if(!var19) { _fun0009_ip = 242; continue _fun0009 }
 236:
                var19 = var21.uppercase;
 242:
                var17[1] = var19;
                var9['style'] = var17;
                var9['children'] = var13;
                var9 = var12.bind(var4)(var11, var9);
                var8[1] = var9;
                var5['children'] = var8;
                var8 = var3.bind(var4)(var2, var5);
                var5 = new Array(5);
                var5[0] = var8;
                var5[1] = var7;
                var9 = _closure1_slot13;
                var8 = _closure1_slot0;
                var7 = _closure1_slot3;
                var7 = var7[var15];
                var7 = var8.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {'style': null, 'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'redesign-channel-name-text'};
                var11 = var21.topic;
                var7['style'] = var11;
                var7['children'] = var10;
                var7 = var9.bind(var4)(var8, var7);
                var5[2] = var7;
                var9 = _closure1_slot13;
                var8 = _closure1_slot5;
                var7 = {};
                var11 = var21.row;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = var21.infoRow;
                var10[1] = var11;
                var7['style'] = var10;
                var10 = var14 != var18;
                if(!var10) { _fun0009_ip = 567; continue _fun0009 }
 400:
                var13 = _closure1_slot14;
                var12 = _closure1_slot15;
                var11 = {};
                var17 = var14 != var20;
                if(!var17) { _fun0009_ip = 453; continue _fun0009 }
 417:
                var19 = _closure1_slot13;
                var14 = {'style': null, 'size': 'xxs', 'color': 'redesign-channel-name-muted-text'};
                var21 = var21.liveNowIcon;
                var14['style'] = var21;
                var17 = var19.bind(var4)(var20, var14);
 453:
                var14 = new Array(2);
                var14[0] = var17;
                var17 = _closure1_slot13;
                var21 = _closure1_slot0;
                var22 = _closure1_slot3;
                var15 = var22[var15];
                var15 = var21.bind(var4)(var15);
                var16 = var15.Text;
                var15 = {'lineClamp': 1, 'variant': 'text-xs/medium', 'color': 'redesign-channel-name-muted-text'};
                var19 = {};
                var20 = 13;
                var20 = var22[var20];
                var21 = var21.bind(var4)(var20);
                var20 = var21.isAndroid;
                var21 = var20.bind(var21)();
                var20 = 0;
                if(!var21) { _fun0009_ip = 535; continue _fun0009 }
 529:
                var20 = -2;
 535:
                var19['marginTop'] = var20;
                var15['style'] = var19;
                var15['children'] = var18;
                var15 = var17.bind(var4)(var16, var15);
                var14[1] = var15;
                var11['children'] = var14;
                var10 = var13.bind(var4)(var12, var11);
 567:
                var7['children'] = var10;
                var7 = var9.bind(var4)(var8, var7);
                var5[3] = var7;
                var5[4] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var6 = var7.bind(var10)(var6);
        var _closure1_slot25 = var6;
        var7 = var10.memo;
        var6 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = arg1;
                var1 = var2.guild;
                var10 = var2.style;
                var4 = _closure1_slot24;
                var5 = undefined;
                var9 = var4.bind(var5)();
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var7 = 40;
                var7 = var6[var7];
                var11 = var4.bind(var5)(var7);
                var8 = var11.useActiveEventOrStageInstanceChannel;
                var7 = var1.id;
                var13 = var8.bind(var11)(var7);
                var _closure2_slot0 = var13;
                var7 = 38;
                var7 = var6[var7];
                var8 = var4.bind(var5)(var7);
                var7 = var8.useGuildActiveEvent;
                var1 = var1.id;
                var12 = var7.bind(var8)(var1);
                var _closure2_slot1 = var12;
                var1 = 28;
                var1 = var6[var1];
                var8 = var4.bind(var5)(var1);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var1;
                var4 = new Array(1);
                var4[0] = var13;
                var1 = function() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var3 = _closure1_slot7;
                        var2 = var3.getStageInstanceByChannel;
                        var5 = _closure2_slot0;
                        var1 = null;
                        var5 = var1 == var5;
                        var1 = undefined;
                        if(var5) { _fun0011_ip = 40; continue _fun0011 }
 31:
                        var4 = _closure2_slot0;
                        var1 = var4.id;
 40:
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var14 = var7.bind(var8)(var6, var1, var4);
                var1 = _closure1_slot27;
                var8 = var1.bind(var5)(var13);
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var1 = null;
                var4 = var1 == var13;
                var11 = undefined;
                if(var4) { _fun0010_ip = 185; continue _fun0010 }
 180:
                var11 = var13.id;
 185:
                var4 = new Array(2);
                var4[0] = var11;
                var4[1] = var12;
                var3 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var1 = _closure2_slot1;
                        var2 = null;
                        if(!(var2 == var1)) { _fun0012_ip = 86; continue _fun0012 }
 13:
                        var1 = _closure2_slot0;
                        var5 = var2 == var1;
                        var3 = undefined;
                        var1 = undefined;
                        if(var5) { _fun0012_ip = 37; continue _fun0012 }
 28:
                        var5 = _closure2_slot0;
                        var1 = var5.id;
 37:
                        if(!(var2 != var1)) { _fun0012_ip = 143; continue _fun0012 }
 41:
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var1 = 41;
                        var1 = var5[var1];
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.openChannelLongPressActionSheet;
                        var1 = _closure2_slot0;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        _fun0012_ip = 143; continue _fun0012;
 86:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 34;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.openGuildEventDetails;
                        var1 = {};
                        var4 = _closure2_slot1;
                        var5 = var4.id;
                        var1['eventId'] = var5;
                        var1['event'] = var4;
                        var1 = var2.bind(var3)(var1);
 143:
                        var1 = undefined;
                        return var1;
                    }
                };
                var7 = var6.bind(var7)(var3, var4);
                var3 = var1 == var12;
                var4 = undefined;
                if(var3) { _fun0010_ip = 225; continue _fun0010 }
 219:
                var4 = var12.entity_type;
 225:
                var3 = _closure1_slot11;
                var3 = var3.EXTERNAL;
                if(!(var4 !== var3)) { _fun0010_ip = 317; continue _fun0010 }
 239:
                if(!(var1 != var13)) { _fun0010_ip = 247; continue _fun0010 }
 243:
                if(!(var1 == var14)) { _fun0010_ip = 290; continue _fun0010 }
 247:
                var3 = var1 != var13;
                if(!var3) { _fun0010_ip = 258; continue _fun0010 }
 254:
                var3 = var1 != var12;
 258:
                var6 = null;
                if(!var3) { _fun0010_ip = 338; continue _fun0010 }
 263:
                var11 = _closure1_slot13;
                var4 = _closure1_slot29;
                var3 = {};
                var3['guildEvent'] = var12;
                var3['channel'] = var13;
                var6 = var11.bind(var5)(var4, var3);
                _fun0010_ip = 338; continue _fun0010;
 290:
                var11 = _closure1_slot13;
                var4 = _closure1_slot32;
                var3 = {};
                var3['stageInstance'] = var14;
                var3['channel'] = var13;
                var6 = var11.bind(var5)(var4, var3);
                _fun0010_ip = 338; continue _fun0010;
 317:
                var11 = _closure1_slot13;
                var4 = _closure1_slot30;
                var3 = {};
                var3['guildEvent'] = var12;
                var6 = var11.bind(var5)(var4, var3);
 338:
                var3 = var1 == var6;
                var1 = null;
                if(var3) { _fun0010_ip = 428; continue _fun0010 }
 347:
                var4 = _closure1_slot13;
                var3 = _closure1_slot0;
                var11 = _closure1_slot3;
                var2 = 42;
                var2 = var11[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.Card;
                var2 = {};
                var11 = 'secondary';
                var2['variant'] = var11;
                var11 = var9.card;
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var10;
                var2['style'] = var9;
                var2['onPress'] = var8;
                var2['onLongPress'] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 428:
                return var1;
            }
        };
        var6 = var7.bind(var10)(var6);
        var7 = 43;
        var7 = var9[var7];
        var9 = var8.bind(var1)(var7);
        var8 = var9.fileFinishedImporting;
        var7 = 'modules/guild_scheduled_events/native/guild_sidebar/GuildLiveChannelNotice.tsx';
        var7 = var8.bind(var9)(var7);
        var3['default'] = var6;
        var3['LIVE_CHANNEL_NOTICE_MARGIN_TOP'] = var5;
        var3['LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM'] = var4;
        var2 = function getScaledLiveChannelNoticeHeight(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var9 = arg1;
                var1 = arg2;
                var5 = var1.hasSpeakers;
                var2 = var1.hasButton;
                var4 = var1.hasAudience;
                var3 = var1.hasStream;
                var7 = _closure1_slot0;
                var6 = _closure1_slot3;
                var12 = 12;
                var6 = var6[var12];
                var10 = undefined;
                var6 = var7.bind(var10)(var6);
                var6 = var6.TextStyleSheet;
                var6 = var6.text-xs/bold;
                var6 = var6.lineHeight;
                var8 = var6 * var9;
                if(var5) { _fun0013_ip = 88; continue _fun0013 }
 80:
                if(var4) { _fun0013_ip = 88; continue _fun0013 }
 83:
                var7 = 0;
                if(!var3) { _fun0013_ip = 100; continue _fun0013 }
 88:
                var4 = _closure1_slot21;
                var3 = _closure1_slot19;
                var7 = var4 + var3;
 100:
                var5 = _closure1_slot21;
                var4 = _closure1_slot0;
                var11 = _closure1_slot3;
                var3 = var11[var12];
                var3 = var4.bind(var10)(var3);
                var3 = var3.TextStyleSheet;
                var3 = var3.text-md/semibold;
                var3 = var3.lineHeight;
                var3 = var3 * var9;
                var6 = var5 + var3;
                var5 = _closure1_slot22;
                var3 = 13;
                var3 = var11[var3];
                var4 = var4.bind(var10)(var3);
                var3 = var4.isAndroid;
                var11 = var3.bind(var4)();
                var3 = 0;
                if(!var11) { _fun0013_ip = 183; continue _fun0013 }
 177:
                var3 = -2;
 183:
                var5 = var5 + var3;
                var11 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var12];
                var3 = var11.bind(var10)(var3);
                var3 = var3.TextStyleSheet;
                var3 = var3.text-xs/medium;
                var3 = var3.lineHeight;
                var3 = var3 * var9;
                var5 = var5 + var3;
                var4 = 0;
                if(!var2) { _fun0013_ip = 269; continue _fun0013 }
 235:
                var3 = _closure1_slot21;
                var9 = _closure1_slot0;
                var11 = _closure1_slot3;
                var2 = 14;
                var2 = var11[var2];
                var2 = var9.bind(var10)(var2);
                var2 = var2.SMALL_BUTTON_HEIGHT;
                var4 = var3 + var2;
 269:
                var2 = _closure1_slot16;
                var3 = _closure1_slot20;
                var2 = var2 + var3;
                var2 = var2 + var8;
                var2 = var2 + var7;
                var2 = var2 + var6;
                var2 = var2 + var5;
                var2 = var2 + var4;
                var2 = var2 + var3;
                var1 = _closure1_slot17;
                var1 = var2 + var1;
                return var1;
            }
        };
        var3['getScaledLiveChannelNoticeHeight'] = var2;
        return var1;
    }
})();
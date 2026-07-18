// app/modules/voice_calls/native/action_sheet/VoiceMemberUser.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var8;
    var1 = function StreamingUserRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var1 = _closure1_slot14;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var1 = _closure1_slot15;
            var18 = var1.bind(var4)();
            var14 = var8.user;
            var _closure2_slot0 = var14;
            var17 = var8.channel;
            var _closure2_slot1 = var17;
            var19 = var8.isActionSheet;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot10;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 27;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getStreamerActivityByUserId;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure1_slot10;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = var3.bind(var5)(var2, var1);
            var15 = null;
            if(!(var15 == var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 25;
            var2 = var6[var1];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.eXan7B;
            var16 = var2.bind(var3)(var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 25;
            var3 = var6[var1];
            var3 = var2.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.format;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1["0wJXSh"];
            var1 = {};
            var6 = var7.details;
            if(!(var15 != var6)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var9 = var7.details;
            var6 = '';
            if(!(var6 === var9)) { _fun0001_ip = 7; continue _fun0001 }
case 5:
            var6 = var7.name;
            _fun0001_ip = 8; continue _fun0001;
case 7:
            var6 = var7.details;
case 8:
            var1['name'] = var6;
            var16 = var3.bind(var5)(var2, var1);
case 4:
            var3 = _closure1_slot12;
            var2 = _closure1_slot13;
            var1 = {};
            var7 = _closure1_slot11;
            var6 = _closure1_slot16;
            var5 = {};
            var22 = var5;
            var21 = var8;
            var8 = copyDataProperties(var22, var21);
            var12 = _closure1_slot11;
            var9 = _closure1_slot0;
            var20 = _closure1_slot2;
            var8 = 26;
            var8 = var20[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.FormSubLabel;
            var8 = {};
            var8['text'] = var16;
            var16 = null;
            if(!var19) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var16 = var18.labelCallScreen;
case 9:
            var8['style'] = var16;
            var9 = var12.bind(var4)(var9, var8);
            var8 = 'subLabel';
            var5[7] = var9;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = var14.id;
            var8 = _closure1_slot5;
            var6 = var8.getId;
            var6 = var6.bind(var8)();
            var6 = var7 !== var6;
            if(!var6) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var9 = _closure1_slot11;
            var8 = _closure1_slot3;
            var7 = {};
            var11 = var11.streamPreview;
            var7['style'] = var11;
            var12 = _closure1_slot11;
            var11 = _closure1_slot1;
            var16 = _closure1_slot2;
            var10 = 28;
            var10 = var16[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var16 = var15 == var17;
            var15 = undefined;
            if(var16) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var16 = var17.getGuildId;
            var15 = var16.bind(var17)();
case 13:
            var10['guildId'] = var15;
            var14 = var14.id;
            var10['userId'] = var14;
            var14 = true;
            var10['disableTransition'] = var14;
            var13 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 29;
                    var3 = var8[var3];
                    var6 = undefined;
                    var5 = var7.bind(var6)(var3);
                    var4 = var5.isModalOpen;
                    var3 = 30;
                    var3 = var8[var3];
                    var7 = var7.bind(var6)(var3);
                    var6 = var7.getVoiceChannelKey;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var3 = var6.bind(var7)(var3);
                    var2 = var4.bind(var5)(var3);
case 15:
                    if(!var2) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 31;
                    var2 = var7[var2];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.hideActionSheet;
                    var5 = _closure1_slot0;
                    var4 = 30;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.getVoiceChannelKey;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var10['onPress'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 11:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function RingButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var2 = var3.channelId;
            var _closure2_slot0 = var2;
            var1 = var3.userId;
            var _closure2_slot1 = var1;
            var12 = var3.isActionSheet;
            var3 = _closure1_slot14;
            var5 = undefined;
            var10 = var3.bind(var5)();
            var3 = _closure1_slot15;
            var11 = var3.bind(var5)();
            var3 = null;
            var4 = var3 == var1;
            var1 = null;
            if(var4) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var2 = var3 == var2;
            var1 = null;
            if(var2) { _fun0003_ip = 19; continue _fun0003 }
case 21:
            var4 = _closure1_slot11;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 32;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var6 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 33;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.ring;
                var4 = _closure2_slot0;
                var2 = _closure2_slot1;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = 'voice_user_action_sheet';
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var2['onPress'] = var6;
            var6 = 'button';
            var2['accessibilityRole'] = var6;
            if(var12) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var6 = var10.ringingButton;
            _fun0003_ip = 24; continue _fun0003;
case 22:
            var6 = var11.ringingButton;
case 24:
            var2['style'] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 18;
            var6 = var13[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.LegacyText;
            var6 = {};
            if(var12) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var10 = var10.ringingButtonLabel;
            _fun0003_ip = 27; continue _fun0003;
case 25:
            var10 = var11.ringingButtonLabel;
case 27:
            var6['style'] = var10;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 25;
            var10 = var13[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.bHa9kN;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 19:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function StopRingButton(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var2 = var3.channelId;
            var _closure2_slot0 = var2;
            var1 = var3.userId;
            var _closure2_slot1 = var1;
            var12 = var3.isActionSheet;
            var3 = _closure1_slot14;
            var5 = undefined;
            var10 = var3.bind(var5)();
            var3 = _closure1_slot15;
            var11 = var3.bind(var5)();
            var3 = null;
            var4 = var3 == var1;
            var1 = null;
            if(var4) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var2 = var3 == var2;
            var1 = null;
            if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 21:
            var4 = _closure1_slot11;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 32;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var6 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 33;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.stopRinging;
                var3 = _closure2_slot0;
                var6 = _closure2_slot1;
                var2 = new Array(1);
                var2[0] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2['onPress'] = var6;
            var6 = 'button';
            var2['accessibilityRole'] = var6;
            if(var12) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var6 = var10.ringingButton;
            _fun0004_ip = 24; continue _fun0004;
case 22:
            var6 = var11.ringingButton;
case 24:
            var2['style'] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 18;
            var6 = var13[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.LegacyText;
            var6 = {};
            if(var12) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var10 = var10.ringingButtonLabel;
            _fun0004_ip = 27; continue _fun0004;
case 25:
            var10 = var11.ringingButtonLabel;
case 27:
            var6['style'] = var10;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 25;
            var10 = var13[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.ygslb0;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 19:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var6 = var1.Object;
    var4 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var6)(var3, var1, var2);
    var1 = 0;
    var4 = var8[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var9 = var2.bind(var1)(var4);
    var2 = 1;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.View;
    var _closure1_slot3 = var4;
    var2 = var2.Platform;
    var2 = 2;
    var2 = var8[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var17 = 4;
    var2 = var8[var17];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var8[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var8[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var8[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var15 = 8;
    var2 = var8[var15];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 9;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var14 = var2.Fonts;
    var2 = 10;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.jsx;
    var _closure1_slot11 = var4;
    var4 = var2.jsxs;
    var _closure1_slot12 = var4;
    var2 = var2.Fragment;
    var _closure1_slot13 = var2;
    var2 = 11;
    var4 = var8[var2];
    var11 = var7.bind(var1)(var4);
    var10 = var11.createStyles;
    var6 = {};
    var4 = {};
    var12 = 'row';
    var4['flexDirection'] = var12;
    var6['row'] = var4;
    var4 = {};
    var12 = 12;
    var16 = var8[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.INTERACTIVE_TEXT_DEFAULT;
    var4['tintColor'] = var16;
    var4['marginLeft'] = var15;
    var6['voiceStatusIcon'] = var4;
    var4 = {};
    var4['marginLeft'] = var15;
    var6['voiceStatusIconMargin'] = var4;
    var4 = 16;
    var16 = {'marginHorizontal': 16, 'marginBottom': 16, 'alignItems': 'center', 'flex': 1};
    var6['streamPreview'] = var16;
    var16 = {'backgroundColor': null, 'borderRadius': null, 'height': 32, 'alignItems': 'center', 'justifyContent': 'center'};
    var18 = var8[var12];
    var18 = var13.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_MOD_MUTED;
    var16['backgroundColor'] = var18;
    var18 = var8[var12];
    var18 = var13.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.xs;
    var16['borderRadius'] = var18;
    var6['ringingButton'] = var16;
    var16 = {'fontFamily': null, 'fontSize': 14, 'lineHeight': 18, 'marginHorizontal': 16};
    var18 = var14.PRIMARY_SEMIBOLD;
    var16['fontFamily'] = var18;
    var18 = var8[var12];
    var18 = var13.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.INTERACTIVE_TEXT_ACTIVE;
    var16['color'] = var18;
    var6['ringingButtonLabel'] = var16;
    var16 = {'flexDirection': 'row', 'alignItems': 'center'};
    var6['autoDisabledVideo'] = var16;
    var16 = {};
    var16['marginLeft'] = var17;
    var6['autoDisabledVideoLabel'] = var16;
    var6 = var10.bind(var11)(var6);
    var _closure1_slot14 = var6;
    var2 = var8[var2];
    var10 = var7.bind(var1)(var2);
    var6 = var10.createStyles;
    var2 = {};
    var11 = {};
    var16 = var14.PRIMARY_MEDIUM;
    var11['fontFamily'] = var16;
    var16 = var8[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.MOBILE_TEXT_HEADING_PRIMARY;
    var11['color'] = var16;
    var2['labelCallScreen'] = var11;
    var11 = {};
    var16 = var8[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.INTERACTIVE_TEXT_DEFAULT;
    var11['tintColor'] = var16;
    var11['marginLeft'] = var15;
    var2['voiceStatusIcon'] = var11;
    var11 = {'backgroundColor': null, 'borderRadius': null, 'height': 32, 'alignItems': 'center', 'justifyContent': 'center'};
    var15 = var8[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_MUTED;
    var11['backgroundColor'] = var15;
    var15 = var8[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.xs;
    var11['borderRadius'] = var15;
    var2['ringingButton'] = var11;
    var11 = {'fontFamily': null, 'fontSize': 14, 'lineHeight': 18, 'marginHorizontal': 16};
    var14 = var14.PRIMARY_SEMIBOLD;
    var11['fontFamily'] = var14;
    var12 = var8[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_ACTIVE;
    var11['color'] = var12;
    var2['ringingButtonLabel'] = var11;
    var2 = var6.bind(var10)(var2);
    var _closure1_slot15 = var2;
    var6 = var9.memo;
    var2 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var9 = var5.user;
            var _closure2_slot0 = var9;
            var21 = var5.name;
            var12 = var5.channel;
            var _closure2_slot1 = var12;
            var1 = var5.voiceState;
            var11 = var5.withStream;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var11 = true;
case 28:
            var20 = var5.isSpectating;
            var16 = var5.isActionSheet;
            var2 = var5.onPress;
            var _closure2_slot2 = var2;
            var3 = {'user': 0, 'name': 0, 'channel': 0, 'voiceState': 0, 'withStream': 0, 'isSpectating': 0, 'isActionSheet': 0, 'onPress': 0};
            var6 = null;
            var36 = var3;
            var35 = null;
            var2 = silentSetPrototypeOf(var36, var35);
            var36 = {};
            var35 = var5;
            var34 = var3;
            var18 = copyDataProperties(var36, var35, var34);
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var2 = _closure1_slot14;
            var13 = var2.bind(var4)();
            _closure2_slot3 = var13;
            var2 = _closure1_slot15;
            var15 = var2.bind(var4)();
            var3 = _closure1_slot5;
            var2 = var3.getId;
            var29 = var2.bind(var3)();
            _closure2_slot4 = var29;
            var3 = _closure1_slot1;
            var19 = _closure1_slot2;
            var2 = 13;
            var2 = var19[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var5 = var9.id;
            var2['userId'] = var5;
            var28 = var3.bind(var4)(var2);
            var17 = _closure1_slot0;
            var5 = 14;
            var2 = var19[var5];
            var8 = var17.bind(var4)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot4;
                var1 = var1.theme;
                return var1;
            };
            var2 = var7.bind(var8)(var3, var2);
            _closure2_slot5 = var2;
            var2 = var19[var5];
            var8 = var17.bind(var4)(var2);
            var7 = var8.useStateFromStoresObject;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var4 = var3 === var1;
                    var1 = {};
                    var3 = var4;
                    if(!var4) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                    var6 = _closure1_slot9;
                    var5 = var6.isSelfMute;
                    var3 = var5.bind(var6)();
case 30:
                    var1['isSelfMute'] = var3;
                    var7 = _closure1_slot9;
                    var6 = var7.isLocalMute;
                    var5 = _closure2_slot0;
                    var5 = var5.id;
                    var5 = var6.bind(var7)(var5);
                    var1['localMute'] = var5;
                    var5 = var4;
                    if(!var4) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                    var7 = _closure1_slot9;
                    var6 = var7.isSelfDeaf;
                    var5 = var6.bind(var7)();
case 32:
                    var1['localDeaf'] = var5;
                    if(!var4) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                    var6 = _closure1_slot9;
                    var5 = var6.isVideoEnabled;
                    var4 = var5.bind(var6)();
case 34:
                    var1['localVideo'] = var4;
                    var4 = _closure1_slot9;
                    var5 = var4.isLocalVideoDisabled;
                    var2 = _closure2_slot0;
                    var3 = var2.id;
                    var3 = var5.bind(var4)(var3);
                    var1['localVideoDisabled'] = var3;
                    var3 = var4.isLocalVideoAutoDisabled;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var1['localVideoAutoDisabled'] = var2;
                    return var1;
                }
            };
            var7 = var7.bind(var8)(var3, var2);
            var8 = var7.localMute;
            _closure2_slot6 = var8;
            var3 = var7.localDeaf;
            var14 = var7.localVideo;
            var2 = var7.isSelfMute;
            var24 = var7.localVideoDisabled;
            var7 = var7.localVideoAutoDisabled;
            var5 = var19[var5];
            var23 = var17.bind(var4)(var5);
            var19 = var23.useStateFromStores;
            var5 = _closure1_slot8;
            var17 = new Array(1);
            var17[0] = var5;
            var5 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure1_slot8;
                    var3 = var4.isGuestOrLurker;
                    var5 = _closure2_slot1;
                    var2 = null;
                    var5 = var2 == var5;
                    var2 = undefined;
                    if(var5) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                    var5 = _closure2_slot1;
                    var2 = var5.guild_id;
case 36:
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var17 = var19.bind(var23)(var17, var5);
            if(var8) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var8 = var2;
case 38:
            _closure2_slot7 = var8;
            if(var14) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var14 = var24;
case 40:
            var26 = var6 != var1;
            var2 = false;
            var23 = false;
            var27 = var3;
            var25 = var14;
            var5 = false;
            var19 = false;
            if(!var26) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            if(!var11) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var11 = var1.selfStream;
case 44:
            if(var8) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var26 = var1.isVoiceMuted;
            var8 = var26.bind(var1)();
case 46:
            _closure2_slot7 = var8;
            var8 = var3;
            if(var3) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var3 = var1.isVoiceDeafened;
            var8 = var3.bind(var1)();
case 48:
            var3 = var14;
            if(var14) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var3 = var1.selfVideo;
case 50:
            var26 = var1.sessionId;
            var1 = var6 != var26;
            if(!var1) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var14 = var9.id;
            var1 = var29 === var14;
case 52:
            if(!var1) { _fun0005_ip = 11; continue _fun0005 }
case 54:
            var29 = _closure1_slot5;
            var14 = var29.getSessionId;
            var14 = var14.bind(var29)();
            var1 = var26 !== var14;
case 11:
            var2 = true;
            var5 = var1;
            var23 = var11;
            var27 = var8;
            var25 = var3;
            var19 = var5;
case 42:
            if(var16) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            var26 = var13.voiceStatusIcon;
            _fun0005_ip = 57; continue _fun0005;
case 55:
            var26 = var15.voiceStatusIcon;
case 57:
            _closure2_slot8 = var26;
            var11 = {};
            var1 = function onPress() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var11['onPress'] = var1;
            var11['label'] = var21;
            var8 = _closure1_slot11;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var14 = 18;
            var1 = var1[var14];
            var1 = var3.bind(var4)(var1);
            var3 = var1.Avatar;
            var1 = {};
            var1['user'] = var9;
            var29 = var6 == var12;
            var9 = undefined;
            if(var29) { _fun0005_ip = 58; continue _fun0005 }
case 59:
            var9 = var12.guild_id;
case 58:
            var1['guildId'] = var9;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var29 = var12[var14];
            var29 = var9.bind(var4)(var29);
            var29 = var29.AvatarSizes;
            var29 = var29.REFRESH_MEDIUM_32;
            var1['size'] = var29;
            var1['speaking'] = var28;
            var1 = var8.bind(var4)(var3, var1);
            var11['leading'] = var1;
            var1 = null;
            if(!var2) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            var1 = null;
            if(var5) { _fun0005_ip = 60; continue _fun0005 }
case 62:
            var8 = _closure1_slot12;
            var3 = _closure1_slot3;
            var2 = {};
            var28 = var13.row;
            var2['style'] = var28;
            var28 = null;
            if(!var20) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var30 = _closure1_slot11;
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var20 = var33[var14];
            var20 = var32.bind(var4)(var20);
            var29 = var20.Icon;
            var20 = {};
            var31 = var33[var14];
            var31 = var32.bind(var4)(var31);
            var31 = var31.Icon;
            var31 = var31.Sizes;
            var31 = var31.REFRESH_SMALL_16;
            var20['size'] = var31;
            var32 = _closure1_slot1;
            var31 = 22;
            var31 = var33[var31];
            var31 = var32.bind(var4)(var31);
            var20['source'] = var31;
            var20['style'] = var26;
            var28 = var30.bind(var4)(var29, var20);
case 63:
            var20 = new Array(5);
            var20[0] = var28;
            var22 = function renderMicIcon() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot7;
                    if(var1) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                    var1 = null;
                    return var1;
case 65:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var4 = undefined;
                    var6 = var3.bind(var4)(var2);
                    var3 = var6.isThemeDark;
                    var2 = _closure2_slot5;
                    var2 = var3.bind(var6)(var2);
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    if(var2) { _fun0008_ip = 67; continue _fun0008 }
case 68:
                    var2 = 17;
                    var2 = var7[var2];
                    var6 = var3.bind(var4)(var2);
                    _fun0008_ip = 69; continue _fun0008;
case 67:
                    var2 = 16;
                    var2 = var7[var2];
                    var6 = var3.bind(var4)(var2);
case 69:
                    var3 = _closure1_slot11;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 18;
                    var1 = var9[var7];
                    var1 = var8.bind(var4)(var1);
                    var2 = var1.Icon;
                    var1 = {};
                    var7 = var9[var7];
                    var7 = var8.bind(var4)(var7);
                    var7 = var7.Icon;
                    var7 = var7.Sizes;
                    var7 = var7.REFRESH_SMALL_16;
                    var1['size'] = var7;
                    var1['source'] = var6;
                    var6 = _closure2_slot3;
                    var6 = var6.voiceStatusIconMargin;
                    var1['style'] = var6;
                    var6 = _closure2_slot8;
                    var6 = var6.tintColor;
                    var1['color'] = var6;
                    var5 = _closure2_slot6;
                    var1['disableColor'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var22 = var22.bind(var4)();
            var20[1] = var22;
            var22 = null;
            if(!var27) { _fun0005_ip = 70; continue _fun0005 }
case 71:
            var29 = _closure1_slot11;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var27 = var32[var14];
            var27 = var31.bind(var4)(var27);
            var28 = var27.Icon;
            var27 = {};
            var30 = var32[var14];
            var30 = var31.bind(var4)(var30);
            var30 = var30.Icon;
            var30 = var30.Sizes;
            var30 = var30.REFRESH_SMALL_16;
            var27['size'] = var30;
            var31 = _closure1_slot1;
            var30 = 19;
            var30 = var32[var30];
            var30 = var31.bind(var4)(var30);
            var27['source'] = var30;
            var27['style'] = var26;
            var22 = var29.bind(var4)(var28, var27);
case 70:
            var20[2] = var22;
            var22 = null;
            if(!var25) { _fun0005_ip = 72; continue _fun0005 }
case 73:
            var27 = _closure1_slot11;
            var28 = _closure1_slot0;
            var25 = _closure1_slot2;
            var25 = var25[var14];
            var25 = var28.bind(var4)(var25);
            var25 = var25.Icon;
            if(var24) { _fun0005_ip = 74; continue _fun0005 }
case 75:
            var24 = {};
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var28 = var30[var14];
            var28 = var29.bind(var4)(var28);
            var28 = var28.Icon;
            var28 = var28.Sizes;
            var28 = var28.REFRESH_SMALL_16;
            var24['size'] = var28;
            var29 = _closure1_slot1;
            var28 = 21;
            var28 = var30[var28];
            var28 = var29.bind(var4)(var28);
            var24['source'] = var28;
            var24['style'] = var26;
            _fun0005_ip = 76; continue _fun0005;
case 74:
            var28 = {};
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var29 = var31[var14];
            var29 = var30.bind(var4)(var29);
            var29 = var29.Icon;
            var29 = var29.Sizes;
            var29 = var29.REFRESH_SMALL_16;
            var28['size'] = var29;
            var30 = _closure1_slot1;
            var29 = 20;
            var29 = var31[var29];
            var29 = var30.bind(var4)(var29);
            var28['source'] = var29;
            var29 = var13.voiceStatusIconMargin;
            var28['style'] = var29;
            var29 = true;
            var28['disableColor'] = var29;
            var24 = var28;
case 76:
            var22 = var27.bind(var4)(var25, var24);
case 72:
            var20[3] = var22;
            var22 = null;
            if(!var23) { _fun0005_ip = 77; continue _fun0005 }
case 78:
            var25 = _closure1_slot11;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var14];
            var23 = var24.bind(var4)(var23);
            var24 = var23.LiveTag;
            var23 = {};
            var23['style'] = var26;
            var22 = var25.bind(var4)(var24, var23);
case 77:
            var20[4] = var22;
            var2['children'] = var20;
            var1 = var8.bind(var4)(var3, var2);
case 60:
            var11['trailing'] = var1;
            var3 = _closure1_slot11;
            var8 = 26;
            var1 = var12[var8];
            var1 = var9.bind(var4)(var1);
            var2 = var1.FormRow;
            var1 = {};
            var1['disabled'] = var19;
            var36 = var1;
            var35 = var18;
            var18 = copyDataProperties(var36, var35);
            var36 = var1;
            var35 = var11;
            var11 = copyDataProperties(var36, var35);
            var11 = _closure1_slot11;
            var8 = var12[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.FormRow;
            var9 = var8.Label;
            var8 = {};
            var12 = var21;
            if(!var17) { _fun0005_ip = 79; continue _fun0005 }
case 80:
            var19 = _closure1_slot12;
            var18 = _closure1_slot13;
            var17 = {};
            var20 = new Array(2);
            var20[0] = var21;
            var23 = _closure1_slot12;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 24;
            var21 = var28[var21];
            var21 = var27.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {'variant': 'text-md/semibold', 'lineClamp': 1, 'color': 'status-positive'};
            var24 = 25;
            var25 = var28[var24];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var28[var24];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.pFO/Ph;
            var25 = var25.bind(var26)(var24);
            var24 = ['\xa0'];
            var24[1] = var25;
            var21['children'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var20[1] = var21;
            var17['children'] = var20;
            var12 = var19.bind(var4)(var18, var17);
case 79:
            var8['text'] = var12;
            var12 = null;
            if(!var16) { _fun0005_ip = 81; continue _fun0005 }
case 82:
            var12 = var15.labelCallScreen;
case 81:
            var8['style'] = var12;
            var9 = var11.bind(var4)(var9, var8);
            var8 = 'label';
            var1[7] = var9;
            if(var7) { _fun0005_ip = 83; continue _fun0005 }
case 84:
            var6 = null;
            if(!var5) { _fun0005_ip = 85; continue _fun0005 }
case 86:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 25;
            var7 = var11[var5];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var11[var5];
            var5 = var9.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.IyYqqY;
            var6 = var7.bind(var8)(var5);
case 85:
            _fun0005_ip = 87; continue _fun0005;
case 83:
            var8 = _closure1_slot12;
            var7 = _closure1_slot3;
            var5 = {};
            var9 = var13.autoDisabledVideo;
            var5['style'] = var9;
            var12 = _closure1_slot11;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = var17[var14];
            var9 = var16.bind(var4)(var9);
            var11 = var9.Icon;
            var9 = {};
            var18 = _closure1_slot1;
            var15 = 23;
            var15 = var17[var15];
            var15 = var18.bind(var4)(var15);
            var9['source'] = var15;
            var14 = var17[var14];
            var14 = var16.bind(var4)(var14);
            var14 = var14.Icon;
            var14 = var14.Sizes;
            var14 = var14.EXTRA_SMALL;
            var9['size'] = var14;
            var14 = true;
            var9['disableColor'] = var14;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot11;
            var10 = 24;
            var10 = var17[var10];
            var10 = var16.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-xs/medium', 'color': 'text-default'};
            var13 = var13.autoDisabledVideoLabel;
            var10['style'] = var13;
            var13 = 25;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.m2Hyj0;
            var13 = var14.bind(var15)(var13);
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var5['children'] = var9;
            var6 = var8.bind(var4)(var7, var5);
case 87:
            var5 = 'subLabel';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var6.bind(var9)(var2);
    var _closure1_slot16 = var2;
    var6 = var9.memo;
    var2 = function DisconnectedUserRow(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var12 = var1.user;
            var _closure2_slot0 = var12;
            var13 = var1.channel;
            var _closure2_slot1 = var13;
            var11 = var1.isActionSheet;
            var1 = var1.onPress;
            var _closure2_slot2 = var1;
            var1 = _closure1_slot15;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 14;
            var5 = var1[var5];
            var10 = var2.bind(var4)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = var13.id;
            var7 = new Array(2);
            var7[0] = var5;
            var5 = var12.id;
            var7[1] = var5;
            var5 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = _closure1_slot6;
                    var3 = var4.getCall;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var3 = var3.bind(var4)(var1);
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0010_ip = 20; continue _fun0010 }
case 88:
                    var4 = var3.ringing;
                    var3 = var4.includes;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 20:
                    return var1;
                }
            };
            var8 = var9.bind(var10)(var8, var5, var7);
            var7 = _closure1_slot1;
            var5 = 34;
            var5 = var1[var5];
            var10 = var7.bind(var4)(var5);
            var9 = var10.getName;
            var7 = var13.guild_id;
            var5 = var13.id;
            var7 = var9.bind(var10)(var7, var5, var12);
            var5 = 35;
            var5 = var1[var5];
            var10 = var2.bind(var4)(var5);
            var9 = var10.useCanRing;
            var5 = 'DisconnectedUserRow';
            var9 = var9.bind(var10)(var12, var5);
            var5 = {};
            var6 = function onPress() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onPress'] = var6;
            var10 = _closure1_slot11;
            var6 = 26;
            var1 = var1[var6];
            var1 = var2.bind(var4)(var1);
            var1 = var1.FormRow;
            var2 = var1.Label;
            var1 = {};
            var1['text'] = var7;
            var14 = null;
            if(!var11) { _fun0009_ip = 89; continue _fun0009 }
case 90:
            var14 = var15.labelCallScreen;
case 89:
            var1['style'] = var14;
            var1 = var10.bind(var4)(var2, var1);
            var5['label'] = var1;
            var15 = _closure1_slot11;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var16 = 18;
            var10 = var1[var16];
            var10 = var2.bind(var4)(var10);
            var14 = var10.Avatar;
            var10 = {};
            var10['user'] = var12;
            var17 = var13.guild_id;
            var10['guildId'] = var17;
            var16 = var1[var16];
            var16 = var2.bind(var4)(var16);
            var16 = var16.AvatarSizes;
            var16 = var16.REFRESH_MEDIUM_32;
            var10['size'] = var16;
            var10 = var15.bind(var4)(var14, var10);
            var5['leading'] = var10;
            var7 = null;
            if(!var9) { _fun0009_ip = 91; continue _fun0009 }
case 92:
            var10 = _closure1_slot11;
            if(var8) { _fun0009_ip = 93; continue _fun0009 }
case 94:
            var9 = _closure1_slot18;
            _fun0009_ip = 95; continue _fun0009;
case 93:
            var9 = _closure1_slot19;
case 95:
            var8 = {};
            var13 = var13.id;
            var8['channelId'] = var13;
            var12 = var12.id;
            var8['userId'] = var12;
            var8['isActionSheet'] = var11;
            var7 = var10.bind(var4)(var9, var8);
case 91:
            var5['trailing'] = var7;
            var3 = _closure1_slot11;
            var1 = var1[var6];
            var1 = var2.bind(var4)(var1);
            var2 = var1.FormRow;
            var1 = {};
            var20 = var1;
            var19 = var5;
            var5 = copyDataProperties(var20, var19);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var6.bind(var9)(var2);
    var6 = var9.memo;
    var5 = function VoiceMemberUser(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var10 = arg1;
            var1 = var10.voiceState;
            var _closure2_slot0 = var1;
            var8 = var10.user;
            var6 = var10.nick;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 14;
            var4 = var9[var4];
            var5 = undefined;
            var11 = var7.bind(var5)(var4);
            var7 = var11.useStateFromStores;
            var12 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var12;
            var3 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getChannel;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0012_ip = 88; continue _fun0012 }
case 96:
                    var4 = _closure2_slot0;
                    var1 = var4.channelId;
case 88:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var7 = var7.bind(var11)(var4, var3);
            var4 = _closure1_slot1;
            var3 = 36;
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useName;
            var8 = var3.bind(var4)(var8);
            var9 = null;
            if(!(var9 != var1)) { _fun0011_ip = 97; continue _fun0011 }
case 98:
            var1 = var1.selfStream;
            if(var1) { _fun0011_ip = 99; continue _fun0011 }
case 97:
            var4 = _closure1_slot11;
            var3 = _closure1_slot16;
            var1 = {};
            var14 = var1;
            var13 = var10;
            var11 = copyDataProperties(var14, var13);
            var12 = var8;
            if(!(var9 != var6)) { _fun0011_ip = 100; continue _fun0011 }
case 101:
            var12 = var6;
case 100:
            var11 = 'name';
            var1[10] = var12;
            var11 = 'channel';
            var1[10] = var7;
            var12 = false;
            var11 = 'withStream';
            var1[10] = var12;
            var1 = var4.bind(var5)(var3, var1);
            _fun0011_ip = 102; continue _fun0011;
case 99:
            var4 = _closure1_slot11;
            var3 = _closure1_slot17;
            var2 = {};
            var14 = var2;
            var13 = var10;
            var10 = copyDataProperties(var14, var13);
            if(!(var9 != var6)) { _fun0011_ip = 103; continue _fun0011 }
case 104:
            var8 = var6;
case 103:
            var6 = 'name';
            var2[5] = var8;
            var6 = 'channel';
            var2[5] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 102:
            return var1;
        }
    };
    var5 = var6.bind(var9)(var5);
    var6 = 37;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/voice_calls/native/action_sheet/VoiceMemberUser.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['STREAM_PREVIEW_MARGIN'] = var4;
    var3['DisconnectedUserRow'] = var2;
    return var1;
})();
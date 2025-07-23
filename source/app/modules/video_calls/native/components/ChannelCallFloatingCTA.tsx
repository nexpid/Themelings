// app/modules/video_calls/native/components/ChannelCallFloatingCTA.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var14 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var8;
    var1 = function FloatingCTA(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var14 = var1.onPress;
            var5 = var1.subtitle;
            var22 = var1.supertitle;
            var13 = var1.image;
            var12 = var1.imageStyle;
            var11 = var1.disabled;
            var6 = var1.label;
            var9 = var1.trailing;
            var15 = var1.style;
            var1 = _closure1_slot20;
            var4 = undefined;
            var16 = var1.bind(var4)();
            var8 = null;
            var1 = var8 != var22;
            var7 = undefined;
            if(!var1) { _fun0001_ip = 213; continue _fun0001 }
 80:
            var3 = _closure1_slot18;
            var2 = _closure1_slot5;
            var1 = {};
            var16 = var16.superHeader;
            var1['style'] = var16;
            var21 = _closure1_slot17;
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var17 = 14;
            var16 = var20[var17];
            var16 = var18.bind(var4)(var16);
            var19 = var16.Text;
            var16 = {'variant': 'heading-deprecated-12/extrabold', 'color': 'header-secondary'};
            var16['children'] = var22;
            var19 = var21.bind(var4)(var19, var16);
            var16 = new Array(2);
            var16[0] = var19;
            var19 = _closure1_slot17;
            var17 = var20[var17];
            var17 = var18.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {'variant': 'text-md/medium', 'color': 'header-primary'};
            var17['children'] = var6;
            var17 = var19.bind(var4)(var18, var17);
            var16[1] = var17;
            var1['children'] = var16;
            var7 = var3.bind(var4)(var2, var1);
 213:
            var3 = _closure1_slot17;
            var2 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 15;
            var1 = var16[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.FormCTA;
            var1 = {};
            var1['style'] = var15;
            if(!var11) { _fun0001_ip = 261; continue _fun0001 }
 252:
            var14 = function() {
                var1 = null;
                return var1;
            };
 261:
            var1['onPress'] = var14;
            var1['iconSource'] = var13;
            var1['iconStyle'] = var12;
            if(!var11) { _fun0001_ip = 294; continue _fun0001 }
 278:
            var12 = _closure1_slot17;
            var11 = _closure1_slot19;
            var10 = {};
            var9 = var12.bind(var4)(var11, var10);
 294:
            var1['trailing'] = var9;
            if(!(var8 != var7)) { _fun0001_ip = 306; continue _fun0001 }
 303:
            var6 = var7;
 306:
            var1['title'] = var6;
            var1['subtitle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var4 = function openDrawerForConsoleVoice() {
        var4 = _closure1_slot13;
        var1 = undefined;
        var3 = true;
        var4 = var4.bind(var1)(var3);
        var2 = _closure1_slot7;
        var2 = var2.bind(var1)(var3);
        var2 = global;
        var3 = var2.setTimeout;
        var2 = function() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 26;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var3 = var2.ComponentDispatch;
            var2 = var3.dispatch;
            var1 = _closure1_slot14;
            var1 = var1.TOGGLE_CALL_CONTROL_DRAWER;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot22 = var4;
    var2 = function openConsoleDetectActionSheet() {
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 27;
        var4 = var2[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.openLazy;
        var6 = _closure1_slot0;
        var3 = 29;
        var3 = var2[var3];
        var6 = var6.bind(var1)(var3);
        var3 = 28;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var6.bind(var1)(var3, var2);
        var2 = 'ConsoleDetectActionSheet';
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot23 = var2;
    var1 = function ConsoleVoiceUpsell(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var1 = var1.connectedAccount;
            var2 = _closure1_slot20;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var2 = var1.type;
            var1 = _closure1_slot16;
            var1 = var1.XBOX;
            if(!(var1 !== var2)) { _fun0002_ip = 157; continue _fun0002 }
 41:
            var1 = _closure1_slot16;
            var1 = var1.PLAYSTATION;
            if(!(var1 !== var2)) { _fun0002_ip = 59; continue _fun0002 }
 55:
            var1 = null;
            return var1;
 59:
            var5 = {};
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 32;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var5['image'] = var1;
            var1 = var12.playstationUpsell;
            var5['imageStyle'] = var1;
            var6 = _closure1_slot0;
            var1 = 31;
            var2 = var7[var1];
            var2 = var6.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.LI7BXF;
            var1 = var2.bind(var3)(var1);
            var5['supertitle'] = var1;
            _fun0002_ip = 245; continue _fun0002;
 157:
            var1 = {};
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 30;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var1['image'] = var2;
            var7 = _closure1_slot0;
            var2 = 31;
            var3 = var8[var2];
            var3 = var7.bind(var4)(var3);
            var6 = var3.intl;
            var3 = var6.string;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.w/AmTk;
            var2 = var3.bind(var6)(var2);
            var1['supertitle'] = var2;
            var5 = var1;
 245:
            var3 = _closure1_slot17;
            var2 = _closure1_slot21;
            var1 = {};
            var6 = _closure1_slot22;
            var1['onPress'] = var6;
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 31;
            var7 = var14[var6];
            var7 = var10.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var14[var6];
            var6 = var10.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.iwKUSU;
            var6 = var7.bind(var8)(var6);
            var1['label'] = var6;
            var8 = _closure1_slot17;
            var7 = _closure1_slot4;
            var6 = {};
            var10 = 4;
            var6['hitSlop'] = var10;
            var10 = function onPress() {
                var3 = _closure1_slot8;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var6['onPress'] = var10;
            var11 = _closure1_slot17;
            var13 = _closure1_slot1;
            var9 = 33;
            var9 = var14[var9];
            var10 = var13.bind(var4)(var9);
            var9 = {};
            var12 = var12.closeIcon;
            var9['style'] = var12;
            var12 = 34;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var9['source'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var1['trailing'] = var6;
            var16 = var1;
            var15 = var5;
            var5 = copyDataProperties(var16, var15);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function ConsoleNUXCTA() {
        var4 = _closure1_slot17;
        var3 = _closure1_slot21;
        var2 = {};
        var7 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 35;
        var6 = var9[var1];
        var1 = undefined;
        var6 = var7.bind(var1)(var6);
        var2['image'] = var6;
        var6 = _closure1_slot22;
        var2['onPress'] = var6;
        var8 = _closure1_slot0;
        var5 = 31;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var1)(var5);
        var5 = var5.t;
        var5 = var5.O2WA4u;
        var5 = var6.bind(var7)(var5);
        var2['label'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function ConsoleLocalDetectCTA() {
        var1 = _closure1_slot20;
        var4 = undefined;
        var11 = var1.bind(var4)();
        var3 = _closure1_slot17;
        var2 = _closure1_slot21;
        var1 = {};
        var9 = _closure1_slot1;
        var12 = _closure1_slot2;
        var5 = 36;
        var5 = var12[var5];
        var5 = var9.bind(var4)(var5);
        var1['image'] = var5;
        var5 = _closure1_slot23;
        var1['onPress'] = var5;
        var15 = _closure1_slot0;
        var10 = 31;
        var5 = var12[var10];
        var5 = var15.bind(var4)(var5);
        var7 = var5.intl;
        var6 = var7.string;
        var5 = var12[var10];
        var5 = var15.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.02gscH;
        var5 = var6.bind(var7)(var5);
        var1['label'] = var5;
        var7 = _closure1_slot17;
        var5 = 37;
        var5 = var12[var5];
        var5 = var15.bind(var4)(var5);
        var6 = var5.PressableOpacity;
        var5 = {};
        var13 = 'button';
        var5['accessibilityRole'] = var13;
        var13 = var12[var10];
        var13 = var15.bind(var4)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var10 = var12[var10];
        var10 = var15.bind(var4)(var10);
        var10 = var10.t;
        var10 = var10.cpT0Cg;
        var10 = var13.bind(var14)(var10);
        var5['accessibilityLabel'] = var10;
        var10 = function onPress() {
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 38;
            var2 = var6[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var2);
            var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
            var2 = 24;
            var2 = var6[var2];
            var2 = var5.bind(var1)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.CONSOLE_LOCAL_DETECT_CTA;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['onPress'] = var10;
        var10 = _closure1_slot17;
        var8 = 39;
        var8 = var12[var8];
        var9 = var9.bind(var4)(var8);
        var8 = {};
        var11 = var11.consoleCTAClose;
        var11 = var11.color;
        var8['color'] = var11;
        var8 = var10.bind(var4)(var9, var8);
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['trailing'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function handlePressSoundboardNotice() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 26;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var5 = var3.ComponentDispatch;
        var4 = var5.dispatch;
        var3 = _closure1_slot14;
        var3 = var3.TOGGLE_CALL_CONTROL_DRAWER;
        var3 = var4.bind(var5)(var3);
        var2 = _closure1_slot28;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function handleSoundboardNoticeClose() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 38;
        var2 = var6[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var2);
        var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
        var2 = 24;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var2 = var2.DismissibleContent;
        var2 = var2.SOUNDBOARD_MOBILE_FLOATING_CTA;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function SoundboardNotice() {
        var1 = _closure1_slot20;
        var4 = undefined;
        var11 = var1.bind(var4)();
        var3 = _closure1_slot17;
        var2 = _closure1_slot21;
        var1 = {};
        var9 = _closure1_slot1;
        var12 = _closure1_slot2;
        var5 = 40;
        var5 = var12[var5];
        var5 = var9.bind(var4)(var5);
        var1['image'] = var5;
        var5 = _closure1_slot27;
        var1['onPress'] = var5;
        var15 = _closure1_slot0;
        var10 = 31;
        var5 = var12[var10];
        var5 = var15.bind(var4)(var5);
        var7 = var5.intl;
        var6 = var7.string;
        var5 = var12[var10];
        var5 = var15.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.IJgkPT;
        var5 = var6.bind(var7)(var5);
        var1['label'] = var5;
        var7 = _closure1_slot17;
        var5 = 37;
        var5 = var12[var5];
        var5 = var15.bind(var4)(var5);
        var6 = var5.PressableOpacity;
        var5 = {};
        var13 = 'button';
        var5['accessibilityRole'] = var13;
        var13 = var12[var10];
        var13 = var15.bind(var4)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var10 = var12[var10];
        var10 = var15.bind(var4)(var10);
        var10 = var10.t;
        var10 = var10.cpT0Cg;
        var10 = var13.bind(var14)(var10);
        var5['accessibilityLabel'] = var10;
        var10 = _closure1_slot28;
        var5['onPress'] = var10;
        var10 = _closure1_slot17;
        var8 = 39;
        var8 = var12[var8];
        var9 = var9.bind(var4)(var8);
        var8 = {};
        var11 = var11.consoleCTAClose;
        var11 = var11.color;
        var8['color'] = var11;
        var8 = var10.bind(var4)(var9, var8);
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['trailing'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function ChannelCallInvite(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var _closure2_slot0 = var1;
            var1 = _closure1_slot20;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var1 = var3[var1];
            var8 = var2.bind(var4)(var1);
            var3 = var8.useStateFromStores;
            var1 = _closure1_slot11;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var4 = _closure1_slot11;
                var3 = var4.can;
                var1 = _closure1_slot15;
                var2 = var1.CREATE_INSTANT_INVITE;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var9 = var3.bind(var8)(var2, var1);
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 31;
            var2 = var10[var1];
            var2 = var8.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var10[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            if(var9) { _fun0003_ip = 137; continue _fun0003 }
 124:
            var8 = var1.WkAgPT;
            var8 = var2.bind(var3)(var8);
            _fun0003_ip = 150; continue _fun0003;
 137:
            var1 = var1.YSGk4O;
            var8 = var2.bind(var3)(var1);
 150:
            var3 = _closure1_slot17;
            var2 = _closure1_slot21;
            var1 = {};
            var9 = !var9;
            var1['disabled'] = var9;
            var1['label'] = var8;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 41;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var1['image'] = var7;
            var6 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 42;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.showInstantInviteActionSheet;
                var2 = _closure2_slot0;
                var1 = 'Voice Channel';
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1['onPress'] = var6;
            var5 = var5.channelCallInviteFloatingCTA;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var14.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var12 = 1;
    var9 = var8[var12];
    var6 = native4;
    var6 = var6.bind(var1)(var9);
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.Pressable;
    var _closure1_slot4 = var9;
    var6 = var6.View;
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.setShowConsoleVoiceSparkles;
    var _closure1_slot7 = var9;
    var9 = var6.setVoiceUpsellDismissed;
    var _closure1_slot8 = var9;
    var6 = var6.useConsoleVoiceUpsellStore;
    var _closure1_slot9 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.isGuildScheduledEventActive;
    var _closure1_slot10 = var6;
    var13 = 6;
    var6 = var8[var13];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot11 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot12 = var6;
    var6 = 8;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.setFocus;
    var _closure1_slot13 = var6;
    var6 = 9;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.ComponentActions;
    var _closure1_slot14 = var9;
    var9 = var6.Permissions;
    var _closure1_slot15 = var9;
    var6 = var6.PlatformTypes;
    var _closure1_slot16 = var6;
    var6 = 10;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.jsx;
    var _closure1_slot17 = var9;
    var9 = var6.jsxs;
    var _closure1_slot18 = var9;
    var6 = var6.Fragment;
    var _closure1_slot19 = var6;
    var6 = 11;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createStyles;
    var6 = {};
    var11 = {};
    var11['paddingTop'] = var13;
    var6['superHeader'] = var11;
    var11 = {'width': 20, 'height': 20};
    var6['closeIcon'] = var11;
    var11 = {'width': 24, 'height': 24, 'margin': 6};
    var13 = 12;
    var13 = var8[var13];
    var13 = var7.bind(var1)(var13);
    var13 = var13.DARK_WHITE_500_LIGHT_PLAYSTATION;
    var11['tintColor'] = var13;
    var6['playstationUpsell'] = var11;
    var11 = {};
    var13 = 13;
    var13 = var8[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_NORMAL;
    var11['color'] = var13;
    var6['consoleCTAClose'] = var11;
    var11 = {};
    var11['flex'] = var12;
    var6['channelCallInviteFloatingCTA'] = var11;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot20 = var6;
    var6 = 43;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/video_calls/native/components/ChannelCallFloatingCTA.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function _default(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var1 = var2.channel;
            var _closure2_slot0 = var1;
            var2 = var2.shouldShowConnectingScreen;
            var _closure2_slot1 = var2;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 16;
            var7 = var6[var2];
            var11 = var3.bind(var4)(var7);
            var10 = var11.useStateFromStores;
            var7 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getParticipants;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var2 = var1.length;
                var1 = 1;
                var1 = var1 === var2;
                return var1;
            };
            var7 = var10.bind(var11)(var9, var7);
            var _closure2_slot2 = var7;
            var2 = var6[var2];
            var10 = var3.bind(var4)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot12;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getChannelId;
                var2 = var1.bind(var2)();
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var9.bind(var10)(var7, var2);
            var _closure2_slot3 = var2;
            var2 = 17;
            var2 = var6[var2];
            var9 = var3.bind(var4)(var2);
            var7 = var9.useImminentUpcomingGuildEvents;
            var2 = var1.id;
            var9 = var7.bind(var9)(var2);
            var7 = _closure1_slot3;
            var2 = 1;
            var7 = var7.bind(var4)(var9, var2);
            var2 = 0;
            var7 = var7[var2];
            var _closure2_slot4 = var7;
            var2 = 18;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useManageResourcePermissions;
            var2 = var2.bind(var3)(var1);
            var2 = var2.canManageGuildEvent;
            var2 = var2.bind(var4)(var7);
            var _closure2_slot5 = var2;
            var2 = null;
            var3 = var2 != var7;
            if(!var3) { _fun0004_ip = 249; continue _fun0004 }
 240:
            var6 = _closure1_slot10;
            var3 = var6.bind(var4)(var7);
 249:
            _closure2_slot6 = var3;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 19;
            var3 = var9[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.bind(var4)();
            _closure2_slot7 = var3;
            var3 = _closure1_slot9;
            var3 = var3.bind(var4)();
            var3 = var3.voiceUpsellDismissed;
            _closure2_slot8 = var3;
            var6 = _closure1_slot0;
            var3 = 20;
            var3 = var9[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.getNextRecurrenceIdInEvent;
            var3 = var3.bind(var6)(var7);
            var6 = var2 != var3;
            var2 = undefined;
            if(!var6) { _fun0004_ip = 338; continue _fun0004 }
 335:
            var2 = var3;
 338:
            _closure2_slot9 = var2;
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 21;
            var2 = var10[var2];
            var2 = var6.bind(var4)(var2);
            var1 = var1.id;
            var9 = var2.bind(var4)(var1);
            var3 = _closure1_slot17;
            var2 = _closure1_slot0;
            var1 = 22;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.DisableCustomTheme;
            var1 = {};
            var7 = _closure1_slot17;
            var5 = 23;
            var5 = var10[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['contentTypes'] = var9;
            var8 = function children(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.visibleContent;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 24;
                    var2 = var2[var6];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.SOUNDBOARD_MOBILE_FLOATING_CTA;
                    if(!(var2 !== var3)) { _fun0005_ip = 369; continue _fun0005 }
 53:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.CONSOLE_LOCAL_DETECT_CTA;
                    if(!(var2 !== var3)) { _fun0005_ip = 351; continue _fun0005 }
 89:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.DONUT_MOBILE_NUX;
                    if(!(var2 !== var3)) { _fun0005_ip = 333; continue _fun0005 }
 125:
                    var2 = _closure2_slot7;
                    var7 = null;
                    if(!(var7 != var2)) { _fun0005_ip = 175; continue _fun0005 }
 138:
                    var2 = _closure2_slot8;
                    if(var2) { _fun0005_ip = 175; continue _fun0005 }
 145:
                    var5 = _closure1_slot17;
                    var3 = _closure1_slot24;
                    var2 = {};
                    var6 = _closure2_slot7;
                    var2['connectedAccount'] = var6;
                    var2 = var5.bind(var4)(var3, var2);
                    _fun0005_ip = 331; continue _fun0005;
 175:
                    var3 = _closure2_slot1;
                    if(var3) { _fun0005_ip = 264; continue _fun0005 }
 182:
                    var3 = _closure2_slot4;
                    if(!(var7 != var3)) { _fun0005_ip = 264; continue _fun0005 }
 190:
                    var3 = _closure2_slot5;
                    if(!var3) { _fun0005_ip = 264; continue _fun0005 }
 197:
                    var3 = _closure2_slot6;
                    if(var3) { _fun0005_ip = 264; continue _fun0005 }
 204:
                    var6 = _closure1_slot17;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 25;
                    var3 = var8[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = {};
                    var8 = _closure2_slot4;
                    var3['guildScheduledEvent'] = var8;
                    var8 = _closure2_slot0;
                    var3['channel'] = var8;
                    var8 = _closure2_slot9;
                    var3['recurrenceId'] = var8;
                    var3 = var6.bind(var4)(var5, var3);
                    _fun0005_ip = 328; continue _fun0005;
 264:
                    var6 = _closure2_slot2;
                    var5 = null;
                    if(!var6) { _fun0005_ip = 325; continue _fun0005 }
 273:
                    var8 = _closure2_slot0;
                    var6 = var8.isPrivate;
                    var6 = var6.bind(var8)();
                    var5 = null;
                    if(var6) { _fun0005_ip = 325; continue _fun0005 }
 292:
                    var6 = _closure2_slot3;
                    var5 = null;
                    if(!var6) { _fun0005_ip = 325; continue _fun0005 }
 301:
                    var8 = _closure1_slot17;
                    var7 = _closure1_slot30;
                    var6 = {};
                    var9 = _closure2_slot0;
                    var6['channel'] = var9;
                    var5 = var8.bind(var4)(var7, var6);
 325:
                    var3 = var5;
 328:
                    var2 = var3;
 331:
                    return var2;
 333:
                    var5 = _closure1_slot17;
                    var3 = _closure1_slot25;
                    var2 = {};
                    var2 = var5.bind(var4)(var3, var2);
                    return var2;
 351:
                    var5 = _closure1_slot17;
                    var3 = _closure1_slot26;
                    var2 = {};
                    var2 = var5.bind(var4)(var3, var2);
                    return var2;
 369:
                    var3 = _closure1_slot17;
                    var2 = _closure1_slot29;
                    var1 = {};
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['openDrawerForConsoleVoice'] = var4;
    var3['openConsoleDetectActionSheet'] = var2;
    return var1;
})();
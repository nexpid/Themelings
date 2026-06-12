// app/modules/stage_channels/native/components/StageActionBarButtons.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var13 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var9;
    var5 = function AnimatedPrompt(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.show;
            var _closure2_slot0 = var13;
            var5 = var1.children;
            var7 = var1.style;
            var1 = _closure1_slot14;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var15 = _closure1_slot0;
            var10 = _closure1_slot3;
            var1 = 15;
            var1 = var10[var1];
            var11 = var15.bind(var4)(var1);
            var9 = var11.useStateFromStores;
            var1 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var1 = _closure1_slot7;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var9 = var9.bind(var11)(var8, var1);
            var1 = 53;
            var8 = var10[var1];
            var11 = var15.bind(var4)(var8);
            var8 = var11.useAnimatedStyle;
            var3 = function l() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var7 = 54;
                    var3 = var3[var7];
                    var6 = undefined;
                    var9 = var4.bind(var6)(var3);
                    var8 = var9.withSpring;
                    var4 = _closure2_slot0;
                    var5 = 20;
                    if(!var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = 0;
case 2:
                    var4 = _closure1_slot17;
                    var4 = var8.bind(var9)(var5, var4);
                    var1['marginTop'] = var4;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var7];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.withSpring;
                    var6 = _closure2_slot0;
                    var3 = 0;
                    if(!var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = 1;
case 4:
                    var2 = _closure1_slot17;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var14 = 54;
            var14 = var10[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.withSpring;
            var12['withSpring'] = var14;
            var12['show'] = var13;
            var13 = _closure1_slot17;
            var12['actionBarAnimationConfig'] = var13;
            var3['__closure'] = var12;
            var12 = 5255980384921.0;
            var3['__workletHash'] = var12;
            var12 = _closure1_slot18;
            var3['__initData'] = var12;
            var8 = var8.bind(var11)(var3);
            var3 = _closure1_slot12;
            var2 = _closure1_slot1;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var10 = var6.actionBarCTAContainer;
            var6 = new Array(3);
            var6[0] = var10;
            var6[1] = var7;
            var7 = undefined;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var8;
case 6:
            var6[2] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var5;
    var4 = function StartStagePrompt(arg1) {
        var1 = arg1;
        var2 = var1.channel;
        var _closure2_slot0 = var2;
        var5 = var1.isLive;
        var _closure2_slot1 = var5;
        var6 = var1.style;
        var1 = _closure1_slot14;
        var4 = undefined;
        var7 = var1.bind(var4)();
        var3 = _closure1_slot12;
        var8 = _closure1_slot0;
        var9 = _closure1_slot3;
        var1 = 56;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.FormCTA;
        var1 = {};
        var11 = function onPress() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 25;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.openStageChannelSettings;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var1['onPress'] = var11;
        var11 = _closure1_slot1;
        var10 = 57;
        var10 = var9[var10];
        var10 = var11.bind(var4)(var10);
        var1['iconSource'] = var10;
        var10 = var7.iconStyle;
        var1['iconStyle'] = var10;
        var7 = var7.iconContainerStyle;
        var1['iconContainerStyle'] = var7;
        var1['style'] = var6;
        var1['completed'] = var5;
        var5 = 12;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6.OYbHfv;
        var6 = var7.bind(var10)(var6);
        var1['title'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.yXwLMQ;
        var5 = var6.bind(var7)(var5);
        var1['subtitle'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var9[var1];
    var1 = undefined;
    var6 = var13.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var6 = var6.View;
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var9[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var15 = 4;
    var6 = var9[var15];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var9[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot9 = var6;
    var6 = 6;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var6 = var6.REQUEST_TO_SPEAK_SHEET_KEY;
    var _closure1_slot10 = var6;
    var6 = 7;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var6 = var6.NOOP;
    var _closure1_slot11 = var6;
    var6 = 8;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var7 = var6.jsx;
    var _closure1_slot12 = var7;
    var6 = var6.jsxs;
    var _closure1_slot13 = var6;
    var6 = 9;
    var7 = var9[var6];
    var11 = var8.bind(var1)(var7);
    var10 = var11.createStyles;
    var7 = {};
    var12 = {};
    var14 = 'relative';
    var12['position'] = var14;
    var7['actionBarCTAContainer'] = var12;
    var14 = {};
    var12 = 10;
    var16 = var9[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.WHITE;
    var14['tintColor'] = var16;
    var7['imageStyle'] = var14;
    var14 = {'tintColor': null, 'width': 20, 'height': 20};
    var16 = var9[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.WHITE;
    var14['tintColor'] = var16;
    var7['iconStyle'] = var14;
    var14 = {};
    var16 = var9[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.GREEN_360;
    var14['backgroundColor'] = var16;
    var16 = var9[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var14['borderRadius'] = var16;
    var14['padding'] = var15;
    var7['iconContainerStyle'] = var14;
    var14 = 'center';
    var15 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'padding': 16};
    var7['continueContainer'] = var15;
    var15 = {'color': null, 'fontSize': 14, 'lineHeight': 18};
    var16 = var9[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.BLUE_345;
    var15['color'] = var16;
    var7['continueText'] = var15;
    var15 = {};
    var16 = var9[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.BLUE_345;
    var15['tintColor'] = var16;
    var7['continueIcon'] = var15;
    var7 = var10.bind(var11)(var7);
    var _closure1_slot14 = var7;
    var6 = var9[var6];
    var10 = var8.bind(var1)(var6);
    var7 = var10.createStyles;
    var6 = {};
    var11 = {};
    var15 = var9[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_12;
    var11['paddingVertical'] = var15;
    var15 = var9[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_24;
    var11['gap'] = var15;
    var6['container'] = var11;
    var11 = {};
    var11['alignItems'] = var14;
    var6['header'] = var11;
    var11 = {};
    var15 = var9[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_8;
    var11['gap'] = var15;
    var6['content'] = var11;
    var11 = {};
    var11['textAlign'] = var14;
    var6['title'] = var11;
    var11 = {};
    var11['textAlign'] = var14;
    var6['body'] = var11;
    var11 = {};
    var12 = var9[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_12;
    var11['gap'] = var12;
    var6['footer'] = var11;
    var6 = var7.bind(var10)(var6);
    var _closure1_slot15 = var6;
    var6 = function AgeVerificationSpeakerActionSheet(arg1) {
        var1 = arg1;
        var1 = var1.onClose;
        var _closure2_slot0 = var1;
        var1 = _closure1_slot15;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var2 = _closure1_slot1;
        var18 = _closure1_slot3;
        var1 = 35;
        var1 = var18[var1];
        var1 = var2.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var6 = var1.bottom;
        var15 = function handleDismiss() {
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var2 = 30;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.hideActionSheet;
            var2 = var2.bind(var3)();
            return var1;
        };
        var3 = _closure1_slot12;
        var17 = _closure1_slot0;
        var1 = 36;
        var1 = var18[var1];
        var1 = var17.bind(var4)(var1);
        var2 = var1.ActionSheet;
        var1 = {};
        var5 = true;
        var1['startExpanded'] = var5;
        var1['onDismiss'] = var15;
        var5 = {};
        var5['paddingBottom'] = var6;
        var1['contentStyles'] = var5;
        var6 = _closure1_slot12;
        var7 = _closure1_slot6;
        var5 = {};
        var8 = var10.header;
        var5['style'] = var8;
        var11 = _closure1_slot12;
        var8 = 37;
        var8 = var18[var8];
        var8 = var17.bind(var4)(var8);
        var9 = var8.TrafficConeSpotIllustration;
        var8 = {'width': 120, 'height': 120};
        var8 = var11.bind(var4)(var9, var8);
        var5['children'] = var8;
        var5 = var6.bind(var4)(var7, var5);
        var1['header'] = var5;
        var6 = _closure1_slot13;
        var5 = {};
        var8 = var10.container;
        var5['style'] = var8;
        var8 = {};
        var9 = var10.content;
        var8['style'] = var9;
        var16 = _closure1_slot12;
        var11 = 38;
        var9 = var18[var11];
        var9 = var17.bind(var4)(var9);
        var13 = var9.Text;
        var9 = {'variant': 'heading-lg/bold', 'color': 'mobile-text-heading-primary'};
        var14 = var10.title;
        var9['style'] = var14;
        var14 = 12;
        var19 = var18[var14];
        var19 = var17.bind(var4)(var19);
        var22 = var19.intl;
        var21 = var22.string;
        var19 = var18[var14];
        var19 = var17.bind(var4)(var19);
        var19 = var19.t;
        var19 = var19.zvubnM;
        var19 = var21.bind(var22)(var19);
        var9['children'] = var19;
        var13 = var16.bind(var4)(var13, var9);
        var9 = new Array(2);
        var9[0] = var13;
        var16 = _closure1_slot12;
        var11 = var18[var11];
        var11 = var17.bind(var4)(var11);
        var13 = var11.Text;
        var11 = {'variant': 'text-md/normal', 'color': 'text-default'};
        var19 = var10.body;
        var11['style'] = var19;
        var19 = var18[var14];
        var19 = var17.bind(var4)(var19);
        var22 = var19.intl;
        var21 = var22.string;
        var19 = var18[var14];
        var19 = var17.bind(var4)(var19);
        var19 = var19.t;
        var19 = var19["/wx+J2"];
        var19 = var21.bind(var22)(var19);
        var11['children'] = var19;
        var11 = var16.bind(var4)(var13, var11);
        var9[1] = var11;
        var8['children'] = var9;
        var9 = var6.bind(var4)(var7, var8);
        var8 = new Array(2);
        var8[0] = var9;
        var9 = {};
        var10 = var10.footer;
        var9['style'] = var10;
        var19 = _closure1_slot12;
        var11 = 39;
        var10 = var18[var11];
        var10 = var17.bind(var4)(var10);
        var13 = var10.Button;
        var10 = {};
        var16 = 'lg';
        var10['size'] = var16;
        var20 = function onPress() {
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 40;
            var2 = var4[var1];
            var1 = undefined;
            var6 = var3.bind(var1)(var2);
            var5 = var6.showAgeVerificationGetStartedModal;
            var2 = {};
            var8 = _closure1_slot0;
            var7 = 41;
            var7 = var4[var7];
            var7 = var8.bind(var1)(var7);
            var7 = var7.AgeVerificationModalEntryPoint;
            var7 = var7.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT;
            var2['entryPoint'] = var7;
            var2 = var5.bind(var6)(var2);
            var2 = _closure2_slot0;
            var2 = var2.bind(var1)();
            var2 = 30;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.hideActionSheet;
            var2 = var2.bind(var3)();
            return var1;
        };
        var10['onPress'] = var20;
        var20 = var18[var14];
        var20 = var17.bind(var4)(var20);
        var22 = var20.intl;
        var21 = var22.string;
        var20 = var18[var14];
        var20 = var17.bind(var4)(var20);
        var20 = var20.t;
        var20 = var20.KXVgjt;
        var20 = var21.bind(var22)(var20);
        var10['text'] = var20;
        var13 = var19.bind(var4)(var13, var10);
        var10 = new Array(2);
        var10[0] = var13;
        var13 = _closure1_slot12;
        var11 = var18[var11];
        var11 = var17.bind(var4)(var11);
        var12 = var11.Button;
        var11 = {};
        var11['size'] = var16;
        var11['onPress'] = var15;
        var15 = var18[var14];
        var15 = var17.bind(var4)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var14 = var18[var14];
        var14 = var17.bind(var4)(var14);
        var14 = var14.t;
        var14 = var14.WAI6xu;
        var14 = var15.bind(var16)(var14);
        var11['text'] = var14;
        var14 = 'secondary';
        var11['variant'] = var14;
        var11 = var13.bind(var4)(var12, var11);
        var10[1] = var11;
        var9['children'] = var10;
        var9 = var6.bind(var4)(var7, var9);
        var8[1] = var9;
        var5['children'] = var8;
        var5 = var6.bind(var4)(var7, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot16 = var6;
    var7 = {'mass': 1, 'stiffness': 100, 'damping': 30, 'overshootClamping': false, 'restSpeedThreshold': 0.01, 'restDisplacementThreshold': 0.01};
    var _closure1_slot17 = var7;
    var7 = {};
    var10 = 'function StageActionBarButtonsTsx1(){const{withSpring,show,actionBarAnimationConfig}=this.__closure;return{marginTop:withSpring(show?0:20,actionBarAnimationConfig),opacity:withSpring(show?1:0,actionBarAnimationConfig)};}';
    var7['code'] = var10;
    var _closure1_slot18 = var7;
    var7 = 62;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/stage_channels/native/components/StageActionBarButtons.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function(arg1) {
        var1 = arg1;
        var2 = var1.channel;
        var _closure2_slot0 = var2;
        var5 = var1.isSmallSize;
        var4 = _closure1_slot12;
        var2 = _closure1_slot2;
        var9 = _closure1_slot3;
        var1 = 11;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.ActionButton;
        var1 = {};
        var12 = _closure1_slot0;
        var8 = 12;
        var10 = var9[var8];
        var10 = var12.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var8 = var9[var8];
        var8 = var12.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.ezLpY6;
        var8 = var10.bind(var11)(var8);
        var1['accessibilityLabel'] = var8;
        var8 = _closure1_slot1;
        var7 = 13;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var1['source'] = var7;
        var6 = function onPress() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.audienceAckRequestToSpeak;
            var3 = _closure2_slot0;
            var2 = true;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1['onPress'] = var6;
        var1['isSmallSize'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['MoveToAudienceButton'] = var7;
    var7 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.channel;
            var6 = var2.isSmallSize;
            var2 = _closure1_slot14;
            var5 = undefined;
            var8 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 15;
            var2 = var4[var2];
            var12 = var3.bind(var5)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.isMuted;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var11.bind(var12)(var9, var2);
            var _closure2_slot0 = var9;
            var2 = 16;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useShowStageMusicMuteButton;
            var1 = var1.id;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(!var2) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var4 = _closure1_slot12;
            var3 = _closure1_slot2;
            var11 = _closure1_slot3;
            var2 = 11;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.ActionButton;
            var2 = {};
            var12 = _closure1_slot0;
            var15 = _closure1_slot3;
            var11 = 12;
            var13 = var15[var11];
            var13 = var12.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var11 = var15[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.t;
            if(var9) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var11 = var12.zqxfrf;
            var11 = var13.bind(var14)(var11);
            _fun0004_ip = 14; continue _fun0004;
case 12:
            var12 = var12.ScHlfl;
            var11 = var13.bind(var14)(var12);
case 14:
            var2['accessibilityLabel'] = var11;
            var12 = _closure1_slot1;
            var14 = _closure1_slot3;
            if(var9) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var11 = 18;
            var11 = var14[var11];
            _fun0004_ip = 17; continue _fun0004;
case 15:
            var13 = 17;
            var11 = var14[var13];
case 17:
            var11 = var12.bind(var5)(var11);
            var2['source'] = var11;
            var11 = _closure1_slot0;
            var12 = _closure1_slot3;
            if(var9) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var9 = 20;
            var9 = var12[var9];
            var9 = var11.bind(var5)(var9);
            var9 = var9.MusicIcon;
            _fun0004_ip = 20; continue _fun0004;
case 18:
            var10 = 19;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var9 = var10.MusicSlashIcon;
case 20:
            var2['IconComponent'] = var9;
            var8 = var8.imageStyle;
            var2['imageStyle'] = var8;
            var7 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.updateStageMusicMuted;
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['onPress'] = var7;
            var2['isSmallSize'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var3['MusicMuteButton'] = var7;
    var7 = function(arg1) {
        var1 = arg1;
        var2 = var1.channel;
        var _closure2_slot0 = var2;
        var5 = var1.isSmallSize;
        var4 = _closure1_slot12;
        var2 = _closure1_slot2;
        var9 = _closure1_slot3;
        var1 = 11;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.PrimaryActionButton;
        var1 = {};
        var8 = _closure1_slot0;
        var10 = 12;
        var11 = var9[var10];
        var11 = var8.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var9[var10];
        var10 = var8.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.SMKyih;
        var10 = var11.bind(var12)(var10);
        var1['accessibilityLabel'] = var10;
        var10 = _closure1_slot1;
        var7 = 22;
        var7 = var9[var7];
        var7 = var10.bind(var3)(var7);
        var1['source'] = var7;
        var7 = 23;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.DoorExitIcon;
        var1['IconComponent'] = var7;
        var6 = function onPress() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = _closure2_slot0;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                if(var3) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var3 = 26;
                var3 = var5[var3];
                var7 = var4.bind(var1)(var3);
                var6 = var7.handleDisconnect;
                var3 = _closure2_slot0;
                var3 = var6.bind(var7)(var3);
                _fun0005_ip = 23; continue _fun0005;
case 21:
                var3 = 25;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.openEndStageModal;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
case 23:
                return var1;
            }
        };
        var1['onPress'] = var6;
        var1['isSmallSize'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['DisconnectStageButton'] = var7;
    var7 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = var3.channel;
            var _closure2_slot0 = var2;
            var6 = var3.isSmallSize;
            var4 = _closure1_slot1;
            var10 = _closure1_slot3;
            var3 = 27;
            var3 = var10[var3];
            var5 = undefined;
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var3 = var3.analyticsLocations;
            var _closure2_slot1 = var3;
            var8 = _closure1_slot0;
            var3 = 28;
            var3 = var10[var3];
            var7 = var8.bind(var5)(var3);
            var4 = var7.useStageParticipantsCount;
            var3 = var2.id;
            var2 = 29;
            var2 = var10[var2];
            var2 = var8.bind(var5)(var2);
            var2 = var2.StageChannelParticipantNamedIndex;
            var2 = var2.REQUESTED_TO_SPEAK_ONLY;
            var7 = var4.bind(var7)(var3, var2);
            var8 = function handleOpenAudienceList() {
                var5 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 30;
                var4 = var3[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var7 = _closure1_slot0;
                var4 = 32;
                var4 = var3[var4];
                var7 = var7.bind(var1)(var4);
                var4 = 31;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var7.bind(var1)(var4, var3);
                var3 = _closure1_slot10;
                var2 = {};
                var8 = _closure2_slot0;
                var8 = var8.id;
                var2['channelId'] = var8;
                var7 = _closure2_slot1;
                var2['analyticsLocations'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var1 = 0;
            if(!(!(var7 > var1))) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            var3 = _closure1_slot12;
            var2 = _closure1_slot2;
            var11 = _closure1_slot3;
            var1 = 11;
            var1 = var11[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.ActionButton;
            var1 = {};
            var10 = _closure1_slot0;
            var4 = 12;
            var12 = var11[var4];
            var12 = var10.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var4 = var11[var4];
            var4 = var10.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.KJnyvh;
            var4 = var12.bind(var13)(var4);
            var1['accessibilityLabel'] = var4;
            var13 = _closure1_slot1;
            var4 = 33;
            var4 = var11[var4];
            var4 = var13.bind(var5)(var4);
            var1['source'] = var4;
            var4 = {};
            var12 = 10;
            var12 = var11[var12];
            var12 = var13.bind(var5)(var12);
            var12 = var12.unsafe_rawColors;
            var12 = var12.WHITE;
            var4['tintColor'] = var12;
            var1['imageStyle'] = var4;
            var4 = 34;
            var4 = var11[var4];
            var4 = var10.bind(var5)(var4);
            var4 = var4.HandRequestSpeakListIcon;
            var1['IconComponent'] = var4;
            var1['onPress'] = var8;
            var1['isSmallSize'] = var6;
            var1 = var3.bind(var5)(var2, var1);
            _fun0006_ip = 26; continue _fun0006;
case 24:
            var4 = _closure1_slot12;
            var3 = _closure1_slot2;
            var11 = _closure1_slot3;
            var2 = 11;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.NotifiedActionButton;
            var2 = {};
            var10 = _closure1_slot0;
            var12 = 12;
            var13 = var11[var12];
            var13 = var10.bind(var5)(var13);
            var15 = var13.intl;
            var14 = var15.formatToPlainString;
            var12 = var11[var12];
            var12 = var10.bind(var5)(var12);
            var12 = var12.t;
            var13 = var12.OhK58v;
            var12 = {};
            var12['count'] = var7;
            var12 = var14.bind(var15)(var13, var12);
            var2['accessibilityLabel'] = var12;
            var13 = _closure1_slot1;
            var9 = 33;
            var9 = var11[var9];
            var9 = var13.bind(var5)(var9);
            var2['source'] = var9;
            var9 = {};
            var12 = 10;
            var12 = var11[var12];
            var12 = var13.bind(var5)(var12);
            var12 = var12.unsafe_rawColors;
            var12 = var12.WHITE;
            var9['tintColor'] = var12;
            var2['imageStyle'] = var9;
            var9 = 34;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.HandRequestSpeakListIcon;
            var2['IconComponent'] = var9;
            var2['onPress'] = var8;
            var2['notifications'] = var7;
            var2['isSmallSize'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 26:
            return var1;
        }
    };
    var3['RequestToSpeakListButton'] = var7;
    var3['AgeVerificationSpeakerActionSheet'] = var6;
    var6 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channel;
            var5 = var1.isSmallSize;
            var2 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 42;
            var1 = var6[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)(var3);
            var13 = _closure1_slot4;
            var12 = 2;
            var1 = var13.bind(var4)(var1, var12);
            var11 = 0;
            var10 = var1[var11];
            var9 = 1;
            var1 = var1[var9];
            var _closure2_slot0 = var1;
            var2 = _closure1_slot0;
            var1 = 43;
            var1 = var6[var1];
            var16 = var2.bind(var4)(var1);
            var15 = var16.useLocalStorageState;
            var14 = 'age-verification-stage-popover-dismissed';
            var1 = false;
            var1 = var15.bind(var16)(var14, var1);
            var1 = var13.bind(var4)(var1, var12);
            var14 = var1[var11];
            var _closure2_slot1 = var14;
            var1 = var1[var9];
            var _closure2_slot2 = var1;
            var11 = 44;
            var9 = var6[var11];
            var13 = var2.bind(var4)(var9);
            var12 = var13.useShouldAgeVerifyToSpeakForCurrentUser;
            var9 = var3.id;
            var9 = var12.bind(var13)(var9);
            var _closure2_slot3 = var9;
            var11 = var6[var11];
            var13 = var2.bind(var4)(var11);
            var12 = var13.useShouldShowAgeVerificationPopover;
            var11 = var3.id;
            var15 = var12.bind(var13)(var11);
            var _closure2_slot4 = var15;
            var13 = _closure1_slot5;
            var12 = var13.useEffect;
            var11 = new Array(3);
            var11[0] = var15;
            var11[1] = var14;
            var11[2] = var1;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot4;
                    if(!var1) { _fun0008_ip = 27; continue _fun0008 }
case 9:
                    var2 = _closure2_slot1;
                    var1 = !var2;
case 27:
                    if(!var1) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 30;
                    var1 = var3[var1];
                    var7 = undefined;
                    var3 = var2.bind(var7)(var1);
                    var2 = var3.showActionSheet;
                    var1 = {};
                    var6 = _closure1_slot12;
                    var5 = _closure1_slot16;
                    var4 = {};
                    var8 = function onClose() {
                        var3 = _closure2_slot2;
                        var2 = undefined;
                        var1 = true;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var4['onClose'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var1['content'] = var4;
                    var4 = 'AgeVerificationSpeakerActionSheet';
                    var1['key'] = var4;
                    var1 = var2.bind(var3)(var1);
case 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var12.bind(var13)(var1, var11);
            var1 = 45;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useCanRaiseHand;
            var1 = var1.bind(var2)(var3);
            var6 = !var1;
            if(!var6) { _fun0007_ip = 30; continue _fun0007 }
case 31:
            var6 = !var10;
case 30:
            var3 = _closure1_slot12;
            var2 = _closure1_slot2;
            var11 = _closure1_slot3;
            var1 = 11;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ToggledActionButton;
            var1 = {};
            var12 = _closure1_slot0;
            var15 = _closure1_slot3;
            var11 = 12;
            var13 = var15[var11];
            var13 = var12.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var11 = var15[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.t;
            if(var10) { _fun0007_ip = 32; continue _fun0007 }
case 33:
            var11 = var12.hLbG5N;
            var11 = var13.bind(var14)(var11);
            _fun0007_ip = 34; continue _fun0007;
case 32:
            var12 = var12.GCimTk;
            var11 = var13.bind(var14)(var12);
case 34:
            var1['accessibilityLabel'] = var11;
            var1['isActive'] = var10;
            var11 = _closure1_slot1;
            var12 = _closure1_slot3;
            var10 = 46;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var1['source'] = var10;
            var11 = _closure1_slot0;
            var12 = _closure1_slot3;
            if(var9) { _fun0007_ip = 35; continue _fun0007 }
case 36:
            var9 = 48;
            var9 = var12[var9];
            var9 = var11.bind(var4)(var9);
            var9 = var9.HandRequestSpeakIcon;
            _fun0007_ip = 37; continue _fun0007;
case 35:
            var10 = 47;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var9 = var10.HandRequestDenyIcon;
case 37:
            var1['IconComponent'] = var9;
            if(var6) { _fun0007_ip = 38; continue _fun0007 }
case 39:
            var7 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0009_ip = 40; continue _fun0009 }
case 9:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    _fun0009_ip = 41; continue _fun0009;
case 40:
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var1 = 40;
                    var1 = var7[var1];
                    var6 = undefined;
                    var3 = var2.bind(var6)(var1);
                    var2 = var3.showAgeVerificationGetStartedModal;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = 41;
                    var4 = var7[var4];
                    var4 = var5.bind(var6)(var4);
                    var4 = var4.AgeVerificationModalEntryPoint;
                    var4 = var4.STAGE_CHANNEL_RAISE_HAND;
                    var1['entryPoint'] = var4;
                    var1 = var2.bind(var3)(var1);
case 41:
                    var1 = undefined;
                    return var1;
                }
            };
            _fun0007_ip = 42; continue _fun0007;
case 38:
            var7 = _closure1_slot11;
case 42:
            var1['onPress'] = var7;
            var1['appearsDisabled'] = var6;
            var1['isSmallSize'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['RequestToSpeakButton'] = var6;
    var6 = function ChatButton(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var8 = var2.channel;
            var _closure2_slot0 = var8;
            var6 = var2.isSmallSize;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 15;
            var2 = var4[var2];
            var12 = var3.bind(var5)(var2);
            var11 = var12.useStateFromStoresObject;
            var2 = _closure1_slot8;
            var10 = new Array(1);
            var10[0] = var2;
            var2 = var8.id;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var1 = {};
                var4 = _closure1_slot8;
                var5 = var4.getUnreadCount;
                var2 = _closure2_slot0;
                var3 = var2.id;
                var3 = var5.bind(var4)(var3);
                var1['unreadCount'] = var3;
                var3 = var4.getMentionCount;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['mentionCount'] = var2;
                return var1;
            };
            var2 = var11.bind(var12)(var10, var2, var7);
            var12 = var2.unreadCount;
            var11 = var2.mentionCount;
            var2 = 49;
            var2 = var4[var2];
            var7 = var3.bind(var5)(var2);
            var2 = var7.useIsVoiceChannelLocked;
            var7 = var2.bind(var7)(var8);
            var _closure2_slot1 = var7;
            var2 = 50;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useVoiceChatNavigationContext;
            var3 = var2.bind(var3)();
            var2 = null;
            var4 = var2 == var3;
            var2 = undefined;
            if(var4) { _fun0010_ip = 43; continue _fun0010 }
case 44:
            var2 = var3.openChat;
case 43:
            _closure2_slot2 = var2;
            var8 = function onPress() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0011_ip = 29; continue _fun0011 }
case 9:
                    var4 = _closure2_slot2;
                    var3 = null;
                    var2 = var3 == var4;
case 29:
                    if(var2) { _fun0011_ip = 45; continue _fun0011 }
case 46:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = 0;
            if(!(!(var11 > var10))) { _fun0010_ip = 47; continue _fun0010 }
case 48:
            if(!(!(var12 > var10))) { _fun0010_ip = 47; continue _fun0010 }
case 49:
            var3 = _closure1_slot12;
            var2 = _closure1_slot2;
            var14 = _closure1_slot3;
            var1 = 11;
            var1 = var14[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.ActionButton;
            var1 = {};
            var4 = {};
            var13 = _closure1_slot1;
            var15 = 10;
            var15 = var14[var15];
            var15 = var13.bind(var5)(var15);
            var15 = var15.unsafe_rawColors;
            var15 = var15.WHITE;
            var4['tintColor'] = var15;
            var1['imageStyle'] = var4;
            var15 = _closure1_slot0;
            var4 = 12;
            var16 = var14[var4];
            var16 = var15.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var4 = var14[var4];
            var4 = var15.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.ZXxLQg;
            var4 = var16.bind(var17)(var4);
            var1['accessibilityLabel'] = var4;
            var4 = 51;
            var4 = var14[var4];
            var4 = var15.bind(var5)(var4);
            var4 = var4.ChatIcon;
            var1['IconComponent'] = var4;
            var4 = 52;
            var4 = var14[var4];
            var4 = var13.bind(var5)(var4);
            var1['source'] = var4;
            var1['onPress'] = var8;
            var1['appearsDisabled'] = var7;
            var1['isSmallSize'] = var6;
            var1 = var3.bind(var5)(var2, var1);
            _fun0010_ip = 50; continue _fun0010;
case 47:
            var4 = _closure1_slot12;
            var3 = _closure1_slot2;
            var13 = _closure1_slot3;
            var2 = 11;
            var2 = var13[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.NotifiedActionButton;
            var2 = {};
            if(!(var11 > var10)) { _fun0010_ip = 51; continue _fun0010 }
case 52:
            var12 = var11;
case 51:
            var2['notifications'] = var12;
            var10 = var11 > var10;
            var2['isMentioned'] = var10;
            var12 = {};
            var10 = _closure1_slot1;
            var11 = _closure1_slot3;
            var13 = 10;
            var13 = var11[var13];
            var13 = var10.bind(var5)(var13);
            var13 = var13.unsafe_rawColors;
            var13 = var13.WHITE;
            var12['tintColor'] = var13;
            var2['imageStyle'] = var12;
            var12 = _closure1_slot0;
            var9 = 12;
            var13 = var11[var9];
            var13 = var12.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var9 = var11[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.ZXxLQg;
            var9 = var13.bind(var14)(var9);
            var2['accessibilityLabel'] = var9;
            var9 = 51;
            var9 = var11[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.ChatIcon;
            var2['IconComponent'] = var9;
            var9 = 52;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var2['source'] = var9;
            var2['onPress'] = var8;
            var2['appearsDisabled'] = var7;
            var2['isSmallSize'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 50:
            return var1;
        }
    };
    var3['ChatButton'] = var6;
    var3['AnimatedPrompt'] = var5;
    var5 = function AnimatedStartStagePrompt(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var11 = var2.channel;
            var9 = var2.style;
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 55;
            var2 = var4[var2];
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var3 = var4.useStageChannelStartEvent;
            var2 = var11.id;
            var2 = var3.bind(var4)(var2);
            var10 = var2.isLive;
            var _closure2_slot0 = var10;
            var8 = _closure1_slot5;
            var2 = var8.useState;
            var4 = false;
            var2 = var2.bind(var8)(var4);
            var14 = _closure1_slot4;
            var13 = 2;
            var3 = var14.bind(var5)(var2, var13);
            var2 = 0;
            var7 = var3[var2];
            var _closure2_slot1 = var7;
            var12 = 1;
            var3 = var3[var12];
            var _closure2_slot2 = var3;
            var3 = var8.useState;
            var3 = var3.bind(var8)(var4);
            var4 = var14.bind(var5)(var3, var13);
            var3 = var4[var2];
            var _closure2_slot3 = var3;
            var4 = var4[var12];
            var _closure2_slot4 = var4;
            var4 = var8.useState;
            var4 = var4.bind(var8)(var10);
            var4 = var14.bind(var5)(var4, var13);
            var2 = var4[var2];
            var _closure2_slot5 = var2;
            var4 = var4[var12];
            var _closure2_slot6 = var4;
            var12 = var8.useEffect;
            var4 = new Array(3);
            var4[0] = var10;
            var4[1] = var7;
            var4[2] = var3;
            var3 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0013_ip = 53; continue _fun0013 }
case 9:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0013_ip = 54; continue _fun0013 }
case 27:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0013_ip = 54; continue _fun0013 }
case 55:
                    var4 = _closure2_slot2;
                    var3 = undefined;
                    var2 = true;
                    var2 = var4.bind(var3)(var2);
                    _fun0013_ip = 53; continue _fun0013;
case 54:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0013_ip = 8; continue _fun0013 }
case 56:
                    var2 = _closure2_slot1;
case 8:
                    if(!var2) { _fun0013_ip = 53; continue _fun0013 }
case 57:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
case 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var12.bind(var8)(var3, var4);
            var12 = var8.useEffect;
            var4 = function() {
                var2 = global;
                var5 = var2.setTimeout;
                var4 = undefined;
                var3 = function() {
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = 400;
                var2 = var5.bind(var4)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var3 = new Array(0);
            var3 = var12.bind(var8)(var4, var3);
            var4 = var8.useEffect;
            var3 = new Array(3);
            var3[0] = var10;
            var3[1] = var7;
            var3[2] = var2;
            var1 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure2_slot0;
                    if(!var3) { _fun0014_ip = 58; continue _fun0014 }
case 59:
                    var3 = _closure2_slot1;
                    if(var3) { _fun0014_ip = 58; continue _fun0014 }
case 60:
                    var2 = _closure2_slot5;
                    if(var2) { _fun0014_ip = 58; continue _fun0014 }
case 61:
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        var3 = _closure2_slot6;
                        var1 = undefined;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = 400;
                    var2 = var5.bind(var4)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
case 58:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var8)(var1, var3);
            var1 = null;
            if(var2) { _fun0012_ip = 62; continue _fun0012 }
case 63:
            var4 = _closure1_slot12;
            var3 = _closure1_slot19;
            var2 = {};
            var2['show'] = var7;
            var8 = _closure1_slot12;
            var7 = _closure1_slot20;
            var6 = {};
            var6['channel'] = var11;
            var6['isLive'] = var10;
            var6['style'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 62:
            return var1;
        }
    };
    var3['AnimatedStartStagePrompt'] = var5;
    var3['StartStagePrompt'] = var4;
    var4 = function JoinStagePrompt(arg1) {
        var1 = arg1;
        var2 = var1.channel;
        var _closure2_slot0 = var2;
        var5 = var1.style;
        var1 = _closure1_slot14;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot12;
        var8 = _closure1_slot0;
        var9 = _closure1_slot3;
        var1 = 56;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.FormCTA;
        var1 = {};
        var10 = function onPress() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 58;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.connectAndOpen;
            var2 = _closure2_slot0;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['onPress'] = var10;
        var10 = _closure1_slot1;
        var7 = 57;
        var7 = var9[var7];
        var7 = var10.bind(var4)(var7);
        var1['iconSource'] = var7;
        var7 = var6.iconStyle;
        var1['iconStyle'] = var7;
        var6 = var6.iconContainerStyle;
        var1['iconContainerStyle'] = var6;
        var1['style'] = var5;
        var5 = 12;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6["7vb2cc"];
        var6 = var7.bind(var10)(var6);
        var1['title'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.lyCW4E;
        var5 = var6.bind(var7)(var5);
        var1['subtitle'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['JoinStagePrompt'] = var4;
    var2 = function ContinueToStagePrompt(arg1) {
        var1 = arg1;
        var5 = var1.onContinue;
        var1 = _closure1_slot14;
        var4 = undefined;
        var17 = var1.bind(var4)();
        var3 = _closure1_slot12;
        var14 = _closure1_slot0;
        var15 = _closure1_slot3;
        var1 = 59;
        var1 = var15[var1];
        var1 = var14.bind(var4)(var1);
        var2 = var1.PressableOpacity;
        var1 = {};
        var6 = 'button';
        var1['accessibilityRole'] = var6;
        var1['onPress'] = var5;
        var7 = _closure1_slot13;
        var6 = _closure1_slot6;
        var5 = {};
        var8 = var17.continueContainer;
        var5['style'] = var8;
        var9 = _closure1_slot12;
        var8 = {};
        var13 = 60;
        var10 = var15[var13];
        var10 = var14.bind(var4)(var10);
        var11 = var10.LegacyText;
        var10 = {};
        var12 = var17.continueText;
        var10['style'] = var12;
        var12 = 12;
        var18 = var15[var12];
        var18 = var14.bind(var4)(var18);
        var19 = var18.intl;
        var18 = var19.string;
        var12 = var15[var12];
        var12 = var14.bind(var4)(var12);
        var12 = var12.t;
        var12 = var12.jMLfp/;
        var12 = var18.bind(var19)(var12);
        var10['children'] = var12;
        var10 = var9.bind(var4)(var11, var10);
        var8['children'] = var10;
        var9 = var9.bind(var4)(var6, var8);
        var8 = new Array(2);
        var8[0] = var9;
        var10 = _closure1_slot12;
        var9 = {};
        var11 = var15[var13];
        var11 = var14.bind(var4)(var11);
        var12 = var11.Icon;
        var11 = {};
        var17 = var17.continueIcon;
        var11['style'] = var17;
        var17 = _closure1_slot1;
        var16 = 61;
        var16 = var15[var16];
        var16 = var17.bind(var4)(var16);
        var11['source'] = var16;
        var13 = var15[var13];
        var13 = var14.bind(var4)(var13);
        var13 = var13.Icon;
        var13 = var13.Sizes;
        var13 = var13.SMALL;
        var11['size'] = var13;
        var13 = true;
        var11['disableColor'] = var13;
        var11 = var10.bind(var4)(var12, var11);
        var9['children'] = var11;
        var9 = var10.bind(var4)(var6, var9);
        var8[1] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['ContinueToStagePrompt'] = var2;
    return var1;
})();
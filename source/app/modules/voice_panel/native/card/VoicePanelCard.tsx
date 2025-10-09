// app/modules/voice_panel/native/card/VoicePanelCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function SelfStreamCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var8 = var3.sharedCoords;
            var _closure2_slot0 = var8;
            var1 = var3.stream;
            var _closure2_slot1 = var1;
            var7 = var3.isFocused;
            var _closure2_slot2 = var7;
            var3 = _closure1_slot30;
            var4 = undefined;
            var16 = var3.bind(var4)();
            var6 = _closure1_slot4;
            var5 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 22;
                    var2 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var2);
                    var2 = var3.stopStream;
                    var4 = 23;
                    var4 = var7[var4];
                    var5 = var6.bind(var5)(var4);
                    var4 = var5.encodeStreamKey;
                    var1 = _closure2_slot1;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var5.bind(var6)(var1, var3);
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 16;
            var3 = var1[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useAnimatedStyle;
            var2 = function l() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {'textAlign': 'center', 'paddingHorizontal': 16};
                    var2 = 16;
                    var4 = _closure2_slot2;
                    if(!var4) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var2 = 0;
case 4:
                    var1['paddingVertical'] = var2;
                    var4 = _closure2_slot2;
                    var2 = 'auto';
                    if(var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var4 = _closure2_slot0;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = var3.width;
case 6:
                    var1['width'] = var2;
                    return var1;
                }
            };
            var6 = {};
            var6['isFocused'] = var7;
            var6['sharedCoords'] = var8;
            var2['__closure'] = var6;
            var6 = 4561576173627.0;
            var2['__workletHash'] = var6;
            var6 = _closure1_slot31;
            var2['__initData'] = var6;
            var10 = var3.bind(var5)(var2);
            var3 = _closure1_slot24;
            var2 = _closure1_slot1;
            var12 = 24;
            var1 = var1[var12];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = var16.nonUserRoundedCard;
            var1['style'] = var5;
            var6 = var7;
            if(!var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = _closure1_slot24;
            var8 = _closure1_slot23;
            var5 = {};
            var14 = _closure1_slot22;
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var12 = var20[var12];
            var13 = var19.bind(var4)(var12);
            var12 = {};
            var17 = var16.blackBackground;
            var12['style'] = var17;
            var13 = var14.bind(var4)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var17 = _closure1_slot22;
            var13 = 25;
            var13 = var20[var13];
            var14 = var19.bind(var4)(var13);
            var13 = {};
            var18 = var16.selfStreamHeaderImage;
            var13['style'] = var18;
            var18 = 26;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var13['source'] = var18;
            var18 = 'contain';
            var13['resizeMode'] = var18;
            var13 = var17.bind(var4)(var14, var13);
            var12[1] = var13;
            var5['children'] = var12;
            var6 = var9.bind(var4)(var8, var5);
case 8:
            var5 = new Array(3);
            var5[0] = var6;
            var9 = _closure1_slot22;
            var8 = _closure1_slot25;
            var6 = {};
            var6['style'] = var10;
            var10 = 'text-sm/semibold';
            if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = 'text-lg/semibold';
case 10:
            var6['variant'] = var10;
            var10 = 'always-white';
            var6['color'] = var10;
            var14 = _closure1_slot0;
            var10 = _closure1_slot2;
            var18 = 27;
            var12 = var10[var18];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var10 = var10[var18];
            var10 = var14.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.gMOwoq;
            var10 = var12.bind(var13)(var10);
            var6['children'] = var10;
            var6 = var9.bind(var4)(var8, var6);
            var5[1] = var6;
            var6 = null;
            if(!var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = _closure1_slot24;
            var8 = _closure1_slot23;
            var7 = {};
            var13 = _closure1_slot22;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 17;
            var10 = var14[var10];
            var10 = var17.bind(var4)(var10);
            var12 = var10.Text;
            var10 = {'style': null, 'variant': 'text-sm/medium', 'color': 'always-white'};
            var16 = var16.selfStreamFocusedSubtitle;
            var10['style'] = var16;
            var16 = var14[var18];
            var16 = var17.bind(var4)(var16);
            var20 = var16.intl;
            var19 = var20.string;
            var16 = var14[var18];
            var16 = var17.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.dKeLGh;
            var16 = var19.bind(var20)(var16);
            var10['children'] = var16;
            var12 = var13.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot22;
            var11 = 28;
            var11 = var14[var11];
            var11 = var17.bind(var4)(var11);
            var12 = var11.Button;
            var11 = {'size': 'lg', 'variant': 'primary-overlay'};
            var11['onPress'] = var15;
            var15 = var14[var18];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var18];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.CpkXwc;
            var14 = var15.bind(var16)(var14);
            var11['text'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 12:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot58 = var1;
    var1 = function SpeakingIndicator(arg1) {
        var2 = arg1;
        var19 = var2.id;
        var _closure2_slot0 = var19;
        var14 = var2.isSelf;
        var _closure2_slot1 = var14;
        var11 = var2.speaking;
        var _closure2_slot2 = var11;
        var9 = var2.layout;
        var5 = _closure1_slot4;
        var3 = var5.useContext;
        var7 = _closure1_slot1;
        var12 = _closure1_slot2;
        var2 = 29;
        var2 = var12[var2];
        var4 = undefined;
        var2 = var7.bind(var4)(var2);
        var2 = var3.bind(var5)(var2);
        var21 = var2.mode;
        var _closure2_slot3 = var21;
        var20 = var2.focused;
        var _closure2_slot4 = var20;
        var2 = _closure1_slot30;
        var10 = var2.bind(var4)();
        var18 = _closure1_slot0;
        var2 = 16;
        var3 = var12[var2];
        var6 = var18.bind(var4)(var3);
        var5 = var6.useAnimatedStyle;
        var3 = function u() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure2_slot3;
                var1 = var2.get;
                var3 = var1.bind(var2)();
                var1 = _closure1_slot12;
                var1 = var1.PIP;
                var7 = var3 !== var1;
                if(!var7) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var3 = _closure2_slot4;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var3 = null;
                var4 = var3 == var1;
                var3 = undefined;
                if(var4) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var3 = var1.id;
case 16:
                var1 = _closure2_slot0;
                var7 = var3 === var1;
case 14:
                var1 = {};
                var3 = 1;
                if(!var7) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var3 = 0;
case 18:
                var1['opacity'] = var3;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 40;
                var3 = var5[var3];
                var9 = undefined;
                var6 = var4.bind(var9)(var3);
                var5 = var6.withSpring;
                var4 = 0;
                if(var7) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var3 = 42;
                var3 = var11[var3];
                var8 = var8.bind(var9)(var3);
                var3 = {};
                var11 = _closure2_slot0;
                var3['id'] = var11;
                var12 = _closure2_slot3;
                var11 = var12.get;
                var11 = var11.bind(var12)();
                var3['mode'] = var11;
                var12 = _closure2_slot4;
                var11 = var12.get;
                var12 = var11.bind(var12)();
                var11 = null;
                var13 = var11 == var12;
                var11 = undefined;
                if(var13) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var11 = var12.id;
case 22:
                var3['focused'] = var11;
                var10 = _closure2_slot1;
                var3['isSelf'] = var10;
                var4 = var8.bind(var9)(var3);
case 20:
                var3 = _closure1_slot14;
                var2 = 'animate-always';
                if(!var7) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var2 = 'animate-never';
case 24:
                var2 = var5.bind(var6)(var4, var3, var2);
                var1['borderRadius'] = var2;
                return var1;
            }
        };
        var13 = {};
        var13['mode'] = var21;
        var15 = _closure1_slot12;
        var13['VoicePanelModes'] = var15;
        var13['focused'] = var20;
        var13['id'] = var19;
        var17 = 40;
        var15 = var12[var17];
        var15 = var18.bind(var4)(var15);
        var15 = var15.withSpring;
        var13['withSpring'] = var15;
        var15 = 42;
        var16 = var12[var15];
        var16 = var7.bind(var4)(var16);
        var13['computeCardBorderRadius'] = var16;
        var13['isSelf'] = var14;
        var16 = _closure1_slot14;
        var13['SPEAKING_PHYSICS'] = var16;
        var3['__closure'] = var13;
        var13 = 8831115505072.0;
        var3['__workletHash'] = var13;
        var13 = _closure1_slot38;
        var3['__initData'] = var13;
        var13 = var5.bind(var6)(var3);
        var3 = var12[var2];
        var16 = var18.bind(var4)(var3);
        var5 = var16.useAnimatedStyle;
        var3 = function c() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure2_slot3;
                var1 = var2.get;
                var3 = var1.bind(var2)();
                var1 = _closure1_slot12;
                var1 = var1.PIP;
                var7 = var3 === var1;
                if(var7) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                var3 = _closure2_slot4;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var3 = null;
                var4 = var3 == var1;
                var3 = undefined;
                if(var4) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                var3 = var1.id;
case 16:
                var1 = _closure2_slot0;
                var7 = var3 === var1;
case 14:
                var1 = {};
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = 40;
                var3 = var3[var5];
                var10 = undefined;
                var13 = var4.bind(var10)(var3);
                var12 = var13.withSpring;
                var11 = 0;
                if(var7) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 42;
                var3 = var6[var3];
                var4 = var4.bind(var10)(var3);
                var3 = {};
                var6 = _closure2_slot0;
                var3['id'] = var6;
                var14 = _closure2_slot3;
                var6 = var14.get;
                var6 = var6.bind(var14)();
                var3['mode'] = var6;
                var14 = _closure2_slot4;
                var6 = var14.get;
                var14 = var6.bind(var14)();
                var6 = null;
                var15 = var6 == var14;
                var6 = undefined;
                if(var15) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                var6 = var14.id;
case 28:
                var3['focused'] = var6;
                var6 = _closure2_slot1;
                var3['isSelf'] = var6;
                var11 = var4.bind(var10)(var3);
case 26:
                var4 = _closure1_slot14;
                var6 = 'animate-always';
                var3 = var6;
                if(!var7) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                var3 = 'animate-never';
case 30:
                var3 = var12.bind(var13)(var11, var4, var3);
                var1['borderRadius'] = var3;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var5 = var4.bind(var10)(var3);
                var4 = var5.withSpring;
                var3 = 0;
                if(var7) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var11 = _closure2_slot2;
                var8 = var11.get;
                var8 = var8.bind(var11)();
                var3 = 0;
                if(!var8) { _fun0005_ip = 32; continue _fun0005 }
case 34:
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 43;
                var8 = var11[var8];
                var9 = var9.bind(var10)(var8);
                var8 = 5;
                var3 = var9.bind(var10)(var8);
case 32:
                var2 = _closure1_slot14;
                if(!var7) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                var6 = 'animate-never';
case 35:
                var2 = var4.bind(var5)(var3, var2, var6);
                var1['borderWidth'] = var2;
                return var1;
            }
        };
        var22 = {};
        var22['mode'] = var21;
        var6 = _closure1_slot12;
        var22['VoicePanelModes'] = var6;
        var22['focused'] = var20;
        var22['id'] = var19;
        var6 = var12[var17];
        var6 = var18.bind(var4)(var6);
        var6 = var6.withSpring;
        var22['withSpring'] = var6;
        var6 = var12[var15];
        var6 = var7.bind(var4)(var6);
        var22['computeCardBorderRadius'] = var6;
        var22['isSelf'] = var14;
        var6 = _closure1_slot14;
        var22['SPEAKING_PHYSICS'] = var6;
        var22['speaking'] = var11;
        var6 = 43;
        var6 = var12[var6];
        var6 = var7.bind(var4)(var6);
        var22['roundToNearestPixel'] = var6;
        var6 = 3;
        var22['SPEAKING_BORDER_SIZE'] = var6;
        var23 = 2;
        var22['SPEAKING_INSET'] = var23;
        var3['__closure'] = var22;
        var22 = 10328950638717.0;
        var3['__workletHash'] = var22;
        var22 = _closure1_slot39;
        var3['__initData'] = var22;
        var16 = var5.bind(var16)(var3);
        var2 = var12[var2];
        var3 = var18.bind(var4)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function h() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = _closure2_slot3;
                var1 = var2.get;
                var3 = var1.bind(var2)();
                var1 = _closure1_slot12;
                var1 = var1.PIP;
                var7 = var3 === var1;
                if(var7) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                var3 = _closure2_slot4;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var3 = null;
                var4 = var3 == var1;
                var3 = undefined;
                if(var4) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                var3 = var1.id;
case 16:
                var1 = _closure2_slot0;
                var7 = var3 === var1;
case 14:
                var1 = {};
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var10 = 40;
                var3 = var3[var10];
                var5 = undefined;
                var13 = var4.bind(var5)(var3);
                var12 = var13.withSpring;
                var11 = 0;
                if(var7) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 42;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = {};
                var6 = _closure2_slot0;
                var3['id'] = var6;
                var14 = _closure2_slot3;
                var6 = var14.get;
                var6 = var6.bind(var14)();
                var3['mode'] = var6;
                var14 = _closure2_slot4;
                var6 = var14.get;
                var14 = var6.bind(var14)();
                var6 = null;
                var15 = var6 == var14;
                var6 = undefined;
                if(var15) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                var6 = var14.id;
case 28:
                var3['focused'] = var6;
                var6 = _closure2_slot1;
                var3['isSelf'] = var6;
                var11 = var4.bind(var5)(var3);
case 26:
                var4 = _closure1_slot14;
                var6 = 'animate-always';
                var3 = var6;
                if(!var7) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                var3 = 'animate-never';
case 30:
                var3 = var12.bind(var13)(var11, var4, var3);
                var1['borderRadius'] = var3;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var10];
                var5 = var4.bind(var5)(var3);
                var4 = var5.withSpring;
                var3 = 0;
                if(var7) { _fun0006_ip = 37; continue _fun0006 }
case 33:
                var10 = _closure2_slot2;
                var8 = var10.get;
                var8 = var8.bind(var10)();
                var3 = 0;
                if(!var8) { _fun0006_ip = 37; continue _fun0006 }
case 34:
                var3 = 3;
case 37:
                var2 = _closure1_slot14;
                if(!var7) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                var6 = 'animate-never';
case 38:
                var2 = var4.bind(var5)(var3, var2, var6);
                var1['borderWidth'] = var2;
                return var1;
            }
        };
        var5 = {};
        var5['mode'] = var21;
        var21 = _closure1_slot12;
        var5['VoicePanelModes'] = var21;
        var5['focused'] = var20;
        var5['id'] = var19;
        var17 = var12[var17];
        var17 = var18.bind(var4)(var17);
        var17 = var17.withSpring;
        var5['withSpring'] = var17;
        var15 = var12[var15];
        var15 = var7.bind(var4)(var15);
        var5['computeCardBorderRadius'] = var15;
        var5['isSelf'] = var14;
        var14 = _closure1_slot14;
        var5['SPEAKING_PHYSICS'] = var14;
        var5['speaking'] = var11;
        var5['SPEAKING_BORDER_SIZE'] = var6;
        var1['__closure'] = var5;
        var5 = 756305191384.0;
        var1['__workletHash'] = var5;
        var5 = _closure1_slot40;
        var1['__initData'] = var5;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot24;
        var6 = 41;
        var1 = var12[var6];
        var2 = var7.bind(var4)(var1);
        var1 = {};
        var14 = var10.speakingIndicatorWrapper;
        var5 = new Array(2);
        var5[0] = var14;
        var5[1] = var13;
        var1['style'] = var5;
        var1['layout'] = var9;
        var5 = 'none';
        var1['pointerEvents'] = var5;
        var14 = _closure1_slot22;
        var5 = var12[var6];
        var13 = var7.bind(var4)(var5);
        var5 = {};
        var17 = var10.speakingIndicatorUnderlay;
        var15 = new Array(2);
        var15[0] = var17;
        var15[1] = var16;
        var5['style'] = var15;
        var5['layout'] = var9;
        var13 = var14.bind(var4)(var13, var5);
        var5 = new Array(2);
        var5[0] = var13;
        var8 = _closure1_slot22;
        var6 = var12[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var12 = var10.speakingIndicatorGreenBar;
        var10 = new Array(2);
        var10[0] = var12;
        var10[1] = var11;
        var6['style'] = var10;
        var6['layout'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot59 = var1;
    var1 = function AnimatedWrapper(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var8 = var2.children;
            var24 = var2.cleanUp;
            var _closure2_slot0 = var24;
            var40 = var2.coords;
            var _closure2_slot1 = var40;
            var31 = var2.id;
            var _closure2_slot2 = var31;
            var34 = var2.isRTCConnected;
            var _closure2_slot3 = var34;
            var30 = var2.isScrollVisible;
            var _closure2_slot4 = var30;
            var21 = var2.layoutPhysics;
            var _closure2_slot5 = var21;
            var12 = var2.transitionState;
            var33 = var2.sharedVisible;
            var _closure2_slot6 = var33;
            var4 = undefined;
            var _closure2_slot25 = var4;
            var _closure2_slot26 = var4;
            var _closure2_slot27 = var4;
            var _closure2_slot28 = var4;
            var _closure2_slot29 = var4;
            var _closure2_slot30 = var4;
            var _closure2_slot31 = var4;
            var _closure2_slot32 = var4;
            var13 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 46;
            var2 = var3[var2];
            var2 = var13.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = var2.analyticsLocations;
            var _closure2_slot7 = var2;
            var2 = _closure1_slot30;
            var10 = var2.bind(var4)();
            var7 = _closure1_slot4;
            var6 = var7.useContext;
            var2 = 29;
            var2 = var3[var2];
            var2 = var13.bind(var4)(var2);
            var6 = var6.bind(var7)(var2);
            var11 = var6.channelId;
            var _closure2_slot8 = var11;
            var29 = var6.connected;
            var _closure2_slot9 = var29;
            var38 = var6.contentDimensions;
            var _closure2_slot10 = var38;
            var2 = var6.controlsSpecs;
            var _closure2_slot11 = var2;
            var32 = var6.focused;
            var _closure2_slot12 = var32;
            var9 = var6.guildId;
            var2 = var6.hideControls;
            var _closure2_slot13 = var2;
            var35 = var6.mode;
            var _closure2_slot14 = var35;
            var2 = var6.mountedCards;
            var16 = var6.pipAvoidanceSpecs;
            var _closure2_slot15 = var16;
            var20 = var6.pipContainerRef;
            var _closure2_slot16 = var20;
            var17 = var6.safeArea;
            var _closure2_slot17 = var17;
            var15 = var6.scrollPosition;
            var _closure2_slot18 = var15;
            var7 = var6.setFocused;
            var _closure2_slot19 = var7;
            var7 = var6.showControls;
            var _closure2_slot20 = var7;
            var18 = var6.windowDimensions;
            var _closure2_slot21 = var18;
            var19 = var6.wrapperDimensions;
            var _closure2_slot22 = var19;
            var14 = var6.wrapperOffset;
            var _closure2_slot23 = var14;
            var6 = _closure1_slot0;
            var7 = 47;
            var7 = var3[var7];
            var22 = var6.bind(var4)(var7);
            var7 = var22.usePIPState;
            var25 = var7.bind(var22)();
            var _closure2_slot24 = var25;
            var27 = 48;
            var7 = var3[var27];
            var7 = var13.bind(var4)(var7);
            var23 = var7.bind(var4)(var31, var11, var9);
            var3 = var3[var27];
            var6 = var6.bind(var4)(var3);
            var3 = var6.isStableParticipantWithUser;
            var6 = var3.bind(var6)(var23);
            var3 = var23;
            if(var6) { _fun0007_ip = 40; continue _fun0007 }
case 41:
            var3 = _closure1_slot46;
case 40:
            var9 = var3.isSelf;
            _closure2_slot25 = var9;
            var3 = var3.user;
            var7 = var3.id;
            _closure2_slot26 = var7;
            var13 = _closure1_slot0;
            var6 = _closure1_slot2;
            var26 = 16;
            var3 = var6[var26];
            var22 = var13.bind(var4)(var3);
            var11 = var22.useDerivedValue;
            var3 = function w() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = _closure2_slot24;
                    var1 = var1.id;
                    var1 = var3 === var1;
                    if(!var1) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                    var3 = _closure2_slot14;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot12;
                    var2 = var2.PIP;
                    var1 = var3 === var2;
case 42:
                    return var1;
                }
            };
            var28 = {};
            var28['id'] = var31;
            var28['pipState'] = var25;
            var28['mode'] = var35;
            var36 = _closure1_slot12;
            var28['VoicePanelModes'] = var36;
            var3['__closure'] = var28;
            var28 = 4773864088866.0;
            var3['__workletHash'] = var28;
            var28 = _closure1_slot49;
            var3['__initData'] = var28;
            var36 = var11.bind(var22)(var3);
            _closure2_slot27 = var36;
            var3 = var6[var26];
            var22 = var13.bind(var4)(var3);
            var11 = var22.useDerivedValue;
            var3 = function P() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot12;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var3 = null;
                    var4 = var3 == var1;
                    var3 = undefined;
                    if(var4) { _fun0009_ip = 44; continue _fun0009 }
case 5:
                    var3 = var1.id;
case 44:
                    var1 = _closure2_slot2;
                    if(!(var3 !== var1)) { _fun0009_ip = 45; continue _fun0009 }
case 46:
                    var3 = _closure2_slot14;
                    var1 = var3.get;
                    var4 = var1.bind(var3)();
                    var1 = _closure1_slot12;
                    var3 = var1.PIP;
                    var1 = 0;
                    if(!(var4 === var3)) { _fun0009_ip = 47; continue _fun0009 }
case 45:
                    var3 = _closure2_slot18;
                    var2 = var3.get;
                    var1 = var2.bind(var3)();
case 47:
                    return var1;
                }
            };
            var28 = {};
            var28['focused'] = var32;
            var28['id'] = var31;
            var28['mode'] = var35;
            var37 = _closure1_slot12;
            var28['VoicePanelModes'] = var37;
            var28['scrollPosition'] = var15;
            var3['__closure'] = var28;
            var28 = 8770947887509.0;
            var3['__workletHash'] = var28;
            var28 = _closure1_slot50;
            var3['__initData'] = var28;
            var39 = var11.bind(var22)(var3);
            _closure2_slot28 = var39;
            var3 = var6[var26];
            var22 = var13.bind(var4)(var3);
            var11 = var22.useDerivedValue;
            var3 = function y() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot9;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0010_ip = 48; continue _fun0010 }
case 49:
                    var3 = _closure2_slot22;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var3 = var1.drawerWidth;
                    var1 = 2;
                    var1 = var3 / var1;
                    _fun0010_ip = 50; continue _fun0010;
case 48:
                    var3 = global;
                    var6 = var3.Math;
                    var5 = var6.max;
                    var4 = _closure1_slot18;
                    var7 = _closure2_slot17;
                    var3 = var7.get;
                    var3 = var3.bind(var7)();
                    var3 = var3.left;
                    var8 = _closure2_slot21;
                    var7 = var8.get;
                    var7 = var7.bind(var8)();
                    var7 = var7.width;
                    var8 = _closure2_slot10;
                    var2 = var8.get;
                    var2 = var2.bind(var8)();
                    var2 = var2.width;
                    var7 = var7 - var2;
                    var2 = 2;
                    var2 = var7 / var2;
                    var1 = var5.bind(var6)(var4, var3, var2);
case 50:
                    return var1;
                }
            };
            var28 = {};
            var28['connected'] = var29;
            var29 = _closure1_slot18;
            var28['EDGE_GUTTER'] = var29;
            var28['safeArea'] = var17;
            var28['windowDimensions'] = var18;
            var28['contentDimensions'] = var38;
            var28['wrapperDimensions'] = var19;
            var3['__closure'] = var28;
            var28 = 15078431132990.0;
            var3['__workletHash'] = var28;
            var28 = _closure1_slot51;
            var3['__initData'] = var28;
            var3 = var11.bind(var22)(var3);
            _closure2_slot29 = var3;
            var11 = {};
            var11['id'] = var31;
            var11['participant'] = var23;
            var11['transitionState'] = var12;
            var11['cleanUp'] = var24;
            var11['mountedCards'] = var2;
            var11['mode'] = var35;
            var11['focused'] = var32;
            var11['isScrollVisible'] = var30;
            var11['sharedVisible'] = var33;
            var2 = function useSharedTransitionState(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = arg1;
                    var10 = var2.id;
                    var _closure3_slot0 = var10;
                    var6 = var2.participant;
                    var _closure3_slot1 = var6;
                    var5 = var2.transitionState;
                    var _closure3_slot2 = var5;
                    var11 = var2.cleanUp;
                    var _closure3_slot3 = var11;
                    var18 = var2.mode;
                    var _closure3_slot4 = var18;
                    var9 = var2.focused;
                    var _closure3_slot5 = var9;
                    var16 = var2.isScrollVisible;
                    var _closure3_slot6 = var16;
                    var17 = var2.sharedVisible;
                    var _closure3_slot7 = var17;
                    var14 = undefined;
                    var _closure3_slot10 = var14;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var15 = 16;
                    var2 = var2[var15];
                    var3 = var3.bind(var14)(var2);
                    var2 = var3.useSharedValue;
                    var3 = var2.bind(var3)(var5);
                    var _closure3_slot8 = var3;
                    var7 = _closure1_slot4;
                    var5 = var7.useState;
                    var2 = true;
                    var7 = var5.bind(var7)(var2);
                    var5 = _closure1_slot3;
                    var2 = 2;
                    var7 = var5.bind(var14)(var7, var2);
                    var2 = 0;
                    var2 = var7[var2];
                    var5 = 1;
                    var5 = var7[var5];
                    var _closure3_slot9 = var5;
                    var8 = _closure1_slot4;
                    var7 = var8.useCallback;
                    var5 = null;
                    var12 = var5 == var6;
                    var5 = undefined;
                    if(var12) { _fun0011_ip = 51; continue _fun0011 }
case 52:
                    var5 = var6.type;
case 51:
                    var6 = new Array(2);
                    var6[0] = var5;
                    var6[1] = var10;
                    var5 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var3 = _closure3_slot1;
                            var1 = null;
                            var3 = var1 == var3;
                            var1 = undefined;
                            var4 = undefined;
                            if(var3) { _fun0012_ip = 4; continue _fun0012 }
case 53:
                            var3 = _closure3_slot1;
                            var4 = var3.type;
case 4:
                            var3 = _closure1_slot20;
                            var3 = var3.ACTIVITY;
                            if(!(var4 === var3)) { _fun0012_ip = 54; continue _fun0012 }
case 55:
                            var3 = _closure3_slot9;
                            var4 = _closure3_slot0;
                            var2 = arg1;
                            var2 = var2 === var4;
                            var2 = !var2;
                            var2 = var3.bind(var1)(var2);
case 54:
                            return var1;
                        }
                    };
                    var20 = var7.bind(var8)(var5, var6);
                    _closure3_slot10 = var20;
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = var12[var15];
                    var8 = var13.bind(var14)(var5);
                    var7 = var8.useAnimatedReaction;
                    var6 = function w() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var2 = _closure3_slot5;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = null;
                            var3 = var1 == var2;
                            var1 = undefined;
                            if(var3) { _fun0013_ip = 44; continue _fun0013 }
case 5:
                            var1 = var2.id;
case 44:
                            return var1;
                        }
                    };
                    var5 = {};
                    var5['focused'] = var9;
                    var6['__closure'] = var5;
                    var5 = 12145773243163.0;
                    var6['__workletHash'] = var5;
                    var5 = _closure1_slot42;
                    var6['__initData'] = var5;
                    var5 = function _(arg1, arg2) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var3 = arg1;
                            var1 = arg2;
                            if(!(var3 !== var1)) { _fun0014_ip = 56; continue _fun0014 }
case 57:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 16;
                            var1 = var2[var1];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var1);
                            var4 = var5.runOnJS;
                            var1 = _closure3_slot10;
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.bind(var2)(var3);
case 56:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var19 = {};
                    var21 = var12[var15];
                    var21 = var13.bind(var14)(var21);
                    var21 = var21.runOnJS;
                    var19['runOnJS'] = var21;
                    var19['handleFocusedParticipantChange'] = var20;
                    var5['__closure'] = var19;
                    var19 = 9304160478829.0;
                    var5['__workletHash'] = var19;
                    var19 = _closure1_slot43;
                    var5['__initData'] = var19;
                    var5 = var7.bind(var8)(var6, var5);
                    var5 = var12[var15];
                    var8 = var13.bind(var14)(var5);
                    var7 = var8.useAnimatedReaction;
                    var6 = function v() {
                        var1 = {};
                        var4 = _closure3_slot4;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var1['mode'] = var3;
                        var4 = _closure3_slot5;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var1['focused'] = var3;
                        var3 = _closure3_slot8;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var1['transitionState'] = var2;
                        return var1;
                    };
                    var5 = {};
                    var5['mode'] = var18;
                    var5['focused'] = var9;
                    var5['sharedTransitionState'] = var3;
                    var6['__closure'] = var5;
                    var5 = 13570020810295.0;
                    var6['__workletHash'] = var5;
                    var5 = _closure1_slot44;
                    var6['__initData'] = var5;
                    var5 = function P(arg1, arg2) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var4 = arg1;
                            var7 = arg2;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 44;
                            var2 = var2[var1];
                            var1 = undefined;
                            var8 = var5.bind(var1)(var2);
                            var6 = var8.cheapWorkletShallowEqual;
                            var2 = null;
                            var9 = var2 != var7;
                            var5 = undefined;
                            if(!var9) { _fun0015_ip = 58; continue _fun0015 }
case 59:
                            var5 = var7;
case 58:
                            var5 = var6.bind(var8)(var4, var5);
                            if(var5) { _fun0015_ip = 60; continue _fun0015 }
case 6:
                            var6 = var4.mode;
                            var8 = var4.focused;
                            var9 = var4.transitionState;
                            var4 = _closure1_slot12;
                            var4 = var4.PIP;
                            var10 = var2 == var8;
                            var5 = undefined;
                            if(var10) { _fun0015_ip = 61; continue _fun0015 }
case 62:
                            var5 = var8.id;
case 61:
                            if(!(var2 == var7)) { _fun0015_ip = 63; continue _fun0015 }
case 64:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var8 = 45;
                            var8 = var11[var8];
                            var8 = var10.bind(var1)(var8);
                            var8 = var8.TransitionStates;
                            var8 = var8.YEETED;
                            if(!(var9 === var8)) { _fun0015_ip = 65; continue _fun0015 }
case 63:
                            var11 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var10 = 45;
                            var8 = var8[var10];
                            var8 = var11.bind(var1)(var8);
                            var8 = var8.TransitionStates;
                            var8 = var8.YEETED;
                            if(!(var9 !== var8)) { _fun0015_ip = 66; continue _fun0015 }
case 67:
                            var9 = var2 == var7;
                            var8 = undefined;
                            if(var9) { _fun0015_ip = 9; continue _fun0015 }
case 22:
                            var8 = var7.transitionState;
case 9:
                            var9 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var7 = var7[var10];
                            var7 = var9.bind(var1)(var7);
                            var7 = var7.TransitionStates;
                            var7 = var7.YEETED;
                            if(!(var8 !== var7)) { _fun0015_ip = 68; continue _fun0015 }
case 69:
                            if(!(var6 !== var4)) { _fun0015_ip = 60; continue _fun0015 }
case 70:
                            if(!(var2 != var5)) { _fun0015_ip = 71; continue _fun0015 }
case 72:
                            var4 = _closure3_slot0;
                            if(!(var5 === var4)) { _fun0015_ip = 73; continue _fun0015 }
case 74:
                            var6 = _closure3_slot7;
                            var5 = var6.set;
                            var4 = 1;
                            var4 = var5.bind(var6)(var4);
                            _fun0015_ip = 60; continue _fun0015;
case 73:
                            var5 = _closure3_slot7;
                            var4 = var5.set;
                            var2 = 0;
                            var2 = var4.bind(var5)(var2);
                            _fun0015_ip = 60; continue _fun0015;
case 71:
                            var5 = _closure3_slot7;
                            var4 = var5.set;
                            var2 = 1;
                            var2 = var4.bind(var5)(var2);
                            _fun0015_ip = 60; continue _fun0015;
case 68:
                            var5 = _closure3_slot7;
                            var4 = var5.set;
                            var2 = 1;
                            var2 = var4.bind(var5)(var2);
                            _fun0015_ip = 60; continue _fun0015;
case 66:
                            var5 = _closure3_slot7;
                            var4 = var5.get;
                            var5 = var4.bind(var5)();
                            var4 = 1;
                            if(!(var4 === var5)) { _fun0015_ip = 75; continue _fun0015 }
case 76:
                            var5 = _closure3_slot6;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            if(var4) { _fun0015_ip = 77; continue _fun0015 }
case 75:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 16;
                            var3 = var5[var3];
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.runOnJS;
                            var3 = _closure3_slot3;
                            var3 = var4.bind(var5)(var3);
                            var3 = var3.bind(var1)();
                            _fun0015_ip = 60; continue _fun0015;
case 77:
                            var4 = _closure3_slot7;
                            var3 = var4.set;
                            var2 = 0;
                            var2 = var3.bind(var4)(var2);
                            _fun0015_ip = 60; continue _fun0015;
case 65:
                            var4 = _closure3_slot7;
                            var3 = var4.set;
                            var2 = 1;
                            var2 = var3.bind(var4)(var2);
case 60:
                            return var1;
                        }
                    };
                    var9 = {};
                    var18 = 44;
                    var18 = var12[var18];
                    var18 = var13.bind(var14)(var18);
                    var18 = var18.cheapWorkletShallowEqual;
                    var9['cheapWorkletShallowEqual'] = var18;
                    var18 = _closure1_slot12;
                    var9['VoicePanelModes'] = var18;
                    var18 = 45;
                    var18 = var12[var18];
                    var18 = var13.bind(var14)(var18);
                    var18 = var18.TransitionStates;
                    var9['TransitionStates'] = var18;
                    var9['sharedVisible'] = var17;
                    var9['isScrollVisible'] = var16;
                    var12 = var12[var15];
                    var12 = var13.bind(var14)(var12);
                    var12 = var12.runOnJS;
                    var9['runOnJS'] = var12;
                    var9['cleanUp'] = var11;
                    var9['id'] = var10;
                    var5['__closure'] = var9;
                    var9 = 17099686269568.0;
                    var5['__workletHash'] = var9;
                    var9 = _closure1_slot45;
                    var5['__initData'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
                    var5 = _closure1_slot4;
                    var4 = var5.useLayoutEffect;
                    var1 = function() {
                        var3 = _closure3_slot8;
                        var2 = var3.set;
                        var1 = _closure3_slot2;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var4.bind(var5)(var1);
                    var1 = {};
                    var1['sharedTransitionState'] = var3;
                    var1['cardGestureEnabled'] = var2;
                    return var1;
                }
            };
            var2 = var2.bind(var4)(var11);
            var37 = var2.sharedTransitionState;
            _closure2_slot30 = var37;
            var28 = var2.cardGestureEnabled;
            var11 = var25.mode;
            var2 = _closure1_slot17;
            var2 = var2.IN_APP;
            var22 = var11 === var2;
            _closure2_slot31 = var22;
            var2 = var6[var26];
            var12 = var13.bind(var4)(var2);
            var11 = var12.useAnimatedStyle;
            var2 = function b() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var12 = var1.zIndex;
                    var13 = var1.width;
                    var5 = var1.height;
                    var4 = var1.x;
                    var1 = var1.y;
                    var3 = _closure2_slot12;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var11 = null;
                    var7 = var11 == var2;
                    var6 = undefined;
                    var3 = undefined;
                    if(var7) { _fun0016_ip = 14; continue _fun0016 }
case 78:
                    var3 = var2.id;
case 14:
                    var2 = _closure2_slot2;
                    var7 = var3 === var2;
                    var2 = _closure2_slot31;
                    if(var2) { _fun0016_ip = 79; continue _fun0016 }
case 80:
                    var3 = _closure2_slot12;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(!(var11 == var2)) { _fun0016_ip = 81; continue _fun0016 }
case 82:
                    var3 = _closure2_slot29;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var14 = var4 + var2;
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 50;
                    var3 = var8[var3];
                    var9 = var9.bind(var6)(var3);
                    var3 = {};
                    var15 = _closure2_slot10;
                    var10 = var15.get;
                    var10 = var10.bind(var15)();
                    var10 = var10.height;
                    var3['contentHeight'] = var10;
                    var15 = _closure2_slot21;
                    var10 = var15.get;
                    var10 = var10.bind(var15)();
                    var10 = var10.height;
                    var3['windowHeight'] = var10;
                    var15 = _closure2_slot17;
                    var10 = var15.get;
                    var10 = var10.bind(var15)();
                    var3['safeArea'] = var10;
                    var3 = var9.bind(var6)(var3);
                    var15 = var1 + var3;
                    var9 = _closure2_slot30;
                    var3 = var9.get;
                    var16 = var3.bind(var9)();
                    var3 = _closure1_slot0;
                    var2 = 45;
                    var2 = var8[var2];
                    var2 = var3.bind(var6)(var2);
                    var2 = var2.TransitionStates;
                    var2 = var2.YEETED;
                    var21 = var12;
                    var10 = var13;
                    var9 = var5;
                    var3 = var14;
                    var8 = var15;
                    if(!(var16 === var2)) { _fun0016_ip = 83; continue _fun0016 }
case 84:
                    var2 = 4;
                    var2 = var5 / var2;
                    var8 = var15 + var2;
                    var21 = var12;
                    var10 = var13;
                    var9 = var5;
                    var3 = var14;
                    _fun0016_ip = 83; continue _fun0016;
case 81:
                    var21 = 0;
                    var10 = var13;
                    var9 = var5;
                    var3 = var4;
                    var8 = var1;
                    if(!var7) { _fun0016_ip = 83; continue _fun0016 }
case 85:
                    var4 = _closure2_slot21;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var10 = var1.width;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var9 = var1.height;
                    var13 = _closure2_slot28;
                    var1 = var13.get;
                    var8 = var1.bind(var13)();
                    var21 = 1;
                    var3 = 0;
                    _fun0016_ip = 83; continue _fun0016;
case 79:
                    var1 = _closure2_slot24;
                    var5 = var1.width;
                    var4 = var1.height;
                    var2 = var1.showSecondaryPIP;
                    var1 = _closure2_slot24;
                    if(var2) { _fun0016_ip = 86; continue _fun0016 }
case 87:
                    var14 = var1.height;
                    _fun0016_ip = 88; continue _fun0016;
case 86:
                    var14 = var1.containerHeight;
case 88:
                    var2 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var1 = 49;
                    var1 = var13[var1];
                    var13 = var2.bind(var6)(var1);
                    var2 = var13.getClampedPIPPosition;
                    var1 = {};
                    var16 = _closure2_slot22;
                    var15 = var16.get;
                    var15 = var15.bind(var16)();
                    var15 = var15.pipX;
                    var1['pipX'] = var15;
                    var15 = var16.get;
                    var15 = var15.bind(var16)();
                    var15 = var15.pipY;
                    var1['pipY'] = var15;
                    var1['width'] = var5;
                    var1['height'] = var14;
                    var15 = _closure2_slot21;
                    var14 = var15.get;
                    var14 = var14.bind(var15)();
                    var1['windowDimensions'] = var14;
                    var15 = _closure2_slot17;
                    var14 = var15.get;
                    var14 = var14.bind(var15)();
                    var1['safeArea'] = var14;
                    var15 = _closure2_slot15;
                    var14 = var15.get;
                    var14 = var14.bind(var15)();
                    var14 = var14.bottom;
                    var1['bottomAvoidanceRegion'] = var14;
                    var14 = var15.get;
                    var14 = var14.bind(var15)();
                    var14 = var14.top;
                    var1['topAvoidanceRegion'] = var14;
                    var1 = var2.bind(var13)(var1);
                    var3 = var1.x;
                    var14 = _closure2_slot28;
                    var13 = var14.get;
                    var13 = var13.bind(var14)();
                    var1 = var1.y;
                    var8 = var13 + var1;
                    var21 = var12;
                    var10 = var5;
                    var9 = var4;
case 83:
                    var2 = _closure2_slot27;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    if(!var1) { _fun0016_ip = 89; continue _fun0016 }
case 90:
                    var21 = 9001;
case 89:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 42;
                    var1 = var5[var1];
                    var4 = var4.bind(var6)(var1);
                    var1 = {};
                    var5 = _closure2_slot2;
                    var1['id'] = var5;
                    var12 = _closure2_slot14;
                    var5 = var12.get;
                    var5 = var5.bind(var12)();
                    var1['mode'] = var5;
                    var12 = _closure2_slot12;
                    var5 = var12.get;
                    var12 = var5.bind(var12)();
                    var13 = var11 == var12;
                    var5 = undefined;
                    if(var13) { _fun0016_ip = 91; continue _fun0016 }
case 92:
                    var5 = var12.id;
case 91:
                    var1['focused'] = var5;
                    var5 = _closure2_slot25;
                    var1['isSelf'] = var5;
                    var5 = var4.bind(var6)(var1);
                    var4 = _closure2_slot6;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var4 = 0;
                    if(!(var4 === var1)) { _fun0016_ip = 93; continue _fun0016 }
case 94:
                    var12 = _closure2_slot12;
                    var1 = var12.get;
                    var1 = var1.bind(var12)();
                    var12 = var11 == var1;
                    var11 = undefined;
                    if(var12) { _fun0016_ip = 95; continue _fun0016 }
case 96:
                    var11 = var1.id;
case 95:
                    var1 = _closure2_slot2;
                    var16 = 0;
                    if(!(var11 === var1)) { _fun0016_ip = 97; continue _fun0016 }
case 93:
                    var11 = 1;
                    var1 = var11;
                    if(var7) { _fun0016_ip = 98; continue _fun0016 }
case 99:
                    var7 = _closure2_slot3;
                    var1 = var11;
                    if(var7) { _fun0016_ip = 98; continue _fun0016 }
case 100:
                    var1 = _closure1_slot29;
case 98:
                    var16 = var1;
case 97:
                    var1 = {};
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var19 = 16;
                    var7 = var7[var19];
                    var15 = var11.bind(var6)(var7);
                    var14 = var15.withDelay;
                    var11 = _closure2_slot27;
                    var7 = var11.get;
                    var7 = var7.bind(var11)();
                    var13 = 100;
                    if(!var7) { _fun0016_ip = 101; continue _fun0016 }
case 102:
                    var13 = 0;
case 101:
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 39;
                    var12 = var11[var4];
                    var20 = var7.bind(var6)(var12);
                    var17 = var20.withTiming;
                    var12 = _closure1_slot28;
                    var12 = var17.bind(var20)(var21, var12);
                    var12 = var14.bind(var15)(var13, var12);
                    var1['zIndex'] = var12;
                    var4 = var11[var4];
                    var15 = var7.bind(var6)(var4);
                    var14 = var15.withTiming;
                    var13 = _closure1_slot27;
                    var7 = _closure2_slot4;
                    var4 = var7.get;
                    var4 = var4.bind(var7)();
                    var12 = 'animate-never';
                    if(!var4) { _fun0016_ip = 103; continue _fun0016 }
case 104:
                    var12 = 'animate-always';
case 103:
                    var11 = function T(arg1) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0017_ip = 105; continue _fun0017 }
case 106:
                            var3 = _closure2_slot6;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = 0;
                            var1 = var2 === var3;
case 105:
                            if(!var1) { _fun0017_ip = 107; continue _fun0017 }
case 108:
                            var3 = _closure2_slot30;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 45;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.TransitionStates;
                            var2 = var2.YEETED;
                            var1 = var3 === var2;
case 107:
                            if(!var1) { _fun0017_ip = 109; continue _fun0017 }
case 80:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 16;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
case 109:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var17 = {};
                    var4 = _closure2_slot6;
                    var17['sharedVisible'] = var4;
                    var4 = _closure2_slot30;
                    var17['sharedTransitionState'] = var4;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var20 = 45;
                    var20 = var7[var20];
                    var20 = var4.bind(var6)(var20);
                    var20 = var20.TransitionStates;
                    var17['TransitionStates'] = var20;
                    var19 = var7[var19];
                    var19 = var4.bind(var6)(var19);
                    var19 = var19.runOnJS;
                    var17['runOnJS'] = var19;
                    var18 = _closure2_slot0;
                    var17['cleanUp'] = var18;
                    var11['__closure'] = var17;
                    var17 = 6571273005437.0;
                    var11['__workletHash'] = var17;
                    var17 = _closure1_slot53;
                    var11['__initData'] = var17;
                    var26 = var15;
                    var25 = var16;
                    var24 = var13;
                    var23 = var12;
                    var22 = var11;
                    var11 = var26[var14](var25, var24, var23, var22, var21);
                    var1['opacity'] = var11;
                    var1['width'] = var10;
                    var1['height'] = var9;
                    var1['top'] = var8;
                    var1['left'] = var3;
                    var3 = 40;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.withSpring;
                    var2 = _closure1_slot21;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['borderRadius'] = var2;
                    return var1;
                }
            };
            var29 = {};
            var29['coords'] = var40;
            var29['focused'] = var32;
            var29['id'] = var31;
            var29['isPIP'] = var22;
            var29['pipState'] = var25;
            var25 = 49;
            var40 = var6[var25];
            var40 = var13.bind(var4)(var40);
            var40 = var40.getClampedPIPPosition;
            var29['getClampedPIPPosition'] = var40;
            var29['wrapperDimensions'] = var19;
            var29['windowDimensions'] = var18;
            var29['safeArea'] = var17;
            var29['pipAvoidanceSpecs'] = var16;
            var29['derivedScrollValue'] = var39;
            var29['xOffset'] = var3;
            var3 = _closure1_slot1;
            var39 = 50;
            var39 = var6[var39];
            var39 = var3.bind(var4)(var39);
            var29['calculateContentCenterOffset'] = var39;
            var29['contentDimensions'] = var38;
            var29['sharedTransitionState'] = var37;
            var37 = 45;
            var37 = var6[var37];
            var37 = var13.bind(var4)(var37);
            var37 = var37.TransitionStates;
            var29['TransitionStates'] = var37;
            var29['zIndexOverride'] = var36;
            var36 = 42;
            var36 = var6[var36];
            var36 = var3.bind(var4)(var36);
            var29['computeCardBorderRadius'] = var36;
            var29['mode'] = var35;
            var29['isSelf'] = var9;
            var29['sharedVisible'] = var33;
            var29['isRTCConnected'] = var34;
            var34 = _closure1_slot29;
            var29['CONNECTING_OPACITY'] = var34;
            var34 = var6[var26];
            var34 = var13.bind(var4)(var34);
            var34 = var34.withDelay;
            var29['withDelay'] = var34;
            var34 = 39;
            var34 = var6[var34];
            var34 = var13.bind(var4)(var34);
            var34 = var34.withTiming;
            var29['withTiming'] = var34;
            var34 = _closure1_slot28;
            var29['ZINDEX_TIMING'] = var34;
            var34 = _closure1_slot27;
            var29['OPACITY_TIMING'] = var34;
            var29['isScrollVisible'] = var30;
            var30 = var6[var26];
            var30 = var13.bind(var4)(var30);
            var30 = var30.runOnJS;
            var29['runOnJS'] = var30;
            var29['cleanUp'] = var24;
            var24 = 40;
            var30 = var6[var24];
            var30 = var13.bind(var4)(var30);
            var30 = var30.withSpring;
            var29['withSpring'] = var30;
            var30 = _closure1_slot21;
            var29['SCALE_PHYSICS'] = var30;
            var2['__closure'] = var29;
            var29 = 8451269564217.0;
            var2['__workletHash'] = var29;
            var29 = _closure1_slot52;
            var2['__initData'] = var29;
            var12 = var11.bind(var12)(var2);
            var2 = var6[var26];
            var29 = var13.bind(var4)(var2);
            var11 = var29.useAnimatedStyle;
            var2 = function V() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = {};
                    var3 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 40;
                    var4 = var6[var4];
                    var9 = undefined;
                    var6 = var5.bind(var9)(var4);
                    var5 = var6.withSpring;
                    var8 = _closure2_slot6;
                    var7 = var8.get;
                    var8 = var7.bind(var8)();
                    var7 = 1;
                    if(!(var7 !== var8)) { _fun0018_ip = 61; continue _fun0018 }
case 56:
                    var10 = _closure2_slot12;
                    var8 = var10.get;
                    var8 = var8.bind(var10)();
                    var10 = null;
                    var10 = var10 == var8;
                    var9 = undefined;
                    if(var10) { _fun0018_ip = 110; continue _fun0018 }
case 19:
                    var9 = var8.id;
case 110:
                    var8 = _closure2_slot2;
                    var4 = 0.8;
                    if(!(var9 === var8)) { _fun0018_ip = 27; continue _fun0018 }
case 61:
                    var4 = var7;
case 27:
                    var2 = _closure1_slot26;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var30 = {};
            var34 = var6[var24];
            var34 = var13.bind(var4)(var34);
            var34 = var34.withSpring;
            var30['withSpring'] = var34;
            var30['sharedVisible'] = var33;
            var30['focused'] = var32;
            var30['id'] = var31;
            var31 = _closure1_slot26;
            var30['CARD_SCALE_PHYSICS'] = var31;
            var2['__closure'] = var30;
            var30 = 16711905625646.0;
            var2['__workletHash'] = var30;
            var30 = _closure1_slot54;
            var2['__initData'] = var30;
            var11 = var11.bind(var29)(var2);
            var2 = 51;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['gesturesEnabled'] = var28;
            var28 = function onSingleTap() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var3 = _closure2_slot11;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = var2.mode;
                    var2 = _closure1_slot16;
                    var2 = var2.HIDDEN;
                    if(!(var3 !== var2)) { _fun0019_ip = 17; continue _fun0019 }
case 111:
                    var4 = _closure2_slot13;
                    var3 = {};
                    var2 = true;
                    var3['debounce'] = var2;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0019_ip = 112; continue _fun0019;
case 17:
                    var3 = _closure2_slot20;
                    var2 = {};
                    var1 = true;
                    var2['debounce'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 112:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onSingleTap'] = var28;
            var6 = var6[var27];
            var13 = var13.bind(var4)(var6);
            var6 = var13.isStableActivityParticipant;
            var6 = var6.bind(var13)(var23);
            if(var6) { _fun0007_ip = 113; continue _fun0007 }
case 114:
            var6 = undefined;
            if(!var9) { _fun0007_ip = 115; continue _fun0007 }
case 116:
            var13 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var27];
            var13 = var13.bind(var4)(var9);
            var9 = var13.isStableStreamParticipant;
            var9 = var9.bind(var13)(var23);
            var6 = undefined;
            if(!var9) { _fun0007_ip = 115; continue _fun0007 }
case 113:
            var6 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var3 = _closure2_slot12;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var4 = null;
                    var6 = var4 == var3;
                    var1 = undefined;
                    var5 = undefined;
                    if(var6) { _fun0020_ip = 117; continue _fun0020 }
case 4:
                    var5 = var3.id;
case 117:
                    var3 = _closure2_slot2;
                    if(!(var5 === var3)) { _fun0020_ip = 42; continue _fun0020 }
case 118:
                    var3 = _closure2_slot19;
                    var3 = var3.bind(var1)(var4);
                    _fun0020_ip = 119; continue _fun0020;
case 42:
                    var3 = _closure2_slot19;
                    var2 = _closure2_slot2;
                    var2 = var3.bind(var1)(var2);
case 119:
                    return var1;
                }
            };
case 115:
            var2['onDoubleTap'] = var6;
            var6 = null;
            var7 = var6 != var7;
            var6 = undefined;
            if(!var7) { _fun0007_ip = 120; continue _fun0007 }
case 121:
            var6 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 52;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot26;
                var1['userId'] = var5;
                var5 = _closure2_slot8;
                var1['channelId'] = var5;
                var5 = true;
                var1['isVoiceContext'] = var5;
                var4 = _closure2_slot7;
                var1['sourceAnalyticsLocations'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
case 120:
            var2['onLongPress'] = var6;
            var6 = var3.bind(var4)(var2);
            var2 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = var13[var26];
            var9 = var2.bind(var4)(var3);
            var7 = var9.useSharedValue;
            var3 = false;
            var23 = var7.bind(var9)(var3);
            _closure2_slot32 = var23;
            var9 = _closure1_slot4;
            var7 = var9.useCallback;
            var3 = function D(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure2_slot32;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    if(!var1) { _fun0021_ip = 79; continue _fun0021 }
case 122:
                    var1 = _closure2_slot31;
                    if(var1) { _fun0021_ip = 79; continue _fun0021 }
case 123:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 16;
                    var2 = var5[var2];
                    var6 = undefined;
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.measure;
                    var2 = _closure2_slot16;
                    var3 = var3.bind(var5)(var2);
                    var2 = null;
                    if(!(var2 == var3)) { _fun0021_ip = 124; continue _fun0021 }
case 125:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 49;
                    var1 = var5[var1];
                    var5 = var2.bind(var6)(var1);
                    var2 = var5.getClampedPIPPosition;
                    var1 = {};
                    var9 = _closure2_slot22;
                    var8 = var9.get;
                    var8 = var8.bind(var9)();
                    var8 = var8.pipX;
                    var1['pipX'] = var8;
                    var8 = var9.get;
                    var8 = var8.bind(var9)();
                    var8 = var8.pipY;
                    var1['pipY'] = var8;
                    var8 = var4.currentWidth;
                    var1['width'] = var8;
                    var8 = var4.currentHeight;
                    var1['height'] = var8;
                    var9 = _closure2_slot21;
                    var8 = var9.get;
                    var8 = var8.bind(var9)();
                    var1['windowDimensions'] = var8;
                    var9 = _closure2_slot17;
                    var8 = var9.get;
                    var8 = var8.bind(var9)();
                    var1['safeArea'] = var8;
                    var9 = _closure2_slot15;
                    var8 = var9.get;
                    var8 = var8.bind(var9)();
                    var8 = var8.bottom;
                    var1['bottomAvoidanceRegion'] = var8;
                    var8 = var9.get;
                    var8 = var8.bind(var9)();
                    var8 = var8.top;
                    var1['topAvoidanceRegion'] = var8;
                    var1['positionOffset'] = var6;
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.x;
                    var5 = var2.y;
                    var2 = {};
                    var2['originX'] = var1;
                    var6 = _closure2_slot18;
                    var1 = var6.get;
                    var1 = var1.bind(var6)();
                    var1 = var1 + var5;
                    var2['originY'] = var1;
                    var1 = var4.currentWidth;
                    var2['width'] = var1;
                    var1 = var4.currentHeight;
                    var2['height'] = var1;
                    _fun0021_ip = 126; continue _fun0021;
case 124:
                    var1 = {};
                    var5 = var3.pageX;
                    var1['originX'] = var5;
                    var6 = _closure2_slot18;
                    var5 = var6.get;
                    var6 = var5.bind(var6)();
                    var5 = var3.pageY;
                    var5 = var6 + var5;
                    var1['originY'] = var5;
                    var5 = var3.width;
                    var1['width'] = var5;
                    var3 = var3.height;
                    var1['height'] = var3;
                    var2 = var1;
                    _fun0021_ip = 126; continue _fun0021;
case 79:
                    var3 = _closure2_slot32;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var1 = {};
                    var3 = var4.currentOriginX;
                    var1['originX'] = var3;
                    var3 = var4.currentOriginY;
                    var1['originY'] = var3;
                    var3 = var4.currentWidth;
                    var1['width'] = var3;
                    var3 = var4.currentHeight;
                    var1['height'] = var3;
                    var2 = var1;
case 126:
                    var5 = _closure2_slot32;
                    var3 = var5.set;
                    var1 = _closure2_slot31;
                    var1 = var3.bind(var5)(var1);
                    var1 = {};
                    var3 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 40;
                    var8 = var10[var5];
                    var6 = undefined;
                    var13 = var9.bind(var6)(var8);
                    var12 = var13.withSpring;
                    var11 = var4.targetOriginX;
                    var8 = _closure2_slot5;
                    var7 = 'animate-always';
                    var11 = var12.bind(var13)(var11, var8, var7);
                    var3['originX'] = var11;
                    var11 = var10[var5];
                    var13 = var9.bind(var6)(var11);
                    var12 = var13.withSpring;
                    var11 = var4.targetOriginY;
                    var11 = var12.bind(var13)(var11, var8, var7);
                    var3['originY'] = var11;
                    var11 = var10[var5];
                    var13 = var9.bind(var6)(var11);
                    var12 = var13.withSpring;
                    var11 = var4.targetWidth;
                    var11 = var12.bind(var13)(var11, var8, var7);
                    var3['width'] = var11;
                    var5 = var10[var5];
                    var6 = var9.bind(var6)(var5);
                    var5 = var6.withSpring;
                    var4 = var4.targetHeight;
                    var4 = var5.bind(var6)(var4, var8, var7);
                    var3['height'] = var4;
                    var1['animations'] = var3;
                    var1['initialValues'] = var2;
                    var2 = function callback() {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                            var3 = _closure2_slot23;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = var3.gestureActive;
                            if(var2) { _fun0022_ip = 15; continue _fun0022 }
case 122:
                            var4 = var3.y;
                            var3 = 0;
                            var2 = var3 === var4;
case 15:
                            if(var2) { _fun0022_ip = 127; continue _fun0022 }
case 128:
                            var3 = _closure2_slot23;
                            var2 = var3.set;
                            var1 = {'gestureActive': false, 'x': 0, 'y': 0};
                            var1 = var2.bind(var3)(var1);
case 127:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1['callback'] = var2;
                    return var1;
                }
            };
            var1 = {};
            var1['wasPip'] = var23;
            var1['isPIP'] = var22;
            var26 = var13[var26];
            var26 = var2.bind(var4)(var26);
            var26 = var26.measure;
            var1['measure'] = var26;
            var1['pipContainerRef'] = var20;
            var1['scrollPosition'] = var15;
            var25 = var13[var25];
            var25 = var2.bind(var4)(var25);
            var25 = var25.getClampedPIPPosition;
            var1['getClampedPIPPosition'] = var25;
            var1['wrapperDimensions'] = var19;
            var1['windowDimensions'] = var18;
            var1['safeArea'] = var17;
            var1['pipAvoidanceSpecs'] = var16;
            var24 = var13[var24];
            var24 = var2.bind(var4)(var24);
            var24 = var24.withSpring;
            var1['withSpring'] = var24;
            var1['layoutPhysics'] = var21;
            var1['wrapperOffset'] = var14;
            var3['__closure'] = var1;
            var1 = 4693719466080.0;
            var3['__workletHash'] = var1;
            var1 = _closure1_slot55;
            var3['__initData'] = var1;
            var1 = new Array(10);
            var1[0] = var23;
            var1[1] = var22;
            var1[2] = var21;
            var1[3] = var20;
            var1[4] = var19;
            var1[5] = var18;
            var1[6] = var17;
            var1[7] = var16;
            var1[8] = var15;
            var1[9] = var14;
            var9 = var7.bind(var9)(var3, var1);
            var3 = _closure1_slot22;
            var1 = 53;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.GestureDetector;
            var1 = {};
            var1['gesture'] = var6;
            var7 = _closure1_slot22;
            var6 = _closure1_slot1;
            var5 = 41;
            var5 = var13[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var13 = var10.positionWrapper;
            var10 = new Array(3);
            var10[0] = var13;
            var10[1] = var12;
            var10[2] = var11;
            var5['style'] = var10;
            var5['layout'] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot60 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var8 = 0;
    var4 = var6[var8];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var14 = var4.StyleSheet;
    var _closure1_slot5 = var14;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.VoicePanelCTACard;
    var _closure1_slot11 = var9;
    var9 = var4.VoicePanelModes;
    var _closure1_slot12 = var9;
    var9 = var4.MODE_CHANGE_PHYSICS;
    var _closure1_slot13 = var9;
    var9 = var4.SPEAKING_PHYSICS;
    var _closure1_slot14 = var9;
    var4 = var4.VoicePanelCardItemType;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelControlsModes;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelPIPModes;
    var _closure1_slot17 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EDGE_GUTTER;
    var _closure1_slot18 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApplicationStreamStates;
    var _closure1_slot19 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot20 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.SCALE_PHYSICS;
    var _closure1_slot21 = var9;
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.jsx;
    var _closure1_slot22 = var10;
    var10 = var4.Fragment;
    var _closure1_slot23 = var10;
    var4 = var4.jsxs;
    var _closure1_slot24 = var4;
    var4 = 16;
    var4 = var6[var4];
    var11 = var13.bind(var1)(var4);
    var10 = var11.createAnimatedComponent;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Text;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot25 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.AVATAR_SIZE_MAP;
    var4 = 19;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AvatarSizes;
    var4 = var4.XXLARGE;
    var12 = var10[var4];
    var4 = {};
    var20 = var4;
    var19 = var9;
    var9 = copyDataProperties(var20, var19);
    var10 = 150;
    var9 = 'stiffness';
    var4[var9] = var10;
    var _closure1_slot26 = var4;
    var4 = {};
    var9 = 200;
    var4['duration'] = var9;
    var _closure1_slot27 = var4;
    var4 = {};
    var4['duration'] = var8;
    var _closure1_slot28 = var4;
    var4 = 0.75;
    var _closure1_slot29 = var4;
    var4 = 20;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'absolute', 'top': 0, 'left': 0, 'overflow': 'hidden'};
    var15 = 'hidden';
    var11 = 21;
    var16 = var6[var11];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BLACK;
    var10['backgroundColor'] = var16;
    var4['positionWrapper'] = var10;
    var10 = {'position': 'absolute', 'top': 4294967292, 'left': 4294967292, 'bottom': 4294967292, 'right': 4294967292, 'alignItems': 'center', 'justifyContent': 'center'};
    var16 = var6[var11];
    var16 = var13.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.PRIMARY_800;
    var10['backgroundColor'] = var16;
    var4['userRoundedCard'] = var10;
    var10 = {'position': 'absolute', 'alignItems': 'center', 'justifyContent': 'center', 'width': '100%', 'height': '100%'};
    var16 = var6[var11];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.VOICE_VIDEO_VIDEO_TILE_BACKGROUND;
    var10['backgroundColor'] = var16;
    var4['nonUserRoundedCard'] = var10;
    var10 = {};
    var19 = var14.absoluteFillObject;
    var20 = var10;
    var16 = copyDataProperties(var20, var19);
    var17 = 'black';
    var16 = 'backgroundColor';
    var10[var16] = var17;
    var4['blackBackground'] = var10;
    var10 = {'width': 200, 'marginBottom': 40};
    var4['selfStreamHeaderImage'] = var10;
    var10 = {'textAlign': 'center', 'marginTop': 4, 'marginBottom': 40};
    var4['selfStreamFocusedSubtitle'] = var10;
    var10 = {'position': 'relative', 'borderRadius': null, 'overflow': 'hidden'};
    var16 = var6[var11];
    var16 = var13.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.round;
    var10['borderRadius'] = var16;
    var4['avatarImageMaskStyles'] = var10;
    var10 = {};
    var10['width'] = var12;
    var10['height'] = var12;
    var12 = var6[var11];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var10['borderRadius'] = var12;
    var12 = 'rgba(0,0,0,0.3)';
    var10['backgroundColor'] = var12;
    var4['avatarPlaceholder'] = var10;
    var10 = {'maxWidth': 80, 'maxHeight': 80};
    var4['image'] = var10;
    var10 = {};
    var19 = var14.absoluteFillObject;
    var20 = var10;
    var12 = copyDataProperties(var20, var19);
    var12 = 'overflow';
    var10[var12] = var15;
    var4['speakingIndicatorWrapper'] = var10;
    var10 = {};
    var19 = var14.absoluteFillObject;
    var20 = var10;
    var12 = copyDataProperties(var20, var19);
    var12 = var6[var11];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var15 = var12.BLACK;
    var12 = 'borderColor';
    var10[var12] = var15;
    var4['speakingIndicatorUnderlay'] = var10;
    var10 = {};
    var19 = var14.absoluteFillObject;
    var20 = var10;
    var14 = copyDataProperties(var20, var19);
    var11 = var6[var11];
    var11 = var13.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.GREEN_360;
    var10[var12] = var11;
    var4['speakingIndicatorGreenBar'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot30 = var4;
    var4 = {};
    var8 = "function VoicePanelCardTsx1(){const{isFocused,sharedCoords}=this.__closure;return{textAlign:'center',paddingHorizontal:16,paddingVertical:isFocused?0:16,width:isFocused?'auto':sharedCoords.get().width};}";
    var4['code'] = var8;
    var _closure1_slot31 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardTsx2(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}';
    var4['code'] = var8;
    var _closure1_slot32 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardTsx3(isFocused,lastIsFocused){const{runOnJS,setIsFocused}=this.__closure;if(isFocused!==lastIsFocused){runOnJS(setIsFocused)(isFocused);}}';
    var4['code'] = var8;
    var _closure1_slot33 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var23 = var1.id;
            var _closure2_slot0 = var23;
            var20 = var1.userId;
            var _closure2_slot1 = var20;
            var22 = var1.streamId;
            var6 = var1.streamGuildId;
            var _closure2_slot2 = var6;
            var25 = var1.userNick;
            var2 = var1.isSelf;
            var7 = var1.sharedCoords;
            var19 = var1.isScrollVisible;
            var9 = var1.layout;
            var11 = _closure1_slot4;
            var10 = var11.useContext;
            var8 = _closure1_slot1;
            var15 = _closure1_slot2;
            var4 = 29;
            var5 = var15[var4];
            var4 = undefined;
            var5 = var8.bind(var4)(var5);
            var5 = var10.bind(var11)(var5);
            var27 = var5.focused;
            var _closure2_slot3 = var27;
            var12 = var5.mode;
            var5 = var5.setFocused;
            var _closure2_slot4 = var5;
            var13 = _closure1_slot0;
            var10 = 30;
            var10 = var15[var10];
            var16 = var13.bind(var4)(var10);
            var14 = var16.useStateFromStoresObject;
            var10 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = new Array(2);
            var10[0] = var20;
            var10[1] = var6;
            var6 = function() {
                var1 = {};
                var5 = _closure1_slot6;
                var2 = var5.getStreamForUser;
                var4 = _closure2_slot1;
                var3 = _closure2_slot2;
                var2 = var2.bind(var5)(var4, var3);
                var1['stream'] = var2;
                var2 = var5.getActiveStreamForUser;
                var2 = var2.bind(var5)(var4, var3);
                var1['activeStream'] = var2;
                return var1;
            };
            var10 = var14.bind(var16)(var11, var6, var10);
            var6 = var10.stream;
            var _closure2_slot5 = var6;
            var14 = var10.activeStream;
            var16 = _closure1_slot4;
            var11 = var16.useCallback;
            var10 = new Array(2);
            var10[0] = var6;
            var10[1] = var5;
            var5 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0024_ip = 129; continue _fun0024 }
case 3:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 22;
                    var2 = var6[var2];
                    var3 = undefined;
                    var8 = var4.bind(var3)(var2);
                    var7 = var8.watchStream;
                    var5 = _closure2_slot5;
                    var2 = {};
                    var9 = true;
                    var2['forceMultiple'] = var9;
                    var2 = var7.bind(var8)(var5, var2);
                    var2 = _closure2_slot4;
                    var1 = 23;
                    var1 = var6[var1];
                    var4 = var4.bind(var3)(var1);
                    var1 = var4.encodeStreamKey;
                    var1 = var1.bind(var4)(var5);
                    var1 = var2.bind(var3)(var1);
case 129:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var11.bind(var16)(var5, var10);
            var16 = _closure1_slot4;
            var5 = var16.useState;
            var10 = false;
            var17 = var5.bind(var16)(var10);
            var16 = _closure1_slot3;
            var5 = 2;
            var17 = var16.bind(var4)(var17, var5);
            var5 = 0;
            var5 = var17[var5];
            var16 = 1;
            var24 = var17[var16];
            var _closure2_slot6 = var24;
            var26 = 16;
            var16 = var15[var26];
            var18 = var13.bind(var4)(var16);
            var17 = var18.useAnimatedReaction;
            var16 = function v() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    var4 = var2 == var3;
                    var2 = undefined;
                    if(var4) { _fun0025_ip = 44; continue _fun0025 }
case 5:
                    var2 = var3.id;
case 44:
                    var1 = _closure2_slot0;
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var21 = {};
            var21['focused'] = var27;
            var21['id'] = var23;
            var16['__closure'] = var21;
            var21 = 13061544667904.0;
            var16['__workletHash'] = var21;
            var21 = _closure1_slot32;
            var16['__initData'] = var21;
            var3 = function P(arg1, arg2) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0026_ip = 56; continue _fun0026 }
case 57:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot6;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 56:
                    var1 = undefined;
                    return var1;
                }
            };
            var21 = {};
            var26 = var15[var26];
            var26 = var13.bind(var4)(var26);
            var26 = var26.runOnJS;
            var21['runOnJS'] = var26;
            var21['setIsFocused'] = var24;
            var3['__closure'] = var21;
            var21 = 8824446489251.0;
            var3['__workletHash'] = var21;
            var21 = _closure1_slot33;
            var3['__initData'] = var21;
            var3 = var17.bind(var18)(var16, var3);
            var3 = 31;
            var3 = var15[var3];
            var8 = var8.bind(var4)(var3);
            var3 = 32;
            var3 = var15[var3];
            var3 = var13.bind(var4)(var3);
            var3 = var3.MediaEngineContextTypes;
            var3 = var3.STREAM;
            var16 = var8.bind(var4)(var3, var20);
            if(var2) { _fun0023_ip = 130; continue _fun0023 }
case 131:
            var21 = null;
            if(!(var21 != var14)) { _fun0023_ip = 132; continue _fun0023 }
case 133:
            if(!(var21 == var16)) { _fun0023_ip = 134; continue _fun0023 }
case 135:
            var3 = var14.state;
            var2 = _closure1_slot19;
            var2 = var2.FAILED;
            if(!(var3 !== var2)) { _fun0023_ip = 134; continue _fun0023 }
case 136:
            var3 = var14.state;
            var2 = _closure1_slot19;
            var2 = var2.ENDED;
            if(!(var3 !== var2)) { _fun0023_ip = 137; continue _fun0023 }
case 138:
            var3 = var14.state;
            var2 = _closure1_slot19;
            var2 = var2.RECONNECTING;
            if(!(var3 !== var2)) { _fun0023_ip = 139; continue _fun0023 }
case 140:
            var3 = var14.state;
            var2 = _closure1_slot19;
            var2 = var2.PAUSED;
            var15 = null;
            if(!(var3 === var2)) { _fun0023_ip = 141; continue _fun0023 }
case 142:
            var8 = _closure1_slot22;
            var17 = _closure1_slot0;
            var26 = _closure1_slot2;
            var2 = 35;
            var2 = var26[var2];
            var2 = var17.bind(var4)(var2);
            var3 = var2.StreamTextOverlay;
            var2 = {};
            var13 = 27;
            var18 = var26[var13];
            var18 = var17.bind(var4)(var18);
            var27 = var18.intl;
            var24 = var27.string;
            var18 = var26[var13];
            var18 = var17.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.5q17w8;
            var18 = var24.bind(var27)(var18);
            var2['title'] = var18;
            var18 = var26[var13];
            var18 = var17.bind(var4)(var18);
            var24 = var18.intl;
            var18 = var24.formatToPlainString;
            var13 = var26[var13];
            var13 = var17.bind(var4)(var13);
            var13 = var13.t;
            var17 = var13.meVVlZ;
            var13 = {};
            var13['username'] = var25;
            var13 = var18.bind(var24)(var17, var13);
            var2['subtext'] = var13;
            var15 = var8.bind(var4)(var3, var2);
            _fun0023_ip = 141; continue _fun0023;
case 139:
            var8 = _closure1_slot22;
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var2 = 35;
            var2 = var25[var2];
            var2 = var24.bind(var4)(var2);
            var3 = var2.StreamTextOverlay;
            var2 = {};
            var13 = 27;
            var17 = var25[var13];
            var17 = var24.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var13 = var25[var13];
            var13 = var24.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.pdFFKy;
            var13 = var17.bind(var18)(var13);
            var2['title'] = var13;
            var15 = var8.bind(var4)(var3, var2);
case 141:
            var8 = _closure1_slot24;
            var3 = _closure1_slot23;
            var2 = {};
            var18 = _closure1_slot22;
            var17 = _closure1_slot1;
            var24 = _closure1_slot2;
            var13 = 36;
            var13 = var24[var13];
            var17 = var17.bind(var4)(var13);
            var13 = {};
            var13['layout'] = var9;
            var13['id'] = var23;
            var23 = var21 != var22;
            var21 = null;
            if(!var23) { _fun0023_ip = 143; continue _fun0023 }
case 144:
            var21 = var22;
case 143:
            var13['streamId'] = var21;
            var13['userId'] = var20;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var22 = 23;
            var22 = var21[var22];
            var23 = var20.bind(var4)(var22);
            var22 = var23.encodeStreamKey;
            var22 = var22.bind(var23)(var14);
            var13['streamKey'] = var22;
            var13['isScrollVisible'] = var19;
            var19 = 37;
            var19 = var21[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.VideoSpinnerContext;
            var19 = var19.REMOTE_STREAM;
            var13['videoSpinnerContext'] = var19;
            var13['sharedCoords'] = var7;
            var13['isCamera'] = var10;
            var20 = var14.state;
            var19 = _closure1_slot19;
            var19 = var19.PAUSED;
            var19 = var20 === var19;
            var13['paused'] = var19;
            var17 = var18.bind(var4)(var17, var13);
            var13 = new Array(2);
            var13[0] = var17;
            var13[1] = var15;
            var2['children'] = var13;
            var2 = var8.bind(var4)(var3, var2);
            return var2;
case 137:
            var8 = _closure1_slot22;
            var3 = _closure1_slot1;
            var17 = _closure1_slot2;
            var13 = 34;
            var2 = var17[var13];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['stream'] = var14;
            var15 = !var5;
            var2['removeSplashImage'] = var15;
            var15 = _closure1_slot0;
            var13 = var17[var13];
            var13 = var15.bind(var4)(var13);
            var13 = var13.VideoEmptyTypes;
            var13 = var13.STREAM_ENDED;
            var2['type'] = var13;
            var13 = _closure1_slot5;
            var13 = var13.absoluteFill;
            var2['style'] = var13;
            var2 = var8.bind(var4)(var3, var2);
            return var2;
case 134:
            var8 = _closure1_slot22;
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 34;
            var2 = var15[var13];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['avError'] = var16;
            var2['stream'] = var14;
            var14 = !var5;
            var2['removeSplashImage'] = var14;
            var14 = _closure1_slot0;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.VideoEmptyTypes;
            var13 = var13.STREAM_FAILED;
            var2['type'] = var13;
            var13 = _closure1_slot5;
            var13 = var13.absoluteFill;
            var2['style'] = var13;
            var2 = var8.bind(var4)(var3, var2);
            return var2;
case 132:
            var8 = _closure1_slot22;
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 33;
            var2 = var13[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.VoicePanelStreamPreview;
            var2 = {};
            var2['mode'] = var12;
            var2['stream'] = var6;
            var2['onPress'] = var11;
            var2['disabled'] = var10;
            var2['layout'] = var9;
            var2 = var8.bind(var4)(var3, var2);
            return var2;
case 130:
            var3 = _closure1_slot22;
            var2 = _closure1_slot58;
            var1 = {};
            var1['sharedCoords'] = var7;
            var1['stream'] = var6;
            var1['isFocused'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot34 = var4;
    var4 = {};
    var8 = "function VoicePanelCardTsx4(){const{withTiming,isRinging,CONNECTING_OPACITY,backgroundColor}=this.__closure;return{opacity:withTiming(isRinging?CONNECTING_OPACITY:1,{duration:100},'animate-always'),backgroundColor:backgroundColor};}";
    var4['code'] = var8;
    var _closure1_slot35 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardTsx5(){const{withSpring,mode,VoicePanelModes,layoutPhysics}=this.__closure;return{transform:[{scale:withSpring(mode.get()===VoicePanelModes.PIP?64/80:1,layoutPhysics)}]};}';
    var4['code'] = var8;
    var _closure1_slot36 = var4;
    var8 = var7.memo;
    var4 = function AnimatedUserCardInner(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var2 = arg1;
            var20 = var2.isRinging;
            var _closure2_slot0 = var20;
            var11 = var2.layout;
            var3 = var2.avatarURI;
            var14 = var2.avatarDecoration;
            var10 = var2.isRTCConnected;
            var13 = var2.layoutPhysics;
            var _closure2_slot1 = var13;
            var2 = _closure1_slot30;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var7 = _closure1_slot4;
            var5 = var7.useContext;
            var8 = _closure1_slot1;
            var18 = _closure1_slot2;
            var2 = 29;
            var2 = var18[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var5.bind(var7)(var2);
            var15 = var2.mode;
            var _closure2_slot2 = var15;
            var17 = _closure1_slot0;
            var7 = 38;
            var2 = var18[var7];
            var5 = var17.bind(var4)(var2);
            var2 = var5.useDominantColorFromImage;
            var19 = var2.bind(var5)(var3);
            var _closure2_slot3 = var19;
            var2 = 16;
            var5 = var18[var2];
            var12 = var17.bind(var4)(var5);
            var8 = var12.useAnimatedStyle;
            var5 = function h() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 39;
                    var4 = var4[var2];
                    var2 = undefined;
                    var7 = var5.bind(var2)(var4);
                    var6 = var7.withTiming;
                    var4 = _closure2_slot0;
                    var5 = 1;
                    if(!var4) { _fun0028_ip = 145; continue _fun0028 }
case 7:
                    var5 = _closure1_slot29;
case 145:
                    var4 = {};
                    var3 = 100;
                    var4['duration'] = var3;
                    var3 = 'animate-always';
                    var3 = var6.bind(var7)(var5, var4, var3);
                    var1['opacity'] = var3;
                    var2 = _closure2_slot3;
                    var1['backgroundColor'] = var2;
                    return var1;
                }
            };
            var16 = {};
            var21 = 39;
            var21 = var18[var21];
            var21 = var17.bind(var4)(var21);
            var21 = var21.withTiming;
            var16['withTiming'] = var21;
            var16['isRinging'] = var20;
            var20 = _closure1_slot29;
            var16['CONNECTING_OPACITY'] = var20;
            var16['backgroundColor'] = var19;
            var5['__closure'] = var16;
            var16 = 6200022645373.0;
            var5['__workletHash'] = var16;
            var16 = _closure1_slot35;
            var5['__initData'] = var16;
            var8 = var8.bind(var12)(var5);
            var2 = var18[var2];
            var5 = var17.bind(var4)(var2);
            var2 = var5.useAnimatedStyle;
            var1 = function p() {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var1 = {};
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 40;
                    var5 = var5[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.withSpring;
                    var8 = _closure2_slot2;
                    var7 = var8.get;
                    var8 = var7.bind(var8)();
                    var4 = _closure1_slot12;
                    var7 = var4.PIP;
                    var4 = 1;
                    if(!(var8 === var7)) { _fun0029_ip = 146; continue _fun0029 }
case 127:
                    var4 = 0.8;
case 146:
                    var2 = _closure2_slot1;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var16 = 40;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.withSpring;
            var12['withSpring'] = var16;
            var12['mode'] = var15;
            var15 = _closure1_slot12;
            var12['VoicePanelModes'] = var15;
            var12['layoutPhysics'] = var13;
            var1['__closure'] = var12;
            var12 = 5040632730576.0;
            var1['__workletHash'] = var12;
            var12 = _closure1_slot36;
            var1['__initData'] = var12;
            var13 = var2.bind(var5)(var1);
            var5 = null;
            var1 = var5 != var3;
            var16 = undefined;
            if(!var1) { _fun0027_ip = 147; continue _fun0027 }
case 148:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getCachedSourceFromURI;
            var16 = var1.bind(var2)(var3);
case 147:
            var3 = _closure1_slot22;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var12 = 41;
            var1 = var1[var12];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var15 = var9.userRoundedCard;
            var7 = new Array(2);
            var7[0] = var15;
            var7[1] = var8;
            var1['style'] = var7;
            var1['layout'] = var11;
            if(!(var5 != var16)) { _fun0027_ip = 149; continue _fun0027 }
case 40:
            if(!var10) { _fun0027_ip = 150; continue _fun0027 }
case 151:
            var10 = var5 != var14;
case 150:
            var8 = _closure1_slot22;
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var12];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var15 = undefined;
            if(var10) { _fun0027_ip = 152; continue _fun0027 }
case 153:
            var15 = var9.avatarImageMaskStyles;
case 152:
            var12 = new Array(2);
            var12[0] = var15;
            var12[1] = var13;
            var5['style'] = var12;
            var5['layout'] = var11;
            var13 = _closure1_slot22;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            if(var10) { _fun0027_ip = 154; continue _fun0027 }
case 136:
            var10 = 25;
            var10 = var17[var10];
            var11 = var12.bind(var4)(var10);
            var10 = {'source': null, 'resizeMode': 'stretch', 'width': 80, 'height': 80};
            var10['source'] = var16;
            var15 = var9.image;
            var10['style'] = var15;
            var10 = var13.bind(var4)(var11, var10);
            _fun0027_ip = 155; continue _fun0027;
case 154:
            var15 = 19;
            var11 = var17[var15];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['source'] = var16;
            var16 = _closure1_slot0;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.AvatarSizes;
            var15 = var15.XXLARGE;
            var11['size'] = var15;
            var11['avatarDecoration'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 155:
            var5['children'] = var10;
            var5 = var8.bind(var4)(var7, var5);
            _fun0027_ip = 156; continue _fun0027;
case 149:
            var8 = _closure1_slot22;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 24;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var9 = var9.avatarPlaceholder;
            var6['style'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 156:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot37 = var4;
    var4 = {};
    var8 = "function VoicePanelCardTsx6(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,SPEAKING_PHYSICS}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()!==VoicePanelModes.PIP&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{opacity:disable?0:1,borderRadius:withSpring(disable?0:computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf}),SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}";
    var4['code'] = var8;
    var _closure1_slot38 = var4;
    var4 = {};
    var8 = "function VoicePanelCardTsx7(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,SPEAKING_PHYSICS,speaking,roundToNearestPixel,SPEAKING_BORDER_SIZE,SPEAKING_INSET}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speaking.get()?roundToNearestPixel(SPEAKING_BORDER_SIZE+SPEAKING_INSET):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}";
    var4['code'] = var8;
    var _closure1_slot39 = var4;
    var4 = {};
    var8 = "function VoicePanelCardTsx8(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,SPEAKING_PHYSICS,speaking,SPEAKING_BORDER_SIZE}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speaking.get()?SPEAKING_BORDER_SIZE:0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}";
    var4['code'] = var8;
    var _closure1_slot40 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var5 = _closure1_slot4;
            var4 = var5.useState;
            var3 = function() {
                var3 = _closure1_slot10;
                var2 = var3.isSpeaking;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var4.bind(var5)(var3);
            var4 = _closure1_slot3;
            var5 = undefined;
            var3 = 2;
            var7 = var4.bind(var5)(var7, var3);
            var3 = 0;
            var3 = var7[var3];
            var _closure2_slot1 = var3;
            var4 = 1;
            var4 = var7[var4];
            var _closure2_slot2 = var4;
            var9 = var6.id;
            var _closure2_slot3 = var9;
            var8 = _closure1_slot4;
            var7 = var8.useEffect;
            var4 = new Array(2);
            var4[0] = var3;
            var4[1] = var9;
            var1 = function() {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0031_ip = 46; continue _fun0031 }
case 57:
                    var4 = _closure1_slot10;
                    var3 = var4.addConditionalChangeListener;
                    var2 = function() {
                        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                            var4 = _closure1_slot10;
                            var3 = var4.isSpeaking;
                            var1 = _closure2_slot3;
                            var1 = var3.bind(var4)(var1);
                            var1 = !var1;
                            if(var1) { _fun0032_ip = 55; continue _fun0032 }
case 108:
                            var4 = _closure2_slot2;
                            var3 = undefined;
                            var2 = true;
                            var2 = var4.bind(var3)(var2);
                            var1 = false;
case 55:
                            return var1;
                        }
                    };
                    var1 = false;
                    var1 = var3.bind(var4)(var2, var1);
case 46:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var7.bind(var8)(var1, var4);
            var1 = null;
            if(!var3) { _fun0030_ip = 157; continue _fun0030 }
case 158:
            var4 = _closure1_slot22;
            var3 = _closure1_slot59;
            var2 = {};
            var12 = var2;
            var11 = var6;
            var6 = copyDataProperties(var12, var11);
            var1 = var4.bind(var5)(var3, var2);
case 157:
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot41 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardTsx9(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}';
    var4['code'] = var8;
    var _closure1_slot42 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardTsx10(focusedId,previous){const{runOnJS,handleFocusedParticipantChange}=this.__closure;if(focusedId===previous)return;runOnJS(handleFocusedParticipantChange)(focusedId);}';
    var4['code'] = var8;
    var _closure1_slot43 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardTsx11(){const{mode,focused,sharedTransitionState}=this.__closure;return{mode:mode.get(),focused:focused.get(),transitionState:sharedTransitionState.get()};}';
    var4['code'] = var8;
    var _closure1_slot44 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardTsx12(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,TransitionStates,sharedVisible,isScrollVisible,runOnJS,cleanUp,id}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,focused:focused,transitionState:transitionState}=props;const isPIPMode=mode===VoicePanelModes.PIP;const manuallyFocusedId=focused===null||focused===void 0?void 0:focused.id;if(previous==null&&transitionState!==TransitionStates.YEETED){sharedVisible.set(1);}else if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1&&isScrollVisible.get()){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else if((previous===null||previous===void 0?void 0:previous.transitionState)===TransitionStates.YEETED){sharedVisible.set(1);}else if(!isPIPMode){if(manuallyFocusedId==null){sharedVisible.set(1);}else{if(manuallyFocusedId!==id){sharedVisible.set(0);}else{sharedVisible.set(1);}}}}';
    var4['code'] = var8;
    var _closure1_slot45 = var4;
    var4 = {'isSelf': false, 'hasVideo': false};
    var8 = {};
    var8['id'] = var1;
    var4['user'] = var8;
    var _closure1_slot46 = var4;
    var4 = {};
    var8 = "function layoutTransitionFunction_VoicePanelCardTsx13(values,physics,disableAnimation=false){const{withSpring}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,physics,!disableAnimation?'animate-always':'animate-never'),originY:withSpring(values.targetOriginY,physics,!disableAnimation?'animate-always':'animate-never'),width:withSpring(values.targetWidth,physics,!disableAnimation?'animate-always':'animate-never'),height:withSpring(values.targetHeight,physics,!disableAnimation?'animate-always':'animate-never')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}";
    var4['code'] = var8;
    var _closure1_slot47 = var4;
    var4 = function() {
        var1 = function layoutTransitionFunction(arg1, arg2) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var3 = arg1;
                var8 = arg2;
                var9 = arguments[2];
                var6 = undefined;
                if(!(var9 === var6)) { _fun0033_ip = 159; continue _fun0033 }
case 160:
                var9 = false;
case 159:
                var1 = {};
                var2 = {};
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var10 = 40;
                var5 = var5[var10];
                var13 = var7.bind(var6)(var5);
                var12 = var13.withSpring;
                var11 = var3.targetOriginX;
                var7 = 'animate-always';
                var5 = var7;
                if(!var9) { _fun0033_ip = 14; continue _fun0033 }
case 127:
                var5 = 'animate-never';
case 14:
                var5 = var12.bind(var13)(var11, var8, var5);
                var2['originX'] = var5;
                var11 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var10];
                var13 = var11.bind(var6)(var5);
                var12 = var13.withSpring;
                var11 = var3.targetOriginY;
                var5 = var7;
                if(!var9) { _fun0033_ip = 161; continue _fun0033 }
case 21:
                var5 = 'animate-never';
case 161:
                var5 = var12.bind(var13)(var11, var8, var5);
                var2['originY'] = var5;
                var11 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var10];
                var13 = var11.bind(var6)(var5);
                var12 = var13.withSpring;
                var11 = var3.targetWidth;
                var5 = var7;
                if(!var9) { _fun0033_ip = 162; continue _fun0033 }
case 163:
                var5 = 'animate-never';
case 162:
                var5 = var12.bind(var13)(var11, var8, var5);
                var2['width'] = var5;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var10];
                var6 = var5.bind(var6)(var4);
                var5 = var6.withSpring;
                var4 = var3.targetHeight;
                if(!var9) { _fun0033_ip = 164; continue _fun0033 }
case 165:
                var7 = 'animate-never';
case 164:
                var4 = var5.bind(var6)(var4, var8, var7);
                var2['height'] = var4;
                var1['animations'] = var2;
                var2 = {};
                var4 = var3.currentOriginX;
                var2['originX'] = var4;
                var4 = var3.currentOriginY;
                var2['originY'] = var4;
                var4 = var3.currentWidth;
                var2['width'] = var4;
                var3 = var3.currentHeight;
                var2['height'] = var3;
                var1['initialValues'] = var2;
                return var1;
            }
        };
        var3 = {};
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var4 = 40;
        var5 = var5[var4];
        var4 = undefined;
        var4 = var6.bind(var4)(var5);
        var4 = var4.withSpring;
        var3['withSpring'] = var4;
        var1['__closure'] = var3;
        var3 = 4871152530917.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot47;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot48 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardTsx14(){const{id,pipState,mode,VoicePanelModes}=this.__closure;if(id===pipState.id&&mode.get()===VoicePanelModes.PIP){return true;}return false;}';
    var4['code'] = var8;
    var _closure1_slot49 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardTsx15(){const{focused,id,mode,VoicePanelModes,scrollPosition}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id||mode.get()===VoicePanelModes.PIP?scrollPosition.get():0;}';
    var4['code'] = var8;
    var _closure1_slot50 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardTsx16(){const{connected,EDGE_GUTTER,safeArea,windowDimensions,contentDimensions,wrapperDimensions}=this.__closure;return connected.get()?Math.max(EDGE_GUTTER,safeArea.get().left,(windowDimensions.get().width-contentDimensions.get().width)/2):wrapperDimensions.get().drawerWidth/2;}';
    var4['code'] = var8;
    var _closure1_slot51 = var4;
    var4 = {};
    var8 = "function VoicePanelCardTsx17(){const{coords,focused,id,isPIP,pipState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,sharedVisible,isRTCConnected,CONNECTING_OPACITY,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,runOnJS,cleanUp,withSpring,SCALE_PHYSICS}=this.__closure;var _focused$get,_focused$get2,_focused$get3;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){width=pipState.width;height=pipState.height;const pipHeight=!pipState.showSecondaryPIP?pipState.height:pipState.containerHeight;const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x+=xOffset.get();y+=calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y+=height/4;}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?'animate-always':'animate-never',function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:width,height:height,top:y,left:x,borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};}";
    var4['code'] = var8;
    var _closure1_slot52 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardTsx18(finished){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    var4['code'] = var8;
    var _closure1_slot53 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardTsx19(){const{withSpring,sharedVisible,focused,id,CARD_SCALE_PHYSICS}=this.__closure;var _focused$get;return{transform:[{scale:withSpring(sharedVisible.get()===1||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id?1:0.8,CARD_SCALE_PHYSICS)}]};}';
    var4['code'] = var8;
    var _closure1_slot54 = var4;
    var4 = {};
    var8 = "function VoicePanelCardTsx20(values){const{wasPip,isPIP,measure,pipContainerRef,scrollPosition,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,withSpring,layoutPhysics,wrapperOffset}=this.__closure;const initialValues=function(){if(wasPip.get()&&!isPIP){const data=measure(pipContainerRef);if(data!=null){return{originX:data.pageX,originY:scrollPosition.get()+data.pageY,width:data.width,height:data.height};}const{x:x,y:y}=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:values.currentWidth,height:values.currentHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:undefined});return{originX:x,originY:scrollPosition.get()+y,width:values.currentWidth,height:values.currentHeight};}else if(!wasPip.get()&&isPIP){return{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight};}return{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight};}();wasPip.set(isPIP);return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,'animate-always'),originY:withSpring(values.targetOriginY,layoutPhysics,'animate-always'),width:withSpring(values.targetWidth,layoutPhysics,'animate-always'),height:withSpring(values.targetHeight,layoutPhysics,'animate-always')},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}}};}";
    var4['code'] = var8;
    var _closure1_slot55 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardTsx21(){const{EDGE_GUTTER,coords,scrollPosition,windowDimensions}=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;}';
    var4['code'] = var8;
    var _closure1_slot56 = var4;
    var4 = {};
    var8 = 'function layoutTransition_VoicePanelCardTsx22(values,disableAnimation=false){const{layoutTransitionFunction,physics}=this.__closure;return layoutTransitionFunction(values,physics,disableAnimation);}';
    var4['code'] = var8;
    var _closure1_slot57 = var4;
    var4 = var7.memo;
    var2 = function VoicePanelCard(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var3 = arg1;
            var1 = var3.item;
            var8 = var3.transitionState;
            var23 = var3.cleanUp;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var12 = var1.id;
            var10 = _closure1_slot4;
            var9 = var10.useContext;
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var5 = 29;
            var5 = var3[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var9.bind(var10)(var5);
            var31 = var5.channelId;
            var _closure2_slot0 = var31;
            var30 = var5.focused;
            var36 = var5.guildId;
            var26 = var5.isCall;
            var27 = var5.layoutManager;
            var16 = var5.mountedCards;
            var25 = var5.scrollPosition;
            var _closure2_slot1 = var25;
            var24 = var5.windowDimensions;
            var _closure2_slot2 = var24;
            var14 = 48;
            var5 = var3[var14];
            var5 = var6.bind(var4)(var5);
            var9 = var5.bind(var4)(var12, var31, var36);
            var5 = _closure1_slot0;
            var3 = var3[var14];
            var5 = var5.bind(var4)(var3);
            var3 = var5.isStableParticipantWithUser;
            var5 = var3.bind(var5)(var9);
            var3 = var9;
            if(var5) { _fun0034_ip = 166; continue _fun0034 }
case 23:
            var3 = _closure1_slot46;
case 166:
            var11 = var3.isSelf;
            var3 = var3.user;
            var6 = var3.id;
            _closure2_slot3 = var6;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = 30;
            var13 = var3[var10];
            var18 = var5.bind(var4)(var13);
            var17 = var18.useStateFromStores;
            var13 = _closure1_slot9;
            var15 = new Array(1);
            var15[0] = var13;
            var13 = function() {
                var2 = _closure1_slot9;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var20 = var17.bind(var18)(var15, var13);
            var3 = var3[var14];
            var5 = var5.bind(var4)(var3);
            var3 = var5.isStableUserParticipant;
            var22 = var3.bind(var5)(var9);
            if(!var22) { _fun0034_ip = 167; continue _fun0034 }
case 168:
            var22 = var9.ringing;
case 167:
            var17 = null;
            var3 = var17 != var9;
            var13 = '';
            var5 = var13;
            if(!var3) { _fun0034_ip = 169; continue _fun0034 }
case 170:
            var3 = 'user';
            var3 = var3 in var9;
            var5 = var13;
            if(!var3) { _fun0034_ip = 169; continue _fun0034 }
case 171:
            var3 = var9.user;
            var5 = var3.id;
case 169:
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var3 = 31;
            var3 = var15[var3];
            var13 = var13.bind(var4)(var3);
            var3 = var17 == var9;
            var15 = undefined;
            if(var3) { _fun0034_ip = 172; continue _fun0034 }
case 173:
            var15 = var9.type;
case 172:
            var3 = _closure1_slot20;
            var3 = var3.STREAM;
            if(!(var15 !== var3)) { _fun0034_ip = 174; continue _fun0034 }
case 175:
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = 32;
            var3 = var18[var3];
            var3 = var15.bind(var4)(var3);
            var3 = var3.MediaEngineContextTypes;
            var3 = var3.DEFAULT;
            _fun0034_ip = 176; continue _fun0034;
case 174:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 32;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.MediaEngineContextTypes;
            var3 = var15.STREAM;
case 176:
            var28 = var13.bind(var4)(var3, var5);
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var3 = 54;
            var3 = var15[var3];
            var3 = var13.bind(var4)(var3);
            var3 = var3.bind(var4)(var5);
            var13 = _closure1_slot0;
            var5 = 55;
            var5 = var15[var5];
            var15 = var13.bind(var4)(var5);
            var13 = var15.useHangStatusExperiment;
            var5 = {};
            var5['guildId'] = var36;
            var18 = 'VoicePanelCard';
            var5['location'] = var18;
            var5 = var13.bind(var15)(var5);
            var19 = var5.enableHangStatus;
            var5 = var17 == var9;
            var15 = undefined;
            if(var5) { _fun0034_ip = 177; continue _fun0034 }
case 178:
            var15 = var9.type;
case 177:
            var5 = _closure1_slot20;
            var13 = var5.USER;
            var5 = undefined;
            if(!(var15 === var13)) { _fun0034_ip = 179; continue _fun0034 }
case 180:
            var5 = var9.user;
case 179:
            _closure2_slot4 = var5;
            var21 = _closure1_slot0;
            var29 = _closure1_slot2;
            var10 = var29[var10];
            var18 = var21.bind(var4)(var10);
            var15 = var18.useStateFromStores;
            var10 = _closure1_slot7;
            var13 = new Array(2);
            var13[0] = var10;
            var10 = _closure1_slot8;
            var13[1] = var10;
            var10 = new Array(2);
            var10[0] = var31;
            var10[1] = var5;
            var5 = function() {
                var5 = _closure1_slot7;
                var4 = var5.getChannel;
                var3 = _closure2_slot0;
                var6 = var4.bind(var5)(var3);
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 56;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5._canSetVoiceChannelStatus;
                var9 = _closure1_slot8;
                var7 = _closure2_slot4;
                var8 = true;
                var11 = var5;
                var10 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
                return var1;
            };
            var18 = var15.bind(var18)(var13, var5, var10);
            var15 = 16;
            var5 = var29[var15];
            var13 = var21.bind(var4)(var5);
            var10 = var13.useSharedValue;
            var5 = 45;
            var5 = var29[var5];
            var5 = var21.bind(var4)(var5);
            var5 = var5.TransitionStates;
            var5 = var5.MOUNTED;
            if(!(var8 !== var5)) { _fun0034_ip = 181; continue _fun0034 }
case 182:
            var5 = var16.has;
            var16 = var5.bind(var16)(var12);
            var5 = 0;
            if(!var16) { _fun0034_ip = 183; continue _fun0034 }
case 181:
            var5 = 1;
case 183:
            var5 = var10.bind(var13)(var5);
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var15];
            var16 = var13.bind(var4)(var10);
            var13 = var16.useSharedValue;
            var10 = var17 != var6;
            if(!var10) { _fun0034_ip = 184; continue _fun0034 }
case 91:
            var29 = _closure1_slot10;
            var21 = var29.isSpeaking;
            var10 = var21.bind(var29)(var6);
case 184:
            var13 = var13.bind(var16)(var10);
            _closure2_slot5 = var13;
            var21 = _closure1_slot4;
            var16 = var21.useLayoutEffect;
            var10 = new Array(2);
            var10[0] = var6;
            var10[1] = var13;
            var6 = function() {
                var4 = function handleChange() {
                    _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                        var3 = _closure2_slot5;
                        var2 = var3.set;
                        var5 = _closure2_slot3;
                        var1 = null;
                        var1 = var1 != var5;
                        if(!var1) { _fun0035_ip = 48; continue _fun0035 }
case 122:
                        var6 = _closure1_slot10;
                        var5 = var6.isSpeaking;
                        var4 = _closure2_slot3;
                        var1 = var5.bind(var6)(var4);
case 48:
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot0 = var4;
                var2 = undefined;
                var2 = var4.bind(var2)();
                var3 = _closure1_slot10;
                var2 = var3.addReactChangeListener;
                var2 = var2.bind(var3)(var4);
                var1 = function() {
                    var3 = _closure1_slot10;
                    var2 = var3.removeReactChangeListener;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var6 = var16.bind(var21)(var6, var10);
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var16 = 57;
            var16 = var6[var16];
            var21 = var10.bind(var4)(var16);
            var16 = var21.useCardLayoutCoordsSubscription;
            var21 = var16.bind(var21)(var12, var27);
            _closure2_slot6 = var21;
            var6 = var6[var15];
            var15 = var10.bind(var4)(var6);
            var10 = var15.useDerivedValue;
            var6 = function Z() {
                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                    var3 = _closure1_slot18;
                    var4 = _closure2_slot6;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var1 = var1.y;
                    var3 = var3 + var1;
                    var4 = _closure2_slot1;
                    var1 = var4.get;
                    var4 = var1.bind(var4)();
                    var5 = _closure2_slot6;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var1.height;
                    var1 = var4 - var1;
                    var1 = var3 > var1;
                    if(!var1) { _fun0036_ip = 185; continue _fun0036 }
case 186:
                    var5 = _closure2_slot1;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var5 = _closure2_slot2;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var2 = var2.height;
                    var2 = var4 + var2;
                    var1 = var3 < var2;
case 185:
                    return var1;
                }
            };
            var16 = {};
            var27 = _closure1_slot18;
            var16['EDGE_GUTTER'] = var27;
            var16['coords'] = var21;
            var16['scrollPosition'] = var25;
            var16['windowDimensions'] = var24;
            var6['__closure'] = var16;
            var16 = 11720551113486.0;
            var6['__workletHash'] = var16;
            var16 = _closure1_slot56;
            var6['__initData'] = var16;
            var16 = var10.bind(var15)(var6);
            var15 = _closure1_slot4;
            var10 = var15.useMemo;
            var6 = function() {
                var4 = {};
                var1 = _closure1_slot13;
                var5 = var1.mass;
                var4['mass'] = var5;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 58;
                var8 = var7[var5];
                var3 = undefined;
                var10 = var6.bind(var3)(var8);
                var8 = var1.damping;
                var11 = 2;
                var9 = var8 - var11;
                var8 = var1.damping;
                var8 = var8 + var11;
                var8 = var10.bind(var3)(var9, var8);
                var4['damping'] = var8;
                var5 = var7[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var1.stiffness;
                var7 = 20;
                var5 = var5 - var7;
                var1 = var1.stiffness;
                var1 = var1 + var7;
                var1 = var6.bind(var3)(var5, var1);
                var4['stiffness'] = var1;
                var _closure3_slot0 = var4;
                var1 = {};
                var1['physics'] = var4;
                var2 = function() {
                    var1 = function layoutTransition(arg1) {
                        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                            var5 = arguments[1];
                            var4 = undefined;
                            if(!(var5 === var4)) { _fun0037_ip = 187; continue _fun0037 }
case 188:
                            var5 = false;
case 187:
                            var3 = _closure1_slot48;
                            var2 = _closure3_slot0;
                            var1 = arg1;
                            var1 = var3.bind(var4)(var1, var2, var5);
                            return var1;
                        }
                    };
                    var3 = {};
                    var4 = _closure1_slot48;
                    var3['layoutTransitionFunction'] = var4;
                    var4 = _closure3_slot0;
                    var3['physics'] = var4;
                    var1['__closure'] = var3;
                    var3 = 10795066381807.0;
                    var1['__workletHash'] = var3;
                    var2 = _closure1_slot57;
                    var1['__initData'] = var2;
                    return var1;
                };
                var2 = var2.bind(var3)();
                var1['layoutTransition'] = var2;
                return var1;
            };
            var2 = new Array(0);
            var2 = var10.bind(var15)(var6, var2);
            var15 = var2.physics;
            var10 = var2.layoutTransition;
            var6 = var1.type;
            var2 = _closure1_slot15;
            var2 = var2.CTA;
            if(!(var6 !== var2)) { _fun0034_ip = 189; continue _fun0034 }
case 190:
            var6 = var1.type;
            var2 = _closure1_slot15;
            var2 = var2.PARTICIPANT;
            if(!(var6 === var2)) { _fun0034_ip = 191; continue _fun0034 }
case 192:
            if(!(var17 != var9)) { _fun0034_ip = 191; continue _fun0034 }
case 193:
            var6 = var9.type;
            var2 = _closure1_slot20;
            var2 = var2.USER;
            if(!(var2 !== var6)) { _fun0034_ip = 194; continue _fun0034 }
case 195:
            var2 = _closure1_slot20;
            var2 = var2.STREAM;
            if(!(var2 !== var6)) { _fun0034_ip = 196; continue _fun0034 }
case 197:
            var2 = _closure1_slot20;
            var2 = var2.ACTIVITY;
            if(!(var2 === var6)) { _fun0034_ip = 191; continue _fun0034 }
case 198:
            var25 = _closure1_slot22;
            var6 = _closure1_slot1;
            var24 = _closure1_slot2;
            var2 = 62;
            var2 = var24[var2];
            var24 = var6.bind(var4)(var2);
            var6 = {};
            var6['sharedVisible'] = var5;
            var2 = var9.applicationId;
            var6['applicationId'] = var2;
            var6['layout'] = var10;
            var2 = var9.id;
            var6 = var25.bind(var4)(var24, var6, var2);
            _fun0034_ip = 199; continue _fun0034;
case 196:
            var33 = var9.user;
            var32 = var9.id;
            var31 = var9.streamGuildId;
            var29 = var9.streamId;
            var27 = var9.userNick;
            var25 = _closure1_slot22;
            var24 = _closure1_slot34;
            var2 = {};
            var33 = var33.id;
            var2['userId'] = var33;
            var2['id'] = var32;
            var2['streamGuildId'] = var31;
            var2['streamId'] = var29;
            var2['userNick'] = var27;
            var2['isSelf'] = var11;
            var2['sharedCoords'] = var21;
            var2['isScrollVisible'] = var16;
            var2['layout'] = var10;
            var6 = var25.bind(var4)(var24, var2);
            _fun0034_ip = 199; continue _fun0034;
case 194:
            var29 = var9.id;
            var33 = var9.streamId;
            var27 = var9.user;
            var31 = var9.hasVideo;
            var2 = var9.canRenderVideo;
            if(!var31) { _fun0034_ip = 200; continue _fun0034 }
case 201:
            if(!var20) { _fun0034_ip = 200; continue _fun0034 }
case 202:
            if(var2) { _fun0034_ip = 203; continue _fun0034 }
case 200:
            var25 = _closure1_slot22;
            var24 = _closure1_slot37;
            var2 = {};
            var2['isRTCConnected'] = var20;
            var2['isRinging'] = var22;
            var35 = var27.getAvatarURL;
            var34 = 80;
            var32 = false;
            var32 = var35.bind(var27)(var36, var34, var32);
            var2['avatarURI'] = var32;
            var34 = var9.userAvatarDecoration;
            var35 = var17 != var34;
            var32 = undefined;
            if(!var35) { _fun0034_ip = 204; continue _fun0034 }
case 205:
            var32 = var34;
case 204:
            var2['avatarDecoration'] = var32;
            var2['layout'] = var10;
            var2['layoutPhysics'] = var15;
            var2 = var25.bind(var4)(var24, var2);
            _fun0034_ip = 206; continue _fun0034;
case 203:
            if(!(var17 != var28)) { _fun0034_ip = 207; continue _fun0034 }
case 208:
            if(!(var17 != var3)) { _fun0034_ip = 209; continue _fun0034 }
case 207:
            var25 = _closure1_slot22;
            var24 = _closure1_slot1;
            var32 = _closure1_slot2;
            var3 = 36;
            var3 = var32[var3];
            var24 = var24.bind(var4)(var3);
            var3 = {};
            var3['id'] = var29;
            var32 = var27.id;
            var3['userId'] = var32;
            var34 = var17 != var33;
            var32 = null;
            if(!var34) { _fun0034_ip = 210; continue _fun0034 }
case 211:
            var32 = var33;
case 210:
            var3['streamId'] = var32;
            var3['isScrollVisible'] = var16;
            if(!var11) { _fun0034_ip = 212; continue _fun0034 }
case 213:
            if(var31) { _fun0034_ip = 214; continue _fun0034 }
case 212:
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var31 = 37;
            var31 = var33[var31];
            var31 = var32.bind(var4)(var31);
            var31 = var31.VideoSpinnerContext;
            var31 = var31.REMOTE_VIDEO;
            _fun0034_ip = 215; continue _fun0034;
case 214:
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var32 = 37;
            var32 = var34[var32];
            var32 = var33.bind(var4)(var32);
            var32 = var32.VideoSpinnerContext;
            var31 = var32.SELF_VIDEO;
case 215:
            var3['videoSpinnerContext'] = var31;
            var3['sharedCoords'] = var21;
            var31 = true;
            var3['isCamera'] = var31;
            if(!var26) { _fun0034_ip = 216; continue _fun0034 }
case 217:
            var26 = !var11;
case 216:
            var3['focusOnReady'] = var26;
            var3['layout'] = var10;
            var3 = var25.bind(var4)(var24, var3);
            _fun0034_ip = 218; continue _fun0034;
case 209:
            var26 = _closure1_slot22;
            var25 = _closure1_slot1;
            var31 = _closure1_slot2;
            var24 = 61;
            var24 = var31[var24];
            var25 = var25.bind(var4)(var24);
            var24 = {};
            var24['avError'] = var28;
            var28 = var30.get;
            var30 = var28.bind(var30)();
            var31 = var17 == var30;
            var28 = undefined;
            if(var31) { _fun0034_ip = 219; continue _fun0034 }
case 220:
            var28 = var30.id;
case 219:
            var28 = var28 !== var29;
            var24['removeSplashImage'] = var28;
            var27 = var27.id;
            var24['userId'] = var27;
            var27 = _closure1_slot5;
            var27 = var27.absoluteFill;
            var24['style'] = var27;
            var3 = var26.bind(var4)(var25, var24);
case 218:
            var2 = var3;
case 206:
            var6 = var2;
            _fun0034_ip = 199; continue _fun0034;
case 189:
            var2 = var1.id;
            var1 = _closure1_slot11;
            var1 = var1.NO_VIDEO_PARTICIPANTS;
            if(!(var1 !== var2)) { _fun0034_ip = 221; continue _fun0034 }
case 222:
            var1 = _closure1_slot11;
            var1 = var1.CALLER_DISCONNECTED;
            if(!(var1 !== var2)) { _fun0034_ip = 223; continue _fun0034 }
case 191:
            var3 = _closure1_slot22;
            var2 = _closure1_slot37;
            var1 = {};
            var1['isRinging'] = var22;
            var1['avatarURI'] = var4;
            var1['avatarDecoration'] = var4;
            var1['layout'] = var10;
            var1['isRTCConnected'] = var20;
            var1['layoutPhysics'] = var15;
            var6 = var3.bind(var4)(var2, var1);
            _fun0034_ip = 199; continue _fun0034;
case 223:
            var3 = _closure1_slot22;
            var2 = _closure1_slot1;
            var24 = _closure1_slot2;
            var1 = 60;
            var1 = var24[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = var3.bind(var4)(var2, var1);
            _fun0034_ip = 199; continue _fun0034;
case 221:
            var3 = _closure1_slot22;
            var2 = _closure1_slot1;
            var24 = _closure1_slot2;
            var1 = 59;
            var1 = var24[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = var3.bind(var4)(var2, var1);
case 199:
            var3 = _closure1_slot24;
            var2 = _closure1_slot60;
            var1 = {};
            var1['cleanUp'] = var23;
            var1['coords'] = var21;
            var1['id'] = var12;
            var1['isRTCConnected'] = var20;
            var1['isScrollVisible'] = var16;
            var1['layoutPhysics'] = var15;
            var1['transitionState'] = var8;
            var1['sharedVisible'] = var5;
            var5 = new Array(3);
            var5[0] = var6;
            var6 = var17 != var9;
            if(!var6) { _fun0034_ip = 224; continue _fun0034 }
case 225:
            var16 = _closure1_slot22;
            var15 = _closure1_slot1;
            var21 = _closure1_slot2;
            var8 = 63;
            var8 = var21[var8];
            var15 = var15.bind(var4)(var8);
            var8 = {};
            var8['isRinging'] = var22;
            var8['participant'] = var9;
            var22 = _closure1_slot0;
            var21 = var21[var14];
            var22 = var22.bind(var4)(var21);
            var21 = var22.isStableParticipantWithUser;
            var22 = var21.bind(var22)(var9);
            var21 = undefined;
            if(!var22) { _fun0034_ip = 226; continue _fun0034 }
case 227:
            var21 = var9.userNick;
case 226:
            var8['label'] = var21;
            var8['layout'] = var10;
            var17 = var17 == var9;
            var21 = undefined;
            if(var17) { _fun0034_ip = 228; continue _fun0034 }
case 229:
            var21 = var9.type;
case 228:
            var17 = _closure1_slot20;
            var17 = var17.USER;
            var17 = var21 === var17;
            if(!var17) { _fun0034_ip = 230; continue _fun0034 }
case 231:
            var17 = var20;
case 230:
            if(!var17) { _fun0034_ip = 232; continue _fun0034 }
case 233:
            var17 = var19;
case 232:
            if(!var17) { _fun0034_ip = 234; continue _fun0034 }
case 235:
            var17 = var18;
case 234:
            var8['showHangStatus'] = var17;
            var8['speaking'] = var13;
            var6 = var16.bind(var4)(var15, var8);
case 224:
            var5[1] = var6;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var14];
            var8 = var8.bind(var4)(var6);
            var6 = var8.isStableParticipantWithUser;
            var6 = var6.bind(var8)(var9);
            if(!var6) { _fun0034_ip = 236; continue _fun0034 }
case 237:
            var9 = _closure1_slot22;
            var8 = _closure1_slot41;
            var7 = {};
            var7['speaking'] = var13;
            var7['id'] = var12;
            var7['isSelf'] = var11;
            var7['layout'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 236:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 64;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/card/VoicePanelCard.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
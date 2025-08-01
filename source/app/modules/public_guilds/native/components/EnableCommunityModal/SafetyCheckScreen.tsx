// app/modules/public_guilds/native/components/EnableCommunityModal/SafetyCheckScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Image;
    var _closure1_slot5 = var8;
    var8 = var4.View;
    var _closure1_slot6 = var8;
    var4 = var4.StyleSheet;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.VerificationLevels;
    var _closure1_slot9 = var7;
    var4 = var4.GuildExplicitContentFilterTypes;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = function showRequirementSatisfiedToast(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            if(!var1) { _fun0001_ip = 41; continue _fun0001 }
 6:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.communityRequirementSatisfied;
            var1 = var1.bind(var2)();
 41:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/public_guilds/native/components/EnableCommunityModal/SafetyCheckScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SafetyCheckScreen() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var1 = var4.useEnableCommunitySharedStyles;
            var11 = var1.bind(var4)();
            var1 = 8;
            var1 = var3[var1];
            var6 = var2.bind(var5)(var1);
            var4 = var6.useStateFromStoresObject;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getProps;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var4.bind(var6)(var2, var1);
            var22 = var1.guild;
            var _closure2_slot0 = var22;
            var2 = _closure1_slot1;
            var1 = 9;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var10 = var1.bind(var5)();
            var4 = _closure1_slot4;
            var3 = var4.useState;
            var1 = null;
            var6 = var1 == var22;
            var2 = undefined;
            if(var6) { _fun0002_ip = 135; continue _fun0002 }
 129:
            var2 = var22.verificationLevel;
 135:
            if(!(var1 == var2)) { _fun0002_ip = 149; continue _fun0002 }
 139:
            var6 = _closure1_slot9;
            var2 = var6.NONE;
 149:
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot3;
            var7 = 1;
            var2 = var2.bind(var5)(var3, var7);
            var3 = 0;
            var4 = var2[var3];
            var _closure2_slot1 = var4;
            var9 = _closure1_slot4;
            var6 = var9.useState;
            var12 = var1 == var22;
            var2 = undefined;
            if(var12) { _fun0002_ip = 201; continue _fun0002 }
 195:
            var2 = var22.explicitContentFilter;
 201:
            if(!(var1 == var2)) { _fun0002_ip = 215; continue _fun0002 }
 205:
            var12 = _closure1_slot10;
            var2 = var12.ALL_MEMBERS;
 215:
            var6 = var6.bind(var9)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var5)(var6, var7);
            var3 = var2[var3];
            var _closure2_slot2 = var3;
            var2 = _closure1_slot9;
            var2 = var2.NONE;
            var21 = var4 !== var2;
            var _closure2_slot3 = var21;
            var2 = _closure1_slot10;
            var2 = var2.ALL_MEMBERS;
            var20 = var3 === var2;
            var _closure2_slot4 = var20;
            var2 = var1 == var22;
            var1 = null;
            if(var2) { _fun0002_ip = 1439; continue _fun0002 }
 286:
            var4 = _closure1_slot12;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 10;
            var2 = var9[var6];
            var2 = var7.bind(var5)(var2);
            var3 = var2.EnableCommunityModalScreen;
            var2 = {};
            var6 = var9[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.EnableCommunityModalSteps;
            var6 = var6.STEP_1;
            var2['currentStep'] = var6;
            var7 = var22.explicitContentFilter;
            var6 = _closure1_slot10;
            var6 = var6.ALL_MEMBERS;
            var6 = var7 !== var6;
            if(var6) { _fun0002_ip = 387; continue _fun0002 }
 367:
            var9 = var22.verificationLevel;
            var7 = _closure1_slot9;
            var7 = var7.NONE;
            var6 = var9 === var7;
 387:
            var2['disableNextStep'] = var6;
            var18 = _closure1_slot12;
            var17 = _closure1_slot6;
            var6 = {};
            var7 = var11.content;
            var6['style'] = var7;
            var12 = _closure1_slot11;
            var9 = _closure1_slot5;
            var7 = {};
            var13 = 'contain';
            var7['resizeMode'] = var13;
            var10 = var10.safetyCheck;
            var7['source'] = var10;
            var7 = var12.bind(var5)(var9, var7);
            var9 = new Array(3);
            var9[0] = var7;
            var25 = _closure1_slot0;
            var19 = _closure1_slot2;
            var7 = 11;
            var10 = var19[var7];
            var10 = var25.bind(var5)(var10);
            var13 = var10.LegacyText;
            var10 = {};
            var14 = var11.header;
            var10['style'] = var14;
            var14 = 12;
            var15 = var19[var14];
            var15 = var25.bind(var5)(var15);
            var23 = var15.intl;
            var16 = var23.string;
            var15 = var19[var14];
            var15 = var25.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.QrjLYm;
            var15 = var16.bind(var23)(var15);
            var10['children'] = var15;
            var10 = var12.bind(var5)(var13, var10);
            var9[1] = var10;
            var10 = var19[var7];
            var10 = var25.bind(var5)(var10);
            var13 = var10.LegacyText;
            var10 = {};
            var15 = var11.description;
            var10['style'] = var15;
            var15 = var19[var14];
            var15 = var25.bind(var5)(var15);
            var23 = var15.intl;
            var16 = var23.string;
            var15 = var19[var14];
            var15 = var25.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.i1STws;
            var15 = var16.bind(var23)(var15);
            var10['children'] = var15;
            var10 = var12.bind(var5)(var13, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var9 = var18.bind(var5)(var17, var6);
            var6 = new Array(5);
            var6[0] = var9;
            var23 = 13;
            var9 = var19[var23];
            var9 = var25.bind(var5)(var9);
            var10 = var9.FormSection;
            var9 = {};
            var13 = var19[var23];
            var13 = var25.bind(var5)(var13);
            var15 = var13.FormRow;
            var13 = {};
            var16 = var19[var14];
            var16 = var25.bind(var5)(var16);
            var27 = var16.intl;
            var26 = var27.string;
            var16 = var19[var14];
            var16 = var25.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.rkA56+;
            var16 = var26.bind(var27)(var16);
            var13['label'] = var16;
            var16 = {};
            var26 = var11.formSwitchWrapper;
            var16['style'] = var26;
            var19 = var19[var23];
            var19 = var25.bind(var5)(var19);
            var25 = var19.FormSwitch;
            var19 = {};
            var27 = var22.verificationLevel;
            var26 = _closure1_slot9;
            var26 = var26.NONE;
            var26 = var27 !== var26;
            var19['value'] = var26;
            var19['disabled'] = var21;
            var26 = function onValueChange(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    if(!var1) { _fun0003_ip = 36; continue _fun0003 }
 6:
                    var2 = _closure2_slot0;
                    var3 = var2.verificationLevel;
                    var2 = _closure1_slot9;
                    var2 = var2.LOW;
                    if(!(!(var3 < var2))) { _fun0003_ip = 91; continue _fun0003 }
 36:
                    if(var1) { _fun0003_ip = 141; continue _fun0003 }
 39:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.updateGuild;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var1['verificationLevel'] = var5;
                    var1 = var2.bind(var3)(var1);
                    _fun0003_ip = 141; continue _fun0003;
 91:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.updateGuild;
                    var1 = {};
                    var4 = _closure1_slot9;
                    var4 = var4.LOW;
                    var1['verificationLevel'] = var4;
                    var1 = var2.bind(var3)(var1);
 141:
                    var1 = undefined;
                    return var1;
                }
            };
            var19['onValueChange'] = var26;
            var25 = var12.bind(var5)(var25, var19);
            var19 = new Array(2);
            var19[0] = var25;
            if(!var21) { _fun0002_ip = 904; continue _fun0002 }
 833:
            var27 = _closure1_slot11;
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var25 = 15;
            var25 = var28[var25];
            var25 = var26.bind(var5)(var25);
            var26 = var25.PressableOpacity;
            var25 = {};
            var28 = 'button';
            var25['accessibilityRole'] = var28;
            var28 = _closure1_slot7;
            var28 = var28.absoluteFill;
            var25['style'] = var28;
            var28 = function onPress() {
                var3 = _closure1_slot13;
                var2 = _closure2_slot3;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = true;
                return var1;
            };
            var25['onPress'] = var28;
            var21 = var27.bind(var5)(var26, var25);
 904:
            var19[1] = var21;
            var16['children'] = var19;
            var16 = var18.bind(var5)(var17, var16);
            var13['trailing'] = var16;
            var13 = var12.bind(var5)(var15, var13);
            var9['children'] = var13;
            var9 = var12.bind(var5)(var10, var9);
            var6[1] = var9;
            var12 = _closure1_slot11;
            var21 = _closure1_slot0;
            var19 = _closure1_slot2;
            var9 = var19[var7];
            var9 = var21.bind(var5)(var9);
            var10 = var9.LegacyText;
            var9 = {};
            var13 = var11.formHint;
            var9['style'] = var13;
            var13 = var19[var14];
            var13 = var21.bind(var5)(var13);
            var16 = var13.intl;
            var15 = var16.string;
            var13 = var19[var14];
            var13 = var21.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.fHiGAw;
            var13 = var15.bind(var16)(var13);
            var9['children'] = var13;
            var9 = var12.bind(var5)(var10, var9);
            var6[2] = var9;
            var9 = var19[var23];
            var9 = var21.bind(var5)(var9);
            var10 = var9.FormSection;
            var9 = {};
            var13 = var19[var23];
            var13 = var21.bind(var5)(var13);
            var15 = var13.FormRow;
            var13 = {};
            var16 = var19[var14];
            var16 = var21.bind(var5)(var16);
            var18 = var16.intl;
            var17 = var18.string;
            var16 = var19[var14];
            var16 = var21.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.zOuzl5;
            var16 = var17.bind(var18)(var16);
            var13['label'] = var16;
            var18 = _closure1_slot12;
            var17 = _closure1_slot6;
            var16 = {};
            var25 = var11.formSwitchWrapper;
            var16['style'] = var25;
            var19 = var19[var23];
            var19 = var21.bind(var5)(var19);
            var21 = var19.FormSwitch;
            var19 = {};
            var23 = var22.explicitContentFilter;
            var22 = _closure1_slot10;
            var22 = var22.ALL_MEMBERS;
            var22 = var23 === var22;
            var19['value'] = var22;
            var19['disabled'] = var20;
            var22 = function onValueChange(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    if(!var1) { _fun0004_ip = 36; continue _fun0004 }
 6:
                    var2 = _closure2_slot0;
                    var3 = var2.explicitContentFilter;
                    var2 = _closure1_slot10;
                    var2 = var2.ALL_MEMBERS;
                    if(!(!(var3 < var2))) { _fun0004_ip = 91; continue _fun0004 }
 36:
                    if(var1) { _fun0004_ip = 141; continue _fun0004 }
 39:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.updateGuild;
                    var1 = {};
                    var5 = _closure2_slot2;
                    var1['explicitContentFilter'] = var5;
                    var1 = var2.bind(var3)(var1);
                    _fun0004_ip = 141; continue _fun0004;
 91:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.updateGuild;
                    var1 = {};
                    var4 = _closure1_slot10;
                    var4 = var4.ALL_MEMBERS;
                    var1['explicitContentFilter'] = var4;
                    var1 = var2.bind(var3)(var1);
 141:
                    var1 = undefined;
                    return var1;
                }
            };
            var19['onValueChange'] = var22;
            var21 = var12.bind(var5)(var21, var19);
            var19 = new Array(2);
            var19[0] = var21;
            if(!var20) { _fun0002_ip = 1291; continue _fun0002 }
 1220:
            var23 = _closure1_slot11;
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 15;
            var21 = var25[var21];
            var21 = var22.bind(var5)(var21);
            var22 = var21.PressableOpacity;
            var21 = {};
            var25 = 'button';
            var21['accessibilityRole'] = var25;
            var25 = _closure1_slot7;
            var25 = var25.absoluteFill;
            var21['style'] = var25;
            var24 = function onPress() {
                var3 = _closure1_slot13;
                var2 = _closure2_slot4;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = true;
                return var1;
            };
            var21['onPress'] = var24;
            var20 = var23.bind(var5)(var22, var21);
 1291:
            var19[1] = var20;
            var16['children'] = var19;
            var16 = var18.bind(var5)(var17, var16);
            var13['trailing'] = var16;
            var13 = var12.bind(var5)(var15, var13);
            var9['children'] = var13;
            var9 = var12.bind(var5)(var10, var9);
            var6[3] = var9;
            var9 = _closure1_slot11;
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = var10[var7];
            var7 = var13.bind(var5)(var7);
            var8 = var7.LegacyText;
            var7 = {};
            var11 = var11.formHint;
            var7['style'] = var11;
            var11 = var10[var14];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var10[var14];
            var10 = var13.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.b0MaDQ;
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[4] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1439:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
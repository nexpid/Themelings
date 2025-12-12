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
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.VerificationLevels;
    var _closure1_slot8 = var7;
    var4 = var4.GuildExplicitContentFilterTypes;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/public_guilds/native/components/EnableCommunityModal/SafetyCheckScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SafetyCheckScreen() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var1 = var4.useEnableCommunitySharedStyles;
            var11 = var1.bind(var4)();
            var1 = 7;
            var1 = var3[var1];
            var6 = var2.bind(var5)(var1);
            var4 = var6.useStateFromStoresObject;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getProps;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var4.bind(var6)(var2, var1);
            var22 = var1.guild;
            var _closure2_slot0 = var22;
            var2 = _closure1_slot1;
            var1 = 8;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var13 = var1.bind(var5)();
            var4 = _closure1_slot4;
            var3 = var4.useState;
            var1 = null;
            var6 = var1 == var22;
            var2 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var22.verificationLevel;
case 2:
            if(!(var1 == var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot8;
            var2 = var6.NONE;
case 4:
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot3;
            var7 = 1;
            var2 = var2.bind(var5)(var3, var7);
            var3 = 0;
            var4 = var2[var3];
            var _closure2_slot1 = var4;
            var8 = _closure1_slot4;
            var6 = var8.useState;
            var9 = var1 == var22;
            var2 = undefined;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var22.explicitContentFilter;
case 6:
            if(!(var1 == var2)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = _closure1_slot9;
            var2 = var9.ALL_MEMBERS;
case 8:
            var6 = var6.bind(var8)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var5)(var6, var7);
            var3 = var2[var3];
            var _closure2_slot2 = var3;
            var2 = _closure1_slot8;
            var2 = var2.NONE;
            var26 = var4 !== var2;
            var2 = _closure1_slot9;
            var2 = var2.ALL_MEMBERS;
            var20 = var3 === var2;
            var2 = var1 == var22;
            var1 = null;
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = _closure1_slot11;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 9;
            var2 = var8[var6];
            var2 = var7.bind(var5)(var2);
            var3 = var2.EnableCommunityModalScreen;
            var2 = {};
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.EnableCommunityModalSteps;
            var6 = var6.STEP_1;
            var2['currentStep'] = var6;
            var7 = var22.explicitContentFilter;
            var6 = _closure1_slot9;
            var6 = var6.ALL_MEMBERS;
            var6 = var7 !== var6;
            if(var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = var22.verificationLevel;
            var7 = _closure1_slot8;
            var7 = var7.NONE;
            var6 = var8 === var7;
case 12:
            var2['disableNextStep'] = var6;
            var12 = _closure1_slot11;
            var8 = _closure1_slot6;
            var6 = {};
            var7 = var11.content;
            var6['style'] = var7;
            var9 = _closure1_slot10;
            var10 = _closure1_slot5;
            var7 = {};
            var14 = 'contain';
            var7['resizeMode'] = var14;
            var13 = var13.safetyCheck;
            var7['source'] = var13;
            var7 = var9.bind(var5)(var10, var7);
            var15 = new Array(3);
            var15[0] = var7;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 10;
            var10 = var14[var7];
            var10 = var13.bind(var5)(var10);
            var17 = var10.LegacyText;
            var16 = {};
            var10 = var11.header;
            var16['style'] = var10;
            var10 = 11;
            var18 = var14[var10];
            var18 = var13.bind(var5)(var18);
            var24 = var18.intl;
            var23 = var24.string;
            var18 = var14[var10];
            var18 = var13.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.QrjLYl;
            var18 = var23.bind(var24)(var18);
            var16['children'] = var18;
            var16 = var9.bind(var5)(var17, var16);
            var15[1] = var16;
            var16 = var14[var7];
            var16 = var13.bind(var5)(var16);
            var17 = var16.LegacyText;
            var16 = {};
            var18 = var11.description;
            var16['style'] = var18;
            var18 = var14[var10];
            var18 = var13.bind(var5)(var18);
            var24 = var18.intl;
            var23 = var24.string;
            var18 = var14[var10];
            var18 = var13.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.i1STwu;
            var18 = var23.bind(var24)(var18);
            var16['children'] = var18;
            var16 = var9.bind(var5)(var17, var16);
            var15[2] = var16;
            var6['children'] = var15;
            var8 = var12.bind(var5)(var8, var6);
            var6 = new Array(5);
            var6[0] = var8;
            var17 = 12;
            var8 = var14[var17];
            var8 = var13.bind(var5)(var8);
            var12 = var8.FormSection;
            var8 = {};
            var16 = _closure1_slot1;
            var15 = 13;
            var18 = var14[var15];
            var23 = var16.bind(var5)(var18);
            var18 = {};
            var18['formSwitchDisabled'] = var26;
            var24 = var14[var17];
            var24 = var13.bind(var5)(var24);
            var25 = var24.FormSwitchRow;
            var24 = {};
            var27 = var14[var10];
            var27 = var13.bind(var5)(var27);
            var29 = var27.intl;
            var28 = var29.string;
            var27 = var14[var10];
            var27 = var13.bind(var5)(var27);
            var27 = var27.t;
            var27 = var27.rkA56+;
            var27 = var28.bind(var29)(var27);
            var24['label'] = var27;
            var28 = var22.verificationLevel;
            var27 = _closure1_slot8;
            var27 = var27.NONE;
            var27 = var28 !== var27;
            var24['value'] = var27;
            var24['disabled'] = var26;
            var26 = function onValueChange(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    if(!var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var2 = _closure2_slot0;
                    var3 = var2.verificationLevel;
                    var2 = _closure1_slot8;
                    var2 = var2.LOW;
                    if(!(!(var3 < var2))) { _fun0002_ip = 16; continue _fun0002 }
case 14:
                    if(var1) { _fun0002_ip = 17; continue _fun0002 }
case 18:
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
                    _fun0002_ip = 17; continue _fun0002;
case 16:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.updateGuild;
                    var1 = {};
                    var4 = _closure1_slot8;
                    var4 = var4.LOW;
                    var1['verificationLevel'] = var4;
                    var1 = var2.bind(var3)(var1);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var24['onValueChange'] = var26;
            var24 = var9.bind(var5)(var25, var24);
            var18['children'] = var24;
            var18 = var9.bind(var5)(var23, var18);
            var8['children'] = var18;
            var8 = var9.bind(var5)(var12, var8);
            var6[1] = var8;
            var8 = var14[var7];
            var8 = var13.bind(var5)(var8);
            var12 = var8.LegacyText;
            var8 = {};
            var18 = var11.formHint;
            var8['style'] = var18;
            var18 = var14[var10];
            var18 = var13.bind(var5)(var18);
            var24 = var18.intl;
            var23 = var24.string;
            var18 = var14[var10];
            var18 = var13.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.fHiGA0;
            var18 = var23.bind(var24)(var18);
            var8['children'] = var18;
            var8 = var9.bind(var5)(var12, var8);
            var6[2] = var8;
            var8 = var14[var17];
            var8 = var13.bind(var5)(var8);
            var12 = var8.FormSection;
            var8 = {};
            var15 = var14[var15];
            var16 = var16.bind(var5)(var15);
            var15 = {};
            var15['formSwitchDisabled'] = var20;
            var17 = var14[var17];
            var17 = var13.bind(var5)(var17);
            var18 = var17.FormSwitchRow;
            var17 = {};
            var23 = var14[var10];
            var23 = var13.bind(var5)(var23);
            var25 = var23.intl;
            var24 = var25.string;
            var23 = var14[var10];
            var23 = var13.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.zOuzl7;
            var23 = var24.bind(var25)(var23);
            var17['label'] = var23;
            var22 = var22.explicitContentFilter;
            var21 = _closure1_slot9;
            var21 = var21.ALL_MEMBERS;
            var21 = var22 === var21;
            var17['value'] = var21;
            var17['disabled'] = var20;
            var19 = function onValueChange(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var2 = _closure2_slot0;
                    var3 = var2.explicitContentFilter;
                    var2 = _closure1_slot9;
                    var2 = var2.ALL_MEMBERS;
                    if(!(!(var3 < var2))) { _fun0003_ip = 16; continue _fun0003 }
case 14:
                    if(var1) { _fun0003_ip = 17; continue _fun0003 }
case 18:
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
                    _fun0003_ip = 17; continue _fun0003;
case 16:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.updateGuild;
                    var1 = {};
                    var4 = _closure1_slot9;
                    var4 = var4.ALL_MEMBERS;
                    var1['explicitContentFilter'] = var4;
                    var1 = var2.bind(var3)(var1);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var17['onValueChange'] = var19;
            var17 = var9.bind(var5)(var18, var17);
            var15['children'] = var17;
            var15 = var9.bind(var5)(var16, var15);
            var8['children'] = var15;
            var8 = var9.bind(var5)(var12, var8);
            var6[3] = var8;
            var7 = var14[var7];
            var7 = var13.bind(var5)(var7);
            var8 = var7.LegacyText;
            var7 = {};
            var11 = var11.formHint;
            var7['style'] = var11;
            var11 = var14[var10];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.b0MaDV;
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[4] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
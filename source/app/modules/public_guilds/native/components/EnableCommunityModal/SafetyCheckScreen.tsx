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
    var4 = var4.TABLE_ROW_PADDING;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 18;
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
            var1 = 7;
            var1 = var3[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var1 = var4.useEnableCommunitySharedStyles;
            var12 = var1.bind(var4)();
            var1 = 8;
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
            var21 = var1.guild;
            var _closure2_slot0 = var21;
            var2 = _closure1_slot1;
            var1 = 9;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var11 = var1.bind(var5)();
            var4 = _closure1_slot4;
            var3 = var4.useState;
            var1 = null;
            var6 = var1 == var21;
            var2 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var21.verificationLevel;
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
            var9 = var1 == var21;
            var2 = undefined;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var21.explicitContentFilter;
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
            var28 = var4 !== var2;
            var2 = _closure1_slot9;
            var2 = var2.ALL_MEMBERS;
            var19 = var3 === var2;
            var2 = var1 == var21;
            var1 = null;
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = _closure1_slot12;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 10;
            var2 = var8[var6];
            var2 = var7.bind(var5)(var2);
            var3 = var2.EnableCommunityModalScreen;
            var2 = {};
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.EnableCommunityModalSteps;
            var6 = var6.STEP_1;
            var2['currentStep'] = var6;
            var7 = var21.explicitContentFilter;
            var6 = _closure1_slot9;
            var6 = var6.ALL_MEMBERS;
            var6 = var7 !== var6;
            if(var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = var21.verificationLevel;
            var7 = _closure1_slot8;
            var7 = var7.NONE;
            var6 = var8 === var7;
case 12:
            var2['disableNextStep'] = var6;
            var9 = _closure1_slot12;
            var7 = _closure1_slot6;
            var6 = {};
            var8 = var12.content;
            var6['style'] = var8;
            var13 = _closure1_slot11;
            var10 = _closure1_slot5;
            var8 = {};
            var14 = 'contain';
            var8['resizeMode'] = var14;
            var11 = var11.safetyCheck;
            var8['source'] = var11;
            var10 = var13.bind(var5)(var10, var8);
            var8 = new Array(3);
            var8[0] = var10;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var10 = 11;
            var11 = var26[var10];
            var11 = var25.bind(var5)(var11);
            var14 = var11.LegacyText;
            var11 = {};
            var15 = var12.header;
            var11['style'] = var15;
            var22 = 12;
            var15 = var26[var22];
            var15 = var25.bind(var5)(var15);
            var17 = var15.intl;
            var16 = var17.string;
            var15 = var26[var22];
            var15 = var25.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.QrjLYl;
            var15 = var16.bind(var17)(var15);
            var11['children'] = var15;
            var11 = var13.bind(var5)(var14, var11);
            var8[1] = var11;
            var10 = var26[var10];
            var10 = var25.bind(var5)(var10);
            var11 = var10.LegacyText;
            var10 = {};
            var12 = var12.description;
            var10['style'] = var12;
            var12 = var26[var22];
            var12 = var25.bind(var5)(var12);
            var15 = var12.intl;
            var14 = var15.string;
            var12 = var26[var22];
            var12 = var25.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.i1STwu;
            var12 = var14.bind(var15)(var12);
            var10['children'] = var12;
            var10 = var13.bind(var5)(var11, var10);
            var8[2] = var10;
            var6['children'] = var8;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = 13;
            var7 = var26[var7];
            var7 = var25.bind(var5)(var7);
            var8 = var7.Stack;
            var7 = {};
            var10 = 24;
            var7['spacing'] = var10;
            var10 = {};
            var11 = _closure1_slot10;
            var10['paddingHorizontal'] = var11;
            var7['style'] = var10;
            var11 = 14;
            var10 = var26[var11];
            var10 = var25.bind(var5)(var10);
            var12 = var10.TableRowGroup;
            var10 = {};
            var14 = var26[var22];
            var14 = var25.bind(var5)(var14);
            var16 = var14.intl;
            var15 = var16.string;
            var14 = var26[var22];
            var14 = var25.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.fHiGA0;
            var14 = var15.bind(var16)(var14);
            var10['helperText'] = var14;
            var15 = _closure1_slot1;
            var14 = 15;
            var16 = var26[var14];
            var23 = var15.bind(var5)(var16);
            var17 = {};
            var17['formSwitchDisabled'] = var28;
            var16 = 16;
            var24 = var26[var16];
            var24 = var25.bind(var5)(var24);
            var27 = var24.TableSwitchRow;
            var24 = {};
            var29 = var26[var22];
            var29 = var25.bind(var5)(var29);
            var31 = var29.intl;
            var30 = var31.string;
            var29 = var26[var22];
            var29 = var25.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.rkA56+;
            var29 = var30.bind(var31)(var29);
            var24['label'] = var29;
            var30 = var21.verificationLevel;
            var29 = _closure1_slot8;
            var29 = var29.NONE;
            var29 = var30 !== var29;
            var24['value'] = var29;
            var24['disabled'] = var28;
            var28 = function onValueChange(arg1) {
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
                    var1 = 17;
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
                    var1 = 17;
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
            var24['onValueChange'] = var28;
            var24 = var13.bind(var5)(var27, var24);
            var17['children'] = var24;
            var17 = var13.bind(var5)(var23, var17);
            var10['children'] = var17;
            var12 = var13.bind(var5)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var11 = var26[var11];
            var11 = var25.bind(var5)(var11);
            var12 = var11.TableRowGroup;
            var11 = {};
            var17 = var26[var22];
            var17 = var25.bind(var5)(var17);
            var24 = var17.intl;
            var23 = var24.string;
            var17 = var26[var22];
            var17 = var25.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.b0MaDV;
            var17 = var23.bind(var24)(var17);
            var11['helperText'] = var17;
            var14 = var26[var14];
            var15 = var15.bind(var5)(var14);
            var14 = {};
            var14['formSwitchDisabled'] = var19;
            var16 = var26[var16];
            var16 = var25.bind(var5)(var16);
            var17 = var16.TableSwitchRow;
            var16 = {};
            var23 = var26[var22];
            var23 = var25.bind(var5)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var26[var22];
            var22 = var25.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.zOuzl7;
            var22 = var23.bind(var24)(var22);
            var16['label'] = var22;
            var21 = var21.explicitContentFilter;
            var20 = _closure1_slot9;
            var20 = var20.ALL_MEMBERS;
            var20 = var21 === var20;
            var16['value'] = var20;
            var16['disabled'] = var19;
            var18 = function onValueChange(arg1) {
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
                    var1 = 17;
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
                    var1 = 17;
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
            var16['onValueChange'] = var18;
            var16 = var13.bind(var5)(var17, var16);
            var14['children'] = var16;
            var14 = var13.bind(var5)(var15, var14);
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/guild_role_subscriptions/native/components/RoleTierEditScenesModal.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getComponentPropsForScreen(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var1 = arg2;
            var2 = var1[var8];
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var4 = undefined;
            var6 = var3.bind(var4)(var1);
            var3 = null;
            var5 = var3 != var2;
            var1 = global;
            var1 = var1.HermesInternal;
            var7 = var1.concat;
            var1 = 'Props not provided in screen map for scene ';
            var1 = var7.bind(var1)(var8);
            var1 = var6.bind(var4)(var5, var1);
            var1 = var2.getRuntimeProps;
            var1 = var3 == var1;
            if(var1) { _fun0001_ip = 94; continue _fun0001 }
 84:
            var1 = var2.getRuntimeProps;
            var4 = var1.bind(var2)();
 94:
            if(!(var3 == var4)) { _fun0001_ip = 100; continue _fun0001 }
 98:
            var4 = {};
 100:
            var1 = {};
            var9 = arg3;
            var10 = var1;
            var5 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var2;
            var5 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var4;
            var4 = copyDataProperties(var10, var9);
            var2 = var2.extraProps;
            if(!(var3 == var2)) { _fun0001_ip = 146; continue _fun0001 }
 142:
            var2 = new Array(0);
 146:
            var10 = var1;
            var9 = var2;
            var2 = copyDataProperties(var10, var9);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function getScreenPropsForScene(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg2;
            var2 = null;
            if(!(var2 != var3)) { _fun0002_ip = 24; continue _fun0002 }
 9:
            var1 = arg1;
            var1 = var3[var1];
            if(!(var2 == var1)) { _fun0002_ip = 22; continue _fun0002 }
 20:
            var1 = {};
 22:
            return var1;
 24:
            var1 = {};
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function getHeaderRight(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var1 = function() {
            var4 = _closure1_slot8;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 7;
            var1 = var9[var1];
            var3 = undefined;
            var1 = var8.bind(var3)(var1);
            var2 = var1.HeaderActionButton;
            var1 = {};
            var6 = _closure1_slot1;
            var5 = 8;
            var5 = var9[var5];
            var5 = var6.bind(var3)(var5);
            var1['source'] = var5;
            var5 = function onPress() {
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onPress'] = var5;
            var5 = 9;
            var6 = var9[var5];
            var6 = var8.bind(var3)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var3)(var5);
            var5 = var5.t;
            var5 = var5.cpT0Cg;
            var5 = var6.bind(var7)(var5);
            var1['accessibilityLabel'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function buildInitialRouteStack(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var6 = arg2;
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var7 = undefined;
            var5 = var2.bind(var7)(var1);
            var2 = var3.length;
            var1 = 0;
            var4 = var2 > var1;
            var2 = 'At least one step must be provided to RoleTierEditScenesModal';
            var2 = var5.bind(var7)(var4, var2);
            var2 = null;
            if(!(var2 != var6)) { _fun0003_ip = 116; continue _fun0003 }
 60:
            var2 = new Array(0);
            var4 = var3.length;
            var4 = var1 < var4;
            var5 = 0;
            if(!var4) { _fun0003_ip = 114; continue _fun0003 }
 78:
            var4 = var3[var5];
            var8 = var2.push;
            var7 = {};
            var7['name'] = var4;
            var7 = var8.bind(var2)(var7);
            if(!(var4 !== var6)) { _fun0003_ip = 114; continue _fun0003 }
 102:
            var5 = var5 + 1;
            var4 = var3.length;
            if(var5 < var4) { _fun0003_ip = 78; continue _fun0003 }
 114:
            return var2;
 116:
            var2 = {};
            var1 = var3[var1];
            var2['name'] = var1;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function orderify(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var1 = 1;
            var4 = var2 + var1;
            var2 = 'string';
            var1 = typeof var3;
            if(!(var2 !== var1)) { _fun0004_ip = 47; continue _fun0004 }
 24:
            var1 = {};
            var6 = var1;
            var5 = var3;
            var2 = copyDataProperties(var6, var5);
            var2 = 'stepNumber';
            var1[var2] = var4;
            _fun0004_ip = 62; continue _fun0004;
 47:
            var2 = {};
            var2['stepNumber'] = var4;
            var2['scene'] = var3;
            var1 = var2;
 62:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function buildScreenMap(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var14 = var4.steps;
            var6 = var4.stepScreenPropsMap;
            var13 = null;
            var3 = Object.create(var13);
            var7 = 0;
            var3['steps'] = var7;
            var3['stepScreenPropsMap'] = var7;
            var21 = {};
            var20 = var4;
            var19 = var3;
            var5 = copyDataProperties(var21, var20, var19);
            var4 = {};
            var3 = var14.map;
            var2 = _closure1_slot16;
            var12 = var3.bind(var14)(var2);
            var2 = global;
            var8 = var2.Math;
            var3 = var8.max;
            var9 = var12.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.stepNumber;
                return var1;
            };
            var20 = var9.bind(var12)(var2);
            var2 = new Array(0);
            var21 = var2;
            var19 = 0;
            var9 = arraySpread(var21, var20, var19);
            var21 = var3;
            var20 = var2;
            var19 = var8;
            var11 = apply(var21, var20, var19);
            var2 = var14.length;
            var2 = var7 < var2;
            var10 = 'nextStep';
            var9 = 'stepsCount';
            var8 = 1;
            if(!var2) { _fun0005_ip = 230; continue _fun0005 }
 146:
            var2 = var12[var7];
            var15 = var2.scene;
            var2 = var7 + var8;
            var16 = var12[var2];
            var17 = var13 == var16;
            var2 = undefined;
            if(var17) { _fun0005_ip = 179; continue _fun0005 }
 173:
            var2 = var16.scene;
 179:
            var17 = var13 != var2;
            var16 = null;
            if(!var17) { _fun0005_ip = 191; continue _fun0005 }
 188:
            var16 = var2;
 191:
            var2 = {};
            var20 = var12[var7];
            var21 = var2;
            var17 = copyDataProperties(var21, var20);
            var2[var10] = var16;
            var2[var9] = var11;
            var4[var15] = var2;
            var7 = var7 + 1;
            var2 = var14.length;
            if(var7 < var2) { _fun0005_ip = 146; continue _fun0005 }
 230:
            var2 = function getScreens(arg1, arg2, arg3, arg4) {
                var13 = arg3;
                var9 = arg4;
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var10 = {};
                var1 = true;
                var10['fullscreen'] = var1;
                var1 = function headerTitle() {
                    var1 = null;
                    return var1;
                };
                var10['headerTitle'] = var1;
                var1 = {};
                var2 = _closure1_slot7;
                var3 = var2.GATING;
                var2 = {};
                var16 = var2;
                var15 = var10;
                var5 = copyDataProperties(var16, var15);
                var12 = _closure1_slot14;
                var5 = _closure1_slot7;
                var5 = var5.GATING;
                var8 = undefined;
                var5 = var12.bind(var8)(var5, var13);
                var11 = 'headerRight';
                var2[var11] = var5;
                var7 = _closure1_slot13;
                var5 = _closure1_slot7;
                var5 = var5.GATING;
                var15 = var7.bind(var8)(var5, var9);
                var16 = var2;
                var5 = copyDataProperties(var16, var15);
                var14 = function render() {
                    var6 = _closure1_slot12;
                    var2 = _closure1_slot7;
                    var5 = var2.GATING;
                    var3 = _closure3_slot0;
                    var2 = _closure3_slot1;
                    var4 = undefined;
                    var8 = var6.bind(var4)(var5, var3, var2);
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 10;
                    var1 = var6[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var9 = var1;
                    var5 = copyDataProperties(var9, var8);
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var5 = 'render';
                var2[var5] = var14;
                var1[var3] = var2;
                var2 = _closure1_slot7;
                var3 = var2.GROUP;
                var2 = {};
                var16 = var2;
                var15 = var10;
                var14 = copyDataProperties(var16, var15);
                var14 = _closure1_slot7;
                var14 = var14.GROUP;
                var14 = var12.bind(var8)(var14, var13);
                var2[var11] = var14;
                var14 = _closure1_slot7;
                var14 = var14.GROUP;
                var15 = var7.bind(var8)(var14, var9);
                var16 = var2;
                var14 = copyDataProperties(var16, var15);
                var14 = function render() {
                    var6 = _closure1_slot12;
                    var2 = _closure1_slot7;
                    var5 = var2.GROUP;
                    var3 = _closure3_slot0;
                    var2 = _closure3_slot1;
                    var4 = undefined;
                    var8 = var6.bind(var4)(var5, var3, var2);
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 11;
                    var1 = var6[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var9 = var1;
                    var5 = copyDataProperties(var9, var8);
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2[var5] = var14;
                var1[var3] = var2;
                var2 = _closure1_slot7;
                var3 = var2.CHANNEL_BENEFITS;
                var2 = {};
                var16 = var2;
                var15 = var10;
                var14 = copyDataProperties(var16, var15);
                var14 = _closure1_slot7;
                var14 = var14.CHANNEL_BENEFITS;
                var14 = var12.bind(var8)(var14, var13);
                var2[var11] = var14;
                var14 = _closure1_slot7;
                var14 = var14.CHANNEL_BENEFITS;
                var15 = var7.bind(var8)(var14, var9);
                var16 = var2;
                var14 = copyDataProperties(var16, var15);
                var14 = function render() {
                    var6 = _closure1_slot12;
                    var2 = _closure1_slot7;
                    var5 = var2.CHANNEL_BENEFITS;
                    var3 = _closure3_slot0;
                    var2 = _closure3_slot1;
                    var4 = undefined;
                    var8 = var6.bind(var4)(var5, var3, var2);
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 12;
                    var1 = var6[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.GuildRoleSubscriptionTierChannelBenefitsModal;
                    var1 = {};
                    var9 = var1;
                    var5 = copyDataProperties(var9, var8);
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2[var5] = var14;
                var1[var3] = var2;
                var2 = _closure1_slot7;
                var3 = var2.INTANGIBLE_BENEFITS;
                var2 = {};
                var16 = var2;
                var15 = var10;
                var14 = copyDataProperties(var16, var15);
                var14 = _closure1_slot7;
                var14 = var14.INTANGIBLE_BENEFITS;
                var14 = var12.bind(var8)(var14, var13);
                var2[var11] = var14;
                var14 = _closure1_slot7;
                var14 = var14.INTANGIBLE_BENEFITS;
                var15 = var7.bind(var8)(var14, var9);
                var16 = var2;
                var14 = copyDataProperties(var16, var15);
                var14 = function render() {
                    var6 = _closure1_slot12;
                    var2 = _closure1_slot7;
                    var5 = var2.INTANGIBLE_BENEFITS;
                    var3 = _closure3_slot0;
                    var2 = _closure3_slot1;
                    var4 = undefined;
                    var8 = var6.bind(var4)(var5, var3, var2);
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 12;
                    var1 = var6[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.GuildRoleSubscriptionTierIntangibleBenefitsModal;
                    var1 = {};
                    var9 = var1;
                    var5 = copyDataProperties(var9, var8);
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2[var5] = var14;
                var1[var3] = var2;
                var2 = _closure1_slot7;
                var3 = var2.CONFIRMATION;
                var2 = {};
                var16 = var2;
                var15 = var10;
                var14 = copyDataProperties(var16, var15);
                var14 = _closure1_slot7;
                var14 = var14.CONFIRMATION;
                var14 = var12.bind(var8)(var14, var13);
                var2[var11] = var14;
                var14 = _closure1_slot7;
                var14 = var14.CONFIRMATION;
                var15 = var7.bind(var8)(var14, var9);
                var16 = var2;
                var14 = copyDataProperties(var16, var15);
                var14 = function render() {
                    var6 = _closure1_slot12;
                    var2 = _closure1_slot7;
                    var5 = var2.CONFIRMATION;
                    var3 = _closure3_slot0;
                    var2 = _closure3_slot1;
                    var4 = undefined;
                    var8 = var6.bind(var4)(var5, var3, var2);
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 13;
                    var1 = var6[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var9 = var1;
                    var5 = copyDataProperties(var9, var8);
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2[var5] = var14;
                var1[var3] = var2;
                var2 = _closure1_slot7;
                var3 = var2.DESIGN;
                var2 = {};
                var16 = var2;
                var15 = var10;
                var14 = copyDataProperties(var16, var15);
                var14 = _closure1_slot7;
                var14 = var14.DESIGN;
                var14 = var12.bind(var8)(var14, var13);
                var2[var11] = var14;
                var14 = _closure1_slot7;
                var14 = var14.DESIGN;
                var15 = var7.bind(var8)(var14, var9);
                var16 = var2;
                var14 = copyDataProperties(var16, var15);
                var14 = function render() {
                    var6 = _closure1_slot12;
                    var2 = _closure1_slot7;
                    var5 = var2.DESIGN;
                    var3 = _closure3_slot0;
                    var2 = _closure3_slot1;
                    var4 = undefined;
                    var8 = var6.bind(var4)(var5, var3, var2);
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 14;
                    var1 = var6[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var9 = var1;
                    var5 = copyDataProperties(var9, var8);
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2[var5] = var14;
                var1[var3] = var2;
                var2 = _closure1_slot7;
                var3 = var2.DETAILS;
                var2 = {};
                var16 = var2;
                var15 = var10;
                var10 = copyDataProperties(var16, var15);
                var10 = _closure1_slot7;
                var10 = var10.DETAILS;
                var10 = var12.bind(var8)(var10, var13);
                var2[var11] = var10;
                var6 = _closure1_slot7;
                var6 = var6.DETAILS;
                var15 = var7.bind(var8)(var6, var9);
                var16 = var2;
                var6 = copyDataProperties(var16, var15);
                var4 = function render() {
                    var6 = _closure1_slot12;
                    var2 = _closure1_slot7;
                    var5 = var2.DETAILS;
                    var3 = _closure3_slot0;
                    var2 = _closure3_slot1;
                    var4 = undefined;
                    var8 = var6.bind(var4)(var5, var3, var2);
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 15;
                    var1 = var6[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var9 = var1;
                    var5 = copyDataProperties(var9, var8);
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2[var5] = var4;
                var1[var3] = var2;
                return var1;
            };
            var19 = arg2;
            var22 = undefined;
            var21 = var4;
            var20 = var5;
            var18 = var6;
            var1 = var22[var2](var21, var20, var19, var18, var17);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useCurrentTierEditScene;
    var _closure1_slot5 = var7;
    var4 = var4.useResetTierEditState;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildRoleSubscriptionsTierScenes;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.Fragment;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'alignSelf': 'center', 'height': 48};
    var4['stepsIndicator'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/RoleTierEditScenesModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RoleTierEditScenesModal(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var1 = _closure1_slot11;
        var4 = undefined;
        var12 = var1.bind(var4)();
        var2 = var3.modalKey;
        var _closure2_slot1 = var2;
        var1 = var3.steps;
        var _closure2_slot2 = var1;
        var3 = var3.onClose;
        var _closure2_slot3 = var3;
        var3 = _closure1_slot5;
        var3 = var3.bind(var4)();
        var9 = _closure1_slot3;
        var8 = 2;
        var3 = var9.bind(var4)(var3, var8);
        var7 = 0;
        var5 = var3[var7];
        var _closure2_slot4 = var5;
        var11 = 1;
        var3 = var3[var11];
        var _closure2_slot5 = var3;
        var3 = _closure1_slot6;
        var3 = var3.bind(var4)();
        var _closure2_slot6 = var3;
        var5 = _closure1_slot4;
        var3 = var5.useState;
        var3 = var3.bind(var5)(var7);
        var3 = var9.bind(var4)(var3, var8);
        var10 = var3[var7];
        var3 = var3[var11];
        var _closure2_slot7 = var3;
        var7 = _closure1_slot1;
        var13 = _closure1_slot2;
        var3 = 16;
        var3 = var13[var3];
        var3 = var7.bind(var4)(var3);
        var3 = var3.bind(var4)();
        var14 = var3.top;
        var8 = var5.useCallback;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.popWithKey;
            var2 = _closure2_slot1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var8.bind(var5)(var2, var3);
        var _closure2_slot8 = var2;
        var2 = function handleClose(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = _closure2_slot3;
                var1 = null;
                if(!(var1 != var3)) { _fun0006_ip = 27; continue _fun0006 }
 13:
                var4 = _closure2_slot3;
                var3 = undefined;
                var1 = arg1;
                var1 = var4.bind(var3)(var1);
 27:
                var3 = _closure2_slot8;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var2 = _closure2_slot6;
                var2 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure2_slot9 = var2;
        var3 = var5.useMemo;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var3 = _closure2_slot2;
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = arg1;
                    var4 = 'string';
                    var3 = typeof var2;
                    var1 = var2;
                    if(!(var4 !== var3)) { _fun0007_ip = 23; continue _fun0007 }
 17:
                    var1 = var2.scene;
 23:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var9 = var3.bind(var5)(var1, var2);
        var _closure2_slot10 = var9;
        var1 = 18;
        var1 = var13[var1];
        var2 = var7.bind(var4)(var1);
        var1 = function() {
            var1 = {};
            var7 = _closure1_slot17;
            var6 = _closure2_slot0;
            var4 = _closure2_slot9;
            var5 = undefined;
            var4 = var7.bind(var5)(var6, var4);
            var1['screens'] = var4;
            var4 = _closure1_slot15;
            var3 = _closure2_slot10;
            var2 = _closure2_slot4;
            var2 = var4.bind(var5)(var3, var2);
            var1['initialStack'] = var2;
            return var1;
        };
        var1 = var2.bind(var4)(var1);
        var18 = var1.screens;
        var17 = var1.initialStack;
        var3 = _closure1_slot10;
        var2 = _closure1_slot9;
        var1 = {};
        var15 = _closure1_slot8;
        var19 = _closure1_slot0;
        var5 = 19;
        var5 = var13[var5];
        var5 = var19.bind(var4)(var5);
        var8 = var5.Navigator;
        var5 = {};
        var5['screens'] = var18;
        var5['initialRouteStack'] = var17;
        var16 = function onWillFocus(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var1 = arg1;
                var1 = var1.route;
                var5 = var1.name;
                var _closure3_slot0 = var5;
                var1 = null;
                if(!(var1 != var5)) { _fun0008_ip = 77; continue _fun0008 }
 26:
                var4 = _closure2_slot5;
                var3 = undefined;
                var4 = var4.bind(var3)(var5);
                var5 = _closure2_slot10;
                var4 = var5.findIndex;
                var2 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var1 === var2;
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
                var4 = 0;
                if(!(var2 >= var4)) { _fun0008_ip = 77; continue _fun0008 }
 68:
                var1 = _closure2_slot7;
                var1 = var1.bind(var3)(var2);
 77:
                var1 = undefined;
                return var1;
            }
        };
        var5['onWillFocus'] = var16;
        var16 = 9;
        var17 = var13[var16];
        var17 = var19.bind(var4)(var17);
        var18 = var17.intl;
        var17 = var18.string;
        var16 = var13[var16];
        var16 = var19.bind(var4)(var16);
        var16 = var16.t;
        var16 = var16.13/7kZ;
        var16 = var17.bind(var18)(var16);
        var5['headerBackTitle'] = var16;
        var8 = var15.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot8;
        var6 = 20;
        var6 = var13[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var13 = var12.stepsIndicator;
        var12 = new Array(2);
        var12[0] = var13;
        var13 = {};
        var13['top'] = var14;
        var12[1] = var13;
        var6['style'] = var12;
        var10 = var10 + var11;
        var6['current'] = var10;
        var9 = var9.length;
        var6['total'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
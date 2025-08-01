// app/modules/public_guilds/native/components/EnableCommunityModal/FinishingTouchesScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Image;
    var _closure1_slot6 = var8;
    var8 = var4.View;
    var _closure1_slot7 = var8;
    var4 = var4.StyleSheet;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CREATE_NEW_CHANNEL_VALUE;
    var _closure1_slot11 = var7;
    var7 = var4.MODERATOR_PERMISSIONS;
    var _closure1_slot12 = var7;
    var4 = var4.MODERATOR_PERMISSIONS_FLAG;
    var _closure1_slot13 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot14 = var7;
    var7 = var4.HelpdeskArticles;
    var _closure1_slot15 = var7;
    var4 = var4.UserNotificationSettings;
    var _closure1_slot16 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot17 = var7;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var4 = function showRequirementSatisfiedToast(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            if(!var1) { _fun0001_ip = 41; continue _fun0001 }
 6:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.communityRequirementSatisfied;
            var1 = var1.bind(var2)();
 41:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot19 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/public_guilds/native/components/EnableCommunityModal/FinishingTouchesScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FinishingTouchesScreen() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 9;
            var1 = var3[var1];
            var4 = undefined;
            var5 = var2.bind(var4)(var1);
            var3 = var5.useStateFromStoresObject;
            var1 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getProps;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var3.bind(var5)(var2, var1);
            var28 = var1.guild;
            var _closure2_slot0 = var28;
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var29 = null;
            var5 = var29 == var28;
            var1 = undefined;
            if(var5) { _fun0002_ip = 93; continue _fun0002 }
 87:
            var1 = var28.defaultMessageNotifications;
 93:
            var1 = var2.bind(var3)(var1);
            var7 = _closure1_slot4;
            var6 = 1;
            var1 = var7.bind(var4)(var1, var6);
            var3 = 0;
            var1 = var1[var3];
            var _closure2_slot1 = var1;
            var2 = _closure1_slot16;
            var2 = var2.ONLY_MENTIONS;
            var21 = var1 === var2;
            var _closure2_slot2 = var21;
            var5 = _closure1_slot5;
            var8 = var5.useState;
            var2 = false;
            var2 = var8.bind(var5)(var2);
            var8 = 2;
            var2 = var7.bind(var4)(var2, var8);
            var18 = var2[var3];
            var17 = var2[var6];
            var9 = var5.useState;
            var11 = _closure1_slot12;
            var10 = var11.some;
            var2 = function(arg1) {
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.canEveryone;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var2 = var10.bind(var11)(var2);
            var2 = !var2;
            var2 = var9.bind(var5)(var2);
            var2 = var7.bind(var4)(var2, var8);
            var26 = var2[var3];
            var25 = var2[var6];
            var2 = var5.useState;
            var2 = var2.bind(var5)(var26);
            var2 = var7.bind(var4)(var2, var6);
            var23 = var2[var3];
            var _closure2_slot3 = var23;
            var3 = var5.useCallback;
            var2 = var29 == var28;
            var6 = undefined;
            if(var2) { _fun0002_ip = 265; continue _fun0002 }
 259:
            var6 = var28.defaultMessageNotifications;
 265:
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var1;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    if(!var1) { _fun0003_ip = 53; continue _fun0003 }
 6:
                    var4 = _closure2_slot0;
                    var3 = null;
                    var4 = var3 == var4;
                    var3 = undefined;
                    var5 = undefined;
                    if(var4) { _fun0003_ip = 36; continue _fun0003 }
 26:
                    var2 = _closure2_slot0;
                    var5 = var2.defaultMessageNotifications;
 36:
                    var2 = _closure1_slot16;
                    var2 = var2.ONLY_MENTIONS;
                    if(!(var5 === var2)) { _fun0003_ip = 124; continue _fun0003 }
 53:
                    if(var1) { _fun0003_ip = 69; continue _fun0003 }
 56:
                    var5 = _closure2_slot1;
                    var2 = null;
                    var1 = var2 == var5;
 69:
                    if(var1) { _fun0003_ip = 172; continue _fun0003 }
 72:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var2);
                    var2 = var5.updateGuild;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1['defaultMessageNotifications'] = var6;
                    var1 = var2.bind(var5)(var1);
                    _fun0003_ip = 172; continue _fun0003;
 124:
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 11;
                    var1 = var5[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.updateGuild;
                    var1 = {};
                    var4 = _closure1_slot16;
                    var4 = var4.ONLY_MENTIONS;
                    var1['defaultMessageNotifications'] = var4;
                    var1 = var2.bind(var3)(var1);
 172:
                    var1 = undefined;
                    return var1;
                }
            };
            var24 = var3.bind(var5)(var1, var2);
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg1;
                    var12 = null;
                    var3 = var12 != var2;
                    var1 = undefined;
                    var4 = undefined;
                    if(!var3) { _fun0004_ip = 34; continue _fun0004 }
 16:
                    var5 = _closure1_slot10;
                    var3 = var5.getEveryoneRole;
                    var4 = var3.bind(var5)(var2);
 34:
                    if(!(var12 != var4)) { _fun0004_ip = 338; continue _fun0004 }
 41:
                    var3 = global;
                    var6 = var3.Set;
                    var15 = var2.features;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var16 = var5;
                    var3 = new var16[var6](var15, var14);
                    var11 = var3 instanceof Object ? var3 : var5;
                    var6 = var11.add;
                    var5 = _closure1_slot14;
                    var5 = var5.COMMUNITY;
                    var5 = var6.bind(var11)(var5);
                    var6 = _closure1_slot2;
                    var9 = _closure1_slot3;
                    var5 = 12;
                    var5 = var9[var5];
                    var8 = var6.bind(var1)(var5);
                    var7 = var8.remove;
                    var6 = var4.permissions;
                    var5 = _closure1_slot13;
                    var5 = var7.bind(var8)(var6, var5);
                    var6 = {};
                    var15 = var6;
                    var14 = var4;
                    var7 = copyDataProperties(var15, var14);
                    var7 = 'permissions';
                    var6[var7] = var5;
                    var8 = _closure1_slot1;
                    var7 = 11;
                    var7 = var9[var7];
                    var10 = var8.bind(var1)(var7);
                    var9 = var10.saveGuild;
                    var8 = var2.id;
                    var7 = {};
                    var7['features'] = var11;
                    var11 = var2.rulesChannelId;
                    if(!(var12 == var11)) { _fun0004_ip = 209; continue _fun0004 }
 205:
                    var11 = _closure1_slot11;
 209:
                    var7['rulesChannelId'] = var11;
                    var11 = var2.safetyAlertsChannelId;
                    var7['safetyAlertsChannelId'] = var11;
                    var11 = var2.verificationLevel;
                    var7['verificationLevel'] = var11;
                    var11 = var2.explicitContentFilter;
                    var7['explicitContentFilter'] = var11;
                    var11 = var2.publicUpdatesChannelId;
                    if(!(var12 == var11)) { _fun0004_ip = 261; continue _fun0004 }
 257:
                    var11 = _closure1_slot11;
 261:
                    var7['publicUpdatesChannelId'] = var11;
                    var11 = var2.defaultMessageNotifications;
                    var7['defaultMessageNotifications'] = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    var4 = var4.permissions;
                    if(!(var5 !== var4)) { _fun0004_ip = 338; continue _fun0004 }
 293:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 13;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.saveRoleSettings;
                    var3 = var2.id;
                    var2 = new Array(1);
                    var2[0] = var6;
                    var2 = var4.bind(var5)(var3, var2);
 338:
                    return var1;
                }
            };
            var1 = new Array(0);
            var5 = var3.bind(var5)(var2, var1);
            var2 = _closure1_slot1;
            var20 = _closure1_slot3;
            var1 = 14;
            var1 = var20[var1];
            var1 = var2.bind(var4)(var1);
            var8 = var1.bind(var4)();
            var22 = _closure1_slot0;
            var1 = 15;
            var1 = var20[var1];
            var2 = var22.bind(var4)(var1);
            var1 = var2.useEnableCommunitySharedStyles;
            var11 = var1.bind(var2)();
            var3 = _closure1_slot18;
            var6 = 16;
            var1 = var20[var6];
            var1 = var22.bind(var4)(var1);
            var2 = var1.EnableCommunityModalScreen;
            var1 = {};
            var6 = var20[var6];
            var6 = var22.bind(var4)(var6);
            var6 = var6.EnableCommunityModalSteps;
            var6 = var6.STEP_3;
            var1['currentStep'] = var6;
            var1['onSuccess'] = var5;
            var5 = !var18;
            var1['disableNextStep'] = var5;
            var9 = 17;
            var5 = var20[var9];
            var5 = var22.bind(var4)(var5);
            var7 = var5.intl;
            var6 = var7.string;
            var5 = var20[var9];
            var5 = var22.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.XGl4bW;
            var5 = var6.bind(var7)(var5);
            var1['buttonText'] = var5;
            var19 = _closure1_slot7;
            var5 = {};
            var6 = var11.content;
            var5['style'] = var6;
            var15 = _closure1_slot17;
            var7 = _closure1_slot6;
            var6 = {};
            var10 = 'contain';
            var6['resizeMode'] = var10;
            var8 = var8.finishingTouches;
            var6['source'] = var8;
            var6 = var15.bind(var4)(var7, var6);
            var7 = new Array(3);
            var7[0] = var6;
            var6 = 18;
            var8 = var20[var6];
            var8 = var22.bind(var4)(var8);
            var10 = var8.LegacyText;
            var8 = {};
            var12 = var11.header;
            var8['style'] = var12;
            var12 = var20[var9];
            var12 = var22.bind(var4)(var12);
            var16 = var12.intl;
            var14 = var16.string;
            var12 = var20[var9];
            var12 = var22.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.Pj/s/f;
            var12 = var14.bind(var16)(var12);
            var8['children'] = var12;
            var8 = var15.bind(var4)(var10, var8);
            var7[1] = var8;
            var8 = var20[var6];
            var8 = var22.bind(var4)(var8);
            var10 = var8.LegacyText;
            var8 = {};
            var12 = var11.description;
            var8['style'] = var12;
            var12 = var20[var9];
            var12 = var22.bind(var4)(var12);
            var16 = var12.intl;
            var14 = var16.string;
            var12 = var20[var9];
            var12 = var22.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.IL7/np;
            var12 = var14.bind(var16)(var12);
            var8['children'] = var12;
            var8 = var15.bind(var4)(var10, var8);
            var7[2] = var8;
            var5['children'] = var7;
            var7 = var3.bind(var4)(var19, var5);
            var5 = new Array(4);
            var5[0] = var7;
            var14 = 19;
            var7 = var20[var14];
            var7 = var22.bind(var4)(var7);
            var8 = var7.FormSection;
            var7 = {};
            var10 = var20[var14];
            var10 = var22.bind(var4)(var10);
            var12 = var10.FormRow;
            var10 = {};
            var16 = var20[var9];
            var16 = var22.bind(var4)(var16);
            var32 = var16.intl;
            var31 = var32.format;
            var16 = var20[var9];
            var16 = var22.bind(var4)(var16);
            var16 = var16.t;
            var30 = var16.K8Eg4O;
            var16 = {};
            var33 = function infoHook() {
                var1 = null;
                return var1;
            };
            var16['infoHook'] = var33;
            var16 = var31.bind(var32)(var30, var16);
            var10['label'] = var16;
            var16 = {};
            var30 = var11.formSwitchWrapper;
            var16['style'] = var30;
            var20 = var20[var14];
            var20 = var22.bind(var4)(var20);
            var22 = var20.FormSwitch;
            var20 = {};
            var30 = var29 == var28;
            var29 = undefined;
            if(var30) { _fun0002_ip = 882; continue _fun0002 }
 876:
            var29 = var28.defaultMessageNotifications;
 882:
            var28 = _closure1_slot16;
            var28 = var28.ONLY_MENTIONS;
            var28 = var29 === var28;
            var20['value'] = var28;
            var20['disabled'] = var21;
            var20['onValueChange'] = var24;
            var22 = var15.bind(var4)(var22, var20);
            var20 = new Array(2);
            var20[0] = var22;
            if(!var21) { _fun0002_ip = 997; continue _fun0002 }
 926:
            var28 = _closure1_slot17;
            var24 = _closure1_slot0;
            var29 = _closure1_slot3;
            var22 = 20;
            var22 = var29[var22];
            var22 = var24.bind(var4)(var22);
            var24 = var22.PressableOpacity;
            var22 = {};
            var29 = 'button';
            var22['accessibilityRole'] = var29;
            var29 = _closure1_slot8;
            var29 = var29.absoluteFill;
            var22['style'] = var29;
            var29 = function onPress() {
                var3 = _closure1_slot19;
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var22['onPress'] = var29;
            var21 = var28.bind(var4)(var24, var22);
 997:
            var20[1] = var21;
            var16['children'] = var20;
            var16 = var3.bind(var4)(var19, var16);
            var10['trailing'] = var16;
            var12 = var15.bind(var4)(var12, var10);
            var10 = new Array(3);
            var10[0] = var12;
            var16 = _closure1_slot17;
            var24 = _closure1_slot0;
            var22 = _closure1_slot3;
            var12 = var22[var14];
            var12 = var24.bind(var4)(var12);
            var15 = var12.FormDivider;
            var12 = {};
            var12 = var16.bind(var4)(var15, var12);
            var10[1] = var12;
            var12 = var22[var14];
            var12 = var24.bind(var4)(var12);
            var15 = var12.FormRow;
            var12 = {};
            var19 = var22[var9];
            var19 = var24.bind(var4)(var19);
            var28 = var19.intl;
            var21 = var28.format;
            var19 = var22[var9];
            var19 = var24.bind(var4)(var19);
            var19 = var19.t;
            var20 = var19.v8qCoK;
            var19 = {};
            var29 = function infoHook() {
                var1 = null;
                return var1;
            };
            var19['infoHook'] = var29;
            var19 = var21.bind(var28)(var20, var19);
            var12['label'] = var19;
            var21 = _closure1_slot18;
            var20 = _closure1_slot7;
            var19 = {};
            var28 = var11.formSwitchWrapper;
            var19['style'] = var28;
            var22 = var22[var14];
            var22 = var24.bind(var4)(var22);
            var24 = var22.FormSwitch;
            var22 = {};
            var22['value'] = var26;
            var22['disabled'] = var23;
            var22['onValueChange'] = var25;
            var24 = var16.bind(var4)(var24, var22);
            var22 = new Array(2);
            var22[0] = var24;
            if(!var23) { _fun0002_ip = 1289; continue _fun0002 }
 1218:
            var26 = _closure1_slot17;
            var25 = _closure1_slot0;
            var28 = _closure1_slot3;
            var24 = 20;
            var24 = var28[var24];
            var24 = var25.bind(var4)(var24);
            var25 = var24.PressableOpacity;
            var24 = {};
            var28 = 'button';
            var24['accessibilityRole'] = var28;
            var28 = _closure1_slot8;
            var28 = var28.absoluteFill;
            var24['style'] = var28;
            var27 = function onPress() {
                var3 = _closure1_slot19;
                var2 = _closure2_slot3;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var24['onPress'] = var27;
            var23 = var26.bind(var4)(var25, var24);
 1289:
            var22[1] = var23;
            var19['children'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var12['trailing'] = var19;
            var12 = var16.bind(var4)(var15, var12);
            var10[2] = var12;
            var7['children'] = var10;
            var7 = var3.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot17;
            var10 = _closure1_slot0;
            var16 = _closure1_slot3;
            var7 = var16[var14];
            var7 = var10.bind(var4)(var7);
            var12 = var7.FormSection;
            var7 = {};
            var15 = var16[var9];
            var15 = var10.bind(var4)(var15);
            var20 = var15.intl;
            var19 = var20.string;
            var15 = var16[var9];
            var15 = var10.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.k+b2CQ;
            var15 = var19.bind(var20)(var15);
            var7['title'] = var15;
            var14 = var16[var14];
            var14 = var10.bind(var4)(var14);
            var15 = var14.FormSwitchRow;
            var14 = {};
            var19 = var16[var9];
            var19 = var10.bind(var4)(var19);
            var21 = var19.intl;
            var20 = var21.string;
            var19 = var16[var9];
            var19 = var10.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.9AG3wM;
            var19 = var20.bind(var21)(var19);
            var14['label'] = var19;
            var14['value'] = var18;
            var14['onValueChange'] = var17;
            var14 = var8.bind(var4)(var15, var14);
            var7['children'] = var14;
            var7 = var8.bind(var4)(var12, var7);
            var5[2] = var7;
            var6 = var16[var6];
            var6 = var10.bind(var4)(var6);
            var7 = var6.LegacyText;
            var6 = {};
            var11 = var11.formHint;
            var6['style'] = var11;
            var11 = var16[var9];
            var11 = var10.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.format;
            var9 = var16[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var10 = var9.BwbW/f;
            var9 = {};
            var15 = _closure1_slot1;
            var14 = 21;
            var17 = var16[var14];
            var19 = var15.bind(var4)(var17);
            var18 = var19.getArticleURL;
            var13 = _closure1_slot15;
            var17 = var13.PUBLIC_GUILD_GUILDLINES;
            var17 = var18.bind(var19)(var17);
            var9['communityGuidelines'] = var17;
            var14 = var16[var14];
            var15 = var15.bind(var4)(var14);
            var14 = var15.getArticleURL;
            var13 = var13.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES;
            var13 = var14.bind(var15)(var13);
            var9['typesOfGuilds'] = var13;
            var9 = var11.bind(var12)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
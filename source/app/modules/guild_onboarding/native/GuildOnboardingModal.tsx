// app/modules/guild_onboarding/native/GuildOnboardingModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function headerTitle() {
        var1 = null;
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function headerRight() {
        var1 = null;
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function getScreens(arg1) {
        var1 = arg1;
        var5 = var1.guildId;
        var _closure2_slot0 = var5;
        var2 = var1.prompts;
        var _closure2_slot1 = var2;
        var2 = var1.connections;
        var2 = var1.selectOption;
        var _closure2_slot2 = var2;
        var2 = var1.completeOnboarding;
        var _closure2_slot3 = var2;
        var2 = var1.onFinish;
        var _closure2_slot4 = var2;
        var7 = var1.onClose;
        var _closure2_slot5 = var7;
        var2 = var1.landingAnimation;
        var _closure2_slot6 = var2;
        var2 = var1.isFirstOpen;
        var _closure2_slot7 = var2;
        var1 = var1.backShouldLeaveGuild;
        var _closure2_slot8 = var1;
        var6 = _closure1_slot12;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var1 = 10;
        var1 = var12[var1];
        var10 = undefined;
        var1 = var11.bind(var10)(var1);
        var3 = var1.RulesPrompt;
        var1 = {};
        var1['guildId'] = var5;
        var1['onClose'] = var7;
        var1 = var6.bind(var10)(var3, var1);
        var _closure2_slot9 = var1;
        var3 = _closure1_slot6;
        var1 = var3.getGuild;
        var1 = var1.bind(var3)(var5);
        var _closure2_slot10 = var1;
        var3 = _closure1_slot4;
        var1 = var3.getRulesPrompt;
        var1 = var1.bind(var3)(var5);
        var _closure2_slot11 = var1;
        var1 = {};
        var3 = _closure1_slot9;
        var8 = var3.PROMPT;
        var3 = {};
        var7 = true;
        var3['fullscreen'] = var7;
        var6 = _closure1_slot13;
        var3['headerTitle'] = var6;
        var5 = _closure1_slot14;
        var3['headerRight'] = var5;
        var9 = function render(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var8 = arg1;
                var4 = _closure1_slot12;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot0;
                var1['guildId'] = var6;
                var6 = null;
                var9 = var6 == var8;
                var7 = undefined;
                if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var7 = var8.currentPrompt;
case 2:
                var8 = var6 != var7;
                var6 = 0;
                if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var6 = var7;
case 4:
                var1['currentPromptIdx'] = var6;
                var6 = _closure2_slot1;
                var1['prompts'] = var6;
                var6 = _closure2_slot2;
                var1['selectOption'] = var6;
                var6 = _closure2_slot5;
                var1['onClose'] = var6;
                var6 = _closure2_slot6;
                var1['landingAnimation'] = var6;
                var6 = _closure2_slot7;
                var1['isFirstOpen'] = var6;
                var5 = _closure2_slot8;
                var1['backShouldLeaveGuild'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var3['render'] = var9;
        var1[var8] = var3;
        var3 = _closure1_slot9;
        var8 = var3.CONNECTIONS;
        var3 = {};
        var3['fullscreen'] = var7;
        var3['headerTitle'] = var6;
        var3['headerRight'] = var5;
        var9 = 12;
        var9 = var12[var9];
        var11 = var11.bind(var10)(var9);
        var10 = var11.getHeaderCloseButton;
        var9 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot8;
                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = _closure2_slot5;
                var2 = undefined;
                var2 = var3.bind(var2)();
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var4 = _closure2_slot0;
                var2 = _closure2_slot5;
                var3 = _closure1_slot7;
                var1 = var3.getLastSelectedChannelId;
                var6 = var1.bind(var3)();
                var3 = _closure1_slot5;
                var1 = var3.getChannel;
                var1 = var1.bind(var3)(var6);
                var3 = null;
                if(!(var3 != var1)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var3 = var1.guild_id;
                if(!(var3 === var4)) { _fun0002_ip = 11; continue _fun0002 }
case 9:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var7 = var6.bind(var3)(var4);
                var6 = var7.transitionTo;
                var3 = _closure1_slot11;
                var4 = var3.ME;
                var3 = {};
                var8 = true;
                var3['navigationReplace'] = var8;
                var3 = var6.bind(var7)(var4, var3);
                _fun0002_ip = 12; continue _fun0002;
case 11:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var6.bind(var3)(var4);
                var3 = var4.transitionTo;
                var7 = _closure1_slot11;
                var6 = var7.CHANNEL;
                var5 = var1.guild_id;
                var1 = var1.id;
                var1 = var6.bind(var7)(var5, var1);
                var1 = var3.bind(var4)(var1);
case 12:
                var1 = undefined;
                var1 = var2.bind(var1)();
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var9 = var10.bind(var11)(var9);
        var3['headerLeft'] = var9;
        var9 = function render() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = _closure1_slot12;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot0;
                var1['guildId'] = var6;
                var6 = _closure2_slot1;
                var8 = var6.length;
                var6 = 0;
                var6 = var6 === var8;
                if(!var6) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 14;
                var7 = var9[var7];
                var10 = var8.bind(var3)(var7);
                var9 = var10.showRulesInOnboarding;
                var8 = _closure2_slot10;
                var7 = _closure2_slot11;
                var7 = var9.bind(var10)(var8, var7);
                var6 = !var7;
case 13:
                var1['isLastStep'] = var6;
                var5 = _closure2_slot3;
                var1['onComplete'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var3['render'] = var9;
        var1[var8] = var3;
        var3 = _closure1_slot9;
        var8 = var3.COMPLETED;
        var3 = {};
        var3['fullscreen'] = var7;
        var3['headerTitle'] = var6;
        var3['headerRight'] = var5;
        var9 = function render() {
            var4 = _closure1_slot12;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 15;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var6 = _closure2_slot0;
            var1['guildId'] = var6;
            var6 = _closure2_slot1;
            var1['prompts'] = var6;
            var5 = _closure2_slot3;
            var1['completeOnboarding'] = var5;
            var5 = function onClose() {
                var3 = _closure2_slot5;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var2 = _closure2_slot4;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1['onClose'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['render'] = var9;
        var1[var8] = var3;
        var2 = _closure1_slot9;
        var3 = var2.RULES;
        var2 = {};
        var2['fullscreen'] = var7;
        var2['headerTitle'] = var6;
        var2['headerRight'] = var5;
        var4 = function render() {
            var1 = _closure2_slot9;
            return var1;
        };
        var2['render'] = var4;
        var1[var3] = var2;
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildOnboardingModalStates;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot10 = var7;
    var4 = var4.Routes;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot12 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/native/GuildOnboardingModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildOnboardingModal(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var16 = var1.guildId;
            var _closure2_slot0 = var16;
            var12 = var1.onFinish;
            var _closure2_slot1 = var12;
            var11 = var1.onClose;
            var _closure2_slot2 = var11;
            var10 = var1.landingAnimation;
            var _closure2_slot3 = var10;
            var3 = var1.isFirstOpen;
            var _closure2_slot4 = var3;
            var9 = var1.backShouldLeaveGuild;
            var _closure2_slot5 = var9;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 16;
            var2 = var13[var7];
            var4 = undefined;
            var15 = var8.bind(var4)(var2);
            var14 = var15.useStateFromStores;
            var2 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot6;
                    var2 = var4.getGuild;
                    var1 = _closure2_slot0;
                    var4 = var2.bind(var4)(var1);
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                    var6 = var4.features;
                    var5 = var6.has;
                    var2 = _closure1_slot10;
                    var2 = var2.MEMBER_VERIFICATION_GATE_ENABLED;
                    var2 = var5.bind(var6)(var2);
                    if(!var2) { _fun0005_ip = 17; continue _fun0005 }
case 2:
                    var5 = var4.features;
                    var4 = var5.has;
                    var3 = _closure1_slot10;
                    var3 = var3.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                    var3 = var4.bind(var5)(var3);
                    var2 = !var3;
case 17:
                    var1 = var2;
case 15:
                    return var1;
                }
            };
            var6 = var14.bind(var15)(var6, var2);
            var _closure2_slot6 = var6;
            var2 = var13[var7];
            var18 = var8.bind(var4)(var2);
            var17 = var18.useStateFromStoresArray;
            var2 = _closure1_slot8;
            var15 = new Array(1);
            var15[0] = var2;
            var14 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getOnboardingPromptsForOnboarding;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var17.bind(var18)(var15, var14);
            var _closure2_slot7 = var15;
            var7 = var13[var7];
            var13 = var8.bind(var4)(var7);
            var8 = var13.useStateFromStores;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getConnections;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var8.bind(var13)(var7, var2);
            var _closure2_slot8 = var2;
            var8 = _closure1_slot3;
            var14 = var8.useCallback;
            var13 = new Array(1);
            var13[0] = var16;
            var7 = function(arg1, arg2, arg3) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.selectOption;
                var11 = _closure2_slot0;
                var10 = arg1;
                var9 = arg2;
                var8 = arg3;
                var12 = var7;
                var2 = var12[var6](var11, var10, var9, var8, var7);
                return var1;
            };
            var14 = var14.bind(var8)(var7, var13);
            var _closure2_slot9 = var14;
            var17 = var8.useCallback;
            var13 = new Array(2);
            var13[0] = var16;
            var13[1] = var15;
            var7 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.completeOnboarding;
                var3 = _closure2_slot0;
                var2 = _closure2_slot7;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var13 = var17.bind(var8)(var7, var13);
            var _closure2_slot10 = var13;
            var17 = var8.useEffect;
            var7 = new Array(2);
            var7[0] = var16;
            var7[1] = var6;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot6;
                    if(!var2) { _fun0006_ip = 18; continue _fun0006 }
case 7:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchVerificationForm;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var17.bind(var8)(var6, var7);
            var7 = var8.useMemo;
            var6 = new Array(10);
            var6[0] = var16;
            var6[1] = var15;
            var6[2] = var2;
            var6[3] = var14;
            var6[4] = var13;
            var6[5] = var12;
            var6[6] = var11;
            var6[7] = var10;
            var6[8] = var3;
            var6[9] = var9;
            var5 = function() {
                var3 = _closure1_slot15;
                var2 = {};
                var4 = _closure2_slot0;
                var2['guildId'] = var4;
                var4 = _closure2_slot7;
                var2['prompts'] = var4;
                var4 = _closure2_slot8;
                var2['connections'] = var4;
                var4 = _closure2_slot9;
                var2['selectOption'] = var4;
                var4 = _closure2_slot10;
                var2['completeOnboarding'] = var4;
                var4 = _closure2_slot1;
                var2['onFinish'] = var4;
                var4 = _closure2_slot2;
                var2['onClose'] = var4;
                var4 = _closure2_slot3;
                var2['landingAnimation'] = var4;
                var4 = _closure2_slot4;
                var2['isFirstOpen'] = var4;
                var1 = _closure2_slot5;
                var2['backShouldLeaveGuild'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = var7.bind(var8)(var5, var6);
            if(!var3) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var3 = var2.length;
            var2 = 0;
            if(!(!(var3 > var2))) { _fun0004_ip = 21; continue _fun0004 }
case 19:
            var2 = _closure1_slot9;
            var5 = var2.PROMPT;
            _fun0004_ip = 22; continue _fun0004;
case 21:
            var2 = _closure1_slot9;
            var5 = var2.CONNECTIONS;
case 22:
            var3 = _closure1_slot12;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 19;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.Navigator;
            var1 = {};
            var1['screens'] = var6;
            var1['initialRouteName'] = var5;
            var5 = 20;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.13/7kX;
            var5 = var6.bind(var7)(var5);
            var1['headerBackTitle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
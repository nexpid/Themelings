// app/modules/guild_onboarding/native/GuildOnboardingModal.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function headerTitle() {
        var1 = null;
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function headerRight() {
        var1 = null;
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var4 = native4;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildOnboardingModalStates;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/native/GuildOnboardingModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildOnboardingModal(arg1) {
        var2 = arg1;
        var17 = var2.guildId;
        var _closure2_slot0 = var17;
        var13 = var2.onFinish;
        var _closure2_slot1 = var13;
        var12 = var2.onClose;
        var _closure2_slot2 = var12;
        var11 = var2.landingAnimation;
        var _closure2_slot3 = var11;
        var10 = var2.isFirstOpen;
        var _closure2_slot4 = var10;
        var7 = var2.backShouldLeaveGuild;
        var _closure2_slot5 = var7;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 9;
        var2 = var9[var3];
        var4 = undefined;
        var15 = var8.bind(var4)(var2);
        var14 = var15.useStateFromStores;
        var2 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var2;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot4;
                var2 = var4.getGuild;
                var1 = _closure2_slot0;
                var4 = var2.bind(var4)(var1);
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0001_ip = 94; continue _fun0001 }
 33:
                var6 = var4.features;
                var5 = var6.has;
                var2 = _closure1_slot7;
                var2 = var2.MEMBER_VERIFICATION_GATE_ENABLED;
                var2 = var5.bind(var6)(var2);
                if(!var2) { _fun0001_ip = 91; continue _fun0001 }
 62:
                var5 = var4.features;
                var4 = var5.has;
                var3 = _closure1_slot7;
                var3 = var3.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                var3 = var4.bind(var5)(var3);
                var2 = !var3;
 91:
                var1 = var2;
 94:
                return var1;
            }
        };
        var2 = var14.bind(var15)(var6, var2);
        var _closure2_slot6 = var2;
        var3 = var9[var3];
        var15 = var8.bind(var4)(var3);
        var14 = var15.useStateFromStoresArray;
        var3 = _closure1_slot5;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            var3 = _closure1_slot5;
            var2 = var3.getOnboardingPromptsForOnboarding;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var16 = var14.bind(var15)(var6, var3);
        var _closure2_slot7 = var16;
        var6 = _closure1_slot3;
        var15 = var6.useCallback;
        var14 = new Array(1);
        var14[0] = var17;
        var3 = function(arg1, arg2, arg3) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 10;
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
        var15 = var15.bind(var6)(var3, var14);
        var _closure2_slot8 = var15;
        var18 = var6.useCallback;
        var14 = new Array(2);
        var14[0] = var17;
        var14[1] = var16;
        var3 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.completeOnboarding;
            var3 = _closure2_slot0;
            var2 = _closure2_slot7;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var14 = var18.bind(var6)(var3, var14);
        var _closure2_slot9 = var14;
        var18 = var6.useEffect;
        var3 = new Array(2);
        var3[0] = var17;
        var3[1] = var2;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot6;
                if(!var2) { _fun0002_ip = 50; continue _fun0002 }
 10:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.fetchVerificationForm;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
 50:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var18.bind(var6)(var2, var3);
        var3 = var6.useMemo;
        var2 = new Array(9);
        var2[0] = var17;
        var2[1] = var16;
        var2[2] = var15;
        var2[3] = var14;
        var2[4] = var13;
        var2[5] = var12;
        var2[6] = var11;
        var2[7] = var10;
        var2[8] = var7;
        var1 = function() {
            var3 = {};
            var2 = _closure2_slot0;
            var3['guildId'] = var2;
            var2 = _closure2_slot7;
            var3['prompts'] = var2;
            var2 = _closure2_slot8;
            var3['selectOption'] = var2;
            var2 = _closure2_slot9;
            var3['completeOnboarding'] = var2;
            var2 = _closure2_slot1;
            var3['onFinish'] = var2;
            var2 = _closure2_slot2;
            var3['onClose'] = var2;
            var2 = _closure2_slot3;
            var3['landingAnimation'] = var2;
            var2 = _closure2_slot4;
            var3['isFirstOpen'] = var2;
            var1 = _closure2_slot5;
            var3['backShouldLeaveGuild'] = var1;
            var2 = function getScreens(arg1) {
                var1 = arg1;
                var2 = var1.guildId;
                var _closure4_slot0 = var2;
                var2 = var1.prompts;
                var _closure4_slot1 = var2;
                var2 = var1.selectOption;
                var _closure4_slot2 = var2;
                var2 = var1.completeOnboarding;
                var _closure4_slot3 = var2;
                var2 = var1.onFinish;
                var _closure4_slot4 = var2;
                var2 = var1.onClose;
                var _closure4_slot5 = var2;
                var2 = var1.landingAnimation;
                var _closure4_slot6 = var2;
                var2 = var1.isFirstOpen;
                var _closure4_slot7 = var2;
                var1 = var1.backShouldLeaveGuild;
                var _closure4_slot8 = var1;
                var1 = {};
                var2 = _closure1_slot6;
                var8 = var2.PROMPT;
                var3 = {};
                var7 = true;
                var3['fullscreen'] = var7;
                var6 = _closure1_slot9;
                var3['headerTitle'] = var6;
                var5 = _closure1_slot10;
                var3['headerRight'] = var5;
                var9 = function render(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var8 = arg1;
                        var4 = _closure1_slot8;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 6;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = _closure4_slot0;
                        var1['guildId'] = var6;
                        var6 = null;
                        var9 = var6 == var8;
                        var7 = undefined;
                        if(var9) { _fun0003_ip = 62; continue _fun0003 }
 56:
                        var7 = var8.currentPrompt;
 62:
                        var8 = var6 != var7;
                        var6 = 0;
                        if(!var8) { _fun0003_ip = 74; continue _fun0003 }
 71:
                        var6 = var7;
 74:
                        var1['currentPromptIdx'] = var6;
                        var6 = _closure4_slot1;
                        var1['prompts'] = var6;
                        var6 = _closure4_slot2;
                        var1['selectOption'] = var6;
                        var6 = _closure4_slot5;
                        var1['onClose'] = var6;
                        var6 = _closure4_slot6;
                        var1['landingAnimation'] = var6;
                        var6 = _closure4_slot7;
                        var1['isFirstOpen'] = var6;
                        var5 = _closure4_slot8;
                        var1['backShouldLeaveGuild'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    }
                };
                var3['render'] = var9;
                var1[var8] = var3;
                var8 = var2.COMPLETED;
                var3 = {};
                var3['fullscreen'] = var7;
                var3['headerTitle'] = var6;
                var3['headerRight'] = var5;
                var9 = function render() {
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure4_slot0;
                    var1['guildId'] = var6;
                    var6 = _closure4_slot1;
                    var1['prompts'] = var6;
                    var5 = _closure4_slot3;
                    var1['completeOnboarding'] = var5;
                    var5 = function onClose() {
                        var3 = _closure4_slot5;
                        var1 = undefined;
                        var3 = var3.bind(var1)();
                        var2 = _closure4_slot4;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var1['onClose'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var3['render'] = var9;
                var1[var8] = var3;
                var3 = var2.RULES;
                var2 = {};
                var2['fullscreen'] = var7;
                var2['headerTitle'] = var6;
                var2['headerRight'] = var5;
                var4 = function render() {
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.RulesPrompt;
                    var1 = {};
                    var6 = _closure4_slot0;
                    var1['guildId'] = var6;
                    var5 = _closure4_slot5;
                    var1['onClose'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var2['render'] = var4;
                var1[var3] = var2;
                return var1;
            };
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
        };
        var6 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot8;
        var1 = 12;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var1['screens'] = var6;
        var5 = _closure1_slot6;
        var5 = var5.PROMPT;
        var1['initialRouteName'] = var5;
        var5 = 13;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.13/7kZ;
        var5 = var6.bind(var7)(var5);
        var1['headerBackTitle'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
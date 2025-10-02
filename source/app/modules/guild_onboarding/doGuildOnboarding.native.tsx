// app/modules/guild_onboarding/doGuildOnboarding.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _doGuildOnboarding() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = arg1;
                    var9 = var2.guildId;
                    var7 = undefined;
                    SaveGenerator(address=24);
case 4:
                    return var7;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 7;
                    var3 = var5[var3];
                    var8 = var4.bind(var7)(var3);
                    var3 = var8.hideActionSheet;
                    var3 = var3.bind(var8)();
                    var3 = 8;
                    var3 = var5[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.popAll;
                    var3 = var3.bind(var4)();
                    var4 = _closure1_slot0;
                    var3 = 9;
                    var3 = var5[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.waitForGuild;
                    var3 = var3.bind(var4)(var9);
                    SaveGenerator(address=119);
case 8:
                    return var3;
case 9:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var8 = var3.features;
                    var5 = var8.has;
                    var4 = _closure1_slot8;
                    var4 = var4.GUILD_ONBOARDING;
                    var4 = var5.bind(var8)(var4);
                    if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var10 = var3.features;
                    var8 = var10.has;
                    var5 = _closure1_slot8;
                    var5 = var5.COMMUNITY;
                    var4 = var8.bind(var10)(var5);
case 12:
                    if(!var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 10;
                    var4 = var8[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.maybeFetchOnboardingPrompts;
                    var4 = var4.bind(var5)(var9);
                    SaveGenerator(address=221);
case 16:
                    return var4;
case 17:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var8 = _closure1_slot6;
                    var5 = var8.shouldShowOnboarding;
                    var5 = var5.bind(var8)(var9);
                    if(!var5) { _fun0001_ip = 14; continue _fun0001 }
case 20:
                    var8 = _closure1_slot12;
                    var5 = function fetchLandingAsset() {
                        var1 = undefined;
                        var4 = _closure1_slot14;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var5 = var5.bind(var7)(var3);
                    SaveGenerator(address=265);
case 21:
                    return var5;
case 22:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                    var8[var9] = var5;
                    var8 = _closure1_slot15;
                    var6 = var3.id;
                    var6 = var8.bind(var7)(var6);
                    SaveGenerator(address=293);
case 25:
                    return var6;
case 26:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 27; continue _fun0001 }
case 14:
                    return var7;
case 27:
                    return var6;
case 23:
                    return var5;
case 18:
                    return var4;
case 10:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _fetchLandingAsset() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 22; continue _fun0002 }
case 28:
                    var3 = undefined;
                    var5 = undefined;
                    var6 = undefined;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var4 = 11;
                    var4 = var11[var4];
                    var8 = var10.bind(var3)(var4);
                    var7 = var8.getGuildIconSource;
                    var4 = {};
                    var12 = var9.id;
                    var4['id'] = var12;
                    var9 = var9.icon;
                    var4['icon'] = var9;
                    var9 = false;
                    var4['canAnimate'] = var9;
                    var9 = 12;
                    var9 = var11[var9];
                    var9 = var10.bind(var3)(var9);
                    var10 = var9.bind(var3)();
                    var9 = 96;
                    var9 = var9 / var10;
                    var4['size'] = var9;
                    var5 = var7.bind(var8)(var4);
case 29: // try_start_0
                    var4 = _closure1_slot4;
                    var8 = var4.ImageManager;
                    var7 = var8.getAvatarBase64;
                    var4 = var5;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=135);
case 30:
                    return var4;
case 31:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    var6 = var4;
                    var7 = _closure1_slot4;
                    var8 = var7.ImageManager;
                    var7 = var8.getDominantColors;
                    var5 = var7.bind(var8)(var5);
                    SaveGenerator(address=169);
case 34:
                    return var5;
case 35:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 13;
                    var7 = var9[var7];
                    var9 = var8.bind(var3)(var7);
                    var7 = _closure1_slot10;
                    var8 = var7.bind(var3)();
                    var10 = var6;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var7 = var6.concat;
                    var6 = 'data:image/png;base64,';
                    var7 = var7.bind(var6)(var10);
                    var6 = 0;
                    var6 = var5[var6];
                    var6 = var9.bind(var3)(var8, var7, var6);
case 38: // try_end0
                    return var6;
case 36:
                    return var5;
case 32:
                    return var4;
case 39: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var2 = _closure1_slot10;
                    var2 = var2.bind(var3)();
                    return var2;
case 22:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var4 = function openAndWaitForOnboarding(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var3 = function waitForOnboardingCompleted(arg1) {
            var5 = arg1;
            var _closure3_slot0 = var5;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.waitForOnboardingCompletion;
            var4 = var3.bind(var4)(var5);
            var3 = var4.then;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot11;
                    var2 = _closure3_slot0;
                    var4 = var4[var2];
                    var2 = null;
                    if(!(var2 != var4)) { _fun0003_ip = 40; continue _fun0003 }
case 5:
                    var2 = undefined;
                    var2 = var4.bind(var2)();
case 40:
                    var2 = _closure1_slot11;
                    var4 = _closure3_slot0;
                    var2 = delete var2[var4];
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.finishOnboarding;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = undefined;
        var2 = var3.bind(var2)(var4);
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var5 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = _closure1_slot11;
                var1 = _closure2_slot0;
                var4 = var4[var1];
                var1 = null;
                if(!(var1 == var4)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                var5 = _closure1_slot11;
                var4 = _closure2_slot0;
                var1 = arg1;
                var5[var4] = var1;
case 41:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 8;
                var5 = var4[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.pushLazy;
                var9 = _closure1_slot0;
                var5 = 17;
                var5 = var4[var5];
                var9 = var9.bind(var1)(var5);
                var5 = 16;
                var5 = var4[var5];
                var4 = var4.paths;
                var5 = var9.bind(var1)(var5, var4);
                var4 = {};
                var10 = _closure2_slot0;
                var4['guildId'] = var10;
                var8 = true;
                var4['backShouldLeaveGuild'] = var8;
                var9 = function onFinish() {
                    var1 = undefined;
                    return var1;
                };
                var4['onFinish'] = var9;
                var9 = _closure1_slot12;
                var9 = var9[var10];
                var4['landingAnimation'] = var9;
                var4['isFirstOpen'] = var8;
                var3 = _closure1_slot7;
                var4 = var6.bind(var7)(var5, var4, var3);
                var3 = var4.then;
                var2 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = _closure1_slot5;
                        var1 = var2.getGuildId;
                        var3 = var1.bind(var2)();
                        var2 = _closure2_slot0;
                        if(!(var3 !== var2)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 18;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.transitionTo;
                        var5 = _closure1_slot9;
                        var4 = var5.CHANNEL;
                        var1 = _closure2_slot0;
                        var1 = var4.bind(var5)(var1);
                        var1 = var2.bind(var3)(var1);
case 43:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var6 = var2;
        var1 = new var6[var3](var5, var4);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot15 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.NativeModules;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GUILD_ONBOARDING_MODAL_KEY;
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.GuildFeatures;
    var _closure1_slot8 = var8;
    var5 = var5.Routes;
    var _closure1_slot9 = var5;
    var5 = function getBaseAnimationData() {
        var1 = global;
        var3 = var1.JSON;
        var2 = var3.parse;
        var5 = var1.JSON;
        var4 = var5.stringify;
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 6;
        var6 = var6[var1];
        var1 = undefined;
        var1 = var7.bind(var1)(var6);
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot10 = var5;
    var5 = {};
    var _closure1_slot11 = var5;
    var5 = {};
    var _closure1_slot12 = var5;
    var5 = 19;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_onboarding/doGuildOnboarding.native.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function doGuildOnboarding() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var5;
    var3['openAndWaitForOnboarding'] = var4;
    var4 = function discardOnboardingPromise(arg1) {
        var2 = _closure1_slot11;
        var1 = arg1;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var3['discardOnboardingPromise'] = var4;
    var2 = function isOnboardingActiveForGuild(arg1) {
        var2 = _closure1_slot11;
        var1 = arg1;
        var2 = var2[var1];
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var3['isOnboardingActiveForGuild'] = var2;
    return var1;
})();
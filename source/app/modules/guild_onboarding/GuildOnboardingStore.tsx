// app/modules/guild_onboarding/GuildOnboardingStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var2 = function isOnboarding(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot7;
            var5 = var3.STARTED;
            var3 = new Array(2);
            var3[0] = var5;
            var2 = _closure1_slot7;
            var2 = var2.READY;
            var3[1] = var2;
            var2 = var3.includes;
            var1 = var2.bind(var3)(var4);
case 6:
            return var1;
        }
    };
    var _closure1_slot11 = var2;
    var1 = global;
    var10 = var1.Object;
    var5 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var5 = var4.ME;
    var _closure1_slot5 = var5;
    var4 = var4.FAVORITES;
    var _closure1_slot6 = var4;
    var4 = {};
    var5 = 'started';
    var4['STARTED'] = var5;
    var5 = 'ready';
    var4['READY'] = var5;
    var5 = 'completed';
    var4['COMPLETED'] = var5;
    var5 = 'not_applicable';
    var4['NOT_APPLICABLE'] = var5;
    var _closure1_slot7 = var4;
    var5 = {};
    var _closure1_slot8 = var5;
    var5 = {};
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var10 = var5.Store;
    var5 = function(arg1) {
        var4 = function GuildOnboardingStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 10:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'shouldShowOnboarding';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arg1;
                var1 = _closure1_slot5;
                var1 = var3 !== var1;
                if(!var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var4 = _closure1_slot6;
                var1 = var3 !== var4;
case 11:
                if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var4 = _closure1_slot11;
                var2 = _closure1_slot8;
                var3 = var2[var3];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = !var2;
                var1 = !var2;
case 13:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getOnboardingStatus';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot8;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'resetOnboardingStatus';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = arg1;
            var4 = _closure1_slot8;
            var2 = _closure1_slot7;
            var2 = var2.STARTED;
            var4[var3] = var2;
            var2 = _closure1_slot9;
            var1 = 'cover';
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getCurrentOnboardingStep';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure1_slot9;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                var1 = 'cover';
                if(!var3) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                var1 = var2;
case 15:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var5.bind(var1)(var10);
    var5 = 'GuildOnboardingStore';
    var10['displayName'] = var5;
    var5 = 7;
    var5 = var8[var5];
    var14 = var9.bind(var1)(var5);
    var5 = {};
    var11 = function handleReset() {
        var1 = {};
        _closure1_slot8 = var1;
        var1 = {};
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var5['LOGOUT'] = var11;
    var11 = function handleDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var4 = _closure1_slot8;
        var3 = var1.id;
        var3 = delete var4[var3];
        var2 = _closure1_slot9;
        var1 = var1.id;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var5['GUILD_DELETE'] = var11;
    var11 = function handleOnboardingStart(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot8;
        var1 = _closure1_slot7;
        var1 = var1.STARTED;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var5['GUILD_ONBOARDING_START'] = var11;
    var11 = function handlePromptsFetchSuccess(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var1 = var1.enabled;
            var2 = _closure1_slot8;
            var5 = var2[var3];
            var2 = _closure1_slot7;
            var2 = var2.STARTED;
            if(!(var5 === var2)) { _fun0006_ip = 17; continue _fun0006 }
case 18:
            var2 = _closure1_slot8;
            var4 = _closure1_slot7;
            if(var1) { _fun0006_ip = 6; continue _fun0006 }
case 19:
            var1 = var4.NOT_APPLICABLE;
            _fun0006_ip = 20; continue _fun0006;
case 6:
            var1 = var4.READY;
case 20:
            var2[var3] = var1;
            var1 = undefined;
            return var1;
case 17:
            var1 = false;
            return var1;
        }
    };
    var5['GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS'] = var11;
    var11 = function handlePromptsFetchFailure(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot8;
        var1 = _closure1_slot7;
        var1 = var1.NOT_APPLICABLE;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var5['GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE'] = var11;
    var11 = function handleCompleteOnboarding(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot8;
        var1 = _closure1_slot7;
        var1 = var1.COMPLETED;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var5['GUILD_ONBOARDING_COMPLETE'] = var11;
    var11 = function handleOnboardingStep(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = var1.step;
        var1 = _closure1_slot9;
        var1[var3] = var2;
        var1 = undefined;
        return var1;
    };
    var5['GUILD_ONBOARDING_SET_STEP'] = var11;
    var6 = function handleResetOnboardingStep() {
        var1 = {};
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var5['CONNECTION_OPEN'] = var6;
    var6 = var10.prototype;
    var6 = Object.create(var6, {constructor: {value: var10}});
    var15 = var6;
    var13 = var5;
    var5 = new var15[var10](var14, var13, var12);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_onboarding/GuildOnboardingStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['GuildOnboardingStatus'] = var4;
    var3['isOnboarding'] = var2;
    return var1;
})();
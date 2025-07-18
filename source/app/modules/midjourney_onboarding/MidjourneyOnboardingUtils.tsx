// app/modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function isMidjourneyOnboardingFlow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arguments[1];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 11; continue _fun0001 }
 9:
            var1 = {};
 11:
            var5 = var1.guildStore;
            var3 = null;
            if(!(var3 == var5)) { _fun0001_ip = 30; continue _fun0001 }
 23:
            var5 = _closure1_slot2;
 30:
            var6 = var5.getGuild;
            var1 = _closure1_slot5;
            var1 = var6.bind(var5)(var1);
            var3 = var3 == var1;
            var7 = undefined;
            if(var3) { _fun0001_ip = 62; continue _fun0001 }
 56:
            var7 = var1.joinedAt;
 62:
            var6 = global;
            var3 = var6.Date;
            var3 = var7 instanceof var3;
            if(!var3) { _fun0001_ip = 122; continue _fun0001 }
 77:
            var7 = var6.Date;
            var6 = var7.now;
            var6 = var6.bind(var7)();
            var7 = var1.joinedAt;
            var1 = var7.getTime;
            var1 = var1.bind(var7)();
            var6 = var6 - var1;
            var1 = 3600000;
            var3 = var6 <= var1;
 122:
            var1 = var5.getGuildCount;
            var5 = var1.bind(var5)();
            var1 = 1;
            var1 = var1 === var5;
            if(!var1) { _fun0001_ip = 145; continue _fun0001 }
 142:
            var1 = var3;
 145:
            if(!var1) { _fun0001_ip = 182; continue _fun0001 }
 148:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.isEligibleForMidjourneyOnboarding;
            var2 = arg1;
            var1 = var3.bind(var4)(var2);
 182:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
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
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.MIDJOURNEY_BOT_ID;
    var _closure1_slot4 = var8;
    var5 = var5.MIDJOURNEY_GUILD_ID;
    var _closure1_slot5 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['isMidjourneyOnboardingFlow'] = var4;
    var4 = function useIsMidjourneyOnboardingFlow(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var4 = _closure1_slot6;
            var3 = _closure2_slot0;
            var2 = {};
            var1 = _closure1_slot2;
            var2['guildStore'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useIsMidjourneyOnboardingFlow'] = var4;
    var4 = function isEligibleForMidjourneyRedirect(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = var2.isDM;
            var1 = var1.bind(var2)();
            if(!var1) { _fun0002_ip = 34; continue _fun0002 }
 16:
            var3 = var2.rawRecipients;
            var4 = var3.length;
            var3 = 1;
            var1 = var3 === var4;
 34:
            if(!var1) { _fun0002_ip = 65; continue _fun0002 }
 37:
            var3 = var2.rawRecipients;
            var2 = 0;
            var2 = var3[var2];
            var3 = var2.id;
            var2 = _closure1_slot4;
            var1 = var3 === var2;
 65:
            if(!var1) { _fun0002_ip = 86; continue _fun0002 }
 68:
            var4 = _closure1_slot6;
            var3 = undefined;
            var2 = 'app';
            var1 = var4.bind(var3)(var2);
 86:
            return var1;
        }
    };
    var3['isEligibleForMidjourneyRedirect'] = var4;
    var2 = function hasRedirectedToGuild(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var _closure3_slot0 = var3;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var5 = _closure1_slot3;
                var2 = var5.getGuildId;
                var5 = var2.bind(var5)();
                var2 = _closure2_slot0;
                if(!(var5 === var2)) { _fun0003_ip = 52; continue _fun0003 }
 44:
                var2 = undefined;
                var2 = var3.bind(var2)();
                _fun0003_ip = 122; continue _fun0003;
 52:
                var2 = global;
                var6 = var2.setTimeout;
                var5 = undefined;
                var3 = function() {
                    var3 = _closure3_slot4;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var2 = _closure3_slot1;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = 3000;
                var2 = var6.bind(var5)(var3, var2);
                var _closure3_slot2 = var2;
                var3 = function handleSelectedGuildUpdate() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = _closure1_slot3;
                        var1 = var2.getGuildId;
                        var2 = var1.bind(var2)();
                        var1 = _closure2_slot0;
                        if(!(var2 === var1)) { _fun0004_ip = 49; continue _fun0004 }
 28:
                        var3 = _closure3_slot4;
                        var2 = undefined;
                        var3 = var3.bind(var2)();
                        var1 = _closure3_slot0;
                        var1 = var1.bind(var2)();
 49:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot3 = var3;
                var2 = function cleanup() {
                    var4 = _closure1_slot3;
                    var3 = var4.removeChangeListener;
                    var2 = _closure3_slot3;
                    var2 = var3.bind(var4)(var2);
                    var2 = global;
                    var3 = var2.clearTimeout;
                    var2 = _closure3_slot2;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var _closure3_slot4 = var2;
                var2 = _closure1_slot3;
                var1 = var2.addChangeListener;
                var1 = var1.bind(var2)(var3);
 122:
                var1 = undefined;
                return var1;
            }
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['hasRedirectedToGuild'] = var2;
    return var1;
})();
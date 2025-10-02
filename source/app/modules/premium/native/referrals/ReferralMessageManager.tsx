// app/modules/premium/native/referrals/ReferralMessageManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var1 = function handleReferralMessages(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var5 = var4.type;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var6.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.PREMIUM_REFERRAL;
            if(!(var5 === var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var4.content;
            var5 = null;
            if(!(var5 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var8 = 8;
            var3 = var3[var8];
            var7 = var6.bind(var1)(var3);
            var6 = var7.isProbablyAValidSnowflake;
            var3 = var4.content;
            var3 = var6.bind(var7)(var3);
            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 9:
            var6 = _closure1_slot8;
            var3 = var6.getPremiumTypeSubscription;
            var3 = var3.bind(var6)();
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var7 = var7.bind(var1)(var6);
            var6 = var7.extractTimestamp;
            var4 = var4.content;
            var7 = var6.bind(var7)(var4);
            var6 = _closure1_slot9;
            var4 = var6.shouldFetchReferralOffer;
            var4 = var4.bind(var6)(var7);
            var3 = var5 == var3;
            if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = var4;
case 10:
            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 12:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.fetchUserTrialOffer;
            var2 = var2.bind(var3)();
case 6:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function ReferralMessageManager() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = this;
                var1 = _closure1_slot4;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot6;
                var10 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot10;
                var1 = var1.bind(var4)();
                if(var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0003_ip = 15; continue _fun0003;
case 13:
                var6 = global;
                var9 = var6.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 15:
                var1 = var3.bind(var4)(var5, var1);
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 10;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var2 = _closure1_slot11;
                var2 = var3.bind(var4)(var1, var2);
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/referrals/ReferralMessageManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
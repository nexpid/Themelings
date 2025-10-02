// app/modules/verification/VerificationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var7 = var2.UserRequiredActions;
    var _closure1_slot3 = var7;
    var2 = var2.VerificationTypes;
    var _closure1_slot4 = var2;
    var10 = var2.CAPTCHA;
    var13 = var2.EMAIL;
    var14 = var2.PHONE;
    var12 = var2.REVERIFY_EMAIL;
    var11 = var2.REVERIFY_PHONE;
    var2 = {};
    var9 = var7.REQUIRE_VERIFIED_EMAIL;
    var8 = new Array(1);
    var8[0] = var13;
    var2[var9] = var8;
    var9 = var7.REQUIRE_VERIFIED_PHONE;
    var8 = new Array(1);
    var8[0] = var14;
    var2[var9] = var8;
    var9 = var7.REQUIRE_REVERIFIED_EMAIL;
    var8 = new Array(1);
    var8[0] = var12;
    var2[var9] = var8;
    var9 = var7.REQUIRE_REVERIFIED_PHONE;
    var8 = new Array(1);
    var8[0] = var11;
    var2[var9] = var8;
    var9 = var7.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE;
    var8 = new Array(2);
    var8[0] = var13;
    var8[1] = var14;
    var2[var9] = var8;
    var9 = var7.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE;
    var8 = new Array(2);
    var8[0] = var14;
    var8[1] = var12;
    var2[var9] = var8;
    var9 = var7.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
    var8 = new Array(2);
    var8[0] = var13;
    var8[1] = var11;
    var2[var9] = var8;
    var9 = var7.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
    var8 = new Array(2);
    var8[0] = var12;
    var8[1] = var11;
    var2[var9] = var8;
    var9 = var7.REQUIRE_CAPTCHA;
    var8 = new Array(1);
    var8[0] = var10;
    var2[var9] = var8;
    var9 = var7.AGREEMENTS;
    var8 = new Array(0);
    var2[var9] = var8;
    var8 = var7.REQUIRE_SAFETY_FLOWS;
    var7 = new Array(0);
    var2[var8] = var7;
    var _closure1_slot5 = var2;
    var2 = {};
    var7 = function isPhoneReverification(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var1 = undefined;
            var1 = var1 !== var3;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.isPhoneVerified;
            var1 = var2.bind(var3)();
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot3;
            var2 = var2.REQUIRE_REVERIFIED_PHONE;
            var2 = var4 === var2;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot3;
            var5 = var5.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
            var2 = var4 === var5;
case 6:
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = _closure1_slot3;
            var3 = var3.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
            var2 = var4 === var3;
case 8:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var2['isPhoneReverification'] = var7;
    var7 = function isEmailReverification(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot3;
            var1 = var1.REQUIRE_REVERIFIED_EMAIL;
            var1 = var3 === var1;
            if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = _closure1_slot3;
            var4 = var4.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
            var1 = var3 === var4;
case 10:
            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = _closure1_slot3;
            var2 = var2.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE;
            var1 = var3 === var2;
case 12:
            return var1;
        }
    };
    var2['isEmailReverification'] = var7;
    var7 = function isFullScreenVerification(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var3 = this;
            var1 = _closure1_slot3;
            var1 = var1.REQUIRE_CAPTCHA;
            var1 = var4 === var1;
            if(var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var5 = _closure1_slot3;
            var5 = var5.REQUIRE_VERIFIED_EMAIL;
            var1 = var4 === var5;
case 13:
            if(var1) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var5 = _closure1_slot3;
            var5 = var5.REQUIRE_VERIFIED_PHONE;
            var1 = var4 === var5;
case 15:
            if(var1) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var5 = _closure1_slot3;
            var5 = var5.REQUIRE_REVERIFIED_PHONE;
            var1 = var4 === var5;
case 17:
            if(var1) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var5 = _closure1_slot3;
            var5 = var5.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
            var1 = var4 === var5;
case 19:
            if(var1) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var2 = _closure1_slot3;
            var2 = var2.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
            var1 = var4 === var2;
case 21:
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var2 = var3.isEmailReverification;
            var1 = var2.bind(var3)(var4);
case 23:
            return var1;
        }
    };
    var2['isFullScreenVerification'] = var7;
    var7 = function getVerificationTypes(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var3 = 'symbol';
            var1 = typeof var2;
            if(!(var3 !== var1)) { _fun0004_ip = 25; continue _fun0004 }
case 27:
            var1 = _closure1_slot5;
            var1 = var1[var2];
            _fun0004_ip = 10; continue _fun0004;
case 25:
            var1 = new Array(0);
case 10:
            return var1;
        }
    };
    var2['getVerificationTypes'] = var7;
    var7 = function getButtonTitle(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot4;
            var2 = var2.EMAIL;
            if(!(var2 !== var3)) { _fun0005_ip = 28; continue _fun0005 }
case 11:
            var2 = _closure1_slot4;
            var2 = var2.PHONE;
            if(!(var2 !== var3)) { _fun0005_ip = 29; continue _fun0005 }
case 13:
            var2 = _closure1_slot4;
            var2 = var2.REVERIFY_EMAIL;
            if(!(var2 !== var3)) { _fun0005_ip = 30; continue _fun0005 }
case 15:
            var2 = _closure1_slot4;
            var2 = var2.REVERIFY_PHONE;
            if(!(var2 !== var3)) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 1;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.oF6+W1;
            var2 = var3.bind(var4)(var2);
            return var2;
case 31:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 1;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.of2129;
            var2 = var3.bind(var4)(var2);
            return var2;
case 30:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 1;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.nmdPFR;
            var2 = var3.bind(var4)(var2);
            return var2;
case 29:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 1;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.mjJecn;
            var2 = var3.bind(var4)(var2);
            return var2;
case 28:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 1;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.1MPz29;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['getButtonTitle'] = var7;
    var4 = function areVerificationTypesEqual(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.isEqual;
        var2 = arg1;
        var1 = arg2;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['areVerificationTypesEqual'] = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/verification/VerificationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
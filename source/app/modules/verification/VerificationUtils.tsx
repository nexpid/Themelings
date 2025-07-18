// app/modules/verification/VerificationUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
 0:
            var3 = arg1;
            var4 = arg2;
            var1 = undefined;
            var1 = var1 !== var3;
            if(!var1) { _fun0001_ip = 25; continue _fun0001 }
 15:
            var2 = var3.isPhoneVerified;
            var1 = var2.bind(var3)();
 25:
            if(!var1) { _fun0001_ip = 82; continue _fun0001 }
 28:
            var2 = _closure1_slot3;
            var2 = var2.REQUIRE_REVERIFIED_PHONE;
            var2 = var4 === var2;
            if(var2) { _fun0001_ip = 62; continue _fun0001 }
 48:
            var5 = _closure1_slot3;
            var5 = var5.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
            var2 = var4 === var5;
 62:
            if(var2) { _fun0001_ip = 79; continue _fun0001 }
 65:
            var3 = _closure1_slot3;
            var3 = var3.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
            var2 = var4 === var3;
 79:
            var1 = var2;
 82:
            return var1;
        }
    };
    var2['isPhoneReverification'] = var7;
    var7 = function isEmailReverification(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var1 = _closure1_slot3;
            var1 = var1.REQUIRE_REVERIFIED_EMAIL;
            var1 = var3 === var1;
            if(var1) { _fun0002_ip = 37; continue _fun0002 }
 23:
            var4 = _closure1_slot3;
            var4 = var4.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
            var1 = var3 === var4;
 37:
            if(var1) { _fun0002_ip = 54; continue _fun0002 }
 40:
            var2 = _closure1_slot3;
            var2 = var2.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE;
            var1 = var3 === var2;
 54:
            return var1;
        }
    };
    var2['isEmailReverification'] = var7;
    var7 = function isFullScreenVerification(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var3 = this;
            var1 = _closure1_slot3;
            var1 = var1.REQUIRE_CAPTCHA;
            var1 = var4 === var1;
            if(var1) { _fun0003_ip = 40; continue _fun0003 }
 26:
            var5 = _closure1_slot3;
            var5 = var5.REQUIRE_VERIFIED_EMAIL;
            var1 = var4 === var5;
 40:
            if(var1) { _fun0003_ip = 57; continue _fun0003 }
 43:
            var5 = _closure1_slot3;
            var5 = var5.REQUIRE_VERIFIED_PHONE;
            var1 = var4 === var5;
 57:
            if(var1) { _fun0003_ip = 74; continue _fun0003 }
 60:
            var5 = _closure1_slot3;
            var5 = var5.REQUIRE_REVERIFIED_PHONE;
            var1 = var4 === var5;
 74:
            if(var1) { _fun0003_ip = 91; continue _fun0003 }
 77:
            var5 = _closure1_slot3;
            var5 = var5.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
            var1 = var4 === var5;
 91:
            if(var1) { _fun0003_ip = 108; continue _fun0003 }
 94:
            var2 = _closure1_slot3;
            var2 = var2.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
            var1 = var4 === var2;
 108:
            if(var1) { _fun0003_ip = 122; continue _fun0003 }
 111:
            var2 = var3.isEmailReverification;
            var1 = var2.bind(var3)(var4);
 122:
            return var1;
        }
    };
    var2['isFullScreenVerification'] = var7;
    var7 = function getVerificationTypes(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0004_ip = 33; continue _fun0004 }
 9:
            var3 = 'symbol';
            var1 = typeof var2;
            if(!(var3 !== var1)) { _fun0004_ip = 33; continue _fun0004 }
 20:
            var1 = _closure1_slot5;
            var1 = var1[var2];
            _fun0004_ip = 37; continue _fun0004;
 33:
            var1 = new Array(0);
 37:
            return var1;
        }
    };
    var2['getVerificationTypes'] = var7;
    var7 = function getButtonTitle(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot4;
            var2 = var2.EMAIL;
            if(!(var2 !== var3)) { _fun0005_ip = 315; continue _fun0005 }
 23:
            var2 = _closure1_slot4;
            var2 = var2.PHONE;
            if(!(var2 !== var3)) { _fun0005_ip = 254; continue _fun0005 }
 40:
            var2 = _closure1_slot4;
            var2 = var2.REVERIFY_EMAIL;
            if(!(var2 !== var3)) { _fun0005_ip = 193; continue _fun0005 }
 57:
            var2 = _closure1_slot4;
            var2 = var2.REVERIFY_PHONE;
            if(!(var2 !== var3)) { _fun0005_ip = 132; continue _fun0005 }
 71:
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
 132:
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
 193:
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
 254:
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
 315:
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
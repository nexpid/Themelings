// app/utils/InviteErrorUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.AbortCodes;
    var _closure1_slot4 = var7;
    var7 = var4.HelpdeskArticles;
    var _closure1_slot5 = var7;
    var7 = var4.MAX_USER_GUILDS;
    var _closure1_slot6 = var7;
    var4 = var4.MAX_USER_GUILDS_PREMIUM;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/InviteErrorUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getDescriptiveInviteError(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = _closure1_slot4;
            var1 = var1.TOO_MANY_USER_GUILDS;
            if(!(var1 !== var3)) { _fun0001_ip = 284; continue _fun0001 }
 23:
            var1 = _closure1_slot4;
            var1 = var1.GUILD_AT_CAPACITY;
            if(!(var1 !== var3)) { _fun0001_ip = 171; continue _fun0001 }
 40:
            var1 = _closure1_slot4;
            var1 = var1.GUILD_JOIN_INVITE_LIMITED_ACCESS;
            if(!(var1 !== var3)) { _fun0001_ip = 58; continue _fun0001 }
 54:
            var1 = null;
            return var1;
 58:
            var1 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 3;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var9 = var4.intl;
            var5 = var9.string;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.kJwpBQ;
            var4 = var5.bind(var9)(var4);
            var1['title'] = var4;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.ZUEGFh;
            var3 = var4.bind(var5)(var3);
            var1['description'] = var3;
            return var1;
 171:
            var1 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 3;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var9 = var4.intl;
            var5 = var9.string;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.ZZlox8;
            var4 = var5.bind(var9)(var4);
            var1['title'] = var4;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.ZUEGFh;
            var3 = var4.bind(var5)(var3);
            var1['description'] = var3;
            return var1;
 284:
            var3 = _closure1_slot3;
            var1 = var3.getCurrentUser;
            var4 = var1.bind(var3)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var6 = undefined;
            var3 = var3.bind(var6)(var1);
            var1 = var3.canUseIncreasedGuildCap;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0001_ip = 363; continue _fun0001 }
 333:
            var1 = null;
            var3 = var1 == var4;
            var1 = undefined;
            if(var3) { _fun0001_ip = 354; continue _fun0001 }
 344:
            var3 = var4.isStaff;
            var1 = var3.bind(var4)();
 354:
            if(var1) { _fun0001_ip = 363; continue _fun0001 }
 357:
            var10 = _closure1_slot6;
            _fun0001_ip = 367; continue _fun0001;
 363:
            var10 = _closure1_slot7;
 367:
            var1 = {};
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var9 = var3.intl;
            var8 = var9.formatToPlainString;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var3 = var3.t;
            var4 = var3.ttJ/ho;
            var3 = {};
            var3['quantity'] = var10;
            var3 = var8.bind(var9)(var4, var3);
            var1['title'] = var3;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.iLyuDA;
            var2 = var3.bind(var4)(var2);
            var1['description'] = var2;
            return var1;
        }
    };
    var3['getDescriptiveInviteError'] = var4;
    var2 = function getInviteError(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot4;
            var2 = var2.TOO_MANY_USER_GUILDS;
            if(!(var2 !== var3)) { _fun0002_ip = 436; continue _fun0002 }
 23:
            var2 = _closure1_slot4;
            var2 = var2.GUILD_AT_CAPACITY;
            if(!(var2 !== var3)) { _fun0002_ip = 375; continue _fun0002 }
 40:
            var2 = _closure1_slot4;
            var2 = var2.INVALID_COUNTRY_CODE;
            if(!(var2 !== var3)) { _fun0002_ip = 314; continue _fun0002 }
 57:
            var2 = _closure1_slot4;
            var2 = var2.INVALID_CANNOT_FRIEND_SELF;
            if(!(var2 !== var3)) { _fun0002_ip = 253; continue _fun0002 }
 74:
            var2 = _closure1_slot4;
            var2 = var2.INVITES_DISABLED;
            if(!(var2 !== var3)) { _fun0002_ip = 149; continue _fun0002 }
 88:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.dDZRd3;
            var2 = var3.bind(var4)(var2);
            return var2;
 149:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 3;
            var4 = var9[var2];
            var8 = undefined;
            var4 = var3.bind(var8)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var9[var2];
            var2 = var3.bind(var8)(var2);
            var2 = var2.t;
            var3 = var2.RXSeLi;
            var2 = {};
            var7 = _closure1_slot1;
            var6 = 4;
            var6 = var9[var6];
            var8 = var7.bind(var8)(var6);
            var7 = var8.getArticleURL;
            var6 = _closure1_slot5;
            var6 = var6.INVITE_DISABLED;
            var6 = var7.bind(var8)(var6);
            var2['articleLink'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 253:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.mY2R+P;
            var2 = var3.bind(var4)(var2);
            return var2;
 314:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.sRJGR0;
            var2 = var3.bind(var4)(var2);
            return var2;
 375:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.M6unND;
            var2 = var3.bind(var4)(var2);
            return var2;
 436:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.iLyuDA;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getInviteError'] = var2;
    return var1;
})();
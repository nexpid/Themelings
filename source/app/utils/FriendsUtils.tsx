// app/utils/FriendsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function validateDiscordTag(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var12 = arg1;
            var2 = _closure1_slot8;
            var1 = var2.test;
            var2 = var1.bind(var2)(var12);
            var10 = null;
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var12.includes;
            var4 = '#';
            var2 = var2.bind(var12)(var4);
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot7;
            var2 = var5.test;
            var2 = var2.bind(var5)(var12);
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = var12.split;
            var4 = var2.bind(var12)(var4);
            var2 = _closure1_slot3;
            var6 = undefined;
            var7 = 2;
            var5 = var2.bind(var6)(var4, var7);
            var2 = 0;
            var2 = var5[var2];
            var4 = 1;
            var11 = var5[var4];
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 4;
            var4 = var8[var4];
            var9 = var5.bind(var6)(var4);
            var8 = var9.track;
            var4 = _closure1_slot5;
            var5 = var4.FRIEND_REQUEST_FAILED;
            var4 = {};
            var13 = 'Invalid Username';
            var4['reason'] = var13;
            var4['query'] = var12;
            var13 = var10 != var11;
            var10 = '';
            if(!var13) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = var11;
case 6:
            var10 = var10.length;
            var4['discrim_len'] = var10;
            var2 = var2.length;
            var4['username_len'] = var2;
            var11 = _closure1_slot1;
            var2 = _closure1_slot2;
            var10 = 5;
            var13 = var2[var10];
            var14 = var11.bind(var6)(var13);
            var13 = var14.isEmail;
            var13 = var13.bind(var14)(var12);
            var4['is_email_like'] = var13;
            var10 = var2[var10];
            var11 = var11.bind(var6)(var10);
            var10 = var11.isInvite;
            var10 = var10.bind(var11)(var12);
            var4['is_invite_like'] = var10;
            var11 = _closure1_slot6;
            var10 = var11.test;
            var10 = var10.bind(var11)(var12);
            var4['is_num_only'] = var10;
            var4 = var8.bind(var9)(var5, var4);
            var5 = _closure1_slot0;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var2[var7];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.paDJBA;
            var1 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot9 = var5;
    var4 = function humanizeAbortCode(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot4;
            var2 = var2.RELATIONSHIP_INCOMING_DISABLED;
            if(!(var2 !== var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = _closure1_slot4;
            var2 = var2.TOO_MANY_FRIENDS;
            if(!(var2 !== var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = _closure1_slot4;
            var2 = var2.RELATIONSHIP_ALREADY_FRIENDS;
            if(!(var2 !== var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = _closure1_slot4;
            var2 = var2.USER_QUARANTINED;
            if(!(var2 !== var3)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var2 = _closure1_slot4;
            var2 = var2.USER_FRIEND_REQUEST_LIMITED_ACCESS;
            if(!(var2 !== var3)) { _fun0002_ip = 14; continue _fun0002 }
case 16:
            var2 = _closure1_slot4;
            var2 = var2.TOO_MANY_BLOCKED_USERS;
            if(!(var2 !== var3)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var2 = _closure1_slot4;
            var2 = var2.TOO_MANY_PENDING_OUTGOING;
            if(!(var2 !== var3)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var2 = _closure1_slot4;
            var2 = var2.RELATIONSHIP_INCOMING_BLOCKED;
            if(!(var2 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 21:
            var2 = _closure1_slot4;
            var2 = var2.RELATIONSHIP_INVALID_SELF;
            if(!(var2 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 22:
            var2 = _closure1_slot4;
            var2 = var2.RELATIONSHIP_INVALUD_USER_BOT;
            if(!(var2 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 23:
            var2 = _closure1_slot4;
            var2 = var2.RELATIONSHIP_INVALID_DISCORD_TAG;
case 6:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.paDJBA;
            var2 = var3.bind(var4)(var2);
            return var2;
case 19:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.k1K15u;
            var2 = var3.bind(var4)(var2);
            return var2;
case 17:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.sIGo1t;
            var2 = var3.bind(var4)(var2);
            return var2;
case 14:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.EouHws;
            var2 = var3.bind(var4)(var2);
            return var2;
case 12:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.VNLnen;
            var2 = var3.bind(var4)(var2);
            return var2;
case 10:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.tnBalJ;
            var2 = var3.bind(var4)(var2);
            return var2;
case 8:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 2;
            var3 = var6[var1];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.format;
            var1 = var6[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.Oxe6Ul;
            var1 = {};
            var5 = arg2;
            var1['discordTag'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.AbortCodes;
    var _closure1_slot4 = var9;
    var6 = var6.AnalyticEvents;
    var _closure1_slot5 = var6;
    var6 = /^\d+$/;
    var _closure1_slot6 = var6;
    var6 = /^(.+?@.+?\..+?|.+?#\d{4})$/;
    var _closure1_slot7 = var6;
    var6 = /^[a-zA-Z0-9_\\.]+$/;
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/FriendsUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['validateDiscordTag'] = var5;
    var5 = function isValidDiscordTag(arg1) {
        var3 = _closure1_slot9;
        var2 = undefined;
        var1 = arg1;
        var2 = var3.bind(var2)(var1);
        var1 = null;
        var1 = var1 == var2;
        return var1;
    };
    var3['isValidDiscordTag'] = var5;
    var3['humanizeAbortCode'] = var4;
    var2 = function humanizeAbortCodeForA11y(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var8 = arg2;
            var1 = _closure1_slot10;
            var5 = undefined;
            var1 = var1.bind(var5)(var4, var8);
            var3 = _closure1_slot4;
            var3 = var3.RELATIONSHIP_INCOMING_DISABLED;
            if(!(var4 === var3)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 2;
            var6 = var9[var3];
            var6 = var4.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var3 = var9[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.t;
            var4 = var3.ihb+UV;
            var3 = {};
            var3['discordTag'] = var8;
            var1 = var6.bind(var7)(var4, var3);
case 24:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = 'string';
            var2 = typeof var1;
            var3 = var3 === var2;
            var2 = 'abortCode should be a string for a11y';
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['humanizeAbortCodeForA11y'] = var2;
    return var1;
})();
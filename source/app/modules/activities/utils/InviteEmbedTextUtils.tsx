// app/modules/activities/utils/InviteEmbedTextUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function getRequestToStreamText(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var6 = arg2;
            var1 = var5.author;
            var2 = var1.id;
            var1 = arg3;
            if(!(var2 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 2;
            var2 = var10[var2];
            var8 = undefined;
            var2 = var9.bind(var8)(var2);
            var4 = var2.intl;
            var3 = var4.formatToPlainString;
            var2 = _closure1_slot1;
            var1 = 3;
            var1 = var10[var1];
            var1 = var2.bind(var8)(var1);
            var2 = var1.d/qbCw;
            var1 = {};
            var7 = 4;
            var7 = var10[var7];
            var9 = var9.bind(var8)(var7);
            var8 = var9.getName;
            var7 = var6.guild_id;
            var6 = var6.id;
            var5 = var5.author;
            var5 = var8.bind(var9)(var7, var6, var5);
            var1['username'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 2;
            var3 = var7[var3];
            var6 = undefined;
            var3 = var4.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.8B3U5O;
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot5 = var5;
    var4 = function getAskToJoinText(arg1, arg2, arg3, arg4, arg5) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var9 = arg1;
            var6 = arg2;
            var7 = arg3;
            var1 = arg5;
            var2 = var9.author;
            var3 = var2.id;
            var2 = arg4;
            if(!(var3 !== var2)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 2;
            var5 = var10[var2];
            var3 = undefined;
            var5 = var4.bind(var3)(var5);
            var8 = var5.intl;
            var5 = var8.formatToPlainString;
            var2 = var10[var2];
            var2 = var4.bind(var3)(var2);
            var3 = var2.t;
            if(var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var4 = var3.hgcjOj;
            var2 = {};
            var10 = var9.author;
            var10 = var10.globalName;
            var2['username'] = var10;
            var10 = var6.name;
            var2['appName'] = var10;
            var2 = var5.bind(var8)(var4, var2);
            _fun0002_ip = 9; continue _fun0002;
case 7:
            var4 = var3.XE8axM;
            var3 = {};
            var9 = var9.author;
            var9 = var9.globalName;
            var3['username'] = var9;
            var9 = var6.name;
            var3['appName'] = var9;
            var2 = var5.bind(var8)(var4, var3);
case 9:
            return var2;
case 5:
            var2 = var7.isPrivate;
            var2 = var2.bind(var7)();
            if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = _closure1_slot3;
            var4 = var5.getUser;
            var3 = var7.getRecipientId;
            var3 = var3.bind(var7)();
            var7 = var4.bind(var5)(var3);
            var3 = null;
            if(!(var3 == var7)) { _fun0002_ip = 12; continue _fun0002 }
case 10:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 2;
            var8 = var10[var3];
            var4 = undefined;
            var8 = var5.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var3 = var10[var3];
            var3 = var5.bind(var4)(var3);
            var4 = var3.t;
            if(var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var5 = var4.IA6uDQ;
            var3 = {};
            var10 = var6.name;
            var3['appName'] = var10;
            var3 = var8.bind(var9)(var5, var3);
            _fun0002_ip = 15; continue _fun0002;
case 13:
            var5 = var4.2N1kNT;
            var4 = {};
            var10 = var6.name;
            var4['appName'] = var10;
            var3 = var8.bind(var9)(var5, var4);
case 15:
            return var3;
case 12:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 2;
            var4 = var9[var2];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var9[var2];
            var2 = var8.bind(var3)(var2);
            var2 = var2.t;
            if(var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var3 = var2.gYVkSU;
            var1 = {};
            var8 = var7.globalName;
            var1['username'] = var8;
            var8 = var6.name;
            var1['appName'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 18; continue _fun0002;
case 16:
            var3 = var2.JddpNz;
            var2 = {};
            var7 = var7.globalName;
            var2['username'] = var7;
            var6 = var6.name;
            var2['appName'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 18:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
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
    var6 = var6.ActivityActionTypes;
    var _closure1_slot4 = var6;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activities/utils/InviteEmbedTextUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function getHeaderText(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var3 = arg2;
            var2 = _closure1_slot4;
            var2 = var2.LISTEN;
            if(!(var2 !== var3)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var2 = _closure1_slot4;
            var2 = var2.WATCH;
            if(!(var2 !== var3)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var2 = _closure1_slot4;
            var2 = var2.JOIN;
            if(!(var2 !== var3)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var2 = _closure1_slot4;
            var2 = var2.STREAM_REQUEST;
            if(!(var2 !== var3)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var2 = _closure1_slot4;
            var2 = var2.JOIN_REQUEST;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 2;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.Ckxb6u;
            var2 = var3.bind(var4)(var2);
            return var2;
case 25:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 2;
            var2 = var8[var2];
            var7 = undefined;
            var2 = var3.bind(var7)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var6 = _closure1_slot1;
            var2 = 3;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.DKHheX;
            var2 = var3.bind(var4)(var2);
            return var2;
case 23:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 2;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.pkq6Vl;
            var2 = var3.bind(var4)(var2);
            return var2;
case 21:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 2;
            var4 = var8[var2];
            var3 = undefined;
            var4 = var7.bind(var3)(var4);
            var6 = var4.intl;
            var4 = var6.formatToPlainString;
            var2 = var8[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.BBJXVl;
            var2 = {};
            var2['name'] = var5;
            var2 = var4.bind(var6)(var3, var2);
            return var2;
case 19:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 2;
            var3 = var7[var1];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var6.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1./8czHx;
            var1 = {};
            var1['name'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getHeaderText'] = var6;
    var3['getRequestToStreamText'] = var5;
    var3['getAskToJoinText'] = var4;
    var4 = function getDeadGameInviteText(arg1, arg2, arg3, arg4) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var4 = arg3;
            var3 = arg4;
            var1 = var6.activity;
            var2 = null;
            var2 = var2 == var1;
            var5 = undefined;
            var7 = undefined;
            if(var2) { _fun0004_ip = 6; continue _fun0004 }
case 27:
            var7 = var1.type;
case 6:
            var2 = _closure1_slot4;
            var2 = var2.LISTEN;
            if(!(var2 !== var7)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var2 = _closure1_slot4;
            var2 = var2.WATCH;
            if(!(var2 !== var7)) { _fun0004_ip = 28; continue _fun0004 }
case 30:
            var2 = _closure1_slot4;
            var2 = var2.JOIN;
            if(!(var2 !== var7)) { _fun0004_ip = 28; continue _fun0004 }
case 31:
            var2 = _closure1_slot4;
            var2 = var2.STREAM_REQUEST;
            if(!(var2 !== var7)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var2 = _closure1_slot4;
            var2 = var2.JOIN_REQUEST;
            var8 = _closure1_slot6;
            var12 = arg2;
            var9 = true;
            var14 = undefined;
            var13 = var6;
            var11 = var4;
            var10 = var3;
            var2 = var14[var8](var13, var12, var11, var10, var9, var8);
            return var2;
case 32:
            var2 = _closure1_slot5;
            var2 = var2.bind(var5)(var6, var4, var3);
            return var2;
case 28:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 2;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.x1UXGR;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getDeadGameInviteText'] = var4;
    var2 = function getPartyText(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = var1.activityActionType;
            var8 = var1.maxPartySize;
            var9 = var1.partySize;
            var1 = _closure1_slot4;
            var2 = var1.STREAM_REQUEST;
            var1 = '';
            if(!(var3 !== var2)) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var2 = _closure1_slot4;
            var2 = var2.LISTEN;
            if(!(var3 !== var2)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var2 = 0;
            if(!(!(var8 > var2))) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 2;
            var5 = var10[var2];
            var3 = undefined;
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var2 = var10[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.65JnWF;
            var2 = {};
            var2['partySize'] = var9;
            var2 = var5.bind(var6)(var3, var2);
            _fun0005_ip = 40; continue _fun0005;
case 38:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 2;
            var6 = var11[var3];
            var5 = undefined;
            var6 = var10.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var3 = var11[var3];
            var3 = var10.bind(var5)(var3);
            var3 = var3.t;
            var5 = var3.gLu7NT;
            var3 = {};
            var3['partySize'] = var9;
            var3['maxPartySize'] = var8;
            var2 = var6.bind(var7)(var5, var3);
case 40:
            _fun0005_ip = 41; continue _fun0005;
case 36:
            var3 = 0;
            if(!(!(var8 > var3))) { _fun0005_ip = 42; continue _fun0005 }
case 10:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 2;
            var6 = var11[var3];
            var5 = undefined;
            var6 = var10.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var3 = var11[var3];
            var3 = var10.bind(var5)(var3);
            var3 = var3.t;
            var5 = var3.UGei0t;
            var3 = {};
            var3['partySize'] = var9;
            var3 = var6.bind(var7)(var5, var3);
            _fun0005_ip = 43; continue _fun0005;
case 42:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 2;
            var6 = var11[var4];
            var5 = undefined;
            var6 = var10.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var4 = var11[var4];
            var4 = var10.bind(var5)(var4);
            var4 = var4.t;
            var5 = var4.Zogooq;
            var4 = {};
            var4['partySize'] = var9;
            var4['maxPartySize'] = var8;
            var3 = var6.bind(var7)(var5, var4);
case 43:
            var2 = var3;
case 41:
            var1 = var2;
case 34:
            return var1;
        }
    };
    var3['getPartyText'] = var2;
    return var1;
})();
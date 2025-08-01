// app/modules/activities/utils/InviteEmbedTextUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function getAskToJoinText(arg1, arg2, arg3, arg4, arg5) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arg1;
            var6 = arg2;
            var7 = arg3;
            var1 = arg5;
            var2 = var9.author;
            var3 = var2.id;
            var2 = arg4;
            if(!(var3 !== var2)) { _fun0001_ip = 173; continue _fun0001 }
 33:
            var4 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 2;
            var5 = var10[var2];
            var3 = undefined;
            var5 = var4.bind(var3)(var5);
            var8 = var5.intl;
            var5 = var8.formatToPlainString;
            var2 = var10[var2];
            var2 = var4.bind(var3)(var2);
            var3 = var2.t;
            if(var1) { _fun0001_ip = 129; continue _fun0001 }
 85:
            var4 = var3.hgcjOj;
            var2 = {};
            var10 = var9.author;
            var10 = var10.globalName;
            var2['username'] = var10;
            var10 = var6.name;
            var2['appName'] = var10;
            var2 = var5.bind(var8)(var4, var2);
            _fun0001_ip = 171; continue _fun0001;
 129:
            var4 = var3.XE8axM;
            var3 = {};
            var9 = var9.author;
            var9 = var9.globalName;
            var3['username'] = var9;
            var9 = var6.name;
            var3['appName'] = var9;
            var2 = var5.bind(var8)(var4, var3);
 171:
            return var2;
 173:
            var2 = var7.isPrivate;
            var2 = var2.bind(var7)();
            if(!var2) { _fun0001_ip = 220; continue _fun0001 }
 186:
            var5 = _closure1_slot2;
            var4 = var5.getUser;
            var3 = var7.getRecipientId;
            var3 = var3.bind(var7)();
            var7 = var4.bind(var5)(var3);
            var3 = null;
            if(!(var3 == var7)) { _fun0001_ip = 328; continue _fun0001 }
 220:
            var5 = _closure1_slot0;
            var10 = _closure1_slot1;
            var3 = 2;
            var8 = var10[var3];
            var4 = undefined;
            var8 = var5.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var3 = var10[var3];
            var3 = var5.bind(var4)(var3);
            var4 = var3.t;
            if(var1) { _fun0001_ip = 300; continue _fun0001 }
 272:
            var5 = var4.IA6uDQ;
            var3 = {};
            var10 = var6.name;
            var3['appName'] = var10;
            var3 = var8.bind(var9)(var5, var3);
            _fun0001_ip = 326; continue _fun0001;
 300:
            var5 = var4.2N1kNT;
            var4 = {};
            var10 = var6.name;
            var4['appName'] = var10;
            var3 = var8.bind(var9)(var5, var4);
 326:
            return var3;
 328:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 2;
            var4 = var9[var2];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var9[var2];
            var2 = var8.bind(var3)(var2);
            var2 = var2.t;
            if(var1) { _fun0001_ip = 415; continue _fun0001 }
 377:
            var3 = var2.gYVkSU;
            var1 = {};
            var8 = var7.globalName;
            var1['username'] = var8;
            var8 = var6.name;
            var1['appName'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 451; continue _fun0001;
 415:
            var3 = var2.JddpNz;
            var2 = {};
            var7 = var7.globalName;
            var2['username'] = var7;
            var6 = var6.name;
            var2['appName'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 451:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ActivityActionTypes;
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/utils/InviteEmbedTextUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getHeaderText(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var3 = arg2;
            var2 = _closure1_slot3;
            var2 = var2.LISTEN;
            if(!(var2 !== var3)) { _fun0002_ip = 255; continue _fun0002 }
 26:
            var2 = _closure1_slot3;
            var2 = var2.WATCH;
            if(!(var2 !== var3)) { _fun0002_ip = 187; continue _fun0002 }
 43:
            var2 = _closure1_slot3;
            var2 = var2.JOIN;
            if(!(var2 !== var3)) { _fun0002_ip = 128; continue _fun0002 }
 57:
            var2 = _closure1_slot3;
            var2 = var2.JOIN_REQUEST;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
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
 128:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
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
 187:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
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
 255:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
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
    var3['getHeaderText'] = var5;
    var3['getAskToJoinText'] = var4;
    var4 = function getDeadGameInviteText(arg1, arg2, arg3, arg4) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var8 = arg1;
            var1 = var8.activity;
            var2 = null;
            var2 = var2 == var1;
            var5 = undefined;
            var3 = undefined;
            if(var2) { _fun0003_ip = 27; continue _fun0003 }
 22:
            var3 = var1.type;
 27:
            var2 = _closure1_slot3;
            var2 = var2.LISTEN;
            if(!(var2 !== var3)) { _fun0003_ip = 108; continue _fun0003 }
 44:
            var2 = _closure1_slot3;
            var2 = var2.WATCH;
            if(!(var2 !== var3)) { _fun0003_ip = 108; continue _fun0003 }
 58:
            var2 = _closure1_slot3;
            var2 = var2.JOIN;
            if(!(var2 !== var3)) { _fun0003_ip = 108; continue _fun0003 }
 72:
            var2 = _closure1_slot3;
            var2 = var2.JOIN_REQUEST;
            var7 = _closure1_slot4;
            var12 = arg2;
            var11 = arg3;
            var10 = arg4;
            var9 = true;
            var14 = undefined;
            var13 = var8;
            var2 = var14[var7](var13, var12, var11, var10, var9, var8);
            return var2;
 108:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
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
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = var1.activityActionType;
            var7 = var1.maxPartySize;
            var8 = var1.partySize;
            var1 = _closure1_slot3;
            var1 = var1.LISTEN;
            if(!(var2 !== var1)) { _fun0004_ip = 193; continue _fun0004 }
 41:
            var1 = 0;
            if(!(!(var7 > var1))) { _fun0004_ip = 116; continue _fun0004 }
 47:
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 2;
            var4 = var9[var1];
            var2 = undefined;
            var4 = var6.bind(var2)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var1 = var9[var1];
            var1 = var6.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.65JnWF;
            var1 = {};
            var1['partySize'] = var8;
            var1 = var4.bind(var5)(var2, var1);
            _fun0004_ip = 188; continue _fun0004;
 116:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 2;
            var5 = var10[var2];
            var4 = undefined;
            var5 = var9.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var2 = var10[var2];
            var2 = var9.bind(var4)(var2);
            var2 = var2.t;
            var4 = var2.gLu7NT;
            var2 = {};
            var2['partySize'] = var8;
            var2['maxPartySize'] = var7;
            var1 = var5.bind(var6)(var4, var2);
 188:
            _fun0004_ip = 343; continue _fun0004;
 193:
            var2 = 0;
            if(!(!(var7 > var2))) { _fun0004_ip = 268; continue _fun0004 }
 199:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 2;
            var5 = var10[var2];
            var4 = undefined;
            var5 = var9.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var2 = var10[var2];
            var2 = var9.bind(var4)(var2);
            var2 = var2.t;
            var4 = var2.UGei0t;
            var2 = {};
            var2['partySize'] = var8;
            var2 = var5.bind(var6)(var4, var2);
            _fun0004_ip = 340; continue _fun0004;
 268:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var3 = 2;
            var5 = var10[var3];
            var4 = undefined;
            var5 = var9.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var10[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.t;
            var4 = var3.Zogooq;
            var3 = {};
            var3['partySize'] = var8;
            var3['maxPartySize'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 340:
            var1 = var2;
 343:
            return var1;
        }
    };
    var3['getPartyText'] = var2;
    return var1;
})();
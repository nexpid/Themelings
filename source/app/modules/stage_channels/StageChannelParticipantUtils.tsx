// app/modules/stage_channels/StageChannelParticipantUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = var4.Millis;
    var7 = var4.DAY;
    var4 = 1;
    var4 = var4 * var7;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/StageChannelParticipantUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function participantMemberInfo(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 1;
            var2 = var5[var2];
            var5 = undefined;
            var6 = var4.bind(var5)(var2);
            var4 = var6.isNewUser;
            var2 = var3.user;
            var2 = var4.bind(var6)(var2);
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.member;
            var4 = null;
            var6 = var4 == var2;
            var8 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var2.joinedAt;
case 4:
            if(!(var4 != var8)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var3.member;
            if(!(var4 != var2)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var3.member;
            var2 = var2.roles;
            var6 = var2.length;
            var2 = 0;
            if(!(!(var6 > var2))) { _fun0001_ip = 10; continue _fun0001 }
case 8:
            var2 = global;
            var6 = var2.Date;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var12 = var7;
            var6 = new var12[var6](var11);
            var7 = var6 instanceof Object ? var6 : var7;
            var6 = var7.getTime;
            var6 = var6.bind(var7)();
            var7 = var2.Date;
            var2 = var7.parse;
            var2 = var2.bind(var7)(var8);
            var6 = var6 - var2;
            var2 = _closure1_slot2;
            if(!(!(var6 < var2))) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 2;
            var6 = var9[var2];
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var2 = var9[var2];
            var2 = var8.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.u0gUWl;
            var2 = var6.bind(var7)(var2);
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var6 = 2;
            var7 = var10[var6];
            var7 = var9.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.IKE48v;
            var2 = var7.bind(var8)(var6);
case 13:
            _fun0001_ip = 14; continue _fun0001;
case 10:
            var6 = var3.role;
            var7 = var4 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var3 = var6.name;
case 15:
            if(!(var4 == var3)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 2;
            var6 = var9[var4];
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.97/NdH;
            var3 = var6.bind(var7)(var4);
case 17:
            var2 = var3;
case 14:
            _fun0001_ip = 19; continue _fun0001;
case 6:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 2;
            var4 = var8[var3];
            var4 = var7.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.CQmziY;
            var2 = var4.bind(var6)(var3);
case 19:
            return var2;
case 2:
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
            var1 = var1.VaCdhY;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['participantMemberInfo'] = var2;
    return var1;
})();
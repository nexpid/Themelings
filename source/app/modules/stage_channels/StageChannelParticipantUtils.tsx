// app/modules/stage_channels/StageChannelParticipantUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = native3;
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
 0:
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
            if(var2) { _fun0001_ip = 446; continue _fun0001 }
 50:
            var2 = var3.member;
            var4 = null;
            var6 = var4 == var2;
            var8 = undefined;
            if(var6) { _fun0001_ip = 73; continue _fun0001 }
 67:
            var8 = var2.joinedAt;
 73:
            if(!(var4 != var8)) { _fun0001_ip = 387; continue _fun0001 }
 80:
            var2 = var3.member;
            if(!(var4 != var2)) { _fun0001_ip = 116; continue _fun0001 }
 90:
            var2 = var3.member;
            var2 = var2.roles;
            var6 = var2.length;
            var2 = 0;
            if(!(!(var6 > var2))) { _fun0001_ip = 301; continue _fun0001 }
 116:
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
            if(!(!(var6 < var2))) { _fun0001_ip = 242; continue _fun0001 }
 183:
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
            _fun0001_ip = 299; continue _fun0001;
 242:
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
 299:
            _fun0001_ip = 385; continue _fun0001;
 301:
            var6 = var3.role;
            var7 = var4 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 321; continue _fun0001 }
 316:
            var3 = var6.name;
 321:
            if(!(var4 == var3)) { _fun0001_ip = 382; continue _fun0001 }
 325:
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
 382:
            var2 = var3;
 385:
            _fun0001_ip = 444; continue _fun0001;
 387:
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
 444:
            return var2;
 446:
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
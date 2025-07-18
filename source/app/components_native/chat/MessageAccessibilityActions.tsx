// app/components_native/chat/MessageAccessibilityActions.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot4 = var4;
    var4 = {};
    var5 = 'view_profile';
    var4['VIEW_PROFILE'] = var5;
    var5 = 'add_reaction';
    var4['ADD_REACTION'] = var5;
    var5 = 'reply';
    var4['REPLY'] = var5;
    var _closure1_slot5 = var4;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'components_native/chat/MessageAccessibilityActions.tsx';
    var5 = var6.bind(var7)(var5);
    var3['MessageAccessibilityAction'] = var4;
    var4 = function getMessageAccessibilityActionFromLabel(arg1) {
        var2 = {};
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var3 = 3;
        var4 = var8[var3];
        var6 = undefined;
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.iXAna2;
        var5 = var5.bind(var9)(var4);
        var1 = _closure1_slot5;
        var4 = var1.VIEW_PROFILE;
        var2[var5] = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.lfIHs7;
        var5 = var5.bind(var9)(var4);
        var4 = var1.ADD_REACTION;
        var2[var5] = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var3 = var8[var3];
        var3 = var7.bind(var6)(var3);
        var3 = var3.t;
        var3 = var3.5IEsGx;
        var3 = var4.bind(var5)(var3);
        var1 = var1.REPLY;
        var2[var3] = var1;
        var1 = arg1;
        var1 = var2[var1];
        return var1;
    };
    var3['getMessageAccessibilityActionFromLabel'] = var4;
    var2 = function createMessageAccessibilityActions(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg2;
            var1 = null;
            var2 = var1 == var6;
            var9 = undefined;
            var5 = undefined;
            if(var2) { _fun0001_ip = 26; continue _fun0001 }
 16:
            var2 = var6.getGuildId;
            var5 = var2.bind(var6)();
 26:
            if(!(var1 != var5)) { _fun0001_ip = 402; continue _fun0001 }
 33:
            if(!(var1 != var6)) { _fun0001_ip = 402; continue _fun0001 }
 40:
            var3 = _closure1_slot2;
            var2 = var3.canChatInGuild;
            var2 = var2.bind(var3)(var5);
            if(!var2) { _fun0001_ip = 87; continue _fun0001 }
 61:
            var7 = _closure1_slot3;
            var5 = var7.can;
            var3 = _closure1_slot4;
            var3 = var3.ADD_REACTIONS;
            var2 = var5.bind(var7)(var3, var6);
 87:
            if(var2) { _fun0001_ip = 112; continue _fun0001 }
 90:
            var3 = var1 == var6;
            var1 = undefined;
            if(var3) { _fun0001_ip = 109; continue _fun0001 }
 99:
            var3 = var6.isPrivate;
            var1 = var3.bind(var6)();
 109:
            var2 = var1;
 112:
            var3 = {};
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var10 = 3;
            var5 = var1[var10];
            var5 = var8.bind(var9)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var1 = var1[var10];
            var1 = var8.bind(var9)(var1);
            var1 = var1.t;
            var1 = var1.iXAna2;
            var1 = var5.bind(var7)(var1);
            var3['label'] = var1;
            var1 = _closure1_slot5;
            var1 = var1.VIEW_PROFILE;
            var3['name'] = var1;
            var1 = new Array(1);
            var1[0] = var3;
            if(!var2) { _fun0001_ip = 280; continue _fun0001 }
 198:
            var3 = var1.push;
            var2 = {};
            var11 = _closure1_slot0;
            var5 = _closure1_slot1;
            var7 = var5[var10];
            var7 = var11.bind(var9)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var5[var10];
            var5 = var11.bind(var9)(var5);
            var5 = var5.t;
            var5 = var5.lfIHs7;
            var5 = var7.bind(var8)(var5);
            var2['label'] = var5;
            var5 = _closure1_slot5;
            var5 = var5.ADD_REACTION;
            var2['name'] = var5;
            var2 = var3.bind(var1)(var2);
 280:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 4;
            var2 = var5[var2];
            var5 = var3.bind(var9)(var2);
            var3 = var5.canReplyToMessage;
            var2 = arg1;
            var2 = var3.bind(var5)(var6, var2);
            if(!var2) { _fun0001_ip = 400; continue _fun0001 }
 318:
            var3 = var1.push;
            var2 = {};
            var8 = _closure1_slot0;
            var5 = _closure1_slot1;
            var6 = var5[var10];
            var6 = var8.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var5[var10];
            var5 = var8.bind(var9)(var5);
            var5 = var5.t;
            var5 = var5.5IEsGx;
            var5 = var6.bind(var7)(var5);
            var2['label'] = var5;
            var4 = _closure1_slot5;
            var4 = var4.REPLY;
            var2['name'] = var4;
            var2 = var3.bind(var1)(var2);
 400:
            return var1;
 402:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['createMessageAccessibilityActions'] = var2;
    return var1;
})();
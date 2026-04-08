// app/modules/reactions/canReactToMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function canReactToMessageInternal(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var6 = arg2;
            var7 = arg3;
            var1 = var7[Symbol.iterator];
            var7 = var1().next;
            var8 = var7().value;
            var2 = var1;
            var5 = undefined;
            var4 = var2 === var5;
            var2 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var8;
case 2:
            var11 = undefined;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var7().value;
            var8 = var1;
            var8 = var8 === var5;
            var11 = undefined;
            var4 = var8;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var11 = var9;
            var4 = var8;
case 4:
            var9 = undefined;
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var10 = var7().value;
            var8 = var1;
            var8 = var8 === var5;
            var9 = undefined;
            var4 = var8;
            if(var8) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var9 = var10;
            var4 = var8;
case 7:
            var8 = undefined;
            if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = var7().value;
            var7 = var1;
            var7 = var7 === var5;
            var8 = undefined;
            var4 = var7;
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var8 = var10;
            var4 = var7;
case 10:
            if(var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1.return();
case 13:
            var1 = var6.getGuildId;
            var7 = var1.bind(var6)();
            var1 = var2.getCurrentUser;
            var2 = var1.bind(var2)();
            var1 = null;
            var10 = var1 != var7;
            var4 = null;
            if(!var10) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var12 = var1 == var2;
            var10 = undefined;
            if(var12) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var10 = var2.id;
case 17:
            var10 = var1 != var10;
            var4 = null;
            if(!var10) { _fun0001_ip = 15; continue _fun0001 }
case 19:
            var10 = var11.getMember;
            var2 = var2.id;
            var4 = var10.bind(var11)(var7, var2);
case 15:
            var1 = var1 != var7;
            if(!var1) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var2 = var9.canChatInGuild;
            var1 = var2.bind(var9)(var7);
case 20:
            if(!var1) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var7 = var8.can;
            var2 = _closure1_slot6;
            var2 = var2.ADD_REACTIONS;
            var1 = var7.bind(var8)(var2, var6);
case 22:
            if(var1) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var2 = var6.isPrivate;
            var1 = var2.bind(var6)();
case 24:
            if(!var1) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var2 = var6.isArchivedLockedThread;
            var2 = var2.bind(var6)();
            var1 = !var2;
case 26:
            if(!var1) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var6 = var3.state;
            var2 = _closure1_slot7;
            var2 = var2.SEND_FAILED;
            var1 = var6 !== var2;
case 28:
            if(!var1) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var6 = var3.type;
            var2 = _closure1_slot8;
            var2 = var2.THREAD_STARTER_MESSAGE;
            var1 = var6 !== var2;
case 30:
            if(!var1) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 5;
            var6 = var8[var6];
            var7 = var7.bind(var5)(var6);
            var6 = var7.hasFlag;
            var3 = var3.flags;
            var2 = _closure1_slot9;
            var2 = var2.EPHEMERAL;
            var2 = var6.bind(var7)(var3, var2);
            var1 = !var2;
case 32:
            if(!var1) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 6;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isMemberCommunicationDisabled;
            var2 = var2.bind(var3)(var4);
            var1 = !var2;
case 34:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Permissions;
    var _closure1_slot6 = var7;
    var7 = var4.MessageStates;
    var _closure1_slot7 = var7;
    var7 = var4.MessageTypes;
    var _closure1_slot8 = var7;
    var4 = var4.MessageFlags;
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reactions/canReactToMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function canReactToMessage(arg1, arg2) {
        var5 = _closure1_slot10;
        var2 = _closure1_slot5;
        var4 = new Array(4);
        var4[0] = var2;
        var2 = _closure1_slot2;
        var4[1] = var2;
        var2 = _closure1_slot3;
        var4[2] = var2;
        var1 = _closure1_slot4;
        var4[3] = var1;
        var3 = undefined;
        var2 = arg1;
        var1 = arg2;
        var1 = var5.bind(var3)(var2, var1, var4);
        return var1;
    };
    var3['canReactToMessage'] = var4;
    var2 = function useCanReactToMessage(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 7;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot5;
        var2 = new Array(4);
        var2[0] = var6;
        var6 = _closure1_slot2;
        var2[1] = var6;
        var6 = _closure1_slot3;
        var2[2] = var6;
        var5 = _closure1_slot4;
        var2[3] = var5;
        var1 = function() {
            var5 = _closure1_slot10;
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var6 = _closure1_slot5;
            var2 = new Array(4);
            var2[0] = var6;
            var6 = _closure1_slot2;
            var2[1] = var6;
            var6 = _closure1_slot3;
            var2[2] = var6;
            var1 = _closure1_slot4;
            var2[3] = var1;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCanReactToMessage'] = var2;
    return var1;
})();
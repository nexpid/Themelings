// app/modules/replies/canReplyToMessage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function hasReplyPermission(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var5 = arg3;
            var1 = var3.isPrivate;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 71; continue _fun0001 }
 19:
            var4 = var5.can;
            var1 = _closure1_slot7;
            var1 = var1.SEND_MESSAGES;
            var1 = var4.bind(var5)(var1, var3);
            if(!var1) { _fun0001_ip = 69; continue _fun0001 }
 47:
            var4 = var5.can;
            var2 = _closure1_slot7;
            var2 = var2.READ_MESSAGE_HISTORY;
            var1 = var4.bind(var5)(var2, var3);
 69:
            _fun0001_ip = 84; continue _fun0001;
 71:
            var2 = var3.isSystemDM;
            var2 = var2.bind(var3)();
            var1 = !var2;
 84:
            if(!var1) { _fun0001_ip = 142; continue _fun0001 }
 87:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.MessageTypesSets;
            var4 = var2.REPLYABLE;
            var3 = var4.has;
            var2 = arg2;
            var2 = var2.type;
            var1 = var3.bind(var4)(var2);
 142:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function _canReplyToMessage(arg1, arg2, arg3, arg4, arg5) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var4 = arg2;
            var1 = arg3;
            var5 = arg5;
            var7 = var4.hasFlag;
            var3 = _closure1_slot5;
            var3 = var3.EPHEMERAL;
            var3 = var7.bind(var4)(var3);
            var4 = var4.state;
            var2 = _closure1_slot6;
            var2 = var2.SENT;
            var4 = var4 === var2;
            var2 = var6.isArchivedThread;
            var2 = var2.bind(var6)();
            var2 = !var2;
            if(var2) { _fun0002_ip = 74; continue _fun0002 }
 71:
            var2 = var5;
 74:
            if(!var1) { _fun0002_ip = 80; continue _fun0002 }
 77:
            var1 = var4;
 80:
            if(!var1) { _fun0002_ip = 86; continue _fun0002 }
 83:
            var1 = !var3;
 86:
            if(!var1) { _fun0002_ip = 95; continue _fun0002 }
 89:
            var3 = arg4;
            var1 = !var3;
 95:
            if(!var1) { _fun0002_ip = 101; continue _fun0002 }
 98:
            var1 = var2;
 101:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.MessageFlags;
    var _closure1_slot5 = var7;
    var4 = var4.MessageStates;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/replies/canReplyToMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useCanReplyToMessage(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var8 = arg1;
            var7 = arg2;
            var _closure2_slot0 = var8;
            var _closure2_slot1 = var7;
            var4 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 6;
            var3 = var9[var3];
            var6 = undefined;
            var5 = var4.bind(var6)(var3);
            var3 = var5.useCanUnarchiveThread;
            var5 = var3.bind(var5)(var8);
            var3 = 7;
            var3 = var9[var3];
            var10 = var4.bind(var6)(var3);
            var4 = var10.useCurrentUserCommunicationDisabled;
            var9 = null;
            var3 = var9 == var8;
            var11 = undefined;
            if(var3) { _fun0003_ip = 91; continue _fun0003 }
 81:
            var3 = var8.getGuildId;
            var11 = var3.bind(var8)();
 91:
            var12 = var9 != var11;
            var3 = undefined;
            if(!var12) { _fun0003_ip = 103; continue _fun0003 }
 100:
            var3 = var11;
 103:
            var10 = var4.bind(var10)(var3);
            var4 = _closure1_slot2;
            var3 = 2;
            var4 = var4.bind(var6)(var10, var3);
            var3 = 1;
            var4 = var4[var3];
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 8;
            var3 = var11[var3];
            var11 = var10.bind(var6)(var3);
            var10 = var11.useStateFromStores;
            var12 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var12;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var1 = var4 != var1;
                    if(!var1) { _fun0004_ip = 24; continue _fun0004 }
 16:
                    var2 = _closure2_slot1;
                    var1 = var4 != var2;
 24:
                    if(!var1) { _fun0004_ip = 55; continue _fun0004 }
 27:
                    var6 = _closure1_slot8;
                    var5 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = var6.bind(var2)(var5, var4, var3);
 55:
                    return var1;
                }
            };
            var3 = var10.bind(var11)(var3, var1);
            var1 = var9 != var8;
            if(!var1) { _fun0003_ip = 189; continue _fun0003 }
 185:
            var1 = var9 != var7;
 189:
            if(!var1) { _fun0003_ip = 217; continue _fun0003 }
 192:
            var2 = _closure1_slot9;
            var18 = undefined;
            var17 = var8;
            var16 = var7;
            var15 = var3;
            var14 = var4;
            var13 = var5;
            var1 = var18[var2](var17, var16, var15, var14, var13, var12);
 217:
            return var1;
        }
    };
    var3['useCanReplyToMessage'] = var4;
    var2 = function canReplyToMessage(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 6;
            var2 = var9[var2];
            var5 = undefined;
            var3 = var8.bind(var5)(var2);
            var2 = var3.canUnarchiveThread;
            var4 = var2.bind(var3)(var7);
            var3 = _closure1_slot8;
            var2 = _closure1_slot3;
            var3 = var3.bind(var5)(var7, var6, var2);
            var10 = _closure1_slot4;
            var2 = var10.getCurrentUser;
            var11 = var2.bind(var10)();
            var2 = 7;
            var2 = var9[var2];
            var10 = var8.bind(var5)(var2);
            var9 = var10.userCommunicationDisabled;
            var2 = null;
            var12 = var2 == var11;
            var8 = undefined;
            if(var12) { _fun0005_ip = 104; continue _fun0005 }
 99:
            var8 = var11.id;
 104:
            var11 = var7.getGuildId;
            var11 = var11.bind(var7)();
            var12 = var2 != var11;
            var2 = undefined;
            if(!var12) { _fun0005_ip = 126; continue _fun0005 }
 123:
            var2 = var11;
 126:
            var9 = var9.bind(var10)(var8, var2);
            var2 = _closure1_slot9;
            var8 = _closure1_slot2;
            var1 = 2;
            var8 = var8.bind(var5)(var9, var1);
            var1 = 1;
            var14 = var8[var1];
            var18 = undefined;
            var17 = var7;
            var16 = var6;
            var15 = var3;
            var13 = var4;
            var1 = var18[var2](var17, var16, var15, var14, var13, var12);
            return var1;
        }
    };
    var3['canReplyToMessage'] = var2;
    return var1;
})();